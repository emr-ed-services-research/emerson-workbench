/* @layer registration
   @core Process Core -- pipeline tooling, not a process layer.
   Promotes the extracted Catalog 12 valves into the catalogue as a real
   part class. Run: node lab/seed-valves.js                            */
/* ---------------- SEEDING THE VALVE CLASS ----------------------------

   WHAT CHANGES. Until now a valve existed in `lab/valves.json`, which is
   extraction output: useful, but not a part. The catalogue is the layer
   that answers "what IS this thing", every dimension in it carries the
   value as its document printed it, and `load()` re-derives one from the
   other and refuses the whole catalogue if they disagree. A valve with a
   real port diameter and a real rated travel belongs there, on the same
   terms as a length of pipe.

   WHAT EACH ROW CARRIES, and why:

     dims.port, dims.travel   inches, checked at load against the
                              as-printed millimetre-and-inch pair that
                              Catalog 12 actually prints
     cage                     the characteristic named on the page
     characterisedBy          'cage' or 'plug' -- see below
     flow                     'up' or 'down' where the sheet says so
     cv, cvAtPct              the measured curve, which is as much "what
                              this part is" as any dimension

   CHARACTERISED BY WHAT. ED, ET and EW bodies are CAGE-characterised:
   windows in the cage set the flow characteristic. The EZ is not. Its
   own instruction manual (D100401X012) refers throughout to a "seat ring
   retainer and bushing assembly" and never once to a cage, while still
   offering equal percentage, quick opening and linear -- because on an
   EZ the characteristic comes from the bottom bevel of the PLUG. Those
   are two different parts to draw and two different things for a
   derivative of the Cv curve to mean, so the distinction is recorded
   here rather than inferred later.

   IDS AVOID FRACTIONS. "2-1/2" contains a slash and the id separator is
   a slash, so the id uses the decimal line size and the printed form is
   kept beside it as `npsLabel`. The same reasoning as the pipe group.   */
'use strict';

const fs = require('fs');
const path = require('path');

const HERE = __dirname;
const CORE = path.join(HERE, '..');
const PARTS = path.join(CORE, 'catalogue', 'parts.json');

const V = JSON.parse(fs.readFileSync(path.join(HERE, 'valves.json'), 'utf8'));
const valves = V.valves;

/* ---- helpers -------------------------------------------------------- */
const trim = x => {
  const s = Number(x).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
  return s === '' || s === '-0' ? '0' : s;
};

/* "2-1/2" -> 2.5, "1/2" -> 0.5, "10 x 8" -> {line:10, port:8} */
function sizeOf(label) {
  const one = t => {
    t = t.trim();
    if (t.indexOf('-') > 0) {
      const [w, f] = t.split('-');
      const [a, b] = f.split('/');
      return Number(w) + Number(a) / Number(b);
    }
    if (t.indexOf('/') >= 0) {
      const [a, b] = t.split('/');
      return Number(a) / Number(b);
    }
    return Number(t);
  };
  const parts = label.split(/\s*x\s*/i);
  const line = one(parts[0]);
  const port = parts.length > 1 ? one(parts[1]) : null;
  if (!isFinite(line) || (port !== null && !isFinite(port)))
    throw new Error('cannot read NPS label "' + label + '"');
  return { line, port };
}

const CAGE_TAG = { 'equal-percentage': 'EQPCT', 'linear': 'LIN',
                   'quick-opening': 'QO' };

/* Flow direction, where the sheet states it. The EW pages name it in the
   trim designation ("EW-31, flow up"); the ED/EZ pages in this catalogue
   do not, so those are null rather than guessed -- the ED IOM says
   standard cages are "normally down", and normally is not always. */
function flowOf(cls) {
  if (/flow\s*up/i.test(cls)) return 'up';
  if (/flow\s*down/i.test(cls)) return 'down';
  return null;
}

/* EZ is the plug-characterised family -- D100401X012 names a seat ring
   retainer and never a cage. Everything else here is cage-characterised. */
const byPlug = body => /(^|\s)EZ(\s|$)/.test(body);

/* ---- build ---------------------------------------------------------- */
const rows = [];
const seen = {};
let worstPair = { pct: 0, id: null };

for (const v of valves) {
  if (v.portMm === null || v.portMm === undefined ||
      v.travelMm === null || v.travelMm === undefined)
    throw new Error('valve on ' + v.page + ' has no printed millimetre ' +
      'value. The catalogue needs what the document printed, and this ' +
      'row only has a converted number.');

  const sz = sizeOf(v.nps);
  const bodyTag = v.body.replace(/\s+/g, '-');
  const npsTag = sz.port === null ? trim(sz.line)
                                  : trim(sz.line) + 'x' + trim(sz.port);
  const id = 'VALVE/' + bodyTag + '/NPS' + npsTag +
             '/P' + trim(v.portIn) + '/T' + trim(v.travelIn) +
             '/' + CAGE_TAG[v.cage];

  if (seen[id])
    throw new Error('two valves want the id ' + id + '. The id scheme is ' +
      'missing a distinguishing attribute; find it rather than suffixing ' +
      'a number, because a number tells the next reader nothing.');
  seen[id] = true;

  /* Report the loosest mm/inch agreement, because the catalogue will
     re-check it at load and it is better to see the margin here. */
  for (const [mm, inch, what] of [[v.portMm, v.portIn, 'port'],
                                  [v.travelMm, v.travelIn, 'travel']]) {
    const pct = Math.abs(mm / 25.4 - inch) / inch;
    if (pct > worstPair.pct) worstPair = { pct, id: id + ' ' + what };
  }

  rows.push({
    id: id,
    part: {
      class: 'valve',
      body: v.body,
      series: v.cls,
      npsLabel: v.nps,
      lineNps: sz.line,
      portNps: sz.port,
      cage: v.cage,
      characterisedBy: byPlug(v.body) ? 'plug' : 'cage',
      flow: flowOf(v.cls),
      FL: v.FL,
      cvAtPct: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      cv: v.curve,
      page: v.page,
      dims: { port: v.portIn, travel: v.travelIn },
      asPrinted: {
        port: trim(v.portMm) + ' mm (' + trim(v.portIn) + ' in)',
        travel: trim(v.travelMm) + ' mm (' + trim(v.travelIn) + ' in)',
      },
    },
  });
}

rows.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);

/* ---- emit ----------------------------------------------------------- */
const NOTE = [
  'Fisher Catalog 12 prints, for every valve size and port, the port',
  'diameter and the maximum rated travel in BOTH millimetres and inches,',
  'which is exactly the pairing this catalogue requires -- so these rows',
  'arrive already carrying their own evidence. The extraction found the',
  'pairs by their 25.4 ratio in the first place; keeping both halves is',
  'declining to throw away what the reader already had to use.',
  '',
  'cv is the measured curve at every 10% of travel, and belongs here',
  'rather than in a consumer: it is what the part IS, in the same sense',
  'as its port diameter, and the trim layer reads it the way the',
  'geometry layer reads a bore.',
  '',
  'characterisedBy distinguishes the two archetypes. ED/ET/EW are',
  'cage-characterised. EZ is not: D100401X012 names a "seat ring retainer',
  'and bushing assembly" throughout and never a cage, and the',
  'characteristic comes from the bottom bevel of the plug. They are',
  'different parts to draw and the distinction is not recoverable from',
  'the numbers alone, so it is recorded.',
  '',
  'flow is null wherever the sheet does not state it. The ED IOM says',
  'standard cages are "normally down" -- normally is not always, and a',
  'guess here would silently flip which chamber is the inlet.',
  '',
  'NOT here: rotary bodies (Vee-Ball, Control-Disk, V500), and the',
  'Catalog 12 pages those live on. Named so nobody reads this group as',
  'the whole catalogue.',
];

const SOURCE = {
  std: 'Fisher Catalog 12',
  doc: 'D103182X012, April 2022, 398 pp',
  table: 'flow coefficient tables, ED / EZ / EW globe families',
  read: '2026-10-10',
  note: NOTE,
};

const body = rows.map(r => {
  const p = r.part;
  const j = [];
  j.push('    "' + r.id + '": {');
  j.push('      "class": "valve", "body": ' + JSON.stringify(p.body) +
         ', "series": ' + JSON.stringify(p.series) + ',');
  j.push('      "npsLabel": ' + JSON.stringify(p.npsLabel) +
         ', "lineNps": ' + trim(p.lineNps) +
         ', "portNps": ' + (p.portNps === null ? 'null' : trim(p.portNps)) + ',');
  j.push('      "cage": ' + JSON.stringify(p.cage) +
         ', "characterisedBy": ' + JSON.stringify(p.characterisedBy) +
         ', "flow": ' + (p.flow === null ? 'null' : JSON.stringify(p.flow)) + ',');
  j.push('      "FL": ' + p.FL + ', "page": ' + JSON.stringify(p.page) + ',');
  j.push('      "cvAtPct": [' + p.cvAtPct.join(', ') + '],');
  j.push('      "cv": [' + p.cv.join(', ') + '],');
  j.push('      "dims": { "port": ' + trim(p.dims.port) +
         ', "travel": ' + trim(p.dims.travel) + ' },');
  j.push('      "asPrinted": { "port": ' + JSON.stringify(p.asPrinted.port) +
         ', "travel": ' + JSON.stringify(p.asPrinted.travel) + ' }');
  j.push('    }');
  return j.join('\n');
}).join(',\n');

const group = '  "valve": {\n' +
  '    "_source": ' + JSON.stringify(SOURCE, null, 6)
      .replace(/\n/g, '\n    ').replace(/^{/, '{') + ',\n' +
  body + '\n  },\n';

let s = fs.readFileSync(PARTS, 'utf8');
if (s.indexOf('  "valve": {') >= 0) {
  /* Replace the existing group wholesale -- this stage is re-runnable. */
  const start = s.indexOf('  "valve": {');
  let depth = 0, i = start;
  for (;;) {
    if (s[i] === '{') depth++;
    else if (s[i] === '}') { depth--; if (depth === 0) break; }
    i++;
  }
  const end = s.indexOf('\n', s.indexOf(',', i)) + 1;
  s = s.slice(0, start) + group + s.slice(end);
} else {
  /* Insert before the resistance group, which is not a part group. */
  const anchor = s.indexOf('  "resistance": {');
  if (anchor < 0) throw new Error('cannot find where to insert the group');
  s = s.slice(0, anchor) + group + s.slice(anchor);
}

fs.writeFileSync(PARTS, s.replace(/\r\n/g, '\n'), 'utf8');
JSON.parse(fs.readFileSync(PARTS, 'utf8'));          // it must still parse

console.log('');
console.log('  seeded ' + rows.length + ' valves into catalogue/parts.json');
console.log('  loosest mm/inch agreement: ' +
  (100 * worstPair.pct).toFixed(3) + '%  (' + worstPair.id + ')');
console.log('  bodies: ' + [...new Set(rows.map(r => r.part.body))].join(', '));
console.log('  plug-characterised: ' +
  rows.filter(r => r.part.characterisedBy === 'plug').length +
  ',  cage-characterised: ' +
  rows.filter(r => r.part.characterisedBy === 'cage').length);
console.log('  flow stated: up ' + rows.filter(r => r.part.flow === 'up').length +
  ', down ' + rows.filter(r => r.part.flow === 'down').length +
  ', unstated ' + rows.filter(r => r.part.flow === null).length);
console.log('');
