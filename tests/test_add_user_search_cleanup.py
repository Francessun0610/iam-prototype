#!/usr/bin/env python3
"""Add User modal (Step 1) search-results cleanup (Round 26, 2026-08-11).

Regression suite for:
  1. The floating clear "X" button — now pinned to `.au-adduser-search`
     (the field itself, not the outer wrap that also holds the results
     dropdown) with absolute positioning + `translateY(-50%)`, a
     ~12px right inset, and a 24x24 clickable area; the input reserves
     matching right padding so text never runs under it. ~8px gap
     between the field and the dropdown below it.
  2. Rows for users who `alreadyInIam` hide the (redundant) Team name
     and show only the "Already has access" badge — no placeholder
     left behind.
  3. Rows for addable users keep Team name, rendered semibold, and
     never show the badge.
  4. Stable right-edge alignment, ellipsis truncation + title-attribute
     tooltips on name/email/team, no overlap, at both desktop and
     narrow/mobile widths. Row count/footer/scrolling untouched.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_add_user_search_cleanup.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-adduser-search-test-")
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


def rect(c, sel):
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      var x = el.getBoundingClientRect();
      return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height};
    })()
    """ % json.dumps(sel))


def click_tab(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%s;}).click();" % json.dumps(name))


def open_add_user_modal(c):
    js(c, "document.querySelector('#usersPanel .tbar-r .btn-ghost').click();")
    time.sleep(0.3)


def search(c, query):
    js(c, "var i=document.getElementById('auAddUserSearchInput'); i.value=%s; i.dispatchEvent(new Event('input',{bubbles:true}));" % json.dumps(query))
    time.sleep(0.4)


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
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 1100, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)
        click_tab(c, "Users")
        time.sleep(0.3)
        open_add_user_modal(c)
        check("Add user modal opened", js(c, "!document.getElementById('auAddUserModalBackdrop').hasAttribute('hidden')"))

        search(c, "a")
        n_rows = js(c, "document.querySelectorAll('#auAddUserListbox .au-adduser-option').length")
        check("Search returns multiple result rows", n_rows >= 5, n_rows)

        # ─── 1. Clear button centering / positioning / clickable area ─────
        clear_rect = rect(c, "#auAddUserSearchClear")
        search_rect = rect(c, ".au-adduser-search")
        clear_center_y = (clear_rect["top"] + clear_rect["bottom"]) / 2
        search_center_y = (search_rect["top"] + search_rect["bottom"]) / 2
        check("Clear button is vertically centered in the search field",
              abs(clear_center_y - search_center_y) <= 1,
              "clear_center=%s search_center=%s" % (clear_center_y, search_center_y))
        right_gap = search_rect["right"] - clear_rect["right"]
        check("Clear button sits ~12px from the field's right edge", 8 <= right_gap <= 18, right_gap)
        check("Clear button has a 24x24 clickable area",
              abs(clear_rect["width"] - 24) <= 1 and abs(clear_rect["height"] - 24) <= 1,
              "%sx%s" % (clear_rect["width"], clear_rect["height"]))
        clear_pos = js(c, "getComputedStyle(document.getElementById('auAddUserSearchClear')).position")
        check("Clear button is positioned relative to the search field (not the dropdown wrap)", clear_pos == "absolute", clear_pos)

        input_padding_right = js(c, "parseFloat(getComputedStyle(document.getElementById('auAddUserSearchInput')).paddingRight)")
        check("Search input reserves right padding so text can't run under the clear button",
              input_padding_right >= clear_rect["width"] + 12, input_padding_right)

        # ─── 1b. ~8px gap between search field and results dropdown ────────
        dropdown_top = rect(c, "#auAddUserDropdown")["top"]
        gap = dropdown_top - search_rect["bottom"]
        check("~8px gap between the search field and the results dropdown", 6 <= gap <= 10, gap)

        # ─── 2/3. Team vs. badge per row state ──────────────────────────────
        rows = js(c, """
        (function(){
          var lis = Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option'));
          return lis.map(function(li){
            var team = li.querySelector('.au-adduser-option-team');
            var badge = li.querySelector('.au-adduser-option-badge');
            var info = li.querySelector('.au-adduser-option-info');
            var trailing = team || badge;
            return {
              name: li.querySelector('.au-adduser-option-name').textContent,
              hasTeam: !!team,
              hasBadge: !!badge,
              badgeText: badge ? badge.textContent : null,
              teamWeight: team ? getComputedStyle(team).fontWeight : null,
              infoRight: info.getBoundingClientRect().right,
              trailingLeft: trailing ? trailing.getBoundingClientRect().left : null,
              trailingRight: trailing ? trailing.getBoundingClientRect().right : null
            };
          });
        })()
        """)
        check("Search returned rows to inspect", len(rows) > 0, len(rows))
        already_rows = [r for r in rows if r["badgeText"] == "Already has access"]
        addable_rows = [r for r in rows if not r["hasBadge"] and r["hasTeam"]]
        check("At least one 'Already has access' row present in this result set", len(already_rows) > 0, len(rows))
        check("At least one addable (has-Team, no-badge) row present in this result set", len(addable_rows) > 0, len(rows))

        for r in already_rows:
            check("'%s': already-has-access row hides Team (badge only)" % r["name"], not r["hasTeam"], r)
        for r in addable_rows:
            check("'%s': addable row's Team is rendered semibold (600)" % r["name"], r["teamWeight"] == "600", r["teamWeight"])

        for r in rows:
            check("'%s': identity block does not overlap trailing team/badge" % r["name"],
                  r["trailingLeft"] is None or r["trailingLeft"] >= r["infoRight"] - 1, r)

        # Right-edge alignment: last visible trailing element (team OR badge)
        # in every row should land at (about) the same right x-coordinate.
        trailing_rights = [r["trailingRight"] for r in rows if r["trailingRight"] is not None]
        if trailing_rights:
            spread = max(trailing_rights) - min(trailing_rights)
            check("Team/badge trailing content aligns to a consistent right edge across rows",
                  spread <= 4, "spread=%spx values=%s" % (spread, trailing_rights))

        # ─── 4. Truncation title-attribute tooltips ─────────────────────────
        search(c, "alexandra")
        long_row_info = js(c, """
        (function(){
          var li = document.querySelector('#auAddUserListbox .au-adduser-option');
          var name = li.querySelector('.au-adduser-option-name');
          var email = li.querySelector('.au-adduser-option-email');
          var team = li.querySelector('.au-adduser-option-team');
          return {
            nameTitle: name.getAttribute('title'),
            emailTitle: email.getAttribute('title'),
            emailOverflow: email.scrollWidth > email.clientWidth + 1,
            teamTitle: team ? team.getAttribute('title') : null
          };
        })()
        """)
        check("Long name has a title-attribute tooltip", bool(long_row_info["nameTitle"]), long_row_info["nameTitle"])
        check("Long email has a title-attribute tooltip and truncates", bool(long_row_info["emailTitle"]) and long_row_info["emailOverflow"], long_row_info)
        check("Team has a title-attribute tooltip when shown", long_row_info["teamTitle"] is None or len(long_row_info["teamTitle"]) > 0, long_row_info["teamTitle"])

        # ─── 5. Row height / footer / scrolling preserved ────────────────────
        search(c, "a")
        footer_note = js(c, "document.getElementById('auAddUserDDNote').textContent")
        check("'Showing N of M results' footer note still renders", "results" in footer_note, footer_note)
        row_heights = js(c, "Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option')).map(function(li){return Math.round(li.getBoundingClientRect().height);})")
        check("All result rows share the same height (no per-row layout drift)",
              len(set(row_heights)) == 1, row_heights)
        listbox_overflow = js(c, "getComputedStyle(document.getElementById('auAddUserListbox')).overflowY")
        check("Results listbox still scrolls internally", listbox_overflow == "auto", listbox_overflow)

        # Hover state still applies to a row.
        first_row_id = js(c, "document.querySelector('#auAddUserListbox .au-adduser-option').id")
        js(c, "document.getElementById(%s).dispatchEvent(new MouseEvent('mousemove', {bubbles:true}));" % json.dumps(first_row_id))
        time.sleep(0.1)
        check("First row becomes keyboard/mouse-highlighted (is-active) on hover",
              js(c, "document.getElementById(%s).classList.contains('is-active')" % json.dumps(first_row_id)))

        # ─── 6. Narrow / mobile viewport: no overlap, clear stays centered ──
        js(c, "var i=document.getElementById('auAddUserSearchInput'); i.value=''; i.dispatchEvent(new Event('input',{bubbles:true}));")
        c.send("Emulation.setDeviceMetricsOverride", {"width": 390, "height": 844, "deviceScaleFactor": 1, "mobile": True})
        time.sleep(0.3)
        search(c, "a")
        mobile_clear = rect(c, "#auAddUserSearchClear")
        mobile_search = rect(c, ".au-adduser-search")
        mobile_center_gap = abs(((mobile_clear["top"] + mobile_clear["bottom"]) / 2) - ((mobile_search["top"] + mobile_search["bottom"]) / 2))
        check("Clear button stays vertically centered at narrow/mobile widths", mobile_center_gap <= 1, mobile_center_gap)
        mobile_rows = js(c, """
        (function(){
          var lis = Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option'));
          return lis.every(function(li){
            var info = li.querySelector('.au-adduser-option-info');
            var trailing = li.querySelector('.au-adduser-option-team') || li.querySelector('.au-adduser-option-badge');
            if (!trailing) return true;
            return trailing.getBoundingClientRect().left >= info.getBoundingClientRect().right - 1;
          });
        })()
        """)
        check("No identity/trailing overlap at narrow/mobile widths", mobile_rows is True)

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
        shutil.rmtree(profile_dir, ignore_errors=True)

    failed = [r for r in results if r[0] == "FAIL"]
    print("\n%d passed, %d failed (of %d checks)" % (len(results) - len(failed), len(failed), len(results)))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
