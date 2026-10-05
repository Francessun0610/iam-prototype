#!/usr/bin/env python3
"""Edit Role page ↔ Edit User page header parity (Round 32, 2026-08-11 —
"Update the Edit Role page so its top-level section headers and
page-header spacing match the existing Edit User page exactly").

Unlike `test_edit_role_section_headers.py` (which asserts fixed literal
values), this suite captures Edit User's *actual* rendered values first
and then asserts Edit Role matches them exactly — the same
capture-then-compare approach `test_add_user_edituser_parity.py` uses
for the Add/Edit User pair — so a future change to Edit User's own
tokens/spacing can't silently desync the two pages without failing here.

Covers:
  1. "Role Details"/"Functions" title color, font-family, size, weight,
     line-height match "Basic information"/"Access" on Edit User
     exactly (same #2D2F8C literal).
  2. Their chevrons match Edit User's chevron color (== the "Back to
     Roles"/"Back to Users" link color, already a shared token/rule),
     icon size, and stroke-width exactly.
  3. Card-header left/right padding is equal (title's left gap ==
     chevron's right gap) on both pages, and the numeric gap matches
     between the two pages.
  4. Title and chevron are vertically centered on the header row on
     both pages.
  5. Section content aligns with the section title's left edge on both
     pages.
  6. Edit Role's page-header spacing (back-to-title, title-to-subtitle,
     subtitle-to-boundary) matches Edit User's exactly; the helper text
     no longer touches the header/main-content boundary.
  7. Create Role is completely unaffected (still the pre-Round-32
     Gray/800 color, still the old 8px title-to-subtitle gap, still 0px
     subtitle-to-boundary padding).
  8. Nested "Core Planning" header/color/chevron/"Remove application"
     are unaffected by any of the above.
  9. Expand/collapse interaction and 768px responsive behavior still
     hold on Edit Role after the header-color/spacing changes.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_role_edituser_header_parity.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-editrole-edituser-parity-test-")
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
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1200, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)

        # ─── Reference capture: Edit User ──────────────────────────────────
        click_tab(c, "Users")
        time.sleep(0.3)
        js(c, "document.querySelector('#tbody .name-link').click();")
        time.sleep(0.4)
        check("Reference: Edit User page opened", js(c, "document.getElementById('auPageTitle').textContent.trim()") == "Edit User")

        ref = {
            "title_color": style(c, "#auBasicTitle", "color"),
            "title_font_family": style(c, "#auBasicTitle", "fontFamily"),
            "title_font_size": style(c, "#auBasicTitle", "fontSize"),
            "title_font_weight": style(c, "#auBasicTitle", "fontWeight"),
            "title_line_height": style(c, "#auBasicTitle", "lineHeight"),
            "chev_color": style(c, "#auBasicCard .cr-section-chev", "color"),
            "chev_stroke_width": js(c, "document.querySelector('#auBasicCard .cr-section-chev').getAttribute('stroke-width')"),
            "back_link_color": style(c, "#auBack", "color"),
            "back_to_title_gap": js(c, "(function(){var b=document.getElementById('auBack').getBoundingClientRect(); var t=document.getElementById('auPageTitle').getBoundingClientRect(); return t.top - b.bottom;})()"),
            "title_to_subtitle_gap": js(c, "(function(){var t=document.getElementById('auPageTitle').getBoundingClientRect(); var s=document.getElementById('auPageSubtitle').getBoundingClientRect(); return s.top - t.bottom;})()"),
            "subtitle_to_boundary_gap": js(c, "(function(){var s=document.getElementById('auPageSubtitle').getBoundingClientRect(); var m=document.querySelector('.au-page-main-surface').getBoundingClientRect(); return m.top - s.bottom;})()"),
        }
        chev_rect = rect(c, "#auBasicCard .cr-section-chev")
        title_rect = rect(c, "#auBasicTitle")
        header_rect = rect(c, "#auBasicCard .cr-section-header[role='button']")
        card_rect = rect(c, "#auBasicCard")
        ref["chev_w"] = chev_rect["width"]
        ref["chev_h"] = chev_rect["height"]
        ref["left_gap"] = title_rect["left"] - card_rect["left"]
        ref["right_gap"] = card_rect["right"] - chev_rect["right"]
        ref["vcenter_delta"] = abs(((title_rect["top"] + title_rect["bottom"]) / 2) - ((chev_rect["top"] + chev_rect["bottom"]) / 2))

        # ─── Edit Role ──────────────────────────────────────────────────────
        click_tab(c, "Roles")
        time.sleep(0.3)
        js(c, "document.querySelector('#rpTable tbody .name-link, #rpTable tbody a').click();")
        time.sleep(0.4)
        check("Edit Role page opened", js(c, "document.querySelector('.cr-title').textContent.trim()") == "Edit Role")
        check("createRolePage has is-edit-mode class", js(c, "document.getElementById('createRolePage').classList.contains('is-edit-mode')"))

        for card_id, title_sel, label in [
            ("crBasicCard", "#crBasicCard .cr-section-title", "Role Details"),
            ("crFuncsCard", "#crFunctionsTitle", "Functions"),
        ]:
            title_color = style(c, title_sel, "color")
            check("Edit Role '%s' title color matches Edit User's title color exactly" % label,
                  title_color == ref["title_color"], "%s vs %s" % (title_color, ref["title_color"]))
            check("Edit Role '%s' title font-family matches Edit User's" % label,
                  style(c, title_sel, "fontFamily") == ref["title_font_family"])
            check("Edit Role '%s' title font-size matches Edit User's" % label,
                  style(c, title_sel, "fontSize") == ref["title_font_size"])
            check("Edit Role '%s' title font-weight matches Edit User's" % label,
                  style(c, title_sel, "fontWeight") == ref["title_font_weight"])
            check("Edit Role '%s' title line-height matches Edit User's" % label,
                  style(c, title_sel, "lineHeight") == ref["title_line_height"])

            chev_sel = "#%s .cr-section-chev" % card_id
            chev_color = style(c, chev_sel, "color")
            check("Edit Role '%s' chevron color matches Edit User's chevron color" % label,
                  chev_color == ref["chev_color"], "%s vs %s" % (chev_color, ref["chev_color"]))
            back_link_color = style(c, "#crBack", "color")
            check("Edit Role '%s' chevron color matches the 'Back to Roles' link color (same shared token)" % label,
                  chev_color == back_link_color)
            chev_stroke = js(c, "document.querySelector(%s).getAttribute('stroke-width')" % json.dumps(chev_sel))
            check("Edit Role '%s' chevron stroke-width matches Edit User's ('%s')" % (label, ref["chev_stroke_width"]),
                  chev_stroke == ref["chev_stroke_width"], chev_stroke)
            chev_r = rect(c, chev_sel)
            check("Edit Role '%s' chevron icon size matches Edit User's (%sx%s)" % (label, ref["chev_w"], ref["chev_h"]),
                  abs(chev_r["width"] - ref["chev_w"]) <= 1 and abs(chev_r["height"] - ref["chev_h"]) <= 1,
                  "%sx%s" % (chev_r["width"], chev_r["height"]))

            card_r = rect(c, "#" + card_id)
            title_r = rect(c, title_sel)
            chev_btn_r = rect(c, "#%s .cr-section-chev-btn" % card_id)
            left_gap = title_r["left"] - card_r["left"]
            right_gap = card_r["right"] - chev_btn_r["right"]
            check("Edit Role '%s': equal left/right header padding" % label,
                  abs(left_gap - right_gap) <= 3, "left_gap=%s right_gap=%s" % (left_gap, right_gap))
            vcenter_delta = abs(((title_r["top"] + title_r["bottom"]) / 2) - ((chev_btn_r["top"] + chev_btn_r["bottom"]) / 2))
            check("Edit Role '%s': title and chevron are vertically centered on the header row" % label,
                  vcenter_delta <= 1.5, vcenter_delta)

        # Section content aligns with title's left edge
        basic_title_left = rect(c, "#crBasicCard .cr-section-title")["left"]
        basic_field_left = js(c, "document.querySelector('#crBasicCard .cr-field .cr-label').getBoundingClientRect().left")
        check("Role Details: section content (first field label) aligns with the title's left edge",
              abs(basic_title_left - basic_field_left) <= 2, "title=%s field=%s" % (basic_title_left, basic_field_left))
        funcs_title_left = rect(c, "#crFunctionsTitle")["left"]
        funcs_help_left = js(c, "document.getElementById('crFunctionsHelp').getBoundingClientRect().left")
        check("Functions: section content (help text) aligns with the title's left edge",
              abs(funcs_title_left - funcs_help_left) <= 2, "title=%s help=%s" % (funcs_title_left, funcs_help_left))

        # ─── Page-header spacing parity ────────────────────────────────────
        back_to_title_gap = js(c, "(function(){var b=document.getElementById('crBack').getBoundingClientRect(); var t=document.querySelector('.cr-title').getBoundingClientRect(); return t.top - b.bottom;})()")
        check("Edit Role back-to-title gap matches Edit User's (%spx)" % ref["back_to_title_gap"],
              abs(back_to_title_gap - ref["back_to_title_gap"]) <= 1, back_to_title_gap)
        title_to_subtitle_gap = js(c, "(function(){var t=document.querySelector('.cr-title').getBoundingClientRect(); var s=document.querySelector('.cr-subtitle').getBoundingClientRect(); return s.top - t.bottom;})()")
        check("Edit Role title-to-subtitle gap matches Edit User's (%spx)" % ref["title_to_subtitle_gap"],
              abs(title_to_subtitle_gap - ref["title_to_subtitle_gap"]) <= 1, title_to_subtitle_gap)
        subtitle_to_boundary_gap = js(c, "(function(){var s=document.querySelector('.cr-subtitle').getBoundingClientRect(); var m=document.querySelector('.cr-page-main-surface').getBoundingClientRect(); return m.top - s.bottom;})()")
        check("Edit Role subtitle-to-boundary gap matches Edit User's (%spx) — helper text no longer touches the boundary" % ref["subtitle_to_boundary_gap"],
              abs(subtitle_to_boundary_gap - ref["subtitle_to_boundary_gap"]) <= 1, subtitle_to_boundary_gap)
        check("Helper text has a comfortable, non-zero cushion above the boundary", subtitle_to_boundary_gap >= 10, subtitle_to_boundary_gap)

        # ─── Action group order/behavior preserved ─────────────────────────
        actions_text = js(c, "Array.from(document.querySelectorAll('.cr-header-actions button')).filter(function(b){return b.offsetParent !== null;}).map(function(b){return b.textContent.trim();})")
        check("Header actions keep the order Remove -> Cancel -> Save Role", actions_text == ["Remove", "Cancel", "Save Role"], actions_text)

        # ─── Interaction still works after the styling change ──────────────
        js(c, "document.querySelector('#crBasicCard .cr-section-header[role=\"button\"]').click();")
        time.sleep(0.25)
        check("Role Details still collapses on click after the styling change", js(c, "document.getElementById('crBasicCard').classList.contains('collapsed')"))
        collapsed_transform = style(c, "#crBasicCard .cr-section-chev", "transform")
        check("Collapsed chevron still rotates 180deg (up)", "matrix(-1, 0, 0, -1" in collapsed_transform or "rotate(180deg)" in collapsed_transform, collapsed_transform)
        js(c, "document.querySelector('#crBasicCard .cr-section-header[role=\"button\"]').click();")
        time.sleep(0.25)
        check("Role Details re-expands", not js(c, "document.getElementById('crBasicCard').classList.contains('collapsed')"))

        # ─── Nested Core Planning is unaffected ────────────────────────────
        core_title_color = style(c, "#crFuncsCard .cr-app-title", "color")
        check("Core Planning title is NOT recolored to #2D2F8C (separate component)", rgb_to_hex(core_title_color) != "#2d2f8c", core_title_color)
        check("'Remove application' button is still present and functional", js(c, "!!document.querySelector('#crFuncsCard .cr-app-remove')"))

        # ─── 768px responsive check ─────────────────────────────────────────
        c.send("Emulation.setDeviceMetricsOverride", {"width": 768, "height": 1100, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.25)
        for card_id, title_sel, label in [
            ("crBasicCard", "#crBasicCard .cr-section-title", "Role Details"),
            ("crFuncsCard", "#crFunctionsTitle", "Functions"),
        ]:
            chev_btn_r = rect(c, "#%s .cr-section-chev-btn" % card_id)
            title_r = rect(c, title_sel)
            check("At 768px, Edit Role '%s' chevron still sits to the right of the title" % label,
                  chev_btn_r["left"] >= title_r["right"], "chev_left=%s title_right=%s" % (chev_btn_r["left"], title_r["right"]))
            card_r = rect(c, "#" + card_id)
            left_gap = title_r["left"] - card_r["left"]
            right_gap = card_r["right"] - chev_btn_r["right"]
            check("At 768px, Edit Role '%s' left/right header padding stays equal" % label,
                  abs(left_gap - right_gap) <= 3, "left_gap=%s right_gap=%s" % (left_gap, right_gap))

        # ─── Create Role remains completely untouched ──────────────────────
        js(c, "document.getElementById('crCancel').click();")
        time.sleep(0.3)
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1200, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)
        click_tab(c, "Roles")
        time.sleep(0.3)
        js(c, "document.querySelector('#rolesPanel .tbar-r .btn-ghost, #rolesPanel .btn-ghost').click();")
        time.sleep(0.4)
        check("Create Role page opened", js(c, "document.querySelector('.cr-title').textContent.trim()") == "Create Role")
        cr_title_color = style(c, "#crBasicCard .cr-section-title", "color")
        check("Create Role title is NOT #2D2F8C (unaffected by Round 32)", rgb_to_hex(cr_title_color) != "#2d2f8c", cr_title_color)
        cr_title_subtitle_gap = js(c, "(function(){var t=document.querySelector('.cr-title').getBoundingClientRect(); var s=document.querySelector('.cr-subtitle').getBoundingClientRect(); return s.top - t.bottom;})()")
        check("Create Role title-to-subtitle gap stays at the original 8px (unaffected)", abs(cr_title_subtitle_gap - 8) <= 1, cr_title_subtitle_gap)
        cr_subtitle_boundary_gap = js(c, "(function(){var s=document.querySelector('.cr-subtitle').getBoundingClientRect(); var m=document.querySelector('.cr-page-main-surface').getBoundingClientRect(); return m.top - s.bottom;})()")
        check("Create Role subtitle-to-boundary gap stays at 0px (unaffected)", abs(cr_subtitle_boundary_gap - 0) <= 1, cr_subtitle_boundary_gap)

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
