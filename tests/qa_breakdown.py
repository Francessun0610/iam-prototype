#!/usr/bin/env python3
"""Scratch QA helper for the View access breakdown refinement task.
Not part of the automated suite -- ad hoc screenshot/measurement tool.
"""
import os
import sys
import json

sys.path.insert(0, os.path.dirname(__file__))
from cdp_client import CDP

PORT = 8911
DEBUG_PORT = 9333
BASE = "http://127.0.0.1:%d" % PORT
SHOT_DIR = "/tmp/breakdown_qa"
os.makedirs(SHOT_DIR, exist_ok=True)


def js(c, expr):
    return c.eval(expr)


def open_edit_user(c, name="Rachel Morales"):
    c.navigate(BASE + "/v4/", wait=1.2)
    js(c, "document.querySelector('.tab-btn') && Array.from(document.querySelectorAll('.tab-btn')).find(b=>b.textContent.trim()==='Users').click();")
    c.eval("void 0")
    import time; time.sleep(0.6)
    # type into search box to find the user by name
    js(c, """
    (function(){
      var inp = document.querySelector('#usersPanel .search input, #usersPanel input[type=search], #usersPanel input');
      if (inp) {
        var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(inp, %r);
        inp.dispatchEvent(new Event('input', {bubbles:true}));
      }
    })()
    """ % name)
    import time; time.sleep(0.6)
    found = js(c, """
    (function(){
      var links = Array.from(document.querySelectorAll('#usersTable a.name-link, #usersTable .name-link'));
      var l = links.find(function(a){return a.textContent.indexOf('%s') !== -1;});
      if (l) { l.click(); return true; }
      return false;
    })()
    """ % name)
    import time; time.sleep(0.8)
    return found


if __name__ == "__main__":
    c = CDP(DEBUG_PORT)
    try:
        cmd = sys.argv[1] if len(sys.argv) > 1 else "baseline"
        if cmd == "baseline":
            ok = open_edit_user(c)
            print("opened edit user:", ok)
            print("url:", js(c, "location.href"))
            c.screenshot(os.path.join(SHOT_DIR, "01_edit_user_page.png"))
            # scroll to access card
            js(c, "document.getElementById('auEffWrap') && document.getElementById('auEffWrap').scrollIntoView({block:'center'})")
            import time; time.sleep(0.3)
            c.screenshot(os.path.join(SHOT_DIR, "02_access_table_area.png"))
            rect = js(c, """
            (function(){
              var b = document.getElementById('auEffViewBreakdown');
              var t = document.getElementById('auEffTable');
              var role = document.querySelector('.au-role-field');
              function r(el){ if(!el) return null; var x=el.getBoundingClientRect(); return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height}; }
              return JSON.stringify({btn:r(b), table:r(t), role:r(role)});
            })()
            """)
            print("rects:", rect)
        elif cmd == "open_modal":
            ok = open_edit_user(c)
            js(c, "document.getElementById('auEffViewBreakdown').click();")
            import time; time.sleep(0.4)
            c.screenshot(os.path.join(SHOT_DIR, "03_modal_open.png"))
            rect = js(c, """
            (function(){
              var d = document.querySelector('#auEffBreakdownBackdrop .cr-confirm-dialog, #auEffBreakdownBackdrop .au-eff-modal-dialog');
              function r(el){ if(!el) return null; var x=el.getBoundingClientRect(); return {left:x.left, right:x.right, top:x.top, bottom:x.bottom, width:x.width, height:x.height}; }
              return JSON.stringify(r(d));
            })()
            """)
            print("modal rect:", rect)
        elif cmd == "custom":
            expr = sys.argv[2]
            print(js(c, expr))
    finally:
        c.close()
