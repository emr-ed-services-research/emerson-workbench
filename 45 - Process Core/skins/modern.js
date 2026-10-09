/* @layer chrome
   @core Process Core -- Phase 5b. A SKIN, not a layer of the model.

   THE MODERN VIEW: the same netlist, the same dynamics, the same scenario,
   rendered as a current operator graphic instead of 1990s pixel art.

   This file is the only place in the core allowed to name a colour, and it
   says so in its header -- the layer guard permits colour in `@layer chrome`
   and nowhere else. That is the whole architecture in one rule: the model
   holds no opinion about appearance, and appearance lives in a file that
   holds nothing else.

   -------------------------------------------------------------------
   WHERE THE LOOK COMES FROM. Not invented here.

   COLOUR is the EMERSON palette from `40 - Engine/.../tokens.css`, used
   with the roles the Style Guide assigns them (`00 - Project/Style
   Guide.md` section 3.2):

     blue      #004B8D  structure, and "the real thing" -- the measured,
                        actually-flowing quantity
     charcoal  #3F4040  equipment and body text
     grey      #959797  secondary and reference -- what is there but not
                        the subject
     cyan      #00A4D2  a second measured series
     yellow    #FFCF22  an operating-range band
     orange    #F79428  caution

   The Style Guide governs slides rather than this surface, and says so in
   section 1.1. Its section 3.3 anticipates other surfaces reaching for the
   palette, which is the allowance used here: the VOCABULARY and the
   semantic roles are the house's, applied to a display the guide does not
   itself cover. Nothing invents a colour -- section 3.4, "no non-token
   colour".

   TYPE is decided, not defaulted. One face, a four-step scale, and
   weights chosen per role -- see TYPE below. The face is a STACK OF
   FONTS THAT ARE ACTUALLY INSTALLED, not a webfont: canvas silently
   falls back when a face has not loaded, with no error and no visible
   failure beyond slightly wrong metrics, and an earlier pass of this
   file specified "Inter" while measuring identically to Segoe UI --
   it had never loaded once. A consumer that genuinely has a webfont
   can pass its own `face`, and should await document.fonts.ready
   before the first paint.

   ABNORMAL STATES are the point of holding saturation in reserve. In
   the normal state almost nothing on this board is coloured, so one
   orange reading is impossible to miss. Orange is the Style Guide's
   caution (section 3.2). THE SKIN DOES NOT DECIDE WHAT IS ABNORMAL --
   the consumer passes limits, because what counts as off-target is a
   fact about the plant and its design duty, not about the picture.

   GROUND is light, not dark. Modern high-performance HMI practice moved
   off the dark CRT-era ground: a light neutral with low-saturation
   equipment, keeping saturation in reserve so that when something IS
   coloured it means something. It also agrees with the Style Guide, whose
   page is always white. The visible consequence is that the two skins look
   nothing alike, which is the point of rendering both.

   STATE still reads the way ISA-5.5 says it does -- a valve's fill carries
   open or shut. That is the model's business, decided in the schem-view
   layer, and a change of skin does not get a vote on it.
                                                                         */

(function (LPE) {
  'use strict';

  /* The EMERSON tokens. The only literals in the core. */
  const EMERSON = {
    blue:     '#004B8D',
    charcoal: '#3F4040',
    grey:     '#959797',
    white:    '#FFFFFF',
    cyan:     '#00A4D2',
    yellow:   '#FFCF22',
    orange:   '#F79428',
  };

  /* Neutrals derived from the palette rather than picked: the ground is
     white stepped down toward charcoal, which keeps the whole surface on
     one axis instead of introducing a second grey family. */
  const mix = (a, b, k) => {
    const h = s => [1, 3, 5].map(i => parseInt(s.substr(i, 2), 16));
    const [ar, ag, ab] = h(a), [br, bg, bb] = h(b);
    const c = (x, y) => Math.round(x + (y - x) * k).toString(16).padStart(2, '0');
    return '#' + c(ar, br) + c(ag, bg) + c(ab, bb);
  };

  const GROUND    = mix(EMERSON.white, EMERSON.charcoal, 0.06);  // the page
  const PANEL     = mix(EMERSON.white, EMERSON.charcoal, 0.02);  // the drawing
  const HAIRLINE  = mix(EMERSON.white, EMERSON.charcoal, 0.18);  // the grid
  const EQUIPMENT = mix(EMERSON.white, EMERSON.charcoal, 0.78);  // outlines
  const GRID      = mix(EMERSON.white, EMERSON.charcoal, 0.10);  // reference
  const PIPE_EDGE = mix(EMERSON.white, EMERSON.charcoal, 0.30);  // the wall

  /* ---- the faces, which are the house's and not a choice made here ----
     Style Guide section 2.1 settles this: Arial is the theme's own major
     AND minor font -- "this is not a substitution, it is what the brand
     uses" -- and DTL Argo T is Emerson's licensed display face, an
     optional @font-face with an acceptable Arial fallback.

     So the answer to "pick a webfont" is that the house already picked,
     and its answer is better than a fetched one for this surface: a
     board on a plant floor or an air-gapped machine must render the same
     with no network, and Arial is installed on every machine this will
     ever run on. Arial also measures TABULAR -- all ten digits are
     10.567 px at 19 px, checked, not assumed -- so a readout does not
     twitch as its digits change.

     The display face is wired the way the engine wires it, so if the
     licensed file is ever dropped in, the board picks it up with no
     change here. It is not in the vault today. */
  const FACE = '"Arial", "Helvetica Neue", Helvetica, "Liberation Sans", ' +
               'system-ui, sans-serif';
  const FACE_NUM = FACE;                       // Arial's figures are tabular
  const FACE_DISPLAY = '"DTL Argo T", ' + FACE;

  /* Is a face REALLY there, or will canvas quietly fall back?
     document.fonts.check() is not an answer: it returned true for "Inter"
     when Inter had never loaded, and true for "DTL Argo T" with no font
     file anywhere in the vault. Both were caught by measuring instead --
     a face that renders identically to the fallback IS the fallback. */
  function faceLoaded(name, fallback, probe) {
    if (typeof document === 'undefined') return false;
    const g = document.createElement('canvas').getContext('2d');
    const s = probe || 'HV-1 0123456789 Manifold';
    g.font = '20px ' + fallback;
    const base = g.measureText(s).width;
    g.font = '20px "' + name + '", ' + fallback;
    return g.measureText(s).width !== base;
  }

  /* THE TYPE SCALE. Four steps, decided once. A board has exactly four
     jobs for type and no more: name the board, name a thing, state a
     value, and mark a unit or an axis. Anything that wants a fifth size
     is usually a thing that should not be on the board. */
  const TYPE = {
    display: { size: 15, weight: 600, face: FACE_DISPLAY, track: 0.06 }, // the board's own name
    tag:     { size: 10, weight: 600, face: FACE,     track: 0.08 },  // HV-1, TK-2
    value:   { size: 19, weight: 600, face: FACE_NUM, track: 0    },  // 2.61
    unit:    { size: 10, weight: 500, face: FACE,     track: 0.02 },  // gpm, psig
  };
  const font = r => r.weight + ' ' + r.size + 'px ' + r.face;

  /* Canvas has no letter-spacing before Chrome 99 and none at all in
     some engines, so tracking is drawn rather than declared. Only used
     on short strings -- a tag or a board name -- where it is the
     difference between a label and a caption. */
  function tracked(g, s, x, y, px) {
    if (!px) { g.fillText(s, x, y); return g.measureText(s).width; }
    let cx = x;
    for (const ch of s) { g.fillText(ch, cx, y); cx += g.measureText(ch).width + px; }
    return cx - x - px;
  }
  const trackedWidth = (g, s, px) =>
    g.measureText(s).width + (px ? px * (s.length - 1) : 0);

  /* ---- the schematic, modern ----------------------------------------
     A theme for the schem-view layer. Same six roles it names; different
     answers. Nothing below chrome changes, which is the claim. */
  const SCHEM = {
    line:        EQUIPMENT,
    lineWidth:   1.75,
    symbol:      EMERSON.charcoal,
    symbolWidth: 2.25,
    fill:        EMERSON.charcoal,
    ground:      PANEL,
    gap:         PANEL,
    label:       EMERSON.grey,
    labelFont:   font(TYPE.tag),
  };

  /* ---- the pipework, modern ------------------------------------------
     The five roles `piping()` names. A bore is a cylinder, so the modern
     skin shades across it instead of dithering: `light` is the specular
     band, `dark` the far wall, `mid` the body between them. */
  const PIPE = {
    body:  mix(EMERSON.white, EMERSON.charcoal, 0.34),
    rim:   mix(EMERSON.white, EMERSON.charcoal, 0.52),
    light: mix(EMERSON.white, EMERSON.charcoal, 0.10),
    mid:   mix(EMERSON.white, EMERSON.charcoal, 0.44),
    dark:  mix(EMERSON.white, EMERSON.charcoal, 0.66),
  };

  /* ---- what a reading looks like -------------------------------------
     The Style Guide's own rule (section 3.2): blue is the measured,
     actually-happening quantity; grey is there-but-not-the-subject. So a
     line with flow in it is blue and a dead one is grey, and nothing has
     to blink or glow to say so. Saturation tracks rate, which means a
     glance at the board tells you which branch is working hardest
     without reading a single number. */
  function flowColour(q, full) {
    if (!(q > 0.001)) return HAIRLINE;
    const k = Math.max(0.18, Math.min(1, q / (full || 1)));
    return mix(mix(EMERSON.white, EMERSON.blue, 0.42), EMERSON.blue, k);
  }

  /* ---- a run of pipe --------------------------------------------------
     A bore is a cylinder, so it is shaded ACROSS the run rather than
     filled flat: far wall, body, specular band. Three strokes of
     decreasing width on one path, which stays exact at any device pixel
     ratio -- no blur, no bitmap, nothing that softens when the board is
     thrown on a 4K wall display. */
  function runPipe(g, pts, w, colour) {
    const path = () => {
      g.beginPath();
      g.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
    };
    g.lineCap = 'round'; g.lineJoin = 'round';

    path(); g.strokeStyle = PIPE_EDGE;  g.lineWidth = w;         g.stroke();
    path(); g.strokeStyle = colour;     g.lineWidth = w - 2.5;   g.stroke();
    path(); g.strokeStyle = mix(colour, EMERSON.white, 0.45);
            g.lineWidth = Math.max(1, w * 0.22);
            g.globalAlpha = 0.8;
            g.translate(0, -w * 0.22); g.stroke(); g.translate(0, w * 0.22);
            g.globalAlpha = 1;
  }

  /* Direction and rate, drawn as the dash pattern itself rather than as
     arrowheads: it reads at a glance, it survives being small, and it
     stops entirely when flow does. */
  function runFlow(g, pts, w, q, full, t) {
    if (!(q > 0.001)) return;
    const k = Math.min(1, q / (full || 1));
    g.save();
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
    g.strokeStyle = mix(EMERSON.cyan, EMERSON.white, 0.25);
    g.globalAlpha = 0.30 + 0.45 * k;
    g.lineWidth = Math.max(1.5, (w - 2.5) * 0.4);
    g.lineCap = 'butt';
    g.setLineDash([3, 15]);
    g.lineDashOffset = -(t * (40 + 150 * k)) % 18;
    g.stroke();
    g.restore();
  }

  /* ---- which flow belongs to where ------------------------------------
     NOT guessed from geometry. The dynamics layer keys flow by the
     RESTRICTION it passes through -- the thing with a Cv -- because that
     is the thing the flow is a property of. A pod has no Cv, so there is
     no `q` under its tag, and matching a line's endpoint against a pod
     finds nothing and silently falls back to the total. It did: every
     bed read 5.23 gpm, which was the whole bay.

     So walk the netlist's own graph instead. From any component, go
     upstream until something with a Cv is found; that is what is feeding
     it, and its flow is the answer. A pod fed through two valves would
     still be right, which a geometric match would not be. */
  function feederOf(net, id) {
    const segs = net.segments.filter(s => s.from && s.to);
    let cur = id;
    for (let guard = 0; guard < 32; guard++) {
      const inSeg = segs.filter(s => s.to.id === cur)[0];
      if (!inSeg) return null;
      const up = net.components[inSeg.from.id];
      if (!up) return null;
      if (up.cv !== undefined) return up;
      cur = up.id;
    }
    return null;
  }

  function flowInto(net, id, solved) {
    const f = feederOf(net, id);
    if (!f) return null;
    for (const k of [f.tag, f.key, f.id]) {
      if (k !== undefined && solved.q[k] !== undefined) return solved.q[k];
    }
    return null;
  }

  /* A drawn line carries whatever is feeding the component it ends at. */
  function lineFlows(net, plan, solved, limits) {
    const at = {};
    for (const id of Object.keys(net.components)) {
      const c = net.components[id];
      if (c.at) at[c.at[0] + ',' + c.at[1]] = c;
    }
    return plan.ops.filter(o => o.op === 'line').map(L => {
      for (const end of [L.pts[L.pts.length - 1], L.pts[0]]) {
        const c = at[end[0] + ',' + end[1]];
        if (!c) continue;
        const q = flowInto(net, c.id, solved);
        /* The run carries the limit of whatever it feeds, so a caution
           can be drawn on the span and not only on the number. */
        if (q !== null) return { pts: L.pts, q, limit: (limits || {})[c.tag], to: c };
      }
      return { pts: L.pts, q: solved.qTot || 0 };   // a trunk carries the lot
    });
  }

  /* ---- abnormal ------------------------------------------------------
     The skin does not decide what is off-target. A consumer passes
     `limits: { 'TK-2': {target: 2.0, tol: 0.3} }`, because design duty is
     a fact about the plant and not about the picture -- the same rule
     that keeps colours out of the model keeps limits out of the skin.

     Orange is the Style Guide's caution (section 3.2), and it appears
     nowhere else on this board. That is the whole reason it works: in
     the normal state the surface is grey and blue, so one orange reading
     cannot be missed and nothing has to flash to earn attention. */
  function statusOf(value, limit) {
    if (!limit || limit.target === undefined) return 'normal';
    const tol = limit.tol === undefined ? 0 : limit.tol;
    return Math.abs(value - limit.target) > tol ? 'caution' : 'normal';
  }

  /* ---- a span that is off target -------------------------------------
     A line can be flowing and still wrong, and until now only its
     readout said so -- which means reading numbers to find the bad
     branch, on a board whose whole job is to not need that.

     The treatment comes from the Style Guide rather than from taste.
     Section 3.2: blue stays "the real thing", the measured quantity;
     orange marks "a semantic region or bracket -- a deadband, an
     offset", and a span feature is an orange bracket, never an orange
     version of the measured thing. So the pipe stays blue, because it
     genuinely is flowing, and an orange rule runs alongside the span
     that is out of band, capped at both ends.

     The alternative -- turning the pipe orange -- would say the flow
     itself is a caution rather than that its value is, and would spend
     the one colour this board holds in reserve on a line that is
     working. */
  function offTargetSpan(g, pts, w) {
    const off = w / 2 + 5;
    g.save();
    g.strokeStyle = EMERSON.orange;
    g.lineWidth = 2;
    g.lineCap = 'butt';
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
      const horiz = y0 === y1;
      /* Offset to the side of the run, so it reads as a bracket beside
         the pipe rather than as something in it. */
      const dx = horiz ? 0 : off, dy = horiz ? off : 0;
      g.beginPath();
      g.moveTo(x0 + dx, y0 + dy);
      g.lineTo(x1 + dx, y1 + dy);
      g.stroke();
      /* Caps, which is what makes it a bracket and not a second pipe. */
      const cap = 4;
      g.beginPath();
      if (horiz) {
        g.moveTo(x0 + dx, y0 + dy - cap); g.lineTo(x0 + dx, y0 + dy + cap);
        g.moveTo(x1 + dx, y1 + dy - cap); g.lineTo(x1 + dx, y1 + dy + cap);
      } else {
        g.moveTo(x0 + dx - cap, y0 + dy); g.lineTo(x0 + dx + cap, y0 + dy);
        g.moveTo(x1 + dx - cap, y1 + dy); g.lineTo(x1 + dx + cap, y1 + dy);
      }
      g.stroke();
    }
    g.restore();
  }

  /* ---- a value, where the thing it describes is -----------------------
     An operator graphic puts the number on the plant, not in a table off
     to one side. Three steps of the scale, in the order the eye wants
     them: the value is the subject and is biggest; the tag says which
     thing, small and tracked so it reads as a label rather than a word;
     the unit is smallest and grey because nobody is hunting for it.

     Returns its own width, so a caller lays out around it instead of
     guessing. */
  function readout(g, x, y, tag, value, unit, opts) {
    const o = opts || {};
    const status = o.status || 'normal';
    const live = o.live !== false;

    g.textAlign = 'left'; g.textBaseline = 'alphabetic';

    g.font = font(TYPE.tag);
    g.fillStyle = EMERSON.grey;
    tracked(g, tag, x, y - 13, TYPE.tag.track * TYPE.tag.size);

    g.font = font(TYPE.value);
    g.fillStyle = status === 'caution' ? EMERSON.orange
                : live ? EMERSON.blue
                : mix(EMERSON.white, EMERSON.charcoal, 0.42);
    g.fillText(value, x, y + 6);
    const wv = g.measureText(value).width;

    g.font = font(TYPE.unit);
    g.fillStyle = EMERSON.grey;
    g.fillText(unit, x + wv + 5, y + 6);
    const wu = g.measureText(unit).width;

    /* A caution gets a rule under it, not a flash. A rule survives a
       photograph, a projector and colour-blindness; a blink survives
       none of those, and is the first thing an operator learns to
       ignore. */
    if (status === 'caution') {
      g.fillStyle = EMERSON.orange;
      g.fillRect(x, y + 12, wv + 5 + wu, 2);
    }
    g.font = font(TYPE.tag);
    return Math.max(wv + 5 + wu,
                    trackedWidth(g, tag, TYPE.tag.track * TYPE.tag.size));
  }

  /* ---- board furniture ------------------------------------------------
     What makes this a board rather than a drawing: it says what it is,
     and it says what its colours mean. A legend is not decoration on a
     surface whose entire alarm vocabulary is "one thing went orange". */
  function chrome(g, w, h, o) {
    const pad = 18;
    g.textBaseline = 'alphabetic';

    if (o.title) {
      g.textAlign = 'left';
      g.font = font(TYPE.display);
      g.fillStyle = mix(EMERSON.white, EMERSON.charcoal, 0.86);
      tracked(g, o.title, pad, pad + 12, TYPE.display.track * TYPE.display.size);
    }
    if (o.subtitle) {
      g.textAlign = 'right';
      g.font = font(TYPE.unit);
      g.fillStyle = EMERSON.grey;
      g.fillText(o.subtitle, w - pad, pad + 12);
    }
    /* A hairline under the header, so the plant sits in a field rather
       than floating on the page. */
    g.strokeStyle = HAIRLINE;
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(pad, pad + 24.5); g.lineTo(w - pad, pad + 24.5);
    g.stroke();

    if (o.legend !== false) {
      g.textAlign = 'left';
      g.font = font(TYPE.unit);
      let lx = pad;
      const key = [['FLOWING', EMERSON.blue], ['NO FLOW', HAIRLINE],
                   ['OFF TARGET', EMERSON.orange]];
      for (let i = 0; i < key.length; i++) {
        g.fillStyle = key[i][1];
        g.fillRect(lx, h - pad - 7, 14, 3);
        g.fillStyle = EMERSON.grey;
        g.fillText(key[i][0], lx + 20, h - pad - 2);
        lx += 20 + g.measureText(key[i][0]).width + 22;
      }
    }
  }

  /* ---- high-DPI -------------------------------------------------------
     A 900-wide backing store shown at 737 CSS pixels on a 1.25 display is
     resampled -- it was, before this. Size the backing to CSS times
     devicePixelRatio and scale the context once, and every hairline lands
     on a real device pixel.

     The consumer owns the element so the consumer calls this; it lives
     here because every consumer needs exactly these six lines. */
  function fit(canvas, logicalW, logicalH) {
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
    /* MEASURE, do not impose. An earlier cut set style.width to the
       logical width and the page's own `max-width:100%` clamped it
       straight back -- leaving a 1125-wide buffer shown at 729 CSS px,
       which is exactly the resampling this function exists to remove,
       while reporting success. The element's width belongs to the page;
       only the aspect and the backing store belong here. */
    /* Measuring the ELEMENT is wrong when the page has not sized it: a
       bare <canvas> reports its 300 px attribute default, and an earlier
       cut of this locked a 1180-wide board to a 300-wide thumbnail and
       called it exact. Measure what is AVAILABLE instead -- the parent's
       content box -- and never exceed the logical width. That handles
       both cases: a canvas in a narrow grid column shrinks to the
       column, and a canvas in a wide container gets its full size. */
    const avail = (canvas.parentElement && canvas.parentElement.clientWidth) || 0;
    canvas.style.width = (avail > 0 ? Math.min(logicalW, avail) : logicalW) + 'px';
    /* Read the width BACK off the element. style.width sets the content
       box; a border, padding or box-sizing:border-box all move the real
       one, and sizing the backing store from the number we asked for
       rather than the number we got leaves it off by exactly the border
       -- 909 against 911, which is still resampling, just subtly. */
    const cssW = canvas.clientWidth || parseFloat(canvas.style.width) || logicalW;
    const cssH = cssW * logicalH / logicalW;
    canvas.style.height = cssH + 'px';
    canvas.width  = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    const g = canvas.getContext('2d');
    /* One transform, so a caller still draws in logical coordinates and
       never thinks about any of this. */
    const s = (cssW * dpr) / logicalW;
    g.setTransform(s, 0, 0, s, 0, 0);
    return { g: g, w: logicalW, h: logicalH, dpr: dpr, scale: s };
  }

  /* ---- the surface ----------------------------------------------------
     Equipment GEOMETRY is never drawn here -- the schem-view layer owns
     it and this file only says what colour and what weight. Everything
     else is presentation. */
  function draw(g, opts) {
    const o = opts || {};
    const net = o.net, plan = o.plan;
    const w = o.width, h = o.height;
    const solved = o.solved || { q: {}, qTot: 0, pressure: 0 };
    const full = o.fullFlow || 3.5;
    const limits = o.limits || {};
    const t = o.time || 0;

    g.save();
    g.fillStyle = GROUND;
    g.fillRect(0, 0, w, h);

    if (o.grid !== false) {
      g.strokeStyle = GRID;
      g.lineWidth = 1;
      g.beginPath();
      for (let x = 0; x <= w; x += 60) { g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, h); }
      for (let y = 0; y <= h; y += 60) { g.moveTo(0, y + 0.5); g.lineTo(w, y + 0.5); }
      g.stroke();
    }

    const runs = lineFlows(net, plan, solved, limits);
    const bore = o.bore || 13;
    for (let i = 0; i < runs.length; i++) {
      runPipe(g, runs[i].pts, bore, flowColour(runs[i].q, full));
    }
    for (let i = 0; i < runs.length; i++) {
      runFlow(g, runs[i].pts, bore, runs[i].q, full, t);
    }
    /* A span that is flowing but out of band gets its bracket. Drawn
       after the fluid so the bracket is never underneath it. */
    for (let i = 0; i < runs.length; i++) {
      const r = runs[i];
      if (!(r.q > 0.001) || !r.limit) continue;
      if (statusOf(r.q, r.limit) === 'caution') offTargetSpan(g, r.pts, bore);
    }
    g.restore();

    /* A thing is named once. Anything that gets a readout below already
       carries its tag there, so its symbol caption is dropped -- two
       "TK-2"s a centimetre apart is not emphasis, it is noise. */
    const named = {};
    if (o.readouts !== false) {
      for (const id of Object.keys(net.components)) {
        const c = net.components[id];
        if (c.tag && c.kind === 'vessel' && c.role === 'sink') named[c.tag] = true;
      }
    }
    LPE.schem.draw(g, {
      ops: plan.ops.filter(function (op) { return op.op !== 'line'; })
                   .map(function (op) {
                     return named[op.label] ? Object.assign({}, op, { label: null }) : op;
                   }),
      bounds: plan.bounds, scale: plan.scale },
      Object.assign({}, SCHEM, { ground: null }));

    if (o.readouts !== false) {
      g.save();
      for (const id of Object.keys(net.components)) {
        const c = net.components[id];
        if (!c.tag || !c.at) continue;
        if (c.kind === 'vessel' && c.role === 'sink') {
          const q = flowInto(net, c.id, solved);
          if (q === null) continue;
          readout(g, c.at[0] + 26, c.at[1] + 2, c.tag, q.toFixed(2), 'gpm',
                  { live: q > 0.001, status: statusOf(q, limits[c.tag]) });
        }
      }
      const src = Object.keys(net.components).map(function (k) { return net.components[k]; })
        .filter(function (c) { return c.kind === 'valve' && c.cv !== undefined; })[0];
      if (src && src.at && solved.pressure !== undefined) {
        readout(g, src.at[0] - 36, src.at[1] - 42, 'MANIFOLD',
                solved.pressure.toFixed(1), 'psig',
                { live: solved.pressure > 0.1,
                  status: statusOf(solved.pressure, limits.MANIFOLD) });
      }
      g.restore();
    }

    if (o.chrome !== false) { g.save(); chrome(g, w, h, o); g.restore(); }
  }

  LPE.skins = LPE.skins || {};
  LPE.skins.modern = {
    EMERSON, GROUND, PANEL, HAIRLINE, EQUIPMENT, GRID, PIPE_EDGE, FACE,
    schem: SCHEM, pipe: PIPE,
    TYPE: TYPE, font: font, tracked: tracked,
    flowColour: flowColour, lineFlows: lineFlows,
    runPipe: runPipe, runFlow: runFlow, readout: readout,
    offTargetSpan: offTargetSpan, faceLoaded: faceLoaded,
    FACE_DISPLAY: FACE_DISPLAY,
    chrome: chrome, statusOf: statusOf, fit: fit, draw: draw, mix: mix,
  };

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
