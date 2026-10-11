/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   FIC-101 on one screen, from the loop down to the throat.
   Run: node lab/render-fic101.js                                     */
'use strict';

const fs = require('fs');
const path = require('path');
const LOOP = require('./loop-cooling.js');

const SRC = ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
             'actuator', 'assembly', 'topology', 'schemvis', 'physvis',
             'dynamics', 'flowfield']
  .map(m => fs.readFileSync(
    path.join(__dirname, '..', 'src', m + '.js'), 'utf8'));
const SKINS = ['procutaway', 'depth']
  .map(m => fs.readFileSync(
    path.join(__dirname, '..', 'skins', m + '.js'), 'utf8'));
const PARTS = fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8');
const FIG = fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'actuator-657-figure6.json'),
  'utf8');

/* The palette is a fact about the skin, so the page's CSS reads it off
   the skin rather than restating it. */
global.window = {};
require(path.join(__dirname, '..', 'skins', 'procutaway.js'));
const PC = global.window.LPE.skins.procutaway;
const D = PC.DARK;

const OUT = path.join(__dirname, 'fic101');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>FIC-101 -- loop to throat</title>
<style>
  :root { --ground:${D.ground}; --panel:${D.panel}; --hair:${D.hairline};
          --ink:${D.ink}; --label:${D.label}; --accent:${D.fluidFast}; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--ground); color:var(--ink);
         font:13px/1.5 ui-monospace,"Cascadia Mono",Consolas,monospace; }
  header { padding:20px 28px 12px; border-bottom:1px solid var(--hair); }
  h1 { margin:0 0 4px; font-size:15px; letter-spacing:.14em;
       text-transform:uppercase; font-weight:600; }
  .sub { opacity:.62; font-size:11.5px; max-width:94ch; }
  main { padding:16px 28px 60px; max-width:1180px; }
  canvas { display:block; max-width:100%; height:auto;
           background:var(--panel); border:1px solid var(--hair);
           cursor:zoom-in; }
  .bar { display:flex; gap:18px; align-items:center; flex-wrap:wrap;
         padding:11px 14px; background:var(--panel);
         border:1px solid var(--hair); margin:12px 0 0; }
  input[type=range] { width:210px; accent-color:var(--accent); }
  .num { font-variant-numeric:tabular-nums; }
  .num b { color:var(--accent); font-weight:600; }
  .crumbs { display:flex; gap:6px; align-items:center; flex-wrap:wrap;
            margin:0 0 10px; font-size:11.5px; }
  .crumb { padding:3px 10px; border:1px solid var(--hair);
           border-radius:2px; background:var(--panel); cursor:pointer;
           color:var(--label); }
  .crumb.on { color:var(--ink); border-color:var(--accent); }
  .crumb[disabled] { opacity:.35; cursor:default; }
  .shows { opacity:.55; font-size:11.5px; margin:0 0 8px; }
  #sig { white-space:pre-wrap; line-height:1.7; opacity:.8; }
  .prov { opacity:.58; font-size:11px; line-height:1.65; margin:12px 0 0;
          padding:11px 14px; background:var(--panel);
          border:1px solid var(--hair); white-space:pre-wrap; }
  #err { white-space:pre-wrap; color:${D.envelope}; padding:20px 28px; }
</style>
<header>
  <h1>FIC-101 &mdash; loop to throat</h1>
  <div class="sub">One model, five depths. Click the control valve on
    the loop to open it; click again to go further in. Everything you
    see at every depth is the same netlist, the same catalogue rows and
    the same solved field &mdash; Pro Cutaway is not a separate view, it
    is the fluid turned on, and it is available from the assembly
    inward.</div>
</header>
<div id="err" hidden></div>
<main id="main" hidden>
  <div class="crumbs" id="crumbs"></div>
  <div class="shows" id="shows"></div>
  <canvas id="c" width="1120" height="640"></canvas>
  <div class="bar">
    <!-- 8 mA is the design point: a quarter of the signal span, and
         on an air-to-close valve a quarter of the span is three
         quarters open, which is where the sizing put it. -->
    <label>FIC-101 out <input id="ma" type="range" min="3" max="23"
      step="0.1" value="8"></label>
    <span class="num"><b id="mav">8.0</b> mA</span>
    <span class="num">travel <b id="tvv">75</b>%</span>
    <span class="num">passing <b id="q">--</b> gpm</span>
    <span class="num">window <b id="aw">--</b> in&sup2;</span>
    <span class="num">through it <b id="vw">--</b> ft/s</span>
    <span class="num" style="opacity:.55" id="slow"></span>
  </div>
  <div class="bar" id="sig" style="display:block;font-size:11.5px"></div>
  <div class="prov" id="prov"></div>
</main>
<script>${SRC.join('\n')}</script>
<script>${SKINS.join('\n')}</script>
<script>
(function () {
  const LPE = window.LPE, PC = LPE.skins.procutaway, DEPTH = LPE.depth;
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
    const spec = ${JSON.stringify(LOOP.spec)};
    const INSTR = ${JSON.stringify(LOOP.INSTR)};
    const SIGNALS = ${JSON.stringify(LOOP.SIGNALS)};
    const net = LPE.net(spec, { frame: 'rig', catalogue: CAT });
    if (net.errors.length) throw new Error(net.errors.join('\\n'));

    /* The joint, checked once, before any of this is drawn. */
    const ASM = LPE.assembly.assemble({ valve: VALVE, actuator: ACT,
      tag: 'FV-101', catalogue: CAT,
      service: { dP: 15, packingType: 'ptfe' },
      positioner: 'Fisher DVC6200, HART' });
    /* WHICH WAY THE AIR MOVES IT, declared rather than assumed. The
       657 is direct-acting -- air above the diaphragm drives the stem
       DOWN -- and this plug shuts downward, so pressure closes it and
       the spring opens it. Twenty milliamps is therefore SHUT, which
       surprises people and is exactly why the assembly layer refuses
       to guess the action. */
    const ACTION = 'air-to-close';
    /* What the PLANT rungs rest on. Three published numbers out of
       two tables, agreeing -- which is the only reason there is an
       assembly to click into at all. */
    const LOOP_PROV = ASM.checks
      .map(x => (x.ok ? 'ok   ' : 'FAIL ') + x.name + ': ' + x.said)
      .concat(['bore 2.067 in is NPS 2 Sch 40, ASME B36.10M; the ' +
               'symbols are ISA-5.1 and the bubbles say field or panel',
               'a signal is not a pipe, so FE/FT/FIC are declared over ' +
               'the netlist rather than connected inside it'])
      .join('\\n');
    /* AND WHAT THE LINE RUNG CANNOT HONOUR. The frame declares
       2.4 px/in and draws a 2.067 in bore ten pixels across, which is
       about twice the length scale -- the bore exaggeration the
       geometry layer was built because of. Saying it here is cheaper
       and more honest than quietly picking one of the two and letting
       a reader measure the drawing. */
    const LINE_PROV = LOOP_PROV + '\\n' +
      'this frame exaggerates bore against run length by about 2x; ' +
      'the valve is drawn at the BORE scale so it and the pipe agree, ' +
      'and the to-scale answer is one rung in';

    /* The valve's OWN end bore. This is an NPS 4 valve in an NPS 6
       line: the flange a reader sees is the valve's, and the
       reducers make up the difference. Passing the LINE bore drew
       the valve wearing the next size up's ends. */
    const VALVE_BORE = CAT.part('PIPE/NPS4/S40').dims.bore;
    const PIPE = CAT.part('PIPE/NPS6/S40');   /* the run it sits in */
    const Q100 = 826.4, CELL = 0.14, SLOWMO = 0.02;
    /* ONE BODY OF WATER, AT EVERY RUNG. The population is a property
       of the fluid, so it does not change when the view does -- what
       changes is how big a parcel is DRAWN, and the skin does that
       because it is the one that knows the scale. Scaling the count
       instead reseeds the water on every zoom and, at the throat,
       asked for fifty thousand particles. */
    const PARTS = 1400;
    let at = 'loop', schemPlan = null, fit = null;
    let fluid = null, fluidN = 0, cache = null, key = '';

    const c = document.getElementById('c');
    const g = c.getContext('2d');
    const THEME = { line: '${D.label}', symbol: '${D.ink}',
      fill: '${D.fluidFast}', label: '${D.label}', ground: '${D.panel}',
      gap: '${D.panel}', lineWidth: 2, symbolWidth: 1.6,
      labelFont: '11px ui-monospace, Consolas, monospace' };
    /* phys-view's four roles. The 'dark' one is the BORE, so at this rung it is
       the fluid colour: a line full of water, drawn at its real bore,
       is what the rung is for. */
    const PIPE_T = { body: '${D.metal}', rim: '${D.rim}',
                     light: '${D.trim}', dark: '${D.fluid}' };

    /* ---- one frame, two plant views ----
       Both plant rungs are laid out in the netlist's own rig frame, so
       both are fitted to the canvas the same way -- and the fit is kept
       because a click arrives in canvas pixels and the plan is not in
       them. Drawing a loop at whatever size the layout happened to be
       authored at is how a diagram ends up in the top-left corner of a
       canvas with a field of empty below it. */
    function fitInto(bb, pad) {
      const w = bb.x1 - bb.x0, h = bb.y1 - bb.y0;
      const k = Math.min((c.width - 2 * pad) / w, (c.height - 2 * pad) / h);
      return { k: k,
        dx: (c.width - w * k) / 2 - bb.x0 * k,
        dy: (c.height - h * k) / 2 - bb.y0 * k };
    }
    function boundsOfPiping(pp) {
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      const see = (x, y, r) => {
        r = r || 0;
        if (x - r < x0) x0 = x - r; if (x + r > x1) x1 = x + r;
        if (y - r < y0) y0 = y - r; if (y + r > y1) y1 = y + r;
      };
      (pp.lines || []).forEach(L => L.pts.forEach(q => see(q[0], q[1], L.r + 6)));
      (pp.tees || []).forEach(t => see(t.x, t.y, t.r + 6));
      (pp.reducers || []).forEach(r => {
        see(r.x0, r.y, r.r1 + 6); see(r.x1, r.y, r.r1 + 6); });
      (pp.equipment || []).forEach(e => {
        see(e.x === undefined ? 0 : e.x, e.y === undefined ? 0 : e.y, 40); });
      if (x0 === Infinity)
        throw new Error('nothing in the piping to frame.');
      return { x0: x0, x1: x1, y0: y0, y1: y1 };
    }

    const geom = () => LPE.geometry.globeValve({ part: VALVE,
      faceToFace: BODY.dims.faceToFace, lineBore: VALVE_BORE,
      flow: 'down', widthProfile: WP.width });

    function field(gv, pct, gpm) {
      const k = pct.toFixed(1) + '|' + gpm.toFixed(1);
      if (k === key && cache) return cache;
      const wet = gv.wettedAt(pct, { minGap: CELL * 1.8 });
      const f = LPE.flowfield.solveField2D({ rings: wet.rings,
        throatRings: wet.throatRings, stillRings: wet.stillRings,
        openings: wet.openings,
        stations: gv.flowPathAt(pct).stations, gpm: gpm, cellIn: CELL,
        plenum: wet.plenum });
      cache = { field: f, wetted: wet,
                swirl: LPE.flowfield.withRecirculation(f) };
      key = k;
      return cache;
    }
    /* The particles OUTLIVE the field -- move the travel slider and the
       water in the body is the same water. Only the count is allowed
       to change the population, and only because the view did. */
    function population(f, n) {
      if (!fluid || fluidN !== n) {
        fluid = PC.fluidParticles(f, n);
        fluidN = n;
      }
      fluid.reseed = PC.fluidParticles(f, 1).reseed;
      return fluid;
    }

    /* ---- WHAT IS IN THE LINE, AT THE LINE'S OWN SCALE -------------
       phys-view draws PIPE. The things the pipe runs between are the
       consumer's to draw, which is right -- a vessel's outline is not
       a piping question -- and it means this rung is a bare bar until
       somebody draws them.

       The scale comes off the drawn line rather than off the frame's
       pxPerInch, and the two disagree: this frame puts the run at
       2.4 px/in and draws its bore at about 4.8, which is the bore
       exaggeration the geometry layer exists because of. Taking it
       off the line keeps the valve and the pipe it sits in agreeing
       with each other, which is the pair a reader is looking at. The
       page says so under the drawing rather than quietly picking one.

       The valve is the real body, not a symbol: this is the rung
       where a reader should see that an NPS 4 valve in an NPS 6
       line is a SHORTER thing than the run it interrupts. */
    function drawInLine(pp, gv, travel) {
      const L = (pp.lines || [])[0];
      if (!L) return;
      const sc = L.r / (PIPE.dims.bore / 2);
      for (const e of (pp.equipment || [])) {
        if (e.kind === 'valve') {
          const pl = Object.freeze({ valve: gv, scale: sc,
            ox: e.x, oy: e.y,
            toPage: (x, y) => [e.x + x * sc, e.y - y * sc] });
          PC.drawValve(g, pl, { width: c.width, height: c.height,
            travel: travel, theme: PC.DARK, ground: null,
            labels: false, caption: false });
        } else {
          /* A vessel is a terminal in this netlist -- what happens
             inside it is another loop's problem -- so it is drawn as
             a vessel-shaped end and nothing more. */
          const w = e.r * 3.2, h = e.r * 4.4, rr = e.r * 0.8;
          g.beginPath();
          g.moveTo(e.x - w / 2 + rr, e.y - h / 2);
          g.arcTo(e.x + w / 2, e.y - h / 2, e.x + w / 2, e.y + h / 2, rr);
          g.arcTo(e.x + w / 2, e.y + h / 2, e.x - w / 2, e.y + h / 2, rr);
          g.arcTo(e.x - w / 2, e.y + h / 2, e.x - w / 2, e.y - h / 2, rr);
          g.arcTo(e.x - w / 2, e.y - h / 2, e.x + w / 2, e.y - h / 2, rr);
          g.closePath();
          g.fillStyle = '${D.metal}'; g.fill();
          g.strokeStyle = '${D.rim}'; g.lineWidth = 1.4; g.stroke();
        }
        g.fillStyle = '${D.label}';
        g.font = '11px ui-monospace, Consolas, monospace';
        g.textAlign = 'center';
        g.fillText(e.tag, e.x, e.y + e.r * 4.6);
        g.textAlign = 'left';
      }
    }

    /* What the signal is doing, in words. A fault must read as a
       fault; the one thing this line must never do is print a
       plausible percentage when the command is gone. */
    function signalLine(cmd) {
      const bits = [cmd.mA.toFixed(1) + ' mA  ' + cmd.status];
      if (cmd.failed)
        bits.push('COMMAND LOST -- ' + cmd.why);
      else if (cmd.why)
        bits.push(cmd.why);
      bits.push(ACTION + ': ' + cmd.says);
      bits.push('travel ' + cmd.travelPct.toFixed(1) + '%  (' +
                cmd.inches.toFixed(3) + ' in of ' +
                ASM.travel + ' in rated)');
      bits.push('positioner ' + cmd.positioner);
      return bits.join('\\n');
    }

    /* ---- the crumbs ARE the ladder ---- */
    function crumbs() {
      const el = document.getElementById('crumbs');
      el.textContent = '';
      for (const r of DEPTH.LADDER) {
        const b = document.createElement('button');
        b.className = 'crumb' + (r.name === at ? ' on' : '');
        b.textContent = r.name;
        /* A rung is reachable if something on the way can get there.
           The plant rungs always; the component rungs once there is a
           component to be the subject of them. */
        b.onclick = () => { at = r.name; crumbs(); };
        el.appendChild(b);
        if (r.index < DEPTH.LADDER.length - 1) {
          const s = document.createElement('span');
          s.textContent = '>'; s.style.opacity = '.3';
          el.appendChild(s);
        }
      }
      document.getElementById('shows').textContent =
        DEPTH.rung(at).shows + '   --   needs ' + DEPTH.rung(at).needs;
      c.style.cursor = DEPTH.openFrom(at, { kind: 'valve', actuator: true })
        ? 'zoom-in' : 'default';
      document.getElementById('slow').textContent =
        DEPTH.rung(at).scope === 'component' ? 'shown at 1/50 speed' : '';
    }

    c.addEventListener('click', ev => {
      const r = c.getBoundingClientRect();
      const x = (ev.clientX - r.left) * (c.width / r.width);
      const y = (ev.clientY - r.top) * (c.height / r.height);
      let want = null;
      if (at === 'loop' && schemPlan && fit) {
        const h = DEPTH.hit(schemPlan,
          (x - fit.dx) / fit.k, (y - fit.dy) / fit.k);
        if (h && h.kind === 'valve')
          want = DEPTH.openFrom(at, { kind: 'valve', actuator: true });
      } else if (DEPTH.rung(at).scope === 'component') {
        want = DEPTH.openFrom(at, { kind: 'valve', actuator: true });
      }
      if (want) { at = want; crumbs(); }
    });

    let last = (window.performance || Date).now();
    function frame() { try { paint(); } catch (e) { die(e); return; }
      requestAnimationFrame(frame); }

    function paint() {
      const now = (window.performance || Date).now();
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      /* ---- THE COMMAND, AND WHERE IT PUTS THE STEM ----
         The slider is a current now, not a position: the same four to
         twenty milliamps a TREX would put on the loop. Everything
         downstream of this line is unchanged, which is the point of
         the seam -- the model never learns whether the number came
         from a slider, a LoopBench or a hand terminal. */
      const mA = +document.getElementById('ma').value;
      const cmd = LPE.assembly.travelFrom({ assembly: ASM, mA: mA,
        action: ACTION, onSignalFault: 'fail-safe' });
      const t = cmd.travelPct;
      const gv = geom();
      const open = gv.openAreaAt(t) / gv.openAreaAt(100);
      const gpm = Q100 * open;

      g.fillStyle = '${D.panel}';
      g.fillRect(0, 0, c.width, c.height);
      let prov = LOOP_PROV;

      if (at === 'loop' || at === 'line') {
        if (at === 'loop') {
          schemPlan = LPE.schem.plan(net, { labelBy: 'tag',
            state: { fv101: open },
            instruments: INSTR, signals: SIGNALS });
          fit = fitInto(schemPlan.bounds, 54);
          g.save();
          g.translate(fit.dx, fit.dy); g.scale(fit.k, fit.k);
          LPE.schem.draw(g, schemPlan, THEME);
          g.restore();
        } else {
          /* THE SAME NETLIST, ASKED FOR ITS PIPE instead of its
             symbols. Nothing here lays anything out: toPiping walks
             the graph in the rig frame and phys-view draws the bores
             it finds. That is the whole claim of the rung -- the step
             from loop to line is a change of question, not a change
             of drawing. */
          schemPlan = null;
          const pp = net.toPiping();
          fit = fitInto(boundsOfPiping(pp), 54);
          g.save();
          g.translate(fit.dx, fit.dy); g.scale(fit.k, fit.k);
          LPE.phys(pp).draw(g, PIPE_T);
          drawInLine(pp, gv, t);
          g.restore();
        }
      } else {
        const act = LPE.actuator.diaphragm({ part: ACT, figure: FIG,
          travelPct: t, ratedTravel: VALVE.dims.travel,
          /* COUPLED. The plug and the plate are clamped together by a
             steel connector; they move by the same amount, and that
             amount is what the drawn cage has room for. */
          strokeIn: gv.drawnTravel });
        const mp = gv.mountPoint();

        /* Every component rung is the same picture at a different
           framing, so each rung says only what it wants IN VIEW and
           the fit does the rest. */
        const SPAN = {
          assembly: () => ({
            x0: Math.min(gv.extent.x0, act.extent.x0) - 1,
            x1: Math.max(gv.extent.x1, act.extent.x1) + 1,
            y0: gv.extent.y0 - 1, y1: mp.y + act.extent.y1 + 1 }),
          section: () => ({
            x0: gv.extent.x0 - 0.5, x1: gv.extent.x1 + 0.5,
            y0: gv.extent.y0 - 0.5, y1: gv.cage.y1 + 1.5 }),
          detail: () => {
            /* CLOSE ENOUGH TO TEACH FROM, which is not the same as
               close as the model will go. Framed three port
               diameters wide: the throat, the cage windows above it
               and the seat below are all in the picture at once, so
               a reader can see what the fast fluid is fast BETWEEN.
               Tighter than this and the screen is a field of blue
               with an edge in it. */
            const fp = gv.flowPathAt(t), th = fp.stations[fp.throat];
            const w = gv.port * 3;
            const h = w * (c.height / c.width);
            /* Centred on the throat in x, and lifted a sixth of the
               frame in y so the cage windows the fluid came THROUGH
               are in the picture with it rather than above the top
               edge. */
            const cy = th.y + h / 6;
            return { x0: th.x - w / 2, x1: th.x + w / 2,
                     y0: cy - h / 2, y1: cy + h / 2 };
          },
        };
        const pad = 26;
        const fitSpan = sp => {
          const kk = Math.min((c.width - 2 * pad) / (sp.x1 - sp.x0),
                              (c.height - 2 * pad) / (sp.y1 - sp.y0));
          return { k: kk,
            ox: pad + (c.width - 2 * pad - (sp.x1 - sp.x0) * kk) / 2
                - sp.x0 * kk,
            oy: pad + (c.height - 2 * pad - (sp.y1 - sp.y0) * kk) / 2
                + sp.y1 * kk };
        };
        const here = fitSpan(SPAN[at]());

        const fc = field(gv, t, gpm);
        const parts = population(fc.field, PARTS);
        PC.stepFluid(parts, fc.swirl, dt, { timeScale: SLOWMO });

        const pl = Object.freeze({ valve: gv, scale: here.k,
          ox: here.ox, oy: here.oy,
          toPage: (x, y) => [here.ox + x * here.k, here.oy - y * here.k] });

        let r = null;
        PC.drawValve(g, pl, { width: c.width, height: c.height, travel: t,
          theme: PC.DARK, ground: null,
          /* The callouts are the SECTION's teaching apparatus, and
             they are placed for the section's framing. On the
             assembly they land on a valve drawn half the size with an
             actuator over it; in a close-up half of them point off
             the edge of the canvas at parts that are not in the
             picture. The close-up teaches with the throat marker
             instead, which is placed from the field. */
          labels: at === 'section',
          /* Out of the picture, into the block under it -- see the
             note on provenance() in the skin. */
          provenance: false,
          /* The skin's own three notes are the BODY's provenance. The
             actuator is a second traced part from a second document,
             so at the rung where it is on screen it says so itself. */
          notes: at === 'assembly'
            ? ['actuator castings traced from ' + ACT.figure +
               '; its stem and spring are constructed -- ' +
               LPE.actuator.BUILT.join(', ')]
            : [],
          title: 'FV-101  Fisher ED NPS 4 equal-percentage' +
                 (at === 'assembly' ? ' on a 657 size ' + ACT.size : ''),
          onFluid: gg => { r = PC.drawValveFlow(gg, pl, fc.field, parts,
            { theme: PC.DARK, wetted: fc.wetted }); },
        });
        prov = PC.provenance(gv, here.k, at === 'assembly'
          ? ['actuator castings traced from ' + ACT.figure +
             '; its stem and spring are constructed -- ' +
             LPE.actuator.BUILT.join(', ')]
          : []).join('\\n');

        PC.drawBalance(g, pl, t, { theme: PC.DARK, parts: parts });
        PC.drawPacking(g, pl, { theme: PC.DARK });
        if (at === 'assembly')
          PC.drawActuator(g, pl, act, { theme: PC.DARK, at: mp });
        if (at === 'detail' && r && r.fastestAt && !r.shut)
          PC.markThroat(g, r, { theme: PC.DARK, radius: 9 * here.k / 34 });
      }

      document.getElementById('mav').textContent = mA.toFixed(1);
      document.getElementById('tvv').textContent = t.toFixed(0);
      document.getElementById('sig').textContent = signalLine(cmd);
      document.getElementById('prov').textContent = prov;
      document.getElementById('q').textContent = Math.round(gpm);
      const aw = gv.openAreaAt(t);
      document.getElementById('aw').textContent = aw.toFixed(2);
      document.getElementById('vw').textContent = aw > 0 && gpm > 0
        ? ((gpm * 0.0022280 * 1728 / aw) / 12).toFixed(0) : '0';
    }

    crumbs();
    document.getElementById('main').hidden = false;
    frame();
  }
})();
</script>
`;

fs.writeFileSync(path.join(OUT, 'index.html'),
                 PAGE.replace(/\r\n/g, '\n'), 'utf8');
console.log('\nwrote lab/fic101/index.html  --  serve it over HTTP\n');
