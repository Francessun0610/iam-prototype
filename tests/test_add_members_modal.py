#!/usr/bin/env python3
"""V4.1 Edit Team — "Add members" modal, rebuilt on the Add User picker.

Regression suite for the redesign that stopped the Add members modal
rendering the entire internal directory on open and moved it onto the
same shell, search field, result rows and avatar the Add User Step-1
picker uses, while keeping its team-specific multi-select workflow.

Covers:
  1.  Shell parity with Add User — overlay, dialog width/border/radius,
      header height and padding, title typography, close-button size and
      placement, body padding/gap, search-field height, footer padding
      and border, button sizes. Same shared rules, not approximations.
  2.  Initial state — search focused, no rows, no empty bordered panel,
      "Enter at least 2 characters to search." helper, "0 selected",
      Add members disabled, and a compact modal.
  3.  Search threshold — nothing at 0 or 1 characters or for
      whitespace-only input; searching from 2, with the query trimmed.
  4.  Debounce and loading — "Searching…" rather than stale rows or a
      premature "No results", announced to assistive tech.
  5.  Stale-response protection — a superseded query can never replace
      newer results.
  6.  Searchable fields — name, email and team, case-insensitively,
      with accented characters preserved and the shared ranking
      (name-prefix matches ahead of substring matches).
  7.  Result cap — 10 rows, with "Showing 10 of N results".
  8.  Existing team members are excluded, and "nobody matches" is
      distinguished from "everyone matching is already a member".
  9.  Result rows — checkbox, avatar, name and email on separate lines,
      right-aligned semibold team, built from the shared Add User
      classes; the whole row toggles its checkbox.
  10. Long content stays on one line, ellipsizes, and gets a tooltip
      only when it is actually clipped.
  11. Selection survives changing and clearing the query, re-renders
      checked, never duplicates an id, and counts correctly.
  12. Clearing the search returns the helper state and keeps selections.
  13. No-results and error states, including Retry.
  14. Footer — count text, disabled/enabled Add members, no double
      submit.
  15. Submission — members land in the table, the modal closes, Save
      Team becomes enabled, and nobody is added twice.
  16. Close paths (X, Cancel, Escape, overlay), focus restored to the
      trigger, and a full reset on reopen.
  17. Keyboard — focus order, arrow navigation, Space/Enter toggling,
      focus trap, accessible checkbox names.
  18. Responsive — centered, within the viewport, footer visible, one
      internal scroll region, no horizontal page overflow.
  19. The Add User modal and the rest of Edit Team are untouched.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_add_members_modal.py
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
    profile_dir = tempfile.mkdtemp(prefix="iam-add-members-test-")
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


# ── page helpers ────────────────────────────────────────────────────────

OPEN_TEAMS_TAB = """
(function(){
  var t = Array.from(document.querySelectorAll('.tab-btn'))
    .find(function(b){ return b.textContent.trim() === 'Teams'; });
  if (t) t.click();
})()
"""

OPEN_FIRST_TEAM = """
(function(){
  var row = document.querySelector('#tmTable tbody tr, .tm-tbl tbody tr');
  var link = row ? row.querySelector('a, .name-link') : null;
  if (link) link.click();
})()
"""

OPEN_ADD_USER_MODAL = """
(function(){
  var b = Array.from(document.querySelectorAll('#usersPanel button, #usersPanel a'))
    .find(function(x){ return x.textContent.trim().indexOf('Add User') !== -1; });
  if (b) b.click();
})()
"""


def goto_edit_team(c):
    c.eval(OPEN_TEAMS_TAB)
    time.sleep(0.35)
    c.eval(OPEN_FIRST_TEAM)
    time.sleep(0.5)


def open_modal(c, real_click=False):
    if real_click:
        c.eval("document.getElementById('tmAddMembersBtn').focus();"
               "document.getElementById('tmAddMembersBtn').click();")
    else:
        c.eval("document.getElementById('tmAddMembersBtn').click()")
    time.sleep(0.3)


def typ(c, text):
    c.eval("""
    (function(){
      var el = document.getElementById('tmAddMembersSearch');
      el.value = %s;
      el.dispatchEvent(new Event('input', {bubbles:true}));
    })()
    """ % json.dumps(text))


def search(c, text, settle=0.55):
    typ(c, text)
    time.sleep(settle)


def row_names(c):
    return c.eval(
        "Array.from(document.querySelectorAll('.tm-add-option-name'))"
        ".map(function(e){return e.textContent;})"
    )


def state_msg(c):
    return c.eval(
        "(function(){var m=document.querySelector('#tmAddMembersList .tm-add-state-msg');"
        "return m ? m.textContent.trim() : null;})()"
    )


def text_of(c, sel):
    return c.eval(
        "(function(){var e=document.querySelector(%s); return e ? e.textContent.trim() : null;})()"
        % json.dumps(sel)
    )


def visible(c, sel):
    # offsetParent is null for position:fixed elements (the modal
    # backdrop), so visibility is measured rather than inferred.
    return c.eval(
        "(function(){var e=document.querySelector(%s);"
        "if (!e || e.hasAttribute('hidden')) return false;"
        "var r = e.getBoundingClientRect();"
        "return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== 'hidden';})()"
        % json.dumps(sel)
    )


def key(c, k, mods=0):
    codes = {"Escape": 27, "Tab": 9, "ArrowDown": 40, "ArrowUp": 38, "Enter": 13, " ": 32}
    for t in ("keyDown", "keyUp"):
        c.send("Input.dispatchKeyEvent", {
            "type": t, "key": k, "code": "Space" if k == " " else k,
            "windowsVirtualKeyCode": codes.get(k, 0), "modifiers": mods,
        })
        time.sleep(0.03)


def active(c):
    return c.eval("(function(){var a=document.activeElement;"
                  "return a ? (a.id || a.className || a.tagName) : null;})()")


def box_metrics(c, sel):
    return c.eval("""
    (function(){
      var el = document.querySelector(%s);
      if (!el) return null;
      var cs = getComputedStyle(el), r = el.getBoundingClientRect();
      return {w: Math.round(r.width*100)/100, h: Math.round(r.height*100)/100,
              cx: Math.round(((r.left+r.right)/2)*100)/100,
              padding: cs.padding, border: cs.border, radius: cs.borderRadius,
              borderTop: cs.borderTopWidth, borderBottom: cs.borderBottomWidth,
              font: cs.fontSize + '/' + cs.lineHeight + '/' + cs.fontWeight,
              bg: cs.backgroundColor, gap: cs.gap,
              right: Math.round(r.right*100)/100};
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
        c.navigate(base, wait=1.8)
        c.eval("window.__jsErrors=[];"
               "window.addEventListener('error',function(e){window.__jsErrors.push(String(e.message));});")
        c.send("Emulation.setDeviceMetricsOverride",
               {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.3)

        # ─── 1. Shell parity with the Add User picker ─────────────────────
        # Both modals are opened so the two shells can be measured against
        # each other rather than against copied-out pixel values.
        c.eval(OPEN_ADD_USER_MODAL)
        time.sleep(0.4)
        c.eval("""(function(){var el=document.getElementById('auAddUserSearchInput');
                   el.value='ma'; el.dispatchEvent(new Event('input',{bubbles:true}));})()""")
        time.sleep(0.5)
        au = {
            "overlay": box_metrics(c, "#auAddUserModalBackdrop"),
            "dialog": box_metrics(c, "#auAddUserModalBackdrop .cr-confirm-dialog"),
            "header": box_metrics(c, "#auAddUserModalBackdrop .cr-confirm-header"),
            "title": box_metrics(c, "#auAddUserModalTitle"),
            "close": box_metrics(c, "#auAddUserModalClose"),
            "body": box_metrics(c, "#auAddUserModalBackdrop .cr-confirm-body-region"),
            "sub": box_metrics(c, "#auAddUserModalSubtext"),
            "searchpill": box_metrics(c, "#auAddUserModalBackdrop .ads-search"),
            "footer": box_metrics(c, "#auAddUserModalBackdrop .cr-confirm-actions"),
            "cancel": box_metrics(c, "#auAddUserCancel"),
            "primary": box_metrics(c, "#auAddUserNext"),
            "row": box_metrics(c, "#auAddUserModalBackdrop .au-adduser-option"),
        }
        au_shadow = c.eval("getComputedStyle(document.querySelector"
                           "('#auAddUserModalBackdrop .cr-confirm-dialog')).boxShadow")
        au_zindex = c.eval("getComputedStyle(document.getElementById"
                           "('auAddUserModalBackdrop')).zIndex")
        c.eval("document.getElementById('auAddUserCancel').click()")
        time.sleep(0.3)

        goto_edit_team(c)
        check("Landed on Edit Team", c.eval("!!document.getElementById('editTeamPage')"))
        open_modal(c, real_click=True)
        check("Add members modal opens", visible(c, "#tmAddMembersBackdrop"))

        search(c, "ma")
        tm = {
            "overlay": box_metrics(c, "#tmAddMembersBackdrop"),
            "dialog": box_metrics(c, "#tmAddMembersBackdrop .cr-confirm-dialog"),
            "header": box_metrics(c, "#tmAddMembersBackdrop .cr-confirm-header"),
            "title": box_metrics(c, "#tmAddMembersTitle"),
            "close": box_metrics(c, "#tmAddMembersClose"),
            "body": box_metrics(c, "#tmAddMembersBackdrop .cr-confirm-body-region"),
            "sub": box_metrics(c, "#tmAddMembersSubtitle"),
            "searchpill": box_metrics(c, "#tmAddMembersBackdrop .ads-search"),
            "footer": box_metrics(c, "#tmAddMembersBackdrop .cr-confirm-actions"),
            "cancel": box_metrics(c, "#tmAddMembersCancel"),
            "primary": box_metrics(c, "#tmAddMembersConfirm"),
            "row": box_metrics(c, "#tmAddMembersBackdrop .au-adduser-option"),
        }
        tm_shadow = c.eval("getComputedStyle(document.querySelector"
                           "('#tmAddMembersBackdrop .cr-confirm-dialog')).boxShadow")
        tm_zindex = c.eval("getComputedStyle(document.getElementById"
                           "('tmAddMembersBackdrop')).zIndex")

        check("Overlay matches Add User (color and padding)",
              tm["overlay"]["bg"] == au["overlay"]["bg"]
              and tm["overlay"]["padding"] == au["overlay"]["padding"]
              and tm_zindex == au_zindex,
              "%s / %s / z=%s vs %s / %s / z=%s" % (tm["overlay"]["bg"], tm["overlay"]["padding"], tm_zindex,
                                                    au["overlay"]["bg"], au["overlay"]["padding"], au_zindex))
        check("Modal width matches Add User",
              tm["dialog"]["w"] == au["dialog"]["w"], "%s vs %s" % (tm["dialog"]["w"], au["dialog"]["w"]))
        check("Modal border and radius match Add User",
              tm["dialog"]["border"] == au["dialog"]["border"]
              and tm["dialog"]["radius"] == au["dialog"]["radius"],
              "%s %s vs %s %s" % (tm["dialog"]["border"], tm["dialog"]["radius"],
                                  au["dialog"]["border"], au["dialog"]["radius"]))
        check("Modal elevation matches Add User", tm_shadow == au_shadow, tm_shadow)
        check("Modal is centered exactly where Add User is",
              abs(tm["dialog"]["cx"] - au["dialog"]["cx"]) < 1,
              "%s vs %s" % (tm["dialog"]["cx"], au["dialog"]["cx"]))
        check("Header height and padding match Add User",
              tm["header"]["h"] == au["header"]["h"] and tm["header"]["padding"] == au["header"]["padding"],
              "%s/%s vs %s/%s" % (tm["header"]["h"], tm["header"]["padding"],
                                  au["header"]["h"], au["header"]["padding"]))
        check("Header carries the same bottom rule as Add User",
              tm["header"]["borderBottom"] == au["header"]["borderBottom"] != "0px",
              tm["header"]["borderBottom"])
        check("Title typography matches Add User",
              tm["title"]["font"] == au["title"]["font"], "%s vs %s" % (tm["title"]["font"], au["title"]["font"]))
        check("Close button is the same size and in the same place as Add User",
              tm["close"]["w"] == au["close"]["w"] and tm["close"]["h"] == au["close"]["h"]
              and abs(tm["close"]["right"] - au["close"]["right"]) < 1,
              "%sx%s @%s vs %sx%s @%s" % (tm["close"]["w"], tm["close"]["h"], tm["close"]["right"],
                                          au["close"]["w"], au["close"]["h"], au["close"]["right"]))
        check("Body padding and content gap match Add User",
              tm["body"]["padding"] == au["body"]["padding"] and tm["body"]["gap"] == au["body"]["gap"],
              "%s gap %s vs %s gap %s" % (tm["body"]["padding"], tm["body"]["gap"],
                                          au["body"]["padding"], au["body"]["gap"]))
        check("Instruction line uses the Add User supporting-text style",
              tm["sub"]["font"] == au["sub"]["font"], "%s vs %s" % (tm["sub"]["font"], au["sub"]["font"]))
        check("Search field height and shape match Add User",
              tm["searchpill"]["h"] == au["searchpill"]["h"]
              and tm["searchpill"]["radius"] == au["searchpill"]["radius"]
              and tm["searchpill"]["border"] == au["searchpill"]["border"],
              "%s vs %s" % (tm["searchpill"], au["searchpill"]))
        check("Footer padding and top rule match Add User",
              tm["footer"]["padding"] == au["footer"]["padding"]
              and tm["footer"]["borderTop"] == au["footer"]["borderTop"] != "0px",
              "%s/%s vs %s/%s" % (tm["footer"]["padding"], tm["footer"]["borderTop"],
                                  au["footer"]["padding"], au["footer"]["borderTop"]))
        check("Cancel button matches the Add User secondary button",
              tm["cancel"]["h"] == au["cancel"]["h"] and tm["cancel"]["border"] == au["cancel"]["border"]
              and tm["cancel"]["radius"] == au["cancel"]["radius"],
              "%s vs %s" % (tm["cancel"], au["cancel"]))
        check("Primary button is the same height and radius as Add User's",
              tm["primary"]["h"] == au["primary"]["h"] and tm["primary"]["radius"] == au["primary"]["radius"],
              "%s vs %s" % (tm["primary"]["h"], au["primary"]["h"]))
        check("Result rows share Add User's row metrics",
              tm["row"]["h"] == au["row"]["h"] and tm["row"]["padding"] == au["row"]["padding"]
              and tm["row"]["gap"] == au["row"]["gap"],
              "%s vs %s" % (tm["row"], au["row"]))
        check("Search icon, clear button and spinner are the shared Add User components",
              c.eval("""(function(){
                var q = function(s){return !!document.querySelector(s);};
                return q('#tmAddMembersBackdrop .au-adduser-search-icon')
                  && q('#tmAddMembersSearchClear.au-adduser-search-clear')
                  && q('#tmAddMembersSpinner.au-adduser-search-spinner')
                  && q('#tmAddMembersBackdrop .ads-search.au-adduser-search');})()"""))
        check("Result list and note reuse the Add User listbox components",
              c.eval("""(function(){
                return document.getElementById('tmAddMembersList').classList.contains('au-adduser-listbox')
                  && document.getElementById('tmAddMembersNote').classList.contains('au-adduser-dd-note');})()"""))
        check("It stays a single modal — no second step is introduced",
              c.eval("!document.querySelector('#tmAddMembersBackdrop .au-adduser-step')"))

        # ─── 2. Initial state ─────────────────────────────────────────────
        c.eval("document.getElementById('tmAddMembersCancel').click()")
        time.sleep(0.25)
        open_modal(c, real_click=True)
        check("Search input is focused on open", active(c) == "tmAddMembersSearch", active(c))
        check("No employee rows are rendered before searching",
              c.eval("document.querySelectorAll('.tm-add-option').length") == 0)
        check("No empty bordered results panel is left on screen",
              not visible(c, "#tmAddMembersPanel"))
        check("Helper text reads 'Enter at least 2 characters to search.'",
              visible(c, "#tmAddMembersHint")
              and text_of(c, "#tmAddMembersHint") == "Enter at least 2 characters to search.",
              text_of(c, "#tmAddMembersHint"))
        check("Footer is visible with '0 selected'",
              visible(c, "#tmAddMembersBackdrop .cr-confirm-actions")
              and text_of(c, "#tmAddMembersCount") == "0 selected",
              text_of(c, "#tmAddMembersCount"))
        check("Add members starts disabled",
              c.eval("document.getElementById('tmAddMembersConfirm').disabled"))
        initial_h = box_metrics(c, "#tmAddMembersBackdrop .cr-confirm-dialog")["h"]
        check("The modal opens compact rather than reserving the results height",
              initial_h < 300, "%spx tall" % initial_h)
        check("Search placeholder is unchanged",
              c.eval("document.getElementById('tmAddMembersSearch').placeholder")
              == "Search by name, email, or team")

        # ─── 3. Search threshold ──────────────────────────────────────────
        search(c, "a")
        check("A one-character query does not search",
              not visible(c, "#tmAddMembersPanel") and visible(c, "#tmAddMembersHint"))
        search(c, "   ")
        check("Whitespace-only input does not search", not visible(c, "#tmAddMembersPanel"))
        search(c, " m ")
        check("A single character padded with spaces does not search",
              not visible(c, "#tmAddMembersPanel"))
        search(c, "  ma  ")
        trimmed = row_names(c)
        search(c, "ma")
        untrimmed = row_names(c)
        check("Leading and trailing whitespace is trimmed before searching",
              trimmed == untrimmed and len(trimmed) > 0, "%s vs %s" % (trimmed[:2], untrimmed[:2]))
        check("Two characters do search", visible(c, "#tmAddMembersPanel") and len(untrimmed) > 0)
        check("The helper line gives way to results", not visible(c, "#tmAddMembersHint"))

        # ─── 4. Loading state ─────────────────────────────────────────────
        typ(c, "sim")
        time.sleep(0.06)
        loading = c.eval("""(function(){
          var l = document.getElementById('tmAddMembersList');
          return {msg: (l.querySelector('.tm-add-state-msg')||{}).textContent || null,
                  rows: l.querySelectorAll('.tm-add-option').length,
                  spinner: !document.getElementById('tmAddMembersSpinner').hasAttribute('hidden'),
                  editable: !document.getElementById('tmAddMembersSearch').disabled,
                  sr: document.getElementById('tmAddMembersSRStatus').textContent};})()""")
        check("Loading shows the shared 'Searching…' treatment",
              loading["msg"] and "Searching" in loading["msg"], loading["msg"])
        check("No stale rows are shown as current results while loading", loading["rows"] == 0)
        check("Loading does not flash a no-results message",
              not (loading["msg"] and "No matching" in loading["msg"]))
        check("The spinner runs in the search field while loading", loading["spinner"])
        check("The search field stays interactive while loading", loading["editable"])
        check("Loading is announced to assistive tech", "Searching" in (loading["sr"] or ""), loading["sr"])
        time.sleep(0.5)
        check("The spinner stops once results land",
              c.eval("document.getElementById('tmAddMembersSpinner').hasAttribute('hidden')"))

        # ─── 5. Stale-response protection ─────────────────────────────────
        typ(c, "ma")
        time.sleep(0.05)
        typ(c, "quimby")
        time.sleep(0.7)
        stale_names = row_names(c)
        check("A superseded query never replaces newer results",
              all("Quimby" in n for n in stale_names) and len(stale_names) > 0, stale_names)

        # ─── 6. Searchable fields, casing, accents, ranking ───────────────
        search(c, "Marge")
        check("Search matches on full name", "Marge Simpson" in row_names(c), row_names(c)[:3])
        search(c, "marge.simpson@disney")
        check("Search matches on email address", "Marge Simpson" in row_names(c), row_names(c)[:3])
        search(c, "Ad Operations")
        check("Search matches on team name", len(row_names(c)) > 0, row_names(c)[:3])
        search(c, "mArGe SiMpSoN")
        check("Matching is case-insensitive", "Marge Simpson" in row_names(c), row_names(c)[:3])
        search(c, "ma")
        ranked = row_names(c)
        first_prefix = [n for n in ranked if n.lower().startswith("ma")]
        check("Name-prefix matches rank ahead of substring matches",
              ranked[:len(first_prefix)] == first_prefix and len(first_prefix) > 0, ranked)
        check("The pool is limited to internal users",
              c.eval("""(function(){
                return Array.from(document.querySelectorAll('.tm-add-option'))
                  .every(function(r){ return (r.getAttribute('data-user-id')||'').charAt(0) !== 'e'; });})()"""))

        # accented characters, long content and a photoless user, injected
        # at runtime so no production fixture is touched
        c.eval("""
        (function(){
          window.__stressIds = ['zz-stress-long', 'zz-stress-accent'];
          window.INTERNAL_ORIGINAL_SNAPSHOT.push(
            {id:'zz-stress-long',
             name:'Alexandrina Featherington-Montgomery-Wallingford',
             email:'alexandrina.featherington-montgomery-wallingford+alerts@subdomain.disney.example.com',
             team:'Addressable & Programmatic Sales Operations Group',
             roles:['ACP Viewer'], status:'Active', avatar:null},
            {id:'zz-stress-accent', name:'Zoë Ångström-Núñez', email:'zoe.angstrom@disney.com',
             team:'Ad Operations', roles:['ACP Planner'], status:'Active', avatar:null});
        })()""")
        search(c, "Ångström")
        check("Accented characters match and are preserved intact",
              row_names(c) == ["Zoë Ångström-Núñez"], row_names(c))

        # ─── 7. Result cap ────────────────────────────────────────────────
        search(c, "ma")
        capped = c.eval("""(function(){
          var note = document.getElementById('tmAddMembersNote');
          return {rows: document.querySelectorAll('.tm-add-option').length,
                  note: note.hasAttribute('hidden') ? null : note.textContent.trim()};})()""")
        check("At most 10 results are rendered", capped["rows"] == 10, capped["rows"])
        check("Additional matches are communicated rather than silently dropped",
              capped["note"] and capped["note"].startswith("Showing 10 of "), capped["note"])
        search(c, "Quimby")
        check("No 'showing N of M' note when everything fits",
              c.eval("document.getElementById('tmAddMembersNote').hasAttribute('hidden')"))

        # ─── 8. Existing members excluded ─────────────────────────────────
        existing = c.eval("Array.from(document.querySelectorAll('#tmMembersTbody tr td:first-child'))"
                          ".map(function(t){return t.textContent.trim();})")
        first_member = existing[0]
        search(c, first_member.split(" ")[0])
        check("Current team members never appear as selectable results",
              first_member not in row_names(c), "%s / %s" % (first_member, row_names(c)))
        check("'Everyone matching is already a member' is said in its own words",
              (state_msg(c) or "").startswith("Everyone matching this search is already a member"),
              state_msg(c))
        search(c, "zzqqzz")
        check("A genuinely empty search says 'No matching users found.'",
              state_msg(c) == "No matching users found.", state_msg(c))
        check("The empty state suggests what else to try",
              text_of(c, "#tmAddMembersNote") == "Try searching by name, email, or team.",
              text_of(c, "#tmAddMembersNote"))
        check("The query stays visible so it can be edited",
              c.eval("document.getElementById('tmAddMembersSearch').value") == "zzqqzz")

        # ─── 9. Result row structure ──────────────────────────────────────
        search(c, "ma")
        row = c.eval("""(function(){
          var r = document.querySelector('.tm-add-option');
          var box = r.querySelector('.tm-add-option-check');
          var name = r.querySelector('.tm-add-option-name');
          var email = r.querySelector('.tm-add-option-email');
          var team = r.querySelector('.tm-add-option-team');
          var av = r.querySelector('.au-adduser-option-avatar');
          var cs = getComputedStyle(team);
          return {tag: r.tagName, isLabel: r.tagName === 'LABEL',
                  checkbox: box ? box.type : null,
                  hasAvatar: !!av && (!!av.querySelector('img') || !!av.querySelector('.avatar-initials')),
                  avatarShared: !!av.querySelector('.name-avatar'),
                  nameTop: Math.round(name.getBoundingClientRect().top),
                  emailTop: Math.round(email.getBoundingClientRect().top),
                  boxLeft: Math.round(box.getBoundingClientRect().left),
                  avatarLeft: Math.round(av.getBoundingClientRect().left),
                  nameLeft: Math.round(name.getBoundingClientRect().left),
                  teamLeft: Math.round(team.getBoundingClientRect().left),
                  teamWeight: cs.fontWeight, teamAlign: cs.textAlign,
                  aria: box.getAttribute('aria-label')};})()""")
        check("Row order is checkbox, avatar, identity, team",
              row["boxLeft"] < row["avatarLeft"] < row["nameLeft"] < row["teamLeft"], row)
        check("Row keeps a real checkbox for multi-selection", row["checkbox"] == "checkbox")
        check("Row renders the shared Add User avatar",
              row["hasAvatar"] and row["avatarShared"])
        check("Name and email sit on separate lines", row["emailTop"] > row["nameTop"],
              "%s vs %s" % (row["nameTop"], row["emailTop"]))
        check("Team name is right-aligned and semibold",
              row["teamAlign"] == "right" and int(row["teamWeight"]) >= 600,
              "%s / %s" % (row["teamAlign"], row["teamWeight"]))
        check("Checkbox has an accessible name containing the user's name",
              row["aria"] and row_names(c)[0] in row["aria"], row["aria"])
        check("The whole row is a label, so all of it is clickable", row["isLabel"])
        clicked = c.eval("""(function(){
          var name = document.querySelector('.tm-add-option-name');
          name.click();
          return document.querySelector('.tm-add-option-check').checked;})()""")
        time.sleep(0.15)
        check("Clicking the row body toggles its checkbox", clicked)
        c.eval("document.querySelector('.tm-add-option-name').click()")
        time.sleep(0.15)
        check("Selected rows get a visible selected state",
              c.eval("""(function(){
                var r = document.querySelector('.tm-add-option');
                r.querySelector('.tm-add-option-check').click();
                return r.classList.contains('is-selected');})()"""))
        c.eval("document.querySelector('.tm-add-option-check').click()")
        time.sleep(0.1)

        # ─── 10. Long content: truncation and truncation-only tooltips ────
        search(c, "Featherington")
        longrow = c.eval("""(function(){
          var r = document.querySelector('.tm-add-option');
          if (!r) return null;
          var n = r.querySelector('.tm-add-option-name'),
              e = r.querySelector('.tm-add-option-email'),
              t = r.querySelector('.tm-add-option-team'),
              b = r.querySelector('.tm-add-option-check'),
              info = r.querySelector('.au-adduser-option-info');
          var cs = getComputedStyle(n);
          return {nameH: Math.round(n.getBoundingClientRect().height),
                  ellipsis: cs.textOverflow, wrap: cs.whiteSpace,
                  nameClipped: n.scrollWidth > n.clientWidth + 1,
                  nameTip: n.getAttribute('data-tooltip'),
                  emailTip: e.getAttribute('data-tooltip'),
                  teamTip: t ? t.getAttribute('data-tooltip') : null,
                  boxTip: b.getAttribute('data-tooltip'),
                  overlap: info.getBoundingClientRect().right > t.getBoundingClientRect().left + 1,
                  insidePanel: r.getBoundingClientRect().right <=
                    document.getElementById('tmAddMembersPanel').getBoundingClientRect().right + 1,
                  fullName: n.textContent, fullEmail: e.textContent, fullTeam: t.textContent};})()""")
        check("A long name stays on one line", longrow["nameH"] <= 22 and longrow["wrap"] == "nowrap",
              longrow["nameH"])
        check("Overflowing values ellipsize", longrow["ellipsis"] == "ellipsis")
        check("The full name is available as a tooltip when it is clipped",
              longrow["nameTip"] == longrow["fullName"], longrow["nameTip"])
        check("The full email is available as a tooltip when it is clipped",
              longrow["emailTip"] == longrow["fullEmail"], longrow["emailTip"])
        check("The full team name is available as a tooltip when it is clipped",
              longrow["teamTip"] == longrow["fullTeam"], longrow["teamTip"])
        check("Identity text never overlaps the team column", not longrow["overlap"])
        check("Long rows stay inside the results panel", longrow["insidePanel"])
        check("The row's checkbox carries the clipped values for keyboard users",
              longrow["boxTip"] and longrow["fullName"] in longrow["boxTip"], longrow["boxTip"])
        search(c, "Quimby")
        short = c.eval("""(function(){
          var r = document.querySelector('.tm-add-option');
          var n = r.querySelector('.tm-add-option-name');
          return {clipped: n.scrollWidth > n.clientWidth + 1, tip: n.getAttribute('data-tooltip'),
                  boxTip: r.querySelector('.tm-add-option-check').getAttribute('data-tooltip')};})()""")
        check("A value that fits gets no unnecessary tooltip",
              not short["clipped"] and short["tip"] is None, short)
        # hovering a clipped value shows the shared ADS tooltip
        search(c, "Nahasapeemapetilon")
        spot = c.eval("""(function(){
          var e = document.querySelector('.tm-add-option-email[data-tooltip]');
          if (!e) return null;
          var b = e.getBoundingClientRect();
          return {x: b.left + b.width/2, y: b.top + b.height/2, text: e.textContent};})()""")
        if spot:
            c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": spot["x"], "y": spot["y"]})
            time.sleep(0.4)
            tip = c.eval("""(function(){
              var t = document.getElementById('statusTooltip');
              if (!t) return null;
              var r = t.getBoundingClientRect();
              return {visible: t.classList.contains('is-visible'), text: t.textContent,
                      onscreen: r.left >= 0 && r.right <= window.innerWidth};})()""")
            check("Hovering a clipped value shows the shared ADS tooltip with the full text",
                  tip and tip["visible"] and tip["text"] == spot["text"] and tip["onscreen"], tip)
            c.send("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": 3, "y": 3})
            time.sleep(0.2)

        # ─── 11. Selection persistence across queries ─────────────────────
        search(c, "Quimby")
        pick_a = row_names(c)[0]
        c.eval("document.querySelectorAll('.tm-add-option-check')[0].click()")
        time.sleep(0.15)
        check("Selecting one user reads '1 selected'",
              text_of(c, "#tmAddMembersCount") == "1 selected", text_of(c, "#tmAddMembersCount"))
        check("Add members enables as soon as somebody is selected",
              not c.eval("document.getElementById('tmAddMembersConfirm').disabled"))
        search(c, "Prince")
        pick_b = row_names(c)[0]
        c.eval("document.querySelectorAll('.tm-add-option-check')[0].click()")
        time.sleep(0.15)
        check("A selection made under an earlier query survives a new search",
              text_of(c, "#tmAddMembersCount") == "2 selected", text_of(c, "#tmAddMembersCount"))
        search(c, "Quimby")
        check("A previously selected user re-renders checked",
              c.eval("document.querySelectorAll('.tm-add-option-check')[0].checked")
              and c.eval("document.querySelectorAll('.tm-add-option')[0]"
                         ".classList.contains('is-selected')"))
        c.eval("""(function(){var b=document.querySelectorAll('.tm-add-option-check')[0];
                   b.click(); b.click(); b.click(); b.click();})()""")
        time.sleep(0.2)
        check("Toggling the same user repeatedly never duplicates the selection",
              text_of(c, "#tmAddMembersCount") == "2 selected", text_of(c, "#tmAddMembersCount"))
        check("Selection is held in state, not in the DOM",
              c.eval("document.querySelectorAll('.tm-add-option').length") == 1)

        # ─── 12. Clear-search behavior ────────────────────────────────────
        clear_metrics = c.eval("""(function(){
          var btn = document.getElementById('tmAddMembersSearchClear');
          var pill = document.querySelector('#tmAddMembersBackdrop .ads-search');
          var b = btn.getBoundingClientRect(), p = pill.getBoundingClientRect();
          return {visible: !btn.hasAttribute('hidden'),
                  centered: Math.abs((b.top + b.bottom)/2 - (p.top + p.bottom)/2) < 1};})()""")
        check("The clear button appears once there is text", clear_metrics["visible"])
        check("The clear button is vertically centered in the search field", clear_metrics["centered"])
        c.eval("document.getElementById('tmAddMembersSearchClear').click()")
        time.sleep(0.45)
        cleared = c.eval("""(function(){
          return {q: document.getElementById('tmAddMembersSearch').value,
                  panel: !document.getElementById('tmAddMembersPanel').hasAttribute('hidden'),
                  hint: !document.getElementById('tmAddMembersHint').hasAttribute('hidden'),
                  count: document.getElementById('tmAddMembersCount').textContent,
                  disabled: document.getElementById('tmAddMembersConfirm').disabled,
                  focus: document.activeElement.id,
                  clearHidden: document.getElementById('tmAddMembersSearchClear').hasAttribute('hidden')};})()""")
        check("Clearing empties the query and the results", cleared["q"] == "" and not cleared["panel"])
        check("Clearing returns the helper state, not the whole directory", cleared["hint"])
        check("Clearing keeps previous selections", cleared["count"] == "2 selected", cleared["count"])
        check("Add members stays enabled while a selection exists", not cleared["disabled"])
        check("Clearing returns focus to the search input", cleared["focus"] == "tmAddMembersSearch")
        check("The clear button hides again when the field is empty", cleared["clearHidden"])

        # ─── 13. Error state and retry ────────────────────────────────────
        c.eval("""(function(){
          var snap = window.INTERNAL_ORIGINAL_SNAPSHOT;
          window.__origFilter = snap.filter;
          snap.filter = function(){ throw new Error('simulated search failure'); };
        })()""")
        search(c, "Se", settle=0.7)
        err = c.eval("""(function(){
          var l = document.getElementById('tmAddMembersList');
          return {msg: (l.querySelector('.tm-add-state-msg')||{}).textContent || '',
                  retry: !!document.getElementById('tmAddMembersRetry'),
                  open: !document.getElementById('tmAddMembersBackdrop').hasAttribute('hidden'),
                  count: document.getElementById('tmAddMembersCount').textContent,
                  rows: l.querySelectorAll('.tm-add-option').length,
                  editable: !document.getElementById('tmAddMembersSearch').disabled,
                  sr: document.getElementById('tmAddMembersSRStatus').textContent};})()""")
        check("A failed search shows an inline, non-technical error",
              "We couldn" in err["msg"] and "Try again" in err["msg"]
              and "simulated search failure" not in err["msg"], err["msg"])
        check("A failed search offers Retry", err["retry"])
        check("A failed search does not close the modal", err["open"])
        check("A failed search keeps previous selections", err["count"] == "2 selected", err["count"])
        check("A failed search shows no stale results", err["rows"] == 0)
        check("The search field stays editable after a failure", err["editable"])
        check("The failure is announced to assistive tech", "We couldn" in err["sr"], err["sr"])
        c.eval("window.INTERNAL_ORIGINAL_SNAPSHOT.filter = window.__origFilter;")
        c.eval("document.getElementById('tmAddMembersRetry').click()")
        time.sleep(0.7)
        check("Retry re-runs the same query successfully", len(row_names(c)) > 0, row_names(c)[:3])

        # ─── 14/15. Submission ────────────────────────────────────────────
        before_rows = c.eval("document.querySelectorAll('#tmMembersTbody tr').length")
        before_scroll = c.eval("window.scrollY")
        c.eval("document.getElementById('tmAddMembersConfirm').click()")
        time.sleep(0.45)
        after = c.eval("""(function(){
          return {rows: document.querySelectorAll('#tmMembersTbody tr').length,
                  names: Array.from(document.querySelectorAll('#tmMembersTbody tr td:first-child'))
                    .map(function(t){return t.textContent.trim();}),
                  open: !document.getElementById('tmAddMembersBackdrop').hasAttribute('hidden'),
                  scroll: window.scrollY,
                  saveEnabled: !document.getElementById('tmSave').disabled,
                  focus: document.activeElement.id};})()""")
        check("Both selected users are added to the team",
              after["rows"] == before_rows + 2 and pick_a in after["names"] and pick_b in after["names"],
              "%d -> %d" % (before_rows, after["rows"]))
        check("A successful submission closes the modal", not after["open"])
        check("The Members table is refreshed in place, preserving scroll position",
              after["scroll"] == before_scroll, "%s vs %s" % (before_scroll, after["scroll"]))
        check("Save Team becomes available after members are added", after["saveEnabled"])
        check("Closing returns focus to the Add members button",
              after["focus"] == "tmAddMembersBtn", after["focus"])
        check("Nobody appears in the Members table twice",
              len(after["names"]) == len(set(after["names"])), after["names"])

        # ─── 16. Reopen resets, and the new members are now excluded ──────
        open_modal(c, real_click=True)
        reopened = c.eval("""(function(){
          return {q: document.getElementById('tmAddMembersSearch').value,
                  count: document.getElementById('tmAddMembersCount').textContent,
                  panel: !document.getElementById('tmAddMembersPanel').hasAttribute('hidden'),
                  hint: !document.getElementById('tmAddMembersHint').hasAttribute('hidden'),
                  disabled: document.getElementById('tmAddMembersConfirm').disabled,
                  focus: document.activeElement.id};})()""")
        check("Reopening starts with an empty query and no results",
              reopened["q"] == "" and not reopened["panel"] and reopened["hint"])
        check("Reopening resets the selection count to zero",
              reopened["count"] == "0 selected" and reopened["disabled"], reopened["count"])
        check("Reopening focuses the search field", reopened["focus"] == "tmAddMembersSearch")
        search(c, pick_a.split(" ")[0])
        check("A user added in the previous session can't be added again",
              pick_a not in row_names(c), row_names(c))

        # ─── 17. Keyboard ─────────────────────────────────────────────────
        search(c, "ma")
        c.eval("document.getElementById('tmAddMembersSearch').focus()")
        order = []
        for _ in range(3):
            key(c, "Tab")
            time.sleep(0.06)
            order.append(active(c))
        check("Tab moves from the search field into the results",
              "tm-add-option-check" in (order[-1] or ""), order)
        c.eval("document.getElementById('tmAddMembersSearch').focus()")
        key(c, "ArrowDown")
        time.sleep(0.1)
        check("ArrowDown from the search field enters the result list",
              "tm-add-option-check" in (active(c) or ""), active(c))
        key(c, "ArrowDown")
        time.sleep(0.1)
        second_row = c.eval("(document.activeElement.closest('.tm-add-option')||{}).id")
        check("ArrowDown walks down the result list",
              second_row and second_row != c.eval("document.querySelector('.tm-add-option').id"),
              second_row)
        key(c, "Enter")
        time.sleep(0.15)
        check("Enter toggles the focused result",
              c.eval("document.activeElement.checked")
              and text_of(c, "#tmAddMembersCount") == "1 selected",
              text_of(c, "#tmAddMembersCount"))
        key(c, " ")
        time.sleep(0.15)
        check("Space toggles the focused checkbox",
              text_of(c, "#tmAddMembersCount") == "0 selected", text_of(c, "#tmAddMembersCount"))
        key(c, "ArrowUp")
        key(c, "ArrowUp")
        time.sleep(0.1)
        check("ArrowUp walks back up and returns to the search field",
              active(c) == "tmAddMembersSearch", active(c))
        # The trap is checked with a selection in play, so the primary
        # button is enabled and is genuinely the last stop.
        c.eval("document.querySelectorAll('.tm-add-option-check')[0].click()")
        time.sleep(0.15)
        c.eval("document.getElementById('tmAddMembersConfirm').focus()")
        key(c, "Tab")
        time.sleep(0.1)
        wrapped_forward = active(c)
        c.eval("document.getElementById('tmAddMembersClose').focus()")
        key(c, "Tab", mods=8)
        time.sleep(0.1)
        wrapped_back = active(c)
        check("Focus is trapped inside the modal",
              wrapped_forward == "tmAddMembersClose" and wrapped_back == "tmAddMembersConfirm",
              "%s / %s" % (wrapped_forward, wrapped_back))
        check("Selection changes are announced to assistive tech",
              "selected" in (c.eval("document.getElementById('tmAddMembersSRStatus').textContent") or "").lower(),
              c.eval("document.getElementById('tmAddMembersSRStatus').textContent"))
        c.eval("document.querySelectorAll('.tm-add-option-check')[0].click()")
        time.sleep(0.15)

        # ─── close paths ──────────────────────────────────────────────────
        key(c, "Escape")
        time.sleep(0.25)
        check("Escape closes the modal", not visible(c, "#tmAddMembersBackdrop"))
        check("Escape returns focus to the Add members button", active(c) == "tmAddMembersBtn", active(c))
        open_modal(c, real_click=True)
        c.eval("document.getElementById('tmAddMembersClose').click()")
        time.sleep(0.25)
        check("The header X closes the modal", not visible(c, "#tmAddMembersBackdrop"))
        open_modal(c, real_click=True)
        c.eval("document.getElementById('tmAddMembersCancel').click()")
        time.sleep(0.25)
        check("Cancel closes the modal", not visible(c, "#tmAddMembersBackdrop"))
        open_modal(c, real_click=True)
        search(c, "ma")
        c.eval("""(function(){
          var d = document.querySelector('#tmAddMembersBackdrop .cr-confirm-dialog').getBoundingClientRect();
          document.querySelector('#tmAddMembersBackdrop .cr-confirm-dialog').click();})()""")
        time.sleep(0.2)
        check("Clicking inside the dialog does not close it", visible(c, "#tmAddMembersBackdrop"))
        c.eval("""(function(){
          var bd = document.getElementById('tmAddMembersBackdrop');
          bd.dispatchEvent(new MouseEvent('click', {bubbles:true}));})()""")
        time.sleep(0.25)
        check("Clicking the overlay closes the modal", not visible(c, "#tmAddMembersBackdrop"))
        check("A cancelled session leaves the Members table untouched",
              c.eval("document.querySelectorAll('#tmMembersTbody tr').length") == after["rows"])

        # ─── 18. Responsive ───────────────────────────────────────────────
        for w, h in [(1024, 768), (1280, 800), (1440, 900), (1920, 1080), (2560, 1440), (1024, 500), (480, 800)]:
            c.send("Emulation.setDeviceMetricsOverride",
                   {"width": w, "height": h, "deviceScaleFactor": 1, "mobile": False})
            time.sleep(0.25)
            open_modal(c)
            search(c, "ma")
            geo = c.eval("""(function(){
              var d = document.querySelector('#tmAddMembersBackdrop .cr-confirm-dialog').getBoundingClientRect();
              var f = document.querySelector('#tmAddMembersBackdrop .cr-confirm-actions').getBoundingClientRect();
              var ov = document.getElementById('tmAddMembersBackdrop').getBoundingClientRect();
              var body = document.querySelector('#tmAddMembersBackdrop .cr-confirm-body-region');
              var list = document.getElementById('tmAddMembersList');
              var overlap = false, outside = false;
              var panelRight = document.getElementById('tmAddMembersPanel').getBoundingClientRect().right;
              Array.prototype.forEach.call(document.querySelectorAll('.tm-add-option'), function(r){
                var i = r.querySelector('.au-adduser-option-info');
                var t = r.querySelector('.tm-add-option-team');
                if (i && t && i.getBoundingClientRect().right > t.getBoundingClientRect().left + 1) overlap = true;
                if (r.getBoundingClientRect().right > panelRight + 1) outside = true;
              });
              return {w: Math.round(d.width),
                      centered: Math.abs((d.left + d.right)/2 - (ov.left + ov.right)/2) < 1,
                      inViewport: d.left >= -0.5 && d.right <= ov.right + 0.5
                                  && d.top >= -0.5 && d.bottom <= ov.bottom + 0.5,
                      footerVisible: f.bottom <= ov.bottom + 0.5,
                      pageOverflowX: document.documentElement.scrollWidth
                                     > document.documentElement.clientWidth + 1,
                      bodyScrolls: body.scrollHeight > body.clientHeight + 1,
                      listScrolls: list.scrollHeight > list.clientHeight + 1,
                      rows: document.querySelectorAll('.tm-add-option').length,
                      overlap: overlap, outside: outside};})()""")
            label = "%dx%d" % (w, h)
            check("[%s] modal stays centered and fully in view" % label,
                  geo["centered"] and geo["inViewport"], geo)
            check("[%s] footer stays visible" % label, geo["footerVisible"])
            check("[%s] no horizontal page overflow" % label, not geo["pageOverflowX"])
            check("[%s] results scroll inside the list, not the modal body" % label,
                  geo["listScrolls"] and not geo["bodyScrolls"], geo)
            check("[%s] result content neither overlaps nor escapes the panel" % label,
                  not geo["overlap"] and not geo["outside"] and geo["rows"] == 10, geo)
            if w <= 480:
                check("[%s] the modal narrows with the viewport" % label, geo["w"] < 480, geo["w"])
            c.eval("document.getElementById('tmAddMembersCancel').click()")
            time.sleep(0.15)

        c.send("Emulation.setDeviceMetricsOverride",
               {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
        time.sleep(0.25)

        # ─── 19. Nothing unrelated moved ──────────────────────────────────
        check("Edit Team keeps Team details, Members and Delete Team",
              c.eval("""(function(){
                return !!document.getElementById('tmName')
                  && !!document.getElementById('tmMembersTbody')
                  && !!document.getElementById('tmDelete')
                  && !!document.getElementById('tmAddMembersBtn');})()"""))
        check("The Add members trigger button is unchanged",
              text_of(c, "#tmAddMembersBtn").endswith("Add members"), text_of(c, "#tmAddMembersBtn"))
        check("Member rows still offer Remove",
              c.eval("document.querySelectorAll('#tmMembersTbody .tm-row-remove').length") > 0)
        c.eval("(function(){var b=document.getElementById('tmCancel'); if(b)b.click();})()")
        time.sleep(0.5)
        c.eval("""(function(){
          var t = Array.from(document.querySelectorAll('.tab-btn'))
            .find(function(b){ return b.textContent.trim() === 'Users'; });
          if (t) t.click();})()""")
        time.sleep(0.4)
        c.eval(OPEN_ADD_USER_MODAL)
        time.sleep(0.4)
        check("The Add User modal still opens and is unchanged",
              c.eval("""(function(){
                var bd = document.getElementById('auAddUserModalBackdrop');
                return !!bd && !bd.hasAttribute('hidden')
                  && document.getElementById('auAddUserNext').disabled
                  && !!document.getElementById('auAddUserStepIndicator')
                  && document.getElementById('auAddUserSearchInput').value === '';})()"""))
        c.eval("""(function(){var el=document.getElementById('auAddUserSearchInput');
                   el.value='q'; el.dispatchEvent(new Event('input',{bubbles:true}));})()""")
        time.sleep(0.45)
        check("Add User still searches from the first character (no 2-char gate leaked in)",
              c.eval("""(function(){
                var dd = document.getElementById('auAddUserDropdown');
                return !dd.hasAttribute('hidden')
                  && document.querySelectorAll('#auAddUserListbox .au-adduser-option').length > 0;})()"""))
        c.eval("document.getElementById('auAddUserCancel').click()")
        time.sleep(0.2)

        check("No uncaught console exceptions during the whole run",
              c.eval("window.__jsErrors") == [], c.eval("window.__jsErrors"))

    finally:
        try:
            chrome.terminate()
        except Exception:
            pass
        try:
            server.terminate()
        except Exception:
            pass
        shutil.rmtree(profile_dir, ignore_errors=True)

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n" + "=" * 70)
    print("TOTAL: %d passed, %d failed (of %d)" % (passed, failed, len(results)))
    if failed:
        print("\nFailures:")
        for status, name, detail in results:
            if status == "FAIL":
                print("  - %s%s" % (name, ("  (%s)" % detail) if detail else ""))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
