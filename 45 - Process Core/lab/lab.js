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

/* ============================================ CAPACITY, GRADED ======= */
console.log('\nCAPACITY -- does Emerson\'s own valve cover its own service?\n');

const valves = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'valves.json'), 'utf8'));

/* "1-1/2" -> 1.5, "2" -> 2 */
function nps(t) {
  const m = String(t).trim().match(/^(\d+)(?:\s*-\s*(\d+)\/(\d+))?$/);
  if (!m) return null;
  return +m[1] + (m[2] ? +m[2] / +m[3] : 0);
}
/* Bodies whose coefficient table is actually held and verified.
   ETR and ET-C are here on Catalog 12's own stated equivalence --
   page ET-3: ETR has coefficients identical to NPS 1-4 CL125-600 ED,
   and ET-C identical to NPS 3-8 ED full port. That is the catalog
   speaking, not an inference of mine. Standard ET is NOT here: the
   catalog neither tabulates it nor claims it equals ED. */
const HELD_BODIES = ['ED', 'EAD', 'EDR', 'EZ', 'ETR',
                     'EW', 'EWD', 'EWT', 'EWS'];

/* EVERY held cage, not just equal-percentage. The sourcebook names a
   body and a size range and usually no cage at all, so restricting to
   one characteristic understates what the engineer may fit -- a
   quick-opening cage passes more at full travel than an equal-percentage
   one in the same body. Constraining harder than the source does is how
   this check manufactured its first three false findings. */
const table = valves.valves
  .filter(v => HELD_BODIES.indexOf(v.body) >= 0)
  .map(v => ({ nps: nps(v.nps.replace(/\s*&.*$/, '')), cv: v.cv100, FL: v.FL }))
  .filter(v => v.nps !== null);
const tableMax = Math.max.apply(null, table.map(v => v.nps));

/* THE TRICK THAT AVOIDS GUESSING A FLUID. Required Cv = (Q/sqrt(dP)) *
   sqrt(SG), and only the first factor is published. So rather than
   inventing an SG, invert the question: what is the HEAVIEST fluid the
   specified valve could still pass this service with? At or above 1.0
   the selection covers any hydrocarbon there is, and the case is
   consistent without anyone having guessed anything.

   THE BODY MUST MATCH, and the first version of this did not check.
   ED, ET and EZ are different bodies with different ports and different
   capacities at the same nominal size. Grading an ET service against
   the ED table flagged two cases as inconsistent -- a furnace fuel
   valve and an amine make-up valve -- and both were artifacts of using
   the wrong catalog, not findings about Emerson's selections. A wrong
   answer about somebody else's engineering is the worst kind this lab
   can produce, so a case is graded only when the body it names is one
   whose table is actually held. */
let graded = 0, outOfTable = 0, wrongBody = 0, tooWide = 0;
const marginal = [];
for (const c of liquid) {
  if (!c.selection) continue;
  const sel = c.selection.join(' ');
  if (!/easy-?e|\bE[DTZ]\b/i.test(sel)) continue;
  const m = sel.match(/NPS\s*([\d\-\/]+)\s*(?:to|through|-)\s*NPS\s*([\d\-\/]+)/i);
  if (!m) continue;

  /* THE TOKEN LIST MUST COVER EVERY LINE THE BOOKS NAME, or the
     subset rule silently passes. The Amine Make-up valve reads "NPS 2
     to 6 HPT or NPS 1 to NPS 3 easy-e EZ"; with HPT missing from this
     list the case looked like pure EZ, got graded against EZ alone, and
     came back as a failure of Emerson's selection. It was a failure of
     my regex. A line not listed here is a line this lab must not
     pretend to have an opinion about. */
  const bodies = sel.match(
    /\b(ED|ET|EZ|ES|EW|EWD|EWT|EWS|EAD|EAT|ETR|GX|HPT|HPS|HPAS|CV500|V150|V250|V500|A11|A31|A41|8532|8560|8580|8590|9500|24000|NotchFlo|Vee-?Ball|Control-?Disk|Baumann|Micro-?Flat|easy-?Drive)\b/gi) || [];
  /* EVERY named body must be held, not merely one of them. Where the
     book offers "EZ, ET, ED or GX" the engineer picks whichever fits,
     so bounding the service by ED's capacity proves nothing -- showing
     a selection inadequate means showing that NONE of the offered
     bodies can do it. The second version of this check still graded
     that case on ED alone and flagged a furnace fuel valve: the same
     error as the first version, one step smaller. */
  if (!bodies.length || !bodies.every(b => HELD_BODIES.indexOf(b) >= 0)) { wrongBody++; continue; }

  const hi = nps(m[2]);
  if (hi === null) continue;
  if (hi > tableMax) { outOfTable++; continue; }

  /* A MIDPOINT IS NOT ALWAYS AN OPERATING POINT. The amine make-up
     valve is published as Q 3-2115 gpm at P1 360-2320 psig: a turndown
     of 700 to 1 across a sixfold pressure span. Its midpoint, 1059 gpm
     at 40 psi, is the average of two unrelated extremes and describes
     no condition the plant ever sees. Grading on it produced a
     confident wrong answer about a real valve selection.

     So a case whose flow range spans more than 20 to 1 is set aside
     rather than averaged. The book is describing an envelope there, not
     a duty point, and sizing an envelope needs the engineer to pick the
     governing case -- which is a judgement, not an arithmetic mean. */
  if (mid(c.q) > 0 && c.q.lo > 0 && c.q.hi / c.q.lo > 20) {
    tooWide++;
    continue;
  }
  const cands = table.filter(v => v.nps <= hi);
  if (!cands.length) continue;
  const cvMax = Math.max.apply(null, cands.map(v => v.cv));
  const dp = mid(c.p1) - mid(c.p2);
  if (!(dp > 0)) continue;
  const demand = mid(c.q) / Math.sqrt(dp);        // = Cv * sqrt(SG)
  const sgMax = Math.pow(cvMax / demand, 2);
  graded++;
  if (sgMax < 1.0)
    marginal.push({ c: c, sgMax: sgMax, cvMax: cvMax, demand: demand, hi: hi });
}

ok('every easy-e case is graded against its OWN body, or not at all',
  true, graded + ' graded against held tables (' + HELD_BODIES.join(', ') +
  '); ' + wrongBody + ' name a line whose table is not held; ' + outOfTable +
  ' reach above NPS ' + tableMax + '; ' + tooWide +
  ' state a flow range too wide for a midpoint to mean anything');
if (graded)
  ok('and the specified valve covers its service for any liquid to SG 1.0',
    marginal.length === 0,
    marginal.map(x => x.c.valve + ': needs Cv ' + x.demand.toFixed(0) +
      '*sqrt(SG), NPS ' + x.hi + ' passes ' + x.cvMax +
      ', so only SG <= ' + x.sgMax.toFixed(2)).join('; '));

/* ================================================= NOT GRADEABLE ===== */
console.log('\nNOT GRADEABLE YET -- and exactly why, per case class\n');

const blockers = [
  ['specific gravity for ' + need.sg + ' fluids',
   'The sourcebooks name the fluid (Heavy Gas Oil, Rich Amine, Naphtha ' +
   'and gas mixture) and never its SG. Without it Cv*sqrt(SG) cannot ' +
   'become Cv. Needs a sourced fluid-property table, NOT an estimate -- ' +
   'a guessed SG would make every one of these cases look graded.'],
  ['Fisher Catalog 12 sections for ET, EZ, EW and the rotary lines',
   'ED/EAD/EDR is read -- 30 rows with size, port, travel, Cv and FL, ' +
   'checked for one capacity per valve and for monotonic port. But the ' +
   'refinery corpus almost never specifies ED: it specifies ET, EZ and ' +
   'EW among the globes and Vee-Ball, Control-Disk and V500 among the ' +
   'rotaries, and those catalog sections are not in the vault. The ET ' +
   'pages we do hold are Cavitrol III, Dirty Service Trim and WhisperFlo ' +
   '-- severe-service trims, not the standard cage.'],
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
