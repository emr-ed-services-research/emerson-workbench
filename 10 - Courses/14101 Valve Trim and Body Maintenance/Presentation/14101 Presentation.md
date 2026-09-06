---
title: 14101 Presentation — Working Notes
type: reference
course: "14101"
tags:
  - presentation
  - stage-1
updated: 2026-08-28
source_deck: "14101 Valve Trim & Body Maintenance.pptx"
---

# 14101 Presentation — Working Notes

Stage 1 conversion of the 14101 deck into an HTML presentation artifact. See
[[Roadmap#Stage 1 — Status Quo Transfer (Pilot)]] and [[14101 — Course Home]].

> [!info] Source of this analysis
> Everything below was read directly from
> `Source Deck/14101 Valve Trim & Body Maintenance.pptx` (the OOXML package was
> unzipped and every slide's XML parsed). No visual/manual slide review has
> been done yet — figures still need eyes on them.

## Constraints (unchanged from Stage 1 scope)

- Match the original PowerPoint look and feel: layout, colours, fonts, master
  furniture. **No redesign.**
- Content is transferred verbatim. Flag anything unclear rather than rewriting.
- Output must open and present on a standard classroom machine/browser.
- Unifying the instructor/student guides is **not** in this stage.

---

## 1. Deck facts

| | |
| --- | --- |
| File | `14101 Valve Trim & Body Maintenance.pptx` (≈ 183 MB) |
| Slides | **418** (0 hidden) |
| Page size | 10 058 400 × 7 772 400 EMU = **11.0 in × 8.5 in**, landscape (US Letter "course book" format, 1.294 : 1 — *not* 4:3 or 16:9) |
| Theme | "Course book Template Mar 2019", colour scheme named **EMERSON** |
| Slide masters | 2 (identical furniture; master 1 footer © 2023, master 2 © 2024) |
| Slide layouts | 43 defined (24 + 19), 17 actually used |
| Speaker notes | 289 note pages exist; only **12** carry substantive text (the rest are empty) |
| Authoring app | PowerPoint 16 (Microsoft 365), company "Fisher Controls" |
| Word count | ~16 300 words across ~3 670 paragraphs |

### Content totals

| Metric | Count |
| --- | ---: |
| Slides carrying ≥ 1 image | 318 |
| Slides carrying editable text | 347 |
| Image + text slides | 249 |
| Image-only slides (no body text) | 69 |
| Text-only slides (no image) | 98 |
| Slides with a table | 11 |
| Slides with embedded OLE objects | 18 |
| "Check Your Knowledge" review slides | 53 |
| "Exercise" / "Workshop" slides | 8 |
| Effectively empty slides | 2 (slide 2 MyCONNECT, slide 4 Legal — template placeholders) |
| Total image placements | 678 (max 11 on one slide — 368 "Guided Setup with HART DD") |

### Media assets in the package

| Type | Files | Size | Handling |
| --- | ---: | ---: | --- |
| PNG | 540 | 149 MB | copy as-is |
| JPG / JPEG | 79 | 20 MB | copy as-is |
| EMF (vector) | 22 | 6.8 MB | convert to SVG (keep editable) |
| WMF (vector) | 2 | 0.03 MB | convert to SVG |
| WDP (HD Photo) | 1 | 0.01 MB | convert to PNG |
| SVG | 2 | — | already vector |
| **Total media** | **649** | **≈ 176 MB** | |
| OLE objects (`oleObject*.bin`) | 17 (across 18 slides) | — | legacy Visio/drawing — extract fallback EMF/WMF, flag for review |
| Embedded Word docs | 3 | 122 KB | extract to `assets/docs/`, identify |

---

## 2. Deck structure — 16 chapters + front/back matter

The deck follows a printed course book. Slide 11 is a Table of Contents keyed to
book page numbers. Each chapter opens with a **"Chapter/Section Page"** divider
carrying a numbered title and a "the student will be able to:" objectives list.

| Section | Slides | Range | Images | Editable text | Tables | OLE | Check-Your-Knowledge |
| --- | ---: | :---: | ---: | ---: | ---: | ---: | ---: |
| Front matter (cover, sign-in, legal, safety, TOC) | 11 | 1–11 | 5 | 9 | 0 | 0 | 0 |
| Ch 1 — Important Control Valve Specifications for Maintenance | 14 | 12–25 | 10 | 9 | 0 | 5 | 2 |
| Ch 2 — Fisher Easy-E Valve Maintenance | 61 | 26–86 | 52 | 58 | 5 | 1 | 6 |
| Ch 3 — Fisher Sliding Stem Spring & Diaphragm Actuator Maintenance | 40 | 87–126 | 30 | 35 | 0 | 1 | 5 |
| Ch 4 — Fisher Sliding Stem Piston Actuator Maintenance | 19 | 127–145 | 14 | 18 | 0 | 1 | 3 |
| Ch 5 — Fisher Butterfly Valve Maintenance | 38 | 146–183 | 31 | 32 | 0 | 0 | 6 |
| Ch 6 — Fisher Vee-Ball Valve Maintenance | 30 | 184–213 | 24 | 23 | 0 | 0 | 5 |
| Ch 7 — Fisher Eccentric Plug Valve Maintenance | 22 | 214–235 | 17 | 18 | 0 | 0 | 4 |
| Ch 8 — Fisher Rotary Valve Packing Maintenance | 11 | 236–246 | 8 | 11 | 0 | 0 | 2 |
| Ch 9 — Fisher Rotary Actuator Maintenance | 44 | 247–290 | 37 | 36 | 0 | 0 | 4 |
| Ch 10 — Basics of Positioner Operation | 17 | 291–307 | 7 | 12 | 0 | 6 | 4 |
| Ch 11 — FIELDVUE Digital Valve Controller | 38 | 308–345 | 31 | 33 | 2 | 2 | 5 |
| Ch 12 — Connecting to Device using ValveLink Mobile | 12 | 346–357 | 8 | 12 | 0 | 0 | 2 |
| Ch 13 — FIELDVUE DVC6200 Configuration & Calibration (Emerson Communicator) | 31 | 358–388 | 21 | 30 | 4 | 0 | 5 |
| Ch 14 — Workshop 1: Sliding Stem | 7 | 389–395 | 6 | 1 | 0 | 0 | 0 |
| Ch 15 — Workshop 2: Rotary | 8 | 396–403 | 7 | 1 | 0 | 0 | 0 |
| Ch 16 — Workshop 3: FIELDVUE DVC6200 | 6 | 404–409 | 4 | 2 | 0 | 0 | 0 |
| Conclusion & back matter | 9 | 410–418 | 6 | 7 | 0 | 2 | 0 |
| **Total** | **418** | | **318** | **347** | **11** | **18** | **53** |

Notes on the sections:

- **Front matter** — cover (1), MyCONNECT placeholder (2), sign-in with 8 logos
  (3), legal placeholder (4), "what you will learn" (5), ES experience (6),
  course overview (7), learning-environment safety ×2 (8–9), safety in training
  (10), TOC (11).
- **Ch 2** is the largest chapter (61 slides). The deck's 11 tables sit in
  Ch 2, 11 and 13: the easy-e seal comparison tables (46–50), the DVC
  relay / window-mount tables (319, 339) and the DVC setup / calibration
  parameter tables (360, 363, 378, 384).
- **Ch 10** (positioner operation) is the most animation-heavy: 6 of its 17
  slides use OLE objects (298–301, 305–306) — the relay-action / actuator-
  response sequences that were almost certainly click-built in the original.
- **Ch 1** slides 20–24 (ASME leakage Class II–VI) are OLE drawings.
- **Ch 14 / 15 / 16 (workshops)** are mostly full-bleed "Blank White" photo
  pages (one image, no text) behind each divider.
- **Back matter** — Conclusion breaker (410), summary outcomes (411), assess
  KSA (412), feedback form with 8 images (413), contact us (414), additional
  info (415), then 3 trailing blank/OLE slides (416–418).

Full per-slide inventory: **[[#Appendix A — per-slide inventory]]**.

---

## 3. Layout families

17 of the 43 defined layouts are used. ~98 % of slides fall into 8 families,
which become the CSS layout classes in the conversion (see §5).

| Layout (PowerPoint name) | Slides | Proposed CSS class | Shape |
| --- | ---: | --- | --- |
| 2 Column with Logo | 129 | `.slide--two-col` | title · text column / figure column |
| 1 Column With / Without Logo | 113 | `.slide--one-col` | title · single column |
| Title Only | 104 | `.slide--title-only` | title · free figure area |
| 3 Photo 3 Column (with / without logo) | 25 | `.slide--three-photo` | title · 3 equal figure+caption cells |
| Blank White | 20 | `.slide--blank` | full-bleed figure |
| Chapter/Section Page | 16 | `.slide--divider` | blue wedge · number/title · objectives |
| Title, Text, and Content | 4 | `.slide--title-text-content` | title · text · boxed content |
| 4 Column With Subheads | 1 | `.slide--four-col` | title · 4 subhead cells |
| **One-offs (hand-built)** | | | |
| Book cover w/ graphic | 1 | `.slide--cover` | photo + blue angled panel |
| Breaker Emerson Blue | 1 | `.slide--breaker` | full blue field, white title |
| Table of Contents | 1 | `.slide--toc` | page-numbered contents list |
| Legal_Page / MyCONNECT_Page | 2 | — | template placeholders, likely drop or replace |

---

## 4. Design system (read from the deck)

Everything here is extracted from `theme1.xml`, `slideMaster1.xml`,
`slideMaster2.xml` and the layout XML. This is the "approved design system" the
shared stylesheet must reproduce.

### 4.1 Page geometry (EMU → inch; ÷ 914 400)

| Element | Position (from top-left) | Size | Notes |
| --- | --- | --- | --- |
| Slide | — | 11.00 in × 8.50 in | landscape |
| Title box | 0.378 in, 0.340 in | 10.243 in × 1.050 in | text **bottom-aligned** in box, left-aligned |
| Title / body divider rule | y = 1.422 in | full-bleed width, 0.75 pt | colour Emerson Blue `#004B8D` |
| Body box | 0.378 in, 1.649 in | 10.243 in × 5.805 in | |
| Footer band (chrome) | y ≈ 7.49 in → 8.10 in | | logo + copyright + page number |
| Copyright text | 0.378 in, 8.098 in | | 8 pt, `#959797`, left |
| Page number | 10.193 in, 8.097 in | | 7 pt, `#959797`, right, auto field |
| Corporate logo | 9.403 in, 7.488 in | 1.338 in × 0.651 in | bottom-right |
| Content margins | ≈ 0.38 in left / right | | |

Recommended HTML canvas: fixed **1056 × 816 px** (96 dpi) or **1320 × 1020 px**
(120 dpi), scaled responsively with `transform: scale()`; keep the 11:8.5 ratio.

### 4.2 Colour palette — scheme "EMERSON"

| Token | Hex | Theme slot | Where it's used |
| --- | --- | --- | --- |
| Emerson Blue | `#004B8D` | accent1 / dk2 / tx2 | titles, divider rule, chapter wedge, cover panel, objective lists |
| Charcoal | `#3F4040` | dk1 / tx1 | body text (often lightened to 75 % → mid-grey) |
| Grey | `#959797` | lt2 / bg2 | footer text, page numbers, captions |
| White | `#FFFFFF` | lt1 / bg1 | page background |
| Green | `#62BB46` | accent2 | callouts / status |
| Cyan | `#00A4D2` | accent3 | callouts / diagrams |
| Yellow | `#FFCF22` | accent4 | callouts / highlights |
| Orange | `#F79428` | accent5 | callouts / warnings |
| Purple | `#6E298D` | accent6 | callouts |
| Link teal | `#00AA7E` | hlink | hyperlinks |
| Visited crimson | `#D31245` | folHlink | followed hyperlinks |

### 4.3 Typography

| Role | Face | Size | Weight | Colour | Align |
| --- | --- | ---: | --- | --- | --- |
| Slide title | Arial | 24 pt | regular | `#004B8D` | left, bottom of box |
| Cover / breaker title | Arial | 28 pt | bold | white | — |
| Chapter number + title | Arial | 28 pt | regular | `#004B8D` | bottom-right block |
| Body level 1 | Arial | 15 pt | regular | `#3F4040` | bullet `•` (grey) |
| Body level 2 | Arial | 12.5 pt | regular | `#3F4040` | dash `–` |
| Body levels 3–5 | Arial | 12.5 pt | regular | `#3F4040` | `•` / `–` / `»` |
| Objective list (dividers) | Arial | 12.5 pt | regular | `#004B8D` | auto-numbered `1.` |
| Footer copyright | Arial | 8 pt | regular | `#959797` | left |
| Page number | Arial | 7 pt | regular | `#959797` | right |

- Paragraph rhythm: line height 90 %, 3 pt space before/after.
- **Individual slides frequently override run sizes** (e.g. slide 30 uses
  20 pt / 16 pt bullets). Extraction must read run-level `sz` / `b` / `i` /
  `solidFill`, not assume master defaults.
- **Fonts present in the file:** Arial (theme major + minor — the workhorse),
  Arial Narrow, **DTL Argo T / DTL Argo T Light** (Emerson corporate display
  face — licensed; appears in section furniture), Calibri, Tahoma, Times, Times
  New Roman, Courier New, Wingdings (dingbats), MS PGothic (CJK fallback).
- **Web font stack:** `"Arial", "Helvetica Neue", Helvetica, "Liberation Sans",
  system-ui, sans-serif`. Treat DTL Argo as an optional `@font-face` with Arial
  fallback — do not block on the licence for Stage 1.

### 4.4 Master furniture ("chrome" every content slide inherits)

- **Header:** left-aligned title in Emerson Blue, 24 pt, sitting on a full-bleed
  0.75 pt Emerson-Blue horizontal rule at 1.42 in from the top.
- **Footer, left:** `© Emerson Educational Services, <year>, All Rights
  Reserved`, 8 pt grey. Master 1 says 2023, master 2 says 2024 — **normalise to
  one current year.**
- **Footer, right:** auto page number, 7 pt grey.
- **Logo:** Emerson corporate 2-colour logo (`CORP_2C_Standard.png`),
  bottom-right, 1.34 in × 0.65 in. White variant (`CORP_2C_White.png`) on the
  cover and blue breaker. In the conversion the logo is referenced **once** from
  CSS — never pasted per slide.
- **Background:** white.

### 4.5 Signature graphic language

- **Chapter/Section Page:** white background; a large solid Emerson-Blue
  right-triangle rising from the bottom-left corner; chapter number + title
  (28 pt blue, bottom-aligned) upper-right; thin blue rule; "After completing
  this module the student will be able to:" (16 pt blue); auto-numbered
  objective list; logo bottom-right.
- **Cover:** right ~45 % is a full-bleed photo; a blue angled panel overlays the
  left ~62 %; course number + title 28 pt bold white lower-left; white rule;
  version/date in white; white Emerson logo bottom-right; a second logo
  (Educational Services) bottom-left.
- **Breaker Emerson Blue:** full blue field, white centred title (used once, for
  "Conclusion").

---

## 5. Conversion approach (adopted)

**Principle: component extraction, not screenshots.** No slide is captured as a
flattened image. Each slide's parts come out separately — text as editable text,
images as individual files — and each slide is rebuilt as HTML against a shared
stylesheet that encodes the design system in §4. The goal is that a later edit
to one slide's wording or one figure is a one-file change with no rebuild.

### 5.1 Pipeline

1. **Unpack** the `.pptx` (it is a zip). Pull `ppt/slides/slideN.xml` +
   `ppt/slides/_rels/*`, `ppt/media/*`, `ppt/embeddings/*`, `ppt/theme/theme1.xml`,
   `ppt/notesSlides/*`.
2. **Resolve slide order** from `presentation.xml` `<p:sldIdLst>` via
   `presentation.xml.rels` (slide file numbers are *not* in presentation order).
3. **Assets**
   - Raster media (PNG/JPG, 619 files) → `assets/img/`, renamed
     `s{NNN}-{k}.{ext}` (slide-scoped), with a manifest mapping original
     `imageK.ext` → new name → slide(s). Dedupe byte-identical files.
   - EMF/WMF (24) → convert to **SVG** (LibreOffice headless or Inkscape); keep
     the SVG so the drawing stays editable. High-res PNG only as a fallback.
   - `.wdp` (1) → PNG.
   - **OLE objects (18 slides):** legacy Visio/drawings behind the ASME
     leakage-class diagrams (20–24) and the Ch 10 positioner sequences. They do
     not decompose cleanly — extract the fallback EMF PowerPoint stores for
     each, convert to SVG, and **flag every one for a human to confirm or
     redraw.** Track in a checklist.
   - 3 embedded Word docs → `assets/docs/`, identify (likely exercise handouts).
4. **Text** — for each slide walk `spTree`; classify each `<p:sp>` by its
   `<p:ph>` type (title / body / other); read paragraphs and runs preserving
   list level (`<a:pPr lvl>`), run properties actually present, bullet vs none,
   and hyperlinks (including `ppaction://hlinksldjump` internal jumps). Emit
   **semantic HTML** — `<h1 class="slide-title">`, `<ul><li data-level>`,
   `<p>` — never absolutely-positioned text spans.
5. **Geometry** — for figure regions, translate `<a:off>/<a:ext>` EMU →
   percentage of the 11 × 8.5 canvas. For the ~410 slides on the 8 standard
   layout families (§3), snap onto the CSS-grid layout classes instead of
   literal coordinates; only bespoke slides keep per-element positioning.
6. **Assemble** — one file per slide, `slides/1400-NNN.html`, each an
   `<article class="slide slide--{family}">` holding the region markup plus a
   shared `slide-chrome` partial (rule, footer, page number, logo — filled by
   CSS). Substantive speaker notes go in `<aside class="notes" hidden>`.
7. **Stylesheets**
   - `emerson-workbench.css` — course-agnostic base: design tokens as CSS custom
     properties (`--emerson-blue: #004B8D` …), the type scale, the master
     furniture, the layout-family grid classes.
   - `course-14101.css` — course-specific overrides only.
   - The logo lives in the CSS/chrome partial **once**.
8. **Presentation runner** — keyboard/click navigation + a notes view. reveal.js
   or Marp can host the fragments, or a ~50-line vanilla script. This choice is
   the open item in [[Open Questions#Rendering stack]]; the slide fragments are
   framework-neutral so it stays reversible.

### 5.2 Folder layout (proposed, under `Presentation/`)

```
Presentation/
  14101 Presentation.md        ← this note
  build/
    slides/1400-001.html … 1400-418.html
    assets/
      img/        s001-1.png …            (renamed raster media)
      vector/     s020-1.svg …            (converted EMF/WMF/OLE)
      docs/       exercise-1.docx …
      logo/       emerson-corp-2c.svg
    css/
      emerson-workbench.css
      course-14101.css
    index.html                ← deck runner
    asset-manifest.csv         ← original name ↔ new name ↔ slide(s)
```

### 5.3 What "fast to edit" means afterward

- **Change wording** → open `slides/1400-NNN.html`, edit the text, save. No build.
- **Replace a figure** → drop the new file over `assets/img/s042-1.png` (same
  name), or repoint one `src`. Nothing else regenerates.
- **Brand-wide change** → edit tokens in `emerson-workbench.css`; all slides
  follow.
- The `.pptx` stays untouched in `Source Deck/` as the reference. Stage 1
  conversion is one-way.

### 5.4 Fidelity risks to resolve during the build

- [ ] **Click-built diagrams** — Ch 10 positioner/relay sequences (298–301,
  305–306) and ASME leakage classes (20–24) are OLE + animation; static
  extraction loses the build. Decide: split into sub-slides, or one SVG with a
  CSS/JS reveal.
- [ ] **53 "Check Your Knowledge" slides** — check the animation XML for
  click-to-reveal answers; rebuild as simple show/hide.
- [ ] **Internal hyperlink navigation** — e.g. slide 30's plug images jump to
  31/32. Preserve as in-deck anchor links.
- [ ] **Trademark glyphs** — ™ / ® pervade Fisher product names; keep as literal
  Unicode.
- [ ] **Two masters** — normalise the 2023 vs 2024 copyright to one year.
- [ ] **DTL Argo licence** — confirm before shipping the web font; Arial
  fallback is fine for the pilot.
- [ ] **Front-matter placeholders** — slides 2 (MyCONNECT) and 4 (Legal) are
  empty template pages; confirm whether they drop or get real content.
- [ ] **Large media** — a few images exceed 3 MB (image193.png, image170/171.jpg);
  down-res for web delivery, keep originals in `Source Deck/`.

---

## 6. Build — all 418 slides converted

Lives in **`Presentation/build/`** (see its `README.md`). Open
`build/index.html` to present; any `build/slides/1400-NNN.html` also opens
standalone.

### Runner — decided: no framework

A ~120-line vanilla JS/CSS runner (`index.html` + `assets/slides.js`), zero
dependencies. Chosen over reveal.js / Marp because the vault is offline (nothing
to vendor), the slides already self-scale (reveal.js would fight that), Stage 1
wants a viewer not a framework, and the slide files stay plain HTML so the
runner is replaceable later at no cost. One slide loads at a time in an
`<iframe>` (light across 418 image-heavy slides; works from `file://`).
Keys: →/Space/PgDn, ←/PgUp, Home/End, **G** jump list, **S** notes, **R**
review mode, **F** fullscreen, click to reveal a Check-Your-Knowledge answer.
`index.html#207` deep-links to a slide.

### Generation

`build/_generator/` holds `extract-media.ps1` (648 media files → `assets/img`,
EMF/WMF/WDP rasterised) and `generate.ps1` (walks each slide's shape tree,
flattens groups, classifies the layout family, extracts title / body / figures /
tables / notes / hyperlinks / CYK reveals, **and rebuilds native vector artwork
as SVG** → `slides/*.html` + `manifest.*` + `conversion-report.csv`).

### Vector rebuild

`generate.ps1` carries a DrawingML→SVG converter: `<a:prstGeom>` (rect / ellipse
/ line / arrows), `<a:custGeom>` paths (moveTo / lnTo / cubic & quad Bézier /
close), connectors, fills / strokes with theme-colour resolution, group
transforms. The P&ID line-art, the bench-set / friction / calibration graphs,
the positioner and actuator cutaways, and the network topology diagrams are
recreated as editable `<svg>` layers behind the extracted text — not
screenshots. 28 slides carry a rebuilt SVG.

### Coverage

Every slide converts fully. **33 slides carry a conversion note** (shown only in
the runner's Review mode; listed in `conversion-report.csv`):

| flag | slides | meaning |
| --- | ---: | --- |
| `svg-rebuilt` | 15 | dense diagram auto-rebuilt from 40+ native shapes — spot-check against the `.pptx` |
| `ole-fallback` | 18 | embedded OLE object; PowerPoint's own fallback EMF is rasterised and placed — confirm it matches (ASME leakage classes 20–24, positioner sequence 298–306, DVC block diagram, curriculum maps 416–417, …) |

The 11 layout families render against `css/emerson-workbench.css` — Arial type,
`#004B8D` titles / rules / divider wedge / cover panel, grey footer, logo. 49
Check-Your-Knowledge slides have working click-to-reveal answers. 12 slides carry
speaker notes.

## 7. Spot-check — done

All 33 flagged slides were exported from the source `.pptx` with PowerPoint
itself and compared side by side with the conversion — full findings in
**`build/spot-check.md`**. Verdict: **all present and teachable, no blockers.**
The OLE fallbacks match exactly (PowerPoint generated them); the SVG rebuilds
(bench-set graphs, positioner and actuator cutaways, deadband, friction) are
faithful. Two fixes landed during the check: EMF/WMF now render on a transparent
canvas (fixed slide 23, where an overlay was hiding the diagram) and off-canvas
graphicFrame coordinates are caught and re-placed.

Residual cosmetic items (full-polish pass, not blockers):

1. **45 / 46** — the easy-e cutaway's upper actuator is clipped (source group
   has broken child-scaling); redraw that group or drop in a clean cutaway image.
2. **299 / 301 / 312** — two-column body text overlaps the placed figure at the
   column edge.
3. **304** — caption wraps into the footer; **15** — bullet blank-line spacing.
4. Extract the 3 embedded Word documents (exercise handouts) into `assets/docs/`.
5. Confirm the DTL Argo web-font licence, or accept the Arial fallback.
6. Down-res the heaviest images (`assets/img` is ~160 MB) if vault size matters.
7. Second-instructor walk-through against the live `.pptx`.

---

## Appendix A — per-slide inventory

Content key: **Img×n** = n picture placements · **Text** = editable body text ·
**Table×n** · **OLE×n** = embedded object · **Notes** = substantive speaker
notes. Divider rows show "Text" (the objectives list) and a blank title (the
section title sits in a non-title placeholder).

<!-- BEGIN per-slide table -->
| # | Slide | Section | Layout | Content | Title |
| ---: | --- | --- | --- | --- | --- |
| 1 | slide1 | Front | Book cover w/ graphic | Text | 14101 Valve Trim and Body Maintenance |
| 2 | slide2 | Front | MyCONNECT_Page | (empty) | - |
| 3 | slide3 | Front | Title Only | Imgx8, Text | Sign-in Information |
| 4 | slide4 | Front | Legal_Page | (empty) | - |
| 5 | slide5 | Front | 1 Column Without Logo Layout | Imgx1, Text, Notes | What you will learn in this learning event: |
| 6 | slide6 | Front | 4 Column With Subheads  | Imgx4, Text, Notes | Educational Services Experience |
| 7 | slide7 | Front | Title Only | Text | Course Overview |
| 8 | slide8 | Front | Title Only | Imgx1, Text, Notes | Learning Environment – Facility and Emergency Safety Plans |
| 9 | slide9 | Front | Title Only | Text | Learning Environment - Safety |
| 10 | slide10 | Front | Content | Imgx3, Text | Safety in Training |
| 11 | slide11 | Front | Table of Contents | Text | - |
| 12 | slide12 | Ch 1 | Chapter/Section Page | Text | - |
| 13 | slide13 | Ch 1 | Title Only | Imgx6, Text | Piping and Instrumentation Diagram (P&ID) |
| 14 | slide14 | Ch 1 | 1 Column With Logo Layout | Imgx1, Text | Control Valve |
| 15 | slide15 | Ch 1 | 2 Column with Logo | Text | ASME Class Pressure/Temperature: Review |
| 16 | slide16 | Ch 1 | 2 Column with Logo | Imgx1, Text | Pressure Class: Table |
| 17 | slide17 | Ch 1 | 1 Column With Logo Layout | Imgx1, Text | Pressure Class: Table (ASME CL600) |
| 18 | slide18 | Ch 1 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: ASME Class |
| 19 | slide19 | Ch 1 | 2 Column with Logo | Imgx1, Text | ANSI/FCI: Review |
| 20 | slide20 | Ch 1 | Title, Text, and Content | Imgx1, OLEx2 | Class II Shutoff |
| 21 | slide21 | Ch 1 | Title, Text, and Content | Imgx1, OLEx2 | Class III Shutoff |
| 22 | slide22 | Ch 1 | Title, Text, and Content | Imgx1, OLEx2 | Class IV Shutoff |
| 23 | slide23 | Ch 1 | 1 Column With Logo Layout | Imgx2, OLEx4 | Class V Shutoff |
| 24 | slide24 | Ch 1 | Title, Text, and Content | Imgx1, OLEx2 | Class VI Shutoff |
| 25 | slide25 | Ch 1 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Leakage Class |
| 26 | slide26 | Ch 2 | Chapter/Section Page | Text | - |
| 27 | slide27 | Ch 2 | Title Only | Imgx1, Text | Globe Body - Major Components |
| 28 | slide28 | Ch 2 | Title Only | Imgx2, Text | Valve Bodies – Globe vs Angle |
| 29 | slide29 | Ch 2 | Title Only | Imgx2, Text | PDTC vs. PDTO Globe Valves |
| 30 | slide30 | Ch 2 | 2 Column with Logo | Imgx2, Text | Valve Plugs |
| 31 | slide31 | Ch 2 | 2 Column with Logo | Imgx2, Text | Unbalanced Plug |
| 32 | slide32 | Ch 2 | 2 Column with Logo | Imgx3, Text | Balanced Plug |
| 33 | slide33 | Ch 2 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Plugs |
| 34 | slide34 | Ch 2 | Title Only | Imgx2, Text | Standard vs. Radius Plug |
| 35 | slide35 | Ch 2 | Title Only | Imgx4, Text | Seat Ring |
| 36 | slide36 | Ch 2 | 2 Column with Logo | Imgx2, Text | Cage / Seat Ring Retainer |
| 37 | slide37 | Ch 2 | 2 Column with Logo | Imgx3, Text, Notes | Cage Guided Valve |
| 38 | slide38 | Ch 2 | 2 Column with Logo | Imgx2, Text | Post Guided Valve |
| 39 | slide39 | Ch 2 | 1 Column With Logo Layout | Imgx1, Text | Flow Characteristic with Cage |
| 40 | slide40 | Ch 2 | Title Only | Imgx2, Text | Quick-Opening Cage |
| 41 | slide41 | Ch 2 | Title Only | Imgx2, Text | Linear Cage |
| 42 | slide42 | Ch 2 | Title Only | Imgx2, Text | Equal Percentage Cage |
| 43 | slide43 | Ch 2 | Title Only | Imgx1, Text | Formed Plug Characterization |
| 44 | slide44 | Ch 2 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Valve Cage |
| 45 | slide45 | Ch 2 | 1 Column With Logo Layout | Text | Fisher™ easy-e ™  Valves |
| 46 | slide46 | Ch 2 | 1 Column With Logo Layout | Text, Tablex1 | Fisher™ easy-e ™  Valves |
| 47 | slide47 | Ch 2 | 1 Column With Logo Layout | Imgx2, Text, Tablex1 | ED Graphite Seal Ring |
| 48 | slide48 | Ch 2 | 1 Column With Logo Layout | Imgx2, Text, Tablex1 | ET Standard PTFE two-piece |
| 49 | slide49 | Ch 2 | 1 Column With Logo Layout | Imgx1, Text, Tablex1 | ET Optional Spring backed PTFE |
| 50 | slide50 | Ch 2 | 1 Column With Logo Layout | Imgx1, Text, Tablex1 | EZ |
| 51 | slide51 | Ch 2 | 2 Column with Logo | Imgx1, Text | Packing |
| 52 | slide52 | Ch 2 | 2 Column with Logo | Imgx2, Text | PTFE Packing |
| 53 | slide53 | Ch 2 | 2 Column with Logo | Imgx2, Text | Graphite Packing |
| 54 | slide54 | Ch 2 | 2 Column with Logo | Imgx3, Text | ENVIRO-SEAL™ Packing |
| 55 | slide55 | Ch 2 | 1 Column With Logo Layout | Imgx3, Text | Fisher™ Easy-E™ Valve  Maintenance |
| 56 | slide56 | Ch 2 | 2 Column with Logo | Imgx3, Text | Body Maintenance - Disassembly |
| 57 | slide57 | Ch 2 | 2 Column with Logo | Imgx2, Text | Basic Plug Maintenance |
| 58 | slide58 | Ch 2 | 1 Column With Logo Layout | Imgx3, Text | Balanced Plug Piston Seal Replacement |
| 59 | slide59 | Ch 2 | 3 Photo 3 Column with logo | Imgx4, Text | ED Seal Maintenance: Graphite Ring |
| 60 | slide60 | Ch 2 | 3 Photo 3 Column with logo | Imgx5, Text | ET Seal Maintenance:  Standard Two-Piece Seal |
| 61 | slide61 | Ch 2 | 3 Photo 3 Column with logo | Imgx4, Text | ET Seal Maintenance: Optional Spring Loaded Seal |
| 62 | slide62 | Ch 2 | 1 Column With Logo Layout | Imgx2 | Valve Lapping |
| 63 | slide63 | Ch 2 | 1 Column With Logo Layout | Imgx1, Text | Valve Lapping |
| 64 | slide64 | Ch 2 | 2 Column with Logo | Imgx4, Text | Valve Lapping with Standard Seat Plug: Procedure |
| 65 | slide65 | Ch 2 | 3 Photo 3 Column with logo | Imgx3, Text | Valve Lapping: Procedure Continued |
| 66 | slide66 | Ch 2 | 1 Column With Logo Layout | Imgx2, Text | Plug and Cage Damage |
| 67 | slide67 | Ch 2 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Lapping |
| 68 | slide68 | Ch 2 | 1 Column With Logo Layout | Imgx4 | Packing Replacement |
| 69 | slide69 | Ch 2 | 2 Column with Logo | Imgx2, Text | Packing Removal |
| 70 | slide70 | Ch 2 | Title Only | Imgx3, Text | Spring-Loaded PTFE Packing Maintenance |
| 71 | slide71 | Ch 2 | Title Only | Imgx2, Text | Jam-style PTFE Packing |
| 72 | slide72 | Ch 2 | 2 Column with Logo | Imgx4, Text | Jam Style Packing Compression |
| 73 | slide73 | Ch 2 | 1 Column With Logo Layout | Text | Check Your Knowledge 5: PTFE Packing |
| 74 | slide74 | Ch 2 | 2 Column with Logo | Imgx2, Text | Graphite Packing Maintenance |
| 75 | slide75 | Ch 2 | 2 Column with Logo | Imgx3, Text | Jam Style Packing Compression |
| 76 | slide76 | Ch 2 | 2 Column with Logo | Imgx1, Text | High-Seal Live-Loaded Packing Maintenance |
| 77 | slide77 | Ch 2 | Title Only | Imgx4, Text | High Seal Packing Compression |
| 78 | slide78 | Ch 2 | Title Only | Imgx3, Text | ENVIRO-SEAL Packing Components |
| 79 | slide79 | Ch 2 | Title Only | Imgx5, Text | ENVIRO-SEAL Maintenance |
| 80 | slide80 | Ch 2 | 1 Column With Logo Layout | Text | Check Your Knowledge 6: Packing Adjustment |
| 81 | slide81 | Ch 2 | 1 Column With Logo Layout | Imgx1, Text | Assembly |
| 82 | slide82 | Ch 2 | Title Only | Imgx5, Text | Gaskets |
| 83 | slide83 | Ch 2 | 1 Column With Logo Layout | Imgx3, Text | Gasket Locations |
| 84 | slide84 | Ch 2 | 2 Column with Logo | Imgx3, Text | Body Maintenance - Assembly |
| 85 | slide85 | Ch 2 | 1 Column With Logo Layout | Imgx2, OLEx2 | Spiral Wound Gasket Types |
| 86 | slide86 | Ch 2 | 1 Column With Logo Layout | Text, Notes | Check Your Knowledge 1: Body Maintenance |
| 87 | slide87 | Ch 3 | Chapter/Section Page | Text | - |
| 88 | slide88 | Ch 3 | Title Only | Imgx2, Text | Direct and Reverse Acting Constructions |
| 89 | slide89 | Ch 3 | Title Only | Imgx1, OLEx2 | Selecting an Action |
| 90 | slide90 | Ch 3 | 1 Column With Logo Layout | Text | Check Your Knowledge 1:  Fail Action |
| 91 | slide91 | Ch 3 | Title Only | Imgx1, Text | Valve Forces |
| 92 | slide92 | Ch 3 | 1 Column With Logo Layout | Text | Bench set Definition |
| 93 | slide93 | Ch 3 | 1 Column With Logo Layout | Imgx2, Text | PDTO vs. PDTC Valve |
| 94 | slide94 | Ch 3 | Title Only | Imgx1, Text | Direct-Acting Actuator (657 size  i ) |
| 95 | slide95 | Ch 3 | 2 Column with Logo | Imgx2, Text | Fisher™ 657 Spring Action |
| 96 | slide96 | Ch 3 | Title Only | Imgx1, Text | Verify Name Plate Information |
| 97 | slide97 | Ch 3 | Title Only | Text | Bench Set Concept - Direct Action |
| 98 | slide98 | Ch 3 | Title Only | Imgx2, Text | Measure Actuator Travel Low Bench Set |
| 99 | slide99 | Ch 3 | Title Only | Imgx2, Text | Measure Actuator Travel High Bench Set |
| 100 | slide100 | Ch 3 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Bench Set |
| 101 | slide101 | Ch 3 | 2 Column with Logo | Imgx2, Text | Mounting 657 Actuator |
| 102 | slide102 | Ch 3 | 2 Column with Logo | Imgx2, Text | 657 Measure Travel Mounted on Valve |
| 103 | slide103 | Ch 3 | 2 Column with Logo | Imgx2, Text | Stem Connector Installation |
| 104 | slide104 | Ch 3 | Title Only | Text | Setting Travel 657- No Friction |
| 105 | slide105 | Ch 3 | Title Only | Imgx3 | 657 Maintenance - Disassembly |
| 106 | slide106 | Ch 3 | 2 Column with Logo | Imgx2, Text | 657 Maintenance - Assembly |
| 107 | slide107 | Ch 3 | Title Only | Imgx2 | Diaphragm Casing Bolt Torque |
| 108 | slide108 | Ch 3 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Fisher™ 657 |
| 109 | slide109 | Ch 3 | Title Only | Imgx1, Text | Reverse-Acting Actuator (667 size  i ) |
| 110 | slide110 | Ch 3 | 2 Column with Logo | Imgx2, Text | Fisher™ 667 Spring Action |
| 111 | slide111 | Ch 3 | Title Only | Imgx1, Text | 667 Actuator Information |
| 112 | slide112 | Ch 3 | Title Only | Text | Bench Set Concept – Reverse Acting |
| 113 | slide113 | Ch 3 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Bench Set Movement |
| 114 | slide114 | Ch 3 | 2 Column with Logo | Imgx3, Text | 667 Actuator: Measure Travel Screwdriver |
| 115 | slide115 | Ch 3 | Title Only | Imgx2 | 667 Actuator Mounting |
| 116 | slide116 | Ch 3 | Title Only | Imgx3, Text | 667 Actuator Mounting Procedure |
| 117 | slide117 | Ch 3 | 2 Column with Logo | Imgx2, Text | 667 Measure Travel Mounted on Valve |
| 118 | slide118 | Ch 3 | 2 Column with Logo | Imgx2, Text | Stem Connector |
| 119 | slide119 | Ch 3 | Title Only | Imgx2, Text | Setting Travel 667- No Friction |
| 120 | slide120 | Ch 3 | 2 Column with Logo | Imgx2, Text | 667 Maintenance - Removing Spring |
| 121 | slide121 | Ch 3 | 2 Column with Logo | Imgx3, Text | 667 Maintenance - Removing Seal Bushing |
| 122 | slide122 | Ch 3 | 2 Column with Logo | Imgx3, Text | 667 Maintenance – Diaphragm Change-out |
| 123 | slide123 | Ch 3 | 2 Column with Logo | Imgx1, Text | 667 Maintenance - Assembly |
| 124 | slide124 | Ch 3 | Title Only | Imgx2 | 667 Diaphragm Casing Torque |
| 125 | slide125 | Ch 3 | Title Only | Imgx1, Text | Deadband |
| 126 | slide126 | Ch 3 | 1 Column With Logo Layout | Text | Check Your Knowledge 5:  Deadband |
| 127 | slide127 | Ch 4 | Chapter/Section Page | Text | - |
| 128 | slide128 | Ch 4 | Title Only | Imgx2, Text | Operation |
| 129 | slide129 | Ch 4 | Title Only | Imgx1, OLEx2 | Fail Action with Spring |
| 130 | slide130 | Ch 4 | 1 Column With Logo Layout | Text | Fail Action No Spring |
| 131 | slide131 | Ch 4 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: Fail Action |
| 132 | slide132 | Ch 4 | 2 Column with Logo | Imgx2, Text | Fisher™ 685 - Double Acting |
| 133 | slide133 | Ch 4 | 2 Column with Logo | Imgx1, Text | Fisher™ 585C - Double Acting |
| 134 | slide134 | Ch 4 | Title Only | Imgx2, Text | Fisher™ Spring Biased |
| 135 | slide135 | Ch 4 | 2 Column with Logo | Imgx2, Text | 585C / 585CR |
| 136 | slide136 | Ch 4 | 2 Column with Logo | Imgx1, Text | 685SE / 685SR |
| 137 | slide137 | Ch 4 | 2 Column with Logo | Imgx2, Text | 585C - Determine Fail Mode |
| 138 | slide138 | Ch 4 | 2 Column with Logo | Imgx3, Text | 585C Maintenance - Removing Cylinder |
| 139 | slide139 | Ch 4 | 2 Column with Logo | Imgx2, Text | 585C Seal Maintenance |
| 140 | slide140 | Ch 4 | 2 Column with Logo | Imgx1, Text | 585C Maintenance - Change Bias Spring |
| 141 | slide141 | Ch 4 | 1 Column With Logo Layout | Imgx1, Text | 585C Thrust Tables |
| 142 | slide142 | Ch 4 | 1 Column With Logo Layout | Imgx2, Text | 585C Setting Travel – Measure (Size 25 and 50) |
| 143 | slide143 | Ch 4 | 2 Column with Logo | Imgx3, Text | 585C Install Stem Connector (Size 25 and 50) |
| 144 | slide144 | Ch 4 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Seals |
| 145 | slide145 | Ch 4 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Spring |
| 146 | slide146 | Ch 5 | Chapter/Section Page | Text | - |
| 147 | slide147 | Ch 5 | 3 Photo 3 Column with logo | Imgx2, Text | Fisher™ Butterfly Valves |
| 148 | slide148 | Ch 5 | 2 Column with Logo | Imgx1, Text | Swing through Valve Discs |
| 149 | slide149 | Ch 5 | 2 Column with Logo | Imgx1, Text | Lined Body Valve Fisher 9500 |
| 150 | slide150 | Ch 5 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: Rotation |
| 151 | slide151 | Ch 5 | 2 Column with Logo | Imgx1, Text | Fisher 9500 Maintenance |
| 152 | slide152 | Ch 5 | 2 Column with Logo | Imgx2, Text | 9500 Disassembly: Thrust Sleeve Removal |
| 153 | slide153 | Ch 5 | 3 Photo 3 Column with logo | Imgx3, Text | 9500 Disassembly: Disk and Liner Removal |
| 154 | slide154 | Ch 5 | 3 Photo 3 Column with logo | Imgx3, Text | 9500 Assembly: Liner and thrust sleeves |
| 155 | slide155 | Ch 5 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Shutoff |
| 156 | slide156 | Ch 5 | 2 Column with Logo | Imgx3, Text | 9500 Assembly - Installing Disc |
| 157 | slide157 | Ch 5 | 3 Photo 3 Column with logo | Imgx2, Text | 9500 Assembly - Install Thrust Sleeve and Plates |
| 158 | slide158 | Ch 5 | 2 Column with Logo | Imgx2, Text | 9500 Adjustments When Installed |
| 159 | slide159 | Ch 5 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Packing |
| 160 | slide160 | Ch 5 | Title Only | Imgx1 | Mounting Fisher 9500 |
| 161 | slide161 | Ch 5 | 2 Column with Logo | Imgx1, Text | High Performance Butterfly Valves |
| 162 | slide162 | Ch 5 | 2 Column with Logo | Imgx5, Text | HPBV Operation |
| 163 | slide163 | Ch 5 | 2 Column with Logo | Imgx3, Text | HPBV Seals |
| 164 | slide164 | Ch 5 | Title Only | Imgx1 | HPBV Seals 8580 and Control-Disk™ |
| 165 | slide165 | Ch 5 | Title Only | Imgx2, Text | HPBV Disks |
| 166 | slide166 | Ch 5 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Metal Seal |
| 167 | slide167 | Ch 5 | Title Only | Imgx5, Text | Fisher 8580 / Control-Disk Features |
| 168 | slide168 | Ch 5 | Title Only | Imgx1 | 8580 / Control-Disk Maintenance |
| 169 | slide169 | Ch 5 | 2 Column with Logo | Imgx4, Text | 8580 / Control-Disk - Disassembly |
| 170 | slide170 | Ch 5 | 2 Column with Logo | Imgx3, Text | 8580 / Control-Disk - Disassembly |
| 171 | slide171 | Ch 5 | 2 Column with Logo | Imgx3, Text | Disassembly - Follower Shaft Removal |
| 172 | slide172 | Ch 5 | 2 Column with Logo | Imgx3, Text | Disassembly - Drive Shaft Removal |
| 173 | slide173 | Ch 5 | Title Only | Imgx3 | Disassembly - Remove Drive Shaft and Disk |
| 174 | slide174 | Ch 5 | 1 Column With Logo Layout | Text | Check Your Knowledge 5: HBPV Disassembly |
| 175 | slide175 | Ch 5 | 2 Column with Logo | Imgx1, Text | Disassembly - Remove Bearings |
| 176 | slide176 | Ch 5 | 2 Column with Logo | Imgx3, Text | Assembly - Install Bearings |
| 177 | slide177 | Ch 5 | 2 Column with Logo | Imgx3, Text | Assembly - Install Disk and Shafts |
| 178 | slide178 | Ch 5 | Title Only | Imgx3 | Assembly - Disk Pinning |
| 179 | slide179 | Ch 5 | 2 Column with Logo | Imgx5, Text | Assembly - Install Follower Spring Components |
| 180 | slide180 | Ch 5 | 2 Column with Logo | Imgx3, Text | Assembly - Installing Seal |
| 181 | slide181 | Ch 5 | 2 Column with Logo | Imgx3, Text | Assembly - Install Packing |
| 182 | slide182 | Ch 5 | 1 Column With Logo Layout | Text | Check Your Knowledge 6: Disk installation |
| 183 | slide183 | Ch 5 | Title Only | Imgx1 | Mounting HPBV |
| 184 | slide184 | Ch 6 | Chapter/Section Page | Text | - |
| 185 | slide185 | Ch 6 | 2 Column with Logo | Imgx2, Text | Segmented Ball Valve Operation |
| 186 | slide186 | Ch 6 | 3 Photo 3 Column with logo | Imgx2, Text | Fisher  Vee -Ball™ Valves |
| 187 | slide187 | Ch 6 | Title Only | Imgx1, Text | Fisher V150 and V300 |
| 188 | slide188 | Ch 6 | Title Only | Imgx1 | Fisher V200 |
| 189 | slide189 | Ch 6 | 2 Column with Logo | Imgx2, Text | Series B vs Non-Series B |
| 190 | slide190 | Ch 6 | 1 Column With Logo Layout | Text | Check Your Knowledge 1:  Vee -Ball Operation |
| 191 | slide191 | Ch 6 | Title Only | Imgx4, Text | Vee -Ball Maintenance - Seal Removal |
| 192 | slide192 | Ch 6 | 1 Column With Logo Layout | Imgx3, Text | TCM Seals |
| 193 | slide193 | Ch 6 | Title Only | Imgx4, Text | HD Metal Seal |
| 194 | slide194 | Ch 6 | 3 Photo 3 Column with logo | Imgx4, Text | Flat Metal Seal |
| 195 | slide195 | Ch 6 | 3 Photo 3 Column with logo | Imgx4, Text | Flat Metal Seal Zero Deflection |
| 196 | slide196 | Ch 6 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Zero Deflection |
| 197 | slide197 | Ch 6 | 2 Column with Logo | Imgx2, Text | Seal Protector Ring Installation |
| 198 | slide198 | Ch 6 | 3 Photo 3 Column with logo | Imgx3, Text | Disassembly - Ball and Shaft |
| 199 | slide199 | Ch 6 | Title Only | Imgx5, Text | Disassembly - Removing Shafts |
| 200 | slide200 | Ch 6 | 2 Column with Logo | Imgx1, Text | Disassembly - Removing Ball |
| 201 | slide201 | Ch 6 | Title Only | Imgx3 | Disassembly - Bearing Removal |
| 202 | slide202 | Ch 6 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Follower Shaft |
| 203 | slide203 | Ch 6 | 2 Column with Logo | Imgx1, Text | Assembly – Bearing Installation |
| 204 | slide204 | Ch 6 | 2 Column with Logo | Imgx3, Text | Assembly - Ball and Shaft |
| 205 | slide205 | Ch 6 | Title Only | Imgx3 | Assembly - Drive Shaft Selection |
| 206 | slide206 | Ch 6 | 3 Photo 3 Column with logo | Imgx4, Text | Assembly - Installing Drive Shaft |
| 207 | slide207 | Ch 6 | Title Only | Imgx2 | Assembly - Setting Drive Shaft Taper Key |
| 208 | slide208 | Ch 6 | Title Only | Imgx2 | Vee -Ball NPS 1-2 Changes |
| 209 | slide209 | Ch 6 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Series B |
| 210 | slide210 | Ch 6 | Title Only | Imgx1 | Vee -Ball Mounting (Series B) |
| 211 | slide211 | Ch 6 | Title Only | Imgx1 | Vee -Ball Mounting (Non-Series B) |
| 212 | slide212 | Ch 6 | 1 Column With Logo Layout | Text, Notes | Check Your Knowledge 5: Rotation |
| 213 | slide213 | Ch 6 | 2 Column with Logo | Imgx2, Text | Setting Travel |
| 214 | slide214 | Ch 7 | Chapter/Section Page | Text | - |
| 215 | slide215 | Ch 7 | Title Only | Imgx1 | Fisher Eccentric Plug Valves |
| 216 | slide216 | Ch 7 | Title Only | Imgx1, Text | Fisher V-500 |
| 217 | slide217 | Ch 7 | Title Only | Imgx1 | Fisher CV-500 (Eccentric Rotary V-Notch) |
| 218 | slide218 | Ch 7 | 2 Column with Logo | Imgx1, Text, Notes | Eccentric Plug Operation |
| 219 | slide219 | Ch 7 | Title Only | Imgx3, Text | Eccentric Plug Trim |
| 220 | slide220 | Ch 7 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: Applications |
| 221 | slide221 | Ch 7 | 2 Column with Logo | Imgx4, Text | Disassembly - Removing Seat Ring |
| 222 | slide222 | Ch 7 | Title Only | Imgx3 | Seat Retainer Tool |
| 223 | slide223 | Ch 7 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Face Seals |
| 224 | slide224 | Ch 7 | 2 Column with Logo | Imgx3, Text | Disassembly - Removing Plug |
| 225 | slide225 | Ch 7 | Title Only | Imgx3, Text | Shaft Inspection |
| 226 | slide226 | Ch 7 | 2 Column with Logo | Imgx2, Text | Bearing Removal |
| 227 | slide227 | Ch 7 | Title Only | Imgx2 | Bearing Removal Tool |
| 228 | slide228 | Ch 7 | 2 Column with Logo | Imgx1, Text | Assembly - Bearing Installation |
| 229 | slide229 | Ch 7 | 2 Column with Logo | Imgx2, Text | Assembly - Installing Plug |
| 230 | slide230 | Ch 7 | Title Only | Imgx4, Text | Assembly - Installing Seat Ring |
| 231 | slide231 | Ch 7 | 2 Column with Logo | Imgx2, Text | Assembly - Measure Seat Ring Clearance |
| 232 | slide232 | Ch 7 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Torque |
| 233 | slide233 | Ch 7 | 2 Column with Logo | Imgx2, Text | V500 Mounting |
| 234 | slide234 | Ch 7 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Rotation |
| 235 | slide235 | Ch 7 | 2 Column with Logo | Imgx3, Text | Adjust Travel |
| 236 | slide236 | Ch 8 | Chapter/Section Page | Text | - |
| 237 | slide237 | Ch 8 | Title Only | Imgx2, Text | Rotary Standard Packing Types |
| 238 | slide238 | Ch 8 | 2 Column with Logo | Imgx1, Text | PTFE Packing |
| 239 | slide239 | Ch 8 | 2 Column with Logo | Imgx1, Text | Graphite Packing |
| 240 | slide240 | Ch 8 | 2 Column with Logo | Imgx3, Text | Removing Standard Packing |
| 241 | slide241 | Ch 8 | 3 Photo 3 Column with logo | Imgx3, Text | Install Standard Packing |
| 242 | slide242 | Ch 8 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: Standard Packing |
| 243 | slide243 | Ch 8 | Title Only | Imgx2, Text | ENVIRO-SEAL™ Packing Types |
| 244 | slide244 | Ch 8 | 3 Photo 3 Column with logo | Imgx3, Text | Install ENVIRO-SEAL Packing |
| 245 | slide245 | Ch 8 | 3 Photo 3 Column with logo | Imgx3, Text | ENVIRO-SEAL Packing Compression |
| 246 | slide246 | Ch 8 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: ENVIRO-SEAL Packing |
| 247 | slide247 | Ch 9 | Chapter/Section Page | Text | - |
| 248 | slide248 | Ch 9 | Title Only | Imgx3 | Rotary Actuator Maintenance Safety Notes |
| 249 | slide249 | Ch 9 | Title Only | Imgx2, Text | Spring and Diaphragm |
| 250 | slide250 | Ch 9 | Title Only | Imgx1, Text | Fisher Type 2052 |
| 251 | slide251 | Ch 9 | 2 Column with Logo | Imgx1, Text | 2052 Components |
| 252 | slide252 | Ch 9 | Title Only | Imgx1 | 2052 Maintenance - Disassembly |
| 253 | slide253 | Ch 9 | 2 Column with Logo | Imgx3, Text | Travel Stops |
| 254 | slide254 | Ch 9 | 2 Column with Logo | Imgx2, Text | 2052 Disassembly - Lever Removal |
| 255 | slide255 | Ch 9 | Title Only | Imgx3 | 2052 Maintenance - Assembly |
| 256 | slide256 | Ch 9 | 3 Photo 3 Column with logo | Imgx2, Text | 2052 Assembly - Lever Installation |
| 257 | slide257 | Ch 9 | 2 Column with Logo | Imgx2, Text | 2052 Assembly - Diaphragm Installation |
| 258 | slide258 | Ch 9 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: Cam |
| 259 | slide259 | Ch 9 | 2 Column with Logo | Text | Fisher Type 1052 |
| 260 | slide260 | Ch 9 | 1 Column With Logo Layout | Imgx1, Text | 1052 Size 33 Components |
| 261 | slide261 | Ch 9 | 2 Column with Logo | Imgx1, Text | 1052 Size 40 to 70 Components |
| 262 | slide262 | Ch 9 | Title Only | Imgx1 | 1052 Maintenance - Disassembly |
| 263 | slide263 | Ch 9 | Title Only | Imgx2, Text | 1052 size 33 Travel Stops |
| 264 | slide264 | Ch 9 | 3 Photo 3 Column with logo | Imgx2, Text | 1052 Disassembly - Removing Lever |
| 265 | slide265 | Ch 9 | Title Only | Imgx3 | 1052 Maintenance - Assembly |
| 266 | slide266 | Ch 9 | 3 Photo 3 Column with logo | Imgx3, Text | 1052 Assembly - Lever |
| 267 | slide267 | Ch 9 | Title Only | Imgx2, Text | 1052 Assembly - Install Spring and Diaphragm |
| 268 | slide268 | Ch 9 | 2 Column with Logo | Imgx3, Text | Spring Preset 1052 size 33 |
| 269 | slide269 | Ch 9 | 1 Column With Logo Layout | Imgx1, Text | 1052 Initial Set |
| 270 | slide270 | Ch 9 | 2 Column with Logo | Imgx1, Text | Setting Spring Compression |
| 271 | slide271 | Ch 9 | 3 Photo 3 Column with logo | Imgx2, Text | 1052 Travel Adjustments |
| 272 | slide272 | Ch 9 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Initial Set |
| 273 | slide273 | Ch 9 | Title Only | Imgx1, Text | Fisher ™  Type 1061 |
| 274 | slide274 | Ch 9 | 2 Column with Logo | Imgx1, Text | 1061 Components |
| 275 | slide275 | Ch 9 | Title Only | Imgx1 | 1061 Maintenance - Disassembly |
| 276 | slide276 | Ch 9 | 2 Column with Logo | Imgx1, Text | 1061 Disassembly - Removing Cylinder |
| 277 | slide277 | Ch 9 | 2 Column with Logo | Imgx1, Text | 1061 Disassembly - Lever Removal |
| 278 | slide278 | Ch 9 | 2 Column with Logo | Imgx1, Text | 1061 Disassembly - Removing Piston |
| 279 | slide279 | Ch 9 | 2 Column with Logo | Imgx2, Text | 1061 Disassembly - Lower Sliding Seal |
| 280 | slide280 | Ch 9 | Title Only | Imgx1 | 1061 Maintenance - Assembly |
| 281 | slide281 | Ch 9 | 2 Column with Logo | Imgx2, Text | 1061 Assembly - Piston Install |
| 282 | slide282 | Ch 9 | 1 Column Without Logo Layout | Imgx3, Text | 1061 Assembly - Lever Installation |
| 283 | slide283 | Ch 9 | 2 Column with Logo | Imgx1, Text | 1061 Assembly - Install Back Cover |
| 284 | slide284 | Ch 9 | 2 Column with Logo | Text | 1061 60 Degree Stop |
| 285 | slide285 | Ch 9 | 2 Column with Logo | Imgx2, Text | 1061 Travel Adjustment |
| 286 | slide286 | Ch 9 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Fail Action |
| 287 | slide287 | Ch 9 | 2 Column with Logo | Imgx2, Text | Rotary Actuator Mounting Styles |
| 288 | slide288 | Ch 9 | Title Only | Imgx1 | Actuator Mounting from 2052 IM |
| 289 | slide289 | Ch 9 | 1 Column With Logo Layout | Imgx4, Text | Locking mechanisms |
| 290 | slide290 | Ch 9 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Actuator Mounting |
| 291 | slide291 | Ch 10 | Chapter/Section Page | Text | - |
| 292 | slide292 | Ch 10 | Title Only | Imgx1 | Response to Control Signal – Direct vs Reverse |
| 293 | slide293 | Ch 10 | 1 Column Without Logo Layout | Text | Check Your Knowledge 1: Action |
| 294 | slide294 | Ch 10 | 1 Column With Logo Layout | Text | Friction Effects |
| 295 | slide295 | Ch 10 | 2 Column with Logo | Text | Overcoming Friction with a Positioner |
| 296 | slide296 | Ch 10 | 1 Column Without Logo Layout | Text, Notes | Check Your Knowledge 2: Accuracy |
| 297 | slide297 | Ch 10 | 2 Column with Logo | Text | Positioner Operation - Equilibrium |
| 298 | slide298 | Ch 10 | Title Only | Imgx1, OLEx2 | Relay Action - Increasing Input Signal |
| 299 | slide299 | Ch 10 | 2 Column with Logo | Imgx1, Text, OLEx2 | Actuator Response - Downward Stroke |
| 300 | slide300 | Ch 10 | Title Only | Imgx1, OLEx2 | Relay Action - Decreasing Input Signal |
| 301 | slide301 | Ch 10 | 2 Column with Logo | Imgx1, Text, OLEx2 | Actuator Response - Upward Stroke |
| 302 | slide302 | Ch 10 | 1 Column Without Logo Layout | Text | Check Your Knowledge 3: Summing |
| 303 | slide303 | Ch 10 | 1 Column With Logo Layout | Text | Positioner Input - Output Relationships |
| 304 | slide304 | Ch 10 | 2 Column with Logo | Text | Zero and Span Calibration |
| 305 | slide305 | Ch 10 | Title Only | Imgx1, OLEx2 | Saturation at the Low End of Input Scale |
| 306 | slide306 | Ch 10 | Title Only | Imgx1, OLEx2 | Saturation at the High End of Input Scale |
| 307 | slide307 | Ch 10 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Calibrated Output |
| 308 | slide308 | Ch 11 | Chapter/Section Page | Text | - |
| 309 | slide309 | Ch 11 | Title Only | Imgx1, Text | FIELDVUE™ DVC6200 |
| 310 | slide310 | Ch 11 | 3 Photo 3 Column with logo | Imgx3, Text | DVC Functions and Protocols |
| 311 | slide311 | Ch 11 | Title Only | Imgx1, Text | Principle of Operation |
| 312 | slide312 | Ch 11 | 2 Column with Logo | Imgx1, Text, OLEx2 | Operational Block Diagram |
| 313 | slide313 | Ch 11 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: DVC Operation |
| 314 | slide314 | Ch 11 | 1 Column With Logo Layout | Imgx1, Text | Diagnostic Tiering |
| 315 | slide315 | Ch 11 | 1 Column With Logo Layout | Text, Notes | Check Your Knowledge 2: Tiering |
| 316 | slide316 | Ch 11 | 1 Column With Logo Layout | Imgx1, Text | DVC6200 Components |
| 317 | slide317 | Ch 11 | 2 Column with Logo | Imgx2, Text | Integrated I/P |
| 318 | slide318 | Ch 11 | 1 Column With Logo Layout | Imgx2, Text | DVC Maintenance - Changing I/P Converter |
| 319 | slide319 | Ch 11 | 1 Column With Logo Layout | Imgx2, Text, Tablex1 | Relay |
| 320 | slide320 | Ch 11 | 2 Column with Logo | Imgx1, Text | DVC Maintenance - Changing Pneumatic Relay |
| 321 | slide321 | Ch 11 | Title Only | Imgx2 | Printed Wiring Board “The Puck” |
| 322 | slide322 | Ch 11 | 1 Column With Logo Layout | Imgx2, Text | Terminal Box |
| 323 | slide323 | Ch 11 | 2 Column with Logo | Imgx3, Text | Magnetic Feedback |
| 324 | slide324 | Ch 11 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Components |
| 325 | slide325 | Ch 11 | Title Only | Imgx3, Text | Networking Features |
| 326 | slide326 | Ch 11 | Title Only | Imgx1, OLEx2 | Configurators |
| 327 | slide327 | Ch 11 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Communication |
| 328 | slide328 | Ch 11 | Title Only | Imgx1 | DVC6200 Mounting |
| 329 | slide329 | Ch 11 | Title Only | Imgx1 | Safety |
| 330 | slide330 | Ch 11 | 2 Column with Logo | Imgx1, Text | DVC6200 Sliding Stem Mounting |
| 331 | slide331 | Ch 11 | 3 Photo 3 Column without logo | Imgx3, Text | Installing Feedback – 657i and 667i |
| 332 | slide332 | Ch 11 | 3 Photo 3 Column with logo | Imgx3, Text | Magnet Alignment – 657i and 667i |
| 333 | slide333 | Ch 11 | Title Only | Imgx2, Text | Attaching DVC6200 – 657i and 667i |
| 334 | slide334 | Ch 11 | 3 Photo 3 Column with logo | Imgx3, Text | Installing Feedback – Pre-size i Actuators |
| 335 | slide335 | Ch 11 | Title Only | Imgx2, Text | Magnet Alignment – Pre-size i Actuators |
| 336 | slide336 | Ch 11 | 3 Photo 3 Column with logo | Imgx3, Text | Attaching DVC6200 – Pre-size i Actuators |
| 337 | slide337 | Ch 11 | 1 Column With Logo Layout | Text | Check Your Knowledge 5: Feedback |
| 338 | slide338 | Ch 11 | Title Only | Imgx2, Text | DVC6200 Rotary Window Mount |
| 339 | slide339 | Ch 11 | Title Only | Imgx3, Text, Tablex1 | DVC6200 Window Mount Arrays |
| 340 | slide340 | Ch 11 | Title Only | Imgx2, Text | DVC6200 Rotary Window Mounting |
| 341 | slide341 | Ch 11 | 2 Column with Logo | Imgx3, Text | DVC6200 Rotary Bracket Mounting |
| 342 | slide342 | Ch 11 | 2 Column with Logo | Imgx3, Text | Install Bracket Mount on Fisher 2052 |
| 343 | slide343 | Ch 11 | Title Only | Imgx3, Text | DVC6200 End Mount Magnet Position |
| 344 | slide344 | Ch 11 | Title Only | Imgx1 | Magnet Orientation to DVC Hall Effect Sensor |
| 345 | slide345 | Ch 11 | 1 Column With Logo Layout | Text | Exercise 1 – Mount DVC6200 |
| 346 | slide346 | Ch 12 | Chapter/Section Page | Text | - |
| 347 | slide347 | Ch 12 | 1 Column With Logo Layout | Imgx1, Text | Exercise 1 – Connect to Device |
| 348 | slide348 | Ch 12 | 2 Column with Logo | Imgx1, Text | Getting Started with ValveLink™ Mobile |
| 349 | slide349 | Ch 12 | 2 Column with Logo | Imgx1, Text | HART® or FOUNDATION™ fieldbus |
| 350 | slide350 | Ch 12 | 2 Column with Logo | Imgx1, Text | Connecting to live device |
| 351 | slide351 | Ch 12 | 2 Column with Logo | Imgx4, Text | Connection Process |
| 352 | slide352 | Ch 12 | 1 Column Without Logo Layout | Text | Exercise 2 – Connect to Device with  ValveLink  Mobile |
| 353 | slide353 | Ch 12 | 2 Column with Logo | Imgx1, Text | Main Menu Connected – Instrument Mode |
| 354 | slide354 | Ch 12 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: Communication Protocols |
| 355 | slide355 | Ch 12 | 2 Column with Logo | Imgx4, Text | Changing Instrument Mode |
| 356 | slide356 | Ch 12 | 1 Column With Logo Layout | Imgx1, Text | Main Menu Connected – New Instrument Mode |
| 357 | slide357 | Ch 12 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Service Mode |
| 358 | slide358 | Ch 13 | Chapter/Section Page | Text | - |
| 359 | slide359 | Ch 13 | 1 Column With Logo Layout | Imgx2, Text | Initial Setup using ValveLink™ Mobile |
| 360 | slide360 | Ch 13 | 2 Column with Logo | Imgx2, Text, Tablex1 | Actuator Information – Actuator Mfr |
| 361 | slide361 | Ch 13 | 1 Column With Logo Layout | Imgx4, Text | Actuator Information – Model and Size |
| 362 | slide362 | Ch 13 | 1 Column With Logo Layout | Imgx2, Text | Actuator Information – Volume Booster |
| 363 | slide363 | Ch 13 | 2 Column with Logo | Imgx2, Text, Tablex1 | Mounting Information – Relay Type |
| 364 | slide364 | Ch 13 | 1 Column With Logo Layout | Imgx4, Text | Pressure Information – Units and Supply |
| 365 | slide365 | Ch 13 | 1 Column With Logo Layout | Imgx2, Text | Apply and Write Parameters |
| 366 | slide366 | Ch 13 | 1 Column With Logo Layout | Text | Exercise 1 – Setup Wizard |
| 367 | slide367 | Ch 13 | 1 Column With Logo Layout | Text | Check Your Knowledge 1: Setup Wizard |
| 368 | slide368 | Ch 13 | 1 Column With Logo Layout | Imgx11, Text | Guided Setup with HART® DD and Communicator |
| 369 | slide369 | Ch 13 | 1 Column With Logo Layout | Text | Check Your Knowledge 2: Travel/Pressure Control |
| 370 | slide370 | Ch 13 | 2 Column with Logo | Imgx2, Text | Travel Calibration Using ValveLink™ Mobile |
| 371 | slide371 | Ch 13 | 2 Column with Logo | Imgx2, Text | Instrument Mode During Calibration |
| 372 | slide372 | Ch 13 | 1 Column Without Logo Layout | Imgx2, Text | Auto Travel Calibration – Finding End Points |
| 373 | slide373 | Ch 13 | 2 Column with Logo | Imgx1, Text | Auto Travel Calibration – Adjusting Output Bias |
| 374 | slide374 | Ch 13 | 1 Column With Logo Layout | Text | Check Your Knowledge 3: Auto/Travel Calibration |
| 375 | slide375 | Ch 13 | 1 Column With Logo Layout | Imgx1, Text | Auto Travel Calibration – Pressure Range Hi/Lo |
| 376 | slide376 | Ch 13 | 1 Column With Logo Layout | Imgx4, Text | Auto Travel Calibration – Pressure Measurement |
| 377 | slide377 | Ch 13 | 2 Column with Logo | Imgx2, Text | Auto Travel Calibration- Write Pressure |
| 378 | slide378 | Ch 13 | 1 Column With Logo Layout | Text, Tablex1 | Exercise 2 – Auto Travel Calibration |
| 379 | slide379 | Ch 13 | 2 Column with Logo | Imgx4, Text | Auto Travel Calibration with HART DD and Communicator |
| 380 | slide380 | Ch 13 | 1 Column With Logo Layout | Imgx3, Text | Manual Travel Calibration – Travel Sensor Motion |
| 381 | slide381 | Ch 13 | 2 Column with Logo | Imgx2, Text | Manual Travel Calibration – Mid Point |
| 382 | slide382 | Ch 13 | 2 Column with Logo | Imgx2, Text | Manual Travel Calibration – Manual Adjust |
| 383 | slide383 | Ch 13 | Title Only | Imgx2 | Manual Travel Calibration – Write Travel |
| 384 | slide384 | Ch 13 | 1 Column With Logo Layout | Text, Tablex1 | Optional Exercise – Manual Travel Calibration |
| 385 | slide385 | Ch 13 | 1 Column With Logo Layout | Text | Check Your Knowledge 4: Manual Calibration |
| 386 | slide386 | Ch 13 | 2 Column with Logo | Imgx1, Text | Relay Adjustment – Relay A |
| 387 | slide387 | Ch 13 | 1 Column With Logo Layout | Text | Optional Exercise – Relay Adjustment (Piston Only) |
| 388 | slide388 | Ch 13 | 1 Column With Logo Layout | Text | Check Your Knowledge 5: Relay Adjustment |
| 389 | slide389 | Ch 14 | Chapter/Section Page | Text | - |
| 390 | slide390 | Ch 14 | Blank White | Imgx1 | - |
| 391 | slide391 | Ch 14 | Blank White | Imgx1 | - |
| 392 | slide392 | Ch 14 | Blank White | Imgx1 | - |
| 393 | slide393 | Ch 14 | Blank White | Imgx1 | - |
| 394 | slide394 | Ch 14 | Blank White | Imgx1 | - |
| 395 | slide395 | Ch 14 | Blank White | Imgx1 | - |
| 396 | slide396 | Ch 15 | Chapter/Section Page | Text | - |
| 397 | slide397 | Ch 15 | Blank White | Imgx1 | - |
| 398 | slide398 | Ch 15 | Blank White | Imgx1 | - |
| 399 | slide399 | Ch 15 | Blank White | Imgx1 | - |
| 400 | slide400 | Ch 15 | Blank White | Imgx1 | - |
| 401 | slide401 | Ch 15 | Blank White | Imgx1 | - |
| 402 | slide402 | Ch 15 | Blank White | Imgx1 | - |
| 403 | slide403 | Ch 15 | Blank White | Imgx1 | - |
| 404 | slide404 | Ch 16 | Chapter/Section Page | Text | - |
| 405 | slide405 | Ch 16 | 1 Column With Logo Layout | Text | Chapter Exercises |
| 406 | slide406 | Ch 16 | Blank White | Imgx1 | - |
| 407 | slide407 | Ch 16 | Blank White | Imgx1 | - |
| 408 | slide408 | Ch 16 | Blank White | Imgx1 | - |
| 409 | slide409 | Ch 16 | Blank White | Imgx1 | - |
| 410 | slide410 | Concl | Breaker Emerson Blue | Text | Conclusion |
| 411 | slide411 | Concl | 1 Column Without Logo Layout | Imgx1, Text, Notes | Summary Learning Outcomes |
| 412 | slide412 | Concl | 1 Column With Logo Layout | Imgx1, Text, Notes | Assess Your Knowledge, Skills and Abilities! |
| 413 | slide413 | Concl | 1 Column With Logo Layout | Imgx8, Text, Notes | Feedback Form |
| 414 | slide414 | Concl | 2 Column Heading with Logo | Imgx4, Text | Contact Us |
| 415 | slide415 | Concl | 1 Column With Logo Layout | Text | Additional Information |
| 416 | slide416 | Concl | Blank White | Imgx2, OLEx4 | - |
| 417 | slide417 | Concl | Blank White | Imgx1, OLEx2 | - |
| 418 | slide418 | Concl | Blank White | Text | - |

<!-- END per-slide table -->
