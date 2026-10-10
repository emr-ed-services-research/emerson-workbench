/* @layer trim
   @core Process Core -- the trim layer's own acceptance test.         */
/* Acceptance test for trim.js.

   THE BAR: the three characteristics are recognised from REAL catalogue
   curves, not from idealised formulas, and the installed characteristic
   reproduces the effect every valve course teaches -- that equal
   percentage trim in a resistive line behaves roughly linear.

   The curves come from lab/valves.json, read out of Fisher Catalog 12,
   so this test grades the layer against the manufacturer's own measured
   coefficients rather than against a definition.                     */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'trim.js'));
const T = global.window.LPE.trim;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};
const near = (a, b, t) => Math.abs(a - b) <= t;

console.log('\ntrim -- travel is not position\n');

const VALVES = JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'lab', 'valves.json'), 'utf8')).valves;
const pick = cage => VALVES.find(v =>
  v.cage === cage && v.body === 'ED' && v.curve && v.cv100 > 90);

/* ---- the three characteristics, from real catalogue rows ------------- */
const made = {};
for (const cage of ['quick-opening', 'linear', 'equal-percentage']) {
  const v = pick(cage);
  check('a real ' + cage + ' row yields a trim', !!v && !!v.curve,
    v ? v.body + ' NPS ' + v.nps + ' port ' + v.portIn : 'none found');
  if (!v) continue;
  made[cage] = T.fromCurve({ curve: v.curve, label: cage,
                             source: v.doc + ', ' + v.page });
}

/* THE CENTRAL CLAIM: the shape identifies the trim. The classifier is
   never told the cage name -- it only sees ten numbers. */
console.log('');
for (const cage of Object.keys(made)) {
  const c = made[cage].classify();
  check('shape alone identifies ' + cage, c.shape === cage,
    'classified as ' + c.shape + ' (rms ' + c.rms.toFixed(3) +
    '), runner-up ' + c.runnerUp + ' at ' + c.runnerUpRms.toFixed(3));
}

/* The orderings that define the characteristics, checked directly. */
const half = cage => made[cage].cvAt(50) / made[cage].cvMax;
check('at half travel, quick-opening passes most and equal-% least',
  half('quick-opening') > half('linear') &&
  half('linear') > half('equal-percentage'),
  ['quick-opening', 'linear', 'equal-percentage']
    .map(c => c + ' ' + (100 * half(c)).toFixed(0) + '%').join(', '));
check('equal-percentage passes under a quarter of its Cv at half travel',
  half('equal-percentage') < 0.25,
  (100 * half('equal-percentage')).toFixed(0) + '%');
check('and linear is within ten points of proportional at half travel',
  Math.abs(half('linear') - 0.5) < 0.10,
  (100 * half('linear')).toFixed(0) + '% against 50%');

/* ---- interpolation, and the seat region it refuses to invent --------- */
console.log('');
const eq = made['equal-percentage'];
check('Cv interpolates between printed points',
  eq.cvAt(55) > eq.cvAt(50) && eq.cvAt(55) < eq.cvAt(60),
  eq.cvAt(50).toFixed(1) + ' < ' + eq.cvAt(55).toFixed(1) + ' < ' +
  eq.cvAt(60).toFixed(1));
check('a printed point returns exactly what was printed',
  eq.cvAt(100) === eq.cvMax && eq.cvAt(10) === eq.curve[0]);
check('below the first printed point it returns null, not an extrapolation',
  eq.cvAt(3) === null,
  'the catalog says nothing under 10% travel -- that is the seat region, ' +
  'where leakage class governs rather than Cv');
check('rangeability comes from the printed points, not a nameplate',
  eq.rangeability > 10 && near(eq.rangeability, eq.cvMax / eq.curve[0], 1e-9),
  eq.rangeability.toFixed(1) + ':1');

/* ---- THE INSTALLED CHARACTERISTIC ------------------------------------
   The effect every valve course teaches: put equal-percentage trim in a
   line that takes a real share of the drop, and it straightens out. */
console.log('');
const stiff = eq.installed(eq.cvMax * 0.5);    // system Cv half the valve's
const free = eq.installed(eq.cvMax * 20);      // system barely resists

const lin = (pts) => {
  /* how far the flow curve sits from a straight line, rms */
  let e = 0, n = 0;
  for (const p of pts) {
    if (p.flowFrac === null) continue;
    e += Math.pow(p.flowFrac - p.travel / 100, 2); n++;
  }
  return Math.sqrt(e / n);
};
check('in a free line the installed curve stays close to the inherent one',
  lin(free.points) > 0.15,
  'rms from linear ' + lin(free.points).toFixed(3) +
  ' -- still recognisably equal-percentage');
check('in a resistive line equal-percentage straightens towards linear',
  lin(stiff.points) < lin(free.points) * 0.6,
  'rms from linear falls ' + lin(free.points).toFixed(3) + ' -> ' +
  lin(stiff.points).toFixed(3) + ' as the system takes more of the drop');
check('valve authority is reported, since every selection rule uses it',
  free.authority > stiff.authority && free.authority < 1 && stiff.authority > 0,
  'free line ' + free.authority.toFixed(2) + ', resistive ' +
  stiff.authority.toFixed(2));
check('and flow never exceeds the fully-open case',
  stiff.points.every(p => p.flowFrac === null || p.flowFrac <= 1 + 1e-9));

/* ---- seat leakage: looked up, never computed ------------------------- */
console.log('');
check('Class IV is 0.01% of rated capacity',
  /0\.01% of rated/.test(T.leakage('IV').max), T.leakage('IV').max);
check('Class I requires no test, and says why',
  T.leakage('I').max === null && /so agree/.test(T.leakage('I').note));
check('every class cites the Handbook and flags that FCI 70-2 is unopened',
  /Control Valve Handbook/.test(T.leakage('IV').source) &&
  /has not been opened/.test(T.leakage('IV').source));
check('Class VI at a 4 in port is 1.70 ml/min, 11 bubbles',
  T.leakage('VI', 4).mlPerMin === 1.70 &&
  T.leakage('VI', 4).bubblesPerMin === 11);

/* ---- what it refuses -------------------------------------------------- */
console.log('');
const refuses = (label, fn, expect) => {
  let m = null;
  try { fn(); } catch (e) { m = e.message; }
  if (m === null) return check(label, false, 'ACCEPTED');
  check(label, m.indexOf(expect) >= 0, m.indexOf(expect) >= 0 ? '' : m);
};
refuses('a curve that falls as it opens is refused as a transcription error',
  () => T.fromCurve({ curve: [1, 2, 1.5, 4] }), 'not a trim');
refuses('a one-point curve is not a characteristic',
  () => T.fromCurve({ curve: [10] }), 'two points is the least');
refuses('travel outside 0-100 is refused',
  () => eq.cvAt(140), 'travel is a percentage');
refuses('an installed characteristic with no system resistance is refused',
  () => eq.installed(0), 'no installed characteristic');
refuses('an unknown leakage class is refused',
  () => T.leakage('VII'), 'not a seat leakage class');
refuses('Class VI without a port diameter is refused',
  () => T.leakage('VI'), 'the port is required');
refuses('and an untabulated Class VI port is not interpolated',
  () => T.leakage('VI', 5), 'not interpolated');

/* ---- what this layer must not contain --------------------------------- */
console.log('');
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'trim.js'), 'utf8');
const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
check('it reads no netlist', !/toPiping|segments|components/.test(code));
check('it draws nothing', !/fillRect|beginPath|moveTo|lineTo/.test(code));
check('it names no colour', !/#[0-9a-fA-F]{3,6}\b/.test(src));

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
