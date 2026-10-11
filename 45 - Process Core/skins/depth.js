/* @layer chrome

   HOW FAR IN YOU ARE LOOKING.

   The core had two views, schem and phys, and they were siblings. That
   is fine while they are alternatives and wrong the moment one is
   meant to be INSIDE the other -- siblings cannot zoom into each
   other, so every "click the valve to open it" ends up as a second
   application that happens to share a catalogue.

   So depth is a single axis, declared once, and every view is a rung
   on it:

     0  loop       the plant: tags, signal lines, ISA symbols
     1  line       real bores, real fittings, real lengths
     2  assembly   the actuator standing on the valve, travel live
     3  section    inside the body: trim, packing, the solved fluid
     4  detail     the throat, or the packing box, close enough to teach

   PRO CUTAWAY IS NOT A RUNG. It is a way of drawing one -- the fluid
   turned on -- and it is available at 2, 3 and 4. Making it a depth
   would mean a reader could be "at pro cutaway" without being
   anywhere in particular.

   WHAT THIS LAYER IS NOT. It does not draw. It does not know what a
   valve looks like. It owns the ladder, what each rung needs in order
   to exist, and which component a click landed on -- and it refuses a
   descent into a rung that the thing being clicked cannot support,
   which is the only reason it is code rather than a comment. */
(function (LPE) {
  'use strict';

  const LADDER = Object.freeze([
    Object.freeze({ name: 'loop', index: 0, scope: 'plant',
      shows: 'the plant -- tags, signals, ISA symbols',
      draws: 'schem-view',
      needs: 'a netlist' }),
    Object.freeze({ name: 'line', index: 1, scope: 'plant',
      shows: 'real bores, fittings and lengths',
      draws: 'phys-view',
      needs: 'a netlist and a catalogue' }),
    Object.freeze({ name: 'assembly', index: 2, scope: 'component',
      shows: 'the actuator standing on the valve, travel live',
      draws: 'chrome: drawActuator over drawValve',
      needs: 'an assembly -- a valve AND an actuator that bolt together' }),
    Object.freeze({ name: 'section', index: 3, scope: 'component',
      shows: 'inside the body: trim, packing, the solved fluid',
      draws: 'chrome: drawValve with the field',
      needs: 'geometry for the body, and a solved field for the fluid' }),
    Object.freeze({ name: 'detail', index: 4, scope: 'component',
      shows: 'the throat or the packing box, close enough to teach from',
      draws: 'chrome: planValveDetail',
      needs: 'a feature to frame -- a throat, a packing box' }),
  ]);

  const byName = {};
  for (const r of LADDER) byName[r.name] = r;

  function rung(name) {
    const r = byName[name];
    if (!r)
      throw new Error('depth.rung: "' + name + '" is not a rung. The ' +
        'ladder is ' + LADDER.map(q => q.name).join(' > ') + '. Pro ' +
        'cutaway is not one of them -- it is a way of drawing a rung, ' +
        'available from assembly inward.');
    return r;
  }

  /* HOW DEEP A THING GOES. A vessel is a vessel at every depth; a
     control valve has an assembly, a section and a throat inside it.
     Asking the component rather than assuming is what stops a click
     on a tank opening an empty cutaway. */
  function deepestFor(component) {
    if (!component) return null;
    const k = component.kind || component.class;
    /* A valve goes all the way in either way. Whether it has an
       actuator decides which rung is FIRST, not how deep it goes --
       openFrom handles that, and writing it twice here produced a
       conditional whose two branches were identical. */
    if (k === 'valve' || k === 'controlValveAssembly') return 'detail';
    if (k === 'pump' || k === 'vessel' || k === 'mixer') return 'line';
    return null;
  }

  /* TWO KINDS OF RUNG, and a click means different things on each.

     The first two are about the PLANT: the subject is the whole loop
     and a component is one thing in it. The last three are about one
     COMPONENT: the subject is the valve and the plant is elsewhere.

     So a click on a component while looking at the plant does not
     step one rung -- it changes subject, and lands on the first rung
     where that component IS the subject. Stepping instead sent a
     click on the valve in a loop diagram to a drawing of the pipe
     it sits in, which is a rung nobody asked for and a surprising
     answer to "open this valve". Once inside, a click is a step
     inward like any other. */
  function openFrom(name, component) {
    const here = rung(name);
    const deepest = deepestFor(component);
    if (!deepest) return null;
    const limit = rung(deepest).index;

    let want;
    if (here.scope === 'plant') {
      /* Change of subject: the first component-scoped rung. */
      want = LADDER.findIndex(r => r.scope === 'component');
    } else {
      want = here.index + 1;
    }
    /* The assembly rung needs an actuator. Without one, the first
       thing inside a valve is its section -- not a picture of a
       valve with nothing standing on it. */
    while (want < LADDER.length && LADDER[want].name === 'assembly' &&
           !(component.actuator || component.hasActuator)) want++;
    if (want >= LADDER.length || want > limit) return null;
    return LADDER[want].name;
  }

  function out(name) {
    const here = rung(name);
    return here.index > 0 ? LADDER[here.index - 1].name : null;
  }

  /* WHAT WAS CLICKED, on a schem plan. The plan already carries every
     symbol's page position and the scale it was drawn at, so this is
     a lookup rather than a geometry problem -- and doing it here
     means the consumer never has to know how a symbol is laid out. */
  function hit(plan, x, y, opts) {
    if (!plan || !Array.isArray(plan.ops))
      throw new Error('depth.hit: expected a schem plan.');
    const o = opts || {};
    const slack = o.slack === undefined ? 1.4 : o.slack;
    let best = null, bestD = Infinity;
    for (const op of plan.ops) {
      if (op.op !== 'symbol' && op.op !== 'instrument') continue;
      const r = (op.scale || 10) * slack;
      const d = Math.hypot(op.x - x, op.y - y);
      if (d <= r && d < bestD) { bestD = d; best = op; }
    }
    if (!best) return null;
    return Object.freeze({
      op: best.op, id: best.id || null, tag: best.tag || best.label || null,
      kind: best.kind || (best.op === 'instrument' ? 'instrument' : null),
      x: best.x, y: best.y,
    });
  }

  LPE.depth = { LADDER: LADDER, rung: rung, openFrom: openFrom,
                out: out, hit: hit, deepestFor: deepestFor };

})(window.LPE = window.LPE || {});
