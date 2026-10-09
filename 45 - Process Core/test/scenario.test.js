/* @layer scenario
   @core Process Core -- the scenario layer's acceptance test.

   TWO BARS, from the build plan:

     1. Level 1's six steps expressed as a scenario, behaving identically.
     2. THE SAME SCENARIO RUNS HEADLESS, with no renderer present at all.

   The second is the one that proves the split is real, so it is not a
   mock: a player is simulated turning real valves, the real dynamics
   layer is stepped on a real clock, and all six steps have to complete
   in order with nothing drawn anywhere.

       node scenario.test.js                                            */

'use strict';
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'topology.js'));
require(path.join(__dirname, '..', 'src', 'dynamics.js'));
require(path.join(__dirname, '..', 'src', 'scenario.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* ---- the rig ------------------------------------------------------- */
const BR_Y = [170, 256, 342], MAIN_Y = 86, TRUNK_X = 320, POD_X = 812;
const RIG = {
  rig: 'bio-grow-bay-3',
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
  frames: { rig: { pxPerInch: 10 / 0.493, round: 1, at: {
    reservoir: [30, MAIN_Y], union1: [116, MAIN_Y], vMain: [170, MAIN_Y],
    tee0: [TRUNK_X, BR_Y[0]], tee1: [TRUNK_X, BR_Y[1]],
    v0: [410, BR_Y[0]], v1: [410, BR_Y[1]], v2: [410, BR_Y[2]],
    red: [[600, BR_Y[2]], [680, BR_Y[2]]],
    pod0: [POD_X, BR_Y[0]], pod1: [POD_X, BR_Y[1]], pod2: [POD_X, BR_Y[2]] },
    via: { 'vMain.out->tee0.in': [[TRUNK_X, MAIN_Y]],
           'tee1.out->v2.in':    [[TRUNK_X, BR_Y[2]]] } } },
};

/* ---- level 1's six steps, as DATA ----------------------------------
   Compare against the originals in level1.html: the `ok()` predicates
   below are the same comparisons, declared instead of coded, and every
   word of task and lesson text is gone. */
const SCENARIO = {
  rig: 'bio-grow-bay-3',
  start: { 'HV-1': 0, 'HV-2': 0, 'HV-3': 0, 'HV-4': 0 },
  steps: [
    { id: 'open-main',    operable: ['HV-1'],
      when: [{ measure: 'HV-1.position', atLeast: 0.9 }] },
    { id: 'open-bed-1',   operable: ['HV-2'], observe: 'HV-2',
      when: [{ measure: 'HV-2.position', atLeast: 0.9 }] },
    { id: 'open-bed-2',   operable: ['HV-3'], observe: 'HV-3',
      when: [{ measure: 'HV-3.position', atLeast: 0.9 }] },
    { id: 'open-bed-3',   operable: ['HV-4'], observe: 'HV-4',
      when: [{ measure: 'HV-4.position', atLeast: 0.9 }] },
    { id: 'throttle-bed-1', operable: ['HV-2'], observe: 'HV-4',
      when: [{ measure: 'HV-2.position', atMost: 0.35 }] },
    { id: 'balance',      operable: ['HV-2', 'HV-3', 'HV-4'],
      when: [{ each:   ['HV-2.flow', 'HV-3.flow', 'HV-4.flow'], atLeast: 1.0 },
             { spread: ['HV-2.flow', 'HV-3.flow', 'HV-4.flow'], atMost: 0.15 }] },
  ],
};

console.log('\nscenario.js -- a level as data\n');

const net = LPE.net(RIG);
check('the rig validates', net.errors.length === 0, net.errors.join('; '));

const sc = LPE.scenario(SCENARIO, net);
check('the scenario validates', sc.errors.length === 0, sc.errors.join('; '));
check("it has level 1's six steps", sc.count === 6, String(sc.count));

/* The whole claim of this layer. */
check('it is DATA -- it survives a round trip through JSON and still works',
  (function () {
    const copy = LPE.scenario(JSON.parse(JSON.stringify(SCENARIO)), net);
    return copy.errors.length === 0 && copy.count === 6 &&
           JSON.stringify(copy.ids) === JSON.stringify(sc.ids);
  })(),
  'something in the scenario is a function or otherwise not serialisable');

check('no step carries a word of prose',
  (function () {
    const s = JSON.stringify(SCENARIO.steps);
    return !LPE.scenario.PROSE_KEYS.some(k => new RegExp('"' + k + '"').test(s));
  })());
check('and no step carries a pixel',
  (function () {
    /* Every number in the scenario is a valve position or a flow. If a
       coordinate ever leaks in it will be far outside those ranges. */
    const nums = JSON.stringify(SCENARIO.steps).match(/-?\d+(\.\d+)?/g) || [];
    return nums.every(n => Math.abs(+n) <= 10);
  })());

/* ===================================================================
   BAR 2 -- THE HEADLESS RUN
   No canvas, no DOM, no renderer, no narrative. A simulated player
   turns real valves; the real dynamics layer runs on a real clock.
   =================================================================== */
console.log('');

function headless(verbose) {
  const dyn = LPE.dyn(net, { tau: 0.22 });
  const valves = Object.assign({ main: 0, b0: 0, b1: 0, b2: 0 }, sc.initial());
  const log = [];
  let step = 0, t = 0;
  const dt = 1 / 60;

  /* The player: turns whatever this step allows toward what it asks for,
     at a hand-wheel's pace. Deliberately not teleporting the valves --
     a step that only passes with instant state is not a step a person
     could complete. */
  const target = i => ({
    0: { main: 1 }, 1: { b0: 1 }, 2: { b1: 1 }, 3: { b2: 1 },
    4: { b0: 0.3 },
    /* Bed 3 runs through the reducer, so its ceiling is
       seriesCv(0.513, 0.296) = 0.256 -- a Cv the other two reach at
       half travel. Balancing means coming back to the weakest branch,
       which is the lesson the step exists to teach. */
    5: { b0: 0.5, b1: 0.5, b2: 1 },
  })[i];

  while (step < sc.count && t < 120) {
    const want = target(step);
    const allowed = sc.operable(step).map(tag => net.byTag(tag).key);
    for (const k of Object.keys(want)) {
      if (allowed.indexOf(k) < 0) continue;          // locked: cannot touch it
      const d = want[k] - valves[k];
      valves[k] += Math.sign(d) * Math.min(Math.abs(d), 0.9 * dt);
    }
    const solved = dyn.step(dt, valves);
    t += dt;
    if (sc.met(step, valves, solved)) {
      log.push({ id: sc.at(step).id, t: +t.toFixed(2),
                 q: [solved.q['HV-2'], solved.q['HV-3'], solved.q['HV-4']] });
      step++;
    }
  }
  if (verbose) for (const e of log) {
    console.log('        ' + e.id.padEnd(16) + ' at ' + String(e.t).padStart(6) +
      's   beds ' + e.q.map(x => x.toFixed(2)).join(' / '));
  }
  return { done: step === sc.count, log, t, valves, dyn };
}

const run = headless(true);
check('all six steps complete with no renderer in the process',
      run.done, run.log.length + ' of ' + sc.count + ' completed in ' +
      run.t.toFixed(1) + 's');
check('they complete IN ORDER',
      JSON.stringify(run.log.map(e => e.id)) === JSON.stringify(sc.ids));
check('nothing in this process ever had a canvas',
      typeof global.document === 'undefined' &&
      typeof global.CanvasRenderingContext2D === 'undefined');

/* The last step is the real one: three beds balanced to a tenth. */
const fin = run.log[run.log.length - 1];
check('the bay really is balanced at the end, not just marked complete',
      fin && Math.min.apply(null, fin.q) >= 1.0 &&
      (Math.max.apply(null, fin.q) - Math.min.apply(null, fin.q)) <= 0.15,
      fin ? fin.q.map(x => x.toFixed(3)).join(' / ') : 'never finished');

/* ---- locking is the scenario's business ---------------------------- */
console.log('');
check('a step locks every valve it did not make operable',
      JSON.stringify(sc.operable(0)) === JSON.stringify(['HV-1']) &&
      JSON.stringify(sc.operable(5)) === JSON.stringify(['HV-2', 'HV-3', 'HV-4']));
check('a player who touches a locked valve gets nowhere',
      (function () {
        const dyn = LPE.dyn(net, { tau: 0.22 });
        const v = { main: 0, b0: 1, b1: 1, b2: 1 };   // beds forced wide open
        for (let i = 0; i < 300; i++) dyn.step(1 / 60, v);
        /* Step 1 asks for the MAIN, which the player has not touched. */
        return !sc.met(0, v, dyn.solve(v));
      })());
check('the step the scenario is about is named, not drawn',
      sc.observe(4) === 'HV-4' && sc.observe(0) === null);

/* ---- the validator speaks to an engineer --------------------------- */
console.log('');
const bad = (mutate) => {
  const s = JSON.parse(JSON.stringify(SCENARIO));
  mutate(s);
  return LPE.scenario(s, net).errors.join(' | ');
};

check('an unknown tag is named, and the rig lists what it does have',
      /there is no "HV-9" in this rig/.test(bad(s => {
        s.steps[0].when[0].measure = 'HV-9.position';
      })) && /HV-1, HV-2/.test(bad(s => {
        s.steps[0].when[0].measure = 'HV-9.position';
      })));
check('an unknown quantity suggests the real ones',
      /"velocity" is not something this rig reports.*position, flow/
        .test(bad(s => { s.steps[0].when[0].measure = 'HV-1.velocity'; })));
check('a step with no condition is refused, with the reason',
      /could ever finish it/.test(bad(s => { s.steps[2].when = []; })));
check('a condition with no bound is refused',
      /needs "atLeast" or "atMost"/.test(bad(s => {
        delete s.steps[0].when[0].atLeast;
      })));
check('duplicate ids are caught',
      /two steps are both called "open-main"/.test(bad(s => {
        s.steps[1].id = 'open-main';
      })));
check('a step with no id is caught, and told why it needs one',
      /narrative binds its words to the id/.test(bad(s => { delete s.steps[3].id; })));
check('making a non-existent thing operable is caught',
      /cannot make "HV-9" operable/.test(bad(s => {
        s.steps[0].operable = ['HV-9'];
      })));
check('a malformed measurement is shown the right shape',
      /is not a measurement.*HV-1\.position/s.test(bad(s => {
        s.steps[0].when[0].measure = 'the main valve';
      })));
check('a scenario written for another rig is refused',
      /written for rig "some-other-bay"/.test(bad(s => { s.rig = 'some-other-bay'; })));

/* The invariant for this phase, enforced rather than asked for. */
check('a step that grows a task string is refused by name',
      /A scenario holds no words/.test(bad(s => {
        s.steps[0].task = 'Open the MAIN SUPPLY valve.';
      })));
check('so is a lesson, a label, or any other prose key',
      LPE.scenario.PROSE_KEYS.every(k =>
        /A scenario holds no words/.test(bad(s => { s.steps[0][k] = 'words'; }))));

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
