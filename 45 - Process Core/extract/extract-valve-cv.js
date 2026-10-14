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

   Run: node extract/extract-valve-cv.js                                   */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const POPPLER = 'C:/Users/E1552882/poppler/poppler-26.02.0/Library/bin/pdftotext.exe';
const VAULT = path.join(__dirname, '..', '..');
const PDF = '20 - Source Library/Equipment Manuals/Valve Bodies/' +
            'fisher-catalog-12-flow-coefficients-complete-d103182x012-apr2022.pdf';
const DOC = 'Fisher Catalog 12 complete (D103182X012), April 2022, 398 pp';

/* WHICH PAGES, ONE SHEET PER PAGE.

   The vault now holds the COMPLETE Catalog 12 -- D103182X012, 398 pages,
   April 2022, public from emerson.com -- not just its ED section.

   ONE PAGE PER SHEET, and that is a correction. The first pass grouped
   pages by cage name, so EW-1, EW-7, EW-31 and EW-35 all went in as one
   "EW quick-opening" sheet. They are not one thing: EW-1 is EWD at
   CL150/300/600 flowing down, EW-31 flows UP, and the bodies differ.
   Merging them gave the same (size, port) two capacities and inverted 22
   of 48 monotonic pairs. Each page is its own table and is declared as
   its own sheet, which is the only way the invariants can mean anything.

   ONLY STANDARD CAGES. Whisper, WhisperFlo, Cavitrol and Dirty Service
   Trim carry extra columns -- minimum throttling Cv, unbalanced area,
   Kn -- that mean specific things, and reading them as a standard cage
   would lose exactly what makes them severe-service trim.

   ROTARY IS OUT for now. Control-Disk and V500 tables are built around
   degrees of rotation rather than percent of travel and did not survive
   the invariants on trial. They need a reader that understands their
   shape, not this one pointed at more pages.

   A NOTE ON ET, which the refinery corpus names more than anything else:
   Catalog 12's entire ET section is three pages -- Cavitrol III, Dirty
   Service Trim, and a page of equivalences. Standard ET is NOT tabulated
   in this catalog and is given no stated equivalence to ED. Page ET-3
   does state that ET-C equals ED NPS 3-8 full port and ETR equals ED
   NPS 1-4 CL125-600, and points Large ET/EWT at PS Sheet 51.1:E Series,
   which the vault does not hold. */
const SHEETS = [
  /* ED -- easy-e globe. pdf = page code + 119. Verified clean. */
  { pages: [120], cage: 'quick-opening', body: 'ED', cls: 'CL125-CL600', metric: true },
  { pages: [121], cage: 'quick-opening', body: 'ED', cls: 'CL125-CL600', metric: true },
  { pages: [122], cage: 'linear', body: 'ED', cls: 'CL125-CL600', metric: true },
  { pages: [123], cage: 'linear', body: 'ED', cls: 'CL125-CL600', metric: true },
  { pages: [124], cage: 'equal-percentage', body: 'ED', cls: 'CL125-CL600', metric: true },
  { pages: [125], cage: 'equal-percentage', body: 'ED', cls: 'CL125-CL600', metric: true },

  /* EZ -- easy-e globe, smaller body, flow up through the port. */
  { pages: [201], cage: 'quick-opening', body: 'EZ', cls: 'CL125-CL600', metric: true },
  { pages: [202], cage: 'linear', body: 'EZ', cls: 'CL125-CL600', metric: true },
  { pages: [203], cage: 'equal-percentage', body: 'EZ', cls: 'CL125-CL600', metric: true },
  { pages: [205], cage: 'equal-percentage', body: 'EZ', cls: 'CL125-CL600', metric: true },

  /* The NPS-16-and-larger EW sheets, with their real column bands: a
     valve-type cell outside the size, and a size that runs to x=110
     because "20 x 16" straddles where the old band stopped. */
  { pages: [170], body: 'EW', cls: 'EW-10 drilled-window, flow down',
    metric: true, sizeBand: [85, 110], typeBand: [55, 85] },
  { pages: [172], body: 'EW', cls: 'EW-12 drilled-window, flow down',
    metric: true, sizeBand: [85, 110], typeBand: [55, 85] },

  /* p204 remains set aside. Each lists several valve sizes
     whose rows sit close together -- p170 is headed "NPS 16 and Larger
     Sizes" and gives NPS 16, 20 and 24 the same port diameters -- and
     the size label is attached by NEAREST LABEL IN Y, which is right for
     a merged cell centred on two rows and wrong once the groups pack
     tightly. The symptom is specific: port 14.75 comes back twice with
     3490 and 3670, and every size on the page collapses onto one label.

     The fix is each label's merged-cell SPAN rather than its centre,
     which bbox output does not give directly -- it has word boxes, not
     cell boxes. Bounded, not done, and three pages of wrong valve sizes
     do more harm than their coverage is worth. */
  /* EW / EWD / EWT / EWS -- back in, now that the cage is read off the
     page rather than declared. These were excluded when one sheet
     covered a whole page: EW-1 is headed "Quick Opening and Linear
     Cages" and carries BOTH tables with the full size list in each, so
     4x2 appeared twice with two capacities and the invariants refused
     it. That was never a pressure-class problem -- "CL150, 300, and
     600" means one table valid for all three classes, not three stacked
     tables, and saying otherwise was a guess I did not check.

     Severe-service pages (the Whisper run EW-3 to EW-29, Cavitrol
     EW-30/36/37) stay out; their rows are refused by name if reached. */
  { pages: [161], body: 'EWD', cls: 'CL150-600, flow down', metric: true },
  { pages: [162], body: 'EWD', cls: 'CL150-600, flow down', metric: true },
  { pages: [167], body: 'EW',  cls: 'EW-7, flow down',      metric: true },
  { pages: [169], body: 'EW',  cls: 'EW-9, flow down',      metric: true },
  { pages: [171], body: 'EW',  cls: 'EW-11, flow down',     metric: true },
  { pages: [191], body: 'EWT', cls: 'EW-31, flow up',       metric: true },
  { pages: [192], body: 'EWT', cls: 'EW-32, flow up',       metric: true },
  { pages: [195], body: 'EWS', cls: 'EW-35, flow up',       metric: true },
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

/* ---- WHICH CAGE, READ OFF THE PAGE ---------------------------------

   A catalog page is not one table. Page EW-1 is headed "Quick Opening
   and Linear Cages" and carries BOTH, each with the full list of valve
   sizes -- so 4x2 appears twice on it with two different capacities.
   ED-7 stacks three. Being TOLD a page's cage was wrong in principle and
   wrong in fact: it merged a quick-opening table with a linear one and
   the invariants caught it as one valve with two Cv.

   So the cage is detected per row instead. A heading row is one that
   reduces to NOTHING BUT the cage name once the name and the word
   "Characteristic" are struck out. That distinguishes the real
   sub-heading from two things that also contain cage names:

     y=60   "Quick Opening and Linear Cages Page EW-1"    the page title
     y=129  "Quick Opening Quick Opening"                 the heading
     y=419  "Linear Linear"                               the heading
     y=712  "The linear trim coefficients shown on..."    a footnote

   Severe-service cages get a band too, so their rows can be REFUSED by
   name rather than silently read as a standard cage. Their tables carry
   columns -- minimum throttling Cv, unbalanced area, Kn -- that mean
   things this reader does not model. */
const CAGES = [
  [/Quick\s*Opening/ig, 'quick-opening', false],
  [/Equal\s*Percentage/ig, 'equal-percentage', false],
  [/Modified\s*Parabolic/ig, 'modified-parabolic', false],
  [/Whisper\s*Flo/ig, 'whisperflo', true],
  [/Whisper\s*Trim[^\s]*/ig, 'whisper-trim', true],
  [/Cavitrol[^\s]*/ig, 'cavitrol', true],
  [/Dirty\s*Service(\s*Trim)?/ig, 'dirty-service', true],
  [/\bLinear\b/ig, 'linear', false],
];

function cageBands(rows) {
  const bands = [];
  for (const r of rows) {
    const raw = r.ws.map(w => w.t).join(' ')
      .replace(/\u2122|\u00ae|\(\d\)/g, ' ').replace(/\s+/g, ' ').trim();
    if (!raw || raw.length > 90) continue;
    for (const [re, name, severe] of CAGES) {
      re.lastIndex = 0;
      if (!re.test(raw)) continue;
      re.lastIndex = 0;
      const left = raw.replace(re, ' ')
        .replace(/Characteristic|Cage[s]?/ig, ' ')
        .replace(/[^A-Za-z0-9]+/g, '').trim();
      if (left === '') bands.push({ y: r.y, cage: name, severe: severe });
      break;
    }
  }
  return bands.sort((a, b) => a.y - b.y);
}

const cageAt = (bands, y) => {
  let hit = null;
  for (const b of bands) if (b.y <= y + 2) hit = b;
  return hit;
};

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
      let bands = cageBands(rows);
      /* CONTINUATION PAGES carry no sub-heading. ED-2 and every EZ page
         name their cage only in the page title -- "EZ Catalog 12 Quick
         Opening Valve Plug Page EZ-1" -- which the band test correctly
         refuses, because a title is not a section heading.

         So: if a page has no bands AND mentions exactly one standard
         cage anywhere on it, that is unambiguously its cage and the
         whole page takes it. If it mentions two, as EW-1 does with
         "Quick Opening and Linear Cages", bands are REQUIRED and their
         absence is a rejection. Ambiguity is never resolved by picking
         the first one. */
      if (!bands.length) {
        const all = rows.map(r => r.ws.map(w => w.t).join(' ')).join(' ');
        const found = [];
        for (const [re, name, severe] of CAGES) {
          re.lastIndex = 0;
          if (re.test(all) && found.indexOf(name) < 0) found.push(name);
        }
        if (found.length === 1)
          bands = [{ y: -1, cage: found[0],
                     severe: !!(CAGES.find(c => c[1] === found[0]) || [])[2] }];
      }

      /* TWO SPANNING COLUMNS, not one.

         Most sheets put the valve size alone at the left. The NPS-16-
         and-larger EW sheets put a VALVE TYPE column outside it:

           x 60-80   "EWD," / "EWT"   or   "EWT-2"     merged over rows
           x 89-102  "20"  "x"  "16"                   the size itself

         Reading x < 92 as the size therefore did two things wrong at
         once: it swallowed the type words, and it cut "20 x 16" off at
         the "x", so every row on the page collapsed onto "20" or "24".

         Both are spanning cells and both are attached by nearest label
         in y, which is what a cell centred on its group of rows wants.
         The type is a real distinguishing attribute -- EWD/EWT and
         EWT-2 are different valves -- so it travels into the row's
         identity rather than being dropped. */
      const SB = sheet.sizeBand || [50, 92];
      const TB = sheet.typeBand || null;

      const types = [];
      if (TB) for (const r of rows) {
        const band = r.ws.filter(w => w.x >= TB[0] && w.x < TB[1] && r.y > 160);
        if (!band.length) continue;
        const t = band.map(w => w.t).join(' ').replace(/\s+/g, ' ').trim();
        if (/^[A-Z]/.test(t)) types.push({ y: r.y, t: t.replace(/,$/, '') });
      }
      /* Adjacent rows of one cell -- "EWD," then "EWT" -- are one label. */
      const typeCells = [];
      for (const t of types.sort((a, b) => a.y - b.y)) {
        const last = typeCells[typeCells.length - 1];
        if (last && t.y - last.y < 14) { last.t += ' ' + t.t; last.y = (last.y + t.y) / 2; }
        else typeCells.push({ y: t.y, t: t.t });
      }
      const typeAt = y => {
        if (!typeCells.length) return null;
        let best = typeCells[0];
        for (const c of typeCells)
          if (Math.abs(c.y - y) < Math.abs(best.y - y)) best = c;
        return best.t;
      };

      const labels = [];
      for (const r of rows) {
        const band = r.ws.filter(w => w.x >= SB[0] && w.x < SB[1] && r.y > 160);
        if (!band.length) continue;
        /* "6(2)" is NPS 6 carrying footnote 2 -- footnote markers are
           typeset into the cell and are not part of the size.

           "10 x 8 203.2" is a size whose cell sits close enough to the
           port-millimetre column that the band swallows it, and
           "8 x 6 and" is a size followed by a stray word of body text.
           Both are trimmed to the size itself: a reducer designation is
           digits, optional fractions, and an x. Anything after that is
           somebody else's column. */
        let txt = band.map(w => w.t).join(' ')
          .replace(/&amp;/g, '&').replace(/\(\d\)/g, '')
          .replace(/\s+/g, ' ').trim();
        /* Sizes come as "2", "1-1/2", "10 x 8" and -- on the EZ sheets --
           as bare fractions, "1/2" and "3/4". Without the fraction
           alternative "1/2" matched only its leading "1" and NPS 1/2
           was filed as NPS 1, colliding with the real NPS 1 and giving
           one valve two capacities. */
        const SZ = '\\d+\\/\\d+|\\d+(?:[-\\u2010]\\d+\\/\\d+)?';
        const sizeM = txt.match(
          new RegExp('^(?:' + SZ + ')(?:\\s*x\\s*(?:' + SZ + '))?', 'i'));
        if (sizeM) txt = sizeM[0].replace(/\s*x\s*/i, ' x ').trim();
        if (!/^[0-9]/.test(txt)) continue;      // headings are not sizes

        /* NORMALISE THE TYPESETTER'S HYPHEN. The size regex above already
           tolerates U+2010 because the PDF uses it, but tolerating it and
           keeping it are different things: it produced "1-1/2" and
           "1‐1/2" as two separate sizes, three rows filed under a
           size that looks identical on screen and compares unequal. The
           vault is ASCII by convention for exactly this reason. */
        txt = txt.replace(/[‐‑‒–—−]/g, '-');
        if (/[^ -~]/.test(txt))
          throw new Error('nps label "' + txt + '" still carries a ' +
            'non-ASCII character after normalising. Add it to the ' +
            'replacement above rather than letting it into the data.');

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
        /* THE WHOLE CURVE, not just its endpoint. Cv at 10, 20 ... 100
           percent of travel IS the valve's inherent characteristic --
           the difference between a linear cage and an equal-percentage
           one lives in the shape of these ten numbers, not in the name
           on the page. Storing only cv100 threw away the one thing
           Phase 5 needs and kept the one thing it does not. */
        const curve = pts.slice(0, 10);
        const cv100 = pts[9], FL = pts[10];

        /* The geometry for this row: port diameter in inches and travel
           in inches sit left of the coefficient column, on this row or
           the one below it (the renderer is inconsistent). */
        const left = w => w.x < r.ws[i].x - 5 && w.x >= SB[1];
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
        /* GEOMETRY THAT VALIDATES ITSELF.

           Column order is not the same on every sheet. ED runs port(mm)
           port(in) travel(mm) travel(in). The EW sheets insert a "Coeffs
           for 6 mm travel" column BETWEEN port and travel. The EZ sheets
           put that column after the coefficient label instead. Taking
           "the last four numbers" gave a 4x2 valve a port of 29.8 in,
           which is not a port, it is a flow coefficient.

           Rather than calibrate each sheet by hand -- which is a list
           that goes stale the next time Fisher re-typesets a page --
           find the pairs that ARE a millimetre and an inch measurement
           of the same thing: their ratio is 25.4. Two such pairs in
           order are port and travel. A column that is not a length
           cannot accidentally satisfy that, so the layout identifies
           itself and a mis-read is refused instead of recorded. */
        /* KEEP THE MILLIMETRES TOO.

           The pairing above already has to FIND the mm value to trust the
           inch one -- that is the whole 25.4 test -- and then threw it
           away. The catalogue layer requires every dimension to carry the
           value as its document printed it beside the canonical one, and
           re-derives one from the other at load time. Catalog 12 prints
           both units, so keeping both is not extra work, it is declining
           to discard the evidence the reader already used. */
        let portIn = null, travelIn = null, portMm = null, travelMm = null;
        if (!sheet.metric) {
          if (geo.length >= 2) { portIn = geo[geo.length - 2]; travelIn = geo[geo.length - 1]; }
        } else {
          const pairs = [];
          for (let k = 0; k + 1 < geo.length; k++) {
            const mm = geo[k], inch = geo[k + 1];
            if (inch > 0 && Math.abs(mm / inch - 25.4) / 25.4 < 0.015) {
              pairs.push({ mm: mm, inch: inch }); k++;
            }
          }
          if (pairs.length >= 2) {
            portIn = pairs[0].inch;   portMm = pairs[0].mm;
            travelIn = pairs[1].inch; travelMm = pairs[1].mm;
          }
        }
        if (portIn === null || travelIn === null) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'could not find two millimetre/inch pairs for port and ' +
                 'travel in [' + geo.join(' ') + ']' });
          continue;
        }

        /* The geometry row carries the port; the NPS label is centred
           on the group that row belongs to, so measure from the
           geometry's y rather than the Cv row's. */
        /* An NPS label that reads 25.4 is a millimetre column being
           picked up by the left band on a section whose columns sit
           differently from ED's. Nominal pipe sizes do not run to 25
           and are never given to one decimal, so such a row is rejected
           rather than filed under a valve size that does not exist. */
        let nps = npsAt(r.y + 10);
        if (nps && /^\d+(\.\d+)?$/.test(nps) && parseFloat(nps) > 24) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'left band gave "' + nps + '" as a valve size, which is a ' +
                 'millimetre column, not an NPS' });
          continue;
        }
        if (!nps) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'no NPS label found in the left band' });
          continue;
        }
        /* The page says which cage this row is in. A row under no
           heading, or under a severe-service one, is refused. */
        const band = cageAt(bands, r.y);
        if (!band) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'no cage heading above this row, so its characteristic ' +
                 'is unknown' });
          continue;
        }
        if (band.severe) {
          out.rejected.push({ page: page, y: Math.round(r.y),
            why: 'severe-service cage (' + band.cage + '): its table ' +
                 'carries columns this reader does not model' });
          continue;
        }
        const vtype = TB ? typeAt(r.y + 10) : null;
        out.valves.push({
          doc: DOC, page: 'p' + page, body: vtype || sheet.body,
          cls: sheet.cls, cage: band.cage, nps: nps,
          portIn: portIn, travelIn: travelIn,
          portMm: portMm, travelMm: travelMm, cv100: cv100, FL: FL,
          curve: curve,
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
  /* THE KEY MUST NAME AN ACTUAL VALVE, body and all. EWD NPS 4x2 with a
     linear cage passes 107 flowing down; EWT NPS 4x2 with a linear cage
     passes 96.2 flowing up. Same nominal size, genuinely different
     valves, genuinely different capacity -- so a key of cage, size, port
     and travel alone called them a conflict when they are not one.
     Widening it here is not loosening the check: it is the check finally
     identifying the thing it is checking. */
  const key = v => [v.body, v.cls, v.cage, v.nps, v.portIn, v.travelIn].join('|');
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
      const k = v.body + '|' + v.cls + '|' + v.nps + '|' + v.travelIn;
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
