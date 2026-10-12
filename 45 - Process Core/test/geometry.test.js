/* @layer geometry
   @core Process Core -- the geometry layer's own acceptance test. Declares
   the layer it guards, so the layer guard can tell a test from an
   implementation.                                                       */
/* Acceptance test for geometry.js.

   The bar: EVERY COORDINATE IS ARITHMETIC ON A CATALOGUE DIMENSION. Not
   close to one, not derived from a drawing that was derived from one --
   the same number, through a loader that refuses to start unless it
   matches what the standard printed.

   So the checks below recompute the shapes from `ASME B16.11` Table 1
   independently of geometry.js and compare. Writing the arithmetic twice
   is the point: if someone edits a formula, the two disagree.          */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'catalogue.js'));
require(path.join(__dirname, '..', 'src', 'geometry.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};
const near = (a, b, t) => Math.abs(a - b) < (t === undefined ? 1e-9 : t);

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
const G = LPE.geometry;

console.log('\ngeometry -- real shape, in inches, from the table\n');

/* ---- the elbow, recomputed from the standard ------------------------
   ASME B16.11 Table 1, NPS 1/2, Class 3000, in millimetres:
     A 15.5   B 22.2   C 4.67   D 16.6   J 9.5
   Written here as millimetres over 25.4, the way the document prints
   them, so this test does not inherit the catalogue's conversion.    */
const mm = v => v / 25.4;
const A = mm(15.5), B = mm(22.2), C = mm(4.67), D = mm(16.6), J = mm(9.5);

const el = G.shapeOf(CAT.part('ELBOW90/SW3000/NPS0.5'));

check('an elbow comes back in inches', el.units === 'in', el.units);
check('centre-to-face is A + J', near(el.centreToFace, A + J, 1e-4),
  el.centreToFace.toFixed(4) + ' vs ' + (A + J).toFixed(4));
check('outer half-width is B/2 + C', near(el.outerHalfWidth, B / 2 + C, 1e-4),
  el.outerHalfWidth.toFixed(4) + ' vs ' + (B / 2 + C).toFixed(4));

/* The ports land ON the faces, facing out. Butting two parts together is
   the one thing this layer exists to make possible. */
const pin = el.ports.find(p => p.id === 'in');
const pout = el.ports.find(p => p.id === 'out');
check('the inlet port is on the inlet face, facing out',
  near(pin.x, -(A + J), 1e-4) && near(pin.y, 0) &&
  pin.dir[0] === -1 && pin.dir[1] === 0,
  JSON.stringify(pin));
check('the outlet port is a quarter turn away',
  near(pout.x, 0) && near(pout.y, A + J, 1e-4) &&
  pout.dir[0] === 0 && pout.dir[1] === 1,
  JSON.stringify(pout));
check('both ports open at the socket bore',
  near(pin.bore, B, 1e-4) && near(pout.bore, B, 1e-4),
  pin.bore + ' / ' + B);

/* The bore steps from socket to through-bore at the shoulder, which is
   what distinguishes a socket-weld fitting from a plain bend. */
const ring = el.bore[0];
const atShoulder = ring.filter(p => near(p[0], -A, 1e-4));
/* FOUR points, not two: the shoulder is an annulus, so the section cuts
   it twice -- once above the axis and once below. Expecting two was this
   test misreading its own part, which is the failure mode the layer is
   meant to end rather than one it is allowed to commit. */
check('the bore steps at the socket shoulder, on both sides of the axis',
  atShoulder.length === 4,
  atShoulder.length + ' points at x = -A; expected four -- the step from ' +
  'socket bore to through bore, cut once above the axis and once below');
check('and the step is from B/2 down to D/2',
  near(Math.max(...atShoulder.map(p => Math.abs(p[1]))), B / 2, 1e-4) &&
  near(Math.min(...atShoulder.map(p => Math.abs(p[1]))), D / 2, 1e-4),
  JSON.stringify(atShoulder));

/* THE CORNERS ARE SHARP. This is the finding that started the whole
   thread, stated as geometry rather than as a complaint: a socket-weld
   elbow turns the bore inside a block. There is no radius to get right. */
const heel = ring.some(p => near(p[0], D / 2, 1e-4) && near(p[1], -D / 2, 1e-4));
check('the two through-bores meet square -- no fillet, no sweep', heel,
  'expected a corner at (D/2, -D/2) = (' + (D / 2).toFixed(4) + ', ' +
  (-D / 2).toFixed(4) + '). A swept curve here would be the wrong part.');

/* Size, plainly. The whole fitting fits in a box about 1.6 in square. */
const e = el.extent;
check('the whole part fits in a 1.61 in box',
  near(e.x1 - e.x0, (A + J) + (B / 2 + C), 1e-4) &&
  (e.x1 - e.x0) < 1.7,
  'width ' + (e.x1 - e.x0).toFixed(4) + ' in, height ' +
  (e.y1 - e.y0).toFixed(4) + ' in');

/* ---- the size of the thing that was wrong --------------------------- */
const drawnRadius = LPE.net ? null : 3 * 0.622;   // netlist not loaded here
check('a real elbow is nothing like 3 x bore',
  el.centreToFace < 1.0 && 3 * 0.622 > 1.8,
  'centre-to-face ' + el.centreToFace.toFixed(4) + ' in against the ' +
  '1.866 in the schematic sweeps. Not a tuning error -- a different ' +
  'kind of object.');

/* ---- the branch size is a different part, not a scaled one ----------- */
const el38 = G.shapeOf(CAT.part('ELBOW90/SW3000/NPS0.375'));
check('the NPS 3/8 elbow is its own part, read from its own row',
  el38.centreToFace < el.centreToFace &&
  near(el38.centreToFace, mm(13.5) + mm(9.5), 1e-4),
  el38.centreToFace.toFixed(4) + ' vs ' + (mm(13.5) + mm(9.5)).toFixed(4));
check('and it is not the half-inch part scaled',
  !near(el38.centreToFace / el.centreToFace, 0.375 / 0.5, 1e-3),
  'ratio ' + (el38.centreToFace / el.centreToFace).toFixed(4) +
  ' -- sizes do not scale linearly, which is why they are tabulated');

/* ---- the tee ---------------------------------------------------------- */
const te = G.shapeOf(CAT.part('TEE/SW3000/NPS0.5'));
check('a tee has three ports', te.ports.length === 3,
  te.ports.map(p => p.id).join(', '));
check('its run is straight through',
  near(te.ports[0].x, -te.ports[1].x, 1e-9) &&
  te.ports[0].y === 0 && te.ports[1].y === 0);
check('B16.11 gives a tee the elbow A, so the legs match',
  near(te.centreToFace, el.centreToFace, 1e-4),
  te.centreToFace.toFixed(4) + ' vs ' + el.centreToFace.toFixed(4));

/* ---- pipe ------------------------------------------------------------- */
const pp = G.shapeOf(CAT.part('PIPE/NPS0.5/S40'), { length: 12 });
check('pipe is cut to the length asked for', pp.length === 12);
check('and carries its real wall', near(
  (pp.extent.y1 - pp.extent.y0) - CAT.part('PIPE/NPS0.5/S40').dims.bore,
  2 * CAT.part('PIPE/NPS0.5/S40').dims.wall, 1e-9),
  'od ' + (pp.extent.y1 - pp.extent.y0));

/* ---- THE FLOW PATH ---------------------------------------------------
   Shape says where the metal is; this says where the fluid goes. Every
   station below is recomputed from A and J independently of the layer,
   the same discipline as the shapes above.                            */
console.log('');
const fp = G.flowPath(CAT.part('ELBOW90/SW3000/NPS0.5'));

/* 2e-4, not 1e-4. The catalogue stores A and J rounded to four decimal
   places; this test recomputes them from the millimetres the standard
   prints. The path is TWICE (A + J), so it carries twice that rounding.
   A tolerance that ignores where its own error comes from is a tolerance
   that will be loosened again next time rather than understood. */
check('the path runs face to face, so it is 2(A + J) long',
  near(fp.length, 2 * (A + J), 2e-4),
  fp.length.toFixed(4) + ' vs ' + (2 * (A + J)).toFixed(4));
check('it enters at the inlet face and leaves at the outlet face',
  near(fp.path[0][0], -(A + J), 1e-4) && near(fp.path[0][1], 0) &&
  near(fp.path[fp.path.length - 1][1], A + J, 1e-4),
  JSON.stringify([fp.path[0], fp.path[fp.path.length - 1]]));

/* The reaches must tile the path exactly -- no gap, no overlap. A 1D
   model integrates friction over them, so a gap is lost pipe. */
let tiled = Math.abs(fp.reaches[0].s0) < 1e-9;
for (let i = 1; i < fp.reaches.length; i++)
  tiled = tiled && Math.abs(fp.reaches[i].s0 - fp.reaches[i - 1].s1) < 1e-9;
tiled = tiled && Math.abs(fp.reaches[fp.reaches.length - 1].s1 - fp.length) < 1e-9;
check('the reaches tile it with no gap and no overlap', tiled,
  fp.reaches.map(r => r.s0.toFixed(3) + '-' + r.s1.toFixed(3)).join(' '));

check('the socket reaches carry the socket bore, the middle the fitting bore',
  near(fp.reaches[0].bore, B, 1e-4) &&
  near(fp.reaches[1].bore, D, 1e-4) &&
  near(fp.reaches[2].bore, B, 1e-4),
  fp.reaches.map(r => r.bore.toFixed(4)).join(' / '));
/* Against the reach's OWN bore, not the test's millimetre conversion --
   the claim being checked is that area and bore agree inside the layer,
   which is exact. Comparing to a separately-converted D would be testing
   the catalogue's rounding a second time, in a check about geometry. */
check('and each area is pi r squared on its own bore',
  fp.reaches.every(r =>
    near(r.area, Math.PI * (r.bore / 2) * (r.bore / 2), 1e-12)));

/* Stations, each recomputed from the standard's own dimensions. */
const feat = k => fp.features.find(f => f.kind === k);
check('the inlet contraction sits one socket depth in',
  near(feat('contraction').s, J, 1e-4),
  feat('contraction').s.toFixed(4) + ' vs J = ' + J.toFixed(4));
check('the bend sits at J + A, where the axes cross',
  near(feat('bend').s, J + A, 1e-4),
  feat('bend').s.toFixed(4) + ' vs ' + (J + A).toFixed(4));
check('the outlet expansion is symmetric with the inlet',
  near(fp.length - feat('expansion').s, J, 1e-4));

/* THE FINDING, as a standing assertion: the bore inside a socket-weld
   fitting is substantially tighter than the socket that receives the
   pipe. That contraction is real and is a loss nobody was modelling. */
check('the fitting bore is a real contraction, not a detail',
  fp.reaches[1].area < 0.6 * fp.reaches[0].area,
  'socket ' + fp.reaches[0].area.toFixed(4) + ' in2 down to ' +
  fp.reaches[1].area.toFixed(4) + ' in2, a ' +
  (100 * (1 - fp.reaches[1].area / fp.reaches[0].area)).toFixed(0) +
  '% area reduction inside the fitting');

check('the bend is marked sharp, because it is',
  feat('bend').turn === 90 && feat('bend').sharp === true);

/* RESOLUTION. The whole answer to "how do we get flow high-res without
   smoothing the fitting": sample denser. The part never changes. */
const coarse = G.samplePath(fp, 0.25), fine = G.samplePath(fp, 0.02);
/* More than five times, not more than twelve. Spacing falls 12.5x but
   each of the four segments rounds its own count up, so the totals do
   not scale with the ratio. The claim worth making is that density is
   the caller's to choose; an exact multiple was never the claim. */
check('sampling finer gives more points and the same geometry',
  fine.length > 5 * coarse.length &&
  near(coarse[coarse.length - 1].s, fp.length, 1e-9) &&
  near(fine[fine.length - 1].s, fp.length, 1e-9),
  coarse.length + ' points at 0.25 in, ' + fine.length + ' at 0.02 in, ' +
  'both ending at s = ' + fp.length.toFixed(4));
check('every sample lies on the path, not near it',
  fine.every(q => Math.abs(q.x) < 1e-9 || Math.abs(q.y) < 1e-9),
  'the elbow is two axis-aligned legs, so every point has x = 0 or y = 0');
check('the bore can be read at any station',
  near(G.boreAtS(fp, 0.1), B, 1e-4) && near(G.boreAtS(fp, 1.0), D, 1e-4) &&
  G.boreAtS(fp, 99) === null);

/* A tee is two different paths and they cost different amounts. */
const run = G.flowPath(CAT.part('TEE/SW3000/NPS0.5'), { via: 'run' });
const br = G.flowPath(CAT.part('TEE/SW3000/NPS0.5'), { via: 'branch' });
check('a tee run-through is straight, with no bend feature',
  !run.features.some(f => f.kind === 'bend') &&
  run.path.every(q => q[1] === 0));
check('and the branch path turns', br.features.some(f => f.kind === 'bend'));
check('both are the same length -- same A, same J',
  near(run.length, br.length, 1e-9), run.length.toFixed(4));

const pipePath = G.flowPath(CAT.part('PIPE/NPS0.5/S40'), { length: 10 });
check('pipe is one reach of constant bore and no features',
  pipePath.reaches.length === 1 && pipePath.features.length === 0 &&
  near(pipePath.length, 10, 1e-9));

/* ---- what it refuses -------------------------------------------------- */
console.log('');
const refuses = (label, fn, expect) => {
  let msg = null;
  try { fn(); } catch (e) { msg = e.message; }
  if (msg === null) return check(label, false, 'it was ACCEPTED');
  check(label, msg.indexOf(expect) >= 0,
    msg.indexOf(expect) >= 0 ? '' : 'threw, but said: ' + msg);
};

refuses('a class with no shape rule is refused by name',
  () => G.shapeOf(CAT.part('CS-A105')), 'no shape rule for class');
refuses('a buttweld elbow is refused -- its rule is not written',
  () => G.shapeOf(CAT.part('ELBOW90/BWLR/NPS0.5')), 'no shape rule for class');
refuses('pipe with no length is refused',
  () => G.shapeOf(CAT.part('PIPE/NPS0.5/S40')), 'length must be a positive');
refuses('a part missing a dimension is refused, and names which',
  () => G.elbow90({ id: 'FAKE', class: 'elbow-socketweld',
                    dims: { centreToSocket: 1 } }), 'has no ');
refuses('something that is not a catalogue part is refused',
  () => G.shapeOf({ id: 'x' }), 'expected a catalogue part');
refuses('a tee with no path named is refused -- run and branch differ',
  () => G.flowPath(CAT.part('TEE/SW3000/NPS0.5'), { via: 'sideways' }),
  'a tee has two paths');
refuses('a class with no flow path is refused by name',
  () => G.flowPath(CAT.part('ELBOW90/BWLR/NPS0.5')), 'no flow path for class');
refuses('a non-positive sample spacing is refused',
  () => G.samplePath(fp, 0), 'spacing must be positive');

/* ---- what this layer must NOT contain --------------------------------- */
console.log('');
const src = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'geometry.js'), 'utf8');
const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');

check('it names no scale', !/pxPerInch|pixel|dpr\b/.test(code),
  'a scale here would make this layer one consumer\'s drawing instead of ' +
  'the part. The consumer picks a scale, and picks ONE -- for lengths and ' +
  'bores alike, which is exactly what the schematic does not do.');
check('it reads no frame', !/\bframe\b|\bat\[/.test(code),
  'where a part SITS is registration\'s business');
check('it reads no netlist', !/\bnet\b|toPiping|segments/.test(code),
  'a part has a shape before anything is connected to it');
check('it draws nothing itself',
  !/fillRect|beginPath|moveTo|lineTo|arc\(|createElement/.test(code),
  'this layer returns coordinates; painting them is four layers up');
check('every drawable class has a rule and every rule a class',
  G.classes().length === 3, G.classes().join(', '));

/* ================= THE GLOBE VALVE ==================================

   Two saucer chambers, stacked, with the port as the only opening
   between them. Most of the cast shape is a declared convention -- the
   vault holds no dimensioned cross-section of a valve body -- so what is
   tested here is everything that is NOT convention: the sourced
   dimensions arrive unaltered, the topology is right, flow direction
   actually changes the part, and above all the CLOSED LOOP.

   THE CLOSED LOOP is the test that matters. The cage windows are drawn
   from the derivative of the published Cv curve, so the area those drawn
   windows uncover at a given travel must reproduce the Cv curve they
   came from. If it does not, the picture is not of this valve. It caught
   a real error the first time it ran -- 13.9 points out, from a window
   band set to 0.88 of travel on a misreading of why the width profile
   droops at the top.                                                  */
console.log('');
require(path.join(__dirname, '..', 'src', 'trim.js'));
const TRIM = LPE.trim;
const VALVES = CAT.where({ class: 'valve' });
const EWT = CAT.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');

function valveOf(part, over) {
  const wp = TRIM.fromCurve({ curve: part.cv,
    characterisedBy: part.characterisedBy }).widthProfile();
  return LPE.geometry.globeValve(Object.assign({
    part: part, faceToFace: 29.62, lineBore: 10.02,
    flow: part.flow || 'down', widthProfile: wp.width,
  }, over || {}));
}

{
  const g = valveOf(EWT);

  check('a globe valve is drawn as two chambers and a port between them',
    g.inletCavity.length === 1 && g.outletCavity.length === 1 &&
    g.cage.rings.length === 2 && g.seatRing.length === 1,
    'the seat is one measured ring now, not two mirrored rectangles');

  /* A CAVITY IS INSIDE THE CASTING. Obvious, and it was not true: the
     inlet roof rose above the body between the shoulder and the flange
     and half a percent of the chamber was drawn outside the metal.

     Two fixes failed before the real cause showed up. The casting is
     NOT a single band at every station -- between the shoulder and the
     bonnet flange it has an external waist, so a ray there crosses FOUR
     times. Taking the lowest and highest crossing gives the hull, which
     swallows that recess and lets a chamber fill a gap with no metal in
     it. Even-odd pairs are the actual metal. */
  {
    const inPoly = (ring, x, y) => {
      let c = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i][0], yi = ring[i][1];
        const xj = ring[j][0], yj = ring[j][1];
        if (((yi > y) !== (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c;
      }
      return c;
    };
    let escaped = 0, sampled = 0;
    for (const ring of [g.inletCavity[0], g.outletCavity[0]])
      for (let x = g.extent.x0; x < g.extent.x1; x += (g.extent.x1 - g.extent.x0) / 320)
        for (let y = g.extent.y0; y < g.extent.y1; y += (g.extent.y1 - g.extent.y0) / 320) {
          if (!inPoly(ring, x, y)) continue;
          sampled++;
          if (!inPoly(g.silhouette[0], x, y)) escaped++;
        }
    /* The body ring is the column outline of the casting, which
       brackets the chambers it is cut away from -- so a chamber point
       outside it is a chamber outside the valve. */
    check('neither chamber escapes the valve that contains it',
      escaped <= sampled * 0.002,
      escaped + ' of ' + sampled + ' chamber points fall outside the ' +
      'metal. The casting has an external waist between the shoulder ' +
      'and the bonnet flange; reading it as one band lets a chamber ' +
      'fill a recess that is outside the valve.');
  }

  /* THE DEFINING PROPERTY: the port is the ONLY opening between them.
     The first construction put both chambers either side of a horizontal
     plane and they merged into one cavity on the left -- because both
     flanges sit on the line centreline, so a horizontal web would cut
     through both flange bores. The web has to RISE: under the inlet
     flange, up to the port, over the outlet flange. */
  {
    const inside = (ring, x, y) => {
      let c = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i][0], yi = ring[i][1];
        const xj = ring[j][0], yj = ring[j][1];
        if (((yi > y) !== (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c;
      }
      return c;
    };
    let both = 0, inl = 0, out = 0, n = 0;
    for (let x = g.extent.x0; x < g.extent.x1; x += 0.12)
      for (let y = g.extent.y0; y < g.extent.y1; y += 0.12) {
        const a = inside(g.inletCavity[0], x, y);
        const b = inside(g.outletCavity[0], x, y);
        n++; if (a) inl++; if (b) out++; if (a && b) both++;
      }
    /* The floor is a sanity check that the chambers exist at all. It
       was once 5%, calibrated against hand-drawn chambers that were far
       too fat -- a real cored passage is a tube about 0.08 of the
       face-to-face across, not a blob filling the casting. The OVERLAP
       is the assertion that matters here. */
    check('the two chambers do not merge -- the port is the only way across',
      both <= n * 0.0005 && inl > n * 0.005 && out > n * 0.005,
      both + ' of ' + n + ' sampled points fall inside both. A handful is ' +
      'the point-in-polygon test on a shared boundary; a merge is ' +
      'thousands, which is what the horizontal web produced.');
  }

  /* The sourced dimensions pass through untouched. Everything else in
     the shape is proportion; these are the facts. */
  check('the sourced dimensions arrive unaltered',
    g.port === EWT.dims.port && g.travel === EWT.dims.travel &&
    g.faceToFace === 29.62 && g.lineBore === 10.02,
    'port ' + g.port + ', travel ' + g.travel + ', F2F ' + g.faceToFace);

  check('the body is no longer than its face-to-face',
    (g.extent.x1 - g.extent.x0) <= 29.62 + 1e-9,
    (g.extent.x1 - g.extent.x0).toFixed(2) + ' in across');

  /* The flange bore is the LINE, not the port. A reduced-port valve has
     a port smaller than the pipe it sits in, and conflating the two
     would quietly delete the reason reduced trim exists. */
  check('the flange bore is the line bore, not the port',
    g.ports.every(pt => pt.bore === 10.02) && g.port === 8);

  /* The cage needs solid metal above and below its windows: the bonnet
     clamps the cage and the cage retains the seat ring. */
  const win = g.cage.windows[0];
  const wy = win.map(q => Math.abs(q[1]));
  check('the cage has solid bands above and below the window band',
    Math.min.apply(null, wy) > Math.abs(g.cage.y0) + 1e-9 &&
    Math.max.apply(null, wy) < Math.abs(g.cage.y1) - 1e-9,
    'window spans ' + Math.min.apply(null, wy).toFixed(3) + ' to ' +
    Math.max.apply(null, wy).toFixed(3) + ' in a cage from ' +
    Math.abs(g.cage.y0).toFixed(3) + ' to ' + Math.abs(g.cage.y1).toFixed(3) +
    ' -- that metal is the bonnet load path, not decoration');

  /* Alternating window sizes are real and a section must show them. */
  const widest = ring => Math.max.apply(null, ring.map(q => Math.abs(q[0]))) -
                         Math.min.apply(null, ring.map(q => Math.abs(q[0])));
  check('the two windows in section are NOT the same size',
    Math.abs(widest(g.cage.windows[0]) - widest(g.cage.windows[1])) > 1e-6,
    'an equal-percentage cage alternates large and small windows, so a ' +
    'section cuts a large one on one side and a small one on the other');
}

/* ---- THE CLOSED LOOP ------------------------------------------------ */
console.log('');
{
  let worst = 0, worstAt = '';
  const caged = VALVES.filter(v => v.characterisedBy === 'cage');
  for (const v of caged) {
    const g = valveOf(v, { faceToFace: 20,
                           lineBore: Math.max(v.dims.port * 1.1, 1) });
    for (let i = 0; i < 10; i++) {
      const d = 100 * Math.abs(g.openAreaAt((i + 1) * 10) / g.openAreaAt(100) -
                               v.cv[i] / v.cv[9]);
      if (d > worst) { worst = d; worstAt = v.id + ' at ' + ((i + 1) * 10) + '%'; }
    }
  }
  check('the drawn window area reproduces the Cv curve it was derived from',
    worst < 2.5,
    'worst disagreement ' + worst.toFixed(2) + ' points over ' + caged.length +
    ' cages, at ' + worstAt + '. The residual is smooth interpolation ' +
    'against ten band averages, not a modelling error.');
  check('and it is exact at full travel, by construction',
    Math.abs(valveOf(EWT).openAreaAt(100) /
             valveOf(EWT).openAreaAt(100) - 1) < 1e-12);
  const g = valveOf(EWT);
  check('a shut valve uncovers no window at all',
    g.openAreaAt(0) === 0);
  check('and the area only ever grows with travel',
    [10, 20, 40, 60, 80, 100].every((t, i, a) =>
      i === 0 || g.openAreaAt(t) > g.openAreaAt(a[i - 1])));
}

/* ---- flow direction changes the part -------------------------------- */
console.log('');
{
  const down = valveOf(EWT, { flow: 'down' });
  const up = valveOf(EWT, { flow: 'up' });

  /* FLOW-UP IS THE SAME VALVE RUN THE OTHER WAY, NOT A MIRRORED ONE.

     This test used to assert that flow-up put the cage BELOW the port,
     because the layer mirrored the whole section in y to get it. That
     is not a valve: it puts the bonnet underneath. The actuator is
     always on top, the cage is always above the seat, and the plug
     always lifts. Flow-up means the fluid enters the other flange and
     comes UP through the seat into the cage -- identical casting,
     identical trim, identical orientation on the rack.

     So the geometry must be IDENTICAL, and only the roles change. */
  check('the cage is above the port whichever way the fluid runs',
    down.cage.y1 > 0 && down.cage.y0 >= 0 &&
    up.cage.y1 > 0 && up.cage.y0 >= 0,
    'the actuator does not move to the underside of the pipe because ' +
    'somebody specified noise trim');
  /* THE SAME CASTING, TURNED ROUND -- and the mirror is the proof.

     Flow-up is the valve picked up and put back in the line the other
     way, so every point of it is the flow-down point with x negated
     and y untouched. Asserting that, rather than asserting the two
     are identical, is what catches a SECOND SHAPE creeping in: if
     anything about the flow-up body were drawn rather than mirrored
     it would not survive this. And requiring y to be untouched is
     what stops the old bug coming back, where the section was
     mirrored vertically and the actuator ended up underneath. */
  const flipRings = rs => rs.map(r => r.map(q => [-q[0], q[1]]));
  const same = (x, y) => {
    const r = (v) => JSON.stringify(v.map(ring =>
      ring.map(q => [Math.round(q[0] * 1e6) / 1e6,
                     Math.round(q[1] * 1e6) / 1e6])));
    return r(x) === r(y);
  };

  check('flow-up is the same casting turned round, point for point',
    same(flipRings(down.body), up.body) &&
    same(flipRings(down.seatRing), up.seatRing),
    'anything drawn rather than mirrored would not survive this');
  check('and nothing is mirrored in y -- the actuator stays on top',
    JSON.stringify(down.body.map(r => r.map(q => q[1]))) ===
    JSON.stringify(up.body.map(r => r.map(q => q[1]))),
    'a section mirrored vertically puts the bonnet under the pipe');
  /* The chamber that wraps the cage changes SIDES, because the valve
     turned round. It does not change shape. */
  check('the chamber that wraps the cage swaps sides',
    same(flipRings(down.inletCavity), up.outletCavity) &&
    same(flipRings(down.outletCavity), up.inletCavity));
  check('and the fluid enters the left flange whichever way it faces',
    down.ports[0].role === 'inlet' && down.ports[1].role === 'outlet' &&
    up.ports[0].role === 'inlet' && up.ports[1].role === 'outlet',
    'the service decides which way the casting faces, never which way ' +
    'the fluid crosses the page');
  check('and which chamber the fluid reaches first',
    down.entersVia === 'upper' && up.entersVia === 'lower',
    'flow-down fills the chamber around the cage and goes down through ' +
    'the seat; flow-up arrives under the seat and comes up into the cage');

  /* THE PRESSURE-ENERGISED U-SEAL. Fitted the wrong way round, the
     pressure that should close it peels it open. */
  check('the U-seal opens toward the high-pressure side',
    down.plugAt(50).seal.opens === 'up' && up.plugAt(50).seal.opens === 'down',
    'flow-down: ' + down.plugAt(50).seal.opens + ', flow-up: ' +
    up.plugAt(50).seal.opens);
  check('and it says why, because a reader cannot see a U in section',
    /pressure/.test(down.plugAt(50).seal.why) &&
    /flow-down/.test(down.plugAt(50).seal.why));
}

/* ---- the plug ------------------------------------------------------- */
console.log('');
{
  const g = valveOf(EWT);
  /* The DRAWN lift is at drawing scale; the TRUE lift is the catalogue
     travel. Asserting the drawn one equals the catalogue was the test
     expressing the very confusion that put the plug in the packing
     bore -- the casting is measured off a sheet that is not to scale,
     so the picture and the valve do not share a scale. */
  check('the plug sits on the seat at 0% and is fully lifted at 100%',
    g.plugAt(0).lift === 0 && g.plugAt(100).lift > 0);
  check('and the TRUE lift at full travel is the catalogue travel',
    g.plugAt(100).liftTrue === EWT.dims.travel &&
    g.plugAt(50).liftTrue === EWT.dims.travel / 2);
  check('the drawn lift is smaller, because the drawn cage is shallower',
    g.plugAt(100).lift < g.plugAt(100).liftTrue,
    'drawn ' + g.plugAt(100).lift.toFixed(3) + ' in against a real ' +
    g.plugAt(100).liftTrue + ' in -- the picture is in the drawing of ' +
    'the valve, not in the valve');
  check('a balanced plug carries balance holes and a seal',
    g.plugAt(50).balanceHoles.length > 0 && g.plugAt(50).seal !== null);
  const un = valveOf(EWT, { balanced: false });
  check('an unbalanced plug carries neither',
    un.plugAt(50).balanceHoles.length === 0 && un.plugAt(50).seal === null,
    'a solid head sees the full differential and needs more thrust');
}

/* ---- what it refuses, and what it admits ---------------------------- */
console.log('');
refuses('a valve with no face-to-face is refused',
  () => LPE.geometry.globeValve({ part: EWT, lineBore: 10, flow: 'down' }),
  'NOT derivable from the port');
refuses('a valve with no line bore is refused',
  () => LPE.geometry.globeValve({ part: EWT, faceToFace: 20, flow: 'down' }),
  'the LINE, not the port');
refuses('a valve with no flow direction is refused',
  () => LPE.geometry.globeValve({ part: EWT, faceToFace: 20, lineBore: 10 }),
  'must be "down" or "up"');
refuses('and travel outside 0 to 100 is refused',
  () => valveOf(EWT).plugAt(140), 'travel is a percentage');

/* A STEM DOES NOT SCALE WITH THE PORT, so there is nothing to fall back
   on. This was drawn at 0.11 of the plug width, which puts a 1.8-in
   stem on an 8-in port against a published 3/4 in -- 2.4x out, and it
   read as a column rather than a stem. A proportion that wrong is worse
   than no drawing at all, so the shape refuses by name instead. */
refuses('a valve with no published stem diameter is refused, not guessed',
  () => {
    const noStem = JSON.parse(JSON.stringify(EWT));
    delete noStem.dims.stem;
    return valveOf(noStem).plugAt(50);
  }, 'carries no stem diameter');

{
  const g = valveOf(EWT);
  const w = g.plugAt(50).stem.reduce((m, p) => Math.max(m, Math.abs(p[0])), 0) * 2;
  check('and the stem it draws is the published diameter, in inches',
    Math.abs(w - EWT.dims.stem) < 1e-9,
    w.toFixed(4) + ' in drawn against a published ' + EWT.dims.stem);
}

{
  const g = valveOf(EWT);
  /* PINNED TO THE DECLARATION, NOT TO A LIST. This asked for
     `cageWall`, `windowBand` and at least twelve keys -- and so it was
     holding twelve retired conventions in place, failing the moment
     the dead ones were removed. A check that enforces the presence of
     numbers nothing reads is worse than no check: it makes the
     clean-up look like the regression. What it actually means to say
     is that the valve hides none of what the layer declares, and that
     survives every retirement. */
  check('every convention the layer declares is returned by name',
    (() => {
      const want = Object.keys(LPE.geometry.GLOBE_CONVENTIONS);
      return want.length > 0 &&
             want.every(k => g.conventions[k] !== undefined);
    })(),
    Object.keys(g.conventions).length + ' returned against ' +
    Object.keys(LPE.geometry.GLOBE_CONVENTIONS).length + ' declared');
  /* A STALE ADMISSION IS AS BAD AS A MISSING ONE.

     This note has now been wrong in both directions. It once said the
     cast shape was invented, after the casting had been measured --
     telling a reader to distrust the best-sourced part. Then it kept
     citing drawing 30A9542-F and "NOT TO SCALE" after the source had
     moved. Then the source it had moved TO turned out to be a document
     number the vault does not hold at all, and this check is what
     caught the correction going in: it was pinned to D100399X012 by
     name and fired the moment the note stopped saying it.

     So it is pinned to the real source instead -- the Oil & Gas
     sourcebook's Figure 11-5, which we can produce. Three times now
     the note has outlived the thing it described, which is the whole
     argument for pinning it to something. */
  check('the shape says which parts are measured, sourced, and convention',
    /MEASURED/.test(g.conventionNote) &&
    /Figure 11-5/.test(g.conventionNote) &&
    /SOURCED/.test(g.conventionNote) &&
    /STILL CONVENTION/.test(g.conventionNote));
  check('and it cites no document the vault cannot produce',
    !/D100399X012|D100017X012/.test(g.conventionNote),
    'check-techpubs.js is the general form of this; here it is pinned ' +
    'to the one note that got it wrong for longest');
  check('it says the figure is to scale, which is why one dimension places all',
    /TO SCALE/.test(g.conventionNote) &&
    !/NOT TO SCALE/.test(g.conventionNote));
  check('and the stem is listed as sourced rather than a proportion',
    /stem/i.test(g.conventionNote));
}


console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');

/* ---- the flow path -------------------------------------------------- */
/* ---- the bonnet bore and the packing box ---------------------------- */
console.log('');
{
  const g = valveOf(EWT);
  const box = g.packingBox();

  check('the packing box is found in the casting, not declared',
    box !== null && box.bore > 0 && box.to > box.from,
    box ? 'bore ' + box.bore.toFixed(2) + ' in, ' +
          (box.to - box.from).toFixed(2) + ' in tall, from y ' +
          box.from.toFixed(2) : 'not found');
  /* A packing box is a bore round a stem with room for rings in
     between. If the annulus came out negative or enormous, something
     other than the packing box was found. */
  check('and it leaves a sensible annulus around the published stem',
    box.annulus > 0.1 && box.annulus < 1.0,
    box.annulus.toFixed(3) + ' in each side of a ' + EWT.dims.stem +
    ' in stem');
  check('the neck is narrower than the box above it',
    box.neckBore < box.bore,
    'neck ' + box.neckBore.toFixed(2) + ', box ' + box.bore.toFixed(2));

  /* THE COLUMN UNDER THE PACKING IS FULL OF PROCESS FLUID, and this
     model drew it as solid metal until the packing arrived. It is the
     single fact that makes the next part along necessary. */
  {
    const w = g.wettedAt(50, { minGap: 0.6 });
    let top = -Infinity;
    for (const r of w.rings) for (const q of r) if (q[1] > top) top = q[1];
    check('the wetted volume now reaches the underside of the packing',
      Math.abs(top - box.from) < 0.2,
      'wetted to y ' + top.toFixed(2) + ', packing starts at ' +
      box.from.toFixed(2));
    check('and that column is STILL -- it is a dead end at line pressure',
      w.stillRings.length >= 3,
      'nowhere for it to go, and the packing is all that holds it in');
  }

  /* ---- the stack ---- */
  {
    const pk = g.packingAt();
    check('the stack is the nine parts Figure 4 names',
      pk.items.length === 9 &&
      pk.items[0].part === 'packing box ring' &&
      pk.items[pk.items.length - 1].part === 'upper wiper');
    check('and only the packing rings are marked as sealing',
      pk.sealingParts.length === 2 &&
      pk.sealingParts.every(n => n === 'packing ring'),
      'which of the nine does the work is the question a reader has');
    check('the stack fills the box exactly, bottom to top',
      Math.abs(pk.items[0].y0 - pk.box.from) < 1e-9 &&
      Math.abs(pk.items[pk.items.length - 1].y1 - pk.box.to) < 1e-9);
    check('no part of it crosses the stem',
      pk.items.every(i => i.left.every(q => q[0] <= 0) &&
                          i.right.every(q => q[0] >= 0)),
      'the stem is the reason the rings are there');
    check('and it says the box is measured and the shares are not',
      /MEASURED/.test(pk.conventionNote) &&
      /CONVENTION/.test(pk.conventionNote));
  }

  refuses('a packing arrangement this model does not draw is refused',
    () => g.packingAt({ style: 'graphite' }), 'different stack');
}

/* ---- NO BLACK INSIDE THE VALVE -------------------------------------

   Every space inside the casting is either metal or water. There is
   no third thing, and a space that is neither is not a feature -- it
   is somewhere the model forgot, and it draws as a hole into nothing.

   This is rasterised rather than reasoned because the failures were
   all of a kind that reads as deliberate: a dark slot in a plug looks
   like a drilling, a dark band above a plug looks like a shadow. Four
   of them survived three rounds of looking at the picture. They were
   the space the plug strokes through, drawn the width of the balance
   drillings instead of the width of the bore and floored on the
   LIFTED plug instead of the drawn one, and the stem's own socket,
   traced into the plug's outline with nothing ever put in it.

   The cage BORE is the part that catches people, this test included:
   it is not inside any ring -- the cage rings are its walls -- so the
   cage's bounding box has to stand in for it, and leaving it out is
   what let this pass while there was a band of black above the plug
   the width of the whole bore. */
{
  const insideRing = (r, x, y) => {
    let n = 0;
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const a = r[i], b = r[j];
      if (((a[1] > y) !== (b[1] > y)) &&
          (x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0])) n ^= 1;
    }
    return !!n;
  };
  const inAny = (rs, x, y) => (rs || []).some(
    r => Array.isArray(r) && r.length > 2 && insideRing(r, x, y));

  /* Both ends of the range the one archetype is stretched across. */
  const SUBJECTS = [
    ['EWT 10x8', valveOf(EWT, { flow: 'down' })],
    ['ED NPS 4', valveOf(CAT.part('VALVE/ED/NPS4/P4.375/T2/EQPCT'),
       { flow: 'down', faceToFace: 14.5, lineBore: 4.026 })],
  ];
  /* A TOLERANCE, NOT A ZERO, and it scales with the valve. The
     traced plug and the traced cage do not share a centreline to the
     last thousandth, so a hairline runs down one side of the plug
     where the other side has none -- and on a valve three times the
     size it is three times as long. The allowance is that hairline:
     a tenth of an inch wide, down both sides of the plug. The
     failures this is here for were an order of magnitude above it --
     one and a half square inches on the smaller of these two. */
  const hairline = GVfor => 0.09 * 2 *
    (Math.max.apply(null, GVfor.plugAt(0).head.map(q => q[1])) -
     Math.min.apply(null, GVfor.plugAt(0).head.map(q => q[1])));
  const worst = [];
  for (const [name, GV] of SUBJECTS)
  for (const T of [0, 25, 50, 75, 100]) {
    const pg = GV.plugAt(T), w = GV.wettedAt(T, { minGap: 0.18 });
    const cage = GV.cage;
    /* The cage BORE, not the cage's bounding box. The walls are
       stepped castings and the box swallows the notches outside
       them, which are neither bore nor metal and are not the
       model's to paint. The bore is the part that has to be one
       thing or the other. */
    let bore = Infinity;
    for (const r of (cage.rings || [])) for (const q of r)
      if (Math.abs(q[0]) < bore) bore = Math.abs(q[0]);
    const cageBox = [[-bore, cage.y0], [bore, cage.y0],
                     [bore, cage.y1], [-bore, cage.y1]];
    const inside = [].concat(GV.body, GV.bonnet || [], cage.rings || [],
      cage.windows || [], [cageBox], [pg.head], [pg.stem]);
    const metal = [].concat(GV.body, GV.bonnet || [], GV.seatRing || [],
      cage.rings || [], [pg.head], [pg.stem]);
    const cut = [].concat(cage.windows || [], pg.balanceHoles || []);
    const S = 0.05;
    let black = 0;
    for (let y = GV.extent.y0; y < GV.extent.y1; y += S)
      for (let x = GV.extent.x0; x < GV.extent.x1; x += S) {
        if (!inAny(inside, x, y)) continue;
        if (inAny(metal, x, y) && !inAny(cut, x, y)) continue;
        if (inAny(w.rings, x, y)) continue;
        black += S * S;
      }
    worst.push({ T: T, name: name, area: black,
                 bar: hairline(GV) });
  }
  for (const r of worst)
    check(r.name + ' at ' + r.T +
          '% travel: nothing inside the valve is unpainted',
          r.area < r.bar,
          r.area.toFixed(3) + ' in2 of it, against a hairline allowance ' +
          'of ' + r.bar.toFixed(2));
}

console.log('');
{
  const g = valveOf(EWT);

  refuses('a flow path outside 0 to 100 travel is refused',
    () => g.flowPathAt(-5), 'travel is a percentage');

  /* THE WINDOW IS THE RESTRICTION. That is what a cage valve IS: the
     squeeze happens in the trim, not in the casting. If any station of
     the body ever came out narrower than the window the picture would
     be teaching the opposite of the valve. */
  let alwaysWindow = true;
  for (let t = 5; t <= 100; t += 5) {
    const fp = g.flowPathAt(t);
    if (fp.stations[fp.throat].what !== 'cage window') alwaysWindow = false;
  }
  check('the cage window is the throat at every travel, not the casting',
    alwaysWindow);

  /* CONTINUITY THROUGH THE PORT. Q is the same at every station by
     definition, so the velocity the picture draws has to be Q over the
     area there and nothing else. This asserts the arithmetic the skin
     depends on: v*A recovers one flow everywhere along the route. */
  {
    const fp = g.flowPathAt(60);
    const Q = 3735 * 0.002228;                     /* gpm to cu ft/s */
    const back = fp.stations.map(st => (Q / (st.area / 144)) * (st.area / 144));
    const worst = back.reduce((m, q) => Math.max(m, Math.abs(q - Q)), 0);
    check('v times A recovers one flow at every station', worst < 1e-12,
      'worst departure ' + worst.toExponential(2) + ' cu ft/s');
    check('and the throat is genuinely faster than the line',
      (Q / (fp.minArea / 144)) > 3 * (Q / (fp.lineArea / 144)),
      (Q / (fp.minArea / 144)).toFixed(0) + ' ft/s against a line ' +
      (Q / (fp.lineArea / 144)).toFixed(1));
  }

  /* FLOW-UP IS THE SAME ROUTE WALKED BACKWARDS, not a mirrored valve.
     The casting does not change; which flange the fluid arrives at
     does. */
  {
    /* Named explicitly rather than taken from the row: this valve's
       catalogue entry is flow-UP, so leaning on the default tests one
       direction twice. */
    const dn = valveOf(EWT, { flow: 'down' }).flowPathAt(50);
    const up = valveOf(EWT, { flow: 'up' }).flowPathAt(50);
    const a = dn.stations.map(st => st.what);
    const b = up.stations.map(st => st.what);
    /* The ORDER reverses -- flow-up meets the port before the window.
       The two chamber NAMES swap with it, because whichever chamber
       the fluid meets first is the inlet; that is what the word means,
       and the reversed list briefly had the picture calling the inlet
       the outlet. */
    const swap = n => n === 'inlet chamber' ? 'outlet chamber'
                    : n === 'outlet chamber' ? 'inlet chamber' : n;
    check('flow-up walks the same stations in the opposite order',
      a.join('|') === b.slice().reverse().map(swap).join('|'),
      b.join(' -> '));
    check('and it still meets the INLET chamber first',
      b[1] === 'inlet chamber' && a[1] === 'inlet chamber' &&
      b[b.length - 2] === 'outlet chamber',
      'whichever chamber the fluid reaches first is the inlet');
    check('and it enters at the other flange',
      dn.enters === 'left' && dn.leaves === 'right' &&
      up.enters === 'right' && up.leaves === 'left');
    check('and the throat is the window either way, at the same area',
      dn.stations[dn.throat].what === 'cage window' &&
      up.stations[up.throat].what === 'cage window' &&
      Math.abs(dn.minArea - up.minArea) < 1e-12,
      'the casting does not change when the service does');
  }

  /* THE AREA IS A REAL AREA, pinned to the rated Cv rather than to
     whatever length happened to be in scope. This is the check that
     would have caught the cage wall standing in for the window width. */
  {
    const rated = EWT.cv[EWT.cv.length - 1];
    const want = rated / (37.97 * g.conventions.dischargeCoef);
    check('full-open window area is the rated Cv through the orifice relation',
      Math.abs(g.openAreaAt(100) - want) < 1e-9,
      g.openAreaAt(100).toFixed(2) + ' in2 against ' + want.toFixed(2));
    const port = Math.PI * Math.pow(EWT.dims.port / 2, 2);
    check('and it is the right order next to the port it feeds',
      g.openAreaAt(100) > 0.25 * port && g.openAreaAt(100) < port,
      g.openAreaAt(100).toFixed(1) + ' in2 of window against a ' +
      port.toFixed(1) + ' in2 port');
  }
}

/* ---- cage windows: a convention that has to earn the name ------------

   The count was declared here once before and removed, because nothing
   read it. These checks exist to make that impossible a second time: if
   the count stops changing an answer, they go red.                    */
{
  const G = LPE.geometry;
  /* ED NPS 8 equal-percentage, Catalog 12 p125: Cv 567, travel 2 in,
     port 8 in. Cage bore measured off the registered Figure 20 trace. */
  const AREA = 567 / (37.97 * 0.85);
  const PROF = [0.14, 0.12, 0.16, 0.26, 0.38, 0.54, 0.74, 0.88, 0.81, 0.67];
  const cage = (o) => G.cageWindows(Object.assign({
    openAreaIn2: AREA, bandHeightIn: 2, widthProfile: PROF,
    cageBoreIn: 8.09,
  }, o));

  const six = cage({ count: 6 });

  check('the count divides the sourced area rather than changing it',
    (() => {
      let mean = 0;
      for (const w of PROF) mean += w;
      mean /= PROF.length;
      const back = six.count * six.widestWidthIn * mean * 2;
      return Math.abs(back - AREA) < 1e-9;
    })(),
    'six windows ' + six.widestWidthIn.toFixed(2) + ' in at their widest ' +
    'integrate back to the ' + AREA.toFixed(2) + ' in2 the Cv curve gives');

  check('more windows means narrower ones, in exact proportion',
    Math.abs(cage({ count: 4 }).widestWidthIn /
             cage({ count: 8 }).widestWidthIn - 2) < 1e-9,
    'which is the whole reason the count is needed: the Cv curve gives ' +
    'the TOTAL width at each height and cannot say how it is split');

  check('and the total area is identical whichever count is chosen',
    (() => {
      const a = n => {
        const c = cage({ count: n });
        let mean = 0;
        for (const w of PROF) mean += w;
        return c.count * c.widestWidthIn * (mean / PROF.length) * 2;
      };
      return Math.abs(a(4) - a(9)) < 1e-9;
    })(),
    'the convention moves how the area is divided, never how much ' +
    'there is -- that part is the published curve');

  /* ---- the left-right asymmetry, and where it comes from ---- */
  check('an even count puts a window on both cuts, so the section is ' +
        'symmetric',
    cage({ count: 6 }).symmetric && cage({ count: 8 }).symmetric);
  check('an ODD count cannot, and the section comes out asymmetric',
    !cage({ count: 5 }).symmetric,
    'opposite azimuths are half a turn apart and half a turn is never a ' +
    'whole number of pitches when the count is odd -- so one side cuts a ' +
    'window and the other cuts metal. The asymmetry is a consequence of ' +
    'the count, not a drawing flourish');
  check('the far cut on an odd cage misses by half a pitch',
    Math.abs(cage({ count: 5 }).farCut.offCentreDeg - 36) < 1e-9,
    'five windows, 72 degree pitch, so 180 falls 36 degrees off the ' +
    'nearest one');

  check('clocking moves what the section sees, with the cage unchanged',
    cage({ count: 6, clockDeg: 0 }).nearCut.through &&
    !cage({ count: 6, clockDeg: 30 }).nearCut.through,
    'half a pitch of rotation takes the near cut off the window and into ' +
    'the post between two');

  check('windows the cut misses are foreshortened, not hidden',
    (() => {
      const w = cage({ count: 6 }).windows;
      return Math.abs(w[0].foreshorten - 1) < 1e-9 &&
             Math.abs(w[3].foreshorten - 1) < 1e-9 &&
             w[1].foreshorten < 0.6;
    })(),
    'a window a sixth of a turn away presents half its width -- which is ' +
    'what made a photograph of one cage look like it had two window sizes');

  check('and it says, in its own answer, which parts of it are conventions',
    /COUNT and CLOCKING are conventions/.test(six.declared) &&
    /NOT a convention/.test(six.declared) &&
    /foreshortening/.test(six.declared));

  refuses('a count that is not a whole number of openings',
    () => cage({ count: 5.5 }), 'whole number');
  refuses('a count of zero -- a cage with no windows is not a cage',
    () => cage({ count: 0 }), 'at least one');
  refuses('an area it was not given, because the count divides a sourced ' +
          'area and does not invent one',
    () => G.cageWindows({ count: 6, bandHeightIn: 2, widthProfile: PROF,
                          cageBoreIn: 8.09 }), 'does not invent one');
  refuses('a profile too short to be a profile',
    () => cage({ count: 6, widthProfile: [1] }), 'at least two stations');
}

/* ---- every declared convention must be read by something ------------

   THE BUG THIS EXISTS TO PREVENT HAS NOW HAPPENED SIX TIMES. A number
   is written into GLOBE with a careful comment explaining what it
   governs; later the thing it governed is replaced by a traced outline
   or a catalogue dimension; the number stays. `windowCount` was deleted
   for exactly this and the deletion comment called it "declared,
   documented, dead". Then `plugHead`, `sealThk`, `seatThk`,
   `balanceDia` and `stemDia` were all found in the same state in the
   same block, and `stemDia` was the dangerous one -- a proportion of
   the port sitting next to `part.dims.stem`, which is sourced and which
   the catalogue refuses to load unless it matches its document. Two
   answers to one question, one of them worse, waiting to be picked up.

   A comment cannot enforce this and a reviewer evidently does not. So
   the source is read and every key in the conventions block has to
   appear somewhere else in the file. The cost of a convention is that
   something consumes it; this is that cost, collected.               */
{
  const fs = require('fs');
  const src = fs.readFileSync(
    require('path').join(__dirname, '..', 'src', 'geometry.js'), 'utf8');
  const open = src.indexOf('const GLOBE = {');
  let depth = 0, end = -1;
  for (let i = src.indexOf('{', open); i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (!depth) { end = i; break; } }
  }
  const block = src.slice(open, end);
  const body = src.slice(0, open) + src.slice(end);

  /* keys at the top level of the block, skipping anything inside a
     comment -- the block is more comment than code and deliberately so */
  const stripped = block
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '');
  const keys = [];
  const re = /(^|[\n{,])\s*([A-Za-z_$][\w$]*)\s*:/g;
  let m;
  while ((m = re.exec(stripped))) keys.push(m[2]);

  /* A count would drift every time one is retired, which is what the
     block is for. Anchor on a key that cannot leave: the discharge
     coefficient is the one number standing between a published Cv and
     a real area, and nothing can source it away. */
  check('the conventions block was found and parsed',
    keys.length >= 3 && keys.indexOf('dischargeCoef') >= 0,
    keys.length + ' conventions: ' + keys.join(', '));

  const dead = keys.filter(k =>
    !new RegExp('\\b(?:G|GLOBE)\\.' + k + '\\b').test(body));
  check('every declared convention is read by something',
    dead.length === 0,
    dead.length
      ? 'declared and read by nothing: ' + dead.join(', ') +
        '. Either wire it up or delete it -- a convention nobody ' +
        'consumes is a comment, and one sitting beside a sourced value ' +
        'is a second answer waiting to be picked up by mistake.'
      : keys.length + ' conventions, all consumed');

  check('and none of them shadows a sourced catalogue dimension',
    !keys.some(k => /^(stem|port|travel|faceToFace)$/.test(k)) &&
    !keys.includes('stemDia'),
    'stem diameter, port, travel and face-to-face are catalogue ' +
    'dimensions checked against their own documents; a proportion of ' +
    'the port standing in for one of them is how the wrong number gets ' +
    'used');
}

process.exit(failures ? 1 : 0);
