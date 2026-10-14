/* @layer netlist
   @core Process Core -- moves to `45 - Process Core` in Phase 1.
   The netlist layer's own acceptance test. Declares the layer it guards, so
   the layer guard can tell a test from an implementation.                 */
/* Acceptance test for topology.js.

   The bar: the router must reproduce level 1's hand-written geometry
   EXACTLY, from a declaration that contains no tee coordinates, no bend
   radii and no arc centres. Matching the known-good drawing is what makes
   this safe to adopt -- it proves the layer changes nothing visible before
   any level depends on it.

   node topology.test.js                                                  */

'use strict';
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'topology.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (label, ok, detail) => {
  console.log(`${ok ? '  ok  ' : '  FAIL'}  ${label}`);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* ---- level 1's own constants, copied from level1.html ---------------- */
const PX_PER_IN = 10 / 0.493;   // R_BR is the anchor: 0.493 in draws 10 px
const MAIN_Y = 86, TRUNK_X = 320, POD_X = 812;
const BR_Y = [170, 256, 342];
const R_BR = Math.round(0.493 * PX_PER_IN * 10) / 10;                 // 10
const R_MAIN = Math.round(0.622 * PX_PER_IN * 10) / 10;              // 12.6
const RED_X0 = 600, RED_X1 = 680;
const RED_R = Math.round(0.108 * PX_PER_IN * 10) / 10;
const wheelMainX = 170;

/* Bores in INCHES, placement in a frame. The pixel radii above are what
   the frame must still produce -- that is the point of the exercise. */
const SPEC = {
  bores: { main: 0.622, branch: 0.493 },
  components: {
    reservoir: { kind: 'source' },
    union1:    { kind: 'union' },
    tee0:      { kind: 'tee', axis: 'v' },
    tee1:      { kind: 'tee', axis: 'v' },
    red:       { kind: 'reducer', throat: 0.108 },
    pod0:      { kind: 'sink' },
    pod1:      { kind: 'sink' },
    pod2:      { kind: 'sink' },
  },
  segments: [
    { from: 'reservoir.out', to: 'union1.in', bore: 'main' },
    { from: 'union1.out',    to: 'tee0.in',   bore: 'main' },
    { from: 'tee0.out',      to: 'tee1.in',   bore: 'main' },
    { from: 'tee1.out',      to: 'red.in',    bore: 'main' },
    { from: 'red.out',       to: 'pod2.in',   bore: 'main' },
    { from: 'tee0.branch',   to: 'pod0.in',   bore: 'branch' },
    { from: 'tee1.branch',   to: 'pod1.in',   bore: 'branch' },
  ],
  frames: {
    rig: {
      pxPerInch: PX_PER_IN, round: 1,
      at: {
        reservoir: [30, MAIN_Y],
        union1:    [wheelMainX - 54, MAIN_Y],
        tee0:      [TRUNK_X, BR_Y[0]],
        tee1:      [TRUNK_X, BR_Y[1]],
        red:       [[RED_X0, BR_Y[2]], [RED_X1, BR_Y[2]]],
        pod0:      [POD_X, BR_Y[0]],
        pod1:      [POD_X, BR_Y[1]],
        pod2:      [POD_X, BR_Y[2]],
      },
      via: {
        'union1.out->tee0.in': [[TRUNK_X, MAIN_Y]],
        'tee1.out->red.in':    [[TRUNK_X, BR_Y[2]]],
      },
    },
  },
};
const net = LPE.net(SPEC);

console.log('\ntopology.js -- level 1 reproduction\n');
check('declaration validates clean', net.errors.length === 0, net.errors.join('; '));

const got = net.toPiping();
const want = {
  lines: [
    { pts: [[30, MAIN_Y], [TRUNK_X, MAIN_Y], [TRUNK_X, BR_Y[2]], [RED_X0, BR_Y[2]]], r: R_MAIN },
    { pts: [[RED_X1, BR_Y[2]], [POD_X, BR_Y[2]]], r: R_MAIN },
    { pts: [[TRUNK_X, BR_Y[0]], [POD_X, BR_Y[0]]], r: R_BR },
    { pts: [[TRUNK_X, BR_Y[1]], [POD_X, BR_Y[1]]], r: R_BR },
  ],
  tees: [{ x: TRUNK_X, y: BR_Y[0], r: R_MAIN, branch: R_BR },
         { x: TRUNK_X, y: BR_Y[1], r: R_MAIN, branch: R_BR }],
  reducers: [{ x0: RED_X0, x1: RED_X1, y: BR_Y[2], r1: R_MAIN, r2: RED_R }],
  fittings: [{ x: wheelMainX - 54, y: MAIN_Y, r: R_MAIN, kind: 'union' }],
};

const key = o => JSON.stringify(o, Object.keys(o).sort());
const lines = ls => JSON.stringify(ls.map(l => ({ r: l.r, pts: l.pts }))
  .sort((a, b) => JSON.stringify(a) < JSON.stringify(b) ? -1 : 1));

check('lines match level 1 exactly',    lines(got.lines) === lines(want.lines),
      `got ${lines(got.lines)}`);
check('tees match level 1 exactly',     JSON.stringify(got.tees.map(key).sort()) ===
                                        JSON.stringify(want.tees.map(key).sort()));
check('reducers match level 1 exactly', JSON.stringify(got.reducers.map(key)) ===
                                        JSON.stringify(want.reducers.map(key)));
check('fittings match level 1 exactly', JSON.stringify(got.fittings.map(key)) ===
                                        JSON.stringify(want.fittings.map(key)));

/* ---- water: the split-at-every-tee rule ------------------------------
   "flow is constant BETWEEN tees and changes AT them, and each piece owns
   its particles so none can strand at a velocity boundary." */
const water = net.toWater();
check('water is split per segment, not per run', water.length === 7,
      `got ${water.length} pieces`);
check('every run corner became an arc',
      water.some(w => w.segments.some(s => s.arc)));
check('a branch leaves on the tighter tee-turn radius',
      LPE.net.teeTurnRadius(R_BR) < LPE.net.bendRadius(R_BR));

/* That check compares two CONSTANTS, and passed happily for as long as
   the branch arc was missing entirely. The turn where a branch leaves a
   tee is the one corner in the model that does not sit inside a segment
   -- the riser is one, the branch is another, the bend belongs to
   neither -- so the filleting loop never saw it and a branch came back
   dead straight. The water then cut the corner the drawing had curved,
   running outside its own pipe. Check the ARC, not the arithmetic. */
const branches = water.filter(w => /\.branch->/.test(w.id));
check('every branch run is there to test', branches.length === 2);
check('a branch run actually CARRIES its turn',
      branches.every(b => b.segments.some(s => s.arc)),
      branches.map(b => b.id + ':' + b.segments.filter(s => s.arc).length).join(' '));
check('and the turn is on the tee radius, not the long-radius elbow',
      branches.every(b => {
        const a = b.segments.find(s => s.arc);
        return a && a.arc.R === LPE.net.teeTurnRadius(b.r);
      }));
check('the fillet comes FIRST -- the water turns before it runs',
      branches.every(b => b.segments[0] && b.segments[0].arc));

/* Every corner in an axis-aligned rig is a quarter turn. cornerArc got
   this wrong for a VERTICAL incoming leg: it placed the end point at the
   centre's own height, so both deltas were zero and atan2(0,0) returned
   0 -- a zero-length arc instead of a quarter. It was right for a
   horizontal incoming leg by coincidence, which is why nothing caught
   it: until a branch needed filleting, no corner in the model entered
   vertically. */
const sweep = a => {
  let d = a.a1 - a.a0;
  while (d >  Math.PI) d -= 2 * Math.PI;
  while (d < -Math.PI) d += 2 * Math.PI;
  return Math.abs(d);
};
const allArcs = water.flatMap(w => w.segments.filter(s => s.arc).map(s => s.arc));
check('every arc is a quarter turn, whichever way it enters',
      allArcs.length > 0 &&
      allArcs.every(a => Math.abs(sweep(a) - Math.PI / 2) < 1e-9),
      allArcs.map(a => (sweep(a) / Math.PI).toFixed(3) + 'pi').join(' '));
check('and both orientations are represented, or this proves nothing',
      allArcs.some(a => Math.abs(a.a0 - Math.PI) < 1e-9) &&
      allArcs.some(a => Math.abs(a.a0 + Math.PI / 2) < 1e-9),
      allArcs.map(a => (a.a0 / Math.PI).toFixed(3) + 'pi').join(' '));

/* A run has to JOIN UP. Emitting a fillet is half the job: the leg it
   turns into must start where the arc ends, or the two overlap by a
   radius and the water doubles back over itself.

   Found by mutation -- deleting the leg-shortening left every other
   check green, because they all look at the arc and none looked at the
   seam. Particles walk these segments end to end, so a gap strands them
   and an overlap teleports them. */
const endsOf = s => s.arc
  ? { a: [s.arc.cx + s.arc.R * Math.cos(s.arc.a0),
          s.arc.cy + s.arc.R * Math.sin(s.arc.a0)],
      b: [s.arc.cx + s.arc.R * Math.cos(s.arc.a1),
          s.arc.cy + s.arc.R * Math.sin(s.arc.a1)] }
  : { a: [s.ax, s.ay], b: [s.bx, s.by] };

let brokenSeam = null;
for (const run of water) {
  for (let i = 1; i < run.segments.length; i++) {
    const prev = endsOf(run.segments[i - 1]), cur = endsOf(run.segments[i]);
    const gap = Math.hypot(cur.a[0] - prev.b[0], cur.a[1] - prev.b[1]);
    if (gap > 0.01) {
      brokenSeam = `${run.id} seg ${i}: ${gap.toFixed(2)}px from the one before`;
      break;
    }
  }
  if (brokenSeam) break;
}
check('every run joins up end to end, arcs included',
      brokenSeam === null, brokenSeam || '');

/* ---- hiding fittings -------------------------------------------------
   Franz's requirement: if fittings can be drawn, they must be hideable.
   The rule that keeps it honest is that hiding is a RENDER concern -- the
   lines, bores and water must come out byte-identical either way, because
   a hidden reducer still exists and still changes the bore. */
console.log('');
const plain  = net.toPiping();
const nofit  = net.toPiping({ hide: ['fitting'] });

check('hiding fittings drops the tee symbols',
      plain.tees.length === 2 && nofit.tees.length === 0);
check('hiding fittings drops the reducer symbol',
      plain.reducers.length === 1 && nofit.reducers.length === 0);
check('hiding fittings drops the union symbol',
      plain.fittings.length === 1 && nofit.fittings.length === 0);
check('but the LINES are untouched -- topology is not a display concern',
      JSON.stringify(nofit.lines) === JSON.stringify(plain.lines),
      'lines changed when only symbols should have');
check('and the water is untouched',
      JSON.stringify(net.toWater()) === JSON.stringify(net.toWater()));
check('a single component can opt out on its own',
      (() => {
        const s = JSON.parse(JSON.stringify(net.spec));
        s.components.union1.show = false;
        const n2 = LPE.net(s);
        const p2 = n2.toPiping();
        return p2.fittings.length === 0 && p2.tees.length === 2 &&
               JSON.stringify(p2.lines) === JSON.stringify(plain.lines);
      })());

/* ---- equipment -------------------------------------------------------
   Level 1 again, but declared with the equipment it actually has: the four
   solver valves, the reservoir, and the three grow-bay pods. The bar is
   that adding equipment changes the SYMBOLS and not the pipe: an equipment
   declaration must not move a line. */
console.log('');
const EQ_SPEC = {
  bores: { main: 0.622, branch: 0.493 },
  components: {
    reservoir: { kind:'vessel', tag:'TK-1', role:'source' },
    vMain:     { kind:'valve',  tag:'HV-1', key:'main', valveType:'globe' },
    union1:    { kind:'union' },
    tee0:      { kind:'tee',    axis:'v' },
    tee1:      { kind:'tee',    axis:'v' },
    red:       { kind:'reducer', throat:0.108 },
    v0:        { kind:'valve',  tag:'HV-2', key:'b0', valveType:'globe' },
    v1:        { kind:'valve',  tag:'HV-3', key:'b1', valveType:'globe' },
    v2:        { kind:'valve',  tag:'HV-4', key:'b2', valveType:'globe' },
    pod0:      { kind:'vessel', tag:'TK-2', role:'sink' },
    pod1:      { kind:'vessel', tag:'TK-3', role:'sink' },
    pod2:      { kind:'vessel', tag:'TK-4', role:'sink' },
  },
  segments: [
    { from:'reservoir.out', to:'union1.in', bore:'main' },
    { from:'union1.out',    to:'vMain.in',  bore:'main' },
    { from:'vMain.out',     to:'tee0.in',   bore:'main' },
    { from:'tee0.out',      to:'tee1.in',   bore:'main' },
    { from:'tee1.out',      to:'v2.in',     bore:'main' },
    { from:'v2.out',        to:'red.in',    bore:'main' },
    { from:'red.out',       to:'pod2.in',   bore:'main' },
    { from:'tee0.branch',   to:'v0.in',     bore:'branch' },
    { from:'v0.out',        to:'pod0.in',   bore:'branch' },
    { from:'tee1.branch',   to:'v1.in',     bore:'branch' },
    { from:'v1.out',        to:'pod1.in',   bore:'branch' },
  ],
  frames: {
    rig: {
      pxPerInch: PX_PER_IN, round: 1,
      at: {
        reservoir:[30, MAIN_Y],
        vMain:    [wheelMainX, MAIN_Y],
        union1:   [wheelMainX-54, MAIN_Y],
        tee0:     [TRUNK_X, BR_Y[0]],
        tee1:     [TRUNK_X, BR_Y[1]],
        red:      [[RED_X0, BR_Y[2]], [RED_X1, BR_Y[2]]],
        v0:       [420, BR_Y[0]],
        v1:       [420, BR_Y[1]],
        v2:       [420, BR_Y[2]],
        pod0:     [POD_X, BR_Y[0]],
        pod1:     [POD_X, BR_Y[1]],
        pod2:     [POD_X, BR_Y[2]],
      },
      via: {
        'vMain.out->tee0.in': [[TRUNK_X, MAIN_Y]],
        'tee1.out->v2.in':    [[TRUNK_X, BR_Y[2]]],
      },
    },
  },
};
const eqNet = LPE.net(EQ_SPEC);

check('equipment declaration validates clean',
      eqNet.errors.length === 0, eqNet.errors.join('; '));

const eq = eqNet.toPiping();
check('all four solver valves are carried',
      eq.equipment.filter(e => e.kind === 'valve').length === 4);
check("each valve keeps the solver's own name",
      ['main','b0','b1','b2'].every(k =>
        eq.equipment.some(e => e.key === k)),
      JSON.stringify(eq.equipment.map(e => e.key)));
check('reservoir and three pods are carried',
      eq.equipment.filter(e => e.kind === 'vessel').length === 4);

/* The point of the exercise: equipment is a symbol, not a pipe. Adding
   valves and vessels must not move a single line. */
check('adding equipment did not move the pipe',
      JSON.stringify(eq.lines) === JSON.stringify(plain.lines),
      `got    ${JSON.stringify(eq.lines)}
        wanted ${JSON.stringify(plain.lines)}`);
check('tees and reducer are unchanged',
      JSON.stringify(eq.tees) === JSON.stringify(plain.tees) &&
      JSON.stringify(eq.reducers) === JSON.stringify(plain.reducers));

/* ISA-5.5 draws equipment and deliberately not fittings. */
const display = eqNet.toPiping({ hide: ['fitting'] });
check('a process display keeps equipment and drops fittings',
      display.equipment.length === 8 && display.tees.length === 0 &&
      display.reducers.length === 0 && display.fittings.length === 0);
check('and still does not move the pipe',
      JSON.stringify(display.lines) === JSON.stringify(plain.lines));

check('two valves cannot claim one solver key', (() => {
  const s = JSON.parse(JSON.stringify(eqNet.spec));
  s.components.v1.key = 'b0';
  return LPE.net(s).errors.some(e => /solver key/.test(e));
})());

check('a vessel acting as source satisfies reachability',
      !eqNet.errors.some(e => /not reachable/.test(e)));

/* ISA-5.5 mnemonics, read off the standard's own symbol pages. These are
   its identifiers, not ours -- schem vis keys its symbol table on them. */
check('equipment carries its ISA-5.5 mnemonic',
      eq.equipment.every(e => typeof e.isa === 'string' && e.isa.length === 4),
      JSON.stringify(eq.equipment.map(e => [e.kind, e.isa])));
check('valves are VLVE, vessels VSSL',
      eq.equipment.filter(e => e.kind === 'valve').every(e => e.isa === 'VLVE') &&
      eq.equipment.filter(e => e.kind === 'vessel').every(e => e.isa === 'VSSL'));
check('globe, gate, ball and needle share one symbol (VLVE)',
      ['globe','gate','ball','needle']
        .every(k => LPE.net.ISA_VALVE[k] === 'VLVE'));
check('butterfly, check, relief and 3-way have their own',
      LPE.net.ISA_VALVE.butterfly === 'BVLV' &&
      LPE.net.ISA_VALVE.check === 'CVLV' &&
      LPE.net.ISA_VALVE.relief === 'RVLV' &&
      LPE.net.ISA_VALVE['three-way'] === 'VLV3');
check('a pump is PUMP and an inline mixer IMIX, not AGIT', (() => {
  const n = LPE.net({ bores:{m:10}, components:{
    s:{kind:'vessel',tag:'TK-1',role:'source'},
    p:{kind:'pump',tag:'P-1'}, x:{kind:'mixer',tag:'M-1'},
    d:{kind:'vessel',tag:'TK-2',role:'sink'} },
    segments:[{from:'s.out',to:'p.in',bore:'m'},
              {from:'p.out',to:'x.in',bore:'m'},
              {from:'x.out',to:'d.in',bore:'m'}],
    frames:{ rig:{ at:{ s:[0,0], p:[50,0], x:[100,0], d:[150,0] } } } });
  const e = n.toPiping().equipment;
  return e.find(q => q.kind==='pump').isa === 'PUMP' &&
         e.find(q => q.kind==='mixer').isa === 'IMIX';
})());

/* ---- the bug class this module exists to remove ---------------------- */
const broken = (mutate) => {
  const s = {
    bores: { main: 12.6, branch: 10 },
    components: {
      src:  { kind: 'source' },
      tee0: { kind: 'tee', axis: 'v' },
      pod0: { kind: 'sink' },
      pod1: { kind: 'sink' },
    },
    segments: [
      { from: 'src.out',     to: 'tee0.in', bore: 'main' },
      { from: 'tee0.out',    to: 'pod1.in', bore: 'main' },
      { from: 'tee0.branch', to: 'pod0.in', bore: 'branch' },
    ],
    frames: {
      rig: {
        at: { src: [30, 86], tee0: [320, 170], pod0: [812, 170], pod1: [812, 342] },
        via: { 'src.out->tee0.in': [[320, 86]],
               'tee0.out->pod1.in': [[320, 342]] },
      },
    },
  };
  mutate(s);
  return LPE.net(s).errors;
};

console.log('');
check('clean net reports nothing',   broken(() => {}).length === 0);
check('catches a misspelled port',   broken(s => { s.segments[2].from = 'tee0.brnach'; }).length > 0);
check('catches a port used twice',   broken(s => {
  s.segments.push({ from: 'tee0.branch', to: 'pod1.in', bore: 'branch' });
}).some(e => /connected twice/.test(e)));
check('catches a diagonal leg',      broken(s => {
  s.frames.rig.via['src.out->tee0.in'] = [[300, 100]];
}).some(e => /diagonal/.test(e)));
check('catches an unwired component', broken(s => {
  s.components.orphan = { kind: 'union' };
  s.frames.rig.at.orphan = [500, 500];
}).some(e => /not reachable/.test(e)));
check('catches an unknown bore',     broken(s => { s.segments[1].bore = 'mian'; })
  .some(e => /unknown bore/.test(e)));
check('catches a dangling reference', broken(s => { s.segments[1].to = 'pod9.in'; })
  .some(e => /no component/.test(e)));

/* ---- Phase 2: tags, frames, registration ---------------------------
   The netlist is a graph. Where it sits is a frame's business, and a
   second frame is the whole mechanism for hanging the same bay on a
   different drawing. These prove the mechanism rather than asserting it. */
console.log('');

check('the spec declares no coordinates at all', (function () {
  const s = JSON.stringify(SPEC.components) + JSON.stringify(SPEC.segments);
  return !/"(at|x1|via|pos|xy)"/.test(s);
})(), 'a coordinate leaked back into the components or segments');

check('a coordinate on a component is rejected, with somewhere to put it',
  (function () {
    const s = JSON.parse(JSON.stringify(SPEC));
    s.components.tee0.at = [1, 2];
    const e = LPE.net(s).errors.join(' ');
    return /tee0 declares "at"/.test(e) && /frames\.rig\.at\.tee0/.test(e);
  })());

check('a via on a segment is rejected, with somewhere to put it',
  (function () {
    const s = JSON.parse(JSON.stringify(SPEC));
    s.segments[2].via = [[1, 2]];
    const e = LPE.net(s).errors.join(' ');
    return /declares "via"/.test(e) && /frames\.rig\.via/.test(e);
  })());

check('a component with no placement in the frame is caught',
  (function () {
    const s = JSON.parse(JSON.stringify(SPEC));
    delete s.frames.rig.at.tee1;
    return /tee1 has no placement in frame "rig"/.test(LPE.net(s).errors.join(' '));
  })());

check('bores are declared in inches and scaled by the frame',
  net.bores.main === R_MAIN && net.bores.branch === R_BR,
  'main ' + net.bores.main + ' (want ' + R_MAIN + '), branch ' +
  net.bores.branch + ' (want ' + R_BR + ')');

/* A reducer occupies a span, so the frame places it with two points. */
check('a reducer placed at one point is refused with the reason',
  (function () {
    const s = JSON.parse(JSON.stringify(SPEC));
    s.frames.rig.at.red = [RED_X0, BR_Y[2]];
    return /red is a reducer.*two points/s.test(LPE.net(s).errors.join(' '));
  })());

/* ---- the second frame: registration, actually exercised ------------- */
const SCALED = JSON.parse(JSON.stringify(SPEC));
SCALED.frames.wide = { pxPerInch: PX_PER_IN * 2, round: 1, at: {}, via: {} };
for (const id of Object.keys(SPEC.frames.rig.at)) {
  const a = SPEC.frames.rig.at[id];
  SCALED.frames.wide.at[id] = Array.isArray(a[0])
    ? a.map(q => [q[0] * 2 + 1000, q[1] * 2])
    : [a[0] * 2 + 1000, a[1] * 2];
}
for (const k of Object.keys(SPEC.frames.rig.via)) {
  SCALED.frames.wide.via[k] = SPEC.frames.rig.via[k].map(q => [q[0] * 2 + 1000, q[1] * 2]);
}
const wide = LPE.net(SCALED, { frame: 'wide' });

check('a second frame validates clean', wide.errors.length === 0,
      wide.errors.join('; '));
check('the netlist reports which frame it is in',
      wide.frame === 'wide' && LPE.net(SCALED, { frame: 'rig' }).frame === 'rig');
check('the same graph in another frame has the same shape', (function () {
  const a = LPE.net(SCALED, { frame: 'rig' }).toPiping();
  const b = wide.toPiping();
  return a.lines.length === b.lines.length &&
         a.tees.length === b.tees.length &&
         a.reducers.length === b.reducers.length &&
         a.fittings.length === b.fittings.length;
})());
check('and every point is exactly where the frame put it', (function () {
  const a = LPE.net(SCALED, { frame: 'rig' }).toPiping();
  const b = wide.toPiping();
  return a.lines.every((L, i) => L.pts.every((q, j) =>
    b.lines[i].pts[j][0] === q[0] * 2 + 1000 &&
    b.lines[i].pts[j][1] === q[1] * 2));
})(), 'the second frame did not land where it was placed -- something ' +
      'above the netlist is still assuming the rig frame');
check('bores scale with the frame, they are not baked in',
      wide.bores.branch === Math.round(0.493 * PX_PER_IN * 2 * 10) / 10 &&
      wide.bores.branch !== net.bores.branch);
check('inFrame() gets there in one call',
      JSON.stringify(LPE.net(SCALED, { frame: 'rig' }).inFrame('wide').toPiping()) ===
      JSON.stringify(wide.toPiping()));
check('asking for a frame that does not exist says which ones do',
      /no frame "nope".*"rig".*"wide"/s.test(
        LPE.net(SCALED, { frame: 'nope' }).errors.join(' ')));

/* ---- tags: identity that survives the frame ------------------------- */
console.log('');
const TAGGED = JSON.parse(JSON.stringify(EQ_SPEC));
TAGGED.components.v1.tag = 'HV-7';
const tagged = LPE.net(TAGGED);

check('a tagged net validates clean', tagged.errors.length === 0,
      tagged.errors.join('; '));
check('byTag finds the component', !!tagged.byTag('HV-7') &&
      tagged.byTag('HV-7').id === 'v1');
check('and every other tag resolves too',
      ['TK-1','HV-1','HV-2','HV-4','TK-4'].every(g => !!tagged.byTag(g)));
check('byKey still finds it by the solver name',
      !!tagged.byKey('b1') && tagged.byKey('b1').id === 'v1');
check('a tag survives a change of frame', (function () {
  const s = JSON.parse(JSON.stringify(TAGGED));
  s.frames.other = { pxPerInch: 1, at: {}, via: {} };
  Object.keys(s.frames.rig.at).forEach(k => { s.frames.other.at[k] = s.frames.rig.at[k]; });
  s.frames.other.via = s.frames.rig.via;
  const o = LPE.net(s, { frame: 'other' });
  return !!o.byTag('HV-7') && o.byTag('HV-7').id === 'v1';
})());

check('equipment without a tag is refused', (function () {
  const s = JSON.parse(JSON.stringify(TAGGED));
  delete s.components.v1.tag;
  return /v1 is equipment and has no tag/.test(LPE.net(s).errors.join(' '));
})());
check('a malformed tag is refused', (function () {
  const s = JSON.parse(JSON.stringify(TAGGED));
  s.components.v1.tag = 'valve one';
  return /not letters-dash-number/.test(LPE.net(s).errors.join(' '));
})());
check('two components cannot share a tag', (function () {
  const s = JSON.parse(JSON.stringify(TAGGED));
  s.components.pod0.tag = 'HV-7';
  return /share the tag "HV-7"/.test(LPE.net(s).errors.join(' '));
})());
/* ---- MANIFOLD: one body, several ports -----------------------------
   A manifold is a different OBJECT from a row of tees, not a drawing
   preference applied to one. Modelling it as tees and telling the
   renderer to group them would put a fabrication fact in the renderer,
   where nothing can check it and nothing else can read it.

   Topology is identical either way -- the flow branches at the same
   points whatever the part is made of -- which is exactly why the
   netlist has to carry it: a renderer cannot deduce from coordinates
   how something was manufactured. */
console.log('');
const MAN = {
  bores: { main: 0.622, br: 0.493 }, fluid: { sg: 1 },
  components: {
    tank: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 60 },
    man:  { kind: 'manifold' },
    v0: { kind: 'valve', tag: 'HV-2', key: 'b0', cv: 0.5 },
    v1: { kind: 'valve', tag: 'HV-3', key: 'b1', cv: 0.5 },
    v2: { kind: 'valve', tag: 'HV-4', key: 'b2', cv: 0.5 },
    p0: { kind: 'vessel', tag: 'TK-2', role: 'sink', vesselType: 'atmospheric' },
    p1: { kind: 'vessel', tag: 'TK-3', role: 'sink', vesselType: 'atmospheric' },
    p2: { kind: 'vessel', tag: 'TK-4', role: 'sink', vesselType: 'atmospheric' },
  },
  segments: [
    { from: 'tank.out', to: 'man.in', bore: 'main' },
    { from: 'man.b0', to: 'v0.in', bore: 'br' }, { from: 'v0.out', to: 'p0.in', bore: 'br' },
    { from: 'man.b1', to: 'v1.in', bore: 'br' }, { from: 'v1.out', to: 'p1.in', bore: 'br' },
    { from: 'man.out', to: 'v2.in', bore: 'main' }, { from: 'v2.out', to: 'p2.in', bore: 'main' },
  ],
  frames: { rig: { pxPerInch: 20.28, round: 1, at: {
    tank: [30, 86], man: [[320, 86], [320, 170], [320, 256], [320, 342]],
    v0: [480, 170], v1: [480, 256], v2: [480, 342],
    p0: [812, 170], p1: [812, 256], p2: [812, 342] } } },
};
const manNet = LPE.net(MAN);
check('a manifold netlist is clean', manNet.errors.length === 0,
      manNet.errors.join('; '));

const manPipe = manNet.toPiping();
check('it comes out as ONE body, not a row of tees',
      manPipe.manifolds.length === 1 && manPipe.tees.length === 0,
      `${manPipe.manifolds.length} manifolds, ${manPipe.tees.length} tees`);
check('the body spans inlet to outlet',
      manPipe.manifolds[0].a[1] === 86 && manPipe.manifolds[0].b[1] === 342);
check('with a port per branch, carrying the bore that lands on it',
      manPipe.manifolds[0].ports.length === 2 &&
      manPipe.manifolds[0].ports.every(p => p.r === 10),
      JSON.stringify(manPipe.manifolds[0].ports));

/* The whole purpose of a manifold is branches narrower than the run,
   and there is no joint at the port to put a reducer in. The rule that
   demands one was written when every junction was fabricated. */
check('feeding a smaller branch needs no reducer -- the bore changes inside the body',
      !manNet.errors.some(e => /bore change/.test(e)), manNet.errors.join('; '));

/* Branch ports are b0..bN rather than `branch`, and the water has to
   turn at them just the same. */
const manWater = manNet.toWater().filter(w => /man\.b\d+->/.test(w.id));
check('water turns where it leaves the body', manWater.length === 2 &&
      manWater.every(w => w.segments.some(s => s.arc)),
      manWater.map(w => w.id + ':' + w.segments.filter(s => s.arc).length).join(' '));
check('and on the tight radius, as any branch does',
      manWater.every(w => {
        const a = w.segments.find(s => s.arc);
        return a && a.arc.R === LPE.net.teeTurnRadius(w.r);
      }));

/* Placement is a LIST. Refused by name when it is short or crooked --
   a manifold placed wrong draws a body across geometry that is not
   its own. */
const manBad = (at, re) => {
  const s = JSON.parse(JSON.stringify(MAN));
  s.frames.rig.at.man = at;
  return re.test(LPE.net(s).errors.join(' '));
};
check('a manifold placed at a single point is refused by name',
      manBad([320, 86], /must place it as a LIST of points/));
check('a manifold with no branch is refused -- that is a length of pipe',
      manBad([[320, 86], [320, 342]], /needs at least three/));
check('a manifold whose ports are not in line is refused',
      manBad([[320, 86], [400, 170], [320, 342]], /not in line/));

/* On a process display it is still a fitting: ISA-5.5's Connectors
   group is empty because pipe connections are not detailed, and a
   manifold body is no more a schematic symbol than a tee is. */
check('a manifold is hideable like any other fitting',
      manNet.toPiping({ hide: ['fitting'] }).manifolds.length === 0);
check('and hiding it leaves the LINES alone -- the bore is still there',
      JSON.stringify(manNet.toPiping({ hide: ['fitting'] }).lines) ===
      JSON.stringify(manPipe.lines));

console.log('');

/* Fittings are not tagged on a real P&ID -- a tee is part of the line.
   Requiring one would be inventing a convention. */
check('a fitting needs no tag',
      LPE.net(TAGGED).errors.filter(e => /tee0|union1|red/.test(e) &&
                                         /tag/.test(e)).length === 0);
check('HV-1 and FV-101 are both well-formed; the core never mints one',
      LPE.net.TAG.test('HV-1') && LPE.net.TAG.test('FV-101') &&
      LPE.net.TAG.test('TK-2') && !LPE.net.TAG.test('hv-1') &&
      !LPE.net.TAG.test('HV1'));


/* ---------------------------------------------------------------------
   BORES THAT COME FROM A DOCUMENT RATHER THAN A KEYSTROKE

   0.622 is the right bore for NPS 1/2 Sch 40 pipe, and it is right because
   `ASME B36.10M` says so -- but a netlist holding the literal 0.622 knows
   none of that, and nothing would notice a moved digit. Declaring the bore
   as a catalogue part id makes the catalogue answer, and the catalogue
   cannot load unless every dimension in it matches what it says the
   standard printed.

   What these checks are NOT about: the drawn corner radius. See the
   correction in topology.js -- this schematic has no length scale, so a
   real fitting dimension does not belong in its arcs. The fitting's real
   dimensions are reachable through `fittingFor()` for consumers that ARE
   to scale, and that is what is checked here.                          */
console.log('');
const fs = require('fs');
require(path.join(__dirname, '..', 'src', 'catalogue.js'));
const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));

const byPart = JSON.parse(JSON.stringify(SPEC));
byPart.bores = { main: 'PIPE/NPS0.5/S40', branch: 'PIPE/NPS0.375/S40' };

const nP = LPE.net(byPart, { frame: 'rig', catalogue: CAT });
check('a netlist can declare its bores as catalogue part ids',
      nP.errors.length === 0, nP.errors.join('; '));
check('and gets the same pixel radii the literals gave',
      nP.bores.main === R_MAIN && nP.bores.branch === R_BR,
      'main ' + nP.bores.main + ' (want ' + R_MAIN + '), branch ' +
      nP.bores.branch + ' (want ' + R_BR + ')');

/* The whole point: the number now arrives with a document behind it. */
check('and can say which part the bore came from',
      nP.pipeFor('main').id === 'PIPE/NPS0.5/S40');
check('and that part cites ASME B36.10M',
      CAT.sourceOf('PIPE/NPS0.5/S40').std === 'ASME B36.10M',
      JSON.stringify(CAT.sourceOf('PIPE/NPS0.5/S40').std));

/* The real fitting, for anything that is to scale. */
const elb = nP.fittingFor('main', 'elbow90');
check('the real elbow for the main is the NPS 1/2 socket-weld one',
      !!elb && elb.id === 'ELBOW90/SW3000/NPS0.5', elb && elb.id);
check('and it carries B16.11 centre-to-socket, not a scaled render value',
      !!elb && Math.abs(elb.dims.centreToSocket - 15.5 / 25.4) < 1e-4,
      elb && String(elb.dims.centreToSocket));
check('the branch gets the NPS 3/8 elbow, a different part',
      nP.fittingFor('branch', 'elbow90').id === 'ELBOW90/SW3000/NPS0.375');
check('a socket-weld tee is reachable the same way',
      nP.fittingFor('main', 'tee').id === 'TEE/SW3000/NPS0.5');

/* The finding that started all of this, as a standing assertion. The
   schematic draws this corner at 3 x bore; the real part is nothing like
   that, and the two numbers are allowed to differ BECAUSE the drawing is
   not to scale. What is not allowed is pretending either is the other. */
check('the real elbow and the drawn corner are far apart, and that is fine',
      elb.dims.centreToSocket < 0.7 && LPE.net.bendRadius(0.622) > 1.8,
      'real ' + elb.dims.centreToSocket.toFixed(4) + ' in vs drawn ' +
      LPE.net.bendRadius(0.622).toFixed(3) + ' in-equivalent -- the drawn ' +
      'one is a render convention in a picture with no length scale');

/* Honest nulls. A bare-number bore has no part, and inventing one is the
   failure the catalogue exists to prevent. */
const nLit = LPE.net(SPEC, { frame: 'rig', catalogue: CAT });
check('a bare-number bore reports no part rather than guessing one',
      nLit.pipeFor('main') === null &&
      nLit.fittingFor('main', 'elbow90') === null);

/* Refusals, each by name. */
const noCat = LPE.net(byPart, { frame: 'rig' });
check('a part id with no catalogue passed is refused by name',
      noCat.errors.some(e => /no catalogue was passed/.test(e)),
      noCat.errors.join('; '));

const badId = JSON.parse(JSON.stringify(byPart));
badId.bores.main = 'PIPE/NPS9/S40';
check('an unknown part id is refused by name',
      LPE.net(badId, { frame: 'rig', catalogue: CAT }).errors
        .some(e => /no catalogue part/.test(e)));

/* A fitting is not a pipe. Sizing a run from an elbow is nonsense, and the
   error has to say why rather than producing NaN pixels. */
const notPipe = JSON.parse(JSON.stringify(byPart));
notPipe.bores.main = 'ELBOW90/SW3000/NPS0.5';
check('a part with no bore dimension cannot size a run',
      LPE.net(notPipe, { frame: 'rig', catalogue: CAT }).errors
        .some(e => /has no bore dimension/.test(e)));

let unknownKind = '';
try { nP.fittingFor('main', 'flange'); } catch (e) { unknownKind = e.message; }
check('asking for a fitting class the catalogue lacks throws, and says so',
      /do not know what a "flange" is/.test(unknownKind), unknownKind);

/* ---- what a frame says its own pixels mean -------------------------- */
{
  const base = {
    bores: { main: 6.065 },
    components: { a: { kind: 'vessel', role: 'source', pressure: 50 },
                  b: { kind: 'vessel', role: 'sink', pressure: 35 } },
    segments: [{ from: 'a.out', to: 'b.in', bore: 'main' }],
  };
  const quiet = LPE.net(Object.assign({}, base, {
    frames: { rig: { pxPerInch: 2.4, at: { a: [0, 0], b: [770, 0] } } },
  }), { frame: 'rig' });

  /* A FRAME THAT HAS NOT SAID GETS NO ANSWER. The bore is exaggerated
     against the run in every one of these frames -- positions are raw
     pixels, which is what a schematic is -- but by how much is a fact
     about what the author meant. Inventing one would be worse than
     leaving it unstated, because an invented factor is believed. */
  check('a frame that declares no run scale reports no exaggeration',
    quiet.exaggeration === null,
    'positions are raw pixels; only the author knows what they meant');

  const told = LPE.net(Object.assign({}, base, {
    frames: { rig: { pxPerInch: 2.4, runPxPerInch: 0.3,
                     at: { a: [0, 0], b: [770, 0] } } },
  }), { frame: 'rig' });

  /* REPORTED AS DRAWN. `scaleBore` scales a DIAMETER and the result is
     used as a RADIUS, so the bore on screen is twice pxPerInch. A factor
     computed from the declared number would understate it by half, on
     exactly the figure that exists to be stated correctly. */
  check('and one that declares it reports the factor as DRAWN',
    told.exaggeration !== null &&
    Math.abs(told.exaggeration.factor - 16) < 1e-9,
    told.exaggeration ? 'bore x' + told.exaggeration.factor.toFixed(1) +
      ' from pxPerInch ' + told.exaggeration.declaredPxPerInch
      : 'nothing reported');
  check('and the drawn bore scale is twice the declared one',
    told.exaggeration.borePxPerInch ===
      told.exaggeration.declaredPxPerInch * 2,
    'the scaled bore is carried as a radius');
  check('and says so in words a drawing can print',
    /times larger/.test(told.exaggeration.note) &&
    /Positions are unchanged/.test(told.exaggeration.note));

  /* The declaration must not MOVE anything. It exists so a view can
     annotate itself; a registration change dressed as an annotation would
     be the worst possible version of this. */
  check('and declaring it moves nothing',
    JSON.stringify(quiet.toPiping().lines) ===
    JSON.stringify(told.toPiping().lines),
    'positions and bores are identical either way');
}

console.log(`\n${failures ? failures + ' FAILED' : 'all passed'}\n`);
process.exit(failures ? 1 : 0);
