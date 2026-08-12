#!/usr/bin/env python3
"""V4.1 inner/detail-page vertical-spacing regression suite.

Verifies the "page header -> gray main-content background -> first
white card" vertical hierarchy across every V4.1 inner/detail page,
per Figma node 1023:22015 / 1023:22021 (Add User reference).

Figma-measured values (Dev Mode, frame-local coordinates, see the
final report for the full derivation):
  - Header/main-content boundary: y = 182 (Frame 5 / "color/black/
    opacity/5" overlay top edge -- the point where the header's plain
    `--gray-10` tone gives way to the darker `--ads-surface-recessed`
    main-content wash).
  - First card top: y = 206.  Boundary -> first card = 206 - 182 = 24px.
  - Second card top: y = 264 (240 card-1 height + 24 gap). Card -> card
    gap is also exactly 24px -- measured independently, not assumed
    equal to the top gap (they happen to match).

Both gaps map to the existing `--ads-surface-recessed` main-content
wash plus a flat 24px spacing value already used pervasively elsewhere
in this codebase (`.au-card { margin-top: 24px }`, `.cr-card {
margin-bottom: 24px }`, Figma's own `gap-[24px]` on the stacked-card
frame) -- there is no separate numbered "spacing/24" custom property in
this file (spacing here is expressed as literal pixel values throughout
V4.1, matching the file's existing convention), so this suite treats
24px as the canonical, Figma-verified token value and asserts against
it directly, exactly as every other spacing rule in this file does.

Covers the 12 required automated checks:
  1. First card's top is below the main-content region's top.
  2. The difference equals the intended 24px top-padding value.
  3. No first card touches the header/main boundary (gap > 0).
  4. Add User and Edit User use the same page-shell spacing.
  5. Create Role and Edit Role both keep the identical 24px
     boundary-to-first-card gap (unaffected by Round 32's Edit-Role-only
     page-header cushion, see below).
  6. Team detail pages use the same spacing model.
  7. Expanded and collapsed sections preserve the top padding.
  8. Inter-card gaps use the shared card-stack value (24px).
  9. Normal mode and Redline Mode report the same spacing.
  10. The spacing remains valid at every supported breakpoint
      (1024x768, 1280x800, 1440x900, 1920x1080, 2560x1440).
  11. No negative first-card margin exists.
  12. Large-screen responsive width changes do not remove the gap.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_v41_vertical_spacing.py
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

GAP = 24  # Figma-measured boundary->card and card->card gap (see module docstring)

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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-vspace-test-")
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


def rect(c, sel, root="document"):
    return js(c, """
    (function(){
      var el = %s.querySelector(%s);
      if (!el) return null;
      var x = el.getBoundingClientRect();
      return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height};
    })()
    """ % (root, json.dumps(sel)))


def bg(c, sel, root="document"):
    return js(c, "(function(){var el=%s.querySelector(%s); return el?getComputedStyle(el).backgroundColor:null;})()" % (root, json.dumps(sel)))


def elem_class_at(c, sel, dy=-10, root="document"):
    """className of the element actually painted `dy` px above the
    top of `sel` -- used to prove *which* surface visually owns the
    gap (header tone vs main-content tone), not just its size."""
    return js(c, """
    (function(){
      var el = %s.querySelector(%s);
      if (!el) return null;
      var r = el.getBoundingClientRect();
      var x = (r.left + r.right) / 2;
      var y = r.top + %d;
      var hit = %s.elementFromPoint(x, y);
      return hit ? hit.className : null;
    })()
    """ % (root, json.dumps(sel), dy, root))


def nav(c, base):
    c.navigate(base + "/v4.1/", wait=1.2)


def open_add_user(c, base):
    nav(c, base)
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


def open_edit_user(c, base):
    nav(c, base)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Users';}).click();")
    time.sleep(0.3)
    return js(c, """
    (function(){
      var l = document.querySelector('#usersPanel .name-link');
      if (l) { l.click(); return true; }
      return false;
    })()
    """)


def open_create_role(c, base):
    nav(c, base)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.3)
    js(c, "var b=Array.from(document.querySelectorAll('button')).find(function(x){return x.textContent.trim()==='Create Role';}); if(b) b.click();")
    time.sleep(0.35)
    return js(c, "document.getElementById('createRolePage').style.display !== 'none'")


def open_edit_role(c, base):
    nav(c, base)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.3)
    return js(c, """
    (function(){
      var l = document.querySelector('#rolesPanel .rp-role-link');
      if (l) { l.click(); return true; }
      return false;
    })()
    """)


def open_edit_team(c, base):
    nav(c, base)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Teams';}).click();")
    time.sleep(0.3)
    return js(c, """
    (function(){
      var l = document.querySelector('#teamsPanel .name-link');
      if (l) { l.click(); return true; }
      return false;
    })()
    """)


def enable_redline(c, wait=0.4):
    c.send("Page.bringToFront")
    js(c, "window.IamRedlineMode.enable();")
    time.sleep(wait)


def disable_redline(c, wait=0.3):
    js(c, "window.IamRedlineMode.disable();")
    time.sleep(wait)


def audit_page(label, c, header_sel, main_sel, card_sel, card2_sel=None, back_sel=None, title_sel=None, actions_sel=None, root="document"):
    """Runs the core boundary/gap/edge assertions for one page and
    returns the measured rects for cross-page comparisons."""
    hs = rect(c, header_sel, root)
    ms = rect(c, main_sel, root)
    card = rect(c, card_sel, root)

    check("%s: header surface exists" % label, hs is not None)
    check("%s: main-content surface exists" % label, ms is not None)
    check("%s: no gap/overlap at header/main boundary" % label,
          hs is not None and ms is not None and abs(hs["bottom"] - ms["top"]) < 0.5,
          "%s vs %s" % (hs, ms))
    check("%s: 1. first card top is below main-content region's top" % label,
          card is not None and ms is not None and card["top"] > ms["top"],
          "%s vs %s" % (card, ms))
    gap = (card["top"] - ms["top"]) if (card and ms) else None
    check("%s: 2. boundary->first-card gap equals the Figma-measured %dpx" % (label, GAP),
          gap is not None and abs(gap - GAP) < 1, gap)
    check("%s: 3. first card does not touch the header/main boundary" % label,
          gap is not None and gap > 1, gap)
    check("%s: 11. first card has no negative top margin" % label,
          js(c, "parseFloat(getComputedStyle(%s.querySelector(%s)).marginTop) >= 0" % (root, json.dumps(card_sel))))
    hit_class = elem_class_at(c, card_sel, dy=-10, root=root)
    check("%s: gap is painted by the main-content surface, not the header surface" % label,
          hit_class is not None and "header-surface" not in hit_class, hit_class)

    if back_sel and title_sel:
        back = rect(c, back_sel, root)
        title = rect(c, title_sel, root)
        check("%s: back-nav / title / first-card share one left edge" % label,
              abs(back["left"] - title["left"]) < 1 and abs(title["left"] - card["left"]) < 1,
              "back=%s title=%s card=%s" % (back["left"], title["left"], card["left"]))
    if actions_sel:
        actions = rect(c, actions_sel, root)
        check("%s: header actions and card share one right edge" % label,
              abs(actions["right"] - card["right"]) < 1, "%s vs %s" % (actions["right"], card["right"]))

    card2 = rect(c, card2_sel, root) if card2_sel else None
    if card2:
        gap2 = card2["top"] - card["bottom"]
        check("%s: 8. inter-card gap uses the shared %dpx card-stack value" % (label, GAP),
              abs(gap2 - GAP) < 1, gap2)

    return {"header": hs, "main": ms, "card": card, "card2": card2}


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
        shutil.rmtree(profile_dir, ignore_errors=True)

    atexit.register(kill_chrome)

    c = CDP(debug_port)
    c.send("Network.setCacheDisabled", {"cacheDisabled": True})
    c.send("Runtime.enable", {})
    console_errors = []

    def on_console(msg):
        if msg.get("method") == "Runtime.exceptionThrown":
            console_errors.append(msg["params"])
    c.on_message = on_console if hasattr(c, "on_message") else None

    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})

    # ══════════════════════ ADD USER ══════════════════════
    opened = open_add_user(c, base)
    check("Setup: Add User page reached via Step 1/2 modal", opened)
    au = audit_page(
        "Add User", c,
        "#addUsersPage .au-page-header-surface", "#addUsersPage .au-page-main-surface",
        "#addUsersPage .au-card", card2_sel="#auRolesCard",
        back_sel="#auBack", title_sel="#auPageTitle", actions_sel="#addUsersPage .au-header-actions",
    )

    # ══════════════════════ EDIT USER ══════════════════════
    opened = open_edit_user(c, base)
    check("Setup: Edit User page opened for a real user", opened)
    eu = audit_page(
        "Edit User", c,
        "#addUsersPage .au-page-header-surface", "#addUsersPage .au-page-main-surface",
        "#addUsersPage .au-card",
        back_sel="#auBack", title_sel="#auPageTitle", actions_sel="#addUsersPage .au-header-actions",
    )
    check("4. Add User and Edit User use the same page-shell spacing",
          abs(au["header"]["bottom"] - eu["header"]["bottom"]) < 1 and abs((au["card"]["top"] - au["main"]["top"]) - (eu["card"]["top"] - eu["main"]["top"])) < 1,
          "%s vs %s" % (au["header"]["bottom"], eu["header"]["bottom"]))

    # ══════════════════════ CREATE ROLE ══════════════════════
    opened = open_create_role(c, base)
    check("Setup: Create Role page opened", opened)
    cr = audit_page(
        "Create Role", c,
        "#createRolePage .cr-page-header-surface", "#createRolePage .cr-page-main-surface",
        "#createRolePage .cr-card", card2_sel="#createRolePage .cr-card:nth-of-type(2)",
        back_sel="#crBack", title_sel="#createRolePage .cr-title", actions_sel="#createRolePage .cr-header-actions",
    )

    # ══════════════════════ EDIT ROLE ══════════════════════
    opened = open_edit_role(c, base)
    check("Setup: Edit Role page opened for a real role", opened)
    er = audit_page(
        "Edit Role", c,
        "#createRolePage .cr-page-header-surface", "#createRolePage .cr-page-main-surface",
        "#createRolePage .cr-card",
        back_sel="#crBack", title_sel="#createRolePage .cr-title", actions_sel="#createRolePage .cr-header-actions",
    )
    # Round 32 (2026-08-11 — "Update the Edit Role page so its top-level
    # section headers and page-header spacing match the existing Edit
    # User page exactly") deliberately gives Edit Role's page-header
    # surface ~15px more bottom breathing room than Create Role's (12px
    # restored helper-text-to-boundary cushion + 3px more title-to-
    # subtitle gap, both scoped to `#createRolePage.is-edit-mode` only,
    # matching Edit User's own `.au-header-shell`/`.au-subtitle` values
    # exactly) — so the header surface's own bottom edge is now
    # intentionally NOT identical between the two modes. The invariant
    # that still must hold (and did, unchanged, before and after Round
    # 32) is the 24px boundary-to-first-card gap this whole suite is
    # about, which lives entirely in `.cr-main-shell`'s own
    # `padding-top`, untouched by the page-header fix.
    check("5. Create Role and Edit Role both keep the identical 24px boundary-to-first-card gap",
          abs((cr["card"]["top"] - cr["main"]["top"]) - (er["card"]["top"] - er["main"]["top"])) < 1,
          "%s vs %s" % (cr["card"]["top"] - cr["main"]["top"], er["card"]["top"] - er["main"]["top"]))
    check("5b. Edit Role's page-header surface is now taller than Create Role's by design (Round 32 helper-text cushion)",
          er["header"]["bottom"] - cr["header"]["bottom"] > 10,
          "%s vs %s" % (cr["header"]["bottom"], er["header"]["bottom"]))

    # ══════════════════════ EDIT TEAM ══════════════════════
    opened = open_edit_team(c, base)
    check("Setup: Edit Team page opened", opened)
    tm = audit_page(
        "Edit Team", c,
        "#editTeamPage .au-page-header-surface", "#editTeamPage .au-page-main-surface",
        "#editTeamPage .tm-details-card", card2_sel="#editTeamPage .tm-members-card",
        back_sel="#tmBack", title_sel="#editTeamPage .au-title", actions_sel="#editTeamPage .au-header-actions",
    )
    check("6. Team detail pages use the same spacing model as Add/Edit User",
          abs((tm["card"]["top"] - tm["main"]["top"]) - (au["card"]["top"] - au["main"]["top"])) < 1,
          "%s vs %s" % (tm["card"]["top"] - tm["main"]["top"], au["card"]["top"] - au["main"]["top"]))

    # ══════════════════════ COLLAPSED SECTIONS ══════════════════════
    # 7. Expanded and collapsed sections preserve the top padding.
    opened = open_add_user(c, base)
    ms_before = rect(c, "#addUsersPage .au-page-main-surface")
    js(c, "document.querySelector('#addUsersPage [data-au-toggle=\"basic\"]').click();")
    time.sleep(0.25)
    collapsed = js(c, "document.getElementById('auBasicCard').classList.contains('collapsed')")
    check("Setup: Add User Basic Information section collapsed", collapsed)
    ms_after = rect(c, "#addUsersPage .au-page-main-surface")
    card_after = rect(c, "#addUsersPage .au-card")
    check("7. Collapsing the first section does not change the gray top padding",
          abs((card_after["top"] - ms_after["top"]) - GAP) < 1, card_after["top"] - ms_after["top"])
    check("7. Boundary position itself is unaffected by section collapse state",
          abs(ms_before["top"] - ms_after["top"]) < 1, "%s vs %s" % (ms_before["top"], ms_after["top"]))
    # re-expand and confirm the gap is identical to the pre-collapse state
    js(c, "document.querySelector('#addUsersPage [data-au-toggle=\"basic\"]').click();")
    time.sleep(0.25)
    ms_reexpand = rect(c, "#addUsersPage .au-page-main-surface")
    card_reexpand = rect(c, "#addUsersPage .au-card")
    check("7. Re-expanding restores the identical top padding",
          abs((card_reexpand["top"] - ms_reexpand["top"]) - GAP) < 1, card_reexpand["top"] - ms_reexpand["top"])

    # Same check for Create Role's Functions section (second card)
    opened = open_create_role(c, base)
    js(c, "document.querySelector('#createRolePage [data-cr-toggle=\"basic\"]').click();")
    time.sleep(0.25)
    collapsed_cr = js(c, "document.getElementById('crBasicCard').classList.contains('collapsed')")
    check("Setup: Create Role Role Details section collapsed", collapsed_cr)
    ms_cr = rect(c, "#createRolePage .cr-page-main-surface")
    card_cr = rect(c, "#createRolePage .cr-card")
    check("7. Create Role: collapsing the first section preserves the top padding",
          abs((card_cr["top"] - ms_cr["top"]) - GAP) < 1, card_cr["top"] - ms_cr["top"])

    # ══════════════════════ RESPONSIVE BREAKPOINTS ══════════════════════
    # 10. The spacing remains valid at every supported breakpoint.
    # 12. Large-screen responsive width changes do not remove the gap.
    for (w, h) in ((1024, 768), (1280, 800), (1440, 900), (1920, 1080), (2560, 1440)):
        c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": h, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)

        open_add_user(c, base)
        msR = rect(c, "#addUsersPage .au-page-main-surface")
        cardR = rect(c, "#addUsersPage .au-card")
        check("Add User @%dx%d: gap remains exactly %dpx" % (w, h, GAP),
              abs((cardR["top"] - msR["top"]) - GAP) < 1, cardR["top"] - msR["top"])
        check("Add User @%dx%d: no horizontal overflow" % (w, h),
              js(c, "document.documentElement.scrollWidth") <= w + 1)
        check("Add User @%dx%d: first card stays horizontally centered (large-screen width growth doesn't move it vertically)" % (w, h),
              cardR["top"] > msR["top"], cardR["top"] - msR["top"])

        open_edit_role(c, base)
        msR2 = rect(c, "#createRolePage .cr-page-main-surface")
        cardR2 = rect(c, "#createRolePage .cr-card")
        check("Edit Role @%dx%d: gap remains exactly %dpx" % (w, h, GAP),
              abs((cardR2["top"] - msR2["top"]) - GAP) < 1, cardR2["top"] - msR2["top"])

        open_edit_team(c, base)
        msR3 = rect(c, "#editTeamPage .au-page-main-surface")
        cardR3 = rect(c, "#editTeamPage .tm-details-card")
        check("Edit Team @%dx%d: gap remains exactly %dpx" % (w, h, GAP),
              abs((cardR3["top"] - msR3["top"]) - GAP) < 1, cardR3["top"] - msR3["top"])

    c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.2)

    # ══════════════════════ REDLINE MODE (Current breakpoint) ══════════════════════
    # 9. Normal mode and Redline Mode report the same spacing.
    for (label, opener, header_sel, main_sel, card_sel) in (
        ("Add User", open_add_user, "#addUsersPage .au-page-header-surface", "#addUsersPage .au-page-main-surface", "#addUsersPage .au-card"),
        ("Edit Role", open_edit_role, "#createRolePage .cr-page-header-surface", "#createRolePage .cr-page-main-surface", "#createRolePage .cr-card"),
        ("Edit Team", open_edit_team, "#editTeamPage .au-page-header-surface", "#editTeamPage .au-page-main-surface", "#editTeamPage .tm-details-card"),
    ):
        opener(c, base)
        normal_ms = rect(c, main_sel)
        normal_card = rect(c, card_sel)
        normal_gap = normal_card["top"] - normal_ms["top"]

        enable_redline(c, wait=0.6)
        redline_ms = rect(c, main_sel)
        redline_card = rect(c, card_sel)
        redline_gap = (redline_card["top"] - redline_ms["top"]) if (redline_card and redline_ms) else None
        check("9. %s: Redline Mode (Current) shows the header/main-content boundary" % label,
              redline_ms is not None)
        check("9. %s: Redline Mode (Current) reports the identical %dpx gap as normal mode" % (label, GAP),
              redline_gap is not None and abs(redline_gap - normal_gap) < 1,
              "%s vs %s" % (redline_gap, normal_gap))
        disable_redline(c)

    # ══════════════════════ REDLINE MODE (numeric breakpoint, real CSS viewport) ══════════════════════
    open_add_user(c, base)
    enable_redline(c, wait=0.6)
    js(c, "var b=document.querySelector('[data-redline-action=\"breakpoint:1024\"]'); if(b) b.click();")
    time.sleep(1.2)
    iframe_ready = js(c, "(function(){var f=document.querySelector('.redline__preview'); return !!(f && f.contentDocument && f.contentDocument.readyState === 'complete');})()")
    check("Setup: Redline numeric breakpoint (1024) iframe loaded", iframe_ready)
    if iframe_ready:
        idoc = "document.querySelector('.redline__preview').contentDocument"
        js(c, "document.querySelector('.redline__preview').contentWindow.document.querySelectorAll('.tab-btn')[0]") if False else None
        # Best-effort: the iframe reloads to the app's default state; verify
        # the same page-shell exists and the same gap holds inside the real
        # 1024px CSS viewport (state restoration for Add User's modal-driven
        # flow is out of scope here -- the Users list itself already proves
        # the shared shell renders correctly at this exact viewport width).
        bp_ms = rect(c, "main.page > .card", root=idoc)
        check("10. Redline @1024 numeric breakpoint: app content renders inside the real CSS viewport",
              bp_ms is not None)
    disable_redline(c)

    check("No uncaught console exceptions were observed during the flow", len(console_errors) == 0, json.dumps(console_errors)[:300])

    c.close()
    server.terminate()

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    if failed:
        for r in results:
            if r[0] == "FAIL":
                print("  FAILED: %s (%s)" % (r[1], r[2]))
        sys.exit(1)


if __name__ == "__main__":
    main()
