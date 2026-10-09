/* @layer dynamics
   @core Process Core -- the dynamics layer's acceptance test.

   THE BAR: bit-identical agreement with level 1's hand-written solver, at
   every valve position, not "close enough".

   So level 1's solve() is pasted in below VERBATIM and used as an oracle.
   The general solver reads the same rig off a netlist and must produce the
   same doubles -- compared with Object.is, which separates -0 from 0 and
   refuses NaN, rather than with a tolerance that would hide a model that
   is subtly the wrong shape.

       node dynamics.test.js                                             */

'use strict';
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'topology.js'));
require(path.join(__dirname, '..', 'src', 'dynamics.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* ===================================================================
   THE ORACLE -- level 1's physics block, copied unchanged from
   level1.html. Nothing here may be "improved": its job is to be what
   shipped.
   =================================================================== */
const P_SUP = 60, SG = 1.0;
const CV_MAIN_MAX = 0.896, CV_BR_MAX = 0.513, CV_REDUCER = 0.296;
const seriesCv = (a, b) => 1 / Math.sqrt(1 / (a * a) + 1 / (b * b));
const P_TAU = 0.22;

function oracle(valves, pManHeld) {
  const cvMain = CV_MAIN_MAX * valves.main;
  const cv = [CV_BR_MAX * valves.b0, CV_BR_MAX * valves.b1, 0];
  const raw2 = CV_BR_MAX * valves.b2;
  cv[2] = raw2 > 0 ? seriesCv(raw2, CV_REDUCER) : 0;
  const cvSum = cv[0] + cv[1] + cv[2];
  let pTarget;
  if (cvMain <= 0) {
    pTarget = (cvSum <= 0) ? pManHeld : 0;
  } else if (cvSum <= 0) {
    pTarget = P_SUP;
  } else {
    pTarget = P_SUP * (cvMain * cvMain) / (cvMain * cvMain + cvSum * cvSum);
  }
  const pMan = pManHeld;
  const root = Math.sqrt(Math.max(0, pMan) / SG);
  const q = cv.map(c => c * root);
  return { cvMain, cv, cvSum, pMan, pTarget, q, qTot: q[0] + q[1] + q[2] };
}

/* ===================================================================
   THE SAME RIG, DECLARED. No Cv constants loose in the level: each one
   sits on the component it belongs to.
   =================================================================== */
const MAIN_Y = 86, TRUNK_X = 320, POD_X = 812;
const BR_Y = [170, 256, 342];
const PX_PER_IN = 10 / 0.493;

const SPEC = {
  bores: { main: 0.622, branch: 0.493 },
  fluid: { sg: 1.0 },
  components: {
    reservoir: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 60 },
    union1:    { kind: 'union' },
    vMain:     { kind: 'valve', tag: 'HV-1', key: 'main', valveType: 'globe', cv: 0.896 },
    tee0:      { kind: 'tee', axis: 'v' },
    tee1:      { kind: 'tee', axis: 'v' },
    v0:        { kind: 'valve', tag: 'HV-2', key: 'b0', valveType: 'globe', cv: 0.513 },
    v1:        { kind: 'valve', tag: 'HV-3', key: 'b1', valveType: 'globe', cv: 0.513 },
    v2:        { kind: 'valve', tag: 'HV-4', key: 'b2', valveType: 'globe', cv: 0.513 },
    red:       { kind: 'reducer', throat: 0.108, cv: 0.296 },
    pod0:      { kind: 'vessel', tag: 'TK-2', role: 'sink' },
    pod1:      { kind: 'vessel', tag: 'TK-3', role: 'sink' },
    pod2:      { kind: 'vessel', tag: 'TK-4', role: 'sink' },
  },
  segments: [
    { from: 'reservoir.out', to: 'union1.in', bore: 'main' },
    { from: 'union1.out',    to: 'vMain.in',  bore: 'main' },
    { from: 'vMain.out',     to: 'tee0.in',   bore: 'main' },
    { from: 'tee0.out',      to: 'tee1.in',   bore: 'main' },
    { from: 'tee1.out',      to: 'v2.in',     bore: 'main' },
    { from: 'v2.out',        to: 'red.in',    bore: 'main' },
    { from: 'red.out',       to: 'pod2.in',   bore: 'main' },
    { from: 'tee0.branch',   to: 'v0.in',     bore: 'branch' },
    { from: 'v0.out',        to: 'pod0.in',   bore: 'branch' },
    { from: 'tee1.branch',   to: 'v1.in',     bore: 'branch' },
    { from: 'v1.out',        to: 'pod1.in',   bore: 'branch' },
  ],
  frames: {
    rig: {
      pxPerInch: PX_PER_IN, round: 1,
      at: {
        reservoir: [30, MAIN_Y], union1: [116, MAIN_Y], vMain: [170, MAIN_Y],
        tee0: [TRUNK_X, BR_Y[0]], tee1: [TRUNK_X, BR_Y[1]],
        v0: [410, BR_Y[0]], v1: [410, BR_Y[1]], v2: [410, BR_Y[2]],
        red: [[600, BR_Y[2]], [680, BR_Y[2]]],
        pod0: [POD_X, BR_Y[0]], pod1: [POD_X, BR_Y[1]], pod2: [POD_X, BR_Y[2]],
      },
      via: { 'vMain.out->tee0.in': [[TRUNK_X, MAIN_Y]],
             'tee1.out->v2.in':    [[TRUNK_X, BR_Y[2]]] },
    },
  },
};

console.log('\ndynamics.js -- level 1, derived\n');

const net = LPE.net(SPEC);
check('the netlist still validates', net.errors.length === 0, net.errors.join('; '));

const dyn = LPE.dyn(net, { tau: P_TAU });
check('the dynamics layer accepts it', dyn.errors.length === 0, dyn.errors.join('; '));

/* The lumping is not a choice -- it falls out of there being nothing
   between the main valve and the bed valves that drops pressure. */
check('the rig reduces to exactly one unknown pressure node', dyn.nodes === 1,
      dyn.nodes + ' nodes');
check('supply pressure is read off the source, not configured',
      dyn.supply === 60, String(dyn.supply));
check('specific gravity comes from the fluid block', dyn.sg === 1.0);

/* ---- the sweep ---------------------------------------------------- */
const POS = [0, 0.001, 0.1, 0.25, 1 / 3, 0.5, 0.75, 0.9, 0.999, 1];
const HELD = [0, 0.37, 7.5, 15.2, 42, 60];

let cases = 0, worst = null;
outer:
for (const m of POS) for (const a of POS) for (const b of POS) for (const c of POS) {
  for (const h of HELD) {
    const valves = { main: m, b0: a, b1: b, b2: c };
    const want = oracle(valves, h);
    dyn.pressure = h;
    const got = dyn.solve(valves);
    cases++;
    const same =
      Object.is(got.cvUp, want.cvMain) &&
      Object.is(got.cvDown, want.cvSum) &&
      Object.is(got.target, want.pTarget) &&
      Object.is(got.pressure, want.pMan) &&
      Object.is(got.q.b0, want.q[0]) &&
      Object.is(got.q.b1, want.q[1]) &&
      Object.is(got.q.b2, want.q[2]) &&
      Object.is(got.qTot, want.qTot);
    if (!same) {
      worst = { valves, h, want, got };
      break outer;
    }
  }
}

check('every valve position agrees with the shipped solver, bit for bit',
      worst === null,
      worst ? 'first divergence at ' + JSON.stringify(worst.valves) +
              ' held=' + worst.h +
              '\n        want cvMain=' + worst.want.cvMain +
              ' cvSum=' + worst.want.cvSum +
              ' pTarget=' + worst.want.pTarget +
              ' q=' + JSON.stringify(worst.want.q) +
              '\n        got  cvUp=' + worst.got.cvUp +
              ' cvDown=' + worst.got.cvDown +
              ' target=' + worst.got.target +
              ' q=' + JSON.stringify([worst.got.q.b0, worst.got.q.b1, worst.got.q.b2])
            : cases + ' cases');
console.log('        (' + cases.toLocaleString('en-US') + ' valve/pressure combinations)');

/* ---- the lag, stepped the same way -------------------------------- */
let held = 0;
dyn.pressure = 0;
let lagOk = true, lagAt = null;
const script = [
  { v: { main: 1, b0: 0, b1: 0, b2: 0 }, n: 40 },
  { v: { main: 1, b0: 1, b1: 0, b2: 0 }, n: 40 },
  { v: { main: 1, b0: 1, b1: 1, b2: 1 }, n: 40 },
  { v: { main: 0, b0: 0, b1: 0, b2: 0 }, n: 40 },
  { v: { main: 0, b0: 1, b1: 0, b2: 0 }, n: 40 },
];
for (const leg of script) {
  for (let i = 0; i < leg.n; i++) {
    const dt = 1 / 60;
    const want = oracle(leg.v, held);
    held += (want.pTarget - held) * Math.min(1, dt / P_TAU);
    const got = dyn.step(dt, leg.v);
    if (!Object.is(got.target, want.pTarget) || !Object.is(dyn.pressure, held)) {
      lagOk = false; lagAt = { leg: leg.v, i, want: want.pTarget, got: got.target,
                               heldWant: held, heldGot: dyn.pressure };
      break;
    }
  }
  if (!lagOk) break;
}
check('the first-order lag tracks the shipped one through a full script',
      lagOk, lagAt ? JSON.stringify(lagAt) : '200 steps, 5 valve changes');

/* The trapped case is the one a steady-state solver gets wrong. */
dyn.pressure = 0;
dyn.settle({ main: 1, b0: 0, b1: 0, b2: 0 });
check('dead-heading against the header reaches supply',
      dyn.pressure === 60, String(dyn.pressure));
const trapped = dyn.solve({ main: 0, b0: 0, b1: 0, b2: 0 });
check('shutting everything traps the pressure rather than dumping it',
      trapped.target === 60, String(trapped.target));
const drained = dyn.solve({ main: 0, b0: 1, b1: 0, b2: 0 });
check('opening one bed with the main shut drains it to zero',
      drained.target === 0, String(drained.target));

/* ---- the derivation, not the arithmetic ---------------------------- */
console.log('');
check('a valve with no cv is not a restriction, so it joins no nodes',
      (function () {
        const s = JSON.parse(JSON.stringify(SPEC));
        delete s.components.v0.cv;
        const d = LPE.dyn(LPE.net(s));
        /* v0 stops resisting, so bed 0 is wide open to the manifold and
           the node now reaches a sink with nothing between: one node
           still, but bed 0 no longer appears as a flow path. */
        return d.errors.length === 0 && d.solve({ main: 1 }).q.b0 === undefined;
      })());

check('the bed-3 valve and its reducer are combined in series, not summed',
      (function () {
        const d = LPE.dyn(net);
        const only = d.solve({ main: 1, b0: 0, b1: 0, b2: 1 });
        return Object.is(only.cvDown, seriesCv(0.513, 0.296));
      })());

check('a source with no pressure is refused by name',
      (function () {
        const s = JSON.parse(JSON.stringify(SPEC));
        delete s.components.reservoir.pressure;
        return /reservoir is a source and declares no pressure/
          .test(LPE.dyn(LPE.net(s)).errors.join(' '));
      })());

/* A net that needs an iterative solve must say so rather than guess.

   Two headers in series, each with its own branch:

       TK-1 --HV-1-- (N1) --HV-3-- (N2) --HV-5-- TK-2
                      |                  |
                    HV-2               HV-4
                      |                  |
                    TK-3               TK-4

   N1 and N2 are both unknown and neither reduces away -- each has three
   restrictions on it, so there is no two-restriction pipe to collapse.
   That is the shape with no closed form. */
check('a two-stage header is refused rather than guessed at',
      (function () {
        const s = {
          bores: { m: 1 },
          fluid: { sg: 1 },
          components: {
            src: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 60 },
            a:   { kind: 'valve', tag: 'HV-1', key: 'a', cv: 1 },
            t1:  { kind: 'tee', axis: 'h' },
            vB:  { kind: 'valve', tag: 'HV-2', key: 'vB', cv: 1 },
            d2:  { kind: 'vessel', tag: 'TK-3', role: 'sink' },
            b:   { kind: 'valve', tag: 'HV-3', key: 'b', cv: 1 },
            t2:  { kind: 'tee', axis: 'h' },
            e:   { kind: 'valve', tag: 'HV-4', key: 'e', cv: 1 },
            d3:  { kind: 'vessel', tag: 'TK-4', role: 'sink' },
            c:   { kind: 'valve', tag: 'HV-5', key: 'c', cv: 1 },
            d1:  { kind: 'vessel', tag: 'TK-2', role: 'sink' },
          },
          segments: [
            { from: 'src.out',   to: 'a.in',  bore: 'm' },
            { from: 'a.out',     to: 't1.in', bore: 'm' },
            { from: 't1.branch', to: 'vB.in', bore: 'm' },
            { from: 'vB.out',    to: 'd2.in', bore: 'm' },
            { from: 't1.out',    to: 'b.in',  bore: 'm' },
            { from: 'b.out',     to: 't2.in', bore: 'm' },
            { from: 't2.branch', to: 'e.in',  bore: 'm' },
            { from: 'e.out',     to: 'd3.in', bore: 'm' },
            { from: 't2.out',    to: 'c.in',  bore: 'm' },
            { from: 'c.out',     to: 'd1.in', bore: 'm' },
          ],
          frames: { rig: { at: {
            src: [0, 0], a: [50, 0], t1: [100, 0], vB: [100, 50], d2: [100, 100],
            b: [150, 0], t2: [200, 0], e: [200, 50], d3: [200, 100],
            c: [250, 0], d1: [300, 0],
          } } },
        };
        const n = LPE.net(s);
        if (n.errors.length) { console.log('        net: ' + n.errors.join('; ')); return false; }
        const d = LPE.dyn(n);
        return /2 unsolved pressure nodes/.test(d.errors.join(' ')) &&
               /iterative solve that is not built/.test(d.errors.join(' '));
      })());

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
