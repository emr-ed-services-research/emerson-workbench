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

  LPE.plant = { run: run, areaOf: areaOf };

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
