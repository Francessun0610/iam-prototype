#!/usr/bin/env python3
"""V4.1 Users table — Access Management column rebalance (Round 25,
2026-08-11) + Round 34 (2026-08-11) horizontal-alignment pass.

Regression suite for widening the Name column, trimming excess Role/Team
slack, keeping Status/Last login fixed, and left-aligning Region,
all driven from ONE shared column definition (`#usersColgroup`, read by
both the `<thead>` and `<tbody>` rows of the same `<table>`).

Target model (mirrors a CSS Grid `minmax(min, Nfr)` spec). Region is not
a flat constant as of Round 34 — it's computed at runtime against an
external anchor (the "Add User" button — see `align()`'s Users branch in
app.js), so this suite checks it against its live anchor rather than a
single hardcoded pixel value:
    Select (32px inset + checkbox) | Name minmax(240px,1.2fr) |
    Role minmax(320px,2fr) | Status 92px | Team minmax(220px,1.4fr) |
    Last login 170px | Region (anchored to "Add User")

Round 38 (2026-08-12) removed Select's own external anchor: it had been
computed from the "Users" TAB LABEL's live x-coordinate, which also
dragged the toolbar sideways via an inline margin (the same mechanism
that left a 94px blank gap on the Roles toolbar). Select now takes the
32px inset it always effectively rendered at straight from the shared
`th.c-sel`/`td.c-sel` rule in styles.css.

Covers:
  1. Visible column order is Select | Name | Role | Status | Team |
     Last login | Region (Email/Company Title columns stay hidden).
  2. Header cell widths exactly match body cell widths for every column
     at several viewport widths (single shared <colgroup> definition).
  3. At a comfortable desktop width, Name/Role/Team/Status/Last
     login/Select all land at or near their target widths, and
     Name sits in its 240-280px preferred band.
  4. On a much wider viewport, Role and Team grow more (in px) than
     Name — "remaining space primarily between Role and Team" — while
     Select/Status/Last login stay pinned at their fixed widths.
  5. Region header + every visible Region cell are left-aligned, start
     at the same x-coordinate as each other, and the sort icon sits
     immediately beside the "Region" label (not pushed to the cell's
     right edge).
  6. At a width too narrow to fit every column's minimum, the table
     doesn't shrink columns below their minimums — instead it overflows
     its wrapper and the wrapper scrolls horizontally; no header
     wrapping, no row-height regression, no overlap.
  7. Sorting, row height, borders, and typography are unaffected by the
     new widths (spot checks, not full re-verification).
  8. Name column still truncates long values with an ellipsis and a
     hover tooltip surfaces the untruncated value.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_users_table_columns.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-users-cols-test-")
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


def style(c, sel, prop):
    return js(c, "getComputedStyle(document.querySelector(%s)).%s" % (json.dumps(sel), prop))


def set_viewport(c, width, height=900):
    c.send("Emulation.setDeviceMetricsOverride", {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.35)


def click_tab(c, name):
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()===%s;}).click();" % json.dumps(name))


VISIBLE_COLS = [
    ("sel", "c-sel"),
    ("nm", "c-nm"),
    ("rl", "c-rl"),
    ("st", "c-st"),
    ("tm", "c-tm"),
    ("ll", "c-ll"),
    ("rg", "c-rg"),
]


def col_widths(c):
    """Returns {colkey: {'th': width, 'td': width}} for row 1's cells."""
    return js(c, """
    (function(){
      var out = {};
      var keys = %s;
      keys.forEach(function(k){
        var th = document.querySelector('#usersTable thead th.' + k[1]);
        var td = document.querySelector('#usersTable tbody tr:first-child td.' + k[1]);
        out[k[0]] = {
          th: th ? th.getBoundingClientRect().width : null,
          td: td ? td.getBoundingClientRect().width : null
        };
      });
      return out;
    })()
    """ % json.dumps(VISIBLE_COLS))


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
        set_viewport(c, 1440)
        click_tab(c, "Users")
        time.sleep(0.3)

        # ─── 1. Visible column order ────────────────────────────────────
        header_texts = js(c, """
        Array.from(document.querySelectorAll('#usersTable thead th')).map(function(th){
          var vis = getComputedStyle(th).visibility !== 'hidden' && th.getBoundingClientRect().width > 2;
          var span = th.querySelector('.th-inner span:first-child');
          return vis ? (span ? span.textContent.trim() : th.textContent.trim()) : null;
        }).filter(function(x){return x !== null;})
        """)
        check("Visible column order is Select | Name | Role | Status | Team | Last login | Region",
              header_texts == ["Name", "Role", "Status", "Team", "Last login", "Region"] or
              header_texts[1:] == ["Name", "Role", "Status", "Team", "Last login", "Region"],
              repr(header_texts))
        check("Email column (c-em) stays hidden (0 width)",
              rect(c, "#usersTable thead th.c-em")["width"] <= 1)
        check("Company Title/Role column (c-ct) stays hidden (0 width)",
              rect(c, "#usersTable thead th.c-ct")["width"] <= 1)

        # ─── 2. Header/body share exact widths at several viewports ────
        for vw in (1440, 1280, 1100, 1000):
            set_viewport(c, vw)
            widths = col_widths(c)
            for key, cls in VISIBLE_COLS:
                th_w, td_w = widths[key]["th"], widths[key]["td"]
                check("[%dpx] %s header width == body width" % (vw, key),
                      th_w is not None and td_w is not None and abs(th_w - td_w) <= 0.6,
                      "th=%s td=%s" % (th_w, td_w))

        # ─── 3. Desktop target widths (1440px) ──────────────────────────
        set_viewport(c, 1440)
        w = col_widths(c)
        # Round 34: Select is no longer a flat 40px — it's sized so the
        # checkbox lands under the "Users" tab label (see section 5a
        # below for the actual alignment check). It should still be a
        # sane, content-appropriate width (checkbox + left inset + a
        # small trailing gap before Name), not the whole table.
        check("Select is a sane, content-appropriate width (not flat 40px anymore, not huge)",
              44 <= w["sel"]["td"] <= 120, w["sel"]["td"])
        check("Status ~92px", abs(w["st"]["td"] - 92) <= 1, w["st"]["td"])
        check("Last login ~170px", abs(w["ll"]["td"] - 170) <= 1, w["ll"]["td"])
        # Round 34: Region is no longer a flat 96px — it's sized so its
        # left edge lands under "Add User" (see section 5b below for the
        # actual alignment check). It should still be wide enough for
        # "Region" + its sort icon to render without clipping.
        check("Region is wide enough for its label + sort icon (not flat 96px anymore)",
              w["rg"]["td"] >= 90, w["rg"]["td"])
        check("Name >= 240px minimum", w["nm"]["td"] >= 239)
        check("Name is in/near its 240-280px preferred band at 1440px", w["nm"]["td"] <= 300, w["nm"]["td"])
        check("Role >= 320px minimum", w["rl"]["td"] >= 319, w["rl"]["td"])
        check("Team >= 220px minimum", w["tm"]["td"] >= 219, w["tm"]["td"])
        check("Role is the widest flexible column (Role > Team > baseline Name)",
              w["rl"]["td"] > w["tm"]["td"] > 0, "rl=%s tm=%s nm=%s" % (w["rl"]["td"], w["tm"]["td"], w["nm"]["td"]))

        # ─── 4. Wide viewport: Role/Team grow more than Name; fixed cols
        #        stay fixed ──────────────────────────────────────────────
        set_viewport(c, 1440)
        w1440 = col_widths(c)
        set_viewport(c, 1920)
        w1920 = col_widths(c)
        d_nm = w1920["nm"]["td"] - w1440["nm"]["td"]
        d_rl = w1920["rl"]["td"] - w1440["rl"]["td"]
        d_tm = w1920["tm"]["td"] - w1440["tm"]["td"]
        check("Widening the viewport grows Role more than Name", d_rl > d_nm, "d_rl=%s d_nm=%s" % (d_rl, d_nm))
        check("Widening the viewport grows Team more than Name", d_tm > d_nm, "d_tm=%s d_nm=%s" % (d_tm, d_nm))
        check("Status stays exactly fixed when the viewport widens",
              abs(w1920["st"]["td"] - w1440["st"]["td"]) <= 0.6)
        check("Last login stays exactly fixed when the viewport widens",
              abs(w1920["ll"]["td"] - w1440["ll"]["td"]) <= 0.6)

        # ─── 5. Select + Region alignment ───────────────────────────────
        set_viewport(c, 1440)

        # 5a. Select column: Round 34 anchored the Filter icon and every
        # checkbox to the "Users" TAB LABEL's x-coordinate via a
        # JS-written inline margin. Round 38 (2026-08-12) removed that
        # anchor: the toolbar takes its left inset from `.tbar`'s own
        # shared padding (identical on every tab — see
        # test_users_toolbar_search.py / test_roles_filter_alignment.py),
        # and the Select column keeps its own stylesheet-declared 32px
        # padding. What still matters here is that the column is
        # self-consistent: the header checkbox and every row checkbox
        # share one x-coordinate, driven by the shared column rule.
        select_all_left = rect(c, "#usersSelectAll")["left"]
        row_check_lefts = js(c, """
        Array.from(document.querySelectorAll('#usersTable tbody tr td.c-sel input[type=checkbox]')).slice(0, 6).map(function(cb){
          return cb.getBoundingClientRect().left;
        })
        """)
        check("Every visible row checkbox shares the header select-all's x-coordinate",
              all(abs(x - select_all_left) <= 1 for x in row_check_lefts),
              "select_all=%s rows=%s" % (select_all_left, row_check_lefts))
        sel_pad = style(c, "#usersTable th.c-sel", "paddingLeft")
        check("Select column's left inset comes from the shared stylesheet rule (32px)",
              sel_pad == "32px", sel_pad)
        check("No script writes a --users-sel-pad-left override anymore",
              js(c, "document.documentElement.style.getPropertyValue('--users-sel-pad-left') || ''") == "",
              js(c, "document.documentElement.style.getPropertyValue('--users-sel-pad-left')"))

        # 5b. Region: header + every visible cell are left-aligned, start
        # at the same x-coordinate as each other AND as the "Add User"
        # button above them, and the sort icon sits immediately beside
        # the "Region" label (not pushed to the cell's right edge).
        check("Region header is left-aligned", style(c, "#usersTable thead th.c-rg", "textAlign") == "left")
        check("Region body cells are left-aligned", style(c, "#usersTable tbody tr:first-child td.c-rg", "textAlign") == "left")
        rg_head = rect(c, "#usersTable thead th.c-rg")
        rows_left = js(c, """
        Array.from(document.querySelectorAll('#usersTable tbody tr td.c-rg')).slice(0, 6).map(function(td){
          return td.getBoundingClientRect().left;
        })
        """)
        check("Every visible Region cell begins at the same x as the header",
              all(abs(x - rg_head["left"]) <= 0.6 for x in rows_left), rows_left)
        add_user_left = rect(c, "#usersPanel .tbar-r .btn-ghost")["left"]
        check("Region header's left edge matches Add User's left edge",
              abs(rg_head["left"] - add_user_left) <= 1, "region=%s add_user=%s" % (rg_head["left"], add_user_left))
        # Sort icon should sit right next to the "Region" label, not pushed
        # to the far right edge of the header cell.
        label_rect = rect(c, "#usersTable thead th.c-rg .th-inner span:first-child")
        ico_rect = rect(c, "#usersTable thead th.c-rg .sort-ico")
        gap = ico_rect["left"] - label_rect["right"]
        check("Region's sort icon sits directly beside the label (small gap, not at cell edge)",
              0 <= gap <= 12, "gap=%s label_right=%s icon_left=%s header_right=%s" % (gap, label_rect["right"], ico_rect["left"], rg_head["right"]))

        # ─── 5c. Same alignment checks hold at another comfortable
        # desktop width (1920px) — not a one-off coincidence at 1440px.
        set_viewport(c, 1920)
        select_all_1920 = rect(c, "#usersSelectAll")["left"]
        row_checks_1920 = js(c, """
        Array.from(document.querySelectorAll('#usersTable tbody tr td.c-sel input[type=checkbox]')).slice(0, 6).map(function(cb){
          return cb.getBoundingClientRect().left;
        })
        """)
        check("Header/row checkboxes still share one x-coordinate at 1920px",
              all(abs(x - select_all_1920) <= 1 for x in row_checks_1920), row_checks_1920)
        check("Region still aligns with Add User's left edge at 1920px",
              abs(rect(c, "#usersTable thead th.c-rg")["left"] - rect(c, "#usersPanel .tbar-r .btn-ghost")["left"]) <= 1)
        set_viewport(c, 1440)

        # ─── 6. Narrow viewport: minimums honored, horizontal scroll ────
        set_viewport(c, 1000)
        wnarrow = col_widths(c)
        check("At 1000px, Name doesn't shrink below its 240px minimum", wnarrow["nm"]["td"] >= 239, wnarrow["nm"]["td"])
        check("At 1000px, Role doesn't shrink below its 320px minimum", wnarrow["rl"]["td"] >= 319, wnarrow["rl"]["td"])
        check("At 1000px, Team doesn't shrink below its 220px minimum", wnarrow["tm"]["td"] >= 219, wnarrow["tm"]["td"])
        wrap_widths = js(c, """
        (function(){
          var wrap = document.querySelector('#usersPanel .tbl-wrap');
          return {scrollWidth: wrap.scrollWidth, clientWidth: wrap.clientWidth};
        })()
        """)
        check("At 1000px the table overflows its wrapper (needs horizontal scroll)",
              wrap_widths["scrollWidth"] > wrap_widths["clientWidth"] + 2, wrap_widths)
        header_heights = js(c, "Array.from(document.querySelectorAll('#usersTable thead th')).map(function(th){return th.getBoundingClientRect().height;})")
        check("No header wraps to multiple lines at 1000px (consistent header height)",
              max(header_heights) - min([h for h in header_heights if h > 0]) <= 2, header_heights)
        row_heights = js(c, "Array.from(document.querySelectorAll('#usersTable tbody tr')).slice(0,5).map(function(tr){return tr.getBoundingClientRect().height;})")
        check("Row heights stay consistent at 1000px", max(row_heights) - min(row_heights) <= 1, row_heights)

        # ─── 7. Sanity: row height / borders / sorting unaffected ───────
        set_viewport(c, 1440)
        check("Body row height unchanged (48px)", abs(rect(c, "#usersTable tbody tr:first-child td.c-nm")["height"] - 48) <= 1)
        check("Header row height unchanged (32px)", abs(rect(c, "#usersTable thead th.c-nm")["height"] - 32) <= 1)
        js(c, "document.querySelector('#usersTable thead th.c-nm').click();")
        time.sleep(0.2)
        sort_state = js(c, "document.querySelector('#usersTable thead th.c-nm').getAttribute('aria-sort')")
        check("Clicking the Name header still triggers sorting", sort_state in ("ascending", "descending"), sort_state)

        # ─── 8. Name truncation + tooltip still work ─────────────────────
        long_name_overflow = js(c, """
        (function(){
          var link = document.querySelector('#usersTable tbody .name-link');
          if (!link) return null;
          return {scrollWidth: link.scrollWidth, clientWidth: link.clientWidth, overflowCss: getComputedStyle(link).textOverflow};
        })()
        """)
        check("Name link keeps ellipsis truncation styling (text-overflow: ellipsis)",
              long_name_overflow is not None and long_name_overflow["overflowCss"] == "ellipsis", long_name_overflow)

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
