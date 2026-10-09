/* STANDARDS REGISTER — the check.
   =====================================================================

       node "20 - Source Library/Standards/check-standards.js"
       node "20 - Source Library/Standards/check-standards.js" --list
       node "20 - Source Library/Standards/check-standards.js" --write

   Scans the vault for standards citations, resolves each one against a
   register entry, and refreshes every entry's `used-by`.

   WHY IT EXISTS. A register nobody checks is a register that is wrong
   within a month, and the specific way this one would go wrong is
   invisible: a citation appears in a slide, nobody writes an entry, and
   the claim looks exactly as authoritative as the thirty around it that
   are backed. That is how `ISA-5.1` came to be cited 33 times against a
   document Emerson does not hold.

   `used-by` is GENERATED. It was tempting to let authors maintain it,
   and the Component Index is the standing argument against: a
   hand-maintained back-reference is a hand-maintained lie about six
   months later. The same mistake was made and caught twice in the
   Process Core this week — a hand-kept list of "symbols we implement"
   hid three missing ones until the list was derived instead.

   It FAILS on a citation with no entry. It WARNS on an entry cited
   nowhere, which is softer on purpose: an entry may legitimately precede
   its first use, or outlive it while a decision is reconsidered.
   =====================================================================  */

'use strict';
const fs = require('fs');
const path = require('path');

const HERE = __dirname;
const VAULT = path.resolve(HERE, '..', '..');

/* Where to look. The whole vault except the places that would drown the
   signal: dependencies, virtual environments, build output, and this
   directory itself (an entry citing its own id is not a usage). */
const SKIP_DIR = new Set(['node_modules', '.git', '.venv', '__pycache__',
                          'dist', '_generator', 'Standards']);
const EXT = new Set(['.js', '.md', '.html', '.json', '.mjs', '.ps1']);

/* ---- the citation vocabulary ---------------------------------------
   Deliberately narrow. A loose pattern pulls in pressure classes
   ("ANSI 150"), date formats ("ISO 8601") and bare section numbers, and
   a check with false positives is a check people start ignoring. Each
   authority is matched on the shapes it actually uses in this vault. */
const PATTERNS = [
  [/\bISA[-\s]?(RP|TR)?[-\s]?(\d+(?:\.\d+)*)/g, m => 'ISA-' + (m[1] || '') + m[2]],
  [/\bANSI\/FCI[-\s]?(\d+(?:-\d+)?)/g,          m => 'ANSI/FCI ' + m[1]],
  [/\bFCI[-\s]?(70-2|91-1)\b/g,                 m => 'ANSI/FCI ' + m[1]],
  [/\bASME[-\s]?(B\d+(?:\.\d+)*M?)/g,           m => 'ASME ' + m[1]],
  [/\bANSI\/ASME[-\s]?(B\d+(?:\.\d+)*M?)/g,     m => 'ASME ' + m[1]],
  [/\bIEC[-\s]?(\d{5})(?:-[\d-]+)?/g,           m => 'IEC ' + m[1]],
  [/\bISO[-\s]?(15848|15926|15156|5211)\b/g,    m => 'ISO ' + m[1]],
  [/\bNACE[-\s]?(MR\d+)/g,                      m => 'NACE ' + m[1]],
];

/* Joint publications: two spellings, one authority, one entry. */
const ALIAS = { 'ISO 15156': 'NACE MR0175' };

function normalise(id) {
  let s = id.replace(/\s+/g, ' ').trim();
  s = s.replace(/^ISA-(RP|TR)(\d)/, 'ISA-$1$2');   // ISA-RP75.23
  return ALIAS[s] || s;
}

/* ---- the register --------------------------------------------------- */
function loadEntries() {
  const out = {};
  for (const f of fs.readdirSync(HERE)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    const src = fs.readFileSync(path.join(HERE, f), 'utf8');
    const m = src.match(/^standard-id:\s*"([^"]+)"/m);
    if (!m) { console.error('  ' + f + ' has no standard-id in its frontmatter'); continue; }
    const hold = (src.match(/^holding:\s*(\S+)/m) || [, '?'])[1];
    out[normalise(m[1])] = { file: f, id: m[1], holding: hold, src };
  }
  return out;
}

/* ---- the scan -------------------------------------------------------- */
function walk(dir, hits) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIR.has(name)) continue;
    const full = path.join(dir, name);
    let st;
    try { st = fs.statSync(full); } catch (e) { continue; }
    if (st.isDirectory()) { walk(full, hits); continue; }
    if (!EXT.has(path.extname(name))) continue;
    let text;
    try { text = fs.readFileSync(full, 'utf8'); } catch (e) { continue; }
    const rel = path.relative(VAULT, full).replace(/\\/g, '/');
    for (const [re, build] of PATTERNS) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        const id = normalise(build(m));
        (hits[id] = hits[id] || {})[rel] = (hits[id][rel] || 0) + 1;
      }
    }
  }
}

/* ---- run ------------------------------------------------------------- */
const args = process.argv.slice(2);
const entries = loadEntries();
const hits = {};
walk(VAULT, hits);

const cited = Object.keys(hits).sort();
const missing = cited.filter(id => !entries[id]);
const unused = Object.keys(entries).filter(id => !hits[id]).sort();

if (args.includes('--list')) {
  console.log('\nSTANDARDS REGISTER — inventory\n');
  const rows = cited.map(id => {
    const files = Object.keys(hits[id]);
    const n = files.reduce((t, f) => t + hits[id][f], 0);
    const e = entries[id];
    return [id, n, files.length, e ? e.holding : 'NO ENTRY'];
  }).sort((a, b) => b[1] - a[1]);
  for (const [id, n, f, h] of rows) {
    console.log('  ' + id.padEnd(16) + String(n).padStart(4) + ' hits  ' +
                String(f).padStart(3) + ' files   ' + h);
  }
  console.log('');
  process.exit(0);
}

/* Refresh used-by. Always computed; written only with --write, so a
   plain run never surprises anyone with a dirty tree. */
let rewrote = 0;
for (const id of Object.keys(entries)) {
  const e = entries[id];
  const files = Object.keys(hits[id] || {}).sort();
  const list = files.length
    ? '\n' + files.map(f => '  - "' + f + '"').join('\n')
    : ' []';
  const next = e.src.replace(
    /^used-by:.*(?:\n  - .*)*$/m,
    'used-by:' + list + (files.length ? '' : '   # GENERATED by check-standards.js — do not hand-edit'));
  if (next !== e.src) {
    rewrote++;
    if (args.includes('--write')) {
      fs.writeFileSync(path.join(HERE, e.file), next, 'utf8');
    }
  }
}

console.log('\nSTANDARDS REGISTER\n');
console.log('  ' + Object.keys(entries).length + ' entries, ' +
            cited.length + ' distinct standards cited in the vault');

if (missing.length) {
  console.log('\n  FAIL  cited with no register entry:');
  for (const id of missing) {
    const files = Object.keys(hits[id]);
    console.log('        ' + id + '  (' + files.length + ' files, e.g. ' + files[0] + ')');
  }
  console.log('\n        A citation with no entry is a claim nobody can trace.');
  console.log('        Add an entry beside this script -- an honest one that says');
  console.log('        "not read" is worth more than no entry at all.');
}

if (unused.length) {
  console.log('\n  warn  entry cited nowhere: ' + unused.join(', '));
  console.log('        Fine if it is ahead of its first use; stale otherwise.');
}

/* The thing the register was built to surface. */
const exposed = cited.filter(id => entries[id] && entries[id].holding === 'not-held');
if (exposed.length) {
  console.log('\n  NOTE  cited but NOT HELD:');
  for (const id of exposed) {
    const n = Object.values(hits[id]).reduce((a, b) => a + b, 0);
    console.log('        ' + id + ' — ' + n + ' citations against a document we cannot produce');
  }
}

if (rewrote) {
  console.log('\n  ' + rewrote + ' entries have stale used-by' +
              (args.includes('--write') ? ' — rewritten' : ' (run with --write)'));
}

if (!missing.length) console.log('\n  ok    every citation resolves to an entry');
console.log('');
process.exit(missing.length ? 1 : 0);
