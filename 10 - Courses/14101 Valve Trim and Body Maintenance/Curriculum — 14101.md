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

> [!note] Status — Phase 2 of the Instructional Primitives Pathway
> This is the **ch3 retrofit**: the already-built, already-reviewed content
> of modules **ch3-m2** and **ch3-m3** expressed in the curriculum schema
> (`00 - Project/curriculum-development.md`). It authors **nothing** — every
> competency, primitive, and edge below describes a slide that already
> shipped. Its job is to prove the schema holds against real content and to
> surface where it doesn't. Phase 3 extends this file to the full Day-One
> arc.
>
> **Scope:** ch3-m2 (slides 94–98, check 100) and ch3-m3 (slides 101, 102,
> 103, 105, 106, check 108). ch3-m1 and ch3-m4/m5/m6 are out of scope
> (m4–m6 under the full stop).

The schema: a **competency** is a flat skill ID (`mnt.actuator.set-travel`).
A **primitive** is one authored figure for one `competency × asset-variant`.
A **placement edge** is `module × roles × competency × progression →
primitive`. See `curriculum-development.md` for the full record shapes and
the four roles.

**Role assumption for this retrofit:** ch3 is Day-One content, which serves
all four roles, so every edge below carries
`roles: [maint-tech, inst-tech, sizing-eng, operator]`. Phase 3 confirms
role routing per module.

---

## Competencies

All under `mnt.actuator.*`. Eight, derived from the ch3-m2/m3 key concepts.

```yaml
- id: mnt.actuator.direct-acting-principle
  statement: >
    Explain how a direct-acting, spring-opposed diaphragm actuator strokes
    under loading pressure and why its stem fails up on loss of air.
  bloom: understand

- id: mnt.actuator.identify-sd-construction
  statement: >
    Name the parts of a spring-and-diaphragm actuator top to bottom — the
    two diaphragm casings, diaphragm and plate, spring and spring seat,
    spring adjuster in the yoke — and state what the spring adjuster sets.
  bloom: remember

- id: mnt.actuator.relieve-spring-before-casing
  statement: >
    Relieve all actuator-spring compression with the spring adjuster before
    removing any diaphragm-casing cap screw.
  bloom: apply

- id: mnt.actuator.read-nameplate
  statement: >
    Read an actuator nameplate for the values that define a correct bench
    set: type and size, bench-set range, rated travel, maximum valve stem
    diameter.
  bloom: remember

- id: mnt.actuator.bench-set
  statement: >
    Explain bench set as the friction-free initial spring compression that
    fixes the diaphragm-pressure range for rated travel, and read the lower
    and upper bench-set pressures on a travel-vs-pressure plot.
  bloom: understand

- id: mnt.actuator.set-travel
  statement: >
    Set an actuator's stroke so the travel between the end-of-travel marks
    equals the nameplate rated travel.
  bloom: apply

- id: mnt.actuator.mount-on-valve
  statement: >
    Mount a spring-and-diaphragm actuator on the bonnet — valve plug and
    stem pushed down, actuator hoisted on, yoke locknut run down, actuator
    and valve stems not yet connected.
  bloom: apply

- id: mnt.actuator.install-stem-connector
  statement: >
    Install the two-piece stem connector with at least one stem diameter of
    thread engagement on each stem, then confirm full stroke against rated
    travel.
  bloom: apply

- id: mnt.actuator.torque-diaphragm-casing
  statement: >
    Reassemble the diaphragm casing clean and dry to the manual's crossing
    pattern and two-round final torque.
  bloom: apply
```

---

## Primitives

One per `competency × asset-variant`. Every one is `status: exists` — this
retrofit invents none.

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
  status: exists
  asset: [image159.png, benchset-measure-travel.png]   # mark-stem close-up + measure-travel photo (slide 098)
  provenance: ch3-cmp-benchset-adjustment-setup
  redrawRecord: existing deck photos (crop), no redraw; burned-in deck arrows kept
  variantTag: spring
  # SEE FINDING 3 — the Component Index and the template proof (tp-017) use
  # Fisher IM Fig 4 for this; production slide 098 uses the two photos above.

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

Ten primitives for nine competencies: `mnt.actuator.bench-set` and
`mnt.actuator.relieve-spring-before-casing` each carry two variants (both
flagged below). `mnt.actuator.direct-acting-principle` carries **none** —
it is taught in ch3-m1 and only *applied* here (see edges).

---

## Placement edges

### ch3-m2 — "Fisher 657 — Identify & Bench Set" (slides 94–98)

```yaml
- { module: ch3-m2, roles: [maint-tech, inst-tech, sizing-eng, operator],
    competency: mnt.actuator.direct-acting-principle, progression: applies,
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
    competency: mnt.actuator.bench-set, progression: introduces,
    primitive: prim.mnt.actuator.bench-set.graph-friction-free, slide: 97 }

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
| `ch3-cmp-da-schematic` | `mnt.actuator.direct-acting-principle` *(competency lives in ch3-m1; ch3-m2 applies it)* |

---

## Phase 2 findings

The model **describes every ch3-m2 / m3 content slide**: each maps to one
competency and one primitive, no competency is orphaned, and no primitive
was invented. Two schema gaps and five content notes came out of it.

### Schema gaps — need a decision before Phase 3

**FINDING 1 — Check slides don't fit "one edge, one primitive."**
Slides 100 and 108 assess a module's competencies but teach none and use no
primitive. The retrofit models them as an `applies` edge naming several
competencies with `primitive: null`. Options: (a) accept `primitive: null`
on assessment edges; (b) add an `assessment-item` primitive type; (c) model
checks outside the competency graph entirely. Recommend (a) — smallest,
and a check genuinely *is* an application of its module's competencies.

**FINDING 2 — Multi-asset slides.** Slides 98, 101, and 106 are two-figure
`figrow` layouts. The retrofit treats each as **one primitive whose `asset`
is a list**, on the basis that a figrow is one authored layout. Confirm the
`asset` field may be a list, or split these into one primitive per figure
with a shared competency.

### Content notes — not model problems, logged for the owner

**FINDING 3 — Slide 98 asset vs. the Phase 1 worked example.** The Phase 1
worked example gave `prim.mnt.actuator.set-travel.spring` the asset
`657-benchset-adjustment-fig4.png` (Fisher IM Fig 4) — which is what the
template proof `tp-017` uses and what the Component Index recommends
(`delivery: existing figure (crop) — 657 IM Fig 4`). Production **slide 98
actually uses two deck photos** (`image159.png` + `benchset-measure-travel.png`).
Which asset is canonical for this primitive is a human call. If Fig 4 wins,
slide 98 is a candidate rebuild; if the photos win, the Phase 1 worked
example needs the one-line correction.

**FINDING 4 — `used-by` staleness.** `ch3-cmp-benchset-adjustment-setup`
lists `used-by: [98, 99, 114]`; slide 99 was folded into 98 during the
ch3-m2 consolidation. Once placement edges exist, `used-by` is derivable
from them and the hand-maintained list can be dropped or regenerated.

**FINDING 5 — Duplicate caution.** `mnt.actuator.relieve-spring-before-casing`
is taught on slide 95 (ch3-m2, `introduces`) and again on slide 105
(ch3-m3, modelled `develops`). If slide 105 adds nothing beyond the
disassembly-sequence framing, it is `applies`, not `develops` — or the two
slides consolidate. (Slide 110 carries the same warning in a later module,
out of Phase 2 scope.)

**FINDING 6 — Borderline competency.** Slide 102's "on the valve, full
travel occurs at bench set plus friction ÷ diaphragm area" is modelled as
`mnt.actuator.bench-set` `develops`. It could instead be its own
competency (`mnt.actuator.friction-effect`). Judgment call — kept under
`bench-set` for now because the graph is the same lineage and the slide
title is "Re-Checking Travel on the Valve."

**FINDING 7 — Known slide-content bug carried forward.** Slide 103's "fine
travel adjustment at the locknut and jam nut" is not Fisher IM terminology
(already flagged in the ch3 Component Index notes). Slide-content fix for
whoever next touches ch3-m3; not a curriculum-layer issue.

## Gate verdict

The schema **held** — it describes finished content with no invented
structure. It is **not "wrong"** in the sense the pathway's stop condition
means. But Findings 1 and 2 are genuine unspecified constructs (assessment
items, composite figures) that Phase 3 will hit immediately, so they want a
decision now. Findings 3–7 are content-owner items, not blockers.

**Recommend:** resolve Findings 1 and 2, note the call on Finding 3, then
open Phase 3.
