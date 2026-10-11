/* @layer assembly

   A CONTROL VALVE IS NOT A VALVE. It is a valve, a trim, an actuator
   and usually a positioner, bolted together -- and whether they bolt
   together at all is a question with a published answer that nothing
   in this core could previously ask.

   That gap cost real time. A 657 size 30 was proposed to drive an EWT
   NPS 10x8 on the strength of both being Fisher parts in the same
   catalogue. They cannot be assembled: the actuator strokes 3/4 of an
   inch and the valve needs three, it accepts a 3/8 inch stem and the
   valve has 3/4, and the yoke bosses differ by an inch and a half.
   Three published numbers, all available, none checked, and the error
   was caught by a person reading a table rather than by the model.

   So this layer exists to say no. It composes the parts and verifies
   the joint:

     travel     the valve's rated travel must fit inside the
                actuator's maximum
     stem       the valve stem must be the diameter the actuator
                accepts -- the stem connector is machined for it
     yoke boss  must match exactly; this is the spigot the actuator
                sits on and the bolt circle around it
     thrust     the actuator must beat the force the process puts on
                the plug, plus packing friction, plus seat load

   The first three are lookups and are absolute. The fourth is a
   calculation and depends on the service, so it is offered when a
   service is given and skipped, loudly, when one is not.

   WHAT THIS LAYER DOES NOT DO: it does not draw anything, it does not
   know where the assembly sits in a plant, and it does not have an
   opinion about where the plug should be. Travel is an input to this
   core, always, from the actuator's own stem position or from a slider
   or from a 4-20 mA signal off a bench -- which of those is supplying
   it is the consumer's business, and keeping it so is what lets the
   same model serve a drawing, a simulation and a hardware rig without
   knowing which it is in. */
(function (LPE) {
  'use strict';

  /* Force on the plug from the pressure drop, pounds. The unbalanced
     area is what the fluid can push on: a plug with balance holes has
     almost none, an unbalanced plug has the whole port.

     ISA-75.01.01 sizes for FLOW. This is the other question the same
     service asks -- can the actuator hold the plug where you put it --
     and it is answered from the port area and the drop across it,
     which is as direct as it sounds. */
  function fluidForce(spec) {
    const d = spec.port, dP = spec.dP;
    if (!(d > 0)) throw new Error('assembly.fluidForce: port diameter.');
    if (!(dP >= 0)) throw new Error('assembly.fluidForce: dP in psi.');
    const portArea = Math.PI * d * d / 4;
    /* A balanced plug leaves the stem area and the seal drag; an
       unbalanced one presents the whole port. The balanced residual is
       a CONVENTION and is named, not hidden: real residual unbalance
       depends on seal fit and is a manufacturer's figure. */
    const residual = spec.balanced === false ? 1 : 0.12;
    return portArea * dP * residual;
  }

  function assemble(spec) {
    if (!spec || !spec.valve || !spec.actuator)
      throw new Error('assembly.assemble: needs {valve, actuator} -- two ' +
        'catalogue parts. An assembly is the JOINT between them, so it ' +
        'cannot be formed from one.');
    const v = spec.valve, a = spec.actuator;
    const vd = v.dims || {}, ad = a.dims || {};
    const tag = spec.tag || null;
    const at = 'assembly' + (tag ? ' ' + tag : '');

    const faults = [];
    const need = (obj, key, who, why) => {
      if (typeof obj[key] === 'number') return obj[key];
      faults.push(who + ' carries no ' + key + '. ' + why);
      return null;
    };

    const travel = need(vd, 'travel', 'the valve',
      'Rated travel is on every valve row in Catalog 12.');
    const maxTravel = need(ad, 'maxTravel', 'the actuator',
      'Maximum travel is in the actuator manual\'s specification table.');
    const vStem = need(vd, 'stem', 'the valve',
      'Stem diameter is in Table 12 of D100017X012 for ED bodies. ' +
      'Without it nothing can say whether the stem connector fits.');
    const aStem = need(ad, 'stemAccepted', 'the actuator',
      'The accepted valve stem diameter is in the actuator table.');
    const vYoke = need(vd, 'yokeBoss', 'the valve',
      'Yoke boss is in Table 12 of D100017X012. A guessed yoke boss is ' +
      'an assembly that does not bolt together, so it is never assumed.');
    const aYoke = need(ad, 'yokeBoss', 'the actuator',
      'Yoke boss diameter is in the actuator table.');

    if (faults.length)
      throw new Error(at + ': cannot be checked. ' + faults.join(' '));

    const checks = [];
    const fail = [];
    const record = (name, ok, said, why) => {
      checks.push({ name: name, ok: ok, said: said });
      if (!ok) fail.push(name + ': ' + said + (why ? ' ' + why : ''));
    };

    record('travel', travel <= maxTravel + 1e-9,
      'the valve strokes ' + travel + ' in and the actuator reaches ' +
      maxTravel + ' in',
      travel > maxTravel
        ? 'A short actuator cannot open the valve fully; it is not a ' +
          'de-rate, the plug simply stops.' : '');

    record('stem', Math.abs(vStem - aStem) < 1e-9,
      'the valve stem is ' + vStem + ' in and the actuator accepts ' +
      aStem + ' in',
      Math.abs(vStem - aStem) >= 1e-9
        ? 'The stem connector is machined for one diameter.' : '');

    record('yokeBoss', Math.abs(vYoke - aYoke) < 1e-9,
      'the valve yoke boss is ' + vYoke + ' in and the actuator\'s is ' +
      aYoke + ' in',
      Math.abs(vYoke - aYoke) >= 1e-9
        ? 'The boss is the spigot the actuator sits on; a mismatch is ' +
          'not a mounting kit, it is a different actuator.' : '');

    /* ---- thrust, when a service is given --------------------------- */
    let thrust = null;
    if (spec.service) {
      const svc = spec.service;
      if (!(svc.dP >= 0))
        throw new Error(at + ': a service was given with no dP. Shutoff ' +
          'thrust is set by the pressure drop the plug has to hold.');
      const maxThrust = ad.maxThrust;
      if (typeof maxThrust !== 'number')
        throw new Error(at + ': the actuator carries no maxThrust, so a ' +
          'service cannot be checked against it. Remove the service or ' +
          'source the thrust.');
      const fluid = fluidForce({ port: vd.port, dP: svc.dP,
                                 balanced: spec.balanced });
      /* Packing friction: supplied, or looked up when the service
         names a packing and the catalogue is to hand. Which packing
         is a choice, so it has to be stated -- but once stated the
         force is published and there is no reason to make the caller
         carry it. */
      let packing = svc.packingFrictionLb || 0;
      let packingFrom = packing ? 'supplied by the caller' : null;
      if (!packing && svc.packingType && spec.catalogue) {
        const pf = packingFriction({ catalogue: spec.catalogue,
          packingType: svc.packingType, stem: vStem });
        packing = pf.frictionLb;
        packingFrom = pf.packingType + ' packing, ' + pf.source;
      }
      const seat = svc.seatLoadLb || 0;
      const needed = fluid + packing + seat;
      thrust = { fluidLb: fluid, packingLb: packing, seatLb: seat,
                 packingFrom: packingFrom,
                 neededLb: needed, availableLb: maxThrust,
                 marginLb: maxThrust - needed };
      record('thrust', needed <= maxThrust,
        'the plug needs ' + needed.toFixed(0) + ' lb and the actuator ' +
        'makes ' + maxThrust + ' lb',
        needed > maxThrust
          ? 'Short on thrust the valve will not shut against the drop.'
          : '');
      if (!packing && !seat)
        thrust.note = 'Neither packing friction nor seat load was given, ' +
          'so this is the FLUID force alone and is optimistic. Name a ' +
          'packing in the service -- {packingType} with a catalogue -- ' +
          'and the friction is looked up, because Fisher publishes it.';
      else if (!seat)
        thrust.note = 'Seat load was not given. It is a property of the ' +
          'seat construction and a shutoff class, so this layer will ' +
          'not invent it.';
    }

    const ok = fail.length === 0;
    if (ok || spec.lenient === true) {
      return Object.freeze({
        kind: 'controlValveAssembly',
        tag: tag, valve: v, actuator: a,
        positioner: spec.positioner || null,
        travel: travel, stem: vStem, yokeBoss: vYoke,
        checks: Object.freeze(checks.map(Object.freeze)),
        thrust: thrust ? Object.freeze(thrust) : null,
        fits: ok,
        note:
          'Checked against the published mounting numbers: travel, stem ' +
          'diameter and yoke boss, all three. Thrust is checked only ' +
          'when a service says what the plug has to hold.',
      });
    }

    throw new Error(at + ' will not go together. ' + fail.join(' ') +
      ' These are published numbers -- the valve\'s from Catalog 12 and ' +
      'Table 12 of D100017X012, the actuator\'s from its own manual -- ' +
      'so this is a specification error rather than a modelling one. ' +
      'Pass {lenient: true} to build it anyway and read `fits`, which ' +
      'is what a teaching screen showing a WRONG assembly would do.');
  }

  /* ---- PACKING TORQUE, AND WHY IT IS A WINDOW ------------------------

     Tighten the packing flange nuts too little and the valve leaks to
     atmosphere. Tighten them too much and the stem binds: friction
     climbs, the positioner starts hunting, and a valve that could
     hold position begins to stick. There is no "tighter is safer"
     here, and that instinct is precisely what the published figures
     contradict.

     Fisher prints both ends. D100399X012 Table 6 gives a minimum AND
     a maximum for every stem diameter, pressure class and packing
     type, and the two differ by about half as much again -- 133 to
     199 lbf.in for a 3/4 inch stem in CL300 graphite, 64 to 95 for
     the same stem in PTFE. Graphite takes roughly twice what PTFE
     does, because it is a different material doing the same job.

     WHAT IS SOURCED: the window. Both ends of it, per stem, per
     class, per material, straight off the table.

     WHAT THIS FUNCTION DOES NOT GIVE: a friction force. Turning a
     nut torque into stem drag needs a nut factor, a stud count and a
     compression model, none of which Table 6 publishes -- so what
     comes back here is an INDEX against the middle of the window,
     which is honest about being a comparison.

     A CORRECTION, recorded because the first version of this comment
     claimed more than it should have. It said a friction figure in
     pounds "would be a claim rather than a reading". That is wrong:
     Fisher publishes the force directly for ENVIRO-SEAL packing, in
     newtons and pounds, by stem diameter and packing type, in Tables
     4, 5 and 6 of D101642X012. It is a measured number and it is
     right there. See packingFriction below, which returns it. What
     is unavailable is the force for a STANDARD arrangement at an
     arbitrary nut torque -- a narrower and much less interesting
     gap than the one originally asserted. */
  function packingTorque(spec) {
    if (!spec || !spec.catalogue)
      throw new Error('assembly.packingTorque: needs {catalogue} -- the ' +
        'window comes out of it, not out of this function.');
    const cat = spec.catalogue;
    const type = (spec.packingType || '').toUpperCase();
    if (type !== 'GRAPHITE' && type !== 'PTFE')
      throw new Error('assembly.packingTorque: {packingType} must be ' +
        '"graphite" or "ptfe". They are different materials with ' +
        'different windows -- graphite takes about twice the torque -- ' +
        'so there is no default that is not a guess about the valve.');
    const cls = spec.pressureClass;
    if (!cls)
      throw new Error('assembly.packingTorque: {pressureClass} -- CL300 ' +
        'and CL600 have different windows for the same stem.');
    const stem = spec.stem;
    if (!(stem > 0))
      throw new Error('assembly.packingTorque: {stem} diameter in inches.');

    let row = null;
    for (const id of cat.ids()) {
      const p = cat.part(id);
      if (!p || p.class !== 'packing') continue;
      if (p.packingType.toUpperCase() !== type) continue;
      if (p.pressureClass !== cls) continue;
      if (Math.abs(p.dims.stem - stem) > 1e-9) continue;
      row = p; break;
    }
    if (!row)
      throw new Error('assembly.packingTorque: no published window for a ' +
        stem + ' in stem, ' + cls + ', ' + type.toLowerCase() + ' packing. ' +
        'Table 6 covers 1/2, 3/4, 1 and 1-1/4 inch stems in CL300 and ' +
        'CL600. A window nobody published is not one to interpolate: the ' +
        'numbers are test results, not a curve.');

    const min = row.dims.torqueMin, max = row.dims.torqueMax;
    const mid = (min + max) / 2;
    const applied = spec.applied === undefined ? mid : spec.applied;
    if (!(applied >= 0))
      throw new Error('assembly.packingTorque: {applied} torque must be ' +
        'a non-negative number of lbf.in.');

    const state = applied < min ? 'leaks'
                : applied > max ? 'binding' : 'sealed';
    return Object.freeze({
      packingType: type.toLowerCase(), pressureClass: cls, stem: stem,
      minLbfIn: min, maxLbfIn: max, midLbfIn: mid, appliedLbfIn: applied,
      state: state,
      /* Friction as a multiple of what the middle of the window
         gives. Declared, not calculated: see the note. */
      frictionIndex: applied / mid,
      says: state === 'leaks'
        ? 'Under the published minimum. The packing is not compressed '
        + 'enough to seal and the valve leaks to atmosphere -- which on '
        + 'a hydrocarbon is a fugitive emission, not a drip.'
        : state === 'binding'
        ? 'Over the published maximum. It seals, and it costs: the stem '
        + 'is being squeezed harder than the manual allows, friction '
        + 'climbs, and the positioner starts fighting it. A valve that '
        + 'sticks and hunts is usually a valve somebody over-tightened.'
        : 'Inside the published window. Sealed, and the stem can still '
        + 'move.',
      source: 'D100399X012 Table 6, lubricated with anti-seize per its '
            + 'note 1',
      frictionNote:
        'frictionIndex is a RATIO against the middle of the window, not '
      + 'a force. Turning nut torque into stem drag needs a nut factor, '
      + 'a stud count and a packing friction coefficient, none of which '
      + 'this table publishes -- so the comparison is honest and a '
      + 'number in pounds would not be.',
    });
  }

  /* ---- PACKING FRICTION, AS PUBLISHED -------------------------------

     The force the actuator has to overcome just to move the stem,
     before it does anything about the process. Fisher measured it
     and printed it: D101642X012 Tables 4 (PTFE), 5 (Duplex, the same
     figures) and 6 (Graphite ULF), in newtons and pounds, per stem
     diameter.

     The spread is the reason to care. A 3/4 inch stem drags 250 lb
     in PTFE and 530 lb in graphite -- more than double, for the same
     valve -- so the packing choice can decide whether an actuator is
     big enough. That is a sizing input, not a detail, and until this
     function existed the assembly layer asked the caller to supply
     it and then warned that the answer was optimistic without it. */
  function packingFriction(spec) {
    if (!spec || !spec.catalogue)
      throw new Error('assembly.packingFriction: needs {catalogue}.');
    const cat = spec.catalogue;
    const want = (spec.packingType || 'ptfe').toLowerCase();
    const stem = spec.stem;
    if (!(stem > 0))
      throw new Error('assembly.packingFriction: {stem} diameter in inches.');
    for (const id of cat.ids()) {
      const p = cat.part(id);
      if (!p || p.class !== 'packing' || p.system !== 'enviro-seal') continue;
      if (p.packingType !== want) continue;
      if (Math.abs(p.dims.stem - stem) > 1e-9) continue;
      return Object.freeze({
        stem: stem, packingType: want, frictionLb: p.dims.friction,
        torqueSpecLbfIn: p.dims.torqueSpec === undefined
          ? null : p.dims.torqueSpec,
        source: 'D101642X012, ENVIRO-SEAL Sliding-Stem Valves',
        note: 'A measured force, not a derived one. Graphite ULF drags '
            + 'roughly twice what PTFE does on the same stem, which can '
            + 'decide whether an actuator is big enough.',
      });
    }
    throw new Error('assembly.packingFriction: no published friction for ' +
      'a ' + stem + ' in stem in ' + want + ' packing. D101642X012 covers ' +
      '3/8, 1/2, 3/4, 1, 1-1/4 and 2 inch stems in ptfe and graphite-ulf.');
  }

  /* Which actuators in a catalogue will drive a given valve. The
     useful direction in practice: you have the valve, you need the
     actuator. */
  /* ---- A 4-20 mA COMMAND, AND WHERE THE STEM ENDS UP -----------------

     The seam this core has always declared and never crossed: travel
     comes in from outside, and OUTSIDE is usually a current. A bench
     slider, a LoopBench, a TREX on a DVC6200 -- all of them are the
     same four to twenty milliamps, and the thing that turns that into
     a stem position is the actuator plus how it is piped, which is a
     fact about THIS assembly.

     THREE THINGS HAPPEN HERE AND THEY ARE OFTEN RUN TOGETHER:

     1. The current is decoded. That is the instrument layer's, NE43
        bands and all, and it is called rather than copied -- a
        current below 3.6 mA is a signalled fault, not a reading of
        minus five percent.

     2. The action decides which way the stem goes. On an
        air-to-open valve rising pressure opens it, so 20 mA is wide
        open. On an air-to-close valve rising pressure SHUTS it, and
        20 mA is shut -- which surprises people, and is why this is
        a declared property of the assembly rather than an assumed
        one. A loop that wants 20 mA to mean open on an ATC valve
        reverses the CONTROLLER, in the control room, which is not
        something the valve knows about.

     3. A lost signal goes somewhere. Not to zero. `onSignalFault`
        says where, and it is required, because the one answer this
        layer must never give is a plausible number.

     WHAT IS NOT MODELLED, and would be invention if it were: the
     spring. A real positioner is an inner loop around stem position,
     so travel follows demand and the bench set does not appear in the
     answer -- which is lucky, because the 657 table carried here
     publishes effective area, thrust and travel and no spring range
     at all. With no positioner the relationship IS the spring, and
     this function says so rather than pretending otherwise. */
  const ACTIONS = {
    'air-to-open': { opensWith: 'pressure', failsTo: 0,
      says: 'rising pressure opens it, so 20 mA is wide open and a '
          + 'loss of air shuts it' },
    'air-to-close': { opensWith: 'spring', failsTo: 100,
      says: 'rising pressure shuts it, so 20 mA is SHUT and a loss of '
          + 'air opens it' },
  };

  function travelFrom(spec) {
    const asm = spec && spec.assembly;
    if (!asm || asm.kind !== 'controlValveAssembly')
      throw new Error('assembly.travelFrom: {assembly} is what assemble() '
        + 'returned. Which way a current moves a stem depends on the '
        + 'actuator and how it is piped, so there is no answer without '
        + 'one.');
    if (!LPE.instrument || typeof LPE.instrument.fromCurrent !== 'function')
      throw new Error('assembly.travelFrom: the instrument layer is not '
        + 'loaded. Decoding 4-20 mA is its job, NE43 bands included, and '
        + 'this layer will not keep a second copy of those thresholds.');

    const act = ACTIONS[spec.action];
    if (!act)
      throw new Error('assembly.travelFrom: {action} must be '
        + Object.keys(ACTIONS).map(k => '"' + k + '"').join(' or ')
        + '. It decides which end of the signal is open, and guessing '
        + 'it gets the valve backwards in exactly the case where being '
        + 'backwards is dangerous.');

    const fault = spec.onSignalFault;
    if (fault !== 'fail-safe' && fault !== 'hold' &&
        !(fault && typeof fault.pct === 'number'))
      throw new Error('assembly.travelFrom: {onSignalFault} must be '
        + '"fail-safe", "hold", or {pct}. A lost command has to go '
        + 'somewhere and this layer will not choose; the one answer it '
        + 'must never give is a plausible number.');
    if (fault === 'hold' && typeof spec.wasPct !== 'number')
      throw new Error('assembly.travelFrom: "hold" needs {wasPct} -- '
        + 'where it was when the signal went. Holding at a position '
        + 'nobody recorded is the same as guessing.');

    const dec = LPE.instrument.fromCurrent(spec.mA, { lo: 0, hi: 100 },
                                           spec.bands);
    const S = LPE.instrument.STATUS;
    const failed = dec.status === S.FAIL_LOW || dec.status === S.FAIL_HIGH;

    let openPct, why;
    if (failed) {
      openPct = fault === 'fail-safe' ? act.failsTo
              : fault === 'hold' ? spec.wasPct : fault.pct;
      why = dec.why + ' -- so the command is gone, and this assembly is '
          + 'configured to ' + (fault === 'fail-safe'
              ? 'go to its fail-safe position' : fault === 'hold'
              ? 'hold where it was' : 'drive to a set position') + '.';
    } else {
      /* Under- and over-range are REAL commands a little off the end
         of the calibrated span, so they are followed and clamped --
         and they keep their status, because a positioner sitting on
         its stop is worth knowing about. */
      const sig = Math.max(0, Math.min(100, dec.value));
      openPct = spec.action === 'air-to-open' ? sig : 100 - sig;
      why = dec.why;
    }

    const travelPct = Math.max(0, Math.min(100, openPct));
    return Object.freeze({
      mA: spec.mA,
      signalPct: dec.value === null ? null
        : Math.max(0, Math.min(100, dec.value)),
      travelPct: travelPct,
      inches: travelPct / 100 * asm.travel,
      status: dec.status,
      failed: failed,
      action: spec.action,
      says: act.says,
      why: why,
      positioner: asm.positioner || null,
      note: asm.positioner
        ? 'A positioner closes an inner loop around stem position, so '
        + 'travel follows demand and the spring range does not enter '
        + 'the answer.'
        : 'NO POSITIONER IS DECLARED on this assembly. Without one the '
        + 'stem settles where diaphragm pressure balances the spring, '
        + 'and that needs a bench set -- which the 657 table carried '
        + 'here does not publish. What comes back is therefore the '
        + 'DEMAND, and it is the demand a positioner would make real.',
    });
  }

  function actuatorsFor(cat, valve, opts) {
    if (!cat || typeof cat.ids !== 'function')
      throw new Error('assembly.actuatorsFor: expected a loaded catalogue.');
    const out = [];
    for (const id of cat.ids()) {
      const p = cat.part(id);
      if (!p || p.class !== 'actuator') continue;
      try {
        const asm = assemble(Object.assign({}, opts,
          { valve: valve, actuator: p }));
        if (asm.fits) out.push({ id: id, actuator: p, assembly: asm });
      } catch (e) { /* does not fit; that is the answer */ }
    }
    return out;
  }

  LPE.assembly = { assemble: assemble, actuatorsFor: actuatorsFor,
                   travelFrom: travelFrom, ACTIONS: ACTIONS,
                   packingTorque: packingTorque,
                   packingFriction: packingFriction,
                   fluidForce: fluidForce };

})(window.LPE = window.LPE || {});
