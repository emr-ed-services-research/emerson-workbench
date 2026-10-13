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
    /* SAMPLED AT THE FEATURE, NOT AT A COORDINATE. This was the point
       (-3.3, 5.5), which sat in a drilling until the trim went onto
       its published port -- then the plug narrowed, the lid lifted it
       by a different amount, and the point was left standing in open
       bore reading two hundred and sixty feet a second. A check that
       drifts off the thing it is checking reports on whatever has
       moved in underneath it. The drilling says where it is. */
    const drill = (function () {
      const h = gv.plugAt(50).balanceHoles[0];
      const w2 = gv.wettedAt(50, { minGap: 0.612 });
      let best = null;
      for (const r of w2.stillRings) {
        let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
        for (const q of r) {
          if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0];
          if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1];
        }
        /* the drilling, raised with its plug: the still ring whose
           width is the hole and whose x straddles the hole */
        if (x0 >= Math.min.apply(null, h.map(q => q[0])) - 0.01 &&
            x1 <= Math.max.apply(null, h.map(q => q[0])) + 0.01)
          best = [(x0 + x1) / 2, (y0 + y1) / 2];
      }
      return best;
    })();
    check('the drillings hold fluid and carry none of the flow',
      drill !== null && f.inside(drill[0], drill[1]) &&
      f.isStill(drill[0], drill[1]) &&
      f.speedAt(drill[0], drill[1]) === 0,
      drill ? 'at ' + drill[0].toFixed(2) + ', ' + drill[1].toFixed(2)
            : 'no drilling found among the still spaces');
    check('and so does the cavity over the plug head',
      f.inside(0, 8.7) && f.isStill(0, 8.7) && f.speedAt(0, 8.7) === 0);
    /* SAMPLED IN THE CASTING, not up the bonnet bore. The point used
       to be (0, 20), which was solid while the bonnet bore was drawn
       as metal. It is not any more, and should not be: the check two
       lines above requires the wetted volume to reach the underside
       of the packing at 20.78, so (0, 20) is now a sample of the
       water this suite just asserted is there. Two checks were
       disagreeing about the same cubic inch. The casting wall is
       unambiguous and makes the point the check is actually for. */
    check('while solid metal is outside the cavity altogether',
      f.speedAt(-13, 6) === null && !f.inside(-13, 6) &&
      f.speedAt(7, 14) === null && !f.inside(7, 14),
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
    /* The window's own centre, for the same reason as the drilling
       above: (-4.8, 3.0) was inside the cage window while the cage
       was drawn at the size it was traced, and outside the valve
       altogether once the cage came in to its published port. */
    const wr = gv.cage.windows[0];
    let wx0 = Infinity, wx1 = -Infinity, wy0 = Infinity, wy1 = -Infinity;
    for (const q of wr) {
      if (q[0] < wx0) wx0 = q[0]; if (q[0] > wx1) wx1 = q[0];
      if (q[1] < wy0) wy0 = q[1]; if (q[1] > wy1) wy1 = q[1];
    }
    const win = f.speedAt((wx0 + wx1) / 2, (wy0 + wy1) / 2);
    const bore = f.speedAt(-14, 0);
    check('the window runs many times the speed of the line',
      win !== null && win > 6 * bore,
      (win === null ? 'the window centre is not in the cavity'
                    : win.toFixed(1)) + ' against ' + bore.toFixed(2));
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
    /* The bar used to be a tenth of the cavity, from when still
       spaces were skipped and the only candidates were separation
       corners. The dead ends ARE the pockets now -- the drillings,
       the space the plug strokes through, the bonnet bore -- and
       together they are more of a valve than a corner is. What the
       check is actually for is that a CHAMBER never qualifies:
       spinning one of those would not be adding an eddy, it would be
       stirring the main stream. */
    /* PINNED TO WHAT IT MEANS, NOT TO A SHARE. A cap of 23% of the
       section was a proxy for "a chamber never qualifies", and it
       stopped being one: the registered ED body's dead ends are
       CONNECTED to each other -- the plug's hollow, the bonnet bore,
       the cage-to-bore clearance, joined exactly as the balance holes
       join them in the valve -- so they come back as one blind volume
       of 35%, and the proxy called that a chamber. It is not a
       chamber; it is a lot of dead end.

       So the thing it is for is asserted directly: the stream itself
       is never inside a pocket. Spinning a chamber would be stirring
       the main flow rather than adding an eddy, and that is checkable
       at the one place it would show. */
    check('recirculation finds dead ends, not chambers',
      rf.pockets.length > 0,
      rf.pockets.map(q => q.cells + ' cells').join(', ') +
      ' out of ' + f.cells);
    check('and the moving stream is never inside one',
      (function () {
        for (const x of [-12, -9, 9, 12]) {
          const v = f.at(x, 0);
          if (!v || v.still) continue;
          if (Math.hypot(v.vx, v.vy) < 1e-9) continue;
          const b = rf.at(x, 0);
          /* in the line the field must be untouched */
          if (Math.abs(Math.hypot(b.vx, b.vy) -
                       Math.hypot(v.vx, v.vy)) > 1e-9) return false;
        }
        return true;
      })(),
      'a pocket that reached the flange would be the model stirring ' +
      'the thing it is trying hardest to get right');
    check('and the still spaces are among them, rather than skipped',
      (function () {
        /* A blind pocket with no net flow is not still water: the
           shear across its mouth turns it over. Skipping them left
           the only places in the model with no velocity at all. */
        let stirred = 0, seen = 0;
        const W = f.width, H = f.height, c = f.cellIn;
        for (let j = 0; j < H; j++)
          for (let i = 0; i < W; i++) {
            const x = f.originIn[0] + (i + 0.5) * c;
            const y = f.originIn[1] + (j + 0.5) * c;
            const a = f.at(x, y);
            if (!a || !a.still) continue;
            seen++;
            const b = rf.at(x, y);
            if (b && Math.hypot(b.vx, b.vy) > 1e-9) stirred++;
          }
        return seen > 0 && stirred > seen * 0.3;
      })(),
      'the drillings and the bonnet bore sat motionless beside ' +
      'several hundred gallons a minute');
    /* The window's own centre, not a coordinate that happened to be
       in it -- see the same fix above. */
    const jet = (function () {
      const r = gv3.cage.windows[0];
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const q of r) {
        if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0];
        if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1];
      }
      return [(x0 + x1) / 2, (y0 + y1) / 2];
    })();
    const a = f.at(jet[0], jet[1]), b = rf.at(jet[0], jet[1]);
    check('and it leaves the stream alone',
      Math.abs(Math.hypot(a.vx, a.vy) - Math.hypot(b.vx, b.vy)) < 1e-9,
      'a swirl added to the jet would be an invention in the one place ' +
      'the model is trying hardest to be right');
    check('it declares itself as added rather than solved',
      /added/i.test(rf.declared) && /irrotational/i.test(rf.declared));

    /* ---- A DECLARED CIRCUIT BEATS AN INFERRED ONE ------------------

       The sense of a pocket is read off the shear against the nearest
       moving cell. That is the right rule when nothing better is
       known, and it is a coin flip when the pocket is symmetric about
       the stream -- which the water inside a plug is. The geometry
       layer knows which side the inlet is on and therefore which way
       that water goes round, so it says so, and this honours it.

       Looked up by the circuit's PROBE and not its centre: the centre
       of a turn through a plug head is inside the plug head, the
       lookup there finds metal, and the declaration was silently
       dropped while the inferred sense happened to agree. */
    {
      const wc = gv3.wettedAt(50, { minGap: 0.612 });
      const common = { rings: wc.rings, throatRings: wc.throatRings,
        stillRings: wc.stillRings, openings: wc.openings,
        stations: gv3.flowPathAt(50).stations, gpm: 1099, cellIn: 0.34 };
      const plain = LPE.flowfield.withRecirculation(
        LPE.flowfield.solveField2D(common));
      const told = LPE.flowfield.withRecirculation(
        LPE.flowfield.solveField2D(
          Object.assign({}, common, { circuits: [wc.balance] })));
      check('the declared balance circuit is the one that gets honoured',
        told.declaredCircuits.length === 1 &&
        plain.declaredCircuits.length === 0,
        'told ' + JSON.stringify(told.declaredCircuits) +
        ', untold ' + JSON.stringify(plain.declaredCircuits));
      const c = wc.balance.centre;
      const L = told.at(c[0] - 1, c[1]), R = told.at(c[0] + 1, c[1]);
      check('and the water in the plug goes up the inlet side',
        L && R && L.vy > 0 && R.vy < 0,
        L && R ? 'left vy ' + L.vy.toFixed(1) + ', right vy ' +
                 R.vy.toFixed(1) : 'the circuit centre is not in the cavity');
      check('and it is still stirred rather than flowing',
        L.still === true && R.still === true,
        'nothing passes through a balance hole on balance; the liquid ' +
        'in it is not therefore at rest');
    }
  }
}

/* ---- THE HALF OF THE CAGE THIS PLANE CANNOT FEED --------------------

   A longitudinal section cuts the plenum annulus twice and only one
   cut touches the inlet. Solved as drawn, the far window carries
   nothing and the picture says half the cage is dead -- which it
   does, measurably: 0.0 ft/s through the far window against 2.0
   through the near one.

   The fix is a declared TRANSFER, not an injection. The same volume
   leaves the chamber on the near side and arrives in the slot on the
   far side, so both flanges still carry the whole of Q and only the
   plane through the cage carries half of it -- which is the truth
   about a section through a round thing, and is worth being able to
   say out loud rather than quietly getting wrong. */
{
  const CATp = LPE.catalogue.load(JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
  /* THE VALVE THE LOOP ACTUALLY DRAWS, and at the cell it draws it
     at. The EWT the rest of this suite uses is three times the size
     and its clearance round the cage is thinner than any cell this
     suite would solve it at -- a fair thing for the field to decline,
     and checked at the end, but not the case to prove the mechanism
     on. */
  const Vp = CATp.part('VALVE/ED/NPS4/P4.375/T2/EQPCT');
  const WPp = LPE.trim.fromCurve({ curve: Vp.cv,
    characterisedBy: Vp.characterisedBy }).widthProfile();
  const CELL = 0.14, GPM_CFS = 1 / 448.831;
  const gvp = LPE.geometry.globeValve({ part: Vp, faceToFace: 14.5,
    lineBore: 4.026, flow: 'down', widthProfile: WPp.width });
  const pct = 75;
  const gpmp = 826 * (gvp.openAreaAt(pct) / gvp.openAreaAt(100));
  const wp = gvp.wettedAt(pct, { minGap: CELL * 1.8 });
  const common = {
    rings: wp.rings, throatRings: wp.throatRings,
    stillRings: wp.stillRings, openings: wp.openings,
    stations: gvp.flowPathAt(pct).stations, gpm: gpmp, cellIn: CELL,
  };
  const bare = LPE.flowfield.solveField2D(common);
  const fed = LPE.flowfield.solveField2D(
    Object.assign({}, common, { plenum: wp.plenum }));

  const midOf = ring => {
    const xs = ring.map(q => q[0]), ys = ring.map(q => q[1]);
    return [(Math.min.apply(null, xs) + Math.max.apply(null, xs)) / 2,
            (Math.min.apply(null, ys) + Math.max.apply(null, ys)) / 2];
  };
  const wins = gvp.cage.windows.map(midOf);
  const spd = (f, p) => f.speedAt(p[0], p[1]);
  const near = wins[0], far = wins[1];

  check('the geometry names the far cut of the plenum and its share',
    wp.plenum && wp.plenum.into.length > 0 && wp.plenum.outOf.length > 0 &&
    Math.abs(wp.plenum.share - 0.5) < 1e-9,
    JSON.stringify({ into: wp.plenum && wp.plenum.into.length,
                     outOf: wp.plenum && wp.plenum.outOf.length,
                     share: wp.plenum && wp.plenum.share }));
  /* A THIRTIETH, not a fiftieth. The bar was 2% of the near window
     and it was measuring the geometry as much as the artefact: the
     cage windows used to be placed by convention, high in the cage and
     far from the chamber, and almost nothing reached the far one. They
     are traced now and they sit lower, just clear of the seat, so the
     far window picks up a little more by diffusion round the annulus
     -- 0.18 ft/s against 5.87 through the near one. Thirty-two times
     is still "carries nothing" in any sense that matters, and 5% still
     fails the moment the far window starts carrying real flow in
     plane, which is the regression this exists to catch. */
  check('drawn as it stands, the far window carries nothing',
    spd(bare, far) < spd(bare, near) * 0.05 && spd(bare, near) > 1,
    'near ' + (spd(bare, near) / 12).toFixed(2) + ' ft/s, far ' +
    (spd(bare, far) / 12).toFixed(2));
  check('with the plenum declared, it carries a great deal',
    spd(fed, far) > 1,
    'far ' + (spd(fed, far) / 12).toFixed(2) + ' ft/s');

  const Qp = gpmp * GPM_CFS * 1728;
  const at = (f, x) => f.fluxThroughX(x) / Qp;
  check('and BOTH flanges still carry the whole of Q',
    Math.abs(at(fed, -6.5) - at(bare, -6.5)) < 0.02 &&
    Math.abs(at(fed, 6.5) - at(bare, 6.5)) < 0.02,
    'in ' + at(fed, -6.5).toFixed(2) + ' out ' + at(fed, 6.5).toFixed(2) +
    ' against ' + at(bare, -6.5).toFixed(2) + ' / ' +
    at(bare, 6.5).toFixed(2) + ' without it -- an injection rather than ' +
    'a transfer halves the velocity in the line, which is a headline ' +
    'number wrong in the picture to fix a detail in the cage');
  check('while the plane through the cage carries half, as it should',
    at(fed, 0) < 0.6 * at(bare, 0),
    at(fed, 0).toFixed(2) + ' of Q against ' + at(bare, 0).toFixed(2) +
    ' -- the rest of it is round the back, out of the section');

  check('and it says, on the field, that it carried it',
    fed.plenumCarried === true && /out of \d+ cells/.test(fed.plenumNote),
    String(fed.plenumNote));

  /* A grid too coarse to hold a third of an inch of clearance cannot
     carry the transfer. Half a transfer would unbalance the problem
     and a silent one would leave a reader of the far window none the
     wiser, so it is skipped whole and declared. */
  const nowhere = LPE.flowfield.solveField2D(Object.assign({}, common, {
    plenum: { into: [[[90, 90], [91, 90], [91, 91], [90, 91]]],
              outOf: wp.plenum.outOf, share: 0.5 } }));
  check('a share with nowhere to land is skipped whole and SAID, not ' +
        'half-done',
    nowhere.plenumCarried === false &&
    /DECLARED AND NOT CARRIED/.test(nowhere.plenumNote),
    String(nowhere.plenumNote));
  check('and skipping it leaves the flow exactly where it was',
    Math.abs(at(nowhere, 0) - at(bare, 0)) < 1e-6,
    'half a transfer would unbalance the problem');
}

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
