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

  /* One face for the whole surface, with real fallbacks -- a board that
     silently drops to Times because a webfont did not load is not a board
     anybody will trust. */
  const FACE = '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif';

  /* ---- the schematic, modern ----------------------------------------
     A theme for the schem-view layer. Same six roles it names; different
     answers. Nothing below chrome changes, which is the claim. */
  const SCHEM = {
    line:        EQUIPMENT,
    lineWidth:   1.5,
    symbol:      EMERSON.charcoal,
    symbolWidth: 1.5,
    fill:        EMERSON.charcoal,
    ground:      PANEL,
    gap:         PANEL,
    label:       EMERSON.grey,
    labelFont:   '500 11px ' + FACE,
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
  function lineFlows(net, plan, solved) {
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
        if (q !== null) return { pts: L.pts, q };
      }
      return { pts: L.pts, q: solved.qTot || 0 };   // a trunk carries the lot
    });
  }

  /* ---- a value, where the thing it describes is -----------------------
     An operator graphic puts the number on the plant, not in a table off
     to one side. Tag small and grey -- secondary; value larger and
     charcoal -- the subject; unit smaller again. */
  function readout(g, x, y, tag, value, unit, live) {
    g.textAlign = 'left'; g.textBaseline = 'alphabetic';
    g.fillStyle = EMERSON.grey;
    g.font = '500 10px ' + FACE;
    g.fillText(tag, x, y - 11);
    g.fillStyle = live ? EMERSON.blue : mix(EMERSON.white, EMERSON.charcoal, 0.45);
    g.font = '600 17px ' + FACE;
    const s = value;
    g.fillText(s, x, y + 5);
    const wv = g.measureText(s).width;
    g.fillStyle = EMERSON.grey;
    g.font = '500 10px ' + FACE;
    g.fillText(unit, x + wv + 5, y + 5);
  }

  /* ---- the surface ----------------------------------------------------
     Paints a netlist in the modern skin. Equipment GEOMETRY is never
     redrawn here -- the schem-view layer owns it and this file only says
     what colour it is. Everything else is presentation: ground, grid,
     pipe material, flow, and the numbers an operator would want. */
  function draw(g, opts) {
    const o = opts || {};
    const net = o.net, plan = o.plan;
    const w = o.width, h = o.height;
    const solved = o.solved || { q: {}, qTot: 0, pressure: 0 };
    const full = o.fullFlow || 3.5;
    const t = o.time || 0;

    g.save();
    g.fillStyle = GROUND;
    g.fillRect(0, 0, w, h);

    /* A quiet grid: reference, not decoration. Grey is "secondary", and a
       grid that competes with the plant is a grid drawn too dark. */
    if (o.grid !== false) {
      g.strokeStyle = GRID;
      g.lineWidth = 1;
      g.beginPath();
      for (let x = 0; x <= w; x += 60) { g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, h); }
      for (let y = 0; y <= h; y += 60) { g.moveTo(0, y + 0.5); g.lineTo(w, y + 0.5); }
      g.stroke();
    }

    /* Pipe, then the fluid in it. Both from the plan's own line ops, so
       the geometry is the core's and this only decides how it looks. */
    const runs = lineFlows(net, plan, solved);
    const bore = o.bore || 11;
    for (const r of runs) runPipe(g, r.pts, bore, flowColour(r.q, full));
    for (const r of runs) runFlow(g, r.pts, bore, r.q, full, t);
    g.restore();

    /* Equipment: drawn by the schem-view layer, in this skin's colours.
       Its line ops are already painted, so only the symbols are wanted. */
    LPE.schem.draw(g, { ops: plan.ops.filter(op => op.op !== 'line'),
                        bounds: plan.bounds, scale: plan.scale },
                   Object.assign({}, SCHEM, { ground: null }));

    /* The numbers, on the plant.

       A sink's flow is NOT solved.q[its tag] -- see flowInto above. */
    if (o.readouts !== false) {
      g.save();
      const arriving = (c) => flowInto(net, c.id, solved);
      for (const id of Object.keys(net.components)) {
        const c = net.components[id];
        if (!c.tag || !c.at) continue;
        if (c.kind === 'vessel' && c.role === 'sink') {
          const q = arriving(c);
          if (q === null) continue;
          readout(g, c.at[0] + 24, c.at[1] + 2, c.tag, q.toFixed(2), 'gpm', q > 0.001);
        }
      }
      /* Manifold pressure, against the valve that sets it. */
      const src = Object.keys(net.components)
        .map(k => net.components[k])
        .filter(c => c.kind === 'valve' && c.cv !== undefined)[0];
      if (src && src.at && solved.pressure !== undefined) {
        readout(g, src.at[0] - 34, src.at[1] - 34, 'MANIFOLD',
                solved.pressure.toFixed(1), 'psig', solved.pressure > 0.1);
      }
      g.restore();
    }
  }
  LPE.skins = LPE.skins || {};
  LPE.skins.modern = {
    EMERSON, GROUND, PANEL, HAIRLINE, EQUIPMENT, GRID, PIPE_EDGE, FACE,
    schem: SCHEM, pipe: PIPE,
    flowColour, lineFlows, runPipe, runFlow, readout, draw, mix,
  };

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
