---
title: Course Porting Pipeline
type: plan
tags:
  - project
  - pipeline
  - stage-2
updated: 2026-08-29
---

# Course Porting Pipeline

> [!note] Status
> **In progress.** Consolidates the 1400 course-engine architecture review
> (2026-08-29). Repeatable process for bringing any PowerPoint course into the
> Workbench; belongs under [[Roadmap]] Stage 2.
>
> - **Step 1 done (2026-08-30):** `git init` + `.gitignore`; the generator guard
>   (`generate.ps1` refuses to overwrite `PROTECTED.txt` slides without `-Force`).
> - **Step 2 done (2026-08-30):** engine extracted to [[Engine|40 - Engine]];
>   `build-course.ps1` assembles a course's `Presentation/` from it; the three
>   de-coupling fixes applied (slide prefix, shell title, colour tokens) plus
>   per-course localStorage namespacing. Verified in-browser for 1400.
>
> Open decisions at the end; mirror into [[Open Questions]].

## Purpose

One repeatable process to port a PowerPoint course into the Emerson Workbench:
**bulk-convert → cut to the teaching arc → author the context layer → run the
four-part slide pass → verify → publish.**

[[1400 — Course Home|1400]] was the proving ground. Everything below is extracted
from what worked there and what forked. The goal of writing it down is to stop
re-deriving the process per course and to make the engine a shared asset instead
of a thing that gets copied.

## Where we are (2026-08-29)

- **1400 fully converted** — all 418 slides on the component-extraction model
  (semantic HTML per slide against a shared design system).
- **The shell layer is solid.** `course.js` / `course.css` / `course.json` are
  chapter-agnostic — no per-chapter code. The drop-a-slide-from-flow / keep the
  file / mark it with a `data-review` ribbon convention is identical across
  chapters.
- **The four-part slide-redesign process is proven** on Chapter 2 modules 1–3
  and Chapter 1.
- **Four reusable slide templates exist** (see
  `Presentation/build/css/TEMPLATES.md`): module intro card, labelled diagram
  card, data table card, comparison table card. Each has **exactly one
  consumer** so far — "shared" is built but unproven.
- **Authoring is three-tiered, not two:**
  1. *Templated* — Chapter 1 (m1–m3).
  2. *Authored but not templated* — Chapter 2 (m1–m3): full context panes, but
     its consolidated slides use ad-hoc markup that predates the templates.
  3. *Outline only* — Chapter 2 m4–m7, Chapter 3, Chapter 4, Workshop 1: page
     ranges and a one-line objective, nothing else.

## The blocker

**The engine lives inside course 1400's folder** —
`10 - Courses/1400 Valve Trim and Body Maintenance/Presentation/` holds
`course.js`, `course.css`, `emerson-workbench.css`, `slides.js`, the shell
skeleton, the `_generator/` scripts, and the templates.

Porting a second course today means copying all of that into its folder — an
immediate fork. Every later engine fix (a template, a `course.js` change, a
palette tweak) then has to be applied N times, and the courses drift — the exact
failure this project exists to end.

**Nothing else in this plan is worth doing until the engine is a shared asset
every course references.**

### Engine extraction

Move the engine to a shared location. A course then reduces to: its
`course.json`, its `slides/`, its media, and its source-library shelf config —
all pointing at one engine.

De-coupling fixes required first (all small):

| Coupling | Fix |
| --- | --- |
| `course.js` hardcodes `"1400-"` in the slide-iframe `src` (2 lines) | read `course.code + "-"`, or add a `slidePrefix` field to `course.json` |
| Shell `index.html` hardcodes the course title and header string | render them from `course-data.js` on boot |
| `course.css` re-declares 6 EMERSON colour tokens that also live in `emerson-workbench.css` | one shared `tokens.css` both import — or the shell also loads the design system |

## Pipeline stages

| Stage | Input | Output | Owner | Automatable |
| --- | --- | --- | --- | --- |
| **0 · Bulk convert** | `.pptx` | `slides/*.html`, `manifest.*`, `conversion-report.csv` | script | Fully — `extract-media.ps1` + `generate.ps1`. Works today. |
| **1 · Cut the teaching arc** | converted deck + source chapter list + [[teaching-philosophy]] | `course.json` skeleton: days → chapters → modules, page ranges, `status: "outline"` | human | No — this is the judgement the philosophy governs. Scaffold only. |
| **2 · Author the context layer** | skeleton + [[Source Library]] | per module: `objective`, 4–6 `keyConcepts` (`{t, pages}`), `check`, `visual: true`, `status: "ready"` | human + Claude | Partly — Claude drafts from slides + source; human approves. |
| **3 · Four-part slide pass** | authored module + [[Source Library]] | templated, polished slides; splits consolidated; dropped slides ribboned; unverifiable claims flagged | Claude + human review | Partly — procedure is defined; needs the template library and the data-single-source decision to be clean. |
| **4 · Verify & publish** | rebuilt slides | browser-render checks, 16:9 tuning, `course-data.js` regenerated, integrity-validated | script + human | Mostly — one `verify.ps1`. |

### Stage 0 — Bulk convert

Already built and reliable. `extract-media.ps1` unpacks and rasterises media;
`generate.ps1` walks each slide's shape tree, classifies the layout family,
extracts title / body / figures / tables / notes / hyperlinks / CYK reveals,
rebuilds native vector artwork as SVG, and writes one HTML file per slide plus
the manifest and a conversion report. Two conversion flags are emitted:
`svg-rebuilt` (dense diagram auto-rebuilt) and `ole-fallback` (embedded object,
PowerPoint's fallback image rasterised).

**Its one defect: it is a one-shot.** Re-running it rewrites every `slides/*.html`
from the `.pptx` with no knowledge of downstream hand work. See *Infrastructure
prerequisites → generator guard*.

### Stage 1 — Cut the teaching arc

Human decides, from what is taught in what sequence:

- **Days** — the top-level identity (1400: Sliding Stem / Rotary / Positioners).
- **Chapters** — detail nested inside a day.
- **Module boundaries** — cut from each module's stated objective and key
  concepts, **not** the deck's chapter order or its check-your-knowledge slide
  positions.

Governed by [[teaching-philosophy]] ("structure mirrors the teaching arc, not
the source deck") and the 1400 module-boundary work. Output is a `course.json`
skeleton with every module `status: "outline"`.

Scaffolding possible (not required): a script that *proposes* modules from the
deck's section breaks and CYK positions for a human to re-cut.

### Stage 2 — Author the context layer

Per module, write:

- a one-sentence `objective`;
- 4–6 `keyConcepts`, each `{ "t": "...", "pages": [n] }`, in
  instructor-talking-point voice;
- confirm `pages` / `check`;
- set `"visual": true` and `"status": "ready"`.

Correctness is checked against the [[Source Library]] here — this is where the
four-part process's **Part 2** (source cross-reference) begins. Claude drafts
from the slides plus the relevant Handbook / manual sections; the human approves
each module.

Requires: readable Source Library PDFs (Poppler is installed locally — see the
`reading-source-library-pdfs` note).

### Stage 3 — The four-part slide pass

A slide-level content and design pass **beneath** the module structure (the
day / chapter / module hierarchy never changes). Run per module.

1. **Sequencing & framing.** Go slide by slide. Does the image match the concept
   being introduced at that exact step? Where a slide introduces a narrower idea
   (e.g. *trim*) while showing the fuller assembly (body + bonnet), reorder or
   re-crop so the visual matches what is being taught at that moment; save the
   fuller view for when the broader concept is actually introduced.
2. **Source cross-reference.** For each module, check the relevant Handbook
   chapter and the applicable Fisher manuals — for correctness *and* framing.
   Pull in clearer diagrams where the source has them; fix wording that does not
   quite say the right thing once checked against the real source. Any claim that
   cannot be confirmed against source material is **flagged explicitly as
   unresolved**, not guessed.
3. **Consolidate artificially split slides.** Where one idea has been spread
   across many near-identical slides (one slide per leakage class, per flow
   characteristic, per packing type), combine them into one well-designed slide
   — a comparison table or a single labelled figure — so related items can be
   seen and compared together.
4. **Hierarchy + polish.** Keep day / chapter / module exactly as they are. Every
   resulting slide, however much it consolidates, gets the same clean visual
   treatment and context-pane parity as the rest of the course.

**Ground rules:**

- No pixel-level re-cropping or diagram extraction from source PDFs in place.
  Flag those as specific follow-up recommendations.
- Where a slide's image and its key-concept text do not match, fix the framing
  or reorder — do not leave them out of sync.
- Dropped-but-retained slides keep their files (for the standalone deck) and
  carry a `data-review` ribbon naming the pass.

Inputs: the existing slide fragments plus the relevant Source Library documents.
Outputs: revised slide fragments and updated context-pane text where framing or
wording needs fixing; image / diagram references changed where needed; the
day / chapter / module hierarchy untouched.

Depends on: the template library (Stage 3 builds *on* templates, never one-off
HTML for a shape a template covers) and the data-single-sourcing decision.

### Stage 4 — Verify & publish

One `verify.ps1` that folds in the checks currently run by hand each pass:

- headless-Chrome render of every rebuilt slide and every shell module;
- HTML tag-balance on changed slides;
- `course.json` JSON validity;
- every `keyConcepts` page ref is inside its module's `pages` array;
- `manifest.js` parses; its titles match the slide `<h1>`s;
- CSS brace balance.

Then: the 16:9 figure-box tuning pass, `course-data.js` regenerated from
`course.json`, README updated.

## Infrastructure prerequisites

### Blocks the pipeline — true before Stage 0 runs on a second course

1. **Engine extracted** to a shared location (see *The blocker*).
2. **Version control.** This working copy is **not a git repository**. Every
   stage lays irreversible hand work over machine output; without git the
   generator trapdoor and every future one stay unrecoverable. ~5 minutes.
3. **Generator guard + hand-owned boundary.** `generate.ps1` refuses to
   overwrite slides that have diverged from their last generated state
   (checksum manifest, or a `PROTECTED` list), `-Force` required to override.
   Plus the written rule: **a chapter is hand-owned once authored; the generator
   only bulk-converts not-yet-touched chapters.** ~half a day. Turns Stage 0
   from a foundation risk into a fenced hazard.

### Needed for Stage 3 to be clean — decide before scaling

4. **Data single-sourcing decision.** Slide *values* (leakage numbers, spec
   tables) currently live only in HTML and are duplicated — the ANSI/FCI figures
   exist in three unsynced places (table, retained cartoons, key-concept prose);
   the ES/ED/ET/EZ table is physically copied four times. Two viable answers:
   - **Data layer** — reference values move to `course.json` or a sibling
     `course-data/*.json`; tables render from them; corrections propagate. More
     upfront work; matches the [[Roadmap]] Stage 2 "shared source content" goal.
   - **Lint + convention** — values stay in HTML; a check flags when the same
     labelled table / number appears in more than one file with different
     content. Cheaper; catches drift but does not single-source.
   - *Lean:* data layer for genuine recurring reference tables (leakage classes,
     ASME P/T, the easy-e matrix), lint for everything else.
5. **Template library as a real set.** Four templates, one consumer each. Before
   Stage 3 runs on another chapter: **convert Chapter 2 slide 27 to the labelled
   diagram card** — the slide that motivated inventing that template, still
   unconverted; it is the real test of "chapter-agnostic." Then adopt the rule:
   a new slide shape gets a new template, never one-off HTML.
6. **`data-review` vocabulary → controlled set**, surfaced in `manifest.js` and
   `conversion-report.csv` so the deck runner's review mode and the pipeline's
   own reporting see the same flags. (Currently forked:
   `svg-rebuilt`, `ole-fallback`, `ch2-proof-pass`, `ch2-proof-pass-verify`,
   `ch2-followup-redraw`, `ch1-proof-pass`, `ch1-proof-pass-verify`,
   `ch1-template-rebuild`, `ch1-followup-redraw`.)

### Can follow — cleanup, not blockers

7. Manifest / slide-title drift → regenerate `manifest.js` titles from the slide
   `<h1>`s as a `verify.ps1` step.
8. **Converge Chapter 2** — back-align its consolidated slides (40, 47, 52) onto
   Templates 3 and 4. Its own stage: Chapter 1 is currently structurally *ahead*
   of the reference baseline, which is backwards from build order.
9. **Pull the three authoring tiers to one bar.** Outline chapters enter at
   Stage 2; Chapter 2 m1–m3 enters at Stage 3; Chapter 1 needs only its tuning
   nits. A pipeline that only describes "author the next outline chapter" leaves
   the middle tier stranded.

## Recommended sequence

| # | Action | Effort | Status |
| --- | --- | --- | --- |
| 1 | `git init` + generator guard | ½ day | **done 2026-08-30** |
| 2 | Extract the engine + the 3 de-coupling fixes | 1–2 days | **done 2026-08-30** |
| 3 | Prove Template 2 on Chapter 2 slide 27; decide the data-single-source split | 1 day + a decision | next |
| 4 | Write `verify.ps1` (render + validate) | 1 day | |
| 5 | Pipeline exists → run "converge Chapter 2", "finish Ch3 / Ch4 / WS1", then port course #2 as the real test | ongoing | |

Steps 1–4 are roughly one week. They are the difference between "we redesigned
one course by hand with Claude's help" and "we have a way to do this."

### Step 2 as built

- Engine at **`40 - Engine/`** (peer to `10 - Courses/`), with `Presentation/`
  mirroring a course's tree so relative paths resolve identically both places.
- **`build-course.ps1`** assembles a course's `Presentation/` from the engine.
  Per-course files untouched; `_engine-lock.json` records what was placed;
  hand-edited targets are skipped without `-Force`; a snapshot precedes any
  first assembly or forced run.
- De-coupling: `slidePrefix` in `course.json` (fallback `code + "-"`); shell
  title + header from `course.json` at runtime; the EMERSON palette in one
  `tokens.css` imported by both stylesheets; `localStorage` keys namespaced
  `ew<code>.*`.
- Still coupled (deferred): the generator scripts (`1400` + absolute paths
  throughout), the standalone deck runner's three "1400" strings, the
  copyright-year token. Tracked in [[Engine]] "Known not-yet-decoupled".

## Open decisions

Mirror into [[Open Questions]] once reviewed.

- ~~**Engine location**~~ — resolved 2026-08-30: `40 - Engine/`, peer to
  `10 - Courses/`; courses assembled from it by `build-course.ps1`.
- **Data layer scope** — which tables / values move to a data layer versus stay
  in HTML behind a lint check.
- **Generator future** — retire it from authored chapters (recommended) versus
  invest in a merge-aware / patch-overlay rebuild.
- **Stage 1 scaffolding** — does the teaching-arc cut get a proposing script, or
  stay fully manual.
- **Bench Notes / Bench Book** — this pipeline covers the *presentation*
  artifact. Where does generation of the instructor / student guides from shared
  source content ([[Roadmap]] Stage 2) attach — a parallel Stage 3', or later.

## Related

[[Roadmap]] · [[Open Questions]] · [[teaching-philosophy]] · [[1400 Presentation]] ·
[[Source Library]] · `Presentation/build/README.md` ·
`Presentation/course/README.md` · `Presentation/build/css/TEMPLATES.md`
