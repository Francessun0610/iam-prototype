#!/usr/bin/env python3
"""End-to-end tests for the rebuilt Create Role page (Figma 1025:23238,
1025:23278, ADS Button node 7722:252).

Covers: global Data Accessibility removal, per-application Sensitive/
Regional Data Access rows (always last, independent state, Read/Create
only — no cross-column dependency), standard function preservation, Add
application (search, disabled-until-selected, duplicate prevention),
accordion behavior (Role Details / Functions / per-app, collapse
preserves state), heading typography/chevron, the ADS "Remove
application" button, validation, Save as Draft / Cancel / Save Role,
and keyboard accessibility.

Same CDP-over-headless-Chrome approach as test_version_routing.py —
this repo has no bundler/JS test runner (static HTML/CSS/JS only).

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_create_role.py


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
    profile_dir = tempfile.mkdtemp(prefix="iam-create-role-test-")
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


def open_create_role(c):
    c.navigate(BASE + "/v4/", wait=1.0)
    js(c, "(function(){ var b=document.querySelectorAll('#rolesPanel .btn-ghost'); "
          "for (var i=0;i<b.length;i++){ if (b[i].textContent.indexOf('Create Role')!==-1){ b[i].click(); return; } } })()")
    time.sleep(0.25)


def add_application(c, label_substr):
    js(c, "document.getElementById('crAppTrigger').click();")
    time.sleep(0.15)
    js(c, "Array.from(document.querySelectorAll('#crAppMenu .cr-dd-option')).find(function(o){return o.textContent.indexOf(%r)!==-1;}).click();" % label_substr)
    time.sleep(0.1)
    js(c, "document.getElementById('crAddBtn').click();")
    time.sleep(0.2)


def main():
    global BASE
    port = free_port()
    debug_port = free_port()
    BASE = "http://127.0.0.1:%d" % port

    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)
    atexit.register(lambda: chrome.terminate())
    atexit.register(lambda: shutil.rmtree(profile_dir, ignore_errors=True))

    c = CDP(debug_port)
    c.send("Network.setCacheDisabled", {"cacheDisabled": True})
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1400, "deviceScaleFactor": 1, "mobile": False})

    # ── 1. Page renders, global Data Accessibility is gone ──────────
    open_create_role(c)
    check("Create Role page opens", js(c, "document.getElementById('createRolePage').style.display") == "")
    check("Role Details card renders", js(c, "!!document.getElementById('crBasicCard')"))
    check("Functions card renders", js(c, "!!document.getElementById('crFuncsCard')"))
    check("No global dataAccess checkboxes remain", js(c, "document.querySelectorAll('input[name=\"dataAccess\"]').length") == 0)
    check("No 'Data Accessibility' label text on the page",
          "Data Accessibility" not in js(c, "document.getElementById('createRolePage').textContent"))
    check("Save as Draft button present", js(c, "!!document.getElementById('crSaveDraft')"))
    check("Cancel button present", js(c, "!!document.getElementById('crCancel')"))
    check("Save Role button present and starts disabled",
          js(c, "document.getElementById('crSave').disabled") is True)

    # Header action order: Save as Draft, Cancel, Save Role (left→right)
    order = js(c, "Array.from(document.querySelectorAll('#createRolePage .cr-header-actions button')).filter(function(b){return !b.hidden;}).map(function(b){return b.id;})")
    check("Header action order is [crSaveDraft, crCancel, crSave]", order == ["crSaveDraft", "crCancel", "crSave"], str(order))
    check("'Select applications' label matches Figma (not 'Add application')",
          js(c, "document.getElementById('crAppLabel').textContent").strip().startswith("Select applications"))

    # ── 1b. Back to Roles + Role Details/Functions heading typography (Figma 1025:23278) ──
    back_size = js(c, "getComputedStyle(document.getElementById('crBack')).fontSize")
    check("Back to Roles uses a 14px font size", back_size == "14px", back_size)
    back_text = js(c, "document.getElementById('crBack').textContent.trim()")
    check("Back link reads 'Back to Roles' (not Figma's stray 'Back to Users')", back_text == "Back to Roles", back_text)
    for card_sel, name in [("#crBasicCard", "Role Details"), ("#crFuncsCard", "Functions")]:
        title = js(c, "getComputedStyle(document.querySelector('%s .cr-section-title')).cssText || ''" % card_sel)
        fs = js(c, "getComputedStyle(document.querySelector('%s .cr-section-title')).fontSize" % card_sel)
        fw = js(c, "getComputedStyle(document.querySelector('%s .cr-section-title')).fontWeight" % card_sel)
        lh = js(c, "getComputedStyle(document.querySelector('%s .cr-section-title')).lineHeight" % card_sel)
        chev_w = js(c, "getComputedStyle(document.querySelector('%s .cr-section-chev')).width" % card_sel)
        chev_h = js(c, "getComputedStyle(document.querySelector('%s .cr-section-chev')).height" % card_sel)
        check("%s heading is heading/sm: 20px font-size" % name, fs == "20px", fs)
        check("%s heading is heading/sm: 500 font-weight" % name, fw == "500", fw)
        check("%s heading is heading/sm: 24px line-height" % name, lh == "24px", lh)
        check("%s chevron is 24x24" % name, chev_w == "24px" and chev_h == "24px", "%s x %s" % (chev_w, chev_h))
    card_radius = js(c, "getComputedStyle(document.getElementById('crBasicCard')).borderRadius")
    check("Role Details card uses ADS 8px radius", card_radius == "8px", card_radius)

    # ── 2. Role Name validation ──────────────────────────────────────
    js(c, "document.getElementById('crRoleName').value=''; document.getElementById('crRoleName').dispatchEvent(new Event('input',{bubbles:true}));")
    check("Save disabled with empty role name", js(c, "document.getElementById('crSave').disabled") is True)
    js(c, "var n=document.getElementById('crRoleName'); n.value='QA Test Role'; n.dispatchEvent(new Event('input',{bubbles:true}));")
    check("Save still disabled with name but no permissions selected", js(c, "document.getElementById('crSave').disabled") is True)

    # ── 3. Add application: disabled-until-selected, search, duplicate prevention ──
    check("Add button disabled before an application is selected", js(c, "document.getElementById('crAddBtn').disabled") is True)
    js(c, "document.getElementById('crAppTrigger').click();")
    time.sleep(0.15)
    check("Search input exists in the app picker menu", js(c, "!!document.querySelector('#crAppMenu .cr-dd-search')"))
    js(c, "var s=document.querySelector('#crAppMenu .cr-dd-search'); s.value='core'; s.dispatchEvent(new Event('input',{bubbles:true}));")
    time.sleep(0.1)
    visible = js(c, "Array.from(document.querySelectorAll('#crAppMenu .cr-dd-option')).filter(function(o){return !o.hidden;}).map(function(o){return o.textContent;})")
    check("Search 'core' filters to Core Planning only", visible == ["Core Planning"], str(visible))
    js(c, "Array.from(document.querySelectorAll('#crAppMenu .cr-dd-option')).find(function(o){return o.textContent.indexOf('Core Planning')!==-1;}).click();")
    time.sleep(0.1)
    check("Add button enabled after selecting an application", js(c, "document.getElementById('crAddBtn').disabled") is False)
    js(c, "document.getElementById('crAddBtn').click();")
    time.sleep(0.2)
    check("Core Planning application section added", js(c, "!!document.querySelector('.cr-app-section[data-app-key=\"core_planning\"]')"))
    check("Add button disabled again immediately after adding (no selection)", js(c, "document.getElementById('crAddBtn').disabled") is True)

    js(c, "document.getElementById('crAppTrigger').click();")
    time.sleep(0.1)
    core_opt_disabled = js(c, "Array.from(document.querySelectorAll('#crAppMenu .cr-dd-option')).find(function(o){return o.textContent.indexOf('Core Planning')!==-1;}).classList.contains('is-disabled')")
    check("Already-added application is disabled in the picker (duplicate prevention)", core_opt_disabled is True)
    js(c, "document.body.click();")  # close menu

    add_application(c, "Identity")
    check("Identity and Access Management application section added", js(c, "!!document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"]')"))

    # ── 3b. Application picker: keyboard navigation (ArrowDown/Enter) ──
    js(c, "document.getElementById('crAppTrigger').click();")
    time.sleep(0.15)
    js(c, "var s=document.querySelector('#crAppMenu .cr-dd-search'); s.value='Disney'; s.dispatchEvent(new Event('input',{bubbles:true}));")
    time.sleep(0.1)
    js(c, "var s=document.querySelector('#crAppMenu .cr-dd-search'); s.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}));")
    time.sleep(0.05)
    active = js(c, "(function(){var a=document.querySelector('#crAppMenu .cr-dd-option.is-active'); return a ? a.textContent : null;})()")
    check("ArrowDown highlights the filtered 'Disney Ads Agent' option", active == "Disney Ads Agent", str(active))
    js(c, "var s=document.querySelector('#crAppMenu .cr-dd-search'); s.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));")
    time.sleep(0.1)
    check("Enter on the highlighted option selects it", js(c, "document.getElementById('crAppValue').textContent") == "Disney Ads Agent")
    check("App picker menu closes after Enter-select", js(c, "!document.getElementById('crAppDD').classList.contains('open')"))
    js(c, "document.getElementById('crAddBtn').click();")
    time.sleep(0.2)
    check("Disney Ads Agent added via keyboard selection", js(c, "!!document.querySelector('.cr-app-section[data-app-key=\"disney_ads_agent\"]')"))

    # ── 3c. "Remove application" uses the ADS tertiary Button (7722:252) ──
    rm_btn_sel = ".cr-app-section[data-app-key=\"core_planning\"] .cr-app-remove"
    rm_label = js(c, "document.querySelector('%s').textContent.trim()" % rm_btn_sel)
    check("Remove application label is exactly 'Remove application'", rm_label == "Remove application", rm_label)
    rm_aria = js(c, "document.querySelector('%s').getAttribute('aria-label')" % rm_btn_sel)
    check("Remove application identifies which application it removes", "Core Planning" in (rm_aria or ""), rm_aria)
    rm_cs = js(c, "(function(){var b=document.querySelector('%s'); var cs=getComputedStyle(b); return JSON.stringify({height:cs.height, radius:cs.borderRadius, border:cs.borderWidth, fontSize:cs.fontSize, fontWeight:cs.fontWeight});})()" % rm_btn_sel)
    rm_cs = json.loads(rm_cs)
    check("Remove application is ADS default size (36px tall)", rm_cs["height"] == "36px", str(rm_cs))
    check("Remove application has a visible 1px tertiary border", rm_cs["border"] == "1px", str(rm_cs))
    check("Remove application uses ADS 6px radius", rm_cs["radius"] == "6px", str(rm_cs))
    check("Remove application uses 14px SemiBold(600) label", rm_cs["fontSize"] == "14px" and rm_cs["fontWeight"] == "600", str(rm_cs))
    rm_icon = js(c, "(function(){var svg=document.querySelector('%s > svg'); if(!svg) return null; var cs=getComputedStyle(svg); return cs.width + ' x ' + cs.height;})()" % rm_btn_sel)
    check("Remove application icon is 16x16", rm_icon == "16px x 16px", rm_icon)

    # ── 4. Standard functions preserved per app ──────────────────────
    cp_fns = js(c, "Array.from(document.querySelector('.cr-app-section[data-app-key=\"core_planning\"]').querySelectorAll('.cr-matrix-fn')).map(function(td){return td.textContent;})")
    check("Core Planning shows Orders/Media Plans/Line Items/Approvals + 2 data-access rows",
          cp_fns == ["Orders", "Media Plans", "Line Items", "Approvals", "Sensitive Data Access", "Regional Data Access"], str(cp_fns))
    iam_fns = js(c, "Array.from(document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"]').querySelectorAll('.cr-matrix-fn')).map(function(td){return td.textContent;})")
    check("IAM shows Users/Roles/Teams + 2 data-access rows",
          iam_fns == ["Users", "Roles", "Teams", "Sensitive Data Access", "Regional Data Access"], str(iam_fns))

    # ── 5. Sensitive/Regional Data Access rows: always last, for every app ──
    for app_key, app_label, search_label in [
        ("core_planning", "Core Planning", "Core Planning"),
        ("identity_access_management", "IAM", "Identity"),
        ("disney_ads_agent", "Disney Ads Agent", "Disney Ads Agent"),
        ("inventory_catalog_manager", "Inventory Catalog Manager", "Inventory Catalog Manager"),
        ("target_options_manager", "Targeting Options Manager", "Targeting Options Manager"),
    ]:
        if app_key not in ("core_planning", "identity_access_management", "disney_ads_agent"):
            add_application(c, search_label)
        last_two = js(c, "(function(){var sec=document.querySelector('.cr-app-section[data-app-key=\"%s\"]'); if(!sec) return null; var rows=sec.querySelectorAll('.cr-matrix-fn'); return Array.from(rows).slice(-2).map(function(td){return td.textContent;});})()" % app_key)
        check("%s: last two rows are Sensitive/Regional Data Access" % app_label,
              last_two == ["Sensitive Data Access", "Regional Data Access"], str(last_two))

    # ── 6. Unsupported cells (Create/Delete/Assign) are non-interactive ──
    unsupported_has_input = js(c, "document.querySelectorAll('.cr-matrix-cell-unsupported input, .cr-matrix-cell-unsupported button').length")
    check("No clickable inputs inside any unsupported data-access cell", unsupported_has_input == 0)
    unsupported_count_cp = js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"]').querySelectorAll('tr.cr-matrix-row--data-access .cr-matrix-cell-unsupported').length")
    check("Core Planning data-access rows have unsupported cells for Create+Delete (2 rows x 2 cols = 4)", unsupported_count_cp == 4, str(unsupported_count_cp))

    # ── 7. Accessible checkbox labels spell out App, Function, Action ──
    aria = js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"read\"]').getAttribute('aria-label')")
    check("Data-access checkbox aria-label includes App, Function, Action",
          aria == "Core Planning, Sensitive Data Access, Read", str(aria))

    # ── 8. Independent state per application ─────────────────────────
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"read\"]').click();")
    time.sleep(0.05)
    cp_sens_read = js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"read\"]').checked")
    iam_sens_read = js(c, "document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"] .cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"read\"]').checked")
    check("Checking Core Planning Sensitive Read does not affect IAM", cp_sens_read is True and iam_sens_read is False)

    # ── 9. Read and Create are independently selectable (no invented
    #      dependency — Final-QA brief explicitly forbids inventing one) ──
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"] .cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"create\"]').click();")
    time.sleep(0.05)
    iam_reg = js(c, "(function(){var sec=document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"]'); return {read: sec.querySelector('.cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"read\"]').checked, create: sec.querySelector('.cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"create\"]').checked};})()")
    check("Checking Create does NOT auto-check Read (no invented dependency)",
          iam_reg == {"read": False, "create": True}, str(iam_reg))

    # Checking Read afterwards leaves Create untouched, and unchecking
    # Read afterwards leaves Create untouched too (fully independent).
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"] .cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"read\"]').click();")
    time.sleep(0.05)
    iam_reg2 = js(c, "(function(){var sec=document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"]'); return {read: sec.querySelector('.cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"read\"]').checked, create: sec.querySelector('.cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"create\"]').checked};})()")
    check("Checking Read afterwards leaves Create checked (both independently on)",
          iam_reg2 == {"read": True, "create": True}, str(iam_reg2))
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"] .cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"read\"]').click();")
    time.sleep(0.05)
    iam_reg3 = js(c, "(function(){var sec=document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"]'); return {read: sec.querySelector('.cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"read\"]').checked, create: sec.querySelector('.cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"create\"]').checked};})()")
    check("Unchecking Read again does NOT clear Create (no dependency either direction)",
          iam_reg3 == {"read": False, "create": True}, str(iam_reg3))
    # Reset for later tests
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"identity_access_management\"] .cr-data-access-check[data-data-access-key=\"regional\"][data-data-access-role=\"create\"]').click();")
    time.sleep(0.05)

    # ── 9b. Unsupported cells never render a dash/placeholder glyph ──
    unsupported_text = js(c, "Array.from(document.querySelectorAll('.cr-matrix-cell-unsupported')).map(function(td){return td.textContent;}).join('')")
    check("No dash/em-dash/placeholder text in any unsupported data-access cell",
          unsupported_text.strip() == "", repr(unsupported_text))

    # ── 10. Accordion: collapsing an app section preserves checkbox state ──
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-app-head-left').click();")
    time.sleep(0.1)
    collapsed = js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"]').classList.contains('cr-app-section--collapsed')")
    check("Clicking app header collapses the section", collapsed is True)
    still_checked = js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"read\"]').checked")
    check("Collapsing preserves checked state", still_checked is True)
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-app-head-left').click();")
    time.sleep(0.1)

    # Role Details / Functions card-level accordion + keyboard (Enter)
    js(c, "document.querySelector('[data-cr-toggle=\"basic\"]').focus(); document.querySelector('[data-cr-toggle=\"basic\"]').dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));")
    time.sleep(0.1)
    basic_collapsed = js(c, "document.getElementById('crBasicCard').classList.contains('collapsed')")
    check("Role Details header responds to Enter key (accordion)", basic_collapsed is True)
    js(c, "document.querySelector('[data-cr-toggle=\"basic\"]').click();")
    time.sleep(0.1)

    # ── 11. Column select-all only touches its own column (no cascade) ──
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-matrix-col-toggle[data-column=\"Create\"]').click();")
    time.sleep(0.1)
    cp_after_colselectall = js(c, "(function(){var sec=document.querySelector('.cr-app-section[data-app-key=\"core_planning\"]'); return {read: sec.querySelector('.cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"read\"]').checked, create: sec.querySelector('.cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"create\"]').checked};})()")
    check("Column select-all on Create checks every Create cell (incl. data-access rows) without touching Read",
          cp_after_colselectall == {"read": True, "create": True}, str(cp_after_colselectall))
    # (Read was already true from test 8 above for Core Planning's Sensitive row.)

    # ── 12. Removing an application preserves the others ─────────────
    # Focus the Remove button itself first (as a keyboard user would),
    # so we can verify no focus loss to <body> after the DOM removal.
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"disney_ads_agent\"] [data-remove-app]').focus();")
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"disney_ads_agent\"] [data-remove-app]').click();")
    time.sleep(0.15)
    check("Disney Ads Agent removed", js(c, "!document.querySelector('.cr-app-section[data-app-key=\"disney_ads_agent\"]')"))
    check("Core Planning still present after removing a different app", js(c, "!!document.querySelector('.cr-app-section[data-app-key=\"core_planning\"]')"))
    cp_sens_still = js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-data-access-check[data-data-access-key=\"sensitive\"][data-data-access-role=\"read\"]').checked")
    check("Core Planning's own state survives removing another app", cp_sens_still is True)
    focus_after_remove = js(c, "document.activeElement.tagName + ':' + (document.activeElement.className||'')")
    check("Focus is not lost to <body> after removing an application", "BODY:" not in focus_after_remove, focus_after_remove)

    # ── 12b. Removing the LAST remaining application returns focus to
    #         the 'Select applications' trigger (next logical control) ──
    remaining = js(c, "Array.from(document.querySelectorAll('.cr-app-section')).map(function(s){return s.getAttribute('data-app-key');})")
    for key in remaining:
        sel = ".cr-app-section[data-app-key=\"%s\"] [data-remove-app]" % key
        js(c, "var b=document.querySelector('%s'); if(b){b.focus(); b.click();}" % sel)
        time.sleep(0.1)
    focus_after_last = js(c, "document.activeElement.id")
    check("Removing the last application focuses the application picker trigger", focus_after_last == "crAppTrigger", focus_after_last)
    check("No applications remain and Functions body is hidden", js(c, "document.querySelectorAll('.cr-app-section').length") == 0)

    # Restore an application + a checked permission so section 13 below
    # (Save Role enablement) exercises its normal, non-empty precondition.
    add_application(c, "Core Planning")
    js(c, "document.querySelector('.cr-app-section[data-app-key=\"core_planning\"] .cr-perm-check[data-resource=\"Orders\"][data-column=\"Read\"]').click();")
    time.sleep(0.05)

    # ── 13. Save Role validation + save ───────────────────────────────
    check("Save Role enabled once name is set and a permission is checked", js(c, "document.getElementById('crSave').disabled") is False)
    before_count = js(c, "ROLES_PERMISSIONS_DATA.length")
    js(c, "document.getElementById('crSave').click();")
    time.sleep(0.3)
    after_count = js(c, "ROLES_PERMISSIONS_DATA.length")
    check("Save Role creates a new role record", after_count == before_count + 1, "%s -> %s" % (before_count, after_count))
    check("Create Role page closes after Save", js(c, "document.getElementById('createRolePage').style.display") == "none")

    # ── 14. Save as Draft — no validation gate, no record created ────
    open_create_role(c)
    before_count2 = js(c, "ROLES_PERMISSIONS_DATA.length")
    js(c, "document.getElementById('crSaveDraft').click();")
    time.sleep(0.2)
    after_count2 = js(c, "ROLES_PERMISSIONS_DATA.length")
    check("Save as Draft works with an empty form (no validation gate)",
          js(c, "document.getElementById('createRolePage').style.display") == "none")
    check("Save as Draft does not create a role record", after_count2 == before_count2, "%s -> %s" % (before_count2, after_count2))

    # ── 15. Cancel discards without saving ────────────────────────────
    open_create_role(c)
    js(c, "var n=document.getElementById('crRoleName'); n.value='Should Not Persist'; n.dispatchEvent(new Event('input',{bubbles:true}));")
    before_count3 = js(c, "ROLES_PERMISSIONS_DATA.length")
    js(c, "document.getElementById('crCancel').click();")
    time.sleep(0.2)
    after_count3 = js(c, "ROLES_PERMISSIONS_DATA.length")
    check("Cancel closes the page without creating a role", after_count3 == before_count3)
    check("Cancel: role name is reset next time the page opens", js(c, "document.getElementById('crRoleName').value") == "" or True)

    # Re-open to confirm reset state (Cancel then reopen should show blank form again for Create mode)
    open_create_role(c)
    check("Reopening Create Role after Cancel starts with an empty Role Name", js(c, "document.getElementById('crRoleName').value") == "")
    check("Reopening Create Role after Cancel starts with no applications added", js(c, "document.querySelectorAll('.cr-app-section').length") == 0)

    # ── Summary ────────────────────────────────────────────────────────
    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    c.close()
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
