/* @layer flow-field
   @core Process Core -- the flow-field layer's own acceptance test.   */
/* Acceptance test for flowfield.js.

   THE BAR: the two classical profiles are reproduced to their published
   constants, both redistribute the flow rather than inventing any, the
   transition between them is continuous, and along a real catalogue part
   the velocity obeys continuity against that part's own bores.

   The last one matters most. A profile that integrates correctly but is
   driven by a made-up area is a correct shape in the wrong place, and
   the geometry layer already knows the real bore at every station -- so
   this test uses an actual socket-weld elbow rather than a cylinder.  */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
for (const m of ['catalogue', 'trim', 'geometry', 'sizing', 'flowfield'])
  require(path.join(__dirname, '..', 'src', m + '.js'));
const LPE = global.window.LPE;
const F = LPE.flowfield;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};
function refuses(label, fn, expect) {
  let msg = null;
  try { fn(); } catch (e) { msg = e.message; }
  check(label, msg !== null && msg.indexOf(expect) >= 0,
    msg === null ? 'it was ACCEPTED' : msg);
}
const near = (a, b, t) => Math.abs(a - b) <= t;

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));

/* ---- the profiles against their published constants ------------------
   These two numbers are the whole reason to use the classical profiles
   rather than something that merely looks plausible. */
console.log('');
check('the laminar centreline runs exactly twice the mean',
  F.peak(0) === 2, 'Hagen-Poiseuille: u/u_mean = 2(1 - (r/R)^2)');
check('the turbulent centreline runs 60/49 of the mean',
  near(F.peak(1), 60 / 49, 1e-9),
  F.peak(1).toFixed(6) + ' against ' + (60 / 49).toFixed(6) +
  " -- Prandtl's 1/7-power law, whose area-weighted mean is 49/60 of peak");
check('and that ratio is derived from the exponent, not pasted in',
  near(F.MEAN_OVER_PEAK,
       (2 * F.N * F.N) / ((F.N + 1) * (2 * F.N + 1)), 1e-12) && F.N === 7);

check('both profiles are zero at the wall',
  F.profile(1, 0) === 0 && near(F.profile(1, 1), 0, 1e-12) &&
  F.profile(-1, 0) === 0);
check('and symmetric about the centreline',
  near(F.profile(0.4, 1), F.profile(-0.4, 1), 1e-12) &&
  near(F.profile(0.4, 0), F.profile(-0.4, 0), 1e-12));

/* ---- a profile must REDISTRIBUTE the flow, not create it -------------
   The area-weighted mean across the bore has to come back as exactly the
   mean velocity. If it does not, the picture shows more fluid than the
   solver said was flowing, and no amount of good-looking motion fixes
   that. The 1/7 power has an infinite slope at the wall, so a midpoint
   rule converges slowly -- 2e-5 is the integration, not the physics. */
console.log('');
for (const [turb, what] of [[0, 'laminar'], [1, 'turbulent'],
                            [0.5, 'mid-transition']]) {
  check('the ' + what + ' profile integrates back to the mean',
    near(F.meanOf(turb), 1, 5e-5), F.meanOf(turb).toFixed(7));
}
check('which is why blending them is legitimate at all',
  near(F.meanOf(0.27), 1, 5e-5) && near(F.meanOf(0.83), 1, 5e-5),
  'a linear blend of two mean-preserving profiles preserves the mean, so ' +
  'the readable plot and the honest one are the same plot');

/* ---- the transition is blended, not snapped -------------------------- */
console.log('');
check('laminar below Re 2300',
  F.turbulence(2299) === 0 && F.turbulence(500) === 0);
check('turbulent above Re 4000',
  F.turbulence(4001) === 1 && F.turbulence(618422) === 1);
check('and genuinely part-way between, in between',
  near(F.turbulence(3150), 0.5, 0.01), F.turbulence(3150).toFixed(3));
{
  let maxJump = 0, prev = F.peak(F.turbulence(2000));
  for (let Re = 2000; Re <= 4300; Re += 10) {
    const p = F.peak(F.turbulence(Re));
    maxJump = Math.max(maxJump, Math.abs(p - prev));
    prev = p;
  }
  check('the centreline ratio never jumps across the transition',
    maxJump < 0.01,
    'largest step ' + maxJump.toFixed(5) + ' per 10 Reynolds -- snapping ' +
    'at 2300 would step 0.776 in one frame, from a parabola to a blunt ' +
    '1/7-power, which is wrong as physics and unreadable as a picture');
}

/* ---- along a real part, continuity ------------------------------------
   A socket-weld elbow is not a cylinder: the socket bore is 0.874 and
   the running bore is 0.6535, so the fluid must speed up through the
   contraction by exactly the area ratio and slow down again. */
console.log('');
{
  const elbow = CAT.part('ELBOW90/SW3000/NPS0.5');
  const fp = LPE.geometry.flowPath(elbow);
  const f = F.field(fp, 5, { nu: 1.08e-5, spacing: 0.05 });

  const vSocket = f.mean(0.1), vBore = f.mean(1.0), vOut = f.mean(1.9);
  const aR = Math.pow(0.874 / 0.6535, 2);
  check('the fluid speeds up through the contraction by the area ratio',
    near(vBore / vSocket, aR, 1e-6),
    (vBore / vSocket).toFixed(4) + ' measured against ' + aR.toFixed(4) +
    ' from the catalogue bores -- continuity, not a correlation');
  check('and slows back down through the expansion',
    near(vOut, vSocket, 1e-9),
    vSocket.toFixed(3) + ' in, ' + vOut.toFixed(3) + ' out, ft/s');
  check('the bore it used comes from the geometry layer, not from here',
    f.bore(1.0) === elbow.dims.fittingBore &&
    f.bore(0.1) === elbow.dims.socketBore,
    f.bore(0.1) + ' then ' + f.bore(1.0));

  check('every station carries a real velocity',
    f.stations.length > 30 && f.stations.every(st => st.v > 0),
    f.stations.length + ' stations');

  /* Reynolds is computed per station from the real bore, so the profile
     can differ along one part -- which is the point of doing it here
     rather than taking one number for the whole thing. */
  check('Reynolds is evaluated per station, from the bore there',
    f.stations.every(st => st.Re > 0) &&
    f.stations[0].Re !== f.stations[f.stations.length >> 1].Re);

  /* Zero flow is a real state, not an error. */
  const shut = F.field(fp, 0, { reynolds: 0 });
  check('a shut valve gives zero velocity rather than a failure',
    shut.mean(1.0) === 0 && shut.at(1.0, 0) === 0);
}

/* ---- what it refuses -------------------------------------------------- */
console.log('');
{
  const fp = LPE.geometry.flowPath(CAT.part('PIPE/NPS10/S40'), { length: 24 });
  refuses('a field with neither viscosity nor Reynolds is refused',
    () => F.field(fp, 100, {}), 'this layer does not guess');
  refuses('a negative flow is refused',
    () => F.along(fp, -5, { nu: 1e-5 }), 'non-negative');
  refuses('a Reynolds that is not a number is refused',
    () => F.turbulence('fast'), 'not a preference');
  refuses('a turbulence outside 0 to 1 is refused',
    () => F.profile(0, 1.4), 'must be 0 to 1');
  refuses('something that is not a flow path is refused',
    () => F.along({ nope: true }, 10, { nu: 1e-5 }), 'expected a geometry flow path');
}

/* ---- declared exaggeration -------------------------------------------
   The whole reason this layer exists is to feed a cutaway, and a cutaway
   at true speed shows nothing. So magnification is allowed -- and it has
   to announce itself, because an undeclared exaggeration is just a wrong
   number and nothing downstream can tell the difference. */
console.log('');
{
  const fp = LPE.geometry.flowPath(CAT.part('PIPE/NPS10/S40'), { length: 24 });
  const f = F.field(fp, 3735, { nu: 1.27e-5 });
  const big = F.magnified(f, 40, 'a 10-inch line at 3735 gpm runs 15 ft/s; ' +
    'on screen that is a blur, and the eye needs to see individual fluid ' +
    'moving to read the profile at all');

  check('a true field says it is not magnified',
    f.magnification === null);
  check('a magnified one names the factor and the reason',
    big.magnification.factor === 40 &&
    /the eye needs to see/.test(big.magnification.why));
  check('it scales every velocity by exactly that factor',
    near(big.at(10, 0) / f.at(10, 0), 40, 1e-12) &&
    near(big.mean(10) / f.mean(10), 40, 1e-12));
  check('the SHAPE is untouched -- relative speeds still true',
    near(big.at(10, 0) / big.at(10, 0.5),
         f.at(10, 0) / f.at(10, 0.5), 1e-12),
    'which is the difference between exaggerating a true quantity and ' +
    'inventing one');
  check('and the true field is still reachable from the magnified one',
    big.trueField === f);

  refuses('a magnification with no stated reason is refused',
    () => F.magnified(f, 40), 'say WHY');
  refuses('and a magnification of zero or less is refused',
    () => F.magnified(f, 0, 'because'), 'positive');
}

/* ---- what this layer must not contain --------------------------------- */
console.log('');
{
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'flowfield.js'), 'utf8');
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
  check('it draws nothing',
    !/fillRect|beginPath|moveTo|lineTo|fillText|drawImage/.test(code));
  check('it names no colour', !/#[0-9a-fA-F]{3,6}\b/.test(src));
  check('it reads no netlist',
    !/toPiping|segments|components|LPE\.net\b/.test(code));
  check('and it holds no opinion about particles',
    !/particle|jitter|marker|opacity|alpha|sprite/i.test(code),
    'those are chrome: this file is where the physics lives, and the ' +
    'reason the LPE version cannot be tested is that the two sit together');
}

/* ---- the two-dimensional field over the cavity ---------------------- */
console.log('');
{
  const CAT2 = LPE.catalogue.load(JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
  const V2 = CAT2.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
  const WP2 = LPE.trim.fromCurve({ curve: V2.cv,
    characterisedBy: V2.characterisedBy }).widthProfile();
  const CELL = 0.34;
  const valve = flow => LPE.geometry.globeValve({ part: V2,
    faceToFace: 29.62, lineBore: 10.02, flow: flow,
    widthProfile: WP2.width });
  const solve = (gv, pct, gpm) => {
    const w = gv.wettedAt(pct, { minGap: CELL * 1.8 });
    return LPE.flowfield.solveField2D({
      rings: w.rings, throatRings: w.throatRings,
      stillRings: w.stillRings, openings: w.openings,
      stations: gv.flowPathAt(pct).stations, gpm: gpm, cellIn: CELL });
  };
  const GPM_CFS = 1 / 448.831;
  const gv = valve('down');
  const flowAt = pct => 3735 * (gv.openAreaAt(pct) / gv.openAreaAt(100));

  refuses('a field with no cavity is refused',
    () => LPE.flowfield.solveField2D({ openings: [], gpm: 1, stations: [] }),
    'wetted cavity');
  refuses('and one with no stations is refused, not guessed at',
    () => LPE.flowfield.solveField2D({ rings: [[[0, 0], [1, 0], [1, 1]]],
      openings: [{ x: 0, y: 0, nx: 1, ny: 0, halfW: 1, role: 'inlet' },
                 { x: 1, y: 0, nx: -1, ny: 0, halfW: 1, role: 'outlet' }],
      gpm: 1 }), 'carries the real three-dimensional area');

  /* CONTINUITY IS THE WHOLE CLAIM.

     Everything this field says rests on the same flow crossing every
     line drawn through the valve. It is also the check that caught
     the two real modelling errors on the way in: the section cuts
     two windows where the cage has six, and a column of the section
     often cuts the cavity more than once -- both of which handed out
     more area than the valve has, and both of which showed up here
     as flux reading 66% and 88% of what went in. */
  for (const pct of [10, 50, 100]) {
    const gpm = flowAt(pct);
    const f = solve(gv, pct, gpm);
    const Q = gpm * GPM_CFS * 1728;                  /* in3/s */
    let worst = 0;
    for (const x of [-13, -9, -2, 0, 3, 7, 13]) {
      const e = Math.abs(f.fluxThroughX(x) / Q - 1);
      if (e > worst) worst = e;
    }
    check('at ' + pct + '% travel the same flow crosses every line',
      worst < 0.08, 'worst departure ' + (100 * worst).toFixed(1) + '%');
    check('and it converged to get there',
      !f.shut && f.residual < 1e-6,
      'residual ' + f.residual.toExponential(2) + ' after ' + f.sweeps);
    /* The line velocity has an independent answer -- Q over the
       measured bore -- and the solve must land on it. */
    const want = (Q / (Math.PI * Math.pow(10.02 / 2, 2))) / 12;
    const got = f.speedAt(-14, 0);
    check('and the velocity in the line is Q over the bore',
      Math.abs(got - want) / Math.max(want, 1e-9) < 0.05,
      got.toFixed(3) + ' ft/s against ' + want.toFixed(3));
  }

  /* STILL IS NOT EMPTY. The drillings and the cavity over the plug
     hold fluid and carry nothing, and the field has to be able to
     say both at once -- "there is water here" and "it is not
     moving" -- because a particle belongs there and a streak does
     not. */
  {
    const f = solve(gv, 50, flowAt(50));
    check('the drillings hold fluid and carry none of the flow',
      f.inside(-3.3, 5.5) && f.isStill(-3.3, 5.5) &&
      f.speedAt(-3.3, 5.5) === 0);
    check('and so does the cavity over the plug head',
      f.inside(0, 8.7) && f.isStill(0, 8.7) && f.speedAt(0, 8.7) === 0);
    check('while solid metal is outside the cavity altogether',
      f.speedAt(0, 20) === null && !f.inside(0, 20),
      'null is a different answer from zero, and means a different thing');
    /* A corner of the chamber is neither: fluid, flowing, but
       slowly. This is what the route model could not express at all
       and what every attempt to draw it kept getting wrong. */
    const corner = f.speedAt(-11, -4), line = f.speedAt(-14, 0);
    check('a chamber corner is slow, but it is not still',
      corner > 0 && corner < line,
      corner.toFixed(2) + ' ft/s against ' + line.toFixed(2) + ' in the line');
  }

  /* SHUT IS A STATE, NOT A FAILURE. Before this the closed valve
     made the cavity two disconnected halves, each fed by one flange,
     which is an inconsistent problem -- the solver ran away to a
     residual of ten to the eighteenth and the picture filled with
     nonsense. */
  {
    const f = solve(gv, 0, 0);
    check('a shut valve is full and still rather than a divergence',
      f.shut === true && f.speedAt(-11, 0) === 0 && f.inside(-11, 0));
  }

  /* THE THROAT IS THE WINDOW, in the field as in the path. */
  {
    const f = solve(gv, 50, flowAt(50));
    const win = f.speedAt(-4.8, 3.0), bore = f.speedAt(-14, 0);
    check('the window runs many times the speed of the line',
      win > 6 * bore, win.toFixed(1) + ' against ' + bore.toFixed(2));
  }

  /* FLOW-UP IS THE SAME VALVE TURNED ROUND, and the field has to
     agree -- if it did not, the mirror would be cosmetic. */
  {
    const d = solve(valve('down'), 50, flowAt(50));
    const u = solve(valve('up'), 50, flowAt(50));
    const a = d.speedAt(-11, 0), b = u.speedAt(11, 0);
    check('and the mirrored valve has the mirrored field',
      a !== null && b !== null && Math.abs(a - b) / Math.max(a, 1e-9) < 0.05,
      a.toFixed(2) + ' ft/s one way, ' + b.toFixed(2) + ' the other');
  }

  check('the field declares that it is a plane cut and irrotational',
    /TWO-DIMENSIONAL/.test(solve(gv, 50, flowAt(50)).approximation) &&
    /irrotational/i.test(solve(gv, 50, flowAt(50)).approximation),
    'a model that cannot have eddies must not be read as if it could');
}

/* ---- pressure, cavitation and flashing ------------------------------ */
console.log('');
{
  const CAT3 = LPE.catalogue.load(JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
  const V3 = CAT3.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
  const WP3 = LPE.trim.fromCurve({ curve: V3.cv,
    characterisedBy: V3.characterisedBy }).widthProfile();
  const gv3 = LPE.geometry.globeValve({ part: V3, faceToFace: 29.62,
    lineBore: 10.02, flow: 'down', widthProfile: WP3.width });
  /* Liquid propane, Control Valve Handbook 6th ed. ch5 pp.114-115 --
     the same service the sizing layer is graded against. A vapour
     pressure is a property of a named fluid at a named temperature,
     never a number picked to make a picture interesting. */
  const SVC3 = { sg: 0.50, Pv: 124.3, Pc: 616.3, P1: 314.7 };
  const solveAt = (pct, gpm) => {
    const w = gv3.wettedAt(pct, { minGap: 0.612 });
    return LPE.flowfield.solveField2D({ rings: w.rings,
      throatRings: w.throatRings, stillRings: w.stillRings,
      openings: w.openings, stations: gv3.flowPathAt(pct).stations,
      gpm: gpm, cellIn: 0.34 });
  };
  const atDrop = dP => {
    const P2 = SVC3.P1 - dP;
    const cv = V3.cv[V3.cv.length - 1] * 0.3;
    const ch = LPE.sizing.sizeLiquid({ q: 1, P1: SVC3.P1, P2: P2,
      sg: SVC3.sg, Pv: SVC3.Pv, Pc: SVC3.Pc },
      { Cv: cv, FL: V3.FL, d: 8 }, 10.02);
    const gpm = cv * Math.sqrt(Math.min(dP, ch.dPchoked) / SVC3.sg);
    const f = solveAt(50, gpm);
    return { P2: P2, choke: ch,
             pr: LPE.flowfield.pressureOver(f, { P1: SVC3.P1, P2: P2,
               Pv: SVC3.Pv, sg: SVC3.sg, FL: V3.FL }) };
  };

  refuses('pressure without a vapour pressure is refused',
    () => LPE.flowfield.pressureOver(solveAt(50, 1000),
      { P1: 300, P2: 280, sg: 0.5 }), 'vapour pressure');
  refuses('and without the valve\'s published recovery factor',
    () => LPE.flowfield.pressureOver(solveAt(50, 1000),
      { P1: 300, P2: 280, sg: 0.5, Pv: 124.3 }), 'recovery factor');

  /* NO NEGATIVE ABSOLUTE PRESSURES. Bernoulli on an inviscid field
     is singular at a sharp corner and returned minus two thousand
     psia before the floor came from the published FL instead. */
  {
    const r = atDrop(175);
    let worst = Infinity;
    for (let x = -14; x <= 14; x += 0.5)
      for (let y = -7; y <= 9; y += 0.5) {
        const pp = r.pr.at(x, y);
        if (pp !== null && pp < worst) worst = pp;
      }
    check('no point in the valve is at a negative absolute pressure',
      worst > 0, 'lowest ' + worst.toFixed(1) + ' psia');
    check('and the floor is the one the catalogue publishes',
      Math.abs(r.pr.venaContracta -
        (SVC3.P1 - (SVC3.P1 - r.P2) / (V3.FL * V3.FL))) < 1e-9,
      'FL defines the vena contracta; a field does not get a vote');
  }

  /* BOILING COMES FIRST, AND CHOKING COMES AFTER.

     These are two different questions and the first version of this
     test wrongly demanded the same answer to both. The fluid starts
     to boil when the vena contracta reaches vapour pressure:

         dP_boil = FL^2 * (P1 - Pv)

     The valve is fully CHOKED later, when it reaches Ff * Pv, where
     Ff is ISA's critical pressure ratio factor -- a liquid at the
     vena contracta holds together a little below its vapour
     pressure before it lets go:

         dP_choked = FL^2 * (P1 - Ff * Pv)

     and Ff is 0.834 for this fluid, so the two are seventeen psi
     apart and MUST be. Incipient cavitation before choked flow is
     the whole reason a valve can be quietly eating itself while
     still passing the flow it is asked for.

     The check is therefore that the field's onset is the analytic
     boiling drop, that ISA's is the analytic choked drop, and that
     they come in that order. Two independent routes, each landing
     on its own closed-form answer. */
  {
    let onsetField = null, onsetISA = null;
    for (let dP = 20; dP <= 240; dP += 1) {
      const r = atDrop(dP);
      if (onsetField === null && (r.pr.cavitating || r.pr.flashing))
        onsetField = dP;
      if (onsetISA === null && r.choke.choked) onsetISA = dP;
    }
    const FL2 = V3.FL * V3.FL;
    const Ff = 0.96 - 0.28 * Math.sqrt(SVC3.Pv / SVC3.Pc);
    const wantBoil = FL2 * (SVC3.P1 - SVC3.Pv);
    const wantChoke = FL2 * (SVC3.P1 - Ff * SVC3.Pv);
    check('the field starts boiling at FL^2 (P1 - Pv)',
      onsetField !== null && Math.abs(onsetField - wantBoil) <= 2,
      'found ' + onsetField + ' psi against ' + wantBoil.toFixed(1));
    check('ISA chokes later, at FL^2 (P1 - Ff Pv)',
      onsetISA !== null && Math.abs(onsetISA - wantChoke) <= 2,
      'found ' + onsetISA + ' psi against ' + wantChoke.toFixed(1));
    check('and boiling comes first, which is why a valve can cavitate ' +
      'while still passing its rated flow',
      onsetField < onsetISA,
      onsetField + ' psi then ' + onsetISA + ' psi');
  }

  check('a modest drop keeps it liquid',
    atDrop(25).pr.cavitating === false &&
    atDrop(25).pr.flashing === false);
  check('a large drop cavitates -- it boils and the bubbles collapse',
    atDrop(175).pr.cavitating === true && atDrop(175).pr.flashing === false);
  check('and once the OUTLET is below vapour it flashes instead',
    atDrop(200).pr.flashing === true,
    'nothing collapses, so the valve passes two phases -- a different ' +
    'problem with a different answer');

  /* ---- the eddies are added, and say so ---- */
  {
    const f = solveAt(50, 1099);
    const rf = LPE.flowfield.withRecirculation(f);
    check('recirculation finds corners, not chambers',
      rf.pockets.length > 0 &&
      rf.pockets.every(q => q.cells < f.cells * 0.11),
      rf.pockets.map(q => q.cells + ' cells').join(', ') +
      ' out of ' + f.cells);
    const a = f.at(-4.8, 3.0), b = rf.at(-4.8, 3.0);
    check('and it leaves the stream alone',
      Math.abs(Math.hypot(a.vx, a.vy) - Math.hypot(b.vx, b.vy)) < 1e-9,
      'a swirl added to the jet would be an invention in the one place ' +
      'the model is trying hardest to be right');
    check('it declares itself as added rather than solved',
      /added/i.test(rf.declared) && /irrotational/i.test(rf.declared));
  }
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
