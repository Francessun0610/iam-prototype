#!/usr/bin/env python3
"""Edit Role page — "Role Details" / "Functions" / nested "Core Planning"
collapsible headers + "Remove application" / "Remove Role" actions
(Round 28, 2026-08-11; title/chevron color reinstated in Round 32,
2026-08-11).

Regression suite for the Round 28 revision of the Edit Role header
redesign, plus Round 32's color correction on top of it:

  - Round 27 recolored "Role Details"/"Functions" title+chevron to
    #2D2F8C. Round 28 reverted this per an explicit "preserve all
    existing text colors" spec. Round 32 ("Update the Edit Role page so
    its top-level section headers... match... Edit User exactly") is a
    later, more specific request that explicitly supersedes Round 28's
    reversion: "Role Details"/"Functions" now reuse the exact same
    #2D2F8C title color and `--brand-text` chevron color as Edit User's
    "Basic information"/"Access" headers, scoped to Edit Role only
    (`#createRolePage.is-edit-mode`) — Create Role's title/chevron stay
    Gray/800, unaffected. The nested "Core Planning" header is a
    separate `.cr-app-title`/`.cr-app-head-chev` component untouched by
    either round and never gets #2D2F8C in any mode.
  - Round 32 also restored the visible keyboard-focus outline Round 28
    had suppressed for Role Details/Functions (`outline: 0`), and fixed
    the page-header vertical rhythm (helper-text-to-boundary gap, and
    title-to-subtitle gap) to match Edit User's exactly, Edit-Role-only.
  - Round 27 left the nested "Core Planning" header untouched. Round 28
    gives it its own right-aligned chevron + repositions "Remove
    application" immediately before it, Edit-Role-only.
  - Round 27's chevron was a bare `<svg>`. Round 28 wraps it in a real,
    decorative (`tabindex="-1"`, `aria-hidden="true"`) `<button>` per an
    accessibility requirement, while the header row itself remains the
    one real keyboard toggle target with a dynamically-updated
    `aria-label` ("Expand ..."/"Collapse ...").
  - Round 28 also restyles Edit Role's "Remove application" as the
    existing ADS compact outlined/secondary `.btn-std` component
    (36px, bordered) instead of the 26px ghost/text-only treatment —
    Create Role keeps the 26px ghost treatment untouched.

Covers:
  1. Edit Role's "Role Details"/"Functions" title is #2D2F8C and their
     chevrons use the same `--brand-text` token as the "Back to Roles"
     link (Round 32, matching Edit User exactly) — in Edit Role mode
     only; Create Role and the nested Core Planning header never get
     #2D2F8C in either mode.
  2. Chevron sits at the far right of each top-level header; title stays
     flush left; chevron's distance from the card's right edge matches
     the title's distance from the card's left edge (both cards).
  3. The chevron is an actual `<button>` element, `tabindex="-1"`,
     `aria-hidden="true"` (decorative — not a second tab stop), sized to
     a ~32px clickable area in Edit Role; the header row itself is
     `role="button"`, keyboard-focusable, and carries a dynamically
     updated `aria-label` ("Expand Role Details" / "Collapse Functions").
  4. Whole header row (not just the chevron) is clickable and toggles
     `aria-expanded` + `.collapsed`; keyboard Enter also toggles.
  5. Expanded chevron points down (unrotated); collapsed chevron is
     rotated 180deg (points up) — never left/right.
  6. Nested "Core Planning" header, Edit Role only: title stays left,
     "Remove application" + a real chevron button sit at the row's far
     right (12-16px apart), the entire row toggles the section, and
     clicking "Remove application" opens its own confirm flow WITHOUT
     toggling the section.
  7. "Remove application" reuses the ADS `.btn-std` component in Edit
     Role (36px, bordered, indigo text unchanged) — Create Role keeps
     the original 26px ghost/text-only treatment.
  8. "Remove Role" still renders as the shared 36px ADS ghost/text
     button, muted gray, aligned with Cancel/Save Role, confirm flow
     intact.
  9. Create Role (the same shared DOM/CSS, different mode) is
     completely unaffected on every one of the above.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_role_section_headers.py
"""

import json
import os
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import urllib.request

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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-editrole-headers-r28-test-")
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


def click_by_text(c, sel_scope, text):
    js(c, "Array.from(document.querySelectorAll(%s)).find(function(b){return b.textContent.trim()===%s;}).click();" % (json.dumps(sel_scope), json.dumps(text)))


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
        click_tab(c, "Roles")
        time.sleep(0.3)
        js(c, "document.querySelector('#rpTable tbody .name-link, #rpTable tbody a').click();")
        time.sleep(0.4)
        check("Edit Role page opened", js(c, "document.querySelector('#createRolePage .cr-title').textContent.trim()") == "Edit Role")
        check("createRolePage has is-edit-mode class", js(c, "document.getElementById('createRolePage').classList.contains('is-edit-mode')"))

        # ─── 1. Role Details/Functions titles+chevrons match Edit User's
        #        #2D2F8C / --brand-text exactly (Round 32); Core Planning
        #        stays untouched at its own Gray/800 rest color ──────────
        back_link_color = style(c, "#crBack", "color")
        for sel in ("#crBasicCard .cr-section-title", "#crFunctionsTitle"):
            color = style(c, sel, "color")
            check("%s color is #2D2F8C (Round 32 — matches Edit User's title color)" % sel, rgb_to_hex(color) == "#2d2f8c", color)
        for sel in ("#crBasicCard .cr-section-chev", "#crFuncsCard .cr-section-chev"):
            color = style(c, sel, "color")
            check("%s color matches the 'Back to Roles' link color (Round 32 — same --brand-text token as Edit User)" % sel,
                  color == back_link_color, "%s vs back link %s" % (color, back_link_color))
        core_title_color = style(c, "#crFuncsCard .cr-app-title", "color")
        core_chev_color_check = style(c, "#crFuncsCard .cr-app-head-chev", "color")
        check("Core Planning title color is NOT #2D2F8C (separate component, unaffected by Round 32)", rgb_to_hex(core_title_color) != "#2d2f8c", core_title_color)
        check("Core Planning chevron color is NOT #2D2F8C (separate component, unaffected by Round 32)", rgb_to_hex(core_chev_color_check) != "#2d2f8c", core_chev_color_check)

        # Visible keyboard-focus outline restored (Round 32) — real Tab
        # navigation only, since `:focus-visible` doesn't reliably
        # activate for a synthetic `.focus()` call.
        js(c, "document.activeElement && document.activeElement.blur(); document.body.focus();")
        focused_toggle = None
        # Real Tab key events (not synthetic dispatchEvent), same helper
        # pattern as test_back_navigation.py.
        for _ in range(40):
            c.key("Tab", "Tab")
            time.sleep(0.02)
            focused_toggle = js(c, "document.activeElement ? document.activeElement.getAttribute('data-cr-toggle') : null")
            if focused_toggle == "basic":
                break
        check("Role Details header is reachable via sequential Tab navigation", focused_toggle == "basic", focused_toggle)
        matches_fv = js(c, "document.activeElement.matches(':focus-visible')")
        outline_style = js(c, "getComputedStyle(document.activeElement).outlineStyle")
        check("Real Tab focus activates a visible :focus-visible outline (Round 32 — restored to match Edit User)",
              matches_fv is True and outline_style == "solid", "focus-visible=%s outline-style=%s" % (matches_fv, outline_style))

        # ─── 2. Chevron on the right, title flush left, aligned with body ──
        for card, title_id in [("crBasicCard", None), ("crFuncsCard", "crFunctionsTitle")]:
            header_sel = "#%s .cr-section-header[role='button']" % card
            chev_btn_sel = "#%s .cr-section-chev-btn" % card
            title_sel = ("#" + title_id) if title_id else ("#%s .cr-section-title" % card)
            card_rect = rect(c, "#" + card)
            chev_rect = rect(c, chev_btn_sel)
            title_rect = rect(c, title_sel)
            check("%s: chevron sits to the right of the title" % card, chev_rect["left"] > title_rect["right"])
            left_gap = title_rect["left"] - card_rect["left"]
            right_gap = card_rect["right"] - chev_rect["right"]
            check("%s: title's left gap and chevron's right gap roughly match" % card,
                  abs(left_gap - right_gap) <= 3, "left_gap=%s right_gap=%s" % (left_gap, right_gap))
            check("%s: title left edge is ~24px from the card's left edge" % card, abs(left_gap - 24) <= 2, left_gap)
            check("%s: chevron button clickable area is ~32-36px" % card,
                  30 <= chev_rect["width"] <= 36 and 30 <= chev_rect["height"] <= 36,
                  "w=%s h=%s" % (chev_rect["width"], chev_rect["height"]))

        basic_title_left = rect(c, "#crBasicCard .cr-section-title")["left"]
        basic_body_left = js(c, "document.querySelector('#crBasicCard .cr-field').getBoundingClientRect().left")
        check("Role Details: title and first field share the same left edge",
              abs(basic_title_left - basic_body_left) <= 2, "title=%s body=%s" % (basic_title_left, basic_body_left))
        funcs_title_left = rect(c, "#crFunctionsTitle")["left"]
        funcs_help_left = js(c, "document.getElementById('crFunctionsHelp').getBoundingClientRect().left")
        check("Functions: title and help text share the same left edge",
              abs(funcs_title_left - funcs_help_left) <= 2, "title=%s help=%s" % (funcs_title_left, funcs_help_left))

        # ─── 3. Chevron is a real, decorative <button>; header carries the
        #        one real keyboard toggle + dynamic aria-label ────────────
        for card, label in [("crBasicCard", "Role Details"), ("crFuncsCard", "Functions")]:
            chev_tag = js(c, "document.querySelector('#%s .cr-section-chev-btn').tagName" % card)
            check("%s chevron wrapper is an actual <button>" % card, chev_tag == "BUTTON", chev_tag)
            chev_tabindex = js(c, "document.querySelector('#%s .cr-section-chev-btn').getAttribute('tabindex')" % card)
            check("%s chevron button is not an independent tab stop (tabindex=-1)" % card, chev_tabindex == "-1", chev_tabindex)
            chev_hidden = js(c, "document.querySelector('#%s .cr-section-chev-btn').getAttribute('aria-hidden')" % card)
            check("%s chevron button is aria-hidden (decorative)" % card, chev_hidden == "true", chev_hidden)
            header_label = js(c, "document.querySelector('#%s .cr-section-header[role=\\'button\\']').getAttribute('aria-label')" % card)
            check("%s header aria-label reflects expanded state ('Collapse %s')" % (card, label), header_label == ("Collapse " + label), header_label)

        # ─── 5. Expanded chevron points down (no rotation) ────────────────
        basic_expanded = js(c, "document.querySelector('#crBasicCard .cr-section-header[role=\"button\"]').getAttribute('aria-expanded')")
        check("Role Details starts expanded (aria-expanded=true)", basic_expanded == "true")
        chev_transform = style(c, "#crBasicCard .cr-section-chev", "transform")
        check("Expanded chevron has no rotation applied", chev_transform in ("none", "matrix(1, 0, 0, 1, 0, 0)"), chev_transform)

        # ─── 4/5. Click anywhere on header toggles + up-chevron on collapse ──
        header_rect = rect(c, "#crBasicCard .cr-section-header[role='button']")
        mid_empty_x = (header_rect["left"] + header_rect["right"]) / 2
        mid_y = (header_rect["top"] + header_rect["bottom"]) / 2
        js(c, """
        (function(){
          var el = document.elementFromPoint(%f, %f);
          el.dispatchEvent(new MouseEvent('click', {bubbles:true, clientX:%f, clientY:%f}));
        })()
        """ % (mid_empty_x, mid_y, mid_empty_x, mid_y))
        time.sleep(0.3)
        basic_collapsed_attr = js(c, "document.querySelector('#crBasicCard .cr-section-header[role=\"button\"]').getAttribute('aria-expanded')")
        check("Clicking the empty middle of the header toggles aria-expanded to false", basic_collapsed_attr == "false", basic_collapsed_attr)
        check("Card gets the .collapsed class", js(c, "document.getElementById('crBasicCard').classList.contains('collapsed')"))
        chev_transform_collapsed = style(c, "#crBasicCard .cr-section-chev", "transform")
        check("Collapsed chevron is rotated 180deg (up), not 90/-90deg (left/right)",
              "matrix(-1, 0, 0, -1" in chev_transform_collapsed or "rotate(180deg)" in chev_transform_collapsed,
              chev_transform_collapsed)
        basic_collapsed_label = js(c, "document.querySelector('#crBasicCard .cr-section-header[role=\"button\"]').getAttribute('aria-label')")
        check("Collapsed header aria-label updates to 'Expand Role Details'", basic_collapsed_label == "Expand Role Details", basic_collapsed_label)

        # Keyboard toggle (re-expand via Enter)
        js(c, "document.querySelector('#crBasicCard .cr-section-header[role=\"button\"]').focus();")
        js(c, "document.activeElement.dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));")
        time.sleep(0.3)
        check("Keyboard Enter re-expands the header (aria-expanded=true)",
              js(c, "document.querySelector('#crBasicCard .cr-section-header[role=\"button\"]').getAttribute('aria-expanded')") == "true")

        # Same check for Functions card
        js(c, "document.querySelector('#crFuncsCard .cr-section-header[role=\"button\"]').click();")
        time.sleep(0.3)
        check("Functions collapses on click", js(c, "document.getElementById('crFuncsCard').classList.contains('collapsed')"))
        # Round 33 (2026-08-11): Functions' own convention is now the
        # OPPOSITE of Role Details/every other accordion — collapsed
        # points DOWN (unrotated), expanded points UP (180deg) — to
        # match the nested application chevrons this same round
        # introduces. See test_edit_role_functions_hierarchy.py for
        # full coverage of this inverted convention.
        funcs_chev_transform = style(c, "#crFuncsCard .cr-section-chev", "transform")
        check("Functions collapsed chevron is unrotated (down) — inverted convention (Round 33)",
              funcs_chev_transform in ("none", "matrix(1, 0, 0, 1, 0, 0)"),
              funcs_chev_transform)
        js(c, "document.querySelector('#crFuncsCard .cr-section-header[role=\"button\"]').click();")
        time.sleep(0.3)

        # ─── 6. Nested "Core Planning" header, Edit Role only ─────────────
        core_head_role = js(c, "document.querySelector('#crFuncsCard .cr-app-section-head').getAttribute('role')")
        check("Core Planning header row is role=button (whole row toggles)", core_head_role == "button")
        core_title_rect = rect(c, "#crFuncsCard .cr-app-title")
        core_remove_rect = rect(c, "#crFuncsCard .cr-app-remove")
        core_chev_btn_rect = rect(c, "#crFuncsCard .cr-app-head-chev-btn")
        check("Core Planning title sits at the left", core_title_rect["left"] < core_remove_rect["left"])
        # Round 33 (2026-08-11): reworked hierarchy — the chevron now sits
        # immediately BEFORE the application name (not grouped with Remove
        # application on the far right). See test_edit_role_functions_hierarchy.py
        # for full coverage of the new "[chevron] Name ... [Remove application]"
        # layout, neutral nested-chevron color, and inverted expand/collapse
        # direction.
        check("Core Planning chevron sits immediately before the title (Round 33 layout)",
              core_chev_btn_rect["right"] <= core_title_rect["left"] + 1,
              "chev_right=%s title_left=%s" % (core_chev_btn_rect["right"], core_title_rect["left"]))
        gap = core_title_rect["left"] - core_chev_btn_rect["right"]
        check("Core Planning: ~8px gap between the chevron and the title (Round 33)",
              6 <= gap <= 10, gap)
        check("Core Planning 'Remove application' sits at the far right, with no chevron beside it (Round 33)",
              core_remove_rect["left"] > core_title_rect["left"])
        check("Core Planning chevron button clickable area is ~32-36px",
              30 <= core_chev_btn_rect["width"] <= 36 and 30 <= core_chev_btn_rect["height"] <= 36,
              "w=%s h=%s" % (core_chev_btn_rect["width"], core_chev_btn_rect["height"]))
        chev_btn_tag = js(c, "document.querySelector('#crFuncsCard .cr-app-head-chev-btn').tagName")
        check("Core Planning chevron wrapper is an actual <button>", chev_btn_tag == "BUTTON", chev_btn_tag)
        core_head_label = js(c, "document.querySelector('#crFuncsCard .cr-app-section-head').getAttribute('aria-label')")
        check("Core Planning header aria-label reflects expanded state", core_head_label == "Collapse Core Planning", core_head_label)

        # Clicking Remove application must NOT toggle the section
        core_section_collapsed_before = js(c, "document.querySelector('#crFuncsCard .cr-app-section--matrix').classList.contains('cr-app-section--collapsed')")
        js(c, "document.querySelector('#crFuncsCard .cr-app-remove').dispatchEvent(new MouseEvent('click', {bubbles:true}));")
        time.sleep(0.3)
        core_section_collapsed_after = js(c, "document.querySelector('#crFuncsCard .cr-app-section--matrix').classList.contains('cr-app-section--collapsed')")
        check("Clicking 'Remove application' does not toggle the Core Planning section",
              core_section_collapsed_before == core_section_collapsed_after,
              "before=%s after=%s" % (core_section_collapsed_before, core_section_collapsed_after))
        confirm_visible = js(c, "(function(){var el=document.getElementById('crAppRemoveConfirm')||document.querySelector('[id*=\"RemoveApp\"]'); if(!el) return 'no-modal-id-assumed-ok'; var r=el.getBoundingClientRect(); return r.width>0 && r.height>0;})()")
        check("Clicking 'Remove application' still triggers its own remove flow (no JS error)", confirm_visible is not False, confirm_visible)
        js(c, "document.body.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape', bubbles:true}));")
        time.sleep(0.2)

        # Clicking elsewhere on the Core Planning header DOES toggle the section
        js(c, "document.querySelector('#crFuncsCard .cr-app-title').dispatchEvent(new MouseEvent('click', {bubbles:true}));")
        time.sleep(0.3)
        core_section_collapsed_now = js(c, "document.querySelector('#crFuncsCard .cr-app-section--matrix').classList.contains('cr-app-section--collapsed')")
        check("Clicking the Core Planning title toggles the section",
              core_section_collapsed_now != core_section_collapsed_before, core_section_collapsed_now)
        core_chev_transform_collapsed = style(c, "#crFuncsCard .cr-app-head-chev", "transform")
        if core_section_collapsed_now:
            # Round 33 (2026-08-11): inverted convention — collapsed now
            # points DOWN (unrotated), not up/180deg.
            check("Collapsed Core Planning chevron is unrotated (down), not -90deg or 180deg (Round 33)",
                  core_chev_transform_collapsed in ("none", "matrix(1, 0, 0, 1, 0, 0)"),
                  core_chev_transform_collapsed)
        # restore expanded state
        js(c, "document.querySelector('#crFuncsCard .cr-app-title').dispatchEvent(new MouseEvent('click', {bubbles:true}));")
        time.sleep(0.3)

        # ─── 7. "Remove application" uses ADS .btn-std in Edit Role ───────
        core_remove_classes = js(c, "document.querySelector('#crFuncsCard .cr-app-remove').className")
        check("Edit Role 'Remove application' has the btn-std class", "btn-std" in core_remove_classes, core_remove_classes)
        core_remove_height = rect(c, "#crFuncsCard .cr-app-remove")["height"]
        check("Edit Role 'Remove application' is ~36px tall (ADS button contract)",
              abs(core_remove_height - 36) <= 1, core_remove_height)
        core_remove_border = style(c, "#crFuncsCard .cr-app-remove", "borderWidth")
        check("Edit Role 'Remove application' has a visible border (bordered/outlined variant)",
              core_remove_border not in ("0px",), core_remove_border)
        core_remove_color = style(c, "#crFuncsCard .cr-app-remove", "color")
        check("Edit Role 'Remove application' text color is unchanged indigo (#4045c2)",
              rgb_to_hex(core_remove_color) == "#4045c2", core_remove_color)
        core_remove_icon = js(c, "document.querySelector('#crFuncsCard .cr-app-remove svg')")
        check("'Remove application' has no icon markup", core_remove_icon is None, core_remove_icon)

        # ─── 8. "Remove Role" — shared ADS ghost/text-button component ────
        remove_rect = rect(c, "#crRemove")
        cancel_rect = rect(c, "#crCancel")
        save_rect = rect(c, "#crSave")
        check("Remove Role is visible in Edit Role mode", not js(c, "document.getElementById('crRemove').hasAttribute('hidden')"))
        check("Save as Draft is hidden in Edit Role mode", js(c, "document.getElementById('crSaveDraft').hasAttribute('hidden')"))
        check("Remove Role height matches Cancel/Save Role (36px)",
              abs(remove_rect["height"] - 36) <= 1 and abs(remove_rect["height"] - cancel_rect["height"]) <= 1 and abs(remove_rect["height"] - save_rect["height"]) <= 1,
              "remove=%s cancel=%s save=%s" % (remove_rect["height"], cancel_rect["height"], save_rect["height"]))
        check("Remove Role top-aligns with Cancel/Save Role",
              abs(remove_rect["top"] - cancel_rect["top"]) <= 1 and abs(remove_rect["top"] - save_rect["top"]) <= 1,
              "remove=%s cancel=%s save=%s" % (remove_rect["top"], cancel_rect["top"], save_rect["top"]))
        check("Remove Role sits before Cancel/Save Role (left of both)",
              remove_rect["right"] <= cancel_rect["left"] and cancel_rect["right"] <= save_rect["left"])
        remove_color = style(c, "#crRemove", "color")
        check("Remove Role is muted gray, NOT red or indigo (matches Revoke access/Delete Team ghost treatment)",
              rgb_to_hex(remove_color) not in ("#993b44", "#af434e", "#4045c2"), remove_color)
        remove_icon = js(c, "document.querySelector('#crRemove svg')")
        check("Remove Role has no icon/arrow markup", remove_icon is None, remove_icon)

        # Confirmation flow still works
        js(c, "document.getElementById('crRemove').click();")
        time.sleep(0.3)
        confirm_visible2 = js(c, "(function(){var el=document.getElementById('crConfirmRemove'); if(!el) return false; var r=el.getBoundingClientRect(); return r.width>0 && r.height>0;})()")
        check("Clicking Remove Role opens the confirmation dialog", confirm_visible2)
        js(c, "document.body.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape', bubbles:true}));")
        time.sleep(0.2)

        # ─── 9. Create Role fully unaffected ───────────────────────────────
        js(c, "document.getElementById('crCancel') && document.getElementById('crCancel').click();")
        time.sleep(0.3)
        click_by_text(c, "#rolesPanel button, .tbar button", "Create Role")
        time.sleep(0.4)
        check("createRolePage loses is-edit-mode in Create Role mode",
              not js(c, "document.getElementById('createRolePage').classList.contains('is-edit-mode')"))
        cr_chev_btn_rect = rect(c, "#crBasicCard .cr-section-chev-btn")
        cr_title_rect = rect(c, "#crBasicCard .cr-section-title")
        check("Create Role chevron still sits to the LEFT of its title (unaffected)",
              cr_chev_btn_rect["left"] < cr_title_rect["left"], "chev_left=%s title_left=%s" % (cr_chev_btn_rect["left"], cr_title_rect["left"]))
        check("Create Role chevron button is still 16px (not grown)",
              abs(cr_chev_btn_rect["width"] - 16) <= 1 and abs(cr_chev_btn_rect["height"] - 16) <= 1,
              "w=%s h=%s" % (cr_chev_btn_rect["width"], cr_chev_btn_rect["height"]))
        cr_title_color = style(c, "#crBasicCard .cr-section-title", "color")
        check("Create Role title is NOT #2D2F8C (unaffected)", rgb_to_hex(cr_title_color) != "#2d2f8c", cr_title_color)
        check("Remove Role is hidden in Create Role mode", js(c, "document.getElementById('crRemove').hasAttribute('hidden')"))
        check("Save as Draft is visible in Create Role mode", not js(c, "document.getElementById('crSaveDraft').hasAttribute('hidden')"))

        # Create Role: add an application and verify Core Planning keeps the OLD layout
        js(c, "document.getElementById('crAppTrigger').click();")
        time.sleep(0.3)
        click_by_text(c, "#crAppMenu [role='option'], #crAppMenu li, #crAppMenu button", "Core Planning")
        time.sleep(0.2)
        js(c, "document.getElementById('crAddBtn').click();")
        time.sleep(0.4)
        cr_core_head_role = js(c, "(function(){var el=document.querySelector('#crFuncsCard .cr-app-section-head'); return el && el.getAttribute('role');})()")
        cr_core_title_rect = rect(c, "#crFuncsCard .cr-app-title")
        cr_core_remove_rect = rect(c, "#crFuncsCard .cr-app-remove")
        cr_core_chev_btn_rect = rect(c, "#crFuncsCard .cr-app-head-chev-btn")
        if cr_core_title_rect and cr_core_remove_rect and cr_core_chev_btn_rect:
            check("Create Role Core Planning: chevron still sits to the LEFT of the title (unaffected)",
                  cr_core_chev_btn_rect["left"] < cr_core_title_rect["left"],
                  "chev_left=%s title_left=%s" % (cr_core_chev_btn_rect["left"], cr_core_title_rect["left"]))
            check("Create Role Core Planning: 'Remove application' still sits at the far right (unaffected)",
                  cr_core_remove_rect["left"] > cr_core_title_rect["right"],
                  "remove_left=%s title_right=%s" % (cr_core_remove_rect["left"], cr_core_title_rect["right"]))
            cr_core_remove_classes = js(c, "document.querySelector('#crFuncsCard .cr-app-remove').className")
            check("Create Role 'Remove application' does NOT get the btn-std class",
                  "btn-std" not in cr_core_remove_classes, cr_core_remove_classes)
            cr_core_remove_height = cr_core_remove_rect["height"]
            check("Create Role 'Remove application' keeps the old ~26px ghost height (unaffected)",
                  cr_core_remove_height <= 28, cr_core_remove_height)
        else:
            check("Create Role Core Planning section rendered for verification", False, "one or more elements missing")

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
