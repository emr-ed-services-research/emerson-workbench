/* @layer actuator

   WHAT AN ACTUATOR LOOKS LIKE, AT ITS REAL SIZE -- polygons in inches,
   origin on the face that lands on the valve bonnet.

   Sibling of `geometry`, which does the same job for a valve body, and
   for the same reason: a shape with no scale, no frame and no colour,
   so that whoever draws it decides all three.

   THE OUTLINES ARE VENDORED, NOT TRACED AGAIN. They come from the 657
   Working Model's own pipeline -- Franz's hand-painted masks over
   Figure 6 of D100306X012, assigned, contoured and denoised by the
   same chain this core used for the valve body. Re-tracing the figure
   here would produce a second, worse copy of something already right.
   What this layer adds is the frame: inches instead of crop pixels,
   and an origin an assembly can actually mount on.

   THE DATUM IS THE YOKE'S BOTTOM FACE. Everything is measured up from
   it, because that is the surface that sits on the bonnet. Give the
   valve its own origin and the actuator this one, and mounting them is
   a translation rather than a negotiation.

   ONE FIGURE, SEVEN SIZES, which the manual says outright: "Figure 6
   shows the size 30 through 60". What differs between them lives in
   the catalogue -- effective area, yoke boss, accepted stem, travel,
   thrust -- not in the drawing. So this returns the traced shape, and
   says plainly that a size is a set of numbers rather than a silhouette.

   WHAT IT DOES NOT DO: it has no opinion about where the stem is.
   Travel comes in. See the note in `assembly` about why that seam is
   where it is. */
(function (LPE) {
  'use strict';

  /* The constructed parts, declared. The traced figure gives the
     castings; the stem and the spring it draws parametrically, so
     they are not in the vendored outlines and are built here from
     published diameters and the geometry of the parts around them. */
  const BUILT = ['actuator stem', 'spring'];

  function diaphragm(spec) {
    if (!spec || !spec.figure || !spec.figure.shapes)
      throw new Error('actuator.diaphragm: {figure} is the vendored ' +
        'outline set -- catalogue/actuator-657-figure6.json. This layer ' +
        'does not read files; the consumer that loaded the catalogue ' +
        'loads this too.');
    const part = spec.part;
    if (!part || part.class !== 'actuator')
      throw new Error('actuator.diaphragm: {part} must be a catalogue ' +
        'actuator row. The drawing is shared across sizes, so the SIZE ' +
        'comes from the row and never from the outline.');
    const pct = spec.travelPct === undefined ? 0 : spec.travelPct;
    if (typeof pct !== 'number' || pct < 0 || pct > 100)
      throw new Error('actuator.diaphragm: travel is a percentage, ' +
        '0 to 100; got ' + pct);

    const rated = spec.ratedTravel === undefined
      ? part.dims.maxTravel : spec.ratedTravel;
    if (!(rated > 0))
      throw new Error('actuator.diaphragm: rated travel must be ' +
        'positive inches.');
    if (rated > part.dims.maxTravel + 1e-9)
      throw new Error('actuator.diaphragm: asked for ' + rated +
        ' in of travel on an actuator that reaches ' +
        part.dims.maxTravel + ' in. The assembly layer exists to catch ' +
        'this before a drawing does.');

    const S = spec.figure.shapes;

    /* ---- ONE DRAWING, SEVEN SIZES, AND HOW BIG TO DRAW THIS ONE ------

       Figure 6 covers the size 30 through the 60 and is dimensioned
       to none of them -- the figure's own note says so, and the
       arithmetic agrees: the traced casing comes out 6.91 in across,
       where a size 30's published 46 in2 of effective area needs a
       diaphragm 7.65 in across and a size 45's 105 in2 needs 11.56.
       Drawn at the traced size for every row, a 45 comes out the same
       size as a 30, and both come out too small. Next to a valve
       whose every dimension is published and sourced, that is the
       picture telling a lie the catalogue does not.

       So the figure is scaled per row, on the diaphragm diameter its
       EFFECTIVE AREA implies. That number is published for all seven
       sizes, it is the dimension the actuator is actually specified
       by, and it is the one the drawing can be tied to: the casing
       the figure draws IS the diaphragm chamber.

       NOT THE YOKE BOSS, which the figure's own note suggests and
       which would be the better anchor if it were in the drawing. It
       is not: the published yoke boss is a BORE -- the bonnet boss
       the yoke accepts, 2-1/8 in on a size 30 -- and the traced yoke
       has no bore at its bottom face at all, because the stem is
       drawn parametrically and is not in the traced set. The 2.030 in
       across the bottom of the trace is an outside diameter. Scaling
       a bore to an OD would be matching two different dimensions
       because they are near each other in value.

       The residual is reported rather than hidden: `bossWall` is how
       much yoke is left around the boss this row accepts once the
       figure is scaled. On the smallest size it is almost nothing,
       which is the family figure being generically proportioned and
       not this layer getting it wrong. */
    const area = part.dims.effectiveArea;
    if (!(area > 0))
      throw new Error('actuator.diaphragm: the row has no effective ' +
        'area, so there is no published dimension to draw it at. Every ' +
        '657 row in the catalogue carries one.');
    const impliedDia = Math.sqrt(4 * area / Math.PI);
    const casing = S['lower-diaphragm-casing'];
    if (!Array.isArray(casing) || !Array.isArray(casing[0]))
      throw new Error('actuator.diaphragm: the figure has no traced ' +
        'lower diaphragm casing, which is what the scale is read off.');
    let cx0 = Infinity, cx1 = -Infinity;
    for (const r of casing) for (const q of r) {
      if (q[0] < cx0) cx0 = q[0]; if (q[0] > cx1) cx1 = q[0];
    }
    const FAM = impliedDia / (cx1 - cx0);
    /* EVERY PART IS A LIST OF RINGS. A part with more than one has a
       hole in it -- the yoke's spring housing, the upper casing's two
       travel-stop bosses -- or is a section in two halves, which the
       spring seat and the adjustor are. The first copy of the figure
       kept only the outer ring of each, which is why the spring
       housing had no left wall: there was never a wall, only the left
       edge of a solid lump. */
    const pick = k => {
      const rs = S[k];
      if (!Array.isArray(rs) || !rs.length || !Array.isArray(rs[0]) ||
          !Array.isArray(rs[0][0]))
        throw new Error('actuator.diaphragm: shape "' + k + '" must be a ' +
          'LIST OF RINGS. A flat ring here means the figure was vendored ' +
          'with extract/vendor-657-outlines.js skipped, or by hand -- and a ' +
          'part flattened to one ring loses its holes silently. ' +
          'Regenerate the figure.');
      return rs.map(r => r.map(q => [q[0] * FAM, q[1] * FAM]));
    };
    const shift = (rings, dy) =>
      rings.map(r => r.map(q => [q[0], q[1] + dy]));

    /* ---- WHICH WAY TRAVEL GOES, and it is DOWN -----------------------

       The figure is drawn AT THE UPPER STOP. The Working Model's
       README states it as a physics fact that is also a geometry
       fact: at rest the diaphragm and plate press against the upper
       casing. A direct-acting 657 with no air on it has its spring
       extended and its plate at the top, and air above the diaphragm
       is what drives the stem DOWN.

       So the traced plate position is 100% -- the valve wide open on
       a push-down-to-close plug -- and 0% is the plate the rated
       travel BELOW it. Adding travel to the traced position instead,
       which is what this did first, drives the plate up through the
       upper casing it is already touching. */
    /* ---- HOW FAR IT IS DRAWN TO MOVE, which is not always the
       rated travel ------------------------------------------------

       `ratedTravel` is what the catalogue says and what every number
       uses. `strokeIn` is what the PICTURE moves, and a caller hands
       it in when the valve this actuator is bolted to cannot be drawn
       stroking its full rating -- geometry publishes that as
       `drawnTravel`, and on the archetype in this core it is short.

       Without it the plate strokes 2 in over a plug that strokes
       1.12, the stem connector between them stretches, and the
       assembly visibly comes apart as the slider moves. The two are
       clamped together by a steel part; they cannot disagree. */
    const stroke = spec.strokeIn === undefined ? rated : spec.strokeIn;
    if (!(stroke >= 0) || stroke > rated + 1e-9)
      throw new Error('actuator.diaphragm: {strokeIn} is how far the ' +
        'picture moves and it cannot exceed the rated travel it is a ' +
        'short version of; got ' + stroke + ' against ' + rated + '.');
    const dy = (pct / 100 - 1) * stroke;

    const yoke = pick('yoke');
    const lower = pick('lower-diaphragm-casing');
    const upper = pick('upper-diaphragm-casing');
    const plate = shift(pick('diaphragm-plate'), dy);
    /* THE SEAT DOES NOT MOVE. It rides on the adjustor screw, low in
       the yoke, and the adjustor is what sets preload -- so the
       spring is compressed between a FIXED seat and a MOVING plate.
       Moving the seat with the plate, which is what this did first,
       keeps the coil exactly 3.85 in long at every travel: a spring
       that never compresses, in a spring-and-diaphragm actuator. The
       traced y values say which is which -- adjustor 4.1-5.8, seat
       5.7-6.3, plate 10.1-10.8 -- and they were there to be read. */
    const seat = pick('spring-seat');
    const adj = pick('spring-adjustor');

    const ext = parts => {
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const rings of parts) for (const r of rings) for (const q of r) {
        if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0];
        if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1];
      }
      return { x0: x0, x1: x1, y0: y0, y1: y1 };
    };

    /* ---- the stem, constructed ----
       The figure draws it parametrically so it is not in the traced
       set. Built on the centreline at the diameter of the valve stem
       this actuator accepts, which is the only published diameter in
       play, from the plate down through the yoke and out of the
       bottom to meet the valve.

       It moves RIGIDLY with the plate. Pinning its bottom end and
       letting its top follow draws a stem that gets longer as the
       valve opens; the real one translates, and its bottom end has to
       translate too or it parts company with the valve stem it is
       clamped to -- which is moving by exactly the same amount. */
    const rStem = (part.dims.stemAccepted || 0.375) / 2;
    const pe = ext([plate]);
    const below = spec.stemBelow === undefined ? 1.2 : spec.stemBelow;
    const stem = [[[-rStem, -below + dy], [rStem, -below + dy],
                   [rStem, pe.y0 + 0.02], [-rStem, pe.y0 + 0.02]]];

    /* ---- the spring, constructed ----
       From the spring seat UP to the diaphragm plate, which is what
       the traced parts actually say: seat at y 5.7-6.3, plate at
       10.1-10.8, adjustor BELOW the seat at 4.1-5.8 where it belongs
       -- it is the screw that sets preload, not a part the spring
       pushes against directly. Written the other way round first and
       the coil came back empty, which is the drawing refusing to
       agree with an assumption about it.

       Drawn as a zig-zag, which is what a section through a coil
       looks like, at the MEAN RADIUS OF THE SEAT -- the middle of the
       annular face the coil stands on. That radius is readable now
       that the seat is both of its halves rather than one; with only
       the outer ring there was nothing to take a mean of and the coil
       was drawn at a fraction of the outer edge instead.

       The turn count is a fact about the spring rather than about
       this figure, so it is an option with a stated default, and the
       whole thing is listed in `built`. It COMPRESSES: the plate
       moves with travel and the seat does not, so the coil is shorter
       as the valve closes, which is the entire mechanism. */
    const se = ext([seat]);
    const half = seat[seat.length - 1];
    const hx = half.map(q => Math.abs(q[0]));
    const coil = [];
    const bot = se.y1, top = pe.y0;
    if (bot < top) {
      const turns = spec.springTurns === undefined ? 8 : spec.springTurns;
      const r = (Math.min.apply(null, hx) + Math.max.apply(null, hx)) / 2;
      const n = Math.max(4, Math.round(turns * 2));
      for (let i = 0; i <= n; i++)
        coil.push([(i % 2 ? r : -r), bot + (top - bot) * (i / n)]);
    }

    /* ---- THE DIAPHRAGM, ROLLED -------------------------------------

       Not a shape that moves: a rolling diaphragm's moulded fold
       travels DOWN at half the plate's rate while the clamped rims
       stay where they are, and the rubber drapes onto the casing
       floor rather than passing through it. The measured centreline
       is warped piecewise and never re-approximated, which is the
       model's own discipline carried across with the geometry.

       `press` is how far the plate has come DOWN from the figure's
       own at-rest position, which is the top of the stroke -- so it
       is -dy, and it is zero wide open. */
    const sheet = (function () {
      const D = spec.figure.diaphragm;
      if (!D || !Array.isArray(D.centerline)) return null;
      const f = D.fold, press = -dy / FAM;   /* trace inches */
      const dyL = x => {
        if (x <= f.outerL) return 0;
        if (x < f.foldL0) return press * 0.5 * (x - f.outerL) /
                                 (f.foldL0 - f.outerL);
        if (x <= f.foldL1) return press * 0.5;
        if (x < f.plateL) return press * (0.5 + 0.5 * (x - f.foldL1) /
                                          (f.plateL - f.foldL1));
        return press;
      };
      const dyR = x => {
        if (x >= f.outerR) return 0;
        if (x > f.foldR0) return press * 0.5 * (f.outerR - x) /
                                 (f.outerR - f.foldR0);
        if (x >= f.foldR1) return press * 0.5;
        if (x > f.plateR) return press * (0.5 + 0.5 * (f.foldR1 - x) /
                                          (f.foldR1 - f.plateR));
        return press;
      };
      const half = D.band / 2;
      const pts = D.centerline.map(function (q, i) {
        let y = q[1] - (q[0] < 0 ? dyL(q[0]) : dyR(q[0]));
        const fl = D.floor[i];
        /* rubber cannot pass metal: held above its own floor */
        if (fl !== null && fl !== undefined) y = Math.max(y, fl + half + 0.006);
        return [q[0] * FAM, y * FAM];
      });
      return Object.freeze({ points: Object.freeze(pts),
        band: D.band * FAM, note: D._note });
    })();

    /* The stem connector and the travel indicator move with the stem:
       the connector is clamped to both stems and the indicator disc
       is locked to the valve stem under it. */
    const conn = (spec.figure.connector || [])
      .map(r => r.map(q => [q[0] * FAM, q[1] * FAM + dy]));
    const indic = (spec.figure.indicator || [])
      .map(r => r.map(q => [q[0] * FAM, q[1] * FAM + dy]));

    const castings = [yoke, lower, upper];
    const all = castings.concat([plate, seat, adj, stem]);

    return Object.freeze({
      kind: 'diaphragmActuator',
      units: 'inches, x from the centreline, y up from the mounting face',
      part: part, size: part.size, family: part.family,
      travelPct: pct, ratedTravel: rated, lift: dy,
      /* Each of these is a LIST OF RINGS, outer first; fill even-odd. */
      yoke: Object.freeze(yoke),
      lowerCasing: Object.freeze(lower),
      upperCasing: Object.freeze(upper),
      plate: Object.freeze(plate),
      springSeat: Object.freeze(seat),
      adjustor: Object.freeze(adj),
      stem: Object.freeze(stem),
      spring: Object.freeze(coil),
      /* The rolling diaphragm, warped for this travel. */
      sheet: sheet,
      /* IOM key 26 -- two halves, cap screws and a spacer, clamped
         round BOTH stems. The part that makes two parts one machine,
         and the reason the plug and the plate cannot disagree. */
      connector: Object.freeze(conn.map(Object.freeze)),
      indicator: Object.freeze(indic.map(Object.freeze)),
      stroke: stroke,
      /* Where it bolts on, and how wide that face is. An assembly
         puts this point on the valve's bonnet and the two are
         mounted. */
      mount: Object.freeze({ x: 0, y: 0, yokeBoss: part.dims.yokeBoss }),
      /* What the family scaling did, in the open. */
      figureScale: FAM,
      impliedDiaphragm: impliedDia,
      bossWall: (function () {
        let w = -Infinity;
        for (const q of yoke[0]) if (q[1] < 0.02 && Math.abs(q[0]) > w)
          w = Math.abs(q[0]);
        return w === -Infinity ? null
          : w - part.dims.yokeBoss / 2;
      })(),
      extent: ext(all),
      built: Object.freeze(BUILT.slice()),
      note:
        'Drawn at ' + FAM.toFixed(3) + 'x the traced figure, so the '
      + 'casing matches the ' + impliedDia.toFixed(2) + ' in diaphragm '
      + 'the published ' + area + ' in2 of effective area on this row '
      + 'implies -- Figure 6 is one drawing for sizes 30 through 60 and '
      + 'is dimensioned to none of them. Travel, the stem diameter and '
      + 'the mounting face are NOT scaled: those are published for this '
      + 'row and are drawn at their own size. '
      + 'Castings traced: yoke, both diaphragm casings, the plate, the '
      + 'spring seat and the adjustor, from Figure 6 of D100306X012 via '
      + 'the 657 Working Model pipeline. CONSTRUCTED here and listed in '
      + '`built`: the actuator stem, drawn on the centreline at the '
      + 'valve stem diameter this actuator accepts, and the spring, '
      + 'drawn as a zig-zag section of a coil. The figure draws both '
      + 'parametrically so neither is in the traced set.',
      figureNote: spec.figure._note || null,
    });
  }

  LPE.actuator = { diaphragm: diaphragm, BUILT: BUILT };

})(window.LPE = window.LPE || {});
