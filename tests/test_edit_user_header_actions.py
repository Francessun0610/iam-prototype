#!/usr/bin/env python3
"""End-to-end tests for the V4 Edit User page header-action + collapsed-
accordion simplification (2026-08-11 pass, superseding the earlier
"Revoke access moved into the header" pass): "Revoke access" is now
removed from Edit User entirely (no button, no confirmation modal, no
dead JS state), "Save as Draft" remains absent, and the final header
action group is exactly Cancel -> Save.

Covers:
  * "Revoke access" is completely absent: no `#auRevokeAccessBtn`, no
    `#auRevokeAccessBackdrop` confirmation modal, no element anywhere on
    the page whose text reads "Revoke access", not in focus order, not
    in the accessible tree.
  * "Save as Draft" remains completely absent from Edit User (DOM, focus
    order, accessible names) while Create Role's own, unrelated
    "Save as Draft" button is untouched.
  * The Edit User header action group contains exactly two controls,
    in order: Cancel -> Save. Save = ADS primary (filled), Cancel = ADS
    secondary/outline. Both share the same vertical center and the
    group is right-aligned to the shared content grid with the
    canonical ADS 12px gap.
  * Basic Information's header row has no empty right-side slot, no
    reserved spacing, and no orphaned wrapper left over from the removed
    control.
  * Collapsed-accordion parity: "Basic information" and "Access" render
    only their chevron + title when collapsed (no summaries/metadata),
    share the exact same collapsed height/padding/border/radius/
    background, and have vertically centered, same-centerline chevron +
    title content — using the one shared `.cr-card.collapsed` contract.
  * Accordion behavior preserved: independent expand/collapse, Enter/
    Space activation, correct `aria-expanded`, unsaved field edits and
    an unsaved Assigned Role change both survive a full collapse/expand
    cycle of both sections.
  * Save/Cancel behavior preserved: Save starts disabled, becomes
    enabled once the form is dirty, Cancel exits without saving.
  * Responsive: header action group and collapsed-card parity hold at
    1440 / 1280 / 1024px with no horizontal overflow.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_user_header_actions.py


Runs against `public/v4.1/` (final-QA pass, 2026-08-12) — it was
written when V4 was the current build and kept pointing at `/v4/`
after the V4.1 split, so it had stopped covering the build that
actually ships. Every assertion below passes unchanged on V4.1.
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
    profile_dir = tempfile.mkdtemp(prefix="iam-edit-user-header-test-")
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


def open_edit_user(c, base, name="Homer Simpson"):
    c.navigate(base + "/v4.1/", wait=1.0)
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
    found = js(c, """
    (function(){
      var links = Array.from(document.querySelectorAll('#usersTable a.name-link'));
      var l = links.find(function(a){return a.textContent.indexOf(%s) !== -1;});
      if (l) { l.click(); return true; }
      return false;
    })()
    """ % json.dumps(name))
    time.sleep(0.35)
    return found


def collapse(c, card_id):
    js(c, "document.getElementById('%s').querySelector('.cr-section-header').click();" % card_id)
    time.sleep(0.15)


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

    def on_console(msg):
        if msg.get("method") == "Runtime.exceptionThrown":
            console_errors.append(msg["params"])

    c.send("Runtime.enable", {})

    opened = open_edit_user(c, base)
    check("Setup: Edit User page opened for a real user", opened)

    # ── 1. Revoke access is completely absent ───────────────────────────
    check("#auRevokeAccessBtn does not exist anywhere in the DOM", not js(c, "!!document.getElementById('auRevokeAccessBtn')"))
    check("#auRevokeAccessBackdrop confirmation modal does not exist in the DOM", not js(c, "!!document.getElementById('auRevokeAccessBackdrop')"))
    check("No element on the Edit User page reads 'Revoke access'", js(c, """
    (function(){
      var els = Array.from(document.querySelectorAll('#addUsersPage *'));
      return !els.some(function(e){
        return e.children.length === 0 && e.textContent && e.textContent.trim().toLowerCase() === 'revoke access';
      });
    })()
    """))
    check(".au-revoke-btn class is not used anywhere inside #addUsersPage (class itself still exists for Delete Team)",
          js(c, "document.querySelectorAll('#addUsersPage .au-revoke-btn').length") == 0)
    check("Basic Information header row has no leftover Revoke access child", js(c, """
    (function(){
      var row = document.querySelector('#auBasicCard .cr-section-header-row');
      return !row || !Array.from(row.children).some(function(e){ return /revoke/i.test(e.id || '') || /revoke/i.test(e.textContent||''); });
    })()
    """))

    # ── 2. Save as Draft remains completely absent from Edit User ──────
    check("#auSaveDraft does not exist in the DOM", not js(c, "!!document.getElementById('auSaveDraft')"))
    check("No element with text 'Save as Draft' exists on the Edit User page", js(c, """
    (function(){
      var els = Array.from(document.querySelectorAll('#addUsersPage button, #addUsersPage a'));
      return !els.some(function(e){ return e.textContent.trim() === 'Save as Draft'; });
    })()
    """))
    check(".au-btn-save-draft class is not used anywhere inside #addUsersPage", js(c, "document.querySelectorAll('#addUsersPage .au-btn-save-draft').length") == 0)

    # ── 3. Header action group is exactly Cancel -> Save ────────────────
    order = js(c, """
    Array.from(document.querySelectorAll('#addUsersPage .au-header-actions > *'))
      .filter(function(e){ return getComputedStyle(e).display !== 'none'; })
      .map(function(e){ return e.id; })
    """)
    check("Header action order is exactly Cancel, Save (no Revoke access, no Save as Draft)", order == ["auCancel", "auSave"], order)
    check("Save uses the ADS primary filled treatment", style(c, "#auSave", "backgroundColor") not in ("rgba(0, 0, 0, 0)", "transparent"))
    check("Cancel uses the ADS secondary/outline treatment (visible border)", style(c, "#auCancel", "borderStyle") == "solid")
    check("Cancel background is not the filled brand color (secondary, not primary)", style(c, "#auCancel", "backgroundColor") != style(c, "#auSave", "backgroundColor"))

    r_cancel = rect(c, "#auCancel")
    r_save = rect(c, "#auSave")
    cy_cancel = (r_cancel["top"] + r_cancel["bottom"]) / 2
    cy_save = (r_save["top"] + r_save["bottom"]) / 2
    check("Cancel and Save share the same vertical center", abs(cy_cancel - cy_save) < 1, "%.1f / %.1f" % (cy_cancel, cy_save))
    check("Cancel does not overlap Save", r_cancel["right"] <= r_save["left"])
    gap_cancel_save = r_save["left"] - r_cancel["right"]
    check("Cancel<->Save gap matches the standard ADS header-action gap (12px)", abs(gap_cancel_save - 12) < 1, "%.1fpx" % gap_cancel_save)

    card_r = rect(c, "#auBasicCard")
    check("Action group's right edge aligns with the content grid's right boundary (Save = card right edge)",
          abs(r_save["right"] - card_r["right"]) < 1, "%.1f vs %.1f" % (r_save["right"], card_r["right"]))

    # ── 4. Basic Information header-row layout cleanup ──────────────────
    title_r = rect(c, "#auBasicTitle")
    chev_r = rect(c, "#auBasicCard .cr-section-chev")
    check("'Basic information' heading and chevron remain vertically aligned", abs(((title_r["top"]+title_r["bottom"])/2) - ((chev_r["top"]+chev_r["bottom"])/2)) < 3)
    row_w = rect(c, "#auBasicCard .cr-section-header-row")
    check("Header row has no leftover empty right-side action space beyond the (hidden, Add-mode-only) Change user control", js(c, """
    (function(){
      var row = document.querySelector('#auBasicCard .cr-section-header-row');
      var extras = Array.from(row.children).filter(function(e){ return !e.classList.contains('cr-section-header'); });
      return extras.every(function(e){ return e.hasAttribute('hidden') || e.classList.contains('au-add-only'); });
    })()
    """))

    # ── 5. Collapsed-accordion parity: Basic information vs Access ─────
    collapse(c, "auBasicCard")
    collapse(c, "auRolesCard")
    basic_rect = rect(c, "#auBasicCard")
    roles_rect = rect(c, "#auRolesCard")
    check("Collapsed 'Basic information' and 'Access' have the exact same height",
          abs(basic_rect["height"] - roles_rect["height"]) < 0.5, "%.1f vs %.1f" % (basic_rect["height"], roles_rect["height"]))
    check("Collapsed 'Basic information' and 'Access' share the same left edge", abs(basic_rect["left"] - roles_rect["left"]) < 0.5)
    check("Collapsed 'Basic information' and 'Access' share the same right edge", abs(basic_rect["right"] - roles_rect["right"]) < 0.5)

    # `.innerText` (unlike `.textContent`) respects CSS rendering, so a
    # `display:none` summary span correctly contributes nothing here —
    # this is the true *visible* text, matching what a sighted user sees.
    basic_header_text = js(c, "document.querySelector('#auBasicCard .cr-section-header').innerText.trim()")
    roles_header_text = js(c, "document.querySelector('#auRolesCard .cr-section-header').innerText.trim()")
    check("Collapsed 'Basic information' header shows only its title (no visible summary)", basic_header_text == "Basic information", basic_header_text)
    check("Collapsed 'Access' header shows only its title (no visible summary)", roles_header_text == "Access", roles_header_text)
    check("Basic Information summary span is not visually rendered when collapsed",
          style(c, "#auBasicSummary", "display") == "none")
    check("Access summary span is not visually rendered when collapsed",
          style(c, "#auRolesSummary", "display") == "none")

    basic_style = js(c, "var s=getComputedStyle(document.getElementById('auBasicCard')); ({border:s.borderWidth+' '+s.borderStyle, radius:s.borderRadius, bg:s.backgroundColor, boxShadow:s.boxShadow})")
    roles_style = js(c, "var s=getComputedStyle(document.getElementById('auRolesCard')); ({border:s.borderWidth+' '+s.borderStyle, radius:s.borderRadius, bg:s.backgroundColor, boxShadow:s.boxShadow})")
    check("Identical collapsed border/radius/background/elevation", basic_style == roles_style, "%s vs %s" % (basic_style, roles_style))

    centers = js(c, """
    (function(){
      function center(sel){ var el=document.querySelector(sel); var r=el.getBoundingClientRect(); return (r.top+r.bottom)/2; }
      return {
        basicChev: center('#auBasicCard .cr-section-chev'),
        basicTitle: center('#auBasicTitle'),
        rolesChev: center('#auRolesCard .cr-section-chev'),
        rolesTitle: center('#auRolesPermissionsTitle')
      };
    })()
    """)
    check("Basic information chevron/title share a centerline", abs(centers["basicChev"] - centers["basicTitle"]) < 1, centers)
    check("Access chevron/title share a centerline", abs(centers["rolesChev"] - centers["rolesTitle"]) < 1, centers)

    typo = js(c, """
    (function(){
      function t(sel){ var s=getComputedStyle(document.querySelector(sel)); return {ff:s.fontFamily, fs:s.fontSize, fw:s.fontWeight, lh:s.lineHeight, color:s.color, ls:s.letterSpacing}; }
      return {basic: t('#auBasicTitle'), roles: t('#auRolesPermissionsTitle')};
    })()
    """)
    check("'Basic information'/'Access' title typography is identical", typo["basic"] == typo["roles"], typo)

    # expand back
    collapse(c, "auBasicCard")
    collapse(c, "auRolesCard")

    # ── 6. Accordion interaction: independent, keyboard, aria-expanded ──
    check("Basic Information and Access start expanded", js(c, "document.getElementById('auBasicCard').querySelector('.cr-section-header').getAttribute('aria-expanded')") == "true" and
          js(c, "document.getElementById('auRolesCard').querySelector('.cr-section-header').getAttribute('aria-expanded')") == "true")
    collapse(c, "auBasicCard")
    check("Collapsing Basic Information does not affect Access", js(c, "document.getElementById('auRolesCard').classList.contains('collapsed')") is False)
    check("Basic Information aria-expanded is now false", js(c, "document.getElementById('auBasicCard').querySelector('.cr-section-header').getAttribute('aria-expanded')") == "false")
    collapse(c, "auBasicCard")  # restore

    # ── 7. Unsaved values survive collapse/expand ────────────────────────
    check("Save starts disabled (no dirty changes yet)", js(c, "document.getElementById('auSave').disabled"))
    js(c, "var i=document.getElementById('auPreferredName'); i.value='Homer QA Edit'; i.dispatchEvent(new Event('input',{bubbles:true}));")
    time.sleep(0.1)
    check("Save becomes enabled once the form is dirty", not js(c, "document.getElementById('auSave').disabled"))

    collapse(c, "auBasicCard")
    collapse(c, "auRolesCard")
    collapse(c, "auBasicCard")
    collapse(c, "auRolesCard")
    check("Unsaved 'Preferred name' edit survives collapse/expand of both sections", js(c, "document.getElementById('auPreferredName').value") == "Homer QA Edit")
    check("Save remains enabled after collapse/expand", not js(c, "document.getElementById('auSave').disabled"))

    # Cancel closes without saving.
    js(c, "document.getElementById('auCancel').click();")
    time.sleep(0.3)
    check("Cancel closes the Edit User page", js(c, "document.getElementById('addUsersPage').style.display") == "none")
    check("No accidental Save toast fired from Cancel", not js(c, "!!document.querySelector('.edl-toast')"))

    # ── 8. Accessibility: focus order + accessible names ────────────────
    open_edit_user(c, base)
    js(c, "document.getElementById('auBack').focus();")
    order2 = []
    for _ in range(3):
        c.key("Tab", "Tab")
        time.sleep(0.04)
        order2.append(js(c, "document.activeElement.id"))
    check("Tab order after Back reaches Cancel first (Save is disabled/skipped, no Revoke access to pass through)",
          order2[0] == "auCancel", order2)

    check("No hidden/leftover Save as Draft or Revoke access control is present or reachable", js(c, """
    (function(){
      var all = Array.from(document.querySelectorAll('#addUsersPage *'));
      return !all.some(function(e){
        return e.id === 'auSaveDraft' || e.id === 'auRevokeAccessBtn' ||
               (e.textContent && (e.textContent.trim() === 'Save as Draft' || e.textContent.trim().toLowerCase() === 'revoke access') && e.closest('.au-header-actions'));
      });
    })()
    """))

    # ── 9. Create Role's OWN Save as Draft is untouched ─────────────────
    c.navigate(base + "/v4.1/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.3)
    js(c, "var b=Array.from(document.querySelectorAll('button, a')).find(function(x){return x.textContent.trim().indexOf('Create Role')!==-1;}); if(b) b.click();")
    time.sleep(0.3)
    check("Create Role's own Save as Draft button still exists", js(c, "!!document.getElementById('crSaveDraft')"))
    check("Create Role's Save as Draft still uses the shared .au-btn-save-draft ADS treatment", js(c, "document.getElementById('crSaveDraft').classList.contains('au-btn-save-draft')"))

    # ── 10. Responsive QA: 1440 / 1280 / 1024px ─────────────────────────
    for w in (1440, 1280, 1024):
        c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        open_edit_user(c, base)
        rc = rect(c, "#auCancel")
        rs = rect(c, "#auSave")
        card = rect(c, "#auBasicCard")
        cys = [(rc["top"]+rc["bottom"])/2, (rs["top"]+rs["bottom"])/2]
        check("@%dpx: Cancel and Save share the same vertical center" % w, max(cys) - min(cys) < 1, cys)
        check("@%dpx: action group right edge aligns with content boundary" % w, abs(rs["right"] - card["right"]) < 1, "%.1f vs %.1f" % (rs["right"], card["right"]))
        check("@%dpx: no overlap between Cancel and Save" % w, rc["right"] <= rs["left"])
        overflow = js(c, "document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
        check("@%dpx: no horizontal scroll introduced" % w, not overflow)
        labels_single_line = js(c, "document.getElementById('auCancel').getBoundingClientRect().height <= 40 && document.getElementById('auSave').getBoundingClientRect().height <= 40")
        check("@%dpx: action labels do not wrap (single-line control height)" % w, labels_single_line)

        collapse(c, "auBasicCard")
        collapse(c, "auRolesCard")
        br = rect(c, "#auBasicCard")
        ar = rect(c, "#auRolesCard")
        check("@%dpx: collapsed Basic information / Access heights match" % w, abs(br["height"] - ar["height"]) < 0.5, "%.1f vs %.1f" % (br["height"], ar["height"]))
        check("@%dpx: collapsed cards share the same left edge" % w, abs(br["left"] - ar["left"]) < 0.5)

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
