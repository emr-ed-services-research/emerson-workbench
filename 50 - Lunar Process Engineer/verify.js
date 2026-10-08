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

/* Read from the level rather than copied into here. verify.js having its
   own copy of BENCH_CV is exactly the drift these checks exist to catch,
   and it silently passed the wrong rig when the bench was rescaled. */
function benchCv() {
  const m = fs.readFileSync('trainer.html', 'utf8').match(/const BENCH_CV=([0-9.]+)/);
  if (!m) throw new Error('BENCH_CV not found in trainer.html');
  return +m[1];
}

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
   1b. DO THE COMMS CARDS WRAP CLEANLY?

   A comms card is hard-broken with <br> so the voice has phrasing. If a
   segment is wider than the card it wraps anyway, and its tail is left
   alone on a line - the word "gravel" by itself in the middle of pod 3's
   brief. Six of them were doing it.

   .alert-box is 660px wide with 38px of side padding, and .alert-text is
   28px VT323, whose advance is exactly 0.4 x size. So the card fits
   (660-76)/11.2 = 52 characters, and every segment has to be inside that.
   ------------------------------------------------------------ */
{
  const CARD_COLS = Math.floor((660 - 2 * 38) / (28 * 0.4));
  const RE = new RegExp(
    "kind:'comms'[\\s\\S]{0,240}?text:((?:'(?:[^'\\\\]|\\\\.)*'\\s*\\+?\\s*)+)", 'g');
  const orphans = [];
  for (const f of ['level0.html', 'level1.html', 'level2.html',
                   'level3.html', 'level4.html', 'trainer.html']) {
    const s = fs.readFileSync(f, 'utf8');
    RE.lastIndex = 0;
    let m;
    while ((m = RE.exec(s))) {
      const t = m[1].split(/'\s*\+\s*'/).join('').replace(/^'|'\s*$/g, '')
        .replace(/&ldquo;|&rdquo;/g, '"').replace(/&mdash;/g, '-')
        .replace(/\\u2014/g, '-').replace(/\\u2019/g, "'").replace(/\\'/g, "'");
      t.split('<br>').forEach(line => {
        const L = line.trim();
        if (L.length > CARD_COLS)
          orphans.push(f.replace('.html', '') + ' +' + (L.length - CARD_COLS));
      });
    }
  }
  check('comms cards break without orphaning a word', orphans.length === 0,
    orphans.join(', ') || 'all segments within ' + CARD_COLS + ' chars');
}

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
  const src = fs.readFileSync('trainer.html', 'utf8');
  const m = src.match(/const TRICKLE=\[([\d.]+),([\d.]+)\]/);
  const BORE = 0.493, AREA = 0.00133, DP = 20;
  /* read from the level, not hardcoded - verify had its own copy of
     BENCH_CV, which is exactly the drift these checks exist to catch */
  const CV = benchCv();
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
    /STEPS\[si\]\.target/.test(src) && /function magnet/.test(src), 'labelled target + magnet');
  /* Two checks lived here guarding level 0's act-1 crash course: that its
     keydown handler could not fire during the course, and that RESET put
     the player back at the start of it. The course is gone - the bench is
     a device now - so what replaces them is the check that it really is
     gone, because a second copy drifting back in is the actual risk. */
  const l0 = fs.readFileSync('level0.html', 'utf8');
  check('level 0 carries no second copy of the bench',
    !/const COURSE=\[/.test(l0) && !/function drawBench/.test(l0) && !/\bact===1\b/.test(l0),
    'one act, the supply panel');
  check('level 0 teaches the rungs its closing lines lean on',
    /teach:\[[^\]]*'velocity-profile'[^\]]*\]/.test(l0),
    'closing points at the profile in a real line');
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
  const BORE = 0.493, AREA = 0.00133, DP = 20;
  /* read from the level, not hardcoded - verify had its own copy of
     BENCH_CV, which is exactly the drift these checks exist to catch */
  const CV = benchCv();
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
    const lv = fs.readFileSync('trainer.html', 'utf8');
    const applied = lv.indexOf("ctl:['flow','temp','fluid']");
    const hasTarget = applied >= 0 && lv.slice(applied, applied + 200).includes('target:');
    check('the applied step draws no target', applied >= 0 && !hasTarget,
      applied < 0 ? 'step not found' : 'player works it out');
  }
}

/* ------------------------------------------------------------
   5e. THE TRAINING RIG IS LAID OUT, NOT STACKED

   The first bench put the maker plate across the temperature readout, a
   handwritten note over the flow lever, and buried the tank and pump
   behind the instrument panel - scenery and controls were positioned
   independently and never compared. Everything now comes from one LAY
   table, and the rectangles are checked against each other here.
   ------------------------------------------------------------ */
{
  /* Rewritten for the bench that exists. This block used to read level 0,
     which carried a second copy of the training loop with a reservoir, a
     pump and a hand-written note. That copy is gone - the bench is
     trainer.html now - so the check follows it, and the rectangle list is
     the trainer's own LAY rather than the old rig's.

     Scope is the things that must never sit on each other: the cut-open
     glass, the readout panel, both lever boxes and tracks, and the fluid
     switch plate. Decorative props are left out on purpose; the clamps
     holding the run pass behind the FLOW box by a few pixels and that is
     how it is drawn. */
  const tsrc = fs.readFileSync('trainer.html', 'utf8');
  const lm = tsrc.match(/const LAY=\{[\s\S]*?\n\};/);
  check('the bench has one layout table', !!lm, lm ? 'LAY' : 'not found');
  if (lm) {
    const LAY = eval('(' + lm[0].replace(/^const LAY=/, '').replace(/;$/, '') + ')');
    const R = [];
    R.push({ n:'cut-open glass', ...LAY.glass });
    R.push({ n:'readout panel',  ...LAY.meter });
    R.push({ n:'FLOW box',       ...LAY.flowS.box });
    R.push({ n:'TEMP box',       ...LAY.tempS.box });
    R.push({ n:'FLOW track', x:LAY.flowS.track.x, y:LAY.flowS.track.y-13, w:LAY.flowS.track.w, h:26 });
    R.push({ n:'TEMP track', x:LAY.tempS.track.x, y:LAY.tempS.track.y-13, w:LAY.tempS.track.w, h:26 });
    R.push({ n:'fluid switches', x:LAY.fsw.x, y:LAY.fsw.y, w:LAY.fsw.w, h:LAY.fsw.h });

    const hit = (a,b) => a.x < b.x+b.w && b.x < a.x+a.w && a.y < b.y+b.h && b.y < a.y+a.h;
    const clash = [];
    for (let i=0;i<R.length;i++) for (let j=i+1;j<R.length;j++)
      if (hit(R[i],R[j])) clash.push(R[i].n + ' x ' + R[j].n);
    check('nothing on the bench overlaps anything else', clash.length === 0,
      clash.join('; ') || R.length + ' rectangles');

    const W = 900, H = 400, out = [];
    R.forEach(r => { if (r.x < 0 || r.x+r.w > W || r.y < 0 || r.y+r.h > H) out.push(r.n); });
    check('everything is on the bench', out.length === 0, out.join(', ') || 'within 900x400');

    check('the bench has a glass, a readout and two levers',
      !!(LAY.glass && LAY.meter && LAY.flowS && LAY.tempS), 'all four');
    check('the run continues either side of the glass',
      /run\(0,G\.x-6\); run\(G\.x\+G\.w\+6,W\)/.test(tsrc),
      'solid pipe into and out of the cutaway');

    /* The table is only worth checking if the drawing code reads it. The
       hand-written note passed this suite for a while whilst still being
       drawn at hardcoded coordinates over the flow lever, because the
       check validated a value nothing used. */
    const usesTable = ['LAY.glass', 'LAY.meter', 'LAY.flowS', 'LAY.tempS',
                       'LAY.fsw', 'LAY.lamp', 'LAY.book', 'LAY.rule']
      .filter(k => !tsrc.includes(k));
    check('the drawing code reads the layout table', usesTable.length === 0,
      usesTable.length ? 'not referenced: ' + usesTable.join(', ') : 'all keys referenced');
  }
}
/* ------------------------------------------------------------
   6. BUILD INTEGRITY
   ------------------------------------------------------------ */
for (const f of ['level0.html', 'level1.html', 'level2.html', 'level3.html',
                 'level4.html', 'trainer.html',
                 'engine.js', 'jam.js', 'title-art.js',
                 /* fluids.js and sizing.js were missing from this list, so a
                    non-ASCII dash in either of them reached the build as a
                    warning nothing was actually checking. */
                 'fluids.js', 'sizing.js']) {
  // no regex: an escaped  in this line once became a real NUL byte
  const bad = [...new Set([...fs.readFileSync(f, 'utf8')].filter(c => c.charCodeAt(0) > 127))];
  check(f + ' is ASCII', bad.length === 0, bad.length ? JSON.stringify(bad) : 'clean');
}
for (const f of ['dist/game.html', 'dist/level0.html', 'dist/level1.html',
                 'dist/level2.html', 'dist/level3.html', 'dist/level4.html',
                 'dist/trainer.html']) {
  if (!fs.existsSync(f)) { check(f + ' exists', false, 'missing'); continue; }
  let bad = 0, blocks = 0;
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    blocks++;
    try { new Function(m[1]); } catch (e) { bad++; }
  }
  check(f + ' script blocks parse', bad === 0, bad ? bad + ' failed' : blocks + ' blocks');
}

/* ---- fluid representation is uniform ----
   Standing requirement, not a style preference: every view draws fluid the
   same way, and that way comes from the reference rig. These exist because
   the divergence happened twice, silently, and shipped both times. */
const ENG = fs.readFileSync('engine.js', 'utf8');
const RIG = fs.readFileSync('reference/cve-reference-rig.html', 'utf8');

/* Everything outside marker()'s own body. A fluid-coloured stroke anywhere
   in here is a view drawing its own streak again. */
const engOutsideMarker = (() => {
  const i = ENG.indexOf('function marker(g,x,y,o)');
  if (i < 0) return ENG;
  const j = ENG.indexOf(String.fromCharCode(10,125), i);
  return ENG.slice(0, i) + ENG.slice(j);
})();
const ownStreaks = engOutsideMarker.match(/rgba\(54,224,255[\s\S]{0,160}?lineTo/g) || [];

check('fluid: no view strokes its own streak', ownStreaks.length === 0,
  ownStreaks.length
    ? ownStreaks.length + ' site(s) stroke fluid instead of calling marker()'
    : 'marker() is the only fluid draw');

check('fluid: marker() draws the rig centred square',
  /function marker\(g,x,y,o\)/.test(ENG) && /fillRect\(x-s\/2,y-s\/2,s,s\)/.test(ENG),
  'rig: fillRect(px-size/2, py-size/2, size, size)');

const engSize = (ENG.match(/function fluidSize\(sg\)\{\s*return\s*([\d.]+)\*/) || [])[1];
const rigSize = (RIG.match(/const size = \(lane\.service==='liquid' \? ([\d.]+)/) || [])[1];
check('fluid: marker size matches the rig', !!engSize && engSize === rigSize,
  'engine ' + engSize + '  rig ' + rigSize);

const engAl = (ENG.match(/function fluidAlpha\(sg\)[^\r\n]*0\.4\+\(sg-1\.0\)\*([\d.]+)/) || [])[1];
const rigAl = (RIG.match(/Math\.max\(0\.4, 0\.4 \+ \(lane\.sg-1\.0\)\*([\d.]+)\)/) || [])[1];
check('fluid: marker alpha matches the rig', !!engAl && engAl === rigAl,
  'engine ' + engAl + '  rig ' + rigAl);

const agCalls = (ENG.match(/fluidAgitation\(/g) || []).length;
check('fluid: both views agitate', agCalls >= 3,
  agCalls + ' uses (helper + Line + Cutaway)');

const carries = ['Line', 'Cutaway'].filter(k => {
  const b = ENG.split(new RegExp('function ' + k + '\\('))[1] || '';
  return /this\.tempF=/.test(b.slice(0, 900));
});
check('fluid: both views carry fluid state', carries.length === 2,
  'carrying: ' + (carries.join(', ') || 'neither'));


/* ---- the segment table only touches state that exists ----
   A splice removed `const PROBE={...}` and left three references to it in
   the segment table. That is a ReferenceError the moment a segment starts
   - the guide box comes up blank - but it parses perfectly, so the
   "script blocks parse" check passed and the build went green. Parsing is
   not running.

   Scope is deliberately narrow: the bodies of the SEG table in
   trainer.html, which are closures that run later and so are exactly where
   a vanished declaration hides. A whole-file identifier scan was tried
   first and drowned in false positives from comma-declarations and prose;
   a check nobody can read the output of is not a check. */
(function segmentRefs() {
  const src = fs.readFileSync('trainer.html', 'utf8');
  const start = src.indexOf('const SEG={');
  if (start < 0) { check('segment table: found', false, 'const SEG={ missing'); return; }
  let d = 0, end = start;
  for (; end < src.length; end++) {
    if (src[end] === '{') d++;
    else if (src[end] === '}' && --d === 0) break;
  }
  const table = src.slice(start, end + 1);

  // everything the file declares at any level
  const file = src.replace(/\/\*[\s\S]*?\*\//g, ' ');
  const declared = new Set();
  let m;
  const decl = /\b(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)/g;
  while ((m = decl.exec(file))) declared.add(m[1]);
  // comma continuations: const A=1, B=2, C=3
  const run = /\b(?:const|let|var)\s+([^;\n]+)/g;
  while ((m = run.exec(file)))
    (m[1].match(/([A-Za-z_$][\w$]*)\s*=/g) || [])
      .forEach(s => declared.add(s.replace(/\s*=$/, '')));

  // identifiers the table reads, minus property accesses and string bodies
  const code = table
    .replace(/'(?:\\.|[^'\\])*'/g, "''")
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/\/\*[\s\S]*?\*\//g, ' ');
  /* Table keys, not state. 'manifold' only ever passed because a function
     happens to share the name - the check was right to stop on 'trace'. */
  const KEY = /^(concept|sub|controls|steps|ctl|target|task|ok|lesson|watch|auto|on|lo|hi|label|shows|manifold|trace)$/;
  const KW = /^(if|for|while|return|new|typeof|in|of|else|throw|true|false|null|undefined|const|let|var|function|this)$/;
  const used = new Set();
  const idRe = /(^|[^.\w$])([A-Za-z_$][\w$]*)/g;
  while ((m = idRe.exec(code))) {
    const n = m[2], after = code.slice(m.index + m[0].length);
    if (KEY.test(n) && /^\s*:/.test(after)) continue;     // it is a table key
    if (KW.test(n)) continue;
    used.add(n);
  }
  const GLOBAL = new Set(['Math', 'Object', 'String', 'Number', 'Array', 'JSON']);
  const missing = [...used].filter(n => !declared.has(n) && !GLOBAL.has(n)).sort();
  check('segment table references only declared state', missing.length === 0,
    missing.length ? 'undeclared: ' + missing.join(', ')
                   : used.size + ' names, all declared');
})();
/* ---- continuity: the order the player meets things ----
   PIPELINE.md section 6. These exist because the order was wrong and
   nothing could see it: level zero's briefing sat inside the level's own
   mount, the trainer runs before the level, so the player was told
   "before you go down there, R.O. keeps a bench" before anything had
   mentioned a down there. The assignment arrived after the training. */
{
  const eng = fs.readFileSync('engine.js', 'utf8');

  /* C1 - the brief plays, and plays BEFORE the trainer.

     Checked by running launch() rather than by reading it. The first
     version compared source positions and failed a correct sequencer:
     toTraining is defined above the brief call and invoked after it, so
     the text order is the reverse of the execution order. Parsing is not
     running - that lesson again. */
  const src = eng.slice(eng.indexOf('function launch(opt, i)'));
  const launchSrc = src.slice(0, src.indexOf('\n}') + 2);
  const order = [];
  const sandbox = {
    intro: (cards, next) => { order.push('brief(' + cards.length + ')'); next(); },
    LPE: { trainer: (need, next) => { order.push('trainer[' + need.join(',') + ']'); next(); } },
    TAUGHT: new Set(),
    LPE_NAV: null,
  };
  let ran = null;
  try {
    const make = new Function('intro', 'LPE', 'TAUGHT',
      launchSrc + '\nreturn launch;');
    const launch = make(sandbox.intro, sandbox.LPE, sandbox.TAUGHT);
    launch({ levels: [{
      brief: [{ kind: 'comms' }],
      teach: ['process', 'flow'],
      start: () => order.push('level'),
    }] }, 0);
    ran = order.join(' -> ');
  } catch (e) { ran = 'threw: ' + e.message; }
  check('C1 brief runs before the trainer, trainer before the level',
    ran === 'brief(1) -> trainer[process,flow] -> level', ran);

  /* and a second run must not re-teach what the first one taught */
  let repeat = null;
  try {
    const make = new Function('intro', 'LPE', 'TAUGHT', launchSrc + '\nreturn launch;');
    const T = new Set();
    const o2 = [];
    const lp = make((c, n) => { o2.push('brief'); n(); },
                    { trainer: (need, n) => { o2.push('trainer[' + need.join(',') + ']'); n(); } }, T);
    const lv = { brief: [{}], teach: ['process'], start: () => o2.push('level') };
    lp({ levels: [lv] }, 0); o2.push('|'); lp({ levels: [lv] }, 0);
    repeat = o2.join(' ');
  } catch (e) { repeat = 'threw: ' + e.message; }
  check('C5 a rung already taught is not taught again',
    repeat === 'brief trainer[process] level | brief level', repeat);

  const levels = ['level0.html', 'level1.html', 'level2.html', 'level3.html', 'level4.html'];
  const reg = f => {
    const s = fs.readFileSync(f, 'utf8');
    const i = s.indexOf('LPE_LEVELS=window.LPE_LEVELS');
    return i < 0 ? '' : s.slice(i, s.indexOf('\n});', i));
  };

  /* C1 - every level states the job. A level that teaches must brief. */
  const noBrief = levels.filter(f => !/\bbrief:\s*\[/.test(reg(f)));
  check('C1 every level briefs the job', noBrief.length === 0,
    noBrief.join(', ') || levels.length + ' levels');

  /* C2 - the level's own intro is arrival only. A comms card still sitting
     in there is a briefing that would play after the training. */
  const commsInIntro = levels.filter(f => {
    const s = fs.readFileSync(f, 'utf8');
    const i = s.indexOf('intro:[');
    if (i < 0) return false;
    return /\{kind:'comms'/.test(s.slice(i, s.indexOf('\n  ],', i)));
  });
  check('C2 arrival cards carry no briefing', commsInIntro.length === 0,
    commsInIntro.join(', ') || 'place and title only');

  /* C3 - a level teaches what its own text names. Level zero's closing
     points at the velocity profile in a real line, so it has to have been
     taught; this check generalises that to every rung name. */
  const RUNG = {
    'velocity profile': 'velocity-profile', 'no-slip': 'velocity-profile',
    'reynolds': 'reynolds', 'laminar': 'reynolds', 'turbulent': 'reynolds',
    'viscosity': 'reynolds', 'specific gravity': 'specific-gravity',
  };
  const unmet = [];
  levels.forEach(f => {
    const s = fs.readFileSync(f, 'utf8');
    const taught = new Set((reg(f).match(/'[a-z-]+'/g) || []).map(x => x.slice(1, -1)));
    // player-facing text only: strip comments first
    const prose = s.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/(^|[^:])\/\/[^\n]*/g, '$1 ');
    Object.entries(RUNG).forEach(([term, rung]) => {
      if (new RegExp('\\b' + term + '\\b', 'i').test(prose) && !taught.has(rung))
        unmet.push(f.replace('.html', '') + ' says "' + term + '" without teaching ' + rung);
    });
  });
  check('C3 levels teach the rungs their own text names', unmet.length === 0,
    unmet.join('; ') || 'nothing named early');
  /* C6 - scenery is composed before the shell mounts.
     draw() runs on the first frame the shell pumps, which is before
     onStart. Building the background in a callback left level zero doing
     drawImage(undefined) on frame one: the exception killed the frame
     loop and the canvas stayed black. The standalone build papered over
     the timing, the game shell did not, and nothing caught it because
     every check was reading source rather than playing the thing. */
  const scenes = {
    'level0.html': 'buildScene', 'level1.html': 'buildScene',
    'level2.html': 'buildScene', 'level3.html': 'buildScene',
    'level4.html': 'buildScene',
    'trainer.html': 'buildDesk',
  };
  const late = [];
  Object.entries(scenes).forEach(([f, fn]) => {
    const s = fs.readFileSync(f, 'utf8');
    const mount = s.search(/\b(const\s+)?SH\s*=\s*LPE\.mount\(/);
    const call = s.indexOf(fn + '();');
    if (mount < 0 || call < 0 || call > mount) late.push(f);
  });
  check('C6 scenery is composed before the shell mounts', late.length === 0,
    late.join(', ') || Object.keys(scenes).length + ' scenes');
}

/* ------------------------------------------------------------ */
/* ------------------------------------------------------------
   N. IS THE PIPING ACTUALLY PIPING?

   Levels 3 and 4 shipped drawing their skids with LPE.pipeRun() - a
   three-rectangle bar with no wall, no elbow, no tee and no flange -
   while levels 1 and 2 used LPE.piping(), the renderer the game had
   already standardised on. Nothing in the build noticed, because
   "it parses" and "it renders something" were all anyone checked.

   The faults that hid behind that: runs starting at x=0 and being
   clipped by the panel edge instead of entering through a wall; a
   level 3 run of NEGATIVE width because the injector sat left of the
   valve it was drawn after; and a level 4 header that stopped 40px
   above and short of the nozzle rail it was supposed to feed, with
   the rail left as an unconnected rectangle inside the pod.

   pipeRun() is not banned outright. Level 0 is one straight section
   seen through a window, capped by a penetration at each end - there
   is no corner, branch or bore change for piping() to render. What is
   banned is using it for a SKID: more than one call, which is a run
   with joints in it that are not being drawn as joints.
   ------------------------------------------------------------ */
{
  const LEVELS = ['level0.html','level1.html','level2.html',
                  'level3.html','level4.html'];
  /* Comments first. The first cut of this check matched the word
     "pipeRun" inside the comments explaining why pipeRun was removed,
     and reported three levels still using it. */
  const strip = t => t.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  const src = {};
  for (const f of LEVELS) src[f] = strip(fs.readFileSync(f, 'utf8'));
  const count = (t, re) => (t.match(re) || []).length;

  const bars = LEVELS.filter(f => count(src[f], /LPE\.pipeRun\s*\(/g) > 1);
  check('no level builds a skid out of pipeRun() bars', bars.length === 0,
    bars.length ? bars.join(', ') + ' - use LPE.piping()'
                : LEVELS.map(f => f[5] + ':' + count(src[f], /LPE\.pipeRun\s*\(/g)).join(' '));

  /* the one straight section that is allowed has to be capped at both ends,
     or it is just a bar clipped by the panel edge */
  const uncapped = LEVELS.filter(f => count(src[f], /LPE\.pipeRun\s*\(/g) === 1
                                   && count(src[f], /LPE\.penetration\s*\(/g) < 2);
  check('a lone pipeRun section is capped at both ends', uncapped.length === 0,
    uncapped.length ? uncapped.join(', ') : 'capped or not used');

  /* anything with a joint declares the joint */
  const jointed = LEVELS.filter(f => /PIPE_Y|LAY\.hdr|MAIN_Y/.test(src[f])
                                  && count(src[f], /LPE\.pipeRun\s*\(/g) === 0);
  const undeclared = jointed.filter(f => !/LPE\.piping\s*\(/.test(src[f]));
  check('every level with a jointed run declares it through piping()',
    undeclared.length === 0,
    undeclared.length ? undeclared.join(', ') : jointed.length + ' levels declare runs');

  /* a run may not begin off the panel: the feed enters through a wall */
  const offPanel = [];
  for (const f of LEVELS) {
    const re = /pts:\s*\[\s*\[\s*(-?\d+)\s*,/g;
    let m;
    while ((m = re.exec(src[f]))) if (+m[1] <= 0) offPanel.push(f + ' x=' + m[1]);
  }
  check('no declared run starts off the left edge', offPanel.length === 0,
    offPanel.length ? offPanel.join(', ') : 'all runs start inside');

  /* Level 3's two bed branches were declared at the beds' own heights with
     nothing joining them to the main, so they hung in the panel - which is
     most of what "the piping is way off" looked like on screen.

     This is deliberately a specific check, not a general connectivity one.
     A general rule has to compare real coordinates, and these specs are
     expressions (ternaries, layout lookups) that only resolve at runtime;
     the first cut compared them as text and flagged nine legitimate starts
     - a wall entry, a tank outlet, both sides of a component - while the
     thing it was written to catch is simply that a branch leaving the main
     must leave it AT the main. Level 4's counterpart is the "header run
     ends on the nozzle rail" check above. */
  const l3 = src['level3.html'];
  const bedRuns = (l3.match(/\{pts:\[\[SP\.x,[^\]]*\],\[SP\.x,bed[AB]Y\(\)\],\[LAY\.bed[AB]\.x,bed[AB]Y\(\)\]\]/g) || []);
  const fromMain = bedRuns.filter(r => /\[\[SP\.x,PIPE_Y\]/.test(r));
  check('level 3 bed branches leave the main centreline',
    bedRuns.length === 2 && fromMain.length === 2,
    bedRuns.length + ' branch runs, ' + fromMain.length + ' rooted on PIPE_Y');

  /* a level that lets fluid into a pipe uses the shared marker, via Line
     or Cutaway - it does not stamp its own carrier specks */
  const ownFluid = LEVELS.filter(f =>
    /rgba\(\s*54\s*,\s*224\s*,\s*255/.test(src[f]) && !/new LPE\.Line/.test(src[f]));
  check('no level stamps its own carrier fluid', ownFluid.length === 0,
    ownFluid.length ? ownFluid.join(', ') : 'all carry fluid through Line');

  /* Level 4's whole point is that the header FEEDS the misters, so the run
     has to arrive at the rail the nozzles hang off. It used to stop on the
     header centreline, 40px above it. Both ends are read out of the source
     and compared, rather than trusting that a run exists. */
  const l4 = src['level4.html'];
  const rail = /RAIL_Y\s*=\s*\(\)\s*=>\s*LAY\.pod\.y\s*\+\s*(\d+)/.exec(l4);
  const run  = /lines:\s*\[\{\s*pts:\s*\[([\s\S]*?)\]\s*,\s*r:/.exec(l4);
  const pts  = run ? run[1].match(/\[[^\[\]]+\]/g) || [] : [];
  const last = pts.length ? pts[pts.length - 1] : '';
  const ryIsRail = /\bry\s*=\s*RAIL_Y\(\)/.test(l4);
  check('level 4 header run ends on the nozzle rail',
    !!rail && ryIsRail && /,\s*ry\s*\]$/.test(last) && pts.length >= 4,
    rail ? 'rail = pod.y+' + rail[1] + ', last point ' + (last || 'none') : 'no RAIL_Y');
  check('level 4 nozzles hang off that same rail',
    /fillRect\(nx-3,\s*RAIL_Y\(\)\s*\+\s*R_HDR/.test(l4), 'nozzle bodies on RAIL_Y');
  check('level 4 lays the pod before the header',
    /drawPod\(g,s\);\s*drawHeader\(g,s\)/.test(l4),
    'chamber cannot close the rail bore');
}

/* ------------------------------------------------------------
   N+1. DOES A STRAY CLICK EAT THE LESSON?

   Both holds listened for a click on the whole layer, so operating the
   rig - opening a valve, picking a spare, finishing a drag - dismissed
   the lesson you had not read yet. The hint has always been drawn as a
   button; it has to be the only thing that acts like one.
   ------------------------------------------------------------ */
{
  const eng = fs.readFileSync('engine.js', 'utf8');
  const css = fs.readFileSync('engine.css', 'utf8');
  check('a lesson beat advances only on its own control',
    /e\.target\.closest\('\.beat-hint'\)/.test(eng),
    'click gated on .beat-hint');
  check('a brief card advances only on its own control',
    /querySelector\('\.go-hint'\)/.test(eng) &&
    !/els\.forEach\(e=>e\.addEventListener\('click',next\)\)/.test(eng),
    'click gated on .go-hint');
  check('both controls are drawn as controls',
    /\.beat-hint\{[^}]*cursor:pointer/.test(css) && /\.go-hint\{[^}]*cursor:pointer/.test(css),
    'bordered, amber, pointer');
  check('the keyboard still advances both',
    /e\.key!=='Enter' && e\.key!==' '/.test(eng) &&
    /e\.key==='Enter'\|\|e\.key===' '/.test(eng),
    'ENTER and SPACE');
}

/* ------------------------------------------------------------
   N+2. CAN A LEVEL LOSE A LESSON?

   While a beat is on screen the simulation keeps running, so the NEXT
   step's ok() is still being polled and its watch timer still running
   down - behind text the player has not finished reading. When it
   expires, SH.beat() is called mid-hold, refuses, and is dropped. If
   the level has already advanced its step counter, that lesson is gone
   and play jumps to the step after it.

   Level 4 did exactly that: steps 1 and 2 share an ok(), so it ALWAYS
   skipped the beat that explains cavitation - the point of the level.
   Found by playing it; nothing in the build had noticed, because every
   check only ever asked whether the level loaded.
   ------------------------------------------------------------ */
{
  const LEVELS = ['level0.html','level1.html','level2.html',
                  'level3.html','level4.html'];
  const unguarded = [], blind = [];
  for (const f of LEVELS) {
    /* Comments stripped FIRST. Twice now a check has been satisfied by
       the comment explaining the bug it was written to catch. */
    const src = fs.readFileSync(f, 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
    /* Anchor on the POLL ITSELF - the ok() call - not on the file and not
       on the first mention of STEPS. Searching the whole source was
       satisfied by say()'s own guard, which every level has, so it passed
       with the loop wide open; anchoring on the first STEPS[...] instead
       landed on a declaration and failed two levels that are correct. */
    const m = /(?:STEPS\[(?:si|step)\]|\bst)\.ok\(/.exec(src);
    if (!m) continue;                                     // no stepped script
    const before = src.slice(Math.max(0, m.index - 300), m.index);
    if (!/SH\.holding/.test(before)) unguarded.push(f);
    /* and if it keeps its own counter, it may only advance on a beat
       that was actually accepted */
    if (/\bsi\+\+/.test(src) && !/if\(SH\.beat\([\s\S]{0,80}?\)\) si\+\+/.test(src))
      blind.push(f);
  }
  check('no level polls its next step while a lesson is held',
    unguarded.length === 0,
    unguarded.length ? unguarded.join(', ') : LEVELS.length + ' levels guarded');
  check('no level advances past a beat that was refused',
    blind.length === 0,
    blind.length ? blind.join(', ') : 'si++ gated on SH.beat()');
  check('beat() reports whether it took',
    /if\(S\._holding\) return false;/.test(fs.readFileSync('engine.js','utf8')),
    'returns false when refused');
}

/* ------------------------------------------------------------
   N+3. IS ANY CHECK SILENTLY DEAD?

   Three times now a check has been disabled by a control character
   written into its own regex: NUL twice, and 0x08 twice more in this
   file - "\b" means BACKSPACE in a non-raw string, not a word
   boundary. A regex carrying a literal 0x08 can never match, so the
   check it belongs to is always-true and the thing it guards is
   unguarded. One of them was the check proving level 0 had been cut
   down to a single act.

   Nothing catches this by reading the output: a dead check prints the
   same "ok" as a live one. So the files are scanned for the bytes.
   ------------------------------------------------------------ */
{
  const FILES = ['verify.js','check-fit.js','build.js','engine.js','engine.css',
                 'fluids.js','sizing.js','reference/crosscheck.js',
                 'level0.html','level1.html','level2.html','level3.html',
                 'level4.html','trainer.html'];
  const dirty = [];
  for (const f of FILES) {
    const b = fs.readFileSync(f);
    for (let i = 0; i < b.length; i++) {
      const c = b[i];
      /* tab, LF and CR are the only control bytes any of these may hold */
      if (c < 0x20 && c !== 0x09 && c !== 0x0a && c !== 0x0d) {
        dirty.push(f + ' 0x' + c.toString(16).padStart(2,'0') +
                   ' at byte ' + i);
        break;
      }
    }
  }
  check('no source carries a stray control byte', dirty.length === 0,
    dirty.length ? dirty.join('; ') : FILES.length + ' files clean');
}

/* ------------------------------------------------------------
   N+4. DOES A BENCH SEGMENT START FROM A KNOWN BENCH?

   LPE.trainer() resets the bench when a level calls it, but
   nextSegment() did not, so the second and later segments of a queue
   inherited whatever the last one left set. Any first step whose
   condition was ALREADY satisfied then fired on frame one and its
   instruction was never shown: running flow -> bore left the valve at
   82%, so "Open the valve into the marked band" was skipped outright
   and the player was dropped into a lesson about something they had
   not done. Reported as pipe bore being stuck.
   ------------------------------------------------------------ */
{
  const tr = fs.readFileSync('trainer.html', 'utf8');
  const fn = tr.slice(tr.indexOf('function nextSegment()'),
                      tr.indexOf('function nextStepsOrSegment()'));
  const keys = ['flow','temp','fluid','section','b1','b2'];
  const missing = keys.filter(k => !new RegExp(k + '\s*:').test(fn));
  check('each bench segment starts from a reset bench',
    fn.indexOf('Object.assign(B,') >= 0 && missing.length === 0,
    missing.length ? 'not reset: ' + missing.join(', ') : keys.length + ' fields reset');
}

const pad = Math.max(...results.map(r => r.name.length));
console.log('');
for (const r of results)
  console.log('  ' + (r.ok ? 'ok  ' : 'FAIL') + '  ' + r.name.padEnd(pad) + '  ' + (r.detail || ''));
console.log('\n  ' + (FAIL ? FAIL + ' CHECK(S) FAILED' : results.length + ' checks passed') + '\n');
process.exit(FAIL ? 1 : 0);
