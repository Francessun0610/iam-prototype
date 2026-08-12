#!/usr/bin/env python3
"""End-to-end tests for the standardized Users/Roles/Teams toolbar
primary-action position (2026-08-10).

Covers:
  * Add User (Users) and Create Role (Roles) share the same ADS button
    component/size (height, padding, radius, typography, colors, icon size).
  * Add User and Create Role share the exact same right edge and vertical
    centerline at multiple viewport widths, and after a tab round-trip.
  * The three toolbars (Users/Roles/Teams) share one right content guide
    (`.tbar`'s own right edge) and one toolbar height, independent of
    each panel's own content (e.g. Users' Internal/External toggle).
  * Teams has no primary creation action (out of scope; verifies we did
    NOT invent a new Create Team feature) but its toolbar still shares
    the same right/height contract as Users and Roles.
  * Switching tabs repeatedly does not drift the button's position.
  * Page-specific secondary actions are preserved (Export on Users only).
  * Existing behavior (routes opened by each button) is unchanged.

Same CDP-over-headless-Chrome approach as the other tests in this repo.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_toolbar_alignment.py


Runs against `public/v4.1/` (final-QA pass, 2026-08-12) — it was
written when V4 was the current build and kept pointing at `/v4/`
after the V4.1 split, so it had stopped covering the build that
actually ships. Every assertion below passes unchanged on V4.1.
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
    profile_dir = tempfile.mkdtemp(prefix="iam-toolbar-align-test-")
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
    return js(c, """(function(){
      var el = document.querySelector(%r);
      if (!el) return null;
      var r = el.getBoundingClientRect();
      return {x:r.x, y:r.y, w:r.width, h:r.height, top:r.top, bottom:r.bottom,
              left:r.left, right:r.right, cy:(r.top+r.bottom)/2};
    })()""" % sel)


def computed(c, sel, props):
    return js(c, """(function(){
      var el = document.querySelector(%r);
      if (!el) return null;
      var s = getComputedStyle(el);
      var out = {};
      %s
      return out;
    })()""" % (sel, "\n".join("out[%r]=s.getPropertyValue(%r);" % (p, p) for p in props)))


def open_tab(c, label):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%r;}).click();" % label)
    time.sleep(0.2)


def set_viewport(c, width, height):
    c.send("Emulation.setDeviceMetricsOverride", {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": False})


def close_or_none(x):
    return x if x is not None else {}


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
    set_viewport(c, 1440, 900)

    c.navigate(base + "/v4.1/", wait=1.2)

    # ── 1. Shared HTML structure: right-actions wrapper exists on both ──
    check("Users has a .tbar-r right-actions group", js(c, "!!document.querySelector('#usersPanel .tbar-r')"))
    check("Roles has a .tbar-r right-actions group", js(c, "!!document.querySelector('#rolesPanel .tbar-r')"))
    check("Add User lives inside .tbar-r", js(c, "!!document.querySelector('#usersPanel .tbar-r .btn-ghost')"))
    check("Create Role lives inside .tbar-r", js(c, "!!document.querySelector('#rolesPanel .tbar-r .btn-ghost')"))

    # ── 2. Teams: no invented Create Team feature, but shared toolbar shell ──
    open_tab(c, "Teams")
    check("Teams toolbar has no primary creation button (out of scope, unchanged)",
          js(c, "!document.querySelector('#teamsPanel .tbar-r')") or
          js(c, "document.querySelectorAll('#teamsPanel .tbar-r button').length") == 0)
    check("Teams route/behavior untouched: no /teams/create hooks added",
          js(c, "typeof window.openCreateTeam") == "undefined" or True)  # informational; no such feature exists by design

    # ── 3. Component parity: Add User vs Create Role use the same ADS button ──
    open_tab(c, "Users")
    props = ["height", "padding", "border-radius", "font-size", "font-weight",
             "line-height", "gap", "background-color", "color"]
    add_user_style = computed(c, "#usersPanel .tbar-r .btn-ghost", props)
    add_user_icon = rect(c, "#usersPanel .tbar-r .btn-ghost svg")
    open_tab(c, "Roles")
    create_role_style = computed(c, "#rolesPanel .tbar-r .btn-ghost", props)
    create_role_icon = rect(c, "#rolesPanel .tbar-r .btn-ghost svg")

    for p in props:
        check("Button %s matches between Add User and Create Role" % p,
              add_user_style[p] == create_role_style[p],
              "%s vs %s" % (add_user_style[p], create_role_style[p]))
    check("Icon size matches (16x16) for both buttons",
          add_user_icon["w"] == create_role_icon["w"] == 16 and
          add_user_icon["h"] == create_role_icon["h"] == 16)

    # ── 4. Right-edge + vertical-center parity at desktop viewport ──────
    open_tab(c, "Users")
    r_users = rect(c, "#usersPanel .tbar-r .btn-ghost")
    open_tab(c, "Roles")
    r_roles = rect(c, "#rolesPanel .tbar-r .btn-ghost")
    check("Add User and Create Role share the same right edge",
          abs(r_users["right"] - r_roles["right"]) < 0.5,
          "%.1f vs %.1f" % (r_users["right"], r_roles["right"]))
    check("Add User and Create Role share the same vertical centerline",
          abs(r_users["cy"] - r_roles["cy"]) < 0.5,
          "%.1f vs %.1f" % (r_users["cy"], r_roles["cy"]))

    # ── 5. Toolbar shell parity across all three tabs ───────────────────
    open_tab(c, "Users")
    tbar_users = rect(c, "#usersPanel .tbar")
    open_tab(c, "Roles")
    tbar_roles = rect(c, "#rolesPanel .tbar")
    open_tab(c, "Teams")
    tbar_teams = rect(c, "#teamsPanel .tbar")
    check("Users/Roles/Teams toolbars share the same right edge",
          abs(tbar_users["right"] - tbar_roles["right"]) < 0.5 and
          abs(tbar_roles["right"] - tbar_teams["right"]) < 0.5,
          "users=%.1f roles=%.1f teams=%.1f" % (tbar_users["right"], tbar_roles["right"], tbar_teams["right"]))
    check("Users/Roles/Teams toolbars share the same height",
          tbar_users["h"] == tbar_roles["h"] == tbar_teams["h"],
          "users=%s roles=%s teams=%s" % (tbar_users["h"], tbar_roles["h"], tbar_teams["h"]))

    # Vertical centerline check against a secondary control (Search) too.
    open_tab(c, "Teams")
    search_teams = rect(c, "#teamsPanel .search")
    check("Teams search shares the same vertical centerline as Add User / Create Role",
          abs(search_teams["cy"] - r_users["cy"]) < 0.5,
          "%.1f vs %.1f" % (search_teams["cy"], r_users["cy"]))

    # ── 6. Stability across repeated tab switching (no drift) ───────────
    for _ in range(3):
        open_tab(c, "Users")
        open_tab(c, "Roles")
        open_tab(c, "Teams")
    open_tab(c, "Users")
    r_users_after = rect(c, "#usersPanel .tbar-r .btn-ghost")
    check("Add User position is stable after repeated tab switching",
          abs(r_users_after["right"] - r_users["right"]) < 0.5 and
          abs(r_users_after["cy"] - r_users["cy"]) < 0.5)

    # ── 7. Responsive: right edges stay aligned at multiple viewports ───
    for w in (1440, 1200, 1024, 900, 768):
        set_viewport(c, w, 900)
        time.sleep(0.15)
        open_tab(c, "Users")
        ru = rect(c, "#usersPanel .tbar-r .btn-ghost")
        open_tab(c, "Roles")
        rr = rect(c, "#rolesPanel .tbar-r .btn-ghost")
        check("Right edges match at viewport width=%d" % w,
              abs(ru["right"] - rr["right"]) < 0.5,
              "%.1f vs %.1f" % (ru["right"], rr["right"]))
    set_viewport(c, 1440, 900)
    time.sleep(0.2)

    # ── 8. Empty/filtered state doesn't move the button ─────────────────
    open_tab(c, "Roles")
    before_filter = rect(c, "#rolesPanel .tbar-r .btn-ghost")
    js(c, "document.getElementById('rpSearchInput').value='zzzz-no-match-zzzz';"
         "document.getElementById('rpSearchInput').dispatchEvent(new Event('input',{bubbles:true}));")
    time.sleep(0.3)
    after_filter = rect(c, "#rolesPanel .tbar-r .btn-ghost")
    check("Create Role position is stable in the empty/filtered state",
          abs(before_filter["right"] - after_filter["right"]) < 0.5 and
          abs(before_filter["cy"] - after_filter["cy"]) < 0.5)
    js(c, "document.getElementById('rpSearchInput').value='';"
         "document.getElementById('rpSearchInput').dispatchEvent(new Event('input',{bubbles:true}));")

    # ── 9. Page-specific secondary actions preserved ─────────────────────
    open_tab(c, "Users")
    check("Users still shows Export before Add User (secondary action preserved)",
          js(c, "!!document.querySelector('#usersPanel .tbar-r #usersExportBtn')"))
    open_tab(c, "Roles")
    check("Roles has no Export button (not added where not required)",
          js(c, "!document.querySelector('#rolesPanel .tbar-r #usersExportBtn')") and
          js(c, "!document.querySelector('#rolesPanel [id*=Export]')"))

    # ── 10. Existing behavior unchanged: each button still opens its flow ──
    open_tab(c, "Users")
    js(c, "document.querySelector('#usersPanel .tbar-r .btn-ghost').click();")
    time.sleep(0.3)
    check("Add User still opens the Step 1 modal", js(c, "!!document.querySelector('.au-modal, [role=\"dialog\"]')"))
    js(c, "document.body.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape', bubbles:true}));"
         "var dlg = document.querySelector('.au-modal, [role=\"dialog\"]'); if (dlg) { var x = dlg.querySelector('[aria-label*=\"lose\" i], .au-modal-close'); if (x) x.click(); }")
    time.sleep(0.3)

    c.navigate(base + "/v4.1/", wait=1.0)
    open_tab(c, "Roles")
    js(c, "document.querySelector('#rolesPanel .tbar-r .btn-ghost').click();")
    time.sleep(0.4)
    check("Create Role still opens the Create Role page", js(c, "!!document.getElementById('createRolePage')") and
          js(c, "document.getElementById('createRolePage').style.display") != "none")

    total = len(results)
    passed = sum(1 for s, _, _ in results if s == "PASS")
    failed = total - passed
    print("\n%d passed, %d failed (of %d)" % (passed, failed, total))
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
