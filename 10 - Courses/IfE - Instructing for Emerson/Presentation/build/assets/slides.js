/* emerson-workbench slide behaviour — linked by every slides/1400-NNN.html.
   Kept tiny and dependency-free. */
(function () {
  "use strict";
  var inFrame = window.parent && window.parent !== window;

  /* embedded in the course shell: drop the dark stage + per-slide chrome so the
     slide sits cleanly inside the content card. Implies the 16:9 aspect below. */
  if (location.search.indexOf("embed=1") > -1) {
    document.documentElement.classList.add("ew-embedded", "ew-16x9");
  }
  /* 16:9 aspect on its own, chrome and text untouched - the raw single-slide
     viewer (build/index.html) requests this on every slide: 4:3 is retired
     as a target, but the QA view still needs everything visible that
     ?embed=1 alone would hide. */
  if (location.search.indexOf("ratio=16x9") > -1) {
    document.documentElement.classList.add("ew-16x9");
  }
  /* visual-only: the course's context pane carries the teaching text, so hide
     the slide's explanatory body — keep titles, figures, tables, and short
     positioned labels / callouts (a name, not a sentence) */
  if (location.search.indexOf("visual=1") > -1) {
    document.documentElement.classList.add("ew-visual");
    document.addEventListener("DOMContentLoaded", pruneToVisual);
    if (document.readyState !== "loading") pruneToVisual();
  }
  function pruneToVisual() {
    var slide = document.querySelector(".slide");
    if (!slide) return;
    var candidates = slide.querySelectorAll(
      ".slide-textbox, .slide-label, .fig-caption, .slide-cols li, .divider-lead"
    );
    Array.prototype.forEach.call(candidates, function (node) {
      var txt = (node.textContent || "").replace(/\s+/g, " ").trim();
      var words = txt ? txt.split(" ").length : 0;
      // keep only short labels: a name / heading, not a phrase an instructor reads
      if (txt.length > 28 || words > 5) node.style.display = "none";
    });
  }

  /* forward navigation keys up to the runner (cross-origin safe) */
  if (inFrame) {
    var FWD = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown",
               "PageDown", "PageUp", " ", "Home", "End",
               "f", "F", "s", "S", "g", "G", "r", "R", "Escape"];
    document.addEventListener("keydown", function (e) {
      if (FWD.indexOf(e.key) > -1) {
        window.parent.postMessage({ ew: "key", key: e.key, shift: e.shiftKey }, "*");
        if (e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown") e.preventDefault();
      }
    });
    window.parent.postMessage({
      ew: "ready",
      slide: document.querySelector(".slide") &&
             document.querySelector(".slide").getAttribute("data-slide"),
      hasNotes: !!document.querySelector(".notes"),
      review: (document.querySelector(".slide") || {}).getAttribute &&
              document.querySelector(".slide").getAttribute("data-review") || ""
    }, "*");
  }

  /* click-to-reveal for "Check Your Knowledge" answer overlays */
  document.addEventListener("click", function (e) {
    var s = e.target.closest ? e.target.closest(".slide") : null;
    if (s && s.querySelector(".reveal-answer")) s.classList.toggle("is-revealed");
  });

  /* runner asks to show / hide speaker notes or the review ribbons */
  window.addEventListener("message", function (e) {
    if (!e.data) return;
    if (e.data.ew === "notes") {
      document.body.classList.toggle("show-notes", !!e.data.on);
    } else if (e.data.ew === "review") {
      document.body.classList.toggle("show-review", !!e.data.on);
    }
  });
})();
