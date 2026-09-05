---
title: Emerson Workbench — Style Guide
type: reference
tags:
  - project
  - design
  - style
updated: 2026-09-05
status: in progress — §5 revised after an adversarial pass, awaiting direct review; other sections stubbed
---

# Emerson Workbench — Style Guide

> [!note] Status
> Being built section by section, each with its own review pass. **§5
> (Diagram & graph conventions) has been through an adversarial self-review
> and revision and is awaiting a direct review pass** — it was written
> first because it unblocks the pages 6/10 chart rebuild in the template
> proof (which does not start until §5 is approved). The remaining sections
> are stubbed with scope notes and will be written as their own passes.

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

A span (a bench-set range, a deadband width) is a borderline case: treat it
as a **feature** if the teaching point is "this interval, right here" (mark
it with a bracket, key the bracket); treat it as a **series** if the
teaching point is "this *area* between the curves" (fill the region, key
the fill's hatch).

### 5.3 The key

**The key is the slide's numbered "what to notice" list (`.tpl-list`), not
a separate floating legend box.** This is the point of unification — a
graph's key is the same callout list the nomenclature and mechanism
templates already use, so graphs stop being a special case. (What the
templates carry today, and the changes this needs, are listed at the end
of §5.10, "Template changes §5 requires".)

Rules:

- **Series entries** carry a swatch (a sample of the exact stroke — solid
  bar, dashed bar, dotted bar — or a small filled/hatched square for a
  region) followed by the name. No number.
- **Feature entries** carry a numbered dot; the same number appears on the
  plot at the feature.
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

- **Feature markers:** a filled dot in `--emerson-orange` with a white
  halo, the number in white, sized as the gallery's existing
  `.tpl-annotation__dot` / marker spec. The dot sits *on* the feature.
- **Spans:** a thin, square-cornered bracket, or a filled region. A filled
  region uses `--emerson-yellow` at ~0.13 alpha (the established
  bench-set-band fill) or a hatch; either way it is a keyed series.
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
| an operating range / bench-set band (region fill) | — | `--emerson-yellow` @ ~0.13 alpha |
| a deadband / error / offset region (fill or bracket) | bracket 1.5 px | `--emerson-orange` |

No colour outside `tokens.css` appears in an authored graph. (The legacy
1400-125 uses a non-palette `#0000FF` with dotted orange/purple leader
callouts — that is what this table rules out.)

**Provenance / to verify at rebuild.** These values are rationalised from
tp-006 and tp-010 (read from source) and 1400-092 / 102 / 112 (read from
render, not source). Two are deliberate changes to land on tokens: the
band fill `#F6BE00 → --emerson-yellow`, and the reference-line grey
`#6E7070 → --emerson-grey`. `--emerson-grey` (`#959797`) is lighter than
what is in use now — confirm at rebuild that it reads strongly enough as a
thin dashed diagonal on white; if not, use `--emerson-charcoal` at ~60 %.

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
- **Orientation:** a travel-vs-pressure graph puts **0 % travel at the top**
  of the y-axis, 100 % at the bottom — travel increases downward, matching
  the valve stem closing. This is the Fisher instruction-manual convention
  and is already what 1400-092 / 102 / 112 and tp-006 / tp-010 do. Keep it.

### 5.8 Redraw vs. use the source figure

Whether to redraw a figure or use it as-is is governed by
`Source Grounding — Staging Plan.md` and the Component Index rules — §5
does not restate that logic. §5 adds only two things:

- a redrawn graph follows §5.1–§5.7;
- a redraw is **specified against a named source figure** (manual + figure
  number), never invented — the same rule the Component Index applies to
  components.

### 5.9 The source line

Every graph and every redrawn figure carries a `.tpl-source` line (grey
italic, below the content), matching the format already in use:

> After [manual / handbook], Fig. [N] — [what was kept / changed]. Component Index: [id].

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

**Template changes §5 requires** (all scoped with the rebuild, none built
yet):

1. `.tpl-list` gains a **swatch-entry variant** — an entry led by a
   line-style or fill sample instead of a number. Needed by every
   chart-bearing template.
2. The **application-annotated** template gains a `.tpl-list` in the same
   position the mechanism template uses it. It currently has only
   free-floating `.tpl-annotation` dots and a `.tpl-takeaway` line; the
   takeaway can stay, the annotation dots become plot markers keyed to the
   new list.
3. Still to pin down in that work, and worth a view at review: whether the
   key sits **right of** or **below** the plot; the swatch's size in
   `cqw`; key-text scale (inherits §2).

### 5.11 Checklist (folds into the Stage 3 pre-send check)

All items are human-verified against the rendered slide — none are caught
by the headless render checks today, which see clipping and broken images
but not label rotation or colour intent.

- [ ] No text is rotated to follow a data line. Only an axis title is rotated.
- [ ] Every line, curve, and region has a key entry with a swatch.
- [ ] Every number shown on the plot resolves to a numbered key entry.
- [ ] Colours are from the §5.6 vocabulary; no non-token colour.
- [ ] Axis lines are charcoal with an arrowhead; tick labels horizontal; 0 % travel at top.
- [ ] The source line is present, names the source figure, and says what changed.
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
