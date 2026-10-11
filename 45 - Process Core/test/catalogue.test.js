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

  /* Selection, which is how a consumer will actually reach the catalogue.
     A SIZE IS NO LONGER A PART. Until the pipe group was reseeded from
     the Handbook's chapter 14, NPS 1/2 had exactly one row, so selecting
     on size alone identified a part. It now has Schedule 40 and Schedule
     80 -- same size, different wall, different bore -- and selecting on
     size alone correctly returns both. The old expectation of one hit was
     not a stricter check, it was a smaller catalogue. */
  const halfInch = cat.where({ class: 'pipe', nps: 0.5 });
  check('selecting a SIZE returns every schedule in it',
    halfInch.length === 2,
    'NPS 1/2: ' + halfInch.map(p => 'Sch ' + p.schedule).join(', '));
  check('and selecting size AND schedule identifies one part',
    cat.where({ class: 'pipe', nps: 0.5, schedule: 40 }).length === 1);
  check('the catalogue now reaches industrial sizes, not just a grow bay',
    cat.where({ class: 'pipe' }).some(p => p.nps >= 6),
    cat.where({ class: 'pipe' }).length + ' pipe rows, largest NPS ' +
    Math.max.apply(null, cat.where({ class: 'pipe' }).map(p => p.nps)));
  check('and keeps the printed size label beside the numeric one',
    cat.part('PIPE/NPS1.25/S40').npsLabel === '1-1/4',
    '1.25 and 1-1/4 are the same size; only one is what goes on a drawing');

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

/* ---- RESISTANCE BASES -------------------------------------------------
   A fitting's loss is a correlation, not a dimension, so it cannot be
   checked against an as-printed value the way a bore is. What CAN be
   required is that it names a publication and an uncertainty, and that
   every part pointing at one points at something real.              */
console.log('');
if (cat) {
  check('the catalogue defines resistance bases',
    cat.bases().length >= 3, cat.bases().join(', '));

  const el = cat.resistanceOf('ELBOW90/SW3000/NPS0.5', 'darby-3k');
  check('a socket-weld elbow has a sourced Darby basis',
    !!el && el.K1 === 800 && el.Ki === 0.14, JSON.stringify(el && el.source));
  check('and a Hooper basis too, so the two can be compared',
    !!cat.resistanceOf('ELBOW90/SW3000/NPS0.5', 'hooper-2k'));
  check('every basis carries an uncertainty',
    el.uncertaintyPct === 30, String(el.uncertaintyPct));

  /* A tee costs different amounts through the run and out the branch,
     and no published correlation treats them as one. */
  const run = cat.resistanceOf('TEE/SW3000/NPS0.5', 'darby-3k', 'run');
  const br = cat.resistanceOf('TEE/SW3000/NPS0.5', 'darby-3k', 'branch');
  check('a tee has a different basis for run and branch', run.Ki !== br.Ki,
    'run Ki ' + run.Ki + ', branch Ki ' + br.Ki);
  check('and turning out of the branch costs more than running through',
    br.Ki > run.Ki);

  /* Pipe has no fitting loss. Returning null is the point: the caller
     must notice, rather than being handed a zero that looks computed. */
  check('pipe has no resistance basis, and says so with null',
    cat.resistanceOf('PIPE/NPS0.5/S40', 'darby-3k') === null);
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

refuses('a resistance basis with no publication is refused',
  d => { delete d.resistance['ELBOW90/THREADED']['darby-3k'].source; },
  'names no source');
refuses('a resistance basis with no uncertainty is refused',
  d => { delete d.resistance['ELBOW90/THREADED']['darby-3k'].uncertaintyPct; },
  'carries no uncertaintyPct');
refuses('a basis filed under the wrong method name is refused',
  d => { d.resistance['ELBOW90/THREADED']['darby-3k'].method = 'hooper-2k'; },
  'matches the key');
refuses('a basis missing a coefficient is refused',
  d => { delete d.resistance['ELBOW90/THREADED']['darby-3k'].Kd; },
  'is missing Kd');
refuses('a part pointing at a basis that does not exist is refused',
  d => { d.fitting['ELBOW90/SW3000/NPS0.5'].resistance = 'ELBOW90/INVENTED'; },
  'which the catalogue does not define');

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

/* The refusal now says WHICH KIND of quantity it was expecting, because
   the layer learned about areas, forces, pressures and masses when the
   actuator arrived -- so "not a unit I know" became ambiguous and "not
   a length" is the useful sentence. */
refuses('a unit this layer does not convert is refused',
  d => { d.pipe['PIPE/NPS0.5/S40'].asPrinted.bore = '15.8 furlongs'; },
  'is not a length');

refuses('and a square inch is not a length either',
  d => { d.pipe['PIPE/NPS0.5/S40'].asPrinted.bore = '0.62 in2'; },
  'is not a length');

refuses('a dimension nobody declared the kind of is refused',
  d => { d.pipe['PIPE/NPS0.5/S40'].dims.squidginess = 3;
         d.pipe['PIPE/NPS0.5/S40'].asPrinted.squidginess = '3 in'; },
  'has no declared kind');

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

/* ---- THE VALVE CLASS --------------------------------------------------

   A valve is a part. Its port diameter and rated travel are dimensions in
   the same sense a pipe bore is, and Catalog 12 prints both of them in
   millimetres AND inches -- which is the pairing this layer exists to
   check, arriving already paired.                                      */
console.log('');
{
  const valves = cat.where({ class: 'valve' });
  check('the catalogue carries the Catalog 12 globe valves',
    valves.length === 105, valves.length + ' valves');

  check('every valve states a port diameter and a rated travel',
    valves.every(v => v.dims.port > 0 && v.dims.travel > 0));

  check('and every one of those carries BOTH printed units',
    valves.every(v => /mm \(.*in\)/.test(v.asPrinted.port) &&
                      /mm \(.*in\)/.test(v.asPrinted.travel)),
    'the mm half is not decoration -- load() now reads it');

  /* The two archetypes. This is not recoverable from the numbers, so if
     it is wrong nothing downstream can notice. */
  const isEZ = v => /(^|\s)EZ(\s|$)/.test(v.body);
  const ez = valves.filter(isEZ);
  check('EZ valves are recorded as PLUG-characterised',
    ez.length > 0 && ez.every(v => v.characterisedBy === 'plug'),
    ez.length + ' EZ valves -- D100401X012 names a seat ring retainer and ' +
    'bushing assembly throughout, and never a cage');
  check('and every other body here is cage-characterised',
    valves.filter(v => !isEZ(v)).every(v => v.characterisedBy === 'cage'));

  /* Flow direction decides which chamber is the inlet, and on a balanced
     plug it decides which way the pressure-energised U-seal faces. A
     guess here is not a small error. */
  check('flow direction is null wherever the sheet does not state it',
    valves.some(v => v.flow === null),
    'stated: ' + valves.filter(v => v.flow).length +
    ', unstated: ' + valves.filter(v => !v.flow).length);
  /* A built regex here read 'flow\s*' as the literal "flows*" -- inside a
     JS string \s is just s -- so it matched nothing and failed all 51
     rows. A plain substring has no escaping left to get wrong. */
  check('and where it IS stated it matches the trim designation',
    valves.filter(v => v.flow).length > 0 &&
    valves.filter(v => v.flow).every(v =>
      v.series.toLowerCase().indexOf('flow ' + v.flow) >= 0));

  /* The curve is as much "what this part is" as its bore. */
  check('every valve carries its measured curve at ten travel points',
    valves.every(v => Array.isArray(v.cv) && v.cv.length === 10 &&
                      v.cvAtPct.length === 10 &&
                      v.cv[9] === Math.max.apply(null, v.cv)));

  const fcc = cat.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
  check('the valve from the FCC refinery loop is addressable by id',
    !!fcc && fcc.dims.port === 8 && fcc.dims.travel === 3,
    fcc ? fcc.asPrinted.port + ', ' + fcc.asPrinted.travel : 'missing');
  check('and its id carries no fraction slash, which would split the id',
    !!fcc && !/\d\/\d/.test(fcc.id), fcc && fcc.id);
}

/* ---- the dual-printed check, both ways -------------------------------
   The millimetre half used to be decoration: parsePrinted preferred the
   parenthesised inch and never looked at what stood in front of it. */
console.log('');

refuses('a transposed MILLIMETRE in a dual-printed value is refused',
  d => { d.valve['VALVE/EWT/NPS10x8/P8/T3/EQPCT'].asPrinted.port =
           '302.2 mm (8 in)'; },                      // 203.2 -> 302.2
  'cannot describe the same length');

refuses('and a transposed INCH is refused too',
  d => { d.valve['VALVE/EWT/NPS10x8/P8/T3/EQPCT'].asPrinted.port =
           '203.2 mm (3 in)'; },
  'cannot describe the same length');

/* ...but the tolerance comes from the document's own precision, so a page
   that rounds to whole millimetres is not called a liar. */
{
  const data = JSON.parse(fs.readFileSync(RAW, 'utf8'));
  const rounded = Object.keys(data.valve)
    .filter(k => k.charAt(0) !== '_')
    .map(k => data.valve[k])
    .filter(v => /^\d+ mm/.test(v.asPrinted.travel));
  check('Catalog 12 does round millimetres to whole numbers',
    rounded.length > 0, rounded.length + ' rows, e.g. "' +
    (rounded[0] && rounded[0].asPrinted.travel) +
    '" -- 1.125 in is really 28.575 mm, and 29 is not an error');
  let ok = true, why = '';
  try { LPE.catalogue.load(data); } catch (e) { ok = false; why = e.message; }
  check('and the catalogue accepts them rather than rejecting the rounding',
    ok, why.slice(0, 160));
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
