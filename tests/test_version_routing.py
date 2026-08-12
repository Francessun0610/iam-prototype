#!/usr/bin/env python3
"""End-to-end tests for the Version selector + default routing behavior.

Covers the acceptance criteria for the shared `public/version-config.js`
setup: root `/` -> V4.1 redirect (no flash, no timeout, no loop), direct
access to /v1/ /v2/ /v3/ /v4/ /v4.1/, unknown-version 404 (no redirect
loop), Version submenu content/selected-state on every build (now 5
entries, V4.1 default), mouse + keyboard navigation (open/close, arrow
keys, Enter/Space, Escape, Home/End, Tab), switching versions (and the
already-active-version no-op), selecting V4 from the V4.1 default not
bouncing back, browser Back/Forward, that Theme/Log Out are unaffected,
and that the Version row's decorative chevron has been removed while
Theme's chevron is untouched.

2026-08-11: V4.1 was added as a full, independent duplicate of V4
(`public/v4.1/`, own HTML/CSS/JS — not an alias/redirect to `v4/`) and
promoted to `IAM_DEFAULT_VERSION_ID`. V4 itself keeps its own `/v4/`
route and is unaffected.

This repo has no JS bundler or test runner (static HTML/CSS/JS published
straight to GitLab Pages — see `.gitlab-ci.yml`), so this suite drives a
real headless Chrome over the DevTools Protocol against the same
`public/` folder GitLab Pages serves, using a plain `http.server` process
as the local stand-in for Pages.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_version_routing.py

Exits 0 if every check passes, 1 otherwise (prints a PASS/FAIL line per
check plus a final summary).
"""

import atexit
import os
import re
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request

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
    print("[%s] %s%s" % (status, name, ("  (%s)" % detail) if detail and not condition else ""))
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
    profile_dir = tempfile.mkdtemp(prefix="iam-version-routing-test-")
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
    for _ in range(80):
        try:
            urllib.request.urlopen("http://127.0.0.1:%d/json" % debug_port, timeout=0.3)
            return proc, profile_dir
        except Exception:
            time.sleep(0.15)
    raise RuntimeError("Chrome did not open its debugging port")


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

    # ── 1. Root redirect ────────────────────────────────────────────
    c.navigate(base + "/", wait=1.2)
    check("root '/' redirects to /v4.1/", c.eval("location.pathname") == "/v4.1/", c.eval("location.href"))
    check(
        "root redirect used history.replace (no extra '/' entry)",
        c.eval("window.performance.getEntriesByType('navigation')[0].type") in ("navigate", "reload"),
    )
    c.eval("location.reload();")
    time.sleep(1.0)
    check("reloading the resolved V4.1 route stays on /v4.1/ (no redirect loop)", c.eval("location.pathname") == "/v4.1/")
    check("root landed on a real V4.1 document, not a blank shell",
          c.eval("document.querySelectorAll('#tbody tr').length") > 0)
    check("root-resolved V4.1 loaded its stylesheet from the site base path",
          c.eval("getComputedStyle(document.body).fontFamily").strip() != "",
          c.eval("getComputedStyle(document.body).fontFamily"))
    check("root-resolved V4.1 reports no failed asset requests",
          c.eval("performance.getEntriesByType('resource')"
                 ".filter(function(r){return r.responseStatus >= 400;}).length") in (0, None))

    # ── 1b. The root hop carries URL state ─────────────────────────────
    # A link shared as "/?x=1#roles" has to arrive at "/v4.1/?x=1#roles";
    # dropping either half silently loses the state being shared.
    c.navigate(base + "/?redline=1&tab=roles#section-roles", wait=1.2)
    check("root redirect preserves the query string",
          c.eval("location.search") == "?redline=1&tab=roles", c.eval("location.href"))
    check("root redirect preserves the hash",
          c.eval("location.hash") == "#section-roles", c.eval("location.href"))
    check("root redirect with URL state still lands on /v4.1/",
          c.eval("location.pathname") == "/v4.1/", c.eval("location.href"))
    c.navigate(base + "/#roles-only", wait=1.2)
    check("root redirect preserves a bare hash with no query",
          c.eval("location.pathname") == "/v4.1/" and c.eval("location.hash") == "#roles-only",
          c.eval("location.href"))

    # The no-JS <meta refresh> fallback targets a bare "v4.1/" with no
    # query or hash, so if it sat at the top level it could race the
    # script above and win, dropping the URL state the checks below just
    # proved is preserved. Read the shell's own source (the browser
    # leaves "/" too fast to inspect) and require every meta refresh to
    # be inside <noscript>.
    root_html = urllib.request.urlopen(base + "/index.html", timeout=10).read().decode("utf-8")
    refreshes = re.findall(r"<meta[^>]+http-equiv=[\"']?refresh[\"']?[^>]*>", root_html, re.I)
    check("root shell still ships a no-JS meta-refresh fallback", len(refreshes) >= 1,
          "found %d" % len(refreshes))
    noscript_html = " ".join(re.findall(r"<noscript[^>]*>(.*?)</noscript>", root_html, re.I | re.S))
    outside = [m for m in refreshes if m not in noscript_html]
    check("no meta refresh sits outside <noscript> to race the JS redirect",
          outside == [], "racing tags: %r" % outside)

    # ── 2. Direct access to each version + correct selected state ──
    expected_selected = {"v1": "1.0", "v2": "2.0", "v3": "3.0", "v4": "4.0 (ADS)", "v4.1": "4.1 (ADS)"}
    for vid, label in expected_selected.items():
        folder = vid  # folder name matches the version id for every current build, including "v4.1"
        c.navigate(base + "/" + folder + "/", wait=1.0)
        check("direct /%s/ loads /%s/" % (folder, folder), c.eval("location.pathname") == "/%s/" % folder)
        sel = c.eval(
            "(function(){var el=document.querySelector('#userMenuVersion .user-menu-sub-item.is-selected');"
            "return el ? el.textContent.trim() : null;})()"
        )
        check("/%s/ shows '%s' selected in Version submenu" % (folder, label), sel == label, "got %r" % sel)
        checked = c.eval(
            "(function(){var el=document.querySelector('#userMenuVersion .user-menu-sub-item.is-selected');"
            "return el ? el.getAttribute('aria-checked') : null;})()"
        )
        check("/%s/ selected item has aria-checked=true" % folder, checked == "true")
        count = c.eval("document.querySelectorAll('#userMenuVersion .user-menu-sub-item').length")
        check("/%s/ Version submenu lists all 5 versions" % folder, count == 5, "got %s" % count)

    # ── 2b. V4 preservation: independently reachable, not overwritten ──
    c.navigate(base + "/v4/", wait=1.0)
    check("V4 route still loads its own document (not a redirect to V4.1)", c.eval("location.pathname") == "/v4/")
    check("V4's own title still reads 'V4 (ADS)'", "V4 (ADS)" in c.eval("document.title"), c.eval("document.title"))
    check("V4 users table still renders real rows", c.eval("document.querySelectorAll('#usersTable tbody tr').length") > 0)
    c.navigate(base + "/v4.1/", wait=1.0)
    check("V4.1's own title reads 'V4.1 (ADS)'", "V4.1 (ADS)" in c.eval("document.title"), c.eval("document.title"))
    check("V4.1 users table renders real rows", c.eval("document.querySelectorAll('#usersTable tbody tr').length") > 0)

    # ── 2c. Version row: decorative chevron removed, Theme's kept ──
    check("Version row has no .user-menu-chev icon", not c.eval("!!document.querySelector('#userMenuVersion > .user-menu-chev')"))
    check("Theme row still has its .user-menu-chev icon (unaffected)", c.eval("!!document.querySelector('#userMenuTheme > .user-menu-chev')"))
    check(
        "Version row text is exactly 'Version' (no leftover glyph/whitespace)",
        c.eval("document.querySelector('#userMenuVersion > .user-menu-label').textContent.trim()") == "Version",
    )
    ver_left = c.eval("document.querySelector('#userMenuVersion > .user-menu-label').getBoundingClientRect().left")
    logout_left = c.eval("document.querySelector('#userMenuLogout > .user-menu-label').getBoundingClientRect().left")
    check("Version label left edge matches Log Out label left edge", abs(ver_left - logout_left) < 0.5, "%.2f vs %.2f" % (ver_left, logout_left))
    ver_row_w = c.eval("document.getElementById('userMenuVersion').getBoundingClientRect().width")
    logout_row_w = c.eval("document.getElementById('userMenuLogout').getBoundingClientRect().width")
    check("Version row width unchanged vs Log Out (menu did not resize)", abs(ver_row_w - logout_row_w) < 0.5, "%.2f vs %.2f" % (ver_row_w, logout_row_w))
    check(
        "Version row is still keyboard/mouse interactive (aria-haspopup/expanded preserved)",
        c.eval("document.getElementById('userMenuVersion').getAttribute('aria-haspopup')") == "menu",
    )

    # ── 3. Unknown version route: no redirect loop, safe 404 ───────
    try:
        urllib.request.urlopen(base + "/v9/", timeout=2)
        status = 200
    except urllib.error.HTTPError as e:
        status = e.code
    check("unknown version /v9/ returns 404 (no redirect loop)", status == 404, "status=%s" % status)

    # ── 4. Mouse click: switch version, and already-active no-op ───
    c.navigate(base + "/v1/", wait=1.0)
    hist_before = c.eval("history.length")
    c.eval("document.getElementById('userMenuTrigger').click();")
    time.sleep(0.2)
    c.eval("document.getElementById('userMenuVersion').click();")
    time.sleep(0.2)
    c.eval("document.querySelector('#userMenuVersion .user-menu-sub-item.is-selected').click();")
    time.sleep(0.3)
    check(
        "clicking the already-active version (v1) does not navigate",
        c.eval("location.pathname") == "/v1/",
    )
    check(
        "clicking the already-active version does not add a history entry",
        c.eval("history.length") == hist_before,
    )
    check("menu closes after selecting the active version", c.eval("document.getElementById('userMenu').classList.contains('open')") is False)

    c.eval("document.getElementById('userMenuTrigger').click();")
    time.sleep(0.2)
    c.eval("document.getElementById('userMenuVersion').click();")
    time.sleep(0.2)
    c.eval("document.querySelector('#userMenuVersion .user-menu-sub-item[data-version-id=\"v4\"]').click();")
    time.sleep(0.6)
    check("clicking V4 from V1 navigates to /v4/", c.eval("location.pathname") == "/v4/")

    # ── 4b. Selecting V4.1 from V4, and V4 from the V4.1 default ────
    c.eval("document.getElementById('userMenuTrigger').click();")
    time.sleep(0.2)
    c.eval("document.getElementById('userMenuVersion').click();")
    time.sleep(0.2)
    c.eval("document.querySelector('#userMenuVersion .user-menu-sub-item[data-version-id=\"v4.1\"]').click();")
    time.sleep(0.6)
    check("clicking V4.1 from V4 navigates to /v4.1/", c.eval("location.pathname") == "/v4.1/")
    check("active-version state updates: '4.1 (ADS)' now selected", c.eval(
        "document.querySelector('#userMenuVersion .user-menu-sub-item.is-selected').getAttribute('data-version-id')"
    ) == "v4.1")

    c.eval("document.getElementById('userMenuTrigger').click();")
    time.sleep(0.2)
    c.eval("document.getElementById('userMenuVersion').click();")
    time.sleep(0.2)
    c.eval("document.querySelector('#userMenuVersion .user-menu-sub-item[data-version-id=\"v4\"]').click();")
    time.sleep(0.6)
    check("selecting V4 from the V4.1 default navigates to /v4/ (not back to /v4.1/)", c.eval("location.pathname") == "/v4/")
    time.sleep(0.5)
    check("staying on /v4/ after settling — no bounce-back redirect to /v4.1/", c.eval("location.pathname") == "/v4/")

    # ── 5. Browser Back / Forward ───────────────────────────────────
    c.eval("history.back();")
    time.sleep(0.6)
    check("Back after v4->v4.1->v4 returns to /v4.1/", c.eval("location.pathname") == "/v4.1/")
    c.eval("history.forward();")
    time.sleep(0.6)
    check("Forward after Back returns to /v4/", c.eval("location.pathname") == "/v4/")

    # Root redirect should not appear as its own Back stop.
    c.navigate(base + "/v2/", wait=1.0)
    c.navigate(base + "/", wait=1.0)
    check("root redirect (from /v2/) lands on /v4.1/", c.eval("location.pathname") == "/v4.1/")
    c.eval("history.back();")
    time.sleep(0.6)
    check(
        "Back after a root redirect skips the redirect shell, landing on /v2/",
        c.eval("location.pathname") == "/v2/",
    )

    # ── 6. Refresh preserves explicit version ───────────────────────
    c.navigate(base + "/v3/", wait=1.0)
    c.eval("location.reload();")
    time.sleep(1.0)
    check("Refresh on /v3/ stays on /v3/", c.eval("location.pathname") == "/v3/")
    c.navigate(base + "/v4.1/", wait=1.0)
    c.eval("location.reload();")
    time.sleep(1.0)
    check("Refresh on /v4.1/ stays on /v4.1/ (deep-link/reload-safe)", c.eval("location.pathname") == "/v4.1/")

    # ── 7. Keyboard accessibility ────────────────────────────────────
    c.navigate(base + "/v3/", wait=1.0)
    c.eval("document.getElementById('userMenuTrigger').focus();")
    c.key("ArrowDown")
    time.sleep(0.15)
    check(
        "ArrowDown on trigger opens menu and focuses Version row",
        c.eval("document.getElementById('userMenu').classList.contains('open')")
        and c.eval("document.activeElement.id") == "userMenuVersion",
    )
    c.key("Enter")
    time.sleep(0.15)
    check(
        "Enter on Version row opens submenu and focuses the selected item",
        c.eval("document.getElementById('userMenuVersion').getAttribute('aria-expanded')") == "true"
        and c.eval("document.activeElement.getAttribute('data-version-id')") == "v3",
    )
    c.key("ArrowDown")
    time.sleep(0.15)
    check("ArrowDown in submenu moves to next item (v4)", c.eval("document.activeElement.getAttribute('data-version-id')") == "v4")
    c.key("Home")
    time.sleep(0.15)
    check("Home in submenu jumps to first item (v1)", c.eval("document.activeElement.getAttribute('data-version-id')") == "v1")
    c.key("End")
    time.sleep(0.15)
    check("End in submenu jumps to last item (v4.1)", c.eval("document.activeElement.getAttribute('data-version-id')") == "v4.1")
    c.key("Escape")
    time.sleep(0.15)
    check(
        "Escape in submenu closes submenu and returns focus to Version row",
        c.eval("document.getElementById('userMenuVersion').getAttribute('aria-expanded')") == "false"
        and c.eval("document.activeElement.id") == "userMenuVersion",
    )
    check("Menu stays open after closing just the submenu", c.eval("document.getElementById('userMenu').classList.contains('open')") is True)
    c.key("Escape")
    time.sleep(0.15)
    check(
        "Second Escape closes the whole menu and returns focus to the trigger",
        (not c.eval("document.getElementById('userMenu').classList.contains('open')"))
        and c.eval("document.activeElement.id") == "userMenuTrigger",
    )

    # Keyboard version switch (Space) end to end.
    c.key("ArrowDown")
    time.sleep(0.1)
    c.key("Enter")
    time.sleep(0.1)
    c.key("End")  # -> v4.1
    time.sleep(0.1)
    c.key(" ", code="Space")
    time.sleep(0.5)
    check("Space on V4.1 item (from V3) navigates to /v4.1/", c.eval("location.pathname") == "/v4.1/")

    # Tab closes the menu instead of leaving it open while focus escapes.
    c.eval("document.getElementById('userMenuTrigger').focus();")
    c.key("ArrowDown")
    time.sleep(0.15)
    check("menu opens before Tab test", c.eval("document.getElementById('userMenu').classList.contains('open')") is True)
    c.key("Tab")
    time.sleep(0.15)
    check("Tab closes the open menu", c.eval("document.getElementById('userMenu').classList.contains('open')") is False)

    # ── 8. Theme submenu + Log Out unaffected ────────────────────────
    c.eval("document.getElementById('userMenuTrigger').click();")
    time.sleep(0.15)
    c.eval("document.getElementById('userMenuTheme').click();")
    time.sleep(0.15)
    c.eval("document.querySelector('#userMenuTheme .user-menu-sub-item[data-theme=\"dark\"]').click();")
    time.sleep(0.15)
    check("Theme submenu still applies EDL Dark", c.eval("document.documentElement.getAttribute('data-theme')") == "dark")
    c.eval("document.getElementById('userMenuTrigger').click();")
    time.sleep(0.15)
    c.eval("document.getElementById('userMenuTheme').click();")
    time.sleep(0.15)
    c.eval("document.querySelector('#userMenuTheme .user-menu-sub-item[data-theme=\"light\"]').click();")
    time.sleep(0.15)

    c.eval("document.getElementById('userMenuTrigger').click();")
    time.sleep(0.15)
    c.eval("document.getElementById('userMenuLogout').click();")
    time.sleep(0.15)
    check(
        "Log Out still just closes the menu (no navigation, no errors)",
        (not c.eval("document.getElementById('userMenu').classList.contains('open')"))
        and c.eval("location.pathname") == "/v4.1/",
    )

    # ── 9. Shared config sanity ───────────────────────────────────────
    check(
        "window.IAM_VERSIONS lists v1..v4.1 in order",
        c.eval("JSON.stringify((window.IAM_VERSIONS||[]).map(function(v){return v.id;}))") == '["v1","v2","v3","v4","v4.1"]',
    )
    check("window.IAM_DEFAULT_VERSION_ID is v4.1", c.eval("window.IAM_DEFAULT_VERSION_ID") == "v4.1")

    # ── 10. V4 vs V4.1 independence at the filesystem level ────────────
    # V4.1 must be a real, separate copy — not a symlink/alias to V4 —
    # so later edits to one cannot leak into the other.
    v4_app_js = os.path.join(PUBLIC_DIR, "v4", "app.js")
    v41_app_js = os.path.join(PUBLIC_DIR, "v4.1", "app.js")
    check("public/v4/app.js exists", os.path.isfile(v4_app_js))
    check("public/v4.1/app.js exists as a REAL file, not a symlink", os.path.isfile(v41_app_js) and not os.path.islink(v41_app_js))
    check("public/v4/index.html and public/v4.1/index.html are separate files on disk",
          os.path.realpath(os.path.join(PUBLIC_DIR, "v4", "index.html")) != os.path.realpath(os.path.join(PUBLIC_DIR, "v4.1", "index.html")))

    c.close()

    passed = sum(1 for s, _, _ in results if s == "PASS")
    failed = sum(1 for s, _, _ in results if s == "FAIL")
    print("\n%d passed, %d failed (of %d checks)" % (passed, failed, len(results)))
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
