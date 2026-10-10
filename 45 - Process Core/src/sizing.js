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

  /* ================= FITTING RESISTANCE =============================

     WHAT A FITTING COSTS, and the one thing this must never do is
     invent it.

     A fitting's loss is not a number. It is a CORRELATION evaluated at
     the Reynolds number and bore in play, and the two published
     correlations this vault holds disagree -- so which one is used, and
     how uncertain the answer is, travel with every result.

       Darby 3-K   K = K1/Re + Ki * (1 + Kd / D^0.3)
       Hooper 2-K  K = K1/Re + Kinf * (1 + 1/D)

     with D the internal diameter in INCHES.

     WHICH IS RIGHT DEPENDS ON SIZE, which is why neither is hardcoded.
     Measured on a long-radius buttweld elbow at 10 ft/s:

       NPS 1/2, Re 10k    Crane 0.810  Hooper 1.122  Darby 0.865
       NPS 6,   Re 468k   Crane 0.240  Hooper 0.235  Darby 0.185
       NPS 24,  Re 1.7M   Crane 0.192  Hooper 0.209  Darby 0.142

     At small bore Hooper is the outlier; at every industrial size Darby
     is, low by 23 to 47 percent, while Crane and Hooper agree inside 2.
     A layer that picked one for you would be picking wrong half the
     time, so the basis is part of the part's record and the caller can
     ask for the other and compare.

     UNCERTAINTY IS NOT OPTIONAL. Published fitting-loss data carries 25
     to 30 percent in general and 10 percent at the very best, and
     proprietary items run -50 to +100 against generic data. Every
     result carries its band. A K quoted to three decimals as though it
     were exact is a lie the arithmetic will happily tell.

     See `20 - Source Library/Standards/darby-3k.md`, `hooper-2k.md`
     and `crane-tp-410.md`.                                           */

  const METHODS = {
    'darby-3k': {
      need: ['K1', 'Ki', 'Kd'],
      K: (b, Re, D) => b.K1 / Re + b.Ki * (1 + b.Kd / Math.pow(D, 0.3)),
      cite: 'Darby 3-K',
    },
    'hooper-2k': {
      need: ['K1', 'Kinf'],
      K: (b, Re, D) => b.K1 / Re + b.Kinf * (1 + 1 / D),
      cite: 'Hooper 2-K',
    },
  };

  function resistance(basis, Re, D) {
    if (!basis || typeof basis !== 'object')
      throw new Error('sizing.resistance: no basis given. A fitting with no ' +
        'sourced resistance has no resistance this layer will invent -- ask ' +
        'the catalogue for the part\'s basis, and if it has none, say so ' +
        'rather than passing zero.');
    const m = METHODS[basis.method];
    if (!m)
      throw new Error('sizing.resistance: unknown method "' + basis.method +
        '". Known: ' + Object.keys(METHODS).join(', ') + '. Add one only ' +
        'with its publication, not from a table somebody copied.');
    const miss = m.need.filter(k => typeof basis[k] !== 'number');
    if (miss.length)
      throw new Error('sizing.resistance: ' + basis.method + ' needs ' +
        miss.join(', ') + ' and the basis does not carry ' +
        (miss.length > 1 ? 'them' : 'it') + '.');
    if (!(Re > 0))
      throw new Error('sizing.resistance: Reynolds number must be positive. ' +
        'K depends on it -- at Re 10,000 the laminar term is a tenth of the ' +
        'answer and at Re 1,000,000 it is nothing, so it cannot be skipped.');
    if (!(D > 0))
      throw new Error('sizing.resistance: bore must be a positive number of ' +
        'inches. Both correlations carry a size term and both read it in ' +
        'inches, so a millimetre here is wrong by a factor of 25.');

    const K = m.K(basis, Re, D);
    const pct = typeof basis.uncertaintyPct === 'number'
      ? basis.uncertaintyPct : 30;
    return {
      K: K, method: basis.method, cite: m.cite,
      uncertaintyPct: pct, lo: K * (1 - pct / 100), hi: K * (1 + pct / 100),
      source: basis.source || null,
      note: basis.note || null,
    };
  }

  /* Head loss from a resistance coefficient, in psi, for V in ft/s.

       dP = K * rho * V^2 / (2 * gc * 144)
          = K * V^2 * sg * 62.4 / (2 * 32.174 * 144)
          = K * V^2 * sg * 6.734e-3

     The constant was 2.238e-3 on the first pass, which is this
     arithmetic done wrong by a factor of three, and the test caught it:
     one velocity head of water at 2.112 ft/s is 0.0300 psi and the
     layer was returning 0.0100. Worth leaving the derivation here
     rather than the number alone, since a bare constant is exactly what
     nobody re-checks. */
  const PSI_PER_VHEAD = 62.4 / (2 * 32.174 * 144);   // 6.734e-3
  function dPfromK(K, V, sg) {
    if (!(V >= 0)) throw new Error('sizing.dPfromK: velocity must be >= 0');
    if (!(sg > 0)) throw new Error('sizing.dPfromK: specific gravity must be > 0');
    return K * sg * V * V * PSI_PER_VHEAD;
  }

  /* Reynolds number for a round bore. D in inches, V in ft/s, nu in
     ft2/s -- water at 20 C is 1.081e-5. */
  function reynolds(V, D, nu) {
    if (!(D > 0)) throw new Error('sizing.reynolds: bore must be positive inches');
    if (!(nu > 0)) throw new Error('sizing.reynolds: kinematic viscosity must be positive');
    return V * (D / 12) / nu;
  }

  /* ---- K AND Cv ARE THE SAME STATEMENT ------------------------------
     A resistance coefficient and a flow coefficient describe the same
     restriction in different currencies, and the standard already
     carries the exchange rate. ISA-75.01.01's piping geometry factor

         Fp = 1 / sqrt(1 + (sumK / N2) * (Cv / d^2)^2)

     is written so that sumK and (Cv/d^2) trade off exactly. Setting the
     two terms equal gives

         K = N2 * (d^2 / Cv)^2      and      Cv = d^2 * sqrt(N2 / K)

     with N2 = 890 for d in inches -- the same constant the sizing above
     uses, from the standard's own Equation Constants table. So this is
     not a new correlation, it is the one already in the file, read the
     other way round. That matters: it means a fitting's published K can
     enter a Cv-based network solve without anybody inventing a bridge. */
  function cvFromK(K, d) {
    if (!(K > 0))
      throw new Error('sizing.cvFromK: K must be positive. A fitting with ' +
        'zero resistance is not a restriction and should not be in the ' +
        'series at all.');
    if (!(d > 0))
      throw new Error('sizing.cvFromK: bore must be positive inches -- the ' +
        'conversion is through d^2 and is meaningless without it.');
    return d * d * Math.sqrt(N2 / K);
  }
  const kFromCv = (Cv, d) => N2 * Math.pow((d * d) / Cv, 2);

  /* ---- A LINE OF FITTINGS, WITH ABSENCE MADE LOUD -------------------

     Totalling minor losses is a sum, and that is exactly why it is
     dangerous: a fitting with no sourced K contributes zero to a sum
     and the answer still looks finished. A quiet zero is the single
     most expensive thing this layer could do, because the number that
     comes out is plausible, specific, and wrong in the direction that
     makes a line look better than it is.

     So `seriesLoss` REFUSES. It returns no total at all while any entry
     is unsourced, names every one of them, and says what would close
     the gap. A partial answer is available only if the caller asks for
     it explicitly with `allowPartial`, and even then it is labelled as
     a lower bound rather than a result.

     Each entry is {label, basis} -- a basis from the catalogue -- or
     {label, K} for something already evaluated. Conditions are the
     velocity and specific gravity in that reach.                     */
  function seriesLoss(entries, V, sg, Re, D, opts) {
    if (!Array.isArray(entries) || !entries.length)
      throw new Error('sizing.seriesLoss: give it the fittings in the line. ' +
        'An empty line has no loss, which is a different statement from a ' +
        'line whose losses are unknown, and the caller should not be able ' +
        'to confuse the two by passing nothing.');
    const allowPartial = !!(opts && opts.allowPartial);

    const got = [], missing = [];
    for (const e of entries) {
      if (typeof e.K === 'number') {
        got.push({ label: e.label, K: e.K, lo: e.K, hi: e.K, source: e.source || null });
        continue;
      }
      if (e.basis) {
        const r = resistance(e.basis, Re, D);
        got.push({ label: e.label, K: r.K, lo: r.lo, hi: r.hi, source: r.source });
        continue;
      }
      missing.push(e.label || '(unnamed fitting)');
    }

    const sum = a => a.reduce((t, x) => t + x, 0);
    const K = sum(got.map(x => x.K));
    const result = {
      items: got, missing: missing,
      K: K, Klo: sum(got.map(x => x.lo)), Khi: sum(got.map(x => x.hi)),
      dP: dPfromK(K, V, sg),
      dPlo: dPfromK(sum(got.map(x => x.lo)), V, sg),
      dPhi: dPfromK(sum(got.map(x => x.hi)), V, sg),
      complete: missing.length === 0,
    };

    if (missing.length && !allowPartial)
      throw new Error('sizing.seriesLoss: ' + missing.length + ' of ' +
        entries.length + ' fittings have no sourced resistance -- ' +
        missing.join(', ') + '. No total is returned, because a fitting ' +
        'with no K contributes zero to a sum and the answer would still ' +
        'look finished. Give each one a basis from the catalogue, or ask ' +
        'for a partial with {allowPartial:true} and read it as a LOWER ' +
        'BOUND on the real loss.');

    if (missing.length) {
      result.bound = 'LOWER BOUND -- ' + missing.length + ' unsourced: ' +
        missing.join(', ') + '. The real loss is higher by whatever they ' +
        'cost, which nobody here knows.';
    }
    return result;
  }

  LPE.sizing = {
    sizeLiquid: sizeLiquid, requiredCv: requiredCv,
    reducerK: reducerK, Ff: Ff, Fp: Fp, FLP: FLP, N1: N1, N2: N2,
    resistance: resistance, dPfromK: dPfromK, reynolds: reynolds,
    seriesLoss: seriesLoss, cvFromK: cvFromK, kFromCv: kFromCv,
    METHODS: Object.keys(METHODS),
  };

})(window.LPE = window.LPE || {});
