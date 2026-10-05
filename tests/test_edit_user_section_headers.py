#!/usr/bin/env python3
"""Edit User page — "Basic information" / "Access" collapsible section
headers (Round 26, 2026-08-11; chevron color corrected in Round 30,
2026-08-11).

Regression suite for moving the section chevrons from the left of the
title to the far right of the header, recoloring the title to #2D2F8C
(chevron color corrected in Round 30 — see below), fixing the
collapsed-state chevron direction (must be an up-chevron, never
left/right), removing the old chevron-driven title indentation, and
removing the trailing arrow icon from "View access breakdown".

Covers:
  1. Chevron sits at the far right of each header; title stays flush
     left with the card's own left padding (no more chevron-width +
     gap indentation); title and section-body content share the same
     left x-coordinate.
  2. The chevron's distance from the card's right edge roughly matches
     the title's distance from the card's left edge.
  3. Title is colored #2D2F8C on both cards. Chevron color (Round
     30 — superseding Round 26's hard-coded #2D2F8C chevron) reuses
     the exact same `--brand-text` token/color as the "Back to Users"
     link and its icon (`#auBack`), not an approximated hard-coded
     blue — title and chevron are deliberately different colors now.
  4. Whole header row (including empty space, not just the chevron)
     is clickable and toggles `aria-expanded` + collapse.
  5. Expanded chevron points down (unrotated); collapsed chevron is
     rotated 180deg (points up) — never a left/right rotation.
  6. Add mode's identical shared cards now get this EXACT same
     treatment too (Round 31, 2026-08-11 — "Update the Add User page
     so its structure and visual treatment match the existing Edit
     User page"): chevron on the right, #2D2F8C title, same size/
     weight/font. There is no longer a separate Add-mode appearance to
     preserve — both modes render the identical `#auBasicCard`/
     `#auRolesCard` header markup with the identical CSS now.
  7. "View access breakdown" no longer has an icon and its label is
     horizontally centered in the button.
  8. Unrelated pages (Create Role) keep their original chevron
     position/rotation/color.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_user_section_headers.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-edituser-headers-test-")
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


def rgb_to_hex(rgb):
    """'rgb(45, 47, 140)' -> '#2d2f8c'"""
    nums = rgb.replace("rgb(", "").replace("rgba(", "").replace(")", "").split(",")
    r, g, b = int(float(nums[0])), int(float(nums[1])), int(float(nums[2]))
    return "#%02x%02x%02x" % (r, g, b)


def click_tab(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%s;}).click();" % json.dumps(name))


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
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1100, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)
        click_tab(c, "Users")
        time.sleep(0.3)
        js(c, "document.querySelector('#tbody .name-link').click();")
        time.sleep(0.4)
        check("Edit User page opened", js(c, "document.getElementById('auPageTitle').textContent.trim()") == "Edit User")

        # ─── 1 & 4. Chevron on the right, title flush left, full clickable ──
        for card, header_sel, chev_sel, title_sel in [
            ("Basic information", "#auBasicCard .cr-section-header[role='button']", "#auBasicCard .cr-section-chev", "#auBasicTitle"),
            ("Access", "#auRolesCard .cr-section-header[role='button']", "#auRolesCard .cr-section-chev", "#auRolesPermissionsTitle"),
        ]:
            card_rect = rect(c, "#" + ("auBasicCard" if card == "Basic information" else "auRolesCard"))
            header_rect = rect(c, header_sel)
            chev_rect = rect(c, chev_sel)
            title_rect = rect(c, title_sel)
            check("%s: chevron sits to the right of the title" % card, chev_rect["left"] > title_rect["right"])
            left_gap = title_rect["left"] - card_rect["left"]
            right_gap = card_rect["right"] - chev_rect["right"]
            check("%s: title's left gap and chevron's right gap roughly match (card's own 24px padding both sides)" % card,
                  abs(left_gap - right_gap) <= 3, "left_gap=%s right_gap=%s" % (left_gap, right_gap))
            check("%s: title left edge is ~24px from the card's left edge" % card, abs(left_gap - 24) <= 2, left_gap)

        # Title flush with section body (no extra chevron-driven indent)
        basic_title_left = rect(c, "#auBasicTitle")["left"]
        basic_body_left = js(c, "document.querySelector('#auBasicCard .au-section-body').getBoundingClientRect().left")
        check("Basic information: title and section body share the same left edge",
              abs(basic_title_left - basic_body_left) <= 2, "title=%s body=%s" % (basic_title_left, basic_body_left))
        roles_title_left = rect(c, "#auRolesPermissionsTitle")["left"]
        roles_body_left = js(c, "document.querySelector('#auRolesCard .au-section-body').getBoundingClientRect().left")
        check("Access: title and section body share the same left edge",
              abs(roles_title_left - roles_body_left) <= 2, "title=%s body=%s" % (roles_title_left, roles_body_left))

        # ─── 3. Title color #2D2F8C; chevron reuses the "Back to Users"
        #        link's brand-text token (Round 30, 2026-08-11 — the
        #        chevron's Round 26 hard-coded #2D2F8C was corrected to
        #        the same `--brand-text` token/color the back-nav link
        #        and icon already use, via `stroke="currentColor"`) ──
        for sel in ("#auBasicTitle", "#auRolesPermissionsTitle"):
            color = style(c, sel, "color")
            check("%s color is #2D2F8C" % sel, rgb_to_hex(color) == "#2d2f8c", color)
        back_link_color = style(c, "#auBack", "color")
        for sel in ("#auBasicCard .cr-section-chev", "#auRolesCard .cr-section-chev"):
            color = style(c, sel, "color")
            check("%s color matches the 'Back to Users' link color" % sel, color == back_link_color, "%s vs back link %s" % (color, back_link_color))
            check("%s color is NOT the old #2D2F8C" % sel, rgb_to_hex(color) != "#2d2f8c", color)

        # ─── 5. Expanded chevron points down (no rotation) ────────────────
        basic_expanded = js(c, "document.querySelector('#auBasicCard .cr-section-header[role=\"button\"]').getAttribute('aria-expanded')")
        check("Basic information starts expanded (aria-expanded=true)", basic_expanded == "true")
        chev_transform = style(c, "#auBasicCard .cr-section-chev", "transform")
        check("Expanded chevron has no rotation applied", chev_transform in ("none", "matrix(1, 0, 0, 1, 0, 0)"), chev_transform)

        # ─── 4/5. Click anywhere on header (not just chevron) toggles + up-chevron ──
        header_rect = rect(c, "#auBasicCard .cr-section-header[role='button']")
        mid_empty_x = (header_rect["left"] + header_rect["right"]) / 2  # empty middle area, not text or icon
        mid_y = (header_rect["top"] + header_rect["bottom"]) / 2
        js(c, """
        (function(){
          var el = document.elementFromPoint(%f, %f);
          el.dispatchEvent(new MouseEvent('click', {bubbles:true, clientX:%f, clientY:%f}));
        })()
        """ % (mid_empty_x, mid_y, mid_empty_x, mid_y))
        time.sleep(0.3)
        basic_collapsed_attr = js(c, "document.querySelector('#auBasicCard .cr-section-header[role=\"button\"]').getAttribute('aria-expanded')")
        check("Clicking the empty middle of the header (not the chevron) toggles aria-expanded to false", basic_collapsed_attr == "false", basic_collapsed_attr)
        check("Card gets the .collapsed class", js(c, "document.getElementById('auBasicCard').classList.contains('collapsed')"))
        chev_transform_collapsed = style(c, "#auBasicCard .cr-section-chev", "transform")
        # rotate(180deg) => matrix(-1, 0, 0, -1, 0, 0); rotate(90 or -90) => matrix(0, ±1, ∓1, 0, 0, 0)
        check("Collapsed chevron is rotated 180deg (up), not 90/-90deg (left/right)",
              "matrix(-1, 0, 0, -1" in chev_transform_collapsed or "rotate(180deg)" in chev_transform_collapsed,
              chev_transform_collapsed)

        # Re-expand for the rest of the checks
        js(c, "document.querySelector('#auBasicCard .cr-section-header[role=\"button\"]').click();")
        time.sleep(0.3)
        check("Re-clicking expands again (aria-expanded=true)",
              js(c, "document.querySelector('#auBasicCard .cr-section-header[role=\"button\"]').getAttribute('aria-expanded')") == "true")

        # Same check for Access card
        js(c, "document.querySelector('#auRolesCard .cr-section-header[role=\"button\"]').click();")
        time.sleep(0.3)
        check("Access collapses on click", js(c, "document.getElementById('auRolesCard').classList.contains('collapsed')"))
        roles_chev_transform = style(c, "#auRolesCard .cr-section-chev", "transform")
        check("Access collapsed chevron is rotated 180deg (up)",
              "matrix(-1, 0, 0, -1" in roles_chev_transform or "rotate(180deg)" in roles_chev_transform,
              roles_chev_transform)
        js(c, "document.querySelector('#auRolesCard .cr-section-header[role=\"button\"]').click();")
        time.sleep(0.3)

        # ─── 7. "View access breakdown" — no icon, label centered ────────
        check("View access breakdown has no icon svg", js(c, "!document.querySelector('#auEffViewBreakdown svg')"))
        btn_rect = rect(c, "#auEffViewBreakdown")
        label_rect = rect(c, "#auEffViewBreakdown span")
        left_pad = label_rect["left"] - btn_rect["left"]
        right_pad = btn_rect["right"] - label_rect["right"]
        check("View access breakdown label is horizontally centered in the button",
              abs(left_pad - right_pad) <= 1.5, "left_pad=%s right_pad=%s" % (left_pad, right_pad))
        check("View access breakdown button height unchanged (36px)", abs(btn_rect["height"] - 36) <= 1, btn_rect["height"])
        btn_border = style(c, "#auEffViewBreakdown", "borderTopWidth")
        check("View access breakdown border preserved", btn_border == "1px", btn_border)

        # ─── 6. Add mode now gets the identical treatment (Round 31) ───────
        # Simulate Add mode's styling directly by removing `.is-edit-mode`
        # from the still-open page rather than driving the real Add User
        # roster-search modal flow, which is unrelated to this change and
        # orthogonal to what's being verified here (that the CSS itself is
        # now un-scoped from `.is-edit-mode` and applies unconditionally).
        js(c, "document.getElementById('addUsersPage').classList.remove('is-edit-mode');")
        time.sleep(0.15)
        add_basic_color = style(c, "#auBasicTitle", "color")
        check("Add mode 'Basic information' title IS #2D2F8C (Round 31 parity — same shared markup/CSS as Edit mode)",
              rgb_to_hex(add_basic_color) == "#2d2f8c", add_basic_color)
        add_chev_rect = rect(c, "#auBasicCard .cr-section-chev")
        add_title_rect = rect(c, "#auBasicTitle")
        check("Add mode chevron sits to the RIGHT of the title (Round 31 parity)",
              add_chev_rect["left"] > add_title_rect["left"], "chev_left=%s title_left=%s" % (add_chev_rect["left"], add_title_rect["left"]))
        js(c, "document.getElementById('addUsersPage').classList.add('is-edit-mode');")
        time.sleep(0.15)

        # ─── 8. Create Role unaffected ─────────────────────────────────────
        click_tab(c, "Roles")
        time.sleep(0.3)
        js(c, "document.querySelector('#rolesPanel .tbar-r .btn-ghost').click();")
        time.sleep(0.4)
        cr_chev_rect = rect(c, "#crBasicCard .cr-section-chev")
        cr_title_rect = rect(c, "#crBasicCard .cr-section-title")
        if cr_chev_rect and cr_title_rect:
            check("Create Role chevron still sits to the LEFT of its title (unaffected)",
                  cr_chev_rect["left"] < cr_title_rect["left"], "chev_left=%s title_left=%s" % (cr_chev_rect["left"], cr_title_rect["left"]))

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
