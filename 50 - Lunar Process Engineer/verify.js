/* ============================================================
   VERIFY — the checks that used to be a person playing the game.

   Several regressions this session reached Franz before they reached a
   measurement: a vent that ran for 40 seconds, a vent that ran silently,
   lesson text clipped off the bottom of a box that hides rather than
   scrolls, and a rig that locked every valve the moment you finished it.
   Each was found by measuring - after it was reported. These are the ones
   that can be settled without a person, so they get settled on every build.

   Run: node verify.js      (build.js runs it too; it exits non-zero on fail)
   ============================================================ */
const fs = require('fs');

let FAIL = 0;
const results = [];
function check(name, ok, detail) {
  results.push({ name, ok, detail });
  if (!ok) FAIL++;
}

/* ------------------------------------------------------------
   1. DOES THE TEXT FIT?

   The guide strip is a fixed box with overflow:hidden, so anything taller
   is text the player never sees and never learns was there.

   This is exact, not an estimate. VT323 is monospace with an advance of
   exactly 0.4 x font-size (measured in the browser; bold is the same
   width), so the wrap point is arithmetic. The geometry below is read off
   the live element, and the model reproduces the two overflows that were
   found by hand: 4 lines -> +10.4px (measured 10), 5 lines -> +43.8px
   (measured 44). The self-test at the bottom holds it to that.
   ------------------------------------------------------------ */
const BOX = 194;          // .guide clientHeight (196 height - 2 borders)
const PAD = 12 + 12;      // padding top + bottom
const TASK_H = 38;        // .task min-height, and its line-height is 37.7
const LESSON_TOP = 9;     // .lesson margin-top
const LINE_H = 33.35;     // 23px * 1.45
const GAP_H = 11;         // .gap
const COLS = Math.floor(950 / (23 * 0.4));   // max-width / advance = 103

const ENTITY = /&(?:mdash|rsquo|lsquo|ldquo|rdquo|nbsp|amp|lt|gt|hellip|deg|times);/g;

function plain(html) {
  return html
    .replace(/<span class="gap"><\/span>/g, '<<GAP>>')   // a block break
    .replace(/<br\s*\/?>/g, '\n')
    .replace(ENTITY, 'x')                                // one glyph each
    .replace(/<[^>]+>/g, '');                            // tags have no width
}

function wrappedLines(text, cols) {
  let n = 0;
  for (const para of text.split('\n')) {
    if (!para.length) { n += 1; continue; }              // a <br> is a line
    let len = 0, lines = 1;
    for (const word of para.split(' ')) {
      const w = word.length;
      if (len === 0) { len = w; }
      else if (len + 1 + w <= cols) { len += 1 + w; }
      else { lines++; len = w; }
      while (len > cols) { lines++; len -= cols; }       // an unbreakable run
    }
    n += lines;
  }
  return n;
}

function guideHeight(lessonHtml, taskHtml) {
  const segs = plain(lessonHtml || '').split('<<GAP>>');
  let h = 0;
  segs.forEach((s, i) => {
    h += wrappedLines(s, COLS) * LINE_H;
    if (i < segs.length - 1) h += GAP_H;
  });
  const taskLines = taskHtml ? wrappedLines(plain(taskHtml), COLS) : 1;
  return PAD + Math.max(TASK_H, taskLines * LINE_H) + LESSON_TOP + h;
}

// --- self-test: the model must reproduce what the browser measured ---
(function selfTest() {
  const line = 'w'.repeat(COLS);
  const four = [line, line, line, line].join(' ');
  const five = [line, line, line, line, line].join(' ');
  const o4 = Math.round(guideHeight(four) - BOX);
  const o5 = Math.round(guideHeight(five) - BOX);
  check('fit model matches the browser (4 lines -> ~10px over)', o4 === 10, o4 + 'px');
  check('fit model matches the browser (5 lines -> ~44px over)', o5 === 44, o5 + 'px');
})();

if (!fs.existsSync('strings.json')) require('./check-fit.js');
const strings = JSON.parse(fs.readFileSync('strings.json', 'utf8'));
const over = [];
for (const s of strings) {
  if (s.key === 'line') continue;                        // the debrief card, not the strip
  const h = s.key === 'task' ? guideHeight('', s.v) : guideHeight(s.v, 'continue');
  if (h > BOX + 0.5) over.push((s.level + '/' + s.key) + ' +' + Math.round(h - BOX) + 'px');
}
check('every guide string fits the box', over.length === 0, over.join(', ') || strings.length + ' checked');

/* ------------------------------------------------------------
   2. CONSTANTS STILL MATCH THE SIZING

   The first pass picked Cv 7 / 4 / 2.2 because they balanced nicely and
   the bay delivered 2,800 gal/hour. This fails the build if a level's
   numbers drift away from what sizing.js derives for the application.
   ------------------------------------------------------------ */
const EXPECT = { CV_MAIN_MAX: 0.896, CV_BR_MAX: 0.513, CV_REDUCER: 0.296 };
for (const f of ['level1.html', 'level2.html']) {
  const src = fs.readFileSync(f, 'utf8');
  const m = src.match(/const CV_MAIN_MAX=([\d.]+), CV_BR_MAX=([\d.]+), CV_REDUCER=([\d.]+);/);
  const got = m ? { CV_MAIN_MAX: +m[1], CV_BR_MAX: +m[2], CV_REDUCER: +m[3] } : null;
  const ok = got && Object.keys(EXPECT).every(k => Math.abs(got[k] - EXPECT[k]) < 1e-9);
  check(f + ' Cv matches sizing.js', ok, got ? JSON.stringify(got) : 'not found');
  // bore radii are derived from the real bores, not typed in
  check(f + ' radii derived from bores',
    /const PX_PER_IN=R_BR\/0\.493;/.test(src) && /R_MAIN=Math\.round\(0\.622\*PX_PER_IN/.test(src),
    'PX_PER_IN + R_MAIN');
}

/* ------------------------------------------------------------
   3. PHYSICS: the two levels must agree

   Level two is the same bay as level one. With the reducer in, its solver
   must be identical across every valve combination, or the two levels are
   quietly modelling different rigs.
   ------------------------------------------------------------ */
function solver(file) {
  const s = fs.readFileSync(file, 'utf8');
  const i = s.indexOf('function solve()');
  let depth = 0, j = s.indexOf('{', i);
  for (let k = j; k < s.length; k++) {
    if (s[k] === '{') depth++;
    else if (s[k] === '}') { depth--; if (!depth) { j = k; break; } }
  }
  return new Function('valves', 'pManHeld', 'reducerIn',
    'const P_SUP=60,SG=1.0,CV_MAIN_MAX=' + EXPECT.CV_MAIN_MAX +
    ',CV_BR_MAX=' + EXPECT.CV_BR_MAX + ',CV_REDUCER=' + EXPECT.CV_REDUCER + ';' +
    'const seriesCv=(a,b)=>1/Math.sqrt(1/(a*a)+1/(b*b));' +
    s.slice(i, j + 1) + ' return solve();');
}
const L1 = solver('level1.html'), L2 = solver('level2.html');
let states = 0, differ = 0;
for (const m of [0, 0.5, 1]) for (const a of [0, 0.5, 1])
  for (const b of [0, 0.5, 1]) for (const c of [0, 0.5, 1]) {
    const v = { main: m, b0: a, b1: b, b2: c };
    const r1 = L1(v, 37, true), r2 = L2(v, 37, true);
    states++;
    const same = r1.q.every((q, i) => Math.abs(q - r2.q[i]) < 1e-12) &&
                 Math.abs(r1.pTarget - r2.pTarget) < 1e-12;
    if (!same) differ++;
  }
check('level 1 and 2 solvers identical with the reducer in', differ === 0,
  differ ? differ + ' of ' + states + ' differ' : states + ' states');

/* ------------------------------------------------------------
   4. THE PUZZLES ARE STILL SOLVABLE

   Rescaling the flows once silently moved these. A balance window that
   closes makes a level impossible with no error anywhere.
   ------------------------------------------------------------ */
function balanceWindow(minQ, spread) {
  let lo = null, hi = null;
  for (let t = 0.2; t <= 1.0001; t += 0.0005) {
    const r = L2({ main: 1, b0: t, b1: t, b2: 1 }, 0, true);
    const settled = L2({ main: 1, b0: t, b1: t, b2: 1 }, r.pTarget, true);
    const mn = Math.min(...settled.q), mx = Math.max(...settled.q);
    if (mn >= minQ && mx - mn <= spread) { if (lo === null) lo = t; hi = t; }
  }
  return lo === null ? null : { lo, hi, width: hi - lo };
}
const w1 = balanceWindow(1.0, 0.15);
const w2 = balanceWindow(1.31, 0.125);
check('level 1 balance step is passable', !!w1 && w1.width > 0.03,
  w1 ? 'wheel window ' + (w1.width * 100).toFixed(0) + '%' : 'NO SOLUTION');
check('level 2 balance step is passable', !!w2 && w2.width > 0.03,
  w2 ? 'wheel window ' + (w2.width * 100).toFixed(0) + '%' : 'NO SOLUTION');

// the payoff the level is built on must still be there
const settle = (v, red) => { let p = 0; for (let i = 0; i < 4000; i++) p = L2(v, p, red).pTarget; return L2(v, p, red); };
const balanced = settle({ main: 1, b0: 0.4819, b1: 0.4819, b2: 1 }, true);
const repaired = settle({ main: 1, b0: 1, b1: 1, b2: 1 }, false);
const gain = (repaired.q[0] - balanced.q[0]) / balanced.q[0] * 100;
check('pulling the reducer is still worth ~33%', gain > 25 && gain < 45,
  balanced.q[0].toFixed(2) + ' -> ' + repaired.q[0].toFixed(2) + ' gpm (+' + gain.toFixed(0) + '%)');
check('flows are a real grow bay, not a fire main',
  repaired.q[0] > 0.5 && repaired.q[0] < 4,
  (repaired.q[0] * 3).toFixed(1) + ' gpm for the bay = ' + (repaired.q[0] * 180).toFixed(0) + ' gal/h');

/* ------------------------------------------------------------
   5. THE AIR PURGE IS WATCHABLE

   FILL_RATE only means anything against the flow scale. When the Cv values
   came down 8x, the old 12 silently became a 15s purge and a hand-tuned 5
   became 40s - neither of which anyone would sit through or notice.
   ------------------------------------------------------------ */
for (const f of ['level1.html', 'level2.html']) {
  const src = fs.readFileSync(f, 'utf8');
  const rate = +(src.match(/const FILL_RATE=([\d.]+);/) || [])[1];
  const brLen = 812 - 320, fillStart = (410 - 320) / brLen;
  const secs = (1 - fillStart) * brLen / (repaired.q[0] * rate);
  check(f + ' air purge is 2-8s', secs >= 2 && secs <= 8, secs.toFixed(1) + 's at ' + repaired.q[0].toFixed(2) + ' gpm');
}

/* ------------------------------------------------------------
   5b. THE VELOCITY RACE IS REAL

   The two tracers in level zero must be carried by the same profile the
   water is, or the level is illustrating a point rather than showing one.
   ------------------------------------------------------------ */
{
  const eng = fs.readFileSync('engine.js', 'utf8');
  const profileAt = l => { const r = Math.min(0.98, Math.abs(l)); return Math.pow(1 - r, 1 / 7) / 0.817; };
  const lanes = (eng.match(/\{lane:([\d.]+),mark:'centre'\},\{lane:([\d.]+),mark:'wall'\}/) || []);
  const ok = lanes.length === 3;
  const lead = ok ? profileAt(+lanes[1]) / profileAt(+lanes[2]) : 0;
  check('velocity tracers sit on centreline and wall', ok,
    ok ? 'lanes ' + lanes[1] + ' / ' + lanes[2] : 'not found');
  // measured on canvas at 1.388x; the profile says 1.435x
  check('tracer lead matches the profile', lead > 1.3 && lead < 1.6, lead.toFixed(3) + 'x');
  check('tracers advance by profileAt, not their own animation',
    /if\(s\.race\) s\.race\.forEach\(p=>\{[\s\S]{0,160}profileAt\)\(p\.lane\)/.test(eng),
    'shares the water update rule');
  check('wall tracer is not pinned into the clamp', ok && +lanes[2] < 0.98,
    'clamp is 0.98, lane is ' + (lanes[2] || '?'));
}

/* ------------------------------------------------------------
   5c. THE CRASH COURSE HAS NO DEAD ENDS

   Level zero's trickle step passed with the valve SHUT - Reynolds of zero
   read as laminar - and the heat step after it could then never be
   satisfied, because no amount of heat makes a dead line turbulent. The
   player was invited into a state the next step could not accept.

   So: every flow the trickle step accepts must still reach turbulent when
   heated to the top of the dial.
   ------------------------------------------------------------ */
{
  const FL = require('./fluids.js');
  const src = fs.readFileSync('level0.html', 'utf8');
  const m = src.match(/const TRICKLE=\[([\d.]+),([\d.]+)\]/);
  const BORE = 0.493, AREA = 0.00133, CV = 0.5, DP = 20;
  const vel = lever => (CV * lever * Math.sqrt(DP)) / 448.831 / AREA;
  const re = (lever, t) => lever <= 0.001 ? 0 : FL.reynolds(vel(lever), BORE, FL.FLUIDS.water, t);
  check('level 0 trickle band is declared', !!m, m ? m[1] + '-' + m[2] : 'TRICKLE not found');
  if (m) {
    const lo = +m[1], hi = +m[2];
    let coldOk = true, hotOk = true;
    for (let f = lo; f <= hi + 1e-9; f += 0.005) {
      if (FL.regime(re(f, 20)) !== 'laminar') coldOk = false;
      if (FL.regime(re(f, 80)) !== 'turbulent') hotOk = false;
    }
    check('everything in the band is laminar cold', coldOk,
      'Re ' + Math.round(re(lo, 20)) + '-' + Math.round(re(hi, 20)) + ' at 20C');
    check('everything in the band turns turbulent hot', hotOk,
      'Re ' + Math.round(re(lo, 80)) + '-' + Math.round(re(hi, 80)) + ' at 80C');
  }
  check('a shut valve does not report as laminar',
    /regime:B\.flow<=0\.001\?'still'/.test(src), 'reports still');
  check('the trickle band is aimed at, not hunted for',
    /COURSE\[c1\]\.target/.test(src) && /function magnet/.test(src), 'labelled target + magnet');
  /* The canvas takes focus when a slider is clicked, so act 2's keydown
     handler was catching the Enter the player presses to continue a
     lesson - opening the supply panel behind the trainer. */
  check('act 2 keydown cannot fire during the course',
    /addEventListener\('keydown'[\s\S]{0,400}?if\(act!==2\) return;/.test(src),
    'gated on act');
  check('reset restores act 1, not just the supply panel',
    /onReset\(\)\{[\s\S]{0,400}act=1; c1=0; done1=false;/.test(src), 'act/c1/done1 cleared');
}

/* ------------------------------------------------------------
   5d. THE APPLIED STEP IS SOLVABLE, AND ONLY THE RIGHT WAY

   The last bench step asks for 0.50 gpm, laminar, with no band drawn on
   any lever. It is the only step that asks the player to work a setting
   out rather than follow one, so it has to be reachable - and it has to
   NOT be reachable by shoving the flow lever about, or it teaches nothing.
   ------------------------------------------------------------ */
{
  const FL = require('./fluids.js');
  const BORE = 0.493, AREA = 0.00133, CV = 0.5, DP = 20;
  const flow = (lever, f) => CV * lever * Math.sqrt(DP / f.sg);
  const vel = q => q / 448.831 / AREA;
  const re = (lever, f, t) => lever <= 0.001 ? 0 : FL.reynolds(vel(flow(lever, f)), BORE, f, t);
  const solves = (f, t) => {
    for (let lev = 0.005; lev <= 1; lev += 0.005) {
      const q = flow(lev, f);
      if (q >= 0.50 && FL.regime(re(lev, f, t)) === 'laminar') return true;
    }
    return false;
  };
  const W = FL.FLUIDS.water, P = FL.FLUIDS.propane, C = FL.FLUIDS.co2;
  check('applied step is solvable at all', solves(W, 0), 'water at 0 C');
  check('applied step needs COOLING, not just the flow lever',
    !solves(W, 20) && !solves(W, 10), 'impossible at 10 C and 20 C');
  check('applied step cannot be solved with propane or CO2',
    !solves(P, 20) && !solves(C, 20), 'viscosity too low for laminar at that rate');
  // and the window it opens must be wide enough to actually hit
  let lo = null, hi = null;
  for (let lev = 0.005; lev <= 1; lev += 0.005) {
    const q = flow(lev, W);
    if (q >= 0.50 && FL.regime(re(lev, W, 0)) === 'laminar') { if (lo === null) lo = lev; hi = lev; }
  }
  check('applied step has a hittable lever window', lo !== null && hi - lo >= 0.03,
    lo === null ? 'NONE' : 'lever ' + lo.toFixed(2) + '-' + hi.toFixed(2));
  {
    const lv = fs.readFileSync('level0.html', 'utf8');
    const applied = lv.indexOf("ctl:['flow','temp','fluid']");
    const hasTarget = applied >= 0 && lv.slice(applied, applied + 200).includes('target:');
    check('the applied step draws no target', applied >= 0 && !hasTarget,
      applied < 0 ? 'step not found' : 'player works it out');
  }
}

/* ------------------------------------------------------------
   6. BUILD INTEGRITY
   ------------------------------------------------------------ */
for (const f of ['level0.html', 'level1.html', 'level2.html', 'engine.js', 'jam.js', 'title-art.js']) {
  const bad = [...new Set((fs.readFileSync(f, 'utf8').match(/[^\x00-\x7F]/g) || []))];
  check(f + ' is ASCII', bad.length === 0, bad.length ? JSON.stringify(bad) : 'clean');
}
for (const f of ['dist/game.html', 'dist/level0.html', 'dist/level1.html', 'dist/level2.html']) {
  if (!fs.existsSync(f)) { check(f + ' exists', false, 'missing'); continue; }
  let bad = 0, blocks = 0;
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    blocks++;
    try { new Function(m[1]); } catch (e) { bad++; }
  }
  check(f + ' script blocks parse', bad === 0, bad ? bad + ' failed' : blocks + ' blocks');
}

/* ------------------------------------------------------------ */
const pad = Math.max(...results.map(r => r.name.length));
console.log('');
for (const r of results)
  console.log('  ' + (r.ok ? 'ok  ' : 'FAIL') + '  ' + r.name.padEnd(pad) + '  ' + (r.detail || ''));
console.log('\n  ' + (FAIL ? FAIL + ' CHECK(S) FAILED' : results.length + ' checks passed') + '\n');
process.exit(FAIL ? 1 : 0);
