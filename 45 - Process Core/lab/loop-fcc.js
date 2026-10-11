/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   One real refinery service, built end to end from held documents, and
   rendered. Run: node lab/loop-fcc.js                                */
/* ---------------- FCC PRIMARY ABSORBER FEED -------------------------

   THE FIRST LOOP IN WHICH EVERY LAYER CARRIES ITS WEIGHT.

   Until now the core had eleven layers and the solver used two of them.
   This is a real service, from the Refining Sourcebook, built out of
   parts that trace to documents, solved with the valve's own measured
   characteristic and sourced fitting resistance, and drawn.

   THE SERVICE, verbatim from the sourcebook's own table:

     unit        4.10 Fluidized Catalytic Cracking
     valve       3. Primary Absorber Feed Control
     fluid       Distillate
     P1          190 - 305 psig
     P2          175 - 260 psig
     Q           880 - 3750 gpm
     selection   NPS 8 to NPS 12 easy-e EW or V300

   WHAT EACH LAYER CONTRIBUTES, which is the point of the exercise:

     catalogue    NPS 10 Sch 40 pipe -- bore 10.020 in, from the Control
                  Valve Handbook's chapter 14
     geometry     the flow path through each fitting, and its length
     trim         the EWT NPS 10x8 equal-percentage cage, Cv 932, from
                  Fisher Catalog 12 at every 10% of travel
     sizing       required Cv per ISA-75.01.01, and K-to-Cv through the
                  standard's own N2
     resistance   two elbows on Darby 3-K, with their uncertainty
     netlist      what is connected to what
     dynamics     the solve, composing trim and resistance
     instrument   a flow transmitter that can say "unavailable"

   WHAT IS ASSUMED AND SAID SO. Specific gravity. The sourcebook names
   the fluid and never its gravity, and distillate is a cut rather than
   a compound, so there is no held source for it. 0.85 is used as a
   STATED ASSUMPTION and every result that depends on it is marked.  */
'use strict';

const fs = require('fs');
const path = require('path');
global.window = {};
for (const m of ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
                 'topology', 'schemvis', 'physvis', 'dynamics'])
  require(path.join(__dirname, '..', 'src', m + '.js'));
const LPE = global.window.LPE;

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
const VALVES = JSON.parse(fs.readFileSync(
  path.join(__dirname, 'valves.json'), 'utf8')).valves;

/* ---- the service, as published ------------------------------------- */
const SVC = {
  cite: 'Fisher Control Valve Sourcebook -- Refining (D103205X012), ' +
        '4.10 Fluidized Catalytic Cracking, 3. Primary Absorber Feed Control',
  fluid: 'Distillate',
  P1: { lo: 190, hi: 305 }, P2: { lo: 175, hi: 260 },
  Q: { lo: 880, hi: 3750 },
  selection: 'NPS 8 to NPS 12 easy-e EW or V300',
};
const mid = r => (r.lo + r.hi) / 2;
const SG_ASSUMED = 0.85;           // STATED ASSUMPTION -- see header

/* ---- the valve Emerson specifies, from Fisher Catalog 12 ------------ */
const VALVE = VALVES.find(v => v.body === 'EWT' &&
  v.cage === 'equal-percentage' && String(v.nps) === '10 x 8');
if (!VALVE) { console.error('EWT 10x8 equal-% not in valves.json'); process.exit(1); }

/* ---- the line ------------------------------------------------------- */
const PIPE = CAT.part('PIPE/NPS10/S40');
const ELBOW_K = { method: 'darby-3k', K1: 800, Ki: 0.091, Kd: 4.0,
                  uncertaintyPct: 30,
                  source: 'Darby 3-K, 90 deg elbow R/D=1, flanged/welded -- ' +
                          'a buttwelded line at NPS 10 is not threaded' };

/* ---- the netlist ---------------------------------------------------- */
const Y = 160, X0 = 60, XV = 520, X1 = 980;
const spec = {
  bores: { main: 'PIPE/NPS10/S40' },
  fluid: { sg: SG_ASSUMED },
  components: {
    frac:  { kind: 'vessel', tag: 'TK-1', role: 'source',
             pressure: mid(SVC.P1), vesselType: 'atmospheric' },
    el1:   { kind: 'union', fitting: 'elbow', resistance: ELBOW_K,
             bore: PIPE.dims.bore },
    fv301: { kind: 'valve', tag: 'FV-301', key: 'fv', valveType: 'globe',
             cv: VALVE.cv100, trim: { curve: VALVE.curve } },
    el2:   { kind: 'union', fitting: 'elbow', resistance: ELBOW_K,
             bore: PIPE.dims.bore },
    /* THE ABSORBER IS NOT ATMOSPHERIC. It runs at P2, and declaring it
       open to atmosphere was my error, not the core's: it modelled a
       248 psi drop across a service the sourcebook says takes 30, and
       produced 15,497 gpm against a published 880-3750. A sink with a
       real back pressure is the whole difference between a header and
       a drain. */
    abs:   { kind: 'vessel', tag: 'TK-2', role: 'sink',
             pressure: mid(SVC.P2) },
  },
  segments: [
    { from: 'frac.out',  to: 'el1.in',   bore: 'main' },
    { from: 'el1.out',   to: 'fv301.in', bore: 'main' },
    { from: 'fv301.out', to: 'el2.in',   bore: 'main' },
    { from: 'el2.out',   to: 'abs.in',   bore: 'main' },
  ],
  frames: { rig: { pxPerInch: 2.4, round: 1, at: {
    frac: [X0, Y], el1: [X0 + 150, Y], fv301: [XV, Y],
    el2: [XV + 180, Y], abs: [X1, Y],
  } } },
};

const net = LPE.net(spec, { frame: 'rig', catalogue: CAT });
if (net.errors.length) { console.error(net.errors.join('\n')); process.exit(1); }

/* Reynolds for the reference condition, so the fitting K has a basis. */
const A = Math.PI / 4 * Math.pow(PIPE.dims.bore / 12, 2);
const V = (mid(SVC.Q) / 448.831) / A;
const RE = LPE.sizing.reynolds(V, PIPE.dims.bore, 1.081e-5 / SG_ASSUMED);

const dyn = LPE.dyn(net, { tau: 0.22, reynolds: RE });
if (dyn.errors.length) { console.error(dyn.errors.join('\n')); process.exit(1); }

/* ---- what the layers say -------------------------------------------- */
const out = [];
const say = l => { out.push(l); console.log(l); };

say('');
say('FCC PRIMARY ABSORBER FEED -- one service, every layer');
say('');
say('  ' + SVC.cite);
say('');
say('  published   ' + SVC.fluid + ', P1 ' + SVC.P1.lo + '-' + SVC.P1.hi +
    ' psig, P2 ' + SVC.P2.lo + '-' + SVC.P2.hi + ' psig, Q ' +
    SVC.Q.lo + '-' + SVC.Q.hi + ' gpm');
say('              ' + SVC.selection);
say('');
say('  LINE        NPS 10 Sch 40, bore ' + PIPE.dims.bore + ' in, wall ' +
    PIPE.dims.wall + ' in');
say('              ' + V.toFixed(1) + ' ft/s at the midpoint flow, Re ' +
    Math.round(RE).toLocaleString());
say('  VALVE       Fisher ' + VALVE.body + ' NPS ' + VALVE.nps + ' ' +
    VALVE.cage + ', Cv ' + VALVE.cv100 + ', FL ' + VALVE.FL);
say('              ' + VALVE.doc);

/* sizing: what Cv the service needs, and does the specified valve cover it */
const svc = { q: mid(SVC.Q), P1: mid(SVC.P1) + 14.7, P2: mid(SVC.P2) + 14.7,
              sg: SG_ASSUMED };
const sized = LPE.sizing.sizeLiquid(svc, { Cv: VALVE.cv100, FL: VALVE.FL, d: 10 }, 10);
say('');
say('  SIZING      required Cv ' + sized.Cv.toFixed(0) + ' at SG ' + SG_ASSUMED +
    ' (ASSUMED -- the sourcebook names the fluid, never its gravity)');
say('              valve passes ' + VALVE.cv100 + '  ->  ' +
    (sized.fits ? 'COVERS the service' : 'DOES NOT COVER IT'));
say('              choke check: ' + sized.chokeCheck);

/* resistance: what the two elbows cost */
const r = LPE.sizing.resistance(ELBOW_K, RE, PIPE.dims.bore);
const dpEl = LPE.sizing.dPfromK(r.K, V, SG_ASSUMED);
say('');
say('  FITTINGS    2 x 90 deg elbow, K ' + r.K.toFixed(3) +
    ' each (' + r.lo.toFixed(3) + '-' + r.hi.toFixed(3) + ', +/-' +
    r.uncertaintyPct + '%)');
say('              ' + (2 * dpEl).toFixed(3) + ' psi together, against ' +
    (mid(SVC.P1) - mid(SVC.P2)).toFixed(0) + ' psi across the service -- ' +
    (100 * 2 * dpEl / (mid(SVC.P1) - mid(SVC.P2))).toFixed(1) + '%');
say('              ' + r.source);

/* trim: what the cage does */
const tr = LPE.trim.fromCurve({ curve: VALVE.curve });
const cls = tr.classify();
say('');
/* REPORT THE CONFIDENCE, NOT JUST THE WINNER. This cage scores 0.1376
   as linear and 0.1390 as equal-percentage -- a one-percent difference,
   which is a tie, and printing "linear" alone turned a tie into a claim
   that contradicted the catalogue. A reduced-port 10x8 cage really does
   sit between the two textbook shapes. */
say('  TRIM        labelled ' + VALVE.cage + ' by Catalog 12; the shape of ' +
    'the curve itself scores');
say('              ' + (cls.confident
  ? cls.shape + ' (rms ' + cls.rms.toFixed(3) + '), clear of ' + cls.runnerUp
  : cls.shape + ' ' + cls.rms.toFixed(3) + ' against ' + cls.runnerUp + ' ' +
    cls.runnerUpRms.toFixed(3) + ' -- TOO CLOSE TO CALL, as a reduced-port ' +
    'cage should be'));
say('              rangeability ' + tr.rangeability.toFixed(0) + ':1 measured ' +
    'from the printed points');
const inst = tr.installed(LPE.sizing.cvFromK(2 * r.K, PIPE.dims.bore));
say('              valve authority ' + inst.authority.toFixed(2) +
    ' -- the line is wide open beside the valve, so the installed curve');
say('              stays close to the inherent one');

/* dynamics: the solve, composing it all */
say('');
say('  SOLVE       travel      flow gpm     as published');
for (const t of [0.25, 0.5, 0.75, 1.0]) {
  dyn.settle({ fv: t });
  const q = dyn.solve({ fv: t }).qTot;
  const inRange = q >= SVC.Q.lo && q <= SVC.Q.hi;
  say('                ' + String(Math.round(t * 100)).padStart(3) + '%' +
      q.toFixed(0).padStart(12) + '       ' +
      (inRange ? 'within the published ' + SVC.Q.lo + '-' + SVC.Q.hi
               : 'outside ' + SVC.Q.lo + '-' + SVC.Q.hi));
}
dyn.warnings.forEach(w => say('              note: ' + w));

/* instrument: the reading, with a status */
const ft = LPE.instrument.define({
  tag: 'FT-301', variable: 'flow', units: 'gpm',
  range: { lo: 0, hi: 4000 }, accuracy: { pct: 0.5, of: 'span' },
  requires: ['flow-element'],
  source: 'a representative orifice-plate transmitter; range chosen to ' +
          'cover the published 880-3750 gpm. NOT a sourced device.',
});
dyn.settle({ fv: 1 });
const qFull = dyn.solve({ fv: 1 }).qTot;
const good = ft.read(qFull, { present: ['flow-element'] });
const bare = ft.read(qFull, { present: [] });
say('');
say('  INSTRUMENT  FT-301 reads ' + good.value.toFixed(0) + ' +/- ' +
    good.band.toFixed(0) + ' gpm  [' + good.status + ']');
say('              with no flow element: ' + bare.status + ' -- ' +
    bare.why.split('.')[0]);

say('');
module.exports = { net: net, dyn: dyn, spec: spec, report: out,
                   valve: VALVE, pipe: PIPE, Re: RE, sg: SG_ASSUMED };
