/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   FV-101 as a whole control valve assembly, with the fluid solved.
   Run: node lab/render-assembly.js                                   */
'use strict';

const fs = require('fs');
const path = require('path');

const SRC = ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
             'actuator', 'assembly', 'topology', 'schemvis', 'physvis',
             'dynamics', 'flowfield']
  .map(m => fs.readFileSync(
    path.join(__dirname, '..', 'src', m + '.js'), 'utf8'));
const SKIN = fs.readFileSync(
  path.join(__dirname, '..', 'skins', 'procutaway.js'), 'utf8');
const PARTS = fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8');
const FIG = fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'actuator-657-figure6.json'),
  'utf8');

global.window = {};
require(path.join(__dirname, '..', 'skins', 'procutaway.js'));
const PC = global.window.LPE.skins.procutaway;
const D = PC.DARK;

const OUT = path.join(__dirname, 'assembly');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>FV-101 -- the whole control valve</title>
<style>
  :root { --ground:${D.ground}; --panel:${D.panel}; --hair:${D.hairline};
          --ink:${D.ink}; --label:${D.label}; --accent:${D.fluidFast}; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--ground); color:var(--ink);
         font:13px/1.5 ui-monospace,"Cascadia Mono",Consolas,monospace; }
  header { padding:22px 28px 14px; border-bottom:1px solid var(--hair); }
  h1 { margin:0 0 4px; font-size:15px; letter-spacing:.14em;
       text-transform:uppercase; font-weight:600; }
  .sub { opacity:.62; font-size:11.5px; max-width:94ch; }
  main { padding:18px 28px 60px; max-width:1180px; }
  canvas { display:block; max-width:100%; height:auto;
           background:var(--panel); border:1px solid var(--hair); }
  .bar { display:flex; gap:20px; align-items:center; flex-wrap:wrap;
         padding:12px 14px; background:var(--panel);
         border:1px solid var(--hair); margin:14px 0 0; }
  input[type=range] { width:240px; accent-color:var(--accent); }
  .num { font-variant-numeric:tabular-nums; }
  .num b { color:var(--accent); font-weight:600; }
  .why { opacity:.6; font-size:11.5px; max-width:86ch; margin:0 0 10px; }
  #err { white-space:pre-wrap; color:${D.envelope}; padding:20px 28px; }
</style>
<header>
  <h1>FV-101 &mdash; the whole control valve</h1>
  <div class="sub">A Fisher 657 size 45 on an ED NPS 4, with the
    fluid solved underneath it. The two were checked against their
    published mounting numbers before either was drawn &mdash; travel,
    stem diameter and yoke boss &mdash; so this is one machine rather
    than two pictures stacked up.</div>
</header>
<div id="err" hidden></div>
<main id="main" hidden>
  <p class="why">The actuator's origin is the bottom face of its yoke;
    the valve's is the top of its bonnet. Mounting one on the other is
    a single translation, which is the whole reason each layer was
    given an origin somebody chose on purpose. The spring extends as
    the valve opens &mdash; air above the diaphragm is what closes it.</p>
  <canvas id="c" width="1120" height="760"></canvas>
  <div class="bar">
    <label>travel <input id="tv" type="range" min="0" max="100"
      value="75"></label>
    <span class="num"><b id="tvv">75</b>%</span>
    <span class="num">passing <b id="q">--</b> gpm</span>
    <span class="num">window <b id="aw">--</b> in&sup2;</span>
    <span class="num">through it <b id="vw">--</b> ft/s</span>
    <span class="num" style="opacity:.55">shown at 1/50 speed</span>
  </div>
  <div class="bar" id="said" style="display:block;font-size:11.5px;
       opacity:.72;white-space:pre-wrap;line-height:1.6"></div>
</main>
<script>${SRC.join('\n')}</script>
<script>${SKIN}</script>
<script>
(function () {
  const LPE = window.LPE, PC = LPE.skins.procutaway;
  const die = e => { const d = document.getElementById('err');
    d.hidden = false;
    d.textContent = 'This page failed, which means a layer failed:\\n\\n' +
      (e && e.stack || e); };
  try { build(); } catch (e) { die(e); }

  function build() {
    const CAT = LPE.catalogue.load(${PARTS});
    const FIG = ${FIG};
    const VALVE = CAT.part('VALVE/ED/NPS4/P4.375/T2/EQPCT');
    const BODY = CAT.part('BODY/GLOBE/FLANGED/NPS4/CL250RF-CL300RF');
    const ACT = CAT.part('ACTUATOR/657/SIZE45');
    const WP = LPE.trim.fromCurve({ curve: VALVE.cv,
      characterisedBy: VALVE.characterisedBy }).widthProfile();

    /* The joint, before the drawing. */
    const ASM = LPE.assembly.assemble({ valve: VALVE, actuator: ACT,
      tag: 'FV-101', catalogue: CAT,
      service: { dP: 15, packingType: 'ptfe' } });

    const VALVE_BORE = CAT.part('PIPE/NPS4/S40').dims.bore;
    const SVC = { sg: 1.0, q100: 826.4 };   /* design 560 gpm at 68% Cv */
    const CELL = 0.14;
    const SLOWMO = 0.02;
    let fluid = null, cache = null, key = '';

    function geom() {
      return LPE.geometry.globeValve({ part: VALVE,
        faceToFace: BODY.dims.faceToFace, lineBore: VALVE_BORE,
        flow: 'down', widthProfile: WP.width });
    }
    function field(gv, pct, gpm) {
      const k = pct.toFixed(1) + '|' + gpm.toFixed(1);
      if (k === key && cache) return cache;
      const wet = gv.wettedAt(pct, { minGap: CELL * 1.8 });
      const f = LPE.flowfield.solveField2D({
        rings: wet.rings, throatRings: wet.throatRings,
        stillRings: wet.stillRings, openings: wet.openings,
        stations: gv.flowPathAt(pct).stations, gpm: gpm, cellIn: CELL,
        plenum: wet.plenum });
      cache = { field: f, wetted: wet,
                swirl: LPE.flowfield.withRecirculation(f) };
      key = k;
      if (!fluid) fluid = PC.fluidParticles(f, 1400);
      fluid.reseed = PC.fluidParticles(f, 1).reseed;
      return cache;
    }

    const c = document.getElementById('c');
    const g = c.getContext('2d');
    let last = (window.performance || Date).now();

    function frame() {
      try { paint(); } catch (e) { die(e); return; }
      requestAnimationFrame(frame);
    }
    function paint() {
      const now = (window.performance || Date).now();
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      const t = +document.getElementById('tv').value;
      const gv = geom();
      const open = gv.openAreaAt(t) / gv.openAreaAt(100);
      const gpm = SVC.q100 * open;
      const fc = field(gv, t, gpm);
      PC.stepFluid(fluid, fc.swirl, dt, { timeScale: SLOWMO });

      const act = LPE.actuator.diaphragm({ part: ACT, figure: FIG,
        travelPct: t, ratedTravel: VALVE.dims.travel });
      const mp = gv.mountPoint();

      /* ONE FRAME FOR BOTH. The plan is built to hold the valve AND
         the actuator standing on it, so they share a scale -- which
         is the only way a picture of an assembly is not a lie about
         proportion. */
      const span = { x0: Math.min(gv.extent.x0, act.extent.x0) - 1,
                     x1: Math.max(gv.extent.x1, act.extent.x1) + 1,
                     y0: gv.extent.y0 - 1,
                     y1: mp.y + act.extent.y1 + 1 };
      const pad = 30;
      const k = Math.min((c.width - 2 * pad) / (span.x1 - span.x0),
                         (c.height - 2 * pad) / (span.y1 - span.y0));
      const ox = pad + (c.width - 2 * pad - (span.x1 - span.x0) * k) / 2
                 - span.x0 * k;
      const oy = pad + (c.height - 2 * pad - (span.y1 - span.y0) * k) / 2
                 + span.y1 * k;
      const pl = Object.freeze({ valve: gv, scale: k, ox: ox, oy: oy,
        toPage: (x, y) => [ox + x * k, oy - y * k] });

      g.fillStyle = '${D.panel}';
      g.fillRect(0, 0, c.width, c.height);

      let r = null;
      PC.drawValve(g, pl, { width: c.width, height: c.height, travel: t,
        theme: PC.DARK, ground: null, labels: false,
        title: 'FV-101  Fisher ED NPS 4 equal-percentage on a 657 size '
             + ACT.size,
        onFluid: gg => { r = PC.drawValveFlow(gg, pl, fc.field, fluid,
          { theme: PC.DARK, wetted: fc.wetted }); },
      });
      PC.drawBalance(g, pl, t, { theme: PC.DARK, parts: fluid });
      PC.drawPacking(g, pl, { theme: PC.DARK });
      PC.drawActuator(g, pl, act, { theme: PC.DARK, at: mp });

      document.getElementById('tvv').textContent = t;
      document.getElementById('q').textContent = Math.round(gpm);
      document.getElementById('aw').textContent =
        gv.openAreaAt(t).toFixed(2);
      const aw = gv.openAreaAt(t);
      document.getElementById('vw').textContent = aw > 0 && gpm > 0
        ? ((gpm * 0.0022280 * 1728 / aw) / 12).toFixed(0) : '0';
    }

    document.getElementById('said').textContent =
      ASM.checks.map(x => (x.ok ? 'ok  ' : 'FAIL ') + x.name + ': ' +
        x.said).join('\\n') +
      '\\n\\n' + gv0().archetypeNote;
    function gv0() { return geom(); }

    document.getElementById('main').hidden = false;
    frame();
  }
})();
</script>
`;

fs.writeFileSync(path.join(OUT, 'index.html'),
                 PAGE.replace(/\r\n/g, '\n'), 'utf8');
console.log('\nwrote lab/assembly/index.html  --  serve it over HTTP\n');
