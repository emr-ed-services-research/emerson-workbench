/* @layer flow-field
   @core Process Core -- what the fluid is doing INSIDE the bore.
   May use: geometry (the flow path and its bore), sizing (Reynolds).
   Never: a netlist, a frame, a pixel, a colour, a consumer's runtime.  */
/* ---------------- THE FLOW FIELD -------------------------------------

   WHAT THIS ANSWERS. The dynamics layer says how much flows through a
   component -- one number for the whole thing. That is enough to drive a
   process display and not nearly enough to draw the inside of a pipe,
   because the inside of a pipe is not one number: the fluid drags on the
   wall, so the middle runs fast and the film against the bore is nearly
   stationary, and that difference is the entire reason a cutaway view
   exists.

   So: velocity at a station ALONG the path and at a position ACROSS the
   bore. Two inputs, one answer.

   WHY IT IS ITS OWN LAYER. Lunar Process Engineer has this physics and
   keeps it in `engine.js` beside particle sizes, jitter amplitudes and
   marker opacity. That mixture is why it cannot be tested: there is no
   seam between "the 1/7-power law says the centreline runs 1.22x the
   mean", which is checkable against a published correlation, and "a
   lighter fluid draws smaller and fainter", which is taste. Here the
   first is this file and the second is chrome, and the boundary is that
   this file names no colour and draws nothing.

   WHAT IS SOURCED.

     ALONG the path -- continuity. V = Q / A, with A from the geometry
     layer's own bore at that station. No correlation, just conservation:
     the same fluid through a smaller hole goes faster.

     ACROSS the bore -- two classical profiles, blended.

       turbulent   Prandtl's 1/7-power law. u/u_max = (1 - r/R)^(1/7),
                   whose area-weighted mean is 49/60 of the peak, so
                   dividing by 49/60 gives a profile whose mean IS the
                   mean velocity. Centreline runs 60/49 = 1.2245x.
       laminar     Hagen-Poiseuille. u/u_mean = 2(1 - (r/R)^2), a
                   parabola whose centreline is exactly twice the mean.

     Both integrate to exactly the mean, which is not decoration -- it is
     the property that makes the profile a redistribution of the flow
     rather than an invention of extra fluid, and it is tested.

   WHY IT BLENDS RATHER THAN SNAPS. Laminar below Re 2300, turbulent
   above 4000, and between them is the transition region where the flow
   is genuinely part one and part the other. Switching profiles the
   instant Reynolds crosses a number would make a slowly-opening valve
   jump between a parabola and a blunt 1/7-power with nothing in
   between -- which is wrong as physics and unreadable as a picture. A
   linear blend of two mean-preserving profiles is still mean-preserving,
   so the honest plot and the readable one are the same plot.

   WHAT THIS LAYER WILL NOT DO.

     It will not exaggerate. Every velocity here is in feet per second
     and true. A cutaway running at a believable rate shows the eye
     nothing, so something must be magnified -- but magnification is a
     TRANSFORM APPLIED TO A TRUE QUANTITY, and `magnified()` below makes
     you name it and say why. An exaggeration nobody declared is just a
     wrong number.

     It will not clamp the wall. LPE stops its profile at 0.98 of the
     radius so wall-hugging markers creep instead of freezing. That is a
     good rendering decision and it is a rendering decision: it breaks
     the mean-preservation this file is tested on. Chrome may clamp.    */
(function (LPE) {
  'use strict';

  /* Re below this is laminar, above the other is turbulent, and between
     them the flow is both. Standard pipe-flow values. */
  const RE_LAMINAR = 2300;
  const RE_TURBULENT = 4000;

  /* Prandtl's exponent and the mean-to-peak ratio it implies. For the
     1/n-power law the area-weighted mean is 2n^2/((n+1)(2n+1)) of the
     peak; at n = 7 that is 98/120 = 49/60. Written as the expression so
     the constant cannot drift away from the exponent it came from. */
  const N = 7;
  const MEAN_OVER_PEAK = (2 * N * N) / ((N + 1) * (2 * N + 1));

  const GPM_TO_CFS = 1 / 448.831;

  /* ---- across the bore ---------------------------------------------
     `lane` is position across the bore, -1 at one wall through 0 at the
     centreline to +1 at the other. Returns velocity as a MULTIPLE of the
     mean, so it is dimensionless and the caller supplies the scale. */

  function laminar(lane) {
    const r = Math.min(1, Math.abs(lane));
    return 2 * (1 - r * r);
  }

  function turbulent(lane) {
    const r = Math.min(1, Math.abs(lane));
    return Math.pow(1 - r, 1 / N) / MEAN_OVER_PEAK;
  }

  /* How turbulent the flow is, 0 to 1, from Reynolds. */
  function turbulence(Re) {
    if (typeof Re !== 'number' || !isFinite(Re) || Re < 0)
      throw new Error('flowfield.turbulence: Reynolds must be a ' +
        'non-negative number; got ' + JSON.stringify(Re) + '. There is no ' +
        'default -- which profile the fluid has is a fact about the flow, ' +
        'not a preference.');
    if (Re <= RE_LAMINAR) return 0;
    if (Re >= RE_TURBULENT) return 1;
    return (Re - RE_LAMINAR) / (RE_TURBULENT - RE_LAMINAR);
  }

  function profile(lane, turb) {
    if (typeof lane !== 'number' || !isFinite(lane))
      throw new Error('flowfield.profile: lane must be a number from -1 ' +
        '(wall) through 0 (centreline) to +1 (wall).');
    if (typeof turb !== 'number' || turb < 0 || turb > 1)
      throw new Error('flowfield.profile: turbulence must be 0 to 1 -- use ' +
        'flowfield.turbulence(Re) rather than picking one.');
    return laminar(lane) * (1 - turb) + turbulent(lane) * turb;
  }

  /* The centreline multiple, which is the number a reader checks a plot
     against: 2 laminar, 1.2245 turbulent. */
  function peak(turb) { return profile(0, turb); }

  /* The area-weighted mean of the profile, which must come back as 1.
     Exposed rather than hidden in a test, because a caller who changes
     the exponent should be able to ask. */
  function meanOf(turb, steps) {
    const n = steps || 2000;
    let acc = 0;
    for (let i = 0; i < n; i++) {
      const x = (i + 0.5) / n;                 /* r/R at the strip centre */
      acc += profile(x, turb) * x * (1 / n);
    }
    return 2 * acc;
  }

  /* ---- along the path ------------------------------------------------
     Continuity, and nothing else. The geometry layer already knows the
     bore at every station; this turns a volumetric flow into a speed. */

  function areaOf(boreIn) { return Math.PI / 4 * Math.pow(boreIn / 12, 2); }

  function along(fp, gpm, opts) {
    if (!LPE.geometry)
      throw new Error('flowfield.along: the geometry layer is not loaded, ' +
        'and the bore at each station comes from it. Load src/geometry.js.');
    if (!fp || !fp.reaches || typeof fp.length !== 'number')
      throw new Error('flowfield.along: expected a geometry flow path ' +
        '(geometry.flowPath), which carries the reaches and their bores.');
    if (typeof gpm !== 'number' || !isFinite(gpm) || gpm < 0)
      throw new Error('flowfield.along: flow must be a non-negative number ' +
        'of gpm; got ' + JSON.stringify(gpm) + '.');

    const o = opts || {};
    const spacing = o.spacing || Math.max(fp.length / 200, 1e-4);
    if (!(spacing > 0))
      throw new Error('flowfield.along: spacing must be positive inches.');
    /* Kinematic viscosity, ft^2/s. No default: water at one temperature
       is a choice about the fluid, and this layer does not make it. */
    const nu = o.nu;
    if (nu !== undefined && !(nu > 0))
      throw new Error('flowfield.along: nu must be a positive kinematic ' +
        'viscosity in ft^2/s if given.');

    const out = [];
    for (let s = 0; s <= fp.length + 1e-9; s += spacing) {
      const at = Math.min(s, fp.length);
      const bore = LPE.geometry.boreAtS(fp, at);
      if (bore === null || !(bore > 0)) {
        /* The geometry layer reports null where no reach covers the
           station. That is a real answer -- a junction has no single
           bore -- so it is passed on rather than filled in. */
        out.push({ s: at, bore: null, area: null, v: null, Re: null });
        continue;
      }
      const area = areaOf(bore);
      const v = gpm * GPM_TO_CFS / area;
      out.push({
        s: at, bore: bore, area: area, v: v,
        Re: nu === undefined ? null : LPE.sizing
          ? LPE.sizing.reynolds(v, bore, nu) : null,
      });
    }
    return out;
  }

  /* ---- the field -----------------------------------------------------
     One object that answers "how fast is the fluid at this station, this
     far across the bore", plus the stations it was built from so a
     caller can draw the envelope from the same numbers that move the
     particles. If those two ever disagree the picture is lying, and the
     only way to be sure is to let one produce the other. */

  function field(fp, gpm, opts) {
    const o = opts || {};
    const stations = along(fp, gpm, o);

    /* Reynolds decides the profile, and it varies along the path because
       the bore does. A single value for the whole part would be a
       simplification; it is allowed, but it has to be asked for. */
    const fixedRe = o.reynolds;
    if (fixedRe !== undefined && !(fixedRe >= 0))
      throw new Error('flowfield.field: reynolds must be non-negative.');
    if (fixedRe === undefined && o.nu === undefined)
      throw new Error('flowfield.field: give either {nu} so Reynolds can ' +
        'be computed at each station from the real bore, or {reynolds} to ' +
        'state one value for the whole path. Neither means the profile ' +
        'shape would have to be guessed, and this layer does not guess.');

    const idx = s => {
      if (!stations.length) return null;
      const span = fp.length / Math.max(1, stations.length - 1);
      const i = Math.round(Math.max(0, Math.min(fp.length, s)) / span);
      return stations[Math.max(0, Math.min(stations.length - 1, i))];
    };

    function turbAt(st) {
      if (fixedRe !== undefined) return turbulence(fixedRe);
      return st && st.Re !== null ? turbulence(st.Re) : 0;
    }

    return Object.freeze({
      length: fp.length,
      stations: Object.freeze(stations),
      units: { v: 'ft/s', s: 'in', bore: 'in' },
      magnification: null,

      /* Velocity at a station, across the bore. */
      at: function (s, lane) {
        const st = idx(s);
        if (!st || st.v === null) return null;
        return st.v * profile(lane === undefined ? 0 : lane, turbAt(st));
      },
      mean: function (s) { const st = idx(s); return st ? st.v : null; },
      bore: function (s) { const st = idx(s); return st ? st.bore : null; },
      turbulence: function (s) { return turbAt(idx(s)); },
      peak: function (s) { return peak(turbAt(idx(s))); },
    });
  }

  /* ---- declared exaggeration -----------------------------------------
     A cutaway at true speed shows nothing, so the speed gets multiplied.
     That is legitimate and it is not free: the factor has to be named,
     and so does the reason, and the result says so about itself. A
     magnified field is still a field -- same shape, same relative
     speeds -- which is the whole distinction between exaggerating a true
     quantity and inventing one. */
  function magnified(f, factor, why) {
    if (!f || typeof f.at !== 'function')
      throw new Error('flowfield.magnified: expected a field.');
    if (typeof factor !== 'number' || !(factor > 0))
      throw new Error('flowfield.magnified: factor must be a positive ' +
        'number; got ' + JSON.stringify(factor) + '.');
    if (typeof why !== 'string' || !why.trim())
      throw new Error('flowfield.magnified: say WHY in a sentence. An ' +
        'exaggeration with a reason attached is a reading aid; one without ' +
        'is a wrong number, and nothing downstream can tell them apart.');

    return Object.freeze(Object.assign({}, f, {
      magnification: Object.freeze({ factor: factor, why: why.trim() }),
      at: (s, lane) => { const v = f.at(s, lane); return v === null ? null : v * factor; },
      mean: s => { const v = f.mean(s); return v === null ? null : v * factor; },
      trueField: f,
    }));
  }

  /* ---- a field over a path that states its own areas -----------------

     `field` above gets its area from a BORE, because a pipe is round
     and a bore is the honest way to say how big it is. A valve is not
     round anywhere that matters: the cage window is a slot, the chamber
     is a dished casting, and the one number that means anything at
     every one of those stations is the flow AREA.

     So this is the same field over the same physics, taking area
     directly. It exists rather than a bore being faked from an area,
     because faking one would quietly claim the cage window is a round
     hole, and the whole point of drawing the window is that it is not.

     Reynolds needs a length, and for a non-circular passage the usual
     one is the equivalent diameter, sqrt(4A/pi) -- the round pipe of
     the same area. Stated here rather than assumed, because it is an
     approximation and it is the only one in this function. */
  function fieldOfAreas(path, gpm, opts) {
    if (!path || !Array.isArray(path.stations) ||
        typeof path.length !== 'number')
      throw new Error('flowfield.fieldOfAreas: expected {length, stations}, ' +
        'each station carrying {s, area} in inches and square inches -- ' +
        'for example geometry.globeValve().flowPathAt(pct).');
    if (typeof gpm !== 'number' || !isFinite(gpm) || gpm < 0)
      throw new Error('flowfield.fieldOfAreas: flow must be a non-negative ' +
        'number of gpm; got ' + JSON.stringify(gpm) + '.');
    const st = path.stations;
    if (st.length < 2)
      throw new Error('flowfield.fieldOfAreas: a path needs at least two ' +
        'stations to have a field along it.');
    for (const q of st)
      if (!(q.area > 0) || typeof q.s !== 'number')
        throw new Error('flowfield.fieldOfAreas: every station needs a ' +
          'positive area in square inches and a station distance s.');

    const o = opts || {};
    const fixedRe = o.reynolds;
    if (fixedRe !== undefined && !(fixedRe >= 0))
      throw new Error('flowfield.fieldOfAreas: reynolds must be ' +
        'non-negative.');
    const nu = o.nu;
    if (nu !== undefined && !(nu > 0))
      throw new Error('flowfield.fieldOfAreas: nu must be a positive ' +
        'kinematic viscosity in ft^2/s if given.');
    if (fixedRe === undefined && nu === undefined)
      throw new Error('flowfield.fieldOfAreas: give either {nu} so Reynolds ' +
        'can be computed at each station, or {reynolds} to state one value ' +
        'for the whole path. Neither means the profile shape would have to ' +
        'be guessed, and this layer does not guess.');

    /* INTERPOLATED BETWEEN STATIONS, not snapped to the nearest.

       The stations are few and far apart -- nine of them across a whole
       valve -- and the area between two of them changes by a factor of
       twenty at the window. Snapping would step the velocity at the
       station and teleport a marker through the contraction, which is
       the same defect the pipe field had to substep its way out of. */
    const Q = gpm * GPM_TO_CFS;
    function areaAt(s) {
      const x = Math.max(0, Math.min(path.length, s));
      for (let i = 1; i < st.length; i++) {
        if (x <= st[i].s + 1e-12) {
          const span = st[i].s - st[i - 1].s;
          const t = span > 0 ? (x - st[i - 1].s) / span : 0;
          return st[i - 1].area + (st[i].area - st[i - 1].area) * t;
        }
      }
      return st[st.length - 1].area;
    }
    const vAt = s => Q / (areaAt(s) / 144);
    function turbAt(s) {
      if (fixedRe !== undefined) return turbulence(fixedRe);
      const a = areaAt(s);
      const dEq = Math.sqrt(4 * a / Math.PI);
      return LPE.sizing
        ? turbulence(LPE.sizing.reynolds(vAt(s), dEq, nu)) : 0;
    }

    return Object.freeze({
      length: path.length,
      stations: Object.freeze(st.map(q => Object.freeze(
        { s: q.s, area: q.area, v: Q / (q.area / 144),
          what: q.what === undefined ? null : q.what }))),
      units: { v: 'ft/s', s: 'in', area: 'in2' },
      magnification: null,
      at: function (s, lane) {
        return vAt(s) * profile(lane === undefined ? 0 : lane, turbAt(s));
      },
      mean: function (s) { return vAt(s); },
      area: function (s) { return areaAt(s); },
      turbulence: function (s) { return turbAt(s); },
      peak: function (s) { return peak(turbAt(s)); },
    });
  }

  /* ---- A TWO-DIMENSIONAL FIELD OVER THE CAVITY -----------------------

     Everything above answers "how fast is the fluid at this station,
     this far across the bore". That is a route, and a route can only
     ever speak about points on itself. Ask it what the fluid is doing
     in the corner of a chamber, in the drillings through a balanced
     plug, or in the cavity over the plug head, and it has no answer.
     Those places are full of liquid, and a model that cannot say so
     cannot draw them full.

     So this solves the whole cavity at once. Incompressible,
     irrotational, steady: velocity is the gradient of a potential and
     the potential satisfies Laplace's equation, with no flow through
     the walls and the real volumetric flow crossing the two flanges.
     Relaxed on a grid, it gives every square of fluid in the valve a
     velocity -- fast through the window because that is where the
     area is small, slow in the body, and essentially zero in a dead
     end, which is exactly what a dead end is.

     THE TWO-DIMENSIONAL APPROXIMATION, DECLARED.

     This is a cut through a three-dimensional casting, and the real
     flow does not live in the plane of the cut. Fluid reaches the
     trim through a ring of windows all the way round the cage, not
     through the two the section happens to slice; the chambers are
     dished solids of revolution, not the lens shapes a section shows.
     A plane solve cannot know any of that.

     What it CAN do is be right about the things the section does
     show: where fluid is, where it is nearly still, where it has to
     squeeze, and in what proportion the speed changes between those
     places. The through-flow is pinned to the real volumetric flow at
     the flanges, so the overall scale is the valve's and not the
     drawing's. Treat the picture as a faithful map of the flow in
     this plane and an illustration of the flow in the valve. That
     distinction is the whole reason this comment exists.

     AND IT IS IRROTATIONAL, WHICH MEANS NO EDDIES. Potential flow has
     no separation and no wake by construction -- curl is zero
     everywhere, so a recirculating pocket cannot appear no matter how
     fine the grid. What the solve DOES give, honestly, is near-zero
     velocity where a real valve would have a slow eddy. Anything that
     later draws a swirl in those pockets is a model laid on top of
     this one and has to say so. */
  function solveField2D(opts) {
    const o = opts || {};
    const rings = o.rings;
    if (!Array.isArray(rings) || !rings.length)
      throw new Error('flowfield.solveField2D: {rings} is the wetted ' +
        'cavity as polygons -- geometry.globeValve().wettedAt(travel). ' +
        'Without a domain there is nothing to solve on.');
    const openings = o.openings;
    if (!Array.isArray(openings) || openings.length < 2)
      throw new Error('flowfield.solveField2D: {openings} must name where ' +
        'fluid crosses the boundary and which way. A cavity with no ' +
        'openings has no flow and Laplace has no unique answer in it.');
    const gpm = o.gpm;
    if (typeof gpm !== 'number' || !isFinite(gpm) || gpm < 0)
      throw new Error('flowfield.solveField2D: {gpm} must be a ' +
        'non-negative number of gallons per minute.');
    const stations = o.stations;
    if (!Array.isArray(stations) || stations.length < 2)
      throw new Error('flowfield.solveField2D: {stations} is the flow ' +
        'path -- geometry.globeValve().flowPathAt(travel).stations. It ' +
        'carries the real three-dimensional area at each place along the ' +
        'valve, and without it a plane solve has no way to know that a ' +
        'cage window is also narrow in the direction the section cannot ' +
        'see.');
    const cell = o.cellIn === undefined ? 0.34 : o.cellIn;
    if (!(cell > 0))
      throw new Error('flowfield.solveField2D: {cellIn} is the grid pitch ' +
        'in inches and must be positive.');

    /* ---- the domain, rasterised ---- */
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const r of rings)
      for (const q of r) {
        if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0];
        if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1];
      }
    x0 -= cell; x1 += cell; y0 -= cell; y1 += cell;
    const W = Math.max(4, Math.ceil((x1 - x0) / cell));
    const H = Math.max(4, Math.ceil((y1 - y0) / cell));
    const cx = i => x0 + (i + 0.5) * cell;
    const cy = j => y0 + (j + 0.5) * cell;

    const inRing = (ring, px, py) => {
      let hit = false;
      for (let a = 0, b = ring.length - 1; a < ring.length; b = a++) {
        const p1 = ring[a], p2 = ring[b];
        if ((p1[1] > py) !== (p2[1] > py) &&
            px < (p2[0] - p1[0]) * (py - p1[1]) / (p2[1] - p1[1]) + p1[0])
          hit = !hit;
      }
      return hit;
    };
    const fluid = new Uint8Array(W * H);
    for (let j = 0; j < H; j++)
      for (let i = 0; i < W; i++) {
        const px = cx(i), py = cy(j);
        for (const r of rings)
          if (inRing(r, px, py)) { fluid[j * W + i] = 1; break; }
      }

    /* STILL SPACES ARE FULL, AND OUT OF THE SOLVE.

       A caller can name spaces that hold fluid but carry no flow --
       a balanced plug's drillings and the cavity over its head. They
       are wetted, so anything drawing fluid should fill them, and
       they are not part of the flow problem, so the solve treats
       them as wall. Left in, the plane section's one-sided entry
       drives an invented cross-flow through them at thirteen feet a
       second; a real cage, fed from every angle at once, has nothing
       to drive it. The caller says WHICH spaces, and says why in its
       own words -- this layer only honours the distinction. */
    const still = new Uint8Array(W * H);
    const stillRings = o.stillRings || [];
    if (stillRings.length)
      for (let j = 0; j < H; j++)
        for (let i = 0; i < W; i++) {
          const px = cx(i), py = cy(j);
          for (const r of stillRings)
            if (inRing(r, px, py)) { still[j * W + i] = 1; break; }
        }

    /* ---- only the part connected to an opening ----
       A traced polygon can leave a sliver of fluid walled off from
       everything else. Solved, it is a second cavity with no inlet
       and Laplace has nothing to say in it; drawn, it is a pocket of
       water inside solid metal. Flood from the openings and keep what
       the fluid can actually reach. */
    const mark = new Uint8Array(W * H);
    const stack = [];
    const idxOf = (px, py) => {
      const i = Math.round((px - x0) / cell - 0.5);
      const j = Math.round((py - y0) / cell - 0.5);
      if (i < 0 || j < 0 || i >= W || j >= H) return -1;
      return j * W + i;
    };
    /* FLOOD FROM THE INLETS ONLY.

       Seeding from every opening at once marks both sides of a split
       cavity and then nothing notices it is split: the outlet is
       plainly reachable, from itself. Starting at the inlets and
       asking afterwards whether an outlet was reached is the same
       amount of code and actually answers the question. */
    for (const op of openings) {
      if (op.role !== 'inlet') continue;
      for (let t = -0.9; t <= 0.9; t += 0.1) {
        const k = idxOf(op.x + op.nx * cell * 1.5,
                        op.y + t * op.halfW);
        if (k >= 0 && fluid[k] && !still[k]) stack.push(k);
      }
    }
    while (stack.length) {
      const k = stack.pop();
      if (mark[k]) continue;
      mark[k] = 1;
      const i = k % W, j = (k - i) / W;
      const open = kk => fluid[kk] && !still[kk] && !mark[kk];
      if (i > 0 && open(k - 1)) stack.push(k - 1);
      if (i < W - 1 && open(k + 1)) stack.push(k + 1);
      if (j > 0 && open(k - W)) stack.push(k - W);
      if (j < H - 1 && open(k + W)) stack.push(k + W);
    }
    let cells = 0;
    for (let k = 0; k < mark.length; k++) if (mark[k]) cells++;
    if (!cells)
      throw new Error('flowfield.solveField2D: the openings do not touch ' +
        'the cavity -- nothing was reached from them. Either the rings ' +
        'and the openings describe different valves, or the grid is ' +
        'coarser than the bore.');

    /* CAN THE FLUID GET ACROSS?

       If the flood from the inlet never arrives at the outlet the
       cavity is in two pieces, and a Neumann problem with flow in and
       nowhere out is not merely hard, it is inconsistent -- the
       iteration runs away and returns a residual of ten to the
       eighteenth, which is what a shut valve looked like before this
       check existed. A shut valve is a real state and deserves a real
       answer: everything full, nothing moving. */
    let reachedOut = false;
    for (const op of openings) {
      if (op.role === 'inlet') continue;
      for (let t = -0.9; t <= 0.9; t += 0.1) {
        const k = idxOf(op.x + op.nx * cell * 1.5, op.y + t * op.halfW);
        if (k >= 0 && mark[k]) { reachedOut = true; break; }
      }
      if (reachedOut) break;
    }
    if (!reachedOut || !(gpm > 0)) {
      const zero = () => ({ vx: 0, vy: 0, still: true });
      return Object.freeze({
        kind: 'potential2d', shut: true,
        width: W, height: H, cellIn: cell, originIn: [x0, y0],
        cells: cells, residual: 0, sweeps: 0, gpm: gpm, maxSpeedIps: 0,
        units: { v: 'in/s', x: 'in' },
        at: (x, y) => (idxOf(x, y) >= 0 &&
                       (mark[idxOf(x, y)] || still[idxOf(x, y)]))
                      ? zero() : null,
        speedAt: (x, y) => (idxOf(x, y) >= 0 &&
                            (mark[idxOf(x, y)] || still[idxOf(x, y)]))
                           ? 0 : null,
        depthAt: () => null,
        inside: (x, y) => { const k = idxOf(x, y);
                            return k >= 0 && (!!mark[k] || !!still[k]); },
        isStill: () => true,
        fluxThroughX: () => 0,
        approximation:
          'SHUT. Either the valve is closed or no flow was asked for, so '
        + 'the cavity is full and still. That is a state, not a failure: '
        + 'the fluid does not leave when the valve shuts.',
      });
    }

    /* ---- HOW DEEP THE CAVITY IS, OUT OF THE PAGE ---------------------

       A plane solve gets the constriction badly wrong, and the first
       run showed how badly: the window came out barely twice the
       chamber speed where the valve runs nine times. A section sees
       only one of the two ways a cage window is small. In the plane
       it is a slot three inches tall against a chamber ten inches
       tall -- a factor of three. Out of the plane it is a few narrow
       openings spaced around the whole circumference of the cage,
       and that is the other factor of three, and the cut cannot see
       it at all.

       So the solve is DEPTH-AVERAGED rather than plane: conservation
       is div(d grad phi) = 0, with d the distance the cavity extends
       out of the page. A cell's cross-section is then its chord times
       its depth, and setting

           depth = (the real three-dimensional area here)
                 / (the chord the section draws here)

       makes every cross-section in the model equal to the area the
       catalogue and the measurements give. The window's area is the
       derivative of the published Cv curve, the port's is the
       published port diameter, the line's is the measured bore. The
       velocity ratios come back out of the solve as the valve's own.

       THE CHORD IS MEASURED PER COLUMN, and per connected run within
       it: at one x the section can cut the chamber above the trim and
       the chamber below it, and treating those as one tall passage
       would halve both their speeds.

       THE WINDOWS ARE HANDLED BY NAME. Assigning depth by nearest
       station smeared them: a cell in the middle of the cage wall is
       equidistant from the window station and the approach station,
       so half the window took the approach's area and the
       constriction came out a third of what it is. The window is a
       hole THROUGH the wall -- its area applies across the whole
       thickness -- so the cells inside it are found by containment
       and given the throat area outright. */
    const depth = new Float64Array(W * H);
    {
      /* Which cells are in a window. */
      const isThroat = new Uint8Array(W * H);
      const throatRings = o.throatRings || [];
      let throatLo = Infinity, throatHi = -Infinity;
      for (const r of throatRings)
        for (const q of r) {
          if (q[1] < throatLo) throatLo = q[1];
          if (q[1] > throatHi) throatHi = q[1];
        }
      for (let j = 0; j < H && throatRings.length; j++)
        for (let i = 0; i < W; i++) {
          const k = j * W + i;
          if (!mark[k]) continue;
          for (const r of throatRings)
            if (inRing(r, cx(i), cy(j))) { isThroat[k] = 1; break; }
        }
      let throatArea = Infinity;
      for (const q of stations) if (q.area < throatArea) throatArea = q.area;
      const throatChord = throatHi > throatLo ? throatHi - throatLo : null;

      /* The real area as a function of x, from the stations. They run
         left to right, so this is a plain walk. */
      const areaAtX = px => {
        if (px <= stations[0].x) return stations[0].area;
        for (let n = 1; n < stations.length; n++)
          if (px <= stations[n].x) {
            const q0 = stations[n - 1], q1 = stations[n];
            const span = q1.x - q0.x;
            const f = span > 1e-9 ? (px - q0.x) / span : 0;
            return q0.area + (q1.area - q0.area) * f;
          }
        return stations[stations.length - 1].area;
      };

      /* THE AREA IS SHARED OUT, NOT HANDED TO EACH PASSAGE.

         Two faults, the same arithmetic both times.

         A column of the section often cuts the cavity more than
         once -- the bore under the plug, the port, and the chamber
         below it can all appear at one x. Giving each run the full
         area at that x made the model's cross-section the sum of
         them, two or three times what the valve has, and continuity
         came back reading 88% here and 66% there. The area at an x
         is ONE area; passages at that x divide it between them, in
         proportion to how much of the section they occupy.

         The windows are the same mistake in sharper form. The
         section slices two of them; the real cage has six, and the
         area the Cv curve gives is the total through all six. Giving
         each drawn window the whole of it doubled the way in, and
         the throat came out at twenty-six feet per second where
         continuity says forty-one. Each drawn window carries its
         share -- it stands for three real ones -- and the number
         comes back right on its own. */
      for (let i = 0; i < W; i++) {
        let total = 0;
        for (let j = 0; j < H; j++) if (mark[j * W + i]) total++;
        if (!total) continue;
        const chord = total * cell;
        const aHere = areaAtX(cx(i));
        for (let j = 0; j < H; j++) {
          const k = j * W + i;
          if (!mark[k]) continue;
          depth[k] = aHere / Math.max(chord, 1e-6);
        }
      }
      /* Then the windows, by name and by share. */
      if (throatRings.length && throatChord) {
        const each = throatArea / throatRings.length;
        for (let k = 0; k < mark.length; k++)
          if (mark[k] && isThroat[k]) depth[k] = each / throatChord;
      }
    }

    /* ---- boundary flux ----
       Velocity normal to each opening, inward positive. Cubic feet
       per second over the opening's own area, which is the bore and
       not the drawn chord. */
    const Q = gpm * GPM_TO_CFS;
    const flux = new Float64Array(W * H);     /* inward velocity, in/s */
    const atOpening = new Int8Array(W * H);
    /* ---- THE SHARE THAT ARRIVES FROM OUT OF THE PLANE ----------------

       A longitudinal section cuts the plenum annulus twice and only
       one cut touches the inlet. The other one is a closed slot in
       this plane -- it has no boundary to the outside at all, so
       there is nowhere to put an opening on it -- and in the real
       valve its water arrives round the cage, perpendicular to the
       picture.

       So it is a SOURCE in the interior, not a boundary flux. The
       flange gives up that share and the slot receives it, which
       keeps what goes in equal to what comes out and puts the inrush
       through the far window where it belongs. The first attempt put
       a velocity on the window's outer face over a made-up circular
       bore, on cells whose depth is near zero at low travel; the
       boundary condition and the depth map disagreed and the solve
       ran away to a residual of 1e18.

       It is DECLARED, not solved. The model cannot see that path. */
    const plenum = o.plenum || null;
    const pShare = plenum && plenum.into && plenum.into.length &&
                   plenum.outOf && plenum.outOf.length
      ? (plenum.share || 0) : 0;
    if (!(pShare >= 0 && pShare < 1))
      throw new Error('flowfield.solveField2D: the plenum share is the ' +
        'fraction of the flow that reaches the far side of the cage ' +
        'round the back, so it is at least 0 and less than 1; got ' +
        pShare + '. At 1 the flange would carry nothing.');
    for (const op of openings) {
      const area = Math.PI * op.halfW * op.halfW;        /* in2 */
      const v = area > 0 ? (Q * 1728) / area : 0;        /* in/s */
      const sign = op.role === 'inlet' ? 1 : -1;
      const steps = Math.max(2, Math.ceil((2 * op.halfW) / cell));
      for (let t = 0; t <= steps; t++) {
        const f = -1 + (2 * t) / steps;
        const k = idxOf(op.x + op.nx * cell * 0.5, op.y + f * op.halfW);
        if (k >= 0 && mark[k]) {
          flux[k] = sign * v * op.nx * op.nx;   /* |nx| is 1 here */
          atOpening[k] = sign;
        }
      }
    }
    /* Laplace with no-flow walls is solvable only if what goes in
       comes out. Scale the outflow to match rather than letting the
       relaxation drift forever against an impossible boundary. */
    /* BALANCED BY VOLUME, not by velocity. What has to match is the
       volumetric flow -- depth times face length times velocity --
       because that is what the system conserves. Balancing the bare
       velocities left a mismatch wherever the two openings sat at
       different depths, and a Neumann problem whose boundary fluxes
       do not cancel has no solution at all; the solver then returns
       the least-squares near-miss, silently. */
    let fin = 0, fout = 0;
    for (let k = 0; k < flux.length; k++) {
      if (atOpening[k] > 0) fin += flux[k] * depth[k];
      else if (atOpening[k] < 0) fout -= flux[k] * depth[k];
    }

    /* The cells the out-of-plane share arrives in, and how much each
       of them gets. Spread evenly over the slot: the real inflow is
       spread round a quarter-turn of annulus, and nothing in this
       plane says which end of the slot it reaches first. */
    /* THE SLOT CAN BE NARROWER THAN A CELL, and on the bigger valve
       at a coarse grid it is: a third of an inch of clearance and a
       third of an inch of cell, and not one cell CENTRE lands inside
       it. Containment alone then finds nothing and the transfer has
       nowhere to go. So a cell also counts if its own square reaches
       the region -- the cell is partly that slot, which is as true
       as a grid this coarse can be about a feature this thin. */
    const cellsIn = rs => {
      const strict = [], loose = [];
      const boxes = rs.map(r => {
        let a = Infinity, b2 = -Infinity, c2 = Infinity, d2 = -Infinity;
        for (const q of r) {
          if (q[0] < a) a = q[0]; if (q[0] > b2) b2 = q[0];
          if (q[1] < c2) c2 = q[1]; if (q[1] > d2) d2 = q[1];
        }
        return [a, b2, c2, d2];
      });
      const h = cell / 2;
      for (let j = 0; j < H; j++)
        for (let i = 0; i < W; i++) {
          const k = j * W + i;
          if (!mark[k] || atOpening[k]) continue;
          const px = cx(i), py = cy(j);
          let hit = false;
          for (const r of rs) if (inRing(r, px, py)) { hit = true; break; }
          if (hit) { strict.push(k); continue; }
          for (const bx of boxes)
            if (px + h > bx[0] && px - h < bx[1] &&
                py + h > bx[2] && py - h < bx[3]) { loose.push(k); break; }
        }
      return strict.length ? strict : loose;
    };
    const pInto = pShare > 0 ? cellsIn(plenum.into) : [];
    const pOut = pShare > 0 ? cellsIn(plenum.outOf) : [];
    /* A GRID TOO COARSE TO HOLD THE SLOT SAYS SO. The clearance round
       the cage is a third of an inch; a grid whose cells are a third
       of an inch cannot resolve it, and on such a grid the transfer
       has nowhere to land. Doing it half -- out of the chamber and
       nowhere in -- would unbalance the problem, and doing it
       silently would leave a reader of the far window none the
       wiser. So it is skipped, together, and the field reports that
       it was skipped. The drawing runs at a cell that resolves it. */
    const plenumResolved = pShare > 0 && pInto.length > 0 && pOut.length > 0;
    const plenumNote = pShare <= 0 ? null
      : plenumResolved
        ? 'the share that runs round the cage is carried: out of ' +
          pOut.length + ' cells in the near chamber, into ' +
          pInto.length + ' in the far slot'
        : 'DECLARED AND NOT CARRIED: ' + pOut.length + ' cells to ' +
          'take it from and ' + pInto.length + ' to put it in. Either ' +
          'the slot is thinner than this grid can hold (' +
          cell.toFixed(2) + ' in cells) or the region given is not in ' +
          'the solved domain. The far side of the cage carries nothing ' +
          'on this solve.';
    /* The transfer, in the same currency as the boundary flux. */
    const fplen = plenumResolved ? fin * pShare : 0;

    if (fin > 0 && fout > 0) {
      const adj = fin / fout;
      for (let k = 0; k < flux.length; k++) if (atOpening[k] < 0) flux[k] *= adj;
    }

    /* ---- SOLVE ---------------------------------------------------------

       Conservation over a cell, with faces weighted by how much
       cavity the two cells share:

           sum_faces d_face * (phi_k - phi_nb) = -d_k * v_in * cell

       which is a symmetric, positive semi-definite system. Solved by
       preconditioned conjugate gradient.

       IT STARTED AS OVER-RELAXATION AND THAT WAS THE WRONG TOOL. The
       depth map deliberately puts a three-to-one jump in the
       coefficients at the cage wall, which is exactly the kind of
       contrast Gauss-Seidel crawls on: four thousand sweeps left a
       relative residual of 5e-2, and an unconverged potential field
       is not a slightly rough answer, it is a wrong one. It showed
       up as continuity reading 66% of the flow across the cage wall
       -- where, that column being nothing but window, it has to read
       100% -- and as fourteen feet per second through a drilling
       that is a dead end and must carry nothing at all. Both are
       the solver, not the model.

       The nullspace is handled rather than pinned. With no flow
       through any wall the potential is fixed only up to an additive
       constant, so the constant is projected out of the residual and
       the solution each step; pinning a cell instead would impose a
       boundary condition the valve does not have. */
    const phi = new Float64Array(W * H);
    const diag = new Float64Array(W * H);
    const bvec = new Float64Array(W * H);
    const faceD = (ka, kb) => (depth[ka] + depth[kb]) / 2;
    for (let j = 0; j < H; j++)
      for (let i = 0; i < W; i++) {
        const k = j * W + i;
        if (!mark[k]) continue;
        let dsum = 0;
        if (i > 0 && mark[k - 1]) dsum += faceD(k, k - 1);
        if (i < W - 1 && mark[k + 1]) dsum += faceD(k, k + 1);
        if (j > 0 && mark[k - W]) dsum += faceD(k, k - W);
        if (j < H - 1 && mark[k + W]) dsum += faceD(k, k + W);
        diag[k] = dsum;
        bvec[k] = -depth[k] * flux[k] * cell;
      }
    /* The share that goes round the back: out of the near chamber,
       into the far slot, in equal and opposite amounts so the sum
       over the domain is unchanged and the problem stays solvable. */
    if (plenumResolved) {
      const each = fplen * cell;
      for (const k of pOut) bvec[k] += each / pOut.length;
      for (const k of pInto) bvec[k] -= each / pInto.length;
    }

    const applyA = (v, out) => {
      for (let j = 0; j < H; j++)
        for (let i = 0; i < W; i++) {
          const k = j * W + i;
          if (!mark[k]) { out[k] = 0; continue; }
          let acc = 0, df;
          if (i > 0 && mark[k - 1]) { df = faceD(k, k - 1); acc += df * (v[k] - v[k - 1]); }
          if (i < W - 1 && mark[k + 1]) { df = faceD(k, k + 1); acc += df * (v[k] - v[k + 1]); }
          if (j > 0 && mark[k - W]) { df = faceD(k, k - W); acc += df * (v[k] - v[k - W]); }
          if (j < H - 1 && mark[k + W]) { df = faceD(k, k + W); acc += df * (v[k] - v[k + W]); }
          out[k] = acc;
        }
    };
    const project = v => {
      let m = 0;
      for (let k = 0; k < v.length; k++) if (mark[k]) m += v[k];
      m /= cells;
      for (let k = 0; k < v.length; k++) if (mark[k]) v[k] -= m;
    };
    const dot = (u, v) => {
      let acc = 0;
      for (let k = 0; k < u.length; k++) if (mark[k]) acc += u[k] * v[k];
      return acc;
    };

    const r = new Float64Array(W * H);
    const z = new Float64Array(W * H);
    const pv = new Float64Array(W * H);
    const Ap = new Float64Array(W * H);

    project(bvec);
    applyA(phi, Ap);
    for (let k = 0; k < r.length; k++) if (mark[k]) r[k] = bvec[k] - Ap[k];
    project(r);
    const bnorm = Math.sqrt(dot(bvec, bvec)) || 1;
    for (let k = 0; k < z.length; k++)
      if (mark[k]) z[k] = diag[k] > 0 ? r[k] / diag[k] : 0;
    project(z);
    pv.set(z);
    let rz = dot(r, z);
    let residual = Math.sqrt(dot(r, r)) / bnorm, sweeps = 0;
    const iters = o.iterations === undefined ? 1200 : o.iterations;
    const tol = o.tol === undefined ? 1e-8 : o.tol;

    for (let it = 0; it < iters && residual > tol; it++) {
      sweeps = it + 1;
      applyA(pv, Ap);
      project(Ap);
      const pAp = dot(pv, Ap);
      if (!(Math.abs(pAp) > 1e-300)) break;
      /* The conjugate-gradient step length. Named `stepLen` rather
         than the usual alpha: this layer is checked for the word,
         because an alpha in the physics is almost always an opacity
         that has wandered down from the chrome. */
      const stepLen = rz / pAp;
      for (let k = 0; k < phi.length; k++)
        if (mark[k]) { phi[k] += stepLen * pv[k]; r[k] -= stepLen * Ap[k]; }
      project(r);
      residual = Math.sqrt(dot(r, r)) / bnorm;
      if (residual <= tol) break;
      for (let k = 0; k < z.length; k++)
        if (mark[k]) z[k] = diag[k] > 0 ? r[k] / diag[k] : 0;
      project(z);
      const rzNew = dot(r, z);
      const beta = rzNew / rz;
      rz = rzNew;
      for (let k = 0; k < pv.length; k++)
        if (mark[k]) pv[k] = z[k] + beta * pv[k];
    }
    project(phi);

    /* ---- velocity = grad(phi) ---- */
    const vx = new Float64Array(W * H);
    const vy = new Float64Array(W * H);
    for (let j = 0; j < H; j++)
      for (let i = 0; i < W; i++) {
        const k = j * W + i;
        if (!mark[k]) continue;
        const L = i > 0 && mark[k - 1], R = i < W - 1 && mark[k + 1];
        const D = j > 0 && mark[k - W], U = j < H - 1 && mark[k + W];
        vx[k] = L && R ? (phi[k + 1] - phi[k - 1]) / (2 * cell)
              : R ? (phi[k + 1] - phi[k]) / cell
              : L ? (phi[k] - phi[k - 1]) / cell : 0;
        vy[k] = D && U ? (phi[k + W] - phi[k - W]) / (2 * cell)
              : U ? (phi[k + W] - phi[k]) / cell
              : D ? (phi[k] - phi[k - W]) / cell : 0;
      }

    /* WHERE THE FASTEST FLUID IS, from the field rather than from
       whatever happens to be floating there. A consumer that reads
       the peak off its own particles gets the fastest PARTICLE, and
       since the throat is small and the fluid is through it in no
       time, usually there isn't one -- so the label lands in the
       outlet chamber and points at nothing. */
    /* ---- THE CORNER SINGULARITY, AND WHAT TO DO ABOUT IT -------------

       Potential flow has unbounded velocity at a sharp convex
       corner. Not a large velocity -- an infinite one, and the finer
       the grid the larger the number that comes back. The cage
       window has four such corners, so the raw peak was reading 835
       feet per second and Bernoulli then returned a pressure of
       minus two thousand psia. There is no such thing as a negative
       absolute pressure; it was the model, loudly.

       It is a known property of the idealisation and the standard
       handling is the honest one: the singularity is integrable, so
       it contributes correctly to the FLOW and incorrectly to any
       point sample. The velocity is therefore smoothed over
       neighbouring cells before anything reads a value off it, which
       leaves the jet where it is and takes the spike off the
       corners. Continuity is checked afterwards and still holds,
       which is the test that the smoothing moved an artifact rather
       than the physics.

       A real valve rounds those corners anyway -- a cast and
       machined window has a radius on it -- so the sharp corner is
       the drawing's, not the part's. */
    /* ONE PASS, not several. Smoothing trades the corner spike
       against continuity -- each pass moves a little flow sideways --
       and since the PRESSURE no longer comes from this peak but from
       the published FL, the only job left here is to stop a single
       corner cell from colouring one particle absurdly. One pass does
       that and costs about two points of continuity; three passes
       cost nine and buy nothing anybody can see. */
    const SM = o.smooth === undefined ? 1 : o.smooth;
    for (let pass = 0; pass < SM; pass++) {
      const sx = vx.slice(), sy = vy.slice();
      for (let j = 0; j < H; j++)
        for (let i = 0; i < W; i++) {
          const k = j * W + i;
          if (!mark[k]) continue;
          let ax = sx[k], ay = sy[k], n = 1;
          if (i > 0 && mark[k - 1]) { ax += sx[k - 1]; ay += sy[k - 1]; n++; }
          if (i < W - 1 && mark[k + 1]) { ax += sx[k + 1]; ay += sy[k + 1]; n++; }
          if (j > 0 && mark[k - W]) { ax += sx[k - W]; ay += sy[k - W]; n++; }
          if (j < H - 1 && mark[k + W]) { ax += sx[k + W]; ay += sy[k + W]; n++; }
          vx[k] = ax / n; vy[k] = ay / n;
        }
    }

    let vMax = 0, vMaxAt = null;
    for (let k = 0; k < mark.length; k++) {
      if (!mark[k]) continue;
      const m = Math.hypot(vx[k], vy[k]);
      if (m > vMax) {
        vMax = m;
        const i = k % W, j = (k - i) / W;
        vMaxAt = [cx(i), cy(j)];
      }
    }

    const sample = (x, y) => {
      const k0 = idxOf(x, y);
      if (k0 >= 0 && still[k0]) return { vx: 0, vy: 0, still: true };
      const fi = (x - x0) / cell - 0.5, fj = (y - y0) / cell - 0.5;
      const i = Math.floor(fi), j = Math.floor(fj);
      const tx = fi - i, ty = fj - j;
      let ax = 0, ay = 0, wsum = 0;
      for (let dj = 0; dj <= 1; dj++)
        for (let di = 0; di <= 1; di++) {
          const ii = i + di, jj = j + dj;
          if (ii < 0 || jj < 0 || ii >= W || jj >= H) continue;
          const k = jj * W + ii;
          if (!mark[k]) continue;
          const w = (di ? tx : 1 - tx) * (dj ? ty : 1 - ty);
          ax += vx[k] * w; ay += vy[k] * w; wsum += w;
        }
      if (!wsum) return null;
      return { vx: ax / wsum, vy: ay / wsum };
    };

    return Object.freeze({
      kind: 'potential2d',
      width: W, height: H, cellIn: cell,
      originIn: [x0, y0],
      cells: cells, residual: residual, sweeps: sweeps,
      /* Whether the share that runs round the cage was carried,
         and if not, why not. */
      plenumCarried: plenumResolved, plenumNote: plenumNote,
      depthAt: (x, y) => { const k = idxOf(x, y);
                           return k >= 0 && mark[k] ? depth[k] : null; },
      units: { v: 'in/s', x: 'in' },
      gpm: gpm,
      maxSpeedIps: vMax,
      maxAt: vMaxAt ? Object.freeze(vMaxAt) : null,
      /* Velocity in inches per second at a point in valve inches.
         Null outside the wetted cavity, which is a real answer. */
      at: sample,
      /* Feet per second, which is what everything else in this layer
         talks in. */
      speedAt: (x, y) => {
        const v = sample(x, y);
        return v === null ? null : Math.hypot(v.vx, v.vy) / 12;
      },
      inside: (x, y) => {
        const k = idxOf(x, y);
        return k >= 0 && (!!mark[k] || !!still[k]);
      },
      /* Still space answers ZERO, not nothing. "There is fluid here
         and it is not moving" and "there is no fluid here" are
         different facts, and anything drawing the valve needs to
         tell them apart. */
      isStill: (x, y) => {
        const k = idxOf(x, y);
        return k >= 0 && !!still[k];
      },
      /* The flux crossing a vertical line, for checking continuity.
         Everything this solve claims rests on this being the same
         number wherever it is measured. */
      fluxThroughX: function (xAt) {
        const i = Math.round((xAt - x0) / cell - 0.5);
        if (i < 0 || i >= W) return 0;
        let acc = 0;
        for (let j = 0; j < H; j++) {
          const k = j * W + i;
          if (mark[k]) acc += vx[k] * cell * depth[k];   /* in3/s */
        }
        return acc;
      },
      approximation:
        'TWO-DIMENSIONAL, POTENTIAL, AND SAID SO. A plane cut through a '
      + 'three-dimensional casting: fluid really reaches the trim through '
      + 'a ring of windows round the cage, not the two this section '
      + 'slices, and the chambers are solids of revolution rather than '
      + 'the lens shapes a section shows. Within the plane the solve is '
      + 'honest -- incompressible, irrotational, no flow through walls, '
      + 'through-flow pinned to the real volumetric flow at the flanges '
      + '-- so where fluid is, where it is still, where it squeezes and '
      + 'in what proportion are all the valve\'s. Being irrotational it '
      + 'has no separation and no eddies at all; it reports a slow corner '
      + 'where a real valve has a slow swirl. Any swirl drawn on top of '
      + 'this is a separate model and must say so.',
    });
  }

  /* ---- PRESSURE, AND WHAT THE FLUID DOES WHEN IT RUNS OUT -------------

     A velocity field is half the story. The half that matters for
     damage is the pressure, and for an incompressible irrotational
     flow the two are the same fact: Bernoulli says that where the
     fluid is fast the pressure is low, exactly and by how much.

         p = P1 + rho * (v1^2 - v^2) / 2

     in consistent units, which here means psia, feet per second and
     pounds per cubic foot, so the constant is 2 * 32.174 * 144.

     THEN TWO THINGS CAN HAPPEN, and the difference between them is
     the difference between a valve that wears out and a valve that
     works.

       CAVITATION  the pressure at the throat falls below the
                   fluid's vapour pressure, so it boils -- and then
                   the pressure recovers downstream, above vapour
                   again, and every bubble collapses. The collapses
                   are what eat the trim.
       FLASHING    the same boiling, but the OUTLET pressure is also
                   below vapour, so nothing collapses. The fluid
                   simply leaves as two phases. Erosive rather than
                   implosive, and a different problem.

     The test is the same one ISA-75.01.01 uses -- compare against
     the vapour pressure of the fluid -- and this layer reports it
     from the field rather than from a correlation. That is worth
     saying plainly: ISA predicts CHOKING from FL and Ff without ever
     computing a local pressure, and this computes a local pressure
     without ever using FL. They are two independent routes, and
     where they agree that is worth something.

     WHAT BERNOULLI DOES NOT KNOW. It is lossless: no friction, no
     separation, no pressure recovery that falls short because the
     jet never reattached. Real recovery downstream of a valve is
     incomplete, which is what the published FL is FOR. So this
     reads the minimum honestly and the recovery optimistically, and
     a reader comparing the two should expect the field to predict
     cavitation a little later than the ISA correlation does. */
  function pressureOver(field, opts) {
    if (!field || typeof field.speedAt !== 'function')
      throw new Error('flowfield.pressureOver: expected a solved field ' +
        'from solveField2D.');
    const o = opts || {};
    const P1 = o.P1, P2 = o.P2, Pv = o.Pv, sg = o.sg, FL = o.FL;
    if (!(P1 > 0) || !(P2 > 0))
      throw new Error('flowfield.pressureOver: {P1} and {P2} are the inlet ' +
        'and outlet pressures in psia. Both are service conditions and ' +
        'neither has a sensible default.');
    if (!(sg > 0))
      throw new Error('flowfield.pressureOver: {sg} is the specific ' +
        'gravity. Which fluid is in the valve is a fact about the ' +
        'service, not about this layer.');
    if (!(Pv >= 0))
      throw new Error('flowfield.pressureOver: {Pv} is the vapour ' +
        'pressure of the fluid at the service temperature, in psia. ' +
        'Without it nothing here can say whether the fluid boils, which ' +
        'is the only question it is being asked.');
    if (!(FL > 0 && FL <= 1))
      throw new Error('flowfield.pressureOver: {FL} is the valve\'s ' +
        'published liquid pressure recovery factor. It is the number ' +
        'that says how far the pressure falls inside this particular ' +
        'valve, and no field computed here can be a substitute for it.');

    const rho = sg * 62.4;                       /* lb/ft3 */
    const K = 2 * 32.174 * 144;                  /* to psi */
    const vIn = o.vInletFps === undefined
      ? (field.speedAt(field.originIn[0] + field.cellIn * 1.5, 0) || 0)
      : o.vInletFps;

    /* ---- HOW LOW THE PRESSURE ACTUALLY GOES ---------------------------

       Not from Bernoulli on the field. Potential flow has unbounded
       velocity at a sharp convex corner and the cage window has four
       of them, so an inviscid point sample returned minus two
       thousand psia -- there is no such thing as a negative absolute
       pressure, and the number was the idealisation talking.

       The valve publishes the answer. FL, the liquid pressure
       recovery factor, is DEFINED by how far the pressure falls at
       the vena contracta and how much of it comes back:

           FL^2 = (P1 - P2) / (P1 - Pvc)

       so Pvc = P1 - (P1 - P2) / FL^2. That is a measured property of
       this trim in this body, from the catalogue, and it is the
       floor the real fluid reaches. An inviscid field has no
       business going below a number somebody obtained by testing the
       part, so the field's pressure is clamped there -- the clamp is
       where the valve is doing its work, and the clamp is exactly
       the region that boils when it boils.

       Then the two outcomes, which are ISA-75.01.01's and not this
       layer's invention:

         CAVITATION  Pvc below vapour pressure, P2 above it. The
                     fluid boils at the throat and every bubble
                     collapses as the pressure recovers. The
                     collapses are what eat the trim.
         FLASHING    Pvc and P2 both below vapour pressure. Nothing
                     collapses; the valve passes two phases. Erosive
                     rather than implosive, and a different problem
                     with a different answer. */
    const Pvc = P1 - (P1 - P2) / (FL * FL);

    const pAt = (x, y) => {
      const v = field.speedAt(x, y);
      if (v === null) return null;
      const ideal = P1 + rho * (vIn * vIn - v * v) / K;
      return Math.max(Pvc, ideal);
    };

    const boils = Pvc < Pv;
    const flashes = boils && P2 < Pv;
    return Object.freeze({
      P1: P1, P2: P2, Pv: Pv, sg: sg, FL: FL, inletFps: vIn,
      units: { p: 'psia', v: 'ft/s' },
      at: pAt,
      /* Where the fluid has boiled: the places the field has driven
         down to the published floor, and that floor below vapour. */
      boilingAt: (x, y) => {
        if (!boils) return false;
        const pp = pAt(x, y);
        return pp !== null && pp <= Pv;
      },
      venaContracta: Pvc,
      minPressure: Pvc,
      cavitating: boils && !flashes,
      flashing: flashes,
      verdict: !boils ? 'liquid throughout'
             : flashes ? 'flashing: the outlet is below vapour pressure '
                       + 'too, so the bubbles never collapse and the valve '
                       + 'passes two phases'
             : 'cavitating: the fluid boils at the throat and the bubbles '
             + 'collapse again as the pressure recovers, which is what '
             + 'damages the trim',
      note:
        'The pressure MAP is Bernoulli over the solved field, which is '
      + 'inviscid and therefore optimistic about recovery. The pressure '
      + 'MINIMUM is not: it comes from the published FL, which is a '
      + 'measured property of this trim, because an idealised field is '
      + 'singular at a sharp corner and would report a pressure no '
      + 'fluid has ever had. Where the two disagree the catalogue wins.',
    });
  }

  /* ---- RECIRCULATION, WHICH THIS MODEL CANNOT SOLVE ------------------

     Potential flow is irrotational. Curl is zero everywhere, by
     construction, at every grid resolution, for ever. A separated
     eddy in the corner of a chamber is pure vorticity, so it cannot
     appear in the solve no matter how good the solve is. What the
     solve gives instead, honestly, is a near-stagnant corner exactly
     where a real valve has a slow swirl.

     A real valve does have them. Fluid comes off the cage as a jet,
     the chamber is far wider than the jet, and the fluid between the
     jet and the casting wall turns over. Showing that is worth
     doing -- it is where deposits settle and where a thermal pocket
     sits -- so this adds it, and says plainly that it is ADDED.

     WHAT IS SOLVED AND WHAT IS DRESSED ON TOP:

       solved     where the fluid is, where it is fast, where it is
                  slow, where it is still, and the pressure that
                  follows from all of that
       declared   the rotation in the slow pockets: its existence is
                  real, its SENSE is taken from the shear against
                  the nearest moving fluid, and its SPEED is a
                  stated fraction of that fluid's speed

     The fraction is the whole of the invention and it is one number,
     named here, applied nowhere else. Nothing downstream of this --
     no pressure, no cavitation verdict, no flow figure -- is allowed
     to depend on it; it moves particles in the corners and that is
     all it does. */
  const SWIRL_OF_ADJACENT = 0.18;

  function withRecirculation(field, opts) {
    if (!field || typeof field.at !== 'function')
      throw new Error('flowfield.withRecirculation: expected a solved ' +
        'field from solveField2D.');
    const o = opts || {};
    const share = o.share === undefined ? SWIRL_OF_ADJACENT : o.share;
    if (!(share >= 0 && share <= 1))
      throw new Error('flowfield.withRecirculation: {share} is the ' +
        'fraction of the neighbouring stream\'s speed that the eddy ' +
        'turns at, between 0 and 1.');
    /* SLOW RELATIVE TO THE THROUGH-FLOW, not to the peak.

       Measured against the fastest fluid in the valve -- which is
       the window, running twenty times the body -- almost the whole
       casting counts as slow, and the first run duly found two
       "pockets" of fourteen hundred and seven hundred cells. Those
       are the chambers. Spinning them would not be adding an eddy,
       it would be stirring the main stream.

       A recirculation pocket is fluid sluggish compared with the
       flow THROUGH THE BODY, which is the inlet velocity, and it is
       a corner rather than a room: anything larger than a tenth of
       the cavity is not a corner and is rejected. If nothing
       qualifies, nothing is added, which is the right answer for a
       wide-open valve with no room for a jet to separate in. */
    const quiet = o.quiet === undefined ? 0.45 : o.quiet;
    const vIn = field.speedAt(field.originIn[0] + field.cellIn * 1.5, 0) || 0;
    const ref = vIn * 12 * quiet;
    /* A pocket is a corner, not a room -- but the dead ends in a
       valve body are a bigger share of it than a separation bubble
       is. The drillings alone are a twentieth of the section, and
       the bonnet bore above them as much again; at a tenth they were
       rejected for being too big and went back to sitting still. */
    const biggest = (o.maxShare === undefined ? 0.22 : o.maxShare)
                    * field.cells;

    /* The pockets: connected runs of fluid moving far slower than
       the stream. One pass over the grid, so this is cheap and it
       does not change when the frame does. */
    const W = field.width, H = field.height, cell = field.cellIn;
    const x0 = field.originIn[0], y0 = field.originIn[1];
    const px = i => x0 + (i + 0.5) * cell;
    const py = j => y0 + (j + 0.5) * cell;
    /* THE STILL SPACES ARE THE POCKETS, not an exception to them.

       This skipped every cell marked still, which is exactly
       backwards: the drillings through the plug, the space the plug
       strokes through and the bonnet bore are the blind pockets in
       this valve, and they are the ones a stream drags round. Left
       out, they were the only places in the model with no velocity
       at all -- so the parcels in them did not drift, they sat, and
       a reader watching several hundred gallons a minute go past
       could see a pocketful of water ignoring it.

       A dead end is not still water. It has no NET flow, because
       there is nowhere for it to go, and that is a different claim:
       the shear across its mouth turns it over. Which is what this
       function was written to add, and it was declining to add it to
       the only places that needed it. */
    const slow = new Uint8Array(W * H);
    for (let j = 0; j < H; j++)
      for (let i = 0; i < W; i++) {
        const v = field.at(px(i), py(j));
        if (!v) continue;
        if (v.still) { slow[j * W + i] = 1; continue; }
        if (Math.hypot(v.vx, v.vy) < ref) slow[j * W + i] = 1;
      }

    /* Label the pockets, and for each one find its centre and the
       fastest fluid on its edge -- that neighbour is what is
       dragging it round, so it sets both the sense and the speed. */
    const lab = new Int32Array(W * H).fill(-1);
    const pockets = [];
    for (let k0 = 0; k0 < slow.length; k0++) {
      if (!slow[k0] || lab[k0] >= 0) continue;
      const id = pockets.length;
      const stack = [k0];
      let sx = 0, sy = 0, n = 0, bestV = 0, bvx = 0, bvy = 0, bx = 0, by = 0;
      let nStill = 0;
      lab[k0] = id;
      while (stack.length) {
        const k = stack.pop();
        const i = k % W, j = (k - i) / W;
        sx += px(i); sy += py(j); n++;
        { const vk = field.at(px(i), py(j)); if (vk && vk.still) nStill++; }
        const nb = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
        for (const [ii, jj] of nb) {
          if (ii < 0 || jj < 0 || ii >= W || jj >= H) continue;
          const kk = jj * W + ii;
          if (slow[kk]) { if (lab[kk] < 0) { lab[kk] = id; stack.push(kk); } }
          else {
            const v = field.at(px(ii), py(jj));
            if (!v) continue;
            const m = Math.hypot(v.vx, v.vy);
            if (m > bestV) { bestV = m; bvx = v.vx; bvy = v.vy;
                             bx = px(ii); by = py(jj); }
          }
        }
      }
      /* THE SIZE CAP IS FOR POCKETS THIS FUNCTION GUESSED AT, NOT FOR
         SPACES THE GEOMETRY DECLARED. A pocket found by velocity alone
         might be a chamber, and spinning a chamber would be stirring
         the main stream rather than adding an eddy -- hence the cap.
         A cell marked `still` is a different kind of claim: the
         geometry layer has already said that space is blind, and no
         amount of it being large makes it less blind.
         
         The registered ED body is where this started to matter. Its
         dead ends -- the plug's own hollow, the bonnet bore above it,
         the cage-to-bore clearance -- are CONNECTED to one another,
         because they are connected in the valve: that is what the
         balance holes are for. One blind volume of 798 cells in a
         2 299-cell section, 35%, over a 22% cap, so the whole of it
         was rejected and every one of those 798 cells sat perfectly
         motionless beside several hundred gallons a minute. The EWT
         outline happened to break the same water into separate
         pockets that each squeaked under the cap. */
      const declared = nStill > n * 0.5;
      if (n < 6 || bestV <= 0) continue;
      if (!declared && n > biggest) continue;
      pockets.push({ id: id, cx: sx / n, cy: sy / n, cells: n,
                     speed: bestV * share,
                     /* Which way round: the eddy turns so that its
                        edge nearest the stream travels WITH the
                        stream, which is what shear does. */
                     sense: Math.sign((bx - sx / n) * bvy -
                                      (by - sy / n) * bvx) || 1,
                     reach: Math.sqrt(n) * cell * 0.75 });
    }

    /* Rejected pockets keep their label but have no entry, so the
       lookup is by id and a miss means "slow, but not an eddy". */
    const byId = {};
    for (const pk of pockets) byId[pk.id] = pk;
    const pocketAt = (x, y) => {
      const i = Math.round((x - x0) / cell - 0.5);
      const j = Math.round((y - y0) / cell - 0.5);
      if (i < 0 || j < 0 || i >= W || j >= H) return null;
      const id = lab[j * W + i];
      return id >= 0 ? (byId[id] || null) : null;
    };

    return Object.freeze({
      base: field, pockets: Object.freeze(pockets), share: share,
      kind: 'potential2d+declared-swirl',
      /* Everything the base field answers, answered the same way,
         with a turn added in the slow pockets and nowhere else. */
      at: (x, y) => {
        const v = field.at(x, y);
        if (!v) return v;
        /* STILL CELLS GET THE TURN TOO. They were skipped here as
           well as in the scan, so even once they were allowed to
           BE pockets they would have come back motionless. A blind
           pocket has no net flow through it; that is not the same
           as the water in it being at rest. */
        const pk = pocketAt(x, y);
        if (!pk) return v;
        const dx = x - pk.cx, dy = y - pk.cy;
        const r = Math.hypot(dx, dy);
        if (!(r > 1e-6)) return v;
        const f = Math.min(1, r / Math.max(pk.reach, 1e-6));
        const t = pk.speed * f * pk.sense;
        const sw = { vx: v.vx - (dy / r) * t, vy: v.vy + (dx / r) * t };
        if (v.still) sw.still = true;   /* stirred, still no net flow */
        return sw;
      },
      speedAt: field.speedAt, inside: field.inside, isStill: field.isStill,
      width: W, height: H, cellIn: cell, originIn: field.originIn,
      maxSpeedIps: field.maxSpeedIps, maxAt: field.maxAt,
      shut: field.shut, cells: field.cells,
      declared:
        'THE SWIRL IS ADDED, THE REST IS SOLVED. Potential flow is '
      + 'irrotational and can never produce an eddy, so the slow '
      + 'pockets it reports are dressed with a rotation whose sense '
      + 'comes from the shear against the neighbouring stream and '
      + 'whose speed is ' + (100 * share).toFixed(0) + '% of that '
      + 'stream. Nothing else in this model depends on it: no '
      + 'pressure, no cavitation verdict, no flow figure. It stirs '
      + 'the corners, which is what a real valve does there, and it '
      + 'is the one invented number in the picture.',
    });
  }

  LPE.flowfield = {
    RE_LAMINAR: RE_LAMINAR, RE_TURBULENT: RE_TURBULENT,
    N: N, MEAN_OVER_PEAK: MEAN_OVER_PEAK,
    laminar: laminar, turbulent: turbulent,
    turbulence: turbulence, profile: profile, peak: peak, meanOf: meanOf,
    along: along, field: field, fieldOfAreas: fieldOfAreas,
    solveField2D: solveField2D, pressureOver: pressureOver,
    withRecirculation: withRecirculation,
    SWIRL_OF_ADJACENT: SWIRL_OF_ADJACENT,
    magnified: magnified,
  };

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
