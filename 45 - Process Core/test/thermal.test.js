/* @layer thermal
   @core Process Core -- the thermal layer's own acceptance test.
   Declares the layer it guards, so the layer guard can tell a test
   from an implementation.

       node test/thermal.test.js                                      */
'use strict';
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'thermal.js'));
const T = global.window.LPE.thermal;

let failures = 0;
const check = (what, ok, detail) => {
  console.log((ok ? '  ok    ' : '  FAIL  ') + what);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};
const refuses = (what, fn, fragment) => {
  let msg = null;
  try { fn(); } catch (e) { msg = e.message; }
  if (msg === null) { failures++;
    console.log('  FAIL  ' + what + '\n        it was allowed'); return; }
  if (fragment && msg.indexOf(fragment) < 0) { failures++;
    console.log('  FAIL  ' + what + '\n        said: ' + msg); return; }
  console.log('  ok    ' + what);
};
const near = (a, b, t) => Math.abs(a - b) <= t;

/* FIC-101's exchanger: a product rundown trim cooler. The numbers are
   the loop's own and they close by hand -- 560 gpm of water warming
   30 degF absorbs 8.4 MMBtu/hr, which is what it takes to cool 545 gpm
   of a 0.55 cp hydrocarbon by 70 degF. */
const HOT = { gpm: 545, cp: 0.55, lbPerGal: 6.68, inletF: 180 };
const CW = g => T.waterStream(g, 60);
const D = T.uaForDuty({ hot: HOT, cold: CW(560), hotOutletF: 110 });

check('the design duty is the 8.4 MMBtu/hr the two sides balance at',
      near(D.dutyBtuHr / 1e6, 8.4, 0.05),
      (D.dutyBtuHr / 1e6).toFixed(2) + ' MMBtu/hr');
check('and the UA that meets it comes back as a number, not a guess',
      D.UA > 0 && /back-calculated/.test(D.note),
      'UA ' + D.UA.toFixed(0) + ' Btu/hr.degF, NTU ' + D.NTU.toFixed(2));

/* ---- at the design point it reproduces the design point ------------
   The round trip is the whole claim: a UA derived from a duty must,
   put back in, give that duty. If it does not, one of the two is
   solving a different equation. */
{
  const r = T.exchange({ hot: HOT, cold: CW(560), UA: D.UA });
  check('the product leaves at the 110 degF the exchanger is specified for',
        near(r.hotOutletF, 110, 0.05), r.hotOutletF.toFixed(2) + ' degF');
  check('and the cooling water leaves at the 90 degF that balances it',
        near(r.coldOutletF, 90, 0.2), r.coldOutletF.toFixed(2) + ' degF');
}

/* ---- the stake, which is the reason the layer exists --------------- */
{
  const warmer = [];
  let last = -Infinity;
  for (const g of [560, 450, 340, 220, 110, 40]) {
    const r = T.exchange({ hot: HOT, cold: CW(g), UA: D.UA });
    warmer.push(r.hotOutletF > last);
    last = r.hotOutletF;
  }
  check('throttling the water warms the product, every step of the way',
        warmer.every(Boolean));

  const at = g => T.exchange({ hot: HOT, cold: CW(g), UA: D.UA }).hotOutletF;
  check('in spec at design and off spec at 40% of it',
        at(560) < 120 && at(226) > 120,
        at(560).toFixed(1) + ' degF at 560 gpm, ' +
        at(226).toFixed(1) + ' degF at 226');
  check('and the margin is worth having rather than a cliff',
        at(340) < 120,
        'two fifths of the cooling can go before the product does -- ' +
        at(340).toFixed(1) + ' degF at 340 gpm. A model where any ' +
        'throttling is instantly fatal teaches nothing about margin');
}

/* ---- the case a stuck valve actually walks into --------------------- */
{
  const r = T.exchange({ hot: HOT, cold: CW(0), UA: D.UA });
  check('no cold flow is answered, not divided by',
        r.hotOutletF === HOT.inletF && r.dutyBtuHr === 0 &&
        /no cold flow/.test(r.why),
        'the product leaves at the temperature it arrived at, which is ' +
        'what an exchanger with nothing running through it does');
  check('and nothing in the model special-cases it',
        T.exchange({ hot: HOT, cold: CW(1), UA: D.UA }).hotOutletF <
          HOT.inletF,
        'one gallon a minute still moves a little heat');
}

/* ---- the relation itself ------------------------------------------- */
check('effectiveness rises with NTU and never reaches 1',
      T.effectiveness(0.5, 0.5) < T.effectiveness(2, 0.5) &&
      T.effectiveness(50, 0.5) < 1);
check('at Cr = 1 it takes the limiting form rather than dividing by zero',
      near(T.effectiveness(3, 1), 3 / 4, 1e-12),
      'NTU/(1+NTU) is what the counter-flow relation tends to, and the ' +
      'general form is 0/0 there');
check('at Cr = 0 it is the condensing/boiling case, 1 - exp(-NTU)',
      near(T.effectiveness(1.2, 0), 1 - Math.exp(-1.2), 1e-12));
check('zero NTU transfers nothing',
      T.effectiveness(0, 0.5) === 0);

refuses('a Cr above 1 is refused -- it means the division is upside down',
  () => T.effectiveness(1, 1.4), 'the wrong way round');
refuses('a duty the second law forbids is refused, and says why',
  () => T.uaForDuty({ hot: HOT, cold: CW(560), hotOutletF: 50 }),
  'second law');
refuses('and so is heat running uphill',
  () => T.uaForDuty({ hot: { gpm: 1, cp: 1, lbPerGal: 8, inletF: 50 },
                      cold: CW(60), hotOutletF: 40 }),
  'does not run uphill');
refuses('a stream missing a property is refused by name',
  () => T.exchange({ hot: { gpm: 1, cp: 1, inletF: 100 },
                     cold: CW(10), UA: 1000 }), 'lbPerGal');

/* ---- it says what it is not ----------------------------------------- */
{
  const r = T.exchange({ hot: HOT, cold: CW(560), UA: D.UA });
  check('and the answer carries its own limits, including which way the ' +
        'error runs',
        /Effectiveness-NTU/.test(r.declared) &&
        /UNDERSTATES/.test(r.declared),
        'constant UA is optimistic as flow drops, so the product gets ' +
        'hotter in life than here -- the comfortable direction, which ' +
        'is the one worth saying out loud');
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
