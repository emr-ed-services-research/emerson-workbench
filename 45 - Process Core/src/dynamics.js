/* @layer dynamics
   @core Process Core -- Phase 3.

   WHAT FLOWS, AND AT WHAT PRESSURE, read off the netlist.

   May use: the netlist's public surface. Never a view, a colour, a canvas,
   or any consumer's runtime -- this layer answers "how much water", and
   every question about how that looks belongs above it.

   -------------------------------------------------------------------
   Before this, every level retyped its own solver: level 1 carried
   CV_MAIN_MAX / CV_BR_MAX / CV_REDUCER, its own series-Cv helper, its own
   pressure divider and its own first-order lag, none of which the netlist
   knew about. Two declarations of one rig, which is the disease the
   netlist exists to cure, one layer up from where it was cured.

   The model, which is the one level 1 already had, now derived instead of
   written:

   RESTRICTIONS are the components that have a Cv -- valves (whose Cv is
   their rating times how far they are open) and reducers (fixed). Nothing
   else resists: pipe friction is not modelled, and a tee or a union is a
   hole with a shape.

   NODES therefore fall out rather than being chosen. If no restriction
   sits between two points, they are at the same pressure and they are the
   same node. In level 1 that makes the whole riser between the main valve
   and the three bed valves ONE node -- the manifold -- which is exactly
   the lumping the hand-written solver did, not because somebody decided
   to lump it but because there is nothing in between to drop pressure
   across.

   Boundary nodes are fixed: one holding a source sits at its supply
   pressure, one holding a sink sits at its own (0 = open to atmosphere).

   Then, for a node fed through Cv_u from Ps and drained through a
   parallel Cv_d to 0, flow in equals flow out:

       Cv_u * sqrt((Ps - Pn)/SG) = Cv_d * sqrt(Pn/SG)
           ->  Pn = Ps * Cv_u^2 / (Cv_u^2 + Cv_d^2)

   which is the line level 1 had, now with its derivation attached.

   PRESSURE IS STATE, not a function of the valves. Water is
   incompressible: shut the main with every bed shut and the trapped
   volume keeps whatever pressure it had, because nothing can leave. So
   solve() produces a TARGET, step() walks the held pressure toward it on
   a first-order lag, and flows are computed from the pressure that is
   actually there rather than the one it is heading for.

   -------------------------------------------------------------------
   WHAT THIS IS NOT. A network with a loop in it -- a recycle, a ring
   main, two sources feeding one header -- has no closed form and needs an
   iterative solve (Hardy Cross or a Newton step per node). That is not
   built. Such a net is REFUSED by name rather than silently given a wrong
   answer, because a plausible wrong flow is worse than no flow.

   And this is 1D network hydraulics, which is what a P&ID means by
   dynamics. It is not CFD. What happens inside one valve body belongs in
   an offline solve whose result arrives here as a Cv curve.
                                                                         */

(function (LPE) {
  'use strict';

  /* Two restrictions in series: resistances add, and Cv is the reciprocal
     of a resistance, so the squares add reciprocally. Level 1's own
     helper, verbatim, because bit-identical arithmetic is the bar.

     seriesCv(0, x) is 0 and needs no guard: 1/(0*0) is Infinity, and
     1/sqrt(Infinity) is 0. A shut valve in series with anything is shut. */
  const seriesCv = (a, b) => 1 / Math.sqrt(1 / (a * a) + 1 / (b * b));

  /* A component resists flow if it has a Cv. `cv` on a valve is its
     rating -- what it passes wide open -- and position scales it. */
  function restrictionCv(c, state) {
    if (c.cv === undefined) return null;
    if (c.kind === 'valve') {
      const pos = c.key !== undefined && state[c.key] !== undefined
        ? state[c.key]
        : (state[c.tag] !== undefined ? state[c.tag] : 0);
      return c.cv * pos;
    }
    return c.cv;
  }

  const isRestriction = c => c.cv !== undefined;

  function Dynamics(net, options) {
    const o = options || {};
    const sg = o.sg !== undefined ? o.sg
             : (net.spec.fluid && net.spec.fluid.sg !== undefined
                ? net.spec.fluid.sg : 1);
    const tau = o.tau !== undefined ? o.tau : 0.22;
    const errors = [];
    const comps = net.components;
    const live = net.segments.filter(s => s.from && s.to);

    /* ---- nodes: what is at the same pressure as what -----------------
       Union-find over the graph with every restriction left out. Walking
       in declaration order keeps node membership deterministic, which
       matters because the parallel sum below is floating point and
       addition is not associative. */
    const parent = {};
    const find = a => { while (parent[a] !== a) { parent[a] = parent[parent[a]]; a = parent[a]; } return a; };
    const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[rb] = ra; };

    const ids = Object.keys(comps);
    /* A restriction is a boundary, so each of its ports is its own point;
       everything else is a single point. */
    for (const id of ids) {
      if (isRestriction(comps[id])) {
        parent[id + '.in'] = id + '.in';
        parent[id + '.out'] = id + '.out';
      } else {
        parent[id] = id;
      }
    }
    const pointOf = (id, port) =>
      isRestriction(comps[id]) ? id + '.' + (port === 'in' ? 'in' : 'out') : id;

    for (const s of live) {
      union(pointOf(s.from.id, s.from.port === 'in' ? 'in' : 'out'),
            pointOf(s.to.id, s.to.port === 'in' ? 'in' : 'out'));
    }

    /* ---- boundaries --------------------------------------------------
       A source node sits at its supply pressure; a sink at its own. */
    const fixed = {};
    for (const id of ids) {
      const c = comps[id];
      const src = c.kind === 'source' || (c.kind === 'vessel' && c.role === 'source');
      const snk = c.kind === 'sink'   || (c.kind === 'vessel' && c.role === 'sink');
      if (!src && !snk) continue;
      const n = find(id);
      const p = c.pressure !== undefined ? c.pressure : (src ? null : 0);
      if (src && p === null) {
        errors.push(`${id} is a source and declares no pressure; ` +
                    `add "pressure" to it (psig) -- the dynamics layer ` +
                    `cannot invent a supply`);
        continue;
      }
      if (fixed[n] !== undefined && fixed[n] !== p) {
        errors.push(`node holding ${id} is fixed at two pressures ` +
                    `(${fixed[n]} and ${p})`);
      }
      fixed[n] = p;
    }

    /* ---- restrictions, and which nodes they join ---------------------
       Declaration order is preserved deliberately: the parallel sum is
       floating point, and a + b + c is not bit-identical to c + b + a. */
    let links = ids.filter(id => isRestriction(comps[id])).map(id => ({
      ids: [id],
      a: find(id + '.in'),
      b: find(id + '.out'),
    }));

    /* ---- series reduction --------------------------------------------
       A node that is not a boundary and has exactly two restrictions on
       it is a piece of pipe between them: nothing branches there, so the
       pair is one restriction. Level 1's bed-3 valve and its reducer are
       exactly this, and the hand-written solver combined them by hand. */
    let merged = true;
    while (merged) {
      merged = false;
      const degree = {};
      for (const L of links) {
        degree[L.a] = (degree[L.a] || 0) + 1;
        degree[L.b] = (degree[L.b] || 0) + 1;
      }
      for (const n of Object.keys(degree)) {
        if (fixed[n] !== undefined || degree[n] !== 2) continue;
        const pair = links.filter(L => L.a === n || L.b === n);
        if (pair.length !== 2) continue;              // a self-loop; leave it
        const [p, q] = pair;
        const outer = x => (x.a === n ? x.b : x.a);
        const joined = { ids: p.ids.concat(q.ids), a: outer(p), b: outer(q), series: true };
        links = links.filter(L => L !== p && L !== q).concat([joined]);
        merged = true;
        break;
      }
    }

    /* ---- what shape did we end up with? ------------------------------
       Everything the levels contain reduces to one unknown node. More
       than one has no closed form and is refused by name. */
    const unknown = {};
    for (const L of links) {
      if (fixed[L.a] === undefined) unknown[L.a] = true;
      if (fixed[L.b] === undefined) unknown[L.b] = true;
    }
    const unknownNodes = Object.keys(unknown);
    if (unknownNodes.length > 1) {
      errors.push(`this net reduces to ${unknownNodes.length} unsolved ` +
                  `pressure nodes. Only one is supported: more than one ` +
                  `means a loop or a staged header, which has no closed ` +
                  `form and needs an iterative solve that is not built. ` +
                  `Refusing rather than returning a plausible wrong flow`);
    }
    const node = unknownNodes[0];

    /* Upstream links feed the node from a higher fixed pressure;
       downstream links drain it to a lower one. */
    const sideOf = L => (L.a === node ? L.b : L.a);
    const onNode = links.filter(L => L.a === node || L.b === node);
    const supplyP = onNode.reduce((m, L) => Math.max(m, fixed[sideOf(L)] || 0), 0);
    const up   = onNode.filter(L => fixed[sideOf(L)] === supplyP && supplyP > 0);
    const down = onNode.filter(L => up.indexOf(L) < 0);

    let held = 0;

    function cvOf(L, state) {
      let c = restrictionCv(comps[L.ids[0]], state);
      for (let i = 1; i < L.ids.length; i++) {
        c = seriesCv(c, restrictionCv(comps[L.ids[i]], state));
      }
      return c;
    }

    function solve(state) {
      const s = state || {};
      /* Summed in declaration order. See the note on links above. */
      let cvUp = 0;
      for (const L of up) cvUp += cvOf(L, s);

      const downCv = down.map(L => cvOf(L, s));
      let cvDown = 0;
      for (const c of downCv) cvDown += c;

      let target;
      if (cvUp <= 0) {
        /* Isolated. With everything downstream shut too, the volume is
           trapped and holds what it had; with anything open it drains. */
        target = cvDown <= 0 ? held : 0;
      } else if (cvDown <= 0) {
        target = supplyP;                 // dead-headed against the header
      } else {
        target = supplyP * (cvUp * cvUp) / (cvUp * cvUp + cvDown * cvDown);
      }

      /* Flows follow the pressure that is actually there, not the one it
         is heading for. This is the difference between a bay that fills
         and a bay that teleports. */
      const root = Math.sqrt(Math.max(0, held) / sg);
      const q = {};
      let qTot = 0;
      down.forEach((L, i) => {
        const f = downCv[i] * root;
        qTot += f;
        for (const id of L.ids) {
          const c = comps[id];
          if (c.key !== undefined) q[c.key] = f;
          if (c.tag) q[c.tag] = f;
          q[id] = f;
        }
      });

      return { cvUp, cvDown, pressure: held, target, q, qTot,
               flows: down.map((L, i) => ({ ids: L.ids, cv: downCv[i],
                                            q: downCv[i] * root })) };
    }

    return {
      errors: errors.concat(net.errors),
      nodes: unknownNodes.length,
      tau, sg, supply: supplyP,

      solve,
      /* Walk the held pressure toward the target. The same first-order
         lag every level had; owned here so no level picks its own. */
      step(dt, state) {
        const s = solve(state);
        held += (s.target - held) * Math.min(1, dt / tau);
        return s;
      },
      get pressure() { return held; },
      set pressure(v) { held = v; },
      /* Settle instantly -- for a calibration pass that wants the steady
         state without running the clock. */
      settle(state) { held = solve(state).target; return solve(state); },
    };
  }

  LPE.dyn = Dynamics;
  LPE.dyn.seriesCv = seriesCv;

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
