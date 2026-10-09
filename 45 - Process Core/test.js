/* @layer registration
   PROCESS CORE -- the test runner.

       node test.js

   Runs the layer guard first, then every layer's own acceptance test. The
   guard goes first on purpose: if a file is not the layer it claims to be,
   whatever its test proves is being proved about the wrong thing.

   This runner is the core's independence. It takes no argument, reads no
   consumer, and must pass with every consumer deleted from disk -- that is
   Phase 1's acceptance bar and it is checked by copying this directory
   somewhere with no vault around it and running this file.

   See `00 - Project/Process Core -- Architecture & Build Plan.md`.        */

'use strict';
const path = require('path');
const { spawnSync } = require('child_process');

const SUITES = [
  ['test/layers.test.js',   'layer guard (tiers, no consumer reach-in)'],
  ['test/topology.test.js', 'netlist (level 1 reproduction, validation)'],
  ['test/schemvis.test.js', 'schem view (ISA-5.5 symbols, state, line breaks)'],
  ['test/dynamics.test.js', 'dynamics (level 1 solver, bit-identical)'],
  ['test/scenario.test.js', 'scenario (a level as data, run headless)'],
];

let failed = 0, total = 0;
const lines = [];

for (const [file, label] of SUITES) {
  const r = spawnSync(process.execPath, [path.join(__dirname, file)],
                      { encoding: 'utf8', cwd: __dirname });
  const ok = r.status === 0;
  const n = ((r.stdout || '').match(/^  ok  /gm) || []).length;
  total += n;
  if (!ok) {
    failed++;
    process.stdout.write(r.stdout || '');
    process.stderr.write(r.stderr || '');
    lines.push('  FAILED  ' + label);
  } else {
    lines.push('  ' + String(n).padStart(3) + ' ok   ' + label);
  }
}

console.log('\nPROCESS CORE\n');
lines.forEach(l => console.log(l));
console.log('\n  ' + (failed
  ? failed + ' SUITE(S) FAILED'
  : total + ' checks passed across ' + SUITES.length + ' layers') + '\n');

process.exit(failed ? 1 : 0);
