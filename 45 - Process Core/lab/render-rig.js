/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   The piping rig, cross-checked against LPE's, then carried further.
   Run: node lab/render-rig.js                                        */
'use strict';

/* ---------------- THE RIG, AND WHY THERE ARE TWO OF THEM -------------

   Lunar Process Engineer has a reference rig -- `50 - Lunar Process
   Engineer/reference/cve-reference-rig.html` -- and its own README says
   what it is for: it exists "precisely to settle" the piping, so that two
   levels of the game cannot drift into different rigs. Everything there
   that draws pipe takes its answers from it.

   This is the same rig, computed from the Process Core, and it is built
   the same way ON PURPOSE. Two rigs that answer the same question from
   different stacks are worth having only if somebody actually compares
   them; two that are never compared are just two rigs, and the day they
   disagree nobody finds out. So the first thing on the page is the
   comparison, and it fails loudly.

   THE SHARED CASE, taken verbatim from LPE's `reference/friction.js`:

       36 gpm, 40 ft of Schedule 40, 60 psig available at the manifold

   Darcy-Weisbach with the Swamee-Jain explicit friction factor and
   commercial-steel roughness, which is what that file does. The bores,
   though, come from THIS repository's catalogue, which refuses to load
   unless each dimension matches what ASME B36.10M printed. That is the
   whole cross-check: two independent transcriptions of one table, and a
   page that says so when they differ.

   THEN IT GOES FURTHER, because a cross-check alone would under-sell the
   stack. The sections after it are the things the game's rig cannot
   answer and this one can: fittings that are catalogue rows carrying the
   dimension as the standard printed it, ISA-75.01.01 sizing with the
   piping geometry factor and the choked-drop check, and the real trim
   characteristic off Catalog 12.

   Fitting RESISTANCE is not among them. The machinery is there and is
   opt-in, but nothing we hold publishes K for these fittings, so no
   fitting declares one and the page says so. A cross-check whose purpose
   is catching plausible numbers must not carry one of its own.

   WHAT THIS FILE MAY NOT DO. It is lab tooling, not a layer. Pipe
   friction is NOT in the Process Core -- there is no Darcy-Weisbach
   anywhere in `src/` -- and this file computing it does not put it there.
   That gap is stated on the page rather than papered over, because a rig
   that quietly implements the thing it is testing is not a test.        */

const fs = require('fs');
const path = require('path');

global.window = {};
for (const m of ['catalogue', 'sizing', 'trim', 'geometry'])
  require(path.join(__dirname, '..', 'src', m + '.js'));
const LPE = global.window.LPE;

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));

/* ---- the shared case, as LPE's friction.js states it ---------------- */
const CASE = {
  gpm: 36, runFt: 40, availPsig: 60,
  nu: 1.08e-5,          /* ft2/s, water */
  eps: 0.00015,         /* ft, commercial steel */
  g: 32.174,
};
const GPM_TO_CFS = 1 / 448.831;

/* LPE's own table, copied verbatim from `reference/friction.js` so the
   comparison is against what that file SAYS, not against a re-derivation
   of it. If the game's rig changes, this disagrees and says so. */
const LPE_PIPE = [
  ['1/2', 0.622, 0.00211], ['3/4', 0.824, 0.00370], ['1', 1.049, 0.00600],
  ['1-1/4', 1.380, 0.01039], ['1-1/2', 1.610, 0.01414], ['2', 2.067, 0.02330],
  ['2-1/2', 2.469, 0.03325], ['3', 3.068, 0.05134],
];
const NPS_ID = { '1/2': 'NPS0.5', '3/4': 'NPS0.75', '1': 'NPS1',
                 '1-1/4': 'NPS1.25', '1-1/2': 'NPS1.5', '2': 'NPS2',
                 '2-1/2': 'NPS2.5', '3': 'NPS3' };

/* THE CORRELATION HAS A DOMAIN AND IT IS NOT ALL OF THEM. Swamee-Jain is
   an explicit fit to Colebrook, and Colebrook describes TURBULENT flow in
   a rough pipe. Below about Re 2300 the flow is laminar and the friction
   factor is 64/Re exactly -- a different physics, not a worse fit. Between
   2300 and 4000 nothing describes it: the flow is deciding, and a number
   put in that band is a guess wearing four decimal places.

   The first version of this rig applied Swamee-Jain to every row without
   asking. It happened to be right, because everything here is turbulent by
   a wide margin -- but it was right by luck, and a rig cannot be right by
   luck about the thing it is checking. */
const LAMINAR = 2300, TURBULENT = 4000;
function regimeOf(Re) {
  if (Re < LAMINAR) return 'laminar';
  if (Re < TURBULENT) return 'transitional';
  return 'turbulent';
}
function frictionFactor(Re, relEps) {
  const r = regimeOf(Re);
  if (r === 'laminar') return { f: 64 / Re, regime: r, how: '64/Re, exact' };
  if (r === 'transitional')
    return { f: null, regime: r,
             how: 'no correlation applies between Re 2300 and 4000' };
  return {
    f: 0.25 / Math.pow(
      Math.log10(relEps / 3.7 + 5.74 / Math.pow(Re, 0.9)), 2),
    regime: r, how: 'Swamee-Jain, explicit fit to Colebrook',
  };
}

/* ---- 1 - the cross-check ------------------------------------------- */
const rows = [];
let disagreements = 0;
for (const [label, lpeBore, lpeArea] of LPE_PIPE) {
  const id = 'PIPE/' + NPS_ID[label] + '/S40';
  let coreBore = null;
  try { coreBore = CAT.part(id).dims.bore; } catch (e) { coreBore = null; }

  const agree = coreBore !== null && Math.abs(coreBore - lpeBore) < 5e-4;
  if (!agree) disagreements++;

  /* Computed from the CORE's bore, which is the point: if the two tables
     ever differ, the numbers differ with them and the disagreement is
     visible rather than theoretical. */
  const bore = coreBore === null ? lpeBore : coreBore;
  const areaFt2 = Math.PI * Math.pow(bore / 12, 2) / 4;
  const D = bore / 12;
  const v = (CASE.gpm * GPM_TO_CFS) / areaFt2;
  /* The Core's own, rather than my arithmetic: it takes the bore in
     INCHES and refuses a non-positive viscosity, which is the layer
     having an opinion about exactly the two things that go wrong here. */
  const Re = LPE.sizing.reynolds(v, bore, CASE.nu);
  const ff = frictionFactor(Re, CASE.eps / D);
  const f = ff.f;
  const hf = f === null ? null : f * (CASE.runFt / D) * v * v / (2 * CASE.g);
  const psi = hf === null ? null : hf * 0.43353;

  rows.push({
    label, id, lpeBore, coreBore, agree,
    lpeArea, areaFt2,
    v, Re, f, hf, psi, regime: ff.regime, how: ff.how,
    left: psi === null ? null : CASE.availPsig - psi,
  });
}

/* ---- 1b - what the viscosity is doing, and where laminar would be ----

   Re = vD/nu, so every friction number on this page is a function of
   viscosity, and viscosity is a function of TEMPERATURE. Neither rig says
   what temperature its nu belongs to. The Core is stricter than both: it
   refuses to default a viscosity at all -- `flowfield.js` says "No
   default: water at one temperature" and throws rather than guess.

   So this section does not invent a viscosity-temperature table. We hold
   no source for one, and a plausible one is exactly what this page exists
   to refuse. What it does instead is show the SENSITIVITY: the same case
   at viscosities either side of the one assumed, so a reader can see how
   much the answer moves, and how far any of it is from changing regime. */
const NU = CASE.nu;
const sens = [0.5, 1.0, 2.0].map(k => {
  const nu = NU * k;
  const out = [];
  for (const r of rows) {
    const D = r.coreBore / 12;
    const Re = LPE.sizing.reynolds(r.v, r.coreBore, nu);
    const ff = frictionFactor(Re, CASE.eps / D);
    out.push({ Re, regime: ff.regime,
      psi: ff.f === null ? null
        : ff.f * (CASE.runFt / D) * r.v * r.v / (2 * CASE.g) * 0.43353 });
  }
  return { k, nu, rows: out };
});

/* how far the gentlest row is from going laminar at all */
const slowest = rows.reduce((a, b) => (a.Re < b.Re ? a : b));
const nuForLaminar = slowest.v * (slowest.coreBore / 12) / LAMINAR;

/* ---- 2 - what the Core adds ----------------------------------------- */

/* Fitting resistance, with a basis. The game's rig has pipe and nothing
   in it; this catalogue holds fittings whose K is a sourced number. */
const fittings = [];
for (const id of (CAT.ids ? CAT.ids() : [])) {
  if (!/FITTING|ELBOW|TEE|REDUCER/i.test(id)) continue;
  let p; try { p = CAT.part(id); } catch (e) { continue; }
  const r = p.resistance || null;
  fittings.push({
    id,
    k: r && r.K !== undefined ? r.K : null,
    centreToEnd: p.dims && p.dims.centreToEnd !== undefined
      ? p.dims.centreToEnd : null,
    asPrinted: p.asPrinted && p.asPrinted.centreToEnd
      ? p.asPrinted.centreToEnd : null,
  });
}

/* The valve, sized properly, on the same water. ISA-75.01.01 rather than
   q = Cv sqrt(dP/SG): the piping geometry factor and the choked-drop
   check are the two things that separate a sizing calculation from a
   square root, and neither exists in the game's rig. */
const VALVE_ID = 'VALVE/ED/NPS1.5/P1.875/T0.75/EQPCT';
let sized = null, trimRows = [];
try {
  const V = CAT.part(VALVE_ID);
  const svc = { q: CASE.gpm, P1: 60 + 14.7, P2: 45 + 14.7,
                sg: 1.0, Pv: 0.256, Pc: 3200.1 };
  sized = LPE.sizing.sizeLiquid(
    svc, { Cv: V.cv[V.cv.length - 1], FL: V.FL, d: 1.5 }, 1.610);
  sized.valve = VALVE_ID;
  sized.service = svc;

  /* and what the trim actually does, which is the other thing a square
     root cannot tell you */
  const curve = LPE.trim.fromCurve(
    { curve: V.cv, characterisedBy: V.characterisedBy });
  for (const pct of [10, 25, 50, 75, 100]) {
    const cv = curve.cvAt ? curve.cvAt(pct) : null;
    trimRows.push({ pct, cv,
      share: cv === null ? null : cv / V.cv[V.cv.length - 1] });
  }
} catch (e) {
  sized = { error: e.message };
}

/* ---- the page -------------------------------------------------------- */
const OUT = path.join(__dirname, 'rig');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

require(path.join(__dirname, '..', 'skins', 'procutaway.js'));
const D = global.window.LPE.skins.procutaway.DARK;

const n = (x, d) => x === null || x === undefined || !isFinite(x)
  ? '&mdash;' : Number(x).toFixed(d);

const crossRows = rows.map(r => `
  <tr class="${r.agree ? '' : 'bad'}">
    <td>${r.label}</td>
    <td class="num">${n(r.lpeBore, 3)}</td>
    <td class="num">${r.coreBore === null ? 'not held' : n(r.coreBore, 3)}</td>
    <td class="num">${r.agree ? 'agree' : 'DIFFER'}</td>
    <td class="num">${n(r.v, 2)}</td>
    <td class="num">${Math.round(r.Re).toLocaleString('en-US')}</td>
    <td class="num">${n(r.f, 4)}</td>
    <td class="src">${r.regime}</td>
    <td class="num">${r.psi === null ? 'no answer' : n(r.psi, 1)}</td>
    <td class="num ${r.left !== null && r.left > 0 ? '' : 'bad'}">${
      r.left === null ? '&mdash;'
        : r.left > 0 ? n(r.left, 1) + ' psig' : 'starved'}</td>
  </tr>`).join('');

/* What a fitting actually carries here: GEOMETRY, as printed, beside the
   canonical value the loader re-derives it from. Resistance is a separate
   question and the answer is that we do not hold one -- said below rather
   than filled in with a plausible K. */
const fitRows = fittings.map(f => `
  <tr><td>${f.id}</td>
      <td class="num">${f.centreToEnd === null ? '&mdash;'
        : n(f.centreToEnd, 3) + ' in'}</td>
      <td class="src">${f.asPrinted || '&mdash;'}</td>
      <td class="num">${f.k === null ? 'none' : n(f.k, 2)}</td></tr>`).join('');

const trimTable = trimRows.length ? trimRows.map(t => `
  <tr><td class="num">${t.pct}%</td>
      <td class="num">${n(t.cv, 1)}</td>
      <td class="num">${t.share === null ? '&mdash;' : n(100 * t.share, 1) + '%'}</td>
      <td class="num">${n(t.pct, 0)}%</td></tr>`).join('')
  : '<tr><td colspan="4" class="src">trim curve unavailable</td></tr>';

const PAGE = `<!doctype html>
<meta charset="utf-8">
<title>The piping rig, cross-checked</title>
<style>
  :root { --ground:${D.ground}; --panel:${D.panel}; --hair:${D.hairline};
          --ink:${D.ink}; --label:${D.label}; --accent:${D.fluidFast};
          /* There is no "warn" role in this skin and this file must not
             invent one -- the layer guard caught exactly that, and was
             right: a hex here is chrome leaking down a layer. A
             disagreement is marked with the TRIM colour, which the skin
             does define and which nothing else on this page uses. */
          --warn:${D.trimRim}; }
  *{box-sizing:border-box}
  body{margin:0;background:var(--ground);color:var(--ink);
    font:14px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}
  .wrap{max-width:1180px;margin:0 auto;padding:30px 24px 60px}
  h1{font-size:26px;margin:0 0 8px;letter-spacing:-.01em}
  h2{font-size:12px;letter-spacing:.12em;text-transform:uppercase;
     color:var(--label);margin:40px 0 6px;
     font-family:ui-monospace,Consolas,monospace}
  p{color:var(--label);max-width:76ch;margin:0 0 14px}
  p.lede{color:var(--ink)}
  table{width:100%;border-collapse:collapse;background:var(--panel);
    border:1px solid var(--hair);border-radius:3px;overflow:hidden;
    margin:0 0 6px}
  th{font:11px ui-monospace,Consolas,monospace;letter-spacing:.07em;
    text-transform:uppercase;color:var(--label);text-align:left;
    padding:9px 11px;border-bottom:1px solid var(--hair)}
  td{padding:8px 11px;border-bottom:1px solid var(--hair);font-size:13.5px}
  tr:last-child td{border-bottom:none}
  td.num{font-family:ui-monospace,Consolas,monospace;
    font-variant-numeric:tabular-nums;text-align:right}
  td.src{color:var(--label);font-size:12px}
  tr.bad td,td.bad{color:var(--warn)}
  .verdict{border:1px solid var(--hair);border-left:3px solid var(--accent);
    background:var(--panel);border-radius:3px;padding:14px 16px;margin:0 0 18px}
  .verdict.bad{border-left-color:var(--warn)}
  .verdict b{color:var(--ink)}
  .gap{border:1px solid var(--hair);border-left:3px solid var(--warn);
    background:var(--panel);border-radius:3px;padding:14px 16px;margin:14px 0 0}
  code{font-family:ui-monospace,Consolas,monospace;font-size:12.5px;
    color:var(--accent)}
</style>
<div class="wrap">

<h1>The piping rig, cross-checked</h1>
<p class="lede">Lunar Process Engineer has a reference rig, and its README
  says it exists <em>&ldquo;precisely to settle&rdquo;</em> the piping so two
  levels cannot drift into different rigs. This is the same rig computed from
  the Process Core. Two rigs answering one question from different stacks are
  only worth having if somebody compares them &mdash; so that is the first
  thing here, and it fails loudly.</p>

<h2>1 &middot; the shared case</h2>
<p><b>${CASE.gpm} gpm, ${CASE.runFt} ft of Schedule 40,
  ${CASE.availPsig} psig available at the manifold.</b>
  Taken verbatim from <code>reference/friction.js</code>: Darcy-Weisbach with
  the Swamee-Jain explicit friction factor, commercial-steel roughness
  &epsilon;&nbsp;=&nbsp;${CASE.eps}&nbsp;ft. The bores come from
  <em>this</em> repository&rsquo;s catalogue, which will not load unless each
  dimension matches what ASME&nbsp;B36.10M printed. Two independent
  transcriptions of one table.</p>

<div class="verdict ${disagreements ? 'bad' : ''}">
  ${disagreements
    ? `<b>${disagreements} of ${rows.length} bores DISAGREE.</b> One of the two
       transcriptions is wrong. Nothing downstream of either rig can be
       trusted until this is settled.`
    : `<b>All ${rows.length} bores agree</b> to better than half a thousandth
       of an inch. The game&rsquo;s rig and this one rest on the same table,
       and the velocities, Reynolds numbers and losses below follow from it.`}
</div>

<table>
  <tr><th>NPS</th><th>LPE bore</th><th>Core bore</th><th></th>
      <th>v ft/s</th><th>Re</th><th>f</th><th>regime</th><th>loss psi</th>
      <th>left at Bay 4</th></tr>
  ${crossRows}
</table>
<p>Everything from <code>v</code> rightward is computed here from the Core
  bore. The exercise this case comes from turns on the last column: pick the
  pipe before you run the bay and the bay is starved.</p>

<div class="gap">
  <b>And the honest gap: pipe friction is not in the Process Core.</b>
  There is no Darcy-Weisbach anywhere in <code>src/</code>. This page computes
  it, and a lab page computing something does not put it in the stack. The
  Core holds the bores; the friction above is the rig&rsquo;s arithmetic, not
  a layer&rsquo;s answer. A rig that quietly implements the thing it is
  testing is not a test.
</div>

<h2>1b &middot; temperature, and where laminar would be</h2>
<p>Every friction number above is a function of viscosity, and viscosity is a
  function of <b>temperature</b>. Neither rig says what temperature its
  &nu;&nbsp;=&nbsp;${NU}&nbsp;ft&sup2;/s belongs to. The Core is stricter than
  both of them: <code>flowfield.js</code> refuses to default a viscosity at
  all &mdash; <em>&ldquo;No default: water at one temperature&rdquo;</em>
  &mdash; and throws rather than guess.</p>
<p>So this does not invent a viscosity-temperature table. We hold no source
  for one, and a plausible table is exactly what this page exists to refuse.
  Here is the sensitivity instead: the same case either side of the assumed
  viscosity, so you can see how much the answer moves and whether anything
  changes regime.</p>
<table>
  <tr><th>&nu;</th><th>vs assumed</th>${
    rows.map(r => '<th>' + r.label + '</th>').join('')}</tr>
  ${sens.map(sv => `<tr>
    <td class="num">${sv.nu.toExponential(2)}</td>
    <td class="src">${sv.k === 1 ? 'as assumed'
      : (sv.k < 1 ? 'thinner &mdash; hotter' : 'thicker &mdash; colder')
        + ' &times;' + sv.k}</td>
    ${sv.rows.map(c => '<td class="num">' +
      (c.psi === null ? '&mdash;' : n(c.psi, 1)) + '</td>').join('')}
  </tr>`).join('')}
</table>
<p>Loss in psi over the ${CASE.runFt}&nbsp;ft run. Doubling the viscosity
  moves the small bores by a few per cent and the large ones hardly at all
  &mdash; which is what fully rough turbulent flow does, and is worth seeing
  rather than being told.</p>
<div class="gap">
  <b>Nothing here is anywhere near laminar, and that is a finding rather than
  a relief.</b> The gentlest row is the ${slowest.label}&nbsp;at
  Re&nbsp;${Math.round(slowest.Re).toLocaleString('en-US')}. To bring it below
  Re&nbsp;${LAMINAR} the fluid would need
  &nu;&nbsp;&asymp;&nbsp;${nuForLaminar.toExponential(2)}&nbsp;ft&sup2;/s
  &mdash; ${Math.round(nuForLaminar / NU)} times thicker than the water
  assumed. Water does not get there; a heavy oil would. The rig applies
  Swamee-Jain, which describes <em>turbulent</em> flow in a rough pipe, and
  the first version of this page applied it to every row without asking. It
  was right &mdash; by luck. A rig cannot be right by luck about the thing it
  is checking, so the regime is now classified per row, laminar takes
  64/Re exactly, and the band between Re&nbsp;${LAMINAR} and
  ${TURBULENT} returns <em>no answer at all</em> rather than a guess
  wearing four decimal places.
</div>

<h2>2 &middot; what this stack adds &mdash; fittings that are real parts</h2>
<p>The game&rsquo;s rig has pipe and nothing in it. A run is elbows, tees and
  reducers, and here each one is a catalogue row with its dimension carried
  <em>as the standard printed it</em> beside the canonical value &mdash; the
  loader re-derives one from the other and refuses the catalogue if they
  disagree. That is what makes a geometry claim checkable rather than
  asserted.</p>
<table>
  <tr><th>part</th><th>centre to end</th><th>as printed</th>
      <th>resistance K</th></tr>
  ${fitRows}
</table>
<div class="gap">
  <b>None of them declares a resistance.</b> ${fittings.length} fittings, no
  K values. The dynamics layer will use a sourced resistance when a component
  declares one &mdash; that machinery exists and is opt-in &mdash; but nothing
  we hold publishes K for these, so nothing does. The loss through a fitting
  is therefore <em>not</em> in the Core&rsquo;s answer for this rig, and this
  page would rather say so than carry a plausible number into a cross-check
  whose whole purpose is catching plausible numbers.
</div>

<h2>3 &middot; sizing, which is not a square root</h2>
${sized && !sized.error ? `
<p>The same ${CASE.gpm}&nbsp;gpm of water through an
  <code>${sized.valve}</code>, by <b>ISA-75.01.01</b>: the piping geometry
  factor for a valve smaller than its line, and a check on whether the drop
  is choked. <code>q = Cv&radic;(&Delta;P/SG)</code> has neither, and is
  honest only well away from both.</p>
<table>
  <tr><th>quantity</th><th>value</th><th>what it is</th></tr>
  <tr><td>required Cv</td><td class="num">${n(sized.Cv, 2)}</td>
      <td class="src">at the service drop</td></tr>
  <tr><td>F<sub>P</sub></td><td class="num">${n(sized.Fp, 3)}</td>
      <td class="src">piping geometry factor &mdash; reduced-size installation</td></tr>
  <tr><td>choked drop</td><td class="num">${n(sized.dPchoked, 1)} psi</td>
      <td class="src">above this the flow stops responding to more drop</td></tr>
  <tr><td>choked?</td><td class="num">${sized.choked ? 'YES' : 'no'}</td>
      <td class="src">${sized.choked
        ? 'the service is past it'
        : 'the service drop is below the choked figure'}</td></tr>
</table>` : `
<p class="gap">Sizing could not be run for this case:
  ${sized ? sized.error : 'no valve'}. Stated rather than skipped.</p>`}

<h2>4 &middot; and what the trim actually does</h2>
<p>An equal-percentage cage is not linear and is not close to it. This is the
  published curve from Fisher Catalog&nbsp;12, read at every quarter of
  travel &mdash; the difference between the two columns is the whole reason
  characterisation exists.</p>
<table>
  <tr><th>travel</th><th>Cv</th><th>share of rated flow</th>
      <th>what a linear assumption would say</th></tr>
  ${trimTable}
</table>

<h2>5 &middot; what this rig does NOT answer</h2>
<p>Written down because the useful half of a rig is the half that says where
  it stops.</p>
<table>
  <tr><th>question</th><th>where it stands</th></tr>
  <tr><td>pipe friction</td>
      <td class="src">computed on this page, <b>not in the Core</b>. No
        Darcy-Weisbach in <code>src/</code>.</td></tr>
  <tr><td>fitting resistance</td>
      <td class="src">the layer is there and is opt-in; no fitting we hold
        publishes a K, so none declares one.</td></tr>
  <tr><td>viscosity vs temperature</td>
      <td class="src">no source held. Sensitivity shown above; no table
        invented.</td></tr>
  <tr><td>gas and compressible flow</td>
      <td class="src"><b>not in this stack at all.</b> The sizing layer is
        <code>sizeLiquid</code> and nothing else &mdash; no expansion factor,
        no critical pressure ratio. LPE&rsquo;s rig has a GAS SERVICE &mdash;
        AIR section; this one cannot answer it and does not pretend to.</td></tr>
  <tr><td>two-phase, flashing downstream</td>
      <td class="src">the sizing layer reports the choked drop and the
        cavitation margin; what happens after the vena contracta is not
        modelled.</td></tr>
</table>

<h2>6 &middot; where to look next</h2>
<p>The game&rsquo;s rig is at
  <code>50 - Lunar Process Engineer/reference/cve-reference-rig.html</code>
  and carries what this one does not: the turbulent velocity profile drawn
  rather than tabulated, the reducer / throat / expander behaviour, the gas
  service, and the cavitation-versus-flashing distinction. The two are meant
  to be read together, which is why the first section here exists.</p>

</div>
`;

fs.writeFileSync(path.join(OUT, 'index.html'),
                 PAGE.replace(/\r\n/g, '\n'), 'utf8');

console.log('\nTHE SHARED CASE  ' + CASE.gpm + ' gpm, ' + CASE.runFt +
            ' ft Sch 40, ' + CASE.availPsig + ' psig\n');
console.log('  NPS      LPE bore   Core bore          v ft/s   loss psi   left');
for (const r of rows) {
  console.log('  ' + r.label.padEnd(8) +
    r.lpeBore.toFixed(3).padStart(9) +
    (r.coreBore === null ? 'not held' : r.coreBore.toFixed(3)).padStart(12) +
    (r.agree ? '  agree' : '  DIFFER').padEnd(10) +
    r.v.toFixed(2).padStart(8) +
    r.psi.toFixed(1).padStart(11) +
    (r.left > 0 ? r.left.toFixed(1) + ' psig' : 'starved').padStart(12));
}
console.log('\n  ' + (disagreements
  ? disagreements + ' BORES DISAGREE -- one transcription is wrong'
  : 'all ' + rows.length + ' bores agree with LPE\'s rig'));
console.log('  fittings with a declared resistance: ' +
  fittings.filter(f => f.k !== null).length + ' of ' + fittings.length);
console.log('\nwrote lab/rig/index.html  --  serve it over HTTP\n');
