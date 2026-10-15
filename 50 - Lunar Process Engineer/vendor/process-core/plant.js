/* @layer plant
   @core Process Core -- composition.

   ONE PATH THROUGH A LINE AND WHAT IS IN IT.

   The netlist says what is connected to what. geometry says what one part
   looks like at its real size. Nothing in this core joined those two
   answers together, and so every consumer that wanted to draw a line with
   a valve in it had to invent the join itself -- in page code, with its
   own private arithmetic for scale, for centreline, for where the lane of
   a particle goes when it crosses a flange.

   That gap cost more than any defect in the model. It produced a seam at
   every joint, and each seam was fixed somewhere different: a sign here, a
   magnification there, a paint order somewhere else. There was no single
   place where "correct" was defined, so there was no way to be correct.

   This is that place. A plant run is ONE continuous centreline, in inches,
   from the start of the upstream line, through whatever the line contains,
   to the end of the downstream line. Every station on it carries its own
   bore, area and half-width. A consumer asks `at(s)` and gets a position,
   a direction, a width and a speed. Crossing into the component is not an
   event -- it is simply a later value of s.

   What this layer may NOT do: draw, name a colour, choose a magnification,
   or know that a consumer exists. It composes; the view decides how to
   look at it.                                                          */

'use strict';

(function (LPE) {

  const PI = Math.PI;

  function need(o, keys, who) {
    for (const k of keys)
      if (o === null || o === undefined || o[k] === undefined)
        throw new Error(who + ': {' + k + '} is required. ' +
          'A plant run cannot be composed from a partial description, and ' +
          'guessing is how a join ends up wrong in a way nobody can see.');
  }

  const areaOf = (bore) => PI * bore * bore / 4;

  /* ---- THE BORE AT A COMPONENT FACE ---------------------------------

     A component's flow path starts and ends at its own end connection.
     Whether that matches the line it is being put into is a real
     question with a real answer, and it is the question this core had
     no way to ask -- which is exactly why a 6.065 in line met a 4.82 in
     valve opening for weeks and the only symptom was a step somebody
     kept trying to fix in the drawing.

     If they differ there is a REDUCER there, in the world. Either the
     caller says so and gives it a length, or this refuses. It will not
     quietly butt two different bores together, and it will not quietly
     resize one to match the other. */
  function faceBore(station, who) {
    if (station.halfW === undefined)
      throw new Error(who + ': a flow-path station carries no halfW, so ' +
        'its bore at the face is unknown and the join cannot be checked.');
    return station.halfW * 2;
  }

  /* ---- A RUN --------------------------------------------------------

     bore        the line bore, inches
     upstream    inches of line before the component
     downstream  inches of line after it
     component   optional: { stations } from geometry.flowPathAt(pct)
     transition  optional: { length } -- the reducer, if the bores differ
     gpm         optional: gives every station a velocity                */
  function run(opts) {
    const o = opts || {};
    need(o, ['bore', 'upstream', 'downstream'], 'plant.run');
    if (!(o.bore > 0)) throw new Error('plant.run: {bore} must be positive.');

    const lineA = areaOf(o.bore);
    const pts = [];
    const push = (x, y, bore, area, halfW, what) =>
      pts.push({ x: x, y: y, bore: bore, area: area, halfW: halfW,
                 what: what });

    let x = 0;
    push(x, 0, o.bore, lineA, o.bore / 2, 'line');

    const comp = o.component;
    if (comp) {
      need(comp, ['stations'], 'plant.run component');
      const st = comp.stations;
      if (!Array.isArray(st) || st.length < 2)
        throw new Error('plant.run: a component needs at least two flow-path ' +
          'stations -- where the fluid comes in and where it leaves.');

      const inBore = faceBore(st[0], 'plant.run component inlet');
      const outBore = faceBore(st[st.length - 1], 'plant.run component outlet');
      const tol = 0.001;

      /* The join, checked in the one place that can check it. */
      for (const [label, b] of [['inlet', inBore], ['outlet', outBore]]) {
        if (Math.abs(b - o.bore) > tol && !o.transition)
          throw new Error('plant.run: the line bore is ' + o.bore.toFixed(3) +
            ' in and the component ' + label + ' is ' + b.toFixed(3) + ' in. ' +
            'Those are different bores, so there is a REDUCER between them ' +
            'in the world. Give {transition: {length}} and it will be put ' +
            'on the path, or make them equal. This is refused rather than ' +
            'butted together because a silent step at a flange is invisible ' +
            'in every number and obvious in every drawing.');
      }

      const lead = o.transition ? o.transition.length : 0;
      if (o.transition && !(lead > 0))
        throw new Error('plant.run: {transition.length} must be positive. A ' +
          'reducer with no length is a step with a nicer name.');

      x += o.upstream;
      push(x, 0, o.bore, lineA, o.bore / 2, 'line');

      if (lead) {
        x += lead;
        push(x, 0, inBore, areaOf(inBore), inBore / 2, 'reducer');
      }

      /* The component's own stations, carried across unchanged except for
         where they sit. Its first station IS the point just pushed -- the
         same place, not a second one that has to be made to agree. */
      const x0 = x, sx = st[0].x;
      for (let i = 1; i < st.length; i++) {
        const q = st[i];
        push(x0 + (q.x - sx), q.y, q.halfW * 2, q.area, q.halfW,
             q.what || 'component');
      }
      x = x0 + (st[st.length - 1].x - sx);

      if (lead) {
        x += lead;
        push(x, 0, o.bore, lineA, o.bore / 2, 'reducer');
      }
      x += o.downstream;
      push(x, 0, o.bore, lineA, o.bore / 2, 'line');
    } else {
      x += o.upstream + o.downstream;
      push(x, 0, o.bore, lineA, o.bore / 2, 'line');
    }

    /* ---- arc length, once, for everything ---------------------------
       Every consumer that wanted to walk this path previously computed
       its own distances, in its own units, from its own origin. */
    let total = 0;
    pts[0].s = 0;
    for (let i = 1; i < pts.length; i++) {
      const d = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
      total += d;
      pts[i].s = total;
    }
    if (!(total > 0))
      throw new Error('plant.run: the composed path has no length.');

    /* Velocity from continuity, where a flow was given. Feet per second
       from US gallons per minute and square inches: 0.3208 is gpm to
       ft/s for one square inch of area. */
    const gpm = o.gpm;
    if (gpm !== undefined) {
      if (!(gpm >= 0))
        throw new Error('plant.run: {gpm} must be zero or positive.');
      for (const p of pts) p.ftps = 0.3208 * gpm / p.area;
    }

    function at(s) {
      let r = s;
      if (!(r >= 0)) r = 0;
      if (r > total) r = total;
      let i = 1;
      while (i < pts.length - 1 && pts[i].s < r) i++;
      const a = pts[i - 1], b = pts[i];
      const span = b.s - a.s;
      const t = span > 0 ? (r - a.s) / span : 0;
      const lerp = (p, q) => p + (q - p) * t;
      const dx = b.x - a.x, dy = b.y - a.y;
      const L = Math.hypot(dx, dy) || 1;
      const out = {
        s: r,
        x: lerp(a.x, b.x), y: lerp(a.y, b.y),
        ux: dx / L, uy: dy / L,
        nx: -dy / L, ny: dx / L,
        bore: lerp(a.bore, b.bore),
        area: lerp(a.area, b.area),
        halfW: lerp(a.halfW, b.halfW),
        what: t < 0.5 ? a.what : b.what,
      };
      if (gpm !== undefined) out.ftps = 0.3208 * gpm / out.area;
      return out;
    }

    return Object.freeze({
      total: total,
      stations: pts.map(Object.freeze),
      at: at,
      bore: o.bore,
      hasComponent: !!comp,
      note: 'One path, in inches, from the start of the line to the end of ' +
            'it. Every station carries its own bore and area; a crossing ' +
            'into a component is a later value of s and nothing else.',
    });
  }

  /* ---- THE WHOLE RUN AS ONE WETTED DOMAIN ---------------------------

     This is the piece that was missing, and its absence is what every
     seam in the cascade was made of.

     A consumer that wants a line with a valve in it has, until now, had
     two sources of truth for where the water goes: a solved 2D field
     inside the valve, and a straight run outside it. Those meet at the
     face, and reconciling them -- which lane a marker is in, which way
     the offset points, how fast it returns to centre, which pass paints
     it -- is where every defect lived. Signs, scales, recovery rates,
     paint order. Fixing one moved the inconsistency somewhere else,
     because there was no single place that said what was correct.

     So there is no boundary here. The pipe either side is wetted region
     like any other, handed to flowfield.solveField2D in ONE call, and
     the whole run comes back as one field. There is no crossing event
     because there is nothing to cross, no lane because nothing needs
     reconciling, and nothing to seed because the domain is already
     full.

     Measured on the ED at 560 gpm with 14 in of line either side: 268
     by 80 cells, converged in half a second, 6.2 ft/s at both far ends
     -- which is Q over the bore, a number the solve never saw -- and 64
     at the cage window. Of 1200 markers over 900 frames, 535 went in
     one end and out the other.

     THE STUB MEETS THE BODY, not the catalogue. The bore a traced body
     presents is a proportion of its own face-to-face rather than a
     sourced dimension, so it will not generally equal the line it is
     declared to be in. For a drawing that does not matter and matching
     them does: a step at the face is visible, and the difference is not.
     The declared line bore is returned alongside so a consumer can say
     what the pipe really is while drawing one that fits. */
  function wetted(opts) {
    const o = opts || {};
    need(o, ['geometry', 'travelPct'], 'plant.wetted');
    const gv = o.geometry;
    if (typeof gv.wettedAt !== 'function' || typeof gv.flowPathAt !== 'function')
      throw new Error('plant.wetted: {geometry} must be a built component -- ' +
        'geometry.globeValve() -- that can answer wettedAt and flowPathAt. ' +
        'A plant cannot compose a part that cannot say where its water is.');

    const stub = o.stub === undefined ? 14 : o.stub;
    if (!(stub > 0))
      throw new Error('plant.wetted: {stub} is how many inches of line sit ' +
        'either side, and it must be positive. A run with no line in it is ' +
        'the valve on its own, which is what drawValve already draws.');

    const W = gv.wettedAt(o.travelPct, o.wettedOpts || { minGap: 0.25 });
    const st = gv.flowPathAt(o.travelPct).stations;
    const E = gv.extent;
    const hw = st[0].halfW;                 /* what the body presents */
    const a = PI * hw * hw;
    const EPS = 0.001;                      /* overlap, so the cells merge */

    const inX = E.x0 - stub, outX = E.x1 + stub;
    const lead = [[inX, -hw], [E.x0 + EPS, -hw], [E.x0 + EPS, hw], [inX, hw]];
    const tail = [[E.x1 - EPS, -hw], [outX, -hw], [outX, hw], [E.x1 - EPS, hw]];

    return {
      rings: [lead, tail].concat(W.rings),
      throatRings: W.throatRings,
      stillRings: W.stillRings,
      plenum: W.plenum,
      circuits: [W.balance],
      openings: [
        { x: inX + 0.05, y: 0, nx: 1, ny: 0, halfW: hw, role: 'inlet' },
        { x: outX - 0.05, y: 0, nx: -1, ny: 0, halfW: hw, role: 'outlet' },
      ],
      stations: [{ x: inX, y: 0, area: a, halfW: hw, what: 'line' }]
        .concat(st, [{ x: outX, y: 0, area: a, halfW: hw, what: 'line' }]),
      extent: { x0: inX, x1: outX, y0: E.y0, y1: E.y1 },
      stubBore: hw * 2,
      lineBore: o.lineBore === undefined ? null : o.lineBore,
      note: 'One domain: line, component, line. Solve it in a single ' +
            'flowfield.solveField2D call and there is no boundary left ' +
            'for a consumer to get wrong.',
    };
  }

  LPE.plant = { run: run, wetted: wetted, areaOf: areaOf };

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
