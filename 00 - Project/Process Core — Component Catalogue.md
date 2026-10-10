---
title: Process Core — Component Catalogue
type: design
status: DRAFT — for approval, nothing built
tags:
  - project
  - process-core
  - catalogue
updated: 2026-10-10
---

# Process Core — Component Catalogue

**Status: draft for approval. No code exists.**

Franz, 2026-10-10:

> Process core needs to have cataloged components, fittings, piping, materials,
> this should be a repository that can be easily assembled and chromed.

> The idea for schem vis and phys vis is that they are premade infrastructure.
> Chroming them is the next layer.

---

## 1. Why — the evidence, not the idea

Five problems found in one evening. They look unrelated and are not:

| Symptom | Actual cause |
|---|---|
| `bendRadius = 3 * r`, uncited, **3× too large** | there is no **elbow** — only a formula |
| `teeTurnRadius = 1.6` is "what looked right" | there is no **tee** — only a number |
| `WALL = 5` px flat, while B36.10M sits unused in `sizing.js` | there is no **pipe** — only a stroke width |
| `BODY_OVER = 9` picked by eye | there is no **manifold** — only a rectangle |
| a manifold had to become a new component *kind* | there is no way to **name a part** |

Every one is the same absence. The core can describe *what connects to what*
and *what it looks like*, and has no way to say **what something is**.

And the deepest error of the evening came from exactly that gap: the core
cited a buttwelding convention for a half-inch line. A half-inch line is not
buttwelded. Not a wrong number — the wrong **family of part**. Nothing in the
code could have caught it, because nothing in the code names a part.

---

## 2. The shape

```
  CHROME          skins -- the only files naming a colour
  ────────────────────────────────────────────────────────────
  SCENARIO        rig + task + faults + events
  ────────────────────────────────────────────────────────────
  DYNAMICS        network hydraulics
  ────────────────────────────────────────────────────────────
  SCHEM-VIEW  │  PHYS-VIEW      premade: recipes by part CLASS
  ────────────────────────────────────────────────────────────
  NETLIST         what connects to what -- resolves part ids
  ────────────────────────────────────────────────────────────
  REGISTRATION    tags + coordinate frames
  ────────────────────────────────────────────────────────────
  CATALOGUE       parts, dimensions, materials. Depends on nothing.
```

**The catalogue is the new bottom.** It imports nothing, not even the netlist,
so the layer guard can enforce it absolutely. Everything above may read it.

### Who holds what, and why the split is where it is

The temptation is to put the drawing on the part. Resist it:

- **The catalogue holds DIMENSIONS.** `centreToSocket: 0.610 in`. That is
  engineering fact and belongs with the part.
- **The views hold RECIPES, keyed by part CLASS.** *How a socket-weld elbow is
  drawn* is view knowledge, true of every socket-weld elbow, and belongs in
  `physvis` beside the ISA symbols in `schemvis`.

This is what makes both views "premade infrastructure": a new size needs no
code at all, because the recipe already exists and only the dimensions change.
A genuinely new *class* of part needs one recipe entry — exactly the way
`schemvis.SYMBOLS` already works, which is the pattern this generalises.

---

## 3. A part entry

```js
'ELBOW90/SW3000/NPS0.5': {
  class:    'elbow-socketweld',     // picks the view recipes
  nps:      0.5,
  rating:   'Class 3000',
  material: 'CS-A105',              // -> the materials table

  dims: {                           // CANONICAL INCHES
    centreToSocket: 0.6102,
    socketBore:     0.8740,
    socketDepth:    0.3740,
    bodyWall:       0.1469,
  },

  source: {                         // every dimension traces, or it is not here
    std: 'ASME B16.11', edition: '2016', table: 'Table 1',
    asPrinted: { centreToSocket: '15.5 mm', socketBore: '22.2 mm',
                 socketDepth: '9.5 mm', bodyWall: '3.73 mm' },
    tolerance: { centreToSocket: '±1.5 mm' },
  },

  schem: null,    // ISA-5.5's Connectors group is empty -- a fitting is not
                  // a symbol. `null` means "deliberately none", not "unset".
}
```

### Rules that make it worth having

**1. Every dimension names its source, or the part is not admitted.**
Enforced by the catalogue's own test, the same way the Standards Register
enforces citations. A part with `source: null` fails.

**2. Both the printed value and the canonical one are kept.** B16.11 prints
millimetres, B16.9 prints both, B36.10M is inches. Storing only the converted
number loses the ability to check against the page. `asPrinted` is the
audit trail.

**3. Canonical unit is INCHES.** Not because inches are better, but because
the vault's existing sourced data is already in them — `sizing.js`, the
netlist's bores, the Style Guide's dimensions — and one conversion at the
boundary beats a mixed-unit model.

**4. A part holds NO PIXELS.** This is the rule that kills the ambiguity found
tonight: `r` currently means *bore diameter × pxPerInch* and the pipe is drawn
at twice true scale, which nobody decided and nothing records. Parts carry
inches; the **frame** carries `pxPerInch` and an explicit `drawScale`. The
doubling becomes a declared drafting choice instead of an accident buried in
what a variable means.

**5. A part holds no colour and no behaviour.** Colour is chrome. Behaviour is
dynamics. A valve part carries its `cv` because that is a dimensioned property
of the part; it does not carry how it strokes.

---

## 4. The five classes

| Class | Holds | Seeded from | Held? |
|---|---|---|---|
| `pipe` | NPS, schedule, OD, wall, bore, area | **ASME B36.10M** | yes |
| `fitting` | elbows, tees, reducers, couplings, unions, caps | **ASME B16.11** (socket-weld / threaded), **ASME B16.9** (buttweld, NPS ½ and up) | yes, both read 2026-10-10 |
| `valve` | type, size, Cv, face-to-face, rating | **ISA-75.01.01**, **ASME B16.10**, **ASME B16.34** | partly |
| `vessel` | geometry, role, ISA-5.5 mnemonic | **ISA-5.5** §3.3.2 | yes |
| `material` | density, class, service limits | **nothing held** | **no** |

**Materials is the real gap**, and should be admitted as one rather than
invented. A first entry can carry name and appearance class only, with
`source: null` flagged — which the catalogue's test will report, which is the
point.

### The sixth class: `manufactured`

Franz's lunar manifold is not a catalogue fitting and must not pretend to be:

```js
'MANIFOLD/PRINTED/3PORT/NPS0.5': {
  class: 'manifold-printed',
  provenance: 'design-decision',          // NOT a standard
  decision: '00 - Project/… lunar manifold',
  rationale: 'mass is launch cost; every joint is a leak path; the bay\'s '
           + 'water is mined from ice and counted',
  dims: { /* chosen, and SAID to be chosen */ },
}
```

`provenance: 'design-decision'` is a first-class value beside `standard`. It
keeps an authored part honest and visibly distinct from a catalogued one —
the same discipline as the Standards Register's `not-held`.

---

## 5. Assembly

A rig stops declaring raw numbers and starts naming parts.

**Today**
```js
bores: { main: 0.622, branch: 0.493 },
components: { tee0: { kind: 'tee', axis: 'v' }, … },
```
0.622 is a number somebody looked up once. Nothing connects it to a pipe.

**Proposed**
```js
lines: { main:   'PIPE/NPS0.5/S40/CS',
         branch: 'PIPE/NPS0.375/S40/CS' },
components: {
  t0: { part: 'TEE/SW3000/NPS0.5x0.375' },
  v0: { part: 'VALVE/GLOBE/NPS0.375', tag: 'HV-2', key: 'b0' },
},
```

Bore, wall, OD, elbow radius and face-to-face all become **consequences of the
part**. There is nothing left to mistype, and a reducing tee is said once
rather than implied by two bores meeting.

---

## 6. Migration — LPE must not break

Six phases, each independently green:

1. **Catalogue exists.** Seeded from the four held standards, with its own
   test. Nothing consumes it. LPE untouched.
2. **Netlist resolves a part id** as an alternative to a raw bore. Both work.
   Existing levels keep running.
3. **One line in level 1** names a part. Prove the resolved bore is
   bit-identical to the number it replaces.
4. **Level 1 fully on parts.** The geometry snapshot in `verify.js` is the
   guard — it will catch any pixel that moves, and the elbow radii *should*
   move, which is the first visible correction.
5. **phys-view recipes by class**, replacing the procedures. `physvis` becomes
   a table and an engine, like `schemvis`.
6. **Delete the formulas.** `bendRadius`, `teeTurnRadius`, `WALL`, `TAPER`,
   `BODY_OVER` all go. Nothing is left to tune by eye.

Phase 4 is where the pictures change — elbows tighten by roughly 3× on
socket-weld runs. **That is a visible change and wants eyes on it before it
lands**, not after.

---

## 7. What it is not

- **Not a product database.** Seed what the rigs use plus obvious neighbours.
- **Not every size.** A missing size should fail loudly by name, the way the
  netlist already refuses things.
- **Not a pricing or procurement tool.**
- **Not chrome.** No colour anywhere in it.
- **Not dynamics.** `cv` is a dimension; stroke behaviour is not.

---

## 8. Open questions for Franz

1. **Does the shape hold** — catalogue at the bottom, dimensions on the part,
   recipes on the views?
2. **Materials**: seed it honestly empty, or leave the class out until a
   source exists?
3. **Phase 4's visible change** — review before it lands, or trust the
   snapshot test?
4. **Does the catalogue ship with LPE**, or is it vendored separately? It is
   reference data, not code, and LoopBench will want the same rows.
