---
title: Emerson Workbench — Style Guide
type: reference
tags:
  - project
  - design
  - style
updated: 2026-09-05
status: in progress — §5 complete, awaiting a final direct review; other sections stubbed
---

# Emerson Workbench — Style Guide

> [!note] Status
> Being built section by section, each with its own review pass. **§5
> (Diagram & graph conventions) is complete — all open items resolved
> (source-figure-first §5.8; the key convention §5.3; the
> application-template merge §5.10; the bounded-axis arrowhead rule §5.7) —
> and awaiting a final direct review pass.** It was proven in application
> by rebuilding tp-010 in the template proof (tp-006 deferred with ch3-m6).
> One follow-up is logged inside §5.10 (a decision-table application
> variant, unbuilt). The remaining sections are stubbed with scope notes
> and will be written as their own passes.

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
  its *area* is a filled region instead: `--emerson-yellow` at ~0.13 alpha
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

For the bench-set / deadband graphs specifically: **CVH Fig. 8.10** is
clean vector art and already matches the course's travel-on-Y /
pressure-on-X layout — a use-directly case. Fisher 657/667 IM Fig. 5
(drawing A6763-2, 2018) is also clean, but its axes are transposed from
the course's convention. The `Source Grounding — Staging Plan.md` §3
recommendation to redraw these was an unconfirmed checklist item resting
on a factually wrong "low-res 1990s scan" premise; it does not stand.

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

### 5.12 Scope of the first rebuild — decide at §5 review

The diagonal-rotated-label pattern is not confined to the proof pages: the
shipped production slides **1400-092** (Bench Set), **1400-102**
(Re-Checking Travel), **1400-112** (Bench Set, Reverse-Acting) carry it
too, and **1400-125** (Deadband) is a pre-redesign legacy slide needing a
full redesign of which the label convention is only one part.

Given the source-figure-first direction (§5.8), the work for 092 / 102 /
112 is **"replace the redraw with a keyed source figure"** — evaluate CVH
Fig. 8.10 direct-use, add a §5.3 key — **not** "rebuild the redraw to the
key convention." This is potentially *less* work than a redraw, not the
same work relabelled.

Open decision, to be made deliberately at §5 review:

- **Same pass** — do 092 / 102 / 112 alongside tp-010.
- **Separate follow-up** — do only tp-010 now (it gates the Stage 3
  authoring decision); log 092 / 102 / 112 as their own pass, since the
  production fix blocks nothing.

1400-125 is not part of either option — it folds into the eventual
deadband-slide redesign (ch3-m6, under the module-work full stop). tp-006
is likewise deferred (see §5.10).

---

## 6. Callout conventions

*Mostly stubbed. To cover: formalise the marker → label → source-locator
manifest the Component Index and slide-template work already practise —
positions derived from a verified source figure or an already-reviewed
production slide, authored before the marker is placed, never a record
written afterward to justify a freehand choice; per-template callout
capacity; the on-image dot convention vs. the gutter-marker-with-leader
convention and when each applies; how §5's graph keys and §6's part
callouts are the same list mechanism.*

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
