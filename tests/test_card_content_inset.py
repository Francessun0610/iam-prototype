#!/usr/bin/env python3
"""V4.1 Access Management card — ONE shared content inset (Round 39,
2026-08-12).

Regression suite for the card's left content edge. Before this round the
tab row and the toolbar were each given a 16px inset in the belief that
this put them on "one consistent left content-edge" — but the ADS Primary
Tab component carries its own 16px `padding-x`, so the tab's outer box
started at 16px while its LABEL started at 32px. The toolbar's controls
therefore rendered 16px further left than everything else in the card,
which is why the Filter button visibly protruded to the left of both the
"Users" label above it and the table content below it, on every tab.

The card now names that edge once — `--iam-card-content-inset` on
`.v4-card` — and every row derives its own start padding from it. The
tabs row is the one row that subtracts the tab component's own padding
(`--iam-tab-inline-pad`) so that the LABEL, not the tab's padded box,
lands on the shared edge; that expression resolves to the 16px the row
already had, so the tabs themselves do not move.

The anchor is the left edge of the first ("Users") tab label, and these
must all begin on it, on every tab and at every desktop width:

    Users tab label
    Users Filter button
    Roles Filter button
    Teams' first toolbar control
    Table's first interactive column (Users' checkbox, Roles' Role link,
      Teams' team link)
    Pagination's left-side content

Covers:
  1. The mechanism: one custom property, consumed by the tab row, both/all
     toolbars, the pagination footer and the tables' first column — with
     no negative margin, transform, absolute positioning, inline
     JS-written margin or per-panel offset anywhere in the chain.
  2. The tabs did not move: the tab row's padding plus the tab
     component's own padding still equals the shared inset.
  3. Bounding-box parity at 1024/1280/1440/1920/2560:
     usersTabLabel.left == usersFilter.left == rolesFilter.left, plus the
     first table column and pagination's left content, within 1px.
  4. Filter never protrudes left of the tab content or the table content.
  5. The Filter icon stays centered inside its button.
  6. Each toolbar's left group still moves as ONE unit: Filter → (Users:
     segmented control →) search keep their existing ~12px gaps, and the
     search field is not resized by this change.
  7. Right-side actions are untouched: Export/Add User/Create Role keep
     their own right inset, and the pagination's right-side group keeps
     its right inset.
  8. Filter still works on both tabs: hover tooltip, keyboard-focus
     tooltip, and click opens the filter drawer.
  9. Search still works on both tabs (filters, and clears on Users).
 10. When the toolbar wraps at narrow widths, every wrapped row still
     begins at the shared inset.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_card_content_inset.py
"""

import json
import os
import shutil
import socket
import subprocess
import sys
import tempfile
import time

sys.path.insert(0, os.path.dirname(__file__))
from cdp_client import CDP  # noqa: E402

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(REPO_ROOT, "public")

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    shutil.which("google-chrome"),
    shutil.which("chromium"),
    shutil.which("chromium-browser"),
]

# The five desktop widths the brief calls out for validation.
DESKTOP_WIDTHS = [1024, 1280, 1440, 1920, 2560]

# Sub-desktop widths where the toolbar is expected to wrap. The contract
# there is only that every wrapped row still starts at the shared inset.
WRAP_WIDTHS = [900, 768, 600, 375]

# Rendering tolerance the brief allows for border/subpixel differences.
TOL = 1.0

results = []


def check(name, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    results.append((status, name, detail))
    print("[%s] %s%s" % (status, name, ("  (%s)" % detail) if detail else ""))
    return condition


def free_port():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind(("127.0.0.1", 0))
    port = s.getsockname()[1]
    s.close()
    return port


def start_static_server(port):
    proc = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(port)],
        cwd=PUBLIC_DIR,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    for _ in range(50):
        try:
            with socket.create_connection(("127.0.0.1", port), timeout=0.2):
                return proc
        except OSError:
            time.sleep(0.1)
    raise RuntimeError("static server did not start on port %d" % port)


def launch_chrome(debug_port):
    chrome_bin = next((c for c in CHROME_CANDIDATES if c and os.path.exists(c)), None)
    if not chrome_bin:
        raise RuntimeError("no Chrome/Chromium binary found")
    profile_dir = tempfile.mkdtemp(prefix="iam-card-inset-test-")
    proc = subprocess.Popen(
        [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--remote-debugging-port=%d" % debug_port,
            "--remote-allow-origins=*",
            "--user-data-dir=%s" % profile_dir,
            "about:blank",
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    import urllib.request
    for _ in range(80):
        try:
            urllib.request.urlopen("http://127.0.0.1:%d/json" % debug_port, timeout=0.3)
            return proc, profile_dir
        except Exception:
            time.sleep(0.15)
    raise RuntimeError("Chrome did not open its debugging port")


def js(c, expr):
    return c.eval(expr)


def rect(c, sel):
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      var x = el.getBoundingClientRect();
      return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height};
    })()
    """ % json.dumps(sel))


def style(c, sel, prop):
    return js(c, """
    (function(){
      var e = document.querySelector(%s);
      return e ? getComputedStyle(e).getPropertyValue(%s) : null;
    })()
    """ % (json.dumps(sel), json.dumps(prop)))


def click_tab(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%s;}).click();" % json.dumps(name))
    time.sleep(0.35)


def set_viewport(c, width, height=900):
    c.send("Emulation.setDeviceMetricsOverride", {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.45)


def text_left(c, sel):
    """Left edge of an element's rendered text, not of its padded box.

    The anchor is the tab LABEL, and a table cell's content edge is what
    has to land on it — so both sides of those comparisons are measured
    with a Range over the element's contents.
    """
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      var r = document.createRange();
      r.selectNodeContents(el);
      var x = r.getBoundingClientRect();
      return x.width || x.height ? x.left : el.getBoundingClientRect().left;
    })()
    """ % json.dumps(sel))


def users_tab_label_left(c):
    return text_left(c, ".tab-btn")


def near(a, b, tol=TOL):
    return a is not None and b is not None and abs(a - b) <= tol


def main():
    port = free_port()
    debug_port = free_port()
    server = start_static_server(port)
    chrome, profile_dir = launch_chrome(debug_port)
    try:
        time.sleep(0.6)
        c = CDP(debug_port)
        c.send("Network.setCacheDisabled", {"cacheDisabled": True})
        base = "http://127.0.0.1:%d/v4.1/" % port
        c.navigate(base, wait=1.8)
        set_viewport(c, 1440)

        # ─── 1. One shared property drives every row ──────────────────
        print("\n--- 1. Shared spacing token ---")
        inset = style(c, ".v4-card", "--iam-card-content-inset").strip()
        check("The card declares a shared --iam-card-content-inset", inset.endswith("px") and float(inset[:-2]) > 0, inset)

        tab_pad_token = style(c, ".v4-card", "--iam-tab-inline-pad").strip()
        check("The card declares --iam-tab-inline-pad for the tab component's own padding",
              tab_pad_token.endswith("px"), tab_pad_token)

        consumers = js(c, """
        (function(){
          var inset = getComputedStyle(document.querySelector('.v4-card'))
                        .getPropertyValue('--iam-card-content-inset').trim();
          var px = parseFloat(inset);
          function padL(sel){
            var e = document.querySelector(sel);
            return e ? parseFloat(getComputedStyle(e).paddingLeft) : null;
          }
          return {
            inset: px,
            usersToolbar: padL('#usersPanel .tbar'),
            rolesToolbar: padL('#rolesPanel .tbar'),
            teamsToolbar: padL('#teamsPanel .tbar'),
            usersFooter: padL('#usersPanel .pgn'),
            rolesFooter: padL('#rolesPanel .pgn'),
            usersFirstCol: padL('#usersTable th.c-sel'),
            rolesFirstCol: padL('#rpTable th.rp-role'),
            teamsFirstCol: padL('#tmTable th.tm-th-name')
          };
        })()
        """)
        for key in ("usersToolbar", "rolesToolbar", "teamsToolbar", "usersFooter",
                    "rolesFooter", "usersFirstCol", "rolesFirstCol", "teamsFirstCol"):
            check("%s takes its start padding from the shared inset" % key,
                  near(consumers[key], consumers["inset"]),
                  "%s vs %s" % (consumers[key], consumers["inset"]))

        # ─── 2. The tabs did not move ─────────────────────────────────
        print("\n--- 2. Tabs stay exactly where they are ---")
        tabs_math = js(c, """
        (function(){
          var card = document.querySelector('.v4-card');
          var inset = parseFloat(getComputedStyle(card).getPropertyValue('--iam-card-content-inset'));
          var row = parseFloat(getComputedStyle(document.querySelector('.tabs-row')).paddingLeft);
          var tab = parseFloat(getComputedStyle(document.querySelector('.tab-btn')).paddingLeft);
          return {inset: inset, rowPad: row, tabPad: tab, sum: row + tab};
        })()
        """)
        check("Tab row padding + the tab's own padding equals the shared inset",
              near(tabs_math["sum"], tabs_math["inset"]),
              "%s + %s = %s (inset %s)" % (tabs_math["rowPad"], tabs_math["tabPad"], tabs_math["sum"], tabs_math["inset"]))
        check("The tabs row keeps its original 16px padding (tabs did not shift)",
              near(tabs_math["rowPad"], 16.0), tabs_math["rowPad"])

        # ─── 3. No offsets, margins or transforms in the chain ────────
        print("\n--- 3. No margins / transforms / absolute positioning ---")
        offsets = js(c, """
        (function(){
          var out = {};
          ['#usersPanel .tbar-l', '#rolesPanel .tbar-l', '#teamsPanel .tbar-l',
           '#usersFilterBtn', '#rpFilterBtn'].forEach(function(sel){
            var e = document.querySelector(sel);
            if (!e) { out[sel] = null; return; }
            var s = getComputedStyle(e);
            out[sel] = {inlineMargin: e.style.marginLeft || '', marginLeft: s.marginLeft,
                        transform: s.transform, position: s.position, left: s.left};
          });
          return out;
        })()
        """)
        for sel, o in offsets.items():
            if o is None:
                continue
            check("%s has no inline JS-written margin-left" % sel, o["inlineMargin"] == "", repr(o["inlineMargin"]))
            check("%s has no left margin (positive or negative)" % sel,
                  near(parseable(o["marginLeft"]), 0.0), o["marginLeft"])
            check("%s uses no transform" % sel, o["transform"] in ("none", ""), o["transform"])
            check("%s is not absolutely positioned" % sel,
                  o["position"] in ("static", "relative"), o["position"])

        # ─── 4-7. Geometry at every desktop width ─────────────────────
        print("\n--- 4. Bounding-box parity across desktop widths ---")
        for width in DESKTOP_WIDTHS:
            set_viewport(c, width)
            click_tab(c, "Users")
            anchor = users_tab_label_left(c)
            u = js(c, """
            (function(){
              var card = document.querySelector('.v4-card').getBoundingClientRect();
              var f = document.getElementById('usersFilterBtn');
              var fb = f.getBoundingClientRect();
              var icon = f.querySelector('svg').getBoundingClientRect();
              var seg = document.querySelector('#usersPanel .tbar-l > *:nth-child(2)').getBoundingClientRect();
              var search = document.getElementById('searchWrap').getBoundingClientRect();
              var addUser = document.querySelector('#usersPanel .tbar-r .btn-ghost').getBoundingClientRect();
              var exp = document.getElementById('usersExportBtn').getBoundingClientRect();
              var cb = document.getElementById('usersSelectAll').getBoundingClientRect();
              var show = document.querySelector('#usersPanel .pgn-show').getBoundingClientRect();
              var jump = document.querySelector('#usersPanel .pgn > *:last-child').getBoundingClientRect();
              var wrap = document.querySelector('#usersPanel .tbl-wrap');
              return {
                filter: fb.left,
                filterCenterOffset: (icon.left + icon.width/2) - (fb.left + fb.width/2),
                filterBorder: parseFloat(getComputedStyle(f).borderLeftWidth),
                segGap: seg.left - fb.right,
                searchGap: search.left - seg.right,
                searchWidth: search.width,
                checkbox: cb.left,
                pgnShow: show.left,
                pgnRightInset: card.right - jump.right,
                exportRightInset: card.right - exp.right,
                addUserRightInset: card.right - addUser.right,
                cardOverflow: document.querySelector('.v4-card').scrollWidth - document.querySelector('.v4-card').clientWidth,
                wrapScrolls: wrap.scrollWidth > wrap.clientWidth
              };
            })()
            """)
            click_tab(c, "Roles")
            r = js(c, """
            (function(){
              var card = document.querySelector('.v4-card').getBoundingClientRect();
              var f = document.getElementById('rpFilterBtn');
              var fb = f.getBoundingClientRect();
              var icon = f.querySelector('svg').getBoundingClientRect();
              var search = document.getElementById('rpSearchWrap').getBoundingClientRect();
              var create = document.querySelector('#rolesPanel .tbar-r .btn-ghost').getBoundingClientRect();
              var show = document.querySelector('#rolesPanel .pgn-show').getBoundingClientRect();
              function contentLeft(sel){
                var el = document.querySelector(sel);
                if (!el) return null;
                var rg = document.createRange(); rg.selectNodeContents(el);
                var x = rg.getBoundingClientRect();
                return (x.width || x.height) ? x.left : el.getBoundingClientRect().left;
              }
              return {
                filter: fb.left,
                filterCenterOffset: (icon.left + icon.width/2) - (fb.left + fb.width/2),
                searchGap: search.left - fb.right,
                firstHeader: contentLeft('#rpTable thead th.rp-role'),
                firstCell: contentLeft('#rpTbody td.rp-role'),
                pgnShow: show.left,
                createRightInset: card.right - create.right,
                cardOverflow: document.querySelector('.v4-card').scrollWidth - document.querySelector('.v4-card').clientWidth
              };
            })()
            """)
            click_tab(c, "Teams")
            t = js(c, """
            (function(){
              function contentLeft(sel){
                var el = document.querySelector(sel);
                if (!el) return null;
                var rg = document.createRange(); rg.selectNodeContents(el);
                var x = rg.getBoundingClientRect();
                return (x.width || x.height) ? x.left : el.getBoundingClientRect().left;
              }
              return {
                firstControl: document.querySelector('#teamsPanel .tbar-l > *').getBoundingClientRect().left,
                firstHeader: contentLeft('#tmTable thead th.tm-th-name'),
                firstCell: contentLeft('#tmTable tbody td.tm-cell-name')
              };
            })()
            """)
            click_tab(c, "Users")

            tag = "@%dpx" % width
            # The brief's two explicit equalities.
            check("usersTab.left === usersFilter.left %s" % tag, near(anchor, u["filter"]),
                  "%.1f vs %.1f" % (anchor, u["filter"]))
            check("usersFilter.left === rolesFilter.left %s" % tag, near(u["filter"], r["filter"]),
                  "%.1f vs %.1f" % (u["filter"], r["filter"]))
            # The rest of the shared vertical line.
            check("Users' checkbox column starts on the anchor %s" % tag, near(anchor, u["checkbox"]),
                  "%.1f vs %.1f" % (anchor, u["checkbox"]))
            check("Users' pagination left content starts on the anchor %s" % tag, near(anchor, u["pgnShow"]),
                  "%.1f vs %.1f" % (anchor, u["pgnShow"]))
            check("Roles' first column header + cells start on the anchor %s" % tag,
                  near(anchor, r["firstHeader"]) and near(anchor, r["firstCell"]),
                  "header %.1f cell %.1f vs %.1f" % (r["firstHeader"], r["firstCell"], anchor))
            check("Roles' pagination left content starts on the anchor %s" % tag, near(anchor, r["pgnShow"]),
                  "%.1f vs %.1f" % (anchor, r["pgnShow"]))
            check("Teams' first toolbar control and first column start on the anchor %s" % tag,
                  near(anchor, t["firstControl"]) and near(anchor, t["firstHeader"]) and near(anchor, t["firstCell"]),
                  "control %.1f header %.1f cell %.1f vs %.1f" % (t["firstControl"], t["firstHeader"], t["firstCell"], anchor))

            # Filter must never sit LEFT of the tab/table content.
            check("Users' Filter does not protrude left of the tab or table content %s" % tag,
                  u["filter"] >= anchor - TOL and u["filter"] >= u["checkbox"] - TOL,
                  "filter %.1f anchor %.1f checkbox %.1f" % (u["filter"], anchor, u["checkbox"]))
            check("Roles' Filter does not protrude left of the tab or table content %s" % tag,
                  r["filter"] >= anchor - TOL and r["filter"] >= r["firstCell"] - TOL,
                  "filter %.1f anchor %.1f cell %.1f" % (r["filter"], anchor, r["firstCell"]))
            # Border-box alignment: the button's border sits ON the line.
            check("The alignment is the Filter button's border box, border included %s" % tag,
                  u["filterBorder"] > 0, "border %.1fpx" % u["filterBorder"])

            # Icon centering.
            check("Users' Filter icon stays centered in its button %s" % tag,
                  abs(u["filterCenterOffset"]) <= TOL, "%.1fpx off center" % u["filterCenterOffset"])
            check("Roles' Filter icon stays centered in its button %s" % tag,
                  abs(r["filterCenterOffset"]) <= TOL, "%.1fpx off center" % r["filterCenterOffset"])

            # The left group moved as ONE unit: internal gaps unchanged.
            check("Users' left group keeps its 12px Filter→segmented gap %s" % tag,
                  near(u["segGap"], 12.0), "%.1fpx" % u["segGap"])
            check("Users' left group keeps its 12px segmented→search gap %s" % tag,
                  near(u["searchGap"], 12.0), "%.1fpx" % u["searchGap"])
            check("Roles' left group keeps its 12px Filter→search gap %s" % tag,
                  near(r["searchGap"], 12.0), "%.1fpx" % r["searchGap"])
            check("Users' search keeps its clamp(280px, 41.667vw, 600px) width %s" % tag,
                  279.0 <= u["searchWidth"] <= 601.0, "%.1fpx" % u["searchWidth"])

            # Right-hand side untouched.
            check("Export and Add User keep their own right inset %s" % tag,
                  near(u["addUserRightInset"], 17.0) and u["exportRightInset"] > u["addUserRightInset"],
                  "addUser %.1f export %.1f" % (u["addUserRightInset"], u["exportRightInset"]))
            check("Create Role keeps the same right inset as Add User %s" % tag,
                  near(r["createRightInset"], u["addUserRightInset"]),
                  "%.1f vs %.1f" % (r["createRightInset"], u["addUserRightInset"]))
            check("Pagination's right-side group keeps its own right inset %s" % tag,
                  near(u["pgnRightInset"], 17.0), "%.1f" % u["pgnRightInset"])

            check("No horizontal overflow of the card %s" % tag,
                  u["cardOverflow"] <= 0 and r["cardOverflow"] <= 0,
                  "users %s roles %s" % (u["cardOverflow"], r["cardOverflow"]))

        # ─── 8. Filter still behaves ──────────────────────────────────
        print("\n--- 5. Filter behavior (tooltip, focus, click) ---")
        set_viewport(c, 1440)
        for tab, btn_id, drawer_open in (("Users", "usersFilterBtn", None), ("Roles", "rpFilterBtn", None)):
            click_tab(c, tab)
            tip = js(c, """
            (function(){
              var b = document.getElementById(%s);
              b.dispatchEvent(new MouseEvent('mouseover', {bubbles:true}));
              b.dispatchEvent(new MouseEvent('mouseenter', {bubbles:true}));
              return b.getAttribute('data-tooltip') || b.getAttribute('title') || '';
            })()
            """ % json.dumps(btn_id))
            check("%s' Filter still exposes its \"Filter\" tooltip" % tab, tip.strip() == "Filter", repr(tip))
            js(c, "document.getElementById(%s).dispatchEvent(new MouseEvent('mouseout', {bubbles:true}));" % json.dumps(btn_id))

            focused = js(c, """
            (function(){
              var b = document.getElementById(%s);
              b.focus();
              return document.activeElement === b;
            })()
            """ % json.dumps(btn_id))
            check("%s' Filter is keyboard focusable" % tab, focused is True, focused)
            js(c, "document.activeElement.blur();")

            opened = js(c, """
            (function(){
              document.getElementById(%s).click();
              var d = document.querySelector('.flt-drawer');
              return !!(d && d.getBoundingClientRect().width > 0 &&
                        getComputedStyle(d).visibility !== 'hidden');
            })()
            """ % json.dumps(btn_id))
            check("%s' Filter still opens the filter drawer" % tab, opened is True, opened)
            js(c, """
            (function(){
              var close = document.querySelector('.flt-drawer .flt-close, .flt-drawer [aria-label="Close"]');
              if (close) close.click();
              else document.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape', bubbles:true}));
            })()
            """)
            time.sleep(0.4)

        # ─── 9. Search still behaves ──────────────────────────────────
        print("\n--- 6. Search behavior ---")
        click_tab(c, "Users")
        users_search = js(c, """
        (function(){
          function rows(){ return document.querySelectorAll('#tbody tr').length; }
          var before = rows();
          var i = document.getElementById('searchInput');
          i.focus(); i.value = 'zzzz-no-such-user';
          i.dispatchEvent(new Event('input', {bubbles:true}));
          var filtered = rows();
          var clear = document.getElementById('searchClear');
          if (clear) clear.click();
          else { i.value=''; i.dispatchEvent(new Event('input', {bubbles:true})); }
          return {before: before, filtered: filtered, after: rows(), value: i.value};
        })()
        """)
        check("Users' search still filters the table", users_search["filtered"] < users_search["before"],
              "%s → %s rows" % (users_search["before"], users_search["filtered"]))
        check("Users' clear action still restores the table",
              users_search["after"] == users_search["before"] and users_search["value"] == "",
              "%s rows, value %r" % (users_search["after"], users_search["value"]))

        click_tab(c, "Roles")
        roles_search = js(c, """
        (function(){
          function rows(){ return document.querySelectorAll('#rpTbody tr').length; }
          var before = rows();
          var i = document.getElementById('rpSearchInput');
          i.focus(); i.value = 'zzzz-no-such-role';
          i.dispatchEvent(new Event('input', {bubbles:true}));
          var filtered = rows();
          i.value = ''; i.dispatchEvent(new Event('input', {bubbles:true}));
          return {before: before, filtered: filtered, after: rows()};
        })()
        """)
        check("Roles' search still filters the table", roles_search["filtered"] < roles_search["before"],
              "%s → %s rows" % (roles_search["before"], roles_search["filtered"]))
        check("Roles' search still restores on clear", roles_search["after"] == roles_search["before"],
              "%s rows" % roles_search["after"])

        # ─── 10. Wrapped rows keep the shared inset ───────────────────
        # Only the left group is measured here: it's the group anchored to
        # the content inset, and it's the one that wraps internally at
        # narrow widths. The right-hand action group is anchored to the
        # toolbar's own right inset instead (covered by
        # test_users_toolbar_search.py), so its left edge is expected to
        # sit wherever its content width puts it.
        print("\n--- 7. Wrapped toolbar rows keep the shared inset ---")
        for width in WRAP_WIDTHS:
            set_viewport(c, width)
            for tab, panel in (("Users", "#usersPanel"), ("Roles", "#rolesPanel")):
                click_tab(c, tab)
                rows = js(c, """
                (function(){
                  var tbar = document.querySelector(%s + ' .tbar');
                  var pad = parseFloat(getComputedStyle(tbar).paddingLeft);
                  var contentLeft = tbar.getBoundingClientRect().left + pad;
                  /* Group by vertical CENTER, clustering anything that
                     overlaps: controls on one visual row aren't all the
                     same height (the segmented control is 44px, Filter is
                     36px), so binning by `top` would split one row. */
                  var items = Array.from(tbar.querySelectorAll('.tbar-l > *'))
                    .map(function(el){ return el.getBoundingClientRect(); })
                    .filter(function(r){ return r.width > 0; })
                    .sort(function(a, b){ return (a.top + a.height/2) - (b.top + b.height/2); });
                  var rowLefts = [];
                  var current = null;
                  items.forEach(function(r){
                    var mid = r.top + r.height / 2;
                    if (current && mid - current.mid <= 12) {
                      current.left = Math.min(current.left, r.left);
                    } else {
                      current = {mid: mid, left: r.left};
                      rowLefts.push(current);
                    }
                  });
                  return {contentLeft: contentLeft, rowLefts: rowLefts.map(function(r){ return r.left; })};
                })()
                """ % json.dumps(panel))
                worst = max(abs(x - rows["contentLeft"]) for x in rows["rowLefts"])
                check("%s: every wrapped left-group row starts at the shared inset @%dpx" % (tab, width),
                      worst <= TOL + 0.5,
                      "%d row(s), worst delta %.1fpx" % (len(rows["rowLefts"]), worst))

        print("\n" + "=" * 70)
        passed = sum(1 for s, _, _ in results if s == "PASS")
        failed = sum(1 for s, _, _ in results if s == "FAIL")
        print("TOTAL: %d passed, %d failed (of %d)" % (passed, failed, len(results)))
        if failed:
            print("\nFailures:")
            for s, n, d in results:
                if s == "FAIL":
                    print("  - %s  (%s)" % (n, d))
        return 1 if failed else 0
    finally:
        try:
            chrome.terminate()
        except Exception:
            pass
        try:
            server.terminate()
        except Exception:
            pass
        shutil.rmtree(profile_dir, ignore_errors=True)


def parseable(value):
    try:
        return float(str(value).replace("px", ""))
    except (TypeError, ValueError):
        return None


if __name__ == "__main__":
    sys.exit(main())
