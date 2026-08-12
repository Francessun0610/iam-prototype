#!/usr/bin/env python3
"""Add/Edit User — full-dataset identity audit (Round 41, 2026-08-12).

`test_add_user_basic_identity.py` covers the identity column's layout
contract on one long-named and one short-named roster employee. This suite
is the dataset-wide companion: it walks the records the Add User flow can
actually reach — the 60 internal users and 60 external users behind Edit
User, and the roster the Add User modal searches — and asserts the same
geometry for every one of them, at every supported desktop width.

It also pins the three defects that audit turned up, none of which the
single-user suite could see:

  1. External Edit User builds its read-only Company display as a `<div>`
     and used to hard-code that div's box inline: 36px min-height, 8px
     padding, 6px radius. Those inline values beat the shared `.au-input`
     rule, so Company rendered 4px taller than every other control in the
     card. With `align-items: center` on the section grid, the taller box
     no longer shared a top edge with the Timezone control beside it —
     off by 2px for all 60 external users. The div now takes its metrics
     from `.au-input` + `.au-input-readonly` like the read-only Email
     field does.

  2. The avatar's image `error` handler closed over the shared avatar
     container and replaced its contents unconditionally. Pick a user
     whose photo is still in flight, then pick another, and the first
     request's failure would wipe the *second* user's perfectly good
     photo and leave them with the placeholder. The handler now ignores
     an image that is no longer the mounted one.

  3. Source order ran Preferred name, Region, Timezone, Team while the
     grid rendered Team on row 2 column 2 and Timezone on row 2 column 3.
     Tab order follows source order, so keyboard focus jumped from
     Region across to Timezone and then back to Team. The markup now
     reads in the same row-major order the grid paints.

  4. Two fields sharing a grid row were centered in it, so when a larger
     base font wrapped the longer label ("Preferred name" against
     "Region") the shorter field floated out of line with its partner.
     Form fields now align to the row start.

Usage:
    pip install -r tests/requirements.txt
    python3 tests/test_add_user_identity_audit.py

By default this walks the whole roster plus a stride through the internal
and external users at three widths, which keeps a run near two minutes.
Set IAM_FULL_MATRIX=1 to walk all 131 records at all five widths (~6
minutes) — that is the sweep the audit itself ran.
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

FULL = os.environ.get("IAM_FULL_MATRIX") == "1"
DESKTOP_WIDTHS = [1024, 1280, 1440, 1920, 2560] if FULL else [1024, 1440, 2560]
STRIDE = 1 if FULL else 6

LONG_NAME = "Alexandra Featherington-Montgomery"
LONG_EMAIL = "alexandra.featherington-montgomery@disney.com"
SHORT_NAME = "Priya Nair"

# Cases the shipped dataset has no record for. Pushed onto `ROSTER_DATA`
# in the page at runtime so they travel the real selection path; the
# repo's fixture arrays are never edited.
STRESS_FIXTURES = [
    {"id": "qa01",
     "name": "Maximiliana Anastasia Wolfeschlegelsteinhausenbergerdorff-Featheringtonshire",
     "email": "maximiliana.anastasia.wolfeschlegelsteinhausenbergerdorff@international-media-partnerships.disney-advertising.com",
     "team": "Global Addressable & Programmatic Revenue Yield Management Operations",
     "region": "EMEA", "timezone": "Europe/Madrid", "status": "Active", "eligible": True},
    {"id": "qa02", "name": "Prince", "email": "prince@disney.com", "team": "Sales Planning",
     "region": "NA", "timezone": "America/New_York", "status": "Active", "eligible": True},
    {"id": "qa03", "name": "\u5c71\u7530\u592a\u90ce\u30fb\u9234\u6728\u82b1\u5b50\u30fb\u4e2d\u6751\u5065\u4e00\u90ce",
     "email": "yamada.taro@disney.co.jp", "team": "National Ad Sales",
     "region": "ANZ", "timezone": "Australia/Sydney", "status": "Active", "eligible": True},
    {"id": "qa04",
     "name": "Wolfeschlegelsteinhausenbergerdorffvoralternwarengewissenhaftschaferswesenchafe",
     "email": "unbroken@disney.com", "team": "Sales Planning",
     "region": "NA", "timezone": "America/Chicago", "status": "Active", "eligible": True},
    {"id": "qa05", "name": "Plus Addressing",
     "email": "firstname.lastname+adconsole-provisioning-2026@disney.com",
     "team": "Ad Operations", "region": "EMEA", "timezone": "Europe/London",
     "status": "Active", "eligible": True},
    {"id": "qa06", "name": "Broken Photo Fixture", "email": "broken.photo@disney.com",
     "avatar": "../avatars/photos/does-not-exist.png", "team": "Ad Operations",
     "region": "NA", "timezone": "America/New_York", "status": "Active", "eligible": True},
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
    chrome_bin = next((c for c in CHROME_CANDIDATES if c and os.path.exists(c)), None) or next(
        (c for c in CHROME_CANDIDATES if c), None)
    if not chrome_bin:
        raise RuntimeError("no Chrome/Chromium binary found")
    profile_dir = tempfile.mkdtemp(prefix="iam-au-identity-audit-")
    proc = subprocess.Popen(
        [chrome_bin, "--headless=new", "--disable-gpu", "--no-sandbox",
         "--disable-dev-shm-usage", "--remote-debugging-port=%d" % debug_port,
         "--remote-allow-origins=*", "--user-data-dir=%s" % profile_dir, "about:blank"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
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


def set_width(c, width, height=900, scale=1):
    c.send("Emulation.setDeviceMetricsOverride",
           {"width": width, "height": height, "deviceScaleFactor": scale, "mobile": False})
    time.sleep(0.3)


def wait_for(c, expr, timeout=8.0, label=""):
    """Poll a truthy JS expression. The users table, the roster listbox and
    the Edit User page all render asynchronously."""
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            if js(c, expr):
                return True
        except Exception:
            pass
        time.sleep(0.1)
    raise RuntimeError("timed out waiting for %s" % (label or expr))


# ── navigation ────────────────────────────────────────────────────────
def goto_users(c, external=False):
    js(c, """
    (function(){
      var back=document.getElementById('auBack');
      if (back && document.getElementById('addUsersPage').style.display !== 'none') back.click();
    })()
    """)
    time.sleep(0.2)
    wait_for(c, "!!document.querySelector('#usersPanel')", label="users panel")
    js(c, """
    (function(){
      var b=Array.from(document.querySelectorAll('#usersPanel button, #usersPanel [role=tab]'))
        .find(function(x){ return x.textContent.trim()===%s; });
      if (b) b.click();
    })()
    """ % json.dumps("External" if external else "Internal"))
    time.sleep(0.3)


def open_edit_for(c, record, external=False):
    """Isolate one user with the table search, then open Edit User."""
    goto_users(c, external)
    js(c, """
    (function(){
      var i=document.getElementById('searchInput');
      i.value=%s; i.dispatchEvent(new Event('input',{bubbles:true}));
    })()
    """ % json.dumps(record["email"]))
    wait_for(c, """
    (function(){
      var rows=document.querySelectorAll('#tbody tr');
      if (rows.length!==1) return false;
      var a=rows[0].querySelector('a.name-link');
      return !!a && a.textContent.trim().length>0;
    })()
    """, label="single row for %s" % record["email"])
    js(c, "document.querySelector('#tbody a.name-link').click();")
    wait_for(c, "document.getElementById('addUsersPage').className.indexOf('is-edit-mode')!==-1",
             label="Edit User page")
    wait_for(c, "!!(document.getElementById('auIdName').textContent||'').trim()", label="identity")
    time.sleep(0.15)


def open_add_for(c, name):
    """Users list -> Add User modal -> search -> select -> Next."""
    goto_users(c, False)
    js(c, """
    (function(){
      var b=document.querySelectorAll('#usersPanel .btn-ghost');
      for (var i=0;i<b.length;i++){ if(b[i].textContent.indexOf('Add User')!==-1){ b[i].click(); return; } }
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
    wait_for(c, "document.getElementById('auAddUserNext').disabled===false", label="Next enabled")
    js(c, "document.getElementById('auAddUserNext').click();")
    wait_for(c, "document.getElementById('auEditRow').hidden===false", label="identity row")
    time.sleep(0.15)


# ── one round-trip geometry probe ─────────────────────────────────────
PROBE = r"""
(function(){
  function R(el){ if(!el) return null; var r=el.getBoundingClientRect();
    return {left:r.left, right:r.right, top:r.top, bottom:r.bottom, w:r.width, h:r.height}; }
  function Q(sel){ return R(document.querySelector(sel)); }
  var name=document.getElementById('auIdName');
  var email=document.getElementById('auIdEmail');
  var status=document.getElementById('auIdStatus');
  var avatar=document.getElementById('auIdAvatar');
  var body=document.querySelector('#auBasicCard .au-section-body');
  var cs=getComputedStyle(body);
  var gap=parseFloat(cs.columnGap)||0;
  var idRow=Q('#auEditRow');
  var pref=Q('.au-field-preferred'), region=Q('.au-field-region');
  var team=Q('.au-field-team'), tz=Q('.au-field-timezone');
  var nameR=R(name), emailR=R(email), statusR=R(status), avR=R(avatar);
  var card=Q('#auBasicCard');
  /* Two boxes only "overlap" if they share a horizontal band; a field on
     the row below is allowed to start left of where the name ends. */
  function band(a,b){ return !!(a&&b) && a.top < b.bottom-0.5 && b.top < a.bottom-0.5; }
  var svg=avatar?avatar.querySelector('svg.au-id-avatar-svg'):null;
  var img=avatar?avatar.querySelector('img.au-id-avatar-img'):null;
  var chip=avatar?avatar.querySelector('.au-id-avatar-initials'):null;
  /* Each of the placeholder's two circles is one subpath whose outer
     contour needs four quarter-arcs; a missing arc is what `Z` used to
     close with a straight chord. */
  var headArcs=null, ringArcs=null;
  if (svg) {
    var ps=svg.querySelectorAll('path');
    for (var i=0;i<ps.length;i++){
      var d=ps[i].getAttribute('d')||'';
      if (d.indexOf('M36.0001 36.9477')===0)
        headArcs=(d.split('M').filter(function(x){return x.length;})[1]||'').split('C').length-1;
      if (d.indexOf('M36 69.1579')===0)
        ringArcs=(d.split('M').filter(function(x){return x.length;})[1]||'').split('C').length-1;
    }
  }
  var contentRight=Math.max(nameR?nameR.right:0, emailR?emailR.right:0,
                            statusR?statusR.right:0, avR?avR.right:0);
  var ro=document.querySelector('.au-field-team-readonly');
  var roVisible = !!(ro && getComputedStyle(ro).display!=='none');
  return {
    colCount: cs.gridTemplateColumns.split(' ').filter(function(x){return x.length;}).length,
    gap: gap,
    gapA: (pref&&idRow)? pref.left-idRow.right : null,
    gapB: (region&&pref)? region.left-pref.right : null,
    idRow: idRow, pref: pref, region: region, team: team, tz: tz, card: card,
    nameR: nameR, emailR: emailR, statusR: statusR, avR: avR,
    contentInsideColumn: contentRight <= (idRow?idRow.right:0)+1,
    trackGapOk: (pref&&idRow)? (idRow.right+gap <= pref.left+1) : null,
    trackGapOk2: (region&&pref)? (pref.right+gap <= region.left+1) : null,
    nameText: name?name.textContent:null,
    emailText: email?email.textContent:null,
    nameClipped: name? name.scrollWidth > name.clientWidth+1 : null,
    emailClipped: email? email.scrollWidth > email.clientWidth+1 : null,
    nameTip: name?name.getAttribute('data-tooltip'):null,
    emailTip: email?email.getAttribute('data-tooltip'):null,
    nameTab: name?name.getAttribute('tabindex'):null,
    emailTab: email?email.getAttribute('tabindex'):null,
    nameTitle: name?name.getAttribute('title'):null,
    nameWrap: name?getComputedStyle(name).whiteSpace:null,
    emailWrap: email?getComputedStyle(email).whiteSpace:null,
    nameEllipsis: name?getComputedStyle(name).textOverflow:null,
    emailEllipsis: email?getComputedStyle(email).textOverflow:null,
    nameFont: name?getComputedStyle(name).fontSize:null,
    emailFont: email?getComputedStyle(email).fontSize:null,
    nameLines: name? Math.round(nameR.h/parseFloat(getComputedStyle(name).lineHeight||'21')) : null,
    emailLines: email? Math.round(emailR.h/parseFloat(getComputedStyle(email).lineHeight||'21')) : null,
    nameOverlapsPref: band(nameR,pref) && nameR.right > pref.left+0.5,
    emailOverlapsTeam: band(emailR,team) && emailR.right > team.left+0.5,
    statusVisible: !!(statusR && statusR.w>0 && statusR.h>0),
    statusInsideIdentity: !!(statusR&&idRow) && statusR.right <= idRow.right+1,
    statusBesideName: !!(statusR&&nameR) &&
      Math.abs((statusR.top+statusR.h/2)-(nameR.top+nameR.h/2))<=2 && statusR.left>=nameR.right-1,
    nameEmailSeparate: !!(nameR&&emailR) && emailR.top >= nameR.bottom-1,
    emailInsideCard: !!(emailR&&card) && emailR.right <= card.right+1,
    prefRegionSameTop: !!(pref&&region) && Math.abs(pref.top-region.top)<0.6,
    teamTzSameTop: !!(team&&tz) && Math.abs(team.top-tz.top)<0.6,
    prefRegionSameW: !!(pref&&region) && Math.abs(pref.w-region.w)<0.6,
    teamTzSameW: !!(team&&tz) && Math.abs(team.w-tz.w)<0.6,
    identityOwnRow: !!(pref&&idRow) && pref.top >= idRow.bottom-1,
    avatarKind: img?'photo':(chip?'initials':(svg?'placeholder':'empty')),
    avatarSquare: !!avR && Math.abs(avR.w-avR.h)<0.5,
    avatarW: avR?avR.w:null,
    avatarOverflow: avatar?getComputedStyle(avatar).overflow:null,
    avatarRadius: avatar?getComputedStyle(avatar).borderRadius:null,
    avatarBefore: avatar?getComputedStyle(avatar,'::before').content:null,
    avatarAfter: avatar?getComputedStyle(avatar,'::after').content:null,
    imgSrc: img?img.getAttribute('src'):null,
    imgLoaded: img?(img.complete && img.naturalWidth>0):null,
    imgFit: img?getComputedStyle(img).objectFit:null,
    imgAlt: img?img.getAttribute('alt'):null,
    chipText: chip?chip.textContent.trim():null,
    headArcs: headArcs, ringArcs: ringArcs,
    svgCentered: svg? (function(){var r=svg.getBoundingClientRect();
      return Math.abs((r.left+r.width/2)-(avR.left+avR.w/2))<0.6 &&
             Math.abs((r.top+r.height/2)-(avR.top+avR.h/2))<0.6;})() : null,
    svgSquare: svg? (function(){var r=svg.getBoundingClientRect();
      return Math.abs(r.width-r.height)<0.5 && r.width<=avR.w+0.5;})() : null,
    roVisible: roVisible,
    roH: roVisible? Math.round(ro.getBoundingClientRect().height) : null,
    roClipped: roVisible? ro.scrollWidth > ro.clientWidth+1 : null,
    roEllipsis: roVisible? getComputedStyle(ro).textOverflow : null,
    roBg: roVisible? getComputedStyle(ro).backgroundColor : null,
    tzCtlH: (function(){var e=document.getElementById('auTimezoneCombo-ctl');
      return e? Math.round(e.getBoundingClientRect().height) : null;})(),
    minWidths: {
      idRow: getComputedStyle(document.getElementById('auEditRow')).minWidth,
      pref: getComputedStyle(document.querySelector('.au-field-preferred')).minWidth,
      region: getComputedStyle(document.querySelector('.au-field-region')).minWidth,
      idMeta: getComputedStyle(document.querySelector('.au-id-meta')).minWidth
    },
    docOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    teamValue: (document.getElementById('auTeam')||{}).value,
    regionValue: (document.getElementById('auRegion')||{}).value,
    tzValue: (document.getElementById('auTimezone')||{}).value
  };
})()
"""


def probe(c):
    return js(c, PROBE)


def layout_faults(m, record, width, mode):
    """Every geometry rule the audit asserts, for one user at one width."""
    tag = "%s/%s @%d" % (mode, record.get("id"), width)
    out = []
    if not m["contentInsideColumn"]:
        out.append("%s identity content leaves its column" % tag)
    if m["nameOverlapsPref"]:
        out.append("%s name overlaps Preferred name" % tag)
    if m["emailOverlapsTeam"]:
        out.append("%s email overlaps Team" % tag)
    if m["colCount"] == 3:
        if not m["trackGapOk"] or not m["trackGapOk2"]:
            out.append("%s a column runs into the next one" % tag)
        if abs(m["gapA"] - m["gapB"]) > 1.0:
            out.append("%s unequal gaps %.1f/%.1f" % (tag, m["gapA"], m["gapB"]))
    if m["nameClipped"] and m["nameTip"] != m["nameText"]:
        out.append("%s truncated name lacks its full-value tooltip" % tag)
    if m["emailClipped"] and m["emailTip"] != m["emailText"]:
        out.append("%s truncated email lacks its full-value tooltip" % tag)
    if m["nameClipped"] and m["nameTab"] != "0":
        out.append("%s truncated name is not focusable" % tag)
    if not m["nameClipped"] and (m["nameTip"] or m["nameTab"]):
        out.append("%s untruncated name got a needless tooltip/tab stop" % tag)
    if not m["emailClipped"] and (m["emailTip"] or m["emailTab"]):
        out.append("%s untruncated email got a needless tooltip/tab stop" % tag)
    if m["nameText"] != record["name"]:
        out.append("%s shows %r, fixture says %r" % (tag, m["nameText"], record["name"]))
    if m["emailText"] != (record.get("email") or "").lower():
        out.append("%s email %r != fixture" % (tag, m["emailText"]))
    if "\u2026" in (m["nameText"] or "") or "\u2026" in (m["emailText"] or ""):
        out.append("%s an ellipsis was baked into the data" % tag)
    if m["nameWrap"] != "nowrap" or m["emailWrap"] != "nowrap":
        out.append("%s identity text can wrap" % tag)
    if m["nameEllipsis"] != "ellipsis" or m["emailEllipsis"] != "ellipsis":
        out.append("%s identity text lacks ellipsis overflow" % tag)
    if (m["nameLines"] or 1) > 1 or (m["emailLines"] or 1) > 1:
        out.append("%s identity text took a second line" % tag)
    if m["nameFont"] != "18px" or m["emailFont"] != "14px":
        out.append("%s identity font size changed (%s/%s)" % (tag, m["nameFont"], m["emailFont"]))
    if not m["nameEmailSeparate"]:
        out.append("%s name and email share a line" % tag)
    if not m["emailInsideCard"]:
        out.append("%s email spills outside the card" % tag)
    if not (m["statusVisible"] and m["statusInsideIdentity"] and m["statusBesideName"]):
        out.append("%s status icon misplaced" % tag)
    if not m["avatarSquare"] or abs(m["avatarW"] - 64) > 0.6:
        out.append("%s avatar is not a 64px square" % tag)
    if m["avatarBefore"] not in ("none", "normal") or m["avatarAfter"] not in ("none", "normal"):
        out.append("%s a pseudo-element covers the avatar" % tag)
    if m["avatarKind"] == "placeholder":
        if m["headArcs"] != 4 or m["ringArcs"] != 4:
            out.append("%s fallback circle incomplete (head=%s ring=%s)"
                       % (tag, m["headArcs"], m["ringArcs"]))
        if not m["svgCentered"] or not m["svgSquare"]:
            out.append("%s fallback SVG off-center or distorted" % tag)
        if m["avatarOverflow"] != "visible":
            out.append("%s fallback circle is clipped" % tag)
    elif m["avatarKind"] == "photo":
        if not m["imgLoaded"]:
            out.append("%s photo did not load (%s)" % (tag, m["imgSrc"]))
        if m["imgFit"] != "cover" or m["avatarOverflow"] != "hidden" or m["avatarRadius"] != "50%":
            out.append("%s photo lost its circular cover crop" % tag)
        if m["imgAlt"] != "":
            out.append("%s photo is not marked decorative" % tag)
    elif m["avatarKind"] == "empty":
        out.append("%s avatar rendered nothing" % tag)
    if m["colCount"] >= 2:
        if not m["prefRegionSameTop"] or not m["teamTzSameTop"]:
            out.append("%s paired fields do not share a top" % tag)
        if not m["prefRegionSameW"] or not m["teamTzSameW"]:
            out.append("%s form columns are unequal" % tag)
    if m["roVisible"]:
        if m["roH"] != m["tzCtlH"]:
            out.append("%s Company control is %spx against Timezone's %spx"
                       % (tag, m["roH"], m["tzCtlH"]))
        if m["roEllipsis"] != "ellipsis":
            out.append("%s Company display cannot truncate" % tag)
    for k, v in m["minWidths"].items():
        if v != "0px":
            out.append("%s %s min-width=%s" % (tag, k, v))
    if m["docOverflow"] > 0:
        out.append("%s horizontal page overflow" % tag)
    return out


def main():
    port = free_port()
    debug_port = free_port()
    server = start_static_server(port)
    chrome, _profile = launch_chrome(debug_port)
    base = "http://127.0.0.1:%d/v4.1/" % port
    c = None
    try:
        time.sleep(0.6)
        c = CDP(debug_port)
        c.send("Network.setCacheDisabled", {"cacheDisabled": True})
        # Without focus emulation a headless page reports no focused element,
        # which would make the keyboard-tooltip assertions vacuous.
        c.send("Emulation.setFocusEmulationEnabled", {"enabled": True})
        c.navigate(base, wait=2.0)
        set_width(c, 1440)

        internal = js(c, "window.DATA.map(function(u){return {id:u.id,name:u.name,email:u.email,avatar:u.avatar||null};})")
        external = js(c, "window.EXTERNAL_DATA_ARRAY.map(function(u){return {id:u.id,name:u.name,email:u.email,organization:u.organization};})")
        roster = js(c, "window.ROSTER_DATA.map(function(u){return {id:u.id,name:u.name,email:u.email,eligible:u.eligible};})")
        check("The Add User flow still reaches the whole dataset",
              len(internal) == 60 and len(external) == 60 and len(roster) == 13,
              "internal=%d external=%d roster=%d" % (len(internal), len(external), len(roster)))

        # ── 1. Every reachable record, at every width in the run ──────
        faults, kinds, trunc_names, trunc_emails = [], {}, set(), set()
        widths_seen = {}

        def walk(records, mode, opener):
            for rec in records:
                opener(rec)
                for w in DESKTOP_WIDTHS:
                    set_width(c, w)
                    m = probe(c)
                    faults.extend(layout_faults(m, rec, w, mode))
                    kinds[m["avatarKind"]] = kinds.get(m["avatarKind"], 0) + 1
                    if m["nameClipped"]:
                        trunc_names.add(rec["id"])
                    if m["emailClipped"]:
                        trunc_emails.add(rec["id"])
                    if m["colCount"] == 3:
                        widths_seen.setdefault(w, set()).add(round(m["idRow"]["w"], 1))

        walk(internal[::STRIDE], "internal", lambda r: open_edit_for(c, r, external=False))
        walk(external[::STRIDE], "external", lambda r: open_edit_for(c, r, external=True))
        walk([r for r in roster if r["eligible"]], "roster", lambda r: open_add_for(c, r["name"]))

        check("Every user walked renders its identity without a layout fault",
              not faults, "; ".join(faults[:4]) + (" (+%d more)" % (len(faults) - 4) if len(faults) > 4 else ""))
        check("Photo, initials and vector-fallback avatars were all exercised",
              kinds.get("photo", 0) > 0 and kinds.get("initials", 0) > 0 and kinds.get("placeholder", 0) > 0,
              json.dumps(kinds))
        check("The identity column keeps one width per breakpoint regardless of content",
              all(len(v) == 1 for v in widths_seen.values()),
              json.dumps({str(k): sorted(v) for k, v in widths_seen.items()}))

        # ── 2. Stress fixtures the shipped dataset has no record for ──
        js(c, """
        (function(){ var rows=%s;
          rows.forEach(function(r){
            if (!window.ROSTER_DATA.some(function(x){return x.id===r.id;})) window.ROSTER_DATA.push(r);
          });
        })()
        """ % json.dumps(STRESS_FIXTURES))
        check("Runtime stress fixtures joined the roster without touching the shipped data",
              js(c, "window.ROSTER_DATA.length") == 13 + len(STRESS_FIXTURES) and
              js(c, "window.DATA.length") == 60)

        stress_faults = []
        for fx in STRESS_FIXTURES:
            open_add_for(c, fx["name"])
            for w in DESKTOP_WIDTHS:
                set_width(c, w)
                stress_faults.extend(layout_faults(probe(c), fx, w, "stress"))
        check("Every stress fixture renders without a layout fault",
              not stress_faults, "; ".join(stress_faults[:4]))

        open_add_for(c, STRESS_FIXTURES[0]["name"])
        set_width(c, 1440)
        m = probe(c)
        check("The maximum-content fixture truncates both name and email",
              m["nameClipped"] is True and m["emailClipped"] is True)
        check("Its long Team value does not break the grid",
              m["teamValue"] == STRESS_FIXTURES[0]["team"] and m["prefRegionSameTop"] is True
              and m["docOverflow"] <= 0, repr(m["teamValue"]))
        open_add_for(c, "Broken Photo Fixture")
        set_width(c, 1440)
        m = probe(c)
        check("A broken photo URL falls back to a complete vector avatar",
              m["avatarKind"] == "placeholder" and m["headArcs"] == 4 and m["ringArcs"] == 4,
              "%s head=%s ring=%s" % (m["avatarKind"], m["headArcs"], m["ringArcs"]))

        # ── 3. External Company control shares the Timezone metrics ───
        ext_rec = external[0]
        open_edit_for(c, ext_rec, external=True)
        for w in DESKTOP_WIDTHS:
            set_width(c, w)
            m = probe(c)
            if not check("@%d: external Company control matches the Timezone control height" % w,
                         m["roVisible"] is True and m["roH"] == m["tzCtlH"] == 32,
                         "company=%s timezone=%s" % (m["roH"], m["tzCtlH"])):
                break
        set_width(c, 1440)
        m = probe(c)
        check("External Company and Timezone fields share a top and a height",
              m["teamTzSameTop"] is True and abs(m["team"]["h"] - m["tz"]["h"]) < 0.6,
              "%.1f vs %.1f" % (m["team"]["h"], m["tz"]["h"]))
        check("The Company display keeps the shared read-only fill",
              m["roBg"] == "rgba(30, 37, 40, 0.04)", str(m["roBg"]))
        long_org = js(c, """
        (function(){
          var ro=document.querySelector('.au-field-team-readonly');
          ro.textContent='A Very Long Holding Company Group International Partnerships Limited';
          return {clipped: ro.scrollWidth > ro.clientWidth+1,
                  inside: ro.getBoundingClientRect().right <=
                          document.querySelector('.au-field-team').getBoundingClientRect().right+1};
        })()
        """)
        check("A long company name truncates instead of spilling out of its field",
              long_org["clipped"] is True and long_org["inside"] is True, json.dumps(long_org))

        # ── 4. A late image failure must not clobber the current user ─
        first, second = internal[0], internal[1]
        open_edit_for(c, first, external=False)
        js(c, "window.__auPrevImg = document.querySelector('#auIdAvatar img.au-id-avatar-img');")
        check("The first user renders a photo to hold on to",
              js(c, "!!window.__auPrevImg") is True)
        open_edit_for(c, second, external=False)
        js(c, "window.__auPrevImg.dispatchEvent(new Event('error'));")
        time.sleep(0.25)
        after = js(c, """
        (function(){ var a=document.getElementById('auIdAvatar'); var i=a.querySelector('img');
          return {kind: i?'photo':(a.querySelector('svg')?'placeholder':'other'),
                  src: i?i.getAttribute('src'):null,
                  name: document.getElementById('auIdName').textContent}; })()
        """)
        check("A previous user's failed photo leaves the current avatar alone",
              after["kind"] == "photo" and after["src"] == second["avatar"]
              and after["name"] == second["name"], json.dumps(after))
        js(c, "document.querySelector('#auIdAvatar img.au-id-avatar-img').dispatchEvent(new Event('error'));")
        time.sleep(0.25)
        check("The mounted photo still falls back on its own failure",
              js(c, "!!document.querySelector('#auIdAvatar svg.au-id-avatar-svg')") is True)

        # ── 5. Switching users leaves nothing stale behind ────────────
        stale = []
        for rec in internal[:4] + external[:2]:
            is_ext = rec["id"].startswith("e")
            open_edit_for(c, rec, external=is_ext)
            m = probe(c)
            if m["nameText"] != rec["name"] or m["emailText"] != rec["email"].lower():
                stale.append("%s showed %r" % (rec["id"], m["nameText"]))
            want = "initials" if is_ext else "photo"
            if m["avatarKind"] != want:
                stale.append("%s avatar was %s" % (rec["id"], m["avatarKind"]))
            if not is_ext and rec["avatar"] and m["imgSrc"] != rec["avatar"]:
                stale.append("%s kept %s" % (rec["id"], m["imgSrc"]))
        check("Switching between users leaves no stale identity behind", not stale, "; ".join(stale))

        open_add_for(c, LONG_NAME)
        set_width(c, 1440)
        long_m = probe(c)
        open_add_for(c, SHORT_NAME)
        short_m = probe(c)
        check("Tooltip state does not leak from a truncated user to a short one",
              long_m["nameTip"] == LONG_NAME and short_m["nameTip"] is None
              and short_m["nameTab"] is None,
              "%r -> %r" % (long_m["nameTip"], short_m["nameTip"]))

        # ── 6. Tooltips only while truncated, on hover and on focus ───
        open_add_for(c, LONG_NAME)
        set_width(c, 1440)
        tip = js(c, """
        (function(){
          var n=document.getElementById('auIdName');
          n.dispatchEvent(new MouseEvent('mouseover',{bubbles:true}));
          var t=document.getElementById('statusTooltip');
          var tr=t.getBoundingClientRect();
          return {visible:t.classList.contains('is-visible'), text:t.textContent,
                  role:t.getAttribute('role'), cls:t.className,
                  z:getComputedStyle(t).zIndex,
                  clipped: t.scrollWidth > t.clientWidth+1,
                  inViewport: tr.left>=-1 && tr.right<=window.innerWidth+1 &&
                              tr.top>=-1 && tr.bottom<=window.innerHeight+1};
        })()
        """)
        check("Hovering a truncated name shows the full name in the shared tooltip",
              tip["visible"] is True and tip["text"] == LONG_NAME
              and "edl-status-tooltip" in (tip["cls"] or ""), json.dumps(tip))
        check("The tooltip is neither truncated nor clipped out of the viewport",
              tip["clipped"] is False and tip["inViewport"] is True)
        check("The tooltip paints above the form fields", tip["z"] not in ("auto", "0"), tip["z"])
        js(c, "document.getElementById('auIdName').dispatchEvent(new MouseEvent('mouseout',{bubbles:true}));")
        time.sleep(0.15)
        focus_tip = js(c, """
        (function(){
          var e=document.getElementById('auIdEmail'); e.focus();
          var t=document.getElementById('statusTooltip');
          return {focused: document.activeElement===e, visible:t.classList.contains('is-visible'),
                  text:t.textContent};
        })()
        """)
        check("Keyboard focus on a truncated email shows the full email",
              focus_tip["focused"] is True and focus_tip["visible"] is True
              and focus_tip["text"] == LONG_EMAIL, json.dumps(focus_tip))
        js(c, "document.activeElement.blur();")
        check("No native title duplicates the shared tooltip", probe(c)["nameTitle"] in (None, ""))

        # ── 7. Reflow, and the tab order the grid paints ──────────────
        for w, want_cols, own_row in ((1024, 3, False), (1440, 3, False), (2560, 3, False),
                                      (899, 2, True), (700, 2, True), (520, 1, True)):
            set_width(c, w)
            m = probe(c)
            check("@%d: %d-column layout with no overflow" % (w, want_cols),
                  m["colCount"] == want_cols and m["docOverflow"] <= 0
                  and (m["identityOwnRow"] is True if own_row else True)
                  and not layout_faults(m, {"id": "r008", "name": LONG_NAME, "email": LONG_EMAIL}, w, "reflow"),
                  "cols=%d ownRow=%s overflow=%d" % (m["colCount"], m["identityOwnRow"], m["docOverflow"]))
        set_width(c, 1440)

        order = js(c, """
        (function(){
          var ids=['auPreferredName','auRegionCombo-ctl','auTeamCombo-ctl','auTimezoneCombo-ctl'];
          var all=Array.from(document.querySelectorAll('#auBasicCard input, #auBasicCard [tabindex="0"]'))
            .filter(function(e){ return e.getClientRects().length>0; });
          var seq=ids.map(function(id){ return all.findIndex(function(e){ return e.id===id; }); });
          var boxes=ids.map(function(id){ var e=document.getElementById(id);
            var r=e.getBoundingClientRect(); return {top:Math.round(r.top), left:Math.round(r.left)}; });
          return {seq:seq, boxes:boxes};
        })()
        """)
        check("Tab order runs Preferred name, Region, Team, Timezone",
              order["seq"] == sorted(order["seq"]) and -1 not in order["seq"], json.dumps(order["seq"]))
        b = order["boxes"]
        check("...which is the row-major order the grid paints",
              b[0]["top"] == b[1]["top"] and b[2]["top"] == b[3]["top"]
              and b[0]["left"] < b[1]["left"] and b[2]["left"] < b[3]["left"]
              and b[2]["top"] > b[0]["top"], json.dumps(b))

        # ── 8. Paired fields stay level when a label wraps ────────────
        for size in ("20px", "24px"):
            js(c, "document.documentElement.style.fontSize=%s;" % json.dumps(size))
            time.sleep(0.35)
            m = probe(c)
            check("Root font-size %s keeps paired fields on a shared top" % size,
                  m["prefRegionSameTop"] is True and m["teamTzSameTop"] is True)
            check("Root font-size %s keeps identity content inside its column" % size,
                  m["contentInsideColumn"] is True and m["nameOverlapsPref"] is False
                  and m["emailOverlapsTeam"] is False and m["docOverflow"] <= 0)
        js(c, "document.documentElement.style.fontSize='';")

        # 200% browser zoom halves the CSS viewport and doubles the pixel
        # ratio; CSS `zoom` would rescale boxes but leave media queries
        # reading the full width, which is not what a zoomed browser does.
        set_width(c, 720, 450, scale=2)
        m = probe(c)
        check("200% browser zoom introduces no overlap or overflow",
              m["contentInsideColumn"] is True and m["nameOverlapsPref"] is False
              and m["emailOverlapsTeam"] is False and m["docOverflow"] <= 0
              and m["avatarSquare"] is True)
        set_width(c, 1440, 900, scale=1)

        # ── 9. Accordion keeps everything it should ───────────────────
        js(c, """
        (function(){var n=document.getElementById('auIdName');
          n.dispatchEvent(new MouseEvent('mouseover',{bubbles:true}));})()
        """)
        time.sleep(0.2)
        js(c, "document.querySelector('#auBasicCard .cr-section-header').click();")
        time.sleep(0.35)
        collapsed = js(c, """
        (function(){
          var card=document.getElementById('auBasicCard');
          var body=card.querySelector('.au-section-body');
          var t=document.getElementById('statusTooltip');
          return {bodyH: body.offsetHeight,
                  focusable: Array.from(card.querySelectorAll('input,button,[tabindex]'))
                    .filter(function(e){ return e.getClientRects().length>0; }).length,
                  tipVisible: t.classList.contains('is-visible'),
                  expanded: card.querySelector('.cr-section-header').getAttribute('aria-expanded'),
                  chevron: !!card.querySelector('.cr-section-chev')};
        })()
        """)
        check("Collapsing hides the body, closes the tooltip and clears the tab order",
              collapsed["bodyH"] == 0 and collapsed["tipVisible"] is False
              and collapsed["focusable"] <= 1 and collapsed["expanded"] == "false"
              and collapsed["chevron"] is True, json.dumps(collapsed))
        set_width(c, 1280)
        js(c, "document.querySelector('#auBasicCard .cr-section-header').click();")
        time.sleep(0.4)
        m = probe(c)
        check("Reopening restores the user, the values and the recalculated tooltip",
              m["nameText"] == LONG_NAME and m["nameTip"] == LONG_NAME and m["nameTab"] == "0"
              and bool(m["regionValue"]) and bool(m["tzValue"])
              and m["avatarKind"] == "placeholder",
              "%r tip=%r region=%r" % (m["nameText"], m["nameTip"], m["regionValue"]))

        # ── 10. Records that cannot be added still behave ─────────────
        set_width(c, 1440)
        goto_users(c, False)
        js(c, """
        (function(){var b=document.querySelectorAll('#usersPanel .btn-ghost');
          for (var i=0;i<b.length;i++){ if(b[i].textContent.indexOf('Add User')!==-1){ b[i].click(); return; } }})()
        """)
        wait_for(c, "!!document.getElementById('auAddUserSearchInput')", label="Add User modal")

        def option_state(query, match):
            js(c, """
            (function(){var i=document.getElementById('auAddUserSearchInput');
              i.value=%s; i.dispatchEvent(new Event('input',{bubbles:true}));})()
            """ % json.dumps(query))
            wait_for(c, """
            !!Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option'))
              .find(function(x){ return x.textContent.indexOf(%s)!==-1; })
            """ % json.dumps(match), label="option %r" % match)
            return js(c, """
            (function(){
              var o=Array.from(document.querySelectorAll('#auAddUserListbox .au-adduser-option'))
                .find(function(x){ return x.textContent.indexOf(%s)!==-1; });
              var n=o.querySelector('.au-adduser-option-name');
              var e=o.querySelector('.au-adduser-option-email');
              var badge=o.querySelector('.au-adduser-option-badge');
              var or_=o.getBoundingClientRect();
              o.click();
              return {ariaDisabled:o.getAttribute('aria-disabled'),
                      badge: badge?badge.textContent.trim():null,
                      badgeInside: badge? badge.getBoundingClientRect().right <= or_.right+1 : null,
                      nameEllipsis: n?getComputedStyle(n).textOverflow:null,
                      emailEllipsis: e?getComputedStyle(e).textOverflow:null,
                      nameInside: n? n.getBoundingClientRect().right <= or_.right+1 : null,
                      nextDisabled: document.getElementById('auAddUserNext').disabled};
            })()
            """ % json.dumps(match))

        existing = option_state("Homer Simpson", "Homer Simpson")
        check("A user who already has access cannot be carried into Add User",
              existing["nextDisabled"] is True and existing["badge"] == "Already has access",
              json.dumps(existing))
        inactive = option_state("Nathaniel Okonkwo-Whitmore", "Nathaniel")
        check("An ineligible roster record stays disabled with its reason",
              inactive["ariaDisabled"] == "true" and inactive["nextDisabled"] is True
              and inactive["badge"] == "Inactive employee", json.dumps(inactive))
        check("Long identity text truncates inside the search results too",
              inactive["nameEllipsis"] == "ellipsis" and inactive["emailEllipsis"] == "ellipsis"
              and inactive["nameInside"] is True and inactive["badgeInside"] is True)

        console_errors = js(c, "window.__iamConsoleErrors || []") or []
        check("No uncaught console exceptions during the walk", not console_errors,
              json.dumps(console_errors))

    finally:
        try:
            if c:
                c.close()
        except Exception:
            pass
        chrome.terminate()
        server.terminate()

    print("\n" + "=" * 72)
    failed = [r for r in results if r[0] == "FAIL"]
    print("%d checks, %d failed%s" % (len(results), len(failed),
                                      "" if FULL else "  (set IAM_FULL_MATRIX=1 for the full 131-user sweep)"))
    for _, name, detail in failed:
        print("  FAIL %s  %s" % (name, detail))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
