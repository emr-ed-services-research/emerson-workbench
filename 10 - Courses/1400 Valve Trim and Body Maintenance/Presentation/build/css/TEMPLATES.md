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

## Template 1 — module intro card

**Rendered by the course shell, not a deck slide.** See `course/course.css`
`.ov` (centre card: eyebrow `.ov__kicker`, bold `.ov__title`, `.ov__objective`
paragraph, `.ov__start` button) and `.ctx` (right rail: `.ctx__concepts` key
concepts panel). A module with `status: "ready"`, an `objective`, and
`keyConcepts` in `course.json` gets this automatically. Do not build a slide
that duplicates it.

---

## Template 2 — labelled diagram card  `.slide--tmpl-diagram`

A figure on the left with small numbered markers placed on it, paired with an
ordered list of the same numbers on the right. Replaces free-floating
text-labels-over-image.

```html
<article class="slide slide--tmpl-diagram" data-slide="14" data-deck="1400">
  <h1 class="slide-title">Control Valve Assembly</h1>
  <figure class="tmpl-fig">
    <img src="../assets/img/imageNN.png" alt="…">
    <span class="tmpl-marker" style="left:52%;top:18%">1</span>
    <span class="tmpl-marker" style="left:46%;top:63%">2</span>
    <span class="tmpl-marker" style="left:55%;top:78%">3</span>
  </figure>
  <ol class="tmpl-list">
    <li>Actuator — supplies the force and travel</li>
    <li>Bonnet — closes the body, holds the packing</li>
    <li>Valve body — the pressure boundary, between the flanges</li>
  </ol>
  <div class="slide-chrome">…</div>
</article>
```

- `.tmpl-marker` `left`/`top` are percentages of the `.tmpl-fig` box; the marker
  is centred on that point.
- Marker order must match list order — the list auto-numbers with a CSS counter.
- Keep to ~3–6 callouts.

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
