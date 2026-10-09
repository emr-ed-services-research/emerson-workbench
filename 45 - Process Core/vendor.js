/* @layer registration
   PROCESS CORE -- vendoring into a consumer.

       node vendor.js "../50 - Lunar Process Engineer"

   Copies `src/` into `<consumer>/vendor/process-core/` and writes a
   `_process-core-lock.json` beside it: a SHA-256 per file, the source path,
   and the time. This is the same shape as `40 - Engine`'s
   `_engine-lock.json`, deliberately -- the vault already solved distribution
   once and a second mechanism would be a second thing to learn.

   Why vendor rather than import: there is no package registry on this
   machine, consumers are in different languages (LPE is Node, LoopBench is
   Python) and one of them lives in a different repository. A copy plus a
   hash is the mechanism that works across all three.

   THE TESTS RUN FIRST. Vendoring a red core would push a known-broken copy
   into a consumer, where it would be discovered later and further away. If
   `node test.js` fails, nothing is copied.

   The consumer then verifies the lock on every build, so an edit made to the
   vendored copy instead of to the core is caught at the consumer rather than
   silently diverging. Edit the core and re-vendor; never hand-edit a
   vendored file.

   See `00 - Project/Process Core -- Architecture & Build Plan.md`.        */

'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

const SRC = path.join(__dirname, 'src');
const LOCK = '_process-core-lock.json';

function sha256(file) {
  return crypto.createHash('sha256')
    .update(fs.readFileSync(file)).digest('hex').toUpperCase();
}

/* Shared with consumers: given a vendored directory, is it exactly what was
   shipped? Exported so a consumer's build can call it instead of
   reimplementing the comparison and getting it subtly wrong. */
function verify(dir) {
  const lockPath = path.join(dir, LOCK);
  if (!fs.existsSync(lockPath)) {
    return { ok: false, why: 'no ' + LOCK + ' in ' + dir +
      '. The vendored core is unverifiable: run vendor.js to produce one.' };
  }
  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  const files = Object.keys(lock.files);
  const drift = [];
  for (const f of files) {
    const full = path.join(dir, f);
    if (!fs.existsSync(full)) { drift.push(f + ' is missing'); continue; }
    if (sha256(full) !== lock.files[f]) drift.push(f + ' has been edited');
  }
  const walk = (d, prefix) => {
    for (const f of fs.readdirSync(d)) {
      const rel = prefix + f;
      if (fs.statSync(path.join(d, f)).isDirectory()) { walk(path.join(d, f), rel + '/'); continue; }
      if (rel !== LOCK && files.indexOf(rel) < 0) drift.push(rel + ' is not in the lock');
    }
  };
  walk(dir, '');
  if (drift.length) {
    return { ok: false, why: drift.join('; ') +
      '. A vendored file is a COPY of `45 - Process Core/src`, not a place to ' +
      'work: edit the core, run its tests, and re-vendor. Hand-editing here ' +
      'forks the core silently, and the fork is found months later by a ' +
      'second consumer.' };
  }
  return { ok: true, why: files.length + ' files match the lock (' +
    (lock.vendoredUtc || 'unknown time') + ')' };
}

function vendor(consumer) {
  const dest = path.join(consumer, 'vendor', 'process-core');

  console.log('running the core\'s tests before copying anything...\n');
  const t = spawnSync(process.execPath, [path.join(__dirname, 'test.js')],
                      { encoding: 'utf8', cwd: __dirname });
  process.stdout.write(t.stdout || '');
  if (t.status !== 0) {
    process.stderr.write(t.stderr || '');
    console.error('REFUSING TO VENDOR: the core does not pass its own tests.\n' +
      'Pushing a red core into a consumer moves the failure somewhere\n' +
      'further from its cause. Fix the core first.');
    return 1;
  }

  fs.mkdirSync(dest, { recursive: true });
  const lock = { files: {} };
  /* src/ is the model. skins/ are chrome -- the only files in the core
     allowed to name a colour -- and they ship too, because a consumer
     that wants the modern view should not have to rewrite it. */
  const names = fs.readdirSync(SRC).filter(f => f.endsWith('.js')).sort();
  const skinDir = path.join(__dirname, 'skins');
  const skins = fs.existsSync(skinDir)
    ? fs.readdirSync(skinDir).filter(f => f.endsWith('.js')).sort()
        .map(f => 'skins/' + f)
    : [];
  for (const f of names) {
    fs.copyFileSync(path.join(SRC, f), path.join(dest, f));
    lock.files[f] = sha256(path.join(dest, f));
  }
  if (skins.length) fs.mkdirSync(path.join(dest, 'skins'), { recursive: true });
  for (const f of skins) {
    fs.copyFileSync(path.join(__dirname, f), path.join(dest, f));
    lock.files[f] = sha256(path.join(dest, f));
  }
  names.push.apply(names, skins);
  /* Anything previously vendored and since removed from the core must go,
     or a consumer keeps building against a file the core no longer has. */
  for (const f of fs.readdirSync(dest)) {
    if (f === LOCK || f === 'skins') continue;
    if (names.indexOf(f) < 0) {
      fs.unlinkSync(path.join(dest, f));
      console.log('  removed stale ' + f);
    }
  }
  lock.vendoredUtc = new Date().toISOString();
  lock.source = __dirname;
  lock.note = 'Generated by 45 - Process Core/vendor.js. Do not hand-edit the ' +
              'files in this directory -- edit the core and re-vendor.';
  fs.writeFileSync(path.join(dest, LOCK),
                   JSON.stringify(lock, null, 2) + '\n', 'utf8');

  console.log('\nvendored ' + names.length + ' files -> ' + dest);
  names.forEach(f => console.log('  ' + f + '  ' + lock.files[f].slice(0, 16) + '...'));
  return 0;
}

module.exports = { verify, vendor, LOCK };

if (require.main === module) {
  const consumer = process.argv[2];
  if (!consumer) {
    console.error('usage: node vendor.js <consumer directory>');
    process.exit(2);
  }
  if (!fs.existsSync(consumer)) {
    console.error('no such directory: ' + consumer);
    process.exit(2);
  }
  process.exit(vendor(consumer));
}
