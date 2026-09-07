---
title: Curriculum — 14101
type: reference
tags:
  - curriculum
  - pipeline
course: 14101 Valve Trim and Body Maintenance
updated: 2026-09-06
---

# Curriculum Registry — 14101

> [!note] Status — Phases 1–4 complete (Instructional Primitives Pathway, Option C)
> The **Day-One competency map + primitive registry**. Phase 2 retrofitted
> the two built 657 modules to prove the schema; Phase 3 extended the map
> to the buildable Day-One arc (Option C); Phase 4 enumerated the primitive
> per competency. **Phases 2, 3, and 4 gates all closed (Franz,
> 2026-09-06.)** Schema in `00 - Project/curriculum-development.md`.
> **Phase 5 (wire origination Stage 1/2) is NOT started** — held pending a
> separate explicit decision to widen the Stage 3 authoring gate. See the
> Gate log.
>
> **In scope — full map:** ch1-m1, ch2-m1…m7, ch3-m1, ch3-m2, ch3-m3.
> **Named, no edges (full stop):** ch3-m4, ch3-m5, ch3-m6 — the 667 modules
> and Deadband; their competencies are listed so the arc is complete, but no
> placement edges are authored.
> **Stubs only (`status: outline`, not built):** ch4-m1…m3 — the piston /
> double-acting actuator modules.
> "Mechanism type" (Direct- / Reverse- / Double-Acting) is carried as a
> **grouping tag** over the ch3/ch4 modules, not a structural rename.

The schema: a **competency** is a flat skill ID (`mnt.actuator.set-travel`,
`mnt.valve-body.lap-metal-seat`). A **primitive** is one authored figure for
one `competency × asset-variant`. A **placement edge** is
`module × roles × competency × progression → primitive`. Assessment (check)
edges carry `progression: applies` and `primitive: null`. See
`curriculum-development.md` for the record shapes and the four roles.

**Role routing** is resolved in its own section below — not assumed
per-edge. The Phase 2 edges were written `roles: [all four]` provisionally;
that is revisited there.

---

## Module map (Option C scope)

| Module | Workshop title | Group | Phase-3 treatment |
| --- | --- | --- | --- |
| `ch1-m1` | Reading a Valve's Specifications | valve-body | full map |
| `ch2-m1` | Valve Bodies, Plugs & Seating | valve-body | full map |
| `ch2-m2` | Plug Guiding, Cages & Flow Characteristics | valve-body | full map |
| `ch2-m3` | easy-e Trim Seals & Packing | valve-body | full map |
| `ch2-m4` | Body Disassembly & Seal Replacement | valve-body | full map |
| `ch2-m5` | Valve Lapping | valve-body | full map |
| `ch2-m6` | Packing Replacement & Adjustment | valve-body | full map |
| `ch2-m7` | Reassembly & Gaskets | valve-body | full map |
| `ch3-m1` | Actuator Action, Fail Mode & Bench Set | actuator | full map |
| `ch3-m2` | Fisher 657 — Identify & Bench Set | actuator · Direct-Acting | full map (Phase 2) |
| `ch3-m3` | Fisher 657 — Mount & Service | actuator · Direct-Acting | full map (Phase 2) |
| `ch3-m4` | Fisher 667 — Identify & Bench Set | actuator · Reverse-Acting | named, no edges — **full stop** |
| `ch3-m5` | Fisher 667 — Mount & Service | actuator · Reverse-Acting | named, no edges — **full stop** |
| `ch3-m6` | Deadband | actuator | named, no edges — **full stop** |
| `ch4-m1` | Piston actuator operation & fail action | actuator · Double-Acting | stub — `outline` |
| `ch4-m2` | Fisher 585C / 685 double-acting actuators | actuator · Double-Acting | stub — `outline` |
| `ch4-m3` | 585C maintenance & travel setting | actuator · Double-Acting | stub — `outline` |

ch1 and the Day-1 workshop (`ch14-m1`) sit outside the actuator/valve-body
arc; `ch1-m1` is included because its specs-reading competencies are
`assumed` by the ch2 modules.

---

## Competencies

Grouped by area. Statements are one line; `bloom` reuses the Stage 2
cognitive-level axis.

### `mnt.valve-body.*`

```yaml
# ch1-m1 — Reading a Valve's Specifications
- { id: mnt.valve-body.identify-assembly-stackup, bloom: remember,
    statement: "Name the parts of an assembled control valve top to bottom — actuator, bonnet, body between the pipe flanges — and locate the flange-to-flange job scope on a P&ID." }
- { id: mnt.valve-body.read-pressure-class, bloom: apply,
    statement: "Read the ASME class and body material off the nameplate and look up the working pressure for the service temperature (ASME B16.34 pressure–temperature table)." }
- { id: mnt.valve-body.read-leakage-class, bloom: understand,
    statement: "State the shutoff a valve's ANSI/FCI 70-2 seat-leakage class allows, and that Class I means no test was performed." }

# ch2-m1 — Valve Bodies, Plugs & Seating
- { id: mnt.valve-body.identify-trim-parts, bloom: remember,
    statement: "Name the trim parts in the flow path (plug, seat ring, cage, stem, stem pin) and distinguish them from the pressure boundary (body, bonnet)." }
- { id: mnt.valve-body.contrast-pdtc-pdto, bloom: understand,
    statement: "Distinguish push-down-to-close (direct-acting) from push-down-to-open (reverse-acting) body orientation and state how it sets the assembly's fail action once an actuator is fitted." }
- { id: mnt.valve-body.contrast-balanced-unbalanced-plug, bloom: understand,
    statement: "Explain how balanced and unbalanced plugs differ in stem force, number of leak paths, and temperature limits." }
- { id: mnt.valve-body.identify-seat-and-tip-types, bloom: remember,
    statement: "Distinguish standard (chamfered, re-lappable) from radius (rounded, re-machined) plug tips, and metal from soft (PTFE-insert) seat rings." }

# ch2-m2 — Plug Guiding, Cages & Flow Characteristics
- { id: mnt.valve-body.contrast-cage-post-guiding, bloom: understand,
    statement: "Distinguish cage-guided from post-guided trim and the service each suits (clean vs viscous/dirty/non-lubricating)." }
- { id: mnt.valve-body.explain-cage-functions, bloom: understand,
    statement: "State the cage's three jobs — guide the plug, clamp the seat ring, set the flow characteristic through its window shape." }
- { id: mnt.valve-body.explain-flow-characteristic, bloom: understand,
    statement: "Explain inherent flow characteristic (Cv vs travel at constant ΔP) and how quick-opening / linear / equal-percentage are set by cage-window or formed-plug geometry." }

# ch2-m3 — easy-e Trim Seals & Packing
- { id: mnt.valve-body.identify-easye-types, bloom: remember,
    statement: "Match the easy-e valve types (ES / ED / ET / EZ) to their guiding, plug balance, seat, piston seal, and shutoff class." }
- { id: mnt.valve-body.select-piston-seal, bloom: apply,
    statement: "Select the piston seal — graphite rings vs two-piece or spring-loaded PTFE — by service temperature." }
- { id: mnt.valve-body.identify-packing-box, bloom: remember,
    statement: "State that stem packing seals along the stem inside the packing box (the bored recess, not the bonnet casting), compressed by the packing flange and nuts." }
- { id: mnt.valve-body.select-stem-packing, bloom: apply,
    statement: "Select stem packing — PTFE, graphite, HIGH-SEAL, ENVIRO-SEAL — by service temperature, friction tolerance, and fugitive-emissions requirement." }

# ch2-m4 — Body Disassembly & Seal Replacement
- { id: mnt.valve-body.disassemble-body, bloom: apply,
    statement: "Disassemble an easy-e valve body to the safe fixed order: isolate, depressurise both sides, drain, lock out, pull the actuator, back off the packing-flange nuts, loosen the body-to-bonnet nuts." }
- { id: mnt.valve-body.assess-trim-reuse, bloom: analyze,
    statement: "Decide which trim parts can be reused — verify seating surfaces, stems, and plug grooves; a sound unbalanced plug is reusable, a gouged one is machined or replaced." }
- { id: mnt.valve-body.replace-piston-seal, bloom: apply,
    statement: "Replace the balanced-plug piston seal in its three easy-e forms — ED graphite ring (fitted in two or three pieces), ET two-piece PTFE, ET spring-loaded PTFE (cold-flow slowly, no jerks) — and reinstall the plug square to the cage entrance chamfer." }

# ch2-m5 — Valve Lapping
- { id: mnt.valve-body.lap-metal-seat, bloom: apply,
    statement: "Lap a metal-seated easy-e valve to a solid, even continuous contact band — plug under its own weight, back-and-forth part-turns, lift and rotate 90° periodically — in a partial assembly that holds the plug true." }
- { id: mnt.valve-body.recognise-no-lap-cases, bloom: understand,
    statement: "Recognise when lapping is not the fix: radius (spherical) seats (re-machine), deep gouges, bellows-seal bonnets." }
- { id: mnt.valve-body.avoid-lapping-damage, bloom: understand,
    statement: "Identify the trim damage poor lapping practice causes — retained grit galls the plug and cage in service; a crooked or out-of-sequence bonnet cocks the cage." }

# ch2-m6 — Packing Replacement & Adjustment
- { id: mnt.valve-body.remove-packing, bloom: apply,
    statement: "Remove old packing by pulling the bonnet and pushing the rings out the top with a non-marring rod — never from below — then inspect the stem threads and the packing bore." }
- { id: mnt.valve-body.build-packing-stack, bloom: apply,
    statement: "Build the packing stack one ring at a time, each seated with the follower, with the end adaptors and lantern ring in the correct orientation." }
- { id: mnt.valve-body.adjust-packing, bloom: apply,
    statement: "Set each packing type to its own compression method — spring-loaded PTFE (follower bottoms), jam PTFE / graphite (torque, two-step for graphite), HIGH-SEAL (load scale), ENVIRO-SEAL (spring-flat method)." }

# ch2-m7 — Reassembly & Gaskets
- { id: mnt.valve-body.select-and-place-gaskets, bloom: apply,
    statement: "Replace every disturbed gasket with the correct kind in the correct place — graphite flat sheet, spiral-wound (a live element that stays loaded through thermal cycling), seat-ring gasket — stacked bottom-up." }
- { id: mnt.valve-body.torque-bonnet, bloom: apply,
    statement: "Torque the bonnet down by the correct method — clean and lubricate the bolting, align the match marks, tighten crosswise in progressive steps, use only the serial-card bolt grade." }
```

### `mnt.actuator.*`

```yaml
# ch3-m1 — Actuator Action, Fail Mode & Bench Set
- { id: mnt.actuator.explain-actuator-action, bloom: understand,
    statement: "Explain actuator action — direct-acting (657: air on top of the diaphragm pushes the stem down, spring lifts it) vs reverse-acting (667) — and why the stem fails up or down on loss of air." }
- { id: mnt.actuator.determine-fail-mode, bloom: analyze,
    statement: "Determine an assembly's fail mode (plug position on loss of air) from actuator action combined with body orientation (PDTC / PDTO)." }
- { id: mnt.actuator.select-action-for-failsafe, bloom: evaluate,
    statement: "Given a required fail-safe result, select actuator action and body orientation together to achieve it." }
- { id: mnt.actuator.explain-excluded-forces, bloom: understand,
    statement: "State the in-service valve forces bench set deliberately excludes — static plug unbalance (A), seat load (B), packing friction (C), dynamic (D)." }

# ch3-m1 / ch3-m2 / ch3-m3 — from the Phase 2 retrofit (statements unchanged)
- { id: mnt.actuator.bench-set, bloom: understand,
    statement: "Explain bench set as the friction-free initial spring compression that fixes the diaphragm-pressure range for rated travel, and read the lower and upper bench-set pressures on a travel-vs-pressure plot." }
- { id: mnt.actuator.identify-sd-construction, bloom: remember,
    statement: "Name the parts of a spring-and-diaphragm actuator top to bottom — the two diaphragm casings, diaphragm and plate, spring and spring seat, spring adjuster in the yoke — and state what the spring adjuster sets." }
- { id: mnt.actuator.read-nameplate, bloom: remember,
    statement: "Read an actuator nameplate for the values that define a correct bench set — type and size, bench-set range, rated travel, maximum valve stem diameter." }
- { id: mnt.actuator.relieve-spring-before-casing, bloom: apply,
    statement: "Relieve all actuator-spring compression with the spring adjuster before removing any diaphragm-casing cap screw." }
- { id: mnt.actuator.set-travel, bloom: apply,
    statement: "Set an actuator's stroke so the travel between the end-of-travel marks equals the nameplate rated travel." }
- { id: mnt.actuator.mount-on-valve, bloom: apply,
    statement: "Mount a spring-and-diaphragm actuator on the bonnet — valve plug and stem pushed down, actuator hoisted on, yoke locknut run down, actuator and valve stems not yet connected." }
- { id: mnt.actuator.install-stem-connector, bloom: apply,
    statement: "Install the two-piece stem connector with at least one stem diameter of thread engagement on each stem, then confirm full stroke against rated travel." }
- { id: mnt.actuator.torque-diaphragm-casing, bloom: apply,
    statement: "Reassemble the diaphragm casing clean and dry to the manual's crossing pattern and two-round final torque." }

# ch3-m6 — Deadband (named, no edges — full stop)
- { id: mnt.actuator.measure-deadband, bloom: apply,
    statement: "Measure the span and percent of deadband from the pressure difference at a common travel-reference point on the rising and falling strokes." }

# ch4 — Double-acting / piston (stub competencies — not built)
- { id: mnt.actuator.explain-piston-operation, bloom: understand,
    statement: "Explain how a double-acting piston actuator strokes (loading pressure on both sides of the piston) and how its fail action is determined." }
- { id: mnt.actuator.identify-piston-construction, bloom: remember,
    statement: "Name the parts of a Fisher 585C / 685 piston actuator." }
- { id: mnt.actuator.service-piston-actuator, bloom: apply,
    statement: "Disassemble, inspect, and reassemble a 585C piston actuator." }
```

`mnt.actuator.set-travel` also gets a `develops` edge at `ch4-m3` (piston
variant) — matching the `prim.mnt.actuator.set-travel.piston` primitive
stub. `mnt.actuator.determine-fail-mode` and
`mnt.actuator.explain-actuator-action` carry into ch3-m4 and ch4-m1 as
`develops` / `applies`.

**Total: 25 `mnt.valve-body.*` + 16 `mnt.actuator.*` = 41 competencies.**
Four actuator competencies are **named-only** — their modules are under the
full stop or unbuilt: `measure-deadband` (ch3-m6), and
`explain-piston-operation` / `identify-piston-construction` /
`service-piston-actuator` (ch4).

---

## Primitives — Phase 2 (ch3-m2 / m3)

One per `competency × asset-variant`. All ten are `status: exists`.
`prim.mnt.actuator.set-travel.spring` was `pending` after Franz's
2026-09-06 review found neither shipped asset adequate; it is now a house
redraw of Fisher IM Figure 4 (`sourced/benchset-fig4-redraw.svg`),
approved 2026-09-06, and moved to `exists` — not yet placed on a slide.
The ch3-m1, ch2, and ch1-m1 primitives are in **Primitive registry —
Phase 4** below.

```yaml
- id: prim.mnt.actuator.identify-sd-construction.cutaway
  competencyId: mnt.actuator.identify-sd-construction
  status: exists
  asset: image155.png                       # first-party 657 colour sectional
  provenance: ch3-cmp-657-assembly
  redrawRecord: existing figure, no redraw (colour sectional, cleaner than IM parts drawings)

- id: prim.mnt.actuator.relieve-spring-before-casing.loadpath
  competencyId: mnt.actuator.relieve-spring-before-casing
  status: exists
  asset: 657-spring-under-casing.png        # crop of deck image151, upper/lower casings + compressed spring
  provenance: ch3-cmp-657-assembly
  redrawRecord: existing figure (crop), no redraw

- id: prim.mnt.actuator.relieve-spring-before-casing.disasm-order
  competencyId: mnt.actuator.relieve-spring-before-casing
  status: exists
  asset: image168.png                       # disassembly-sequence figure (slide 105)
  provenance: ch3-cmp-657-assembly
  redrawRecord: existing figure, no redraw
  variantTag: disassembly-order
  # SEE FINDING 5 — may be redundant with .loadpath

- id: prim.mnt.actuator.read-nameplate.plate
  competencyId: mnt.actuator.read-nameplate
  status: exists
  asset: inline-svg (slide 096)             # house redraw of a 657 nameplate, example values
  provenance: ch3-cmp-nameplate
  redrawRecord: >
    House-style SVG redraw of a first-party nameplate graphic, marked EXAMPLE
    (Style Guide §5.8 — faithful redraw of a first-party graphic).

- id: prim.mnt.actuator.bench-set.graph-friction-free
  competencyId: mnt.actuator.bench-set
  status: exists
  asset: inline-svg (slide 097)             # single friction-free bench-set line + range band
  provenance: ch3-cmp-bench-set-graph
  redrawRecord: >
    Bounded house redraw spec'd against CVH Fig 8.10 geometry (Style Guide
    §5.8 reason 2 — the source is the three-line deadband figure, un-croppable).
  variantTag: friction-free

- id: prim.mnt.actuator.bench-set.graph-friction-shift
  competencyId: mnt.actuator.bench-set
  status: exists
  asset: inline-svg (slide 102)             # friction-free + on-valve lines, offset span
  provenance: ch3-cmp-bench-set-graph
  redrawRecord: same redraw basis as .graph-friction-free; two lines instead of one
  variantTag: friction-shift

- id: prim.mnt.actuator.set-travel.spring
  competencyId: mnt.actuator.set-travel
  status: exists           # redraw approved by Franz 2026-09-06
  asset: benchset-fig4-redraw.svg   # sourced/ — house redraw of Fisher IM Fig 4
  provenance: ch3-cmp-benchset-adjustment-setup
  redrawRecord: >
    House SVG redraw of Fisher 657/667 IM Figure 4 "Bench Set Adjustment"
    (40A8715-B). Fig 4 as geometric source; simplified for legibility per
    Style Guide §5.8. Keeps spring adjuster / both stem marks / rated-travel
    dimension; drops the yoke hatching, travel-indicator scales, DVC bracket,
    and the ①②③④ note web. Selected over the shipped deck photos and Fig 4
    as-is (Franz, 2026-09-06). NOT yet placed on a slide — separate go-ahead.
  variantTag: spring

- id: prim.mnt.actuator.mount-on-valve.photo
  competencyId: mnt.actuator.mount-on-valve
  status: exists
  asset: [657-hoist-onto-bonnet.png, image162.png]     # slide 101
  provenance: ch3-cmp-mounting-components
  redrawRecord: existing deck photos, no redraw

- id: prim.mnt.actuator.install-stem-connector.photo
  competencyId: mnt.actuator.install-stem-connector
  status: exists
  asset: image166.png                       # two halves of the stem connector, arrowed bores (slide 103)
  provenance: ch3-cmp-stem-connector
  redrawRecord: existing deck photo, no redraw
  # slide 103 body text "fine travel adjustment at the locknut and jam nut"
  # is not IM terminology — already flagged in the ch3 Component Index; a
  # slide-content fix, not a model issue.

- id: prim.mnt.actuator.torque-diaphragm-casing.pattern
  competencyId: mnt.actuator.torque-diaphragm-casing
  status: exists
  asset: inline-svg (slide 106)             # bolt-circle crossing-pattern diagram
  provenance: ch3-cmp-casing-torque-pattern
  redrawRecord: house diagram of the torque sequence
```

Ten primitives, covering seven of the ch3-m2/m3 competencies:
`mnt.actuator.bench-set` and `mnt.actuator.relieve-spring-before-casing`
each carry two variants (both flagged below); `mnt.actuator.set-travel` has
one, currently `pending`. `mnt.actuator.explain-actuator-action` carries
**none** — it is taught in ch3-m1 and only *applied* in ch3-m2 (see edges).
Primitives for the ch1-m1 / ch2 / ch3-m1 competencies are Phase 4 work.

---

## Placement edges — Phase 2 (ch3-m2 / m3, full detail)

Written with primitives because the ch3-m2 / m3 assets already exist. The
`roles: [all four]` on these was provisional — see Role routing below.

### ch3-m2 — "Fisher 657 — Identify & Bench Set" (slides 94–98)

```yaml
- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.explain-actuator-action, progression: applies,
    primitive: null, slide: 94, note: "carried from ch3-m1 (slide 88); not re-taught" }

- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.identify-sd-construction, progression: introduces,
    primitive: prim.mnt.actuator.identify-sd-construction.cutaway, slide: 94 }

- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.relieve-spring-before-casing, progression: introduces,
    primitive: prim.mnt.actuator.relieve-spring-before-casing.loadpath, slide: 95 }

- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.read-nameplate, progression: introduces,
    primitive: prim.mnt.actuator.read-nameplate.plate, slide: 96 }

- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.bench-set, progression: develops, slide: 97,
    primitive: prim.mnt.actuator.bench-set.graph-friction-free,
    note: "RECONCILED — ch3-m1 introduces bench-set (generic, slide 92); this develops it for direct-acting off the valve" }

- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.set-travel, progression: introduces,
    primitive: prim.mnt.actuator.set-travel.spring, slide: 98 }

- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: [mnt.actuator.bench-set, mnt.actuator.set-travel], progression: applies,
    primitive: null, slide: 100, note: "check-your-knowledge — see FINDING 1" }
```

### ch3-m3 — "Fisher 657 — Mount & Service" (slides 101–106)

```yaml
- { module: ch3-m3, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.mount-on-valve, progression: introduces,
    primitive: prim.mnt.actuator.mount-on-valve.photo, slide: 101 }

- { module: ch3-m3, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.bench-set, progression: develops,
    primitive: prim.mnt.actuator.bench-set.graph-friction-shift, slide: 102,
    note: "adds the on-valve friction shift — see FINDING 6" }

- { module: ch3-m3, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.install-stem-connector, progression: introduces,
    primitive: prim.mnt.actuator.install-stem-connector.photo, slide: 103 }

- { module: ch3-m3, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.relieve-spring-before-casing, progression: develops,
    primitive: prim.mnt.actuator.relieve-spring-before-casing.disasm-order, slide: 105,
    note: "in the full disassembly sequence — see FINDING 5" }

- { module: ch3-m3, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.torque-diaphragm-casing, progression: introduces,
    primitive: prim.mnt.actuator.torque-diaphragm-casing.pattern, slide: 106 }

- { module: ch3-m3, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: [mnt.actuator.install-stem-connector, mnt.actuator.torque-diaphragm-casing,
                 mnt.actuator.relieve-spring-before-casing], progression: applies,
    primitive: null, slide: 108, note: "check-your-knowledge — see FINDING 1" }
```

### Component Index back-pointers

Added to `20 - Source Library/Component Index — 14101 ch3.md`:

| Component | `serves:` |
| --- | --- |
| `ch3-cmp-657-assembly` | `mnt.actuator.identify-sd-construction`, `mnt.actuator.relieve-spring-before-casing` |
| `ch3-cmp-nameplate` | `mnt.actuator.read-nameplate` |
| `ch3-cmp-bench-set-graph` | `mnt.actuator.bench-set` |
| `ch3-cmp-benchset-adjustment-setup` | `mnt.actuator.set-travel` |
| `ch3-cmp-mounting-components` | `mnt.actuator.mount-on-valve` |
| `ch3-cmp-stem-connector` | `mnt.actuator.install-stem-connector` |
| `ch3-cmp-casing-torque-pattern` | `mnt.actuator.torque-diaphragm-casing` |
| `ch3-cmp-da-schematic` | `mnt.actuator.explain-actuator-action` *(renamed from `direct-acting-principle` 2026-09-06; competency lives in ch3-m1, ch3-m2 applies it. The `serves:` line in the Component Index is updated to match.)* |

---

## Placement edges — Phase 3 (progression only)

For ch1-m1, ch2, and ch3-m1 the primitives do not exist yet (Phase 4), so
these edges give **module × competency × progression** only; `primitive:
pending`. Assessment edges omitted for brevity — every module with a
`check` gets one `progression: applies, primitive: null` edge naming the
competencies it tests.

**Roles (R1, Franz 2026-09-06):** every edge in this file carries
`roles: [maint-tech, inst-tech, sizing-eng, operator]`. 14101 is one
fixed-programme hands-on course — no per-role filter inside it. Written out
on the Phase 2 edges; omitted from the Phase 3 entries below for brevity,
but the same four roles apply to every one.

### ch1-m1 — Reading a Valve's Specifications

```yaml
- { module: ch1-m1, competency: mnt.valve-body.identify-assembly-stackup, progression: introduces }
- { module: ch1-m1, competency: mnt.valve-body.read-pressure-class,       progression: introduces }
- { module: ch1-m1, competency: mnt.valve-body.read-leakage-class,        progression: introduces }
```

### ch2-m1 — Valve Bodies, Plugs & Seating

```yaml
- { module: ch2-m1, competency: mnt.valve-body.identify-assembly-stackup,           progression: applies }
- { module: ch2-m1, competency: mnt.valve-body.identify-trim-parts,                 progression: introduces }
- { module: ch2-m1, competency: mnt.valve-body.contrast-pdtc-pdto,                  progression: introduces, primitive: prim.mnt.valve-body.contrast-pdtc-pdto.body-sections, slide: 29, note: "same primitive ch3-m1 develops" }
- { module: ch2-m1, competency: mnt.valve-body.contrast-balanced-unbalanced-plug,   progression: introduces }
- { module: ch2-m1, competency: mnt.valve-body.identify-seat-and-tip-types,         progression: introduces }
```

### ch2-m2 — Plug Guiding, Cages & Flow Characteristics

```yaml
- { module: ch2-m2, competency: mnt.valve-body.identify-trim-parts,            progression: applies }
- { module: ch2-m2, competency: mnt.valve-body.contrast-cage-post-guiding,     progression: introduces }
- { module: ch2-m2, competency: mnt.valve-body.explain-cage-functions,         progression: introduces }
- { module: ch2-m2, competency: mnt.valve-body.explain-flow-characteristic,    progression: introduces }
```

### ch2-m3 — easy-e Trim Seals & Packing

```yaml
- { module: ch2-m3, competency: mnt.valve-body.contrast-balanced-unbalanced-plug, progression: applies }
- { module: ch2-m3, competency: mnt.valve-body.identify-seat-and-tip-types,       progression: applies }
- { module: ch2-m3, competency: mnt.valve-body.identify-easye-types,             progression: introduces }
- { module: ch2-m3, competency: mnt.valve-body.select-piston-seal,               progression: introduces }
- { module: ch2-m3, competency: mnt.valve-body.identify-packing-box,             progression: introduces }
- { module: ch2-m3, competency: mnt.valve-body.select-stem-packing,              progression: introduces }
```

### ch2-m4 — Body Disassembly & Seal Replacement

```yaml
- { module: ch2-m4, competency: mnt.valve-body.identify-easye-types,   progression: applies }
- { module: ch2-m4, competency: mnt.valve-body.disassemble-body,       progression: introduces }
- { module: ch2-m4, competency: mnt.valve-body.assess-trim-reuse,      progression: introduces }
- { module: ch2-m4, competency: mnt.valve-body.select-piston-seal,     progression: applies }
- { module: ch2-m4, competency: mnt.valve-body.replace-piston-seal,    progression: introduces }
```

### ch2-m5 — Valve Lapping

```yaml
- { module: ch2-m5, competency: mnt.valve-body.identify-seat-and-tip-types,  progression: applies }
- { module: ch2-m5, competency: mnt.valve-body.lap-metal-seat,               progression: introduces }
- { module: ch2-m5, competency: mnt.valve-body.recognise-no-lap-cases,       progression: introduces }
- { module: ch2-m5, competency: mnt.valve-body.avoid-lapping-damage,         progression: introduces }
```

### ch2-m6 — Packing Replacement & Adjustment

```yaml
- { module: ch2-m6, competency: mnt.valve-body.identify-packing-box,   progression: applies }
- { module: ch2-m6, competency: mnt.valve-body.select-stem-packing,    progression: applies }
- { module: ch2-m6, competency: mnt.valve-body.remove-packing,         progression: introduces }
- { module: ch2-m6, competency: mnt.valve-body.build-packing-stack,    progression: introduces }
- { module: ch2-m6, competency: mnt.valve-body.adjust-packing,         progression: introduces }
```

### ch2-m7 — Reassembly & Gaskets

```yaml
- { module: ch2-m7, competency: mnt.valve-body.disassemble-body,           progression: applies }
- { module: ch2-m7, competency: mnt.valve-body.select-and-place-gaskets,   progression: introduces }
- { module: ch2-m7, competency: mnt.valve-body.torque-bonnet,              progression: introduces }
```

### ch3-m1 — Actuator Action, Fail Mode & Bench Set

```yaml
- { module: ch3-m1, competency: mnt.valve-body.contrast-pdtc-pdto,               progression: develops, primitive: prim.mnt.valve-body.contrast-pdtc-pdto.body-sections, slide: 93, note: "same primitive ch2-m1 introduces; fail-action framing. Phase 4 correction of Phase 3's `applies` (Franz confirmed 2026-09-06)" }
- { module: ch3-m1, competency: mnt.actuator.explain-actuator-action,            progression: introduces }
- { module: ch3-m1, competency: mnt.actuator.determine-fail-mode,                progression: introduces }
- { module: ch3-m1, competency: mnt.actuator.select-action-for-failsafe,         progression: introduces }
- { module: ch3-m1, competency: mnt.actuator.bench-set,                          progression: introduces, note: "generic friction-free definition, slide 92" }
- { module: ch3-m1, competency: mnt.actuator.explain-excluded-forces,            progression: introduces }
```

### ch3-m4 / m5 / m6 — named only (full stop)

No edges authored. When the full stop lifts, the expected progression is:

| Module | Competency | Progression |
| --- | --- | --- |
| ch3-m4 (667 Identify & Bench Set) | `identify-sd-construction` | `develops` (reverse-acting) |
| | `read-nameplate` | `applies` |
| | `bench-set` | `develops` (reverse-acting) |
| | `set-travel` | `develops` (screwdriver-scale method) |
| ch3-m5 (667 Mount & Service) | `mount-on-valve`, `install-stem-connector`, `torque-diaphragm-casing` | `develops` (667) |
| | `relieve-spring-before-casing` | `applies` |
| ch3-m6 (Deadband) | `measure-deadband` | `introduces` |
| | `bench-set` | `develops` (adds the decreasing-pressure line + deadband bracket) |

### ch4-m1 / m2 / m3 — stubs (`status: outline`)

| Module | Competency | Progression |
| --- | --- | --- |
| ch4-m1 | `explain-piston-operation` | `introduces` |
| | `determine-fail-mode` | `develops` (double-acting) |
| ch4-m2 | `identify-piston-construction` | `introduces` |
| ch4-m3 | `service-piston-actuator` | `introduces` |
| | `set-travel` | `develops` (piston — no bench set; travel stops + scale; `prim.mnt.actuator.set-travel.piston`) |

---

## Axis-C scoping pass

Each module's spine walked against the Axis-C role vocabulary
(`nomenclature` / `mechanism` / `procedure` / `application` / `contrast` /
`caution` / `check`) to catch a load-bearing teaching component with no
competency behind it. **No gaps found** in the in-scope modules — every
"yes" below already has a competency.

| Module | nomen. | mech. | proc. | appl. | contrast | caution | check |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| ch1-m1 | ✓ | — | ✓ | — | — | — | ✓ |
| ch2-m1 | ✓ | — | — | — | ✓ | — | ✓ |
| ch2-m2 | ✓ | ✓ | — | — | ✓ | — | ✓ |
| ch2-m3 | ✓ | — | — | ✓ | — | — | — |
| ch2-m4 | — | — | ✓ | ✓ | — | ✓¹ | — |
| ch2-m5 | — | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| ch2-m6 | ✓ | — | ✓ | — | — | — | ✓ |
| ch2-m7 | ✓ | ✓² | ✓ | — | — | ✓³ | ✓ |
| ch3-m1 | ✓ | ✓ | — | ✓ | ✓ | — | ✓ |
| ch3-m2 | ✓ | ✓ | ✓ | — | — | ✓ | ✓ |
| ch3-m3 | — | — | ✓ | ✓ | — | ✓ | ✓ |

¹ `avoid-lapping-damage` and the disassembly-order framing in
`disassemble-body` carry the caution content; not a standalone caution
slide. ² the spiral-wound "live element" behaviour in
`select-and-place-gaskets` is the mechanism content. ³ "never pull the
bonnet straight to final torque" — carried inside `torque-bonnet`, not a
separate caution.

**One watch item, not a gap:** ch2-m4's disassembly-safety content
(isolate / depressurise / lock out) is folded into
`mnt.valve-body.disassemble-body` rather than split out as its own
`caution` competency. That mirrors how `mnt.actuator.relieve-spring-before-casing`
*is* split out on the actuator side. Consistent-enough for now; flag if a
review wants valve-body disassembly safety as its own competency.

---

## Role routing — R1 (Franz, 2026-09-06)

**All four roles route to every competency.** 14101 is one hands-on course
with a fixed bench programme — taking it means doing all of it, including
the deep rebuild procedures (`lap-metal-seat`, `build-packing-stack`,
`replace-piston-seal`, `torque-bonnet`). No `operator`-excludes list. This
matches how the class runs: one cohort, hands-on, together — not a per-role
filtered path inside a single live bench programme.

Every placement edge in this file therefore carries
`roles: [maint-tech, inst-tech, sizing-eng, operator]` (spelled out on the
Phase 2 edges; stated once for the Phase 3 edges).

A lighter operator subset (the old R2) may become a *separate, lighter
course* if one is ever built — a statement about which course an operator
enrolls in, not a filter inside 14101. Out of scope here.

---

## Phase 2 → Phase 3 reconciliations

1. **`mnt.actuator.direct-acting-principle` → `mnt.actuator.explain-actuator-action`.**
   ch3-m1's actuator-action concept covers direct *and* reverse acting, so
   the competency is the general one. ch3-m1 `introduces`; ch3-m2
   `applies`. The ch3 Component Index `serves:` line on `ch3-cmp-da-schematic`
   needs the same rename.
2. **`mnt.actuator.bench-set` progression.** Phase 2 had ch3-m2
   `introduces` it. ch3-m1 is where it is first taught (generic,
   friction-free, slide 92), so ch3-m1 `introduces`, ch3-m2 `develops`
   (direct-acting off the valve), ch3-m3 `develops` (on-valve friction
   shift). ch3-m2 edge updated above.
3. **Finding 6 becomes a live call.** With ch3-m1 introducing `bench-set`
   and ch3-m3 developing it for friction, the on-valve friction content
   (ch3-m3 page 2 of 5) sits more comfortably as `bench-set` `develops`
   than as a separate `friction-effect` competency. Leaving it merged;
   Finding 6 downgraded from "judgment call" to "resolved — merged."

---

## Primitive registry — Phase 4

Enumeration and bookkeeping over the closed competency set. **Commits no
generated content.** Each entry: the primitive for a competency, its
`status`, and provenance. `status: exists` = a real asset already ships
(pointed at a Component Index entry for ch3, or a `SOURCES.txt` entry / a
production slide for ch2 / ch1). `status: exists*` = ships, but provenance
is only the production slide — firming it to the ch3 standard needs a
ch2 / ch1 Component Index (flagged below). `status: pending` = no adequate
asset; Phase 5 / Stage 3 authoring.

### ch3-m1 primitives (full — ch3 has a Component Index)

```yaml
- id: prim.mnt.actuator.explain-actuator-action.da-ra-schematics
  competencyId: mnt.actuator.explain-actuator-action
  status: exists
  asset: [image151.png, image152.png]        # first-party 657 DA + 667 RA cutaway renders (slide 88)
  provenance: [ch3-cmp-da-schematic, ch3-cmp-ra-schematic]
  redrawRecord: existing first-party renders, no redraw

- id: prim.mnt.actuator.determine-fail-mode.schematic-matrix
  competencyId: mnt.actuator.determine-fail-mode
  status: exists
  asset: fail-mode-spring-schematics.png      # 4 spring-and-body schematics + a .tmpl-table matrix (slide 89)
  provenance: ch3-cmp-fail-mode-matrix
  redrawRecord: >
    Existing-figure crop (deck slide 89 / image153), matrix beneath dropped —
    carried as the slide's own .tmpl-table. No redraw.
  note: >
    mnt.actuator.select-action-for-failsafe is taught on the same slide as
    the reasoning task over this same figure — a "one figure, two
    competencies" case like ch3-m2 slide 94. It gets an `applies` edge with
    primitive: null, not its own primitive.

- id: prim.mnt.actuator.explain-excluded-forces.forces-cutaway
  competencyId: mnt.actuator.explain-excluded-forces
  status: exists
  asset: globe-valve-forces-cutaway.png       # Fisher W0451-1 (archive D750020), A–D force callouts (slide 91)
  provenance: [ch3-cmp-valve-forces-cutaway, ch3-cmp-bench-set-decomposition]
  redrawRecord: archive figure, re-rendered from scan at 450 dpi, white-point lift; no geometry change

- id: prim.mnt.actuator.bench-set.graph-generic
  competencyId: mnt.actuator.bench-set
  status: exists
  asset: inline-svg (slide 092)               # single friction-free bench-set line + range band, generic
  provenance: ch3-cmp-bench-set-graph          # slide-92 variant, per its `variants` list
  redrawRecord: bounded house redraw vs CVH Fig 8.10 geometry (§5.8 reason 2)
  variantTag: generic
  # THIRD variant of mnt.actuator.bench-set — see new-vs-reframe call 1

- id: prim.mnt.valve-body.contrast-pdtc-pdto.body-sections
  competencyId: mnt.valve-body.contrast-pdtc-pdto
  status: exists
  asset: [image42.png, image43.png]           # PDTC / PDTO Fisher colour sectionals
  provenance: ch2-cmp-pdtc-pdto-sectionals    # == ch3-cmp-pdtc-pdto-bodies (same image files)
  redrawRecord: existing deck figures, no redraw
  # ONE primitive, TWO placement edges (Franz confirmed 2026-09-06): ch2-m1
  # slide 29 `introduces`, ch3-m1 slide 93 `develops`. The Component Index
  # build showed ch2-cmp-pdtc-pdto-sectionals and ch3-cmp-pdtc-pdto-bodies
  # are the same asset — Phase 4 call 2's provisional "two primitives" was
  # wrong. No variantTag: same asset, different framing at the two slides.
```

### ch2 + ch1-m1 primitives (registry table)

One primitive per competency unless noted. Slide numbers are the internal
pipeline reference; provenance is the `SOURCES.txt` figure name where one
exists.

| Competency | Primitive (variant) | Status | Provenance |
| --- | --- | --- | --- |
| `mnt.valve-body.identify-assembly-stackup` | `.pid-and-stackup` | exists* | ch1 slide 14 |
| `mnt.valve-body.read-pressure-class` | `.pt-table` | exists* | ch1 slide 16 (ASME B16.34 table) |
| `mnt.valve-body.read-leakage-class` | `.fci-class-table` | exists* | ch1 slide 19 (ANSI/FCI 70-2 table) |
| `mnt.valve-body.identify-trim-parts` | `.globe-components` | exists | `cvh6-fig1-3-globe-valve-components.png` (CVH Fig 1.3), slide 27 |
| `mnt.valve-body.contrast-pdtc-pdto` | `.body-sections` (above) | exists | **one primitive** (`prim.mnt.valve-body.contrast-pdtc-pdto.body-sections`, deck image42/43) at two edges — ch2-m1 slide 29 `introduces`, ch3-m1 slide 93 `develops` (Franz confirmed 2026-09-06) |
| `mnt.valve-body.contrast-balanced-unbalanced-plug` | `.plug-heads` | exists | `plug-unbalanced-head.png` + `plug-balanced-head.png`, slide 30 |
| `mnt.valve-body.identify-seat-and-tip-types` | `.tip-and-seat` | exists* | ch2-m1 slides 31–35 |
| `mnt.valve-body.contrast-cage-post-guiding` | `.cage-vs-post` | exists | `cage-plug-assembly.png`, slide 37 |
| `mnt.valve-body.explain-cage-functions` | `.cage-three-jobs` | exists* | ch2-m2 slide 38 |
| `mnt.valve-body.explain-flow-characteristic` | `.cv-curve-and-cages` | exists | inline SVG (slide 39, supersedes `flow-curve.png`) + `flow-cages.png` / the three cage images, slide 40 |
| `mnt.valve-body.identify-easye-types` | `.es-ed-et-ez-table` | exists* | ch2-m3 slide 46 (table) |
| `mnt.valve-body.select-piston-seal` | `.seal-by-temp` | exists | `piston-seal-spring-loaded-detail.png` + `piston-seal-location.png`, slide 47 |
| `mnt.valve-body.identify-packing-box` | `.bonnet-packing-box` | exists | `cvh6-fig1-6-bonnet-packing-box.png` (CVH Fig 1.6), slide 51 |
| `mnt.valve-body.select-stem-packing` | `.packing-by-service` | exists* | ch2-m3 slide 52 (table) |
| `mnt.valve-body.disassemble-body` | `.match-mark` | exists | `disassembly-match-mark.png`, slide 56 |
| `mnt.valve-body.assess-trim-reuse` | `.reuse-checks` | exists* | ch2-m4 slide 57 |
| `mnt.valve-body.replace-piston-seal` | `.three-seal-forms` | exists | `seal-two-piece-cut.png` + `seal-spring-loaded-clip.png` + image96 (graphite ring in vise), slide 58 |
| `mnt.valve-body.lap-metal-seat` | `.lap-setup-and-motion` | exists | `lap-setup-bonnet-on.png` + `lap-motion-handle.png` (slides 64/65); `lap-line-on-plug.png` (slide 62) |
| `mnt.valve-body.recognise-no-lap-cases` | `.no-lap-cases` | exists* | ch2-m5 slide 66 |
| `mnt.valve-body.avoid-lapping-damage` | `.lapping-damage` | exists* | ch2-m5 slide 66 |
| `mnt.valve-body.remove-packing` | `.pull-from-top` | exists* | ch2-m6 slide 68/70 |
| `mnt.valve-body.build-packing-stack` | `.stack-order` | exists | `packing-stack-ptfe.png`, slide 70/71 |
| `mnt.valve-body.adjust-packing` | `.by-type` | exists | `packing-set-spring-loaded.png` + `packing-set-jam-ptfe.png`, slide 71 |
| `mnt.valve-body.select-and-place-gaskets` | `.three-gasket-types` | exists | `gasket-flat-sheet.png` + `gasket-metal-shim.png` + `gasket-spiral-wound.png`, slide 85 |
| `mnt.valve-body.torque-bonnet` | `.crossing-pattern` | exists* | ch2-m7 slide 83/84 |

**14 of 25 `mnt.valve-body.*` primitives are `SOURCES.txt`-backed
(`exists`); 11 are `exists*` — production slide only.** No `pending` on the
valve-body side: every ch2 / ch1 competency has a shipped figure. The
`exists*` rows need a **ch2 / ch1 Component Index** to reach the ch3
standard of provenance (source doc + locator + precedence bucket). That is
real editorial work — the same size as the ch3 Component Index build — and
is flagged as the Phase 4 follow-on, not a Phase 4 blocker.

### New-vs-reframe calls — all four confirmed (Franz, 2026-09-06)

1. **`mnt.actuator.bench-set` keeps three graph variants** — `generic`
   (*Actuator Action, Fail Mode & Bench Set*, "Bench Set"), `friction-free`
   (*Fisher 657 — Identify & Bench Set* page 4 of 5, same line + points ①②),
   `friction-shift` (*Fisher 657 — Mount & Service* page 2 of 5, two lines +
   offset span). One redraw per real progression step — "exactly the
   justified-variant case this schema was built to allow, not duplication"
   (Franz). A fourth, `deadband-full` (ch3-m6), is named but under the full
   stop.

2. **`contrast-pdtc-pdto` = ONE primitive** — corrected after the ch1/ch2
   Component Index build (2026-09-06): `ch2-cmp-pdtc-pdto-sectionals` and
   `ch3-cmp-pdtc-pdto-bodies` are the same image files (deck image42/43), so
   there is one primitive (`prim.mnt.valve-body.contrast-pdtc-pdto.body-sections`)
   at two placement edges — ch2-m1 slide 29 `introduces`, ch3-m1 slide 93
   `develops`. Phase 4's provisional "two primitives" was wrong; Franz
   confirmed the collapse. *This is what the phase-gate discipline is meant
   to produce* (Franz).

3. **ch3-m1 `develops` `contrast-pdtc-pdto`** — corrected from Phase 3's
   `applies`. A dedicated teaching slide + figure + Component Index entry is
   real teaching content, not exercise of a prior competency. Confirmed; the
   ch3-m1 edge above is updated.

4. **Multi-photo figrows are list-asset primitives** — `select-piston-seal`,
   `replace-piston-seal`, `lap-metal-seat`, `adjust-packing`,
   `select-and-place-gaskets`, and the ch3-m1 fail-mode / forces slides.
   Consistent application of Finding 2. Confirmed.

### Count

| Group | Competencies (edged) | Primitives |
| --- | --: | --: |
| ch3-m2 / m3 (Phase 2) | 9 | 10 |
| ch3-m1 (Phase 4) | 6 | 5 + 1 shared |
| ch2 (Phase 4) | 22 | 21 |
| ch1-m1 (Phase 4) | 3 | 3 |
| **Total, in-scope** | **37** (of 41) | **≈40** |
| named-only (ch3-m6, ch4) | 4 | 0 now |

**≈40 primitives for 37 edged competencies** — countable, bounded, one per
`competency × asset-variant`. (Was ≈41; the `contrast-pdtc-pdto` collapse
removed one — see new-vs-reframe call 2.) Growth beyond this happens only
for a genuinely new combination, human-confirmed.

## Phase 2 findings

The model **describes every ch3-m2 / m3 content slide**: each maps to one
competency and one primitive, no competency is orphaned, and no primitive
was invented. Two schema gaps and five content notes came out of it.

Slides are named by their **Workshop label** — Chapter 3 is
*"Sliding-Stem Spring & Diaphragm Actuator Maintenance"*; the two modules
are *"Fisher 657 — Identify & Bench Set"* (5 pages) and *"Fisher 657 —
Mount & Service"* (5 pages). Internal pipeline numbers are in parens for
file reference only.

### Schema gaps — resolved (Franz, 2026-09-06)

**FINDING 1 — Check slides don't fit "one edge, one primitive." APPROVED
option (a).** The Check Your Knowledge slides after *"Fisher 657 — Identify
& Bench Set"* (`1400-100`) and *"Fisher 657 — Mount & Service"* (`1400-108`)
are modelled as an `applies` edge with `primitive: null` naming every
competency the check tests. Folded into `curriculum-development.md` →
Placement edge → "Assessment edges."

**FINDING 2 — Multi-asset slides. APPROVED.** The `asset` field may be a
**list** — but only for a genuine *parallel* figrow (several figures shown
side by side at once, as one authored layout): *"Fisher 657 — Identify &
Bench Set"* page 5 of 5 (`1400-098` — but see Finding 3), *"Fisher 657 —
Mount & Service"* page 1 of 5 (`1400-101`) and page 5 of 5 (`1400-106`). A
list is **not** for an ordered sequence — that is a `progression` matter on
the edge. Folded into `curriculum-development.md` → Instructional primitive.

### Content notes — not model problems, logged for the owner

**FINDING 3 — `mnt.actuator.set-travel` has no adequate asset. RESOLVED as
an open content item, not a schema decision.** See the dedicated resolution
below. Franz reviewed both existing assets and found neither good enough;
the primitive stays `status: pending` pending a redraw. Does not block
Phase 3.

**FINDING 4 — `used-by` staleness.** `ch3-cmp-benchset-adjustment-setup`
lists `used-by: [98, 99, 114]`; the slide that was `1400-099` was folded
into *"Fisher 657 — Identify & Bench Set"* page 5 of 5 (`1400-098`) during
the ch3-m2 consolidation. Once placement edges exist, `used-by` is
derivable from them and the hand-maintained list can be dropped or
regenerated.

**FINDING 5 — Duplicate caution.** `mnt.actuator.relieve-spring-before-casing`
is taught on *"Fisher 657 — Identify & Bench Set"* page 2 of 5 (`1400-095`,
`introduces`) and again on *"Fisher 657 — Mount & Service"* page 4 of 5
(`1400-105`, modelled `develops`). If the second adds nothing beyond the
disassembly-sequence framing, it is `applies`, not `develops` — or the two
consolidate. (A later Chapter 3 module, out of Phase 2 scope, carries the
same warning a third time — `1400-110`.)

**FINDING 6 — Borderline competency. RESOLVED in Phase 3 — merged.**
*"Fisher 657 — Mount & Service"* page 2 of 5 (`1400-102`, *"Re-Checking
Travel on the Valve"*) — the on-valve friction content. With Phase 3's map,
`mnt.actuator.bench-set` is `introduced` in ch3-m1 and `developed`
progressively (ch3-m2 direct-acting off the valve → ch3-m3 on-valve
friction → ch3-m6 full deadband). The friction content is one `develops`
step in that arc, not a separate `mnt.actuator.friction-effect` competency.

**FINDING 7 — Known slide-content bug carried forward.** *"Fisher 657 —
Mount & Service"* page 3 of 5 (`1400-103`) — "fine travel adjustment at the
locknut and jam nut" is not Fisher IM terminology (already flagged in the
ch3 Component Index notes). Slide-content fix for whoever next touches
that module; not a curriculum-layer issue.

### FINDING 3 — resolution

Franz's first read was that Fisher IM **Figure 4** covers deadband and the
deck photos cover only basic travel measurement, which would make the two a
*simple-then-complete* teaching sequence. **On inspection the premise does
not hold.** Four sources agree:

- **The 657 IM itself** (D100306X012): *"Figure 4. Bench Set Adjustment"*
  sits inside the *Spring Verification* section (pp 5–7) — apply the lower
  bench-set pressure, check for first stem movement, adjust the spring
  adjuster, mark the valve stem. *"Figure 5. Typical Valve Response to
  Deadband"* is a **different figure** in the separate *Deadband
  Measurement* section (p 10).
- **The ch3 Component Index**: `ch3-cmp-benchset-adjustment-setup` labels
  Figure 4 as SPRING ADJUSTER / LOWER-UPPER BENCH SET LOADING PRESSURE /
  RATED VALVE TRAVEL MEASURE / MARK VALVE STEM HERE. Deadband is a separate
  component citing Figure 5.
- **The bench-set-657 topic index** (full 32-page read): same split.
- **The slide itself**: *"Fisher 657 — Identify & Bench Set"* page 5 of 5
  (`1400-098`) — its own comment earmarks both the deck photos and Figure 4
  to the same component; the slide teaches "mark at lower bench set /
  measure at upper = rated travel." No deadband.

Figure 4 and the deck photos teach the **same procedure at the same
depth** — off-valve bench-set travel verification — differing only in
medium (2018 line drawing vs. two photos). So there is **no
ordered-sequence schema construct motivated by this slide**, and the
genuine "building in depth" arc that does exist for `mnt.actuator.bench-set`
(*"Actuator Action, Fail Mode & Bench Set"* → *"Identify & Bench Set"* page
4 of 5 → *"Mount & Service"* page 2 of 5 → the ch3-m6 deadband slide) is
already carried by `progression` (`introduces → develops`), one primitive
variant per step.

**Franz's call (2026-09-06): neither existing asset was good enough.** The
deck photos are functional but thin; Figure 4 is too cluttered for even a
subject-matter expert to parse quickly. A content gap, not a medium
preference.

**CLOSED 2026-09-06.** A house SVG redraw of Figure 4 was produced
(`sourced/benchset-fig4-redraw.svg` — Fig 4 as geometric source per Style
Guide §5.8; keeps spring adjuster / both stem marks / the rated-travel
dimension; drops the yoke hatching, travel-indicator scales, DVC bracket,
and the ①②③④ note web). Franz reviewed it directly and **selected it over
both prior options**. `prim.mnt.actuator.set-travel.spring` moved to
`status: exists`. Wiring the redraw onto the slide (replacing the two deck
photos) awaits its own slide-edit go-ahead — it does not touch the Stage 3
authoring gate.

---

## Open content items

Tracked, not blocking. These are content tasks, not schema decisions.

| Item | Where | Status |
| --- | --- | --- |
| **`prim.mnt.actuator.set-travel.spring` redraw** — house SVG redraw of Fisher IM Figure 4. | `sourced/benchset-fig4-redraw.svg` | **DONE** — Franz selected it 2026-09-06 over both prior options; primitive moved to `status: exists`. Wiring it onto *"Fisher 657 — Identify & Bench Set"* page 5 of 5 (replacing the two deck photos) awaits a separate slide-edit go-ahead. |
| **ch1 / ch2 Component Index** — build a Component Index for ch1 + ch2 to the ch3 standard so the `exists*` valve-body primitives carry full provenance. | ch1-m1, ch2-m1…m7 | **DONE** — `Component Index — 14101 ch1-ch2.md`, 25 components, committed 2026-09-06. The `exists*` rows now have real provenance. Minor items in its own "Discrepancies" section. |
| **Finding 5** — possible redundant caution: *"Mount & Service"* page 4 of 5 (`1400-105`) may be `applies`, not `develops`, of `mnt.actuator.relieve-spring-before-casing`. | ch3-m3 | for the ch3-m3 owner |
| **Finding 6** — RESOLVED in Phase 3: friction is a `develops` step of `mnt.actuator.bench-set`, not a separate competency. | ch3-m3 | closed |
| **Finding 7** — "jam nut" terminology on *"Mount & Service"* page 3 of 5 (`1400-103`) is not Fisher IM wording. | ch3-m3 | slide-content fix |
| **ch2-m4 disassembly-safety asymmetry** — folded into `mnt.valve-body.disassemble-body` rather than split out as its own `caution` competency (the actuator side splits it out). | ch2-m4 | watch — no change requested |
| **ch1 slide-14 upgrade / EZ IM Fig 12 redraw candidate** — see the ch1-ch2 Component Index "Discrepancies". | ch1-m1 / ch2-m2 | logged, no action requested |

## Gate log

### Phase 2 — closed (Franz, 2026-09-06)

The schema **held** — it describes every ch3-m2 / m3 content slide with no
invented structure. The two schema gaps are resolved and folded into
`curriculum-development.md`: Finding 1 (assessment edges =
`primitive: null`, `progression: applies`) and Finding 2 (`asset` may be a
list, for parallel figrows only). Finding 3 needed no schema change — it
was a content gap, now **closed** (redraw produced and approved 2026-09-06).
Findings 4–7 are content-owner items.

### Phase 3 — closed (Franz, 2026-09-06)

The Day-One competency map under Option C — 41 competencies, progression
edges for the 11 in-scope modules, Axis-C pass (no gaps), three
reconciliations (all "real corrections, not bookkeeping" — Franz). No
modules flagged. **Role routing: R1** — all four roles route to every
competency; 14101 is one fixed-programme hands-on course, no per-role
filter inside it. The ch2-m4 disassembly-safety asymmetry stays a watch
item, no change requested.

### Phase 4 — closed (Franz, 2026-09-06)

**Delivered:** a primitive per competency — ch3-m1 in full YAML, ch2 /
ch1-m1 as a registry table. **≈40 primitives for 37 edged competencies**
(≈41 at the gate; the `contrast-pdtc-pdto` collapse below removed one).

**Follow-ons — both now DONE** (2026-09-06, neither touched the Stage 3
authoring gate):
- **ch1/ch2 Component Index** built to the ch3 standard —
  `Component Index — 14101 ch1-ch2.md`, 25 components. The `exists*`
  valve-body primitives now carry real provenance.
- **`prim.mnt.actuator.set-travel.spring`** — the redraw was produced,
  Franz selected it over both prior options, and the primitive is now
  `status: exists`.

**New-vs-reframe calls:** three confirmed as recorded. **Call 2 corrected**
after the Component Index build: `contrast-pdtc-pdto` is **one** primitive
at two edges, not two primitives — Franz confirmed the collapse
("exactly the kind of correction the phase-gate discipline is meant to
produce").
The `exists*` provenance gap is logged as the ch1/ch2 Component Index
follow-on — real editorial work, not rushed to close this gate.

### Phase 5 — NOT STARTED (held pending a separate decision)

Phase 5 wires origination-mode Stage 1/2 to consume this map. The pathway
gates it behind an **explicit widening of the Stage 3 authoring gate**,
which is currently open only for the bounded ch3-m2 A/B test. Franz's
instruction at the Phase 4 gate (2026-09-06): that widening is a
**separate, deliberate decision in its own right, not a side effect of the
Phase 4 approval**. No Phase 5 work — no design, prototyping, or
implementation — begins until the widening is explicitly requested and
confirmed on its own terms.

**Not gated by Phase 5:** the ch1/ch2 Component Index follow-on — that is
source-indexing work, the same kind as the ch3 Component Index, and needs
no authoring gate. The `prim.mnt.actuator.set-travel.spring` redraw stays a
logged open content item on its own timing.
