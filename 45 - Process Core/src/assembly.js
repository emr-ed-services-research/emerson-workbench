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
      /* Packing friction and seat load are the caller's to supply --
         they are properties of the packing arrangement and the seat
         construction, both of which are choices, not consequences. */
      const packing = svc.packingFrictionLb || 0;
      const seat = svc.seatLoadLb || 0;
      const needed = fluid + packing + seat;
      thrust = { fluidLb: fluid, packingLb: packing, seatLb: seat,
                 neededLb: needed, availableLb: maxThrust,
                 marginLb: maxThrust - needed };
      record('thrust', needed <= maxThrust,
        'the plug needs ' + needed.toFixed(0) + ' lb and the actuator ' +
        'makes ' + maxThrust + ' lb',
        needed > maxThrust
          ? 'Short on thrust the valve will not shut against the drop.'
          : '');
      if (!packing && !seat)
        thrust.note = 'Packing friction and seat load were not supplied, ' +
          'so this is the FLUID force alone and is optimistic. Both are ' +
          'properties of choices -- which packing, which seat -- and ' +
          'this layer will not invent either.';
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

     WHAT IS DECLARED: the friction. Turning a nut torque into a drag
     force on the stem needs a nut factor, a stud count, a packing
     friction coefficient and a compression model, none of which
     Fisher publishes here -- so this reports friction as an INDEX
     against the middle of the window rather than a figure in pounds,
     and says so. An index is honest about being a comparison; a
     number in pounds would be a claim. */
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

  /* Which actuators in a catalogue will drive a given valve. The
     useful direction in practice: you have the valve, you need the
     actuator. */
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
                   packingTorque: packingTorque,
                   fluidForce: fluidForce };

})(window.LPE = window.LPE || {});
