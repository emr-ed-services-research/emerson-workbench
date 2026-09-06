---
title: Emerson Workbench — Style Guide
type: reference
tags:
  - project
  - design
  - style
updated: 2026-09-06
status: full draft — all ten sections written; §§5–6 proven in production; both flagged items closed
---

# Emerson Workbench — Style Guide

> [!note] Status
> **Full draft — all ten sections written, both flagged items closed
> (2026-09-06).**
> - **§5 (Diagram & graph conventions)** and **§6 (Callout conventions)** are
>   reviewed and proven end-to-end in production — the 1400-092 / 097 / 102
>   bench-set-graph rebuild onto `.slide--tmpl-graph`, the tp-010 proof
>   example, and the caution-icon fix. §5.10's follow-up (a decision-table
>   application variant) is built.
> - **§§1–4 and §§7–10** were written 2026-09-06 by lifting and correcting
>   what already exists (`1400 Presentation.md` §4, `emerson-workbench.css`,
>   `tokens.css`, `teaching-philosophy.md`, the `.tmpl-*` templates), with a
>   full adversarial self-review each.
> - **The two flagged open calls are resolved:** §3.3 — green and purple are
>   left in the palette, available and unused, not an open question;
>   §5.6 band alpha — 0.18 is the settled value (the only authored graphs
>   with a band, 092 / 097 / 102, are all at 0.18; tp-010 has no band, so
>   the earlier "nudge tp-010" note was mistaken and is corrected).
> - **§§2.4 / 4.1 (header chrome)** were revised after a Franz finding: the
>   gallery / proof `[class*="slide--role-"]` templates had been on the
>   legacy full-bleed rule, not the restrained heading. The CSS was fixed
>   and verified across both courses; §§2.4 / 4.1 describe the corrected
>   state.

## What this document is

The single place that answers *"how do we do this here"* for everything the
pipeline generates: typography, colour, diagram and graph conventions,
callout conventions, terminology, and the tone of instructional writing.

Style and content are both meant to be **traceable to something
authoritative, not implicit in code or scattered across past fixes**:

- Slide **content** traces to the **Source Library** (and, for a
  conversion, the union of the Source Library and the original deck — see
  `teaching-philosophy.md` "The standard is completeness against source").
- Slide **style** traces to **this document**.

The master templates (`40 - Engine/_template-gallery/gallery.css`,
`40 - Engine/Presentation/build/css/emerson-workbench.css`) and the callout
manifest discipline are *implementations* of what this document states.
Where a template comment currently states a convention (e.g. gallery.css's
"IN-DIAGRAM LABEL CONVENTION" block), that convention moves here and the
comment becomes a pointer.

## Relationship to the other project documents

| Document | Owns | This guide's relationship |
| --- | --- | --- |
| `teaching-philosophy.md` | *why* — pedagogy, and the design principles that follow directly from it (visual-only slides, context pane carries the text, completeness-vs-volume, structure mirrors the teaching arc) | This guide cites it as its basis and does not restate or override it. Pedagogy decisions stay there. |
| `1400 Presentation.md` §4 "Design system (read from the deck)" | a description of the legacy 1400 PowerPoint's theme (geometry, palette, type, chrome), extracted as a reproduction target for the CSS | **Superseded** as the forward standard. Its palette / typography / geometry / chrome are lifted into §§2–4 here, de-scoped from "the 1400 deck" to "the Workbench standard." §4 there stays as history. |
| `tokens.css` | the EMERSON palette as machine values | Stays the single machine source. §3 here is the human spec and usage intent; it never redefines a token. |
| `TEMPLATES.md`, `gallery.css` header comments | usage reference for specific CSS classes + accumulated collision fixes | Keep as usage references. Conventions they state move here; they gain "see Style Guide §X" pointers. |
| `Glossary.md` | ~12 project nouns | §7 (terminology) is the house style for instructional writing and cross-references it. |
| Component Index (`20 - Source Library/`) | which source figure / component backs a concept | §6 (callouts) formalises the manifest pattern the Component Index work already practises. |

---

## 1. Basis & scope

### 1.1 What this document governs

Everything the pipeline generates into a slide, or a human author edits on a
slide by hand: **typography, colour, slide furniture, diagram and graph
conventions, callout conventions, valve/actuator terminology, and the tone of
instructional writing.** If a choice about *how a slide looks or how its text
reads* has a house answer, that answer is here.

It does **not** govern:

- **Pedagogy** — what a course teaches, in what order, at what cognitive
  level. That is `teaching-philosophy.md`. This guide cites it and implements
  the design consequences that follow from it; it never restates or overrides
  a pedagogy decision.
- **Which source backs a concept** — the figure, manual, or component a slide
  is built from. That is the **Component Index** and the Source Library.
- **Course and module structure** — `Roadmap.md`, `Vault Structure.md`, the
  per-course status notes.

### 1.2 Who it is for

Two readers. The **pipeline** — Stage 3 in particular, which composes and
reworks slide visuals and writes context-pane concepts. And a **human author**
editing a slide directly, who needs the same answers without reading the CSS.

### 1.3 What it is derived from

Three sources, and the guide is explicit throughout about which parts are
*derived* and which are a *house choice* (the §5 review established this as a
discipline — a convention presented as "derived from the Handbook" when it is
actually our decision is a defect to catch):

1. **`teaching-philosophy.md`** — for the conventions that follow directly
   from the doing-centered philosophy (slides visual-only, the context pane
   carries the text, completeness measured against source).
2. **The EMERSON brand** — the colour scheme and type, as captured machine-
   readably in `tokens.css` and originally extracted from the legacy 1400
   PowerPoint theme ("Course book Template Mar 2019").
3. **The field's own conventions** — the Control Valve Handbook and the Fisher
   instruction manuals — where a house choice needs grounding in how control-
   valve documentation is actually done (e.g. §5.1's label-rotation rule).

### 1.4 How it is revised, and its authority over code

A change to this document is a **reviewed change**, held to the same bar as a
template change — because the templates and the callout manifest are
*implementations* of what it states.

- A template, a `gallery.css` / `emerson-workbench.css` comment, or a manifest
  **cites this document** ("see Style Guide §X") rather than carrying its own
  copy of a rule. Where a convention currently lives only in a code comment
  (the `gallery.css` "IN-DIAGRAM LABEL CONVENTION" block was the clearest
  case), it moves here and the comment becomes a pointer.
- Where this document and a code comment disagree, **this document wins** and
  the comment is a bug to fix — not the other way round.
- `tokens.css` is the exception in one direction only: it stays the single
  *machine* source for the palette values. §3 here is the human spec and the
  usage intent; it never redefines a token, and a hex value in §3 that
  disagrees with `tokens.css` is an error in §3.

---

## 2. Typography & visual hierarchy

Lifted and de-scoped from `1400 Presentation.md` §4.3 (a description of the
legacy deck's theme) to the Workbench standard, and reconciled with the values
actually in `emerson-workbench.css` — where the two differ, **the stylesheet is
current** and §4.3 is history.

### 2.1 Typefaces

| Token | Face | Used for |
| --- | --- | --- |
| `--font-body` | `"Arial", "Helvetica Neue", Helvetica, "Liberation Sans", system-ui, sans-serif` | everything — body, on-slide labels, captions, source lines, tables, context pane |
| `--font-display` | `"DTL Argo T", <the body stack>` | slide titles and section furniture (dividers, cover, breaker) only |

**DTL Argo T** is Emerson's licensed corporate display face. It is an
optional `@font-face`; the Arial fallback is acceptable and the pipeline does
**not** block on the licence. Nothing on a content slide except the title
needs the display face.

Arial is the theme's own major *and* minor font — this is not a substitution,
it is what the brand uses. Arial Narrow, Calibri, Tahoma, Times, Courier and
the rest that appear in the source `.pptx` are incidental and are not part of
the standard.

### 2.2 The type scale

Slides are CSS containers sized `1056 × 816`, so on-slide type is in **`cqw`**
(1 cqw = 1 % of slide width). The point sizes below are the legacy-deck
equivalents; the conversion is `cqw = pt × 0.12626`.

| Role | Size | Weight | Colour | Notes |
| --- | ---: | --- | --- | --- |
| Slide title — **current (`.slide--hd`)** | `2.7cqw` | 600 | `--emerson-blue` | display face; tight tracking (`-0.005em`); a short blue accent tick beneath, not a full rule (§2.4). This is what the card templates use. |
| Slide title — legacy (bare `.slide-title`) | `3.03cqw` (24 pt) | 400 | `--emerson-blue` | the un-`--hd` deck style; on old slides only, above a full-bleed divider rule |
| Section / cover / breaker title | `3.54cqw` (28 pt) | 400 divider · 700 cover & breaker | blue (divider) · white (cover, breaker) | furniture only; not in this pass's scope beyond the value |
| On-slide label / short header | `1.6–1.9cqw` (12.5–15 pt) | 400–700 | `--emerson-charcoal` | a name or a phrase, never a sentence |
| Diagram/graph key entry | `1.4cqw` | 400 | `--body-text` | a step smaller than the label scale — reference, scanned once (§5.3) |
| Caption / figure source line | `1.2–1.26cqw` (≈10 pt) | 400 italic | `--emerson-grey` | |
| Footer copyright | `1.01cqw` (8 pt) | 400 | `--emerson-grey` | |
| Footer page number | `0.88cqw` (7 pt) | 400 | `--emerson-grey` | |

Individual legacy slides frequently overrode run sizes; a rebuilt slide uses
the scale above and does not inherit those per-run exceptions.

### 2.3 Hierarchy — what may appear on a slide

From `teaching-philosophy.md` ("Slides are visual-only"), stated here as a
typographic rule:

1. **The title** — blue, display face, one line.
2. **On-slide labels and short headers** — charcoal, body face: a part name, a
   column head, an axis title, a numbered-list entry that is a name-plus-tag.
3. **Nothing else.** No explanatory paragraph, no bullet an instructor would
   read aloud. If a slide carries a sentence an instructor would recite
   verbatim, it belongs in the context pane.

The **one exception** is the caution card's single `.caution-body` line — a
safety consequence, stated plainly, is the point of that slide, not
instructor patter (§4.4, §8).

### 2.4 The restrained heading is the standard

**Every rebuilt slide uses the restrained heading** — `.slide-title` at
semibold `2.7cqw`, tight tracking (`-0.005em`), with a **short blue accent
tick** beneath it in place of a rule. It is carried by `.slide--hd` and is
applied automatically to every card template (`.slide--tmpl-*`) and every
gallery role template (`[class*="slide--role-"]`).

The **legacy header** — a `3.03cqw`/400 title above a full-bleed
`--emerson-blue` divider rule running edge to edge — is the deck's original
PowerPoint style. It survives only on the un-rebuilt legacy 1400 slides and
is replaced by the restrained heading as each is converted (the documented
rollout: it becomes universal once the whole deck is on it). **Do not
reproduce the full-bleed rule on a new slide.**

> The gallery and proof `[class*="slide--role-"]` templates were on the
> legacy rule until 2026-09-06 — the `.slide--role-*` selectors had simply
> never been added to the shared heading block. Fixed; verified across both
> courses.

---

## 3. Colour palette & usage

### 3.1 The palette

From `tokens.css` (`<a:clrScheme name="EMERSON">`). These are the only colours
that appear in authored content.

| Token | Hex | Plain-language role |
| --- | --- | --- |
| `--emerson-blue` | `#004B8D` | **structure** — titles, the divider rule, section furniture — **and** the primary "real / on-the-valve / measured" data series in a graph, **and** every numbered callout marker |
| `--emerson-charcoal` | `#3F4040` | body text, on-slide labels, axis lines |
| `--emerson-grey` | `#959797` | secondary / reference — captions, footer, page numbers, figure source lines, **and** an ideal / friction-free reference line in a graph (dashed) |
| `--emerson-white` | `#FFFFFF` | the page background (always), and the halo ring / numeral inside a callout marker |
| `--emerson-cyan` | `#00A4D2` | a **second** measured series shown for contrast in a graph |
| `--emerson-yellow` | `#FFCF22` | an operating-range / bench-set band — a low-alpha region fill (exact value §5.6), never a line |
| `--emerson-orange` | `#F79428` | **caution** — the caution card's mark and left rule — **and** a graph's semantic region or bracket (a deadband, a friction offset). **Never a marker colour.** |
| `--emerson-green` | `#62BB46` | *(brand accent; no current authored-content role — see §3.3)* |
| `--emerson-purple` | `#6E298D` | *(brand accent; no current authored-content role — see §3.3)* |
| `--emerson-link` | `#00AA7E` | hyperlink |
| `--emerson-link-visited` | `#D31245` | followed hyperlink |

### 3.2 Load-bearing conventions

Colour is not decoration here; it carries meaning, and the same meaning looks
the same everywhere:

- **Blue is structure and "the real thing."** Chrome and titles are blue;
  and in a data figure, the blue series is the one that describes actual
  measured / on-the-valve behaviour (§5.6), and a numbered callout marker is
  a filled blue circle with a white halo (§6.1).
- **Orange is caution and offset.** The caution card is orange; and a graph's
  deadband / error / offset *region or bracket* is orange (§5.6). Orange is
  never used for a numbered marker — a span feature is an orange bracket
  *capped by* a blue numbered circle.
- **Grey is secondary or ideal.** Captions, footers, and source lines are
  grey; a friction-free / theoretical *reference* line in a graph is grey and
  dashed (§5.6).
- **Cyan is the second measured series**; **yellow is a range band**. Both are
  reached for only inside §5.6's vocabulary.

The full line-and-region vocabulary is §5.6; the one-marker-colour rule is
§6.1. This section is the palette-level statement they both rest on.

### 3.3 Green and purple carry no authored-content role

The legacy deck's theme labelled green, cyan, yellow, orange, and purple all
as generic "callout" accents. §5.6 then gave cyan and yellow specific graph
meanings and §6.1 collapsed every callout marker to one blue — leaving
**green and purple with no assigned role in slide content.**

That is the settled position (Franz, 2026-09-06): they are **left in the
palette, available and unused.** They stay valid brand colours — a
Workbench-home or course-shell surface may reach for them — but no authored
slide content forces a use, and nothing currently misuses them. Not an open
question.

### 3.4 No non-token colour

A hex value that is not in `tokens.css` does not appear in an authored slide.
The legacy deadband slide **1400-125** uses a non-palette `#0000FF` with
dotted orange-and-purple leader callouts; that slide is pre-redesign and is
exactly what this rule rules out.

---

## 4. Slide furniture / chrome

The frame every content slide carries. From `emerson-workbench.css` §3 and
`1400 Presentation.md` §4.4, de-scoped to the standard.

### 4.1 Header

The **slide title** sits in a box at the top-left (`left/right: 5.6cqw`,
`top: 6cqh`), left-aligned, in `--emerson-blue`, display face, at the
restrained scale (§2.4). Beneath it, a **short `--emerson-blue` accent tick**
(`4.5cqw` wide, `0.3cqh` tall, at the left) — not a rule.

The **legacy full-bleed divider rule** (`.slide::after`: a `--emerson-blue`
line, `~0.09cqh`, edge to edge, at `16.73cqh`, with the title one size up at
`top: 3.4cqh`) is suppressed on every rebuilt slide and survives only on
un-rebuilt legacy 1400 slides (§2.4).

### 4.2 Footer chrome

Three fixed elements, **referenced once from CSS and never pasted per slide**:

| Element | Position | Style |
| --- | --- | --- |
| Copyright line | left, `bottom: 2.9cqh` | `1.01cqw`, `--emerson-grey`; text is the `--copyright-line` token |
| Page number | right, `right: 2.0cqw` | `0.88cqw`, `--emerson-grey` |
| Emerson corporate logo | fixed corner box, `left: 81.4cqw`, `top: 88.1cqh`, `width: 12.16cqw` | 2-colour standard logo; white variant on the cover and blue breaker |

The **copyright year is a single token** (`--copyright-line`), normalised —
the source `.pptx` had two masters disagreeing (2023 vs 2024); the standard is
one current year, set once.

### 4.3 Background

**White, always.** No tinted or textured slide backgrounds in content.
(Divider and breaker furniture are the only full-colour fields.)

### 4.4 The caution card

`.slide--tmpl-caution` carries its own signal treatment — an orange warning
triangle beside the heading, an orange title tick, and an orange left rule on
the `.caution-body` line — so a caution reads as different at a glance without
shouting. The icon is one `clip-path` triangle element with the `!` as its
centred content (rebuilt 2026-09-05; do not reintroduce the old CSS-border
triangle with a separately-positioned glyph). Full detail: `TEMPLATES.md`
Template 6; the writing rule for the body line is §8.

### 4.5 The container-query spacing constraint

**Hard rule, learned the expensive way (2026-09-05, twice).** `.slide`
declares `container-type: size`. **Never** set a `cqw` / `cqh` value for the
`padding`, `margin`, or `border` of an element that itself declares
`container-type` — that is a self-referencing container-query length, it is
circular, and it silently corrupts `cqw` / `cqh` resolution for the **whole
subtree**, not just where the bad value is used. Route every inset through a
**child** element's margin instead (the caution and graph templates both do
this deliberately). A grid item, a figure, a list — anything that is not the
container — may use `cqw` / `cqh` freely.

### 4.6 Content clears the logo corner

Every template's content region is inset far enough to clear the fixed logo
box at `left: 81.4cqw / top: 88.1cqh` at both the 4:3 and 16:9 canvas ratios.
A slide whose content overlaps that corner is a bug (it has happened —
`1400-111` before the ch3-m4 rework).

---

## 5. Diagram & graph conventions

Covers **analytical graphs** — travel-vs-pressure lines, response curves,
characteristic curves. Redrawn **schematics and cutaways** get their
part-callout treatment from §6 and share only §5.8 (redraw policy) and
§5.9 (the source line); the rules below on keys, on-plot marks, and axes
are graph-specific and do **not** apply to a cutaway — a cutaway's
gutter-marker-with-leader callouts are the approved convention there (§6),
not something §5 overrides. Graphs are authored as inline SVG.

### 5.1 The principle — labels come off the plot

**One thing the Control Valve Handbook does consistently, across every
graph type in the 6th edition: it never rotates a text label to follow a
sloped line.** A diagonal line's name always goes somewhere the reader
reads it level — a margin, a bracket, a legend.

Beyond that one invariant the CVH is *not* consistent — it uses a
different approach in every figure:

| CVH figure | What it shows | How it labels |
| --- | --- | --- |
| Fig. 1.18 *Deadband* | one hysteresis loop — the shape *is* the message | axes only; **no line labels, no key**; the prose carries it |
| Fig. 3.38 / 6.8 *Inherent Flow Characteristics* | three curves fanning wide from a shared origin to a shared end | short **horizontal** labels in the open space near each curve |
| Fig. 2.3 *Effect of Deadband on Valve Performance* | three signal traces that interweave, repeated over three panels | one compact **boxed legend**, placed once |
| Fig. 8.10 *Bench Set Seating Force* | two near-parallel sloped lines, a span, axis-position callouts | **margin labels with pointer-ins**, a **bracket** for the span, **leader-line callouts** into the plot for the named lines |

**§5 takes the invariant and then goes stricter than the CVH by choice:**
every series name and every annotation goes in a key; nothing is labelled
inline on the plot, and no leader crosses the plot area. The CVH's Fig.
3.38 (inline labels) and Fig. 8.10 (leaders into the plot) each read fine
*in that figure* — but "are these curves separated enough for an inline
label" and "where does this leader anchor and route" are per-instance
freehand judgments, and removing exactly that kind of call is the point of
the template system. A key in one fixed position is also simply more
findable on a projected slide than labels scattered across the plot.

So the plot's drawing area carries only: axis tick labels, axis titles,
and short feature numbers inside markers. Everything else is in the key.

Our current graphs — 1400-092, 1400-102, 1400-112, and the proof's
tp-006 / tp-010 — all rotate labels along diagonal lines. That is the
first thing this section rules out.

### 5.2 What a graph labels — series, features, threshold lines

Every labelled thing on a graph is one of three kinds:

| Kind | Definition | Treatment |
| --- | --- | --- |
| **Series** | a whole line, curve, dashed reference, or shaded region the reader must tell apart from other series | a **key entry with a swatch** (a sample of the actual line style, or a small fill/hatch chip) — no number |
| **Feature** | a specific point or a single annotated event on the plot | a **numbered marker on the plot**, keyed to a numbered entry in the same list — the callout pattern of §6 |
| **Threshold line** | a specific axis value made visible as a full-height / full-width line (a pressure, a travel %) | a **dotted line** (§5.6), keyed as a series if the reader needs to *name* it, or tied to a feature number if the point is what happens *at* that value |

A span (a bench-set range, a deadband width, a friction shift) is a
**feature** when the teaching point is "this interval, right here": mark it
with a thin square-cornered bracket **and a numbered circle** at its
reference end — the same numbered-circle marker every feature uses, so the
key entry and the on-plot marker always match (a bracket with only a bare
number beside it fails that — the key promises a circle the plot doesn't
show). Treat the span as a **series** instead only when the teaching point
is "this *area* between the curves": fill the region and give it a hatch
swatch in the key.

### 5.3 The key

**The key is the slide's numbered "what to notice" list (`.tpl-list`), not
a separate floating legend box.** This is the point of unification — a
graph's key is the same callout list the nomenclature and mechanism
templates already use, so graphs stop being a special case.

**Layout: a vertical list in a right-hand column**, the same position and
shape the mechanism template puts its list (not a horizontal strip below
the plot — that wraps to two crowded rows the moment a graph has four-plus
entries, and it reads as clutter). **Key text is a step smaller than the
body/label scale** — it is reference, scanned once, not read. The plot
takes the rest of the width; design the graph's own aspect ratio (§5.7)
to sit comfortably in a left column rather than assuming full width.

Rules:

- **Series entries** carry a swatch (a sample of the exact stroke — solid
  bar, dashed bar, dotted bar — or a small filled/hatched square for a
  region) followed by the name. No number.
- **Feature entries** carry a numbered circle — `--emerson-blue` fill,
  white number, white halo (§6, the one callout-marker colour) — identical
  to the marker on the plot, point and span alike (§5.2, §5.5).
- **Order:** all series first, then all features. Within each group, in the
  order encountered on the plot (left-to-right, then top-to-bottom).
- **One key per graph.** A key that is all swatches and no numbered
  features is fine (tp-006 rebuilt is exactly that).
- Entry text is a name plus, if useful, a short functional tag — never a
  sentence an instructor would read aloud; the sentence belongs in the
  context pane.

### 5.4 The single-series case

A graph with **one series and nothing to tell apart** carries no key — a
key would be decoration. The CVH Fig. 1.18 deadband loop is this: one
hysteresis loop, the shape is the whole point. Axes, the drawing, a
caption, and the context pane carry it. This is a genuine category, not a
carve-out to reach for — it applies only when there is genuinely one
series.

### 5.5 On-plot marks

- **Feature markers:** a filled circle in `--emerson-blue` with a white
  halo, the number in white (§6, the one callout-marker colour). The
  circle sits *on* the feature. Small — the circle must not be as wide as
  the gap it sits in (tp-010's first build failed here: two markers ~2 psig
  apart, each nearly that wide).
- **Spans:** a thin, square-cornered bracket linking the span's two ends,
  in `--emerson-orange` (§5.6, an offset region), **plus a numbered circle
  at one end** — the circle is `--emerson-blue` like every other marker,
  even though the bracket it caps is orange. A span whose teaching point is
  its *area* is a filled region instead: `--emerson-yellow` at 0.18 alpha
  or a hatch, keyed as a series.
- **Threshold lines** (e.g. tp-010's vertical lines at specific psig
  values): a dotted `--emerson-grey` line, keyed as a series or annotated
  with a feature number — never left unlabelled. (An ideal/friction-free
  *reference* line is a series, not a threshold line — dashed, per §5.6.)
- **No rotated text.** **No leader lines crossing the plot area.** A
  feature that can't be a short number in a dot goes in the key.
- **Axis-position callouts** ("0 % travel = upper stop", "100 % = lower
  stop, plug seated"): fold these into the axis tick label, horizontal.
  Don't float them in the plot.

### 5.6 Line & region style vocabulary

A fixed vocabulary so the same meaning looks the same on every graph:

| Meaning | Stroke | Colour (token) |
| --- | --- | --- |
| the real / on-the-valve / measured behaviour (the primary series) | solid, 3 px | `--emerson-blue` |
| an ideal / friction-free / theoretical reference | dashed, 2 px | `--emerson-grey` |
| a second measured series shown for contrast | solid, 3 px | `--emerson-cyan` |
| a threshold / limit / "value of interest" line | dotted, 1.5 px | `--emerson-grey` |
| an operating range / bench-set band (region fill) | — | `--emerson-yellow` @ 0.18 alpha |
| a deadband / error / offset region (fill or bracket) | bracket 1.5 px | `--emerson-orange` |

No colour outside `tokens.css` appears in an authored graph. (The legacy
1400-125 uses a non-palette `#0000FF` with dotted orange/purple leader
callouts — that is what this table rules out.)

**Provenance.** The line styles were rationalised from tp-006 and tp-010
(read from source); the band fill and the reference-line grey came from the
legacy 1400-092 / 097 / 102 / 112 (read from render), where the band was
`#F6BE00 @ 0.13` and the reference line `#6E7070`. Two deliberate changes
to land on tokens: `#F6BE00 → --emerson-yellow`, `#6E7070 → --emerson-grey`.
Confirmed in the 092 / 097 / 102 rebuild (2026-09-05/06): `--emerson-grey`
at 2 px dashed reads strongly enough as a diagonal on white, and the band
settled at **0.18 alpha** (the key swatch, being tiny, goes to 0.30 to
match perceptually). **The rebuilt 092 / 097 / 102 are the only authored
graphs that carry a range band, and all three are at 0.18** — tp-010's
concept (the one-sided friction shift) uses the two lines plus an orange
span bracket and no band, and tp-006 is not yet rebuilt to §5. So 0.18 is
the settled value with nothing left to reconcile.

### 5.7 Axes

- **Axis lines:** `--emerson-charcoal`, ~2.4 px.
- **Arrowheads — by whether the axis is bounded:** an **open-ended** axis
  (pressure, time — the quantity continues past what's drawn) gets an open
  arrowhead at its increasing end. A **bounded** axis (0–100 % travel, a
  percentage, any hard-limited scale) gets **no arrowhead** — an arrow
  says "continues past here", which misrepresents a hard limit. On a
  travel-vs-pressure graph the pressure axis has an arrowhead and the
  0–100 % travel axis does not (tp-010).
- **Tick labels:** `--emerson-charcoal`, horizontal, at the value.
- **Axis titles:** the x-axis title horizontal below the axis; the y-axis
  title rotated 90° counter-clockwise beside the axis. **An axis title is
  the only text in the whole figure that may be rotated** — never a data
  label.
- **Gridlines:** none by default. Our travel-vs-pressure graphs are
  conceptual — they show a relationship, not values to read off. Add faint
  `--emerson-grey` gridlines only when a reader genuinely must extract a
  quantitative value from the plot (rare).
- **Orientation:** a travel-vs-pressure graph puts **0 % travel at the top**
  of the y-axis, 100 % at the bottom — travel increases downward, matching
  the valve stem closing. This is the Fisher instruction-manual convention
  and is already what 1400-092 / 102 / 112 and tp-006 / tp-010 do. Keep it.

### 5.8 Use the source figure directly; redraw only for a stated reason

**Default: use the source figure directly** — extracted at high
resolution, with a §5.3 key beside it carrying the course's terminology
and isolating what each slide teaches. The same base figure can serve a
sequence of slides with different key entries active. This is the default
because redrawing is where risk enters: every real graph defect this
project has hit — dropped illustrations, mispositioned callouts, ad hoc
conventions — came from a redraw re-deriving what the source figure
already had right.

**Redraw only for one of these stated reasons:**

1. the source figure's axis layout is genuinely incompatible with the
   course's convention (§5.7) and no clean alternative figure matches it;
2. the figure cannot be cropped or keyed down to the single sub-concept a
   slide teaches;
3. the figure is genuinely poor quality — a low-resolution raster,
   baked-in noise, illegible labels.

"It should match our visual system" is **not** on this list — the key
mechanism (§5.3) already carries the course's vocabulary beside a lifted
figure.

**Whole-family visual coherence** — wanting every graph in a related set
to share one look — is *arguable case by case, not a standing fourth
reason*. If it is invoked for a specific slide, the argument must state
plainly what is lost by using that slide's source figure directly and why
that loss outweighs the source-first default. "They'd look more
consistent" is not, by itself, the argument.

Whatever the outcome: a redraw is **specified against a named source
figure** (manual + figure number), never invented — the same rule the
Component Index applies to components — and it follows §5.1–§5.7.

For the bench-set / deadband graphs specifically (corrected 2026-09-05,
after inspecting Fig. 8.10 directly and against tp-010's worked outcome):
**CVH Fig. 8.10 is NOT a use-directly case for these slides.** It is clean
vector art in the course's travel-on-Y / pressure-on-X layout, but it is
the *deadband* figure — three interleaved curves (friction-free nominal,
on-valve increasing, on-valve decreasing), a "Deadband" bracket, and
"*actuator connected to valve, deadband present". Each bench-set slide
teaches a sub-concept that is one or two of those lines; the rest is
ch3-m6 content and cannot be cropped out because all three run parallel
and interleaved (reason #2). Fisher 657/667 IM Fig. 5 (drawing A6763-2,
2018) is also clean but its axes are transposed (reason #1). So this whole
family is **a bounded redraw + a §5.3 key**, spec'd against Fig. 8.10's
printed geometry — exactly what tp-010 concluded and §5.10 records, and
now what 1400-092 / 097 / 102 are built as (`.slide--tmpl-graph`,
TEMPLATES.md Template 7). The earlier "use-directly" wording here recreated
the same false premise that produced the original redraw confusion. The
`Source Grounding — Staging Plan.md` §3 "low-res 1990s scan" line was still
factually wrong (both figures are clean vector); its *recommendation* to
redraw was right, for the reason above rather than the one it gave.

### 5.9 The source line

Every graph — lifted directly or redrawn — carries a `.tpl-source` line
(grey italic, below the content), matching the format already in use:

> After [manual / handbook], Fig. [N] — [what was kept / changed]. Component Index: [id].

A figure used directly says so ("CVH Fig. 8.10, cropped to the
friction-shift region"). A redraw that departs from its source figure
states how, briefly
("travel-stop marks added"; "axes relabelled to psig"; "both curves from
Fig. 5, deadband bracket added"). This is what makes a redraw checkable
against its source instead of trusted.

### 5.10 Worked application — pages 6 & 10 of the template proof

Concrete targets for the rebuild (the rebuild is a separate step; this is
here so the section is reviewable against real cases). The key contents
below apply whether the base is a lifted source figure or a redraw.

**tp-010 — "Re-Checking Travel on the Valve"** — built 2026-09-05, on its
second review round.

Source-first (§5.8) landed on a **bounded redraw, reason #2**: Fig. 8.10
and Fisher IM Fig. 5 are both three-line deadband figures; tp-010 teaches
only the one-sided friction shift; the third line (the deadband's
decreasing-pressure side) is ch3-m6 content, parallel and interleaved,
un-croppable. Redraw spec'd against Fig. 8.10's geometry — **the
friction-free-to-on-valve offset was pixel-measured on Fig. 8.10 at ≈1.85
psig, ~23 % of the 8-psig bench-set span** (drawn as 2 psig).

The key (vertical, right column, §5.3):

- Series: off the valve / friction-free (grey dashed), on the valve / with
  packing friction (blue solid). Colour by role (§5.6) — Fig. 8.10 colours
  its nominal line blue, we do not match the source palette.
- Features: **①** upper bench set (11 psig), a numbered circle at the
  friction-free line's 100 %-travel corner; **②** bench set + friction ÷
  diaphragm area, a numbered circle at the on-valve corner, with a span
  bracket linking ① and ②.
- No rotated labels; no threshold lines needed.

The plot's own aspect ratio is near-square (matching Fig. 8.10) so the
lines slope near 45° — a shallow plot made the ~2-psig shift unreadable in
the first build even though the proportion was correct.

**tp-006 — "How Deadband Shows Up on the Graph"**

tp-006 teaches deadband via the opening/closing-valve band — Fisher 657/667
IM Fig. 5's frame, transposed to the course's axes. Whether it ends up a
keyed source figure or a redraw, and whether Fig. 8.10's friction-shift
frame or Fig. 5's opening/closing frame teaches deadband better, is a
**ch3-m6 content decision and is deferred** — ch3-m6 is under the
module-work full stop. Flagged, not decided here.

Illustrative key (whichever base): closing curve (solid `--emerson-blue`),
opening curve (solid `--emerson-cyan`), bench-set reference (dashed
`--emerson-grey`); the deadband as a bracketed span, keyed. The rotated
"closing curve" / "opening curve" / "bench-set line" labels come off the
lines into the key.

**Template changes §5 required — all done (2026-09-05):**

1. `.tpl-list` gained a **swatch-entry variant** — an entry led by a
   line-style or fill sample instead of a number.
2. The application template gained a `.tpl-list` (vertical, right column,
   per §5.3), replacing the free-floating `.tpl-annotation` dot+halo-label
   overlays. Chart left, key right, takeaway and source line full-width
   below; a `:has(.tpl-list)` gate keeps a keyless single-series graph
   (§5.4) full-width.
3. **`application` and `application-annotated` merged into one template.**
   Confirmed no real content-shape difference remained: both were
   "analytical graph + takeaway", and §5 makes a key universal, so "has
   anchored features" (the old `-annotated` distinguisher) is now just
   "has numbered features in its key" — not a template. One
   `slide--role-application`.

**One real variant is still unbuilt** — a **decision-table application**:
tp-009 ("Selecting an Action", `role: application`, `evaluate`) is a
comparison table plus a supporting figure, a genuinely different shape
from an analytical graph, currently hand-styled inline. It warrants its
own variant the way `procedure` has list / callout / photo-sequence.
Flagged, not built; needs its own go-ahead. Also note: `TEMPLATES.md`
documents the production `.slide--tmpl-*` classes only — the gallery
`.slide--role-*` templates are documented by gallery.css comments plus
this section, not TEMPLATES.md.

### 5.11 Checklist (folds into the Stage 3 pre-send check)

All items are human-verified against the rendered slide — none are caught
by the headless render checks today, which see clipping and broken images
but not label rotation or colour intent.

- [ ] No text is rotated to follow a data line. Only an axis title is rotated.
- [ ] Every line, curve, and region has a key entry with a swatch.
- [ ] Every number shown on the plot resolves to a numbered key entry.
- [ ] Colours are from the §5.6 vocabulary; no non-token colour.
- [ ] Axis lines charcoal; arrowhead only on an open-ended axis, none on a bounded one (§5.7); tick labels horizontal; 0 % travel at top.
- [ ] The source line is present, names the source figure, and says what changed.
- [ ] The figure is used directly unless a redraw has a stated §5.8 reason.
- [ ] A redraw is specified against a named source figure, not invented.

### 5.12 Scope of the first rebuild — done 2026-09-05

The diagonal-rotated-label pattern is not confined to the proof pages: the
shipped production slides **1400-092** (Bench Set, m1), **1400-097** (Bench
Set — Direct-Acting, m2), **1400-102** (Re-Checking Travel, m3), and
**1400-112** (Bench Set — Reverse-Acting, m4) all carry it, and **1400-125**
(Deadband) is a pre-redesign legacy slide of which the label convention is
only one part.

**097 was missed in this section's original enumeration** — the Component
Index's `ch3-cmp-bench-set-graph` lists `used-by: [92, 97, 102, 112]` and
097 has the identical two-rotated-label defect. Caught by checking the
Component Index directly at §5 review.

**Franz's scope decision (2026-09-05): 092 / 097 / 102 in, 112 deferred.**
112 is ch3-m4 content — under the module-work full stop, same treatment as
the proof's tp-008 / tp-013. 1400-125 and tp-006 stay deferred with the
ch3-m6 deadband-slide redesign.

**Done:** all three (092 / 097 / 102) rebuilt onto the new
`.slide--tmpl-graph` (TEMPLATES.md Template 7 — the production port of
tp-010's keyed-graph design). Each is a bounded redraw + a §5.3 key, per
§5.8: the rotated diagonal labels removed, the "stem first moves" /
"full rated travel" callouts folded into the x-axis ticks or promoted to
numbered features, the friction-free framing moved to the takeaway. Line
geometry unchanged. 102 matches tp-010 exactly (its proof twin). Held for
Franz's direct review; the Stage 3 authoring gate is unaffected.

---

## 6. Callout conventions

Covers **part callouts on a schematic, cutaway, or photo** — numbering a
figure and naming the numbers in a list. §5's graph keys and §6's part
callouts are **the same list mechanism** (`.tpl-list` / `.tmpl-list`): a
graph's key is a part-callout list where series get a swatch instead of a
number. The rules below are the general ones; §5.2–§5.5 are the
graph-specific overrides.

### 6.0 The callout manifest — the record comes before the marker

The Component Index and the slide-template work already practise this;
stated here as the rule:

- **Every marker's position is derived from a verified source** — the real
  source figure at the coordinates the Component Index records, or an
  already-reviewed production slide — **before the marker is placed**, not
  eyeballed onto the drawing and then explained.
- The marker → label → source-locator record is authored *as* the marker is
  placed. A record written afterward to justify a freehand choice is exactly
  the failure this rule exists to stop (it produced the ch3-m4 mispositioned
  callouts).
- At review, **every leader is checked at 2× zoom** and must terminate on the
  exact part it names — not "near", not "in the right region" (pre-send
  checklist item 3).
- A redrawn figure's markers are verified against the source figure's real
  geometry, not the redraw's convenience (working rule 2, the geometry
  check).

### 6.1 The one callout-marker colour — resolved 2026-09-06

**Every numbered callout marker is a filled `--emerson-blue` circle, white
number, white halo ring.** On the figure/plot and in the list, every role
— nomenclature, mechanism, all three procedure variants, and §5 graph
features. Before this, the gallery templates diverged (nomenclature
charcoal, mechanism/procedure blue, §5 features orange); Franz called it in
while §6 was still cheap to define.

- The **white halo ring** is what makes one colour work on any background —
  a dark cutaway, a photo, or a blue/grey data line.
- **Orange is not a marker colour.** It stays reserved for the caution
  treatment and for §5.6's semantic regions and brackets (a bench-set band,
  a deadband, a friction offset). A span feature is therefore an *orange
  bracket* capped by a *blue numbered circle* — the bracket carries the
  meaning, the circle is just the marker.
- The production `.slide--tmpl-diagram` (Template 2) still uses its older
  two-tone scheme (charcoal gutter marker, blue list circle); it aligns to
  this rule if/when it is next revisited, not now.

### 6.2 A source figure that carries its own numbered key — resolved 2026-09-05

When a figure is used directly (§5.8) and it carries **its own circled or
bracketed numbers** — a manufacturer's note key, `①②③④` printed on the
drawing — those numbers stay as the source drew them. Do **not** renumber
the figure, erase its numbers, or reorder a step list to line up with them.

- **The slide's own numbering keeps its meaning.** A procedure step list is
  numbered by teaching sequence; that ordering is the point of the list and
  is never bent to match a figure's note key.
- **Name the two schemes apart in the source line or a short caption**, so a
  reader is not left assuming step 2 and the figure's ② are the same thing.
  Standard phrasing: *"The figure's own numbers ①–④ are [manufacturer]'s
  note key, not the step numbers."*
- This is the accepted resolution of the tp-017 collision (Fisher 657 IM
  Fig. 4 — its ①–④ mark loading-pressure points, the step list's ①–④ are
  the verification sequence). Preferred over redrawing the figure to drop
  its numbers, which §5.8 rules out for "matches our system" reasons anyway.
- If the figure's numbers genuinely *cannot* coexist with the slide's
  without confusing the teach — e.g. the figure's key is central to what the
  slide explains — that is a signal the figure needs a §5.3 key of our own
  (numbered markers we place and control), not direct use. Decide that at
  the point of use; the default is direct use + the caption.

### 6.3 A figure that already carries its own field labels — resolved 2026-09-05

The nomenclature convention is *numbered markers on the figure, keyed to a
list beside it* (§6.1). It does **not** apply when the figure is one that
carries **its own printed field labels** — a nameplate (`TYPE`, `BENCH SET`,
`TRAVEL`, `MAX STEM DIA`), a gauge face, a wiring legend. The printed labels
already do the marker's job; layering numbered circles on top to force a
one-to-one match with the list is a fit that does not belong.

- **The list still carries the numbered entries** — it is the teaching
  order and the place the plain-language gloss lives ("`MAX STEM DIA` — the
  largest valve stem this actuator fits"). The figure just is not marked.
- **The list entry names the field by its printed label**, verbatim, so the
  reader's eye crosses to the plate on the label text rather than a number.
- This is the accepted resolution for tp-004 (the Fisher 657 nameplate).
  Same shape as §6.2 — a source figure has its own labelling scheme and the
  house convention accommodates it rather than overwriting it.
- The boundary: this covers figures whose labels are an inherent part of
  the object (a real nameplate reads that way). A cutaway or schematic with
  no native callouts still gets our numbered markers.

### 6.4 On-image dot vs. gutter marker — and per-template capacity

Two placements, both current, chosen by figure type:

| Placement | When | Templates |
| --- | --- | --- |
| **Marker on the feature** — a filled `--emerson-blue` circle sitting on the part, drawn *inside* the SVG at known coordinates | a graph feature (a point on a line); a schematic where the marker can sit on the part without hiding it | `.slide--tmpl-graph`, the gallery role templates |
| **Marker in a left gutter with a thin leader** pointing in at the part | a dense cutaway or photo where a dot on the part would obscure detail, or where several parts cluster too tightly for on-part dots | `.slide--tmpl-diagram` (Template 2) |

A leader line **never crosses the plot area of a graph** (§5.5) — the gutter
placement is for pictorial figures, not data figures.

**Per-template callout capacity is finite.** When a figure needs many
numbered parts, or a graph key runs long, the usual cause is that the step
is carrying more than one concept — split the teaching step, don't shrink
the markers to fit. As a feel for the ceiling: tp-003's nomenclature
cutaway carries 7 and reads as near the comfortable limit; the built graph
keys sit at 2–4 entries.

**Markers drawn inside the SVG beat box-percentage overlays.** A
`.tpl-marker` positioned by `top: X%` of a figure box drifts when the box's
aspect changes between the 4:3 and 16:9 canvases; a `<circle>` at a known
viewBox coordinate does not (the tp-006 lesson).

---

## 7. Terminology

### 7.1 Scope

Valve / actuator house style for **on-slide labels and context-pane
writing**. Project-infrastructure nouns (Bench Book, Bench Notes, Source
content, Cartridge…) are `Glossary.md`. A domain term not settled here
defaults to the **Control Valve Handbook**'s usage, then the relevant
**Fisher instruction manual**.

### 7.2 Decisions already made

- **"packing box"** (or **"packing bore"**) — the machined, open recess the
  stem packing sits in. It is a feature *cut into* the bonnet, **not the
  bonnet casting as a whole**; a leader labelling it lands on the annular
  cavity or the bore wall, never the solid casting. "Stuffing box" is the
  same component and is not used in the course — "packing box" throughout.
  (Established on the 1400 Chapter 2 packing content, where a leader was
  corrected off the solid casting — see `valve-packing-box-terminology`.)
- **Actuator action:** **direct-acting** / **reverse-acting** are the
  primary terms. "Air-to-close" / "air-to-open" may appear once as a gloss,
  not as the working term.
- **Body orientation:** **push-down-to-close (PDTC)** / **push-down-to-open
  (PDTO)** — expand on first use in a module, abbreviate after.
- **Trademark:** current practice is inconsistent — across the 1400 ch3
  slides "Fisher 657" appears bare ~23 times and as "Fisher™ 657" ~4 times.
  Formalise the scattered ™ into a rule rather than inventing one:
  **Fisher™** on the first mention in a module (the title or the intro
  card), plain **Fisher** everywhere after. Emerson is the parent company,
  Fisher the product brand — a slide about a 657 is a "Fisher 657", never an
  "Emerson 657".

### 7.3 Units

| Quantity | Unit | Format |
| --- | --- | --- |
| Pressure | **psig** | `11 psig` — space between value and unit |
| Torque | **N·m primary, lbf·ft in parentheses** | `13 N·m (10 lbf·ft)` — the form the ch3 torque content and the Component Index use |
| Length / travel | **inches**, vulgar fractions for nominal sizes | `3/8 in`, `3/4 in` |
| Angle | degrees | `90°` — no space |

A value and its unit are not split across a line break. A unit that is
constant down a table column goes in the column header, not every cell
(§9.4).

### 7.4 When a term is not settled

Use the Control Valve Handbook's term and move on. If the same ambiguity
recurs across several slides, **flag it for a terminology decision** rather
than picking a different word each time — the same discipline §5 applied to
diagram conventions.

---

## 8. Instructional writing tone

Formalises `teaching-philosophy.md`; it makes no new pedagogy calls.

### 8.1 The module objective

One sentence, imperative, **leading with a verb from the module's domain
menu** (`teaching-philosophy.md` "Domain verb menus") at the module's
`levelTarget`. Form: *"After completing this module the student will be able
to [verb] …"*. One objective per module; it is written to the ceiling
cognitive level, not an average.

### 8.2 Key concepts (the context pane)

**Terse, instructor-talking-point voice** — the tight phrasing an instructor
uses as a prompt to themselves, not prose for a learner to read cover to
cover. Sentence fragments are fine. One idea per concept. 4–6 per module.
Never a paragraph. The currently-relevant concept highlights as the class
moves; the writing has to survive being glanced at, not studied.

### 8.3 On-slide text

Names and short headers only (§2.3). The sole full-sentence exceptions:

- a **procedure step** — imperative mood, one action per step, in the order a
  technician performs it ("Thread the spring adjuster out until all spring
  compression is relieved");
- a **caution body** — one sentence, the consequence stated plainly, the
  failure itself in bold ("… or **the casing is thrown off**"). A safety
  consequence is the point of a caution slide, not instructor patter.
- an **application takeaway** — one plain-language line under an analytical
  figure, stating the thing to carry away.

### 8.4 Check-your-knowledge stems

For an **apply-or-higher** module, the stem is a **situation**, not "which
statement is true": *"You are bench-setting a 657 off the valve and the
travel between your marks is short. What is the most likely cause?"* Options
are all plausible; exactly one is correct; the wrong ones are real mistakes a
technician makes, not obvious throwaways.

### 8.5 Voice and register

- **Second person** ("you") for procedures, cautions, and check stems.
- **Present tense** for how a mechanism works ("the spring drives the stem
  down").
- **No** marketing register, no "simply / just / obviously / of course", no
  rhetorical questions — except the one deliberate `prime` slide that opens a
  module with a question or a stake.

---

## 9. Table conventions

### 9.1 The production table treatment (`.tmpl-table`)

From `TEMPLATES.md` Templates 3–4:

- **Header row:** `--emerson-blue` background, white text, weight 700,
  sentence case.
- **Body rows:** zebra-striped — even rows `color-mix(in srgb,
  var(--emerson-blue) 5%, #fff)`.
- **Numeric columns:** `class="num"` — right-aligned, `tabular-nums`.
- **A highlighted example row:** `tr.is-example` — `--emerson-yellow` tint at
  ~0.32, weight 700, an `--emerson-orange` inset bar on the left edge. Used
  in Template 4 to mark the row the slide is working through.
- Cell borders: 1 px `--emerson-grey`.

### 9.2 Table as content vs. supporting aside

| Shape | Template |
| --- | --- |
| A reference table the learner reads *is* the slide | `.slide--tmpl-table` (Template 3) |
| A reference table with **one row worked as the example**, plus an optional paired illustration | `.slide--tmpl-compare` (Template 4) — the `tr.is-example` row |
| A reference table **plus the items it tabulates** shown in a figure row beneath | `.slide--tmpl-figrow.has-lead` |
| A short **decision / selection** table beside a corroborating figure | `.slide--role-application:has(.tmpl-table)` — the decision-table application variant (§5.10) |

### 9.3 Short-table layout

A table with few rows does **not** stretch to fill its space. It sits at its
natural height and is **vertically centred against whatever it is paired
with** (`align-items: center`) — the fix made building the tp-009
decision-table variant, where the table was top-aligning against a taller
figure.

### 9.4 Decision-table column order

Order the columns so the reader scans **left-to-right from what they have to
what to do**: the "given" columns first (desired outcome, the body they
have), the "answer" column last (the action to specify). tp-009's
fail-mode table is "Desired fail mode → Valve body → Actuator action".

### 9.5 A constant unit goes in the header

If a column's unit is the same in every row, it goes in the column heading
("Torque (N·m)") and the cells carry bare numbers.

---

## 10. Change control

### 10.1 A change here is a reviewed change

Held to the same bar as a template change, because the templates and the
callout manifest are implementations of this document (§1.4).

### 10.2 Review effort scales with risk

- A section that **formalises existing practice** — most of §§1–4 and 7–10 —
  gets a full **adversarial self-review** (catch overclaimed derivation and
  internal contradiction) and then one consolidated read, not a per-section
  direct pass.
- A section making a **new, high-stakes call** — redraws touching shipped
  production slides, factual claims about hardware, a convention with no
  existing practice to derive from — gets repeated direct review, the way §5
  did.
- A **genuinely open design decision** is flagged for a decision (as §5's
  legend / arrowhead / redraw questions were), never settled silently and
  presented as derived.

### 10.3 This document's authority

Where a template comment, a manifest, or a pipeline doc states a convention
this document also states, **this document is authoritative** and the other
carries a "see Style Guide §X" pointer. A disagreement is a bug in the other
file, not a competing opinion.

### 10.4 Revision notes are inline and dated

Each section carries its own dated notes in place ("corrected 2026-09-05",
"resolved 2026-09-06"), the pattern §5 established. There is no separate
changelog to drift.

### 10.5 Codify before (or with) the fix

A convention discovered while doing pipeline work is written **here first**,
then the slide or template fix is the first instance of the codified rule —
not an isolated patch that a later reviewer has to reverse-engineer into a
rule. This is the pipeline-gap-first triage rule
(`workbench-architecture-and-phase.md`) applied to style.
