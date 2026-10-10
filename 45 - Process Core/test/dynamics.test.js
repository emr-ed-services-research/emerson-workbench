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
check('a valve with no cv is not a restriction, and the layer says what that did',
      (function () {
        const s = JSON.parse(JSON.stringify(SPEC));
        delete s.components.v0.cv;
        const d = LPE.dyn(LPE.net(s));
        /* v0 stops resisting, so bed 0 is wide open from the manifold to
           a pod sitting at atmosphere -- which pins the manifold and
           leaves nothing to float. It stops being a flow path, and the
           grounding it caused is still named.

           What changed: the naming moved from `errors` to `warnings`, and
           the net now SOLVES instead of returning a board of zeroes. A
           pinned net is determinate, not unsolvable -- every restriction
           knows the pressure either side of it. The complaint is about
           MODELLING intent (a manifold the author meant to float), which
           is a warning, not a refusal. What makes it still a complaint is
           that a fitting -- the tee -- is sitting on a boundary node, and
           a fitting is pipe. */
        const sol = d.solve({ main: 1 });
        return sol.q.b0 === undefined &&
               d.determinate === true &&
               d.errors.length === 0 &&
               /pinned to a boundary pressure/.test(d.warnings.join(' ')) &&
               /tee0|tee1/.test(d.warnings.join(' '));
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

/* The opposite failure, and the quieter one: a net with NOTHING to
   solve. Found building a twelve-bed density board whose header ran
   straight into a drain -- every reading was zero and the board looked
   like a rig nobody had opened. */
check('a net with nothing left to solve is named, not silently zero',
      (function () {
        const s = {
          bores: { m: 1 }, fluid: { sg: 1 },
          components: {
            src: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 60 },
            a:   { kind: 'valve', tag: 'HV-1', key: 'a', cv: 1 },
            t:   { kind: 'tee', axis: 'h' },
            d1:  { kind: 'vessel', tag: 'TK-2', role: 'sink' },
            b:   { kind: 'valve', tag: 'HV-2', key: 'b', cv: 1 },
            d2:  { kind: 'vessel', tag: 'TK-3', role: 'sink' },
          },
          segments: [
            { from: 'src.out', to: 'a.in', bore: 'm' },
            { from: 'a.out', to: 't.in', bore: 'm' },
            { from: 't.out', to: 'd1.in', bore: 'm' },   // header straight to a sink
            { from: 't.branch', to: 'b.in', bore: 'm' },
            { from: 'b.out', to: 'd2.in', bore: 'm' },
          ],
          frames: { rig: { at: { src: [0,0], a: [50,0], t: [100,0],
                                 d1: [150,0], b: [100,50], d2: [100,100] } } },
        };
        /* The grounded header is still caught, and still names the fix.
           It is a WARNING now rather than an error, because the net is
           determinate rather than unsolvable -- and the board no longer
           reads all zeroes, which is the better outcome: valve `a` now
           carries real flow from the source to the grounded header while
           `b` carries none across a zero drop, and the warning says
           exactly which fitting got grounded.

           The complaint survives the change; only its severity and its
           accuracy moved. The old text asserted a cause; this one names
           the component. */
        const d = LPE.dyn(LPE.net(s));
        const w = d.warnings.join(' ');
        const sol = d.solve({ a: 1, b: 1 });
        return d.determinate === true &&
               /pinned to a boundary pressure/.test(w) &&
               /\bt\b/.test(w) &&                       // the tee, by name
               /valve there \(shut is fine\)/i.test(w) &&
               sol.q.a > 0 &&                            // source -> header
               sol.q.b === 0;                            // across no drop
      })());

/* ---- the determinate net: a CONTROL LOOP ---------------------------
   Supply, a control valve, a load, a sink. The shape every control loop
   takes, and until 2026-10-10 the solver refused it: series reduction
   correctly collapses valve-then-load into one equivalent restriction
   between two boundaries, which leaves no node floating, and "no unknown
   node" was being treated as unsolvable when it is in fact the easiest
   case -- every restriction already knows the pressure either side.

   Nothing here floats, so there is nothing to iterate and nothing to
   lag. The flow is the sizing equation straight out. */
const LOOP = {
  bores: { m: 1 }, fluid: { sg: 1 },
  components: {
    tank: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 60 },
    fcv:  { kind: 'valve',  tag: 'FCV-1', key: 'fcv', cv: 0.9 },
    load: { kind: 'valve',  tag: 'RO-1',  key: 'load', cv: 0.9 },
    pod:  { kind: 'vessel', tag: 'TK-2', role: 'sink' },
  },
  segments: [
    { from: 'tank.out', to: 'fcv.in',  bore: 'm' },
    { from: 'fcv.out',  to: 'load.in', bore: 'm' },
    { from: 'load.out', to: 'pod.in',  bore: 'm' },
  ],
  frames: { rig: { at: { tank: [0, 0], fcv: [50, 0], load: [100, 0], pod: [150, 0] } } },
};
const loop = LPE.dyn(LPE.net(LOOP), { tau: 0.4 });

check('a control loop solves rather than being refused',
      loop.errors.length === 0, loop.errors.join('; '));
check('and says it is determinate', loop.determinate === true);
check('a plain series run draws NO grounded-fitting warning',
      loop.warnings.length === 0, loop.warnings.join('; '));
check('supply is still read off the source', loop.supply === 60,
      String(loop.supply));

const wide = loop.solve({ fcv: 1, load: 1 });
check('flow is the sizing equation off the series Cv, exactly',
      Object.is(wide.qTot, seriesCv(0.9, 0.9) * Math.sqrt(60 / 1)),
      `${wide.qTot} vs ${seriesCv(0.9, 0.9) * Math.sqrt(60 / 1)}`);
check('a shut control valve stops the loop', loop.solve({ fcv: 0, load: 1 }).qTot === 0);
check('the flow is reported against the valve\'s key and its tag',
      wide.q.fcv === wide.qTot && wide.q['FCV-1'] === wide.qTot);

/* The installed characteristic falls out: as the control valve opens,
   the fixed load takes over as the dominant resistance, so flow bends
   away from the valve's own linear travel. That is the thing a sizing
   course is trying to teach, and it is emergent here rather than drawn. */
const curve = [0.25, 0.5, 0.75, 1].map(p => loop.solve({ fcv: p, load: 1 }).qTot);
check('flow rises monotonically with travel',
      curve.every((q, i) => i === 0 || q > curve[i - 1]), JSON.stringify(curve));
check('and flattens as the fixed load becomes dominant -- the installed '
      + 'characteristic, not the inherent one',
      (curve[1] - curve[0]) > (curve[3] - curve[2]),
      JSON.stringify(curve.map(q => +q.toFixed(3))));

/* pressure/target are NULL, not zero: no node holds a pressure here, and
   reporting a number for one would be inventing a reading. */
check('a determinate net reports no held pressure rather than a fake zero',
      wide.pressure === null && wide.target === null);
check('stepping a determinate net is just solving it, not NaN',
      (function () {
        const s = loop.step(0.1, { fcv: 1, load: 1 });
        return s.qTot === wide.qTot && s.pressure === null;
      })());
check('settling a determinate net is a no-op, not NaN',
      Number.isFinite(loop.settle({ fcv: 1, load: 1 }).qTot));

console.log('');

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

/* ================= COMPOSITION ======================================
   The other layers finally reach the solver. Until this, dynamics knew
   two things that were simplifications: a valve's Cv scales linearly
   with position, and a fitting does not exist.

   Both are now opt-in. A component that declares nothing solves with
   bit-for-bit the same arithmetic -- which is why every check above,
   and Lunar Process Engineer's 81-state comparison, are untouched.  */
console.log('');
const fs = require('fs');
require(path.join(__dirname, '..', 'src', 'trim.js'));
require(path.join(__dirname, '..', 'src', 'sizing.js'));

const VALVES = JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'lab', 'valves.json'), 'utf8')).valves;
const EQPCT = VALVES.find(v => v.cage === 'equal-percentage' &&
                               v.body === 'ED' && v.cv100 > 90);

function twoNode(extra, dynOpts) {
  const spec = {
    bores: { main: 2.067 }, fluid: { sg: 1.0 },
    components: {
      src: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 100 },
      v1: Object.assign({ kind: 'valve', tag: 'HV-1', key: 'm',
                          valveType: 'globe', cv: EQPCT.cv100 }, extra || {}),
      snk: { kind: 'vessel', tag: 'TK-2', role: 'sink',
             vesselType: 'atmospheric' },
    },
    segments: [{ from: 'src.out', to: 'v1.in', bore: 'main' },
               { from: 'v1.out', to: 'snk.in', bore: 'main' }],
    frames: { rig: { pxPerInch: 1, at: { src: [0, 0], v1: [10, 0], snk: [20, 0] } } },
  };
  const n = LPE.net(spec, { frame: 'rig' });
  if (n.errors.length) throw new Error('netlist: ' + n.errors.join('; '));
  return LPE.dyn(n, dynOpts || { tau: 0.22 });
}

const flowAt = (d, t) => { d.settle({ m: t }); return d.solve({ m: t }).qTot; };

const plain = twoNode();
const withTrim = twoNode({ trim: { curve: EQPCT.curve } });
check('a netlist that declares nothing still builds clean',
      plain.errors.length === 0);
check('and so does one that declares a real characteristic',
      withTrim.errors.length === 0, withTrim.errors.join('; '));

/* THE POINT. Wide open the two agree -- same valve, same rating. In the
   middle of the stroke, where control actually happens, they do not. */
check('both pass the same flow wide open',
  Math.abs(flowAt(plain, 1) - flowAt(withTrim, 1)) < 1e-9,
  flowAt(plain, 1).toFixed(4) + ' vs ' + flowAt(withTrim, 1).toFixed(4));

const fracP = flowAt(plain, 0.5) / flowAt(plain, 1);
const fracT = flowAt(withTrim, 0.5) / flowAt(withTrim, 1);
check('the linear assumption gives half flow at half travel',
  Math.abs(fracP - 0.5) < 0.02, (100 * fracP).toFixed(0) + '%');
check('the real equal-percentage cage gives about a quarter',
  fracT > 0.15 && fracT < 0.30, (100 * fracT).toFixed(0) + '%');
check('so the linear assumption is wrong by more than a factor of two',
  fracP / fracT > 2,
  'at half travel: ' + (100 * fracP).toFixed(0) + '% assumed against ' +
  (100 * fracT).toFixed(0) + '% real -- not a small error, and it sits ' +
  'exactly where a loop spends its time');
check('and the real curve is monotonic in travel',
  [0.2, 0.4, 0.6, 0.8, 1].every((t, i, a) =>
    i === 0 || flowAt(withTrim, t) > flowAt(withTrim, a[i - 1])));

/* A sourced fitting joins the series through the standard's own N2. */
const DARBY_ELBOW = { method: 'darby-3k', K1: 800, Ki: 0.14, Kd: 4.0,
                      uncertaintyPct: 30, source: 'Darby 3-K, threaded elbow' };
const withFitting = twoNode({}, { tau: 0.22, reynolds: 150000 });
check('a reference Reynolds number is accepted on the dyn options',
      withFitting.errors.length === 0, withFitting.errors.join('; '));

/* And declaring the real physics without the means to compute it must
   fail by name, never fall back to the simpler model. */
let msg = '';
try {
  const n = LPE.net({
    bores: { main: 2.067 }, fluid: { sg: 1 },
    components: {
      src: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 100 },
      f1: { kind: 'union', resistance: DARBY_ELBOW, bore: 2.067 },
      snk: { kind: 'vessel', tag: 'TK-2', role: 'sink', vesselType: 'atmospheric' },
    },
    segments: [{ from: 'src.out', to: 'f1.in', bore: 'main' },
               { from: 'f1.out', to: 'snk.in', bore: 'main' }],
    frames: { rig: { pxPerInch: 1, at: { src: [0, 0], f1: [10, 0], snk: [20, 0] } } },
  }, { frame: 'rig' });
  msg = LPE.dyn(n, { tau: 0.22 }).errors.join('; ');
} catch (e) { msg = e.message; }
check('a resistance basis with no reference Reynolds is refused by name',
  /no reference Reynolds/.test(msg) && /not assumed/.test(msg), msg);

let bad = '';
try { bad = twoNode({ trim: { curve: [5, 3, 9] } }).errors.join('; '); }
catch (e) { bad = e.message; }
check('a trim curve that falls as it opens is refused',
  /not a trim/.test(bad), bad);

/* The solver says when it is using real part physics, because a model
   that silently changed its own arithmetic would be the worst of both. */
check('and the solver reports that it composed the other layers',
  withTrim.warnings.some(w => /real part physics/.test(w)),
  withTrim.warnings.join(' | '));

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
