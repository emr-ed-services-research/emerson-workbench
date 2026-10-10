/* @layer instrument
   @core Process Core -- the instrument layer's own acceptance test.    */
/* Acceptance test for instrument.js.

   THE BAR: a reading carries a status, and the five things a reading
   can be are never collapsed into a float.

       good          the chain measured, and here is the value
       under/over    a real measurement, off the end of the range
       fail-low      the transmitter is signalling its own failure
       fail-high     the same, the other way
       unavailable   the chain that would produce it is not there

   That last one is not hypothetical. A DVC6200 on a bench with no
   actuator cannot measure travel -- its feedback arm is attached to
   nothing -- and this session watched it report exactly that while the
   model carried on quoting 24.9%.                                   */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'instrument.js'));
const I = global.window.LPE.instrument;
const S = I.STATUS;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};
const near = (a, b, t) => Math.abs(a - b) <= (t === undefined ? 1e-9 : t);

console.log('\ninstrument -- a reading is not a number\n');

/* The DVC6200's integral position transmitter, from its own manual:
   4-20 mA isolated, reference accuracy 1% of travel span, NE43. */
const travelTx = I.define({
  tag: 'ZT-1', variable: 'travel', units: '%',
  range: { lo: 0, hi: 100 },
  accuracy: { pct: 1.0, of: 'span' },
  requires: ['actuator', 'feedback-linkage'],
  source: 'Fisher DVC6200 HW2 instruction manual, Table 2: integral ' +
          '4-20 mA position transmitter, reference accuracy 1% of travel span',
});

check('an instrument knows its span, not just its range',
  travelTx.span === 100 && travelTx.range.lo === 0);

/* ---- a good reading carries its band --------------------------------- */
const good = travelTx.read(24.9, { present: ['actuator', 'feedback-linkage'] });
check('a measured reading is good and carries its uncertainty',
  good.status === S.GOOD && near(good.band, 1.0) &&
  near(good.lo, 23.9) && near(good.hi, 25.9),
  good.value + ' % (' + good.lo + ' to ' + good.hi + ')');
check('1% OF SPAN is a full point everywhere, not a percent of the reading',
  near(travelTx.read(5, { present: ['actuator', 'feedback-linkage'] }).band, 1.0),
  'at 5% travel the band is still +/-1 point, which is what "of span" means');

const pctOfReading = I.define({
  variable: 'flow', units: 'gpm', range: { lo: 0, hi: 1000 },
  accuracy: { pct: 1.0, of: 'reading' }, source: 'test',
});
check('and "of reading" is a different claim, as ISA-51.1 distinguishes',
  near(pctOfReading.read(100).band, 1.0) &&
  near(pctOfReading.read(1000).band, 10.0),
  'same 1%, ten times the band at ten times the reading');

/* ---- THE ONE THAT MATTERS: the chain is not there --------------------- */
const bare = travelTx.read(24.9, { present: [] });
check('with no actuator, travel is UNAVAILABLE -- not zero, not null',
  bare.status === S.UNAVAILABLE && bare.value === null,
  bare.why);
check('and it says what is missing',
  /actuator/.test(bare.why) && /feedback-linkage/.test(bare.why));
check('and warns that absence and zero must not print the same',
  /never print the same/.test(bare.why));
check('a bench PWB reading travel is the live case this exists for',
  travelTx.read(24.9, { present: ['actuator'] }).status === S.UNAVAILABLE,
  'the linkage alone being absent is enough -- the measurement has no path');

/* ---- off the end of the range is not a failure ------------------------ */
const over = travelTx.read(104, { present: ['actuator', 'feedback-linkage'] });
check('a reading past full scale is OVER-RANGE, still a measurement',
  over.status === S.OVER && over.value === 104, over.why);
check('and under-range likewise',
  travelTx.read(-3, { present: ['actuator', 'feedback-linkage'] }).status === S.UNDER);

/* ---- NAMUR NE43: what the current itself means ------------------------ */
console.log('');
const RANGE = { lo: 0, hi: 100 };
check('12 mA is mid-scale', near(I.fromCurrent(12, RANGE).value, 50));
check('4 mA is the live zero', near(I.fromCurrent(4, RANGE).value, 0));
check('20 mA is full scale', near(I.fromCurrent(20, RANGE).value, 100));

const failLo = I.fromCurrent(3.5, RANGE);
check('3.5 mA is a SIGNALLED FAILURE, not a reading below zero',
  failLo.status === S.FAIL_LOW && failLo.value === null, failLo.why);
check('and the refusal cites NE43 rather than asserting it',
  /NAMUR NE43/.test(failLo.why));
check('23 mA is a signalled failure the other way',
  I.fromCurrent(23, RANGE).status === S.FAIL_HIGH);

/* The band between the failure threshold and the calibrated end is a
   real measurement that happens to be off scale. Collapsing it into
   "fault" would throw away a valid reading; collapsing it into "good"
   would hide that the loop is outside its range. */
const low = I.fromCurrent(3.8, RANGE);
check('3.8 mA is under-range but REAL -- between fault and live zero',
  low.status === S.UNDER && low.value !== null && low.value < 0,
  low.value.toFixed(2) + ' % at 3.8 mA');
check('and 21 mA is over-range and real, below the fault threshold',
  I.fromCurrent(21, RANGE).status === S.OVER);
check('the four bands are ordered and contiguous',
  I.NE43.failLow < I.NE43.liveZero && I.NE43.liveZero < I.NE43.fullScale &&
  I.NE43.fullScale < I.NE43.failHigh,
  [I.NE43.failLow, I.NE43.liveZero, I.NE43.fullScale, I.NE43.failHigh].join(' < '));

/* ---- what it refuses -------------------------------------------------- */
console.log('');
const refuses = (label, fn, expect) => {
  let m = null;
  try { fn(); } catch (e) { m = e.message; }
  if (m === null) return check(label, false, 'ACCEPTED');
  check(label, m.indexOf(expect) >= 0, m.indexOf(expect) >= 0 ? '' : m);
};
refuses('an instrument with no units is refused',
  () => I.define({ variable: 'x', range: { lo: 0, hi: 1 }, source: 's' }),
  'must state its units');
refuses('an instrument with no range is refused, because accuracy needs span',
  () => I.define({ variable: 'x', units: '%', source: 's' }),
  'a percentage of nothing');
refuses('an instrument with no source is refused',
  () => I.define({ variable: 'x', units: '%', range: { lo: 0, hi: 1 } }),
  'names no source');
refuses('an inverted range is refused',
  () => I.define({ variable: 'x', units: '%', range: { lo: 5, hi: 1 },
                   source: 's' }), 'hi must exceed lo');
refuses('accuracy that does not say of-what is refused',
  () => I.define({ variable: 'x', units: '%', range: { lo: 0, hi: 1 },
                   accuracy: { pct: 1 }, source: 's' }),
  'must be "span" or "reading"');
refuses('decoding a current with no range is refused',
  () => I.fromCurrent(12, null), 'a range is required');

/* ---- what this layer must not contain --------------------------------- */
console.log('');
const src = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'instrument.js'), 'utf8');
const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
check('it reads no netlist', !/toPiping|segments|components/.test(code));
check('it draws nothing', !/fillRect|beginPath|moveTo|lineTo/.test(code));
check('it names no colour', !/#[0-9a-fA-F]{3,6}\b/.test(src));
/* The first version of this searched the source for the words "filter",
   "average" and "calibrate" -- and tripped on Array.prototype.filter,
   which has nothing to do with signal conditioning. It was testing
   vocabulary, not behaviour. The behaviour is what matters: a good
   reading reports the value it was given, unchanged. Conditioning it
   would show up here immediately. */
const probe = [0, 0.1, 37.3, 99.9, 100];
check('it conditions nothing -- a good reading is the value it was given',
  probe.every(x => travelTx.read(x,
    { present: ['actuator', 'feedback-linkage'] }).value === x),
  'an instrument reports what it would report; deciding what to believe is',
  'the consumer job, and that needs the status, not a cleaned number');

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
