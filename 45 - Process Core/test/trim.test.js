/* @layer trim
   @core Process Core -- the trim layer's own acceptance test.         */
/* Acceptance test for trim.js.

   THE BAR: the three characteristics are recognised from REAL catalogue
   curves, not from idealised formulas, and the installed characteristic
   reproduces the effect every valve course teaches -- that equal
   percentage trim in a resistive line behaves roughly linear.

   The curves come from extract/valves.json, read out of Fisher Catalog 12,
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
  path.join(__dirname, '..', 'extract', 'valves.json'), 'utf8')).valves;
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

/* ---- THE CLASSIFIER, GRADED AGAINST FISHER'S OWN LABELS ---------------

   Every curve in valves.json arrives already named by Catalog 12. That
   makes the whole corpus a graded test the classifier cannot argue with,
   and it is the test that caught the layer scoring equal-percentage
   against a hardcoded rangeability of 50 -- a number from nowhere, which
   reported a labelled equal-percentage EWT 10x8 as LINEAR.

   PERFECT AGREEMENT IS THE WRONG TARGET. classify() exists precisely to
   notice a curve that does not match the name on the page, and large
   reduced-port cages really do flatten toward linear. So the bar is: it
   agrees with the catalogue on the large majority, and where it does not,
   it is mostly NOT CONFIDENT -- a disagreement announced as certain is
   the failure that matters, not a disagreement.                       */
console.log('');
const CORPUS = JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'extract', 'valves.json'), 'utf8')).valves;
check('the graded corpus is the whole of Catalog 12 as read',
      CORPUS.length === 105, CORPUS.length + ' curves');

let agree = 0, loudlyWrong = 0;
for (const v of CORPUS) {
  const c = T.fromCurve({ curve: v.curve }).classify();
  if (c.shape === v.cage) agree++;
  else if (c.confident) loudlyWrong++;
}
check('it agrees with the catalogue label on most cages',
  agree >= 84, agree + ' of ' + CORPUS.length + ' (' +
  (100 * agree / CORPUS.length).toFixed(0) + '%)');
check('and it rarely contradicts the catalogue CONFIDENTLY',
  loudlyWrong <= 8, loudlyWrong + ' confident disagreements -- these are ' +
  'the ones worth reading, because the layer is staking a claim against ' +
  'the manufacturer');

/* The specific regression. This cage is labelled equal-percentage, its
   measured rangeability is 27:1, and against a reference curve built
   from 50:1 it scored as linear. */
const EWT = CORPUS.find(v => v.body === 'EWT' && String(v.nps) === '10 x 8' &&
                             v.cage === 'equal-percentage');
check('the EWT 10x8 equal-% cage is in the corpus', !!EWT);
const ewt = T.fromCurve({ curve: EWT.curve });
check('its rangeability is nothing like the 50 that used to be assumed',
  ewt.rangeability > 20 && ewt.rangeability < 35,
  ewt.rangeability.toFixed(1) + ':1');
const ec = ewt.classify();
check('and scored against its own rangeability it is no longer called linear',
  ec.shape !== 'linear' || !ec.confident,
  'shape ' + ec.shape + ', rms ' + ec.rms.toFixed(3) +
  ', confident ' + ec.confident);

/* A curve with no rangeability to measure must still classify. */
const flat = T.fromCurve({ curve: [0, 25, 50, 75, 100] });
check('a curve whose first point is zero still classifies',
  flat.rangeability === null && flat.classify().shape === 'linear',
  JSON.stringify(flat.classify()));

/* ---- WIDTH PROFILE: THE SHAPE THAT PRODUCED THE CURVE -----------------

   A plug uncovers its opening from the bottom up, so Cv is the integral
   of the opening width and dCv/dt recovers that width. The test of
   whether that is real rather than numerology is Control Valve Handbook
   Figure 3.37, which photographs the three characterised cages: this
   layer must produce the shapes in that photograph from numbers alone.  */
console.log('');
{
  const prof = v => T.fromCurve({ curve: v.curve,
    characterisedBy: /(^|\s)EZ(\s|$)/.test(v.body) ? 'plug' : 'cage'
  }).widthProfile().width;

  const mean = set => {
    const out = [];
    for (let i = 0; i < 10; i++) {
      const xs = set.map(v => prof(v)[i]).filter(x => isFinite(x));
      out.push(xs.reduce((a, b) => a + b, 0) / xs.length);
    }
    return out;
  };
  const sd = (set, i) => {
    const xs = set.map(v => prof(v)[i]);
    const m = xs.reduce((a, b) => a + b, 0) / xs.length;
    return Math.sqrt(xs.reduce((a, b) => a + (b - m) * (b - m), 0) / xs.length);
  };

  const eq = CORPUS.filter(v => v.cage === 'equal-percentage');
  const lin = CORPUS.filter(v => v.cage === 'linear');
  const qo = CORPUS.filter(v => v.cage === 'quick-opening');
  const mEq = mean(eq), mLin = mean(lin), mQo = mean(qo);

  /* EQUAL PERCENTAGE: the trumpet. Narrow at the bottom, flaring hard
     above half travel. This is the shape in the photograph. */
  check('equal-percentage opens narrow and flares -- the Figure 3.37 trumpet',
    mEq[0] < 0.25 && mEq[1] < 0.25 && mEq[7] > 0.75,
    'bands 5% and 15% at ' + mEq[0].toFixed(2) + '/' + mEq[1].toFixed(2) +
    ', peaking ' + mEq[7].toFixed(2) + ' at 75%');
  check('and it is monotonic up to its peak -- a flare, not a bulge',
    mEq[0] <= mEq[3] && mEq[3] < mEq[5] && mEq[5] < mEq[7]);

  /* Agreement across the corpus is what makes it geometry rather than
     one valve's arithmetic. */
  check('42 equal-percentage cages agree on that shape',
    eq.length >= 40 && sd(eq, 0) < 0.12 && sd(eq, 1) < 0.12,
    eq.length + ' cages, sd ' + sd(eq, 0).toFixed(3) + ' and ' +
    sd(eq, 1).toFixed(3) + ' in the first two bands -- differing sizes ' +
    'and bodies, same profile');

  /* LINEAR: near-constant width, which is the near-rectangular window
     the same photograph shows. */
  check('linear comes out near-flat, which is a rectangular window',
    Math.max.apply(null, mLin.slice(0, 7)) -
    Math.min.apply(null, mLin.slice(0, 7)) < 0.25,
    'bands 5-65% span ' + Math.min.apply(null, mLin.slice(0, 7)).toFixed(2) +
    ' to ' + Math.max.apply(null, mLin.slice(0, 7)).toFixed(2));

  /* QUICK-OPENING: widest at the bottom, tapering. */
  check('quick-opening is widest at the bottom and tapers',
    mQo[0] > 0.7 && mQo[9] < mQo[0] * 0.4,
    'starts ' + mQo[0].toFixed(2) + ', ends ' + mQo[9].toFixed(2));

  check('and the three characteristics are not the same shape',
    mEq[1] < mLin[1] * 0.5 && mQo[1] > mEq[1] * 2,
    'at 15% travel: eq ' + mEq[1].toFixed(2) + ', lin ' + mLin[1].toFixed(2) +
    ', qo ' + mQo[1].toFixed(2));

  /* EVERY PROFILE DROOPS AT THE TOP, and that is structural rather than
     numerical: the bonnet clamps the cage and the cage retains the seat
     ring, so the cage needs solid material above the windows and the
     window finishes before the plug does. */
  check('every characteristic droops in the last band -- the cage needs ' +
        'solid metal above its windows to carry the bonnet load',
    mEq[9] < mEq[8] && mLin[9] < mLin[8] && mQo[9] < mQo[8]);

  /* THE EZ IS A DIFFERENT PART. Its characteristic comes from the plug
     bevel, not a cage, and it saturates once the bevel clears the seat. */
  const ezQo = CORPUS.filter(v => /(^|\s)EZ(\s|$)/.test(v.body) &&
                                  v.cage === 'quick-opening');
  const cagedQo = CORPUS.filter(v => !/(^|\s)EZ(\s|$)/.test(v.body) &&
                                     v.cage === 'quick-opening');
  const mEzQo = mean(ezQo), mCagedQo = mean(cagedQo);
  check('a plug-characterised EZ saturates once the bevel clears the seat',
    mEzQo[9] < 0.1 && mEzQo[5] < 0.25,
    'EZ at 55% and 95%: ' + mEzQo[5].toFixed(2) + ', ' + mEzQo[9].toFixed(2));
  check('where a caged body of the same characteristic keeps opening',
    mCagedQo[5] > mEzQo[5] * 2 && mCagedQo[9] > mEzQo[9] * 2,
    'caged at 55% and 95%: ' + mCagedQo[5].toFixed(2) + ', ' +
    mCagedQo[9].toFixed(2) + ' -- the mechanism difference is visible in ' +
    'published Cv alone');
}

/* ---- and what the profile refuses to pretend --------------------------- */
console.log('');
{
  const t = T.fromCurve({ curve: [3, 7, 11, 15, 23, 34, 49, 72, 90, 100],
                          characterisedBy: 'cage' });
  const w = t.widthProfile();

  /* A band is an average over its span, so its station is the midpoint.
     Reporting it at the upper edge would shift the whole profile half a
     band toward the top. */
  check('stations are band MIDPOINTS, not the travel points themselves',
    w.at[0] === 5 && w.at[9] === 95,
    'first station ' + w.at[0] + ', last ' + w.at[9]);
  check('the profile is normalised to its own peak',
    Math.max.apply(null, w.width) === 1);
  check('and the unnormalised rate is kept, in stated units',
    w.raw.length === 10 && w.units === 'Cv per percent of travel');

  const bare = T.fromCurve({ curve: [3, 7, 11, 15, 23, 34, 49, 72, 90, 100] })
                .widthProfile();
  check('with no archetype declared it states a shape but no meaning',
    bare.archetype === null && bare.means === null &&
    /no stated geometric meaning/.test(bare.note),
    'the same numbers describe a cage window or a plug bevel, and the ' +
    'layer will not pick one for you');
}

refuses('a curve too short to differentiate is refused',
  () => T.fromCurve({ curve: [10, 50, 100] }).widthProfile(),
  'too few to differentiate');
refuses('an archetype that is neither cage nor plug is refused',
  () => T.fromCurve({ curve: [3, 7, 11, 15, 23, 34, 49, 72, 90, 100],
                      characterisedBy: 'cog' }).widthProfile(),
  'must be "cage" or "plug"');


/* ---- what this layer must not contain --------------------------------- */
console.log('');
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'trim.js'), 'utf8');
const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
check('it reads no netlist', !/toPiping|segments|components/.test(code));
check('it draws nothing', !/fillRect|beginPath|moveTo|lineTo/.test(code));
check('it names no colour', !/#[0-9a-fA-F]{3,6}\b/.test(src));

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
