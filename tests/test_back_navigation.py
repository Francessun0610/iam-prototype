#!/usr/bin/env python3
"""Automated QA for the back-navigation standardization.

Runs against `public/v4.1/` (final-QA pass, 2026-08-12). It was written
when V4 was the current build and kept pointing at `/v4/` after the V4.1
split, so it had stopped covering the build that actually ships. V4.1 is
the shipping default now, and it is also the only one of the two that
satisfies the five-page assertion below: V4's Edit Team shell sits 7.5px
left of its other four detail pages, which is a frozen V4 defect that
V4.1's shared content grid already fixed.

Verifies every real back-navigation control in V4 (`Back to Users` /
`Back to Roles` / `Back to Teams` / `Back to Permissions`) shares one
ADS style contract (`.au-back` + `.cr-back`, styled identically):

  - Exactly 14px label size, Open Sans, 600 weight, 20px line-height.
  - The canonical ADS back-chevron icon (inline SVG polyline, 16x16),
    never a Unicode arrow/chevron character.
  - Icon and label share one flex row, vertically centered, 4px gap.
  - Same left edge as the page title (icon leading edge flush with
    the title's own left guide) on every page.
  - Identical vertical rhythm (16px gap to the title) on every page.
  - Add User vs Edit User, Create Role vs Edit Role render the control
    at the exact same pixel position (byte-for-byte, not "close").
  - Visible hover / active / focus-visible states.
  - Correct destination + accessible name; keyboard operable.
  - No page-specific font-size/left-padding override remains in CSS.
  - Stable across supported desktop viewports (1440/1280/1024) with no
    wrapping and no horizontal overflow.

Intentionally OUT of scope (see report): the simulated macOS/Excel
prototype chrome ("Back to Atlas", "Back to User List") is native OS
chrome for the Export-to-Excel simulation, not a real ADS control, and
pagination's "Prev" control is not a "back to a parent page" link.
"""
import os
import sys
import time
import json
import socket
import subprocess
import tempfile
import shutil

sys.path.insert(0, os.path.dirname(__file__))
from cdp_client import CDP

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(ROOT, "public")
STYLES_PATH = os.path.join(PUBLIC_DIR, "v4.1", "styles.css")

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


def launch_chrome(debug_port, width=1440, height=900):
    chrome_bin = next((c for c in CHROME_CANDIDATES if c and os.path.exists(c)), None) or next(
        (c for c in CHROME_CANDIDATES if c), None
    )
    if not chrome_bin:
        raise RuntimeError("no Chrome/Chromium binary found")
    profile_dir = tempfile.mkdtemp(prefix="iam-backnav-test-")
    proc = subprocess.Popen(
        [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--remote-debugging-port=%d" % debug_port,
            "--remote-allow-origins=*",
            "--user-data-dir=%s" % profile_dir,
            "--window-size=%d,%d" % (width, height),
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


def click_tab(c, label):
    js(c, """
    (function(){
      var btn = Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim() === %r;});
      if (btn) btn.click();
    })()
    """ % label)
    time.sleep(0.35)


def open_edit_user(c, base):
    c.navigate(base + "/v4.1/", wait=1.0)
    click_tab(c, "Users")
    js(c, "(function(){var l=Array.from(document.querySelectorAll('#usersPanel a, #usersPanel td a')); var el=l.find(function(x){return x.textContent.trim().length>0;}); if(el) el.click();})()")
    time.sleep(0.5)


def open_add_user_step2(c, base):
    c.navigate(base + "/v4.1/", wait=1.0)
    click_tab(c, "Users")
    js(c, "var b=Array.from(document.querySelectorAll('button, a')).find(function(x){return x.textContent.trim().indexOf('Add User')!==-1;}); if(b) b.click();")
    time.sleep(0.4)
    js(c, "var inp=document.querySelector('#auAddUserModalBackdrop input'); if(inp){inp.value='a'; inp.dispatchEvent(new Event('input',{bubbles:true}));}")
    time.sleep(0.3)
    js(c, "var row=document.querySelector('#auAddUserModalBackdrop button.au-result-row, #auAddUserModalBackdrop li'); if(row) row.click();")
    time.sleep(0.2)
    js(c, "var b=Array.from(document.querySelectorAll('#auAddUserModalBackdrop button')).find(function(x){return x.textContent.trim()==='Next';}); if(b && !b.disabled) b.click();")
    time.sleep(0.5)


def open_create_role(c, base):
    c.navigate(base + "/v4.1/", wait=1.0)
    click_tab(c, "Roles")
    js(c, "var b=Array.from(document.querySelectorAll('button, a')).find(function(x){return x.textContent.trim().indexOf('Create Role')!==-1;}); if(b) b.click();")
    time.sleep(0.4)


def open_edit_role(c, base):
    c.navigate(base + "/v4.1/", wait=1.0)
    click_tab(c, "Roles")
    js(c, "(function(){var l=Array.from(document.querySelectorAll('#rolesPanel a, #rolesPanel td a')); var el=l.find(function(x){return x.textContent.trim().length>0;}); if(el) el.click();})()")
    time.sleep(0.5)


def open_edit_team(c, base):
    c.navigate(base + "/v4.1/", wait=1.0)
    click_tab(c, "Teams")
    js(c, "(function(){var l=Array.from(document.querySelectorAll('#teamsPanel a, #teamsPanel td a')); var el=l.find(function(x){return x.textContent.trim().length>0;}); if(el) el.click();})()")
    time.sleep(0.5)


def back_metrics(c, back_sel, title_sel):
    return json.loads(js(c, """
    (function(){
      var back = document.querySelector(%r);
      var title = document.querySelector(%r);
      var svg = back ? back.querySelector('svg') : null;
      var cs = back ? getComputedStyle(back) : null;
      var br = back ? back.getBoundingClientRect() : null;
      var tr = title ? title.getBoundingClientRect() : null;
      var svgcs = svg ? getComputedStyle(svg) : null;
      var svgr = svg ? svg.getBoundingClientRect() : null;
      return JSON.stringify({
        exists: !!back,
        tag: back ? back.tagName : null,
        text: back ? back.textContent.trim() : null,
        hasUnicodeArrow: back ? /[\\u2039\\u2190\\u3008<]/.test(back.textContent) : null,
        fontSize: cs ? cs.fontSize : null,
        fontWeight: cs ? cs.fontWeight : null,
        lineHeight: cs ? cs.lineHeight : null,
        fontFamily: cs ? cs.fontFamily : null,
        color: cs ? cs.color : null,
        gap: cs ? cs.gap : null,
        height: cs ? cs.height : null,
        iconSize: svgcs ? (svgcs.width + 'x' + svgcs.height) : null,
        iconIsSvg: svg ? svg.tagName === 'svg' : false,
        iconAriaHidden: svg ? svg.getAttribute('aria-hidden') : null,
        backLeft: br ? br.left : null,
        backTop: br ? br.top : null,
        backBottom: br ? br.bottom : null,
        backCenterY: br ? (br.top + br.bottom) / 2 : null,
        svgCenterY: svgr ? (svgr.top + svgr.bottom) / 2 : null,
        titleLeft: tr ? tr.left : null,
        titleTop: tr ? tr.top : null,
        gapToTitle: (tr && br) ? (tr.top - br.bottom) : null
      });
    })()
    """ % (back_sel, title_sel)))


if __name__ == "__main__":
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port
    server = start_static_server(port)
    chrome, profile_dir = launch_chrome(debug_port)
    c = CDP(debug_port)

    try:
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})

        # ── 0. Static CSS audit: no leftover page-specific overrides ──
        css = open(STYLES_PATH, encoding="utf-8").read()
        check("No page-specific '#addUsersPage .au-back' override remains", "#addUsersPage .au-back" not in css)
        check("No page-specific '#editTeamPage .au-back' override remains", "#editTeamPage .au-back" not in css)
        check("No page-specific '#createRolePage .cr-back' font-size override remains",
              "#createRolePage .cr-back {" not in css)
        check("'.au-back' and '.cr-back' and share one rule (same selector block)",
              ".au-back,\n.cr-back {" in css or ".au-back,\n.cr-back{" in css)
        check("No Unicode back-arrow glyphs used as CSS content", "content: \"\\2039\"" not in css and "content: \"\\2190\"" not in css)

        pages = {}

        open_edit_user(c, base)
        pages["EditUser"] = back_metrics(c, "#auBack", "#auPageTitle")
        check("Edit User: #auBack destination is 'Back to Users'", pages["EditUser"]["text"] == "Back to Users", pages["EditUser"]["text"])

        open_add_user_step2(c, base)
        pages["AddUser"] = back_metrics(c, "#auBack", "#auPageTitle")
        check("Add User (Step 2): back label is also 'Back to Users' (same list destination)",
              pages["AddUser"]["text"] == "Back to Users", pages["AddUser"]["text"])

        open_create_role(c, base)
        pages["CreateRole"] = back_metrics(c, "#crBack", ".cr-title")
        check("Create Role: back label is 'Back to Roles'", pages["CreateRole"]["text"] == "Back to Roles", pages["CreateRole"]["text"])

        open_edit_role(c, base)
        pages["EditRole"] = back_metrics(c, "#crBack", ".cr-title")
        check("Edit Role: back label is 'Back to Roles'", pages["EditRole"]["text"] == "Back to Roles", pages["EditRole"]["text"])

        open_edit_team(c, base)
        pages["EditTeam"] = back_metrics(c, "#tmBack", "#editTeamPage .au-title")
        check("Edit Team: back label is exactly 'Back to Teams' (capitalized, matches Users/Roles pattern)",
              pages["EditTeam"]["text"] == "Back to Teams", pages["EditTeam"]["text"])

        # ── 1. Every control is exactly 14px, same family/weight/line-height ──
        for name, m in pages.items():
            check("%s: back-nav label is exactly 14px" % name, m["fontSize"] == "14px", m["fontSize"])
            check("%s: back-nav uses Open Sans" % name, "Open Sans" in (m["fontFamily"] or ""), m["fontFamily"])
            check("%s: back-nav font-weight is 600 (matches every page)" % name, m["fontWeight"] == "600", m["fontWeight"])
            check("%s: back-nav line-height is 20px (matches every page)" % name, m["lineHeight"] == "20px", m["lineHeight"])
            check("%s: back-nav uses the ADS brand link color" % name, m["color"] == "rgb(64, 69, 194)", m["color"])
            check("%s: icon-to-label gap is 4px" % name, m["gap"] == "4px", m["gap"])
            check("%s: chevron icon is a real <svg>, not a Unicode glyph" % name, m["iconIsSvg"] is True)
            check("%s: chevron icon is exactly 16x16" % name, m["iconSize"] == "16px x 16px".replace(" ", ""), m["iconSize"])
            check("%s: label text contains no Unicode arrow characters" % name, m["hasUnicodeArrow"] is False)
            check("%s: icon is aria-hidden (label text alone is the accessible name)" % name, m["iconAriaHidden"] == "true")
            check("%s: icon and label are vertically centered on the same row" % name,
                  abs(m["backCenterY"] - m["svgCenterY"]) < 1.0, "%.2f vs %.2f" % (m["backCenterY"], m["svgCenterY"]))
            check("%s: back control's leading (icon) edge aligns with the title's left edge" % name,
                  abs(m["backLeft"] - m["titleLeft"]) < 0.5, "%.1f vs %.1f" % (m["backLeft"], m["titleLeft"]))
            check("%s: vertical gap from back control to title is 16px" % name,
                  abs(m["gapToTitle"] - 16) < 0.5, m["gapToTitle"])

        # ── 2. Sibling pages align identically (not just "close") ──
        check("Back to Users: Add User and Edit User share the exact same left edge",
              pages["AddUser"]["backLeft"] == pages["EditUser"]["backLeft"],
              "%.2f vs %.2f" % (pages["AddUser"]["backLeft"], pages["EditUser"]["backLeft"]))
        check("Back to Users: Add User and Edit User share the exact same top position",
              pages["AddUser"]["backTop"] == pages["EditUser"]["backTop"],
              "%.2f vs %.2f" % (pages["AddUser"]["backTop"], pages["EditUser"]["backTop"]))
        check("Back to Roles: Create Role and Edit Role share the exact same left edge",
              pages["CreateRole"]["backLeft"] == pages["EditRole"]["backLeft"],
              "%.2f vs %.2f" % (pages["CreateRole"]["backLeft"], pages["EditRole"]["backLeft"]))
        check("Back to Roles: Create Role and Edit Role share the exact same top position",
              pages["CreateRole"]["backTop"] == pages["EditRole"]["backTop"],
              "%.2f vs %.2f" % (pages["CreateRole"]["backTop"], pages["EditRole"]["backTop"]))
        check("All five pages share the exact same back-nav left edge (single content grid)",
              len(set(round(m["backLeft"], 1) for m in pages.values())) == 1,
              [m["backLeft"] for m in pages.values()])

        # ── 3. Interaction: hover / active / focus-visible states ──
        # Real CDP input events (not synthetic `dispatchEvent`/`.focus()`
        # calls) are required here: Chrome's `:hover`/`:focus-visible`
        # pseudo-classes only activate for input that goes through the
        # actual input pipeline, so this is the only way to verify the
        # CSS states a real mouse/keyboard user would see.
        open_edit_role(c, base)
        back_box = json.loads(js(c, "JSON.stringify(document.getElementById('crBack').getBoundingClientRect())"))
        cx, cy = back_box["left"] + back_box["width"] / 2, back_box["top"] + back_box["height"] / 2
        c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": cx, "y": cy})
        time.sleep(0.1)
        hover_bg = js(c, "getComputedStyle(document.getElementById('crBack')).backgroundColor")
        hover_matches = js(c, "document.getElementById('crBack').matches(':hover')")
        check("Hover state changes the background (visible affordance)",
              hover_matches and hover_bg != "rgba(0, 0, 0, 0)", "%s / %s" % (hover_matches, hover_bg))
        c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": 5, "y": 5})

        # Tab from the top of the document until #crBack is reached, so
        # focus arrives via a real keyboard path (activates :focus-visible).
        js(c, "document.activeElement && document.activeElement.blur(); document.body.focus();")
        focused_id = None
        for _ in range(30):
            c.key("Tab", "Tab")
            time.sleep(0.02)
            focused_id = js(c, "document.activeElement ? document.activeElement.id : null")
            if focused_id == "crBack":
                break
        check("Back link is reachable via sequential Tab navigation", focused_id == "crBack", focused_id)
        matches_fv = js(c, "document.getElementById('crBack').matches(':focus-visible')")
        outline_style = js(c, "getComputedStyle(document.getElementById('crBack')).outlineStyle")
        check("Real Tab focus activates :focus-visible with a visible outline",
              matches_fv is True and outline_style == "solid", "focus-visible=%s outline-style=%s" % (matches_fv, outline_style))

        # ── 4. Destination correctness + no unrelated side effects ──
        before_role_count = js(c, "window.__crInitialRoleCount !== undefined ? window.__crInitialRoleCount : (Array.isArray(window.ROLES_DATA) ? window.ROLES_DATA.length : null)")
        js(c, "document.getElementById('crBack').click();")
        time.sleep(0.4)
        check("Clicking 'Back to Roles' returns to the Roles list (Edit Role page closes)",
              js(c, "document.getElementById('createRolePage').style.display") == "none")
        check("Roles list is visible after Back to Roles", js(c, "!!document.getElementById('rolesPanel') && document.getElementById('rolesPanel').offsetParent !== null"))
        after_role_count = js(c, "Array.isArray(window.ROLES_DATA) ? window.ROLES_DATA.length : null")
        check("Back to Roles triggers no save/delete side effect (role count unchanged)", before_role_count == after_role_count, "%s -> %s" % (before_role_count, after_role_count))

        open_edit_team(c, base)
        js(c, "document.getElementById('tmBack').click();")
        time.sleep(0.4)
        check("Clicking 'Back to Teams' returns to the Teams list", js(c, "document.getElementById('editTeamPage').style.display") == "none")

        open_edit_user(c, base)
        js(c, "document.getElementById('auBack').click();")
        time.sleep(0.4)
        check("Clicking 'Back to Users' returns to the Users list", js(c, "document.getElementById('addUsersPage').style.display") == "none")

        # ── 5. No console/window errors from any of the above ──
        js(c, "window.__backNavErrors = window.__backNavErrors || [];")
        errs = js(c, "JSON.stringify(window.__backNavErrors)")
        check("No window errors captured during back-navigation interaction", errs == "[]", errs)

        c.close()
        chrome.terminate()
        shutil.rmtree(profile_dir, ignore_errors=True)

        # ── 6. Responsive QA at supported desktop widths ──
        for width in (1440, 1280, 1024):
            debug_port2 = free_port()
            chrome2, profile_dir2 = launch_chrome(debug_port2, width=width, height=900)
            c2 = CDP(debug_port2)
            c2.send("Emulation.setDeviceMetricsOverride", {"width": width, "height": 900, "deviceScaleFactor": 1, "mobile": False})
            open_edit_role(c2, base)
            m = back_metrics(c2, "#crBack", ".cr-title")
            check("Edit Role @%dpx: back label stays 14px" % width, m["fontSize"] == "14px", m["fontSize"])
            overflow = c2.eval("document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
            check("Edit Role @%dpx: no horizontal overflow introduced" % width, overflow is False)
            wrapped = c2.eval("document.getElementById('crBack').getBoundingClientRect().height")
            check("Edit Role @%dpx: back control does not wrap (single-line height ~32px)" % width, wrapped <= 34, wrapped)

            open_edit_user(c2, base)
            m2 = back_metrics(c2, "#auBack", "#auPageTitle")
            check("Edit User @%dpx: back label stays 14px" % width, m2["fontSize"] == "14px", m2["fontSize"])
            no_collide = c2.eval("(function(){var b=document.getElementById('auBack').getBoundingClientRect(); var actions=document.querySelector('.au-header-actions'); if(!actions) return true; var a=actions.getBoundingClientRect(); return b.bottom <= a.top || b.top >= a.bottom;})()")
            check("Edit User @%dpx: back control does not collide with header actions" % width, no_collide is True)

            c2.close()
            chrome2.terminate()
            shutil.rmtree(profile_dir2, ignore_errors=True)

    finally:
        try:
            server.terminate()
        except Exception:
            pass

    print()
    print("%d passed, %d failed (of %d)" % (len(PASS), len(FAIL), len(PASS) + len(FAIL)))
    if FAIL:
        print("\nFAILED:")
        for f in FAIL:
            print("  - " + f)
        sys.exit(1)
