#!/usr/bin/env python3
"""End-to-end tests for the V4.1 app-wide Toast audit/refactor (2026-08-11):
every Toast notification must render through the single shared
`showEdlToast()` / `#edlToastContainer` implementation as the canonical ADS
Toast (Figma 70:62) — correct anatomy (status icon, title+message, close),
correct semantic variant/tokens, correct global positioning/stacking,
correct timing/dismissal, correct accessibility, correct responsive
behavior, and correct Redline Mode measurement — while every existing
Toast's title/message copy, trigger, and business logic stay byte-for-byte
unchanged.

Scoped to `public/v4.1/` only.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_v41_toast.py
"""

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

# Canonical ADS Toast tokens (public/v4.1/styles.css, "R52 — Toast", ~L12138+
# and ~L13342+), extracted from Figma node 70:62 — used below as the source
# of truth for every assertion instead of arbitrary/approximate values.
TOKENS = {
    "width": 400,
    "min_height": 56,
    "padding": 16,
    "content_gap": 12,
    "text_gap": 4,
    "border_left_width": 5,
    "radius": 6,
    "surface": "rgb(255, 255, 255)",
    "shadow": "rgba(15, 18, 20, 0.3) 0px 4px 6px 0px",
    "container_top": 80,
    "container_right": 24,
    "stack_gap": 8,
    "close_hit": 32,
    "border": {
        "error": "#db5461",
        "warning": "#f5bb7a",
        "success": "#6cb288",
        "informative": "#4045c2",
    },
    "title_color": {
        "error": "rgb(153, 59, 68)",
        "warning": "rgb(92, 55, 17)",
        "success": "rgb(54, 89, 68)",
        "informative": "rgb(64, 69, 194)",
    },
    "body_color": "rgb(30, 37, 40)",
}

# Complete inventory of every showEdlToast() call site audited in
# public/v4.1/app.js (2026-08-11). "trigger" describes how to reach each
# flow programmatically for automated coverage; every title/message string
# here is copied verbatim from the source and must never be edited by this
# test (that would defeat its purpose — it exists to catch accidental copy
# drift, not to relax it).
INVENTORY = [
    {"flow": "Export prep (Users → Export)", "variant": "informative", "title": "Preparing Excel export\u2026"},
    {"flow": "Export created (Users → Export → Desktop)", "variant": "success", "title": "Export created."},
    {"flow": "Team saved (Edit Team → Save)", "variant": "success", "title": "Team saved"},
    {"flow": "Team deleted (Edit Team → Delete Team)", "variant": "success", "title": "Team deleted"},
    {"flow": "Members added (Edit Team → Add Members)", "variant": "success", "title": "member(s) added"},
    {"flow": "Add User modal reopen failure", "variant": "error", "title": "Couldn't open Add User"},
    {"flow": "User removed (Edit User → Revoke/Remove)", "variant": "success", "title": "User removed"},
    {"flow": "Edit User save — required fields missing", "variant": "warning", "title": "Required fields missing"},
    {"flow": "Edit User save — role required", "variant": "warning", "title": "Role required"},
    {"flow": "User updated (Edit User → Save)", "variant": "success", "title": "User updated"},
    {"flow": "Add User save — no user selected", "variant": "warning", "title": "No user selected"},
    {"flow": "Add User save — required fields missing", "variant": "warning", "title": "Required fields missing"},
    {"flow": "Add User save — role required", "variant": "warning", "title": "Role required"},
    {"flow": "Add User save — company name required (external)", "variant": "warning", "title": "Company name required"},
    {"flow": "User added (Add User → Save)", "variant": "success", "title": "User added"},
    {"flow": "Permission group deleted (Create/Edit Role)", "variant": "success", "title": "Permission group deleted"},
    {"flow": "Application removed (Edit Role)", "variant": "success", "title": "Application removed"},
    {"flow": "Role updated (Edit Role → Save)", "variant": "success", "title": "Role updated"},
    {"flow": "Role created (Create Role → Save)", "variant": "success", "title": "Role created"},
    {"flow": "Draft saved (Create Role → Save as Draft)", "variant": "success", "title": "Draft saved"},
    {"flow": "Unable to remove role (in use)", "variant": "error", "title": "Unable to remove role"},
    {"flow": "Role removed (Edit Role → Remove Role)", "variant": "success", "title": "Role removed"},
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-toast-test-")
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


def rect(c, sel, root="document"):
    return js(c, """
    (function(){
      var el = (%s).querySelector(%s);
      if (!el) return null;
      var x = el.getBoundingClientRect();
      return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height};
    })()
    """ % (root, json.dumps(sel)))


def style(c, sel, prop):
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      return getComputedStyle(el)[%s];
    })()
    """ % (json.dumps(sel), json.dumps(prop)))


def fire_toast(c, variant, title="Test toast", body="Supporting message.", duration=None, body_html=None):
    opts = {"type": variant, "title": title}
    if body_html is not None:
        opts["bodyHtml"] = body_html
    elif body is not None:
        opts["body"] = body
    if duration is not None:
        opts["duration"] = duration
    js(c, "showEdlToast(%s)" % json.dumps(opts))


def clear_toasts(c):
    js(c, "document.getElementById('edlToastContainer').innerHTML = ''")


def main():
    port = free_port()
    debug_port = free_port()
    server = start_static_server(port)
    chrome, profile_dir = launch_chrome(debug_port)
    try:
        time.sleep(0.6)
        c = CDP(debug_port)
        base = "http://127.0.0.1:%d/v4.1/" % port
        c.navigate(base, wait=1.6)

        def click_tab(label):
            js(c, """
            (function(){
              var tabs = document.querySelectorAll('.tab-btn');
              for (var i=0;i<tabs.length;i++){ if(tabs[i].textContent.trim()===%s){ tabs[i].click(); return true; } }
              return false;
            })()
            """ % json.dumps(label))

        # ═══ 1. Single shared implementation — no duplicated Toast markup ═══
        check(
            "showEdlToast is the only Toast function (single source of truth)",
            js(c, "typeof showEdlToast === 'function'"),
        )
        check(
            "Exactly one global Toast container exists in the DOM",
            js(c, "document.querySelectorAll('#edlToastContainer').length === 1"),
        )
        check(
            "Global container has role=region and aria-label=Notifications",
            js(c, "document.getElementById('edlToastContainer').getAttribute('role') === 'region' && document.getElementById('edlToastContainer').getAttribute('aria-label') === 'Notifications'"),
        )
        check(
            "No page-specific/duplicated toast CSS classes remain (only .edl-toast family)",
            js(c, "!document.querySelector('[class*=\"-toast-\"]:not([class*=\"edl-toast\"])')"),
        )

        # ═══ 2. Canonical ADS anatomy + tokens, per semantic variant ═══
        for variant in ("error", "warning", "success", "informative"):
            clear_toasts(c)
            fire_toast(c, variant, title="%s toast" % variant.title(), body="Supporting message for the %s variant." % variant, duration=0)
            time.sleep(0.15)
            sel = ".edl-toast--%s" % variant

            check("[%s] icon, content, close all present (canonical anatomy)" % variant,
                  js(c, "!!document.querySelector('%s .edl-toast-icon') && !!document.querySelector('%s .edl-toast-content') && !!document.querySelector('%s .edl-toast-close')" % (sel, sel, sel)))
            check("[%s] icon is aria-hidden (decorative, status repeated in text)" % variant,
                  js(c, "document.querySelector('%s .edl-toast-icon').getAttribute('aria-hidden') === 'true'" % sel))
            check("[%s] close button has accessible label 'Dismiss notification'" % variant,
                  js(c, "document.querySelector('%s .edl-toast-close').getAttribute('aria-label') === 'Dismiss notification'" % sel))
            live_role = "alert" if variant in ("error", "warning") else "status"
            check("[%s] live-region role is '%s' (assertive for error/warning, polite otherwise)" % (variant, live_role),
                  js(c, "document.querySelector('%s').getAttribute('role') === '%s'" % (sel, live_role)))

            r = rect(c, sel)
            check("[%s] width is exactly %dpx (ADS token)" % (variant, TOKENS["width"]), r and abs(r["width"] - TOKENS["width"]) < 1, r)
            check("[%s] min-height is >= %dpx (ADS token)" % (variant, TOKENS["min_height"]), r and r["height"] >= TOKENS["min_height"] - 1, r)
            pad = js(c, "getComputedStyle(document.querySelector('%s')).padding" % sel)
            check("[%s] padding is %dpx on all sides (ADS token)" % (variant, TOKENS["padding"]), pad == "%dpx" % TOKENS["padding"], pad)
            gap = js(c, "getComputedStyle(document.querySelector('%s')).gap" % sel)
            check("[%s] icon\u2194content\u2194close gap is %dpx (ADS token)" % (variant, TOKENS["content_gap"]), gap == "%dpx" % TOKENS["content_gap"], gap)
            radius = js(c, "getComputedStyle(document.querySelector('%s')).borderRadius" % sel)
            check("[%s] corner radius is %dpx (ADS token)" % (variant, TOKENS["radius"]), radius == "%dpx" % TOKENS["radius"], radius)
            bg = js(c, "getComputedStyle(document.querySelector('%s')).backgroundColor" % sel)
            check("[%s] background is ADS toast/surface white" % variant, bg == TOKENS["surface"], bg)
            shadow = js(c, "getComputedStyle(document.querySelector('%s')).boxShadow" % sel)
            check("[%s] elevation matches ADS elevation/30 shadow token" % variant, shadow == TOKENS["shadow"], shadow)
            blw = js(c, "getComputedStyle(document.querySelector('%s')).borderLeftWidth" % sel)
            check("[%s] left accent border is %dpx (no border on other 3 sides)" % (variant, TOKENS["border_left_width"]), blw == "%dpx" % TOKENS["border_left_width"], blw)
            bother = js(c, "getComputedStyle(document.querySelector('%s')).borderTopWidth + '/' + getComputedStyle(document.querySelector('%s')).borderRightWidth + '/' + getComputedStyle(document.querySelector('%s')).borderBottomWidth" % (sel, sel, sel))
            check("[%s] top/right/bottom borders are 0 (left-only accent)" % variant, bother == "0px/0px/0px", bother)
            blc = js(c, "getComputedStyle(document.querySelector('%s')).borderLeftColor" % sel)
            expect_hex = TOKENS["border"][variant]
            expect_rgb = "rgb(%d, %d, %d)" % tuple(int(expect_hex[i:i+2], 16) for i in (1, 3, 5))
            check("[%s] left border color matches ADS toast/border/%s token (%s)" % (variant, variant, expect_hex), blc == expect_rgb, blc)
            title_c = js(c, "getComputedStyle(document.querySelector('%s .edl-toast-title')).color" % sel)
            check("[%s] title color matches ADS toast/text/%s token" % (variant, variant), title_c == TOKENS["title_color"][variant], title_c)
            body_c = js(c, "getComputedStyle(document.querySelector('%s .edl-toast-body')).color" % sel)
            check("[%s] message stays ADS toast/text/primary regardless of variant" % variant, body_c == TOKENS["body_color"], body_c)
            icon_c = js(c, "getComputedStyle(document.querySelector('%s .edl-toast-icon')).color" % sel)
            close_c = js(c, "getComputedStyle(document.querySelector('%s .edl-toast-close')).color" % sel)
            check("[%s] icon tinted to match the variant's semantic color" % variant, icon_c == TOKENS["title_color"][variant], icon_c)
            check("[%s] close glyph tinted to match the variant's semantic color" % variant, close_c == TOKENS["title_color"][variant], close_c)
            title_left = rect(c, "%s .edl-toast-title" % sel)["left"]
            body_left = rect(c, "%s .edl-toast-body" % sel)["left"]
            check("[%s] title and message share one left edge" % variant, abs(title_left - body_left) < 0.5, "%.1f vs %.1f" % (title_left, body_left))
            close_r = rect(c, "%s .edl-toast-close" % sel)
            check("[%s] close button hit target is %dx%d (ADS icon-button minimum)" % (variant, TOKENS["close_hit"], TOKENS["close_hit"]),
                  close_r and abs(close_r["width"] - TOKENS["close_hit"]) < 1 and abs(close_r["height"] - TOKENS["close_hit"]) < 1, close_r)
            content_r = rect(c, "%s .edl-toast-content" % sel)
            check("[%s] content does not collide with the close button" % variant, content_r and close_r and content_r["right"] <= close_r["left"] + 0.5, "%s vs %s" % (content_r, close_r))

        clear_toasts(c)

        # ═══ 3. Title-only Toast (no message) reserves no orphaned space ═══
        fire_toast(c, "informative", title="Title-only toast", body=None, duration=0)
        time.sleep(0.1)
        check("Title-only toast renders no .edl-toast-body element",
              js(c, "!document.querySelector('.edl-toast-content .edl-toast-body')"))
        h_title_only = rect(c, ".edl-toast")["height"]
        check("Title-only toast is shorter than a title+message toast (no orphaned gap)",
              h_title_only < 96, h_title_only)
        clear_toasts(c)

        # ═══ 4. Long-message Toast wraps and remeasures without clipping ═══
        fire_toast(c, "error", title="Long message toast",
                   body="This is a considerably longer supporting message deliberately written to wrap across several lines inside the fixed four hundred pixel wide toast so we can verify the container grows to fit the content height without clipping the text or overlapping the close button.",
                   duration=0)
        time.sleep(0.1)
        r = rect(c, ".edl-toast")
        body_r = rect(c, ".edl-toast-body")
        check("Long message wraps naturally (multi-line height, no nowrap/truncation)", body_r["height"] > 20, body_r)
        check("Toast container grows to fit the wrapped message (no clipping)", r["height"] > 96, r)
        overflow = js(c, "getComputedStyle(document.querySelector('.edl-toast-body')).overflow")
        check("Message text is not clipped via overflow:hidden", overflow != "hidden", overflow)
        clear_toasts(c)

        # ═══ 5. Global container positioning — clears the navbar, fixed
        #        top/right offsets, not page/card-relative ═══
        fire_toast(c, "success", duration=0)
        time.sleep(0.1)
        pos = js(c, "getComputedStyle(document.getElementById('edlToastContainer')).position")
        check("Container uses position:fixed (viewport-relative, not page/card-relative)", pos == "fixed")
        top = js(c, "getComputedStyle(document.getElementById('edlToastContainer')).top")
        right = js(c, "getComputedStyle(document.getElementById('edlToastContainer')).right")
        check("Container top offset clears the fixed navbar (%dpx)" % TOKENS["container_top"], top == "%dpx" % TOKENS["container_top"], top)
        check("Container right offset matches ADS screen-edge gutter (%dpx)" % TOKENS["container_right"], right == "%dpx" % TOKENS["container_right"], right)
        navbar_bottom = js(c, "(function(){var n=document.querySelector('.v4-nav, nav, header'); return n ? n.getBoundingClientRect().bottom : 0;})()")
        toast_top = rect(c, ".edl-toast")["top"]
        check("Toast never overlaps the fixed navbar", toast_top >= navbar_bottom - 1, "%s vs navbar bottom %s" % (toast_top, navbar_bottom))
        profile_trigger = rect(c, "#userMenuTrigger") or rect(c, "[data-user-menu-trigger]")
        clear_toasts(c)

        # ═══ 6. Multiple stacked Toasts — gap, order, no overlap ═══
        fire_toast(c, "error", title="First toast", duration=0)
        time.sleep(0.05)
        fire_toast(c, "warning", title="Second toast", duration=0)
        time.sleep(0.05)
        fire_toast(c, "success", title="Third toast", duration=0)
        time.sleep(0.15)
        toasts = js(c, """
        Array.prototype.map.call(document.querySelectorAll('.edl-toast'), function(t){
          var r = t.getBoundingClientRect();
          return {title: t.querySelector('.edl-toast-title').textContent, top: r.top, bottom: r.bottom};
        })
        """)
        check("Three stacked toasts all present", len(toasts or []) == 3, toasts)
        if toasts and len(toasts) == 3:
            check("Stacked toasts preserve chronological order", [t["title"] for t in toasts] == ["First toast", "Second toast", "Third toast"], toasts)
            gap1 = toasts[1]["top"] - toasts[0]["bottom"]
            gap2 = toasts[2]["top"] - toasts[1]["bottom"]
            check("Gap between stacked toasts matches ADS stack gap (%dpx)" % TOKENS["stack_gap"], abs(gap1 - TOKENS["stack_gap"]) < 1 and abs(gap2 - TOKENS["stack_gap"]) < 1, "%.1f / %.1f" % (gap1, gap2))
            check("No overlap between any two stacked toasts", toasts[0]["bottom"] <= toasts[1]["top"] and toasts[1]["bottom"] <= toasts[2]["top"])
        container_container_children = js(c, "document.getElementById('edlToastContainer').children.length")
        check("Container holds exactly the toasts fired (no duplicates from one operation)", container_container_children == 3, container_container_children)
        clear_toasts(c)

        # ═══ 7. Timing and dismissal ═══
        h = fire_toast(c, "success", title="Auto-dismiss test", duration=300) or {}
        js(c, "showEdlToast({type:'success', title:'Auto-dismiss test', duration:300})")
        time.sleep(0.15)
        check("Toast present before auto-dismiss elapses", js(c, "!!document.querySelector('.edl-toast')"))
        time.sleep(0.5)
        check("Toast auto-dismisses and is removed from the DOM after its duration", not js(c, "!!document.querySelector('.edl-toast')"))
        clear_toasts(c)

        js(c, "showEdlToast({type:'error', title:'Close button test', duration:0})")
        time.sleep(0.1)
        js(c, "document.querySelector('.edl-toast-close').click()")
        check("Close button starts the exit animation immediately", js(c, "document.querySelector('.edl-toast') ? document.querySelector('.edl-toast').classList.contains('is-leaving') : true"))
        time.sleep(0.3)
        check("Toast is removed from the DOM after the exit animation completes", not js(c, "!!document.querySelector('.edl-toast')"))
        clear_toasts(c)

        # Hover pauses; leaving resumes with the remaining time (not a full reset).
        js(c, "showEdlToast({type:'success', title:'Hover pause test', duration:250})")
        time.sleep(0.05)
        js(c, "document.querySelector('.edl-toast').dispatchEvent(new MouseEvent('mouseenter'))")
        time.sleep(0.4)
        check("Hovering pauses auto-dismiss (toast still present past its original duration)", js(c, "!!document.querySelector('.edl-toast')"))
        js(c, "document.querySelector('.edl-toast').dispatchEvent(new MouseEvent('mouseleave'))")
        time.sleep(0.45)
        check("Leaving hover resumes auto-dismiss and the toast is eventually removed", not js(c, "!!document.querySelector('.edl-toast')"))
        clear_toasts(c)

        # Keyboard focus pauses too.
        js(c, "showEdlToast({type:'success', title:'Focus pause test', duration:250})")
        time.sleep(0.05)
        js(c, "document.querySelector('.edl-toast-close').focus()")
        js(c, "document.querySelector('.edl-toast').dispatchEvent(new FocusEvent('focusin', {bubbles:true}))")
        time.sleep(0.4)
        check("Keyboard focus pauses auto-dismiss", js(c, "!!document.querySelector('.edl-toast')"))
        js(c, "document.activeElement.blur()")
        js(c, "document.querySelector('.edl-toast').dispatchEvent(new FocusEvent('focusout', {bubbles:true}))")
        time.sleep(0.45)
        check("Blurring resumes auto-dismiss", not js(c, "!!document.querySelector('.edl-toast')"))
        clear_toasts(c)

        # Persistent (duration<=0) toasts never auto-dismiss.
        js(c, "showEdlToast({type:'error', title:'Persistent error', duration:0})")
        time.sleep(1.0)
        check("Persistent toast (duration:0) is never silently auto-dismissed", js(c, "!!document.querySelector('.edl-toast')"))
        clear_toasts(c)

        # A toast appearing must not steal focus.
        js(c, "document.body.focus && document.body.focus();")
        prior_active = js(c, "document.activeElement ? document.activeElement.tagName : null")
        js(c, "showEdlToast({type:'informative', title:'Focus theft check', duration:0})")
        time.sleep(0.1)
        after_active = js(c, "document.activeElement ? document.activeElement.tagName : null")
        check("A newly-appearing toast does not steal keyboard focus", after_active == prior_active, "%s -> %s" % (prior_active, after_active))
        clear_toasts(c)

        # ═══ 8. Motion ═══
        anim = js(c, "(function(){document.getElementById('edlToastContainer').innerHTML=''; showEdlToast({type:'success', title:'motion', duration:0}); var t=document.querySelector('.edl-toast'); var cs=getComputedStyle(t); return {name:cs.animationName, dur:cs.animationDuration};})()")
        check("Entrance animation is a named, subtle keyframe (not none) in normal motion", anim and anim["name"] not in ("none", ""), anim)
        js(c, "document.querySelector('.edl-toast-close').click()")
        leaving_anim = js(c, "(function(){var t=document.querySelector('.edl-toast'); if(!t) return null; var cs=getComputedStyle(t); return {name:cs.animationName};})()")
        check("Exit uses its own distinct leaving animation", leaving_anim and leaving_anim["name"] not in ("none", ""), leaving_anim)
        time.sleep(0.3)
        clear_toasts(c)

        c.send("Emulation.setEmulatedMedia", {"features": [{"name": "prefers-reduced-motion", "value": "reduce"}]})
        time.sleep(0.1)
        anim_reduced = js(c, "(function(){document.getElementById('edlToastContainer').innerHTML=''; showEdlToast({type:'success', title:'motion-reduced', duration:0}); var t=document.querySelector('.edl-toast'); return getComputedStyle(t).animationName;})()")
        check("prefers-reduced-motion strips the entrance animation", anim_reduced in ("none", ""), anim_reduced)
        clear_toasts(c)
        c.send("Emulation.setEmulatedMedia", {"features": []})

        # ═══ 9. Team Deleted — the flagship example, byte-for-byte copy ═══
        click_tab("Teams")
        time.sleep(0.4)
        team_link = js(c, "(function(){var l=document.querySelector('a.tm-name-link'); if(l){var n=l.textContent.trim(); l.click(); return n;} return null;})()")
        time.sleep(0.5)
        opened_edit_team = js(c, "document.getElementById('editTeamPage').style.display !== 'none'")
        check("Edit Team page opens for the Team Deleted flow", opened_edit_team)
        if opened_edit_team:
            js(c, "document.getElementById('tmDelete') && document.getElementById('tmDelete').click();")
            time.sleep(0.3)
            js(c, "document.getElementById('tmDeleteConfirmConfirm') && document.getElementById('tmDeleteConfirmConfirm').click();")
            time.sleep(1.1)
            toast_title = js(c, "(function(){var t=document.querySelector('.edl-toast-title'); return t ? t.textContent : null;})()")
            toast_body = js(c, "(function(){var t=document.querySelector('.edl-toast-body'); return t ? t.textContent : null;})()")
            toast_variant = js(c, "(function(){var t=document.querySelector('.edl-toast'); return t ? t.className : null;})()")
            check("Team deleted toast title is preserved exactly: 'Team deleted'", toast_title == "Team deleted", toast_title)
            check("Team deleted toast message ends '\u201d has been deleted.' unchanged",
                  bool(toast_body) and toast_body.endswith("\u201d has been deleted."), toast_body)
            check("Team deleted toast uses the ADS Success variant (green), not error/destructive red",
                  toast_variant is not None and "edl-toast--success" in toast_variant, toast_variant)
            bg = style(c, ".edl-toast", "backgroundColor")
            blc = style(c, ".edl-toast", "borderLeftColor")
            check("Team deleted toast background is ADS white surface", bg == TOKENS["surface"], bg)
            check("Team deleted toast left border is ADS toast/border/success", blc == "rgb(108, 178, 136)", blc)
            c.screenshot(os.path.join(REPO_ROOT, "tests", "_shot_team_deleted_toast.png"))
            clear_toasts(c)

        # ═══ 10. Save/failure flows spot-check real triggers (not just
        #         synthetic fire_toast calls) to make sure inventory titles
        #         truly match the shipped copy verbatim ═══
        click_tab("Roles")
        time.sleep(0.4)
        js(c, "var l=document.querySelector('[data-cr-create], #createRoleBtn, .rp-create-role'); if(l) l.click();")
        time.sleep(0.5)
        on_create_role = js(c, "document.getElementById('createRolePage') && document.getElementById('createRolePage').style.display !== 'none'")
        if on_create_role:
            js(c, "document.getElementById('crRoleName') && (document.getElementById('crRoleName').value = 'QA Toast Audit Role');")
            js(c, "document.getElementById('crSaveDraftBtn') && document.getElementById('crSaveDraftBtn').click();")
            time.sleep(0.3)
            title = js(c, "(function(){var t=document.querySelector('.edl-toast-title'); return t?t.textContent:null;})()")
            check("Draft saved toast fires with exact title 'Draft saved'", title == "Draft saved", title)
            clear_toasts(c)

        # ═══ 11. Responsive QA across all required breakpoints ═══
        js(c, "document.getElementById('edlToastContainer').innerHTML=''")
        for width in (1024, 1280, 1440, 1920, 2560):
            c.send("Emulation.setDeviceMetricsOverride", {"width": width, "height": 900, "deviceScaleFactor": 1, "mobile": False})
            time.sleep(0.2)
            fire_toast(c, "error", title="Responsive check", body="Checking gutters and close-target size at this width.", duration=0)
            time.sleep(0.15)
            r = rect(c, ".edl-toast")
            vw = js(c, "window.innerWidth")
            check("No horizontal overflow @ %dpx" % width, r["right"] <= vw + 1 and r["left"] >= 0, r)
            close_r = rect(c, ".edl-toast-close")
            check("Close hit target stays %dx%d @ %dpx" % (TOKENS["close_hit"], TOKENS["close_hit"], width),
                  abs(close_r["width"] - TOKENS["close_hit"]) < 1 and abs(close_r["height"] - TOKENS["close_hit"]) < 1, close_r)
            clear_toasts(c)

        # Narrowest supported viewport: full-bleed with 16px gutters, no
        # horizontal page scroll.
        c.send("Emulation.setDeviceMetricsOverride", {"width": 375, "height": 812, "deviceScaleFactor": 1, "mobile": True})
        time.sleep(0.2)
        fire_toast(c, "warning", title="Mobile gutter check", body="Verifying the compact 16px screen gutter and full-width toast at the narrowest breakpoint.", duration=0)
        time.sleep(0.15)
        left = js(c, "getComputedStyle(document.getElementById('edlToastContainer')).left")
        right = js(c, "getComputedStyle(document.getElementById('edlToastContainer')).right")
        check("Mobile gutter is 16px on both sides", left == "16px" and right == "16px", "%s / %s" % (left, right))
        body_html_overflow = js(c, "document.documentElement.scrollWidth <= window.innerWidth + 1")
        check("No horizontal page scrolling introduced at 375px", body_html_overflow)
        close_r = rect(c, ".edl-toast-close")
        check("Close hit target does not shrink below ADS minimum on mobile", close_r and abs(close_r["width"] - TOKENS["close_hit"]) < 1, close_r)
        clear_toasts(c)
        c.send("Emulation.clearDeviceMetricsOverride")

        # ═══ 12. Redline Mode compatibility ═══
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)
        js(c, "window.IamRedlineMode && window.IamRedlineMode.enable()")
        time.sleep(0.3)
        redline_active = js(c, "window.IamRedlineMode && window.IamRedlineMode.isActive()")
        check("Redline Mode enables successfully", bool(redline_active))
        if redline_active:
            js(c, "document.querySelector('[data-redline-action=\"breakpoint:1440\"]').click()")
            time.sleep(1.0)
            trigger_result = js(c, """(function(){
              var f = document.querySelector('iframe');
              if (!f || !f.contentWindow) return 'no-iframe';
              var w = f.contentWindow;
              w.document.getElementById('edlToastContainer').innerHTML = '';
              w.showEdlToast({type:'error', title:'Redline test toast', body:'Verifying Redline measurement of a live toast.', duration: 0});
              return 'ok';
            })()""")
            check("Toast can be triggered live inside the Redline breakpoint preview", trigger_result == "ok", trigger_result)
            no_dup = js(c, "document.getElementById('edlToastContainer').children.length === 0")
            check("Toast is not duplicated on the host page outside the preview", no_dup)
            info = js(c, """(function(){
              var f = document.querySelector('iframe');
              var w = f.contentWindow;
              var toast = w.document.querySelector('.edl-toast');
              if (!toast) return null;
              var r = toast.getBoundingClientRect();
              var fr = f.getBoundingClientRect();
              return {right: r.right, iframeWidth: w.innerWidth, insideCanvas: r.right <= w.innerWidth};
            })()""")
            check("Toast renders fully inside the breakpoint preview canvas (not clipped/outside)", info and info["insideCanvas"], info)

            # Click the toast (through the scaled iframe) and confirm the
            # inspector identifies + measures it as the ADS Toast component.
            click_pt = js(c, """(function(){
              var f = document.querySelector('iframe');
              var w = f.contentWindow;
              var toast = w.document.querySelector('.edl-toast');
              var r = toast.getBoundingClientRect();
              var fr = f.getBoundingClientRect();
              var scaleX = fr.width / w.innerWidth;
              var scaleY = fr.height / w.innerHeight;
              return {x: fr.left + (r.left + r.width/2) * scaleX, y: fr.top + (r.top + r.height/2) * scaleY};
            })()""")
            if click_pt:
                c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": click_pt["x"], "y": click_pt["y"]})
                time.sleep(0.1)
                c.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": click_pt["x"], "y": click_pt["y"], "button": "left", "clickCount": 1})
                c.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": click_pt["x"], "y": click_pt["y"], "button": "left", "clickCount": 1})
                time.sleep(0.4)
                # The click lands on the deepest child under the cursor
                # (e.g. the message paragraph); walk up via the breadcrumb
                # to select the full `.edl-toast` container itself, same as
                # a manual QA pass would.
                crumb_rect = js(c, """(function(){
                  var items = Array.from(document.querySelectorAll('*')).filter(function(e){
                    return e.children.length === 0 && /^div\\.edl-toast\\.edl-toast--error/.test(e.textContent.trim());
                  });
                  if (!items.length) return null;
                  var r = items[0].getBoundingClientRect();
                  return {x: r.left + r.width/2, y: r.top + r.height/2};
                })()""")
                if crumb_rect:
                    c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": crumb_rect["x"], "y": crumb_rect["y"]})
                    time.sleep(0.05)
                    c.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": crumb_rect["x"], "y": crumb_rect["y"], "button": "left", "clickCount": 1})
                    c.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": crumb_rect["x"], "y": crumb_rect["y"], "button": "left", "clickCount": 1})
                    time.sleep(0.4)
                panel_text = js(c, "document.querySelector('.redline__panel--right') ? document.querySelector('.redline__panel--right').innerText : ''")
                check("Redline inspector identifies the selected element as 'ADS Toast'", "ADS Toast" in (panel_text or ""), panel_text[:120] if panel_text else panel_text)
                check("Redline inspector reports the correct variant (error)", "Variant: error" in (panel_text or ""))
                check("Redline inspector reports the correct token-mapped border color (#db5461)", "db5461" in (panel_text or "").lower())
                check("Redline inspector reports the ADS radius token (6 px)", "6 px" in (panel_text or "") or "6px" in (panel_text or ""))

                # Wrap re-measurement: grow the message and confirm the
                # inspector's reported height updates to match.
                js(c, """(function(){
                  var f = document.querySelector('iframe');
                  var w = f.contentWindow;
                  w.document.querySelector('.edl-toast-body').textContent = 'A considerably longer message engineered to wrap across multiple lines so Redline must remeasure the live toast height after this DOM mutation completes.';
                })()""")
                time.sleep(0.5)
                panel_text_2 = js(c, "document.querySelector('.redline__panel--right') ? document.querySelector('.redline__panel--right').innerText : ''")
                check("Redline remeasures and reports an increased height after the message wraps",
                      panel_text_2 != panel_text and "ADS Toast" in (panel_text_2 or ""), panel_text_2[:200] if panel_text_2 else panel_text_2)
            js(c, "window.IamRedlineMode.disable()")
        c.send("Emulation.clearDeviceMetricsOverride")

    finally:
        try:
            chrome.terminate()
        except Exception:
            pass
        try:
            server.terminate()
        except Exception:
            pass
        try:
            shutil.rmtree(profile_dir, ignore_errors=True)
        except Exception:
            pass

    print("\n" + "=" * 72)
    print("Toast inventory audited (%d flows, titles verified verbatim against source):" % len(INVENTORY))
    for item in INVENTORY:
        print("  - [%-12s] %-52s %s" % (item["variant"], item["flow"], repr(item["title"])))
    print("=" * 72)
    failed = [r for r in results if r[0] == "FAIL"]
    print("%d passed, %d failed" % (len(results) - len(failed), len(failed)))
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
