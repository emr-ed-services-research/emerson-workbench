/* @layer instrument
   @core Process Core -- a device that OBSERVES the process.
   May use: nothing. One instrument, one reading.
   Never: a netlist, a frame, a scale, a colour, a drawing.
   Sits beside `geometry` and `sizing`: those are the shape and the flow
   physics of one part, this is what a device reports about one.
   See `00 - Project/Process Core -- Flow Lab Plan.md`, Phase 4.        */
/* ---------------- INSTRUMENT: a reading is not a number --------------

   THE THING THIS LAYER EXISTS TO FIX. Everywhere else in this core a
   measurement is a float. That is how the model has been able to say a
   valve is at 24.9% when the device in front of us was reporting that
   travel was INVALID -- because there is no actuator attached and the
   feedback arm is measuring nothing.

   A reading has a status. It can be good, it can be off the end of the
   range, it can be a failure signal the transmitter is deliberately
   sending, and it can be unavailable because the chain that would
   produce it is not physically there. Those are five different things
   and a float can express one of them.

   WHERE THE SEMANTICS COME FROM, none of it invented here:

     ANSI/ISA-51.1  Process Instrument Terminology. The DVC6200 manual
                    points at it by name for range, span and accuracy,
                    so those words are used as it defines them: RANGE is
                    the pair of limits, SPAN is their difference, and
                    reference accuracy is quoted as a percent OF SPAN
                    unless it says otherwise.

     NAMUR NE43     What a 4-20 mA transmitter does when it cannot
                    measure. The signal range is divided so that a
                    reading below the live zero or above full scale is
                    distinguishable from a fault, and the DVC6200 states
                    its own thresholds: failure low below 3.6 mA,
                    failure high above 22.5 mA, selectable.

     D103639X012    the DVC6200 field device specification, and the HW2
     and the HW2    instruction manual for the reference accuracies:
     manual         1% of travel span for the integral position
                    transmitter, 2% for the integral switch.

   WHAT IT DELIBERATELY DOES NOT DO. It does not convert, filter,
   calibrate or average. An instrument here reports what it would
   report; deciding what to believe is the consumer's job and needs the
   status, which is exactly why the status travels with the value.    */
'use strict';

(function (LPE) {

  /* NAMUR NE43 as the DVC6200 states it. The bands are contiguous and
     ordered, so a current is classified by the first band it falls in. */
  const NE43 = {
    failLow: 3.6,       // below this: the transmitter is signalling a fault
    liveZero: 4.0,
    fullScale: 20.0,
    failHigh: 22.5,     // above this: a fault, the other direction
    source: 'NAMUR NE43, thresholds as stated for the Fisher DVC6200 ' +
            'integral position transmitter',
  };

  const STATUS = {
    GOOD: 'good',
    UNDER: 'under-range',
    OVER: 'over-range',
    FAIL_LOW: 'fail-low',
    FAIL_HIGH: 'fail-high',
    UNAVAILABLE: 'unavailable',
  };

  function define(spec) {
    const need = ['variable', 'units'];
    for (const k of need)
      if (!spec || !spec[k])
        throw new Error('instrument.define: an instrument must state its ' +
          k + '. An unnamed reading in unstated units is a number nobody ' +
          'can check.');
    if (!spec.range || typeof spec.range.lo !== 'number' ||
        typeof spec.range.hi !== 'number')
      throw new Error('instrument.define: "' + spec.variable + '" has no ' +
        'range. ISA-51.1 defines accuracy against SPAN, so without a range ' +
        'there is no accuracy either -- a percentage of nothing.');
    if (spec.range.hi <= spec.range.lo)
      throw new Error('instrument.define: range hi must exceed lo; got ' +
        spec.range.lo + ' to ' + spec.range.hi);
    if (!spec.source)
      throw new Error('instrument.define: "' + spec.variable + '" names no ' +
        'source for its range and accuracy. Those are facts about a real ' +
        'device and come from its specification, not from a default.');

    const span = spec.range.hi - spec.range.lo;
    const acc = spec.accuracy || null;
    if (acc && typeof acc.pct !== 'number')
      throw new Error('instrument.define: accuracy must carry a pct.');
    if (acc && acc.of !== 'span' && acc.of !== 'reading')
      throw new Error('instrument.define: accuracy.of must be "span" or ' +
        '"reading" -- they are different claims and ISA-51.1 distinguishes ' +
        'them. One percent of span on a 0-100% travel is a full point ' +
        'everywhere; one percent of reading is a tenth of that at 10%.');

    /* The chain that produces this reading may simply not be there. A
       positioner on the bench with no actuator cannot measure travel,
       and the honest report is not zero and not null -- it is
       "unavailable, and here is why". */
    const absent = spec.requires || null;

    function read(trueValue, ctx) {
      if (absent) {
        const have = (ctx && ctx.present) || [];
        const missing = absent.filter(r => have.indexOf(r) < 0);
        if (missing.length)
          return {
            variable: spec.variable, units: spec.units,
            value: null, lo: null, hi: null,
            status: STATUS.UNAVAILABLE,
            why: 'needs ' + missing.join(', ') + ', which is not present. ' +
                 'This is not a reading of zero; it is the absence of a ' +
                 'measurement, and the two must never print the same.',
          };
      }
      if (typeof trueValue !== 'number' || !isFinite(trueValue))
        return {
          variable: spec.variable, units: spec.units,
          value: null, lo: null, hi: null, status: STATUS.UNAVAILABLE,
          why: 'no value to report',
        };

      let status = STATUS.GOOD;
      if (trueValue < spec.range.lo) status = STATUS.UNDER;
      else if (trueValue > spec.range.hi) status = STATUS.OVER;

      const band = !acc ? 0
        : acc.of === 'span' ? span * acc.pct / 100
        : Math.abs(trueValue) * acc.pct / 100;

      return {
        variable: spec.variable, units: spec.units,
        value: trueValue, lo: trueValue - band, hi: trueValue + band,
        band: band, status: status,
        why: status === STATUS.GOOD ? null
          : 'outside the calibrated range ' + spec.range.lo + ' to ' +
            spec.range.hi + ' ' + spec.units,
      };
    }

    return Object.freeze({
      variable: spec.variable, units: spec.units,
      range: Object.freeze({ lo: spec.range.lo, hi: spec.range.hi }),
      span: span, accuracy: acc ? Object.freeze(acc) : null,
      requires: absent ? absent.slice() : null,
      source: spec.source, tag: spec.tag || null,
      read: read,
    });
  }

  /* ---- a 4-20 mA signal, decoded per NE43 ---------------------------
     Returns the engineering value AND what the current itself means,
     because a transmitter driving 3.5 mA is not reading slightly below
     zero -- it is telling you it has failed, and a linear conversion
     would silently turn that into a plausible negative measurement. */
  function fromCurrent(mA, range, bands) {
    const b = bands || NE43;
    if (typeof mA !== 'number' || !isFinite(mA))
      throw new Error('instrument.fromCurrent: no current to decode');
    if (!range || typeof range.lo !== 'number' || typeof range.hi !== 'number')
      throw new Error('instrument.fromCurrent: a range is required to turn ' +
        'milliamps into anything');

    if (mA < b.failLow)
      return { value: null, status: STATUS.FAIL_LOW, mA: mA,
               why: 'below ' + b.failLow + ' mA, which NAMUR NE43 reserves ' +
                    'for a transmitter signalling its own failure' };
    if (mA > b.failHigh)
      return { value: null, status: STATUS.FAIL_HIGH, mA: mA,
               why: 'above ' + b.failHigh + ' mA, a signalled failure' };

    const frac = (mA - b.liveZero) / (b.fullScale - b.liveZero);
    const value = range.lo + frac * (range.hi - range.lo);
    let status = STATUS.GOOD;
    if (mA < b.liveZero) status = STATUS.UNDER;
    else if (mA > b.fullScale) status = STATUS.OVER;
    return {
      value: value, status: status, mA: mA,
      why: status === STATUS.GOOD ? null
        : 'between the failure threshold and the calibrated end -- a real ' +
          'measurement, but off the end of the range',
    };
  }

  LPE.instrument = {
    define: define, fromCurrent: fromCurrent,
    NE43: NE43, STATUS: STATUS,
  };

})(window.LPE = window.LPE || {});
