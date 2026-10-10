/* @layer registration
   @core Process Core -- the flow lab. Tooling, not a process layer.
   Grades the core against published answers. Slower than test.js and
   every expected value carries a document reference.
   Run: node lab/lab.js                                                */
/* ---------------- THE FLOW LAB ---------------------------------------

   `test.js` asks whether the core does what it says. This asks whether
   what it says is TRUE, against numbers somebody else published.

   A loop only counts as a benchmark if its answer comes from outside
   this repository. There are three legitimate kinds and this file is
   explicit about which each case is:

     PRINTED    a worked example with its result in the book
     SPECIFIED  real service conditions plus the valve Emerson specifies
     MEASURED   the bench, when it can export runs

   WHAT IS GRADEABLE TODAY, and what each case that is not is waiting
   on, is the lab's own output. A harness that quietly skips what it
   cannot do is a harness that reports green on an empty suite.      */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'sizing.js'));
const S = global.window.LPE.sizing;

let pass = 0, fail = 0;
const ok = (label, good, detail) => {
  console.log((good ? '  ok  ' : '  FAIL') + '  ' + label);
  if (good) pass++; else { fail++; if (detail) console.log('        ' + detail); }
};
const within = (g, w, pct) => Math.abs(g - w) / w <= pct / 100;

/* ======================================================= PRINTED ===== */
console.log('\nFLOW LAB\n');
console.log('PRINTED -- worked examples with their answers in the book\n');

/* Control Valve Handbook 6th ed., ch5 pp. 114-115. */
const CVH = {
  cite: 'Control Valve Handbook 6th ed., ch5 pp. 114-115',
  svc: { q: 800, P1: 314.7, P2: 289.7, sg: 0.50, Pv: 124.3, Pc: 616.3 },
  line: 8,
  nps3: { Cv: 121, FL: 0.89, d: 3 },
  nps4: { Cv: 203, FL: 0.91, d: 4 },
  answers: { nps3: 125.7, nps4: 121.7 },
};
{
  const a = S.sizeLiquid(CVH.svc, CVH.nps3, CVH.line);
  const b = S.sizeLiquid(CVH.svc, CVH.nps4, CVH.line);
  ok('liquid propane, NPS 3 trial -> printed ' + CVH.answers.nps3,
    within(a.Cv, CVH.answers.nps3, 1), 'got ' + a.Cv.toFixed(2) +
    '  [' + CVH.cite + ']');
  ok('liquid propane, NPS 4 recalc -> printed ' + CVH.answers.nps4,
    within(b.Cv, CVH.answers.nps4, 1), 'got ' + b.Cv.toFixed(2) +
    '  [' + CVH.cite + ']');
  ok('and the book\'s conclusion -- NPS 4 is the valve',
    a.fits === false && b.fits === true);
}

/* ===================================================== SPECIFIED ===== */
console.log('\nSPECIFIED -- real service with the valve Emerson names\n');

const corpus = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'corpus.json'), 'utf8'));
const liquid = corpus.cases.filter(c =>
  c.q && /gpm/i.test(c.q.unit) && c.p1 && c.p2);

const mid = r => (r.lo + r.hi) / 2;

/* Cv*sqrt(SG) = q / sqrt(dP) needs NO assumption about the fluid, so it
   is a published fact and can be asserted. Cv itself cannot: the
   sourcebooks name the fluid but never its specific gravity. */
let usable = 0, badDp = 0;
const need = { sg: 0, valveCv: 0 };
const demands = [];
for (const c of liquid) {
  const dp = mid(c.p1) - mid(c.p2);
  if (!(dp > 0)) { badDp++; continue; }
  usable++;
  demands.push(mid(c.q) / Math.sqrt(dp));
  need.sg++;            // every one of them needs a sourced SG
  need.valveCv++;       // and the Cv of the valve line the book names
}
demands.sort((a, b) => a - b);
const pct = p => demands[Math.floor(p * (demands.length - 1))];

ok(liquid.length + ' refinery liquid services carry P1, P2 and Q',
  liquid.length >= 40, liquid.length + ' found');
ok('every one of them yields a required Cv*sqrt(SG) without assuming a fluid',
  usable === liquid.length && badDp === 0,
  badDp + ' had a non-positive dP at the midpoint of the stated ranges');
ok('and the demand they state is industrial, not bench-scale',
  pct(0.5) > 50, 'median Cv*sqrt(SG) = ' + pct(0.5).toFixed(0) +
  ', 10th-90th ' + pct(0.1).toFixed(0) + ' to ' + pct(0.9).toFixed(0) +
  ', full range ' + demands[0].toFixed(1) + ' to ' +
  demands[demands.length - 1].toFixed(0));

/* ================================================= NOT GRADEABLE ===== */
console.log('\nNOT GRADEABLE YET -- and exactly why, per case class\n');

const blockers = [
  ['specific gravity for ' + need.sg + ' fluids',
   'The sourcebooks name the fluid (Heavy Gas Oil, Rich Amine, Naphtha ' +
   'and gas mixture) and never its SG. Without it Cv*sqrt(SG) cannot ' +
   'become Cv. Needs a sourced fluid-property table, NOT an estimate -- ' +
   'a guessed SG would make every one of these cases look graded.'],
  ['Cv and FL for the valve lines the books name',
   'Vee-Ball, Control-Disk and easy-e ET/EZ. Fisher Catalog 12 flow ' +
   'coefficients are held for ED/EAD/EDR (19 pages, Cv at every 10% of ' +
   'travel plus FL, XT and Fd) and that family is a start, but the ' +
   'rotary lines the refinery cases mostly specify are not in it.'],
  ['Pv and Pc per fluid, for the choke check',
   'Without them sizeLiquid() reports the check as NOT MADE rather than ' +
   'implying the valve is safe. At refinery pressure drops choking is ' +
   'routine, so this is not a refinement.'],
];
blockers.forEach(([what, why]) => {
  console.log('  --  ' + what);
  why.match(/.{1,66}(\s|$)/g).forEach(l => console.log('      ' + l.trim()));
  console.log('');
});

/* ======================================================== MEASURED === */
console.log('MEASURED -- the bench\n');
console.log('  --  none yet. LoopBench has a DVC6200 on real air with real');
console.log('      position feedback; it needs a run-export before its');
console.log('      numbers can be a benchmark. That is Phase 3.\n');

console.log('-'.repeat(68));
console.log('  ' + pass + ' graded, ' + fail + ' failed, ' +
            liquid.length + ' cases staged behind ' + blockers.length +
            ' named blockers');
console.log('-'.repeat(68) + '\n');
process.exit(fail ? 1 : 0);
