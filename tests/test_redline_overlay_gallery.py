#!/usr/bin/env python3
"""End-to-end tests for the Redline Mode overlay galleries — IAM v4.1.

Redline Mode gained two gallery entry points ("Modals" and "Toasts") that
let a designer browse every overlay the application can show and inspect
it with the existing Redline inspector. The galleries never draw an
overlay themselves: each registry entry drives the shipped UI — clicking
the real trigger, typing in the real field — inside Redline's disposable
`?redlinePreview=1` iframe, so what gets measured is the shipped
component. See `REDLINE-OVERLAY-GALLERY.md`.

This file covers the whole feature: the two sidebar rows, the gallery
toolbar and its navigation, that every registered modal and toast
actually reaches its state, that overlays stay frozen and survive
breakpoint changes, that the inspector reports logical CSS pixels for
overlay children, and — the part that matters most — that none of this
touches the user's real page or data.

Same harness as `test_redline_mode.py`: this repo has no bundler or JS
test runner, so the suite drives a real headless Chrome over the DevTools
Protocol against a plain `http.server` serving `public/`.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_redline_overlay_gallery.py

Exits 0 if every check passes, 1 otherwise.
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

results = []


def check(name, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    results.append((status, name, detail))
    print("[%s] %s%s" % (status, name, ("  (%s)" % detail) if detail and not condition else ""))
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
        cwd=PUBLIC_DIR, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    for _ in range(50):
        try:
            with socket.create_connection(("127.0.0.1", port), timeout=0.2):
                return proc
        except OSError:
            time.sleep(0.1)
    raise RuntimeError("static server did not start on port %d" % port)


def launch_chrome(debug_port):
    chrome_bin = next((c for c in CHROME_CANDIDATES if c and os.path.exists(c)), None)
    if not chrome_bin:
        raise RuntimeError("no Chrome/Chromium binary found")
    profile_dir = tempfile.mkdtemp(prefix="iam-gallery-test-")
    proc = subprocess.Popen(
        [
            chrome_bin, "--headless=new", "--disable-gpu", "--no-sandbox",
            "--remote-debugging-port=%d" % debug_port, "--remote-allow-origins=*",
            "--user-data-dir=%s" % profile_dir, "about:blank",
        ],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    import urllib.request
    for _ in range(80):
        try:
            urllib.request.urlopen("http://127.0.0.1:%d/json" % debug_port, timeout=0.3)
            return proc, profile_dir
        except Exception:
            time.sleep(0.15)
    raise RuntimeError("Chrome did not open its debugging port")


# ── small driving helpers ──────────────────────────────────────────────

def js(c, expr):
    return c.eval(expr)


def wait_for(c, expr, timeout=15.0, step=0.15):
    end = time.time() + timeout
    while time.time() < end:
        try:
            if js(c, expr):
                return True
        except Exception:
            pass
        time.sleep(step)
    return False


def dbg(c):
    return js(c, "window.IamRedlineMode.debugState()")


def act(c, action):
    """Clicks a Redline control by its `data-redline-action` value."""
    return js(c, """(function(){
      var b=document.querySelector('[data-redline-action=%s]');
      if(!b) return false; b.click(); return true;})()""" % json.dumps(action))


def in_preview(c, expr):
    """Evaluates `expr` with `d` bound to the preview iframe's document."""
    return js(c, """(function(){
      var f=document.querySelector('iframe.redline__preview');
      if(!f||!f.contentDocument) return null;
      var d=f.contentDocument, w=f.contentWindow;
      return (%s);})()""" % expr)


def registry(c, kind):
    return in_preview(c, """w.IamOverlayGallery.entries('%s').map(function(e){
      return {id:e.id,name:e.name,state:e.stateName,group:e.group,ads:e.ads,source:e.source,variant:e.variant};})""" % kind)


def show_entry(c, kind, entry_id, timeout=15.0):
    """Drives one registry entry directly (faster than stepping Next N times)."""
    js(c, """(function(){var w=document.querySelector('iframe.redline__preview').contentWindow;
      window.__galleryResult=null;
      w.IamOverlayGallery.show(%s,%s).then(function(){window.__galleryResult='ok';},
        function(e){window.__galleryResult='ERR '+(e&&e.message||e);});})()"""
       % (json.dumps(kind), json.dumps(entry_id)))
    end = time.time() + timeout
    while time.time() < end:
        r = js(c, "window.__galleryResult")
        if r:
            time.sleep(0.25)
            return r
        time.sleep(0.12)
    return "TIMEOUT"


def click_preview_element(c, selector):
    """Clicks an element inside the preview the way a designer would —
    a real bubbling click that Redline's selection handler will see."""
    return in_preview(c, """(function(){
      var el=d.querySelector(%s);
      if(!el) return 'missing';
      el.dispatchEvent(new w.MouseEvent('click',{bubbles:true,cancelable:true,view:w}));
      return 'clicked';})()""" % json.dumps(selector))


def inspector_text(c):
    return js(c, """(function(){var i=document.querySelector('.redline__inspector');
      return i?i.textContent.replace(/\\s+/g,' ').trim():'';})()""")


def inspector_component(c):
    return js(c, """(function(){var n=document.querySelector('.redline__inspector-component-name');
      return n?n.textContent.trim():'';})()""")


def enter_gallery(c, mode):
    act(c, "previewmode:" + mode)
    ok = wait_for(c, "window.IamRedlineMode.debugState().galleryTotal > 0")
    time.sleep(1.6)
    return ok


def main():
    port = free_port()
    debug_port = free_port()
    base = "http://127.0.0.1:%d" % port

    server = start_static_server(port)
    atexit.register(lambda: server.terminate())
    chrome, profile_dir = launch_chrome(debug_port)
    atexit.register(lambda: chrome.terminate())
    atexit.register(lambda: shutil.rmtree(profile_dir, ignore_errors=True))

    c = CDP(debug_port)
    c.send("Network.setCacheDisabled", {"cacheDisabled": True})
    c.send("Emulation.setDeviceMetricsOverride",
           {"width": 1600, "height": 1000, "deviceScaleFactor": 1, "mobile": False})

    c.navigate(base + "/v4.1/", wait=1.4)
    check("V4.1 app loads", js(c, "!!document.querySelector('main.page')"))
    check("overlay registry does not register itself on the real page",
          js(c, "typeof window.IamOverlayGallery") == "object"
          and js(c, "window.IamOverlayGallery.active()") is None)

    # A fingerprint of the user's real page, re-checked at the very end.
    source_state = js(c, """(function(){
      return {url: location.href,
              tab: (document.querySelector('.tab-btn.on')||{}).textContent,
              users: document.querySelectorAll('#usersTable tbody tr').length,
              teams: (window.__TEAMS_DATA||[]).length,
              overlays: document.querySelectorAll('#redline-preview-overlay-root, .cr-confirm-backdrop:not([hidden])').length,
              toasts: document.querySelectorAll('#edlToastContainer .edl-toast').length};})()""")

    js(c, "window.IamRedlineMode.enable('test')")
    check("Redline activates", wait_for(c, "window.IamRedlineMode.debugState().frameReady === true"))
    time.sleep(0.8)

    # ── 1. Sidebar entry points ────────────────────────────────────────
    sidebar = js(c, """(function(){
      var sec=document.querySelector('.redline__section--overlays');
      if(!sec) return null;
      var rows=Array.prototype.map.call(sec.querySelectorAll('.redline__nav-row'),function(b){
        return {tag:b.tagName, label:(b.querySelector('.redline__nav-row-label')||{}).textContent,
                aria:b.getAttribute('aria-label'), pressed:b.getAttribute('aria-pressed'),
                action:b.getAttribute('data-redline-action'),
                chevron: !!b.querySelector('.redline__nav-row-chevron'),
                tabbable: b.tabIndex >= 0 && !b.disabled};});
      return {title:(sec.querySelector('.redline__section-title')||{}).textContent,
              rows:rows, text:sec.textContent.replace(/\\s+/g,' ').trim()};})()""")
    check("OVERLAYS section exists in the sidebar", bool(sidebar))
    check("section is titled Overlays", (sidebar or {}).get("title", "").strip().lower() == "overlays")
    rows = (sidebar or {}).get("rows", [])
    check("sidebar shows exactly two entry rows", len(rows) == 2, str(len(rows)))
    labels = [(r.get("label") or "").strip() for r in rows]
    check("rows are Modals and Toasts", labels == ["Modals", "Toasts"], str(labels))
    check("both rows are real buttons", all(r["tag"] == "BUTTON" for r in rows))
    check("accessible names are correct",
          [r["aria"] for r in rows] == ["Open modal gallery", "Open toast gallery"],
          str([r["aria"] for r in rows]))
    check("both rows are keyboard reachable", all(r["tabbable"] for r in rows))
    check("both rows use a navigation chevron", all(r["chevron"] for r in rows))
    section_text = (sidebar or {}).get("text", "")
    check("sidebar lists no individual overlay names",
          "Add user" not in section_text and "Delete team" not in section_text)
    check("sidebar shows no counts", not any(ch.isdigit() for ch in section_text))
    check("neither row is selected before a gallery is opened",
          all(r["pressed"] == "false" for r in rows))
    check("Redline opens in page preview mode", dbg(c)["previewMode"] == "page")
    check("gallery toolbar is hidden in page mode",
          js(c, "!!document.querySelector('.redline__gallery-bar[hidden]')"))

    # ── 2. Modal gallery opens ─────────────────────────────────────────
    check("modal gallery opens from the sidebar", enter_gallery(c, "modal-gallery"))
    d = dbg(c)
    check("preview mode is modal-gallery", d["previewMode"] == "modal-gallery")
    modals = registry(c, "modal") or []
    toasts = registry(c, "toast") or []
    check("modal registry is populated", len(modals) > 0, str(len(modals)))
    check("registry total matches the toolbar", d["galleryTotal"] == len(modals),
          "%s vs %s" % (d["galleryTotal"], len(modals)))
    check("Modals row reports itself selected",
          js(c, """(function(){var b=document.querySelector('[data-redline-action="previewmode:modal-gallery"]');
            return b && b.getAttribute('aria-pressed')==='true';})()"""))
    check("gallery toolbar is visible",
          js(c, "!document.querySelector('.redline__gallery-bar').hasAttribute('hidden')"))

    bar = js(c, """(function(){var b=document.querySelector('.redline__gallery-bar');
      return {role:b.getAttribute('role'),
              back:(b.querySelector('.redline__gallery-back')||{}).textContent,
              backAria:(b.querySelector('.redline__gallery-back')||{}).getAttribute('aria-label'),
              title:(b.querySelector('[data-redline-gallery-title]')||{}).textContent,
              count:(b.querySelector('[data-redline-gallery-count]')||{}).textContent,
              prevAria:(b.querySelector('[data-redline-action="gallery:prev"]')||{}).getAttribute('aria-label'),
              nextAria:(b.querySelector('[data-redline-action="gallery:next"]')||{}).getAttribute('aria-label'),
              prevDisabled:(b.querySelector('[data-redline-action="gallery:prev"]')||{}).disabled,
              nextDisabled:(b.querySelector('[data-redline-action="gallery:next"]')||{}).disabled,
              reset: !!b.querySelector('[data-redline-action="gallery:reset"]'),
              inCanvas: !!b.closest('.redline__canvas'),
              chrome: b.hasAttribute('data-redline-ui')};})()""")
    check("toolbar is a toolbar", bar["role"] == "toolbar")
    check("Back to page is visible", (bar["back"] or "").strip() == "Back to page")
    check("Back to page is labelled Return to current page", bar["backAria"] == "Return to current page")
    check("toolbar shows the current overlay name and state",
          "\u2014" in (bar["title"] or "") and (bar["title"] or "").strip() != "")
    check("toolbar shows index and total", (bar["count"] or "").strip() == "1 of %d" % len(modals),
          bar["count"])
    check("Previous/Next are labelled for modals",
          bar["prevAria"] == "Previous modal" and bar["nextAria"] == "Next modal")
    check("Previous is disabled on the first entry", bar["prevDisabled"] is True)
    check("Next is enabled on the first entry", bar["nextDisabled"] is False)
    check("toolbar offers a Reset control", bar["reset"] is True)
    check("toolbar sits outside the inspectable canvas", bar["inCanvas"] is False)
    check("toolbar is marked as Redline chrome", bar["chrome"] is True)

    # ── 3. Previous / Next ─────────────────────────────────────────────
    act(c, "gallery:next")
    time.sleep(1.5)
    d2 = dbg(c)
    check("Next advances the entry", d2["galleryIndex"] == 1, str(d2["galleryIndex"]))
    check("counter follows the entry",
          js(c, "document.querySelector('[data-redline-gallery-count]').textContent").strip()
          == "2 of %d" % len(modals))
    check("Previous is enabled once past the first entry",
          js(c, """!document.querySelector('[data-redline-action="gallery:prev"]').disabled"""))
    act(c, "gallery:prev")
    time.sleep(1.5)
    check("Previous goes back", dbg(c)["galleryIndex"] == 0)

    js(c, "window.IamRedlineMode.showGalleryEntry(%d)" % (len(modals) - 1))
    check("navigation reaches the final entry",
          wait_for(c, "window.IamRedlineMode.debugState().galleryIndex === %d" % (len(modals) - 1)))
    time.sleep(1.4)
    check("Next is disabled on the final entry",
          js(c, """document.querySelector('[data-redline-action="gallery:next"]').disabled""") is True)
    check("gallery does not wrap past the end",
          js(c, "document.querySelector('[data-redline-gallery-count]').textContent").strip()
          == "%d of %d" % (len(modals), len(modals)))
    js(c, "window.IamRedlineMode.showGalleryEntry(0)")
    time.sleep(1.4)

    # Arrow shortcuts: available while browsing, silent while typing.
    def arrow(key_name, code):
        c.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": key_name, "code": key_name,
                                          "windowsVirtualKeyCode": code, "nativeVirtualKeyCode": code})
        c.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": key_name, "code": key_name,
                                          "windowsVirtualKeyCode": code, "nativeVirtualKeyCode": code})

    js(c, "window.IamRedlineMode.showGalleryEntry(9)")   # a confirmation dialog
    time.sleep(2.2)
    confirm_index = dbg(c)["galleryIndex"]
    check("destructive confirmation focuses the least destructive action",
          (in_preview(c, "d.activeElement && d.activeElement.id") or "").lower().find("cancel") >= 0,
          in_preview(c, "d.activeElement && d.activeElement.id"))
    arrow("ArrowRight", 39)
    time.sleep(2.2)
    check("Right Arrow advances the gallery", dbg(c)["galleryIndex"] == confirm_index + 1)
    arrow("ArrowLeft", 37)
    time.sleep(2.2)
    check("Left Arrow goes back", dbg(c)["galleryIndex"] == confirm_index)

    js(c, "window.IamRedlineMode.showGalleryEntry(0)")   # Add user focuses its search field
    time.sleep(2.2)
    typing_index = dbg(c)["galleryIndex"]
    check("a search modal keeps focus in its own field",
          in_preview(c, "d.activeElement && d.activeElement.tagName") == "INPUT")
    arrow("ArrowRight", 39)
    time.sleep(1.6)
    check("arrow shortcuts do not fire while focus is in a modal input",
          dbg(c)["galleryIndex"] == typing_index)

    # ── 4. Every registered modal reaches its state ────────────────────
    modal_failures = []
    dialog_semantics = []
    for entry in modals:
        res = show_entry(c, "modal", entry["id"])
        probe = in_preview(c, """(function(){
          var root=d.getElementById('redline-preview-overlay-root');
          var kids=root?Array.prototype.slice.call(root.children):[];
          var painted=kids.filter(function(el){var r=el.getBoundingClientRect();return r.width>0&&r.height>0;});
          var dlg=root?root.querySelector('[role="dialog"],[role="alertdialog"]'):null;
          return {kids:kids.length, painted:painted.length,
                  role:dlg?dlg.getAttribute('role'):null,
                  modal:dlg?dlg.getAttribute('aria-modal'):null,
                  named:dlg?!!(dlg.getAttribute('aria-label')||dlg.getAttribute('aria-labelledby')):false,
                  w:dlg?Math.round(dlg.getBoundingClientRect().width):0};})()""") or {}
        ok = res == "ok" and probe.get("painted", 0) > 0
        if not ok:
            modal_failures.append((entry["id"], res, probe))
        if probe.get("role"):
            dialog_semantics.append((entry["id"], probe))
    check("every registered modal renders without error (%d entries)" % len(modals),
          not modal_failures, str(modal_failures[:3]))
    check("every dialog names itself", all(p["named"] for _, p in dialog_semantics))
    check("modal dialogs declare aria-modal",
          all(p["modal"] == "true" for i, p in dialog_semantics if not i.startswith("rp-functions")),
          str([i for i, p in dialog_semantics if p["modal"] != "true"]))
    check("registry ids are unique", len(set(m["id"] for m in modals)) == len(modals))
    check("every modal entry records its source file", all(m["source"] for m in modals))
    check("every modal entry records an ADS mapping", all(m["ads"] for m in modals))

    # ── 5. Backdrop scoping and preview roots ──────────────────────────
    show_entry(c, "modal", "add-user-results")
    roots = in_preview(c, """(function(){
      var pr=d.getElementById('redline-preview-root'), orr=d.getElementById('redline-preview-overlay-root');
      var bd=d.getElementById('auAddUserModalBackdrop');
      var r=bd.getBoundingClientRect();
      return {previewRoot:!!pr, overlayRoot:!!orr,
              adopted: bd.parentElement && bd.parentElement.id==='redline-preview-overlay-root',
              backdropW:Math.round(r.width), backdropH:Math.round(r.height),
              viewportW:w.innerWidth, viewportH:w.innerHeight,
              overlayRootIsChrome: orr.hasAttribute('data-redline-ui')};})()""")
    check("preview roots exist in the preview document",
          roots["previewRoot"] and roots["overlayRoot"])
    check("the open overlay is adopted into the preview overlay root", roots["adopted"] is True)
    check("backdrop covers exactly the logical product viewport",
          roots["backdropW"] == roots["viewportW"] and roots["backdropH"] == roots["viewportH"],
          str(roots))
    check("overlay root is not marked as Redline chrome (its contents stay inspectable)",
          roots["overlayRootIsChrome"] is False)
    check("backdrop cannot reach the Redline sidebar or inspector",
          js(c, """(function(){var f=document.querySelector('iframe.redline__preview');
            var fr=f.getBoundingClientRect();
            var side=document.querySelector('.redline__panel--left').getBoundingClientRect();
            var ins=document.querySelector('.redline__panel--right').getBoundingClientRect();
            return fr.left >= side.right - 1 && fr.right <= ins.left + 1;})()"""))

    # ── 6. Inspection and logical-pixel measurement ────────────────────
    logical = in_preview(c, """(function(){
      var el=d.querySelector('#auAddUserModalBackdrop .cr-confirm-dialog');
      var r=el.getBoundingClientRect();
      return {w:Math.round(r.width), h:Math.round(r.height)};})()""")
    scale = dbg(c)["previewScale"]
    check("preview is visually scaled (so scale-independence is actually tested)",
          scale != 1, "scale=%s" % scale)

    inspect_targets = [
        ("#auAddUserModalBackdrop", "Modal"),
        ("#auAddUserModalBackdrop .cr-confirm-dialog", "Modal"),
        ("#auAddUserModalTitle", None),
        ("#auAddUserModalClose", None),
        ("#auAddUserSearchInput", "Search"),
        ("#auAddUserListbox [role='option']", None),
        ("#auAddUserNext", "Button"),
    ]
    inspect_failures = []
    for selector, expected in inspect_targets:
        clicked = click_preview_element(c, selector)
        time.sleep(0.3)
        locked = dbg(c)["hasLockedSelection"]
        comp = inspector_component(c)
        if clicked != "clicked" or not locked:
            inspect_failures.append((selector, clicked, locked, comp))
        elif expected and expected not in comp:
            inspect_failures.append((selector, "component=%s" % comp, locked, comp))
    check("every listed modal part can be selected and identified",
          not inspect_failures, str(inspect_failures))

    click_preview_element(c, "#auAddUserModalBackdrop .cr-confirm-dialog")
    time.sleep(0.35)
    text = inspector_text(c)
    check("inspector reports width in logical CSS pixels, not scaled ones",
          ("%d px" % logical["w"]) in text, "expected %d px" % logical["w"])
    check("inspector reports height in logical CSS pixels",
          ("%d px" % logical["h"]) in text, "expected %d px" % logical["h"])
    check("inspector reports colors for the selection", "Colors" in text)
    check("inspector reports position and parent", "Position" in text and "Parent" in text)

    # Typography is reported for elements that actually render text.
    click_preview_element(c, "#auAddUserModalTitle")
    time.sleep(0.35)
    title_text = inspector_text(c)
    check("inspector reports typography for a text element",
          "Typography & text" in title_text and "Font family" in title_text
          and "Size / line height" in title_text, title_text[:160])

    # Gallery chrome must never be mistaken for a product component.
    js(c, """document.querySelector('[data-redline-action="gallery:next"]').click()""")
    time.sleep(1.6)
    check("changing entry clears the stale selection",
          dbg(c)["hasLockedSelection"] is False)
    show_entry(c, "modal", "add-user-results")
    chrome_failures = []
    for selector in ['[data-redline-action="gallery:next"]',
                     '[data-redline-action="gallery:reset"]',
                     '[data-redline-action="previewmode:modal-gallery"]',
                     ".redline__gallery-title"]:
        js(c, """(function(){var b=document.querySelector(%s);
          if(b) b.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));})()"""
           % json.dumps(selector))
        time.sleep(0.9)
        if dbg(c)["hasLockedSelection"]:
            chrome_failures.append((selector, inspector_component(c)))
    check("gallery controls are never selected as product components",
          not chrome_failures, str(chrome_failures))

    # Leaving via Back to page must not select whatever the route replay clicks.
    js(c, """document.querySelector('.redline__gallery-back').click()""")
    check("Back to page leaves page mode selected-free",
          wait_for(c, "window.IamRedlineMode.debugState().previewMode === 'page'"))
    time.sleep(2.0)
    check("returning to the page does not select a control the route replay pressed",
          dbg(c)["hasLockedSelection"] is False, inspector_component(c))
    enter_gallery(c, "modal-gallery")

    # ── 7. Breakpoints ─────────────────────────────────────────────────
    show_entry(c, "modal", "add-members-multi-selected")
    bp_failures = []
    for bp in ["1024", "1280", "1440", "1920", "2560", "current"]:
        act(c, "breakpoint:" + bp)
        time.sleep(1.6)
        st = in_preview(c, """(function(){
          var root=d.getElementById('redline-preview-overlay-root');
          var painted=root?Array.prototype.slice.call(root.children).filter(function(el){
            var r=el.getBoundingClientRect(); return r.width>0&&r.height>0;}).length:0;
          var dlg=root?root.querySelector('[role="dialog"]'):null;
          var r=dlg?dlg.getBoundingClientRect():null;
          return {painted:painted, vw:w.innerWidth,
                  dlgW:r?Math.round(r.width):0,
                  centered: r?Math.abs((r.left+r.width/2)-w.innerWidth/2)<=1:false};})()""") or {}
        mode = dbg(c)["previewMode"]
        if not st.get("painted") or mode != "modal-gallery" or not st.get("centered"):
            bp_failures.append((bp, mode, st))
    check("every breakpoint keeps a modal on screen, centered, in gallery mode",
          not bp_failures, str(bp_failures))
    act(c, "breakpoint:current")
    time.sleep(1.5)

    # ── 8. Measurement modes don't reset the gallery ───────────────────
    show_entry(c, "modal", "add-user-results")
    before_entry = in_preview(c, "w.IamOverlayGallery.active().id")
    for action in ["mode:grid", "toggle:measurements", "toggle:gridoverlay", "mode:clean"]:
        act(c, action)
        time.sleep(0.35)
    check("Clean Spec / 8pt Grid / overlay toggles preserve the selected overlay",
          in_preview(c, "w.IamOverlayGallery.active().id") == before_entry
          and dbg(c)["previewMode"] == "modal-gallery")
    check("8pt Grid mode still applies in the gallery",
          js(c, """(function(){document.querySelector('[data-redline-action="mode:grid"]').click();
            return window.IamRedlineMode.debugState().measureMode==='grid';})()"""))
    act(c, "mode:clean")

    # ── 9. Toast gallery ───────────────────────────────────────────────
    check("toast gallery opens from the sidebar", enter_gallery(c, "toast-gallery"))
    check("preview mode is toast-gallery", dbg(c)["previewMode"] == "toast-gallery")
    check("switching galleries cleans up the modal gallery",
          in_preview(c, """(function(){
            var open=d.querySelectorAll('.cr-confirm-backdrop:not([hidden])').length;
            return open===0;})()"""))
    check("toast registry is populated", len(toasts) > 0, str(len(toasts)))
    check("toolbar total matches the toast registry", dbg(c)["galleryTotal"] == len(toasts))
    check("Previous/Next are relabelled for toasts",
          js(c, """(function(){var b=document.querySelector('.redline__gallery-bar');
            return b.querySelector('[data-redline-action="gallery:prev"]').getAttribute('aria-label')==='Previous toast'
              && b.querySelector('[data-redline-action="gallery:next"]').getAttribute('aria-label')==='Next toast';})()"""))
    check("toolbar declares the toast frozen, outside the preview",
          js(c, """(function(){var f=document.querySelector('[data-redline-gallery-frozen]');
            return !!f && !f.hasAttribute('hidden') && f.textContent.trim()==='Frozen for inspection'
              && !f.closest('.redline__canvas');})()"""))

    toast_failures = []
    for entry in toasts:
        res = show_entry(c, "toast", entry["id"])
        probe = in_preview(c, """(function(){
          var root=d.getElementById('redline-preview-overlay-root');
          var stack=root?root.querySelector('#edlToastContainer'):null;
          var items=stack?Array.prototype.slice.call(stack.querySelectorAll('.edl-toast')):[];
          return {count:items.length,
                  roles:items.map(function(t){return t.getAttribute('role');}),
                  variants:items.map(function(t){return (t.className.match(/edl-toast--(\\w+)/)||[])[1];}),
                  live: stack?stack.getAttribute('aria-live'):null,
                  closable: items.every(function(t){var b=t.querySelector('.edl-toast-close');
                    return !!b && !!b.getAttribute('aria-label');}),
                  iconed: items.every(function(t){return !!t.querySelector('.edl-toast-icon');}),
                  titled: items.every(function(t){return !!t.querySelector('.edl-toast-title');}),
                  w: items.length?Math.round(items[0].getBoundingClientRect().width):0};})()""") or {}
        ok = (res == "ok" and probe.get("count", 0) > 0 and probe.get("w", 0) > 0
              and probe.get("closable") and probe.get("iconed") and probe.get("titled"))
        if not ok:
            toast_failures.append((entry["id"], res, probe))
        # Urgency mapping, per toast rather than per entry: a stack entry's
        # declared variant describes the stack, its members carry their own.
        expected = ["alert" if v in ("error", "warning") else "status"
                    for v in (probe.get("variants") or [])]
        if probe.get("roles") and probe["roles"] != expected:
            toast_failures.append((entry["id"], "role/variant mismatch", probe))
    check("every registered toast renders with icon, title and labelled close (%d entries)" % len(toasts),
          not toast_failures, str(toast_failures[:3]))
    check("toast registry ids are unique", len(set(t["id"] for t in toasts)) == len(toasts))
    check("every toast entry declares a variant", all(t["variant"] for t in toasts))

    # Stacks: ordering, gap and individual inspectability.
    show_entry(c, "toast", "toast-stack-mixed")
    stack = in_preview(c, """(function(){
      var items=Array.prototype.slice.call(d.querySelectorAll('#edlToastContainer .edl-toast'));
      var boxes=items.map(function(t){var r=t.getBoundingClientRect();
        return {top:r.top,h:r.height,variant:(t.className.match(/edl-toast--(\\w+)/)||[])[1]};});
      var gaps=[]; for(var i=1;i<boxes.length;i++){gaps.push(Math.round(boxes[i].top-(boxes[i-1].top+boxes[i-1].h)));}
      return {order:boxes.map(function(b){return b.variant;}), gaps:gaps,
              inset: Math.round(w.innerWidth - (items[0].getBoundingClientRect().right))};})()""")
    check("stacked toasts keep production order", stack["order"] == ["success", "warning", "error"],
          str(stack["order"]))
    check("stack gap is uniform", len(set(stack["gaps"])) == 1, str(stack["gaps"]))
    check("stack keeps its viewport inset", stack["inset"] > 0, str(stack["inset"]))
    for selector in ["#edlToastContainer", "#edlToastContainer .edl-toast",
                     "#edlToastContainer .edl-toast-icon", "#edlToastContainer .edl-toast-title",
                     "#edlToastContainer .edl-toast-body", "#edlToastContainer .edl-toast-close"]:
        click_preview_element(c, selector)
        time.sleep(0.25)
        if not check("toast part is inspectable: %s" % selector,
                     dbg(c)["hasLockedSelection"] and "Toast" in inspector_component(c),
                     inspector_component(c)):
            break

    # Frozen: the production auto-dismiss is 6s, so outlive it.
    show_entry(c, "toast", "toast-user-added")
    time.sleep(7.5)
    check("toast does not auto-dismiss while parked in the gallery",
          in_preview(c, "d.querySelectorAll('#edlToastContainer .edl-toast').length") == 1)
    act(c, "breakpoint:1280")
    time.sleep(1.6)
    check("toast survives a breakpoint change",
          in_preview(c, "d.querySelectorAll('#edlToastContainer .edl-toast').length") >= 1)
    act(c, "breakpoint:current")
    time.sleep(1.5)
    in_preview(c, """(function(){var b=d.querySelector('#edlToastContainer .edl-toast-close');
      if(b) b.dispatchEvent(new w.MouseEvent('click',{bubbles:true,cancelable:true,view:w}));return true;})()""")
    time.sleep(0.6)
    act(c, "gallery:reset")
    check("Reset brings a manually dismissed toast back",
          wait_for(c, """(function(){var f=document.querySelector('iframe.redline__preview');
            return f.contentDocument.querySelectorAll('#edlToastContainer .edl-toast').length>0;})()""", 8))

    # ── 10. No production mutation, and a clean way home ───────────────
    preview_data = in_preview(c, """({teams:(w.__TEAMS_DATA||[]).length,
      users:d.querySelectorAll('#usersTable tbody tr').length})""")
    check("gallery drives leave the preview's own data intact",
          preview_data["teams"] == source_state["teams"], str(preview_data))

    act(c, "previewmode:page")
    check("Back to page returns to page mode",
          wait_for(c, "window.IamRedlineMode.debugState().previewMode === 'page'"))
    time.sleep(1.8)
    check("gallery toolbar is hidden again",
          js(c, "document.querySelector('.redline__gallery-bar').hasAttribute('hidden')"))
    check("no gallery overlay survives the return to page mode",
          in_preview(c, """(function(){
            var root=d.getElementById('redline-preview-overlay-root');
            var open=d.querySelectorAll('.cr-confirm-backdrop:not([hidden])').length;
            var toasts=d.querySelectorAll('#edlToastContainer .edl-toast').length;
            return (!root || root.childElementCount===0) && open===0 && toasts===0;})()"""))
    check("neither sidebar row reports itself selected in page mode",
          js(c, """(function(){return Array.prototype.every.call(
            document.querySelectorAll('.redline__nav-row'),
            function(b){return b.getAttribute('aria-pressed')==='false';});})()"""))

    # Repeated navigation must not leak nodes or listeners.
    node_before = js(c, "document.getElementsByTagName('*').length")
    for _ in range(3):
        enter_gallery(c, "modal-gallery")
        act(c, "gallery:next")
        time.sleep(1.2)
        enter_gallery(c, "toast-gallery")
        act(c, "previewmode:page")
        time.sleep(1.2)
    node_after = js(c, "document.getElementsByTagName('*').length")
    check("repeated gallery navigation does not leak host DOM nodes",
          node_after - node_before <= 4, "%d -> %d" % (node_before, node_after))
    check("one gallery toolbar exists no matter how often galleries are entered",
          js(c, "document.querySelectorAll('.redline__gallery-bar').length") == 1)
    check("one preview iframe exists after repeated navigation",
          js(c, "document.querySelectorAll('iframe.redline__preview').length") == 1)

    # ── 11. The user's real page is exactly where they left it ─────────
    js(c, "window.IamRedlineMode.disable()")
    time.sleep(1.2)
    after = js(c, """(function(){
      return {url: location.href,
              tab: (document.querySelector('.tab-btn.on')||{}).textContent,
              users: document.querySelectorAll('#usersTable tbody tr').length,
              teams: (window.__TEAMS_DATA||[]).length,
              overlays: document.querySelectorAll('#redline-preview-overlay-root, .cr-confirm-backdrop:not([hidden])').length,
              toasts: document.querySelectorAll('#edlToastContainer .edl-toast').length,
              redline: !!document.querySelector('.redline'),
              frame: !!document.querySelector('iframe.redline__preview')};})()""")
    check("closing Redline restores the exact source page", after["url"] == source_state["url"]
          and after["tab"] == source_state["tab"] and after["users"] == source_state["users"])
    check("no application data changed", after["teams"] == source_state["teams"])
    check("no gallery overlay leaked onto the real page", after["overlays"] == 0)
    check("no gallery toast leaked onto the real page", after["toasts"] == 0)
    check("Redline workspace is gone", not after["redline"] and not after["frame"])
    check("gallery registry left nothing mounted on the real page",
          js(c, "window.IamOverlayGallery.active()") is None)

    js(c, "window.IamRedlineMode.enable('test')")
    check("re-entering Redline starts clean",
          wait_for(c, "window.IamRedlineMode.debugState().frameReady === true")
          and dbg(c)["previewMode"] == "page")
    js(c, "window.IamRedlineMode.disable()")

    # ── summary ────────────────────────────────────────────────────────
    failed = [r for r in results if r[0] == "FAIL"]
    print("\n%d checks, %d passed, %d failed" % (len(results), len(results) - len(failed), len(failed)))
    for status, name, detail in failed:
        print("  FAIL: %s  %s" % (name, detail))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
