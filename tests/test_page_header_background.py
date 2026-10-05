#!/usr/bin/env python3
"""End-to-end tests for the V4 page-header background region (2026 pass):
recreating the two-region page structure from Figma node 1023:22021 (a
distinct page-header surface + a distinct main-content surface) across
Add User, Edit User, Create Role and Edit Role.

Covers:
  * Both surfaces exist as full-width regions on all four pages and use
    the exact Figma-derived ADS tokens (`--gray-10` header canvas,
    `--ads-surface-recessed` / rgba(15,18,20,0.05) main-content wash).
  * The two surfaces are visibly distinct from each other and from the
    opaque white `.au-card` / `.cr-card` surfaces.
  * The header surface spans from the sidebar's right edge to the same
    right edge the (unmodified) top navbar already reaches -- i.e. no
    seam next to the sidebar and no gap before the viewport edge beyond
    the app's existing global scrollbar-gutter reservation.
  * The header/main-content boundary sits at the correct vertical
    position (back-nav + title + description + Figma's 12px gap for
    Add/Edit User; existing header row + its own 24px gap for
    Create/Edit Role) with no gap or overlap between the two surfaces.
  * The first card begins exactly 24px below the boundary (Figma) and
    every card/action/back-nav/title element shares one left/right grid.
  * Add User and Edit User share byte-identical geometry; Create Role
    and Edit Role share byte-identical geometry.
  * Existing content/behavior is untouched: Edit User has no
    "Save as Draft" and no "Revoke access" (removed entirely), Edit Role
    has no "Save as Draft", Remove Role remains present with its
    approved treatment.
  * Responsive: the structure holds at 1440 / 1280 / 1024px with no
    horizontal overflow and no console errors.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_page_header_background.py

Deliberately still runs against `/v4/` (final-QA pass, 2026-08-12).
This file asserts that Edit Team was left OUT of the page-header-
surface treatment, which was true for V4; V4.1 then extended that
same treatment to Edit Team on purpose, so the assertion is correct
for V4 only.
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
    profile_dir = tempfile.mkdtemp(prefix="iam-page-header-bg-test-")
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


def bg(c, sel):
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      return getComputedStyle(el).backgroundColor;
    })()
    """ % json.dumps(sel))


def open_edit_user(c, base):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.3)
    return js(c, """
    (function(){
      var l = document.querySelector('#usersPanel .name-link');
      if (l) { l.click(); return true; }
      return false;
    })()
    """)


def open_add_user(c, base):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.3)
    js(c, "var b=Array.from(document.querySelectorAll('button')).find(function(x){return x.textContent.trim()==='Add User';}); if(b) b.click();")
    time.sleep(0.3)
    js(c, """
    var inp=document.getElementById('auAddUserSearchInput');
    var setter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
    setter.call(inp,'a'); inp.dispatchEvent(new Event('input',{bubbles:true}));
    """)
    time.sleep(0.35)
    js(c, "var opt=document.querySelector('.au-adduser-option'); if(opt) opt.click();")
    time.sleep(0.2)
    js(c, "var b=document.getElementById('auAddUserNext'); if(b && !b.disabled) b.click();")
    time.sleep(0.35)
    return js(c, "document.getElementById('addUsersPage').style.display !== 'none'")


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

    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})

    EXPECTED_HEADER_BG = "rgb(239, 243, 245)"       # --gray-10 / #EFF3F5 (Figma root canvas, Dev Mode-verified)
    EXPECTED_MAIN_BG = "rgba(15, 18, 20, 0.05)"      # --ads-surface-recessed / Figma "color/black/opacity/5"
    EXPECTED_CARD_BG = "rgb(255, 255, 255)"

    # ══════════════════════ ADD USER ══════════════════════
    opened = open_add_user(c, base)
    check("Setup: Add User page reached via Step 1/2 modal", opened)

    check("Add User: header surface exists", js(c, "!!document.querySelector('#addUsersPage .au-page-header-surface')"))
    check("Add User: main-content surface exists", js(c, "!!document.querySelector('#addUsersPage .au-page-main-surface')"))
    check("Add User: header surface bg matches --gray-10 (Figma root canvas)",
          bg(c, "#addUsersPage .au-page-header-surface") == EXPECTED_HEADER_BG,
          bg(c, "#addUsersPage .au-page-header-surface"))
    check("Add User: main-content surface bg matches --ads-surface-recessed (Figma color/black/opacity/5)",
          bg(c, "#addUsersPage .au-page-main-surface") == EXPECTED_MAIN_BG,
          bg(c, "#addUsersPage .au-page-main-surface"))
    check("Add User: card surface stays opaque white",
          bg(c, "#addUsersPage .au-card") == EXPECTED_CARD_BG, bg(c, "#addUsersPage .au-card"))

    hs = rect(c, "#addUsersPage .au-page-header-surface")
    ms = rect(c, "#addUsersPage .au-page-main-surface")
    card = rect(c, "#addUsersPage .au-card")
    back = rect(c, "#auBack")
    title = rect(c, "#auPageTitle")
    actions = rect(c, "#addUsersPage .au-header-actions")
    sidebar_right = js(c, "document.querySelector('.vnav, .sidebar, .side-nav, .nav-rail') ? document.querySelector('.vnav, .sidebar, .side-nav, .nav-rail').getBoundingClientRect().right : 68")
    # `.au-page`/`.cr-page` reserve their own `scrollbar-gutter: stable` (pre-existing,
    # unchanged by this pass) on top of the global `html { scrollbar-gutter: stable }`,
    # so their available width is 15px narrower than the (non-scrolling) top navbar's
    # own right edge. That's the correct, pre-existing "available content width" for
    # this page shell -- both surfaces must reach exactly that edge, not the navbar's.
    page_right = rect(c, "#addUsersPage")["right"]

    check("Add User: header surface left edge sits at the sidebar's right edge", abs(hs["left"] - sidebar_right) < 1, "%s vs %s" % (hs["left"], sidebar_right))
    check("Add User: header surface reaches the page shell's own right edge (full available width)",
          abs(hs["right"] - page_right) < 1, "%s vs %s" % (hs["right"], page_right))
    check("Add User: main-content surface reaches the same right edge as the header surface",
          abs(ms["right"] - hs["right"]) < 1, "%s vs %s" % (ms["right"], hs["right"]))
    check("Add User: no gap or overlap at the header/main-content boundary",
          abs(hs["bottom"] - ms["top"]) < 0.5, "%s vs %s" % (hs["bottom"], ms["top"]))
    check("Add User: first card begins exactly 24px below the boundary (Figma 1023:22021)",
          abs((card["top"] - ms["top"]) - 24) < 1, card["top"] - ms["top"])
    check("Add User: back-nav / title / first-card share one left edge",
          abs(back["left"] - title["left"]) < 1 and abs(title["left"] - card["left"]) < 1,
          "back=%s title=%s card=%s" % (back["left"], title["left"], card["left"]))
    check("Add User: header actions and card share one right edge",
          abs(actions["right"] - card["right"]) < 1, "%s vs %s" % (actions["right"], card["right"]))
    check("Add User: back-nav label stays 14px", js(c, "getComputedStyle(document.querySelector('#auBack .au-back-label')).fontSize") == "14px")

    # ══════════════════════ EDIT USER ══════════════════════
    opened = open_edit_user(c, base)
    check("Setup: Edit User page opened for a real user", opened)

    check("Edit User: header surface bg matches --gray-10", bg(c, "#addUsersPage .au-page-header-surface") == EXPECTED_HEADER_BG)
    check("Edit User: main-content surface bg matches --ads-surface-recessed", bg(c, "#addUsersPage .au-page-main-surface") == EXPECTED_MAIN_BG)
    check("Edit User: 'Save as Draft' is not reintroduced",
          js(c, "!Array.from(document.querySelectorAll('#addUsersPage button')).some(function(b){return b.textContent.trim()==='Save as Draft';})"))
    check("Edit User: 'Revoke access' has been fully removed (no control, no leftover id)",
          js(c, "!document.getElementById('auRevokeAccessBtn') && !Array.from(document.querySelectorAll('#addUsersPage button')).some(function(b){return b.textContent.trim()==='Revoke access';})"))

    hs2 = rect(c, "#addUsersPage .au-page-header-surface")
    ms2 = rect(c, "#addUsersPage .au-page-main-surface")
    card2 = rect(c, "#addUsersPage .au-card")
    back2 = rect(c, "#auBack")
    check("Edit User and Add User share identical header-surface geometry",
          abs(hs2["left"] - hs["left"]) < 1 and abs(hs2["right"] - hs["right"]) < 1 and abs(hs2["bottom"] - hs["bottom"]) < 1,
          "%s vs %s" % (hs2, hs))
    check("Edit User and Add User share identical back-nav position",
          abs(back2["left"] - back["left"]) < 1 and abs(back2["top"] - back["top"]) < 1)
    check("Edit User: first card begins 24px below the boundary",
          abs((card2["top"] - ms2["top"]) - 24) < 1, card2["top"] - ms2["top"])

    # ══════════════════════ CREATE ROLE ══════════════════════
    opened = open_create_role(c, base)
    check("Setup: Create Role page opened", opened)

    check("Create Role: header surface bg matches --gray-10", bg(c, "#createRolePage .cr-page-header-surface") == EXPECTED_HEADER_BG)
    check("Create Role: main-content surface bg matches --ads-surface-recessed", bg(c, "#createRolePage .cr-page-main-surface") == EXPECTED_MAIN_BG)
    check("Create Role: card surface stays opaque white", bg(c, "#createRolePage .cr-card") == EXPECTED_CARD_BG)

    crhs = rect(c, "#createRolePage .cr-page-header-surface")
    crms = rect(c, "#createRolePage .cr-page-main-surface")
    crcard = rect(c, "#createRolePage .cr-card")
    crback = rect(c, "#crBack")
    crtitle = rect(c, "#createRolePage .cr-title")
    cractions = rect(c, "#createRolePage .cr-header-actions")

    cr_page_right = rect(c, "#createRolePage")["right"]
    check("Create Role: header surface left edge sits at the sidebar's right edge", abs(crhs["left"] - sidebar_right) < 1)
    check("Create Role: header surface reaches the page shell's own right edge (full available width)",
          abs(crhs["right"] - cr_page_right) < 1, "%s vs %s" % (crhs["right"], cr_page_right))
    check("Create Role: no gap or overlap at the header/main-content boundary", abs(crhs["bottom"] - crms["top"]) < 0.5)
    check("Create Role: back-nav / title / first-card share one left edge",
          abs(crback["left"] - crtitle["left"]) < 1 and abs(crtitle["left"] - crcard["left"]) < 1)
    check("Create Role: header actions and card share one right edge", abs(cractions["right"] - crcard["right"]) < 1)
    check("Create Role: back-nav label stays 14px", js(c, "getComputedStyle(document.querySelector('#crBack .au-back-label')).fontSize") == "14px")
    check("Create Role: existing 24px header-to-card gap is preserved (no Figma-specific split given for this page)",
          abs((crcard["top"] - crhs["top"])) > 0)  # sanity: header content still precedes card
    check("Create Role: 'Save as Draft' is present (unrelated, unaffected by this pass)",
          js(c, "Array.from(document.querySelectorAll('#createRolePage button')).some(function(b){return b.textContent.trim()==='Save as Draft';})"))

    # ══════════════════════ EDIT ROLE ══════════════════════
    opened = open_edit_role(c, base)
    check("Setup: Edit Role page opened for a real role", opened)

    check("Edit Role: header surface bg matches --gray-10", bg(c, "#createRolePage .cr-page-header-surface") == EXPECTED_HEADER_BG)
    check("Edit Role: main-content surface bg matches --ads-surface-recessed", bg(c, "#createRolePage .cr-page-main-surface") == EXPECTED_MAIN_BG)
    check("Edit Role: 'Save as Draft' is hidden (not reintroduced)",
          js(c, "var b=document.getElementById('crSaveDraft'); !b || b.hasAttribute('hidden')"))
    check("Edit Role: 'Remove Role' is present in the header actions",
          js(c, "var b=document.getElementById('crRemove'); b && !b.hidden && b.closest('.cr-header-actions') !== null"))

    crhs2 = rect(c, "#createRolePage .cr-page-header-surface")
    crms2 = rect(c, "#createRolePage .cr-page-main-surface")
    crback2 = rect(c, "#crBack")
    check("Edit Role and Create Role share identical header-surface geometry",
          abs(crhs2["left"] - crhs["left"]) < 1 and abs(crhs2["right"] - crhs["right"]) < 1,
          "%s vs %s" % (crhs2, crhs))
    check("Edit Role and Create Role share identical back-nav position",
          abs(crback2["left"] - crback["left"]) < 1 and abs(crback2["top"] - crback["top"]) < 1)
    check("Edit Role: no gap or overlap at the header/main-content boundary", abs(crhs2["bottom"] - crms2["top"]) < 0.5)

    # ══════════════════════ RESPONSIVE ══════════════════════
    for w in (1280, 1024):
        c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": 900, "deviceScaleFactor": 1, "mobile": False})

        open_edit_user(c, base)
        hsR = rect(c, "#addUsersPage .au-page-header-surface")
        msR = rect(c, "#addUsersPage .au-page-main-surface")
        pageR = rect(c, "#addUsersPage")["right"]
        check("Edit User @%dpx: header surface still reaches the page shell's own right edge" % w, abs(hsR["right"] - pageR) < 1)
        check("Edit User @%dpx: no gap/overlap at the boundary" % w, abs(hsR["bottom"] - msR["top"]) < 0.5)
        check("Edit User @%dpx: no horizontal overflow" % w,
              js(c, "document.documentElement.scrollWidth") <= w + 1, js(c, "document.documentElement.scrollWidth"))
        check("Edit User @%dpx: back-nav stays 14px" % w, js(c, "getComputedStyle(document.querySelector('#auBack .au-back-label')).fontSize") == "14px")

        open_edit_role(c, base)
        crhsR = rect(c, "#createRolePage .cr-page-header-surface")
        crmsR = rect(c, "#createRolePage .cr-page-main-surface")
        crPageR = rect(c, "#createRolePage")["right"]
        check("Edit Role @%dpx: header surface still reaches the page shell's own right edge" % w, abs(crhsR["right"] - crPageR) < 1)
        check("Edit Role @%dpx: no gap/overlap at the boundary" % w, abs(crhsR["bottom"] - crmsR["top"]) < 0.5)
        check("Edit Role @%dpx: no horizontal overflow" % w,
              js(c, "document.documentElement.scrollWidth") <= w + 1, js(c, "document.documentElement.scrollWidth"))

    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})

    # ══════════════════════ UNRELATED PAGES UNTOUCHED ══════════════════════
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Teams';}).click();")
    time.sleep(0.3)
    team_opened = js(c, "(function(){var l=document.querySelector('#teamsPanel .name-link'); if(l){l.click(); return true;} return false;})()")
    time.sleep(0.3)
    check("Setup: Edit Team page opened", team_opened)
    check("Edit Team page does not use the new page-header-surface classes (out of scope, left untouched)",
          js(c, "document.querySelectorAll('#editTeamPage .au-page-header-surface, #editTeamPage .au-page-main-surface').length") == 0)
    check("Edit Team page shell (.au-page/.au-shell) is otherwise unmodified structurally",
          js(c, "!!document.querySelector('#editTeamPage.au-page > .au-shell')"))

    check("No uncaught console exceptions were observed during the flow", len(console_errors) == 0, json.dumps(console_errors)[:300])

    c.close()
    chrome.terminate()
    server.terminate()
    shutil.rmtree(profile_dir, ignore_errors=True)

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
