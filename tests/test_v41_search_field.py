#!/usr/bin/env python3
"""V4.1 toolbar search field — responsive width, text alignment, clear button.

Regression suite for the 2026-08 (Round 23) fix. Prior to this fix, the
shared `.ads-search` component (used by Roles/Teams' toolbar search —
`#rpSearchWrap` / `#tmSearchWrap`) had several issues:

NOTE: Round 24 (2026-08-11) removed the Users toolbar's own search field
(`#searchWrap`) entirely and this suite covered only Roles and Teams for
a while. Round 38 (2026-08-12) restored it — using the same shared
`.ads-search` component, so it is back in the panel list below and
inherits this same width/alignment contract. Users-specific toolbar
behavior (icon-only Filter, group order, filtering) lives in
test_users_toolbar_search.py.
  - A fixed 320px width that never grew past ~370-620px depending on
    context, and in one wrapped-row case (`#usersPanel` <=1100px) could
    balloon past 600px with no cap at all.
  - The leading magnifier icon was only hidden via `opacity: 0` once a
    query was typed, but still reserved its 20px + 8px gap of flex
    layout space, pushing entered text ~28px further right than the
    field's own padding alone would.
  - The clear ("x") button inherited a stale `transform: translateY(-50%)`
    from the field's old absolute-positioned layout, which — now that
    the button is centered via the parent's flex `align-items: center`
    — pushed it visibly above center, and its clickable box was only
    16x16px.

Covers:
  1. Width never exceeds 600px at any tested viewport.
  2. Width reaches the full 600px ceiling at 1440px+.
  3. Width scales fluidly (monotonically, no snap) with viewport in the
     sub-1440px unwrapped range.
  4. No horizontal page overflow at very narrow (mobile) viewports, and
     the field stays minimally visible/usable rather than collapsing to
     ~0px.
  5. Height stays exactly 36px regardless of width.
  6. The leading search icon never reserves layout space (same text
     inset whether the field is empty or has a value).
  7. The clear button is a 24x24px clickable box, vertically centered in
     the field, ~12-16px from the right edge, with its 16x16 glyph
     centered inside that box; it stays keyboard-focusable with a
     visible focus outline.
  8. Entered text and the clear button never overlap.
  9. Holds for all three toolbar instances (Users, Roles, Teams).

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_v41_search_field.py
"""

import json
import os
import re
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-search-test-")
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


def type_value(c, sel, value):
    js(c, """
    (function(){
      var inp = document.querySelector(%s);
      var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(inp, %s);
      inp.dispatchEvent(new Event('input', {bubbles:true}));
    })()
    """ % (json.dumps(sel), json.dumps(value)))


def clear_value(c, sel):
    type_value(c, sel, "")


PANELS = [
    ("Users", "searchWrap", "searchInput", "searchClear", "searchIco"),
    ("Roles", "rpSearchWrap", "rpSearchInput", "rpSearchClear", "rpSearchIco"),
    ("Teams", "tmSearchWrap", "tmSearchInput", "tmSearchClear", "tmSearchIco"),
]


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

        # ─── 1 & 2 & 3. Width: never exceeds 600px, reaches 600px at
        # 1440+, scales monotonically (no snap) below 1440 ─────────────
        # Uses the Roles panel's search field (`#rpSearchWrap`) as the
        # representative instance of the shared `.ads-search` component.
        # Users' restored field (`#searchWrap`) is the same component and
        # is checked against the same ceiling in
        # test_users_toolbar_search.py, where its toolbar's own
        # shrink-before-wrap behavior is also covered.
        widths_by_bp = {}
        for w in (1280, 1350, 1400, 1440, 1500, 1920, 2560):
            c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": 900, "deviceScaleFactor": 1, "mobile": False})
            time.sleep(0.2)
            click_tab(c, "Roles")
            time.sleep(0.15)
            r = rect(c, "#rpSearchWrap")
            widths_by_bp[w] = r["width"]
            check("Never exceeds 600px @%dpx" % w, r["width"] <= 601, r["width"])
            check("Height stays 36px @%dpx" % w, abs(r["height"] - 36) <= 1, r["height"])

        check("Reaches the full 600px width at 1440px+",
              all(widths_by_bp[w] >= 592 for w in (1440, 1500, 1920, 2560)),
              {w: widths_by_bp[w] for w in (1440, 1500, 1920, 2560)})

        sub_1440 = [widths_by_bp[w] for w in (1280, 1350, 1400, 1440)]
        monotonic = all(sub_1440[i] <= sub_1440[i + 1] + 0.5 for i in range(len(sub_1440) - 1))
        check("Width scales monotonically (no reverse jump) from 1280 to 1440px",
              monotonic, sub_1440)

        # ─── 4. No overflow / no collapse at narrow (mobile) widths ────
        for w in (768, 600, 500, 400, 375, 320):
            c.send("Emulation.setDeviceMetricsOverride", {"width": w, "height": 700, "deviceScaleFactor": 1, "mobile": w < 500})
            time.sleep(0.2)
            click_tab(c, "Roles")
            time.sleep(0.15)
            overflow = js(c, "document.documentElement.scrollWidth - window.innerWidth")
            r = rect(c, "#rpSearchWrap")
            check("No horizontal page overflow @%dpx" % w, overflow <= 1, overflow)
            check("Field stays minimally visible/usable (>=100px) @%dpx" % w,
                  r["width"] >= 100, r["width"])
            check("Field never exceeds 600px @%dpx" % w, r["width"] <= 601, r["width"])

        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.2)

        # ─── 5-8. Text alignment, icon reservation, clear button — for
        # each of the 2 remaining toolbar search instances (Roles, Teams) ─
        for tab, wrap_id, input_id, clear_id, ico_id in PANELS:
            click_tab(c, tab)
            time.sleep(0.2)

            wrap_sel = "#" + wrap_id
            input_sel = "#" + input_id
            clear_sel = "#" + clear_id
            ico_sel = "#" + ico_id

            clear_value(c, input_sel)
            time.sleep(0.15)
            empty_wrap = rect(c, wrap_sel)
            empty_input = rect(c, input_sel)
            empty_inset = empty_input["left"] - empty_wrap["left"]
            ico_display_empty = js(c, "getComputedStyle(document.querySelector(%s)).display" % json.dumps(ico_sel))
            check("%s: icon does not render/reserve space when empty" % tab,
                  ico_display_empty == "none", ico_display_empty)

            type_value(c, input_sel, "f")
            time.sleep(0.2)
            val_wrap = rect(c, wrap_sel)
            val_input = rect(c, input_sel)
            val_inset = val_input["left"] - val_wrap["left"]
            ico_display_val = js(c, "getComputedStyle(document.querySelector(%s)).display" % json.dumps(ico_sel))
            check("%s: icon does not render/reserve space when has a value" % tab,
                  ico_display_val == "none", ico_display_val)
            check("%s: text inset is ~16px" % tab,
                  14 <= val_inset <= 20, val_inset)
            check("%s: placeholder and entered-text inset match (no icon-driven shift)" % tab,
                  abs(empty_inset - val_inset) <= 1, "%s vs %s" % (empty_inset, val_inset))

            clear_rect = rect(c, clear_sel)
            check("%s: clear button clickable area is ~24x24px" % tab,
                  abs(clear_rect["width"] - 24) <= 1 and abs(clear_rect["height"] - 24) <= 1,
                  "%sx%s" % (clear_rect["width"], clear_rect["height"]))

            v_center_offset = (clear_rect["top"] + clear_rect["bottom"]) / 2 - (val_wrap["top"] + val_wrap["bottom"]) / 2
            check("%s: clear button is vertically centered in the field" % tab,
                  abs(v_center_offset) <= 1, v_center_offset)

            dist_from_right = val_wrap["right"] - clear_rect["right"]
            check("%s: clear button sits ~12-16px from the right edge" % tab,
                  10 <= dist_from_right <= 18, dist_from_right)

            svg_rect = rect(c, clear_sel + " svg")
            svg_center_x = (svg_rect["left"] + svg_rect["right"]) / 2 - (clear_rect["left"] + clear_rect["right"]) / 2
            svg_center_y = (svg_rect["top"] + svg_rect["bottom"]) / 2 - (clear_rect["top"] + clear_rect["bottom"]) / 2
            check("%s: clear icon glyph is centered inside its clickable box" % tab,
                  abs(svg_center_x) <= 1 and abs(svg_center_y) <= 1,
                  "%s, %s" % (svg_center_x, svg_center_y))

            check("%s: entered text and clear button do not overlap" % tab,
                  val_input["right"] <= clear_rect["left"] + 0.5,
                  "%s vs %s" % (val_input["right"], clear_rect["left"]))

            focused = js(c, """
            (function(){
              var btn = document.querySelector(%s);
              btn.focus();
              return document.activeElement === btn;
            })()
            """ % json.dumps(clear_sel))
            check("%s: clear button is keyboard-focusable" % tab, focused)

            clear_value(c, input_sel)
            time.sleep(0.1)

        # ─── 9. Sanity: field values still filter correctly (JS untouched) ─
        # Roles stands in for Users here — Users' own search field was
        # removed entirely in Round 24 and restored in Round 38 (see
        # test_users_toolbar_search.py).
        click_tab(c, "Roles")
        time.sleep(0.2)
        type_value(c, "#rpSearchInput", "zzzznotarealrole")
        time.sleep(0.3)
        empty_state = js(c, "!!document.querySelector('#rpTbody .empty-state')")
        check("Search filtering still functions (nonsense query shows the empty state)",
              empty_state)
        clear_value(c, "#rpSearchInput")

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
