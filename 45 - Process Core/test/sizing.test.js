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

/* ---- FITTING RESISTANCE ----------------------------------------------
   Both correlations recomputed here from their published coefficients,
   independently of the layer, at a condition worked by hand:
   NPS 1/2 Sch 40 bore 0.622 in, water at about 2 gpm, Re 10,127.     */
console.log('');
const RE = 10127, BORE = 0.622;
const DARBY = { method: 'darby-3k', K1: 800, Ki: 0.14, Kd: 4.0, uncertaintyPct: 30 };
const HOOP = { method: 'hooper-2k', K1: 800, Kinf: 0.40, uncertaintyPct: 30 };

const dK = 800 / RE + 0.14 * (1 + 4.0 / Math.pow(BORE, 0.3));
const hK = 800 / RE + 0.40 * (1 + 1 / BORE);

check('Darby 3-K reproduces K1/Re + Ki(1 + Kd/D^0.3)',
  within(S.resistance(DARBY, RE, BORE).K, dK, 0.001),
  S.resistance(DARBY, RE, BORE).K.toFixed(4) + ' vs ' + dK.toFixed(4));
check('Hooper 2-K reproduces K1/Re + Kinf(1 + 1/D)',
  within(S.resistance(HOOP, RE, BORE).K, hK, 0.001),
  S.resistance(HOOP, RE, BORE).K.toFixed(4) + ' vs ' + hK.toFixed(4));

/* THE FINDING THAT JUSTIFIES CARRYING BOTH. Hooper runs 30% above Darby
   here -- but the data's own uncertainty is 25-30%, so the two bands
   OVERLAP. The methods do not actually disagree beyond what the
   underlying measurements are worth, which is why this layer reports a
   band and refuses to pick a winner. */
const rd = S.resistance(DARBY, RE, BORE), rh = S.resistance(HOOP, RE, BORE);
check('Hooper reads higher than Darby at small bore', rh.K > rd.K,
  rh.K.toFixed(3) + ' vs ' + rd.K.toFixed(3));
check('but their uncertainty bands overlap, so they do not truly disagree',
  rd.hi > rh.lo,
  'Darby ' + rd.lo.toFixed(3) + '-' + rd.hi.toFixed(3) +
  ', Hooper ' + rh.lo.toFixed(3) + '-' + rh.hi.toFixed(3));

/* And the ordering flips with size, which is the whole reason the basis
   is a property of the part rather than a constant in this file. */
const big = 6.065, bigRe = 467545;
const DB = { method: 'darby-3k', K1: 800, Ki: 0.056, Kd: 3.9 };
const HB = { method: 'hooper-2k', K1: 800, Kinf: 0.20 };
check('at NPS 6 the ordering inverts -- Darby becomes the low one',
  S.resistance(DB, bigRe, big).K < S.resistance(HB, bigRe, big).K,
  'Darby ' + S.resistance(DB, bigRe, big).K.toFixed(3) +
  ' vs Hooper ' + S.resistance(HB, bigRe, big).K.toFixed(3));

check('every result carries its uncertainty band',
  rd.uncertaintyPct === 30 && rd.lo < rd.K && rd.hi > rd.K);
check('and the band defaults to 30% rather than to zero when unstated',
  S.resistance({ method: 'darby-3k', K1: 800, Ki: 0.14, Kd: 4 }, RE, BORE)
    .uncertaintyPct === 30,
  'an unstated uncertainty must not read as certainty');

/* Head loss and Reynolds, each against a hand figure. */
check('Reynolds for 2.112 ft/s in a 0.622 in bore is about 10,100',
  within(S.reynolds(2.112, 0.622, 1.081e-5), 10127, 1),
  S.reynolds(2.112, 0.622, 1.081e-5).toFixed(0));
check('one velocity head of water at 2.112 ft/s is about 0.030 psi',
  within(S.dPfromK(1, 2.112, 1.0), 0.0300, 2),
  S.dPfromK(1, 2.112, 1.0).toFixed(5) + ' psi');
check('and loss scales with the square of velocity',
  within(S.dPfromK(1, 4.224, 1) / S.dPfromK(1, 2.112, 1), 4, 0.01));

/* ---- A LINE OF FITTINGS, AND WHAT HAPPENS WHEN ONE IS UNSOURCED ------
   The whole point of the interface: a fitting with no K contributes
   zero to a sum, so the total still looks finished. It must not be
   possible to get that number by accident.                          */
console.log('');
const LINE_V = 2.112, LINE_SG = 1.0;
const threeKnown = [
  { label: 'elbow 1', basis: DARBY },
  { label: 'elbow 2', basis: DARBY },
  { label: 'tee run', basis: { method: 'darby-3k', K1: 200, Ki: 0.091, Kd: 4 } },
];
const line = S.seriesLoss(threeKnown, LINE_V, LINE_SG, RE, BORE);
check('a fully sourced line totals its fittings',
  line.complete === true && line.items.length === 3,
  'K = ' + line.K.toFixed(3) + ', dP = ' + line.dP.toFixed(5) + ' psi');
check('and the total is the sum of the parts',
  within(line.K, line.items.reduce((t, x) => t + x.K, 0), 0.0001));
check('the uncertainty band widens with the line, it does not cancel',
  line.Khi > line.K && line.Klo < line.K && line.Khi - line.Klo > 0.5,
  line.Klo.toFixed(3) + ' to ' + line.Khi.toFixed(3));

/* THE REFUSAL THAT MATTERS */
const withGap = threeKnown.concat([{ label: 'reducer, no basis' }]);
let gapMsg = '';
try { S.seriesLoss(withGap, LINE_V, LINE_SG, RE, BORE); }
catch (e) { gapMsg = e.message; }
check('one unsourced fitting refuses the WHOLE total',
  /no sourced resistance/.test(gapMsg) && /reducer, no basis/.test(gapMsg),
  gapMsg.slice(0, 90));
check('and the refusal explains why a zero would be worse than nothing',
  /contributes zero/.test(gapMsg) && /look finished/.test(gapMsg));

/* A partial is available, but only on request and only as a bound. */
const partial = S.seriesLoss(withGap, LINE_V, LINE_SG, RE, BORE,
                             { allowPartial: true });
check('a partial can be asked for explicitly', partial.complete === false);
check('and it is labelled a LOWER BOUND, not a result',
  /LOWER BOUND/.test(partial.bound) && /reducer, no basis/.test(partial.bound));
check('the partial equals the sourced part exactly, nothing imputed',
  within(partial.K, line.K, 0.0001));

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
refuses('a fitting with no basis gets no invented resistance',
  () => S.resistance(null, RE, BORE), 'no basis given');
refuses('an unknown correlation is refused by name',
  () => S.resistance({ method: 'crane-410', n: 30 }, RE, BORE),
  'unknown method');
refuses('a basis missing a coefficient is refused, and names which',
  () => S.resistance({ method: 'darby-3k', K1: 800 }, RE, BORE), 'Ki, Kd');
refuses('Reynolds number is required, not optional',
  () => S.resistance(DARBY, 0, BORE), 'Reynolds number must be positive');
refuses('and so is the bore, in inches',
  () => S.resistance(DARBY, RE, 0), 'positive number of');
refuses('an empty line is refused, because it is not the same as no loss',
  () => S.seriesLoss([], 1, 1, RE, BORE), 'An empty line has no loss');

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
