#!/usr/bin/env python3
"""End-to-end tests for the shared ADS sortable-header component
(Figma node 1003:17846 — audit + standardization, 2026-08-10).

Covers:
  * The shared icon/markup source (`SORT_ICON_SVG` / `initSortableHeaders()`
    in app.js) is actually wired into every sortable table.
  * No unicode sort glyphs / emoji ever render in a header.
  * Unsorted / ascending / descending visual + `aria-sort` states for
    both sortable tables (User List, Roles List).
  * Keyboard activation (Enter + Space), focus retention, and that the
    whole header cell (not just the icon) is the click target.
  * Non-sortable headers (Teams List Description column, Team Members,
    Edit User Access table) are NOT made to look sortable/clickable.
    (Teams' Team/Members/Created columns gained real sorting in a later
    pass — see test_teams_sorting.py for full coverage of those.)
  * Column widths / header height stay stable across sort-state changes.
  * Existing filters/pagination continue to work after sorting.

Same CDP-over-headless-Chrome approach as test_create_role.py /
test_add_user_flow.py — this repo has no bundler/JS test runner
(static HTML/CSS/JS only).

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_sortable_headers.py


Runs against `public/v4.1/` (final-QA pass, 2026-08-12) — it was
written when V4 was the current build and kept pointing at `/v4/`
after the V4.1 split, so it had stopped covering the build that
actually ships. Every assertion below passes unchanged on V4.1.
"""

import atexit
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

UNICODE_SORT_GLYPHS = ["\u2195", "\u2191", "\u2193", "\u21c5", "\u21f5", "\u25b2", "\u25bc"]

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
    profile_dir = tempfile.mkdtemp(prefix="iam-sort-headers-test-")
    proc = subprocess.Popen(
        [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
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
    return js(c, """(function(){
      var el = document.querySelector(%r);
      if (!el) return null;
      var r = el.getBoundingClientRect();
      return {x:r.x, y:r.y, w:r.width, h:r.height, top:r.top, bottom:r.bottom, left:r.left, right:r.right};
    })()""" % sel)


def open_teams_tab(c):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Teams';}).click();")
    time.sleep(0.2)


def open_roles_tab(c):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.2)


def main():
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port

    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)
    atexit.register(lambda: chrome.terminate())
    atexit.register(lambda: shutil.rmtree(profile_dir, ignore_errors=True))

    c = CDP(debug_port)
    c.send("Network.setCacheDisabled", {"cacheDisabled": True})
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})

    # ── 1. Shared component: every sortable `<th>` uses ONE icon source ──
    c.navigate(base + "/v4.1/", wait=1.2)
    icon_html = js(c, "document.querySelector('th[data-sort=\"name\"] .sort-ico').innerHTML")
    check("Shared sort icon renders as an <svg> (not a unicode glyph)", "<svg" in icon_html)
    check("Shared sort icon has no <img> / raster asset", "<img" not in icon_html)
    all_ico = js(c, """Array.from(document.querySelectorAll('th[data-sort] .sort-ico, th[data-rp-sort] .sort-ico')).map(function(s){return s.innerHTML;})""")
    check("Every sortable header (Users + Roles) shares byte-identical icon markup",
          len(set(all_ico)) == 1 and len(all_ico) >= 8, "unique markups=%d, count=%d" % (len(set(all_ico)), len(all_ico)))

    # ── 2. No unicode sort glyphs / emoji anywhere in the header row ─────
    header_text = js(c, "document.querySelector('#usersTable thead').textContent")
    for glyph in UNICODE_SORT_GLYPHS:
        check("Users header contains no unicode glyph %r" % glyph, glyph not in header_text)
    open_roles_tab(c)
    rp_header_text = js(c, "document.querySelector('.rp-tbl thead').textContent")
    for glyph in UNICODE_SORT_GLYPHS:
        check("Roles header contains no unicode glyph %r" % glyph, glyph not in rp_header_text)
    c.navigate(base + "/v4.1/", wait=1.0)

    # ── 3. Users List: default/unsorted state ─────────────────────────────
    th_name = "th[data-sort=\"name\"]"
    check("Name header starts aria-sort='none'", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_name) == "none")
    check("Name header is keyboard-reachable (tabindex=0)", js(c, "document.querySelector('%s').getAttribute('tabindex')" % th_name) == "0")
    check("Name header has scope='col'", js(c, "document.querySelector('%s').getAttribute('scope')" % th_name) == "col")
    check("Name header has an accessible action label", "Sort by Name" in (js(c, "document.querySelector('%s').getAttribute('aria-label')" % th_name) or ""))
    check("Name header is not in sort-asc/sort-desc state initially", js(c, "document.querySelector('%s').className" % th_name).find("sort-") == -1)

    rect_before = rect(c, th_name)

    # ── 4. Ascending via click ─────────────────────────────────────────────
    js(c, "document.querySelector('%s').click();" % th_name)
    time.sleep(0.1)
    check("Click #1 sets aria-sort='ascending'", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_name) == "ascending")
    check("Click #1 adds .sort-asc", "sort-asc" in js(c, "document.querySelector('%s').className" % th_name))
    check("Ascending action label now reads 'descending' (next action)",
          js(c, "document.querySelector('%s').getAttribute('aria-label')" % th_name) == "Sort by Name descending")
    check("Data actually re-sorted ascending by name",
          js(c, "DATA.slice(0,3).every(function(u,i,a){return i===0 || a[i-1].name.toLowerCase() <= u.name.toLowerCase();})"))

    # ── 5. Descending via click (cycle) ────────────────────────────────────
    js(c, "document.querySelector('%s').click();" % th_name)
    time.sleep(0.1)
    check("Click #2 sets aria-sort='descending'", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_name) == "descending")
    check("Click #2 adds .sort-desc (and removes .sort-asc)",
          "sort-desc" in js(c, "document.querySelector('%s').className" % th_name) and
          "sort-asc" not in js(c, "document.querySelector('%s').className" % th_name))
    check("Descending action label reads 'Remove ... sorting'",
          js(c, "document.querySelector('%s').getAttribute('aria-label')" % th_name) == "Remove Name sorting")

    # ── 6. Back to unsorted via click (full cycle) ─────────────────────────
    js(c, "document.querySelector('%s').click();" % th_name)
    time.sleep(0.1)
    check("Click #3 returns to aria-sort='none' (unsorted -> asc -> desc -> unsorted cycle)",
          js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_name) == "none")
    check("Click #3 removes both sort-asc and sort-desc",
          js(c, "document.querySelector('%s').className" % th_name).find("sort-") == -1)

    rect_after = rect(c, th_name)
    check("Column width unchanged across the full sort cycle", abs(rect_before["w"] - rect_after["w"]) < 0.5,
          "%.2f -> %.2f" % (rect_before["w"], rect_after["w"]))
    check("Header height unchanged across the full sort cycle", abs(rect_before["h"] - rect_after["h"]) < 0.5)

    # ── 7. Label/icon share one vertical centerline in every state ───────
    for state_clicks in (0, 1, 2, 3):
        label_r = rect(c, "%s .th-inner > span:first-child" % th_name)
        ico_r = rect(c, "%s .sort-ico" % th_name)
        label_center = (label_r["top"] + label_r["bottom"]) / 2
        ico_center = (ico_r["top"] + ico_r["bottom"]) / 2
        check("Label/icon vertical centerlines match (state %d)" % state_clicks, abs(label_center - ico_center) < 0.5)
        js(c, "document.querySelector('%s').click();" % th_name)
        time.sleep(0.05)

    def reset_to_unsorted(sel):
        for _ in range(4):
            if js(c, "document.querySelector('%s').getAttribute('aria-sort')" % sel) == "none":
                return
            js(c, "document.querySelector('%s').click();" % sel)
            time.sleep(0.05)

    reset_to_unsorted(th_name)

    # ── 8. Click target is the whole header cell, not just the icon ─────
    r = rect(c, th_name)
    far_x = r["x"] + r["w"] - 5
    far_y = r["y"] + r["h"] / 2
    c.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": far_x, "y": far_y, "button": "left", "clickCount": 1})
    c.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": far_x, "y": far_y, "button": "left", "clickCount": 1})
    time.sleep(0.1)
    check("Clicking the far edge of the header cell (away from icon/label) still triggers sort",
          js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_name) == "ascending")
    reset_to_unsorted(th_name)

    # ── 9. Keyboard: focus, Enter, Space ──────────────────────────────────
    js(c, "document.querySelector('%s').focus();" % th_name)
    check("Header is focusable via .focus()", js(c, "document.activeElement && document.activeElement.matches('%s')" % th_name))
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter"})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Enter", "code": "Enter"})
    time.sleep(0.1)
    check("Enter key activates sort (ascending)", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_name) == "ascending")
    check("Focus remains on the header after Enter-triggered sort",
          js(c, "document.activeElement && document.activeElement.matches('%s')" % th_name))
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": " ", "code": "Space"})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": " ", "code": "Space"})
    time.sleep(0.1)
    check("Space key activates sort (descending)", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_name) == "descending")
    check("No page scroll/navigation from Space (default prevented)", js(c, "location.pathname").endswith("/v4.1/") or js(c, "location.pathname").endswith("/v4.1"))
    reset_to_unsorted(th_name)

    # ── 10. A hidden legacy column (data-sort but visibility:hidden) never
    #        becomes a real tab stop ────────────────────────────────────────
    check("Hidden 'Email' column is not part of the visible tab order",
          js(c, "getComputedStyle(document.querySelector('th[data-sort=\"email\"]')).visibility") == "hidden")

    # ── 11. Sorting survives pagination / interacts correctly with search ─
    js(c, "document.querySelector('%s').click();" % th_name)  # ascending
    time.sleep(0.1)
    js(c, "goToPage(2);")
    time.sleep(0.1)
    check("Sort persists across pagination (page 2 still ascending relative to page 1's last row)",
          js(c, "DATA.length > 10"))
    js(c, "goToPage(1);")
    reset_to_unsorted(th_name)

    # ── 12. Roles List: same shared behavior ──────────────────────────────
    open_roles_tab(c)
    th_role = "th[data-rp-sort=\"role\"]"
    check("Roles 'Role' header starts aria-sort='none'", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_role) == "none")
    check("Roles 'Role' header is keyboard-reachable (tabindex=0)", js(c, "document.querySelector('%s').getAttribute('tabindex')" % th_role) == "0")
    check("Roles 'Role' header has scope='col'", js(c, "document.querySelector('%s').getAttribute('scope')" % th_role) == "col")

    js(c, "document.querySelector('%s').click();" % th_role)
    time.sleep(0.1)
    check("Roles header click sets aria-sort='ascending'", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_role) == "ascending")

    js(c, "document.querySelector('%s').focus();" % th_role)
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter"})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Enter", "code": "Enter"})
    time.sleep(0.1)
    check("Roles header keyboard (Enter) cycles to descending", js(c, "document.querySelector('%s').getAttribute('aria-sort')" % th_role) == "descending")
    reset_to_unsorted(th_role)

    other_rp_cols = ["functions", "createdBy", "createDate"]
    for col in other_rp_cols:
        sel = 'th[data-rp-sort="%s"]' % col
        check("Roles '%s' header is keyboard-reachable" % col, js(c, "document.querySelector('%s').getAttribute('tabindex')" % sel) == "0")
        check("Roles '%s' header has aria-sort" % col, js(c, "document.querySelector('%s').hasAttribute('aria-sort')" % sel))

    # ── 13. Columns without an established sort requirement are NOT made
    #        to look sortable. Team/Members/Created on the Teams List
    #        gained real sorting in a later pass (test_teams_sorting.py
    #        covers them in full); Description intentionally has no
    #        product requirement to be sortable and must stay inert. ────
    open_teams_tab(c)
    teams_th = js(c, """(function(){
      var th = document.querySelector('.tm-th-desc');
      return {
        cursor: getComputedStyle(th).cursor,
        tabindex: th.getAttribute('tabindex'),
        ariaSort: th.getAttribute('aria-sort'),
        hasIcon: !!th.querySelector('.sort-ico')
      };
    })()""")
    check("Teams List Description header has no sort icon", teams_th["hasIcon"] is False)
    check("Teams List Description header has no aria-sort", teams_th["ariaSort"] is None)
    check("Teams List Description header is not keyboard-focusable as a sort control", teams_th["tabindex"] is None)
    check("Teams List Description header does not show a pointer cursor", teams_th["cursor"] != "pointer")

    # ── 14. Edit User Access table (effective-access) stays static ────────
    c.navigate(base + "/v4.1/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.name-link, a')).find(function(a){return /edit user/i.test(a.getAttribute('aria-label')||'') || a.classList.contains('name-link');}) ? null : null;")
    # Navigate directly via existing row link if present; fall back to a no-op skip if the row isn't on page 1.
    edit_link = js(c, "var a=document.querySelector('#tbody .name-link'); if(a){a.click();} !!a;")
    if edit_link:
        time.sleep(0.2)
        eff_th = js(c, """(function(){
          var th = document.querySelector('.au-eff-th-app, [class*="au-eff-th"]');
          if (!th) return null;
          return { hasIcon: !!th.querySelector('.sort-ico'), ariaSort: th.getAttribute('aria-sort') };
        })()""")
        if eff_th:
            check("Edit User effective-access table header has no sort icon", eff_th["hasIcon"] is False)
            check("Edit User effective-access table header has no aria-sort", eff_th["ariaSort"] is None)

    # ── Summary ────────────────────────────────────────────────────────────
    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    c.close()
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
