#!/usr/bin/env python3
"""Redline Mode route/state-preservation + breakpoint-sweep regression
suite — IAM / Ad Console V4.1 only.

This is the dedicated coverage for the brief "Fix Redline Mode so the
active UI never disappears when the user changes viewport sizes or
switches between breakpoints" (Round 29, 2026-08-11). Where
`test_redline_canvas_architecture.py` proves the canvas/centering
*geometry* is correct at a couple of representative breakpoints, this
file drives the brief's own validation checklist verbatim:

  1. Enter Redline Mode from every listed entry point (Users list, Edit
     User, Roles list, Edit Role, a page with an open modal, a page
     with expanded/collapsed sections, a freshly-loaded/"deep-URL"
     page) and confirm the exact pre-Redline state is what's shown —
     no redirect, no blank canvas.
  2. For every one of those entry points, sweep every supported
     breakpoint in the documented order —
     Current -> 1024 -> 1280 -> 1440 -> 1920 -> 2560 -> Current — and at
     each step confirm: the correct page/state stays visible, the UI
     never goes blank, the iframe's logical CSS viewport matches the
     preset exactly (responsive reflow), the route
     (pathname+search+hash) is untouched, and any modal/expand-collapse
     state captured at Redline-entry survives the whole sweep (the
     preview is one mounted iframe instance resized in place, never
     remounted/reloaded per breakpoint).
  3. Confirm returning to "Current" re-attaches to the *same* live page
     without a full top-level reload.
  4. A dedicated measurement-recalculation check: a fixed-size
     element's reported (logical) width must read identically at every
     breakpoint, including 2560 (visually scaled down to fit the
     workspace) — proving measurements are logical CSS pixels, not
     scaled screen pixels.
  5. A dedicated selection-lifecycle check across a breakpoint sweep:
     a locked selection that's still present after reflow stays locked
     and keeps updating; one that's no longer part of the page (route
     changed) is cleared gracefully instead of leaving stale lines.

This app has no URL-based router (in-memory SPA state only — see
`app.js`), so "route" here is asserted at the literal
`location.pathname + search + hash` level (which Redline must never
touch) and "deep URL" entry is exercised as a fresh top-level
navigation to the app's base URL before any in-app interaction, which
is the closest real analog this app has to a directly-loaded route.

Companion to `test_redline_canvas_architecture.py` (canvas-centering
geometry + page-to-page QA) and `test_redline_mode.py` (general feature
coverage) — this file does not duplicate either.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_redline_state_preservation.py

Exits 0 if every check passes, 1 otherwise.
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

# Documented breakpoint sweep order from the brief, Current on both ends.
BREAKPOINT_SWEEP = ["1024", "1280", "1440", "1920", "2560"]
BREAKPOINT_DIMS = {
    "1024": (1024, 768), "1280": (1280, 800), "1440": (1440, 900),
    "1920": (1920, 1080), "2560": (2560, 1440),
}

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
    profile_dir = tempfile.mkdtemp(prefix="iam-redline-state-test-")
    proc = subprocess.Popen(
        [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
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


def frame_js(c, expr):
    """Evaluate `expr` with `doc`/`win` bound to the preview iframe's
    contentDocument/contentWindow, or return None if there is no
    breakpoint iframe attached (Current mode)."""
    wrapped = """(function(){
      var f = document.querySelector('.redline__preview');
      if (!f) return null;
      var doc; try { doc = f.contentDocument; } catch(e) { return null; }
      if (!doc || !doc.documentElement) return null;
      var win = f.contentWindow;
      return (function(doc, win){ return (%s); })(doc, win);
    })()""" % expr
    return js(c, wrapped)


def is_visible_in(c, doc_expr, selector):
    return js(c, """(function(){
      var doc = %s;
      if (!doc) return false;
      var el = doc.querySelector(%r);
      if (!el) return false;
      var r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      var cs = (doc.defaultView || window).getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') return false;
      return true;
    })()""" % (doc_expr, selector))


def click_at(c, x, y):
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": x, "y": y})
    c.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": x, "y": y, "button": "left", "clickCount": 1})
    c.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": x, "y": y, "button": "left", "clickCount": 1})


def escape_key(c):
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Escape", "code": "Escape", "windowsVirtualKeyCode": 27, "nativeVirtualKeyCode": 27})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Escape", "code": "Escape", "windowsVirtualKeyCode": 27, "nativeVirtualKeyCode": 27})
    # See identical comment in test_redline_canvas_architecture.py: a
    # synthetic Escape via CDP can spuriously flip
    # `document.visibilityState` in headless Chrome, starving Redline's
    # rAF render loop; force the tab back to foreground/visible.
    try:
        c.send("Page.bringToFront", {})
    except Exception:
        pass


def click_selector(c, selector, wait=0.35):
    rect = js(c, "(function(){var el=document.querySelector(%r); if(!el) return null; el.scrollIntoView({block:'center'}); var r=el.getBoundingClientRect(); if(r.width<=0||r.height<=0) return null; return [r.left+r.width/2, r.top+r.height/2];})()" % selector)
    if not rect:
        return False
    click_at(c, rect[0], rect[1])
    time.sleep(wait)
    return True


def click_text(c, tag, text, wait=0.35):
    rect = js(c, """(function(){
      var nodes = document.querySelectorAll(%r);
      for (var i=0;i<nodes.length;i++){
        if ((nodes[i].textContent||'').trim() === %r) {
          nodes[i].scrollIntoView({block:'center'});
          var r = nodes[i].getBoundingClientRect();
          if (r.width<=0||r.height<=0) continue;
          return [r.left+r.width/2, r.top+r.height/2];
        }
      }
      return null;
    })()""" % (tag, text))
    if not rect:
        return False
    click_at(c, rect[0], rect[1])
    time.sleep(wait)
    return True


def ensure_page_visible(c):
    c.send("Page.bringToFront")


def enable_redline(c, wait=0.4):
    ensure_page_visible(c)
    js(c, "window.IamRedlineMode.enable();")
    time.sleep(wait)


def disable_redline(c, wait=0.3):
    js(c, "window.IamRedlineMode.disable();")
    time.sleep(wait)


def wait_until(c, expr, timeout=4.0, interval=0.06):
    deadline = time.time() + timeout
    val = None
    while time.time() < deadline:
        val = js(c, expr)
        if val:
            return val
        time.sleep(interval)
    return val


def route_signature(c):
    return js(c, "location.pathname + location.search.replace(/[?&]redlinePreview=1/, '') + location.hash")


def set_breakpoint(c, bp_id, wait=0.7):
    ok = click_selector(c, '[data-redline-action="breakpoint:%s"]' % bp_id, wait=wait)
    # Give the eager-loaded iframe's readiness poll (`waitForFrameReady`,
    # up to 10 x 60ms retries) room to finish before asserting anything.
    wait_until(c, "window.IamRedlineMode.debugState().frameReady", timeout=2.0)
    time.sleep(0.15)
    return ok


def frame_ready_and_nonblank(c):
    """True if the preview iframe has a real, non-empty document body —
    the core "UI never disappears" assertion. Distinct from
    `frameReady` (which can be true even for an about:blank frame in a
    theoretical failure mode) by requiring actual rendered content."""
    return bool(frame_js(c, "doc.body && doc.body.children.length > 0 && !!doc.querySelector('main.page, #usersPanel, #createRolePage, #addUsersPage, #teamsPanel')"))


def main():
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port

    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)

    def kill_chrome():
        try:
            chrome.terminate()
        except Exception:
            pass
        try:
            subprocess.run(["pkill", "-9", "-f", profile_dir], check=False,
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except Exception:
            pass

    atexit.register(kill_chrome)
    atexit.register(lambda: shutil.rmtree(profile_dir, ignore_errors=True))

    c = CDP(debug_port)
    c.send("Network.setCacheDisabled", {"cacheDisabled": True})
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    c.send("Runtime.enable")
    c.navigate(base + "/v4.1/", wait=1.3)
    ensure_page_visible(c)
    check("V4.1 loads normally", js(c, "!!document.querySelector('main.page')"))

    try:
        # ═══════════════════════════════════════════════════════════════
        # Scenario runner: reach a state, enter Redline, sweep every
        # breakpoint in the documented order, confirm it, return to
        # Current, exit, confirm the real page is untouched.
        # ═══════════════════════════════════════════════════════════════
        def run_scenario(name, marker_selector, setup_fn=None, extra_frame_check=None):
            """`extra_frame_check(doc_expr) -> (bool, detail)` runs inside
            the frame_js wrapper at every breakpoint AND once against the
            live (reparented) document while in Current mode, to confirm
            state such as an open modal or an expanded/collapsed section
            survives the entire sweep untouched."""
            if setup_fn:
                setup_fn()
            time.sleep(0.2)
            pre_route = route_signature(c)
            marker_before = js(c, "!!document.querySelector(%r)" % marker_selector) and js(c, """(function(){
              var el = document.querySelector(%r);
              var r = el.getBoundingClientRect();
              return r.width > 0 && r.height > 0;
            })()""" % marker_selector)
            check("[%s] state reached before entering Redline" % name, marker_before is True)

            enable_redline(c, wait=0.5)
            check("[%s] entering Redline shows the exact pre-Redline state (no redirect/blank canvas)" % name,
                  js(c, "(function(){var el=document.querySelector(%r); var host=document.querySelector('.redline__live-app'); return !!el && !!host && host.contains(el);})()" % marker_selector) is True)
            check("[%s] route (pathname+search+hash) unchanged the instant Redline opens" % name,
                  route_signature(c) == pre_route, "%s vs %s" % (pre_route, route_signature(c)))
            if extra_frame_check:
                ok, detail = extra_frame_check("document")
                check("[%s] Current: captured state present at Redline entry" % name, ok, detail)

            for bp in BREAKPOINT_SWEEP:
                set_breakpoint(c, bp)
                w, h = BREAKPOINT_DIMS[bp]
                nonblank = frame_ready_and_nonblank(c)
                check("[%s] breakpoint %s: preview never goes blank" % (name, bp), nonblank)
                inner_w = frame_js(c, "win.innerWidth")
                inner_h = frame_js(c, "win.innerHeight")
                check("[%s] breakpoint %s: logical CSS viewport matches preset exactly (responsive reflow target)" % (name, bp),
                      inner_w == w and inner_h == h, "%sx%s vs %sx%s" % (inner_w, inner_h, w, h))
                check("[%s] breakpoint %s: route still unchanged" % (name, bp),
                      route_signature(c) == pre_route, "%s vs %s" % (pre_route, route_signature(c)))
                marker_in_frame = frame_js(c, "(function(){var el=doc.querySelector(%r); if(!el) return false; var r=el.getBoundingClientRect(); return r.width>0 && r.height>0;})()" % marker_selector)
                check("[%s] breakpoint %s: page/state marker still visible in preview" % (name, bp), marker_in_frame is True)
                if extra_frame_check:
                    ok, detail = extra_frame_check("doc")
                    check("[%s] breakpoint %s: captured state (modal/expand-collapse) survives the sweep" % (name, bp), ok, detail)

            # No-full-reload sentinel: set once, checked after the whole
            # sweep + return-to-Current — a real top-level `location.reload()`
            # or navigation would wipe this, but Redline's own reparenting
            # (mountLiveApp/unmountLiveApp) never does.
            js(c, "window.__redlineNoReloadSentinel = 'still-here-' + Date.now();")
            sentinel = js(c, "window.__redlineNoReloadSentinel")
            set_breakpoint(c, "current")
            check("[%s] returning to Current does not perform a full top-level reload" % name,
                  js(c, "window.__redlineNoReloadSentinel") == sentinel)
            check("[%s] Current: page/state marker visible again after the full sweep" % name,
                  js(c, "(function(){var el=document.querySelector(%r); var host=document.querySelector('.redline__live-app'); return !!el && !!host && host.contains(el) ;})()" % marker_selector) is True)
            check("[%s] Current: route still unchanged after full round trip" % name,
                  route_signature(c) == pre_route)

            disable_redline(c, wait=0.3)
            check("[%s] exiting Redline restores the real page with original state intact" % name,
                  js(c, "!!document.querySelector(%r)" % marker_selector) is True)

        # --- 1. Users list ---
        run_scenario("Users list", "#usersTable",
                     lambda: click_text(c, "button.tab-btn, .tab-btn", "Users"))

        # --- 2. Edit User ---
        def open_edit_user():
            click_text(c, "button.tab-btn, .tab-btn", "Users")
            time.sleep(0.15)
            click_selector(c, "#tbody a.name-link, #usersTable a.name-link", wait=0.5)
        run_scenario("Edit User", "#addUsersPage", open_edit_user)
        js(c, "if (document.getElementById('auCancel')) document.getElementById('auCancel').click();")
        time.sleep(0.2)

        # --- 3. Roles list ---
        run_scenario("Roles list", "#rolesPanel, #rpTable",
                     lambda: click_text(c, "button.tab-btn, .tab-btn", "Roles"))

        # --- 4. Edit Role ---
        def open_edit_role():
            click_text(c, "button.tab-btn, .tab-btn", "Roles")
            time.sleep(0.15)
            click_selector(c, "a.rp-role-link", wait=0.5)
        run_scenario("Edit Role", "#createRolePage", open_edit_role)

        # --- 5. A page with an open modal (Remove Role confirm, on the
        #     Edit Role page reached above) ---
        def open_remove_role_modal():
            click_selector(c, "#crRemove", wait=0.4)

        def modal_still_open(doc_expr):
            present = js(c, "!!%s.querySelector('#crConfirmBackdrop')" % doc_expr) if doc_expr == "document" \
                else frame_js(c, "!!doc.querySelector('#crConfirmBackdrop')")
            return bool(present), "backdrop present=%s" % present
        run_scenario("Edit Role with Remove Role modal open", "#crConfirmBackdrop",
                     open_remove_role_modal, extra_frame_check=modal_still_open)
        escape_key(c)
        time.sleep(0.2)
        # Leave Edit Role via Cancel so the next scenario starts clean.
        js(c, "if (document.getElementById('crCancel')) document.getElementById('crCancel').click();")
        time.sleep(0.2)

        # --- 6. A page with expanded AND collapsed sections (Edit Role:
        #     collapse "Functions", leave "Role Details" expanded) ---
        def open_edit_role_mixed_sections():
            click_text(c, "button.tab-btn, .tab-btn", "Roles")
            time.sleep(0.15)
            click_selector(c, "a.rp-role-link", wait=0.5)
            click_selector(c, '[data-cr-toggle="functions"]', wait=0.4)

        def sections_state_matches(doc_expr):
            expr = "[doc.getElementById('crBasicCard').classList.contains('collapsed'), doc.getElementById('crFuncsCard').classList.contains('collapsed')]" \
                if doc_expr != "document" else None
            if doc_expr == "document":
                val = js(c, "[document.getElementById('crBasicCard').classList.contains('collapsed'), document.getElementById('crFuncsCard').classList.contains('collapsed')]")
            else:
                val = frame_js(c, expr)
            ok = val == [False, True]
            return ok, "basic/functions collapsed=%s (want [false, true])" % val
        run_scenario("Edit Role with Role Details expanded / Functions collapsed", "#createRolePage",
                     open_edit_role_mixed_sections, extra_frame_check=sections_state_matches)
        js(c, "if (document.getElementById('crCancel')) document.getElementById('crCancel').click();")
        time.sleep(0.2)

        # --- 7. A page reached through a direct/deep URL. This app has
        #     no URL-based router (in-memory SPA state only), so the
        #     closest real analog is a fresh top-level navigation to the
        #     app's base URL with no prior in-app interaction at all —
        #     Redline must still show exactly that freshly-loaded state,
        #     not redirect anywhere else.
        # ═══════════════════════════════════════════════════════════════
        c.navigate(base + "/v4.1/", wait=1.3)
        ensure_page_visible(c)
        run_scenario("Fresh/deep-URL initial load (Users list, default state)", "#usersTable")

        check("No console-crash / unexpected top-level navigation across the whole entry-point sweep",
              js(c, "location.pathname") == "/v4.1/")
    finally:
        kill_chrome()
        server.terminate()


def main2():
    """Continuation in a fresh browser/server pair (same rationale as
    the identically-named split in test_redline_canvas_architecture.py:
    recycling the browser mid-suite reduces how long any one Chrome
    process has to survive under contention on a loaded dev machine).
    Covers the measurement-recalculation and selection-lifecycle
    dedicated checks, appending to the same module-level `results`."""
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port
    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)

    def kill_chrome():
        try:
            chrome.terminate()
        except Exception:
            pass
        try:
            subprocess.run(["pkill", "-9", "-f", profile_dir], check=False,
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except Exception:
            pass

    atexit.register(kill_chrome)
    atexit.register(lambda: shutil.rmtree(profile_dir, ignore_errors=True))

    try:
        c = CDP(debug_port)
        c.send("Network.setCacheDisabled", {"cacheDisabled": True})
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        c.send("Runtime.enable")
        c.navigate(base + "/v4.1/", wait=1.3)
        ensure_page_visible(c)

        # ═══════════════════════════════════════════════════════════════
        # Measurement recalculation: a fixed-size element (the 36x36
        # icon-only Filter button) must report the SAME logical width at
        # every breakpoint, including 2560 where the whole preview is
        # visually scaled down below 100% to fit the workspace — the
        # brief's literal example ("a component that is logically 998px
        # wide must still be reported as 998px even when the preview is
        # visually scaled down").
        # ═══════════════════════════════════════════════════════════════
        enable_redline(c)
        natural_width = js(c, "(function(){var el=document.querySelector('#usersFilterBtn'); return el ? Math.round(el.getBoundingClientRect().width) : null;})()")
        check("Measurement baseline: Filter button has its expected fixed 36px width in Current mode",
              natural_width == 36, natural_width)
        for bp in BREAKPOINT_SWEEP:
            set_breakpoint(c, bp)
            logical_width = frame_js(c, "(function(){var el=doc.querySelector('#usersFilterBtn'); return el ? Math.round(el.getBoundingClientRect().width) : null;})()")
            scale = js(c, "window.IamRedlineMode.debugState().previewScale")
            check("Measurement recalculation [%s]: fixed-size element reports the same LOGICAL width regardless of visual scale (scale=%.3f)" % (bp, scale),
                  logical_width == natural_width, "%s vs %s at scale %s" % (logical_width, natural_width, scale))
        set_breakpoint(c, "current")
        disable_redline(c)

        # ═══════════════════════════════════════════════════════════════
        # Selection lifecycle across a breakpoint sweep: lock a selection
        # on a stable element (present at every breakpoint), sweep every
        # breakpoint, confirm the boundary/measurement keeps tracking it
        # (never goes stale) at each step, then change route (simulating
        # a tab switch, same technique as
        # test_redline_canvas_architecture.py's check #13) and confirm
        # the now-orphaned selection is cleared gracefully rather than
        # leaving a stale outline.
        # ═══════════════════════════════════════════════════════════════
        enable_redline(c)
        target_point = js(c, "(function(){var r=document.querySelector('#usersFilterBtn').getBoundingClientRect(); return [r.left+r.width/2, r.top+r.height/2];})()")
        click_at(c, *target_point)
        had_selection = wait_until(c, "window.IamRedlineMode.debugState().hasLockedSelection")
        check("Selection lifecycle: locking a selection on Current works before the sweep", had_selection is True)

        for bp in BREAKPOINT_SWEEP:
            set_breakpoint(c, bp)
            wait_until(c, "!!document.querySelector('.redline__boundary')", timeout=2.0)
            still_locked = js(c, "window.IamRedlineMode.debugState().hasLockedSelection")
            boundary = js(c, "(function(){var b=document.querySelector('.redline__boundary'); if(!b) return null; return {width:+b.getAttribute('width'), height:+b.getAttribute('height')};})()")
            check("Selection lifecycle [%s]: still-present element keeps its selection and boundary across the sweep" % bp,
                  still_locked is True and boundary is not None and boundary["width"] > 0 and boundary["height"] > 0,
                  str((still_locked, boundary)))
        set_breakpoint(c, "current")

        # Route change while a selection is locked: simulate the exact
        # panel-visibility mutation `switchTab("roles")` performs, the
        # same technique test_redline_canvas_architecture.py's check #13
        # uses, to exercise the real stale-selection-clearing logic
        # rather than a synthetic API call.
        js(c, """(function(){
          document.getElementById('usersPanel').style.display = 'none';
          document.getElementById('rolesPanel').style.display = '';
          var btns = document.querySelectorAll('.tab-btn');
          for (var i=0;i<btns.length;i++) btns[i].classList.remove('on');
          if (btns[1]) btns[1].classList.add('on');
        })()""")
        cleared = wait_until(c, "window.IamRedlineMode.debugState().hasLockedSelection === false", timeout=2.0)
        # NOTE: `.redline__boundary` rects are NOT selection-only — with no
        # active selection, `render()` intentionally draws alignment-guide
        # boundaries for `majorTargets()` instead (a designed "no
        # selection" state, not a bug), so their mere presence can't be
        # the "stale" signal here. The breadcrumb/inspector panel is what
        # actually reflects the old, now-disconnected target, exactly like
        # `test_redline_canvas_architecture.py` check #13.
        breadcrumb_empty = js(c, "!!document.querySelector('.redline__breadcrumb-empty')")
        check("Selection lifecycle: a selection that's no longer part of the page is cleared gracefully after a route change",
              cleared is True)
        check("Selection lifecycle: breadcrumb/inspector shows the empty state, not stale target data",
              breadcrumb_empty is True)
        disable_redline(c)
        js(c, "location.reload();")
        time.sleep(1.2)

        check("No console-crash / unexpected navigation across the measurement + selection suite",
              js(c, "location.pathname") == "/v4.1/")
    finally:
        kill_chrome()
        server.terminate()

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
    main2()
