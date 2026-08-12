# Redline overlay galleries (IAM v4.1)

Redline Mode has two gallery entry points in the left sidebar, under
**Overlays**: **Modals** and **Toasts**. They let a designer step through
every overlay the application can show — including its loading, empty,
error and stress states — and inspect any part of it with the ordinary
Redline inspector: dimensions, spacing, typography, colour, ADS mapping.

Everything the galleries show is the shipped component. There is no
gallery markup, no gallery copy and no gallery styling anywhere in this
feature.

- `public/v4.1/redline-gallery.js` — the registry and the drive helpers.
- `public/v4.1/redline.js` — preview modes, the sidebar rows, the gallery
  toolbar. It reads the registry and knows nothing about IAM's overlays.
- `tests/test_redline_overlay_gallery.py` — the regression suite.

## How it works

Two ideas carry the whole design.

**The gallery never draws an overlay.** Each entry reaches its state by
driving the real UI the way a person would: click the real trigger, type
in the real field, tick the real checkbox. So `add-user-results` is not a
rendering of the Add User picker — it *is* the Add User picker, opened by
pressing Add User and typing a query. If production changes, the gallery
changes with it, or the drive fails loudly and a test goes red.

**The gallery only runs in a preview document.** Redline already hosts a
disposable second instance of the app in its `?redlinePreview=1` iframe;
both galleries run there. No drive can reach the user's real page, data
or scroll position. Anything a drive does mutate — a search pool it
stress-loaded, a timer it froze — is recorded and rolled back.

Once an entry has settled, whatever it opened is moved into
`#redline-preview-overlay-root` in the preview document. The overlays are
all `position: fixed`, so re-parenting changes nothing about their
geometry; what it buys is that "did the gallery leave anything behind" is
a one-selector question, and every adopted node has a recorded way home.
`#redline-preview-root` is a zero-paint marker pinned to the logical
product viewport, the geometric reference measurements are taken against.

While a drive runs it raises `window.__iamGalleryDriving` in the preview.
Redline's click handler — which normally turns a click in the preview
into a selection and stops it reaching the app — stands down for exactly
that long. Without the handshake no drive could ever press a button.

## Registering a new modal

Add one entry to the `MODALS` section of `redline-gallery.js`. Nothing
else in Redline needs to be touched: the sidebar, the toolbar, the
counter and the tests all read the registry.

```js
registerModal({
  id: "tm-remove-member",              // stable, unique, kebab-case
  group: "Team management",            // product area
  name: "Remove member",               // the overlay
  stateName: "Confirm",                // the state within it
  description: "Destructive confirmation before a member leaves the team.",
  source: "public/v4.1/index.html § #tmRemoveMemberBackdrop",
  ads: "ADS Modal (cr-confirm-dialog--modal) + ADS destructive Button",
  fixture: { team: "National Ad Sales", member: "Homer Simpson" },
  adopts: ["#tmRemoveMemberBackdrop"], // moved into the overlay root
  mount: function (g) {
    return g.seq([
      function () { return g.page("editTeam"); },
      function () { g.click(g.qs("[data-tm-remove-member]")); },
      function () { return g.until(function () {
        return g.isShown(g.byId("tmRemoveMemberBackdrop")); }); }
    ]);
  }
});
```

`id`, `group`, `name`, `stateName`, `source`, `ads` and `mount` are
required; registration throws if one is missing or if the id is already
taken, so a half-filled entry fails at load rather than in the gallery.

A drive is a list of steps. Each step may return nothing, a number (wait
that many milliseconds), or a promise. End every drive with an `until()`
that waits for the state you are claiming — that assertion is what makes
a broken drive a test failure instead of a blank canvas.

Helpers available on `g`:

| Helper | What it does |
| --- | --- |
| `page(name)` | Navigates the preview to a background page (`users`, `roles`, `teams`, `editUser`, `editRole`, `editTeam`, `addUser`, `permissionCapability`) |
| `seq`, `sleep`, `until` | Step sequencing and waiting |
| `byId`, `qs`, `qsa`, `isShown`, `pageVisible` | DOM reads |
| `click`, `clickText`, `clickContaining`, `type` | Real interactions (`type` dispatches `input`, so debounces run) |
| `adopt(node)` | Moves a node into the overlay root, reversibly |
| `freezeTimers(fn)`, `flushFrozen()` | Hold and release a state parked behind `setTimeout` |
| `spliceArray`, `appendToArray`, `stubMethod`, `pushUndo` | Reversible environment changes |
| `withBrokenArrayPush(fn)`, `withMissingRecord(fn)` | Force a handler down its own failure branch for one synchronous call |

## Adding states to a modal you already registered

One entry per state, sharing a `name` and differing in `stateName`. Split
a state out when it is visually or semantically different; do not add a
second entry for a state that renders identically to one already there.

Where the production component supports them, cover: initial, loading,
results, empty, error, selected, submitting, submission error. Reach each
one through the component's own path — for a search modal that means
typing a query that genuinely returns nothing rather than emptying the
list by hand.

Two states need care:

**Loading.** `freezeTimers()` neutralises `setTimeout` for the instant
the drive runs, so the component's own loading treatment stays on screen.
If the frozen request also set an in-flight guard, the component is now
stuck: it can be neither closed nor reopened until the callback it is
waiting for resolves. Release it in `cleanup()`, which runs at the start
of the next teardown, before the stubs it depended on are rolled back:

```js
cleanup: function (g) {
  g.spliceArray(window.__TEAMS_DATA, []);  // make the record unresolvable
  g.flushFrozen();                         // the held callback takes its
                                           // own "record is gone" branch
}
```

The guard clears, the dialog reports the failure it is designed to
report, and the delete itself never happens.

**Submission error.** Handlers that fail on closed-over state have no
seam a caller can reach. `withBrokenArrayPush()` and
`withMissingRecord()` break one array method for the exact span of one
synchronous click, which is enough to send the handler into its own catch
or "we couldn't find that record" branch, and are restored before control
returns.

## Registering a new toast

Toasts use the `toast()` shorthand, which calls production's
`showEdlToast()` with the verbatim copy from its call site:

```js
toast({
  id: "toast-team-deleted", group: "Team", name: "Team deleted",
  stateName: "Success", variant: "success", title: "Team deleted",
  bodyHtml: "&ldquo;<strong>National Ad Sales</strong>&rdquo; has been deleted.",
  description: "Edit Team → Delete team → confirm."
});
```

Pass `stack: [...]` instead of `title`/`body` for a stacked entry; the
array is rendered in order, which is production's order.

Every toast is created with `duration: 0` — the component's own supported
"never auto-dismiss" option. Nothing is stubbed to freeze a toast, and
selecting parts of it cannot restart a timer that was never started.

## Supplying fixtures

`fixture` records the data the state stands on — the query typed, the
team, the user, the failure being simulated. It is metadata: the drive
uses the app's real seed data, and the fixture is what tells a reader
which record they are looking at. Keep it to plain values so it survives
the preview/host boundary, and prefer naming existing seed records
(`Homer.Simpson@disney.com`, `National Ad Sales`, `Atlas Admin`) over
inventing new ones.

Stress states are the one place new content appears. Load it through the
same seam production uses — `appendToArray` onto the search pool for a
long name, for instance — so it is rolled back with everything else, and
keep it plausible IAM content. Do not pad text to force overflow.

## Avoiding production mutations

The preview is disposable, but the discipline still matters: a drive that
mutates seed data changes what every later entry sees.

- Never let a drive complete a destructive action. Freeze it, or force
  its failure branch.
- Route every environment change through `spliceArray`, `stubMethod`,
  `appendToArray` or `pushUndo`, so teardown can reverse it.
- Restore anything you changed globally within the same synchronous call
  (`withBrokenArrayPush` and `withMissingRecord` do this by construction).
- Assume page state that is not overlay state survives your entry. Row
  selection, filters and search terms persist; drives must be written to
  be idempotent, which is why the export drives ask whether the row is
  already checked instead of clicking it blind.

## Verifying ADS compliance

The inspector is the check. Select the overlay and confirm it reports the
component you named in `ads`, then walk its parts: container, header,
title, close button, body, fields, rows, footer, primary and secondary
buttons. For a toast: container, icon, title, message, close, and the gap
between stacked cards.

Confirm the variant (destructive confirmations use the destructive
button; a non-destructive primary must not), the button order
(secondary/Cancel then primary), the spacing against the 8pt grid, and
the semantic role (`status` for ambient success and informative toasts,
`alert` for warnings and errors).

If production violates ADS, fix production or record the discrepancy —
never paper over it in the gallery. The gallery is only useful while it
renders exactly what ships. Findings from the current audit are at the
bottom of this file.

## Adding gallery tests

`tests/test_redline_overlay_gallery.py` enumerates the registry rather
than naming entries, so a new entry is covered by the existing suite the
moment it is registered: it must render, paint, name its dialog, declare
`aria-modal`, carry a source file and an ADS mapping, and — for toasts —
carry an icon, a title, a labelled close button and a role matching its
variant. Add a named check only for behaviour the enumeration cannot see,
following the checks around it.

```
python3 tests/test_redline_overlay_gallery.py
```

## ADS and accessibility findings from the audit

Recorded here rather than hidden behind the gallery.

**Fixed in production during this work:**

- The Add User picker could render a search-error state that nothing
  could reach: the directory lookup was not guarded, so a failure threw
  past the sequencer and left a stale spinner. It now takes the error
  branch the dialog was already built for, matching the Add members
  picker.
- `#rpFuncPopover` declared `role="dialog"` with no accessible name. It
  now points at the application heading it already renders.
- Redline reported the modal scrim as an unmapped component. It is part
  of the Modal's anatomy and now reports as one.

**Open, reported not worked around:**

- The Users and Roles filter drawers (`#fltDrawer`, `#rpFltDrawer`) are
  modal in behaviour — full-screen scrim, close button — but are plain
  `<aside>` elements with no `role="dialog"`, no accessible name and no
  focus containment. Adding the role alone would assert semantics the
  implementation does not honour, and adding focus management is a
  product change beyond this work, so both are registered as they ship.
- The application has no session-expired, permission-denied,
  network-error, retry or authentication dialog, and no generic
  network/timeout/retry/permission toast. This is a prototype with no
  network layer; none of those surfaces exist to register.
- Add User step 2 is a full page (`#addUsersPage`), not a modal, so its
  states belong to page redlining rather than the modal gallery.
- Add members submits synchronously, so it has no observable submitting
  state — only its submission error is reachable.
- The toast component enforces no maximum stack; `toast-stack-max`
  shows four, which is what the shortest supported viewport holds.
