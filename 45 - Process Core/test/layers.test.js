/* @layer registration
   @core Process Core -- this file moves to `45 - Process Core` in Phase 1.

   THE LAYER GUARD -- Phase 0 of the Process Core build plan.

   Every file bound for the Process Core declares which layer it belongs to,
   and this proves the declaration is true. Not by reading comments: by
   checking the code for the things that layer is not allowed to contain.

   It exists because documentation does not work on this problem. During the
   build of the schematic view a line-gap defect was fixed in topology.js --
   the wrong layer -- and what caught it was topology.test.js rejecting the
   change and SAYING WHY. The fix moved up a layer in minutes. No document
   would have done that, because a document has to be read first and a
   failing build does not.

   So every message below states the reason, not just the violation. That
   sentence is the actual deliverable: it is what turns a build failure into
   orientation for whoever hit it, including a Claude instance that has read
   nothing.

       node layers.test.js       (build.js runs it too; non-zero on fail)

   See `00 - Project/Process Core -- Architecture & Build Plan.md`, section 8.
                                                                           */

'use strict';
const fs = require('fs');
const path = require('path');

/* The stack, bottom to top. A file must declare one of these. Tooling
   (test.js, vendor.js) declares `registration` because it belongs to no
   process layer; only files under src/ count as a layer's implementation. */
const LAYERS = ['registration', 'netlist', 'schem-view', 'phys-view',
                'dynamics', 'scenario', 'chrome'];

/* Every .js in the core, discovered rather than listed. A list is a thing
   someone forgets to add to, and a file that nobody checks is exactly the
   file that grows a consumer dependency. Discovery means a new core file is
   held to the rules the moment it exists. */
const ROOT = path.join(__dirname, '..');
const CORE_FILES = fs.readdirSync(ROOT).filter(f => f.endsWith('.js'))
  .concat(fs.readdirSync(path.join(ROOT, 'src'))
            .filter(f => f.endsWith('.js')).map(f => 'src/' + f))
  .concat(fs.readdirSync(path.join(ROOT, 'test'))
            .filter(f => f.endsWith('.js')).map(f => 'test/' + f))
  .concat(fs.existsSync(path.join(ROOT, 'skins'))
    ? fs.readdirSync(path.join(ROOT, 'skins'))
        .filter(f => f.endsWith('.js')).map(f => 'skins/' + f) : [])
  .filter(f => fs.existsSync(path.join(ROOT, f)));

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* Comments are not code. topology.js names LPE.piping and LPE.Line three
   times while explaining what consumers do with a netlist, and that is
   exactly the kind of sentence this file wants people to keep writing. Strip
   comments and string bodies before looking for violations, so the guard
   measures what the file DOES. */
function codeOnly(src) {
  let out = '', i = 0, n = src.length;
  while (i < n) {
    const two = src.substr(i, 2);
    if (two === '/*') { const e = src.indexOf('*/', i + 2); i = e < 0 ? n : e + 2; continue; }
    if (two === '//') { const e = src.indexOf('\n', i); i = e < 0 ? n : e; continue; }
    const c = src[i];
    if (c === '"' || c === "'" || c === '`') {
      i++;
      while (i < n && src[i] !== c) { if (src[i] === '\\') i++; i++; }
      i++;
      out += ' ';                       // the string existed; its text did not
      continue;
    }
    out += c; i++;
  }
  return out;
}

/* A colour survives comment-stripping only if it is written as a bare token,
   so check the raw source for literals outside comments instead. */
function colourLiterals(src) {
  const stripped = (function () {
    let out = '', i = 0, n = src.length;
    while (i < n) {
      const two = src.substr(i, 2);
      if (two === '/*') { const e = src.indexOf('*/', i + 2); i = e < 0 ? n : e + 2; continue; }
      if (two === '//') { const e = src.indexOf('\n', i); i = e < 0 ? n : e; continue; }
      out += src[i]; i++;
    }
    return out;
  })();
  return (stripped.match(/#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?\b/g) || []);
}

console.log('\nlayer guard -- every core file is what it says it is\n');

const declared = {};

for (const f of CORE_FILES) {
  const full = path.join(ROOT, f);
  if (!fs.existsSync(full)) { check(f + ' exists', false, 'not found'); continue; }
  const src = fs.readFileSync(full, 'utf8');

  /* 1. It declares a layer, and the layer is real. */
  const m = src.slice(0, 2000).match(/@layer\s+([a-z-]+)/);
  if (!m) {
    check(f + ' declares its layer', false,
      'no "@layer <name>" in the first 2000 characters. Every file bound ' +
      'for the Process Core says which layer it belongs to, because the ' +
      'rules it must obey depend on the answer and nobody can check an ' +
      'unstated claim. Valid: ' + LAYERS.join(', '));
    continue;
  }
  const layer = m[1];
  declared[f] = layer;
  check(f + ' declares a real layer (' + layer + ')', LAYERS.indexOf(layer) >= 0,
    LAYERS.indexOf(layer) >= 0 ? '' :
    '"' + layer + '" is not in the stack. Valid: ' + LAYERS.join(', '));

  const code = codeOnly(src);

  /* 2. No core file reaches into a consumer's runtime. The core is the
        platform; consumers adapt to it, never the reverse. */
  const consumer = code.match(/LPE\.(art|palette|audio|mount|intro|boot|title|trainer|Line|Cutaway|piping|pipes|valveShell|valveTrim|handWheel|gauge)\b/g);
  check(f + ' does not reach into a consumer', !consumer,
    consumer ? 'references ' + Array.from(new Set(consumer)).join(', ') +
      ' in CODE (comments are fine and were ignored). The Process Core is ' +
      'the platform: it must build and test with every consumer deleted ' +
      'from disk. One call like this makes the core un-reusable by ' +
      'LoopBench and anything after it.' : '');

  /* 3. COLOUR LIVES IN CHROME AND NOWHERE ELSE.
        Phase 5a made the model colour-free; Phase 5b gave colour a place
        to live. A file that declares `@layer chrome` is a SKIN -- naming
        colours is the only thing it is for -- and every other file in the
        core must name none. That one rule is the architecture: the model
        holds no opinion about appearance, and appearance lives in files
        that hold nothing else. */
  const cols = colourLiterals(src);
  if (layer === 'chrome') {
    check(f + ' is a skin, so colour is its job', true,
      cols.length + ' colours, which is what a skin is for');
  } else {
    check(f + ' names no colour', cols.length === 0,
      cols.length ? 'contains ' + Array.from(new Set(cols)).join(', ') +
        '. Only a file declaring "@layer chrome" may name a colour. ' +
        'Everywhere else the core names the ROLES that need one ' +
        '(line, symbol, fill, label, ground, gap) and a consumer says what ' +
        'each looks like. A default here is chrome leaking down a layer, ' +
        'and it is how a view ends up with one skin it can never lose.' : '');
  }

  /* 4. The netlist decides nothing about appearance at all. */
  if (layer === 'netlist') {
    const canvas = code.match(/\.(fillRect|strokeRect|beginPath|moveTo|lineTo|arcTo|fillText|strokeText|drawImage)\s*\(/g);
    check(f + ' (netlist) draws nothing', !canvas,
      canvas ? 'calls ' + Array.from(new Set(canvas)).join(', ') +
        '. A netlist says what is connected to what; how it is drawn is ' +
        'decided above it. This is the boundary a reducer-gap fix was ' +
        'placed on the wrong side of once already -- hiding a fitting is a ' +
        'render concern, and a hidden reducer still changes the bore.' : '');
  }
}

/* 4. One implementation per layer. A test declares the layer it guards --
      that is how it gets held to the same rules -- so only implementations
      are counted here. Two files both claiming to BE the netlist is the
      drift this catches. */
const impls = Object.keys(declared)
  .filter(f => !/\.test\.js$/.test(f) && f.indexOf('src/') === 0);
for (const layer of LAYERS) {
  if (layer === 'chrome') continue;   // several skins is the whole point
  const owners = impls.filter(f => declared[f] === layer);
  if (owners.length === 0) continue;          // not built yet; that is fine
  check('the ' + layer + ' layer has exactly one implementation',
    owners.length === 1,
    owners.length + ' files claim to be the ' + layer + ' layer: ' +
    owners.join(', ') + '. A layer with two implementations is two layers ' +
    'wearing one name, and consumers will end up depending on both.');
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
