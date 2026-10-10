/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   Reads Fisher Catalog 12 flow-coefficient tables into a valve corpus
   the lab can size against. Run by hand; lab.js reads only the JSON.  */
/* ---------------- VALVE FLOW COEFFICIENTS ----------------------------

   THE OTHER HALF OF A BENCHMARK. The sourcebooks give service
   conditions and name the valve Emerson specifies. To grade a case you
   also need what that valve can actually pass -- its Cv at full travel
   and its liquid pressure recovery factor FL, both of which the sizing
   layer needs and neither of which the sourcebook prints.

   Fisher Catalog 12 prints them: Cv at every 10% of travel, plus FL, XT
   and Fd, per valve size and port diameter, per cage characteristic.

   -------------------------------------------------------------------
   WHY COORDINATES AND NOT TEXT.

   `pdftotext -layout` cannot read this table, and failing to read it
   produced a convincing wrong answer twice before this was accepted:

     - The valve-size cell is VERTICALLY MERGED across two or three
       port-diameter rows, so in flat text it appears on whichever row
       the renderer felt like, sometimes the Kv row and sometimes the Fd
       row two lines below its own data.
     - "Cv" is not a word. It is "C" plus a subscript "v" on a lower
       baseline, which no plain-text match for /Cv/ will ever find.
     - A naive regex over the flat text found 15 Cv rows on a page that
       has 11, which is the dangerous kind of wrong: it pairs real Cv
       values with the wrong port diameters and yields a valve table
       that looks entirely plausible.

   So this reads `-bbox-layout` and rebuilds the table from geometry:
   cluster words into rows by y, sort each row by x, and take columns by
   position. The subscript then sits where it belongs, and a merged
   valve-size cell can be attached to every row its box spans.

   -------------------------------------------------------------------
   WHAT IS NOT CAPTURED YET, and it matters.

   The NOMINAL VALVE SIZE. Each row carries its port diameter, travel,
   Cv and FL, all verified by eye against the rendered page -- but the
   NPS cell is merged vertically across the two or three port rows it
   covers and sits in the far-left column, and this parser does not yet
   attach it.

   That is enough for a CAPACITY check (is this valve big enough for the
   required Cv) and NOT enough for a sized one, because `Fp` takes `d`,
   the valve's nominal size, to work out what the attached reducers
   cost. So lab.js can ask "does it fit" and cannot yet ask "what does
   it actually pass with reducers on it".

   Recovering it means taking words in the leftmost x-band and attaching
   each to every Cv row its box spans vertically. Known, bounded, not
   done.

   Run: node lab/extract-valve-cv.js                                   */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const POPPLER = 'C:/Users/E1552882/poppler/poppler-26.02.0/Library/bin/pdftotext.exe';
const VAULT = path.join(__dirname, '..', '..');
const PDF = '20 - Source Library/Equipment Manuals/Valve Bodies/' +
            'fisher-ed-ead-edr-catalog-12-flow-coefficients-dec2023.pdf';
const DOC = 'Fisher Catalog 12, ED/EAD/EDR flow coefficients, Dec 2023';

/* Which pages carry which characteristic. Only the standard cages are
   taken here; Whisper, WhisperFlo, Cavitrol and DST are severe-service
   trims and are a separate job with their own meanings. */
const SHEETS = [
  { pages: [3, 4], cage: 'linear', body: 'ED', cls: 'CL125-CL600' },
  { pages: [5, 6], cage: 'equal-percentage', body: 'ED', cls: 'CL125-CL600' },
];

const WORD = /<word xMin="([0-9.]+)" yMin="([0-9.]+)" xMax="([0-9.]+)" yMax="([0-9.]+)">([^<]*)<\/word>/g;

function wordsOf(page) {
  const pdf = path.join(VAULT, PDF);
  const html = execFileSync(POPPLER,
    ['-f', String(page), '-l', String(page), '-bbox-layout', pdf, '-'],
    { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const out = [];
  let m;
  WORD.lastIndex = 0;
  while ((m = WORD.exec(html)) !== null) {
    out.push({ x: +m[1], y: +m[2], x2: +m[3], y2: +m[4], t: m[5] });
  }
  return out;
}

/* Rows by y, then each row left to right. Sorting by x AFTER clustering
   is the whole trick: cluster order follows y, so a subscript lands
   after the numbers unless the row is re-sorted. */
function rowsOf(words, tol) {
  const rows = [];
  for (const w of words.slice().sort((a, b) => a.y - b.y || a.x - b.x)) {
    let r = rows.find(r => Math.abs(r.y - w.y) < (tol || 3));
    if (!r) { r = { y: w.y, ws: [] }; rows.push(r); }
    r.ws.push(w);
  }
  rows.forEach(r => r.ws.sort((a, b) => a.x - b.x));
  return rows;
}

const num = t => /^[0-9][0-9,.]*$/.test(t) ? +t.replace(/,/g, '') : null;

function run() {
  if (!fs.existsSync(POPPLER)) {
    console.error('pdftotext not found at ' + POPPLER); return 1;
  }
  if (!fs.existsSync(path.join(VAULT, PDF))) {
    console.error('missing: ' + PDF); return 1;
  }

  const out = { generated: new Date().toISOString(), doc: DOC,
                valves: [], rejected: [] };

  for (const sheet of SHEETS) {
    for (const page of sheet.pages) {
      const words = wordsOf(page);
      const rows = rowsOf(words);

      /* A Cv row: a "C" immediately followed by its subscript "v". */
      for (const r of rows) {
        const i = r.ws.findIndex((w, k) =>
          w.t === 'C' && r.ws[k + 1] && r.ws[k + 1].t === 'v');
        if (i < 0) continue;

        const after = r.ws.slice(i + 2).map(w => num(w.t)).filter(v => v !== null);
        /* ten travel points then FL. Anything else is a row this parser
           does not understand, and it is rejected rather than trimmed
           to fit -- trimming is how the wrong column becomes the answer. */
        if (after.length !== 11) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'expected 10 travel points and FL, found ' + after.length });
          continue;
        }
        const cv100 = after[9], FL = after[10];

        /* The geometry for this row: port diameter in inches and travel
           in inches sit left of the coefficient column, on this row or
           the one below it (the renderer is inconsistent). */
        const left = w => w.x < r.ws[i].x - 5;
        let geo = r.ws.filter(left).map(w => num(w.t)).filter(v => v !== null);
        if (geo.length < 4) {
          /* The geometry row is shared by the two or three port rows a
             merged valve-size cell spans, and the renderer puts it one,
             two or three rows below the Cv it belongs to. Widened after
             a +14pt window rejected 14 of 32 rows. Still bounded: the
             FIRST row below that carries four numbers wins, so a row
             belonging to the next valve cannot be reached past one that
             belongs to this one. */
          for (const q of rows) {
            if (!(q.y > r.y && q.y < r.y + 34)) continue;
            const cand = q.ws.filter(left).map(w => num(w.t))
                              .filter(v => v !== null);
            if (cand.length >= 4) { geo = geo.concat(cand); break; }
          }
        }
        /* portMM portIN travelMM travelIN -- take the last four, since a
           merged valve-size number may precede them. */
        if (geo.length < 4) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'no port/travel geometry found beside or below the row' });
          continue;
        }
        const g = geo.slice(-4);
        const portIn = g[1], travelIn = g[3];
        if (!(portIn > 0 && portIn < 30) || !(travelIn > 0 && travelIn < 10)) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'geometry out of range: port ' + portIn + ' in, travel ' +
                 travelIn + ' in' });
          continue;
        }

        out.valves.push({
          doc: DOC, page: 'ED-' + page, body: sheet.body, cls: sheet.cls,
          cage: sheet.cage, portIn: portIn, travelIn: travelIn,
          cv100: cv100, FL: FL,
        });
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'valves.json'),
                   JSON.stringify(out, null, 1) + '\n', 'utf8');

  console.log('\nFISHER CATALOG 12 -- FLOW COEFFICIENTS\n');
  console.log('  ' + String(out.valves.length).padStart(4) + '  rows read');
  console.log('  ' + String(out.rejected.length).padStart(4) + '  rejected, by reason:');
  const why = {};
  out.rejected.forEach(r => { why[r.why] = (why[r.why] || 0) + 1; });
  Object.keys(why).sort((a, b) => why[b] - why[a]).forEach(k =>
    console.log('          ' + String(why[k]).padStart(3) + '  ' + k));

  const byCage = {};
  out.valves.forEach(v => { byCage[v.cage] = (byCage[v.cage] || 0) + 1; });
  console.log('');
  Object.keys(byCage).sort().forEach(k =>
    console.log('        ' + String(byCage[k]).padStart(3) + '  ' + k));

  const cv = out.valves.map(v => v.cv100).sort((a, b) => a - b);
  if (cv.length) {
    console.log('\n  Cv at full travel spans ' + cv[0] + ' to ' + cv[cv.length - 1]);
    const fl = out.valves.map(v => v.FL);
    console.log('  FL spans ' + Math.min.apply(null, fl) + ' to ' +
                Math.max.apply(null, fl) +
                (Math.min.apply(null, fl) > 0.6 && Math.max.apply(null, fl) < 1
                  ? '  (plausible: FL is a fraction and always below 1)'
                  : '  -- OUT OF RANGE, FL must lie between 0 and 1'));
  }
  console.log('\n  wrote lab/valves.json');
  return 0;
}

process.exit(run());
