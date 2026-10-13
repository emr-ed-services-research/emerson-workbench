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
      [-0.4979, -0.17495], [-0.4979, -0.22883], [-0.4951, -0.23093],
      [-0.4867, -0.23163], [-0.4867, -0.3478], [-0.4853, -0.3492],
      [-0.39503, -0.3492], [-0.39363, -0.3478], [-0.39363, -0.30231],
      [-0.39503, -0.30161], [-0.39363, -0.30021], [-0.39363, -0.24493],
      [-0.39153, -0.24283], [-0.38663, -0.24283], [-0.38523, -0.22953],
      [-0.38383, -0.22883], [-0.38244, -0.22113], [-0.37824, -0.21624],
      [-0.37824, -0.21414], [-0.36074, -0.19804], [-0.35864, -0.19804],
      [-0.35514, -0.19384], [-0.35304, -0.19384], [-0.34955, -0.18964],
      [-0.34745, -0.18964], [-0.34395, -0.18544], [-0.34185, -0.18544],
      [-0.33695, -0.17985], [-0.33065, -0.17705], [-0.32155, -0.16865],
      [-0.31526, -0.16585], [-0.31036, -0.16025], [-0.29776, -0.15465],
      [-0.29146, -0.15465], [-0.29076, -0.15605], [-0.28307, -0.15745],
      [-0.27537, -0.16375], [-0.27117, -0.17215], [-0.26977, -0.30021],
      [-0.26627, -0.30021], [-0.26557, -0.30161], [-0.24948, -0.30161],
      [-0.24878, -0.31001], [-0.24598, -0.31141], [-0.1809, -0.31141],
      [-0.1802, -0.31281], [-0.1683, -0.31281], [-0.1669, -0.31141],
      [-0.1662, -0.31281], [-0.11372, -0.31281], [-0.11302, -0.31421],
      [-0.06053, -0.31421], [-0.05983, -0.31561], [0.06123, -0.31561],
      [0.06193, -0.31421], [0.10742, -0.31421], [0.10812, -0.31281],
      [0.1536, -0.31281], [0.1543, -0.31141], [0.1557, -0.31281],
      [0.1676, -0.31281], [0.1683, -0.31141], [0.24878, -0.31001],
      [0.25017, -0.30861], [0.25087, -0.30021], [0.27117, -0.29881],
      [0.27117, -0.27432], [0.27397, -0.26872], [0.28027, -0.26242],
      [0.28936, -0.25962], [0.29566, -0.25542], [0.29916, -0.25542],
      [0.31386, -0.24703], [0.31735, -0.24703], [0.36144, -0.22323],
      [0.37334, -0.22323], [0.37404, -0.22463], [0.37754, -0.22463],
      [0.38523, -0.23233], [0.38803, -0.24283], [0.39643, -0.24493],
      [0.39643, -0.3492], [0.4895, -0.3492], [0.4895, -0.23093],
      [0.4993, -0.23023], [0.5007, -0.22883], [0.5007, -0.17215],
      [0.4993, -0.17355], [0.41952, -0.17355], [0.41812, -0.17495],
      [0.40413, -0.17495], [0.40273, -0.17635], [0.37474, -0.18055],
      [0.34115, -0.19174], [0.28796, -0.21833], [0.28516, -0.21833],
      [0.27537, -0.22393], [0.25507, -0.23093], [0.25367, -0.23303],
      [0.24038, -0.23653], [0.23618, -0.23933], [0.23268, -0.23933],
      [0.23198, -0.24073], [0.20329, -0.24913], [0.19839, -0.25192],
      [0.18859, -0.25332], [0.183, -0.25612], [0.155, -0.26312],
      [0.1501, -0.26312], [0.14941, -0.26452], [0.14311, -0.26452],
      [0.14241, -0.26592], [0.12911, -0.26732], [0.12841, -0.26872],
      [0.12211, -0.26872], [0.12141, -0.27012], [0.09552, -0.27292],
      [0.09482, -0.27432], [0.08293, -0.27432], [0.08223, -0.27572],
      [0.05143, -0.27852], [0.03464, -0.27852], [0.03394, -0.27992],
      [-0.03044, -0.27852], [-0.03114, -0.27712], [-0.04444, -0.27572],
      [-0.07383, -0.26592], [-0.07803, -0.26592], [-0.10392, -0.25262],
      [-0.13121, -0.23373], [-0.1634, -0.20154], [-0.1816, -0.17495],
      [-0.19069, -0.15465], [-0.19349, -0.15185], [-0.19349, -0.14766],
      [-0.19909, -0.13506], [-0.20329, -0.11477], [-0.20469, -0.11407],
      [-0.20609, -0.09937], [-0.20749, -0.09867], [-0.20889, -0.07278],
      [-0.20749, -0.05598], [-0.20329, -0.04479], [-0.19139, -0.03149],
      [-0.1802, -0.02589], [-0.1809, 0.0], [-0.19069, 0.0007],
      [-0.19069, 0.02029], [-0.19769, 0.01959], [-0.21379, 0.0112],
      [-0.24038, -0.0098], [-0.25017, -0.02309], [-0.25927, -0.03079],
      [-0.28167, -0.05598], [-0.28516, -0.06228], [-0.29426, -0.06998],
      [-0.31735, -0.09587], [-0.31875, -0.10007], [-0.32995, -0.10987],
      [-0.35374, -0.13786], [-0.36424, -0.14836], [-0.38383, -0.16235],
      [-0.39923, -0.16935], [-0.41603, -0.17355], [-0.42442, -0.17355],
      [-0.42582, -0.17495]
    ],
    [
      [-0.20399, 0.37859], [-0.22778, 0.37929], [-0.22918, 0.38069],
      [-0.22988, 0.39398], [-0.23198, 0.39748], [-0.23828, 0.39468],
      [-0.28446, 0.39398], [-0.28796, 0.39608], [-0.30616, 0.39608],
      [-0.30756, 0.39468], [-0.30756, 0.31421], [-0.31036, 0.30931],
      [-0.31036, 0.30441], [-0.31456, 0.29601], [-0.31735, 0.29391],
      [-0.33695, 0.25472], [-0.33695, 0.25122], [-0.34255, 0.24213],
      [-0.34255, 0.23723], [-0.34535, 0.23373], [-0.34955, 0.21763],
      [-0.35374, 0.20924], [-0.36284, 0.20294], [-0.37614, 0.20294],
      [-0.37894, 0.20434], [-0.38663, 0.21344], [-0.38663, 0.22533],
      [-0.38943, 0.22813], [-0.39643, 0.23023], [-0.39643, 0.3331],
      [-0.4895, 0.3331], [-0.4895, 0.21484], [-0.4979, 0.21414],
      [-0.4986, 0.15885], [-0.39013, 0.15885], [-0.37544, 0.16025],
      [-0.37474, 0.16165], [-0.35794, 0.16445], [-0.32505, 0.17985],
      [-0.31526, 0.18754], [-0.31176, 0.18824], [-0.30056, 0.19664],
      [-0.28097, 0.20784], [-0.27257, 0.21484], [-0.25017, 0.22743],
      [-0.23758, 0.23723], [-0.23548, 0.23723], [-0.22288, 0.24913],
      [-0.21449, 0.26592], [-0.21239, 0.27922], [-0.21309, 0.3261],
      [-0.20399, 0.3436]
    ],
    [
      [0.4881, 0.3373], [0.39503, 0.3373], [0.39503, 0.23023],
      [0.38803, 0.22813], [0.38523, 0.21903], [0.37894, 0.21274],
      [0.37194, 0.20994], [0.36424, 0.20994], [0.35724, 0.21274],
      [0.35094, 0.21903], [0.35094, 0.22253], [0.34815, 0.22603],
      [0.34675, 0.23373], [0.34395, 0.23723], [0.34395, 0.24073],
      [0.34115, 0.24423], [0.33835, 0.25472], [0.32015, 0.29111],
      [0.31596, 0.29461], [0.30896, 0.31141], [0.30896, 0.3191],
      [0.30756, 0.3198], [0.30756, 0.39748], [0.28726, 0.39748],
      [0.28656, 0.39888], [0.28376, 0.39608], [0.23968, 0.39608],
      [0.23058, 0.39748], [0.22988, 0.38279], [0.22848, 0.38139],
      [0.20329, 0.37999], [0.20259, 0.3492], [0.21029, 0.3317],
      [0.21029, 0.27572], [0.21309, 0.26102], [0.22288, 0.24283],
      [0.24808, 0.21693], [0.26627, 0.19034], [0.26907, 0.18334],
      [0.26907, 0.17845], [0.27047, 0.17775], [0.27117, 0.16235],
      [0.26907, 0.15045], [0.26487, 0.14066], [0.25787, 0.13156],
      [0.25647, 0.12666], [0.23408, 0.09027], [0.21449, 0.05388],
      [0.20119, 0.03779], [0.19139, 0.03429], [0.19139, 0.0049],
      [0.1802, 0.0042], [0.1809, -0.01959], [0.19349, -0.0161],
      [0.20749, -0.0084], [0.21169, -0.0035], [0.21379, -0.0035],
      [0.22708, 0.0105], [0.23828, 0.01819], [0.23968, 0.02169],
      [0.24598, 0.02519], [0.26137, 0.03919], [0.26627, 0.04549],
      [0.27257, 0.04899], [0.29916, 0.07278], [0.30406, 0.07908],
      [0.33625, 0.10567], [0.34325, 0.11407], [0.34955, 0.11756],
      [0.36984, 0.13646], [0.38244, 0.14346], [0.38383, 0.14626],
      [0.41742, 0.15745], [0.42792, 0.15745], [0.43002, 0.15885],
      [0.4993, 0.15955], [0.4993, 0.21414], [0.4881, 0.21484]
    ]
  ];

  /* ED_BONNET -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  const ED_BONNET = [
    [
      [0.03534, 0.78237], [0.03534, 0.58013], [0.02274, 0.56683],
      [0.02274, 0.42827], [0.02764, 0.42617], [0.04724, 0.42477],
      [0.04794, 0.42337], [0.06543, 0.42057], [0.08782, 0.40938],
      [0.10602, 0.39118], [0.11582, 0.37579], [0.13191, 0.37579],
      [0.13471, 0.38139], [0.14311, 0.38139], [0.14311, 0.39678],
      [0.14731, 0.40518], [0.19699, 0.40518], [0.19909, 0.40308],
      [0.20049, 0.38209], [0.20259, 0.37999], [0.20399, 0.38139],
      [0.22848, 0.38209], [0.23058, 0.40588], [0.23548, 0.40658],
      [0.23758, 0.40868], [0.28446, 0.40868], [0.28656, 0.40658],
      [0.29846, 0.40658], [0.30266, 0.41008], [0.30616, 0.40938],
      [0.30756, 0.41078], [0.30756, 0.48146], [0.30546, 0.47936],
      [0.28237, 0.48076], [0.21659, 0.47936], [0.21099, 0.48355],
      [0.20959, 0.48845], [0.1725, 0.48845], [0.1718, 0.48985],
      [0.1613, 0.49125], [0.1529, 0.49545], [0.14241, 0.50595],
      [0.13961, 0.51505], [0.13681, 0.51714], [0.13681, 0.52064],
      [0.13261, 0.52694], [0.12981, 0.53744], [0.12561, 0.54374],
      [0.12281, 0.55423], [0.11861, 0.56053], [0.11861, 0.56403],
      [0.11582, 0.56753], [0.11302, 0.57803], [0.10742, 0.58712],
      [0.10742, 0.59062], [0.10462, 0.59412], [0.10182, 0.60462],
      [0.09762, 0.61092], [0.09342, 0.62561], [0.08642, 0.63891],
      [0.08642, 0.6704], [0.09272, 0.6781], [0.09762, 0.6795],
      [0.09762, 0.68719], [0.10252, 0.69069], [0.14941, 0.69069],
      [0.1508, 0.68929], [0.1522, 0.69069], [0.1522, 0.73058],
      [0.1508, 0.73198], [0.11372, 0.73058], [0.11092, 0.73338],
      [0.11022, 0.73198], [0.10392, 0.73198], [0.10042, 0.73548],
      [0.10042, 0.77957], [0.09622, 0.78376], [0.07383, 0.78376],
      [0.07313, 0.74668], [0.06893, 0.74178], [0.06893, 0.71938],
      [0.06683, 0.71728], [0.05983, 0.71589], [0.05213, 0.71728],
      [0.05003, 0.71868], [0.05003, 0.74248], [0.04724, 0.74528],
      [0.04724, 0.78237]
    ],
    [
      [-0.04094, 0.78237], [-0.05143, 0.78237], [-0.05143, 0.74668],
      [-0.05563, 0.74178], [-0.05563, 0.72008], [-0.06333, 0.71239],
      [-0.06683, 0.71239], [-0.07453, 0.71868], [-0.07453, 0.74178],
      [-0.07873, 0.74528], [-0.07943, 0.78376], [-0.10042, 0.78376],
      [-0.10602, 0.77817], [-0.10602, 0.73688], [-0.10952, 0.73198],
      [-0.11931, 0.73058], [-0.14241, 0.73058], [-0.14381, 0.73198],
      [-0.1536, 0.73198], [-0.1543, 0.73338], [-0.1592, 0.73198],
      [-0.1592, 0.68929], [-0.1578, 0.68789], [-0.1557, 0.68999],
      [-0.10882, 0.68999], [-0.10532, 0.68509], [-0.10462, 0.6795],
      [-0.09972, 0.6781], [-0.09482, 0.6732], [-0.09482, 0.6697],
      [-0.09342, 0.669], [-0.09342, 0.63331], [-0.09482, 0.63261],
      [-0.09482, 0.62911], [-0.10042, 0.62001], [-0.10182, 0.61232],
      [-0.11022, 0.59622], [-0.11162, 0.58852], [-0.11582, 0.58223],
      [-0.11582, 0.57873], [-0.11861, 0.57523], [-0.12141, 0.56473],
      [-0.13261, 0.54164], [-0.13261, 0.53814], [-0.13541, 0.53464],
      [-0.13821, 0.52414], [-0.14941, 0.50315], [-0.1557, 0.49685],
      [-0.1683, 0.48985], [-0.1732, 0.48985], [-0.1739, 0.48845],
      [-0.20819, 0.48845], [-0.21309, 0.48006], [-0.21589, 0.48146],
      [-0.21868, 0.47866], [-0.30476, 0.47866], [-0.30896, 0.48146],
      [-0.30896, 0.40798], [-0.30756, 0.40658], [-0.28656, 0.40658],
      [-0.28376, 0.40798], [-0.23828, 0.40798], [-0.23268, 0.40658],
      [-0.23058, 0.40448], [-0.23128, 0.39608], [-0.22918, 0.39398],
      [-0.22778, 0.37999], [-0.20469, 0.37929], [-0.20189, 0.38069],
      [-0.20049, 0.40588], [-0.1501, 0.40588], [-0.14941, 0.39748],
      [-0.14731, 0.39538], [-0.14731, 0.38069], [-0.13891, 0.38069],
      [-0.13751, 0.37719], [-0.13471, 0.37579], [-0.11861, 0.37579],
      [-0.11512, 0.38348], [-0.10742, 0.39398], [-0.09692, 0.40448],
      [-0.08642, 0.41218], [-0.06403, 0.42197], [-0.02834, 0.42827],
      [-0.02834, 0.56613], [-0.04024, 0.57523]
    ]
  ];

  const ED_CAGE_L = [
    [-0.19979, 0.39468], [-0.20119, 0.39328], [-0.20119, 0.38069],
    [-0.20329, 0.37859], [-0.20329, 0.3436], [-0.19419, 0.3289],
    [-0.19349, 0.16865], [-0.1823, 0.16445], [-0.1669, 0.16445],
    [-0.1676, 0.35129], [-0.169, 0.35829], [-0.183, 0.35829],
    [-0.18579, 0.35969], [-0.18719, 0.36389], [-0.18719, 0.37929],
    [-0.19139, 0.38069], [-0.19069, 0.39328], [-0.19209, 0.39468]
  ];

  const ED_CAGE_R = [
    [0.19839, 0.39748], [0.19209, 0.39748], [0.19069, 0.39608],
    [0.19069, 0.38558], [0.18579, 0.38069], [0.18579, 0.36249],
    [0.183, 0.35969], [0.1683, 0.35969], [0.1669, 0.35479],
    [0.1662, 0.22603], [0.1676, 0.22463], [0.1683, 0.16585],
    [0.183, 0.16585], [0.19349, 0.17285], [0.19279, 0.3317],
    [0.19699, 0.3401], [0.19979, 0.3422], [0.20189, 0.3492],
    [0.20119, 0.36949], [0.20259, 0.37299], [0.20259, 0.37929],
    [0.19979, 0.38209], [0.19979, 0.39468]
  ];

  /* THE WINDOWED BAND OF THE CAGE, painted as its own colour because
     Franz paints what the figure draws, and the figure draws the
     windows separately. It is still cage: the same wall with openings
     cut in it. It sits BELOW the solid colour -- y 0.42 to 4.13 in on
     the NPS 8 against a solid cage starting at 3.95 -- so leaving it
     out made the cage two inches short at its foot, put most of the
     plug below its own bore, and left the space beside the window
     belonging to no part at all. Used here for the cage's outer
     silhouette; where the openings are is a separate question and
     still answered by convention, which this paint could now
     replace. */
  const ED_WINDOW_L = [
    [-0.19419, 0.16795], [-0.19419, 0.04059], [-0.18999, 0.03639],
    [-0.18999, 0.01749], [-0.1739, 0.01749], [-0.1732, 0.02169],
    [-0.1669, 0.02169], [-0.1669, 0.16375], [-0.1823, 0.16375]
  ];

  const ED_WINDOW_R = [
    [0.19349, 0.17215], [0.183, 0.16515], [0.1683, 0.16515],
    [0.1683, 0.02589], [0.176, 0.02589], [0.1774, 0.01959],
    [0.19069, 0.02029], [0.19069, 0.03709], [0.19419, 0.04129]
  ];

  /* THE CHAMBERS, MISSED BY THE FIRST SWAP. The valve ran for a while
     with an ED cage in an EWT casting's chambers -- the hybrid the
     swap existed to avoid -- and it showed as both cage windows
     reading UNFED, because an EWT chamber does not lap an ED cage.
     The plenum then had nothing to take its share from and the far
     window carried nothing.

     Taken from the registered trace's FLUID mask, which is the other
     half of what painting the void bought: the chambers are traced
     rather than inferred from where the metal happens not to be.
     Chosen by POSITION, not size -- the largest fluid region of all is
     the cage bore, which straddles the axis and is not a chamber. */
  /* EVERY OTHER SPACE THE TRACE FOUND FLUID IN. The two chambers
     are named separately because the solver treats them as inlet and
     outlet; these are the rest -- the clearance round the cage, the
     bore above the plug, the bonnet bore. They were being left out,
     and the right-hand clearance in particular drew as nothing: a
     white slot exactly where fluid gets round the cage on its way to
     the windows. The trace knows where the water is; there is no
     reason for this layer to work it out again. */
  /* THE GASKETS AT THE CAGE TOP, which are what makes the valve a
     closed vessel. The bonnet bolts down onto them and they bear on
     the cage; that stack is the seal between the process and the
     room, and it is also the reason the fluid outboard of the cage
     stops where it does rather than continuing up to the bonnet
     flange. Drawn as the small rings they are -- spiral-wound and
     wire-mesh, both painted brown on the trace. */
  const ED_GASKET = [
    [
      [-0.14801, 0.39538], [-0.14941, 0.39678], [-0.18579, 0.39608],
      [-0.18789, 0.39328], [-0.18999, 0.39328], [-0.19069, 0.38069],
      [-0.18649, 0.37929], [-0.18649, 0.36389], [-0.18509, 0.35969],
      [-0.1536, 0.35899], [-0.1529, 0.36459], [-0.13891, 0.36459],
      [-0.13821, 0.37789], [-0.13891, 0.37999], [-0.14801, 0.38069]
    ],
    [
      [0.14381, 0.39678], [0.14381, 0.38139], [0.13471, 0.38069],
      [0.13401, 0.37859], [0.13471, 0.36529], [0.14661, 0.36529],
      [0.14731, 0.35969], [0.1669, 0.35899], [0.1683, 0.36039],
      [0.183, 0.36039], [0.18509, 0.36249], [0.18509, 0.38069],
      [0.18999, 0.38558], [0.18999, 0.39328], [0.18579, 0.39748],
      [0.14521, 0.39818]
    ]
  ];
  const ED_VOIDS = [
    [
      [0.08572, 0.22603], [0.08572, 0.14696], [0.13821, 0.14696],
      [0.13821, 0.22603]
    ],
    [
      [-0.13891, 0.22533], [-0.13891, 0.14696], [-0.08782, 0.14696],
      [-0.08782, 0.22533]
    ],
    [
      [0.20259, 0.3471], [0.20049, 0.3457], [0.20049, 0.3422],
      [0.19769, 0.3401], [0.19349, 0.3317], [0.19489, 0.04129],
      [0.19209, 0.03919], [0.19139, 0.03499], [0.20119, 0.03849],
      [0.21379, 0.05388], [0.23338, 0.09027], [0.25577, 0.12666],
      [0.25717, 0.13156], [0.26417, 0.14066], [0.26837, 0.15045],
      [0.27047, 0.16235], [0.26977, 0.17775], [0.26837, 0.17845],
      [0.26837, 0.18334], [0.26557, 0.19034], [0.24738, 0.21693],
      [0.22218, 0.24283], [0.21239, 0.26102], [0.20959, 0.27572],
      [0.20959, 0.3317]
    ],
    [
      [0.01714, 0.80406], [0.01854, 0.22743], [0.13891, 0.22813],
      [0.1655, 0.22673], [0.1669, 0.35829], [0.14731, 0.35899],
      [0.14661, 0.36459], [0.13471, 0.36459], [0.13331, 0.37579],
      [0.11582, 0.37509], [0.11302, 0.37719], [0.11162, 0.38209],
      [0.10532, 0.39118], [0.08782, 0.40868], [0.06543, 0.41987],
      [0.06053, 0.41987], [0.05983, 0.42127], [0.05493, 0.42127],
      [0.05423, 0.42267], [0.02764, 0.42547], [0.02204, 0.42827],
      [0.02204, 0.56683], [0.03464, 0.58013], [0.03464, 0.78237],
      [0.04724, 0.78307], [0.04724, 0.80406]
    ],
    [
      [-0.02414, 0.80406], [-0.05143, 0.80406], [-0.05143, 0.78307],
      [-0.04024, 0.78237], [-0.03954, 0.57523], [-0.02764, 0.56613],
      [-0.02764, 0.42827], [-0.02904, 0.42687], [-0.06403, 0.42127],
      [-0.08642, 0.41148], [-0.10672, 0.39398], [-0.11861, 0.37509],
      [-0.13471, 0.37509], [-0.13751, 0.37649], [-0.13891, 0.36389],
      [-0.1529, 0.36389], [-0.1536, 0.35829], [-0.1683, 0.35759],
      [-0.1669, 0.35129], [-0.1676, 0.28761], [-0.1662, 0.22603],
      [-0.1627, 0.22743], [-0.13891, 0.22813], [-0.02274, 0.22743]
    ]
  ];
  const ED_CHAMBER_L = [
    [-0.20329, 0.3429], [-0.20539, 0.3415], [-0.21239, 0.3261],
    [-0.21169, 0.27922], [-0.21519, 0.26172], [-0.22218, 0.24913],
    [-0.23548, 0.23653], [-0.23758, 0.23653], [-0.25017, 0.22673],
    [-0.27257, 0.21414], [-0.28097, 0.20714], [-0.28516, 0.20574],
    [-0.31176, 0.18754], [-0.31526, 0.18684], [-0.31805, 0.18334],
    [-0.34955, 0.16655], [-0.36214, 0.16375], [-0.36284, 0.16235],
    [-0.36774, 0.16235], [-0.36844, 0.16095], [-0.37474, 0.16095],
    [-0.37544, 0.15955], [-0.39013, 0.15815], [-0.4986, 0.15815],
    [-0.4972, 0.02169], [-0.4979, -0.17425], [-0.42582, -0.17425],
    [-0.42442, -0.17285], [-0.41603, -0.17285], [-0.39923, -0.16865],
    [-0.38383, -0.16165], [-0.36424, -0.14766], [-0.35444, -0.13786],
    [-0.33065, -0.10987], [-0.31945, -0.10007], [-0.31805, -0.09587],
    [-0.29496, -0.06998], [-0.28586, -0.06228], [-0.28237, -0.05598],
    [-0.25997, -0.03079], [-0.25087, -0.02309], [-0.24038, -0.0091],
    [-0.21379, 0.0119], [-0.20119, 0.01889], [-0.19139, 0.02099],
    [-0.19069, 0.03639], [-0.19489, 0.04059], [-0.19489, 0.3289]
  ];

  const ED_CHAMBER_R = [
    [0.4993, 0.15885], [0.43002, 0.15815], [0.42792, 0.15675],
    [0.41742, 0.15675], [0.38383, 0.14556], [0.38244, 0.14276],
    [0.37544, 0.13996], [0.34955, 0.11686], [0.34325, 0.11337],
    [0.33625, 0.10497], [0.30406, 0.07838], [0.29916, 0.07208],
    [0.27257, 0.04829], [0.26627, 0.04479], [0.26137, 0.03849],
    [0.24598, 0.02449], [0.23968, 0.02099], [0.23828, 0.01749],
    [0.22708, 0.0098], [0.21379, -0.0042], [0.21169, -0.0042],
    [0.21029, -0.007], [0.19909, -0.014], [0.18649, -0.01959],
    [0.1823, -0.01959], [0.1802, -0.02169], [0.1725, -0.02169],
    [0.1662, -0.0126], [0.1662, 0.01959], [0.14521, 0.02029],
    [0.14521, 0.14136], [0.14171, 0.14626], [0.13961, 0.14486],
    [-0.14101, 0.14556], [-0.14661, 0.14136], [-0.14661, 0.01889],
    [-0.1648, 0.01819], [-0.1648, -0.0147], [-0.1718, -0.02519],
    [-0.1788, -0.02519], [-0.19139, -0.03219], [-0.20259, -0.04479],
    [-0.20679, -0.05598], [-0.20819, -0.07278], [-0.20679, -0.09867],
    [-0.20539, -0.09937], [-0.20119, -0.12526], [-0.19559, -0.14346],
    [-0.19279, -0.14766], [-0.19279, -0.15185], [-0.18999, -0.15465],
    [-0.18859, -0.16025], [-0.1788, -0.17845], [-0.1627, -0.20154],
    [-0.14311, -0.22253], [-0.11931, -0.24213], [-0.07803, -0.26522],
    [-0.07383, -0.26522], [-0.04444, -0.27502], [-0.03114, -0.27642],
    [-0.03044, -0.27782], [-0.00525, -0.27922], [0.03394, -0.27922],
    [0.03464, -0.27782], [0.05143, -0.27782], [0.08223, -0.27502],
    [0.08293, -0.27362], [0.09482, -0.27362], [0.09552, -0.27222],
    [0.12141, -0.26942], [0.12211, -0.26802], [0.14941, -0.26382],
    [0.1501, -0.26242], [0.183, -0.25542], [0.18369, -0.25402],
    [0.19839, -0.25122], [0.20329, -0.24843], [0.20679, -0.24843],
    [0.25367, -0.23233], [0.25507, -0.23023], [0.27537, -0.22323],
    [0.30056, -0.21064], [0.30336, -0.21064], [0.30616, -0.20784],
    [0.31176, -0.20644], [0.34115, -0.19104], [0.38034, -0.17845],
    [0.40273, -0.17565], [0.40413, -0.17425], [0.41812, -0.17425],
    [0.41952, -0.17285], [0.4993, -0.17285], [0.5007, -0.17145],
    [0.5007, 0.11477], [0.4993, 0.11547]
  ];

  const ED_PLUG = [
    [
      [0.13891, 0.22673], [0.13891, 0.14696], [0.14171, 0.14696],
      [0.14591, 0.14136], [0.14591, 0.02029], [0.1669, 0.02029],
      [0.1676, 0.19594], [0.14731, 0.19594], [0.14591, 0.19734],
      [0.14521, 0.20854], [0.14731, 0.21763], [0.1669, 0.21763],
      [0.1669, 0.22463], [0.1613, 0.22673]
    ],
    [
      [-0.08712, 0.22673], [-0.08712, 0.14626], [0.08502, 0.14626],
      [0.08502, 0.22673], [0.01784, 0.22673], [0.01714, 0.15745],
      [-0.02204, 0.15815], [-0.02204, 0.22673]
    ],
    [
      [-0.1627, 0.22673], [-0.1662, 0.22393], [-0.1662, 0.21763],
      [-0.14521, 0.21693], [-0.14521, 0.19524], [-0.1662, 0.19454],
      [-0.1662, 0.02169], [-0.1648, 0.01889], [-0.14731, 0.01889],
      [-0.14731, 0.14136], [-0.14381, 0.14486], [-0.13961, 0.14626],
      [-0.13961, 0.22673]
    ]
  ];

  /* BOTH HALVES, as painted. The ring is cut by its own bore in
     the paint now, so there is nothing here to infer. */
  const ED_SEAT = [
    [
      [-0.1655, 0.02099], [-0.1732, 0.02099], [-0.1739, 0.01679],
      [-0.18999, 0.01679], [-0.18999, 0.0007], [-0.1802, 0.0],
      [-0.1795, -0.02519], [-0.1718, -0.02449], [-0.1655, -0.0147]
    ],
    [
      [0.1683, 0.02519], [0.1669, 0.01959], [0.1669, -0.0126],
      [0.1725, -0.02099], [0.1802, -0.02099], [0.1795, 0.0042],
      [0.19069, 0.0049], [0.19069, 0.01959], [0.1774, 0.01889],
      [0.176, 0.02029], [0.176, 0.02519]
    ]
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

    /* ---- THE TRIM'S RADIAL DATUM IS THE PORT ------------------------

       One traced figure can only be stretched, and stretching it by
       face-to-face alone stretches the port with it. The archetype is
       an ED NPS 8: its painted seat bore is 0.332 of its own
       face-to-face, which is 8.0 in over 24.0 and exactly what
       Catalog 12 publishes for that valve. Hand the same outlines a
       valve whose port is a different fraction of its length and the
       port comes out wrong -- 9.80 in against a published 8.00 on the
       EWT 10x8, and 19% out on the ED NPS 4 that FIC-101 actually
       uses. Real valves run 0.117 to 0.357 of face-to-face, so this is
       not an edge case; it is most of the range.

       A valve has TWO published lengths and they are independent. The
       casting is as long as its face-to-face and the trim is as wide
       as its port, and both come out of the catalogue, which refuses
       to load either unless it matches the document that printed it.
       So the body, the bonnet and the chambers scale by face-to-face,
       as they did; the cage, the plug, the seat and the gasket that
       bears on the cage scale RADIALLY by the port. Heights are
       untouched -- travel is published separately and already is.

       The factor is derived from the paint, not typed: the archetype's
       own port is the bore Franz painted into the seat ring, so this
       is "move the traced port onto the published one" and nothing
       else. Scaled rather than clipped, because the four of them are a
       matched set -- the cage stands on the seat ring and the plug
       slides in the cage bore -- and cutting one of them to size is
       how an 8 in seat ends up under a 9.9 in cage with a gap between
       them that fluid would pour through. */
    const ARCH_PORT = (function () {
      let lo = Infinity;
      for (const r of ED_SEAT)
        for (const q of r) if (Math.abs(q[0]) < lo) lo = Math.abs(q[0]);
      return lo * 2;
    })();
    if (!(ARCH_PORT > 0.05 && ARCH_PORT < 0.6))
      throw new Error('geometry.globeValve: the archetype own port reads '
        + ARCH_PORT.toFixed(4) + ' of face-to-face, which is '
        + 'not a port. ED_SEAT is meant to be the seat ring in two '
        + 'halves with its bore between them; if the trace has merged '
        + 'them into one band there is no bore to measure and the trim '
        + 'cannot be put on the published port.');
    const trimK = (d / F) / ARCH_PORT;
    const placeTrim = ([u, v]) => [u * mx * F * trimK, v * F];

    /* ---- AND THE CASTING IS BORED TO TAKE IT ------------------------

       Putting the trim on its published port is only half the job, and
       the half that was done first was the wrong half to stop at. The
       traced chamber stops where the traced cage began -- in the
       figure those are the same line, because the casting is bored to
       take the cage -- so pulling the trim in left a band of nothing
       around it. Drawn, it is an annulus of water where the bore wall
       is; a quarter of an inch on the ED NPS 4, and plainly wrong in
       the picture before it was anything else.

       A real valve family does not work that way. One casting takes
       several port sizes and the BORE changes with them: a smaller
       cage goes in a smaller bore, not into the same bore with a gap
       round it. So the bore moves with the trim. Anything lying on or
       inside the traced bore wall -- the casting's inner face, the
       bonnet's, the chamber edge that was drawn against it -- is
       scaled by the same factor; anything outside it, which is every
       external dimension of the casting, is untouched and still
       scales by face-to-face alone.

       An earlier pass filled the band with water instead and called it
       annulus. It made the flow solver happy and the drawing wrong,
       which is the wrong way round. */
    const traced = [].concat(
      [ED_CAGE_L.map(place), ED_CAGE_R.map(place)],
      [ED_WINDOW_L.map(place), ED_WINDOW_R.map(place)],
      ED_SEAT.map(r => r.map(place)),
      ED_GASKET.map(r => r.map(place)));
    let boreY0 = Infinity, boreY1 = -Infinity;
    for (const r of traced)
      for (const q of r) {
        if (q[1] < boreY0) boreY0 = q[1];
        if (q[1] > boreY1) boreY1 = q[1];
      }
    /* the traced bore wall at one height: how far out the trim reached
       before it was put on the port */
    const boreAt = y => {
      if (y < boreY0 || y > boreY1) return null;
      let r = null;
      for (const ring of traced)
        for (let a = 0, b = ring.length - 1; a < ring.length; b = a++) {
          const p0 = ring[a], p1 = ring[b];
          if ((p0[1] > y) === (p1[1] > y)) continue;
          const x = Math.abs(p0[0] + (p1[0] - p0[0]) * (y - p0[1]) /
                             (p1[1] - p0[1]));
          if (r === null || x > r) r = x;
        }
      return r;
    };
    const BORE_EPS = 0.02;
    /* One horizontal cut through a ring, keeping one side.
       Sutherland-Hodgman, not a clamp: a clamped vertex slides along
       the cut line and draws a bar across whatever it was bounding,
       which is how a black line once appeared across the seat bore. */
    const cutAtY = (ring, yc, keepAbove) => {
      const out = [];
      const inside = q => keepAbove ? q[1] >= yc : q[1] <= yc;
      for (let i = 0; i < ring.length; i++) {
        const a = ring[i], b = ring[(i + 1) % ring.length];
        const ain = inside(a), bin = inside(b);
        if (ain) out.push(a);
        if (ain !== bin) {
          const t = (yc - a[1]) / (b[1] - a[1]);
          out.push([a[0] + (b[0] - a[0]) * t, yc]);
        }
      }
      return out;
    };
    const bored = ring => (trimK > 1 - 1e-9 && trimK < 1 + 1e-9) ? ring
      : ring.map(q => {
        const R = boreAt(q[1]);
        if (R === null || Math.abs(q[0]) > R + BORE_EPS) return q;
        return [q[0] * trimK, q[1]];
      });
    const wall = G.wallThk * d;
    const inX = -half, outX = half;

    /* The painted fill bleeds a pixel or two past the flange outline, so
       every ring reads about half a percent longer than the casting.
       Clipped to the face rather than left to make the valve longer
       than its own published face-to-face. */
    const toFace = ([x, y]) => [Math.max(-half, Math.min(half, x)), y];
    const bodyRings = ED_BODY.map(r => bored(r.map(place)).map(toFace));
    const body = bodyRings[0];
    const bonnetRings = ED_BONNET.map(r => bored(r.map(place)).map(toFace));
    /* TAKEN AS PAINTED, for the same reason as the seat. */
    const gasket = ED_GASKET.map(r => r.map(placeTrim).map(toFace));

    /* THE SEAT RING'S UNDERSIDE was squared off in the refinement
       stage rather than here: the region beneath the ring is not
       hatched in Figure 20 -- it is the back of the seat, seen rather
       than cut -- so it painted as open space and traced thin at each
       end. A seat ring with a knife edge either side of its bore is
       wrong in the one place it matters, because those ends are what
       the flow accelerates past and where cavitation takes a ring
       apart. `_square_off` in trace/refine.py carries the underside
       down to the ring's own deepest face. */
    /* TAKEN AS PAINTED. This used to cut the traced band in two at
       the port, because the ring's two cut halves and the opening
       between them had painted as one shape. That is a thing to fix in
       the paint, not here: the bore belongs to whoever knows where it
       is, and every version of me inferring it produced something
       worse -- including a clamp that drew a black bar clean across
       the opening. */
    const seat = ED_SEAT.map(r => r.map(placeTrim));

    /* Flow decides which measured chamber meets the fluid first, and
       the mirror above has already put that one on the left. The
       casting is the same casting either way. */
    /* The colour fill bleeds a pixel or two past the flange outline, so
       a chamber reads 0.5% longer than the casting. Clipped to the face
       rather than left to make the valve longer than its own published
       face-to-face. */
    const chamberL = bored(ED_CHAMBER_L.map(place)).map(toFace);
    const chamberR = bored(ED_CHAMBER_R.map(place)).map(toFace);
    const silhouette = EWT_SILHOUETTE.map(place).map(toFace);
    const inlet = flow === 'down' ? chamberL : chamberR;
    const outlet = flow === 'down' ? chamberR : chamberL;
    const inletClipped = inlet, outletClipped = outlet;

    /* The cage, as two walls either side of the axis. Measured, so the
       proportions are the valve's rather than a set of multiples. */
    const cageWallL0 = ED_CAGE_L.map(placeTrim);
    const cageWallR0 = ED_CAGE_R.map(placeTrim);

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
    /* The windowed band, placed and scaled with the rest of the trim.
       Not run through `toBore`: that symmetrises a cage BORE, and this
       band is wanted for its OUTER face, which is what the casting is
       bored to take and therefore what the chamber was drawn against. */
    /* ---- THE CAGE FOOT, AND WHERE IT ENDS ---------------------------

       Franz paints the windowed band as one colour, and the band runs
       lower than the windows do: on the NPS 8 figure it starts at
       y 0.42 in while the seat ring's top face is at 0.60. It has to.
       A cage BEARS on the seat ring -- that land is how the seat is
       retained and how the bonnet load reaches it -- so the bottom of
       that band is cage metal, not opening, and reading the whole band
       as window left the cage standing on nothing.

       The line between them is the seat ring's own top face. That is a
       choice, and it is declared as one below; what it is not is a
       number picked for the look of it. The cage lands on the seat, so
       the metal that does the landing is the metal beside the seat,
       and the seat says where that ends. It also comes out low in the
       band, which is where a cage window starts: just clear of the
       seat, so the first thousandth of travel passes flow. */
    const bandL = ED_WINDOW_L.map(placeTrim);
    const bandR = ED_WINDOW_R.map(placeTrim);
    const seatTop0 = (function () {
      let t = -Infinity;
      for (const r of seat) for (const q of r) if (q[1] > t) t = q[1];
      return t;
    })();
    const footL = cutAtY(bandL, seatTop0, false);
    const footR = cutAtY(bandR, seatTop0, false);
    const winWallL = cutAtY(bandL, seatTop0, true);
    const winWallR = cutAtY(bandR, seatTop0, true);
    if (winWallL.length < 3 || winWallR.length < 3)
      throw new Error('geometry.globeValve: the cage window band is '
        + 'entirely below the seat ring top face, so there is no window '
        + 'left above the foot. Either the band or the seat is painted '
        + 'wrong on the figure.');
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
    /* the cage reaches down to the bottom of its FOOT, not to the
       bottom of the window above it */
    const fL = extentOfRing(footL.length > 2 ? footL : winWallL);
    const fR = extentOfRing(footR.length > 2 ? footR : winWallR);
    /* INNER AND OUTER BY MAGNITUDE, not by which ring they came from.

       These were read off named edges -- the left wall's outer x, the
       right wall's outer x -- which quietly assumes the left wall is
       on the left. Mirror the casting for flow-up and those edges
       swap, so the "outer" radius came back as the inner one and the
       cage bore grew by a wall thickness. Taking the extreme distance
       from the axis over every cage point cannot care which way the
       valve is facing. */
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
    const cageXs = cageWallL.concat(cageWallR).map(q => Math.abs(q[0]));
    const cageR = Math.max.apply(null, cageXs);

    /* THE BORE IS THE WIDEST THE CAGE IS OPEN, measured, not the point
       of the cage nearest the axis.

       Those are the same thing only while a cage wall is a bar, and the
       EWT outline was two bars, so `min |x|` was right for as long as
       that lasted. The registered ED cage is a BRACKET: two walls plus
       the top band that ties them together and carries the bonnet load.
       The band reaches in to the stem, so the nearest cage point to the
       axis is the STEM bore -- 0.61 in on a valve whose plug is 8.07 in
       across. Every question of the form "how wide is the cage open"
       then got an answer two orders of magnitude out, in silence: the
       plug's own hollow stopped counting as part of the valve, and five
       square inches of it drew as nothing.

       So: walk the height, take the clear gap between the two walls at
       each station, keep the largest. A lid narrows the gap and
       therefore cannot win; the walls define it and therefore do.

       Not an average -- a statistic here would be a way of not knowing
       which stations are wall. And not a number typed in: these
       outlines are fractions of face-to-face so that one archetype
       serves every size, so a 4.06 would be an ED-NPS-8-at-24-inches
       constant hidden inside a function that draws whatever it is
       handed. There is no sourced cage bore to reach for either --
       Catalog 12 publishes the PORT, which is a different diameter. */
    let cageInnerR = 0;
    for (let i = 1; i < 60; i++) {
      const y = cL.y0 + (Math.max(cL.y1, cR.y1) - cL.y0) * (i / 60);
      const fl = facesAt(cageWallL, y), fr = facesAt(cageWallR, y);
      if (!fl || !fr) continue;
      const gap = Math.min(Math.abs(fl.lo), Math.abs(fl.hi),
                           Math.abs(fr.lo), Math.abs(fr.hi));
      if (gap > cageInnerR) cageInnerR = gap;
    }
    if (!(cageInnerR > 0))
      throw new Error('geometry.globeValve: the cage never opens -- no ' +
        'horizontal crosses both walls at any height. The traced cage ' +
        'is not a pair of walls about an axis, and nothing below here ' +
        'is right.');
    /* THE CAGE IS AS TALL AS THE CAGE, band included. These were the
       extents of the SOLID colour alone, which starts above the
       windows: the cage then measured 4.87 to 11.77 on the ED NPS 4
       while its own windows ran 0.52 to 3.52, and every question of
       the form "how tall is the cage" was answered about its upper
       half. A hole through a wall is part of the wall. */
    const cageY0 = Math.min(cL.y0, cR.y0, fL.y0, fR.y0);
    const cageY1 = Math.max(cL.y1, cR.y1, fL.y1, fR.y1);
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
    /* WHERE THE WINDOWS ARE IS NOW TRACED, NOT CONVENED.

       This was `cageY0 + 8%` and `72% of the cage height`, two
       fractions with nothing behind them, and they were wrong by the
       height of a window: on the NPS 8 figure the painted band runs
       y 0.42 to 4.13 in and the convention put it at 3.95 to 9.54 --
       above the band entirely, in solid wall. The consequence was
       measurable and it was in the right place to matter: the model
       sampled its own window and found 3.6 times the line velocity
       where a window runs tens of times it, because the hole it drew
       was not where the hole is.

       Franz paints the windowed band as its own colour, so the figure
       answers it. The band is the hole's extent; how much of the band
       is UNCOVERED is still the plug's business and still capped by
       travel, which is published separately. */
    const winBand = (function () {
      let y0 = Infinity, y1 = -Infinity, n = 0;
      for (const r of [winWallL, winWallR])
        for (const q of r) {
          n++;
          if (q[1] < y0) y0 = q[1];
          if (q[1] > y1) y1 = q[1];
        }
      if (n < 6 || !(y1 - y0 > 0))
        throw new Error('geometry.globeValve: the cage window band is not '
          + 'in the archetype. ED_WINDOW_L and ED_WINDOW_R come from the '
          + 'cageWindow colour on the traced figure; without them there '
          + 'is nothing to say where the windows are, and the 8-percent '
          + 'convention this replaced was wrong by a whole window.');
      return { y0: y0, h: y1 - y0 };
    })();
    const winY0 = winBand.y0;
    const winH = Math.min(travel, winBand.h);

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
    /* CUT THROUGH THE BAND, not through the wall above it. The solid
       cage colour does not reach down to the windows -- that is the
       whole point of the band being painted separately -- so asking
       the wall for its faces at window height returned nothing. */
    const windows = [windowOf(winWallL), windowOf(winWallR)]
      .filter(w => w && w.length > 2);
    if (windows.length !== 2)
      throw new Error('geometry.globeValve: the section should cut two ' +
        'cage windows and it cut ' + windows.length + '. The window is ' +
        'the wall at each height, so a wall the horizontal cannot cross ' +
        'means the traced cage is not a pair of walls either side of a ' +
        'bore, and nothing below here will be right.');
    /* The foot is cage and draws as cage. Kept as its own pieces
       rather than merged into the walls above it: in section they are
       separated by the window, which is the whole point of there being
       a window. */
    const cageRings = [cageWallL, cageWallR]
      .concat(footL.length > 2 ? [footL] : [])
      .concat(footR.length > 2 ? [footR] : []);
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
    const plugRings = ED_PLUG.map(r => r.map(placeTrim));
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
      /* the bonnet-to-cage seal stack, drawn because it is the reason
         the process stays inside the valve */
      gasket: gasket,
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
        const box2 = (xa, xb, ya, yb) =>
          [[xa, ya], [xb, ya], [xb, yb], [xa, yb]];

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
        /* A HAIR ABOVE THE PLUG'S OWN FACE, so the two overlap instead
           of meeting exactly. Butted at the same y they leave a seam a
           cell or two tall across the full width of the bore -- 1.9 in2
           of the valve that is neither metal nor water, which is the
           one thing the void probe exists to catch. An overlap is
           invisible; a seam is not. Same reasoning as the traced
           outlines sharing their boundary rather than each stopping
           short of it. */
        const SEAM = 0.06;
        if (lidY > seatTop) rings.push(box(cageInner, seatTop, lidY + SEAM));
        /* overlapping the lid above it, for the reason every other
           abutment here overlaps: two polygons that merely meet leave a
           hairline the eye reads as a crack across the port. */
        rings.push(box(d / 2, belowSeat, seatTop + SEAM));

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
          /* FED MEANS A CHAMBER WAS FOUND, not that nothing stopped
             you. This started as `true` -- "nothing in the way at
             all" -- which is safe only while the chamber is always
             close, as it is on the EWT casting. On the registered ED
             the far window opens into the cage-to-bore clearance: a
             blind annular slot, no chamber within reach and no metal
             either, so the walk ran its length and found nothing and
             the window was called FED on the strength of it. Both
             windows then counted as fed, the share came out zero, the
             plenum never engaged, and the far window carried whatever
             the section happened to leak it.
             
             Not finding a chamber is not evidence of being fed. It is
             the question coming back unanswered, and for this question
             unanswered and no is the same thing: the water in that
             slot arrives round the cage, out of the plane. */
          let verdict = false;
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

        /* ---- THE BAND THE CAGE GAVE UP ------------------------------

           The traced chamber stops where the traced cage began: in
           the figure those two edges are the same line, because the
           casting is bored to take the cage. Put the trim on its
           published port and the cage comes in off that line, and the
           band between them belongs to nothing -- not cage any more,
           not chamber yet. It is three cells wide on the EWT 10x8 and
           two on the ED NPS 4, and either is enough to cut the cavity
           in half: the inlet could not reach its own windows and the
           field returned shut at every travel.

           The march below does not reach it, and should not. That one
           looks for CASTING close to the cage and finds it only where
           the bore hugs the cage above the chamber; at chamber height
           the nearest metal is four inches away, and a march that ran
           that far would swallow the chamber whole.

           So the band is stated for what it is: from the cage face as
           drawn out to where the cage face was traced, which is
           `outer / trimK` -- the same factor, undone. Both edges are
           measured off the same wall, it is empty when the trim needs
           no scaling, and it is wetted rather than still, because this
           is the annulus fluid crosses to reach a window. */
        const MAXGAP = 0.9;
        for (const wall of [cageWallL, cageWallR]) {
          /* WHICH WAY IS OUT, BY POSITION AND NOT BY NAME. This read
             `wall === cageWallL ? -1 : 1`, which assumes the ring
             called L is the one on the left. Turn the casting round
             for flow-up and it is not: the march then went INWARD
             from the cage face, found no casting, gave up at every
             height, and the mirrored valve came back shut while the
             flow-down valve solved. It only surfaced once the annulus
             became load-bearing -- the same mistake the cage radii a
             few hundred lines up carry a comment about. A side is a
             sign of x, which cannot be wrong about which way it is
             facing. */
          let wsum = 0;
          for (const q of wall) wsum += q[0];
          const sign = wsum < 0 ? -1 : 1;
          /* and the window on THIS side, found the same way */
          let wIdx = 0;
          for (let wj = 0; wj < windows.length; wj++) {
            let c = 0;
            for (const q of windows[wj]) c += q[0];
            if ((c < 0 ? -1 : 1) === sign) { wIdx = wj; break; }
          }
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
          /* EVERY GAP IN THE ROW, not just the one straddling the axis.
             The first version walked outward from x = 0 and gave up on
             any row where the axis was solid -- which is every row
             through the stem boss, and the hollow either side of that
             boss is still hollow. It left two bands of nothing inside
             the plug, about 1.6 in2 of a part that is supposed to be
             full of water.

             Scanning the whole row instead needs no assumption about
             where the metal is: the plug's own outermost edges bound
             the search, and anything not plug between them is inside
             the cup. */
          const inAnyPlug = (x, y) => {
            for (const r of pg.head) if (inside(r, x, y)) return true;
            return false;
          };
          /* ONE POLYGON, NOT FORTY-EIGHT. The hollow was emitted as a
             box per sampled row, and abutting polygons do not render
             as one shape: every shared edge draws a hairline seam, so
             the inside of the plug came out ruled with black lines.
             Traced as a single left-and-right profile instead.

             The profile takes the OUTERMOST gap on each row, so a row
             crossing the stem boss contributes the full span rather
             than two. That is generous by the width of the boss, and
             it costs nothing: fluid is drawn first and the metal goes
             over it, so a hollow that reaches a little under its own
             boss is hidden by the boss. */
          const steps = 56;
          const lo = Math.max(plugLow + 0.01, lidY + SEAM + 0.01);
          const hi = plugTop - 0.01;
          const dx = (plugE.x1 - plugE.x0) / 240;
          const left = [], right = [];
          for (let i = 0; i <= steps && hi > lo; i++) {
            const y = lo + (hi - lo) * (i / steps);
            let a2 = null, b2 = null, run = null;
            for (let x = plugE.x0; x <= plugE.x1; x += dx) {
              if (!inAnyPlug(x, y)) {
                if (run === null) run = x;
              } else if (run !== null) {
                if (x - run > dx * 1.5) {
                  if (a2 === null) a2 = run;
                  b2 = x;
                }
                run = null;
              }
            }
            if (a2 === null || b2 === null) continue;
            left.push([a2, y]); right.push([b2, y]);
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
        const balanceRings = [];
        for (const h of pg.balanceHoles) {
          const hr = lift > 0 ? raise(h) : h;
          rings.push(hr); stillRings.push(hr); balanceRings.push(hr);
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
          rings.push(over); stillRings.push(over); balanceRings.push(over);
        }

        /* THE RUNNING CLEARANCE, which is water and was drawing as
           nothing. The plug slides in the cage bore and the gap between
           them is a film of process fluid the whole length of the
           skirt. It cost nothing while the archetype's plug was a solid
           slab filling its cage; with a registered plug that really is
           narrower than its bore, the annulus appeared as two tall
           slivers of void either side of the skirt. */
        for (const sgn of [-1, 1]) {
          const inner = Math.min(cageInner, plugE.x1 - plugE.x0 > 0
            ? Math.max(Math.abs(plugE.x0), Math.abs(plugE.x1)) : cageInner);
          if (cageInner - inner > 1e-6) {
            const a = sgn < 0 ? -cageInner : inner;
            const b2 = sgn < 0 ? -inner : cageInner;
            const gap = [[a, plugLow], [b2, plugLow],
                         [b2, plugTop], [a, plugTop]];
            /* WETTED, AND NOT STILL. It was both, and `still` means
               WALL to the solver -- so the film between the plug and
               its cage, which runs the length of the skirt right past
               the windows, was being treated as metal. At a tenth of
               travel that walled off the only way through and the
               field reported a shut valve. The clearance is a path:
               narrow, slow, and part of how fluid reaches a window. */
            rings.push(gap);
          }
        }

        /* ---- AND EVERY OTHER SPACE THE TRACE FOUND FLUID IN ----------

           The clearance round the cage is the one that shows: fluid
           reaches the windows by going round the annulus, and on the
           right of the section that path drew as a white slot between
           the cage and the casting -- nothing, where the water that
           feeds the far window actually is. The left side happened to
           be covered by the chamber and the right did not, so the
           drawing was asymmetric about a valve that is not.

           Clipped to the casting, because a traced region carries the
           linework it was grown through and would otherwise sit a
           pixel or two proud of the bore it lives in.

           CUT AT THE UNDERSIDE OF THE PACKING, which is the one place
           a traced void is not the whole truth. The bonnet bore is
           painted grey from the cage right up to the flange, because
           the packing is not drawn yet and the bore is where it will
           go. Taken at face value the process then fills the packing
           box, which is the one thing packing exists to stop: the
           model would show line pressure open to the room.

           So each void is clipped at `packingBox().from` -- the bottom
           of the box, MEASURED off the casting as the start of the
           longest run of constant bore above the neck, not a number
           typed in here. Below that line the bore is flooded and this
           model says so. Above it is the stack's space, and the stack
           is `packingAt()`'s to draw. When the packing is painted the
           clip stops doing anything, because the paint will already
           end where the clip does. */
        const cutAt = pb ? pb.from : Infinity;
        const below = function (ring) {
          /* Sutherland-Hodgman against one horizontal line. Clipping
             and not clamping: a clamped vertex slides along the cut
             and draws a bar across the opening, which is how a black
             line once appeared across the seat bore. */
          const out = [];
          for (let i = 0; i < ring.length; i++) {
            const a = ring[i], b = ring[(i + 1) % ring.length];
            const ain = a[1] <= cutAt, bin = b[1] <= cutAt;
            if (ain) out.push(a);
            if (ain !== bin) {
              const t = (cutAt - a[1]) / (b[1] - a[1]);
              out.push([a[0] + (b[0] - a[0]) * t, cutAt]);
            }
          }
          return out;
        };

        /* WETTED, AND NOT DECLARED STILL. These were pushed to both
           lists, which was harmless while the trace gave two small
           slivers and became a wall when it gave the real thing. The
           void is now read pocket by pocket, and one of those pockets
           is the whole column above the plug -- cage bore, bonnet bore
           and packing box are one space in the drawing because they
           are one space in the valve. Flagged still, that column
           blanketed the cage windows, the inlet could not reach the
           outlet through its own trim, and the field came back shut at
           every travel.

           A trace knows where the water IS. Whether a given pocket
           carries any is a question about pressure and where the
           openings are, and the solver answers it: a dead end with no
           second opening gets no flow out of Laplace without being
           told. What genuinely must be declared still is declared by
           the model, from the trim -- the drillings through the plug
           and the cavity over its head, which a one-sided section
           would otherwise drive an invented cross-flow through. Those
           are still pushed to both lists, a few lines above. */
        for (const v of ED_VOIDS) {
          const ring = below(bored(v.map(place)).map(toFace));
          if (ring.length < 3) continue;
          rings.push(ring);
        }

        /* ---- THE BALANCE CIRCUIT, WHICH IS ONE SPACE AND TURNS OVER

           The bores through the plug head and the space above the head
           are not three dead ends, they are one. The bores open into
           the cavity at the top and into the bore under the plug at the
           bottom, which is exactly what makes the plug balanced: the
           same pressure stands on both faces because the liquid is
           continuous round it.

           STILL IS NOT THE SAME AS AT REST, and this is the part the
           picture has never got right. Nothing passes THROUGH a
           balance hole on balance -- that is the whole point of it -- but the
           liquid in there is not a block of glass. Shear across the
           mouths turns it over: up on the side the inlet is on, across
           the top of the head, and back down the other side. One
           circuit, one turn.

           So it is declared here rather than left to be guessed. The
           flow field dresses blind pockets with a rotation whose sense
           it infers from the neighbouring stream; inferred, this one
           can come out either way round depending on which cell it
           happened to sample. Which way it ACTUALLY goes is a fact
           about where the inlet is, and the geometry knows that. Spin
           is the sign of the inlet x: a swirl about the circuit centre
           carries the inlet side upward.

           It does NOT reverse for flow-up, and that is not an
           oversight. This layer turns the CASTING round rather than
           swapping the labels -- fluid always enters at the left and
           what moves is which chamber is standing there to meet it --
           so the inlet stays put and so does the turn.

           It carries no flow figure, no pressure and no verdict. It
           says which way the water in the plug turns, which is the
           one thing a reader watching particles will ask. */
        const balance = (function () {
          if (!balanceRings.length) return null;
          /* One port's bore, off the drawn hole rather than off the
             convention that placed it -- the generator can drop a hole
             that would run into the stem, and the survivors are what a
             reader can measure. */
          let portBore = 0;
          for (const h of pg.balanceHoles) {
            let lo = Infinity, hi = -Infinity;
            for (const q of h) { if (q[0] < lo) lo = q[0];
                                 if (q[0] > hi) hi = q[0]; }
            portBore = Math.max(portBore, hi - lo);
          }
          /* What the plug sweeps as it moves: the head, less the stem
             that passes through it. This is the volume per inch of
             travel that has to cross the ports. */
          const sweptArea = Math.PI *
            (Math.pow((plugE.x1 - plugE.x0) / 2, 2) -
             Math.pow((part.dims.stem || 0) / 2, 2));
          let bx0 = Infinity, bx1 = -Infinity, by0 = Infinity, by1 = -Infinity;
          for (const r of balanceRings)
            for (const q of r) {
              if (q[0] < bx0) bx0 = q[0]; if (q[0] > bx1) bx1 = q[0];
              if (q[1] < by0) by0 = q[1]; if (q[1] > by1) by1 = q[1];
            }
          return Object.freeze({
            rings: Object.freeze(balanceRings.map(
              r => Object.freeze(r.map(Object.freeze)))),
            centre: Object.freeze([(bx0 + bx1) / 2, (by0 + by1) / 2]),
            /* A POINT THE CIRCUIT ACTUALLY OCCUPIES. The centre is the
               middle of the turn and is therefore in the middle of the
               plug head, which is metal -- a consumer looking the
               circuit up by its centre finds no water there and
               silently keeps its own guess. The probe is the middle of
               a bore, which is liquid by construction. */
            probe: Object.freeze((function () {
              const r = balanceRings[0];
              let ax0 = Infinity, ax1 = -Infinity, ay0 = Infinity,
                  ay1 = -Infinity;
              for (const q of r) {
                if (q[0] < ax0) ax0 = q[0]; if (q[0] > ax1) ax1 = q[0];
                if (q[1] < ay0) ay0 = q[1]; if (q[1] > ay1) ay1 = q[1];
              }
              return [(ax0 + ax1) / 2, (ay0 + ay1) / 2];
            })()),
            spin: Math.sign(inX) || -1,
            upAt: inX < 0 ? 'left' : 'right',
            of: 'the drillings through the plug and the cavity over its head',
            /* ---- HOW MANY, AND HOW BIG --------------------------------

               The SECTION cuts two. There are four, and the other two
               are a quarter turn away: `balanceHoles` generates four
               across the head and drops the pair that would run into
               the stem, which is why the drawing shows two and the
               arithmetic must not.

               Four is a CONVENTION and is declared as one. The ED
               manual does not print a balance-hole count and nothing
               we hold does; four is what this model has always drawn
               and it is what the area below is built on. The moment a
               count is sourced it replaces this and every number here
               moves with it.

               Area is geometry, so it lives here. Velocity is flow, so
               it does not -- except for the one flow these ports really
               do carry, which nothing else can work out: when the plug
               strokes, the liquid standing over its head has to leave
               through them, and it is the hole count that decides how
               fast. That is a displacement, not a process flow, and it
               is given as a function of stroke speed rather than as a
               number, so no caller can mistake it for one. */
            ports: G.balanceHoles,
            portsDrawn: balanceRings.length - 1,
            boreIn: portBore,
            areaIn2: G.balanceHoles * Math.PI * portBore * portBore / 4,
            countIs: 'CONVENTION -- four, unpublished for an ED. The '
                   + 'section cuts two of them; the other two are a '
                   + 'quarter turn out of plane.',
            velocityForStroke: function (inPerSec) {
              if (typeof inPerSec !== 'number' || !isFinite(inPerSec))
                throw new Error('geometry.balance.velocityForStroke: '
                  + 'stroke speed in inches per second, got ' + inPerSec);
              const a = G.balanceHoles * Math.PI * portBore * portBore / 4;
              if (!(a > 0)) return 0;
              return Math.abs(inPerSec) * sweptArea / a;
            },
            sweptAreaIn2: sweptArea,
            why: 'One connected volume, not three dead ends. Nothing '
               + 'passes through it on balance -- that is what balanced '
               + 'means -- and it is not at rest either: shear at the '
               + 'mouths turns it over, up the '
               + 'inlet side, across the head, down the other. The sense '
               + 'is the geometry speaking, not the solver guessing.',
          });
        })();

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
          /* ...which are one space and turn over together */
          balance: balance,
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
