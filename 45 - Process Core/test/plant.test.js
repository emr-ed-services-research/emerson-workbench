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

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
