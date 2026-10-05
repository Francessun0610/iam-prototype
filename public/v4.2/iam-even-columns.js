/* Packed-left column layout. IAM.evenColumns(tableEl, {minGap: 24, maxGap: 32}).
   Data columns keep a modest even gap; leftover width fills the card (fluid col or even across data cols).
   Utility columns (checkbox / row actions) stay fixed and are excluded from stretch.
   Resize is debounced; content widths are cached so live tables are not wiped. */
(function (global) {
  "use strict";

  var NS = (global.IAM = global.IAM || {});
  var MIN_GAP = 24;
  var MAX_GAP = 32;
  var UTIL_TO_DATA_GAP = 4;
  var RESIZE_DEBOUNCE_MS = 140;
  var NOP_PX = 2;
  var SKIP_MEASURE = /^(script|style|br)$/i;
  var UTILITY = /\b(c-sel|tm-th-actions|tm-td-actions|cr-act|au-eff-actions-col)\b/;
  var SKIP_COL = /\b(c-em|c-ct|cr-matrix-th-spacer|cr-matrix-cell-spacer)\b/;
  var FLUID = /\b(rp-func|tm-th-desc|tm-th-email|c-rl)\b/;
  /* Shared Edit Role matrix tracks (Frances): Functions + Read/Create/
     Update/Delete use the same fixed widths across every app block so
     those columns share the same left edge when scanning down the page.
     Approve/Archive use the same act width and sit after Delete. */
  var MATRIX_FN_W = 176;
  var MATRIX_ACT_W = 88;
  var APPLIED = [];
  var ticking = false;
  var reflowing = false;
  var pending = false;
  var resizeTimer = null;
  var runCount = 0;

  function toPx(value) {
    var n = parseFloat(value);
    return isFinite(n) ? n : 0;
  }

  function isVisible(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.hidden || el.getAttribute("aria-hidden") === "true") return false;
    if (SKIP_COL.test(el.className || "")) return false;
    var style = global.getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") return false;
    var rect = el.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return false;
    return true;
  }

  function scrollParent(el) {
    var node = el && el.parentElement;
    while (node && node !== document.body) {
      var style = global.getComputedStyle(node);
      var ox = style.overflowX;
      if (ox === "auto" || ox === "scroll") return node;
      node = node.parentElement;
    }
    return el.parentElement || document.documentElement;
  }

  function contentSpan(el, includeSort) {
    if (!el || !isVisible(el)) return 0;
    var min = Infinity;
    var max = -Infinity;
    var chips = el.querySelectorAll(
      ".ads-chip, .badge, .role-extra, .role-primary, a, img, svg, input, .name-avatar, .avatar-initials, .rp-func-text, .name-link, .name-cell-email"
    );
      Array.prototype.forEach.call(chips, function (node) {
      if (!includeSort && node.closest && node.closest(".sort-ico")) return;
      var rect = node.getBoundingClientRect();
      if (rect.width < 0.5) return;
      if (rect.left < min) min = rect.left;
      if (rect.right > max) max = rect.right;
    });
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !String(node.nodeValue).replace(/\s+/g, "")) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if (!parent || SKIP_MEASURE.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (!includeSort && parent.closest && parent.closest(".sort-ico")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      var range = document.createRange();
      range.selectNodeContents(node);
      var rects = range.getClientRects();
      var i;
      for (i = 0; i < rects.length; i++) {
        if (rects[i].width < 0.5) continue;
        if (rects[i].left < min) min = rects[i].left;
        if (rects[i].right > max) max = rects[i].right;
      }
    }
    if (max > min) return max - min;
    var label = el.querySelector(".th-inner > span:first-child, .th-label, .name-link, .td-stack-primary");
    if (label) return label.getBoundingClientRect().width;
    return 0;
  }

  function cellPadding(el) {
    var style = global.getComputedStyle(el);
    return {
      left: toPx(style.paddingLeft),
      right: toPx(style.paddingRight),
      align: style.textAlign
    };
  }

  function headerCells(root) {
    var row = root.tHead && root.tHead.rows[0];
    return row ? Array.prototype.filter.call(row.cells, isVisible) : [];
  }

  function bodyRows(root) {
    var rows = [];
    Array.prototype.forEach.call(root.tBodies, function (body) {
      Array.prototype.forEach.call(body.rows, function (row) {
        if (isVisible(row) && !row.querySelector(".empty-state, .au-eff-empty")) rows.push(row);
      });
    });
    return rows;
  }

  function matchingCell(row, headerCell, index) {
    if (row.cells && headerCell.cellIndex != null && row.cells[headerCell.cellIndex] != null) {
      return row.cells[headerCell.cellIndex];
    }
    return row.children[index] || null;
  }

  function columnCells(root, headerCell, index) {
    var cells = [];
    if (headerCell) cells.push(headerCell);
    bodyRows(root).forEach(function (row) {
      var cell = matchingCell(row, headerCell, index);
      if (cell && cells.indexOf(cell) === -1) cells.push(cell);
    });
    return cells;
  }

  function ensureColgroup(table, headers) {
    var group = table.querySelector("colgroup");
    var needed = table.tHead && table.tHead.rows[0] ? table.tHead.rows[0].cells.length : headers.length;
    if (!group) {
      group = document.createElement("colgroup");
      table.insertBefore(group, table.firstChild);
    }
    while (group.children.length < needed) group.appendChild(document.createElement("col"));
    return group;
  }

  function intrinsicWidth(el) {
    if (!el || el.nodeType !== 1) return 0;
    var clone = el.cloneNode(true);
    var cs = getComputedStyle(el);
    clone.style.position = "absolute";
    clone.style.left = "-99999px";
    clone.style.top = "0";
    clone.style.width = "auto";
    clone.style.minWidth = "0";
    clone.style.maxWidth = "none";
    clone.style.whiteSpace = "nowrap";
    clone.style.display = "inline-block";
    clone.style.visibility = "hidden";
    clone.style.pointerEvents = "none";
    clone.style.padding = "0";
    clone.style.border = "0";
    clone.style.font = cs.font;
    clone.style.letterSpacing = cs.letterSpacing;
    document.body.appendChild(clone);
    var width = contentSpan(clone);
    if (width < 1) width = clone.scrollWidth;
    document.body.removeChild(clone);
    return width;
  }

  function visualIndex(headers) {
    return headers
      .map(function (h, i) {
        return { i: i, left: h.getBoundingClientRect().left };
      })
      .sort(function (a, b) {
        return a.left - b.left;
      });
  }

  function cacheKey(tableEl, headers) {
    var id = tableEl.id || "anon";
    var view = "";
    var on = document.querySelector("#userViewToggle .seg-btn.on");
    if (on) view = on.getAttribute("data-view") || "";
    var search = "";
    if (id === "usersTable") {
      var s = document.getElementById("searchInput");
      if (s) search = s.value || "";
    } else if (id === "rpTable") {
      var rs = document.getElementById("rpSearchInput");
      if (rs) search = rs.value || "";
    } else if (id === "tmTable") {
      var ts = document.getElementById("tmSearchInput");
      if (ts) search = ts.value || "";
    }
    var cols = headers.map(function (h) { return h.className || ""; }).join(",");
    var rows = tableEl.tBodies[0] ? tableEl.tBodies[0].rows.length : 0;
    return [id, view, search, cols, rows].join("|");
  }

  function readBasePadding(cell) {
    var pl = cell.style.getPropertyValue("padding-left");
    var pr = cell.style.getPropertyValue("padding-right");
    cell.style.removeProperty("padding-left");
    cell.style.removeProperty("padding-right");
    var pad = cellPadding(cell);
    if (pl) cell.style.setProperty("padding-left", pl);
    if (pr) cell.style.setProperty("padding-right", pr);
    return pad;
  }

  function measureMeta(tableEl, headers) {
    var n = headers.length;
    var contentW = [];
    var padL = [];
    var padR = [];
    var utility = [];
    var i;
    for (i = 0; i < n; i++) {
      var sample = headers[i];
      var pad = readBasePadding(sample);
      padL[i] = pad.left;
      padR[i] = pad.right;
      utility[i] = UTILITY.test(sample.className);
      var fluid = FLUID.test(sample.className);
      var max = 0;
      columnCells(tableEl, sample, i).forEach(function (cell) {
        if (!cell) return;
        var w;
        if (fluid) {
          if (cell.tagName === "TH") {
            w = contentSpan(cell, true);
          } else {
            w = intrinsicWidth(cell);
            if (w < 1) w = contentSpan(cell, false);
          }
        } else {
          var includeSort = cell.tagName === "TH";
          w = contentSpan(cell, includeSort);
          if (w < 1) w = intrinsicWidth(cell);
        }
        if (w > max) max = w;
        var cellPad = readBasePadding(cell);
        if (cellPad.left > padL[i]) padL[i] = cellPad.left;
        if (cellPad.right > padR[i]) padR[i] = cellPad.right;
      });
      contentW[i] = Math.ceil(max);
      if (utility[i] && contentW[i] < 16) contentW[i] = 16;
    }
    return { contentW: contentW, padL: padL, padR: padR, utility: utility, n: n };
  }

  function packWidths(meta, headers, available, minGap) {
    var n = meta.n;
    var contentW = meta.contentW;
    var padL = meta.padL;
    var padR = meta.padR;
    var utility = meta.utility;
    var visual = visualIndex(headers);
    var extraLeft = [];
    var i;
    for (i = 0; i < n; i++) extraLeft[i] = 0;

    var dataGap = minGap;
    if (dataGap > MAX_GAP) dataGap = MAX_GAP;

    for (i = 0; i < visual.length - 1; i++) {
      var a = visual[i].i;
      var b = visual[i + 1].i;
      var pairGap = dataGap;
      if (utility[a] && !utility[b]) pairGap = UTIL_TO_DATA_GAP;
      else if (utility[a] && utility[b]) pairGap = 0;
      /* Users: pull Last Login and Region slightly left without
         changing Name or Role. 16px still keeps the columns separate. */
      else if (headers[b] && /\bc-ll\b|\bc-rg\b/.test(headers[b].className || "")) pairGap = 16;
      extraLeft[b] = Math.max(0, pairGap - padR[a] - padL[b]);
    }

    var widths = [];
    var used = 0;
    for (i = 0; i < n; i++) {
      widths[i] = contentW[i] + padL[i] + padR[i] + extraLeft[i];
      used += widths[i];
    }

    var leftover = Math.max(0, available - used);
    var scroll = used > available + 0.5;
    var fi = -1;
    for (i = 0; i < n; i++) {
      if (FLUID.test(headers[i].className)) {
        fi = i;
        break;
      }
    }
    if (fi >= 0) {
      var others = used - widths[fi];
      var maxFunc = available - others;
      var minFunc = padL[fi] + padR[fi] + extraLeft[fi] + Math.max(contentW[fi] < 80 ? contentW[fi] : 80, 48);
      if (maxFunc < widths[fi]) {
        widths[fi] = Math.max(minFunc, maxFunc);
        used = others + widths[fi];
        leftover = Math.max(0, available - used);
        scroll = used > available + 0.5;
      }
    }

    return {
      widths: widths,
      extraLeft: extraLeft,
      used: used,
      scroll: scroll,
      gap: dataGap,
      leftover: leftover,
      visual: visual
    };
  }

  function isMatrixTable(tableEl) {
    return !!(tableEl && tableEl.classList && tableEl.classList.contains("cr-matrix"));
  }

  /* Include ghost act headers (aria-hidden track spacers) so shared
     Read/Create/Update/Delete widths still consume a column slot. */
  function matrixHeaderCells(tableEl) {
    var row = tableEl.tHead && tableEl.tHead.rows[0];
    if (!row) return [];
    return Array.prototype.filter.call(row.cells, function (cell) {
      var cls = cell.className || "";
      return /\bcr-matrix-th-fn\b/.test(cls) || /\bcr-matrix-th-act\b/.test(cls);
    });
  }

  /* Edit Role matrices fill the section. The Functions column takes
     leftover width; each action track stays a compact fixed width so
     checkboxes do not spread across the card. */
  function packMatrixTracks() {
    var matrices = Array.prototype.filter.call(
      document.querySelectorAll("#createRolePage table.cr-matrix"),
      isVisible
    );
    if (!matrices.length) return;
    runCount += 1;
    matrices.forEach(function (tableEl) {
      var headers = matrixHeaderCells(tableEl);
      if (headers.length < 1) return;
      var widths = [];
      var extraLeft = [];
      var padL = [];
      var padR = [];
      var fnIndex = -1;
      var actCount = 0;
      var i;
      for (i = 0; i < headers.length; i++) {
        var h = headers[i];
        var isFn = /\bcr-matrix-th-fn\b/.test(h.className || "");
        var isAct = /\bcr-matrix-th-act\b/.test(h.className || "");
        if (isFn) fnIndex = i;
        if (isAct) actCount += 1;
        widths[i] = isFn ? MATRIX_FN_W : isAct ? MATRIX_ACT_W : 0;
        extraLeft[i] = 0;
        padL[i] = isFn ? 4 : isAct ? 8 : 0;
        padR[i] = isFn ? 24 : isAct ? 12 : 0;
      }
      var scroller = scrollParent(tableEl);
      var available = scroller ? scroller.clientWidth : tableEl.getBoundingClientRect().width;
      /* Every matrix uses the same action-track count. Size Functions
         from that shared count, not from this table's own headers, so
         a shorter table cannot grow Functions and slide Read. */
      var schemaActs = actCount;
      document.querySelectorAll("#createRolePage table.cr-matrix").forEach(function (other) {
        schemaActs = Math.max(schemaActs, other.querySelectorAll("col.cr-mcol-act").length);
      });
      var actsWidth = schemaActs * MATRIX_ACT_W;
      var fnWidth = Math.max(220, available - actsWidth);
      if (fnIndex >= 0) widths[fnIndex] = fnWidth;
      var used = 0;
      for (i = 0; i < widths.length; i++) used += widths[i];
      applyWidths(
        tableEl,
        headers,
        widths,
        extraLeft,
        padL,
        padR,
        used > available + 1,
        available,
        visualIndex(headers)
      );
      tableEl.style.width = "100%";
      tableEl.style.maxWidth = "100%";
      tableEl.style.minWidth = used > available + 1 ? used + "px" : "0";
      tableEl.__iamEvenCache = {
        key: "matrix-tracks",
        n: headers.length,
        contentW: widths.slice(),
        padL: padL,
        padR: padR,
        utility: headers.map(function () { return false; })
      };
      tableEl.__iamEven = {
        el: tableEl,
        n: headers.length,
        contentW: widths.slice(),
        padL: padL,
        padR: padR,
        widths: widths,
        extraLeft: extraLeft,
        gap: 24,
        scroll: used > available + 0.5,
        leftover: Math.max(0, available - used),
        available: available,
        matrixTracks: true
      };
      tableEl.setAttribute("data-even-cols", "true");
      if (APPLIED.indexOf(tableEl) === -1) APPLIED.push(tableEl);
    });
  }

  function evenColumns(tableEl, opts) {
    if (!tableEl || tableEl.tagName !== "TABLE" || !isVisible(tableEl)) return null;
    if (isMatrixTable(tableEl)) {
      packMatrixTracks();
      return tableEl.__iamEven || null;
    }
    opts = opts || {};
    var minGap = opts.minGap == null ? MIN_GAP : opts.minGap;
    var headers = headerCells(tableEl);
    if (headers.length < 2) return null;

    var scroller = opts.availableEl || scrollParent(tableEl);
    var available = opts.available;
    if (available == null) {
      available = scroller ? scroller.clientWidth : tableEl.getBoundingClientRect().width;
    }

    var key = cacheKey(tableEl, headers);
    var cached = tableEl.__iamEvenCache;
    if (!cached || cached.key !== key || cached.n !== headers.length) {
      cached = measureMeta(tableEl, headers);
      cached.key = key;
      tableEl.__iamEvenCache = cached;
    }

    var prev = tableEl.__iamEven;
    if (opts.fromResize && prev && Math.abs(available - prev.available) < NOP_PX) {
      return prev;
    }

    runCount += 1;
    var packed = packWidths(cached, headers, available, minGap);
    if (tableEl.id === "usersTable" && packed.used > available + 1) {
      var overflow = packed.used - available;
      var ui;
      for (ui = 0; ui < headers.length && overflow > 0.5; ui++) {
        if (!/\bc-rl\b/.test(headers[ui].className || "")) continue;
        var floor = Math.max(220, Math.round(cached.contentW[ui] * 0.85));
        var room = packed.widths[ui] - floor;
        var cut = Math.min(overflow, Math.max(0, room));
        packed.widths[ui] -= cut;
        packed.used -= cut;
        overflow -= cut;
      }
      packed.scroll = packed.used > available + 0.5;
      packed.leftover = Math.max(0, available - packed.used);
    }
    /* Fill the card when there is leftover width (Frances / wide screens):
       prefer the fluid column (Roles Functions), otherwise spread evenly
       across non-utility data columns. Avoid dumping all leftover into the
       last column (that left a huge empty Create Date / Region slab).
       Borders still reach the edge because the table spans available. */
    if (!packed.scroll && packed.leftover > 1 && headers.length) {
      var give = packed.leftover;
      var fluidAt = -1;
      var di;
      for (di = 0; di < headers.length; di++) {
        if (FLUID.test(headers[di].className || "")) {
          fluidAt = di;
          break;
        }
      }
      if (fluidAt >= 0) {
        packed.widths[fluidAt] += give;
        packed.used += give;
        packed.leftover = 0;
      } else {
        var dataCols = [];
        for (di = 0; di < headers.length; di++) {
          if (!cached.utility[di]) dataCols.push(di);
        }
        if (!dataCols.length) {
          packed.widths[headers.length - 1] += give;
          packed.used += give;
          packed.leftover = 0;
        } else {
          var base = Math.floor(give / dataCols.length);
          var rem = give - base * dataCols.length;
          for (di = 0; di < dataCols.length; di++) {
            var add = base + (di < rem ? 1 : 0);
            packed.widths[dataCols[di]] += add;
            packed.used += add;
          }
          packed.leftover = 0;
        }
      }
    }
    applyWidths(
      tableEl,
      headers,
      packed.widths,
      packed.extraLeft,
      cached.padL,
      cached.padR,
      packed.scroll,
      available,
      packed.visual
    );

    var record = {
      el: tableEl,
      n: cached.n,
      contentW: cached.contentW,
      padL: cached.padL,
      padR: cached.padR,
      utility: cached.utility,
      widths: packed.widths,
      extraLeft: packed.extraLeft,
      gap: packed.gap,
      scroll: packed.scroll,
      leftover: packed.leftover,
      available: available
    };
    tableEl.setAttribute("data-even-cols", "true");
    tableEl.__iamEven = record;
    if (APPLIED.indexOf(tableEl) === -1) APPLIED.push(tableEl);
    if (tableEl.id === "usersTable") {
      var usersPanel = document.getElementById("usersPanel");
      if (usersPanel) {
        usersPanel.style.setProperty("--users-table-trail", Math.max(0, Math.round(available - packed.used)) + "px");
      }
    }
    updateScrollShadow(scroller);
    return record;
  }

  function applyWidths(root, headers, widths, extraLeft, padL, padR, scroll, available, visual) {
    var n = headers.length;
    var bump = function (cell, index) {
      if (!cell) return;
      cell.style.setProperty("box-sizing", "border-box");
      cell.style.setProperty("width", widths[index] + "px", "important");
      cell.style.setProperty("min-width", widths[index] + "px", "important");
      cell.style.setProperty("max-width", widths[index] + "px", "important");
      cell.style.setProperty("padding-left", padL[index] + extraLeft[index] + "px", "important");
      cell.style.setProperty("padding-right", padR[index] + "px", "important");
    };

    root.style.tableLayout = "fixed";
    var total = 0;
    var i;
    for (i = 0; i < n; i++) total += widths[i];
    root.style.width = total + "px";
    root.style.minWidth = total + "px";
    root.style.maxWidth = "none";
    var group = ensureColgroup(root, headers);
    var allHeads = root.tHead && root.tHead.rows[0] ? root.tHead.rows[0].cells : [];
    Array.prototype.forEach.call(allHeads, function (cell) {
      if (isVisible(cell)) return;
      var colIndex = cell.cellIndex;
      if (group.children[colIndex]) {
        group.children[colIndex].style.width = "0px";
        group.children[colIndex].style.minWidth = "0px";
      }
      cell.style.setProperty("width", "0px", "important");
      cell.style.setProperty("min-width", "0px", "important");
      cell.style.setProperty("max-width", "0px", "important");
      cell.style.setProperty("padding", "0px", "important");
      bodyRows(root).forEach(function (row) {
        var match = row.cells[colIndex];
        if (!match) return;
        match.style.setProperty("width", "0px", "important");
        match.style.setProperty("min-width", "0px", "important");
        match.style.setProperty("max-width", "0px", "important");
        match.style.setProperty("padding", "0px", "important");
      });
    });
    for (i = 0; i < n; i++) {
      var colIndex = headers[i].cellIndex;
      if (group.children[colIndex]) {
        group.children[colIndex].style.width = widths[i] + "px";
        group.children[colIndex].style.minWidth = widths[i] + "px";
      }
    }
    headers.forEach(function (cell, index) {
      bump(cell, index);
    });
    bodyRows(root).forEach(function (row) {
      headers.forEach(function (header, index) {
        bump(matchingCell(row, header, index), index);
      });
    });
    pinStickyColumns(root, headers, widths, visual);
  }

  function pinStickyColumns(root, headers, widths, visual) {
    var acc = 0;
    visual.forEach(function (v) {
      var header = headers[v.i];
      columnCells(root, header, v.i).forEach(function (cell) {
        if (!cell) return;
        var cs = getComputedStyle(cell);
        if (cs.position === "sticky") {
          cell.style.setProperty("left", acc + "px", "important");
        }
      });
      acc += widths[v.i];
    });
  }

  function updateScrollShadow(scroller) {
    if (!scroller || !scroller.classList || !scroller.classList.contains("tbl-wrap")) return;
    var overflow = scroller.scrollWidth > scroller.clientWidth + 1;
    var notAtEnd = scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 1;
    scroller.setAttribute("data-scroll-shadow", overflow && notAtEnd ? "true" : "false");
  }

  function clearInlineLayout(tableEl) {
    if (!tableEl) return;
    tableEl.style.removeProperty("width");
    tableEl.style.removeProperty("min-width");
    tableEl.style.removeProperty("max-width");
    tableEl.style.removeProperty("table-layout");
    tableEl.removeAttribute("data-even-cols");
    tableEl.__iamEven = null;
    tableEl.__iamEvenCache = null;
    var nodes = tableEl.querySelectorAll("col, th, td");
    Array.prototype.forEach.call(nodes, function (node) {
      node.style.removeProperty("width");
      node.style.removeProperty("min-width");
      node.style.removeProperty("max-width");
      node.style.removeProperty("padding-left");
      node.style.removeProperty("padding-right");
      node.style.removeProperty("padding");
      node.style.removeProperty("left");
      node.style.removeProperty("box-sizing");
    });
  }

  function isV41ListTable(el) {
    /* Users, Roles, and Teams list geometry is the v4.1 column model
       (align() + stylesheet tracks). Do not pack those tables. */
    return !!el && (el.id === "usersTable" || el.id === "rpTable" || el.id === "tmTable");
  }

  function targets() {
    /* Editor tables still pack left. Matrices use packMatrixTracks.
       The three list tables are excluded — v4.1 alignment owns them. */
    return Array.prototype.filter.call(
      document.querySelectorAll(
        "#auEffBreakdownTable, table.tbl"
      ),
      function (el) {
        return isVisible(el) && !isMatrixTable(el) && el.id !== "auEffTable" && !isV41ListTable(el);
      }
    );
  }

  function invalidateCaches() {
    APPLIED.forEach(function (el) {
      el.__iamEvenCache = null;
    });
  }

  function runAll(opts) {
    if (reflowing) {
      pending = true;
      return;
    }
    reflowing = true;
    try {
      var seen = [];
      targets().forEach(function (el) {
        if (seen.indexOf(el) !== -1) return;
        seen.push(el);
        evenColumns(el, {
          minGap: MIN_GAP,
          fromResize: opts && opts.fromResize
        });
      });
      packMatrixTracks();
    } finally {
      reflowing = false;
      if (typeof NS.evenColumns.onApplied === "function") {
        try { NS.evenColumns.onApplied(opts); } catch (_e) {}
      }
      if (pending) {
        pending = false;
        schedule("pending");
      }
    }
  }

  function schedule(reason) {
    if (reason === "resize" || reason === "mut") {
      if (resizeTimer) global.clearTimeout(resizeTimer);
      resizeTimer = global.setTimeout(function () {
        resizeTimer = null;
        if (reason === "mut") invalidateCaches();
        runAll({ fromResize: reason === "resize" });
      }, RESIZE_DEBOUNCE_MS);
      return;
    }
    if (reflowing) {
      pending = true;
      return;
    }
    if (reason !== "pending") invalidateCaches();
    if (ticking) return;
    ticking = true;
    global.requestAnimationFrame(function () {
      ticking = false;
      runAll({ fromResize: false });
    });
  }

  function bind() {
    if (document.__iamEvenBound) return;
    document.__iamEvenBound = true;
    global.addEventListener("resize", function () {
      schedule("resize");
    });
    document.addEventListener("click", function (event) {
      if (
        event.target.closest(
          ".tab-btn, .seg-btn, .pg-n, .pg-nav, th[data-sort], th[data-rp-sort], th[data-tm-sort], [data-ads-component='search']"
        )
      ) {
        global.setTimeout(function () { schedule("click"); }, 40);
        global.setTimeout(function () { schedule("click"); }, 220);
      }
    });
    document.addEventListener("input", function (event) {
      if (event.target.closest("input, select")) {
        global.setTimeout(function () { schedule("input"); }, 40);
      }
    });
    document.addEventListener("change", function () {
      global.setTimeout(function () { schedule("change"); }, 40);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".tbl-wrap, .au-eff-wrap"), function (wrap) {
      wrap.addEventListener("scroll", function () {
        updateScrollShadow(wrap);
      }, { passive: true });
    });
    if (global.MutationObserver) {
      Array.prototype.forEach.call(
        document.querySelectorAll(
          "#usersTable tbody, #usersTable thead, #rpTable tbody, #rpTable thead, #tmTable tbody, #tmTable thead, #auEffTable tbody, #tmMembersTable tbody"
        ),
        function (root) {
          new MutationObserver(function () {
            if (reflowing) return;
            schedule("mut");
          }).observe(root, { childList: true, subtree: false });
        }
      );
    }
  }

  NS.evenColumns = evenColumns;
  NS.evenColumns.runAll = function () { runAll({ fromResize: false }); };
  NS.evenColumns.schedule = schedule;
  NS.evenColumns.minGap = MIN_GAP;
  NS.evenColumns.maxGap = MAX_GAP;
  Object.defineProperty(NS.evenColumns, "_runCount", {
    get: function () { return runCount; }
  });

  NS.evenColumns.clearInlineLayout = clearInlineLayout;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
    ["usersTable", "rpTable", "tmTable"].forEach(function (id) {
      clearInlineLayout(document.getElementById(id));
    });
    var usersPanel = document.getElementById("usersPanel");
    if (usersPanel) usersPanel.style.removeProperty("--users-table-trail");
    bind();
    schedule("init");
  });
} else {
  ["usersTable", "rpTable", "tmTable"].forEach(function (id) {
    clearInlineLayout(document.getElementById(id));
  });
  var usersPanelInit = document.getElementById("usersPanel");
  if (usersPanelInit) usersPanelInit.style.removeProperty("--users-table-trail");
    bind();
    schedule("init");
  }
})(window);
