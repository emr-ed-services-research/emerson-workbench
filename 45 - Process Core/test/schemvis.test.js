/* @layer schem-view
   @core Process Core -- moves to `45 - Process Core` in Phase 1.
   The schematic view's own acceptance test. Declares the layer it guards,
   so the layer guard can tell a test from an implementation.              */
/* Acceptance test for schemvis.js -- tier 2, the process display.

   plan() is pure data, so everything that could be wrong is checkable
   here without a canvas: which symbol, what state, where a line breaks.

       node schemvis.test.js                                            */

'use strict';
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'topology.js'));
require(path.join(__dirname, '..', 'src', 'schemvis.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* Level 1's bay, with its real equipment. */
const MAIN_Y = 86, TRUNK_X = 320, POD_X = 812;
const BR_Y = [170, 256, 342];
const net = LPE.net({
  bores: { main: 0.622, branch: 0.493 },
  components: {
    reservoir: { kind: 'vessel', tag: 'TK-1', role: 'source' },
    vMain:     { kind: 'valve',  tag: 'HV-1', key: 'main', valveType: 'globe' },
    tee0:      { kind: 'tee',    axis: 'v' },
    tee1:      { kind: 'tee',    axis: 'v' },
    v0:        { kind: 'valve',  tag: 'HV-2', key: 'b0', valveType: 'globe' },
    v1:        { kind: 'valve',  tag: 'HV-3', key: 'b1', valveType: 'globe' },
    v2:        { kind: 'valve',  tag: 'HV-4', key: 'b2', valveType: 'globe' },
    pod0:      { kind: 'vessel', tag: 'TK-2', role: 'sink' },
    pod1:      { kind: 'vessel', tag: 'TK-3', role: 'sink' },
    pod2:      { kind: 'vessel', tag: 'TK-4', role: 'sink' },
  },
  segments: [
    { from: 'reservoir.out', to: 'vMain.in', bore: 'main' },
    { from: 'vMain.out',     to: 'tee0.in',  bore: 'main' },
    { from: 'tee0.out',      to: 'tee1.in',  bore: 'main' },
    { from: 'tee1.out',      to: 'v2.in',    bore: 'main' },
    { from: 'v2.out',        to: 'pod2.in',  bore: 'main' },
    { from: 'tee0.branch',   to: 'v0.in',    bore: 'branch' },
    { from: 'v0.out',        to: 'pod0.in',  bore: 'branch' },
    { from: 'tee1.branch',   to: 'v1.in',    bore: 'branch' },
    { from: 'v1.out',        to: 'pod1.in',  bore: 'branch' },
  ],
  frames: {
    rig: {
      pxPerInch: 10 / 0.493, round: 1,
      at: {
        reservoir: [30, MAIN_Y],  vMain: [170, MAIN_Y],
        tee0: [TRUNK_X, BR_Y[0]], tee1: [TRUNK_X, BR_Y[1]],
        v0: [480, BR_Y[0]], v1: [480, BR_Y[1]], v2: [480, BR_Y[2]],
        pod0: [POD_X, BR_Y[0]], pod1: [POD_X, BR_Y[1]], pod2: [POD_X, BR_Y[2]],
      },
      via: {
        'vMain.out->tee0.in': [[TRUNK_X, MAIN_Y]],
        'tee1.out->v2.in':    [[TRUNK_X, BR_Y[2]]],
      },
    },
  },
});

console.log('\nschemvis.js -- process display from a netlist\n');
check('the netlist it reads is clean', net.errors.length === 0,
      net.errors.join('; '));

const p = LPE.schem.plan(net, { state: { main: 1, b0: 1, b1: 0, b2: 0 } });
const syms = p.ops.filter(o => o.op === 'symbol');
const lines = p.ops.filter(o => o.op === 'line');

check('every symbol it needed was implemented', p.warnings.length === 0,
      p.warnings.join('; '));
// 4 valves + 4 vessels. The two tees are fittings and have no ISA-5.5
// symbol, which is the whole point of the Connectors group being empty.
check('equipment is drawn, fittings are not',
      syms.length === 8 &&
      syms.filter(s => s.kind === 'valve').length === 4 &&
      syms.filter(s => s.kind === 'vessel').length === 4,
      syms.length + ' symbols');
check('connections are drawn as plain lines', lines.length > 0);

/* ISA-5.5 draws equipment and deliberately not pipe connections. */
check('no fitting is drawn',
      !syms.some(s => ['tee', 'reducer', 'union', 'elbow'].indexOf(s.kind) >= 0));
check('unhiding fittings adds no symbols -- they have none in ISA-5.5',
      LPE.schem.plan(net, { hide: [] })
        .ops.filter(o => o.op === 'symbol').length === syms.length);

/* The standard puts state in the fill: outline closed, solid open. */
const byLabel = l => syms.filter(s => s.label === l)[0];
check('an open valve reads open', byLabel('main').open === true);
check('a shut valve reads closed', byLabel('b1').open === false);
check('equipment with no solver key has no state',
      syms.filter(s => s.kind === 'vessel').every(s => s.open === null));
check('the open threshold is honoured', (function () {
  const q = LPE.schem.plan(net, { state: { b0: 0.4 }, openAt: 0.5 });
  const r = LPE.schem.plan(net, { state: { b0: 0.6 }, openAt: 0.5 });
  const qb = q.ops.filter(o => o.label === 'b0')[0];
  const rb = r.ops.filter(o => o.label === 'b0')[0];
  return qb.open === false && rb.open === true;
})());

/* A fitting that is not drawn must not leave a hole. The reducer's two
   ports are 80 px apart, so bay 3's run arrives as two lines; a display
   that draws no reducer has to join them, or show a connection cut in
   half. Checked on a bare net so the gap is unambiguous. */
{
  const redNet = LPE.net({
    bores: { m: 10 },
    components: {
      a:   { kind: 'vessel',  tag: 'TK-1', role: 'source' },
      red: { kind: 'reducer', throat: 3 },
      b:   { kind: 'vessel',  tag: 'TK-2', role: 'sink' },
    },
    segments: [
      { from: 'a.out',   to: 'red.in', bore: 'm' },
      { from: 'red.out', to: 'b.in',   bore: 'm' },
    ],
    frames: { rig: { at: { a: [0, 50], red: [[100, 50], [180, 50]], b: [300, 50] } } },
  });
  check('the reducer net is clean', redNet.errors.length === 0,
        redNet.errors.join('; '));

  /* Topology must still hand over the gap: hiding is not its business,
     and a hidden reducer still changes the bore. */
  const raw = redNet.toPiping({ hide: ['fitting'] });
  check('topology still hands over two lines, bore change intact',
        raw.lines.length === 2, raw.lines.length + ' lines');
  check('and reports which component it left undrawn',
        raw.undrawn.length === 1 && raw.undrawn[0].kind === 'reducer' &&
        raw.undrawn[0].pts.length === 2,
        JSON.stringify(raw.undrawn));

  const rl = LPE.schem.plan(redNet).ops.filter(o => o.op === 'line');
  check('the display joins across it into one unbroken line',
        rl.length === 1, rl.length + ' lines');
  check('and the undrawn fitting takes up no room in that line',
        rl.length === 1 && JSON.stringify(rl[0].pts) ===
          JSON.stringify([[0, 50], [300, 50]]),
        rl.length === 1 ? JSON.stringify(rl[0].pts) : '');

  /* Tier 3 draws the reducer, so it must get the gap back untouched. */
  const shown = LPE.schem.plan(redNet, { hide: [] })
    .ops.filter(o => o.op === 'line');
  check('showing the fitting restores the gap it occupies',
        shown.length === 2, shown.length + ' lines');
}

/* Level 1's bay has exactly that reducer on bay 3, which is where the
   gap was actually seen. Three branches in, three unbroken lines out. */
check('level 1 bay 3 reads as one run through the reducer', (function () {
  const n2 = LPE.net({
    bores: { main: 12.6, branch: 10 },
    components: {
      src: { kind: 'vessel',  tag: 'TK-1', role: 'source' },
      v:   { kind: 'valve',   tag: 'HV-4', key: 'b2', valveType: 'globe' },
      red: { kind: 'reducer', throat: 2.2 },
      pod: { kind: 'vessel',  tag: 'TK-4', role: 'sink' },
    },
    segments: [
      { from: 'src.out', to: 'v.in',   bore: 'main' },
      { from: 'v.out',   to: 'red.in', bore: 'main' },
      { from: 'red.out', to: 'pod.in', bore: 'main' },
    ],
    frames: { rig: { at: { src: [30, 342], v: [410, 342],
                           red: [[600, 342], [680, 342]], pod: [812, 342] } } },
  });
  const ls = LPE.schem.plan(n2).ops.filter(o => o.op === 'line');
  return ls.length === 1 &&
         JSON.stringify(ls[0].pts) === JSON.stringify([[30, 342], [812, 342]]);
})());

/* A board captions with the tag; a game level captions with the solver's
   own name, because that is what its own instructions say. Neither is
   more correct, so the display chooses. */
check('captions with the solver name by default',
      LPE.schem.plan(net).ops.filter(o => o.op === 'symbol')
        .some(s => s.label === 'main'));
check('labelBy tag captions with the tag instead',
      (function () {
        const s = LPE.schem.plan(net, { labelBy: 'tag' })
          .ops.filter(o => o.op === 'symbol');
        return s.some(x => x.label === 'HV-1') && !s.some(x => x.label === 'main');
      })());
check('a tagged vessel captions too, not just valves',
      LPE.schem.plan(net, { labelBy: 'tag' }).ops
        .filter(o => o.op === 'symbol').some(s => s.label === 'TK-2'));
check('labelBy id falls back to the map key',
      LPE.schem.plan(net, { labelBy: 'id' }).ops
        .filter(o => o.op === 'symbol').some(s => s.label === 'vMain'));

/* ISA-5.5 3.3.1: "use line breaks to indicate that the lines do not
   join... a usual convention is to break the vertical line." */
const crossNet = LPE.net({
  bores: { m: 10 },
  components: {
    a: { kind: 'vessel', tag: 'TK-1', role: 'source' },
    b: { kind: 'vessel', tag: 'TK-2', role: 'sink' },
    c: { kind: 'vessel', tag: 'TK-3', role: 'source' },
    d: { kind: 'vessel', tag: 'TK-4', role: 'sink' },
  },
  segments: [
    { from: 'a.out', to: 'b.in', bore: 'm' },
    { from: 'c.out', to: 'd.in', bore: 'm' },
  ],
  frames: { rig: { at: { a: [0, 100], b: [200, 100], c: [100, 0], d: [100, 200] } } },
});
const breaks = LPE.schem.plan(crossNet).ops.filter(o => o.op === 'break');
check('a genuine crossing is broken', breaks.length === 1,
      breaks.length + ' breaks');
check('the break sits on the crossing point',
      breaks.length === 1 && breaks[0].x === 100 && breaks[0].y === 100);
check('it is the VERTICAL line that breaks, per 3.3.1',
      breaks.length === 1 && breaks[0].axis === 'v');
check('a tee is a joint, not a crossing, so nothing breaks',
      p.ops.filter(o => o.op === 'break').length === 0);

/* Symbols and mnemonics */
check('valves use VLVE',
      syms.filter(s => s.kind === 'valve').every(s => s.isa === 'VLVE'));
check('vessels use VSSL',
      syms.filter(s => s.kind === 'vessel').every(s => s.isa === 'VSSL'));

/* Built from the netlist's own maps rather than a list kept by hand --
   a hand-kept list is a list somebody forgets to extend, which is
   exactly how six Storage mnemonics went unimplemented without any
   check noticing. */
const needed = Object.keys(LPE.net.ISA_VALVE).map(k => LPE.net.ISA_VALVE[k])
  .concat(Object.keys(LPE.net.ISA_VESSEL).map(k => LPE.net.ISA_VESSEL[k]))
  .concat(['PUMP', 'IMIX']);
/* ---- ISA-5.5 3.3.2 Containers and vessels, read 2026-10-09 --------
   The Storage subgroup on the standard's pages 18-19. Until these were
   read, every tank in every rig was a generic VSSL. */
check('a vessel says which of the group it is',
      LPE.net.ISA_VESSEL.atmospheric === 'ATNK' &&
      LPE.net.ISA_VESSEL.bin === 'BINN' &&
      LPE.net.ISA_VESSEL.sphere === 'PVSL' &&
      LPE.net.ISA_VESSEL['weigh-hopper'] === 'WHPR' &&
      LPE.net.ISA_VESSEL['floating-roof'] === 'FTNK' &&
      LPE.net.ISA_VESSEL['gas-holder'] === 'GHDR');
check('and the Process subgroup is in the same map',
      LPE.net.ISA_VESSEL.reactor === 'RCTR' &&
      LPE.net.ISA_VESSEL.tower === 'DTWR' &&
      LPE.net.ISA_VESSEL.jacketed === 'JVSL');
check('VSSL is still the default -- the standard calls it the generic one',
      LPE.net.ISA_VESSEL.vessel === 'VSSL');
check('an untyped vessel is still VSSL, so nothing already drawn moves',
      (function () {
        const s = JSON.parse(JSON.stringify(net.spec));
        const e = LPE.net(s).toPiping().equipment
          .filter(x => x.kind === 'vessel');
        return e.length > 0 && e.every(x => x.isa === 'VSSL');
      })());
check('a vessel typed atmospheric emits ATNK and draws it',
      (function () {
        const s = JSON.parse(JSON.stringify(net.spec));
        s.components.pod0.vesselType = 'atmospheric';
        const n2 = LPE.net(s);
        const p2 = LPE.schem.plan(n2);
        return n2.errors.length === 0 && p2.warnings.length === 0 &&
               p2.ops.some(o => o.op === 'symbol' && o.isa === 'ATNK');
      })());
check('an unknown vesselType falls back to the generic rather than vanishing',
      (function () {
        const s = JSON.parse(JSON.stringify(net.spec));
        s.components.pod0.vesselType = 'not-a-real-kind';
        return LPE.net(s).toPiping().equipment
          .filter(x => x.id === 'pod0')[0].isa === 'VSSL';
      })());

const missing = needed.filter(m => !LPE.schem.SYMBOLS[m]);
check('a symbol exists for every mnemonic the netlist can emit',
      missing.length === 0, 'missing: ' + missing.join(', '));

check('an unimplemented mnemonic warns rather than silently drawing nothing',
      (function () {
        const saved = LPE.schem.SYMBOLS.VSSL;
        delete LPE.schem.SYMBOLS.VSSL;
        const q = LPE.schem.plan(net);
        LPE.schem.SYMBOLS.VSSL = saved;
        return q.warnings.length === 4 && /VSSL/.test(q.warnings[0]);
      })());

check('bounds cover the drawing',
      !!p.bounds && p.bounds.x0 < 30 && p.bounds.x1 > POD_X);

/* The core holds no colours, so a test that paints has to bring its own.
   Phase 5a. */
/* Sentinels, not colours. The layer guard forbids a colour anywhere in
   the core and that includes here -- and it is the better test anyway:
   what draw() owes the caller is that each ROLE reaches the right canvas
   property, not that any particular hex is right. */
const TEST_SKIN = { line: 'role:line', lineWidth: 2, symbol: 'role:symbol',
                    symbolWidth: 2, fill: 'role:fill', ground: 'role:ground',
                    gap: 'role:gap', label: 'role:label',
                    labelFont: 'role:font' };

check('draw() refuses a theme with a role missing, and names it',
  (function () {
    const rec = new Proxy({}, { get: () => () => {}, set: () => true });
    const short = Object.assign({}, TEST_SKIN);
    delete short.gap;
    try { LPE.schem.draw(rec, p, short); return false; }
    catch (e) { return /missing: gap/.test(e.message) &&
                       /holds no colours/.test(e.message); }
  })());
check('and refuses no theme at all rather than inventing one',
  (function () {
    const rec = new Proxy({}, { get: () => () => {}, set: () => true });
    try { LPE.schem.draw(rec, p); return false; }
    catch (e) { return /missing: /.test(e.message); }
  })());
check('ground may be null -- "paint none" -- but it must be said',
  (function () {
    const rec = new Proxy({}, { get: () => () => {}, set: () => true });
    const none = Object.assign({}, TEST_SKIN, { ground: null });
    try { LPE.schem.draw(rec, p, none); return true; } catch (e) { return false; }
  })());

/* draw() must not think. Painting it against a recording context means a
   crash or an unreachable branch fails the build, not the screen. */
check('draw() paints without a real canvas', (function () {
  const calls = [];
  const rec = new Proxy({}, {
    get: function (_, k) {
      if (k === 'canvas') return {};
      return function () { calls.push(String(k)); };
    },
    set: function () { return true; },
  });
  try { LPE.schem.draw(rec, p, TEST_SKIN); }
  catch (e) { console.log('        threw: ' + e.message); return false; }
  return calls.indexOf('stroke') >= 0 && calls.indexOf('fill') >= 0;
})());

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
