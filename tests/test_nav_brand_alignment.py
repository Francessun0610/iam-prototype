#!/usr/bin/env python3
"""Automated QA for the Ad Console brand-lockup gap correction.

Verifies:
  - Disney logo (rail + glyph) position is unchanged.
  - The gap between the brand pieces uses a single shared flex `gap: 8px`
    (no split rail-width + margin hack, no page-specific values, no
    negative margins/transforms).
  - "Ad Console" sits clear of the left-nav divider guide (the collapsed
    sidebar's 64px boundary) on every page/panel that shares the nav.
  - Logo and text share the same vertical center.
  - Nav height, sidebar width, and right-side controls are unchanged.
  - No layout shift / horizontal overflow at supported viewport widths.


Runs against `public/v4.1/` (final-QA pass, 2026-08-12) — it was
written when V4 was the current build and kept pointing at `/v4/`
after the V4.1 split, so it had stopped covering the build that
actually ships. Every assertion below passes unchanged on V4.1.
"""
import os
import sys
import time
import json
import socket
import subprocess
import tempfile
import shutil
import atexit

sys.path.insert(0, os.path.dirname(__file__))
from cdp_client import CDP

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(ROOT, "public")

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    shutil.which("chromium"),
    shutil.which("google-chrome"),
]

PASS = []
FAIL = []


def check(label, ok, detail=""):
    if ok:
        PASS.append(label)
        print("[PASS] %s %s" % (label, ("  (%s)" % detail) if detail else ""))
    else:
        FAIL.append(label)
        print("[FAIL] %s %s" % (label, ("  (%s)" % detail) if detail else ""))


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
    profile_dir = tempfile.mkdtemp(prefix="iam-nav-brand-test-")
    proc = subprocess.Popen(
        [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--remote-debugging-port=%d" % debug_port,
            "--remote-allow-origins=*",
            "--user-data-dir=%s" % profile_dir,
            "--window-size=1440,900",
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    for _ in range(80):
        try:
            with socket.create_connection(("127.0.0.1", debug_port), timeout=0.2):
                break
        except OSError:
            time.sleep(0.1)
    time.sleep(0.5)
    return proc, profile_dir


def js(c, expr):
    return c.eval(expr)


def rect(c, sel):
    return js(c, """
    (function(){
      var el = document.querySelector(%r);
      if (!el) return null;
      var x = el.getBoundingClientRect();
      return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height};
    })()
    """ % sel)


def click_tab(c, label):
    js(c, """
    (function(){
      var btn = Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim() === %r;});
      if (btn) btn.click();
    })()
    """ % label)
    time.sleep(0.4)


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

    c.navigate(base + "/v4.1/", wait=1.2)

    # ── 1. Logo position unchanged ──────────────────────────────────────
    glyph = rect(c, ".atlas-brand-glyph")
    check("Logo glyph left edge unchanged (16px)", abs(glyph["left"] - 16) < 0.5, glyph["left"])
    check("Logo glyph right edge unchanged (48px)", abs(glyph["right"] - 48) < 0.5, glyph["right"])
    check("Logo glyph size unchanged (32x28)", abs(glyph["width"] - 32) < 0.5 and abs(glyph["height"] - 28) < 0.5,
          "%sx%s" % (glyph["width"], glyph["height"]))

    # ── 2. Shared flex wrapper + single 8px gap value ──────────────────
    brand_display = js(c, "getComputedStyle(document.querySelector('.atlas-brand')).display")
    brand_align = js(c, "getComputedStyle(document.querySelector('.atlas-brand')).alignItems")
    brand_wrap = js(c, "getComputedStyle(document.querySelector('.atlas-brand')).flexWrap")
    brand_gap = js(c, "getComputedStyle(document.querySelector('.atlas-brand')).gap") or js(c, "getComputedStyle(document.querySelector('.atlas-brand')).columnGap")
    check("Brand wrapper uses display:flex", brand_display in ("flex", "inline-flex"), brand_display)
    check("Brand wrapper uses align-items:center", brand_align == "center", brand_align)
    check("Brand wrapper uses flex-wrap:nowrap", brand_wrap == "nowrap", brand_wrap)
    check("Brand wrapper gap is exactly 8px", brand_gap.strip().startswith("8px"), brand_gap)
    text_margin_left = js(c, "getComputedStyle(document.querySelector('.atlas-brand-text')).marginLeft")
    check("Text has no separate margin-left hack (spacing comes from gap only)", text_margin_left == "0px", text_margin_left)
    brand_transform = js(c, "getComputedStyle(document.querySelector('.atlas-brand')).transform")
    text_transform = js(c, "getComputedStyle(document.querySelector('.atlas-brand-text')).transform")
    check("No CSS transform applied to the brand wrapper", brand_transform in ("none", ""), brand_transform)
    check("No CSS transform applied to the text", text_transform in ("none", ""), text_transform)

    # ── 3. Text moved left; still clear of the left-nav divider guide ───
    text = rect(c, ".atlas-brand-text")
    sidebar = rect(c, "#sidebar")
    rail = rect(c, ".atlas-brand-rail")
    check("Ad Console text starts closer to the logo than before (72px, was 76px)", abs(text["left"] - 72) < 0.5, text["left"])
    check("Gap from rail/divider guide to text is exactly 8px", abs((text["left"] - rail["right"]) - 8) < 0.5, text["left"] - rail["right"])
    check("'A' stays clearly right of the left-nav divider guide (sidebar's 64px edge)",
          text["left"] > sidebar["right"], "text.left=%s sidebar.right=%s" % (text["left"], sidebar["right"]))
    check("Text does not overlap or cross the divider guide", text["left"] >= sidebar["right"],
          "text.left=%s sidebar.right=%s" % (text["left"], sidebar["right"]))

    # ── 4. Vertical centering — logo and text share the same axis ──────
    glyph_center = (glyph["top"] + glyph["bottom"]) / 2
    text_center = (text["top"] + text["bottom"]) / 2
    check("Logo and text share the same vertical center", abs(glyph_center - text_center) < 1,
          "%.1f vs %.1f" % (glyph_center, text_center))
    nav = rect(c, ".nav")
    check("Nav height unchanged (56px)", abs(nav["height"] - 56) < 0.5, nav["height"])
    check("Sidebar width unchanged (68px collapsed)", abs(sidebar["width"] - 68) < 0.5, sidebar["width"])

    # ── 5. Right-side controls untouched ────────────────────────────────
    user_menu = rect(c, "#userMenu")
    nav_r = rect(c, ".nav-r")
    check("Right-side utility cluster still present", user_menu is not None and nav_r is not None)
    nav_pad_right = js(c, "getComputedStyle(document.querySelector('.nav')).paddingRight")
    check("Right-side cluster right-aligned to the nav's own right padding (24px)",
          abs((nav["right"] - nav_r["right"]) - 24) < 1, "%s vs nav padding-right %s" % (nav["right"] - nav_r["right"], nav_pad_right))

    # ── 6. Same alignment across every V4 page/panel ────────────────────
    def brand_snapshot():
        g = rect(c, ".atlas-brand-glyph")
        t = rect(c, ".atlas-brand-text")
        gp = js(c, "getComputedStyle(document.querySelector('.atlas-brand')).gap") or ""
        return (round(g["left"], 1), round(g["right"], 1), round(t["left"], 1), gp.strip())

    baseline_snapshot = brand_snapshot()

    pages_to_check = []

    # User List (default)
    pages_to_check.append(("User List", lambda: click_tab(c, "Users")))
    # Add User (opens the Step 1 modal — brand should be unaffected/visible behind it)
    def open_add_user():
        click_tab(c, "Users")
        js(c, "var b = document.getElementById('addUserBtn') || Array.from(document.querySelectorAll('button')).find(function(x){return x.textContent.trim().indexOf('Add User')!==-1;}); if (b) b.click();")
        time.sleep(0.3)
    pages_to_check.append(("Add User modal open", open_add_user))
    def close_add_user_modal():
        js(c, "document.body.dispatchEvent ? null : null;")
        js(c, "var esc = new KeyboardEvent('keydown', {key:'Escape', bubbles:true}); document.dispatchEvent(esc);")
        time.sleep(0.2)
    # Edit User
    def open_edit_user():
        close_add_user_modal()
        click_tab(c, "Users")
        js(c, """
        (function(){
          var l = document.querySelector('#usersTable a.name-link, #usersTable .name-link');
          if (l) l.click();
        })()
        """)
        time.sleep(0.4)
    pages_to_check.append(("Edit User", open_edit_user))
    def back_to_users():
        js(c, "var b = document.querySelector('.au-back'); if (b) b.click();")
        time.sleep(0.3)
    # Roles
    def open_roles():
        back_to_users()
        click_tab(c, "Roles")
    pages_to_check.append(("Roles", open_roles))
    # Create Role
    def open_create_role():
        click_tab(c, "Roles")
        js(c, "var b = Array.from(document.querySelectorAll('button, a')).find(function(x){return x.textContent.trim().indexOf('Create Role')!==-1;}); if (b) b.click();")
        time.sleep(0.4)
    pages_to_check.append(("Create Role", open_create_role))
    # Edit Role
    def open_edit_role():
        js(c, "var b = document.querySelector('#crCancel, .cr-btn-cancel'); if (b) b.click();")
        time.sleep(0.2)
        click_tab(c, "Roles")
        js(c, """
        (function(){
          var l = document.querySelector('#rolesTable a, #rolesPanel a.name-link, #rolesPanel .name-link');
          if (l) l.click();
        })()
        """)
        time.sleep(0.4)
    pages_to_check.append(("Edit Role", open_edit_role))
    # Teams
    def open_teams():
        js(c, "var b = document.querySelector('#crCancel, .cr-btn-cancel'); if (b) b.click();")
        time.sleep(0.2)
        click_tab(c, "Teams")
    pages_to_check.append(("Teams", open_teams))
    # Edit Team
    def open_edit_team():
        click_tab(c, "Teams")
        js(c, """
        (function(){
          var l = document.querySelector('#teamsTable a, #teamsPanel a.name-link, #teamsPanel .name-link, #teamsPanel a');
          if (l) l.click();
        })()
        """)
        time.sleep(0.4)
    pages_to_check.append(("Edit Team", open_edit_team))

    for name, action in pages_to_check:
        try:
            action()
        except Exception as e:
            print("  (navigation to %s raised %s — checking nav anyway)" % (name, e))
        snap = brand_snapshot()
        check("Nav brand alignment identical on %s" % name, snap == baseline_snapshot,
              "%s vs baseline %s" % (snap, baseline_snapshot))

    # ── 7. Explicit required viewports: 1440 / 1280 / 1024 ──────────────
    for vw in (1440, 1280, 1024):
        c.navigate(base + "/v4.1/", wait=1.0)
        c.send("Emulation.setDeviceMetricsOverride", {"width": vw, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)
        g = rect(c, ".atlas-brand-glyph")
        t = rect(c, ".atlas-brand-text")
        sb = rect(c, "#sidebar")
        gp = js(c, "getComputedStyle(document.querySelector('.atlas-brand')).gap") or ""
        check("@%dpx: gap is exactly 8px" % vw, gp.strip().startswith("8px"), gp)
        check("@%dpx: logo/text vertically centered" % vw,
              abs(((g["top"] + g["bottom"]) / 2) - ((t["top"] + t["bottom"]) / 2)) < 1)
        check("@%dpx: text stays right of the sidebar divider guide" % vw, t["left"] >= sb["right"],
              "text.left=%s sidebar.right=%s" % (t["left"], sb["right"]))
        check("@%dpx: text is single-line (no wrap)" % vw, t["height"] <= 26, t["height"])
        dw = js(c, "document.documentElement.scrollWidth")
        ww = js(c, "window.innerWidth")
        check("@%dpx: no horizontal overflow" % vw, dw <= ww + 1, "%s vs %s" % (dw, ww))

    # ── 8. Responsive: narrow viewport keeps single-line, no overflow ──
    c.navigate(base + "/v4.1/", wait=1.0)
    c.send("Emulation.setDeviceMetricsOverride", {"width": 900, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.2)
    text_narrow = rect(c, ".atlas-brand-text")
    glyph_narrow = rect(c, ".atlas-brand-glyph")
    check("Text does not wrap at 900px (single line height)", text_narrow["height"] <= 26, text_narrow["height"])
    gcenter = (glyph_narrow["top"] + glyph_narrow["bottom"]) / 2
    tcenter = (text_narrow["top"] + text_narrow["bottom"]) / 2
    check("Logo/text stay vertically centered at 900px", abs(gcenter - tcenter) < 1, "%.1f vs %.1f" % (gcenter, tcenter))
    doc_w = js(c, "document.documentElement.scrollWidth")
    win_w = js(c, "window.innerWidth")
    check("No horizontal overflow at 900px", doc_w <= win_w + 1, "%s vs %s" % (doc_w, win_w))
    sidebar_narrow = rect(c, "#sidebar")
    check("Sidebar width unchanged at 900px", abs(sidebar_narrow["width"] - 68) < 0.5, sidebar_narrow["width"])

    c.send("Emulation.setDeviceMetricsOverride", {"width": 375, "height": 800, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.2)
    text_mobile = rect(c, ".atlas-brand-text")
    check("Text does not wrap at 375px (single line height)", text_mobile is None or text_mobile["height"] <= 26,
          text_mobile["height"] if text_mobile else None)
    doc_w2 = js(c, "document.documentElement.scrollWidth")
    win_w2 = js(c, "window.innerWidth")
    check("No horizontal overflow at 375px", doc_w2 <= win_w2 + 1, "%s vs %s" % (doc_w2, win_w2))

    c.close()

    print()
    print("%d passed, %d failed (of %d)" % (len(PASS), len(FAIL), len(PASS) + len(FAIL)))
    if FAIL:
        sys.exit(1)


if __name__ == "__main__":
    main()
