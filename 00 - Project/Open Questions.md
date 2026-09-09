---
title: Open Questions
type: reference
tags:
  - project
  - decisions
updated: 2026-09-09
---

# Open Questions

Decisions that are deliberately deferred. Each should end up with a resolution
and a date, then move into [[Roadmap]] or the relevant course/source note.

## Rendering stack

**Question:** What is the technical stack for HTML rendering of Markdown course
content?

- Needs to produce a presentation artifact for Stage 1 that matches the existing
  PowerPoint look and feel.
- Needs to scale in Stage 2 to Bench Notes / Bench Book generation from shared
  source content.
- Candidates to evaluate: static site generator, a slides framework
  (reveal.js / Marp), a custom build step, or an Obsidian publish/export path.

**Decided (Stage 1 pilot, [[14101 Presentation]]):**
- *Authoring model* — component extraction: per-slide semantic HTML against a
  shared `emerson-workbench.css` that encodes the deck's design system.
- *Runner* — a dependency-free vanilla JS/CSS viewer (`build/index.html` +
  `assets/slides.js`), **not** reveal.js or Marp: the vault is offline, the
  slides already self-scale, and the slide files stay plain HTML so the runner
  is swappable later at no cost.

All 418 slides of course 14101 are converted on this model.

**Still open:** whether the same per-slide fragment model carries into Stage 2
Bench Notes / Bench Book generation from shared source content.

**Status:** resolved for Stage 1.

## Source-change propagation

**Question:** How will the AI-assisted authoring workflow detect and push source
content changes to the courses/modules that use them?

- What is the unit of shared content (a note, a heading block, a transclusion)?
- Is propagation a build-time regeneration or an edit-time sync?
- How are course-specific overrides handled without reintroducing drift?

**Status:** open.

## Stage 3 hardware

**Question:** What are the hardware/software requirements for Stage 3 process
control integration?

- Signal source for 4–20 mA output.
- Loop calibrator make/model and its control interface.
- Safety and isolation requirements for classroom use.

**Status:** open.

## Chapter 1 module structure (course 14101)

**Question:** Chapter 1 ("Control Valve Specifications for Maintenance")
currently has proper modules in `course.json` (Reading the P&ID; ASME
Pressure / Temperature Class; ANSI/FCI Seat Leakage Classes), but its slide
content still reads as a flat list of individual slides sitting under the
chapter rather than genuine module groupings the way Chapter 2 does. Should
Chapter 1's content be reworked into real module-shaped teaching units, or is
its lighter structure acceptable because it is a short specifications primer?

- Raised 2026-08-30 during the day/chapter intro-card navigation work.
- Flagged by Franz as a **content decision to revisit later**, not a
  navigation bug — the nav now treats every tier consistently regardless.

**Decided (2026-08-31):** the three modules were consolidated into one —
"Reading a Valve's Specifications" (slides 13, 14, 16, 19 + a two-part check).
Franz's rule: no modules of only one or two slides. Commit `0ccc636`. See the
`14101-module-boundaries` memory.

**Status:** resolved.

## curriculum-development.md's stale phase-status header

**Question:** `00 - Project/curriculum-development.md`'s own status header
still reads *"Phase 1 of the Instructional Primitives Pathway... Phase 1
gate review, then Phase 2"* — but the pathway has since reached Phase 5
(the ch3-m1 origination-mode dry run, opened by Franz 2026-09-06; Phases
1–4 complete per session memory). The doc that defines the curriculum
schema was never updated to reflect its own later phases.

- Surfaced 2026-09-09 while tracing the Component Index / Instructional
  Primitives relationship for the project hub.
- **Deliberately not fixed as part of that work** — Franz's own framing:
  fixing it in passing would be exactly the ad hoc, noticed-while-doing-
  something-else change this project tries to avoid, and the phrase
  "Phase 1 gate review" may name a real formal gate process with its own
  meaning, not just a casual status line. Franz wants to look at it
  himself and update it deliberately, not have it bumped as a side effect.

**Status:** open — logged, not resolved.

## ch3's course.json status field vs. its real pipeline progress

**Question:** `10 - Courses/14101 Valve Trim and Body Maintenance/Presentation/course/course.json`'s
chapter-level `status` field reads **`"outline"`** for Chapter 3 — the same
value as Chapters 4–16, which genuinely have no work done. But Ch 3's real
pipeline state (tracked separately in the Console's own project store, and
reflected in [[System Map]] §4) is far past outline: Stage 1 and Stage 2 are
both closed, the Stage 3 four-part slide pass is under way on real modules,
and the Instructional Primitives Pathway has run a full Phase 5
origination-mode dry run against `ch3-m1`. Only Ch 1–2 carry `status:
"ready"`.

- Surfaced 2026-09-09 while refreshing [[System Map]] with current facts for
  the project hub — a direct `course.json` query returned the field values,
  which contradicted the real per-chapter pipeline state already known from
  session history and git log.
- **Not fixed as part of that work** — the Console's project store is the
  authoritative source for per-chapter pipeline stage, per the System Map's
  own update protocol (§ rule 3); `course.json`'s `status` field appears to
  drive the Workshop's own nav/display layer and may follow separate rules
  for when a chapter is surfaced to learners as usable ("ready") versus
  still being authored — collapsing the two without understanding that
  distinction risked papering over a real gap rather than resolving it.
- The System Map's own §4 table is unaffected — it already tracks per-stage
  Console state directly, not this field — but the mismatch means the
  Workshop's live nav is currently understating Ch 3's real progress to
  anyone reading `course.json` directly.

**Status:** open — logged, not resolved.

## IfE origination-mode pilot scope

**Question:** Now that the IfE schema decisions are real (`ife` domain code,
no fifth role — IfE is a different schema tier, `provenance: original` for
Steve's invented pedagogical diagrams, cross-course `provenance` confirmed
for IfE's practice-slice primitives pointing at existing 14101 Component
Index entries), should IfE content actually be authored through the
pipeline as one full cold-start origination attempt, or should a smaller
module be piloted first?

- Raised 2026-09-09 as decision point #4 of the IfE Part B directive, left
  explicitly to my judgment by Franz: *"Your call — tell me which you'd
  recommend and why, then proceed."*
- **Recommendation: pilot one small module first, not a full cold-start.**
  IfE has never run through Stage 1/2/3 origination mode at all — the only
  precedent is `ch3-m1` (a *technical-skill* module, `mnt` domain, backed by
  the Component Index/template-gallery machinery this session's schema work
  extended to a second tier for the first time). Piling a brand-new domain
  tier, a brand-new provenance value, and a brand-new cross-course-primitive
  pattern all onto one full-course attempt at once repeats exactly the shape
  of risk the project's own precedents exist to avoid (16-example template
  proof before trusting Stage 3 authoring; the bounded ch3-m2 A/B test
  before trusting origination mode on real content at all). A single module
  isolates whether the *schema* decisions hold up against real content
  before the *volume* of authoring the rest of IfE compounds any gap found.
- **Candidate module: "Five Tenets of IfE"** (`02 Methodology/Five Tenets of
  IfE.md`). Self-contained, short, almost entirely `provenance: original`
  (Steve's own framework, no 14101 source to reconcile), so it tests the new
  provenance value cleanly before mixing it with the cross-course-primitive
  case. A module with real 14101 slice content (e.g. a Day 5/6 Teach-Back
  day) would be the next pilot after this one clears, since that's where
  cross-course `provenance` actually gets exercised end to end.
- **Executed 2026-09-09.** `10 - Courses/_Origination Test — ife-five-tenets/`
  — one competency, two `provenance: original` primitives, three placement
  edges, three slides, all passing `render-check.mjs` clean in 4:3 and 16:9
  and confirmed by eye. `provenance: original` itself worked with **zero
  friction**. The pilot also surfaced five real schema gaps — none fatal,
  all logged with a worked-around instance, none silently papered over.
  Full detail in
  `10 - Courses/_Origination Test — ife-five-tenets/PILOT-NOTES.md`.
- **2026-09-09, same day, closed as its own directive:** the domain-verb
  engine gap — `ife` now has a real verb menu in
  `PipelineConsole/src/main/instructional-design.js` (proposed and
  approved before being wired in), verified against the pilot's own
  hand-written objective via the real `objectiveVerbOk` check and the
  existing test suite (6/6 passing, no regression).
- **2026-09-09, same day: the pilot's mechanism promoted to real content.**
  `10 - Courses/IfE - Instructing for Emerson/` — a real course folder,
  registered in `Courses.md`, with the same competency/primitives/edges
  now authored as the real `Curriculum — IfE.md` (not a test artifact) and
  real slides (`ife-001…003.html`), independently re-verified with
  `render-check.mjs` and a fresh `objectiveVerbOk` run against the
  production `course.json` copy. The pilot folder stays on record as the
  test that proved the mechanism; content is not duplicated as "done"
  twice, only the registry entry is real.
- **2026-09-09, approved and wired in:** the three proposed fixes
  (nomenclature/contrast template fit, the `roles` field, the `area`
  vocabulary) are all applied, not just proposed — `instructional-
  design.js` widened and re-tested (6/6 pass), `roles: null` written into
  the real registry's edges, four `ife` areas enumerated in
  `curriculum-development.md` and the pilot's placeholder competency ID
  renamed in the real registry (`ife.orientation.five-tenets-framework`;
  the pilot's own record stays as originally written). One gap remains
  unaddressed: the primitive `asset` field being stretched by pure-table
  content — flagged, not actioned, nothing broke, no fix proposed.
- **Not yet done:** a second module against real 14101 slice content,
  which is where cross-course `provenance` gets exercised for real — this
  first module deliberately isolated `provenance: original` alone and
  didn't touch that case.

**Status:** open — one real module authored; all four schema gaps the
pilot surfaced are either closed or flagged with no fix proposed. A
cross-course module (real 14101 slice content) is the remaining work.
Franz has not yet reviewed the pilot or the real module.

## Add new questions below

- _..._
