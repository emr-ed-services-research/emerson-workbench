/* @layer phys-view
   @core Process Core -- extracted from LPE `engine.js` piping().
   May use: the netlist's public surface (net.toPiping, net.bendRadius).
   Never its internals.
   Never: any consumer's runtime -- no game engine, no palette, no level.
   Holds no colour of its own: the consumer supplies every role and a
   missing one throws by name, exactly as schemvis does. In LPE this file
   carried a default skin, which is chrome three layers down; the default
   is gone rather than moved.
   See `00 - Project/Process Core -- Architecture & Build Plan.md`.      */
/* ---------------- PHYS VIS: the rig as it is actually built ----------

   The SIBLING of schem-view, not its replacement. Both read the same
   netlist; they answer different questions. schem-view answers "what
   symbol stands for this" and draws an ISA process display. This answers
   "what shape is this and where is it", and draws pipe as pipe: runs with
   real bore, elbows with real radius, tees as forged bodies.

   Pipe is described the way it is actually built -- continuous runs with
   fittings at the joints -- rather than as a pile of rectangles:

     lines:    [{pts:[[x,y],...], r}]   a run; every corner becomes an elbow
     tees:     [{x,y,r,branch}]         a branch taken off a run
     reducers: [{x0,x1,y,r1,r2}]        a change of bore
     fittings: [{x,y,r,kind}]           unions, caps and the like

   Everything is drawn in three passes -- all bodies, then collars, then
   every BORE last -- so no fitting can ever paint over another's opening.
   That ordering is what keeps tees clear, and it belongs here rather than
   in each level.

   -------------------------------------------------------------------
   WHAT IS DELIBERATELY STILL THIN. `fittings` carries a `kind` and draws a
   collar, which is a band of metal and not a fitting library: there are no
   flanges, no discrete elbow bodies, no valve bodies. That is unfinished
   work, not damaged work, and it is recorded here rather than in a backlog
   so the next person reads it before assuming the gap is a bug.          */
(function (LPE) {
  'use strict';

  /* ---- DRAWING CONSTANTS, AND WHAT BACKS THEM ------------------------
     Nothing below is sourced. They came from Lunar Process Engineer and
     they are what a pipe LOOKS like, not what one measures.

     WALL is the one that should not stay this way. "Every run on a rig
     this size is the same schedule" was the old justification, and it is
     wrong in its own terms: wall thickness varies with NOMINAL SIZE as
     well as schedule, and ASME B36.10M says by how much. We hold that
     standard, it is in the register, and LPE's own `sizing.js` already
     carries the table it needs -- NPS, OD, wall, bore, area, cited to
     B36.10M. So a flat 5 px is a constant standing where a sourced
     number is already in the building.

     Correcting it is not a one-liner: `r` here is the bore scaled by the
     frame's pxPerInch, and the relationship between that and a true-scale
     wall needs settling before a real thickness can be drawn without the
     pipe changing size. Recorded rather than guessed at.

     TAPER, REINF and the crotch radius below are different: a reducer's
     cone length and a tee's reinforcement are forging details that vary
     by manufacturer and are not dimensioned in any standard we hold.
     Those are legitimately art, and are labelled as such rather than
     left to look like engineering. */
  const WALL = 5;        // ART, standing in for ASME B36.10M wall thickness
  const TAPER = 16;      // ART -- cone length is a forging detail

  /* THE BEND RADIUS IS THE NETLIST'S, NOT OURS.

     This file used to define `bendOf = r => 3*r` while topology.js defined
     an identical `bendRadius`. Two homes for one fact is the disease the
     layer split exists to cure, and it survived only because both copies
     happened to agree. Ask the netlist; if the convention ever changes it
     changes in one place.

     For the record of what the convention IS -- long-radius elbow,
     centreline R = 1.5 x bore diameter = 3 x bore radius -- see
     topology.js, which owns it. */
  function bendOf(r) {
    if (LPE.net && typeof LPE.net.bendRadius === 'function') {
      return LPE.net.bendRadius(r);
    }
    throw new Error(
      'phys.draw needs the netlist loaded: bend radius is topology.js\'s ' +
      'to define, and this layer deliberately keeps no copy of it. Load ' +
      'src/topology.js before src/physvis.js.');
  }

  /* What has to be coloured. Same contract as schem.draw: supply every
     role, a missing one throws by name rather than falling back, because a
     silent fallback is how a display ends up black on black and nobody can
     say why. */
  const ROLES = ['body', 'rim', 'light', 'dark'];

  function theme(spec) {
    const t = Object.assign({}, spec);
    const missing = ROLES.filter(r => !(r in t));
    if (missing.length) {
      throw new Error(
        'phys.draw needs a theme and this one is missing: ' +
        missing.join(', ') + '. The process core holds no colours -- the ' +
        'same rig has to render as pixel art and as a modern view, so the ' +
        'consumer says what each role looks like. Roles: ' +
        ROLES.join(', '));
    }
    return t;
  }

  function phys(spec) {
    const lines = (spec && spec.lines) || [];
    const tees = (spec && spec.tees) || [];
    const manifolds = (spec && spec.manifolds) || [];
    const reducers = (spec && spec.reducers) || [];
    const fittings = (spec && spec.fittings) || [];

    /* Corners are filleted with arcTo, which bends the CENTRELINE -- so the
       inner and outer walls come out as concentric arcs, the way a real
       elbow is made. A round line-join only pads the outside and leaves a
       sharp inside corner, which is a mitred fitting and the wrong shape
       for flow. */
    const stroke = (g, pad, col) => {
      g.strokeStyle = col; g.lineCap = 'butt'; g.lineJoin = 'round';
      lines.forEach(L => {
        g.lineWidth = 2 * (L.r + pad);
        const R = bendOf(L.r);
        g.beginPath();
        g.moveTo(L.pts[0][0], L.pts[0][1]);
        for (let i = 1; i < L.pts.length - 1; i++) {
          g.arcTo(L.pts[i][0], L.pts[i][1],
                  L.pts[i + 1][0], L.pts[i + 1][1], R);
        }
        const e = L.pts[L.pts.length - 1];
        g.lineTo(e[0], e[1]);
        g.stroke();
      });
    };

    const taper = (g, rd, pad, col) => {     // taper in, throat, taper out
      const x0 = rd.x0, x1 = rd.x1, y = rd.y, r1 = rd.r1, r2 = rd.r2;
      const a = x0 + TAPER, b = x1 - TAPER;
      g.fillStyle = col;
      g.beginPath();
      g.moveTo(x0, y - r1 - pad); g.lineTo(a, y - r2 - pad);
      g.lineTo(b, y - r2 - pad); g.lineTo(x1, y - r1 - pad);
      g.lineTo(x1, y + r1 + pad); g.lineTo(b, y + r2 + pad);
      g.lineTo(a, y + r2 + pad); g.lineTo(x0, y + r1 + pad);
      g.closePath(); g.fill();
    };

    /* A MANIFOLD BODY, which is a different object from a row of tees.

       A fabricated junction is drawn as a forged fitting: socket hubs
       the pipe lands in, a crotch radiused where the branch leaves.
       Those are features of an ASSEMBLY. A manifold machined or printed
       as one piece has neither, and drawing them would invent joints the
       part exists to avoid.

       What it has instead is a BODY -- one slab of material spanning
       every port -- with passages bored through it. So: a single
       rectangle with eased corners, port faces where lines land, and the
       bores cut last like every other bore here.

       The body is drawn wider than the run it carries, because material
       around a bored passage is the reason the part is stiff enough to
       hang valves off. BODY_OVER is how much, and it is art -- no
       standard dimensions a manifold, which is the point: it is a
       manufactured part, not a catalogue fitting. */
    const BODY_OVER = 9;

    const manifoldBody = (g, m, pad, col) => {
      const vert = m.axis === 'v';
      const half = m.run + WALL + BODY_OVER + pad;
      const x0 = vert ? m.a[0] - half : Math.min(m.a[0], m.b[0]) - pad;
      const x1 = vert ? m.a[0] + half : Math.max(m.a[0], m.b[0]) + pad;
      const y0 = vert ? Math.min(m.a[1], m.b[1]) - pad : m.a[1] - half;
      const y1 = vert ? Math.max(m.a[1], m.b[1]) + pad : m.a[1] + half;
      const rad = Math.min(10, (x1 - x0) / 4, (y1 - y0) / 4);
      g.fillStyle = col;
      g.beginPath();
      if (g.roundRect) { g.roundRect(x0, y0, x1 - x0, y1 - y0, rad); }
      else { g.rect(x0, y0, x1 - x0, y1 - y0); }
      g.fill();
      return { x0, y0, x1, y1, vert };
    };

    return {
      draw(g, theme_) {
        const S = theme(theme_ || {});

        // --- bodies
        stroke(g, WALL, S.body);
        reducers.forEach(rd => taper(g, rd, WALL, S.body));
        manifolds.forEach(m => {
          const box = manifoldBody(g, m, 0, S.body);
          /* A machined part has EDGES. Without them the body reads as a
             grey slab with pipes stuck to it rather than a piece of
             material somebody made -- which is the whole distinction
             this representation exists to draw. A thin rim at the two
             ends is the end faces; a boss at each port is the flat the
             line is sealed against. */
          g.fillStyle = S.rim;
          if (box.vert) {
            g.fillRect(box.x0, box.y0, box.x1 - box.x0, 3);
            g.fillRect(box.x0, box.y1 - 3, box.x1 - box.x0, 3);
          } else {
            g.fillRect(box.x0, box.y0, 3, box.y1 - box.y0);
            g.fillRect(box.x1 - 3, box.y0, 3, box.y1 - box.y0);
          }
          m.ports.forEach(p => {
            if (!p.r) return;
            const face = p.r + WALL;
            if (box.vert) g.fillRect(box.x1 - 3, p.y - face, 3, 2 * face);
            else          g.fillRect(p.x - face, box.y1 - 3, 2 * face, 3);
          });
        });

        /* A real tee is a forged body, not two pipes butted together: the
           metal is thicker at the junction, each of the three ends has a
           socket hub the pipe lands in, and the crotch where the branch
           leaves the run is radiused rather than square. The reinforcement
           and hubs go in with the bodies; the crotch fillets go on after
           the bores, below. */
        tees.forEach(t => {
          const REINF = 3, stub = t.r + WALL + REINF + 16;
          g.fillStyle = S.body;
          g.fillRect(t.x - t.r - WALL - REINF, t.y - t.branch - WALL - REINF,
                     2 * (t.r + WALL + REINF), 2 * (t.branch + WALL + REINF));
          g.fillRect(t.x, t.y - t.branch - WALL - REINF,
                     stub, 2 * (t.branch + WALL + REINF));
          g.fillStyle = S.rim;                       // socket hubs, three ends
          g.fillRect(t.x - t.r - WALL - REINF - 2,
                     t.y - t.branch - WALL - REINF - 3,
                     3, 2 * (t.branch + WALL + REINF) + 6);
          g.fillRect(t.x + stub - 3, t.y - t.branch - WALL - REINF - 3,
                     3, 2 * (t.branch + WALL + REINF) + 6);
        });

        g.fillStyle = S.rim;
        reducers.forEach(rd => {
          g.fillRect(rd.x0 - 2, rd.y - rd.r1 - WALL - 2,
                     3, 2 * (rd.r1 + WALL) + 4);
          g.fillRect(rd.x1 - 1, rd.y - rd.r2 - WALL - 2,
                     3, 2 * (rd.r2 + WALL) + 4);
        });
        fittings.forEach(f => {
          g.fillRect(f.x - 3, f.y - f.r - WALL - 3, 3, 2 * (f.r + WALL) + 6);
          g.fillRect(f.x + f.r, f.y - f.r - WALL - 3, 3, 2 * (f.r + WALL) + 6);
        });

        // --- highlight along the top of each run
        g.save(); g.globalAlpha = 0.5; stroke(g, WALL - 2, S.light); g.restore();

        // --- BORES: nothing may close an opening after this
        stroke(g, 0, S.dark);
        reducers.forEach(rd => taper(g, rd, 0, S.dark));

        /* The passages through a manifold. A bored hole has no fillet
           where it meets a cross-bore -- it is two cylinders
           intersecting, and the edge is sharp. That is the visible
           difference from a forged tee, whose crotch is radiused
           because the metal is formed rather than cut, so it is drawn
           sharp here deliberately rather than for want of effort. */
        manifolds.forEach(m => {
          const vert = m.axis === 'v';
          g.fillStyle = S.dark;
          // the run, end to end through the body
          if (vert) {
            g.fillRect(m.a[0] - m.run, Math.min(m.a[1], m.b[1]),
                       2 * m.run, Math.abs(m.b[1] - m.a[1]));
          } else {
            g.fillRect(Math.min(m.a[0], m.b[0]), m.a[1] - m.run,
                       Math.abs(m.b[0] - m.a[0]), 2 * m.run);
          }
          // each branch passage, out to the body face it exits through
          const box = { half: m.run + WALL + BODY_OVER };
          m.ports.forEach(p => {
            if (!p.r) return;
            if (vert) g.fillRect(p.x, p.y - p.r, box.half, 2 * p.r);
            else      g.fillRect(p.x - p.r, p.y, 2 * p.r, box.half);
          });
        });

        /* --- crotch fillets, the one thing that goes on top of a bore.
           Where a branch leaves the run the metal is radiused, never a
           sharp internal corner -- a square crotch is a stress riser and is
           not how a tee is made. Adding it back after the bores keeps it
           exact. */
        g.fillStyle = S.body;
        /* Each fillet is a QUARTER round. The sweep flags were inverted
           once, which took the long way round the circle -- 270 degrees
           instead of 90 -- so instead of a small radius in the crotch each
           tee got a three-quarter blob laid over it. */
        tees.forEach(t => {
          const CR = Math.max(3, t.branch * 0.6), cx = t.x + t.r;
          [-1, 1].forEach(sy => {
            const cy = t.y + sy * t.branch;
            g.beginPath();
            g.moveTo(cx, cy);
            g.lineTo(cx + CR, cy);
            if (sy < 0) g.arc(cx + CR, cy - CR, CR, Math.PI / 2, Math.PI, false);
            else        g.arc(cx + CR, cy + CR, CR, -Math.PI / 2, -Math.PI, true);
            g.closePath(); g.fill();
          });
        });
      },
    };
  }

  LPE.phys = phys;
  LPE.phys.theme = theme;
  LPE.phys.ROLES = ROLES;
  LPE.phys.WALL = WALL;

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
