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
  `om1-001`…`om1-007`. Render status: see §5 — an earlier draft of this file
  claimed "all render clean, 4:3 + 16:9"; that claim was wrong and is
  corrected there.

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

## 5. Rendering defects — the "render clean" claim was wrong

### 5.1 What the earlier draft claimed, and what actually happened

The first version of this file said Candidate B-self "render[s] clean
(`render-check`, 0 warn, 4:3 + 16:9)." **On direct slide-by-slide review
(Franz, 2026-09-07) that did not hold.** Five defects were visible within
five minutes:

1. **No 16:9 view present.** `build/index.html` in the scratch course is a
   copy of the *4:3 deck-review* tool — it opens every slide raw, no
   `?embed=1`. The 16:9 Workshop view is a different surface
   (`course/index.html`, the shell) and it had never been built for this
   scratch course, so there was nothing to compare at 16:9.
2. **Emerson logo overlapping content, on several slides.** The
   `.slide-chrome__logo` sits at `left:81.4cqw; top:88.1cqh`. Any
   bottom-edge text that reaches that corner runs under it. B-self's
   `.tmpl-note` lines (om1-001, om1-002) and `.tmpl-source` (om1-005) did.
3. **PDTC/PDTO captions misaligned (om1-002).** Two-line figcaptions with a
   mid-caption `<b>` pushed the caption block up out of alignment with its
   pair.
4. **Bench-set graph looked cut off (om1-005).** The `.slide--tmpl-graph`
   grid is `15cqh / 1fr / auto / auto`; a 2-line takeaway + long source
   grew the `auto` rows and squeezed the plot row in narrower windows.
5. **Check slide off-template (om1-007).** The revealed answer was a full
   sentence; `.reveal-answer` is `white-space:nowrap`, so it ran off-slide.
   Options carried teaching clauses instead of the terse pairings the
   shipped check (slide 90) uses.

### 5.2 What `render-check.mjs` actually verifies — and why it missed all five

`render-check` (`40 - Engine/render/render-check.mjs`) renders each slide
twice in headless Chrome and runs **three automated checks only**:

- `load-clean` — no console errors / no `pageerror`;
- `broken-image` — every `<img>` has non-zero `naturalWidth`;
- `clipping` — each element's bounding rect is within the `.slide` box
  (2px epsilon).

It does **not** check: visual layout, text overflow inside a positioned
box, one element sitting on top of another (z-order overlap passes the
rect test — the logo and the note both fit the `.slide` box, they just
occupy the same corner), logo position, SVG-internal layout, or
template-conformance. And the only view I actually *looked at* was
`?embed=1&visual=1` — which **drops `.slide-chrome` entirely** (so the
logo overlap is invisible) and **prunes any text over ~28 chars** (so the
long notes/captions/takeaways are invisible). I never opened the raw 4:3
view, which is the one Franz reviews and the one the logo lives in.

So "render-check clean" was true and irrelevant: it passed the three
checks it runs, and I let that stand in for "the slides look right,"
which it never tested. **Standing lesson recorded in memory
(`render-clean-claims-must-name-the-view.md`): a "renders clean" claim
must name the view(s) opened and what was looked for.**

### 5.3 First fix attempt — rejected as ad-hoc

The first fix pass shortened the offending text on the om1 slides so it
stopped reaching the logo / stopped wrapping / fit the nowrap element.
**Franz rejected that (2026-09-07):** every "fix" made the *content*
shorter, not the *layout* able to hold content of realistic length. The
templates were left exactly as fragile — the next time Stage 2 wrote a
note, caption, takeaway or answer a few words longer, all five defects
would come back. That is a workaround, not a fix.

The one non-content item from that pass that stands: the scratch course
had **no 16:9 Workshop view at all** (`build/index.html` is the 4:3
deck-review tool). `course/index.html` + `course.js` + `course.css` +
`course-data.js` were added from the 14101 production shell, so
slide-by-slide review now has **both** surfaces.

### 5.4 Second fix pass — the templates themselves (2026-09-07)

Landed in the shared `emerson-workbench.css` (one canonical file,
propagated verbatim to every course; the three lock-tracked courses
re-assembled via `build-course.ps1 -Force`, which also cleared a
pre-existing lock/CSS drift). Each fix is unit-consistent with the logo's
own `cqw` position, so it holds at any render size.

| defect | template fix |
|---|---|
| logo overlap | New `--logo-keepout: 20cqw` token = the right inset that clears `.slide-chrome__logo` (pinned `left:81.4cqw`, ~5.75cqw tall, owns the bottom-right corner). Applied as `right` on `.tmpl-note` (both the absolute and the `:has(> .tmpl-note)` flow variant) and the global `.tmpl-source`; as a left-anchored `max-width: 72cqw` on the graph's `.tmpl-takeaway` / `.tmpl-source` (a right inset is unreliable there — the centred grid's edge position varies). Text of **any** length now wraps inside the safe zone. |
| figcaption alignment | `.slide--tmpl-figrow .tmpl-row` is now a 2-track grid (image band / caption band) and each `.tmpl-cell` `subgrid`s onto both. The caption band is sized once, to the tallest figcaption across all cells, so a caption that wraps to two lines no longer shoves its own image up relative to a one-line neighbour — every bold heading sits on the same baseline, tag text flows down. Verified on shipped 2-cell (028), 3-cell (035, 114), single-cell (089), has-lead (089/091) and flow-note (098/103) figrows. |
| graph plot "cut off" | plot row floor raised from `minmax(0,1fr)` to `minmax(42cqh,1fr)` — a long takeaway/source now overflows the slide bottom *visibly* instead of silently crushing the plot. |
| `.reveal-answer` overflow | `white-space:nowrap` removed; the element is now a centred grid box in the lower band (`top:38cqh; bottom:5cqh`, `width:82cqw`, `text-wrap:balance`, `hyphens:auto`, `overflow:hidden` backstop) at `5.6cqw`. A terse answer ("A & D", "A · Direct-acting") still reads large; a full-sentence answer wraps and stays on the slide. |

**Side effect — latent production bugs fixed:** shipped slides **92, 103,
112** had `.tmpl-note` / `.tmpl-source` running under the logo in the raw
4:3 view already; **35, 114** had misaligned multi-cell captions. All are
fixed by the same change. Regression pass over ~15 production figrow /
graph / check slides + the Template Gallery + Template Proof: no
regressions.

### 5.5 What was inspected — this pass

- **Four stress-test slides** (deliberately over-length note / mismatched
  caption line counts / long takeaway+source / sentence-length answer),
  raw 4:3, before and after: every defect reproduced before, none after.
- **Production regression sample**, raw 4:3: figrow 028 / 034 / 035 / 039
  / 089 / 098 / 103 / 112 / 114, graph 092 / 097, check 090; Template
  Proof tp-005 / tp-008 / tp-014; Template Gallery tg-005 / tg-010. No
  regression; the pre-existing logo overlaps on 92/103/112 and caption
  misalignment on 35/114 are now gone.
- **om1 deck** re-rendered raw 4:3 + the check view with answer revealed:
  clean on the new templates.
- Looked at, each slide: logo/footer overlap, text past the content
  region, figcaption baseline alignment across cells, SVG containment,
  table fit, revealed-answer containment.

### 5.6 Two items resolved / for Franz's call

- **"Day undefined" breadcrumb** — root cause: the hand-written scratch
  `course-data.js` day object was missing `"num"`; `course.js` renders
  `'Day ' + day.num`. A real course build always emits `num` on every
  day / chapter / module, so **this cannot recur in a real build**. Fixed
  in the scratch data.
- **Graph plot floating with dead space above it** (slide 005 / shipped
  92) — the plot floor stops it being *crushed*, but the plot still
  centres in its row leaving a gap above. This is **shipped behaviour on
  92 / 97 / 102**, not new to B-self. It is a real aesthetic looseness;
  flagged for Franz to decide whether the plot should hug the title
  (`align-items:start` on `.tmpl-plot`) rather than asserting it away.

### 5.7 Composition friction — agent self-checks (labelled as such)

These were **generation-agent self-checks** from the first render pass,
not human review:

1. **`.tmpl-note` on `.slide--tmpl-table` (om1-004)** rendered at the top
   of the slide, overlapping the title — `.tmpl-note` is only positioned
   for `.slide--tmpl-figrow` / `-diagram`. Fixed with a table `<caption>`.
   **Template misuse — same class as the ch3-m2 test's findings.**
2. **Mid-caption `<b>` on figrow figcaptions (om1-001, om1-002)** forced
   line breaks (`figcaption b { display:block }`). Removed the inline bold.
3. **om1-006 force cutaway small/illegible** — matches A's known asset
   issue, not fixed (it is the asset, not the composition).

### 5.8 The honest read on §5

The curriculum layer did its job (retrieval — §6). **Stage 3 markup
correctness is still unguarded**; my *reporting* of it was unreliable
(clean off a check that never looked); and my *first fix* was a content
workaround. Three lessons:

- **Pipeline gap:** origination Stage 3 needs a real render gate — the raw
  4:3 view and the 16:9 shell, both looked at, before "done."
- **Reporting gap (mine):** "renders clean" is only sayable with the view
  named and the checklist stated. Recorded in memory.
- **Fix-discipline gap (mine):** a layout defect gets fixed in the
  layout, not by trimming the content that exposed it. The template must
  hold realistic-length content.

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
- **Stage 3 shipped layout defects that a real review caught and my
  self-check did not** — two template-misuse bugs on first render, then
  five more layout/overflow/logo-overlap defects on Franz's direct review
  (§5). The curriculum layer does nothing for markup or layout
  correctness; origination Stage 3 needs a render gate that actually looks
  at the raw 4:3 view and the 16:9 shell.
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
