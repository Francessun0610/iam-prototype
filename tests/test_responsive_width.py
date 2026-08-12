#!/usr/bin/env python3
"""Responsive content-width regression suite — IAM / Ad Console V4.1 only.

Covers the 13 "Automated regression checks" from the responsive-width
brief: the shared content-container growth/centering/max-width model on
Users/Roles/Teams, table-fills-card, toolbar/table/footer edge parity,
no app-level scale/zoom, stable component sizing, and Redline Mode's
numeric breakpoints preserving a real (non-scaled) CSS viewport.

Companion to `test_redline_mode.py` and `test_redline_canvas_architecture.py`
(Redline shell/canvas architecture), which this file does not duplicate —
this file is about the *app's own* responsive width behavior, both in the
normal browser and reflected inside Redline's numeric breakpoints.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_responsive_width.py

Exits 0 if every check passes, 1 otherwise.
"""

import os
import sys
import time

sys.path.insert(0, os.path.dirname(__file__))
from test_redline_canvas_architecture import (  # noqa: E402
    free_port,
    start_static_server,
    launch_chrome,
    js,
    rect_of,
    click_selector,
    enable_redline,
    disable_redline,
)

results = []


def check(name, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    results.append((status, name, detail))
    print("[%s] %s%s" % (status, name, ("  (%s)" % detail) if detail and not condition else ""))
    return condition


def set_viewport(c, w, h):
    c.send("Emulation.setDeviceMetricsOverride", {
        "width": w, "height": h, "deviceScaleFactor": 1, "mobile": False,
    })


def measure_content(c, w, h, wait=1.0):
    """Navigate fresh at (w, h) and return width metrics for the Users
    list page's content-container chain."""
    set_viewport(c, w, h)
    c.navigate("http://127.0.0.1:%d/v4.1/" % PORT, wait=wait)
    return js(c, """(function(){
      function r(sel){
        var el = document.querySelector(sel);
        if (!el) return null;
        var rr = el.getBoundingClientRect();
        return {left: rr.left, right: rr.right, width: rr.width};
      }
      var html = document.documentElement;
      var cs = getComputedStyle(html);
      var main = document.querySelector('main.page');
      var mainCs = main ? getComputedStyle(main) : null;
      return {
        winWidth: window.innerWidth,
        card: r('main.page > .card'),
        table: r('#usersTable'),
        tbar: r('#usersPanel .tbar'),
        pgn: r('#usersPanel .pgn'),
        tblWrap: r('#usersPanel .tbl-wrap'),
        htmlTransform: cs.transform,
        htmlZoom: cs.zoom || 'none',
        mainMaxWidth: mainCs ? mainCs.maxWidth : null,
        btnHeight: (function(){ var b = document.querySelector('#usersPanel .tbar .btn-ghost'); return b ? Math.round(b.getBoundingClientRect().height) : null; })(),
        headingFontSize: (function(){ var h1 = document.querySelector('.hdr h1'); return h1 ? getComputedStyle(h1).fontSize : null; })(),
        rowHeight: (function(){ var td = document.querySelector('#usersTable tbody td'); return td ? Math.round(td.getBoundingClientRect().height) : null; })(),
      };
    })()""")


PORT = free_port()


def main():
    server = start_static_server(PORT)
    debug_port = free_port()
    chrome = None
    profile_dir = None
    try:
        chrome, profile_dir = launch_chrome(debug_port)
        from cdp_client import CDP
        c = CDP(debug_port)
        c.send("Network.setCacheDisabled", {"cacheDisabled": True})
        c.send("Runtime.enable")

        m = {}
        for bp in [1024, 1280, 1440, 1920, 2560]:
            m[bp] = measure_content(c, bp, 900 if bp < 1920 else 1440)

        # 1-3: content width increases 1024->1280->1440->1920
        check("1. Main content width increases 1024 -> 1280",
              m[1280]["card"]["width"] > m[1024]["card"]["width"],
              "1024=%.0f 1280=%.0f" % (m[1024]["card"]["width"], m[1280]["card"]["width"]))
        check("2. Main content width increases 1280 -> 1440",
              m[1440]["card"]["width"] > m[1280]["card"]["width"],
              "1280=%.0f 1440=%.0f" % (m[1280]["card"]["width"], m[1440]["card"]["width"]))
        check("3. Main content width increases appropriately at 1920",
              m[1920]["card"]["width"] > m[1440]["card"]["width"] + 100,
              "1440=%.0f 1920=%.0f" % (m[1440]["card"]["width"], m[1920]["card"]["width"]))

        # 4: at 2560, content grows further or reaches the deliberate max-width (not stuck at/near 1440's width)
        check("4. At 2560, content grows further than 1920 or is capped at the deliberate max-width",
              m[2560]["card"]["width"] >= m[1920]["card"]["width"] - 1 and m[2560]["card"]["width"] > m[1440]["card"]["width"] + 300,
              "1920=%.0f 2560=%.0f" % (m[1920]["card"]["width"], m[2560]["card"]["width"]))
        check("   ...and 2560 does not exceed the deliberate max-width once capped",
              m[2560]["card"]["width"] <= 1921,
              "2560 card width=%.0f" % m[2560]["card"]["width"])

        # 5/6: horizontally centered with balanced outer gaps (checked at 2560, where the cap
        # is active and there is real leftover space to balance — sidebar is excluded from
        # the gap since it's fixed navigation, not a page gutter)
        sidebar_w = js(c, "(function(){var sb=document.querySelector('.sidebar'); return sb? sb.getBoundingClientRect().width : 0;})()")
        left_gap = m[2560]["card"]["left"] - sidebar_w
        right_gap = m[2560]["winWidth"] - m[2560]["card"]["right"]
        check("5. Content remains horizontally centered within the content region (excluding fixed sidebar) at 2560",
              abs(left_gap - right_gap) <= 20,
              "leftGap=%.0f rightGap=%.0f" % (left_gap, right_gap))
        check("6. Left and right outer gaps are approximately equal at 2560",
              abs(left_gap - right_gap) <= 20,
              "leftGap=%.0f rightGap=%.0f" % (left_gap, right_gap))

        # 7: table width matches its parent card width at every breakpoint
        for bp in [1024, 1280, 1440, 1920, 2560]:
            cardW = m[bp]["card"]["width"]
            tblWrapW = m[bp]["tblWrap"]["width"]
            check("7. Table wrapper fills its parent card at %d" % bp,
                  abs(cardW - tblWrapW) <= 2,
                  "card=%.0f tblWrap=%.0f" % (cardW, tblWrapW))

        # 8: toolbar, table, and footer share matching horizontal boundaries
        for bp in [1024, 1440, 1920, 2560]:
            tbar, tbl, pgn = m[bp]["tbar"], m[bp]["tblWrap"], m[bp]["pgn"]
            same_left = abs(tbar["left"] - tbl["left"]) <= 2 and abs(tbl["left"] - pgn["left"]) <= 2
            same_right = abs(tbar["right"] - tbl["right"]) <= 2 and abs(tbl["right"] - pgn["right"]) <= 2
            check("8. Toolbar/table/footer share matching left+right edges at %d" % bp,
                  same_left and same_right,
                  "tbar=%s tbl=%s pgn=%s" % (tbar, tbl, pgn))

        # 9: no app-level scale/zoom at large breakpoints
        for bp in [1920, 2560]:
            check("9. No app-level transform/zoom is applied at %d" % bp,
                  m[bp]["htmlTransform"] in ("none", "") and m[bp]["htmlZoom"] in ("1", "none", 1),
                  "transform=%r zoom=%r" % (m[bp]["htmlTransform"], m[bp]["htmlZoom"]))

        # 10: typography and control dimensions remain unchanged across breakpoints
        base = m[1024]
        for bp in [1280, 1440, 1920, 2560]:
            check("10. Button height unchanged 1024 -> %d" % bp,
                  m[bp]["btnHeight"] == base["btnHeight"],
                  "1024=%r %d=%r" % (base["btnHeight"], bp, m[bp]["btnHeight"]))
            check("    Heading font-size unchanged 1024 -> %d" % bp,
                  m[bp]["headingFontSize"] == base["headingFontSize"],
                  "1024=%r %d=%r" % (base["headingFontSize"], bp, m[bp]["headingFontSize"]))
            check("    Row height unchanged 1024 -> %d" % bp,
                  m[bp]["rowHeight"] == base["rowHeight"],
                  "1024=%r %d=%r" % (base["rowHeight"], bp, m[bp]["rowHeight"]))

        # 11/12: Redline numeric breakpoints preserve exact CSS viewport, not scaled
        set_viewport(c, 1600, 1000)
        c.navigate("http://127.0.0.1:%d/v4.1/" % PORT, wait=1.2)
        enable_redline(c, wait=0.6)
        for bp in [1920, 2560]:
            click_selector(c, '[data-redline-action="breakpoint:%s"]' % bp, wait=0.8)
            info = js(c, """(function(){
              var iframe = document.querySelector('.redline__canvas iframe, iframe.redline__frame');
              if (!iframe) return null;
              var win = iframe.contentWindow;
              var shellCs = getComputedStyle(iframe);
              return {
                iframeStyleWidth: iframe.style.width,
                innerWidth: win.innerWidth,
                innerHeight: win.innerHeight,
                transform: shellCs.transform,
                cardWidth: (function(){ var el = win.document.querySelector('main.page > .card'); return el ? Math.round(el.getBoundingClientRect().width) : null; })(),
              };
            })()""")
            check("11. Redline %s breakpoint preserves the exact CSS viewport width" % bp,
                  info is not None and info["innerWidth"] == bp and info["iframeStyleWidth"] == "%dpx" % bp,
                  detail=str(info))
            check("12. Redline %s breakpoint applies no scale transform to the frame" % bp,
                  info is not None and info["transform"] in ("none", ""),
                  detail=str(info))
            check("    Redline %s breakpoint's app content-container reacts to the real viewport (not the visible preview area)" % bp,
                  info is not None and info["cardWidth"] is not None and info["cardWidth"] > 1000,
                  detail=str(info))
        click_selector(c, '[data-redline-action="breakpoint:current"]', wait=0.4)
        disable_redline(c)

        # 13: no cumulative width drift after repeated breakpoint changes
        set_viewport(c, 1024, 768)
        c.navigate("http://127.0.0.1:%d/v4.1/" % PORT, wait=1.2)
        first_1024 = js(c, "document.querySelector('main.page > .card').getBoundingClientRect().width")
        for _ in range(3):
            for bp in [1920, 1440, 2560, 1280, 1024]:
                set_viewport(c, bp, 900 if bp < 1920 else 1440)
                time.sleep(0.35)
        final_1024 = js(c, "document.querySelector('main.page > .card').getBoundingClientRect().width")
        check("13. No cumulative width drift after repeated breakpoint changes",
              abs(first_1024 - final_1024) <= 2,
              "first=%.0f final=%.0f" % (first_1024, final_1024))

    finally:
        if chrome:
            chrome.terminate()
            try:
                chrome.wait(timeout=5)
            except Exception:
                chrome.kill()
        if profile_dir:
            import shutil as _shutil
            _shutil.rmtree(profile_dir, ignore_errors=True)
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
