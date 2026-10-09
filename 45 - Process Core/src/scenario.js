/* @layer scenario
   @core Process Core -- Phase 4.

   A LEVEL, AS DATA.

   May use: the netlist (to resolve tags) and a dynamics reading. Never a
   view, a colour, a canvas, a consumer's runtime -- and never a word of
   prose.

   -------------------------------------------------------------------
   WHAT A SCENARIO IS. Take a level. Remove the narrative, remove the
   chrome. What is left is a rig, what the player may touch, and what has
   to become true. That is not a game format -- it is a troubleshooting
   exercise, which is also what a LoopBench bench exercise is and what a
   competency assessment item would be. The same artifact serves all
   three, because the engineering problem does not care what is drawn on
   top of it.

   So this is deliberately AUTHORABLE BY SOMEONE WHO DOES NOT WRITE CODE.
   A scenario is plain data -- it survives JSON.stringify and comes back
   working, which is tested -- and every condition is a declared
   comparison rather than a predicate function. A GUI editor later is an
   editor over this shape; until there is one, an engineer can write one
   in a text file and the validator will tell them, in their own
   vocabulary, what is wrong with it.

   NO WORDS LIVE HERE. A scenario step carries an `id`; the narrative
   layer binds text to that id. The test of whether the split is real is
   that the same scenario runs silent in LoopBench and fully narrated in
   a game -- so `task`, `lesson`, `text` and friends are REJECTED by name
   rather than merely discouraged.

   -------------------------------------------------------------------
   A STEP

     id        what this step is called. The narrative binds to it.
     operable  tags the player may touch here. Everything else is locked.
     observe   the tag this step is about, if there is one. The chrome
               decides HOW to draw attention; the scenario only says to what.
     when      conditions, ALL of which must hold. See below.

   A CONDITION is one of:

     { measure:'HV-1.position', atLeast:0.9 }   one reading, a bound
     { measure:'HV-2.position', atMost:0.35 }
     { each:[...measures], atLeast:1.0 }        every one of them
     { spread:[...measures], atMost:0.15 }      max minus min

   A MEASURE is '<tag>.<quantity>'. Quantities are `position` (how far
   open a valve is, 0..1) and `flow` (what is passing it). Both are read
   off the rig by TAG, which is what tags were for.

   -------------------------------------------------------------------
   WHAT IS NOT HERE. Faults. The plan lists them, and every level's use
   of the word "fault" today is narrative prose -- level 2 talks about a
   fault in the line, but nothing in any level injects one. A schema with
   no consumer is a guess that then has to be maintained, so the slot is
   left out until a level actually needs to inject something. When one
   does, a fault is an override on a component (a valve stuck at a
   position, a bore fouled) and belongs beside `start`.
                                                                         */

(function (LPE) {
  'use strict';

  const QUANTITIES = ['position', 'flow'];
  /* Words are the narrative layer's job. Rejected by name so the split
     cannot quietly erode one helpful string at a time. */
  const PROSE_KEYS = ['task', 'lesson', 'text', 'title', 'label', 'caption',
                      'message', 'prompt', 'hint', 'description'];

  function parseMeasure(m) {
    if (typeof m !== 'string') return null;
    const dot = m.lastIndexOf('.');
    if (dot < 1) return null;
    return { tag: m.slice(0, dot), quantity: m.slice(dot + 1) };
  }

  function Scenario(spec, net) {
    const errors = [];
    const steps = (spec && spec.steps) || [];

    const tagsIn = {};
    const knownTags = [];
    if (net) {
      for (const id of Object.keys(net.components)) {
        const c = net.components[id];
        if (c.tag) { tagsIn[c.tag] = c; knownTags.push(c.tag); }
      }
    }
    const tagList = () => knownTags.length
      ? knownTags.join(', ') : '(this rig has no tagged equipment)';

    /* ---- validation, in the author's vocabulary --------------------- */
    const where = (i) => 'step ' + (i + 1) +
      (steps[i] && steps[i].id ? ' ("' + steps[i].id + '")' : '');

    const checkMeasure = (i, m) => {
      const parsed = parseMeasure(m);
      if (!parsed) {
        errors.push(where(i) + ': "' + m + '" is not a measurement. ' +
          'Write it as <tag>.<quantity>, for example "HV-1.position"');
        return;
      }
      if (net && !tagsIn[parsed.tag]) {
        errors.push(where(i) + ': there is no "' + parsed.tag + '" in this ' +
          'rig. It has: ' + tagList());
      }
      if (QUANTITIES.indexOf(parsed.quantity) < 0) {
        errors.push(where(i) + ': "' + parsed.quantity + '" is not something ' +
          'this rig reports. Try: ' + QUANTITIES.join(', '));
      }
    };

    if (!steps.length) errors.push('this scenario has no steps, so there is nothing to do');

    const seen = {};
    steps.forEach((s, i) => {
      if (!s.id) {
        errors.push(where(i) + ' has no id. The narrative binds its words to ' +
          'the id, so a step without one can never be given any');
      } else if (seen[s.id]) {
        errors.push('two steps are both called "' + s.id + '". Ids have to be ' +
          'unique, or the narrative cannot tell them apart');
      }
      if (s.id) seen[s.id] = true;

      for (const k of PROSE_KEYS) {
        if (s[k] !== undefined) {
          errors.push(where(i) + ' carries "' + k + '". A scenario holds no ' +
            'words -- it is meant to run silent in a bench exercise as well as ' +
            'narrated in a game. Put the text in the narrative, against the id ' +
            '"' + (s.id || '?') + '"');
        }
      }

      (s.operable || []).forEach(tag => {
        if (net && !tagsIn[tag]) {
          errors.push(where(i) + ': cannot make "' + tag + '" operable, there ' +
            'is no such thing in this rig. It has: ' + tagList());
        }
      });
      if (s.observe && net && !tagsIn[s.observe]) {
        errors.push(where(i) + ': cannot observe "' + s.observe + '", there is ' +
          'no such thing in this rig. It has: ' + tagList());
      }

      const when = s.when || [];
      if (!when.length) {
        errors.push(where(i) + ' has no "when", so nothing the player does ' +
          'could ever finish it');
      }
      when.forEach(c => {
        const forms = ['measure', 'each', 'spread'].filter(f => c[f] !== undefined);
        if (forms.length !== 1) {
          errors.push(where(i) + ': a condition says exactly one of "measure", ' +
            '"each" or "spread"' +
            (forms.length ? ' -- this one says ' + forms.join(' and ') : ''));
          return;
        }
        const bounds = ['atLeast', 'atMost'].filter(b => c[b] !== undefined);
        if (!bounds.length) {
          errors.push(where(i) + ': a condition needs "atLeast" or "atMost" -- ' +
            'without a bound there is nothing to compare against');
        }
        if (c.measure !== undefined) checkMeasure(i, c.measure);
        if (c.each !== undefined) {
          if (!Array.isArray(c.each) || c.each.length < 2) {
            errors.push(where(i) + ': "each" wants a list of two or more ' +
              'measurements; for one, use "measure"');
          } else c.each.forEach(m => checkMeasure(i, m));
        }
        if (c.spread !== undefined) {
          if (!Array.isArray(c.spread) || c.spread.length < 2) {
            errors.push(where(i) + ': "spread" is the gap between the highest ' +
              'and lowest of a list, so it wants two or more measurements');
          } else c.spread.forEach(m => checkMeasure(i, m));
        }
      });
    });

    if (spec && spec.start) {
      Object.keys(spec.start).forEach(tag => {
        if (net && !tagsIn[tag]) {
          errors.push('"start" sets "' + tag + '", which is not in this rig. ' +
            'It has: ' + tagList());
        }
      });
    }
    if (spec && spec.rig && net && net.spec.rig && spec.rig !== net.spec.rig) {
      errors.push('this scenario is written for rig "' + spec.rig + '" but was ' +
        'given "' + net.spec.rig + '"');
    }

    /* ---- reading the rig --------------------------------------------
       A measurement is resolved by TAG. Positions come from whatever the
       consumer is holding valve state in -- which may still be keyed by
       the solver's private names -- so the tag is translated through the
       netlist rather than the consumer having to know both. */
    function read(m, state, solved) {
      const { tag, quantity } = parseMeasure(m);
      const c = tagsIn[tag];
      if (quantity === 'position') {
        if (state == null) return 0;
        if (c && c.key !== undefined && state[c.key] !== undefined) return state[c.key];
        return state[tag] !== undefined ? state[tag] : 0;
      }
      if (quantity === 'flow') {
        if (!solved || !solved.q) return 0;
        if (solved.q[tag] !== undefined) return solved.q[tag];
        if (c && c.key !== undefined && solved.q[c.key] !== undefined) return solved.q[c.key];
        return 0;
      }
      return 0;
    }

    function holds(c, state, solved) {
      if (c.measure !== undefined) {
        const v = read(c.measure, state, solved);
        if (c.atLeast !== undefined && !(v >= c.atLeast)) return false;
        if (c.atMost !== undefined && !(v <= c.atMost)) return false;
        return true;
      }
      const list = (c.each || c.spread).map(m => read(m, state, solved));
      if (c.each !== undefined) {
        /* Min against a bound -- the same comparison a hand-written step
           made with Math.min, so the arithmetic is unchanged. */
        const lo = Math.min.apply(null, list);
        const hi = Math.max.apply(null, list);
        if (c.atLeast !== undefined && !(lo >= c.atLeast)) return false;
        if (c.atMost !== undefined && !(hi <= c.atMost)) return false;
        return true;
      }
      const gap = Math.max.apply(null, list) - Math.min.apply(null, list);
      if (c.atLeast !== undefined && !(gap >= c.atLeast)) return false;
      if (c.atMost !== undefined && !(gap <= c.atMost)) return false;
      return true;
    }

    return {
      spec, errors, steps,
      count: steps.length,
      at: i => steps[i],
      ids: steps.map(s => s.id),

      /* Which tags the player may touch at this step. Everything else is
         locked, which is the scenario's business and not the chrome's. */
      operable: i => (steps[i] && steps[i].operable) || [],
      observe: i => (steps[i] && steps[i].observe) || null,

      /* Has this step been satisfied? Every condition must hold. */
      met(i, state, solved) {
        const s = steps[i];
        if (!s) return false;
        return (s.when || []).every(c => holds(c, state, solved));
      },

      /* The starting position of everything the scenario sets, keyed the
         way the consumer holds state. */
      initial() {
        const out = {};
        const start = (spec && spec.start) || {};
        for (const tag of Object.keys(start)) {
          const c = tagsIn[tag];
          out[c && c.key !== undefined ? c.key : tag] = start[tag];
        }
        return out;
      },

      read: (m, state, solved) => read(m, state, solved),
    };
  }

  LPE.scenario = Scenario;
  LPE.scenario.QUANTITIES = QUANTITIES;
  LPE.scenario.PROSE_KEYS = PROSE_KEYS;

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
