/* ============================================================
   FLUIDS — the properties the bench loop can actually demonstrate.

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

  root.LPE_FLUIDS = { FLUIDS, waterNu, reynolds, regime, flow, M2_TO_FT2 };

})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined') module.exports = globalThis.LPE_FLUIDS;
