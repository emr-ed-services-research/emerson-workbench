/* @layer registration
   @core Process Core -- tooling, not a process layer.
   Draws the geometry layer to scale and writes an SVG you can open.
   Names no colour: the palette comes from `skins/modern.js`, which is the
   stock chrome, because that is the point being demonstrated.          */
/* ---------------- THE REFERENCE SHEET --------------------------------

   WHAT THIS IS FOR.

   `geometry.js` returns polygons in inches. Nothing renders them yet, and
   a geometry layer nobody has looked at is a geometry layer nobody can
   trust -- the numbers can all be right and the shape still be wrong, and
   no test in this repo would say so.

   So: one page, every drawable part, ONE scale for lengths and bores
   alike, with the dimension that fixes each part written under it and the
   document it came from written beside that.

   It also carries the contrast panel, which is the whole argument in one
   picture: the real NPS 1/2 socket-weld elbow next to the sweep the
   schematic draws for the same fitting, at the same scale. They are not
   the same size and they are not the same KIND of thing.

   THE STACK, demonstrated rather than described:

     catalogue   dimensions, checked against what the standard printed
     geometry    those dimensions as shape, in inches, no scale
     [here]      one scale, chosen once, applied to everything
     chrome      what it looks like -- taken from skins/modern.js, which
                 is where every colour on this page comes from

   Run: node reference.js        ->  reference/parts.svg                */
'use strict';

const fs = require('fs');
const path = require('path');

global.window = {};
require(path.join(__dirname, 'src', 'catalogue.js'));
require(path.join(__dirname, 'src', 'geometry.js'));
require(path.join(__dirname, 'src', 'topology.js'));   // for the contrast only
require(path.join(__dirname, 'skins', 'modern.js'));
const LPE = global.window.LPE;

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, 'catalogue', 'parts.json'), 'utf8')));
const SKIN = LPE.skins.modern;

/* ONE SCALE. Not a bore scale and a separate length scale -- that
   conflation is exactly what this layer exists to end. */
const PX_PER_IN = 190;
const inch = v => v * PX_PER_IN;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const ring = pts => pts.map((p, i) =>
  (i ? 'L' : 'M') + inch(p[0]).toFixed(2) + ' ' + inch(p[1]).toFixed(2))
  .join(' ') + ' Z';

const out = [];
const put = s => out.push(s);

/* ---- one part, drawn where it is told ------------------------------- */
function drawPart(g, ox, oy, caption, note) {
  const w = g.extent.x1 - g.extent.x0, h = g.extent.y1 - g.extent.y0;
  put('<g transform="translate(' + ox.toFixed(1) + ',' + oy.toFixed(1) + ')">');

  /* metal, then the void cut out of it -- in that order, so no bore can
     be painted shut by the body it runs through. */
  put('<path d="' + g.outline.map(ring).join(' ') + '" fill="' +
      SKIN.pipe.body + '" stroke="' + SKIN.pipe.rim + '" stroke-width="2"/>');
  put('<path d="' + g.bore.map(ring).join(' ') + '" fill="' +
      SKIN.pipe.dark + '" stroke="' + SKIN.pipe.rim + '" stroke-width="1.25"/>');

  /* ports: where another part lands, and which way it faces */
  g.ports.forEach(p => {
    const x = inch(p.x), y = inch(p.y), L = 16;
    put('<line x1="' + x + '" y1="' + y + '" x2="' + (x + p.dir[0] * L) +
        '" y2="' + (y + p.dir[1] * L) + '" stroke="' + SKIN.schem.symbol +
        '" stroke-width="2"/>');
    put('<circle cx="' + x + '" cy="' + y + '" r="3.5" fill="' +
        SKIN.schem.symbol + '"/>');
  });

  const by = inch(g.extent.y1) + 30;
  /* Centre the caption on the PART, not on its origin. Pipe starts at
     its upstream face, so anchoring at 0 hung the label off one end. */
  const cx = inch((g.extent.x0 + g.extent.x1) / 2);
  put('<text x="' + cx.toFixed(1) + '" y="' + by + '" text-anchor="middle" font-family="ui-monospace,monospace" ' +
      'font-size="14" fill="' + SKIN.schem.line + '">' + esc(caption) + '</text>');
  put('<text x="' + cx.toFixed(1) + '" y="' + (by + 19) + '" text-anchor="middle" font-family="ui-monospace,monospace" ' +
      'font-size="11.5" fill="' + SKIN.schem.label + '">' + esc(note) + '</text>');
  put('</g>');
  return { w: inch(w), h: inch(h) };
}

/* ---- the sheet -------------------------------------------------------- */
const W = 1480, H = 1980;
put('<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H +
    '" viewBox="0 0 ' + W + ' ' + H + '">');
put('<rect width="' + W + '" height="' + H + '" fill="' + SKIN.schem.ground + '"/>');

put('<text x="54" y="58" font-family="ui-monospace,monospace" font-size="20" fill="' +
    SKIN.schem.line + '">PROCESS CORE  --  GEOMETRY LAYER  --  DRAWN TO SCALE</text>');
put('<text x="54" y="82" font-family="ui-monospace,monospace" font-size="12.5" fill="' +
    SKIN.schem.label + '">Every coordinate is arithmetic on a catalogue dimension. ' +
    PX_PER_IN + ' px per inch, for lengths and bores alike. Colour from skins/modern.js.</text>');

/* row 1 -- the fittings */
const items = [
  { id: 'ELBOW90/SW3000/NPS0.5',   x: 300, cap: 'NPS 1/2 90 ELBOW, SOCKET-WELD, CL3000' },
  { id: 'ELBOW90/SW3000/NPS0.375', x: 700, cap: 'NPS 3/8 90 ELBOW, SOCKET-WELD, CL3000' },
  { id: 'TEE/SW3000/NPS0.5',       x: 1120, cap: 'NPS 1/2 TEE, SOCKET-WELD, CL3000' },
];
items.forEach(it => {
  const part = CAT.part(it.id);
  const g = LPE.geometry.shapeOf(part);
  const src = CAT.sourceOf(it.id);
  drawPart(g, it.x, 300, it.cap,
    'centre-to-face ' + g.centreToFace.toFixed(4) + ' in  |  ' +
    src.std + ' ' + src.table);
});

/* row 2 -- pipe, and the contrast */
const pipePart = CAT.part('PIPE/NPS0.5/S40');
const pg = LPE.geometry.shapeOf(pipePart, { length: 2.5 });
drawPart(pg, 380, 720, 'NPS 1/2 SCH 40 PIPE, 2.5 in',
  'bore ' + pipePart.dims.bore + ' in, wall ' + pipePart.dims.wall +
  ' in  |  ASME B36.10M');

/* THE FLOW PATH. Same part, same scale, with where the fluid actually
   goes drawn over it -- and sampled, because sampling density is the
   whole answer to "how do we get flow high-res without smoothing the
   fitting". The part is blocky. The sampling is as fine as you like. */
put('<g transform="translate(1120,720)">');
{
  const el = CAT.part('ELBOW90/SW3000/NPS0.5');
  const g = LPE.geometry.shapeOf(el);
  const fp = LPE.geometry.flowPath(el);

  put('<path d="' + g.outline.map(ring).join(' ') + '" fill="' +
      SKIN.pipe.body + '" stroke="' + SKIN.pipe.rim + '" stroke-width="2"/>');
  put('<path d="' + g.bore.map(ring).join(' ') + '" fill="' + SKIN.pipe.dark +
      '" stroke="' + SKIN.pipe.rim + '" stroke-width="1.25"/>');

  /* the centreline */
  put('<path d="' + fp.path.map((q, i) =>
      (i ? 'L' : 'M') + inch(q[0]).toFixed(1) + ' ' + inch(q[1]).toFixed(1))
      .join(' ') + '" fill="none" stroke="' + SKIN.schem.line +
      '" stroke-width="1.5" stroke-dasharray="5 4"/>');

  /* sampled, fine */
  LPE.geometry.samplePath(fp, 0.045).forEach(q =>
    put('<circle cx="' + inch(q.x).toFixed(1) + '" cy="' + inch(q.y).toFixed(1) +
        '" r="2.2" fill="' + SKIN.schem.symbol + '"/>'));

  /* features, each at its own station */
  const at = sTarget => {
    let acc = 0;
    for (let i = 1; i < fp.path.length; i++) {
      const a = fp.path[i - 1], b = fp.path[i];
      const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (sTarget <= acc + seg + 1e-9) {
        const t = (sTarget - acc) / seg;
        return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
      }
      acc += seg;
    }
    return fp.path[fp.path.length - 1];
  };
  fp.features.forEach(f => {
    const q = at(f.s), X = inch(q[0]), Y = inch(q[1]);
    put('<circle cx="' + X.toFixed(1) + '" cy="' + Y.toFixed(1) +
        '" r="7" fill="none" stroke="' + SKIN.schem.line + '" stroke-width="2"/>');
  });

  const by = inch(g.extent.y1) + 30;
  const cx = inch((g.extent.x0 + g.extent.x1) / 2);
  put('<text x="' + cx.toFixed(1) + '" y="' + by + '" text-anchor="middle" ' +
      'font-family="ui-monospace,monospace" font-size="14" fill="' +
      SKIN.schem.line + '">THE FLOW PATH, SAMPLED</text>');
  put('<text x="' + cx.toFixed(1) + '" y="' + (by + 19) + '" text-anchor="middle" ' +
      'font-family="ui-monospace,monospace" font-size="11.5" fill="' +
      SKIN.schem.label + '">' + fp.length.toFixed(3) + ' in face to face  /  ' +
      'rings mark a contraction, a sharp 90, an expansion</text>');
  put('<text x="' + cx.toFixed(1) + '" y="' + (by + 36) + '" text-anchor="middle" ' +
      'font-family="ui-monospace,monospace" font-size="11.5" fill="' +
      SKIN.schem.label + '">bore drops ' + fp.reaches[0].bore.toFixed(3) +
      ' to ' + fp.reaches[1].bore.toFixed(3) + ' in inside the fitting, ' +
      (100 * (1 - fp.reaches[1].area / fp.reaches[0].area)).toFixed(0) +
      '% of area</text>');
}
put('</g>');

/* THE CONTRAST. Same fitting, same scale, two drawings. */
/* ITS OWN ROW. The sweep is 2.18 in of radius at this scale, which is
   414 px, so sharing a row with anything puts it straight through the
   neighbour. The first version of this sheet did exactly that. */
put('<g transform="translate(740,1300)">');
const R = LPE.net.bendRadius(pipePart.dims.bore);   // the schematic's rule
const rb = pipePart.dims.bore / 2;
/* THE SCHEMATIC'S BEND, placed properly.

   The first version of this panel drew the arc from guessed endpoints and
   it came out nowhere near the fitting it is supposed to be compared
   with -- which made the one picture that carries the argument say
   nothing. Derived instead:

   Flow enters along y = 0 travelling +x and leaves along x = 0 travelling
   +y. An arc tangent to both centrelines with radius R has its centre one
   radius from each, on the inside of the turn: C = (-R, +R). It runs from
   the inlet tangent point (-R, 0) round to the outlet tangent point
   (0, R). The band either side of that centreline is the drawn pipe, so
   the outer edge is R + rb and the inner R - rb. */
const Cx = -R, Cy = R;
const ro = R + rb, ri = R - rb;
const sweep =
  'M ' + inch(Cx).toFixed(1) + ' ' + inch(Cy - ro).toFixed(1) +
  ' A ' + inch(ro).toFixed(1) + ' ' + inch(ro).toFixed(1) +
  ' 0 0 1 ' + inch(Cx + ro).toFixed(1) + ' ' + inch(Cy).toFixed(1) +
  ' L ' + inch(Cx + ri).toFixed(1) + ' ' + inch(Cy).toFixed(1) +
  ' A ' + inch(ri).toFixed(1) + ' ' + inch(ri).toFixed(1) +
  ' 0 0 0 ' + inch(Cx).toFixed(1) + ' ' + inch(Cy - ri).toFixed(1) + ' Z';
put('<path d="' + sweep + '" fill="none" stroke="' + SKIN.schem.label +
    '" stroke-width="2" stroke-dasharray="7 5"/>');

const elG = LPE.geometry.shapeOf(CAT.part('ELBOW90/SW3000/NPS0.5'));
put('<path d="' + elG.outline.map(ring).join(' ') + '" fill="' +
    SKIN.pipe.body + '" stroke="' + SKIN.pipe.rim + '" stroke-width="2"/>');
put('<path d="' + elG.bore.map(ring).join(' ') + '" fill="' + SKIN.pipe.dark +
    '" stroke="' + SKIN.pipe.rim + '" stroke-width="1.25"/>');

put('<text x="0" y="' + (inch(R + rb) + 44) + '" text-anchor="middle" ' +
    'font-family="ui-monospace,monospace" font-size="14" fill="' + SKIN.schem.line +
    '">THE SAME FITTING, TWO DRAWINGS</text>');
put('<text x="0" y="' + (inch(R + rb) + 63) + '" text-anchor="middle" ' +
    'font-family="ui-monospace,monospace" font-size="11.5" fill="' + SKIN.schem.label +
    '">solid: ASME B16.11, centre-to-face ' + elG.centreToFace.toFixed(3) +
    ' in  /  dashed: the schematic sweep, ' + R.toFixed(3) + ' in radius</text>');
put('<text x="0" y="' + (inch(R + rb) + 82) + '" text-anchor="middle" ' +
    'font-family="ui-monospace,monospace" font-size="11.5" fill="' + SKIN.schem.label +
    '">not a tuning error -- a different kind of object</text>');
put('</g>');

/* scale bar: one inch, stated, so the page can be measured */
put('<g transform="translate(54,1900)">');
put('<line x1="0" y1="0" x2="' + inch(1) + '" y2="0" stroke="' + SKIN.schem.line +
    '" stroke-width="2.5"/>');
put('<line x1="0" y1="-7" x2="0" y2="7" stroke="' + SKIN.schem.line + '" stroke-width="2.5"/>');
put('<line x1="' + inch(1) + '" y1="-7" x2="' + inch(1) + '" y2="7" stroke="' +
    SKIN.schem.line + '" stroke-width="2.5"/>');
put('<text x="' + (inch(1) / 2) + '" y="26" text-anchor="middle" ' +
    'font-family="ui-monospace,monospace" font-size="13" fill="' + SKIN.schem.line +
    '">1 INCH</text>');
put('</g>');
put('</svg>');

const dir = path.join(__dirname, 'reference');
fs.mkdirSync(dir, { recursive: true });
const file = path.join(dir, 'parts.svg');
fs.writeFileSync(file, out.join('\n') + '\n', 'utf8');
console.log('wrote ' + path.relative(process.cwd(), file) +
            '  (' + (out.join('\n').length / 1024).toFixed(1) + ' kB, ' +
            PX_PER_IN + ' px/in)');

/* A page to open it in. A bare .svg opens in a browser but not in every
   viewer, and this is the file a person is told to double-click. */
fs.writeFileSync(path.join(dir, 'index.html'),
  '<!doctype html><meta charset="utf-8">' +
  '<title>Process Core -- geometry reference</title>' +
  '<body style="margin:0;background:' + SKIN.schem.ground + '">' +
  '<img src="parts.svg" style="display:block;width:100%;max-width:' + W +
  'px;margin:24px auto">', 'utf8');
console.log('      open reference/index.html');
