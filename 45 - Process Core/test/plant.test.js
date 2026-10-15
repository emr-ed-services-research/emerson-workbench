/* @layer plant
   @core Process Core -- the composition layer, under test.

   What this suite is really guarding is a class of bug rather than a
   function. Every seam this core has produced at a pipe-to-valve joint
   came from the same absence: two descriptions of one boundary, each
   computed somewhere else, which then had to be made to agree by hand.
   The tests below are mostly about there being only ONE of each thing. */

'use strict';

global.window = global.window || {};
require('../src/plant.js');
const P = window.LPE.plant;

let failures = 0;
const check = (label, ok, why) => {
  if (!ok) failures++;
  console.log('  ' + (ok ? 'ok  ' : 'FAIL') + '  ' + label +
    (ok || !why ? '' : '\n        ' + why));
};
const refuses = (label, fn, expect) => {
  let m = null;
  try { fn(); } catch (e) { m = e.message; }
  if (m === null) return check(label, false, 'ACCEPTED');
  check(label, m.indexOf(expect) >= 0, m.indexOf(expect) >= 0 ? '' : m);
};

console.log('\nPLANT — one path through a line and what is in it\n');

/* ---- a bare line ------------------------------------------------------ */

const LINE = P.run({ bore: 6.065, upstream: 240, downstream: 240, gpm: 560 });

check('a bare line composes to its own length',
  Math.abs(LINE.total - 480) < 1e-9, LINE.total);
check('velocity comes from continuity, not from an input',
  Math.abs(LINE.at(100).ftps - 6.2) < 0.05, LINE.at(100).ftps);
check('the same velocity everywhere, because the bore does not change',
  Math.abs(LINE.at(10).ftps - LINE.at(470).ftps) < 1e-9);

/* ---- the join, which is the whole point ------------------------------- */

const face = (bore) => ({ x: 0, y: 0, area: Math.PI * bore * bore / 4,
                          halfW: bore / 2, what: 'line bore' });
const throat = { x: 7, y: 1, area: 2.0, halfW: 0.8, what: 'throat' };
const comp = (inB, outB) => ({ stations: [
  face(inB), throat,
  Object.assign({}, face(outB), { x: 14.5 }) ] });

check('a component whose faces match the line needs no transition',
  (() => { try {
    P.run({ bore: 6.065, upstream: 10, downstream: 10,
            component: comp(6.065, 6.065) }); return true;
  } catch (e) { return false; } })());

refuses('a component narrower than its line is refused, not butted on',
  () => P.run({ bore: 6.065, upstream: 10, downstream: 10,
                component: comp(4.0, 6.065) }), 'REDUCER');

refuses('and the refusal says which end, and both bores',
  () => P.run({ bore: 6.065, upstream: 10, downstream: 10,
                component: comp(6.065, 4.0) }), 'outlet is 4.000');

check('giving the reducer a length lets it compose',
  (() => { try {
    P.run({ bore: 6.065, upstream: 10, downstream: 10,
            component: comp(4.0, 4.0), transition: { length: 7 } });
    return true;
  } catch (e) { return false; } })());

refuses('a reducer with no length is refused as the step it is',
  () => P.run({ bore: 6.065, upstream: 10, downstream: 10,
                component: comp(4.0, 4.0), transition: { length: 0 } }),
  'step with a nicer name');

/* ---- continuity across the boundary ----------------------------------- */

const RUN = P.run({ bore: 6.065, upstream: 100, downstream: 100,
                    component: comp(6.065, 6.065), gpm: 560 });

/* The test that would have caught every seam: walk the path in small
   steps and assert nothing jumps. A boundary that has to be made to
   agree shows up here as a discontinuity, and there is no way to write
   the sign error that caused one, because there is only one description
   of where a station is. */
let worstPos = 0, worstBore = 0;
let prev = RUN.at(0);
for (let s = 0.25; s <= RUN.total; s += 0.25) {
  const q = RUN.at(s);
  worstPos = Math.max(worstPos, Math.hypot(q.x - prev.x, q.y - prev.y));
  worstBore = Math.max(worstBore, Math.abs(q.bore - prev.bore));
  prev = q;
}
check('position never jumps, anywhere along the path',
  worstPos < 0.5, 'biggest step ' + worstPos.toFixed(3) + ' in');
check('and neither does the bore',
  worstBore < 1.0, 'biggest change ' + worstBore.toFixed(3) + ' in');

check('arc length is monotonic, so a consumer can walk it',
  (() => { let last = -1;
    for (const p of RUN.stations) { if (p.s < last) return false; last = p.s; }
    return true; })());

check('the throat is the fastest point, because it is the narrowest',
  (() => { const v = RUN.stations.map(p => p.ftps);
    const i = v.indexOf(Math.max(...v));
    return RUN.stations[i].what === 'throat'; })());

/* ---- refusals --------------------------------------------------------- */

refuses('a run with no bore is refused', () => P.run({ upstream: 1,
  downstream: 1 }), '{bore}');
refuses('a component with one station is refused',
  () => P.run({ bore: 6, upstream: 1, downstream: 1,
                component: { stations: [face(6)] } }), 'at least two');
refuses('a station with no halfW cannot have its join checked',
  () => P.run({ bore: 6, upstream: 1, downstream: 1,
                component: { stations: [{ x: 0, area: 1 }, { x: 1, area: 1 }] } }),
  'no halfW');

/* ---- what this layer must never become -------------------------------- */

const code = require('fs').readFileSync(__dirname + '/../src/plant.js', 'utf8');
check('it draws nothing', !/\.(beginPath|moveTo|lineTo|fillText|fillRect)\s*\(/.test(code));
check('it names no colour', !/#[0-9a-fA-F]{3,8}\b/.test(code));
check('it chooses no magnification', !/pxPerInch|scale\s*[:=]/.test(code));

/* ---- the whole run as ONE wetted domain --------------------------------

   The seams this core produced at a pipe-to-valve joint all came from the
   same shape: a solved field inside the valve, a straight run outside it,
   and arithmetic in between to reconcile the two. Lane, sign, scale,
   recovery rate, paint order -- fixing one moved the inconsistency
   somewhere else.

   These guard the absence of that boundary. If a future change puts the
   pipe back outside the solve, the first two fail. */
(function () {
  global.window = global.window || {};
  require('../src/geometry.js');
  require('../src/trim.js');
  require('../src/catalogue.js');
  require('../src/flowfield.js');

  /* A component stub that answers the two questions plant.wetted asks,
     so this suite does not need the whole catalogue to make its point. */
  const hw = 3.0, A = Math.PI * hw * hw;
  const fake = {
    extent: { x0: -7, x1: 7, y0: -4, y1: 6 },
    wettedAt: () => ({ rings: [[[-7,-hw],[7,-hw],[7,hw],[-7,hw]]],
                       throatRings: [], stillRings: [], plenum: {},
                       balance: { rings: [] } }),
    flowPathAt: () => ({ stations: [
      { x: -7, y: 0, area: A, halfW: hw, what: 'end connection' },
      { x: 0, y: 0, area: A * 0.2, halfW: hw * 0.45, what: 'throat' },
      { x: 7, y: 0, area: A, halfW: hw, what: 'end connection' } ] }),
  };

  const d = P.wetted({ geometry: fake, travelPct: 70, stub: 10,
                       lineBore: hw * 2 });

  check('the line either side is part of the domain, not outside it',
    d.extent.x0 === -17 && d.extent.x1 === 17,
    d.extent.x0 + ' .. ' + d.extent.x1);

  check('and it arrives as rings, so the solver sees one wetted region',
    d.rings.length === 3, d.rings.length + ' rings');

  check('the openings are at the ends of the LINE, not at the valve faces',
    d.openings[0].x < -16 && d.openings[1].x > 16,
    JSON.stringify(d.openings.map(o => o.x)));

  check('the stations run line, component, line',
    d.stations[0].what === 'line' &&
    d.stations[d.stations.length - 1].what === 'line' &&
    d.stations.length === 5, d.stations.map(q => q.what).join(' / '));

  check('the stub is bored to meet the body, so nothing steps at the face',
    Math.abs(d.stubBore - hw * 2) < 1e-9, d.stubBore);

  check('and what the line really is, is reported rather than assumed',
    d.lineBore === hw * 2);

  /* It has to actually solve, and the answer has to be right somewhere
     this suite can check independently: Q over the bore, at the far end,
     which the solve was never told. */
  const gpm = 560;
  const f = window.LPE.flowfield.solveField2D(
    Object.assign({ gpm: gpm, cellIn: 0.25 }, d));
  check('the composed domain solves', !f.shut && f.residual < 1e-6,
    'residual ' + f.residual.toExponential(2));

  const want = 0.3208 * gpm / A;
  const got = (() => { const v = f.at(d.extent.x0 + 1, 0);
    return v ? Math.hypot(v.vx, v.vy) / 12 : null; })();
  check('and the line velocity is Q over the bore, which it was not told',
    got !== null && Math.abs(got - want) / want < 0.12,
    'got ' + (got === null ? 'nothing' : got.toFixed(2)) +
    ', wanted ' + want.toFixed(2));

  check('the fastest water is at the throat, by continuity alone',
    f.maxSpeedIps / 12 > want * 2, (f.maxSpeedIps / 12).toFixed(1));

  refuses('a geometry that cannot say where its water is is refused',
    () => P.wetted({ geometry: {}, travelPct: 70 }), 'wettedAt');
  refuses('a run with no line either side is refused',
    () => P.wetted({ geometry: fake, travelPct: 70, stub: 0 }),
    'valve on its own');
})();

/* ---- THE RUN AS A FLOW PATH -------------------------------------------

   The straight-run panel is built on a geometry flow path, not on the 2D
   solve: one path, one field, one population of markers. A valve in that
   line had no way to be ON the path, so it was always drawn as a second
   system beside it -- which is where every flange seam came from.

   What these guard is that route() is INDISTINGUISHABLE from a pipe flow
   path to everything downstream. If geometry or flowfield has to learn
   that a path might have a valve in it, the composition failed. */
(function () {
  global.window = global.window || {};
  require('../src/geometry.js');
  require('../src/flowfield.js');
  const Gm = window.LPE.geometry, FF = window.LPE.flowfield;

  const BORE = 6.065, GPM = 560;
  const lineA = Math.PI * BORE * BORE / 4;

  /* ---- a bare line, which must come out as plain pipe ---- */
  const bare = P.route({ bore: BORE, upstream: 75, downstream: 75,
                         gpm: GPM, samples: 200 });

  check('a bare line routes to a path of its own length',
    Math.abs(bare.length - 150) < 1e-9, bare.length);
  check('geometry reads a bore at every station of it',
    (() => { for (let s = 0; s <= bare.length; s += 1.5)
      if (!(Gm.boreAtS(bare, s) > 0)) return false; return true; })());
  check('and that bore is the line bore, everywhere, to a thousandth',
    (() => { for (let s = 0; s <= bare.length; s += 1.5)
      if (Math.abs(Gm.boreAtS(bare, s) - BORE) > 0.001) return false;
      return true; })());
  check('a bare line has no features, because nothing happens on it',
    bare.features.length === 0 && bare.component === null);

  /* ---- the same line with a component in it ---- */
  const hw = BORE / 2, endA = Math.PI * hw * hw;
  const thA = endA * 0.18;
  const part = { stations: [
    { x: 0, y: 0, area: endA, halfW: hw, what: 'end connection' },
    { x: 7, y: 0, area: thA, halfW: Math.sqrt(thA / Math.PI), what: 'throat' },
    { x: 14, y: 0, area: endA, halfW: hw, what: 'end connection' } ] };

  const fp = P.route({ bore: BORE, upstream: 75, downstream: 75,
                       component: part, gpm: GPM, samples: 400 });

  check('the composed path is the line plus the component, end to end',
    Math.abs(fp.length - 164) < 1e-9, fp.length);
  check('the component span is named, so artwork can be clipped to it',
    fp.component && Math.abs(fp.component.s0 - 75) < 1e-9 &&
    Math.abs(fp.component.s1 - 89) < 1e-9,
    JSON.stringify(fp.component));

  check('the line either side is still exactly the line bore',
    Math.abs(Gm.boreAtS(fp, 20) - BORE) < 0.001 &&
    Math.abs(Gm.boreAtS(fp, 150) - BORE) < 0.001,
    Gm.boreAtS(fp, 20) + ' / ' + Gm.boreAtS(fp, 150));

  check('and it narrows inside the component, which is the whole point',
    Gm.boreAtS(fp, 82) < BORE * 0.6, Gm.boreAtS(fp, 82));

  /* The equivalent bore has to give the REAL area back, or continuity
     downstream is quietly wrong in the one place it matters most.

     Checked on a reach rather than at a chosen station, because that is
     where the claim actually lives: a reach says "this bore, over this
     span", and the conversion either round-trips its own area or it
     does not. Reading at s = 82 instead tests the SAMPLING -- the
     narrowest reach centre sits a fifth of an inch downstream of a
     throat that is a single point -- which is the second check. */
  const narrow = fp.reaches.reduce((a, b) => (b.area < a.area ? b : a));
  check('a reach bore is exactly the circle of that reach own area',
    Math.abs(Math.PI * narrow.bore * narrow.bore / 4 - narrow.area)
      < narrow.area * 1e-12,
    narrow.bore + ' vs ' + narrow.area);

  /* And cut finely enough, the narrowest reach finds the real throat.
     A point minimum under linear interpolation is approached, not hit,
     so what is guarded is that it converges -- not that 400 reaches
     happen to land on it. */
  const fine = P.route({ bore: BORE, upstream: 75, downstream: 75,
                         component: part, gpm: GPM, samples: 4000 });
  const fineMin = fine.reaches.reduce((a, b) => (b.area < a.area ? b : a));
  check('cut finely, the narrowest reach is the real throat area',
    Math.abs(fineMin.area - thA) / thA < 0.02,
    fineMin.area.toFixed(3) + ' vs ' + thA.toFixed(3));
  check('and cutting finer only ever gets closer, never further',
    Math.abs(fineMin.area - thA) <= Math.abs(narrow.area - thA) + 1e-12);

  check('the faces and the throat arrive as features, named',
    fp.features.length === 3 &&
    fp.features[0].what === 'component inlet' &&
    fp.features[1].kind === 'throat' &&
    fp.features[2].what === 'component outlet',
    fp.features.map(f => f.kind).join(' / '));

  /* No step anywhere. A marker walks this path by arc length, so an
     abrupt change of bore between adjacent reaches is exactly the
     discontinuity that used to be visible at a flange. */
  let worst = 0;
  for (let i = 1; i < fp.reaches.length; i++)
    worst = Math.max(worst,
      Math.abs(fp.reaches[i].bore - fp.reaches[i - 1].bore));
  check('no reach steps hard against the next one',
    worst < BORE * 0.1, 'biggest step ' + worst.toFixed(3) + ' in');

  /* ---- and flowfield takes it as ordinary pipe ---- */
  const f = FF.field(fp, GPM, { nu: 1.27e-5 });
  const want = 0.3208 * GPM / lineA;
  check('the line velocity is Q over the line bore, at both ends',
    Math.abs(f.mean(20) - want) / want < 0.02 &&
    Math.abs(f.mean(150) - want) / want < 0.02,
    f.mean(20).toFixed(2) + ' / ' + f.mean(150).toFixed(2) +
    ', wanted ' + want.toFixed(2));

  check('the fluid accelerates through the component by continuity alone',
    f.mean(82) / f.mean(20) > 4,
    (f.mean(82) / f.mean(20)).toFixed(1) + 'x');

  check('and it comes back DOWN to line speed after it',
    Math.abs(f.mean(150) - f.mean(20)) / f.mean(20) < 0.02);

  check('every station has a velocity -- no gap for a marker to fall into',
    f.stations.every((st) => st.v !== null && st.bore !== null));

  check('the profile across the bore survives, so the wall still drags',
    f.at(20, 0) > f.at(20, 0.95),
    f.at(20, 0).toFixed(2) + ' vs ' + f.at(20, 0.95).toFixed(2));

  /* ---- the axial projection, which is why the wall can be drawn ---- */
  const bent = { stations: [
    { x: 0, y: 0, area: endA, halfW: hw, what: 'end connection' },
    { x: 7, y: 9, area: thA, halfW: Math.sqrt(thA / Math.PI), what: 'throat' },
    { x: 14, y: 0, area: endA, halfW: hw, what: 'end connection' } ] };

  const flat = P.route({ bore: BORE, upstream: 10, downstream: 10,
                         component: bent, gpm: GPM, samples: 200 });
  check('a component route is projected onto the axis by default',
    flat.projected === true);
  check('so the run is exactly line plus face-to-face, not the longer route',
    Math.abs(flat.length - 34) < 1e-9, flat.length);
  check('and the centreline is straight, so a wall can be offset from it',
    flat.path.every((pt) => pt[1] === 0),
    JSON.stringify(flat.path));
  /* Exactly, not approximately: a component whose route rises nine
     inches and one that is already flat present the SAME area at every
     axial station, so they must compose to the same path. Comparing
     against the real throat area instead would be testing the sampling
     -- a point minimum under linear interpolation is approached, never
     landed on -- which is checked separately above. */
  const same = P.route({ bore: BORE, upstream: 10, downstream: 10,
                         component: part, gpm: GPM, samples: 200 });
  check('the projection changes the route, never the area presented',
    flat.reaches.length === same.reaches.length &&
    flat.reaches.every((r, i) =>
      Math.abs(r.area - same.reaches[i].area) < 1e-12 &&
      Math.abs(r.bore - same.reaches[i].bore) < 1e-12));

  const trueRoute = P.route({ bore: BORE, upstream: 10, downstream: 10,
                              component: bent, gpm: GPM, samples: 200,
                              straight: false });
  check('the true route is still available, and is longer than the axis',
    trueRoute.projected === false && trueRoute.length > flat.length,
    trueRoute.length + ' vs ' + flat.length);

  refuses('a path cut into too few reaches is refused',
    () => P.route({ bore: BORE, upstream: 1, downstream: 1, samples: 1 }),
    'at least two');
})();

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
