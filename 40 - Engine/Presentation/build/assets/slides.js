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

  /* ------------------------------------------------------------------
     Lightbox: click any real figure image to open it full-size in a
     darkened overlay. Registered BEFORE the "forward navigation keys"
     listener below, and calls stopImmediatePropagation while open, so a
     keypress that the lightbox consumes (cycling an image, or exiting on
     the first/last one) never also reaches that later listener and gets
     forwarded to the parent runner as a slide-change. When the lightbox
     is closed this code does nothing and slide navigation behaves exactly
     as it always has.

     Navigation rule (deliberately NOT a flat cycle across every image in
     the whole deck): left/right/up/down move between this ONE slide's own
     images only. Going past the first or last image closes the lightbox
     and returns to normal slide view - it does not jump to the next or
     previous slide. Moving to a different slide is a separate action the
     learner takes afterward, from normal view, the same as if the
     lightbox had never opened. */
  (function initLightbox() {
    /* A composited multi-panel SVG (several source photos placed as
       <image data-lightbox-src="..."> children of one <svg>, e.g. a
       nomenclature grid) opts its individual panels into being their own
       lightbox items instead of the whole SVG being one: each such child
       is collected in place of its parent, so cycling still moves between
       this ONE slide's own real photos, not a flattened whole-composite
       view. An <svg>/<img> with no such children behaves exactly as
       before - the whole element is one lightbox item, cloned as-is. */
    var images = [];
    Array.prototype.forEach.call(
      document.querySelectorAll(".tpl-content img, .tpl-content svg"),
      function (el) {
        var subImages = el.tagName.toLowerCase() === "svg"
          ? el.querySelectorAll(":scope > image[data-lightbox-src], image[data-lightbox-src]")
          : [];
        if (subImages.length) {
          Array.prototype.forEach.call(subImages, function (sub) { images.push(sub); });
        } else {
          images.push(el);
        }
      }
    );
    if (!images.length) return;

    images.forEach(function (el) { el.classList.add("ew-lightbox-trigger"); });

    var overlay = document.createElement("div");
    overlay.className = "ew-lightbox-overlay";
    overlay.innerHTML =
      '<div class="ew-lightbox-card" role="dialog" aria-modal="true">' +
      '<button type="button" class="ew-lightbox-close" aria-label="Close">&times;</button>' +
      '<span class="ew-lightbox-count"></span>' +
      '<div class="ew-lightbox-figure"></div>' +
      '<p class="ew-lightbox-caption"></p>' +
      "</div>";
    document.body.appendChild(overlay);

    var figureBox = overlay.querySelector(".ew-lightbox-figure");
    var captionEl = overlay.querySelector(".ew-lightbox-caption");
    var countEl = overlay.querySelector(".ew-lightbox-count");
    var closeBtn = overlay.querySelector(".ew-lightbox-close");
    var currentIndex = -1;

    function captionFor(el) {
      /* prefer a citation scoped to this image's own panel; fall back to
         one shared citation line for the whole slide (e.g. a two-panel
         contrast template that credits both figures in one line below
         both panels, outside either panel's own wrapper) */
      var scope = el.closest(".tpl-panel, .tpl-fig-wrap, .tpl-fig");
      var source = scope && scope.querySelector(".tpl-source, .tmpl-source");
      if (!source) {
        var slide = el.closest(".slide");
        source = slide && slide.querySelector(".tpl-source, .tmpl-source");
      }
      if (source) return source.textContent.replace(/\s+/g, " ").trim();
      return el.getAttribute("alt") || "";
    }

    /* Renders a caller-supplied full-detail asset in place of the small
       on-page thumbnail, with an optional positioned overlay of real,
       clickable text labels (data-lightbox-callouts: a JSON array of
       {label, box:{minX,minY,maxX,maxY}} in the asset's own pixel
       space, given by data-lightbox-w / data-lightbox-h). Mirrors the
       diagram-cleanup module's renderCalloutOverlay/highlightRegion
       pattern - clicking a label toggles a highlight; nothing is drawn
       onto the image itself. */
    function showDetail(el) {
      var src = el.getAttribute("data-lightbox-src");
      var w = +el.getAttribute("data-lightbox-w") || 1;
      var h = +el.getAttribute("data-lightbox-h") || 1;
      var wrap = document.createElement("div");
      wrap.style.position = "relative";
      wrap.style.width = "100%";
      wrap.style.height = "100%";
      wrap.style.aspectRatio = w + " / " + h;
      var img = document.createElement("img");
      img.src = src;
      img.alt = el.getAttribute("data-lightbox-caption") || "";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";
      wrap.appendChild(img);

      var raw = el.getAttribute("data-lightbox-callouts");
      var callouts = [];
      try { callouts = raw ? JSON.parse(raw) : []; } catch (e) { callouts = []; }
      callouts.forEach(function (c) {
        var b = c.box;
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ew-lightbox-callout";
        btn.textContent = c.label;
        btn.style.left = (b.minX / w) * 100 + "%";
        btn.style.top = (b.minY / h) * 100 + "%";
        btn.style.width = ((b.maxX - b.minX) / w) * 100 + "%";
        btn.style.height = ((b.maxY - b.minY) / h) * 100 + "%";
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          btn.classList.toggle("is-active");
        });
        wrap.appendChild(btn);
      });
      figureBox.appendChild(wrap);
    }

    function show(index) {
      currentIndex = index;
      var el = images[index];
      figureBox.innerHTML = "";
      if (el.hasAttribute("data-lightbox-src")) showDetail(el);
      else figureBox.appendChild(el.cloneNode(true));
      captionEl.textContent = el.getAttribute("data-lightbox-caption") || captionFor(el);
      countEl.textContent = images.length > 1 ? index + 1 + " / " + images.length : "";
    }

    function open(index) {
      show(index);
      overlay.classList.add("is-open");
    }

    function close() {
      overlay.classList.remove("is-open");
      currentIndex = -1;
    }

    function isOpen() { return overlay.classList.contains("is-open"); }

    images.forEach(function (el, index) {
      el.addEventListener("click", function () { open(index); });
    });
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close(); /* click on the darkened backdrop */
    });

    document.addEventListener(
      "keydown",
      function (e) {
        if (!isOpen()) return;
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopImmediatePropagation();
          close();
          return;
        }
        var advancing = e.key === "ArrowRight" || e.key === "ArrowDown";
        var retreating = e.key === "ArrowLeft" || e.key === "ArrowUp";
        if (!advancing && !retreating) return; /* let every other key pass through untouched */
        e.preventDefault();
        e.stopImmediatePropagation();
        if (advancing) {
          if (currentIndex < images.length - 1) show(currentIndex + 1);
          else close(); /* past the last image on THIS slide - exit, don't touch slide nav */
        } else {
          if (currentIndex > 0) show(currentIndex - 1);
          else close(); /* past the first image on THIS slide - exit, don't touch slide nav */
        }
      },
      true /* capture: run ahead of the forward-to-parent listener below */
    );
  })();

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
