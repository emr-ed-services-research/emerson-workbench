/* @layer sizing
   @core Process Core -- what one valve does to one stream.
   May use: nothing. Given service conditions and a valve's coefficients,
   returns required Cv or predicted flow. No netlist, no network.
   Never: a frame, a scale, a colour, a drawing.
   Sits beside `geometry` -- that layer is the shape of a single part,
   this one is the flow physics of a single part. The `dynamics` layer
   sits above both and answers how a NETWORK of them behaves.
   See `00 - Project/Process Core -- Flow Lab Plan.md`.                 */
/* ---------------- SIZING: ISA-75.01.01 liquid flow -------------------

   WHY THIS EXISTS SEPARATELY FROM `dynamics`.

   The dynamics layer solves a network with q = Cv*sqrt(dP/SG). That is
   the right shape and it is badly incomplete: it has no piping geometry
   factor, so attached reducers are invisible; no liquid pressure
   recovery factor, so a valve cannot choke; and no vapour pressure, so
   flashing and cavitation cannot exist. It was written for a teaching
   game at 2 gpm and it is honest at that job.

   Real service is not that. Across 40 refinery liquid applications the
   required Cv*sqrt(SG) runs 1 to 1044 with a median of 131 -- against
   0.896 for the game. At those sizes the attached reducers alone move
   the answer by 7 to 10 percent, and choked flow is routine.

   So this layer implements the real equations, cited, and the dynamics
   layer can adopt them when something needs it to.

   THE EQUATIONS are `ISA-75.01.01` (IEC 60534-2-1 Mod), as set out with
   a worked example in the Control Valve Handbook 6th edition chapter 5.
   Both are held. The forms used here:

     Cv  = q / (N1 * Fp * sqrt(dP_sizing / (rho1/rho0)))

     Fp  = 1 / sqrt(1 + (sumK / N2) * (Cv / d^2)^2)

     FLP = FL / sqrt(1 + (FL^2 / N2) * (K1 + KB1) * (Cv / d^2)^2)

     Ff  = 0.96 - 0.28 * sqrt(Pv / Pc)

     dP_choked = (FLP / Fp)^2 * (P1 - Ff * Pv)

   with N1 = 1.0 and N2 = 890 for q in gpm, pressures in psia and d in
   inches, from the standard's Equation Constants table.

   Fp and FLP both contain Cv, which is what is being solved for, so the
   standard's own procedure is iterative: assume a valve, compute, check
   the answer against that valve's capacity, repeat. `requiredCv` does
   that iteration and REPORTS it rather than hiding it, because which
   valve you assumed is part of the answer.

   ATTACHED FITTINGS. For the standard concentric reducer pair the
   Handbook's example uses:

     K1  = 0.5  * (1 - d^2/D^2)^2        inlet reducer
     K2  = 1.0  * (1 - d^2/D^2)^2        outlet increaser
     KB1 = KB2 = 1 - (d/D)^4             Bernoulli, and they cancel
     sumK = K1 + K2 = 1.5 * (1 - d^2/D^2)^2

   This is the one piece of fitting resistance the vault can already
   source, and it is why the flow lab's first benchmark is a valve with
   reducers on it rather than an elbow.                                 */
'use strict';

(function (LPE) {

  const N1 = 1.0;      // q in gpm, dP in psi
  const N2 = 890;      // d in inches

  function need(o, keys, where) {
    const miss = keys.filter(k => typeof o[k] !== 'number' || !isFinite(o[k]));
    if (miss.length)
      throw new Error(where + ': missing or non-numeric ' + miss.join(', ') +
        '. Sizing refuses to assume a service condition -- every one of ' +
        'them changes the answer, and a default here would be a number ' +
        'nobody chose.');
  }

  /* Standard concentric reducers, valve d into line D. Returns the
     resistance sum the geometry factor needs, and the inlet pair FLP
     needs. d === D means no fittings and both are zero. */
  function reducerK(d, D) {
    if (!(d > 0) || !(D > 0))
      throw new Error('reducerK: valve bore d and line bore D must both be ' +
                      'positive inches');
    if (d > D)
      throw new Error('reducerK: valve bore ' + d + ' in exceeds line bore ' +
                      D + ' in. A valve larger than its line is not a ' +
                      'reducer installation; state the real line size.');
    const r = 1 - (d * d) / (D * D);
    const K1 = 0.5 * r * r;
    const K2 = 1.0 * r * r;
    const KB1 = 1 - Math.pow(d / D, 4);
    return { K1: K1, K2: K2, KB1: KB1, sumK: K1 + K2, inlet: K1 + KB1 };
  }

  const Fp = (sumK, Cv, d) =>
    1 / Math.sqrt(1 + (sumK / N2) * Math.pow(Cv / (d * d), 2));

  const FLP = (FL, inletK, Cv, d) =>
    FL / Math.sqrt(1 + (FL * FL / N2) * inletK * Math.pow(Cv / (d * d), 2));

  /* Liquid critical pressure ratio factor. */
  const Ff = (Pv, Pc) => 0.96 - 0.28 * Math.sqrt(Pv / Pc);

  /* ---- the whole calculation for ONE assumed valve -------------------
     svc: {q, P1, P2, sg, Pv, Pc}  pressures ABSOLUTE (psia)
     vlv: {Cv, FL, d}              the assumed valve
     line: D                       line bore, inches; omit for no fittings */
  function sizeLiquid(svc, vlv, D) {
    need(svc, ['q', 'P1', 'P2', 'sg'], 'sizeLiquid service');
    need(vlv, ['Cv', 'FL', 'd'], 'sizeLiquid valve');
    if (svc.P2 > svc.P1)
      throw new Error('sizeLiquid: P2 (' + svc.P2 + ') exceeds P1 (' +
        svc.P1 + '). Flow does not run uphill in pressure.');

    const dP = svc.P1 - svc.P2;
    const k = (D === undefined || D === null || D === vlv.d)
      ? { sumK: 0, inlet: 0, K1: 0, K2: 0, KB1: 0 }
      : reducerK(vlv.d, D);

    const fp = Fp(k.sumK, vlv.Cv, vlv.d);
    const flp = FLP(vlv.FL, k.inlet, vlv.Cv, vlv.d);

    /* Choked flow needs vapour and critical pressure. Without them the
       check cannot be made, and the result says so rather than quietly
       assuming the valve never chokes. */
    let ff = null, dPchoked = null, choked = null;
    if (typeof svc.Pv === 'number' && typeof svc.Pc === 'number') {
      ff = Ff(svc.Pv, svc.Pc);
      dPchoked = Math.pow(flp / fp, 2) * (svc.P1 - ff * svc.Pv);
      choked = dP >= dPchoked;
    }
    const dPsizing = (choked === true) ? dPchoked : dP;

    const Cv = svc.q / (N1 * fp * Math.sqrt(dPsizing / svc.sg));

    return {
      Cv: Cv, dP: dP, dPsizing: dPsizing, dPchoked: dPchoked,
      choked: choked, Ff: ff, Fp: fp, FLP: flp,
      sumK: k.sumK, inletK: k.inlet,
      assumed: { Cv: vlv.Cv, FL: vlv.FL, d: vlv.d },
      fits: Cv <= vlv.Cv,
      chokeCheck: (choked === null)
        ? 'NOT MADE -- Pv and Pc were not supplied, so this result assumes ' +
          'the valve does not choke and cannot know whether it does'
        : (choked ? 'choked' : 'not choked'),
    };
  }

  /* ---- the standard's own iteration ----------------------------------
     Walk a candidate list smallest first and return the first valve whose
     capacity covers the required Cv computed WITH that valve in place.
     Every trial is returned: which valve you assumed is part of the
     answer, and a procedure that hides its trials cannot be checked. */
  function requiredCv(svc, candidates, D) {
    if (!Array.isArray(candidates) || !candidates.length)
      throw new Error('requiredCv: give it the candidate valves to try, ' +
        'smallest first. There is no default valve line -- which valves ' +
        'are available is a fact about the plant, not about physics.');
    const trials = [];
    let picked = null;
    for (const v of candidates) {
      const r = sizeLiquid(svc, v, D);
      trials.push(r);
      if (r.fits) { picked = r; break; }
    }
    return { picked: picked, trials: trials,
             exhausted: picked === null };
  }

  LPE.sizing = {
    sizeLiquid: sizeLiquid, requiredCv: requiredCv,
    reducerK: reducerK, Ff: Ff, Fp: Fp, FLP: FLP, N1: N1, N2: N2,
  };

})(window.LPE = window.LPE || {});
