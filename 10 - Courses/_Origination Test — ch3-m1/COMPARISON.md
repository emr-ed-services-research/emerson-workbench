---
title: "Phase 5 dry run — ch3-m1 · Candidate A (shipped) vs Candidate B-self (originated)"
type: reference
status: for Franz's slide-by-slide review
created: 2026-09-07
---

# Phase 5 Origination Dry Run — ch3-m1

**The question:** does origination-mode Stage 1/2 — cutting a teaching arc
from a module objective + the curriculum layer's competency catalogue, with
no deck — produce a module that holds up against the shipped one?

**This is the SELF-EXECUTED attempt (Candidate B-self).** The model executed
`buildStage1OriginatePrompt` → `buildStage2OriginatePrompt` →
`buildStage3OriginatePrompt` (all committed to PipelineConsole this session)
under proof discipline, same as the original ch3-m2 test. A separate
**headless Agent-SDK attempt (Candidate B-headless)** runs those same
committed prompts independently — held for Franz's explicit go-ahead.

- **Candidate A** — the shipped ch3-m1 slides `1400-088`, `093`, `089`,
  `091`, `092` + check `090`. Untouched.
- **Candidate B-self** — `_Origination Test — ch3-m1/`, slides
  `om1-001`…`om1-007`. All render clean (`render-check`, 0 warn, 4:3 + 16:9).

---

## 1. Structure side by side

| | A — shipped ch3-m1 | B-self — originated |
|---|---|---|
| Content slides | **5** | **6** |
| Check | **1, mid-module** — slide 90, after "Selecting an Action", before the bench-set half | **1, at module end** — om1-007 |
| Teaching order | actuator action → PDTC/PDTO bodies → fail mode **+ selection (folded)** → valve forces → bench set | actuator action → PDTC/PDTO bodies → fail mode → selection → bench set → valve forces |
| Competency set | all 6 | **all 6 — identical set** |
| Folding | folds `explain-actuator-action` + a first look at fail mode onto slide 88; folds `determine-fail-mode` + `select-action-for-failsafe` onto slide 89 | **one concept per slide — no folding** |

**Competency selection matched exactly.** Stage 1, from the objective + the
`Curriculum — 14101.md` catalogue, selected the same six competencies the
human Phase 3/4 map records for ch3-m1, in a defensible order. *Caveat:*
that map was human-authored days ago in this same work-stream, so this is
not a fully blind test of catalogue selection.

**The figures matched exactly.** Every primitive pointed straight at a real
Component Index component — `ch3-cmp-da-schematic` / `-ra-schematic`
(image151/152), `ch3-cmp-fail-mode-matrix` (fail-mode-spring-schematics.png
+ the 4-way matrix), `ch3-cmp-valve-forces-cutaway` (globe-valve-forces-cutaway.png
+ the A–D table), `ch3-cmp-bench-set-graph` (the bench-set line geometry),
`ch3-cmp-pdtc-pdto-bodies` (image42/43). **Nothing was generated from
nothing; nothing was searched for cold.** B pulled the same assets A uses.

---

## 2. Slide by slide

| A | B-self | Same competency? | Notes |
|---|---|---|---|
| 88 "Direct- and Reverse-Acting Actuators" (figrow, image151/152) | om1-001, same title, same figures | `explain-actuator-action` | A also seeds fail mode here; B keeps it to the one concept |
| 93 "PDTC vs. PDTO Valve Bodies" (figrow, image42/43) | om1-002, same | `contrast-pdtc-pdto` (`develops`) | near-identical |
| 89 "Selecting an Action" (has-lead: selection matrix + schematics) | om1-003 "Fail Mode of the Assembly" (has-lead: **outcome** matrix + schematics) **and** om1-004 "Selecting an Action" (standalone selection table) | `determine-fail-mode` + `select-action-for-failsafe` | **A folds; B splits into two slides.** B's om1-003 matrix reads *forward* (given a pairing → the fail outcome); om1-004 reads *backward* (given a required failure → the action). Pedagogically clearer as two operations, but the two slides share one primitive and om1-004 reads sparse. |
| 91 "Valve Forces" (has-lead: A–D table + forces cutaway) | om1-006 "What Bench Set Excludes" (has-lead: A–D table + forces cutaway) | `explain-excluded-forces` | same asset; B's title ties it to bench set. The scan cutaway renders small/illegible on **both** — a known asset issue flagged in A's own slide comment, not a B failure. |
| 92 "Bench Set" (tmpl-graph) | om1-005 "Bench Set" (tmpl-graph) | `bench-set` | near-identical geometry; B uses the generic (not "off the valve") framing per the index's slide-92 variant |
| 90 check "Fail Action" (mid-module) | om1-007 check "Fail-Safe Action" (module end) | `select-action-for-failsafe` | both a situation stem; B's placed last, A's mid-module |

---

## 3. Where B-self is arguably better

- **Slide order groups the objective's two clauses.** A interleaves — valve
  forces (91) sits *between* selecting an action (89) and bench set (92). B
  runs the fail-mode arc to completion (001–004), then the bench-set arc
  (005–006). The objective is literally "determine fail mode … *and* explain
  bench set"; B's order follows it.
- **Check after all the content it tests.** A's single check is mid-module;
  a learner meets it before the bench-set half. (A's check is only about
  fail action, so this is defensible — but B's end-placement is cleaner.)
- **`determine` and `select` shown as distinct operations.** Reading the
  matrix forward vs. backward is a real distinction A's fold blurs.

## 4. Where A's judgment shows

- **B over-fragments.** om1-003 + om1-004 both draw on
  `ch3-cmp-fail-mode-matrix`; A folds them onto slide 89 and the result is
  tighter. "One concept per slide" produced two slides where one does the
  job. **The origination Stage 1 prompt needs a fold rule** — *if two
  consecutive concepts share a primitive and are closely related, one
  slide.*
- **om1-004 reads sparse** — a 4-row table on `.slide--tmpl-table` leaves
  the lower half of the slide empty. A avoided a standalone selection table
  by folding it into a has-lead figrow with the schematic.
- **A's slide 88 fold** (actuator action + first look at fail mode) is a
  natural pairing B left on the table.

## 5. Composition friction — agent self-checks (labelled as such)

These are **generation-agent self-checks**, not human review:

1. **`.tmpl-note` on `.slide--tmpl-table` (om1-004)** rendered at the top of
   the slide, overlapping the title — `.tmpl-note` is only positioned for
   `.slide--tmpl-figrow` / `-diagram`. Caught on the first render; fixed with
   a table `<caption>`. **Template misuse — same class as the ch3-m2 test's
   findings.**
2. **Mid-caption `<b>` on figrow figcaptions (om1-001, om1-002)** forced
   line breaks, because `.slide--tmpl-figrow .tmpl-cell figcaption b` is
   styled `display: block` (it's a caption *heading*, not inline emphasis).
   Caught on render; removed the inline bold.
3. **om1-006 force cutaway small/illegible** — noted, matches A's known
   issue, not fixed (it is the asset, not the composition).

All three were caught by rendering each slide, not by the authoring pass.

## 6. Honest assessment of the self-executed process

- **The clearest win is retrieval, not structure.** The Component Index +
  primitive registry meant every figure traced to a real component — zero
  "generate from nothing", zero cold search. That was the original ch3-m4
  failure mode and the whole reason the curriculum layer exists; here it
  held completely.
- **Stage 1 (select + sequence) was easy and the output matched the human
  map** — but I cannot fully separate "the layer made it easy" from "I
  authored that map days ago." A blind operator, or the headless attempt,
  is the better test of that half.
- **Stage 3 still shipped two template-misuse bugs on first render** — the
  same category the ch3-m2 test surfaced. The curriculum layer does nothing
  for markup correctness; that still needs a render check bolted on.
- **"One concept per slide" over-fragmented.** The prompt needs a fold rule.
- **Net:** B-self is a competent module, structurally comparable to A,
  slightly looser, with the same figures — neither clearly better nor
  clearly worse. For a first origination-with-curriculum-layer run that is a
  reasonable result: the layer removed the retrieval risk and left the
  structural-judgement risk (folding, check placement, slide economy) where
  it was.

## 7. What this does not do

Bounded to ch3-m1. Does not lift the full stop on ch3-m4/m5/m6, touch ch4,
or authorize generating the rest of Day One. The real ch3-m1 slides
(88–93) are untouched. The headless attempt (B-headless) is a separate
independent run, held for Franz's explicit go-ahead.
