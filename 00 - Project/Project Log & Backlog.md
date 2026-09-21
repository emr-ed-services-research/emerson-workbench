---
title: Project Log & Backlog
type: reference
tags:
  - project
  - log
updated: 2026-09-09
---

# Project Log & Backlog

Two things live here on purpose: a **condensed, skimmable log** of what
actually happened and when, and a **comprehensive backlog** of ideas that
were raised, considered, and deliberately set aside rather than dropped.
Neither holds full detail — the log points at commit hashes and doc names,
the backlog points at where each item was actually raised. Full detail lives
in git history and the docs it names, not here.

**Why this file, why here:** see the "why the update protocol didn't fire"
note below. This doc is meant to close that gap — see **Keeping this
current** at the bottom before treating it as self-maintaining.

---

## Log

**2026-08-29 — Vault stood up.** Imported; shared engine extracted to
`40 - Engine/`; Chapter 2's first template (labelled-diagram card) proven on
slide 27, establishing the Handbook callout convention. (`76dd0d4`–`632fa7f`)

**2026-08-29 → 08-30 — Nav rework + Chapter 1/2 build-out.** Click-to-navigate
and collapsible modules landed; Chapter 1's three thin modules consolidated
into one; Chapter 2 Modules 1–3 got their four-part slide pass; the pipeline
doc gained its Stage 3 pre-send checklist and browser-rendering as a formal
Part 4; `System Architecture.md` added (four layers, finish-Ch2-then-Console
directive). (`89b1e59`–`064def5`)

**2026-08-30 — Chapter 2 finished.** Modules 4–7 through Stage 2 context
authoring and Stage 3 slide pass — all seven modules of Chapter 2 complete.
End-of-chapter coherence review; Pipeline Console scoping doc added.
(`dd7371c`–`ed58b31`)

**2026-08-30 → 08-31 — Console built, Phases 1–6.** Shell + control-loop
state machine, through Stage 0/4 script runners, Stage 2 via the Agent SDK,
Stage 1 (arc cut), Stage 3 (four-part pass with a per-slide rack), and the
Phase 6 visual token refinement (a hardware-switch skin was tried and
reverted). Separate `PipelineConsole` repo. (`028c39e`–`2836dad`)

**2026-08-31 — First live Console run on real content.** Ch3 Stage 1 arc cut
— the first pipeline stage actually run by the Console rather than by hand.
Headless-Chrome render checks added to `verify.ps1`. (`9afdae8`, `3b520a5`)

**2026-09-01 — System Map added.** The maintained current-state snapshot
this hub is built from. Console's per-chapter stage state and before/after
review racks wired in the same day. (`30a7045`, `33aa516`, `e43d522`)

**2026-09-04 — Source grounding, instructional tagging, and the template
system's real turning point.** Three-axis instructional-design tagging
adopted; ch3's teaching-subject-matter index built; ch3 Stage 2 tagged and
Stage 3 run on modules 1–3; the 8-master-template proposal; the template
gallery rebuilt live inside the real Workshop shell; the "completeness
against source, not volume" correction (pipeline working rule 4);
`System Architecture.md` corrected so origination is one capability, not a
deck-only assumption; Subject-Matter Index generalized deck-scoped →
topic-scoped; the bench-set-657 topic index built cold as the first test;
a 16-example template proof run, surfacing and fixing two systemic template
bugs. (`8138687`–`855cbe8`)

**2026-09-05 — Style Guide written end to end.** §5 (diagram/graph
conventions) drafted, adversarially reviewed, revised twice; §§1–4 and 6–10
drafted to close the full document; the template proof closed out with
several production fixes; the ch3-m2 A/B origination dry-run built Candidate
B to real HTML. (`5da0a7a`–`ddc3869`)

**2026-09-06 — Course renamed, curriculum layer opened.** `1400` → `14101`
corrected across 2,096 occurrences in 505 files — the concrete cost that
justified baking in ID-scheme values early elsewhere. Curriculum layer
Phases 1–4 landed same day: schema + worked example, ch3 retrofit, the
Day-One competency map, and the asset-variant registry — Phase 5 opened but
held. Subject-Matter Index extended to 14101 ch1–ch2. The bench-set Figure 4
redraw approved and wired onto slide 098. (`e5a995c`–`319373b`)

**2026-09-07 — Phase 5 dry run + template hardening.** The ch3-m1
origination-mode dry run (Candidate B-self) ran and had 5 rendering defects
found and fixed at the template level. Four Workshop template
layout-fragility bugs fixed; 4:3 retired as a delivery target, the raw
viewer rebuilt at 16:9; `Manifest Schema.md` documented; several CSS
collisions fixed. In the Console repo the same days: origination-mode
Stage 1/2/3 prompts built incrementally, each with hard research-scope
limits and a coverage-verification gate, plus a category-lockout watcher.
(`196e59f`–`3953065`; Console: `dda0229`–`32131c1`)

**2026-09-08 — `diagram-cleanup.js` built.** General mechanical
raster-diagram cleanup pipeline (background removal, callout targeting,
label-swap) in the Console repo; the coverage-cataloger wired into the live
path with source-authenticity enforcement; a library-wide cataloging prompt
added. (`94cd78e`–`a9914a2`)

**2026-09-09 — Lightbox, oil-and-gas catalogue, project hub.** The diagram
lightbox added to `40 - Engine` and fixed same day; the full oil-and-gas
sourcebook catalogued — 144/144 figures across 13 chapters,
Component-Index-only (no asset variants yet — the shared-library point made
concrete). The project hub built and published as a click-to-expand
artifact; `System Map.md` refreshed; the ch3 `course.json` status drift and
`curriculum-development.md`'s stale phase header both logged as open
questions rather than quietly fixed. (`fe6bafd`, `e21d609`, `79b3dfb`)

---

## Backlog

Pulled from real project history — pipeline docs, session memory, and
commit messages — not a short list assembled for this doc. Items marked
**UNSURE** are ones the research pass wasn't confident belong here (may
already be resolved, or may be a one-off note rather than a real earmarked
idea); left in rather than silently dropped.

### Pipeline / infrastructure

- Generator's long-term shape: keep retiring authored chapters by hand, or
  invest in a merge-aware/patch-overlay rebuild — open decision in
  `Course Porting Pipeline.md`.
- `build-course.ps1`'s "unchanged" fast path doesn't refresh
  `_engine-lock.json`'s hash when a hand-edit lands both copies identical —
  worked around twice by hand, never patched.
- Data layer scope: which reference tables move to a `course-data/*.json`
  schema vs. stay lint-checked HTML — deferred until a first full course is
  ported end to end.
- `data-review` vocabulary needs a controlled set surfaced in
  `manifest.js`/`conversion-report.csv` — still an open fork.
- `manifest.js` title-drift cleanup (regenerate titles from live `<h1>`s) —
  named as a fix, never wired as a `verify.ps1` step.
- A script that *proposes* module boundaries from deck section
  breaks/CYK positions — explicitly scoped as optional, never built.
- Bench Notes / Bench Book generation's attachment point in the pipeline
  (a parallel Stage 3, or later) — open decision.
- Console: does it commit to the vault repo itself, or leave that to the
  human? Open.
- Console: working `course.json` location during a conversion — in place,
  or a staging copy? Open.
- Console: can two project slots run Claude Code concurrently, or is it a
  single-lane queue? Open.
- Console Phase 7 — multi-project hardening (pause/resume, surviving an
  app kill mid-run) — not started.
- `evaluateStage1Structure` only exists inside the Console; per the
  pipeline-gap-first triage rule it should also be a `40 - Engine/verify.ps1`
  check — logged as a follow-up, not done.
- Re-fire cascade "Fix B": snapshot/restore as a first-class state-machine
  concept — only "Fix A" shipped (scoped narrowly to Stage 0's regen-guard
  decline). Open.

### Origination mode

- Stage 1/2 prompts still open by assuming an existing slide range to read;
  the no-deck prompt variants (`buildStage1OriginateArcPrompt`, etc.) exist
  as artifacts, but a real headless Agent-SDK run of them is still a
  distinct, never-yet-taken step — every origination test so far has been
  hand-executed, by design (proof-discipline). **Partially superseded
  2026-09-19**, see the real-run finding below — the *prompts* are now
  proven at full-course scale, but the run was still hand-orchestrated
  (Claude Code's own Task tool dispatching subagents, not the Console
  driving the Agent SDK), so "a real headless Agent-SDK run" specifically
  is still the open, never-taken step.
- Which Console action actually starts an origination project (a distinct
  "no deck" affordance) — still open.
- How an origination module's page numbers get allocated with no deck
  length to bound them — **answered by real practice, 2026-09-19**: each
  module's Stage 1 dispatch computes its own `slideStart` as the previous
  module's last `check` value + 1, read live from the course's current
  `course.json` at dispatch time (not pre-allocated or estimated) — see the
  Console-scoping requirement below for what this means the real runner
  needs to do automatically.
- Whether a topic index "holds up when consumed" by a real Stage 2 pass —
  gated on the two items above; untested.
- **Real-run finding, 2026-09-19 (CVE1's full Stage 1+2 build) — logged as
  a Console-scoping requirement, not just a note:** running the real
  origination prompts across an entire course (24 modules, 10 chapters) for
  the first time — previously every origination test was one hand-executed
  module — surfaced concrete requirements the eventual Console runner must
  satisfy, not just "wire origination mode in":
  - **Strictly sequential dispatch, enforced, not conventionally followed.**
    Two hard constraints made this true tonight and will always be true:
    slide numbers are globally sequential across an entire course (each
    module's Stage 1 cut needs the previous module's real last slide
    number, not an estimate), and every stage reads/writes the same
    course.json, so two agents running concurrently risk one silently
    clobbering the other's write. The Console must guarantee single-writer
    access per course (a real lock), not rely on whoever's driving it to
    dispatch one at a time by discipline.
  - **A real coverage/completeness check per course, not a human's mental
    tally.** Chapter 2's second module was skipped entirely mid-run and
    only caught by a final course-wide audit script written after the
    build was believed complete — manual chapter-by-chapter tracking has
    no structural guarantee every module in every chapter actually got
    processed. The Console needs a first-class "is every module in this
    course's real chapter/module list at status X" check, run automatically
    at each stage boundary, not as an afterthought.
  - **Slide-number allocation as a real runner function**, computed live
    from the module immediately before it in the course's actual current
    structure, not hand-tracked or pre-planned.
  - **Automated post-stage verification**, not a human re-reading
    course.json after every agent run. Tonight's independent verification
    (confirming status/reground/primitives/page-ranges directly against the
    file after every single dispatch, not trusting the agent's own report)
    caught nothing wrong on the content side, but it's exactly the
    "structural check on the cut" the Console's own control-loop design
    already calls for at Stage 1/2 — it needs to actually run automatically
    for origination mode, not depend on whoever's orchestrating remembering
    to do it by hand each time.
- **UNSURE:** whether the second origination trial (oil-and-gas,
  `_b-headless-clone`, `og-001.html`) counts as parked/incomplete or is
  simply in-progress live work — it has one real slide built and is very
  recent. Flagged rather than guessed.

### Source Library / Subject-Matter Index

- The Subject-Matter Index's generalization is topic-scoped, not
  library-scoped, on purpose — meaning every future origination request
  needs its own topic index built as real editorial work, not a one-off.
  Not itself a backlog item, but a standing cost worth naming: the next
  topic index is implicitly always pending demand.
- `D750066`'s positioner-content sections are dated (analog flapper-nozzle,
  superseded by digital valve controllers) — out of ch3's scope, flagged
  but not acted on; will matter once a positioner-focused module is
  authored.
- `contrastWith` (a per-concept attribute for contrast pairs) — explicitly
  deferred: "revisit if Stage 3 misses contrast pairs in practice."
- `terms` (per-concept glossary linkage) — explicitly deferred, low
  priority.
- First-class formative-check slides — currently authored as ordinary
  `role: check` concepts rather than true first-class mid-module checks
  with TOC markers/progress tracking. Named as "a contained Layer-2
  follow-up... if it proves awkward in practice" — not yet revisited.
- The four-bucket source-precedence rule still needs writing up as a
  working rule in `Course Porting Pipeline.md` — checklist item left
  unchecked in `Source Grounding — Staging Plan.md`.
- Stage 3 QA mechanisms from the staging plan (machine geometry checks
  promoted to blocking, provenance checks, a second-agent rubric review) —
  designed in real detail, never shipped.
- **Figure-only keyConcept citation gap — CLOSED 2026-09-19.** Designed
  2026-09-18 in `Competency Map — Topic-Derived.md` Part 3 (Findings 1–2),
  approved by Franz and implemented the same day: (1) both Stage 2 prompts
  (`buildStage2Prompt`'s "sources" rule and `buildStage2OriginatePrompt`'s
  `t`-derivation step) now instruct the agent that an explanatory claim
  (mechanism/tradeoff/"why"/worked example) needs `-topic-` backing, not a
  `-cmp-` (figure) citation alone; (2) `verify.ps1` gained a mechanical
  course.json check flagging any module whose keyConcepts cite figures only
  with zero topic backing — a Warn, not a Fail, since a genuinely
  figure-only nomenclature module is legitimate. Verified: `prompts.js`
  syntax-checked clean, PipelineConsole's suite still 270/271 (the one
  failure is pre-existing and unrelated — confirmed via `git diff --stat`
  that only `prompts.js` changed). Running the new `verify.ps1` check
  against the real, already-shipped 14101 course surfaced that all 6 of its
  ch3 modules are figure-only, zero-topic — expected, since 14101 predates
  the topic/figure distinction, not a defect, but a real finding worth
  knowing about.
- `Roadmap.md`'s "Current picture" and `System Map.md` never got the
  source-grounding/instructional-design milestone folded in — checklist
  item left unchecked. **This is itself a second, earlier instance of the
  update-protocol failure named below** — the gap isn't new to this week.
- The `Instructional-Method Review — ch3.md` verdict (HOLD) never
  graduated into `System Architecture.md` Layer 2 — checklist item
  unchecked, the staging doc itself still not deleted.

### Style Guide

- **UNSURE:** §5.10's decision-table application variant was flagged as
  needing its own explicit go-ahead the way the procedure variant split
  did — looks resolved later (`tp-009`), but not confirmed enough to drop
  outright.
- The "burned-in deck arrows" convention is inconsistently recorded — Ch2
  slides call it a deck-wide issue with a batched follow-up still owed;
  ch3 slides treat the same pattern as an accepted house convention.
  Named as something the Style Guide should reconcile, not a blocker.
- A batched arrow-cleanup pass (Ch2 slides 34, 88/90/91/92, 62, 56) —
  named as deferred multiple times, never scheduled.
- Slide 57's low-resolution plug image (313px) and slide 34's blue-arrow
  close-ups — noted as "fine to read, replace in a later polish pass."
- ENVIRO-SEAL/HIGH-SEAL packing imagery — no slide-suitable photo exists
  yet; would need sourcing from two named manuals in a later pass.

### Workshop shell — carried-forward nav gaps

Logged explicitly as "picked up when the shell is next unfrozen," not
fixed now:

- Clicking a day/chapter name in the TOC only toggles expand/collapse; it
  doesn't navigate to that intro card.
- Modules don't expand/collapse within a chapter — the collapsible tier
  stops at chapter level.
- Day/chapter intro cards aren't in the sequential Prev/Next spine —
  reachable only via the TOC.
- Day/chapter intro-card visual banner treatment was raised and never
  confirmed either way.
- Chapter 1's slide-level content still reads as a flat list despite
  having one consolidated module — a content decision to revisit, not a
  nav bug.
- The `.slide` canvas is still natively 4:3 under the hood (every `cqh`
  value across ~2,400 lines of CSS is tuned against it) even though 16:9
  is the real delivery target. Flagged as a deeper open question, not
  touched.
- **Instructor reorientation ("regrounding") feature** — designed
  2026-09-19: a pre-authored (never live-generated), per-module explanation
  an instructor can pull up mid-class to answer "what are we doing and why."
  Lives only in presenter mode, never the student display; auto-scoped to
  whatever module is currently live; opens as an expansion of the existing
  context pane. Content is a new three-part scaffolded explanation (plain-
  language hook → bridge to real vocabulary → the actual technical depth,
  not simplified away) — a genuine new Stage 2 authoring addition, not a
  reuse of the existing engineering-voice competency text. Motivated
  directly by Franz's own background (English Literature, not an engineering
  degree — see memory `franz-background-english-literature-not-engineer`):
  the explanation has to teach him too, not just relabel content he can
  already read. Deliberately kept OUT of Vitruvius — this needs zero live
  reasoning or per-claim verification since it only presents content the
  pipeline has already authored and verified. Franz explicitly chose to
  design this now but hold the build until the Workshop shell is next
  unfrozen, rather than break the freeze early.

### Curriculum / Instructional Primitives

- Which Console action starts an origination project, and how page
  numbers get allocated — same open question as above, tracked in two
  places.
- Phase 5's second half — generalizing origination-mode Stage 1/2 beyond
  the one bounded `ch3-m1` dry run — not authorized yet; gated behind
  Franz's explicit review.

### Design / visual

- An electromechanical hardware-switch skin for the Console — tried,
  reverted, explicitly parked for a future **asset-based** (not
  CSS-only) attempt.
- A pneumatic-actuator interaction feel — rejected as a general
  interaction language, but could return as a one-off flourish on a
  single hero element.
- **Visual coverage for `kind: topic` entries and the keyConcepts/primitives
  built from them** — raised 2026-09-18 during the SMI topic-indexing and
  competency-map work. Known gap, mirroring the orphan-figure problem from
  the other direction: many topics may have zero or weak `relatedFigures`,
  which matters given `teaching-philosophy.md`'s slides-are-visual-only
  rule. Franz has more thoughts on how to address this and wants it
  scoped as its own task, not folded into the current CVE curriculum work
  — earmarked, not started.

### Process / meta

- **Live risk, not just history:** the "sibling-box collision" defect
  class was fixed three separate times at the template level (ch3-m2,
  ch3-m3, ch3-m4) before the general QA check that would catch it
  automatically (staging-plan §4 item 1) was ever built. That check is
  still unshipped — a fourth instance is plausible until it is.
- The Manifest Schema doc's own note — don't repurpose the `review` field
  to record why/how a slide was originated — implies a real Stage 3
  report-back mechanism is still wanted but not built.

---

## Proposed vault location & keeping this current

This file — `00 - Project/Project Log & Backlog.md` — is the proposed home,
alongside `System Map.md`, `Roadmap.md`, and `Open Questions.md`. One file
rather than two (log + backlog split) because they're maintained together in
practice: a session that closes out real work adds a log line *and* checks
whether anything it touched belongs in or out of the backlog, in the same
pass.

**Why the update protocol didn't fire (item 6 finding, restated here since
it's exactly the failure mode this file exists to not repeat):** `System
Map.md`'s update protocol was never wired to anything. There is no hook, no
CI check, no scheduled task, and no Obsidian plugin that watches for any of
its five trigger conditions — confirmed by checking
`.claude/settings.local.json` (no hooks configured at all) and the vault's
`.obsidian/` folder (no community plugins installed, so nothing like
Dataview or Templater either). It is pure prose, dependent entirely on
whoever is working in the vault remembering to act on it. The backlog above
shows this isn't a one-off: `Roadmap.md`'s "Current picture" and the
source-grounding milestone rollup show the identical failure shape from
earlier in the project, not just this week's staleness.

**This file has the same problem unless it's used deliberately.** There is
still no automated trigger behind it. The discipline that has to hold,
until an actual mechanism exists: **any session that closes out
meaningful work adds one log line here before ending**, and periodically
(not necessarily every session) sweeps the backlog for anything newly
resolved or newly earmarked. If a future session wants to close this gap
for real — a session-end hook, a pre-commit check, something that actually
enforces the habit rather than asking nicely — that is real, unscoped work
of its own, not something this paragraph should be mistaken for having
already done.
