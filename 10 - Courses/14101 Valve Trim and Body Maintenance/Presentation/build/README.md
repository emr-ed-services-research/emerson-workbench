---
title: 14101 Presentation — build
type: reference
course: "14101"
tags:
  - presentation
  - stage-1
updated: 2026-08-28
---

# 14101 Presentation — build

The HTML presentation artifact for **14101 Valve Trim and Body Maintenance** —
all **418 slides** converted from the source deck against the Emerson design
system. Method: [[14101 Presentation]] §4–§5.

> [!note] Shared runtime
> As of 2026-08-30, `css/emerson-workbench.css`, `css/tokens.css`,
> `css/TEMPLATES.md`, `assets/slides.js`, `assets/brand/` and `index.html` are
> **assembled from [[Engine|40 - Engine]]** by `build-course.ps1` — do not
> hand-edit them here. `_engine-lock.json` records which engine version placed
> them. The generator scripts also moved to `40 - Engine/generator/`; only
> `_generator/PROTECTED.txt` and this README stay per-course.

## How to present

Open **`index.html`** in a browser (Chrome/Edge). It reads `manifest.js` and
shows one slide at a time in a viewport.

| Key | Action |
| --- | --- |
| → / Space / Page Down | next slide |
| ← / Page Up | previous slide |
| Home / End | first / last slide |
| **G** | jump list (grouped by chapter; ⚠ marks slides with a conversion note) |
| **S** | speaker notes panel (12 slides have notes) |
| **R** | review mode — shows the conversion-note ribbon on the 33 flagged slides |
| **F** | fullscreen |
| click | reveal the answer on a "Check Your Knowledge" slide |

The URL hash is the slide number — `index.html#207` opens slide 207, so links
into the deck are shareable. Every `slides/1400-NNN.html` also opens standalone.

## Runner: no framework

A ~120-line vanilla JS/CSS runner (`index.html` + `assets/slides.js`), **no
dependencies**. Chosen over reveal.js / Marp because:

- The vault is offline and self-contained — no CDN, nothing to vendor.
- The slides already self-scale (CSS container units); reveal.js wants to own
  layout and scaling and would fight that.
- Stage 1 is a status-quo transfer — a slide viewer, not a slide framework.
- The slide files are plain HTML, so the runner is replaceable later with zero
  change to the 418 slides.

Slides load in an `<iframe>` (only one slide's DOM is live at a time — light on
memory across 418 image-heavy slides, and it works from `file://` where `fetch`
is blocked). `assets/slides.js`, linked by every slide, forwards nav keys to the
runner and handles the click-to-reveal.

## Layout

```
build/
  index.html                 the runner
  manifest.js / .json         418-entry slide index (n, file, family, section, title, notes, review)
  conversion-report.csv       per-slide: family, layout, #figures, #tables, #ole, flags
  asset-manifest.csv          648 media files: source -> asset -> converted?
  css/emerson-workbench.css   the design system (course-agnostic)
  assets/
    slides.js                 shared per-slide behaviour
    img/                       648 raster assets (imageNNN.*; EMF/WMF/WDP rasterised)
    brand/                     logos + cover art (curated)
  slides/
    1400-001.html .. 1400-418.html
  _preview/                    reference renders
```

## Conversion coverage

Every slide converts — title, body text (bullet levels, bold/italic runs,
per-slide font sizes), figures positioned from their EMU boxes, tables, speaker
notes, internal hyperlinks, Check-Your-Knowledge reveals, and the master chrome.

**Native vector artwork is rebuilt as SVG.** `generate.ps1` includes a
DrawingML→SVG converter — `<a:prstGeom>` (rect / ellipse / line / arrows),
`<a:custGeom>` path data (moveTo / lnTo / cubic & quad Bézier / close),
connectors, fills and strokes with theme-colour resolution, and group
transforms. The P&ID line-art, the bench-set / friction / calibration graphs,
the positioner and actuator cutaways, and the network topology diagrams are
recreated as editable `<svg>` layers behind the extracted text — **not**
screenshots.

**33 slides carry a conversion note** (visible only in the runner's Review
mode — press **R**; full list in `conversion-report.csv`):

| flag | slides | meaning |
| --- | ---: | --- |
| `svg-rebuilt` | 15 | dense diagram auto-rebuilt from 40+ native shapes |
| `ole-fallback` | 18 | an embedded OLE object; PowerPoint's own fallback EMF is rasterised and placed |

All 33 were **spot-checked against the original PowerPoint** — see
`spot-check.md`. Verdict: all present and teachable, no blockers. Residual
cosmetic items (easy-e cutaway on 45/46, a few text/figure overlaps) are listed
there.

Not yet handled: the 3 embedded Word documents (exercise handouts), and
`<a:arcTo>` path segments are approximated as straight lines (minor, affects a
few rounded diagram elements).

## Regenerating

`_generator/` holds `extract-media.ps1` and `generate.ps1`. Re-running
`generate.ps1` rewrites every `slides/*.html`, `manifest.*`, and
`conversion-report.csv` from the source deck. The design system
(`css/emerson-workbench.css`), the runner (`index.html`), and
`assets/slides.js` are hand-maintained.
