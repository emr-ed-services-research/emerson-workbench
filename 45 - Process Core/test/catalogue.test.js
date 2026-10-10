/* @layer catalogue
   @core Process Core -- the catalogue layer's own acceptance test. Declares
   the layer it guards, so the layer guard can tell a test from an
   implementation.                                                        */
/* Acceptance test for catalogue.js and catalogue/parts.json.

   The bar is not "it parses". The bar is that THE CATALOGUE CANNOT HOLD A
   NUMBER NOBODY READ OUT OF A DOCUMENT. Three things have to hold:

     1. the shipped catalogue loads, and every dimension in it agrees with
        what it says the standard printed;
     2. the loader REFUSES each way of getting that wrong, by name;
     3. the refusals are real -- every guard is proved by a case that
        actually trips it, because a check nobody has seen fail is a check
        nobody knows works.

   (3) is the part that earns the file. A loader full of throws that no test
   provokes is decoration.                                                 */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'catalogue.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* Assert that a load throws, and that the message explains itself. A throw
   with a useless message is a check that will be worked around rather than
   read, which is the failure mode CLAUDE.md names. */
function refuses(label, mutate, expect) {
  const data = JSON.parse(fs.readFileSync(RAW, 'utf8'));
  mutate(data);
  let msg = null;
  try { LPE.catalogue.load(data); } catch (e) { msg = e.message; }
  if (msg === null) {
    check(label, false,
      'load() ACCEPTED it. The guard does not work, or no longer covers ' +
      'this case. A rule the catalogue states but does not enforce is worse ' +
      'than no rule: it invites trust it has not earned.');
    return;
  }
  check(label, msg.indexOf(expect) >= 0,
    msg.indexOf(expect) >= 0 ? '' :
    'it threw, but the message does not mention "' + expect + '". Got: ' + msg);
}

const RAW = path.join(__dirname, '..', 'catalogue', 'parts.json');

console.log('\ncatalogue -- every number traces to a document\n');

/* ---------------------------------------------------------------- 1. it loads */

const data = JSON.parse(fs.readFileSync(RAW, 'utf8'));
let cat = null;
try {
  cat = LPE.catalogue.load(data);
  check('the shipped catalogue loads', true, cat.size + ' parts');
} catch (e) {
  check('the shipped catalogue loads', false, e.message);
}

if (cat) {
  check('it holds parts', cat.size > 0, cat.size + ' parts');

  /* The seeded groups. Named explicitly: a group silently vanishing from the
     JSON should break this, because something downstream will be selecting
     on it. */
  for (const g of ['pipe', 'fitting', 'fittingButtweld', 'material'])
    check('group "' + g + '" is present', cat.groups().indexOf(g) >= 0,
      'groups: ' + cat.groups().join(', '));

  /* A spot value, read straight off ASME B16.11 Table 1 and written here
     independently of the JSON. If someone edits the JSON row, this
     disagrees -- which is the point of writing it twice. */
  const el = cat.part('ELBOW90/SW3000/NPS0.5');
  check('the NPS 1/2 socket-weld elbow is 15.5 mm centre-to-socket',
    Math.abs(el.dims.centreToSocket - 15.5 / 25.4) < 1e-4,
    'got ' + el.dims.centreToSocket + ' in');

  /* THE FINDING THAT CAUSED ALL OF THIS, now a standing assertion.
     The core used to draw this elbow at 3 x bore = 1.866 in. */
  check('that elbow is nowhere near the 1.866 in the core used to draw',
    el.dims.centreToSocket < 0.7,
    'it is ' + el.dims.centreToSocket.toFixed(4) + ' in -- the old value was ' +
    '3x too large AND wrong in kind, a sweeping curve where the real part ' +
    'turns the bore inside a compact forged block.');

  /* B16.9 prints both columns and they disagree in the last digit. The
     loader must take the inch value, not the converted millimetre one. */
  const bw = cat.part('ELBOW90/BWLR/NPS0.5');
  check('a dual-printed B16.9 dimension takes the inch column',
    bw.dims.centreToEnd === 1.50,
    'got ' + bw.dims.centreToEnd + '. 38 mm converts to 1.4961, but the ' +
    'standard prints 1.50 and the standard is what we are recording.');

  /* Provenance is queryable, which is the whole reason this layer exists
     rather than a constant table in topology.js. */
  const src = cat.sourceOf('ELBOW90/SW3000/NPS0.5');
  check('a part can say which document it came from',
    !!src && src.std === 'ASME B16.11',
    'sourceOf gave ' + JSON.stringify(src && src.std));
  check('and which table inside it',
    !!src && /Table 1/.test(src.table || ''),
    'table: ' + JSON.stringify(src && src.table));

  /* Selection, which is how a consumer will actually reach the catalogue. */
  const halfInch = cat.where({ class: 'pipe', nps: 0.5 });
  check('selection by class and size works', halfInch.length === 1,
    'NPS 1/2 schedule 40 pipe: ' + halfInch.length + ' hits');

  /* Reference data, not a scratchpad. */
  let froze = false;
  try { el.dims.centreToSocket = 99; } catch (e) { froze = true; }
  check('a loaded part cannot be mutated',
    froze || el.dims.centreToSocket !== 99,
    'a consumer edited the catalogue in place. Reference data that one ' +
    'screen can change is reference data the next screen cannot trust.');

  /* A missing part names what IS there, so the error is actionable. */
  let miss = '';
  try { cat.part('ELBOW90/SW3000/NPS9'); } catch (e) { miss = e.message; }
  check('an unknown id is refused and lists what exists',
    /no catalogue part/.test(miss) && /ELBOW90\/SW3000\/NPS0\.5/.test(miss),
    miss);

  /* There is deliberately no NPS 3/8 buttweld elbow: B16.9's table starts
     at NPS 1/2. The catalogue must not quietly invent the row. */
  check('no buttweld elbow exists below NPS 1/2',
    !cat.has('ELBOW90/BWLR/NPS0.375'),
    'B16.9 Table 6.1-1 starts at NPS 1/2. A row here would be invented, ' +
    'and small bore is not buttwelded anyway -- that is B16.11 territory.');
}

/* ------------------------------------------- 2 & 3. every guard really bites */

console.log('');

refuses('a dimension with no as-printed value is refused',
  d => { delete d.fitting['ELBOW90/SW3000/NPS0.5'].asPrinted.centreToSocket; },
  'never says what the standard printed');

refuses('an as-printed value with no canonical value is refused',
  d => { d.fitting['ELBOW90/SW3000/NPS0.5'].asPrinted.invented = '5 mm'; },
  'but no canonical value');

refuses('a transcription error between the two is refused',
  d => { d.fitting['ELBOW90/SW3000/NPS0.5'].dims.centreToSocket = 0.6201; },
  'does not match');

refuses('a transposed digit is refused',
  d => { d.pipe['PIPE/NPS0.5/S40'].dims.bore = 0.262; },   // 0.622 -> 0.262
  'does not match');

refuses('a group with no stated source is refused',
  d => { delete d.fitting._source; },
  'names no source');

refuses('a part with no class is refused',
  d => { delete d.pipe['PIPE/NPS0.5/S40'].class; },
  'has no `class`');

refuses('a negative dimension is refused',
  d => { d.pipe['PIPE/NPS0.5/S40'].dims.bore = -0.622; },
  'finite positive inches');

refuses('a non-numeric dimension is refused',
  d => { d.pipe['PIPE/NPS0.5/S40'].dims.bore = '0.622'; },
  'finite positive inches');

refuses('an unreadable as-printed value is refused',
  d => { d.pipe['PIPE/NPS0.5/S40'].asPrinted.bore = 'about half an inch'; },
  'cannot read as-printed value');

refuses('a unit this layer does not convert is refused',
  d => { d.pipe['PIPE/NPS0.5/S40'].asPrinted.bore = '15.8 furlongs'; },
  'is not one this layer');

/* Not an error case: the loader must do no I/O, so handing it nothing has
   to say so rather than reaching for a file. */
let io = '';
try { LPE.catalogue.load(null); } catch (e) { io = e.message; }
check('load() with no data says the layer does no I/O',
  /does no I\/O/.test(io), io);

/* The conversion helper, directly. mm and the dual form are the two that
   actually matter in the shipped data. */
const pp = LPE.catalogue.parsePrinted;
check('parsePrinted reads millimetres',
  Math.abs(pp('15.5 mm', 'x') - 0.610236) < 1e-6, String(pp('15.5 mm', 'x')));
check('parsePrinted reads inches',
  pp('0.622 in', 'x') === 0.622, String(pp('0.622 in', 'x')));
check('parsePrinted prefers the inch column when both are printed',
  pp('38 mm (1.50 in)', 'x') === 1.50, String(pp('38 mm (1.50 in)', 'x')));

/* ------------------------------------------------------ what is NOT in here */

console.log('');

if (cat) {
  /* A part is dimensions and provenance. The moment one carries a colour, a
     pixel size or a function, chrome has leaked to the bottom of the stack
     and every consumer inherits one appearance it cannot lose. */
  const raw = fs.readFileSync(RAW, 'utf8');
  check('the catalogue names no colour',
    !/#[0-9a-fA-F]{3,6}\b/.test(raw.replace(/"_[a-z]+":\s*\[[^\]]*\]/g, '')),
    'a colour in the parts file is chrome at the bottom of the stack');

  let behaviour = 0;
  for (const id of cat.ids()) {
    const p = cat.part(id);
    for (const k of Object.keys(p)) if (typeof p[k] === 'function') behaviour++;
  }
  check('no part carries behaviour', behaviour === 0,
    behaviour + ' function-valued fields. A part is data; what is DONE with ' +
    'it is decided by the layer that asked for it.');

  /* Honesty about the material entries, which deliberately hold no
     dimensions because ASME B16.34 has not been opened. The test asserts
     the honesty rather than the absence, so filling them in later is a
     deliberate act that changes this line. */
  const mats = cat.where({ class: 'material' });
  check('materials exist but admit their rating source is unread',
    mats.length > 0 && mats.every(m => m.ratingSource &&
                                       m.ratingSource.read === false),
    mats.length + ' materials. ASME B16.34 is held but not opened; the ' +
    'entries say so rather than carrying a remembered pressure rating.');
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
