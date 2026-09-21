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
    /* A data table (.tmpl-table, the application role's decision-table
       variant) is real instructional content sized to fit its slide's
       fixed-height row via a small cqw font - exactly the case that reads
       fine up close but not from the back of a room. Tables get the same
       click-to-enlarge affordance as a figure: same trigger class, same
       overlay, but shown() renders a font-boosted clone (see below)
       instead of treating it as an image (2026-09-13, Franz - confirmed
       this gap is general to every .tmpl-table in the template set, not
       one slide). */
    Array.prototype.forEach.call(document.querySelectorAll(".tpl-content table.tmpl-table"), function (el) {
      images.push(el);
    });
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
      var isTable = el.tagName.toLowerCase() === "table";
      if (isTable) {
        /* A table has no fixed "native pixel size" the way an image does,
           so it can't scale via width/height percentages or object-fit -
           and a fixed font-size (the first version of this fix) breaks
           just as badly the other way: cloned into a NARROW lightbox card
           (the real, embedded-iframe case every course page actually
           renders in - not the wide standalone-file view this was first
           verified against, 2026-09-13), a fixed-size table's cells wrap
           across 2-3 lines each, multiplying total row height far past
           the box - unlike an image, shrinking a table's WIDTH can
           massively INCREASE its height. Confirmed: the same table that
           fit fine at 1280px wide overflowed its box by ~800px once
           actually opened through the real course shell's ~650px-wide
           embedded card.
           The fix that actually parallels object-fit:contain: render the
           table at its natural, unwrapped size (white-space:nowrap, so
           width reflects real content, not whatever width it's squeezed
           into), measure that real size, then scale the whole table down
           (or up) by a single factor so it fits the figure box on BOTH
           axes at once - the same "biggest size that still fully fits"
           behavior object-fit:contain gives an image, computed by hand
           since a table has no browser-native equivalent. */
        var tableClone = el.cloneNode(true);
        tableClone.removeAttribute("style");
        tableClone.classList.add("ew-lightbox-table");
        figureBox.appendChild(tableClone);
        window.requestAnimationFrame(function () {
          var boxW = figureBox.clientWidth, boxH = figureBox.clientHeight;
          var natW = tableClone.scrollWidth, natH = tableClone.scrollHeight;
          if (boxW && boxH && natW && natH) {
            var scale = Math.min(boxW / natW, boxH / natH);
            tableClone.style.transform = "scale(" + scale + ")";
          }
        });
      } else if (el.hasAttribute("data-lightbox-src")) {
        var w = +el.getAttribute("data-lightbox-w") || 1;
        var h = +el.getAttribute("data-lightbox-h") || 1;
        var raw = el.getAttribute("data-lightbox-callouts");
        var callouts = [];
        try { callouts = raw ? JSON.parse(raw) : []; } catch (e) { callouts = []; }
        showDetail(el, el.getAttribute("data-lightbox-src"), w, h, callouts);
      } else if (isSubImage) {
        /* an individual panel with no enhanced detail asset yet - still
           its own navigable item, enlarged from its own source, no
           callout overlay. Forced to fill the lightbox figure box (not
           just capped by max-width/max-height) so a modestly-sized source
           crop actually enlarges to presentation scale instead of
           displaying at its own native pixel size inside a much bigger
           card - see the sibling fix below for why this must be forced
           rather than left to the source image's own sizing. */
        var href = el.getAttribute("href") || el.getAttribute("xlink:href");
        var img = document.createElement("img");
        img.src = href;
        img.alt = el.getAttribute("data-lightbox-caption") || "";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        figureBox.appendChild(img);
      } else {
        /* A plain on-page <img>/<svg>, cloned as-is - including whatever
           inline style/width/height attributes it already carries from
           its small on-slide figure box. Stage 3 authoring was
           inconsistent here: some images were written with
           width:100%;height:100% (fills its container, so it also happens
           to fill the lightbox), others with max-width/max-height:100%
           (caps but never upscales, so the clone renders at its own
           native pixel size no matter how big the lightbox card is - the
           "not enlarged enough to point things out to a class" bug,
           2026-09-12). Stripped and re-forced here so every lightbox
           image fills the figure box the same way regardless of which
           pattern the source slide happened to use, rather than requiring
           every slide's markup to be individually consistent. */
        var clone = el.cloneNode(true);
        clone.removeAttribute("style");
        clone.removeAttribute("width");
        clone.removeAttribute("height");
        clone.style.width = "100%";
        clone.style.height = "100%";
        clone.style.objectFit = "contain";
        figureBox.appendChild(clone);
      }
      /* Caption purity (2026-09-13): the lightbox's whole job is a clean,
         zoomed-in view of ONE image - any other text competes with the
         image for the same fixed caption row, and on a multi-image slide
         (several filmstrip/application-case panes, none carrying its own
         data-lightbox-caption) the only fallback captionFor() could offer
         was the WHOLE SLIDE's shared citation - wrong for whichever pane
         wasn't the one it was written for, and often long enough to wrap
         (found on cvb-010: every pane showed "Figs. 1.9, 1.10, 1.12..."
         regardless of which one was actually open). Falling back to
         captionFor's whole-slide citation is only ever correct when this
         is truly the ONE lightbox-eligible item on the entire slide - the
         classic single-figure mechanism/nomenclature case that fallback
         was written for. Anywhere else (multiple panes, a composite),
         showing no caption is safer than showing a wrong or oversized one;
         the fix for a specific pane is giving it its own
         data-lightbox-caption, not stretching this fallback to guess. */
      var singleFigureSlide = images.length === 1;
      captionEl.textContent = el.getAttribute("data-lightbox-caption") ||
        (singleFigureSlide ? captionFor(el, true) : "");
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

  /* click-to-reveal for "Check Your Knowledge" answer overlays (legacy
     one-column template) */
  document.addEventListener("click", function (e) {
    var s = e.target.closest ? e.target.closest(".slide") : null;
    if (s && s.querySelector(".reveal-answer")) s.classList.toggle("is-revealed");
  });

  /* ------------------------------------------------------------------
     Canvas Phase 1 (2026-09-10) — generic, class/attribute-driven
     interactivity for the four templates added from the unconstrained
     Foundations preview review. Every handler below is scoped to a class
     that no template predating this pass uses, so this is purely
     additive: a slide built against any of the original eight templates
     runs through this file completely unaffected. No per-slide <script>
     is ever needed — Stage 3 (or a human) authors the markup shape
     gallery.css documents for the role, and the behaviour below is
     already wired to it, the same way the lightbox above already works
     off .tpl-content img/svg with no per-slide script. */

  /* role-check, interactive: click an option -> right/wrong in place,
     then reveal the reasoning. Retry-friendly (click a different option
     any number of times); "wrong" is a neutral dim, not a red/error
     color the design system does not otherwise define. */
  document.addEventListener("click", function (e) {
    var li = e.target.closest ? e.target.closest(".slide--role-check .tpl-options li") : null;
    if (!li) return;
    var list = li.closest(".tpl-options");
    Array.prototype.forEach.call(list.querySelectorAll("li"), function (o) {
      o.classList.remove("is-right", "is-wrong");
    });
    li.classList.add(li.getAttribute("data-correct") === "true" ? "is-right" : "is-wrong");
    var reveal = li.closest(".tpl-content").querySelector(".tpl-reveal");
    if (reveal) reveal.classList.add("is-shown");
  });

  /* role-nomenclature-reveal: click an item -> open it, show its detail
     pane (matched by position; each item's Nth position pairs with the
     Nth detail pane, no id bookkeeping needed in the authored markup). */
  document.addEventListener("click", function (e) {
    var item = e.target.closest ? e.target.closest(".tpl-reveal-grid .tpl-reveal-item") : null;
    if (!item) return;
    var grid = item.closest(".tpl-reveal-grid");
    var items = Array.prototype.slice.call(grid.querySelectorAll(".tpl-reveal-item"));
    var idx = items.indexOf(item);
    items.forEach(function (n) { n.classList.remove("is-open"); });
    item.classList.add("is-open");
    var detail = grid.parentElement.querySelector(".tpl-reveal-detail");
    if (!detail) return;
    var panes = detail.querySelectorAll(".tpl-reveal-detail__pane");
    Array.prototype.forEach.call(panes, function (p, i) {
      p.classList.toggle("is-active", i === idx);
    });
  });

  /* role-procedure-worked: click a Show/Tell/Do tab -> swap the active
     pane. Positional pairing, same as the reveal grid above. */
  document.addEventListener("click", function (e) {
    var tab = e.target.closest ? e.target.closest(".tpl-tabs .tpl-tab") : null;
    if (!tab) return;
    var tabs = tab.closest(".tpl-tabs");
    var tabList = Array.prototype.slice.call(tabs.querySelectorAll(".tpl-tab"));
    var idx = tabList.indexOf(tab);
    tabList.forEach(function (t) { t.classList.remove("is-active"); });
    tab.classList.add("is-active");
    var panes = tabs.parentElement.querySelectorAll(".tpl-tabpane");
    Array.prototype.forEach.call(panes, function (p, i) {
      p.classList.toggle("is-active", i === idx);
    });
  });

  /* role-application-case: click a filmstrip frame -> swap the active
     detail pane. Positional pairing, same pattern as above. */
  document.addEventListener("click", function (e) {
    var frame = e.target.closest ? e.target.closest(".tpl-filmstrip .tpl-frame") : null;
    if (!frame) return;
    var strip = frame.closest(".tpl-filmstrip");
    var frames = Array.prototype.slice.call(strip.querySelectorAll(".tpl-frame"));
    var idx = frames.indexOf(frame);
    frames.forEach(function (f) { f.classList.remove("is-active"); });
    frame.classList.add("is-active");
    var detail = strip.parentElement.querySelector(".tpl-frame-detail");
    if (!detail) return;
    var panes = detail.querySelectorAll(".tpl-frame-detail__pane");
    Array.prototype.forEach.call(panes, function (p, i) {
      p.classList.toggle("is-active", i === idx);
    });
  });

  /* Canvas Phase 1b (2026-09-10) */

  /* role-nomenclature-parse: click a part key -> highlight the matching
     tokens in the sentence and show that key's own definition. Fully
     markup-driven: each key carries its own `data-def`, authored the same
     way its label text is, so no per-slide script is ever needed. */
  document.addEventListener("click", function (e) {
    var key = e.target.closest ? e.target.closest(".tpl-parse-keys .tpl-parse-key") : null;
    if (!key) return;
    var keys = key.closest(".tpl-parse-keys");
    var part = key.getAttribute("data-part");
    Array.prototype.forEach.call(keys.querySelectorAll(".tpl-parse-key"), function (k) {
      k.classList.remove("is-active");
    });
    key.classList.add("is-active");
    var content = keys.closest(".tpl-content");
    Array.prototype.forEach.call(content.querySelectorAll(".tpl-tok"), function (t) {
      t.classList.toggle("is-on", t.getAttribute("data-part") === part);
    });
    var def = content.querySelector(".tpl-parse-def");
    if (def) def.textContent = key.getAttribute("data-def") || "";
  });

  /* role-nomenclature-equation (added 2026-09-21, Phase 3): click a step
     key -> reveal that step's part(s) AND every earlier step's part(s) on
     both the persistent schematic and the equation (cumulative, sticky),
     highlight only the current step's own part(s), and swap the shared
     description pane. Deliberately a NEW, additive-only handler scoped to
     its own class names (.tpl-step-keys / .tpl-step-key / .tpl-step-def)
     rather than an edit to role-nomenclature-parse's handler above: that
     handler's toggle is exclusive (one data-part "on" at a time, every
     other .tpl-tok turned off), which is correct for highlighting one
     sentence part but wrong here, where the whole point is a schematic
     that only ever gains labels as steps advance. Clicking an EARLIER
     step retracts every later callout (confirmed wanted behaviour, not a
     bug) rather than leaving a trail. */
  document.addEventListener("click", function (e) {
    var key = e.target.closest ? e.target.closest(".tpl-step-keys .tpl-step-key") : null;
    if (!key) return;

    var keys = key.closest(".tpl-step-keys");
    var stepKeys = Array.prototype.slice.call(keys.querySelectorAll(".tpl-step-key"));
    var idx = stepKeys.indexOf(key);

    stepKeys.forEach(function (k, i) {
      k.classList.toggle("is-active", i === idx);
      k.classList.toggle("is-done", i < idx);
    });

    // Union of every data-part named by this step and every step before it
    // (a step's data-part may itself be a space-separated list of 1-2 parts,
    // for a step that introduces two variables at once).
    var seenParts = [];
    stepKeys.slice(0, idx + 1).forEach(function (k) {
      (k.getAttribute("data-part") || "").split(/\s+/).forEach(function (p) {
        if (p && seenParts.indexOf(p) === -1) seenParts.push(p);
      });
    });
    var currentParts = (key.getAttribute("data-part") || "").split(/\s+/).filter(Boolean);

    var content = keys.closest(".tpl-content");
    Array.prototype.forEach.call(content.querySelectorAll(".tpl-tok"), function (t) {
      var p = t.getAttribute("data-part");
      t.classList.toggle("is-revealed", seenParts.indexOf(p) !== -1);
      t.classList.toggle("is-on", currentParts.indexOf(p) !== -1);
    });

    var def = content.querySelector(".tpl-step-def");
    if (def) def.textContent = key.getAttribute("data-def") || "";
  });

  /* role-application-pick: click an item -> mark it selected and render
     its own authored worked-analysis markup (data-work, an HTML string
     the slide author writes the same way any other slide content is
     written) into the shared work pane below. */
  document.addEventListener("click", function (e) {
    var item = e.target.closest ? e.target.closest(".tpl-pick-list .tpl-pick-item") : null;
    if (!item) return;
    var list = item.closest(".tpl-pick-list");
    Array.prototype.forEach.call(list.querySelectorAll(".tpl-pick-item"), function (i) {
      i.classList.remove("is-selected");
    });
    item.classList.add("is-selected");
    var work = list.closest(".tpl-content").querySelector(".tpl-pick-work");
    if (work) work.innerHTML = item.getAttribute("data-work") || "";
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
