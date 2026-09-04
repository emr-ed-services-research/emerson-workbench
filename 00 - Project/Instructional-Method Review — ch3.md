---
title: Instructional-Method Review — ch3
type: plan
status: staging
tags:
  - project
  - pipeline
  - instructional-design
  - transient
updated: 2026-09-03
---

# Instructional-Method Review — ch3

> [!warning] Transient — graduates then retires
> A continuation of the Stage 2 instructional-design work (see
> `00 - Project/Source Grounding — Staging Plan.md` §5). The **endpoint** (§3
> new attributes, §4 Workshop verdict) graduates into [[teaching-philosophy]],
> [[Course Porting Pipeline]], [[System Architecture]], and the Console; then
> this file is deleted. **This review authorizes reaching a recommendation
> only — never a direct Workshop change** ([[System Architecture]] Layer 2 is
> locked; a "flex" verdict would be a separate approved step).

> [!check] Endpoint approved & mechanism shipped (Franz, 2026-09-03)
> Part 1 (Axis C `role` + module `stakes` / `buildsOn` + Template 6 caution
> card + the Stage 3 process rules) is built into the console and the engine;
> ch3 is being re-authored to add the tags. Part 2 verdict (**HOLD**) stands
> and awaits graduation into [[System Architecture]] Layer 2.
> **One caveat carried:** composing a *formative check slide* where a module
> lacks one means Stage 3 adds a slide the source deck does not have. Handled
> as a Stage 3 instruction for now; if it proves awkward (deck slide-numbering,
> the module spine), promoting formative checks to first-class is the contained
> Layer-2 follow-up noted in §4.

Evidence base: the **ch3 archive material** (D750004, D750020, D750066 —
Fisher Educational Services student guides), the **current Workshop template**,
and **modern online instructional-design practice** for technical/procedural
content. The question is not which is best — it is which *method* qualities are
worth carrying forward, and whether each fits inside the current slide format
(**Bucket A**, → a Stage 2/3 attribute) or needs a different container
(**Bucket B**, → evidence for a Workshop-flex case).

---

## 1. The three methods, characterized

### 1a. Archive method (Fisher Ed. Services student guide, ~1990s)

A **self-paced blended unit**: a reading guide (the document) + a companion
videotape (the visual channel) + a pre-test and post-test + peer/supervisor
fallback. The reading guide is the *notebook and reference*, not the whole
course. Structure of one unit:

| Element | What it does |
| --- | --- |
| **Objectives & Abstract** (front) | *Scope* (a prose paragraph placing the unit in a progression — "introductory… foundation for a progressive understanding… proceed to sizing if you desire"); *Intended Audience*; *Prerequisite*; a paragraph *Unit Objective*; then hierarchical *Specific Objectives* written with graded verbs ("Describe… Use… Select… Evaluate…"). |
| **Unit Outline** | A block diagram of the unit's topics — an advance organizer. |
| **How to Study This Unit** | An explicit learner protocol: examine objectives + outline first → optional pre-test → read, taking notes as questions arise → watch the videotape → post-test → compare pre/post. |
| **Pre-Test** | ~15 items; framed as prediction + self-diagnosis, "compare later to see how your understanding changed." |
| **Body** | Continuous prose under a **repeating margin-label scaffold** that names each instructional move: *Overview* (a 2–3 sentence italic advance-organizer) → topic labels (*Direct Action*, *Reverse Action*…) → **Nomenclature** (name every part on a callout cutaway) → **Applications / Examples** (concrete: "PDTC valve → fails open", two contrasting worked sizing examples). Direct and reverse are laid out as **matched facing pages**. |
| **Post-Test** | ~15 items, mostly *discrimination and transfer* ("Given a PDTC valve and an actuator where increasing pressure opens it, identify the statement that is **not** true"), not recall. Mailed for a scored certificate. |
| **Glossary + Index** | Just-in-time definitions; random-access reference. |

**Method strengths:** explicit objectives-and-scope framing; a repeating
rhetorical scaffold that signals what each passage is *for*; nomenclature as a
deliberate pre-training step; contrast by parallel layout; transfer-level
assessment; a stated study protocol; pre-test as activation.

**Method weaknesses (on its own terms):** one summative test pair, no
distributed retrieval; worked examples are shown but never *faded*; heavy
continuous prose with low signalling inside a passage; assessment is still
multiple-choice, not scenario performance.

### 1b. Current Workshop template

An **instructor-led presentation surface**: visual-only slides on a fixed
canvas + a right-hand context pane of terse key concepts that highlight to
track position + a day/chapter/module left nav + presenter mode. Text the
instructor would say aloud is never on the slide (avoids the redundancy
effect by design). Five reusable templates (labelled diagram, data table,
comparison table, figure row, figure-row-with-lead-table) + shell-rendered
day/chapter/module intro cards. A module's spine is fixed:
**intro card → page 0 → … → page N → check** (one Check-Your-Knowledge slide,
always last). The post-class *reading* takeaway is a separately generated
**Bench Book** ([[Roadmap]] Stage 2), not the slides.

Now also carries, per the Stage 2 work: module `domain` + `levelTarget`,
per-concept Bloom `level` + source-component `sources`.

**Method strengths:** genuine adherence to coherence / signalling / redundancy
principles; segmenting; contrasting cases (figure-row template); doing-centered
objectives; position tracking; the visual/text channel split matched to
instructor delivery.

**Method gaps:** modules open cold on a mechanism — no activation, no stated
stakes, no prediction; retrieval practice is a single end-of-module MCQ,
nothing formative mid-module and nothing spaced across a chapter; the
worked-example progression across m2→m5 is real but unmarked, so Stage 3
can't make later modules appropriately terser; Stage 3 knows a concept's
cognitive *level* but not its *rhetorical role* (definition vs caution vs
mechanism vs application), which is what the archive's margin scaffold makes
explicit; CYK items are recognition, not situations.

### 1c. Modern online instructional design (technical / procedural)

The consensus for procedural and troubleshooting content:

- **Cognitive load management** (Sweller; Mayer): segmenting, pre-training on
  names/terms, signalling, coherence, avoid narrated on-screen text.
  *Workshop already does most of this well.*
- **Problem-centred / activation** (Merrill's First Principles; Cathy Moore's
  action mapping): open with the job task or its consequence, not the theory;
  strip content to what the task needs.
- **Worked examples with guidance fading** (van Merriënboer 4C/ID): full
  worked example for novices → progressively remove scaffolding → independent
  practice. Just-in-time procedural info (checklists / job aids).
- **Retrieval and spaced/interleaved practice** (Roediger; Bjork): frequent
  low-stakes recall *through* a unit, revisited later, mixed across related
  topics — not one test at the end.
- **Contrasting cases** (Schwartz & Bransford): juxtapose near-identical
  examples so the distinguishing feature becomes noticeable.
- **Scenario-based practice** for decision skills: put the learner in the
  situation and let a choice have a consequence.
- **Performance support + spaced follow-up**: the job aid at point of need;
  a nudge days after the course.

---

## 2. Findings, sorted

| # | Finding (and where it comes from) | Bucket | Disposition |
| --- | --- | --- | --- |
| F1 | **Concept rhetorical role.** The archive's margin scaffold names each move (Overview / Nomenclature / Application / …). Stage 3 currently gets cognitive `level` but not role, so it can't tell a *caution* from a *definition* from a *mechanism*. | **A1** | New per-concept attribute `role` (§3). |
| F2 | **Nomenclature as a deliberate pre-training step** — name the parts before explaining the mechanism. | **A1 + A2** | Expressed by `role: nomenclature`; A2 sequencing rule (§3). |
| F3 | **Lead with the stakes / a prediction** (Merrill activation; action mapping; the archive *Scope* abstract + pre-test). Workshop modules open cold. | **A1** | Module attribute `stakes`; concept `role: prime` (§3). |
| F4 | **Worked-example fading across modules** (4C/ID). m2→m5 is a faded repeat but unmarked. | **A1** | Module attribute `buildsOn` (§3). |
| F5 | **Contrast by parallel layout** (archive facing pages; contrasting-cases research). Some ch3 concepts are contrast pairs (da/ra schematic) but unmarked. | **A1 (optional)** | Concept attribute `contrastWith` — recommended *deferred*; Stage 3 can usually infer it (§3). |
| F6 | **Distributed / formative retrieval practice** — recall through a module, not one MCQ at the end. | **A1 + A2** | `role: check` concepts authored as question-template pages, positioned through the module; A2 rule (§3). |
| F7 | **Transfer-level assessment.** The archive post-test is discrimination/transfer; Workshop CYK is recognition. | **A2** | Stage 3 rule: for `apply`+ modules, write CYK stems as situations (§3). |
| F8 | **A `caution` needs a distinct visual treatment** (safety/failure warnings — "relieve spring compression first *or the casing is thrown off*"). | **A1 template** | New slide template `.slide--tmpl-caution`; a Cartridge/template add, not a Workshop-shape change (§3). |
| F9 | **Explicit objectives + outline as a study step.** The archive front-loads them as "examine these first." | **—** | Non-finding for Workshop: the module-intro card already does this; the instructor frames it live. |
| F10 | **Student-guide-as-notebook** (learner writes notes in it). Workshop has no learner-writing surface. | **—** | Out of Workshop's deliberate scope — the learner's notes and the takeaway reference are the **Bench Book**, not the presentation surface. |
| F11 | **Continuous-prose synthesis reading surface** — a connected multi-paragraph explanation the learner reads at their own pace. Workshop's canvas + terse pane genuinely cannot hold this. | **B** | The one true Bucket-B finding — **but already delegated** to the Bench Book by the existing architecture ([[Roadmap]] Stage 2: "Generate Bench Notes / Bench Book from the same source"). See §4. |
| F12 | **Just-in-time glossary / term definitions at first use.** | **A2 (minor)** | Optional: a concept could list `terms` it introduces, surfaced in the pane or linked to [[Glossary]]. Low priority; not adopted now. |

**Sort result:** 8 findings compose within the current format (F1–F8), 2 are
non-findings (F9–F10), 1 is minor and deferred (F12), and **1 is genuine
Bucket B (F11) but is already covered by a planned artifact outside Workshop.**

---

## 3. ENDPOINT PART 1 — new Stage 2/3 attributes

Adopt the following. Same treatment as `domain` / `levelTarget` / `sources`:
authored by Stage 2, human-approved, lint-checked, consumed by Stage 3.

### Axis C — `role` (per key concept) · **adopt**

A closed vocabulary naming the concept's instructional function. It is
orthogonal to Axis B `level` (cognitive demand) and Axis A `sources` (which
figure). Stage 3 uses it to choose the slide's framing and treatment.

```jsonc
{ "t": "...", "pages": [n], "level": "apply", "sources": ["…"], "role": "caution" }
```

| `role` | Slide treatment Stage 3 applies |
| --- | --- |
| `prime` | An opening question / prediction / stakes framing — *before* the mechanism. Question-template page, not the summative check. |
| `nomenclature` | A labelled-parts figure (`.slide--tmpl-diagram`), recognition-level; sequence it first among the module's teaching concepts. |
| `mechanism` | A how-it-works diagram or schematic (the default for `understand`). |
| `procedure` | The ordered steps, in the order a technician does them. |
| `application` | A concrete case / scenario — the mechanism used in a real situation. |
| `contrast` | Parallel this-vs-that layout (figure row or compare table). |
| `caution` | The `.slide--tmpl-caution` treatment (F8) — a warning, the failure it prevents, distinct visual weight. |
| `check` | A formative retrieval item. Tagged where a concept already reads as one; a genuine mid-module retrieval *slide* is deferred (see §4). |

### Module attributes · **adopt**

| Attribute | Type | Meaning / use |
| --- | --- | --- |
| `stakes` | string (one sentence) | The on-the-job consequence of getting this module wrong. Shown on the module-intro card as the orienting hook, above the objective. Drives any `role: prime` concept. |
| `buildsOn` | array of module-ids | This module is a faded repeat of / depends on those modules. Stage 3 goes terser — it does not re-teach what `buildsOn` already covered (e.g. `ch3-m4.buildsOn = ["ch3-m2"]`). |

### Deferred · **do not adopt yet**

- `contrastWith` (per concept) — real (F5) but Stage 3 can usually detect a
  contrast pair from two concepts with mirrored structure. Revisit if Stage 3
  misses them in practice.
- `terms` (per concept, F12) — minor; the [[Glossary]] + the pane already
  cover it well enough.

### Stage 3 process rules (A2 — no schema change) · **adopt (as shipped)**

1. **Re-order toward the soft sequence** `prime → nomenclature → mechanism →
   procedure`/`application` → `check`, within the existing slides only.
2. **`caution` concept → the caution card** (Template 6). **`application`
   concept → a concrete scenario**, not an abstract restatement.
3. **Transfer-level CYK:** for `apply`+ modules, the `check` slide's stem is a
   *situation* ("you are at the bench and …"), not "which statement is true".
4. **Faded modules:** where `buildsOn` is set, Stage 3 omits re-explanation of
   the referenced material and spends the saved room on what is new.
5. **No new slide files.** A missing `prime` is covered by the intro card's
   `stakes`; a missing formative `check` is **noted, not built** — pending the
   deferred first-class-formative-check decision (see §4).

### Console / schema changes this implies

- `course-model.js` — parse `role` on each concept; parse `stakes` /
  `buildsOn` on each module.
- `instructional-design.js` — add the `role` vocabulary; a helper
  `roleOk(role)`.
- `moduleStage2Completeness` (strict) — every concept has a valid `role`;
  `stakes` present; `buildsOn` ids resolve.
- `buildStage2Prompt` — author `role` / `stakes` / `buildsOn`; the sequencing
  and check rules above.
- `buildStage3Prompt` — pass `role` per slide + the module `stakes` /
  `buildsOn`; the treatment table above.
- One new template — `.slide--tmpl-caution` in `emerson-workbench.css` §7c +
  `TEMPLATES.md` (Template 6). A Cartridge/template addition.
- `teaching-philosophy.md` — an "Axis C — concept role" subsection.

---

## 4. ENDPOINT PART 2 — Workshop flex-or-hold verdict

### Verdict: **HOLD**

The current Workshop template holds. No finding requires a change to its
canvas / context-pane / left-nav shape.

**Reasoning:**

1. **Every carry-forward method quality composes inside the current format.**
   F1–F8 become concept/module attributes, Stage 3 rules, or one new slide
   template — none touches the container's shape. The archive's real
   instructional strengths (the role scaffold, nomenclature-first, contrast
   layout, activation, transfer assessment) are all *arrangement and framing*
   decisions, exactly what Axis C is for.

2. **The one finding that genuinely needs a different container — continuous
   prose (F11) — is already assigned to one.** The architecture always
   intended a separate student-facing **Bench Book** generated from the same
   source ([[Roadmap]] Stage 2). Continuous reading, random-access reference,
   a place for the learner's own notes: that is the Bench Book's job, not the
   presentation surface's. Building a reading mode into Workshop would
   duplicate the Bench Book and violate the "materials never compete with
   hands-on work for attention" principle in [[teaching-philosophy]].

3. **Workshop already meets or beats typical e-learning on the load and
   multimedia principles** — coherence, signalling, the no-narrated-text
   redundancy rule, segmenting, contrasting cases. Its gaps are activation and
   retrieval cadence, both of which are *content-composition* gaps (what
   Stage 2 tags and Stage 3 builds), not *container* gaps.

4. **The instructor closes the gaps the archive's protocol closed with
   documents.** "How to study this unit", peer/supervisor discussion, framing
   the objectives — an instructor-led course does these live. Workshop does not
   need to encode them.

**One noted enhancement, explicitly not required now:** the module spine
hard-codes a single check, last. First-class *formative* checks (progress
tracking, a TOC marker, mid-module placement) would be a small, well-scoped
Layer-2 change. The zero-Workshop-change path — author formative checks as
question-template pages (`role: check`) — is what §3 adopts. If that proves
awkward in practice, promoting formative checks to first-class is a contained
follow-up, not a re-litigation of this verdict.

---

## 5. What graduates where (when this file retires)

- **Axis C `role` + `stakes` + `buildsOn`** → `teaching-philosophy.md` (new
  subsection), [[Course Porting Pipeline]] Stage 2, the Console
  (`course-model.js`, `instructional-design.js`, prompts, completeness lint),
  `course.json` schema, `TEMPLATES.md` (Template 6 caution card).
- **The Stage 3 process rules (§3 A2)** → [[Course Porting Pipeline]] Stage 3 +
  `buildStage3Prompt`.
- **The HOLD verdict + its reasoning** → [[System Architecture]] Layer 2
  ("why the template holds — instructional-method review, 2026-09-03"), so it
  is not re-litigated.
- Then delete this file and fold the checklist item into
  `Source Grounding — Staging Plan.md`.
