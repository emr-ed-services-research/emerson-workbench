/* @layer chrome
   @core Process Core -- the depth axis's own acceptance test.
   Declares the layer it guards, so the layer guard can tell a test
   from an implementation.

       node test/depth.test.js                                        */
'use strict';
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'skins', 'depth.js'));
const D = global.window.LPE.depth;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* ---- the ladder itself --------------------------------------------- */
check('the ladder is one ordered axis, indices matching position',
      D.LADDER.every((r, i) => r.index === i));
check('every rung says what it shows and what it needs',
      D.LADDER.every(r => r.shows && r.needs && r.draws));
check('the plant rungs come first and the component rungs after',
      (function () {
        const s = D.LADDER.map(r => r.scope).join(',');
        return s === 'plant,plant,component,component,component';
      })());

check('an unknown rung is refused by name, with the ladder in the message',
      (function () {
        try { D.rung('cutaway'); return false; }
        catch (e) { return /not a rung/.test(e.message) &&
                           /loop > line > assembly > section > detail/
                             .test(e.message); }
      })());
check('and the message says outright that pro cutaway is not a rung',
      (function () {
        try { D.rung('pro cutaway'); return false; }
        catch (e) { return /not one of them/.test(e.message); }
      })());

/* ---- how deep a thing goes ------------------------------------------
   The question is asked of the component, never assumed, which is what
   stops a click on a tank opening an empty cutaway. */
check('a valve goes all the way to the throat',
      D.deepestFor({ kind: 'valve' }) === 'detail');
check('a vessel stops at the line -- there is no inside to draw',
      D.deepestFor({ kind: 'vessel' }) === 'line');
check('something the ladder has never heard of goes nowhere',
      D.deepestFor({ kind: 'flareStack' }) === null);
check('and nothing goes nowhere', D.deepestFor(null) === null);

/* ---- a click on the plant CHANGES SUBJECT -----------------------------
   This is the one that was wrong. Stepping one rung sent a click on the
   control valve in a loop diagram to a drawing of the pipe it sits in:
   a rung nobody asked for, and a surprising answer to "open this
   valve". */
check('clicking a control valve on the loop opens the assembly',
      D.openFrom('loop', { kind: 'valve', actuator: true }) === 'assembly');
check('from the line rung too -- both are plant views',
      D.openFrom('line', { kind: 'valve', actuator: true }) === 'assembly');
check('a valve with no actuator opens at its section instead',
      D.openFrom('loop', { kind: 'valve' }) === 'section',
      'there is no assembly to draw, and a picture of a valve with ' +
      'nothing standing on it is not one');
check('clicking a tank opens nothing',
      D.openFrom('loop', { kind: 'vessel' }) === null);

/* ---- once inside, a click is a step --------------------------------- */
check('assembly steps in to the section',
      D.openFrom('assembly', { kind: 'valve', actuator: true }) === 'section');
check('section steps in to the detail',
      D.openFrom('section', { kind: 'valve', actuator: true }) === 'detail');
check('the detail is the bottom -- there is nowhere further in',
      D.openFrom('detail', { kind: 'valve', actuator: true }) === null);

check('out() climbs one rung, and stops at the top',
      D.out('assembly') === 'line' && D.out('loop') === null);

/* ---- what was clicked ------------------------------------------------ */
const PLAN = { scale: 10, ops: [
  { op: 'line', pts: [[0, 0], [400, 0]] },
  { op: 'symbol', id: 'fv', tag: 'FV-101', kind: 'valve',
    x: 200, y: 100, scale: 10 },
  { op: 'instrument', tag: 'FT-101', x: 260, y: 100, scale: 10 },
] };

check('hit() refuses anything that is not a plan',
      (function () {
        try { D.hit({ nope: true }, 0, 0); return false; }
        catch (e) { return /expected a schem plan/.test(e.message); }
      })());
check('a click on the valve finds the valve',
      (function () { const h = D.hit(PLAN, 202, 103);
        return !!h && h.tag === 'FV-101' && h.kind === 'valve'; })());
check('a click on empty canvas finds nothing',
      D.hit(PLAN, 20, 300) === null);
check('between two symbols, the nearer one wins',
      (function () { const h = D.hit(PLAN, 248, 100);
        return !!h && h.tag === 'FT-101'; })());
check('a line is not clickable -- only things that have an inside are',
      D.hit(PLAN, 100, 0) === null);

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
