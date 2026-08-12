#!/usr/bin/env python3
"""V4.1 Users table — Last login / Region column spacing + readability.

Regression suite for the 2026-08 fix: Last login and Region were
crowded/merged (Region was sized to whatever width happened to align
its left edge with the "+ Add User" CTA above, with zero left padding).
Region got normal left padding (20-24px) re-added, and Last login shows
a shortened "Mon D, H:MM AM/PM" display (dropping the year) with
ellipsis truncation + full-timestamp tooltip for any value that still
doesn't fit.

Round 34 (2026-08-11 — toolbar/table horizontal-alignment pass) update:
Region's WIDTH is intentionally no longer a stable flat ~100px — it's
computed at runtime so its left edge lines up with "Add User"'s left
edge again (the exact behavior this suite's original ~100px number
temporarily replaced), so this suite now checks Region against that
live anchor instead of a hardcoded width. See `test_users_table_columns.py`
for the dedicated alignment coverage; the checks below only confirm
Region's padding/readability/visibility characteristics are unaffected.

Covers:
  1. Region cells carry 20-24px left padding, header matches body.
  2. There is a clear rendered gap between Last login's text and
     Region's text (not just adjacent cell edges touching).
  3. Last login displays the shortened "Mon D, H:MM AM/PM" format
     (year dropped) for real data, with no truncation for the sample
     dataset's longest value.
  4. An artificially long Last login value truncates (ellipsis) and
     surfaces its full original timestamp via the shared truncation
     tooltip; a normal, non-truncated value does not show a tooltip.
  5. Region and Last login header cells stay left-edge-aligned with
     their respective body columns (headers + sort icons move
     together with the column, not independently).
  6. Table width, row height, and the other (unrelated) columns'
     presence are unchanged.
  7. Region stays visible (non-zero, non-clipped) at narrower viewport
     widths. Below the table's min-content width the wrapper is
     allowed to scroll horizontally instead of compressing columns
     under their minimums — this is an explicit, intentional part of
     the Round 34 spec ("if the table cannot fit, allow horizontal
     scrolling instead of breaking column alignment"), not a bug.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_v41_users_lastlogin_region.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-ll-rg-test-")
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
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      return getComputedStyle(el)[%s];
    })()
    """ % (json.dumps(sel), json.dumps(prop)))


def text_right_edge(c, sel):
    """Right edge of the actual rendered text inside a cell (not the cell box)."""
    return js(c, """
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      var range = document.createRange();
      range.selectNodeContents(el);
      return range.getBoundingClientRect().right;
    })()
    """ % json.dumps(sel))


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

        # ─── 1 & 2. Region padding across breakpoints ───────────────────
        # (Region's WIDTH itself is checked against the "Add User" anchor
        # in test_users_table_columns.py, not here — see the Round 34
        # note in the module docstring above.)
        for (w, h) in ((1024, 800), (1280, 800), (1440, 900), (1920, 1080), (2560, 1440)):
            c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": h, "deviceScaleFactor": 1, "mobile": False})
            time.sleep(0.3)
            rg = rect(c, "#usersTable td.c-rg")
            pad = style(c, "#usersTable td.c-rg", "paddingLeft")
            padH = style(c, "#usersTable th.c-rg", "paddingLeft")
            check("Region column is visible and reasonably wide (not clipped) @%dx%d" % (w, h),
                  rg and rg["width"] >= 60, rg and rg["width"])
            padpx = float(pad.replace("px", "")) if pad else None
            check("Region cell left padding is 20-24px @%dx%d" % (w, h),
                  padpx is not None and 20 <= padpx <= 24, pad)
            check("Region header left padding matches body @%dx%d" % (w, h),
                  padH == pad, "%s vs %s" % (padH, pad))

        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.3)

        # ─── 3. Visual gap between Last login text and Region text ─────
        ll_text_right = text_right_edge(c, "#usersTable td.c-ll")
        rg_rect = rect(c, "#usersTable td.c-rg")
        rg_pad = float(style(c, "#usersTable td.c-rg", "paddingLeft").replace("px", ""))
        rg_text_left = rg_rect["left"] + rg_pad
        gap = rg_text_left - ll_text_right
        check("Clear visual gap between Last login and Region text (>=16px)",
              gap >= 16, "%.1fpx" % gap)

        # ─── 4. Shortened Last login format, no truncation for real data ──
        ll_cells = js(c, """
        (function(){
          var tds = document.querySelectorAll('#usersTable td.c-ll');
          return Array.prototype.map.call(tds, function(td){
            return {text: td.textContent, title: td.getAttribute('title'),
                    truncated: td.scrollWidth > td.clientWidth + 1};
          });
        })()
        """)
        check("Setup: Last login cells rendered", bool(ll_cells) and len(ll_cells) > 0, len(ll_cells) if ll_cells else 0)
        first = ll_cells[0]
        import re
        shortened_ok = bool(re.match(r"^[A-Za-z]{3} \d{1,2}, \d{1,2}:\d{2} (AM|PM)$", first["text"]))
        check("Last login shows shortened 'Mon D, H:MM AM/PM' format (year dropped)",
              shortened_ok, first["text"])
        check("Last login cell's title attribute carries the full original timestamp (with year)",
              first["title"] and str(first["title"]).count(",") == 2, first["title"])
        none_truncated = all(not cell["truncated"] for cell in ll_cells)
        check("No real Last login value is truncated at the fixed column width",
              none_truncated)

        # ─── 5. Forced-overflow truncation + tooltip behavior ──────────
        js(c, """
        (function(){
          var td = document.querySelector('#usersTable td.c-ll');
          td.textContent = 'This is a deliberately very long fake timestamp to force overflow';
          td.setAttribute('title', 'This is a deliberately very long fake timestamp to force overflow (FULL)');
        })()
        """)
        overflow_info = js(c, """
        (function(){
          var td = document.querySelector('#usersTable td.c-ll');
          return {scrollW: td.scrollWidth, clientW: td.clientWidth};
        })()
        """)
        check("Artificially long Last login value overflows its cell (truncation candidate)",
              overflow_info["scrollW"] > overflow_info["clientW"] + 1,
              "%s vs %s" % (overflow_info["scrollW"], overflow_info["clientW"]))
        tip = js(c, """
        (function(){
          var td = document.querySelector('#usersTable td.c-ll');
          var rect = td.getBoundingClientRect();
          var ev = new MouseEvent('mouseover', {bubbles:true, clientX: rect.left+10, clientY: rect.top+10});
          td.dispatchEvent(ev);
          var t = document.querySelector('.edl-tooltip');
          return {visible: t.classList.contains('visible'), text: t.textContent};
        })()
        """)
        check("Hovering a truncated Last login cell shows the full timestamp in a tooltip",
              tip["visible"] and "FULL" in tip["text"], tip)
        tip2 = js(c, """
        (function(){
          var tds = document.querySelectorAll('#usersTable td.c-ll');
          var td = tds[1];
          var rect = td.getBoundingClientRect();
          var ev = new MouseEvent('mouseover', {bubbles:true, clientX: rect.left+10, clientY: rect.top+10});
          td.dispatchEvent(ev);
          var t = document.querySelector('.edl-tooltip');
          return {visible: t.classList.contains('visible')};
        })()
        """)
        check("Hovering a non-truncated Last login cell does not show the truncation tooltip",
              not tip2["visible"])
        c.navigate(base, wait=1.0)  # reload to undo the manual DOM mutation above

        # ─── 6. Header/body/sort-icon alignment ─────────────────────────
        thLL = rect(c, "#usersTable th.c-ll")
        tdLL = rect(c, "#usersTable td.c-ll")
        thRG = rect(c, "#usersTable th.c-rg")
        tdRG = rect(c, "#usersTable td.c-rg")
        check("Last login header/body left edges match", abs(thLL["left"] - tdLL["left"]) < 1,
              "%s vs %s" % (thLL["left"], tdLL["left"]))
        check("Region header/body left edges match", abs(thRG["left"] - tdRG["left"]) < 1,
              "%s vs %s" % (thRG["left"], tdRG["left"]))
        sortIco = rect(c, "#usersTable th.c-rg .sort-ico")
        check("Region sort icon sits to the right of the header label (inside the padded header cell)",
              sortIco["left"] > thRG["left"], "%s vs %s" % (sortIco["left"], thRG["left"]))

        # ─── 7. Table width / row height / other columns preserved ─────
        row_h = rect(c, "#tbody tr")["height"]
        check("Row height unchanged (48px)", abs(row_h - 48) < 1, row_h)
        other_cols = ["c-sel", "c-nm", "c-rl", "c-st", "c-tm"]
        for cls in other_cols:
            present = js(c, "!!document.querySelector('#usersTable td.%s')" % cls)
            check("Other column .%s still present" % cls, present)
        tbl_width = rect(c, "#usersTable")["width"]
        wrap_width = rect(c, "#usersPanel .tbl-wrap")["width"]
        check("Table still fills its wrapper (overall table width unchanged)",
              abs(tbl_width - wrap_width) <= 2, "%s vs %s" % (tbl_width, wrap_width))

        # ─── 7. Responsive behavior at narrower widths ──────────────────
        # Below the table's combined min-content width, `.tbl-wrap`'s
        # existing `overflow-x: auto` takes over (horizontal scroll) —
        # explicitly permitted by the Round 34 spec — so this only
        # checks that Region stays visible/non-clipped and that scrolling
        # (when it happens) is real horizontal scroll, not a layout
        # break (e.g. negative widths, zero-height rows).
        for w in (900, 850, 767):
            c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": 900, "deviceScaleFactor": 1, "mobile": False})
            c.navigate(base, wait=1.0)
            rg = rect(c, "#usersTable td.c-rg")
            check("Region stays visible (non-zero width) @%dpx" % w,
                  rg and rg["width"] >= 60, rg and rg["width"])
            wrap = rect(c, "#usersPanel .tbl-wrap")
            overflow_x = style(c, "#usersPanel .tbl-wrap", "overflowX")
            check("Table wrapper allows horizontal scrolling when content doesn't fit @%dpx" % w,
                  overflow_x in ("auto", "scroll"), overflow_x)
            row_h = rect(c, "#tbody tr")["height"]
            check("Row height stays intact (no layout break) @%dpx" % w,
                  row_h and abs(row_h - 48) < 1, row_h)

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

    print("\n" + "=" * 60)
    failed = [r for r in results if r[0] == "FAIL"]
    print("%d passed, %d failed" % (len(results) - len(failed), len(failed)))
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
