#!/usr/bin/env python3
"""Scratch QA helper for the Create Role visual refinement task.
Self-contained: starts its own static server + headless Chrome.
"""
import os
import sys
import json
import socket
import subprocess
import tempfile
import shutil
import atexit
import time

sys.path.insert(0, os.path.dirname(__file__))
from cdp_client import CDP

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(ROOT, "public")
SHOT_DIR = "/tmp/cr_qa"
os.makedirs(SHOT_DIR, exist_ok=True)

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    shutil.which("chromium"),
    shutil.which("google-chrome"),
]


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
    profile_dir = tempfile.mkdtemp(prefix="iam-cr-qa-")
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


def open_create_role(c, base):
    c.navigate(base + "/v4/", wait=1.0)
    js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
    time.sleep(0.3)
    js(c, "var b = Array.from(document.querySelectorAll('button, a')).find(function(x){return x.textContent.trim().indexOf('Create Role')!==-1;}); if (b) b.click();")
    time.sleep(0.4)


def add_application(c, label):
    js(c, "document.getElementById('crAppTrigger').click();")
    time.sleep(0.2)
    js(c, """
    (function(){
      var opt = Array.from(document.querySelectorAll('#crAppMenu [role="option"], #crAppMenu li, #crAppMenu button')).find(function(o){return o.textContent.indexOf(%r) !== -1;});
      if (opt) opt.click();
    })()
    """ % label)
    time.sleep(0.2)
    js(c, "document.getElementById('crAddBtn').click();")
    time.sleep(0.3)


if __name__ == "__main__":
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port
    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)
    atexit.register(lambda: chrome.terminate())
    atexit.register(lambda: shutil.rmtree(profile_dir, ignore_errors=True))

    c = CDP(debug_port)
    try:
        cmd = sys.argv[1] if len(sys.argv) > 1 else "baseline"
        c.send("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        if cmd == "baseline":
            open_create_role(c, base)
            c.screenshot(os.path.join(SHOT_DIR, "01_empty.png"))
            print("url:", js(c, "location.href"))
        elif cmd == "with_app":
            open_create_role(c, base)
            add_application(c, "Core Planning")
            time.sleep(0.3)
            c.screenshot(os.path.join(SHOT_DIR, "02_with_app.png"))
        elif cmd == "scroll_matrix":
            open_create_role(c, base)
            add_application(c, "Core Planning")
            add_application(c, "Identity and Access Management")
            time.sleep(0.3)
            js(c, "document.querySelector('.cr-perms-content').scrollIntoView({block:'end'}); window.scrollBy(0, 400);")
            time.sleep(0.2)
            c.screenshot(os.path.join(SHOT_DIR, "03_matrix.png"))
        elif cmd == "responsive":
            c.send("Emulation.setDeviceMetricsOverride", {"width": 1024, "height": 900, "deviceScaleFactor": 1, "mobile": False})
            open_create_role(c, base)
            add_application(c, "Core Planning")
            time.sleep(0.3)
            c.screenshot(os.path.join(SHOT_DIR, "05_responsive_1024.png"))
            overflow = js(c, "document.documentElement.scrollWidth > document.documentElement.clientWidth")
            print("horizontal overflow at 1024px:", overflow)
        elif cmd == "edit_role":
            c.navigate(base + "/v4/", wait=1.0)
            js(c, "Array.from(document.querySelectorAll('.tab-btn')).find(function(b){return b.textContent.trim()==='Roles';}).click();")
            time.sleep(0.3)
            js(c, "(function(){var l=Array.from(document.querySelectorAll('#rolesPanel a, #rolesPanel .role-link, #rolesPanel td a')); var el=l.find(function(x){return x.textContent.trim().length>0;}); if(el) el.click();})()")
            time.sleep(0.5)
            c.screenshot(os.path.join(SHOT_DIR, "04_edit_role.png"))
            print("editRole crRemove hidden:", js(c, "document.getElementById('crRemove') ? document.getElementById('crRemove').hidden : null"))
            print("editRole crSaveDraft hidden:", js(c, "document.getElementById('crSaveDraft') ? document.getElementById('crSaveDraft').hidden : null"))
            print("editRole crSaveDraft display:", js(c, "getComputedStyle(document.getElementById('crSaveDraft')).display"))
            print("title:", js(c, "document.querySelector('.cr-title') ? document.querySelector('.cr-title').textContent : null"))
        elif cmd == "custom":
            open_create_role(c, base)
            expr = sys.argv[2]
            print(js(c, expr))
    finally:
        c.close()
