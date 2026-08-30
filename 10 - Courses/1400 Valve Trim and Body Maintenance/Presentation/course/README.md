---
title: 1400 Course Environment — proposal & proof
type: reference
course: "1400"
tags:
  - presentation
  - stage-2
updated: 2026-08-30
---

# 1400 Course Environment

A persistent learning-environment shell that wraps the converted 1400 content.
Not a slide viewer — the slides are one element inside a frame that stays put
while the learner moves around the course.

Open **`course/index.html`**.

## Status: proof — Day 1, Chapter 2, Modules 1–3

The frame, the day-based navigation, the context panel with position tracking,
the visual-only slides, and the present-mode toggles are all built. Three
modules of Chapter 2 (Day 1) are fully authored; the rest of the course is in
the contents as **outlines** — navigable to their source slides, without the
concept summary yet.

### Chapter 2 module re-audit

Slide-to-module assignment for Chapter 2 was re-cut against each module's
*stated objective and key concepts* rather than the inherited
check-your-knowledge slide positions, so the slide on screen always matches the
highlighted key concept. Chapter 2 went from 6 modules to 7:

| # | Module | Pages | Notes |
| --- | --- | --- | --- |
| 1 | Valve Bodies, Plugs & Seating | 27–32, 34–35 | gained the plug-tip / seat-ring slides that used to open Module 2 |
| 2 | Plug Guiding, Cages & Flow Characteristics | 36–40, 43 | retitled to cover post-guiding + the retainer; slide 36 reframed as the guiding intro; flow-characteristic slides 40/41/42 consolidated into slide 40 |
| 3 | easy-e Trim Seals & Packing | 45–47, 51–52 | seal slides 47–49 → slide 47; packing slides 52–54 → slide 52; slide 50 dropped |
| 4 | Body Disassembly & Seal Replacement | 55–61 | outline |
| 5 | Valve Lapping | 62–66 | outline |
| 6 | Packing Replacement & Adjustment | 68–72, 74–79 | outline |
| 7 | Reassembly & Gaskets | 81–85 | outline |

At roll-out, Module 3 may split again into an easy-e-family module and a
packing-types module; Modules 4–7 are a first cut of the old single
disassembly/reassembly module and should be reviewed against a full teach-through.

### Four-part content pass — Modules 1–3 (2026-08-29, proof)

A slide-level content and design pass beneath the module structure (structure
unchanged). Run on Modules 1–3 only, as a proof before applying to the rest of
the course. The four parts: (1) sequencing & framing — image matches the concept
being taught at that step; (2) cross-reference against the Source Library — the
Control Valve Handbook 6th ed. and the Fisher easy-e manuals (ES/ED/ET/EZ) — for
correctness and wording; (3) consolidate artificially split slides; (4) keep the
hierarchy, keep the visual + context-pane polish.

Highlights: the CYK on slide 33 was keyed to a wrong answer and was replaced with
a question on what drives an easy-e valve's standard shutoff class (answer: the
seating type); Module 2 gained a guiding-as-its-own-idea opening concept (slide 36
reframed) and was retitled; the post-guided concept was mapped to a cage-guided
slide and is fixed; ET standard shutoff on the easy-e table corrected from
Class IV to Class V per the current ET manual; slides 40/41/42, 47/48/49 and
52/53/54 each consolidated to one. Dropped slides keep their files for the
standalone deck and carry a `data-review="ch2-proof-pass"` ribbon.

Deferred by direction: slide 27 needs a full manual redraw with numbered callouts
keyed to an ordered list (`data-review="ch2-followup-redraw"`); the radius-tip vs
standard-tip shutoff wording needs a manual check against the ET manual's seating
diagram before roll-out (`data-review="ch2-proof-pass-verify"` on slides 34, 38);
slide 43's figure is an EZ cutaway and wants a contoured-plug profile; the three
rebuilt comparison slides (40, 47, 52) need a browser check for figure placement.

### Four-part pass — Day 1 rollout (2026-08-29)

Same four parts, extended across the rest of Day 1: **Chapter 1**, **Chapter 3**,
**Chapter 4**, **Workshop 1**. These chapters were outline-only, so this pass also
authors their module context panes (objective + key concepts) and sets them
`ready` / `visual`. Chapter 2 Modules 1–3 are done and left untouched; Chapter 2
Modules 4–7 remain a separate authoring task and are **not** in this rollout.
Recap given per chapter.

**Chapter 1 — Control Valve Specifications for Maintenance.** Three modules
authored, then a **template rebuild** (see `css/TEMPLATES.md`): four reusable
card templates were defined in `emerson-workbench.css` §7c —
1 module intro card (shell-rendered), 2 `.slide--tmpl-diagram` (numbered callouts
+ ordered list), 3 `.slide--tmpl-table` (real HTML reference table), 4
`.slide--tmpl-compare` (table + highlighted example row + paired illustration) —
and applied across Chapter 1:

- Ampersand bug fixed: `manifest.js` and slide 13's `<title>` had a
  double-encoded `&` → the "P&ID" nav label now reads correctly.
- **Slide 13** — auto-converted DrawingML sketch → hand-authored single
  control-loop P&ID in standard ISA-5.1 symbols (authored SVG, not extracted).
- **Slide 14** — floating overlapping labels → Template 2 (numbered markers +
  ordered list: actuator / bonnet / body).
- **Slides 15 + 16** → one Template 3 data table card (slide 16): the A216 WCC
  ASME B16.34 pressure/temperature table as real HTML. Old SVG chart and
  screenshot removed. Slide 15 dropped from the flow.
- **Slide 19** → Template 4 comparison table card: the six ANSI/FCI classes as
  real HTML, Class II highlighted and paired with the Class II cartoon.
  Screenshot `image32` removed.
- **Slides 20–24** deleted from the module flow (files kept for the standalone
  deck). Slide 17 also dropped (per-material matrix, a drill-down).

All values verified against Control Valve Handbook 6th ed. §5.2, §5.3, §5.20.1.
Rebuilt slides were browser-rendered and checked. Module pages: m1 13–14,
m2 16 (check 18), m3 19 (check 25).

Roll-out tuning still open on the rebuilt cards: vertical-centre the table on
slide 16, size/position the paired illustration on slide 19, nudge the slide-14
markers against the artwork, and tidy the slide-13 actuator dome.

### Four proof fixes (2026-08-30)

1. **Module boundaries** — the re-audit above.
2. **Responsive slides** — slide pages now scale to fit the stage on whichever
   axis runs out first (`body.page-view`, container-query sizing); no scrolling
   to see a whole slide.
3. **Adjacent nav** — Previous / Next are grouped bottom-right (`.nav__pair`);
   the progress dots keep the left.
4. **Collapsible days** — Module 0, each Day, and Wrap-Up are `<details>`
   sections. The rail collapses to those five rows; navigating to a module
   opens its day and chapter automatically.

### Slide card is a fixed 16:9 shape (2026-08-30)

The slide card no longer inherits the original PowerPoint page ratio. It is a
**fixed 16:9 shape** that scales fluidly to fill whatever space the rail
configuration leaves — contents open, context open, both, neither, present mode —
with no cropping, scrolling, or squashing.

- **Outer card** (`course.css`, `body.page-view .stage__card--page`):
  `aspect-ratio: 16/9`, `width: min(100cqw, 100cqh * 16/9)` inside a
  `container-type: size` stage.
- **Embedded slide** (`emerson-workbench.css`, `.ew-embedded .slide`):
  `--slide-h: 594` → a 1056×594 (16:9) canvas. All slide geometry is
  percentage / container-query based, so figures and title furniture reflow
  into the new ratio without distortion. The standalone deck viewer and print
  stay 4:3.
- **Known cosmetic**: figure boxes were authored for the 4:3 canvas, so on some
  slides the artwork sits high with white space along the bottom of the 16:9
  card. Re-centre / re-size the figure boxes per module during roll-out (or add
  a visual-mode vertical-fill pass).

## Structure

```
Course   1400 Valve Trim and Body Maintenance
 ├ Module 0    Before We Start          ← bookend: welcome, safety, logistics
 ├ Day 1   Sliding Stem                 ← the primary navigation identity
 │   └ Chapter (1, 2, 3, 4, Workshop 1) ← detail nested inside the day
 │        └ Module   objective · key concepts · pages · check
 ├ Day 2   Rotary   (5, 6, 7, 8, 9, Workshop 2)
 ├ Day 3   Positioners  (10, 11, 12, 13, Workshop 3)
 └ Wrap-Up                              ← bookend: summary, assessment, feedback
```

- **Days are the top-level story.** A learner sees Day 1 – Sliding Stem, Day 2 –
  Rotary, Day 3 – Positioners first. The 16 chapters still exist, but they read
  as detail *inside* a day, not as the structure.
- Each day ends with its **workshop** chapter (italic in the contents).
- **Module 0** and **Wrap-Up** are bookends — visually and structurally set
  apart from the day spine. Once done, they read as complete and out of the way.
- Day → chapter → module mapping lives in **`course.json`**.

## The three zones, one job each

| Zone | Job | Notes |
| --- | --- | --- |
| **Left rail** | Where am I / where can I go | Full contents: Module 0, the three days (each a section header) with their chapters and modules, then Wrap-Up. Current position highlighted; ready vs outline modules marked; done modules dotted. |
| **Centre** | Show | Module **overview** (title + objective + Start — no concept list, no topics list), a **slide page** (visual-only: diagrams, images, component labels, short headers — the explanatory bullets and paragraphs are stripped), or a **check** milestone. |
| **Right rail** | Teach | The **only** place explanatory text lives — module objective + concise key concepts. As you move through the module the currently-relevant concept **highlights** to track position. Click a concept to jump to its page. |

## Present mode

Two independent toggles in the header (or `[` / `]` keys), reachable without
leaving present mode:

- **◧ Contents** — the left navigation rail
- **Context ◨** — the right context panel

**⛶ Present** hides the left rail (clean flow) but **keeps the right context
panel** — the objective and key concepts stay on screen while presenting. The
presenter can then drop the context panel too for a full-bleed slide, or bring
the contents back, without exiting.

Deep links: `index.html?present=1`, `&nav=off`, `&context=off`, plus `#moduleId`
/ `#moduleId/pageIndex` / `#moduleId/check`.

## Visual-only slides

For a module marked `"visual": true` in `course.json`, its slide pages load with
`?visual=1`. `build/assets/slides.js` then:

- hides `.slide-body` (the explanatory bullet / paragraph body),
- hides any positioned label / caption longer than a short phrase (> 28 chars or
  > 5 words),
- keeps the title, figures, tables, and short component callouts.

Non-destructive — the standalone slide viewer still shows the full text. Flip
`visual` per module (or globally) at roll-out.

## Source library shelf

The **📚 icon** in the header opens the Source Library as an overlay **over the
presentation pane only** — the rails and header stay put. It is a reference
shelf, not a place you navigate to:

- Opens to an index with two parts:
  - **Primary sources** — the [[Emerson Control Valve Handbook|Control Valve
    Handbook]] and the four [[Industry Handbooks|sourcebooks]] as large flat
    **cover-style tiles** in a single row (solid brand colour per book, white
    title, code / edition beneath — a CSS recreation of each real cover, no
    scanned images).
  - **Instruction manuals** — the sixteen [[Technical Publications|manuals]] in
    three fixed columns by document type, left to right: **Actuators**
    (sliding-stem actuators, then rotary), **Valve Bodies** (all globe and
    rotary body manuals together), **Positioners** (the two digital valve
    controllers). No day labels or badges.
  - The historical archive is **not** shelved here.
- **Responsive:** both the five-tile row and the three columns hold their wide
  layout and scale down proportionally as the pane narrows (`.libov__index` is
  a named container `libidx`; tile type uses container units). Only when the
  index drops below ~460px (genuine phone-portrait) do they stack into a single
  column.
- Cover colours are stylised brand approximations — the real covers are dark
  photographic art. Swap the `color` values in `course.json` if exact hexes are
  wanted.
- Click a document → it opens as a scrollable PDF inside the overlay
  (`‹ Library` goes back to the index; **Open ↗** pops it into a new tab for a
  second monitor).
- **Nothing is lost either way.** Opening or closing the shelf never touches the
  course route, so closing returns to the exact course page you were on. Each
  PDF gets its own `<iframe>` that is created once and then only shown / hidden
  — never reloaded — so reopening the shelf returns to the same document at the
  same scroll position. The overlay is `visibility:hidden` when closed, not
  `display:none`, which is what keeps the PDF state alive.
- While the shelf is open, `Esc` closes it and course-navigation keys are
  suppressed so the page underneath can't move.

Defined in `course.json` under `"library"`: `base` path, a `primary` array
(`{id, title, kicker?, meta, color, file}`) for the cover tiles, and `columns`
(`{title, docs[]}`) for the three manual columns. Deep links:
`index.html?lib=1` (open the shelf),
`index.html?lib=<docId>` (open straight to a manual, e.g. `?lib=tp-dvc6200`).
Scope: works across the whole shelf now; the toggle-without-losing-place
behaviour was proved against the Chapter 2 pages.

## Files

```
course/
  index.html      the shell
  course.css      shell styles (EMERSON tokens; day sections, bookends, context highlight)
  course.js       runtime — day/chapter/module TOC, routing, context tracking,
                  present-mode toggles, progress, source-library shelf
  course.json     the structure + the "library" shelf (edit this)
  course-data.js  generated — window.EW_COURSE = {…}
```

Regenerate `course-data.js` after editing `course.json`:

```powershell
$j = [IO.File]::ReadAllText("course.json",[Text.Encoding]::UTF8)
[IO.File]::WriteAllText("course-data.js","window.EW_COURSE = $j;",(New-Object Text.UTF8Encoding($false)))
```

## Roll-out checklist

1. For each of the remaining ~50 modules: write the one-sentence `objective` and
   4–6 `keyConcepts` (each `{ "t": "...", "pages": [n] }`), confirm `pages` /
   `check`, and set `"status": "ready"` and `"visual": true`.
2. Review the visual-only stripping per chapter — some label thresholds may need
   tuning (three-photo caption columns, spec call-outs).
3. Author the Module 0 and Wrap-Up page content if the source slides aren't
   enough on their own.
4. Optional: real completion / quiz scoring instead of "pages seen".
