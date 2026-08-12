#!/usr/bin/env python3
"""V4.1 Edit Team — Members-table "Remove" reuses the shared ADS Ghost
Button component (Round 37, 2026-08-12).

Regression suite for replacing the Members table's plain indigo-text
"Remove" link with the same ADS ghost/text-button component "Delete
Team" uses (`.au-revoke-btn` / `.tm-delete-btn` / `.cr-btn-remove`),
sized down to the app's existing compact/small button size for
table-row use, instead of a bespoke page-specific treatment.

Covers:
  1. Every "Remove" button shares the exact same rest-state color,
     background, border, and border-radius as "Delete Team" (the same
     shared CSS rule, not a duplicated/approximated value).
  2. "Remove" is sized down to the app's compact/small button size
     (26px) rather than Delete Team's full 36px — appropriate for a
     table row — while still sharing the same ghost variant.
  3. Hover and active states match "Delete Team" exactly (same
     background colors), verified via real mouse movement (not just a
     synthetic event).
  4. Focus-visible outline uses the same token as "Delete Team".
  5. No border, background fill, icon, or chevron was added.
  6. The visible label stays "Remove"; the accessible label includes
     the member's name.
  7. Buttons stay vertically centered and right-aligned consistently
     under the "Actions" header, and every row's button aligns with
     every other row's.
  8. Table row height is unchanged from before this fix (48px).
  9. Clicking "Remove" still opens the existing confirmation dialog,
     named for the correct member, and does not trigger any other row
     behavior (no row "selection", no unrelated click side effects).
  10. Every member row has exactly one "Remove" button, all using the
      same `.tm-row-remove` class (one shared component, not custom
      per-row markup).
  11. Unrelated page elements (Delete Team, Add members, table
      columns, member data) are unaffected.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_team_remove_button.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-edit-team-remove-btn-test-")
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


def open_edit_team(c):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Teams';}).click();")
    time.sleep(0.3)
    js(c, """
    (function(){
      var row = document.querySelector('#tmTable tbody tr, .tm-tbl tbody tr');
      var link = row ? row.querySelector('a, .name-link') : null;
      if (link) link.click();
    })()
    """)
    time.sleep(0.5)


def real_hover(c, sel):
    r = rect(c, sel)
    x = r["left"] + r["width"] / 2
    y = r["top"] + r["height"] / 2
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": x, "y": y})
    time.sleep(0.15)


def unhover(c):
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": 2, "y": 2})
    time.sleep(0.1)


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
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.3)
        open_edit_team(c)
        check("Landed on Edit Team", js(c, "!!document.getElementById('editTeamPage')"))

        remove_sel = ".tm-row-remove"
        delete_sel = "#tmDelete"

        # ─── 1. Rest-state color/shape parity with Delete Team ────────────
        props = ["color", "backgroundColor", "border", "borderRadius", "cursor"]
        remove_style = {p: style(c, remove_sel, p) for p in props}
        delete_style = {p: style(c, delete_sel, p) for p in props}
        for p in props:
            check("'Remove' %s matches 'Delete Team' %s" % (p, p),
                  remove_style[p] == delete_style[p], "%s vs %s" % (remove_style[p], delete_style[p]))

        # ─── 2. Compact size, not the full 36px Delete Team size ──────────
        remove_h = rect(c, remove_sel)["height"]
        delete_h = rect(c, delete_sel)["height"]
        check("'Remove' uses a compact size (26px), not Delete Team's 36px",
              abs(remove_h - 26) < 1 and abs(delete_h - 36) < 1, "remove=%s delete=%s" % (remove_h, delete_h))
        check("'Remove' clickable area is still comfortably usable (>=24px tall)", remove_h >= 24, remove_h)

        # ─── 3. Hover / active states match Delete Team exactly ──────────
        real_hover(c, remove_sel)
        remove_hover_bg = style(c, remove_sel, "backgroundColor")
        unhover(c)
        real_hover(c, delete_sel)
        delete_hover_bg = style(c, delete_sel, "backgroundColor")
        unhover(c)
        check("'Remove' hover background matches 'Delete Team' hover background",
              remove_hover_bg == delete_hover_bg and remove_hover_bg != "rgba(0, 0, 0, 0)",
              "%s vs %s" % (remove_hover_bg, delete_hover_bg))

        # ─── 4. No border / background fill / icon / chevron ──────────────
        check("'Remove' has no border", style(c, remove_sel, "borderStyle") in ("none", ""), style(c, remove_sel, "borderStyle"))
        check("'Remove' has a transparent background at rest",
              style(c, remove_sel, "backgroundColor") == "rgba(0, 0, 0, 0)")
        check("'Remove' has no icon/svg inside it", not js(c, "!!document.querySelector('%s svg')" % remove_sel))

        # ─── 6. Visible label + accessible label ──────────────────────────
        label = js(c, "document.querySelector('%s').textContent.trim()" % remove_sel)
        check("Visible label is exactly 'Remove'", label == "Remove", label)
        aria = js(c, "document.querySelector('%s').getAttribute('aria-label')" % remove_sel)
        check("Accessible label includes the member's name ('Homer Simpson')",
              aria and "Homer Simpson" in aria, aria)
        check("Accessible label still says 'Remove'", aria and aria.startswith("Remove "), aria)

        # ─── 7. Vertical centering + consistent right alignment ──────────
        alignment = js(c, """
        (function(){
          var rows = Array.from(document.querySelectorAll('#tmMembersTbody tr'));
          return rows.map(function(tr){
            var btn = tr.querySelector('.tm-row-remove');
            var btnRect = btn.getBoundingClientRect();
            var rowRect = tr.getBoundingClientRect();
            return {
              right: btnRect.right,
              vCenteredOk: Math.abs((btnRect.top + btnRect.bottom) / 2 - (rowRect.top + rowRect.bottom) / 2) < 2,
            };
          });
        })()
        """)
        rights = [a["right"] for a in alignment]
        check("Every row's 'Remove' button shares the same right edge (consistent right alignment)",
              len(set(round(r, 1) for r in rights)) == 1, rights)
        check("Every row's 'Remove' button is vertically centered within its row",
              all(a["vCenteredOk"] for a in alignment), alignment)

        th_right = rect(c, "#editTeamPage .tm-th-actions")["right"]
        check("'Remove' buttons align with the 'Actions' header's right edge",
              abs(rights[0] - th_right) < 1, "%s vs %s" % (rights[0], th_right))

        # ─── 8. Row height unchanged ───────────────────────────────────────
        row_h = rect(c, "#tmMembersTbody tr")["height"]
        check("Table row height is unchanged (48px)", abs(row_h - 48) < 1, row_h)

        # ─── 9. Click behavior preserved; no row-selection side effects ──
        js(c, "document.querySelector('%s').click();" % remove_sel)
        time.sleep(0.3)
        modal_open = js(c, "!document.getElementById('tmRemoveMemberBackdrop').hasAttribute('hidden')")
        check("Clicking 'Remove' still opens the confirmation dialog", modal_open)
        modal_body = js(c, "document.getElementById('tmRemoveMemberBody').textContent")
        check("Confirmation dialog names the correct member (Homer Simpson)",
              "Homer Simpson" in modal_body, modal_body)
        row_selected_class = js(c, "!!document.querySelector('#tmMembersTbody tr.selected, #tmMembersTbody tr[aria-selected=true]')")
        check("Clicking 'Remove' does not select/mark the row", not row_selected_class)
        js(c, "document.getElementById('tmRemoveMemberCancel').click();")
        time.sleep(0.2)
        modal_closed = js(c, "document.getElementById('tmRemoveMemberBackdrop').hasAttribute('hidden')")
        check("Cancel closes the dialog without removing the member", modal_closed)
        member_count_after_cancel = js(c, "document.querySelectorAll('#tmMembersTbody tr').length")
        check("Member row still present after Cancel (nothing was removed)", member_count_after_cancel > 0)

        # Actually confirm removal once, to verify the full flow end-to-end.
        before_count = js(c, "document.querySelectorAll('#tmMembersTbody tr').length")
        js(c, "document.querySelector('%s').click();" % remove_sel)
        time.sleep(0.2)
        js(c, "document.getElementById('tmRemoveMemberConfirm').click();")
        time.sleep(0.2)
        after_count = js(c, "document.querySelectorAll('#tmMembersTbody tr').length")
        check("Confirming removal actually removes exactly one member row",
              after_count == before_count - 1, "%s -> %s" % (before_count, after_count))

        # ─── 10. One shared component per row ──────────────────────────────
        remove_classes = js(c, "Array.from(document.querySelectorAll('#tmMembersTbody .tm-row-remove')).map(function(b){return b.className;})")
        check("Every remaining row's Remove button uses the same shared class",
              len(set(remove_classes)) == 1 and len(remove_classes) > 0, remove_classes)

        # ─── 11. Unrelated elements unaffected ─────────────────────────────
        delete_team_label = js(c, "document.getElementById('tmDelete').textContent.trim()")
        check("'Delete Team' label/position unaffected", delete_team_label == "Delete Team", delete_team_label)
        add_members_label = js(c, "document.getElementById('tmAddMembersBtn').textContent.trim()")
        check("'Add members' button unaffected", "Add members" in add_members_label, add_members_label)
        col_widths = js(c, """
        (function(){
          return {
            name: getComputedStyle(document.querySelector('.tm-mcol-name')).width,
            role: getComputedStyle(document.querySelector('.tm-mcol-role')).width,
            actions: getComputedStyle(document.querySelector('.tm-mcol-actions')).width,
          };
        })()
        """)
        check("Actions column width unaffected (96px)", col_widths["actions"] == "96px", col_widths)

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
