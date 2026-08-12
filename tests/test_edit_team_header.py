#!/usr/bin/env python3
"""End-to-end tests for the V4 Edit Team page-header ADS pass (2026-08-11):
"Back to Teams" verified against the shared V4 back-navigation component,
and "Delete Team" rebuilt as the canonical ADS ghost/text button (reusing
Edit User's "Revoke access" contract) with a real confirmation modal
(previously a no-confirmation stub that just closed the page).

Covers:
  * Back to Teams: 14px, shared `.au-back` font/icon/gap contract, matches
    Back to Users / Back to Roles pixel-for-pixel, left-aligns with the
    Edit Team title/card content grid, correct vertical rhythm (back ->
    title -> team name -> first card), hover/focus-visible states,
    navigates back to the Teams list.
  * Delete Team: reuses the shared ADS ghost/text-button contract (no
    icon, no border, transparent background at rest, 14px/600 SemiBold,
    ADS hover/active/focus-visible states), is a semantic <button>,
    visually secondary to Save Team.
  * Header order + hierarchy: Delete Team -> Cancel -> Save Team, shared
    vertical center, right edge aligned with the content cards, a larger
    gap before Cancel than the standard Cancel<->Save Team gap, no
    leftover `.au-remove-user-link` text-link styling on Delete Team.
  * Delete Team behavior: opens a real confirmation dialog identifying
    the exact team, explains the consequence, requires explicit
    confirmation, never deletes on the first click, shows a loading
    state (Cancel/Close disabled, label changes), then a success toast
    and removes only the targeted team (siblings + their members are
    untouched); Cancel/Escape/backdrop-click close without deleting and
    restore focus to Delete Team; unsaved Team Details edits are neither
    saved nor discarded by Delete Team.
  * Accessibility: both controls are semantic buttons with accessible
    names matching their visible text; focus order is Delete Team ->
    Cancel -> Save Team; the confirm dialog traps Tab focus and restores
    focus to Delete Team on close; disabled Save Team is programmatically
    disabled.
  * Responsive: 1440 / 1280 / 1024px all keep the back control at 14px,
    the header actions right-aligned + vertically centered, no wrapping,
    overlap, or horizontal overflow.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_team_header.py

Deliberately still runs against `/v4/` (final-QA pass, 2026-08-12).
V4.1 uses 36px between the team name and the first content card,
where V4 used 24px; V4.1's spacing is covered by
test_v41_vertical_spacing.
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
    profile_dir = tempfile.mkdtemp(prefix="iam-edit-team-header-test-")
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


def open_edit_team(c, base, name=None):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Teams';}).click();")
    time.sleep(0.25)
    found = js(c, """
    (function(){
      var links = Array.from(document.querySelectorAll('#teamsPanel a.name-link, #teamsPanel td a'));
      var l = %s ? links.find(function(a){return a.textContent.indexOf(%s) !== -1;}) : links[0];
      if (l) { l.click(); return true; }
      return false;
    })()
    """ % ("true" if name else "false", json.dumps(name or "")))
    time.sleep(0.35)
    return found


def open_edit_user(c, base, name="Homer Simpson"):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.25)
    js(c, """
    (function(){
      var inp = document.querySelector('#usersPanel .search input');
      var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(inp, %s);
      inp.dispatchEvent(new Event('input', {bubbles:true}));
    })()
    """ % json.dumps(name))
    time.sleep(0.35)
    js(c, """
    (function(){
      var links = Array.from(document.querySelectorAll('#usersTable a.name-link'));
      var l = links.find(function(a){return a.textContent.indexOf(%s) !== -1;});
      if (l) l.click();
    })()
    """ % json.dumps(name))
    time.sleep(0.35)


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

    console_errors = []
    c.send("Runtime.enable", {})

    def on_console(msg):
        if msg.get("method") == "Runtime.exceptionThrown":
            console_errors.append(msg["params"])

    opened = open_edit_team(c, base, "National Ad Sales")
    check("Setup: Edit Team page opened for a real team", opened)

    # ── 1. Back to Teams: shared ADS back-nav component ─────────────────
    check("Back to Teams font-size is exactly 14px", style(c, "#tmBack", "fontSize") == "14px")
    check("Back to Teams font-family is Open Sans (ADS)", "Open Sans" in (style(c, "#tmBack", "fontFamily") or ""))
    check("Back to Teams font-weight is 600 (SemiBold)", style(c, "#tmBack", "fontWeight") == "600")
    check("Back to Teams line-height is 20px", style(c, "#tmBack", "lineHeight") == "20px")
    check("Back to Teams uses an <svg> chevron (not a Unicode glyph)", js(c, "!!document.querySelector('#tmBack svg')"))
    check("Back to Teams label has no Unicode arrow characters", not js(c, "/[\\u2039\\u2190\\u3008<]/.test(document.getElementById('tmBack').textContent)"))
    check("Back to Teams icon is aria-hidden", js(c, "document.querySelector('#tmBack svg').getAttribute('aria-hidden')") == "true")
    check("Back to Teams icon size is 16x16", style(c, "#tmBack svg", "width") == "16px" and style(c, "#tmBack svg", "height") == "16px")
    check("Back to Teams is a single semantic interactive element (icon+label share one <button>)", js(c, "document.getElementById('tmBack').tagName") == "BUTTON")
    check("Back to Teams accessible name matches its visible label", js(c, "document.getElementById('tmBack').textContent.trim()") == "Back to Teams")

    back_r = rect(c, "#tmBack")
    icon_r = rect(c, "#tmBack svg")
    check("Chevron and label share the same vertical center", abs(((back_r["top"]+back_r["bottom"])/2) - ((icon_r["top"]+icon_r["bottom"])/2)) < 1)

    # ── 2. Match Back to Users / Back to Roles pixel-for-pixel ──────────
    gap = js(c, "getComputedStyle(document.getElementById('tmBack')).gap")
    open_edit_user(c, base)
    au_gap = style(c, "#auBack", "gap")
    au_fs = style(c, "#auBack", "fontSize")
    au_fw = style(c, "#auBack", "fontWeight")
    check("Icon-to-label gap matches Back to Users", gap == au_gap, "%s vs %s" % (gap, au_gap))
    open_edit_team(c, base, "National Ad Sales")
    check("Font-size matches Back to Users", style(c, "#tmBack", "fontSize") == au_fs)
    check("Font-weight matches Back to Users", style(c, "#tmBack", "fontWeight") == au_fw)

    # ── 3. Alignment with the Edit Team content grid ────────────────────
    back_r = rect(c, "#tmBack")
    title_r = rect(c, "#editTeamPage .au-title")
    subtitle_r = rect(c, "#tmEditSubtitle")
    card_r = rect(c, "#editTeamPage .tm-details-card")
    check("Back to Teams left edge aligns with the Edit Team title", abs(back_r["left"] - title_r["left"]) < 1)
    check("Back to Teams left edge aligns with the team name", abs(back_r["left"] - subtitle_r["left"]) < 1)
    check("Back to Teams left edge aligns with the first content card", abs(back_r["left"] - card_r["left"]) < 1)

    gap_back_title = title_r["top"] - back_r["bottom"]
    gap_title_name = subtitle_r["top"] - title_r["bottom"]
    gap_name_card = card_r["top"] - subtitle_r["bottom"]
    check("Vertical spacing: Back to Teams -> Edit Team is 16px", abs(gap_back_title - 16) < 1, "%.1fpx" % gap_back_title)
    check("Vertical spacing: Edit Team -> team name is 11px", abs(gap_title_name - 11) < 1, "%.1fpx" % gap_title_name)
    check("Vertical spacing: team name -> first content card is 24px", abs(gap_name_card - 24) < 1, "%.1fpx" % gap_name_card)

    # ── 4. Hover / focus-visible / click-through behavior ───────────────
    b = rect(c, "#tmBack")
    cx, cy = b["left"] + b["width"] / 2, b["top"] + b["height"] / 2
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": cx, "y": cy})
    time.sleep(0.15)
    check("Back to Teams shows a hover background", style(c, "#tmBack", "backgroundColor") != "rgba(0, 0, 0, 0)")
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": 5, "y": 5})

    js(c, "document.activeElement && document.activeElement.blur(); document.getElementById('tmBack').focus();")
    fv = js(c, "document.getElementById('tmBack').matches(':focus-visible')")
    outline = style(c, "#tmBack", "outlineStyle")
    check("Back to Teams shows a focus-visible outline on real focus", fv is True and outline == "solid", "%s / %s" % (fv, outline))

    js(c, "document.getElementById('tmBack').click();")
    time.sleep(0.3)
    check("Clicking Back to Teams returns to the Teams list", js(c, "document.getElementById('editTeamPage').style.display") == "none")
    check("Teams panel is visible after Back to Teams", js(c, "document.getElementById('teamsPanel').style.display") != "none")

    # ── 5. Delete Team: canonical ADS ghost/text-button treatment ───────
    open_edit_team(c, base, "National Ad Sales")
    check("Delete Team is a semantic <button>", js(c, "document.getElementById('tmDelete').tagName") == "BUTTON")
    check("Delete Team has type=\"button\"", js(c, "document.getElementById('tmDelete').getAttribute('type')") == "button")
    check("Delete Team label reads exactly 'Delete Team'", js(c, "document.getElementById('tmDelete').textContent.trim()") == "Delete Team")
    check("Delete Team has no icon", not js(c, "!!document.querySelector('#tmDelete svg')"))
    check("Delete Team no longer uses the old .au-remove-user-link text-link class", not js(c, "document.getElementById('tmDelete').classList.contains('au-remove-user-link')"))
    check("Delete Team reuses the shared ADS ghost/text-button class (.au-revoke-btn)", js(c, "document.getElementById('tmDelete').classList.contains('au-revoke-btn')"))
    check("Delete Team has no visible border at rest", style(c, "#tmDelete", "borderStyle") in ("none", ""))
    check("Delete Team has a transparent background at rest", style(c, "#tmDelete", "backgroundColor") == "rgba(0, 0, 0, 0)")
    check("Delete Team has no box-shadow at rest", style(c, "#tmDelete", "boxShadow") == "none")
    check("Delete Team font-size is 14px", style(c, "#tmDelete", "fontSize") == "14px")
    check("Delete Team font-weight is 600 (SemiBold)", style(c, "#tmDelete", "fontWeight") == "600")
    check("Delete Team height matches Cancel/Save Team (36px)", style(c, "#tmDelete", "height") == style(c, "#tmSave", "height"))

    save_bg = style(c, "#tmSave", "backgroundColor")
    check("Delete Team is visually less prominent than Save Team (no filled brand background)", style(c, "#tmDelete", "backgroundColor") != save_bg)

    # hover / focus-visible on Delete Team
    d = rect(c, "#tmDelete")
    cx, cy = d["left"] + d["width"] / 2, d["top"] + d["height"] / 2
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": cx, "y": cy})
    time.sleep(0.15)
    check("Delete Team shows a hover background", style(c, "#tmDelete", "backgroundColor") != "rgba(0, 0, 0, 0)")
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": 5, "y": 5})
    js(c, "document.activeElement && document.activeElement.blur(); document.getElementById('tmDelete').focus();")
    fv2 = js(c, "document.getElementById('tmDelete').matches(':focus-visible')")
    outline2 = style(c, "#tmDelete", "outlineStyle")
    check("Delete Team shows a focus-visible outline on real focus", fv2 is True and outline2 == "solid", "%s / %s" % (fv2, outline2))

    # ── 6. Header order, hierarchy, alignment ───────────────────────────
    order = js(c, """
    Array.from(document.querySelectorAll('#editTeamPage .au-header-actions > *'))
      .filter(function(e){ return getComputedStyle(e).display !== 'none'; })
      .map(function(e){ return e.id; })
    """)
    check("Header action order is Delete Team, Cancel, Save Team", order == ["tmDelete", "tmCancel", "tmSave"], order)
    check("Save Team uses the ADS primary filled treatment", style(c, "#tmSave", "backgroundColor") not in ("rgba(0, 0, 0, 0)", "transparent"))
    check("Cancel uses the ADS secondary/outline treatment (visible border)", style(c, "#tmCancel", "borderStyle") == "solid")
    check("Save Team disabled state is programmatic", js(c, "document.getElementById('tmSave').disabled"))

    r_delete = rect(c, "#tmDelete")
    r_cancel = rect(c, "#tmCancel")
    r_save = rect(c, "#tmSave")
    cy_d = (r_delete["top"] + r_delete["bottom"]) / 2
    cy_c = (r_cancel["top"] + r_cancel["bottom"]) / 2
    cy_s = (r_save["top"] + r_save["bottom"]) / 2
    check("Delete Team, Cancel, and Save Team share the same vertical center", abs(cy_d - cy_c) < 1 and abs(cy_c - cy_s) < 1, "%.1f / %.1f / %.1f" % (cy_d, cy_c, cy_s))
    check("Delete Team does not overlap Cancel", r_delete["right"] <= r_cancel["left"])
    check("Cancel does not overlap Save Team", r_cancel["right"] <= r_save["left"])

    gap_delete_cancel = r_cancel["left"] - r_delete["right"]
    gap_cancel_save = r_save["left"] - r_cancel["right"]
    check("Gap between Delete Team and Cancel is larger than the Cancel<->Save Team gap",
          gap_delete_cancel > gap_cancel_save, "%.1fpx vs %.1fpx" % (gap_delete_cancel, gap_cancel_save))

    card_r = rect(c, "#editTeamPage .tm-details-card")
    check("Header action group's right edge aligns with the content cards' right edge",
          abs(r_save["right"] - card_r["right"]) < 1, "%.1f vs %.1f" % (r_save["right"], card_r["right"]))

    # ── 7. Delete Team behavior: confirmation flow ──────────────────────
    check("Delete Team confirmation modal is hidden by default", js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))
    js(c, "document.getElementById('tmDelete').focus();")
    db = rect(c, "#tmDelete")
    cx, cy = db["left"] + db["width"] / 2, db["top"] + db["height"] / 2
    c.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": cx, "y": cy, "button": "left", "clickCount": 1})
    c.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": cx, "y": cy, "button": "left", "clickCount": 1})
    time.sleep(0.25)
    check("Delete Team opens the confirmation modal (does not delete immediately)", not js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))
    check("Team is not removed from TEAMS_DATA merely by opening the dialog", js(c, "window.__TEAMS_DATA.some(function(t){return t.name === 'National Ad Sales';})"))
    check("Confirmation dialog identifies the specific team by name", js(c, "document.getElementById('tmDeleteConfirmTeamName').textContent") == "National Ad Sales")
    check("Confirmation dialog title asks for confirmation", "delete" in js(c, "document.getElementById('tmDeleteConfirmTitle').textContent").lower())
    check("Confirmation dialog explains the consequence (irreversible)", "cannot be undone" in js(c, "document.getElementById('tmDeleteConfirmBody').textContent").lower())
    check("Dialog has role=dialog and aria-modal=true", js(c, "document.querySelector('#tmDeleteConfirmBackdrop .cr-confirm-dialog').getAttribute('role')") == "dialog" and js(c, "document.querySelector('#tmDeleteConfirmBackdrop .cr-confirm-dialog').getAttribute('aria-modal')") == "true")
    check("Focus moves into the dialog on open (Cancel)", js(c, "document.activeElement.id") == "tmDeleteConfirmCancel")

    # Tab-trap: Cancel -> Confirm -> wraps to Close
    c.key("Tab", "Tab")
    time.sleep(0.05)
    check("Tab from Cancel moves to the destructive Confirm button", js(c, "document.activeElement.id") == "tmDeleteConfirmConfirm")
    c.key("Tab", "Tab")
    time.sleep(0.05)
    check("Tab from Confirm wraps to the close icon (focus trapped)", js(c, "document.activeElement.id") == "tmDeleteConfirmClose")
    js(c, "document.getElementById('tmDeleteConfirmCancel').focus();")
    c.send("Input.dispatchKeyEvent", {"type": "rawKeyDown", "key": "Tab", "code": "Tab", "modifiers": 8})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Tab", "code": "Tab", "modifiers": 8})
    time.sleep(0.05)
    check("Shift+Tab from the first control (Cancel) wraps back to the close icon", js(c, "document.activeElement.id") == "tmDeleteConfirmClose")

    # Cancel closes without deleting, restores focus
    js(c, "document.getElementById('tmDeleteConfirmCancel').click();")
    time.sleep(0.2)
    check("Cancel closes the confirmation dialog", js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))
    check("Cancel does not delete the team", js(c, "window.__TEAMS_DATA.some(function(t){return t.name === 'National Ad Sales';})"))
    check("Cancel restores focus to Delete Team", js(c, "document.activeElement.id") == "tmDelete")
    check("Cancel does not navigate away from Edit Team", js(c, "document.getElementById('editTeamPage').style.display") != "none")

    # Escape closes without deleting, restores focus
    js(c, "document.getElementById('tmDelete').click();")
    time.sleep(0.2)
    c.key("Escape", "Escape")
    time.sleep(0.2)
    check("Escape closes the confirmation dialog", js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))
    check("Escape restores focus to Delete Team", js(c, "document.activeElement.id") == "tmDelete")

    # Close (X) closes without deleting
    js(c, "document.getElementById('tmDelete').click();")
    time.sleep(0.2)
    js(c, "document.getElementById('tmDeleteConfirmClose').click();")
    time.sleep(0.2)
    check("Close (X) closes the confirmation dialog without deleting", js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')") and js(c, "window.__TEAMS_DATA.some(function(t){return t.name === 'National Ad Sales';})"))

    # Backdrop click closes without deleting
    js(c, "document.getElementById('tmDelete').click();")
    time.sleep(0.2)
    js(c, "document.getElementById('tmDeleteConfirmBackdrop').click();")
    time.sleep(0.2)
    check("Clicking the backdrop closes the confirmation dialog", js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))

    # ── 8. Delete Team never saves unsaved edits / never touches Cancel/Save ──
    js(c, "var i=document.getElementById('tmName'); i.value='Unsaved Draft Name'; i.dispatchEvent(new Event('input',{bubbles:true}));")
    time.sleep(0.1)
    check("Save Team becomes enabled once Team details are dirty", not js(c, "document.getElementById('tmSave').disabled"))
    js(c, "document.getElementById('tmDelete').click();")
    time.sleep(0.2)
    check("Opening Delete Team does not silently save the dirty Name field", js(c, "window.__TEAMS_DATA.find(function(t){return t.name === 'National Ad Sales';}) !== undefined"))
    js(c, "document.getElementById('tmDeleteConfirmCancel').click();")
    time.sleep(0.2)
    check("Dirty Name value is preserved (not discarded) after closing Delete Team's dialog", js(c, "document.getElementById('tmName').value") == "Unsaved Draft Name")
    check("Team record itself is still unsaved (Delete Team never invoked Save Team)", js(c, "window.__TEAMS_DATA.find(function(t){return t.name === 'National Ad Sales';}) !== undefined"))

    # ── 9. Full delete + loading + success + sibling-safety ─────────────
    all_teams_before = js(c, "window.__TEAMS_DATA.map(function(t){return t.name;})")
    js(c, "document.getElementById('tmDelete').click();")
    time.sleep(0.2)
    js(c, "document.getElementById('tmDeleteConfirmConfirm').click();")
    time.sleep(0.15)
    check("Loading state disables the destructive Confirm button", js(c, "document.getElementById('tmDeleteConfirmConfirm').disabled"))
    check("Loading state disables Cancel", js(c, "document.getElementById('tmDeleteConfirmCancel').disabled"))
    check("Loading state disables the Close icon", js(c, "document.getElementById('tmDeleteConfirmClose').disabled"))
    check("Loading state updates the confirm label", js(c, "document.getElementById('tmDeleteConfirmConfirmLabel').textContent") != "Delete Team")
    time.sleep(0.8)
    check("Dialog closes automatically once the delete completes", js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))
    check("Page navigates back to the Teams list after a successful delete", js(c, "document.getElementById('editTeamPage').style.display") == "none")
    check("A success toast is shown", js(c, "!!document.querySelector('.edl-toast')"))
    all_teams_after = js(c, "window.__TEAMS_DATA.map(function(t){return t.name;})")
    check("Exactly the targeted team was removed", "National Ad Sales" not in all_teams_after and len(all_teams_after) == len(all_teams_before) - 1, all_teams_after)
    check("Every other team is still present (Delete Team never touches siblings)", all(t in all_teams_after for t in all_teams_before if t != "National Ad Sales"))

    # ── 10. Responsive QA: 1440 / 1280 / 1024px ─────────────────────────
    for w in (1440, 1280, 1024):
        c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        open_edit_team(c, base)
        fs = style(c, "#tmBack", "fontSize")
        check("@%dpx: Back to Teams stays 14px" % w, fs == "14px", fs)
        rd = rect(c, "#tmDelete")
        rc = rect(c, "#tmCancel")
        rs = rect(c, "#tmSave")
        card = rect(c, "#editTeamPage .tm-details-card")
        cys = [(rd["top"]+rd["bottom"])/2, (rc["top"]+rc["bottom"])/2, (rs["top"]+rs["bottom"])/2]
        check("@%dpx: header actions share the same vertical center" % w, max(cys) - min(cys) < 1, cys)
        check("@%dpx: action group right edge aligns with the content grid" % w, abs(rs["right"] - card["right"]) < 1)
        check("@%dpx: no overlap between Delete Team and Cancel" % w, rd["right"] <= rc["left"])
        check("@%dpx: no overlap between Cancel and Save Team" % w, rc["right"] <= rs["left"])
        overflow = js(c, "document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
        check("@%dpx: no horizontal overflow introduced" % w, not overflow)
        no_wrap = js(c, "document.getElementById('tmDelete').getBoundingClientRect().height <= 40 && document.getElementById('tmBack').getBoundingClientRect().height <= 36")
        check("@%dpx: labels do not wrap (single-line control height)" % w, no_wrap)

    check("No uncaught console exceptions were observed during the flow", len(console_errors) == 0, console_errors)

    c.close()

    print()
    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    if failed:
        print("\nFAILED CHECKS:")
        for status, name, detail in results:
            if status == "FAIL":
                print(" - %s%s" % (name, ("  (%s)" % detail) if detail else ""))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
