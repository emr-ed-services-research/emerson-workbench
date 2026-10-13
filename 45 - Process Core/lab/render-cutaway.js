/* @layer registration
   @core Process Core -- tooling, not a process layer.
   Writes a self-contained page that runs the real layers and draws the
   Pro Cutaway. Run: node lab/render-cutaway.js -> lab/cutaway/index.html */
/* ---------------- PRO CUTAWAY, ON A PIPE RUN -------------------------

   PHASE 3 OF THE PRO CHROME PLAN, and deliberately the one before the
   hard part. There is no valve here: valve geometry does not exist yet
   and this page is the test of whether the approach is worth building it
   for. If markers driven by a real velocity profile do not read, that is
   much cheaper to discover now than after the saucer chambers.

   WHAT IS ON THE PAGE:

     1  a straight NPS 10 line -- the profile, nothing else happening
     2  a socket-weld elbow -- the bore contracts, so the fluid must
        speed up, and the envelope must get taller at the same station
     3  the same line at three Reynolds numbers -- laminar, mid-
        transition, turbulent -- which is the comparison the blended
        profile exists for

   The slider sets flow. Everything redraws from the real layers: the
   catalogue's bores, the geometry layer's path, the flow field's
   velocity. Nothing on this page is a stored picture.                 */
'use strict';

const fs = require('fs');
const path = require('path');

const HERE = __dirname;
const CORE = path.join(HERE, '..');
const OUT = path.join(HERE, 'cutaway');

const LAYERS = ['catalogue', 'geometry', 'sizing', 'trim', 'flowfield'];
const src = LAYERS.map(m => ({
  name: m, code: fs.readFileSync(path.join(CORE, 'src', m + '.js'), 'utf8'),
}));
src.push({ name: 'skins/procutaway',
           code: fs.readFileSync(path.join(CORE, 'skins', 'procutaway.js'), 'utf8') });

const parts = fs.readFileSync(path.join(CORE, 'catalogue', 'parts.json'), 'utf8');

global.window = {};
require(path.join(CORE, 'skins', 'procutaway.js'));
const PC = global.window.LPE.skins.procutaway;

const SCRIPTS = src.map(s =>
  '<script data-layer="' + s.name + '">\n' + s.code + '\n</script>').join('\n');

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>Pro Cutaway -- the inside of a bore</title>
<style>
  :root { --ground: ${PC.GROUND}; --panel: ${PC.PANEL}; --hair: ${PC.HAIRLINE};
          --ink: ${PC.INK}; --label: ${PC.LABEL}; --accent: ${PC.FLUID}; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--ground); color: var(--ink);
         font: 13px/1.5 ui-monospace, "Cascadia Mono", Consolas, monospace; }
  header { padding: 22px 28px 14px; border-bottom: 1px solid var(--hair); }
  h1 { margin: 0 0 4px; font-size: 15px; letter-spacing: .14em;
       text-transform: uppercase; font-weight: 600; }
  .sub { opacity: .62; font-size: 11.5px; max-width: 90ch; }
  main { padding: 18px 28px 60px; max-width: 1180px; }
  section { margin: 24px 0 0; }
  h2 { font-size: 11.5px; letter-spacing: .18em; text-transform: uppercase;
       margin: 0 0 3px; font-weight: 600; }
  h2 em { font-style: normal; opacity: .5; letter-spacing: .04em;
          text-transform: none; font-size: 11px; }
  .why { opacity: .6; font-size: 11.5px; margin: 0 0 9px; max-width: 80ch; }
  canvas { display: block; max-width: 100%; height: auto;
           background: var(--panel); border: 1px solid var(--hair); }
  .bar { display: flex; gap: 20px; align-items: center; flex-wrap: wrap;
         padding: 12px 14px; background: var(--panel);
         border: 1px solid var(--hair); margin: 14px 0 0;
         position: sticky; top: 0; z-index: 5; }
  input[type=range] { width: 260px; accent-color: var(--accent); }
  .num { font-variant-numeric: tabular-nums; }
  .num b { color: var(--accent); font-weight: 600; }
  .trio { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
  .trio figcaption { font-size: 10.5px; opacity: .6; padding-top: 4px; }
  #err { white-space: pre-wrap; color: ${PC.ENVELOPE}; padding: 20px 28px;
         font-size: 12px; }
  /* The dark view is a second palette, not an inversion -- the same
     decision the skin makes for the drawings. */
  body.dark { --ground: ${PC.DARK.ground}; --panel: ${PC.DARK.panel};
              --hair: ${PC.DARK.hairline}; --ink: ${PC.DARK.ink};
              --label: ${PC.DARK.label}; --accent: ${PC.DARK.fluid}; }
  body.dark canvas { border-color: ${PC.DARK.hairline}; }
  /* The close-up. Double-click the valve to open it; it draws on the
     same clock as the panel behind it, so the flow does not restart. */
  #zoom { position: fixed; inset: 0; z-index: 40; display: none;
          background: var(--ground); padding: 18px;
          flex-direction: column; align-items: center; justify-content: center; }
  #zoom.on { display: flex; }
  #zoom canvas { max-height: calc(100vh - 190px); width: auto; }
  #zoom .bar { width: 100%; max-width: 1180px; }
  #zoomhint { opacity: .55; font-size: 11px; padding-top: 10px; }
  #c4 { cursor: zoom-in; }
</style>
<div id="zoom">
  <canvas id="c4z" width="1760" height="980"></canvas>
  <div id="zoomhint">double-click or press Esc to close</div>
</div>
<header>
  <h1>Pro Cutaway</h1>
  <div class="sub">The inside of a bore, magnified until it can be looked at.
  Walls from the geometry layer at one scale; fluid from the flow-field layer,
  which is continuity along the path and a blended Prandtl / Poiseuille profile
  across it. The envelope is plotted from the <em>same</em> profile that carries
  the markers, so the two cannot disagree. Markers are not molecules.</div>
</header>
<div id="err"></div>
<main id="main" hidden>
  <div class="bar" id="bar-flow">
    <label>flow <input id="q" type="range" min="40" max="6000" value="3735"></label>
    <span class="num"><b id="qv">3735</b> gpm</span>
    <span class="num">velocity <b id="vv">--</b> ft/s</span>
    <span class="num">Re <b id="re">--</b></span>
    <span class="num"><b id="rg">--</b></span>
    <label><input id="mag" type="checkbox"> magnify 8x</label>
    <label><input id="dark" type="checkbox" checked> dark view</label>
  </div>

  <section>
    <h2>1 &middot; a straight run <em>NPS 10 Sch 40 &mdash; the profile and nothing else</em></h2>
    <p class="why">Bore 10.02 in, drawn to scale. The fluid drags on the wall, so
      the middle runs fast and the film against the bore barely moves. Every
      other view in this core draws this line as a line.</p>
    <canvas id="c1" width="1120" height="300"></canvas>
  </section>

  <section>
    <h2>2 &middot; through a fitting <em>NPS 1/2 socket-weld elbow &mdash; the bore changes</em></h2>
    <p class="why">The socket is 0.874 in and the running bore is 0.6535 in, so
      the fluid must speed up by the area ratio, 1.79&times;, and slow down again.
      Nobody told the drawing that &mdash; it is continuity against the
      catalogue&rsquo;s own dimensions. Note the square corner: through a
      socket-weld fitting the bore really does turn one.</p>
    <canvas id="c2" width="1120" height="340"></canvas>
  </section>

  <section>
    <h2>3 &middot; the valve <em>EWT NPS 10x8 equal-percentage &mdash; the fluid, solved</em></h2>
    <p class="why">A globe valve body is not a bore with a pinch in it. It
      is two chambers, stacked and offset, with the port as the only opening
      between them &mdash; which is measured, not assumed: the two chambers
      come back as two components that never touch. Every outline is read
      off <em>Figure 11-5 of the Oil &amp; Gas sourcebook</em>, and that figure is near enough to scale, so
      the casting, the chambers and the trim all place off one published
      dimension.
      <br><br>
      The fluid is <em>solved, not drawn</em>. Incompressible, irrotational,
      depth-averaged: velocity is the gradient of a potential, no flow
      crosses a wall, and the through-flow is pinned to the real volumetric
      flow at the flanges. Depth out of the page is set so every
      cross-section equals the area the catalogue gives &mdash; the window's
      from the derivative of the published Cv curve, the port's from the
      published port diameter &mdash; so the velocity ratios come back out
      as the valve's own. Flow is <em>Q = Cv&radic;(&Delta;P/sg)</em>,
      capped where ISA-75.01.01 says it chokes.
      <br><br>
      A particle here is <em>fluid, not flow</em>. They are seeded by area
      over the whole wetted cavity at one density and carried at whatever
      the field says &mdash; a sprint through the window, a drift in the
      corners, nothing at all in the drillings through the plug or the
      cavity over its head, which are full of liquid and carry none of it.
      That is what makes the plug balanced.
      <br><br>
      <em>Declared:</em> this is a plane cut through a three-dimensional
      casting, played at 1/50 speed. Being irrotational the solve can have
      no eddies at all, so the swirl in the slow corners is added on top at
      18% of the neighbouring stream and nothing else depends on it. The
      pressure minimum is not Bernoulli&rsquo;s &mdash; an inviscid field is
      singular at a sharp corner &mdash; it is the valve&rsquo;s published
      F<sub>L</sub>.</p>
    <canvas id="c4" width="1120" height="460"></canvas>
    <div class="bar" id="bar-valve" style="position:static">
      <label>travel <input id="tv" type="range" min="0" max="100" value="50"></label>
      <span class="num"><b id="tvv">50</b>%</span>
      <span class="num">open area <b id="oa">--</b>% of full</span>
      <span class="num">published Cv <b id="cvv">--</b>% of full</span>
      <span class="num">passing <b id="qpass">--</b> gpm</span>
      <label>&Delta;P <input id="dp" type="range" min="2" max="260"
        value="25" style="width:170px"></label>
      <span class="num"><b id="dpv">25</b> psi &mdash;
        P<sub>2</sub> <b id="p2v">--</b> psia</span>
      <span class="num" id="verdict">liquid throughout</span>
      <span class="num" style="opacity:.55">shown at 1/50 speed</span>
      <label>close-up
        <select id="zl">
          <option value="valve">whole valve</option>
          <option value="trim" selected>the trim</option>
          <option value="window">the window</option>
          <option value="packing">the packing</option>
        </select></label>
      <span class="num">window <b id="athroat">--</b> in&sup2;</span>
      <span class="num">through it <b id="vthroat">--</b> ft/s
        <span style="opacity:.6">vs line <b id="vline">--</b></span></span>
      <label><input id="flowup" type="checkbox"> flow up (noise trim)</label>
      <label><input id="unbal" type="checkbox"> unbalanced plug</label>
    </div>
  </section>

  <section>
    <h2>4 &middot; laminar, transition, turbulent <em>why the profile is blended</em></h2>
    <p class="why">The same line at three Reynolds numbers. Laminar is a sharp
      parabola with the centreline at exactly twice the mean; turbulent is blunt
      with the centreline at 60/49. Between them the flow is genuinely part one
      and part the other, so the profile blends rather than snapping &mdash;
      which is the honest plot as well as the readable one.</p>
    <div class="trio">
      <figure style="margin:0"><canvas id="c3a" width="360" height="300"></canvas>
        <figcaption id="cap-a"></figcaption></figure>
      <figure style="margin:0"><canvas id="c3b" width="360" height="300"></canvas>
        <figcaption id="cap-b"></figcaption></figure>
      <figure style="margin:0"><canvas id="c3c" width="360" height="300"></canvas>
        <figcaption id="cap-c"></figcaption></figure>
    </div>
  </section>
</main>

<script id="parts" type="application/json">${parts}</script>
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
  var FF = LPE.flowfield, PC = LPE.skins.procutaway, G = LPE.geometry;

  var NU = 1.27e-5;                 /* water near ambient, ft^2/s */
  var PIPE = CAT.part('PIPE/NPS10/S40');
  var fpPipe = G.flowPath(PIPE, { length: 150 });
  var fpElb  = G.flowPath(CAT.part('ELBOW90/SW3000/NPS0.5'));

  var planPipe = PC.plan(fpPipe, { width: 1120, height: 300 });
  var planElb  = PC.plan(fpElb,  { width: 1120, height: 340 });
  /* A SHORT run for the trio. The comparison is between PROFILES, and
     at 150 inches across a 360 px panel the bore comes out 20 px tall --
     the difference between a parabola peaking at 2.0 and a blunt curve
     peaking at 1.22 is then a few pixels of streak, which is the same
     reason LPE could not show laminar against turbulent at level scale.
     Thirty inches gives the bore room to be looked at. */
  var fpShort = G.flowPath(PIPE, { length: 30 });
  var planTrio = ['c3a','c3b','c3c'].map(function () {
    return PC.plan(fpShort, { width: 360, height: 300, pad: 22 });
  });

  var mPipe = PC.markers(150);
  var mElb  = PC.markers(110);
  var mTrio = [PC.markers(90), PC.markers(90), PC.markers(90)];
  var mValve = PC.markers(170);
  var zoomOn = false;
  /* The close-up's own markers, seeded only in the stretch of route
     it can see. Declared in the skin: the population of this set is a
     framing choice, the speed is still the field's. */
  var mDetail = PC.markers(300, undefined, [0, 1]);

  /* MAGNIFICATION IS OFF BY DEFAULT, AND THAT IS A FINDING.

     This page was first written with a 40x speedup, inherited from the
     doctrine that "a pipe running at a believable rate shows the eye
     nothing". That is true of the bench Lunar Process Engineer models --
     a grow bay at 2 gpm -- and false here. A 10-inch refinery line runs
     15 ft/s, which at cutaway scale crosses the frame in under a second
     unaided; 40x made every marker jump most of the run per tick.

     So the exaggeration a teaching bench needs is not the exaggeration
     an industrial line needs, and assuming otherwise was the consumer
     being treated as the reference again. Left as a toggle, at a factor
     that is useful for the slow end of the slider. */
  var WHY = 'at the low end of the flow range a 10-inch line creeps, and ' +
            'the profile is easier to read with the fluid moving';

  function fieldFor(fp, gpm, re) {
    var o = re === undefined ? { nu: NU } : { reynolds: re };
    var f = FF.field(fp, gpm, o);
    return document.getElementById('mag').checked
      ? FF.magnified(f, 8, WHY) : f;
  }

  var ctx = function (id) { return document.getElementById(id).getContext('2d'); };

  /* ---- the valve section ---- */
  var VALVE = CAT.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
  var BODY = CAT.part('BODY/GLOBE/FLANGED/NPS10/CL250RF-CL300RF');
  var WP = LPE.trim.fromCurve({ curve: VALVE.cv,
    characterisedBy: VALVE.characterisedBy }).widthProfile();

  function valveGeom() {
    return G.globeValve({
      part: VALVE,
      faceToFace: BODY.dims.faceToFace,
      lineBore: PIPE.dims.bore,
      flow: document.getElementById('flowup').checked ? 'up' : 'down',
      balanced: !document.getElementById('unbal').checked,
      widthProfile: WP.width,
    });
  }

  /* ---- WHAT THE CLOSE-UP IS LOOKING AT ------------------------------

     The first close-up framed an inch of cage wall at sixteen times
     the panel, which is too close to teach from: the window filled
     the frame with no cage around it and no chamber behind it, so
     there was nothing to tell you what you were looking at. A
     close-up for instruction needs the part AND enough of its
     neighbours to place it.

     Three levels, defaulting to the middle one. The whole valve for
     orientation, the trim for teaching -- cage, plug, seat, both
     windows and the port, which is where everything in this valve
     actually happens -- and the window itself for when the question
     is specifically about the throat. */
  function zoomLevel() {
    var el = document.getElementById('zl');
    return el ? el.value : 'trim';
  }
  function zoomSpan() {
    var gv = valveGeom();
    switch (zoomLevel()) {
      case 'valve':  return gv.faceToFace * 1.04;
      case 'window': return Math.max(gv.travel * 3.0, gv.port * 1.1);
      /* The packing box plus the bore under it, so the flooded column
         the packing is sealing is in frame with the thing sealing it.
         Showing the stack alone would be showing a part without its
         reason. */
      case 'packing': {
        var pb = gv.packingBox && gv.packingBox();
        if (!pb) return gv.cage.outerR * 2;
        return (pb.to - gv.cage.y1) * 1.5;
      }
      /* The trim means ALL of it. At 2.9 cage radii the frame cut
         the port off the bottom, so the one view meant for teaching
         was missing the hole the fluid actually leaves through. Wide
         enough now for the seat and the port below and the bonnet
         joint above. */
      default:       return gv.cage.outerR * 3.6;
    }
  }
  function zoomCentre(gv, r, pl) {
    var t = +document.getElementById('tv').value;
    if (zoomLevel() === 'valve') return [0, gv.cage.y1 * 0.26];
    if (zoomLevel() === 'packing') {
      var pbx = gv.packingBox && gv.packingBox();
      return [0, pbx ? (pbx.to + gv.cage.y1) / 2 : gv.cage.y1];
    }
    if (zoomLevel() === 'window') {
      var fp = gv.flowPathAt(t);
      var th = fp.stations[fp.throat];
      /* Biased toward the side the fluid comes from: dead-centred on
         the throat, half the frame is plug, which is solid metal
         with nothing happening in it. */
      var side = th.x < 0 ? -1 : 1;
      return [th.x + side * zoomSpan() * 0.14, th.y];
    }
    /* The trim: centred between the port and the top of the cage, so
       the seat is in frame at the bottom and the bonnet joint at the
       top. */
    return [0, gv.cage.y1 * 0.44];
  }

  /* ---- the valve, on a solved field ---------------------------------

     The field is solved, not stepped: it depends on the travel, the
     flow direction and the flow rate, and on nothing that changes
     frame to frame. Re-solving sixty times a second would be sixty
     times the work for the same answer. The PARTICLES move every
     frame, through a field that is only recomputed when one of the
     three things it depends on moves. */
  /* ---- the service -------------------------------------------------

     Liquid propane, transcribed from the worked example in the
     Control Valve Handbook 6th edition, chapter 5, pages 114-115 --
     the same service the sizing layer is graded against. It is used
     here because cavitation needs a VAPOUR PRESSURE, and a vapour
     pressure is a property of a named fluid at a named temperature,
     not something to be picked to make a picture interesting.

     The pressure drop is the one thing left to the reader, because
     it is the operating condition rather than a property of anything:
     the same valve on the same fluid cavitates or does not depending
     entirely on how hard it is being asked to work. */
  var SERVICE = { name: 'liquid propane', sg: 0.50, Pv: 124.3,
                  Pc: 616.3, P1: 314.7,
                  source: 'Control Valve Handbook 6th ed., ch5 pp.114-115' };
  var CELL = 0.34;
  var fieldCache = null, fieldKey = '';
  var fluid = null;

  function valveField(gv, pct, gpm) {
    var key = gv.flow + '|' + pct.toFixed(1) + '|' + gpm.toFixed(1);
    if (key === fieldKey && fieldCache) return fieldCache;
    var wet = gv.wettedAt(pct, { minGap: CELL * 1.8 });
    var f = FF.solveField2D({
      rings: wet.rings, throatRings: wet.throatRings,
      stillRings: wet.stillRings, openings: wet.openings,
      stations: gv.flowPathAt(pct).stations, gpm: gpm, cellIn: CELL,
      plenum: wet.plenum, circuits: [wet.balance] });
    fieldCache = { field: f, wetted: wet, swirl: FF.withRecirculation(f) };
    fieldKey = key;
    /* The particle set is tied to the cavity it was seeded in, so it
       is rebuilt when the cavity moves -- but only then, or the water
       would teleport every time the slider twitched. */
    if (!fluid || fluid.length === 0) fluid = PC.fluidParticles(f, 1800);
    fluid.reseed = PC.fluidParticles(f, 1).reseed;
    return fieldCache;
  }

  function drawValve(dt, gpmFull) {
    var gv = valveGeom();
    var t = +document.getElementById('tv').value;
    var dark = document.getElementById('dark').checked;

    /* WHAT THE VALVE PASSES, FROM THE SIZING EQUATION.

       Q = Cv * sqrt(dP / sg), capped where the valve chokes -- both
       straight out of ISA-75.01.01, which the sizing layer already
       implements and is graded against a printed answer. The reader
       sets the pressure drop; the travel sets Cv; the flow follows.
       Shut, Cv is zero and so is the flow, and the water stops
       without going anywhere. */
    var openFrac = gv.openAreaAt(t) / gv.openAreaAt(100);
    var cv = VALVE.cv[VALVE.cv.length - 1] * openFrac;
    var dP = +document.getElementById('dp').value;
    var P2 = SERVICE.P1 - dP;
    var choke = LPE.sizing.sizeLiquid(
      { q: 1, P1: SERVICE.P1, P2: P2, sg: SERVICE.sg,
        Pv: SERVICE.Pv, Pc: SERVICE.Pc },
      { Cv: Math.max(cv, 1e-6), FL: VALVE.FL, d: VALVE.dims.port }, 10.02);
    var dPeff = Math.min(dP, choke.dPchoked);
    var gpm = cv * Math.sqrt(dPeff / SERVICE.sg);

    var fc = valveField(gv, t, gpm);
    /* The eddies go on here, after the solve and before anything
       moves: potential flow cannot produce them, so they are added
       and the field says so in its own declared note. */
    var moving = fc.swirl;
    /* Slowed so the throat can be watched. Chosen so the fluid in
       the LINE crosses the picture in a few seconds, which puts the
       window -- twenty to forty times faster -- at a speed the eye
       can still follow. Printed under the panel, because an
       unlabelled slow motion is a lie about velocity. */
    var SLOWMO = 0.02;
    PC.stepFluid(fluid, moving, dt, { timeScale: SLOWMO });
    var press = gpm > 0 && !fc.field.shut
      ? FF.pressureOver(fc.field, { P1: SERVICE.P1, P2: P2, Pv: SERVICE.Pv,
                                    sg: SERVICE.sg, FL: VALVE.FL })
      : null;

    var pl = PC.planValve(gv, { width: 1120, height: 460 });
    var r = null;
    PC.drawValve(ctx('c4'), pl, {
      width: 1120, height: 460, travel: t,
      theme: dark ? PC.DARK : undefined,
      ground: dark ? PC.DARK.ground : undefined,
      title: 'Fisher EWT NPS 10x8 equal-percentage, flow ' + gv.flow +
             (gv.balanced ? ', balanced plug' : ', unbalanced plug'),
      /* Between the cavity and the metal, so the trim occludes it. */
      onFluid: function (gg) {
        r = PC.drawValveFlow(gg, pl, fc.field, fluid, {
          theme: dark ? PC.DARK : undefined, wetted: fc.wetted,
          pressure: press });
      },
    });
    PC.drawBalance(ctx('c4'), pl, t, { theme: dark ? PC.DARK : undefined,
                                       parts: fluid });
    /* The packing, in the bore it sits in. After the trim because it
       is above it, and after the fluid because the entire point of
       the part is that the fluid stops here. */
    PC.drawPacking(ctx('c4'), pl, { theme: dark ? PC.DARK : undefined });
    if (r && r.fastestAt && !r.shut)
      PC.markThroat(ctx('c4'), r, { theme: dark ? PC.DARK : undefined });

    document.getElementById('tvv').textContent = t;
    document.getElementById('oa').textContent = (100 * openFrac).toFixed(1);
    var cvPct = (function () {
      var xs = VALVE.cvAtPct, ys = VALVE.cv, rated = ys[ys.length - 1];
      if (t <= 0) return 0;
      if (t >= xs[xs.length - 1]) return 100;
      var x0 = 0, y0 = 0;
      for (var k = 0; k < xs.length; k++) {
        if (t <= xs[k]) {
          var f2 = (t - x0) / (xs[k] - x0);
          return 100 * (y0 + (ys[k] - y0) * f2) / rated;
        }
        x0 = xs[k]; y0 = ys[k];
      }
      return 100;
    })();
    document.getElementById('cvv').textContent = cvPct.toFixed(1);
    document.getElementById('qpass').textContent = Math.round(gpm);
    document.getElementById('athroat').textContent =
      gv.openAreaAt(t).toFixed(2);
    /* THE CONSERVED NUMBER, not the field's peak. Q over the window
       area is continuity and is the figure an engineer would check;
       the field's maximum is a point sample of a jet and sits three
       or four times above it. The jet is worth drawing and the mean
       is worth printing. */
    var aWin = gv.openAreaAt(t);
    var vWin = aWin > 0 && gpm > 0
      ? (gpm * 0.0022280 * 1728 / aWin) / 12 : 0;
    document.getElementById('vthroat').textContent = vWin.toFixed(0);
    var vl = fc.field.speedAt(-gv.faceToFace / 2 + 0.6, 0);
    document.getElementById('vline').textContent =
      vl === null ? '0' : vl.toFixed(1);
    document.getElementById('dpv').textContent = dP;
    document.getElementById('p2v').textContent = P2.toFixed(1);
    document.getElementById('verdict').textContent = press
      ? (press.flashing ? 'FLASHING -- outlet below vapour pressure'
        : press.cavitating
          ? 'CAVITATING -- vena contracta ' +
            press.venaContracta.toFixed(0) + ' psia, below ' +
            SERVICE.Pv + ' psia vapour'
          : 'liquid throughout -- vena contracta ' +
            press.venaContracta.toFixed(0) + ' psia')
      : 'shut';

    /* ---- the close-up ---- */
    if (zoomOn) {
      var zc = document.getElementById('c4z');
      var span = zoomSpan();
      var cxy = zoomCentre(gv, r, pl);
      var zpl = PC.planValveDetail(gv, {
        width: zc.width, height: zc.height, at: cxy, spanIn: span });
      var zg = zc.getContext('2d');
      var zr = null;
      PC.drawValve(zg, zpl, {
        width: zc.width, height: zc.height, travel: t,
        theme: dark ? PC.DARK : undefined,
        ground: dark ? PC.DARK.ground : undefined,
        title: 'Fisher EWT NPS 10x8 -- ' + span.toFixed(1) +
               ' in across, ' + (zpl.scale / pl.scale).toFixed(1) +
               'x the panel',
        onFluid: function (gg) {
          /* The SAME water, at the larger scale. Stepped once per
             frame above; stepping it again here would run the
             close-up at double speed and quietly disagree with the
             picture it is a close-up of. */
          zr = PC.drawValveFlow(gg, zpl, fc.field, fluid, {
            theme: dark ? PC.DARK : undefined, wetted: fc.wetted,
            pressure: press });
        },
      });
      PC.drawBalance(zg, zpl, t, { theme: dark ? PC.DARK : undefined,
                                   parts: fluid });
      PC.drawPacking(zg, zpl, { theme: dark ? PC.DARK : undefined });
      if (zr && zr.fastestAt && !zr.shut)
        PC.markThroat(zg, zr, { theme: dark ? PC.DARK : undefined,
                                radius: 9 * (zpl.scale / pl.scale) * 0.4 });
    }
  }

  document.getElementById('dark').addEventListener('change', function () {
    document.body.classList.toggle('dark', this.checked);
  });
  document.body.classList.toggle('dark',
    document.getElementById('dark').checked);
  var slider = document.getElementById('q');
  var t0 = (window.performance || Date).now(), last = t0;

  /* The trio is pinned to three Reynolds numbers rather than to the
     slider, because the whole point is the comparison. */
  var TRIO = [
    { re: 900,   label: 'Re 900 -- laminar. Centreline exactly 2x the mean.' },
    { re: 3150,  label: 'Re 3150 -- mid-transition. Half one, half the other.' },
    { re: 60000, label: 'Re 60000 -- turbulent. Centreline 60/49 = 1.22x.' },
  ];
  TRIO.forEach(function (t, i) {
    document.getElementById(['cap-a','cap-b','cap-c'][i]).textContent = t.label;
  });

  function frame() {
    var dark = document.getElementById('dark').checked;
    var TH = dark ? PC.DARK : undefined;
    var GR = dark ? PC.DARK.ground : undefined;
    var now = (window.performance || Date).now();
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    var gpm = +slider.value;

    try {
      var fPipe = fieldFor(fpPipe, gpm);
      var fElb  = fieldFor(fpElb, Math.max(1, gpm / 400));

      document.getElementById('qv').textContent = gpm;
      var v = fPipe.magnification ? fPipe.trueField.mean(60) : fPipe.mean(60);
      document.getElementById('vv').textContent = v.toFixed(1);
      var st = (fPipe.magnification ? fPipe.trueField : fPipe).stations;
      var re = st[Math.floor(st.length / 2)].Re;
      document.getElementById('re').textContent = Math.round(re).toLocaleString();
      var turb = FF.turbulence(re);
      document.getElementById('rg').textContent =
        turb === 0 ? 'laminar' : turb === 1 ? 'turbulent'
                   : 'transition ' + (100 * turb).toFixed(0) + '%';

      PC.step(mPipe, fPipe, planPipe, dt, { mix: 0.5 });
      PC.draw(ctx('c1'), planPipe, fPipe, {
        width: 1120, height: 300, markers: mPipe,
        fullSpeed: Math.max(1, fPipe.mean(60) * 1.2), theme: TH, ground: GR,
        title: 'NPS 10 Sch 40, bore ' + PIPE.dims.bore + ' in, at ' + gpm + ' gpm',
      });

      PC.step(mElb, fElb, planElb, dt, { mix: 0.5 });
      PC.draw(ctx('c2'), planElb, fElb, {
        width: 1120, height: 340, markers: mElb,
        fullSpeed: Math.max(1, fElb.mean(1.0) * 1.1),
        /* Exposure time, like a camera shutter: length is still
           proportional to speed WITHIN a panel, but a 2-inch fitting
           cannot carry the same exposure as a 12-foot run. */
        streak: 0.0025, theme: TH, ground: GR,
        title: 'NPS 1/2 socket-weld elbow -- socket 0.874 in, bore 0.6535 in',
      });

      drawValve(dt, gpm);

      TRIO.forEach(function (t, i) {
        var f = fieldFor(fpShort, gpm, t.re);
        PC.step(mTrio[i], f, planTrio[i], dt, { mix: 0.5 });
        PC.draw(ctx(['c3a','c3b','c3c'][i]), planTrio[i], f, {
          width: 360, height: 300, markers: mTrio[i],
          fullSpeed: Math.max(1, f.mean(60) * 1.2),
          caption: false, features: false, envelopeAt: 1,
          envelopeReach: 0.3, streak: 0.012, theme: TH, ground: GR,
        });
      });
    } catch (e) { die(e); return; }
    requestAnimationFrame(frame);
  }

  /* Double-click the valve to open the close-up. It is the same draw
     at a larger scale rather than a magnified bitmap, so the hairlines
     stay hairlines and the text stays readable. */
  (function () {
    var z = document.getElementById('zoom');

    /* THE CONTROLS COME WITH IT.

       A close-up you cannot drive is a screenshot. The bars are
       MOVED into the overlay rather than copied, because two sets of
       the same slider is two sets of state to keep in step and they
       will not stay in step. Moving the live elements keeps every
       listener and every value attached to the one control that
       exists. Their original places are remembered so they go back
       exactly where they were. */
    var bars = ['bar-flow', 'bar-valve'].map(function (id) {
      var el = document.getElementById(id);
      return { el: el, parent: el.parentNode, next: el.nextSibling };
    });

    var toggle = function (on) {
      zoomOn = on;
      z.classList.toggle('on', on);
      if (on) bars.forEach(function (b) { z.appendChild(b.el); });
      else bars.forEach(function (b) {
        b.parent.insertBefore(b.el, b.next);
      });
      /* The hint belongs under whatever is last. */
      z.appendChild(document.getElementById('zoomhint'));
    };
    document.getElementById('c4').addEventListener('dblclick',
      function () { toggle(true); });
    /* Changing the close-up level must not close it. */
    var zl = document.getElementById('zl');
    if (zl) zl.addEventListener('dblclick', function (e) {
      e.stopPropagation(); });
    z.addEventListener('dblclick', function () { toggle(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && zoomOn) toggle(false);
    });
  })();

  document.getElementById('main').hidden = false;
  /* The valve panel redraws inside frame() now, because its markers
     have to advance on the same clock as everything else. The checkbox
     listeners are gone with it -- there is nothing left for them to
     trigger that the next frame does not do anyway. */
  frame();                       /* draw once synchronously, then animate */
  }
})();
</script>
`;

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), PAGE.replace(/\r\n/g, '\n'), 'utf8');
console.log('wrote lab/cutaway/index.html  (' + (PAGE.length / 1024).toFixed(0) +
            ' KB, ' + src.length + ' layers inlined, self-contained)');
