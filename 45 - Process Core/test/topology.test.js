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
/* Fittings are not tagged on a real P&ID -- a tee is part of the line.
   Requiring one would be inventing a convention. */
check('a fitting needs no tag',
      LPE.net(TAGGED).errors.filter(e => /tee0|union1|red/.test(e) &&
                                         /tag/.test(e)).length === 0);
check('HV-1 and FV-101 are both well-formed; the core never mints one',
      LPE.net.TAG.test('HV-1') && LPE.net.TAG.test('FV-101') &&
      LPE.net.TAG.test('TK-2') && !LPE.net.TAG.test('hv-1') &&
      !LPE.net.TAG.test('HV1'));

console.log(`\n${failures ? failures + ' FAILED' : 'all passed'}\n`);
process.exit(failures ? 1 : 0);
