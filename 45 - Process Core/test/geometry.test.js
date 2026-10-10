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

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
