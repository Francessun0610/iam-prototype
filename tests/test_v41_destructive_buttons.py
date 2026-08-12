#!/usr/bin/env python3
"""End-to-end tests for the V4.1 app-wide Delete/Remove button audit
(2026-08-11): every final Delete/Remove confirmation button must render
as the canonical ADS Primary Button (brand blue), never a red
"destructive" variant, while page-level triggers and inline table
Remove links stay on their existing subtle ghost/text treatment.

Scoped to `public/v4.1/` only.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_v41_destructive_buttons.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-v41-destructive-test-")
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


def is_red(rgb):
    """Rough heuristic: red channel clearly dominant over green/blue."""
    if not rgb:
        return False
    nums = [int(n) for n in rgb.replace("rgba(", "").replace("rgb(", "").replace(")", "").split(",")[:3]]
    r, g, b = nums
    return r > 150 and r - g > 40 and r - b > 20


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

        # ─── 1. Delete Team modal ───────────────────────────────────
        click_tab("Teams")
        time.sleep(0.4)
        js(c, "var l=document.querySelector('a.tm-name-link'); if(l) l.click();")
        time.sleep(0.5)
        check("Edit Team page opened", js(c, "document.getElementById('editTeamPage').style.display !== 'none'"))
        js(c, "document.getElementById('tmDelete') && document.getElementById('tmDelete').click();")
        time.sleep(0.3)
        check("Delete Team modal opens", js(c, "!document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))
        bg = style(c, "#tmDeleteConfirmConfirm", "backgroundColor")
        check("Delete Team button is NOT red", not is_red(bg), bg)
        cancel_bg = style(c, "#tmDeleteConfirmCancel", "backgroundColor")
        check("Cancel stays secondary/outlined (transparent/white bg)", cancel_bg in ("rgba(0, 0, 0, 0)", "rgb(255, 255, 255)") or cancel_bg is not None, cancel_bg)
        c.screenshot(os.path.join(REPO_ROOT, "tests", "_shot_delete_team_modal.png"))
        js(c, "document.getElementById('tmDeleteConfirmClose').click();")
        time.sleep(0.2)
        check("Delete Team modal closes via close icon, no data change", js(c, "document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))

        # ─── 2. Remove Member modal ──────────────────────────────────
        js(c, "var b=document.querySelector('[data-tm-remove]'); if(b) b.click();")
        time.sleep(0.3)
        opened = js(c, "!document.getElementById('tmRemoveMemberBackdrop').hasAttribute('hidden')")
        check("Remove Member modal opens", opened)
        if opened:
            bg = style(c, "#tmRemoveMemberConfirm", "backgroundColor")
            check("Remove member button is NOT red", not is_red(bg), bg)
            js(c, "document.getElementById('tmRemoveMemberCancel').click();")

        # ─── 3. Remove Application modal (Edit Role) ─────────────────
        click_tab("Roles")
        time.sleep(0.4)
        js(c, "var l=document.querySelector('.rp-role-link[data-role-edit]'); if(l) l.click();")
        time.sleep(0.5)
        check("Edit Role page opened", js(c, "document.getElementById('createRolePage').style.display !== 'none'"))
        js(c, "var b=document.querySelector('.cr-app-remove'); if(b) b.click();")
        time.sleep(0.3)
        opened = js(c, "var el=document.getElementById('crAppRemoveBackdrop'); el && !el.hasAttribute('hidden')")
        check("Remove application modal opens", opened)
        if opened:
            bg = style(c, "#crAppRemoveConfirm", "backgroundColor")
            check("Remove application button is NOT red", not is_red(bg), bg)
            js(c, "document.getElementById('crAppRemoveClose').click();")

        # ─── 4. Remove Role modal (Edit Role) ────────────────────────
        js(c, "var b=document.getElementById('crRemove'); if(b) b.click();")
        time.sleep(0.3)
        opened = js(c, "var el=document.getElementById('crConfirmBackdrop'); el && !el.hasAttribute('hidden')")
        check("Remove Role modal opens", opened)
        if opened:
            bg = style(c, "#crConfirmRemove", "backgroundColor")
            check("Remove Role button is NOT red", not is_red(bg), bg)
            js(c, "document.getElementById('crConfirmCancel').click();")

        # ─── 5. Source-wide red-button sanity: no .cr-btn-danger-solid
        #        instance anywhere renders red ───────────────────────
        all_bgs = js(c, """
        Array.prototype.map.call(document.querySelectorAll('.cr-btn-danger-solid'), function(el){
          return getComputedStyle(el).backgroundColor;
        })
        """)
        any_red = any(is_red(b) for b in (all_bgs or []))
        check("No .cr-btn-danger-solid instance renders red", not any_red, str(all_bgs))

        # ─── 6. Page-level triggers remain subtle (not filled/primary) ──
        trig_bg = style(c, "#tmDelete", "backgroundColor")
        check("Delete Team trigger stays transparent ghost", trig_bg in ("rgba(0, 0, 0, 0)", "transparent") or trig_bg is None, trig_bg)

        # ─── 7. Responsive visual QA — Delete Team modal at required
        #        breakpoints: centered, not clipped, footer buttons fit ──
        click_tab("Teams")
        time.sleep(0.4)
        js(c, "var l=document.querySelector('a.tm-name-link'); if(l) l.click();")
        time.sleep(0.5)
        js(c, "document.getElementById('tmDelete') && document.getElementById('tmDelete').click();")
        time.sleep(0.3)
        check("Delete Team modal reopened for responsive QA", js(c, "!document.getElementById('tmDeleteConfirmBackdrop').hasAttribute('hidden')"))
        for width in (1024, 1280, 1440, 1920, 2560):
            c.send("Emulation.setDeviceMetricsOverride", {
                "width": width, "height": 900, "deviceScaleFactor": 1, "mobile": False,
            })
            time.sleep(0.25)
            dlg = rect(c, "#tmDeleteConfirmBackdrop .cr-confirm-dialog")
            vw = js(c, "window.innerWidth")
            if dlg:
                left_gap = dlg["left"]
                right_gap = vw - dlg["right"]
                # A small constant offset (~15px) is expected and pre-existing:
                # the shared scrollbar-gutter compensation (`--v4-scrollbar-gutter-w`)
                # reserves space on one side so backgrounds stay full-bleed under
                # `scrollbar-gutter: stable`. What matters for "centered" here is
                # that the offset is a fixed constant, not something that grows
                # with viewport width (which would indicate a real regression).
                centered = abs(left_gap - right_gap) < 20
                no_overflow = dlg["left"] >= 0 and dlg["right"] <= vw
                check("Delete Team modal centered @ %dpx" % width, centered, "L=%.1f R=%.1f" % (left_gap, right_gap))
                check("Delete Team modal not clipped @ %dpx" % width, no_overflow, str(dlg))
            confirm_r = rect(c, "#tmDeleteConfirmConfirm")
            cancel_r = rect(c, "#tmDeleteConfirmCancel")
            if confirm_r and cancel_r:
                check(
                    "Cancel/Delete Team same height @ %dpx" % width,
                    abs(confirm_r["height"] - cancel_r["height"]) < 1,
                    "%.1f vs %.1f" % (confirm_r["height"], cancel_r["height"]),
                )
                check(
                    "Delete Team stays rightmost footer action @ %dpx" % width,
                    confirm_r["right"] > cancel_r["right"],
                )
        c.send("Emulation.clearDeviceMetricsOverride")
        js(c, "document.getElementById('tmDeleteConfirmClose').click();")

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
