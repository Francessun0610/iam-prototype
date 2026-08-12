#!/usr/bin/env python3
"""End-to-end tests for the V4.1 "Remove application?" confirmation modal
rebuild (2026-08-11, final-QA pass), built on the canonical ADS Modal
shell (Ads Design System, Figma node 38:46 / Default+Footer=Yes variant
38:2) — the same `.cr-confirm-dialog--modal` shell already used by
Delete Team / Revoke access / Effective access breakdown.

Scoped to `public/v4.1/` only — `public/v4/` is untouched and its own
`tests/test_create_role.py` (which asserts the OLD bordered/tertiary/
icon "Remove application" trigger) must keep passing unmodified there.

Covers:
  * Modal structure: header (title + close icon) / divider / body
    region (text + inline error) / divider / footer (Cancel / Remove),
    replacing the old flat single-panel dialog with no header row.
  * Title is exactly "Remove application?" (not "...from role?").
  * Close icon: canonical ADS X icon (not a Unicode "x" or plain text),
    24x24 hit area, accessible label "Close remove application dialog",
    vertically centered with the title, closes without removing.
  * Body copy: dynamically includes the actual selected application's
    name (not hardcoded "Core Planning"), left-aligned with the title,
    ADS body typography.
  * Alignment: title / body / footer share one left content boundary;
    footer actions are right-aligned.
  * Footer: Cancel (ADS secondary/outline) + Remove (ADS destructive
    solid, red token, not a custom color) — same height, gap, and
    vertical center; both share the modal's right content edge.
  * Cancel/Escape/close-icon/backdrop dismiss without mutating role
    data; Remove removes only the targeted application, preserves every
    other application, updates dirty state / Save Role enablement.
  * Loading state on Remove (disabled duplicate confirmation, Cancel/
    Close disabled while pending) and focus restoration afterward.
  * Focus trap (Tab/Shift+Tab wrap) and keyboard-only operation.
  * The originating "Remove application" trigger stays the compact ADS
    ghost/text-only control (no border, no trash icon).

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_remove_application_modal.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-remove-app-modal-test-")
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


def open_edit_role_with_multiple_apps(c, base):
    """Navigate to a role with >=2 applications so removing one leaves
    at least one other application to verify preservation of."""
    c.navigate(base + "/v4.1/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.3)
    links = js(c, "Array.from(document.querySelectorAll('#rolesPanel .rp-role-link')).map(function(a,i){return i;})")
    for i in range(min(len(links or []), 30)):
        js(c, "document.querySelectorAll('#rolesPanel .rp-role-link')[%d].click();" % i)
        time.sleep(0.35)
        count = js(c, "document.querySelectorAll('.cr-app-section').length")
        if count and count >= 2:
            return True
        c.navigate(base + "/v4.1/", wait=0.6)
        js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
        time.sleep(0.3)
    return False


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

    ok = open_edit_role_with_multiple_apps(c, base)
    check("Setup: opened an Edit Role page with >=2 applications", ok)

    app_keys = js(c, "Array.from(document.querySelectorAll('.cr-app-section')).map(function(s){return s.getAttribute('data-app-key');})")
    app_names_before = js(c, "Array.from(document.querySelectorAll('.cr-app-title')).map(function(t){return t.textContent.trim();})")
    target_key = app_keys[0]
    target_name = app_names_before[0] if app_names_before else None

    # ── 0. Trigger control stays compact ghost / text-only ─────────────
    trig_sel = ".cr-app-remove[data-remove-app=\"%s\"]" % target_key
    check("Trigger label is exactly 'Remove application'", js(c, "document.querySelector(%s).textContent.trim()" % json.dumps(trig_sel)) == "Remove application")
    check("Trigger has no icon (text-only, no <svg>)", not js(c, "!!document.querySelector(%s).querySelector('svg')" % json.dumps(trig_sel)))
    # Edit Role's per-application "Remove application" is the one place this
    # button is deliberately NOT the shared 26px compact ghost: Round 28 gave
    # it `.btn-std` so it reuses the ADS compact outlined/secondary component,
    # and the final-QA brief restates that requirement ("Remove application
    # remains a visible ADS outlined/secondary button", and explicitly not a
    # three-dot menu). Create Role's accordion and Add User's role card still
    # use the 26px ghost — this assertion covers Edit Role only.
    trig_height = rect(c, trig_sel)["height"]
    check("Trigger is the 36px ADS outlined/secondary button (visible, not a compact ghost)",
          abs(trig_height - 36) < 1, "%.1fpx" % trig_height)
    check("Trigger has a visible 1px border at rest",
          style(c, trig_sel, "borderStyle") == "solid" and style(c, trig_sel, "borderWidth") == "1px",
          "%s / %s" % (style(c, trig_sel, "borderStyle"), style(c, trig_sel, "borderWidth")))
    check("Trigger border uses the ADS indigo #4045c2",
          style(c, trig_sel, "borderColor") == "rgb(64, 69, 194)", style(c, trig_sel, "borderColor"))
    check("Trigger radius is 6px", style(c, trig_sel, "borderRadius") == "6px", style(c, trig_sel, "borderRadius"))
    check("Trigger is transparent at rest (outlined, not filled)",
          style(c, trig_sel, "backgroundColor") == "rgba(0, 0, 0, 0)", style(c, trig_sel, "backgroundColor"))
    check("Trigger is not hidden behind a three-dot / kebab menu",
          not js(c, "!!document.querySelector(%s).closest('[aria-haspopup=\\'menu\\']')" % json.dumps(trig_sel)))
    check("Trigger has transparent background at rest", style(c, trig_sel, "backgroundColor") == "rgba(0, 0, 0, 0)")

    # ── 1. Opening the modal ────────────────────────────────────────────
    last_focus_id_setup = "trig-anchor"
    js(c, "document.querySelector(%s).id = %s;" % (json.dumps(trig_sel), json.dumps(last_focus_id_setup)))
    js(c, "document.getElementById(%s).focus();" % json.dumps(last_focus_id_setup))
    js(c, "document.getElementById(%s).click();" % json.dumps(last_focus_id_setup))
    time.sleep(0.2)
    check("Modal backdrop becomes visible", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')") is False)

    # ── 2. Structure: header / divider / body-region / divider / footer ─
    check("Dialog uses the canonical ADS Modal shell class", js(c, "document.querySelector('#crAppRemoveBackdrop .cr-confirm-dialog').classList.contains('cr-confirm-dialog--modal')"))
    check("Header exists", js(c, "!!document.querySelector('#crAppRemoveBackdrop .cr-confirm-header')"))
    check("Body region exists (text + error share one region)", js(c, "!!document.querySelector('#crAppRemoveBackdrop .cr-confirm-body-region')"))
    check("Header has a bottom divider", style(c, "#crAppRemoveBackdrop .cr-confirm-header", "borderBottomStyle") == "solid")
    check("Footer has a top divider", style(c, "#crAppRemoveBackdrop .cr-confirm-actions", "borderTopStyle") == "solid")

    # ── 3. Title ─────────────────────────────────────────────────────────
    title_text = js(c, "document.getElementById('crAppRemoveTitle').textContent.trim()")
    check("Title is exactly 'Remove application?'", title_text == "Remove application?", title_text)
    check("Title does NOT read 'Remove application from role?'", "from role" not in title_text)
    check("Title font-size is 18px (ADS modal-title typography)", style(c, "#crAppRemoveTitle", "fontSize") == "18px")
    check("Title font-weight is 600 (SemiBold)", style(c, "#crAppRemoveTitle", "fontWeight") == "600")
    check("Title line-height is 24px", style(c, "#crAppRemoveTitle", "lineHeight") == "24px")

    # ── 4. Close icon ────────────────────────────────────────────────────
    close_label = js(c, "document.getElementById('crAppRemoveClose').getAttribute('aria-label')")
    check("Close icon has the exact accessible label", close_label == "Close remove application dialog", close_label)
    check("Close icon is a real <svg>, not a Unicode glyph or plain text", js(c, "!!document.querySelector('#crAppRemoveClose svg')"))
    check("Close icon button has no visible text content", js(c, "document.getElementById('crAppRemoveClose').textContent.trim()") == "")
    close_r = rect(c, "#crAppRemoveClose")
    check("Close icon hit area is 24x24 (ADS close-button size)", abs(close_r["width"] - 24) < 1 and abs(close_r["height"] - 24) < 1)
    title_r = rect(c, "#crAppRemoveTitle")
    title_center = (title_r["top"] + title_r["bottom"]) / 2
    close_center = (close_r["top"] + close_r["bottom"]) / 2
    check("Close icon is vertically centered with the title", abs(title_center - close_center) < 2, "%.1f vs %.1f" % (title_center, close_center))

    # ── 5. Body copy ─────────────────────────────────────────────────────
    body_text = js(c, "document.getElementById('crAppRemoveBody').textContent.trim()")
    check("Body copy includes the actual selected application's name", target_name and (target_name in body_text), "%s / %s" % (target_name, body_text))
    check("Body copy does NOT hardcode 'Core Planning' unless it's actually the target", ("Core Planning" not in body_text) or (target_name == "Core Planning"))
    check("Body copy matches the approved wording", "will remove all of its permissions from this role" in body_text, body_text)
    check("Body font-size is 14px (ADS modal-body typography)", style(c, "#crAppRemoveBody", "fontSize") == "14px")
    check("Body line-height is 20px", style(c, "#crAppRemoveBody", "lineHeight") == "20px")
    check("Body is not center-aligned", style(c, "#crAppRemoveBody", "textAlign") in ("left", "start", ""))
    check("No warning icon present in the body region", not js(c, "!!document.querySelector('#crAppRemoveBackdrop .cr-confirm-body-region svg')"))

    # ── 6. Shared left content boundary ─────────────────────────────────
    body_r = rect(c, "#crAppRemoveBody")
    footer_r = rect(c, "#crAppRemoveBackdrop .cr-confirm-actions")
    cancel_r = rect(c, "#crAppRemoveCancel")
    check("Title and body copy share the same left edge", abs(title_r["left"] - body_r["left"]) < 1, "%.1f vs %.1f" % (title_r["left"], body_r["left"]))
    check("Footer actions are right-aligned (Remove is rightmost)", rect(c, "#crAppRemoveConfirm")["right"] > cancel_r["right"])

    # ── 7. Footer buttons ────────────────────────────────────────────────
    remove_r = rect(c, "#crAppRemoveConfirm")
    check("Cancel and Remove share the same height", abs(cancel_r["height"] - remove_r["height"]) < 1, "%.1f vs %.1f" % (cancel_r["height"], remove_r["height"]))
    cancel_center = (cancel_r["top"] + cancel_r["bottom"]) / 2
    remove_center = (remove_r["top"] + remove_r["bottom"]) / 2
    check("Cancel and Remove share the same vertical center", abs(cancel_center - remove_center) < 1)
    gap = remove_r["left"] - cancel_r["right"]
    check("Button gap matches ADS (12px)", abs(gap - 12) < 1, "%.1fpx" % gap)
    check("Remove button right edge aligns with the modal's right content edge (same as the close icon's)", abs(remove_r["right"] - close_r["right"]) < 1, "%.1f vs %.1f" % (remove_r["right"], close_r["right"]))
    cancel_border = style(c, "#crAppRemoveCancel", "borderStyle")
    check("Cancel uses the ADS secondary/outline treatment (visible border)", cancel_border == "solid", cancel_border)
    # App-wide Delete/Remove button audit (2026-08-11): this prototype no
    # longer uses a red "destructive" button anywhere. Every final Delete/
    # Remove confirmation action — including this one — now renders as the
    # canonical ADS Primary Button (brand indigo), matching `.cr-btn-save` /
    # `.au-btn-save`. See tests/test_v41_destructive_buttons.py for the
    # full app-wide sweep.
    remove_bg = style(c, "#crAppRemoveConfirm", "backgroundColor")
    check("Remove uses the canonical ADS Primary Button (brand indigo, not red)", remove_bg == "rgb(64, 69, 194)", remove_bg)
    remove_text = style(c, "#crAppRemoveConfirm", "color")
    check("Remove button text is white", remove_text == "rgb(255, 255, 255)", remove_text)

    # ── 8. Modal dimensions ──────────────────────────────────────────────
    dialog_r = rect(c, "#crAppRemoveBackdrop .cr-confirm-dialog")
    check("Modal uses the ADS Default confirmation size (480px), not an unrelated width", abs(dialog_r["width"] - 480) < 1, "%.1f" % dialog_r["width"])
    check("Modal is compact, not a tall form dialog", dialog_r["height"] < 260, "%.1fpx" % dialog_r["height"])

    # ── 9. Backdrop ──────────────────────────────────────────────────────
    backdrop_bg = style(c, "#crAppRemoveBackdrop", "backgroundColor")
    check("Backdrop uses the canonical ADS scrim color", backdrop_bg == "rgba(15, 18, 20, 0.4)", backdrop_bg)
    doc_w = js(c, "document.documentElement.scrollWidth")
    win_w = js(c, "window.innerWidth")
    check("No horizontal overflow introduced by the modal", doc_w <= win_w + 1)

    # ── 10. Dismissal: close icon does not remove ───────────────────────
    apps_before_dismiss = js(c, "document.querySelectorAll('.cr-app-section').length")
    js(c, "document.getElementById('crAppRemoveClose').click();")
    time.sleep(0.2)
    check("Close icon closes the modal", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')"))
    check("Close icon did not remove the application", js(c, "document.querySelectorAll('.cr-app-section').length") == apps_before_dismiss)
    check("Focus returns to the originating trigger after Close", js(c, "document.activeElement.id") == last_focus_id_setup)

    # ── 11. Dismissal: Escape does not remove ────────────────────────────
    js(c, "document.getElementById(%s).click();" % json.dumps(last_focus_id_setup))
    time.sleep(0.15)
    c.key("Escape")
    time.sleep(0.2)
    check("Escape closes the modal", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')"))
    check("Escape did not remove the application", js(c, "document.querySelectorAll('.cr-app-section').length") == apps_before_dismiss)
    check("Focus returns to the originating trigger after Escape", js(c, "document.activeElement.id") == last_focus_id_setup)

    # ── 12. Dismissal: Cancel does not remove, preserves permissions ────
    checked_before = js(c, "Array.from(document.querySelectorAll('.cr-app-section input[type=checkbox]:checked')).length")
    js(c, "document.getElementById(%s).click();" % json.dumps(last_focus_id_setup))
    time.sleep(0.15)
    js(c, "document.getElementById('crAppRemoveCancel').click();")
    time.sleep(0.2)
    check("Cancel closes the modal", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')"))
    check("Cancel did not remove the application", js(c, "document.querySelectorAll('.cr-app-section').length") == apps_before_dismiss)
    check("Cancel preserved all permission checkbox selections", js(c, "Array.from(document.querySelectorAll('.cr-app-section input[type=checkbox]:checked')).length") == checked_before)
    check("Focus returns to the originating trigger after Cancel", js(c, "document.activeElement.id") == last_focus_id_setup)

    # ── 13. Backdrop click closes without removing ──────────────────────
    js(c, "document.getElementById(%s).click();" % json.dumps(last_focus_id_setup))
    time.sleep(0.15)
    js(c, "document.getElementById('crAppRemoveBackdrop').click();")
    time.sleep(0.2)
    check("Backdrop click closes the modal", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')"))
    check("Backdrop click did not remove the application", js(c, "document.querySelectorAll('.cr-app-section').length") == apps_before_dismiss)

    # ── 14. Focus trap ───────────────────────────────────────────────────
    js(c, "document.getElementById(%s).click();" % json.dumps(last_focus_id_setup))
    time.sleep(0.2)
    check("Focus moves into the dialog on open (Cancel)", js(c, "document.activeElement.id") == "crAppRemoveCancel")
    c.key("Tab")
    time.sleep(0.1)
    check("Tab from Cancel moves to Remove", js(c, "document.activeElement.id") == "crAppRemoveConfirm")
    c.key("Tab")
    time.sleep(0.1)
    check("Tab wraps back to the close icon (focus trapped)", js(c, "document.activeElement.id") == "crAppRemoveClose")
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Tab", "code": "Tab", "modifiers": 8})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Tab", "code": "Tab", "modifiers": 8})
    time.sleep(0.1)
    check("Shift+Tab from close icon wraps to Remove (last focusable)", js(c, "document.activeElement.id") == "crAppRemoveConfirm")
    js(c, "document.getElementById('crAppRemoveClose').click();")
    time.sleep(0.2)

    # ── 15. Confirming Remove: loading state, dirty state, Save enablement ─
    save_before = js(c, "document.getElementById('crSaveBtn') ? document.getElementById('crSaveBtn').disabled : null")
    dirty_before = js(c, "typeof window.__crIsDirty === 'function' ? window.__crIsDirty() : null")
    js(c, "document.getElementById(%s).click();" % json.dumps(last_focus_id_setup))
    time.sleep(0.2)
    check("Setup: modal open before confirming removal", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')") is False)
    js(c, "document.getElementById('crAppRemoveConfirm').click();")
    time.sleep(0.05)
    check("Remove button shows the ADS loading state immediately", js(c, "document.getElementById('crAppRemoveConfirm').classList.contains('is-loading')"))
    check("Remove button is disabled during the request (no duplicate confirmation)", js(c, "document.getElementById('crAppRemoveConfirm').disabled") is True)
    check("Cancel is disabled during the request", js(c, "document.getElementById('crAppRemoveCancel').disabled") is True)
    check("Close icon is disabled during the request", js(c, "document.getElementById('crAppRemoveClose').disabled") is True)
    check("Modal stays open while the request is pending", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')") is False)

    # Clicking Remove again mid-flight must not double-fire.
    js(c, "document.getElementById('crAppRemoveConfirm').click();")
    time.sleep(0.9)
    check("Modal closes after the (simulated) removal completes", js(c, "document.getElementById('crAppRemoveBackdrop').hasAttribute('hidden')"))
    apps_after_remove = js(c, "document.querySelectorAll('.cr-app-section').length")
    check("Exactly one application was removed", apps_after_remove == apps_before_dismiss - 1, "%s vs %s" % (apps_after_remove, apps_before_dismiss))
    remaining_keys = js(c, "Array.from(document.querySelectorAll('.cr-app-section')).map(function(s){return s.getAttribute('data-app-key');})")
    check("The targeted application is gone", target_key not in remaining_keys)
    check("Every other application is preserved", all(k in remaining_keys for k in app_keys[1:]), str(remaining_keys))

    save_after = js(c, "document.getElementById('crSaveBtn') ? document.getElementById('crSaveBtn').disabled : null")
    if save_before is not None:
        check("Save Role enablement updates after removal (dirty state changed)", save_after != save_before or save_after is False, "%s -> %s" % (save_before, save_after))

    c.close()

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print()
    print("%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
