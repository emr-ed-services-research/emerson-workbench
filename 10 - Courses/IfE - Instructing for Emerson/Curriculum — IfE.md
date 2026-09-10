---
title: Curriculum — IfE
type: reference
tags:
  - curriculum
  - pipeline
course: Instructing for Emerson (IfE)
updated: 2026-09-10
---

# Curriculum Registry — IfE

> [!note] Status — Day 1 built in full, structure corrected twice (2026-09-10)
> Pulled from the IfE Vault's `Day 1 - Foundations.md` (status: stub — a
> draft flow, not a finished script; built proportionate to that, not
> padded). **In scope:** all of Day 1 — **1 module** ("Contents", id
> `d1-foundations`) holding **10 pages in one flat sequence**, 4 of its 10
> concepts carrying a real competency. **Not started:** Days 2–8. Schema
> in `00 - Project/curriculum-development.md`.
>
> **Second correction, same day:** the module was first split into a
> `pages` array plus a separate `check: [8]` array. The shell's `seqOf()`
> always plays a module's check *after all* of its pages regardless of
> the check's real page number, so the Five-Tenets check played after all
> 6 remaining topics instead of immediately after "Received vs.
> Delivered." Found on the walkthrough screenshot, not assumed. Fixed by
> folding `ife-008` into `pages` at its true position (`[5,6,7,8,9,10,
> 11,12,13,14]`) and dropping the `check` field — the module now has no
> separate check step at all, `ife-008` flows as an ordinary page. The
> stale check-interstitial copy ("Then continue to the next module.")
> disappears as a direct consequence: that text lives in `course.js`'s
> `renderCheck()`, which is never invoked once a module has no `check`
> field, not in `ife-008.html` itself.

The schema: a **competency** is a flat skill ID
(`ife.orientation.five-tenets-framework`). A **primitive** is one authored
artifact for one `competency × asset-variant`, `provenance: original`
here because there is no external source to cite. A **placement edge** is
`module × roles × competency × progression → primitive`.

**Structural correction, same day.** Day 1's 8 sub-topics (Welcome, Five
Tenets, Show-Tell-Do, Reading a Training Solution, The Prime Question,
Objectives, Myths, Meet Your Slice) were first built as **8 separate
modules** under the "Foundations" chapter — wrong. The vault states one
single unified "Module objective" for all of Day 1, and 14101's own ch1
already established the rule this violated: *"no modules of only one or
two slides"* (three thin ch1 modules were consolidated into one for
exactly this reason). Corrected to **one module**, id `d1-foundations`,
display title **"Contents"** — deliberately not "Foundations" again, so
it reads as distinct from the chapter card of the same name, not
"Foundations containing Foundations." All 9 real pages + the 1 check now
live in that one module's `keyConcepts` sequence; no slide content
changed, only the module wrapper around it.

The 4 real competencies below all now place against this **one**
`moduleId` (`d1-foundations`) — this is not a new pattern. It matches the
already-shipped 14101 precedent exactly: `ch3-m1` alone carries six
separate placement edges to six different competencies in the real
registry. One module teaching several competencies is normal; the earlier
8-module split was the anomaly, not this.

**Resolved 2026-09-09:**
- **Area:** `ife.orientation.*` / `ife.delivery.*` — of the four `ife`
  areas enumerated in `curriculum-development.md`'s Areas table.
- **`roles`:** every edge below carries `roles: null` explicitly — the
  defined value for a non-role-routed domain, not an omission.

**Still a working identifier, not decided:** the module ID
(`d1-foundations`) and the `ife-` slide prefix — the same footing
14101's Day-One module IDs had before its own Phase 3.

**Framing-only concepts get no competency, on purpose.** 6 of the 10
`keyConcepts` entries (Welcome, Prime Question, Myths, Meet Your Slice,
plus the check) carry no competency — real content, real slides, but
none teaches an evaluable skill; they orient. Same treatment Module 0's
own content has always had. Only 4 concepts (Five Tenets ×2 content
concepts, Show-Tell-Do, Reading-a-Training-Solution, Objectives) get the
full competency/primitive/edge treatment below.

**Open question, logged, not acted on here:** does any chapter anywhere
— 14101 or planned IfE — ever actually hold more than one module? If
never, the chapter/module distinction may be worth collapsing
engine-wide later. See `00 - Project/Open Questions.md`.

---

## Competencies

```yaml
- id: ife.orientation.five-tenets-framework
  bloom: understand
  statement: >
    Restate the Five Tenets of IfE and distinguish which the instructor
    receives with the assigned slice (context, objectives) from which the
    instructor performs and is scored on (preparation, delivery,
    self-development).

- id: ife.delivery.show-tell-do-overview
  bloom: understand
  statement: >
    Explain the Show-Tell-Do method — demonstrate the whole task, explain
    the key points, then let the learner perform with feedback to
    proficiency — and why a hands-on slice should run Do-heavy.
  note: >
    Introduced here at understand-level, as a lens. Days 2-3 (Course
    Delivery, TPCD) are where this is expected to develop into real reps
    — not built yet, flagged so the next module doesn't re-introduce it.

- id: ife.orientation.read-training-solution
  bloom: understand
  statement: >
    Locate the TLO, ELOs, performance objectives, Check-Your-Knowledge
    bank, and safety brief inside a real training solution, walked live
    against the 1400 course.

- id: ife.orientation.read-objectives
  bloom: understand
  statement: >
    Recognize the three elements of a well-formed training objective —
    Action, Conditions, Standard — in a real example.
```

---

## Primitives

```yaml
- id: prim.ife.orientation.five-tenets-framework.overview
  competencyId: ife.orientation.five-tenets-framework
  status: exists
  asset: inline-table (slide ife-006)
  provenance: original
  redrawRecord: not applicable — provenance: original
  variantTag: overview

- id: prim.ife.orientation.five-tenets-framework.received-vs-performed
  competencyId: ife.orientation.five-tenets-framework
  status: exists
  asset: inline-svg diagram (slide ife-007)
  provenance: original
  redrawRecord: >
    Original house diagram — no source figure exists (Steve's own
    framework). Rebuilt 2026-09-09 from a comparison table: the Stage 3
    visual-concept check (Course Porting Pipeline.md) found this concept
    is a real input -> action -> assessment flow (received with the slice
    -> delivered by the instructor -> scored by the Rubric), not a second
    tenet-vs-tenet comparison. Execution rebuilt a second time same day
    (inconsistent box sizes, broken baseline, three unrelated fill
    styles, no bullets, cramped takeaway) to one shared box template,
    color used once and meaningfully. Wording corrected "Performed" ->
    "Delivered by the instructor". Icons added same day (approved),
    house-drawn, same restraint as Module 0's pictograms. Rebuilt a
    fourth time 2026-09-10 — Geist-structure + Emerson-blue-as-one-accent
    (IfE-only, see "IfE — Course Home.md" Design direction): boxes 1/2
    are equals and go neutral; box 3 keeps the single accent, now blue
    rather than orange. Full history in this file's git log and the
    slide's own header comment.
  variantTag: received-vs-performed

- id: prim.ife.delivery.show-tell-do-overview.flow
  competencyId: ife.delivery.show-tell-do-overview
  status: exists
  asset: inline-svg diagram (slide ife-009)
  provenance: original
  redrawRecord: >
    Original house diagram — no source figure (Steve's own method). A
    genuine 3-stage sequence, built as three boxes + arrows. Deliberately
    NOT color-differentiated the way ife-007's diagram is: there, one
    stage (Scored) was genuinely distinct and got the single accent; here
    all three stages are equal steps in one method, so all three stay
    neutral — only the sequence-position numbers are blue, as a role
    marker, not a meaning signal.
  variantTag: flow

- id: prim.ife.orientation.read-training-solution.checklist
  competencyId: ife.orientation.read-training-solution
  status: exists
  asset: inline-table (slide ife-010)
  provenance: original
  redrawRecord: >
    Not a redraw — deliberately a checklist, not a labelled diagram, even
    though "reading a training solution" was flagged during the
    Foundations diagnosis as a diagram candidate. On reading the actual
    source (1400 Course Overview.md) the real activity is a LIVE
    walkthrough against whichever 1400 chapter the instructor picks that
    day — there is no single fixed image for this slide to anchor markers
    to. A checklist of what to find is the honest shape; forcing a
    diagram here would mean faking a generic placeholder or committing to
    one arbitrary chapter as if it were the only example.
  variantTag: checklist

- id: prim.ife.orientation.read-objectives.table
  competencyId: ife.orientation.read-objectives
  status: exists
  asset: inline-table (slide ife-012)
  provenance: original
  redrawRecord: >
    Not a diagram — Action/Conditions/Standard are three co-equal parts
    of one sentence, not a sequence. A flow diagram would misrepresent
    them as happening one after another the way Show-Tell-Do genuinely
    does; a table is the honest shape.
  variantTag: table
```

**Slide renumbering (2026-09-10):** Five Tenets shifted `ife-005…007` ->
`ife-006…008` (check now `ife-008`) to make room for `ife-005`
("Welcome to IfE") ahead of it — the vault's actual agenda order has
Welcome before Five Tenets, and the historical build order had it
reversed. No competency, primitive, or edge content changed, only which
file each `slide:` reference names.

## Placement edges

All against **one** `moduleId` (`d1-foundations`) — see the structural
correction above.

```yaml
- moduleId: d1-foundations
  roles: null   # ife is not role-routed — see curriculum-development.md "Placement edge"
  competencyId: ife.orientation.five-tenets-framework
  progression: introduces
  primitiveId: prim.ife.orientation.five-tenets-framework.overview
  slide: ife-006

- moduleId: d1-foundations
  roles: null
  competencyId: ife.orientation.five-tenets-framework
  progression: develops
  primitiveId: prim.ife.orientation.five-tenets-framework.received-vs-performed
  slide: ife-007

- moduleId: d1-foundations
  roles: null
  competencyId: [ife.orientation.five-tenets-framework]
  progression: applies
  primitiveId: null
  slide: ife-008
  note: "check-your-knowledge — assessment edge, primitiveId null, per
    curriculum-development.md Finding 1 (14101 Phase 2)"

- moduleId: d1-foundations
  roles: null
  competencyId: ife.delivery.show-tell-do-overview
  progression: introduces
  primitiveId: prim.ife.delivery.show-tell-do-overview.flow
  slide: ife-009
  note: "introduces at understand-level; Days 2-3 (not yet built) are
    expected to carry this to develops/applies with real reps"

- moduleId: d1-foundations
  roles: null
  competencyId: ife.orientation.read-training-solution
  progression: introduces
  primitiveId: prim.ife.orientation.read-training-solution.checklist
  slide: ife-010

- moduleId: d1-foundations
  roles: null
  competencyId: ife.orientation.read-objectives
  progression: introduces
  primitiveId: prim.ife.orientation.read-objectives.table
  slide: ife-012
```

No Component Index back-pointer for any of these — `provenance: original`
primitives are exempt. The 6 framing-only concepts (Welcome, Prime
Question, Myths, Meet Your Slice, plus the check itself) have no edges of
their own beyond the one check edge above — no competency to place.

## Day 1 — Contents, in taught order

One module (`d1-foundations`, display title "Contents"), 10 pages in one
flat sequence — no separate check step, `ife-008` is page 4 of 10:

| # | Concept | Slide | Competency | Note |
| --- | --- | --- | --- | --- |
| 1 | Welcome to IfE | `ife-005` | — framing only | The accidental-trainer problem; "good" = the Rubric |
| 2 | The Five Tenets (overview) | `ife-006` | `ife.orientation.five-tenets-framework` | |
| 3 | Received vs. Delivered | `ife-007` | `ife.orientation.five-tenets-framework` | develops |
| 4 | Check — Which Tenet | `ife-008` | (assessment edge) | |
| 5 | Show–Tell–Do | `ife-009` | `ife.delivery.show-tell-do-overview` | Introduces; Days 2-3 develop it |
| 6 | Reading a Training Solution | `ife-010` | `ife.orientation.read-training-solution` | Checklist, not a diagram |
| 7 | The Prime Question | `ife-011` | — framing only | One line in the source; built that thin |
| 8 | Objectives, Briefly | `ife-012` | `ife.orientation.read-objectives` | Table, not a diagram — co-equal parts, not a sequence |
| 9 | Myths Quick-Hit | `ife-013` | — framing only | Learning styles, the learning pyramid, PowerPoint-is-not-training |
| 10 | Meet Your Slice | `ife-014` | — framing only | Afternoon agenda; hands-on/live |

## Verification

```
$ node "40 - Engine/render/render-check.mjs" --course "IfE - Instructing for Emerson"
  [ok]   ife-001.html … ife-014.html
RENDER: 14 slides rendered, 0 warn
```

Confirmed by eye against `_verify-shots/`, every new slide, not just the
automated pass.

**Two real bugs caught during the original Day 1 build, both fixed before
that report:** five slide files shipped without `assets/slides.js`,
breaking 16:9 embed sizing (caught on screenshot, not render-check); and
`course.json` was edited without regenerating `course-data.js` (what the
shell actually boots from), so the first walkthrough opened on stale data
and got stuck. Both fixed and re-verified at the time.

**Structural-fix verification (2026-09-10), same rigor:** after
collapsing 8 modules to 1 and regenerating `course-data.js` again, a
fresh full live-shell walkthrough — cold boot -> title splash -> Continue
-> Start the course -> `Next` through the single "Contents" module's
full page sequence (Welcome -> Five Tenets overview -> Received vs.
Delivered -> Check -> Show-Tell-Do -> Reading a Training Solution ->
Prime Question -> Objectives -> Myths -> Meet Your Slice, then stops) —
confirmed live in headless Chrome, zero console errors, one continuous
module instead of 8 separate module-intro interstitials.

**Confirmed unaffected by this fix:** Module 0 (`moduleZero`) is a
separate top-level construct outside `days[].chapters[].modules[]`
entirely — it was already "one container, many slides" (the title slide
and roadmap are pages within it, never separate modules). Nothing about
it changed.

**Check-position bug found and fixed (2026-09-10), same verification
pass:** that walkthrough's own screenshot of the check step showed
`ife-008` playing after all 9 other pages, not right after "Received vs.
Delivered" — the module's `pages`/`check` split (`pages:[5,6,7,9,...],
check:[8]`) hit `seqOf()`'s real behavior of always appending a module's
check last, regardless of the check's true page number. Reported
honestly rather than silently reordered, since the split had been
explicitly specified. Fixed: `pages` now reads
`[5,6,7,8,9,10,11,12,13,14]`, the `check` field is gone, `course-data.js`
regenerated. Re-verified — `render-check.mjs` 14/14 clean, and a fresh
headless-Chrome walkthrough traced the real hash sequence
(`d1-foundations/0`…`/9`) confirming `ife-008` now lands at `/3`,
immediately after `ife-007` ("Received vs. Delivered") at `/2` and
immediately before `ife-009` ("Show-Tell-Do") at `/4` — no `.chk-card`
interstitial anywhere in the sequence, zero console errors.

## Content-depth fix (2026-09-10)

Franz found this module reads as ~10-15 minutes of content against a
scheduled half-day. Investigated by reading the actual pipeline code, not
inferring: origination Stage 1 (`buildStage1OriginatePrompt`,
`PipelineConsole/src/main/runners/prompts.js`) had **no concept of clock
time at all** — its only volume control was a topic-coverage heuristic
("typically 4-6 content slides"), decoupled from how long the scheduled
block actually is. Confirmed absent from `curriculum-development.md` and
`Course Porting Pipeline.md` too — not a code-only gap, a schema-wide one.
Stage 2 was cleared: it faithfully authors whatever slots Stage 1 hands
it and has no mechanism to add its own depth or slot count.

**Fixed:** a `minutesTarget` field (`curriculum-development.md`, "Module
additions") now feeds Stage 1 a real scheduled-minutes number to budget
slot count and per-slot depth against, plus a softer Stage 2 nudge toward
worked examples/discussion framing over bare statements when the target
is generous. `d1-foundations` now carries `minutesTarget: 180` —
**provisional/rough, not Steve's sign-off** — sourced from the vault's
own "Half a day of instruction, then a working afternoon"
(`Day 1 - Foundations.md`), a standard half-day block net of one break;
subject to change once the real 8-day conversion timing is finalized.

**A real tension surfaced applying it, not silently resolved:** the same
vault file states this exact block is meant to be *"a lens, not a
lecture series,"* with Tenets 3-5 and Show-Tell-Do's real development
explicitly deferred to Days 2-6 (`Five Tenets of IfE.md`,
`Show-Tell-Do.md`'s own competency note: "introduced here... Days 2-3 are
where this is expected to develop into real reps"). So most of this
module's thinness may be intentional design against the vault's own
stated intent, not a pipeline gap — and the other ~165 minutes of the
half-day may legitimately be live-facilitated time (discussion, the
"walk the 1400 deck live" exercise `ife-010` anchors) never meant to be
slide/context-pane volume at all, per `teaching-philosophy.md`'s "the
class is the instructor... not the slide deck." Flagged for Franz's read
rather than guessed at.

**One concrete, sourced enrichment applied** as a demonstration of the
new mechanism: `ife-006`'s Five Tenets table gained a **Rubric** column
(§3a / §3d, §2c/g / §2 (core) / §3 (core) / —), pulled directly from real
data already sitting unused in `Five Tenets of IfE.md`'s own table — not
invented. Screenshot-verified, not just render-check.

**Deliberately not done, and why:** a 3-item version of the check
(`ife-008`) was drafted then reverted — `gallery.css`'s
`.slide--role-check` layout (`grid-template-rows: auto 1fr auto`) is
sized for exactly one prompt/options/reveal group; three stacked would
overflow or misalign. A real multi-item variant is a template-gallery
change, not a content edit — parked, not built. No new practice/
application slots were added pending the lens-vs-lecture question above;
inventing a second worked objective example with no verified real 1400
source example on hand would have been fabrication, not authoring.

## Content-depth fix, addendum — activities and the real Day 1 schedule (2026-09-10)

Franz's pushback on the section above, correctly: "a lens, not a lecture
series" is a reason the module doesn't need more *slides* — it is not a
reason its scheduled time gets to stay undesigned. If a concept takes 5
minutes to explain, the other ~40 minutes of its block is real
instructional time that needs an actual designed discussion, exercise, or
walkthrough, or the module isn't finished, it's a gap with a plausible
excuse attached. That distinction — thin slides by design vs. undesigned
time — is the fix below.

**Schema addition: `activities[]`.** A sibling array to `keyConcepts`,
documented in full in `curriculum-development.md` "Module additions —
`activities[]`". Each entry: `id`, `type` (discussion / small-group /
application-exercise / case-walkthrough / qa), `afterConcept` (0-based
index into `keyConcepts`), `minutes`, `title`, `description`,
`materials`, `sourceNote`. Not a slide — no page number, no
`ife-NNN.html` file; it's scheduling/facilitator data, the same register
as a module's `stakes` prose. Whether it should ever render as its own
interstitial in the live shell is a separate, larger question, not
decided here.

**Four real activities added to `d1-foundations`**, each tied to real
source material, none invented:

1. **Tenet Sort** (discussion, 18 min, after concept 2 / before the
   check) — pairs sort five short instructor-behavior scenario cards by
   tenet; class debriefs the ambiguous ones. Cards are the Five Tenets
   table's own "Instructor's move" column restated as scenarios, plus the
   check's own existing scenario — no new facts.
2. **Show-Tell-Do Worked Walkthrough: Bench-Setting a Fisher 657**
   (application-exercise, 30 min, after concept 4) — cadre demonstrates
   the real 8-step Spring Verification procedure (Fisher 657 IM) on a
   staged bench setup (SHOW), explains why bench set matters and the real
   friction-correction gotcha from the same IM (TELL), then participants
   rotate through the staged stations to practice it with feedback (DO).
   Sourced against `20 - Source Library/Component Index — bench-set-657.md`
   and verified directly against the real 1400 deck's own slides 92,
   96-100 (`10 - Courses/14101.../build/_generator/tmp/dryrun/slides/`) —
   slide 100 is literally "Check Your Knowledge 2: Bench Set." 657/667 is
   one of the six real slice topics, and Day 1's own Materials list
   already confirms equipment for all six is staged.
3. **Live Walkthrough: 1400 Chapter 3** (case-walkthrough, 20 min, after
   concept 5) — formalizes what the vault already specifies ("walk the
   1400 deck live... this is what you'll be handed") into a scheduled
   activity instead of an unstated assumption. Verified the real anchor:
   1400 slide 87 is Chapter 3's actual chapter-opening objectives slide
   ("Fisher Sliding Stem Spring and Diaphragm Actuator Maintenance,"
   7 real objectives).
4. **Objectives Practice: Real 1400 Objectives** (application-exercise,
   15 min, after concept 7) — participants take 2 of the same chapter's 7
   real objectives (verified verbatim from slide 87 — e.g. "Define Bench
   Set and describe the procedure for setting bench set," which ties
   directly back to activity 2) and propose the Conditions/Standard the
   1400's own bare Action-only phrasing leaves out. Real text, an
   analytical task on it — not a fabricated second worked example.

General instructional-design grounding used, not vault-exclusive:
concept-sorting as pre-assessment schema-building (activity 1);
Show-Tell-Do's own documented common failures — narrating during Show,
over-explaining in Tell, moving on before proficiency in Do
(`Show-Tell-Do.md`) — used directly in activity 2's Tell step.

**The literal Day 1 schedule, against the 180-minute provisional target:**

| Item | Type | Min | Running total |
| --- | --- | ---: | ---: |
| Welcome to IfE (`ife-005`) | slide | 5 | 5 |
| The Five Tenets overview (`ife-006`) | slide | 8 | 13 |
| Received vs. Delivered (`ife-007`) | slide | 5 | 18 |
| **Tenet Sort** | activity | 18 | 36 |
| Check — Which Tenet (`ife-008`) | slide | 5 | 41 |
| Show–Tell–Do (`ife-009`) | slide | 6 | 47 |
| **Show-Tell-Do Worked Walkthrough (657)** | activity | 30 | 77 |
| **Break** | break | 15 | 92 |
| Reading a Training Solution (`ife-010`) | slide | 4 | 96 |
| **Live Walkthrough: 1400 Chapter 3** | activity | 20 | 116 |
| The Prime Question (`ife-011`) | slide | 3 | 119 |
| Objectives, Briefly (`ife-012`) | slide | 6 | 125 |
| **Objectives Practice** | activity | 15 | 140 |
| Myths Quick-Hit (`ife-013`) | slide | 6 | 146 |
| Meet Your Slice / afternoon preview (`ife-014`) | slide | 5 | **151** |

**Closed 2026-09-10, Franz's call:** add the break, accept the remainder
as legitimate rotation buffer — not a further design gap. 151 of 180
provisional minutes are now accounted for by real, designed content; the
remaining ~29 minutes is buffer for exactly what the second bullet above
named (discussion and hands-on rotation routinely running longer than a
written plan, particularly the 657 station rotation), not an unresolved
gap needing a fifth activity. The "more real activity could still be
added" option above was explicitly not taken.

The break is a schedule fact, not an instructional-design element — it
carries no `sourceNote` and isn't in `course.json`'s `activities[]`
(which is scoped to real, sourced instructional content per
`curriculum-development.md`); it exists only in this table.

**Deliberately still not touched, per this directive's own constraints:**
the check (`ife-008`) stays a single item — the multi-item template-gallery
work flagged in the section above is out of scope for this pass, same as
directed.

## Next

Days 2–8. None started. The next real module should exercise the case
Day 1 deliberately avoided — real 14101 slice content and cross-course
`provenance` — since that is the harder half of the Part B integration
question and still unproven against real production content.
