#!/usr/bin/env python3
"""V4.1 first-page multi-role distribution and dependent-flow regression.

The V4.1 Users list intentionally demonstrates the existing primary-role
plus ADS ``+N role(s)`` pattern while every dependent flow continues to
consume the complete, ordered ``user.roles`` array.
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
SCREENSHOT = os.path.join(REPO_ROOT, "qa_screens", "v41_users_mixed_roles_1440.png")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

EXPECTED = {
    "Homer Simpson": ["ACP Vendor Planner", "Planning Agent User", "ACP Viewer"],
    "Marge Simpson": ["ACP Planning Specialist", "Sales Agent User"],
    "Bart Simpson": ["ACP Vendor Planning Specialist"],
    "Ned Flanders": ["ACP Planning Manager", "ACP Planning Specialist", "ACP Viewer"],
    "Lisa Simpson": ["ACP Viewer", "Planning Agent User"],
    "Montgomery Burns": ["Sales Agent User"],
    "Milhouse Van Houten": ["Planning Agent User", "ACP Planner"],
    "Maggie Simpson": ["ACP Planner"],
    "Waylon Smithers": ["ACP Vendor Planner", "Sales Agent User"],
    "Nelson Muntz": ["ACP Vendor Planner"],
}

results = []


def check(name, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    results.append((status, name, detail))
    print("[%s] %s%s" % (status, name, ("  (%s)" % detail) if detail and not condition else ""))


def free_port():
    sock = socket.socket()
    sock.bind(("127.0.0.1", 0))
    port = sock.getsockname()[1]
    sock.close()
    return port


def wait_for(predicate, timeout=8.0):
    deadline = time.time() + timeout
    value = None
    while time.time() < deadline:
        value = predicate()
        if value:
            return value
        time.sleep(0.1)
    return value


def main():
    port = free_port()
    debug_port = free_port()
    server = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(port)],
        cwd=PUBLIC_DIR,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    profile = tempfile.mkdtemp(prefix="iam-v41-multi-role-")
    chrome = subprocess.Popen(
        [
            CHROME,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--remote-debugging-port=%d" % debug_port,
            "--remote-allow-origins=*",
            "--user-data-dir=%s" % profile,
            "about:blank",
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    def cleanup():
        try:
            chrome.terminate()
        except Exception:
            pass
        subprocess.run(
            ["pkill", "-9", "-f", profile],
            check=False,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        server.terminate()
        shutil.rmtree(profile, ignore_errors=True)

    atexit.register(cleanup)

    wait_for(lambda: _port_open(debug_port))
    c = CDP(debug_port)
    c.send(
        "Emulation.setDeviceMetricsOverride",
        {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False},
    )
    c.navigate("http://127.0.0.1:%d/v4.1/" % port, wait=1.5)
    wait_for(lambda: c.eval("typeof DATA !== 'undefined' && DATA.length === 60"))

    actual = c.eval(
        "DATA.slice(0,10).reduce(function(o,u){o[u.name]=u.roles.slice();return o;},{})"
    )
    check("first ten role assignments match the approved mixed fixture", actual == EXPECTED, repr(actual))
    counts = list(map(len, actual.values()))
    check("first page has exactly four single-role users", counts.count(1) == 4, repr(counts))
    check("first page has exactly four two-role users", counts.count(2) == 4, repr(counts))
    check("first page has exactly two three-role users", counts.count(3) == 2, repr(counts))

    integrity = c.eval(
        """(function(){
          var names=CANONICAL_ROLE_DEFINITIONS.map(function(r){return r.name;});
          return DATA.every(function(u){
            return Array.isArray(u.roles) && u.roles.length > 0 &&
              u.roles.every(function(r){return !!r && names.indexOf(r)!==-1;}) &&
              new Set(u.roles).size === u.roles.length;
          });
        })()"""
    )
    check("every internal assignment is a non-empty, de-duplicated canonical role array", integrity is True)
    check(
        "canonical catalog remains Tatiana's eight approved names",
        c.eval("CANONICAL_ROLE_DEFINITIONS.map(function(r){return r.name;})")
        == [
            "ACP Planner",
            "ACP Vendor Planner",
            "ACP Planning Specialist",
            "ACP Vendor Planning Specialist",
            "ACP Planning Manager",
            "ACP Viewer",
            "Sales Agent User",
            "Planning Agent User",
        ],
    )

    for width in [1024, 1280, 1440, 1920, 2560]:
        c.send(
            "Emulation.setDeviceMetricsOverride",
            {"width": width, "height": 900, "deviceScaleFactor": 1, "mobile": False},
        )
        time.sleep(0.3)
        c.eval("fitUsersRoleCells()")
        badge_texts = c.eval(
            "Array.from(document.querySelectorAll('#tbody .role-extra')).map(function(e){return e.textContent.trim();})"
        )
        check("%dpx: four +1 role badges" % width, badge_texts.count("+1 role") == 4, repr(badge_texts))
        check("%dpx: two +2 roles badges" % width, badge_texts.count("+2 roles") == 2, repr(badge_texts))
        check(
            "%dpx: single-role rows have no count badge" % width,
            c.eval(
                "Array.from(document.querySelectorAll('#tbody tr')).filter(function(tr){return tr.querySelector('.role-extra')===null;}).length"
            )
            == 4,
        )
        check(
            "%dpx: primary role and badge never overlap" % width,
            c.eval(
                """Array.from(document.querySelectorAll('#tbody .role-extra')).every(function(b){
                  var p=b.parentElement.querySelector('.role-primary'), pr=p.getBoundingClientRect(), br=b.getBoundingClientRect();
                  return pr.right <= br.left + 0.5 && Math.abs((pr.top+pr.bottom)-(br.top+br.bottom)) <= 2;
                })"""
            )
            is True,
        )
        heights = c.eval(
            "Array.from(document.querySelectorAll('#tbody tr')).map(function(r){return r.getBoundingClientRect().height;})"
        )
        check("%dpx: all first-page rows retain one stable height" % width, max(heights) - min(heights) < 0.5, repr(heights))

    # Force the same condition a manually narrowed Role column creates:
    # the primary truncates, the badge stays visible, and the shared ADS
    # tooltip reveals the complete primary label.
    primary_tip = c.eval(
        """(function(){
          var p=document.querySelector('#tbody .role-primary');
          p.style.maxWidth='40px';
          p.dispatchEvent(new MouseEvent('mouseover',{bubbles:true}));
          var tip=document.querySelector('.edl-tooltip');
          var result={truncated:p.scrollWidth>p.clientWidth,
                      text:tip.textContent.trim(),
                      visible:tip.classList.contains('visible')};
          p.style.maxWidth='';
          p.dispatchEvent(new MouseEvent('mouseout',{bubbles:true}));
          return result;
        })()"""
    )
    check("a truncated primary role exposes its full ADS tooltip", primary_tip == {
        "truncated": True,
        "text": EXPECTED["Homer Simpson"][0],
        "visible": True,
    }, repr(primary_tip))

    # Filtering and free-text search must match a supporting role.
    filter_names = c.eval(
        """(function(){filters.role='Sales Agent User';searchTerm='';return getFilteredData().map(function(u){return u.name;});})()"""
    )
    check("role filter matches Marge through her secondary role", "Marge Simpson" in filter_names)
    check("role filter matches Waylon through his secondary role", "Waylon Smithers" in filter_names)
    search_names = c.eval(
        """(function(){filters.role='';searchTerm='Planning Agent User';return getFilteredData().map(function(u){return u.name;});})()"""
    )
    check("search matches Homer through his secondary role", "Homer Simpson" in search_names)
    check("search matches Lisa through her secondary role", "Lisa Simpson" in search_names)

    # Sorting uses primary role and never mutates role-array order.
    sort_result = c.eval(
        """(function(){
          filters.role='';searchTerm='';var before={};
          DATA.forEach(function(u){before[u.id]=u.roles.join('|');});
          sortKey=null;sortDir=null;applySort('role');
          var keys=DATA.map(function(u){return u.roles[0].toLowerCase();});
          return {ordered:keys.every(function(k,i){return i===0||keys[i-1]<=k;}),
                  unchanged:DATA.every(function(u){return before[u.id]===u.roles.join('|');})};
        })()"""
    )
    check("Role sort uses the primary role as its visible key", sort_result["ordered"] is True)
    check("Role sort preserves every role array's order", sort_result["unchanged"] is True)

    # Export's Role(s) column contains the complete ordered set.
    exported = c.eval(
        """(function(){
          exportSnapshotIds=['u001'];exportSnapshotIsExternal=false;renderSimExcelGrid();
          return document.querySelector('#simExcelGrid tbody tr:nth-child(2) td:nth-of-type(3)').textContent.trim();
        })()"""
    )
    check("export includes all Homer roles in stable order", exported == ", ".join(EXPECTED["Homer Simpson"]), exported)

    # Edit User is seeded from the same record, including role order.
    c.eval("location.reload()")
    time.sleep(1.2)
    for name in [n for n, roles in EXPECTED.items() if len(roles) > 1]:
        roles = EXPECTED[name]
        c.eval(
            """(function(){var u=DATA.find(function(x){return x.name===%s;});
              document.querySelector('a.name-link[data-user-id="'+u.id+'"]').click();})()"""
            % json.dumps(name)
        )
        wait_for(lambda: c.eval("getComputedStyle(document.querySelector('#addUsersPage')).display !== 'none'"))
        checked = c.eval(
            "Array.from(document.querySelectorAll('#auRoleMultiMenu input:checked')).map(function(e){return e.getAttribute('aria-label');})"
        )
        trigger_text = c.eval("document.querySelector('#auRoleMultiValue').textContent.trim()")
        check(
            "Edit User contains every role for %s" % name,
            sorted(checked) == sorted(roles),
            repr(checked),
        )
        check(
            "Edit User shows %s's primary role first" % name,
            trigger_text.startswith(roles[0]),
            trigger_text,
        )
        before = c.eval("DATA.find(function(u){return u.name===%s;}).roles.join('|')" % json.dumps(name))
        c.eval("document.querySelector('#auSave').click()")
        after = c.eval("DATA.find(function(u){return u.name===%s;}).roles.join('|')" % json.dumps(name))
        check("saving %s without changes does not drop roles" % name, after == before, after)
        c.eval("document.querySelector('#auCancel').click()")
        time.sleep(0.2)

    # Redline must measure the actual primary text and badge nodes.
    c.send(
        "Emulation.setDeviceMetricsOverride",
        {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False},
    )
    wait_for(lambda: c.eval("!!(window.IamRedlineMode && window.IamRedlineMode.enable)"))
    c.eval("window.IamRedlineMode.enable()")
    time.sleep(0.5)
    redline_ok = c.eval(
        """(function(){
          var host=document.querySelector('.redline__live-app');
          var p=document.querySelector('#tbody .role-primary');
          var b=document.querySelector('#tbody .role-extra');
          return !!host&&host.contains(p)&&host.contains(b)&&p.getBoundingClientRect().width>0&&b.getBoundingClientRect().width>0;
        })()"""
    )
    check("Redline Current measures the real primary role and ADS count badge", redline_ok is True)
    c.eval("window.IamRedlineMode.disable()")
    time.sleep(0.3)

    os.makedirs(os.path.dirname(SCREENSHOT), exist_ok=True)
    c.screenshot(SCREENSHOT)
    check("captured first-page mixed-role screenshot", os.path.exists(SCREENSHOT), SCREENSHOT)

    c.close()
    cleanup()

    passed = sum(1 for status, _, _ in results if status == "PASS")
    failed = len(results) - passed
    print("\n%d passed, %d failed (of %d)" % (passed, failed, len(results)))
    print("Screenshot: %s" % SCREENSHOT)
    return 1 if failed else 0


def _port_open(port):
    try:
        with socket.create_connection(("127.0.0.1", port), timeout=0.2):
            return True
    except OSError:
        return False


if __name__ == "__main__":
    sys.exit(main())
