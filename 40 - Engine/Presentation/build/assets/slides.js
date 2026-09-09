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
    /* A composited multi-panel SVG (several source photos as direct
       <image> children of one <svg>, e.g. a nomenclature grid) opts each
       panel into being its own lightbox item instead of the whole SVG
       being one: every direct <image> child is collected in place of its
       parent whenever there is more than one, so cycling moves between
       this ONE slide's own real photos, not a flattened whole-composite
       view. A panel with its own data-lightbox-src gets the enhanced
       cleaned/callout-annotated detail asset (see showDetail); a panel
       with none still becomes its own navigable item, just enlarged from
       its own href with no callout overlay - the basic per-panel
       navigation does not depend on every figure having been through the
       full cleanup pipeline. An <svg>/<img> with only one image (or none)
       behaves as before - the whole element is one lightbox item. */
    var images = [];
    Array.prototype.forEach.call(
      document.querySelectorAll(".tpl-content img, .tpl-content svg"),
      function (el) {
        var subImages = el.tagName.toLowerCase() === "svg"
          ? el.querySelectorAll(":scope > image")
          : [];
        if (subImages.length > 1) {
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
      '<div class="ew-lightbox-head">' +
      '<button type="button" class="ew-lightbox-close" aria-label="Close">&times;</button>' +
      '<span class="ew-lightbox-count"></span>' +
      "</div>" +
      '<div class="ew-lightbox-figure"></div>' +
      '<p class="ew-lightbox-caption"></p>' +
      "</div>";
    document.body.appendChild(overlay);

    var figureBox = overlay.querySelector(".ew-lightbox-figure");
    var captionEl = overlay.querySelector(".ew-lightbox-caption");
    var countEl = overlay.querySelector(".ew-lightbox-count");
    var closeBtn = overlay.querySelector(".ew-lightbox-close");
    var currentIndex = -1;

    /* A citation scoped to THIS image's own panel is safe to show as its
       caption. The whole-slide fallback is reserved for a top-level
       single/whole-composite item (e.g. a two-panel contrast template
       crediting both figures in one line outside either panel) - it is
       deliberately NOT used for an individual panel of a multi-image
       composite, where that citation covers every panel at once and
       would read as unrelated footnote text bleeding into one panel's
       enlarged view. */
    function captionFor(el, wholeSlideFallback) {
      var scope = el.closest(".tpl-panel, .tpl-fig-wrap, .tpl-fig");
      var source = scope && scope.querySelector(".tpl-source, .tmpl-source");
      if (!source && wholeSlideFallback) {
        var slide = el.closest(".slide");
        source = slide && slide.querySelector(".tpl-source, .tmpl-source");
      }
      if (source) return source.textContent.replace(/\s+/g, " ").trim();
      return el.getAttribute
        ? el.getAttribute("alt") || ""
        : "";
    }

    /* Sizes an <img> against the actual rendered figure box using the
       same letterboxing math as CSS object-fit:contain, then positions
       any callout buttons in real pixels against that same computed
       rectangle - not CSS percentages against a wrapper whose own size
       may not match the image's true aspect ratio. Runs after the image
       has a final layout size (rAF), which is also what keeps this
       correct at any card size the full-viewport lightbox ends up with,
       rather than assuming a fixed slide-container box. */
    function layoutFigure(container, img, w, h, callouts) {
      function place() {
        var boxW = container.clientWidth, boxH = container.clientHeight;
        if (!boxW || !boxH) return;
        var scale = Math.min(boxW / w, boxH / h);
        var dispW = w * scale, dispH = h * scale;
        var offX = (boxW - dispW) / 2, offY = (boxH - dispH) / 2;
        img.style.width = dispW + "px";
        img.style.height = dispH + "px";
        img.style.left = offX + "px";
        img.style.top = offY + "px";
        Array.prototype.forEach.call(container.querySelectorAll(".ew-lightbox-callout"), function (btn) {
          var b = JSON.parse(btn.getAttribute("data-box"));
          btn.style.left = offX + (b.minX / w) * dispW + "px";
          btn.style.top = offY + (b.minY / h) * dispH + "px";
          btn.style.width = ((b.maxX - b.minX) / w) * dispW + "px";
          btn.style.height = ((b.maxY - b.minY) / h) * dispH + "px";
        });
      }
      window.requestAnimationFrame(place);
      window.addEventListener("resize", place);
    }

    /* Renders a caller-supplied full-detail asset in place of the small
       on-page thumbnail, with an optional positioned overlay of real,
       clickable text labels (data-lightbox-callouts: a JSON array of
       {label, box:{minX,minY,maxX,maxY}} in the asset's own pixel
       space, given by data-lightbox-w / data-lightbox-h). Mirrors the
       diagram-cleanup module's renderCalloutOverlay/highlightRegion
       pattern - clicking a label toggles a highlight; nothing is drawn
       onto the image itself. */
    function showDetail(el, src, w, h, callouts) {
      var wrap = document.createElement("div");
      wrap.className = "ew-lightbox-detail-wrap";
      var img = document.createElement("img");
      img.src = src;
      img.alt = el.getAttribute("data-lightbox-caption") || "";
      wrap.appendChild(img);
      callouts.forEach(function (c) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ew-lightbox-callout";
        btn.textContent = c.label;
        btn.setAttribute("data-box", JSON.stringify(c.box));
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          btn.classList.toggle("is-active");
        });
        wrap.appendChild(btn);
      });
      figureBox.appendChild(wrap);
      layoutFigure(wrap, img, w, h, callouts);
    }

    function show(index) {
      currentIndex = index;
      var el = images[index];
      figureBox.innerHTML = "";
      var isSubImage = el.namespaceURI === "http://www.w3.org/2000/svg" && el.tagName.toLowerCase() === "image";
      if (el.hasAttribute("data-lightbox-src")) {
        var w = +el.getAttribute("data-lightbox-w") || 1;
        var h = +el.getAttribute("data-lightbox-h") || 1;
        var raw = el.getAttribute("data-lightbox-callouts");
        var callouts = [];
        try { callouts = raw ? JSON.parse(raw) : []; } catch (e) { callouts = []; }
        showDetail(el, el.getAttribute("data-lightbox-src"), w, h, callouts);
      } else if (isSubImage) {
        /* an individual panel with no enhanced detail asset yet - still
           its own navigable item, enlarged from its own source, no
           callout overlay */
        var href = el.getAttribute("href") || el.getAttribute("xlink:href");
        var img = document.createElement("img");
        img.src = href;
        img.alt = el.getAttribute("data-lightbox-caption") || "";
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        img.style.width = "auto";
        img.style.height = "auto";
        img.style.objectFit = "contain";
        figureBox.appendChild(img);
      } else {
        figureBox.appendChild(el.cloneNode(true));
      }
      captionEl.textContent = el.getAttribute("data-lightbox-caption") || captionFor(el, !isSubImage);
      countEl.textContent = images.length > 1 ? index + 1 + " / " + images.length : "";
    }

    function notifyParent(isOpenNow) {
      if (inFrame) window.parent.postMessage({ ew: "lightbox", open: isOpenNow }, "*");
    }

    function open(index) {
      show(index);
      overlay.classList.add("is-open");
      notifyParent(true);
    }

    function close() {
      overlay.classList.remove("is-open");
      currentIndex = -1;
      notifyParent(false);
    }

    function isOpen() { return overlay.classList.contains("is-open"); }

    images.forEach(function (el, index) {
      el.addEventListener("click", function () { open(index); });
    });
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close(); /* click on the darkened backdrop */
    });
    /* clicking the enlarged image again closes the lightbox, same as the
       zoom-in cursor that opened it - but not when the click is on a
       callout label, which has its own click behaviour (toggle highlight)
       and must not also close the lightbox out from under it */
    figureBox.addEventListener("click", function (e) {
      if (!e.target.closest(".ew-lightbox-callout")) close();
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
