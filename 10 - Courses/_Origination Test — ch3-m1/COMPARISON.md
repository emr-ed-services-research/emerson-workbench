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
propagated verbatim to every course). Each fix is unit-consistent with
the logo's own `cqw` position, so it holds at any render size.

**Logo overlap.** New `--logo-keepout: 20cqw` token = the right inset that
clears `.slide-chrome__logo` (pinned `left:81.4cqw`, ~5.75cqw tall, owns
the bottom-right corner). Applied as `right` on `.tmpl-note` (both the
absolute and the `:has(> .tmpl-note)` flow variant) and the global
`.tmpl-source`; as a left-anchored `max-width: 72cqw` on the graph's
`.tmpl-takeaway` / `.tmpl-source` (a right inset is unreliable there — the
centred grid's edge position varies). Text of **any** length wraps inside
the safe zone.

**Figcaption alignment.** `.slide--tmpl-figrow .tmpl-row` is now a 2-track
grid (image band / caption band) and each `.tmpl-cell` `subgrid`s onto
both. The caption band is sized once, to the tallest figcaption across all
cells, so a caption that wraps to two lines no longer shoves its own image
up relative to a one-line neighbour — every bold heading sits on the same
baseline, tag text flows down. Verified on shipped 2-cell (028), 3-cell
(035, 114), single-cell (089), has-lead (089/091) and flow-note (098/103)
figrows.

**Graph plot floor (height) — first pass, superseded, see §5.9.** The
first version of this fix raised `.slide--tmpl-graph`'s plot row from
`minmax(0, 1fr)` to `minmax(42cqh, 1fr)` so a long takeaway/source could
no longer crush the plot to nothing vertically. That part held up. But it
was derived from **height math only** — Franz's direct review (see §5.9)
found the plot's *width* was never actually verified the same way: it
overflowed the slide on the left in the raw 4:3 view and rendered
undersized in the 16:9 shell, because the plot column was sized in `cqw`
on `.slide` itself, which — like the `--logo-keepout` padding case the
template's own comment already warned about — resolves against the
*viewport*, not `.slide`, when used in `.slide`'s own properties. §5.9 has
the corrected fix.

**`.reveal-answer` full-sentence handling.** Was
`position:absolute; left:50%; top:58cqh; transform:translateX(-50%);
font-size:6.82cqw; white-space:nowrap` — a single non-wrapping line,
centred, with no width cap, so a multi-word answer grew the box past both
slide edges. Now: **`white-space:nowrap` deleted** (text may wrap);
**`width:82cqw`** (a definite wrapping column, ~9cqw margin each side);
**`top:38cqh; bottom:5cqh`** replaces the single anchor with a fixed
82cqw × 57cqh box, entirely inside the slide; **`display:grid;
place-content:center`** centres the text block (any line count) in that
box, so longer answers grow symmetrically around ~y66cqh rather than
pushing off the bottom; **`font-size` 6.82cqw → 5.6cqw** + `line-height:
1.15` for headroom (≈ 29 chars/line, ≈ 8 lines / ≈ 230 chars fit before
anything clips); **`overflow:hidden`** is the backstop — past ~8 lines the
box clips the excess (symmetrically) instead of letting it spill onto the
title or footer; `text-wrap:balance` + `hyphens:auto` even the lines and
let a lone long token break. Net: the box has fixed dimensions and
`overflow:hidden`, so "runs off-slide" is now structurally impossible; at
2–5× the current answer length it wraps cleanly and stays large, and only
at absurd length does it clip (bounded, inside the box). The one cost is
the smaller base font — a terse answer ("A & D") reads a step smaller than
before, still clearly a reveal.

**Side effect — latent production bugs fixed:** shipped slides **92, 103,
112** had `.tmpl-note` / `.tmpl-source` running under the logo in the raw
4:3 view already; **35, 114** had misaligned multi-cell captions. All are
fixed by the same change. Regression pass over ~15 production figrow /
graph / check slides + the Template Gallery + Template Proof: no
regressions.

### 5.4a The `_engine-lock.json` / CSS hash drift (scoped)

`build-course.ps1 -Force` on the three lock-tracked courses (14101,
Template Gallery, Template Proof) also cleared a pre-existing drift. Fully
scoped:

- **What was out of sync:** `_engine-lock.json` recorded SHA256
  `F4EA55F1…` for `build\css\emerson-workbench.css`; the actual file — in
  the engine *and* every course copy, all byte-identical to each other —
  was `6E43106F…`. Only the lock's bookkeeping was wrong; the CSS itself
  was consistent everywhere.
- **Since when:** commit `e5a995c` (2026-09-06), "Correct course number
  1400 → 14101." The commit before it (`ccb7bd5`, 2026-09-05) had lock and
  CSS matching exactly.
- **What `e5a995c` changed in the CSS:** comment text only — five
  occurrences of the string "1400" swept to "14101" (the header
  docstring's PPTX filename + doc path, and four dated review-note
  comments). **Zero rules, selectors, or values changed.** The sweep
  edited comments (changing the file's hash) but didn't re-run
  `build-course.ps1` to refresh the lock. `verify.ps1` would have `Warn`ed
  about it (never `Fail`) from 09-06 on.
- **Did clearing it change anything visible in production?** No. The
  `-Force` run's only net content change to any course CSS is the four
  defect fixes above (already accounted for) — the 09-06 comment sweep was
  already present in every copy. The lock now records the true current
  hash; no pixel changed.
- **Did it mask / interact with the five B-self defects, or with why
  render-check passed?** No, provably: (1) it was a comment-only
  difference, so the CSS *rules* the slides rendered against were
  identical either way; (2) `render-check.mjs` never reads
  `_engine-lock.json` — the lock/drift check lives in `verify.ps1`, a
  different tool; (3) the scratch course where B-self lives has **no
  `_engine-lock.json` at all** (hand-set-up, never assembled by
  `build-course.ps1`), so the drift did not exist there. render-check
  passed the B-self slides for the reasons in §5.2 (narrow automated
  checks + the pruned view I looked at); the lock has no role in that.

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
  92) — flagged here for Franz's call; **resolved as part of §5.9**, not
  by leaving it as shipped behaviour. The graph's width fix (chart column
  66% instead of 54%, `place-self:stretch` instead of centring at
  intrinsic size) plus the plot hugging the title row means the plot now
  fills nearly all the available space in both surviving views.

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
  QA view (now 16:9, §5.9) and the course shell, both looked at, before
  "done."
- **Reporting gap (mine):** "renders clean" is only sayable with the view
  named and the checklist stated. Recorded in memory.
- **Fix-discipline gap (mine):** a layout defect gets fixed in the
  layout, not by trimming the content that exposed it. The template must
  hold realistic-length content.

### 5.9 4:3 retired as a target; the raw viewer rebuilt at 16:9; the graph fixed for real

Franz's direct review of the fixed graph (§5.4) found it still broken —
differently on each aspect ratio: **overflowing off the slide on the left
in 4:3**, **rendering too small with unused white space in 16:9**. His
read: the plot's height was derived properly (§5.4's `minmax(42cqh,1fr)`)
but its *width* was never verified against the real container the same
way — and before fixing that, he asked what `build/index.html` (the raw
viewer, 4:3 by default) actually *is*: a delivery artifact, the QA tool,
or both — since virtually no real screen is 4:3 today and it looked like
two different jobs had been living inside one rendering shape.

**What `build/index.html` is, checked against its own doc
(`build/README.md`), not assumed:** it is the "runner" from **Stage 1**
— written before the Workshop shell (`course/index.html`) existed, when
there was no other way to present a converted deck. Its own doc still
calls it "How to present." But nobody has used it that way this session
or in the pipeline generally — the Workshop shell is the real delivery
surface, and the Workshop shell is **already 16:9-only**
(`.ew-embedded .slide { --slide-h: 594 }`). In practice, all session,
`build/index.html` has been used for exactly one thing: Franz opening a
raw slide, full chrome, full text, to catch defects the Workshop's own
pruned `?embed=1&visual=1` view hides — logo overlap, caption wrap, and
this graph, in that order. **It renders 4:3 not because 4:3 is a chosen
target, but because 1056×816 is the slide's native authoring canvas,
inherited unchanged from the source PPTX's 11×8.5in page** — the runner
was simply never updated to reinterpret that canvas at 16:9 the way the
Workshop shell already does. Conclusion: it is the QA tool (with a stale
"how to present" self-description from before Workshop existed), and per
Franz's decision it is rebuilt at 16:9, not retired.

**The rebuild — additive, does not touch the 4:3 canvas itself.** The
Workshop shell's 16:9 reinterpretation already exists as a CSS var
override (`--slide-h: 594`, driven by `?embed=1`) bundled together with
chrome-hiding and text-pruning. That bundle is wrong for a raw QA view —
it would hide exactly what the QA view exists to show. So the aspect
switch was split out into its own hook, independent of chrome:

- `emerson-workbench.css` §7a (new): `.ew-16x9 .slide { --slide-h: 594 }`
  + the letterbox-fit calc (`.ew-16x9 .ew-stage .slide { width:
  min(100%, calc((100vh - 5vmin) * 1056 / 594)) }`) — aspect only, chrome
  and text untouched. `.ew-embedded` (the Workshop shell's mode) is
  unchanged and now additionally carries `.ew-16x9` for the same aspect.
- `slides.js`: a new `?ratio=16x9` query flag adds `.ew-16x9` on its own;
  `?embed=1` now adds both `.ew-embedded` and `.ew-16x9`.
- `build/index.html`'s `go()` now requests `slides/FILE.html?ratio=16x9`
  for every slide — the raw viewer is 16:9 by default, chrome visible,
  nothing pruned, for every course (the file is engine-managed, propagated
  to all five). A slide opened bare with no query string still renders
  its native 4:3 canvas — an intentionally narrow residual, listed below.

**The graph, fixed against the one surviving target (16:9), with the
actual mechanism this time.** Two things were wrong, both because the
existing fix compared against the SVG's own intrinsic size instead of the
real container:

1. `grid-template-columns: 54% 27%` (already `%`, from §5.4) was correct
   as a *fraction*, but 54% was copied from the original (broken) `54cqw`
   port rather than from what the design this template was ported from
   actually uses. The gallery original —
   `.slide--role-application:has(.tpl-list) .tpl-content { grid-template-
   columns: 1fr 26cqw }` (proven, tp-010, already approved) — gives the
   chart nearly all the space and the key a fixed narrow column, not a
   54/27 split. Changed to `66% 26%` (with a `%` key margin fix to match).
2. `.tmpl-plot` was `justify-self:center` with `width:auto` — for a grid
   item, `justify-self` anything but `stretch` sizes the box to its
   **content**, and the SVG carries `width="640" height="366"` attributes
   as its intrinsic size. So `.tmpl-plot` was capping itself at literally
   640px regardless of the column's real width — full-size on a narrow
   window (looks fine), overflowing left once the column got wider than
   640px on a wide window (4:3's failure), and undersized whenever the
   column was narrower than 640px (16:9's failure, since 16:9's shorter
   slide gives a narrower absolute column at the same viewport). Fixed:
   `.tmpl-plot { place-self: stretch }` — the figure now fills its actual
   grid cell (66% of the real `.slide` width, whatever that is), and the
   SVG's own `preserveAspectRatio="xMidYMid meet"` (already in the
   markup, matching the gallery's `.tpl-chart` pattern) scales the
   *drawing* to fit inside that, centred — any leftover space is white
   letterbox inside the `<svg>`, invisible on the white slide, not a
   visible gap in the layout.

Net: the plot is now sized from the SVG's real aspect (`viewBox="0 0 640
366"`, ≈1.75) against the *actual* column width in whichever aspect ratio
is rendering — not a copied fixed value and not the SVG's own intrinsic
pixel size. It fills 66% of the slide width in every window size tested,
and the corresponding height, with no query resolving against the wrong
container.

**What was checked, specifically, before reporting this closed:**

- **The rebuilt raw viewer** (`build/index.html`, now `?ratio=16x9`,
  chrome and text untouched), at five window sizes spanning 1024–2560px
  wide (om1-005 and production 92/97/102): the plot holds at a consistent
  ~66% of slide width and does not overflow at any size — the exact
  viewport-dependent failure Franz found is gone because the fix no
  longer depends on viewport size at all (`%` grid tracks + `place-self:
  stretch`, not `cqw` on `.slide` itself or content-based sizing).
- **The Workshop shell** (`course/index.html`, om1's real 16:9 delivery
  surface), om1-005: plot fills 54%→66% of the card width, uses most of
  the card height, no overflow, no letterbox visible at this shorter
  aspect.
- **Regression, in the rebuilt raw viewer specifically** (16:9, full
  chrome): production 92, 97, 102 (graph — including 102's 4-entry key,
  to confirm the narrower key column still holds real key text), 35 and
  114 (multi-cell caption alignment, to confirm the earlier fix still
  holds at 16:9), 98 (the 4-line-note slide, to confirm the logo
  keep-out still holds at 16:9), 90 (check slide), 103 (2-line note),
  001/007 of the om1 deck. No regressions from either the graph fix or
  the aspect-ratio rebuild.
- **Template Gallery / Template Proof**, through the rebuilt raw viewer:
  tg-010 (role-check, gallery.css) and tp-010 (role-application graph,
  unaffected by the `.slide--tmpl-graph` change since it's a different
  template family) both render cleanly at 16:9 with full chrome — no
  regression from the aspect-ratio rebuild on the gallery templates.

**Flagged, not fixed — other places the pipeline still assumes or targets
4:3, so this doesn't quietly re-diverge:**

1. **`.slide`'s native canvas itself** (`width:1056px;
   aspect-ratio:1056/816` in `emerson-workbench.css`) — every `cqh`-based
   vertical value in the ~2400-line stylesheet, across every already-
   reviewed shipped slide, is tuned against this 816px-tall canvas; 16:9
   is achieved by reinterpreting it, not by a native 16:9 base. Re-basing
   the canvas itself to 594 would be the deep version of this decision
   and would touch the vertical layout of every shipped slide — not
   attempted here.
2. **`render-check.mjs`** (`40 - Engine/render/`) still runs a `'4:3'`
   pass (bare slide, no query params) as one of its two automated
   checks, and `render/README.md` carries a **historical findings
   baseline keyed to that mode** (mostly `outline`-status slides).
   Pointing that pass at `?ratio=16x9` too would be the direct parallel
   of the `build/index.html` fix, but it would shift or invalidate that
   documented baseline — a call for Franz, not a silent code change.
3. **Governing docs treat "4:3 and 16:9" as a standing double-check
   rule**, not just an implementation detail: `Course Porting Pipeline.md`
   (working rules, the Stage 3 pre-send checklist), `Style Guide.md`
   (logo/marker keep-out math specified "at both the 4:3 and 16:9 canvas
   ratios"), and `Pipeline Console.md` (the designed per-slide review
   rack has explicit "open-4:3 / open-16:9" actions). None edited here —
   this is a process-doc decision, not a slide fix.
4. **Print/PDF export** (`@page { size: 11in 8.5in }`,
   `@media print { .slide { width: 11in } }`) is explicitly 4:3-shaped,
   matching the source PPTX page. Not clear whether this is a deliberate,
   separate requirement (printed handouts) or another legacy carry-over —
   flagged as an open question, not assumed either way.
5. **Per-course `build/index.html` / `slides.js` / CSS** — fixed this
   pass, propagated to all five courses (14101, both Origination Tests,
   Template Gallery, Template Proof) and, for the three lock-tracked
   courses, re-synced via `build-course.ps1 -Force` so `_engine-lock.json`
   stays accurate. Listed for completeness, not as a remaining gap.

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
