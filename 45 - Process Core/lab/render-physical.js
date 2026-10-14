/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   The physical layer, end to end, for showing to a room.
   Run: node lab/render-physical.js                                    */
'use strict';

/* ---------------- THE PHYSICAL LAYER, IN FULL ------------------------

   Built to be shown to a class, which is a different job from the lab's
   other pages. Those are for checking that the core tells the truth; this
   one is for explaining what the truth IS, to people meeting it for the
   first time.

   THE ONE THING THIS STACK HAS THAT A RENDER CANNOT FAKE. Every other
   teaching animation of a control valve is a drawing somebody made that
   looks right. This one can say, line by line, which of its own marks are
   measured, which are conventions, and which are frankly art -- because
   the layers underneath are built to refuse anything that cannot say.
   That is the lesson worth an hour of a room's time, and it is section 3.

   AND IT ANSWERS THE QUESTION A P&ID NEVER DOES. A schematic exaggerates
   bore against length by about an order of magnitude and nobody calls it
   an error, because that is what a schematic is. What nobody can usually
   tell you is BY HOW MUCH. A frame can now declare what its pixels mean
   -- `runPxPerInch`, added to topology.js for this -- so the drawing
   prints its own exaggeration instead of leaving a reader to guess.    */

const fs = require('fs');
const path = require('path');

global.window = {};
const SRC = ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
             'actuator', 'assembly', 'topology', 'schemvis', 'physvis']
  .map(m => ({ name: m,
               code: fs.readFileSync(
                 path.join(__dirname, '..', 'src', m + '.js'), 'utf8') }));
for (const m of SRC) eval(m.code);            /* eslint-disable-line */
const LPE = global.window.LPE;

const PARTS = fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8');
const CAT = LPE.catalogue.load(JSON.parse(PARTS));

require(path.join(__dirname, '..', 'skins', 'procutaway.js'));
const D = global.window.LPE.skins.procutaway.DARK;

/* ---- the loop, and what its pixels mean ---------------------------- */

const PIPE = CAT.part('PIPE/NPS6/S40');
const VALVE = CAT.part('VALVE/ED/NPS4/P4.375/T2/EQPCT');

/* THE RUN IS A REAL LENGTH, and the frame says so. Forty feet of NPS 6
   between the tank and the exchanger, valve a third of the way along,
   drawn across 770 px -- so 1.604 px per inch of RUN.

   That declaration is the whole hinge of the page. Without it the bore is
   exaggerated against the run by whatever the author's pixels happened to
   imply, and nobody -- including the drawing -- can say by how much. With
   it the drawing prints its own factor, and the second frame says 8x
   because it IS 8x rather than because it looked about right. */
const RUN_FT = 40;
const Y = 190, X0 = 110, X1 = 880;
const RUN_PX_PER_INCH = (X1 - X0) / (RUN_FT * 12);

function loopSpec(borePxPerInch) {
  return {
    bores: { main: PIPE.dims.bore },
    components: {
      hdr: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 50 },
      fv:  { kind: 'valve', tag: 'FV-101', valveType: 'globe',
             cv: VALVE.cv[VALVE.cv.length - 1], key: 'fv101' },
      hx:  { kind: 'vessel', tag: 'HX-101', role: 'sink', pressure: 35 },
    },
    segments: [
      { from: 'hdr.out', to: 'fv.in', bore: 'main' },
      { from: 'fv.out',  to: 'hx.in', bore: 'main' },
    ],
    frames: { rig: {
      pxPerInch: borePxPerInch,
      runPxPerInch: RUN_PX_PER_INCH,
      round: 1,
      at: { hdr: [X0, Y], fv: [X0 + (X1 - X0) / 3, Y], hx: [X1, Y] },
    } },
  };
}

/* True, and then stretched until it can be seen.

   HALVED, because the scaled bore is carried as a radius -- a diameter
   put through `pxPerInch` and then used as `r` draws twice as wide as it
   should. `net.exaggeration` reports what is DRAWN, so these are the
   pxPerInch values that land the drawn factor on exactly 1 and exactly 8.
   The first version of this file set them without halving and the page
   would have printed x2 while claiming x1 -- on the one figure it exists
   to get right. */
const TRUE_BORE_PX = RUN_PX_PER_INCH / 2;       /* drawn factor 1 */
const SHOWN_BORE_PX = RUN_PX_PER_INCH * 8 / 2;  /* drawn factor 8 */

const netTrue = LPE.net(loopSpec(TRUE_BORE_PX), { frame: 'rig', catalogue: CAT });
const netShown = LPE.net(loopSpec(SHOWN_BORE_PX), { frame: 'rig', catalogue: CAT });
for (const n of [netTrue, netShown])
  if (n.errors.length) { console.error(n.errors.join('\n')); process.exit(1); }

/* ---- every dimension on the drawing, and where it came from -------- */

const provenance = [
  { what: 'pipe bore', value: PIPE.dims.bore.toFixed(3) + ' in',
    kind: 'measured',
    from: 'ASME B36.10M, through the catalogue, which refuses to load '
        + 'unless the canonical value re-derives from the printed one' },
  { what: 'elbow centreline radius',
    value: '1.5 × bore diameter',
    kind: 'convention',
    from: 'long-radius elbow. Owned by topology.js so there is one copy; '
        + 'physvis.js used to carry an identical second one' },
  { what: 'valve face to face', value: '14.5 in', kind: 'measured',
    from: 'the ED catalogue row for this body' },
  { what: 'valve port', value: VALVE.dims.port + ' in', kind: 'measured',
    from: 'Fisher Catalog 12' },
  { what: 'rated travel', value: VALVE.travel + ' in', kind: 'measured',
    from: 'Fisher Catalog 12' },
  { what: 'body outline', value: 'traced', kind: 'measured',
    from: 'Figure 20 of D100390X012, drawing 43X2895-A, painted part by '
        + 'part and registered against a sourced length' },
  { what: 'pipe wall thickness', value: '5 px, flat', kind: 'art',
    from: 'ART. Wall varies with nominal size as well as schedule and '
        + 'B36.10M says by how much. We hold the standard. This is a '
        + 'constant standing where a sourced number is already in the '
        + 'building, and physvis.js says so in its own comment' },
  { what: 'reducer cone length', value: '16 px', kind: 'art',
    from: 'ART, legitimately. A forging detail that varies by maker and '
        + 'is not dimensioned in any standard we hold' },
  { what: 'tee reinforcement', value: 'drawn', kind: 'art',
    from: 'ART, legitimately, for the same reason' },
  { what: 'balance port count', value: '4', kind: 'convention',
    from: 'CONVENTION. No ED document we hold prints a count. The section '
        + 'cuts two; the arithmetic uses four' },
  { what: 'cage window count', value: '6', kind: 'convention',
    from: 'CONVENTION. Not published for an ED' },
];

const counts = { measured: 0, convention: 0, art: 0 };
for (const r of provenance) counts[r.kind]++;

/* ---- the page ------------------------------------------------------- */

const OUT = path.join(__dirname, 'physical');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const provRows = provenance.map(r => `
  <tr class="k-${r.kind}">
    <td>${r.what}</td>
    <td class="num">${r.value}</td>
    <td><span class="tag ${r.kind}">${r.kind}</span></td>
    <td class="src">${r.from}</td>
  </tr>`).join('');

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>The physical layer</title>
<style>
  :root { --ground:${D.ground}; --panel:${D.panel}; --hair:${D.hairline};
          --ink:${D.ink}; --label:${D.label}; --fluid:${D.fluid};
          --metal:${D.metal}; --trim:${D.trim}; --rim:${D.rim}; }
  *{box-sizing:border-box}
  body{margin:0;background:var(--ground);color:var(--ink);
    font:15px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}
  .wrap{max-width:1180px;margin:0 auto;padding:34px 24px 70px}
  h1{font-size:30px;margin:0 0 10px;letter-spacing:-.015em}
  h2{font-size:12px;letter-spacing:.13em;text-transform:uppercase;
     color:var(--label);margin:46px 0 8px;
     font-family:ui-monospace,Consolas,monospace}
  p{color:var(--label);max-width:78ch;margin:0 0 14px}
  p.lede{color:var(--ink);font-size:16px}
  .frame{background:var(--panel);border:1px solid var(--hair);
    border-radius:3px;padding:14px;margin:0 0 10px}
  canvas{display:block;width:100%;height:auto}
  .cap{font-family:ui-monospace,Consolas,monospace;font-size:11.5px;
    color:var(--label);margin:10px 0 0;letter-spacing:.03em}
  .cap b{color:var(--ink)}
  table{width:100%;border-collapse:collapse;background:var(--panel);
    border:1px solid var(--hair);border-radius:3px;overflow:hidden}
  th{font:11px ui-monospace,Consolas,monospace;letter-spacing:.07em;
    text-transform:uppercase;color:var(--label);text-align:left;
    padding:10px 12px;border-bottom:1px solid var(--hair)}
  td{padding:9px 12px;border-bottom:1px solid var(--hair);font-size:13.5px;
    vertical-align:top}
  tr:last-child td{border-bottom:none}
  td.num{font-family:ui-monospace,Consolas,monospace;white-space:nowrap}
  td.src{color:var(--label);font-size:12.5px}
  .tag{font-family:ui-monospace,Consolas,monospace;font-size:10px;
    letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;
    border-radius:2px;border:1px solid currentColor;white-space:nowrap}
  .tag.measured{color:${D.fluid}}
  .tag.convention{color:${D.trim}}
  .tag.art{color:${D.rim}}
  .tally{display:flex;gap:10px;flex-wrap:wrap;margin:0 0 14px}
  .tally div{background:var(--panel);border:1px solid var(--hair);
    border-radius:3px;padding:10px 14px;min-width:150px}
  .tally b{display:block;font-size:24px;
    font-family:ui-monospace,Consolas,monospace}
  .tally span{font-size:11px;letter-spacing:.07em;text-transform:uppercase;
    color:var(--label);font-family:ui-monospace,Consolas,monospace}
</style>
<div class="wrap">

<h1>The physical layer</h1>
<p class="lede">The same loop a P&amp;ID draws as three symbols, drawn instead
  as what is actually built: pipe with a real bore, elbows with a real radius,
  a valve body traced off its own manual. And &mdash; the part no other
  drawing of a control valve will tell you &mdash; which of these lines are
  measured, which are conventions, and which are art.</p>

<h2>1 &middot; what it really looks like</h2>
<p>Forty feet of NPS&nbsp;6 between a tank and an exchanger, with the valve a
  third of the way along. Bore and length at <b>the same scale</b>. This is
  honest and it is almost useless, which is the first thing worth saying out
  loud to a room.</p>
<div class="frame"><canvas id="c1" width="1120" height="150"></canvas></div>
<p class="cap" id="cap1"></p>

<h2>2 &middot; the same loop, stretched until it can be seen</h2>
<p>Every schematic exaggerates bore against length, and nobody calls it an
  error &mdash; that is what a schematic is. What nobody can usually tell you
  is <b>by how much</b>. This frame declares what its own pixels mean, so the
  drawing prints its own exaggeration instead of leaving you to guess.</p>
<div class="frame"><canvas id="c2" width="1120" height="230"></canvas></div>
<p class="cap" id="cap2"></p>
<p>Nothing moved. The components sit exactly where they sat; only the bore is
  drawn larger, and the factor is stated. A labelled diagram is not a lie
  &mdash; an unlabelled one is just untestable.</p>

<h2>3 &middot; which of these lines are real</h2>
<p>This is the section worth the room&rsquo;s time. Every dimension on the
  drawings above, with what backs it. A line that cannot name its source is
  marked as art rather than quietly drawn like engineering.</p>
<div class="tally">
  <div><b style="color:${D.fluid}">${counts.measured}</b>
       <span>measured</span></div>
  <div><b style="color:${D.trim}">${counts.convention}</b>
       <span>convention</span></div>
  <div><b style="color:${D.rim}">${counts.art}</b>
       <span>art, and labelled</span></div>
</div>
<table>
  <tr><th>dimension</th><th>value</th><th></th><th>what backs it</th></tr>
  ${provRows}
</table>
<p>The three marked <em>art</em> are not a failing &mdash; a reducer&rsquo;s
  cone length is a forging detail no standard we hold dimensions, so drawing
  one is unavoidable and claiming it is measured would be the error. The pipe
  wall is different: the standard exists, we hold it, and a flat five pixels
  is standing where a sourced number already is. That one is a debt, and it is
  written down as one in <code>physvis.js</code> rather than left to be
  discovered.</p>

<h2>4 &middot; and the conventions are named too</h2>
<p>A convention is a number nobody published that the model needs anyway. The
  rule here is not that there are none &mdash; it is that each says it is one,
  in its own words, and that a check fails if one stops being read by
  anything. Two died this week when a trace replaced them.</p>

</div>
<script>
${SRC.map(m => m.code).join('\n')}
</script>
<script>
(function(){
  const LPE = window.LPE;
  const CAT = LPE.catalogue.load(${PARTS});
  const SPECS = ${JSON.stringify({ t: loopSpec(TRUE_BORE_PX),
                                   s: loopSpec(SHOWN_BORE_PX) })};
  const T = { body: '${D.metal}', rim: '${D.rim}',
              light: '${D.trim}', dark: '${D.fluid}' };

  function drawOne(canvasId, capId, spec){
    const net = LPE.net(spec, { frame: 'rig', catalogue: CAT });
    const c = document.getElementById(canvasId), g = c.getContext('2d');
    const pp = net.toPiping();

    /* fit the authored pixels into this canvas without changing the
       proportion between bore and run -- one k for both, or the whole
       page would be a lie about the thing it is explaining */
    let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
    for (const l of pp.lines) for (const p of l.pts){
      x0=Math.min(x0,p[0]); x1=Math.max(x1,p[0]);
      y0=Math.min(y0,p[1]); y1=Math.max(y1,p[1]); }
    const pad = 46;
    const k = (c.width - 2*pad) / (x1 - x0);
    g.save();
    g.translate(pad - x0*k, c.height/2 - ((y0+y1)/2)*k);
    g.scale(k, k);
    LPE.phys(pp).draw(g, T);
    g.restore();

    const e = net.exaggeration;
    document.getElementById(capId).innerHTML = e
      ? '<b>bore \\u00d7' + e.factor.toFixed(1) + ' against length</b>'
        + ' \\u00b7 ' + e.borePxPerInch.toFixed(3) + ' px per inch of bore,'
        + ' ' + e.runPxPerInch.toFixed(3) + ' px per inch of run'
        + ' \\u00b7 ' + ${JSON.stringify(RUN_FT)} + ' ft of NPS 6'
      : 'this frame declares no run scale, so the exaggeration is unknown'
        + ' \\u2014 which is the usual state of a piping drawing';
  }

  drawOne('c1','cap1',SPECS.t);
  drawOne('c2','cap2',SPECS.s);
})();
</script>
`;

fs.writeFileSync(path.join(OUT, 'index.html'),
                 PAGE.replace(/\r\n/g, '\n'), 'utf8');

console.log('\nTHE PHYSICAL LAYER\n');
console.log('  run            ' + RUN_FT + ' ft of NPS 6, bore ' +
            PIPE.dims.bore + ' in');
console.log('  run scale      ' + RUN_PX_PER_INCH.toFixed(3) +
            ' px per inch of run');
console.log('  true frame     bore x' +
            netTrue.exaggeration.factor.toFixed(1));
console.log('  shown frame    bore x' +
            netShown.exaggeration.factor.toFixed(1));
console.log('  dimensions     ' + counts.measured + ' measured, ' +
            counts.convention + ' convention, ' + counts.art + ' art');
console.log('\nwrote lab/physical/index.html  --  serve it over HTTP\n');
