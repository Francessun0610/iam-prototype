#!/usr/bin/env python3
"""Add/Edit User — "Basic information" identity column and avatar
fallback (Round 40, 2026-08-12).

Regression suite for the fix to long identity content overlapping the
form fields, and to the incomplete missing-photo avatar.

The overlap bug: `.au-id-name-row` (shared Add/Edit markup) had its
flex rule scoped to `#addUsersPage.is-edit-mode`, so in Add mode the row
stayed a plain block and `#auIdName` stayed `display: inline`.
`overflow`, `text-overflow` and `white-space: nowrap` do nothing on a
non-replaced inline box, so a long name laid itself out at its full
intrinsic width — straight across the Preferred name field — and the
status icon wrapped onto a line of its own. The name span has to be a
blockified flex item for the ellipsis (and for the `scrollWidth` vs
`clientWidth` measurement that drives its tooltip) to work at all.

The avatar bug: the placeholder SVG's head-ring outer contour carried
only three of its four quarter-arcs, so `Z` closed it with a straight
chord from the ring's left point to its bottom point and sliced a wedge
out of the lower-left. Separately, the container's circular clip
(`border-radius: 50%` + `overflow: hidden`, which the photo case needs)
sat exactly on the outer circle's edge and shaved it.

Covers:
  1. Three distinct grid columns: identity, Preferred name/Team,
     Region/Timezone — with the identity column a `minmax()` range, not
     a rigid track, and `min-width: 0` on all three children.
  2. One shared column-gap token: identity->Preferred equals
     Preferred->Region at every desktop width.
  3. Identity internals: fixed-size avatar, text container that takes
     the remaining width, name and email on separate lines, status icon
     inline beside the name and inside the identity column.
  4. Long name and long email truncate with an ellipsis (CSS, not by
     shortening the stored value) and never overlap the form fields.
  5. Truncation-only tooltips: full value via the shared EDL tooltip on
     hover AND keyboard focus, `tabindex` only while clipped, and
     nothing at all for values that fit.
  6. Missing-photo fallback renders a complete circle (all four head-ring
     quarter-arcs, an unclipped outer circle, square container, centered
     un-stretched SVG); a real photo still wins over the fallback and
     keeps its circular crop; a failed image URL falls back.
  7. Form columns stay aligned: Preferred name/Region share a top,
     Team/Timezone share a top, equal widths.
  8. Responsive reflow: 3 columns, then identity on its own row above two
     equal form columns, then a single column — identically in Add and
     Edit mode, with no horizontal page overflow.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_add_user_basic_identity.py
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

# The roster's deliberately long-named employee, plus a short-named one.
LONG_NAME = "Alexandra Featherington-Montgomery"
LONG_EMAIL = "alexandra.featherington-montgomery@disney.com"
SHORT_NAME = "Priya Nair"

DESKTOP_WIDTHS = [1024, 1280, 1440, 1920, 2560]

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
    profile_dir = tempfile.mkdtemp(prefix="iam-au-basic-identity-test-")
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


def set_width(c, width, height=900):
    c.send("Emulation.setDeviceMetricsOverride",
           {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.35)


def wait_for(c, expr, timeout=6.0, label=""):
    """Poll a truthy JS expression. The users table and the roster listbox
    both render asynchronously, so querying them straight after navigation
    is a race."""
    deadline = time.time() + timeout
    while time.time() < deadline:
        if js(c, expr):
            return True
        time.sleep(0.1)
    raise RuntimeError("timed out waiting for %s" % (label or expr))


def open_add_user_with(c, base, name):
    """Users list -> Add User modal -> search -> select -> Next."""
    c.navigate(base, wait=1.5)
    wait_for(c, "!!document.querySelector('#usersPanel .btn-ghost')", label="users toolbar")
    js(c, """
    (function(){
      var b=document.querySelectorAll('#usersPanel .btn-ghost');
      for (var i=0;i<b.length;i++){ if(b[i].textContent.indexOf('Add User')!==-1){ b[i].click(); return true; } }
      return false;
    })()
    """)
    wait_for(c, "!!document.getElementById('auAddUserSearchInput')", label="Add User modal")
    js(c, """
    (function(){
      var i=document.getElementById('auAddUserSearchInput');
      i.value=%s; i.dispatchEvent(new Event('input',{bubbles:true}));
    })()
    """ % json.dumps(name))
    wait_for(c, """
    !!Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option'))
        .find(function(x){ return x.textContent.indexOf(%s)!==-1; })
    """ % json.dumps(name), label="roster option %r" % name)
    js(c, """
    (function(){
      Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option'))
        .find(function(x){ return x.textContent.indexOf(%s)!==-1; }).click();
    })()
    """ % json.dumps(name))
    wait_for(c, "document.getElementById('auAddUserNext').disabled === false", label="Next enabled")
    js(c, "document.getElementById('auAddUserNext').click();")
    wait_for(c, "document.getElementById('auEditRow').hidden === false", label="identity row")
    time.sleep(0.3)


def open_edit_user(c, base):
    """Users list -> click the first user's name link -> Edit User page."""
    c.navigate(base, wait=1.5)
    wait_for(c, "!!document.querySelector('#tbody a.name-link')", label="users table row")
    js(c, "document.querySelector('#tbody a.name-link').click();")
    wait_for(c, "document.getElementById('addUsersPage').className.indexOf('is-edit-mode') !== -1",
             label="Edit User page")
    wait_for(c, "!!(document.getElementById('auIdName').textContent || '').trim()", label="identity populated")
    time.sleep(0.3)


# Geometry/state probe for the Basic information card. Returns everything
# the assertions below need in one round-trip.
PROBE = """
(function(){
  function R(sel){
    var e=document.querySelector(sel); if(!e) return null;
    var r=e.getBoundingClientRect();
    return {left:r.left, right:r.right, top:r.top, bottom:r.bottom, w:r.width, h:r.height};
  }
  var name=document.getElementById('auIdName');
  var email=document.getElementById('auIdEmail');
  var status=document.getElementById('auIdStatus');
  var avatar=document.getElementById('auIdAvatar');
  var body=document.querySelector('#auBasicCard .au-section-body');
  var cs=getComputedStyle(body);
  var idRow=R('#auEditRow'), idBlock=R('#auIdBlock');
  var pref=R('.au-field-preferred'), region=R('.au-field-region');
  var team=R('.au-field-team'), tz=R('.au-field-timezone');
  var nameR=R('#auIdName'), emailR=R('#auIdEmail'), statusR=R('#auIdStatus');
  var avatarR=avatar.getBoundingClientRect();
  var svg=avatar.querySelector('svg.au-id-avatar-svg');
  var img=avatar.querySelector('img.au-id-avatar-img');
  var initials=avatar.querySelector('.au-id-avatar-initials');
  /* Same row == vertical centers within 2px. Overlap is only meaningful
     between boxes that actually share a row. */
  function sameRow(a,b){ return !!(a&&b) && Math.abs((a.top+a.h/2)-(b.top+b.h/2)) <= 2; }
  function sharesBand(a,b){
    if(!a||!b) return false;
    return a.top < b.bottom - 0.5 && b.top < a.bottom - 0.5;
  }
  return {
    gridCols: cs.gridTemplateColumns,
    gridColsRaw: body.style.gridTemplateColumns,
    colGap: parseFloat(cs.columnGap),
    colGapToken: cs.getPropertyValue('--au-basic-col-gap').trim(),
    identityColToken: cs.getPropertyValue('--au-basic-identity-col').trim(),
    columnCount: cs.gridTemplateColumns.split(' ').filter(function(x){return x.length;}).length,

    minWidths: {
      editRow: getComputedStyle(document.getElementById('auEditRow')).minWidth,
      idBlock: getComputedStyle(document.getElementById('auIdBlock')).minWidth,
      idMeta: getComputedStyle(document.querySelector('.au-id-meta')).minWidth,
      nameRow: getComputedStyle(document.querySelector('.au-id-name-row')).minWidth,
      pref: getComputedStyle(document.querySelector('.au-field-preferred')).minWidth,
      region: getComputedStyle(document.querySelector('.au-field-region')).minWidth
    },
    positions: {
      editRow: getComputedStyle(document.getElementById('auEditRow')).position,
      idBlock: getComputedStyle(document.getElementById('auIdBlock')).position,
      pref: getComputedStyle(document.querySelector('.au-field-preferred')).position
    },
    margins: {
      idBlockLeft: getComputedStyle(document.getElementById('auIdBlock')).marginLeft,
      idMetaLeft: getComputedStyle(document.querySelector('.au-id-meta')).marginLeft,
      nameLeft: getComputedStyle(name).marginLeft
    },

    /* Gaps measured from the rendered boxes, so a stray margin or
       padding on any column would show up here. */
    gapIdentityToPreferred: (pref && idRow) ? pref.left - idRow.right : null,
    gapPreferredToRegion: (region && pref) ? region.left - pref.right : null,
    gapTeamToTimezone: (tz && team) ? tz.left - team.right : null,

    identityRow: idRow, identityBlock: idBlock,
    nameRect: nameR, emailRect: emailR, statusRect: statusR,
    prefRect: pref, regionRect: region, teamRect: team, tzRect: tz,

    nameDisplay: getComputedStyle(name).display,
    nameWhiteSpace: getComputedStyle(name).whiteSpace,
    nameOverflow: getComputedStyle(name).overflow,
    nameTextOverflow: getComputedStyle(name).textOverflow,
    nameFontSize: getComputedStyle(name).fontSize,
    emailFontSize: getComputedStyle(email).fontSize,
    nameRowDisplay: getComputedStyle(document.querySelector('.au-id-name-row')).display,
    nameRowMinWidth: getComputedStyle(document.querySelector('.au-id-name-row')).minWidth,

    nameText: name.textContent,
    emailText: email.textContent,
    nameClipped: name.scrollWidth > name.clientWidth + 1,
    emailClipped: email.scrollWidth > email.clientWidth + 1,
    nameTooltip: name.getAttribute('data-tooltip'),
    emailTooltip: email.getAttribute('data-tooltip'),
    nameTabindex: name.getAttribute('tabindex'),
    emailTabindex: email.getAttribute('tabindex'),
    nameTitleAttr: name.getAttribute('title'),

    /* Name and email must stay on separate lines and inside the
       identity column; the status icon must stay beside the name. */
    nameEmailSeparateLines: !!(nameR && emailR) && emailR.top >= nameR.bottom - 1,
    statusBesideName: sameRow(statusR, nameR) && !!(statusR && nameR) && statusR.left >= nameR.right - 1,
    statusInsideIdentity: !!(statusR && idBlock) && statusR.right <= idBlock.right + 0.5,
    statusVisible: !!(statusR && statusR.w > 0 && statusR.h > 0),

    /* Overlap checks, evaluated only when the boxes share a row band. */
    nameOverlapsPreferred: sharesBand(nameR, pref) && nameR.right > pref.left + 0.5,
    emailOverlapsTeam: sharesBand(emailR, team) && emailR.right > team.left + 0.5,
    identityOverflowsColumn: !!(nameR && idRow) && nameR.right > idRow.right + 0.5,

    prefRegionSameRow: sameRow(pref, region),
    teamTzSameRow: sameRow(team, tz),
    prefRegionSameTop: !!(pref && region) && Math.abs(pref.top - region.top) < 0.5,
    teamTzSameTop: !!(team && tz) && Math.abs(team.top - tz.top) < 0.5,
    prefRegionSameWidth: !!(pref && region) && Math.abs(pref.w - region.w) < 0.5,
    teamTzSameWidth: !!(team && tz) && Math.abs(team.w - tz.w) < 0.5,
    identityOwnRow: !!(pref && idRow) && pref.top >= idRow.bottom - 1,

    avatar: {
      w: avatarR.width, h: avatarR.height,
      square: Math.abs(avatarR.width - avatarR.height) < 0.5,
      overflow: getComputedStyle(avatar).overflow,
      borderRadius: getComputedStyle(avatar).borderRadius,
      kind: img ? 'photo' : (initials ? 'initials' : (svg ? 'placeholder' : 'empty')),
      svg: svg ? (function(){
        var r=svg.getBoundingClientRect();
        var ar=r.width && r.height ? r.width/r.height : null;
        /* Head-ring outer contour: count the cubic segments of the
           second subpath. Three means the wedge bug is back. */
        var head=null, ringOuter=null;
        var paths=svg.querySelectorAll('path');
        for(var i=0;i<paths.length;i++){
          var d=paths[i].getAttribute('d')||'';
          if(d.indexOf('M36.0001 36.9477')===0){
            var subs=d.split('M').filter(function(s){return s.length;});
            head=(subs[1]||'').split('C').length-1;
          }
          if(d.indexOf('M36 69.1579')===0){
            var subs2=d.split('M').filter(function(s){return s.length;});
            ringOuter=(subs2[1]||'').split('C').length-1;
          }
        }
        return {w:r.width, h:r.height, aspect:ar, viewBox:svg.getAttribute('viewBox'),
                centeredX: Math.abs((r.left+r.width/2)-(avatarR.left+avatarR.width/2)) < 0.5,
                centeredY: Math.abs((r.top+r.height/2)-(avatarR.top+avatarR.height/2)) < 0.5,
                headRingSegments: head, outerRingSegments: ringOuter,
                fitsContainer: r.width <= avatarR.width + 0.5 && r.height <= avatarR.height + 0.5};
      })() : null,
      imgObjectFit: img ? getComputedStyle(img).objectFit : null,
      pseudo: (function(){
        var b=getComputedStyle(avatar,'::before'), a=getComputedStyle(avatar,'::after');
        return {before: b.content, after: a.content};
      })()
    },

    docOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth
  };
})()
"""


def probe(c):
    return js(c, PROBE)


def main():
    port = free_port()
    server = start_static_server(port)
    debug_port = free_port()
    chrome, profile_dir = launch_chrome(debug_port)
    time.sleep(0.7)
    c = CDP(debug_port)
    base = "http://127.0.0.1:%d/v4.1/" % port
    console_errors = []
    try:
        c.send("Network.setCacheDisabled", {"cacheDisabled": True})
        # Headless Chrome withholds focus events from an unfocused window,
        # which would make the keyboard-focus tooltip assertions vacuous.
        c.send("Emulation.setFocusEmulationEnabled", {"enabled": True})

        # ── 1. Long identity content at every desktop width ────────────
        set_width(c, 1440)
        open_add_user_with(c, base, LONG_NAME)
        m = probe(c)
        check("Add mode renders the selected roster user's identity",
              m["nameText"] == LONG_NAME and m["emailText"] == LONG_EMAIL,
              "%s / %s" % (m["nameText"], m["emailText"]))

        check("The name span is blockified (not `display: inline`), so the CSS ellipsis applies",
              m["nameDisplay"] != "inline", "display=%s" % m["nameDisplay"])
        check("`.au-id-name-row` is a flex row in Add mode too (rule is no longer Edit-only)",
              "flex" in m["nameRowDisplay"], m["nameRowDisplay"])
        check("`.au-id-name-row` carries min-width: 0", m["nameRowMinWidth"] in ("0px",), m["nameRowMinWidth"])
        check("Name keeps nowrap + hidden overflow + ellipsis",
              m["nameWhiteSpace"] == "nowrap" and m["nameOverflow"] == "hidden"
              and m["nameTextOverflow"] == "ellipsis",
              "%s/%s/%s" % (m["nameWhiteSpace"], m["nameOverflow"], m["nameTextOverflow"]))
        check("Identity typography is unchanged (18px name / 14px email)",
              m["nameFontSize"] == "18px" and m["emailFontSize"] == "14px",
              "%s / %s" % (m["nameFontSize"], m["emailFontSize"]))

        for w in DESKTOP_WIDTHS:
            set_width(c, w)
            m = probe(c)
            check("@%d: three grid columns" % w, m["columnCount"] == 3, m["gridCols"])
            check("@%d: identity column is a minmax() range, not a rigid track" % w,
                  "minmax" in m["identityColToken"], m["identityColToken"])
            check("@%d: one shared column-gap token drives both gaps" % w,
                  m["colGapToken"] != "" and abs(m["colGap"] - float(m["colGapToken"].replace("px", ""))) < 0.5,
                  "token=%s computed=%s" % (m["colGapToken"], m["colGap"]))
            check("@%d: identity->Preferred gap equals Preferred->Region gap" % w,
                  abs(m["gapIdentityToPreferred"] - m["gapPreferredToRegion"]) < 1.0,
                  "%.1f vs %.1f" % (m["gapIdentityToPreferred"], m["gapPreferredToRegion"]))
            check("@%d: long name never overlaps Preferred name" % w,
                  m["nameOverlapsPreferred"] is False,
                  "name.right=%.1f pref.left=%.1f" % (m["nameRect"]["right"], m["prefRect"]["left"]))
            check("@%d: long email never overlaps Team" % w,
                  m["emailOverlapsTeam"] is False,
                  "email.right=%.1f team.left=%.1f" % (m["emailRect"]["right"], m["teamRect"]["left"]))
            check("@%d: identity text stays inside its own column" % w,
                  m["identityOverflowsColumn"] is False)
            check("@%d: long name is truncated with an ellipsis" % w, m["nameClipped"] is True)
            check("@%d: long email is truncated with an ellipsis" % w, m["emailClipped"] is True)
            check("@%d: truncated name exposes the FULL name as a tooltip" % w,
                  m["nameTooltip"] == LONG_NAME, repr(m["nameTooltip"]))
            check("@%d: truncated email exposes the FULL email as a tooltip" % w,
                  m["emailTooltip"] == LONG_EMAIL, repr(m["emailTooltip"]))
            check("@%d: truncated values are keyboard-focusable" % w,
                  m["nameTabindex"] == "0" and m["emailTabindex"] == "0")
            check("@%d: stored values are not shortened in the DOM" % w,
                  m["nameText"] == LONG_NAME and m["emailText"] == LONG_EMAIL
                  and "\u2026" not in m["nameText"] and "..." not in m["nameText"])
            check("@%d: name and email stay on separate lines" % w, m["nameEmailSeparateLines"] is True)
            check("@%d: status icon stays inline beside the name" % w, m["statusBesideName"] is True)
            check("@%d: status icon stays inside the identity column and visible" % w,
                  m["statusInsideIdentity"] is True and m["statusVisible"] is True)
            check("@%d: Preferred name and Region share a top" % w, m["prefRegionSameTop"] is True)
            check("@%d: Team and Timezone share a top" % w, m["teamTzSameTop"] is True)
            check("@%d: paired fields have equal widths" % w,
                  m["prefRegionSameWidth"] is True and m["teamTzSameWidth"] is True)
            check("@%d: no horizontal page overflow" % w, m["docOverflow"] <= 0, str(m["docOverflow"]))

        # ── 2. No absolute positioning / negative margins used to fix it ─
        set_width(c, 1440)
        m = probe(c)
        check("No column is positioned absolutely",
              all(v == "static" for v in m["positions"].values()), json.dumps(m["positions"]))
        check("No negative margins conceal the overlap",
              all(not str(v).startswith("-") for v in m["margins"].values()), json.dumps(m["margins"]))
        check("All three grid children carry min-width: 0",
              m["minWidths"]["editRow"] == "0px" and m["minWidths"]["pref"] == "0px"
              and m["minWidths"]["region"] == "0px", json.dumps(m["minWidths"]))
        check("Identity text container carries min-width: 0",
              m["minWidths"]["idMeta"] == "0px", m["minWidths"]["idMeta"])

        # ── 3. Tooltip behavior: hover, keyboard focus, and no duplicates ─
        tip_hover = js(c, """
        (function(){
          var n=document.getElementById('auIdName');
          n.dispatchEvent(new MouseEvent('mouseover',{bubbles:true}));
          var t=document.getElementById('statusTooltip');
          return {visible: !!(t && t.classList.contains('is-visible')), text: t? t.textContent : null,
                  role: t? t.getAttribute('role') : null, cls: t? t.className : null};
        })()
        """)
        check("Hovering a truncated name shows the shared EDL tooltip with the full name",
              tip_hover["visible"] is True and tip_hover["text"] == LONG_NAME, json.dumps(tip_hover))
        check("The tooltip is the existing shared component, not a bespoke one",
              tip_hover["role"] == "tooltip" and "edl-status-tooltip" in (tip_hover["cls"] or ""),
              "%s / %s" % (tip_hover["role"], tip_hover["cls"]))
        js(c, "document.getElementById('auIdName').dispatchEvent(new MouseEvent('mouseout',{bubbles:true}));")
        time.sleep(0.15)

        tip_focus = js(c, """
        (function(){
          var e=document.getElementById('auIdEmail');
          e.focus();
          var t=document.getElementById('statusTooltip');
          return {focused: document.activeElement===e,
                  visible: !!(t && t.classList.contains('is-visible')),
                  text: t? t.textContent : null};
        })()
        """)
        check("Keyboard focus on a truncated email shows the full email",
              tip_focus["focused"] is True and tip_focus["visible"] is True
              and tip_focus["text"] == LONG_EMAIL, json.dumps(tip_focus))
        js(c, "document.activeElement.blur();")
        time.sleep(0.15)
        check("Blur hides the tooltip again",
              js(c, "!!document.getElementById('statusTooltip').classList.contains('is-visible')") is False)
        check("No native `title` duplicating the ADS tooltip on the name",
              m["nameTitleAttr"] in (None, ""), repr(m["nameTitleAttr"]))

        # ── 4. Short values get no tooltip at all ──────────────────────
        open_add_user_with(c, base, SHORT_NAME)
        set_width(c, 1440)
        ms = probe(c)
        check("A short name is not truncated", ms["nameClipped"] is False)
        check("A short email is not truncated", ms["emailClipped"] is False)
        check("A short name has no tooltip and is not focusable",
              ms["nameTooltip"] is None and ms["nameTabindex"] is None,
              "%r / %r" % (ms["nameTooltip"], ms["nameTabindex"]))
        check("A short email has no tooltip and is not focusable",
              ms["emailTooltip"] is None and ms["emailTabindex"] is None)
        no_tip = js(c, """
        (function(){
          var t=document.getElementById('statusTooltip');
          if(t){ t.classList.remove('is-visible'); }
          var n=document.getElementById('auIdName');
          n.dispatchEvent(new MouseEvent('mouseover',{bubbles:true}));
          return !!(t && t.classList.contains('is-visible'));
        })()
        """)
        check("Hovering a short name shows no tooltip", no_tip is False)

        # ── 5. Missing-photo avatar fallback ───────────────────────────
        check("Fallback avatar container is square", ms["avatar"]["square"] is True,
              "%.1fx%.1f" % (ms["avatar"]["w"], ms["avatar"]["h"]))
        check("Fallback avatar matches the Edit User 64px size",
              abs(ms["avatar"]["w"] - 64) < 0.5, "%.1f" % ms["avatar"]["w"])
        check("A user without a photo gets the vector placeholder",
              ms["avatar"]["kind"] == "placeholder", ms["avatar"]["kind"])
        check("Head-ring outer contour has all FOUR quarter-arcs (no lower-left wedge)",
              ms["avatar"]["svg"]["headRingSegments"] == 4,
              "segments=%s" % ms["avatar"]["svg"]["headRingSegments"])
        check("Outer circle contour is complete too",
              ms["avatar"]["svg"]["outerRingSegments"] == 4,
              "segments=%s" % ms["avatar"]["svg"]["outerRingSegments"])
        check("Placeholder is not clipped by the container's circular crop",
              ms["avatar"]["overflow"] == "visible", ms["avatar"]["overflow"])
        check("Placeholder SVG is centered in its container",
              ms["avatar"]["svg"]["centeredX"] is True and ms["avatar"]["svg"]["centeredY"] is True)
        check("Placeholder SVG keeps a 1:1 aspect ratio (not stretched)",
              abs(ms["avatar"]["svg"]["aspect"] - 1.0) < 0.01,
              "%.4f" % ms["avatar"]["svg"]["aspect"])
        check("Placeholder viewBox is uncropped (0 0 72 72)",
              ms["avatar"]["svg"]["viewBox"] == "0 0 72 72", ms["avatar"]["svg"]["viewBox"])
        check("No pseudo-element covers the avatar",
              ms["avatar"]["pseudo"]["before"] in ("none", "normal", "")
              and ms["avatar"]["pseudo"]["after"] in ("none", "normal", ""),
              json.dumps(ms["avatar"]["pseudo"]))

        # ── 6. A real photo still wins, and keeps its circular crop ────
        open_edit_user(c, base)
        set_width(c, 1440)
        me = probe(c)
        check("Edit User is the mode under test",
              "is-edit-mode" in js(c, "document.getElementById('addUsersPage').className"))
        check("A user WITH a photo renders the photo, not the fallback",
              me["avatar"]["kind"] == "photo", me["avatar"]["kind"])
        check("The photo keeps its circular crop (container still clips)",
              me["avatar"]["overflow"] == "hidden" and me["avatar"]["borderRadius"] == "50%",
              "%s / %s" % (me["avatar"]["overflow"], me["avatar"]["borderRadius"]))
        check("The photo is cover-fitted in a square container",
              me["avatar"]["imgObjectFit"] == "cover" and me["avatar"]["square"] is True)

        # Edit mode gets the same identity treatment as Add mode.
        js(c, """
        (function(){
          document.getElementById('auIdName').textContent=%s;
          document.getElementById('auIdEmail').textContent=%s;
          window.dispatchEvent(new Event('resize'));
        })()
        """ % (json.dumps(LONG_NAME), json.dumps(LONG_EMAIL)))
        time.sleep(0.3)
        me2 = probe(c)
        check("Edit mode truncates a long name the same way Add mode does",
              me2["nameClipped"] is True and me2["nameOverlapsPreferred"] is False)
        check("Edit mode exposes the same truncation tooltip",
              me2["nameTooltip"] == LONG_NAME and me2["nameTabindex"] == "0")

        # ── 6b. External users keep their initials chip ────────────────
        # The "don't clip the placeholder" rule is a `:has()` on the SVG
        # case, so the chip (which the circular crop still applies to)
        # must be untouched.
        c.navigate(base, wait=1.5)
        wait_for(c, "!!document.querySelector('#usersPanel button')", label="users toolbar")
        js(c, """
        (function(){
          var b=Array.from(document.querySelectorAll('#usersPanel button, #usersPanel [role=tab]'))
            .find(function(x){ return x.textContent.trim()==='External'; });
          if(b) b.click();
        })()
        """)
        wait_for(c, "!!document.querySelector('#tbody a.name-link')", label="external users table")
        js(c, "document.querySelector('#tbody a.name-link').click();")
        wait_for(c, "!!document.querySelector('#auIdAvatar .au-id-avatar-initials')",
                 label="external initials chip")
        set_width(c, 1440)
        mx = probe(c)
        check("An external user still gets the initials chip, not the SVG placeholder",
              mx["avatar"]["kind"] == "initials", mx["avatar"]["kind"])
        check("The initials chip keeps the square container and circular clip",
              mx["avatar"]["square"] is True and mx["avatar"]["overflow"] == "hidden"
              and abs(mx["avatar"]["w"] - 64) < 0.5,
              "%s / %.1f" % (mx["avatar"]["overflow"], mx["avatar"]["w"]))
        check("An external user's status icon still sits beside the name",
              mx["statusBesideName"] is True and mx["statusInsideIdentity"] is True)

        # ── 7. A failed image URL falls back to the placeholder ────────
        c.send("Network.enable", {})
        c.send("Network.setBlockedURLs", {"urls": ["*/photos/*"]})
        open_edit_user(c, base)
        # The swap happens in the <img>'s own `error` handler.
        wait_for(c, "!!document.querySelector('#auIdAvatar svg.au-id-avatar-svg')",
                 label="placeholder after failed photo load")
        set_width(c, 1440)
        mb = probe(c)
        check("A failed photo URL falls back to the vector placeholder",
              mb["avatar"]["kind"] == "placeholder", mb["avatar"]["kind"])
        check("The fallback from a failed URL is also a complete circle",
              mb["avatar"]["svg"]["headRingSegments"] == 4
              and mb["avatar"]["svg"]["outerRingSegments"] == 4)
        check("The fallback from a failed URL is square and unclipped",
              mb["avatar"]["square"] is True and mb["avatar"]["overflow"] == "visible")
        c.send("Network.setBlockedURLs", {"urls": []})

        # ── 8. Responsive reflow, in BOTH modes ────────────────────────
        for mode in ("add", "edit"):
            if mode == "add":
                open_add_user_with(c, base, LONG_NAME)
            else:
                open_edit_user(c, base)

            set_width(c, 1440)
            m3 = probe(c)
            check("%s @1440: three columns" % mode, m3["columnCount"] == 3, m3["gridCols"])
            check("%s @1440: identity shares the row with the form columns" % mode,
                  m3["identityOwnRow"] is False)

            set_width(c, 900)
            m2 = probe(c)
            check("%s @900: identity block moves to its own row" % mode,
                  m2["identityOwnRow"] is True)
            check("%s @900: two equal form columns remain" % mode,
                  m2["columnCount"] == 2 and m2["prefRegionSameRow"] is True
                  and m2["prefRegionSameWidth"] is True, m2["gridCols"])
            check("%s @900: the two form columns keep the shared gap" % mode,
                  abs(m2["gapPreferredToRegion"] - m2["gapTeamToTimezone"]) < 1.0,
                  "%.1f vs %.1f" % (m2["gapPreferredToRegion"], m2["gapTeamToTimezone"]))
            check("%s @900: no name/field overlap" % mode,
                  m2["nameOverlapsPreferred"] is False and m2["emailOverlapsTeam"] is False)
            check("%s @900: avatar is still an undistorted square" % mode,
                  m2["avatar"]["square"] is True and abs(m2["avatar"]["w"] - 64) < 0.5)
            check("%s @900: no horizontal page overflow" % mode, m2["docOverflow"] <= 0)

            set_width(c, 600)
            m1 = probe(c)
            check("%s @600: single column" % mode, m1["columnCount"] == 1, m1["gridCols"])
            check("%s @600: identity still on its own row above the fields" % mode,
                  m1["identityOwnRow"] is True)
            check("%s @600: Preferred name/Team stay adjacent (pairs not interleaved)" % mode,
                  m1["prefRect"]["top"] < m1["teamRect"]["top"] < m1["regionRect"]["top"] < m1["tzRect"]["top"],
                  "pref=%.0f team=%.0f region=%.0f tz=%.0f" % (
                      m1["prefRect"]["top"], m1["teamRect"]["top"],
                      m1["regionRect"]["top"], m1["tzRect"]["top"]))
            check("%s @600: no horizontal page overflow" % mode, m1["docOverflow"] <= 0)

            set_width(c, 375)
            m0 = probe(c)
            check("%s @375: ellipsis + tooltip behavior still works at the narrowest width" % mode,
                  m0["nameClipped"] is True and m0["nameTooltip"] is not None
                  and m0["nameTabindex"] == "0")
            check("%s @375: identity is never hidden" % mode,
                  m0["nameRect"]["w"] > 0 and m0["emailRect"]["w"] > 0
                  and m0["avatar"]["w"] > 0)
            check("%s @375: no horizontal page overflow" % mode, m0["docOverflow"] <= 0)

        # ── 9. Unrelated behavior preserved ───────────────────────────
        set_width(c, 1440)
        open_add_user_with(c, base, LONG_NAME)
        preserved = js(c, """
        (function(){
          var pref=document.getElementById('auPreferredName');
          pref.focus(); pref.value='Alex'; pref.dispatchEvent(new Event('input',{bubbles:true}));
          return {
            title: (document.getElementById('auBasicTitle')||{}).textContent,
            chevron: !!document.querySelector('#auBasicCard .cr-section-chev'),
            prefValue: pref.value,
            prefEditable: !pref.readOnly && !pref.disabled,
            team: document.getElementById('auTeam').value,
            region: document.getElementById('auRegion').value,
            timezone: document.getElementById('auTimezone').value,
            permsCard: !!document.getElementById('auPermsCard'),
            cancel: !!document.getElementById('auCancel') || !!document.querySelector('#addUsersPage .au-btn-cancel'),
            save: !!document.getElementById('auSave')
          };
        })()
        """)
        check("Basic information title and chevron are untouched",
              preserved["title"] == "Basic information" and preserved["chevron"] is True,
              json.dumps(preserved["title"]))
        check("Preferred name still accepts input", preserved["prefValue"] == "Alex"
              and preserved["prefEditable"] is True)
        check("Team / Region / Timezone values are untouched",
              preserved["team"] == "Sales Planning" and preserved["region"] == "EMEA"
              and preserved["timezone"] == "Europe/Madrid", json.dumps(preserved))
        check("Role and Permission card and the header actions still exist",
              preserved["permsCard"] is True and preserved["save"] is True)
        collapse = js(c, """
        (function(){
          var h=document.querySelector('#auBasicCard .cr-section-header');
          var before=h.getAttribute('aria-expanded');
          h.click();
          var after=h.getAttribute('aria-expanded');
          h.click();
          return {before: before, after: after, restored: h.getAttribute('aria-expanded')};
        })()
        """)
        check("The card still collapses and expands",
              collapse["before"] != collapse["after"] and collapse["restored"] == collapse["before"],
              json.dumps(collapse))

        # A collapsed body is display:none, so a resize while collapsed
        # measures zero widths and clears the tooltips. Expanding has to
        # re-measure, or they'd stay gone until the next resize.
        js(c, "document.querySelector('#auBasicCard .cr-section-header').click();")
        time.sleep(0.2)
        set_width(c, 1280)
        cleared = js(c, "document.getElementById('auIdName').hasAttribute('data-tooltip')")
        js(c, "document.querySelector('#auBasicCard .cr-section-header').click();")
        time.sleep(0.3)
        restored = js(c, """
        (function(){ var n=document.getElementById('auIdName');
          return {tip: n.getAttribute('data-tooltip'), tabindex: n.getAttribute('tabindex')}; })()
        """)
        check("Truncation tooltip is restored after collapse -> resize -> expand",
              cleared is False and restored["tip"] == LONG_NAME and restored["tabindex"] == "0",
              "cleared_while_collapsed=%s restored=%s" % (cleared, json.dumps(restored)))

        console_errors = js(c, "window.__iamConsoleErrors || []") or []
        check("No uncaught console exceptions were observed during the flow",
              not console_errors, json.dumps(console_errors))

    finally:
        try:
            c.close()
        except Exception:
            pass
        chrome.terminate()
        server.terminate()
        shutil.rmtree(profile_dir, ignore_errors=True)

    passed = sum(1 for r in results if r[0] == "PASS")
    failed = sum(1 for r in results if r[0] == "FAIL")
    print("\n" + "=" * 70)
    print("TOTAL: %d passed, %d failed (of %d)" % (passed, failed, len(results)))
    if failed:
        for status, name, detail in results:
            if status == "FAIL":
                print("  FAIL: %s%s" % (name, ("  (%s)" % detail) if detail else ""))
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
