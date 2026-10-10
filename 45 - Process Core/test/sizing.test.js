/* @layer sizing
   @core Process Core -- the sizing layer's own acceptance test. Declares
   the layer it guards.                                                 */
/* Acceptance test for sizing.js.

   THE BAR: reproduce a PUBLISHED worked example, printed answer and all.

   Control Valve Handbook, 6th edition, chapter 5, pp. 114-115 works a
   liquid propane service all the way through -- piping geometry factor,
   liquid pressure recovery adjusted for the attached reducers, the
   choked-pressure-drop check, and the required Cv -- and prints its
   answers. That is the whole point of grading against it: the numbers
   come from outside this repository.

   This is the first benchmark in the flow lab that is not the core
   agreeing with itself, and it exercises exactly the machinery the
   dynamics layer does not have.                                       */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'sizing.js'));
const S = global.window.LPE.sizing;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};
const within = (got, want, pct) => Math.abs(got - want) / want <= pct / 100;

console.log('\nsizing -- ISA-75.01.01 liquid, against a printed answer\n');

/* ---- the Handbook's example, transcribed ---------------------------
   Control Valve Handbook 6th ed., ch5 pp. 114-115.
     line NPS 8, Class 300 globe, equal-percentage cage
     standard concentric reducers
     liquid propane, q = 800 gpm
     P1 = 300 psig = 314.7 psia, P2 = 275 psig = 289.7 psia
     rho1/rho0 = 0.50, Pv = 124.3 psia, Pc = 616.3 psia              */
const SVC = { q: 800, P1: 314.7, P2: 289.7, sg: 0.50, Pv: 124.3, Pc: 616.3 };
const LINE = 8;
const NPS3 = { Cv: 121, FL: 0.89, d: 3 };   // Fisher ES Cl300, eq-% cage
const NPS4 = { Cv: 203, FL: 0.91, d: 4 };

/* The Handbook rounds at every intermediate step and we do not, so the
   bar is 1 % rather than exact. Anything inside that is transcription
   agreement; anything outside is a different calculation. */
const TOL = 1.0;

const a = S.sizeLiquid(SVC, NPS3, LINE);
check('the NPS 3 trial gives the printed required Cv of 125.7',
  within(a.Cv, 125.7, TOL), 'got ' + a.Cv.toFixed(2));
check('and the Handbook is right that it exceeds the NPS 3 capacity',
  a.Cv > NPS3.Cv && a.fits === false,
  a.Cv.toFixed(2) + ' required against Cv 121 available');

const b = S.sizeLiquid(SVC, NPS4, LINE);
check('the NPS 4 recalculation gives the printed 121.7',
  within(b.Cv, 121.7, TOL), 'got ' + b.Cv.toFixed(2));
check('and NPS 4 is large enough, as the Handbook concludes',
  b.fits === true, b.Cv.toFixed(2) + ' required against Cv 203 available');

/* The example states this explicitly, so it is checked explicitly. */
check('the service is NOT choked, as the Handbook states',
  a.choked === false && b.choked === false,
  'dP ' + a.dP + ' psi against choked ' + a.dPchoked.toFixed(1) + ' psi');

/* ---- the pieces, each against its own closed form ------------------- */
const k = S.reducerK(3, 8);
check('sumK for NPS 3 in an NPS 8 line is 1.5(1 - d2/D2)^2',
  Math.abs(k.sumK - 1.5 * Math.pow(1 - 9 / 64, 2)) < 1e-12,
  k.sumK.toFixed(5));
check('and the Bernoulli terms cancel out of sumK',
  Math.abs(k.sumK - (k.K1 + k.K2)) < 1e-12);
check('Ff at Pv/Pc = 124.3/616.3 is 0.834',
  within(S.Ff(124.3, 616.3), 0.8343, 0.1), S.Ff(124.3, 616.3).toFixed(4));

/* Fp must fall BELOW one when fittings are attached -- reducers can only
   cost capacity, never add it. The sign of this is easy to get backwards. */
check('attached reducers reduce the geometry factor below 1',
  a.Fp < 1 && a.Fp > 0.8, 'Fp = ' + a.Fp.toFixed(4));
check('and cost about 10% of capacity at NPS 3 in an NPS 8 line',
  within(1 - a.Fp, 0.0965, 15), ((1 - a.Fp) * 100).toFixed(1) + '%');
check('a valve the same size as its line has no fittings and Fp = 1',
  S.sizeLiquid(SVC, { Cv: 203, FL: 0.91, d: 8 }, 8).Fp === 1);

/* ---- the iteration the standard actually prescribes ------------------ */
const it = S.requiredCv(SVC, [NPS3, NPS4], LINE);
check('the prescribed iteration picks NPS 4', !!it.picked &&
  it.picked.assumed.d === 4, it.picked && it.picked.assumed.d);
check('and shows its working -- both trials returned',
  it.trials.length === 2, it.trials.length + ' trials');
check('running out of candidates is reported, not silently rounded up',
  S.requiredCv(SVC, [NPS3], LINE).exhausted === true);

/* ---- choked flow, which the dynamics layer cannot represent at all --- */
const hard = S.sizeLiquid({ q: 800, P1: 314.7, P2: 100, sg: 0.5,
                            Pv: 124.3, Pc: 616.3 }, NPS4, LINE);
check('a big enough pressure drop chokes the valve', hard.choked === true,
  'dP ' + hard.dP.toFixed(0) + ' against choked ' + hard.dPchoked.toFixed(0));
check('and sizing then uses the choked drop, not the actual one',
  hard.dPsizing === hard.dPchoked && hard.dPsizing < hard.dP,
  'sizing on ' + hard.dPsizing.toFixed(1) + ' psi');
/* LIKE FOR LIKE. The first version of this check compared the choked
   case against the Handbook's 25 psi service and expected a larger Cv --
   which is wrong, and wrong in an instructive way: the choked case has
   215 psi of drop available against 25, so naturally it needs less
   valve. The real claim is about capping: for THIS service, sizing on
   the choked drop demands more Cv than sizing on the full drop would,
   because past choking the extra drop buys no extra flow. */
const uncapped = hard.q_uncapped = 800 /
  (1.0 * hard.Fp * Math.sqrt(hard.dP / 0.5));
check('capping at the choked drop demands MORE Cv than the full drop would',
  hard.Cv > uncapped,
  'capped ' + hard.Cv.toFixed(1) + ' against ' + uncapped.toFixed(1) +
  ' if the full ' + hard.dP.toFixed(0) + ' psi were usable -- it is not, ' +
  'because the valve chokes at ' + hard.dPchoked.toFixed(0) + ' psi');

/* ---- honest refusals -------------------------------------------------- */
console.log('');
const refuses = (label, fn, expect) => {
  let m = null;
  try { fn(); } catch (e) { m = e.message; }
  if (m === null) return check(label, false, 'ACCEPTED');
  check(label, m.indexOf(expect) >= 0, m.indexOf(expect) >= 0 ? '' : m);
};
refuses('a missing service condition is refused, and named',
  () => S.sizeLiquid({ q: 800, P1: 314.7, P2: 289.7 }, NPS4, LINE), 'sg');
refuses('P2 above P1 is refused',
  () => S.sizeLiquid({ q: 1, P1: 10, P2: 20, sg: 1 }, NPS4, LINE),
  'does not run uphill');
refuses('a valve bigger than its line is refused',
  () => S.reducerK(10, 8), 'exceeds line bore');
refuses('no candidate list is refused rather than defaulted',
  () => S.requiredCv(SVC, [], LINE), 'no default valve line');

/* Without Pv and Pc the choke check CANNOT be made, and the result has to
   say so instead of implying the valve is safe. */
const noPv = S.sizeLiquid({ q: 800, P1: 314.7, P2: 289.7, sg: 0.5 },
                          NPS4, LINE);
check('omitting Pv and Pc leaves the choke check undone, and says so',
  noPv.choked === null && /NOT MADE/.test(noPv.chokeCheck), noPv.chokeCheck);

/* ---- what this layer must not contain --------------------------------- */
console.log('');
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'sizing.js'), 'utf8');
const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
check('it reads no netlist', !/toPiping|segments|components/.test(code));
check('it draws nothing', !/fillRect|beginPath|moveTo|lineTo/.test(code));
check('it names no scale', !/pxPerInch|pixel/.test(code));

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
