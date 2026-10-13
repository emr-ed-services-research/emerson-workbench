/* @layer registration
   @core Process Core -- vendoring tooling, not a process layer.

   THE 657 OUTLINES, TAKEN FROM THE RIGHT EXPORT THIS TIME.

   The first copy of catalogue/actuator-657-figure6.json was wrong in
   two ways, and both are the same mistake: it was eyeballed out of an
   intermediate file instead of taken from the asset the Working
   Model's own README names as authoritative.

     1. ONE RING PER PART. The real parts are not one ring. The yoke is
        an outer profile AND the spring-housing cavity inside it -- 430
        points and 341 -- and dropping the inner one does not just lose
        the hole, it leaves the housing wall drawn from whichever side
        the outer contour happened to run. That is the asymmetry: there
        was never a left wall, only the left edge of a solid lump. The
        upper casing likewise carries its two travel-stop bosses as
        separate subpaths, and the spring seat and adjustor are each a
        LEFT half and a RIGHT half of a section.

     2. DECIMATED. 75 points where the approved path has 605, 121 where
        it has 430. A cast dome at one eighth of its points is a
        polygon with chords across the curvature, which is exactly the
        "errant points and strange straight lines" that show up in the
        middle of the upper casing.

   WHERE THE AUTHORITY IS. `55 - Interactive Models/
   Fisher 657 Working Model/657-working-model.html`, in the
   `window.REFINED2` object. That is the published model's own geometry
   and it is downstream of the pipeline's declared-geometry finish --
   step 7 of the README, `centerline-upper2.py` + `assemble-upper3.py`
   -- which rebuilt the upper casing as a constructed shell, symmetric
   by construction, and passed a binding audit against the painted
   contour. The raw `refine2.py` contours are a PRE-refinement pass.
   Reading the folder's README first would have said so; it does, in a
   section called "Declared-geometry shell reconstruction".

   WHAT THIS DOES NOT DO: it does not re-trace, re-smooth, simplify or
   re-sample anything. Arc commands are expanded on their own radius so
   a 3 px fillet stays a fillet, and every other point is carried
   across as printed. The only transformation is the frame: crop pixels
   to inches, origin on the yoke's bottom face.

       node lab/vendor-657-outlines.js                                */
'use strict';

const fs = require('fs');
const path = require('path');

/* THE LIVE ARTIFACT, NOT THE VAULT COPY. They are the same asset and
   they are not the same file: the vault copy was written on 4 October
   and the artifact was republished on the 5th with the stem
   connector, the travel indicator and the coupling, which is exactly
   the work that was missing here. Vendoring from the local file
   quietly took the day-older version. Read the artifact with the
   Artifact tool and point MODEL at what it saves; the path is passed
   in rather than hard-coded so it cannot rot. */
const MODEL = process.env.MODEL_657 || path.join(
  __dirname, '..', '..', '55 - Interactive Models',
  'Fisher 657 Working Model', '657-working-model.html');
const OUT = path.join(__dirname, '..', 'catalogue',
  'actuator-657-figure6.json');

/* The crop frame, declared by the model itself: 1480x2250 at 600 DPI
   over Figure 6, 186.667 px/in (the model states 140 px = 0.75 in of
   rated travel). The centreline and the yoke's bottom face are read
   off the yoke's own outer contour below, not asserted here. */
const PX_PER_IN = 1120 / 6;

/* ---- the authority ---------------------------------------------- */
function refined2() {
  const txt = fs.readFileSync(MODEL, 'utf8');
  const key = '<script>window.REFINED2 = ';
  const at = txt.indexOf(key);
  if (at < 0)
    throw new Error('vendor-657-outlines: no window.REFINED2 in ' + MODEL +
      '. That object IS the published model\'s geometry; if it has moved, ' +
      'find where it went rather than falling back to refined2-parts.js, ' +
      'which is the pre-refinement pass this script exists to stop using.');
  const from = at + key.length;
  const end = txt.indexOf('}', txt.indexOf('</script>', from) - 12);
  /* The object is one line. Take it to its last brace on that line. */
  const line = txt.slice(from, txt.indexOf('\n', from));
  return JSON.parse(line.slice(0, line.lastIndexOf('}') + 1));
}

/* ---- SVG path -> rings -------------------------------------------
   M, L, A and Z are the only commands these paths use. A is expanded
   on its own radius rather than collapsed to its endpoint: every arc
   here is a small fillet on a cast corner, and a fillet replaced by a
   chamfer is a shape change, however small. */
function rings(d) {
  const tok = d.match(/[MLAZz]|-?\d+(?:\.\d+)?/g) || [];
  const out = [];
  let cur = null, cmd = null, i = 0;
  const num = () => parseFloat(tok[i++]);
  const push = (x, y) => { cur.push([x, y]); };
  while (i < tok.length) {
    const t = tok[i];
    if (/^[MLAZz]$/.test(t)) {
      cmd = t; i++;
      if (cmd === 'Z' || cmd === 'z') {
        if (cur && cur.length > 2) out.push(cur);
        cur = null;
      }
      continue;
    }
    if (cmd === 'M') {
      if (cur && cur.length > 2) out.push(cur);
      cur = []; push(num(), num());
    } else if (cmd === 'L') {
      push(num(), num());
    } else if (cmd === 'A') {
      const rx = num(), ry = num(), rot = num(),
            laf = num(), sf = num(), x = num(), y = num();
      arc(cur, rx, ry, rot, laf, sf, x, y);
    } else {
      throw new Error('vendor-657-outlines: command "' + cmd +
        '" is not one this script knows how to carry across without ' +
        'changing the shape. Add it rather than letting it through.');
    }
  }
  if (cur && cur.length > 2) out.push(cur);
  return out;
}

/* Endpoint parameterisation to centre, per the SVG spec's own
   implementation notes. Sampled at about one segment per 12 degrees,
   which on a 3 px fillet is finer than the pixels it came from. */
function arc(pts, rx, ry, phiDeg, laf, sf, x2, y2) {
  const p = pts[pts.length - 1], x1 = p[0], y1 = p[1];
  if (!(rx > 0) || !(ry > 0)) { pts.push([x2, y2]); return; }
  const phi = phiDeg * Math.PI / 180;
  const cp = Math.cos(phi), sp = Math.sin(phi);
  const dx = (x1 - x2) / 2, dy = (y1 - y2) / 2;
  const x1p = cp * dx + sp * dy, y1p = -sp * dx + cp * dy;
  let rxs = rx * rx, rys = ry * ry;
  const lam = x1p * x1p / rxs + y1p * y1p / rys;
  if (lam > 1) { const s = Math.sqrt(lam); rx *= s; ry *= s;
                 rxs = rx * rx; rys = ry * ry; }
  const den = rxs * y1p * y1p + rys * x1p * x1p;
  let num = rxs * rys - den;
  if (num < 0) num = 0;
  const co = (laf !== sf ? 1 : -1) * Math.sqrt(num / den);
  const cxp = co * rx * y1p / ry, cyp = -co * ry * x1p / rx;
  const cx = cp * cxp - sp * cyp + (x1 + x2) / 2;
  const cy = sp * cxp + cp * cyp + (y1 + y2) / 2;
  const ang = (ux, uy, vx, vy) => {
    const d = (ux * vx + uy * vy) /
      (Math.hypot(ux, uy) * Math.hypot(vx, vy));
    const a = Math.acos(Math.max(-1, Math.min(1, d)));
    return (ux * vy - uy * vx < 0) ? -a : a;
  };
  const th1 = ang(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
  let dth = ang((x1p - cxp) / rx, (y1p - cyp) / ry,
                (-x1p - cxp) / rx, (-y1p - cyp) / ry);
  if (!sf && dth > 0) dth -= 2 * Math.PI;
  if (sf && dth < 0) dth += 2 * Math.PI;
  const n = Math.max(2, Math.ceil(Math.abs(dth) / (Math.PI / 15)));
  for (let k = 1; k <= n; k++) {
    const th = th1 + dth * (k / n);
    const ex = rx * Math.cos(th), ey = ry * Math.sin(th);
    pts.push([cp * ex - sp * ey + cx, sp * ex + cp * ey + cy]);
  }
}

/* ---- build -------------------------------------------------------- */
const R = refined2();
const WANT = ['yoke', 'lower-diaphragm-casing', 'upper-diaphragm-casing',
              'diaphragm-plate', 'spring-seat', 'spring-adjustor'];
const raw = {};
for (const k of WANT) {
  if (typeof R[k] !== 'string')
    throw new Error('vendor-657-outlines: the model has no path for "' +
      k + '". It has ' + Object.keys(R).join(', ') + '.');
  raw[k] = rings(R[k]);
}

/* THE DATUM, READ OFF THE DRAWING rather than declared. The yoke's
   outer ring is the part that lands on the bonnet, so its lowest row
   of pixels is y = 0 and the midpoint of its own x extent is the
   centreline. Asserting numbers here would be a second place for them
   to be wrong. */
const outer = raw.yoke[0];
const yokeBottomPx = Math.max.apply(null, outer.map(q => q[1]));
const centrelinePx = (Math.min.apply(null, outer.map(q => q[0])) +
                      Math.max.apply(null, outer.map(q => q[0]))) / 2;

const toIn = r => r.map(q => [(q[0] - centrelinePx) / PX_PER_IN,
                              (yokeBottomPx - q[1]) / PX_PER_IN])
                   .map(q => [Math.round(q[0] * 1e4) / 1e4,
                              Math.round(q[1] * 1e4) / 1e4]);
const shapes = {};
for (const k of WANT) shapes[k] = raw[k].map(toIn);

/* ---- THE HARDWARE THAT COUPLES IT TO A VALVE, AND THE DIAPHRAGM ----

   Plain rectangles and polygons in the model's own SVG, not traced
   contours, so they come across as written. The stem connector is IOM
   key 26 -- "an assembly of two stem connector halves, cap screws and
   a spacer" -- two halves clamped around BOTH stems, which is why it
   is the part that makes an actuator and a valve into one machine.
   Figure 6's half-section draws only the near bolt head; Franz
   confirmed the real part has two, symmetric, and the model draws
   both.

   The diaphragm comes across as the model holds it: a measured
   centreline, the casing's inner floor profile beneath it, and a band
   width. It is a ROLLING diaphragm -- the moulded fold travels down
   at half the plate's rate and drapes against the floor rather than
   passing through it -- so it cannot be a fixed shape that moves, and
   the warp is done at draw time from these.                        */
function shapesIn(block) {
  const out = [];
  const re = /<rect[^>]*?x="([-\d.]+)"\s+y="([-\d.]+)"\s+width="([-\d.]+)"\s+height="([-\d.]+)"/g;
  let m;
  while ((m = re.exec(block))) {
    const x = +m[1], y = +m[2], w = +m[3], h = +m[4];
    out.push([[x, y], [x + w, y], [x + w, y + h], [x, y + h]]);
  }
  const rp = /<polygon[^>]*?points="([^"]+)"/g;
  while ((m = rp.exec(block))) {
    const v = m[1].trim().split(/[ ,]+/).map(Number);
    const ring = [];
    for (let k = 0; k + 1 < v.length; k += 2) ring.push([v[k], v[k + 1]]);
    out.push(ring);
  }
  return out;
}
const txt = fs.readFileSync(MODEL, 'utf8');
const between = (a, b) => txt.slice(txt.indexOf(a), txt.indexOf(b));
const connBlock = between('<g id="g-conn"', '<g id="g-valve-sil"');
const vgrpBlock = between('<g id="g-vgrp"', '<g id="g-conn"');
const indBlock = vgrpBlock.slice(vgrpBlock.indexOf('<g id="g-dn">'));
const connector = shapesIn(connBlock).map(toIn);
const indicator = shapesIn(indBlock).map(toIn);
if (!connector.length)
  throw new Error('vendor-657-outlines: no stem connector in ' + MODEL +
    '. If this is the vault copy rather than the live artifact it will ' +
    'not have one -- that is the whole reason this script changed.');

const dia = R._dia;
if (!dia || !Array.isArray(dia.centerline))
  throw new Error('vendor-657-outlines: the model carries no diaphragm.');
const inX = px => (px - centrelinePx) / PX_PER_IN;
const inY = py => (yokeBottomPx - py) / PX_PER_IN;
const r4 = v => Math.round(v * 1e4) / 1e4;
const diaphragm = {
  _note:
    'A ROLLING diaphragm. The centreline is the measured shape at rest; '
  + 'the floor is the inner surface of the casing directly under each '
  + 'point, or null where the model has none. Under stroke the clamps '
  + 'stay put, the moulded fold rolls DOWN at half the plate rate, the '
  + 'centre rides the plate, and every warped point is held above its '
  + 'own floor so rubber cannot pass metal. Warped at draw time, never '
  + 're-approximated.',
  band: r4(dia.band / PX_PER_IN),
  centerline: dia.centerline.map(q => [r4(inX(q[0])), r4(inY(q[1]))]),
  floor: dia.floor.map(v => (v === null ? null : r4(inY(v)))),
  /* The piecewise warp's own breakpoints, in the same inches. */
  fold: {
    outerL: r4(inX(215)), foldL0: r4(inX(260)), foldL1: r4(inX(285)),
    plateL: r4(inX(305)),
    outerR: r4(inX(1270)), foldR0: r4(inX(1225)), foldR1: r4(inX(1200)),
    plateR: r4(inX(1180)),
  },
};

const doc = {
  _source:
    'Fisher 657 Diaphragm Actuator instruction manual D100306X012, June '
  + '2018, page 24, Figure 6 -- which the manual states "shows the size 30 '
  + 'through 60". Taken from window.REFINED2 in the published 657 Working '
  + 'Model (55 - Interactive Models/Fisher 657 Working '
  + 'Model/657-working-model.html), which is that pipeline\'s OWN geometry '
  + 'and is downstream of its declared-geometry shell finish -- Franz '
  + 'hand-painted the masks over a 600-DPI crop, masks-from-paint.py '
  + 'assigned them, refine2.py contoured them, and centerline-upper2.py + '
  + 'assemble-upper3.py rebuilt the casing shells as constructed, '
  + 'symmetric-by-construction bands that passed a binding audit against '
  + 'the painted contour. Copied, not re-traced.',
  _corrected:
    'THE FIRST COPY OF THIS FILE WAS TAKEN FROM THE PRE-REFINEMENT '
  + 'CONTOURS AND FLATTENED TO ONE RING PER PART AT ABOUT AN EIGHTH OF '
  + 'THE POINTS. That lost the yoke\'s spring-housing cavity, the upper '
  + 'casing\'s two travel-stop bosses, and the second half of the spring '
  + 'seat and adjustor, and it put chords across every cast curve. '
  + 'Regenerate with lab/vendor-657-outlines.js; never hand-edit this '
  + 'file.',
  _frame:
    'Inches. x from the actuator centreline, y UP from the bottom face of '
  + 'the yoke -- the face that lands on the valve bonnet, so it is the '
  + 'datum an assembly needs. Both are READ OFF the yoke\'s outer ring '
  + 'rather than declared. The source frame is the 1480x2250 crop at '
  + PX_PER_IN.toFixed(4) + ' px/in, a scale the model declares itself '
  + '(140 px = 0.75 in of rated travel).',
  _rings:
    'EVERY PART IS A LIST OF RINGS, outer first, and a part with more '
  + 'than one has holes in it: the yoke\'s spring housing, the upper '
  + 'casing\'s travel-stop bosses, the two halves of the spring seat and '
  + 'of the adjustor. Fill them even-odd. Taking only the first ring is '
  + 'what the first copy did and it is why the spring housing had no '
  + 'left wall.',
  _note:
    'ONE FIGURE, SEVEN SIZES. The manual says Figure 6 covers sizes 30 '
  + 'through 60, so this outline serves all of them; what differs between '
  + 'the sizes is in the catalogue rows -- effective area, yoke boss, '
  + 'stem, travel, thrust -- not in the drawing. AND THE DRAWING IS NOT '
  + 'DIMENSIONED TO ONE SIZE: at the scale the model declares, the traced '
  + 'casing comes out about 6.9 in across where a size 30 effective area '
  + 'of 46 in2 implies 7.65 in. That is what a family figure is -- it '
  + 'shows the ARRANGEMENT of seven actuators, not the dimensions of any '
  + 'one. The shape is representative, the catalogue rows are '
  + 'authoritative, and nothing should read a size off this outline.',
  _atRest:
    'THE FIGURE IS DRAWN AT THE UPPER STOP. The Working Model README '
  + 'states it as a physics fact that is also a geometry fact: "at rest '
  + 'the diaphragm/plate presses against the upper casing". A '
  + 'direct-acting 657 with no air on it has its spring extended and its '
  + 'plate at the top, so the traced plate position is the TOP of the '
  + 'stroke and travel runs DOWNWARD from it by the rated travel. Lifting '
  + 'it instead drives the plate up through the upper casing, which is '
  + 'what the first version did.',
  connector: connector,
  indicator: indicator,
  diaphragm: diaphragm,
  pxPerInch: PX_PER_IN,
  centrelinePx: centrelinePx,
  yokeBottomPx: yokeBottomPx,
  shapes: shapes,
};

fs.writeFileSync(OUT, JSON.stringify(doc, null, 1).replace(/\r\n/g, '\n'),
                 'utf8');

console.log('\nwrote ' + path.relative(path.join(__dirname, '..'), OUT));
console.log('  datum: centreline ' + centrelinePx.toFixed(1) +
            ' px, yoke bottom ' + yokeBottomPx.toFixed(1) + ' px\n');
for (const k of WANT) {
  const rs = shapes[k];
  console.log('  ' + (k + '                          ').slice(0, 24) +
    rs.length + ' ring(s), ' + rs.map(r => r.length).join(' + ') +
    ' points');
  rs.forEach((r, i) => {
    const xs = r.map(q => q[0]), ys = r.map(q => q[1]);
    console.log('      [' + i + ']  x ' +
      Math.min.apply(null, xs).toFixed(3) + '..' +
      Math.max.apply(null, xs).toFixed(3) + '   y ' +
      Math.min.apply(null, ys).toFixed(3) + '..' +
      Math.max.apply(null, ys).toFixed(3));
  });
}
console.log('');
