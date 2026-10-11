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

     Every part read off Figure 24 of the Fisher EWT instruction manual,
     D100399X012 -- the family the FCC service in this core actually
     uses. Franz colour-coded the section part by part, so the
     segmentation is exact rather than inferred.

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

  /* EWT_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  /* EWT_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  /* EWT_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  /* EWT_BODY -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  const EWT_BODY = [
    [
      [-0.5053, -0.17318], [-0.5053, -0.19385], [-0.5053, -0.20381],
      [-0.5053, -0.20993], [-0.5053, -0.21529], [-0.5053, -0.22219],
      [-0.49999, -0.22442], [-0.49743, -0.2255], [-0.49586, -0.22616],
      [-0.49448, -0.22674], [-0.49272, -0.22748], [-0.49272, -0.27917],
      [-0.49272, -0.30406], [-0.49272, -0.31937], [-0.49272, -0.33277],
      [-0.49272, -0.35], [-0.45109, -0.35], [-0.43104, -0.35],
      [-0.41871, -0.35], [-0.40792, -0.35], [-0.39404, -0.35],
      [-0.39404, -0.30669], [-0.39404, -0.28584], [-0.39404, -0.27301],
      [-0.39404, -0.26179], [-0.39404, -0.24735], [-0.38789, -0.24456],
      [-0.38462, -0.24261], [-0.38218, -0.24058], [-0.37988, -0.23816],
      [-0.37773, -0.23535], [-0.37519, -0.23144], [-0.37225, -0.22643],
      [-0.36798, -0.21852], [-0.3596, -0.20232], [-0.32887, -0.20232],
      [-0.31407, -0.20232], [-0.30497, -0.20232], [-0.297, -0.20232],
      [-0.28675, -0.20232], [-0.28061, -0.21349], [-0.27765, -0.21984],
      [-0.27583, -0.22507], [-0.27446, -0.23044], [-0.27355, -0.23595],
      [-0.27287, -0.24296], [-0.27241, -0.25149], [-0.27219, -0.26441],
      [-0.27219, -0.2904], [-0.2638, -0.2904], [-0.25977, -0.2904],
      [-0.25728, -0.2904], [-0.25511, -0.2904], [-0.25232, -0.2904],
      [-0.2512, -0.29515], [-0.25066, -0.29743], [-0.25033, -0.29884],
      [-0.25004, -0.30007], [-0.24967, -0.30166], [-0.08707, -0.30054],
      [-0.00687, -0.3], [0.04512, -0.29967], [0.08696, -0.29942],
      [0.11867, -0.29925], [0.14816, -0.29913], [0.17543, -0.29905],
      [0.20621, -0.29901], [0.25762, -0.29901], [0.25873, -0.29398],
      [0.25927, -0.29156], [0.2596, -0.29007], [0.25989, -0.28876],
      [0.26026, -0.28709], [0.26809, -0.28597], [0.27185, -0.28543],
      [0.27417, -0.2851], [0.2762, -0.28481], [0.27881, -0.28444],
      [0.27881, -0.26991], [0.27906, -0.26269], [0.27955, -0.25793],
      [0.2803, -0.25401], [0.28129, -0.25095], [0.28253, -0.2482],
      [0.28402, -0.24576], [0.28576, -0.24363], [0.28775, -0.2418],
      [0.28978, -0.24009], [0.29185, -0.23847], [0.29396, -0.23696],
      [0.29611, -0.23555], [0.2983, -0.23425], [0.30054, -0.23305],
      [0.30281, -0.23195], [0.30513, -0.23096], [0.30824, -0.23009],
      [0.31213, -0.22935], [0.3168, -0.22873], [0.32227, -0.22823],
      [0.32959, -0.22786], [0.33878, -0.22761], [0.35306, -0.22748],
      [0.38212, -0.22748], [0.3838, -0.23084], [0.38481, -0.23255],
      [0.38572, -0.23375], [0.38671, -0.23481], [0.38779, -0.23572],
      [0.38922, -0.23671], [0.391, -0.23779], [0.39375, -0.23926],
      [0.39934, -0.24205], [0.39934, -0.28396], [0.39934, -0.30414],
      [0.39934, -0.31656], [0.39934, -0.32742], [0.39934, -0.34139],
      [0.44013, -0.34139], [0.45977, -0.34139], [0.47185, -0.34139],
      [0.48243, -0.34139], [0.49603, -0.34139], [0.49603, -0.28887],
      [0.49603, -0.26358], [0.49603, -0.24801], [0.49603, -0.2344],
      [0.49603, -0.21689], [0.49994, -0.21633], [0.50182, -0.21606],
      [0.50298, -0.21589], [0.50399, -0.21575], [0.5053, -0.21556],
      [0.5053, -0.19321], [0.5053, -0.18245], [0.5053, -0.17583],
      [0.5053, -0.17003], [0.5053, -0.16258], [0.45501, -0.16258],
      [0.43034, -0.16264], [0.41453, -0.16277], [0.40199, -0.16296],
      [0.39272, -0.1632], [0.38485, -0.16351], [0.37839, -0.16389],
      [0.37334, -0.16432], [0.3697, -0.16482], [0.36331, -0.16637],
      [0.35416, -0.16898], [0.34226, -0.17264], [0.32761, -0.17736],
      [0.3102, -0.18313], [0.29005, -0.18996], [0.26714, -0.19785],
      [0.24147, -0.20679], [0.21769, -0.21491], [0.1958, -0.22222],
      [0.17579, -0.2287], [0.15766, -0.23438], [0.14141, -0.23923],
      [0.12705, -0.24326], [0.11457, -0.24648], [0.10397, -0.24888],
      [0.09323, -0.25098], [0.08235, -0.25278], [0.07132, -0.25428],
      [0.06014, -0.25548], [0.04882, -0.25638], [0.03736, -0.25698],
      [0.02575, -0.25728], [0.01399, -0.25728], [0.00302, -0.25709],
      [-0.00716, -0.25669], [-0.01656, -0.25611], [-0.02517, -0.25532],
      [-0.03299, -0.25434], [-0.04002, -0.25316], [-0.04627, -0.25178],
      [-0.05174, -0.25021], [-0.05697, -0.24856], [-0.06198, -0.24684],
      [-0.06676, -0.24505], [-0.07132, -0.24319], [-0.07564, -0.24126],
      [-0.07974, -0.23925], [-0.08361, -0.23717], [-0.08725, -0.23502],
      [-0.09098, -0.23257], [-0.09478, -0.22984], [-0.09868, -0.22682],
      [-0.10265, -0.22351], [-0.10671, -0.21991], [-0.11084, -0.21602],
      [-0.11507, -0.21184], [-0.11937, -0.20737], [-0.12347, -0.20281],
      [-0.12736, -0.19818], [-0.13104, -0.19346], [-0.13452, -0.18866],
      [-0.13779, -0.18377], [-0.14085, -0.17881], [-0.14371, -0.17376],
      [-0.14636, -0.16863], [-0.14882, -0.16345], [-0.1511, -0.15824],
      [-0.15319, -0.15298], [-0.15509, -0.14768], [-0.15681, -0.14234],
      [-0.15834, -0.13696], [-0.15969, -0.13154], [-0.16084, -0.12608],
      [-0.16186, -0.12034], [-0.16273, -0.11434], [-0.16345, -0.10807],
      [-0.16403, -0.10153], [-0.16447, -0.09472], [-0.16476, -0.08764],
      [-0.1649, -0.0803], [-0.1649, -0.07268], [-0.16469, -0.06571],
      [-0.16428, -0.05938], [-0.16366, -0.05368], [-0.16283, -0.04863],
      [-0.1618, -0.04423], [-0.16055, -0.04046], [-0.15911, -0.03733],
      [-0.15745, -0.03485], [-0.156, -0.03239], [-0.15476, -0.02995],
      [-0.15373, -0.02752], [-0.1529, -0.02512], [-0.15228, -0.02245],
      [-0.15186, -0.01952], [-0.15166, -0.01544], [-0.15166, -0.00762],
      [-0.15976, -0.00762], [-0.16366, -0.00762], [-0.16606, -0.00762],
      [-0.16816, -0.00762], [-0.17086, -0.00762], [-0.17086, -0.00147],
      [-0.17086, 0.00149], [-0.17086, 0.00331], [-0.17086, 0.0049],
      [-0.17086, 0.00695], [-0.18287, 0.00192], [-0.18891, -0.00079],
      [-0.19296, -0.00286], [-0.19638, -0.00484], [-0.19915, -0.00675],
      [-0.20173, -0.00875], [-0.20411, -0.01087], [-0.20629, -0.01308],
      [-0.20828, -0.0154], [-0.21091, -0.01809], [-0.21418, -0.02115],
      [-0.21809, -0.02459], [-0.22264, -0.02839], [-0.22784, -0.03257],
      [-0.23367, -0.03713], [-0.24015, -0.04205], [-0.24727, -0.04735],
      [-0.2537, -0.05221], [-0.25946, -0.05664], [-0.26453, -0.06064],
      [-0.26892, -0.0642], [-0.27262, -0.06732], [-0.27564, -0.07001],
      [-0.27798, -0.07227], [-0.27964, -0.07409], [-0.2815, -0.07597],
      [-0.28357, -0.07792], [-0.28584, -0.07993], [-0.28833, -0.082],
      [-0.29102, -0.08413], [-0.29392, -0.08632], [-0.29702, -0.08858],
      [-0.30033, -0.09089], [-0.30325, -0.093], [-0.30577, -0.09491],
      [-0.30791, -0.09661], [-0.30964, -0.0981], [-0.31101, -0.09946],
      [-0.312, -0.1007], [-0.31269, -0.10207], [-0.31325, -0.1043],
      [-0.31548, -0.1043], [-0.31749, -0.10505], [-0.32001, -0.10654],
      [-0.3233, -0.10877], [-0.32736, -0.11175], [-0.33226, -0.11548],
      [-0.33802, -0.11995], [-0.34462, -0.12517], [-0.35207, -0.13113],
      [-0.35896, -0.13651], [-0.36529, -0.14131], [-0.37107, -0.14553],
      [-0.37628, -0.14917], [-0.38094, -0.15224], [-0.38504, -0.15472],
      [-0.38858, -0.15662], [-0.39156, -0.15795], [-0.3946, -0.15917],
      [-0.3977, -0.16029], [-0.40087, -0.1613], [-0.4041, -0.16221],
      [-0.40739, -0.16302], [-0.41074, -0.16372], [-0.41416, -0.16432],
      [-0.41763, -0.16482], [-0.42163, -0.16525], [-0.42614, -0.16562],
      [-0.43117, -0.16594], [-0.43671, -0.16618], [-0.44278, -0.16637],
      [-0.44936, -0.16649], [-0.45646, -0.16656], [-0.46407, -0.16656],
      [-0.47096, -0.16666], [-0.47713, -0.16687], [-0.48257, -0.16718],
      [-0.48729, -0.16759], [-0.49151, -0.16821], [-0.49524, -0.16904],
      [-0.49915, -0.17038]
    ],
    [
      [0.49272, 0.34669], [0.45165, 0.34669], [0.43187, 0.34669],
      [0.4197, 0.34669], [0.40905, 0.34669], [0.39536, 0.34669],
      [0.39536, 0.30506], [0.39536, 0.28502], [0.39536, 0.27268],
      [0.39536, 0.26189], [0.39536, 0.24801], [0.39034, 0.2441],
      [0.38789, 0.24205], [0.38636, 0.24056], [0.38518, 0.2392],
      [0.38435, 0.23796], [0.38367, 0.23653], [0.38313, 0.23491],
      [0.38268, 0.23262], [0.38212, 0.22815], [0.35362, 0.22815],
      [0.3399, 0.22815], [0.33146, 0.22815], [0.32407, 0.22815],
      [0.31457, 0.22815], [0.31345, 0.2315], [0.31291, 0.23311],
      [0.31258, 0.23411], [0.31229, 0.23498], [0.31192, 0.23609],
      [0.30857, 0.23721], [0.30695, 0.23775], [0.30596, 0.23808],
      [0.30509, 0.23837], [0.30397, 0.23874], [0.30286, 0.24265],
      [0.30217, 0.24466], [0.30155, 0.24607], [0.30087, 0.24731],
      [0.30012, 0.24839], [0.29928, 0.24944], [0.29832, 0.25048],
      [0.29727, 0.25149], [0.29611, 0.25248], [0.2951, 0.25354],
      [0.29423, 0.25466], [0.2935, 0.25584], [0.29292, 0.25708],
      [0.29249, 0.25838], [0.2922, 0.25975], [0.29205, 0.26118],
      [0.29205, 0.26267], [0.29176, 0.2643], [0.29118, 0.26608],
      [0.29031, 0.268], [0.28916, 0.27007], [0.28771, 0.27229],
      [0.28597, 0.27465], [0.28394, 0.27715], [0.28162, 0.2798],
      [0.27951, 0.28214], [0.27761, 0.28417], [0.27591, 0.28589],
      [0.27442, 0.28729], [0.27305, 0.28841], [0.27181, 0.28924],
      [0.27045, 0.28984], [0.26821, 0.2904], [0.26598, 0.3066],
      [0.2649, 0.3144], [0.26424, 0.31921], [0.26366, 0.32341],
      [0.26291, 0.32881], [0.23553, 0.32881], [0.22235, 0.32881],
      [0.21424, 0.32881], [0.20714, 0.32881], [0.19801, 0.32881],
      [0.19522, 0.32434], [0.19367, 0.32214], [0.19243, 0.32074],
      [0.19118, 0.31962], [0.18994, 0.31879], [0.18839, 0.31805],
      [0.18653, 0.31738], [0.18373, 0.31668], [0.17815, 0.31556],
      [0.17898, 0.31109], [0.17939, 0.30803], [0.17964, 0.30488],
      [0.17982, 0.30116], [0.17995, 0.29685], [0.18004, 0.2918],
      [0.1801, 0.28601], [0.18013, 0.27947], [0.18013, 0.27219],
      [0.18028, 0.26527], [0.18057, 0.25873], [0.181, 0.25257],
      [0.18158, 0.24677], [0.18231, 0.24135], [0.18317, 0.2363],
      [0.18419, 0.23162], [0.18535, 0.22732], [0.18636, 0.22084],
      [0.18722, 0.21219], [0.18792, 0.20137], [0.18848, 0.18837],
      [0.18889, 0.1732], [0.18915, 0.15586], [0.18926, 0.13634],
      [0.18922, 0.11465], [0.18918, 0.09547], [0.18915, 0.07879],
      [0.18912, 0.06461], [0.1891, 0.05294], [0.18909, 0.04377],
      [0.18908, 0.03711], [0.18907, 0.03295], [0.18907, 0.03129],
      [0.18892, 0.02968], [0.18862, 0.0281], [0.18817, 0.02657],
      [0.18757, 0.02508], [0.18682, 0.02363], [0.18592, 0.02223],
      [0.18487, 0.02086], [0.18367, 0.01954], [0.18253, 0.01838],
      [0.18144, 0.01738], [0.18041, 0.01656], [0.17944, 0.01589],
      [0.17843, 0.0154], [0.17739, 0.01507], [0.17602, 0.0149],
      [0.17351, 0.0149], [0.17351, 0.0082], [0.17351, 0.00497],
      [0.17351, 0.00298], [0.17351, 0.00124], [0.17351, -0.00099],
      [0.16653, -0.00323], [0.16316, -0.0043], [0.16109, -0.00497],
      [0.15928, -0.00555], [0.15695, -0.00629], [0.15807, -0.01467],
      [0.15861, -0.01871], [0.15894, -0.02119], [0.15923, -0.02337],
      [0.1596, -0.02616], [0.16296, -0.02756], [0.16494, -0.02823],
      [0.16668, -0.02864], [0.16854, -0.02895], [0.17053, -0.02916],
      [0.17276, -0.02931], [0.17525, -0.02942], [0.17798, -0.02947],
      [0.18096, -0.02947], [0.18409, -0.02921], [0.18736, -0.02869],
      [0.19077, -0.02792], [0.19433, -0.02688], [0.19803, -0.02559],
      [0.20188, -0.02404], [0.20588, -0.02223], [0.21002, -0.02016],
      [0.21534, -0.0164], [0.22183, -0.01096], [0.22951, -0.00383],
      [0.23837, 0.00499], [0.24841, 0.01549], [0.25962, 0.02768],
      [0.27202, 0.04156], [0.2856, 0.05712], [0.2981, 0.0713],
      [0.30952, 0.08409], [0.31987, 0.09549], [0.32914, 0.1055],
      [0.33733, 0.11413], [0.34445, 0.12138], [0.3505, 0.12724],
      [0.35546, 0.13171], [0.36045, 0.13592], [0.36546, 0.13987],
      [0.37049, 0.14356], [0.37554, 0.147], [0.38061, 0.15018],
      [0.3857, 0.15309], [0.39081, 0.15575], [0.39594, 0.15815],
      [0.40178, 0.16025], [0.40832, 0.16206], [0.41556, 0.16356],
      [0.42351, 0.16476], [0.43351, 0.16566], [0.44555, 0.16626],
      [0.46368, 0.16656], [0.5, 0.16656], [0.50224, 0.17186],
      [0.50331, 0.17519], [0.50397, 0.17829], [0.50447, 0.18177],
      [0.5048, 0.18562], [0.50505, 0.1908], [0.50522, 0.19732],
      [0.5053, 0.20747], [0.5053, 0.22815], [0.49999, 0.23038],
      [0.49743, 0.23146], [0.49586, 0.23212], [0.49448, 0.2327],
      [0.49272, 0.23344], [0.49272, 0.28122], [0.49272, 0.30422],
      [0.49272, 0.31838], [0.49272, 0.33076]
    ],
    [
      [-0.49735, 0.34007], [-0.49735, 0.29229], [-0.49735, 0.26929],
      [-0.49735, 0.25513], [-0.49735, 0.24275], [-0.49735, 0.22682],
      [-0.50126, 0.22514], [-0.50315, 0.22434], [-0.5043, 0.22384],
      [-0.50532, 0.22341], [-0.50662, 0.22285], [-0.50662, 0.20106],
      [-0.50652, 0.19042], [-0.50631, 0.18367], [-0.506, 0.17839],
      [-0.50559, 0.17459], [-0.50497, 0.1713], [-0.50414, 0.16852],
      [-0.50279, 0.16583], [-0.5, 0.16192], [-0.45027, 0.16192],
      [-0.42591, 0.16198], [-0.41035, 0.16211], [-0.39805, 0.16229],
      [-0.38903, 0.16254], [-0.38144, 0.16285], [-0.37527, 0.16322],
      [-0.37053, 0.16366], [-0.36722, 0.16416], [-0.36211, 0.16519],
      [-0.35519, 0.16676], [-0.34648, 0.16887], [-0.33597, 0.17152],
      [-0.32365, 0.17471], [-0.30954, 0.17844], [-0.29363, 0.1827],
      [-0.27591, 0.1875], [-0.26008, 0.19187], [-0.24613, 0.1958],
      [-0.23406, 0.1993], [-0.22388, 0.20236], [-0.21558, 0.20499],
      [-0.20917, 0.20718], [-0.20464, 0.20894], [-0.20199, 0.21026],
      [-0.19945, 0.21169], [-0.19703, 0.21322], [-0.19472, 0.21486],
      [-0.19253, 0.2166], [-0.19045, 0.21844], [-0.18848, 0.22038],
      [-0.18663, 0.22243], [-0.18489, 0.22459], [-0.18339, 0.22707],
      [-0.18211, 0.22988], [-0.18107, 0.23303], [-0.18027, 0.23651],
      [-0.17969, 0.24031], [-0.17935, 0.24445], [-0.17924, 0.24892],
      [-0.17937, 0.25373], [-0.17948, 0.25846], [-0.17957, 0.26314],
      [-0.17965, 0.26776], [-0.17971, 0.27231], [-0.17975, 0.2768],
      [-0.17979, 0.28123], [-0.1798, 0.2856], [-0.1798, 0.2899],
      [-0.17975, 0.29377], [-0.17966, 0.29721], [-0.17952, 0.30021],
      [-0.17934, 0.30277], [-0.17906, 0.30501], [-0.17868, 0.30691],
      [-0.17808, 0.3088], [-0.17682, 0.31159], [-0.18576, 0.31634],
      [-0.19112, 0.31863], [-0.19588, 0.32003], [-0.20103, 0.32109],
      [-0.20658, 0.32179], [-0.21391, 0.32232], [-0.22301, 0.32267],
      [-0.23707, 0.32285], [-0.26556, 0.32285], [-0.2678, 0.30972],
      [-0.26929, 0.3029], [-0.27078, 0.29801], [-0.27252, 0.29361],
      [-0.2745, 0.28967], [-0.27682, 0.28573], [-0.27947, 0.28178],
      [-0.28245, 0.27781], [-0.28576, 0.27384], [-0.2887, 0.2702],
      [-0.29127, 0.26689], [-0.29346, 0.26391], [-0.29528, 0.26126],
      [-0.29677, 0.25877], [-0.29793, 0.25646], [-0.29888, 0.25381],
      [-0.3, 0.24934], [-0.30224, 0.24878], [-0.3035, 0.24826],
      [-0.30453, 0.2476], [-0.30559, 0.24673], [-0.30666, 0.24565],
      [-0.30803, 0.2441], [-0.30969, 0.24207], [-0.31219, 0.23882],
      [-0.31722, 0.23212], [-0.34572, 0.23212], [-0.35963, 0.23224],
      [-0.36847, 0.23249], [-0.37539, 0.23286], [-0.3804, 0.23336],
      [-0.38475, 0.23411], [-0.38843, 0.2351], [-0.39204, 0.23671],
      [-0.39735, 0.24007], [-0.39735, 0.28225], [-0.39735, 0.30257],
      [-0.39735, 0.31507], [-0.39735, 0.326], [-0.39735, 0.34007],
      [-0.43954, 0.34007], [-0.45985, 0.34007], [-0.47235, 0.34007],
      [-0.48329, 0.34007]
    ],
  ];

  /* EWT_BONNET -- the casting is cut into several regions in
     section by the chambers and the trim column. Keeping only
     the largest dropped half the valve. */
  const EWT_BONNET = [
    [
      [-0.02715, 0.55265], [-0.03777, 0.55265], [-0.04288, 0.55265],
      [-0.04603, 0.55265], [-0.04878, 0.55265], [-0.05232, 0.55265],
      [-0.05344, 0.55712], [-0.05397, 0.55927], [-0.0543, 0.5606],
      [-0.05459, 0.56175], [-0.05497, 0.56325], [-0.07732, 0.56325],
      [-0.08808, 0.56325], [-0.0947, 0.56325], [-0.1005, 0.56325],
      [-0.10795, 0.56325], [-0.10795, 0.54844], [-0.10795, 0.54131],
      [-0.10795, 0.53692], [-0.10795, 0.53308], [-0.10795, 0.52815],
      [-0.09565, 0.52815], [-0.08974, 0.52815], [-0.08609, 0.52815],
      [-0.08291, 0.52815], [-0.07881, 0.52815], [-0.07881, 0.50719],
      [-0.07893, 0.49699], [-0.07918, 0.49055], [-0.07955, 0.48555],
      [-0.08005, 0.482], [-0.08067, 0.4791], [-0.08142, 0.47686],
      [-0.08228, 0.47529], [-0.08328, 0.47438], [-0.08436, 0.47358],
      [-0.08554, 0.4729], [-0.08682, 0.47233], [-0.08818, 0.47188],
      [-0.08986, 0.47153], [-0.09185, 0.47131], [-0.0948, 0.47119],
      [-0.10066, 0.47119], [-0.10066, 0.45136], [-0.10096, 0.44153],
      [-0.10156, 0.43509], [-0.10246, 0.42984], [-0.10366, 0.42579],
      [-0.10516, 0.42219], [-0.10696, 0.41904], [-0.10906, 0.41635],
      [-0.11147, 0.41411], [-0.11452, 0.41216], [-0.11822, 0.41048],
      [-0.12258, 0.40909], [-0.12759, 0.40797], [-0.1342, 0.40713],
      [-0.14242, 0.40657], [-0.15509, 0.40629], [-0.18079, 0.40629],
      [-0.18303, 0.40154], [-0.18411, 0.39925], [-0.18477, 0.39785],
      [-0.18535, 0.39662], [-0.18609, 0.39503], [-0.21962, 0.39503],
      [-0.23576, 0.39503], [-0.2457, 0.39503], [-0.25439, 0.39503],
      [-0.26556, 0.39503], [-0.26556, 0.36709], [-0.26556, 0.35364],
      [-0.26556, 0.34536], [-0.26556, 0.33812], [-0.26556, 0.32881],
      [-0.23874, 0.32881], [-0.22568, 0.32875], [-0.21745, 0.32862],
      [-0.21105, 0.32844], [-0.2065, 0.32819], [-0.20279, 0.32788],
      [-0.19994, 0.3275], [-0.19793, 0.32707], [-0.19677, 0.32657],
      [-0.19572, 0.32603], [-0.19476, 0.32546], [-0.19392, 0.32483],
      [-0.19317, 0.32417], [-0.19253, 0.32347], [-0.19199, 0.32272],
      [-0.19156, 0.32194], [-0.19123, 0.32111], [-0.19073, 0.3203],
      [-0.19007, 0.31952], [-0.18924, 0.31875], [-0.18825, 0.318],
      [-0.18709, 0.31728], [-0.18576, 0.31658], [-0.18427, 0.31589],
      [-0.18262, 0.31523], [-0.18098, 0.31465], [-0.17937, 0.31416],
      [-0.17777, 0.31374], [-0.1762, 0.31341], [-0.17465, 0.31316],
      [-0.17312, 0.313], [-0.17161, 0.31291], [-0.17012, 0.31291],
      [-0.16873, 0.31296], [-0.16745, 0.31304], [-0.16627, 0.31316],
      [-0.16519, 0.31333], [-0.16422, 0.31353], [-0.16335, 0.31378],
      [-0.16258, 0.31407], [-0.16192, 0.3144], [-0.1613, 0.31484],
      [-0.16072, 0.31538], [-0.16018, 0.31602], [-0.15969, 0.31676],
      [-0.15919, 0.31776], [-0.15869, 0.319], [-0.15807, 0.32092],
      [-0.15695, 0.32483], [-0.15304, 0.32595], [-0.15116, 0.32649],
      [-0.15, 0.32682], [-0.14899, 0.32711], [-0.14768, 0.32748],
      [-0.14656, 0.33139], [-0.1459, 0.33336], [-0.14532, 0.33469],
      [-0.1447, 0.3358], [-0.14404, 0.33671], [-0.14329, 0.33756],
      [-0.14247, 0.33835], [-0.14156, 0.33907], [-0.14056, 0.33974],
      [-0.13858, 0.34048], [-0.1356, 0.34131], [-0.13162, 0.34222],
      [-0.12666, 0.34321], [-0.1207, 0.34429], [-0.11374, 0.34545],
      [-0.10579, 0.34669], [-0.09685, 0.34801], [-0.08899, 0.34923],
      [-0.0822, 0.35035], [-0.07649, 0.35137], [-0.07185, 0.35228],
      [-0.06825, 0.35315], [-0.06569, 0.35397], [-0.06403, 0.35495],
      [-0.06291, 0.35662], [-0.04503, 0.35662], [-0.03642, 0.35662],
      [-0.03113, 0.35662], [-0.02649, 0.35662], [-0.02053, 0.35662],
      [-0.01913, 0.35886], [-0.01846, 0.36031], [-0.01805, 0.36171],
      [-0.01774, 0.36333], [-0.01753, 0.36515], [-0.01737, 0.36763],
      [-0.01727, 0.37078], [-0.01722, 0.3757], [-0.01722, 0.38576],
      [-0.02141, 0.38856], [-0.02343, 0.3899], [-0.02467, 0.39073],
      [-0.02576, 0.39145], [-0.02715, 0.39238], [-0.02715, 0.46],
      [-0.02715, 0.49255], [-0.02715, 0.51258], [-0.02715, 0.53011]
    ],
    [
      [0.05099, 0.56457], [0.05099, 0.55144], [0.05099, 0.54512],
      [0.05099, 0.54123], [0.05099, 0.53782], [0.05099, 0.53344],
      [0.0401, 0.53344], [0.03485, 0.53344], [0.03162, 0.53344],
      [0.0288, 0.53344], [0.02517, 0.53344], [0.02517, 0.47561],
      [0.02503, 0.4476], [0.02476, 0.43013], [0.02436, 0.41678],
      [0.02382, 0.40755], [0.02315, 0.4003], [0.02234, 0.39502],
      [0.0214, 0.39172], [0.02032, 0.3904], [0.01938, 0.38885],
      [0.01857, 0.38707], [0.0179, 0.38506], [0.01736, 0.38282],
      [0.01696, 0.37997], [0.01669, 0.37649], [0.01656, 0.37121],
      [0.01656, 0.3606], [0.02159, 0.35864], [0.02471, 0.3577],
      [0.02761, 0.35712], [0.03084, 0.35668], [0.0344, 0.35639],
      [0.03918, 0.35618], [0.04518, 0.35603], [0.05451, 0.35596],
      [0.07351, 0.35596], [0.07463, 0.35456], [0.07614, 0.35375],
      [0.07841, 0.35304], [0.08158, 0.3523], [0.08564, 0.35151],
      [0.09062, 0.35063], [0.09654, 0.34966], [0.10339, 0.34859],
      [0.11118, 0.34743], [0.11809, 0.34634], [0.12413, 0.3453],
      [0.1293, 0.34433], [0.13361, 0.34342], [0.13715, 0.34249],
      [0.13992, 0.34154], [0.14224, 0.34031], [0.14503, 0.33808],
      [0.14503, 0.33529], [0.14503, 0.33394], [0.14503, 0.33311],
      [0.14503, 0.33239], [0.14503, 0.33146], [0.14922, 0.3309],
      [0.15124, 0.33063], [0.15248, 0.33046], [0.15357, 0.33032],
      [0.15497, 0.33013], [0.15497, 0.3251], [0.15497, 0.32268],
      [0.15497, 0.32119], [0.15497, 0.31989], [0.15497, 0.31821],
      [0.17033, 0.31821], [0.17773, 0.31821], [0.18228, 0.31821],
      [0.18627, 0.31821], [0.19139, 0.31821], [0.19474, 0.32492],
      [0.19636, 0.32815], [0.19735, 0.33013], [0.19822, 0.33187],
      [0.19934, 0.33411], [0.22616, 0.33411], [0.23907, 0.33411],
      [0.24702, 0.33411], [0.25397, 0.33411], [0.26291, 0.33411],
      [0.26291, 0.36204], [0.26291, 0.3755], [0.26291, 0.38377],
      [0.26291, 0.39102], [0.26291, 0.40033], [0.22715, 0.40033],
      [0.20993, 0.40033], [0.19934, 0.40033], [0.19007, 0.40033],
      [0.17815, 0.40033], [0.17759, 0.40396], [0.17732, 0.40571],
      [0.17715, 0.40679], [0.17701, 0.40773], [0.17682, 0.40894],
      [0.15335, 0.40894], [0.14193, 0.40899], [0.13473, 0.4091],
      [0.12914, 0.40925], [0.12517, 0.40946], [0.12194, 0.40972],
      [0.11945, 0.41003], [0.11772, 0.41039], [0.11672, 0.4108],
      [0.11581, 0.41127], [0.11498, 0.41179], [0.11424, 0.41236],
      [0.11358, 0.41298], [0.113, 0.41365], [0.1125, 0.41437],
      [0.11209, 0.41515], [0.11175, 0.41598], [0.11132, 0.41678],
      [0.11078, 0.41757], [0.11014, 0.41834], [0.1094, 0.41908],
      [0.10855, 0.41981], [0.1076, 0.42051], [0.10654, 0.42119],
      [0.10538, 0.42185], [0.10431, 0.42254], [0.10334, 0.42324],
      [0.10246, 0.42397], [0.10168, 0.42471], [0.10098, 0.42548],
      [0.10038, 0.42626], [0.09988, 0.42707], [0.09946, 0.4279],
      [0.0991, 0.4293], [0.09879, 0.43129], [0.09853, 0.43386],
      [0.09832, 0.437], [0.09817, 0.44141], [0.09806, 0.44708],
      [0.09801, 0.45606], [0.09801, 0.4745], [0.09159, 0.4745],
      [0.08841, 0.47459], [0.08634, 0.47475], [0.08466, 0.475],
      [0.08338, 0.47533], [0.08225, 0.47575], [0.08128, 0.47624],
      [0.08046, 0.47682], [0.0798, 0.47748], [0.07922, 0.47858],
      [0.07873, 0.48011], [0.07831, 0.48208], [0.07798, 0.48448],
      [0.07773, 0.48731], [0.07757, 0.49058], [0.07748, 0.49429],
      [0.07748, 0.49843], [0.07742, 0.50211], [0.0773, 0.50534],
      [0.07711, 0.50811], [0.07686, 0.51043], [0.07655, 0.51229],
      [0.07618, 0.5137], [0.07575, 0.51465], [0.07525, 0.51515],
      [0.07481, 0.51581], [0.07444, 0.51664], [0.07413, 0.51763],
      [0.07388, 0.51879], [0.0737, 0.52034], [0.07357, 0.52229],
      [0.07351, 0.52531], [0.07351, 0.53146], [0.08636, 0.53146],
      [0.09255, 0.53146], [0.09636, 0.53146], [0.09969, 0.53146],
      [0.10397, 0.53146], [0.10397, 0.54543], [0.10397, 0.55215],
      [0.10397, 0.55629], [0.10397, 0.55991], [0.10397, 0.56457],
      [0.08162, 0.56457], [0.07086, 0.56457], [0.06424, 0.56457],
      [0.05844, 0.56457]
    ],
  ];

  const EWT_CAGE_L = [
    [-0.14768, 0.31821], [-0.15695, 0.31821], [-0.1649, 0.30894],
    [-0.17815, 0.30497], [-0.17815, 0.24007], [-0.17351, 0.22815],
    [-0.17351, 0.07252], [-0.1543, 0.07252], [-0.14768, 0.08642]
  ];

  const EWT_CAGE_R = [
    [0.15298, 0.31556], [0.15033, 0.31026], [0.15033, 0.22947],
    [0.15298, 0.2149], [0.14901, 0.21093], [0.15166, 0.20298],
    [0.15166, 0.08642], [0.1596, 0.0745], [0.17947, 0.0745],
    [0.17947, 0.0851], [0.17285, 0.10232], [0.17285, 0.24404],
    [0.17682, 0.24669], [0.18079, 0.27583], [0.18079, 0.30497],
    [0.1755, 0.31026], [0.1649, 0.31026], [0.16225, 0.31556]
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

  const EWT_PLUG = [
    [0.14901, 0.23411], [0.0106, 0.23411], [0.0106, 0.15795],
    [0.00066, 0.15397], [-0.00728, 0.1553], [-0.00728, 0.19768],
    [-0.01126, 0.20298], [-0.01126, 0.23344], [-0.14636, 0.23344],
    [-0.14636, 0.07517], [0.14768, 0.07517], [0.15033, 0.0798],
    [0.15033, 0.21225], [0.15298, 0.21887]
  ];

  const EWT_SEAT = [
    [-0.1755, 0.07053], [-0.1755, 0.02417], [-0.1702, 0.01755],
    [-0.1702, -0.00629], [-0.15099, -0.00629], [-0.15099, -0.02417],
    [0.15497, -0.02417], [0.15497, -0.00629], [0.17285, -0.00099],
    [0.17285, 0.02417], [0.17947, 0.03212], [0.17947, 0.07252],
    [0.1596, 0.07252], [0.15563, 0.07848], [0.14768, 0.07252],
    [-0.14371, 0.07252], [-0.15166, 0.07848], [-0.15695, 0.07053]
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
    bodyRise:      1.15,   // chamber roof above the port, x port dia
    bodyDrop:      0.95,   // chamber floor below the port
    wallThk:       0.16,   // casting wall, x port dia
    cageWall:      0.18,   // cage wall thickness, x port dia
    cageBottom:    0.22,   // solid rim below the windows: bears on the
                           // seat ring, part of the bonnet load path
    cageTopBand:   0.55,   // solid band above the windows, x TRAVEL --
                           // takes the bonnet load and carries the seal
    windowBand:    1.00,   // window height, x travel -- the plug uncovers
                           // the whole window over its whole stroke.
                           //
                           // This was 0.88, on the reasoning that the
                           // droop in the last band of every measured
                           // width profile meant the window FINISHED
                           // before the plug did. That is the wrong
                           // reading, and the closed-loop test caught it
                           // at 13.9 points out: the droop means the
                           // window gets NARROWER at the top, not that it
                           // stops. A real cage still needs solid metal
                           // above its window to carry the bonnet load --
                           // that is `cageTopBand`, which sits above this
                           // band rather than eating into it.
    plugHead:      0.80,   // plug head height, x port dia
    sealThk:       0.16,   // piston-ring / U-seal height, x port dia
    seatThk:       0.30,   // seat ring thickness, x port dia
    stemDia:       0.22,   // x port dia. The ED IOM tabulates stem by
                           // valve-stem-connection size, not by port, so
                           // this is a proportion and NOT that table.
    balanceHoles:  4,      // through the plug head, balanced trim only
    balanceDia:    0.13,   // x port dia
    throatFlare:   0.55,   // how far the flange bore flares into the dish
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

     ALTERNATING SIZES ARE REAL and the section must show them. An
     equal-percentage cage carries large and small windows alternately --
     visible as two distinct profiles on the one cage in Figure 3.37 --
     so a longitudinal section cuts a large one on one side and a small
     one on the other. Drawn symmetric it is wrong in a way anyone who
     has had one apart will see at once. */
  /* THE PROFILE'S STATIONS ARE BAND MIDPOINTS, and reading them as if
     they were evenly spaced from 0 to 1 shifts the whole window half a
     band toward the bottom. `trim.widthProfile` reports them at 5, 15,
     ... 95 percent for exactly this reason; honouring that here is what
     makes the drawn window and the published Cv agree.

     One function, used by BOTH the outline and the area, because a
     window drawn from one rule and measured by another is a window whose
     picture and whose number are about different objects. */
  function widthAt(prof, h) {
    const n = prof.length;
    const j = h * n - 0.5;                 /* station i sits at (i+0.5)/n */
    if (j <= 0) return prof[0];
    if (j >= n - 1) return prof[n - 1];
    const lo = Math.floor(j);
    return prof[lo] + (j - lo) * (prof[lo + 1] - prof[lo]);
  }

  function cageWindow(prof, halfWidth, y0, h, xFace, sign) {
    const ring = [];
    const n = Math.max(8, prof.length * 6);
    for (let i = 0; i <= n; i++) {
      const f = i / n;
      ring.push([xFace + sign * widthAt(prof, f) * halfWidth, y0 + f * h]);
    }
    for (let i = n; i >= 0; i--) ring.push([xFace, y0 + (i / n) * h]);
    return ring;
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
    const wins = Object.assign({ count: 6, alternate: 0.55 }, spec.windows);
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

       Figure 24 of D100399X012 is to scale: its bore is 0.323 of its
       face-to-face and its port 0.293, against 0.359 and 0.287 for a
       real EWT 10x8. So the casting, the chambers and the trim all
       place off ONE published dimension and agree with the catalogue.

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
    const bodyRings = EWT_BODY.map(r => r.map(place).map(toFace));
    const body = bodyRings[0];
    const bonnetRings = EWT_BONNET.map(r => r.map(place).map(toFace));
    const seat = [EWT_SEAT.map(place)];

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
    const cageWallL0 = EWT_CAGE_L.map(place);
    const cageWallR0 = EWT_CAGE_R.map(place);

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
    const plugBase = EWT_PLUG.map(place);
    const plugE = extentOfRing(plugBase);

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
      const head = plugBase.map(([x, y]) => [x, y + lift]);
      /* THE STEM IS A PUBLISHED DIAMETER, NOT A PROPORTION OF THE PLUG.

         This was 0.11 of the plug width, which on an 8-in port draws a
         1.8-in stem. The real one is 3/4 in -- the drawn stem in Figure
         24 measures 0.83 in, Table 7 of that same manual publishes 1/2,
         3/4, 1 and 1-1/4 as this family's stem diameters, and Table 12
         of D100017X012 gives 3/4 as standard for an 8-in port. Two
         documents and the drawing agree; the convention was 2.4x out
         and read as a column rather than a stem. */
      if (typeof part.dims.stem !== 'number')
        throw new Error('geometry.globeValve: ' + (spec.id || 'this valve') +
          ' carries no stem diameter, and there is no honest way to ' +
          'infer one -- it does not scale with the port. Source it: the ' +
          'EW manual D100399X012 Table 7 enumerates the diameters, and ' +
          'D100017X012 Table 12 maps valve size to stem for ED bodies. ' +
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
      for (const q of plugBase)
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
      const bd = r * 0.26;
      for (let i = 0; i < G.balanceHoles; i++) {
        const cx = -r + ((i + 0.5) / G.balanceHoles) * 2 * r;
        if (Math.abs(cx) < stemR + bd) continue;
        out.balanceHoles.push([[cx - bd / 2, plugE.y0 + lift],
                               [cx + bd / 2, plugE.y0 + lift],
                               [cx + bd / 2, plugE.y1 + lift],
                               [cx - bd / 2, plugE.y1 + lift]]);
      }
      const st = (plugE.y1 - plugE.y0) * 0.14;
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
         is Figure 4 of D100399X012, "PTFE V-Ring Packing
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
            'D100399X012. Graphite is a different stack -- rings and ' +
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
          source: 'D100399X012 Figure 4, PTFE V-ring packing arrangements',
          conventionNote:
            'The box is MEASURED off the traced casting and the stem is '
          + 'published. The stack -- which parts and in what order -- is '
          + 'Figure 4 of D100399X012. CONVENTION, and the only one: how '
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
        for (const q of pg.head) {
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
         from one valve -- Figure 24 of D100399X012, an EWT NPS 10x8 --
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
      archetypeNote:
        'Traced from one valve and drawn for the family. The outline '
      + 'came off Figure 24 of D100399X012, an EWT NPS 10x8, and is '
      + 'scaled here by the valve its own published face-to-face. Every '
      + 'NUMBER belongs to this valve and is sourced; the SILHOUETTE '
      + 'is the family’s. An EZ is a different flow path and needs '
      + 'its own archetype, not this one relabelled.',
      conventionNote:
        'MEASURED: the casting, the bonnet, both chambers, the cage walls, '
        + 'the plug and the seat ring all come from Figure 24 of '
        + 'D100399X012, the Fisher EW instruction manual -- segmented part '
        + 'by part off a hand colour-coded print, so the boundaries are '
        + 'read rather than inferred, then denoised by the 657 Working '
        + 'Model method (contour trace, approxPolyDP, orthogonal snap, and '
        + 'corner-preserving Chaikin so cast curves smooth while machined '
        + 'faces stay square). AND THAT FIGURE IS TO SCALE: its bore is '
        + '0.323 of its face-to-face and its port 0.293, against 0.359 and '
        + '0.287 for a real EWT 10x8. One published dimension therefore '
        + 'places the casting, the chambers and the trim together, and they '
        + 'agree with the catalogue. The earlier source, Figure 19 of the '
        + 'ED manual, was a parts-identification sheet at no particular '
        + 'scale -- bore 0.148 of face-to-face -- and every attempt built '
        + 'on it had to choose which of two true numbers to honour. '
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
    flowPath: flowPath, samplePath: samplePath, boreAtS: boreAtS,
    classes: () => Object.keys(RULES).sort(),
  };

})(window.LPE = window.LPE || {});
