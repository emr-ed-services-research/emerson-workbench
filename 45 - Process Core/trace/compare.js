/* @layer chrome
   @core Process Core -- trace tooling, not a process layer.

   DECLARED CHROME, AND IT HAD BEEN HIDING. This said "registration"
   while naming eight colours, which the layer guard forbids anywhere
   but chrome -- and it got away with it because the guard's list of
   places to look never included trace/. It does now.

   chrome is the honest declaration rather than the convenient one:
   this file writes a PAGE for a person to look at and decides what
   everything on it looks like. That is the definition.

   THE TRACE AGAINST ITS SOURCE, IN OVERLAY.

   Franz's standing method for this vault: judge a replication by
   laying it over the source pixels, not by looking at the two in turn.
   A side-by-side hides exactly the errors that matter -- a chamber
   half an inch too deep reads as "about right" beside the original and
   is unmissable on top of it.

   Writes a page with the source figure and the current geometry drawn
   over it, registered on the one dimension both agree about: the
   flange faces. Everything else is then free to disagree visibly,
   which is the point.

       node trace/compare.js                                          */
'use strict';
const fs = require('fs');
const path = require('path');
const R = path.join(__dirname, '..');
global.window = {};
for (const m of ['catalogue', 'geometry', 'sizing', 'trim'])
  require(path.join(R, 'src', m + '.js'));
const LPE = global.window.LPE;
const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(R, 'catalogue', 'parts.json'), 'utf8')));

/* The valve the current archetype claims to be, drawn from the
   catalogue row the archetype is scaled by. */
const V = CAT.part('VALVE/EWT/NPS10x8/P8/T3/EQPCT');
const WP = LPE.trim.fromCurve({ curve: V.cv,
  characterisedBy: V.characterisedBy }).widthProfile();
const gv = LPE.geometry.globeValve({ part: V, faceToFace: 29.62,
  lineBore: 10.02, flow: 'down', widthProfile: WP.width });

/* Registration: the source's flange faces, measured off its own
   pixels, against the valve's published face-to-face. One number,
   and it is the only one the overlay is allowed to borrow. */
const SRC = { file: 'ewt-fig11-5-current-archetype-source.png',
              w: 1100, h: 820, faceL: 130, faceR: 875 };
const pxPerIn = (SRC.faceR - SRC.faceL) / gv.faceToFace;
const cx = (SRC.faceL + SRC.faceR) / 2;
/* The port centreline in the source, found by eye once and recorded
   rather than re-guessed: the horizontal passage's axis. */
const cy = 430;
const P = ([x, y]) => [(cx + x * pxPerIn).toFixed(1),
                       (cy - y * pxPerIn).toFixed(1)];
const poly = (rings, cls) => (rings || []).map(r =>
  '<polygon class="' + cls + '" points="' +
  r.map(q => P(q).join(',')).join(' ') + '"/>').join('\n');

const plug = gv.plugAt(0);
const svg = [
  poly(gv.body, 'body'),
  poly(gv.bonnet, 'body'),
  poly(gv.cage.rings, 'trim'),
  poly(gv.seatRing, 'trim'),
  poly([plug.head, plug.stem], 'plug'),
].join('\n');

const html = `<!doctype html>
<meta charset="utf-8"><title>Trace against source</title>
<style>
 body{margin:0;background:#15181c;color:#e6e8ea;
      font:13px/1.6 ui-monospace,Consolas,monospace;padding:20px;}
 h1{font-size:14px;letter-spacing:.14em;text-transform:uppercase;margin:0 0 4px;}
 p{opacity:.65;max-width:92ch;font-size:11.5px;margin:0 0 14px;}
 .wrap{display:flex;gap:20px;flex-wrap:wrap;}
 .pane{background:#1b1f24;border:1px solid #2a2e33;padding:10px;}
 .cap{font-size:11px;opacity:.7;margin:6px 0 0;}
 svg{display:block;background:#fff;}
 image{opacity:1}
 .body{fill:none;stroke:#ff3b30;stroke-width:2.2}
 .trim{fill:none;stroke:#00c2ff;stroke-width:2.2}
 .plug{fill:none;stroke:#ffcf22;stroke-width:2.2}
 label{display:inline-flex;gap:6px;align-items:center;margin-right:14px;font-size:11.5px}
</style>
<h1>The current archetype, over the figure it was traced from</h1>
<p>Source: Control Valve Sourcebook &mdash; Oil &amp; Gas, Figure 11-5,
 drawing W6022-2, &ldquo;NPS 10-24 EWT or EWD&rdquo;. The geometry is drawn
 from the catalogue row the core scales it by (EWT NPS 10x8, face-to-face
 29.62 in) and registered on the flange faces &mdash; the one dimension
 both agree about. Everything else is free to disagree, which is the
 point. Red: body and bonnet. Blue: cage and seat ring. Yellow: plug at
 zero travel.</p>
<div>
 <label><input type="checkbox" id="src" checked> source</label>
 <label><input type="checkbox" id="ovl" checked> trace</label>
</div>
<div class="wrap">
 <div class="pane">
  <svg id="s" width="${SRC.w}" height="${SRC.h}" viewBox="0 0 ${SRC.w} ${SRC.h}">
   <image id="img" href="ground-truth/${SRC.file}" x="0" y="0"
          width="${SRC.w}" height="${SRC.h}"/>
   <g id="g">
${svg}
   </g>
  </svg>
  <div class="cap">overlay &mdash; ${pxPerIn.toFixed(2)} px per inch,
   registered on the flange faces at x ${SRC.faceL} and ${SRC.faceR}</div>
 </div>
</div>
<script>
 src.onchange = () => img.style.display = src.checked ? '' : 'none';
 ovl.onchange = () => g.style.display = ovl.checked ? '' : 'none';
</script>
`;
const out = path.join(__dirname, 'compare');
if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'),
                 html.replace(/\r\n/g, '\n'), 'utf8');
fs.copyFileSync(path.join(__dirname, 'ground-truth', SRC.file),
                path.join(out, SRC.file));
fs.mkdirSync(path.join(out, 'ground-truth'), { recursive: true });
fs.copyFileSync(path.join(__dirname, 'ground-truth', SRC.file),
                path.join(out, 'ground-truth', SRC.file));
console.log('\nwrote trace/compare/index.html  --  ' +
            pxPerIn.toFixed(2) + ' px/in\n');
