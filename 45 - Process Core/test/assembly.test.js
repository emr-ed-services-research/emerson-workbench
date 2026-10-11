/* @layer registration -- a test harness belongs to no process layer.

   ASSEMBLY: does this valve and this actuator actually bolt together?

   These tests exist because the answer was got wrong by a person, in
   this repository, with every number needed sitting in two tables he
   had already read. A 657 size 30 was proposed to drive an EWT NPS
   10x8 and the mistake stood for hours. Each check below is one of the
   three published numbers that would have refused it in a millisecond. */
const fs = require('fs');
const path = require('path');
global.window = {};
for (const m of ['catalogue', 'instrument', 'assembly'])
  require(path.join(__dirname, '..', 'src', m + '.js'));
const LPE = global.window.LPE;
const A = LPE.assembly;

let failures = 0;
function check(what, ok, detail) {
  if (ok) { console.log('  ok    ' + what); return; }
  failures++;
  console.log('  FAIL  ' + what + (detail ? '\n        ' + detail : ''));
}
function refuses(what, fn, fragment) {
  let msg = null;
  try { fn(); } catch (e) { msg = e.message; }
  if (msg === null) { failures++; console.log('  FAIL  ' + what +
    '\n        it was allowed'); return; }
  if (fragment && msg.indexOf(fragment) < 0) {
    failures++; console.log('  FAIL  ' + what +
      '\n        refused, but for the wrong reason: ' + msg.slice(0, 160));
    return;
  }
  console.log('  ok    ' + what);
}

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));

console.log('\nassembly -- does it bolt together\n');

const ED15 = CAT.part('VALVE/ED/NPS1.5/P1.875/T0.75/EQPCT');
const ED8  = CAT.part('VALVE/ED/NPS8/P8/T3/EQPCT');
const EWT  = CAT.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
const A30  = CAT.part('ACTUATOR/657/SIZE30');
const A60  = CAT.part('ACTUATOR/657/SIZE60');

/* ---- the pairing the loop is built on ---- */
{
  const asm = A.assemble({ valve: ED15, actuator: A30, tag: 'FV-101' });
  check('an ED NPS 1-1/2 and a 657 size 30 go together', asm.fits);
  const by = {};
  for (const c of asm.checks) by[c.name] = c;
  check('and all three mounting numbers were actually checked',
    by.travel && by.stem && by.yokeBoss &&
    by.travel.ok && by.stem.ok && by.yokeBoss.ok,
    asm.checks.map(c => c.name).join(', '));
  check('the assembly carries its tag, for a drawing to label',
    asm.tag === 'FV-101' && asm.kind === 'controlValveAssembly');
}

/* ---- THE MISTAKE, REFUSED ----
   All three numbers present, all three wrong. This is the case that
   motivated the layer. */
{
  let msg = null;
  try { A.assemble({ valve: ED8, actuator: A30 }); } catch (e) { msg = e.message; }
  check('an 8-inch valve on a size 30 is refused', msg !== null);
  check('and the refusal names the travel',
    msg && /strokes 3 in and the actuator reaches 0.75/.test(msg));
  check('and the stem', msg && /stem is 0.75 in and the actuator accepts 0.375/.test(msg));
  check('and the yoke boss', msg && /yoke boss is 3.5625 in/.test(msg));
  check('all three at once, rather than the first one it tripped on',
    msg && /travel:/.test(msg) && /stem:/.test(msg) && /yokeBoss:/.test(msg),
    'a reader fixing one number at a time learns nothing about the other two');
}

/* ---- missing data is refused, never assumed ----
   The EWT rows carry a stem but no yoke boss: Table 12 is the ED/EAD
   table and the EW family is not in it. The honest answer is to say
   so, because a guessed yoke boss is an assembly that does not exist. */
refuses('a valve with no published yoke boss is refused, not guessed',
  () => A.assemble({ valve: EWT, actuator: A30 }), 'carries no yokeBoss');

/* ---- lenient, for a screen that teaches the wrong answer ---- */
{
  const bad = A.assemble({ valve: ED8, actuator: A30, lenient: true });
  check('lenient builds it anyway and reports fits: false',
    bad.fits === false && bad.checks.some(c => !c.ok),
    'a lesson about mismatched actuators has to be able to DRAW one');
}

/* ---- thrust, when a service says what the plug must hold ---- */
{
  const asm = A.assemble({ valve: ED15, actuator: A30,
    service: { dP: 15 } });
  check('a service adds a thrust check', asm.thrust !== null && asm.fits);
  check('and it says the figure is optimistic without packing and seat',
    /optimistic/.test(asm.thrust.note || ''),
    'both are choices, and inventing either would be inventing a valve');
  /* An unbalanced plug presents the whole port to the drop, so the
     same service needs many times the thrust. */
  const unb = A.assemble({ valve: ED15, actuator: A30, balanced: false,
    service: { dP: 15 }, lenient: true });
  check('an unbalanced plug needs far more thrust than a balanced one',
    unb.thrust.neededLb > 6 * asm.thrust.neededLb,
    asm.thrust.neededLb.toFixed(0) + ' lb balanced, ' +
    unb.thrust.neededLb.toFixed(0) + ' lb unbalanced');
  /* And a big enough drop beats the actuator. */
  const hard = A.assemble({ valve: ED15, actuator: A30, balanced: false,
    service: { dP: 2000 }, lenient: true });
  check('and a drop it cannot hold is reported as not fitting',
    hard.fits === false &&
    hard.checks.some(c => c.name === 'thrust' && !c.ok),
    hard.thrust.neededLb.toFixed(0) + ' lb needed against ' +
    hard.thrust.availableLb + ' lb available');
}

refuses('a service with no pressure drop is refused',
  () => A.assemble({ valve: ED15, actuator: A30, service: {} }),
  'no dP');

/* ---- searching the other way ---- */
{
  const fits = A.actuatorsFor(CAT, ED15).map(m => m.id);
  check('the catalogue can be asked which actuators drive a valve',
    fits.indexOf('ACTUATOR/657/SIZE30') >= 0 &&
    fits.indexOf('ACTUATOR/657/SIZE34') >= 0,
    fits.join(', ') || '(none)');
  check('and it excludes the ones with the wrong boss',
    fits.indexOf('ACTUATOR/657/SIZE50') < 0,
    'a size 50 has a 3-9/16 boss and takes a 3/4 stem');
  const none = A.actuatorsFor(CAT, ED8);
  check('an 8-inch ED finds nothing in the 30-60 range, correctly',
    none.length === 0,
    'those sizes stop at 2 in of travel; a 3 in valve needs a 70 or 87');
}

refuses('an assembly of one part is refused',
  () => A.assemble({ valve: ED15 }), 'needs {valve, actuator}');

/* ---- the packing torque window -------------------------------------- */
console.log('');
{
  const T = o => A.packingTorque(Object.assign(
    { catalogue: CAT, packingType: 'graphite', pressureClass: 'CL300',
      stem: 0.75 }, o));

  const w = T({});
  check('the window comes off Table 6, both ends',
    w.minLbfIn === 133 && w.maxLbfIn === 199,
    w.minLbfIn + ' to ' + w.maxLbfIn + ' lbf.in');

  /* BOTH ENDS ARE FAILURES. That is the lesson, and the reason the
     table prints two numbers instead of one. */
  check('under the minimum it leaks to atmosphere',
    T({ applied: 100 }).state === 'leaks');
  check('inside the window it seals and still moves',
    T({ applied: 166 }).state === 'sealed');
  check('over the maximum the stem binds',
    T({ applied: 260 }).state === 'binding',
    'a valve that sticks and hunts is usually one somebody ' +
    'over-tightened');

  /* The material is not a setting on one window, it is a different
     window. Torquing PTFE to a graphite figure is the specific
     mistake this guards. */
  const ptfe = T({ packingType: 'ptfe', applied: 166 });
  check('the same torque that suits graphite destroys PTFE',
    ptfe.state === 'binding' && ptfe.maxLbfIn === 95,
    'graphite 133-199, PTFE 64-95, same stem and class');
  check('and the class changes it too',
    T({ pressureClass: 'CL600' }).minLbfIn === 182);

  check('friction is reported as an index, and says why',
    Math.abs(T({ applied: 166 }).frictionIndex - 1) < 0.01 &&
    /not a force/.test(T({}).frictionNote),
    'nut factor, stud count and friction coefficient are unpublished, ' +
    'so a figure in pounds would be a claim rather than a reading');

  refuses('a stem Table 6 does not cover is refused, not interpolated',
    () => T({ stem: 0.625 }), 'not one to interpolate');
  refuses('and a packing material with no window is refused',
    () => T({ packingType: 'leather' }), 'graphite');
}

/* ---- a 4-20 mA command, and where the stem ends up -------------------
   The seam the layer header has always declared. The two things that
   must not go wrong: a lost signal must never come back as a
   plausible number, and an air-to-close valve must not be told that
   20 mA means open. */
{
  const asm = A.assemble({ valve: ED15, actuator: A30, tag: 'FV-101',
    positioner: 'DVC6200' });
  const at = (mA, action, onSignalFault, extra) =>
    A.travelFrom(Object.assign({ assembly: asm, mA: mA, action: action,
      onSignalFault: onSignalFault || 'fail-safe' }, extra || {}));

  check('4 mA on an air-to-open valve is shut',
        at(4, 'air-to-open').travelPct === 0);
  check('20 mA on an air-to-open valve is wide open',
        at(20, 'air-to-open').travelPct === 100);
  check('12 mA is half way, and that is half the rated travel in inches',
        Math.abs(at(12, 'air-to-open').travelPct - 50) < 1e-9 &&
        Math.abs(at(12, 'air-to-open').inches - 0.375) < 1e-9);

  check('20 mA on an AIR-TO-CLOSE valve is SHUT, not open',
        at(20, 'air-to-close').travelPct === 0,
        'rising pressure shuts it; reversing the controller is the ' +
        'business of the control room, not of the valve');
  check('and 4 mA on it is wide open',
        at(4, 'air-to-close').travelPct === 100);

  check('a current below the NE43 failure threshold is a FAULT',
        at(3.2, 'air-to-open').failed === true &&
        at(3.2, 'air-to-open').status === LPE.instrument.STATUS.FAIL_LOW);
  check('and it goes to the fail-safe end, which the ACTION decides',
        at(3.2, 'air-to-open').travelPct === 0 &&
        at(3.2, 'air-to-close').travelPct === 100);
  check('a current above the high threshold is a fault too',
        at(23, 'air-to-open').failed === true);
  check('"hold" holds where it was',
        at(3.2, 'air-to-open', 'hold', { wasPct: 37 }).travelPct === 37);
  check('and a set position goes there',
        at(23, 'air-to-open', { pct: 80 }).travelPct === 80);

  check('a command a little under the live zero is followed, not failed',
        (function () { const r = at(3.8, 'air-to-open');
          return r.failed === false &&
                 r.status === LPE.instrument.STATUS.UNDER &&
                 r.travelPct === 0; })(),
        'it is a real command on the stop, which is worth knowing about');

  refuses('it refuses an action it was not told',
    () => A.travelFrom({ assembly: asm, mA: 12,
      onSignalFault: 'fail-safe' }), 'air-to-open');
  refuses('and refuses to decide where a lost command goes',
    () => A.travelFrom({ assembly: asm, mA: 12, action: 'air-to-open' }),
    'will not choose');
  refuses('"hold" with nothing recorded is a guess, and is refused',
    () => A.travelFrom({ assembly: asm, mA: 3.2, action: 'air-to-open',
      onSignalFault: 'hold' }), 'wasPct');
  refuses('and it refuses anything that is not an assembly',
    () => A.travelFrom({ assembly: { kind: 'valve' }, mA: 12,
      action: 'air-to-open', onSignalFault: 'fail-safe' }),
    'assemble()');

  check('with no positioner declared it says the answer is a DEMAND',
        /DEMAND/.test(A.travelFrom({
          assembly: A.assemble({ valve: ED15, actuator: A30 }),
          mA: 12, action: 'air-to-open', onSignalFault: 'fail-safe' }).note),
        'without a positioner the stem settles against the spring, and ' +
        'the 657 table here publishes no bench set');
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
