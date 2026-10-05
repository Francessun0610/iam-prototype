#!/usr/bin/env python3
"""V4.1 compact detail headers and Edit Role matrix containment."""

import os
import shutil
import sys
import time

sys.path.insert(0, os.path.dirname(__file__))
from cdp_client import CDP  # noqa: E402
from test_redline_canvas_architecture import (  # noqa: E402
    click_selector,
    disable_redline,
    enable_redline,
    free_port,
    launch_chrome,
    start_static_server,
)

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCREEN_DIR = os.path.join(REPO_ROOT, "qa_screens")
WIDTHS = (1024, 1060, 1099, 1100, 1101, 1280, 1440)
results = []


def check(name, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    results.append((status, name, detail))
    print("[%s] %s%s" % (status, name, ("  (%s)" % detail) if detail and not condition else ""))


def js(c, expression):
    return c.eval(expression)


def set_viewport(c, width, height=768):
    c.send("Emulation.setDeviceMetricsOverride", {
        "width": width, "height": height, "deviceScaleFactor": 1, "mobile": False,
    })


def click_tab(c, name):
    js(c, """Array.from(document.querySelectorAll('.tab-btn')).find(function(b){
      return b.textContent.trim() === %r;
    }).click()""" % name)
    time.sleep(0.08)


def open_user(c, base):
    c.navigate(base, wait=0.55)
    click_tab(c, "Users")
    js(c, "document.querySelector('#tbody .name-link').click()")
    time.sleep(0.15)


def open_role(c, base):
    c.navigate(base, wait=0.55)
    click_tab(c, "Roles")
    js(c, "document.querySelector('#rolesPanel .rp-role-link').click()")
    time.sleep(0.18)
    max_actions = js(c, "Math.max.apply(null, Array.from(document.querySelectorAll('.cr-matrix')).map(function(t){return +(t.dataset.actionCount||0);}))")
    if max_actions >= 5:
        return
    for index in range(1, 8):
        c.navigate(base, wait=0.4)
        click_tab(c, "Roles")
        count = js(c, "document.querySelectorAll('#rolesPanel .rp-role-link').length")
        if index >= count:
            break
        js(c, "document.querySelectorAll('#rolesPanel .rp-role-link')[%d].click()" % index)
        time.sleep(0.12)
        max_actions = js(c, "Math.max.apply(null, Array.from(document.querySelectorAll('.cr-matrix')).map(function(t){return +(t.dataset.actionCount||0);}))")
        if max_actions >= 5:
            return


def open_team(c, base):
    c.navigate(base, wait=0.55)
    click_tab(c, "Teams")
    js(c, "document.querySelector('#tmTbody .tm-name-link').click()")
    time.sleep(0.15)


def header_state(c, page, title_sel, subtitle_sel, actions_sel, shell_sel, main_sel, card_sel):
    return js(c, """(function(){
      function r(sel){var e=document.querySelector(sel),x=e.getBoundingClientRect();
        return {left:x.left,right:x.right,top:x.top,bottom:x.bottom,width:x.width,height:x.height};}
      var page=document.querySelector(%r);
      var title=r(%r), subtitle=r(%r), actions=r(%r), shell=r(%r), main=r(%r), card=r(%r);
      return {
        title:title, subtitle:subtitle, actions:actions, shell:shell,
        surfaceHeight:Math.round(document.querySelector(%r).getBoundingClientRect().height),
        firstCardGap:Math.round(card.top-main.top),
        pageScrolls:page.scrollWidth > page.clientWidth + 1,
        pageOverflowX:getComputedStyle(page).overflowX,
        titleActionsShareRow:Math.abs(title.top-actions.top) <= 4,
        subtitleUnderTitle:subtitle.top >= title.bottom && Math.abs(subtitle.left-title.left) <= 1,
        noOverlap:title.right + 12 <= actions.left,
        actionsContained:actions.right <= shell.right + 1
      };
    })()""" % (page, title_sel, subtitle_sel, actions_sel, shell_sel, main_sel, card_sel, shell_sel))


PAGES = {
    "user": {
        "open": open_user,
        "page": "#addUsersPage",
        "title": "#auPageTitle",
        "subtitle": "#auPageSubtitle",
        "actions": "#addUsersPage .au-header-actions",
        "shell": "#addUsersPage .au-header-shell",
        "main": "#addUsersPage .au-page-main-surface",
        "card": "#auBasicCard",
        "order": ["auCancel", "auSave"],
    },
    "role": {
        "open": open_role,
        "page": "#createRolePage",
        "title": "#createRolePage .cr-title",
        "subtitle": "#createRolePage .cr-subtitle",
        "actions": "#createRolePage .cr-header-actions",
        "shell": "#createRolePage .cr-header-shell",
        "main": "#createRolePage .cr-page-main-surface",
        "card": "#crBasicCard",
        "order": ["crRemove", "crCancel", "crSave"],
    },
    "team": {
        "open": open_team,
        "page": "#editTeamPage",
        "title": "#editTeamPage .au-title",
        "subtitle": "#tmEditSubtitle",
        "actions": "#editTeamPage .au-header-actions",
        "shell": "#editTeamPage .au-header-shell",
        "main": "#editTeamPage .au-page-main-surface",
        "card": "#editTeamPage .tm-details-card",
        "order": ["tmDelete", "tmCancel", "tmSave"],
    },
}


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
        base = "http://127.0.0.1:%d/v4.1/" % port
        os.makedirs(SCREEN_DIR, exist_ok=True)
        compact_heights = {}

        for width in WIDTHS:
            set_viewport(c, width)
            for name, spec in PAGES.items():
                spec["open"](c, base)
                state = header_state(
                    c, spec["page"], spec["title"], spec["subtitle"], spec["actions"],
                    spec["shell"], spec["main"], spec["card"],
                )
                check("%s %d title and actions share a row" % (name, width),
                      state["titleActionsShareRow"] and state["subtitleUnderTitle"], str(state))
                check("%s %d actions remain contained without overlap" % (name, width),
                      state["noOverlap"] and state["actionsContained"]
                      and state["pageOverflowX"] == "hidden", str(state))
                check("%s %d preserves the 24px gray first-card gap" % (name, width),
                      23 <= state["firstCardGap"] <= 25, str(state))
                order = js(c, """Array.from(document.querySelector(%r).children)
                  .filter(function(e){return !e.hidden && getComputedStyle(e).display!=='none';})
                  .map(function(e){return e.id;})""" % spec["actions"])
                check("%s %d action order follows the visual order" % (name, width),
                      order == spec["order"], str(order))
                if width == 1024:
                    compact_heights[name] = state["surfaceHeight"]
                if width in (1024, 1280):
                    c.screenshot(os.path.join(SCREEN_DIR, "v41_%s_%d.png" % (name, width)))

        set_viewport(c, 1024)
        open_user(c, base)
        check("Edit User uses the approved title and unchanged subtitle",
              js(c, "document.getElementById('auPageTitle').textContent") == "Edit User"
              and js(c, "document.getElementById('auPageSubtitle').textContent") ==
              "Manage user details and role assignment")

        open_role(c, base)
        labels = js(c, """({
          removeText:document.getElementById('crRemove').textContent.trim(),
          removeName:document.getElementById('crRemove').getAttribute('aria-label'),
          save:document.getElementById('crSave').textContent.trim()
        })""")
        check("Edit Role page trigger is shortened but keeps contextual accessible name",
              labels == {"removeText": "Remove", "removeName": "Remove role", "save": "Save Role"}, str(labels))
        js(c, "document.getElementById('crRemove').click()")
        time.sleep(0.05)
        check("Remove Role confirmation retains its full contextual label",
              js(c, "document.getElementById('crConfirmRemove').textContent.trim()") == "Remove Role")
        js(c, "document.getElementById('crConfirmCancel').click()")

        matrix = js(c, """(function(){
          var wraps=Array.from(document.querySelectorAll('.cr-matrix-scroll'));
          var wrap=wraps.sort(function(a,b){return b.scrollWidth-a.scrollWidth;})[0];
          var table=wrap.querySelector('.cr-matrix');
          var card=document.getElementById('crFuncsCard').getBoundingClientRect();
          var appHead=wrap.closest('.cr-app-section').querySelector('.cr-app-section-head').getBoundingClientRect();
          var fn=wrap.querySelector('.cr-matrix-fn').getBoundingClientRect();
          var before={headLeft:appHead.left,fnLeft:fn.left};
          wrap.scrollLeft=wrap.scrollWidth;
          var fnAfter=wrap.querySelector('.cr-matrix-fn').getBoundingClientRect();
          var headAfter=wrap.closest('.cr-app-section').querySelector('.cr-app-section-head').getBoundingClientRect();
          return {
            clientWidth:Math.round(wrap.clientWidth), scrollWidth:Math.round(wrap.scrollWidth),
            tableWidth:Math.round(table.getBoundingClientRect().width),
            minWidth:getComputedStyle(table).minWidth,
            wrapLeft:Math.round(wrap.getBoundingClientRect().left),
            wrapRight:Math.round(wrap.getBoundingClientRect().right),
            cardRight:Math.round(card.right),
            scrollLeft:Math.round(wrap.scrollLeft),
            tabIndex:wrap.tabIndex, aria:wrap.getAttribute('aria-label'),
            headStable:Math.abs(before.headLeft-headAfter.left)<=1,
            stickyStable:Math.abs(before.fnLeft-fnAfter.left)<=1,
            pageOverflowX:getComputedStyle(document.getElementById('createRolePage')).overflowX,
            pageScrolls:document.getElementById('createRolePage').scrollWidth >
              document.getElementById('createRolePage').clientWidth + 1
          };
        })()""")
        check("Functions matrix uses a keyboard-scrollable, labelled internal overflow region",
              matrix["scrollWidth"] > matrix["clientWidth"] and matrix["scrollLeft"] > 0
              and matrix["tabIndex"] == 0 and "scroll horizontally" in matrix["aria"], str(matrix))
        check("Five-action matrix retains the intentional 920px minimum width",
              matrix["minWidth"] == "920px" and matrix["tableWidth"] >= 920, str(matrix))
        check("Matrix remains inside the Functions card without page-level overflow",
              matrix["wrapRight"] <= matrix["cardRight"] and matrix["pageOverflowX"] == "hidden",
              str(matrix))
        check("Application heading stays fixed and the Functions column is sticky",
              matrix["headStable"] and matrix["stickyStable"], str(matrix))
        js(c, """(function(){
          var wraps=Array.from(document.querySelectorAll('.cr-matrix-scroll'));
          var wrap=wraps.sort(function(a,b){return b.scrollWidth-a.scrollWidth;})[0];
          wrap.scrollIntoView({block:'center'}); wrap.scrollLeft=wrap.scrollWidth;
        })()""")
        time.sleep(0.08)
        c.screenshot(os.path.join(SCREEN_DIR, "v41_role_1024_matrix_scrolled.png"))

        open_team(c, base)
        team_labels = js(c, """({
          text:document.getElementById('tmDelete').textContent.trim(),
          name:document.getElementById('tmDelete').getAttribute('aria-label')
        })""")
        check("Edit Team page trigger is shortened but keeps contextual accessible name",
              team_labels == {"text": "Delete", "name": "Delete team"}, str(team_labels))
        js(c, "document.getElementById('tmDelete').click()")
        time.sleep(0.05)
        check("Delete Team confirmation retains its full contextual label",
              js(c, "document.getElementById('tmDeleteConfirmConfirmLabel').textContent.trim()") == "Delete Team")
        js(c, "document.getElementById('tmDeleteConfirmCancel').click()")

        set_viewport(c, 1600, 900)
        for name, spec in PAGES.items():
            spec["open"](c, base)
            enable_redline(c, wait=0.35)
            click_selector(c, '[data-redline-action="breakpoint:1024"]', wait=0.55)
            redline = js(c, """(function(){
              var f=document.querySelector('.redline__canvas iframe, iframe.redline__frame');
              var d=f.contentDocument;
              var title=d.querySelector(%r).getBoundingClientRect();
              var actions=d.querySelector(%r).getBoundingClientRect();
              var out={width:f.contentWindow.innerWidth, sameRow:Math.abs(title.top-actions.top)<=4};
              if (%r === 'role') {
                var wraps=Array.from(d.querySelectorAll('.cr-matrix-scroll'));
                var wrap=wraps.sort(function(a,b){return b.scrollWidth-a.scrollWidth;})[0];
                out.matrixContained=wrap.scrollWidth>wrap.clientWidth &&
                  getComputedStyle(d.getElementById('createRolePage')).overflowX==='hidden';
              }
              return out;
            })()""" % (spec["title"], spec["actions"], name))
            check("Redline Compact renders the live %s detail header" % name,
                  redline["width"] == 1024 and redline["sameRow"]
                  and (name != "role" or redline["matrixContained"]), str(redline))
            disable_redline(c)

        print("Compact header surface heights: %r" % compact_heights)
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
