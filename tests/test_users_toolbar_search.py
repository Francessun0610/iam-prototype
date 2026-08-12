#!/usr/bin/env python3
"""V4.1 Users toolbar — restored search field, icon-only Filter, shared
toolbar inset (Round 38, 2026-08-12).

Supersedes test_toolbar_no_search.py, whose central premise was the
opposite of this one: Round 24 (2026-08-11) had deleted the Users
toolbar's search field outright and that suite asserted it was gone.
Round 38 restores it. Everything Round 24 got right — the icon-only
Filter button, the compact left cluster, the grouped/right-aligned
Export + Add User — is still asserted here; only the "search must not
exist" checks are inverted into "search must exist and work".

Two regressions are pinned down by this suite:

  1. The missing Users search field. Its markup (`#searchWrap` and
     children) was removed from index.html while every consumer — query
     state, filtering, the recent-search dropdown, the clear action,
     keyboard handling — survived untouched in app.js behind an
     `if (searchWrap)` guard. Restoring the original markup and ids
     therefore restores the original behavior; this suite asserts the
     behavior, not just the presence of an input, so a future
     "restoration" that reimplements a second local filter would fail.

  2. The toolbar's left inset. Rounds 34/35 aligned each panel's Filter
     icon to the active tab's LABEL by writing an inline `margin-left`
     on `.tbar-l` from JS. For Roles — the second tab — that computed a
     94px margin, i.e. the large unexplained blank area between the
     card's left edge and the Filter button. Both toolbars now take
     their inset from `.tbar`'s own shared padding, so this suite
     asserts the two tabs' Filter buttons start at exactly the same
     x-coordinate and that no inline margin/spacer is involved.

Covers:
  1. The search field exists, is visible, uses the shared `.ads-search`
     component, carries the "Search by name, email, or role" placeholder
     plus an accessible label, and sits immediately after the
     Internal/External segmented control.
  2. Its original behavior is intact: typing filters the table, the
     clear button appears and restores the full result set, Enter
     records a recent search, and the suggestion dropdown opens on click
     anchored to the field.
  3. Field geometry: 36px tall, ~16px text inset, entered text never
     overlaps the clear button, and the clear "x" is vertically centered
     ~12-16px from the right edge inside a 24x24 clickable box.
  4. Responsive width: never exceeds 600px, reaches 600px at 1440px+,
     shrinks fluidly below that, and shrinks BEFORE the right-hand
     action group wraps (never wraps to its own row while space to
     shrink remains, never leaves a blank placeholder).
  5. Filter is a real, visible, icon-only button: 36x36px, no text
     label, centered funnel icon, `aria-label="Filter users"`.
  6. Filter shows a "Filter" tooltip on hover and on keyboard focus, and
     hides again on mouseout/blur.
  7. Filter still opens the filter drawer when clicked.
  8. Left cluster order is Filter -> Internal/External -> search, with
     ~12px between each, forming one group (not spread across the row).
  9. Export + Add User stay grouped and right-aligned.
 10. Users' and Roles' Filter buttons are the same shared icon-only
     component AND start at the same shared toolbar content inset, with
     no inline margin, spacer or reserved leading width on either tab.
 11. Responsive: no overlap, clipping or horizontal page overflow across
     a range of widths; when the toolbar wraps, each group stays intact
     and the wrapped row aligns to the same content inset.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_users_toolbar_search.py
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

PLACEHOLDER = "Search by name, email, or role"

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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-users-toolbar-")
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


def rects_overlap(a, b):
    """True 2D rectangle intersection — two elements on different wrapped
    rows never count as overlapping even if their horizontal ranges do."""
    if a is None or b is None:
        return False
    return not (a["right"] <= b["left"] + 0.5 or b["right"] <= a["left"] + 0.5 or
                a["bottom"] <= b["top"] + 0.5 or b["bottom"] <= a["top"] + 0.5)


def same_row(a, b):
    return a is not None and b is not None and abs(a["top"] - b["top"]) < 8


def click_tab(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%s;}).click();" % json.dumps(name))


def set_viewport(c, w, h=900):
    c.send("Emulation.setDeviceMetricsOverride",
           {"width": w, "height": h, "deviceScaleFactor": 1, "mobile": w < 500})
    time.sleep(0.25)


def type_value(c, sel, value):
    js(c, """
    (function(){
      var inp = document.querySelector(%s);
      inp.focus();
      var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(inp, %s);
      inp.dispatchEvent(new Event('input', {bubbles:true}));
    })()
    """ % (json.dumps(sel), json.dumps(value)))
    time.sleep(0.35)


def real_click(c, sel):
    r = rect(c, sel)
    x, y = r["left"] + r["width"] / 2, r["top"] + r["height"] / 2
    for t in ("mousePressed", "mouseReleased"):
        c.send("Input.dispatchMouseEvent", {"type": t, "x": x, "y": y, "button": "left", "clickCount": 1})
    time.sleep(0.35)


def row_count(c):
    return js(c, "document.querySelectorAll('#tbody tr').length")


def toolbar_inset(c, panel, btn_id):
    """Filter button's left edge relative to the card's left edge."""
    return js(c, """
    (function(){
      var card = document.querySelector('.v4-card').getBoundingClientRect();
      var b = document.getElementById(%s).getBoundingClientRect();
      return Math.round((b.left - card.left) * 10) / 10;
    })()
    """ % json.dumps(btn_id))


def main():
    port = free_port()
    debug_port = free_port()
    server = start_static_server(port)
    chrome, profile_dir = launch_chrome(debug_port)
    try:
        time.sleep(0.6)
        c = CDP(debug_port)
        base = "http://127.0.0.1:%d/v4.1/" % port
        c.navigate(base, wait=1.8)
        set_viewport(c, 1440)
        click_tab(c, "Users")
        time.sleep(0.25)

        # ─── 1. Search field exists, visible, correct component/labels ──
        for sel in ("#searchWrap", "#searchInput", "#searchClear", "#searchIco", "#searchDropdown", "#searchDDContent"):
            check("Restored: %s exists" % sel, js(c, "!!document.querySelector(%s)" % json.dumps(sel)))
        check("Search field is inside the Users toolbar's left group",
              js(c, "!!document.querySelector('#usersPanel .tbar-l #searchWrap')"))
        check("Search field reuses the shared .ads-search component (not a bespoke rebuild)",
              js(c, "document.getElementById('searchWrap').classList.contains('ads-search')"))
        search_rect = rect(c, "#searchWrap")
        check("Search field is visibly rendered (non-zero box, not display:none)",
              search_rect["width"] > 100 and style(c, "#searchWrap", "display") != "none",
              search_rect)
        check("Placeholder is %r" % PLACEHOLDER,
              js(c, "document.getElementById('searchInput').placeholder") == PLACEHOLDER,
              js(c, "document.getElementById('searchInput').placeholder"))
        check("Search input has an accessible label",
              js(c, "document.getElementById('searchInput').getAttribute('aria-label')") == PLACEHOLDER)
        check("Clear button has an accessible label",
              js(c, "document.getElementById('searchClear').getAttribute('aria-label')") == "Clear search")
        order_ok = js(c, """
        (function(){
          var kids = Array.from(document.querySelector('#usersPanel .tbar-l').children);
          return kids.indexOf(document.getElementById('usersFilterBtn')) === 0 &&
                 kids.indexOf(document.getElementById('userViewToggle')) === 1 &&
                 kids.indexOf(document.getElementById('searchWrap')) === 2;
        })()
        """)
        check("Order is Filter -> Internal/External -> search", order_ok)

        # ─── 2. Original search behavior is intact ──────────────────────
        baseline_rows = row_count(c)
        check("Table renders rows before searching", baseline_rows > 1, baseline_rows)
        check("Clear button is hidden while the field is empty",
              js(c, "document.getElementById('searchClear').classList.contains('hidden')"))

        type_value(c, "#searchInput", "marge")
        filtered_rows = row_count(c)
        first_name = js(c, "(document.querySelector('#tbody tr .name-link')||{}).textContent || ''")
        check("Typing a query filters the table", 0 < filtered_rows < baseline_rows,
              "baseline=%s filtered=%s" % (baseline_rows, filtered_rows))
        check("Filtered result matches the query", "Marge" in first_name, first_name)
        check("Clear button appears once the field has a value",
              not js(c, "document.getElementById('searchClear').classList.contains('hidden')"))

        js(c, "document.getElementById('searchClear').click();")
        time.sleep(0.35)
        check("Clear empties the input", js(c, "document.getElementById('searchInput').value") == "")
        check("Clear restores the unfiltered result set", row_count(c) == baseline_rows,
              "%s vs %s" % (row_count(c), baseline_rows))
        check("Clear button hides itself again",
              js(c, "document.getElementById('searchClear').classList.contains('hidden')"))

        # Enter commits the query to the shared recent-searches store —
        # proves this is the original implementation, not a new local
        # filter bolted on top of the restored markup.
        js(c, "localStorage.removeItem('iam_recent_searches');")
        type_value(c, "#searchInput", "burns")
        js(c, "document.getElementById('searchInput').dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));")
        time.sleep(0.35)
        recent = js(c, "JSON.parse(localStorage.getItem('iam_recent_searches') || '[]')")
        check("Enter records the query in the shared recent-searches store",
              isinstance(recent, list) and "burns" in recent, recent)
        js(c, "document.getElementById('searchClear').click();")
        time.sleep(0.3)

        real_click(c, "#searchInput")
        dd_open = js(c, "document.getElementById('searchDropdown').classList.contains('open')")
        check("Clicking the field opens the suggestion dropdown", dd_open)
        # The dropdown is position:fixed and JS-positioned against the
        # INPUT (not the wrapper), matching the original v4 behavior.
        dd_anchor = js(c, """
        (function(){
          var i = document.getElementById('searchInput').getBoundingClientRect();
          var d = document.getElementById('searchDropdown').getBoundingClientRect();
          return {dl: Math.round(d.left), il: Math.round(i.left),
                  dw: Math.round(d.width), iw: Math.round(i.width),
                  below: d.top >= i.top};
        })()
        """)
        check("Dropdown is anchored to the field (same left edge and width)",
              abs(dd_anchor["dl"] - dd_anchor["il"]) <= 1.5 and abs(dd_anchor["dw"] - dd_anchor["iw"]) <= 1.5,
              dd_anchor)
        js(c, "document.getElementById('searchInput').blur(); document.body.click();")
        time.sleep(0.3)

        check("Search input is keyboard-focusable",
              js(c, "(function(){var i=document.getElementById('searchInput'); i.focus(); return document.activeElement===i;})()"))
        js(c, "document.getElementById('searchInput').blur();")

        # ─── 3. Field geometry: height, text inset, centered clear "x" ───
        type_value(c, "#searchInput", "montgomery")
        geo = js(c, """
        (function(){
          var w = document.getElementById('searchWrap').getBoundingClientRect();
          var i = document.getElementById('searchInput').getBoundingClientRect();
          var b = document.getElementById('searchClear').getBoundingClientRect();
          return {h: w.height,
                  textInset: i.left - w.left,
                  clearRightInset: w.right - b.right,
                  clearCenterOffset: ((b.top + b.bottom) / 2) - ((w.top + w.bottom) / 2),
                  clearW: b.width, clearH: b.height,
                  textClearGap: b.left - i.right};
        })()
        """)
        check("Field height is 36px", abs(geo["h"] - 36) <= 1, geo["h"])
        check("Entered text sits ~16px from the left edge", 14 <= geo["textInset"] <= 18, geo["textInset"])
        check("Clear button is vertically centered in the field",
              abs(geo["clearCenterOffset"]) <= 1.5, geo["clearCenterOffset"])
        check("Clear button sits ~12-16px from the right edge",
              11 <= geo["clearRightInset"] <= 18, geo["clearRightInset"])
        check("Clear button has a 24x24px clickable box",
              abs(geo["clearW"] - 24) <= 1 and abs(geo["clearH"] - 24) <= 1,
              "%sx%s" % (geo["clearW"], geo["clearH"]))
        check("Entered text never overlaps the clear button", geo["textClearGap"] >= -0.5, geo["textClearGap"])
        js(c, "document.getElementById('searchClear').click();")
        time.sleep(0.3)

        # ─── 4. Responsive width + shrink-before-wrap ───────────────────
        widths = {}
        for w in (1024, 1280, 1440, 1920, 2560):
            set_viewport(c, w)
            click_tab(c, "Users")
            time.sleep(0.2)
            sw = rect(c, "#searchWrap")
            fb = rect(c, "#usersFilterBtn")
            tr = rect(c, "#usersPanel .tbar-r")
            widths[w] = sw["width"]
            check("Search is visible @%dpx" % w, sw["width"] > 100, sw["width"])
            check("Search never exceeds 600px @%dpx" % w, sw["width"] <= 601, sw["width"])
            check("Search stays on the same row as Filter @%dpx (shrinks, doesn't wrap away)" % w,
                  same_row(sw, fb), "search_top=%s filter_top=%s" % (sw["top"], fb["top"]))
            check("Search never overlaps the right-hand action group @%dpx" % w,
                  not rects_overlap(sw, tr), "%s vs %s" % (sw, tr))
            check("No horizontal page overflow @%dpx" % w,
                  js(c, "document.documentElement.scrollWidth - window.innerWidth") <= 1)
        check("Search reaches its 600px ceiling at 1440px+",
              all(widths[w] >= 592 for w in (1440, 1920, 2560)),
              {w: widths[w] for w in (1440, 1920, 2560)})
        check("Search shrinks fluidly below 1440px (monotonic, no snap)",
              widths[1024] < widths[1280] < widths[1440] + 0.5,
              {w: widths[w] for w in (1024, 1280, 1440)})

        # ─── 5. Filter is icon-only, 36x36, correct aria-label ──────────
        set_viewport(c, 1440)
        click_tab(c, "Users")
        time.sleep(0.2)
        filter_btn = "#usersFilterBtn"
        filter_text = js(c, "document.querySelector(%s).textContent.trim()" % json.dumps(filter_btn))
        check("Filter button has no visible text label", filter_text == "", repr(filter_text))
        check("Filter button has aria-label=\"Filter users\"",
              js(c, "document.querySelector(%s).getAttribute('aria-label')" % json.dumps(filter_btn)) == "Filter users",
              js(c, "document.querySelector(%s).getAttribute('aria-label')" % json.dumps(filter_btn)))
        fbtn_rect = rect(c, filter_btn)
        check("Filter button is ~36x36px",
              abs(fbtn_rect["width"] - 36) <= 1 and abs(fbtn_rect["height"] - 36) <= 1,
              "%sx%s" % (fbtn_rect["width"], fbtn_rect["height"]))
        icon_rect = rect(c, filter_btn + " svg")
        icon_cx = (icon_rect["left"] + icon_rect["right"]) / 2 - (fbtn_rect["left"] + fbtn_rect["right"]) / 2
        icon_cy = (icon_rect["top"] + icon_rect["bottom"]) / 2 - (fbtn_rect["top"] + fbtn_rect["bottom"]) / 2
        check("Filter icon is centered horizontally and vertically",
              abs(icon_cx) <= 1 and abs(icon_cy) <= 1, "%s, %s" % (icon_cx, icon_cy))

        # ─── 6. Tooltip on hover + keyboard focus ───────────────────────
        js(c, "document.querySelector(%s).dispatchEvent(new MouseEvent('mouseover', {bubbles:true}));" % json.dumps(filter_btn))
        time.sleep(0.15)
        tt_hover = js(c, "(function(){var t=document.getElementById('statusTooltip'); return t && t.classList.contains('is-visible') ? t.textContent : '';})()")
        check("Hovering Filter shows a \"Filter\" tooltip", tt_hover.strip() == "Filter", repr(tt_hover))
        js(c, "document.querySelector(%s).dispatchEvent(new MouseEvent('mouseout', {bubbles:true}));" % json.dumps(filter_btn))
        time.sleep(0.1)
        check("Tooltip hides again on mouseout",
              not js(c, "document.getElementById('statusTooltip').classList.contains('is-visible')"))
        # `.focus()` alone doesn't reliably synthesize a bubbling `focusin`
        # in headless Chrome over CDP (a harness quirk, not an app bug),
        # so dispatch it explicitly the way real Tab-focus does.
        js(c, "(function(){var b=document.querySelector(%s); b.focus(); b.dispatchEvent(new FocusEvent('focusin', {bubbles:true}));})()" % json.dumps(filter_btn))
        time.sleep(0.15)
        tt_focus = js(c, "(function(){var t=document.getElementById('statusTooltip'); return t && t.classList.contains('is-visible') ? t.textContent : '';})()")
        check("Keyboard-focusing Filter shows the \"Filter\" tooltip too", tt_focus.strip() == "Filter", repr(tt_focus))
        js(c, "(function(){var b=document.querySelector(%s); b.blur(); b.dispatchEvent(new FocusEvent('focusout', {bubbles:true}));})()" % json.dumps(filter_btn))
        time.sleep(0.1)
        check("Tooltip hides again on blur",
              not js(c, "document.getElementById('statusTooltip').classList.contains('is-visible')"))

        # ─── 7. Filter still opens the drawer ──────────────────────────
        js(c, "document.querySelector(%s).click();" % json.dumps(filter_btn))
        time.sleep(0.25)
        check("Clicking Filter still opens the filter drawer",
              js(c, "document.getElementById('fltDrawer').classList.contains('open')"))
        js(c, "document.getElementById('fltCancel').click();")
        time.sleep(0.25)
        check("Filter drawer closes again via Cancel",
              not js(c, "document.getElementById('fltDrawer').classList.contains('open')"))

        # ─── 8. Left cluster gaps: one compact group ────────────────────
        seg_rect = rect(c, "#userViewToggle")
        search_rect = rect(c, "#searchWrap")
        gap_filter_seg = seg_rect["left"] - fbtn_rect["right"]
        gap_seg_search = search_rect["left"] - seg_rect["right"]
        check("Gap between Filter and the segmented control is ~12px",
              10 <= gap_filter_seg <= 14, gap_filter_seg)
        check("Gap between the segmented control and search is ~12px",
              10 <= gap_seg_search <= 14, gap_seg_search)
        check("All three left-side controls share one row",
              same_row(fbtn_rect, seg_rect) and same_row(seg_rect, search_rect))

        # ─── 9. Export + Add User grouped and right-aligned ────────────
        export_rect = rect(c, "#usersExportBtn")
        add_user_rect = rect(c, "#usersPanel .tbar-r .btn-ghost")
        tbar_rect = rect(c, "#usersPanel .tbar")
        check("Export sits left of Add User", export_rect["left"] < add_user_rect["left"])
        check("Export/Add User gap is ~12px",
              8 <= add_user_rect["left"] - export_rect["right"] <= 16,
              add_user_rect["left"] - export_rect["right"])
        check("Add User anchors near the toolbar's right edge",
              tbar_rect["right"] - add_user_rect["right"] < 40,
              tbar_rect["right"] - add_user_rect["right"])
        check("Search does not run into the right-hand group",
              export_rect["left"] - search_rect["right"] >= 0,
              export_rect["left"] - search_rect["right"])

        # ─── 10. Shared Filter component + shared toolbar inset ────────
        users_inset = toolbar_inset(c, "#usersPanel", "usersFilterBtn")
        users_props = js(c, """
        (function(){
          var e = document.getElementById('usersFilterBtn'), s = getComputedStyle(e), r = e.getBoundingClientRect();
          return [Math.round(r.width), Math.round(r.height), s.border, s.borderRadius, s.padding,
                  Math.round(e.querySelector('svg').getBoundingClientRect().width),
                  e.querySelector('polygon').getAttribute('points'), e.getAttribute('data-tooltip'),
                  e.textContent.trim()];
        })()
        """)
        users_margin = js(c, "document.querySelector('#usersPanel .tbar-l').style.marginLeft || ''")
        click_tab(c, "Roles")
        time.sleep(0.35)
        roles_inset = toolbar_inset(c, "#rolesPanel", "rpFilterBtn")
        roles_props = js(c, """
        (function(){
          var e = document.getElementById('rpFilterBtn'), s = getComputedStyle(e), r = e.getBoundingClientRect();
          return [Math.round(r.width), Math.round(r.height), s.border, s.borderRadius, s.padding,
                  Math.round(e.querySelector('svg').getBoundingClientRect().width),
                  e.querySelector('polygon').getAttribute('points'), e.getAttribute('data-tooltip'),
                  e.textContent.trim()];
        })()
        """)
        roles_margin = js(c, "document.querySelector('#rolesPanel .tbar-l').style.marginLeft || ''")
        check("Users and Roles use an identical icon-only Filter button "
              "(size, border, radius, padding, icon, tooltip, no text)",
              users_props == roles_props, "%s vs %s" % (users_props, roles_props))
        check("Roles' Filter keeps its own contextual aria-label",
              js(c, "document.getElementById('rpFilterBtn').getAttribute('aria-label')") == "Filter roles")
        check("Users' and Roles' Filter buttons start at the same toolbar content inset",
              abs(users_inset - roles_inset) <= 1, "users=%s roles=%s" % (users_inset, roles_inset))
        check("Neither toolbar's left group carries a JS-written inline margin",
              users_margin == "" and roles_margin == "",
              "users=%r roles=%r" % (users_margin, roles_margin))
        check("Roles' Filter is NOT pushed right to meet the 'Roles' tab label",
              js(c, """
              (function(){
                var t = document.querySelectorAll('.tab-btn')[1];
                var labelLeft = t.getBoundingClientRect().left + (parseFloat(getComputedStyle(t).paddingLeft) || 0);
                return document.getElementById('rpFilterBtn').getBoundingClientRect().left < labelLeft - 20;
              })()
              """))
        check("Roles' search sits immediately after Filter (~12px)",
              10 <= rect(c, "#rpSearchWrap")["left"] - rect(c, "#rpFilterBtn")["right"] <= 14,
              rect(c, "#rpSearchWrap")["left"] - rect(c, "#rpFilterBtn")["right"])

        # ─── 11. Responsive: no overlap/clip/overflow; groups stay intact ─
        for w in (1920, 1440, 1280, 1100, 1024, 900, 768, 600, 375, 320):
            set_viewport(c, w)
            click_tab(c, "Users")
            time.sleep(0.2)
            check("No horizontal page overflow @%dpx" % w,
                  js(c, "document.documentElement.scrollWidth - window.innerWidth") <= 1,
                  js(c, "document.documentElement.scrollWidth - window.innerWidth"))
            fb = rect(c, filter_btn)
            sg = rect(c, "#userViewToggle")
            sw = rect(c, "#searchWrap")
            ex = rect(c, "#usersExportBtn")
            au = rect(c, "#usersPanel .tbar-r .btn-ghost")
            check("Left-side controls never overlap each other @%dpx" % w,
                  not rects_overlap(fb, sg) and not rects_overlap(sg, sw), "%s %s %s" % (fb, sg, sw))
            check("Left group never overlaps the right group @%dpx" % w,
                  not rects_overlap(sw, ex) and not rects_overlap(sw, au), "%s %s %s" % (sw, ex, au))
            check("Export and Add User stay grouped on one row @%dpx" % w, same_row(ex, au), "%s %s" % (ex, au))
            check("Search stays visible (never hidden or collapsed) @%dpx" % w, sw["width"] >= 100, sw["width"])
            check("Filter button is never clipped below usable size @%dpx" % w,
                  fb["width"] >= 30 and fb["height"] >= 30, fb)
            # When the right group wraps to its own row, that row must
            # start/end at the same content inset as row 1 — no blank
            # placeholder column left behind by the old layout.
            # Skipped once the viewport is so narrow that Export + Add
            # User (both fixed-width) are together wider than the
            # toolbar's whole content box: they then overhang the inset
            # no matter what the toolbar does. That's a pre-existing
            # constraint of those two buttons' own widths (identical with
            # the search field present or absent — verified) and well
            # below the 1024px floor of this layout's spec.
            tb = rect(c, "#usersPanel .tbar")
            pad_l = float(style(c, "#usersPanel .tbar", "paddingLeft").replace("px", ""))
            pad_r = float(style(c, "#usersPanel .tbar", "paddingRight").replace("px", ""))
            right_group_fits = rect(c, "#usersPanel .tbar-r")["width"] <= tb["width"] - pad_l - pad_r
            if not same_row(fb, au) and right_group_fits:
                check("Wrapped action row still aligns to the toolbar's right inset @%dpx" % w,
                      abs((tb["right"] - au["right"]) - pad_r) <= 1.5,
                      "gap=%s pad=%s" % (tb["right"] - au["right"], pad_r))

        c.send("Emulation.clearDeviceMetricsOverride")
        time.sleep(0.2)

    finally:
        try:
            chrome.terminate()
        except Exception:
            pass
        try:
            server.terminate()
        except Exception:
            pass
        try:
            shutil.rmtree(profile_dir, ignore_errors=True)
        except Exception:
            pass

    print("\n" + "=" * 60)
    failed = [r for r in results if r[0] == "FAIL"]
    print("%d passed, %d failed" % (len(results) - len(failed), len(failed)))
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
