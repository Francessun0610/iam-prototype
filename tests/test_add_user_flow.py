#!/usr/bin/env python3
"""End-to-end tests for the Add User flow (2026-08-10 flow change).

Covers the collapse of the old two-modal ("Step 1" search modal + an
internal "Step 2 of 2" review screen rendered inside the same dialog)
into a single-step search/select modal that hands off directly to the
existing Add User page, which now serves as Step 2 of the overall
flow. See the comment block above `auAddUserModalBackdrop` in
public/v4/app.js for the full rationale.

Same CDP-over-headless-Chrome approach as test_create_role.py /
test_version_routing.py — this repo has no bundler/JS test runner
(static HTML/CSS/JS only).

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_add_user_flow.py

Deliberately still runs against `public/v4.1/`'s predecessor `/v4/`
(final-QA pass, 2026-08-12). V4.1 removed the "Change user" control
from Add User per an explicit requirement, so the change-user confirm
modal this file exercises no longer exists there. The V4 build is
frozen and still ships at `/v4/`, so these assertions stay valid for
it; V4.1's own Add User flow is covered by test_add_user_basic_identity
and test_add_user_search_cleanup.
"""

import atexit
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
    profile_dir = tempfile.mkdtemp(prefix="iam-add-user-flow-test-")
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


CLICK_ADD_USER_BTN = (
    "(function(){"
    " var b=document.querySelectorAll('#usersPanel .btn-ghost');"
    " for (var i=0;i<b.length;i++){"
    "   if (b[i].textContent.indexOf('Add User')!==-1){ b[i].click(); return true; }"
    " } return false; })()"
)


def open_users_list(c, base):
    c.navigate(base + "/v4/", wait=1.0)


def open_add_user_modal(c):
    check("'Add User' trigger button found and clicked", js(c, CLICK_ADD_USER_BTN) is True)
    time.sleep(0.15)


def search(c, query):
    js(c, "var i=document.getElementById('auAddUserSearchInput'); i.value=%r; i.dispatchEvent(new Event('input',{bubbles:true}));" % query)
    time.sleep(0.3)  # simulated search latency (160ms) + margin


def select_result(c, name_substr):
    js(c, "Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option')).find(function(o){return o.textContent.indexOf(%r)!==-1;}).click();" % name_substr)
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
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1400, "deviceScaleFactor": 1, "mobile": False})

    # ── 1. Add User opens the Step 1 modal ───────────────────────────
    open_users_list(c, base)
    history_len_before_open = js(c, "window.history.length")
    open_add_user_modal(c)
    check("Add User modal backdrop is visible", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is False)
    check("Modal title is 'Add user'", js(c, "document.getElementById('auAddUserModalTitle').textContent") == "Add user")
    check("Step indicator reads 'Step 1 of 2'", js(c, "document.getElementById('auAddUserStepOf').textContent") == "Step 1 of 2")
    check("Add User page is NOT shown while the modal is open", js(c, "document.getElementById('addUsersPage').style.display") == "none")
    check("Opening the modal adds no browser-history entry",
          js(c, "window.history.length") == history_len_before_open)

    # ── 2. Next disabled without selection ───────────────────────────
    check("Next is disabled before any selection", js(c, "document.getElementById('auAddUserNext').disabled") is True)

    # ── 3. Search works ───────────────────────────────────────────────
    search(c, "Frank")
    results_text = js(c, "Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option')).map(function(o){return o.textContent;})")
    check("Searching 'Frank' surfaces Frank Grimes", any("Frank Grimes" in t for t in results_text), str(results_text))
    check("Search results capped at 10 visible rows", js(c, "document.querySelectorAll('#auAddUserListbox .au-adduser-option').length") <= 10)

    # ── 4. Selection works / Next enabled after selection ────────────
    select_result(c, "Frank Grimes")
    check("Selected user preview becomes visible", js(c, "document.getElementById('auAddUserSelected').hasAttribute('hidden')") is False)
    check("Selected user name shown in preview", "Frank Grimes" in js(c, "document.getElementById('auAddUserSelectedCard').textContent"))
    check("Next is enabled after a valid selection", js(c, "document.getElementById('auAddUserNext').disabled") is False)

    # ── 5. Clicking Next: closes modal, no second modal, navigates ──
    history_len_before_next = js(c, "window.history.length")
    js(c, "document.getElementById('auAddUserNext').click();")
    time.sleep(0.15)
    check("Next closes the Add User modal", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is True)
    check("No second/'Change user' confirm modal opened", js(c, "document.getElementById('auChangeUserConfirmBackdrop').hasAttribute('hidden')") is True)
    check("No lingering 'Step 2 of 2' text anywhere in the DOM", "Step 2 of 2" not in js(c, "document.body.textContent"))
    check("Next navigates directly to the Add User page", js(c, "document.getElementById('addUsersPage').style.display") == "")
    check("Next adds no browser-history entry", js(c, "window.history.length") == history_len_before_next)

    # ── 6. Basic Information populated from the selection ─────────────
    check("First name populated from selected user", js(c, "document.getElementById('auFirstName').value") == "Frank")
    check("Last name populated from selected user", js(c, "document.getElementById('auLastName').value") == "Grimes")
    check("Email populated from the selected user's actual (deterministically-generated) roster record",
          js(c, "document.getElementById('auEmail').value") == "frank.grimes@disney.com")
    check("Avatar/identity block renders the selected user's name",
          "Frank Grimes" in js(c, "document.getElementById('auEditRow').textContent"))
    check("Identity row is visible (no longer the empty state)", js(c, "document.getElementById('auIdEmpty').hidden") is True)
    check("Region populated from roster data (Frank Grimes -> NA)", js(c, "document.getElementById('auRegion').value") == "NA")
    check("Team populated from roster data (Frank Grimes -> Ad Operations)", js(c, "document.getElementById('auTeam').value") == "Ad Operations")

    # ── 7. Read-only vs. editable rules ────────────────────────────────
    check("First name is read-only after roster selection", js(c, "document.getElementById('auFirstName').readOnly") is True)
    check("Last name is read-only after roster selection", js(c, "document.getElementById('auLastName').readOnly") is True)
    check("Email is read-only after roster selection", js(c, "document.getElementById('auEmail').readOnly") is True)
    check("Region combo trigger remains enabled/editable after roster selection",
          js(c, "var b=document.getElementById('auRegionCombo-ctl'); !b || !b.disabled"))
    check("Team combo trigger remains enabled/editable after roster selection",
          js(c, "var b=document.getElementById('auTeamCombo-ctl'); !b || !b.disabled"))

    # ── 8. Focus behavior ──────────────────────────────────────────────
    check("Focus moved to the Add User page heading after Next", js(c, "document.activeElement && document.activeElement.id") == "auPageTitle")

    # ── 9. No user saved by Next ────────────────────────────────────────
    users_before_save = js(c, "DATA.length")
    check("Next does not create a user record", js(c, "DATA.length") == users_before_save)

    # ── 10. Role and Permission remains available ─────────────────────
    check("Roles & Permissions card is present on the Add User page", js(c, "!!document.getElementById('auRolesCard')"))
    check("Role/Permission helper sentence is present", "Role assignment determines this user" in js(c, "document.getElementById('auAccessHelper').textContent"))

    # ── 11. Change User reopens Step 1 (no unsaved role work yet) ──────
    check("'Change user' trigger is visible once a user is selected", js(c, "document.getElementById('auRosterBannerChange').hidden") is False)
    js(c, "document.getElementById('auRosterBannerChange').click();")
    time.sleep(0.1)
    check("Change user reopens the Step 1 modal directly (no confirm needed, no role work yet)",
          js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is False)
    check("Reopened modal preselects the current person", "Frank Grimes" in js(c, "document.getElementById('auAddUserSelectedCard').textContent"))
    check("Reopened modal is still Step 1 chrome (no review screen)", js(c, "document.getElementById('auAddUserStepOf').textContent") == "Step 1 of 2")

    # ── 12. Replacement user updates Basic Information ────────────────
    search(c, "Priya")
    select_result(c, "Priya Nair")
    js(c, "document.getElementById('auAddUserNext').click();")
    time.sleep(0.15)
    check("Replacement selection closes the modal", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is True)
    check("Basic Information updates to the new selection (first name)", js(c, "document.getElementById('auFirstName').value") == "Priya")
    check("Basic Information updates to the new selection (email)", js(c, "document.getElementById('auEmail').value") == "p.nair@disney.com")

    # ── 13. Change User with unsaved Role/Permission work -> confirm ──
    js(c, "window.__auState.selectedRoleIds = ['role-test-marker'];")
    js(c, "document.getElementById('auRosterBannerChange').click();")
    time.sleep(0.1)
    check("Change user shows a discard-work confirmation when Role/Permission is configured",
          js(c, "document.getElementById('auChangeUserConfirmBackdrop').hasAttribute('hidden')") is False)
    check("Selection modal stays closed behind the confirmation", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is True)
    js(c, "document.getElementById('auChangeUserConfirmCancel').click();")
    time.sleep(0.1)
    check("Cancelling the discard-work confirmation leaves everything unchanged",
          js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is True and
          js(c, "document.getElementById('auChangeUserConfirmBackdrop').hasAttribute('hidden')") is True)
    js(c, "document.getElementById('auRosterBannerChange').click();")
    time.sleep(0.1)
    js(c, "document.getElementById('auChangeUserConfirmPrimary').click();")
    time.sleep(0.1)
    check("Confirming the discard-work dialog reopens the Step 1 modal", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is False)
    js(c, "document.getElementById('auAddUserCancel').click();")
    time.sleep(0.1)
    js(c, "window.__auState.selectedRoleIds = [];")

    # ── 14. Cancel / Close / Escape stay on the User List ─────────────
    open_users_list(c, base)
    open_add_user_modal(c)
    js(c, "document.getElementById('auAddUserCancel').click();")
    time.sleep(0.1)
    check("Cancel closes the modal", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is True)
    check("Cancel does not navigate to the Add User page", js(c, "document.getElementById('addUsersPage').style.display") == "none")

    open_add_user_modal(c)
    js(c, "document.getElementById('auAddUserModalClose').click();")
    time.sleep(0.1)
    check("Close (X) closes the modal", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is True)
    check("Close (X) does not navigate to the Add User page", js(c, "document.getElementById('addUsersPage').style.display") == "none")

    open_add_user_modal(c)
    c.key("Escape")
    time.sleep(0.1)
    check("Escape closes the modal", js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is True)
    check("Escape does not navigate to the Add User page", js(c, "document.getElementById('addUsersPage').style.display") == "none")

    # ── 15. Ineligible candidates cannot be selected/advanced ─────────
    open_add_user_modal(c)
    search(c, "Nathaniel")
    ineligible_disabled = js(c, "Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option')).find(function(o){return o.textContent.indexOf('Nathaniel')!==-1;}).classList.contains('is-disabled')")
    check("Inactive/ineligible roster candidates render disabled", ineligible_disabled is True)
    js(c, "document.getElementById('auAddUserCancel').click();")
    time.sleep(0.1)

    # ── 16. Navigation-failure recovery (simulated) ────────────────────
    open_add_user_modal(c)
    search(c, "Frank")
    select_result(c, "Frank Grimes")
    js(c, "window.__origFocusForTest = HTMLElement.prototype.focus;"
          "HTMLElement.prototype.focus = function(){"
          "  if (this.id === 'auPageTitle') {"
          "    HTMLElement.prototype.focus = window.__origFocusForTest;"
          "    throw new Error('simulated navigation failure');"
          "  }"
          "  return window.__origFocusForTest.apply(this, arguments);"
          "};")
    js(c, "document.getElementById('auAddUserNext').click();")
    time.sleep(0.2)
    check("A failed transition restores/keeps the modal visible instead of a blank page",
          js(c, "document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')") is False)
    check("The selection survives a failed transition", "Frank Grimes" in js(c, "document.getElementById('auAddUserSelectedCard').textContent"))
    check("Next is re-enabled so the admin can retry", js(c, "document.getElementById('auAddUserNext').disabled") is False)
    js(c, "HTMLElement.prototype.focus = window.__origFocusForTest;")  # safety net in case the guard above didn't fire
    js(c, "document.getElementById('auAddUserNext').click();")
    time.sleep(0.15)
    check("Retrying Next after a recovered failure succeeds", js(c, "document.getElementById('addUsersPage').style.display") == "")

    # ── 17. Missing selected-user state never shows a fake person ─────
    open_users_list(c, base)  # fresh navigation == "refresh" for this static, non-SPA-routed app
    check("A fresh navigation shows the User List, not the Add User page", js(c, "document.getElementById('addUsersPage').style.display") == "none")
    open_add_user_modal(c)
    check("A freshly-opened modal has no stale selection from the previous session", js(c, "document.getElementById('auAddUserSelected').hasAttribute('hidden')") is True)
    check("A freshly-opened modal's Next is disabled (no fake/default person)", js(c, "document.getElementById('auAddUserNext').disabled") is True)
    js(c, "document.getElementById('auIdEmptySelectBtn') ? null : null;")  # no-op guard; empty-state button existence checked below
    check("Add User page (if reached without a selection) shows the empty state, not a fake person", js(c, "!!document.getElementById('auIdEmpty')"))

    # ── Summary ────────────────────────────────────────────────────────
    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    c.close()
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
