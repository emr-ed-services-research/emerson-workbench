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
   THE NOMINAL VALVE SIZE, and how it is recovered.

   `Fp` takes `d`, the valve's NOMINAL size, to work out what attached
   reducers cost -- so without it the lab can only ask "does it fit",
   never "what does it pass with reducers on it".

   The NPS cell is merged vertically across the two or three port rows
   it covers, and the renderer centres it on that group rather than
   aligning it to any row. So it is attached by NEAREST LABEL IN Y,
   which is exactly right for a centred merged cell:

     port rows   179   219   259   300   340
     NPS labels  179         236         317
                 1&1-1/4    1-1/2        2

   Port row 219 is 40pt from the 1&1-1/4 label and 17pt from 1-1/2, so
   it takes 1-1/2. Every row in a group is closer to its own centred
   label than to a neighbouring group's. Checked against the rendered
   page before being relied on.

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

/* WHICH PAGES, and what this file actually is.

   `Catalog 12` is a multi-section catalog. What the vault holds is its
   ED/EAD/EDR section -- 19 pages -- NOT the whole thing. Its contents,
   read rather than assumed:

     1-6    ED quick-opening, linear, equal-percentage     standard cages
     7-8    ED-J and ET-J, CL300, linear                   standard cage
     9-16   ED Whisper Trim I / III, WhisperFlo, EWD       severe service
     17-18  ET Cavitrol III, ET Dirty Service Trim         severe service
     19     a pointer: ET-C has coefficients identical to
            NPS 3 through 8 ED with full-sized port

   So the standard ET, EZ and EW cages are genuinely absent, and so is
   every rotary line. But pages 1-2 and 7-8 ARE standard-cage tables and
   the first pass through this file skipped them, which understated the
   coverage we already had.

   Severe-service pages are left out deliberately: Cavitrol, Whisper and
   DST tables carry extra columns -- minimum throttling Cv, unbalanced
   area, Kn -- that mean specific things, and reading them as if they
   were a standard cage would lose exactly the information that makes
   them severe-service trim.

   `metric: false` marks a sheet whose geometry columns are inches only.
   Pages 7-8 print no millimetre column, so a parser expecting the
   four-number mm/inch pairing rejects every row on them. */
const SHEETS = [
  { pages: [1, 2], cage: 'quick-opening', body: 'ED', cls: 'CL125-CL600',
    metric: true },
  { pages: [3, 4], cage: 'linear', body: 'ED', cls: 'CL125-CL600',
    metric: true },
  { pages: [5, 6], cage: 'equal-percentage', body: 'ED', cls: 'CL125-CL600',
    metric: true },
  /* PAGES 7-8 ARE EXCLUDED, and the reason is worth keeping.

     They were included on the first attempt as one linear sheet, and
     both invariant checks fired: NPS 12 port 9.5 came back with two
     capacities, 938 and 473, and three pairs inverted. Not a parse
     failure -- a MISLABEL. Page 7 stacks THREE tables (Linear, Equal
     Percentage, Whisper III Level A1 flow-up) and page 8 is Cavitrol
     III one- and two-stage. Calling all of it "linear" merged a
     noise-reducing trim with a standard cage, which is how 938 and 473
     ended up claiming to be the same valve.

     Reading them properly means splitting page 7 by the y of each
     sub-heading and giving Whisper and Cavitrol their own cage names.
     That is bounded work, not done, and shipping the merge in the
     meantime would put a wrong Cv in front of a sizing calculation. */
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

      /* NPS labels live in the leftmost band, left of the port-diameter
         column. Words on one row are joined: "1", "&", "1-1/4". */
      const labels = [];
      for (const r of rows) {
        const band = r.ws.filter(w => w.x >= 50 && w.x < 92 && r.y > 160);
        if (!band.length) continue;
        /* "6(2)" is NPS 6 carrying footnote 2. Footnote markers are
           typeset into the cell and are not part of the size. */
        const txt = band.map(w => w.t).join(' ')
          .replace(/&amp;/g, '&').replace(/\(\d\)/g, '')
          .replace(/\s+/g, ' ').trim();
        if (!/^[0-9]/.test(txt)) continue;      // headings are not sizes
        labels.push({ y: r.y, nps: txt });
      }
      const npsAt = y => {
        if (!labels.length) return null;
        let best = labels[0];
        for (const L of labels)
          if (Math.abs(L.y - y) < Math.abs(best.y - y)) best = L;
        return best.nps;
      };

      /* A Cv row. TWO TYPESETTINGS in one document, which is why the
         first pass read nothing at all from pages 7-8: the ED sheets
         set it as "C" plus a subscript "v" on a lower baseline, and the
         CL300 sheets set it as the single word "Cv". Both are accepted,
         and the label width differs, so the data starts at a different
         offset in each case. */
      for (const r of rows) {
        let i = r.ws.findIndex((w, k) =>
          w.t === 'C' && r.ws[k + 1] && r.ws[k + 1].t === 'v');
        let skip = 2;
        if (i < 0) {
          i = r.ws.findIndex(w => w.t === 'Cv');
          skip = 1;
        }
        if (i < 0) continue;

        const after = r.ws.slice(i + skip).map(w => num(w.t)).filter(v => v !== null);
        /* ten travel points then FL. Anything else is a row this parser
           does not understand, and it is rejected rather than trimmed
           to fit -- trimming is how the wrong column becomes the answer. */
        /* Eleven is ten travel points plus FL. TWELVE means the sheet
           also prints a coefficient at a fixed small travel -- the
           quick-opening pages carry "Coeffs for 6 mm (0.25 in) travel"
           ahead of the percentage columns. It is a real datum, it is
           just not one of the ten, so it is dropped here rather than
           silently shifting every column by one. */
        let pts = after;
        if (pts.length === 12) pts = pts.slice(1);
        if (pts.length !== 11) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'expected 10 travel points and FL, found ' + after.length });
          continue;
        }
        const cv100 = pts[9], FL = pts[10];

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
        /* Two layouts. Metric sheets print portMM portIN travelMM
           travelIN; the CL300 sheets print inches only. Take the last
           four or the last two accordingly, since a merged valve-size
           number may precede either. */
        const want = sheet.metric ? 4 : 2;
        if (geo.length < want) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'no port/travel geometry found beside or below the row' });
          continue;
        }
        const g = geo.slice(-want);
        const portIn = sheet.metric ? g[1] : g[0];
        const travelIn = sheet.metric ? g[3] : g[1];
        if (!(portIn > 0 && portIn < 30) || !(travelIn > 0 && travelIn < 10)) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'geometry out of range: port ' + portIn + ' in, travel ' +
                 travelIn + ' in' });
          continue;
        }

        /* The geometry row carries the port; the NPS label is centred
           on the group that row belongs to, so measure from the
           geometry's y rather than the Cv row's. */
        const nps = npsAt(r.y + 10);
        if (!nps) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'no NPS label found in the left band' });
          continue;
        }
        out.valves.push({
          doc: DOC, page: 'ED-' + page, body: sheet.body, cls: sheet.cls,
          cage: sheet.cage, nps: nps, portIn: portIn, travelIn: travelIn,
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
  /* INDEPENDENT CHECKS ON THE PAIRING, because the failure this parser
     exists to avoid -- Cv attached to the wrong port -- produces a table
     that looks entirely reasonable.

     THE FIRST VERSION OF THIS CHECK WAS WRONG and is worth recording.
     It asserted Cv/port^2 near constant, on the reasoning that capacity
     scales with port area. It warned at 78% scatter, which looked like a
     parse failure and was not: maximum TRAVEL varies too, and an NPS 8
     with a 3 in stroke passes 818 against 567 for the same port at 2 in.
     A reduced port in a larger body also runs richer than the same port
     in a small one, because the body restricts the approach less. The
     ratio was never going to be constant, so a scatter bound was testing
     the checker's assumption rather than the data.

     What IS invariant:
       - one (size, port, travel) has exactly one Cv
       - within a size and travel, more port passes more
     Both are facts about valves rather than guesses about trends. */
  console.log('');
  const key = v => [v.cage, v.nps, v.portIn, v.travelIn].join('|');
  const seen = {};
  let dupes = 0;
  for (const v of out.valves) {
    const k = key(v);
    if (seen[k] !== undefined && seen[k] !== v.cv100) {
      dupes++;
      console.log('  WARN  ' + v.cage + ' NPS ' + v.nps + ' port ' + v.portIn +
        ' travel ' + v.travelIn + ': two different Cv (' + seen[k] + ', ' +
        v.cv100 + ') -- the same valve cannot have two capacities');
    }
    seen[k] = v.cv100;
  }
  console.log('  ' + (dupes ? 'WARN' : 'ok  ') +
    '  one capacity per (size, port, travel): ' +
    (dupes ? dupes + ' conflicts' : 'no conflicts in ' +
     Object.keys(seen).length + ' distinct valves'));

  let bad = 0, pairs = 0;
  for (const cage of Object.keys(byCage)) {
    const g = {};
    out.valves.filter(v => v.cage === cage).forEach(v => {
      const k = v.nps + '|' + v.travelIn;
      (g[k] = g[k] || []).push(v);
    });
    for (const k of Object.keys(g)) {
      const rs = g[k].slice().sort((x, y) => x.portIn - y.portIn);
      for (let i = 1; i < rs.length; i++) {
        pairs++;
        if (!(rs[i].cv100 > rs[i - 1].cv100)) {
          bad++;
          console.log('  WARN  ' + cage + ' NPS ' + rs[i].nps +
            ': port ' + rs[i].portIn + ' passes ' + rs[i].cv100 +
            ', less than port ' + rs[i - 1].portIn + ' at ' + rs[i - 1].cv100);
        }
      }
    }
  }
  console.log('  ' + (bad ? 'WARN' : 'ok  ') +
    '  more port passes more flow: ' +
    (bad ? bad + ' of ' + pairs + ' pairs inverted'
         : pairs + ' same-size pairs, all monotonic'));

  console.log('\n  wrote lab/valves.json');
  return 0;
}

process.exit(run());
