/* Applicability check for the proposed levels, run against the game's own
   fluids model so the answers cannot disagree with what the rig will draw.
   Every claim a level makes has to survive this before it gets built. */
const FL = require('./fluids.js');

const BORE = { '1/4': 0.364, '3/8': 0.493, '1/2': 0.622, '3/4': 0.824, '1': 1.049 };
const area = d => Math.PI * (d / 2) ** 2 / 144;          // ft^2 from inches
const vel = (gpm, d) => gpm / 448.831 / area(d);          // ft/s   (gpm -> cfs)

function re(gpm, d, fluid, t) {
  return FL.reynolds(vel(gpm, d), d, fluid, t);
}
const band = r => r < 2300 ? 'LAMINAR' : r > 4000 ? 'TURBULENT' : 'transition';

console.log('\n=== LEVEL 3 — the dosing line ===');
console.log('Premise: nutrient concentrate metered into the feed runs laminar');
console.log('where the same rate of water would not.\n');

/* Hydroponic A/B stock concentrate: a saturated salt solution. SG ~1.20
   and roughly 3x the kinematic viscosity of water is the conservative end
   of published stock-solution data. Modelled as a fluid the bench can
   carry. */
const CONC = { name: 'CONCENTRATE', sg: 1.20, nuAt: () => 3.0e-6 };

console.log('  rate     line     water Re          concentrate Re');
[[0.05, '1/4'], [0.10, '1/4'], [0.25, '1/4'], [0.50, '3/8'], [1.00, '3/8']]
  .forEach(([q, d]) => {
    const w = re(q, BORE[d], FL.FLUIDS.water, 20), c = re(q, BORE[d], CONC, 20);
    console.log('  ' + q.toFixed(2) + ' gpm  NPS ' + d.padEnd(4) +
      '  ' + String(Math.round(w)).padStart(6) + ' ' + band(w).padEnd(10) +
      '  ' + String(Math.round(c)).padStart(6) + ' ' + band(c));
  });

console.log('\n=== LEVEL 4 — flashing at the mist nozzle ===');
console.log('Premise (design doc step 8): pressure drops below the vapour');
console.log('pressure at the nozzle and the liquid flashes.\n');

/* Saturation pressure of water, kPa absolute. Standard steam-table values. */
const PV = { 10: 1.23, 20: 2.34, 30: 4.25, 40: 7.38, 50: 12.35,
             60: 19.95, 70: 31.20, 80: 47.39, 90: 70.14, 100: 101.42 };
const ATM = 101.3;

console.log('  feed T    Pv (kPa)   flashes into a pod held at...');
Object.entries(PV).forEach(([t, pv]) => {
  const verdict = pv >= ATM ? 'sea-level air (101 kPa)'
    : pv >= 50 ? '<= ' + pv.toFixed(0) + ' kPa  (half an atmosphere)'
    : pv >= 20 ? '<= ' + pv.toFixed(0) + ' kPa  (a fifth of an atmosphere)'
    : '<= ' + pv.toFixed(1) + ' kPa  (effectively vacuum)';
  console.log('  ' + (t + ' C').padEnd(9) + pv.toFixed(2).padStart(7) + '    ' + verdict);
});

console.log('\n  A pod at one atmosphere needs water at 100 C to flash.');
console.log('  Below that the nozzle CAVITATES (dips under Pv, recovers above it)');
console.log('  rather than flashing - a different mechanic with different damage.');

console.log('\n=== LEVEL 4, re-checked against a 51 kPa pod ===');
/* Fisher CVH ch5: choked when dP >= FL^2 (P1 - FF*Pv),
   FF = 0.96 - 0.28*sqrt(Pv/Pc).  Water Pc = 3200 psia. */
const kPa2psi = k => k * 0.145038;
const POD = 51;                         // kPa abs - the hypobaric set point
const P1g = 60;                         // psig, the Thermal Reservoir header already in the game
const P1 = P1g + 14.7;
[20, 40, 60].forEach(t => {
  const pvK = { 20: 2.34, 40: 7.38, 60: 19.95 }[t];
  const Pv = kPa2psi(pvK), P2 = kPa2psi(POD);
  const FF = 0.96 - 0.28 * Math.sqrt(Pv / 3200);
  const FLv = 0.90;                     // globe valve
  const dP = P1 - P2, dPall = FLv * FLv * (P1 - FF * Pv);
  console.log('  water at ' + t + ' C   Pv ' + Pv.toFixed(2) + ' psia' +
    '   dP ' + dP.toFixed(1) + '   dP_allow ' + dPall.toFixed(1) +
    '   -> ' + (dP > dPall ? 'CHOKED, cavitating' : 'not choked') +
    (P2 > Pv ? '   (P2 above Pv: cavitation, not flashing)' : '   (P2 below Pv: FLASHING)'));
});
console.log('\n  So a 60 psig header into a 51 kPa pod cavitates a plain globe valve');
console.log('  at any normal feed temperature. That is a real, diagnosable fault');
console.log('  with a real fix - staged trim - and the vault holds the figures.');
