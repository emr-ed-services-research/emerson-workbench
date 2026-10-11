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
    const pick = k => (S[k] || []).map(q => [q[0], q[1]]);
    const lift = (ring, dy) => ring.map(q => [q[0], q[1] + dy]);

    /* Direct-acting, push-down-to-close: air above the diaphragm
       drives the stem DOWN and shuts the valve, the spring returns
       it. So full travel is the plate at its HIGHEST, and 0% is the
       plate down on the seat. */
    const dy = (pct / 100) * rated;

    const yoke = pick('yoke');
    const lower = pick('lower-diaphragm-casing');
    const upper = pick('upper-diaphragm-casing');
    const plate = lift(pick('diaphragm-plate'), dy);
    /* THE SEAT DOES NOT MOVE. It rides on the adjustor screw, low in
       the yoke, and the adjustor is what sets preload -- so the
       spring is compressed between a FIXED seat and a MOVING plate.
       Lifting the seat with the plate, which is what this did first,
       keeps the coil exactly 3.85 in long at every travel: a spring
       that never compresses, in a spring-and-diaphragm actuator. The
       traced y values say which is which -- adjustor 4.1-5.8, seat
       5.7-6.3, plate 10.2-10.8 -- and they were there to be read. */
    const seat = pick('spring-seat');
    const adj = pick('spring-adjustor');

    const ext = rings => {
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const r of rings) for (const q of r) {
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
       bottom to meet the valve. Declared in `built`. */
    const rStem = (part.dims.stemAccepted || 0.375) / 2;
    const pe = ext([plate]);
    const below = spec.stemBelow === undefined ? 1.2 : spec.stemBelow;
    const stem = [[-rStem, -below], [rStem, -below],
                  [rStem, pe.y0 + 0.02], [-rStem, pe.y0 + 0.02]];

    /* ---- the spring, constructed ----
       From the spring seat UP to the diaphragm plate, which is what
       the traced parts actually say: seat at y 5.7-6.3, plate at
       10.2-10.8, adjustor BELOW the seat at 4.1-5.8 where it belongs
       -- it is the screw that sets preload, not a part the spring
       pushes against directly. Written the other way round first and
       the coil came back empty, which is the drawing refusing to
       agree with an assumption about it.

       Drawn as a zig-zag, which is what a section through a coil
       looks like. The turn count is a fact about the spring rather
       than about this figure, so it is an option with a stated
       default, and the whole thing is listed in `built`. It also
       COMPRESSES: the plate moves with travel and the seat does not,
       so the coil is shorter at full lift, which is the entire
       mechanism. */
    const se = ext([seat]);
    const coil = [];
    const bot = se.y1, top = pe.y0;
    if (bot < top) {
      const turns = spec.springTurns === undefined ? 8 : spec.springTurns;
      const r = Math.max(Math.abs(se.x0), se.x1) * 0.82;
      const n = Math.max(4, Math.round(turns * 2));
      for (let i = 0; i <= n; i++)
        coil.push([(i % 2 ? r : -r), bot + (top - bot) * (i / n)]);
    }

    const castings = [yoke, lower, upper].filter(r => r.length > 2);
    const all = castings.concat([plate, seat, adj, stem]
      .filter(r => r.length > 2));

    return Object.freeze({
      kind: 'diaphragmActuator',
      units: 'inches, x from the centreline, y up from the mounting face',
      part: part, size: part.size, family: part.family,
      travelPct: pct, ratedTravel: rated, lift: dy,
      yoke: Object.freeze(yoke),
      lowerCasing: Object.freeze(lower),
      upperCasing: Object.freeze(upper),
      plate: Object.freeze(plate),
      springSeat: Object.freeze(seat),
      adjustor: Object.freeze(adj),
      stem: Object.freeze(stem),
      spring: Object.freeze(coil),
      /* Where it bolts on, and how wide that face is. An assembly
         puts this point on the valve's bonnet and the two are
         mounted. */
      mount: Object.freeze({ x: 0, y: 0, yokeBoss: part.dims.yokeBoss }),
      extent: ext(all),
      built: Object.freeze(BUILT.slice()),
      note:
        'Castings traced: yoke, both diaphragm casings, the plate, the '
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
