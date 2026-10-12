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

  /* ================= THE GLOBE VALVE ==================================

     A globe valve body is NOT a bore with a restriction in it. That is an
     orifice plate, and drawing one here would lose the only thing that
     makes this part what it is.

     It is TWO SAUCER-SHAPED CHAMBERS, STACKED, WITH THE PORT AS THE ONLY
     OPENING BETWEEN THEM. Read off Control Valve Handbook Figure 3.4 at
     700 dpi: the inlet enters a flange at the line centreline, the cavity
     sweeps up into a dish that SURROUNDS THE CAGE, the fluid turns and
     passes radially inward through the cage windows, turns again and goes
     axially down through the seat ring, and a second dish -- offset below
     and toward the far flange -- takes it back out at the centreline.

     The two dishes are NOT mirror images. The inlet one wraps the cage;
     the outlet one is a plain expansion. Offset like that, the cavity in
     section reads as a flattened S, and in plan the chambers are wider
     than the line bore, which is what makes room for them.

     Handbook ch3.1.1.3 states the path verbatim: for most trim designs
     flow is "in through the cage openings and down through the seat
     ring". Noise attenuation trim is flow UP, which swaps which chamber
     is the inlet -- so direction is an input here, never assumed.

     THE CAGE HAS THREE JOBS and only one of them is flow. It
     characterises; it GUIDES the plug into its seat; and it is the LOAD
     PATH -- the bonnet tightens down on the cage and the cage holds the
     seat ring in the body. Hence the solid bands above and below the
     windows in Figure 3.37, and hence the window finishing before the
     plug does, which is the droop every measured width profile shows in
     its last travel band.

     ---- WHAT IS SOURCED --------------------------------------------

       face-to-face     Control Valve Handbook 5.1.1 (catalogue
                        `valveBody`), printed in mm and inches
       port diameter    Fisher Catalog 12 (catalogue `valve`)
       rated travel     Fisher Catalog 12
       line bore        the catalogue pipe row for the line size
       window profile   `trim.widthProfile()` -- the derivative of the
                        published Cv curve, graded against Figure 3.37
       flow direction   the Catalog 12 trim designation, where it says

     ---- WHAT IS CONVENTION, EVERY ONE NAMED ------------------------

     Nothing below is measured. The vault holds no dimensioned
     cross-section of a valve body -- every valve IOM in it is an
     install-and-parts manual -- so the cast contours and the internal
     proportions are a DRAWING CONVENTION. They are multiples of the port
     diameter, which IS sourced, so they scale with the real part rather
     than being fixed pixels. `conventions` is returned on every shape so
     a consumer can print it, and `conventionNote` says this out loud.

     If any of these is later sourced, replace it here and every drawing
     improves at once. That is what naming them is for.               */

  /* ---- THE EWT SECTION, DENOISED ----------------------------------

     Every part read off Figure 11-5 of the Fisher Control Valve Sourcebook -- Oil & Gas (drawing W6022-2, "NPS 10-24 EWT or EWD"),
     a cutaway of the family the FCC service in this core uses.
     Franz colour-coded the section part by part, so the
     segmentation is exact rather than inferred.

     CORRECTED 2026-10-11. This said "Figure 24 of the Fisher EWT
     instruction manual, D100399X012" in twenty-six places. There is
     no such document in the vault and there never was -- see
     check-techpubs.js, which exists because of this. The shape
     matches the sourcebook figure above, which IS held.

     AND THIS SOURCE IS TO SCALE, which the ED parts sheet was not: its
     bore is 0.323 of face-to-face and its port 0.293, against 0.359 and
     0.287 for a real EWT 10x8. One published dimension places the
     casting, the chambers and the trim, and they agree with the
     catalogue. Every earlier attempt had to choose which of two true
     numbers to honour.

     DENOISED BY THE 657 METHOD, which is the vault's own authority for
     this job -- `20 - Source Library/Interactive Models/Fisher 657
     Working Model/pipeline/`. That pipeline is rasterize, vectorize,
     DENOISE, animate, and the first pass here stopped after vectorize:
     per-column min/max of a pixel mask, which cannot express a concave
     boundary and leaves every edge stair-stepped. What the 657 method
     adds, step for step:

       grow 5 px into the linework   so parts meet across the black
                                     outlines instead of stopping a
                                     pixel short of them
       per-mask hole fill
       morphological close then open small specks away
       cv2.findContours              a real boundary trace, not a
                                     column scan
       approxPolyDP
       snap_ortho, 6 degrees         a straight edge becomes exactly
                                     straight -- flange faces, cage
                                     walls, the seat
       Chaikin, curved runs only

     TOPOLOGY, measured rather than assumed: the chamber colour forms
     two components that never touch, so the port is the only way
     across. The casting and the bonnet are each TWO regions in section,
     one either side of the trim column.

     UNITS: fractions of face-to-face, origin at the body centre on the
     line centreline. */

  /* ED_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  /* ED_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  /* ED_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  /* ED_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  /* ---- THE OUTLINES, AND WHOSE VALVE THEY ARE ---------------------

     These were an EWT 10x8, lifted off a rendered cutaway in a
     sourcebook, and they were the wrong valve drawn the wrong way. Both
     halves of that mattered. WRONG VALVE: the trim here is an ED, sized
     from Catalog 12's ED rows, with ED travels and ED ports -- and it
     was being drawn inside another family's casting, whose proportions
     are simply different. WRONG WAY: the source was illustration art,
     drawn to look right rather than to be measured, and it showed --
     the trim column was short enough that a shut plug had 2.49 in above
     it against a rated travel of 3, so the archetype could not stroke
     its own valve.

     They are now traced from Figure 20 of D100390X012, the ED
     instruction manual, panel B -- a drafting section with a drawing
     number, of the right family, painted part by part and registered
     against a sourced length. See `trace/README.md` for the method and
     `trace/register.py` for the registration and its check.

     ALL OF THEM AT ONCE, AND THAT IS NOT TIDINESS. The plug, the cage
     and the seat ring are a matched set: the plug slides in the cage
     bore with a running clearance and lands on the seat. Swapping the
     plug alone would have put an ED plug inside an EWT cage -- not an
     improvement on either, but a valve that cannot be assembled, with
     two families arguing inside one drawing. The registered set
     assembles: plug 8.07 in across inside a cage bore of 8.12, the cage
     standing on a seat ring that straddles y = 0, the bonnet beginning
     above the cage.

     Coordinates are fractions of FACE-TO-FACE, origin at the centre of
     the port, y up -- unchanged, so `place()` still turns them into
     inches with one multiply. The datum is derived rather than eyeballed:
     x from the CAGE's centre of area, because a globe body is
     asymmetric by design and its bounding box does not straddle the
     stem; y from the seat ring's mid-height.

     WHAT IS STILL NOT A MEASUREMENT. The drawing is to scale and it is
     the right family, but nobody printed a dimension on it. The shapes
     are the draughtsman's, with his simplifications, and the cast
     contours are as he drew them. What the trace buys is that they are
     the contours of an ED rather than of something else.           */
  const ED_BODY = [
    [
      [-0.49218, -0.17587], [-0.49078, -0.23112], [-0.48029, -0.23112],
      [-0.4796, -0.23252], [-0.4775, -0.23112], [-0.474, -0.23531],
      [-0.4719, -0.23531], [-0.41246, -0.29476], [-0.41316, -0.29615],
      [-0.42225, -0.29615], [-0.42295, -0.29476], [-0.43624, -0.29476],
      [-0.43694, -0.29336], [-0.44883, -0.29336], [-0.44953, -0.29196],
      [-0.46141, -0.29196], [-0.46211, -0.29056], [-0.48099, -0.28916],
      [-0.48099, -0.35], [-0.38939, -0.35], [-0.38939, -0.2458],
      [-0.38099, -0.24231], [-0.38099, -0.23601], [-0.3796, -0.23531],
      [-0.3796, -0.23042], [-0.3782, -0.22972], [-0.3754, -0.21923],
      [-0.36211, -0.20455], [-0.36001, -0.20455], [-0.35932, -0.20175],
      [-0.35302, -0.19895], [-0.34953, -0.19476], [-0.34743, -0.19476],
      [-0.34393, -0.19056], [-0.33624, -0.18636], [-0.33134, -0.18077],
      [-0.32925, -0.18077], [-0.32155, -0.17378], [-0.31946, -0.17378],
      [-0.31736, -0.16958], [-0.31386, -0.16958], [-0.30477, -0.16119],
      [-0.29218, -0.15559], [-0.28449, -0.15559], [-0.2733, -0.16119],
      [-0.26981, -0.16469], [-0.26421, -0.17727], [-0.26421, -0.21853],
      [-0.26561, -0.21923], [-0.26561, -0.23112], [-0.26421, -0.23182],
      [-0.26421, -0.30105], [-0.24393, -0.30105], [-0.24323, -0.30944],
      [-0.24183, -0.31084], [-0.23274, -0.31084], [-0.23204, -0.31224],
      [-0.1712, -0.31224], [-0.1705, -0.31364], [-0.16281, -0.31364],
      [-0.16141, -0.31224], [-0.16071, -0.31364], [-0.01456, -0.31643],
      [-0.01456, -0.30874], [-0.01316, -0.30804], [-0.01456, -0.30664],
      [-0.01456, -0.29476], [-0.00687, -0.28986], [0.00362, -0.28986],
      [0.00432, -0.29126], [0.01341, -0.28986], [0.01411, -0.29126],
      [0.01971, -0.29196], [0.01691, -0.29336], [0.01831, -0.29615],
      [0.01691, -0.29755], [0.01691, -0.30105], [0.01831, -0.30175],
      [0.01691, -0.30455], [0.01691, -0.30804], [0.01831, -0.30874],
      [0.01691, -0.31014], [0.01691, -0.31364], [0.01831, -0.31434],
      [0.01691, -0.31923], [0.0288, -0.31923], [0.0295, -0.31643],
      [0.06656, -0.31643], [0.06726, -0.31503], [0.25397, -0.31084],
      [0.25537, -0.30944], [0.25537, -0.30175], [0.25747, -0.29965],
      [0.27635, -0.29965], [0.27635, -0.27517], [0.27915, -0.26958],
      [0.28684, -0.26189], [0.29453, -0.26049], [0.31901, -0.2479],
      [0.3225, -0.2479], [0.36656, -0.22413], [0.37845, -0.22413],
      [0.37915, -0.22552], [0.38264, -0.22552], [0.39033, -0.23322],
      [0.39313, -0.24371], [0.40152, -0.2458], [0.40152, -0.35],
      [0.49453, -0.35], [0.49453, -0.23182], [0.50432, -0.23112],
      [0.50572, -0.22972], [0.50572, -0.17308], [0.50432, -0.17448],
      [0.4246, -0.17448], [0.4232, -0.17587], [0.40922, -0.17587],
      [0.40782, -0.17727], [0.37985, -0.18147], [0.34628, -0.19266],
      [0.29313, -0.21923], [0.29033, -0.21923], [0.28054, -0.22483],
      [0.26026, -0.23182], [0.25887, -0.23392], [0.24558, -0.23741],
      [0.24138, -0.24021], [0.23789, -0.24021], [0.23719, -0.24161],
      [0.20852, -0.25], [0.20362, -0.2528], [0.19383, -0.2542],
      [0.18824, -0.25699], [0.16026, -0.26399], [0.15537, -0.26399],
      [0.15467, -0.26538], [0.14838, -0.26538], [0.14768, -0.26678],
      [0.13439, -0.26818], [0.13369, -0.26958], [0.1274, -0.26958],
      [0.1267, -0.27098], [0.10082, -0.27378], [0.10013, -0.27517],
      [0.08824, -0.27517], [0.08754, -0.27657], [0.05677, -0.27937],
      [0.03999, -0.27937], [0.03719, -0.28077], [-0.01246, -0.28077],
      [-0.01316, -0.27937], [-0.02505, -0.27937], [-0.02575, -0.27797],
      [-0.03904, -0.27657], [-0.06841, -0.26678], [-0.0726, -0.26678],
      [-0.09848, -0.2535], [-0.12575, -0.23462], [-0.15792, -0.20245],
      [-0.1761, -0.17587], [-0.18519, -0.15559], [-0.18799, -0.1528],
      [-0.18799, -0.1486], [-0.19358, -0.13601], [-0.19778, -0.11573],
      [-0.19918, -0.11503], [-0.20057, -0.10035], [-0.20197, -0.09965],
      [-0.20337, -0.07378], [-0.20197, -0.05699], [-0.19778, -0.0458],
      [-0.18589, -0.03252], [-0.1747, -0.02692], [-0.174, 0.00035],
      [-0.18379, 0.00105], [-0.18519, 0.00385], [-0.18379, 0.01993],
      [-0.19218, 0.01853], [-0.20827, 0.01014], [-0.21876, 0.00315],
      [-0.23134, -0.00944], [-0.23554, -0.01084], [-0.24463, -0.02413],
      [-0.25372, -0.03182], [-0.2761, -0.05699], [-0.2796, -0.06329],
      [-0.28869, -0.07098], [-0.31176, -0.09685], [-0.31316, -0.10105],
      [-0.32435, -0.11084], [-0.34813, -0.13881], [-0.35862, -0.1493],
      [-0.3782, -0.16329], [-0.39358, -0.17028], [-0.41036, -0.17448],
      [-0.41876, -0.17448], [-0.42015, -0.17587]
    ],
    [
      [-0.19918, 0.37657], [-0.20057, 0.37797], [-0.22225, 0.37797],
      [-0.22435, 0.38427], [-0.22435, 0.39266], [-0.22715, 0.39476],
      [-0.26981, 0.39476], [-0.2733, 0.39196], [-0.2761, 0.39336],
      [-0.30197, 0.39336], [-0.30197, 0.31434], [-0.30337, 0.31364],
      [-0.30477, 0.30315], [-0.31036, 0.29196], [-0.31316, 0.28986],
      [-0.33134, 0.2535], [-0.33134, 0.25], [-0.33974, 0.23252],
      [-0.33974, 0.22902], [-0.34253, 0.22413], [-0.34253, 0.21783],
      [-0.34533, 0.21224], [-0.35162, 0.20455], [-0.36001, 0.20035],
      [-0.36631, 0.20035], [-0.3733, 0.20315], [-0.38099, 0.21224],
      [-0.38239, 0.22552], [-0.39078, 0.22902], [-0.39078, 0.33182],
      [-0.48239, 0.33182], [-0.48379, 0.33042], [-0.48379, 0.21224],
      [-0.49218, 0.21154], [-0.49218, 0.20245], [-0.49358, 0.20175],
      [-0.49358, 0.15769], [-0.38449, 0.15769], [-0.36981, 0.15909],
      [-0.36911, 0.16049], [-0.35232, 0.16329], [-0.31946, 0.17867],
      [-0.30967, 0.18636], [-0.30617, 0.18706], [-0.29498, 0.19545],
      [-0.2754, 0.20664], [-0.26701, 0.21364], [-0.24953, 0.22343],
      [-0.24673, 0.22692], [-0.24183, 0.22762], [-0.24043, 0.23042],
      [-0.22994, 0.23601], [-0.21736, 0.2479], [-0.20897, 0.26469],
      [-0.20687, 0.27797], [-0.20757, 0.32483], [-0.19918, 0.34161]
    ],
    [
      [0.49173, 0.33601], [0.40852, 0.33601], [0.40782, 0.33462],
      [0.40013, 0.33462], [0.40013, 0.22902], [0.39313, 0.22692],
      [0.39033, 0.21643], [0.38754, 0.21573], [0.38404, 0.21154],
      [0.37705, 0.20874], [0.36936, 0.20874], [0.36236, 0.21154],
      [0.35607, 0.21783], [0.35607, 0.22133], [0.35327, 0.22483],
      [0.35187, 0.23252], [0.34908, 0.23601], [0.34908, 0.23951],
      [0.34628, 0.24301], [0.34348, 0.2535], [0.33509, 0.26818],
      [0.33229, 0.27727], [0.3267, 0.28217], [0.3267, 0.28706],
      [0.3211, 0.29336], [0.31971, 0.29965], [0.31691, 0.30175],
      [0.31691, 0.30524], [0.31411, 0.31014], [0.31411, 0.31643],
      [0.31271, 0.31713], [0.31271, 0.39476], [0.31131, 0.39615],
      [0.23649, 0.39615], [0.23369, 0.38007], [0.20992, 0.37937],
      [0.20852, 0.3458], [0.21551, 0.33042], [0.21551, 0.27448],
      [0.21831, 0.25979], [0.2267, 0.24371], [0.25327, 0.21573],
      [0.27145, 0.18916], [0.27425, 0.18217], [0.27425, 0.17727],
      [0.27565, 0.17657], [0.27635, 0.16119], [0.27425, 0.1493],
      [0.26936, 0.13741], [0.26306, 0.13112], [0.26166, 0.12552],
      [0.23929, 0.08916], [0.21971, 0.0528], [0.20642, 0.03671],
      [0.19663, 0.03322], [0.19663, 0.00315], [0.18614, 0.00035],
      [0.18614, -0.02063], [0.19873, -0.01713], [0.20642, -0.01294],
      [0.20782, -0.00944], [0.21411, -0.00874], [0.21691, -0.00594],
      [0.21971, -0.00594], [0.2204, -0.00245], [0.23159, 0.00734],
      [0.23229, 0.01014], [0.23159, 0.01294], [0.2288, 0.01364],
      [0.2295, 0.01643], [0.23859, 0.01783], [0.23929, 0.01923],
      [0.24068, 0.01783], [0.25117, 0.02273], [0.27145, 0.04441],
      [0.27775, 0.0479], [0.30432, 0.07168], [0.30922, 0.07797],
      [0.34138, 0.10455], [0.34838, 0.11294], [0.35467, 0.11643],
      [0.37495, 0.13531], [0.38754, 0.14231], [0.38894, 0.1451],
      [0.4225, 0.15629], [0.43929, 0.15769], [0.50432, 0.15699],
      [0.50572, 0.15909], [0.50432, 0.16049], [0.50432, 0.21294],
      [0.49313, 0.21364], [0.49313, 0.33462]
    ]
  ];

  /* ED_BONNET -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  const ED_BONNET = [
    [
      [0.04208, 0.78147], [0.03999, 0.77937], [0.04068, 0.73531],
      [0.03929, 0.73392], [0.04068, 0.58846], [0.03929, 0.58706],
      [0.03929, 0.57448], [0.03509, 0.57028], [0.0267, 0.56818],
      [0.0267, 0.42692], [0.03299, 0.42483], [0.05957, 0.42203],
      [0.06026, 0.42063], [0.07075, 0.41923], [0.09313, 0.40804],
      [0.11131, 0.38986], [0.11761, 0.38077], [0.11831, 0.37517],
      [0.13719, 0.37448], [0.14138, 0.38007], [0.14628, 0.38007],
      [0.14908, 0.38287], [0.14908, 0.39755], [0.15257, 0.40385],
      [0.18684, 0.40385], [0.18754, 0.40524], [0.19803, 0.40524],
      [0.20432, 0.40175], [0.20642, 0.38007], [0.23369, 0.38077],
      [0.23439, 0.39406], [0.23579, 0.39545], [0.23439, 0.39895],
      [0.23579, 0.39965], [0.23649, 0.40664], [0.31271, 0.40664],
      [0.31271, 0.47867], [0.2218, 0.47797], [0.21621, 0.48217],
      [0.21481, 0.48706], [0.16516, 0.48706], [0.16446, 0.49126],
      [0.15817, 0.49406], [0.14768, 0.50455], [0.14488, 0.51364],
      [0.14208, 0.51573], [0.14208, 0.51923], [0.13789, 0.52552],
      [0.13509, 0.53601], [0.13089, 0.54231], [0.1281, 0.5528],
      [0.1239, 0.55909], [0.1239, 0.56259], [0.1211, 0.56608],
      [0.11831, 0.57657], [0.11271, 0.58566], [0.11271, 0.58916],
      [0.10992, 0.59266], [0.10712, 0.60315], [0.10292, 0.60944],
      [0.09873, 0.62413], [0.09593, 0.62972], [0.09173, 0.63182],
      [0.09033, 0.66469], [0.09313, 0.67168], [0.09803, 0.67657],
      [0.10292, 0.67797], [0.10362, 0.68776], [0.11901, 0.68776],
      [0.1218, 0.68916], [0.15607, 0.68776], [0.15747, 0.68916],
      [0.15747, 0.72902], [0.15607, 0.73042], [0.14488, 0.73042],
      [0.14348, 0.72902], [0.10922, 0.73042], [0.10572, 0.73531],
      [0.10572, 0.77797], [0.09873, 0.78217], [0.07915, 0.78217],
      [0.07705, 0.78007], [0.07705, 0.7451], [0.07285, 0.74161],
      [0.07285, 0.71713], [0.06516, 0.71364], [0.05607, 0.71643],
      [0.05537, 0.73741], [0.05677, 0.74161], [0.05257, 0.7451],
      [0.05257, 0.7514], [0.05397, 0.7521], [0.05187, 0.78147]
    ],
    [
      [-0.03554, 0.78077], [-0.04673, 0.78147], [-0.04743, 0.7465],
      [-0.05162, 0.74161], [-0.05022, 0.73601], [-0.05022, 0.71853],
      [-0.05232, 0.71503], [-0.06491, 0.71434], [-0.06911, 0.71713],
      [-0.06771, 0.74161], [-0.0719, 0.7451], [-0.0719, 0.78007],
      [-0.074, 0.78217], [-0.09498, 0.78217], [-0.10057, 0.77657],
      [-0.10057, 0.73531], [-0.10407, 0.73042], [-0.11386, 0.72902],
      [-0.15092, 0.73042], [-0.15232, 0.72902], [-0.15232, 0.68776],
      [-0.10337, 0.68846], [-0.09918, 0.68566], [-0.09918, 0.67797],
      [-0.09428, 0.67657], [-0.08939, 0.67168], [-0.08939, 0.66818],
      [-0.08799, 0.66748], [-0.08799, 0.62622], [-0.09218, 0.62413],
      [-0.09498, 0.61853], [-0.09638, 0.61084], [-0.10477, 0.59476],
      [-0.10617, 0.58706], [-0.11036, 0.58077], [-0.11036, 0.57727],
      [-0.11316, 0.57378], [-0.11596, 0.56329], [-0.12715, 0.54021],
      [-0.12715, 0.53671], [-0.12994, 0.53322], [-0.13274, 0.52273],
      [-0.14393, 0.50175], [-0.15022, 0.49545], [-0.15932, 0.49126],
      [-0.16001, 0.48566], [-0.20407, 0.48566], [-0.20617, 0.47867],
      [-0.21176, 0.47867], [-0.21316, 0.47727], [-0.29918, 0.47727],
      [-0.30197, 0.47867], [-0.30197, 0.40524], [-0.22715, 0.40524],
      [-0.22505, 0.40315], [-0.22505, 0.39406], [-0.22225, 0.38287],
      [-0.19708, 0.40804], [-0.19498, 0.40804], [-0.19568, 0.40524],
      [-0.19288, 0.40385], [-0.14743, 0.40385], [-0.14253, 0.39895],
      [-0.14253, 0.37937], [-0.13064, 0.37867], [-0.12925, 0.37448],
      [-0.11316, 0.37448], [-0.10967, 0.38217], [-0.10197, 0.39266],
      [-0.09148, 0.40315], [-0.08099, 0.41084], [-0.05862, 0.42063],
      [-0.02155, 0.42692], [-0.02155, 0.56538], [-0.01946, 0.56608],
      [-0.01946, 0.57238], [-0.02015, 0.57098], [-0.02155, 0.57168],
      [-0.02015, 0.57448], [-0.02015, 0.57797], [-0.02155, 0.57867],
      [-0.02015, 0.58007], [-0.02015, 0.58497], [-0.02155, 0.58357],
      [-0.02645, 0.58497], [-0.02925, 0.58217], [-0.02994, 0.57238],
      [-0.03414, 0.57448], [-0.03414, 0.72972], [-0.03554, 0.73252]
    ]
  ];

  const ED_CAGE_L = [
    [-0.19708, 0.39336], [-0.19708, 0.34161], [-0.18939, 0.32692],
    [-0.18869, 0.17378], [-0.18729, 0.16958], [-0.18939, 0.16538],
    [-0.18869, 0.03951], [-0.18449, 0.03531], [-0.18379, 0.02622],
    [-0.16841, 0.02622], [-0.16491, 0.03042], [-0.16141, 0.03112],
    [-0.16071, 0.13601], [-0.16211, 0.17448], [-0.16141, 0.19196],
    [-0.16001, 0.19336], [-0.16001, 0.21503], [-0.16141, 0.21643],
    [-0.16281, 0.28636], [-0.16211, 0.3493], [-0.16071, 0.3507],
    [-0.01806, 0.3507], [-0.01736, 0.35769], [-0.01806, 0.35979],
    [-0.02365, 0.35979], [-0.02435, 0.35839], [-0.02715, 0.35979],
    [-0.04883, 0.35979], [-0.04953, 0.35839], [-0.12715, 0.35839],
    [-0.12785, 0.35979], [-0.13414, 0.35979], [-0.13484, 0.35839],
    [-0.13974, 0.35839], [-0.14043, 0.35979], [-0.14673, 0.35979],
    [-0.14743, 0.35839], [-0.1761, 0.35839], [-0.18099, 0.36329],
    [-0.18099, 0.37238], [-0.18659, 0.37448], [-0.18519, 0.37587],
    [-0.18659, 0.37727], [-0.18659, 0.39336]
  ];

  const ED_CAGE_R = [
    [0.20362, 0.39615], [0.19733, 0.39615], [0.19733, 0.38287],
    [0.19033, 0.37867], [0.19033, 0.36189], [0.18684, 0.35979],
    [0.0246, 0.35979], [0.0239, 0.3514], [0.03159, 0.3507],
    [0.17075, 0.3514], [0.17215, 0.35], [0.17215, 0.2549],
    [0.17355, 0.22972], [0.18754, 0.21713], [0.18124, 0.21154],
    [0.17215, 0.20874], [0.17215, 0.19615], [0.17355, 0.19336],
    [0.17355, 0.03112], [0.17705, 0.03042], [0.17775, 0.02762],
    [0.19523, 0.02762], [0.19593, 0.03601], [0.19943, 0.04021],
    [0.19803, 0.33042], [0.20222, 0.33881], [0.20502, 0.34091],
    [0.20642, 0.3458], [0.20642, 0.37937]
  ];

  const EWT_CHAMBER_L = [
    [-0.17616, 0.23079], [-0.18314, 0.22353], [-0.18684, 0.21987],
    [-0.18957, 0.21738], [-0.19212, 0.21527], [-0.19447, 0.21353],
    [-0.19691, 0.2119], [-0.19941, 0.21037], [-0.20199, 0.20894],
    [-0.20464, 0.20762], [-0.20942, 0.20581], [-0.21633, 0.20351],
    [-0.22537, 0.20072], [-0.23655, 0.19745], [-0.24986, 0.1937],
    [-0.26529, 0.18946], [-0.28286, 0.18473], [-0.30257, 0.17951],
    [-0.32181, 0.17495], [-0.3406, 0.17104], [-0.35894, 0.16778],
    [-0.37682, 0.16517], [-0.39625, 0.16321], [-0.41724, 0.16191],
    [-0.4458, 0.16126], [-0.5, 0.16126], [-0.50335, 0.16545],
    [-0.50497, 0.16747], [-0.50596, 0.16871], [-0.50683, 0.1698],
    [-0.50795, 0.17119], [-0.52248, 0.17119], [-0.52947, 0.17119],
    [-0.53377, 0.17119], [-0.53754, 0.17119], [-0.54238, 0.17119],
    [-0.54238, 0.02591], [-0.54238, -0.04404], [-0.54238, -0.08709],
    [-0.54238, -0.12475], [-0.54238, -0.17318], [-0.5273, -0.17318],
    [-0.51987, -0.17303], [-0.51507, -0.17274], [-0.51122, -0.17231],
    [-0.50832, -0.17173], [-0.50582, -0.17101], [-0.5037, -0.17014],
    [-0.50199, -0.16912], [-0.50066, -0.16796], [-0.49803, -0.16695],
    [-0.4941, -0.16608], [-0.48887, -0.16536], [-0.48233, -0.16478],
    [-0.47448, -0.16434], [-0.46534, -0.16405], [-0.45488, -0.16391],
    [-0.44313, -0.16391], [-0.43247, -0.1637], [-0.42291, -0.16329],
    [-0.41445, -0.16267], [-0.40708, -0.16184], [-0.40081, -0.1608],
    [-0.39563, -0.15956], [-0.39156, -0.15811], [-0.38858, -0.15646],
    [-0.38504, -0.15426], [-0.38094, -0.15153], [-0.37628, -0.14826],
    [-0.37107, -0.14445], [-0.36529, -0.14011], [-0.35896, -0.13522],
    [-0.35207, -0.1298], [-0.34462, -0.12384], [-0.33802, -0.11863],
    [-0.33226, -0.11416], [-0.32736, -0.11043], [-0.3233, -0.10745],
    [-0.32001, -0.10522], [-0.31749, -0.10373], [-0.31548, -0.10298],
    [-0.31325, -0.10298], [-0.31269, -0.10075], [-0.312, -0.09938],
    [-0.31101, -0.09814], [-0.30964, -0.09677], [-0.30791, -0.09528],
    [-0.30577, -0.09358], [-0.30325, -0.09168], [-0.30033, -0.08957],
    [-0.29702, -0.08725], [-0.29392, -0.085], [-0.29102, -0.0828],
    [-0.28833, -0.08067], [-0.28584, -0.0786], [-0.28357, -0.07659],
    [-0.2815, -0.07465], [-0.27964, -0.07276], [-0.27798, -0.07094],
    [-0.27564, -0.06869], [-0.27262, -0.066], [-0.26892, -0.06287],
    [-0.26453, -0.05931], [-0.25946, -0.05532], [-0.2537, -0.05089],
    [-0.24727, -0.04603], [-0.24015, -0.04073], [-0.23367, -0.0358],
    [-0.22784, -0.03125], [-0.22264, -0.02707], [-0.21809, -0.02326],
    [-0.21418, -0.01983], [-0.21091, -0.01676], [-0.20828, -0.01407],
    [-0.20629, -0.01175], [-0.20412, -0.00954], [-0.20176, -0.00743],
    [-0.19921, -0.00542], [-0.19648, -0.00352], [-0.19313, -0.00153],
    [-0.18916, 0.00054], [-0.18326, 0.00325], [-0.17152, 0.00828],
    [-0.17152, 0.01219], [-0.1716, 0.01418], [-0.17174, 0.01554],
    [-0.17196, 0.01672], [-0.17225, 0.01772], [-0.17261, 0.01867],
    [-0.17304, 0.01958], [-0.17355, 0.02045], [-0.17413, 0.02127],
    [-0.17464, 0.02523], [-0.17507, 0.03231], [-0.17543, 0.04251],
    [-0.17572, 0.05584], [-0.17594, 0.07552], [-0.17609, 0.10155],
    [-0.17616, 0.14363]
  ];

  const EWT_CHAMBER_R = [
    [0.50927, 0.17914], [0.50424, 0.17299], [0.50182, 0.17003],
    [0.50033, 0.16821], [0.49903, 0.16662], [0.49735, 0.16457],
    [0.46215, 0.16457], [0.44456, 0.16428], [0.43284, 0.1637],
    [0.4231, 0.16283], [0.41531, 0.16167], [0.4082, 0.16022],
    [0.40174, 0.15849], [0.39594, 0.15646], [0.39081, 0.15414],
    [0.38572, 0.15157], [0.38067, 0.14876], [0.37566, 0.1457],
    [0.3707, 0.14238], [0.36577, 0.13882], [0.36089, 0.13502],
    [0.35604, 0.13096], [0.35124, 0.12666], [0.34545, 0.12105],
    [0.33866, 0.11413], [0.33088, 0.10592], [0.3221, 0.0964],
    [0.31233, 0.08558], [0.30157, 0.07345], [0.28982, 0.06002],
    [0.27707, 0.04528], [0.26552, 0.03209], [0.25517, 0.02044],
    [0.24603, 0.01033], [0.23808, 0.00176], [0.23133, -0.00527],
    [0.22579, -0.01075], [0.22144, -0.01469], [0.21829, -0.01709],
    [0.20995, -0.01919], [0.19642, -0.021], [0.17769, -0.0225],
    [0.15377, -0.0237], [0.11906, -0.0246], [0.07357, -0.0252],
    [0.00054, -0.0255], [-0.15033, -0.0255], [-0.15592, -0.03416],
    [-0.15861, -0.03928], [-0.16026, -0.04375], [-0.16151, -0.04853],
    [-0.16233, -0.05362], [-0.16296, -0.05934], [-0.16337, -0.0657],
    [-0.16358, -0.07268], [-0.16358, -0.0803], [-0.16343, -0.08764],
    [-0.16314, -0.09472], [-0.16271, -0.10153], [-0.16213, -0.10807],
    [-0.1614, -0.11434], [-0.16053, -0.12034], [-0.15952, -0.12608],
    [-0.15836, -0.13154], [-0.15712, -0.1368], [-0.15579, -0.14185],
    [-0.15439, -0.14669], [-0.1529, -0.15132], [-0.15132, -0.15575],
    [-0.14967, -0.15998], [-0.14793, -0.16399], [-0.14611, -0.1678],
    [-0.14389, -0.17183], [-0.14129, -0.1761], [-0.13829, -0.18059],
    [-0.13489, -0.18531], [-0.13111, -0.19025], [-0.12692, -0.19543],
    [-0.12235, -0.20083], [-0.11738, -0.20646], [-0.11258, -0.21165],
    [-0.10795, -0.21641], [-0.10348, -0.22074], [-0.09917, -0.22463],
    [-0.09503, -0.22808], [-0.09106, -0.23111], [-0.08725, -0.23369],
    [-0.08361, -0.23584], [-0.07974, -0.23796], [-0.07564, -0.24002],
    [-0.07132, -0.24205], [-0.06676, -0.24404], [-0.06198, -0.24599],
    [-0.05697, -0.24789], [-0.05174, -0.24975], [-0.04627, -0.25157],
    [-0.04131, -0.25317], [-0.03684, -0.25453], [-0.03286, -0.25567],
    [-0.02939, -0.25658], [-0.02641, -0.25726], [-0.02392, -0.25772],
    [-0.02194, -0.25795], [-0.02045, -0.25795], [-0.01904, -0.25803],
    [-0.01772, -0.2582], [-0.01647, -0.25844], [-0.01531, -0.25877],
    [-0.01424, -0.25919], [-0.01325, -0.25969], [-0.01233, -0.26026],
    [-0.01151, -0.26093], [-0.01053, -0.26151], [-0.00942, -0.262],
    [-0.00815, -0.26242], [-0.00675, -0.26275], [-0.00519, -0.263],
    [-0.0035, -0.26316], [-0.00166, -0.26325], [0.00033, -0.26325],
    [0.00226, -0.26314], [0.00412, -0.26293], [0.00592, -0.26262],
    [0.00766, -0.26221], [0.00933, -0.26169], [0.01095, -0.26107],
    [0.0125, -0.26035], [0.01399, -0.25952], [0.01604, -0.2588],
    [0.01865, -0.25817], [0.02181, -0.25766], [0.02554, -0.25724],
    [0.02982, -0.25693], [0.03466, -0.25673], [0.04007, -0.25662],
    [0.04603, -0.25662], [0.05221, -0.25642], [0.05863, -0.256],
    [0.06527, -0.25538], [0.07214, -0.25455], [0.07924, -0.25352],
    [0.08657, -0.25228], [0.09412, -0.25083], [0.1019, -0.24917],
    [0.11227, -0.24649], [0.12523, -0.24279], [0.14077, -0.23806],
    [0.1589, -0.23231], [0.17962, -0.22553], [0.20292, -0.21773],
    [0.22881, -0.2089], [0.25728, -0.19905], [0.28458, -0.19043],
    [0.3107, -0.18304], [0.33564, -0.17688], [0.3594, -0.17196],
    [0.38435, -0.16826], [0.41051, -0.1658], [0.44501, -0.16457],
    [0.50927, -0.16457], [0.50927, -0.01957], [0.50927, 0.05025],
    [0.50927, 0.09321], [0.50927, 0.13081]
  ];

  const ED_PLUG = [
    [
      [-0.08169, 0.22552], [-0.08169, 0.1451], [-0.01176, 0.1458],
      [-0.01176, 0.1514], [-0.01456, 0.1528], [-0.01106, 0.15629],
      [0.00082, 0.15629], [-0.00057, 0.16189], [-0.00617, 0.17028],
      [-0.00057, 0.17378], [-0.00127, 0.17797], [-0.01526, 0.20035],
      [-0.01456, 0.20385], [-0.01946, 0.20734], [-0.02225, 0.21294],
      [-0.03064, 0.20874], [-0.03694, 0.21643], [-0.03974, 0.22203],
      [-0.03834, 0.22413], [-0.04183, 0.22552]
    ],
    [
      [-0.15722, 0.22552], [-0.16071, 0.22273], [-0.16071, 0.21643],
      [-0.15932, 0.21503], [-0.14113, 0.21434], [-0.14113, 0.19545],
      [-0.14813, 0.19476], [-0.14883, 0.19336], [-0.15932, 0.19336],
      [-0.16071, 0.19196], [-0.16071, 0.03112], [-0.16211, 0.02972],
      [-0.16211, 0.02273], [-0.15862, 0.01923], [-0.14253, 0.01783],
      [-0.14183, 0.14021], [-0.13834, 0.14371], [-0.13414, 0.14441],
      [-0.13414, 0.22552]
    ],
    [
      [0.14348, 0.22622], [0.14348, 0.1458], [0.14698, 0.1458],
      [0.15117, 0.14021], [0.15187, 0.01923], [0.17145, 0.01853],
      [0.17425, 0.02343], [0.17425, 0.02972], [0.17285, 0.03112],
      [0.17285, 0.19336], [0.17145, 0.19615], [0.15257, 0.19615],
      [0.15187, 0.21434], [0.15537, 0.21643], [0.17285, 0.21643],
      [0.17285, 0.22413], [0.16726, 0.22483], [0.16656, 0.22622]
    ],
    [
      [0.0225, 0.22692], [0.0225, 0.22063], [0.01971, 0.21853],
      [0.01971, 0.21364], [0.0211, 0.21294], [0.01971, 0.21154],
      [0.01971, 0.20524], [0.0239, 0.20175], [0.01971, 0.19755],
      [0.01971, 0.19266], [0.0211, 0.19196], [0.01971, 0.19056],
      [0.01971, 0.18427], [0.0211, 0.18357], [0.01971, 0.18217],
      [0.01971, 0.17378], [0.0218, 0.17028], [0.0204, 0.16678],
      [0.0211, 0.16049], [0.01761, 0.15699], [0.00292, 0.15769],
      [0.00432, 0.1542], [0.00432, 0.1465], [0.00292, 0.1458],
      [0.09103, 0.1451], [0.09103, 0.22622], [0.0253, 0.22552]
    ]
  ];

  const ED_SEAT = [
    [-0.18449, 0.01573], [-0.18449, 0.00385], [-0.18029, 0.00105],
    [-0.1705, 0.00035], [-0.1705, -0.02273], [-0.16421, -0.02273],
    [-0.15932, -0.01154], [-0.14883, -0.01154], [-0.14813, -0.01294],
    [0.00222, -0.01154], [0.00292, -0.01294], [0.00642, -0.01084],
    [0.17145, -0.01014], [0.17635, -0.01783], [0.17705, -0.02203],
    [0.18124, -0.02203], [0.18264, -0.02063], [0.18264, 0.00175],
    [0.19593, 0.00315], [0.19523, 0.01713], [0.17635, 0.01713],
    [0.17635, 0.01503], [0.17355, 0.01434], [0.17285, 0.01853],
    [-0.15022, 0.01713], [-0.15862, 0.01853], [-0.16071, 0.02203],
    [-0.16351, 0.02273], [-0.16421, 0.02133], [-0.16771, 0.02133],
    [-0.16981, 0.01713], [-0.18309, 0.01713]
  ];

  const EWT_SILHOUETTE = [
    [-0.49735, 0.34007], [-0.49735, 0.25513], [-0.49735, 0.22682],
    [-0.5043, 0.22384], [-0.50662, 0.22285], [-0.50662, 0.1846],
    [-0.50662, 0.17185], [-0.53344, 0.17185], [-0.54238, 0.17185],
    [-0.54238, -0.08742], [-0.54238, -0.17384], [-0.51457, -0.17384],
    [-0.5053, -0.17384], [-0.5053, -0.2101], [-0.5053, -0.22219],
    [-0.49586, -0.22616], [-0.49272, -0.22748], [-0.49272, -0.31937],
    [-0.49272, -0.35], [-0.41871, -0.35], [-0.39404, -0.35],
    [-0.39404, -0.27301], [-0.39404, -0.24735], [-0.38311, -0.24238],
    [-0.3745, -0.23113], [-0.3596, -0.20232], [-0.30497, -0.20232],
    [-0.28675, -0.20232], [-0.27583, -0.22219], [-0.27219, -0.24421],
    [-0.27219, -0.2904], [-0.25728, -0.2904], [-0.25232, -0.2904],
    [-0.25033, -0.29884], [-0.24967, -0.30166], [0.0394, -0.29967],
    [0.16623, -0.29901], [0.25762, -0.29901], [0.2596, -0.29007],
    [0.26026, -0.28709], [0.27417, -0.2851], [0.27881, -0.28444],
    [0.27881, -0.25861], [0.28278, -0.24636], [0.29073, -0.23907],
    [0.29934, -0.23344], [0.30861, -0.22947], [0.33046, -0.22748],
    [0.38212, -0.22748], [0.3851, -0.23344], [0.3894, -0.23709],
    [0.39934, -0.24205], [0.39934, -0.31656], [0.39934, -0.34139],
    [0.47185, -0.34139], [0.49603, -0.34139], [0.49603, -0.24801],
    [0.49603, -0.21689], [0.50497, -0.21589], [0.50795, -0.21556],
    [0.50795, 0.08046], [0.50795, 0.17914], [0.50596, 0.18013],
    [0.5053, 0.18046], [0.5053, 0.21623], [0.5053, 0.22815],
    [0.49586, 0.23212], [0.49272, 0.23344], [0.49272, 0.31838],
    [0.49272, 0.34669], [0.41871, 0.34669], [0.39404, 0.34669],
    [0.39404, 0.2697], [0.39404, 0.24404], [0.38609, 0.24007],
    [0.38344, 0.23874], [0.38245, 0.23079], [0.38212, 0.22815],
    [0.33146, 0.22815], [0.31457, 0.22815], [0.29768, 0.24901],
    [0.29205, 0.25894], [0.29205, 0.2649], [0.28609, 0.27351],
    [0.27417, 0.28477], [0.26689, 0.29735], [0.26424, 0.31126],
    [0.26291, 0.33874], [0.26291, 0.40033], [0.19934, 0.40033],
    [0.17815, 0.40033], [0.17715, 0.40679], [0.17682, 0.40894],
    [0.1351, 0.40894], [0.11573, 0.41275], [0.09934, 0.42417],
    [0.09934, 0.46192], [0.09934, 0.4745], [0.08692, 0.4745],
    [0.08096, 0.47583], [0.0755, 0.4798], [0.0755, 0.51854],
    [0.0755, 0.53146], [0.09685, 0.53146], [0.10397, 0.53146],
    [0.10397, 0.55629], [0.10397, 0.56457], [0.06424, 0.56457],
    [0.05099, 0.56457], [0.05099, 0.54123], [0.05099, 0.53344],
    [0.03162, 0.53344], [0.02517, 0.53344], [0.02517, 0.43063],
    [0.02285, 0.39371], [0.01821, 0.38841], [0.01589, 0.37947],
    [0.01589, 0.3606], [-0.00745, 0.3606], [-0.01523, 0.3606],
    [-0.01722, 0.37947], [-0.0202, 0.38742], [-0.02715, 0.39238],
    [-0.02715, 0.51258], [-0.02715, 0.55265], [-0.04603, 0.55265],
    [-0.05232, 0.55265], [-0.0543, 0.5606], [-0.05497, 0.56325],
    [-0.0947, 0.56325], [-0.10795, 0.56325], [-0.10795, 0.53692],
    [-0.10795, 0.52815], [-0.08609, 0.52815], [-0.07881, 0.52815],
    [-0.07881, 0.49089], [-0.08079, 0.47666], [-0.08477, 0.47301],
    [-0.09023, 0.47119], [-0.10066, 0.47119], [-0.10066, 0.43593],
    [-0.10546, 0.4197], [-0.11507, 0.41076], [-0.1351, 0.40629],
    [-0.18079, 0.40629], [-0.18477, 0.39785], [-0.18609, 0.39503],
    [-0.2457, 0.39503], [-0.26556, 0.39503], [-0.26556, 0.33245],
    [-0.26689, 0.30662], [-0.26954, 0.29669], [-0.28245, 0.27682],
    [-0.31722, 0.23212], [-0.36788, 0.23212], [-0.38791, 0.23411],
    [-0.39735, 0.24007], [-0.39735, 0.31507], [-0.39735, 0.34007],
    [-0.47235, 0.34007]
  ];
  const GLOBE = {
    /* Cv is a flow coefficient, not an area, and the step between them
       is a discharge coefficient. Cv = 37.97 * Cd * A for A in square
       inches -- water, one psi, straight from the orifice equation and
       the definition of Cv. Milled cage windows run around 0.8 to 0.9;
       0.85 is the middle of that and it is a CONVENTION, named here
       because it is the one number between the published curve and a
       real area. It scales every area equally, so it cannot change the
       SHAPE of the characteristic, only how open the valve is said to
       be at a given travel. */
    dischargeCoef: 0.85,
    wallThk:       0.16,   // casting wall, x port dia
    /* ---- SEVEN MORE RETIRED, 2026-10-12, same cause --------------
       `bodyRise`, `bodyDrop`, `cageWall`, `cageBottom`, `cageTopBand`,
       `windowBand` and `throatFlare` described a globe valve as
       proportions of its port, back when that was the only way to
       draw one. The chambers, the cage walls and the window band now
       come off traced outlines, so none of them has decided anything
       for some time -- and the test below, which reads this block and
       checks each key is consumed, found all seven at once.

       Twelve dead conventions in one block is not twelve oversights.
       It is what happens when a layer is rebuilt from measurement
       underneath a vocabulary that was invented for estimation, and
       the vocabulary is left in place because deleting comments feels
       like losing something. What was actually lost is the ability to
       tell, at a glance, which numbers in this block still matter. */
    /* ---- FIVE CONVENTIONS RETIRED HERE, 2026-10-12 ---------------
       `plugHead`, `sealThk`, `seatThk`, `balanceDia` and `stemDia` all
       sat in this block, declared, commented, and read by nothing --
       checked: zero occurrences of `G.<name>` in this file. They are
       the same failure the window count was deleted for, and the
       reason is the same: each was SUPERSEDED and nobody removed it.

       The plug, the seal and the seat ring come off a traced outline,
       so three proportions of the port no longer decide their shape.
       The stem is better than that -- `part.dims.stem`, a catalogue
       dimension that the catalogue refuses to load unless it matches
       what its document printed. A convention sitting beside a sourced
       value is worse than clutter: it is a second answer to a question
       that already has a sourced one, waiting for somebody to reach
       for the wrong one.

       What WAS live here was unnamed, which is the same problem from
       the other end -- `0.26` and `0.14` hardcoded inside the plug.
       Those are conventions, so they are named below and read. */
    /* ---- WINDOW COUNT AND CLOCKING: CONVENTIONS, DECLARED -------
       Nothing in the Source Library publishes how many windows an ED
       cage has. Catalog 12 gives Cv at every 10% of travel, and the
       derivative of that curve gives the TOTAL window width at each
       height summed over all of them -- `trim.widthProfile`, whose own
       `means` string says exactly that. One number it cannot give is
       how that total is divided up. Six narrow windows and four wide
       ones integrate to the same curve and flow the same.

       The count was once declared here as 6 and then removed, rightly,
       because nothing read it: a convention nobody consumes is not a
       convention, it is a comment. It comes back only because it now
       has work to do -- `cageWindows()` divides the sourced total area
       by it to get ONE window's width, and decides from the clocking
       which azimuths a longitudinal section actually cuts through.

       WHERE 6 COMES FROM, and what it is not. Figure 3.37 of the
       Control Valve Handbook photographs three cages side by side;
       the equal-percentage one shows about six windows and the linear
       one nearer four. That is an observation off a photograph of a
       different valve, not a published figure for an ED, and it is a
       design variable per style and size rather than a constant. It
       is recorded as a convention and it must be overridable, which
       is why it is a spec input and not a literal.

       NO ALTERNATING SIZES. There was a claim here once that cage
       windows alternate large and small, cited to that same Figure
       3.37 -- and that figure shows three DIFFERENT cages, not one
       cage with two window sizes. The apparent two widths on a single
       cage in that photograph is foreshortening: a cylinder shot from
       outside shows the window facing the lens at full width and the
       ones a sixth of a turn away as slits. Equal windows until
       something we hold says otherwise. */
    windowCount:   6,      // CONVENTION. Not published for an ED.
    windowClockDeg: 0,     // CONVENTION. Rotational phase of window 0
                           // about the stem axis, measured from the
                           // section plane. 0 puts a window centre
                           // dead on the near cut.
    balanceHoles:  4,      // through the plug head, balanced trim only
    balanceBore:   0.26,   // CONVENTION, x plug RADIUS. Was hardcoded in
                           // plugAt as 0.26 while a dead `balanceDia` of
                           // 0.13 x port sat in this block claiming to
                           // be the one. Same number by a different
                           // route on a plug that fills its port; the
                           // point is that the one being used is the one
                           // written down. Nothing held dimensions a
                           // balance hole.
    sealBand:      0.14,   // CONVENTION, x plug HEIGHT. The piston-ring
                           // / U-seal groove. Also previously hardcoded.
  };

  /* A cubic Bezier, sampled. The cast sweeps are curves and four points
     do not read as a casting; the curve is the convention, the
     dimensions it runs between are not. */
  function bez(p0, p1, p2, p3, n) {
    const out = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n, u = 1 - t;
      out.push([
        u*u*u*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t*t*t*p3[0],
        u*u*u*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t*t*t*p3[1],
      ]);
    }
    return out;
  }
  const push = (ring, pts) => { for (const q of pts) ring.push(q); return ring; };

  /* ---- a cage window ---------------------------------------------
     The outline comes from the width profile: at height h up the band
     the window is profile(h) of its widest. Feed it the profile derived
     from the published Cv curve and the drawn shape is the
     manufacturer's rather than an illustrator's.

     NO CLAIM ABOUT ALTERNATING SIZES. There was one here, cited to
     Figure 3.37 of the Control Valve Handbook, and that figure shows
     three different cages rather than one cage with two window
     sizes. Nothing we hold publishes it, so it is not drawn. */
  /* THE PROFILE'S STATIONS ARE BAND MIDPOINTS, and reading them as if
     they were evenly spaced from 0 to 1 shifts the whole window half a
     band toward the bottom. `trim.widthProfile` reports them at 5, 15,
     ... 95 percent for exactly this reason; honouring that here is what
     makes the drawn window and the published Cv agree.

     It feeds the AREA. It once also fed a window outline, and the
     comment here said "one function, used by BOTH" for exactly the
     right reason -- a window drawn from one rule and measured by
     another is a window whose picture and whose number are about
     different objects. That outline function was superseded and left
     uncalled; the principle stands and is the reason this is the only
     reader of the profile's stations. */
  /* AND THE DROOP AT THE TOP IS NOT THE END OF THE WINDOW. Every
     measured width profile sags in its last band, and that was once
     read as the window FINISHING before the plug did -- a `windowBand`
     of 0.88 rather than 1.00. It is the wrong reading and the
     closed-loop test caught it 13.9 points out: the droop means the
     window gets NARROWER toward the top, not that it stops. A real
     cage does need solid metal above its window to carry the bonnet
     load, but that band sits ABOVE the window rather than eating into
     it. Recorded here, where the profile is read, because the
     convention that used to carry this note has been retired. */
  function widthAt(prof, h) {
    const n = prof.length;
    const j = h * n - 0.5;                 /* station i sits at (i+0.5)/n */
    if (j <= 0) return prof[0];
    if (j >= n - 1) return prof[n - 1];
    const lo = Math.floor(j);
    return prof[lo] + (j - lo) * (prof[lo + 1] - prof[lo]);
  }

  /* ---- how one cage's windows sit around it, and what a cut sees ---

     Takes the SOURCED total open area and the CONVENTION count, and
     answers two questions the section drawing cannot answer for
     itself.

     ONE WINDOW'S WIDTH. The area is real: Cv over 37.97 Cd, and the
     profile says how it is distributed up the band. Divided by the
     count it gives the circumferential width of a single window,
     which is the quantity that decides whether a cage is six slots or
     four ports -- visibly different objects that the Cv curve alone
     cannot tell apart.

     WHAT THE SECTION CUTS. A longitudinal section through the stem
     axis cuts the cage wall at exactly two azimuths, 0 and 180. With
     N windows evenly spaced at 360/N apart, whether each of those two
     cuts lands in a window or in solid metal depends on N and on the
     clocking -- and FOR ODD N THE TWO SIDES CANNOT MATCH, because
     opposite azimuths are half a turn apart and half a turn is never
     a whole number of window pitches. That is the left-right
     asymmetry the Pro Chrome plan calls for, and it is a consequence
     of the count rather than a drawing flourish.

     Windows the cut misses are still visible in a cutaway, on the far
     wall, and they are foreshortened: a window at azimuth theta
     presents cos(theta) of its width to the viewer. That factor is
     returned per window rather than applied, because whether a
     renderer wants it is a chrome decision.                        */
  function cageWindows(spec) {
    const count = spec.count === undefined ? GLOBE.windowCount : spec.count;
    if (!(Number.isInteger(count) && count >= 1))
      throw new Error('geometry.cageWindows: count must be a whole number ' +
        'of windows, at least one; got ' + JSON.stringify(spec.count) +
        '. It is a CONVENTION -- nothing held publishes it for an ED -- ' +
        'but it is still a count of real openings.');
    if (!(spec.openAreaIn2 > 0))
      throw new Error('geometry.cageWindows: openAreaIn2 must be the ' +
        'positive total flow area of ALL windows, from the Cv curve. ' +
        'The count divides a sourced area; it does not invent one.');
    if (!(spec.bandHeightIn > 0))
      throw new Error('geometry.cageWindows: bandHeightIn must be the ' +
        'height of the window band, positive.');
    const prof = spec.widthProfile;
    if (!Array.isArray(prof) || prof.length < 2)
      throw new Error('geometry.cageWindows: widthProfile must be the ' +
        'normalised total-width profile, at least two stations.');

    const clock = spec.clockDeg === undefined
      ? GLOBE.windowClockDeg : spec.clockDeg;
    const pitch = 360 / count;

    /* Mean of the profile over the band, honouring that its stations
       are band midpoints -- the same reading `widthAt` uses, because a
       window measured by one rule and drawn by another is two objects. */
    let mean = 0;
    for (let i = 0; i < prof.length; i++) mean += prof[i];
    mean /= prof.length;

    /* area = count * widest * mean * bandHeight  ->  widest */
    const widest = spec.openAreaIn2 / (count * mean * spec.bandHeightIn);

    const half = (a) => {
      let d = ((a % 360) + 360) % 360;
      return d > 180 ? 360 - d : d;               /* 0..180 from azimuth 0 */
    };
    const wins = [];
    for (let i = 0; i < count; i++) {
      const az = ((clock + i * pitch) % 360 + 360) % 360;
      const th = az * Math.PI / 180;
      wins.push(Object.freeze({
        index: i, azimuthDeg: az,
        offNearCutDeg: half(az), offFarCutDeg: half(az - 180),
        foreshorten: Math.abs(Math.cos(th)),
      }));
    }

    /* Does a cut at this azimuth land inside a window? The window
       subtends widest/(pi*D) of a turn about the axis. */
    const circumference = Math.PI * spec.cageBoreIn;
    const subtendDeg = circumference > 0
      ? 360 * widest / circumference : 0;
    const cutAt = (azimuth) => {
      let best = null;
      for (const w of wins) {
        let d = Math.abs(((w.azimuthDeg - azimuth) % 360 + 360) % 360);
        if (d > 180) d = 360 - d;
        if (best === null || d < best.offDeg)
          best = { index: w.index, offDeg: d };
      }
      const open = best.offDeg <= subtendDeg / 2;
      return Object.freeze({
        through: open, window: open ? best.index : null,
        offCentreDeg: best.offDeg,
        /* how far across the window the cut passes, -1..1, 0 dead centre */
        acrossWindow: subtendDeg > 0
          ? Math.max(-1, Math.min(1, best.offDeg / (subtendDeg / 2))) : 1,
      });
    };

    const near = cutAt(0), far = cutAt(180);
    return Object.freeze({
      count: count, clockDeg: clock, pitchDeg: pitch,
      widestWidthIn: widest, subtendDeg: subtendDeg,
      windows: Object.freeze(wins),
      nearCut: near, farCut: far,
      symmetric: near.through === far.through,
      declared:
        'Window COUNT and CLOCKING are conventions. Nothing in the Source '
      + 'Library publishes either for an ED cage; the count is an '
      + 'observation off a photograph of a different valve (Control Valve '
      + 'Handbook Fig 3.37, about six on the equal-percentage cage) and it '
      + 'is a design variable per style and size. The total open area is '
      + 'NOT a convention -- it is the published Cv curve over 37.97 Cd -- '
      + 'so the count changes how the area is divided and never how much '
      + 'there is. Windows are equal in size: the alternating-size claim '
      + 'that used to sit here misread a photograph of three different '
      + 'cages as one cage, and the two apparent widths are foreshortening.',
    });
  }

  /* `cageWindow()` STOOD HERE AND WAS NEVER CALLED. It drew a window
     outline shaped by the width profile -- the derivative of the
     published Cv curve -- which is the right idea and was superseded:
     the window a section cuts is the WALL at each height, found by
     `windowOf` from the traced cage, and it is the full height of the
     band rather than a profile-shaped notch. The profile still decides
     the AREA, which is what it is good for. A drawing function nobody
     calls is the same defect as a convention nobody reads, and it was
     found the same way. */

  function extentOfRings(rings) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const r of rings)
      for (const q of r) {
        if (q[0] < x0) x0 = q[0];
        if (q[0] > x1) x1 = q[0];
        if (q[1] < y0) y0 = q[1];
        if (q[1] > y1) y1 = q[1];
      }
    return { x0: x0, y0: y0, x1: x1, y1: y1 };
  }

  function globeValve(spec) {
    if (!spec || !spec.part || !spec.part.dims)
      throw new Error('geometry.globeValve: expected {part} to be a ' +
        'catalogue valve row -- it carries the port diameter and the ' +
        'rated travel, and neither is guessable.');
    const part = spec.part;
    const d = part.dims.port, travel = part.dims.travel;
    if (!(d > 0) || !(travel > 0))
      throw new Error('geometry.globeValve: the valve row has no port ' +
        'diameter or no rated travel.');

    const F = spec.faceToFace;
    if (!(F > 0))
      throw new Error('geometry.globeValve: faceToFace is required and is ' +
        'NOT derivable from the port. It is published -- Control Valve ' +
        'Handbook 5.1.1, in the catalogue as class "valveBody" -- so pass ' +
        'it rather than letting this layer invent a body length.');
    const b = spec.lineBore;
    if (!(b > 0))
      throw new Error('geometry.globeValve: lineBore is required. The ' +
        'flange bore is the LINE, not the port: a reduced-port valve has ' +
        'a port smaller than the pipe it sits in, and that difference is ' +
        'the whole reason reduced trim exists.');

    const flow = spec.flow === undefined ? null : spec.flow;
    if (flow !== 'down' && flow !== 'up')
      throw new Error('geometry.globeValve: flow must be "down" or "up". ' +
        'It decides which chamber is the inlet and, on a balanced plug, ' +
        'which way the pressure-energised U-seal faces -- fitted the ' +
        'wrong way round, the pressure that should close the seal peels ' +
        'it open. The catalogue records it per valve where the sheet ' +
        'states it, and null there means unstated, not "down".');

    const balanced = spec.balanced !== false;
    const prof = spec.widthProfile ||
      [0.15, 0.15, 0.18, 0.26, 0.38, 0.54, 0.74, 0.9, 0.85, 0.7];
    /* NO WINDOW COUNT. It used to say `{count: 6, alternate: 0.55}`
       and nothing read either one -- declared, documented, dead.
       Worse, the comment justifying alternating window sizes cited
       Figure 3.37 of the Control Valve Handbook, and that figure
       shows THREE DIFFERENT CAGES side by side (quick-opening,
       linear, equal-percentage), not one cage with two window sizes.
       The two profiles are two cages. Nothing in the Source Library
       publishes a count or a spacing for an ED cage; the photographs
       in that figure show about six on the equal-percentage cage and
       nearer four on the linear one, which is the real answer -- it
       is a design variable per style and size, not a constant. And
       the apparent two widths on the equal-percentage cage is
       FORESHORTENING: a cylinder photographed from outside shows the
       window facing the lens at full width and the ones a sixth of a
       turn away as slits.

       It costs nothing to drop, because the count never entered any
       answer. What the model does rely on is that the plenum feeds
       every window about equally -- which is why the far cut of the
       annulus carries half the flow -- and that is a much smaller
       claim, stated where it is used. */
    const wins = Object.assign({}, spec.windows);
    const G = Object.assign({}, GLOBE, spec.conventions);

    /* Frame: origin at the centre of the port, x along the line, y up
       toward the bonnet. Flow-up mirrors the whole section in y rather
       than being drawn a second time. */
    /* NOT a convention: face-to-face IS flange face to flange face, so
       the body reaches exactly half of it either side of the port. This
       was briefly a proportion of F, at 0.52, which drew a body 30.80 in
       long on a valve whose published face-to-face is 29.62 -- a part
       wider than its own catalogue dimension. A test caught it. The one
       number here that is sourced should never have had a factor in
       front of it. */
    const half = F / 2;
    /* ---- ONE SCALE, AND FOR THE FIRST TIME THAT IS ENOUGH -----------

       The source figure is near enough to scale to place everything
       off ONE published dimension: its bore is 0.323 of its
       face-to-face and its port 0.293, against 0.359 and 0.287 for a
       real EWT 10x8.

       BUT IT IS A RENDERED CUTAWAY, NOT A DRAFTED SECTION, and that
       shows. Illustration art is drawn to look right rather than to
       be measured, and this one's trim column is short: a shut plug
       has 2.49 in above it against a rated travel of 3, so the
       archetype cannot stroke even its own valve. See `drawnTravel`
       and trace/README.md -- the replacement comes off drafting
       sections in D100390X012, which carry drawing numbers.

       Every earlier attempt had to pick which of two true numbers to
       honour, because the source then was a parts-identification sheet
       drawn at no particular scale. Sizing the trim from the catalogue
       inside a body from that sheet made the cage four times too large
       and left the plug stroking in the packing bore. That whole class
       of problem is gone. */
    /* FLOW-UP TURNS THE VALVE ROUND, AND THE DRAWING HAS TO SHOW IT.

       The casting is asymmetric: one chamber wraps the cage, the other
       sits under the seat. Flow-up is this same casting entered from
       the other flange -- so you pick the valve up and turn it round
       in the line, which in a section is a mirror in X and nothing
       else. It is NOT a mirror in Y: the actuator stays on top and the
       plug still falls onto its seat.

       Swapping the inlet and outlet LABELS, which is what this used to
       do, leaves the picture claiming the fluid runs right to left
       while every other panel runs left to right, and leaves the cage
       on the inlet side in one case and the outlet side in the other
       without the drawing ever saying so. Turning the valve round says
       it: the fluid always enters at the left, and what moves is which
       chamber is standing there to meet it. */
    const mx = flow === 'down' ? 1 : -1;
    const place = ([u, v]) => [u * mx * F, v * F];
    const wall = G.wallThk * d;
    const inX = -half, outX = half;

    /* The painted fill bleeds a pixel or two past the flange outline, so
       every ring reads about half a percent longer than the casting.
       Clipped to the face rather than left to make the valve longer
       than its own published face-to-face. */
    const toFace = ([x, y]) => [Math.max(-half, Math.min(half, x)), y];
    const bodyRings = ED_BODY.map(r => r.map(place).map(toFace));
    const body = bodyRings[0];
    const bonnetRings = ED_BONNET.map(r => r.map(place).map(toFace));
    const seat = [ED_SEAT.map(place)];

    /* Flow decides which measured chamber meets the fluid first, and
       the mirror above has already put that one on the left. The
       casting is the same casting either way. */
    /* The colour fill bleeds a pixel or two past the flange outline, so
       a chamber reads 0.5% longer than the casting. Clipped to the face
       rather than left to make the valve longer than its own published
       face-to-face. */
    const chamberL = EWT_CHAMBER_L.map(place).map(toFace);
    const chamberR = EWT_CHAMBER_R.map(place).map(toFace);
    const silhouette = EWT_SILHOUETTE.map(place).map(toFace);
    const inlet = flow === 'down' ? chamberL : chamberR;
    const outlet = flow === 'down' ? chamberR : chamberL;
    const inletClipped = inlet, outletClipped = outlet;

    /* The cage, as two walls either side of the axis. Measured, so the
       proportions are the valve's rather than a set of multiples. */
    const cageWallL0 = ED_CAGE_L.map(place);
    const cageWallR0 = ED_CAGE_R.map(place);

    /* ---- A BORE IS ONE DIAMETER ---------------------------------------

       The cage is turned on a lathe. Its bore cannot be one radius on
       the left of the centreline and another on the right, and in the
       trace it is: 2.141 in one side, 2.199 the other on this valve.
       Nearly all of the difference is there -- the OUTER faces agree
       to a few thousandths -- so the two walls came out 0.375 and
       0.307 thick, an eighteen percent difference in a window width
       that is a fact about the tracing and not about the cage.

       It was invisible while the windows were cut from each wall's
       bounding box, which averaged the step heights and hid it at
       four percent. Cutting the window from the wall showed it.

       So the inner face is made one radius, the mean of the two, and
       the outer faces are left exactly as traced. That is the
       smallest claim that fixes it: not "symmetrise the casting",
       which would have to decide what to do about steps the two
       sides put at different heights, but "a bore is one diameter",
       which is not arguable. The Working Model's own shell method
       does the same thing for the same reason -- fit one profile and
       mirror it, symmetry by construction. */
    const boreOf = rings => {
      let lo = Infinity;
      for (const q of rings) if (Math.abs(q[0]) < lo) lo = Math.abs(q[0]);
      return lo;
    };
    const boreL = boreOf(cageWallL0), boreR = boreOf(cageWallR0);
    const bore1 = (boreL + boreR) / 2;
    const toBore = (ring, own) => ring.map(q => {
      const r = Math.abs(q[0]);
      /* 0.07 and not 0.10: the left wall carries a small chamfer at
         its foot, 0.096 in out from the bore, and a tenth swallowed
         it while the right wall's equivalent at 0.153 survived --
         trading one asymmetry for another. */
      if (r > own + 0.07) return [q[0], q[1]];      /* outer face: as traced */
      return [Math.sign(q[0]) * bore1, q[1]];
    });
    const cageWallL = toBore(cageWallL0, boreL);
    const cageWallR = toBore(cageWallR0, boreR);
    const extentOfRing = r => {
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const q of r) {
        if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0];
        if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1];
      }
      return { x0, x1, y0, y1 };
    };
    const cL = extentOfRing(cageWallL), cR = extentOfRing(cageWallR);
    /* INNER AND OUTER BY MAGNITUDE, not by which ring they came from.

       These were read off named edges -- the left wall's outer x, the
       right wall's outer x -- which quietly assumes the left wall is
       on the left. Mirror the casting for flow-up and those edges
       swap, so the "outer" radius came back as the inner one and the
       cage bore grew by a wall thickness. Taking the extreme distance
       from the axis over every cage point cannot care which way the
       valve is facing. */
    const cageXs = cageWallL.concat(cageWallR).map(q => Math.abs(q[0]));
    const cageR = Math.max.apply(null, cageXs);
    const cageInnerR = Math.min.apply(null, cageXs);
    const cageY0 = Math.min(cL.y0, cR.y0), cageY1 = Math.max(cL.y1, cR.y1);
    const seatE = extentOfRing(seat[0]);
    const seatTop = seatE.y1;

    /* THE WINDOW IS A GAP IN THE WALL, AND IN SECTION THAT IS ALL IT IS.

       The trumpet shape the Cv derivative recovers runs AROUND THE
       CIRCUMFERENCE -- perpendicular to this cut. A longitudinal
       section through a window shows its HEIGHT and the wall thickness
       and nothing of its profile, so drawing the flare here would be
       drawing an out-of-plane dimension in plane. Earlier versions did
       exactly that.

       The profile still governs the AREA, which is what `openAreaAt`
       reports and what the flow uses. The picture shows how much of the
       window height the plug has uncovered; the shape of what is
       uncovered is a fact about the cage, not about this view. */
    const winY0 = cageY0 + (cageY1 - cageY0) * 0.08;
    const winH = Math.min(travel, (cageY1 - cageY0) * 0.72);

    /* AND THE GAP IS THE WALL AT THAT HEIGHT, not the wall's
       bounding box.

       A cage is a stepped casting -- thicker at the bottom where it
       bears on the seat, thinner up by the bonnet, with a shoulder
       between -- and the two walls in this trace step differently
       from each other. Cut from the BOX, which is what this did, the
       window overhangs the casting on both sides by whatever the
       step happens to be: 0.07 in past the outer face on the left
       here, 0.12 in on the right. Two visible consequences. The
       windows come out different widths left and right, which is not
       a fact about the cage. And the overhang on the far side hangs
       out past the cage into the clearance beyond it, so the window
       appears to open on nothing.

       Following the wall is also the only definition that stays true
       if the trace is ever redone: a window is a hole through a wall,
       and a hole cannot be wider than what it is a hole in. */
    const facesAt = (ring, y) => {
      const xs = [];
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const a = ring[i], b2 = ring[j];
        if ((a[1] > y) !== (b2[1] > y))
          xs.push(a[0] + (b2[0] - a[0]) * (y - a[1]) / (b2[1] - a[1]));
      }
      if (xs.length < 2) return null;
      xs.sort((u, v) => u - v);
      return { lo: xs[0], hi: xs[xs.length - 1] };
    };
    const windowOf = ring => {
      const n = 16, near = [], far = [];
      for (let i = 0; i <= n; i++) {
        const y = winY0 + winH * (i / n);
        const f = facesAt(ring, y);
        if (!f) continue;
        near.push([f.lo, y]); far.push([f.hi, y]);
      }
      if (near.length < 2) return null;
      return near.concat(far.reverse());
    };
    const windows = [windowOf(cageWallL), windowOf(cageWallR)]
      .filter(w => w && w.length > 2);
    if (windows.length !== 2)
      throw new Error('geometry.globeValve: the section should cut two ' +
        'cage windows and it cut ' + windows.length + '. The window is ' +
        'the wall at each height, so a wall the horizontal cannot cross ' +
        'means the traced cage is not a pair of walls either side of a ' +
        'bore, and nothing below here will be right.');
    const cageRings = [cageWallL, cageWallR];
    const wWide = Math.min(cL.x1 - cL.x0, cR.x1 - cR.x0);

    /* ---- the plug, measured, translated by its travel ----
       The drawing is to scale, so the catalogue travel moves the
       measured plug directly -- no second scale, nothing to reconcile. */
    /* SEVERAL RINGS, BECAUSE A PLUG IN SECTION IS SEVERAL SHAPES.
       The old EWT outline was one closed loop, which a cage-guided
       plug is not: the section cuts the head, and then the skirt
       twice, once either side of the bore it rides in. Four pieces on
       the ED trace -- two halves of the head, split by the stem, and
       the two skirt walls. Merging them into one loop would draw a
       solid slug where the plug is hollow, which is where the balance
       holes vent to and where the fluid sits. */
    const plugRings = ED_PLUG.map(r => r.map(place));
    const plugE = extentOfRings(plugRings);
    /* How much of the rated travel the drawn cage has room for. The
       same arithmetic plugAt clamps with, lifted out so the valve can
       publish it without being asked for a plug. */
    const drawnTravel = Math.min(travel,
      Math.max((cageY1 - plugE.y1) * 0.92, 0));

    function plugAt(travelPct) {
      if (typeof travelPct !== 'number' || travelPct < 0 || travelPct > 100)
        throw new Error('geometry.globeValve: travel is a percentage, ' +
          '0 to 100; got ' + travelPct);
      /* THE DRAWN LIFT IS CLAMPED TO THE CAGE IT IS DRAWN IN.

         Figure 24 is to scale but it is not this exact valve: its cage
         leaves about 2.2 in of room above the plug where an EWT 10x8 is
         rated for 3 in of travel. Stroked the full 3 the plug climbs out
         of the cage and into the bonnet, which is the same class of
         nonsense as the packing-bore bug, just smaller.

         So the PICTURE strokes as far as the drawn cage allows and
         `liftTrue` keeps the real figure. The open area is unaffected --
         it comes from the Cv curve, not from the drawing. */
      const room = (cageY1 - plugE.y1) * 0.92;
      const drawTravel = Math.min(travel, Math.max(room, 0));
      const lift = drawTravel * travelPct / 100;
      const head = plugRings.map(r => r.map(([x, y]) => [x, y + lift]));
      /* THE STEM IS A PUBLISHED DIAMETER, NOT A PROPORTION OF THE PLUG.

         This was 0.11 of the plug width, which on an 8-in port draws a
         1.8-in stem. The real one is 3/4 in -- the drawn stem in Figure
         24 measures 0.83 in, Table 7 of that same manual publishes 1/2,
         3/4, 1 and 1-1/4 as this family's stem diameters, and Table 12
         of D100390X012 gives 3/4 as standard at NPS 6 and up. Two
         documents and the drawing agree; the convention was 2.4x out
         and read as a column rather than a stem. */
      if (typeof part.dims.stem !== 'number')
        throw new Error('geometry.globeValve: ' + (spec.id || 'this valve') +
          ' carries no stem diameter, and there is no honest way to ' +
          'infer one -- it does not scale with the port. Source it: the ' +
          'ED manual D100390X012 enumerates the diameters, and ' +
          'D100390X012 Table 11 maps valve size to stem for ED bodies. ' +
          'Add dims.stem with its asPrinted value rather than guessing.');
      const stemR = part.dims.stem / 2;   /* F, the port and the stem are all inches */
      /* ---- AND IT GOES DOWN INTO ITS SOCKET ------------------------

         The traced plug has a bore in its top for the stem -- a
         re-entrant notch in the head outline, straight off Figure 24.
         Drawn with the stem starting at the plug's top FACE, that
         bore is a hole with nothing in it: a small black slot in the
         middle of the plug, which is what it looked like.

         The stem is a part, not a cap. It runs down to the bottom of
         the bore at its own published diameter, which is wider than
         the scaled trace of the bore and so closes it. Found by
         asking the outline where it dips in near the centreline
         rather than by declaring a depth -- a plug with no socket in
         its trace simply has none, and the stem lands on the face. */
      let socket = plugE.y1;
      for (const r of plugRings)
        for (const q of r)
          if (Math.abs(q[0]) <= stemR * 1.6 && q[1] < socket) socket = q[1];
      const stemFoot = socket + lift;
      const stem = [[-stemR, stemFoot], [stemR, stemFoot],
                    [stemR, cageY1 + (cageY1 - cageY0) * 1.1],
                    [-stemR, cageY1 + (cageY1 - cageY0) * 1.1]];
      const out = { lift: lift, liftTrue: travel * travelPct / 100,
                    head: head, stem: stem,
                    balanceHoles: [], seal: null };
      if (!balanced) return out;

      const r = (plugE.x1 - plugE.x0) / 2;
      const bd = r * G.balanceBore;
      for (let i = 0; i < G.balanceHoles; i++) {
        const cx = -r + ((i + 0.5) / G.balanceHoles) * 2 * r;
        if (Math.abs(cx) < stemR + bd) continue;
        out.balanceHoles.push([[cx - bd / 2, plugE.y0 + lift],
                               [cx + bd / 2, plugE.y0 + lift],
                               [cx + bd / 2, plugE.y1 + lift],
                               [cx - bd / 2, plugE.y1 + lift]]);
      }
      const st = (plugE.y1 - plugE.y0) * G.sealBand;
      const sy = plugE.y1 + lift - st * 1.4;
      out.seal = {
        ring: [[-r, sy], [r, sy], [r, sy + st], [-r, sy + st]],
        opens: flow === 'down' ? 'up' : 'down',
        why: flow === 'down'
          ? 'flow-down fills the chamber around the cage, so the high ' +
            'pressure is above the seal and the U opens upward to meet it'
          : 'flow-up arrives under the seat, so the high pressure is ' +
            'below the seal and the U opens downward to meet it',
      };
      return out;
    }

    /* ---- the open area at a travel ----
       Unchanged, and still the closed loop: the area comes from the
       width profile, which is the derivative of the published Cv curve,
       so it reproduces the curve it was derived from. */
    /* ---- how wide the passage actually is, here ---------------------

       The half-widths below started as "half the line bore", which
       is right at a flange and wrong everywhere else: a chamber is
       two or three times that across, so the fluid was drawn as a
       narrow ribbon threaded through a cavity it is supposed to
       fill. The chamber is a MEASURED polygon, so there is no need
       to estimate -- cast a ray across it and read the chord.

       It also recentres the station onto the middle of that chord.
       Station positions were always a declared convention; putting
       them on the cavity's own midline makes them less of one. */
    function inside(ring, px, py) {
      let hit = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const a = ring[i], b2 = ring[j];
        if ((a[1] > py) !== (b2[1] > py) &&
            px < (b2[0] - a[0]) * (py - a[1]) / (b2[1] - a[1]) + a[0])
          hit = !hit;
      }
      return hit;
    }

    function chordAcross(ring, px, py, nx, ny) {
      const hits = [];
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], b2 = ring[(i + 1) % ring.length];
        const ex = b2[0] - a[0], ey = b2[1] - a[1];
        const den = nx * ey - ny * ex;
        if (Math.abs(den) < 1e-12) continue;      /* parallel */
        const t = ((a[0] - px) * ey - (a[1] - py) * ex) / den;
        const u = Math.abs(ex) > Math.abs(ey)
          ? (px + nx * t - a[0]) / ex
          : (py + ny * t - a[1]) / ey;
        if (u >= -1e-9 && u <= 1 + 1e-9) hits.push(t);
      }
      if (hits.length < 2) return null;
      hits.sort((x, y) => x - y);
      /* The two crossings that BRACKET the station. A dished chamber
         is not convex, so taking the outermost pair would span a
         lobe the fluid never reaches. */
      let lo = null, hi = null;
      for (const t of hits) {
        if (t <= 1e-9 && (lo === null || t > lo)) lo = t;
        if (t >= -1e-9 && hi === null) hi = t;
      }
      if (lo === null || hi === null) return null;
      return { mid: (lo + hi) / 2, half: (hi - lo) / 2 };
    }

    function openAreaAt(travelPct) {
      if (typeof travelPct !== 'number' || travelPct < 0 || travelPct > 100)
        throw new Error('geometry.globeValve: travel is a percentage, ' +
          '0 to 100; got ' + travelPct);
      /* THE AREA IS IN SQUARE INCHES, AND IT HAS TO BE.

         This used to multiply the profile integral by `wWide`, which is
         the cage WALL THICKNESS measured across the section -- standing
         in for the width of the window AROUND the cage. Those are
         different dimensions of the same part, and the mistake survived
         because the only consumer displayed the result as a percentage
         of full, where any constant factor cancels. The moment the
         number set a velocity it was off by about four times: 7.3 in2
         at full open on an 8-inch port.

         The shape still comes from the integral, which is the closed
         loop worth keeping -- the width profile is the derivative of
         the published Cv curve, so integrating it has to give the curve
         back, and a test says so. What changed is the SCALE: full open
         is pinned to the rated Cv through the orifice relation rather
         than to a thickness that happened to be in scope. */
      const n = 2000;
      const run = upto => {
        let acc = 0;
        for (let i = 0; i < n; i++) {
          const hgt = (i + 0.5) / n;
          if (hgt > upto) break;
          acc += widthAt(prof, hgt) / n;
        }
        return acc;
      };
      const whole = run(1);
      if (!(whole > 0))
        throw new Error('geometry.globeValve: the width profile integrates ' +
          'to zero, so there is no window to open.');
      const rated = part.cv[part.cv.length - 1];
      if (!(rated > 0))
        throw new Error('geometry.globeValve: ' + (spec.id || 'this valve') +
          ' has no rated Cv, so a window area cannot be scaled to it.');
      const aFull = rated / (37.97 * G.dischargeCoef);
      return aFull * run(Math.min(1, travelPct / 100)) / whole;
    }

    const rings = [body].concat(cageRings, seat);
    return {
      part: part.id, kind: 'globeValve', units: 'in',
      faceToFace: F, port: d, travel: travel, lineBore: b, flow: flow,

      balanced: balanced,
      body: bodyRings,
      inletCavity: [inletClipped], outletCavity: [outletClipped],
      cage: { rings: cageRings, windows: windows,
              y0: cageY0, y1: cageY1, outerR: cageR,
              windowY0: winY0, windowH: winH },
      seatRing: seat,
      bonnet: bonnetRings,
      silhouette: [silhouette],
      plugAt: plugAt, openAreaAt: openAreaAt,
      /* ---- THE FLOW PATH THROUGH THE VALVE ----------------------------

         What a control valve DOES is squeeze the flow at one place, and
         the picture is worth drawing only if it puts the squeeze where
         the valve puts it. So this returns a route with a real FLOW
         AREA at every station, and the speed anything draws along it is
         continuity -- Q over that area -- not a number chosen to look
         fast.

         Two different quantities, kept apart on purpose:

           area   the real three-dimensional flow area, revolved. This
                  sets the velocity and is measured or sourced at every
                  station. Nothing invented reaches it.
           halfW  the half-width of the passage as DRAWN in this
                  section, for scattering markers across the lane. A
                  drawing quantity, used for nothing physical.

         The narrowest area is the cage window, which is the derivative
         of the published Cv curve -- so the fastest point in the
         picture is the vena contracta, for the same reason it is the
         fastest point in the valve. At 10% travel the window is a few
         percent of the line and the dots tear through it; wide open it
         is comparable to the port and they do not. That contrast is the
         lesson, and it comes out of the Cv curve rather than being
         staged.

         CONVENTION, and only this: WHERE the stations sit. The route
         through the chambers is a smooth line drawn through measured
         castings, because a section cannot tell you where a streamline
         runs. The areas are not a convention and neither is the order.

         FLOW-UP IS THE SAME ROUTE WALKED BACKWARDS. Not a mirrored
         valve -- the same casting entered from the other flange, which
         is what flow-up means. The lower chamber fills first, the port
         is climbed rather than dropped through, and the fluid leaves
         through the windows into the upper chamber. */
      /* ---- WHERE AN ACTUATOR BOLTS ON --------------------------------

         The top of the bonnet, on the centreline. An actuator's own
         datum is the bottom face of its yoke, so mounting one is a
         single translation: put its origin here.

         Measured off the traced casting like everything else -- the
         highest point of the bonnet -- rather than declared, because
         the bonnet is already in this model and asking it is free.

         The yoke boss the actuator needs is NOT checked here. That is
         the assembly layer's job and it is a specification question,
         not a drawing one; geometry will happily hand back a point
         that the wrong actuator would sit on crookedly. */
      mountPoint: function () {
        let top = -Infinity;
        for (const r of bonnetRings)
          for (const q of r) if (q[1] > top) top = q[1];
        if (top === -Infinity) return null;
        return Object.freeze({
          x: 0, y: top,
          stemTop: (function () {
            let t = -Infinity;
            const st = plugAt(0).stem;
            for (const q of st) if (q[1] > t) t = q[1];
            return t;
          })(),
          note: 'The top face of the bonnet, on the centreline. An '
              + 'actuator datum goes here. Whether THIS actuator may '
              + 'is the assembly layer\'s question.',
        });
      },

      /* ---- THE BONNET BORE, AND THE PACKING BOX IN IT -----------------

         Read off the casting rather than declared. The bonnet was
         traced from Figure 24 like everything else, so its inside
         profile is already here; nobody had asked it for one.

         Asked, it describes itself completely. Above the cage the
         bore is wide -- eight and a half inches on this valve -- then
         it necks to about an inch around the stem, then it opens
         again to a constant bore and holds it for three and a half
         inches before flaring at the top. That constant run IS the
         packing box: a uniform bore around a 3/4 inch stem leaving a
         four-tenths annulus, which is a packing ring in section.

         Two things follow and both matter.

         THE COLUMN BELOW THE PACKING IS FULL OF PROCESS FLUID. It is
         a dead end -- there is nowhere for it to go -- but it is
         liquid, at line pressure, and the packing is the only thing
         between it and the room. Drawn as solid metal, which is what
         this model did until now, it hides the entire reason packing
         exists.

         AND THE BOX IS WHERE THE PACKING GOES, at a size the casting
         dictates rather than one anybody chose. */
      bonnetBoreAt: function (y) {
        let left = -Infinity, right = Infinity;
        for (const ring of bonnetRings)
          for (let i = 0; i < ring.length; i++) {
            const a = ring[i], b = ring[(i + 1) % ring.length];
            if ((a[1] - y) * (b[1] - y) > 0 || a[1] === b[1]) continue;
            const x = a[0] + (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]);
            if (x < 0 && x > left) left = x;
            if (x > 0 && x < right) right = x;
          }
        return (left > -Infinity && right < Infinity)
          ? { left: left, right: right, bore: right - left } : null;
      },

      /* The packing box, found as the longest run of near-constant
         bore above the neck. Found, not stated: a number typed in
         here would be a number nobody could check, and the casting
         already knows. */
      packingBox: function (opts) {
        const o = opts || {};
        const step = o.step === undefined ? 0.1 : o.step;
        const tol = o.tol === undefined ? 0.06 : o.tol;
        const self = this;
        let yTop = -Infinity;
        for (const r of bonnetRings)
          for (const q of r) if (q[1] > yTop) yTop = q[1];

        /* The neck: the narrowest bore above the cage. Everything
           below it is flooded; everything above it is the box. */
        let neckY = null, neckBore = Infinity;
        for (let y = cageY1; y <= yTop; y += step) {
          const b = self.bonnetBoreAt(y);
          if (b && b.bore < neckBore) { neckBore = b.bore; neckY = y; }
        }
        if (neckY === null) return null;

        let best = null, run = null;
        for (let y = neckY; y <= yTop; y += step) {
          const b = self.bonnetBoreAt(y);
          if (!b) { run = null; continue; }
          if (run && Math.abs(b.bore - run.bore) <= tol) {
            run.to = y;
            run.bore = (run.bore * run.n + b.bore) / (run.n + 1);
            run.n++;
          } else {
            run = { from: y, to: y, bore: b.bore, n: 1 };
          }
          if (!best || (run.to - run.from) > (best.to - best.from))
            best = { from: run.from, to: run.to, bore: run.bore };
        }
        if (!best || best.to - best.from < step * 3) return null;
        return Object.freeze({
          neckY: neckY, neckBore: neckBore,
          from: best.from, to: best.to, bore: best.bore,
          annulus: (best.bore - (part.dims.stem || 0)) / 2,
          note:
            'Measured off the traced bonnet, not declared: the packing '
          + 'box is the longest run of constant bore above the neck. '
          + 'The annulus it leaves around the published stem is the '
          + 'room the packing has.',
        });
      },

      /* ---- THE PACKING ------------------------------------------------

         The one part of a control valve that stands between the
         process and the room, and this model did not draw it at all.
         The packing box read as solid bonnet, which says the stem
         passes through metal, which is the opposite of true.

         WHAT IS SOURCED. The box is measured off the traced casting
         (see packingBox). The STACK -- which parts, in what order --
         is Figure 3 of D100390X012, "PTFE V-Ring Packing
         Arrangements", read bottom to top:

             packing box ring   (key 11)
             spring             (key 8)   single arrangements
             washer             (key 10)
             female adaptor
             packing ring(s)    (key 6)
             male adaptor
             packing follower   (key 13)
             upper wiper        (key 12)

         and the stem diameter is published. The tightening torque is
         published too, per stem diameter, pressure class and packing
         type, in Table 6 of the same manual -- and it is a WINDOW,
         minimum and maximum, which is the whole lesson and is
         returned here rather than drawn.

         WHAT IS CONVENTION, and it is one thing: how the box height
         divides between the parts. The manual draws the arrangement
         without dimensioning each ring, so the proportions below are
         declared, named, and sum to one. Everything else about this
         part is read off a document.

         GRAPHITE is a different stack -- rings and anti-extrusion
         washers, no V-rings, no spring -- so it is a different
         arrangement, not this one with different numbers. */
      packingAt: function (opts) {
        const o = opts || {};
        const box = this.packingBox();
        if (!box) return null;
        const style = o.style || 'ptfe-v-ring';
        if (style !== 'ptfe-v-ring')
          throw new Error('geometry.globeValve.packingAt: only the PTFE ' +
            'V-ring arrangement is drawn, which is Figure 4 of ' +
            'D100390X012. Graphite is a different stack -- rings and ' +
            'anti-extrusion washers, no spring -- and drawing it as this ' +
            'one relabelled would be inventing a part.');

        /* Bottom to top, with the share of the box each takes. The
           SHARES are the convention; the list and its order are the
           figure's. */
        const STACK = [
          { part: 'packing box ring', key: 11, share: 0.13 },
          { part: 'spring',           key: 8,  share: 0.16, spring: true },
          { part: 'washer',           key: 10, share: 0.05 },
          { part: 'female adaptor',   key: null, share: 0.09 },
          { part: 'packing ring',     key: 6,  share: 0.13, seals: true },
          { part: 'packing ring',     key: 6,  share: 0.13, seals: true },
          { part: 'male adaptor',     key: null, share: 0.09 },
          { part: 'packing follower', key: 13, share: 0.16 },
          { part: 'upper wiper',      key: 12, share: 0.06 },
        ];
        let total = 0;
        for (const q of STACK) total += q.share;

        const rStem = (part.dims.stem || 0) / 2;
        const rBox = box.bore / 2;
        const height = box.to - box.from;
        let y = box.from;
        const items = [];
        for (const q of STACK) {
          const h = height * (q.share / total);
          /* Each part is an annulus in section: two rectangles, one
             either side of the stem. A packing ring does not cross
             the stem -- the stem is why it is there. */
          const ring = side => [
            [side * rStem, y], [side * rBox, y],
            [side * rBox, y + h], [side * rStem, y + h]];
          items.push(Object.freeze({
            part: q.part, key: q.key,
            seals: !!q.seals, spring: !!q.spring,
            y0: y, y1: y + h,
            left: Object.freeze(ring(-1)), right: Object.freeze(ring(1)),
          }));
          y += h;
        }

        return Object.freeze({
          style: style,
          box: box,
          stemDia: part.dims.stem,
          annulus: box.annulus,
          items: Object.freeze(items),
          /* The parts that actually seal, named, because that is the
             question a reader has: which of these nine is the one
             doing the work. */
          sealingParts: Object.freeze(items.filter(q => q.seals)
                                           .map(q => q.part)),
          source: 'D100390X012 Figure 3, PTFE V-ring packing arrangements',
          conventionNote:
            'The box is MEASURED off the traced casting and the stem is '
          + 'published. The stack -- which parts and in what order -- is '
          + 'Figure 3 of D100390X012. CONVENTION, and the only one: how '
          + 'the box height divides between the nine parts. The manual '
          + 'draws the arrangement without dimensioning each ring.',
        });
      },

      /* ---- THE WETTED VOLUME ------------------------------------------

         Every space inside this valve that has fluid in it, as one
         set of polygons, with the two openings named.

         It lives here because it is a fact about the SHAPE. The skin
         had been assembling it out of the pieces it happened to need
         for a clip, which meant the drawing's idea of where the water
         is and the solver's idea of where the water is were two
         separate pieces of code that agreed by coincidence. They are
         now one answer used twice.

         AND IT INCLUDES THE DEAD ENDS. The drillings through a
         balanced plug and the cavity above its head carry no net
         flow -- that is the whole point of them, equal pressure top
         and bottom -- but they are full of fluid, and a model that
         leaves them out cannot draw them full. Fluid being PRESENT
         and fluid MOVING are different questions, and only the
         second one has anything to do with the flow path. */
      wettedAt: function (travelPct, opts) {
        if (typeof travelPct !== 'number' || travelPct < 0 || travelPct > 100)
          throw new Error('geometry.globeValve: travel is a percentage, ' +
            '0 to 100; got ' + travelPct);
        /* THE SMALLEST PASSAGE A CONSUMER CAN RESOLVE.

           Near the seat the gaps get very small -- at a tenth of
           travel the opening under the plug is about two tenths of
           an inch -- and a consumer working on a grid simply loses
           them. Lost, the valve is not nearly shut, it is
           DISCONNECTED: the far flange cannot be reached from the
           near one, and a flow problem with an inlet and no outlet
           has no solution at all rather than a small one.

           So a caller may say how fine a feature it can carry, and
           the thin passages are opened to at least that. It is a
           drawing-scale fudge with no physical cost, because what
           sets the velocity is the AREA, which is carried separately
           and stays true -- a passage held open to a tenth of an
           inch while the area says a hundredth runs at the speed the
           hundredth demands. The alternative is a grid fine enough
           for the real gap, which is four times the work for a
           picture nobody can see the difference in. */
        const o2 = opts || {};
        const minGap = o2.minGap > 0 ? o2.minGap : 0;
        const pg = plugAt(travelPct);
        const box = (hw, ya, yb) => [[-hw, ya], [hw, ya], [hw, yb], [-hw, yb]];

        let plugLow = Infinity, plugTop = -Infinity, drillR = 0;
        /* RINGS, not points. `head` became several rings when the
           archetype became a real cage-guided plug -- head and two
           skirt walls -- and walking it as a flat point list left
           plugLow at Infinity, which put the lid on the way in at
           infinity and emptied the wetted set. It failed loudly,
           which is the only reason it was cheap. */
        for (const ring of pg.head)
          for (const q of ring) {
            if (q[1] < plugLow) plugLow = q[1];
            if (q[1] > plugTop) plugTop = q[1];
          }
        for (const h of pg.balanceHoles)
          for (const q of h) drillR = Math.max(drillR, Math.abs(q[0]));
        const cageInner = cageInnerR;

        /* The bridge from the port down to whichever chamber is under
           the seat, sized to the gap it is bridging and no deeper --
           run long it protrudes through the casting and reads as a
           notch cut out of the body. */
        let lowerTop = -Infinity;
        for (const ring of [chamberL, chamberR])
          for (const q of ring)
            if (Math.abs(q[0]) < d / 2 && q[1] < seatTop && q[1] > lowerTop)
              lowerTop = q[1];
        const belowSeat = lowerTop > -Infinity
          ? Math.min(seatTop - 0.01, lowerTop - 0.12)
          : seatTop - 0.01;

        const throatRings = [], stillRings = [];
        const rings = [chamberL, chamberR];

        /* ONE OPENING, CONTIGUOUS FROM THE WINDOW TO THE SEAT.

           The plug's bottom edge is the lid on both halves of the way
           in: it is how far up the window has been uncovered, and it
           is the roof of the gap over the seat. Opening the two to
           the caller's smallest feature SEPARATELY tore them apart.
           At a tenth of travel the plug bottom sits below the window
           sill, so the window was opened upward into a band that the
           plug is still filling, while the gap over the seat was
           opened in a band below the sill -- two passages that never
           touch. The cavity then came apart into an inlet half and
           an outlet half, each fed by its own flange, and a flow
           problem with an inlet in one piece and an outlet in the
           other has no answer at all. The solver duly ran away.

           So one lid serves both, and it is pushed up far enough to
           clear the sill as well as the seat. Whatever the valve is
           doing, the way in is a single connected passage. */
        const lidY = Math.max(plugLow, seatTop + minGap,
                              winY0 + minGap);
        if (lidY > seatTop) rings.push(box(cageInner, seatTop, lidY));
        rings.push(box(d / 2, belowSeat, seatTop));

        /* A WINDOW IS A HOLE IN THE CAGE WALL. IT IS ALWAYS FULL,
           IT IS ALWAYS IN THE FLOW PATH, AND IT NEVER MOVES.

           Three goes at this, and the first two both tried to make
           the DRAWING carry what only the plug does.

           First it handed over only the part below the plug's bottom
           edge, so the covered part came out dry -- a void in a
           flooded casting, drawn as a hole into nothing -- and the
           window appeared to grow and shrink with the stroke.

           Then it handed over the whole rectangle but split it, the
           part below the plug flowing and the part above it STILL.
           That is still wrong, and wrong about the physics rather
           than about the picture: the line pushes fluid into the
           whole window, the fluid that meets the plug does not stop,
           it turns and goes down, and the part of the window facing
           the plug is where it is moving FASTEST on its way to the
           only way out. Marked still, it sat there as a patch of
           motionless parcels in the middle of the inrush, and the
           flow appeared to route around the window rather than
           through it.

           So: one ring, the whole rectangle, every travel, all of it
           throat. The area it carries is the one the Cv curve gives
           and the solver shares it over whatever chord the window
           has, so the velocity through it is right whether the plug
           is covering a tenth of it or nine tenths. What the plug
           changes is how much gets through -- never where the window
           is, how big it is, or whether it holds water. */
        for (const w of windows) {
          const full = w.map(q => [q[0], q[1]]);
          rings.push(full); throatRings.push(full);
        }
        /* ---- THE CLEARANCE BETWEEN THE CAGE AND ITS BORE -------------

           The cage is a slip fit in a bore, and a slip fit has a gap.
           On the inlet side you never see it because the chamber is
           right there and the two are one space. On the far side the
           casting comes up close behind the cage and the gap is all
           there is -- about a third of an inch at the window band in
           this trace, bounded by cage inside, body outside, closed
           top and bottom.

           It is IN THE TRACE and it was not in the wetted set, so it
           drew as a slot of nothing behind the far window: the one
           remaining black inside the valve, and the thing that made
           that window look like a hole into the casting.

           It is water. It is NOT a way in: nothing in this plane
           connects it to the inlet, because the path that feeds it
           runs round the cage and out of the section. So it is still
           -- a blind annular slot, stirred by what moves past its
           mouth and carrying no through-flow of its own. Making the
           far windows carry their share of the flow is a separate
           question and a boundary condition, not a shape. */
        const solidAt = (x, y) => {
          for (const r of bodyRings) if (inside(r, x, y)) return true;
          for (const r of bonnetRings) if (inside(r, x, y)) return true;
          return false;
        };
        /* WHICH WINDOWS THIS PLANE CAN FEED. Walk outward from the
           window's outer face and see what you meet first: a
           chamber, and the drawing feeds it; the casting, and its
           water comes from out of the plane, round the cage.

           A WALK AND NOT A SINGLE PROBE. One probe a fixed distance
           out has to guess how far the chamber is, and the gap
           differs between the traces -- 0.03 in on the ED, more than
           a tenth on the EWT. At 0.06 in the EWT came back with
           BOTH windows unfed and nothing to take the transfer from,
           which is not a statement about that valve, it is the probe
           landing in the gap. Walking cannot miss. */
        const windowFed = [];
        const WALK = 0.9;
        for (const w of windows) {
          let wx0 = Infinity, wx1 = -Infinity, wy0 = Infinity, wy1 = -Infinity;
          for (const q of w) {
            if (q[0] < wx0) wx0 = q[0]; if (q[0] > wx1) wx1 = q[0];
            if (q[1] < wy0) wy0 = q[1]; if (q[1] > wy1) wy1 = q[1];
          }
          const outer = Math.abs(wx0) > Math.abs(wx1) ? wx0 : wx1;
          const sgn = outer < 0 ? -1 : 1;
          const ym = (wy0 + wy1) / 2;
          let verdict = true;          /* nothing in the way at all */
          for (let d = 0.02; d <= WALK; d += 0.02) {
            const x = outer + sgn * d;
            if (inside(chamberL, x, ym) || inside(chamberR, x, ym))
              { verdict = true; break; }
            let hitMetal = false;
            for (const r of bodyRings) if (inside(r, x, ym)) { hitMetal = true; break; }
            if (!hitMetal)
              for (const r of bonnetRings) if (inside(r, x, ym)) { hitMetal = true; break; }
            if (hitMetal) { verdict = false; break; }
          }
          windowFed.push(verdict);
        }
        const plenumRings = [], plenumOut = [];

        /* ---- WHERE THE SHARE LEAVES THE PLANE ------------------------

           Putting the far side's flow in as a plain source makes the
           flange carry only what is left, and the line velocity in
           the drawing comes out at half of the one the catalogue
           says -- a headline number wrong in the picture to fix a
           detail in the cage. So it is a TRANSFER: the same volume
           leaves the chamber on the near side of the cage and
           arrives in the slot on the far side. Both flanges keep the
           whole of Q; the chambers either side of the cage carry
           their own share, which is what they really do.

           It leaves from a slab in the chamber just outside the near
           window -- where the fluid in the real valve starts going
           round rather than straight in. Declared, not drawn: there
           is nothing to see, because the water does not go anywhere
           a reader could look. */
        for (let wi = 0; wi < windows.length; wi++) {
          if (!windowFed[wi]) continue;
          let wx0 = Infinity, wx1 = -Infinity, wy0 = Infinity, wy1 = -Infinity;
          for (const q of windows[wi]) {
            if (q[0] < wx0) wx0 = q[0]; if (q[0] > wx1) wx1 = q[0];
            if (q[1] < wy0) wy0 = q[1]; if (q[1] > wy1) wy1 = q[1];
          }
          const outer = Math.abs(wx0) > Math.abs(wx1) ? wx0 : wx1;
          const sgn = outer < 0 ? -1 : 1;
          const a = outer + sgn * 0.04, b2 = outer + sgn * 0.34;
          plenumOut.push([[a, wy0], [b2, wy0], [b2, wy1], [a, wy1]]);
        }

        const MAXGAP = 0.9;
        for (const wall of [cageWallL, cageWallR]) {
          const sign = wall === cageWallL ? -1 : 1;
          const wIdx = wall === cageWallL ? 0 : 1;
          /* RUNS, NOT ONE COLUMN. The horizontal misses the wall at
             the very top and bottom of the cage's own height, and
             emptying the column on a miss threw away everything
             gathered below it -- so the slot came out empty and the
             far window still opened on nothing. Each unbroken run of
             heights that has both a wall and a casting behind it is
             its own piece of water. */
          let near = [], far = [];
          const flush = () => {
            if (near.length > 2) {
              const slot = near.concat(far.reverse());
              rings.push(slot);
              if (windowFed[wIdx]) {
                /* The chamber is already against this side, so this
                   sliver is just more of it: no through-flow of its
                   own. */
                stillRings.push(slot);
              } else {
                /* If the window on this side cannot be fed in plane,
                   THIS is where its flow arrives from: the same
                   annulus, one quarter-turn away. It is NOT still --
                   the whole point is that the flow for the far
                   window passes through it -- and marking it still
                   put it outside the solved domain altogether, so
                   the share was delivered to cells the solver was
                   not looking at. */
                plenumRings.push(slot);
              }
            }
            near = []; far = [];
          };
          const steps = 24;
          for (let i = 0; i <= steps; i++) {
            const y = cageY0 + (cageY1 - cageY0) * (i / steps);
            /* the cage's own outer face at this height */
            const xs = [];
            for (let a = 0, b2 = wall.length - 1; a < wall.length; b2 = a++) {
              const p0 = wall[a], p1 = wall[b2];
              if ((p0[1] > y) !== (p1[1] > y))
                xs.push(p0[0] + (p1[0] - p0[0]) * (y - p0[1]) /
                        (p1[1] - p0[1]));
            }
            if (xs.length < 2) { flush(); continue; }
            const outer = sign < 0 ? Math.min.apply(null, xs)
                                   : Math.max.apply(null, xs);
            /* march out to the casting */
            let hit = null;
            for (let d = 0.02; d <= MAXGAP; d += 0.02)
              if (solidAt(outer + sign * d, y)) { hit = outer + sign * d; break; }
            if (hit === null) { flush(); continue; }
            near.push([outer, y]); far.push([hit, y]);
          }
          flush();
        }

        /* THE PLUG MOVES WITH ITS OWN LID.

           Holding the way in open to the caller's smallest feature
           means pretending the plug sits a little higher than it
           does. Everything attached to the plug has to be lifted by
           the same amount, and the drillings are attached to the
           plug. Left where they were they hung down INTO the gap
           that had just been opened under it -- still spaces, so the
           solver treats them as wall -- and at low travel they
           walled the passage off entirely: the fluid came through
           the window, met a plug's worth of blocked drilling across
           the only way on, and the cavity split in two again. Three
           hundredths of an inch of model inconsistency, and the
           valve read as shut at a tenth of travel. */
        /* ---- AND SO IS THE INSIDE OF THE PLUG ------------------------

           A balanced cage-guided plug is a cup, not a slug: a head
           with a skirt hanging off it, riding the cage bore. The old
           archetype was a single closed outline, so the hollow simply
           was not there -- the model drew metal where the plug is
           empty, and nobody could see the error because the drawing
           agreed with itself.

           The registered ED plug is four rings in section, head and
           two skirt walls, and the moment it went in the void probe
           found three and a half square inches of nothing on the axis
           above the seat. That is the hollow, and it has been a lie in
           this model from the beginning; it took a plug with a real
           section to show it.

           IT IS FLUID, AND IT IS STILL. The balance holes through the
           head are what connect it to the cavity above, which is the
           entire point of a balanced plug -- the same pressure on top
           of the head as under it, so the actuator fights the spring
           and the packing rather than the line. Still, because there
           is nowhere for it to go.

           Sampled rather than boxed, for the reason the bonnet bore is
           sampled: the skirt is not a parallel tube and a box would be
           a claim about a shape nobody traced. */
        {
          const inAnyPlug = (x, y) => {
            for (const r of pg.head) if (inside(r, x, y)) return true;
            return false;
          };
          const left = [], right = [];
          const steps = 20;
          const lo = plugLow + 0.02, hi = plugTop - 0.02;
          for (let i = 0; i <= steps && hi > lo; i++) {
            const y = lo + (hi - lo) * (i / steps);
            if (inAnyPlug(0, y)) continue;      /* solid on the axis here */
            let xl = 0, xr = 0;
            const step = cageInner / 160;
            while (xl - step > -cageInner && !inAnyPlug(xl - step, y))
              xl -= step;
            while (xr + step < cageInner && !inAnyPlug(xr + step, y))
              xr += step;
            /* Open all the way to the cage bore means this y is above
               the head or below the skirt, not inside the cup. */
            if (xl <= -cageInner + step || xr >= cageInner - step) continue;
            left.push([xl, y]); right.push([xr, y]);
          }
          if (left.length > 2) {
            const cup = left.concat(right.reverse());
            rings.push(cup); stillRings.push(cup);
          }
        }

        /* ---- THE BONNET BORE IS FULL OF PROCESS FLUID -----------------

           From the top of the cage up to the underside of the packing
           the bonnet is bored, and that bore is flooded at line
           pressure. It carries no through-flow -- there is nowhere
           for it to go -- so it is still, and it is liquid, and the
           packing above it is the only thing between it and the room.

           Drawn as solid metal, which is what this model did until
           now, it hid the single most important fact about a bonnet.
           Two and a quarter inches of it on this valve, and the whole
           reason the next part along exists.

           Sampled off the traced casting rather than boxed, because
           the bore is a funnel: eight and a half inches wide where it
           meets the cage and one inch at the neck. A box would have
           been a lie about the shape of the one space the packing is
           sealing. */
        const pb = this.packingBox ? this.packingBox() : null;
        if (pb && pb.from > cageY1) {
          const left = [], right = [];
          const steps = 18;
          for (let i = 0; i <= steps; i++) {
            const y = cageY1 + (pb.from - cageY1) * (i / steps);
            const b = this.bonnetBoreAt(y);
            if (!b) continue;
            left.push([b.left, y]);
            right.push([b.right, y]);
          }
          if (left.length > 2) {
            const col = left.concat(right.reverse());
            rings.push(col); stillRings.push(col);
          }
        }

        const lift = Math.max(0, lidY - plugLow);
        const raise = r => r.map(q => [q[0], q[1] + lift]);
        for (const h of pg.balanceHoles) {
          const hr = lift > 0 ? raise(h) : h;
          rings.push(hr); stillRings.push(hr);
        }
        /* ---- THE SPACE THE PLUG STROKES THROUGH ----------------------

           Between the top of the plug and the top of the cage. The
           plug sweeps up through it and back down, so it is a space
           fluid lives in, and at any travel the part the plug is not
           occupying is full of it.

           Two things were wrong with it and both left black.

           IT WAS THE WIDTH OF THE DRILLING CIRCLE, not of the bore.
           `drillR` is how far out the balance holes reach; the space
           over the plug is the CAGE BORE, which on this valve is
           another quarter inch out either side. That quarter inch
           ran the whole height of the stroke, dry, as a pair of tall
           slivers against the cage wall.

           AND ITS FLOOR WAS THE LIFTED PLUG, not the drawn one. The
           lid fudge pretends the plug sits a little higher than it
           does so the passage under it cannot pinch shut on a coarse
           grid; the drillings are inside the plug and have to be
           lifted with it. This space is NOT inside the plug -- it is
           what the plug is moving through -- and lifting its floor
           by the same amount opened a band between the plug's real
           top and the water's bottom edge that belonged to neither.
           On a shut valve that band was the width of the whole bore.

           So: the real top of the drawn plug, out to the real bore.
           The lifted drillings poke a little way into it, which is
           water into water and costs nothing. */
        if (cageY1 > plugTop) {
          const over = box(cageInner, plugTop, cageY1);
          rings.push(over); stillRings.push(over);
        }

        /* The openings. A solver needs to know where fluid crosses
           the boundary and which way; everything else is wall. */
        const openings = [
          { x: inX,  y: 0, nx:  1, ny: 0, halfW: b / 2, role: 'inlet' },
          { x: outX, y: 0, nx: -1, ny: 0, halfW: b / 2, role: 'outlet' },
        ];

        return Object.freeze({
          travelPct: travelPct,
          rings: Object.freeze(rings.map(r => Object.freeze(r.map(Object.freeze)))),
          /* The windows, named apart from the rest. They are the
             restriction, they are an inch across, and a solver that
             has to find them by proximity to a station will smear
             them into the wall either side. */
          throatRings: Object.freeze(
            throatRings.map(r => Object.freeze(r.map(Object.freeze)))),
          /* THE STILL SPACES, also named apart.

             The drillings through the plug and the cavity over its
             head are full of liquid and carry nothing through them.
             That is not an approximation, it is the point of a
             balanced plug: the same pressure stands above and below,
             so there is nothing to drive a flow.

             A plane section cannot reproduce that on its own, and
             should not be asked to. The real cage admits fluid
             through windows all the way round, so the pressure under
             the plug is very nearly the same at every angle; a
             section admits it from one side only, inventing a
             sideways gradient across the plug that then drives a
             brisk cross-flow up one drilling and down the other.
             That flow is an artifact of cutting the valve in half,
             not a feature of the valve.

             So these are solved as still, and drawn full. */
          stillRings: Object.freeze(
            stillRings.map(r => Object.freeze(r.map(Object.freeze)))),
          openings: Object.freeze(openings.map(Object.freeze)),
          /* ---- WHAT THE SECTION CANNOT SHOW ARRIVING ----------------
             The plenum round the cage is an annulus and it feeds
             every window. This plane cuts it twice and only one cut
             touches the inlet, so the other one has to be TOLD its
             share -- it arrives along a path that runs round the
             cage, perpendicular to the picture. Declared here, put
             in by the flow field, and the share is simply how many
             of the windows this plane cannot reach. */
          plenum: Object.freeze({
            into: Object.freeze(
              plenumRings.map(r => Object.freeze(r.map(Object.freeze)))),
            outOf: Object.freeze(
              plenumOut.map(r => Object.freeze(r.map(Object.freeze)))),
            share: windowFed.length
              ? windowFed.filter(f => !f).length / windowFed.length : 0,
            why: 'the far cut of the plenum annulus -- fed round the '
               + 'cage, out of the section plane. A TRANSFER and not '
               + 'an injection: the share leaves the near chamber and '
               + 'arrives in the far slot, so both flanges still carry '
               + 'the whole of Q and only the space either side of the '
               + 'cage carries its own part of it.',
          }),
          deadEnds: Object.freeze([
            'the drillings through the plug',
            'the cavity over the plug head']),
          minGap: minGap,
          /* Whether anything is open at all. A consumer that gets
             this back false should not go looking for a flow. */
          open: throatRings.length > 0 && lidY > seatTop,
          note:
            'Every space in the valve that holds fluid, including the '
          + 'ones that hold it STILL. The drillings and the cavity above '
          + 'the plug carry no through-flow by design -- equal pressure '
          + 'above and below is what makes the plug balanced -- and they '
          + 'are full of liquid all the same. Chambers, cage bore, port '
          + 'and windows are measured or sourced; the bridge between the '
          + 'port and the lower chamber is sized to the gap in the trace.',
        });
      },

      flowPathAt: function (travelPct) {
        if (typeof travelPct !== 'number' || travelPct < 0 || travelPct > 100)
          throw new Error('geometry.globeValve: travel is a percentage, ' +
            '0 to 100; got ' + travelPct);

        const A = r => Math.PI * r * r;
        const aLine = A(b / 2);                   /* measured line bore */
        const aPort = A(d / 2);                   /* sourced port diameter */
        /* The fluid reaches the windows across the cage's whole outer
           circumference, over the band the windows occupy. Measured
           cage, sourced window height. */
        const aApproach = 2 * Math.PI * cageR * winH;
        const aBore = A(cageInnerR);              /* measured cage bore */
        const aWin = Math.max(openAreaAt(travelPct), 1e-9);
        const wy = winY0 + winH / 2;
        const lerp = (p, q, t) => p + (q - p) * t;

        /* Flow-down order: in at the left face, up into the upper
           chamber, radially in through the windows, down the cage,
           through the port, into the lower chamber, out at the right. */
        /* MORE STATIONS THROUGH THE CHAMBERS, because one apiece drew
           a tapered tube and not a full cavity. Each is widened below
           to the chord the casting actually gives it, so adding them
           adds fidelity rather than invention: the same measured
           polygon, sampled more finely.

           LAID OUT BETWEEN THE FACE AND THE CAGE, not as fractions of
           the face-to-face. Fractions put the last chamber station
           INSIDE the cage radius, so the route ran past the cage and
           doubled back to reach it -- a kink in the one place the
           drawing has to look deliberate. Interpolating to a point
           just clear of the cage cannot overshoot it. */
        const standOff = -cageR * 1.25;
        const inAt = k => inX + (standOff - inX) * k;
        let st = [
          { x: inX,         y: 0,
            area: aLine,     halfW: b / 2,       what: 'line bore' },
          { x: inAt(0.22),  y: wy * 0.14,
            area: lerp(aLine, aApproach, 0.20), halfW: b / 2,
            what: 'inlet chamber' },
          { x: inAt(0.48),  y: wy * 0.38,
            area: lerp(aLine, aApproach, 0.46), halfW: b / 2,
            what: 'inlet chamber' },
          { x: inAt(0.74),  y: wy * 0.67,
            area: lerp(aLine, aApproach, 0.74), halfW: b / 2,
            what: 'inlet chamber' },
          { x: standOff,    y: wy * 0.92,
            area: aApproach, halfW: winH / 2,    what: 'approach to the cage' },
          { x: -cageR,      y: wy,
            area: aApproach, halfW: winH / 2,    what: 'cage outside face' },
          { x: -cageInnerR, y: wy,
            area: aWin,      halfW: winH / 2,    what: 'cage window' },
          { x: -cageInnerR * 0.45, y: lerp(wy, seatTop, 0.55),
            area: aBore,     halfW: cageInnerR,  what: 'cage bore' },
          { x: 0,           y: 0,
            area: aPort,     halfW: d / 2,       what: 'port' },
          { x: outX * 0.22, y: -wy * 0.50,
            area: lerp(aPort, aLine, 0.28), halfW: b / 2,
            what: 'outlet chamber' },
          { x: outX * 0.46, y: -wy * 0.46,
            area: lerp(aPort, aLine, 0.58), halfW: b / 2,
            what: 'outlet chamber' },
          { x: outX * 0.72, y: -wy * 0.24,
            area: lerp(aPort, aLine, 0.84), halfW: b / 2,
            what: 'outlet chamber' },
          { x: outX,        y: 0,
            area: aLine,     halfW: b / 2,       what: 'line bore' },
        ];
        if (flow !== 'down') {
          st = st.slice().reverse().map(q =>
            Object.assign({}, q, { x: -q.x }));
          /* AND THE CHAMBERS CHANGE NAME WITH THE ORDER. Reversed, the
             station the fluid now meets first still carried the label
             "outlet chamber", so the picture named the inlet the
             outlet. Whichever chamber is met first IS the inlet -- that
             is what the word means. */
          for (const q of st) {
            if (q.what === 'inlet chamber') q.what = 'outlet chamber';
            else if (q.what === 'outlet chamber') q.what = 'inlet chamber';
          }
        }

        /* ---- WIDEN THE CHAMBER STATIONS TO THE CHAMBER ----------------

           Measured, not estimated: each chamber station is pushed out
           to the real chord of the cavity it sits in, and recentred on
           it. Before this the fluid was a ribbon the width of the line
           bore wandering through a cavity three times that across, so
           the chambers read as mostly empty when in service they are
           full.

           The trim stations are left alone. A cage window really is
           the height of a cage window, and the port really is the
           port; those are the numbers that matter and they are already
           right. */
        {
          /* THE CAVITY IS CHOSEN BY CONTAINMENT, not by name.

             Mapping label to ring meant knowing which chamber was
             drawn on which side, which is exactly what the mirror
             changes -- so on a flow-up valve every lookup found the
             chamber on the far side of the valve, missed, and left the
             station at line-bore width. Asking which polygon the point
             is actually inside cannot get that wrong.

             THE APPROACH IS WIDENED TOO, and getting that wrong is
             what left the chambers looking half empty. Its AREA is
             the band of cage circumference the windows occupy -- that
             is three-dimensional and it is right. Its half-width is
             not: halfW is a drawing quantity, how far across the
             section to spread the fluid, and in section the chamber
             at the face of the cage is still the full height of the
             chamber. Using the window height there necked the stream
             down two stations early and left a wedge of standing
             cavity above and below it that is, in the valve, full.

             Only the window station itself keeps the window height,
             because there the fluid really is inside a slot. */
          for (let i = 1; i < st.length - 1; i++) {
            const q = st[i];
            if (q.what !== 'inlet chamber' && q.what !== 'outlet chamber' &&
                q.what !== 'approach to the cage' &&
                q.what !== 'cage outside face')
              continue;
            const ring = inside(chamberL, q.x, q.y) ? chamberL
                       : inside(chamberR, q.x, q.y) ? chamberR : null;
            if (!ring) continue;
            const c = chordAcross(ring, q.x, q.y, 0, 1);
            if (!c || !(c.half > 0)) continue;
            q.y += c.mid;
            q.halfW = c.half;
          }
        }

        /* Arc length, so anything advecting along this has a parameter
           to advect in. */
        let run = 0;
        st[0].s = 0;
        for (let i = 1; i < st.length; i++) {
          run += Math.hypot(st[i].x - st[i - 1].x, st[i].y - st[i - 1].y);
          st[i].s = run;
        }
        let tight = 0;
        for (let i = 1; i < st.length; i++)
          if (st[i].area < st[tight].area) tight = i;

        return Object.freeze({
          travelPct: travelPct,
          stations: Object.freeze(st.map(Object.freeze)),
          length: run,
          /* Which station is the restriction, named rather than left
             for a reader to find by scanning areas. */
          throat: tight,
          minArea: st[tight].area,
          lineArea: aLine,
          enters: flow === 'down' ? 'left' : 'right',
          leaves: flow === 'down' ? 'right' : 'left',
          areaNote:
            'Areas are revolved three-dimensional flow areas and set the '
            + 'velocity by continuity. Line bore and cage are measured; '
            + 'port diameter and the window area are sourced, the window '
            + 'from the derivative of the published Cv curve. Station '
            + 'POSITIONS are a convention -- a section cannot say where a '
            + 'streamline runs -- and are used only to place the drawing.',
        });
      },

      windows: wins,
      axis: { x: 0, portY: 0, seatTop: seatTop },
      /* The left flange is the inlet in both directions, because the
         valve is TURNED ROUND for flow-up rather than relabelled. The
         service decides which way the casting faces; it never decides
         which way the fluid crosses the page. */
      ports: [
        { id: 'left', x: inX, y: 0, dir: [-1, 0], bore: b,
          role: 'inlet' },
        { id: 'right', x: outX, y: 0, dir: [1, 0], bore: b,
          role: 'outlet' },
      ],
      /* Which chamber the fluid reaches first. The upper chamber wraps
         the cage either way; on flow-up it is the one the fluid LEAVES
         through. */
      entersVia: flow === 'down' ? 'upper' : 'lower',
      leavesVia: flow === 'down' ? 'lower' : 'upper',
      extent: extentOf(rings.concat([inletClipped, outletClipped])),
      conventions: Object.freeze(Object.assign({}, G)),
      /* WHAT THIS SHAPE IS, said before anything else about it.

         The outline is the CAGE-GUIDED GLOBE ARCHETYPE. It was traced
         from one valve -- Figure 11-5 of the Fisher Control Valve Sourcebook -- Oil & Gas (drawing W6022-2, "NPS 10-24 EWT or EWD") --
         and it is drawn for every cage-guided globe in the catalogue,
         scaled by that valve's own published face-to-face. ED, EAD,
         EDR, EW, EWD, EWS, EWT: ninety-one of the hundred and five
         valve rows here share one flow path and one arrangement, and
         a learner cannot tell an ED from an EWT by looking at a
         section of it.

         That is a deliberate decision and it is the honest kind only
         while it is declared. The NUMBERS are each valve's own and
         every one of them is sourced -- port, travel, stem, face-to-face,
         line bore, the Cv curve the window profile derives from. The
         SILHOUETTE is representative of the family. Nobody should read
         a casting detail off this drawing and expect it to be true of
         the particular valve in front of them.

         A plug-characterised body -- EZ, with a seat ring retainer and
         no cage windows -- is a different flow path and will need its
         own archetype rather than this one relabelled. */
      archetype: 'cage-guided globe',
      /* ---- HOW FAR THE PLUG CAN ACTUALLY BE DRAWN ------------------

         The rated travel is sourced and the drawn cage is traced, and
         on this archetype they disagree: a shut EWT 10x8 has 2.49 in
         between the top of its plug and the top of its cage against a
         rated 3 in of travel, so even its OWN valve cannot be stroked
         its full rating inside the drawing. Scaled to a valve with a
         higher travel-to-length ratio it is worse -- an ED NPS 4 gets
         1.12 in of a rated 2.

         `plugAt` already clamps to what the drawing has room for and
         reports the true figure as `liftTrue`. This publishes the
         clamp so that ANYTHING ELSE ATTACHED TO THE PLUG can move by
         the same amount. An actuator that strokes its rated travel
         over a plug that strokes 56% of it is not an assembly, it is
         two pictures with a gap that opens as you drag the slider --
         which is exactly what it looked like. */
      /* The same expression plugAt uses, evaluated here rather than
         by calling plugAt -- building the valve must not need a plug,
         and a valve with no published stem diameter is refused at
         plugAt, which is a refusal this would have pre-empted. */
      drawnTravel: drawnTravel,
      travelDrawnFully: Math.abs(drawnTravel - travel) < 1e-9,
      travelNote: Math.abs(drawnTravel - travel) < 1e-9
        ? 'the drawing has room for the whole rated travel'
        : 'THE DRAWING STROKES ' + drawnTravel.toFixed(3) +
          ' IN OF A RATED ' + travel + ' IN. The traced trim column is '
        + 'shorter than the rated travel needs -- true of this '
        + 'archetype even for the valve it was traced from -- so the '
        + 'picture strokes as far as the drawn cage allows. Every '
        + 'NUMBER still uses the rated travel; only the movement is '
        + 'short, and anything coupled to the plug must be short by '
        + 'the same amount or the assembly comes apart on screen.',
      archetypeNote:
        'Traced from one valve and drawn for the family. The outline '
      + 'came off Figure 11-5 of the Fisher Control Valve Sourcebook -- Oil & Gas (drawing W6022-2, "NPS 10-24 EWT or EWD") and is '
      + 'scaled here by the valve its own published face-to-face. Every '
      + 'NUMBER belongs to this valve and is sourced; the SILHOUETTE '
      + 'is the family’s. An EZ is a different flow path and needs '
      + 'its own archetype, not this one relabelled.',
      conventionNote:
        'MEASURED: the casting, the bonnet, both chambers, the cage walls, '
        + 'the plug and the seat ring all come from '
        + 'Figure 11-5 of the Fisher Control Valve Sourcebook -- Oil & Gas (drawing W6022-2, "NPS 10-24 EWT or EWD") -- segmented part '
        + 'by part off a hand colour-coded print, so the boundaries are '
        + 'read rather than inferred, then denoised by the 657 Working '
        + 'Model method (contour trace, approxPolyDP, orthogonal snap, and '
        + 'corner-preserving Chaikin so cast curves smooth while machined '
        + 'faces stay square). AND THAT FIGURE IS TO SCALE: its bore is '
        + '0.323 of its face-to-face and its port 0.293, against 0.359 and '
        + '0.287 for a real EWT 10x8. One published dimension therefore '
        + 'places the casting, the chambers and the trim together, and they '
        + 'agree with the catalogue. A NOTE ON THE SOURCE THIS PASSED '
        + 'OVER: Figure 19 of the ED manual was rejected as "at no '
        + 'particular scale -- bore 0.148 of face-to-face". That '
        + 'measurement is right and the conclusion does not follow. '
        + '0.148 is about what an NPS 1 to 1-1/4 valve HAS; the figure '
        + 'is captioned for NPS 1 through 6 and is drafted at the small '
        + 'end of it. It was judged against a ten-inch valve and found '
        + 'wanting for not being one. It is a drafting section with a '
        + 'drawing number, 30A9542-F, and it is the small-end archetype '
        + 'this core is missing -- see trace/README.md. '
        + 'SOURCED: face-to-face, port diameter, rated travel, stem '
        + 'diameter, line bore, and the cage window profile, which is the '
        + 'derivative of the published Cv curve. STILL CONVENTION, and '
        + 'named in `conventions`: where the windows sit in the cage wall '
        + 'and how tall they are, the balance-hole size and count, and the '
        + 'seal thickness. The window PROFILE is sourced; its placement in '
        + 'this section is not.',
    };
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
    globeValve: globeValve, GLOBE_CONVENTIONS: Object.freeze(GLOBE),
    cageWindows: cageWindows,
    flowPath: flowPath, samplePath: samplePath, boreAtS: boreAtS,
    classes: () => Object.keys(RULES).sort(),
  };

})(window.LPE = window.LPE || {});
