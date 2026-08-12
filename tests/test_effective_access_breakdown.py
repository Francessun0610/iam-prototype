#!/usr/bin/env python3
"""End-to-end tests for the Edit User "View access breakdown" trigger and
the Effective access breakdown modal (2026-08-10 refinement pass), built
on the canonical ADS Modal (Ads Design System, Figma node 38:2).

Covers:
  * Trigger: semantic <button>, correct label, canonical compact ADS
    ghost/text-button treatment (no border/fill/shadow at rest, soft-
    brand tint on hover), left-aligned directly below the effective-
    access table (2026-08-11 relocation), visually distinct from the
    filled primary Save action, hover/focus/keyboard-activation states.
  * Modal: canonical `.cr-confirm-dialog--modal` shell (header/divider/
    body/divider/footer), ADS Modal "Large" width (640px), 12px radius,
    header title typography, close-icon accessible label, single
    secondary "Close" footer action, two-column function/permission
    grid with a stable shared left-column width, assigned-role summary.
  * Interaction: opens on click/Enter/Space, closes via header X,
    footer Close, Escape, and backdrop click (but not a click inside
    the dialog); focus moves into the dialog on open and is trapped
    there; focus returns to the trigger on close; background app shell
    is aria-hidden while open; body scroll is locked while open and
    restored on close.
  * Data integrity: modal content matches the assigned role and the
    effective-access table already on the page; no user/role data is
    mutated by opening/closing the modal.
  * Responsive: no horizontal overflow at a narrow viewport; the
    two-column grid collapses to a stable single column.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_effective_access_breakdown.py

Deliberately still runs against `/v4/` (final-QA pass, 2026-08-12).
V4.1 restyled the "View access breakdown" trigger onto the ADS
tertiary variant (bordered, text-only) and re-anchored it to the
table's left edge, superseding the borderless/compact expectations
here. V4.1's version of this control is covered by
test_v41_access_section.
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
    profile_dir = tempfile.mkdtemp(prefix="iam-eff-breakdown-test-")
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


def rect(c, sel, root_sel=None):
    root = "document" if not root_sel else "document.querySelector(%s)" % json.dumps(root_sel)
    return js(c, """
    (function(){
      var root = %s;
      if (!root) return null;
      var el = root.querySelector(%s);
      if (!el) return null;
      var x = el.getBoundingClientRect();
      return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height};
    })()
    """ % (root, json.dumps(sel)))


def style(c, sel, prop, root_sel=None):
    root = "document" if not root_sel else "document.querySelector(%s)" % json.dumps(root_sel)
    return js(c, """
    (function(){
      var root = %s;
      if (!root) return null;
      var el = root.querySelector(%s);
      if (!el) return null;
      return getComputedStyle(el)[%s];
    })()
    """ % (root, json.dumps(sel), json.dumps(prop)))


def modal_hidden(c):
    return js(c, "document.getElementById('auEffBreakdownBackdrop').hasAttribute('hidden')")


def open_modal(c):
    js(c, "document.getElementById('auEffViewBreakdown').click();")
    # Poll rather than a fixed sleep — under heavy sequential test load the
    # click handler + render can occasionally take longer than 0.3s, which
    # previously caused a flaky "row not found yet" read right after open.
    for _ in range(30):
        if not modal_hidden(c) and js(c, "!!document.querySelector('.au-eff-modal-row')"):
            break
        time.sleep(0.1)
    time.sleep(0.1)


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

    c.navigate(base + "/v4/", wait=1.2)
    opened = open_edit_user(c, "Homer Simpson")
    check("Setup: Edit User page opened for a real user", opened)

    # ── 1. Trigger: label, semantics, ADS text-only treatment ──────────
    trig_sel = "#auEffViewBreakdown"
    check("Trigger label reads 'View access breakdown'", js(c, "document.querySelector('%s').textContent.trim()" % trig_sel) == "View access breakdown")
    check("Trigger is a semantic <button>", js(c, "document.querySelector('%s').tagName" % trig_sel) == "BUTTON")
    check("Trigger has aria-haspopup='dialog'", js(c, "document.querySelector('%s').getAttribute('aria-haspopup')" % trig_sel) == "dialog")
    check("Trigger has aria-controls pointing at the modal backdrop", js(c, "document.querySelector('%s').getAttribute('aria-controls')" % trig_sel) == "auEffBreakdownBackdrop")
    check("Trigger has no border at rest", style(c, trig_sel, "borderStyle") in ("none", ""))
    check("Trigger has transparent background at rest", style(c, trig_sel, "backgroundColor") == "rgba(0, 0, 0, 0)")
    check("Trigger has no box-shadow at rest", style(c, trig_sel, "boxShadow") == "none")
    check("Trigger has no leading '+' icon (text-only, no <svg>)", not js(c, "!!document.querySelector('%s svg')" % trig_sel))

    # ── 2. Placement: directly below the table, left-aligned ───────────
    # 2026-08-11 final-QA pass: relocated from a right-aligned row above
    # the table to a left-aligned row directly below it, so the reading
    # order is Assigned Role -> table -> "View access breakdown".
    btn_r = rect(c, trig_sel)
    tbl_r = rect(c, "#auEffTable")
    first_col_r = rect(c, ".au-eff-th-app")
    role_r = rect(c, ".au-role-field")
    btn_text_left = js(c, """
        (function(){
          var range = document.createRange();
          range.selectNodeContents(document.querySelector('%s'));
          var r = range.getClientRects()[0];
          return r ? r.left : null;
        })()
    """ % trig_sel)
    check("Trigger's visible text (not just hit-box) aligns with the table's left edge",
          abs(btn_text_left - first_col_r["left"]) < 1, "%.1f vs %.1f" % (btn_text_left, first_col_r["left"]))
    check("Trigger sits below the table (not overlapping)", btn_r["top"] >= tbl_r["bottom"])
    check("Trigger is on its own row, not beside the Assigned Role control", tbl_r["top"] >= role_r["bottom"])
    gap = btn_r["top"] - tbl_r["bottom"]
    check("Vertical gap between table and trigger uses a compact ADS token (12-16px)", 12 <= gap <= 16, "%.1fpx" % gap)
    check("Trigger is not inside the <table> element",
          not js(c, "document.getElementById('auEffTable').contains(document.querySelector('%s'))" % trig_sel))
    check("Trigger is inside the table section wrapper (#auEffWrap)",
          js(c, "document.getElementById('auEffWrap').contains(document.querySelector('%s'))" % trig_sel))

    # ── 3. Visually distinct treatment (Revoke access was removed from
    #      Edit User entirely, so this trigger is compared against Save
    #      instead to confirm it isn't styled as a primary action) ──────
    trig_color = style(c, trig_sel, "color")
    save_bg = style(c, "#auSave", "backgroundColor")
    check("Trigger is not styled as the filled primary action", trig_color != save_bg, "%s vs %s" % (trig_color, save_bg))
    check("Trigger has no icon", not js(c, "!!document.querySelector('%s svg')" % trig_sel))

    # ── 4. Hover / focus states ──────────────────────────────────────────
    b = rect(c, trig_sel)
    cx, cy = b["left"] + b["width"] / 2, b["top"] + b["height"] / 2
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": cx, "y": cy})
    time.sleep(0.15)
    hover_bg = style(c, trig_sel, "backgroundColor")
    # 2026-08-11: restyled onto the shared compact ADS ghost-button
    # contract (same as "Remove Role" / "Remove application") — hover
    # now shows the ADS soft-brand tint background instead of the old
    # bespoke text-link underline treatment.
    check("Trigger shows a soft-brand tint background on hover", hover_bg != "rgba(0, 0, 0, 0)", hover_bg)

    js(c, "document.getElementById('auRoleMultiTrigger').focus();")
    time.sleep(0.05)
    c.key("Tab")
    time.sleep(0.15)
    check("Tab order reaches the trigger next", js(c, "document.activeElement.id") == "auEffViewBreakdown")
    check("Trigger shows a visible focus-visible outline", style(c, trig_sel, "outlineStyle") == "solid")

    # ── 5. Open via mouse click ─────────────────────────────────────────
    open_modal(c)
    check("Clicking the trigger opens the modal", not modal_hidden(c))

    dialog_sel = "#auEffBreakdownBackdrop .cr-confirm-dialog"
    check("Dialog has role='dialog'", js(c, "document.querySelector('%s').getAttribute('role')" % dialog_sel) == "dialog")
    check("Dialog has aria-modal='true'", js(c, "document.querySelector('%s').getAttribute('aria-modal')" % dialog_sel) == "true")
    labelledby = js(c, "document.querySelector('%s').getAttribute('aria-labelledby')" % dialog_sel)
    check("Dialog aria-labelledby points at the title element", labelledby == "auEffBreakdownTitle")
    check("Dialog accessible name is 'Effective access breakdown'", js(c, "document.getElementById('auEffBreakdownTitle').textContent.trim()") == "Effective access breakdown")

    # ── 6. Modal sizing / chrome (ADS Modal, Figma 38:2) ────────────────
    d = rect(c, dialog_sel)
    check("Modal width is the ADS Modal 'Large' size (640px)", abs(d["width"] - 640) < 1, "%.1f" % d["width"])
    check("Modal border-radius is 12px (ADS dialog radius)", style(c, dialog_sel, "borderRadius") == "12px")

    title_size = style(c, "#auEffBreakdownTitle", "fontSize")
    title_weight = style(c, "#auEffBreakdownTitle", "fontWeight")
    title_lh = style(c, "#auEffBreakdownTitle", "lineHeight")
    check("Modal title font-size is 18px (ADS body/semibold/xl)", title_size == "18px", title_size)
    check("Modal title font-weight is 600 (SemiBold)", title_weight == "600", title_weight)
    check("Modal title line-height is 24px", title_lh == "24px", title_lh)

    close_label = js(c, "document.getElementById('auEffBreakdownX').getAttribute('aria-label')")
    check("Close icon has a descriptive accessible label", bool(close_label) and "breakdown" in close_label.lower(), close_label)
    close_r = rect(c, "#auEffBreakdownX")
    check("Close icon hit area is 24x24 (ADS close-button size)", abs(close_r["width"] - 24) < 1 and abs(close_r["height"] - 24) < 1)

    header_r = rect(c, ".cr-confirm-header", dialog_sel)
    title_r = rect(c, "#auEffBreakdownTitle")
    title_center = (title_r["top"] + title_r["bottom"]) / 2
    close_center = (close_r["top"] + close_r["bottom"]) / 2
    check("Title and close icon are vertically centered in the header", abs(title_center - close_center) < 1)

    # ── 7. Footer: single secondary "Close" action, right-aligned ──────
    footer_buttons = js(c, "Array.from(document.querySelector('#auEffBreakdownBackdrop .cr-confirm-actions').querySelectorAll('button')).map(function(b){return b.textContent.trim();})")
    check("Footer has exactly one button", len(footer_buttons) == 1, str(footer_buttons))
    check("Footer button reads 'Close'", footer_buttons == ["Close"])
    close_btn_r = rect(c, "#auEffBreakdownClose")
    body_row_r = rect(c, ".au-eff-modal-row")
    check("Footer Close button right edge aligns with the body content's right edge", abs(close_btn_r["right"] - body_row_r["right"]) < 1, "%.1f vs %.1f" % (close_btn_r["right"], body_row_r["right"]))
    check("Footer Close button right edge aligns with the close-icon's right edge", abs(close_btn_r["right"] - close_r["right"]) < 1)

    # ── 8. Content: assigned role + two-column breakdown ────────────────
    role_value = js(c, "document.getElementById('auEffBreakdownRoleName').textContent.trim()")
    table_role_text = js(c, "document.querySelector('.au-role-multi-value') ? document.querySelector('.au-role-multi-value').textContent.trim() : ''")
    check("Modal shows a non-empty assigned role value", bool(role_value) and role_value != "\u2014", role_value)

    app_headings = js(c, "Array.from(document.querySelectorAll('.au-eff-modal-app')).map(function(h){return h.textContent.trim();})")
    table_apps = js(c, "Array.from(document.querySelectorAll('#auEffTbody tr td:first-child')).map(function(td){return td.textContent.trim();})")
    check("Modal application headings match the effective-access table's applications", app_headings == table_apps, "%s vs %s" % (app_headings, table_apps))

    row_lefts = js(c, "Array.from(document.querySelectorAll('.au-eff-modal-row')).map(function(r){return r.getBoundingClientRect().left;})")
    check("Every function/permission row starts at the same left edge (stable column)", len(set(round(x, 1) for x in row_lefts)) == 1, str(row_lefts))
    val_lefts = js(c, "Array.from(document.querySelectorAll('.au-eff-modal-acts')).map(function(r){return Math.round(r.getBoundingClientRect().left);})")
    check("Every permission value starts on the same vertical axis", len(set(val_lefts)) == 1, str(val_lefts))

    # ── 9. Dismissal: click inside does NOT close ───────────────────────
    js(c, "document.getElementById('auEffBreakdownTitle').click();")
    time.sleep(0.15)
    check("Clicking inside the dialog does not close it", not modal_hidden(c))

    # ── 10. Dismissal: header X closes + returns focus ──────────────────
    js(c, "document.getElementById('auEffBreakdownX').click();")
    time.sleep(0.2)
    check("Header X closes the modal", modal_hidden(c))
    check("Focus returns to the trigger after closing via X", js(c, "document.activeElement.id") == "auEffViewBreakdown")

    # ── 11. Dismissal: Escape closes + returns focus ─────────────────────
    open_modal(c)
    c.key("Escape")
    time.sleep(0.2)
    check("Escape closes the modal", modal_hidden(c))
    check("Focus returns to the trigger after closing via Escape", js(c, "document.activeElement.id") == "auEffViewBreakdown")

    # ── 12. Dismissal: footer Close closes + returns focus ──────────────
    open_modal(c)
    js(c, "document.getElementById('auEffBreakdownClose').click();")
    time.sleep(0.2)
    check("Footer Close button closes the modal", modal_hidden(c))
    check("Focus returns to the trigger after closing via footer Close", js(c, "document.activeElement.id") == "auEffViewBreakdown")

    # ── 13. Dismissal: backdrop click closes ────────────────────────────
    open_modal(c)
    js(c, "document.getElementById('auEffBreakdownBackdrop').click();")
    time.sleep(0.2)
    check("Clicking the backdrop closes the modal", modal_hidden(c))

    # ── 14. Keyboard activation of the trigger (Enter / Space) ─────────
    # `CDP.key()` omits the virtual-key-code/text fields Chrome needs to
    # run a focused <button>'s default Enter-activation behavior, so this
    # dispatches the fuller event directly rather than relying on a
    # custom keydown handler (the trigger intentionally has none — this
    # is plain native <button> semantics).
    js(c, "document.getElementById('auEffViewBreakdown').focus();")
    time.sleep(0.15)
    check("Setup: trigger is focused before Enter test", js(c, "document.activeElement.id") == "auEffViewBreakdown")
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter", "windowsVirtualKeyCode": 13, "nativeVirtualKeyCode": 13, "text": "\r", "unmodifiedText": "\r"})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Enter", "code": "Enter", "windowsVirtualKeyCode": 13, "nativeVirtualKeyCode": 13})
    time.sleep(0.3)
    check("Enter key on the trigger opens the modal (native <button> semantics)", not modal_hidden(c))
    js(c, "document.getElementById('auEffBreakdownX').click();")
    time.sleep(0.2)

    # ── 15. Focus trap ────────────────────────────────────────────────
    open_modal(c)
    check("Focus moves into the dialog on open (close icon)", js(c, "document.activeElement.id") == "auEffBreakdownX")
    c.key("Tab")
    time.sleep(0.1)
    check("Tab from close icon moves to footer Close (still inside dialog)", js(c, "document.activeElement.id") == "auEffBreakdownClose")
    c.key("Tab")
    time.sleep(0.1)
    check("Tab wraps back to the close icon (focus trapped)", js(c, "document.activeElement.id") == "auEffBreakdownX")
    c.eval("document.getElementById('auEffBreakdownX').blur(); document.getElementById('auEffBreakdownClose').focus();")
    time.sleep(0.1)
    # Real Shift+Tab via CDP (modifiers bit 8 = Shift) — a JS-synthesized
    # KeyboardEvent would reach our listener but wouldn't reflect genuine
    # browser tab-order behavior, so this exercises the actual trap logic.
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Tab", "code": "Tab", "modifiers": 8})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Tab", "code": "Tab", "modifiers": 8})
    time.sleep(0.15)
    check("Shift+Tab from footer Close wraps to the close icon", js(c, "document.activeElement.id") == "auEffBreakdownX")

    # ── 16. Background inert + scroll lock while open ────────────────────
    check("Nav is aria-hidden while modal is open", js(c, "document.querySelector('.nav').getAttribute('aria-hidden')") == "true")
    check("Sidebar is aria-hidden while modal is open", js(c, "document.getElementById('sidebar').getAttribute('aria-hidden')") == "true")
    check("Main page content is aria-hidden while modal is open", js(c, "document.querySelector('main.page').getAttribute('aria-hidden')") == "true")
    check("Body scroll is locked while modal is open", style(c, "body", "overflow") == "hidden")

    js(c, "document.getElementById('auEffBreakdownClose').click();")
    time.sleep(0.2)
    check("Nav aria-hidden is removed after closing", js(c, "document.querySelector('.nav').getAttribute('aria-hidden')") is None)
    check("Sidebar aria-hidden is removed after closing", js(c, "document.getElementById('sidebar').getAttribute('aria-hidden')") is None)
    check("Main page aria-hidden is removed after closing", js(c, "document.querySelector('main.page').getAttribute('aria-hidden')") is None)
    check("Body scroll is restored after closing", style(c, "body", "overflow") in ("visible", ""))

    # ── 17. No data mutation from opening/closing the modal ─────────────
    role_before = js(c, "document.querySelector('.au-role-multi-value').textContent.trim()")
    table_before = js(c, "document.getElementById('auEffTbody').innerHTML")
    open_modal(c)
    js(c, "document.getElementById('auEffBreakdownClose').click();")
    time.sleep(0.2)
    role_after = js(c, "document.querySelector('.au-role-multi-value').textContent.trim()")
    table_after = js(c, "document.getElementById('auEffTbody').innerHTML")
    check("Assigned role is unchanged after open/close", role_before == role_after)
    check("Effective-access table content is unchanged after open/close", table_before == table_after)

    # ── 18. Responsive: narrow viewport, no horizontal overflow ─────────
    c.send("Emulation.setDeviceMetricsOverride", {"width": 400, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.1)
    open_modal(c)
    doc_w = js(c, "document.documentElement.scrollWidth")
    win_w = js(c, "window.innerWidth")
    check("No horizontal page overflow at a narrow (400px) viewport", doc_w <= win_w + 1, "%s vs %s" % (doc_w, win_w))
    narrow_cols = js(c, "getComputedStyle(document.querySelector('.au-eff-modal-row')).gridTemplateColumns")
    check("Two-column grid collapses to a single column at narrow widths", len(narrow_cols.split(" ")) == 1, narrow_cols)
    js(c, "document.getElementById('auEffBreakdownClose').click();")
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.1)

    c.close()

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print()
    print("%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
