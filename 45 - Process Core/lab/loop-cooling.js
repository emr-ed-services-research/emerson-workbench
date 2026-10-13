/* @layer registration
   @core Process Core -- flow-lab tooling, not a process layer.
   Run: node lab/loop-cooling.js                                       */
/* ---------------- FIC-101, COOLING WATER TO AN EXCHANGER ------------

   A BASIC CONTROL LOOP, SPECIFIED RATHER THAN SKETCHED -- AND SPECIFIED
   AROUND THE BODY WE CAN ACTUALLY DRAW.

   This loop was first built around an ED NPS 1-1/2 on a 657 size 30,
   picked because that pairing is a real one out of two published
   tables. Every number in it was right and the PICTURE was wrong, and
   Franz saw it straight away: the valve looked enormous beside a
   two-inch line.

   The reason was the body archetype. There was one traced globe body
   in this core, off Figure 11-5 of the Oil & Gas sourcebook (drawing
   W6022-2), an EWT or EWD, scaled to each valve by its published
   face-to-face alone. The traced figure's bore is 0.323 of its
   face-to-face and its port 0.293. An ED NPS 1-1/2 is 0.174 and 0.203
   -- so the casting was drawn about half again too fat for its length,
   a ten-inch valve wearing a one-and-a-half-inch valve's length. Of
   every valve a 657 can drive, it was the WORST match in the
   catalogue.

   So the valve was chosen the other way round: find the valve whose
   own proportions the one archetype we had actually fitted, and that a
   657 can still drive. That gave the ED NPS 4 this loop now runs on.

   THAT CONSTRAINT IS GONE, AND THIS NOTE IS KEPT ONLY TO SAY SO.

   The archetype is an ED now, traced from Figure 20 of D100390X012,
   and -- the part that matters here -- a valve has TWO published
   lengths and they are independent. The casting scales by its
   face-to-face and the trim by its PORT, with the casting bored to
   take whatever trim goes in it, the way one body takes several port
   sizes. The port stopped being a proportion of the length:

       valve                     port/f2f   trim pulled in   seat bore
       ED NPS 1-1/2, 1-7/8 port     0.208        37%           1.875
       ED NPS 3, 3-7/16 port        0.286        14%           3.4375
       ED NPS 4, 4-3/8 port         0.302         9%           4.375
       ED NPS 8, 8 port             0.333         0%           8.000

   Every one of those seat bores is the published port to the last
   digit, every one strokes its full rated travel, and the field solves
   open on all four. The NPS 1-1/2 that this loop ran away from draws
   correctly today.

   So the choice of valve here is now FREE and this loop keeps the
   NPS 4 by inertia rather than by constraint. Moving it back to the
   NPS 1-1/2 on a 657 size 30 is a decision about what the example
   should teach, not about what the model can draw -- and it belongs to
   whoever is writing the example, not to this comment.

   THE SERVICE

     fluid     water, 60 F
     flow      560 gpm
     pressure  50 psig upstream of the valve, 35 psig downstream
     line      NPS 6 Sch 40, which puts the water at 6.2 ft/s
     duty      cooling water to a heat exchanger, flow controlled

   THE ASSEMBLY, and this is the part that had to be checked rather
   than chosen:

     valve      Fisher ED NPS 4, 4.375 in port, equal-percentage
                cage, Cv 224, FL 0.82 -- Catalog 12
     actuator   Fisher 657 size 45, 105 in2, 2 in travel -- the
                actuator manual's Table 1
     joint      travel 2 = 2, stem 1/2 = 1/2, yoke boss 2-13/16 =
                2-13/16. Three published numbers from two tables, all
                three agreeing, checked by the assembly layer rather
                than by eye.

   A REDUCED-SIZE INSTALLATION, and not by choice either time. The
   valve's 4.375 in port is wider than an NPS 4 Sch 40 bore of 4.026,
   so it is not a line-size installation at all and the sizing layer
   refuses it as such. NPS 6 it is -- which is the same configuration
   as the Control Valve Handbook's worked example, so Fp and FLP are
   doing real work here and the sizing layer is already graded against
   a printed answer for exactly this shape of problem.

   AND d AND D ARE NOMINAL SIZES. The first version of this loop passed
   the valve's PORT as d and the line's BORE as D. The sizing layer's
   own graded example passes nominal sizes for both -- d: 3, d: 4 in an
   NPS 8 line -- so the reducer geometry was being computed off two
   numbers that were not the ones the formula wants.

   A 1/2 INCH STEM ALSO REACHES THE STANDARD PACKING TABLE. The 3/8 in
   stem on the old valve did not -- or so the note here claimed. It
   does: Table 4 of D100390X012 starts at 3/8, and the four rows for
   it are in the catalogue now. The old claim rested on a table in a
   document the vault does not hold.
   So this loop can show the torque WINDOW as well as the ENVIRO-SEAL
   friction force.                                                   */
'use strict';

const fs = require('fs');
const path = require('path');
global.window = {};
for (const m of ['catalogue', 'geometry', 'sizing', 'trim', 'instrument',
                 'thermal', 'assembly', 'topology', 'schemvis',
                 'dynamics'])
  require(path.join(__dirname, '..', 'src', m + '.js'));
const LPE = global.window.LPE;

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));

/* ---- the service ---------------------------------------------------
   Water at 60 F. Specific gravity 1.0 and vapour pressure 0.256 psia
   are water's, not an assumption about an unnamed cut -- which is why
   this loop can answer the cavitation question honestly and the FCC
   one cannot.                                                        */
const SVC = {
  fluid: 'water, 60 F',
  sg: 1.0, Pv: 0.256, Pc: 3200.0,
  q: 560,                      /* gpm, design */
  P1: 50 + 14.7, P2: 35 + 14.7,
  lineNps: 6, lineBore: 6.065, /* NPS 6 Sch 40, ASME B36.10M */
  valveNps: 4,                 /* the valve's own end size */
};
const dP = SVC.P1 - SVC.P2;

const VALVE = CAT.part('VALVE/ED/NPS4/P4.375/T2/EQPCT');
const ACT = CAT.part('ACTUATOR/657/SIZE45');
const RATED = VALVE.cv[VALVE.cv.length - 1];

const out = [];
const say = l => { out.push(l); console.log(l); };

say('');
say('FIC-101 -- COOLING WATER TO AN EXCHANGER');
say('');
say('  SERVICE     ' + SVC.fluid + ', ' + SVC.q + ' gpm');
say('              ' + (SVC.P1 - 14.7) + ' -> ' + (SVC.P2 - 14.7) +
    ' psig across the valve (' + dP.toFixed(0) + ' psi)');
const area = Math.PI * SVC.lineBore * SVC.lineBore / 4;
const vLine = (SVC.q * 0.0022280 * 1728 / area) / 12;
say('  LINE        NPS ' + SVC.lineNps + ' Sch 40, bore ' + SVC.lineBore +
    ' in -- ' + vLine.toFixed(1) + ' ft/s');

/* ---- does the assembly exist? --------------------------------------
   Asked before anything else, because a loop built around a valve and
   an actuator that do not bolt together is a drawing of nothing.    */
const PACKING = 'ptfe';            /* ENVIRO-SEAL PTFE V-ring */
const ASM = LPE.assembly.assemble({
  valve: VALVE, actuator: ACT, tag: 'FV-101', catalogue: CAT,
  service: { dP: dP, packingType: PACKING },
});
say('');
say('  ASSEMBLY    FV-101');
say('              valve     Fisher ED NPS 4, ' + VALVE.dims.port +
    ' in port, ' + VALVE.cage + ', Cv ' + RATED + ', FL ' + VALVE.FL);
say('              actuator  Fisher 657 size ' + ACT.size + ', ' +
    ACT.dims.effectiveArea + ' in2, ' + ACT.dims.maxTravel + ' in travel');
for (const c of ASM.checks)
  say('              ' + (c.ok ? 'ok  ' : 'FAIL') + '  ' +
      c.name.padEnd(9) + c.said);
say('              ' + ACT.figure);

/* ---- sizing, through ISA-75.01.01 ---------------------------------- */
/* d and D are NOMINAL sizes, which is what the graded example passes
   and what the reducer geometry wants. */
const sized = LPE.sizing.sizeLiquid(
  { q: SVC.q, P1: SVC.P1, P2: SVC.P2, sg: SVC.sg, Pv: SVC.Pv, Pc: SVC.Pc },
  { Cv: RATED, FL: VALVE.FL, d: SVC.valveNps }, SVC.lineNps);

/* Where that lands on the published curve -- the number a sizing
   review actually argues about. */
const frac = sized.Cv / RATED;
let travelPct = null;
for (let i = 0; i < VALVE.cv.length; i++) {
  const hi = VALVE.cv[i] / RATED;
  if (hi >= frac) {
    const lo = i ? VALVE.cv[i - 1] / RATED : 0;
    const x0 = i ? VALVE.cvAtPct[i - 1] : 0;
    travelPct = x0 + (VALVE.cvAtPct[i] - x0) * (frac - lo) / (hi - lo);
    break;
  }
}
say('');
say('  SIZING      required Cv ' + sized.Cv.toFixed(1) + ' of ' + RATED +
    ' rated  ->  ' + (100 * frac).toFixed(0) + '% of capacity');
say('              about ' + travelPct.toFixed(0) +
    '% travel at design flow' +
    (travelPct > 60 && travelPct < 85 ? '  (in the usual window)' : ''));
say('              reduced-size installation, Fp ' + sized.Fp.toFixed(3));
say('              ' + sized.chokeCheck);

/* ---- cavitation, which water at these pressures does not do -------- */
say('');
const FL2 = VALVE.FL * VALVE.FL;
const Pvc = SVC.P1 - (SVC.P1 - SVC.P2) / FL2;
say('  CAVITATION  vena contracta ' + Pvc.toFixed(1) +
    ' psia against a vapour pressure of ' + SVC.Pv + ' psia');
say('              ' + (Pvc < SVC.Pv ? 'BOILS' : 'liquid throughout') +
    ' -- a well-sized water loop at 15 psi has an enormous margin,');
say('              and that is worth seeing before the cutaway shows ' +
    'one that does not.');

/* ---- packing ---------------------------------------------------------
   This valve has a 1/2 inch stem, so BOTH packing systems have
   something to say about it. The standard arrangement publishes a
   torque WINDOW -- D100390X012 Table 4, 28 to 42 lbf.in in PTFE at
   CL300 -- and ENVIRO-SEAL publishes the friction FORCE, which is the
   number the actuator has to overcome and the one the standard
   arrangement never gives. */
const PF = LPE.assembly.packingFriction({
  catalogue: CAT, packingType: PACKING, stem: VALVE.dims.stem });
const PFG = LPE.assembly.packingFriction({
  catalogue: CAT, packingType: 'graphite-ulf', stem: VALVE.dims.stem });
say('');
say('  PACKING     ' + VALVE.dims.stem + ' in stem, ENVIRO-SEAL ' +
    PACKING.toUpperCase());
say('              drag ' + PF.frictionLb + ' lb (graphite ULF would be ' +
    PFG.frictionLb + ' lb on the same stem)');
say('              ' + PF.source);

/* ---- WHAT THE WATER IS FOR, AND WHAT IT COSTS TO LOSE IT ----------

   Until now this loop ended at HX-101, because the netlist treats a
   vessel as terminal and said so: what happens past the tubes is a
   different loop's problem. The consequence was that FV-101 sticking
   shut meant the water stopped, and nothing else -- no one worse off,
   nothing to do, nothing at stake. A control loop with no served
   process is half a drawing.

   So: the thing being cooled. Product rundown off the unit, on its way
   to tank, and it has a number it has to meet when it gets there.

   THE TWO SIDES BALANCE AT THE FLOW THE VALVE IS SIZED FOR, which is
   the part worth checking rather than asserting. 560 gpm of water
   warming 30 degF absorbs 8.4 MMBtu/hr; cooling 545 gpm of a 0.55
   specific-heat hydrocarbon by 70 degF needs 8.4. The design flow was
   picked for the valve and the duty agrees with it, rather than a
   duty being invented to suit a picture.                            */
const HOT = {
  gpm: 545, cp: 0.55, lbPerGal: 6.68, inletF: 180,
  fluid: 'product rundown',
  what: 'product rundown to tank',
  specF: 120,
  spec: 'above 120 F at the tank it is off specification and goes to slops',
};
const EX = LPE.thermal.uaForDuty({
  hot: HOT, cold: LPE.thermal.waterStream(SVC.q, SVC.P1 && 60),
  hotOutletF: 110 });
const atFlow = gpm => LPE.thermal.exchange({
  hot: HOT, cold: LPE.thermal.waterStream(gpm, 60), UA: EX.UA });
const design = atFlow(SVC.q);

say('');
say('  EXCHANGER   HX-101, product rundown cooled by the water above');
say('              hot   ' + HOT.gpm + ' gpm at ' + HOT.inletF + ' F in, ' +
    design.hotOutletF.toFixed(0) + ' F out  (' + HOT.fluid + ')');
say('              cold  ' + SVC.q + ' gpm at 60 F in, ' +
    design.coldOutletF.toFixed(0) + ' F out  (cooling water)');
say('              duty  ' + (design.dutyBtuHr / 1e6).toFixed(2) +
    ' MMBtu/hr   UA ' + EX.UA.toFixed(0) + ' Btu/hr.F   NTU ' +
    EX.NTU.toFixed(2) + '   effectiveness ' +
    design.effectiveness.toFixed(2));
say('              counter-flow Effectiveness-NTU; UA is back-calculated ' +
    'from this duty,');
say('              not published -- there is no catalogue UA for a ' +
    'notional exchanger.');

/* ---- the stake, in travel and in milliamps ------------------------
   The number that makes this a loop rather than a diagram: how far
   the valve can fall before the product stops meeting its spec. */
const cvAt = pct => {
  for (let i = 0; i < VALVE.cvAtPct.length; i++)
    if (pct <= VALVE.cvAtPct[i]) {
      const lo = i ? VALVE.cvAtPct[i - 1] : 0;
      const c0 = i ? VALVE.cv[i - 1] : 0;
      return c0 + (VALVE.cv[i] - c0) * (pct - lo) / (VALVE.cvAtPct[i] - lo);
    }
  return RATED;
};
const perCv = SVC.q / cvAt(travelPct);
let offSpec = null;
for (let p = travelPct; p >= 0; p -= 0.25) {
  const r = atFlow(perCv * cvAt(p));
  if (r.hotOutletF > HOT.specF) { offSpec = { pct: p, r: r,
    gpm: perCv * cvAt(p) }; break; }
}
/* air-to-close, so the signal runs the other way from the travel */
const mAat = pct => 4 + 16 * (100 - pct) / 100;
say('');
say('  AT STAKE    ' + HOT.spec);
if (offSpec) {
  say('              design    ' + travelPct.toFixed(0) + '% travel, ' +
      mAat(travelPct).toFixed(1) + ' mA, ' + SVC.q + ' gpm  ->  ' +
      design.hotOutletF.toFixed(0) + ' F');
  say('              off spec  ' + offSpec.pct.toFixed(0) + '% travel, ' +
      mAat(offSpec.pct).toFixed(1) + ' mA, ' + offSpec.gpm.toFixed(0) +
      ' gpm  ->  ' + offSpec.r.hotOutletF.toFixed(0) + ' F');
  say('              so the valve has ' +
      (travelPct - offSpec.pct).toFixed(0) + ' points of travel in hand, ' +
      'and loses the product');
  say('              at about ' +
      (100 * offSpec.gpm / SVC.q).toFixed(0) +
      '% of design flow -- a margin, not a cliff, which is the ' +
      'thing worth');
  say('              teaching about a loop that looks fine until it is ' +
      'not.');
} else {
  say('              the product stays in specification at every travel ' +
      '-- no stake here.');
}

/* ---- the loop as a netlist, and drawn ------------------------------ */
const PIPE = CAT.part('PIPE/NPS6/S40');
const Y = 190, X0 = 110, XV = 360, XE = 620, X1 = 880;

const spec = {
  bores: { main: PIPE.dims.bore },
  components: {
    hdr: { kind: 'vessel', tag: 'TK-1', role: 'source',
           pressure: SVC.P1 - 14.7 },
    fv:  { kind: 'valve', tag: 'FV-101', valveType: 'globe',
           cv: RATED, key: 'fv101' },
    /* The exchanger is where the water is GOING, so it is the sink.
       A vessel is terminal in this netlist and that is correct: what
       happens on the other side of the tubes is a different loop's
       problem, and modelling it here would be modelling heat
       transfer in a hydraulic solver. */
    hx:  { kind: 'vessel', tag: 'HX-101', role: 'sink',
           pressure: SVC.P2 - 14.7 },
  },
  segments: [
    { from: 'hdr.out', to: 'fv.in', bore: 'main' },
    { from: 'fv.out',  to: 'hx.in', bore: 'main' },
  ],
  frames: { rig: { pxPerInch: 2.4, round: 1, at: {
    hdr: [X0, Y], fv: [XV, Y], hx: [X1, Y],
  } } },
};
const net = LPE.net(spec, { frame: 'rig', catalogue: CAT });
if (net.errors.length) { console.error(net.errors.join('\n')); process.exit(1); }

/* The instrument loop: a flow element in the line, its transmitter
   beside it, and the controller in the control room driving the
   valve. Declared, because a signal is not a pipe. */
const TOP = Y - 130;              /* the signal run across the top */
const INSTR = [
  { tag: 'FE-101', x: XE, y: Y, mount: 'field' },
  { tag: 'FT-101', x: XE, y: Y - 68, mount: 'field' },
  { tag: 'FIC-101', x: (XV + XE) / 2, y: TOP, mount: 'panel' },
];
const SIGNALS = [
  /* element to transmitter */
  { type: 'electric', pts: [[XE, Y - 20], [XE, Y - 50]] },
  /* transmitter up and across to the controller */
  { type: 'electric', pts: [[XE, Y - 86], [XE, TOP],
                            [(XV + XE) / 2 + 20, TOP]] },
  /* controller back down to the valve */
  { type: 'electric', pts: [[(XV + XE) / 2 - 20, TOP], [XV, TOP],
                            [XV, Y - 26]] },
];

say('');
say('  LOOP        FE-101 in the line, FT-101 beside it, FIC-101 in the');
say('              control room driving FV-101. Electric signals.');
say('              A signal is not a pipe, so the instruments are');
say('              declared over the netlist rather than inside it.');

/* ---- what the actuator is actually fighting ------------------------- */
say('');
say('  THRUST      fluid ' + ASM.thrust.fluidLb.toFixed(0) +
    ' lb + packing ' + ASM.thrust.packingLb + ' lb = ' +
    ASM.thrust.neededLb.toFixed(0) + ' lb, against ' +
    ASM.thrust.availableLb + ' lb available');
say('              the packing is ' +
    (100 * ASM.thrust.packingLb / ASM.thrust.neededLb).toFixed(0) +
    '% of it -- at this service the actuator is mostly just pushing');
say('              the stem through its own seal, which is worth ' +
    'knowing before');
say('              anyone argues about plug unbalance.');
if (ASM.thrust.note) say('              ' + ASM.thrust.note);

module.exports = { SVC, VALVE, ACT, ASM, sized, travelPct, PF,
                   HOT, EX, design, offSpec, atFlow,
                   net, spec, INSTR, SIGNALS, report: out };

if (require.main === module) {
  say('');
  say('  -> node lab/render-loop-cooling.js  draws it');
  say('');
}
