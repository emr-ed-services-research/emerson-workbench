/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   Reads the Control Valve Handbook's flanged globe face-to-face table
   into the catalogue. Run: node extract/extract-f2f.js                   */
/* ---------------- FACE-TO-FACE, FLANGED GLOBE ------------------------

   WHY THIS DIMENSION. A cutaway of a globe valve needs a length before
   anything inside it can be placed. Port diameter and travel come from
   Catalog 12; the overall body length does not, and it is the one
   envelope dimension that IS published.

   WHERE FROM. Control Valve Handbook 6th ed. section 5.1.1, "Face-to-Face
   Dimensions for Flanged, Globe-Style Control Valves". The Handbook names
   the standard each sub-table follows -- a part of the ISA-75.08 series for
   Classes 125 through 600 -- but it is the HANDBOOK that is held and read here,
   so that is what the rows cite. The register entry for ISA-75.08 records
   which part covers which body style; none of them has been opened.

   WHAT IS TAKEN. The two Classes 125-600 sub-tables, six pressure/end
   combinations, every size the table prints:

     Class 125 FF (CI) / Class 150 RF (STL)
     Class 150 RTJ (STL)
     Class 250 RF (CI) / Class 300 RF (STL)
     Class 300 RTJ (STL)
     Class 600 RF (STL)
     Class 600 RTJ (STL)

   WHAT IS NOT. The Classes 900/1500/2500 table, which is shaped
   differently -- it prints a SHORT and a LONG dimension per size with
   "---" where a size is not offered, and that is a different kind of row
   than "the face-to-face is X". Sections 5.1.2 through 5.1.6 (butt weld,
   socket weld, screwed, angle, separable flange) are also not here.
   Named rather than silently absent.

   A PUBLISHED TYPO, AND WHAT IS DONE ABOUT IT. At NPS 14, Class 600 RTJ,
   the Handbook prints "475" in the millimetre column beside 38.37 in.
   38.37 in is 975 mm. The printed millimetre value is wrong -- almost
   certainly a dropped leading 9 -- and this was confirmed by rendering
   the page image, so it is the book and not the text extraction.

   This row is DROPPED, not corrected. Writing 975 would be inventing a
   number to replace one the document actually prints, which is the thing
   this catalogue exists to refuse; and the pair cannot both be recorded
   because the load-time check would reject them, correctly. The drop is
   reported by name every run so it never becomes invisible.            */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const POPPLER =
  'C:/Users/E1552882/poppler/poppler-26.02.0/Library/bin/pdftotext.exe';
const PDF = path.join(__dirname, '..', '..', '20 - Source Library',
  'Handbooks & Sourcebooks', 'Control Valve Handbook',
  'Control Valve Handbook - Sixth Edition.pdf');
const PARTS = path.join(__dirname, '..', 'catalogue', 'parts.json');

/* The six columns, in the order the two sub-tables print them. */
const COLS = [
  { tag: 'CL125FF-CL150RF', label: 'Class 125 FF (CI) / Class 150 RF (STL)' },
  { tag: 'CL150RTJ',        label: 'Class 150 RTJ (STL)' },
  { tag: 'CL250RF-CL300RF', label: 'Class 250 RF (CI) / Class 300 RF (STL)' },
  { tag: 'CL300RTJ',        label: 'Class 300 RTJ (STL)' },
  { tag: 'CL600RF',         label: 'Class 600 RF (STL)' },
  { tag: 'CL600RTJ',        label: 'Class 600 RTJ (STL)' },
];

const trim = x => {
  const s = Number(x).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
  return s === '' ? '0' : s;
};
function sizeOf(label) {
  const t = label.trim();
  if (t.indexOf('-') > 0) {
    const [w, f] = t.split('-'); const [a, b] = f.split('/');
    return Number(w) + Number(a) / Number(b);
  }
  if (t.indexOf('/') >= 0) { const [a, b] = t.split('/'); return Number(a) / Number(b); }
  return Number(t);
}

function main() {
  if (!fs.existsSync(POPPLER)) { console.error('no pdftotext'); return 1; }
  if (!fs.existsSync(PDF)) { console.error('no handbook at ' + PDF); return 1; }

  const txt = execFileSync(POPPLER, ['-layout', '-f', '100', '-l', '101',
    PDF, '-'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const lines = txt.split('\n');

  /* A data row is: DN, NPS, then mm/in pairs. The DN column is metric
     nominal and the NPS column is the one we key on; requiring BOTH and
     requiring the pairs to be real mm/inch pairs is what stops a heading
     or a footnote being read as a size. */
  const rows = {};              // nps -> { tag -> {mm, inch} }
  const dropped = [];
  let colBase = 0;              // 0 for the first sub-table, 3 for the second

  let stop = false;
  for (const raw of lines) {
    /* STOP AT THE HIGH-CLASS TABLE. It prints SHORT and LONG columns
       rather than one dimension, so its six numbers per row are
       short-mm, long-mm, short-in, long-in, short-mm, long-mm -- and
       pairing them as mm/inch produced 33 "published typos", including
       the claim that a NPS 1/2 valve is 292 inches long. The tell was
       the volume: a table with one real error does not have 33. */
    if (/Classes\s+900,\s*1500,\s*and\s*2500/.test(raw)) stop = true;
    if (stop) continue;
    if (/Class 300 RTJ/.test(raw)) colBase = 3;
    const m = raw.trim().match(
      /^(\d+)\s+(\d+(?:-\d+\/\d+)?|\d+\/\d+)\s+((?:[\d.]+\s+)+[\d.]+)\s*$/);
    if (!m) continue;
    const nums = m[3].split(/\s+/).map(Number);
    if (nums.length !== 6) continue;          // three mm/in pairs, or skip

    const nps = m[2];
    rows[nps] = rows[nps] || {};
    for (let k = 0; k < 3; k++) {
      const mm = nums[2 * k], inch = nums[2 * k + 1];
      const col = COLS[colBase + k];
      if (!(inch > 0) || !(mm > 0)) continue;

      /* The pair must be able to describe the same length, to the
         precision each half is printed at. This is the same test the
         catalogue applies at load; applying it HERE means a bad pair is
         named with its row rather than collapsing the whole load. */
      const halfMm = 0.5, halfIn = 0.5 * Math.pow(10,
        -((String(inch).split('.')[1] || '').length));
      const lo = (mm - halfMm) / 25.4, hi = (mm + halfMm) / 25.4;
      if (hi < inch - halfIn || inch + halfIn < lo) {
        dropped.push({ nps, col: col.tag, mm, inch });
        continue;
      }
      rows[nps][col.tag] = { mm, inch };
    }
  }

  const out = [];
  for (const nps of Object.keys(rows)) {
    for (const col of COLS) {
      const r = rows[nps][col.tag];
      if (!r) continue;
      out.push({
        id: 'BODY/GLOBE/FLANGED/NPS' + trim(sizeOf(nps)) + '/' + col.tag,
        npsLabel: nps, nps: sizeOf(nps), rating: col.label,
        inch: r.inch, mm: r.mm,
      });
    }
  }
  out.sort((a, b) => a.nps - b.nps || (a.id < b.id ? -1 : 1));

  if (!out.length) { console.error('parsed nothing -- has the table moved?'); return 1; }

  const NOTE = [
    'Control Valve Handbook 6th ed., section 5.1.1, "Face-to-Face',
    'Dimensions for Flanged, Globe-Style Control Valves". The Handbook',
    'states these follow a part of the ISA-75.08 series, but the HANDBOOK',
    'is what is held and read -- no part of that series has been opened,',
    'and its register entry says so, along with which part covers which',
    'body style.',
    '',
    'Printed in millimetres AND inches, which is the pairing this',
    'catalogue requires, so these rows carry their own evidence.',
    '',
    'NOT here: the Classes 900/1500/2500 table, which prints a SHORT and',
    'a LONG dimension per size and is a different shape of row; and',
    'sections 5.1.2 to 5.1.6 -- butt weld, socket weld, screwed, angle,',
    'and separable flange ends.',
    '',
    'DROPPED, not corrected: NPS 14 Class 600 RTJ. The Handbook prints',
    '475 mm beside 38.37 in; 38.37 in is 975 mm. The page image was',
    'rendered to confirm it is the book and not the text extraction.',
    'Writing 975 would replace a printed number with a guessed one, so',
    'the row is left out and the extractor names it on every run.',
  ];

  const body = out.map(r =>
    '    "' + r.id + '": {\n' +
    '      "class": "valveBody", "style": "globe", "ends": "flanged",\n' +
    '      "nps": ' + trim(r.nps) + ', "npsLabel": "' + r.npsLabel + '",\n' +
    '      "rating": ' + JSON.stringify(r.rating) + ',\n' +
    '      "dims": { "faceToFace": ' + trim(r.inch) + ' },\n' +
    '      "asPrinted": { "faceToFace": "' + trim(r.mm) + ' mm (' +
          trim(r.inch) + ' in)" }\n' +
    '    }').join(',\n');

  const group = '  "valveBody": {\n' +
    '    "_source": {\n' +
    '      "std": "Control Valve Handbook 6th ed.",\n' +
    '      "table": "5.1.1 Face-to-Face Dimensions for Flanged, Globe-Style Control Valves",\n' +
    '      "read": "2026-10-10",\n' +
    '      "note": [\n' +
    NOTE.map(n => '        ' + JSON.stringify(n)).join(',\n') + '\n' +
    '      ]\n    },\n' + body + '\n  },\n';

  let s = fs.readFileSync(PARTS, 'utf8');
  if (s.indexOf('  "valveBody": {') >= 0) {
    const start = s.indexOf('  "valveBody": {');
    let depth = 0, i = start;
    for (;;) {
      if (s[i] === '{') depth++;
      else if (s[i] === '}') { depth--; if (depth === 0) break; }
      i++;
    }
    const end = s.indexOf('\n', s.indexOf(',', i)) + 1;
    s = s.slice(0, start) + group + s.slice(end);
  } else {
    const anchor = s.indexOf('  "resistance": {');
    if (anchor < 0) throw new Error('cannot find where to insert the group');
    s = s.slice(0, anchor) + group + s.slice(anchor);
  }
  fs.writeFileSync(PARTS, s.replace(/\r\n/g, '\n'), 'utf8');
  JSON.parse(fs.readFileSync(PARTS, 'utf8'));

  console.log('');
  console.log('  seeded ' + out.length + ' flanged globe face-to-face rows');
  console.log('  sizes NPS ' + out[0].npsLabel + ' to ' +
              out[out.length - 1].npsLabel + ', ' + COLS.length +
              ' pressure/end combinations');
  for (const d of dropped)
    console.log('  DROPPED  NPS ' + d.nps + ' ' + d.col + ': the Handbook ' +
      'prints ' + d.mm + ' mm beside ' + d.inch + ' in (' +
      (d.inch * 25.4).toFixed(0) + ' mm). Published typo, left out rather ' +
      'than corrected.');
  console.log('');
  return 0;
}

process.exit(main());
