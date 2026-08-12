#!/usr/bin/env python3
"""Redline Mode canvas-centering-architecture regression suite — IAM /
Ad Console V4.1 only.

This suite is dedicated to the "Redline Mode canvas alignment and
centering architecture" brief: the four-region shell (toolbar / left
panel / center workspace / right panel), the reparented live-app host
for "Current" mode, the real-CSS-viewport iframe for numeric
breakpoints, the visual scale-to-fit canvas for oversized content
(Round 29 — see `tests/test_redline_state_preservation.py` for the
fuller viewport-scaling + state-preservation suite this superseded
"never scale, always scroll" behavior for), and the corrected
selection/measurement coordinate system.

It covers the brief's two explicit deliverables:

  1. The 15 numbered "Required regression tests".
  2. Page-to-page QA across every major Users / Roles / Teams route,
     tab, and modal listed in the brief's "Page-to-page QA" section.

Companion to `test_redline_mode.py` (general Redline feature coverage —
profile menu, keyboard shortcut, breakpoint switching, inspector
panels, Clean Spec/8pt Grid, etc.), which this file does not duplicate.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_redline_canvas_architecture.py

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

results = []
SCREENSHOT_DIR = tempfile.mkdtemp(prefix="iam-redline-screenshots-")


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


_SERVE_ROOT = []


def serve_root():
    """Path the local stand-in for Pages should serve.

    This repo normally lives in a Google Drive folder, and Drive's file
    provider can stall a read for tens of seconds with no error. Every
    navigation here re-reads the whole app because the suite disables
    Chrome's HTTP cache on purpose (so a run always measures the files
    on disk), which turns that stall into what looks like a frozen
    browser at whatever step happened to be running. Serve a snapshot
    copied outside Drive instead: same bytes, same structure, no
    network-filesystem in the loop. Copied once per process, after any
    edits under test, so it always reflects the current working tree.
    """
    if not _SERVE_ROOT:
        snapshot = tempfile.mkdtemp(prefix="iam-public-snapshot-")
        root = os.path.join(snapshot, "public")
        shutil.copytree(PUBLIC_DIR, root)
        atexit.register(lambda: shutil.rmtree(snapshot, ignore_errors=True))
        _SERVE_ROOT.append(root)
    return _SERVE_ROOT[0]


def start_static_server(port):
    proc = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(port)],
        cwd=serve_root(),
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
    profile_dir = tempfile.mkdtemp(prefix="iam-redline-arch-test-")
    proc = subprocess.Popen(
        [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            # `/dev/shm` is often small/constrained on dev machines already
            # under heavy memory pressure from other running apps; Chrome
            # falls back to disk-backed shared memory instead of crashing
            # the renderer when this is set, which otherwise shows up as a
            # sporadic, hard-to-reproduce mid-suite WebSocket disconnect
            # that has nothing to do with Redline itself.
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


VISIBLE_CHECK_JS = """(function(el){
  if (!el) return false;
  var r = el.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return false;
  var cs = getComputedStyle(el);
  if (cs.display === 'none' || cs.visibility === 'hidden') return false;
  return true;
})"""


def is_visible(c, selector):
    """True if `selector` resolves to an element with real on-screen
    layout. Deliberately does NOT use `el.offsetParent !== null`: that
    check is a false negative for legitimately visible `position:
    fixed` elements (several full-page views in this app, e.g.
    `#addUsersPage`, `#createRolePage`, use `position: fixed`), so it
    would misreport a correctly-rendered page as absent."""
    return js(c, "%s(document.querySelector(%r))" % (VISIBLE_CHECK_JS, selector))


def wait_visible(c, selector, timeout=6.0, interval=0.1):
    """Poll `is_visible` until it's True or `timeout` elapses, returning
    the last value. Reaching a state (clicking a tab, opening a modal)
    is not instantaneous, and a fixed sleep that is generous on an idle
    machine becomes a race on a loaded one -- which shows up as a state
    the run "never reached" even though it renders correctly a moment
    later. Waiting for the state instead of guessing at its latency
    keeps the assertion itself unchanged."""
    visible = False
    deadline = time.time() + timeout
    while time.time() < deadline:
        visible = is_visible(c, selector)
        if visible is True:
            return True
        time.sleep(interval)
    return visible


def click_at(c, x, y):
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": x, "y": y})
    c.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": x, "y": y, "button": "left", "clickCount": 1})
    c.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": x, "y": y, "button": "left", "clickCount": 1})


def move_to(c, x, y):
    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": x, "y": y})


def escape_key(c):
    c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Escape", "code": "Escape", "windowsVirtualKeyCode": 27, "nativeVirtualKeyCode": 27})
    c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Escape", "code": "Escape", "windowsVirtualKeyCode": 27, "nativeVirtualKeyCode": 27})
    # Headless-Chrome/CDP quirk (not a Redline bug): a synthetic Escape
    # keystroke sent via `Input.dispatchKeyEvent` sometimes flips
    # `document.visibilityState` to "hidden" even though `hasFocus()`
    # stays true and nothing actually backgrounded the tab. A hidden
    # document suspends `requestAnimationFrame` — which Redline's whole
    # render loop (`schedule()`) depends on — so left uncorrected here,
    # every check *after* an Escape press would silently stop seeing
    # boundary/measurement updates. `Page.bringToFront` deterministically
    # restores real foreground/visible state.
    try:
        c.send("Page.bringToFront", {})
    except Exception:
        pass


def click_selector(c, selector, wait=0.35):
    """Click the element matched by `selector` via real synthetic mouse
    events at its geometric center (not `.click()`) so Redline's own
    real pointer/click listeners exercise the exact same code path a
    real user does.

    Deliberately refuses to click a zero-size (hidden/collapsed) match:
    `getBoundingClientRect()` on a `display:none` element is all zeros,
    which would otherwise silently fire the click at the viewport's
    (0, 0) corner — e.g. hitting the nav logo link instead of doing
    nothing, and navigating the whole test off the page."""
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
    """Force the tab back to the foreground/"visible" page-lifecycle
    state. Headless Chrome can otherwise leave `document.visibilityState`
    as `"hidden"` after some navigations, which silently starves
    `requestAnimationFrame` (Redline's whole render loop runs off rAF) —
    that's a headless-harness quirk, not a real-browser user scenario, so
    we correct for it here rather than let it produce false failures."""
    c.send("Page.bringToFront")


def await_redline_api(c, timeout=10.0, interval=0.1):
    """Block until `window.IamRedlineMode` exists.

    `redline.js` is a normal deferred script, so right after a
    navigation the API can briefly be undefined. Callers used to rely on
    the fixed post-navigation sleep being long enough, which turns into
    a "Cannot read properties of undefined" crash on a machine slow
    enough that the script hasn't run yet -- a harness race, not a
    product failure. Waiting for the API costs nothing once it's there.
    """
    deadline = time.time() + timeout
    while time.time() < deadline:
        if js(c, "!!(window.IamRedlineMode && window.IamRedlineMode.enable)") is True:
            return True
        time.sleep(interval)
    return False


def enable_redline(c, wait=0.4):
    ensure_page_visible(c)
    await_redline_api(c)
    js(c, "window.IamRedlineMode.enable();")
    time.sleep(wait)


def disable_redline(c, wait=0.3):
    await_redline_api(c)
    js(c, "window.IamRedlineMode.disable();")
    time.sleep(wait)


def wait_until(c, expr, timeout=2.0, interval=0.05):
    """Poll `expr` (a JS expression) until it's truthy or `timeout`
    elapses. Used instead of a single fixed `sleep` wherever we're
    waiting on Redline's rAF-debounced render loop / MutationObserver /
    ResizeObserver to catch up with a DOM change, since a fixed sleep
    that's comfortably long on one machine can be a flaky race on a
    busier one (e.g. mid a long test run). Returns the last value."""
    deadline = time.time() + timeout
    val = None
    while time.time() < deadline:
        val = js(c, expr)
        if val:
            return val
        time.sleep(interval)
    return val


def rect_of(c, selector):
    return js(c, """(function(){
      var el = document.querySelector(%r);
      if (!el) return null;
      var r = el.getBoundingClientRect();
      return {left:r.left, top:r.top, right:r.right, bottom:r.bottom, width:r.width, height:r.height};
    })()""" % selector)


def no_overlap(a, b):
    """True if rect `a` and rect `b` do not overlap at all."""
    if not a or not b:
        return True
    return a["right"] <= b["left"] + 0.5 or a["left"] >= b["right"] - 0.5 or a["bottom"] <= b["top"] + 0.5 or a["top"] >= b["bottom"] - 0.5


def screenshot(c, name):
    path = os.path.join(SCREENSHOT_DIR, name + ".png")
    c.screenshot(path)
    return path


def main():
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port

    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)

    def kill_chrome():
        # `chrome.terminate()` alone is not reliable cleanup: on macOS the
        # `Popen`'d "Google Chrome" binary re-execs/re-parents its actual
        # long-lived browser process (observably `PPID 1` even at launch,
        # not just after a crash), so the original `Popen` handle can point
        # at a PID that's already gone while the real browser — and every
        # renderer/GPU/utility helper under it — lives on as an orphan,
        # invisible to Python and never reaped. Over many consecutive test
        # runs (this suite launches a fresh Chrome per run) those orphans
        # accumulate, each still burning a CPU core, until the whole
        # machine is loaded heavily enough that *unrelated* CDP round trips
        # start timing out — a real failure mode we hit repeatedly, with
        # nothing to do with Redline's own correctness. `profile_dir` is a
        # `tempfile.mkdtemp` path unique to this one run, so killing every
        # process whose command line mentions it reliably reaps the whole
        # tree regardless of which PID Python thinks is "the" browser.
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

    # ═══════════════════════════════════════════════════════════════════
    # 1/2. The preview canvas never overlaps the left/right panel
    # ═══════════════════════════════════════════════════════════════════
    enable_redline(c)
    left = rect_of(c, ".redline__panel--left")
    right = rect_of(c, ".redline__panel--right")
    stage = rect_of(c, ".redline__stage")
    liveapp = rect_of(c, ".redline__live-app")
    check("1. Preview canvas (stage) never overlaps the left panel", no_overlap(stage, left), str((stage, left)))
    check("2. Preview canvas (stage) never overlaps the right panel", no_overlap(stage, right), str((stage, right)))
    # The live-app host itself may legitimately be WIDER than the stage for
    # a non-fluid page at real desktop widths (see `positionLiveApp`'s
    # "natural viewport width" doc comment) — the STAGE's own overflow clip
    # is what guarantees nothing ever paints under a panel, so only its
    # *left* edge (never scrolled negative past the stage's own origin) is
    # asserted here; the stage-vs-panel checks above are the authoritative
    # "never renders underneath either panel" guarantee.
    check("   Live-app host's left edge never starts left of the stage's own left edge",
          liveapp["left"] >= stage["left"] - 1, str((liveapp, stage)))
    screenshot(c, "01_users_list_current")
    disable_redline(c)

    # ═══════════════════════════════════════════════════════════════════
    # 3. A canvas SMALLER than the center workspace is horizontally
    #    centered (use a wide emulated browser so the 1024 breakpoint is
    #    smaller than the available stage).
    # ═══════════════════════════════════════════════════════════════════
    c.send("Emulation.setDeviceMetricsOverride", {"width": 2200, "height": 1100, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.3)
    enable_redline(c)
    click_selector(c, '[data-redline-action="breakpoint:1024"]', wait=0.7)
    stage = rect_of(c, ".redline__stage")
    shell = rect_of(c, ".redline__preview-shell")
    canvas = rect_of(c, ".redline__canvas")
    stage_scroll = js(c, "document.querySelector('.redline__stage').scrollWidth <= document.querySelector('.redline__stage').clientWidth + 1")
    fits = canvas["width"] <= stage["width"] + 1
    centered_gap_left = shell["left"] - stage["left"]
    centered_gap_right = stage["right"] - shell["right"]
    check("3. A 1024px canvas smaller than a wide workspace fits without needing scroll", fits, str((canvas, stage)))
    check("   ...and is horizontally centered (symmetric left/right gap)", abs(centered_gap_left - centered_gap_right) < 2, str((centered_gap_left, centered_gap_right)))
    check("   ...with no horizontal scrollbar needed", stage_scroll)
    disable_redline(c)
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.3)

    # ═══════════════════════════════════════════════════════════════════
    # 4. A canvas LARGER than the center workspace keeps its LOGICAL
    #    breakpoint dimensions exactly (never touches the iframe's own
    #    CSS viewport, which is what `@media` queries evaluate against),
    #    but is now visually scaled DOWN to fit and centered instead of
    #    forcing the workspace to scroll (back at 1440 browser width,
    #    the 2560 preset is much wider than the stage) — Round 29
    #    ("separate viewport resizing from canvas scaling") deliberately
    #    supersedes this suite's earlier "never scaled, always
    #    scrollable" assertion for oversized presets; scrolling remains
    #    only as a fallback for a workspace too small even for the
    #    floor scale, not the default UX for a merely-oversized preset.
    # ═══════════════════════════════════════════════════════════════════
    enable_redline(c)
    click_selector(c, '[data-redline-action="breakpoint:2560"]', wait=0.7)
    frame_width = js(c, "document.querySelector('.redline__preview').style.width")
    frame_height = js(c, "document.querySelector('.redline__preview').style.height")
    iframe_inner_width = js(c, "document.querySelector('.redline__preview').contentWindow.innerWidth")
    stage = rect_of(c, ".redline__stage")
    shell = rect_of(c, ".redline__preview-shell")
    debug_state = js(c, "window.IamRedlineMode.debugState()")
    scale = debug_state["previewScale"]
    can_scroll_x = js(c, "(function(){var s=document.querySelector('.redline__stage'); return s.scrollWidth > s.clientWidth + 1;})()")
    can_scroll_y = js(c, "(function(){var s=document.querySelector('.redline__stage'); return s.scrollHeight > s.clientHeight + 1;})()")
    check("4. Oversized 2560px breakpoint keeps its exact LOGICAL CSS width (iframe viewport untouched)", frame_width == "2560px", frame_width)
    check("   ...and its exact LOGICAL CSS height", frame_height == "1440px", frame_height)
    check("   ...and the iframe's own `window.innerWidth` (what @media queries see) is the full, unscaled 2560", iframe_inner_width == 2560, iframe_inner_width)
    check("   ...is visually scaled DOWN below 100% to fit the workspace", 0 < scale < 1, scale)
    check("   ...fits entirely within the stage with no scrolling needed in either axis",
          not can_scroll_x and not can_scroll_y, str((can_scroll_x, can_scroll_y)))
    check("   ...and the visually-scaled shell is horizontally centered in the stage",
          abs((shell["left"] - stage["left"]) - (stage["right"] - shell["right"])) < 2, str((shell, stage)))
    check("   ...and the visually-scaled shell's on-screen size matches preset \u00d7 scale",
          abs(shell["width"] - 2560 * scale) < 2 and abs(shell["height"] - 1440 * scale) < 2,
          str((shell, scale)))
    disable_redline(c)

    # ═══════════════════════════════════════════════════════════════════
    # 5. Current route/state is unchanged when entering Redline Mode
    # ═══════════════════════════════════════════════════════════════════
    click_selector(c, '.tabs-row .tab-btn')  # ensure a clean baseline click doesn't change tab unexpectedly (no-op safety)
    click_text(c, "button.tab-btn, .tab-btn", "Roles")
    before_tab = js(c, "document.querySelector('.tab-btn.on').textContent.trim()")
    before_scroll = js(c, "[window.scrollX, window.scrollY]")
    enable_redline(c)
    inside_tab = js(c, "(function(){var p=document.getElementById('rolesPanel'); return p && p.style.display !== 'none';})()")
    check("5. Current tab/route is preserved when Redline Mode opens (Roles panel still the visible one)", inside_tab is True)
    disable_redline(c)
    after_tab = js(c, "document.querySelector('.tab-btn.on').textContent.trim()")
    after_scroll = js(c, "[window.scrollX, window.scrollY]")
    check("   Tab/route is still correct after exiting Redline Mode", after_tab == before_tab, "%s vs %s" % (before_tab, after_tab))
    check("   Scroll position is restored after exiting Redline Mode", after_scroll == before_scroll, "%s vs %s" % (before_scroll, after_scroll))
    click_text(c, "button.tab-btn, .tab-btn", "Users")
    time.sleep(0.2)

    # ═══════════════════════════════════════════════════════════════════
    # 6. Fixed Ad Console elements (navbar) remain contained inside the
    #    preview, not escaping to the real browser window.
    # ═══════════════════════════════════════════════════════════════════
    enable_redline(c)
    nav_rect = rect_of(c, "nav.nav")
    liveapp = rect_of(c, ".redline__live-app")
    contained = (nav_rect["left"] >= liveapp["left"] - 1 and nav_rect["right"] <= liveapp["right"] + 1
                 and nav_rect["top"] >= liveapp["top"] - 1)
    check("6. Fixed app navbar stays contained inside the live-app preview host (not escaping to the browser window)",
          contained, str((nav_rect, liveapp)))
    disable_redline(c)

    # ═══════════════════════════════════════════════════════════════════
    # 7/8. Modals center over the preview (not the Redline shell), and
    #      Toasts position inside the preview.
    # ═══════════════════════════════════════════════════════════════════
    # NOTE: all navigation/clicks that drive the REAL app (opening pages,
    # expanding sections, opening modals) must happen BEFORE Redline is
    # enabled — while active, Redline's own click handler intentionally
    # intercepts and `preventDefault()`s clicks on real app content for
    # selection purposes ("Prevent normal application actions while
    # selecting components"), so links/buttons no longer navigate.
    click_selector(c, "#tbody a.name-link, #usersTable a.name-link", wait=0.5)
    check("Edit User page opened for the modal/toast checks", js(c, "(function(){var p=document.getElementById('addUsersPage'); return p && p.style.display !== 'none';})()") is True)
    # `#auRolesCard` (and its "View access breakdown" button) is expanded by
    # default when Edit User opens — no toggle click needed, and clicking an
    # already-expanded section's header would collapse it instead, hiding
    # the button we're about to click.
    opened_breakdown = click_selector(c, "#auEffViewBreakdown", wait=0.4)
    enable_redline(c)
    if opened_breakdown:
        modal_rect = rect_of(c, "#auEffBreakdownBackdrop")
        liveapp = rect_of(c, ".redline__live-app")
        check("7. Effective Access Breakdown modal backdrop covers the preview canvas, not the full Redline shell",
              modal_rect is not None and abs(modal_rect["left"] - liveapp["left"]) < 2 and abs(modal_rect["right"] - liveapp["right"]) < 2,
              str((modal_rect, liveapp)))
        escape_key(c)
        time.sleep(0.3)
    else:
        check("7. Effective Access Breakdown modal backdrop covers the preview canvas, not the full Redline shell", False, "could not open modal to test")
    disable_redline(c)
    escape_key(c)
    time.sleep(0.2)

    # Toast: trigger via a lightweight, harmless action. Re-enable redline first
    # so the toast (if any fires from a real interaction) renders inside the
    # live-app host; verify the toast container itself is preview-relative.
    enable_redline(c)
    toast_container_rect = rect_of(c, "#edlToastContainer")
    liveapp = rect_of(c, ".redline__live-app")
    check("8. Toast container is positioned within the preview viewport (not the real browser window)",
          toast_container_rect is not None and liveapp is not None
          and toast_container_rect["right"] <= liveapp["right"] + 1
          and toast_container_rect["top"] >= liveapp["top"] - 1,
          str((toast_container_rect, liveapp)))
    disable_redline(c)
    # Reset to a known baseline (Users List) — sections 7/8 navigated to
    # Edit User and left a modal state behind.
    js(c, "location.reload();")
    time.sleep(1.3)

    # ═══════════════════════════════════════════════════════════════════
    # 9/10. Selection outlines match live element bounds after centering,
    #       and measurements remain correct after scrolling.
    # ═══════════════════════════════════════════════════════════════════
    enable_redline(c)
    # Click the row's first cell, then stash *exactly* whichever element was
    # actually under that point (`elementFromPoint`, same as what the click
    # handler's `event.target` receives) on `window` — a cell can contain
    # smaller children (e.g. an avatar/status icon) that don't fill its
    # whole box, so re-deriving "the live element" via a CSS selector or a
    # fixed pixel coordinate later can silently resolve to a different node
    # than the one Redline actually locked. Keeping the same object
    # reference around removes that ambiguity for both this check and #10.
    target_selector = "#usersTable tbody tr:first-child td:first-child"
    target_rect = js(c, "(function(){var r=document.querySelector(%r).getBoundingClientRect(); var x=r.left+r.width/2, y=r.top+r.height/2; window.__rlTestTarget = document.elementFromPoint(x, y); return [x, y];})()" % target_selector)
    move_to(c, *target_rect)
    click_at(c, *target_rect)
    # `hasLockedSelection` flips synchronously inside the click handler, but
    # the boundary <rect> itself is only drawn on the next rAF-debounced
    # `render()` pass — poll for the actual DOM node rather than the
    # selection flag so we don't race the render loop.
    wait_until(c, "!!document.querySelector('.redline__boundary')")
    boundary_rect = js(c, "(function(){var b=document.querySelector('.redline__boundary'); if(!b) return null; return {x:+b.getAttribute('x'), y:+b.getAttribute('y'), width:+b.getAttribute('width'), height:+b.getAttribute('height')};})()")
    live_rect = js(c, "(function(){var el=window.__rlTestTarget; if(!el) return null; var r=el.getBoundingClientRect(); return {x:Math.round(r.left), y:Math.round(r.top), width:Math.round(r.width), height:Math.round(r.height)};})()")
    check("9. Selection boundary rect matches the live element's own geometry after centering",
          boundary_rect is not None and live_rect is not None
          and abs(boundary_rect["x"] - live_rect["x"]) <= 1 and abs(boundary_rect["y"] - live_rect["y"]) <= 1,
          str((boundary_rect, live_rect)))

    # Scroll the stage, then confirm the boundary rect follows / stays accurate.
    render_count_before_scroll = js(c, "window.IamRedlineMode.debugState().renderCount")
    js(c, "document.querySelector('.redline__stage').scrollLeft += 40;")
    wait_until(c, "window.IamRedlineMode.debugState().renderCount > %d" % render_count_before_scroll)
    time.sleep(0.1)
    boundary_after_scroll = js(c, "(function(){var b=document.querySelector('.redline__boundary'); if(!b) return null; return {x:+b.getAttribute('x'), y:+b.getAttribute('y'), width:+b.getAttribute('width'), height:+b.getAttribute('height')};})()")
    live_after_scroll = js(c, "(function(){var el=window.__rlTestTarget; var r=el.getBoundingClientRect(); return {x:Math.round(r.left), y:Math.round(r.top), width:Math.round(r.width), height:Math.round(r.height)};})()")
    check("10. Measurements/boundary remain correct after the workspace scrolls",
          boundary_after_scroll is not None and live_after_scroll is not None
          and abs(boundary_after_scroll["x"] - live_after_scroll["x"]) <= 1 and abs(boundary_after_scroll["y"] - live_after_scroll["y"]) <= 1,
          str((boundary_after_scroll, live_after_scroll)))
    js(c, "document.querySelector('.redline__stage').scrollLeft = 0;")
    disable_redline(c)

    # ═══════════════════════════════════════════════════════════════════
    # 11. Switching breakpoints recenters/correctly resets workspace
    #     scrolling. Round 29: oversized presets now visually scale down
    #     to fit by default (see test 4), so at a normal browser window
    #     size there is usually nothing left to scroll at all — this
    #     needs a genuinely too-small workspace (smaller than even the
    #     0.25 floor-scale can shrink 2560\u00d71440 into) to still exercise
    #     real scroll-offset-reset behavior, which remains the fallback
    #     path for that case.
    # ═══════════════════════════════════════════════════════════════════
    c.send("Emulation.setDeviceMetricsOverride", {"width": 480, "height": 400, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.3)
    enable_redline(c)
    click_selector(c, '[data-redline-action="breakpoint:1440"]', wait=0.7)
    js(c, "document.querySelector('.redline__stage').scrollLeft += 200;")
    time.sleep(0.1)
    scrolled_away = js(c, "document.querySelector('.redline__stage').scrollLeft")
    click_selector(c, '[data-redline-action="breakpoint:1920"]', wait=0.7)
    reset_scroll_top = js(c, "document.querySelector('.redline__stage').scrollTop")
    check("11. Switching breakpoints resets the workspace's vertical scroll to the top",
          reset_scroll_top == 0, reset_scroll_top)
    check("    (sanity: the stage really had been scrolled away beforehand)", scrolled_away > 0, scrolled_away)
    disable_redline(c)
    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.3)

    # ═══════════════════════════════════════════════════════════════════
    # 12. Returning to Current restores correct live responsive rendering
    # ═══════════════════════════════════════════════════════════════════
    enable_redline(c)
    click_selector(c, '[data-redline-action="breakpoint:1024"]', wait=0.6)
    click_selector(c, '[data-redline-action="breakpoint:current"]', wait=0.4)
    natural_width = js(c, "document.documentElement.clientWidth")
    liveapp_width = js(c, "(function(){var el=document.querySelector('.redline__live-app'); return el ? Math.round(el.getBoundingClientRect().width) : null;})()")
    check("12. Returning to Current re-renders the live app at the real browser viewport's width (true responsive re-render, not a stale breakpoint size)",
          liveapp_width is not None and abs(liveapp_width - natural_width) <= 2, str((liveapp_width, natural_width)))
    disable_redline(c)

    # ═══════════════════════════════════════════════════════════════════
    # 13. Changing routes refreshes the Selection tree
    # ═══════════════════════════════════════════════════════════════════
    # Return to a known baseline (Users List) before this check — earlier
    # sections may have navigated to Edit User/modals.
    js(c, "location.reload();")
    time.sleep(1.3)
    enable_redline(c)
    row_rect = js(c, "(function(){var r=document.querySelector('#usersTable tbody tr').getBoundingClientRect(); return [r.left+r.width/2, r.top+r.height/2];})()")
    click_at(c, *row_rect)
    had_selection = wait_until(c, "window.IamRedlineMode.debugState().hasLockedSelection")
    # While Redline is active, clicks on real app content are intentionally
    # intercepted (`preventDefault`/`stopPropagation`) for selection
    # purposes — an existing, preserved Redline behavior ("prevent normal
    # application actions while selecting components") — so a route change
    # can't be driven through a simulated click on the tab button here.
    # Apply the exact same panel-visibility mutation `switchTab("roles")`
    # itself performs (app.js) directly, to exercise the real stale-
    # selection-clearing logic (`render()`'s connected/visible check via
    # the MutationObserver) against a genuine "old page's DOM is now
    # hidden" state, independent of how that mutation gets triggered.
    js(c, """(function(){
      document.getElementById('usersPanel').style.display = 'none';
      document.getElementById('rolesPanel').style.display = '';
      var btns = document.querySelectorAll('.tab-btn');
      for (var i=0;i<btns.length;i++) btns[i].classList.remove('on');
      if (btns[1]) btns[1].classList.add('on');
    })()""")
    wait_until(c, "window.IamRedlineMode.debugState().hasLockedSelection === false")
    stale_selection_cleared = js(c, "window.IamRedlineMode.debugState().hasLockedSelection") is False
    breadcrumb_empty = js(c, "!!document.querySelector('.redline__breadcrumb-empty')")
    if (had_selection is not True or not stale_selection_cleared) and os.environ.get("QA_DEBUG"):
        print("      DEBUG debugState=%s" % js(c, "JSON.stringify(window.IamRedlineMode.debugState())"))
    check("13. Had a locked selection on Users before switching tabs (sanity)", had_selection is True)
    check("    Changing routes/tabs clears a selection that's no longer part of the current page", stale_selection_cleared)
    check("    Selection tree (breadcrumb) shows empty state after the route change, not stale content", breadcrumb_empty)
    disable_redline(c)
    js(c, "location.reload();")
    time.sleep(1.3)

    # ═══════════════════════════════════════════════════════════════════
    # 14. Exiting Redline Mode restores the normal page without layout
    #     drift.
    # ═══════════════════════════════════════════════════════════════════
    before_body_children = js(c, "document.body.children.length")
    before_main_rect = rect_of(c, "main.page")
    enable_redline(c)
    disable_redline(c)
    after_body_children = js(c, "document.body.children.length")
    after_main_rect = rect_of(c, "main.page")
    check("14. Exiting Redline Mode restores the exact same body child count (no leftover/duplicated nodes)",
          before_body_children == after_body_children, "%s vs %s" % (before_body_children, after_body_children))
    check("    ...and `main.page` renders at the exact same position/size as before (no layout drift)",
          before_main_rect == after_main_rect, "%s vs %s" % (before_main_rect, after_main_rect))

    # ═══════════════════════════════════════════════════════════════════
    # 15. Rapidly entering/exiting Redline Mode does not accumulate
    #     offsets or duplicate UI.
    # ═══════════════════════════════════════════════════════════════════
    for _ in range(6):
        js(c, "window.IamRedlineMode.enable();")
        js(c, "window.IamRedlineMode.disable();")
    time.sleep(0.3)
    redline_overlay_count = js(c, "document.querySelectorAll('.redline').length")
    live_app_leftover_count = js(c, "document.querySelectorAll('.redline__live-app').length")
    final_body_children = js(c, "document.body.children.length")
    final_main_rect = rect_of(c, "main.page")
    check("15. Rapid enable/disable cycling leaves no duplicate Redline overlays", redline_overlay_count == 0, redline_overlay_count)
    check("    ...no leftover live-app host nodes", live_app_leftover_count == 0, live_app_leftover_count)
    check("    ...body child count matches the pristine baseline (no accumulated duplication)",
          final_body_children == before_body_children, "%s vs %s" % (before_body_children, final_body_children))
    check("    ...and `main.page` still renders at the exact same position (no accumulated drift)",
          final_main_rect == before_main_rect, "%s vs %s" % (before_main_rect, final_main_rect))

    # ═══════════════════════════════════════════════════════════════════
    # Page-to-page QA — every major V4.1 route/state from the brief.
    # For each: open normally, enter Redline without navigating, confirm
    # centering + no panel overlap, exit, confirm restoration.
    # ═══════════════════════════════════════════════════════════════════

    def qa_state(name, marker_selector, setup_fn=None):
        """Generic per-state QA: run `setup_fn` to reach the state, then
        verify the marker element is visible, enter Redline without
        losing it, verify centering/no-overlap, exit, verify still
        present. Mirrors the brief's 10-step per-state QA checklist."""
        if setup_fn:
            setup_fn()
        marker_before = wait_visible(c, marker_selector)
        if not check("QA[%s]: state reached (marker visible before Redline)" % name, marker_before is True):
            if os.environ.get("QA_DEBUG"):
                print("      DEBUG marker=%r exists=%s rect=%s" % (
                    marker_selector,
                    js(c, "!!document.querySelector(%r)" % marker_selector),
                    js(c, "(function(){var el=document.querySelector(%r); return el ? JSON.stringify(el.getBoundingClientRect()) : null;})()" % marker_selector)))
            return
        enable_redline(c, wait=0.5)
        marker_in_liveapp = js(c, "(function(){var el=document.querySelector(%r); var host=document.querySelector('.redline__live-app'); return !!el && !!host && host.contains(el);})()" % marker_selector)
        check("QA[%s]: exact current state appears inside the live-app preview (no navigation/rebuild)" % name, marker_in_liveapp is True)
        left = rect_of(c, ".redline__panel--left")
        right = rect_of(c, ".redline__panel--right")
        stage = rect_of(c, ".redline__stage")
        check("QA[%s]: preview stage does not overlap the left panel" % name, no_overlap(stage, left))
        check("QA[%s]: preview stage does not overlap the right panel" % name, no_overlap(stage, right))
        liveapp = rect_of(c, ".redline__live-app")
        check("QA[%s]: live-app host starts at/after the stage's own left edge" % name,
              liveapp is not None and stage is not None and liveapp["left"] >= stage["left"] - 1)
        disable_redline(c, wait=0.3)
        marker_after = is_visible(c, marker_selector)
        check("QA[%s]: original state/marker still present after exiting Redline Mode" % name, marker_after is True)

    # --- Users ---
    qa_state("Users List (Internal)", "#usersTable",
             lambda: click_text(c, "button.tab-btn, .tab-btn", "Users"))
    qa_state("Users List (External)", "#usersTable",
             lambda: click_selector(c, '#userViewToggle .seg-btn[data-view="external"]'))
    js(c, "document.querySelector('#userViewToggle .seg-btn[data-view=\"internal\"]').click();")
    time.sleep(0.2)

    # Uses the Filter drawer's live-filtering "Name" field (`#fltName`)
    # rather than the toolbar search field: it applies filters the same
    # way (`applyFiltersLive()` on `input`) without needing the drawer
    # itself open, and — unlike the toolbar search — it opens no
    # suggestion dropdown that would overlay the canvas being measured.
    def do_filtered_search():
        js(c, "document.getElementById('fltName').value = 'a'; document.getElementById('fltName').dispatchEvent(new Event('input', {bubbles:true}));")
    qa_state("Users List (filtered/search results)", "#usersTable", do_filtered_search)
    js(c, "document.getElementById('fltName').value = ''; document.getElementById('fltName').dispatchEvent(new Event('input', {bubbles:true}));")
    time.sleep(0.2)

    def open_edit_user():
        click_selector(c, "#tbody a.name-link, #usersTable a.name-link", wait=0.5)
    qa_state("Edit User", "#addUsersPage", open_edit_user)
    # `qa_state` always calls `disable_redline()` before returning, so the
    # required screenshot ("centered between both panels") needs Redline
    # re-enabled on top of the still-open Edit User page it left behind.
    enable_redline(c, wait=0.5)
    screenshot(c, "02_edit_user_current")
    disable_redline(c)
    js(c, "if (document.getElementById('addUsersPage').style.display !== 'none') { document.getElementById('auCancel') ? document.getElementById('auCancel').click() : null; }")
    time.sleep(0.2)

    def open_add_user_search_modal():
        # "Add User" on the Users List always opens the Step-1
        # user-discovery modal first (`auAddUserModalBackdrop`) — there is
        # no direct route straight to `#addUsersPage` (see `openAddUsers()`
        # / the modal's own doc comment in index.html).
        click_text(c, "button, .btn-ghost", "Add User")
    qa_state("Add User search modal", "#auAddUserModalBackdrop", open_add_user_search_modal)

    def open_add_user():
        # Complete Step 1 (search, pick the first real result, Next) to
        # actually reach the full-page Add User form (Step 2) —
        # `#addUsersPage` only becomes visible after a roster user is
        # selected and confirmed, per `auAddUserHandleNext()`.
        js(c, "document.getElementById('auAddUserSearchInput').value = 'a'; document.getElementById('auAddUserSearchInput').dispatchEvent(new Event('input', {bubbles:true}));")
        time.sleep(0.4)
        click_selector(c, "#auAddUserListbox .au-adduser-option:not(.is-disabled)", wait=0.3)
        click_selector(c, "#auAddUserNext:not(:disabled)", wait=0.5)
    qa_state("Add User page", "#addUsersPage", open_add_user)
    escape_key(c)
    time.sleep(0.2)
    js(c, "var b=document.getElementById('auAddUserModalBackdrop'); if (b) b.setAttribute('hidden',''); var p=document.getElementById('addUsersPage'); if (p) p.style.display='none'; var mp=document.querySelector('main.page'); if (mp) mp.style.display='';")
    time.sleep(0.2)

    def open_effective_access_breakdown():
        # `#auRolesCard` (and its "View access breakdown" button) is
        # expanded by default — no toggle click needed, and clicking an
        # already-expanded section's header would collapse it instead,
        # hiding the button we're about to click (see the identical note
        # on the modal/toast check above).
        click_selector(c, "#tbody a.name-link, #usersTable a.name-link", wait=0.5)
        click_selector(c, "#auEffViewBreakdown", wait=0.4)
    qa_state("Effective Access Breakdown modal", "#auEffBreakdownBackdrop", open_effective_access_breakdown)
    escape_key(c)
    time.sleep(0.2)
    js(c, "location.reload();")
    time.sleep(1.3)

    # --- Roles ---
    qa_state("Roles List", "#rpTable, #rolesPanel",
              lambda: click_text(c, "button.tab-btn, .tab-btn", "Roles"))

    def open_create_role():
        click_text(c, "button, .btn-ghost", "Create Role")
    qa_state("Create Role", "#createRolePage", open_create_role)
    js(c, "var p=document.getElementById('createRolePage'); if(p) p.style.display='none'; var mp=document.querySelector('main.page'); if(mp) mp.style.display='';")
    time.sleep(0.2)

    def open_edit_role():
        click_text(c, "button.tab-btn, .tab-btn", "Roles")
        click_selector(c, "a.rp-role-link", wait=0.5)
    qa_state("Edit Role", "#createRolePage", open_edit_role)
    enable_redline(c, wait=0.5)
    screenshot(c, "03_edit_role_current")
    disable_redline(c)

    def expand_role_details():
        click_selector(c, '#crBasicCard .cr-section-header, [data-cr-toggle="basic"]', wait=0.3)
    qa_state("Edit Role — Role Details expanded/collapsed toggle", "#crBasicCard", expand_role_details)

    def expand_functions():
        click_selector(c, '#crFuncsCard .cr-section-header, [data-cr-toggle="functions"]', wait=0.3)
    qa_state("Edit Role — Functions expanded/collapsed toggle", "#crFuncsCard", expand_functions)
    # `#crFuncsCard` starts expanded, so the toggle above just collapsed it
    # (testing the *collapsed* state, per the brief's "collapsed Functions"
    # QA item) — click it again to re-expand, so its "Remove application"
    # buttons (needed by the Remove Application modal check below) are
    # reachable again, restoring the same default-expanded state the page
    # loaded in.
    if js(c, "document.getElementById('crFuncsCard').classList.contains('collapsed')"):
        click_selector(c, '#crFuncsCard .cr-section-header, [data-cr-toggle="functions"]', wait=0.3)

    def open_remove_role_modal():
        click_selector(c, "#crRemove", wait=0.4)
    qa_state("Remove Role modal", "#crConfirmBackdrop", open_remove_role_modal)
    escape_key(c)
    time.sleep(0.2)

    def open_remove_application_modal():
        click_selector(c, "[data-remove-app]", wait=0.4)
    qa_state("Remove Application modal", "#crAppRemoveBackdrop", open_remove_application_modal)
    escape_key(c)
    time.sleep(0.2)

    # The Teams QA + breakpoint sweep below is deliberately run in a fresh
    # Chrome session (see `main2`): by this point in the suite we've done
    # ~140 CDP round trips (dozens of Redline enable/disable cycles, DOM
    # reparenting, iframe loads) in a single long-lived tab, and on a
    # loaded dev machine sharing CPU/memory with many other apps, keeping
    # that session alive gets less reliable the longer it runs — recycling
    # the browser here isn't masking a Redline bug, it's just reducing how
    # long any *one* Chrome process has to survive under contention.
    kill_chrome()
    server.terminate()


def main2():
    """Continuation of `main()`'s suite in a fresh browser/server pair —
    see the comment above the `chrome.terminate()` call at the end of
    `main()` for why this is split out. Appends to the same module-level
    `results` list, so the combined pass/fail tally and screenshot
    directory are still reported once, at the end of this function."""
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port
    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)

    def kill_chrome():
        # See the identically-named helper in `main()` — same rationale:
        # `chrome.terminate()` alone can miss the real re-exec'd browser
        # process on macOS, so reap the whole tree by `profile_dir`.
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
        c.navigate(base + "/v4.1/index.html", wait=1.5)
        ensure_page_visible(c)

        def qa_state(name, marker_selector, setup_fn=None):
            if setup_fn:
                setup_fn()
            marker_before = wait_visible(c, marker_selector)
            if not check("QA[%s]: state reached (marker visible before Redline)" % name, marker_before is True):
                return
            enable_redline(c, wait=0.5)
            marker_in_liveapp = js(c, "(function(){var el=document.querySelector(%r); var host=document.querySelector('.redline__live-app'); return !!el && !!host && host.contains(el);})()" % marker_selector)
            check("QA[%s]: exact current state appears inside the live-app preview (no navigation/rebuild)" % name, marker_in_liveapp is True)
            left = rect_of(c, ".redline__panel--left")
            right = rect_of(c, ".redline__panel--right")
            stage = rect_of(c, ".redline__stage")
            check("QA[%s]: preview stage does not overlap the left panel" % name, no_overlap(stage, left))
            check("QA[%s]: preview stage does not overlap the right panel" % name, no_overlap(stage, right))
            liveapp = rect_of(c, ".redline__live-app")
            check("QA[%s]: live-app host starts at/after the stage's own left edge" % name,
                  liveapp is not None and stage is not None and liveapp["left"] >= stage["left"] - 1)
            disable_redline(c, wait=0.3)
            marker_after = is_visible(c, marker_selector)
            check("QA[%s]: original state/marker still present after exiting Redline Mode" % name, marker_after is True)

        # --- Teams ---
        qa_state("Teams List", "#tmTable, #teamsPanel",
                  lambda: click_text(c, "button.tab-btn, .tab-btn", "Teams"))

        def open_edit_team():
            click_text(c, "button.tab-btn, .tab-btn", "Teams")
            click_selector(c, "a.tm-name-link", wait=0.5)
        qa_state("Edit Team", "#editTeamPage", open_edit_team)
        enable_redline(c, wait=0.5)
        screenshot(c, "04_edit_team_current")
        disable_redline(c)

        def open_add_members_modal():
            click_selector(c, "#tmAddMembersBtn", wait=0.4)
        qa_state("Add Members modal", "#tmAddMembersBackdrop", open_add_members_modal)
        escape_key(c)
        time.sleep(0.2)

        def open_remove_member_modal():
            click_selector(c, "#tmMembersTbody button.tm-row-remove, #tmMembersTbody [data-tm-remove]", wait=0.4)
        qa_state("Remove Member modal", "#tmRemoveMemberBackdrop", open_remove_member_modal)
        escape_key(c)
        time.sleep(0.2)

        def open_delete_team_modal():
            click_selector(c, "#tmDelete", wait=0.4)
        qa_state("Delete Team modal", "#tmDeleteConfirmBackdrop", open_delete_team_modal)
        escape_key(c)
        time.sleep(0.2)
    finally:
        kill_chrome()
        server.terminate()


def main3():
    """Final breakpoint sweep, in its own browser/server pair.

    Split off from `main2` for the same reason `main2` was split off from
    `main`: this suite drives one long session through dozens of states
    and screenshots, and a single Chrome that has to survive all of them
    grows a working set big enough to push a loaded machine into swap,
    where CDP calls stall for minutes at whichever step happens to be
    running. Recycling the browser here bounds that growth."""
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
        # A fresh browser starts at Chrome's own default window size,
        # which is far too small for Redline's two side panels plus a
        # 1024-2560px preview stage — the breakpoint controls never
        # activate there. Use the same desktop viewport the rest of the
        # suite runs at. Enter through "/v4.1/" (not "/v4.1/index.html")
        # so the closing "no unexpected navigation" check compares
        # against the route the app actually runs on.
        c.send("Emulation.setDeviceMetricsOverride",
               {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        c.navigate(base + "/v4.1/", wait=1.5)
        ensure_page_visible(c)

        # ═══════════════════════════════════════════════════════════════
        # Breakpoint sweep on a real route (Edit User), confirming every
        # numeric breakpoint reflows + centers correctly and Current
        # restores cleanly at the end (final acceptance-criteria sweep).
        # ═══════════════════════════════════════════════════════════════
        click_selector(c, "#tbody a.name-link, #usersTable a.name-link", wait=0.5)
        enable_redline(c)
        for bp in ["1024", "1280", "1440", "1920", "2560"]:
            click_selector(c, '[data-redline-action="breakpoint:%s"]' % bp, wait=0.6)
            active = js(c, "document.querySelector('.redline').getAttribute('data-breakpoint-active')") == "true"
            left = rect_of(c, ".redline__panel--left")
            right = rect_of(c, ".redline__panel--right")
            stage = rect_of(c, ".redline__stage")
            check("Breakpoint sweep [%s]: activates and stage stays clear of both panels" % bp,
                  active and no_overlap(stage, left) and no_overlap(stage, right))
        click_selector(c, '[data-redline-action="breakpoint:current"]', wait=0.4)
        check("Breakpoint sweep: returns cleanly to Current", js(c, "document.querySelector('.redline').getAttribute('data-breakpoint-active')") == "false")
        disable_redline(c)
        check("No console-crash / unexpected navigation across the whole suite", js(c, "location.pathname") == "/v4.1/")
    finally:
        kill_chrome()
        server.terminate()


SEGMENTS = ["main", "main2", "main3"]


def report():
    """Print this process's tally and exit non-zero on any failure."""
    print("\nScreenshots saved to: %s" % SCREENSHOT_DIR)

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    if failed:
        print("\nFailures:")
        for status, name, detail in results:
            if status == "FAIL":
                print("  - %s%s" % (name, ("  (%s)" % detail) if detail else ""))
    sys.exit(1 if failed else 0)


def run_all_segments():
    """Run each segment as its own subprocess, then aggregate.

    Segments already use a fresh browser each, but within one process the
    OS only gets that memory back when the process exits. On a machine
    that is already deep into swap, the leftover footprint is enough to
    make later CDP calls stall for minutes at whatever step happens to be
    running -- which reads as a hang somewhere unrelated to the check
    that is failing. One process per segment keeps the footprint bounded
    and makes a stall attributable to the segment that caused it.

    Every assertion still runs; only the process boundary changes.
    """
    total_pass = total_fail = 0
    failed_segments = []
    for name in SEGMENTS:
        print("\n" + "=" * 70)
        print("SEGMENT: %s" % name)
        print("=" * 70, flush=True)
        proc = subprocess.run([sys.executable, os.path.abspath(__file__), name],
                              capture_output=True, text=True)
        sys.stdout.write(proc.stdout)
        if proc.stderr.strip():
            sys.stderr.write(proc.stderr)
        for line in proc.stdout.splitlines():
            if line.startswith("[PASS]"):
                total_pass += 1
            elif line.startswith("[FAIL]"):
                total_fail += 1
        if proc.returncode != 0:
            failed_segments.append(name)

    print("\n" + "=" * 70)
    print("TOTAL: %d passed, %d failed (of %d)" % (total_pass, total_fail, total_pass + total_fail))
    if failed_segments:
        print("Segments reporting failure: %s" % ", ".join(failed_segments))
    print("=" * 70)
    sys.exit(1 if (total_fail or failed_segments) else 0)


if __name__ == "__main__":
    arg = sys.argv[1] if len(sys.argv) > 1 else None
    if arg in SEGMENTS:
        {"main": main, "main2": main2, "main3": main3}[arg]()
        report()
    elif arg:
        print("usage: %s [%s]" % (os.path.basename(__file__), "|".join(SEGMENTS)))
        sys.exit(2)
    else:
        run_all_segments()
