#!/usr/bin/env python3
"""V4.1 compact-desktop toolbar and Redline preset regression coverage."""

import os
import shutil
import sys
import time

sys.path.insert(0, os.path.dirname(__file__))
from cdp_client import CDP  # noqa: E402
from test_redline_canvas_architecture import (  # noqa: E402
    click_selector,
    enable_redline,
    free_port,
    js,
    launch_chrome,
    start_static_server,
)

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCREEN_DIR = os.path.join(REPO_ROOT, "qa_screens")
WIDTHS = (1024, 1060, 1099, 1100, 1101, 1150, 1280)
results = []


def check(name, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    results.append((status, name, detail))
    print("[%s] %s%s" % (status, name, ("  (%s)" % detail) if detail and not condition else ""))


def set_viewport(c, width, height=768):
    c.send("Emulation.setDeviceMetricsOverride", {
        "width": width, "height": height, "deviceScaleFactor": 1, "mobile": False,
    })


def toolbar_state(c, tab_index):
    js(c, "document.querySelectorAll('.tab-btn')[%d].click()" % tab_index)
    time.sleep(0.08)
    panel = ("usersPanel", "rolesPanel", "teamsPanel")[tab_index]
    return js(c, """(function(){
      var panel = document.getElementById(%r);
      var bar = panel.querySelector('.tbar');
      var controls = Array.from(bar.querySelectorAll(
        ':scope > .tbar-l > button, :scope > .tbar-l > .seg-ctrl, ' +
        ':scope > .tbar-l > .ads-search, :scope > .tbar-r > button'
      )).filter(function(el) {
        var cs = getComputedStyle(el);
        return cs.display !== 'none' && cs.visibility !== 'hidden';
      });
      var br = bar.getBoundingClientRect();
      return {
        panel: %r,
        tops: controls.map(function(el){ return Math.round(el.getBoundingClientRect().top); }),
        centers: controls.map(function(el){var r=el.getBoundingClientRect();return Math.round(r.top+r.height/2);}),
        labels: Array.from(bar.querySelectorAll('.toolbar-action-label')).map(function(el){
          return getComputedStyle(el).display;
        }),
        searchWidth: Math.round(panel.querySelector('.ads-search').getBoundingClientRect().width),
        barScrolls: bar.scrollWidth > bar.clientWidth + 1,
        wraps: controls.some(function(el){ var r=el.getBoundingClientRect(); return r.bottom > br.bottom + 1; }),
        exportWidth: (function(){var el=document.getElementById('usersExportBtn');return el&&panel.contains(el)?Math.round(el.getBoundingClientRect().width):null;})(),
        addWidth: (function(){var el=panel.querySelector('.tbar-r .btn-ghost');return el?Math.round(el.getBoundingClientRect().width):null;})()
      };
    })()""" % (panel, panel))


def main():
    port = free_port()
    server = start_static_server(port)
    chrome = None
    profile = None
    try:
        debug_port = free_port()
        chrome, profile = launch_chrome(debug_port)
        c = CDP(debug_port)
        c.send("Network.setCacheDisabled", {"cacheDisabled": True})
        c.send("Runtime.enable")
        os.makedirs(SCREEN_DIR, exist_ok=True)

        states = {}
        for width in WIDTHS:
            set_viewport(c, width)
            c.navigate("http://127.0.0.1:%d/v4.1/" % port, wait=0.7)
            states[width] = toolbar_state(c, 0)
            compact = width <= 1100
            state = states[width]
            check("%d toolbar stays on one row" % width,
                  len(set(state["centers"])) == 1 and not state["wraps"] and not state["barScrolls"], str(state))
            check("%d action-label mode is correct" % width,
                  all((v == "none") if compact else (v != "none") for v in state["labels"]), str(state))
            check("%d search remains usable and bounded" % width,
                  140 <= state["searchWidth"] <= (280 if compact else 600), str(state))
            if compact:
                check("%d Users icon buttons retain ADS hit targets" % width,
                      state["exportWidth"] == 36 and state["addWidth"] == 36, str(state))
            if width in (1024, 1100, 1280):
                c.screenshot(os.path.join(SCREEN_DIR, "v41_compact_users_%d.png" % width))

        set_viewport(c, 1024)
        c.navigate("http://127.0.0.1:%d/v4.1/" % port, wait=0.7)
        roles = toolbar_state(c, 1)
        teams = toolbar_state(c, 2)
        check("Roles compact toolbar is one row with 36px Create role button",
              len(set(roles["centers"])) == 1 and roles["addWidth"] == 36 and roles["labels"] == ["none"], str(roles))
        check("Teams compact toolbar stays one row with usable search and no invented action",
              len(set(teams["centers"])) == 1 and teams["addWidth"] is None and teams["searchWidth"] >= 180, str(teams))

        toolbar_state(c, 0)
        metadata = js(c, """(function(){
          function a(id){var e=document.getElementById(id);return {
            aria:e.getAttribute('aria-label'), tip:e.getAttribute('data-tooltip'),
            component:e.getAttribute('data-ads-component'), variant:e.getAttribute('data-ads-variant')
          };}
          return {export:a('usersExportBtn'), add:a('usersAddBtn'), role:a('rolesCreateBtn')};
        })()""")
        check("Compact icon buttons expose stable names, ADS tooltips, and component metadata",
              metadata == {
                  "export": {"aria": "Export users", "tip": "Export users", "component": "button", "variant": "ghost"},
                  "add": {"aria": "Add user", "tip": "Add user", "component": "button", "variant": "primary"},
                  "role": {"aria": "Create role", "tip": "Create role", "component": "button", "variant": "primary"},
              }, str(metadata))
        js(c, """(function(){
          var el=document.getElementById('usersAddBtn');
          el.blur();
          el.focus();
          el.dispatchEvent(new FocusEvent('focusin', {bubbles:true}));
        })()""")
        time.sleep(0.15)
        check("Keyboard focus displays the ADS tooltip",
              js(c, "document.getElementById('statusTooltip').classList.contains('is-visible')") is True)
        c.key("Escape")
        time.sleep(0.05)
        check("Escape dismisses the ADS tooltip",
              js(c, "document.getElementById('statusTooltip').classList.contains('is-visible')") is False)

        set_viewport(c, 1600, 900)
        c.navigate("http://127.0.0.1:%d/v4.1/" % port, wait=0.8)
        enable_redline(c, wait=0.5)
        compact_label = js(c, "document.querySelector('[data-redline-action=\"breakpoint:1024\"] span').textContent")
        check("Redline names the 1024x768 preset Compact", compact_label == "Compact", compact_label)
        click_selector(c, '[data-redline-action="breakpoint:1024"]', wait=0.7)
        redline_compact = js(c, """(function(){
          var f=document.querySelector('.redline__canvas iframe, iframe.redline__frame');
          var d=f.contentDocument;
          return {width:f.contentWindow.innerWidth,
            addLabel:getComputedStyle(d.querySelector('#usersAddBtn .toolbar-action-label')).display};
        })()""")
        check("Redline Compact renders the live 1024px compact toolbar",
              redline_compact == {"width": 1024, "addLabel": "none"}, str(redline_compact))
        click_selector(c, '[data-redline-action="breakpoint:1280"]', wait=0.7)
        redline_desktop = js(c, """(function(){
          var f=document.querySelector('.redline__canvas iframe, iframe.redline__frame');
          var d=f.contentDocument;
          return {width:f.contentWindow.innerWidth,
            addLabel:getComputedStyle(d.querySelector('#usersAddBtn .toolbar-action-label')).display};
        })()""")
        check("Redline 1280 immediately restores the live full-label toolbar",
              redline_desktop["width"] == 1280 and redline_desktop["addLabel"] != "none",
              str(redline_desktop))
    finally:
        if chrome:
            chrome.terminate()
            try:
                chrome.wait(timeout=5)
            except Exception:
                chrome.kill()
        if profile:
            shutil.rmtree(profile, ignore_errors=True)
        server.terminate()

    failed = [r for r in results if r[0] == "FAIL"]
    print("\n%d passed, %d failed" % (len(results) - len(failed), len(failed)))
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
