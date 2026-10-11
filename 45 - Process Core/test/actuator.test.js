/* @layer registration -- a test harness belongs to no process layer.

   THE ACTUATOR, AND WHICH WAY IT MOVES.

   Three of these exist because the first version of this layer got the
   drawing wrong in ways no number in it was wrong: the figure was
   vendored as one ring per part, which silently threw away the yoke's
   spring housing and the upper casing's travel stops, and travel was
   added to the traced plate position instead of taken off it, which
   drove the plate up through a casing it was already touching. Both
   look like art problems and both are checkable.                     */
'use strict';
const fs = require('fs');
const path = require('path');
global.window = {};
for (const m of ['catalogue', 'actuator'])
  require(path.join(__dirname, '..', 'src', m + '.js'));
const LPE = global.window.LPE;

let failures = 0;
const check = (what, ok, detail) => {
  console.log((ok ? '  ok    ' : '  FAIL  ') + what);
  if (!ok) { failures++; if (detail) console.log('        ' + detail); }
};
const refuses = (what, fn, fragment) => {
  let msg = null;
  try { fn(); } catch (e) { msg = e.message; }
  if (msg === null) { failures++;
    console.log('  FAIL  ' + what + '\n        it was allowed'); return; }
  if (fragment && msg.indexOf(fragment) < 0) { failures++;
    console.log('  FAIL  ' + what + '\n        said: ' + msg); return; }
  console.log('  ok    ' + what);
};

const CAT = LPE.catalogue.load(JSON.parse(fs.readFileSync(
  path.join(__dirname, '..', 'catalogue', 'parts.json'), 'utf8')));
const FIG = JSON.parse(fs.readFileSync(path.join(
  __dirname, '..', 'catalogue', 'actuator-657-figure6.json'), 'utf8'));
const A30 = CAT.part('ACTUATOR/657/SIZE30');
const at = pct => LPE.actuator.diaphragm(
  { part: A30, figure: FIG, travelPct: pct });

const ys = rs => [].concat.apply([], rs.map(r => r.map(q => q[1])));
const xs = rs => [].concat.apply([], rs.map(r => r.map(q => q[0])));
const top = rs => Math.max.apply(null, ys(rs));
const bot = rs => Math.min.apply(null, ys(rs));
const span = a => Math.max.apply(null, ys(a.spring ? [a.spring] : [[]])) -
                  Math.min.apply(null, ys(a.spring ? [a.spring] : [[]]));

/* ---- the figure is a set of RINGS, and holes are rings ------------- */
{
  const a = at(100);
  check('the yoke is an outer profile AND its spring housing',
        a.yoke.length === 2,
        'one ring is not a casting with a cavity in it -- it is a lump, ' +
        'and the housing wall it loses is the one that looked wrong');
  check('the housing is inside the yoke and open top and bottom',
        (function () {
          const o = a.yoke[0], h = a.yoke[1];
          return Math.max.apply(null, xs([h])) <
                 Math.max.apply(null, xs([o])) &&
                 Math.min.apply(null, ys([h])) >
                 Math.min.apply(null, ys([o]));
        })());
  check('the upper casing carries its two travel stops as their own rings',
        a.upperCasing.length === 3);
  check('the spring seat and the adjustor are each two halves of a section',
        a.springSeat.length === 2 && a.adjustor.length === 2);

  refuses('a figure flattened to one ring per part is refused by name',
    () => LPE.actuator.diaphragm({ part: A30, travelPct: 50, figure: {
      shapes: {
        /* a well-formed casing, so the scale can be read, and a yoke
           flattened the way the first vendoring flattened it */
        'lower-diaphragm-casing': [[[-3, 9], [3, 9], [3, 10], [-3, 10]]],
        yoke: [[0, 0], [1, 0], [1, 1]],
      } } }),
    'LIST OF RINGS');
  refuses('and a figure with no casing to read the scale off is refused',
    () => LPE.actuator.diaphragm({ part: A30, travelPct: 50,
      figure: { shapes: { yoke: [[[0, 0], [1, 0], [1, 1]]] } } }),
    'read off');
}

/* ---- the castings are symmetric about the centreline ---------------
   Not a smoothing question: the approved shells are symmetric BY
   CONSTRUCTION -- the pipeline fits one half and mirrors it. A part
   that comes back lopsided here means the wrong export was taken. */
{
  const a = at(100);
  for (const k of ['yoke', 'lowerCasing', 'upperCasing', 'plate']) {
    const v = xs(a[k]);
    const off = (Math.min.apply(null, v) + Math.max.apply(null, v)) / 2;
    check(k + ' sits on the centreline', Math.abs(off) < 1e-9,
          'off by ' + off.toFixed(4) + ' in');
  }
}

/* ---- WHICH WAY TRAVEL GOES ----------------------------------------
   The figure is drawn at the upper stop -- the Working Model states
   it: at rest the plate presses against the upper casing. So the
   traced position is 100%, and 0% is the rated travel BELOW it. */
{
  const open = at(100), shut = at(0);
  check('the figure as traced is the valve wide open',
        open.lift === 0);
  check('seating the plug puts the plate down by exactly the rated travel',
        Math.abs((top(open.plate) - top(shut.plate)) -
                 A30.dims.maxTravel) < 1e-9,
        'dropped ' + (top(open.plate) - top(shut.plate)).toFixed(4) +
        ' in against a rated ' + A30.dims.maxTravel + ' in');
  check('and the plate never climbs above where the figure drew it',
        [0, 25, 50, 75, 100].every(
          p => top(at(p).plate) <= top(open.plate) + 1e-9),
        'the plate used to travel up through the upper casing, which it ' +
        'is already touching');
  check('the plate stays under the crown of the upper casing',
        top(at(100).plate) < top(at(100).upperCasing));
}

/* ---- the spring actually springs ----------------------------------- */
{
  const open = at(100), shut = at(0);
  check('the spring is longest with the valve open',
        span(open) > span(shut));
  check('and it compresses by exactly the travel, because the seat is fixed',
        Math.abs((span(open) - span(shut)) - A30.dims.maxTravel) < 1e-9,
        'by ' + (span(open) - span(shut)).toFixed(4) + ' in');
  check('the seat does not move with the plate',
        Math.abs(top(open.springSeat) - top(shut.springSeat)) < 1e-9);
  check('the coil stands on the seat, not on the adjustor below it',
        bot(open.springSeat) > top(open.adjustor) - 0.2);
}

/* ---- the stem is one rigid part ------------------------------------- */
{
  const open = at(100), shut = at(0);
  const len = a => top(a.stem) - bot(a.stem);
  check('the stem is the same length at every travel',
        Math.abs(len(open) - len(shut)) < 1e-9,
        'it was pinned at the bottom and stretched: ' +
        len(open).toFixed(3) + ' vs ' + len(shut).toFixed(3));
  check('and it translates with the plate, so it stays on the valve stem',
        Math.abs((bot(open.stem) - bot(shut.stem)) -
                 A30.dims.maxTravel) < 1e-9);
  check('it is drawn at the stem diameter the actuator accepts',
        Math.abs((Math.max.apply(null, xs(open.stem)) -
                  Math.min.apply(null, xs(open.stem))) -
                 A30.dims.stemAccepted) < 1e-9);
  check('and it is declared as constructed, not traced',
        open.built.indexOf('actuator stem') >= 0 &&
        open.built.indexOf('spring') >= 0);
}

/* ---- one drawing, seven sizes, drawn at seven sizes -----------------
   Figure 6 covers the 30 through the 60 and is dimensioned to none of
   them. Drawn at the traced size for every row, a size 45 came out
   the same size as a size 30 and both came out too small for their
   published diaphragms -- which is only visible when the actuator is
   put next to a valve whose dimensions all are published. */
{
  const A45 = CAT.part('ACTUATOR/657/SIZE45');
  const a30 = at(100);
  const a45 = LPE.actuator.diaphragm(
    { part: A45, figure: FIG, travelPct: 100 });
  const across = a => {
    const v = xs(a.lowerCasing);
    return Math.max.apply(null, v) - Math.min.apply(null, v);
  };
  const dia = A => Math.sqrt(4 * A / Math.PI);

  check('the casing is drawn at the diaphragm its effective area implies',
        Math.abs(across(a30) - dia(46)) < 1e-6 &&
        Math.abs(across(a45) - dia(105)) < 1e-6,
        'size 30 ' + across(a30).toFixed(2) + ' in against ' +
        dia(46).toFixed(2) + ', size 45 ' + across(a45).toFixed(2) +
        ' against ' + dia(105).toFixed(2));
  check('so a bigger row draws a bigger actuator',
        across(a45) > across(a30) * 1.4);
  check('and the scale it used is reported rather than hidden',
        a45.figureScale > a30.figureScale && a30.figureScale > 1);

  /* The dimensions that are published FOR THIS ROW are not scaled --
     they are drawn at their own size, or the scaling would overwrite
     the very numbers it is supposed to serve. */
  check('travel is not scaled with the figure',
        Math.abs((top(a45.plate) -
                  top(LPE.actuator.diaphragm({ part: A45, figure: FIG,
                    travelPct: 0 }).plate)) - A45.dims.maxTravel) < 1e-9);
  check('nor is the stem, which is drawn at the diameter it accepts',
        Math.abs((Math.max.apply(null, xs(a45.stem)) -
                  Math.min.apply(null, xs(a45.stem))) -
                 A45.dims.stemAccepted) < 1e-9);
  check('and the mounting face stays at y = 0 whatever the scale',
        Math.min.apply(null, ys(a45.yoke)) === 0 &&
        Math.min.apply(null, ys(a30.yoke)) === 0);
}

/* ---- it still refuses what it always refused ------------------------ */
refuses('travel beyond what the actuator reaches',
  () => LPE.actuator.diaphragm({ part: A30, figure: FIG, travelPct: 50,
    ratedTravel: 3 }), 'assembly layer exists to catch this');
refuses('a percentage that is not one',
  () => LPE.actuator.diaphragm({ part: A30, figure: FIG, travelPct: 140 }),
  '0 to 100');
refuses('a part that is not an actuator',
  () => LPE.actuator.diaphragm({ part: CAT.part('PIPE/NPS2/S40'),
    figure: FIG, travelPct: 50 }), 'catalogue actuator row');

console.log('\n' + (failures ? failures + ' FAILED' : 'all passed') + '\n');
process.exit(failures ? 1 : 0);
