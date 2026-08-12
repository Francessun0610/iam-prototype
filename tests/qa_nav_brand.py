#!/usr/bin/env python3
"""Scratch QA helper for the Ad Console brand-alignment task.
Not part of the automated suite -- ad hoc screenshot/measurement tool.
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
SHOT_DIR = "/tmp/nav_brand_qa"
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
    profile_dir = tempfile.mkdtemp(prefix="iam-nav-brand-qa-")
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


def rects_expr():
    return """
    (function(){
      function r(sel){ var el = document.querySelector(sel); if(!el) return null; var x = el.getBoundingClientRect(); return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height}; }
      return JSON.stringify({
        nav: r('.nav'),
        sidebar: r('#sidebar'),
        rail: r('.atlas-brand-rail'),
        glyph: r('.atlas-brand-glyph'),
        brand: r('.atlas-brand'),
        text: r('.atlas-brand-text'),
        divider: r('.nav-divider')
      });
    })()
    """


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
        c.navigate(base + "/v4/", wait=1.2)
        print("rects:", js(c, rects_expr()))
        c.screenshot(os.path.join(SHOT_DIR, "01_nav_full.png"))
        # crop-ish: just take a viewport screenshot; we'll inspect the top strip
    finally:
        c.close()
