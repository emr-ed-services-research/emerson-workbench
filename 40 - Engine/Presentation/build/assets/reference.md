# ISA-Standard Schematic Symbol Library — Phase 1 Reference

Status: **Phase 1 of a 5-phase plan** for rebuilding CVE1 Chapter 8 ("Valve
Sizing Fundamentals: Liquid & Compressible Flow") around progressive
schematic-based teaching. This is a one-time foundational asset build for
Franz's review. **It does not touch any course content, any Gallery
template, or `gallery.css`.** Files live outside the vault (scratchpad) until
approved.

Two hard requirements carried through the whole build (per Franz):
1. **Horizontal by default** — flow left to right, matching real P&ID/PFD
   convention. Not the vertical/portrait diagrams tried and rejected earlier
   this session.
2. **Real ISA-standard conventions** — proper valve body symbols, instrument
   bubbles, and line-type distinctions, not freehand invented shapes or an
   annotated photograph.

## Files in this folder

| File | What it is |
|---|---|
| `symbol-library.svg` | The reusable symbol library itself — `<symbol>` definitions in `<defs>`, rendered as a labelled swatch sheet when opened directly. |
| `demo.html` | Self-contained standalone page composing the symbols into one horizontal example loop (tank → LT → LC → control valve + actuator). Same symbol defs inlined, no external file dependency. |
| `reference.md` | This document. |

## What was searched before anything was drawn

Per the pipeline's own rule (ground against real vault sources before
inventing), the following was checked *first*:

- All 15 `Subject-Matter Index — Control Valve Handbook chN.md` files (ch1
  through ch15) — searched for any loop, P&ID, schematic, piping, tank, or
  vessel figure already catalogued.
- The full file listing of `20 - Source Library/Handbooks & Sourcebooks/
  Control Valve Handbook — extracted-figures/` (176 files) — read directly,
  not just the index text, in case something schematic-like existed without
  being indexed as such yet.
- `20 - Source Library/Handbooks & Sourcebooks/` at large, for any other
  P&ID-adjacent document.
- `00 - Project/Style Guide.md` §3 (colour palette) and §5 (diagram/graph
  conventions) for this course's existing visual language, so nothing here
  invents a new one.
- `10 - Courses/Control Valve Engineering 1/Presentation/course/course.json`
  for CVE1 Chapter 1's and Chapter 8's real, already-authored content (not
  guessed) — to ground which primitives are actually needed.
- The real, currently-shipping slide `cve1-005.html`, to see how the vault's
  one existing loop figure (`cvh-cmp-feedback-control-loop`) is actually
  used today — confirmed it is the *raw source figure placed directly*, not
  a redrawn inline SVG. This library is the first schematic redraw asset
  built for this course.

### What was actually found

- **`cvh-cmp-feedback-control-loop`** (Control Valve Handbook Fig. 1.1,
  `ch1-fig1-feedback-control-loop.png`) — a functional **block diagram**
  (Process / Sensor / Transmitter / Controller / Control Valve boxes), not a
  physical piping schematic. It is real and directly relevant: it draws the
  "Manipulated Variable" and "Controlled Variable" paths as a **thick solid
  blue line with a filled arrowhead**, and the feedback paths as a
  **thinner grey line** — a real, load-bearing precedent for a heavy/light
  line distinction, which this library generalizes into true ISA
  process-line-vs-signal-line convention.
- **`cvh-cmp-sov-3port-spring-return-symbol`** and
  **`cvh-cmp-sov-4port-double-acting-symbol`** (Control Valve Handbook Figs.
  14.14 / 14.15, in `Subject-Matter Index — Control Valve Handbook ch4.md`,
  images `ch4-fig14.14-sov-3port-spring-return-symbol.png` and
  `ch4-fig14.15-sov-4port-double-acting-symbol.png`) — **real ISA-style
  schematic symbols already in this vault.** Both draw a valve as two solid
  filled dark-blue triangles meeting apex-to-apex (the classic "bowtie"
  glyph), with a square tag badge above it. This is the actual source of
  this library's control-valve-body symbol.
- **`cvh-cmp-analog-ip-positioner-schematic`** (Fig. 4.2) and the
  **pneumatic controller schematics** (Figs. 4.11/4.12) — real labelled
  mechanism schematics, useful for confirming the vault's general
  line-drawing style (thin black outline, no colour fill except the valve
  glyph itself), but not piping/instrumentation diagrams in the P&ID sense.
- **`ch5-diagram-valve-selection-process-flowchart.png`** — a real sizing-
  chapter diagram, but a text-box decision flowchart (vertical steps), not a
  physical schematic. Confirms no ready-made P&ID exists for the sizing
  chapter.
- **No tank/vessel symbol, no instrument bubble, and no dedicated
  process-piping schematic** were found anywhere in the vault's Source
  Library. These had to come from general ISA 5.1 convention.

## Per-symbol sourcing (grounded vs. general — do not treat as equal confidence)

| Symbol | Grounding | Detail |
|---|---|---|
| **Control valve body** (`sym-valve-body`) | **Vault-grounded** | Geometry (two solid triangles meeting apex-to-apex) and fill colour (Emerson blue) taken directly from CVH Fig. 14.14/14.15. Port numbers and the pilot-tag badge from the source figure were dropped — this is a generic 2-port control valve, not the 3-port solenoid valve the source actually depicts, so only the *glyph*, not the whole figure, is reused. |
| **Control valve + diaphragm actuator** (`sym-valve-actuator`) | **Mixed** | Valve body: same vault-grounded bowtie. Actuator housing (split-case diaphragm shape, stem, yoke): **general ISA convention** — no line-schematic actuator was found in the vault (the vault's own actuator figures, e.g. Figs. 1.9/1.12, are fully-labelled cutaway photos/illustrations, not simplified schematic glyphs). |
| **Process line + flow arrowhead** | **Vault-grounded** | The solid-heavy-line / filled-arrowhead treatment is taken directly from CVH Fig. 1.1's Manipulated/Controlled Variable arrows, generalized from "variable flow" to "piping flow," which is standard ISA usage. |
| **Signal line (dashed)** | **Vault-grounded distinction, general execution** | Fig. 1.1 draws its feedback paths visibly thinner/lighter than the variable paths — real precedent for *a* distinction existing. The specific rendering (dashed, grey, 2px) is standard ISA 5.1 signal-line convention, not itself copied from a vault figure (Fig. 1.1's own feedback lines are thin solid grey, not dashed — dashing was added here because a solid pipe-weight line and a solid thin line look too similar at a glance on a real piping schematic, where the process line itself is also a physical object; dashing is the safer, more standard disambiguator for a true P&ID and is unambiguous ISA convention). |
| **Instrument bubble — field-mounted** (`sym-instrument-field`) | **General ISA 5.1 convention** | Plain circle = field-mounted instrument. Not found in the vault as a line-schematic element (the closest vault precedent is the small square "S" pilot-tag badge on the SOV figures — a real but differently-shaped tagging convention). |
| **Instrument bubble — panel-mounted** (`sym-instrument-panel`) | **General ISA 5.1 convention** | Circle bisected by a horizontal line = panel/DCS-mounted (vs. field-mounted). Standard textbook ISA 5.1 usage, not vault-sourced. |
| **Process vessel / tank** (`sym-vessel-tank`) | **General convention** | No vessel/tank figure of any kind was found anywhere in the vault's Source Library (checked all 15 CVH chapter indexes and the full extracted-figures listing). |
| **Concentric pipe reducer** (`sym-pipe-reducer`) | **General convention, added for a real, verified content need** | Not vault-sourced as an image, but CVE1 Chapter 8's own already-authored content (`course.json`, module `cve1-ch8-m1`) explicitly teaches the piping-geometry factor Fp and works a concentric-reducer case (ΣK = K1 + K2, K1 + K2 = 1.5·(1 − d²/D²)² for identical reducers on both sides) — a schematic that cannot show *why* Fp exists without a reducer symbol. Added per the task's own instruction to check real content before finalizing scope, not guessed. |

## Colour and stroke-weight conventions used

All values are the exact tokens already defined in this course's
`tokens.css` / `00 - Project/Style Guide.md` §3.1 — **no colour outside that
palette appears anywhere in this library**:

| Token | Hex | Used for |
|---|---|---|
| `--emerson-blue` | `#004B8D` | Valve body fill (matches Style Guide §3.2: "blue is... the real thing") |
| `--emerson-charcoal` | `#3F4040` | Process/piping lines, component outlines, structural text |
| `--emerson-grey` | `#959797` | Signal lines (matches Style Guide §3.2: "grey is secondary") |
| `--emerson-white` | `#FFFFFF` | Component fills, page background |

Stroke weights follow the same heavy/light real-vs-secondary logic Style
Guide §5.6 already uses for graphs (solid 3px blue for "the real, measured
thing" vs. dashed 2px grey for a reference/secondary line) — carried here
into piping: **process line 4px solid**, **signal line 2px dashed**.

## The composed example (`demo.html`)

A basic tank level-control loop, horizontal, flow left to right:

```
[Tank] --process--> [reducer] --> [Control valve + actuator] --process--> (flow →)
   |  (tap)
   v
 [LT] --signal--> [LC] --signal--> (down to actuator)
```

This mirrors the *functional* skeleton of the vault's own
`cvh-cmp-feedback-control-loop` (sensor/transmitter → controller → final
control element) but renders it as a **real physical piping-and-
instrumentation schematic** — the thing Chapter 8 actually needs, since its
equations (P1, P2, ΔP, q, Fp, reducers) describe physical pipe geometry, not
abstract control-loop blocks.

## Open questions / judgment calls for Franz before Phase 2

1. **Signal-line dashing vs. the vault's own thin-solid precedent.** I chose
   dashed grey (standard ISA, more legible against a solid process line) over
   exactly copying Fig. 1.1's thin-solid grey feedback line. Worth confirming
   this reads as intentional rather than as drifting from the vault's own
   established look.
2. **Actuator symbol has no vault grounding at all.** Everything about its
   shape (split-case diaphragm housing, yoke, stem proportions) is general
   ISA convention. If Franz has a preferred simplified actuator glyph in
   mind (e.g., closer to the source's own direct/reverse-acting cutaway
   silhouettes rather than a from-scratch ISA shape), that should be decided
   before Phase 2 builds a template around this exact shape.
3. **Instrument-bubble tag typography** (the "LT"/"LC" text) is currently
   placed by the *composing document*, not baked into the symbol, so any tag
   (PT, FT, FC, etc.) can reuse the same bubble. Confirm this is the right
   division of labour before Phase 2's template locks in how tags get
   authored per slide.
4. **Scope check**: this set covers exactly what Chapter 1's and Chapter 8's
   real, already-authored `course.json` content needs (confirmed by reading
   it, not guessed) — it deliberately does **not** include rotary valve
   glyphs, three-way valve symbols, or SIS/solenoid symbols, since neither
   chapter's real content currently calls for them on a physical schematic.
   If Phase 2's template design surfaces a need for one of those, that is
   new scope, not a gap in this pass.
