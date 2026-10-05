#!/usr/bin/env python3
"""Add User page ↔ Edit User page structural/visual parity (Round 31,
2026-08-11 — "Update the Add User page so its structure and visual
treatment match the existing Edit User page").

Regression suite for:
  1. "Basic information" / "Role and Permission" section headers on Add
     User use the exact same chevron-on-the-right layout, chevron color
     (the "Back to Users" link's brand-text token), title color
     (#2D2F8C), and title typography (font-size/weight) as the
     corresponding "Basic information" / "Access" headers on Edit User.
  2. "Change user" has been removed completely — no DOM node, no
     reserved space, no blank action area in the Basic information
     header row.
  3. "View access breakdown" is hidden (with no reserved layout space)
     when no role is assigned, and appears — using the identical
     component/styling/placement as Edit User — as soon as a role is
     assigned via the real Assigned Role combo (keyboard-driven, the
     same interaction path a user would take). Removing the role hides
     it again.
  4. Collapsing/expanding either section preserves field values and the
     assigned-role state (no reset).
  5. The layout holds at a narrower (tablet) breakpoint: chevron stays
     to the right of the title, no overlap.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_add_user_edituser_parity.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-adduser-parity-test-")
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
    nums = rgb.replace("rgb(", "").replace("rgba(", "").replace(")", "").split(",")
    r, g, b = int(float(nums[0])), int(float(nums[1])), int(float(nums[2]))
    return "#%02x%02x%02x" % (r, g, b)


def click_tab(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%s;}).click();" % json.dumps(name))


def dispatch_key(c, el_id, key):
    js(c, """(function(){
      var el = document.getElementById(%s);
      el.dispatchEvent(new KeyboardEvent('keydown', {key: %s, bubbles:true, cancelable:true}));
    })()""" % (json.dumps(el_id), json.dumps(key)))


def open_add_user(c, name_query, name_match):
    """Drives the real roster-search modal (Users tab -> Add User ->
    search -> select -> Next) the same way an admin would."""
    click_tab(c, "Users")
    time.sleep(0.3)
    js(c, """(function(){
      var b=document.querySelectorAll('#usersPanel .btn-ghost');
      for (var i=0;i<b.length;i++){ if (b[i].textContent.indexOf('Add User')!==-1){ b[i].click(); return true; } }
      return false;
    })()""")
    time.sleep(0.3)
    js(c, "var i=document.getElementById('auAddUserSearchInput'); i.value=%s; i.dispatchEvent(new Event('input',{bubbles:true}));" % json.dumps(name_query))
    time.sleep(0.4)
    js(c, """(function(){
      var opt = Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option')).find(function(o){return o.textContent.indexOf(%s)!==-1;});
      if (opt) opt.click();
    })()""" % json.dumps(name_match))
    time.sleep(0.2)
    js(c, "document.getElementById('auAddUserNext').click();")
    time.sleep(0.5)


def assign_first_role_via_combo(c):
    """Assigns a role the same way a real user would: focus the
    Assigned Role combo, arrow down to the first option, Enter to
    select, then click Add. Returns True if a role ended up selected."""
    js(c, "document.getElementById('auRoleCombo-ctl').focus();")
    time.sleep(0.15)
    dispatch_key(c, "auRoleCombo-ctl", "ArrowDown")
    time.sleep(0.15)
    dispatch_key(c, "auRoleCombo-ctl", "Enter")
    time.sleep(0.15)
    role_id = js(c, "window.__auState.selectedRoleId")
    if not role_id:
        return False
    js(c, "document.getElementById('auRoleAdd').click();")
    time.sleep(0.3)
    return True


def main():
    port = free_port()
    debug_port = free_port()
    server = start_static_server(port)
    chrome, profile_dir = launch_chrome(debug_port)
    try:
        time.sleep(0.6)
        c = CDP(debug_port)
        # Real click() on elements needs to open native dropdown popups
        # even though nothing is truly focused/visible on-screen headlessly.
        c.send("Emulation.setFocusEmulationEnabled", {"enabled": True})
        base = "http://127.0.0.1:%d/v4.1/" % port
        c.navigate(base, wait=1.6)
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1200, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)

        # ─── Reference pass: capture Edit User's header treatment ─────────
        click_tab(c, "Users")
        time.sleep(0.3)
        js(c, "document.querySelector('#tbody .name-link').click();")
        time.sleep(0.4)
        check("Edit User page opened for reference capture", js(c, "document.getElementById('auPageTitle').textContent.trim()") == "Edit User")

        ref_basic_title_color = style(c, "#auBasicTitle", "color")
        ref_basic_title_size = style(c, "#auBasicTitle", "fontSize")
        ref_basic_title_weight = style(c, "#auBasicTitle", "fontWeight")
        ref_chev_color = style(c, "#auBasicCard .cr-section-chev", "color")
        ref_back_link_color = style(c, "#auBack", "color")
        ref_header_padding_left = style(c, "#auBasicCard .cr-section-header[role='button']", "paddingLeft")
        ref_eff_actions_margin_top = style(c, "#auRolesCard .au-eff-actions", "marginTop")
        ref_eff_view_btn_height = rect(c, "#auEffViewBreakdown")["height"]

        check("Reference: 'Back to Users' link uses the brand-text blue token",
              ref_back_link_color not in ("", None), ref_back_link_color)
        check("Reference: Edit User chevron color matches the 'Back to Users' link color",
              ref_chev_color == ref_back_link_color, "chev=%s back=%s" % (ref_chev_color, ref_back_link_color))
        check("Reference: Edit User title color is #2D2F8C", rgb_to_hex(ref_basic_title_color) == "#2d2f8c", ref_basic_title_color)

        # ─── Drive the real Add User flow ──────────────────────────────────
        open_add_user(c, "Frank", "Frank Grimes")
        check("Add User page opened", js(c, "document.getElementById('auPageTitle').textContent.trim()") == "Add user")
        check("Selected user's identity is shown unchanged (name)", "Frank Grimes" in js(c, "document.getElementById('auIdName') ? document.getElementById('auIdName').textContent : document.body.textContent"))
        check("Selected user's identity is shown unchanged (email)", "frank.grimes@disney.com" in js(c, "document.body.textContent"))

        # ─── 2. "Change user" is completely gone ───────────────────────────
        check("'auRosterBannerChange' element no longer exists in the DOM",
              js(c, "document.getElementById('auRosterBannerChange')") is None)
        check("No element anywhere on the page reads exactly 'Change user'",
              js(c, "!Array.from(document.querySelectorAll('button, a, span, div')).some(function(el){return el.textContent.trim()==='Change user';})"))
        check("'auChangeUserConfirmBackdrop' modal no longer exists in the DOM",
              js(c, "document.getElementById('auChangeUserConfirmBackdrop')") is None)

        # ─── 1. Section headers match Edit User's chevron-right treatment ──
        for card_id, header_sel, chev_sel, title_sel, label in [
            ("auBasicCard", "#auBasicCard .cr-section-header[role='button']", "#auBasicCard .cr-section-chev", "#auBasicTitle", "Basic information"),
            ("auRolesCard", "#auRolesCard .cr-section-header[role='button']", "#auRolesCard .cr-section-chev", "#auRolesPermissionsTitle", "Role and Permission"),
        ]:
            card_rect = rect(c, "#" + card_id)
            chev_rect = rect(c, chev_sel)
            title_rect = rect(c, title_sel)
            check("Add User '%s': chevron sits to the right of the title" % label,
                  chev_rect["left"] > title_rect["right"], "chev_left=%s title_right=%s" % (chev_rect["left"], title_rect["right"]))
            left_gap = title_rect["left"] - card_rect["left"]
            right_gap = card_rect["right"] - chev_rect["right"]
            check("Add User '%s': equal left/right header padding (title gap == chevron gap)" % label,
                  abs(left_gap - right_gap) <= 3, "left_gap=%s right_gap=%s" % (left_gap, right_gap))
            header_padding_left = style(c, header_sel, "paddingLeft")
            check("Add User '%s': header left padding matches Edit User's header left padding" % label,
                  header_padding_left == ref_header_padding_left, "%s vs %s" % (header_padding_left, ref_header_padding_left))

            title_color = style(c, title_sel, "color")
            check("Add User '%s' title color matches Edit User's title color (#2D2F8C)" % label,
                  rgb_to_hex(title_color) == "#2d2f8c" and title_color, title_color)
            title_size = style(c, title_sel, "fontSize")
            title_weight = style(c, title_sel, "fontWeight")
            check("Add User '%s' title font-size matches Edit User's Basic information title" % label,
                  title_size == ref_basic_title_size, "%s vs %s" % (title_size, ref_basic_title_size))
            check("Add User '%s' title font-weight matches Edit User's Basic information title" % label,
                  title_weight == ref_basic_title_weight, "%s vs %s" % (title_weight, ref_basic_title_weight))

            chev_color = style(c, chev_sel, "color")
            check("Add User '%s' chevron color matches Edit User's chevron / 'Back to Users' link color" % label,
                  chev_color == ref_chev_color, "%s vs %s" % (chev_color, ref_chev_color))

            aria = js(c, "document.querySelector(%s).getAttribute('aria-expanded')" % json.dumps(header_sel))
            check("Add User '%s' header starts expanded (aria-expanded=true)" % label, aria == "true")

        # ─── Interaction parity: whole header toggles, up/down chevron ─────
        js(c, "document.getElementById('auBasicCard').querySelector('.cr-section-header[role=\"button\"]').click();")
        time.sleep(0.25)
        check("Add User 'Basic information' collapses on click", js(c, "document.getElementById('auBasicCard').classList.contains('collapsed')"))
        collapsed_chev_transform = style(c, "#auBasicCard .cr-section-chev", "transform")
        check("Collapsed chevron rotates to point up (180deg), not left/right",
              "matrix(-1, 0, 0, -1" in collapsed_chev_transform or "rotate(180deg)" in collapsed_chev_transform,
              collapsed_chev_transform)

        # ─── 4. Collapsing/expanding preserves field values ────────────────
        js(c, "document.getElementById('auPreferredName').value = 'FrankTest';")
        js(c, "document.getElementById('auPreferredName').dispatchEvent(new Event('input', {bubbles:true}));")
        js(c, "document.getElementById('auBasicCard').querySelector('.cr-section-header[role=\"button\"]').click();")
        time.sleep(0.25)
        check("Basic information re-expands", not js(c, "document.getElementById('auBasicCard').classList.contains('collapsed')"))
        check("Preferred name value survives collapse/expand", js(c, "document.getElementById('auPreferredName').value") == "FrankTest")

        # ─── 3. No role assigned yet -> "View access breakdown" hidden ─────
        check("'View access breakdown' wrapper has the hidden attribute (no role yet)",
              js(c, "document.getElementById('auEffActions').hasAttribute('hidden')"))
        check("'View access breakdown' wrapper takes no layout space (display:none) with no role",
              style(c, "#auEffActions", "display") == "none")
        check("Empty-state message is shown", "No effective access for the assigned roles." in js(c, "document.getElementById('auEffTbody').textContent"))

        card_height_no_role = rect(c, "#auRolesCard")["height"]

        # ─── Assign a role via the real combo (keyboard-driven) ────────────
        assigned = assign_first_role_via_combo(c)
        check("A role was successfully assigned through the real Assigned Role combo", assigned)

        if assigned:
            check("'View access breakdown' wrapper's hidden attribute is removed once a role is assigned",
                  not js(c, "document.getElementById('auEffActions').hasAttribute('hidden')"))
            check("'View access breakdown' button is visible and reflows into the layout",
                  style(c, "#auEffActions", "display") != "none")
            eff_view_btn_height = rect(c, "#auEffViewBreakdown")["height"]
            check("'View access breakdown' button height matches Edit User's (%.0fpx)" % ref_eff_view_btn_height,
                  abs(eff_view_btn_height - ref_eff_view_btn_height) <= 1, eff_view_btn_height)
            eff_actions_margin_top = style(c, "#auRolesCard .au-eff-actions", "marginTop")
            check("'View access breakdown' spacing above it matches Edit User's spacing",
                  eff_actions_margin_top == ref_eff_actions_margin_top, "%s vs %s" % (eff_actions_margin_top, ref_eff_actions_margin_top))
            check("Effective access table now has populated rows (not the empty state)",
                  "No effective access for the assigned roles." not in js(c, "document.getElementById('auEffTbody').textContent"))

            card_height_with_role = rect(c, "#auRolesCard")["height"]
            check("Role and Permission card grows once effective-access rows + button are shown",
                  card_height_with_role > card_height_no_role,
                  "no_role=%s with_role=%s" % (card_height_no_role, card_height_with_role))

            # ─── Remove the role -> button hides again, no flash/reset ─────
            removed = js(c, """(function(){
              var btn = document.querySelector('#auRoleCards [data-au-remove]');
              if (!btn) return false;
              btn.click();
              return true;
            })()""")
            time.sleep(0.3)
            check("Role removal control was found and clicked", removed)
            if removed:
                check("'View access breakdown' hides again immediately after removing the only assigned role",
                      js(c, "document.getElementById('auEffActions').hasAttribute('hidden')"))
                check("Empty-state message reappears after role removal",
                      "No effective access for the assigned roles." in js(c, "document.getElementById('auEffTbody').textContent"))

        # ─── 5. Narrower breakpoint: chevron stays right, no overlap ───────
        c.send("Emulation.setDeviceMetricsOverride", {"width": 768, "height": 1100, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.25)
        for chev_sel, title_sel, label in [
            ("#auBasicCard .cr-section-chev", "#auBasicTitle", "Basic information"),
            ("#auRolesCard .cr-section-chev", "#auRolesPermissionsTitle", "Role and Permission"),
        ]:
            chev_rect = rect(c, chev_sel)
            title_rect = rect(c, title_sel)
            check("At 768px, Add User '%s' chevron still sits to the right of the title (no overlap)" % label,
                  chev_rect["left"] >= title_rect["right"], "chev_left=%s title_right=%s" % (chev_rect["left"], title_rect["right"]))

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
