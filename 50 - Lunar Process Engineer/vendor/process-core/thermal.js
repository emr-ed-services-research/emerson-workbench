/* @layer thermal
   @core Process Core -- what one exchanger does to two streams.
   May use: nothing. One exchanger, two streams, two outlet temperatures.
   Never: a netlist, a frame, a scale, a colour, a drawing.
   Sits beside `sizing`: that is the flow physics of one part, this is
   the heat physics of one part. `dynamics` answers how much flows
   where and has no notion of heat at all.
   -------------------------------------------------------------------

   WHY THIS LAYER EXISTS.

   A control valve that sticks shut on a cooling-water line stops the
   water. That is the whole of the consequence a model without heat can
   show, and it is not a consequence -- nothing is worse off, nobody has
   to do anything, there is nothing at stake. Every reason the loop
   exists is on the other side of the exchanger tubes, and the netlist
   deliberately stopped at the tubes: "what happens on the other side is
   a different loop's problem".

   It is this layer's problem. Give it both streams and it says what
   comes out, and then a valve that will not open has somewhere to show
   up: the product it was cooling gets hotter, crosses the number on its
   specification, and goes to slops.

   Effectiveness-NTU AND NOT LMTD, for the reason set out in
   `20 - Source Library/Standards/effectiveness-ntu.md`: LMTD answers
   what AREA a duty needs, which is a design question with both outlets
   already known. This answers what comes OUT of a given exchanger at
   given flows, which is the only question an operating model can ask.

   AND IT DEGRADES BY ITSELF. Nothing here special-cases a closed valve.
   As cold flow falls, Cmin falls, NTU rises, effectiveness rises toward
   one -- and Qmax falls faster, because it is Cmin times the inlet
   difference. Duty drops, the hot outlet climbs. The behaviour that
   makes the lesson comes out of the arithmetic rather than being
   written in.                                                        */
(function (LPE) {
  'use strict';

  /* Water, near enough, at the temperatures a cooling loop runs at.
     Anything else is the caller's to state. */
  const WATER_CP = 1.0;          /* Btu/lb.degF */
  const WATER_LB_PER_GAL = 8.33;

  function need(o, keys, where) {
    for (const k of keys)
      if (typeof o[k] !== 'number' || !isFinite(o[k]))
        throw new Error('thermal.' + where + ': {' + k + '} is required ' +
          'and must be a number. An exchanger with a missing stream ' +
          'property has no answer, and a default here would be this ' +
          'layer inventing a process.');
  }

  /* Heat capacity rate, Btu/hr.degF, from a volumetric flow. */
  function capacityRate(spec) {
    need(spec || {}, ['gpm', 'cp', 'lbPerGal'], 'capacityRate');
    return spec.gpm * spec.lbPerGal * 60 * spec.cp;
  }

  const waterStream = (gpm, degF) => ({
    gpm: gpm, cp: WATER_CP, lbPerGal: WATER_LB_PER_GAL, inletF: degF,
    fluid: 'water',
  });

  /* ---- counter-flow effectiveness ---------------------------------- */
  function effectiveness(ntu, cr) {
    if (!(ntu >= 0))
      throw new Error('thermal.effectiveness: NTU is UA over the smaller ' +
        'heat capacity rate and cannot be negative; got ' + ntu);
    if (!(cr >= 0 && cr <= 1))
      throw new Error('thermal.effectiveness: Cr is Cmin over Cmax, so it ' +
        'is between 0 and 1 by construction; got ' + cr + '. If it came ' +
        'out above 1 the two were divided the wrong way round.');
    if (Math.abs(1 - cr) < 1e-9) return ntu / (1 + ntu);
    const e = Math.exp(-ntu * (1 - cr));
    return (1 - e) / (1 - cr * e);
  }

  /* ---- UA from a stated duty ---------------------------------------
     There is no published UA for a notional exchanger, so it is not
     claimed to be one. Give this layer the design point -- both flows,
     both inlets, and the hot outlet the exchanger is specified to
     reach -- and it returns the UA that meets it. That makes UA a
     property of a STATED DUTY, which is honest, rather than a
     measurement, which it is not. */
  function uaForDuty(spec) {
    const hot = spec && spec.hot, cold = spec && spec.cold;
    if (!hot || !cold)
      throw new Error('thermal.uaForDuty: needs {hot} and {cold} streams.');
    need(spec, ['hotOutletF'], 'uaForDuty');
    const Ch = capacityRate(hot), Cc = capacityRate(cold);
    const dTin = hot.inletF - cold.inletF;
    if (!(dTin > 0))
      throw new Error('thermal.uaForDuty: the hot stream enters at ' +
        hot.inletF + ' and the cold at ' + cold.inletF + '. Heat does ' +
        'not run uphill in temperature, so there is no duty to meet.');
    const Q = Ch * (hot.inletF - spec.hotOutletF);
    const Cmin = Math.min(Ch, Cc), Cmax = Math.max(Ch, Cc);
    const eps = Q / (Cmin * dTin);
    if (!(eps > 0 && eps < 1))
      throw new Error('thermal.uaForDuty: that duty needs an ' +
        'effectiveness of ' + eps.toFixed(3) + '. Effectiveness is the ' +
        'fraction of the greatest possible heat transfer, so a duty at ' +
        'or above 1 is asking the exchanger to do more than the second ' +
        'law allows with these flows -- cool the hot stream below the ' +
        'cold inlet, in effect. Either the flows are too small or the ' +
        'outlet asked for is too cold.');
    const cr = Cmin / Cmax;
    /* Invert the counter-flow relation. At Cr = 1 it is linear in NTU
       and inverts in closed form; otherwise so does the exponential. */
    const ntu = Math.abs(1 - cr) < 1e-9
      ? eps / (1 - eps)
      : Math.log((1 - eps * cr) / (1 - eps)) / (1 - cr);
    return {
      UA: ntu * Cmin, NTU: ntu, effectiveness: eps, Cr: cr,
      dutyBtuHr: Q,
      note: 'UA back-calculated from the stated design point, not '
          + 'measured and not published. It is a property of the duty '
          + 'this exchanger is specified for.',
    };
  }

  /* ---- what comes out ----------------------------------------------- */
  function exchange(spec) {
    const hot = spec && spec.hot, cold = spec && spec.cold;
    if (!hot || !cold)
      throw new Error('thermal.exchange: needs {hot} and {cold} streams, ' +
        'each with gpm, cp, lbPerGal and inletF.');
    need(spec, ['UA'], 'exchange');
    need(hot, ['inletF'], 'exchange hot');
    need(cold, ['inletF'], 'exchange cold');
    const Ch = capacityRate(hot), Cc = capacityRate(cold);

    /* NO FLOW ON EITHER SIDE IS NOT A DIVISION BY ZERO, it is an
       exchanger doing nothing: whatever is still moving leaves at the
       temperature it came in at. This is exactly the case a stuck-shut
       valve walks into, so it is answered rather than guarded. */
    if (Ch <= 0 || Cc <= 0) {
      return Object.freeze({
        hotOutletF: hot.inletF, coldOutletF: cold.inletF,
        dutyBtuHr: 0, effectiveness: 0, NTU: Infinity, Cr: 0,
        why: (Cc <= 0 ? 'no cold flow' : 'no hot flow') +
             ' -- nothing is exchanged and both streams leave at the ' +
             'temperature they arrived at',
      });
    }

    const Cmin = Math.min(Ch, Cc), Cmax = Math.max(Ch, Cc);
    const cr = Cmin / Cmax;
    const ntu = spec.UA / Cmin;
    const eps = effectiveness(ntu, cr);
    const Q = eps * Cmin * (hot.inletF - cold.inletF);
    return Object.freeze({
      hotOutletF: hot.inletF - Q / Ch,
      coldOutletF: cold.inletF + Q / Cc,
      dutyBtuHr: Q, effectiveness: eps, NTU: ntu, Cr: cr,
      ChBtuHrF: Ch, CcBtuHrF: Cc,
      why: null,
      declared:
        'Counter-flow Effectiveness-NTU. A 1-2 shell-and-tube is a '
      + 'little worse than pure counter-flow for the same UA and this '
      + 'carries no F-factor, because none can be sourced for a '
      + 'notional exchanger. UA is held constant, where in reality it '
      + 'falls as flow does -- so this UNDERSTATES how hot the product '
      + 'gets when the water is throttled back. The error runs the '
      + 'comfortable way, which is worth knowing about rather than '
      + 'being reassured by.',
    });
  }

  LPE.thermal = {
    exchange: exchange, uaForDuty: uaForDuty,
    effectiveness: effectiveness, capacityRate: capacityRate,
    waterStream: waterStream,
    WATER_CP: WATER_CP, WATER_LB_PER_GAL: WATER_LB_PER_GAL,
  };

})(window.LPE = window.LPE || {});
