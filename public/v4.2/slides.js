(function () {
  "use strict";

  var deck = document.querySelector(".slides-deck");
  var stage = document.getElementById("slidesStage");
  if (!deck || !stage) return;

  var slides = Array.prototype.slice.call(stage.querySelectorAll(".slide"));
  var total = slides.length;
  if (!total) return;

  var live = document.getElementById("slidesLive");
  var idx = 0;

  function updateScale() {
    // Leave margin around the stage so the 40px rounded corners on the
    // slide card are visible against the deck's black background.
    var margin = 32;
    var availW = Math.max(320, window.innerWidth - margin * 2);
    var availH = Math.max(240, window.innerHeight - margin * 2);
    var scale = Math.min(availW / 1920, availH / 1080);
    document.documentElement.style.setProperty("--sl-scale", String(scale));
  }

  function setIndex(next) {
    idx = Math.max(0, Math.min(total - 1, next));
    for (var i = 0; i < total; i++) {
      var on = i === idx;
      slides[i].classList.toggle("is-active", on);
      slides[i].setAttribute("aria-hidden", on ? "false" : "true");
    }
    if (live) live.textContent = "Slide " + (idx + 1) + " of " + total;
    try {
      history.replaceState(null, "", "slides.html#" + (idx + 1));
    } catch (e) { /* noop */ }
  }

  function next() { setIndex(idx + 1); }
  function prev() { setIndex(idx - 1); }
  function goToFirst() { setIndex(0); }

  var hashMatch = typeof location.hash === "string" && location.hash.match(/^#(\d+)$/);
  if (hashMatch) {
    var n = parseInt(hashMatch[1], 10);
    if (n >= 1 && n <= total) setIndex(n - 1);
    else setIndex(0);
  } else {
    setIndex(0);
  }

  updateScale();
  window.addEventListener("resize", updateScale);
  window.addEventListener("orientationchange", updateScale);

  window.addEventListener("hashchange", function () {
    var m = typeof location.hash === "string" && location.hash.match(/^#(\d+)$/);
    if (m) {
      var target = parseInt(m[1], 10);
      if (target >= 1 && target <= total) setIndex(target - 1);
    }
  });

  deck.addEventListener("click", function (e) {
    if (e.target.closest("a, button, [role='button']")) return;
    if (idx < total - 1) next();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Escape") {
      e.preventDefault();
      goToFirst();
    }
  });

  var backIntro = document.getElementById("slidesBackIntro");
  if (backIntro) {
    backIntro.addEventListener("click", function (e) {
      e.stopPropagation();
      goToFirst();
    });
  }
})();
