/* @layer chrome
   @core Process Core -- Pro Cutaway: the inside of a bore, drawn.
   May use: geometry (real shape), flow-field (what the fluid is doing).
   Never: physics of its own. If a number here could be wrong about the
   world rather than about the picture, it belongs one layer down.     */
/* ---------------- PRO CUTAWAY ----------------------------------------

   WHAT THIS IS FOR. A process display answers "what is connected to
   what". It cannot answer "what is the fluid doing", because at display
   scale the inside of a pipe is a line. This view magnifies a length of
   bore until the inside is big enough to look at, and then shows the one
   thing every other view in this core asserts is false by omission: the
   fluid does not move as a block.

   WHAT IT DRAWS, and where each part comes from:

     the walls      geometry -- the real bore at every station, to one
                    scale, following the real centreline including the
                    square corner a socket-weld fitting actually turns
     the fluid      flow-field -- velocity at (station, lane), from
                    continuity along the path and a blended Prandtl /
                    Poiseuille profile across it
     the envelope   the SAME profile that carries the particles, plotted.
                    Not decoration laid over them: if one is wrong both
                    are wrong together, and that is the only way to be
                    sure the picture is not lying about its own model.

   WHAT IS TRUE AND WHAT IS A READING AID. The shapes, the bores, the
   relative speeds and the profile are true. Three things are not, and
   each says so:

     MAGNIFIED SPEED. A 10-inch line at 3700 gpm runs about 15 ft/s. On
     screen that is a blur. The field is magnified through
     flowfield.magnified(), which refuses without a stated reason, and
     this view prints the factor on the drawing. Relative speeds are
     untouched, which is what separates exaggerating a true quantity
     from inventing one.

     MARKERS ARE NOT MOLECULES. They are spaced to be countable. Their
     number is a drawing choice and says nothing about the fluid.

     CROSS-STREAM WANDER is scaled by how turbulent the flow is, so
     turbulent flow visibly mixes and laminar flow visibly does not.
     That is a real distinction drawn expressively -- the amplitude is
     chosen to read, not measured.

   WHAT THIS FILE MUST NOT CONTAIN. Any velocity profile. Any Reynolds
   threshold. Any correlation. Those live in flowfield.js where they are
   tested against published constants. The reason LPE's cutaway cannot
   be graded is that its 1/7-power law sits in the same function as its
   marker opacity; this file exists on the other side of that line.    */
(function (LPE) {
  'use strict';

  /* Colour is what a skin is for. Emerson house values, matching the
     modern skin rather than importing from it -- one skin reaching into
     another is a dependency nobody declared. */
  const INK      = '#3F4040';
  const HAIRLINE = '#dcdddd';
  const PANEL    = '#fbfbfb';
  const GROUND   = '#f3f4f4';
  const METAL    = '#bebebe';
  const METAL_RIM = '#9b9c9c';
  /* TRIM IS NOT THE BODY. Cage, plug and seat ring are separate parts
     that come out in your hand, and drawn in the casting's own grey the
     section read as one lump with a hole in it. */
  /* AND TRIM IS NOT FLUID. These were a cool blue-grey, a few points
     of hue from the fluid tint sitting on top of them, so the seat
     ring read as another pocket of water rather than as the one
     surface in the valve that has to look like metal on metal. Warmed
     off the blue axis: the trim is now plainly steel next to plainly
     water, which is the distinction this whole panel turns on. */
  const TRIM_FILL = '#9c9793';
  const TRIM_RIM  = '#6b6660';
  const CAVITY   = '#eef1f3';
  const FLUID    = '#004B8D';
  const FLUID_FAST = '#00A4D2';
  /* VAPOUR IS NOT FAST WATER. When the pressure at the throat falls
     below the fluid's vapour pressure it boils, and a bubble of its
     own vapour is a different substance from the liquid around it --
     so it is drawn as one, open and pale rather than solid and
     blue. Reading cavitation as "the water went light blue" is how
     a picture teaches the wrong lesson. */
  const VAPOUR = '#f2f6f8';
  /* PACKING IS NOT METAL AND IT IS NOT FLUID. It is a soft,
     consumable, compressed thing, and drawn in the trim's grey it
     reads as another machined part -- which is close to the
     misconception that makes people over-tighten it. Warm and matte
     and clearly not steel. */
  const PACKING = '#b08968';
  const PACKING_RIM = '#6f5844';
  const ENVELOPE = '#F79428';
  const LABEL    = '#959797';
  const FACE = '"Arial", "Helvetica Neue", Helvetica, ' +
               '"Liberation Sans", system-ui, sans-serif';

  /* A DARK VIEW IS A SECOND PALETTE, NOT A FILTER.

     Inverting a light drawing gives grey metal on a grey ground and a
     fluid that glows the wrong way round. Dark gets its own values: the
     cavity goes darker than the casting (a hole is darker than the metal
     around it, which is the opposite of the light sheet where paper is
     the brightest thing), the fluid moves to the brand cyan because
     Emerson blue disappears against near-black, and the metal keeps
     enough separation from the ground to read as a section. */
  const DARK = {
    metal: '#3a3d40', rim: '#5e6368', cavity: '#13161a',
    fluid: '#00A4D2', fluidFast: '#7fe3ff', envelope: '#FFCF22',
    ink: '#e6e8ea', label: '#8d9399', hairline: '#2a2e33',
    panel: '#1b1f24', ground: '#15181c', face: FACE,
    trim: '#6f777d', trimRim: '#9aa3a9',
  };

  /* ---- THE ACTUATOR'S OWN COLOURS -----------------------------------

     Taken from the published 657 model's dark theme, not invented
     here and not the body's greys. The castings are blue-toned and
     differ from each other -- upper, lower, yoke, plate, stem, seat,
     adjustor and spring all have their own value -- which is what
     makes that drawing read as an assembly of separate parts rather
     than one grey lump. Drawn in the body's metal grey the actuator
     came out flat beside it, which is the complaint.

     Kept apart from the body palette on purpose: the valve is a
     casting in section and the actuator is a sheet-metal and cast
     assembly in elevation, and they are allowed to look different.
     Both sit on the same panel. */
  const ACT_DARK = {
    upper: '#5878a8', lower: '#6c8ebc', yoke: '#48628a',
    plate: '#5b9bdb', stem: '#4a7db0', seat: '#5688bc',
    adj: '#93abc9', coil: '#6bb8e8', coilBack: '#3e6d94',
    dia: '#4a7db0', line: '#b8c6d8', hwLine: '#a8b2bc',
    nut: '#9aa3ae',
    source: 'the dark theme of the 657 model itself, '
          + 'D100306X012 Figure 6',
  };

  const ROLES = ['metal', 'rim', 'cavity', 'fluid', 'fluidFast', 'envelope',
                 'ink', 'label', 'hairline', 'panel'];

  const HOUSE = {
    metal: METAL, rim: METAL_RIM, cavity: CAVITY, fluid: FLUID,
    fluidFast: FLUID_FAST, envelope: ENVELOPE, ink: INK, label: LABEL,
    hairline: HAIRLINE, panel: PANEL, face: FACE, vapour: VAPOUR,
    packing: PACKING, packingRim: PACKING_RIM,
    trim: TRIM_FILL, trimRim: TRIM_RIM,
  };

  /* ALL OF IT OR NONE OF IT, which is the same contract phys-view and
     schem-view already use.

     This first merged the supplied theme ON TOP of the house palette and
     then checked for missing roles -- a check that could never fire,
     because the merge had already filled every one. A test caught it
     accepting a theme with a single colour in it. A dead check is worse
     than no check: it reads like a guarantee.

     Half-supplying is the real hazard. A caller who overrides `fluid`
     and forgets `fluidFast` gets one of them in the house blue and has
     no way to discover it except by looking very hard at a moving
     picture. */
  function theme(spec) {
    if (spec === undefined || spec === null) return Object.assign({}, HOUSE);
    const missing = ROLES.filter(r => !spec[r]);
    if (missing.length)
      throw new Error('procutaway.theme: no colour for ' + missing.join(', ') +
        '. Supply every role or supply none -- a half-given theme leaves ' +
        'some elements in the house palette and some in yours, and the only ' +
        'way to notice is to stare at a moving picture. Roles: ' +
        ROLES.join(', ') + '.');
    return Object.assign({ face: FACE, trim: TRIM_FILL, trimRim: TRIM_RIM },
                        spec);
  }

  /* ---- geometry in page coordinates ---------------------------------
     The centreline arrives in inches from the geometry layer. One scale
     is chosen to fit, and applied to LENGTH AND BORE ALIKE -- a cutaway
     whose bore is on a different scale from its run is the thing this
     view exists to stop being necessary. */
  function plan(fp, opts) {
    if (!fp || !fp.path || typeof fp.length !== 'number')
      throw new Error('procutaway.plan: expected a geometry flow path.');
    if (!LPE.geometry)
      throw new Error('procutaway.plan: the geometry layer is not loaded.');
    const o = opts || {};
    const W = o.width, H = o.height;
    if (!(W > 0) || !(H > 0))
      throw new Error('procutaway.plan: width and height are required.');
    const pad = o.pad === undefined ? 56 : o.pad;

    /* Sample the centreline densely enough that the bore is smooth, and
       carry the bore at each sample so the wall can be offset from it. */
    const step = o.sample || Math.max(fp.length / 400, 1e-4);
    const pts = [];
    for (let s = 0; s <= fp.length + 1e-9; s += step) {
      const at = Math.min(s, fp.length);
      const p = pointAt(fp, at);
      if (!p) continue;
      const bore = LPE.geometry.boreAtS(fp, at);
      pts.push({ s: at, x: p.x, y: p.y, bore: bore, nx: p.nx, ny: p.ny });
    }
    if (pts.length < 2)
      throw new Error('procutaway.plan: the path produced no samples.');

    /* Extent includes the WALL, not just the centreline: a run whose
       bore is half its length goes off the top otherwise. */
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const p of pts) {
      const h = (p.bore || 0) / 2;
      for (const sgn of [-1, 1]) {
        const X = p.x + sgn * p.nx * h, Y = p.y + sgn * p.ny * h;
        if (X < x0) x0 = X; if (X > x1) x1 = X;
        if (Y < y0) y0 = Y; if (Y > y1) y1 = Y;
      }
    }
    const k = Math.min((W - 2 * pad) / Math.max(x1 - x0, 1e-9),
                       (H - 2 * pad) / Math.max(y1 - y0, 1e-9));
    const ox = pad + (W - 2 * pad - (x1 - x0) * k) / 2 - x0 * k;
    const oy = pad + (H - 2 * pad - (y1 - y0) * k) / 2 - y0 * k;

    return Object.freeze({
      pts: pts, length: fp.length, scale: k, ox: ox, oy: oy,
      features: fp.features || [],
      toPage: (x, y) => [ox + x * k, oy + y * k],
    });
  }

  /* Position and unit normal at arc length s along the polyline. */
  function pointAt(fp, s) {
    const P = fp.path;
    let acc = 0;
    for (let i = 1; i < P.length; i++) {
      const ax = P[i - 1][0], ay = P[i - 1][1];
      const bx = P[i][0], by = P[i][1];
      const seg = Math.hypot(bx - ax, by - ay);
      if (seg <= 0) continue;
      if (s <= acc + seg + 1e-12) {
        const t = (s - acc) / seg;
        const ux = (bx - ax) / seg, uy = (by - ay) / seg;
        return { x: ax + (bx - ax) * t, y: ay + (by - ay) * t,
                 ux: ux, uy: uy, nx: -uy, ny: ux };
      }
      acc += seg;
    }
    const n = P.length - 1;
    if (n < 1) return null;
    const ax = P[n - 1][0], ay = P[n - 1][1], bx = P[n][0], by = P[n][1];
    const seg = Math.hypot(bx - ax, by - ay) || 1;
    const ux = (bx - ax) / seg, uy = (by - ay) / seg;
    return { x: bx, y: by, ux: ux, uy: uy, nx: -uy, ny: ux };
  }

  const sampleAt = (plan, s) => {
    const i = Math.max(0, Math.min(plan.pts.length - 1,
      Math.round(s / plan.length * (plan.pts.length - 1))));
    return plan.pts[i];
  };

  /* ---- markers -------------------------------------------------------
     NOT molecules. Spaced to be countable, and the count is a drawing
     choice. Each carries a lane across the bore, which is what makes the
     profile visible at all: every marker at lane 0 would show a block of
     fluid moving, which is the one thing this view exists to deny. */
  function markers(n, rand, window) {
    const r = rand || Math.random;
    const w = window || [0, 1];
    const out = [];
    for (let i = 0; i < n; i++)
      out.push({ s: w[0] + r() * (w[1] - w[0]),
                 lane: (r() * 2 - 1) * 0.94 });
    /* THE WINDOW A SET LIVES IN.

       A close-up on the cage window frames about one inch of a
       forty-inch route, and fluid is through that inch in a hundredth
       of the time it spends anywhere else -- so with markers spread
       over the whole path, the close-up is empty almost always. That
       sparseness is real: it IS the speed, and on the full panel it
       should stay.

       But a close-up exists to show the jet, and a jet nobody can see
       is not a drawing. So a detail set is seeded inside the stretch
       being looked at and recycled within it. The SPEED is still the
       field's; what is declared here is that the population of this
       particular set is a framing choice and not a residence time. */
    out.window = [w[0], w[1]];
    return out;
  }

  /* Advance the markers through the field. `dt` is seconds; the field
     reports feet per second and the path is in inches, hence the 12.

     SUBSTEPPED, because a single Euler step is wrong twice over. A
     10-inch line at working flow runs 15 ft/s, which at cutaway scale is
     most of the frame per tick -- so in one step a marker both leaves
     visible gaps in its own path and jumps straight over the station
     where the bore changes, picking up the velocity on the far side of a
     contraction it never passed through. Capping the move at a small
     fraction of the run per substep fixes the integration and the
     picture at the same time. */
  function step(marks, field, plan, dt, opts) {
    const o = opts || {};
    const mix = o.mix === undefined ? 0.5 : o.mix;
    const rand = o.rand || Math.random;
    const maxFrac = o.maxStep === undefined ? 0.01 : o.maxStep;

    /* How many substeps the fastest marker needs. One pass over the set
       to size it, so every marker advances on the same clock. */
    let vMax = 0;
    for (const m of marks) {
      const v = field.at(m.s * plan.length, m.lane);
      if (v !== null && v > vMax) vMax = v;
    }
    const reach = vMax * 12 * dt / plan.length;
    const n = Math.max(1, Math.min(64, Math.ceil(reach / maxFrac)));
    const h = dt / n;

    for (let k = 0; k < n; k++) stepOnce(marks, field, plan, h, mix, rand);
    return marks;
  }

  function stepOnce(marks, field, plan, dt, mix, rand) {
    for (const m of marks) {
      const sIn = m.s * plan.length;
      const v = field.at(sIn, m.lane);
      if (v === null || !(v > 0)) continue;
      m.s += (v * 12 * dt) / plan.length;

      /* Turbulent flow mixes across the stream and laminar flow does
         not. The distinction is real; the amplitude is chosen to read. */
      const turb = field.turbulence ? field.turbulence(sIn) : 1;
      if (turb > 0 && mix > 0) {
        m.lane += (rand() * 2 - 1) * turb * mix * dt;
        if (m.lane > 0.97) m.lane = 0.97;
        if (m.lane < -0.97) m.lane = -0.97;
      }
      /* WRAP PROPERLY. This subtracted 1 exactly once, so a marker that
         advanced more than a full run in one step -- a long timestep, a
         dropped frame, a heavily magnified field -- landed past the end
         and stayed there, invisible, for the rest of the session. */
      const w0 = marks.window ? marks.window[0] : 0;
      const w1 = marks.window ? marks.window[1] : 1;
      if (m.s >= w1) {
        const span = Math.max(w1 - w0, 1e-9);
        m.s = w0 + ((m.s - w0) % span);
        m.lane = (rand() * 2 - 1) * 0.94;
      }
    }
  }

  /* ---- a valve section in page coordinates ---------------------------
     Same contract as plan(): one scale, applied to every dimension, and
     the WHOLE part has to fit -- a cutaway whose bonnet is off the top
     is not a cutaway. */
  function planValve(gv, opts) {
    if (!gv || gv.kind !== 'globeValve')
      throw new Error('procutaway.planValve: expected geometry.globeValve.');
    const o = opts || {};
    const W = o.width, H = o.height;
    if (!(W > 0) || !(H > 0))
      throw new Error('procutaway.planValve: width and height are required.');
    const pad = o.pad === undefined ? 46 : o.pad;

    const e = gv.extent;
    const top = gv.plugAt(100).stem.reduce(
      (m, q) => Math.min(m, q[1]), e.y0);
    const bot = gv.plugAt(100).stem.reduce(
      (m, q) => Math.max(m, q[1]), e.y1);
    const y0 = Math.min(e.y0, top, bot), y1 = Math.max(e.y1, top, bot);

    const k = Math.min((W - 2 * pad) / Math.max(e.x1 - e.x0, 1e-9),
                       (H - 2 * pad) / Math.max(y1 - y0, 1e-9));
    const ox = pad + (W - 2 * pad - (e.x1 - e.x0) * k) / 2 - e.x0 * k;
    /* y is up in geometry and down on a canvas. */
    const oy = pad + (H - 2 * pad - (y1 - y0) * k) / 2 + y1 * k;
    return Object.freeze({
      valve: gv, scale: k, ox: ox, oy: oy,
      toPage: (x, y) => [ox + x * k, oy - y * k],
    });
  }

  /* ---- framing a detail ----------------------------------------------

     planValve fits the whole valve, which is the right answer for a
     panel and the wrong one for a close-up. Enlarging the whole valve
     shows the same picture bigger; it does not get you closer to the
     one place where anything is happening.

     Everything worth looking hard at in a control valve happens
     across about an inch of cage wall: the flow accelerates by a
     factor of ten, the pressure falls to its minimum, and that is
     where the fluid will cavitate or flash when this model learns to
     say so. Framing that inch is the entire purpose of a close-up.

     Same contract as planValve -- one scale, a toPage -- so drawValve
     and the flow draw into it unchanged. Geometry outside the frame
     is simply off-canvas. */
  function planValveDetail(gv, opts) {
    if (!gv || gv.kind !== 'globeValve')
      throw new Error('procutaway.planValveDetail: expected ' +
        'geometry.globeValve.');
    const o = opts || {};
    const W = o.width, H = o.height;
    if (!(W > 0) || !(H > 0))
      throw new Error('procutaway.planValveDetail: width and height are ' +
        'required.');
    const at = o.at;
    if (!Array.isArray(at) || at.length !== 2)
      throw new Error('procutaway.planValveDetail: {at: [x, y]} names the ' +
        'point to centre on, in inches in the valve frame. There is no ' +
        'default -- which detail you want is the whole question.');
    const span = o.spanIn;
    if (!(span > 0))
      throw new Error('procutaway.planValveDetail: {spanIn} is how many ' +
        'inches of valve the frame covers. Without it the magnification ' +
        'is unstated, and an unstated magnification is how a picture ends ' +
        'up claiming a size it never had.');

    const k = W / span;
    const ox = W / 2 - at[0] * k;
    const oy = H / 2 + at[1] * k;
    return Object.freeze({
      valve: gv, scale: k, ox: ox, oy: oy, spanIn: span, at: at.slice(),
      toPage: (x, y) => [ox + x * k, oy - y * k],
    });
  }

  function ring(g, pl, pts, close) {
    g.beginPath();
    pts.forEach(function (q, i) {
      const a = pl.toPage(q[0], q[1]);
      i ? g.lineTo(a[0], a[1]) : g.moveTo(a[0], a[1]);
    });
    if (close !== false) g.closePath();
  }

  /* Draw the valve section. The order is the order a reader needs: the
     void first, then the metal in it, then the moving part, then what
     each thing is called. */
  function drawValve(g, pl, opts) {
    const o = opts || {};
    const t = theme(o.theme);
    const gv = pl.valve;
    const W = o.width, H = o.height;
    const travel = o.travel === undefined ? 50 : o.travel;
    const plug = gv.plugAt(travel);

    g.save();
    /* GROUND NULL MEANS PAINT NONE, which is the contract schem-view
       and phys-view already keep. `o.ground || t.panel` does not keep
       it: null is falsy, so asking for no ground painted the panel
       colour over the whole canvas instead -- fine while this was the
       only thing on it, and it wiped the pipe out from under the
       valve the first time one was drawn INTO a drawing. The default
       is still the panel; the way to decline it is to say null. */
    if (o.ground !== null) {
      g.fillStyle = o.ground || t.panel;
      g.fillRect(0, 0, W, H);
    }

    /* The casting, then the bonnet bolted on top of it. Both are
       measured parts now, so they are drawn as parts rather than as one
       silhouette with everything implied inside it. */
    /* The casting and the bonnet are each TWO regions in section, one
       either side of the trim column. Drawing only the first kept the
       left half of the valve and silently dropped the right. */
    g.fillStyle = t.metal; g.strokeStyle = t.rim; g.lineWidth = 1.6;
    for (const r of gv.body) { ring(g, pl, r); g.fill(); g.stroke(); }
    for (const r of (gv.bonnet || [])) { ring(g, pl, r); g.fill(); g.stroke(); }

    /* THE TWO SAUCERS. Drawn as voids cut out of the casting, which is
       what they are -- and drawn separately, because they are not
       mirror images: the inlet dish wraps the cage and the outlet dish
       is a plain expansion. */
    g.fillStyle = t.cavity;
    ring(g, pl, gv.inletCavity[0]); g.fill();
    ring(g, pl, gv.outletCavity[0]); g.fill();
    g.strokeStyle = t.hairline; g.lineWidth = 1;
    ring(g, pl, gv.inletCavity[0]); g.stroke();
    ring(g, pl, gv.outletCavity[0]); g.stroke();

    /* Seat ring, then cage: the load path, bottom up. */
    g.fillStyle = t.trim; g.strokeStyle = t.trimRim; g.lineWidth = 1.4;
    for (const r of gv.seatRing) { ring(g, pl, r); g.fill(); g.stroke(); }
    for (const r of gv.cage.rings) { ring(g, pl, r); g.fill(); g.stroke(); }

    /* The windows are holes in the cage, so they are drawn as cavity --
       and the two differ in size, because an alternating cage presents a
       large window to one side of a section plane and a small one to the
       other. */
    g.fillStyle = t.cavity;
    for (const w of gv.cage.windows) { ring(g, pl, w); g.fill(); }
    g.strokeStyle = t.rim; g.lineWidth = 1;
    for (const w of gv.cage.windows) { ring(g, pl, w); g.stroke(); }

    /* THE FLUID GOES IN HERE: after the windows are cut, before the
       plug goes in.

       Drawn last it sat on top of the plug, and fluid in front of the
       thing blocking it is the one picture this panel must never make.
       Drawn before the cage, the cage fill buried the only part worth
       seeing -- the stream crossing the window and dropping through
       the port. Here both come out right, and for the right reason:
       the window is open so the flow shows through it, and the plug is
       solid so it hides what is behind it. */
    if (typeof o.onFluid === 'function') {
      g.save();
      o.onFluid(g);
      g.restore();
    }

    /* The plug, its balance holes and its seal. */
    g.fillStyle = t.trim; g.strokeStyle = t.trimRim; g.lineWidth = 1.4;
    ring(g, pl, plug.head); g.fill(); g.stroke();
    ring(g, pl, plug.stem); g.fill(); g.stroke();
    /* THE DRILLINGS ARE FULL OF WATER, and they are cut here because
       the plug is drawn over them -- a hole has to be re-cut out of
       the thing it is a hole in. Cut in CAVITY, which is what this
       did, they came back as two black slabs inside the plug, on top
       of the water the fluid pass had already put in them and under
       the few particles drawBalance then sprinkled over the top. The
       wetted domain has always said they hold fluid; the drawing
       simply painted over it a step later.

       Dry, they are cavity: no fluid pass means no water to show. */
    g.fillStyle = typeof o.onFluid === 'function' ? water(t) : t.cavity;
    for (const h of plug.balanceHoles) { ring(g, pl, h); g.fill(); }
    if (plug.seal) {
      g.fillStyle = t.envelope;
      ring(g, pl, plug.seal.ring); g.fill();
      g.strokeStyle = t.ink; g.lineWidth = 0.8; g.stroke();
    }


    /* ---- what each thing is, and which parts are invented ---- */
    if (o.labels !== false) {
      g.font = '500 10px ' + t.face;
      g.fillStyle = t.label;
      const say = (x, y, text, dx, dy) => {
        const a = pl.toPage(x, y);
        g.globalAlpha = 0.55;
        g.strokeStyle = t.label; g.lineWidth = 1; g.setLineDash([3, 3]);
        g.beginPath(); g.moveTo(a[0], a[1]);
        g.lineTo(a[0] + dx, a[1] + dy); g.stroke();
        g.setLineDash([]); g.globalAlpha = 1;
        g.textAlign = dx < 0 ? 'right' : 'left';
        g.fillText(text, a[0] + dx + (dx < 0 ? -4 : 4), a[1] + dy + 3);
        g.textAlign = 'left';
      };
      /* THE LABELS FOLLOW THE CASTING, NOT THE SERVICE.

         Both of these used to flip for flow-up: the words swapped
         ends and the leaders swapped sides of the centreline. That
         was right when flow-up was drawn as the same picture with
         different names on it. It is wrong now that the valve is
         turned round -- the fluid always enters at the left, so
         swapping the words put "outlet" on the inlet, and `up` was
         mirroring leaders in y for a section that no longer mirrors
         in y at all.

         Taken off `ports` rather than off `flow`, so the drawing can
         only ever say what the shape says. */
      const up = 1;
      const d = gv.port;
      const roleAt = id => {
        for (const q of gv.ports) if (q.id === id) return q.role;
        return '';
      };
      say(-gv.faceToFace / 2 + d * 0.3, up * d * 0.1,
          roleAt('left'), -16, -26);
      say(gv.faceToFace / 2 - d * 0.3, up * d * 0.1,
          roleAt('right'), 16, 26);
      say(0, 0, 'port ' + gv.port + ' in', 0, up * 34);
      say(-gv.cage.outerR, (gv.cage.windowY0 + gv.cage.y1) / 2,
          'cage windows', -30, -8);
      say(gv.cage.outerR, gv.cage.y1, 'cage: guides the plug; the bonnet ' +
          'clamps it onto the seat', 34, -40);
      /* The U-seal is still modelled and still flips with flow
         direction -- it is simply not labelled, because at this scale
         the callout costs more than it tells. */
    }

    if (o.caption !== false) {
      g.font = '600 11px ' + t.face; g.fillStyle = t.ink;
      g.fillText(o.title || '', 20, 24);
      g.font = '400 10.5px ' + t.face; g.fillStyle = t.label;
      const notes = provenance(gv, pl.scale, o.notes);
      if (o.provenance !== false)
        notes.forEach((n, i) =>
          g.fillText(n, 20, H - 14 - (notes.length - 1 - i) * 14));
    }
    g.restore();
  }

  /* ---- draw ---------------------------------------------------------- */
  function draw(g, plan, field, opts) {
    const o = opts || {};
    const t = theme(o.theme);
    const W = o.width, H = o.height;
    const marks = o.markers || [];

    g.save();
    g.fillStyle = o.ground === null ? t.panel : (o.ground || GROUND);
    g.fillRect(0, 0, W, H);

    const wall = sgn => {
      const path = [];
      for (const p of plan.pts) {
        if (!(p.bore > 0)) continue;
        const h = p.bore / 2;
        path.push(plan.toPage(p.x + sgn * p.nx * h, p.y + sgn * p.ny * h));
      }
      return path;
    };
    const upper = wall(1), lower = wall(-1);

    /* The cavity: everything inside the two walls. Drawn before the
       fluid so the fluid sits in it rather than on it. */
    g.beginPath();
    upper.forEach((q, i) => i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]));
    for (let i = lower.length - 1; i >= 0; i--) g.lineTo(lower[i][0], lower[i][1]);
    g.closePath();
    g.fillStyle = t.cavity;
    g.fill();
    g.save();
    g.clip();

    /* ---- the fluid ---- */
    const fast = o.fullSpeed || 1;
    for (const m of marks) {
      const sIn = m.s * plan.length;
      const p = sampleAt(plan, sIn);
      if (!p || !(p.bore > 0)) continue;
      const v = field.at(sIn, m.lane);
      if (v === null) continue;
      const h = (p.bore / 2) * m.lane;
      const a = plan.toPage(p.x + p.nx * h, p.y + p.ny * h);

      /* A STREAK WHOSE LENGTH IS THE SPEED.

         Drawn backwards from the marker by however far it travels in a
         fixed slice of time, rather than by where it happened to be on
         the previous frame. Two reasons. A frame-to-frame streak is a
         function of the browser's frame rate, so the same flow reads
         differently on a slow machine; and when a marker moves most of
         the run in one tick that streak becomes a line down the whole
         pipe, which is what this view looked like on its first run.

         Length proportional to velocity is the thing that makes the
         profile readable in a STILL frame: long streaks down the middle,
         stubs against the wall. */
      const trail = v * 12 * (o.streak === undefined ? 0.012 : o.streak);
      if (trail > 0) {
        /* FOLLOW THE PATH BACKWARDS, DO NOT CUT THE CORNER.

           Drawn as a straight chord from the trailing point to the
           marker, a streak that spans a bend goes through the OUTSIDE
           WALL -- which on a socket-weld elbow, where the bore turns a
           square corner, meant every streak crossing the junction cut
           diagonally across the metal. The fluid does not do that, and a
           view whose whole claim is "this is what is happening inside"
           cannot draw it doing that.

           So the trail is a polyline sampled along the real centreline,
           offset at the marker's own lane. */
        const frac = Math.min(1, v / fast);
        g.strokeStyle = frac > 0.66 ? t.fluidFast : t.fluid;
        g.globalAlpha = 0.22 + 0.5 * frac;
        g.lineWidth = 1.5;
        g.lineCap = 'round';
        g.lineJoin = 'round';
        const steps = Math.max(2, Math.min(12,
          Math.ceil(trail * plan.scale / 6)));
        g.beginPath();
        for (let i = steps; i >= 0; i--) {
          const sb = Math.max(0, sIn - trail * (i / steps));
          const pb = sampleAt(plan, sb);
          if (!pb || !(pb.bore > 0)) continue;
          const bh = (pb.bore / 2) * m.lane;
          const q = plan.toPage(pb.x + pb.nx * bh, pb.y + pb.ny * bh);
          i === steps ? g.moveTo(q[0], q[1]) : g.lineTo(q[0], q[1]);
        }
        g.stroke();
      }
      g.globalAlpha = 0.9;
      g.fillStyle = t.fluid;
      g.beginPath(); g.arc(a[0], a[1], 1.7, 0, 7); g.fill();
    }
    g.globalAlpha = 1;
    g.restore();

    /* ---- the envelope, from the same profile that moved the markers --
       Plotted at stations across the run so the shape can be compared
       with where the markers actually are. */
    if (o.envelope !== false) {
      const n = o.envelopeAt || 5;
      g.strokeStyle = t.envelope;
      g.lineWidth = 1.6;
      for (let j = 1; j <= n; j++) {
        const sIn = plan.length * j / (n + 1);
        const p = sampleAt(plan, sIn);
        if (!p || !(p.bore > 0)) continue;
        const vMean = field.mean(sIn);
        if (!(vMean > 0)) continue;
        const reach = (o.envelopeReach || 0.18) * plan.length;
        g.beginPath();
        for (let i = 0; i <= 40; i++) {
          const lane = -1 + 2 * i / 40;
          const v = field.at(sIn, lane);
          if (v === null) continue;
          const h = (p.bore / 2) * lane;
          const along = (v / vMean) * reach;
          const q = plan.toPage(p.x + p.nx * h + p.ux * along,
                                p.y + p.ny * h + p.uy * along);
          i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]);
        }
        g.stroke();
        /* The baseline it is measured from. */
        g.globalAlpha = 0.35;
        const c0 = plan.toPage(p.x - p.nx * p.bore / 2, p.y - p.ny * p.bore / 2);
        const c1 = plan.toPage(p.x + p.nx * p.bore / 2, p.y + p.ny * p.bore / 2);
        g.beginPath(); g.moveTo(c0[0], c0[1]); g.lineTo(c1[0], c1[1]); g.stroke();
        g.globalAlpha = 1;
      }
    }

    /* ---- the metal ---- */
    g.strokeStyle = t.rim;
    g.lineWidth = o.wallWidth || 2.2;
    g.lineJoin = 'miter';
    for (const side of [upper, lower]) {
      g.beginPath();
      side.forEach((q, i) => i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]));
      g.stroke();
    }

    /* Where the bore changes, the geometry layer reports a feature. Mark
       them: a contraction is where the fluid speeds up, and a reader
       should be able to see the cause beside the effect. */
    if (o.features !== false) {
      g.font = '500 10px ' + t.face;
      g.fillStyle = t.label;
      /* Staggered leader lengths. Three features within a two-inch
         fitting put their labels on top of each other otherwise, which
         is how a view that is telling you the cause ends up hiding it. */
      plan.features.forEach(function (f, i) {
        const p = sampleAt(plan, f.s);
        if (!p || !(p.bore > 0)) return;
        const h = p.bore / 2;
        const a = plan.toPage(p.x + p.nx * h, p.y + p.ny * h);
        const lead = 14 + (i % 3) * 15;
        g.globalAlpha = 0.5;
        g.strokeStyle = t.label; g.lineWidth = 1; g.setLineDash([3, 3]);
        g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(a[0], a[1] - lead); g.stroke();
        g.setLineDash([]);
        g.globalAlpha = 1;
        g.fillText(f.kind, a[0] + 4, a[1] - lead - 3);
      });
    }

    /* ---- what the reader is owed ----
       The magnification, by name, on the drawing. */
    if (o.caption !== false) {
      g.font = '600 11px ' + t.face;
      g.fillStyle = t.ink;
      const lines = [];
      if (o.title) lines.push(o.title);
      g.fillText(lines.join('') || '', 20, 24);

      g.font = '400 10.5px ' + t.face;
      g.fillStyle = t.label;
      const mag = field.magnification;
      const notes = [];
      notes.push('scale 1 in = ' + plan.scale.toFixed(1) + ' px, length and bore alike');
      notes.push(mag
        ? 'speed magnified ' + mag.factor + 'x -- ' + mag.why
        : 'speed NOT magnified: true ft/s');
      notes.push('markers are not molecules; the envelope is plotted from ' +
                 'the same profile that carries them');
      notes.forEach((n, i) => g.fillText(n, 20, H - 14 - (notes.length - 1 - i) * 14));
    }

    g.restore();
  }

  /* Mix two hex colours. Chrome may name colours; this is how it
     names one that lies between two it already has. */
  function mix(c1, c2, f) {
    const hex = c => [parseInt(c.slice(1, 3), 16),
                      parseInt(c.slice(3, 5), 16),
                      parseInt(c.slice(5, 7), 16)];
    const a = hex(c1), b = hex(c2);
    const k = Math.max(0, Math.min(1, f));
    const ch = i => Math.round(a[i] + (b[i] - a[i]) * k)
      .toString(16).padStart(2, '0');
    return '#' + ch(0) + ch(1) + ch(2);
  }

  /* ---- FLUID IN A CAVITY ----------------------------------------------

     A PARTICLE IS FLUID, NOT FLOW. That one sentence is the whole
     correction. Every earlier version here treated a particle as a
     tracer of throughput, so anywhere without throughput got nothing
     drawn in it -- and a valve is mostly places without throughput.
     The drillings through a balanced plug, the cavity against the
     bonnet, the far corners of both chambers: all of them full of
     liquid, all of them drawn empty, and every attempt to fix it by
     spreading the route wider produced something that looked like
     noise because that is what it was.

     So particles are seeded by AREA over the whole wetted cavity, at
     one density everywhere, and they move at whatever the field says
     the fluid is doing where they are. In the window that is a hard
     sprint. In a corner it is a drift. In a dead end it is nothing,
     and the particle sits there, because that is what the fluid does.

     DENSITY IS PRESENCE, NOT RESIDENCE. Left to themselves, tracers
     pile up wherever the flow is slow and thin out wherever it is
     fast -- true of real tracers, and wrong for this picture, which
     is trying to say "there is liquid here" and not "liquid lingers
     here". Each particle therefore has a short life and is re-seeded
     uniformly when it ends, which holds the density even while the
     motion stays honest. */
  function fluidParticles(field, n, rand) {
    if (!field || typeof field.inside !== 'function')
      throw new Error('procutaway.fluidParticles: expected a solved field ' +
        '-- flowfield.solveField2D -- which knows where the fluid is.');
    const r = rand || Math.random;
    const W = field.width * field.cellIn, H = field.height * field.cellIn;
    const x0 = field.originIn[0], y0 = field.originIn[1];
    const seed = () => {
      for (let k = 0; k < 400; k++) {
        const x = x0 + r() * W, y = y0 + r() * H;
        if (field.inside(x, y)) return { x: x, y: y };
      }
      return null;
    };
    const out = [];
    for (let i = 0; i < n; i++) {
      const p = seed();
      if (!p) break;
      p.life = 0.5 + r() * 1.4;
      p.age = r() * p.life;          /* staggered, so they do not blink */
      out.push(p);
    }
    out.reseed = seed;
    return out;
  }

  function stepFluid(parts, field, dt, opts) {
    if (!parts || !parts.length) return parts;
    const o = opts || {};
    const r = o.rand || Math.random;

    /* ---- SLOW MOTION, DECLARED ----------------------------------------

       Fluid crosses this valve in about four milliseconds. Played at
       life speed that is a quarter of one frame: every particle
       leaves the picture before it is drawn twice, the window never
       has anything in it, and the whole point of drawing the throat
       is lost. The first version with cavitation in it showed no
       vapour at all for exactly this reason -- not because nothing
       boiled, but because nothing stayed long enough to be seen
       boiling.

       So the clock is slowed, and said so. Nothing else is touched:
       the velocities are the field's, the ratios between them are
       the valve's, and every number printed anywhere is the real
       one. Only the rate at which the picture is played back
       changes, which is what slow motion is. */
    const scale = o.timeScale === undefined ? 1 : o.timeScale;
    if (!(scale > 0)) return parts;
    const step = dt * scale;

    /* SUBSTEPPED, because one Euler step across a valve is wrong
       twice over. A particle moving a hundred inches per frame does
       not pass through the window, it jumps over it -- picking up
       the velocity on the far side of a contraction it never
       entered -- and it leaves a dotted line where a path should
       be. Capped at half a cell per substep, the integration
       follows the field instead of sampling it. */
    const cell = field.cellIn || 0.34;
    let vMax = 0;
    for (const p of parts) {
      const m = Math.hypot(p.vx || 0, p.vy || 0);
      if (m > vMax) vMax = m;
    }
    const n = Math.max(1, Math.min(o.maxSubsteps === undefined ? 24
                                   : o.maxSubsteps,
                                   Math.ceil(vMax * step / (cell * 0.5))));
    const h = step / n;

    /* A SHIMMER, NOT A DRIFT. Still fluid drawn perfectly frozen
       reads as a dead pixel rather than as liquid; a hair of
       movement reads as water standing. A hundredth of an inch, and
       a drawing choice, named so nobody mistakes it for physics. */
    const shimmer = o.shimmer === undefined ? 0.012 : o.shimmer;

    for (let k = 0; k < n; k++)
      for (const p of parts) {
        const v = field.at(p.x, p.y);
        if (v) {
          p.vx = v.vx; p.vy = v.vy;
          p.x += v.vx * h;
          p.y += v.vy * h;
        } else { p.vx = 0; p.vy = 0; }
      }

    for (const p of parts) {
      p.x += (r() * 2 - 1) * shimmer;
      p.y += (r() * 2 - 1) * shimmer;
      p.age += step;
      if (p.age > p.life || !field.inside(p.x, p.y)) {
        const q = parts.reseed();
        if (q) { p.x = q.x; p.y = q.y; p.age = 0; }
        else p.age = 0;
      }
    }
    return parts;
  }

  /* Draw the cavity, then the fluid in it. */
  function drawValveFlow(g, pl, field, parts, opts) {
    const o = opts || {};
    const t = theme(o.theme);
    const vv = pl.valve;
    const wet = o.wetted;
    if (!wet || !Array.isArray(wet.rings))
      throw new Error('procutaway.drawValveFlow: {wetted} is ' +
        'geometry.globeValve().wettedAt(travel) -- the shape of the ' +
        'water. The skin used to assemble its own version out of the ' +
        'pieces it needed for a clip, which meant the drawing and the ' +
        'solver each had their own idea of where the fluid was.');

    const area2 = ring => {
      let acc = 0;
      for (let i = 0; i < ring.length; i++) {
        const q = ring[i], w = ring[(i + 1) % ring.length];
        acc += q[0] * w[1] - w[0] * q[1];
      }
      return acc / 2;
    };
    const addRing = ring => {
      if (!ring || ring.length < 3) return;
      /* Wound the same way, every one. Canvas unions subpaths by
         nonzero winding, so two overlapping rings traced in opposite
         directions cancel and punch a hole in the water. */
      const seq = area2(ring) < 0 ? ring.slice().reverse() : ring;
      seq.forEach(function (q, i) {
        const z = pl.toPage(q[0], q[1]);
        i ? g.lineTo(z[0], z[1]) : g.moveTo(z[0], z[1]);
      });
      g.closePath();
    };

    /* ---- the water, one flat colour -----------------------------------
       SOLID, NOT TRANSLUCENT. A see-through fill reports whatever was
       drawn underneath it, so the two chambers came out two different
       tones and anywhere two pieces of cavity overlapped came out
       twice as dark -- a slab across the bottom of the outlet chamber
       that the casting does not have. Mixed up front and laid down
       opaque, a region is exactly one colour however its pieces
       overlap. The SPEED is carried by the particles, which is where
       a reader can actually read it. */
    g.save();
    g.beginPath();
    wet.rings.forEach(addRing);
    g.clip();
    g.fillStyle = water(t);
    g.fillRect(-1e5, -1e5, 2e5, 2e5);
    g.restore();

    /* ---- THE WINDOWS, AS CAGE YOU CAN SEE THROUGH ---------------------

       A wash of the cage over the water, across the WHOLE of each
       window and the same at every travel. Two things it has to say
       at once: there is cage all round this opening, and the fluid
       is in it rather than past it.

       Washing only the covered part -- which is what this did first
       -- put a moving line across the window, and a window with a
       boundary that slides with the plug reads as a window that
       slides with the plug. Nothing about a cage window moves. The
       plug moves behind it, and what that changes is how much gets
       through, which the particles already show.

       Taken from the cage's own windows rather than from the wetted
       set, because this is a fact about the CAGE and it is true
       whether there is any water in the valve or not. */
    const wins = (pl.valve && pl.valve.cage && pl.valve.cage.windows) || [];
    if (wins.length) {
      g.save();
      g.beginPath();
      wins.forEach(addRing);
      g.clip();
      g.globalAlpha = 0.30;
      g.fillStyle = t.trim;
      let bx0 = Infinity, bx1 = -Infinity, by0 = Infinity, by1 = -Infinity;
      for (const r of wins) for (const q of r) {
        const z = pl.toPage(q[0], q[1]);
        if (z[0] < bx0) bx0 = z[0]; if (z[0] > bx1) bx1 = z[0];
        if (z[1] < by0) by0 = z[1]; if (z[1] > by1) by1 = z[1];
      }
      g.fillRect(bx0 - 2, by0 - 2, (bx1 - bx0) + 4, (by1 - by0) + 4);
      g.globalAlpha = 1;
      g.restore();
    }

    g.save();
    g.beginPath();
    wet.rings.forEach(addRing);
    g.clip();

    /* ---- the fluid itself ---- */
    let vRef = o.reference;
    if (!(vRef > 0)) vRef = field && field.maxSpeedIps > 0
      ? field.maxSpeedIps * 0.45 : 1;
    const boiling = o.pressure && o.pressure.boilingAt
      ? o.pressure.boilingAt : null;
    const vap = t.vapour || VAPOUR;

    /* ---- THE ZONE THAT HAS BOILED ------------------------------------

       Marked as a region, not left to the particles to reveal.

       Where the fluid boils is about one percent of the cavity --
       the vena contracta and an inch downstream of it -- and the
       fluid is through that inch in less than a frame. So at any
       instant there is almost never a particle inside it, and a
       cavitating valve drawn by particles alone looks exactly like
       one that is not. The sparseness is honest and it is useless:
       it is the same reason the throat itself had to be painted
       rather than populated.

       The zone comes off the same pressure the verdict does, cell
       by cell, so what is shaded is precisely what has dropped
       below the vapour pressure of this fluid. */
    if (boiling && o.pressure && (o.pressure.cavitating ||
                                  o.pressure.flashing) && field.width) {
      const cw = field.cellIn, ox = field.originIn[0], oy = field.originIn[1];
      g.fillStyle = vap;
      g.globalAlpha = 0.30;
      for (let j = 0; j < field.height; j++)
        for (let i = 0; i < field.width; i++) {
          const x = ox + (i + 0.5) * cw, y = oy + (j + 0.5) * cw;
          if (!field.inside(x, y) || !boiling(x, y)) continue;
          /* DISCS, NOT CELLS. Square-filled the zone is legible at
             panel scale and plainly a raster in a close-up -- at
             two hundred pixels to the inch each cell is a visible
             tile, and a reader learns the shape of the grid rather
             than the shape of the cavitation. Overlapping discs a
             little wider than the cell blend into one region at
             every magnification. */
          const z = pl.toPage(x, y);
          g.beginPath();
          g.arc(z[0], z[1], pl.scale * cw * 0.78, 0, Math.PI * 2);
          g.fill();
        }
      g.globalAlpha = 1;
    }
    const thin = parcelThinning(pl.scale);
    let nth = 0;
    for (const p of parts || []) {
      if (nth++ % thin) continue;
      const sp = Math.hypot(p.vx || 0, p.vy || 0);
      const hot = Math.max(0, Math.min(1, sp / vRef));
      const z = pl.toPage(p.x, p.y);
      /* BOILED, OR STILL LIQUID. Asked of the pressure, not of the
         speed: fast fluid is not the same thing as vapour, and the
         place it boils is set by how far the pressure has fallen
         against the vapour pressure of THIS fluid. */
      if (boiling && boiling(p.x, p.y)) {
        g.strokeStyle = vap;
        g.globalAlpha = 0.85;
        g.lineWidth = 1;
        g.beginPath();
        g.arc(z[0], z[1], parcelRadius(pl.scale, hot) * 1.4, 0,
              Math.PI * 2);
        g.stroke();
        continue;
      }
      g.fillStyle = mix(t.fluid, t.fluidFast, hot);
      g.globalAlpha = 0.40 + 0.55 * hot;
      const rad = parcelRadius(pl.scale, hot);
      g.beginPath();
      g.arc(z[0], z[1], rad, 0, Math.PI * 2);
      g.fill();
    }
    g.globalAlpha = 1;
    g.restore();

    /* Where the fastest fluid is -- the FIELD's answer, not the
       fastest particle. The throat is small and the fluid is through
       it in a hundredth of the time it spends anywhere else, so at
       any instant there is usually no particle in it at all; reading
       the peak off the particles put the label out in the outlet
       chamber, pointing at nothing. */
    const mA = field && field.maxAt ? field.maxAt : null;
    const pg = mA ? pl.toPage(mA[0], mA[1]) : null;
    return {
      fastestIps: field ? field.maxSpeedIps : 0,
      fastestAt: pg ? { x: pg[0], y: pg[1], centreX: pl.toPage(0, 0)[0] }
                    : null,
      shut: !!(field && field.shut),
    };
  }

  /* ---- the balanced plug, flooded -------------------------------------

     A balanced plug is balanced because it is DRILLED. The holes put
     the space above the plug in communication with the space below
     it, so the same pressure stands on both faces and the net push on
     the stem is small -- which is the whole reason the valve can be
     this size and still be driven by that actuator.

     The picture was drawing the holes as empty slots, which says the
     opposite: an empty hole balances nothing. They are flooded, and
     so is the cavity above the plug head, and seeing fluid continuous
     from under the plug, up through the drillings, to the top of it
     is the only way the word "balanced" means anything here.

     WHAT IT IS NOT: a flow path. There is no steady throughflow -- the
     two ends sit at the same pressure, which is the point, and fluid
     only moves through the drillings while the plug is travelling and
     displacing volume. So this is drawn as standing fluid, with no
     markers running through it, because markers would claim a current
     that is not there.

     Drawn AFTER the plug, because the plug is drawn over everything
     that came before it, holes and all. */
  function drawBalance(g, pl, travelPct, opts) {
    if (!pl || !pl.valve)
      throw new Error('procutaway.drawBalance: expected the result of ' +
        'planValve.');
    const o = opts || {};
    const t = theme(o.theme);
    const gv = pl.valve;
    const plug = gv.plugAt(travelPct);
    if (!plug.balanceHoles.length) return null;   /* unbalanced: nothing */

    /* ONLY THE DRILLINGS HERE. The cavity over the plug head is
       flooded too, but it is filled with the rest of the fluid, back
       before the plug is drawn -- because the STEM passes up through
       it, and anything painted after the plug paints over the stem.
       Each piece goes down at the point in the order where the right
       things cover it. */
    g.save();
    /* CLEARED TO CAVITY FIRST. A translucent fluid over the plug's own
       mid-grey comes out grey, and the drillings read as a smudge
       rather than as holes. They are holes: punch them out to the
       cavity colour, then put the fluid in them, and they carry the
       same value as the fluid anywhere else in the valve. */
    /* The same solid colour the body is filled with, for the same
       reason: a translucent fill over the plug's grey reported the
       plug, not the water, and came out a different tone from the
       identical water six pixels below it. */
    g.fillStyle = mix(t.cavity, t.fluid, 0.34);
    for (const h of plug.balanceHoles) { ring(g, pl, h); g.fill(); }

    /* AND THE WATER GOES BACK IN. The drillings are drawn after the
       plug, because the plug is painted over everything before it --
       which painted out the fluid in them too, so the one feature
       that explains the word "balanced" came out as two empty slots.
       Standing water, not moving: equal pressure above and below is
       exactly what drives nothing. */
    if (o.parts && o.parts.length) {
      const boxes = plug.balanceHoles.map(h => {
        let a = Infinity, b2 = -Infinity, lo = Infinity, hi = -Infinity;
        for (const q of h) {
          if (q[0] < a) a = q[0]; if (q[0] > b2) b2 = q[0];
          if (q[1] < lo) lo = q[1]; if (q[1] > hi) hi = q[1];
        }
        return [a, b2, lo, hi];
      });
      g.fillStyle = t.fluid;
      g.globalAlpha = 0.6;
      const thin = parcelThinning(pl.scale);
      let nth = 0;
      for (const q of o.parts) {
        if (nth++ % thin) continue;
        let hit = false;
        for (const bx of boxes)
          if (q.x >= bx[0] && q.x <= bx[1] && q.y >= bx[2] && q.y <= bx[3]) {
            hit = true; break;
          }
        if (!hit) continue;
        const z = pl.toPage(q.x, q.y);
        g.beginPath();
        g.arc(z[0], z[1], parcelRadius(pl.scale, 0), 0, Math.PI * 2);
        g.fill();
      }
      g.globalAlpha = 1;
    }

    g.strokeStyle = t.hairline;
    g.lineWidth = 0.8;
    for (const h of plug.balanceHoles) { ring(g, pl, h); g.stroke(); }
    g.restore();
    return { holes: plug.balanceHoles.length };
  }

  /* ---- the packing ---------------------------------------------------

     The one part of a control valve standing between the process and
     the room, and this skin did not draw it at all. The box read as
     solid bonnet -- a stem passing through metal, which is the
     opposite of what is happening there.

     Drawn as nine separate parts rather than one brown block,
     because the stack IS the lesson. A reader should be able to see
     that only two of the nine actually seal, that there is a spring
     underneath keeping load on them, and that the follower on top is
     what the flange nuts push against. Figure 3 of D100390X012 names
     every one of them.

     The two sealing rings are drawn at full strength and the rest a
     little back. That is the answer to "which of these is doing the
     work", given without a label. */
  function drawPacking(g, pl, opts) {
    const o = opts || {};
    const t = theme(o.theme);
    const gv = pl.valve;
    if (!gv.packingAt) return null;
    const pk = gv.packingAt(o.style ? { style: o.style } : undefined);
    if (!pk) return null;

    const pc = t.packing || PACKING;
    const rim = t.packingRim || PACKING_RIM;
    g.save();
    g.lineJoin = 'round';
    for (const item of pk.items) {
      for (const side of [item.left, item.right]) {
        ring(g, pl, side);
        g.fillStyle = pc;
        g.globalAlpha = item.seals ? 1 : 0.72;
        g.fill();
        g.globalAlpha = 1;
        g.strokeStyle = rim;
        g.lineWidth = item.spring ? 1.4 : 0.9;
        g.stroke();
      }
    }
    g.restore();
    return { items: pk.items.length, sealing: pk.sealingParts.length,
             box: pk.box, stack: pk };
  }

  /* ---- WHERE THIS DRAWING CAME FROM ----------------------------------

     The lines that say which of the shape was measured and which is
     convention. They are a function rather than three strings inside
     the paint, because they CAN BE MOVED and must not be droppable:
     laid along the bottom of the picture they are readable over a
     casting and illegible over the fluid, which is exactly where
     they land in a close-up. A caller that passes `provenance:false`
     to take them out of the drawing can ask for them here and put
     them somewhere a reader can actually read them.

     `extra` is for whatever ELSE is in the picture. These three lines
     are the valve body's provenance and the whole of it, so the
     moment an actuator is drawn standing on it the block is quietly
     claiming to cover a part it has never heard of. The caller knows
     what it added. */
  function provenance(gv, scale, extra) {
    const out = [
      'face-to-face ' + gv.faceToFace + ' in, port ' + gv.port +
        ' in, travel ' + gv.travel + ' in, line bore ' + gv.lineBore +
        ' in -- all sourced; scale 1 in = ' + scale.toFixed(1) + ' px',
      'the window PROFILE is the derivative of the published Cv curve ' +
        'and runs round the circumference, so a longitudinal section ' +
        'shows its height and the wall thickness and none of its shape',
      'casting, chambers, cage, plug and seat MEASURED off Figure 11-5 ' +
        'of the Oil & Gas sourcebook (W6022-2), ' +
        'the Oil & Gas sourcebook Figure 11-5; window placement, balance ' +
        'holes and seal thickness remain conventions, named in the shape',
    ];
    for (const n of (extra || [])) out.push(String(n));
    return out;
  }

  /* ---- THE COLOUR OF STANDING WATER ---------------------------------

     One function, because two places need the same answer and when
     they disagreed the valve grew a black slab. The fluid pass fills
     every wetted region with this; the plug's drillings are cut back
     out AFTER the plug is drawn, and they are wetted too, so they
     have to be cut in water rather than in cavity. */
  function water(t) { return mix(t.cavity, t.fluid, 0.30); }

  /* ---- HOW BIG A PARCEL OF FLUID IS DRAWN ----------------------------

     In INCHES, not in pixels. A particle here is a parcel of the
     fluid, and a parcel has a size the way everything else in this
     core has a size -- so it grows when the view moves in and shrinks
     when it moves out, and the water keeps the same look at every
     magnification.

     Drawn in pixels instead, it does both of the things that were
     complained about: zoom in and the fluid thins out into sparse
     dots over a huge field, zoom out and it packs into speckle. The
     fix that suggests itself -- more particles when close, fewer when
     far -- is the wrong one twice over: it reseeds the water every
     time the view changes, and at the throat it wanted fifty thousand
     of them.

     PARCEL and PARCEL_FAST are art: no document says how big to draw
     a notional parcel of water. They are the sizes that read as
     liquid in the section view, carried to the other views by scale
     rather than re-chosen there. The floor is not art -- it is the
     smallest dot a screen can show. */
  const PARCEL = 0.0174;          /* in, still fluid               */
  const PARCEL_FAST = 0.0188;     /* in, added at the reference speed */
  const PARCEL_FLOOR = 0.9;       /* px, below which a dot vanishes */

  function parcelRadius(scale, hot) {
    return Math.max(PARCEL_FLOOR, scale * (PARCEL + PARCEL_FAST * hot));
  }

  /* AND WHAT HAPPENS WHEN A PARCEL WOULD BE SMALLER THAN A PIXEL.

     It cannot be, so it is drawn at the floor instead -- which means
     that from there outward the water stops thinning as the view
     pulls back, and the whole body of it packs into the bright
     speckle that got the first attempt rejected. Below the floor the
     only thing left to reduce is HOW MANY, so that is what gives:
     one parcel in `n`, where n is exactly the area the floor is
     holding open. Coverage then stays put in both directions.

     The thinning is a stride over a stable array, not a random
     sample, so the same parcels are drawn every frame and the fluid
     does not shimmer. */
  function parcelThinning(scale) {
    const want = scale * PARCEL;
    if (!(want > 0) || want >= PARCEL_FLOOR) return 1;
    const r = PARCEL_FLOOR / want;
    return Math.max(1, Math.round(r * r));
  }

  /* ---- the actuator, mounted ------------------------------------------

     Drawn in the VALVE's frame. The actuator's own origin is the
     bottom of its yoke and the valve's mount point is the top of its
     bonnet, so putting one on the other is a translation and nothing
     else -- which is the whole reason both layers were given an
     origin somebody chose on purpose.

     Order matters and it is the order of assembly: yoke first because
     everything stands on it, then the spring inside it, then the
     casings, then the plate and the stem last because they move and
     must be on top of what they move through. */
  function drawActuator(g, pl, act, opts) {
    if (!act || act.kind !== 'diaphragmActuator')
      throw new Error('procutaway.drawActuator: expected ' +
        'actuator.diaphragm().');
    const o = opts || {};
    const t = theme(o.theme);
    const at = o.at;
    if (!at || typeof at.x !== 'number' || typeof at.y !== 'number')
      throw new Error('procutaway.drawActuator: {at} is where the ' +
        'yoke lands, in valve inches -- geometry.mountPoint(). This ' +
        'skin will not guess where an actuator sits.');

    const put = r => r.map(q => [q[0] + at.x, q[1] + at.y]);
    /* EVEN-ODD, BECAUSE THESE PARTS HAVE HOLES. The yoke is an outer
       profile and the spring-housing cavity inside it; the upper
       casing carries its two travel-stop bosses as their own rings.
       Filled nonzero -- or, worse, by drawing only the first ring --
       the cavity fills with metal and the spring ends up embedded in
       a solid lump. */
    const solid = (rings, fill, rim, w) => {
      if (!rings || !rings.length) return;
      const rs = Array.isArray(rings[0][0]) ? rings : [rings];
      g.beginPath();
      for (const r of rs) {
        if (!r || r.length < 3) continue;
        put(r).forEach(function (q, i) {
          const z = pl.toPage(q[0], q[1]);
          i ? g.lineTo(z[0], z[1]) : g.moveTo(z[0], z[1]);
        });
        g.closePath();
      }
      g.fillStyle = fill; g.fill('evenodd');
      g.strokeStyle = rim; g.lineWidth = w === undefined ? 1 : w;
      g.stroke();
    };

    const C = o.palette === null ? null : (o.palette || ACT_DARK);
    const col = (k, fallback) => (C && C[k]) || fallback;

    g.save();
    g.lineJoin = 'round';
    solid(act.yoke, col('yoke', t.metal), col('line', t.rim));
    /* The spring is a line, not a shape. */
    if (act.spring && act.spring.length > 1) {
      const pts = put(act.spring);
      g.beginPath();
      pts.forEach(function (q, i) {
        const z = pl.toPage(q[0], q[1]);
        i ? g.lineTo(z[0], z[1]) : g.moveTo(z[0], z[1]);
      });
      g.strokeStyle = col('coil', t.trimRim);
      g.lineWidth = Math.max(1.4, 2.2 * (pl.scale / 14));
      g.stroke();
    }
    solid(act.adjustor, col('adj', t.trim), col('hwLine', t.trimRim));
    solid(act.springSeat, col('seat', t.trim), col('hwLine', t.trimRim));
    solid(act.lowerCasing, col('lower', t.metal), col('line', t.rim));
    solid(act.plate, col('plate', t.trim), col('line', t.trimRim));

    /* ---- THE DIAPHRAGM, between the plate and the upper casing -----
       Drawn here and not earlier because that is where it is: clamped
       at its rim between the two casings, lying on the plate, with
       the upper casing over it. A stroked line and not a filled
       shape, because it is a sheet -- its thickness is its own
       measured band. */
    if (act.sheet && act.sheet.points.length > 1) {
      const pts = act.sheet.points;
      g.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const z = pl.toPage(pts[i][0] + at.x, pts[i][1] + at.y);
        i ? g.lineTo(z[0], z[1]) : g.moveTo(z[0], z[1]);
      }
      g.strokeStyle = col('dia', t.trim);
      g.lineWidth = Math.max(1.2, act.sheet.band * pl.scale);
      g.lineCap = 'round';
      g.stroke();
      g.lineCap = 'butt';
    }

    solid(act.upperCasing, col('upper', t.metal), col('line', t.rim));
    solid(act.stem, col('stem', t.trim), col('hwLine', t.trimRim));

    /* ---- WHAT MAKES IT ONE MACHINE ---------------------------------
       The stem connector, clamped round both stems, and the travel
       indicator locked to the valve stem under it. Drawn last because
       they are bolted on over everything else. */
    for (const r of (act.connector || []))
      solid([r], col('nut', t.trim), col('hwLine', t.trimRim), 1.2);
    for (const r of (act.indicator || []))
      solid([r], col('nut', t.trim), col('hwLine', t.trimRim), 1);
    g.restore();

    return { size: act.size, travelPct: act.travelPct, lift: act.lift,
             built: act.built };
  }

  /* ---- marking the throat --------------------------------------------

     Separate from drawValveFlow, and called later, because of the
     draw order: the fluid goes down before the cage and the plug, so
     anything the fluid pass draws on the trim is painted over. A mark
     for the most important feature in the panel that is reliably
     invisible is worse than no mark.

     The caller decides WHEN -- after the metal -- and this decides
     what it looks like, which is the right split: a lab file naming a
     hex colour is chrome leaking down a layer, and the layer guard
     says so. */
  function markThroat(g, result, opts) {
    if (!result || !result.fastestAt)
      throw new Error('procutaway.markThroat: expected the result of ' +
        'drawValveFlow, which carries fastestAt.');
    const o = opts || {};
    const t = theme(o.theme);
    const a = result.fastestAt;
    const r = o.radius === undefined ? 9 : o.radius;
    const reach = r * 3.2;

    /* THE LABEL STAYS ON THE PANEL, and points OUTWARD.

       The fastest fluid is against the cage, near the middle of the
       drawing, so a leader that always went left ran over the trim
       on a flow-up valve and off the page on a flow-down one. It
       points away from the centreline; the full figures live in the
       readout under the panel, where there is room for them. */
    g.save();
    g.font = '11px ' + t.face;
    const text = (result.fastestIps / 12).toFixed(0) + ' ft/s';
    const w = g.measureText(text).width;
    const outward = a.centreX === undefined ? -1
                  : (a.x >= a.centreX ? 1 : -1);
    const left = outward < 0 && a.x - reach - w - 6 > 6;
    const ex = left ? a.x - reach : a.x + reach;
    const ey = a.y - reach * 1.8;

    g.strokeStyle = t.fluidFast;
    g.lineWidth = 1.2;
    g.beginPath();
    g.arc(a.x, a.y, r, 0, Math.PI * 2);
    g.stroke();
    g.beginPath();
    g.moveTo(ex, ey);
    g.lineTo(a.x + (left ? -1 : 1) * r * 0.75, a.y - r * 0.75);
    g.stroke();

    g.fillStyle = t.label;
    g.textAlign = left ? 'right' : 'left';
    g.fillText(text, ex + (left ? -3 : 3), ey - 1);
    g.restore();
  }

  LPE.skins = LPE.skins || {};
  LPE.skins.procutaway = {
    INK, HAIRLINE, PANEL, GROUND, METAL, METAL_RIM, CAVITY,
    FLUID, FLUID_FAST, ENVELOPE, LABEL, FACE, ROLES,
    DARK: DARK,
    theme: theme, plan: plan, markers: markers, step: step, draw: draw,
    planValve: planValve, planValveDetail: planValveDetail,
    drawValve: drawValve,
    drawValveFlow: drawValveFlow,
    fluidParticles: fluidParticles, stepFluid: stepFluid,
    markThroat: markThroat, drawBalance: drawBalance,
    parcelRadius: parcelRadius, parcelThinning: parcelThinning,
    water: water,
    provenance: provenance,
    drawActuator: drawActuator, ACT_DARK: ACT_DARK,
    drawPacking: drawPacking,
  };

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
