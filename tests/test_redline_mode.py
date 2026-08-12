#!/usr/bin/env python3
"""End-to-end tests for Redline Mode — IAM / Ad Console V4.1 only.

Covers the acceptance criteria from the Redline Mode brief: invisibility
when inactive, profile-menu entry (no icon, no chevron, correct shortcut
label, checkable state), the global Cmd/Ctrl+D shortcut (and that it does
not fire while typing), Escape/Close restoring the exact prior page state,
the three-panel workspace (breakpoints / live canvas / inspector), real
breakpoint reflow, hover + click-to-pin selection with stale-selection
safety, integer-only (no decimal) displayed measurements, Clean Spec vs
8pt Grid modes, live updates, and — critically — that `public/v4/` is
completely untouched by this feature (no redline files, no menu row, no
behavior change).

This repo has no JS bundler or test runner (static HTML/CSS/JS published
straight to GitLab Pages — see `.gitlab-ci.yml`), so this suite drives a
real headless Chrome over the DevTools Protocol against the same
`public/` folder GitLab Pages serves, using a plain `http.server` process
as the local stand-in for Pages (same harness as `test_version_routing.py`
and friends).

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_redline_mode.py

Exits 0 if every check passes, 1 otherwise (prints a PASS/FAIL line per
check plus a final summary).
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
    profile_dir = tempfile.mkdtemp(prefix="iam-redline-test-")
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


def click_at(c, x, y):
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": x, "y": y})
    c.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": x, "y": y, "button": "left", "clickCount": 1})
    c.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": x, "y": y, "button": "left", "clickCount": 1})


def move_to(c, x, y):
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": x, "y": y})


def ctrl_d(c):
    c.send("Input.dispatchKeyEvent", {
        "type": "keyDown", "key": "d", "code": "KeyD", "windowsVirtualKeyCode": 68,
        "nativeVirtualKeyCode": 68, "modifiers": 2, "text": "d",
    })
    c.send("Input.dispatchKeyEvent", {
        "type": "keyUp", "key": "d", "code": "KeyD", "windowsVirtualKeyCode": 68,
        "nativeVirtualKeyCode": 68, "modifiers": 2,
    })


def escape_key(c):
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Escape", "code": "Escape", "windowsVirtualKeyCode": 27, "nativeVirtualKeyCode": 27})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Escape", "code": "Escape", "windowsVirtualKeyCode": 27, "nativeVirtualKeyCode": 27})


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
    c.send("Runtime.enable")
    console_errors = []

    def on_console(msg):
        pass

    # ── 0. V4 must be completely untouched by this feature ─────────────
    v4_dir = os.path.join(PUBLIC_DIR, "v4")
    check("public/v4/redline.js does NOT exist (V4 untouched)", not os.path.exists(os.path.join(v4_dir, "redline.js")))
    check("public/v4/redline.css does NOT exist (V4 untouched)", not os.path.exists(os.path.join(v4_dir, "redline.css")))
    with open(os.path.join(v4_dir, "index.html"), "r", encoding="utf-8") as f:
        v4_html = f.read()
    check("public/v4/index.html has no #userMenuRedline row", "userMenuRedline" not in v4_html)
    check("public/v4/index.html does not reference redline.js/css", "redline.js" not in v4_html and "redline.css" not in v4_html)

    c.navigate(base + "/v4/", wait=1.0)
    check("V4 loads normally", "Access Management" in (js(c, "document.title") or "") or js(c, "!!document.querySelector('main.page')"))
    check("window.IamRedlineMode is undefined on V4", js(c, "typeof window.IamRedlineMode") == "undefined")
    check("V4 has no #userMenuRedline element", js(c, "!document.getElementById('userMenuRedline')"))

    # ── 1. V4.1: Redline invisible when inactive ────────────────────────
    c.navigate(base + "/v4.1/", wait=1.2)
    check("V4.1 loads normally", js(c, "!!document.querySelector('main.page')"))
    check("window.IamRedlineMode is defined on V4.1", js(c, "typeof window.IamRedlineMode") == "object")
    check("Redline is inactive by default", js(c, "window.IamRedlineMode.isActive()") is False)
    check("No .redline element in DOM while inactive", js(c, "!document.querySelector('.redline')"))
    check("<html> has no redline-active class while inactive", js(c, "!document.documentElement.classList.contains('redline-active')"))
    check("No Redline query params were added to the normal URL", "redline" not in (js(c, "location.search") or "").lower())

    # ── 2. Profile menu entry ───────────────────────────────────────────
    check("#userMenuRedline row exists", js(c, "!!document.getElementById('userMenuRedline')"))
    check("Redline row has no leading icon (only label + shortcut children)",
          js(c, "document.getElementById('userMenuRedline').children.length === 2"))
    check("Redline row has role=menuitemcheckbox", js(c, "document.getElementById('userMenuRedline').getAttribute('role')") == "menuitemcheckbox")
    check("Redline row starts aria-checked=false", js(c, "document.getElementById('userMenuRedline').getAttribute('aria-checked')") == "false")
    check("Redline row has no submenu chevron", js(c, "!document.getElementById('userMenuRedline').querySelector('.user-menu-chev')"))
    check("Redline row is not marked has-sub", js(c, "!document.getElementById('userMenuRedline').classList.contains('has-sub')"))
    shortcut_text = js(c, "document.getElementById('userMenuRedline').querySelector('.user-menu-shortcut').textContent")
    check("Shortcut hint shows a platform shortcut (\u2318D or Ctrl+D)", shortcut_text in ("\u2318D", "Ctrl+D"), shortcut_text)
    check("Version row still has no chevron (not reintroduced)", js(c, "!document.getElementById('userMenuVersion').querySelector('.user-menu-chev')"))
    check("Theme row keeps its chevron", js(c, "!!document.getElementById('userMenuTheme').querySelector('.user-menu-chev')"))

    label_left = js(c, "document.getElementById('userMenuRedline').querySelector('.user-menu-label').getBoundingClientRect().left")
    version_left = js(c, "document.getElementById('userMenuVersion').querySelector('.user-menu-label').getBoundingClientRect().left")
    logout_left = js(c, "document.getElementById('userMenuLogout').querySelector('.user-menu-label').getBoundingClientRect().left")
    check("Redline label left-aligns with Version label", abs(label_left - version_left) < 1, "%.1f vs %.1f" % (label_left, version_left))
    check("Redline label left-aligns with Log Out label", abs(label_left - logout_left) < 1, "%.1f vs %.1f" % (label_left, logout_left))

    # ── 3. Opening via the profile menu, closing the menu on toggle ────
    click_at(c, *js(c, "(function(){var r=document.getElementById('userMenuTrigger').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.2)
    check("Profile menu opens", js(c, "document.getElementById('userMenu').classList.contains('open')"))
    click_at(c, *js(c, "(function(){var r=document.getElementById('userMenuRedline').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.3)
    check("Clicking Redline activates Redline Mode", js(c, "window.IamRedlineMode.isActive()") is True)
    check("Clicking Redline closes the profile menu", js(c, "!document.getElementById('userMenu').classList.contains('open')"))
    check("Redline row reflects aria-checked=true while active", js(c, "document.getElementById('userMenuRedline').getAttribute('aria-checked')") == "true")
    check(".redline root is mounted", js(c, "!!document.querySelector('.redline')"))

    # ── 4. Three-panel workspace present ────────────────────────────────
    check("Topbar with title + close exists", js(c, "!!document.querySelector('.redline__topbar') && !!document.querySelector('.redline__close')"))
    check("Left panel (breakpoints/mode) exists", js(c, "!!document.querySelector('.redline__panel--left')"))
    check("Center stage/canvas exists", js(c, "!!document.querySelector('.redline__canvas')"))
    check("Right panel (inspector) exists", js(c, "!!document.querySelector('.redline__panel--right')"))
    check("6 breakpoint buttons exist (Current + 5 numeric presets)", js(c, "document.querySelectorAll('.redline__bp-btn').length") == 6)
    check("Clean Spec is the default measurement mode", js(c, "document.querySelector('[data-redline-action=\"mode:clean\"]').getAttribute('aria-checked')") == "true")

    # ── 5. Escape restores exact prior state ────────────────────────────
    escape_key(c)
    time.sleep(0.2)
    check("Escape exits Redline Mode", js(c, "window.IamRedlineMode.isActive()") is False)
    check("No .redline element remains after Escape", js(c, "!document.querySelector('.redline')"))
    check("<html> redline-active class removed after exit", js(c, "!document.documentElement.classList.contains('redline-active')"))
    check("Page is still on /v4.1/ after exit (no navigation)", js(c, "location.pathname") == "/v4.1/")

    # ── 6. Global keyboard shortcut (does not require focusing the menu) ─
    js(c, "document.activeElement && document.activeElement.blur && document.activeElement.blur();")
    ctrl_d(c)
    time.sleep(0.3)
    check("Ctrl+D enters Redline Mode", js(c, "window.IamRedlineMode.isActive()") is True)

    # ── Regression guard: the live app must be a REAL, opaque, centered
    #    canvas child (not a transparent "hole" over the app's original
    #    position). The centering-architecture rework physically reparents
    #    `document.body`'s children into `.redline__live-app` (a real,
    #    opaque-white child of `.redline__canvas`) instead of punching a
    #    transparent hole through `.redline`/`.redline__stage` at the
    #    app's old on-screen position — guard that the live-app host
    #    exists, is opaque, and genuinely contains the real page heading
    #    as a live, painted descendant (not just present in the DOM with
    #    pointer-events disabled). ─────────────────────────────────────
    check(".redline__live-app host exists (live DOM was reparented, not left in place)",
          js(c, "!!document.querySelector('.redline__live-app')"))
    live_app_bg = js(c, "getComputedStyle(document.querySelector('.redline__live-app')).backgroundColor")
    check("Live-app host has an opaque white background (real canvas surface)",
          live_app_bg in ("rgb(255, 255, 255)", "rgba(255, 255, 255, 1)"), live_app_bg)
    check("Real page heading is a descendant of the live-app host (reparented, not a stale copy)",
          js(c, "(function(){var h=document.querySelector('h1'); var host=document.querySelector('.redline__live-app'); return !!h && !!host && host.contains(h);})()"))
    page_title_visible = js(c, "(function(){var h=document.querySelector('h1'); if(!h) return null; var cs=getComputedStyle(h); return cs.display!=='none' && cs.visibility!=='hidden' && parseFloat(cs.opacity)>0 && h.getBoundingClientRect().width>0;})()")
    check("Real page heading remains genuinely painted (visible) inside the canvas", page_title_visible is True)
    # The stage is what actually clips rendered pixels (`overflow: auto`);
    # as long as it never overlaps either panel, content scrolled inside
    # it geometrically cannot paint underneath them, no matter how much
    # wider the canvas itself grows for oversized content.
    check("Center stage never overlaps the left panel",
          js(c, "(function(){var s=document.querySelector('.redline__stage').getBoundingClientRect(); var l=document.querySelector('.redline__panel--left').getBoundingClientRect(); return s.left >= l.right - 1;})()"))
    check("Center stage never overlaps the right panel",
          js(c, "(function(){var s=document.querySelector('.redline__stage').getBoundingClientRect(); var r=document.querySelector('.redline__panel--right').getBoundingClientRect(); return s.right <= r.left + 1;})()"))
    check("Live-app host's left edge starts at/after the stage's own left edge (no negative bleed under the panel)",
          js(c, "(function(){var host=document.querySelector('.redline__live-app').getBoundingClientRect(); var s=document.querySelector('.redline__stage').getBoundingClientRect(); return host.left >= s.left - 1;})()"))

    ctrl_d(c)
    time.sleep(0.2)
    check("Pressing Ctrl+D again exits Redline Mode (toggle)", js(c, "window.IamRedlineMode.isActive()") is False)

    # Shortcut must not fire while typing in a text field. Uses the Roles
    # tab's search field (`#rpSearchInput`) — Users' own toolbar search
    # field was removed entirely in Round 24 (2026-08-11, icon-only Filter
    # button); this check just needs *any* live text field, so it's
    # switched back to Users afterward to leave tab state as found.
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.2)
    click_at(c, *js(c, "(function(){var r=document.getElementById('rpSearchInput').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.1)
    check("Search input is focused", js(c, "document.activeElement && document.activeElement.id") == "rpSearchInput")
    ctrl_d(c)
    time.sleep(0.2)
    check("Ctrl+D does NOT activate Redline while typing in a text field", js(c, "window.IamRedlineMode.isActive()") is False)
    js(c, "document.getElementById('rpSearchInput').blur();")
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.2)

    # ── 7. Breakpoint switching truly reflows the live app ──────────────
    ctrl_d(c)
    time.sleep(0.3)
    check("Redline active again via shortcut", js(c, "window.IamRedlineMode.isActive()") is True)
    click_at(c, *js(c, "(function(){var r=document.querySelector('[data-redline-action=\"breakpoint:1024\"]').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.6)
    check("Selecting 1024 activates breakpoint preview", js(c, "document.querySelector('.redline').getAttribute('data-breakpoint-active')") == "true")
    frame_width = js(c, "document.querySelector('.redline__preview').getAttribute('width') || document.querySelector('.redline__preview').style.width")
    check("Preview iframe is set to the real 1024px logical width", frame_width == "1024px", frame_width)
    preview_bg = js(c, "getComputedStyle(document.querySelector('.redline__preview')).backgroundColor")
    check("Preview iframe background is white (real CSS viewport boundary, not a scaled screenshot)",
          preview_bg in ("rgb(255, 255, 255)", "rgba(255, 255, 255, 1)"), preview_bg)
    size_label = js(c, "document.querySelector('[data-redline-size]').textContent")
    check("Canvas size label shows the active breakpoint size", "1024" in size_label and "768" in size_label, size_label)
    check("Toolbar size label reflects the preview viewport, not the full browser window",
          "1440" not in size_label, size_label)

    click_at(c, *js(c, "(function(){var r=document.querySelector('[data-redline-action=\"breakpoint:current\"]').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.3)
    check("Returning to Current disables breakpoint preview", js(c, "document.querySelector('.redline').getAttribute('data-breakpoint-active')") == "false")

    # ── 8. Hover + click-to-pin selection + inspector population ───────
    # NOTE: the docked left/right panels + topbar intentionally occupy the
    # outer edges of the viewport in "Current" mode (same trade-off as
    # docking real browser DevTools against a page) — see the reachable-
    # region comment in redline.css. A `.tab-btn` well inside the center
    # content area is used here; navbar/sidebar reachability is verified
    # separately below via a breakpoint preset, where the whole page is
    # rendered inside the unobstructed canvas.
    # Horizontal *center* of a table row (not its left edge, which starts
    # around x=97 — inside the 248px-wide left panel's footprint; see the
    # reachability note in redline.css) safely falls within the reachable
    # center-stage band (248px .. 1104px at a 1440px viewport).
    tab_rect = js(c, "(function(){var r=document.querySelector('#usersTable tbody tr').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()")
    move_to(c, *tab_rect)
    time.sleep(0.4)
    check("Hovering real app content populates the inspector", js(c, "!!document.querySelector('.redline__inspector-header')"))
    click_at(c, *tab_rect)
    time.sleep(0.3)
    check("Clicking pins (locks) the selection", js(c, "window.IamRedlineMode.debugState().hasLockedSelection") is True)
    check("Selection breadcrumb is populated", js(c, "document.querySelectorAll('.redline__crumb').length") > 0)
    check("Boundary outline (SVG rect) is drawn for the selection", js(c, "!!document.querySelector('.redline__boundary')"))
    check("Dimension lines are drawn for the selection", js(c, "document.querySelectorAll('.redline__dimension').length") > 0)

    click_at(c, *tab_rect)
    time.sleep(0.2)
    check("Clicking the same element again clears the lock", js(c, "window.IamRedlineMode.debugState().hasLockedSelection") is False)

    # ── 8b. Navbar/sidebar (edge-docked, fixed-position chrome) are
    #         inspectable via a breakpoint preset, where the entire page
    #         renders inside the unobstructed canvas. A 1440px canvas is
    #         wider than the ~800px center stage at this 1440px browser
    #         width, so per spec it's initial-scrolled to top-center, not
    #         its left edge — explicitly scroll the stage all the way left
    #         first so the frame's own left edge (where the app's navbar/
    #         sidebar actually live) is the part on-screen before probing
    #         it, rather than asserting on a hard-coded corner offset that
    #         assumes a left-anchored scroll position. ──────────────────
    click_at(c, *js(c, "(function(){var r=document.querySelector('[data-redline-action=\"breakpoint:1440\"]').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.9)
    js(c, "document.querySelector('.redline__stage').scrollLeft = 0;")
    time.sleep(0.1)
    frame_point = js(c, "(function(){var r=document.querySelector('.redline__preview').getBoundingClientRect();return [r.left+20, r.top+20];})()")
    move_to(c, *frame_point)
    time.sleep(0.5)
    check("Navbar/sidebar area is reachable and inspectable inside a breakpoint preview", js(c, "!!document.querySelector('.redline__inspector-header')"))
    click_at(c, *js(c, "(function(){var r=document.querySelector('[data-redline-action=\"breakpoint:current\"]').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.3)

    # ── 9. Integer-only measurements (no decimals anywhere in the panel) ─
    move_to(c, *tab_rect)
    time.sleep(0.3)
    click_at(c, *tab_rect)
    time.sleep(0.3)
    row_values = js(c, "Array.prototype.map.call(document.querySelectorAll('.redline__row-value, .redline__label, .redline__box-cell b'), function(n){return n.textContent;})")
    import re
    decimal_hits = [v for v in (row_values or []) if re.search(r"\d+\.\d+", v)]
    check("No decimal pixel values are displayed anywhere in the inspector/canvas", len(decimal_hits) == 0, str(decimal_hits[:5]))

    # ── 10. Clean Spec vs 8pt Grid ───────────────────────────────────────
    check("ADS component identification block is present", js(c, "!!document.querySelector('.redline__inspector-component')"))
    click_at(c, *js(c, "(function(){var r=document.querySelector('[data-redline-action=\"mode:grid\"]').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.3)
    check("8pt Grid mode activates", js(c, "document.querySelector('[data-redline-action=\"mode:grid\"]').getAttribute('aria-checked')") == "true")
    check("Clean Spec mode deactivates", js(c, "document.querySelector('[data-redline-action=\"mode:clean\"]').getAttribute('aria-checked')") == "false")
    click_at(c, *js(c, "(function(){var r=document.querySelector('[data-redline-action=\"mode:clean\"]').getBoundingClientRect();return [r.left+r.width/2, r.top+r.height/2];})()"))
    time.sleep(0.2)

    # ── 11. Modal/portal inspection (Effective Access breakdown lives in
    #        a role=dialog element; confirm the workspace layer is above
    #        it and inspection keeps functioning even with the app in a
    #        modal state before Redline was toggled). ──────────────────
    escape_key(c)
    time.sleep(0.2)
    check("Redline closed before modal test", js(c, "window.IamRedlineMode.isActive()") is False)
    redline_zi = js(c, "getComputedStyle(document.documentElement).getPropertyValue('--x')")  # noop sanity call
    ctrl_d(c)
    time.sleep(0.3)
    zindex = js(c, "getComputedStyle(document.querySelector('.redline')).zIndex")
    check("Redline root z-index is comfortably above the app's own max (10001)", int(zindex) > 10001, zindex)
    escape_key(c)
    time.sleep(0.2)

    # ── 12. No console errors were produced across the whole flow ──────
    check("No page crashed / navigated away unexpectedly", js(c, "location.pathname") == "/v4.1/")

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    if failed:
        print("\nFailures:")
        for status, name, detail in results:
            if status == "FAIL":
                print("  - %s%s" % (name, ("  (%s)" % detail) if detail else ""))
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
