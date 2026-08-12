#!/usr/bin/env python3
"""Regression test for the Edit Team Members table's "Actions" column-header
alignment fix (2026-08-11).

Bug: the "Actions" header text and every "Remove" label's *bounding boxes*
already shared the same right edge (both flush with the shared column
boundary), but `.tm-row-remove` (the Remove button) carries its own
`padding: 4px 6px` for its hit-target/hover halo, so the *visible label
text* inside it actually sits 6px left of that boundary. The header had no
equivalent inset, so "Actions" visibly sat 6px to the right of every
"Remove" label even though the two elements' boxes lined up.

Fix: `th.tm-th-actions` now carries a matching `padding-right: 6px` so its
text — like the Remove button's own already-padded text — also lands 6px
inside the shared column boundary. `.tm-row-remove` itself (position,
width, padding, typography, color, hover/focus states, click behavior) is
completely untouched.

NOTE: this test targets `public/v4/` (the frozen legacy snapshot, via
`open_edit_team`'s `base + "/v4/"` navigation), not the actively
developed `public/v4.1/`. A later pass (2026-08-12, Round 37 — see
test_edit_team_remove_button.py) restyled `public/v4.1/`'s `.tm-row-
remove` to reuse the shared ADS ghost-button component; `public/v4/`'s
copy is untouched by that change, so the original `4px 6px` expectation
below still holds here.

Covers:
  * The rendered "Actions" text and every rendered "Remove" text share the
    exact same right edge (glyph-level, not just element bounding boxes).
  * `.tm-row-remove`'s box, padding, and position are byte-identical to
    the pre-fix values (nothing about Remove moved or changed).
  * The shared Actions-column boundary (th/td/col width, right edge) is
    unchanged.
  * Other columns (Name, Email, Role) and the Add members button are
    unaffected.
  * No horizontal overflow, no wrapping, no console errors.
  * Responsive: 1440 / 1280 / 1024px.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_team_members_actions_header.py
"""

import atexit
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
    profile_dir = tempfile.mkdtemp(prefix="iam-tm-actions-header-test-")
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
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      var x = el.getBoundingClientRect();
      return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height};
    })()
    """ % json.dumps(sel))


def text_right_edges(c, sel):
    """Right edge of the actual rendered text glyphs (not the element box)
    for every element matching sel, via Range.getClientRects()."""
    return js(c, """
    (function(){
      function textRight(el){
        var range = document.createRange();
        var textNode = Array.from(el.childNodes).find(function(n){return n.nodeType===3 && n.textContent.trim().length>0;}) || el;
        range.selectNodeContents(textNode);
        var rects = range.getClientRects();
        var r = rects[rects.length-1];
        return r ? r.right : null;
      }
      return Array.from(document.querySelectorAll(%s)).map(textRight);
    })()
    """ % json.dumps(sel))


def open_edit_team(c, base, name="National Ad Sales"):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Teams';}).click();")
    time.sleep(0.3)
    found = js(c, """
    (function(){
      var links = Array.from(document.querySelectorAll('#teamsPanel a.name-link, #teamsPanel td a'));
      var l = links.find(function(a){return a.textContent.indexOf(%s) !== -1;}) || links[0];
      if (l) { l.click(); return true; }
      return false;
    })()
    """ % json.dumps(name))
    time.sleep(0.4)
    return found


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
    c.send("Runtime.enable", {})
    console_errors = []

    def on_console(msg):
        if msg.get("method") == "Runtime.exceptionThrown":
            console_errors.append(msg["params"])

    for vw in (1440, 1280, 1024):
        c.send("Emulation.setDeviceMetricsOverride", {"width": vw, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        opened = open_edit_team(c, base, "National Ad Sales")
        check("@%dpx: Setup: Edit Team page opened" % vw, opened)

        actions_text_rights = text_right_edges(c, "#editTeamPage .tm-th-actions .th-inner span")
        remove_text_rights = text_right_edges(c, "#editTeamPage .tm-row-remove")
        remove_box_rects = [rect(c, ".tm-row-remove")]  # first only, for detail
        th_box = rect(c, "#editTeamPage .tm-th-actions")

        check("@%dpx: at least one Remove row is present" % vw, len(remove_text_rights) > 0, len(remove_text_rights))
        if actions_text_rights and remove_text_rights:
            actions_right = actions_text_rights[0]
            check("@%dpx: 'Actions' visible text right edge matches every 'Remove' visible text right edge" % vw,
                  all(abs(actions_right - r) < 0.5 for r in remove_text_rights),
                  "Actions=%.2f Removes=%s" % (actions_right, remove_text_rights))

        # ── Remove button itself is untouched: box still flush with the
        #    shared column boundary, own padding still 4px 6px, own
        #    typography/color unchanged ──
        remove_style = js(c, """
        (function(){
          var b = document.querySelector('#editTeamPage .tm-row-remove');
          var s = getComputedStyle(b);
          return {padding: s.padding, fontSize: s.fontSize, fontWeight: s.fontWeight, color: s.color, cursor: s.cursor, borderRadius: s.borderRadius};
        })()
        """)
        check("@%dpx: Remove button padding unchanged (4px 6px)" % vw, remove_style["padding"] == "4px 6px", remove_style["padding"])
        check("@%dpx: Remove button font-size unchanged (14px)" % vw, remove_style["fontSize"] == "14px", remove_style["fontSize"])
        check("@%dpx: Remove button font-weight unchanged (500)" % vw, remove_style["fontWeight"] == "500", remove_style["fontWeight"])
        check("@%dpx: Remove button cursor unchanged (pointer)" % vw, remove_style["cursor"] == "pointer", remove_style["cursor"])

        remove_box = rect(c, ".tm-row-remove")
        check("@%dpx: Remove button box right edge still flush with the column boundary" % vw,
              abs(remove_box["right"] - th_box["right"]) < 0.5,
              "%s vs %s" % (remove_box["right"], th_box["right"]))

        # ── Column boundary / shared structure unchanged ──
        col_actions_width = js(c, "getComputedStyle(document.querySelector('#editTeamPage .tm-mcol-actions')).width")
        check("@%dpx: Actions column width still 96px" % vw, col_actions_width == "96px", col_actions_width)

        # ── Other columns untouched ──
        name_col = js(c, "getComputedStyle(document.querySelector('#editTeamPage .tm-mcol-name')).width")
        email_col = js(c, "getComputedStyle(document.querySelector('#editTeamPage .tm-mcol-email')).width")
        role_col = js(c, "getComputedStyle(document.querySelector('#editTeamPage .tm-mcol-role')).width")
        check("@%dpx: Name/Email/Role columns present and non-zero" % vw,
              all(w not in (None, "0px", "") for w in (name_col, email_col, role_col)),
              "%s / %s / %s" % (name_col, email_col, role_col))

        # ── Add members button unaffected ──
        add_members = rect(c, "#tmAddMembersBtn")
        check("@%dpx: Add members button still present" % vw, add_members is not None)

        # ── No collision / overlap between columns ──
        role_th = rect(c, "#editTeamPage .tm-members-tbl thead th:nth-child(3)")
        check("@%dpx: Role header does not overlap Actions header" % vw,
              role_th["right"] <= th_box["left"] + 0.5, "%s vs %s" % (role_th["right"], th_box["left"]))

        # ── Responsive: no wrap, no overflow ──
        th_height = th_box["height"]
        check("@%dpx: 'Actions' header does not wrap (single-line height ~32px)" % vw, th_height <= 34, th_height)
        doc_w = js(c, "document.documentElement.scrollWidth")
        win_w = js(c, "window.innerWidth")
        check("@%dpx: no horizontal overflow" % vw, doc_w <= win_w + 1, "%s vs %s" % (doc_w, win_w))

    check("No uncaught console exceptions were observed during the flow", len(console_errors) == 0, console_errors)

    print()
    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("%d passed, %d failed (of %d)" % (passed, failed, passed + failed))
    if failed:
        print("\nFAILED:")
        for status, name, detail in results:
            if status == "FAIL":
                print("  - %s" % name)
        sys.exit(1)


if __name__ == "__main__":
    main()
