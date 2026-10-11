/* @layer trim
   @core Process Core -- what a valve DOES as it strokes.
   May use: nothing. One valve, its own characteristic curve.
   Never: a netlist, a frame, a scale, a colour, a drawing.
   Sits beside `geometry`, `sizing` and `instrument`: shape, flow
   physics, observation and now actuation, each for a single part.
   See `00 - Project/Process Core -- Flow Lab Plan.md`, Phase 5.       */
/* ---------------- TRIM: travel is not position ----------------------

   A valve at 50% travel does not pass 50% of its flow. Which fraction
   it passes is the INHERENT CHARACTERISTIC, and it is a property of
   the trim -- the cage or plug -- not of the valve body.

   Fisher Catalog 12 prints it directly, as Cv at every 10 percent of
   travel, and the shapes are unmistakable once read:

     travel %        10   20   30   40   50   60   70   80   90  100
     quick-opening   19   36   54   68   78   89   94   97   99  100
     linear           9   20   33   46   58   69   77   87   94  100
     equal-%          3    7   11   15   23   34   49   72   90  100

   Equal percentage barely opens through the first third and then runs
   away; quick-opening does most of its work immediately. Those are
   percentages of each valve's own full-open Cv, from the catalogue, not
   from an idealised formula -- which matters, because the textbook
   curves are definitions and a real cage only approximates them.

   AND THEN THE INSTALLED CHARACTERISTIC, which is the part that
   actually bites in service. The inherent curve assumes a constant
   pressure drop across the valve. In a real line the rest of the
   system takes a share, and that share grows as flow grows, so the
   valve sees less and less drop as it opens. The result is that an
   equal-percentage trim installed in a resistive line behaves roughly
   LINEAR, and a linear trim in the same line behaves like quick
   opening. Choosing trim without knowing valve authority is choosing
   blind, and this layer can finally compute it, because Phase 2 gave
   the core a sourced way to say what the rest of the line costs.

   SEAT LEAKAGE is here too, from the Control Valve Handbook's account
   of `ANSI/FCI 70-2` and IEC 60534-4. Class is not a performance
   figure a model should interpolate: it is a test result with a stated
   procedure, so it is carried as data and reported, never computed.  */
'use strict';

(function (LPE) {

  /* ---- the inherent characteristic ---------------------------------- */

  function fromCurve(spec) {
    if (!spec || !Array.isArray(spec.curve) || spec.curve.length < 2)
      throw new Error('trim.fromCurve: needs the measured Cv at each travel ' +
        'point. A characteristic is a curve, and two points is the least ' +
        'that can be called one.');
    const curve = spec.curve.slice();
    for (const c of curve)
      if (typeof c !== 'number' || !(c >= 0))
        throw new Error('trim.fromCurve: every Cv must be a non-negative ' +
          'number; got ' + JSON.stringify(c));
    for (let i = 1; i < curve.length; i++)
      if (curve[i] < curve[i - 1])
        throw new Error('trim.fromCurve: Cv falls between ' +
          (i * 100 / curve.length) + '% and ' + ((i + 1) * 100 / curve.length) +
          '% travel (' + curve[i - 1] + ' to ' + curve[i] + '). A valve that ' +
          'passes less as it opens is a transcription error, not a trim.');

    /* Travel points. Catalog 12 prints 10 through 100 in tens, so the
       first point is one step in, NOT zero -- assuming a leading zero
       would shift every reading by one step. */
    const n = curve.length;
    const at = spec.travelPct || curve.map((_, i) => (i + 1) * 100 / n);
    if (at.length !== n)
      throw new Error('trim.fromCurve: ' + at.length + ' travel points for ' +
        n + ' coefficients.');

    const cvMax = curve[n - 1];
    if (!(cvMax > 0))
      throw new Error('trim.fromCurve: full-open Cv must be positive.');

    /* Rangeability: the ratio of the largest to the smallest controllable
       Cv the catalogue actually prints. Not a nameplate claim -- the
       printed points are what there is evidence for. */
    const rangeability = curve[0] > 0 ? cvMax / curve[0] : null;

    /* Linear interpolation between printed points, and nothing beyond
       them. Below the first point the catalog says nothing -- that is
       the seat region, where leakage class governs rather than Cv --
       so it returns null instead of extrapolating to zero. */
    function cvAt(travel) {
      if (typeof travel !== 'number' || travel < 0 || travel > 100)
        throw new Error('trim.cvAt: travel is a percentage, 0 to 100; got ' +
          travel);
      if (travel < at[0]) return null;
      for (let i = 1; i < n; i++)
        if (travel <= at[i]) {
          const f = (travel - at[i - 1]) / (at[i] - at[i - 1]);
          return curve[i - 1] + f * (curve[i] - curve[i - 1]);
        }
      return cvMax;
    }

    /* Classification by SHAPE, against the two textbook forms, rather
       than by trusting the label on the page. A cage whose curve does
       not match what it is called is worth knowing about. */
    function classify() {
      const frac = at.map((t, i) => ({ t: t / 100, y: curve[i] / cvMax }));
      /* linear: y = t.  equal-%: y = R^(t-1) with rangeability R.
         Score both and take the closer, reporting the residual so a
         poor match cannot masquerade as a confident answer.

         R IS THE CURVE'S OWN RANGEABILITY, NOT A CONSTANT. It used to
         be a flat 50, which is a number out of nowhere: real cages run
         anywhere from 20:1 to 40:1 and a reduced-port body lower still.
         Assuming 50 scored every cage against a curve steeper than the
         one it actually has, and it mattered -- an EWT 10x8 whose cage
         is labelled equal-percentage came out LINEAR, because the
         reference it was being compared against was not its reference.

         Fitting R freely would score better still, and would be wrong:
         turned loose it settles near 2.5 on quick-opening cages, where
         R^(t-1) stops being the equal-percentage form and is just a
         flexible curve that fits anything. The measured rangeability is
         a fact about this cage, costs no free parameter, and leaves the
         three candidates comparable. Against Catalog 12's own labels it
         agrees on 88 of 105 cages where the constant managed 86. */
      const R = rangeability > 1 ? rangeability : 50;
      let eLin = 0, eEq = 0, eQo = 0;
      for (const p of frac) {
        eLin += Math.pow(p.y - p.t, 2);
        eEq += Math.pow(p.y - Math.pow(R, p.t - 1), 2);
        eQo += Math.pow(p.y - Math.sqrt(p.t), 2);
      }
      const cands = [
        { name: 'linear', err: Math.sqrt(eLin / frac.length) },
        { name: 'equal-percentage', err: Math.sqrt(eEq / frac.length) },
        { name: 'quick-opening', err: Math.sqrt(eQo / frac.length) },
      ].sort((a, b) => a.err - b.err);
      return {
        shape: cands[0].name, rms: cands[0].err,
        runnerUp: cands[1].name, runnerUpRms: cands[1].err,
        confident: cands[1].err > cands[0].err * 1.5,
      };
    }

    /* ---- INSTALLED CHARACTERISTIC ---------------------------------
       The valve shares the total driving pressure with the rest of the
       line. At each travel the flow satisfies

         q = Cv(h) * sqrt(dPvalve / sg)   and   dPtotal = dPvalve + K*rho*V^2/2

       which, with the system expressed as an equivalent Cv, closes to

         q = sqrt(dPtotal / sg) / sqrt(1/Cv(h)^2 + 1/Cvsys^2)

       -- two resistances in series. `authority` is the fraction of the
       total drop the valve takes when fully open, the number every
       trim-selection rule of thumb is written in terms of. */
    function installed(cvSystem, points) {
      if (!(cvSystem > 0))
        throw new Error('trim.installed: give the rest of the line as an ' +
          'equivalent Cv. Without it there is no installed characteristic ' +
          '-- only the inherent one, which assumes constant valve drop and ' +
          'is why trim chosen on paper misbehaves in a pipe.');
      const series = cv => 1 / Math.sqrt(1 / (cv * cv) + 1 / (cvSystem * cvSystem));
      const qMax = series(cvMax);
      const ts = points || at;
      const out = ts.map(t => {
        const cv = cvAt(t);
        return { travel: t, cv: cv,
                 flowFrac: cv === null ? null : series(cv) / qMax };
      });
      return {
        points: out,
        authority: (cvMax * cvMax) === 0 ? null
          : 1 / (1 + (cvMax * cvMax) / (cvSystem * cvSystem)),
        cvSystem: cvSystem,
      };
    }

    /* ---- WHAT SHAPE PRODUCED THIS CURVE -----------------------------

       A plug uncovers its opening from the bottom up, so the open area
       at travel t is the INTEGRAL of the opening's width over the height
       already uncovered:

         Cv(t)  ~  A(t)  =  INTEGRAL from 0 to t of w(h) dh
         therefore   w(t)  ~  dCv/dt

       So differentiating the manufacturer's published curve recovers the
       shape of the thing that produced it, which otherwise has to be
       traced off a photograph or invented. Checked against Control Valve
       Handbook Figure 3.37 across every cage in Catalog 12: equal
       percentage comes out narrow at the bottom and flaring hard above
       half travel -- the trumpet in that photograph -- and agrees to an
       sd of 0.06 to 0.09 in the early bands over 42 cages of differing
       size and body. Linear comes out near-flat, which is the
       near-rectangular window the photograph shows. Two independent
       routes to the same shape.

       WHAT IT MEANS DEPENDS ON THE ARCHETYPE, which is why this refuses
       to say unless told:

         cage   the TOTAL window width at that height, summed over every
                window. A cage with alternating window sizes -- which the
                equal-percentage cages have -- cannot be separated into
                individual windows by this method, because the curve only
                ever saw their sum.
         plug   the rate the annular opening between plug bevel and seat
                bore grows, which is a statement about the bevel contour
                rather than about any window. EZ bodies are these: their
                own manual names a seat ring retainer and never a cage.

       A BAND IS AN AVERAGE, NOT A POINT. Catalog 12 prints Cv every ten
       percent, so each difference is the mean width over that band. The
       stations are reported at band MIDPOINTS for that reason -- putting
       them at the upper edge would shift the whole profile half a band
       toward the top and make an equal-percentage cage look later-opening
       than it is.

       The absolute width is NOT recoverable here. Normalised shape is;
       scale needs the window count, and A at full travel for a balanced
       cage-guided plug is the total window area rather than the port
       area. Those must not be quietly equated, so `width` is normalised
       and `raw` is left in Cv per percent of travel for a caller that
       later earns the right to scale it. */
    function widthProfile() {
      if (n < 4)
        throw new Error('trim.widthProfile: ' + n + ' printed points is too ' +
          'few to differentiate into a shape. Three bands cannot show a ' +
          'flare from a taper, and a profile drawn from them would be ' +
          'decoration with a derivation attached.');

      const raw = [], station = [];
      let prev = 0, prevAt = 0;
      for (let i = 0; i < n; i++) {
        const span = at[i] - prevAt;
        if (!(span > 0))
          throw new Error('trim.widthProfile: travel points must increase; ' +
            'got ' + prevAt + ' then ' + at[i] + '.');
        raw.push((curve[i] - prev) / span);
        station.push((prevAt + at[i]) / 2);
        prev = curve[i];
        prevAt = at[i];
      }

      const peak = Math.max.apply(null, raw);
      if (!(peak > 0))
        throw new Error('trim.widthProfile: the curve never rises, so there ' +
          'is no opening to describe.');

      const arch = spec.characterisedBy || null;
      const MEANS = {
        cage: 'total cage window width at this height, summed over all ' +
              'windows -- alternating window sizes are not separable from ' +
              'the curve alone',
        plug: 'the rate the annular opening between plug bevel and seat ' +
              'bore grows, which describes the bevel contour',
      };
      if (arch !== null && !(arch in MEANS))
        throw new Error('trim.widthProfile: characterisedBy must be "cage" ' +
          'or "plug"; got ' + JSON.stringify(arch) + '. They are different ' +
          'parts and the profile means a different thing for each.');

      return Object.freeze({
        at: Object.freeze(station),
        width: Object.freeze(raw.map(x => x / peak)),
        raw: Object.freeze(raw),
        units: 'Cv per percent of travel',
        archetype: arch,
        means: arch === null ? null : MEANS[arch],
        note: arch === null
          ? 'No archetype was declared, so this profile has a shape but no ' +
            'stated geometric meaning. Pass characterisedBy: "cage" or ' +
            '"plug" -- the catalogue records it per valve.'
          : null,
      });
    }

    return Object.freeze({
      curve: Object.freeze(curve), travelPct: Object.freeze(at),
      cvMax: cvMax, rangeability: rangeability,
      source: spec.source || null, label: spec.label || null,
      cvAt: cvAt, classify: classify, installed: installed,
      widthProfile: widthProfile,
    });
  }

  /* ---- SEAT LEAKAGE -------------------------------------------------
     ANSI/FCI 70-2 and IEC 60534-4, as set out in the Control Valve
     Handbook 6th ed. section 5.2. These are TEST RESULTS with stated
     procedures, not a continuum -- so they are looked up and reported,
     never interpolated between. */
  const LEAKAGE = {
    I:   { max: null, medium: null, note: 'no test required, provided user and supplier so agree' },
    II:  { max: '0.5% of rated capacity',    medium: 'air or water at 10-52 C' },
    III: { max: '0.1% of rated capacity',    medium: 'air or water at 10-52 C' },
    IV:  { max: '0.01% of rated capacity',   medium: 'air or water at 10-52 C' },
    V:   { max: '0.0005 ml/min of water per inch of orifice diameter per psi differential',
           medium: 'water at 10-52 C' },
    VI:  { max: 'per port diameter, see bubbleTable', medium: 'air or nitrogen at 10-52 C' },
  };
  const LEAKAGE_SOURCE =
    'Control Valve Handbook 6th ed. section 5.2, in accordance with ' +
    'ANSI/FCI 70-2 and IEC 60534-4. The standard itself is registered ' +
    'but has not been opened -- see 20 - Source Library/Standards/' +
    'ansi-fci-70-2.md.';

  /* Class VI allowable, by nominal port diameter. Handbook section 5.3. */
  const CLASS_VI = [
    { portIn: 1,     mlPerMin: 0.15, bubblesPerMin: 1 },
    { portIn: 1.5,   mlPerMin: 0.30, bubblesPerMin: 2 },
    { portIn: 2,     mlPerMin: 0.45, bubblesPerMin: 3 },
    { portIn: 2.5,   mlPerMin: 0.60, bubblesPerMin: 4 },
    { portIn: 3,     mlPerMin: 0.90, bubblesPerMin: 6 },
    { portIn: 4,     mlPerMin: 1.70, bubblesPerMin: 11 },
    { portIn: 6,     mlPerMin: 4.00, bubblesPerMin: 27 },
  ];

  function leakage(cls, portIn) {
    const k = String(cls).toUpperCase();
    const row = LEAKAGE[k];
    if (!row)
      throw new Error('trim.leakage: "' + cls + '" is not a seat leakage ' +
        'class. They are ' + Object.keys(LEAKAGE).join(', ') + '.');
    const out = { cls: k, max: row.max, medium: row.medium,
                  note: row.note || null, source: LEAKAGE_SOURCE };
    if (k === 'VI') {
      if (typeof portIn !== 'number')
        throw new Error('trim.leakage: Class VI is stated per port ' +
          'diameter, so the port is required. There is no single Class VI ' +
          'number to quote.');
      const hit = CLASS_VI.find(r => Math.abs(r.portIn - portIn) < 1e-9);
      if (!hit)
        throw new Error('trim.leakage: Class VI is tabulated at ' +
          CLASS_VI.map(r => r.portIn).join(', ') + ' in. Port ' + portIn +
          ' in is not one of them, and this table is not interpolated -- ' +
          'the entries are test allowables, not samples of a curve.');
      out.mlPerMin = hit.mlPerMin;
      out.bubblesPerMin = hit.bubblesPerMin;
    }
    return out;
  }

  LPE.trim = {
    fromCurve: fromCurve, leakage: leakage,
    LEAKAGE_CLASSES: Object.keys(LEAKAGE), CLASS_VI: CLASS_VI,
  };

})(window.LPE = window.LPE || {});
