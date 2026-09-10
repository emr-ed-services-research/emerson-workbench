---
title: Emerson Workbench — Curriculum Development Layer
type: reference
tags:
  - project
  - design
  - curriculum
updated: 2026-09-09
---

# Emerson Workbench — Curriculum Development Layer

> [!note] Status — Phase 1 of the Instructional Primitives Pathway
> This document holds the **schema** for the curriculum layer and **one
> worked example**. It is the deliverable of Phase 1 of the pathway Franz
> approved on 2026-09-06 (5-phase plan; area segments baked in; strictly
> serial phases). Nothing above the course level is authored here, and no
> rollup logic exists yet. Like `teaching-philosophy.md`, this is Franz's
> current working vision, not department consensus.

## Relationship to `teaching-philosophy.md`

`teaching-philosophy.md` governs **slide-level composition** — what goes on
a single slide, what goes in the context pane, how a figure supports the
hands-on work happening at the bench. This document governs the layer
above it: **multi-module arcs** — what competency a module teaches, where
it is first taught versus revisited, which roles a course routes toward it,
and the finite unit of authored content beneath a competency.

The two sit **alongside** each other. Neither supersedes the other. A
slide is composed per `teaching-philosophy.md`; the competency that slide
serves, and the primitive it draws on, are described here.

## The layer model

Foundation to roof:

| Layer | What it is | Modelled as data? |
| --- | --- | --- |
| **Purpose** | Teach four roles the skills their jobs need | No — it is the reason the rest exists |
| **Domain objectives** | Overarching objectives per domain (maintenance, instrumentation, engineering) | Sketched, empty — filled when a second course exists to validate a rollup |
| **Courses & modules** | A course (14101) and its modules | Yes |
| **Placement edges** | `module × roles × competency × progression → primitive` | Yes |
| **Instructional primitives** | `competency × asset-variant` — the finite authored unit | Yes |
| **Source Library / Component Index** | The assets a primitive wraps | Exists today; gains a `serves:` back-pointer |

The **hands-on workshop is the delivery format**, not an enrichment layer
(`teaching-philosophy.md`). That constraint is why role never dilutes
depth — see Roles below.

---

## Competency ID namespace

A competency ID is **flat and location-independent**. It names a skill; it
does **not** encode which course, module, or day teaches it. Placement is a
separate relationship (see Placement edges).

```
<domain>.<area>.<slug>
```

**Domains** (short codes; the long form is the `domain` value on
`course.json` and chapter records):

| Code | Domain |
| --- | --- |
| `mnt` | maintenance |
| `inst` | instrumentation |
| `eng` | engineering (sizing and selection — "engineering courses" internally) |
| `ife` | instructing/pedagogy — how to *deliver* technical training, not a technical skill itself. Added 2026-09-09 for the IfE (Instructing for Emerson) course. Kept specific to IfE rather than a generic `trg` — generalize only if a second instructor-development course actually shows up (per the project's own "bake in known values, don't guess ahead of real demand" convention). |

**Areas** — the three are known and enumerable, so they are fixed now, not
deferred (retrofitting an ID scheme is expensive — the `1400 → 14101`
correction touched ~2,000 references):

| Area | Covers |
| --- | --- |
| `actuator` | spring-and-diaphragm and piston actuators — mechanism, maintenance, calibration, travel |
| `valve-body` | globe / rotary valve bodies — trim, packing, disassembly, reassembly |
| `positioner` | positioners and digital valve controllers — mounting, configuration, calibration |
| `orientation` | *(`ife` only, added 2026-09-09)* reading a training solution, the TLO/ELOs, the Five Tenets framework itself — what the instructor receives and orients from |
| `preparation` | *(`ife` only)* JSA, risk level, safety requirements, training-area setup |
| `delivery` | *(`ife` only)* TPCD, Show–Tell–Do, communication, questioning, training aids, checking student learning |
| `development` | *(`ife` only)* self-observation, feedback, the instructor development plan |

An area may appear under more than one domain (`mnt.positioner.*` for bench
maintenance, `inst.positioner.*` for configuration). The domain says what
kind of work; the area says on what. The four `ife` areas trace directly to
the Five Tenets' own "Where it lives" grouping — the organizing structure
IfE's own vault already uses — the same way `actuator`/`valve-body`/
`positioner` trace to real equipment categories.

**Slug** — a short kebab-case skill name, verb-led where natural
(`set-travel`, `identify-trim`, `configure-dvc`).

**Stability rule.** A competency ID is stable for the life of the
curriculum. If a skill is re-scoped, the ID stays and its `statement`
changes; a genuinely different skill gets a new ID.

---

## Record shapes

### Competency

```yaml
id: mnt.actuator.set-travel        # <domain>.<area>.<slug>
statement: >                       # one sentence, what the learner can do
  Set an actuator's stroke so the travel between the end-of-travel marks
  equals the nameplate rated travel.
bloom: apply                       # remember | understand | apply | analyze | evaluate | create
```

Domain and area are **in the ID**, not repeated as fields. `bloom` reuses
the existing Stage 2 cognitive-level axis (`instructional-design.js`).

### Instructional primitive

One authored artifact for one competency at one asset-variant. **No role,
no context, no progression** — those live on the placement edge or the
course.

```yaml
id: prim.mnt.actuator.identify-sd-construction.cutaway
competencyId: mnt.actuator.identify-sd-construction
status: exists                              # exists | pending  (built vs. planned but not yet authored)
asset: image155.png                         # one filename, OR a list for a true parallel figrow (Finding 2)
provenance: ch3-cmp-657-assembly            # Component Index entry
redrawRecord: >                             # the three-reason redraw rule, applied per primitive
  Existing figure, no redraw — first-party colour sectional, cleaner than
  the IM parts drawings. (Style Guide §5.8 — no redraw reason applies.)
variantTag: cutaway                         # optional; only when a competency has a real asset split
```

- **`asset` may be a single filename or a list.** A list is only for a
  genuine *parallel* figrow — several figures shown side by side at once, as
  one authored layout (Finding 2). It is **not** for an ordered sequence
  where one figure precedes another for a pedagogical reason; that is a
  `progression` matter on the placement edge, not a primitive.
- `status: pending` primitives carry `assetRef`, `provenance`, and
  `redrawRecord` as `TBD` until authored; a `status: exists` primitive must
  name a real asset and a real Component Index entry.
- **`provenance: original`** (added 2026-09-09, for IfE) — the one exception
  to "must name a real Component Index entry." Every primitive built so far
  traces to an external source figure being redrawn or reused; IfE's own
  methodology content (a TPCD diagram, a Five-Tenets summary graphic) has no
  such external source — Steve invented the pedagogical model itself. A
  primitive with `provenance: original` is asserting exactly that: authored
  fresh for this course, nothing to cite, `redrawRecord` not applicable.
  This does **not** apply to IfE's practice-slice content, which traces to
  real 14101 Component Index entries exactly like any other course's
  primitives — see "Cross-course provenance" below.

A new primitive is created **only** for a genuinely new `competency ×
asset-variant`. It is a human-curated call: an agent may propose "new
primitive vs. reframe of an existing one"; a person confirms. Precedence is
never adjudicated live by an agent.

### Placement edge

```yaml
moduleId: 14101/direct-acting-actuator
roles: [maint-tech, inst-tech, sizing-eng, operator]   # explicit and mandatory — no "all" default
competencyId: mnt.actuator.set-travel                  # or a list, on an assessment edge
progression: introduces               # introduces | develops | applies
primitiveId: prim.mnt.actuator.set-travel.spring       # null on an assessment edge (Finding 1)
```

`roles` is always written out. When a module serves all four, list all
four; when a competency is routed to a subset, the edge names the subset.
There is no implicit default to interpret later.

**`roles: null`** (added 2026-09-09, for `ife`) — the defined value for an
edge in a domain that doesn't route across the four roles at all, not an
omission. `mnt`/`inst`/`eng` are role-routed domains and their edges keep
`roles` mandatory and explicit exactly as above; `ife` is not role-routed
(see "IfE does not get a fifth role" below) and its edges carry
`roles: null` instead — asserting explicitly that no role-routing
relationship exists here, the same way `primitiveId: null` already asserts
"no primitive" on an assessment edge rather than the field being left out.

**Assessment (Check Your Knowledge) edges** carry `progression: applies`,
`primitiveId: null`, and a `competencyId` list naming every competency the
check tests. A check is an application of its module's competencies, not a
teaching artifact — so it has no primitive (Finding 1).

**Progression:**

| Value | Meaning |
| --- | --- |
| `introduces` | first time the learner meets this competency |
| `develops` | taught again with genuinely new content (a different mechanism, a harder case) |
| `applies` | exercised, not taught — includes prerequisites carried in from an earlier module |

"Reinforced" is deliberately **not** a value — it hid the difference
between *re-taught-with-variation* (`develops`) and *merely-exercised*
(`applies`).

### Module additions

```yaml
assumes: [14101/easy-e-valve-body]     # prerequisite modules — this one does not re-teach their competencies
servesRoles: [maint-tech, inst-tech, sizing-eng, operator]
minutesTarget: 180   # real scheduled classroom minutes — supplied, never estimated
```

`minutesTarget` (added 2026-09-10) — the missing input that let origination-mode
Stage 1 author IfE Day 1's "Contents" module to ~10-15 minutes of content
against a half-day block. Stage 1's only volume control before this was a
topic-coverage heuristic ("how many concepts does the objective need"),
completely decoupled from how long the module is actually scheduled for; it
had nothing to budget against. This field is that budget. It must come from
the course's own design docs (a vault day/module time breakdown, a schedule
Franz/Steve supply) — never estimated by the pipeline itself, the same rule
`objective`/`levelTarget`/`stakes` already follow. May also be set per
chapter or per day (`days[].minutesTarget`) for a cold-start arc cut that has
no pre-scoped modules yet; a module-level value always wins when both are
present. Omit entirely when no real number exists yet — Stage 1 falls back
to the old slide-count heuristic rather than guessing a number itself. See
`buildStage1OriginatePrompt`/`buildStage1OriginateArcPrompt`/
`buildStage2OriginatePrompt` in `PipelineConsole/src/main/runners/prompts.js`
for exactly how it's used.

### Module additions — `activities[]`

```yaml
activities:
  - id: "d1-tenets-sort"
    type: discussion   # discussion | small-group | application-exercise | case-walkthrough | qa
    afterConcept: 2    # 0-based index into keyConcepts this activity runs after
    minutes: 18
    title: "Tenet Sort"
    description: >
      In pairs, sort five short instructor-behavior scenario cards by which
      tenet each demonstrates; class debriefs the ambiguous ones.
    materials: ["Scenario cards (one per tenet)"]
    sourceNote: "Cards derived from the Five Tenets table's own 'Instructor's move' column — no new facts, a live application of what's already sourced."
```

Added 2026-09-10, same directive as `minutesTarget` (Content-Depth fix),
explicit follow-up: a real half-day of instructor-led delivery is not
made of slide/context-pane volume alone — most of a live session's time is
discussion, demonstration, and guided practice that a slide deck was never
meant to carry (`teaching-philosophy.md`: "the class is the instructor and
the hardware... not the slide deck"). Before this field existed, that time
had no home in the schema at all — a module's schedule was implicitly "the
instructor will talk," which is not a design, it's an unexamined assumption.

`activities[]` is a **sibling of `keyConcepts`**, not a slide — it does NOT
get its own `ife-NNN.html` file or page number; `afterConcept` places it in
the taught sequence for scheduling purposes (the Day 1 schedule table in
`Curriculum — <course>.md`), not in the live shell's page sequence. Whether
and how an activity should ever render as its own interstitial in the
course shell (`course.js`) is a separate, larger question, **not decided
here** — this field is data for planning/facilitator reference today, the
same way a module's `stakes` field is prose that never becomes a slide.

Every activity must be **additive and sourced**, same standard as slide
content: a real discussion/application/case-walkthrough design, tied to
real source material where it makes a claim (the course's own practice
vehicle, a Component Index entry, established general instructional-design
technique) — never invented busywork, and never a fabricated example, fact,
or quote. `sourceNote` names what grounds it, the same role `sourceNote`
plays on a `keyConcepts` entry.

### Course additions

```yaml
domain: maintenance          # already on chapter records; promoted to the course
tier: introductory           # introductory | advanced
```

### Component Index addition

Each existing record gains one forward pointer:

```yaml
serves: [mnt.actuator.set-travel]
```

That is the entire change to the Source Library. It is not restructured;
indexing simply becomes competency-driven rather than deck-driven from
Phase 3 on.

### Cross-course provenance (added 2026-09-09, for IfE)

A primitive's `provenance` naming a Component Index entry does **not**
require the primitive and the Component Index entry to belong to the same
course. This was already the shared-library point — one Component Index
entry can back primitives in any number of courses' own registries — but
until IfE it had never actually happened; the oil-and-gas catalogue (144
figures, zero primitives) was the proof that the *library* side works, with
no second course yet drawing from it. IfE's practice-slice primitives are
the first real instance of the *consuming* side: an IfE primitive's
`provenance` names an existing 14101 Component Index entry directly — no
new Component Index entries are created for content IfE borrows from
14101, only for IfE's own source material (the rubric, the outline — see
[[Source Library]] conventions; IfE gets its own Component Index entries
the same way any course's source manual does).

---

## Findings from the Five Tenets pilot (2026-09-09)

A bounded origination-mode pilot (`10 - Courses/_Origination Test —
ife-five-tenets/`, full report in that folder's `PILOT-NOTES.md`) put one
real IfE competency through this schema end to end. `provenance: original`
worked cleanly, with no friction. It also surfaced gaps this schema
doesn't cover yet — logged here so they aren't rediscovered from scratch
by the next IfE work:

- ~~The Axis-3 role vocabulary (`nomenclature`, `contrast`...) is written
  around technical/mechanical content~~ — **closed 2026-09-09.**
  `CONCEPT_ROLES.nomenclature.treatment` in `instructional-design.js`
  widened to name `.slide--tmpl-table` as an alternative when the concept
  has no physical figure to label — no new template, reusing what already
  existed and was already proven (both Five Tenets slides). `contrast`
  needed no code change: its treatment already named "a comparison table"
  as an option, the gap was only that nothing had used it — the Five
  Tenets module is that first real use. `instructional-design.test.js`
  (6/6) still passes after the change.
- ~~`DOMAINS` / `DOMAIN_VERBS` in `PipelineConsole/src/main/
  instructional-design.js` has no `ife` entry~~ — **closed 2026-09-09**,
  same day, as its own directive. `ife` now has a real verb menu (proposed
  and approved before being wired in), grounded in vocabulary already used
  across the IfE vault. Verified against the Five Tenets pilot's own
  hand-written objective via the real `objectiveVerbOk` check (not a
  manual read-through) — passes cleanly, no rewording needed — and the
  existing `instructional-design.test.js` suite (6/6) still passes. See
  `PILOT-NOTES.md` Finding 3 for the verification transcript.
- ~~A placement edge's `roles` field is "explicit and mandatory — no 'all'
  default," and IfE has no honest value to put there~~ — **closed
  2026-09-09.** `roles: null` is now the defined value for a non-role-
  routed domain's edges, documented in "Placement edge" above and applied
  to the real IfE registry. `servesRoles` on the module record itself is
  still open — see "IfE does not get a fifth role" above.
- ~~IfE has no enumerated `area` vocabulary the way `mnt`/`inst` do~~ —
  **closed 2026-09-09.** Four areas added to the Areas table above
  (`orientation`, `preparation`, `delivery`, `development`), traced to the
  Five Tenets' own "Where it lives" column. The pilot's placeholder
  competency ID (`ife.methodology.five-tenets-framework`) is renamed to
  `ife.orientation.five-tenets-framework` in the real registry
  (`Curriculum — IfE.md`); the pilot's own record stays as originally
  written — a historical snapshot, not rewritten in place.

All four gaps listed above are now closed. One further pilot finding not
listed here (`PILOT-NOTES.md` Finding 6 — the primitive `asset` field
being stretched by pure-table content with no figure at all) stays open:
flagged, not actioned, nothing broke, no fix proposed yet.

---

## Roles

Educational Services trains toward exactly four roles:

| Slug | Role |
| --- | --- |
| `maint-tech` | Maintenance technician |
| `inst-tech` | Instrument technician |
| `sizing-eng` | Sizing and selection engineer |
| `operator` | Operator (control-room) |

**Role is a routing filter, not a depth dial.** A learner taught a
competency gets the same hands-on bench instruction regardless of role —
performing the work directly is what makes any of the four better at their
job. Role decides only *which* competencies a course routes a cohort
toward. It therefore lives on the placement edge (`roles`) and the module
(`servesRoles`), and **never on a primitive**.

Operator platforms (DeltaV, Ovation) are not roles and not separate
curricula — they are the console an operator happens to sit at. Operator
training stays bounded to the same core actuator / instrument competencies
the other three roles already need.

**IfE does not get a fifth role (decided 2026-09-09).** An IfE participant
isn't a new kind of technician being routed toward a subset of technical
competencies — they're learning to *teach* people who hold these roles.
Forcing that into the existing role list would blur what role has always
meant here (a routing filter over technical competencies). IfE sits at a
different tier of the schema instead: a course *about* instructing, whose
own competencies live under the new `ife` domain rather than under any of
the four technical roles. This is a decision, not yet a fully worked-out
consequence — how a "different tier" actually interacts with the rest of
the schema (does `servesRoles` even apply to an IfE module? almost
certainly not, since it has nothing to do with routing technical
competencies) is real follow-up work once IfE's first real primitives are
authored, not resolved here.

**Follow-up resolved (2026-09-09), placement-edge half only:** a
placement edge's `roles` field now has a defined answer for `ife` —
`roles: null`, see "Placement edge" above. `servesRoles` on the *module*
record is still unresolved; `ife` modules simply haven't carried it either
way yet.

---

## Worked example — `mnt.actuator.set-travel`

The reference competency, expressed end to end through every layer, using
the corrected Day-One structural labels: modules are named by **mechanism
type** (Direct-Acting / Reverse-Acting / Double-Acting), not by model
number. The model numbers (657, 667, 585) are the units on the bench
within each module, not the module's identity.

> Module IDs below are illustrative. The Day-One module set and its ID
> scheme are finalised in **Phase 3**; Phase 1 only needs the schema to
> hold.

### The competency

```yaml
id: mnt.actuator.set-travel
statement: >
  Set an actuator's stroke so the travel between the end-of-travel marks
  equals the nameplate rated travel.
bloom: apply
```

Distinct from `mnt.actuator.bench-set` (calibrating the diaphragm-pressure
range for rated travel — a spring-actuator concept only). Field technicians
conflate the two; the competency layer keeps them separate. `set-travel`
was chosen as the worked example precisely because it spans all three
mechanism types and exercises the placement edge across modules.

### The primitives

```yaml
- id: prim.mnt.actuator.set-travel.spring
  competencyId: mnt.actuator.set-travel
  asset: benchset-fig4-redraw.svg
  provenance: ch3-cmp-benchset-adjustment-setup
  redrawRecord: >
    House SVG redraw of Fisher 657/667 IM Figure 4 "Bench Set Adjustment"
    (40A8715-B). Figure 4 as the geometric source; simplified for legibility
    per Style Guide §5.8 (source figure confirmed hard to parse by an SME).
    Keeps the spring adjuster, both stem marks, and the rated-travel
    dimension; drops the yoke hatching, travel-indicator scales, DVC bracket,
    and the ①②③④ note web. Selected by Franz 2026-09-06 over the shipped
    deck photos and Fig 4 as-is. NOT yet placed on a slide — that is a
    separate slide-edit go-ahead.
  variantTag: spring
  status: exists           # redraw approved 2026-09-06

- id: prim.mnt.actuator.set-travel.piston
  competencyId: mnt.actuator.set-travel
  assetRef: TBD             # authored during Phase 4 / ch4 Stage 3
  provenance: TBD           # Component Index entry to be added for the piston procedure
  redrawRecord: TBD
  variantTag: piston
  status: pending
```

Two primitives, not three. The **spring** primitive covers both
direct- and reverse-acting actuators — the same procedure appears on the
reverse-acting screwdriver-method slide as *"the same procedure with a
marked screwdriver/scale instead of a travel indicator,"* which is a
slide-level framing difference, not a new primitive. Its asset is a
**house redraw of Fisher IM Figure 4**, approved by Franz 2026-09-06 after
he found neither the shipped deck photos nor Fig 4 as-is adequate
(`10 - Courses/14101 Valve Trim and Body Maintenance/Presentation/build/assets/sourced/benchset-fig4-redraw.svg`).
The **piston** primitive is genuinely new: a double-acting actuator has no
bench set, sets travel against travel stops and a scale rather than a
loading-pressure range, and uses a different stem connector — a real
`competency × asset-variant` split.

### The placement edges

```yaml
- moduleId: 14101/direct-acting-actuator
  roles: [maint-tech, inst-tech, sizing-eng, operator]
  competencyId: mnt.actuator.set-travel
  progression: introduces
  primitiveId: prim.mnt.actuator.set-travel.spring

- moduleId: 14101/reverse-acting-actuator
  roles: [maint-tech, inst-tech, sizing-eng, operator]
  competencyId: mnt.actuator.set-travel
  progression: develops           # reverse-acting variation; screwdriver/scale method
  primitiveId: prim.mnt.actuator.set-travel.spring   # same primitive, reframed at the slide

- moduleId: 14101/double-acting-actuator
  roles: [maint-tech, inst-tech, sizing-eng, operator]
  competencyId: mnt.actuator.set-travel
  progression: develops           # piston actuator; no bench set, different hardware
  primitiveId: prim.mnt.actuator.set-travel.piston
```

### The Component Index back-pointer

`ch3-cmp-benchset-adjustment-setup` gains:

```yaml
serves: [mnt.actuator.set-travel]
```

### What this example demonstrates

- The competency ID is flat (`mnt.actuator.set-travel`) and appears
  unchanged in three modules — placement is entirely in the edges.
- `develops` vs `applies` earns its keep: both revisits are
  *re-taught with new content*, not just exercised.
- The primitive count is bounded and countable: one competency, two
  primitives, because there are two real asset-variants — not one per
  module, not one per role.
- A new primitive (`.piston`) is warranted by a mechanism difference a
  human can point at, not by a new course or a new role.
- The Source Library change is one line.

---

## What Phase 1 does not do

- No domain-objective content (`mnt`, `inst`, `eng` overarching objectives
  stay empty slots).
- No Day-Two / Day-Three content, and no change to the ch3-m4 / m5 / m6
  full stop.
- No rollup validation (module → course → domain).
- No agent involvement.
- No change to 14101 slide files, the `1400-` slide prefix, or the
  stabilised templates and Style Guide.
- The control-room delivery **context** is not modelled — it is added as a
  course/module property when Day-Three positioner work begins.

## Provenance

Phase 1 of the Instructional Primitives Pathway (Franz-approved
2026-09-06). Fork resolutions folded in: areas baked in (`actuator` /
`valve-body` / `positioner`); this doc lives in `00 - Project/` alongside
`teaching-philosophy.md`; one primitive registry per course; `roles`
explicit and mandatory on every edge; Phases 1 and 2 strictly serial.
Next: Phase 1 gate review, then Phase 2 (retrofit the schema against the
existing ch3 content).
