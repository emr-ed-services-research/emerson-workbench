/* @layer geometry
   @core Process Core -- what a part actually LOOKS like, at its real size.
   May use: a catalogue part's dimensions. Nothing else.
   Never: pixels, a frame, a scale, a colour, a netlist, a level.
   See `00 - Project/Process Core -- Architecture & Build Plan.md`.      */
/* ---------------- GEOMETRY: real shape, in inches ---------------------

   THE LAYER THAT WAS MISSING, and the reason it was missing is worth
   writing down.

   `phys-view` was supposed to draw the rig as it is really built. What it
   actually draws is Lunar Process Engineer's schematic: runs whose bore is
   exaggerated against their length by about an order of magnitude, corners
   filleted at three times the bore, a frame whose `pxPerInch` is applied
   to bores only and never to a length. That is a perfectly good schematic
   -- a P&ID does the same -- but it is NOT geometry, and because it was
   the only thing there, every attempt to put a real dimension into the
   drawing had nowhere to land. A 0.6102 in elbow pushed through a
   bore-to-radius factor is not a measurement, it is a category error with
   a citation stapled to it.

   So: this layer. A part's shape, in INCHES, with its origin at its own
   datum. No scale -- the consumer picks one, and picks ONE, for lengths
   and bores alike. No colour; chrome does that. No frame; registration
   does that. No netlist; a part has a shape before anything is connected
   to it.

   WHERE THE SHAPES COME FROM. Every coordinate below is arithmetic on
   catalogue dimensions, and the catalogue refuses to load unless each of
   those matches what it says the standard printed. Nothing here is drawn
   by eye. A socket-welding elbow is a compact forged block with two bored
   sockets and a smaller through bore -- `ASME B16.11` Table 1 gives the
   five numbers that fix it completely:

     A  centre to bottom of socket      D  bore of fitting
     B  socket bore diameter            G  body wall, minimum
     C  socket wall                     J  socket depth, minimum

   Centre-to-face is therefore A + J, the outer half-width is B/2 + C, and
   the bore steps from B/2 to D/2 at the socket shoulder. That is the whole
   part. It is blocky, the outer corner is sharp, and the inner corner is
   sharp -- which is what the real thing looks like in section and why
   drawing it as a swept curve was wrong in kind and not only in size.

   WHAT A CONSUMER GETS BACK. Polygons, closed, counter-clockwise:

     outline   the metal
     bore      the void through it
     ports     {id, x, y, dir, bore} -- where pipe lands, and facing where
     extent    {x0,y0,x1,y1} bounding box, for laying parts out
     source    which document and table the numbers came from

   Two polygons and a few points is deliberately thin. It is enough to
   draw a part to scale and to butt two parts together, which is what
   nothing in this repo could do before.                                */
'use strict';

(function (LPE) {

  /* Every shape rule states which catalogue dimensions it needs. A part
     missing one is refused by name rather than drawn with a guess -- the
     whole point of reading from the catalogue is that a number is either
     in a document or it is not there at all. */
  function need(part, keys) {
    const miss = keys.filter(k => typeof part.dims[k] !== 'number');
    if (miss.length)
      throw new Error('geometry: cannot draw "' + part.id + '" -- its ' +
        'catalogue entry has no ' + miss.join(', ') + '. Dimensions it ' +
        'does have: ' + Object.keys(part.dims).join(', ') + '. Add the ' +
        'missing ones from the standard rather than estimating them here.');
  }

  const extentOf = rings => {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    rings.forEach(r => r.forEach(p => {
      if (p[0] < x0) x0 = p[0]; if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1]; if (p[1] > y1) y1 = p[1];
    }));
    return { x0: x0, y0: y0, x1: x1, y1: y1 };
  };

  /* ---- PIPE -----------------------------------------------------------
     A plain run. Origin at the upstream face, axis along +X. Length is the
     caller's: pipe is cut to fit, which is exactly why it is the one
     dimension that does NOT come from a table. */
  function pipe(part, length) {
    need(part, ['od', 'bore']);
    if (!(length > 0))
      throw new Error('geometry.pipe: length must be a positive number of ' +
        'inches. Pipe is cut to fit, so its length is the only dimension ' +
        'the catalogue cannot supply.');
    const ro = part.dims.od / 2, ri = part.dims.bore / 2, L = length;
    const outline = [[0, -ro], [L, -ro], [L, ro], [0, ro]];
    const bore = [[0, -ri], [L, -ri], [L, ri], [0, ri]];
    return {
      part: part.id, kind: 'pipe', units: 'in', length: L,
      outline: [outline], bore: [bore],
      ports: [{ id: 'in', x: 0, y: 0, dir: [-1, 0], bore: part.dims.bore },
              { id: 'out', x: L, y: 0, dir: [1, 0], bore: part.dims.bore }],
      extent: extentOf([outline]),
    };
  }

  /* ---- SOCKET-WELD 90 ELBOW -------------------------------------------
     Origin at the intersection of the two axes. One leg runs out along -X,
     the other up along +Y: flow enters travelling +X and leaves travelling
     +Y. The HEEL -- the outer corner, at (+w,-w) -- is the long side; the
     THROAT, at (-w,+w), is the short one. Both sharp. */
  function elbow90(part) {
    need(part, ['centreToSocket', 'socketBore', 'fittingBore',
                'socketWall', 'socketDepth']);
    const A = part.dims.centreToSocket;
    const J = part.dims.socketDepth;
    const rB = part.dims.socketBore / 2;
    const rD = part.dims.fittingBore / 2;
    const w = rB + part.dims.socketWall;      // outer half-width
    const L = A + J;                          // centre to face

    const outline = [[-L, -w], [w, -w], [w, L], [-w, L], [-w, w], [-L, w]];

    /* The void: a socket at each face, stepping down to the through bore
       at the shoulder, and the two through bores meeting square. */
    const bore = [
      [-L, -rB], [-A, -rB], [-A, -rD], [rD, -rD], [rD, A], [rB, A],
      [rB, L], [-rB, L], [-rB, A], [-rD, A], [-rD, rD], [-A, rD],
      [-A, rB], [-L, rB],
    ];

    return {
      part: part.id, kind: 'elbow90', units: 'in',
      centreToFace: L, outerHalfWidth: w,
      outline: [outline], bore: [bore],
      ports: [{ id: 'in', x: -L, y: 0, dir: [-1, 0], bore: part.dims.socketBore },
              { id: 'out', x: 0, y: L, dir: [0, 1], bore: part.dims.socketBore }],
      extent: extentOf([outline]),
    };
  }

  /* ---- SOCKET-WELD TEE -------------------------------------------------
     Run along X, branch up +Y. B16.11 gives a tee the same centre-to-
     bottom-of-socket as the elbow at the same size and class, so the three
     legs are the same length from the centre. */
  function tee(part) {
    need(part, ['centreToSocket', 'socketBore', 'fittingBore',
                'socketDepth']);
    const A = part.dims.centreToSocket;
    const J = part.dims.socketDepth;
    const rB = part.dims.socketBore / 2;
    const rD = part.dims.fittingBore / 2;
    /* A tee's catalogue row carries bodyWall rather than socketWall --
       same outer size, named for the section it is measured on. */
    const wall = typeof part.dims.socketWall === 'number'
      ? part.dims.socketWall : part.dims.bodyWall;
    if (typeof wall !== 'number')
      throw new Error('geometry.tee: "' + part.id + '" has neither ' +
        'socketWall nor bodyWall, so its outside size is unknown.');
    const w = rB + wall;
    const L = A + J;

    const outline = [[-L, -w], [L, -w], [L, w], [w, w], [w, L],
                     [-w, L], [-w, w], [-L, w]];

    const bore = [
      [-L, -rB], [-A, -rB], [-A, -rD], [A, -rD], [A, -rB], [L, -rB],
      [L, rB], [A, rB], [A, rD], [rD, rD], [rD, A], [rB, A],
      [rB, L], [-rB, L], [-rB, A], [-rD, A], [-rD, rD], [-A, rD],
      [-A, rB], [-L, rB],
    ];

    return {
      part: part.id, kind: 'tee', units: 'in',
      centreToFace: L, outerHalfWidth: w,
      outline: [outline], bore: [bore],
      ports: [{ id: 'in', x: -L, y: 0, dir: [-1, 0], bore: part.dims.socketBore },
              { id: 'out', x: L, y: 0, dir: [1, 0], bore: part.dims.socketBore },
              { id: 'branch', x: 0, y: L, dir: [0, 1], bore: part.dims.socketBore }],
      extent: extentOf([outline]),
    };
  }

  /* ---- THE FLOW PATH ---------------------------------------------
     Shape says where the metal is. This says where the fluid goes, and
     it is the other thing a renderer and a 1D model both need.

     HOW RESOLUTION WORKS HERE, because it is the whole point. The path
     is a polyline with a handful of vertices and that is not a coarse
     approximation of a curve -- through a socket-weld fitting the bore
     really does turn a square corner. Resolution comes from SAMPLING
     along `s`, at whatever density the consumer wants, never from
     adding vertices to the part.

     WHAT IT RETURNS, and why in this shape:

       path       the centreline, inches, entry port to exit port
       length     its total length
       reaches    constant-bore straight runs, each with its area
       features   discrete events at a station: a bend with its turn
                  angle, a contraction or expansion with both bores

     That split is how real 1D hydraulics is actually written -- a
     distributed friction term over the reaches plus a minor loss at
     each feature -- and it is also exactly what the resistance work in
     Phase 2 will attach a K to.

     WHAT IS DELIBERATELY NOT HERE. A continuous A(s) through the
     junction. Two perpendicular bores meeting make a union whose area
     normal to a turning centreline is a real but fiddly integral, and
     the earlier plan for this layer promised that curve as though it
     were free. It is not, and a smooth swell invented to fill the gap
     would be the sort of plausible fiction this core exists to refuse.
     The junction is reported as a feature at a station with its turn
     angle, which is true, sourced and sufficient for a minor-loss
     model. The integral can come later if something needs it.         */

  const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
  const area = d => Math.PI * (d / 2) * (d / 2);

  function pathOf(pts, reaches, features) {
    let L = 0;
    for (let i = 1; i < pts.length; i++) L += dist(pts[i - 1], pts[i]);
    return { units: 'in', path: pts, length: L,
             reaches: reaches, features: features };
  }

  function flowPath(part, opts) {
    if (!part || !part.dims)
      throw new Error('geometry.flowPath: expected a catalogue part.');

    if (part.class === 'pipe') {
      const g = pipe(part, opts && opts.length);
      const b = part.dims.bore;
      return pathOf([[0, 0], [g.length, 0]],
        [{ s0: 0, s1: g.length, bore: b, area: area(b) }], []);
    }

    if (part.class === 'elbow-socketweld') {
      need(part, ['centreToSocket', 'socketBore', 'fittingBore',
                  'socketDepth']);
      const A = part.dims.centreToSocket, J = part.dims.socketDepth;
      const B = part.dims.socketBore, D = part.dims.fittingBore;
      const L = A + J;
      /* Entry face, inlet shoulder, corner, outlet shoulder, exit face.
         Stations follow the polyline, so the corner sits at exactly the
         two leg lengths and nothing is interpolated. */
      const pts = [[-L, 0], [-A, 0], [0, 0], [0, A], [0, L]];
      const sShoulderIn = J, sCorner = J + A, sShoulderOut = J + A + A;
      return pathOf(pts, [
        { s0: 0, s1: sShoulderIn, bore: B, area: area(B) },
        { s0: sShoulderIn, s1: sShoulderOut, bore: D, area: area(D) },
        { s0: sShoulderOut, s1: sShoulderOut + J, bore: B, area: area(B) },
      ], [
        { s: sShoulderIn, kind: 'contraction', from: B, to: D },
        { s: sCorner, kind: 'bend', turn: 90, sharp: true },
        { s: sShoulderOut, kind: 'expansion', from: D, to: B },
      ]);
    }

    if (part.class === 'tee-socketweld') {
      need(part, ['centreToSocket', 'socketBore', 'fittingBore',
                  'socketDepth']);
      const A = part.dims.centreToSocket, J = part.dims.socketDepth;
      const B = part.dims.socketBore, D = part.dims.fittingBore;
      const L = A + J;
      /* A tee has two paths and the caller has to say which, because
         run-through and branch cost very different amounts -- that is
         the whole reason the correlations tabulate them separately. */
      const via = (opts && opts.via) || 'run';
      if (via !== 'run' && via !== 'branch')
        throw new Error('geometry.flowPath: a tee has two paths. Pass ' +
          '{via:"run"} or {via:"branch"} -- they are not interchangeable ' +
          'and no published correlation treats them as one.');
      const pts = via === 'run'
        ? [[-L, 0], [-A, 0], [A, 0], [L, 0]]
        : [[-L, 0], [-A, 0], [0, 0], [0, A], [0, L]];
      const sIn = J;
      const sOut = via === 'run' ? J + 2 * A : J + 2 * A;
      const feats = [{ s: sIn, kind: 'contraction', from: B, to: D }];
      if (via === 'branch')
        feats.push({ s: J + A, kind: 'bend', turn: 90, sharp: true,
                     note: 'branch exit' });
      feats.push({ s: sOut, kind: 'expansion', from: D, to: B });
      return pathOf(pts, [
        { s0: 0, s1: sIn, bore: B, area: area(B) },
        { s0: sIn, s1: sOut, bore: D, area: area(D) },
        { s0: sOut, s1: sOut + J, bore: B, area: area(B) },
      ], feats);
    }

    throw new Error('geometry.flowPath: no flow path for class "' +
      part.class + '". Classes with one: pipe, elbow-socketweld, ' +
      'tee-socketweld.');
  }

  /* Sample the path at a given spacing. THIS is where resolution lives:
     ask for 0.01 in and get a smooth ribbon; ask for 0.5 in and get a
     sketch. The part does not change either way. */
  function samplePath(fp, spacing) {
    if (!(spacing > 0))
      throw new Error('geometry.samplePath: spacing must be positive inches');
    const out = [];
    let acc = 0;
    for (let i = 1; i < fp.path.length; i++) {
      const a = fp.path[i - 1], b = fp.path[i], seg = dist(a, b);
      const n = Math.max(1, Math.ceil(seg / spacing));
      for (let k = (i === 1 ? 0 : 1); k <= n; k++) {
        const t = k / n;
        out.push({ s: acc + seg * t,
                   x: a[0] + (b[0] - a[0]) * t,
                   y: a[1] + (b[1] - a[1]) * t });
      }
      acc += seg;
    }
    return out;
  }

  /* The bore at a station, from the reaches. Null outside the part. */
  function boreAtS(fp, s) {
    for (const r of fp.reaches)
      if (s >= r.s0 - 1e-9 && s <= r.s1 + 1e-9) return r.bore;
    return null;
  }

  /* Which rule draws which catalogue class. A class with no rule is
     refused by name: there is no generic fallback, because a part drawn by
     a rule that was not written for it is a drawing nobody can defend. */
  const RULES = {
    'pipe': pipe,
    'elbow-socketweld': elbow90,
    'tee-socketweld': tee,
  };

  function shapeOf(part, opts) {
    if (!part || !part.dims)
      throw new Error('geometry.shapeOf: expected a catalogue part. Load ' +
        'the catalogue and pass cat.part(id).');
    const rule = RULES[part.class];
    if (!rule)
      throw new Error('geometry: no shape rule for class "' + part.class +
        '" (part "' + part.id + '"). Classes that can be drawn: ' +
        Object.keys(RULES).join(', ') + '. Write the rule from the ' +
        'standard -- there is deliberately no generic fallback, because a ' +
        'part drawn by a rule not written for it is a drawing nobody can ' +
        'defend.');
    const g = rule(part, opts && opts.length);
    g.source = part.group;
    return g;
  }

  LPE.geometry = {
    shapeOf: shapeOf, pipe: pipe, elbow90: elbow90, tee: tee,
    flowPath: flowPath, samplePath: samplePath, boreAtS: boreAtS,
    classes: () => Object.keys(RULES).sort(),
  };

})(window.LPE = window.LPE || {});
