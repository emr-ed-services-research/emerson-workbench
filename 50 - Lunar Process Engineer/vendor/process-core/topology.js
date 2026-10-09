/* @layer netlist
   @core Process Core -- this file moves to `45 - Process Core` in Phase 1.
   May use: nothing. The netlist is the bottom of the stack.
   Never: a colour, a canvas call, a COORDINATE, or any consumer's runtime.
   A netlist says what is connected to what, with bores in inches because a
   half-inch line is half an inch however you draw it. WHERE anything sits
   is a frame's business and HOW it looks is decided above -- which symbol,
   what is hidden, where a line breaks, what colour anything is.
   Enforced by layers.test.js, which fails the build rather than trusting
   anyone to remember. See `00 - Project/Process Core -- Architecture & Build
   Plan.md`.                                                              */
/* ---------------- TOPOLOGY: what connects to what ----------------

   A level declares its pipework ONCE, as components with named ports and
   segments between those ports. Everything downstream - the drawing, the
   water, the bend radii, the tee positions - is derived from that single
   declaration.

   Why this exists
   ---------------
   Level 1 declares the same bay THREE times, in three incompatible forms:

     1. LPE.Line water segments, with elbow arc centres hand-derived
        (cx:E1.x-BEND, cy:E1.y+BEND) and sweep angles written out
     2. LPE.piping() drawing, as absolute pixel pts/tees/reducers
     3. BR_SEGS branch water, with its own hand-derived tee-turn arcs

   Move the riser and three places must be edited into agreement, each with
   its own hand-computed radii and arc centres. Nothing checks that they
   still agree. The level files carry the scars in their own comments:
   "drawing it as one stopped the butt-capped riser leaving bed 3 hanging
   off its end"; "the water narrows only where the fitting narrows it";
   "Water turns into a branch, it does not appear already running sideways."

   Every one of those was a disagreement between representations that a
   single source of truth cannot have.

   Where the model comes from
   --------------------------
   Not invented here. The structure is DEXPI's - "Data Exchange in the
   Process Industry", the open specification for describing a P&ID as data
   (dexpi.org, spec 1.4; vocabulary from ISO 15926). Its core is exactly
   this: a PipingNetworkSegment records SourceItem/SourceNode ->
   TargetItem/TargetNode, so components connect through NAMED PORTS and
   never through coordinates.

   That is the whole fix. A tee is not an {x,y} that must happen to agree
   with a vertex in some other array; it is a component with three ports,
   and a segment attaches TO a port. There are no two numbers left that can
   disagree.

   Borrowed: the topology model and its vocabulary. Not borrowed: the
   Proteus XML serialisation, the ISO 15926 taxonomy, units machinery. This
   is a canvas game, not a plant data exchange.

   What this is NOT
   ----------------
   It carries no symbol geometry. ISA-5.1's symbol set is a separate
   question, still blocked on getting the standard - Emerson's Information
   Center holds 5.2/5.3/5.4/5.5 but not 5.1. Topology first; symbols later;
   the two are independent.                                               */

(function (LPE) {
  'use strict';

  /* ---- the two radius rules, stated once ----------------------------
     Both were already in the code, just written out at each use site.
     BEND is piping()'s own long-radius convention: centreline R = 1.5 x
     bore diameter = 3 x bore radius, which is how a real long-radius
     elbow is made. TEE_TURN is tighter because a tee turn IS tight -
     nothing like a long-radius elbow - and 1.6 is the value level 1
     settled on after the branches looked wrong at anything larger. */
  const bendRadius = r => 3 * r;
  const teeTurnRadius = r => r * 1.6;

  /* ---- display classes ----------------------------------------------
     What a renderer is allowed to suppress.

     ISA-5.5 "Graphic Symbols for Process Displays" divides symbols into 13
     groups, and its FIRST group, Connectors, is deliberately empty: "the
     various possible connectors have been excluded. In the majority of
     cases, pipe connections are not required to be detailed." So on a
     process display a tee is not a symbol at all -- it is just where two
     lines meet. Only equipment gets drawn.

     LPE sometimes needs the opposite, though. Level 1's reducer is the
     point of the level: it is worth about a third of the flow, and a
     learner has to see it. So fittings are classified rather than dropped,
     and the renderer decides. Franz's requirement (2026-10-08): if
     fittings can be shown, they must also be hideable for clarity.

     The rule that keeps this honest: **class only affects drawing.** A
     hidden reducer still exists -- the line still runs through it, the
     bore still changes, the solver still sees it. Suppressing a symbol is
     never allowed to change the topology. */
  /* ISA-5.5 3.3.13 valve mnemonics, by type. Read from the standard's
     symbol pages; these are its identifiers, not ours. */
  /* ISA-5.5 3.3.2, group "Containers and vessels". The Process subgroup
     gave us VSSL from the start; the Storage subgroup is on the
     standard's pages 18-19 and went unread until 2026-10-09, which is
     why every tank in every rig was a generic vessel.

     A grow bed open to the bay is an ATMOSPHERIC TANK -- the standard's
     own words, "a tank for material stored under atmospheric pressure"
     -- and drawing it as a generic vessel was not wrong so much as
     unspecific. VSSL stays the right answer for a pressurised one: its
     description says so outright, "can also be used as a pressurized
     vessel in either a vertical or horizontal arrangement".       */
  const ISA_VESSEL = {
    vessel:      'VSSL',   // 3.3.2 Process  - vessel or separator
    separator:   'VSSL',
    jacketed:    'JVSL',   // 3.3.2 Process  - with a heating/cooling jacket
    reactor:     'RCTR',   // 3.3.2 Process  - a chemical reactor
    tower:       'DTWR',   // 3.3.2 Process  - packed or trayed distillation
    atmospheric: 'ATNK',   // 3.3.2 Storage  - stored at atmospheric pressure
    bin:         'BINN',   // 3.3.2 Storage  - solids, discharged from the bottom
    'floating-roof': 'FTNK', // 3.3.2 Storage - roof rides the liquid level
    'gas-holder':    'GHDR', // 3.3.2 Storage - roof rides the gas volume
    sphere:      'PVSL',   // 3.3.2 Storage  - pressurised spherical storage
    'weigh-hopper': 'WHPR',// 3.3.2 Storage  - a vessel used for weighing
  };

  const ISA_VALVE = {
    globe: 'VLVE', gate: 'VLVE', ball: 'VLVE', needle: 'VLVE',
    'three-way': 'VLV3',
    butterfly: 'BVLV',
    check: 'CVLV',
    relief: 'RVLV',
  };

  const CLASS = {
    boundary:  'boundary',   // where the diagram stops: source, sink
    fitting:   'fitting',    // pipe connections: tee, reducer, union, elbow
    equipment: 'equipment',  // valves, vessels, pumps -- ISA-5.5's 13 groups
  };

  /* ---- components and their ports -----------------------------------
     A port is a named attachment point. Its position is derived from the
     component's own position and geometry, never declared separately --
     that separation is the bug this module exists to remove.

     `ports` returns {name: {x, y, dir}} where dir is the outward unit
     vector, used to decide which way a segment leaves. */
  const KINDS = {
    source: {
      ports: c => ({ out: { x: c.at[0], y: c.at[1], dir: [1, 0] } }),
      draws: false,
      cls: CLASS.boundary,
    },
    sink: {
      ports: c => ({ in: { x: c.at[0], y: c.at[1], dir: [-1, 0] } }),
      draws: false,
      cls: CLASS.boundary,
    },
    /* A union is a fitting in the run: same bore in and out, drawn as a
       pair of collars. It does not move the line. */
    union: {
      ports: c => ({
        in:  { x: c.at[0], y: c.at[1], dir: [-1, 0] },
        out: { x: c.at[0], y: c.at[1], dir: [1, 0] },
      }),
      draws: 'fitting',
      cls: CLASS.fitting,
    },
    /* A tee: flow continues along the run and some of it leaves on the
       branch. Three ports, and the branch leaves perpendicular to the run.
       `axis` is the run's direction: 'v' for a vertical riser (branch goes
       +x), 'h' for a horizontal header (branch goes +y). */
    tee: {
      ports: c => (c.axis === 'h'
        ? { in:     { x: c.at[0], y: c.at[1], dir: [-1, 0] },
            out:    { x: c.at[0], y: c.at[1], dir: [1, 0] },
            branch: { x: c.at[0], y: c.at[1], dir: [0, 1] } }
        : { in:     { x: c.at[0], y: c.at[1], dir: [0, -1] },
            out:    { x: c.at[0], y: c.at[1], dir: [0, 1] },
            branch: { x: c.at[0], y: c.at[1], dir: [1, 0] } }),
      draws: 'tee',
      cls: CLASS.fitting,
    },
    /* A change of bore: taper in, throat, taper out. Horizontal only,
       which is all any level has needed; a vertical reducer would need
       piping() to learn one too. */
    reducer: {
      /* The only component that occupies a SPAN rather than a point, so
         its frame placement is two points: [[x0,y],[x1,y]]. `_a` and `_b`
         are those, resolved by the frame before ports are read. */
      ports: c => ({
        in:  { x: c._a[0], y: c._a[1], dir: [-1, 0] },
        out: { x: c._b[0], y: c._b[1], dir: [1, 0] },
      }),
      draws: 'reducer',
      cls: CLASS.fitting,
    },
    /* ---- equipment --------------------------------------------------
       The four kinds the levels actually contain: valves (the solver's
       main/b0/b1/b2), vessels (reservoir, pods, the level 4 chamber),
       pumps, and level 3's static mixer. Each maps onto one of ISA-5.5's
       13 symbol groups, which is what schem vis will draw.

       Every ISA-5.5 symbol carries a four-character mnemonic "to be used
       as its reference name in a computer system". Those are the `isa`
       values below, read off the standard's own symbol pages (which are
       images, not text -- pdftotext does not see them). They are the
       standard's identifiers, not ours, which is the point: schem vis
       keys its symbol table on them.                                    */

    /* The thing players operate. Sits IN a run, so a line passes through
       it the way it passes through a union. `key` is the solver's own
       name for it (main, b0, b1, b2) -- the netlist and the solver
       referring to one valve by one name, instead of the netlist not
       knowing valves exist at all. */
    valve: {
      ports: c => (c.valveType === 'three-way'
        ? { in:     { x: c.at[0], y: c.at[1], dir: [-1, 0] },
            out:    { x: c.at[0], y: c.at[1], dir: [1, 0] },
            branch: { x: c.at[0], y: c.at[1], dir: [0, 1] } }
        : { in:  { x: c.at[0], y: c.at[1], dir: [-1, 0] },
            out: { x: c.at[0], y: c.at[1], dir: [1, 0] } }),
      cls: CLASS.equipment,
      inline: true,
      draws: 'equipment',
      /* ISA-5.5 3.3.13. VLVE covers "GLOBE, GATE, BALL, and NEEDLE
         valves used to regulate fluid flow through piping systems", so
         all four of those are one symbol; butterfly, check and relief
         are their own. The symbol also carries STATE in its fill --
         outline for closed, solid for open -- which is a display
         convention a game can use directly. */
      isa: c => ISA_VALVE[c && c.valveType] || 'VLVE',
    },
    /* Reservoirs, grow-bay pods, the level 4 chamber. `role` says whether
       it feeds the net, receives from it, or sits in the middle -- which
       decides its ports, and means a vessel can replace a bare source or
       sink once it has a symbol to draw. */
    vessel: {
      ports: c => (c.role === 'source'
        ? { out: { x: c.at[0], y: c.at[1], dir: [1, 0] } }
        : c.role === 'inline'
          ? { in:  { x: c.at[0], y: c.at[1], dir: [-1, 0] },
              out: { x: c.at[0], y: c.at[1], dir: [1, 0] } }
          : { in: { x: c.at[0], y: c.at[1], dir: [-1, 0] } }),
      cls: CLASS.equipment,
      inline: false,
      draws: 'equipment',
      /* ISA-5.5 3.3.2. `vesselType` picks from the group -- the Process
         subgroup's VSSL/JVSL/RCTR/DTWR and the Storage subgroup's
         ATNK/BINN/FTNK/GHDR/PVSL/WHPR. VSSL stays the default because
         it is the standard's own generic: "a vessel or separator...
         can also be used as a pressurized vessel". */
      isa: c => ISA_VESSEL[c && c.vesselType] || 'VSSL',
    },
    pump: {
      ports: c => ({
        in:  { x: c.at[0], y: c.at[1], dir: [-1, 0] },
        out: { x: c.at[0], y: c.at[1], dir: [1, 0] },
      }),
      cls: CLASS.equipment,
      inline: true,
      draws: 'equipment',
      /* ISA-5.5 3.3.10 Rotating equipment: "that class of equipment used
         to transport slurries or liquids by internal rotary action".
         BLWR, CMPR and TURB are the others in the group; RECP in 3.3.9 is
         the reciprocating kind. */
      isa: () => 'PUMP',
    },
    /* Level 3's static mixer. ISA-5.5 calls this an Inline Mixer; an
       Agitator is the other symbol in the same group and is a different
       thing (it stirs a vessel, it does not sit in a line). */
    mixer: {
      ports: c => ({
        in:  { x: c.at[0], y: c.at[1], dir: [-1, 0] },
        out: { x: c.at[0], y: c.at[1], dir: [1, 0] },
      }),
      cls: CLASS.equipment,
      inline: true,
      draws: 'equipment',
      /* ISA-5.5 3.3.8 Mixing. IMIX, "a mixing device used to continuously
         blend materials" -- not AGIT, which is a blade/propeller/paddle
         agitator that stirs a vessel rather than sitting in a line. */
      isa: () => 'IMIX',
    },

    /* A corner with nothing in it. Usually implicit - a segment's own
       waypoints become elbows - but declarable when something needs to
       attach to the corner itself. */
    elbow: {
      ports: c => ({
        in:  { x: c.at[0], y: c.at[1], dir: [-1, 0] },
        out: { x: c.at[0], y: c.at[1], dir: [1, 0] },
      }),
      draws: false,
      cls: CLASS.fitting,
    },
  };

  /* =================================================================== */

  /* ---- frames and registration ---------------------------------------
     A netlist is a graph, not a drawing. The same bay has to come out as a
     1990s cutaway, as an ISA-5.5 process display and, later, as a modern
     render -- so WHERE each component sits cannot live on the component.
     It lives in a named frame, and `LPE.net(spec, {frame})` resolves one in.

     A frame carries three things:

       pxPerInch   how big an inch is here. Bores are declared in INCHES
       round       decimal places to quantise a scaled bore to (optional)
       at          {componentId: [x,y]}, or [[x0,y],[x1,y]] for a reducer
       via         {segmentId: [[x,y],...]} waypoints, keyed by the same
                   "from.port->to.port" id the segments already carry

     Transposing a new physical structure over an existing netlist is then
     exactly one thing: another frame. That is the whole of registration.  */

  const DEFAULT_FRAME = { pxPerInch: 1, at: {}, via: {} };

  function scaleBore(inches, frame) {
    const px = inches * (frame.pxPerInch === undefined ? 1 : frame.pxPerInch);
    if (frame.round === undefined) return px;
    const m = Math.pow(10, frame.round);
    return Math.round(px * m) / m;
  }

  function segId(s) {
    return s.from + '->' + s.to;
  }

  function Net(spec, opts) {
    const o = opts || {};
    const frames = spec.frames || {};
    const names = Object.keys(frames);
    /* One frame and no argument means that one. More than one and the
       caller has to say, because silently picking would be the same class
       of accident this layer exists to end. */
    const frameName = o.frame || (names.length === 1 ? names[0] : 'rig');
    const frame = Object.assign({}, DEFAULT_FRAME, frames[frameName] || {});
    const comps = {};
    const errors = [];

    if (names.length && !frames[frameName]) {
      errors.push(`no frame "${frameName}"; this netlist declares ` +
                  names.map(n => `"${n}"`).join(', '));
    }

    // --- bores, declared in inches, drawn in this frame's units
    const bores = {};
    for (const b of Object.keys(spec.bores || {})) {
      bores[b] = scaleBore(spec.bores[b], frame);
    }

    // --- components
    for (const id of Object.keys(spec.components || {})) {
      const c = Object.assign({ id }, spec.components[id]);
      const kind = KINDS[c.kind];
      if (!kind) { errors.push(`${id}: unknown kind "${c.kind}"`); continue; }
      c._kind = kind;
      c._cls = kind.cls;
      // A component may opt out of being drawn without leaving the net.
      c._visible = c.show !== false;

      /* Placement comes from the frame and only from the frame. */
      const place = frame.at[id];
      if (place === undefined) {
        errors.push(`${id} has no placement in frame "${frameName}"`);
        continue;
      }
      if (c.kind === 'reducer') {
        if (!Array.isArray(place[0]) || !Array.isArray(place[1])) {
          errors.push(`${id} is a reducer, so frame "${frameName}" must ` +
                      `place it as two points [[x0,y],[x1,y]] -- it spans a ` +
                      `distance rather than sitting at one`);
          continue;
        }
        c._a = place[0]; c._b = place[1];
        c.at = place[0];        // its nominal point, for anything that asks
        c.x1 = place[1][0];
        c.throatIn = c.throat;
        c.throat = scaleBore(c.throat, frame);
      } else {
        if (Array.isArray(place[0])) {
          errors.push(`${id} is placed as two points but only a reducer ` +
                      `spans a distance`);
          continue;
        }
        c.at = place;
      }

      c._ports = kind.ports(c);
      comps[id] = c;
    }

    // --- segments, resolved against ports
    const segs = (spec.segments || []).map((s, i) => {
      const seg = Object.assign({ index: i }, s);
      seg.from = resolvePort(comps, s.from, errors, `segment ${i} from`);
      seg.to   = resolvePort(comps, s.to,   errors, `segment ${i} to`);
      seg.r    = bores[s.bore];
      if (seg.r === undefined) errors.push(`segment ${i}: unknown bore "${s.bore}"`);
      /* Waypoints are coordinates, so they come from the frame too, keyed
         by the segment's own "from->to" id rather than its array index --
         an index shifts the moment somebody inserts a segment above it. */
      seg.sid  = segId(s);
      const via = frame.via[seg.sid] || [];
      seg.pts  = seg.from && seg.to
        ? [[seg.from.x, seg.from.y]]
            .concat(via)
            .concat([[seg.to.x, seg.to.y]])
        : [];
      return seg;
    });

    const net = {
      spec, components: comps, segments: segs, bores,
      frame: frameName, frames: names,
      errors: errors.concat(validate(comps, segs, spec, frameName)),
      /* `opts.hide` is a list of display classes to suppress, e.g.
         {hide:['fitting']} for an ISA-5.5-style process display. It
         changes which symbols are emitted and nothing else -- the lines,
         the bores and the water are identical either way. */
      toPiping: (opts) => toPiping(comps, segs, opts || {}),
      toWater: () => toWater(comps, segs),

      /* Identity, which is the point of a tag: a scenario names HV-1 and
         gets the same valve in every frame and every consumer. */
      byTag: tag => comps[Object.keys(comps)
        .filter(id => comps[id].tag === tag)[0]],
      byKey: key => comps[Object.keys(comps)
        .filter(id => comps[id].key === key)[0]],

      /* The same graph, placed somewhere else. This is registration in
         one call -- and the proof that nothing above the netlist has
         quietly baked in one view's coordinates. */
      inFrame: name => Net(spec, { frame: name }),
    };
    return net;
  }

  function resolvePort(comps, ref, errors, where) {
    if (typeof ref !== 'string' || ref.indexOf('.') < 0) {
      errors.push(`${where}: expected "component.port", got ${JSON.stringify(ref)}`);
      return null;
    }
    const dot = ref.indexOf('.');
    const id = ref.slice(0, dot), port = ref.slice(dot + 1);
    const c = comps[id];
    if (!c) { errors.push(`${where}: no component "${id}"`); return null; }
    const p = c._ports[port];
    if (!p) {
      errors.push(`${where}: "${id}" (${c.kind}) has no port "${port}" ` +
                  `-- it has ${Object.keys(c._ports).join(', ')}`);
      return null;
    }
    return { id, port, x: p.x, y: p.y, dir: p.dir, comp: c };
  }

  /* ---- validation ---------------------------------------------------
     The checks a hand-written level could not make, because it had no
     idea what was connected to what. */
  /* An ISA tag: letters, a dash, a number. Grounded in the vault's own
     Source Library rather than invented here -- the Pulp & Paper
     Sourcebook's P&IDs (drawings C0748 and E0894) tag handvalves HV-1..20
     and control valves FV-, PV-, TV-, LV- with plain sequential numbers.
     The core validates the SHAPE and never mints a tag: which letters a
     given valve deserves is a question about the real plant, and the
     netlist's author is the one who knows. */
  const TAG = /^[A-Z]{1,4}-[0-9]+$/;

  function validate(comps, segs, spec, frameName) {
    const errs = [];
    const used = {};

    /* ---- no coordinates in the spec --------------------------------
       The whole of Phase 2. A coordinate on a component is that component
       asserting it can only ever be drawn one way, which is exactly how
       level 1's schematic came to line up with its cutaway by coincidence
       rather than by construction. */
    for (const id of Object.keys((spec && spec.components) || {})) {
      const raw = spec.components[id];
      for (const bad of ['at', 'x1', 'xy', 'pos']) {
        if (raw[bad] !== undefined) {
          errs.push(`${id} declares "${bad}": coordinates belong to a ` +
                    `frame, not to a component. Move it to ` +
                    `frames.${frameName}.at.${id}`);
        }
      }
    }
    for (const s of ((spec && spec.segments) || [])) {
      if (s.via !== undefined) {
        errs.push(`segment ${s.from}->${s.to} declares "via": waypoints ` +
                  `are coordinates and belong to frames.${frameName}.via` +
                  `["${s.from}->${s.to}"]`);
      }
    }

    /* ---- equipment carries a tag -----------------------------------
       Fittings do not: a tee or a union is part of the line and is not
       tagged on a real P&ID, so requiring one would be inventing a
       convention. Equipment is what a scenario will need to name. */
    const tags = {};
    for (const id of Object.keys(comps)) {
      const c = comps[id];
      if (c._cls === CLASS.equipment) {
        if (!c.tag) {
          errs.push(`${id} is equipment and has no tag. A scenario has to ` +
                    `be able to name it, and a map key is this netlist's ` +
                    `private handle, not a durable identity`);
        } else if (!TAG.test(c.tag)) {
          errs.push(`${id}: tag "${c.tag}" is not letters-dash-number ` +
                    `(HV-1, FV-101, TK-2)`);
        }
      }
      if (c.tag) {
        if (tags[c.tag]) {
          errs.push(`${id} and ${tags[c.tag]} share the tag "${c.tag}"`);
        }
        tags[c.tag] = id;
      }
    }

    for (const s of segs) {
      if (!s.from || !s.to) continue;

      const a = s.from.id + '.' + s.from.port;
      const b = s.to.id + '.' + s.to.port;
      if (used[a]) errs.push(`port ${a} is connected twice`);
      if (used[b]) errs.push(`port ${b} is connected twice`);
      used[a] = used[b] = true;

      // Every leg must be orthogonal: the drawing, the elbow fillets and
      // the water arcs all assume it, and a diagonal would silently come
      // out as a mitred corner.
      for (let i = 1; i < s.pts.length; i++) {
        const [x0, y0] = s.pts[i - 1], [x1, y1] = s.pts[i];
        if (x0 !== x1 && y0 !== y1) {
          errs.push(`segment ${s.index}: leg ${i} is diagonal ` +
                    `(${x0},${y0})->(${x1},${y1})`);
        }
      }

      // A bore change belongs in a reducer, not at a joint.
      if (s.from.comp.kind !== 'reducer' && s.to.comp.kind !== 'reducer') {
        const other = segs.filter(o => o !== s && o.from && o.to &&
          (o.from.id === s.to.id || o.to.id === s.from.id));
        for (const o of other) {
          if (o.r !== s.r && s.to.comp.kind !== 'tee' && s.from.comp.kind !== 'tee') {
            errs.push(`segments ${s.index} and ${o.index} meet at a bore ` +
                      `change (${s.r} vs ${o.r}) with no reducer between them`);
          }
        }
      }
    }

    // One solver key, one valve. Two valves sharing a key would both move
    // when the player turned one of them, and nothing else would notice.
    const keys = {};
    for (const id of Object.keys(comps)) {
      const k = comps[id].key;
      if (!k) continue;
      if (keys[k]) errs.push(`${id} and ${keys[k]} both claim solver key "${k}"`);
      keys[k] = id;
    }

    // Everything must be reachable from a source, or it is drawn but dead.
    const sources = Object.keys(comps).filter(id =>
      comps[id].kind === 'source' ||
      (comps[id].kind === 'vessel' && comps[id].role === 'source'));
    if (sources.length) {
      const seen = {};
      const walk = id => {
        if (seen[id]) return;
        seen[id] = true;
        for (const s of segs) {
          if (!s.from || !s.to) continue;
          if (s.from.id === id) walk(s.to.id);
          if (s.to.id === id) walk(s.from.id);
        }
      };
      sources.forEach(walk);
      for (const id of Object.keys(comps)) {
        if (!seen[id]) errs.push(`${id} is not reachable from any source`);
      }
    }

    return errs;
  }

  /* ---- drawing -------------------------------------------------------
     piping() wants continuous runs, because every corner in a `pts` array
     becomes a real filleted elbow. So chains of segments that run straight
     through a component - in at one port, out the other - are merged into
     one polyline. A tee's RUN is such a chain; its BRANCH starts a new one.

     This is what let level 1's riser be drawn as a single run "[30,MAIN_Y]
     ... [RED_X0,BR_Y[2]]" passing through both tees. Written by hand that
     was a coincidence maintained by care; here it falls out of the graph. */
  function toPiping(comps, segs, opts) {
    const live = segs.filter(s => s.from && s.to);
    const out = { lines: [], tees: [], reducers: [], fittings: [], equipment: [] };
    const hidden = {};
    (opts.hide || []).forEach(c => { hidden[c] = true; });
    const drawn = c => c._visible && !hidden[c._cls];

    // Chain segments that continue through a component on the run.
    const nextOf = {};
    for (const s of live) {
      const c = s.to.comp;
      const continues = (s.to.port === 'in') &&
        (c.kind === 'union' || c.kind === 'elbow' || c.kind === 'tee' ||
         c._kind.inline === true);
      if (!continues) continue;
      const onward = live.find(o => o.from && o.from.id === s.to.id &&
                                    o.from.port === 'out');
      if (onward && onward.r === s.r) nextOf[s.index] = onward;
    }
    const isContinuation = {};
    Object.keys(nextOf).forEach(k => { isContinuation[nextOf[k].index] = true; });

    for (const s of live) {
      if (isContinuation[s.index]) continue;
      let pts = s.pts.slice();
      let cur = s;
      while (nextOf[cur.index]) {
        cur = nextOf[cur.index];
        // The joint itself is already the last point; append the rest.
        pts = pts.concat(cur.pts.slice(1));
      }
      out.lines.push({ pts: simplify(pts), r: s.r });
    }

    for (const id of Object.keys(comps)) {
      const c = comps[id];
      if (!drawn(c)) continue;
      if (c._kind.draws === 'tee') {
        const branch = live.find(s => s.from && s.from.id === id &&
                                      s.from.port === 'branch');
        out.tees.push({
          x: c.at[0], y: c.at[1],
          r: boreAt(live, id, 'in') || boreAt(live, id, 'out'),
          branch: branch ? branch.r : 0,
        });
      } else if (c._kind.draws === 'reducer') {
        out.reducers.push({
          x0: c.at[0], x1: c.x1, y: c.at[1],
          r1: boreAt(live, id, 'in'), r2: c.throat,
        });
      } else if (c._kind.draws === 'equipment') {
        out.equipment.push({
          id, kind: c.kind, x: c.at[0], y: c.at[1],
          r: boreAt(live, id, 'in') || boreAt(live, id, 'out'),
          type: c.valveType || c.role || null,
          key: c.key || null,      // the solver's own name, where there is one
          tag: c.tag || null,      // and its durable one, which a board captions with
          isa: typeof c._kind.isa === 'function' ? c._kind.isa(c) : null,
        });
      } else if (c._kind.draws === 'fitting') {
        out.fittings.push({
          x: c.at[0], y: c.at[1],
          r: boreAt(live, id, 'in') || boreAt(live, id, 'out'),
          kind: c.fitting || 'union',
        });
      }
    }

    /* ---- what was left undrawn, and where its ports were -------------
       The lines above are unchanged by hiding, by design: a hidden
       reducer still exists and still changes the bore, so topology must
       not pretend otherwise. But a reducer's in and out ports are 80 px
       apart, and a display that draws no fitting there is left with a
       hole in a connection that is actually continuous.

       Resolving that is the display's call, not topology's -- so this
       reports the facts and stops. Each entry is a component that WOULD
       have been drawn and was not, with the port positions a line
       reaches it at. A display that draws no fittings joins across
       them; one that draws them ignores this list entirely. */
    out.undrawn = [];
    for (const id of Object.keys(comps)) {
      const c = comps[id];
      if (c._visible === false || !c._kind.draws || drawn(c)) continue;
      const ports = c._kind.ports(c);
      const used = Object.keys(ports)
        .filter(n => live.some(s => (s.to && s.to.id === id && s.to.port === n) ||
                                    (s.from && s.from.id === id && s.from.port === n)))
        .map(n => [ports[n].x, ports[n].y]);
      if (used.length >= 2) out.undrawn.push({ id, kind: c.kind, pts: used });
    }
    return out;
  }

  function boreAt(segs, id, port) {
    const s = segs.find(o => (o.to && o.to.id === id && o.to.port === port) ||
                             (o.from && o.from.id === id && o.from.port === port));
    return s ? s.r : undefined;
  }

  /* Keep only the corners. A chain through a union or a tee leaves a
     vertex sitting on a straight leg, and piping() fillets EVERY interior
     vertex with arcTo -- so a collinear one is at best wasted work and at
     worst a rounding artefact on a line that should be dead straight.
     The hand-written level 1 run had exactly the corners and nothing
     else; this is how that falls out of the graph instead of being
     maintained by hand. */
  function simplify(pts) {
    const p = dedupe(pts);
    if (p.length < 3) return p;
    const out = [p[0]];
    for (let i = 1; i < p.length - 1; i++) {
      const [ax, ay] = p[i - 1], [bx, by] = p[i], [cx, cy] = p[i + 1];
      const collinear = (ax === bx && bx === cx) || (ay === by && by === cy);
      if (!collinear) out.push(p[i]);
    }
    out.push(p[p.length - 1]);
    return out;
  }

  function dedupe(pts) {
    const out = [];
    for (const p of pts) {
      const last = out[out.length - 1];
      if (!last || last[0] !== p[0] || last[1] !== p[1]) out.push(p);
    }
    return out;
  }

  /* ---- water ---------------------------------------------------------
     LPE.Line wants straight runs and arcs, and it must be SPLIT AT EVERY
     TEE, because "flow is constant BETWEEN tees and changes AT them, and
     each piece owns its particles so none can strand at a velocity
     boundary" (level 1's own rule). A netlist knows where the tees are;
     a hand-written coordinate list does not.

     Corners become arcs on the same radius the drawing fillets them with,
     so the water goes round the elbow the pipe actually has instead of
     cutting the corner. */
  function toWater(comps, segs) {
    return segs.filter(s => s.from && s.to).map(s => {
      const R = s.from.port === 'branch'
        ? teeTurnRadius(s.r)      // leaving a tee is a tight turn
        : bendRadius(s.r);        // a run corner is a long-radius elbow
      const pts = dedupe(s.pts);
      const out = [];

      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
        const isLast = i === pts.length - 1;
        const horiz = y0 === y1;

        // Shorten this leg where it runs into a corner, and emit the arc.
        let ax = x0, ay = y0, bx = x1, by = y1;
        if (i > 1) { if (horiz) ax += Math.sign(x1 - x0) * R;
                     else       ay += Math.sign(y1 - y0) * R; }
        if (!isLast) { if (horiz) bx -= Math.sign(x1 - x0) * R;
                       else       by -= Math.sign(y1 - y0) * R; }

        if (horiz ? Math.abs(bx - ax) > 0.01 : Math.abs(by - ay) > 0.01) {
          out.push({ ax, ay, bx, by, r: s.r });
        }
        if (!isLast) {
          const [x2, y2] = pts[i + 1];
          out.push({ arc: cornerArc(bx, by, x1, y1, x2, y2, R), r: s.r });
        }
      }
      return { id: `${s.from.id}.${s.from.port}->${s.to.id}.${s.to.port}`,
               r: s.r, segments: out };
    });
  }

  /* The arc that carries flow from the leg ending at (bx,by) round the
     corner at (cx,cy) and onto the leg heading toward (nx,ny). Centre is
     one radius back along the incoming leg and one radius along the
     outgoing one, which is what makes the inner and outer walls come out
     concentric the way a real elbow's do. */
  function cornerArc(bx, by, cx, cy, nx, ny, R) {
    const inHoriz = by === cy;
    const outDx = Math.sign(nx - cx), outDy = Math.sign(ny - cy);
    const ccx = inHoriz ? bx : cx + outDx * R;
    const ccy = inHoriz ? cy + outDy * R : by;
    const a0 = Math.atan2(by - ccy, bx - ccx);
    const ex = inHoriz ? ccx : cx;
    const ey = inHoriz ? cy   : ccy;
    const a1 = Math.atan2((inHoriz ? cy + outDy * R : ey) - ccy,
                          (inHoriz ? ex : cx + outDx * R) - ccx);
    return { cx: ccx, cy: ccy, R, a0, a1 };
  }

  LPE.net = Net;
  LPE.net.bendRadius = bendRadius;
  LPE.net.teeTurnRadius = teeTurnRadius;
  LPE.net.KINDS = KINDS;
  LPE.net.TAG = TAG;
  LPE.net.ISA_VALVE = ISA_VALVE;
  LPE.net.ISA_VESSEL = ISA_VESSEL;

})(window.LPE = window.LPE || {});

/* Exposed so a renderer and the tests can agree on the vocabulary. */
(function (LPE) { LPE.net.CLASS = {
  boundary: 'boundary', fitting: 'fitting', equipment: 'equipment' };
})(window.LPE);
