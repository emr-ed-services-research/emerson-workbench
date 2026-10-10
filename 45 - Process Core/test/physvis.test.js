/* @layer phys-view
   @core Process Core -- the physical view's own acceptance test. Declares
   the layer it guards, so the layer guard can tell a test from an
   implementation.                                                        */
/* Acceptance test for physvis.js -- the rig as it is actually built.

   Drawing code is usually argued about rather than tested. It does not
   have to be: a canvas context is just an object with methods, so a
   recording stand-in turns "what did it draw, in what order, at what
   radius" into plain assertions. Which is the whole point here, because
   the two things most likely to regress in this file are ORDER (bores must
   be last, or a fitting paints over an opening) and RADIUS (the bend
   convention, which used to live in two places).

       node physvis.test.js                                             */

'use strict';
const path = require('path');
global.window = {};
require(path.join(__dirname, '..', 'src', 'topology.js'));
require(path.join(__dirname, '..', 'src', 'physvis.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (label, ok, detail) => {
  console.log((ok ? '  ok  ' : '  FAIL') + '  ' + label);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};

/* A canvas that writes down what it was asked to do. Every method the
   renderer uses, and nothing else -- an unexpected call is a TypeError,
   which is a better failure than silently recording nothing. */
function recorder() {
  const calls = [];
  const rec = name => function () {
    calls.push([name].concat(Array.prototype.slice.call(arguments)));
  };
  const g = {
    calls,
    strokeStyle: null, fillStyle: null, lineWidth: 0,
    lineCap: null, lineJoin: null, globalAlpha: 1,
    beginPath: rec('beginPath'), closePath: rec('closePath'),
    moveTo: rec('moveTo'), lineTo: rec('lineTo'), arcTo: rec('arcTo'),
    arc: rec('arc'), fill: rec('fill'), fillRect: rec('fillRect'),
    save: rec('save'), restore: rec('restore'),
  };
  /* stroke() and the style setters matter for ORDER, so capture the style
     in force at the moment of each paint rather than just the call. */
  g.stroke = function () { calls.push(['stroke', g.strokeStyle, g.lineWidth]); };
  const realFill = g.fill;
  g.fill = function () { calls.push(['fill', g.fillStyle]); };
  void realFill;
  const realFillRect = g.fillRect;
  g.fillRect = function (x, y, w, h) {
    calls.push(['fillRect', g.fillStyle, x, y, w, h]);
  };
  void realFillRect;
  return g;
}

const THEME = { body: 'BODY', rim: 'RIM', light: 'LIGHT', dark: 'DARK' };

/* ---- the theme contract ------------------------------------------- */

let threw = null;
try { LPE.phys({}).draw(recorder(), {}); } catch (e) { threw = e; }
check('a missing theme throws rather than falling back', threw !== null);
check('the error names every missing role',
      threw && LPE.phys.ROLES.every(r => threw.message.includes(r)),
      threw && threw.message);

threw = null;
try { LPE.phys({}).draw(recorder(), { body: 'B', rim: 'R', light: 'L' }); }
catch (e) { threw = e; }
/* The message ends by listing every role for reference, so look only at
   the "missing:" clause -- otherwise this passes for the wrong reason. */
const missingClause = threw ? threw.message.split('missing: ')[1].split('.')[0] : '';
check('a PARTIAL theme throws, naming only what is absent',
      threw !== null && missingClause.trim() === 'dark',
      `missing clause was "${missingClause}"`);

check('the core declares its roles rather than hiding them',
      Array.isArray(LPE.phys.ROLES) && LPE.phys.ROLES.length === 4);

/* ---- the bend radius is the netlist's ------------------------------ */

const R_BORE = 11;
let g = recorder();
LPE.phys({ lines: [{ pts: [[0, 0], [100, 0], [100, 100]], r: R_BORE }] })
   .draw(g, THEME);

const arcs = g.calls.filter(c => c[0] === 'arcTo');
/* Three, not one: a run is painted three times -- body, highlight, bore --
   and the corner is an elbow in every pass or the walls stop being
   concentric. */
check('a corner becomes an elbow, not a mitre, in every pass',
      arcs.length === 3, `${arcs.length} arcTo calls`);
check('the elbow radius is the NETLIST\'s bendRadius, not a local copy',
      arcs.length > 0 &&
      arcs.every(a => a[5] === LPE.net.bendRadius(R_BORE)),
      arcs.length ? `drew R=${arcs.map(a => a[5]).join(',')}, ` +
                    `netlist says ${LPE.net.bendRadius(R_BORE)}` : '');
check('and that is the long-radius convention, 3 x bore radius',
      LPE.net.bendRadius(R_BORE) === 3 * R_BORE);

/* The duplication this extraction removed: physvis must hold no bend
   radius of its own. Checked against the SOURCE, because a copy that
   currently agrees is still a copy. */
const src = require('fs').readFileSync(
  path.join(__dirname, '..', 'src', 'physvis.js'), 'utf8');
const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
check('physvis keeps NO second copy of the bend formula',
      !/3\s*\*\s*r\b/.test(code),
      'found a bare 3*r outside comments -- ask the netlist instead');

/* ---- draw order: the bore is sacred -------------------------------- */

g = recorder();
LPE.phys({
  lines: [{ pts: [[0, 0], [200, 0]], r: R_BORE }],
  tees: [{ x: 100, y: 0, r: R_BORE, branch: 7 }],
  reducers: [{ x0: 300, x1: 380, y: 0, r1: 11, r2: 7 }],
  fittings: [{ x: 60, y: 0, r: R_BORE, kind: 'union' }],
}).draw(g, THEME);

const strokes = g.calls.filter(c => c[0] === 'stroke');
const order = strokes.map(c => c[1]);
check('runs are painted body, then highlight, then bore',
      order.join('>') === 'BODY>LIGHT>DARK', order.join('>'));

const lastBore = g.calls.map(c => c[0] === 'stroke' && c[1] === 'DARK')
                        .lastIndexOf(true);
const collars = g.calls.map((c, i) => (c[0] === 'fillRect' && c[1] === 'RIM') ? i : -1)
                       .filter(i => i >= 0);
check('every collar is laid BEFORE the bore, so none closes an opening',
      collars.length > 0 && Math.max.apply(null, collars) < lastBore,
      `last collar ${Math.max.apply(null, collars)}, bore ${lastBore}`);

/* The documented exception, and the only one. */
const filletFills = g.calls.map((c, i) => (c[0] === 'fill' && c[1] === 'BODY') ? i : -1)
                           .filter(i => i > lastBore);
check('the crotch fillet is the ONE thing added after the bore',
      filletFills.length === 2, `${filletFills.length} body fills after the bore`);

/* ---- fitting geometry ---------------------------------------------- */

g = recorder();
LPE.phys({ reducers: [{ x0: 0, x1: 80, y: 50, r1: 11, r2: 7 }] })
   .draw(g, THEME);
const moves = g.calls.filter(c => c[0] === 'moveTo');
check('a reducer is drawn as a cone, not a step',
      moves.length >= 1 && moves[0][1] === 0 && moves[0][2] === 50 - 11 - LPE.phys.WALL,
      JSON.stringify(moves[0]));

g = recorder();
LPE.phys({ tees: [{ x: 100, y: 40, r: 11, branch: 7 }] }).draw(g, THEME);
const quarterArcs = g.calls.filter(c => c[0] === 'arc');
check('a tee gets two crotch fillets, one each side', quarterArcs.length === 2);
check('each fillet is a QUARTER round, not the long way about',
      quarterArcs.every(a => Math.abs(Math.abs(a[5] - a[4]) - Math.PI / 2) < 1e-9),
      quarterArcs.map(a => (Math.abs(a[5] - a[4]) / Math.PI).toFixed(3) + 'pi').join(' '));

/* ---- it draws what the netlist hands it ---------------------------- */

/* Coordinates live in a FRAME, never on a component -- the registration
   layer rejects the shorthand by name, and rightly: a component that
   carries its own pixels cannot be drawn twice at two scales. */
const net = LPE.net({
  bores: { main: 0.622 },
  components: {
    tank: { kind: 'vessel', tag: 'TK-1', role: 'source' },
    hv1:  { kind: 'valve',  tag: 'HV-1', key: 'main', valveType: 'globe' },
    pod:  { kind: 'vessel', tag: 'TK-2', role: 'sink' },
  },
  segments: [
    { from: 'tank.out', to: 'hv1.in',  bore: 'main' },
    { from: 'hv1.out',  to: 'pod.in',  bore: 'main' },
  ],
  frames: {
    rig: {
      pxPerInch: 10 / 0.493, round: 1,
      at: { tank: [30, 80], hv1: [200, 80], pod: [400, 80] },
    },
  },
});
check('the netlist it reads has no errors', net.errors.length === 0,
      net.errors.join('; '));

const spec = net.toPiping();
g = recorder();
let drewFromNet = true;
try { LPE.phys(spec).draw(g, THEME); } catch (e) { drewFromNet = false; threw = e; }
check('phys view draws straight from net.toPiping()', drewFromNet,
      !drewFromNet && threw ? threw.message : '');
check('and that produced actual geometry', g.calls.length > 0);

/* ---- independence --------------------------------------------------- */

check('exposes exactly its public surface',
      typeof LPE.phys === 'function' &&
      typeof LPE.phys.theme === 'function' &&
      Array.isArray(LPE.phys.ROLES));

console.log('');
if (failures) {
  console.log(`  ${failures} FAILED`);
  process.exit(1);
}
process.exit(0);
