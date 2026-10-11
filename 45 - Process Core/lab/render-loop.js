/* @layer registration
   @core Process Core -- tooling, not a process layer.
   Writes a self-contained page that RUNS the real layers in the browser
   and draws one refinery service in every view the core has.
   Names no colour of its own: the palette is skins/modern.js.
   Run: node lab/render-loop.js  ->  lab/render/index.html             */
/* ---------------- SEEING THE LOOP ------------------------------------

   WHY A PAGE AND NOT AN IMAGE.

   A rendered snapshot proves that something was drawn once. This page
   loads catalogue, geometry, sizing, trim, instrument, netlist,
   dynamics, schem-view, phys-view and the modern skin as they are on
   disk, builds the FCC netlist in the browser, and solves it as you move
   the travel slider. If a layer is broken the page is broken, which is
   the only kind of render check worth having.

   THE FOUR VIEWS, and what each one is actually for:

     schem-view, default theme   what is connected to what. Symbols and
                                 plain lines. No bore, no size, no scale.
     phys-view                   the line as PIPE -- walls, elbow sweeps,
                                 bores -- but in the schematic's own
                                 exaggerated proportions, not to scale.
     modern skin                 the stock chrome. There is no separate
                                 "pro" chrome; this is it, and it is what
                                 a consumer overlays or replaces.
     geometry, to scale          one scale for length and bore alike.
                                 This is the layer phys-view is not.

   WHAT THE GEOMETRY PANEL CANNOT DRAW, said out loud rather than faked:
   the two elbows. Darby 3-K gives their RESISTANCE and is dimensionless,
   so the solve is fine -- but their SHAPE needs a centre-to-face, and
   ASME B16.9 Table 6.1-1 has been read only to NPS 4. The register entry
   records the 1.5 x NPS rule as verified, so 15.0 in is very probably
   right, and very probably right is not a sourced dimension. The panel
   draws the pipe and names the hole.                                  */
'use strict';

const fs = require('fs');
const path = require('path');

const HERE = __dirname;
const CORE = path.join(HERE, '..');
const OUT = path.join(HERE, 'render');

/* The layers, in dependency order -- the page loads exactly these. */
const LAYERS = ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
                'topology', 'schemvis', 'physvis', 'dynamics'];

const src = LAYERS.map(m => ({
  name: m, code: fs.readFileSync(path.join(CORE, 'src', m + '.js'), 'utf8'),
}));
src.push({ name: 'skins/modern',
           code: fs.readFileSync(path.join(CORE, 'skins', 'modern.js'), 'utf8') });

const parts = fs.readFileSync(path.join(CORE, 'catalogue', 'parts.json'), 'utf8');

/* Only the one valve. The page is about a service, not a catalogue. */
const valves = JSON.parse(fs.readFileSync(path.join(HERE, 'valves.json'), 'utf8'));
const VALVE = valves.valves.find(v => v.body === 'EWT' &&
  v.cage === 'equal-percentage' && String(v.nps) === '10 x 8');
if (!VALVE) { console.error('EWT 10x8 equal-% missing from valves.json'); process.exit(1); }

/* The palette comes from the skin. Reading it here rather than naming a
   colour keeps this file honest about which layer owns appearance. */
global.window = {};
require(path.join(CORE, 'skins', 'modern.js'));
const SKIN = global.window.LPE.skins.modern;

const SCRIPTS = src.map(s =>
  '<script data-layer="' + s.name + '">\n' + s.code + '\n</script>').join('\n');

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>FCC Primary Absorber Feed -- every view the core has</title>
<style>
  :root { --ground: ${SKIN.GROUND}; --panel: ${SKIN.PANEL};
          --hair: ${SKIN.HAIRLINE}; --ink: ${SKIN.EQUIPMENT};
          --accent: ${SKIN.EMERSON.blue}; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--ground); color: var(--ink);
         font: 13px/1.5 ui-monospace, "Cascadia Mono", Consolas, monospace; }
  header { padding: 22px 28px 14px; border-bottom: 1px solid var(--hair); }
  h1 { margin: 0 0 4px; font-size: 15px; letter-spacing: .14em;
       text-transform: uppercase; font-weight: 600; }
  .cite { opacity: .62; font-size: 11.5px; }
  main { padding: 20px 28px 60px; max-width: 1180px; }
  section { margin: 26px 0 0; }
  h2 { font-size: 11.5px; letter-spacing: .18em; text-transform: uppercase;
       margin: 0 0 3px; font-weight: 600; }
  h2 em { font-style: normal; opacity: .5; letter-spacing: .04em;
          text-transform: none; font-size: 11px; }
  .why { opacity: .6; font-size: 11.5px; margin: 0 0 9px; max-width: 76ch; }
  canvas { display: block; max-width: 100%; height: auto;
           background: var(--panel); border: 1px solid var(--hair); }
  .bar { display: flex; gap: 20px; align-items: center; flex-wrap: wrap;
         padding: 12px 14px; background: var(--panel);
         border: 1px solid var(--hair); margin: 14px 0 0;
         position: sticky; top: 0; z-index: 5; }
  input[type=range] { width: 280px; accent-color: var(--accent); }
  .num { font-variant-numeric: tabular-nums; }
  .num b { color: var(--accent); font-weight: 600; }
  table { border-collapse: collapse; font-size: 11.5px; margin-top: 8px; }
  td, th { padding: 3px 18px 3px 0; text-align: left; vertical-align: top; }
  th { opacity: .5; font-weight: 400; }
  .gap { border-left: 2px solid var(--accent); padding: 8px 0 8px 12px;
         opacity: .8; font-size: 11.5px; max-width: 80ch; margin-top: 10px; }
  /* The error colour comes from the brand palette in the chrome layer.
     The literal that was here was caught by the layer guard, which was
     right: a registration-layer file naming its own red is chrome
     leaking downward, even for an error box nobody expects to see. */
  #err { white-space: pre-wrap; color: ${SKIN.EMERSON.orange};
         padding: 20px 28px; font-size: 12px; }
</style>
<header>
  <h1>FCC Primary Absorber Feed</h1>
  <div class="cite">Fisher Control Valve Sourcebook &mdash; Refining (D103205X012),
  4.10 Fluidized Catalytic Cracking, 3. Primary Absorber Feed Control<br>
  Distillate &middot; P1 190&ndash;305 psig &middot; P2 175&ndash;260 psig
  &middot; 880&ndash;3750 gpm &middot; published selection: NPS 8 to NPS 12 easy-e EW or V300</div>
</header>
<div id="err"></div>
<main id="main" hidden>
  <div class="bar">
    <label>travel <input id="t" type="range" min="0" max="100" value="75"></label>
    <span class="num">valve <b id="tv">75</b>%</span>
    <span class="num">Cv <b id="cv">--</b></span>
    <span class="num">flow <b id="q">--</b> gpm</span>
    <span class="num">FT-301 <b id="ft">--</b></span>
  </div>

  <section>
    <h2>1 &middot; schem-view <em>default theme &mdash; what is connected to what</em></h2>
    <p class="why">Symbols and plain lines. No bore, no length, no scale: a
      process display answers &ldquo;what is the loop&rdquo;, and this answer is as
      true of a refinery as of a test bench.</p>
    <canvas id="c1" width="1120" height="230"></canvas>
  </section>

  <section>
    <h2>2 &middot; phys-view <em>the line as pipe &mdash; but not to scale</em></h2>
    <p class="why">Walls, bores and real elbow sweeps &mdash; but the bore is a
      fixed number of pixels, the same for any part, so what it works out to in
      inches depends entirely on the frame&rsquo;s px-per-inch. Panel 4 measures
      what it comes to for this rig. Either way it is a render constant, not a
      dimension, which is why a sourced length had nowhere to land before the
      geometry layer existed.</p>
    <canvas id="c2" width="1120" height="230"></canvas>
  </section>

  <section>
    <h2>3 &middot; modern skin <em>the stock chrome &mdash; there is no separate &ldquo;pro&rdquo; one</em></h2>
    <p class="why">Flow colour, fluid motion, readouts and panel furniture, over
      the same schem-view geometry. A consumer overlays or replaces this; it does
      not fork the layers underneath it.</p>
    <canvas id="c3" width="1120" height="320"></canvas>
  </section>

  <section>
    <h2>4 &middot; geometry <em>to scale &mdash; one scale for length and bore alike</em></h2>
    <p class="why">NPS 10 Sch 40 as the catalogue has it, drawn at a single
      scale, with the schematic&rsquo;s bore for the same line beneath it at that
      same scale. The ratio between them is measured, not asserted &mdash; and
      at this frame it is close to 1, which is a coincidence of px-per-inch
      rather than the schematic being to scale. This is the panel the other
      three cannot be.</p>
    <canvas id="c4" width="1120" height="330"></canvas>
    <div class="gap" id="gap"></div>
  </section>

  <section>
    <h2>5 &middot; trim <em>the cage&rsquo;s own curve, from Catalog 12</em></h2>
    <p class="why">Inherent against installed, with a linear reference behind
      them. The marker is where the slider is.</p>
    <canvas id="c5" width="1120" height="300"></canvas>
  </section>

  <section>
    <h2>what each layer contributed</h2>
    <table id="tbl"></table>
  </section>
</main>

<script id="parts" type="application/json">${parts}</script>
<script id="valve" type="application/json">${JSON.stringify(VALVE)}</script>
${SCRIPTS}
<script>
(function () {
  'use strict';
  var errBox = document.getElementById('err');
  function die(e) {
    errBox.textContent = 'This page failed, which means a layer failed:\\n\\n' +
      (e && e.stack ? e.stack : String(e));
  }
  try { build(); } catch (e) { die(e); }

  function build() {
  var LPE = window.LPE;
  var CAT = LPE.catalogue.load(JSON.parse(document.getElementById('parts').textContent));
  var VALVE = JSON.parse(document.getElementById('valve').textContent);
  var PIPE = CAT.part('PIPE/NPS10/S40');

  var SVC = { P1: { lo: 190, hi: 305 }, P2: { lo: 175, hi: 260 },
              Q: { lo: 880, hi: 3750 } };
  var mid = function (r) { return (r.lo + r.hi) / 2; };
  var SG = 0.85;                 /* STATED ASSUMPTION -- see loop-fcc.js */

  var ELBOW_K = { method: 'darby-3k', K1: 800, Ki: 0.091, Kd: 4.0,
                  uncertaintyPct: 30,
                  source: 'Darby 3-K, 90 deg elbow R/D=1, flanged/welded' };

  /* The sink sits well short of the right edge: the skin hangs its
     readout off the vessel's right-hand side, and at X1 = 1010 the
     "gpm" ran off the end of the canvas. */
  var Y = 130, X0 = 90, XV = 500, X1 = 900;
  var spec = {
    bores: { main: 'PIPE/NPS10/S40' },
    fluid: { sg: SG },
    components: {
      frac:  { kind: 'vessel', tag: 'TK-1', role: 'source',
               pressure: mid(SVC.P1) },
      el1:   { kind: 'union', fitting: 'elbow', resistance: ELBOW_K,
               bore: PIPE.dims.bore },
      fv301: { kind: 'valve', tag: 'FV-301', key: 'fv', valveType: 'globe',
               cv: VALVE.cv100, trim: { curve: VALVE.curve } },
      el2:   { kind: 'union', fitting: 'elbow', resistance: ELBOW_K,
               bore: PIPE.dims.bore },
      abs:   { kind: 'vessel', tag: 'TK-2', role: 'sink',
               pressure: mid(SVC.P2) }
    },
    segments: [
      { from: 'frac.out',  to: 'el1.in',   bore: 'main' },
      { from: 'el1.out',   to: 'fv301.in', bore: 'main' },
      { from: 'fv301.out', to: 'el2.in',   bore: 'main' },
      { from: 'el2.out',   to: 'abs.in',   bore: 'main' }
    ],
    frames: { rig: { pxPerInch: 2.4, round: 1, at: {
      frac: [X0, Y], el1: [X0 + 170, Y], fv301: [XV, Y],
      el2: [XV + 200, Y], abs: [X1, Y] } } }
  };

  var net = LPE.net(spec, { frame: 'rig', catalogue: CAT });
  if (net.errors.length) throw new Error('netlist: ' + net.errors.join('; '));

  var A = Math.PI / 4 * Math.pow(PIPE.dims.bore / 12, 2);
  var V = (mid(SVC.Q) / 448.831) / A;
  var RE = LPE.sizing.reynolds(V, PIPE.dims.bore, 1.081e-5 / SG);

  var dyn = LPE.dyn(net, { tau: 0.22, reynolds: RE });
  if (dyn.errors.length) throw new Error('dynamics: ' + dyn.errors.join('; '));

  /* LABEL BY TAG. schem.plan defaults to labelBy:'key', which captions
     these symbols "frac", "fv" and "abs" -- the netlist's internal ids.
     A process display names a thing by its TAG, and the skin's own
     de-duplication assumes it: it drops a symbol caption when that name
     already appears in a readout, and it looks the readout up by tag, so
     with the default the vessel was captioned "abs" AND read out as
     "TK-2" a centimetre apart. */
  var plan = LPE.schem.plan(net, { labelBy: 'tag' });
  var piping = net.toPiping();
  var trim = LPE.trim.fromCurve({ curve: VALVE.curve });
  var res = LPE.sizing.resistance(ELBOW_K, RE, PIPE.dims.bore);
  var sysCv = LPE.sizing.cvFromK(2 * res.K, PIPE.dims.bore);
  var inst = trim.installed(sysCv);
  var ft = LPE.instrument.define({
    tag: 'FT-301', variable: 'flow', units: 'gpm',
    range: { lo: 0, hi: 6000 }, accuracy: { pct: 0.5, of: 'span' },
    requires: ['flow-element'],
    source: 'representative orifice transmitter -- NOT a sourced device'
  });

  var S = LPE.skins.modern;
  var SCHEM_T = Object.assign({}, S.schem, { ground: null });
  /* phys-view's four roles are ALREADY in the skin as S.pipe. The
     mapping here was hand-rolled and handed light: the value of
     S.FACE -- which is a font stack, not a colour. A canvas given an
     unparseable fillStyle keeps the previous one, so it would have
     drawn in the wrong colour silently. */
  var PHYS_T = S.pipe;
  var FONT = function (px) {
    return S.font({ weight: 400, size: px, face: S.FACE });
  };

  function fresh(id) {
    var c = document.getElementById(id), g = c.getContext('2d');
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = S.PANEL; g.fillRect(0, 0, c.width, c.height);
    return g;
  }

  /* ---- 1. schem-view, default theme ---- */
  function drawSchem() {
    var g = fresh('c1');
    g.save(); g.translate(0, -20);
    LPE.schem.draw(g, plan, SCHEM_T);
    g.restore();
  }

  /* ---- 2. phys-view ---- */
  function drawPhys() {
    var g = fresh('c2');
    g.save(); g.translate(0, -20);
    LPE.phys(piping).draw(g, PHYS_T);
    g.restore();
  }

  /* ---- 3. modern skin ---- */
  function drawSkin(solved, t) {
    var c = document.getElementById('c3'), g = c.getContext('2d');
    g.setTransform(1, 0, 0, 1, 0, 0);
    S.draw(g, { net: net, plan: plan, width: c.width, height: c.height,
                solved: solved, fullFlow: 5600, time: t,
                limits: { 'TK-2': { lo: SVC.Q.lo, hi: SVC.Q.hi } } });
  }

  /* ---- 4. geometry, to scale ---- */
  function poly(g, ring, fill) {
    g.beginPath();
    for (var i = 0; i < ring.length; i++)
      i ? g.lineTo(ring[i][0], ring[i][1]) : g.moveTo(ring[i][0], ring[i][1]);
    g.closePath();
    if (fill) g.fill();
    g.stroke();
  }
  var GEOM_RUN = null;
  function drawGeom() {
    var c = document.getElementById('c4');
    var g = fresh('c4');
    var schemIn = (13 * 2) / spec.frames.rig.pxPerInch;

    /* ONE SCALE, AND IT HAS TO FIT BOTH WAYS.

       This fitted the LENGTH only, which is how a 10.75 in outside
       diameter came out 287 px tall inside a 240 px panel and ran off
       the top and bottom of its own canvas. A scale that fits one axis
       is not a scale, it is a width. */
    var padX = 80, headroom = 46, footer = 58, gapIn = 2.5;
    var stackIn = PIPE.dims.od + gapIn + schemIn;

    /* The height is what constrains a 10 in bore in a panel this shape, so
       fix the scale from that and then draw AS MUCH LINE AS FITS, rather
       than picking a run length first and discovering it leaves four
       fifths of the canvas empty. */
    var k = (c.height - headroom - footer) / stackIn;
    var RUN_IN = Math.round((c.width - 2 * padX) / k);
    var shp = LPE.geometry.pipe(PIPE, RUN_IN);
    var runIn = shp.extent.x1 - shp.extent.x0;

    var yTop = headroom + (PIPE.dims.od / 2) * k;
    var yBot = yTop + ((PIPE.dims.od / 2) + gapIn + (schemIn / 2)) * k;

    g.save(); g.translate(padX, yTop); g.scale(k, k);
    g.lineWidth = 0.8 / k; g.lineJoin = 'miter';
    g.strokeStyle = S.pipe.rim; g.fillStyle = S.pipe.body;
    shp.outline.forEach(function (r) { poly(g, r, true); });
    g.fillStyle = S.pipe.light;
    shp.bore.forEach(function (r) { poly(g, r, true); });
    g.restore();

    /* The same run as the schematic draws it, at the same scale. */
    g.save(); g.translate(padX, yBot); g.scale(k, k);
    g.fillStyle = S.PANEL; g.strokeStyle = S.EMERSON.blue; g.lineWidth = 0.8 / k;
    g.beginPath(); g.rect(0, -schemIn / 2, runIn, schemIn);
    g.fill(); g.stroke();
    g.restore();

    g.fillStyle = S.EQUIPMENT; g.font = FONT(11.5);
    g.fillText(RUN_IN + ' in of NPS 10 Sch 40, to scale  --  OD ' +
      PIPE.dims.od + ' in, bore ' + PIPE.dims.bore + ' in, wall ' +
      PIPE.dims.wall + ' in', padX, 26);
    GEOM_RUN = RUN_IN;
    g.globalAlpha = .62;
    g.fillText('the same run as the schematic draws it  --  ' +
      schemIn.toFixed(1) + ' in of apparent bore, ' +
      (schemIn / PIPE.dims.bore).toFixed(2) + 'x the real one',
      padX, yBot + (schemIn / 2) * k + 20);
    g.fillText('one scale, 1 in = ' + k.toFixed(1) +
      ' px, applied to length and bore alike', padX, c.height - 16);
    g.globalAlpha = 1;
  }

  /* ---- 5. trim ---- */
  function drawTrim(travel) {
    var c = document.getElementById('c5');
    var g = fresh('c5');
    var L = 76, R = c.width - 40, T = 30, B = c.height - 42;
    var px = function (t) { return L + (R - L) * t / 100; };
    var py = function (f) { return B - (B - T) * f; };

    g.strokeStyle = S.HAIRLINE; g.lineWidth = 1;
    g.beginPath(); g.moveTo(L, T); g.lineTo(L, B); g.lineTo(R, B); g.stroke();
    g.font = FONT(10); g.fillStyle = S.EQUIPMENT; g.globalAlpha = .5;
    for (var t = 0; t <= 100; t += 25) g.fillText(t + '%', px(t) - 9, B + 17);
    g.fillText('Cv / Cv max', 8, T + 4);
    g.fillText('travel', (L + R) / 2 - 18, B + 34);
    g.globalAlpha = 1;

    function line(f, col, dash) {
      g.strokeStyle = col; g.lineWidth = 2; g.setLineDash(dash || []);
      g.beginPath();
      var first = true;
      for (var t = 0; t <= 100; t++) {
        var y = f(t);
        if (y === null || y === undefined || !isFinite(y)) continue;
        first ? g.moveTo(px(t), py(y)) : g.lineTo(px(t), py(y));
        first = false;
      }
      g.stroke(); g.setLineDash([]);
    }
    line(function (t) { return t / 100; }, S.HAIRLINE, [5, 5]);

    /* INSTALLED comes back as POINTS, not as a function. inst.at(t)
       was a guess, it does not exist, and because it was guarded by a
       typeof check the curve would simply never have been drawn -- a
       silent omission, which is worse than a crash. */
    g.strokeStyle = S.EMERSON.cyan; g.lineWidth = 2;
    g.beginPath();
    inst.points.forEach(function (pt, i) {
      i ? g.lineTo(px(pt.travel), py(pt.flowFrac))
        : g.moveTo(px(pt.travel), py(pt.flowFrac));
    });
    g.stroke();

    line(function (t) {
      var v = trim.cvAt(t); return v === null ? null : v / trim.cvMax;
    }, S.EMERSON.blue);

    var cv = trim.cvAt(travel);
    if (cv !== null) {
      g.fillStyle = S.EMERSON.blue;
      g.beginPath(); g.arc(px(travel), py(cv / trim.cvMax), 4.5, 0, 7); g.fill();
    }
    var cls = trim.classify();
    g.font = FONT(10.5);
    g.fillStyle = S.EQUIPMENT; g.globalAlpha = .6;
    g.fillText('- - -  linear reference', L + 14, T + 14);
    g.globalAlpha = 1; g.fillStyle = S.EMERSON.cyan;
    g.fillText('installed, once the line takes its share  --  authority ' +
      inst.authority.toFixed(2), L + 14, T + 46);
    g.fillStyle = S.EMERSON.blue;
    g.fillText('inherent, Catalog 12  --  rangeability ' +
      trim.rangeability.toFixed(0) + ':1, labelled ' + VALVE.cage +
      ', shape scores ' + cls.shape +
      (cls.confident ? '' : ' (too close to call)'), L + 14, T + 30);
  }

  /* The three static panels are drawn BEFORE the table, because the
     table quotes the run length the geometry panel worked out. A table
     that disagrees with the drawing beside it is worse than no table. */
  drawSchem(); drawPhys(); drawGeom();

  /* ---- what each layer contributed ---- */
  var cls = trim.classify();
  var sized = LPE.sizing.sizeLiquid(
    { q: mid(SVC.Q), P1: mid(SVC.P1) + 14.7, P2: mid(SVC.P2) + 14.7, sg: SG },
    { Cv: VALVE.cv100, FL: VALVE.FL, d: 10 }, 10);
  var rows = [
    ['catalogue', 'NPS 10 Sch 40 &mdash; bore ' + PIPE.dims.bore +
      ' in, wall ' + PIPE.dims.wall + ' in',
      CAT.sourceOf('PIPE/NPS10/S40').std],
    ['geometry', (GEOM_RUN === null ? 'that line' : GEOM_RUN +
      ' in of that line') + ' as polygons in inches, at one scale',
      'from the catalogue dimensions'],
    ['sizing', 'required Cv ' + sized.Cv.toFixed(0) + ' against ' +
      VALVE.cv100 + ' available &mdash; ' +
      (sized.fits ? 'covers the service' : 'does NOT cover it'),
      'ISA-75.01.01'],
    ['resistance', '2 &times; 90&deg; elbow, K ' + res.K.toFixed(3) +
      ' each &plusmn;' + res.uncertaintyPct + '%', res.method],
    ['trim', 'EWT 10x8 ' + VALVE.cage + ', Cv ' + VALVE.cv100 +
      ', rangeability ' + trim.rangeability.toFixed(0) + ':1 &mdash; shape scores ' +
      cls.shape + ' ' + cls.rms.toFixed(3) + ' against ' + cls.runnerUp + ' ' +
      cls.runnerUpRms.toFixed(3) + (cls.confident ? '' : ', too close to call'),
      VALVE.doc],
    ['dynamics', 'valve authority ' + inst.authority.toFixed(2) +
      ', Re ' + Math.round(RE).toLocaleString() + ' at the midpoint flow',
      'composed, opt-in'],
    ['instrument', 'FT-301, 0&ndash;6000 gpm, &plusmn;0.5% of span, needs a flow element',
      'ANSI/ISA-51.1 + NAMUR NE43'],
    ['assumed', 'specific gravity ' + SG +
      ' &mdash; the sourcebook names the fluid and never its gravity',
      'STATED ASSUMPTION, no held source']
  ];
  document.getElementById('tbl').innerHTML =
    '<tr><th>layer</th><th>what it contributed</th><th>on what authority</th></tr>' +
    rows.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] +
             '</td><td style="opacity:.55">' + r[2] + '</td></tr>';
    }).join('');

  document.getElementById('gap').innerHTML =
    '<b>What this panel cannot draw, and says so instead of faking.</b> ' +
    'The two elbows have a sourced <i>resistance</i> &mdash; Darby 3-K, which ' +
    'is dimensionless &mdash; so the solve is sound. Their <i>shape</i> needs a ' +
    'centre-to-face, and ASME B16.9 Table 6.1-1 has been read only to NPS 4. ' +
    'The register entry records the 1.5&nbsp;&times;&nbsp;NPS rule as verified ' +
    'against the standard, which makes 15.0 in very probably right &mdash; and ' +
    'very probably right is not a sourced dimension, so nothing is drawn here.';

  /* ---- live ---- */
  var slider = document.getElementById('t');
  var t0 = (window.performance || Date).now();
  var last = -1;
  slider.addEventListener('input', function () { tick(); });
  function frame() { tick(); requestAnimationFrame(frame); }

  function tick() {
    var travel = +slider.value;
    var solved;
    try {
      dyn.settle({ fv: travel / 100 });
      solved = dyn.solve({ fv: travel / 100 });
    } catch (e) { die(e); return; }
    var cv = trim.cvAt(travel);
    document.getElementById('tv').textContent = travel;
    document.getElementById('cv').textContent = cv === null ? 'shut' : cv.toFixed(0);
    document.getElementById('q').textContent = solved.qTot.toFixed(0);
    var rd = ft.read(solved.qTot, { present: ['flow-element'] });
    document.getElementById('ft').textContent =
      rd.value.toFixed(0) + ' [' + rd.status + ']';
    drawSkin(solved, ((window.performance || Date).now() - t0) / 1000);
    if (travel !== last) { drawTrim(travel); last = travel; }
  }

  document.getElementById('main').hidden = false;

  /* DRAW THE FIRST STATE SYNCHRONOUSLY, then animate.

     requestAnimationFrame does not run in a background tab, so a page
     that only ever drew from inside the loop came up with two blank
     panels and three dashes in the readouts -- and came up that way for
     anyone who opened it in a tab they were not looking at, which is how
     anyone opens a second tab. The fluid animation is the only part that
     needs a clock; the state does not. */
  tick();
  requestAnimationFrame(frame);
  }
})();
</script>
`;

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), PAGE.replace(/\r\n/g, '\n'), 'utf8');
console.log('wrote lab/render/index.html  (' + (PAGE.length / 1024).toFixed(0) +
            ' KB, ' + src.length + ' layers inlined, self-contained)');
