/* Can we produce the document this claim rests on?
 *
 *     node "20 - Source Library/check-techpubs.js"
 *     node "20 - Source Library/check-techpubs.js" --list
 *
 * THE GAP THIS CLOSES. The Standards Register already makes every
 * ISA/ASME/IEC citation resolve to an entry that says what the standard
 * is, which edition, and whether we hold it -- and check-standards.js
 * enforces it. Manufacturer documents had no equivalent. They are most
 * of what this vault actually cites: a valve's port diameter, an
 * actuator's effective area, a packing's friction force, the three
 * mounting numbers the assembly layer refuses a bad pairing on. Every
 * one of those is "Table N of D1xxxxxX012" and nothing checked that
 * D1xxxxxX012 was a document anybody here could open.
 *
 * It was not hypothetical. The valve body archetype cited "Figure 24 of
 * D100399X012, the Fisher EW instruction manual" in twenty-six places.
 * There is no such file in the vault and there never was; the shape
 * actually came from a sourcebook figure of a different family. A
 * citation nobody can follow is indistinguishable from an invented one,
 * which is the thing this vault's first rule is about.
 *
 * HELD means a PDF under the Source Library whose filename or whose
 * first or last pages carry that number -- built by scan-documents and
 * recorded in held-documents.json so this check needs no PDF tooling to
 * run. NOT HELD is allowed, but only with a reason written down, the
 * same bargain the Standards Register strikes: an honest entry saying
 * "never read" beats no entry.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const LIB = __dirname;
const VAULT = path.join(LIB, '..');
const DOC = /D\d{6}X\d{3}/gi;

/* Where claims are made. Not the Source Library itself -- an index
 * naming a document it indexes is not a claim resting on it. */
const ROOTS = ['45 - Process Core', '50 - Lunar Process Engineer/src',
               '40 - Engine', '00 - Project'];
const SKIP = /node_modules|[/\\]vendor[/\\]|\.venv|[/\\]build[/\\]|[/\\]dist[/\\]/;
const EXT = /\.(js|json|md|html)$/i;

const inv = JSON.parse(fs.readFileSync(
  path.join(LIB, 'held-documents.json'), 'utf8'));
const held = inv.held || {};
const excused = inv.notHeld || {};

function walk(dir, out) {
  let ents;
  try { ents = fs.readdirSync(dir, { withFileTypes: true }); }
  catch (e) { return out; }
  for (const e of ents) {
    const p = path.join(dir, e.name);
    if (SKIP.test(p)) continue;
    if (e.isDirectory()) walk(p, out);
    else if (EXT.test(e.name)) out.push(p);
  }
  return out;
}

const files = [];
for (const r of ROOTS) walk(path.join(VAULT, r), files);

const cites = new Map();          /* doc -> {count, where:Set} */
for (const f of files) {
  let txt;
  try { txt = fs.readFileSync(f, 'utf8'); } catch (e) { continue; }
  let m;
  DOC.lastIndex = 0;
  while ((m = DOC.exec(txt))) {
    const id = m[0].toUpperCase();
    const rec = cites.get(id) || { count: 0, where: new Set() };
    rec.count++;
    rec.where.add(path.relative(VAULT, f).replace(/\\/g, '/'));
    cites.set(id, rec);
  }
}

if (process.argv.includes('--list')) {
  console.log('\nDOCUMENTS HELD (' + Object.keys(held).length + ')\n');
  for (const id of Object.keys(held).sort())
    console.log('  ' + id + '  ' + held[id]);
  console.log('');
  process.exit(0);
}

console.log('\nTECHNICAL PUBLICATIONS\n');
console.log('  ' + files.length + ' files scanned, ' + cites.size +
            ' Emerson document numbers cited, ' +
            Object.keys(held).length + ' held\n');

const missing = [];
for (const [id, rec] of [...cites.entries()].sort((a, b) => b[1].count - a[1].count)) {
  if (held[id]) continue;
  if (excused[id]) {
    console.log('  note  ' + id + ' is not held, by declaration: ' +
                excused[id]);
    continue;
  }
  missing.push([id, rec]);
}

if (missing.length) {
  console.log('  CITED AND NOT HELD -- the vault cannot produce these:\n');
  for (const [id, rec] of missing) {
    console.log('        ' + id + '  ' + rec.count + ' citation' +
                (rec.count === 1 ? '' : 's'));
    for (const w of [...rec.where].slice(0, 4))
      console.log('            ' + w);
    if (rec.where.size > 4)
      console.log('            ... and ' + (rec.where.size - 4) + ' more');
  }
  console.log('\n  Either put the document in the Source Library, or add it');
  console.log('  to held-documents.json under "notHeld" with the reason and');
  console.log('  what the numbers taken from it actually rest on. A citation');
  console.log('  nobody can follow is indistinguishable from an invented one.\n');
  process.exit(1);
}

console.log('  ok    every document a claim rests on is one we hold\n');
