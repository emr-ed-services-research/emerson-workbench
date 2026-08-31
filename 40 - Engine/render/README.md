---
title: Render check
type: reference
tags:
  - project
  - engine
updated: 2026-08-31
---

# Render check — `verify.ps1` step 4

Renders every rebuilt slide in headless Chrome and reports the
machine-checkable part of the [[Course Porting Pipeline]] Stage 3 pre-send
checklist. This is working rule 1's render, run across the whole deck.

Runs as section 7 of `verify.ps1`, and can be called directly (the Pipeline
Console's Stage 3 pass will call it per module with `--json`).

## What it checks

Each slide is rendered **twice** — standalone 4:3 (`.slide` is `1056 × 816`,
`overflow: hidden`) and in the shell's visual mode 16:9
(`?embed=1&visual=1` → `.ew-embedded`, `.slide` is `1056 × 594`, long text
pruned). Per render:

| Check | What it flags |
| --- | --- |
| **load-clean** | any page error, `console.error`, or failed resource load (a 404 image, a missing stylesheet) |
| **broken-image** | an `<img>` that did not decode (`naturalWidth === 0`) |
| **clipping** | a visible descendant of `.slide` whose box escapes the slide frame by more than 2 px on any edge — content that `overflow: hidden` is silently cutting. Only the outermost offender on each branch is reported. |

Human-judgement checklist items are **not** here — callout accuracy, geometry
accuracy, and the polish bar stay with the reviewer (in the console, the Stage 3
human-confirm sub-gates).

## Warn-only

Every finding is `[warn]`. It never changes `verify.ps1`'s exit code and never
blocks a Pipeline Console stage. Checks get promoted to `[FAIL]` one at a time
once the baseline below stays clean through a few more chapters.

## Baseline — 1400, 2026-08-31

Full run: **418 slides, 410 clean, 10 warnings on 8 slides.**

**The finished chapters (1–2, slides 12–86) are completely clean.** Every
warning is in front matter, back matter, or an outline chapter that has not been
through the Stage 3 pass:

| Slide | Chapter | Finding | Read as |
| --- | --- | --- | --- |
| 001 | front matter | 16:9 `img.cover-photo` bottom 77px | cover art composed for 4:3; the 16:9 shell crop is expected |
| 009 | front matter | 4:3 `p` bottom 6px | marginal; recheck if front matter is ever redesigned |
| 112 | ch3 (outline) | 4:3 `div.slide-textbox` left 19px | raw converted body text; Stage 3 removes/reflows it |
| 191 | ch5 (outline) | 4:3 `div.slide-textbox` right 97px | same |
| 225 | ch7 (outline) | 4:3 `div.slide-textbox` right 57px | same |
| 301 | ch10 (outline) | `figure.slide-figure` bottom ~40px both modes | raw converted figure; Stage 3 re-crops / re-templates |
| 387 | ch14 workshop (outline) | 4:3 `ul` right 1128px | raw converted list positioned off-canvas; Stage 3 rebuilds |
| 416 | back matter | `figure.slide-figure` left 11px both modes | raw converted figure |

None of these is a regression in shipped work. They are the pre-Stage-3 state of
unconverted slides, and re-running the check after each chapter's Stage 3 pass is
how that chapter's warnings should go to zero.

## Usage

```
npm --prefix "40 - Engine/render" install        # one time

node render-check.mjs --course "1400 Valve Trim and Body Maintenance"
node render-check.mjs --course "..." --slides 30,31,62
node render-check.mjs --course "..." --json
node render-check.mjs --course "..." --chrome "C:/path/to/chrome.exe"
```

- Uses `puppeteer-core` against the installed Chrome (auto-detected in the
  standard Windows locations, or `--chrome`). No bundled Chromium.
- `RENDER_CONCURRENCY` env var (default 6) tunes parallel pages. A full 418-slide
  deck is ~2–3 min; a single module is a few seconds.
- Exit 0 always (warn-only); exit 2 only on a bad argument. A missing Chrome or
  missing `node_modules` is a single `[warn]`, not a failure — `verify.ps1`
  skips the section with a warning in that case.
