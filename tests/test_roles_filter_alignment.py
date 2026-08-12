#!/usr/bin/env python3
"""V4.1 Roles toolbar — Filter/search horizontal-alignment parity with
Users (Round 35, 2026-08-12).

Regression suite for reusing Users' icon-only Filter button component on
Roles, letting the search field move left into the space the old text
"Filter" button released, and preserving Create Role's right-aligned
position.

Round 38 (2026-08-12) revised the horizontal-alignment contract in
sections 4 and 8 below. Round 35 had aligned this Filter button's icon
with the "Roles" TAB LABEL by writing an inline `margin-left` on
`.tbar-l` from JS. Roles is the second tab, so its label sits ~94px right
of the toolbar's content inset — that inline margin was the large
unexplained blank area between the card's left edge and the Filter
button. Both toolbars now take their inset from `.tbar`'s own shared
padding: the tabs row and the toolbar are separate layout rows and are
deliberately not expected to share a text baseline.

Covers:
  1. Roles' Filter button is the exact same icon-only `.btn-std` instance
     Users uses: same width/height/border/radius/padding/icon size, no
     visible "Filter" text, `aria-label="Filter roles"`.
  2. Roles' Filter button shows a "Filter" tooltip on hover and keyboard
     focus (the same shared tooltip plumbing Users' Filter uses).
  3. Filter still opens the Roles filter drawer when clicked (existing
     functionality preserved).
  4. Filter starts at the toolbar's own shared content inset — the same
     x as Users' Filter, with no inline margin or leading spacer, and
     explicitly NOT out at the "Roles" tab label — at several desktop
     widths.
  5. The search field sits immediately after Filter with the same ~12px
     gap the Users toolbar uses between adjacent controls, and has
     genuinely moved left compared to the old wider text-button layout
     (not preserved at the old position with blank space in between).
  6. The search field keeps its placeholder, height, focus state, clear
     behavior, and is not stretched to the full toolbar width.
  7. Create Role stays in its current right-aligned position — unmoved,
     unresized — relative to before this change.
  8. Responsive: Filter/search/Create Role share one row at standard
     desktop widths; at narrow widths the toolbar wraps cleanly (no
     overlap/clipping), and Filter keeps the toolbar's content inset at
     every width, wrapped or not.
  9. Unrelated Roles behavior (table columns, sorting, pagination,
     Users' own Filter/search) is unaffected.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_roles_filter_alignment.py
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
    chrome_bin = next((c for c in CHROME_CANDIDATES if c and os.path.exists(c)), None) or next(
        (c for c in CHROME_CANDIDATES if c), None
    )
    if not chrome_bin:
        raise RuntimeError("no Chrome/Chromium binary found")
    profile_dir = tempfile.mkdtemp(prefix="iam-roles-filter-align-test-")
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
    return js(c, "getComputedStyle(document.querySelector(%s)).%s" % (json.dumps(sel), prop))


def click_tab(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%s;}).click();" % json.dumps(name))


def set_viewport(c, width, height=900):
    c.send("Emulation.setDeviceMetricsOverride", {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.35)


def tab_label_anchor(c, tab_index):
    return js(c, """
    (function(){
      var t = document.querySelectorAll('.tab-btn')[%d];
      var r = t.getBoundingClientRect();
      var pl = parseFloat(getComputedStyle(t).paddingLeft) || 0;
      return r.left + pl;
    })()
    """ % tab_index)


def rects_overlap(a, b):
    if not a or not b:
        return False
    return not (a["right"] <= b["left"] or b["right"] <= a["left"] or a["bottom"] <= b["top"] or b["bottom"] <= a["top"])


def main():
    port = free_port()
    debug_port = free_port()
    server = start_static_server(port)
    chrome, profile_dir = launch_chrome(debug_port)
    try:
        time.sleep(0.6)
        c = CDP(debug_port)
        base = "http://127.0.0.1:%d/v4.1/" % port
        c.navigate(base, wait=1.6)
        set_viewport(c, 1440)
        click_tab(c, "Roles")
        time.sleep(0.3)

        # ─── 1. Roles' Filter is the same icon-only component as Users' ──
        rp_text = js(c, "document.getElementById('rpFilterBtn').textContent.trim()")
        check("Roles' Filter button has no visible text label", rp_text == "", repr(rp_text))
        rp_aria = js(c, "document.getElementById('rpFilterBtn').getAttribute('aria-label')")
        check('Roles\' Filter button has aria-label="Filter roles"', rp_aria == "Filter roles", rp_aria)
        rp_icon = rect(c, "#rpFilterBtn svg")
        check("Roles' Filter icon is present", rp_icon is not None and rp_icon["width"] > 0, rp_icon)

        click_tab(c, "Users")
        time.sleep(0.2)
        users_style = js(c, """
        (function(){
          var e = document.getElementById('usersFilterBtn');
          var s = getComputedStyle(e);
          return {width:s.width, height:s.height, padding:s.padding, border:s.border,
                  borderRadius:s.borderRadius, color:s.color, backgroundColor:s.backgroundColor};
        })()
        """)
        click_tab(c, "Roles")
        time.sleep(0.2)
        roles_style = js(c, """
        (function(){
          var e = document.getElementById('rpFilterBtn');
          var s = getComputedStyle(e);
          return {width:s.width, height:s.height, padding:s.padding, border:s.border,
                  borderRadius:s.borderRadius, color:s.color, backgroundColor:s.backgroundColor};
        })()
        """)
        for prop in users_style:
            check("Roles Filter %s matches Users Filter" % prop,
                  users_style[prop] == roles_style[prop],
                  "%s vs %s" % (users_style[prop], roles_style[prop]))
        rp_rect = rect(c, "#rpFilterBtn")
        check("Roles' Filter button is 36x36px",
              abs(rp_rect["width"] - 36) <= 1 and abs(rp_rect["height"] - 36) <= 1, rp_rect)

        # ─── 2. Tooltip on hover + keyboard focus ────────────────────────
        hover_tip = js(c, """
        (function(){
          var btn = document.getElementById('rpFilterBtn');
          var r = btn.getBoundingClientRect();
          btn.dispatchEvent(new MouseEvent('mouseover', {bubbles:true, clientX:r.left+10, clientY:r.top+10}));
          var t = document.getElementById('statusTooltip');
          return t ? {visible: t.classList.contains('is-visible'), text: t.textContent} : null;
        })()
        """)
        check("Roles' Filter shows a 'Filter' tooltip on hover",
              hover_tip and hover_tip["visible"] and hover_tip["text"] == "Filter", hover_tip)
        js(c, "document.getElementById('rpFilterBtn').dispatchEvent(new MouseEvent('mouseout', {bubbles:true}));")
        # `.focus()` alone doesn't reliably synthesize a bubbling `focusin`
        # event in this CDP-driven headless environment (a CDP/eval
        # quirk, not an app bug — see the same fix in
        # test_users_toolbar_search.py); dispatch `focusin` explicitly.
        focus_tip = js(c, """
        (function(){
          var btn = document.getElementById('rpFilterBtn');
          btn.focus();
          btn.dispatchEvent(new FocusEvent('focusin', {bubbles:true}));
          var t = document.getElementById('statusTooltip');
          return t ? {visible: t.classList.contains('is-visible'), text: t.textContent} : null;
        })()
        """)
        check("Roles' Filter shows a 'Filter' tooltip on keyboard focus",
              focus_tip and focus_tip["visible"] and focus_tip["text"] == "Filter", focus_tip)
        js(c, "document.getElementById('rpFilterBtn').blur();")

        # ─── 3. Filter still opens the filter drawer ─────────────────────
        js(c, "document.getElementById('rpFilterBtn').click();")
        time.sleep(0.3)
        drawer_open = js(c, """
        (function(){
          var d = document.getElementById('rpFilterDrawer') || document.querySelector('.flt-drawer');
          return d ? getComputedStyle(d).display !== 'none' : false;
        })()
        """)
        check("Clicking Roles' Filter still opens the filter drawer", drawer_open)
        # Close it back out so it doesn't interfere with later checks.
        js(c, """
        (function(){
          var closeBtn = document.querySelector('#rpFltReset') ||
            document.querySelector('.flt-drawer [aria-label*="lose" i]');
          if (closeBtn) return;
        })()
        """)
        js(c, "document.body.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape', bubbles:true}));")
        time.sleep(0.2)

        # ─── 4. Filter starts at the shared toolbar content inset ───────
        # Round 35 aligned this button's icon with the "Roles" TAB LABEL
        # via a JS-written inline margin on `.tbar-l`. Round 38
        # (2026-08-12) reversed that: because Roles is the second tab,
        # its label sits ~94px right of the toolbar's content inset, and
        # that margin was exactly the large blank area reported between
        # the card's left edge and the Filter button. The button now
        # starts at `.tbar`'s own shared padding — the same inset the
        # Users toolbar uses — with no per-panel margin at all.
        for w in (1920, 1600, 1440, 1280, 1150):
            set_viewport(c, w)
            click_tab(c, "Roles")
            time.sleep(0.25)
            inset = js(c, """
            (function(){
              var card = document.querySelector('.v4-card').getBoundingClientRect();
              var tbar = document.querySelector('#rolesPanel .tbar');
              var pad = parseFloat(getComputedStyle(tbar).paddingLeft) || 0;
              var btn = document.getElementById('rpFilterBtn').getBoundingClientRect();
              return {fromContentEdge: (btn.left - card.left) - pad,
                      margin: document.querySelector('#rolesPanel .tbar-l').style.marginLeft || ''};
            })()
            """)
            check("Roles Filter starts at the toolbar's own content inset @%dpx" % w,
                  abs(inset["fromContentEdge"]) <= 2, inset["fromContentEdge"])
            check("No inline left margin/spacer on the Roles left group @%dpx" % w,
                  inset["margin"] == "", repr(inset["margin"]))
        set_viewport(c, 1440)
        click_tab(c, "Roles")
        time.sleep(0.3)

        # The blank gap this pass removed was the distance between the
        # card edge and Filter. Assert it's now just the toolbar padding,
        # and specifically NOT out at the "Roles" tab label (which is a
        # meaningfully different x — verified below so this can't pass by
        # coincidence).
        card_left = rect(c, ".v4-card")["left"]
        roles_anchor = tab_label_anchor(c, 1)
        filter_left = rect(c, "#rpFilterBtn")["left"]
        check("Roles tab label sits measurably right of the card edge (meaningful test)",
              roles_anchor - card_left > 40, "roles_anchor=%s card_left=%s" % (roles_anchor, card_left))
        check("Roles Filter is NOT pushed out to the 'Roles' tab label",
              roles_anchor - filter_left > 40, "anchor=%s filter=%s" % (roles_anchor, filter_left))
        check("Users and Roles toolbars share one left inset",
              abs(filter_left - js(c, """
              (function(){
                var prev = document.getElementById('rolesPanel').style.display;
                Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();
                var l = document.getElementById('usersFilterBtn').getBoundingClientRect().left;
                Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();
                return l;
              })()
              """)) <= 1.5)
        click_tab(c, "Roles")
        time.sleep(0.25)

        # ─── 5. Search field moved left, ~12px gap after Filter ─────────
        filter_rect = rect(c, "#rpFilterBtn")
        search_rect = rect(c, "#rpSearchWrap")
        gap = search_rect["left"] - filter_rect["right"]
        check("Gap between Filter and search is ~12px", abs(gap - 12) <= 1, gap)
        check("Search field sits immediately after Filter (same row, no big offset)",
              abs(search_rect["top"] - filter_rect["top"]) <= 2, "%s vs %s" % (search_rect["top"], filter_rect["top"]))
        # The old text button (icon + "Filter" + padding) was comfortably
        # wider than the new 36px icon-only square, so the search field's
        # left edge must now sit measurably to the left of where a ~76px+
        # text button would have placed it (filter_rect.left + ~76 + gap).
        old_style_search_left_estimate = filter_rect["left"] + 76 + 12
        check("Search field moved left of where the old text-button layout would have placed it",
              search_rect["left"] < old_style_search_left_estimate, search_rect["left"])

        # ─── 6. Search field behavior preserved ──────────────────────────
        placeholder = js(c, "document.getElementById('rpSearchInput').placeholder")
        check("Search placeholder text preserved",
              placeholder == "Search by role name or description", placeholder)
        search_height = rect(c, "#rpSearchWrap")["height"]
        check("Search field height unchanged (36px)", abs(search_height - 36) <= 1, search_height)
        card_rect = rect(c, ".v4-card")
        check("Search field is not stretched across the entire toolbar",
              search_rect["width"] < card_rect["width"] * 0.8, search_rect["width"])
        js(c, "document.getElementById('rpSearchInput').focus();")
        focused = js(c, "document.activeElement === document.getElementById('rpSearchInput')")
        check("Search field is keyboard-focusable", focused)
        js(c, "document.getElementById('rpSearchInput').value = 'Admin';"
             "document.getElementById('rpSearchInput').dispatchEvent(new Event('input', {bubbles:true}));")
        time.sleep(0.3)
        clear_visible = js(c, "!document.getElementById('rpSearchClear').classList.contains('hidden')")
        check("Typing in search reveals the clear button", clear_visible)
        filtered_rows = js(c, "document.querySelectorAll('#rpTbody tr').length")
        check("Search actually filters the Roles table", filtered_rows > 0)
        js(c, "document.getElementById('rpSearchClear').click();")
        time.sleep(0.2)
        search_val_after_clear = js(c, "document.getElementById('rpSearchInput').value")
        check("Clear button resets the search field", search_val_after_clear == "", repr(search_val_after_clear))

        # ─── 7. Create Role stays right-aligned/unmoved ──────────────────
        create_role_rect = rect(c, "#rolesPanel .tbar-r .btn-ghost")
        tbar_rect = rect(c, "#rolesPanel .tbar")
        check("Create Role stays right-aligned within the toolbar",
              (tbar_rect["right"] - create_role_rect["right"]) < 20,
              "%s vs %s" % (create_role_rect["right"], tbar_rect["right"]))
        create_role_text = js(c, "document.querySelector('#rolesPanel .tbar-r .btn-ghost').textContent.trim()")
        check("Create Role label unchanged", "Create Role" in create_role_text, create_role_text)

        # ─── 8. Responsive behavior ───────────────────────────────────────
        for w in (1024, 900, 768, 480):
            set_viewport(c, w)
            click_tab(c, "Roles")
            time.sleep(0.3)
            fb = rect(c, "#rpFilterBtn")
            sw = rect(c, "#rpSearchWrap")
            cr = rect(c, "#rolesPanel .tbar-r .btn-ghost")
            check("Filter and search never overlap @%dpx" % w, not rects_overlap(fb, sw), "%s vs %s" % (fb, sw))
            check("Filter and Create Role never overlap @%dpx" % w, not rects_overlap(fb, cr), "%s vs %s" % (fb, cr))
            fb_clipped = fb["width"] < 30 or fb["height"] < 30
            check("Filter button is never clipped @%dpx" % w, not fb_clipped, fb)
            overflow = js(c, "document.documentElement.scrollWidth - document.documentElement.clientWidth")
            check("No horizontal page overflow @%dpx" % w, overflow <= 1, overflow)
            # Filter keeps the toolbar's own content inset at every
            # width, wrapped or not — it's the shared `.tbar` padding,
            # not a measured offset that could drift per breakpoint.
            inset_now = js(c, """
            (function(){
              var card = document.querySelector('.v4-card').getBoundingClientRect();
              var tbar = document.querySelector('#rolesPanel .tbar');
              var pad = parseFloat(getComputedStyle(tbar).paddingLeft) || 0;
              return (document.getElementById('rpFilterBtn').getBoundingClientRect().left - card.left) - pad;
            })()
            """)
            check("Filter keeps the toolbar's content inset @%dpx" % w, abs(inset_now) <= 2, inset_now)
        c.send("Emulation.clearDeviceMetricsOverride")
        time.sleep(0.2)

        # ─── 9. Unrelated behavior unaffected ────────────────────────────
        set_viewport(c, 1440)
        click_tab(c, "Roles")
        time.sleep(0.3)
        header_texts = js(c, """
        Array.from(document.querySelectorAll('#rpTable thead th')).map(function(th){
          var span = th.querySelector('.th-inner span:first-child');
          return span ? span.textContent.trim() : th.textContent.trim();
        })
        """)
        check("Roles table columns unchanged (Role | Functions | Created By | Create Date)",
              header_texts == ["Role", "Functions", "Created By", "Create Date"], header_texts)
        js(c, "document.querySelector('#rpTable thead th.rp-role').click();")
        time.sleep(0.2)
        sort_state = js(c, "document.querySelector('#rpTable thead th.rp-role').getAttribute('aria-sort')")
        check("Roles table sorting still works", sort_state in ("ascending", "descending"), sort_state)
        pgn_present = js(c, "!!document.getElementById('rpPgn')")
        check("Roles pagination still present", pgn_present)

        # The two footer counts must agree with each other and with the
        # rendered data. `#rpTotalLabel` used to be a literal in index.html
        # that nothing updated, so it still said "11" after the workbook
        # migration left eight canonical roles.
        counts = js(c, """
        (function(){
          var rows = document.querySelectorAll('#rpTbody tr').length;
          var item = document.getElementById('rpItemCount').textContent.trim();
          var total = document.getElementById('rpTotalLabel').textContent.trim();
          return {rows: rows,
                  item: parseInt((item.match(/(\\d+)/) || [])[1], 10),
                  total: parseInt((total.match(/(\\d+)/) || [])[1], 10)};
        })()
        """)
        check("Roles footer 'of N items' matches 'Total roles: N'",
              counts["item"] == counts["total"], json.dumps(counts))
        check("Roles footer count matches the number of role records rendered",
              counts["item"] == counts["rows"], json.dumps(counts))
        js(c, "(function(){var i=document.getElementById('rpSearchInput');"
              "var s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;"
              "s.call(i,'Vendor'); i.dispatchEvent(new Event('input',{bubbles:true}));})()")
        time.sleep(0.4)
        filtered = js(c, """
        (function(){
          var item = document.getElementById('rpItemCount').textContent.trim();
          var total = document.getElementById('rpTotalLabel').textContent.trim();
          return {rows: document.querySelectorAll('#rpTbody tr').length,
                  item: parseInt((item.match(/(\\d+)/) || [])[1], 10),
                  total: parseInt((total.match(/(\\d+)/) || [])[1], 10)};
        })()
        """)
        check("Searching narrows both footer counts together",
              filtered["item"] == filtered["total"] == filtered["rows"] and filtered["item"] < counts["item"],
              "%s -> %s" % (json.dumps(counts), json.dumps(filtered)))
        js(c, "(function(){var i=document.getElementById('rpSearchInput');"
              "var s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;"
              "s.call(i,''); i.dispatchEvent(new Event('input',{bubbles:true}));})()")
        time.sleep(0.4)

        click_tab(c, "Users")
        time.sleep(0.2)
        users_filter_text = js(c, "document.getElementById('usersFilterBtn').textContent.trim()")
        check("Users' own Filter button is unaffected (still icon-only, unchanged)", users_filter_text == "")
        check("Users' own search field is present and unaffected",
              js(c, "!!document.getElementById('searchWrap')"))

        print("\n" + "=" * 70)
        passed = sum(1 for r in results if r[0] == "PASS")
        failed = sum(1 for r in results if r[0] == "FAIL")
        print("TOTAL: %d passed, %d failed (of %d)" % (passed, failed, len(results)))
        if failed:
            print("\nFAILED CHECKS:")
            for status, name, detail in results:
                if status == "FAIL":
                    print("  - %s%s" % (name, ("  (%s)" % detail) if detail else ""))
        return 0 if failed == 0 else 1
    finally:
        try:
            chrome.terminate()
            chrome.wait(timeout=5)
        except Exception:
            pass
        try:
            server.terminate()
            server.wait(timeout=5)
        except Exception:
            pass
        try:
            shutil.rmtree(profile_dir, ignore_errors=True)
        except Exception:
            pass


if __name__ == "__main__":
    sys.exit(main())
