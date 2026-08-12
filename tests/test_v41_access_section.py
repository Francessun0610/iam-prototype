#!/usr/bin/env python3
"""End-to-end tests for the V4.1 Edit User "Access" section refinement.

Covers two passes:
  * Round 2 (2026-08-11): removing the supporting sentence from Edit
    mode only, pulling the remaining content upward, rebalancing
    vertical rhythm, shrinking the card, and rebuilding "View access
    breakdown" onto the ADS Button component at Figma node 7722:259
    (Variant=ghost, Size=default, State=rest).
  * Round 22 (2026-08-11 — Access card refinement, Figma node 7722:252):
    widening 3 of those same gaps to the brief's 20-24px targets
    (heading -> Assigned Role label, role controls -> table, table ->
    "View access breakdown"), and rebuilding "View access breakdown"
    again onto the ADS *tertiary* Button variant (Figma node 7722:252,
    Type=text+icon) instead of ghost — adding tertiary's 1px border and
    a trailing chevron icon, so the control now reads as a bordered
    button at rest instead of plain SemiBold text.

Scoped to `public/v4.1/` only — `public/v4/` is a separate, independently
versioned copy and must not be touched by this pass (see
`tests/test_effective_access_breakdown.py`, which still exercises the
older v4-only behavior and must keep passing unmodified).

Covers:
  * The supporting sentence is gone from Edit User's Access card (no
    box, no reserved space, not in the accessibility tree) while the
    identical sentence still renders normally on Add User's "Role and
    Permission" card (scope restriction — this is shared markup toggled
    by `.is-edit-mode`, not two separate elements).
  * Content order top -> bottom: heading, Assigned Role label, select/
    action row, effective-access table, "View access breakdown".
  * Vertical rhythm: heading -> label (~20-24px), label -> row, row ->
    table (~24px), table -> button (~20-24px), using round 22's widened
    ADS gaps (no leftover blank rows, no `space-between` stretch hack).
  * "View access breakdown" is the ADS tertiary/default Button (36px
    height, 8px/12px padding, 6px radius, Open Sans SemiBold 14/20,
    transparent background at rest with a 1px border, trailing chevron
    icon) — not the old 26px compact contract, not round 2's borderless
    ghost variant — and is positioned via its container's edge, not a
    negative margin.
  * Breakdown modal still opens/closes/returns focus correctly.
  * Accordion collapse: Access collapses to the same height as Basic
    Information, restores the compact layout when reopened.
  * Responsive spacing/alignment at 1024/1280/1440/1920/2560.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_v41_access_section.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-access-test-")
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


def style(c, sel, prop):
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      return getComputedStyle(el)[%s];
    })()
    """ % (json.dumps(sel), json.dumps(prop)))


def open_edit_user(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.2)
    js(c, """
    (function(){
      var inp = document.querySelector('#usersPanel .search input');
      var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(inp, %s);
      inp.dispatchEvent(new Event('input', {bubbles:true}));
    })()
    """ % json.dumps(name))
    time.sleep(0.4)
    found = js(c, """
    (function(){
      var links = Array.from(document.querySelectorAll('#usersTable a.name-link'));
      var l = links.find(function(a){return a.textContent.indexOf(%s) !== -1;});
      if (l) { l.click(); return true; }
      return false;
    })()
    """ % json.dumps(name))
    time.sleep(0.4)
    return found


def modal_hidden(c):
    return js(c, "document.getElementById('auEffBreakdownBackdrop').hasAttribute('hidden')")


def open_modal(c):
    js(c, "document.getElementById('auEffViewBreakdown').click();")
    for _ in range(30):
        if not modal_hidden(c) and js(c, "!!document.querySelector('.au-eff-modal-row')"):
            break
        time.sleep(0.1)
    time.sleep(0.1)


CLICK_ADD_USER_BTN = (
    "(function(){"
    " var b=document.querySelectorAll('#usersPanel .btn-ghost');"
    " for (var i=0;i<b.length;i++){"
    "   if (b[i].textContent.indexOf('Add User')!==-1){ b[i].click(); return true; }"
    " } return false; })()"
)


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
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1000, "deviceScaleFactor": 1, "mobile": False})

    console_errors = []
    c.send("Runtime.enable")

    c.navigate(base + "/v4.1/", wait=1.2)
    opened = open_edit_user(c, "Homer Simpson")
    check("Setup: Edit User page opened for a real user in V4.1", opened)

    # ── 1. Supporting sentence removed from Edit User's Access card ────
    edit_mode = js(c, "document.getElementById('addUsersPage').classList.contains('is-edit-mode')")
    check("Setup: page is in Edit mode", edit_mode is True)
    helper_display = style(c, "#auAccessHelper", "display")
    check("Access helper sentence has display:none in Edit mode (no box at all)", helper_display == "none", helper_display)
    helper_rect = rect(c, "#auAccessHelper")
    check("Access helper sentence occupies zero space (getBoundingClientRect collapses)",
          helper_rect is None or (helper_rect["width"] == 0 and helper_rect["height"] == 0))
    check("Access helper sentence is removed from the accessibility tree (display:none)",
          js(c, "(function(){var el=document.getElementById('auAccessHelper'); return getComputedStyle(el).display === 'none';})()"))
    check("Sentence text itself is untouched/still in the DOM (shared markup, not deleted)",
          "Role assignment determines" in js(c, "document.getElementById('auAccessHelper').textContent"))
    check("Not hidden via visibility:hidden", style(c, "#auAccessHelper", "visibility") != "hidden" or helper_display == "none")
    check("Not hidden via opacity:0 trick", style(c, "#auAccessHelper", "opacity") != "0" or helper_display == "none")

    # ── 2. Content order top -> bottom ──────────────────────────────────
    heading_r = rect(c, "#auRolesPermissionsTitle")
    label_r = rect(c, "label[for='auRoleCombo-ctl']")
    row_r = rect(c, "#auRolesCard .au-role-row")
    table_r = rect(c, "#auEffTable")
    btn_r = rect(c, "#auEffViewBreakdown")
    check("Order: heading above Assigned Role label", heading_r["bottom"] <= label_r["top"] + 1)
    check("Order: label above select/action row", label_r["bottom"] <= row_r["top"] + 1)
    check("Order: select/action row above table", row_r["bottom"] <= table_r["top"] + 1)
    check("Order: table above 'View access breakdown'", table_r["bottom"] <= btn_r["top"] + 1)

    # ── 3. Vertical rhythm (round 22 — widened to the brief's 20-24px
    #      targets; see the module docstring) ──────────────────────────
    header_row_r = rect(c, "#auRolesCard .cr-section-header")
    gap_head_to_label = label_r["top"] - header_row_r["bottom"]
    check("Heading -> label gap is 20-24px (brief: more breathing room than round 2's crowded 12px)",
          20 <= gap_head_to_label <= 24, "%.1fpx" % gap_head_to_label)
    gap_label_to_row = row_r["top"] - label_r["bottom"]
    check("Label -> control row gap is the tight ADS label gap (~4px)", 0 <= gap_label_to_row <= 8, "%.1fpx" % gap_label_to_row)
    gap_row_to_table = table_r["top"] - row_r["bottom"]
    check("Row -> table gap is ~24px (brief: role controls -> access table)", 20 <= gap_row_to_table <= 28, "%.1fpx" % gap_row_to_table)
    gap_table_to_btn = btn_r["top"] - table_r["bottom"]
    check("Table -> button gap is <= row -> table (button still reads as the table's action, just less tightly)",
          gap_table_to_btn <= gap_row_to_table, "%.1fpx vs %.1fpx" % (gap_table_to_btn, gap_row_to_table))
    check("Table -> button gap is 20-24px (brief: does not feel attached to the final table row)",
          20 <= gap_table_to_btn <= 24, "%.1fpx" % gap_table_to_btn)

    card_r = rect(c, "#auRolesCard")
    bottom_padding = card_r["bottom"] - btn_r["bottom"]
    check("Card bottom padding below the button is present and not excessive", 8 <= bottom_padding <= 32, "%.1fpx" % bottom_padding)

    # ── 4. "View access breakdown" — ADS tertiary/default Button
    #      (round 22, Figma node 7722:252) ──────────────────────────────
    trig_sel = "#auEffViewBreakdown"
    check("Trigger label reads 'View access breakdown'", js(c, "document.querySelector('%s').textContent.trim()" % trig_sel) == "View access breakdown")
    check("Trigger is a semantic <button>", js(c, "document.querySelector('%s').tagName" % trig_sel) == "BUTTON")
    check("Trigger height is 36px (ADS tertiary/default, not the old 26px compact contract)",
          abs(btn_r["height"] - 36) < 1, "%.1fpx" % btn_r["height"])
    check("Trigger has a visible border at rest (ADS tertiary, not round 2's borderless ghost)",
          style(c, trig_sel, "borderStyle") == "solid" and style(c, trig_sel, "borderWidth") == "1px")
    border_color = style(c, trig_sel, "borderColor")
    check("Trigger border color is the ADS tertiary token rgba(15,18,20,0.5)",
          "15, 18, 20" in border_color and "0.5" in border_color, border_color)
    check("Trigger has transparent background at rest", style(c, trig_sel, "backgroundColor") == "rgba(0, 0, 0, 0)")
    check("Trigger radius is 6px", style(c, trig_sel, "borderRadius") == "6px")
    check("Trigger font-size is 14px", style(c, trig_sel, "fontSize") == "14px")
    check("Trigger font-weight is 600 (SemiBold)", style(c, trig_sel, "fontWeight") == "600")
    check("Trigger line-height is 20px", style(c, trig_sel, "lineHeight") == "20px")
    text_color = style(c, trig_sel, "color")
    check("Trigger text color is the ADS tertiary token #51585b", text_color == "rgb(81, 88, 91)", text_color)
    # Round 3 added a trailing chevron-right here per the then-current Figma
    # "Type=text+icon" tertiary instance; Round 26 removed it again per an
    # updated text-only spec, and the final-QA brief restates that outcome
    # ("View access breakdown has no unnecessary right arrow"). The label is
    # the button's only child, so the trigger stays a text-only tertiary.
    check("Trigger has no arrow/chevron icon (text-only tertiary, not text+icon)",
          not js(c, "!!document.querySelector('%s svg')" % trig_sel))
    check("Trigger's label is its only child element",
          js(c, """
          (function(){
            var btn = document.querySelector('%s');
            if (!btn) return false;
            var label = btn.querySelector('span');
            return !!label && btn.children.length === 1 && btn.children[0] === label;
          })()
          """ % trig_sel))
    check("Trigger's label text is exactly 'View access breakdown'",
          js(c, "document.querySelector('%s').textContent.trim()" % trig_sel) == "View access breakdown",
          js(c, "document.querySelector('%s').textContent.trim()" % trig_sel))

    # No negative margin: the button's own left edge (not just its text)
    # sits flush with the table's content boundary, because its container
    # starts there and the button itself carries no compensating margin.
    computed_ml = style(c, trig_sel, "marginLeft")
    check("Trigger uses no negative margin to fake alignment", computed_ml in ("0px", "auto") or float(computed_ml.replace("px", "")) >= 0, computed_ml)
    first_col_r = rect(c, ".au-eff-th-app")
    check("Trigger's own box (left edge) aligns with the table's content boundary",
          abs(btn_r["left"] - first_col_r["left"]) < 1, "%.1f vs %.1f" % (btn_r["left"], first_col_r["left"]))
    check("Trigger is not inside the <table> element",
          not js(c, "document.getElementById('auEffTable').contains(document.querySelector('%s'))" % trig_sel))
    check("Trigger is inside the table section wrapper (#auEffWrap)",
          js(c, "document.getElementById('auEffWrap').contains(document.querySelector('%s'))" % trig_sel))

    # Hover / active / focus states
    cx, cy = btn_r["left"] + btn_r["width"] / 2, btn_r["top"] + btn_r["height"] / 2
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": cx, "y": cy})
    time.sleep(0.15)
    hover_bg = style(c, trig_sel, "backgroundColor")
    check("Hover background is the neutral ADS ghost tint (not transparent)", hover_bg != "rgba(0, 0, 0, 0)", hover_bg)
    check("Hover background is neutral gray, not brand/indigo", "rgba(15, 18, 20" in hover_bg or "rgb(15, 18, 20" in hover_bg, hover_bg)

    js(c, "document.getElementById('auRoleMultiTrigger').focus();")
    time.sleep(0.05)
    c.key("Tab")
    time.sleep(0.15)
    check("Tab order reaches the trigger next", js(c, "document.activeElement.id") == "auEffViewBreakdown")
    check("Trigger shows a visible focus-visible outline", style(c, trig_sel, "outlineStyle") == "solid")

    # ── 5. Breakdown modal still works, focus returns correctly ────────
    open_modal(c)
    check("Clicking the trigger opens the 'Effective access breakdown' modal", not modal_hidden(c))
    check("Modal title unchanged", js(c, "document.getElementById('auEffBreakdownTitle').textContent.trim()") == "Effective access breakdown")
    js(c, "document.getElementById('auEffBreakdownX').click();")
    time.sleep(0.2)
    check("Modal closes via the header X", modal_hidden(c))
    check("Focus returns to the (relocated, restyled) trigger after closing", js(c, "document.activeElement.id") == "auEffViewBreakdown")

    # ── 6. Accordion collapse: equal height with Basic Information ────
    # Both cards must be collapsed to compare collapsed heights — Basic
    # Information starts expanded, so its own toggle needs a click too.
    js(c, "document.querySelector('#auBasicCard .cr-section-header').click();")
    js(c, "document.querySelector('#auRolesCard .cr-section-header').click();")
    time.sleep(0.2)
    check("Access card collapses", js(c, "document.getElementById('auRolesCard').classList.contains('collapsed')"))
    check("Basic Information card collapses", js(c, "document.getElementById('auBasicCard').classList.contains('collapsed')"))
    check("Collapsed Access shows only chevron + title (no table/button visible)",
          not js(c, "document.getElementById('auEffTable').offsetParent !== null || document.getElementById('auEffViewBreakdown').offsetParent !== null"))
    basic_collapsed_r = rect(c, "#auBasicCard")
    access_collapsed_r = rect(c, "#auRolesCard")
    check("Collapsed Basic Information and Access cards have equal height",
          abs(basic_collapsed_r["height"] - access_collapsed_r["height"]) < 0.5,
          "%.1f vs %.1f" % (basic_collapsed_r["height"], access_collapsed_r["height"]))

    js(c, "document.querySelector('#auBasicCard .cr-section-header').click();")
    js(c, "document.querySelector('#auRolesCard .cr-section-header').click();")
    time.sleep(0.2)
    check("Access card re-expands", not js(c, "document.getElementById('auRolesCard').classList.contains('collapsed')"))
    check("Sentence stays removed after collapse/expand (not restored)", style(c, "#auAccessHelper", "display") == "none")
    reopened_row_r = rect(c, "#auRolesCard .au-role-row")
    check("Compact layout restored after reopening (row still directly under label)",
          reopened_row_r["top"] - rect(c, "label[for='auRoleCombo-ctl']")["bottom"] < 8)

    # ── 7. Scope restriction: Add User's helper sentence is untouched ──
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.2)
    check("Add User trigger found and clicked", js(c, CLICK_ADD_USER_BTN) is True)
    time.sleep(0.2)
    search_input = js(c, "!!document.getElementById('auAddUserSearchInput')")
    if search_input:
        js(c, "var i=document.getElementById('auAddUserSearchInput'); i.value='Frank'; i.dispatchEvent(new Event('input',{bubbles:true}));")
        time.sleep(0.3)
        js(c, "Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option')).find(function(o){return o.textContent.indexOf('Frank Grimes')!==-1;}).click();")
        time.sleep(0.1)
        js(c, "document.getElementById('auAddUserNext').click();")
        time.sleep(0.2)
    add_mode = js(c, "document.getElementById('addUsersPage').classList.contains('is-edit-mode')")
    check("Setup: page is in Add mode (not Edit mode)", add_mode is False)
    add_helper_display = style(c, "#auAccessHelper", "display")
    check("Add User's 'Role and Permission' helper sentence is still shown (scope restriction honored)",
          add_helper_display != "none", add_helper_display)
    add_helper_r = rect(c, "#auAccessHelper")
    check("Add User's helper sentence has real, non-zero height", add_helper_r is not None and add_helper_r["height"] > 0)

    # ── 8. Responsive checks ─────────────────────────────────────────────
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.2)
    open_edit_user(c, "Homer Simpson")

    for w, h in [(1024, 900), (1280, 900), (1440, 1000), (1920, 1100), (2560, 1200)]:
        c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": h, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.15)
        r_label = rect(c, "label[for='auRoleCombo-ctl']")
        r_row = rect(c, "#auRolesCard .au-role-row")
        r_table = rect(c, "#auEffTable")
        r_btn = rect(c, "#auEffViewBreakdown")
        r_col = rect(c, ".au-eff-th-app")
        doc_w = js(c, "document.documentElement.scrollWidth")
        check("@%dpx: no horizontal page overflow" % w, doc_w <= w + 1, "%s vs %s" % (doc_w, w))
        check("@%dpx: Assigned Role select/action row does not overlap itself (no wrap collision)" % w,
              r_row["height"] < 60, "%.1fpx" % r_row["height"])
        check("@%dpx: table sits below the control row" % w, r_table["top"] >= r_row["bottom"] - 1)
        check("@%dpx: button sits below the table" % w, r_btn["top"] >= r_table["bottom"] - 1)
        check("@%dpx: button stays left-aligned with the table's content boundary" % w,
              abs(r_btn["left"] - r_col["left"]) < 1.5, "%.1f vs %.1f" % (r_btn["left"], r_col["left"]))
        check("@%dpx: button label does not wrap" % w, rect(c, "%s" % trig_sel)["height"] < 40)

    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1000, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.15)

    c.close()

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print()
    print("%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
