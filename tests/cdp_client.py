"""Minimal Chrome DevTools Protocol client used by the routing test suite.

This project has no bundler/build step and no JS test runner (see
`.gitlab-ci.yml` — it's plain static HTML/CSS/JS published to GitLab
Pages), so there's nothing for a Jest/Playwright-style harness to hook
into via source imports. Driving a real headless Chrome over CDP against
the statically-served `public/` folder is the same approach used
throughout this project's manual QA passes; this module just makes that
approach reusable and committed to the repo instead of living in a /tmp
scratch file.

Requires the `websocket-client` package (see `tests/requirements.txt`)
and a local Chrome/Chromium binary launched with `--remote-debugging-port`
(see `launch_chrome` in `test_version_routing.py`).
"""

import base64
import json
import time
import urllib.request


def get_ws_url(port):
    r = json.loads(urllib.request.urlopen("http://127.0.0.1:%d/json" % port).read())
    for t in r:
        if t.get("type") == "page":
            return t["webSocketDebuggerUrl"], t["id"]
    raise RuntimeError("no page target on port %d" % port)


class CDP:
    def __init__(self, port):
        import websocket
        self.port = port
        self.ws_url, self.target_id = get_ws_url(port)
        # A generous timeout (rather than the default 30s) so a CDP round
        # trip that's briefly delayed by a busy dev machine (many other
        # apps contending for CPU) doesn't spuriously abort an otherwise
        # healthy, still-running Chrome — a long test suite issuing
        # hundreds of commands is far more exposed to a single slow tick
        # than a short one-off script would be.
        self.ws = websocket.create_connection(self.ws_url, timeout=90)
        self.msg_id = 0

    def send(self, method, params=None, retries=5):
        import websocket
        self.msg_id += 1
        mid = self.msg_id
        payload = json.dumps({"id": mid, "method": method, "params": params or {}})
        for attempt in range(retries + 1):
            try:
                self.ws.send(payload)
                while True:
                    resp = json.loads(self.ws.recv())
                    if resp.get("id") == mid:
                        return resp
                    # ignore unrelated events (Network.*, Page.*, etc.)
            except (websocket.WebSocketTimeoutException, websocket.WebSocketConnectionClosedException, ConnectionError, OSError):
                if attempt >= retries:
                    raise
                # Reconnect to the same target and retry — a dropped/timed-out
                # socket doesn't necessarily mean Chrome itself died, just
                # that this one round trip didn't land in time (e.g. a very
                # busy dev machine with many other apps contending for CPU).
                # Back off a bit more on each attempt to give it room to
                # recover instead of hammering a already-overloaded machine.
                time.sleep(0.5 * (attempt + 1))
                # The reconnect is itself a network round trip that can time
                # out, and an unguarded one here would abort the whole run on
                # the first slow handshake — which is what made the longest
                # suites (redline canvas architecture) fail at a different
                # random check on every run. Re-resolve the debugger URL too:
                # after hundreds of navigations Chrome may have swapped the
                # page target, leaving the cached URL pointing at a target
                # that will never complete a handshake.
                try:
                    self.ws_url, self.target_id = get_ws_url(self.port)
                    self.ws = websocket.create_connection(self.ws_url, timeout=90)
                except Exception:
                    if attempt >= retries - 1:
                        raise
                    continue

    def navigate(self, url, wait=1.2):
        self.send("Page.enable")
        self.send("Page.navigate", {"url": url})
        time.sleep(wait)

    def eval(self, expr, await_promise=False):
        r = self.send("Runtime.evaluate", {
            "expression": expr,
            "returnByValue": True,
            "awaitPromise": await_promise,
        })
        res = r.get("result", {})
        if "exceptionDetails" in res:
            raise RuntimeError("JS error evaluating %r: %s" % (expr, res["exceptionDetails"]))
        if "result" in res and "value" in res["result"]:
            return res["result"]["value"]
        return None

    def key(self, key, code=None):
        code = code or key
        self.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": key, "code": code})
        self.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": key, "code": code})

    def screenshot(self, path):
        r = self.send("Page.captureScreenshot", {"format": "png"})
        with open(path, "wb") as f:
            f.write(base64.b64decode(r["result"]["data"]))
        return path

    def close(self):
        try:
            self.ws.close()
        except Exception:
            pass
