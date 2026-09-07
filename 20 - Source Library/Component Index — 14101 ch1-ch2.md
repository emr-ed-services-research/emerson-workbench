---
title: Component Index — 14101 ch1-ch2
type: reference
tags:
  - source-library
  - pipeline
  - component-index
course: 14101 Valve Trim and Body Maintenance
chapter: ch1, ch2
updated: 2026-09-06
---

# Teaching-Component Index — 14101, Chapters 1 & 2

**Chapter 1 — Control Valve Specifications for Maintenance** (module ch1-m1,
slides 13–25). **Chapter 2 — Fisher Easy-E Valve Maintenance** (modules
ch2-m1 … ch2-m7, slides 27–86).

Built 2026-09-06 as the **Phase 4 follow-on** of the Instructional Primitives
Pathway — to firm up the 11 `mnt.valve-body.*` primitives that
`Curriculum — 14101.md` marked `exists*` (production slide only) to real,
sourced provenance, matching the standard of
`Component Index — 14101 ch3.md`. Same method as the ch3 index: each record
names a discrete teaching component, the source it comes from with a
locator, its precedence bucket, and the competency it `serves`. Scope is
ch1 + ch2 only — no wholesale pre-indexing.

The ch1/ch2 slides were built through a documented four-part pass with
per-slide source checks recorded in the slide comments; this index
transcribes and precedence-buckets those, and cross-checks the citations.

Record shape: `id` · `teaches` · `concept-tags` · `status` · `serves` ·
`source` (`doc` + `locator`) · `delivery` · `used-by` · `notes`.

---

## Precedence decisions

Four buckets: `current` · `archive-corroborated` · `archive-only` ·
`legacy`. Chapters 1–2 draw almost entirely on **current** sources (CVH 6th
ed. + current Fisher instruction manuals); there is no archive content
here. The recurring `legacy` case is the source deck's own **first-party
Fisher colour sectional renders**, which several slides deliberately kept
because they are *cleaner* than the equivalent current-manual line drawing —
the manual figure is named in each case, so the legacy art is corroborated
in substance even though the file itself is uncredited.

| Source | Doc id / date | Bucket | Notes |
| --- | --- | --- | --- |
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | Fig 1.2 / 1.3 / 1.4 / 1.6 (valve/bonnet construction); §5.2–5.3 (ANSI/FCI 70-2 seat leakage); §5.20.1 (ASME B16.34 pressure–temperature). |
| **Fisher easy-e ES/EAS-series IM** | 11745482 (D-number varies by trim: D100397X012 ES, D100390X012 ED, D100398X012 ET, D100401X012 EZ) | `current` | Trim-family construction figures, seating tables (ET Table 2), packing figures (ET Fig 4), torque tables (ET Table 4). Several of its parts drawings are dense mono line art — the deck's colour sectionals were kept over them by explicit review. |
| **ENVIRO-SEAL packing bulletin** | D101642X012 | `current` | Spring-flat tightening procedure for ENVIRO-SEAL packing. |
| **HIGH-SEAL packing bulletin** | D101453X012 | `current` | Load-scale setting for HIGH-SEAL packing. |
| **Legacy 14101 PowerPoint deck** — `build/slides/**/img/imageNNN.png` | — | `legacy` | Fisher-origin art, uncredited. First-party **colour sectional renders** (image42/43/47/48/71 …) kept where cleaner than the current-manual figure (which is cited alongside). Burned-in yellow/blue arrow overlays on many photos are a known deck-wide follow-up. |

---

## ch1-m1 — Reading a Valve's Specifications

```yaml
id: ch1-cmp-pid-control-loop
teaches: >
  A P&ID is the map of the process; before touching a valve, use it to scope
  the job to the control valve and its flange-to-flange connections, not the
  whole loop.
concept-tags: [P&ID, ISA-5.1, control loop, job scope, instrument bubble, signal lines]
status: current
serves: [mnt.valve-body.identify-assembly-stackup]
source:
  - doc: ISA-5.1 (Instrumentation Symbols and Identification)
    locator: "standard symbol set — instrument bubbles, globe body + diaphragm actuator, solid process / dashed signal lines"
delivery: house-authored SVG (slide 13) — hand-drawn single control-loop P&ID to ISA-5.1; replaced the auto-converted DrawingML sketch
used-by: [13]
notes: authored vector, not lifted from a source figure; the standard is the authority for symbol correctness
```

```yaml
id: ch1-cmp-valve-assembly-stackup
teaches: >
  On the P&ID the control valve is one tagged symbol; on the bench it is an
  assembly — actuator on top, then the bonnet, then the valve body between
  the pipe flanges.
concept-tags: [assembly, actuator, bonnet, body, pipe flanges, stack-up]
status: legacy
serves: [mnt.valve-body.identify-assembly-stackup]
source:
  - doc: Legacy 14101 deck
    locator: "image29 — control-valve assembly figure; Handbook-style gutter callouts added"
  - doc: Control Valve Handbook 6th ed.
    locator: "Fig 1.3 corroborates the actuator / bonnet / body arrangement"
delivery: existing figure (deck image29) + left-gutter leader callouts
used-by: [14]
notes: a clean current sectional (CVH Fig 1.3, already used on slide 27) could replace image29 — minor upgrade, flagged
```

```yaml
id: ch1-cmp-asme-pt-table
teaches: >
  A valve body's pressure rating falls as temperature rises. The ASME class
  (150, 300, 600 …) names a rating curve; the B16.34 pressure–temperature
  table gives the working pressure for a class, body material, and service
  temperature.
concept-tags: [ASME B16.34, pressure class, pressure-temperature rating, ASTM A216 WCC, rating curve]
status: current
serves: [mnt.valve-body.read-pressure-class]
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§5.20.1 (Pressure-Temperature Ratings); ASTM A216 Grade WCC column, ASME B16.34"
delivery: data table (HTML, slide 16) — merged the old SVG pressure-class curve and a screenshot table into one Template 3 card
used-by: [16]
notes: verified against CVH §5.20.1; the numbers falling down every column is the teaching point (check on slide 18)
```

```yaml
id: ch1-cmp-fci-leakage-classes
teaches: >
  "Shut off" is not zero flow. ANSI/FCI 70-2 defines six seat-leakage
  classes; the factory leak-tests the valve to one. Class I means no test was
  done. The classes tighten by roughly ×10 (II 0.5 %, III 0.1 %, IV 0.01 %
  of rated capacity; V and VI are small measured amounts).
concept-tags: [ANSI/FCI 70-2, IEC 60534-4, seat leakage class, Class I-VI, shutoff]
status: current
serves: [mnt.valve-body.read-leakage-class]
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§5.2 and §5.3 (ANSI/FCI 70-2, harmonised with IEC 60534-4) — six-class definitions"
delivery: comparison table (HTML, Template 4, slide 19), Class II row highlighted + the Class II cartoon (deck image33)
used-by: [19]
notes: >
  values verified against CVH §5.2–5.3. Per-class cartoon slides 20–24 dropped
  from the module flow (files kept for the standalone deck). image33 is legacy
  deck art — a schematic cartoon, adequate as an accent, not load-bearing.
```

---

## ch2-m1 — Valve Bodies, Plugs & Seating

```yaml
id: ch2-cmp-globe-components
teaches: >
  Trim is the set of parts in the flow path — plug, seat ring, cage, stem,
  stem pin. The body is the pressure boundary; the bonnet closes the body,
  carries the packing, and keeps the plug aligned.
concept-tags: [trim, plug, seat ring, cage, stem, stem pin, body, bonnet, pressure boundary]
status: current
serves: [mnt.valve-body.identify-trim-parts]
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "Figure 1.3 'Sliding-Stem Control Valve' — exploded major-components view, callouts 1-11, p18"
delivery: existing figure (crop, is-sourced) — cvh6-fig1-3-globe-valve-components.png; figure's own numbered markers, list mirrors 1-for-1
used-by: [27]
notes: replaced deck image39.jpg (a cutaway photo with ~14 burned-in yellow arrows). Provenance: SOURCES.txt.
```

```yaml
id: ch2-cmp-body-styles-globe-angle
teaches: Globe and angle bodies run the same trim; an angle body turns the flow path 90°.
concept-tags: [globe body, angle body, flow path, same trim]
status: legacy
serves: [mnt.valve-body.identify-trim-parts]
source:
  - doc: Legacy 14101 deck
    locator: "image40 / image41 — Emerson CAD body renders"
  - doc: Control Valve Handbook 6th ed.
    locator: "Fig 1.2 / 1.4 — same render style, corroborates"
delivery: existing figures (deck image40 / image41), figrow, captions carry the teaching point
used-by: [28]
notes: Emerson first-party CAD renders; kept. Supporting, not load-bearing — the competency's core figure is ch2-cmp-globe-components.
```

```yaml
id: ch2-cmp-pdtc-pdto-sectionals
teaches: >
  Push-down-to-close (PDTC, direct-acting) vs push-down-to-open (PDTO,
  reverse-acting): which way stem travel drives the plug. This is what sets
  the assembly's fail action once an actuator is fitted.
concept-tags: [PDTC, PDTO, direct-acting, reverse-acting, stem travel direction, fail action, seat ring position, travel stop]
status: legacy
serves: [mnt.valve-body.contrast-pdtc-pdto]
source:
  - doc: Legacy 14101 deck
    locator: "image43 (PDTC) / image42 (PDTO) — current Fisher colour sectional renders"
  - doc: Control Valve Handbook 6th ed.
    locator: "Fig 1.3 (a single small line drawing) — the deck sectionals are cleaner"
delivery: existing figures (deck image42 / image43), figrow
used-by: [29, 93]
notes: >
  **SAME figure serves ch2-m1 (slide 29, `introduces`) and ch3-m1 (slide 93,
  `develops` — the fail-action treatment).** This is the ch3 index's
  `ch3-cmp-pdtc-pdto-bodies` component — the two records describe the same
  image files. See "Discrepancies" — this means `mnt.valve-body.contrast-pdtc-pdto`
  has **one primitive, two placement edges**, not the two primitives Phase 4
  call 2 provisionally recorded.
```

```yaml
id: ch2-cmp-plug-heads-balanced-unbalanced
teaches: >
  Unbalanced plug: process pressure loads the full plug face — one seating
  leak path, tight shutoff, large actuator force. Balanced plug: passages
  through the plug plus a piston (cage) seal equalise most of the static
  force — low stem force, but two leak paths and a piston-seal temperature
  limit.
concept-tags: [unbalanced plug, balanced plug, plug face, balance passages, piston seal, stem force, leak paths]
status: current
serves: [mnt.valve-body.contrast-balanced-unbalanced-plug]
source:
  - doc: Legacy 14101 deck
    locator: "image44 / image45 — Fisher plug photos, cropped to the plug head (solid face vs drilled passages)"
  - doc: Legacy 14101 deck
    locator: "image47 (ES unbalanced sectional) / image48 (ED balanced sectional) — Fisher colour sectionals with flow arrows, slides 31 / 32"
  - doc: Fisher ES IM / ED IM
    locator: "D100397X012 Fig 13 (ES) / D100390X012 (ED) — mono parts drawings, corroborate; deck sectionals kept as cleaner"
delivery: >
  plug-head photos (crop, SOURCES.txt) on slide 30; labelled colour sectionals
  (deck image47 / image48) on the labelled-diagram template, slides 31 / 32
used-by: [30, 31, 32]
notes: image49 / image50 (end-on and piston-ring plug photos) dropped — the sectionals show both leak paths.
```

```yaml
id: ch2-cmp-plug-tip-and-seat-types
teaches: >
  A standard plug tip is a chamfered band lapped in to a matching seat ring —
  field-repairable by re-lapping (Class IV metal). A radius tip is a rounded
  surface meeting a wide-bevel seat ring on a narrow line — Fisher's tighter
  metal option (Class V), re-machined not field-lapped. Seat rings: soft
  (PTFE insert) — tighter shutoff at lower force; standard metal — lapped;
  wide-bevel metal — pairs with the radius tip.
concept-tags: [standard plug tip, radius plug tip, chamfered band, wide-bevel seat, soft seat, PTFE insert, Class IV, Class V, re-lap, re-machine]
status: current
serves: [mnt.valve-body.identify-seat-and-tip-types]
source:
  - doc: Fisher ET IM
    locator: "D100398X012 — Table 2 + note 2 (radiused-seat plug + wide-bevel seat ring = Class V metal; standard metal = Class IV); Figure 16 (seating, mono line drawing — not clearer than the photos)"
  - doc: Legacy 14101 deck
    locator: "image52 (standard tip) / image51 (radius tip) close-up photos, slide 34; image54 / image55 / image56 seat-ring styles, slide 35"
delivery: close-up photos (deck), figrow — captions state only what the photos show; the Class ranking and field trade-off are context-pane
used-by: [34, 35]
notes: >
  CONTENT FIX 2026-08-31 — an earlier caption wrongly called the radius tip a
  "knife-edge" with "the tightest shutoff, never lapped." Corrected against
  ET IM D100398X012 Table 2: it is a *rounded* surface on a wide bevel, Class
  V, re-machined. image53 (redundant PTFE-insert detail) dropped.
```

---

## ch2-m2 — Plug Guiding, Cages & Flow Characteristics

```yaml
id: ch2-cmp-guiding-cage-vs-retainer
teaches: >
  Guiding keeps the plug aligned with its seat through the whole stroke. Two
  mechanisms: cage-guided — the plug rides in the cage bore (clean service);
  post-guided — the plug rides on a post, with a seat-ring retainer (viscous,
  dirty, non-lubricating service — Fisher EZ).
concept-tags: [cage-guided, post-guided, plug alignment, cage bore, guide post, seat ring retainer]
status: legacy
serves: [mnt.valve-body.contrast-cage-post-guiding]
source:
  - doc: Legacy 14101 deck
    locator: "image57 (cage) / image58 (seat ring retainer), slide 36; image63 (post-guided plug — guide cylinder behind the head), slide 38"
  - doc: Fisher EZ IM
    locator: "D100401X012 Figure 12 — clean mono sectional but too many crossing callout leaders to lift without editing (flagged follow-up)"
delivery: existing deck figures, figrow — image62 (assembled trim, reads cage-like) dropped
used-by: [36, 38]
notes: EZ IM Fig 12 is a redraw candidate if this component ever needs a cleaner post-guided figure.
```

```yaml
id: ch2-cmp-cage-plug-assembly
teaches: >
  The cage does three jobs: guides the plug on a large bearing surface,
  clamps the seat ring in place, and — through its window shape — sets the
  flow characteristic.
concept-tags: [cage, three jobs, plug guiding, seat ring clamp, cage window, flow characteristic]
status: legacy
serves: [mnt.valve-body.explain-cage-functions]
source:
  - doc: Legacy 14101 deck
    locator: "image60 — Fisher balanced plug in a cage; cropped to drop the bare stem (cage-plug-assembly.png)"
delivery: existing figure (crop, SOURCES.txt) on the labelled-diagram template, the three jobs as callouts
used-by: [37]
notes: consolidated from three near-identical stroke photos (image59/60/61). Provenance: SOURCES.txt.
```

```yaml
id: ch2-cmp-flow-characteristic-curve
teaches: >
  Inherent flow characteristic = how Cv changes with travel at constant
  pressure drop, fixed by trim geometry. Three standard shapes: quick-opening
  (most Cv early — on/off, dump), linear (Cv ∝ travel — constant-ΔP service),
  equal-percentage (equal % change per equal travel — most systems).
concept-tags: [inherent flow characteristic, Cv vs travel, quick-opening, linear, equal-percentage, constant pressure drop]
status: current
serves: [mnt.valve-body.explain-flow-characteristic]
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "flow-characteristic definition and the three standard curves (Chapter 3)"
  - doc: Legacy 14101 deck
    locator: "image64 'Flow Characteristics' figure — low-resolution raster; the curve chart is superseded by an inline SVG redraw"
delivery: >
  house-style inline SVG redraw of the three Cv-vs-travel curves (slide 39,
  replaces the raster image64 curve chart); the three cage-window shapes that
  produce them (cage-quick-opening / cage-linear / cage-equal-pct.png, split
  from image64) on slide 40
used-by: [39, 40]
notes: >
  REDRAW (Style Guide §5.8 reason: source is a low-resolution raster). The
  three cage images are crops of the same deck figure. `flow-curve.png` file
  retained but superseded.
```

```yaml
id: ch2-cmp-formed-plug
teaches: A formed (contoured) plug can characterise flow on its own, without cage windows — used on post-guided valves like the EZ.
concept-tags: [formed plug, contoured plug, post-guided, EZ, flow characteristic without cage]
status: legacy
serves: [mnt.valve-body.explain-flow-characteristic]
source:
  - doc: Legacy 14101 deck
    locator: "image71 — EZ trim cutaway schematic (guide post, plain retainer, contoured plug), slide 43"
  - doc: Fisher EZ IM
    locator: "D100401X012 Figure 12 — clean line art, too many crossing leaders to lift (flagged follow-up)"
delivery: existing deck schematic, labelled-diagram template; callouts = 1 guide post, 2 retainer wall, 3 contoured lower plug profile
used-by: [43]
notes: same EZ-IM-Fig-12 redraw follow-up as ch2-cmp-guiding-cage-vs-retainer.
```

---

## ch2-m3 — easy-e Trim Seals & Packing

```yaml
id: ch2-cmp-easye-type-matrix
teaches: >
  The easy-e family: ES (unbalanced, cage-guided, metal seat, Class IV); ED
  (balanced, cage-guided, graphite piston seal, Class II); ET (balanced,
  cage-guided, PTFE soft seat, Class V); EZ (unbalanced, post-guided).
concept-tags: [easy-e, ES, ED, ET, EZ, balance, guiding, seat, piston seal, shutoff class]
status: current
serves: [mnt.valve-body.identify-easye-types]
source:
  - doc: Fisher easy-e / ET IM
    locator: "D100398X012 — ET piston seal 'two-piece PTFE seal ring with elastomeric backup ring'; family construction per the ES/ED/ET/EZ IMs"
delivery: comparison table (HTML, Template 3, slide 46). data-ref="easy-e-matrix"; text drift-checked against retained deck copies (slides 48-50)
used-by: [46]
notes: "ClassV" typo fixed across all four copies during the four-part pass.
```

```yaml
id: ch2-cmp-piston-seal-forms
teaches: >
  Piston-seal choice follows temperature: graphite piston rings for high
  temperature (ED); two-piece or spring-loaded PTFE for lower temperature
  (ET). The seal rides on the balanced plug OD against the cage bore.
concept-tags: [piston seal, graphite ring, two-piece PTFE, spring-loaded PTFE, temperature limit, plug OD, cage bore]
status: legacy
serves: [mnt.valve-body.select-piston-seal]
source:
  - doc: Legacy 14101 deck
    locator: "image76 — Fisher spring-loaded-PTFE piston-seal figure (labelled detail + locator sectional); split into two panels (piston-seal-spring-loaded-detail.png / piston-seal-location.png)"
delivery: existing figure split (SOURCES.txt), has-lead figrow — seal-by-temperature table on top, the two panels beneath
used-by: [47]
notes: Provenance: SOURCES.txt. Slides 48 / 49 dropped from the module flow.
```

```yaml
id: ch2-cmp-bonnet-packing-box
teaches: >
  Packing seals along the stem, inside the packing box — the bored recess in
  the bonnet, not the bonnet casting. The packing flange and nuts set its
  compression.
concept-tags: [packing, packing box, bored recess, bonnet, stem, packing flange, compression]
status: current
serves: [mnt.valve-body.identify-packing-box]
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "Figure 1.6 'Bonnet Assembly' — cutaway of stem, packing, packing box (bored recess), bonnet in correct proportion, callouts 1-4, p19"
delivery: existing figure (crop, is-sourced) — cvh6-fig1-6-bonnet-packing-box.png; list mirrors the figure's numbering 1-for-1
used-by: [51]
notes: >
  replaced an earlier hand-drawn SVG whose bonnet-wall proportions were
  wrong. "Packing box = the bored recess, not the casting" is a Franz
  terminology correction (see memory `valve-packing-box-terminology`).
  Provenance: SOURCES.txt.
```

```yaml
id: ch2-cmp-stem-packing-by-service
teaches: >
  Stem packing by service — PTFE: low friction, below ~450 °F, spring-loaded
  or jam. Graphite: high temperature, high friction, jam or high-seal
  live-loaded. ENVIRO-SEAL / HIGH-SEAL: live-loaded for fugitive-emission
  service.
concept-tags: [PTFE packing, graphite packing, ENVIRO-SEAL, HIGH-SEAL, live-loaded, jam, spring-loaded, temperature limit, fugitive emissions]
status: current
serves: [mnt.valve-body.select-stem-packing]
source:
  - doc: Fisher easy-e / ET IM
    locator: "D100398X012 packing options by service temperature"
  - doc: ENVIRO-SEAL / HIGH-SEAL bulletins
    locator: "D101642X012 (ENVIRO-SEAL) / D101453X012 (HIGH-SEAL) — live-loaded packing for emissions service"
delivery: >
  packing-by-service table (HTML, has-lead, slide 52), the three packing sets
  (spring-loaded / jam PTFE + graphite / ENVIRO-SEAL from SOURCES.txt) in a
  row beneath. data-ref="easy-e-packing". Consolidated from slides 52-54.
used-by: [52]
notes: image78 / image80 / image83 are deck component photos of the packing sets.
```

---

## ch2-m4 — Body Disassembly & Seal Replacement

```yaml
id: ch2-cmp-body-disassembly-sequence
teaches: >
  Disassembly runs to a set order and is never rushed: isolate, depressurise
  both sides, drain, lock out. Pull the actuator, back off the packing-flange
  nuts, then loosen the body-to-bonnet nuts ~1 turn at a time.
concept-tags: [disassembly order, isolate, depressurise, drain, lock out, match mark, packing flange, body-to-bonnet nuts]
status: legacy
serves: [mnt.valve-body.disassemble-body]
source:
  - doc: Legacy 14101 deck
    locator: "image88 (paint-pen match-marking the actuator-bonnet and bonnet-body joints — disassembly-match-mark.png), image89 (actuator/bonnet off), image90 (lifting the bonnet), slide 56"
delivery: three-step photo row (deck step photos, image88 cropped per SOURCES.txt); isolate/depressurise/drain/lock-out in the tmpl-note
used-by: [56]
notes: >
  the isolate / depressurise / lock-out safety content is folded into this
  component rather than split as a standalone `caution` — the actuator side
  (`ch3-cmp-657-assembly` → `mnt.actuator.relieve-spring-before-casing`)
  splits it out. Watch item, per the Phase 3 Axis-C pass.
```

```yaml
id: ch2-cmp-trim-reuse-inspection
teaches: >
  Unbalanced plugs (ES, EZ) carry no piston seal — verify the seating
  surface (lap minor defects, machine or replace gouges), check the stem; a
  sound plug is reusable. Balanced plugs seal at the plug OD against the cage
  bore.
concept-tags: [trim reuse, plug seating surface, stem inspection, lap vs machine vs replace, plug groove]
status: legacy
serves: [mnt.valve-body.assess-trim-reuse]
source:
  - doc: Legacy 14101 deck
    locator: "image91 (plug seat) / image92 (stem), slide 57"
delivery: two-cell figure row (deck photos); each caption carries the lap / polish / replace decision
used-by: [57]
notes: photos keep burned-in arrows (deck-wide follow-up).
```

```yaml
id: ch2-cmp-piston-seal-replacement
teaches: >
  Three easy-e seal forms: ED graphite piston ring (brittle — installs in two
  pieces, never more than three; compress whole ring to an oval in a
  smooth-jaw vise until it snaps); ET two-piece PTFE (closed ring, cut off,
  fit backup ring then seal, stretch on slowly — PTFE cold-flows, no jerks);
  ET spring-loaded PTFE (silicone-base lube). Reinstall the plug so the seal
  meets the cage entrance chamfer squarely, never cocked.
concept-tags: [ED graphite piston ring, ET two-piece PTFE, ET spring-loaded PTFE, cold flow, cage entrance chamfer, seal replacement]
status: legacy
serves: [mnt.valve-body.replace-piston-seal]
source:
  - doc: Legacy 14101 deck
    locator: "image96 (graphite ring in a vise), image98 (side-cutters on a two-piece PTFE seal — seal-two-piece-cut.png), image102 (screwdriver on a spring-loaded PTFE clip — seal-spring-loaded-clip.png), slide 58"
delivery: has-lead figrow — lead table = the three seals' off-the-old / on-the-new moves; one distinctive-step photo per seal (SOURCES.txt). Consolidated from slides 58-61.
used-by: [58]
notes: data-ref="easy-e-seal-replacement". "Seat squarely into the cage chamfer" is ch2-m4 key concept 6.
```

---

## ch2-m5 — Valve Lapping

```yaml
id: ch2-cmp-lap-line-on-plug
teaches: >
  Lapping works two mating metal seating surfaces against each other with an
  abrasive until they share one continuous contact band — the lap line. A
  solid, even line all the way round is the target and the test.
concept-tags: [lap line, seating band, continuous contact, circumferential ring, chamfer]
status: legacy
serves: [mnt.valve-body.lap-metal-seat]
source:
  - doc: Legacy 14101 deck
    locator: "image110 — real plug with the seating band arrowed, cropped (lap-line-on-plug.png)"
delivery: existing photo (crop, SOURCES.txt), figrow; manual pointer in the tmpl-note
used-by: [62]
notes: >
  REPLACED an earlier inline-SVG cutaway that drew the lap line as a flat "V"
  — wrong geometry: the lap line is a circumferential ring around the plug's
  seating chamfer, and an axial section of a ring is two short marks, not a
  V. The real-part photo reads correctly. Provenance: SOURCES.txt.
```

```yaml
id: ch2-cmp-lap-setup-and-motion
teaches: >
  Lap in a partial assembly so the trim holds the plug true: 280–600 grit
  compound on the seating surfaces, set the seat ring, install the cage (it
  clamps the seat ring and guides the plug), fit the bonnet with the old
  gasket. Work the plug under its own weight — no push — turning back and
  forth through part of a turn; every so often lift it clear, rotate 90°,
  carry on. Then break down, clean every trace of compound, reassemble for
  real with new gaskets, test for shutoff.
concept-tags: [lapping setup, partial assembly, 280-600 grit, plug weight, back-and-forth, rotate 90 degrees, clean compound, new gaskets, shutoff test]
status: legacy
serves: [mnt.valve-body.lap-metal-seat]
source:
  - doc: Legacy 14101 deck
    locator: "image106 (compound on the seating surfaces, compound tub in frame), image109 (valve reassembled ready to lap — lap-setup-bonnet-on.png), image104 (hand turning a stem handle — lap-motion-handle.png), slides 64 / 65"
delivery: two-step photo row (slide 64) + single working-motion cell (slide 65); pull/clean/check/reassemble/test finish in the tmpl-notes
used-by: [64, 65]
notes: sacrificial-gasket point in the slide-64 note. Provenance: SOURCES.txt.
```

```yaml
id: ch2-cmp-no-lap-cases
teaches: >
  Not every seat gets lapped. A radius (spherical) plug seats on a narrow
  line by design; lapping spreads that band and ruins the shutoff — a damaged
  radius seat is re-machined. Deep gouges and bellows-seal bonnets are also
  not lapping fixes.
concept-tags: [radius seat, re-machine not lap, deep gouge, bellows-seal bonnet, narrow seating line]
status: current
serves: [mnt.valve-body.recognise-no-lap-cases]
source:
  - doc: Fisher ET IM
    locator: "D100398X012 Table 2 note 2 — radiused-seat plug + wide-bevel seat ring; re-machined, not field-lapped"
delivery: text / decision content (slide 66) — no dedicated figure
used-by: [66]
notes: no figure; taught as the boundary condition on ch2-cmp-lap-setup-and-motion.
```

```yaml
id: ch2-cmp-lapping-damage
teaches: >
  Two mistakes ruin the trim: lapping grit left behind is an abrasive that
  galls and scores the plug and cage in service; a bonnet pulled down crooked
  or out of torque sequence cocks the cage, so the plug binds.
concept-tags: [galling, retained grit, abrasive, crooked bonnet, torque sequence, cocked cage, plug bind]
status: legacy
serves: [mnt.valve-body.avoid-lapping-damage]
source:
  - doc: Legacy 14101 deck
    locator: "image113 — galled-cage / galled-plug composite (the clearer of image112 / image113), slide 66"
delivery: single wide figure (deck photo); prevention point in the tmpl-note
used-by: [66]
notes: this is the caution content for ch2-m5.
```

---

## ch2-m6 — Packing Replacement & Adjustment

```yaml
id: ch2-cmp-packing-removal
teaches: >
  Best practice: pull the bonnet and push the old packing out the top with a
  non-marring rod — never work it out from below or gouge the packing bore.
  Then inspect the stem threads and the bore.
concept-tags: [packing removal, pull the bonnet, non-marring rod, push out the top, inspect stem, inspect bore]
status: legacy
serves: [mnt.valve-body.remove-packing]
source:
  - doc: Legacy 14101 deck
    locator: "image115 — pushing packing out the top, slide 68"
  - doc: Fisher easy-e IM
    locator: "referenced as the authority for the removal procedure (tmpl-source pointer)"
delivery: single photo (deck image115) + the bore check in the figcaption + a manual pointer as tmpl-source
used-by: [68]
notes: consolidated the old section opener (68) and removal slide (69). image115 keeps its burned-in arrow (deck-wide follow-up).
```

```yaml
id: ch2-cmp-packing-stack-build
teaches: >
  Build the stack one ring at a time, seating each with the packing follower
  (a smooth pipe over the stem). Orientation matters: male and female end
  adaptors face the right way, the lantern ring sits at the leak-off port.
concept-tags: [packing stack, one ring at a time, packing follower, end adaptors, lantern ring, leak-off port]
status: current
serves: [mnt.valve-body.build-packing-stack]
source:
  - doc: Fisher ET IM
    locator: "D100398X012 Figure 4 — labelled 3/4-1-1/4 in. stem packing arrangement, cropped; left-edge sliver whited out"
delivery: existing figure (crop) — ET IM Fig 4 (packing-stack-ptfe.png), figrow. Consolidated from slides 70 / 71 / 74.
used-by: [70]
notes: "one ring at a time, follower-seated" is ch2-m6 key concept 2. Provenance: SOURCES.txt (deck crop) / ET IM Fig 4.
```

```yaml
id: ch2-cmp-packing-adjustment-by-type
teaches: >
  Each packing style has its own compression method — PTFE spring-loaded
  (single V-ring, live-loaded: tighten until the follower shoulder bottoms
  and the spring is compressed); jam PTFE / jam graphite (torque; graphite is
  two-step with a sacrificial zinc washer under each ribbon ring); HIGH-SEAL
  (long-travel Belleville pack, set by a load scale, not torque); ENVIRO-SEAL
  (Belleville-loaded, set by the spring-flat method).
concept-tags: [spring-loaded PTFE, jam PTFE, jam graphite, HIGH-SEAL load scale, ENVIRO-SEAL spring-flat, live-loaded, follower stop, anti-seize studs]
status: current
serves: [mnt.valve-body.adjust-packing]
source:
  - doc: Fisher ET IM
    locator: "D100398X012 Table 4 — jam-packing torque values"
  - doc: ENVIRO-SEAL bulletin
    locator: "D101642X012 — Tightening Procedures (spring-flat method)"
  - doc: HIGH-SEAL bulletin
    locator: "D101453X012 — load-scale setting"
delivery: >
  method table (HTML, Template 3, slide 72) — the "Set by" column carries the
  live-loaded distinction (follower stop vs torque vs spring geometry) —
  plus a two-arrangement visual aid (spring-loaded vs jam multi-ring, deck
  image119 / image121, numbered, SOURCES.txt) on slide 71. Consolidated from
  slides 72 / 75 / 77 / 79 + the 76 / 78 type intros.
used-by: [71, 72]
notes: data-ref="easy-e-packing-compression". Torque/scale values live in the manuals, not on the slide.
```

---

## ch2-m7 — Reassembly & Gaskets

```yaml
id: ch2-cmp-gasket-types-and-placement
teaches: >
  A disturbed gasket is a dead gasket — replaced on reassembly, never reused.
  easy-e uses three: thin graphite flat sheet (bonnet and seal), a metal
  shim, and the spiral-wound gasket — a live element that stays springy
  through thermal cycling so it keeps the seat-ring gasket loaded. Stack
  bottom-up: seat ring on its gasket, cage, spiral-wound + shim on top of the
  cage, bonnet gasket, bonnet.
concept-tags: [flat sheet gasket, metal shim, spiral-wound gasket, live element, thermal cycling, gasket stack order, disturbed gasket]
status: legacy
serves: [mnt.valve-body.select-and-place-gaskets]
source:
  - doc: Legacy 14101 deck
    locator: "image138 (flat sheet) / image140 (metal shim) / image141 (spiral wound) — the three gasket rings, cropped to matching wide-ellipse framing (gasket-*.png); image143 — trim cross-section for stack context, slide 83"
delivery: >
  gasket table (HTML, Template 4, slide 82) with the spiral-wound "acts as a
  spring" point as the last row; the three gasket photos (SOURCES.txt) as a
  visual aid on slide 85; image143 trim section on slide 83 with the stack
  order in the caption
used-by: [82, 83, 85]
notes: >
  old slide 85 ("Spiral Wound Gasket Types", an OLE-fallback raster) folded
  into the slide-82 table. Provenance: SOURCES.txt.
```

```yaml
id: ch2-cmp-bonnet-reassembly-torque
teaches: >
  The bonnet is never pulled straight to final torque. Clean the stud
  threads, lubricate the bolting, align the match marks, then tighten the
  nuts crosswise in progressive steps (tighten one nut relative to its
  neighbours). Use only the bolt material on the valve's serial card — the
  wrong grade can be overstressed. Install each stud so its grade and maker's
  mark stay visible.
concept-tags: [bonnet torque, crosswise pattern, progressive steps, clean and lubricate, match marks, serial-card bolt grade, stud orientation]
status: legacy
serves: [mnt.valve-body.torque-bonnet]
source:
  - doc: Legacy 14101 deck
    locator: "image147 — torquing the bonnet, slide 84; a crosswise-order diagram (inline SVG on slide 84)"
  - doc: Fisher easy-e IM
    locator: "torque-value table — the values are a manual lookup, not on the slide"
delivery: two cells — the torquing photo (deck image147) + a crossing-order diagram (inline SVG); method in the tmpl-note
used-by: [84]
notes: image148 (torque-value table screenshot) dropped — values belong in the manual.
```

---

## Discrepancies found during the index build

1. **`contrast-pdtc-pdto` — one primitive, not two.** `ch2-cmp-pdtc-pdto-sectionals`
   (this index) and `ch3-cmp-pdtc-pdto-bodies` (ch3 index) describe the
   **same image files** (deck image42 / image43). So
   `mnt.valve-body.contrast-pdtc-pdto` is served by **one primitive** used
   at two placement edges — ch2-m1 slide 29 (`introduces`) and ch3-m1 slide
   93 (`develops`) — not the two primitives Phase 4 call 2 provisionally
   recorded. **For Franz:** confirm collapsing to one primitive
   (`prim.mnt.valve-body.contrast-pdtc-pdto.body-sections`).

2. **`ch1-cmp-valve-assembly-stackup` (slide 14, deck image29)** could be
   upgraded to CVH Fig 1.3 (already sourced, used on slide 27). Minor,
   logged, not urgent.

3. **`ch2-m4` disassembly-safety** is folded into
   `ch2-cmp-body-disassembly-sequence` rather than a standalone `caution`
   component — the actuator side splits the analogous content out. Carried
   over from the Phase 3 Axis-C watch item; no change made.

4. **EZ IM Figure 12 redraw candidate** — `ch2-cmp-guiding-cage-vs-retainer`
   and `ch2-cmp-formed-plug` both note the EZ manual's clean sectional is
   unusable as-is (too many crossing callout leaders). If either component
   ever needs a better figure, that is the geometric source for a redraw.

## Gate summary

**Indexed:** 4 ch1-m1 components + 21 ch2 components = **25 components**,
one or more per `mnt.valve-body.*` competency, each with a source doc +
locator + precedence bucket + `serves` pointer. The 11 `exists*` primitives
in `Curriculum — 14101.md` now have real provenance: mostly **`current`**
(CVH 6th ed., current Fisher easy-e / ET / ENVIRO-SEAL / HIGH-SEAL manuals)
or **`legacy`** first-party deck sectionals corroborated against a named
current-manual figure. **No archive content** in ch1/ch2.

**Flagged for Franz:** discrepancy 1 (collapse `contrast-pdtc-pdto` to one
primitive). Discrepancies 2–4 are logged, no action needed now.

**Not done:** the `Curriculum — 14101.md` primitive registry rows are not
yet rewritten to cite these component ids — that is a mechanical follow-up
once discrepancy 1 is confirmed.
