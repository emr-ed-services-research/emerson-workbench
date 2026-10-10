/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   Reads an Emerson Control Valve Sourcebook and writes the service
   conditions it publishes into a corpus the lab can grade against.
   Names no colour, draws nothing, and is run by hand -- `lab.js` reads
   only the committed JSON, so the core stays self-contained.          */
/* ---------------- THE BENCHMARK CORPUS -------------------------------

   WHERE THE LAB'S ANSWERS COME FROM.

   A loop is only a benchmark if somebody else published the answer. The
   Emerson sourcebooks publish hundreds of them: for each valve in each
   process unit, the real service conditions and the valve Emerson
   actually specifies for it.

     Typical Process Conditions:          Typical Control Valve Selection:
       Fluid: Heavy Gas Oil                 NPS 1 to NPS 6 easy-e ET or EZ
       P1 = 3.6 - 13 barg  (50 - 190 psig)  WCC body, 400-series SST trim
       P2 = 3.0 - 12 barg  (45 - 175 psig)  ENVIRO-SEAL packing
       T  = 80 - 325 C     (180 - 620 F)    Class IV shutoff
       Q  = 75 - 315 m3/h  (335 - 1,385 gpm)

   That is a complete sizing case with the answer attached, from the
   company whose valves these are, across refining, power and severe
   service, oil and gas, and pulp and paper. It is a far better test bed
   than a worked textbook example, and an incomparably better one than a
   game level -- which is what the lab was pointed at before Franz
   corrected it on 2026-10-10.

   -------------------------------------------------------------------
   WHY THIS REFUSES RATHER THAN REPAIRS.

   The sourcebooks are two-column, and `pdftotext` interleaves adjacent
   columns often enough to matter -- two different valves' conditions
   land in one block, so you get two P1 lines and two fluids:

       Typical Process Conditions:
       -- Fluid: Rich oil
       -- P1 = 12 - 18 bar
       Typical Process Conditions:
       -- P2 = 4 - 6 bar          <- this belongs to the OTHER valve
       -- Fluid: Propane

   A parser that took the first match of each field would produce a
   plausible, wrong benchmark, and the lab would then grade the solver
   against a case that does not exist. So: every field must appear
   EXACTLY ONCE in a block, or the block is rejected by name and counted.
   Rejects are listed, not dropped quietly -- they are work, and the
   corpus states how much of it is outstanding.

   Run: node lab/extract-sourcebook.js                                 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const POPPLER = 'C:/Users/E1552882/poppler/poppler-26.02.0/Library/bin/pdftotext.exe';
const VAULT = path.join(__dirname, '..', '..');
const BOOKS = [
  { id: 'refining',
    doc: 'Fisher Control Valve Sourcebook -- Refining (D103205X012)',
    pdf: '20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Refining.pdf',
    first: 40, last: 110 },
];

/* Take the parenthesised US-customary value where the book prints both;
   it is what the document asserts rather than what we computed from the
   other column. Same rule the catalogue uses for ASME B16.9. */
const NUM = '([0-9][0-9,.]*)';
const RANGE_US = new RegExp(
  '\\(\\s*' + NUM + '\\s*(?:-|\\u2013|to)\\s*' + NUM + '\\s*([A-Za-z/°]+[^)]*)\\)');
const SINGLE_US = new RegExp('\\(\\s*' + NUM + '\\s*([A-Za-z/°]+[^)]*)\\)');

function usRange(line) {
  let m = line.match(RANGE_US);
  if (m) return { lo: +m[1].replace(/,/g, ''), hi: +m[2].replace(/,/g, ''),
                  unit: m[3].trim() };
  m = line.match(SINGLE_US);
  if (m) return { lo: +m[1].replace(/,/g, ''), hi: +m[1].replace(/,/g, ''),
                  unit: m[2].trim() };
  return null;
}

/* Strip control characters (the sourcebook uses BEL as a bullet) and
   collapse runs of whitespace, so a heading reads as a heading. */
function clean(t) {
  return String(t).replace(/[\u0000-\u001f\u007f]/g, ' ')
                  .replace(/\s+/g, ' ').trim();
}

function once(lines, re, label, errs) {
  const hits = lines.filter(l => re.test(l));
  if (hits.length === 0) { errs.push('no ' + label); return null; }
  if (hits.length > 1) {
    errs.push(hits.length + 'x ' + label + ' (columns interleaved)');
    return null;
  }
  return hits[0];
}

function parseBlock(lines, ctx) {
  const errs = [];
  const fluidLine = once(lines, /Fluid\s*:/i, 'Fluid', errs);
  const p1Line = once(lines, /\bP1\s*=/, 'P1', errs);
  const p2Line = once(lines, /\bP2\s*=/, 'P2', errs);
  const tLine = once(lines, /\bT\s*=/, 'T', errs);
  const qLine = once(lines, /\bQ\s*=/, 'Q', errs);

  const rec = {
    book: ctx.book, unit: ctx.unit, valve: ctx.valve, page: ctx.page,
    doc: ctx.doc,
  };
  if (fluidLine) rec.fluid = fluidLine.replace(/.*Fluid\s*:\s*/i, '').trim();
  for (const [key, line] of [['p1', p1Line], ['p2', p2Line],
                             ['t', tLine], ['q', qLine]]) {
    if (!line) continue;
    const v = usRange(line);
    if (!v) { errs.push(key + ' has no US-customary value in parentheses'); continue; }
    rec[key] = v;
  }
  rec.errors = errs;
  return rec;
}

function run() {
  if (!fs.existsSync(POPPLER)) {
    console.error('pdftotext not found at ' + POPPLER);
    console.error('See the vault CLAUDE.md -- Poppler path.');
    return 1;
  }

  const out = { generated: new Date().toISOString(), cases: [], rejected: [] };

  for (const book of BOOKS) {
    const pdf = path.join(VAULT, book.pdf);
    if (!fs.existsSync(pdf)) {
      console.error('missing: ' + book.pdf);
      return 1;
    }
    const txt = execFileSync(POPPLER,
      ['-f', String(book.first), '-l', String(book.last), pdf, '-'],
      { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

    const lines = txt.split(/\r?\n/);
    let unit = '(unknown)', valve = '(unknown)', page = null;
    let i = 0;
    while (i < lines.length) {
      /* BEL (U+0007). The sourcebook's PDF carries it as a bullet/marker
         glyph, String.trim() does not strip control characters, and it
         silently defeated every anchored heading match until it was
         identified. Stripped globally rather than worked around. */
      const L = clean(lines[i]);

      /* section and valve headings, so every case says where it is from */
      let m = L.match(/^(\d+\.\d+)\s+(.{3,60})$/);
      if (m && !/=|:/.test(L)) { unit = m[1] + ' ' + m[2].trim(); valve = '(unknown)'; }
      m = L.match(/^(\d{1,2})[.,]\s+([A-Z][A-Za-z0-9 \/''-]{3,50})$/);
      if (m) valve = m[1] + '. ' + m[2].trim();
      m = L.match(/^(\d-\d{1,3})$/);
      if (m) page = m[1];

      if (/Typical Process Conditions\s*:/i.test(L)) {
        /* gather to the selection heading or the next conditions heading */
        const body = [];
        let j = i + 1;
        for (; j < lines.length; j++) {
          const s = clean(lines[j]);
          if (/Typical Control Valve Selection\s*:/i.test(s)) break;
          if (/Typical Process Conditions\s*:/i.test(s)) break;
          if (body.length > 40) break;
          if (s) body.push(s);
        }
        /* THE PUBLISHED ANSWER. Conditions alone are only half a
           benchmark -- what makes these worth grading against is that
           Emerson also states which valve it specifies for them. */
        const sel = [];
        if (/Typical Control Valve Selection/i.test(clean(lines[j] || ''))) {
          for (let k = j + 1; k < lines.length && sel.length < 12; k++) {
            const t = clean(lines[k]);
            if (!t) continue;
            if (/Typical Process Conditions/i.test(t)) break;
            if (/^\d+\.\d+ /.test(t)) break;
            if (/^[-\u2013\u2014]/.test(t) || sel.length) {
              if (!/^[-\u2013\u2014]/.test(t) && sel.length) break;
              sel.push(t.replace(/^[-\u2013\u2014]\s*/, ''));
            }
          }
        }
        const rec = parseBlock(body, { book: book.id, doc: book.doc,
                                       unit, valve, page });
        if (sel.length) rec.selection = sel;
        if (rec.errors.length) out.rejected.push(rec);
        else { delete rec.errors; out.cases.push(rec); }
        i = j;
        continue;
      }
      i++;
    }
  }

  const dir = __dirname;
  fs.writeFileSync(path.join(dir, 'corpus.json'),
                   JSON.stringify(out, null, 1) + '\n', 'utf8');

  const n = out.cases.length, r = out.rejected.length;
  console.log('\nSOURCEBOOK CORPUS\n');
  console.log('  ' + String(n).padStart(4) + '  cases parsed clean');
  console.log('  ' + String(r).padStart(4) + '  rejected, listed below -- NOT guessed at');
  console.log('  ' + String(n + r).padStart(4) + '  blocks seen\n');

  const why = {};
  out.rejected.forEach(x => x.errors.forEach(e => {
    const k = e.replace(/^\d+x /, 'duplicate ');
    why[k] = (why[k] || 0) + 1;
  }));
  Object.keys(why).sort((a, b) => why[b] - why[a]).forEach(k =>
    console.log('        ' + String(why[k]).padStart(3) + '  ' + k));

  const withSel = out.cases.filter(c => c.selection && c.selection.length);
  console.log('\n  ' + withSel.length + ' of the clean cases also carry the valve');
  console.log('  Emerson specifies -- which is the half that makes them an ANSWER');
  console.log('  rather than just a question.');

  const liquid = out.cases.filter(c => c.q && /gpm/i.test(c.q.unit));
  console.log('\n  ' + liquid.length + ' of the clean cases are LIQUID (flow in gpm),');
  console.log('  which is what the current dynamics layer can be graded against.');
  console.log('\n  wrote lab/corpus.json');
  return 0;
}

process.exit(run());
