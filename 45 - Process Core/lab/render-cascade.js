/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   The cascade as a PLANT: pipes, a tank, and the water moving.
   Run: node lab/render-cascade.js                                     */
'use strict';

/* ---------------- THE CASCADE, DRAWN AS WHAT IT IS -------------------

   LoopBench can RUN a cascade and cannot draw one -- its faceplate is a
   trend and three numbers, which is what an operator looks at and not
   what a plant is. The Process Core can draw the plant and cannot run a
   controller: there is no PID anywhere in `src/` and no clock. The two
   halves sit in different languages and the architecture document says
   to revisit that the day something needs both.

   This is that day, handled the honest way round: the Core draws the
   ARRANGEMENT, which is a netlist fact -- what is connected to what,
   which instrument reads which line, whose output is whose setpoint --
   and says plainly that the control runs next door.

   AND IT DRAWS THE TANK, which nothing has ever done. phys-view draws
   PIPE and deliberately stops there; `render-fic101.js` says so in its
   own comment -- "the things the pipe runs between are the consumer's to
   draw ... and it means this rung is a bare bar until somebody draws
   them". TK-1 has been in the netlist the whole time with nothing
   putting an outline round it. A vessel outline is not a piping
   question, so it is drawn here, as the consumer, and it is labelled
   ART because no standard we hold dimensions the shape of a tank.    */

const fs = require('fs');
const path = require('path');

global.window = {};
const SRC = ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
             'actuator', 'assembly', 'topology', 'schemvis', 'physvis',
             'dynamics', 'thermal', 'flowfield']
  .map(m => ({ name: m,
               code: fs.readFileSync(
                 path.join(__dirname, '..', 'src', m + '.js'), 'utf8') }));
for (const m of SRC) eval(m.code);            /* eslint-disable-line */
const LPE = global.window.LPE;

const PARTS = fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8');
const CAT = LPE.catalogue.load(JSON.parse(PARTS));

/* The skin goes to the BROWSER too, not just to node. Shipping only
   src/ is what left pro cutaway out of this page: the drawing had the
   geometry and none of the thing that knows how to draw fluid. */
SRC.push({ name: 'procutaway',
           code: fs.readFileSync(
             path.join(__dirname, '..', 'skins', 'procutaway.js'), 'utf8') });
require(path.join(__dirname, '..', 'skins', 'procutaway.js'));
const D = global.window.LPE.skins.procutaway.DARK;
/* THE LINE'S WATER IS THE SKIN'S WATER. drawValveFlow paints the valve
   in procutaway.water() -- cavity mixed with fluid -- so leaving the
   pipe on the raw fluid blue put two different liquids either side of
   the flange. One fluid, one colour, and the skin owns it. */
const WATER = global.window.LPE.skins.procutaway.water(D);

/* ---- the plant ------------------------------------------------------ */

const PIPE = CAT.part('PIPE/NPS6/S40');
/* The traced ED. Swapping this to the line-size NPS 6 body was tried
   as a way of making the bores agree at the joints and was wrong twice
   over: the end opening is set by the TRACE, so it did not move, and
   the 7 in port dragged the plug out to nearly half as wide again as
   the body it sits in. The joints are made to agree by measuring the
   trace instead -- see END_BORE. */
const VALVE = CAT.part('VALVE/ED/NPS4/P4.375/T2/EQPCT');

/* The same service the loop page specifies: cooling water to an
   exchanger, 560 gpm, 50 -> 35 psig across the valve. */
const GPM = 560;
const RUN_FT = 40;

const VGEO = (function () {
  const wp = LPE.trim.fromCurve({ curve: VALVE.cv,
    characterisedBy: VALVE.characterisedBy }).widthProfile();
  return LPE.geometry.globeValve({ part: VALVE, faceToFace: 14.5,
    lineBore: PIPE.dims.bore, flow: 'down', widthProfile: wp.width });
})();
const V_PCT = 70;
const VPLUG = VGEO.plugAt(V_PCT);
const VWET = VGEO.wettedAt(V_PCT, { minGap: 0.25 });

/* ---- THE ONE BORE THE DRAWING HAS ---------------------------------

   Measured off the traced body at its inlet face, not assumed from the
   NPS. The trace is what gets drawn, and its end connection comes out
   at a little under the nominal bore -- so taking the catalogue's
   6.065 in for the pipe and the trace for the valve drew the same
   connection at two different heights, which is the step that kept
   showing up at both joints.

   The line and the valve's end connections ARE one bore. The drawing
   now says so once: this measurement sets the pipe, and the valve is
   drawn at the same factor, so the two meet flush by construction
   rather than by a number that happened to agree. */
/* ---- THE PIPE IS CUT TO THE VALVE'S OPENING, BOTH ENDS ------------

   Measured at BOTH faces, not just the inlet. Two things came out of
   doing only one of them:

   the two faces are not quite the same bore -- 4.820 in at the inlet,
   4.809 at the outlet -- so a pipe sized off the inlet is a hair proud
   of the outlet; and, the one that actually showed, the valve's bore
   is not centred on zero. It sits about 0.11 in low at both ends, so a
   pipe hung on the netlist centreline ran two pixels above the hole it
   was feeding, at both joints.

   The pipe takes the TIGHTER of the two bores, so it is never proud of
   either opening, and the valve is hung on its own bore centre rather
   than on its origin, so the two line up. */
const FACE = (function () {
  const W = VGEO.wettedAt(V_PCT, { minGap: 0.25 });
  const at = xf => {
    let lo = Infinity, hi = -Infinity;
    for (const r of W.rings) {
      let a = Infinity, b = -Infinity, hit = false;
      for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
        const p1 = r[i], p2 = r[j];
        if ((p1[0] > xf) !== (p2[0] > xf)) {
          const y = p1[1] + (p2[1] - p1[1]) * (xf - p1[0]) / (p2[0] - p1[0]);
          a = Math.min(a, y); b = Math.max(b, y); hit = true;
        }
      }
      if (hit) { lo = Math.min(lo, a); hi = Math.max(hi, b); }
    }
    if (!isFinite(lo)) throw new Error('no wetted ring crosses x=' + xf);
    return { bore: hi - lo, mid: (hi + lo) / 2 };
  };
  const i = at(VGEO.extent.x0 + 0.05), o = at(VGEO.extent.x1 - 0.05);
  return { bore: +Math.min(i.bore, o.bore).toFixed(3),
           mid:  +((i.mid + o.mid) / 2).toFixed(3) };
})();


const END_BORE = FACE.bore;
const BORE_MID = FACE.mid;        /* how far the bore sits off the origin */


/* Layout in authored pixels, with the frame declaring what they mean so
   the drawing can print its own exaggeration. Bore x6: enough to read as
   pipe, stated rather than chosen quietly. Halved going in because the
   scaled bore is carried as a radius. */
const Y = 470, X_TANK = 170, X_FV = 560, X_HX = 1060;
const RUN_PX_PER_INCH = (X_HX - X_TANK) / (RUN_FT * 12);
/* ONE MAGNIFICATION FOR EVERYTHING THAT IS NOT A LENGTH.

   The pipe was drawn at x6 and the valve at x10, and they are the SAME
   6.065 in bore -- so the line arrived at the valve 67 px across and the
   valve's end connections were 112. A butt weld between two different
   sizes, on a page whose whole argument is that it states its own
   distortions. Bore and valve now share one factor. Lengths stay true. */
const BORE_X = 8;

const spec = {
  bores: { main: PIPE.dims.bore },   /* the real one: NPS 6 Sch 40 */
  components: {
    tk: { kind: 'vessel', tag: 'TK-1', role: 'source', pressure: 50 },
    fv: { kind: 'valve', tag: 'FV-101', valveType: 'globe',
          cv: VALVE.cv[VALVE.cv.length - 1], key: 'fv101' },
    hx: { kind: 'vessel', tag: 'HX-101', role: 'sink', pressure: 35 },
  },
  segments: [
    { from: 'tk.out', to: 'fv.in', bore: 'main' },
    { from: 'fv.out', to: 'hx.in', bore: 'main' },
  ],
  frames: { rig: {
    pxPerInch: RUN_PX_PER_INCH * BORE_X / 2,
    runPxPerInch: RUN_PX_PER_INCH,
    round: 1,
    /* A VESSEL'S POSITION, FOR PIPING PURPOSES, IS ITS NOZZLE.
       Authored at the centres, the run went from the middle of the tank
       to the middle of the exchanger -- straight through both bodies,
       with the water visible inside them. A netlist position for a
       vessel is where the pipe MEETS it, which is the nozzle. The body
       is then drawn around that point by the consumer. */
    at: { tk: [X_TANK + 82, Y], fv: [X_FV, Y], hx: [X_HX - 88, Y] },
  } },
};
const net = LPE.net(spec, { frame: 'rig', catalogue: CAT });
if (net.errors.length) { console.error(net.errors.join('\n')); process.exit(1); }

/* ---- what the exchanger is actually doing ---------------------------
   The hot side is a PRODUCT RUNDOWN, not water: cp 0.55, 6.68 lb/gal.
   That is why the cooling water leaves at 90 and not at 128 -- the two
   capacity rates are nowhere near equal, and a drawing that coloured the
   tubes as though they were would be lying about the one thing the
   exchanger is for. Taken from `loop-cooling.js` so the two pages cannot
   drift. */
const HOT = { gpm: 545, cp: 0.55, lbPerGal: 6.68, inletF: 180,
              fluid: 'product rundown' };
const COLD = LPE.thermal.waterStream(GPM, 60);
const EX = LPE.thermal.uaForDuty({ hot: HOT, cold: COLD, hotOutletF: 110 });
const DUTY = LPE.thermal.exchange({ hot: HOT, cold: COLD, UA: EX.UA });
const THERMAL = {
  hotIn: HOT.inletF, hotOut: DUTY.hotOutletF,
  coldIn: 60, coldOut: DUTY.coldOutletF,
  mmbtu: EX.dutyBtuHr / 1e6,
};

/* velocity in the line, from the catalogue bore and the service flow */
const areaFt2 = Math.PI * Math.pow(PIPE.dims.bore / 12, 2) / 4;
const FT_S = (GPM / 448.831) / areaFt2;

/* ---- THE VALVE ITSELF, AND WHAT IS HAPPENING INSIDE IT --------------

   A technician does not get this view. They get a painted body with a
   nameplate and whatever the positioner will tell them. The whole reason
   to build a page like this is that the one thing nobody can see is the
   one thing that decides what the loop does.

   So the valve goes in at a size you can read -- NOT at the run's scale,
   where 14.5 inches of face-to-face would be 25 px and invisible. It is
   magnified, the factor is declared beside it, and the geometry inside
   is the traced one: the same body, cage, windows, plug and seat the
   section rung draws, with the 657's own outlines standing on it.

   And the water in it is the SOLVED field, sampled on a grid and carried
   to the page. Nothing here decides where it goes.                    */
/* The flattened field that used to live here -- vx, vy and a kind
   flag sampled onto a grid and shipped as three plain arrays -- is
   gone. It was a copy of the solver's answer with everything that
   made it a field stripped off, and keeping it meant this page could
   never call the skin. The page solves the real one now. */


/* The 657 that stands on it, traced from Figure 6 of D100306X012. */
const FIG6 = JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'actuator-657-figure6.json'), 'utf8'));
const ACT = LPE.actuator.diaphragm({
  part: CAT.part('ACTUATOR/657/SIZE45'), figure: FIG6, travelPct: V_PCT });

/* How much bigger than the run the valve is drawn. Stated, like the
   bore, because a reader comparing it to the pipe deserves to know. */
/* ---- THE VALVE IS SCALED SO ITS PORTS ARE THE PIPE -----------------

   The body draws an opening of exactly 0.3324 of its own face-to-face,
   at every size -- change the face-to-face and the opening changes with
   it, which no real valve does. So the drawn opening is not a bore at
   all. It is a proportion of the picture, and there is no pipe size that
   can match it.

   Which makes it free to move. The valve is already a magnified drawing;
   magnifying it by a little more so its ports come out at the line bore
   costs nothing and settles the joint by construction. The pipe is then
   plainly what it is -- NPS 6 Schedule 40, 6.065 in from ASME B36.10M --
   and the service numbers that rest on it stay true.

   Declared, like the bore exaggeration it sits beside: the body is drawn
   larger than the run by this much, and says so under the drawing. */
const VALVE_X = BORE_X * (PIPE.dims.bore / FACE.bore);

/* WHERE THE YOKE LANDS. The actuator's own mount is its origin -- y = 0
   -- and the valve's bonnet top is 11.36 in above the port. Drawn with
   both origins together the actuator sat ON the valve instead of on top
   of it, which is what it looked like.

   Its extent runs 1.8 in BELOW that mount, and that is right: a yoke
   straddles the bonnet rather than perching on it. */
const BONNET_TOP = (function () {
  let t = -Infinity;
  for (const r of VGEO.bonnet) for (const q of r) if (q[1] > t) t = q[1];
  return t;
})();

/* ---- HOW MUCH ROOM THE VALVE ACTUALLY TAKES -------------------------

   This was two hand-written numbers, 250 by 420, and they were right
   for the magnification the valve happened to be drawn at when they
   were typed. Scaling the body so its ports meet the pipe made it a
   quarter larger and the actuator went off the top of the frame,
   because the box the layout reserves had no idea the drawing had
   moved.

   Derived now. The body's own extent, the actuator standing on the
   bonnet, and the magnification -- all three already exist, and the
   box is just what they come to. */
const VALVE_BOX = (function () {
  const vk = RUN_PX_PER_INCH * VALVE_X;
  const top = BONNET_TOP + (ACT.extent.y1 - ACT.extent.y0);
  const bot = VGEO.extent.y0;
  /* Centred on the LINE, because that is where the valve is drawn: the
     box says how much room to reserve, not where to put it. Moving the
     box moved the valve off the pipe, which is a different mistake and
     a more obvious one. Reserved symmetrically about the centreline, so
     the taller half -- the actuator -- sets the height. */
  /* ASYMMETRIC, because a valve is. Nearly all of it is above the line
     -- bonnet, yoke, actuator -- and almost none below. Reserving the
     same room both ways put an empty half-frame under the pipe and
     shrank the whole drawing to fit it. The box carries how far it
     reaches each way instead of one height. */
  return {
    w: (VGEO.extent.x1 - VGEO.extent.x0) * vk,
    h: (top - bot) * vk,
    up: top * vk,
    down: -bot * vk,
  };
})();

/* ---- the two loops, declared over the netlist ----------------------- */
/* A signal is not a pipe, so instruments live beside the graph rather
   than inside it -- the same rule `loop-cooling.js` follows. */
const TOP = Y - 408;          /* the master's signal run, clear of the actuator */
const MID = Y - 356;          /* the slave's */
const INSTR = [
  { tag: 'FT-101', x: X_FV - 150, y: Y - 70, mount: 'field',
    what: 'flow transmitter in the line' },
  { tag: 'FIC-101', x: X_FV, y: MID, mount: 'panel',
    what: 'the INNER loop -- holds flow, drives the valve' },
  { tag: 'LT-103', x: X_TANK + 130, y: Y - 60, mount: 'field',
    what: 'Level-Trol displacer on TK-1 — measurement only here' },
  { tag: 'TT-102', x: X_HX - 60, y: Y - 70, mount: 'field',
    what: 'temperature transmitter on the product leaving' },
  { tag: 'TIC-102', x: X_FV + 170, y: TOP, mount: 'panel',
    what: 'the OUTER loop -- holds temperature, sets FIC-101' },
];
const SIGNALS = [
  { pts: [[X_FV - 150, Y - 26], [X_FV - 150, Y - 52]], kind: 'measure' },
  { pts: [[X_FV - 150, Y - 88], [X_FV - 150, MID], [X_FV - 22, MID]],
    kind: 'measure' },
  { pts: [[X_TANK + 95, Y - 60], [X_TANK + 108, Y - 60]], kind: 'measure' },
  { pts: [[X_HX - 60, Y - 26], [X_HX - 60, Y - 52]], kind: 'measure' },
  { pts: [[X_HX - 60, Y - 88], [X_HX - 60, TOP], [X_FV + 192, TOP]],
    kind: 'measure' },
  /* the cascade link itself: the outer's output is the inner's setpoint */
  { pts: [[X_FV + 148, TOP], [X_FV, TOP], [X_FV, MID - 22]],
    kind: 'cascade' },
  /* and the inner drives the valve */
  { pts: [[X_FV, MID + 22], [X_FV, Y - 30]], kind: 'command' },
];

/* ---- equipment: the part nobody had drawn --------------------------- */
const EQUIP = [
  { kind: 'tank', tag: 'TK-1', x: X_TANK, y: Y,
    w: 160, h: 210, note: 'cooling water supply' },   /* nozzle at x+82 */
  /* THE VALVE WAS NOT DRAWN EITHER, and for the same reason the tank was
     not: phys-view draws pipe and a valve body is equipment. It is the
     one thing on this page a reader most wants to open, so it is drawn
     here and it is a door -- clicking it goes inside, to the rung of the
     ladder that cuts it open. */
  { kind: 'valve', tag: 'FV-101', x: X_FV, y: Y,
    w: VALVE_BOX.w, h: VALVE_BOX.h,
    up: VALVE_BOX.up, down: VALVE_BOX.down,
    note: 'ED NPS 4 on a 657 size 45 — click to go inside',
    href: '../fic101/index.html' },
  { kind: 'exchanger', tag: 'HX-101', x: X_HX, y: Y,
    w: 170, h: 170, note: 'product rundown' },
];

const ex = net.exaggeration;

/* ---- the page -------------------------------------------------------- */
const OUT = path.join(__dirname, 'cascade');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const instrRows = INSTR.map(i => `
  <tr><td class="num">${i.tag}</td>
      <td class="src">${i.mount === 'panel' ? 'control room' : 'in the field'}</td>
      <td>${i.what}</td></tr>`).join('');

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>The cascade, as a plant</title>
<style>
  :root { --ground:${D.ground}; --panel:${D.panel}; --hair:${D.hairline};
          --ink:${D.ink}; --label:${D.label}; --fluid:${D.fluid};
          --fast:${D.fluidFast}; --metal:${D.metal}; --rim:${D.rim};
          --trim:${D.trim}; --env:${D.envelope}; }
  .fl{display:inline-flex;align-items:center;gap:8px;font:600 11px/1 ui-monospace,Consolas,monospace;
      letter-spacing:.08em;text-transform:uppercase;color:var(--label);margin-left:10px}
  .fl input{width:150px;accent-color:var(--fast)}
  .fl b{color:var(--fast);font-weight:700;min-width:62px;text-align:right}
  *{box-sizing:border-box}
  body{margin:0;background:var(--ground);color:var(--ink);
    font:15px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}
  .wrap{max-width:1200px;margin:0 auto;padding:32px 24px 70px}
  h1{font-size:30px;margin:0 0 10px;letter-spacing:-.015em}
  h2{font-size:12px;letter-spacing:.13em;text-transform:uppercase;
     color:var(--label);margin:42px 0 8px;
     font-family:ui-monospace,Consolas,monospace}
  p{color:var(--label);max-width:78ch;margin:0 0 14px}
  p.lede{color:var(--ink);font-size:16px}
  .frame{background:var(--panel);border:1px solid var(--hair);
    border-radius:3px;padding:12px}
  canvas{display:block;width:100%;height:auto}
  .bar{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:10px 0 0}
  .bar button{background:var(--panel);color:var(--label);
    border:1px solid var(--hair);border-radius:3px;padding:6px 13px;
    cursor:pointer;font:11px ui-monospace,Consolas,monospace;
    letter-spacing:.08em;text-transform:uppercase}
  .bar button.on{border-color:var(--fast);color:var(--fast)}
  .bar .rd{font:12px ui-monospace,Consolas,monospace;color:var(--label);
    font-variant-numeric:tabular-nums}
  table{width:100%;border-collapse:collapse;background:var(--panel);
    border:1px solid var(--hair);border-radius:3px;overflow:hidden}
  th{font:11px ui-monospace,Consolas,monospace;letter-spacing:.07em;
    text-transform:uppercase;color:var(--label);text-align:left;
    padding:10px 12px;border-bottom:1px solid var(--hair)}
  td{padding:9px 12px;border-bottom:1px solid var(--hair);font-size:13.5px}
  tr:last-child td{border-bottom:none}
  td.num{font-family:ui-monospace,Consolas,monospace;white-space:nowrap}
  td.src{color:var(--label);font-size:12.5px}
  .note{background:var(--panel);border:1px solid var(--hair);
    border-left:3px solid var(--trim);border-radius:3px;
    padding:14px 16px;margin:16px 0 0}
  .note b{color:var(--ink)}
  code{font-family:ui-monospace,Consolas,monospace;font-size:12.5px;
    color:var(--fast)}
</style>
<div class="wrap">

<h1>The cascade, as a plant</h1>
<p class="lede">Not a faceplate. The pipe the water is actually in, the tank
  it comes from, the exchanger it goes to, and both loops drawn over the top
  &mdash; the temperature controller setting the flow controller&rsquo;s
  setpoint, which is the whole of what a cascade is.</p>

<div class="frame"><canvas id="c" width="1320" height="700"></canvas></div>
<div class="bar">
  <button id="play" class="on" type="button">Pause</button>
  <button id="instr" class="on" type="button">Hide the loops</button>
  <button id="act" class="on" type="button">Dome only</button>
  <label class="fl">flow
    <input id="q" type="range" min="20" max="260" value="100" step="5">
    <b id="qv">560 gpm</b></label>
  <span class="rd" id="rd"></span>
</div>

<h2>what is on the drawing</h2>
<table>
  <tr><th>tag</th><th>where</th><th>what it does</th></tr>
  ${instrRows}
</table>
<p>The orange run is the <b>cascade link</b>: TIC-102&rsquo;s output is not a
  valve signal, it is FIC-101&rsquo;s setpoint. That one line is the
  difference between two loops near each other and a cascade.</p>

<h2>what is real here, and what is not</h2>
<div class="note">
  <ul style="margin:0;padding-left:18px;color:var(--label)">
    <li><b>The pipe is real.</b> NPS&nbsp;6 Schedule&nbsp;40, bore
      ${PIPE.dims.bore.toFixed(3)}&nbsp;in from ASME&nbsp;B36.10M through a
      catalogue that refuses to load if the printed and canonical values
      disagree. ${RUN_FT}&nbsp;ft of it, declared.</li>
    <li><b>The water speed is real.</b> ${FT_S.toFixed(1)}&nbsp;ft/s &mdash;
      ${GPM}&nbsp;gpm through that bore, and nothing else.</li>
    <li><b>The bore is drawn &times;${ex ? ex.factor.toFixed(0) : '?'} against
      length</b>, and says so under the drawing. At true scale this pipe is a
      wire; every schematic stretches it and this one tells you by how
      much.</li>
    <li><b>The tank and the exchanger are ART.</b> No standard we hold
      dimensions the shape of a vessel. They are drawn because the netlist has
      always had TK-1 and HX-101 in it and nothing had ever put an outline
      round them &mdash; phys-view draws pipe and deliberately stops.</li>
    <li><b>Nothing here is controlling anything.</b> The Process Core has no
      PID and no clock. This is the arrangement, which is a netlist fact. The
      cascade that actually <em>runs</em> is next door in LoopBench &mdash;
      <code>LoopBench.cmd</code> &mdash; and the two are meant to be shown
      together: this is what the plant is, that is what the loop does.</li>
  </ul>
</div>

</div>
<script>
${SRC.map(m => m.code).join('\n')}
</script>
<script>
(function(){
  const LPE = window.LPE;
  const CAT = LPE.catalogue.load(${PARTS});
  const net = LPE.net(${JSON.stringify(spec)}, { frame:'rig', catalogue: CAT });
  const pp = net.toPiping();
  const EQUIP = ${JSON.stringify(EQUIP)};
  const INSTR = ${JSON.stringify(INSTR)};
  const SIGNALS = ${JSON.stringify(SIGNALS)};
  const FT_S = ${FT_S};
  const EX = ${JSON.stringify(ex)};
  const VG = ${JSON.stringify({
      body: VGEO.body, bonnet: VGEO.bonnet, cage: VGEO.cage.rings,
      win: VGEO.cage.windows, seat: VGEO.seatRing, gasket: VGEO.gasket,
      plug: VPLUG.head, seal: VPLUG.seal ? VPLUG.seal.rings : [],
      stem: [VPLUG.stem], water: VWET.rings, extent: VGEO.extent })};
  const AC = ${JSON.stringify({
      yoke: ACT.yoke, lower: ACT.lowerCasing, upper: ACT.upperCasing,
      plate: ACT.plate, spring: ACT.spring, seat: ACT.springSeat,
      adj: ACT.adjustor, stem: ACT.stem, conn: ACT.connector,
      ind: ACT.indicator, extent: ACT.extent })};
  const VALVE_X = ${VALVE_X}, RUN_PPI = ${RUN_PX_PER_INCH};
  const BONNET_TOP = ${BONNET_TOP};   /* where the yoke lands */
  const T = { body:'${D.metal}', rim:'${D.rim}',
              light:'${D.trim}', dark:'${WATER}',
              trimY:'${D.trimRim}' };
  const C = { fast:'${D.fluidFast}', label:'${D.label}', ink:'${D.ink}',
              env:'${D.envelope}', trim:'${D.trim}', panel:'${D.panel}',
              /* hot and cold are the skin's own two fluid roles; the
                 gradient between them is a mix, not a new colour */
              cold:'${WATER}', hot:'${D.trim}', coldFill:'${WATER}' };

  /* ---- THE FLOW RATE, IN YOUR HAND -------------------------------
     One number scales the whole picture's clock: the line, the water
     in the valve, and the parcels' own brightness, because they all
     read their speed from the same place. The ratios between them do
     not move -- the trim still runs about ten times the line -- so
     what the slider changes is how much water is going through, not
     how the valve behaves. */
  let QSCALE = 1;
  (function(){
    const sl = document.getElementById('q'), lab = document.getElementById('qv');
    if(!sl) return;
    const show = () => {
      const v = Number(sl.value);
      QSCALE = isFinite(v) && v > 0 ? v/100 : 1;   /* never let it go NaN */
      if(lab) lab.textContent = Math.round(${GPM}*QSCALE) + ' gpm'; };
    sl.addEventListener('input', show); show();
  })();

  const cv = document.getElementById('c'), g = cv.getContext('2d');
  let running = true, last = 0;

  /* fit the authored pixels in, one k for both axes */
  let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
  for (const e of EQUIP){ x0=Math.min(x0,e.x-e.w/2); x1=Math.max(x1,e.x+e.w/2);
    /* up and down where a thing is lopsided -- see VALVE_BOX */
    const up = e.up === undefined ? e.h/2 : e.up;
    const dn = e.down === undefined ? e.h/2 : e.down;
    y0=Math.min(y0,e.y-up); y1=Math.max(y1,e.y+dn); }
  for (const s of SIGNALS) for (const p of s.pts){
    x0=Math.min(x0,p[0]); x1=Math.max(x1,p[0]);
    y0=Math.min(y0,p[1]); y1=Math.max(y1,p[1]); }
  const pad=34, k=Math.min((cv.width-2*pad)/(x1-x0),(cv.height-2*pad)/(y1-y0));
  const OX=x0-((cv.width-2*pad)/k-(x1-x0))/2-pad/k;
  const OY=y0-((cv.height-2*pad)/k-(y1-y0))/2-pad/k;
  const X=u=>(u-OX)*k, Y2=v=>(v-OY)*k;

  /* ---- particles along the runs ---- */
  const runs = pp.lines.map(l => {
    const pts=l.pts, seg=[]; let total=0;
    for(let i=1;i<pts.length;i++){
      const d=Math.hypot(pts[i][0]-pts[i-1][0], pts[i][1]-pts[i-1][1]);
      seg.push({a:pts[i-1],b:pts[i],d:d,s:total}); total+=d; }
    return {seg:seg, total:total, r:l.r};
  });
  /* ---- ONE BODY OF WATER, NOT TWO ----------------------------------

     The line's particles and the valve's were separate populations, so
     the water arrived at the valve and stopped while different water
     appeared inside it. That is two animations next to each other, and a
     reader can tell.

     They are one population now with a HANDOFF at the flanges. A
     particle running the inlet line reaches the valve's inlet port and
     carries its lateral offset straight in -- the same inches, because
     the bore and the valve now share one magnification, which is the
     other half of why that factor had to match. It then advects through
     the SOLVED field until it leaves by the outlet, where it rejoins the
     line. Nothing teleports and nothing is invented: the path through
     the valve is the one flowfield.js computed. */
  const VPPI = RUN_PPI * VALVE_X;          /* px per inch inside the valve */
  const VALVE_CX = ${X_FV}, VALVE_CY = ${Y} + ${BORE_MID}*${RUN_PX_PER_INCH * VALVE_X};
  const PORT_IN = VG.extent.x0, PORT_OUT = VG.extent.x1;
  const FLANGE_IN = VALVE_CX + PORT_IN*VPPI;
  const FLANGE_OUT = VALVE_CX + PORT_OUT*VPPI;

  const LINE = runs[0], LINE_R = runs[0].r;

  const P=[];
  const LINE_X0 = LINE.seg[0].a[0];
  const LINE_X1 = LINE.seg[LINE.seg.length-1].b[0];






  /* WATER INSIDE THE TANK, drifting toward the outlet. Not a simulation
     -- there is no tank model in this core and saying otherwise would be
     the kind of invention the rest of the stack refuses. It is the one
     thing that makes the pipe read as fed BY the tank rather than
     starting near it, which is what a reader actually needs. */
  /* ---- THE WATER IN THE VALVE IS PRO CUTAWAY'S -------------------

     This page was shipping a FLATTENED field to the browser -- three
     plain arrays of vx, vy and a kind flag -- and then advecting
     markers through it with code written here. That is why none of
     pro cutaway's fluid reached this drawing: the skin was never
     loaded, and the thing it needs, a solved field that can answer
     inside() and at(), had been thrown away at build time.

     It is built the way lab/fic101 builds it now. The geometry, the
     wetted rings and the solve all happen in the page, so what comes
     back is the real field object, and the water is PC.fluidParticles
     stepped by PC.stepFluid and drawn by PC.drawValveFlow -- the same
     three calls the section rung makes. Substepping, parcel size in
     inches, the slow-motion clock and the throat are all the skin's,
     and none of them are reimplemented here. */
  const PC = LPE.skins.procutaway;
  const VPART = CAT.part(${JSON.stringify(VALVE.id)});
  const GV = LPE.geometry.globeValve({
    part: VPART, faceToFace: 14.5, lineBore: CAT.part('PIPE/NPS6/S40').dims.bore,
    flow: 'down',
    widthProfile: LPE.trim.fromCurve({ curve: VPART.cv,
      characterisedBy: VPART.characterisedBy }).widthProfile().width });
  const WET = GV.wettedAt(${V_PCT}, { minGap: 0.25 });
  const FLD = LPE.flowfield.solveField2D({
    rings: WET.rings, throatRings: WET.throatRings,
    stillRings: WET.stillRings, openings: WET.openings,
    stations: GV.flowPathAt(${V_PCT}).stations,
    plenum: WET.plenum, circuits: [WET.balance],
    gpm: ${GPM}, cellIn: 0.16 });
  const SWIRL = LPE.flowfield.withRecirculation(FLD);
  /* TWO POPULATIONS, BECAUSE THE VALVE HOLDS TWO KINDS OF WATER.

     The balance circuit is sealed -- equal pressure above and below the
     plug is what makes it balanced -- so that water genuinely never
     leaves, and it keeps procutaway's own reseeding. The water on the
     through path does leave, and it arrives from the line, so it must
     not be reseeded at all: stepFluid replaces any particle that steps
     outside the field, which is precisely where a handoff dies.
     parts.reseed is the hook for that -- returning null leaves the
     particle where it is and lets this page see that it has left. The
     integration is still the skin's. */
  const SEED = PC.fluidParticles(FLD, 1).reseed;
  /* The body of water in the valve, on procutaway's own terms: seeded
     across the field and reseeded as it ages, which is what keeps the
     throat populated. The through-markers below cannot do this job --
     forty feet of pipe against fourteen inches of valve means only a
     handful are inside at any instant, which is true and which would
     leave the trim empty in a drawing that exists to show the trim. */
  const BODY = PC.fluidParticles(FLD, 420);
  BODY.reseed = PC.fluidParticles(FLD, 1).reseed;
  const STILL = PC.fluidParticles(FLD, 900).filter(q => FLD.isStill(q.x, q.y));
  STILL.reseed = () => { for(let k=0;k<300;k++){ const q=SEED();
      if(q && FLD.isStill(q.x,q.y)) return q; } return null; };
  const THRU = PC.fluidParticles(FLD, 120).filter(q => !FLD.isStill(q.x, q.y));
  THRU.reseed = () => null;
  for(const q of THRU) q.life = Infinity;

  /* THE LINE RUNS AT THE SPEED THE FIELD SAYS THE LINE RUNS.
     Taken off the solved field at the inlet face rather than set here,
     so the water does not change pace crossing the flange and every
     change of speed after it is the VALVE's -- which is the one thing
     this page is for. */
  const IPS_LINE = (function(){
    let a=0,n=0;
    for(let y=-4;y<=4;y+=0.08){
      const x=PORT_IN+0.08, v=FLD.at(x,y);
      if(v && !FLD.isStill(x,y)){ a+=Math.hypot(v.vx,v.vy); n++; } }
    if(!n) throw new Error('no open cell at the inlet face');
    return a/n;
  })();
  /* Slow motion, declared -- the skin's own option. Water crosses this
     valve in about four milliseconds; played at life speed there is
     never anything in the picture. */
  const SLOWMO = 0.030;
  /* ONE PARCEL STYLE FOR THE WHOLE PICTURE.

     procutaway sizes a parcel in INCHES, which is right for the
     section rung and wrong here: at this page's 18.5 px/in it computes
     to a third of a pixel and gets clamped to the floor, so every
     parcel is the same invisible dot whatever it is doing. This page
     draws its own, in pixels, so that a parcel in the line and a
     parcel in the throat are the same object and the fast one is
     visibly bigger and brighter. Declared art, like the parcel size it
     replaces. */
  /* ---- PIPING FRICTION -------------------------------------------
     Water at the wall is slowed by it and water down the middle is
     not, so a pipe runs fastest on its centreline. The shape is the
     one-seventh power law, the usual turbulent pipe profile -- but
     drawn on a cube root instead, because at the real exponent the
     wall runs at 0.92 of the centre and nobody can see a 30 percent
     difference in a drifting dot. Exaggerated to about three to one,
     which is the same bargain the bore makes at x10: the SHAPE is the
     real one, the amount is turned up until it reads. The 1.30 keeps
     the average on the line velocity so the picture still carries its
     stated gpm. Both the speed and the parcel come from it, so the
     middle of the line runs faster and brighter than the wall. */
  const PROFILE = off => 1.30 * Math.pow(
    Math.max(0.04, 1 - Math.abs(off)/LINE.r), 1/3);

  for(let n=0;n<900;n++)
    P.push((function(){
      const lane = (Math.random()*2-1)*LINE.r*0.95;
      return { x: LINE_X0 + Math.random()*(LINE_X1-LINE_X0),
               y: VALVE_CY + lane, lane: lane, ips: 0 };
    })());

  const HOTREF = FLD.maxSpeedIps * 0.40;
  function parcel(px, py, ips){
    const hot = Math.max(0, Math.min(1, ips / HOTREF));
    g.beginPath(); g.arc(px, py, 1.7 + 2.3*hot, 0, 6.2832);
    g.fillStyle = PC.mix(PC.DARK.fluid, PC.DARK.fluidFast, hot);
    g.globalAlpha = 0.55 + 0.45*hot; g.fill();
  }

  function stepWater(dt){
    const t = dt * SLOWMO * QSCALE;
    for(const p of P){
      const ux = (p.x - VALVE_CX)/VPPI, uy = (VALVE_CY - p.y)/VPPI;
      let v = null;
      if(ux > PORT_IN && ux < PORT_OUT){
        v = FLD.at(ux, uy);
        if(!v){
          p.y += (VALVE_CY - p.y) * 0.12;
          const uy2 = (VALVE_CY - p.y)/VPPI;
          v = FLD.at(ux, uy2);
        }
      }
      if(v){
        p.x += v.vx * t * VPPI;
        p.y -= v.vy * t * VPPI;
        p.ips = Math.hypot(v.vx, v.vy);
        if(ux > PORT_OUT - 2.4){
          const dxv = Math.abs(v.vx) * t * VPPI;
          p.y += (VALVE_CY + p.lane - p.y) * Math.min(0.25, dxv/70);
        }
      } else {
        const off = p.y - VALVE_CY;
        p.ips = IPS_LINE * PROFILE(off);
        const dx = p.ips * t * VPPI;
        p.x += dx;
        p.y += (VALVE_CY + p.lane - p.y) * Math.min(0.25, dx/160);
      }
      if(p.x > LINE_X1){
        p.lane = (Math.random()*2-1)*LINE.r*0.95;
        p.x = LINE_X0; p.y = VALVE_CY + p.lane;
      }
    }
  }


  const tankDrops=[];
  const TK = EQUIP.find(e=>e.kind==='tank');
  const NOZ = { x: TK.w/2, y: TK.h*0.29 };
  for(let i=0;i<70;i++) tankDrops.push({
    x:(Math.random()-0.5)*(TK.w-18),
    y:-TK.h/2 + TK.h*0.32 + Math.random()*(TK.h*0.60),
    v:0.25+Math.random()*0.5 });
  function stepTank(dt){
    for(const d of tankDrops){
      const dx=NOZ.x-d.x, dy=NOZ.y-d.y, L=Math.hypot(dx,dy)||1;
      d.x += dx/L*22*d.v*dt; d.y += dy/L*22*d.v*dt;
      if(L<9){ d.x=(Math.random()-0.5)*(TK.w-18);
               d.y=-TK.h/2+TK.h*0.32+Math.random()*(TK.h*0.25); }
    }
  }
  function posOf(p){
    const run=p.run; let s=p.s%run.total; if(s<0)s+=run.total;
    for(const q of run.seg){ if(s<=q.d||q===run.seg[run.seg.length-1]){
      const t=q.d?s/q.d:0;
      const dx=q.b[0]-q.a[0], dy=q.b[1]-q.a[1], L=Math.hypot(dx,dy)||1;
      return [q.a[0]+dx*t - dy/L*p.off, q.a[1]+dy*t + dx/L*p.off]; }
      s-=q.d; }
    return run.seg[0].a;
  }

  /* ---- the things the pipe runs between ---------------------------
     Drawn here because a vessel outline is not a piping question and
     phys-view is right to stop at the pipe. The OUTLINES are art -- no
     standard we hold dimensions the shape of a tank. What happens
     inside them is not: the exchanger's temperatures are the thermal
     layer's answer for this duty, and the water leaving the tank is the
     same water the pipe carries. */
  const TH = ${JSON.stringify(THERMAL)};

  /* A temperature between the two declared fluid roles. Mixing two
     colours the skin already names is not naming a new one -- and the
     layer guard would catch a hex here, correctly. */
  function heat(t){
    const c=[parseInt(C.cold.slice(1,3),16),parseInt(C.cold.slice(3,5),16),
             parseInt(C.cold.slice(5,7),16)];
    const h=[parseInt(C.hot.slice(1,3),16),parseInt(C.hot.slice(3,5),16),
             parseInt(C.hot.slice(5,7),16)];
    const k=Math.max(0,Math.min(1,t));
    return 'rgb('+Math.round(c[0]+(h[0]-c[0])*k)+','
      +Math.round(c[1]+(h[1]-c[1])*k)+','+Math.round(c[2]+(h[2]-c[2])*k)+')';
  }

  function vessel(e, ts){
    const w=e.w, h=e.h;
    g.save(); g.translate(X(e.x), Y2(e.y)); g.scale(k,k);

    if(e.kind==='tank'){
      const r=w/2;
      /* THE SHELL */
      g.beginPath();
      g.moveTo(-r,-h/2+r*0.45); g.quadraticCurveTo(-r,-h/2,0,-h/2);
      g.quadraticCurveTo(r,-h/2,r,-h/2+r*0.45);
      g.lineTo(r,h/2-r*0.45); g.quadraticCurveTo(r,h/2,0,h/2);
      g.quadraticCurveTo(-r,h/2,-r,h/2-r*0.45); g.closePath();
      g.fillStyle=C.panel; g.fill();

      /* THE WATER IN IT, and a surface that is not a ruled line. The
         level itself is NOT modelled -- there is no level dynamics in
         this core -- so it does not wander. The surface moves because a
         free surface does; that much is art and is said to be. */
      const top=-h/2+h*0.30;
      g.save(); g.beginPath();
      g.moveTo(-r+3, top);
      for(let x=-r+3;x<=r-3;x+=6)
        g.lineTo(x, top + Math.sin((x*0.055)+ts*0.0012)*2.2);
      g.lineTo(r-3, h/2-6); g.lineTo(-r+3, h/2-6); g.closePath();
      g.clip();
      g.fillStyle=C.coldFill; g.globalAlpha=.75;
      g.fillRect(-r,-h/2,w,h); g.globalAlpha=1;

      /* drawn DOWN to the nozzle: the water leaves through the outlet,
         it does not appear at the end of a pipe */
      for(const d of tankDrops){
        g.beginPath(); g.arc(d.x,d.y,1.9,0,6.2832);
        g.fillStyle=C.fast; g.globalAlpha=.8; g.fill();
      }
      g.globalAlpha=1; g.restore();

      g.beginPath();
      g.moveTo(-r+3, top);
      for(let x=-r+3;x<=r-3;x+=6)
        g.lineTo(x, top + Math.sin((x*0.055)+ts*0.0012)*2.2);
      g.strokeStyle=C.ink; g.lineWidth=1.4; g.globalAlpha=.6; g.stroke();
      g.globalAlpha=1;

      /* the outlet nozzle, which is where the pipe actually starts */
      g.beginPath(); g.rect(r-2, h*0.22, 16, 14);
      g.fillStyle=T.body; g.fill();

      g.beginPath();
      g.moveTo(-r,-h/2+r*0.45); g.quadraticCurveTo(-r,-h/2,0,-h/2);
      g.quadraticCurveTo(r,-h/2,r,-h/2+r*0.45);
      g.lineTo(r,h/2-r*0.45); g.quadraticCurveTo(r,h/2,0,h/2);
      g.quadraticCurveTo(-r,h/2,-r,h/2-r*0.45); g.closePath();
      g.strokeStyle=T.body; g.lineWidth=3.5; g.stroke();

    } else if(e.kind==='valve'){
      /* THE REAL ONE, CUT OPEN, with the real actuator standing on it.

         Magnified against the run and it says so: 14.5 inches of
         face-to-face at the pipe's own scale is 25 px, which is a dash.
         The point of this page is the thing a technician never gets to
         see, so it is drawn at a size you can read.

         Everything in here is the traced geometry -- the same body, cage,
         windows, plug and seat the section rung cuts -- and the 657's own
         outlines off Figure 6. Nothing is a sketch of a valve. */
      g.restore();                       /* out of the equipment transform */
      const vk = RUN_PPI * VALVE_X * k;
      /* Hung on the BORE CENTRE. The traced body's opening sits about
         a tenth of an inch below its own origin, so drawing the valve
         at the netlist point put the pipe two pixels above the hole it
         feeds -- at both joints. */
      const vx0 = X(e.x), vy0 = Y2(e.y + ${BORE_MID}*VPPI);
      const VX = u => vx0 + u * vk, VY = v => vy0 - v * vk;
      const ring = rs => { g.beginPath();
        for(const r of rs){ if(!r||r.length<3) continue;
          g.moveTo(VX(r[0][0]),VY(r[0][1]));
          for(let i=1;i<r.length;i++) g.lineTo(VX(r[i][0]),VY(r[i][1]));
          g.closePath(); } };
      /* FILLED ONE RING AT A TIME, AND THIS IS THE WHOLE OF THE BLACK.

         Every ring used to go into ONE path and get a single fill.
         Canvas fills with the nonzero winding rule, so wherever two
         rings overlapped and happened to be wound in opposite
         directions the overlap was punched OUT -- a hole, showing the
         panel behind it. That is the black inside the valve: not
         missing water, water that was drawn and then cancelled. It
         survived every check because the geometry is complete; the
         defect was in how it was handed to the canvas.

         Filled separately, an overlap is simply painted twice. The
         outline is still stroked from one path, where winding does
         not matter. */
      const paint=(rs,fill,line)=>{ if(!rs||!rs.length) return;
        g.fillStyle=fill;
        for(const r of rs){ ring([r]); g.fill(); }
        if(line){ ring(rs); g.strokeStyle=line; g.lineWidth=1.1; g.stroke(); } };

      /* water first, then the metal over it: the plug is in front of what
         is behind it, and the section should hide what the section hides */
      /* Stroked in its own fill as well as filled: the wetted rings
         are separate polygons that abut, and an unstroked fill leaves
         a hairline of bare background along every seam between them --
         black slivers inside the valve, worst around the seat. This
         closes the seam; it does not add water anywhere a ring does
         not already reach. */
      paint(VG.water, C.coldFill, C.coldFill);

      /* The skin draws the water, the throat and the balance circuit.
         The placement object is the shape fic101 hands it: the valve,
         the scale, and where valve inches land on this canvas. */
      const pl = { valve: GV, scale: vk, ox: vx0, oy: vy0,
                   toPage: (ux,uy) => [vx0 + ux*vk, vy0 - uy*vk] };
      PC.drawValveFlow(g, pl, FLD, [], { theme: PC.DARK, wetted: WET });
      for(const q of BODY){ const v=SWIRL.at(q.x,q.y); if(!v) continue;
        parcel(VX(q.x), VY(q.y), Math.hypot(v.vx,v.vy)*QSCALE); }
      for(const q of STILL){ const v=SWIRL.at(q.x,q.y); if(!v) continue;
        parcel(VX(q.x), VY(q.y), Math.hypot(v.vx,v.vy)*QSCALE); }
      /* EVERY MARKER, IN ONE PASS.

         They were drawn in two -- those outside the body with the
         pipe, those inside it here -- and the split itself was the
         vertical line at each flange: two passes, two moments in the
         paint order, with the valve's own cavity fill laid down in
         between them. There is nothing to line up if there is only
         one pass. Drawn here, after the water and before the metal,
         so the trim still covers what the trim should cover. */
      for(const p of P) parcel(X(p.x), Y2(p.y), p.ips * QSCALE);
      g.globalAlpha=1;
      PC.drawBalance(g, pl, ${V_PCT}, { theme: PC.DARK, parts: STILL });
      g.globalAlpha=1;

      paint(VG.body,   T.body, C.ink);
      paint(VG.bonnet, T.body, C.ink);
      paint(VG.cage,   T.rim,  C.ink);
      paint(VG.win,    T.light, null);
      paint(VG.gasket, T.light, null);
      paint(VG.seat,   T.light, C.ink);
      paint(VG.plug,   T.trimY, C.ink);
      paint(VG.seal,   T.light, null);
      paint(VG.stem,   T.rim,  C.ink);

      /* AND THE 657 ON TOP OF IT -- on top, not over it. Its own mount is
         its origin, and the bonnet top is BONNET_TOP above the port, so
         everything it draws is lifted by that. Its extent reaches 1.8 in
         below the mount and that is correct: a yoke straddles a bonnet.

         Full or dome, because a correctly mounted 657 makes the assembly
         35 in tall against 14.5 wide, and at a size where the body is
         readable the actuator owns the page. The dome is the schematic
         answer -- stem and diaphragm case, no spring barrel -- and it is
         a CHOICE on the page rather than one I made for you. */
      const lift = BONNET_TOP;
      const AY = v => VY(v + lift);
      const aring = rs => { g.beginPath();
        for(const r of rs){ if(!r||r.length<3) continue;
          g.moveTo(VX(r[0][0]),AY(r[0][1]));
          for(let i=1;i<r.length;i++) g.lineTo(VX(r[i][0]),AY(r[i][1]));
          g.closePath(); } };
      const apaint=(rs,fill,line)=>{ if(!rs||!rs.length) return;
        aring(rs); g.fillStyle=fill; g.fill();
        if(line){ g.strokeStyle=line; g.lineWidth=1.1; g.stroke(); } };

      if(fullActuator){
        const A=[AC.yoke,AC.lower,AC.upper,AC.plate,AC.seat,AC.adj,
                 AC.stem,AC.conn,AC.ind];
        const AF=[T.body,T.light,T.light,T.rim,T.rim,T.rim,T.rim,T.rim,T.trimY];
        for(let i=0;i<A.length;i++) apaint(A[i],AF[i],C.ink);
        apaint(AC.spring, T.rim, C.ink);
      } else {
        /* the dome: what a P&ID draws, at the valve's own scale. The
           stem is the actuator's own stem outline so the two agree about
           where the thing is; only the casing is a symbol. */
        apaint(AC.conn, T.rim, C.ink);
        const R = (AC.extent.x1 - AC.extent.x0) / 2 * 0.62;
        const cy = 3.4;
        g.beginPath(); g.rect(VX(-0.55), AY(cy), (1.1)*RUN_PPI*VALVE_X*k,
                              (0 - cy)*RUN_PPI*VALVE_X*k);
        g.fillStyle=T.rim; g.fill(); g.strokeStyle=C.ink; g.lineWidth=1.1;
        g.stroke();
        g.beginPath();
        g.ellipse(VX(0), AY(cy + R*0.42), R*RUN_PPI*VALVE_X*k,
                  R*0.52*RUN_PPI*VALVE_X*k, 0, Math.PI, 0);
        g.fillStyle=T.light; g.fill();
        g.strokeStyle=C.ink; g.lineWidth=1.4; g.stroke();
        g.beginPath();
        g.moveTo(VX(-R), AY(cy + R*0.42)); g.lineTo(VX(R), AY(cy + R*0.42));
        g.stroke();
      }

      g.save();                          /* the caller restores once more */
    } else {
      /* THE EXCHANGER, with the process inside it rather than a box.
         Counter-flow: the rundown enters hot on the right and leaves at
         ${'$'}{TH.hotOut} F on the left, our water passes the other way and
         comes out at ${'$'}{TH.coldOut}. The colours ARE those numbers. */
      g.beginPath(); g.rect(-w/2,-h/2,w,h);
      g.fillStyle=C.panel; g.fill();
      const N=5;
      for(let i=0;i<N;i++){
        const yy=-h/2 + h*(i+1)/(N+1);
        for(let xs=0;xs<14;xs++){
          const f=xs/13;                       /* 0 = left = cold end */
          g.beginPath();
          g.moveTo(-w/2+8 + (w-16)*f, yy);
          g.lineTo(-w/2+8 + (w-16)*(f+1/13), yy);
          g.strokeStyle=heat(f*0.85+0.15);
          g.lineWidth=5; g.stroke();
        }
      }
      g.beginPath(); g.rect(-w/2,-h/2,w,h);
      g.strokeStyle=T.body; g.lineWidth=3.5; g.stroke();
      g.fillStyle=C.label; g.font='9px ui-monospace,Consolas,monospace';
      g.textAlign='right'; g.fillText(TH.hotOut.toFixed(0)+'°F', -w/2-4, -h/2+12);
      g.textAlign='left';  g.fillText(TH.hotIn.toFixed(0)+'°F',  w/2+4, -h/2+12);
    }
    g.restore();

    g.fillStyle=C.ink; g.font='13px ui-monospace,Consolas,monospace';
    g.textAlign='center';
    g.fillText(e.tag, X(e.x), Y2(e.y+e.h/2)+22);
    g.fillStyle=C.label; g.font='11px system-ui,sans-serif';
    g.fillText(e.note, X(e.x), Y2(e.y+e.h/2)+38);
  }

  function bubble(i){
    const R=21;
    g.beginPath(); g.arc(X(i.x),Y2(i.y),R,0,6.2832);
    g.fillStyle=C.panel; g.fill();
    g.strokeStyle=C.ink; g.lineWidth=1.6; g.stroke();
    if(i.mount==='panel'){ g.beginPath();
      g.moveTo(X(i.x)-R,Y2(i.y)); g.lineTo(X(i.x)+R,Y2(i.y));
      g.strokeStyle=C.ink; g.lineWidth=1.2; g.stroke(); }
    const two=i.tag.split('-');
    g.fillStyle=C.ink; g.textAlign='center';
    g.font='10.5px ui-monospace,Consolas,monospace';
    g.fillText(two[0], X(i.x), Y2(i.y)-3);
    g.fillText(two[1], X(i.x), Y2(i.y)+10);
  }

  function frame(ts){
    requestAnimationFrame(frame);
    const dt=Math.min(0.05,(ts-last)/1000)||0.016; last=ts;
    g.clearRect(0,0,cv.width,cv.height);

    if(running){ stepTank(dt); stepWater(dt);
      PC.stepFluid(BODY,  SWIRL, dt, { timeScale: SLOWMO*QSCALE });
      PC.stepFluid(STILL, SWIRL, dt, { timeScale: SLOWMO*QSCALE });
      PC.stepFluid(THRU,  SWIRL, dt, { timeScale: SLOWMO*QSCALE }); }

    /* THE PIPE FIRST, THEN ITS WATER, THEN THE THINGS IT RUNS BETWEEN.
       Drawn the other way round the pipe lay over the valve and the
       water ran across the face of the tank -- so nothing was feeding
       anything, it was all just stacked. Equipment last means a vessel
       covers the joint, which is what a vessel does. */
    g.save(); g.translate(X(0),Y2(0)); g.scale(k,k);
    LPE.phys(pp).draw(g, T);
    g.restore();

    /* THE SAME PARCEL THE SKIN WOULD DRAW, AT THE LINE'S OWN SPEED.

       drawValveFlow colours, fades and sizes every parcel from
       hot = speed / reference, so a parcel in the line and a parcel in
       the valve only match if the line's is worked out the same way.
       This page was drawing the line at a flat hot = 1 -- the colour
       and brightness of water in the throat -- which is why the two
       sides of the flange never matched. The line runs at one speed,
       so its hot is one number. */
    /* The water is drawn once, with the valve -- see the note there. */
    g.globalAlpha=1;

    EQUIP.forEach(e=>vessel(e, ts));

    if(showInstr) for(const s of SIGNALS){
      g.beginPath();
      g.moveTo(X(s.pts[0][0]),Y2(s.pts[0][1]));
      for(let i=1;i<s.pts.length;i++) g.lineTo(X(s.pts[i][0]),Y2(s.pts[i][1]));
      g.strokeStyle = s.kind==='cascade' ? C.trim : C.label;
      g.lineWidth = s.kind==='cascade' ? 2.4 : 1.6;
      g.setLineDash(s.kind==='command' ? [7,5] : [4,4]);
      g.stroke(); g.setLineDash([]);
    }
    if(showInstr){
      INSTR.forEach(bubble);
      g.fillStyle=C.trim; g.textAlign='left';
      g.font='11px ui-monospace,Consolas,monospace';
      g.fillText('setpoint, not a valve signal', X(${X_FV})+30, Y2(${TOP})-10);
    }

    document.getElementById('rd').textContent =
      '${GPM} gpm \\u00b7 ' + FT_S.toFixed(1) + ' ft/s in NPS 6 \\u00b7 bore '
      + '\\u00d7' + (EX? EX.factor.toFixed(0):'?') + ' against length';
  }
  /* the valve is a door: click it and go inside */
  cv.style.cursor='default';
  const VALVE_E = EQUIP.find(e=>e.href);
  function overValve(ev){
    const r=cv.getBoundingClientRect();
    const px=(ev.clientX-r.left)*cv.width/r.width;
    const py=(ev.clientY-r.top)*cv.height/r.height;
    return Math.abs(px-X(VALVE_E.x))<VALVE_E.w*k*0.62 &&
           Math.abs(py-Y2(VALVE_E.y))<VALVE_E.h*k*0.62;
  }
  cv.addEventListener('mousemove', ev=>{
    cv.style.cursor = overValve(ev) ? 'pointer' : 'default'; });
  cv.addEventListener('click', ev=>{
    if(overValve(ev)) window.location.href = VALVE_E.href; });

  let fullActuator = true;
  document.getElementById('act').addEventListener('click', function(){
    fullActuator=!fullActuator;
    this.textContent = fullActuator ? 'Dome only' : 'Full 657';
    this.classList.toggle('on', fullActuator);
  });

  let showInstr = true;
  document.getElementById('instr').addEventListener('click', function(){
    showInstr=!showInstr;
    this.textContent = showInstr ? 'Hide the loops' : 'Show the loops';
    this.classList.toggle('on', showInstr);
  });

  document.getElementById('play').addEventListener('click', function(){
    running=!running; this.textContent=running?'Pause':'Play';
    this.classList.toggle('on',running);
  });
  if(window.matchMedia &&
     window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    running=false; const b=document.getElementById('play');
    b.textContent='Play'; b.classList.remove('on'); }
  requestAnimationFrame(frame);
})();
</script>
`;

fs.writeFileSync(path.join(OUT, 'index.html'),
                 PAGE.replace(/\r\n/g, '\n'), 'utf8');

console.log('\nTHE CASCADE AS A PLANT\n');
console.log('  pipe        NPS 6 Sch 40, bore ' + PIPE.dims.bore + ' in, ' +
            RUN_FT + ' ft');
console.log('  service     ' + GPM + ' gpm  ->  ' + FT_S.toFixed(1) + ' ft/s');
console.log('  bore drawn  x' + (ex ? ex.factor.toFixed(1) : '?') +
            ' against length, declared');
console.log('  equipment   ' + EQUIP.map(e => e.tag).join(', ') +
            '   (drawn here, labelled ART)');
/* outer first: TIC-102 sets FIC-101's setpoint, not the other way round,
   and a status line that reads it backwards is the one place this page
   must not be casual */
console.log('  loops       TIC-102 (outer) over FIC-101 (inner), ' +
            'cascade link drawn');
console.log('\nwrote lab/cascade/index.html  --  serve it over HTTP\n');
