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

  /* ---- WHERE THE OTHER LAYERS COMPOSE -------------------------------

     This one function decides what a component does to the flow, and
     until now it knew two things: a valve's Cv scales linearly with
     position, and everything else is a constant. Both are
     simplifications that were honest for a teaching bay at 2 gpm.

     A VALVE AT 50% TRAVEL DOES NOT PASS 50% OF ITS Cv. Which fraction
     it passes is the trim's characteristic, and `LPE.trim` reads it
     from the manufacturer's own curve. An ED equal-percentage cage
     passes 23% at half travel, not 50 -- so the linear assumption is
     not a small error, it is more than a factor of two in the middle of
     the stroke, which is where control happens.

     A FITTING RESISTS. `LPE.sizing` turns a published K into the
     equivalent Cv through the standard's own N2, so a sourced elbow can
     join a Cv network without anybody inventing a bridge.

     BOTH ARE OPT-IN, and that is deliberate. A component gets the real
     physics only if it DECLARES it -- `trim` with a curve, `resistance`
     with a basis. Absent, the arithmetic is bit-for-bit what it was,
     which is why Lunar Process Engineer's recorded geometry and its
     81-state solver comparison are untouched by this. The game adopts
     when it wants to; see the vault's standing note on not letting a
     consumer become the reference.

     AND DECLARING IT MUST WORK OR FAIL LOUDLY. If a component asks for
     a characteristic and the trim layer is not loaded, that is an error
     by name -- never a silent fall back to linear, which would be the
     model quietly doing something other than what the netlist says. */

  function buildTrims(comps, errors) {
    const out = {};
    for (const id of Object.keys(comps)) {
      const c = comps[id];
      if (!c.trim) continue;
      if (!LPE.trim) {
        errors.push(id + ' declares a trim characteristic, but the trim ' +
          'layer is not loaded. Load src/trim.js, or remove the ' +
          'declaration -- a valve asked to follow its real curve must ' +
          'not silently fall back to a linear one.');
        continue;
      }
      try {
        out[id] = LPE.trim.fromCurve(c.trim);
      } catch (e) {
        errors.push(id + ' trim: ' + e.message);
      }
    }
    return out;
  }

  function buildFittingCv(comps, errors, refRe) {
    const out = {};
    for (const id of Object.keys(comps)) {
      const c = comps[id];
      if (!c.resistance) continue;
      if (!LPE.sizing) {
        errors.push(id + ' declares a resistance basis, but the sizing ' +
          'layer is not loaded. Load src/sizing.js.');
        continue;
      }
      if (!(refRe > 0)) {
        errors.push(id + ' declares a resistance basis, but no reference ' +
          'Reynolds number was given. K depends on it. Pass {reynolds} to ' +
          'LPE.dyn, or state it on the netlist -- it is not assumed.');
        continue;
      }
      const d = c.bore !== undefined ? c.bore : null;
      if (!(d > 0)) {
        errors.push(id + ' declares a resistance basis but has no bore, ' +
          'and both the correlation and the conversion to Cv need one.');
        continue;
      }
      try {
        const r = LPE.sizing.resistance(c.resistance, refRe, d);
        out[id] = { cv: LPE.sizing.cvFromK(r.K, d), K: r.K,
                    lo: LPE.sizing.cvFromK(r.hi, d),
                    hi: LPE.sizing.cvFromK(r.lo, d),
                    method: r.method, source: r.source };
      } catch (e) {
        errors.push(id + ' resistance: ' + e.message);
      }
    }
    return out;
  }

  /* A component resists flow if it has a Cv. `cv` on a valve is its
     rating -- what it passes wide open -- and position scales it,
     unless the valve carries a real characteristic. */
  function restrictionCv(c, state, trims, fittings) {
    if (fittings && fittings[c.id]) return fittings[c.id].cv;
    if (c.cv === undefined) return null;
    if (c.kind === 'valve') {
      const pos = c.key !== undefined && state[c.key] !== undefined
        ? state[c.key]
        : (state[c.tag] !== undefined ? state[c.tag] : 0);
      const t = trims && trims[c.id];
      if (t) {
        /* The curve is in Cv at percent of travel. Below its first
           printed point the catalogue says nothing, and trim returns
           null there rather than extrapolating -- that is the seat
           region, where leakage class governs. Shut is shut. */
        const cv = t.cvAt(Math.max(0, Math.min(100, pos * 100)));
        return cv === null ? 0 : cv;
      }
      return c.cv * pos;
    }
    return c.cv;
  }

  const isRestriction = c => c.cv !== undefined || c.resistance !== undefined;

  function Dynamics(net, options) {
    const o = options || {};
    const sg = o.sg !== undefined ? o.sg
             : (net.spec.fluid && net.spec.fluid.sg !== undefined
                ? net.spec.fluid.sg : 1);
    const tau = o.tau !== undefined ? o.tau : 0.22;
    const errors = [];
    /* Warnings are things worth saying that are not refusals. The
       distinction matters: this layer refuses rather than return a
       plausible wrong flow, so anything it DOES return has to be right,
       and a note about modelling intent must not be dressed as a fault. */
    const warnings = [];
    let determinate = false;
    const comps = net.components;

    /* The composed layers, built once. A netlist that declares none of
       this gets `trims` and `fittings` empty, restrictionCv takes its
       original path, and the arithmetic is unchanged to the bit. */
    const refRe = o.reynolds !== undefined ? o.reynolds
                : (net.spec.reynolds !== undefined ? net.spec.reynolds : null);
    const trims = buildTrims(comps, errors);
    const fittings = buildFittingCv(comps, errors, refRe);
    const composed = Object.keys(trims).length + Object.keys(fittings).length;
    if (composed) {
      warnings.push(composed + ' component(s) use real part physics: ' +
        Object.keys(trims).length + ' with a trim characteristic, ' +
        Object.keys(fittings).length + ' with a sourced resistance.' +
        (Object.keys(fittings).length
          ? ' Fitting K is evaluated at Re ' + refRe + ' and is NOT ' +
            'iterated with flow -- at industrial Reynolds numbers the ' +
            'Re-dependent term is a fraction of a percent of K, but this ' +
            'is a stated simplification, not an exact solve.'
          : ''));
    }
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
    if (unknownNodes.length === 0 && links.length) {
      /* Every node is pinned, so there is nothing to solve and every
         flow is zero -- which looks exactly like a rig nobody opened.
         It is almost always one mistake: a run terminated straight into
         a sink with no restriction between, which grounds the whole
         header to whatever that sink sits at. A real header ends in a
         blind, a cap or a drain VALVE, and the valve is the thing that
         makes the header a node. Say so, rather than returning silence
         that reads as "shut". */
      /* NOT an error. Every node pinned means the net is DETERMINATE:
         each restriction has a known pressure either side, so its flow
         follows directly and there is nothing to iterate. This is the
         easiest case, and it used to be refused as the hardest.

         It is the shape a control loop takes -- supply, a control valve,
         a load, a sink -- because series reduction correctly collapses
         valve-then-load into one equivalent restriction between two
         boundaries, leaving no node floating in the middle. Level 1
         escapes it only because its manifold has three branches, which
         is a tee and therefore a real node.

         The old text also misdiagnosed: it asserted a run must have been
         tied straight to a boundary, which is only one of the ways to
         get here and was not what happened. Kept as a WARNING because
         that mistake is still worth catching -- a header you expected to
         float, grounded to a sink, computes flows that are right for the
         netlist as written and wrong for the rig you meant. */
      determinate = true;

      /* Two very different rigs arrive here and they must not be told the
         same thing.

         A plain series run -- supply, control valve, load, sink -- is
         determinate because it genuinely has no middle node. Nothing is
         wrong and nothing should be said.

         A GROUNDED HEADER is the mistake: a tee or union that ought to
         find its own pressure has been tied straight to a boundary, so
         the header sits at the drain's pressure and every branch off it
         is computed against the wrong drop. Found building a twelve-bed
         density board whose header ran into a drain.

         The discriminator is what is sitting on the pinned node. A
         boundary belongs there. A restriction's port belongs there. An
         ordinary fitting does NOT -- it is pipe, and pipe between two
         restrictions is what a node IS. So name the fittings that got
         grounded, and say nothing when there are none. */
      const groundedFittings = ids.filter(id => {
        const c = comps[id];
        if (isRestriction(c)) return false;
        const src = c.kind === 'source' || (c.kind === 'vessel' && c.role === 'source');
        const snk = c.kind === 'sink' || (c.kind === 'vessel' && c.role === 'sink');
        if (src || snk) return false;
        return fixed[find(id)] !== undefined;
      });

      if (groundedFittings.length) {
        warnings.push('these are pinned to a boundary pressure and should ' +
                      'not be: ' + groundedFittings.join(', ') + '. A ' +
                      'fitting is pipe, and pipe between restrictions is ' +
                      'what a node IS -- so a run has been tied straight ' +
                      'to a source or sink with no restriction in ' +
                      'between, which grounds the whole header to that ' +
                      'boundary and computes every branch off it against ' +
                      'the wrong drop. Put a valve there (shut is fine), ' +
                      'the way a real header ends in a drain valve rather ' +
                      'than an open pipe');
      }
    }
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
    /* With a floating node, supply is the highest pressure feeding IT.
       With none, there is no "it" -- take the highest fixed pressure in
       the net, which is the same number for every rig that has one
       source and is at least honest for a rig that has several. */
    const supplyP = determinate
      ? Object.keys(fixed).reduce((m, n) => Math.max(m, fixed[n] || 0), 0)
      : onNode.reduce((m, L) => Math.max(m, fixed[sideOf(L)] || 0), 0);
    const up   = onNode.filter(L => fixed[sideOf(L)] === supplyP && supplyP > 0);
    const down = onNode.filter(L => up.indexOf(L) < 0);

    let held = 0;

    function cvOf(L, state) {
      let c = restrictionCv(comps[L.ids[0]], state, trims, fittings);
      for (let i = 1; i < L.ids.length; i++) {
        c = seriesCv(c, restrictionCv(comps[L.ids[i]], state, trims, fittings));
      }
      return c;
    }

    /* ---- the determinate case ----------------------------------------
       No node floats, so every restriction already knows the pressure on
       both sides. Flow is the sizing equation straight out -- q = Cv x
       sqrt(dP / sg) -- per link, with no iteration and no held state.

       Signed by direction: a link whose `a` end sits higher carries flow
       a -> b, and the reverse carries it back. A link with no drop across
       it carries nothing, which is what a valve between two equal
       pressures does. */
    function solveDeterminate(state) {
      const s = state || {};
      const q = {};
      let qTot = 0;
      const flows = [];
      let cvTot = 0;

      for (const L of links) {
        const pa = fixed[L.a] || 0, pb = fixed[L.b] || 0;
        const cv = cvOf(L, s);
        cvTot += cv;
        const dp = pa - pb;
        const mag = cv * Math.sqrt(Math.abs(dp) / sg);
        const f = dp >= 0 ? mag : -mag;
        qTot += f;
        flows.push({ ids: L.ids, cv, q: f });
        for (const id of L.ids) {
          const c = comps[id];
          if (c.key !== undefined) q[c.key] = f;
          if (c.tag) q[c.tag] = f;
          q[id] = f;
        }
      }

      /* pressure and target are NULL, not zero. There is no floating node
         in this net, so reporting a number for one would be inventing a
         reading -- the same reason the faceplate on the bench refuses to
         call a commanded setpoint a measured position. */
      return { cvUp: cvTot, cvDown: cvTot, pressure: null, target: null,
               q, qTot, flows, determinate: true };
    }

    function solve(state) {
      if (determinate) return solveDeterminate(state);
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
      warnings,
      /* True when no node floats: flows are exact and immediate, and
         `pressure`/`target` are null because there is nothing holding a
         pressure to report. */
      determinate,
      nodes: unknownNodes.length,
      tau, sg, supply: supplyP,

      solve,
      /* Walk the held pressure toward the target. The same first-order
         lag every level had; owned here so no level picks its own.

         A determinate net has nothing to walk -- no node holds a
         pressure, and the flows are already final -- so stepping it is
         just solving it. Guarded rather than left to arithmetic: the
         target is null there, and `held += (null - held) * x` is NaN,
         which would spread silently through every flow downstream. */
      step(dt, state) {
        const s = solve(state);
        if (determinate) return s;
        held += (s.target - held) * Math.min(1, dt / tau);
        return s;
      },
      get pressure() { return held; },
      set pressure(v) { held = v; },
      /* Settle instantly -- for a calibration pass that wants the steady
         state without running the clock. */
      settle(state) {
        if (determinate) return solve(state);   // already steady, nothing to settle
        held = solve(state).target;
        return solve(state);
      },
    };
  }

  LPE.dyn = Dynamics;
  LPE.dyn.seriesCv = seriesCv;

})(typeof window !== 'undefined'
   ? (window.LPE = window.LPE || {})
   : (module.exports = module.exports || {}));
