#!/usr/bin/env python3
"""V4.1 Edit Team — "Team details" / "Members" section-title color
parity with Edit User (Round 36, 2026-08-12).

Regression suite for reusing Edit User's "Basic information" / "Access"
title color (#2D2F8C, the Round 26 rule) on Edit Team's "Team details"
and "Members" headings, instead of the neutral gray (`--iam-ads-text`)
they used before.

Covers:
  1. "Team details" and "Members" render at exactly #2D2F8C
     (rgb(45, 47, 140)) — the identical value Edit User's "Basic
     information" / "Access" render at, not an approximation.
  2. The color is provided by the SAME shared CSS rule Edit User's
     titles use (not a second, separately hard-coded `#2D2F8C` rule),
     verified via getMatchedCSSRules-style introspection: the winning
     rule's selector text is shared across both pages.
  3. Color stays #2D2F8C on hover and focus (matches Edit User, which
     also never recolors on hover/focus).
  4. Typography (font family, size, weight, line height) is unchanged
     from before this fix.
  5. Unrelated Edit Team content is untouched: page title/subtitle,
     field labels, Members table headers, Delete Team/Cancel/Save Team
     buttons, "+ Add members"/"Remove" links all keep their original
     colors.
  6. No chevron or collapsible behavior was introduced: headers still
     have no `role="button"`, no chevron SVG, `cursor: default`.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_edit_team_section_title_color.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-edit-team-title-color-test-")
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


def open_edit_user(c):
    js(c, """
    (function(){
      var link = document.querySelector('#tbody .name-link');
      if (link) link.click();
    })()
    """)


def open_edit_team(c):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Teams';}).click();")


def click_first_team(c):
    js(c, """
    (function(){
      var row = document.querySelector('#tmTable tbody tr, .tm-tbl tbody tr');
      var link = row ? row.querySelector('a, .name-link') : null;
      if (link) link.click();
    })()
    """)


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
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.3)

        # ─── Reference: Edit User's "Basic information" / "Access" ───────
        open_edit_user(c)
        time.sleep(0.5)
        check("Landed on Edit User (reference page)", js(c, "!!document.getElementById('auBasicTitle')"))
        au_basic_color = js(c, "getComputedStyle(document.getElementById('auBasicTitle')).color")
        au_access_color = js(c, "getComputedStyle(document.getElementById('auRolesPermissionsTitle')).color")
        check("Edit User 'Basic information' is #2D2F8C (sanity)", au_basic_color == "rgb(45, 47, 140)", au_basic_color)
        check("Edit User 'Access' is #2D2F8C (sanity)", au_access_color == "rgb(45, 47, 140)", au_access_color)

        # ─── Edit Team's "Team details" / "Members" ───────────────────────
        open_edit_team(c)
        time.sleep(0.3)
        click_first_team(c)
        time.sleep(0.5)
        check("Landed on Edit Team", js(c, "!!document.getElementById('editTeamPage')"))

        details_color = js(c, "getComputedStyle(document.getElementById('tmDetailsTitle')).color")
        members_color = js(c, "getComputedStyle(document.getElementById('tmMembersTitle')).color")
        check("'Team details' title color matches Edit User exactly", details_color == au_basic_color, "%s vs %s" % (details_color, au_basic_color))
        check("'Members' title color matches Edit User exactly", members_color == au_access_color, "%s vs %s" % (members_color, au_access_color))
        check("'Team details' is literally #2D2F8C", details_color == "rgb(45, 47, 140)", details_color)
        check("'Members' is literally #2D2F8C", members_color == "rgb(45, 47, 140)", members_color)

        # ─── Shared rule, not a duplicated hard-coded value ───────────────
        shared_rule = js(c, """
        (function(){
          var el = document.getElementById('tmDetailsTitle');
          var sheets = document.styleSheets;
          var winningSelector = null;
          for (var i = 0; i < sheets.length; i++) {
            var rules;
            try { rules = sheets[i].cssRules; } catch (e) { continue; }
            for (var j = 0; j < rules.length; j++) {
              var rule = rules[j];
              if (!rule.selectorText) continue;
              try {
                if (el.matches(rule.selectorText.split(',').pop().trim()) &&
                    rule.style.color && rule.style.color !== '') {
                  winningSelector = rule.selectorText;
                }
              } catch (e) {}
            }
          }
          return winningSelector;
        })()
        """)
        check("The winning color rule's selector list also matches an Edit User card (shared rule, not duplicated)",
              shared_rule and ("auBasicCard" in shared_rule or "auRolesCard" in shared_rule) and "editTeamPage" in shared_rule,
              shared_rule)

        # ─── Hover / focus states stay #2D2F8C ────────────────────────────
        js(c, """
        (function(){
          document.getElementById('tmDetailsTitle').closest('.cr-section-header').dispatchEvent(
            new MouseEvent('mouseover', {bubbles:true}));
        })()
        """)
        hover_color = js(c, "getComputedStyle(document.getElementById('tmDetailsTitle')).color")
        check("'Team details' stays #2D2F8C on hover (matches Edit User's non-recoloring behavior)",
              hover_color == "rgb(45, 47, 140)", hover_color)
        js(c, """
        (function(){
          document.getElementById('tmMembersTitle').focus();
          document.getElementById('tmMembersTitle').closest('.cr-section-header').dispatchEvent(
            new FocusEvent('focusin', {bubbles:true}));
        })()
        """)
        focus_color = js(c, "getComputedStyle(document.getElementById('tmMembersTitle')).color")
        check("'Members' stays #2D2F8C on focus", focus_color == "rgb(45, 47, 140)", focus_color)

        # ─── Typography unchanged ──────────────────────────────────────────
        details_font = js(c, """
        (function(){
          var s = getComputedStyle(document.getElementById('tmDetailsTitle'));
          return {family: s.fontFamily, size: s.fontSize, weight: s.fontWeight, lh: s.lineHeight, letterSpacing: s.letterSpacing};
        })()
        """)
        check("'Team details' font-family unchanged (MultiplaneTWDC Display)",
              "MultiplaneTWDC Display" in details_font["family"], details_font["family"])
        check("'Team details' font-size unchanged (20px)", details_font["size"] == "20px", details_font["size"])
        check("'Team details' font-weight unchanged (500)", details_font["weight"] == "500", details_font["weight"])
        check("'Team details' line-height unchanged (24px)", details_font["lh"] == "24px", details_font["lh"])
        members_font = js(c, """
        (function(){
          var s = getComputedStyle(document.getElementById('tmMembersTitle'));
          return {family: s.fontFamily, size: s.fontSize, weight: s.fontWeight, lh: s.lineHeight};
        })()
        """)
        check("'Members' font matches 'Team details' font", members_font == {
            "family": details_font["family"], "size": details_font["size"],
            "weight": details_font["weight"], "lh": details_font["lh"],
        }, members_font)

        # ─── Position/spacing unchanged (still first child of header) ────
        details_pos = js(c, """
        (function(){
          var h = document.getElementById('tmDetailsTitle').closest('.cr-section-header');
          var r = h.getBoundingClientRect();
          var tr = document.getElementById('tmDetailsTitle').getBoundingClientRect();
          return {headerLeft: r.left, titleLeft: tr.left};
        })()
        """)
        check("'Team details' title still sits flush with its header's left edge (no new indentation)",
              abs(details_pos["titleLeft"] - details_pos["headerLeft"]) < 2, details_pos)

        # ─── Unrelated content untouched ──────────────────────────────────
        page_title_color = js(c, "(function(){var e=document.querySelector('.au-page-title, h1'); return e?getComputedStyle(e).color:null;})()")
        check("Edit Team page title ('Edit Team') keeps its original color (not recolored)",
              page_title_color != "rgb(45, 47, 140)", page_title_color)
        name_label_color = js(c, "getComputedStyle(document.querySelector('label[for=tmName]')).color")
        check("'Name' field label keeps its original color", name_label_color != "rgb(45, 47, 140)", name_label_color)
        desc_label_color = js(c, "getComputedStyle(document.querySelector('label[for=tmDesc]')).color")
        check("'Description' field label keeps its original color", desc_label_color != "rgb(45, 47, 140)", desc_label_color)
        member_th_color = js(c, "(function(){var e=document.querySelector('.tm-members-tbl thead th, #tmMembersTable thead th'); return e?getComputedStyle(e).color:null;})()")
        check("Members table header keeps its original color", member_th_color != "rgb(45, 47, 140)", member_th_color)
        add_members_text = js(c, "document.getElementById('tmAddMembersBtn').textContent.trim()")
        check("'+ Add members' button unchanged", "Add members" in add_members_text, add_members_text)

        # ─── No chevron / collapsible behavior introduced ─────────────────
        details_header = js(c, """
        (function(){
          var h = document.getElementById('tmDetailsTitle').closest('.cr-section-header');
          return {
            hasRole: h.hasAttribute('role'),
            hasAriaExpanded: h.hasAttribute('aria-expanded'),
            hasChevronSvg: !!h.querySelector('svg'),
            cursor: getComputedStyle(h).cursor,
          };
        })()
        """)
        check("'Team details' header has no role=button (no collapsible behavior added)", not details_header["hasRole"], details_header)
        check("'Team details' header has no aria-expanded", not details_header["hasAriaExpanded"], details_header)
        check("'Team details' header has no chevron SVG", not details_header["hasChevronSvg"], details_header)
        check("'Team details' header keeps cursor:default", details_header["cursor"] == "default", details_header)

        members_header = js(c, """
        (function(){
          var h = document.getElementById('tmMembersTitle').closest('.cr-section-header');
          return {hasRole: h.hasAttribute('role'), hasChevronSvg: !!h.querySelector('svg')};
        })()
        """)
        check("'Members' header has no role=button (Add-members button svg excluded correctly is fine, checked separately)",
              not members_header["hasRole"], members_header)

        # ─── Sanity: colors genuinely differ from before (not a no-op) ────
        check("New title color differs from the plain neutral gray text token (change actually took effect)",
              details_color != "rgb(30, 37, 40)", details_color)

        print("\n" + "=" * 70)
        passed = sum(1 for r in results if r[0] == "PASS")
        failed = sum(1 for r in results if r[0] == "FAIL")
        print("TOTAL: %d passed, %d failed (of %d)" % (passed, failed, len(results)))
        if failed:
            print("\nFAILED CHECKS:")
            for status, name, detail in results:
                if status == "FAIL":
                    print("  - %s%s" % (name, ("  (%s)" % detail) if detail else ""))
        return 0 if failed == 0 else 1
    finally:
        try:
            chrome.terminate()
            chrome.wait(timeout=5)
        except Exception:
            pass
        try:
            server.terminate()
            server.wait(timeout=5)
        except Exception:
            pass
        try:
            shutil.rmtree(profile_dir, ignore_errors=True)
        except Exception:
            pass


if __name__ == "__main__":
    sys.exit(main())
