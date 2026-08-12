/* ═══════════════════════════════════════════════════════════════════════
   Redline Mode — IAM / Ad Console V4.1 ONLY.
   ═══════════════════════════════════════════════════════════════════════
   ARCHITECTURE REFERENCE: this file is a direct adaptation of the proven
   Rate Card `redline.js` (`/Rate Card/redline.js`), reusing its core,
   already-working mechanics verbatim or near-verbatim:
     - iframe-based numeric-breakpoint viewport switching, centered in the
       workspace at its real, unscaled CSS pixel size — never shrunk to
       fit (`positionBreakpointPreview`, `setBreakpoint`)
     - the 4-pane dimming "hole" technique (`updateDimming`)
     - the SVG dimension-line + arrow-marker drawing helpers (`line`,
       `boundary`, `prepareSvg`)
     - the label placement + collision-avoidance engine (`labelPlacer`,
       `candidatesFor`, `boxesOverlap`, `clampPosition`)
     - integer rounding + 8pt helpers (`rounded`, `nearestEight`)
     - live DOM observation (`ResizeObserver` + `MutationObserver` +
       `requestAnimationFrame` debounced `schedule()`/`render()`)
     - hover/lock selection model, stale-selection cleanup
     - CSS rule-cache + "winning declaration" + `var(--token)` extraction
       for mapping a computed color back to an authored token
       (`buildRuleCache`, `findWinningDeclaration`, `extractColorSource`)
     - enable/disable lifecycle: focus save/restore, `localStorage`
       snapshot/restore, `AbortController`-scoped listener cleanup
     - the global `⌘D` / `Ctrl+D` shortcut handler with an `isEditable()`
       text-entry guard

   WHAT IS NEW / IAM-SPECIFIC (not present in Rate Card, built net-new
   per the IAM brief): the docked three-panel workspace chrome (toolbar +
   left breakpoint/mode panel + right grouped property inspector +
   selection breadcrumb), the ADS component-identification engine, the
   grouped Dimensions/Spacing/Colors/Typography/Borders inspector, and
   the 8pt-grid "actual → recommended" mismatch warning treatment for
   spacing properties. Rate Card's floating top-toolbar-only chrome and
   its separate Typography/Color toggle modes were intentionally not
   ported as-is; that information now always lives in the always-on
   right inspector for whatever is selected.

   ALSO IAM-SPECIFIC, added for the centering/containment architecture
   correction: "Current" mode reparents the real live DOM into a
   `.redline__live-app` host nested between the two docked side panels
   instead of overlaying chrome on top of the page at its original
   position (`mountLiveApp`/`unmountLiveApp`) — this is what makes the
   live UI genuinely render inside the centered canvas rather than being
   clipped behind the panels. The numeric-breakpoint iframe still reloads
   the same URL fresh (needed for a real per-breakpoint CSS viewport),
   so a small nav-state bridge (`captureNavState`/`restoreNavState`)
   replays the equivalent real clicks against the fresh document to land
   back on the same route/tab/entity instead of resetting to the User
   List. Rate Card has neither concern (its "Current" mode never had a
   left/right docked panel eating into the page, and its content isn't a
   multi-page in-memory SPA), so neither exists there.

   NOTHING here is wired into `public/v4/` — this file, `redline.css`,
   and their two references in `public/v4.1/index.html` are the ONLY
   changes for this feature; V4 is completely untouched.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";
  var PREVIEW_PARAM = "redlinePreview";

  var BREAKPOINTS = [
    { id: "1024", label: "1024", width: 1024, height: 768 },
    { id: "1280", label: "1280", width: 1280, height: 800 },
    { id: "1440", label: "1440", width: 1440, height: 900 },
    { id: "1920", label: "1920", width: 1920, height: 1080 },
    { id: "2560", label: "2560", width: 2560, height: 1440 }
  ];

  /* Trimmed copy of `ads-design-system/ads-components.json`'s `components`
     array (name/variants/sizes/states only). That JSON file lives outside
     `public/` (an authoring-only reference, not part of the deployed
     static site), so it cannot be `fetch()`-ed at runtime; this constant
     is the same authoritative vocabulary, inlined so component names,
     variants, sizes, and states reported by the inspector always come
     from the real ADS registry rather than invented labels. */
  var ADS_REGISTRY = {
    "Accordion": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus"] },
    "Alert": { variants: ["info", "success", "warning", "error"], sizes: [], states: ["rest", "hover", "active", "disabled", "focus"] },
    "Button": { variants: ["primary", "secondary", "tertiary", "ghost", "danger"], sizes: ["sm", "md", "lg"], states: ["rest", "hover", "active", "disabled", "focus"] },
    "Card": { variants: ["low", "medium", "high"], sizes: [], states: [] },
    "Checkbox": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus"] },
    "Radio Button": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus"] },
    "Dropdown": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus", "open"] },
    "Select": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus", "open", "filled"] },
    "Multi-Select": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus", "open"] },
    "Search": { variants: [], sizes: [], states: ["rest", "hover", "filled", "disabled", "focus"] },
    "Text Box": { variants: [], sizes: [], states: ["rest", "hover", "filled", "disabled", "focus"] },
    "Field": { variants: [], sizes: [], states: [] },
    "File Upload": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus", "drag-over", "uploading", "success", "error"] },
    "Modal": { variants: [], sizes: ["sm", "md", "lg"], states: ["rest", "open"] },
    "Sheet": { variants: [], sizes: ["sm", "md", "lg"], states: [] },
    "Popover": { variants: [], sizes: [], states: [] },
    "Tooltip": { variants: [], sizes: ["small", "large"], states: [] },
    "Toast": { variants: ["info", "success", "warning", "error"], sizes: [], states: [] },
    "Progress Bar": { variants: ["determinate", "indeterminate"], sizes: [], states: [] },
    "Skeleton": { variants: [], sizes: [], states: [] },
    "Table": { variants: [], sizes: [], states: [] },
    "Pagination": { variants: ["digit", "nav-prev", "nav-next", "ellipsis"], sizes: [], states: ["rest", "hover", "active", "disabled", "focus"] },
    "Navigation / NavItem": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus", "selected"] },
    "TopBarTab": { variants: [], sizes: [], states: ["rest", "hover", "active", "disabled", "focus", "selected"] },
    "Toggle": { variants: [], sizes: ["default", "compact"], states: ["rest", "hover", "active", "disabled", "focus"] },
    "Toggle Group": { variants: [], sizes: ["sm", "md", "lg"], states: ["rest", "hover", "active", "disabled", "focus", "selected"] },
    "Date Picker": { variants: [], sizes: [], states: ["rest", "hover", "filled", "disabled", "active"] }
  };

  var state = {
    active: false,
    root: null,
    stage: null,
    canvas: null,
    liveAppRoot: null,
    frameShell: null,
    frame: null,
    frameLoadingEl: null,
    frameDocument: null,
    leftPanel: null,
    rightPanel: null,
    breadcrumbEl: null,
    inspectorEl: null,
    sizeLabelEl: null,
    aborter: null,
    resizeObserver: null,
    mutationObserver: null,
    parentObserver: null,
    raf: 0,
    hovered: null,
    locked: null,
    lastFocus: null,
    breakpoint: "",
    measureMode: "clean",
    showMeasurements: true,
    showGridOverlay: false,
    renderCount: 0,
    storageSnapshot: null,
    currentListenersAttached: false,
    colorSheetCache: null,
    colorSheetCacheDoc: null,
    inspectorTargetKey: null,
    mainScrollX: 0,
    mainScrollY: 0,
    navSnapshot: null,
    panelOpen: { left: false, right: false },
    /* Round 29 (2026-08-11) — robust breakpoint/state architecture.
       `previewScale`: the current visual scale-factor applied to the
       numeric-breakpoint preview (1 = unscaled; <1 when the preset is
       larger than the available workspace). `frameReady` tracks
       whether the single, eagerly-created preview iframe has finished
       its (one-time, per Redline session) load + state restore, so a
       fast breakpoint click before that completes shows a loading
       placeholder instead of a blank/half-initialized document.
       `frameLoadStarted` guards the eager preload in `enable()` from
       ever re-triggering a second load. `restoreRetryTimer` is the
       in-flight retry-poll handle for `restoreNavState` (see
       `attachFrame`). `lockedKey`/`hoveredKey` hold a stable selector
       for the current selection so it can survive a document swap
       (Current \u2194 breakpoint, or first breakpoint load) instead of
       being unconditionally cleared. */
    previewScale: 1,
    frameReady: false,
    frameLoadStarted: false,
    restoreRetryTimer: 0,
    /* Overlay galleries (see the "Preview mode" block below).
       `previewMode` is the explicit three-way mode; `galleryEntries` is
       the registry snapshot read from the preview document;
       `galleryToken` retires a mount that is still settling when the
       user has already moved on; `navBaseline` is the source page's nav
       state, replayed into the iframe when a gallery is closed. */
    previewMode: "page",
    galleryBar: null,
    galleryEntries: [],
    galleryIndex: 0,
    galleryToken: 0,
    galleryError: "",
    pendingGalleryEnter: false,
    navBaseline: null,
    restoringNav: 0
  };

  /* ─── Small generic utilities (platform / editability / DOM factory) ─── */

  function isMac() {
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform || "")
      || (navigator.userAgentData && navigator.userAgentData.platform === "macOS");
  }

  function shortcutLabel() {
    return isMac() ? "\u2318D" : "Ctrl+D";
  }

  function isEditable(target) {
    if (!target || target.nodeType !== 1) return false;
    return Boolean(target.closest(
      "input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox']"
    ));
  }

  function element(tag, className, attributes) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    Object.keys(attributes || {}).forEach(function (name) {
      node.setAttribute(name, attributes[name]);
    });
    node.setAttribute("data-redline-ui", "");
    return node;
  }

  function svgNode(tag, attrs) {
    var node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (name) { node.setAttribute(name, attrs[name]); });
    return node;
  }

  function rounded(value) {
    return Math.round(Number(value) || 0);
  }

  function nearestEight(value) {
    return Math.round((Number(value) || 0) / 8) * 8;
  }

  function px(value) { return rounded(value) + "px"; }

  /* ═══════════════════════════════════════════════════════════════════
     Root workspace DOM
     ═══════════════════════════════════════════════════════════════════ */

  function buildBreakpointButton(preset) {
    var pressed = preset.id === "current";
    var btn = element("button", "redline__bp-btn", {
      type: "button",
      "data-redline-action": "breakpoint:" + preset.id,
      "aria-pressed": pressed ? "true" : "false"
    });
    var label = document.createElement("span");
    label.textContent = preset.label;
    btn.appendChild(label);
    if (preset.width) {
      var size = document.createElement("span");
      size.className = "redline__bp-btn-size";
      size.textContent = preset.width + " \u00D7 " + preset.height;
      btn.appendChild(size);
    }
    return btn;
  }

  function buildRoot() {
    var root = element("div", "redline", {
      role: "application",
      "aria-label": "Redline inspection mode",
      "data-breakpoint-active": "false"
    });

    /* Topbar */
    var topbar = element("div", "redline__topbar", { role: "toolbar", "aria-label": "Redline controls" });
    var title = element("span", "redline__topbar-title");
    title.textContent = "Redline Mode";
    var badge = element("span", "redline__topbar-badge", { "aria-hidden": "true" });
    badge.textContent = "IAM v4.1";
    var sizeLabel = element("span", "redline__topbar-size", { "data-redline-size": "" });
    sizeLabel.textContent = "Current";
    var close = element("button", "redline__close", {
      type: "button",
      "data-redline-action": "close",
      "aria-label": "Close Redline Mode",
      title: "Close Redline Mode (Esc)"
    });
    close.innerHTML = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>";
    /* Narrow-shell panel toggles (spec: "Responsive Redline shell" —
       below the desktop breakpoint the docked side panels become
       collapsible overlays; these two buttons are the "clear controls
       for reopening a collapsed panel", only shown via CSS at narrow
       browser widths). */
    var leftToggle = element("button", "redline__panel-toggle redline__panel-toggle--left", {
      type: "button", "data-redline-action": "panel:left",
      "aria-expanded": "false", "aria-label": "Show breakpoint and mode controls"
    });
    leftToggle.textContent = "Controls";
    var rightToggle = element("button", "redline__panel-toggle redline__panel-toggle--right", {
      type: "button", "data-redline-action": "panel:right",
      "aria-expanded": "false", "aria-label": "Show component inspector"
    });
    rightToggle.textContent = "Inspector";
    topbar.appendChild(title);
    topbar.appendChild(badge);
    topbar.appendChild(leftToggle);
    topbar.appendChild(rightToggle);
    topbar.appendChild(sizeLabel);
    topbar.appendChild(close);

    /* Body: left panel / stage / right panel */
    var body = element("div", "redline__body");

    var left = element("aside", "redline__panel redline__panel--left", { "aria-label": "Breakpoints and inspection modes" });

    var bpSection = element("section", "redline__section");
    var bpTitle = element("h3", "redline__section-title");
    bpTitle.textContent = "Breakpoint";
    var bpGroup = element("div", "redline__breakpoints", { role: "group", "aria-label": "Viewport width" });
    bpGroup.appendChild(buildBreakpointButton({ id: "current", label: "Current" }));
    BREAKPOINTS.forEach(function (preset) { bpGroup.appendChild(buildBreakpointButton(preset)); });
    bpSection.appendChild(bpTitle);
    bpSection.appendChild(bpGroup);

    var modeSection = element("section", "redline__section");
    var modeTitle = element("h3", "redline__section-title");
    modeTitle.textContent = "Measurement mode";
    var modeToggle = element("div", "redline__mode-toggle", { role: "radiogroup", "aria-label": "Measurement mode" });
    var cleanBtn = element("button", "redline__mode-btn", { type: "button", role: "radio", "aria-checked": "true", "data-redline-action": "mode:clean" });
    cleanBtn.textContent = "Clean Spec";
    var gridBtn = element("button", "redline__mode-btn", { type: "button", role: "radio", "aria-checked": "false", "data-redline-action": "mode:grid" });
    gridBtn.textContent = "8pt Grid";
    modeToggle.appendChild(cleanBtn);
    modeToggle.appendChild(gridBtn);
    var modeHint = element("p", "redline__mode-hint", { "data-redline-mode-hint": "" });
    modeHint.textContent = "Shows actual rounded values.";
    modeSection.appendChild(modeTitle);
    modeSection.appendChild(modeToggle);
    modeSection.appendChild(modeHint);

    var annSection = element("section", "redline__section");
    var annTitle = element("h3", "redline__section-title");
    annTitle.textContent = "Annotations";
    var measureLabel = element("label", "redline__checkbox-row");
    var measureCb = element("input", "", { type: "checkbox", "data-redline-action": "toggle:measurements" });
    measureCb.checked = true;
    measureLabel.appendChild(measureCb);
    measureLabel.appendChild(document.createTextNode("Show measurement lines"));
    var gridLabel = element("label", "redline__checkbox-row");
    var gridCb = element("input", "", { type: "checkbox", "data-redline-action": "toggle:gridoverlay" });
    gridLabel.appendChild(gridCb);
    gridLabel.appendChild(document.createTextNode("Show 8pt grid overlay"));
    annSection.appendChild(annTitle);
    annSection.appendChild(measureLabel);
    annSection.appendChild(gridLabel);

    var crumbSection = element("section", "redline__section redline__section--breadcrumb");
    var crumbTitle = element("h3", "redline__section-title");
    crumbTitle.textContent = "Selection";
    var crumbEl = element("div", "redline__breadcrumb", { "data-redline-breadcrumb": "", "aria-label": "Selection hierarchy" });
    var crumbEmpty = element("p", "redline__breadcrumb-empty");
    crumbEmpty.textContent = "Nothing selected.";
    crumbEl.appendChild(crumbEmpty);
    crumbSection.appendChild(crumbTitle);
    crumbSection.appendChild(crumbEl);

    /* Overlays: two navigation rows, nothing else. Deliberately no
       overlay names, no counts and no previous/next here — the sidebar
       is the doorway, the gallery toolbar above the preview is where
       browsing happens. */
    var overlaySection = element("section", "redline__section redline__section--overlays");
    var overlayTitle = element("h3", "redline__section-title");
    overlayTitle.textContent = "Overlays";
    var overlayGroup = element("div", "redline__nav-rows", { role: "group", "aria-label": "Overlay galleries" });
    overlayGroup.appendChild(buildGalleryNavRow("modal-gallery", "Modals", "Open modal gallery"));
    overlayGroup.appendChild(buildGalleryNavRow("toast-gallery", "Toasts", "Open toast gallery"));
    overlaySection.appendChild(overlayTitle);
    overlaySection.appendChild(overlayGroup);

    left.appendChild(bpSection);
    left.appendChild(modeSection);
    left.appendChild(annSection);
    left.appendChild(crumbSection);
    left.appendChild(overlaySection);

    /* Center column: the gallery toolbar sits ABOVE the stage, outside
       `.redline__canvas` entirely, so gallery controls can never be
       hit-tested, selected or measured as product components. */
    var center = element("div", "redline__center");
    var galleryBar = buildGalleryBar();
    var stage = element("div", "redline__stage", { "data-redline-stage": "" });
    var canvas = element("div", "redline__canvas", { "data-redline-canvas": "" });
    /* The live-app host (a plain, non-`[data-redline-ui]` div housing the
       real, reparented application DOM for "Current" mode) is created and
       inserted on demand by `mountLiveApp()` — it holds the actual live
       document content, not synthetic chrome, so it must never carry the
       `data-redline-ui` marker the rest of this workspace uses to exclude
       itself from inspection/mutation-observation. */
    var frameShell = element("div", "redline__preview-shell", { hidden: "" });
    var frame = element("iframe", "redline__preview", { title: "IAM live preview", src: "about:blank", hidden: "" });
    /* Round 29 (2026-08-11) — see the CSS comment on
       `.redline__preview-loading`: covers the brief one-time load
       window so the raw iframe is never shown blank/mid-load. */
    var frameLoading = element("div", "redline__preview-loading", { "aria-hidden": "true", hidden: "" });
    var frameLoadingSpinner = element("span", "redline__preview-loading-spinner");
    var frameLoadingText = element("span");
    frameLoadingText.textContent = "Loading preview\u2026";
    frameLoading.appendChild(frameLoadingSpinner);
    frameLoading.appendChild(frameLoadingText);
    frameShell.appendChild(frame);
    frameShell.appendChild(frameLoading);
    canvas.appendChild(frameShell);
    for (var i = 0; i < 4; i += 1) {
      canvas.appendChild(element("div", "redline__dim", { "data-redline-dim": String(i), "aria-hidden": "true" }));
    }
    canvas.appendChild(element("div", "redline__grid", { "data-redline-grid": "", "aria-hidden": "true", hidden: "" }));
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("class", "redline__svg");
    svg.setAttribute("data-redline-ui", "");
    svg.setAttribute("data-redline-svg", "");
    svg.setAttribute("aria-hidden", "true");
    canvas.appendChild(svg);
    canvas.appendChild(element("div", "redline__labels", { "data-redline-labels": "", "aria-hidden": "true" }));
    stage.appendChild(canvas);
    /* Backdrop click on the stage (outside either panel) is how a
       narrow-shell panel overlay gets dismissed before the user can
       select covered UI — see `onWorkspaceClick`. */

    var right = element("aside", "redline__panel redline__panel--right", { "aria-label": "Selected component inspector" });
    var inspector = element("div", "redline__inspector", { "data-redline-inspector": "" });
    var inspectorEmpty = element("p", "redline__inspector-empty");
    inspectorEmpty.textContent = "Hover or click a component in the preview to inspect it. Click again to clear the selection.";
    inspector.appendChild(inspectorEmpty);
    right.appendChild(inspector);

    center.appendChild(galleryBar.bar);
    center.appendChild(stage);

    body.appendChild(left);
    body.appendChild(center);
    body.appendChild(right);

    root.appendChild(topbar);
    root.appendChild(body);
    root.appendChild(element("div", "redline__status", { role: "status", "aria-live": "polite", "data-redline-status": "" }));

    return {
      root: root, stage: stage, canvas: canvas, frameShell: frameShell, frame: frame,
      frameLoadingEl: frameLoading,
      leftPanel: left, rightPanel: right, breadcrumbEl: crumbEl,
      inspectorEl: inspector, sizeLabelEl: sizeLabel,
      galleryBar: galleryBar
    };
  }

  /* One sidebar row per gallery. A single `<button>` spans the whole row
     (so the entire row is the hit target) and ends in a right-pointing
     navigation chevron, because activating it enters a gallery rather
     than expanding a section in place. */
  function buildGalleryNavRow(mode, label, accessibleName) {
    var btn = element("button", "redline__nav-row", {
      type: "button",
      "data-redline-action": "previewmode:" + mode,
      "aria-label": accessibleName,
      "aria-pressed": "false"
    });
    var text = document.createElement("span");
    text.className = "redline__nav-row-label";
    text.textContent = label;
    var chevron = document.createElementNS(SVG_NS, "svg");
    chevron.setAttribute("class", "redline__nav-row-chevron");
    chevron.setAttribute("viewBox", "0 0 16 16");
    chevron.setAttribute("width", "16");
    chevron.setAttribute("height", "16");
    chevron.setAttribute("aria-hidden", "true");
    chevron.appendChild(svgNode("path", {
      d: "M6 3.5 10.5 8 6 12.5", fill: "none", stroke: "currentColor",
      "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
    btn.appendChild(text);
    btn.appendChild(chevron);
    return btn;
  }

  function galleryIconButton(action, accessibleName, path) {
    var btn = element("button", "redline__gallery-nav-btn", {
      type: "button", "data-redline-action": action, "aria-label": accessibleName, title: accessibleName
    });
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("aria-hidden", "true");
    svg.appendChild(svgNode("path", {
      d: path, fill: "none", stroke: "currentColor",
      "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
    btn.appendChild(svg);
    return btn;
  }

  function buildGalleryBar() {
    var bar = element("div", "redline__gallery-bar", {
      "data-redline-gallery-bar": "", role: "toolbar", "aria-label": "Overlay gallery navigation", hidden: ""
    });
    var back = element("button", "redline__gallery-back", {
      type: "button", "data-redline-action": "previewmode:page", "aria-label": "Return to current page"
    });
    back.textContent = "Back to page";

    var nav = element("div", "redline__gallery-nav");
    var prev = galleryIconButton("gallery:prev", "Previous modal", "M10 3.5 5.5 8 10 12.5");
    var title = element("span", "redline__gallery-title", { "data-redline-gallery-title": "" });
    var counter = element("span", "redline__gallery-count", { "data-redline-gallery-count": "" });
    var next = galleryIconButton("gallery:next", "Next modal", "M6 3.5 10.5 8 6 12.5");
    nav.appendChild(prev);
    nav.appendChild(title);
    nav.appendChild(counter);
    nav.appendChild(next);

    var tail = element("div", "redline__gallery-tail");
    var frozen = element("span", "redline__gallery-frozen", { "data-redline-gallery-frozen": "", hidden: "" });
    frozen.textContent = "Frozen for inspection";
    var reset = element("button", "redline__gallery-reset", {
      type: "button", "data-redline-action": "gallery:reset", "aria-label": "Reset this overlay"
    });
    reset.textContent = "Reset";
    tail.appendChild(frozen);
    tail.appendChild(reset);

    bar.appendChild(back);
    bar.appendChild(nav);
    bar.appendChild(tail);
    return {
      bar: bar, back: back, prev: prev, next: next,
      titleEl: title, countEl: counter, frozenEl: frozen, resetEl: reset
    };
  }

  function setStatus(message) {
    var status = state.root && state.root.querySelector("[data-redline-status]");
    if (status) status.textContent = message;
  }

  /* ═══════════════════════════════════════════════════════════════════
     Numeric-breakpoint viewport switching (adapted from Rate Card's
     fitBreakpointPreview/setBreakpoint, but centered against the real
     `.redline__stage` workspace — never the full browser window — and
     never scaled down: an oversized breakpoint grows the canvas and lets
     the stage scroll instead of shrinking the preview).
     ═══════════════════════════════════════════════════════════════════ */

  function isPreview() {
    return new URLSearchParams(location.search).get(PREVIEW_PARAM) === "1";
  }

  /* ═══════════════════════════════════════════════════════════════════
     Preview mode

     Redline shows exactly one of three things in its center workspace,
     and which one it is has to be stated, never inferred from "which
     elements happen to be visible":

       page          the real application, reparented (Current) or
                     reloaded into the breakpoint iframe
       modal-gallery every registered modal/dialog state
       toast-gallery every registered toast state

     Both galleries render in the `?redlinePreview=1` iframe — a second,
     disposable instance of the same app that already exists for numeric
     breakpoints. That single decision is what makes "gallery state must
     not mutate the real application" true by construction rather than by
     careful bookkeeping: the source page is never even mounted while a
     gallery is open, so returning to Current page restores it exactly.
     ═══════════════════════════════════════════════════════════════════ */

  function isGallery() {
    return state.previewMode === "modal-gallery" || state.previewMode === "toast-gallery";
  }

  function galleryKind() {
    return state.previewMode === "toast-gallery" ? "toast" : "modal";
  }

  /* Whether the inspected document is the preview iframe rather than the
     reparented live app. True for every numeric breakpoint, and for both
     galleries at every breakpoint including "Current". */
  function usingFrame() {
    return Boolean(state.breakpoint) || isGallery();
  }

  function galleryApi() {
    if (!state.frame) return null;
    try {
      var api = state.frame.contentWindow && state.frame.contentWindow.IamOverlayGallery;
      return api && api.version === 1 ? api : null;
    } catch (_) { return null; }
  }

  function previewUrl() {
    var url = new URL(location.href);
    url.searchParams.set(PREVIEW_PARAM, "1");
    return url.toString();
  }

  function activeBreakpoint() {
    return BREAKPOINTS.filter(function (item) { return item.id === state.breakpoint; })[0] || null;
  }

  /* Symmetric breathing room around a numeric-breakpoint canvas so its
     left/right (and top/bottom) edges are reachable by scrolling even
     when the canvas is larger than the available workspace — "Use
     symmetric workspace padding around the canvas" / "Ensure both the
     left and right edges of the canvas can be reached." Must match the
     `inset: 20px` on `.redline__live-app` in redline.css so Current mode
     and numeric-breakpoint mode present an identical frame. */
  var CANVAS_GUTTER = 20;

  /* Centers a fixed-size numeric-breakpoint preview inside the available
     center-workspace (`.redline__stage`, minus the two docked side
     panels — never the full browser viewport).

     Round 29 (2026-08-11) — "separate viewport resizing from canvas
     scaling": the iframe's own `width`/`height` (its LOGICAL CSS
     viewport, what `@media` queries evaluate against) always stays
     pinned to the preset's exact pixel size, full stop — scaling never
     touches those. Only the *visual* presentation is ever scaled: when
     the preset is larger than the available workspace, a CSS
     `transform: scale(...)` shrinks how `.redline__preview-shell` (the
     iframe's positioned wrapper) is PAINTED, without changing the
     iframe's intrinsic size or its document's `innerWidth`/media-query
     evaluation at all. This keeps the entire viewport visible and
     centered by default (no scrolling needed to reach any edge) while
     `mapRect()` below still reports true, unscaled logical pixels for
     every measurement. If the preset already fits, `previewScale` is
     1 and nothing here differs from the original unscaled behavior.
     The stage keeps `overflow: auto` regardless, as a fallback for
     pathologically small workspaces where even the floor scale still
     doesn't fit. */
  /* The logical viewport the preview iframe is given. Numeric
     breakpoints use their preset; a gallery on "Current" uses the real
     browser viewport, so the ADS component evaluates the same media
     queries it would on the user's own screen. */
  function previewPreset() {
    var preset = activeBreakpoint();
    if (preset) return preset;
    if (!isGallery()) return null;
    var natural = nativeViewportSize();
    return { id: "current", label: "Current", width: natural.width, height: natural.height };
  }

  function positionBreakpointPreview(recenter) {
    var preset = previewPreset();
    if (!preset || !state.canvas || !state.frame || !state.frameShell || !state.stage) return;
    /* Neutralize the canvas's PREVIOUS size (Current mode's natural-
       viewport size, or a different, larger breakpoint) before measuring
       the stage. Otherwise a leftover oversized canvas can still be
       forcing a scrollbar at the exact instant `clientWidth` is read
       here, silently shrinking that reading and throwing off the
       centering math by exactly the scrollbar's width — every consumer
       of a stale measurement below would look almost-but-not-quite
       centered until the next resize-triggered recalculation happened
       to correct it. */
    state.canvas.style.width = "100%";
    state.canvas.style.height = "100%";
    var stageWidth = state.stage.clientWidth;
    var stageHeight = state.stage.clientHeight;
    var availWidth = Math.max(0, stageWidth - CANVAS_GUTTER * 2);
    var availHeight = Math.max(0, stageHeight - CANVAS_GUTTER * 2);
    var scale = 1;
    if (availWidth > 0 && availHeight > 0) {
      scale = Math.min(1, availWidth / preset.width, availHeight / preset.height);
    }
    /* Sane floor so a pathologically tiny workspace never shrinks the
       preview into an unusable sliver — the stage's own scroll/pan
       (`overflow: auto`) is the fallback past this point, per spec
       ("allow panning or scrolling when necessary"). */
    scale = Math.max(scale, 0.25);
    state.previewScale = scale;
    var visualWidth = preset.width * scale;
    var visualHeight = preset.height * scale;
    var canvasWidth = Math.max(stageWidth, visualWidth + CANVAS_GUTTER * 2);
    var canvasHeight = Math.max(stageHeight, visualHeight + CANVAS_GUTTER * 2);
    var left = Math.round((canvasWidth - visualWidth) / 2);
    var top = CANVAS_GUTTER;

    state.canvas.style.width = canvasWidth + "px";
    state.canvas.style.height = canvasHeight + "px";
    /* Logical viewport — never scaled. */
    state.frame.style.width = preset.width + "px";
    state.frame.style.height = preset.height + "px";
    state.frameShell.style.width = preset.width + "px";
    state.frameShell.style.height = preset.height + "px";
    /* Visual presentation — `left`/`top` are the shell's pre-transform
       (logical) position; `transform-origin: 0 0` (set in redline.css)
       means scaling shrinks the box toward that same top-left corner,
       so it still lands exactly at `[left, top]` on screen post-scale,
       which is what the `visualWidth`/`visualHeight`-based centering
       math above assumes. */
    state.frameShell.style.left = left + "px";
    state.frameShell.style.top = top + "px";
    state.frameShell.style.transform = scale < 1 ? "scale(" + scale + ")" : "";

    if (recenter) {
      /* "Sensible initial scroll positioning so the top-center of the
         page is visible when switching breakpoints": center the stage's
         horizontal scroll on the canvas (symmetric gutters either side
         make this the preview's horizontal center too) and always start
         scrolled to the very top vertically, per "top-align it within
         the workspace" / "must always be able to see... the top". When
         scaled to fit, the canvas equals the stage exactly and this is
         already a no-op scroll. */
      state.stage.scrollLeft = Math.max(0, (canvasWidth - stageWidth) / 2);
      state.stage.scrollTop = 0;
    }
  }

  /* The app has no container-responsive breakpoints of its own — every
     media query in `styles.css` keys off the real browser viewport
     (`document.documentElement.clientWidth/Height`), not whatever width
     its DOM happens to be given. Reads live (not cached) so a real
     browser resize while Current mode is active is picked up. */
  function nativeViewportSize() {
    return {
      width: document.documentElement.clientWidth || window.innerWidth || 1440,
      height: document.documentElement.clientHeight || window.innerHeight || 900
    };
  }

  /* Sizes/positions the reparented live-app host for "Current" mode.
     Root-cause fix: earlier revisions stretched the host to exactly fill
     whatever room the two docked side panels left (100% of the stage).
     That silently handed the app a DOM width narrower than the real
     browser viewport its CSS media queries evaluate against, so
     fixed-column tables and other non-fluid content kept rendering at
     their full (viewport-width) size and overflowed straight out of the
     narrower host — the "content starts behind/under the panel" bug.
     The app's true "natural width" is simply the real browser viewport
     it was already rendering at, so the host is now given exactly that
     size (like a numeric breakpoint, just sourced from the live window
     instead of a preset) and centered — using the same grow-and-scroll
     canvas as `positionBreakpointPreview` — inside the center workspace.
     This guarantees the CSS the app actually applies (viewport-media-
     query-driven) always matches the box it's actually laid out in, so
     "keep the page at its natural UI scale" holds with zero drift, and
     "if wider than the workspace, scroll instead of shrinking" (the
     defined overflow behavior) covers every case where the docked panels
     leave less room than the real window is wide. */
  function positionLiveApp(recenter) {
    if (!state.canvas || !state.stage || !state.liveAppRoot) return;
    /* Same defensive reset as `positionBreakpointPreview` — neutralize
       whatever size the canvas previously had (e.g. a larger numeric
       breakpoint) before measuring the stage, so a leftover scrollbar
       from the old size can't stale-shrink this `clientWidth` read. */
    state.canvas.style.width = "100%";
    state.canvas.style.height = "100%";
    var natural = nativeViewportSize();
    var stageWidth = state.stage.clientWidth;
    var stageHeight = state.stage.clientHeight;
    var canvasWidth = Math.max(stageWidth, natural.width + CANVAS_GUTTER * 2);
    var canvasHeight = Math.max(stageHeight, natural.height + CANVAS_GUTTER * 2);
    var left = Math.round((canvasWidth - natural.width) / 2);
    var top = CANVAS_GUTTER;

    state.canvas.style.width = canvasWidth + "px";
    state.canvas.style.height = canvasHeight + "px";
    state.liveAppRoot.style.width = natural.width + "px";
    state.liveAppRoot.style.height = natural.height + "px";
    state.liveAppRoot.style.left = left + "px";
    state.liveAppRoot.style.top = top + "px";

    /* Initial scroll positioning, once the canvas is wider than the
       stage: unlike a numeric breakpoint switch (where "top-center"
       is the sensible default — see `positionBreakpointPreview`),
       Current mode's own spec is explicit and unconditional — "the left
       edge of the page must remain visible" — because that edge is the
       real app's own logo/sidebar/navigation, not an arbitrary side of
       an anonymous canvas. Anchoring scroll to the canvas's left gutter
       (rather than centering) is what keeps that chrome on-screen by
       default instead of scrolled away to reveal the middle of a table. */
    if (recenter) {
      state.stage.scrollLeft = 0;
      state.stage.scrollTop = 0;
    }
  }

  /* ═══════════════════════════════════════════════════════════════════
     "Current" mode live-app hosting.

     Root cause of the reported centering/clipping bug: the previous
     implementation never actually relocated the live page — it left the
     real `document.body` mounted at its normal position and painted a
     transparent "hole" over it, so whatever real content happened to sit
     at the stage's on-screen coordinates showed through, while content
     to the left of the stage (the app's own navbar/sidebar) sat hidden
     behind the opaque left panel. There was no real containing block for
     the app's `position:fixed` navbar/sidebar/toasts either, so nothing
     about the app was actually confined to the workspace.

     The fix: physically MOVE (not clone) every real body child into a
     dedicated `.redline__live-app` host nested inside `.redline__canvas`,
     in between the two docked side panels. Moving (rather than cloning)
     preserves every event listener and every closure's DOM references —
     this is the exact same live document, state and all, just reparented
     — which is what makes "current route/tab/filters/scroll/modal state"
     preservation automatic instead of something that has to be
     hand-reconstructed. `contain: layout` on the host (see redline.css)
     makes it the CSS containing block for `position: fixed` descendants,
     so the app's own fixed navbar/sidebar/toast-container/modal-scrims
     become fixed to *this host's* box instead of escaping to the real
     browser window — solving "fixed application navbar/sidebar escaping
     the preview coordinate system" and "modals must center over the
     application preview" without touching a single line of the app's own
     CSS or JS. The host also becomes the page's own scroll container
     (`overflow:auto`), so `position: sticky` descendants (the real
     `.nav`) keep working exactly as they did in the un-redlined page.
     ═══════════════════════════════════════════════════════════════════ */

  function mountLiveApp() {
    if (state.liveAppRoot || !state.canvas) return;
    var wrapper = document.createElement("div");
    wrapper.className = "redline__live-app";
    wrapper.setAttribute("data-redline-live-app", "");
    var frag = document.createDocumentFragment();
    while (document.body.firstChild) frag.appendChild(document.body.firstChild);
    wrapper.appendChild(frag);
    state.canvas.insertBefore(wrapper, state.canvas.firstChild);
    state.liveAppRoot = wrapper;
    /* NOTE: sizing/centering (`positionLiveApp`) and restoring the
       wrapper's own internal scroll position both require layout, which
       only exists once `state.root` is actually connected to `document`
       — at the point `mountLiveApp` runs (see `enable()`) it never is
       yet, so both are deferred to right after `document.body.appendChild
       (state.root)` instead of being done here. */
  }

  function unmountLiveApp() {
    var wrapper = state.liveAppRoot;
    if (!wrapper) return;
    var frag = document.createDocumentFragment();
    while (wrapper.firstChild) frag.appendChild(wrapper.firstChild);
    document.body.appendChild(frag);
    wrapper.remove();
    state.liveAppRoot = null;
  }

  /* ═══════════════════════════════════════════════════════════════════
     Numeric-breakpoint state bridge.

     The iframe used for a genuine responsive CSS viewport (needed so
     real `@media` queries evaluate against the selected width — a
     reparented div can't do this, only a true separate browsing context
     can) necessarily starts a fresh document load of the same URL. This
     app has no URL/hash-based router (every route/tab/modal is in-memory
     JS state), so a naive fresh load always lands back on the default
     Internal Users list — the exact "navigate the user back to the User
     List" regression the brief calls out. `captureNavState`/
     `restoreNavState` are a best-effort bridge across that reload: they
     read the small set of DOM signals the app itself already exposes for
     "what page/tab/entity is open" and replay the equivalent real clicks
     inside the freshly-loaded iframe, so switching to a numeric
     breakpoint lands on the same page instead of resetting it. (Current
     mode needs none of this — it never reloads anything, see
     `mountLiveApp` above.)
     ═══════════════════════════════════════════════════════════════════ */

  /* Generic, page-agnostic collapsible-section marker attributes. Every
     top-level card header (`data-cr-toggle`, `data-au-toggle`), nested
     accordion header (`data-cr-app-toggle`), and permissions-module
     header (`data-module-toggle`) in the app already exposes its
     expanded/collapsed state the same way — a real toggle control with
     `aria-expanded` — regardless of which page it lives on. Capturing/
     restoring against this shared attribute list (rather than a
     per-page "if Edit Role do X" branch) is what keeps this mechanism a
     single, uniform system rather than a collection of page-specific
     workarounds; any future collapsible section that reuses one of
     these attributes is covered automatically. */
  var TOGGLE_MARKER_ATTRS = ["data-cr-toggle", "data-au-toggle", "data-cr-app-toggle", "data-module-toggle"];

  function toggleMarkerSelector() {
    return TOGGLE_MARKER_ATTRS.map(function (attr) { return "[" + attr + "][aria-expanded]"; }).join(",");
  }

  /* A stable-enough key for a toggle header across two different
     `document`s (the live app vs. a freshly-loaded iframe): the id of
     its nearest ancestor with one (every card/page container already
     has one) plus which marker attribute it carries, plus its position
     among same-key siblings in document order — robust because the
     restored document renders the exact same record/page, so matching
     structural elements appear in the same order. */
  function captureToggleStates(doc) {
    var counts = {};
    var out = [];
    var nodes = doc.querySelectorAll(toggleMarkerSelector());
    for (var i = 0; i < nodes.length; i += 1) {
      var el = nodes[i];
      var markerAttr = TOGGLE_MARKER_ATTRS.filter(function (a) { return el.hasAttribute(a); })[0];
      var idAncestor = el.closest("[id]");
      var groupKey = (idAncestor ? idAncestor.id : "") + "|" + markerAttr;
      var index = counts[groupKey] || 0;
      counts[groupKey] = index + 1;
      out.push({ groupKey: groupKey, index: index, expanded: el.getAttribute("aria-expanded") === "true" });
    }
    return out;
  }

  function restoreToggleStates(doc, states) {
    if (!states || !states.length) return;
    var counts = {};
    var nodes = doc.querySelectorAll(toggleMarkerSelector());
    for (var i = 0; i < nodes.length; i += 1) {
      var el = nodes[i];
      var markerAttr = TOGGLE_MARKER_ATTRS.filter(function (a) { return el.hasAttribute(a); })[0];
      var idAncestor = el.closest("[id]");
      var groupKey = (idAncestor ? idAncestor.id : "") + "|" + markerAttr;
      var index = counts[groupKey] || 0;
      counts[groupKey] = index + 1;
      var wanted = null;
      for (var j = 0; j < states.length; j += 1) {
        if (states[j].groupKey === groupKey && states[j].index === index) { wanted = states[j]; break; }
      }
      if (!wanted) continue;
      var isExpanded = el.getAttribute("aria-expanded") === "true";
      /* Use a real click (the header's own toggle handler), not a
         direct attribute write — this app's collapse/expand visuals are
         driven by a class the click handler also flips (`.collapsed`,
         `.cr-app-section--collapsed`, etc.), not by `[aria-expanded]`
         itself, so only replaying the actual interaction reliably
         reproduces the visual state, not just the ARIA one. */
      if (isExpanded !== wanted.expanded) { try { el.click(); } catch (_) {} }
    }
  }

  /* Every confirmation/informational dialog in the app shares one
     structural convention: a `.cr-confirm-backdrop` wrapper (identified
     by a stable id) that toggles a `hidden` attribute. Detecting/
     restoring "is any dialog currently open, and which" against that
     single shared convention is — again — one generic mechanism, not
     an enumeration of every individual modal's own open/close logic. */
  function captureOpenModal(doc) {
    var backdrops = doc.querySelectorAll(".cr-confirm-backdrop[id]");
    for (var i = 0; i < backdrops.length; i += 1) {
      if (!backdrops[i].hasAttribute("hidden")) {
        return { id: backdrops[i].id, html: backdrops[i].innerHTML };
      }
    }
    return null;
  }

  /* Restoring a dialog's exact rendered markup (rather than trying to
     re-derive and replay whatever page-specific business parameters
     originally opened it — a role id, a team member, an app key, etc.)
     is the one part of this bridge that is a deliberate, generic
     compromise: it guarantees the dialog is visibly present, with its
     real captured content, instead of vanishing or resetting — the
     core "must never disappear" requirement — at the cost of the
     dialog's own primary/destructive action button not being
     re-wired (its original click handler belonged to the source
     document's now-detached element, and safely re-synthesizing it
     generically, for an arbitrary dialog, isn't possible without
     coupling this file back to each dialog's specific logic). The
     universally-safe close affordances (the `\u00d7` icon, and any
     "Cancel"-labelled action — every dialog has exactly one of each)
     are re-wired generically so the dialog can still always be
     dismissed. */
  function restoreOpenModal(doc, modalSnap) {
    if (!modalSnap || !modalSnap.id) return;
    var backdrop = doc.getElementById(modalSnap.id);
    if (!backdrop) return;
    try {
      backdrop.innerHTML = modalSnap.html;
      backdrop.removeAttribute("hidden");
      var closers = backdrop.querySelectorAll('.cr-confirm-close, [id$="Cancel"]');
      for (var i = 0; i < closers.length; i += 1) {
        closers[i].addEventListener("click", function (e) {
          e.preventDefault();
          backdrop.setAttribute("hidden", "");
        });
      }
      backdrop.addEventListener("click", function (e) {
        if (e.target === backdrop) backdrop.setAttribute("hidden", "");
      });
    } catch (_) {}
  }

  function captureNavState(doc) {
    function byId(id) { return doc.getElementById(id); }
    function isVisible(el) { return Boolean(el) && el.style.display !== "none"; }
    var snap = { tab: "users", view: "list", key: null, internalExternal: null, scrollX: 0, scrollY: 0, toggles: null, modal: null };

    if (isVisible(byId("teamsPanel"))) snap.tab = "teams";
    else if (isVisible(byId("rolesPanel"))) snap.tab = "roles";

    var editTeamPage = byId("editTeamPage");
    var createRolePage = byId("createRolePage");
    var addUsersPage = byId("addUsersPage");

    if (isVisible(editTeamPage)) {
      snap.view = "editTeam";
      var tmName = byId("tmName");
      snap.key = tmName ? tmName.value : null;
    } else if (isVisible(createRolePage)) {
      var crRoleName = byId("crRoleName");
      if (crRoleName && crRoleName.value) { snap.view = "editRole"; snap.key = crRoleName.value; }
      else snap.view = "createRole";
    } else if (isVisible(addUsersPage)) {
      if (addUsersPage.classList.contains("is-edit-mode")) {
        snap.view = "editUser";
        var auEmail = byId("auEmail");
        snap.key = auEmail ? auEmail.value : null;
      } else {
        snap.view = "addUser";
      }
    }

    var seg = doc.querySelector(".seg-btn.on");
    if (seg) snap.internalExternal = seg.getAttribute("data-view");
    /* Search/filter field VALUES are intentionally not captured here —
       `syncRenderedState()` (below) already generically copies every
       matching `input`/`textarea`/`select` value across by id, which
       covers every page's own filter/search fields uniformly without
       this bridge needing to know any of their specific ids. */
    snap.toggles = captureToggleStates(doc);
    snap.modal = captureOpenModal(doc);
    var win = doc.defaultView || window;
    snap.scrollX = win.scrollX || 0;
    snap.scrollY = win.scrollY || 0;
    return snap;
  }

  function restoreNavState(win, doc, snap) {
    if (!snap) return;
    /* Replaying a route means clicking the app's own tabs and toggles.
       Those clicks land in the document Redline inspects, so without
       this the restore would end by "selecting" whichever control it
       pressed last — see `isGalleryDriving()`. */
    state.restoringNav += 1;
    try {
      restoreNavStateInner(win, doc, snap);
    } finally {
      /* Released a frame later: the app's own click handlers can defer
         work, and anything they click in turn still belongs to the
         restore, not to the user. */
      var release = function () { state.restoringNav = Math.max(0, state.restoringNav - 1); };
      if (win && win.requestAnimationFrame) win.requestAnimationFrame(function () { win.setTimeout(release, 0); });
      else release();
    }
  }

  function restoreNavStateInner(win, doc, snap) {
    function clickTab(name) {
      var btns = doc.querySelectorAll(".tab-btn");
      for (var i = 0; i < btns.length; i += 1) {
        if (new RegExp("^" + name + "$", "i").test((btns[i].textContent || "").trim())) { btns[i].click(); return true; }
      }
      return false;
    }
    function clickSeg(view) {
      var btn = doc.querySelector('.seg-btn[data-view="' + view + '"]');
      if (btn) btn.click();
    }
    function clickButtonByText(text) {
      var btns = doc.querySelectorAll("button");
      for (var i = 0; i < btns.length; i += 1) {
        if ((btns[i].textContent || "").trim() === text) { btns[i].click(); return true; }
      }
      return false;
    }
    function findLinkByText(selector, text) {
      var links = doc.querySelectorAll(selector);
      for (var i = 0; i < links.length; i += 1) {
        if ((links[i].textContent || "").trim() === text) return links[i];
      }
      return null;
    }
    function findUserLinkByEmail(email) {
      var cells = doc.querySelectorAll("#usersTable .c-em");
      for (var i = 0; i < cells.length; i += 1) {
        if ((cells[i].textContent || "").trim().toLowerCase() === String(email).toLowerCase()) {
          var tr = cells[i].closest("tr");
          return tr ? tr.querySelector("a.name-link") : null;
        }
      }
      return null;
    }

    /* Returns true once the navigation this snapshot describes has
       actually landed (used by `attachFrame`'s retry loop below to
       decide whether another attempt is worthwhile) — kept generic:
       "is the expected top-level container now visible", the same
       signal `captureNavState` itself reads. */
    function reachedTarget() {
      if (snap.view === "editUser") {
        var au = doc.getElementById("addUsersPage");
        return Boolean(au) && au.style.display !== "none" && au.classList.contains("is-edit-mode");
      }
      if (snap.view === "addUser") {
        var au2 = doc.getElementById("addUsersPage");
        return Boolean(au2) && au2.style.display !== "none";
      }
      if (snap.view === "editRole" || snap.view === "createRole") {
        var cr = doc.getElementById("createRolePage");
        return Boolean(cr) && cr.style.display !== "none";
      }
      if (snap.view === "editTeam") {
        var tm = doc.getElementById("editTeamPage");
        return Boolean(tm) && tm.style.display !== "none";
      }
      return true;
    }

    if (snap.tab && snap.tab !== "users") clickTab(snap.tab);
    if (snap.internalExternal) clickSeg(snap.internalExternal);

    if (snap.view === "editUser" && snap.key) {
      var userLink = findUserLinkByEmail(snap.key);
      if (userLink) userLink.click();
    } else if (snap.view === "addUser") {
      clickButtonByText("Add User");
    } else if (snap.view === "editRole" && snap.key) {
      var roleLink = findLinkByText("a.rp-role-link", snap.key);
      if (roleLink) roleLink.click();
    } else if (snap.view === "createRole") {
      clickButtonByText("Create Role");
    } else if (snap.view === "editTeam" && snap.key) {
      var teamLink = findLinkByText("a.tm-name-link", snap.key);
      if (teamLink) teamLink.click();
    }

    /* Expanded/collapsed sections and any open dialog only make sense
       once the right page/record is actually showing — replay them
       last, and only once `reachedTarget()` says the navigation above
       actually landed (a still-loading/failed navigation replaying
       stale toggle indices against the wrong page would do nothing
       useful and risks mis-clicking an unrelated control). */
    if (reachedTarget()) {
      restoreToggleStates(doc, snap.toggles);
      restoreOpenModal(doc, snap.modal);
    }

    if (typeof win.scrollTo === "function") win.scrollTo(snap.scrollX || 0, snap.scrollY || 0);
    return reachedTarget();
  }

  function syncRenderedState() {
    if (!state.frameDocument || state.frameDocument === document) return;
    /* A gallery entry owns every field in its own preview — copying the
       source page's search boxes and checkboxes over the top of it would
       overwrite exactly the local state §18 requires be preserved. */
    if (isGallery()) return;
    var sourceControls = document.querySelectorAll("input, textarea, select, details, [aria-expanded], [aria-selected]");
    sourceControls.forEach(function (source) {
      if (isRedlineChrome(source)) return;
      var target = source.id ? state.frameDocument.getElementById(source.id) : null;
      if (!target && source.getAttribute("name")) {
        try {
          target = state.frameDocument.querySelector('[name="' + CSS.escape(source.getAttribute("name")) + '"]');
        } catch (_) {}
      }
      if (!target) return;
      if ("value" in source && "value" in target) target.value = source.value;
      if ("checked" in source && "checked" in target) target.checked = source.checked;
      if (source.tagName === "DETAILS") target.open = source.open;
      ["aria-expanded", "aria-selected"].forEach(function (attribute) {
        if (source.hasAttribute(attribute)) target.setAttribute(attribute, source.getAttribute(attribute));
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════════════
     Live observation (ResizeObserver + MutationObserver + RAF-debounced
     render loop). Same shape as Rate Card's observeInspectionDocument.
     ═══════════════════════════════════════════════════════════════════ */

  function schedule() {
    if (!state.active || state.raf) return;
    state.raf = requestAnimationFrame(function () { state.raf = 0; render(); });
  }

  /* A short, reasonably-stable CSS selector for `el`, used to re-find
     "the same logical element" in a *different* `document` (Current's
     live-app document vs. the breakpoint iframe's own fresh document —
     never literally the same node, so identity can't be compared
     directly). Stops as soon as it reaches an ancestor with an id
     (ids are already unique per document in this app), else falls back
     to a `tagName:nth-of-type` path capped at a few levels — cheap and
     good enough for "does the structurally-equivalent element still
     exist after a breakpoint switch/reflow", per spec ("if a selected
     element remains present after reflow, keep it selected... If it no
     longer exists, clear gracefully"). */
  function computeStableSelector(el) {
    if (!el || el.nodeType !== 1) return null;
    var parts = [];
    var node = el;
    var depth = 0;
    while (node && node.nodeType === 1 && depth < 8) {
      if (node.id) {
        try { parts.unshift("#" + CSS.escape(node.id)); } catch (_) { parts.unshift("#" + node.id); }
        break;
      }
      var parent = node.parentElement;
      if (!parent) { parts.unshift(node.tagName.toLowerCase()); break; }
      var siblingIndex = 1;
      var sib = node.previousElementSibling;
      while (sib) { if (sib.tagName === node.tagName) siblingIndex += 1; sib = sib.previousElementSibling; }
      parts.unshift(node.tagName.toLowerCase() + ":nth-of-type(" + siblingIndex + ")");
      node = parent;
      depth += 1;
    }
    return parts.join(" > ");
  }

  function disconnectFrame() {
    if (state.resizeObserver) state.resizeObserver.disconnect();
    if (state.mutationObserver) state.mutationObserver.disconnect();
    state.resizeObserver = null;
    state.mutationObserver = null;
    state.frameDocument = null;
    state.hovered = null;
    state.locked = null;
  }

  function observeInspectionDocument(doc, view, attachEvents) {
    /* Capture a reselection target for the *locked* element (not the
       transient hover) before `disconnectFrame()` clears it — this is
       what carries a selection across Current \u2194 breakpoint and the
       very first breakpoint load, instead of unconditionally dropping
       it on every document swap (see `computeStableSelector`). */
    var reselectSelector = state.locked ? computeStableSelector(state.locked) : null;
    disconnectFrame();
    if (!doc || !doc.documentElement) return;
    state.frameDocument = doc;
    if (reselectSelector) {
      try {
        var reselected = doc.querySelector(reselectSelector);
        if (reselected) { state.locked = reselected; state.hovered = reselected; }
      } catch (_) {}
    }
    syncRenderedState();
    var signal = state.aborter.signal;
    /* In "Current" mode the live app's own scroll surface is now
       `.redline__live-app` (see `mountLiveApp`), not `window` — the real
       window never scrolls while Redline is active. Watch both so
       measurements recalculate on either. */
    var scrollTarget = doc === document && state.liveAppRoot ? state.liveAppRoot : view;
    var resizeTarget = doc === document && state.liveAppRoot ? state.liveAppRoot : doc.body;
    if (attachEvents) {
      doc.addEventListener("pointermove", onPreviewPointerMove, { capture: true, passive: true, signal: signal });
      doc.addEventListener("pointerleave", function () {
        if (state.frameDocument !== doc) return;
        state.hovered = null;
        schedule();
      }, { capture: true, signal: signal });
      doc.addEventListener("click", onPreviewClick, { capture: true, signal: signal });
      /* Once a gallery mounts an overlay, focus is inside the preview by
         design — that is where the dialog put it. Arrow-key browsing has
         to be reachable from there or it is reachable from nowhere, and
         keydown in an iframe never surfaces in the host document. */
      doc.addEventListener("keydown", onGalleryKeydown, { signal: signal });
      doc.addEventListener("transitionrun", schedule, { capture: true, signal: signal });
      doc.addEventListener("transitionend", schedule, { capture: true, signal: signal });
      doc.addEventListener("animationstart", schedule, { capture: true, signal: signal });
      doc.addEventListener("animationend", schedule, { capture: true, signal: signal });
      scrollTarget.addEventListener("scroll", schedule, { capture: true, passive: true, signal: signal });
      view.addEventListener("resize", schedule, { passive: true, signal: signal });
    }
    if ("ResizeObserver" in window) {
      state.resizeObserver = new ResizeObserver(schedule);
      state.resizeObserver.observe(doc.documentElement);
      if (resizeTarget) state.resizeObserver.observe(resizeTarget);
    }
    state.mutationObserver = new MutationObserver(schedule);
    var mutationRoot = doc === document ? (doc.querySelector("main.page") || state.liveAppRoot || doc.body) : doc.documentElement;
    state.mutationObserver.observe(mutationRoot, { attributes: true, childList: true, characterData: true, subtree: true });
    if (doc.fonts && doc.fonts.ready) {
      doc.fonts.ready.then(function () { if (state.active && state.frameDocument === doc) schedule(); });
    }
    schedule();
  }

  function attachCurrent() {
    var attachEvents = !state.currentListenersAttached;
    observeInspectionDocument(document, window, attachEvents);
    state.currentListenersAttached = true;
  }

  function preserveLogicalPreviewWidth(doc) {
    if (!doc || !doc.head || doc.querySelector("[data-redline-preview-scroll]")) return;
    var style = doc.createElement("style");
    style.setAttribute("data-redline-preview-scroll", "");
    style.textContent = "html{scrollbar-width:none!important;}html::-webkit-scrollbar,body::-webkit-scrollbar{width:0!important;height:0!important;}";
    doc.head.appendChild(style);
  }

  /* Round 29 (2026-08-11) — robustness pass. `attachFrame` used to run
     `restoreNavState` exactly once, synchronously, off the iframe's
     `load` event, with no fallback if the fresh document's content
     (rendered by the same in-memory app.js re-running from scratch)
     wasn't fully in place yet by that instant. `waitForFrameReady`
     polls for a basic, generic readiness signal (`#usersTable`, present
     on every load of this app's default first screen) before running
     the nav-state replay exactly once — retrying only the "is the
     document there yet" wait, never the replay itself, so a slow first
     paint can't cause `restoreNavState`'s clicks to double-fire. Also
     called eagerly from `enable()` (see there) so this whole dance is
     usually already finished, invisibly, before the user ever picks a
     numeric breakpoint. */
  function attachFrame() {
    /* Round 29: called off the preview iframe's `load` event, which
       (see `enable()`) now fires from an EAGER, one-time preload that
       starts immediately when Redline turns on — well before the user
       has necessarily picked a numeric breakpoint. So this must run
       (and restore nav state into the fresh document) regardless of
       `state.breakpoint`; only actually attaching live measurement
       observers to it (`finishFrameAttach` below) waits for the user to
       select a breakpoint. */
    if (!state.active || !state.frame) return;
    if (state.restoreRetryTimer) { window.clearTimeout(state.restoreRetryTimer); state.restoreRetryTimer = 0; }
    waitForFrameReady(10);
  }

  function waitForFrameReady(retriesLeft) {
    var doc = null;
    try { doc = state.frame.contentDocument; } catch (_) {}
    var ready = Boolean(doc && doc.documentElement && doc.body && doc.getElementById("usersTable"));
    if (!ready) {
      if (retriesLeft > 0 && state.active) {
        state.restoreRetryTimer = window.setTimeout(function () {
          state.restoreRetryTimer = 0;
          waitForFrameReady(retriesLeft - 1);
        }, 60);
        return;
      }
      /* Exhausted retries — reveal whatever did load rather than leave
         the "Loading preview\u2026" placeholder up indefinitely; this is
         the documented, deliberate fallback for the (untested-in-
         practice) case where the app itself fails to render at all,
         not a normal path. */
      finishFrameAttach(doc);
      return;
    }
    preserveLogicalPreviewWidth(doc);
    if (state.navSnapshot) {
      var snapshot = state.navSnapshot;
      state.navSnapshot = null;
      try { restoreNavState(state.frame.contentWindow, doc, snapshot); } catch (_) {}
    }
    finishFrameAttach(doc);
  }

  function finishFrameAttach(doc) {
    state.frameReady = true;
    if (state.frameLoadingEl) state.frameLoadingEl.hidden = true;
    /* Only start observing/inspecting the iframe once the user has
       actually selected a numeric breakpoint — this can (and usually
       does) finish in the background while Current mode is still on
       screen, in which case there is nothing to attach to yet;
       `setBreakpoint` attaches explicitly once the user switches to a
       preset that is already loaded. */
    if (doc && doc.documentElement && usingFrame()) {
      observeInspectionDocument(doc, state.frame.contentWindow, true);
    }
    /* A gallery opened before the eager preload finished parked itself
       here; now that the document exists, complete the entry. */
    if (state.pendingGalleryEnter && isGallery()) {
      state.pendingGalleryEnter = false;
      loadGalleryEntries();
      renderGalleryBar();
      showGalleryEntry(0);
    }
    schedule();
  }

  /* ═══════════════════════════════════════════════════════════════════
     Selection: hover / click-to-pin / stale cleanup / breadcrumb
     ═══════════════════════════════════════════════════════════════════ */

  function inspectionView() {
    return usingFrame() && state.frame ? state.frame.contentWindow : window;
  }

  /* Whether `target` is part of the Redline shell's own chrome (topbar,
     panels, canvas padding, SVG overlay, etc.) rather than real app
     content. Cannot be a plain `target.closest("[data-redline-ui]")`
     check any more: in Current mode the real live app is physically
     reparented *inside* `.redline__canvas` (which itself carries
     `data-redline-ui`, like every other piece of chrome — see
     `mountLiveApp`), so a naive ancestor search from any real app
     element would always find that ancestor and misclassify all live
     content as chrome. `.redline__live-app` deliberately carries no
     `data-redline-ui` marker for exactly this reason — anything inside
     it is real content and short-circuits straight past the chrome
     check, regardless of what non-`data-redline-ui` wrapper elements
     contain it. */
  function isRedlineChrome(target) {
    if (!target || !target.closest) return false;
    if (state.liveAppRoot && state.liveAppRoot.contains(target)) return false;
    /* Same exemption, same reason, for the gallery's overlay root inside
       the preview document: it hosts real product overlays, so its
       contents must stay inspectable. The gallery's own geometry marker
       (`#redline-preview-root`) does carry `data-redline-ui` and is
       correctly classified as chrome by the check below. */
    if (target.closest("[data-redline-preview-overlay-root]")) return false;
    return Boolean(target.closest("[data-redline-ui]"));
  }

  function inspectedTarget(target) {
    if (!target || target.nodeType !== 1) return null;
    if (isRedlineChrome(target)) return null;
    if (target.closest("script, style, link, meta")) return null;
    if (target === state.frameDocument.documentElement || target === state.frameDocument.body) return null;
    return target;
  }

  /* A gallery drive presses the product's own buttons to walk an overlay
     into the state being catalogued. Those clicks land in the preview
     like any other, so without this the selection handler below would
     swallow every one of them and no overlay would ever open. The
     gallery raises this flag for the duration of a drive and lowers it
     the moment the overlay has settled, at which point clicking goes
     back to meaning "inspect this". */
  function isGalleryDriving() {
    if (state.restoringNav > 0) return true;
    var view = state.frameDocument && state.frameDocument.defaultView;
    return !!(view && view.__iamGalleryDriving);
  }

  function onPreviewPointerMove(event) {
    if (!event.target || event.target.ownerDocument !== state.frameDocument) return;
    if (isRedlineChrome(event.target) || isGalleryDriving()) return;
    state.hovered = inspectedTarget(event.target);
    schedule();
  }

  function onPreviewClick(event) {
    if (isGalleryDriving()) return;
    var target = event.target && event.target.nodeType === 1 ? event.target : null;
    if (!target || target.ownerDocument !== state.frameDocument || isRedlineChrome(target)) return;
    var inspected = inspectedTarget(target);
    /* Spec requirement: "Prevent normal application actions while
       selecting components." Unlike Rate Card (which only blocks clicks
       in its separate Color mode), IAM Redline always blocks the
       underlying app's default click behavior for any real, inspectable
       target while active, so links don't navigate, buttons don't
       submit, and checkboxes don't toggle mid-inspection. */
    if (inspected) {
      event.preventDefault();
      event.stopPropagation();
    }
    state.locked = state.locked === inspected ? null : inspected;
    state.hovered = inspected;
    setStatus(state.locked ? "Element locked for inspection." : "Selection cleared.");
    schedule();
  }

  /* Coordinate mapping, corrected: the previous version always added the
     canvas's own on-screen offset on top of `rect`, which was only ever
     right for the numeric-breakpoint iframe (where a child's
     `getBoundingClientRect()` is relative to the iframe's own internal
     viewport and genuinely needs translating into the parent document's
     coordinate space). In "Current" mode the inspected element is now a
     real, reparented node living directly in `document` — its
     `getBoundingClientRect()` is *already* the correct absolute
     coordinate its red outline needs to be drawn at, with no further
     translation or scaling, which is what makes "a selected element's
     red outline must sit exactly over that element" hold regardless of
     panel widths, canvas padding, or stage scroll position. Breakpoint
     mode adds the iframe's on-screen offset AND (Round 29) its current
     visual scale factor — see below. */
  function mapRect(rect) {
    if (!usingFrame() || !state.frame) {
      return {
        left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom,
        width: rect.width, height: rect.height,
        logicalWidth: rect.width, logicalHeight: rect.height
      };
    }
    /* Round 29 (2026-08-11) — visual scale-to-fit for oversized presets
       (see `positionBreakpointPreview`). `frameRect` (measured from the
       PARENT document) already reflects the shrunk, on-screen size and
       position — `getBoundingClientRect()` always accounts for a CSS
       `transform` on an ancestor. `rect`, in contrast, was measured
       INSIDE the iframe's own document, in its untouched logical
       viewport (a `transform` on an ancestor never changes an element's
       own `getBoundingClientRect()`/`clientWidth` *within* its own
       document) — so it must be multiplied by the same scale factor to
       land at the correct on-screen position/size, while `logicalWidth`
       /`logicalHeight` stay the true, unscaled measurement the spec
       requires ("a component that is logically 998px wide must still be
       reported as 998px even when the preview is visually scaled down"). */
    var scale = state.previewScale || 1;
    var frameRect = state.frame.getBoundingClientRect();
    return {
      left: frameRect.left + rect.left * scale,
      top: frameRect.top + rect.top * scale,
      right: frameRect.left + rect.right * scale,
      bottom: frameRect.top + rect.bottom * scale,
      width: rect.width * scale,
      height: rect.height * scale,
      logicalWidth: rect.width,
      logicalHeight: rect.height
    };
  }

  /* Bounds of the *actual live inspection surface* — the reparented
     live-app host in Current mode, or the breakpoint iframe — not the
     outer `.redline__canvas` (which also includes the workspace's own
     padding/gutters around that surface). Dimming, label clamping, and
     the "is this near an edge" checks all key off this so they never
     bleed into the canvas's decorative padding. */
  function inspectionViewportRect() {
    var el = usingFrame() && state.frame ? state.frame : state.liveAppRoot;
    var rect = (el || state.canvas).getBoundingClientRect();
    return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height };
  }

  function inspectionBounds() {
    var rect = inspectionViewportRect();
    return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom };
  }

  function clampRectToFrame(rect) {
    var bounds = inspectionViewportRect();
    var left = Math.max(rect.left, bounds.left);
    var top = Math.max(rect.top, bounds.top);
    var right = Math.min(rect.right, bounds.right);
    var bottom = Math.min(rect.bottom, bounds.bottom);
    right = Math.max(left, right);
    bottom = Math.max(top, bottom);
    return {
      left: left, top: top, right: right, bottom: bottom,
      width: right - left, height: bottom - top,
      logicalWidth: rect.logicalWidth, logicalHeight: rect.logicalHeight
    };
  }

  function logicalLength(value) {
    return value;
  }

  function visible(node) {
    if (!node || node.nodeType !== 1) return false;
    var view = inspectionView();
    var style = view.getComputedStyle(node);
    var rect = node.getBoundingClientRect();
    if (usingFrame() && state.frame) {
      /* Iframe case: `rect` is relative to the iframe's own internal
         viewport, so compare against that same coordinate space. */
      var vw = state.frame.clientWidth;
      var vh = state.frame.clientHeight;
      return style.display !== "none" && style.visibility !== "hidden"
        && rect.width > 1 && rect.height > 1
        && rect.bottom > 0 && rect.right > 0 && rect.top < vh && rect.left < vw;
    }
    /* Current mode: `rect` is a real absolute viewport rect (the node is
       a live, reparented DOM element) — compare against the live-app
       host's own on-screen box, not the raw browser window, since the
       host is its own scroll viewport and may be narrower than the
       window (side panels) or scrolled independently of it. */
    if (!state.liveAppRoot) return false;
    var hostRect = state.liveAppRoot.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden"
      && rect.width > 1 && rect.height > 1
      && rect.bottom > hostRect.top && rect.right > hostRect.left
      && rect.top < hostRect.bottom && rect.left < hostRect.right;
  }

  function majorTargets() {
    if (!state.frameDocument) return [];
    var candidates = Array.prototype.slice.call(state.frameDocument.querySelectorAll(
      "nav.nav, main.page, header, table, form, [role='dialog'], .v4-card, .card"
    )).filter(visible);
    candidates.sort(function (a, b) {
      var ar = a.getBoundingClientRect(); var br = b.getBoundingClientRect();
      return (br.width * br.height) - (ar.width * ar.height);
    });
    var selected = [];
    candidates.some(function (candidate) {
      if (selected.some(function (parent) { return parent.contains(candidate); })) return false;
      selected.push(candidate);
      return selected.length >= 3;
    });
    return selected;
  }

  function isConnectedIn(node, doc) {
    return node && node.isConnected && node.ownerDocument === doc;
  }

  /* Ancestor chain used by the left-panel breadcrumb, per spec section 9:
     "Provide a breadcrumb or parent-selection control when nested
     elements are difficult to target." Clicking an entry re-selects it. */
  function ancestorChain(target) {
    var chain = [];
    var node = target;
    var guard = 0;
    while (node && node.nodeType === 1 && guard < 40) {
      guard += 1;
      if (node === state.frameDocument.body) break;
      chain.unshift(node);
      node = node.parentElement;
    }
    return chain.slice(-8);
  }

  function describeElement(el) {
    var id = el.id ? "#" + el.id : "";
    var cls = el.classList && el.classList.length
      ? "." + Array.prototype.slice.call(el.classList).slice(0, 2).join(".")
      : "";
    return el.tagName.toLowerCase() + id + cls;
  }

  /* "Clicking an item in the Selection tree should ... scroll the center
     preview workspace or application preview only as needed, keep the
     selected element visible between the side panels, never move the
     entire Redline shell." Two independent scroll containers can each
     need adjusting — the page's own internal scroll (`state.liveAppRoot`
     in Current mode, or the iframe's document in breakpoint mode) if the
     ancestor is off-page, and `.redline__stage` itself if the canvas is
     larger than the workspace and the ancestor's region isn't currently
     scrolled into the visible band between the two docked panels. Never
     touches `window.scrollTo` or the shell's own layout, so the Redline
     chrome itself never moves. */
  function scrollSelectionIntoView(node) {
    if (!node) return;
    try { node.scrollIntoView({ block: "nearest", inline: "nearest" }); } catch (_) { try { node.scrollIntoView(); } catch (__) {} }
    requestAnimationFrame(function () {
      if (!state.active || !state.stage) return;
      var rect = mapRect(node.getBoundingClientRect());
      var stageRect = state.stage.getBoundingClientRect();
      var margin = 24;
      var dx = 0, dy = 0;
      if (rect.left < stageRect.left) dx = rect.left - stageRect.left - margin;
      else if (rect.right > stageRect.right) dx = rect.right - stageRect.right + margin;
      if (rect.top < stageRect.top) dy = rect.top - stageRect.top - margin;
      else if (rect.bottom > stageRect.bottom) dy = rect.bottom - stageRect.bottom + margin;
      if (dx || dy) {
        if (typeof state.stage.scrollBy === "function") state.stage.scrollBy({ left: dx, top: dy, behavior: "auto" });
        else { state.stage.scrollLeft += dx; state.stage.scrollTop += dy; }
      }
      schedule();
    });
  }

  function renderBreadcrumb(target) {
    var host = state.breadcrumbEl;
    if (!host) return;
    host.replaceChildren();
    if (!target) {
      var empty = element("p", "redline__breadcrumb-empty");
      empty.textContent = "Nothing selected.";
      host.appendChild(empty);
      return;
    }
    ancestorChain(target).forEach(function (node) {
      var crumb = element("button", "redline__crumb", { type: "button" });
      crumb.textContent = describeElement(node);
      if (node === target) crumb.setAttribute("aria-current", "true");
      crumb.addEventListener("click", function () {
        state.locked = node;
        state.hovered = node;
        schedule();
        scrollSelectionIntoView(node);
      });
      host.appendChild(crumb);
    });
  }

  /* ═══════════════════════════════════════════════════════════════════
     SVG drawing + label collision avoidance (ported near-verbatim from
     Rate Card's `line`/`boundary`/`labelPlacer`).
     ═══════════════════════════════════════════════════════════════════ */

  function prepareSvg(svg) {
    svg.replaceChildren();
    var defs = svgNode("defs");
    var marker = svgNode("marker", { id: "redline-arrow", markerWidth: "8", markerHeight: "8", refX: "4", refY: "4", orient: "auto-start-reverse" });
    marker.appendChild(svgNode("path", { d: "M 8 0 L 1 4 L 8 8", fill: "none", stroke: "var(--redline-measure)", "stroke-width": "1", "stroke-linecap": "square", "stroke-linejoin": "miter" }));
    defs.appendChild(marker);
    svg.appendChild(defs);
  }

  function line(svg, x1, y1, x2, y2, className, arrows) {
    var attrs = { x1: rounded(x1), y1: rounded(y1), x2: rounded(x2), y2: rounded(y2), "class": className || "redline__dimension" };
    if (arrows) { attrs["marker-start"] = "url(#redline-arrow)"; attrs["marker-end"] = "url(#redline-arrow)"; }
    svg.appendChild(svgNode("line", attrs));
  }

  function boundary(svg, rect, extraClass) {
    svg.appendChild(svgNode("rect", {
      x: rounded(rect.left), y: rounded(rect.top), width: rounded(rect.width), height: rounded(rect.height),
      "class": "redline__boundary" + (extraClass ? " " + extraClass : "")
    }));
  }

  function chromeBoxes() {
    if (!state.root) return [];
    return Array.prototype.slice.call(state.root.querySelectorAll(".redline__topbar, .redline__panel")).map(function (el) {
      var r = el.getBoundingClientRect();
      return { left: r.left - 4, top: r.top - 4, right: r.right + 4, bottom: r.bottom + 4 };
    });
  }

  function boxesOverlap(a, b, clearance) {
    var gap = Number(clearance) || 0;
    return !(a.right + gap <= b.left || a.left >= b.right + gap || a.bottom + gap <= b.top || a.top >= b.bottom + gap);
  }

  function labelPlacer(host, svg) {
    var occupied = chromeBoxes();
    var keys = {};
    var bounds = inspectionBounds();
    var inset = 6;

    function clampPosition(position, width, height) {
      return {
        x: Math.max(bounds.left + inset, Math.min(position.x, bounds.right - width - inset)),
        y: Math.max(bounds.top + inset, Math.min(position.y, bounds.bottom - height - inset)),
        leader: Boolean(position.leader)
      };
    }

    function candidatesFor(x, y, width, height, options) {
      var offset = 10;
      var shifts = [0, 36, -36, 72, -72];
      var positions = [];
      if (options.axis === "horizontal") {
        shifts.forEach(function (shift) { positions.push({ x: x - width / 2 + shift, y: y - height - offset }); });
        shifts.forEach(function (shift) { positions.push({ x: x - width / 2 + shift, y: y + offset }); });
      } else if (options.axis === "vertical") {
        shifts.forEach(function (shift) { positions.push({ x: x - width - offset, y: y - height / 2 + shift }); });
        shifts.forEach(function (shift) { positions.push({ x: x + offset, y: y - height / 2 + shift }); });
      } else {
        positions = [
          { x: x - width / 2, y: y + offset },
          { x: x - width / 2, y: y - height - offset },
          { x: x + offset, y: y - height / 2 },
          { x: x - width - offset, y: y - height / 2 }
        ];
      }
      positions.push(
        { x: x - width / 2, y: bounds.top + inset, leader: true },
        { x: x - width / 2, y: bounds.bottom - height - inset, leader: true },
        { x: bounds.left + inset, y: y - height / 2, leader: true },
        { x: bounds.right - width - inset, y: y - height / 2, leader: true }
      );
      return positions;
    }

    return function addLabel(text, x, y, kind, title, options) {
      options = options || {};
      var key = options.dedupeKey || (kind || "measure") + ":" + text;
      if (keys[key]) return null;
      keys[key] = true;
      var node = element("span", "redline__label" + (kind ? " redline__label--" + kind : ""));
      node.textContent = text;
      if (title) node.title = title;
      node.style.visibility = "hidden";
      host.appendChild(node);
      var width = node.offsetWidth;
      var height = node.offsetHeight;
      var positions = candidatesFor(x, y, width, height, options);
      var chosen = null;
      for (var i = 0; i < positions.length; i += 1) {
        var position = clampPosition(positions[i], width, height);
        var candidate = { left: position.x, top: position.y, right: position.x + width, bottom: position.y + height };
        var collides = occupied.some(function (box) { return boxesOverlap(candidate, box, 4); });
        if (!collides && options.avoid && boxesOverlap(candidate, options.avoid, 6)) collides = true;
        if (!collides) { chosen = { position: position, box: candidate }; break; }
      }
      if (!chosen) { node.remove(); return null; }
      occupied.push(chosen.box);
      node.style.left = Math.round(chosen.position.x) + "px";
      node.style.top = Math.round(chosen.position.y) + "px";
      node.style.visibility = "visible";
      if (chosen.position.leader && svg) {
        var endX = Math.max(chosen.box.left, Math.min(x, chosen.box.right));
        var endY = Math.max(chosen.box.top, Math.min(y, chosen.box.bottom));
        line(svg, x, y, endX, endY, "redline__leader", false);
      }
      return chosen.box;
    };
  }

  /* ═══════════════════════════════════════════════════════════════════
     On-canvas engineering annotations: Clean Spec (width/height + detail
     labels) and 8pt Grid (actual → recommended, orange when mismatched).
     ═══════════════════════════════════════════════════════════════════ */

  function cleanMeasurements(svg, addLabel, target, rect) {
    if (!state.showMeasurements) return;
    var bounds = inspectionBounds();
    var reserved = chromeBoxes();
    var topCandidate = rect.top - 12;
    var bottomCandidate = rect.bottom + 12;
    var topSegment = { left: rect.left, top: topCandidate - 3, right: rect.right, bottom: topCandidate + 3 };
    var topBlocked = topCandidate < bounds.top + 6 || reserved.some(function (box) { return boxesOverlap(topSegment, box, 4); });
    var horizontalY = topBlocked && bottomCandidate <= bounds.bottom - 6 ? bottomCandidate : Math.max(bounds.top + 6, topCandidate);
    var leftCandidate = rect.left - 12;
    var rightCandidate = rect.right + 12;
    var leftSegment = { left: leftCandidate - 3, top: rect.top, right: leftCandidate + 3, bottom: rect.bottom };
    var leftBlocked = leftCandidate < bounds.left + 6 || reserved.some(function (box) { return boxesOverlap(leftSegment, box, 4); });
    var verticalX = leftBlocked && rightCandidate <= bounds.right - 6 ? rightCandidate : Math.max(bounds.left + 6, leftCandidate);
    var logicalWidth = Number.isFinite(rect.logicalWidth) ? rect.logicalWidth : logicalLength(rect.width);
    var logicalHeight = Number.isFinite(rect.logicalHeight) ? rect.logicalHeight : logicalLength(rect.height);

    line(svg, rect.left, horizontalY, rect.right, horizontalY, "redline__dimension redline__dimension--selected", true);
    line(svg, verticalX, rect.top, verticalX, rect.bottom, "redline__dimension redline__dimension--selected", true);
    addLabel(rounded(logicalWidth) + " px", rect.left + rect.width / 2, horizontalY, "", "Width", { axis: "horizontal", avoid: rect, dedupeKey: "w:" + rounded(logicalWidth) });
    addLabel(rounded(logicalHeight) + " px", verticalX, rect.top + rect.height / 2, "", "Height", { axis: "vertical", avoid: rect, dedupeKey: "h:" + rounded(logicalHeight) });
  }

  function gridMeasurements(svg, addLabel, rect) {
    if (!state.showGridOverlay) return;
    var logicalWidth = Number.isFinite(rect.logicalWidth) ? rect.logicalWidth : logicalLength(rect.width);
    var logicalHeight = Number.isFinite(rect.logicalHeight) ? rect.logicalHeight : logicalLength(rect.height);
    [
      { label: "W", value: logicalWidth, x1: rect.left, y1: rect.bottom + 6, x2: rect.right, y2: rect.bottom + 6, x: rect.left + rect.width / 2, y: rect.bottom + 6, axis: "horizontal" },
      { label: "H", value: logicalHeight, x1: rect.right + 6, y1: rect.top, x2: rect.right + 6, y2: rect.bottom, x: rect.right + 6, y: rect.top + rect.height / 2, axis: "vertical" }
    ].forEach(function (m) {
      var recommendation = nearestEight(m.value);
      var mismatch = recommendation !== rounded(m.value);
      line(svg, m.x1, m.y1, m.x2, m.y2, "redline__dimension redline__recommendation" + (mismatch ? " redline__recommendation--warn" : ""), false);
      var text = mismatch ? (m.label + " " + rounded(m.value) + " \u2192 " + recommendation) : (m.label + " " + recommendation);
      addLabel(text, m.x, m.y, mismatch ? "warn" : "grid",
        "Actual: " + rounded(m.value) + "px. Nearest 8pt: " + recommendation + "px.",
        { axis: m.axis, avoid: rect, dedupeKey: "grid:" + m.label + ":" + recommendation });
    });
  }

  function updateDimming(activeRect) {
    var frameRect = inspectionViewportRect();
    var panes = state.root.querySelectorAll("[data-redline-dim]");
    var hole = activeRect || { left: frameRect.left, top: frameRect.top, right: frameRect.left, bottom: frameRect.top, height: 0 };
    var boxes = activeRect ? [
      [frameRect.left, frameRect.top, frameRect.width, Math.max(0, hole.top - frameRect.top)],
      [frameRect.left, hole.bottom, frameRect.width, Math.max(0, frameRect.bottom - hole.bottom)],
      [frameRect.left, hole.top, Math.max(0, hole.left - frameRect.left), Math.max(0, hole.height)],
      [hole.right, hole.top, Math.max(0, frameRect.right - hole.right), Math.max(0, hole.height)]
    ] : [[frameRect.left, frameRect.top, frameRect.width, frameRect.height], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    panes.forEach(function (pane, index) {
      var box = boxes[index];
      pane.style.left = px(box[0]); pane.style.top = px(box[1]);
      pane.style.width = px(box[2]); pane.style.height = px(box[3]);
    });
  }

  /* ═══════════════════════════════════════════════════════════════════
     Color inspection helpers (ported from Rate Card: generic RGBA
     parsing, contrast math, and the CSS-rule-cache "winning declaration"
     token-extraction pipeline — none of this is Rate-Card-specific, it
     works against whatever `var(--x)` tokens the inspected document
     actually uses, which for IAM are its own `--brand-text`,
     `--text-primary`, `--border-default`, etc.)
     ═══════════════════════════════════════════════════════════════════ */

  function parseColorToRgba(value) {
    if (!value) return null;
    var v = value.trim().toLowerCase();
    if (v === "transparent") return { r: 0, g: 0, b: 0, a: 0 };
    var m = v.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,\/]+([\d.]+%?))?\s*\)$/);
    if (m) {
      var a = m[4] !== undefined ? (m[4].indexOf("%") !== -1 ? parseFloat(m[4]) / 100 : parseFloat(m[4])) : 1;
      return { r: Math.round(parseFloat(m[1])), g: Math.round(parseFloat(m[2])), b: Math.round(parseFloat(m[3])), a: Number.isFinite(a) ? a : 1 };
    }
    var hexMatch = v.match(/^#([0-9a-f]{3,8})$/);
    if (hexMatch) {
      var hex = hexMatch[1];
      if (hex.length === 3 || hex.length === 4) hex = hex.split("").map(function (ch) { return ch + ch; }).join("");
      return { r: parseInt(hex.slice(0, 2), 16), g: parseInt(hex.slice(2, 4), 16), b: parseInt(hex.slice(4, 6), 16), a: hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1 };
    }
    return null;
  }

  function rgbaToHex(rgba) {
    function channel(n) { return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"); }
    var hex = "#" + channel(rgba.r) + channel(rgba.g) + channel(rgba.b);
    if (rgba.a < 1) hex += channel(rgba.a * 255);
    return hex;
  }

  function rgbaToText(rgba) {
    return rgba.a < 1
      ? "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + (Math.round(rgba.a * 100) / 100) + ")"
      : "rgb(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ")";
  }

  function compositeOver(fg, bg) {
    var a = fg.a;
    return { r: fg.r * a + bg.r * (1 - a), g: fg.g * a + bg.g * (1 - a), b: fg.b * a + bg.b * (1 - a), a: 1 };
  }

  function relativeLuminance(rgb) {
    function channel(c) { var v = c / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
    return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
  }

  function contrastRatio(a, b) {
    var lA = relativeLuminance(a) + 0.05, lB = relativeLuminance(b) + 0.05;
    return lA > lB ? lA / lB : lB / lA;
  }

  function isLargeText(cs) {
    var size = parseFloat(cs.fontSize) || 0;
    var weight = parseInt(cs.fontWeight, 10) || 400;
    return size >= 24 || (size >= 18.66 && weight >= 700);
  }

  function effectiveBackgroundChain(target) {
    var view = inspectionView();
    var doc = state.frameDocument;
    var node = target, chain = [], guard = 0;
    while (node && guard < 64) {
      guard += 1;
      var cs = view.getComputedStyle(node);
      chain.push({ node: node, rgba: parseColorToRgba(cs.backgroundColor) });
      if (node === doc.documentElement) break;
      node = node.parentElement;
    }
    var composite = { r: 255, g: 255, b: 255, a: 1 };
    var sourceNode = null;
    for (var i = chain.length - 1; i >= 0; i -= 1) {
      var layer = chain[i].rgba;
      if (!layer || layer.a === 0) continue;
      composite = layer.a >= 1 ? { r: layer.r, g: layer.g, b: layer.b, a: 1 } : compositeOver(layer, composite);
      sourceNode = chain[i].node;
    }
    return { rgba: composite, sourceNode: sourceNode, isOwn: sourceNode === target };
  }

  function splitSelectorList(selectorText) {
    var parts = [], depth = 0, start = 0;
    for (var i = 0; i < selectorText.length; i += 1) {
      var ch = selectorText[i];
      if (ch === "(" || ch === "[") depth += 1;
      else if (ch === ")" || ch === "]") depth -= 1;
      else if (ch === "," && depth === 0) { parts.push(selectorText.slice(start, i).trim()); start = i + 1; }
    }
    parts.push(selectorText.slice(start).trim());
    return parts.filter(Boolean);
  }

  function computeSpecificity(selector) {
    try {
      var work = String(selector);
      var pseudoElements = (work.match(/::[\w-]+/g) || []).length;
      work = work.replace(/::[\w-]+/g, " ");
      var ids = (work.match(/#[\w-]+/g) || []).length;
      work = work.replace(/#[\w-]+/g, " ");
      var classAttrPseudoPattern = /\.[\w-]+|\[[^\]]*\]|:[\w-]+(?:\([^()]*(?:\([^()]*\)[^()]*)*\))?/g;
      var classAttrPseudo = (work.match(classAttrPseudoPattern) || []).length;
      work = work.replace(classAttrPseudoPattern, " ");
      var types = (work.match(/[a-zA-Z][\w-]*/g) || []).length;
      return ids * 100 + classAttrPseudo * 10 + (types + pseudoElements);
    } catch (_) { return 0; }
  }

  function buildRuleCache() {
    var rules = [], order = 0;
    var doc = state.frameDocument;
    var sheets = [];
    try { sheets = Array.prototype.slice.call(doc.styleSheets); } catch (_) { sheets = []; }
    function walk(list, sheet) {
      var items;
      try { items = Array.prototype.slice.call(list); } catch (_) { return; }
      items.forEach(function (rule) {
        if (rule.selectorText && rule.style) {
          order += 1;
          splitSelectorList(rule.selectorText).forEach(function (branch) {
            rules.push({ selectorText: branch, style: rule.style, specificity: computeSpecificity(branch), order: order });
          });
        }
        if (rule.cssRules && rule.cssRules.length) walk(rule.cssRules, sheet);
      });
    }
    sheets.forEach(function (sheet) {
      var cssRules;
      try { cssRules = sheet.cssRules; } catch (_) { return; }
      if (cssRules) walk(cssRules, sheet);
    });
    return rules;
  }

  function getRuleCache() {
    if (!state.colorSheetCache || state.colorSheetCacheDoc !== state.frameDocument) {
      state.colorSheetCache = buildRuleCache();
      state.colorSheetCacheDoc = state.frameDocument;
    }
    return state.colorSheetCache;
  }

  function findWinningDeclaration(el, props) {
    var cache = getRuleCache();
    var best = null;
    cache.forEach(function (entry) {
      if (/::[\w-]+$/.test(entry.selectorText)) return;
      var matched;
      try { matched = el.matches(entry.selectorText); } catch (_) { matched = false; }
      if (!matched) return;
      var propHit = null;
      for (var i = 0; i < props.length; i += 1) {
        var raw = entry.style.getPropertyValue(props[i]);
        if (raw) { propHit = { prop: props[i], raw: raw.trim() }; break; }
      }
      if (!propHit) return;
      var candidate = {
        selectorText: entry.selectorText, raw: propHit.raw,
        important: entry.style.getPropertyPriority(propHit.prop) === "important",
        specificity: entry.specificity, order: entry.order
      };
      if (!best) { best = candidate; return; }
      if (candidate.important !== best.important) { if (candidate.important) best = candidate; return; }
      if (candidate.specificity !== best.specificity) { if (candidate.specificity > best.specificity) best = candidate; return; }
      if (candidate.order >= best.order) best = candidate;
    });
    if (el.style) {
      for (var i = 0; i < props.length; i += 1) {
        var inlineRaw = el.style.getPropertyValue(props[i]);
        if (inlineRaw) { best = { selectorText: "element.style", raw: inlineRaw.trim(), inline: true }; break; }
      }
    }
    return best;
  }

  function looksLikeColor(value) {
    if (!value) return false;
    var v = value.trim().toLowerCase();
    return /^#([0-9a-f]{3,8})$/.test(v) || /^rgba?\(/.test(v) || /^hsla?\(/.test(v) || v === "transparent" || v === "currentcolor";
  }

  function extractColorSource(rawValue, contextEl) {
    if (!rawValue) return null;
    var matches = [], re = /var\(\s*(--[\w-]+)\s*(?:,\s*([^)]+))?\)/g, m;
    while ((m = re.exec(rawValue))) matches.push({ token: m[1], fallback: m[2] ? m[2].trim() : null });
    if (!matches.length) return { token: null, hardcoded: true, raw: rawValue };
    var view = inspectionView();
    var resolved = matches.map(function (entry) {
      var value = "";
      try { value = view.getComputedStyle(contextEl).getPropertyValue(entry.token).trim(); } catch (_) {}
      return { token: entry.token, value: value, fallback: entry.fallback, looksColor: looksLikeColor(value) };
    });
    var pick = null;
    for (var i = resolved.length - 1; i >= 0; i -= 1) { if (resolved[i].looksColor) { pick = resolved[i]; break; } }
    if (!pick) pick = resolved[resolved.length - 1];
    return { token: pick.token, hardcoded: false, raw: rawValue };
  }

  function borderColorAndSide(cs) {
    var sides = ["Top", "Right", "Bottom", "Left"];
    for (var i = 0; i < sides.length; i += 1) {
      var width = parseFloat(cs["border" + sides[i] + "Width"]) || 0;
      var style = cs["border" + sides[i] + "Style"];
      if (width > 0 && style !== "none" && style !== "hidden") return { color: cs["border" + sides[i] + "Color"], side: sides[i].toLowerCase() };
    }
    return null;
  }

  function hasOwnText(el) {
    return Array.prototype.some.call(el.childNodes, function (node) { return node.nodeType === 3 && node.textContent.trim().length > 0; });
  }

  function collectColorRoles(target) {
    var view = inspectionView();
    var cs = view.getComputedStyle(target);
    var roles = [];
    if (hasOwnText(target) || ["INPUT", "TEXTAREA", "BUTTON", "SELECT", "A", "LABEL"].indexOf(target.tagName) !== -1) {
      roles.push({ key: "text", label: "Text color", computed: cs.color, props: ["color"], cs: cs });
    }
    roles.push({ key: "background", label: "Background color", computed: cs.backgroundColor, props: ["background-color", "background"], cs: cs, isBackground: true });
    var border = borderColorAndSide(cs);
    if (border) roles.push({ key: "border", label: "Border color (" + border.side + ")", computed: border.color, props: ["border-" + border.side + "-color", "border-color", "border"], cs: cs });
    var isSvgShape = target.namespaceURI === SVG_NS && target.localName !== "svg";
    if (isSvgShape) {
      if (cs.fill && cs.fill !== "none") roles.push({ key: "fill", label: "Icon fill", computed: cs.fill, props: ["fill"], cs: cs });
      if (cs.stroke && cs.stroke !== "none") roles.push({ key: "stroke", label: "Icon stroke", computed: cs.stroke, props: ["stroke"], cs: cs });
    }
    if (state.frameDocument.activeElement === target && cs.outlineStyle !== "none" && (parseFloat(cs.outlineWidth) || 0) > 0) {
      roles.push({ key: "outline", label: "Focus ring color", computed: cs.outlineColor, props: ["outline-color", "outline"], cs: cs });
    }
    if (cs.boxShadow && cs.boxShadow !== "none") {
      var shadowColorMatch = cs.boxShadow.match(/rgba?\([^)]+\)/);
      if (shadowColorMatch) roles.push({ key: "shadow", label: "Shadow color", computed: shadowColorMatch[0], props: ["box-shadow"], cs: cs, noToken: true });
    }
    return roles;
  }

  /* ═══════════════════════════════════════════════════════════════════
     ADS component identification.
     Priority: explicit `data-ads-component` metadata already present in
     the markup > structural/role signals > computed-style comparison
     against the document's own resolved brand/text/border tokens for
     button-variant detection > "Unmapped component".
     ═══════════════════════════════════════════════════════════════════ */

  function resolveDocTokens(doc, view) {
    var root = doc.documentElement;
    var cs = view.getComputedStyle(root);
    function read(name) { return parseColorToRgba((cs.getPropertyValue(name) || "").trim()); }
    return {
      brand: read("--brand"),
      brandText: read("--brand-text"),
      borderDefault: read("--border-default"),
      textPrimary: read("--text-primary"),
      danger: parseColorToRgba("#AF434E")
    };
  }

  function colorsEqual(a, b, tolerance) {
    if (!a || !b) return false;
    var t = tolerance || 12;
    return Math.abs(a.r - b.r) <= t && Math.abs(a.g - b.g) <= t && Math.abs(a.b - b.b) <= t;
  }

  function sizeBand(heightPx) {
    if (heightPx <= 28) return "sm";
    if (heightPx <= 36) return "md";
    return "lg";
  }

  function elementState(el, cs) {
    if (el.disabled || el.getAttribute("aria-disabled") === "true") return "disabled";
    if (state.frameDocument.activeElement === el) return "focus";
    if (el === state.hovered) return "hover";
    if (el.getAttribute("aria-expanded") === "true" || el.getAttribute("aria-checked") === "true"
      || el.getAttribute("aria-selected") === "true" || el.getAttribute("aria-pressed") === "true"
      || el.classList.contains("on") || el.classList.contains("is-selected")) return "selected";
    return "rest";
  }

  function identifyAdsComponent(target, cs, view) {
    var doc = state.frameDocument;
    var explicit = target.closest("[data-ads-component]");
    if (explicit) {
      var key = explicit.getAttribute("data-ads-component");
      return {
        name: key.replace(/-/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); }),
        source: "data-ads-component=\"" + key + "\"",
        variant: explicit.getAttribute("data-ads-variant") || null,
        size: explicit.getAttribute("data-ads-size") || null,
        state: elementState(target, cs),
        unmapped: false
      };
    }

    var tag = target.tagName;
    var role = target.getAttribute("role");
    var rect = target.getBoundingClientRect();

    if (tag === "TABLE" || tag === "TH" || tag === "TD" || tag === "TR" || tag === "THEAD" || tag === "TBODY") {
      return { name: "Table", source: "tag <" + tag.toLowerCase() + ">", variant: null, size: null, state: elementState(target, cs), unmapped: false };
    }
    if (role === "dialog" || target.getAttribute("aria-modal") === "true") {
      var w = rect.width;
      var size = w <= 480 ? "sm" : w <= 720 ? "md" : "lg";
      return { name: "Modal", source: "role=\"dialog\"", variant: null, size: size, state: "open", unmapped: false };
    }
    /* The scrim is part of the Modal's anatomy — the one piece of it that
       carries no dialog role of its own — and the overlay gallery makes
       it directly selectable, so report it as Modal rather than leaving
       the first thing a designer clicks reading "unmapped". */
    if (target.classList.contains("cr-confirm-backdrop") || target.classList.contains("flt-overlay")) {
      return { name: "Modal", source: "class match (modal scrim)", variant: null, size: null, state: "open", unmapped: false };
    }
    if (target.hasAttribute("data-au-toggle") || target.hasAttribute("data-cr-toggle") || target.hasAttribute("data-pc-toggle")
        || (target.classList.contains("cr-section-header"))) {
      return { name: "Accordion", source: "section header", variant: null, size: null, state: target.getAttribute("aria-expanded") === "true" ? "active" : "rest", unmapped: false };
    }
    if (tag === "INPUT" && target.type === "checkbox") return { name: "Checkbox", source: "input[type=checkbox]", variant: null, size: null, state: elementState(target, cs), unmapped: false };
    if (tag === "INPUT" && target.type === "radio") return { name: "Radio Button", source: "input[type=radio]", variant: null, size: null, state: elementState(target, cs), unmapped: false };
    if (tag === "SELECT") return { name: "Select", source: "<select>", variant: null, size: sizeBand(rect.height), state: elementState(target, cs), unmapped: false };
    if (/combo|dd-trigger|multi-trigger/i.test(target.className || "")) return { name: "Dropdown", source: "class match (combobox trigger)", variant: null, size: sizeBand(rect.height), state: elementState(target, cs), unmapped: false };
    if ((tag === "INPUT" && target.type === "search") || /\bsearch\b/i.test(target.className || "")) {
      return { name: "Search", source: "search field", variant: null, size: sizeBand(rect.height), state: elementState(target, cs), unmapped: false };
    }
    if (tag === "INPUT" || tag === "TEXTAREA") return { name: "Text Box", source: "tag <" + tag.toLowerCase() + ">", variant: null, size: sizeBand(rect.height), state: elementState(target, cs), unmapped: false };
    if (/\bpg-|pagination/i.test(target.className || "")) {
      var label = (target.textContent || "").trim();
      var variant = /^\d+$/.test(label) ? "digit" : /prev/i.test(target.getAttribute("aria-label") || "") ? "nav-prev" : /next/i.test(target.getAttribute("aria-label") || "") ? "nav-next" : "ellipsis";
      return { name: "Pagination", source: "class match (pagination)", variant: variant, size: null, state: elementState(target, cs), unmapped: false };
    }
    if (target.classList.contains("nav-a") || target.classList.contains("tab-btn") || role === "tab") {
      return { name: "TopBarTab", source: "tab / primary nav item", variant: null, size: null, state: elementState(target, cs), unmapped: false };
    }
    if (target.classList.contains("user-menu-row") || target.classList.contains("user-menu-sub-item") || target.classList.contains("sb-item")) {
      return { name: "Navigation / NavItem", source: "menu / rail item", variant: null, size: null, state: elementState(target, cs), unmapped: false };
    }
    if (/\btoggle\b|switch/i.test(target.className || "") && role === "switch") {
      return { name: "Toggle", source: "role=\"switch\"", variant: null, size: null, state: elementState(target, cs), unmapped: false };
    }
    if (role === "tooltip") return { name: "Tooltip", source: "role=\"tooltip\"", variant: null, size: null, state: "rest", unmapped: false };
    if (/\btoast\b/i.test(target.className || "")) {
      var toastVariant = target.classList.contains("edl-toast--error") ? "error" :
        target.classList.contains("edl-toast--warning") ? "warning" :
        target.classList.contains("edl-toast--success") ? "success" :
        target.classList.contains("edl-toast--informative") ? "info" : null;
      return { name: "Toast", source: "class match (toast)", variant: toastVariant, size: null, state: "rest", unmapped: false };
    }
    if (role === "progressbar") return { name: "Progress Bar", source: "role=\"progressbar\"", variant: null, size: null, state: "rest", unmapped: false };
    if (target.classList.contains("v4-card") || target.classList.contains("card") || target.classList.contains("cr-card")) {
      return { name: "Card", source: "class match (card)", variant: null, size: null, state: "rest", unmapped: false };
    }

    var looksButton = tag === "BUTTON" || role === "button" || (tag === "A" && cs.cursor === "pointer" && (parseFloat(cs.paddingLeft) || 0) > 4);
    if (looksButton) {
      var tokens = resolveDocTokens(doc, view);
      var bg = parseColorToRgba(cs.backgroundColor);
      var textColor = parseColorToRgba(cs.color);
      var borderInfo = borderColorAndSide(cs);
      var variantGuess = "secondary";
      if (bg && bg.a > 0.4 && colorsEqual(bg, tokens.danger)) variantGuess = "danger";
      else if (bg && bg.a > 0.4 && colorsEqual(bg, tokens.brand)) variantGuess = "primary";
      else if ((!bg || bg.a < 0.05) && borderInfo && (colorsEqual(borderInfo.color && parseColorToRgba(borderInfo.color), tokens.brand) || colorsEqual(borderInfo.color && parseColorToRgba(borderInfo.color), tokens.borderDefault))) variantGuess = "secondary";
      else if ((!bg || bg.a < 0.05) && !borderInfo && textColor && colorsEqual(textColor, tokens.brandText)) variantGuess = "ghost";
      else if ((!bg || bg.a < 0.05) && !borderInfo) variantGuess = "tertiary";
      return {
        name: "Button", source: "computed-style variant match", variant: variantGuess,
        size: sizeBand(rect.height), state: elementState(target, cs), unmapped: false
      };
    }

    return { name: null, source: null, variant: null, size: null, state: null, unmapped: true };
  }

  /* ═══════════════════════════════════════════════════════════════════
     Typography token best-effort match (no formal ADS type-scale JSON
     exists in this repo, so this is always shown as an approximation —
     "Nearest ADS", never an exact claim — per spec section 16).
     ═══════════════════════════════════════════════════════════════════ */

  function nearestTypographyToken(size, weight) {
    var scale = size >= 28 ? "Display" : size >= 20 ? "Heading" : size >= 16 ? "Subheading" : size >= 13 ? "Body" : "Caption";
    var weightName = weight >= 800 ? "ExtraBold" : weight >= 700 ? "Bold" : weight >= 600 ? "SemiBold" : weight >= 500 ? "Medium" : "Regular";
    return "ADS " + scale + (weightName === "Regular" ? "" : " " + weightName);
  }

  /* ═══════════════════════════════════════════════════════════════════
     Right inspector: Dimensions / Spacing / Colors / Typography /
     Borders+Effects, always shown together for whatever is selected.
     ═══════════════════════════════════════════════════════════════════ */

  function group(title) {
    var g = element("div", "redline__group");
    var h = element("h4", "redline__group-title");
    h.textContent = title;
    g.appendChild(h);
    return g;
  }

  function row(label, value, opts) {
    opts = opts || {};
    var r = element("div", "redline__row");
    var l = element("span", "redline__row-label");
    l.textContent = label;
    var v = element("span", "redline__row-value" + (opts.warn ? " redline__row-value--warn" : "") + (opts.muted ? " redline__row-value--muted" : ""));
    v.textContent = value;
    r.appendChild(l);
    r.appendChild(v);
    return r;
  }

  function copyButton(label, value) {
    var btn = element("button", "redline__copy-btn", { type: "button", "data-redline-action": "copy" });
    btn.textContent = "Copy " + label;
    if (value === null || value === undefined || value === "") btn.disabled = true;
    else btn.setAttribute("data-copy-text", String(value));
    return btn;
  }

  function copyValue(control) {
    var text = control.getAttribute("data-copy-text") || "";
    if (!text) return;
    function done(ok) {
      control.setAttribute("data-copied", ok ? "true" : "false");
      setStatus(ok ? "Copied to clipboard." : "Copy failed.");
      window.setTimeout(function () { if (control.isConnected) control.removeAttribute("data-copied"); }, 1200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      return;
    }
    try {
      var scratch = document.createElement("textarea");
      scratch.value = text;
      scratch.style.position = "fixed";
      scratch.style.opacity = "0";
      document.body.appendChild(scratch);
      scratch.select();
      document.execCommand("copy");
      scratch.remove();
      done(true);
    } catch (_) { done(false); }
  }

  function describeLength(specified, computedPx) {
    if (specified === "auto") return "Auto \u00B7 " + rounded(computedPx) + "px";
    if (/%$/.test(specified)) return specified + " \u00B7 " + rounded(computedPx) + "px";
    if (specified === "fit-content" || specified === "max-content" || specified === "min-content") return "Intrinsic \u00B7 " + rounded(computedPx) + "px";
    return rounded(computedPx) + " px";
  }

  function renderDimensionsGroup(target, cs, rect) {
    var g = group("Dimensions");
    var box = element("div", "redline__box-model");
    ["W", "H", "X", "Y"].forEach(function (label, idx) {
      var cell = element("div", "redline__box-cell");
      var b = document.createElement("b");
      var canvasOrigin = inspectionViewportRect();
      var values = [rounded(rect.logicalWidth), rounded(rect.logicalHeight), rounded(logicalLength(rect.left - canvasOrigin.left)), rounded(logicalLength(rect.top - canvasOrigin.top))];
      b.textContent = values[idx];
      cell.appendChild(b);
      cell.appendChild(document.createTextNode(label));
      box.appendChild(cell);
    });
    g.appendChild(box);
    g.appendChild(row("Width", describeLength(cs.width, rect.logicalWidth)));
    g.appendChild(row("Height", describeLength(cs.height, rect.logicalHeight)));
    if (cs.minWidth && cs.minWidth !== "0px" && cs.minWidth !== "auto") g.appendChild(row("Min width", cs.minWidth));
    if (cs.maxWidth && cs.maxWidth !== "none") g.appendChild(row("Max width", cs.maxWidth));
    if (cs.minHeight && cs.minHeight !== "0px" && cs.minHeight !== "auto") g.appendChild(row("Min height", cs.minHeight));
    if (cs.maxHeight && cs.maxHeight !== "none") g.appendChild(row("Max height", cs.maxHeight));
    g.appendChild(row("Display", cs.display));
    g.appendChild(row("Position", cs.position));
    var overflow = cs.overflowX === cs.overflowY ? cs.overflowX : (cs.overflowX + " / " + cs.overflowY);
    if (overflow !== "visible") g.appendChild(row("Overflow", overflow));
    if (cs.position !== "static" && cs.zIndex !== "auto") g.appendChild(row("Z-index", cs.zIndex));
    return g;
  }

  function spacingBox(sides, mode) {
    var box = element("div", "redline__box-model");
    var labels = ["T", "R", "B", "L"];
    sides.forEach(function (value, idx) {
      var cell = element("div", "redline__box-cell");
      var b = document.createElement("b");
      var text = String(rounded(value));
      var warn = false;
      if (mode === "grid" && value > 0) {
        var rec = nearestEight(value);
        if (rec !== rounded(value)) { text = rounded(value) + "\u2192" + rec; warn = true; }
      }
      if (warn) cell.classList.add("redline__box-cell--warn");
      b.textContent = text;
      cell.appendChild(b);
      cell.appendChild(document.createTextNode(labels[idx]));
      box.appendChild(cell);
    });
    return box;
  }

  function spacingRowWithGrid(label, value) {
    if (state.measureMode === "grid" && value > 0) {
      var rec = nearestEight(value);
      if (rec !== rounded(value)) return row(label, rounded(value) + " px \u2192 " + rec + " px (8pt)", { warn: true });
    }
    return row(label, rounded(value) + " px");
  }

  function renderSpacingGroup(target, cs) {
    var g = group("Spacing & layout");
    var padding = [parseFloat(cs.paddingTop) || 0, parseFloat(cs.paddingRight) || 0, parseFloat(cs.paddingBottom) || 0, parseFloat(cs.paddingLeft) || 0];
    var margin = [parseFloat(cs.marginTop) || 0, parseFloat(cs.marginRight) || 0, parseFloat(cs.marginBottom) || 0, parseFloat(cs.marginLeft) || 0];
    g.appendChild(row("Padding (T R B L)", ""));
    g.appendChild(spacingBox(padding, state.measureMode));
    g.appendChild(row("Margin (T R B L)", ""));
    g.appendChild(spacingBox(margin, state.measureMode));
    var rowGap = parseFloat(cs.rowGap);
    var colGap = parseFloat(cs.columnGap);
    if (Number.isFinite(rowGap) && rowGap > 0) g.appendChild(spacingRowWithGrid("Row gap", rowGap));
    if (Number.isFinite(colGap) && colGap > 0 && colGap !== rowGap) g.appendChild(spacingRowWithGrid("Column gap", colGap));
    if (cs.display.indexOf("flex") !== -1) {
      g.appendChild(row("Flex direction", cs.flexDirection));
      g.appendChild(row("Align items", cs.alignItems));
      g.appendChild(row("Justify content", cs.justifyContent));
    }
    if (cs.display.indexOf("grid") !== -1) {
      g.appendChild(row("Grid columns", cs.gridTemplateColumns.split(" ").length + " tracks", { muted: true }));
      g.appendChild(row("Grid rows", cs.gridTemplateRows.split(" ").length + " tracks", { muted: true }));
    }
    var parent = target.parentElement;
    if (parent) g.appendChild(row("Parent", describeElement(parent), { muted: true }));
    g.appendChild(row("Child elements", String(target.children.length), { muted: true }));
    return g;
  }

  function buildRoleSection(target, role_) {
    var rgba = parseColorToRgba(role_.computed) || { r: 0, g: 0, b: 0, a: 1 };
    var hex = rgbaToHex(rgba);
    var rgbText = rgbaToText(rgba);
    var winning = role_.noToken ? null : findWinningDeclaration(target, role_.props);
    var source = winning ? extractColorSource(winning.raw, target) : null;
    var tokenDisplay = source && source.token ? source.token : "Unmapped";

    var section = element("div", "redline__color-role");
    var head = element("div", "redline__color-role-head");
    var swatch = element("span", "redline__color-swatch");
    swatch.style.background = rgbText;
    var name = element("span", "redline__color-role-name");
    name.textContent = role_.label;
    head.appendChild(swatch);
    head.appendChild(name);
    section.appendChild(head);
    section.appendChild(row("Token", tokenDisplay, { muted: tokenDisplay === "Unmapped" }));
    section.appendChild(row("Hex", hex));
    section.appendChild(row("RGBA", rgbText));

    if (role_.isBackground) {
      var effective = effectiveBackgroundChain(target);
      if (!effective.isOwn) section.appendChild(row("Effective (rendered)", rgbaToHex(effective.rgba), { muted: true }));
    }
    if (role_.key === "text") {
      var bgChain = effectiveBackgroundChain(target);
      var ratio = contrastRatio(rgba.a < 1 ? compositeOver(rgba, bgChain.rgba) : rgba, bgChain.rgba);
      var large = isLargeText(role_.cs);
      var aaPass = ratio >= (large ? 3 : 4.5);
      section.appendChild(row("Contrast vs. bg", ratio.toFixed(2) + ":1 \u00B7 AA " + (aaPass ? "Pass" : "Fail"), { warn: !aaPass }));
    }
    var copyRow = element("div", "redline__copy-row");
    copyRow.appendChild(copyButton("Hex", hex));
    copyRow.appendChild(copyButton("Token", source && source.token ? source.token : null));
    section.appendChild(copyRow);
    return section;
  }

  function renderColorsGroup(target) {
    var g = group("Colors");
    var roles = collectColorRoles(target);
    if (!roles.length) { g.appendChild(row("", "No inspectable colors on this element.", { muted: true })); return g; }
    roles.forEach(function (r) { g.appendChild(buildRoleSection(target, r)); });
    return g;
  }

  function renderTypographyGroup(target, cs) {
    var text = (target.textContent || "").trim();
    var isTextish = hasOwnText(target) || ["INPUT", "TEXTAREA", "BUTTON", "A", "LABEL", "SPAN", "H1", "H2", "H3", "H4", "P", "TD", "TH"].indexOf(target.tagName) !== -1;
    if (!isTextish) return null;
    var g = group("Typography & text");
    var size = parseFloat(cs.fontSize) || 0;
    var weight = parseInt(cs.fontWeight, 10) || 400;
    var lineHeight = parseFloat(cs.lineHeight);
    var family = cs.fontFamily.split(",")[0].replace(/["']/g, "");
    var isAdsFamily = /open sans|inspiretwdc|multiplanetwdc/i.test(cs.fontFamily);
    var tokenGuess = nearestTypographyToken(size, weight);
    g.appendChild(row(isAdsFamily ? "ADS token (nearest)" : "Typography", tokenGuess, { warn: !isAdsFamily }));
    if (!isAdsFamily) {
      var warnEl = element("span", "redline__ads-token-warn");
      warnEl.textContent = "Custom font family \u2014 nearest ADS shown";
      g.appendChild(warnEl);
    }
    g.appendChild(row("Font family", family));
    g.appendChild(row("Size / line height", rounded(size) + "px / " + (Number.isFinite(lineHeight) ? rounded(lineHeight) + "px" : cs.lineHeight)));
    g.appendChild(row("Weight", cs.fontWeight));
    g.appendChild(row("Letter spacing", cs.letterSpacing === "normal" ? "normal" : rounded(parseFloat(cs.letterSpacing)) + "px"));
    g.appendChild(row("Color", cs.color));
    g.appendChild(row("Align / transform", cs.textAlign + " / " + (cs.textTransform === "none" ? "none" : cs.textTransform)));
    var wrap = cs.whiteSpace === "nowrap" ? "No wrap" : cs.textOverflow === "ellipsis" ? "Truncates (ellipsis)" : cs.webkitLineClamp && cs.webkitLineClamp !== "none" ? "Line-clamped (" + cs.webkitLineClamp + ")" : "Wraps";
    g.appendChild(row("Wrapping", wrap, { muted: true }));
    if (text) {
      var sample = element("div", "redline__text-sample");
      sample.textContent = text.length > 400 ? text.slice(0, 400) + "\u2026" : text;
      g.appendChild(sample);
      var copyRow = element("div", "redline__copy-row");
      copyRow.appendChild(copyButton("text", text));
      g.appendChild(copyRow);
    }
    return g;
  }

  function renderBordersGroup(target, cs) {
    var hasBorder = borderColorAndSide(cs);
    var radius = parseFloat(cs.borderRadius) || 0;
    var hasShadow = cs.boxShadow && cs.boxShadow !== "none";
    var opacity = parseFloat(cs.opacity);
    var hasOpacity = Number.isFinite(opacity) && opacity < 1;
    var hasBackdrop = cs.backdropFilter && cs.backdropFilter !== "none";
    if (!hasBorder && radius <= 0 && !hasShadow && !hasOpacity && !hasBackdrop) return null;
    var g = group("Borders & effects");
    if (hasBorder) {
      var bw = parseFloat(cs["border" + hasBorder.side.charAt(0).toUpperCase() + hasBorder.side.slice(1) + "Width"]) || 0;
      g.appendChild(row("Border", rounded(bw) + "px \u00B7 " + cs.borderTopStyle));
    }
    if (radius > 0) g.appendChild(spacingRowWithGrid("Border radius", radius));
    if (hasShadow) g.appendChild(row("Box shadow", cs.boxShadow.length > 60 ? cs.boxShadow.slice(0, 60) + "\u2026" : cs.boxShadow));
    if (hasOpacity) g.appendChild(row("Opacity", opacity.toFixed(2)));
    if (hasBackdrop) g.appendChild(row("Backdrop filter", cs.backdropFilter));
    return g;
  }

  function renderInspectorHeader(target, componentInfo) {
    var header = element("div", "redline__inspector-header");
    var tag = element("div", "redline__inspector-tag");
    tag.textContent = describeElement(target);
    header.appendChild(tag);
    var comp = element("div", "redline__inspector-component", { "data-unmapped": componentInfo.unmapped ? "true" : "false" });
    var name = element("div", "redline__inspector-component-name");
    name.textContent = componentInfo.unmapped ? "Unmapped component" : "ADS " + componentInfo.name;
    comp.appendChild(name);
    if (!componentInfo.unmapped) {
      var metaParts = [];
      if (componentInfo.variant) metaParts.push("Variant: " + componentInfo.variant);
      if (componentInfo.size) metaParts.push("Size: " + componentInfo.size);
      if (componentInfo.state) metaParts.push("State: " + componentInfo.state);
      var meta = element("div", "redline__inspector-component-meta");
      meta.textContent = metaParts.join("  \u00B7  ");
      comp.appendChild(meta);
      if (componentInfo.source) {
        var srcMeta = element("div", "redline__inspector-component-meta");
        srcMeta.textContent = "Matched via " + componentInfo.source;
        comp.appendChild(srcMeta);
      }
    } else {
      var hint = element("div", "redline__inspector-component-meta");
      hint.textContent = "No ADS component metadata or recognizable pattern matched this element.";
      comp.appendChild(hint);
    }
    header.appendChild(comp);
    return header;
  }

  function renderInspector(target) {
    var host = state.inspectorEl;
    if (!host) return;
    var view = inspectionView();
    var cs = view.getComputedStyle(target);
    var rect = clampRectToFrame(mapRect(target.getBoundingClientRect()));
    var componentInfo = identifyAdsComponent(target, cs, view);

    host.replaceChildren();
    host.appendChild(renderInspectorHeader(target, componentInfo));
    host.appendChild(renderDimensionsGroup(target, cs, rect));
    host.appendChild(renderSpacingGroup(target, cs));
    host.appendChild(renderColorsGroup(target));
    var typo = renderTypographyGroup(target, cs);
    if (typo) host.appendChild(typo);
    var borders = renderBordersGroup(target, cs);
    if (borders) host.appendChild(borders);
  }

  function clearInspector() {
    var host = state.inspectorEl;
    if (!host) return;
    host.replaceChildren();
    var empty = element("p", "redline__inspector-empty");
    empty.textContent = "Hover or click a component in the preview to inspect it. Click again to clear the selection.";
    host.appendChild(empty);
  }

  /* ═══════════════════════════════════════════════════════════════════
     Main render loop
     ═══════════════════════════════════════════════════════════════════ */

  function render() {
    if (!state.active || !state.frameDocument) return;
    state.renderCount += 1;
    var svg = state.root.querySelector("[data-redline-svg]");
    var labels = state.root.querySelector("[data-redline-labels]");
    var gridEl = state.root.querySelector("[data-redline-grid]");
    var frameRect = inspectionViewportRect();
    prepareSvg(svg);
    labels.replaceChildren();
    var addLabel = labelPlacer(labels, svg);

    gridEl.hidden = !(state.measureMode === "grid" && state.showGridOverlay);
    gridEl.style.left = px(frameRect.left);
    gridEl.style.top = px(frameRect.top);
    gridEl.style.width = px(frameRect.width);
    gridEl.style.height = px(frameRect.height);
    var gridStep = 8;
    gridEl.style.backgroundSize = gridStep + "px " + gridStep + "px";

    /* "Selection tree behavior" (spec): when the page changes — including
       an in-SPA tab/panel switch that hides rather than removes the old
       DOM (this app toggles `hidden` on sibling panels, it doesn't tear
       them down) — a previously selected element that's no longer
       connected OR no longer visible must be cleared, not left showing
       stale breadcrumb/inspector data for content that's no longer the
       current page. */
    var target = state.locked || state.hovered;
    if (target && (!isConnectedIn(target, state.frameDocument) || !visible(target))) {
      if (state.locked === target) state.locked = null;
      if (state.hovered === target) state.hovered = null;
      target = null;
    }
    var activeRect = target && visible(target) ? clampRectToFrame(mapRect(target.getBoundingClientRect())) : null;
    updateDimming(activeRect);

    if (target && activeRect) {
      boundary(svg, activeRect);
      if (state.measureMode === "clean") cleanMeasurements(svg, addLabel, target, activeRect);
      else gridMeasurements(svg, addLabel, activeRect);
    } else {
      majorTargets().forEach(function (item, index) {
        var rect = clampRectToFrame(mapRect(item.getBoundingClientRect()));
        boundary(svg, rect, index ? "redline__alignment" : "");
      });
    }

    var targetKey = target ? (target.ownerDocument === state.frameDocument ? target : null) : null;
    if (targetKey !== state.inspectorTargetKey) {
      state.inspectorTargetKey = targetKey;
      if (targetKey) renderInspector(targetKey); else clearInspector();
      renderBreadcrumb(targetKey);
    } else if (targetKey) {
      /* Keep values live (colors/typography/spacing can change without a
         selection change, e.g. hover-state CSS, live data updates). */
      renderInspector(targetKey);
    }

    var sizeLabel = state.sizeLabelEl;
    if (sizeLabel) {
      var preset = activeBreakpoint();
      if (!preset && isGallery()) {
        var galleryPreset = previewPreset();
        sizeLabel.textContent = galleryPreset
          ? "Current \u00B7 " + rounded(galleryPreset.width) + " \u00D7 " + rounded(galleryPreset.height)
          : "Current";
      } else if (preset) {
        var scalePct = Math.round((state.previewScale || 1) * 100);
        sizeLabel.textContent = preset.width + " \u00D7 " + preset.height
          + (scalePct < 100 ? " (" + scalePct + "%)" : "");
      } else if (state.liveAppRoot) {
        /* Reflect the live-app host's own rendered size (the real
           preview viewport), not the full browser window — the two
           differ by exactly the two docked side panels' width. */
        sizeLabel.textContent = "Current \u00B7 " + rounded(state.liveAppRoot.clientWidth) + " \u00D7 " + rounded(state.liveAppRoot.clientHeight);
      } else {
        sizeLabel.textContent = "Current";
      }
    }
  }

  /* ═══════════════════════════════════════════════════════════════════
     Breakpoint + mode + annotation control wiring
     ═══════════════════════════════════════════════════════════════════ */

  function setBreakpoint(id) {
    if (id === "current" || id === state.breakpoint) {
      state.breakpoint = "";
      state.previewScale = 1;
      state.root.setAttribute("data-breakpoint-active", "false");
      state.root.querySelectorAll('[data-redline-action^="breakpoint:"]').forEach(function (item) {
        item.setAttribute("aria-pressed", item.getAttribute("data-redline-action") === "breakpoint:current" ? "true" : "false");
      });
      /* A gallery is always iframe-hosted, so "Current" resizes its
         logical viewport to the real browser width instead of handing
         the preview back to the live app — the selected overlay, its
         inputs and its selection all stay exactly as they were. */
      if (isGallery()) {
        positionBreakpointPreview(true);
        setStatus("Current browser width selected.");
        schedule();
        return;
      }
      state.frame.hidden = true;
      state.frameShell.hidden = true;
      state.frame.style.width = ""; state.frame.style.height = "";
      state.frameShell.removeAttribute("style");
      if (state.liveAppRoot) state.liveAppRoot.hidden = false;
      positionLiveApp(true);
      attachCurrent();
      setStatus("Current browser width selected.");
      schedule();
      return;
    }
    var preset = BREAKPOINTS.filter(function (item) { return item.id === id; })[0];
    if (!preset || !state.frame) return;
    state.breakpoint = id;
    state.root.setAttribute("data-breakpoint-active", "true");
    state.root.querySelectorAll('[data-redline-action^="breakpoint:"]').forEach(function (item) {
      item.setAttribute("aria-pressed", item.getAttribute("data-redline-action") === "breakpoint:" + id ? "true" : "false");
    });
    if (state.liveAppRoot) state.liveAppRoot.hidden = true;
    state.frame.hidden = false;
    state.frameShell.hidden = false;
    /* "Switching breakpoints recenters or correctly resets workspace
       scrolling" — always re-home the scroll position on every switch,
       not just the first load. */
    positionBreakpointPreview(true);
    /* In a gallery the iframe is already mounted, loaded and showing the
       selected overlay; resizing its viewport is the whole operation. */
    if (isGallery()) {
      setStatus(preset.width + " by " + preset.height + " preview selected.");
      schedule();
      window.setTimeout(schedule, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 280);
      return;
    }
    /* Round 29 — the preview iframe is now loaded exactly once, eagerly,
       from `enable()` (see there); this is only a defensive fallback in
       case that somehow never ran. */
    if (!state.frameLoadStarted) {
      state.frameLoadStarted = true;
      state.frame.src = previewUrl();
    }
    if (state.frameReady) {
      if (state.frameLoadingEl) state.frameLoadingEl.hidden = true;
      /* Already fully loaded + nav-state-restored (the common case,
         since loading started the moment Redline turned on) — either
         attach the live observers for the first time (if the user
         hasn't looked at any numeric breakpoint yet this session, or
         just came back from Current, which re-pointed the observers at
         `document`) or, if already attached to this exact document,
         just re-render. Never reloads or clears the iframe's content. */
      if (state.frameDocument !== state.frame.contentDocument) {
        observeInspectionDocument(state.frame.contentDocument, state.frame.contentWindow, true);
      } else {
        schedule();
      }
    } else {
      /* Still loading/restoring in the background (a fast click right
         after entering Redline) — show a lightweight placeholder
         instead of the raw, still-initializing document; `attachFrame`
         \u2192 `finishFrameAttach` (already in flight from the `load`
         listener) clears it and attaches as soon as it's ready, with no
         further action needed here. This is the one path that can
         legitimately show a brief "Loading preview\u2026" state instead
         of the live app — it is never a blank/white flash. */
      if (state.frameLoadingEl) state.frameLoadingEl.hidden = false;
    }
    setStatus(preset.width + " by " + preset.height + " preview selected.");
    schedule();
    window.setTimeout(schedule, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 280);
  }

  function setMeasureMode(mode) {
    state.measureMode = mode;
    state.root.querySelectorAll('[data-redline-action^="mode:"]').forEach(function (btn) {
      btn.setAttribute("aria-checked", btn.getAttribute("data-redline-action") === "mode:" + mode ? "true" : "false");
    });
    var hint = state.root.querySelector("[data-redline-mode-hint]");
    if (hint) hint.textContent = mode === "grid"
      ? "Spacing snaps to the nearest 8pt step; mismatches show actual \u2192 recommended in orange."
      : "Shows actual rounded values.";
    schedule();
  }

  /* ═══════════════════════════════════════════════════════════════════
     Overlay galleries

     Redline owns navigation and chrome; the preview document owns every
     overlay. All this side of the boundary does is ask
     `IamOverlayGallery` (see redline-gallery.js) for the registry, tell
     it which entry to show, and re-measure once the DOM has settled.
     ═══════════════════════════════════════════════════════════════════ */

  function galleryEntries() {
    return state.galleryEntries || [];
  }

  function currentGalleryEntry() {
    return galleryEntries()[state.galleryIndex] || null;
  }

  function renderGalleryBar() {
    var bar = state.galleryBar;
    if (!bar) return;
    var gallery = isGallery();
    bar.bar.hidden = !gallery;
    if (!gallery) return;
    var noun = galleryKind() === "toast" ? "toast" : "modal";
    bar.prev.setAttribute("aria-label", "Previous " + noun);
    bar.prev.setAttribute("title", "Previous " + noun);
    bar.next.setAttribute("aria-label", "Next " + noun);
    bar.next.setAttribute("title", "Next " + noun);
    /* Toasts are held open with the component's own "never auto-dismiss"
       option, and the label saying so lives out here in the chrome so it
       can never be measured as part of the toast. */
    bar.frozenEl.hidden = galleryKind() !== "toast";

    var entries = galleryEntries();
    var entry = currentGalleryEntry();
    bar.titleEl.textContent = entry ? entry.label : (state.galleryError || "No overlays registered");
    bar.countEl.textContent = entries.length
      ? (state.galleryIndex + 1) + " of " + entries.length
      : "";
    bar.prev.disabled = !entries.length || state.galleryIndex <= 0;
    bar.next.disabled = !entries.length || state.galleryIndex >= entries.length - 1;
    bar.resetEl.disabled = !entry;
  }

  function clearSelection() {
    state.hovered = null;
    state.locked = null;
    state.inspectorTargetKey = null;
    clearInspector();
    renderBreadcrumb(null);
  }

  /* Two frames plus the document's font promise: long enough for the
     freshly mounted overlay to lay out and for webfont metrics to land,
     so the first measurement drawn is never against provisional geometry. */
  function afterLayoutSettles(doc) {
    return new Promise(function (resolve) {
      var fonts = doc && doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve();
      fonts.catch(function () {}).then(function () {
        requestAnimationFrame(function () { requestAnimationFrame(resolve); });
      });
    });
  }

  function showGalleryEntry(index) {
    var api = galleryApi();
    var entries = galleryEntries();
    if (!api || !entries.length) { renderGalleryBar(); return Promise.resolve(); }
    var bounded = Math.max(0, Math.min(index, entries.length - 1));
    state.galleryIndex = bounded;
    var entry = entries[bounded];
    state.galleryError = "";
    renderGalleryBar();
    /* Stale selection goes before the swap, not after: the previously
       inspected node is about to be torn out of the document. */
    clearSelection();
    var token = (state.galleryToken || 0) + 1;
    state.galleryToken = token;
    return api.show(galleryKind(), entry.id).then(function () {
      if (!state.active || state.galleryToken !== token) return null;
      return afterLayoutSettles(state.frame && state.frame.contentDocument);
    }).then(function () {
      if (!state.active || state.galleryToken !== token) return;
      positionBreakpointPreview(false);
      schedule();
      setStatus(entry.label + ", " + (bounded + 1) + " of " + entries.length + ".");
    }).catch(function (err) {
      if (!state.active || state.galleryToken !== token) return;
      state.galleryError = "Could not render " + entry.label;
      renderGalleryBar();
      setStatus(state.galleryError + ". " + (err && err.message ? err.message : ""));
    });
  }

  function stepGallery(delta) {
    var entries = galleryEntries();
    if (!entries.length) return;
    var next = state.galleryIndex + delta;
    if (next < 0 || next > entries.length - 1) return;
    showGalleryEntry(next);
  }

  function resetGalleryEntry() {
    if (!isGallery()) return;
    showGalleryEntry(state.galleryIndex);
  }

  function loadGalleryEntries() {
    var api = galleryApi();
    state.galleryEntries = api ? api.entries(galleryKind()) : [];
    state.galleryIndex = 0;
    if (!api) state.galleryError = "Overlay registry unavailable in the preview";
  }

  function enterGallery() {
    if (!state.frame || !state.frameShell) return;
    if (state.liveAppRoot) state.liveAppRoot.hidden = true;
    state.frame.hidden = false;
    state.frameShell.hidden = false;
    positionBreakpointPreview(true);
    if (!state.frameReady) {
      /* The eager preload from `enable()` is normally long finished; if
         a very fast click beats it, show the placeholder and pick up
         again from `finishFrameAttach`. */
      if (state.frameLoadingEl) state.frameLoadingEl.hidden = false;
      state.pendingGalleryEnter = true;
      return;
    }
    state.pendingGalleryEnter = false;
    if (state.frameLoadingEl) state.frameLoadingEl.hidden = true;
    if (state.frameDocument !== state.frame.contentDocument) {
      observeInspectionDocument(state.frame.contentDocument, state.frame.contentWindow, true);
    }
    loadGalleryEntries();
    renderGalleryBar();
    showGalleryEntry(0);
  }

  /* Unwinds everything a gallery put into the preview document and walks
     it back to the page the user was really on, so "Back to page" and
     closing Redline both land on the untouched source page. */
  function leaveGallery() {
    var api = galleryApi();
    state.galleryToken = (state.galleryToken || 0) + 1;
    state.galleryEntries = [];
    state.galleryIndex = 0;
    state.galleryError = "";
    state.pendingGalleryEnter = false;
    if (!api) return Promise.resolve();
    return api.home().then(function () {
      var doc = state.frame && state.frame.contentDocument;
      if (doc && state.navBaseline) {
        try { restoreNavState(state.frame.contentWindow, doc, state.navBaseline); } catch (_) {}
      }
    }).catch(function () {});
  }

  function setPreviewMode(mode) {
    if (mode !== "page" && mode !== "modal-gallery" && mode !== "toast-gallery") return;
    if (mode === state.previewMode) return;
    var wasGallery = isGallery();
    state.previewMode = mode;
    if (state.root) state.root.setAttribute("data-preview-mode", mode);
    state.root.querySelectorAll('[data-redline-action^="previewmode:"]').forEach(function (btn) {
      var target = btn.getAttribute("data-redline-action").split(":")[1];
      if (btn.classList.contains("redline__nav-row")) {
        btn.setAttribute("aria-pressed", target === mode ? "true" : "false");
        btn.classList.toggle("is-selected", target === mode);
      }
    });
    clearSelection();
    var settled = wasGallery ? leaveGallery() : Promise.resolve();
    settled.then(function () {
      if (!state.active || state.previewMode !== mode) return;
      renderGalleryBar();
      if (mode === "page") {
        /* Hand the preview straight back to whichever page presentation
           the current breakpoint implies — no gallery residue, no
           re-entry cost. */
        if (state.breakpoint) {
          if (state.liveAppRoot) state.liveAppRoot.hidden = true;
          state.frame.hidden = false;
          state.frameShell.hidden = false;
          positionBreakpointPreview(true);
          if (state.frameDocument !== state.frame.contentDocument) {
            observeInspectionDocument(state.frame.contentDocument, state.frame.contentWindow, true);
          }
        } else {
          state.frame.hidden = true;
          state.frameShell.hidden = true;
          state.frame.style.width = ""; state.frame.style.height = "";
          state.frameShell.removeAttribute("style");
          if (state.liveAppRoot) state.liveAppRoot.hidden = false;
          positionLiveApp(true);
          attachCurrent();
        }
        setStatus("Current page preview restored.");
        schedule();
      } else {
        enterGallery();
        setStatus((mode === "toast-gallery" ? "Toast" : "Modal") + " gallery opened.");
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════════════
     Responsive Redline shell: below the desktop breakpoint the two docked
     side panels become collapsible overlays (spec "Responsive Redline
     shell") rather than permanently narrowing/covering the canvas. Only
     one panel is ever open as an overlay at a time so it never
     "permanently cover[s] the inspected UI"; opening one closes the
     other, and clicking the stage (the live canvas) closes whichever is
     open before the click can reach — and select — covered UI.
     ═══════════════════════════════════════════════════════════════════ */

  function setPanelOpen(side, open) {
    state.panelOpen[side] = open;
    var other = side === "left" ? "right" : "left";
    if (open) state.panelOpen[other] = false;
    if (state.leftPanel) state.leftPanel.classList.toggle("is-open", state.panelOpen.left);
    if (state.rightPanel) state.rightPanel.classList.toggle("is-open", state.panelOpen.right);
    var toggles = state.root.querySelectorAll("[data-redline-action^=\"panel:\"]");
    toggles.forEach(function (btn) {
      var btnSide = btn.getAttribute("data-redline-action").split(":")[1];
      btn.setAttribute("aria-expanded", state.panelOpen[btnSide] ? "true" : "false");
    });
  }

  function closePanelOverlays() {
    if (state.panelOpen.left) setPanelOpen("left", false);
    if (state.panelOpen.right) setPanelOpen("right", false);
  }

  function onWorkspaceClick(event) {
    var control = event.target.closest("[data-redline-action]");
    if (!control) {
      /* A click that lands on the stage itself (not a panel, not a
         control) while a narrow-shell panel overlay is open dismisses it
         first, per spec: "close or collapse the overlay before selecting
         covered UI" — the click that closes the overlay is consumed here
         and does not also reach/select the live canvas underneath. */
      if ((state.panelOpen.left || state.panelOpen.right) && event.target.closest("[data-redline-stage]")) {
        closePanelOverlays();
        event.preventDefault();
        event.stopPropagation();
      }
      return;
    }
    var action = control.getAttribute("data-redline-action");
    if (action === "close") disable();
    else if (action.indexOf("breakpoint:") === 0) { closePanelOverlays(); setBreakpoint(action.split(":")[1]); }
    else if (action.indexOf("mode:") === 0) setMeasureMode(action.split(":")[1]);
    else if (action.indexOf("previewmode:") === 0) { closePanelOverlays(); setPreviewMode(action.split(":")[1]); }
    else if (action === "gallery:prev") stepGallery(-1);
    else if (action === "gallery:next") stepGallery(1);
    else if (action === "gallery:reset") resetGalleryEntry();
    else if (action === "copy") copyValue(control);
    else if (action.indexOf("panel:") === 0) {
      var side = action.split(":")[1];
      setPanelOpen(side, !state.panelOpen[side]);
    }
  }

  function onWorkspaceChange(event) {
    var control = event.target.closest("[data-redline-action]");
    if (!control) return;
    var action = control.getAttribute("data-redline-action");
    if (action === "toggle:measurements") { state.showMeasurements = control.checked; schedule(); }
    else if (action === "toggle:gridoverlay") { state.showGridOverlay = control.checked; schedule(); }
  }

  /* ═══════════════════════════════════════════════════════════════════
     Enable / disable / toggle lifecycle (focus + localStorage snapshot
     restore, AbortController-scoped cleanup — ported from Rate Card).
     ═══════════════════════════════════════════════════════════════════ */

  function syncMenuState() {
    var row = document.getElementById("userMenuRedline");
    if (row) row.setAttribute("aria-checked", state.active ? "true" : "false");
  }

  function enable(source) {
    if (state.active || isPreview()) return;
    state.active = true;
    state.lastFocus = document.activeElement;
    state.measureMode = "clean";
    state.showMeasurements = true;
    state.showGridOverlay = false;
    state.breakpoint = "";
    state.previewScale = 1;
    state.frameReady = false;
    state.frameLoadStarted = false;
    state.restoreRetryTimer = 0;
    state.renderCount = 0;
    state.currentListenersAttached = false;
    state.colorSheetCache = null;
    state.colorSheetCacheDoc = null;
    state.inspectorTargetKey = null;
    state.panelOpen = { left: false, right: false };
    state.previewMode = "page";
    state.galleryEntries = [];
    state.galleryIndex = 0;
    state.galleryToken = 0;
    state.galleryError = "";
    state.pendingGalleryEnter = false;
    state.storageSnapshot = {};
    try {
      for (var i = 0; i < localStorage.length; i += 1) {
        var k = localStorage.key(i);
        state.storageSnapshot[k] = localStorage.getItem(k);
      }
    } catch (_) { state.storageSnapshot = null; }

    /* Capture scroll + "what page/tab/entity is open" BEFORE reparenting
       anything — see the "Numeric-breakpoint state bridge" block above.
       Current mode itself needs none of this replayed: mounting the real
       DOM (below) already preserves it exactly. */
    state.mainScrollX = window.scrollX || 0;
    state.mainScrollY = window.scrollY || 0;
    state.navSnapshot = captureNavState(document);
    /* Kept for the whole session (unlike `navSnapshot`, which is
       consumed by the one-time iframe load) so leaving a gallery can
       walk the preview back to the page the user was actually on. */
    state.navBaseline = captureNavState(document);

    state.aborter = new AbortController();
    var built = buildRoot();
    state.root = built.root;
    state.stage = built.stage;
    state.canvas = built.canvas;
    state.frameShell = built.frameShell;
    state.frame = built.frame;
    state.frameLoadingEl = built.frameLoadingEl;
    state.leftPanel = built.leftPanel;
    state.rightPanel = built.rightPanel;
    state.breadcrumbEl = built.breadcrumbEl;
    state.inspectorEl = built.inspectorEl;
    state.sizeLabelEl = built.sizeLabelEl;
    state.galleryBar = built.galleryBar;
    state.root.setAttribute("data-preview-mode", "page");
    /* Must run before `state.root` is appended to `document.body` below —
       `mountLiveApp` sweeps up every *current* body child, and the redline
       chrome itself must not be one of them. */
    mountLiveApp();
    document.documentElement.classList.add("redline-active");
    document.body.appendChild(state.root);
    /* Now that `state.root` is connected and laid out, size/center the
       live-app host and restore the page's own prior scroll position —
       see the note in `mountLiveApp`. */
    positionLiveApp(true);
    if (state.liveAppRoot) {
      state.liveAppRoot.scrollLeft = state.mainScrollX;
      state.liveAppRoot.scrollTop = state.mainScrollY;
    }
    syncMenuState();

    state.frame.addEventListener("load", attachFrame, { signal: state.aborter.signal });
    state.root.addEventListener("click", onWorkspaceClick, { signal: state.aborter.signal });
    state.root.addEventListener("change", onWorkspaceChange, { signal: state.aborter.signal });
    state.stage.addEventListener("scroll", schedule, { passive: true, signal: state.aborter.signal });
    window.addEventListener("resize", function () {
      if (state.breakpoint) positionBreakpointPreview(false); else positionLiveApp();
      schedule();
    }, { passive: true, signal: state.aborter.signal });

    attachCurrent();
    /* Round 29 (2026-08-11) — "keep one mounted preview instance and
       resize its viewport instead of remounting the entire application
       for every breakpoint": start loading the numeric-breakpoint
       iframe immediately, in the background, rather than lazily on the
       user's first breakpoint click. It reuses the exact same
       `navSnapshot` captured above, so by the time the user picks any
       numeric breakpoint the fresh document has (almost always)
       already finished loading and replaying its nav state — the
       switch just shows the already-ready iframe and resizes it,
       eliminating the load-time blank/white flash that a lazy,
       first-click load would otherwise produce. */
    state.frameLoadStarted = true;
    state.frame.src = previewUrl();
    setStatus("Redline Mode active" + (source ? " from " + source + "." : "."));
  }

  function disable() {
    if (!state.active) return;
    var focusTarget = state.lastFocus;
    /* Unwind any gallery before the workspace comes down. The overlays
       live in the preview iframe, which is about to be discarded whole,
       but the registry's own teardown is still run so nothing can be
       left holding a stub (a frozen timer, a spliced fixture array) if
       that document ever outlives this call. */
    if (isGallery()) {
      var api = galleryApi();
      if (api) { try { api.teardown(); } catch (_) {} }
    }
    state.previewMode = "page";
    state.galleryEntries = [];
    state.galleryIndex = 0;
    state.galleryToken = (state.galleryToken || 0) + 1;
    state.pendingGalleryEnter = false;
    state.navBaseline = null;
    state.active = false;
    if (state.raf) cancelAnimationFrame(state.raf);
    state.raf = 0;
    if (state.restoreRetryTimer) { window.clearTimeout(state.restoreRetryTimer); state.restoreRetryTimer = 0; }
    disconnectFrame();
    if (state.aborter) state.aborter.abort();
    state.aborter = null;
    /* Preserve whatever scroll position the user most recently landed on
       inside the live-app host (it may differ from the value captured at
       `enable()` if they scrolled while inspecting) before moving the
       real DOM back out and tearing down the workspace chrome. */
    if (state.liveAppRoot) {
      state.mainScrollX = state.liveAppRoot.scrollLeft;
      state.mainScrollY = state.liveAppRoot.scrollTop;
    }
    unmountLiveApp();
    if (state.root) state.root.remove();
    state.root = null; state.stage = null; state.canvas = null; state.frameShell = null; state.frame = null;
    state.frameLoadingEl = null;
    state.leftPanel = null; state.rightPanel = null; state.breadcrumbEl = null; state.inspectorEl = null; state.sizeLabelEl = null;
    document.documentElement.classList.remove("redline-active");
    state.currentListenersAttached = false;
    state.hovered = null; state.locked = null;
    state.previewScale = 1; state.frameReady = false; state.frameLoadStarted = false;
    state.colorSheetCache = null; state.colorSheetCacheDoc = null; state.inspectorTargetKey = null;
    window.scrollTo(state.mainScrollX || 0, state.mainScrollY || 0);
    if (state.storageSnapshot) {
      try {
        var currentKeys = [];
        for (var i = 0; i < localStorage.length; i += 1) currentKeys.push(localStorage.key(i));
        currentKeys.forEach(function (key) {
          if (!Object.prototype.hasOwnProperty.call(state.storageSnapshot, key)) localStorage.removeItem(key);
        });
        Object.keys(state.storageSnapshot).forEach(function (key) { localStorage.setItem(key, state.storageSnapshot[key]); });
      } catch (_) {}
    }
    state.storageSnapshot = null;
    syncMenuState();
    var fallback = document.getElementById("userMenuTrigger");
    var focusIsInteractive = focusTarget && focusTarget.matches
      && focusTarget.matches("button, a[href], input, textarea, select, [tabindex]");
    var nextFocus = focusIsInteractive && focusTarget.isConnected && !focusTarget.closest("[hidden]") ? focusTarget : fallback;
    if (nextFocus && typeof nextFocus.focus === "function") {
      window.setTimeout(function () { if (nextFocus.isConnected) nextFocus.focus({ preventScroll: true }); }, 0);
    }
  }

  function toggle(source) {
    if (state.active) disable(); else enable(source);
  }

  /* ═══════════════════════════════════════════════════════════════════
     Global shortcut + profile menu wiring
     ═══════════════════════════════════════════════════════════════════ */

  function onGlobalKeydown(event) {
    var shortcut = event.key && event.key.toLocaleLowerCase() === "d"
      && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey;
    if (shortcut && !isEditable(event.target)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      toggle("keyboard");
      return;
    }
    if (state.active && event.key === "Escape") {
      event.preventDefault();
      event.stopImmediatePropagation();
      disable();
    }
  }

  /* Left/Right step through the open gallery. Deliberately inert while
     focus is in a text field or inside the preview's own overlay, so
     typing a search query in a gallery modal — or arrowing through its
     result list — behaves exactly as it does in the product. Tab is
     never intercepted. */
  function onGalleryKeydown(event) {
    if (!state.active || !isGallery()) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    /* Only editable controls veto the shortcut, per the brief: a modal
       that has focused its own text field owns the arrow keys, but a
       modal that focused a button does not — and blocking on "anything
       in the preview has focus" would have disabled browsing entirely,
       since every dialog focuses something when it opens. */
    if (isEditable(event.target)) return;
    var doc = state.frame && state.frame.contentDocument;
    if (doc && isEditable(doc.activeElement)) return;
    if (isEditable(document.activeElement)) return;
    event.preventDefault();
    stepGallery(event.key === "ArrowRight" ? 1 : -1);
  }

  function wireProfileMenuRow() {
    var row = document.getElementById("userMenuRedline");
    if (!row) return;
    var shortcutEl = row.querySelector(".user-menu-shortcut");
    if (shortcutEl) shortcutEl.textContent = shortcutLabel();
    row.addEventListener("click", function (e) {
      e.stopPropagation();
      var menu = document.getElementById("userMenu");
      var trigger = document.getElementById("userMenuTrigger");
      if (menu) menu.classList.remove("open");
      if (trigger) { trigger.setAttribute("aria-expanded", "false"); trigger.focus(); }
      toggle("profile");
    });
  }

  window.IamRedlineMode = {
    enable: enable,
    disable: disable,
    toggle: toggle,
    isActive: function () { return state.active; },
    debugState: function () {
      return {
        active: state.active, breakpoint: state.breakpoint, measureMode: state.measureMode,
        showMeasurements: state.showMeasurements, showGridOverlay: state.showGridOverlay,
        renderCount: state.renderCount, overlays: document.querySelectorAll(".redline").length,
        hasLockedSelection: Boolean(state.locked), hasHoveredSelection: Boolean(state.hovered),
        previewScale: state.previewScale, frameReady: state.frameReady,
        stageWidth: state.stage ? state.stage.clientWidth : null,
        stageHeight: state.stage ? state.stage.clientHeight : null,
        previewMode: state.previewMode,
        galleryIndex: state.galleryIndex,
        galleryTotal: galleryEntries().length,
        galleryEntryId: (currentGalleryEntry() || {}).id || null,
        galleryError: state.galleryError || ""
      };
    },
    previewMode: function () { return state.previewMode; },
    setPreviewMode: setPreviewMode,
    galleryEntries: function (kind) {
      if (kind) {
        var api = galleryApi();
        return api ? api.entries(kind) : [];
      }
      return galleryEntries();
    },
    showGalleryEntry: function (index) { return showGalleryEntry(index); },
    stepGallery: stepGallery,
    resetGalleryEntry: resetGalleryEntry,
    breakpoints: BREAKPOINTS.slice()
  };

  if (isPreview()) {
    /* Inside the breakpoint iframe: forward the shortcut/Escape to the
       parent frame's Redline engine, same as Rate Card's preview guard. */
    document.addEventListener("keydown", function (event) {
      var shortcut = event.key && event.key.toLocaleLowerCase() === "d"
        && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey;
      if (shortcut && !isEditable(event.target)) {
        event.preventDefault();
        if (window.parent && window.parent.IamRedlineMode) window.parent.IamRedlineMode.toggle("keyboard");
      } else if (event.key === "Escape" && window.parent && window.parent.IamRedlineMode) {
        /* While a gallery is open the topmost thing on screen is a real
           product overlay, and Escape belongs to it — the app's own
           handler closes the dialog exactly as it does in production.
           Redline stays open; its own close button and \u2318D still
           work from the surrounding chrome. */
        var parentMode = typeof window.parent.IamRedlineMode.previewMode === "function"
          ? window.parent.IamRedlineMode.previewMode() : "page";
        if (parentMode !== "page") return;
        event.preventDefault();
        window.parent.IamRedlineMode.disable();
      }
    }, true);
    return;
  }

  document.addEventListener("keydown", onGlobalKeydown, true);
  document.addEventListener("keydown", onGalleryKeydown);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireProfileMenuRow);
  } else {
    wireProfileMenuRow();
  }
  syncMenuState();
})();
