# Reusable slide templates

Seven templates for the 1400 course. The CSS lives in
`emerson-workbench.css` (the hand-maintained design system); this file is the
usage reference. Introduced with the Chapter 1 rebuild (2026-08-29) and reusable
course-wide. Template 7 (`.slide--tmpl-graph`) was added 2026-09-05 for the
Style Guide §5 diagram/graph conventions.

Every template carries the standard `.slide` frame (title box, divider rule,
footer chrome). None use `.slide-body`, so nothing is stripped in visual mode —
the card *is* the teaching surface and the right-hand context pane still carries
the key concepts.

---

## Standard slide heading — `.slide--hd`

The course-wide heading treatment: the full-width PowerPoint title rule is
dropped for a restrained heading — semibold, `2.7cqw`, tight tracking, in
Emerson Blue, with a short blue accent tick beneath it (echoing the intro
card's `.ov__rule`). The four card templates get it automatically; any other
slide opts in with `class="slide slide--hd …"` on the `<article>`.

Applied to every non-divider slide in Chapters 1 and 2 (2026-08-30). New
chapters get `.slide--hd` on each slide as they are converted; it will become
the default once the whole deck is on it.

---

## Template 1 — intro cards (day / chapter / module)

**Rendered by the course shell, not deck slides.** Three tiers, one visual
family — eyebrow `.ov__kicker`, bold `.ov__title`, `.ov__rule`, an
`.ov__objective` lead paragraph, an `.ov__start` button, and (day/chapter) an
`.ov__list` of what is inside as navigable `.ov__row` links.

- **Day intro** — `renderDay()` in `course/course.js`, `.ov--day`. Hash
  `#<day.id>`. Kicker "Day N of M", the day `subtitle` as the lead, a Chapters
  list. Context rail shows "Day overview"; no key-concepts panel.
- **Chapter intro** — `renderChapter()`, `.ov--chapter`. Hash `#<ch.id>`.
  Kicker "Day N · <day> · Chapter K", the chapter `summary` as the lead, the
  chapter `objectives` under "By the end of this chapter", a Modules list
  (outline modules tagged). Context rail shows "Chapter summary".
- **Module intro** — `renderOverview()`. A module with `status: "ready"`, an
  `objective`, and `keyConcepts` in `course.json` gets this automatically; the
  `.ctx` right rail carries the key concepts. Do not build a slide that
  duplicates it.

Every day and chapter therefore has a landing card. Clicking the name in the
TOC (or in the home overview) opens it; the caret beside the name is the
expand / collapse control. Modules are collapsible the same way. Day and
chapter cards are also real stops in the Prev / Next sequence — paging forward
lands on each one before its first module.

---

## Template 2 — labelled diagram card  `.slide--tmpl-diagram`

Follows the Control Valve Handbook callout convention. A figure with an ordered
list of labels beside it. On-image markers sit **outside** the image in a left
gutter, each with a thin leader line pointing in at the part; they are small
reference numbers, visibly smaller than the numbered circles in the list, where
the labels live.

```html
<article class="slide slide--tmpl-diagram" data-slide="14" data-deck="1400">
  <h1 class="slide-title">Control Valve Assembly</h1>
  <figure class="tmpl-fig">
    <img src="../assets/img/imageNN.png" alt="…">
    <span class="tmpl-marker" style="top:16%;--lead:14cqw">1</span>
    <span class="tmpl-marker" style="top:60%;--lead:8cqw">2</span>
    <span class="tmpl-marker" style="top:82%;--lead:11cqw">3</span>
  </figure>
  <ol class="tmpl-list">
    <li>Actuator</li>
    <li>Bonnet</li>
    <li>Valve body</li>
  </ol>
  <div class="slide-chrome">…</div>
</article>
```

- Each `.tmpl-marker` sits in the gutter at a fixed left; the inline style sets
  `top` (percent of the `.tmpl-fig` box) and `--lead` (the leader length in
  `cqw`, i.e. how far right the part is from the marker).
- Marker order must match list order — the list auto-numbers.
- Keep to ~3–7 callouts. The list is where the detail lives: a list item is the
  part name plus, if useful, a short functional tag (`Cage — guides the plug`),
  never a full sentence an instructor would read aloud. A list mirroring a
  Handbook figure's own callouts uses that figure's bare labels.
- **If the image already carries its own callouts** — e.g. a figure lifted from
  the Handbook — add `is-sourced` on the `<article>`, drop the `.tmpl-marker`
  elements, make the `.tmpl-list` mirror the figure's own numbering, and
  attribute the source in a `<div class="slide-textbox">` bottom caption.
- **`.tmpl-fig` is sized for an `<img>` child** (its CSS targets `.tmpl-fig >
  img`). For a redrawn **inline SVG** diagram, use a single-cell
  `.slide--tmpl-figrow` instead — `.tmpl-cell:only-child > svg` fills the cell —
  and carry the labels and a source line inside the SVG (as on 1400 slides 51
  and 62).
- `.tmpl-note` also works here (see Template 5), for one line of teaching
  emphasis below the figure/list pair.

**A `.tmpl-note` under a tall figure auto-clears it.** `.tmpl-fig` is normally
vertically centered and sized purely from its own `--fig-ar` and width, which
is fine for a normal-proportioned figure but lets a tall/narrow one (a slim
cutaway) grow its centered box down into a `.tmpl-note` pinned near the
bottom of the slide (1400 slide 109, `--fig-ar:0.549`). Where a `.tmpl-note`
follows the figure, the CSS (`:has(> .tmpl-note)`) anchors `.tmpl-fig` to the
same top the list uses instead of centering it, and caps its width to
whichever is smaller — the template's own width ceiling for that variant, or
the width implied by a fixed height budget at the figure's `--fig-ar` — so
the figure's reach is bounded regardless of how tall its aspect ratio would
otherwise make it. **Do not also set an inline `width` on `.tmpl-fig` when it
has a sibling `.tmpl-note`** — only `--fig-ar`; an inline width overrides the
cap and reintroduces the collision. Fixed 2026-09-04 (1400 slide 109);
do not hand-patch a future tall-figure-plus-note collision with an inline
`max-height` or width — this template rule already covers it.

---

## Template 3 — data table card  `.slide--tmpl-table`

One reference table as real HTML (no screenshot). Header row is Emerson-blue
with white text; even rows tint; add `class="num"` to numeric `<th>`/`<td>` for
right-aligned tabular figures.

```html
<article class="slide slide--tmpl-table" data-slide="16" data-deck="1400">
  <h1 class="slide-title">Pressure / Temperature Rating</h1>
  <div class="tmpl-wrap">
    <table class="tmpl-table">
      <thead><tr><th>Temperature</th><th class="num">150</th> … </tr></thead>
      <tbody>
        <tr><td>−20 to 100 °F</td><td class="num">290</td> … </tr>
        …
      </tbody>
    </table>
  </div>
  <div class="slide-chrome">…</div>
</article>
```

`.tmpl-wrap` scrolls if the table overflows, so the page body never scrolls.

---

## Template 4 — comparison table card  `.slide--tmpl-compare`

Template 3 plus: a highlighted example row (`<tr class="is-example">`) and an
optional paired illustration in `.tmpl-aside`. Use when a set of related items
should be seen and compared together (e.g. the six seat-leakage classes).

```html
<article class="slide slide--tmpl-compare" data-slide="19" data-deck="1400">
  <h1 class="slide-title">ANSI/FCI 70-2 Seat Leakage Classes</h1>
  <div class="tmpl-wrap">
    <table class="tmpl-table">
      <thead><tr><th>Class</th><th>Maximum seat leakage</th></tr></thead>
      <tbody>
        <tr><td>I</td><td>No test — by agreement</td></tr>
        <tr class="is-example"><td>II</td><td>0.5% of rated capacity</td></tr>
        …
      </tbody>
    </table>
  </div>
  <figure class="tmpl-aside">
    <img src="../assets/img/imageNN.png" alt="…">
    <figcaption>Class II still passes 0.5% of rated flow.</figcaption>
  </figure>
  <div class="slide-chrome">…</div>
</article>
```

With `.tmpl-aside` present, `.tmpl-wrap` narrows automatically to leave room.

**Only use `.tmpl-compare` when the aside image genuinely earns its half of the
slide.** A short table (≈5 rows) plus a small supporting image leaves the bottom
of the slide empty and reads as sparse — this happened on 1400 slides 47, 57
and 72 and each moved off the template. If the table is the content, use plain
`.slide--tmpl-table`; a short table there can be vertically centred and its
font bumped with inline `style` on the `.tmpl-wrap` / `<table>` so it fills the
slide (slides 72, 82). If the images carry real teaching weight, use
`.slide--tmpl-figrow.has-lead` (table over a photo row).

To centre a short table and make it fill the width, put
`style="display:flex; flex-direction:column; justify-content:center"` on
`.tmpl-wrap`, and — because a `width:100%` table does **not** stretch in that
flex column on its own — give the `<table>` explicit column widths via a
`<colgroup>` plus `table-layout:fixed` (slides 72, 82).

---

## Template 5 — figure row  `.slide--tmpl-figrow`

2–4 captioned figures side by side (add `is-grid` for a 2×2 grid), for
comparing valve or trim styles that are *shown*, not tabulated. Each
`<figure class="tmpl-cell">` holds one `<img>` and a `<figcaption>` — a bold
name line plus a short functional tag on the next line. No on-image markers:
if a single figure needs its parts called out, that slide is a
`.slide--tmpl-diagram` instead.

```html
<article class="slide slide--tmpl-figrow" data-slide="28" data-deck="1400">
  <h1 class="slide-title">Valve Bodies — Globe vs Angle</h1>
  <div class="tmpl-row">
    <figure class="tmpl-cell">
      <img src="…" alt="…">
      <figcaption><b>Globe body</b>flow straight through</figcaption>
    </figure>
    <figure class="tmpl-cell">
      <img src="…" alt="…">
      <figcaption><b>Angle body</b>flow turns 90°</figcaption>
    </figure>
  </div>
  <div class="slide-chrome">…</div>
</article>
```

An optional `<p class="tmpl-note">` under the row carries **one short spec
line** (e.g. a flow direction) — never a sentence an instructor would read
aloud; that belongs in the context pane. `.tmpl-note` also works inside
`.slide--tmpl-diagram`.

**The row auto-clears a wrapped note.** When a plain (non `has-lead`) figure
row is followed by a `.tmpl-note`, the CSS (`:has(> .tmpl-note)`) switches the
row + note pair from two independently-positioned absolute boxes to a flow
column, so the note's actual rendered height pushes the row up instead of
sitting under a fixed offset — a note that wraps to two or three lines can
never collide with the figcaptions above it. No markup change needed; this is
automatic from the existing `<h1>` / `.tmpl-row` / `.tmpl-note` sibling
structure. Fixed 2026-09-04 after the collision was hand-patched once on 1400
slide 98 with a per-image inline `max-height` — do not re-reach for that
per-slide patch; the template now holds generally (1400 slides 101, 103).

**Match the cells' aspect ratios.** The cells are equal width and the images
are `object-fit: contain`, so a portrait photo next to a landscape one renders
much taller, its caption drops toward the footer chrome, and the row looks
uneven. Before placing deck photos in a row, crop them to within ~±15% AR of
each other (a top/bottom or left/right trim, saved to `assets/sourced/` with a
`SOURCES.txt` line — this is part of the Stage 3 pass). Keep each `<figcaption>`
tag to a **single line** so a slightly taller cell's caption still clears the
`.slide-chrome` logo. Seen and fixed on 1400 slides 34, 56, 57, 58.

### `.slide--tmpl-figrow.has-lead`

A reference table above the figure row — the table plus the items it
tabulates, shown together (slides 40, 52). Wrap the `<div class="tmpl-lead">`
(holding one `<table class="tmpl-table">`) and the `<div class="tmpl-row">` in
a single `<div class="tmpl-stack">`. The stack is a flow column, so the row
starts wherever the table actually ends — the table renders a different height
in the 4:3 deck vs the 16:9 shell, and fixed offsets collide in one or the
other. Always check both.

### `.slide--tmpl-diagram.is-wide`

For a detailed sectional / cutaway that needs room: a bigger figure
(`31cqw`), markers still in the left gutter with longer leader lines
reaching in to the internal trim, list slid right. Used on slides 31 / 32.

---

## Template 6 — caution card  `.slide--tmpl-caution`

A **safety or failure warning given its own slide**. Used when a key concept is
tagged `role: caution` in `course.json` (see [[teaching-philosophy]] Axis 3).
Warm orange (`--emerson-orange`, accent5) carries the signal — a triangular mark
beside the heading, an orange title tick, an orange left rule on the body —
against the otherwise blue / near-monochrome deck, so a caution reads as
different at a glance without shouting.

```html
<article class="slide slide--tmpl-caution" data-slide="105" data-deck="1400">
  <h1 class="slide-title"><span class="slide-title__mark">!</span>Relieve the spring before you open the casing</h1>
  <p class="caution-body">
    Thread the spring adjuster out until <b>all spring compression is relieved</b>
    before removing the diaphragm-casing cap screws — a precompressed spring
    throws the upper casing off.
  </p>
  <figure class="caution-fig">
    <img src="../assets/img/imageNN.png" alt="…">
  </figure>
  <div class="slide-chrome">…</div>
</article>
```

- The **heading is the warning** — imperative, short. `<span class="slide-title__mark">!</span>`
  places the `!` inside the triangle; keep it as the first child of the `<h1>`.
- `.caution-body` — **one** line saying what goes wrong. Bold the failure
  itself. This is the one place a short sentence on the slide is allowed: a
  safety consequence is not instructor patter, it is the point of the slide.
- `.caution-fig` is optional — a photo or diagram of the failure, or of the
  safe method. Omit it and the body sits alone.
- The context pane still carries the concept as normal.

---

## Template 7 — keyed graph  `.slide--tmpl-graph`

A conceptual analytical graph (travel-vs-pressure and the like) laid out to
**Style Guide §5**: the plot on the left carries only axes, data lines and
regions, and small numbered feature dots sitting *on* the line; every series,
region, and feature is named in a vertical key to the right (§5.3). **No text
is rotated to follow a data line and no leader line crosses the plot** (§5.1 /
§5.5) — that is the whole reason this template exists instead of
`.slide--tmpl-figrow`, which has no key column and left authors labelling
lines in place. It is a production port of the gallery
`.slide--role-application` design proven by the template proof (tp-010).

```html
<article class="slide slide--tmpl-graph" data-slide="92" data-deck="1400">
  <h1 class="slide-title">Bench Set</h1>
  <figure class="tmpl-plot">
    <svg viewBox="0 0 640 366" width="640" height="366"
         preserveAspectRatio="xMidYMid meet" role="img" aria-label="…">…</svg>
  </figure>
  <ul class="tmpl-key">
    <li><span class="swatch" style="--swatch-c:var(--emerson-blue)"></span>On the valve</li>
    <li><span class="swatch is-dashed" style="--swatch-c:var(--emerson-grey)"></span>Friction-free reference</li>
    <li><span class="swatch is-band" style="--swatch-c:var(--emerson-yellow)"></span>Bench-set range</li>
    <li><span class="num">1</span>Upper bench set</li>
  </ul>
  <p class="tmpl-takeaway">One plain-language line — the thing to carry away.</p>
  <p class="tmpl-source">After …, Fig. … — … . Component Index: … .</p>
  <div class="slide-chrome">…</div>
</article>
```

- **The `<svg>` must carry `width`/`height` attributes matching its
  `viewBox`** and `preserveAspectRatio="xMidYMid meet"` — the CSS scales it to
  fit the plot box and it letterboxes cleanly. Draw the plot area near-square
  so a diagonal line slopes ~45–48° (§5.10); a shallow plot makes a small
  offset unreadable.
- **`.tmpl-key` entries:** a `.swatch` (`is-dashed`, `is-dotted`, or `is-band`
  variants) leads a *series* or *region* entry — a sample of the exact stroke,
  no number; a `.num` leads a *feature* entry — a blue numbered circle
  identical to the marker drawn on the plot (§6.1). Series first, then
  features, in plot order. Keep entry text to a name plus a short tag, never a
  sentence.
- **Feature markers are drawn inside the SVG** at known viewBox coordinates
  (a filled `--emerson-blue` circle, white halo, white number) — not as
  box-percentage overlays.
- A **single-series graph with nothing to tell apart** (§5.4) omits
  `.tmpl-key` and the plot takes the full width.
- `.tmpl-takeaway` is optional — one line, an orange left rule. `.tmpl-source`
  is required and names the source figure and what changed (§5.9).
- The context pane still carries the concept as normal.

