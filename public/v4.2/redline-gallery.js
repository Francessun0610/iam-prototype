/* ═══════════════════════════════════════════════════════════════════════
   IAM v4.1 — Redline overlay gallery registry
   ───────────────────────────────────────────────────────────────────────
   One registry describing every modal/dialog and every toast the IAM v4.1
   application can show, plus the "drive" script that puts each one on
   screen. Redline Mode's Modal/Toast galleries read this registry and
   nothing else, so adding a new overlay never means editing a Redline
   layout file (see REDLINE-OVERLAY-GALLERY.md).

   Two rules shape the whole design:

   1. THE GALLERY NEVER DRAWS AN OVERLAY ITSELF. Every entry reaches its
      state by driving the real production UI the way a person would —
      click the real trigger, type in the real field, click the real row.
      That is why the gallery contains no ADS markup, no copy constants
      and no styling of its own: what a designer inspects is literally the
      shipped component, rendered by the shipped code path. If production
      changes, the gallery changes with it or the drive fails loudly.

   2. THE GALLERY ONLY EVER RUNS IN A PREVIEW DOCUMENT. Redline hosts the
      galleries in its `?redlinePreview=1` iframe — a second, disposable
      instance of the same app — so no drive can touch the user's real
      page, data or scroll position. Anything the drive does mutate
      (a search pool it stress-loaded, a timer it froze) is recorded and
      rolled back by `teardown()`.

   Transient states (a 160ms search debounce, a 700ms simulated delete
   latency) are frozen by neutralizing `window.setTimeout` for the instant
   the drive runs — the environment is stubbed, never the component — so
   the loading treatment on screen is the real one, held still.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  if (window.IamOverlayGallery) return;

  var MODALS = [];
  var TOASTS = [];
  var byKind = { modal: MODALS, toast: TOASTS };

  /* Everything the current entry changed, newest first, so `teardown()`
     can unwind it in exact reverse order. */
  var undoStack = [];
  var active = null;          /* { kind, id } */
  var previewRoot = null;     /* #redline-preview-root      — geometry marker */
  var overlayRoot = null;     /* #redline-preview-overlay-root — adopted overlays */

  /* ═══════════════════════════════════════════════════════════════════
     Small DOM/async helpers used by the drives
     ═══════════════════════════════════════════════════════════════════ */

  function byId(id) { return document.getElementById(id); }
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function sleep(ms) {
    return new Promise(function (resolve) { window.setTimeout(resolve, ms); });
  }

  /* Runs `steps` in order. A step may return nothing, a number (treated
     as "wait this many ms"), or a promise. */
  function seq(steps) {
    return steps.reduce(function (chain, step) {
      return chain.then(function () {
        var result = step();
        return typeof result === "number" ? sleep(result) : result;
      });
    }, Promise.resolve());
  }

  function until(test, timeoutMs) {
    var deadline = Date.now() + (timeoutMs || 4000);
    return new Promise(function (resolve, reject) {
      (function poll() {
        var value;
        try { value = test(); } catch (_) { value = null; }
        if (value) { resolve(value); return; }
        if (Date.now() > deadline) { reject(new Error("timed out waiting for a preview condition")); return; }
        window.setTimeout(poll, 25);
      })();
    });
  }

  function isShown(el) {
    if (!el) return false;
    if (el.hasAttribute && el.hasAttribute("hidden")) return false;
    var rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function pageVisible(id) {
    var el = byId(id);
    return Boolean(el) && el.style.display !== "none";
  }

  function click(el) { if (el && el.click) el.click(); return Boolean(el); }

  function clickText(selector, text, root) {
    var match = qsa(selector, root).filter(function (el) {
      return (el.textContent || "").trim() === text;
    })[0];
    return click(match);
  }

  function clickContaining(selector, fragment, root) {
    var match = qsa(selector, root).filter(function (el) {
      return (el.innerText || el.textContent || "").indexOf(fragment) !== -1;
    })[0];
    return click(match);
  }

  /* Sets a field's value through the same `input` event a keystroke
     produces, so the production listener (and its debounce) runs. */
  function type(el, value) {
    if (!el) return false;
    el.value = value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    return true;
  }

  /* ═══════════════════════════════════════════════════════════════════
     Reversible environment stubs
     ═══════════════════════════════════════════════════════════════════ */

  function pushUndo(fn) { undoStack.push(fn); }

  /* While a drive is running, the preview is being operated, not
     inspected: Redline's capture-phase click handler (which normally
     converts a click in the preview into a selection and stops it
     reaching the app) has to stand down, or no drive could ever press a
     button. A counter rather than a boolean because drives nest —
     `show()` runs `teardown()`, which navigates. */
  var driveDepth = 0;

  function beginDrive() {
    driveDepth += 1;
    window.__iamGalleryDriving = true;
  }

  function endDrive() {
    driveDepth = Math.max(0, driveDepth - 1);
    window.__iamGalleryDriving = driveDepth > 0;
  }

  function drive(run) {
    beginDrive();
    var settle = function (value) { endDrive(); return value; };
    var rethrow = function (err) { endDrive(); throw err; };
    try {
      return Promise.resolve(run()).then(settle, rethrow);
    } catch (err) {
      endDrive();
      return Promise.reject(err);
    }
  }

  /* Holds any state a production code path parks behind `setTimeout`
     (search debounce, simulated request latency) at the instant it is
     entered. The callbacks are re-armed far enough out that they never
     fire, and `clearTimeout` on the returned handle still works, so the
     component itself neither knows nor cares. */
  var frozenCallbacks = [];

  function freezeTimers(fn) {
    var realTimeout = window.setTimeout;
    window.setTimeout = function (callback, delay) {
      frozenCallbacks.push(callback);
      return realTimeout(function () {}, 2147483000);
    };
    try { return fn(); } finally { window.setTimeout = realTimeout; }
  }

  /* A frozen "submitting" state leaves the component mid-request: its
     in-flight guard is set, and only the callback that never ran can
     clear it, so the dialog can neither be closed nor reopened until
     that callback resolves. Entries that freeze such a state release it
     in `cleanup()` by running the callback with the mutation it would
     have performed made unreachable, which sends it down its own
     already-shipped "the record is gone" branch: the guard clears, the
     dialog reports the failure it is designed to report, and no
     application data is touched. */
  function flushFrozen() {
    var pending = frozenCallbacks.slice();
    frozenCallbacks.length = 0;
    pending.forEach(function (callback) {
      try { callback(); } catch (_) {}
    });
    return pending.length;
  }

  /* Temporarily replaces the contents of a global array (search pools,
     seed data) and registers the rollback. Splices in place because the
     app closes over the array identity, not the global binding. */
  function spliceArray(arr, replacement) {
    if (!Array.isArray(arr)) return;
    var original = arr.slice();
    arr.length = 0;
    Array.prototype.push.apply(arr, replacement || []);
    pushUndo(function () {
      arr.length = 0;
      Array.prototype.push.apply(arr, original);
    });
  }

  function appendToArray(arr, items) {
    if (!Array.isArray(arr)) return;
    spliceArray(arr, arr.concat(items));
  }

  /* Replaces one method on one object for the duration of the entry —
     used to force the error branches that production reaches only when a
     lookup genuinely fails. */
  function stubMethod(target, name, replacement) {
    if (!target) return;
    var original = target[name];
    target[name] = replacement;
    pushUndo(function () { target[name] = original; });
  }

  /* Submission handlers that fail purely on internal, closed-over state
     have no seam a caller can reach. Breaking `Array#push` for the exact
     span of one synchronous click is the narrowest way to make such a
     handler take its own catch branch; it is restored before control
     returns, so nothing outside that click ever sees it. */
  function withBrokenArrayPush(fn) {
    var realPush = Array.prototype.push;
    Array.prototype.push = function () { throw new Error("simulated submission failure"); };
    try { return fn(); } finally { Array.prototype.push = realPush; }
  }

  /* The same idea for the other half of the pattern: handlers that
     re-validate a record before mutating it do so with `indexOf`, and
     answering "not present" for the length of one synchronous call is
     what sends them down their shipped "we couldn't find that record"
     branch — with the mutation itself now unreachable. */
  function withMissingRecord(fn) {
    var realIndexOf = Array.prototype.indexOf;
    Array.prototype.indexOf = function () { return -1; };
    try { return fn(); } finally { Array.prototype.indexOf = realIndexOf; }
  }

  /* ═══════════════════════════════════════════════════════════════════
     Preview roots

     `#redline-preview-root` is a zero-paint marker pinned to the logical
     product viewport — the geometric reference every overlay measurement
     is taken against. `#redline-preview-overlay-root` is where the
     gallery parks the overlay it is currently showing, so "did the
     gallery leave anything behind" is a one-selector question and every
     adopted node has a recorded way home.
     ═══════════════════════════════════════════════════════════════════ */

  function ensureRoots() {
    if (!previewRoot || !previewRoot.isConnected) {
      previewRoot = byId("redline-preview-root");
      if (!previewRoot) {
        previewRoot = document.createElement("div");
        previewRoot.id = "redline-preview-root";
        previewRoot.setAttribute("aria-hidden", "true");
        /* Marked as Redline chrome: it is scaffolding, not a product
           component, and must never be selectable in the inspector. */
        previewRoot.setAttribute("data-redline-ui", "");
        previewRoot.style.cssText = "position:fixed;inset:0;pointer-events:none;";
        document.body.appendChild(previewRoot);
      }
    }
    if (!overlayRoot || !overlayRoot.isConnected) {
      overlayRoot = byId("redline-preview-overlay-root");
      if (!overlayRoot) {
        overlayRoot = document.createElement("div");
        overlayRoot.id = "redline-preview-overlay-root";
        /* Deliberately NOT `data-redline-ui`: everything inside is real
           product UI and must stay inspectable. Redline's
           `isRedlineChrome()` short-circuits on this marker. */
        overlayRoot.setAttribute("data-redline-preview-overlay-root", "");
        document.body.appendChild(overlayRoot);
      }
    }
    return { root: previewRoot, overlayRoot: overlayRoot };
  }

  /* Moves a live overlay into the preview overlay root and remembers
     exactly where it came from. The overlays are all `position: fixed`,
     whose containing block is the viewport regardless of parent, so this
     is a pure re-parent: nothing about their geometry or styling moves. */
  function adopt(node) {
    if (!node) return;
    ensureRoots();
    if (node.parentNode === overlayRoot) return;
    var parent = node.parentNode;
    var next = node.nextSibling;
    overlayRoot.appendChild(node);
    pushUndo(function () {
      if (!parent) return;
      if (next && next.parentNode === parent) parent.insertBefore(node, next);
      else parent.appendChild(node);
    });
  }

  /* ═══════════════════════════════════════════════════════════════════
     Navigation between the background pages a modal belongs to
     ═══════════════════════════════════════════════════════════════════ */

  var TEAM_FIXTURE = "National Ad Sales";
  var ROLE_FIXTURE = "ACP Planner";
  var USER_FIXTURE = "Homer.Simpson@disney.com";

  function leaveDetailPage() {
    if (pageVisible("addUsersPage")) return click(byId("auBack"));
    if (pageVisible("createRolePage")) return click(byId("crBack"));
    if (pageVisible("editTeamPage")) return click(byId("tmBack"));
    if (pageVisible("pcDetailPage")) return click(byId("pcBack"));
    return false;
  }

  function goTab(label) {
    return seq([
      leaveDetailPage,
      function () { return sleep(30); },
      function () { clickText(".tab-btn", label); },
      function () { return until(function () { return qs(".tab-btn[aria-selected='true'], .tab-btn.on"); }, 2000).catch(function () {}); }
    ]);
  }

  function openUserLink(email) {
    var cell = qsa("#usersTable .c-em").filter(function (el) {
      return (el.textContent || "").trim().toLowerCase() === String(email).toLowerCase();
    })[0];
    var row = cell && cell.closest("tr");
    return click(row && row.querySelector("a.name-link"));
  }

  var PAGES = {
    users: function () { return goTab("Users"); },
    roles: function () { return goTab("Roles"); },
    teams: function () { return goTab("Teams"); },
    editUser: function () {
      return seq([
        function () { return PAGES.users(); },
        function () { return until(function () { return qs("#usersTable .c-em"); }); },
        function () { openUserLink(USER_FIXTURE); },
        function () { return until(function () { return pageVisible("addUsersPage"); }); }
      ]);
    },
    editRole: function () {
      return seq([
        function () { return PAGES.roles(); },
        function () { return until(function () { return qs("a.rp-role-link"); }); },
        function () { clickText("a.rp-role-link", ROLE_FIXTURE); },
        function () { return until(function () { return pageVisible("createRolePage"); }); }
      ]);
    },
    editTeam: function () {
      return seq([
        function () { return PAGES.teams(); },
        function () { return until(function () { return qs("a.tm-name-link"); }); },
        function () { clickText("a.tm-name-link", TEAM_FIXTURE); },
        function () { return until(function () { return pageVisible("editTeamPage"); }); }
      ]);
    },
    /* The Add User *page* is step 2 of the Add User flow, so the only
       honest way in is through step 1's picker — exactly how a person
       gets there. */
    addUser: function () {
      return seq([
        function () { return PAGES.users(); },
        function () { clickText("#usersPanel button", "Add User"); },
        function () { return until(function () { return isShown(byId("auAddUserModalBackdrop")); }); },
        function () { type(byId("auAddUserSearchInput"), "Abraham"); },
        function () { return until(function () { return qs("#auAddUserListbox [role='option']"); }, 3000); },
        function () { clickContaining("#auAddUserListbox [role='option']", "Abraham Simpson"); },
        function () { return until(function () { return !byId("auAddUserNext").disabled; }); },
        function () { click(byId("auAddUserNext")); },
        function () { return until(function () { return pageVisible("addUsersPage") && byId("auAddUserModalBackdrop").hasAttribute("hidden"); }); }
      ]);
    },
    /* The Permission Capability page lost its UI entry point when the
       standalone Permissions tab was removed (2026-06-07). Its "Delete
       permission group?" dialog is still live production code, so the
       gallery reaches the page through the app's own navigation hook
       rather than reconstructing the page. */
    permissionCapability: function () {
      return seq([
        function () { return PAGES.roles(); },
        function () {
          if (typeof window.__iamOpenPermissionCapability !== "function") {
            throw new Error("permission capability navigation hook is unavailable");
          }
          window.__iamOpenPermissionCapability();
        },
        function () { return until(function () { return pageVisible("pcDetailPage"); }); }
      ]);
    }
  };

  function goToPage(name) {
    var go = PAGES[name];
    if (!go) return Promise.resolve();
    return go();
  }

  /* ═══════════════════════════════════════════════════════════════════
     Reset: close everything the previous entry opened
     ═══════════════════════════════════════════════════════════════════ */

  var BACKDROP_IDS = [
    "auAddUserModalBackdrop", "auEffBreakdownBackdrop", "auRemoveUserBackdrop",
    "auInactiveConfirmBackdrop", "tmAddMembersBackdrop", "tmRemoveMemberBackdrop",
    "tmDeleteConfirmBackdrop", "crConfirmBackdrop", "crAppRemoveBackdrop",
    "pcDeleteGroupBackdrop"
  ];

  function closeAllOverlays() {
    BACKDROP_IDS.forEach(function (id) {
      var el = byId(id);
      if (el && !el.hasAttribute("hidden")) el.setAttribute("hidden", "");
    });
    ["fltDrawer", "fltOverlay", "rpFltDrawer", "rpFltOverlay"].forEach(function (id) {
      var el = byId(id);
      if (el) el.classList.remove("open");
    });
    /* The popover is shown and hidden purely by class; setting `hidden`
       on it would leave it painted (the class wins on `display`) but
       cut out of the accessibility tree — visible and unreadable. */
    var pop = byId("rpFuncPopover");
    if (pop) {
      pop.classList.remove("visible");
      pop.classList.remove("above");
      pop.removeAttribute("hidden");
    }
    /* The export prototype keeps a screen variable of its own, and its
       file icon refuses to open anything unless that variable still says
       "desktop". Hiding the overlays behind its back would strand it, so
       exit the prototype the way its own Return button does. */
    var simOpen = ["simDesktopOverlay", "simExcelOverlay"].some(function (id) {
      var el = byId(id);
      return el && !el.hidden;
    });
    if (simOpen && typeof window.returnToUserListFromPrototype === "function") {
      window.returnToUserListFromPrototype();
    }
    ["simDesktopOverlay", "simExcelOverlay"].forEach(function (id) {
      var el = byId(id);
      if (el) el.hidden = true;
    });
    var toasts = byId("edlToastContainer");
    if (toasts) toasts.replaceChildren();
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function unwind() {
    while (undoStack.length) {
      var fn = undoStack.pop();
      try { fn(); } catch (_) {}
    }
  }

  /* ═══════════════════════════════════════════════════════════════════
     Registration API
     ═══════════════════════════════════════════════════════════════════ */

  function requireFields(entry, fields) {
    fields.forEach(function (field) {
      if (!entry[field]) throw new Error("overlay gallery entry is missing `" + field + "`");
    });
  }

  function register(kind, entry) {
    var list = byKind[kind];
    if (!list) throw new Error("unknown overlay kind: " + kind);
    requireFields(entry, ["id", "group", "name", "stateName", "source", "ads"]);
    if (typeof entry.mount !== "function") throw new Error("overlay gallery entry `" + entry.id + "` has no mount()");
    if (list.some(function (item) { return item.id === entry.id; })) {
      throw new Error("duplicate overlay gallery id: " + entry.id);
    }
    list.push(entry);
    return entry;
  }

  function registerModal(entry) { return register("modal", entry); }
  function registerToast(entry) {
    requireFields(entry, ["variant"]);
    return register("toast", entry);
  }

  /* The public shape Redline consumes — no DOM nodes, no functions, so
     it survives the structured clone the host↔preview boundary implies
     and can be asserted against directly in tests. */
  function summarize(entry, index, total) {
    return {
      id: entry.id, group: entry.group, name: entry.name, stateName: entry.stateName,
      description: entry.description || "", source: entry.source, ads: entry.ads,
      variant: entry.variant || "", structure: entry.structure || "",
      fixture: entry.fixture || null, index: index, total: total,
      label: entry.name + " \u2014 " + entry.stateName
    };
  }

  function list(kind) {
    var entries = byKind[kind] || [];
    return entries.map(function (entry, i) { return summarize(entry, i, entries.length); });
  }

  function find(kind, id) {
    return (byKind[kind] || []).filter(function (entry) { return entry.id === id; })[0] || null;
  }

  /* ═══════════════════════════════════════════════════════════════════
     show / reset / teardown
     ═══════════════════════════════════════════════════════════════════ */

  var context = {
    seq: seq, sleep: sleep, until: until, byId: byId, qs: qs, qsa: qsa,
    click: click, clickText: clickText, clickContaining: clickContaining,
    type: type, isShown: isShown, page: goToPage, adopt: adopt,
    freezeTimers: freezeTimers, flushFrozen: flushFrozen,
    spliceArray: spliceArray, appendToArray: appendToArray,
    stubMethod: stubMethod, pushUndo: pushUndo, pageVisible: pageVisible,
    withBrokenArrayPush: withBrokenArrayPush, withMissingRecord: withMissingRecord
  };

  var activeEntry = null;

  function teardown() {
    return drive(function () {
      /* An entry that parked a component mid-request gets first say:
         its cleanup releases that component before the stubs the
         request depended on are rolled back underneath it. */
      if (activeEntry && typeof activeEntry.cleanup === "function") {
        try { activeEntry.cleanup(context); } catch (_) {}
      }
      activeEntry = null;
      frozenCallbacks.length = 0;
      closeAllOverlays();
      unwind();
      active = null;
      if (overlayRoot) overlayRoot.replaceChildren();
      return true;
    });
  }

  function show(kind, id) {
    var entry = find(kind, id);
    if (!entry) return Promise.reject(new Error("unknown overlay: " + kind + "/" + id));
    ensureRoots();
    return drive(function () {
      return teardown()
        .then(function () {
          /* Claimed before the drive runs, not after: a drive that
             fails halfway may already have frozen a request, and the
             next teardown still has to release it. */
          activeEntry = entry;
          return entry.mount(context);
        })
        .then(function () {
          active = { kind: kind, id: id };
          /* Park whatever the drive opened in the preview overlay root so
             cleanup is provable and nothing can be orphaned on the page. */
          (entry.adopts || []).forEach(function (selector) {
            adopt(qs(selector));
          });
          return summarize(entry, byKind[kind].indexOf(entry), byKind[kind].length);
        });
    });
  }

  function reset() {
    if (!active) return Promise.resolve(null);
    return show(active.kind, active.id);
  }

  /* Full exit: tear the current entry down and walk the preview back to
     the User list, which is the one page Redline can reliably replay the
     real source route from. */
  function home() {
    return drive(function () {
      return teardown().then(function () { return goToPage("users"); });
    })
      .then(function () {
        if (previewRoot && previewRoot.parentNode) previewRoot.parentNode.removeChild(previewRoot);
        if (overlayRoot && overlayRoot.parentNode) overlayRoot.parentNode.removeChild(overlayRoot);
        previewRoot = null;
        overlayRoot = null;
        return true;
      })
      .catch(function () { return false; });
  }

  window.IamOverlayGallery = {
    version: 1,
    registerModal: registerModal,
    registerToast: registerToast,
    modals: function () { return list("modal"); },
    toasts: function () { return list("toast"); },
    entries: list,
    count: function (kind) { return (byKind[kind] || []).length; },
    show: show,
    reset: reset,
    teardown: teardown,
    home: home,
    active: function () { return active ? { kind: active.kind, id: active.id } : null; },
    roots: ensureRoots
  };

  /* ═══════════════════════════════════════════════════════════════════
     ── MODAL REGISTRY ──────────────────────────────────────────────────

     Grouped by the product area that owns the overlay. `source` points
     at the markup; `ads` names the component the entry is inspecting.
     ═══════════════════════════════════════════════════════════════════ */

  var ADD_USER_SOURCE = "public/v4.1/index.html \u00A7 #auAddUserModalBackdrop";
  var ADD_USER_ADS = "ADS Modal (cr-confirm-dialog--modal) + ADS Search field + ADS Listbox";

  function openAddUserPicker(g) {
    return g.seq([
      function () { return g.page("users"); },
      function () { return g.until(function () { return g.qs("#usersPanel button"); }); },
      function () { g.clickText("#usersPanel button", "Add User"); },
      function () { return g.until(function () { return g.isShown(g.byId("auAddUserModalBackdrop")); }); }
    ]);
  }

  registerModal({
    id: "add-user-initial",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: Initial",
    description: "The picker as it opens: empty search field, no result panel, Next disabled.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS,
    fixture: { query: "" },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) { return openAddUserPicker(g); }
  });

  registerModal({
    id: "add-user-searching",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: Searching",
    description: "The shared loading treatment, held at the moment the 160ms debounce is armed.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS,
    fixture: { query: "sim" },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddUserPicker(g); },
        function () { g.freezeTimers(function () { g.type(g.byId("auAddUserSearchInput"), "sim"); }); },
        function () { return g.until(function () { return g.isShown(g.byId("auAddUserDropdown")); }); }
      ]);
    }
  });

  registerModal({
    id: "add-user-results",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: Matching results",
    description: "Ranked matches: eligible employees plus directory entries that already have access.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS,
    fixture: { query: "sim" },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddUserPicker(g); },
        function () { g.type(g.byId("auAddUserSearchInput"), "sim"); },
        function () { return g.until(function () { return g.qs("#auAddUserListbox [role='option']"); }, 3000); }
      ]);
    }
  });

  registerModal({
    id: "add-user-no-results",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: No results",
    description: "Empty state after a valid query matches nothing in the directory.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS,
    fixture: { query: "qzx" },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddUserPicker(g); },
        function () { g.type(g.byId("auAddUserSearchInput"), "qzx"); },
        function () {
          return g.until(function () {
            var listbox = g.byId("auAddUserListbox");
            return listbox && /No users found/i.test(listbox.textContent || "");
          }, 3000);
        }
      ]);
    }
  });

  registerModal({
    id: "add-user-error",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: Search error",
    description: "Inline search failure. Reached by making the directory lookup throw, exactly as the production guard expects.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS,
    fixture: { query: "sim", failure: "directory lookup" },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddUserPicker(g); },
        function () {
          g.stubMethod(window, "auGetAddUserSearchPool", function () {
            throw new Error("simulated directory failure");
          });
          g.type(g.byId("auAddUserSearchInput"), "sim");
        },
        function () {
          return g.until(function () {
            var note = g.byId("auAddUserDDNote");
            return note && note.classList.contains("is-error");
          }, 3000);
        }
      ]);
    }
  });

  registerModal({
    id: "add-user-selected",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: Eligible user selected",
    description: "Selected-employee card with Next enabled.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS + " + ADS Avatar",
    fixture: { user: "Abraham Simpson" },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddUserPicker(g); },
        function () { g.type(g.byId("auAddUserSearchInput"), "Abraham"); },
        function () { return g.until(function () { return g.qs("#auAddUserListbox [role='option']"); }, 3000); },
        function () { g.clickContaining("#auAddUserListbox [role='option']", "Abraham Simpson"); },
        function () { return g.until(function () { return g.isShown(g.byId("auAddUserSelected")); }); }
      ]);
    }
  });

  registerModal({
    id: "add-user-already-has-access",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: Already has access",
    description: "A directory match that is already an Atlas user: trailing status replaces the team, Next stays disabled and the duplicate notice explains why.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS + " + ADS Inline notice",
    fixture: { user: "Homer Simpson" },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddUserPicker(g); },
        function () { g.type(g.byId("auAddUserSearchInput"), "Homer"); },
        function () { return g.until(function () { return g.qs("#auAddUserListbox [role='option']"); }, 3000); },
        function () { g.clickContaining("#auAddUserListbox [role='option']", "Homer Simpson"); },
        function () { return g.until(function () { return g.isShown(g.byId("auAddUserDuplicate")); }); }
      ]);
    }
  });

  registerModal({
    id: "add-user-long-content",
    group: "User management",
    name: "Add user",
    stateName: "Step 1: Long identity content",
    description: "Stress state: a directory record whose name, email and team all exceed the row's width, so truncation and tooltips can be inspected.",
    source: ADD_USER_SOURCE,
    ads: ADD_USER_ADS + " + ADS Tooltip",
    fixture: {
      name: "Alexandra Featherington-Montgomery-Whitmore",
      email: "alexandra.featherington-montgomery-whitmore@partners.disney-advertising.com",
      team: "Addressable & Programmatic Sales Enablement Operations"
    },
    adopts: ["#auAddUserModalBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddUserPicker(g); },
        function () {
          g.appendToArray(window.ROSTER_DATA, [{
            id: "gallery-stress-1",
            name: "Alexandra Featherington-Montgomery-Whitmore",
            email: "alexandra.featherington-montgomery-whitmore@partners.disney-advertising.com",
            team: "Addressable & Programmatic Sales Enablement Operations",
            region: "North America", status: "Active", avatar: "",
            employeeId: "E-908821", timezone: "America/New_York",
            department: "Advertising Sales", userType: "Internal", eligible: true
          }]);
          g.type(g.byId("auAddUserSearchInput"), "Featherington");
        },
        function () { return g.until(function () { return g.qs("#auAddUserListbox [role='option']"); }, 3000); }
      ]);
    }
  });

  registerModal({
    id: "au-inactive-confirm",
    group: "User management",
    name: "Set user as inactive",
    stateName: "Confirm",
    description: "Destructive confirmation shown when an in-progress user is switched from Active to Inactive.",
    source: "public/v4.1/index.html \u00A7 #auInactiveConfirmBackdrop",
    ads: "ADS Dialog (cr-confirm-dialog) + ADS destructive Button",
    fixture: { user: "Abraham Simpson" },
    adopts: ["#auInactiveConfirmBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("addUser"); },
        function () { g.click(g.qs("#auStatusSeg [data-au-status='Inactive']")); },
        function () { return g.until(function () { return g.isShown(g.byId("auInactiveConfirmBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "au-remove-user",
    group: "User management",
    name: "Remove user",
    stateName: "Confirm",
    description: "Destructive confirmation from Edit User. The title carries the user's display name.",
    source: "public/v4.1/index.html \u00A7 #auRemoveUserBackdrop",
    ads: "ADS Dialog (cr-confirm-dialog) + ADS destructive Button",
    fixture: { user: "Homer Simpson" },
    adopts: ["#auRemoveUserBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editUser"); },
        function () { g.click(g.byId("auRemoveUser")); },
        function () { return g.until(function () { return g.isShown(g.byId("auRemoveUserBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "au-eff-breakdown",
    group: "User management",
    name: "Effective access breakdown",
    stateName: "Populated",
    description: "Read-only breakdown of the access a user inherits from their assigned roles. Long body with its own scroll region.",
    source: "public/v4.1/index.html \u00A7 #auEffBreakdownBackdrop",
    ads: "ADS Modal (cr-confirm-dialog--modal), wide variant",
    fixture: { user: "Homer Simpson" },
    adopts: ["#auEffBreakdownBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editUser"); },
        function () { return g.until(function () { return g.byId("auEffViewBreakdown"); }); },
        function () { g.click(g.byId("auEffViewBreakdown")); },
        function () { return g.until(function () { return g.isShown(g.byId("auEffBreakdownBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "users-filter-drawer",
    group: "User management",
    name: "User filters",
    stateName: "Open",
    description: "Modal filter drawer for the User list: scrim plus a right-docked panel with Reset / Cancel / Apply.",
    source: "public/v4.1/index.html \u00A7 #fltOverlay + #fltDrawer",
    ads: "ADS Drawer overlay + ADS Text field + ADS Select",
    fixture: null,
    adopts: ["#fltOverlay", "#fltDrawer"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("users"); },
        function () { g.click(g.byId("usersFilterBtn")); },
        function () { return g.until(function () { return g.byId("fltDrawer").classList.contains("open"); }); }
      ]);
    }
  });

  /* ── Role management ─────────────────────────────────────────────── */

  registerModal({
    id: "cr-remove-role",
    group: "Role management",
    name: "Remove role",
    stateName: "Confirm",
    description: "Destructive confirmation from Edit Role.",
    source: "public/v4.1/index.html \u00A7 #crConfirmBackdrop",
    ads: "ADS Dialog (cr-confirm-dialog) + ADS destructive Button",
    fixture: { role: ROLE_FIXTURE },
    adopts: ["#crConfirmBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editRole"); },
        function () { g.click(g.byId("crRemove")); },
        function () { return g.until(function () { return g.isShown(g.byId("crConfirmBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "cr-remove-application",
    group: "Role management",
    name: "Remove application",
    stateName: "Confirm",
    description: "Destructive confirmation before an application's permissions are stripped from a role.",
    source: "public/v4.1/index.html \u00A7 #crAppRemoveBackdrop",
    ads: "ADS Modal (cr-confirm-dialog--modal) + ADS destructive Button",
    fixture: { application: "Core Planning", role: ROLE_FIXTURE },
    adopts: ["#crAppRemoveBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editRole"); },
        function () { g.click(g.qs("[data-remove-app]")); },
        function () { return g.until(function () { return g.isShown(g.byId("crAppRemoveBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "cr-remove-application-loading",
    group: "Role management",
    name: "Remove application",
    stateName: "Removing",
    description: "In-flight submission: primary button shows its loading label and spinner, Cancel and Close are disabled.",
    source: "public/v4.1/index.html \u00A7 #crAppRemoveBackdrop",
    ads: "ADS Modal + ADS Button loading state",
    fixture: { application: "Core Planning" },
    adopts: ["#crAppRemoveBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editRole"); },
        function () { g.click(g.qs("[data-remove-app]")); },
        function () { return g.until(function () { return g.isShown(g.byId("crAppRemoveBackdrop")); }); },
        function () { g.freezeTimers(function () { g.click(g.byId("crAppRemoveConfirm")); }); },
        function () { return g.until(function () { return g.byId("crAppRemoveConfirm").disabled; }); }
      ]);
    },
    cleanup: function (g) {
      g.withMissingRecord(g.flushFrozen);
    }
  });

  registerModal({
    id: "cr-remove-application-error",
    group: "Role management",
    name: "Remove application",
    stateName: "Submission error",
    description: "The dialog stays open and reports an inline failure when the application record can no longer be resolved.",
    source: "public/v4.1/index.html \u00A7 #crAppRemoveBackdrop",
    ads: "ADS Modal + ADS Inline error",
    fixture: { application: "Core Planning", failure: "record lookup" },
    adopts: ["#crAppRemoveBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editRole"); },
        function () { g.click(g.qs("[data-remove-app]")); },
        function () { return g.until(function () { return g.isShown(g.byId("crAppRemoveBackdrop")); }); },
        function () { g.freezeTimers(function () { g.click(g.byId("crAppRemoveConfirm")); }); },
        function () { g.withMissingRecord(g.flushFrozen); },
        function () { return g.until(function () { return g.isShown(g.byId("crAppRemoveError")); }, 3000); }
      ]);
    }
  });

  registerModal({
    id: "pc-delete-permission-group",
    group: "Role management",
    name: "Delete permission group",
    stateName: "Impacted roles",
    description: "Destructive confirmation that lists the roles a permission-group deletion would affect.",
    source: "public/v4.1/index.html \u00A7 #pcDeleteGroupBackdrop",
    ads: "ADS Dialog (cr-confirm-dialog, wide variant) + ADS destructive Button",
    fixture: null,
    adopts: ["#pcDeleteGroupBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("permissionCapability"); },
        function () { return g.until(function () { return g.qs("[data-pc-grp-delete]"); }); },
        function () { g.click(g.qs("[data-pc-grp-delete]")); },
        function () { return g.until(function () { return g.isShown(g.byId("pcDeleteGroupBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "roles-filter-drawer",
    group: "Role management",
    name: "Role filters",
    stateName: "Open",
    description: "Modal filter drawer for the Roles & Permissions list.",
    source: "public/v4.1/index.html \u00A7 #rpFltOverlay + #rpFltDrawer",
    ads: "ADS Drawer overlay + ADS Text field + ADS Select",
    fixture: null,
    adopts: ["#rpFltOverlay", "#rpFltDrawer"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("roles"); },
        function () { g.click(g.byId("rpFilterBtn")); },
        function () { return g.until(function () { return g.byId("rpFltDrawer").classList.contains("open"); }); }
      ]);
    }
  });

  registerModal({
    id: "rp-functions-popover",
    group: "Role management",
    name: "Role functions",
    stateName: "Popover",
    description: "Anchored, non-modal dialog listing an application's access level and permission groups for one role.",
    source: "public/v4.1/app.js \u00A7 #rpFuncPopover",
    ads: "ADS Popover (role=dialog)",
    fixture: { role: ROLE_FIXTURE, application: "Core Planning" },
    adopts: ["#rpFuncPopover"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("roles"); },
        function () { return g.until(function () { return g.qs("#rolesPanel .rp-func-link"); }); },
        function () { g.click(g.qs("#rolesPanel .rp-func-link")); },
        function () { return g.until(function () { return g.byId("rpFuncPopover").classList.contains("visible"); }); }
      ]);
    }
  });

  /* ── Team management ─────────────────────────────────────────────── */

  var ADD_MEMBERS_SOURCE = "public/v4.1/index.html \u00A7 #tmAddMembersBackdrop";
  var ADD_MEMBERS_ADS = "ADS Modal (cr-confirm-dialog--modal) + ADS Search field + ADS Checkbox + ADS Avatar";

  function openAddMembers(g) {
    return g.seq([
      function () { return g.page("editTeam"); },
      function () { g.click(g.byId("tmAddMembersBtn")); },
      function () { return g.until(function () { return g.isShown(g.byId("tmAddMembersBackdrop")); }); }
    ]);
  }

  function addMembersQuery(g, query, settle) {
    return g.seq([
      function () { return openAddMembers(g); },
      function () {
        if (settle) g.type(g.byId("tmAddMembersSearch"), query);
        else g.freezeTimers(function () { g.type(g.byId("tmAddMembersSearch"), query); });
      }
    ]);
  }

  registerModal({
    id: "add-members-initial",
    group: "Team management",
    name: "Add members",
    stateName: "Initial",
    description: "Compact opening state: search field plus the two-character hint, no result panel, Add members disabled at 0 selected.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS,
    fixture: { team: TEAM_FIXTURE },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) { return openAddMembers(g); }
  });

  registerModal({
    id: "add-members-one-char",
    group: "Team management",
    name: "Add members",
    stateName: "Below search threshold",
    description: "A single character does not search: the hint stays and no result panel appears.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS,
    fixture: { query: "m" },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) { return addMembersQuery(g, "m", true); }
  });

  registerModal({
    id: "add-members-searching",
    group: "Team management",
    name: "Add members",
    stateName: "Searching",
    description: "Shared loading treatment, held at the moment the 220ms debounce is armed.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS,
    fixture: { query: "sim" },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return addMembersQuery(g, "sim", false); },
        function () { return g.until(function () { return g.isShown(g.byId("tmAddMembersPanel")); }); }
      ]);
    }
  });

  registerModal({
    id: "add-members-results",
    group: "Team management",
    name: "Add members",
    stateName: "Matching results",
    description: "Eligible internal users only: everyone already on this team is filtered out of the result rows.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS,
    fixture: { query: "a", team: TEAM_FIXTURE },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return addMembersQuery(g, "an", true); },
        function () { return g.until(function () { return g.qs("#tmAddMembersList .tm-add-option"); }, 3000); }
      ]);
    }
  });

  registerModal({
    id: "add-members-no-results",
    group: "Team management",
    name: "Add members",
    stateName: "No results",
    description: "Empty state when the directory has no match at all for the query.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS + " + ADS Empty state",
    fixture: { query: "qzx" },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return addMembersQuery(g, "qzx", true); },
        function () {
          return g.until(function () {
            var panel = g.byId("tmAddMembersPanel");
            return panel && /No matching users found/i.test(panel.innerText || "");
          }, 3000);
        }
      ]);
    }
  });

  registerModal({
    id: "add-members-all-existing",
    group: "Team management",
    name: "Add members",
    stateName: "All matches already members",
    description: "The second empty state: matches exist but every one of them is already on this team, which is a different message from 'no matches'.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS + " + ADS Empty state",
    fixture: { query: "Bart", team: TEAM_FIXTURE },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return addMembersQuery(g, "Bart Simpson", true); },
        function () {
          return g.until(function () {
            var panel = g.byId("tmAddMembersPanel");
            return panel && /already a member/i.test(panel.innerText || "");
          }, 3000);
        }
      ]);
    }
  });

  registerModal({
    id: "add-members-error",
    group: "Team management",
    name: "Add members",
    stateName: "Search error",
    description: "Inline search failure with a Retry action. Selections and the query survive the error.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS + " + ADS Inline error",
    fixture: { query: "sim", failure: "directory lookup" },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return openAddMembers(g); },
        function () {
          g.stubMethod(window, "auSearchAddUserCandidates", function () {
            throw new Error("simulated directory failure");
          });
          g.type(g.byId("tmAddMembersSearch"), "sim");
        },
        function () {
          return g.until(function () {
            var panel = g.byId("tmAddMembersPanel");
            return panel && /couldn/i.test(panel.innerText || "");
          }, 3000);
        }
      ]);
    }
  });

  registerModal({
    id: "add-members-one-selected",
    group: "Team management",
    name: "Add members",
    stateName: "One user selected",
    description: "A single checked row; the footer count reads 1 and the primary action becomes enabled.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS,
    fixture: { query: "an", selected: 1 },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return addMembersQuery(g, "an", true); },
        function () { return g.until(function () { return g.qs("#tmAddMembersList .tm-add-option"); }, 3000); },
        function () { g.click(g.qsa(".tm-add-option-check")[0]); },
        function () { return g.until(function () { return !g.byId("tmAddMembersConfirm").disabled; }); }
      ]);
    }
  });

  registerModal({
    id: "add-members-multi-selected",
    group: "Team management",
    name: "Add members",
    stateName: "Multiple users selected across searches",
    description: "Selections made under one query persist into the next: the footer count keeps both, which is the behaviour that separates this picker from Add user.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS,
    fixture: { queries: ["an", "el"], selected: 2 },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return addMembersQuery(g, "an", true); },
        function () { return g.until(function () { return g.qs("#tmAddMembersList .tm-add-option"); }, 3000); },
        function () { g.click(g.qsa(".tm-add-option-check")[0]); },
        function () { g.type(g.byId("tmAddMembersSearch"), "el"); },
        function () { return g.until(function () { return g.qs("#tmAddMembersList .tm-add-option"); }, 3000); },
        function () { g.click(g.qsa(".tm-add-option-check")[0]); },
        function () {
          return g.until(function () {
            return /2 selected/.test((g.byId("tmAddMembersCount") || {}).textContent || "");
          });
        }
      ]);
    }
  });

  registerModal({
    id: "add-members-submit-error",
    group: "Team management",
    name: "Add members",
    stateName: "Submission error",
    description: "The modal stays open, selections are kept and an inline error explains the failed submission.",
    source: ADD_MEMBERS_SOURCE,
    ads: ADD_MEMBERS_ADS + " + ADS Inline error",
    fixture: { selected: 1, failure: "submission" },
    adopts: ["#tmAddMembersBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return addMembersQuery(g, "an", true); },
        function () { return g.until(function () { return g.qs("#tmAddMembersList .tm-add-option"); }, 3000); },
        function () { g.click(g.qsa(".tm-add-option-check")[0]); },
        function () {
          g.withBrokenArrayPush(function () { g.click(g.byId("tmAddMembersConfirm")); });
        },
        function () { return g.until(function () { return g.isShown(g.byId("tmAddMembersSubmitError")); }, 3000); }
      ]);
    }
  });

  registerModal({
    id: "tm-remove-member",
    group: "Team management",
    name: "Remove member from team",
    stateName: "Confirm",
    description: "Destructive confirmation naming both the member and the team.",
    source: "public/v4.1/index.html \u00A7 #tmRemoveMemberBackdrop",
    ads: "ADS Dialog (cr-confirm-dialog) + ADS destructive Button",
    fixture: { team: TEAM_FIXTURE },
    adopts: ["#tmRemoveMemberBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editTeam"); },
        function () { return g.until(function () { return g.qs("#tmMembersTbody [data-tm-remove]"); }); },
        function () { g.click(g.qs("#tmMembersTbody [data-tm-remove]")); },
        function () { return g.until(function () { return g.isShown(g.byId("tmRemoveMemberBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "tm-delete-team",
    group: "Team management",
    name: "Delete team",
    stateName: "Confirm",
    description: "Destructive confirmation with a close button, naming the team being deleted.",
    source: "public/v4.1/index.html \u00A7 #tmDeleteConfirmBackdrop",
    ads: "ADS Modal (cr-confirm-dialog--modal) + ADS destructive Button",
    fixture: { team: TEAM_FIXTURE },
    adopts: ["#tmDeleteConfirmBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editTeam"); },
        function () { g.click(g.byId("tmDelete")); },
        function () { return g.until(function () { return g.isShown(g.byId("tmDeleteConfirmBackdrop")); }); }
      ]);
    }
  });

  registerModal({
    id: "tm-delete-team-loading",
    group: "Team management",
    name: "Delete team",
    stateName: "Deleting",
    description: "In-flight destructive submission: the primary button switches to its loading label and every dismissal is disabled.",
    source: "public/v4.1/index.html \u00A7 #tmDeleteConfirmBackdrop",
    ads: "ADS Modal + ADS Button loading state",
    fixture: { team: TEAM_FIXTURE },
    adopts: ["#tmDeleteConfirmBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editTeam"); },
        function () { g.click(g.byId("tmDelete")); },
        function () { return g.until(function () { return g.isShown(g.byId("tmDeleteConfirmBackdrop")); }); },
        function () { g.freezeTimers(function () { g.click(g.byId("tmDeleteConfirmConfirm")); }); },
        function () { return g.until(function () { return g.byId("tmDeleteConfirmCancel").disabled; }); }
      ]);
    },
    /* Release the held request before leaving. Emptying the team list
       first means the callback resolves down its "record is gone"
       branch — the pending flag clears, Cancel comes back, and the
       delete itself never happens. `teardown()` restores the list
       immediately afterwards. */
    cleanup: function (g) {
      g.spliceArray(window.__TEAMS_DATA, []);
      g.flushFrozen();
    }
  });

  registerModal({
    id: "tm-delete-team-error",
    group: "Team management",
    name: "Delete team",
    stateName: "Submission error",
    description: "The dialog stays open and reports an inline failure when the team record can no longer be resolved.",
    source: "public/v4.1/index.html \u00A7 #tmDeleteConfirmBackdrop",
    ads: "ADS Modal + ADS Inline error",
    fixture: { team: TEAM_FIXTURE, failure: "record lookup" },
    adopts: ["#tmDeleteConfirmBackdrop"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("editTeam"); },
        function () { g.click(g.byId("tmDelete")); },
        function () { return g.until(function () { return g.isShown(g.byId("tmDeleteConfirmBackdrop")); }); },
        function () {
          g.spliceArray(window.__TEAMS_DATA, []);
          g.click(g.byId("tmDeleteConfirmConfirm"));
        },
        function () { return g.until(function () { return g.isShown(g.byId("tmDeleteConfirmError")); }, 3000); }
      ]);
    }
  });

  /* ── Prototype simulation ────────────────────────────────────────── */

  /* Row selection is ordinary page state that survives an overlay being
     closed, so this has to ask whether the row is already checked rather
     than blindly clicking it — the second export drive in a row would
     otherwise deselect the only user and export nothing. */
  function selectFirstUser(g) {
    var box = g.qs("#usersTable tbody input[type='checkbox']");
    if (!box) return false;
    if (box.checked) return true;
    g.click(box);
    g.pushUndo(function () { if (box.checked) box.click(); });
    return true;
  }

  registerModal({
    id: "sim-desktop",
    group: "Prototype simulation",
    name: "Simulated desktop",
    stateName: "Export created",
    description: "Full-viewport prototype overlay that stands in for the operating system after an export. Not an ADS surface — included because the audit found it as a real role=dialog overlay.",
    source: "public/v4.1/index.html \u00A7 #simDesktopOverlay",
    ads: "Prototype-only overlay (no ADS mapping)",
    fixture: { selectedUsers: 1 },
    adopts: ["#simDesktopOverlay"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("users"); },
        function () { return g.until(function () { return g.qs("#usersTable tbody input[type='checkbox']"); }); },
        function () { selectFirstUser(g); },
        function () { g.clickText("#usersPanel button", "Export"); },
        function () { return g.until(function () { return g.isShown(g.byId("simDesktopOverlay")); }, 6000); }
      ]);
    }
  });

  registerModal({
    id: "sim-excel",
    group: "Prototype simulation",
    name: "Simulated spreadsheet",
    stateName: "Export opened",
    description: "The second half of the export prototype. Not an ADS surface.",
    source: "public/v4.1/index.html \u00A7 #simExcelOverlay",
    ads: "Prototype-only overlay (no ADS mapping)",
    fixture: { selectedUsers: 1 },
    adopts: ["#simExcelOverlay"],
    mount: function (g) {
      return g.seq([
        function () { return g.page("users"); },
        function () { return g.until(function () { return g.qs("#usersTable tbody input[type='checkbox']"); }); },
        function () { selectFirstUser(g); },
        function () { g.clickText("#usersPanel button", "Export"); },
        function () { return g.until(function () { return g.isShown(g.byId("simDesktopOverlay")); }, 6000); },
        function () { g.click(g.byId("simExcelFileIcon")); },
        function () { return g.until(function () { return g.isShown(g.byId("simExcelOverlay")); }, 6000); }
      ]);
    }
  });

  /* ═══════════════════════════════════════════════════════════════════
     ── TOAST REGISTRY ──────────────────────────────────────────────────

     Every entry calls the production `showEdlToast()` with the verbatim
     copy from its call site in app.js, and passes `duration: 0` — the
     component's own supported "never auto-dismiss" option — so the toast
     is frozen for inspection without stubbing anything.
     ═══════════════════════════════════════════════════════════════════ */

  var TOAST_SOURCE = "public/v4.1/app.js \u00A7 showEdlToast()";
  var TOAST_ADS = "ADS Toast (Figma 70:62)";

  function toastMount(specs) {
    return function (g) {
      return g.seq([
        function () { return g.page("users"); },
        function () {
          specs.forEach(function (spec) {
            var opts = { type: spec.type, title: spec.title, duration: 0 };
            if (spec.bodyHtml != null) opts.bodyHtml = spec.bodyHtml;
            else if (spec.body != null) opts.body = spec.body;
            window.showEdlToast(opts);
          });
        },
        function () {
          return g.until(function () {
            return g.qsa("#edlToastContainer .edl-toast").length === specs.length;
          });
        },
        function () { g.adopt(g.byId("edlToastContainer")); }
      ]);
    };
  }

  function toast(entry) {
    var specs = entry.stack || [{ type: entry.variant, title: entry.title, body: entry.body, bodyHtml: entry.bodyHtml }];
    registerToast({
      id: entry.id,
      group: entry.group,
      name: entry.name,
      stateName: entry.stateName,
      description: entry.description || "",
      variant: entry.variant,
      structure: entry.structure || (specs.length > 1 ? "Stack of " + specs.length : (specs[0].body || specs[0].bodyHtml ? "Title and supporting message" : "Message only")),
      source: entry.source || TOAST_SOURCE,
      ads: TOAST_ADS,
      fixture: { calls: specs },
      mount: toastMount(specs)
    });
  }

  /* ── User toasts ─────────────────────────────────────────────────── */

  toast({
    id: "toast-user-added", group: "User", name: "User added", stateName: "Success",
    variant: "success", title: "User added",
    bodyHtml: "&ldquo;<strong>Abraham Simpson</strong>&rdquo; has been added.",
    description: "Add User \u2192 Save."
  });
  toast({
    id: "toast-user-updated", group: "User", name: "User updated", stateName: "Success",
    variant: "success", title: "User updated",
    body: "Homer Simpson\u2019s user details have been saved.",
    description: "Edit User \u2192 Save."
  });
  toast({
    id: "toast-user-removed", group: "User", name: "User removed", stateName: "Success",
    variant: "success", title: "User removed",
    body: "Homer Simpson has been removed from Atlas.",
    description: "Edit User \u2192 Remove user \u2192 confirm."
  });
  toast({
    id: "toast-add-user-failed", group: "User", name: "Add user failed", stateName: "Error",
    variant: "error", title: "Couldn't open Add User",
    bodyHtml: "Something went wrong. Abraham Simpson is still selected \u2014 please try Next again.",
    description: "Add user picker \u2192 Next throws."
  });
  toast({
    id: "toast-required-fields", group: "User", name: "Required fields missing", stateName: "Warning",
    variant: "warning", title: "Required fields missing",
    body: "First name, last name, and email are required.",
    description: "Add User or Edit User \u2192 Save with an incomplete identity."
  });
  toast({
    id: "toast-role-required-add", group: "User", name: "Role required (Add User)", stateName: "Warning",
    variant: "warning", title: "Role required",
    body: "Assign at least one role before adding a user.",
    description: "Add User \u2192 Save with an Active status and no roles."
  });
  toast({
    id: "toast-role-required-edit", group: "User", name: "Role required (Edit User)", stateName: "Warning",
    variant: "warning", title: "Role required",
    body: "Assign at least one role before saving this user.",
    description: "Edit User \u2192 Save with an Active status and no roles."
  });
  toast({
    id: "toast-no-user-selected", group: "User", name: "No user selected", stateName: "Warning",
    variant: "warning", title: "No user selected",
    body: "Select an employee before adding a user.",
    description: "Add User \u2192 Save before an employee has been applied."
  });
  toast({
    id: "toast-company-required", group: "User", name: "Company name required", stateName: "Warning",
    variant: "warning", title: "Company name required",
    body: "Enter the external user's company name.",
    description: "Add User (external) \u2192 Save without a company."
  });

  /* ── Role toasts ─────────────────────────────────────────────────── */

  toast({
    id: "toast-role-created", group: "Role", name: "Role created", stateName: "Success",
    variant: "success", title: "Role created",
    bodyHtml: "&ldquo;<strong>Campaign Planner</strong>&rdquo; has been created.",
    description: "Create Role \u2192 Save Role."
  });
  toast({
    id: "toast-role-updated", group: "Role", name: "Role updated", stateName: "Success",
    variant: "success", title: "Role updated",
    bodyHtml: "&ldquo;<strong>Atlas Admin</strong>&rdquo; has been updated.",
    description: "Edit Role \u2192 Save Role."
  });
  toast({
    id: "toast-role-removed", group: "Role", name: "Role removed", stateName: "Success",
    variant: "success", title: "Role removed",
    bodyHtml: "&ldquo;<strong>Atlas Admin</strong>&rdquo; has been removed.",
    description: "Edit Role \u2192 Remove Role \u2192 confirm."
  });
  toast({
    id: "toast-draft-saved", group: "Role", name: "Draft saved", stateName: "Success",
    variant: "success", title: "Draft saved",
    bodyHtml: "&ldquo;<strong>Campaign Planner</strong>&rdquo; has been saved as a draft. Nothing was published yet.",
    description: "Create Role \u2192 Save as Draft."
  });
  toast({
    id: "toast-role-remove-blocked", group: "Role", name: "Unable to remove role", stateName: "Error",
    variant: "error", title: "Unable to remove role",
    bodyHtml: "&ldquo;<strong>Atlas Admin</strong>&rdquo; is assigned to active users and cannot be removed.",
    description: "Remove Role \u2192 confirm while the role still has active assignees."
  });
  toast({
    id: "toast-application-removed", group: "Role", name: "Application removed", stateName: "Success",
    variant: "success", title: "Application removed",
    bodyHtml: "Permissions for <strong>Core Planning</strong> have been removed from the role.",
    description: "Edit Role \u2192 Remove application \u2192 confirm."
  });
  toast({
    id: "toast-permission-group-deleted", group: "Role", name: "Permission group deleted", stateName: "Success",
    variant: "success", title: "Permission group deleted",
    bodyHtml: "The permission group has been removed from this capability.",
    description: "Permission Capability \u2192 Delete permission group \u2192 confirm."
  });

  /* ── Team toasts ─────────────────────────────────────────────────── */

  toast({
    id: "toast-team-saved", group: "Team", name: "Team saved", stateName: "Success",
    variant: "success", title: "Team saved",
    bodyHtml: "Updates to <strong>National Ad Sales</strong> were saved.",
    description: "Edit Team \u2192 Save Team."
  });
  toast({
    id: "toast-team-deleted", group: "Team", name: "Team deleted", stateName: "Success",
    variant: "success", title: "Team deleted",
    bodyHtml: "&ldquo;<strong>National Ad Sales</strong>&rdquo; has been deleted.",
    description: "Edit Team \u2192 Delete Team \u2192 confirm."
  });
  toast({
    id: "toast-member-added", group: "Team", name: "Member added", stateName: "Success (singular)",
    variant: "success", title: "1 member added",
    bodyHtml: "Click <strong>Save Team</strong> to keep these changes.",
    description: "Add members \u2192 one selection submitted."
  });
  toast({
    id: "toast-members-added", group: "Team", name: "Members added", stateName: "Success (plural)",
    variant: "success", title: "3 members added",
    bodyHtml: "Click <strong>Save Team</strong> to keep these changes.",
    description: "Add members \u2192 several selections submitted."
  });

  /* ── System toasts ───────────────────────────────────────────────── */

  toast({
    id: "toast-export-preparing", group: "System", name: "Preparing export", stateName: "Informative",
    variant: "informative", title: "Preparing Excel export\u2026",
    bodyHtml: "Getting 3 selected users ready.",
    description: "Users \u2192 Export. The only informative toast in the app."
  });
  toast({
    id: "toast-export-created", group: "System", name: "Export created", stateName: "Success",
    variant: "success", title: "Export created.",
    bodyHtml: "Opening <strong>atlas-users-export.xlsx</strong>\u2026",
    description: "Export completes and the simulated desktop opens."
  });

  /* ── Structural variants ─────────────────────────────────────────── */

  toast({
    id: "toast-title-only", group: "Structure", name: "Message only", stateName: "No supporting message",
    variant: "success", title: "Team saved",
    structure: "Message only",
    description: "The component omits the body paragraph entirely rather than reserving empty space."
  });
  toast({
    id: "toast-long-content", group: "Structure", name: "Long content", stateName: "Wrapped title and message",
    variant: "warning", title: "Permission update needs review before it can be published",
    bodyHtml: "&ldquo;<strong>Addressable &amp; Programmatic Sales Enablement Operations</strong>&rdquo; assigns permissions that overlap an existing role, so the change was saved as a draft instead of being published.",
    structure: "Long content",
    description: "Stress state: both the title and the message wrap to several lines inside the fixed toast width."
  });
  toast({
    id: "toast-stack-two", group: "Structure", name: "Two stacked toasts", stateName: "Stack",
    variant: "success", structure: "Stack of 2",
    description: "Chronological order, top-down, with the ADS stack gap between cards.",
    stack: [
      { type: "success", title: "Team saved", bodyHtml: "Updates to <strong>National Ad Sales</strong> were saved." },
      { type: "success", title: "1 member added", bodyHtml: "Click <strong>Save Team</strong> to keep these changes." }
    ]
  });
  toast({
    id: "toast-stack-mixed", group: "Structure", name: "Mixed-status stack", stateName: "Stack",
    variant: "error", structure: "Stack of 3",
    description: "All four semantic treatments are distinguishable by icon and border, never by colour alone.",
    stack: [
      { type: "success", title: "Role updated", bodyHtml: "&ldquo;<strong>Atlas Admin</strong>&rdquo; has been updated." },
      { type: "warning", title: "Role required", body: "Assign at least one role before saving this user." },
      { type: "error", title: "Unable to remove role", bodyHtml: "&ldquo;<strong>Atlas Admin</strong>&rdquo; is assigned to active users and cannot be removed." }
    ]
  });
  toast({
    id: "toast-stack-max", group: "Structure", name: "Maximum practical stack", stateName: "Stack",
    variant: "informative", structure: "Stack of 4",
    description: "Four cards is what the shortest supported viewport (1024 \u00D7 768) holds below the navbar. The component itself enforces no cap \u2014 see the ADS findings in REDLINE-OVERLAY-GALLERY.md.",
    stack: [
      { type: "informative", title: "Preparing Excel export\u2026", bodyHtml: "Getting 3 selected users ready." },
      { type: "success", title: "Export created.", bodyHtml: "Opening <strong>atlas-users-export.xlsx</strong>\u2026" },
      { type: "success", title: "User added", bodyHtml: "&ldquo;<strong>Abraham Simpson</strong>&rdquo; has been added." },
      { type: "warning", title: "Required fields missing", body: "First name, last name, and email are required." }
    ]
  });
})();
