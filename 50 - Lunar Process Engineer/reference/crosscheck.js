/* ============================================================
   CROSS-CHECK

   Every number the new bench segments assert, checked three ways:
   against the arithmetic, against the repo's own source of truth
   (sizing.js, fluids.js), and against what the lesson text claims.

   Run: node reference/crosscheck.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const HERE = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(HERE, f), 'utf8');
const FL = require(path.join(HERE, 'fluids.js'));

let bad = 0;
const near = (a, b, tol) => Math.abs(a - b) <= tol;
function ck(label, ok, detail) {
  if (!ok) bad++;
  console.log('  ' + (ok ? 'ok  ' : 'FAIL') + '  ' + label.padEnd(54) + (detail || ''));
}

/* ---------- 1. ASME B36.10M, NPS 3/8 ---------- */
console.log('\n1. PIPE DATA — arithmetic');
const OD = 0.675;
[['SCH 40', 0.091, 0.493, 0.00133], ['SCH 80', 0.126, 0.423, 0.00098]]
  .forEach(([name, wall, bore, area]) => {
    const boreCalc = OD - 2 * wall;
    const areaCalc = Math.PI * Math.pow(bore / 2, 2) / 144;
    ck(name + ': bore = OD - 2*wall', near(boreCalc, bore, 0.0005),
      boreCalc.toFixed(4) + ' vs stated ' + bore);
    ck(name + ': flow area from bore', near(areaCalc, area, 0.00001),
      areaCalc.toFixed(5) + ' ft2 vs stated ' + area);
  });

/* ---------- 2. the bench agrees with sizing.js ---------- */
console.log('\n2. CROSS-CHECK — trainer vs sizing.js');
const sz = read('sizing.js'), tr = read('trainer.html');
const szRow = sz.match(/'3\/8':\s*\{\s*od:([\d.]+),\s*wall:([\d.]+),\s*bore:([\d.]+),\s*area:([\d.]+)/);
const trS40 = tr.match(/sch40:\s*\{[^}]*wall:([\d.]+),\s*bore:([\d.]+),\s*area:([\d.]+)/);
ck('OD matches sizing.js', szRow && +szRow[1] === OD, szRow ? szRow[1] : 'not found');
ck('SCH 40 wall matches sizing.js', szRow && trS40 && szRow[2] === trS40[1],
  szRow && trS40 ? szRow[2] + ' / ' + trS40[1] : '?');
ck('SCH 40 bore matches sizing.js', szRow && trS40 && szRow[3] === trS40[2],
  szRow && trS40 ? szRow[3] + ' / ' + trS40[2] : '?');
ck('SCH 40 area matches sizing.js', szRow && trS40 && szRow[4] === trS40[3],
  szRow && trS40 ? szRow[4] + ' / ' + trS40[3] : '?');

/* Schedule 80 was invented on the bench and had no source row to be
   checked against - the arithmetic was self-consistent and the input
   unverified. It lives in sizing.js now, so it can be. */
const sz80 = sz.match(/'3\/8':\s*\{\s*od:([\d.]+),\s*wall:0\.126,\s*bore:([\d.]+),\s*area:([\d.]+)/);
const trS80 = tr.match(/sch80:\s*\{[^}]*wall:([\d.]+),\s*bore:([\d.]+),\s*area:([\d.]+)/);
ck('SCH 80 exists in sizing.js at all', !!sz80, sz80 ? 'PIPE80 row' : 'MISSING');
ck('SCH 80 wall matches sizing.js', !!(sz80 && trS80) && trS80[1] === '0.126', trS80 ? trS80[1] : '?');
ck('SCH 80 bore matches sizing.js', !!(sz80 && trS80) && sz80[2] === trS80[2],
  sz80 && trS80 ? sz80[2] + ' / ' + trS80[2] : '?');
ck('SCH 80 area matches sizing.js', !!(sz80 && trS80) && sz80[3] === trS80[3],
  sz80 && trS80 ? sz80[3] + ' / ' + trS80[3] : '?');

/* the reducer Cv appears in four files and must be one number */
const grab = (f, re) => { const m = read(f).match(re); return m ? m[1] : null; };
const cvTrainer = grab('trainer.html', /reducer:\s*\{[^}]*cv:([\d.]+)/);
const cvL1 = grab('level1.html', /CV_REDUCER=([\d.]+)/);
const cvL2 = grab('level2.html', /CV_REDUCER=([\d.]+)/);
const cvSize = (() => {                       // sizing.js prints it; recompute instead
  const m = read('sizing.js').match(/cvRed\s*=\s*([^\n;]+)/);
  return m ? m[1].trim() : null;
})();
ck('reducer Cv is one number across the game',
  cvTrainer && cvTrainer === cvL1 && cvL1 === cvL2,
  'trainer ' + cvTrainer + ' / level1 ' + cvL1 + ' / level2 ' + cvL2);

/* ---------- 3. the bore lesson's own claim ---------- */
console.log('\n3. BORE LESSON — "same gpm, faster fluid"');
const DP = 20, CVV = 0.25;
const q = CVV * Math.sqrt(DP);
const vel = (gpm, a) => gpm / 448.831 / a;
const v40 = vel(q, 0.00133), v80 = vel(q, 0.00098);
ck('flow is unchanged by the schedule', true, q.toFixed(3) + ' gpm either way');
ck('velocity ratio = (bore40/bore80)^2',
  near(v80 / v40, Math.pow(0.493 / 0.423, 2), 0.01),
  (v80 / v40).toFixed(3) + ' vs ' + Math.pow(0.493 / 0.423, 2).toFixed(3));
ck('lesson says "a quarter less area"',
  near(1 - 0.00098 / 0.00133, 0.263, 0.02),
  (100 * (1 - 0.00098 / 0.00133)).toFixed(1) + '% less');

/* is "same gpm" honest? only if pipe friction is negligible beside the valve */
const D = 0.493 / 12, L = 1.0;                       // ~1 ft of visible section
const nu = FL.FLUIDS.water.nuAt(20) * 10.7639;       // m2/s -> ft2/s
const Re = v80 * D / nu;
const f = Re > 4000 ? 0.316 / Math.pow(Re, 0.25) : 64 / Re;   // Blasius / laminar
const dpFric = f * (L / D) * (62.4 * v80 * v80 / (2 * 32.174)) / 144;  // psi
ck('pipe friction is negligible beside the valve', dpFric < 0.2,
  dpFric.toFixed(3) + ' psi of ' + DP + '  (Re ' + Math.round(Re) + ')');

/* ---------- 4. the restriction lesson's own claims ---------- */
console.log('\n4. RESTRICTION LESSON — P1, dP, flow');
const CVR = +cvTrainer;
const ser = (a, b) => 1 / Math.sqrt(1 / (a * a) + 1 / (b * b));
const qR = ser(CVV, CVR) * Math.sqrt(DP);
const dpR = Math.pow(qR / CVR, 2), dpV = Math.pow(qR / CVV, 2);
ck('the two drops sum to the pump pressure', near(dpR + dpV, DP, 0.01),
  dpV.toFixed(2) + ' + ' + dpR.toFixed(2) + ' = ' + (dpR + dpV).toFixed(2));
ck('lesson says P1 is "about 8 psi"', near(dpR, 8, 0.5), 'P1 = ' + dpR.toFixed(2));
ck('lesson says "a quarter less flow"', near(1 - qR / q, 0.25, 0.03),
  (100 * (1 - qR / q)).toFixed(1) + '% less  (' + q.toFixed(3) + ' -> ' + qR.toFixed(3) + ')');

/* ---------- 4b. the manifold lesson's own claims ---------- */
console.log('\n4b. MANIFOLD LESSON — one supply, two demands');
/* The divider is level one's, and the bench must not have its own copy of
   it: P_man = P_sup * Cvm^2 / (Cvm^2 + Cv_sum^2) */
const l1 = read('level1.html');
const cvSupT = grab('trainer.html', /CV_SUP\s*=\s*([\d.]+)/);
const cvBrT  = grab('trainer.html', /CV_BR\s*=\s*([\d.]+)/);
const cvSupL = grab('level1.html', /CV_MAIN_MAX=([\d.]+)/);
const cvBrL  = grab('level1.html', /CV_BR_MAX=([\d.]+)/);
ck('supply Cv matches level 1', cvSupT === cvSupL, cvSupT + ' / ' + cvSupL);
ck('branch Cv matches level 1', cvBrT === cvBrL, cvBrT + ' / ' + cvBrL);
ck('the bench uses level 1 divider, not its own',
  /Cvm\^2 \/ \(Cvm\^2 \+ Cv_sum\^2\)/.test(read('trainer.html')) &&
  /pTarget=P_SUP\*\(cvMain\*cvMain\)\/\(cvMain\*cvMain\+cvSum\*cvSum\)/.test(l1),
  'same relation both sides');

const CVS = +cvSupT, CVB2 = +cvBrT;
const pMan = cs => cs <= 0 ? DP : DP * (CVS * CVS) / (CVS * CVS + cs * cs);
const qb = (cv, p) => cv * Math.sqrt(p);
const pOne = pMan(CVB2), pBoth = pMan(2 * CVB2);
const q1One = qb(CVB2, pOne), q1Both = qb(CVB2, pBoth);
/* These read the prose as well as the model. The first version of them
   was named "lesson says ..." and only ever checked the model, so editing
   the sentence to say something false changed nothing. A check whose name
   claims more than it tests is worse than no check. */
/* Join the concatenation first. A lesson is written as several quoted
   fragments glued with '+, so a sentence that reads continuously on screen
   is split by quotes and newlines in the source - and a regex run against
   the raw text silently fails to find phrases that are plainly there. */
const flatten = s => s.replace(/'\s*\+\s*'/g, '').replace(/\s+/g, ' ');
const mseg = flatten(tr.slice(tr.indexOf("'manifold':{"), tr.indexOf("'velocity-profile':{")));
const says = re => re.test(mseg);

ck('text and model agree: tee holds about 15 psi on one branch',
  says(/about 15 psi/) && near(pOne, 15, 0.5),
  'text ' + (says(/about 15 psi/) ? 'says 15' : 'DOES NOT say 15') +
  ', model ' + pOne.toFixed(2));
ck('text and model agree: branch 1 takes just under 2 gpm',
  says(/just under\s+2 gpm/) && q1One > 1.8 && q1One < 2.0,
  'text ' + (says(/just under\s+2 gpm/) ? 'ok' : 'MISMATCH') +
  ', model ' + q1One.toFixed(3));
ck('text and model agree: it drops about a quarter',
  says(/by about a quarter/) && near(1 - q1Both / q1One, 0.25, 0.03),
  'text ' + (says(/by about a quarter/) ? 'ok' : 'MISMATCH') +
  ', model ' + (100 * (1 - q1Both / q1One)).toFixed(1) + '%');
ck('text and model agree: tee falls 15 psi to under 9',
  says(/15\s*\n?\s*psi to under 9/) && near(pOne, 15, 0.5) && pBoth < 9,
  'text ' + (says(/15\s*\n?\s*psi to under 9/) ? 'ok' : 'MISMATCH') +
  ', model ' + pOne.toFixed(1) + ' -> ' + pBoth.toFixed(2));
ck('total still rises even though each branch falls',
  2 * q1Both > q1One, q1One.toFixed(2) + ' -> ' + (2 * q1Both).toFixed(2) + ' gpm total');

/* ---------- 4c. level 3, the dosing skid ---------- */
console.log('\n4c. LEVEL 3 — the mixing run');
const l3 = read('level3.html');
const l3flat = l3.replace(/'\s*\+\s*'/g, '').replace(/\s+/g, ' ');
const BORES = { '3/4': [0.824, 0.00370], '1/2': [0.622, 0.00211],
                '3/8': [0.493, 0.00133], '1/4': [0.364, 0.000724] };
/* the level's own table must be the standard one */
const l3bad = Object.entries(BORES).filter(([k, [b, a]]) =>
  !new RegExp("k:'" + k + "', bore:" + b + ", area:" + a).test(l3));
ck('level 3 bores match the B36.10M table', l3bad.length === 0,
  l3bad.length ? l3bad.map(x => x[0]).join(', ') : '4 sizes');

const reL3 = (q, k) => FL.reynolds(q / 448.831 / BORES[k][1], BORES[k][0], FL.FLUIDS.water, 20);
const mixOf = r => Math.max(0, Math.min(1, (r - 2300) / 1700));
const ecOf = r => { const m = mixOf(r); return [1.6 * (1 + (1 - m) * 0.45), 1.6 * (1 - (1 - m) * 0.45)]; };
const DUTY3 = 0.50, LO3 = 1.4, HI3 = 1.8;
const passes = Object.keys(BORES).filter(k => {
  const [a, b] = ecOf(reL3(DUTY3, k));
  return a >= LO3 && a <= HI3 && b >= LO3 && b <= HI3;
});
ck('exactly one mixing run solves it at the duty', passes.length === 1 && passes[0] === '1/4',
  'passes: ' + (passes.join(', ') || 'NONE'));

/* and the duty has to block the brute force, or it is not a puzzle */
let brute = null;
for (let q = DUTY3; q <= 2.0; q += 0.01) {
  const [a, b] = ecOf(reL3(q, '3/4'));
  if (a <= HI3 && b >= LO3) { brute = q; break; }
}
ck('the 3/4 line cannot be forced inside the duty', brute === null || brute > DUTY3 * 1.5,
  brute === null ? 'never mixes' : 'needs ' + brute.toFixed(2) + ' gpm vs duty ' + DUTY3);

const re34 = reL3(DUTY3, '3/4'), re14 = reL3(DUTY3, '1/4');
ck('text and model agree: Re 1,913 laminar on 3/4',
  /Re 1,913/.test(l3flat) && near(re34, 1913, 2) && FL.regime(re34) === 'laminar',
  'model ' + Math.round(re34));
ck('text and model agree: Re 4,319 turbulent on 1/4',
  /Re 4,319/.test(l3flat) && near(re14, 4319, 2) && FL.regime(re14) === 'turbulent',
  'model ' + Math.round(re14));
ck('text and model agree: 1.54 ft/s instead of 0.30',
  /1\.54 ft\/s instead of 0\.30/.test(l3flat) &&
  near(DUTY3 / 448.831 / BORES['1/4'][1], 1.54, 0.01) &&
  near(DUTY3 / 448.831 / BORES['3/4'][1], 0.30, 0.01),
  (DUTY3 / 448.831 / BORES['1/4'][1]).toFixed(2) + ' / ' +
  (DUTY3 / 448.831 / BORES['3/4'][1]).toFixed(2));
ck('the stock is the concentrate defined in fluids.js',
  !!FL.FLUIDS.concentrate && /SG 1\.22/.test(l3flat) &&
  FL.FLUIDS.concentrate.sg === 1.22,
  'SG ' + (FL.FLUIDS.concentrate ? FL.FLUIDS.concentrate.sg : 'MISSING'));
ck('the concentrate is not on the bench switch panel',
  !/FKEYS=\[[^\]]*concentrate/.test(tr), 'three fluids on the bench');

/* ---------- 4d. the vena contracta rung ---------- */
console.log('\n4d. VENA CONTRACTA — on the bench');
const vseg = flatten(tr.slice(tr.indexOf("'vena-contracta':{"), tr.indexOf("'reynolds':{")));
const ATM = FL.ATM;
const p1a = dpR + ATM;                                  // reducer fitted, wide open
const pvc = FL.venaContracta(p1a, dpR, 0.90);
const marginAt = t => pvc - FL.waterPv(t);
ck('the dip really is below P2, which is the whole point',
  pvc < ATM, 'vena contracta ' + pvc.toFixed(2) + ' psia vs P2 ' + ATM.toFixed(2));
ck('text and model agree: margin closes 12.4 -> 5.9 psi',
  /12\.4 psi to 5\.9/.test(vseg) &&
  near(marginAt(20), 12.4, 0.1) && near(marginAt(80), 5.9, 0.1),
  marginAt(20).toFixed(2) + ' -> ' + marginAt(80).toFixed(2));
/* and the honest part: the bench must NOT be able to cavitate, or the
   closing line is a lie */
const everCav = [0, 20, 40, 60, 80].some(t => pvc <= FL.waterPv(t));
ck('the bench genuinely cannot reach cavitation', !everCav,
  'closest margin ' + marginAt(80).toFixed(2) + ' psi at 80 C');
ck('and the lesson says so rather than faking it',
  /cannot, on this bench/.test(vseg) && /too gentle/.test(vseg),
  'states the limit out loud');
ck('vapour pressure comes from the steam table, not the level',
  typeof FL.waterPv === 'function' && near(FL.waterPv(20), 0.339, 0.005) &&
  near(FL.waterPv(80), 6.873, 0.01),
  '20 C ' + FL.waterPv(20).toFixed(3) + '   80 C ' + FL.waterPv(80).toFixed(3));

/* ---------- 5. level 4's cavitation claim ---------- */
console.log('\n5. LEVEL 4 — choked and cavitating at 51 kPa');
const psi = k => k * 0.145038;
const P1a = 60 + 14.7, P2a = psi(51), PvA = psi(2.34), Pc = 3200.1;      // 22.064 MPa, the accepted critical pressure
const FF = 0.96 - 0.28 * Math.sqrt(PvA / Pc), FLv = 0.90;
const dPa = P1a - P2a, dPallow = FLv * FLv * (P1a - FF * PvA);
ck('dP exceeds the allowable, so it chokes', dPa > dPallow,
  dPa.toFixed(1) + ' > ' + dPallow.toFixed(1));
ck('P2 stays above Pv, so it cavitates rather than flashes', P2a > PvA,
  'P2 ' + P2a.toFixed(2) + ' psia vs Pv ' + PvA.toFixed(2) + ' psia');

/* ---------- 5b. how many trim stages the mist header needs ----------
   A stage chokes when dP_stage >= FL^2 (P1_stage - FF.Pv), and the LAST
   stage is always worst because it has the lowest inlet. Staged trim
   works by never letting one stage take enough drop to get there.

   Capacity is the other jaw of the vice: n equal stages in series give
   Cv_total = Cv_stage / sqrt(n), so every stage added to escape
   cavitation costs flow. The level is only a puzzle if those two
   constraints leave exactly one answer. */
console.log('\n5b. LEVEL 4 — staged trim');
const CV_STAGE = 0.35, DUTY4 = 1.50;
const stage = n => {
  const dPs = dPa / n;
  const inLast = P2a + dPs;                        // the bottom stage
  const allow = FLv * FLv * (inLast - FF * PvA);
  const cv = CV_STAGE / Math.sqrt(n);
  return { n, dPs, allow, cav: dPs >= allow, cv, q: cv * Math.sqrt(dPa) };
};
const stages = [1, 2, 3, 4, 5].map(stage);
stages.forEach(s => ck('  ' + s.n + ' stage(s)', true,
  'dP/stage ' + s.dPs.toFixed(1).padStart(5) + '  allowable ' + s.allow.toFixed(1).padStart(5) +
  '  ' + (s.cav ? 'CAVITATES' : 'clear    ') + '   flow ' + s.q.toFixed(2) +
  (s.q >= DUTY4 ? '  ok' : '  SHORT')));
const solves = stages.filter(s => !s.cav && s.q >= DUTY4).map(s => s.n);
ck('exactly one trim clears cavitation AND passes the duty',
  solves.length === 1 && solves[0] === 3,
  'solves: ' + (solves.join(', ') || 'NONE') + '  (duty ' + DUTY4.toFixed(2) + ' gpm)');
ck('too few stages cavitate', stage(1).cav && stage(2).cav,
  '1 and 2 both choke');
ck('too many stages starve the header', stage(4).q < DUTY4 && stage(5).q < DUTY4,
  '4 gives ' + stage(4).q.toFixed(2) + ', 5 gives ' + stage(5).q.toFixed(2));

/* ---------- 5c. the reducer throat ---------- */
/* The panel used to contradict the lesson here: VELOCITY is computed on
   the bore, which the reducer does not change, so fitting the reducer
   made the displayed velocity FALL while the text said flow speeds up.
   The throat is now its own geometry and its own readout, and these
   checks tie all three together - sizing.js, the bench, and the text. */
console.log('\n5c. REDUCER THROAT');
const trAll = read('trainer.html');
const thr = trAll.match(/reducer:\s*\{[\s\S]*?\}/)[0];
const grabN = (src, key) => {
  const m = src.match(new RegExp(key + ':\\s*([\\d.]+)'));
  return m ? +m[1] : null;
};
const dTh = grabN(thr, 'throat'), beta = grabN(thr, 'beta');
const boreTr = grabN(thr, 'bore');

/* derive the throat from Cv exactly as sizing.js does, by iteration */
let bIt = 0.3, dIt = 0;
for (let i = 0; i < 40; i++) {
  const b2i = bIt * bIt, Ki = 0.5 * (1 - b2i) + Math.pow(1 - b2i, 2);
  dIt = Math.sqrt(CVR * Math.sqrt(Ki) / 29.9);
  bIt = dIt / boreTr;
}
ck('throat bore is the one Cv = 29.9 d^2/sqrt(K) gives',
  near(dTh, dIt, 0.0006), 'table ' + dTh + ' in, derived ' + dIt.toFixed(4));
ck('beta is throat/bore, not an eyeballed number',
  near(beta, dTh / boreTr, 0.0015),
  'table ' + beta + ', throat/bore ' + (dTh / boreTr).toFixed(4));

const aTh = Math.PI * Math.pow(dTh / 2, 2) / 144;
const vBore = vel(qR, 0.00133), vTh = vel(qR, aTh);
ck('throat area is beta^2 of the bore',
  near(aTh / 0.00133, beta * beta, 0.002),
  (aTh / 0.00133).toFixed(4) + ' vs ' + (beta * beta).toFixed(4));
ck('throat velocity is 1/beta^2 times the bore velocity',
  near(vTh / vBore, 1 / (beta * beta), 0.3),
  (vTh / vBore).toFixed(1) + 'x  (' + vBore.toFixed(2) + ' -> ' + vTh.toFixed(1) + ' ft/s)');
ck('fitting the reducer RAISES throat velocity above the plain bore',
  vTh > vel(q, 0.00133),
  'plain ' + vel(q, 0.00133).toFixed(2) + ' -> throat ' + vTh.toFixed(1) + ' ft/s');

/* the readout row must exist and must hide when there is no throat */
ck('AT THROAT row is gated on there being a throat',
  /AT THROAT[\s\S]{0,160}hideOn:!r\.vThroat/.test(trAll),
  'hideOn, not onlyOn - the rung sits in KNOWN while the segment runs');
ck('rig() computes throat velocity from the throat area',
  /aThroat\s*=\s*p\.throat/.test(trAll) && /vThroat\s*=\s*aThroat/.test(trAll),
  'q / 448.831 / aThroat');

/* the cutaway has to narrow, and narrow to the true beta */
const eng = read('engine.js');
ck('the cutaway carries a throat', /Cutaway\.prototype\.throat/.test(eng), 'declared');
ck('boreFrac bottoms out at beta and returns to 1 outside the span',
  /return 1 - \(1-T\.beta\)\*k/.test(eng) && /if\(d>=T\.span\) return 1/.test(eng),
  'cosine shoulder');
ck('markers speed up and squeeze through the neck',
  /accel=1\/bf/.test(eng) && /p\.lane\*half\*0\.93\*bf/.test(eng),
  '1/bf in update, bf on the lane in draw');
ck('the drawn neck is at true beta scale',
  /BR\.h\*\(1-p\.beta\)\/2/.test(trAll), 'not an eyeballed fraction');

/* ---------- 6. the text does not out-run the model ---------- */
console.log('\n6. LESSON TEXT vs THE MODEL');
const seg = flatten(tr.slice(tr.indexOf("'restriction':{"), tr.indexOf("'manifold':{")));
ck('restriction text quotes a P1 the model produces',
  /about 8 psi/.test(seg) && near(dpR, 8, 0.5), 'text "about 8", model ' + dpR.toFixed(1));
ck('restriction text quotes the throat velocity the bench shows',
  seg.indexOf(vTh.toFixed(1) + ' ft/s') >= 0,
  'model ' + vTh.toFixed(1) + ' ft/s');
ck('restriction text quotes the bore velocity the bench shows',
  seg.indexOf('full bore: ' + vBore.toFixed(1) + ' ft/s') >= 0,
  'model ' + vBore.toFixed(2) + ' ft/s');
ck('restriction text calls the neck "a fifth" of the bore',
  seg.indexOf('a fifth of the bore across') >= 0 && near(beta, 0.2, 0.03),
  'beta ' + beta);
ck('restriction text calls the throat "a twentieth" of the area',
  seg.indexOf('a twentieth of the area') >= 0 && near(1 / (beta * beta), 20, 2.5),
  '1/beta^2 = ' + (1 / (beta * beta)).toFixed(1));
ck('restriction text quotes the pump pressure correctly',
  seg.indexOf('holds ' + DP + ' psi') >= 0, 'text says ' + DP);
ck('restriction text grounds the AT THROAT row by name',
  (seg.match(/AT THROAT/g) || []).length >= 2,
  'the task points at the row, the lesson explains it');
const bseg = tr.slice(tr.indexOf("'bore':{"), tr.indexOf("'restriction':{"));
ck('bore text quotes the two bores correctly',
  /0\.423/.test(bseg) && /0\.493/.test(bseg), 'both stated');
ck('bore text quotes the OD correctly', /0\.675 in across/.test(bseg), '0.675');

console.log('\n  ' + (bad ? bad + ' CROSS-CHECK(S) FAILED' : 'all cross-checks passed') + '\n');
process.exit(bad ? 1 : 0);
