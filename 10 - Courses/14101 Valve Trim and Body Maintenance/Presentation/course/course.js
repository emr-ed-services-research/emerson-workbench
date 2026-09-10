/* course.js — runtime for the Emerson Workbench learning-environment shell.
   Course-agnostic: everything specific comes from window.EW_COURSE
   (course-data.js) or course.json via fetch. Top-level identity: teaching days;
   chapters & modules nest inside. */
(function () {
  "use strict";

  var C = null;
  var MODS = [];                 // flat list of every module in course order
  var SPINE = [];                // linear nav stops: bookend / day / chapter / module cards
  var DAYS_BY_ID = {};           // day.id  -> day   (day-intro cards)
  var CHS_BY_ID = {};            // ch.id   -> chapter (chapter-intro cards)
  var STORE_KEY = null;          // set in boot(): "ew<course.code>.progress"
  var progress = { seen: {}, done: {} };
  // Title splash (2026-09-09): a fresh page load lands on Module 0's own first
  // page (the branded title slide) instead of the generic course-overview
  // card - "what's on screen when the door opens", not a click away. In-
  // memory only, not persisted: reset on every reload on purpose, since a
  // fresh load is exactly the "walking in" moment this exists for. The
  // overview card is not removed - Continue reveals it exactly as before;
  // every other route (day/chapter/module/page) is unaffected.
  var splashDismissed = false;

  var el = {
    toc: byId("toc"), ctx: byId("ctx"),
    tocList: byId("tocList"), crumbs: byId("crumbs"), card: byId("card"),
    dots: byId("dots"), pos: byId("pos"), stageNav: byId("stageNav"),
    btnPrev: byId("btnPrev"), btnNext: byId("btnNext"),
    ctxHere: byId("ctxHere"), ctxMod: byId("ctxMod"), ctxObj: byId("ctxObj"),
    ctxConcepts: byId("ctxConcepts"), ctxCheckWrap: byId("ctxCheckWrap"), ctxCheck: byId("ctxCheck"),
    ftRight: byId("ftRight"), progressPct: byId("progressPct"),
    progressBar: byId("progressBar"), hdProgress: byId("hdProgress"),
    hdDay: byId("hdDay")
  };
  function byId(id) { return document.getElementById(id); }
  function h(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  /* A <summary> in the TOC navigates to its section's intro card on click.
     Clicking the caret (or clicking while already on that hash) falls through
     to the native expand / collapse instead. */
  function navOnSummary(summary, hash, caretSel) {
    summary.addEventListener("click", function (e) {
      if (caretSel && e.target.closest(caretSel)) return;      // caret = toggle
      if (location.hash === hash) return;                       // already here = toggle
      e.preventDefault();
      location.hash = hash;
    });
  }

  if (window.EW_COURSE) { boot(window.EW_COURSE); }
  else {
    fetch("course.json").then(function (r) { return r.json(); }).then(boot).catch(function () {
      el.card.innerHTML = '<div class="ov"><p>Could not load <code>course.json</code>. Use <code>course-data.js</code>.</p></div>';
    });
  }

  function boot(data) {
    C = data;
    C._slidePrefix = C.slidePrefix || (C.course.code + "-");
    STORE_KEY = "ew" + C.course.code + ".progress";
    progress = loadProgress();
    byId("ftLeft").textContent = C.course.footer || "";
    document.title = C.course.code + " " + C.course.title + " — Emerson Workbench";
    var hdT = byId("hdTitle");
    if (hdT) hdT.innerHTML = esc(C.course.code) + ' <span>·&nbsp; ' + esc(C.course.title) + '</span>';

    // --- flatten to MODS in course order: m0, day chapters..., wrap ---
    if (C.moduleZero) { C.moduleZero._kind = "m0"; C.moduleZero._pages = C.moduleZero.pages || []; MODS.push(C.moduleZero); }
    C.days.forEach(function (day) {
      day.chapters.forEach(function (ch) {
        ch._day = day;
        (ch.modules || []).forEach(function (m) {
          m._kind = "module"; m._ch = ch; m._day = day;
          m._pages = m.pages || [];
          m._check = (m.check && m.check.length) ? m.check : null;
          MODS.push(m);
        });
      });
    });
    if (C.wrapUp) { C.wrapUp._kind = "wrap"; C.wrapUp._pages = C.wrapUp.pages || []; MODS.push(C.wrapUp); }

    C.days.forEach(function (day) {
      DAYS_BY_ID[day.id] = day;
      day.chapters.forEach(function (ch) { CHS_BY_ID[ch.id] = ch; });
    });

    // --- linear spine: every stop the Prev / Next buttons walk through, in
    //     order. Day and chapter intro cards are real stops, not side pages. ---
    if (C.moduleZero) SPINE.push({ t: "bookend", mod: C.moduleZero, hash: "#" + C.moduleZero.id });
    C.days.forEach(function (day) {
      SPINE.push({ t: "day", day: day, hash: "#" + day.id });
      day.chapters.forEach(function (ch) {
        SPINE.push({ t: "chapter", ch: ch, hash: "#" + ch.id });
        (ch.modules || []).forEach(function (m) {
          SPINE.push({ t: "module", mod: m, hash: "#" + m.id });
        });
      });
    });
    if (C.wrapUp) SPINE.push({ t: "bookend", mod: C.wrapUp, hash: "#" + C.wrapUp.id });

    buildToc();
    wireChrome();
    wireLibrary();
    window.addEventListener("hashchange", render);
    render();
  }

  /* ---------- table of contents -------------------------------- */
  function bookend(m, tag) {
    var det = h('<details class="toc__sec toc__bookend" id="tocsec-' + m.id + '"></details>');
    det.appendChild(h(
      '<summary class="toc__sec-hd">' +
        '<span class="toc__b-tag">' + tag + '</span>' +
        '<span class="toc__b-title">' + esc(m.title) + '</span>' +
        '<span class="toc__b-dot" id="tocdot-' + m.id + '"></span>' +
        '<span class="toc__sec-caret">▸</span>' +
      '</summary>'));
    var body = h('<div class="toc__sec-body"></div>');
    var goto = h('<a class="toc__sec-open" href="#' + m.id + '">Open ' + esc(m.title) + ' →</a>');
    body.appendChild(goto);
    var pl = h('<ul class="toc__pagelist"></ul>');
    (m.pages || []).forEach(function (pg, i) {
      pl.appendChild(h('<li id="tocp-' + m.id + '-' + i + '"><a href="#' + m.id + '/' + i + '">' +
        esc(slideTitle(pg) || ("Page " + (i + 1))) + '</a></li>'));
    });
    body.appendChild(pl);
    det.appendChild(body);
    return det;
  }

  function buildToc() {
    el.tocList.innerHTML = "";

    if (C.moduleZero) el.tocList.appendChild(bookend(C.moduleZero, "Module 0"));

    C.days.forEach(function (day) {
      var sec = h('<details class="toc__sec toc__day" id="tocsec-' + day.id + '"></details>');
      var daySum = h(
        '<summary class="toc__sec-hd toc__day-hd">' +
          '<span class="toc__day-num">Day ' + day.num + '</span>' +
          '<span class="toc__day-title">' + esc(day.title) + '</span>' +
          '<span class="toc__sec-caret" title="Expand / collapse">▸</span>' +
        '</summary>');
      navOnSummary(daySum, "#" + day.id, ".toc__sec-caret");
      sec.appendChild(daySum);
      var dayBody = h('<div class="toc__sec-body"></div>');

      day.chapters.forEach(function (ch) {
        var det = h('<details class="toc__ch' + (ch.workshop ? " is-workshop" : "") + '" id="toc-' + ch.id + '"></details>');
        var chSum = h(
          '<summary class="toc__ch-btn">' +
            '<span class="toc__ch-num">' + ch.num + '</span>' +
            '<span class="toc__ch-title">' + esc(ch.title) + '</span>' +
            '<span class="toc__ch-caret" title="Expand / collapse">▸</span>' +
          '</summary>');
        navOnSummary(chSum, "#" + ch.id, ".toc__ch-caret");
        det.appendChild(chSum);

        var modWrap = h('<div class="toc__mods"></div>');
        (ch.modules || []).forEach(function (m) {
          var ready = m.status === "ready";
          var hasPages = m._pages && m._pages.length;
          var md = h('<details class="toc__mod ' + (ready ? "is-ready" : "") + '" id="tocm-' + m.id + '"></details>');
          var mdSum = h('<summary class="toc__mod-btn">' +
            '<span class="toc__mod-dot"></span>' +
            '<span class="toc__mod-title">' + esc(m.title) + '</span>' +
            (ready ? "" : '<span class="toc__mod-tag">outline</span>') +
            (hasPages ? '<span class="toc__mod-caret" title="Expand / collapse">▸</span>' : "") +
            '</summary>');
          navOnSummary(mdSum, "#" + m.id, ".toc__mod-caret");
          md.appendChild(mdSum);
          if (hasPages) {
            var pl = h('<ul class="toc__pagelist"></ul>');
            m._pages.forEach(function (pg, i) {
              pl.appendChild(h('<li id="tocp-' + m.id + '-' + i + '"><a href="#' + m.id + '/' + i + '">' +
                esc(slideTitle(pg) || ("Page " + (i + 1))) + '</a></li>'));
            });
            if (m._check) pl.appendChild(h('<li id="tocp-' + m.id + '-check"><a href="#' + m.id + '/check">✓ Check your knowledge</a></li>'));
            md.appendChild(pl);
          }
          modWrap.appendChild(md);
        });
        det.appendChild(modWrap);
        dayBody.appendChild(det);
      });
      sec.appendChild(dayBody);
      el.tocList.appendChild(sec);
    });

    if (C.wrapUp) el.tocList.appendChild(bookend(C.wrapUp, "End"));
  }

  /* ---------- routing ----------------------------------------- */
  function parseHash() {
    var raw = (location.hash || "").replace(/^#/, "");
    if (!raw) return { view: "home" };
    var parts = raw.split("/");
    if (DAYS_BY_ID[parts[0]]) return { view: "day", day: DAYS_BY_ID[parts[0]] };
    if (CHS_BY_ID[parts[0]]) return { view: "chapter", ch: CHS_BY_ID[parts[0]] };
    var m = MODS.filter(function (x) { return x.id === parts[0]; })[0];
    if (!m) return { view: "home" };
    if (parts[1] === "check" && m._check) return { view: "check", mod: m };
    if (parts[1] != null && parts[1] !== "")
      return { view: "page", mod: m, page: Math.max(0, Math.min(+parts[1] || 0, m._pages.length - 1)) };
    return { view: "overview", mod: m };
  }
  function seqOf(mod) {
    var s = ["ov"];
    mod._pages.forEach(function (_, i) { s.push("p" + i); });
    if (mod._check) s.push("chk");
    return s;
  }
  function stepKey(r) { return r.view === "overview" ? "ov" : r.view === "check" ? "chk" : "p" + r.page; }
  function hrefFor(mod, key) {
    if (key === "ov") return "#" + mod.id;
    if (key === "chk") return "#" + mod.id + "/check";
    return "#" + mod.id + "/" + key.slice(1);
  }
  function spineIndex(route) {
    for (var i = 0; i < SPINE.length; i++) {
      var s = SPINE[i];
      if (route.view === "day" && s.t === "day" && s.day === route.day) return i;
      if (route.view === "chapter" && s.t === "chapter" && s.ch === route.ch) return i;
      if (route.mod && s.mod === route.mod) return i;
    }
    return -1;
  }
  function neighbour(route, dir) {
    // within a module (or bookend): step through overview / pages / check first
    if (route.mod) {
      var seq = seqOf(route.mod), si = seq.indexOf(stepKey(route)), ni = si + dir;
      if (ni >= 0 && ni < seq.length) return hrefFor(route.mod, seq[ni]);
    }
    // otherwise cross to the adjacent spine stop
    var idx = spineIndex(route);
    if (idx < 0) return null;
    var tgt = SPINE[idx + dir];
    if (!tgt) return null;
    if (tgt.t === "day" || tgt.t === "chapter") return tgt.hash;
    // module or bookend: enter at the overview going forward, at the last step going back
    if (dir > 0) return "#" + tgt.mod.id;
    var t = seqOf(tgt.mod);
    return hrefFor(tgt.mod, t[t.length - 1]);
  }

  /* ---------- render ----------------------------------------- */
  function render() {
    var route = parseHash();
    document.body.classList.toggle("view-home", route.view === "home");
    if (route.view === "home") {
      if (C.moduleZero && C.moduleZero.pages && C.moduleZero.pages.length && !splashDismissed) return renderTitleSplash();
      return renderHome();
    }
    if (route.view === "day") return renderDay(route.day);
    if (route.view === "chapter") return renderChapter(route.ch);

    var m = route.mod;
    markProgress(route);

    if (m._kind === "m0" || m._kind === "wrap") return renderBookend(route);

    // breadcrumb: Day › Chapter › Module
    el.crumbs.innerHTML =
      'Day ' + m._day.num + ' · <b>' + esc(m._day.title) + '</b>' +
      '<span class="sep">›</span>' +
      'Chapter ' + m._ch.num + ' · ' + esc(m._ch.title) +
      '<span class="sep">›</span>' +
      (m.num ? "Module " + m.num + ": " : "") + '<b>' + esc(m.title) + '</b>';
    el.hdDay.textContent = "Day " + m._day.num + " · " + m._day.title;

    document.body.classList.toggle("page-view", route.view === "page");
    if (route.view === "overview") renderOverview(m);
    else if (route.view === "check") renderCheck(m);
    else renderPage(m, route.page);

    renderContext(m, route);
    renderNav(route);
    syncToc(route);
    renderProgress(m._day);
    var chMods = m._ch.modules || [];
    el.ftRight.textContent = "Day " + m._day.num + "  ·  Chapter " + m._ch.num + "  ·  Module " + (chMods.indexOf(m) + 1) + " of " + chMods.length;
    scrollTop();
  }

  /* First paint on a fresh load: Module 0's own first page (the branded
     title slide), full-bleed, with a Continue button over it. Reuses the
     exact same iframe pattern renderPage() uses for a real page - this IS
     a real authored slide, not a special splash asset - so it renders
     identically wherever it's opened from. */
  function renderTitleSplash() {
    var m = C.moduleZero;
    el.hdDay.textContent = "";
    el.crumbs.innerHTML = "";
    el.stageNav.style.display = "none";
    document.body.classList.remove("page-view");
    var pg = m.pages[0];
    el.card.className = "stage__card stage__card--page";
    el.card.innerHTML =
      '<iframe class="page__frame" src="' + C.slideBase + C._slidePrefix + pad3(pg) + '.html?embed=1&visual=1" title="' + esc(m.title) + '"></iframe>' +
      '<button class="ov__start" style="position:fixed;left:50%;bottom:34px;transform:translateX(-50%);z-index:5" onclick="window.__ewSplashContinue()">Continue →</button>';
    el.ctxHere.textContent = "";
    el.ctxMod.textContent = "";
    el.ctxObj.textContent = "";
    el.ctxConcepts.innerHTML = "";
    el.ctxCheckWrap.hidden = true;
  }
  window.__ewSplashContinue = function () { splashDismissed = true; render(); };

  function renderHome() {
    el.hdDay.textContent = "";
    el.crumbs.innerHTML = '<b>Course overview</b>';
    el.stageNav.style.display = "none";
    document.body.classList.remove("page-view");
    document.querySelectorAll(".toc__sec, .toc__ch, .toc__mod").forEach(function (x) { x.classList.remove("is-current"); });

    var first = MODS.filter(function (m) { return m.status === "ready"; })[0] || MODS[1] || MODS[0];
    var daysHtml = C.days.map(function (day) {
      var chs = day.chapters.map(function (ch) {
        return '<a href="#' + ch.id + '" class="home__ch">' +
          '<span class="n">' + ch.num + '</span><span>' + esc(ch.title) + '</span></a>';
      }).join("");
      return '<div class="home__day">' +
        '<a class="home__day-hd" href="#' + day.id + '"><span>Day ' + day.num + '</span> ' + esc(day.title) + '</a>' +
        '<div class="home__day-sub">' + esc(day.subtitle || "") + '</div>' + chs + '</div>';
    }).join("");

    el.card.className = "stage__card";
    el.card.innerHTML =
      '<div class="ov">' +
        '<div class="ov__kicker">Emerson Workbench · Course</div>' +
        '<h1 class="ov__title">' + esc(C.course.code + " " + C.course.title) + '</h1>' +
        '<div class="ov__rule"></div>' +
        (C.course.summary ? '<p class="ov__objective">' + esc(C.course.summary) + '</p>' : "") +
        (C.moduleZero ? '<a class="home__m0" href="#' + C.moduleZero.id + '"><b>Module 0 · ' + esc(C.moduleZero.title) + '</b><br>' + esc(C.moduleZero.summary) + '</a>' : "") +
        '<button class="ov__start" onclick="location.hash=\'#' + first.id + '\'">Start the course →</button>' +
        '<div class="home__days">' + daysHtml + '</div>' +
      '</div>';

    el.ctxMod.textContent = C.course.code + " " + C.course.title;
    el.ctxConcepts.innerHTML = "";
    el.ctxCheckWrap.hidden = true;
    renderProgress();
  }

  function tierCardShell() {
    el.stageNav.style.display = "";
    el.card.className = "stage__card";
    document.body.classList.remove("page-view");
    document.querySelectorAll(".toc__sec,.toc__ch,.toc__mod,.toc__pagelist li").forEach(function (x) { x.classList.remove("is-current"); });
    el.ctxConcepts.innerHTML = "";
    el.ctxCheckWrap.hidden = true;
    el.dots.innerHTML = "";
    el.pos.textContent = "";
  }
  function ctxObjLabel(text) {
    var blk = el.ctxObj && el.ctxObj.closest(".ctx__block");
    var h = blk && blk.querySelector("h4");
    if (h) h.textContent = text;
  }
  function ctxConceptsBlock() {
    return el.ctxConcepts && el.ctxConcepts.closest(".ctx__block");
  }
  function tierNav(prev, next) {
    el.btnPrev.disabled = !prev; el.btnNext.disabled = !next;
    el.btnPrev.onclick = function () { if (prev) location.hash = prev; };
    el.btnNext.onclick = function () { if (next) location.hash = next; };
    el.btnPrev.textContent = "◀ Previous";
    el.btnNext.textContent = "Next ▶";
  }

  function renderDay(day) {
    tierCardShell();
    el.hdDay.textContent = "Day " + day.num + " · " + day.title;
    el.crumbs.innerHTML = 'Day ' + day.num + ' · <b>' + esc(day.title) + '</b>';
    var chs = (day.chapters || []).map(function (ch) {
      return '<a class="ov__row" href="#' + ch.id + '"><span class="n">' + ch.num + '</span>' +
        '<span>' + esc(ch.title) + '</span></a>';
    }).join("");
    var first = (day.chapters[0] || {}).id;
    el.card.innerHTML =
      '<div class="ov ov--tier ov--day">' +
        '<div class="ov__kicker">Day ' + day.num + ' of ' + C.days.length + '</div>' +
        '<h1 class="ov__title">' + esc(day.title) + '</h1>' +
        '<div class="ov__rule"></div>' +
        (day.subtitle ? '<p class="ov__objective">' + esc(day.subtitle) + '</p>' : "") +
        (first ? '<button class="ov__start" onclick="location.hash=\'#' + first + '\'">Start Day ' + day.num + ' →</button>' : "") +
        '<div class="ov__list"><h4>Chapters</h4>' + chs + '</div>' +
      '</div>';
    el.ctxHere.textContent = "Day " + day.num;
    el.ctxMod.textContent = day.title;
    el.ctxObj.textContent = day.subtitle || "";
    ctxObjLabel("Day overview");
    var db = ctxConceptsBlock(); if (db) db.hidden = true;
    var dr = { view: "day", day: day };
    tierNav(neighbour(dr, -1), neighbour(dr, +1));
    el.pos.textContent = "Day intro";
    var secEl = byId("tocsec-" + day.id);
    if (secEl) { secEl.classList.add("is-current"); secEl.open = true; }
    el.ftRight.textContent = "Day " + day.num + " of " + C.days.length;
    renderProgress(day);
    scrollTop();
  }

  function renderChapter(ch) {
    tierCardShell();
    var day = ch._day;
    el.hdDay.textContent = "Day " + day.num + " · " + day.title;
    el.crumbs.innerHTML = 'Day ' + day.num + ' · <b>' + esc(day.title) + '</b>' +
      '<span class="sep">›</span>Chapter ' + ch.num + ' · <b>' + esc(ch.title) + '</b>';
    var objs = (ch.objectives || []).map(function (o) { return '<li>' + esc(o) + '</li>'; }).join("");
    var mods = (ch.modules || []).map(function (m) {
      return '<a class="ov__row" href="#' + m.id + '"><span class="n">' + (m.num || "•") + '</span>' +
        '<span>' + esc(m.title) + '</span>' +
        (m.status === "ready" ? "" : '<span class="ov__row-tag">outline</span>') + '</a>';
    }).join("");
    var first = (ch.modules[0] || {}).id;
    el.card.innerHTML =
      '<div class="ov ov--tier ov--chapter">' +
        '<div class="ov__kicker">Day ' + day.num + ' · ' + esc(day.title) + ' · Chapter ' + ch.num + '</div>' +
        '<h1 class="ov__title">' + esc(ch.title) + '</h1>' +
        '<div class="ov__rule"></div>' +
        (ch.summary ? '<p class="ov__objective">' + esc(ch.summary) + '</p>' : "") +
        (objs ? '<div class="ov__list"><h4>By the end of this chapter</h4><ul class="ov__objlist">' + objs + '</ul></div>' : "") +
        (first ? '<button class="ov__start" onclick="location.hash=\'#' + first + '\'">Start chapter →</button>' : "") +
        '<div class="ov__list"><h4>Modules</h4>' + mods + '</div>' +
      '</div>';
    el.ctxHere.textContent = "Day " + day.num + " · Chapter " + ch.num;
    el.ctxMod.textContent = ch.title;
    el.ctxObj.textContent = ch.summary || "";
    ctxObjLabel("Chapter summary");
    var cb = ctxConceptsBlock(); if (cb) cb.hidden = true;
    var cr = { view: "chapter", ch: ch };
    tierNav(neighbour(cr, -1), neighbour(cr, +1));
    el.pos.textContent = "Chapter intro";
    // open this day + chapter in the rail
    var secEl = byId("tocsec-" + day.id); if (secEl) { secEl.classList.add("is-current"); secEl.open = true; }
    var cEl = byId("toc-" + ch.id); if (cEl) { cEl.classList.add("is-current"); cEl.open = true; }
    el.ftRight.textContent = "Day " + day.num + "  ·  Chapter " + ch.num;
    renderProgress(day);
    scrollTop();
  }

  function renderBookend(route) {
    var m = route.mod;
    el.hdDay.textContent = m._kind === "m0" ? "Before we start" : "Wrap-up";
    el.crumbs.innerHTML = '<b>' + esc(m._kind === "m0" ? "Module 0" : "End of course") + '</b><span class="sep">›</span>' + esc(m.title);
    el.stageNav.style.display = "";

    if (route.view === "overview") {
      el.card.className = "stage__card";
      el.card.innerHTML =
        '<div class="ov ov--bookend">' +
          '<div class="ov__kicker">' + (m._kind === "m0" ? "Module 0" : "End of course") + '</div>' +
          '<h1 class="ov__title">' + esc(m.title) + '</h1>' +
          '<div class="ov__rule"></div>' +
          '<p class="ov__objective">' + esc(m.summary || "") + '</p>' +
          '<button class="ov__start" onclick="location.hash=\'#' + m.id + '/0\'">Open →</button>' +
        '</div>';
    } else {
      renderPage(m, route.page);
    }
    document.body.classList.toggle("page-view", route.view === "page");
    // context rail: minimal for bookends
    el.ctxHere.textContent = m._kind === "m0" ? "Before we start" : "End of course";
    el.ctxMod.textContent = m.title;
    el.ctxObj.textContent = m.summary || "";
    ctxObjLabel("Overview");
    el.ctxConcepts.innerHTML = "";
    var bkc = ctxConceptsBlock(); if (bkc) bkc.hidden = true;
    el.ctxCheckWrap.hidden = true;
    renderNav(route);
    syncToc(route);
    renderProgress();
    el.ftRight.textContent = m._kind === "m0" ? "Module 0" : "Wrap-up";
    scrollTop();
  }

  function renderOverview(m) {
    el.stageNav.style.display = "";
    el.card.className = "stage__card";
    el.card.innerHTML =
      '<div class="ov">' +
        '<div class="ov__kicker">Day ' + m._day.num + " · " + esc(m._day.title) + " · " + esc(m._ch.title) + (m.num ? " · Module " + m.num : "") + '</div>' +
        '<h1 class="ov__title">' + esc(m.title) + '</h1>' +
        '<div class="ov__rule"></div>' +
        (m.objective ? '<p class="ov__objective"><b>By the end of this module</b> you will be able to ' + lc(esc(m.objective)) + '</p>' : "") +
        '<p class="ov__hint">The key concepts for this module are in the panel on the right and stay with you as you work through it. ' +
          'The slides are visual — the explaining is done here and by your instructor.</p>' +
        (m._pages.length ? '<button class="ov__start" onclick="location.hash=\'#' + m.id + '/0\'">Start module →</button>' : "") +
        (m.status === "ready" ? "" :
          '<div class="ov__note">This module is in the course map but its key concepts have not been written yet — ' +
          'the slides below are the source content.</div>') +
      '</div>';
  }

  function renderPage(m, pi) {
    el.stageNav.style.display = "";
    var pg = m._pages[pi];
    var q = "?embed=1" + (m.visual ? "&visual=1" : "");
    el.card.className = "stage__card stage__card--page";
    el.card.innerHTML = '<iframe class="page__frame" src="' + C.slideBase + C._slidePrefix + pad3(pg) + ".html" + q +
      '" title="' + esc(slideTitle(pg) || ("Slide " + pg)) + '"></iframe>';
  }

  function renderCheck(m) {
    el.stageNav.style.display = "";
    el.card.className = "stage__card";
    var links = m._check.map(function (pg, i) {
      return '<button class="ov__start" style="margin:6px" onclick="location.hash=\'#' + m.id + '/check\';window.__openCheck(' + pg + ')">' +
        (m._check.length > 1 ? "Question set " + (i + 1) : "Open the check") + ' →</button>';
    }).join("");
    el.card.innerHTML =
      '<div class="chk-card">' +
        '<div class="badge">✓</div>' +
        '<h2>Check your knowledge</h2>' +
        '<p>Day ' + m._day.num + " · " + esc(m._ch.title) + (m.num ? " · Module " + m.num : "") + " — " + esc(m.title) + '</p>' +
        links +
        '<p style="margin-top:22px;font-size:12.5px">Then continue to the next module.</p>' +
      '</div>';
  }
  window.__openCheck = function (pg) {
    // The check route's own hash doesn't change here (it was already
    // "#module/check" before this click), so render()'s own
    // page-view toggle (route.view === "page") never re-runs and never
    // applies to this transition. Without this, the check slide's iframe
    // falls back to the unscoped .stage__card / .stage__scroll rules
    // instead of the ones that shrink a slide to fit the viewport with no
    // scrolling - it can render taller than the visible stage, "out of
    // frame," requiring the page itself to scroll to see the whole slide
    // (Franz, 2026-09-07). Set it explicitly here, same as a real page.
    document.body.classList.add("page-view");
    el.card.className = "stage__card stage__card--page";
    el.card.innerHTML = '<iframe class="page__frame" src="' + C.slideBase + C._slidePrefix + pad3(pg) + '.html?embed=1" title="Check"></iframe>';
  };

  /* ---------- right rail: context ---------------------------- */
  function renderContext(m, route) {
    ctxObjLabel("Module objective");
    var kcb = ctxConceptsBlock(); if (kcb) kcb.hidden = false;
    el.ctxHere.textContent = "Day " + m._day.num + " · " + m._day.title + (m.num ? "   ·   Module " + m.num : "");
    el.ctxMod.textContent = m.title;
    el.ctxObj.textContent = m.objective || m._ch.summary || "";

    var curPage = route.view === "page" ? m._pages[route.page] : null;
    var kc = m.keyConcepts || [];
    if (!kc.length) {
      el.ctxConcepts.innerHTML = '<li class="ctx__empty">Key concepts for this module are still being written.</li>';
    } else {
      el.ctxConcepts.innerHTML = kc.map(function (c, i) {
        var text = typeof c === "string" ? c : c.t;
        var pages = (typeof c === "object" && c.pages) ? c.pages : [];
        var active = curPage != null && pages.indexOf(curPage) > -1;
        var goto = pages.length ? pages[0] : (m._pages[0] || null);
        var idx = goto != null ? m._pages.indexOf(goto) : -1;
        return '<li class="' + (active ? "is-active" : "") + '"' +
          (idx > -1 ? ' data-goto="' + idx + '"' : "") + '>' + esc(text) + '</li>';
      }).join("");
      Array.prototype.forEach.call(el.ctxConcepts.querySelectorAll("li[data-goto]"), function (li) {
        li.onclick = function () { location.hash = "#" + m.id + "/" + li.getAttribute("data-goto"); };
      });
    }

    if (m._check) {
      el.ctxCheckWrap.hidden = false;
      el.ctxCheck.onclick = function () { location.hash = "#" + m.id + "/check"; };
    } else { el.ctxCheckWrap.hidden = true; }
  }

  /* ---------- stage nav ------------------------------------- */
  function renderNav(route) {
    var m = route.mod, seq = seqOf(m), cur = stepKey(route);
    el.dots.innerHTML = "";
    seq.forEach(function (k) {
      var d = h('<button class="nav__dot ' +
        (k === "ov" ? "is-overview " : "") + (k === "chk" ? "is-check " : "") + (k === cur ? "is-current" : "") + '"></button>');
      d.title = k === "ov" ? "Overview" : k === "chk" ? "Check" : "Page " + (+k.slice(1) + 1);
      d.onclick = function () { location.hash = hrefFor(m, k); };
      el.dots.appendChild(d);
    });
    var pi = seq.indexOf(cur);
    el.pos.textContent = cur === "ov" ? "Overview" : cur === "chk" ? "Check" : "Page " + pi + " of " + m._pages.length;

    tierNav(neighbour(route, -1), neighbour(route, +1));
  }

  /* ---------- TOC sync + progress -------------------------- */
  function syncToc(route) {
    document.querySelectorAll(".toc__sec,.toc__ch,.toc__mod,.toc__pagelist li").forEach(function (x) { x.classList.remove("is-current"); });
    var m = route.mod;

    if (m._kind === "module") {
      var secEl = byId("tocsec-" + m._day.id);
      if (secEl) { secEl.classList.add("is-current"); secEl.open = true; }
      var cEl = byId("toc-" + m._ch.id);
      if (cEl) { cEl.classList.add("is-current"); cEl.open = true; }
      var mEl = byId("tocm-" + m.id);
      if (mEl) {
        mEl.classList.add("is-current");
        if (mEl.tagName === "DETAILS") mEl.open = true;   // reveal this module's slides
      }
      var key = route.view === "page" ? "tocp-" + m.id + "-" + route.page
        : route.view === "check" ? "tocp-" + m.id + "-check" : null;
      if (key && byId(key)) byId(key).classList.add("is-current");
    } else {
      // bookend (Module 0 / Wrap-Up) — its own section
      var bEl = byId("tocsec-" + m.id);
      if (bEl) { bEl.classList.add("is-current"); bEl.open = true; }
      if (route.view === "page" && byId("tocp-" + m.id + "-" + route.page))
        byId("tocp-" + m.id + "-" + route.page).classList.add("is-current");
    }

    MODS.forEach(function (mm) {
      var done = progress.done[mm.id];
      var li = byId("tocm-" + mm.id); if (li) li.classList.toggle("is-done", !!done);
      var dot = byId("tocdot-" + mm.id); if (dot) dot.classList.toggle("is-done", !!done);
    });
  }

  function markProgress(route) {
    var m = route.mod;
    progress.seen[m.id] = progress.seen[m.id] || {};
    if (route.view === "page") progress.seen[m.id]["p" + route.page] = 1;
    if (route.view === "check") progress.seen[m.id].chk = 1;
    var need = m._pages.length + (m._check ? 1 : 0);
    if (need > 0 && Object.keys(progress.seen[m.id]).length >= need) progress.done[m.id] = 1;
    saveProgress();
  }
  function renderProgress(day) {
    // overall
    var all = pagesSeenRatio(MODS);
    el.progressPct.textContent = all.pct + "%";
    el.progressBar.style.width = all.pct + "%";
    el.hdProgress.hidden = false;
    // per-day label
    if (day) {
      var dmods = MODS.filter(function (m) { return m._day === day; });
      var dr = pagesSeenRatio(dmods);
      el.hdProgress.title = "Day " + day.num + ": " + dr.pct + "%  ·  Course: " + all.pct + "%";
    }
  }
  function pagesSeenRatio(mods) {
    var total = 0, seen = 0;
    mods.forEach(function (m) {
      total += m._pages.length;
      if (progress.seen[m.id]) seen += Object.keys(progress.seen[m.id]).filter(function (k) { return k[0] === "p"; }).length;
    });
    return { pct: total ? Math.round(seen / total * 100) : 0, seen: seen, total: total };
  }
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || { seen: {}, done: {} }; }
    catch (e) { return { seen: {}, done: {} }; }
  }
  function saveProgress() { try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) {} }

  /* ---------- chrome: rail toggles, present mode, keys ----- */
  function wireChrome() {
    var bToc = byId("btnToc"), bCtx = byId("btnCtx"), bPres = byId("btnPresent");
    function upd() {
      bToc.setAttribute("aria-pressed", !document.body.classList.contains("hide-toc"));
      bCtx.setAttribute("aria-pressed", !document.body.classList.contains("hide-ctx"));
      bPres.setAttribute("aria-pressed", document.body.classList.contains("present"));
    }
    bToc.onclick = function () { document.body.classList.toggle("hide-toc"); upd(); };
    bCtx.onclick = function () { document.body.classList.toggle("hide-ctx"); upd(); };
    bPres.onclick = function () {
      var on = !document.body.classList.contains("present");
      document.body.classList.toggle("present", on);
      // present = clean flow: hide the left nav, KEEP the context panel
      document.body.classList.toggle("hide-toc", on);
      document.body.classList.remove("hide-ctx");
      upd();
    };
    byId("tabToc").onclick = function () { document.body.classList.remove("hide-toc"); upd(); };
    byId("tabCtx").onclick = function () { document.body.classList.remove("hide-ctx"); upd(); };

    if (/[?&]present=1/.test(location.search)) bPres.click();
    if (/[?&]nav=off/.test(location.search)) document.body.classList.add("hide-toc");
    if (/[?&]context=off/.test(location.search)) document.body.classList.add("hide-ctx");
    upd();

    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); el.btnNext.click(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); el.btnPrev.click(); }
      else if (e.key === "[") bToc.click();
      else if (e.key === "]") bCtx.click();
      else if (e.key === "p" || e.key === "P") bPres.click();
      else if (e.key === "Escape") { document.body.classList.remove("present", "hide-toc"); upd(); }
    });
    window.addEventListener("message", function (ev) {
      var d = ev.data || {};
      if (d.ew !== "key") return;
      if (d.key === "ArrowRight" || d.key === "PageDown" || d.key === " ") el.btnNext.click();
      else if (d.key === "ArrowLeft" || d.key === "PageUp") el.btnPrev.click();
      else if (d.key === "[") bToc.click();
      else if (d.key === "]") bCtx.click();
      else if (d.key === "p" || d.key === "P") bPres.click();
      else if (d.key === "Escape") { document.body.classList.remove("present", "hide-toc"); upd(); }
    });
  }

  /* ---------- source library overlay ---------------------- */
  /* A reference shelf laid over the presentation pane. Opening or closing it
     never touches the course route, so the course page underneath is exactly
     as it was left. Each PDF gets its own <iframe>, created on first open and
     then only shown / hidden — never reloaded — so its scroll position
     survives every toggle in either direction. */
  function wireLibrary() {
    var LIB = C.library;
    var btn = byId("btnLib");
    if (!LIB || !btn) { if (btn) btn.hidden = true; return; }

    var ov = byId("libov"), idxEl = byId("libIndex"), docEl = byId("libDoc"),
        elBack = byId("libBack"), elTitle = byId("libTitle"), elExt = byId("libExt"),
        elClose = byId("libClose");
    var LKEY = "ew" + C.course.code + ".lib";
    var frames = {};                 // docId -> iframe, kept alive once built
    var byDoc = {};
    (LIB.primary || []).forEach(function (d) { byDoc[d.id] = d; });
    (LIB.columns || []).forEach(function (col) { col.docs.forEach(function (d) { byDoc[d.id] = d; }); });

    var state = { open: false, view: "index", docId: null };
    try {
      var saved = JSON.parse(localStorage.getItem(LKEY) || "{}");
      if (saved.docId && byDoc[saved.docId]) { state.view = saved.view === "doc" ? "doc" : "index"; state.docId = saved.docId; }
    } catch (e) {}
    // deep link: ?lib=1 opens the shelf, ?lib=<docId> opens straight to a manual
    var dl = /[?&]lib=([\w-]+)/.exec(location.search);
    if (dl) {
      state.open = true;
      if (dl[1] !== "1" && byDoc[dl[1]]) { state.view = "doc"; state.docId = dl[1]; }
      else if (dl[1] === "1") { state.view = "index"; }
    }

    // ---- build the index (once) ----
    // top section: the five primary sources as large cover-style tiles
    if (LIB.primary && LIB.primary.length) {
      idxEl.appendChild(h('<div class="libidx__group">Primary sources</div>'));
      var covers = h('<div class="libidx__covers"></div>');
      LIB.primary.forEach(function (d) {
        var face = h('<button class="libcover" data-doc="' + esc(d.id) + '"></button>');
        face.style.setProperty("--cover", d.color || "#004B8D");
        if (d.kicker) face.appendChild(h('<span class="libcover__kicker">' + esc(d.kicker) + '</span>'));
        face.appendChild(h('<span class="libcover__title">' + esc(d.title) + '</span>'));
        if (d.meta) face.appendChild(h('<span class="libcover__meta">' + esc(d.meta) + '</span>'));
        covers.appendChild(face);
      });
      idxEl.appendChild(covers);
    }

    // instruction manuals: three columns by document type
    if (LIB.columns && LIB.columns.length) {
      idxEl.appendChild(h('<div class="libidx__group">Instruction manuals</div>'));
      var cols = h('<div class="libidx__cols"></div>');
      LIB.columns.forEach(function (col) {
        var cEl = h('<div class="libidx__col"></div>');
        cEl.appendChild(h('<div class="libidx__col-hd">' + esc(col.title) + '</div>'));
        var ul = h('<ul class="libidx__col-list"></ul>');
        col.docs.forEach(function (d) {
          var li = h('<li></li>');
          li.appendChild(h(
            '<button class="libidx__doc" data-doc="' + esc(d.id) + '">' +
              '<span class="libidx__t">' + esc(d.title) + '</span>' +
              (d.sub ? '<span class="libidx__s">' + esc(d.sub) + '</span>' : '') +
            '</button>'));
          ul.appendChild(li);
        });
        cEl.appendChild(ul);
        cols.appendChild(cEl);
      });
      idxEl.appendChild(cols);
    }

    if (LIB.note) idxEl.appendChild(h('<p class="libidx__note">' + esc(LIB.note) + '</p>'));
    idxEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-doc]");
      if (b) { state.view = "doc"; state.docId = b.getAttribute("data-doc"); apply(); }
    });

    function docURL(d) {
      return (LIB.base + d.file).split("/").map(function (seg) {
        return (seg === "" || seg === "." || seg === "..") ? seg : encodeURIComponent(seg);
      }).join("/") + "#view=FitH";
    }
    function frameFor(d) {
      if (!frames[d.id]) {
        var fr = h('<iframe class="libov__frame" title="' + esc(d.title) + '"></iframe>');
        fr.setAttribute("data-active", "false");
        fr.src = docURL(d);
        docEl.appendChild(fr);
        frames[d.id] = fr;
      }
      return frames[d.id];
    }

    function apply() {
      var doc = state.docId ? byDoc[state.docId] : null;
      var inDoc = state.open && state.view === "doc" && !!doc;

      document.body.classList.toggle("lib-open", state.open);
      btn.setAttribute("aria-pressed", state.open ? "true" : "false");

      idxEl.hidden = !(state.open && !inDoc);
      docEl.hidden = !inDoc;
      elBack.hidden = !inDoc;
      elTitle.textContent = inDoc ? doc.title : "Source Library";

      if (inDoc) {
        var fr = frameFor(doc);
        Object.keys(frames).forEach(function (k) {
          frames[k].setAttribute("data-active", k === doc.id ? "true" : "false");
        });
        elExt.hidden = false;
        elExt.href = fr.src;
      } else {
        elExt.hidden = true;
        elExt.removeAttribute("href");
      }

      try { localStorage.setItem(LKEY, JSON.stringify({ view: state.view, docId: state.docId })); } catch (e) {}
    }

    function close() { state.open = false; apply(); }
    function toggle() { state.open = !state.open; apply(); }

    btn.onclick = toggle;
    elClose.onclick = close;
    elBack.onclick = function () { state.view = "index"; apply(); };
    ov.addEventListener("mousedown", function (e) { if (e.target === ov) close(); });

    // Esc closes the library first (capture, so it beats the present-mode Esc);
    // while the library is open, swallow course-navigation keys so the page
    // underneath cannot move out from under the instructor.
    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (!state.open) {
        if (e.key === "l" || e.key === "L") { e.preventDefault(); toggle(); }
        return;
      }
      if (e.key === "Escape") { e.stopPropagation(); e.preventDefault(); close(); }
      else if (e.key === "l" || e.key === "L") { e.preventDefault(); e.stopPropagation(); close(); }
      else if (/^(Arrow(Left|Right|Up|Down)|Page(Up|Down)|Home|End|\[|\]|p|P| )$/.test(e.key)) {
        e.stopPropagation();
      }
    }, true);

    apply();   // initialise closed; last-opened document is remembered for next open
  }

  /* ---------- helpers -------------------------------------- */
  function pad3(n) { return ("000" + n).slice(-3); }
  function lc(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
  function scrollTop() { var s = document.querySelector(".stage__scroll"); if (s) s.scrollTop = 0; }
  function slideTitle(pg) {
    if (!window.EW_MANIFEST) return null;
    var e = window.EW_MANIFEST.filter(function (x) { return x.n === pg; })[0];
    return e ? e.title : null;
  }
})();
