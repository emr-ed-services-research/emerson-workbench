/* ============================================================
   FLUIDS \u2014 the properties the bench loop can actually demonstrate.

   Real values, at stated conditions, so the crash course is teaching
   something true rather than three colours of water. Every figure here is
   a standard reference value for the fluid at the condition named; where a
   fluid is only a liquid under pressure, the condition says so, because
   that is the honest reason its temperature cannot be freely dialled.

   Two properties matter and they are independent, which is the lesson:
     SG   decides how much flows for a given pressure drop
            q = Cv * sqrt(dP / SG)
     nu   decides what the flow LOOKS like
            Re = v * D / nu   ->  laminar below 2300, turbulent above 4000

   A dense fluid is not a sluggish one. Propane is half the density of
   water and five times less viscous: more of it flows, and it is more
   turbulent while doing it. That pair coming apart is the whole point of
   putting three fluids on one rig.
   ============================================================ */
(function (root) {

  const M2_TO_FT2 = 10.7639;

  /* Kinematic viscosity of water against temperature. Standard table,
     m^2/s. This is the dial the bench actually turns. */
  const WATER_NU = {
    0: 1.792e-6, 10: 1.307e-6, 20: 1.004e-6, 30: 0.801e-6,
    40: 0.658e-6, 50: 0.553e-6, 60: 0.475e-6, 70: 0.413e-6, 80: 0.365e-6,
  };

  /* Saturation pressure of water against temperature, kPa absolute.
     Standard steam-table values. This is the line a vena contracta has to
     stay above: dip under it and the liquid boils inside the valve. */
  const WATER_PV = {
    0: 0.61, 10: 1.23, 20: 2.34, 30: 4.25, 40: 7.38,
    50: 12.35, 60: 19.95, 70: 31.20, 80: 47.39,
  };
  const KPA_TO_PSI = 0.145038;

  function lerpTable(tbl, t) {
    const keys = Object.keys(tbl).map(Number).sort((a, b) => a - b);
    const c = Math.max(keys[0], Math.min(keys[keys.length - 1], t));
    for (let i = 0; i < keys.length - 1; i++) {
      const a = keys[i], b = keys[i + 1];
      if (c >= a && c <= b) return tbl[a] + (tbl[b] - tbl[a]) * ((c - a) / (b - a));
    }
    return tbl[keys[0]];
  }
  /* psia, because every pressure in a cavitation sum is absolute */
  function waterPv(tempC) { return lerpTable(WATER_PV, tempC) * KPA_TO_PSI; }

  function waterNu(tempC) {
    const keys = Object.keys(WATER_NU).map(Number).sort((a, b) => a - b);
    const t = Math.max(keys[0], Math.min(keys[keys.length - 1], tempC));
    for (let i = 0; i < keys.length - 1; i++) {
      const a = keys[i], b = keys[i + 1];
      if (t >= a && t <= b) {
        const f = (t - a) / (b - a);
        return WATER_NU[a] + (WATER_NU[b] - WATER_NU[a]) * f;   // linear between table points
      }
    }
    return WATER_NU[20];
  }

  const FLUIDS = {
    water: {
      name: 'WATER',
      sg: 1.000,
      nuAt: waterNu,
      tempRange: [0, 80],
      note: 'liquid at bench pressure across the whole range',
    },
    /* Liquid only under pressure - about 57 bar at 20 C. The bench holds it
       near saturation, so its temperature is not a free dial: heat it and
       it does not get hotter, it flashes. That is a later lesson, and the
       reason this one is pinned. */
    co2: {
      name: 'LIQUID CO2',
      sg: 0.772,
      nuAt: () => 0.0908e-6,
      tempRange: [20, 20],
      note: 'held near saturation, about 57 bar at 20 C',
    },
    propane: {
      name: 'LIQUID PROPANE',
      sg: 0.501,
      nuAt: () => 0.204e-6,
      tempRange: [20, 20],
      note: 'held near saturation, about 8.4 bar at 20 C',
    },
    /* Nutrient stock concentrate, for the Garden's dosing skid. NOT a
       bench fluid - the three on R.O.'s switch panel are unchanged.

       HONESTY NOTE, because this one is different in kind from the three
       above. Those are standard reference values for named pure fluids.
       This is a mixture with no single published figure: hydroponic stock
       is made up on site, and the practice literature gives ratios (stock
       is about 100x the delivered strength, injected at 1:100 to 1:3000)
       without ever quoting a density or a viscosity.

       So these are reasoned from the component salts rather than read off
       a table. A 100x stock is close to saturated in calcium and
       potassium nitrate; saturated solutions of those sit around SG
       1.2-1.4, and concentrated salt solutions typically run two to three
       times the kinematic viscosity of water. SG 1.22 and 2.4e-6 are the
       conservative end of that.

       What the level actually turns on is the mixing run's Reynolds
       number, which is dominated by bore and velocity - so the lesson
       survives these two numbers being approximate, and that is the only
       reason it is acceptable to carry them. */
    concentrate: {
      name: 'NUTRIENT STOCK',
      sg: 1.22,
      nuAt: () => 2.4e-6,
      tempRange: [20, 20],
      bench: false,
      note: 'mixture, estimated from its component salts - see the note in fluids.js',
    },
  };

  /* Reynolds number. D in feet, v in ft/s, nu converted from the table. */
  function reynolds(velFtS, boreIn, fluid, tempC) {
    const nu = fluid.nuAt(tempC) * M2_TO_FT2;
    return velFtS * (boreIn / 12) / nu;
  }

  function regime(re) {
    return re < 2300 ? 'laminar' : (re > 4000 ? 'turbulent' : 'transitional');
  }

  /* How much flows, for a given Cv and pressure drop. The SG term is the
     one the fluid selector moves. */
  function flow(cv, dP, fluid) { return cv * Math.sqrt(dP / fluid.sg); }

  /* Vena contracta pressure, the lowest point inside a restriction.
     Pvc = P1 - dP / FL^2      (Fisher CVH ch5, all absolute)
   This is the number that decides cavitation, and it is lower than
   anything a gauge on either flange can read. */
  function venaContracta(p1Abs, dP, FL) { return p1Abs - dP/(FL*FL); }

  root.LPE_FLUIDS = { FLUIDS, waterNu, waterPv, venaContracta,
                      reynolds, regime, flow, M2_TO_FT2, ATM: 14.696 };

})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined') module.exports = globalThis.LPE_FLUIDS;
