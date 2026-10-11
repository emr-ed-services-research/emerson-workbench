/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   Draws FIC-101 in schem view. Run: node lab/render-loop-cooling.js  */
'use strict';

const fs = require('fs');
const path = require('path');
const LOOP = require('./loop-cooling.js');
const LPE = global.window.LPE;

const SRC = ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
             'assembly', 'topology', 'schemvis', 'dynamics']
  .map(m => ({ name: m,
               code: fs.readFileSync(
                 path.join(__dirname, '..', 'src', m + '.js'), 'utf8') }));
const SKIN = fs.readFileSync(
  path.join(__dirname, '..', 'skins', 'procutaway.js'), 'utf8');
const PARTS = fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8');

const OUT = path.join(__dirname, 'loop');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

/* The palette is the SKIN's. A lab file naming a hex colour is chrome
   leaking down a layer, and the layer guard says so -- correctly, and
   it caught this file the first time it was written. */
require(path.join(__dirname, '..', 'skins', 'procutaway.js'));
const PC = global.window.LPE.skins.procutaway;
const D = PC.DARK;

/* The report the spec script produced, shown beside the drawing so
   the picture and the numbers cannot drift apart. */
const REPORT = LOOP.report.join('\n');

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>FIC-101 -- cooling water to an exchanger</title>
<style>
  :root { --ground:${D.ground}; --panel:${D.panel}; --hair:${D.hairline};
          --ink:${D.ink}; --label:${D.label}; --accent:${D.fluidFast}; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--ground); color:var(--ink);
         font:13px/1.5 ui-monospace,"Cascadia Mono",Consolas,monospace; }
  header { padding:22px 28px 14px; border-bottom:1px solid var(--hair); }
  h1 { margin:0 0 4px; font-size:15px; letter-spacing:.14em;
       text-transform:uppercase; font-weight:600; }
  .sub { opacity:.62; font-size:11.5px; max-width:92ch; }
  main { padding:18px 28px 60px; max-width:1180px; }
  h2 { font-size:11.5px; letter-spacing:.18em; text-transform:uppercase;
       margin:22px 0 6px; font-weight:600; }
  canvas { display:block; max-width:100%; height:auto;
           background:var(--panel); border:1px solid var(--hair); }
  pre { background:var(--panel); border:1px solid var(--hair);
        padding:14px 16px; font-size:11.5px; line-height:1.45;
        overflow-x:auto; color:var(--ink); opacity:.88; }
  .why { opacity:.6; font-size:11.5px; max-width:84ch; margin:0 0 10px; }
  #err { white-space:pre-wrap; color:${D.envelope}; padding:20px 28px; }
</style>
<header>
  <h1>FIC-101 &mdash; cooling water to an exchanger</h1>
  <div class="sub">A basic control loop, specified rather than sketched.
    Every number below came out of a layer, and the control valve
    assembly was checked against two published tables before it was
    drawn: travel, stem diameter and yoke boss all agree, which is what
    makes a 657 size 30 on an ED NPS 1-1/2 a real valve rather than two
    Fisher parts in the same picture.</div>
</header>
<div id="err" hidden></div>
<main id="main" hidden>
  <h2>1 &middot; the loop <em style="font-style:normal;opacity:.5">
    schem view, ISA-5.5 symbols and ISA-5.1 instruments</em></h2>
  <p class="why">The process line is the netlist's. The instrument loop
    is declared over it &mdash; a signal is not a pipe, and making a
    4-20&nbsp;mA pair into a kind of pipe is the sort of tidy lie that
    is hard to get back out of. Dashed lines are electric. The bubble
    with a line across it is in the control room; the plain ones are
    out in the field.</p>
  <canvas id="c1" width="1120" height="260"></canvas>

  <h2>2 &middot; what the layers said</h2>
  <pre id="rep"></pre>
</main>
<script>${SRC.map(s => s.code).join('\n')}</script>
<script>${SKIN}</script>
<script>
(function () {
  const LPE = window.LPE;
  const die = e => { const d = document.getElementById('err');
    d.hidden = false;
    d.textContent = 'This page failed, which means a layer failed:\\n\\n' +
      (e && e.stack || e); };
  try { build(); } catch (e) { die(e); }

  function build() {
    const CAT = LPE.catalogue.load(${PARTS});
    const spec = ${JSON.stringify(LOOP.spec)};
    const net = LPE.net(spec, { frame: 'rig', catalogue: CAT });
    if (net.errors.length) throw new Error(net.errors.join('\\n'));

    const plan = LPE.schem.plan(net, {
      scale: 13, labelBy: 'tag',
      state: { fv101: ${(LOOP.travelPct / 100).toFixed(3)} },
      instruments: ${JSON.stringify(LOOP.INSTR)},
      signals: ${JSON.stringify(LOOP.SIGNALS)},
    });
    LPE.schem.draw(document.getElementById('c1').getContext('2d'), plan, {
      line: '${D.label}', symbol: '${D.ink}', fill: '${D.fluidFast}',
      label: '${D.label}', ground: '${D.panel}', gap: '${D.panel}',
      lineWidth: 2, symbolWidth: 1.6,
      labelFont: '11px ui-monospace, Consolas, monospace',
    });

    document.getElementById('rep').textContent = ${JSON.stringify(REPORT)};
    document.getElementById('main').hidden = false;
  }
})();
</script>
`;

fs.writeFileSync(path.join(OUT, 'index.html'),
                 PAGE.replace(/\r\n/g, '\n'), 'utf8');
console.log('\nwrote lab/loop/index.html  --  serve it over HTTP\n');
