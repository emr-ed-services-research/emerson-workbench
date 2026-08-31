# Reusable slide templates

Four card templates for the 1400 course. The CSS lives in
`emerson-workbench.css` §7c (the hand-maintained design system); this file is the
usage reference. Introduced with the Chapter 1 rebuild (2026-08-29) and reusable
course-wide.

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
