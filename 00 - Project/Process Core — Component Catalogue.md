---
title: Process Core — Component Catalogue
type: design
status: DECIDED — four calls made 2026-10-10; nothing built yet
tags:
  - project
  - process-core
  - catalogue
updated: 2026-10-10
---

# Process Core — Component Catalogue

**Status: design decided, no code written.** The four open questions are answered in section 8, with reasons, so they can be overturned on the reasoning rather than reopened.

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

## 4. The classes

| Class | Holds | Seeded from | Held? |
|---|---|---|---|
| `pipe` | NPS, schedule, OD, wall, bore, area | **ASME B36.10M** | yes |
| `fitting` | elbows, tees, reducers, couplings, unions, caps | **ASME B16.11** (socket-weld / threaded), **ASME B16.9** (buttweld, NPS ½ and up) | yes, both read 2026-10-10 |
| `valve` | type, size, Cv, face-to-face, rating | **ISA-75.01.01**, **ASME B16.10**, **ASME B16.34** | partly |
| `vessel` | geometry, role, ISA-5.5 mnemonic | **ISA-5.5** §3.3.2 | yes |
| `manifold` | body, ports, port spacing, configuration | **manufacturer standard** (Rosemount instrument manifolds; ASCO valve bases), Control Valve Handbook ch4 fig. | product literature |
| `material` | group, P-T rating, service limits | **ASME B16.34** (material groups), **NACE MR0175 / MR0103** (sour service), **ASME B31.1** (allowables), Control Valve Handbook ch6 | **yes, more than expected** |

### Materials — a correction to this draft

The first version of this document said materials were ungrounded and nothing
was held. **That was wrong**, and the register already said so:

- **ASME B16.34** is registered and is a *materials* standard as much as a
  dimensional one — its pressure-temperature tables are indexed by class,
  **body material** and service temperature. 75 hits across 17 files in CVE1.
- **NACE MR0175** and **MR0103** are both registered: material limits for
  sulfide stress cracking, in production and in refining respectively.
- **ASME B31.1** carries allowable stresses by material.
- The Control Valve Handbook's materials chapter is already subject-indexed.

So a material is not a label. It is the axis a pressure rating hangs on, and
the catalogue should treat it that way from the start:

```js
'CS-A105': {
  group:   'ASME B16.34 Material Group 1.1',
  spec:    'ASTM A105',          // the product spec -- NOT held, see below
  ptSource:{ std: 'ASME B16.34', note: 'P-T by group and temperature' },
  sour:    { std: 'NACE MR0175', limits: '…' },
}
```

**The genuine gap is narrower than "materials": it is the ASTM/ASME-SA
product specifications themselves** — A105, A106, A182, A312, A350. Emerson
plainly uses them (they appear throughout the supplier documents in eDocs),
and they are not in the register. That is a specific, closable gap, and
naming it precisely is worth more than the vague one this draft started with.

### Manifolds are a CATALOGUE class, not a novelty

An earlier version of this document made a manifold a one-off
`manufactured` part with `provenance: 'design-decision'`. **That was wrong.**
Franz, 2026-10-10: *"a manifold shouldn't be novel. It is pretty standard."*

He is right, and the vault already proves it. Emerson's own Control Valve
Handbook catalogues one — `cvh-cmp-sov-manifold-assembly`, *"a physical
multi-valve manifold consolidating several solenoid-operated valves into one
assembly"*, with a printed figure. Manifolds are ordinary industrial products
in at least four families: instrument (2-, 3- and 5-valve), pneumatic valve,
hydraulic, and distribution/header.

So `manifold` is a normal catalogue class seeded from real sources like any
other. What the lunar rig chooses is a *configuration* of a standard part —
not an invention.

### The principle this exposes: authority varies by class

Franz: *"Look elsewhere for parts if industrial doesn't have it, something
else does."*

The catalogue must **not** assume its sources are ASME and ISA. That
assumption is what produced the evening's worst error — reaching for a
buttwelding standard because it was the one in hand, when the governing
document was a different standard in a different family. Each class has its
own authority, and some live outside process piping entirely:

| Class | Where the authority lives | Status |
|---|---|---|
| pipe | ASME B36.10M | held |
| buttweld fittings | ASME B16.9 | held |
| socket-weld / threaded fittings | ASME B16.11 | held |
| valve ratings | ASME B16.34 | registered |
| valve sizing | ISA-75.01.01 | registered |
| flanges | ASME B16.5 | no entry |
| **instrument manifolds** | **manufacturer standard — Rosemount (Emerson)**; the 2/3/5-valve configurations are a settled convention | product literature, in eDocs |
| **pneumatic valve manifolds** | **ISO** valve-interface standards; ASCO (Emerson) builds to them | *numbers not verified — see below* |
| hydraulic manifolds | ISO cavity standards, SAE | not checked |
| tube fittings | ISO, and manufacturer standards | not checked |

**Three consequences for the design:**

**1. `provenance` needs a third value.** Not just `standard` and
`design-decision`, but **`manufacturer-standard`** — a Rosemount manifold or
an ASCO valve base is a real, dimensioned, orderable part whose authority is
a catalogue rather than a standards body. That is a perfectly good source,
and pretending otherwise would push real parts into the "invented" bucket.

**2. Emerson's own product literature is a first-class source.** It is in
eDocs, it is ours, and for several of these classes it is *the* authority.
The Standards Register's honesty rules extend to it unchanged: name the
document, the revision, and what was read.

**3. Before seeding a class, ask who governs it** — rather than reaching for
the nearest ASME number. That question, asked once about elbows, would have
saved the whole detour.

> **Unverified:** the ISO numbers for pneumatic valve interfaces are
> recollection, not reading. Given that recalling a standard from memory is
> exactly what went wrong earlier today, they are deliberately left unnamed
> here until someone opens them. The *shape* of the claim — that pneumatic
> manifolds are ISO-standardised and Emerson builds to those interfaces — is
> what matters for the design; the numbers can be filled in when checked.

### And it goes wider than industry — it goes to INDUSTRIES

Franz: *"agriculture, medical, they are different industries likely with
standards and catalogs too."*

This is the correction that actually bites, because it indicts the whole
evening rather than one lookup.

**Level 1 is an agricultural rig.** It is an NFT grow bed fed by a
proportional dosing injector — microirrigation, not process plant. Its
governing bodies are agricultural: **ASABE** (American Society of Agricultural
and Biological Engineers) and the **ISO** irrigation-equipment series. Its
fittings are barbed, compression or solvent-weld polymer. Its pipe is
polyethylene or PVC sized by a different convention.

Tonight the core cited a *buttwelding* standard for it. I corrected that to a
*socket-welding* standard — forged carbon steel, Class 3000, for refinery
pipework. **That is also the wrong family.** Closer, and still reaching for
the nearest authority in Emerson's domain instead of asking who governs a
grow bed. The same mistake, one level up, made while fixing the first one.

What this means for the catalogue:

**The catalogue is cross-industry by construction, or it is wrong by default.**
A part's `source` must be able to name any authority — ASME, ISA, ASABE, ISO,
AAMI, a manufacturer — and nothing in the schema may privilege process
piping. The default assumption has to be *"which industry is this rig?"*, not
*"which ASME number is nearest?"*

Industries the vault can already foresee needing:

| Industry | Likely authorities | Why it will come up |
|---|---|---|
| process / oil & gas | ASME, ISA, NACE, API | CVE1/2, LoopBench, the bench |
| **agriculture / irrigation** | **ASABE, ISO irrigation series** | **level 1, and every grow-bay rig after it** |
| medical / life science | ISO small-bore connector series, AAMI | any biolab rig; also the reason misconnection-proof fittings exist at all |
| semiconductor / high purity | SEMI | if ultrapure water or gas ever appears |
| food & beverage | 3-A sanitary standards | sanitary fittings are a different family again |

> **Unverified, deliberately:** every specific number above is withheld for
> the same reason as the pneumatic ones. ASABE and the ISO irrigation series
> are the right *bodies* — that much is checkable common ground — but which
> document governs a microirrigation manifold is a question for whoever opens
> one, not for recollection. Tonight's record on recalled standard numbers is
> one wrong out of one.

**Practical consequence for seeding.** Do not seed the catalogue from
Emerson's shelf and then look for rigs that fit it. Seed it per rig, from the
industry that rig belongs to. Level 1 needs irrigation parts, and that
sourcing errand has not been done — the ASME work tonight serves the *bench*
and CVE, which are genuinely process-industry, and serves level 1 not at all.

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

## 8. Decisions

Franz, 2026-10-10: *"Make the best call."* Four calls, with reasons, so they
can be overturned on the reasoning rather than re-litigated from scratch.

### 1. The shape holds — catalogue at the bottom, dims on parts, recipes on views

Taken. The strongest argument is that **half of it already exists and works**:
`schemvis.SYMBOLS` is exactly this — a table keyed by ISA mnemonic, each entry
declarative and cited to a clause, where adding a symbol means adding a row.
That file has needed no structural change since it was written. `physvis`,
which is procedures, has needed one for every new part and produced a hand-
picked constant each time. The pattern is not a proposal; it is the half of
the codebase that has been behaving.

### 2. Materials is in, and seeded properly

Taken, and the draft's own premise corrected above. A material is the axis a
pressure rating hangs on, not an appearance label — so leaving the class out
"until a source exists" would have been wrong twice over: the sources exist,
and without them a part cannot state what it is rated for.

Seed from B16.34's material groups, which is held and already taught. Record
the ASTM product specs by designation with `held: false` — honest, narrow and
closable, rather than a vague gap.

### 3. Phase 4 gets eyes before it lands

Taken, and both: keep the snapshot test *and* review the render.

They prove different things. The snapshot proves **the pixels moved exactly as
computed** — it cannot say the drawing reads correctly, and a correct-by-
arithmetic elbow that looks wrong on a 1990s pixel rig is still a problem.
This project's own rule is that nothing "renders clean" without naming the
view inspected, and tonight bore that out twice: a diagonal header and a grey
slab, both of which every test passed and only looking caught.

Phase 4 tightens elbows roughly 3× on socket-weld runs. That is the largest
visual change in the core's history and the first one that is *correct*.

### 4. It ships inside Process Core — but as DATA, not code

Taken, with a specific shape, because this is the call most likely to be
regretted later.

The catalogue lives under `45 - Process Core/catalogue/` as **JSON**, vendored
with the rest of the core under the same lock. Not a separate package:
splitting it means two locks, two versions and the chance of a rig resolving
parts from a catalogue a different vintage from the netlist reading it.

But **not a `.js` table either** — and this is the part that matters.
**LoopBench is Python.** A JavaScript parts table is unreadable to it, so a JS
catalogue would force a second copy of every row, which is precisely the
disease the netlist exists to cure, reintroduced one layer down. JSON is read
natively by both. A thin `catalogue.js` loader gives the core its ergonomics;
the rows themselves stay language-neutral.

One more consequence worth stating: the Standards Register's own check should
eventually read the catalogue, so that a part citing `ASME B16.11` counts as a
citation and a part citing a standard with no entry **fails the build**. The
register already does this for prose and code. Parts are a stronger case —
they are where a wrong citation becomes a wrong dimension.
