---
title: Emerson Workbench — Style Guide
type: reference
tags:
  - project
  - design
  - style
updated: 2026-09-05
status: in progress — §5 drafted for review; other sections stubbed
---

# Emerson Workbench — Style Guide

> [!note] Status
> Being built section by section, each with its own review pass. **§5
> (Diagram & graph conventions) is drafted and ready for review** — it was
> written first because it unblocks the pages 6/10 chart rebuild in the
> template proof. The remaining sections are stubbed with scope notes and
> will be written as their own passes.

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

*Stub. To cover: what this governs and what it doesn't; who it's for
(the pipeline, and a human author working a slide by hand); how it is
revised (a change here is a reviewed change, like a template change); the
principle that a template or manifest cites this document rather than
carrying its own rule.*

## 2. Typography & visual hierarchy

*Stub. To cover, lifted and de-scoped from `1400 Presentation.md` §4.3:
the Arial-based web font stack; the type scale (slide title, card heading,
body/label, caption, source line) as it actually stands in
`emerson-workbench.css`; when the restrained `.slide--hd` heading is used
vs. the full PowerPoint title rule; the rule that slides carry headers and
labels only, never prose (from `teaching-philosophy.md`).*

## 3. Colour palette & usage

*Stub. To cover: the EMERSON palette from `tokens.css` with a plain-language
role for each token; the load-bearing conventions — blue = structure and
the "real / measured" data series, orange = caution and callout accent,
grey = secondary / reference, the accent set for callouts; the rule that
non-token colours do not appear in authored content (the legacy deadband
slide 1400-125 uses a non-palette `#0000FF` and dotted orange/purple — that
is what this section rules out).*

## 4. Slide furniture / chrome

*Stub. To cover: the title box + full-bleed rule, the footer chrome
(copyright / page number / logo) and its fixed corner position, the
caution card's signal treatment. Cross-reference the container-query
constraint learned 2026-09-05: never size a container's own
padding/margin/border in `cqw`/`cqh` when it also declares
`container-type` — route spacing through a child.*

---

## 5. Diagram & graph conventions

Covers the internal drawing style of everything visual on a slide that
isn't a photograph: analytical **graphs** (travel-vs-pressure lines,
response curves, characteristic curves) and redrawn **schematics /
cutaways**. Where a figure carries numbered part callouts, the marker →
label → source-locator discipline for those is §6; this section is the
drawing itself.

### 5.1 The principle — labels come off the plot

**A reader identifies what a line, region, or point means from a key, not
from text sitting on the data.** The only text inside a plot's drawing area
is: axis tick labels, axis titles, and short feature numbers inside markers.
Everything else — every series name, every annotation longer than a number
— lives in a key beside or below the plot.

This is derived from the Control Valve Handbook's own practice, which is
consistent across every graph type in the 6th edition:

| CVH figure | What it shows | How it labels |
| --- | --- | --- |
| Fig. 1.18 *Deadband* | one hysteresis loop — the shape *is* the message | axes only; **no line labels, no key**; the prose carries it |
| Fig. 3.38 / 6.8 *Inherent Flow Characteristics* | three curves fanning from a shared origin to a shared end, widely separated | short **horizontal** labels in the open space near each curve |
| Fig. 2.3 *Effect of Deadband on Valve Performance* | three signal traces that track and overlap each other, repeated across three panels | one compact **boxed legend** with short line samples, placed once |
| Fig. 8.10 *Bench Set Seating Force* | two near-parallel sloped lines, a span, and axis-position callouts | labels in the **margins with short pointer-ins**, a **bracket** for the span, **leader-line callouts** for the named lines |

The through-line: **the CVH never rotates a text label to follow a sloped
line.** When a line is diagonal, its name goes to a margin, a leader, a
bracket, or a legend. Our current graphs (1400-092, 1400-102, 1400-112,
and the proof's tp-006 / tp-010) all rotate labels along diagonal lines —
that is exactly the thing this section rules out.

### 5.2 Series vs. features — the two things a graph labels

Every labelled thing on a graph is one of two kinds, and each gets a
different treatment:

| Kind | Definition | Treatment |
| --- | --- | --- |
| **Series** | a whole line, curve, dashed reference, or shaded region the reader must tell apart from other series | a **key entry with a visual swatch** (a short sample of the actual line style, or a small fill/hatch chip) — no number |
| **Feature** | a specific point, a threshold value, a span, or a single annotated event on the plot | a **numbered marker on the plot**, keyed to a numbered entry in the same list — the callout pattern of §6 |

A span (a bench-set range, a deadband width) is a borderline case: treat it
as a **feature** if the teaching point is "this interval, right here" (mark
it with a bracket, key the bracket); treat it as a **series** if the
teaching point is "this *area* between the curves" (fill the region, key
the fill's hatch).

### 5.3 The key

**The key is the slide's numbered "what to notice" list (`.tpl-list`), not
a separate floating legend box.** The chart-bearing role templates
(mechanism, application) already carry this list beside or below the
figure; a graph reuses it. This is the point of unification — a graph's key
is the same callout list the nomenclature and mechanism templates already
use, so graphs stop being a special case.

Rules:

- **Series entries** carry a swatch (a ~24 px sample of the exact stroke —
  solid bar, dashed bar, dotted bar — or a small filled/hatched square for
  a region) followed by the name. No number.
- **Feature entries** carry a numbered dot; the same number appears on the
  plot at the feature.
- **Order:** all series first, then all features. Within each group, in the
  order encountered on the plot (left-to-right, then top-to-bottom).
- **One key per graph.**
- Entry text is a name plus, if useful, a short functional tag — never a
  sentence an instructor would read aloud (same rule as every other list in
  the system; the sentence belongs in the context pane).

### 5.4 The one exception — a single-series schematic

When a graph has **exactly one line or loop and the shape itself is the
whole teaching point** (the CVH Fig. 1.18 case), it carries **no key and no
rotated label**: axes, the drawing, a caption, and the context pane carry
it. This is the exception, not a default to reach for — it applies only
when there is genuinely one series and nothing to tell apart. Using it is a
deviation and gets the same review as any deviation.

### 5.5 On-plot marks

- **Feature markers:** a filled dot in `--emerson-orange` with a white
  halo, the number in white, sized as the gallery's existing
  `.tpl-annotation__dot` / marker spec. The dot sits *on* the feature.
- **Spans:** a thin, square-cornered bracket, or a filled region. A filled
  region uses `--emerson-yellow` at ~0.13 alpha (the established
  bench-set-band fill) or a hatch; either way it is a keyed series.
- **Threshold / reference lines** (e.g. tp-010's vertical lines at specific
  psig values): a dotted `--emerson-grey` line, keyed as a series or
  annotated with a feature number — never left unlabelled.
- **No rotated text.** **No leader lines crossing the plot area.** A
  feature that can't be a short number in a dot goes in the key.
- **Axis-position callouts** ("0 % travel = upper stop", "100 % = lower
  stop, plug seated"): fold these into the axis tick label, horizontal.
  Don't float them in the plot.

### 5.6 Line & region style vocabulary

A fixed vocabulary so the same meaning looks the same on every graph.
Rationalised from what 1400-092 / 102 / 125 already use, snapped to tokens:

| Meaning | Stroke | Colour (token) |
| --- | --- | --- |
| the real / on-the-valve / measured behaviour (the primary series) | solid, 3 px | `--emerson-blue` |
| an ideal / friction-free / theoretical reference | dashed, 2 px | `--emerson-grey` |
| a second measured series shown for contrast | solid, 3 px | `--emerson-cyan` |
| a threshold / limit / "value of interest" line | dotted, 1.5 px | `--emerson-grey` |
| an operating range / bench-set band (region fill) | — | `--emerson-yellow` @ ~0.13 alpha |
| a deadband / error / offset region (region fill or bracket) | bracket 1.5 px | `--emerson-orange` |

No colour outside `tokens.css` appears in an authored graph. (The legacy
1400-125 uses `#0000FF` and dotted orange/purple leader callouts — that
slide is pre-redesign and is what this table rules out.)

### 5.7 Axes

- **Axis lines:** `--emerson-charcoal`, ~2.4 px, with an open arrowhead at
  the far (increasing) end of each axis. Matches the CVH.
- **Tick labels:** `--emerson-charcoal`, horizontal, at the value.
- **Axis titles:** the x-axis title horizontal below the axis; the y-axis
  title rotated 90° counter-clockwise beside the axis. **An axis title is
  the only text in the whole figure that may be rotated** — never a data
  label.
- **Gridlines:** none by default. Our travel-vs-pressure graphs are
  conceptual — they show a relationship, not values to read off. Add faint
  `--emerson-grey` gridlines only when a reader genuinely must extract a
  quantitative value from the plot (rare).

### 5.8 Redraw vs. use the source figure

**Redraw** when any of:

- the source figure is a low-resolution scan that clashes with the design
  system, or
- it carries the source manual's own parts-list key numbers that can't be
  cleanly reused (several 1400 ch2 figures were passed over for exactly
  this reason — see `1400 Chapter 2 redesign status.md`), or
- the teaching point needs an element the source figure doesn't isolate
  (e.g. the bench-set graph's travel-stop marks — the ch3-m4 defect was
  dropping exactly that).

**Use the source figure as-is** (with our own markers layered on top, under
a §6 manifest) when it is clean line-art, correctly scoped, and our markers
cover the teaching point.

A redraw is **specified against a named source figure** (manual + figure
number), never invented — the same rule the Component Index applies to
components. See `Source Grounding — Staging Plan.md`.

### 5.9 The source line

Every graph and every redrawn figure carries a `.tpl-source` line (grey
italic, below the content):

> After [manual / handbook], Fig. [N] — [what was kept, what was changed].

A redraw that departs from its source figure states how, briefly
("travel-stop marks added"; "axes relabelled to psig"; "both curves from
Fig. 5, deadband bracket added"). This is what makes a redraw checkable
against its source instead of trusted.

### 5.10 Worked application — pages 6 & 10 of the template proof

Concrete targets for the rebuild (the rebuild itself is a separate step;
this is here so the section is reviewable against real cases).

**tp-006 — "How Deadband Shows Up on the Graph"**

- Series: closing curve (solid `--emerson-blue`), opening curve (solid
  `--emerson-cyan`), bench-set reference (dashed `--emerson-grey`).
- The deadband is a **span** — bracket it, and key the bracket (its
  teaching point is "the gap between the curves", so a bracket, not a
  fill).
- Key (`.tpl-list`): three swatch entries for the lines + one swatch entry
  for the deadband bracket. The current numbered list ("1 closing curve /
  2 opening curve / 3 the gap…") becomes swatch-keyed; entry 3's
  explanation moves to the context pane.
- Nothing rotated. "closing curve" / "opening curve" / "bench-set line" no
  longer sit on the lines.

**tp-010 — "Re-Checking Travel on the Valve"**

- Series: off-the-valve / friction-free (dashed `--emerson-grey`),
  on-the-valve / with packing friction (solid `--emerson-blue`), the shift
  band (`--emerson-yellow` fill).
- Features: **1** — upper bench set (11 psig); **2** — bench set +
  (packing friction ÷ diaphragm area), at the shifted endpoint.
- Key: three swatch entries + two numbered entries. Dots "1" and "2" on the
  plot; the vertical reference lines at 11 psig and the shifted value
  become dotted `--emerson-grey` threshold lines tied to those two
  features.
- The long rotated labels are gone.

**Template implication:** the mechanism template (tp-006) already has the
`.tpl-list` beside the figure — it needs a swatch-marker variant on list
entries. The application-annotated template (tp-010) currently has on-chart
`.tpl-annotation` dots and a `.tpl-takeaway` line but **no key list** — it
needs the `.tpl-list` added, in the same position the mechanism template
uses it. Both are small, structural template changes, scoped with the
rebuild.

### 5.11 Checklist (folds into the Stage 3 pre-send check)

- [ ] No text is rotated to follow a data line. Only an axis title is rotated.
- [ ] Every line, curve, and region has a key entry with a swatch.
- [ ] Every number shown on the plot resolves to a numbered key entry.
- [ ] Colours are from the §5.6 vocabulary; no non-token colour.
- [ ] Axis lines are charcoal with an arrowhead; tick labels horizontal.
- [ ] The source line is present and says what was kept / changed.
- [ ] Redraws are specified against a named source figure, not invented.

### 5.12 Scope of the first rebuild — decide at §5 review

§5's derivation established that the diagonal-rotated-label pattern is not
confined to the proof pages: the shipped production slides **1400-092**
(Bench Set), **1400-102** (Re-Checking Travel), **1400-112** (Bench Set,
Reverse-Acting) carry it too, and **1400-125** (Deadband) is a
pre-redesign legacy slide that needs a full redesign of which the label
convention is only one part.

Open decision, to be made deliberately when §5 is reviewed — not by
default once the rebuild starts:

- **Same pass** — rebuild 092 / 102 / 112 alongside tp-006 / tp-010. It is
  the identical fix under the same fresh rule.
- **Separate follow-up** — rebuild only the two proof pages now (that is
  what gates the Stage 3 authoring decision); log 092 / 102 / 112 as their
  own pass, since the production fix blocks nothing and pulling it in
  extends how long the gate stays closed.

1400-125 is not part of either option — it folds into the eventual
redesign of the deadband slide (ch3-m6, currently under the module-work
full stop).

---

## 6. Callout conventions

*Stub. To cover: formalise the marker → label → source-locator manifest
the Component Index and slide-template work already practise —
positions derived from a verified source figure or an already-reviewed
production slide, authored before the marker is placed, never a record
written afterward to justify a freehand choice; per-template callout
capacity; the on-image dot convention vs. the gutter-marker-with-leader
convention and when each applies; how §5's graph keys and §6's part
callouts are the same list mechanism.*

## 7. Terminology

*Stub. To cover: valve / actuator nomenclature house style and the
decisions already made (e.g. "packing box" not "stuffing box" — see
`valve-packing-box-terminology`), trademark handling (Fisher™ etc.),
units and their formatting, cross-reference to `Glossary.md`.*

## 8. Instructional writing tone

*Stub. To cover: objective and key-concept phrasing (the domain verb menus
and Bloom levels already in `teaching-philosophy.md`), imperative voice for
procedures and cautions, the "terse instructor talking-point, not learner
prose" standard for the context pane, check-your-knowledge stem style
(situation, not "which is true", for apply-or-higher modules).*

## 9. Table conventions

*Stub. To cover: the existing `.tmpl-table` treatment (blue header row,
row tint, `.num` for right-aligned figures), when a table is the content
vs. a supporting aside, the short-table centring pattern — lifted from
`TEMPLATES.md` Templates 3–4.*

## 10. Change control

*Stub. To cover: a change to this guide is a reviewed change; templates and
manifests cite it rather than restating it; how a deviation is flagged and
reviewed.*
