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

Every day and chapter therefore has a landing card a presenter can open from
the TOC ("Open Day N →" / "Open chapter K →") or from the home overview.

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
