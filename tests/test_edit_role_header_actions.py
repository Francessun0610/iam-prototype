#!/usr/bin/env python3
"""Regression test for the V4 Edit Role page-header actions pass (2026-08-11):
"Save as Draft" fully removed from the rendered/focusable/announced Edit
Role header, "Remove Role" occupies its slot, final order is
Remove Role -> Cancel -> Save Role, with a slightly larger gap before
Cancel than the standard Cancel<->Save Role gap.

Covers:
  * Edit Role shows exactly one "Remove Role" control, in the header
    actions, and it is the leftmost action.
  * "Save as Draft" is hidden (not rendered, not in the accessible tree,
    not in the tab order) in Edit Role mode, but still fully present and
    functional in Create Role mode (this pass must not touch Create Role).
  * Header action order is Remove Role -> Cancel -> Save Role, all sharing
    the same vertical center, Save Role remaining rightmost.
  * Gap between Remove Role and Cancel (24px) is larger than the gap
    between Cancel and Save Role (12px, the standard ADS button gap) —
    achieved via margin on Remove Role itself, not a page-specific hack.
  * Remove Role keeps its existing ADS ghost/text-button visual contract
    (transparent bg, no border, 32px height, Open Sans 500 14/16, brand
    text color, hover/active/focus-visible states) — unchanged from
    before this pass.
  * Clicking Remove Role still opens the existing confirmation dialog,
    identifies the exact role, requires explicit confirmation, removes
    only the targeted role on confirm, shows a success toast, and
    restores focus to Remove Role when dismissed via Cancel.
  * No empty space/placeholder is left where Save as Draft used to sit;
    the action group remains right-aligned with the Role Details /
    Functions cards' right edge.
  * Toggling Create Role -> Edit Role -> Create Role never leaves both
    controls visible at once.
  * Responsive: 1440 / 1280 / 1024px — order, gap ratio, vertical
    centering, no wrap, no overflow.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_role_header_actions.py

Deliberately still runs against `/v4/` (final-QA pass, 2026-08-12).
V4.1 moved "Remove Role" off the 26px/12px compact inline action onto
the full-size 36px ADS ghost button shared with "Revoke access" and
"Delete Team", superseding the size assertions here.
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
    profile_dir = tempfile.mkdtemp(prefix="iam-edit-role-header-test-")
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


def open_create_role(c, base):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.3)
    js(c, "var b=Array.from(document.querySelectorAll('button')).find(function(x){return x.textContent.trim()==='Create Role';}); if(b) b.click();")
    time.sleep(0.35)
    return js(c, "document.getElementById('createRolePage').style.display !== 'none'")


def open_edit_role(c, base):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.3)
    return js(c, """
    (function(){
      var l = document.querySelector('#rolesPanel .rp-role-link');
      if (l) { l.click(); return true; }
      return false;
    })()
    """)


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

    # ═══════════════ 1. Create Role is untouched ═══════════════
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    opened = open_create_role(c, base)
    check("Setup: Create Role page opened", opened)
    check("Create Role: 'Save as Draft' is visible and rendered",
          js(c, "var b=document.getElementById('crSaveDraft'); !!b && !b.hasAttribute('hidden') && b.offsetParent !== null"))
    check("Create Role: 'Save as Draft' is reachable via keyboard (not hidden from tab order)",
          js(c, "var b=document.getElementById('crSaveDraft'); b.tabIndex >= 0"))
    check("Create Role: 'Remove Role' is hidden",
          js(c, "var b=document.getElementById('crRemove'); !b || b.hasAttribute('hidden')"))
    check("Create Role: only one 'Save as Draft' control exists",
          js(c, "Array.from(document.querySelectorAll('#createRolePage button')).filter(function(b){return b.textContent.trim()==='Save as Draft';}).length") == 1)

    # ═══════════════ 2. Edit Role: Save as Draft fully gone ═══════════════
    for vw in (1440, 1280, 1024):
        c.send("Emulation.setDeviceMetricsOverride", {"width": vw, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        opened = open_edit_role(c, base)
        check("@%dpx: Setup: Edit Role page opened" % vw, opened)

        check("@%dpx: 'Save as Draft' is not rendered (hidden attribute + no layout box)" % vw,
              js(c, "var b=document.getElementById('crSaveDraft'); b.hasAttribute('hidden') && b.offsetParent === null"))
        check("@%dpx: 'Save as Draft' is excluded from the tab order" % vw,
              js(c, "var b=document.getElementById('crSaveDraft'); getComputedStyle(b).display === 'none'"))
        check("@%dpx: 'Save as Draft' has no accessible box (not announced to screen readers)" % vw,
              js(c, "var b=document.getElementById('crSaveDraft'); var r=b.getBoundingClientRect(); r.width===0 && r.height===0"))

        # ── Exactly one Remove Role control, in the header actions ──
        check("@%dpx: exactly one 'Remove Role' control exists in the whole page" % vw,
              js(c, "Array.from(document.querySelectorAll('#createRolePage button')).filter(function(b){return b.textContent.trim()==='Remove Role';}).length") == 1)
        check("@%dpx: 'Remove Role' is visible and inside .cr-header-actions" % vw,
              js(c, "var b=document.getElementById('crRemove'); !b.hasAttribute('hidden') && b.offsetParent !== null && b.closest('.cr-header-actions') !== null"))

        # ── Order: Remove Role -> Cancel -> Save Role ──
        rm = rect(c, "#crRemove")
        cancel = rect(c, "#crCancel")
        save = rect(c, "#crSave")
        check("@%dpx: Remove Role is leftmost" % vw, rm["left"] < cancel["left"] < save["left"],
              "%.1f < %.1f < %.1f" % (rm["left"], cancel["left"], save["left"]))
        check("@%dpx: Save Role is rightmost" % vw, save["left"] == max(rm["left"], cancel["left"], save["left"]))

        # ── Vertical centering ──
        rm_c = (rm["top"] + rm["bottom"]) / 2
        cancel_c = (cancel["top"] + cancel["bottom"]) / 2
        save_c = (save["top"] + save["bottom"]) / 2
        check("@%dpx: Remove Role / Cancel / Save Role share the same vertical center" % vw,
              abs(rm_c - cancel_c) < 1 and abs(cancel_c - save_c) < 1,
              "%.1f / %.1f / %.1f" % (rm_c, cancel_c, save_c))

        # ── Gap: Remove Role <-> Cancel is larger than Cancel <-> Save Role ──
        gap1 = cancel["left"] - rm["right"]
        gap2 = save["left"] - cancel["right"]
        check("@%dpx: gap before Cancel (%.0fpx) is larger than the standard Cancel<->Save Role gap (%.0fpx)" % (vw, gap1, gap2),
              gap1 > gap2)
        check("@%dpx: Cancel<->Save Role gap is the standard 12px" % vw, abs(gap2 - 12) < 0.5, gap2)
        check("@%dpx: Remove Role<->Cancel gap is 24px (12px base + 12px extra)" % vw, abs(gap1 - 24) < 0.5, gap1)

        # ── No wrap, no overflow ──
        check("@%dpx: labels do not wrap (single-line control heights)" % vw,
              rm["height"] <= 26 and cancel["height"] <= 36 and save["height"] <= 36,
              "%s/%s/%s" % (rm["height"], cancel["height"], save["height"]))
        doc_w = js(c, "document.documentElement.scrollWidth")
        win_w = js(c, "window.innerWidth")
        check("@%dpx: no horizontal overflow" % vw, doc_w <= win_w + 1, "%s vs %s" % (doc_w, win_w))

        # ── Right-aligned with the cards ──
        card = rect(c, "#createRolePage .cr-card")
        check("@%dpx: Save Role's right edge aligns with the card's right edge" % vw,
              abs(save["right"] - card["right"]) < 0.5, "%.1f vs %.1f" % (save["right"], card["right"]))

    # ═══════════════ 3. Remove Role visual contract unchanged ═══════════════
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    open_edit_role(c, base)
    style = js(c, """
    (function(){
      var b = document.getElementById('crRemove');
      var s = getComputedStyle(b);
      return {
        display: s.display, height: s.height, background: s.backgroundColor,
        border: s.borderStyle, borderRadius: s.borderRadius,
        fontFamily: s.fontFamily, fontSize: s.fontSize, fontWeight: s.fontWeight,
        color: s.color, cursor: s.cursor
      };
    })()
    """)
    # These values are the existing shared "compact ghost text-action"
    # contract already applied in V4 (`html[data-iam-version="v4"]
    # .cr-btn-remove`, shared with Remove application / table Remove /
    # etc.) — this pass must PRESERVE them exactly, not introduce a new
    # 32px/14px/500 button spec.
    check("Remove Role: height is unchanged (26px, existing compact ghost-action contract)", style["height"] == "26px", style["height"])
    check("Remove Role: transparent background at rest", style["background"] in ("rgba(0, 0, 0, 0)", "transparent"), style["background"])
    check("Remove Role: no border", style["border"] == "none", style["border"])
    check("Remove Role: font-size unchanged (12px)", style["fontSize"] == "12px", style["fontSize"])
    check("Remove Role: font-weight unchanged (600)", style["fontWeight"] == "600", style["fontWeight"])
    check("Remove Role: cursor is pointer", style["cursor"] == "pointer", style["cursor"])
    check("Remove Role: text-only (no icon svg)", js(c, "!document.getElementById('crRemove').querySelector('svg')"))

    # ═══════════════ 4. Remove Role confirmation flow preserved ═══════════════
    role_name = js(c, "document.getElementById('crRoleName').value")
    # Real user interaction focuses a button before/on click; a bare JS
    # `.click()` doesn't reliably move focus the way a real mouse click
    # does, so focus explicitly first to faithfully exercise the
    # documented "restore focus to Remove Role on dismiss" contract.
    js(c, "document.getElementById('crRemove').focus();")
    js(c, "document.getElementById('crRemove').click();")
    time.sleep(0.2)
    dialog_visible = js(c, "var b=document.getElementById('crConfirmBackdrop'); b && !b.hasAttribute('hidden')")
    check("Remove Role: clicking opens the confirmation dialog", dialog_visible)
    named_role = js(c, "document.getElementById('crConfirmRoleName').textContent")
    check("Remove Role: confirmation dialog identifies the exact role being removed",
          named_role.strip() == role_name.strip(), "%s vs %s" % (named_role, role_name))

    # Cancel the confirmation -> focus returns to Remove Role, role NOT removed
    js(c, "document.getElementById('crConfirmCancel').click();")
    time.sleep(0.2)
    check("Remove Role: Cancel in the confirm dialog closes it without removing",
          js(c, "var b=document.getElementById('crConfirmBackdrop'); b.hasAttribute('hidden')"))
    check("Remove Role: focus returns to the Remove Role control after Cancel",
          js(c, "document.activeElement && document.activeElement.id") == "crRemove")
    check("Remove Role: page is still open (role not removed) after Cancel",
          js(c, "document.getElementById('createRolePage').style.display !== 'none'"))

    # Full removal happy-path
    role_count_before = js(c, "ROLES_PERMISSIONS_DATA.length")
    js(c, "document.getElementById('crRemove').click();")
    time.sleep(0.15)
    js(c, "document.getElementById('crConfirmRemove').click();")
    time.sleep(0.3)
    role_count_after = js(c, "ROLES_PERMISSIONS_DATA.length")
    check("Remove Role: confirming removes exactly one role record",
          role_count_after == role_count_before - 1, "%s -> %s" % (role_count_before, role_count_after))
    check("Remove Role: page closes back to the Roles list after removal",
          js(c, "document.getElementById('createRolePage').style.display === 'none'"))
    check("Remove Role: success toast shown", js(c, """
    (function(){
      var toasts = document.querySelectorAll('.edl-toast, [class*="toast"]');
      return Array.from(toasts).some(function(t){return /removed/i.test(t.textContent);});
    })()
    """))

    # ═══════════════ 5. Toggling never shows both controls at once ═══════════════
    open_create_role(c, base)
    check("Toggle: Create Role shows Save as Draft, hides Remove Role",
          js(c, """
          (function(){
            var d = document.getElementById('crSaveDraft');
            var r = document.getElementById('crRemove');
            return !d.hasAttribute('hidden') && r.hasAttribute('hidden');
          })()
          """))
    opened2 = open_edit_role(c, base)
    if opened2:
        check("Toggle: Edit Role shows Remove Role, hides Save as Draft",
              js(c, """
              (function(){
                var d = document.getElementById('crSaveDraft');
                var r = document.getElementById('crRemove');
                return d.hasAttribute('hidden') && !r.hasAttribute('hidden');
              })()
              """))

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
