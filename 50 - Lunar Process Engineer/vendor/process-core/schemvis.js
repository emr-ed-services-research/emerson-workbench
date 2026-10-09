/* @layer schem-view
   @core Process Core -- this file moves to `45 - Process Core` in Phase 1.
   May use: the netlist's public surface (net.toPiping, net.errors). Never
   its internals.
   Never: any consumer's runtime -- no game engine, no palette, no level.
   Holds no colour of its own: the consumer supplies every role and a
   missing one throws by name. That was Phase 5a; before it this file
   carried five default colours, which is chrome two layers down.
   See `00 - Project/Process Core -- Architecture & Build Plan.md`.       */
/* ---------------- SCHEM VIS: the process display ----------------

   Tier 2. Reads a netlist (tier 1, topology.js) and draws it as a process
   display: equipment as symbols, connections as plain lines. The piping
   view (tier 3, piping() + Line) draws the same netlist as physical pipe
   with real elbows and bores. Neither owns any geometry, so the two
   cannot disagree.

   Grounded in ISA-5.5-1985, "Graphic Symbols for Process Displays", which
   Emerson's Information Center holds. That is the right standard rather
   than a substitute for ISA-5.1: 5.5's own preface says ISA-S5.1 and
   ISA-S5.3 "are drafting standards which govern the depiction of process
   and instrumentation symbols for drawings and other printed documents",
   while "the ISA-S5.5 symbols were developed for use on video devices
   that represent both character display and pixel addressable displays."
   A game screen is a pixel-addressable video display.

   Symbols are IMPLEMENTED here from the standard's described geometry and
   keyed by its own four-character mnemonics. The document itself is
   copyrighted and is not reproduced: no page, figure or drawing from it
   lives in this repository.

   Structure: plan() decides, draw() paints. Everything that could be
   wrong - which symbol, what state, where a line breaks - is decided in
   plan(), which is pure data and testable without a canvas.            */

(function (LPE) {
  'use strict';

  /* ---- symbol geometry ----------------------------------------------
     Each entry draws itself centred on (0,0) at unit scale, so placement
     and sizing stay out of the shapes. `ports` is where lines attach, in
     the same unit space.

     ISA-5.5 gives no aspect ratio -- "although no specific aspect ratio
     is given, the shape that is drawn should be depicted as closely as
     possible" -- so these are proportioned to read at game scale.      */
  const SYMBOLS = {

    /* 3.3.13 Valve. One symbol for globe, gate, ball and needle. The
       standard shows it both ways: outline when the actual state is
       CLOSED, solid when OPEN. That fill IS the state indication. */
    VLVE: {
      w: 2.0, h: 1.4, ports: { in: [-1, 0], out: [1, 0] },
      path: (g, s) => {
        g.beginPath();
        g.moveTo(-1 * s, -0.7 * s); g.lineTo(0, 0);
        g.lineTo(-1 * s, 0.7 * s); g.closePath();
        g.moveTo(1 * s, -0.7 * s); g.lineTo(0, 0);
        g.lineTo(1 * s, 0.7 * s); g.closePath();
      },
      fillWhenOpen: true,
    },

    /* 3.3.13 3-Way Valve. Three triangles meeting at the centre; the
       standard notes port numbers are not part of the symbol. */
    VLV3: {
      w: 2.0, h: 1.8, ports: { in: [-1, 0], out: [1, 0], branch: [0, 0.9] },
      path: (g, s) => {
        g.beginPath();
        g.moveTo(-1 * s, -0.7 * s); g.lineTo(0, 0); g.lineTo(-1 * s, 0.7 * s);
        g.closePath();
        g.moveTo(1 * s, -0.7 * s); g.lineTo(0, 0); g.lineTo(1 * s, 0.7 * s);
        g.closePath();
        g.moveTo(-0.7 * s, 0.9 * s); g.lineTo(0, 0); g.lineTo(0.7 * s, 0.9 * s);
        g.closePath();
      },
      fillWhenOpen: true,
    },

    /* 3.3.13 Butterfly Valve: a disc on a shaft between two seats. */
    BVLV: {
      w: 1.6, h: 1.4, ports: { in: [-0.8, 0], out: [0.8, 0] },
      path: (g, s) => {
        g.beginPath();
        g.moveTo(-0.5 * s, -0.7 * s); g.lineTo(-0.5 * s, 0.7 * s);
        g.moveTo(0.5 * s, -0.7 * s); g.lineTo(0.5 * s, 0.7 * s);
        g.moveTo(-0.5 * s, 0.6 * s); g.lineTo(0.5 * s, -0.6 * s);
      },
      stroke: true,
      dot: true,
    },

    /* 3.3.13 Check Valve. "Arrow shows direction of allowable flow and is
       part of the symbol" -- so the arrow is drawn, not decoration. */
    CVLV: {
      w: 1.8, h: 1.4, ports: { in: [-0.9, 0], out: [0.9, 0] },
      path: (g, s) => {
        g.beginPath();
        g.moveTo(-0.3 * s, -0.7 * s); g.lineTo(-0.3 * s, 0.7 * s);
        g.moveTo(0.6 * s, -0.7 * s); g.lineTo(0.6 * s, 0.7 * s);
        g.moveTo(-0.3 * s, -0.6 * s); g.lineTo(0.6 * s, 0.6 * s);
        // flow arrow
        g.moveTo(-0.9 * s, 0); g.lineTo(-0.45 * s, 0);
        g.moveTo(-0.55 * s, -0.18 * s); g.lineTo(-0.3 * s, 0);
        g.lineTo(-0.55 * s, 0.18 * s);
      },
      stroke: true,
    },

    /* 3.3.13 Relief Valve: a right triangle on the line. Shown two ways
       for normally-closed-actually-open where feedback exists. */
    RVLV: {
      w: 1.4, h: 1.6, ports: { in: [-0.7, 0], out: [0, -0.8] },
      path: (g, s) => {
        g.beginPath();
        g.moveTo(-0.6 * s, 0.7 * s); g.lineTo(0.6 * s, 0.7 * s);
        g.lineTo(-0.6 * s, -0.7 * s); g.closePath();
      },
      fillWhenOpen: true,
    },

    /* 3.3.2 Vessel: "a vessel or separator... can also be used as a
       pressurized vessel in either a vertical or horizontal
       arrangement." Drawn with dished heads. */
    VSSL: {
      w: 1.8, h: 2.6, ports: { in: [-0.9, 0], out: [0.9, 0] },
      path: (g, s) => {
        const w = 0.9 * s, h = 1.1 * s, d = 0.35 * s;
        g.beginPath();
        g.moveTo(-w, -h + d);
        g.quadraticCurveTo(-w, -h - d * 0.4, 0, -h - d * 0.4);
        g.quadraticCurveTo(w, -h - d * 0.4, w, -h + d);
        g.lineTo(w, h - d);
        g.quadraticCurveTo(w, h + d * 0.4, 0, h + d * 0.4);
        g.quadraticCurveTo(-w, h + d * 0.4, -w, h - d);
        g.closePath();
      },
      stroke: true,
    },

    /* 3.3.10 Pump: "that class of equipment used to transport slurries or
       liquids by internal rotary action." Volute casing on a base. */
    PUMP: {
      w: 2.0, h: 2.0, ports: { in: [-0.9, 0], out: [0.45, -0.95] },
      path: (g, s) => {
        g.beginPath();
        g.arc(0, 0, 0.72 * s, Math.PI * 0.75, Math.PI * 1.75);
        g.lineTo(0.72 * s, -0.95 * s);
        g.lineTo(0.18 * s, -0.95 * s);
        g.moveTo(-0.55 * s, 0.5 * s); g.lineTo(-0.85 * s, 1.0 * s);
        g.lineTo(0.85 * s, 1.0 * s); g.lineTo(0.55 * s, 0.5 * s);
      },
      stroke: true,
    },

    /* 3.3.8 Inline Mixer: "a mixing device used to continuously blend
       materials." A zigzag element inside the line body -- distinct from
       AGIT, which stirs a vessel and does not sit in a line. */
    IMIX: {
      w: 2.2, h: 1.0, ports: { in: [-1.1, 0], out: [1.1, 0] },
      path: (g, s) => {
        const w = 0.9 * s, h = 0.5 * s;
        g.beginPath();
        g.rect(-w, -h, 2 * w, 2 * h);
        const n = 4, step = (2 * w) / n;
        for (let i = 0; i < n; i++) {
          g.moveTo(-w + i * step, h);
          g.lineTo(-w + (i + 0.5) * step, -h);
          g.lineTo(-w + (i + 1) * step, h);
        }
      },
      stroke: true,
    },
  };

  /* ---- planning ------------------------------------------------------
     Everything decidable is decided here, as plain data, so it can be
     checked without a canvas. draw() does no thinking.                 */

  const DEFAULTS = {
    scale: 14,          // px per symbol unit
    hide: ['fitting'],  // ISA-5.5 draws equipment, not pipe connections
    state: {},          // solver valve positions, by the valve's `key`
    openAt: 0.5,        // a valve reads OPEN at or above this
    breakGap: 5,        // px gap drawn at a crossing
  };

  function plan(net, options) {
    const o = Object.assign({}, DEFAULTS, options || {});
    const piping = net.toPiping({ hide: o.hide });
    const ops = [];
    const warnings = [];

    /* Lines first: on a process display a connection is a plain line.
       No elbow radii, no bores, no fittings -- that is tier 3's job.

       And nothing it declined to draw may leave a gap: the run through a
       hidden reducer arrives as two lines 80 px apart, which on screen
       reads as bay 3 being cut in half rather than as a fitting nobody
       drew. toPiping reports what it left undrawn; stitching across it
       is this layer's decision, because this is the layer that chose not
       to draw it. */
    const lines = stitch(piping.lines.map(l => l.pts), piping.undrawn || []);
    lines.forEach(pts => ops.push({ op: 'line', pts }));

    /* ISA-5.5 3.3.1, the one thing the Connectors section does specify:
       "a recommended practice to avoid any confusion on the video display
       is to use line breaks to indicate that the lines do not join. The
       most important lines should be kept solid with the secondary lines
       being broken. If all lines are of equal importance, a usual
       convention is to break the vertical line."

       So: find crossings that are not joints, and break the vertical. */
    for (const cross of crossings(lines)) {
      ops.push({ op: 'break', x: cross.x, y: cross.y,
                 axis: 'v', gap: o.breakGap });
    }

    /* Then equipment. A valve's fill carries its state, which is the
       standard's own convention rather than a choice made here. */
    for (const e of piping.equipment) {
      const sym = SYMBOLS[e.isa];
      if (!sym) {
        warnings.push(`${e.id}: no symbol implemented for ISA-5.5 ${e.isa}`);
        continue;
      }
      const pos = e.key != null && o.state[e.key] !== undefined
        ? Number(o.state[e.key]) : null;
      ops.push({
        op: 'symbol', id: e.id, isa: e.isa, kind: e.kind,
        x: e.x, y: e.y, scale: o.scale,
        position: pos,
        open: pos === null ? null : pos >= o.openAt,
        label: e.key || e.id,
      });
    }

    return { ops, warnings, scale: o.scale, bounds: bounds(ops) };
  }

  /* Join lines that stop at opposite ports of a component nobody drew.

     Each `undrawn` entry carries that component's port positions. A line
     ENDING on one of them and another line STARTING on a different one
     belong to the same connection, so they become one polyline with the
     undrawn component's footprint collapsed out of it: the join takes the
     first line's own last point and continues from the second's second
     point, which is what makes the 80 px of reducer disappear rather than
     be drawn as a straight line nobody can explain.

     Conservative on purpose. A port with two lines ending on it is a
     shape this does not understand, so it is left alone -- a visible gap
     is a better failure than a wrong connection. */
  function stitch(lines, undrawn) {
    if (!undrawn.length) return lines;
    const out = lines.map(pts => pts.slice());
    const at = (p, q) => p[0] === q[0] && p[1] === q[1];

    for (const u of undrawn) {
      for (const a of u.pts) {
        for (const b of u.pts) {
          if (at(a, b)) continue;
          const ends = out.filter(L => L.length && at(L[L.length - 1], a));
          const starts = out.filter(L => L.length && at(L[0], b));
          if (ends.length !== 1 || starts.length !== 1) continue;
          const head = ends[0], tail = starts[0];
          if (head === tail) continue;
          head.push.apply(head, tail.slice(1));
          tail.length = 0;
        }
      }
    }
    return out.filter(L => L.length > 1).map(collinear);
  }

  /* A stitched join leaves a vertex mid-run. piping() fillets every
     interior vertex, and crossings() treats each leg separately, so a
     collinear one is at best noise. topology.js drops them for the same
     reason; this is the same rule applied after a join it did not make. */
  function collinear(pts) {
    if (pts.length < 3) return pts;
    const out = [pts[0]];
    for (let i = 1; i < pts.length - 1; i++) {
      const a = pts[i - 1], b = pts[i], c = pts[i + 1];
      const flat = (a[0] === b[0] && b[0] === c[0]) ||
                   (a[1] === b[1] && b[1] === c[1]);
      if (!flat) out.push(b);
    }
    out.push(pts[pts.length - 1]);
    return out;
  }

  /* Where two line legs cross without sharing an endpoint. Orthogonal
     only, which the netlist already guarantees. */
  function crossings(lines) {
    const legs = [];
    lines.forEach((pts, li) => {
      for (let i = 1; i < pts.length; i++) {
        legs.push({ li, a: pts[i - 1], b: pts[i],
                    horiz: pts[i - 1][1] === pts[i][1] });
      }
    });
    const out = [];
    for (let i = 0; i < legs.length; i++) {
      for (let j = i + 1; j < legs.length; j++) {
        const A = legs[i], B = legs[j];
        if (A.horiz === B.horiz) continue;
        const h = A.horiz ? A : B, v = A.horiz ? B : A;
        const hy = h.a[1], vx = v.a[0];
        const hx0 = Math.min(h.a[0], h.b[0]), hx1 = Math.max(h.a[0], h.b[0]);
        const vy0 = Math.min(v.a[1], v.b[1]), vy1 = Math.max(v.a[1], v.b[1]);
        // Strictly inside both, so a shared corner or a tee is not a crossing.
        if (vx > hx0 && vx < hx1 && hy > vy0 && hy < vy1) {
          out.push({ x: vx, y: hy });
        }
      }
    }
    return out;
  }

  function bounds(ops) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const hit = (x, y) => {
      if (x < x0) x0 = x; if (x > x1) x1 = x;
      if (y < y0) y0 = y; if (y > y1) y1 = y;
    };
    for (const op of ops) {
      if (op.op === 'line') op.pts.forEach(p => hit(p[0], p[1]));
      else if (op.op === 'symbol') {
        const s = SYMBOLS[op.isa];
        hit(op.x - s.w * op.scale, op.y - s.h * op.scale);
        hit(op.x + s.w * op.scale, op.y + s.h * op.scale);
      }
    }
    return Number.isFinite(x0) ? { x0, y0, x1, y1 } : null;
  }

  /* ---- painting ------------------------------------------------------
     No decisions here. Walks the plan and strokes it.

     AND NO COLOURS. This layer knows that a line needs a colour; it does
     not get to know which. The same plan has to come out as 1990s pixel
     art and as a modern render, and a default here would quietly become
     the model -- it did: this block used to carry five of them, which is
     chrome that had leaked two layers down, recorded as debt in Phase 0
     and removed here in Phase 5a.

     Every role below must be supplied. A missing one throws, by name,
     rather than falling back: a silent fallback is how a display ends up
     black on black and nobody can say why.                             */

  /* What has to be coloured. `ground` may legitimately be null -- meaning
     "do not paint a ground" -- but it must be SAID, not omitted. */
  const ROLES = ['line', 'symbol', 'fill', 'label', 'ground', 'gap'];
  const METRICS = ['lineWidth', 'symbolWidth', 'labelFont'];

  /* Validate once, at setup, rather than inside a 60 fps draw loop. */
  function theme(spec) {
    const t = Object.assign({}, spec);
    const missing = ROLES.filter(r => !(r in t))
      .concat(METRICS.filter(m => t[m] === undefined));
    if (missing.length) {
      throw new Error(
        'schem.draw needs a theme and this one is missing: ' +
        missing.join(', ') + '. The process core holds no colours -- the ' +
        'same plan has to render as pixel art and as a modern view, so the ' +
        'consumer says what each role looks like. "ground" may be null for ' +
        '"paint none", but it has to be said. Roles: ' + ROLES.join(', ') +
        '; metrics: ' + METRICS.join(', '));
    }
    return t;
  }

  function draw(g, p, theme_) {
    const t = theme(theme_ || {});

    if (t.ground && p.bounds) {
      g.fillStyle = t.ground;
      g.fillRect(p.bounds.x0 - 20, p.bounds.y0 - 20,
                 (p.bounds.x1 - p.bounds.x0) + 40,
                 (p.bounds.y1 - p.bounds.y0) + 40);
    }

    g.save();
    g.lineCap = 'butt';
    g.lineJoin = 'miter';

    for (const op of p.ops) {
      if (op.op !== 'line') continue;
      g.strokeStyle = t.line; g.lineWidth = t.lineWidth;
      g.beginPath();
      g.moveTo(op.pts[0][0], op.pts[0][1]);
      for (let i = 1; i < op.pts.length; i++) g.lineTo(op.pts[i][0], op.pts[i][1]);
      g.stroke();
    }

    /* Breaks are painted over the line in the ground colour, which is how
       a break reads on a display: the secondary line simply stops. */
    for (const op of p.ops) {
      if (op.op !== 'break') continue;
      /* A break is the secondary line simply stopping, so it is painted
         over in whatever is behind it -- which only the consumer knows. */
      g.strokeStyle = t.gap;
      g.lineWidth = t.lineWidth + 2;
      g.beginPath();
      g.moveTo(op.x, op.y - op.gap);
      g.lineTo(op.x, op.y + op.gap);
      g.stroke();
    }

    for (const op of p.ops) {
      if (op.op !== 'symbol') continue;
      const sym = SYMBOLS[op.isa];
      g.save();
      g.translate(op.x, op.y);
      g.strokeStyle = t.symbol; g.lineWidth = t.symbolWidth;
      g.fillStyle = t.fill;
      sym.path(g, op.scale);
      if (sym.fillWhenOpen && op.open) g.fill();
      g.stroke();
      if (sym.dot) {
        g.beginPath(); g.arc(0, 0, 0.12 * op.scale, 0, Math.PI * 2); g.fill();
      }
      g.restore();

      if (op.label) {
        g.fillStyle = t.label; g.font = t.labelFont;
        g.textAlign = 'center'; g.textBaseline = 'top';
        g.fillText(op.label, op.x, op.y + sym.h * op.scale * 0.6);
      }
    }
    g.restore();
  }

  LPE.schem = { plan, draw, theme, SYMBOLS, DEFAULTS, ROLES, METRICS };

})(window.LPE = window.LPE || {});
