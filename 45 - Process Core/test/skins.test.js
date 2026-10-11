/* @layer chrome
   @core Process Core -- the chrome layer's own acceptance test.       */
/* Acceptance test for skins/modern.js.

   THIS TEST DID NOT EXIST, and that is why the bug below shipped.

   Every other layer here is graded. The chrome layer was not, on the
   reasoning that appearance is a thing you look at rather than assert --
   which is true of appearance and false of the CONTRACT the chrome layer
   has with the solver underneath it.

   The bug: dynamics returns `pressure: null` for a DETERMINATE net, and
   says in its own comment that this is deliberate -- a net whose nodes
   are all pinned by boundary conditions has no floating manifold whose
   pressure has to be found, so reporting a number would be inventing a
   reading. The skin guarded `!== undefined`, which null passes, and then
   called `.toFixed` on it.

   Nothing caught it because every rig the core had been driven with was
   a bench loop with a floating manifold. The first REFINERY service --
   a fractionator at 248 psig feeding an absorber at 218, both fixed --
   is determinate, and the entire surface threw on the first frame.

   SO THE BAR FOR THIS FILE: the skin survives every shape of thing the
   solver can hand it, including the ones a teaching bench never
   produces. It is a contract test, not a taste test.               */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
for (const m of ['catalogue', 'sizing', 'trim', 'topology', 'schemvis',
                 'physvis', 'dynamics'])
  require(path.join(__dirname, '..', 'src', m + '.js'));
require(path.join(__dirname, '..', 'skins', 'modern.js'));
const LPE = global.window.LPE;
const S = LPE.skins.modern;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* A canvas that answers every call the skin makes and records nothing it
   does not need to. An unexpected call is a TypeError, which is the
   failure we want -- the same recorder shape the view tests use. */
function recorder() {
  const calls = [];
  const rec = name => function () {
    calls.push([name].concat(Array.prototype.slice.call(arguments)));
    return undefined;
  };
  const g = {
    calls,
    strokeStyle: null, fillStyle: null, lineWidth: 0, font: null,
    lineCap: null, lineJoin: null, globalAlpha: 1, textAlign: null,
    textBaseline: null, miterLimit: 10, lineDashOffset: 0, filter: 'none',
    globalCompositeOperation: 'source-over', shadowBlur: 0, shadowColor: null,
    beginPath: rec('beginPath'), closePath: rec('closePath'),
    moveTo: rec('moveTo'), lineTo: rec('lineTo'), arcTo: rec('arcTo'),
    arc: rec('arc'), ellipse: rec('ellipse'), bezierCurveTo: rec('bezierCurveTo'),
    quadraticCurveTo: rec('quadraticCurveTo'),
    fill: rec('fill'), stroke: rec('stroke'), clip: rec('clip'),
    fillRect: rec('fillRect'), strokeRect: rec('strokeRect'),
    clearRect: rec('clearRect'), rect: rec('rect'), roundRect: rec('roundRect'),
    save: rec('save'), restore: rec('restore'),
    translate: rec('translate'), scale: rec('scale'), rotate: rec('rotate'),
    setTransform: rec('setTransform'), transform: rec('transform'),
    setLineDash: rec('setLineDash'), getLineDash: () => [],
    fillText: rec('fillText'), strokeText: rec('strokeText'),
    measureText: t => ({ width: String(t).length * 6, actualBoundingBoxAscent: 7,
                         actualBoundingBoxDescent: 2 }),
    createLinearGradient: () => ({ addColorStop: rec('addColorStop') }),
    createRadialGradient: () => ({ addColorStop: rec('addColorStop') }),
    createPattern: () => null,
    drawImage: rec('drawImage'),
  };
  return g;
}

/* TRACKED TEXT ARRIVES ONE GLYPH AT A TIME. The skin letter-spaces its
   labels by drawing each character separately, so a readout that plainly
   says MANIFOLD on screen reaches the recorder as M, A, N, I, F, O, L, D.
   Joining with a separator makes that unmatchable -- and worse, it makes
   a NEGATIVE assertion pass for the wrong reason, which is how a test
   quietly stops testing anything. So: concatenate for matching. */
function refusesTo(label, fn, expect) {
  let msg = null;
  try { fn(); } catch (e) { msg = e.message; }
  check(label, msg !== null && msg.indexOf(expect) >= 0,
    msg === null ? 'it was ACCEPTED' : msg);
}

const texts = g => g.calls.filter(c => c[0] === 'fillText')
                          .map(c => String(c[1])).join('');
const readable = g => g.calls.filter(c => c[0] === 'fillText')
                             .map(c => String(c[1])).join(' | ');

/* ---- two rigs, and the difference is the whole point -----------------

   A node only FLOATS if the solver has to find it, and a plain series
   run has no such node: supply, valve, sink are all pinned, so the net
   is determinate and `pressure` is null. It takes a real branch -- a tee
   whose header has to settle somewhere between supply and drain -- to
   produce a manifold pressure at all.

   Which is itself worth knowing, and was the first thing this test got
   wrong: a single valve draining to atmosphere was written here as the
   "has a manifold" case, and it is not one.                          */
function build(spec) {
  const net = LPE.net(spec, { frame: 'rig' });
  if (net.errors.length) throw new Error('netlist: ' + net.errors.join('; '));
  const dyn = LPE.dyn(net, { tau: 0.22 });
  if (dyn.errors.length) throw new Error('dynamics: ' + dyn.errors.join('; '));
  return { net, plan: LPE.schem.plan(net), dyn };
}

/* A branched header: the node between the control valve and the two
   outlets has to find its own pressure. */
const bench = build({
  bores: { main: 2.067 }, fluid: { sg: 1.0 },
  components: {
    src: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 100 },
    mv:  { kind: 'valve', tag: 'HV-1', key: 'm', valveType: 'globe', cv: 12 },
    hdr: { kind: 'tee' },
    b1:  { kind: 'valve', tag: 'HV-2', key: 'a', valveType: 'globe', cv: 6 },
    b2:  { kind: 'valve', tag: 'HV-3', key: 'b', valveType: 'globe', cv: 6 },
    s1:  { kind: 'vessel', tag: 'TK-2', role: 'sink', vesselType: 'atmospheric' },
    s2:  { kind: 'vessel', tag: 'TK-3', role: 'sink', vesselType: 'atmospheric' },
  },
  segments: [
    { from: 'src.out', to: 'mv.in',  bore: 'main' },
    { from: 'mv.out',  to: 'hdr.in', bore: 'main' },
    { from: 'hdr.out', to: 'b1.in',  bore: 'main' },
    { from: 'hdr.branch', to: 'b2.in', bore: 'main' },
    { from: 'b1.out',  to: 's1.in',  bore: 'main' },
    { from: 'b2.out',  to: 's2.in',  bore: 'main' },
  ],
  frames: { rig: { pxPerInch: 2.4, round: 1, at: {
    src: [60, 120], mv: [220, 120], hdr: [380, 120], b1: [520, 120],
    b2: [380, 240], s1: [680, 120], s2: [380, 330] } } },
});
const BENCH_STATE = { m: 0.75, a: 1, b: 1 };

/* The refinery service: both ends pinned, nothing to find. */
const service = build({
  bores: { main: 2.067 }, fluid: { sg: 1.0 },
  components: {
    src: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 100 },
    v1:  { kind: 'valve', tag: 'HV-1', key: 'm', valveType: 'globe', cv: 12 },
    snk: { kind: 'vessel', tag: 'TK-2', role: 'sink', pressure: 70 },
  },
  segments: [{ from: 'src.out', to: 'v1.in', bore: 'main' },
             { from: 'v1.out', to: 'snk.in', bore: 'main' }],
  frames: { rig: { pxPerInch: 2.4, round: 1,
    at: { src: [60, 120], v1: [300, 120], snk: [560, 120] } } },
});

function solved(r, t) {
  const st = r === bench ? Object.assign({}, BENCH_STATE, { m: t }) : { m: t };
  r.dyn.settle(st);
  return r.dyn.solve(st);
}

/* ---- the contract the bug broke -------------------------------------- */
console.log('');
const sBench = solved(bench, 0.75);
const sSvc = solved(service, 0.75);

check('a branched header has a manifold pressure to report',
  typeof sBench.pressure === 'number' && sBench.pressure > 0,
  'pressure ' + JSON.stringify(sBench.pressure) +
  ', determinate ' + sBench.determinate);
check('a service between two fixed pressures reports NULL, by design',
  sSvc.pressure === null && sSvc.determinate === true,
  'pressure ' + JSON.stringify(sSvc.pressure) +
  ', determinate ' + sSvc.determinate);
check('and it still passes flow -- null pressure is not a failed solve',
  sSvc.qTot > 0, 'qTot ' + sSvc.qTot);

/* THE REGRESSION. This threw, every frame, on any determinate net. */
let threw = null;
let g = recorder();
try {
  S.draw(g, { net: service.net, plan: service.plan, width: 900, height: 320,
              solved: sSvc, fullFlow: 20, time: 0 });
} catch (e) { threw = e; }
check('the skin draws a DETERMINATE net without throwing',
  threw === null,
  threw && (threw.message + ' -- this is the bug: dynamics documents ' +
    'pressure as null and the guard tested only for undefined'));
check('and it omits the manifold readout rather than inventing a number',
  threw === null && !/MANIFOLD/.test(texts(g)),
  threw ? 'did not get that far' : readable(g).slice(0, 220));

/* The floating-manifold case must keep its readout -- the fix must not
   have silenced a reading that genuinely exists. */
threw = null;
let gb = recorder();
try {
  S.draw(gb, { net: bench.net, plan: bench.plan, width: 900, height: 320,
               solved: sBench, fullFlow: 20, time: 0 });
} catch (e) { threw = e; }
check('a rig that HAS a manifold pressure still shows it',
  threw === null && /MANIFOLD/.test(texts(gb)),
  threw ? threw.message : readable(gb).slice(0, 220));

/* ---- everything else the solver can hand it --------------------------- */
console.log('');
const SHAPES = [
  ['shut', () => solved(service, 0)],
  ['wide open', () => solved(service, 1)],
  ['mid travel', () => solved(service, 0.5)],
  ['the bench, shut', () => solved(bench, 0)],
  ['the bench, wide open', () => solved(bench, 1)],
];
for (const [name, get] of SHAPES) {
  let e = null;
  try {
    const r = /bench/.test(name) ? bench : service;
    S.draw(recorder(), { net: r.net, plan: r.plan, width: 900, height: 320,
                         solved: get(), fullFlow: 20, time: 1.5 });
  } catch (err) { e = err; }
  check('it draws at ' + name, e === null, e && e.message);
}

/* A caller that supplies nothing must not crash either: the skin's own
   defaults say `solved || {q:{}, qTot:0, pressure:0}`, so that path has
   to hold too. */
threw = null;
try {
  S.draw(recorder(), { net: service.net, plan: service.plan,
                       width: 900, height: 320 });
} catch (e) { threw = e; }
check('and it draws with no solve at all, using its own defaults',
  threw === null, threw && threw.message);

/* ---- the palette is a palette, not a colour --------------------------
   EMERSON is an OBJECT of named brand colours. Reading it as a colour
   string yields "[object Object]", which canvas silently ignores --
   keeping whatever style was in force. That produced a page with the
   wrong colours and no error, so it is worth pinning. */
console.log('');
check('EMERSON is the brand palette, addressed by name',
  typeof S.EMERSON === 'object' && /^#[0-9A-Fa-f]{6}$/.test(S.EMERSON.blue),
  JSON.stringify(S.EMERSON));
check('FACE is a font stack, not a colour',
  typeof S.FACE === 'string' && /sans-serif/.test(S.FACE) &&
  S.FACE.charAt(0) !== '#', S.FACE);
check('the four phys-view roles are supplied ready-made as S.pipe',
  ['body', 'rim', 'light', 'dark'].every(k =>
    /^#[0-9A-Fa-f]{3,6}$/.test(S.pipe[k])), JSON.stringify(S.pipe));
check('and font() takes a type spec, never a bare pixel size',
  /^\d+ \d+px /.test(S.font(S.TYPE.tag)) &&
  /undefined/.test(String(S.font(11))),
  'font(TYPE.tag) = ' + S.font(S.TYPE.tag));

/* ======================= PRO CUTAWAY ==================================

   The see-inside view. Its whole claim is that what moves on screen is
   driven by the flow-field layer rather than by something that merely
   looks like flow, so that is what is tested: a marker on the centreline
   must outrun one near the wall, by the profile's own ratio.          */
console.log('');
require(path.join(__dirname, '..', 'src', 'geometry.js'));
require(path.join(__dirname, '..', 'src', 'flowfield.js'));
require(path.join(__dirname, '..', 'skins', 'procutaway.js'));
const PC = LPE.skins.procutaway;
const FF = LPE.flowfield;

const CAT2 = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
const FP = LPE.geometry.flowPath(CAT2.part('PIPE/NPS10/S40'), { length: 120 });
const ELB = LPE.geometry.flowPath(CAT2.part('ELBOW90/SW3000/NPS0.5'));

{
  const pl = PC.plan(FP, { width: 900, height: 320 });
  check('the cutaway plans a run from real geometry',
    pl.pts.length > 100 && pl.pts.every(p => p.bore > 0),
    pl.pts.length + ' samples, bore ' + pl.pts[0].bore + ' in');

  /* ONE SCALE. A cutaway whose bore is drawn on a different scale from
     its length is the thing this view exists to make unnecessary. */
  const a = pl.toPage(0, 0), b = pl.toPage(10, 0), c = pl.toPage(0, 10);
  check('one scale is applied to length and bore alike',
    Math.abs((b[0] - a[0]) - (c[1] - a[1])) < 1e-9,
    '10 in along is ' + (b[0] - a[0]).toFixed(3) + ' px, 10 in across is ' +
    (c[1] - a[1]).toFixed(3) + ' px');

  /* The wall must fit, not just the centreline. */
  const h = (pl.pts[0].bore / 2) * pl.scale;
  const top = pl.toPage(pl.pts[0].x, pl.pts[0].y)[1] - h;
  check('the drawing leaves room for the WALL, not just the centreline',
    top >= 0 && top < 320, 'top of the bore at y=' + top.toFixed(1));
}

/* ---- the markers are driven by the field ----------------------------- */
{
  const f = FF.field(FP, 3735, { nu: 1.27e-5 });
  const pl = PC.plan(FP, { width: 900, height: 320 });

  const mid = [{ s: 0.5, lane: 0, prev: null }];
  const wall = [{ s: 0.5, lane: 0.9, prev: null }];
  PC.step(mid, f, pl, 0.01, { mix: 0, rand: () => 0.5 });
  PC.step(wall, f, pl, 0.01, { mix: 0, rand: () => 0.5 });
  const dMid = mid[0].s - 0.5, dWall = wall[0].s - 0.5;

  /* 1.39, not a round number: it is profile(0)/profile(0.9) for the
     turbulent case, 1.2245 / 0.881. The first draft of this test asked
     for 1.5, which the physics had no reason to supply. */
  check('a marker on the centreline outruns one near the wall',
    dMid > dWall * 1.3,
    'centreline moved ' + (dMid * 100).toFixed(4) + '% of the run, wall ' +
    (dWall * 100).toFixed(4) + '%');
  check('and by the profile ratio, not a ratio of its own',
    Math.abs((dMid / dWall) - (f.at(60, 0) / f.at(60, 0.9))) < 1e-6,
    'markers move at exactly what flowfield reports -- the picture and ' +
    'the model cannot disagree because there is only one of them');

  /* Wrapping, so a run can be watched for longer than one pass. */
  const far = [{ s: 0.999, lane: 0, prev: null }];
  PC.step(far, f, pl, 1.0, { mix: 0, rand: () => 0.5 });
  check('a marker that runs off the end comes back at the start',
    far[0].s >= 0 && far[0].s < 1, 's = ' + far[0].s.toFixed(4));

  /* Laminar flow must not visibly mix; turbulent must. */
  const lam = FF.field(FP, 3735, { reynolds: 800 });
  const turb = FF.field(FP, 3735, { reynolds: 50000 });
  const mL = [{ s: 0.5, lane: 0.2, prev: null }];
  const mT = [{ s: 0.5, lane: 0.2, prev: null }];
  PC.step(mL, lam, pl, 0.05, { mix: 1, rand: () => 1 });
  PC.step(mT, turb, pl, 0.05, { mix: 1, rand: () => 1 });
  check('laminar flow does not wander across the stream',
    mL[0].lane === 0.2, 'lane ' + mL[0].lane);
  check('and turbulent flow does',
    mT[0].lane > 0.2,
    'lane ' + mT[0].lane.toFixed(4) + ' -- a real distinction, drawn at ' +
    'an amplitude chosen to read rather than measured');
}

/* ---- it draws, and says what it exaggerated -------------------------- */
{
  const pl = PC.plan(ELB, { width: 900, height: 320 });
  const f = FF.field(ELB, 5, { nu: 1.08e-5 });
  const marks = PC.markers(60, () => 0.5);

  let threw = null, g = recorder();
  try {
    PC.draw(g, pl, f, { width: 900, height: 320, markers: marks,
                        title: 'NPS 1/2 socket-weld elbow' });
  } catch (e) { threw = e; }
  check('the cutaway draws an elbow without throwing', threw === null,
    threw && threw.message);
  check('an unmagnified field is declared as unmagnified',
    threw === null && /NOT magnified/.test(texts(g)));

  const big = FF.magnified(f, 40, 'at true speed the markers cross the ' +
    'frame faster than the eye resolves them');
  g = recorder();
  PC.draw(g, pl, big, { width: 900, height: 320, markers: marks });
  check('and a magnified one prints the factor and the reason on the view',
    /magnified 40x/.test(texts(g)) && /faster than the eye/.test(texts(g)),
    'the reader is told what was exaggerated without having to ask');

  check('the geometry layer features are labelled on the drawing',
    /contraction/.test(texts(g)) && /expansion/.test(texts(g)),
    'so the cause sits beside the effect: the fluid speeds up AT the ' +
    'contraction and the reader can see why');
}

/* ---- the half-supplied theme, which is how a view goes black on black */
refusesTo('a theme missing a role is refused rather than defaulted',
  () => PC.theme({ metal: '#111' }), 'no colour for');

/* ---- THE ARCHITECTURAL ASSERTION -------------------------------------
   This file may name colours; that is what a skin is for. It may NOT
   contain physics. The reason LPE's cutaway cannot be graded against a
   published constant is that its 1/7-power law lives in the same file as
   its marker opacity -- there is no seam to test across. This check is
   that seam. */
console.log('');
{
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'skins', 'procutaway.js'), 'utf8');
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
  check('the cutaway contains no velocity profile of its own',
    !/1\s*\/\s*7|Math\.pow\s*\(\s*1\s*-/.test(code) &&
    !/laminar|poiseuille|prandtl/i.test(code),
    'the profile is flowfield.js, where it is graded against 60/49');
  check('and no Reynolds threshold of its own',
    !/2300|4000|reynolds|\bRe\b/i.test(code),
    'where the transition sits is physics, not appearance');
  /* FORWARDING A FLOW IS NOT COMPUTING ONE.

     This used to reject the bare token `gpm`, which caught the valve
     panel for naming the parameter it hands straight to
     flowfield.fieldOfAreas -- the very act of asking the field instead
     of doing the division. The sin is the ARITHMETIC: dividing a flow
     by an area here, or carrying the gallons-to-cubic-feet constant,
     either of which would put a second copy of continuity in a file
     about appearance. So the check now looks for the arithmetic, which
     is what it always meant. */
  check('it asks the field for velocity rather than computing any',
    /field\.at\s*\(/.test(code) &&
    !/448\.831|continuity/i.test(code) &&
    !/gpm\s*[*\/+-]|[*\/+-]\s*gpm/.test(code),
    'the skin may pass a flow along; it may not divide by an area');
  check('and it reads no netlist',
    !/toPiping|components|LPE\.net\b|segments/.test(code));
}



/* ---- the valve section says what the shape says --------------------- */
console.log('');
{
  const PCx = LPE.skins.procutaway;
  const CATx = LPE.catalogue.load(JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
  const Vx = CATx.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
  const WPx = LPE.trim.fromCurve({ curve: Vx.cv,
    characterisedBy: Vx.characterisedBy }).widthProfile();
  const mk = f => LPE.geometry.globeValve({ part: Vx, faceToFace: 29.62,
    lineBore: 10.02, flow: f, widthProfile: WPx.width });

  /* THE LABELS FOLLOW THE CASTING, NOT THE SERVICE.

     Flow-up turns the valve round, so the fluid still enters at the
     left. The skin went on swapping the two words for flow-up, which
     had been right while flow-up was the same picture relabelled --
     so after the mirror it printed "outlet" on the inlet flange. A
     caption that confidently names the wrong end is worse than none,
     and nothing about the drawing looks wrong when it happens. */
  const labelled = f => {
    const gv = mk(f);
    const gx = recorder();
    PCx.drawValve(gx, PCx.planValve(gv, { width: 900, height: 420 }),
                  { width: 900, height: 420, travel: 50 });
    return gx.calls.filter(c => c[0] === 'fillText')
             .map(c => ({ t: String(c[1]), x: c[2] }));
  };
  for (const f of ['down', 'up']) {
    const L2 = labelled(f);
    const inl = L2.filter(q => q.t === 'inlet')[0];
    const out = L2.filter(q => q.t === 'outlet')[0];
    check('flow-' + f + ': the inlet is labelled, and it is on the left',
      !!inl && !!out && inl.x < out.x,
      inl && out ? 'inlet at x ' + Math.round(inl.x) + ', outlet at x ' +
        Math.round(out.x) : 'one of the two labels is missing');
  }

  /* The drillings are flooded, and an unbalanced plug has none to
     flood -- the skin must not invent a hole to fill. */
  const plB = PCx.planValve(mk('down'), { width: 900, height: 420 });
  const rB = PCx.drawBalance(recorder(), plB, 50);
  check('a balanced plug reports flooded drillings',
    rB && rB.holes > 0, rB ? rB.holes + ' holes' : 'nothing reported');
  const un = LPE.geometry.globeValve({ part: Vx, faceToFace: 29.62,
    lineBore: 10.02, flow: 'down', widthProfile: WPx.width,
    balanced: false });
  const rU = PCx.drawBalance(recorder(),
    PCx.planValve(un, { width: 900, height: 420 }), 50);
  check('and an unbalanced plug reports none rather than drawing some',
    rU === null, 'an unbalanced plug is not drilled');
}

/* ---- a parcel of fluid has a SIZE, in inches -------------------------
   Drawn at a fixed number of pixels it does both of the things that
   were complained about: it thins out to sparse dots in a close-up
   and packs into speckle when the view pulls back. So the size is a
   real one and the view scales it -- down to the floor, below which
   there is nothing left to shrink and the population thins instead. */
{
  const SECTION = 71.9, ASSEMBLY = 26.9, THROAT = 180;
  check('a parcel is bigger in a close-up than in the section',
        PC.parcelRadius(THROAT, 0) > PC.parcelRadius(SECTION, 0));
  check('and smaller when the view pulls back',
        PC.parcelRadius(ASSEMBLY, 0) < PC.parcelRadius(SECTION, 0));
  check('fast fluid draws a bigger parcel than still fluid, at one scale',
        PC.parcelRadius(SECTION, 1) > PC.parcelRadius(SECTION, 0));
  check('no parcel is ever drawn smaller than a pixel can show',
        PC.parcelRadius(0.2, 0) >= 0.9 && PC.parcelRadius(1e-6, 1) >= 0.9);

  check('nothing is thinned while the parcels still fit above the floor',
        PC.parcelThinning(SECTION) === 1 && PC.parcelThinning(THROAT) === 1);
  check('once they are on the floor, fewer of them are drawn instead',
        PC.parcelThinning(ASSEMBLY) > 1,
        'otherwise the body of water packs into speckle as it shrinks');
  check('and the thinning grows as the area the floor holds open grows',
        PC.parcelThinning(ASSEMBLY / 2) > PC.parcelThinning(ASSEMBLY));
  check('thinning is a stride, so it is always a whole number of parcels',
        [0.2, 5, ASSEMBLY, SECTION].every(
          q => PC.parcelThinning(q) === Math.round(PC.parcelThinning(q))));
}

/* ---- ground: null means paint none ---------------------------------
   The same contract schem-view and phys-view keep. Written as
   `o.ground || t.panel` it could not be kept -- null is falsy -- and
   the valve painted the panel colour over the whole canvas when asked
   for no ground at all, which wiped out the pipe it had been drawn
   into. */
{
  const rect = [];
  const rec = new Proxy({}, {
    get: function (_, k) {
      if (k === 'canvas') return {};
      if (k === 'measureText') return q => ({ width: String(q).length * 6 });
      if (k === 'fillRect') return (x, y, w, h) => rect.push([x, y, w, h]);
      return function () {};
    },
    set: function () { return true; },
  });
  const CATg = LPE.catalogue.load(JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
  const Vg = CATg.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
  const WPg = LPE.trim.fromCurve({ curve: Vg.cv,
    characterisedBy: Vg.characterisedBy }).widthProfile();
  const gvg = LPE.geometry.globeValve({ part: Vg, faceToFace: 29.62,
    lineBore: 10.02, flow: 'down', widthProfile: WPg.width });
  const pl = PC.planValve(gvg, { width: 900, height: 600 });
  PC.drawValve(rec, pl, { width: 900, height: 600, travel: 50,
    theme: PC.DARK, ground: null, labels: false, caption: false });
  const covered = rect.filter(r => r[2] >= 900 && r[3] >= 600);
  check('ground:null paints no ground at all', covered.length === 0,
        'filled the whole canvas ' + covered.length + ' time(s)');

  rect.length = 0;
  PC.drawValve(rec, pl, { width: 900, height: 600, travel: 50,
    theme: PC.DARK, labels: false, caption: false });
  check('and leaving it out still paints the panel, as before',
        rect.some(r => r[2] >= 900 && r[3] >= 600));
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
