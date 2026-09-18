---
title: Component Index — Control Valve Handbook ch10
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: 10 — Isolation Valves
updated: 2026-09-17
---

# Component Index — Control Valve Handbook, Chapter 10 (Isolation Valves)

Full-chapter cataloging pass, part of the CVH ch5–15 indexing directive
(Franz, 2026-09-17) that follows on from ch1–4's standing full-chapter
cataloging. Matches ch1–4's rigor: every page in the chapter's confirmed
range was rendered as an image and visually inspected — not read from
extracted text alone — and every real figure identified against the
rendered page.

**Real chapter boundary, confirmed by direct page reads:** Chapter 10 spans
PDF pages 210–239 inclusive. Page 210 is the "Chapter 10 / Isolation Valves"
divider page; page 239 is blank (chapter-end filler, no figures); PDF page
240 is the "Chapter 11 / Sustainability" divider. PDF page number equals
printed page number throughout (zero offset), consistent with every other
chapter checked in this document.

**Attribution note (decided, Franz, 2026-09-18):** the chapter's own opening
line reads "This chapter has been extracted from IPT's Pipe Trades Handbook
by Robert A. Lee, with permission." This is the only chapter in the book
found so far with an explicit third-party source credit — every other
chapter reads as Emerson/Fisher's own original material. `status: current`
is still applied throughout (this content is published as part of the
current 6th-edition Control Valve Handbook, which is what the
precedence-bucket vocabulary tracks) — that part was never in question.
The open question was whether this changes anything downstream: **yes** —
any future course or document authoring against this chapter's content
should carry the IPT/Robert A. Lee credit forward, not cite the Control
Valve Handbook alone. See the matching note in Open Items below.

This chapter's figures fall into two distinct kinds, both catalogued below
under the same rules: **Figures 10.1–10.39** are conventional labelled
cutaways, schematics, and photos of isolation-valve hardware (gate, globe,
check, diaphragm, pinch, ball, butterfly, and plug valves). **Figures
10.40–10.53** are full-page ANSI dimension tables (nominal pipe size vs.
face-to-face/end-to-end dimensions by class) — pure numeric data, but each
one is captioned "Figure 10.N" in the source, not "Table N", so each is
catalogued as its own component per the standing rule (a source-numbered
figure is catalogued regardless of whether its content is pictorial or
tabular; only separately-numbered "Table N" items are excluded). Flagging
this plainly so a future reader isn't surprised that roughly a quarter of
this chapter's "figures" are dimension tables, not diagrams.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party-published Emerson/Fisher document (though this specific chapter's content is credited to IPT's Pipe Trades Handbook — see the attribution note above). No archive or legacy material was consulted for this chapter. |

## Components

```yaml
id: cvh-topic-valve-function-taxonomy
kind: topic
concept-tags: [valve function, throttling, flow reversal, pressure regulation, valve selection]
status: current
teaches: >
  The primary purpose of any valve is to stop or start flow, or to regulate
  it. Regulation itself covers three distinct functions: throttling,
  preventing flow reversal, and relieving or regulating system pressure.
  Selecting a valve type for a given service is driven by which of these
  functions the application actually needs, plus the valve's design
  suitability for the service — not an arbitrary preference among the eight
  basic valve designs this chapter surveys (gate, globe, check, diaphragm,
  butterfly, plug, relief, ball).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "p.211, §10.1 'Basic Valve Types' — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-body-bonnet-junction, cvh-topic-valve-guiding, cvh-topic-check-valve-selection]
used-by: []
notes: >
  The chapter-opening framework the whole valve-type survey hangs off —
  every subsequent section (gate, globe, check, diaphragm, pinch, ball,
  butterfly, plug) is organized as an instance of this taxonomy. No single
  figure carries this content; it is stated once in the chapter's own
  introductory prose before Figure 10.1 appears. Confirmed by direct text
  read of p.211.
```

### 10.1 Basic Valve Types — Gate Valves (printed pp. 211–213)

```yaml
id: cvh-cmp-gate-valve-pressure-seal
teaches: A gate valve fitted with a pressure-seal bonnet closure, shown as a 3D cutaway render — the pressure-seal bonnet-to-body junction used on high-pressure valve classes rather than a bolted bonnet.
concept-tags: [gate valve, pressure seal, bonnet, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.211, §10.1 "Basic Valve Types", Figure 10.1 "Gate Valve Pressure Seal"
delivery: not yet determined
used-by: []
notes: Opens the chapter's valve-type survey; a 3D rendered cutaway, not a traditional line-drawing schematic.
```

```yaml
id: cvh-cmp-gate-valve-bolted-bonnet
teaches: A wedge-type gate valve with a bolted bonnet, fully labelled — gland flange, packing gland, packing, bonnet bushing, gland eye bolts, groove pin, handwheel nut, handwheel, yoke-sleeve retaining nut, yoke sleeve, integral yoke and bonnet, bonnet nuts, bonnet gasket, stem-disk connection, flexible disk, bonnet studs, valve body, flanged-end connection — the baseline gate-valve construction the rest of §10.1's variants (solid-wedge, split-wedge, double-disk) are built from.
concept-tags: [gate valve, bolted bonnet, wedge gate, isolation valve, yoke]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.211, §10.1.1 "Gate Valves", Figure 10.2 "Gate Valve Bolted Bonnet"
delivery: not yet determined
used-by: []
notes: Fully labelled cutaway with the chapter's most extensive callout set for a single gate-valve figure.
```

```yaml
id: cvh-cmp-solid-wedge-gate-valve
teaches: Solid-wedge gate valve cutaway, labelled — handwheel, gland flange, stem, solid wedge, seat — the widely-used design suitable for air, gas, oil, steam, and water service.
concept-tags: [gate valve, solid wedge, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.212, Figure 10.3 "Solid-Wedge Gate Valve"
delivery: not yet determined
used-by: []
notes: Contrasted directly against the flexible-wedge design in the adjacent Figure 10.4/10.5.
```

```yaml
id: cvh-cmp-flexible-wedge-disk
teaches: Flexible-wedge disk, side and top views — a wedge shape with a center hub connecting the two halves of the disk, with guides used on larger sizes to prevent chattering.
concept-tags: [gate valve, flexible wedge, disk design, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.212, Figure 10.4 "Flexible-Wedge Disk"
delivery: not yet determined
used-by: []
notes: Two-panel composite (side view + top view), both panels captioned within the same figure number — not two separate figures.
```

```yaml
id: cvh-cmp-split-wedge-gate-valve
teaches: Split-wedge gate valve cutaway, labelled — packing, bonnet, rising stem, split-wedge disk — the last turn of the handwheel forces the two-piece disk against tapered seats.
concept-tags: [gate valve, split wedge, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.212, Figure 10.5 "Split-Wedge Gate Valve"
delivery: not yet determined
used-by: []
notes: Companion/contrast to the double-disk design in Figure 10.6 on the same page spread.
```

```yaml
id: cvh-cmp-double-disk-gate-valve
teaches: Double-disk gate valve cutaway, labelled — stem, double disk, spreader, seat — a spreader or wedge forces two parallel disks against parallel seats to close.
concept-tags: [gate valve, double disk, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.212, Figure 10.6 "Double-Disk Gate Valve"
delivery: not yet determined
used-by: []
notes: Text explicitly contrasts this design's friction/wear behavior against the split-wedge design in Figure 10.5.
```

```yaml
id: cvh-cmp-flexible-split-wedge-gate-valve
teaches: Flexible split-wedge gate valve, a cutaway detail of the flexible internal parallel-slide construction that mixes parallel-slide and flexible-wedge advantages for closure by position rather than torque alone.
concept-tags: [gate valve, flexible split wedge, isolation valve, parallel slide]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.213, Figure 10.7 "Flexible Split-Wedge Gate Valve"
delivery: not yet determined
used-by: []
notes: Text explains this design achieves zero leakage at 6 bar air with lower required torque than a solid wedge.
```

```yaml
id: cvh-topic-body-bonnet-junction
kind: topic
concept-tags: [pressure seal, bolted bonnet, body-bonnet junction, gasket, high pressure]
status: current
teaches: >
  Every isolation valve's body-to-bonnet junction is made one of two ways: a
  bolted bonnet (bolts and nuts, used across ANSI classes 150 through 1500)
  or a pressure-seal bonnet (used only on high-pressure classes 900 through
  4500). A pressure-seal joint works as a sequence: an axial force that
  increases as internal pressure rises is applied to a gasket; this force
  compresses the gasket, which deforms both radially (pressing against the
  body and cover walls to create the sealing surface pressure) and axially;
  a ring above the gasket absorbs the axial force and transfers it to
  segment rings fitted in a groove in the body, which carry the force into
  the body itself; the cover is separately pre-stressed by studs so the
  gasket is already deformed and sealing even when internal pressure is low,
  before the pressure-assist effect takes over at higher pressure.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "pp.213-214, §10.1.1 body text (unheaded prose following the flexible split-wedge discussion) — prose, not figure-anchored"
relatedFigures: [cvh-cmp-gate-valve-pressure-seal, cvh-cmp-pressure-seal-detail, cvh-cmp-flexible-split-wedge-gate-valve]
relatedTopics: [cvh-topic-valve-function-taxonomy]
used-by: []
notes: >
  Explicitly stated to apply to "all isolation valves," not just gate
  valves — a real cross-cutting mechanism, not a gate-valve-specific detail,
  even though it appears in the gate-valve section. Confirmed by direct
  visual page render of p.213 (a two-column layout; text-extraction alone
  read cleanly here, but the render was checked to be sure given p.217's
  extraction problem below). Complements Figure 10.1/10.8's structural and
  color-coded mechanism views with the real written sequence of forces.
```

### 10.1.1 Pressure Seal Detail; 10.1.2 Globe Valves (printed pp. 214–215)

```yaml
id: cvh-cmp-pressure-seal-detail
teaches: Pressure-seal bonnet construction detail, color-coded — expanded graphite seal ring and segment ring, SS stop ring, pressure arrows showing how internal pressure drives the seal — the mechanism behind the pressure-seal junction shown structurally in Figure 10.1.
concept-tags: [pressure seal, gate valve, bonnet, expanded graphite, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.214, Figure 10.8 "Pressure Seal"
delivery: not yet determined
used-by: []
notes: Color-coded mechanism diagram, distinct from Figure 10.1's 3D structural render of the same general concept — this one shows HOW the seal works, not just what it looks like.
```

```yaml
id: cvh-cmp-globe-valve-isolation
teaches: Globe valve (straightway body style) cutaway, extensively labelled — wheel nut, handwheel, yoke bushing, gland flange, packing gland, packing, gland eye bolts, groove pin, bonnet nuts, bonnet, bonnet bushing, disk stem ring, stem, disk washer, bonnet gasket, disk, body seat ring, valve body.
concept-tags: [globe valve, isolation valve, straightway body]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.214, §10.1.2 "Globe Valves", Figure 10.9 "Globe Valve"
delivery: not yet determined
used-by: []
notes: The chapter's most extensively labelled globe-valve figure, opening the three-body-style (angle/Y-pattern/T-pattern) survey that follows.
```

```yaml
id: cvh-cmp-angle-type-globe-valve
teaches: Angle-type globe valve cutaway, labelled — handwheel, stem, packing, union, disk holder, composition disk — the 90-degree body style that saves space/material/installation time versus a straightway body.
concept-tags: [globe valve, angle body, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.214, Figure 10.10 "Angle Type Globe Valve"
delivery: not yet determined
used-by: []
notes: Text notes this body's inner design offers less flow restriction than T-pattern but more than Y-pattern.
```

### 10.1.2 Globe Valve Body Styles Continued (printed pp. 215–216)

```yaml
id: cvh-cmp-y-pattern-globe-valve
teaches: Y-pattern globe valve cutaway, labelled — packing, stem, disk holder, composition disk — the 45-degree-stem-inclination body style suited to boiler blow-offs and viscous/gritty service.
concept-tags: [globe valve, Y-pattern, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.215, Figure 10.11 "Y-Pattern Globe Valve"
delivery: not yet determined
used-by: []
notes: Text explains the 45-degree stem angle gives very little flow restriction while keeping globe-valve throttling characteristics.
```

```yaml
id: cvh-cmp-conventional-disk-globe-valve
teaches: Conventional-disk globe valve cutaway, labelled — gland plate, bonnet, conventional disk, seat ring, body — the short, tapered-disk seat arrangement preferred where deposits/coking on valve seats is a concern.
concept-tags: [globe valve, conventional disk, seat arrangement, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.215, Figure 10.12 "Conventional Disk Globe Valve"
delivery: not yet determined
used-by: []
notes: Directly contrasted with the plug-disk design in the adjacent Figure 10.13.
```

```yaml
id: cvh-cmp-plug-disk-globe-valve
teaches: Plug-disk globe valve cutaway, labelled — gland flange, gland, bonnet, disc, seat ring — the longer, more tapered plug-and-seat arrangement giving maximum resistance to flow-induced erosion.
concept-tags: [globe valve, plug disk, seat arrangement, isolation valve, erosion resistance]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.215, Figure 10.13 "Plug Disk Globe Valve"
delivery: not yet determined
used-by: []
notes: Contrasted with the conventional-disk design in Figure 10.12.
```

```yaml
id: cvh-cmp-t-type-globe-valve
teaches: T-type ("Tee" pattern) globe valve, a compact cutaway view — the most common globe-body configuration, considered "sealing by torque," suited to both low- and high-pressure and both small- and large-bore applications.
concept-tags: [globe valve, T-pattern, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.215, Figure 10.14 "T-Type Globe Valve"
delivery: not yet determined
used-by: []
notes: Low-confidence flag — this cutaway carries no external part-name callouts (unlike Figures 10.9–10.13); the figure and its identity are confirmed, but it teaches body-style silhouette recognition, not internal-part nomenclature.
```

### 10.1.2 Globe Valve Body Styles Concluded (printed p. 216)

```yaml
id: cvh-cmp-y-type-globe-valve
teaches: Y-type ("Wye" pattern) globe valve, an angled-body cutaway — used for high-pressure applications because of its smoother flow path relative to a T-pattern body; also "sealing by torque."
concept-tags: [globe valve, Y-pattern, isolation valve, high pressure]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.216, Figure 10.15 "Y-Type Globe Valve"
delivery: not yet determined
used-by: []
notes: This is a second, distinct Y-pattern figure from Figure 10.11 above — 10.11 is the labelled-callout Y-pattern cutaway under §10.1.2's main body-style survey; this one is the unlabelled angled-body silhouette illustrating the "sealing by torque" prose passage. Not a duplicate — genuinely different figures, same valve family, confirmed by direct page comparison.
```

```yaml
id: cvh-cmp-angle-type-disk-globe-valve
teaches: Angle-type globe valve shown with its disk/seat detail visible in cutaway — a less common isolation-duty configuration more often associated with control functionality; also "sealing by torque."
concept-tags: [globe valve, angle body, disk detail, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.216, Figure 10.16 "Angle Type Disk Globe Valve"
delivery: not yet determined
used-by: []
notes: A second, distinct angle-body figure from Figure 10.10 — this one emphasizes internal disk/seat geometry rather than external labelled parts. Not a duplicate.
```

```yaml
id: cvh-cmp-stop-function
teaches: "Stop function" cutaway detail with a highlighted captive split ring, color-coded — illustrates the stop-only valve configuration where the valvehead and stem are connected and the valve can only be closed by operating the handwheel/actuator.
concept-tags: [globe valve, stop function, captive split ring, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.216, Figure 10.17 "Stop Function"
delivery: not yet determined
used-by: []
notes: Color-coded cutaway (blue/red highlight on the split-ring detail) with an explicit "Captive Split Ring" leader-line callout — paired conceptually with Figure 10.18's Stop-Check Function on the facing page.
```

### 10.1.2 Stop-Check and Guiding (printed p. 217)

```yaml
id: cvh-cmp-stop-check-function
teaches: "Stop-check function" cutaway detail, color-coded — illustrates the configuration where the valvehead and stem are NOT connected, so the valve can be closed by the handwheel/actuator OR by flow reversal (a check-valve function layered onto a globe valve).
concept-tags: [globe valve, stop-check function, isolation valve, check function]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.217, Figure 10.18 "Stop-Check Function"
delivery: not yet determined
used-by: []
notes: Direct pairing/contrast with Figure 10.17's Stop Function — same valve family, same color-coding style, opposite valvehead-to-stem connection behavior.
```

```yaml
id: cvh-cmp-body-guiding
teaches: Body-guided closure-element orientation, a 3D photo-render with leader-line callouts to "Body Guiding" — the closure element's alignment is maintained against the valve body itself, commonly used on larger globe and non-return valves.
concept-tags: [valve guiding, body guiding, isolation valve, closure element]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.217, Figure 10.19 "Body Guiding"
delivery: not yet determined
used-by: []
notes: Photo-realistic 3D render (not a line cutaway), contrasted with the stem/bonnet guiding approach shown in Figure 10.20.
```

```yaml
id: cvh-cmp-stem-bonnet-guiding
teaches: Stem-bonnet-guided closure-element orientation, a 3D photo-render labelled "Guide Bushing" and "Valvehead Connected or Guided on Stem" — the alternative to body guiding, common on smaller-diameter valves, achieved by guiding the stem within the bonnet.
concept-tags: [valve guiding, stem bonnet guiding, isolation valve, guide bushing]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.217, Figure 10.20 "Stem Bonnet Guiding"
delivery: not yet determined
used-by: []
notes: Direct contrast pairing with Figure 10.19 (Body Guiding) — the text presents these as the two fundamental valve-guiding approaches.
```

```yaml
id: cvh-topic-valve-guiding
kind: topic
concept-tags: [valve guiding, body guiding, stem bonnet guiding, closure element alignment]
status: current
teaches: >
  Reliable valve performance depends on keeping the closure element aligned
  in the correct orientation. There are two fundamental approaches. Body
  guiding (valvehead guided on the body itself; commonly used on larger
  globe and non-return valves) — advantage: large contact area gives the
  valvehead stability; disadvantages: may need hard-facing for high-wear
  applications, can be subject to fouling/binding if system conditions
  (e.g. scale) aren't maintained, and generally needs a larger valvehead; on
  a non-return-valve application, if the valvehead seizes to the body, the
  globe-valve function is lost too. Stem-bonnet guiding (the stem is guided
  within the bonnet by an external anti-rotation device; common on smaller
  valves) — advantages: removes the guiding surface from direct contact with
  the system media, can reduce valvehead size/weight, generally needs no
  hard-facing, and on a non-return-valve design lets the valve still work as
  a plain globe valve even if seizure occurs; disadvantage: may need a
  larger stem diameter on big valves.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "p.217, 'Valve Guiding Types' — prose, not figure-anchored"
relatedFigures: [cvh-cmp-body-guiding, cvh-cmp-stem-bonnet-guiding]
relatedTopics: [cvh-topic-valve-function-taxonomy]
used-by: []
notes: >
  This page's two-column layout defeated linear text extraction — the
  Advantages/Disadvantages lists for body guiding vs. stem-bonnet guiding
  interleaved incorrectly in a plain pdftotext read (stem-bonnet's
  advantages appeared to run on directly from body guiding's, with body
  guiding's own disadvantages appearing to vanish). Corrected by rendering
  the actual page image at 200dpi and reading the real two-column layout
  directly — the attribution above matches the visual layout, not the
  garbled linear extraction. Anyone re-deriving this page's content from
  text extraction alone should be aware of this risk.
```

### 10.1.3 Check Valves (printed pp. 218–219)

```yaml
id: cvh-cmp-swing-check-valve
teaches: Swing check valve cutaway, labelled — cap, disk hinge, disk, body seat ring, body, with a normal-flow-direction arrow — the hinged-disk design that swings open with flow and closes on reversal or gravity.
concept-tags: [check valve, swing check, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.218, §10.1.3 "Check Valves", Figure 10.21 "Swing Check Valve"
delivery: not yet determined
used-by: []
notes: The baseline check-valve design the lever-and-weight (Figure 10.22) and tilting-disk (Figure 10.23) variants are built from.
```

```yaml
id: cvh-cmp-lever-weight-swing-check-valve
teaches: Swing check valve fitted with an external lever-and-weight arrangement, labelled — cap, weight, lever, disk hinge, disk, body seat ring, body, normal-flow arrow — provides immediate closure on flow reversal to minimize shock and disk chatter.
concept-tags: [check valve, swing check, lever and weight, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.218, Figure 10.22 "Lever and Weight Swing Check Valve"
delivery: not yet determined
used-by: []
notes: Text frames this and spring-loaded variants as solutions to shock/chatter problems in the plain swing check design (Figure 10.21).
```

```yaml
id: cvh-cmp-tilting-check-valve
teaches: Tilting-disk swing check valve, labelled with a normal-flow arrow and a callout explaining the disk-hinge location provides immediate closure on flow reversal — an alternate anti-slamming check-valve design.
concept-tags: [check valve, tilting disk, isolation valve, anti-slam]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.218, Figure 10.23 "Tilting Check Valve"
delivery: not yet determined
used-by: []
notes: Text explains the flow passes both below and over the disk, providing greater disk stability than a plain swing check, especially above 6 inches and at higher pressure/lower flow.
```

```yaml
id: cvh-cmp-horizontal-lift-check-valve
teaches: Horizontal-lift check valve cutaway, labelled — cap, union cap ring, disk, body seat ring, body, normal-flow arrow — a design used where pressure drop is not critical, with a flow pattern corresponding to a globe valve.
concept-tags: [check valve, lift check, horizontal, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.219, Figure 10.24 "Horizontal-Lift Check Valve"
delivery: not yet determined
used-by: []
notes: Text notes lift check valves are also available in vertical designs (not separately figured here).
```

```yaml
id: cvh-topic-check-valve-selection
kind: topic
concept-tags: [check valve, swing check, tilting disk, lift check, flow resistance, disk stability, valve selection]
status: current
teaches: >
  The three common check-valve designs trade off differently. Swing check:
  when fully open it offers less flow resistance than a lift check, but the
  hinged disk's swinging action means the valve must be installed so the
  disk closes positively by gravity; plain swing checks can suffer shock
  closure and disk chatter, which outside lever-and-weight arrangements or
  spring-loaded disks address by forcing immediate closure on flow reversal.
  Tilting-disk (a swing-check variant addressing the same slamming problem):
  flow passes both below and over the disk, giving greater disk stability
  than a plain swing check — most advantageous above 6 inches and on
  higher-pressure, low-flow-rate applications where disk stability is
  otherwise at risk. Lift check: used where pressure drop isn't critical;
  its flow pattern corresponds to a globe valve's, and it's available in
  horizontal or vertical designs.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "pp.218-219, §10.1.3 'Check Valves' body text — prose, not figure-anchored"
relatedFigures: [cvh-cmp-swing-check-valve, cvh-cmp-lever-weight-swing-check-valve, cvh-cmp-tilting-check-valve, cvh-cmp-horizontal-lift-check-valve]
relatedTopics: [cvh-topic-valve-function-taxonomy]
used-by: []
notes: >
  Real comparative selection guidance (why choose one check-valve design
  over another), distinct from what any single figure's own labelled-parts
  caption shows. Confirmed by direct text read of pp.218-219; this section's
  layout extracted cleanly (single-column), no visual-render cross-check
  needed the way p.217 required.
```

### 10.1.4 Preheater Protection Valves (printed p. 219)

```yaml
id: cvh-cmp-typical-feedheater-system
teaches: Typical feedwater heater (preheater) piping system schematic, with numerous small labelled components — the overall system context for why 3-way inlet/outlet isolation valves exist (protecting the boiler from a tube-fracture overpressure event).
concept-tags: [feedwater heater, preheater, isolation valve, piping schematic]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.219, §10.1.4 "Preheater Protection Valves", Figure 10.25 "Typical Feedheater System"
delivery: not yet determined
used-by: []
notes: Low-confidence flag — the figure's individual component labels are printed too small to transcribe reliably at 150dpi; the figure's identity, subject, and page are fully confirmed. A future pass wanting the exact labels should re-render at higher resolution.
```

```yaml
id: cvh-cmp-normal-bypass-operations
teaches: Emerson-branded piping diagram showing Inlet/Outlet/Bypass valve arrangement and flow paths around a feedwater heater, for both normal operation (inlet-to-heater-to-outlet) and bypass operation (heater isolated).
concept-tags: [feedwater heater, bypass operation, isolation valve, piping diagram]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.219, Figure 10.26 "Normal and Bypass Operations"
delivery: not yet determined
used-by: []
notes: Carries an Emerson logo watermark within the figure itself — an Emerson-authored diagram, not a third-party scan, despite this chapter's overall IPT attribution (see the top-of-file note).
```

### 10.1.5 Reheater Isolation Valves (printed pp. 220–221)

```yaml
id: cvh-cmp-reheater-isolation-valve
teaches: Reheater isolation valve, two-panel diagram — a "blind" plate/eyebolt preloading mechanism (left panel) and a cutaway of the O-ring-sealed pressure-seal access cover (right panel) — the large full-bore valve fitted with a pressure-seal access cover to allow inserting a blind for boiler hydro-testing.
concept-tags: [reheater isolation, blind, pressure seal, hydro-test, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.220, §10.1.5 "Reheater Isolation Valves", Figure 10.27 "Reheater Isolation Valve"
delivery: not yet determined
used-by: []
notes: Two-panel composite under one figure number, matching the "Single-seal preloading screw ... Captive lever ... O-ring seal on face" labels visible in the source render.
```

```yaml
id: cvh-cmp-turbine-extraction-valve
teaches: Turbine extraction valve — an unlabelled cutaway of a swing-check/tilting-disk valve fitted with a side/top-mounted single-acting pneumatic actuator, providing "double protection" (positive closure plus power-assisted closure) to prevent reheat steam returning to the turbine on trip.
concept-tags: [turbine extraction valve, check valve, pneumatic actuator, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.220, §10.1.6 "Turbine Extraction Valves", Figure 10.28 "Turbine Extraction Valve"
delivery: not yet determined
used-by: []
notes: Cutaway carries no external part-name callouts; figure identity and content are fully confirmed by direct page inspection.
```

### 10.1.7–10.1.8 Bypass and Diaphragm Valves (printed p. 221)

```yaml
id: cvh-cmp-bypass-valve
teaches: Bypass valve cutaway, labelled Open/Closed positions, with a caption box explaining a typical bypass valve used in high-pressure/high-temperature service with stems of both valves parallel.
concept-tags: [bypass valve, isolation valve, high pressure]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.221, §10.1.7 "Bypass Valves", Figure 10.29 "Bypass Valve"
delivery: not yet determined
used-by: []
notes: Referenced by the adjacent Figure 10.30 as the typical bypass arrangement whose auxiliary-connection sizing that next figure tabulates.
```

```yaml
id: cvh-cmp-bypass-auxiliary-connections
teaches: Bypass and auxiliary connection reference diagram — globe, gate, angle, and check valve body outlines shown with tapped bypass-connection locations, plus an embedded sizing table (main valve size 2–24 in. vs. bypass connection size 1/2–1 in.).
concept-tags: [bypass valve, auxiliary connection, valve sizing, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.221, Figure 10.30 "Bypass and Auxiliary Connections"
delivery: not yet determined
used-by: []
notes: Contains an embedded data table (Main Valve / Bypass size correspondence) inside the same figure number as the body-outline diagrams — catalogued as one component, matching the standing rule that a source-numbered figure is one record regardless of internal table content.
```

```yaml
id: cvh-cmp-weir-type-diaphragm-valve
teaches: Weir-type diaphragm valve cutaway, labelled — handwheel, stem, bonnet, compressor, diaphragm & backing, weir, valve liner, valve body — the most common diaphragm-valve type, using a raised weir as the closure point for the flexible diaphragm.
concept-tags: [diaphragm valve, weir type, isolation valve, saunders valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.222, §10.1.8 "Diaphragm Valves", Figure 10.31 "Weir-Type Diaphragm Valve"
delivery: not yet determined
used-by: []
notes: Text notes diaphragm valves are sometimes called "Saunders valves"; this design shortens diaphragm movement versus straightway-type (Figure 10.32), extending diaphragm life.
```

### 10.1.8–10.1.10 Diaphragm, Pinch, and Ball Valves (printed p. 222)

```yaml
id: cvh-cmp-straightway-diaphragm-valve
teaches: Straightway-type diaphragm valve cutaway, labelled — handwheel, stem, bonnet, diaphragm, valve liner, valve body — no weir incorporated, giving an uninterrupted passageway suited to viscous or solids-bearing flow.
concept-tags: [diaphragm valve, straightway type, isolation valve, saunders valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.222, Figure 10.32 "Straightway-Type Diaphragm Valve"
delivery: not yet determined
used-by: []
notes: Directly contrasted with the weir-type design (Figure 10.31) — text notes material selection is more limited here due to the longer diaphragm movement required.
```

```yaml
id: cvh-cmp-air-operated-pinch-valve
teaches: Air-operated pinch valve, three-panel diagram — the flexible hollow sleeve and air-tap arrangement (left), plus small end-on views of the sleeve in Valve Open and Valve Pinched Closed states (right) — a flexible-sleeve valve pinched closed by manual or power methods, ideally suited to slurries and solid-powder flows.
concept-tags: [pinch valve, flexible sleeve, isolation valve, slurry service]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.222, §10.1.9 "Pinch Valves", Figure 10.33 "Air-Operated Pinch Valve"
delivery: not yet determined
used-by: []
notes: Three-panel composite (main cutaway plus two small state-comparison end views) under one figure number.
```

### 10.1.10 Ball Valves (printed p. 223)

```yaml
id: cvh-cmp-reduced-port-ball-valve
teaches: Reduced-port ball valve, multi-piece body, extensively labelled — handle assembly, indicator plate, gland nut, gland, gland packing, stem, ball, body connector, seat ring and housing, body connector bolt, body connector seal, valve body.
concept-tags: [ball valve, reduced port, isolation valve, multi-piece body]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.223, §10.1.10 "Ball Valves", Figure 10.34 "Reduced-Port Ball Valve"
delivery: not yet determined
used-by: []
notes: One of the chapter's most fully labelled figures; text notes ball valves are also classified by body style (one-piece vs. multi-piece) separately from port pattern.
```

### 10.1.11 Butterfly Valves (printed pp. 223–224)

```yaml
id: cvh-cmp-wafer-type-butterfly-valve
teaches: Wafer-type butterfly valve, front and top views, labelled — stem shaft, body, disk, resilient seat, mounting holes (used on larger sizes) — mounted between two flanges and held in place by flange bolts alone.
concept-tags: [butterfly valve, wafer type, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.223, §10.1.11 "Butterfly Valves", Figure 10.35 "Wafer-Type Butterfly Valve"
delivery: not yet determined
used-by: []
notes: Two-panel composite (front view + top view showing disk rotation) under one figure number.
```

```yaml
id: cvh-cmp-lug-butterfly-valve
teaches: Lug-type butterfly valve, front and top views, labelled — stem shaft, body, disk, resilient seat, connecting lugs — tapped lugs allow one flange to be removed/disconnected while the valve remains held in place, unlike a plain wafer type.
concept-tags: [butterfly valve, lug type, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.223, Figure 10.36 "Lug-Butterfly Valve"
delivery: not yet determined
used-by: []
notes: Direct contrast with the wafer type (Figure 10.35) — same two-view composite layout, for direct visual comparison.
```

```yaml
id: cvh-cmp-double-flanged-butterfly-valve
teaches: Double-flanged butterfly valve cutaway, labelled — stem shaft, gland nut, gland, gland packing, disk, disk pin, body, flange bolts, connecting flange — two flange ends bolted individually into the pipework, with gaskets between valve and connecting flanges.
concept-tags: [butterfly valve, double flanged, isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.224, Figure 10.37 "Double-Flanged Butterfly Valve"
delivery: not yet determined
used-by: []
notes: The third and most heavily-labelled of the chapter's three butterfly-valve body-style figures.
```

### 10.1.12 Plug Valves (printed p. 224)

```yaml
id: cvh-cmp-lubricated-plug-valve
teaches: Lubricated plug valve cutaway, labelled — lubricant screw, stem, gland, cover plate, gland packing, lubricant grooves, flow way, plug, valve body — the plug-valve variant that lubricates the seating surfaces to eliminate seizing while maintaining a positive seal.
concept-tags: [plug valve, lubricated plug, isolation valve, cock valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.224, §10.1.12 "Plug Valves", Figure 10.38 "Lubricated Plug Valve"
delivery: not yet determined
used-by: []
notes: Text explains lubricated plugs should not be used where flow contamination from lubricant is a concern.
```

```yaml
id: cvh-cmp-multi-port-plug-valve
teaches: Multi-port plug valve flow-path reference, a 7-panel diagram of flow arrows through Three-Way Two-Port, Three-Way Three-Port, and Four-Way Four-Port plug-valve arrangements.
concept-tags: [plug valve, multi-port, isolation valve, flow diverting]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.224, Figure 10.39 "Multi-Port Plug Valve"
delivery: not yet determined
used-by: []
notes: The plug-valve design's quarter-turn, single-body construction lends itself naturally to these multi-port flow-diverting arrangements, per the adjacent text.
```

### 10.2 Dimension Tables (printed pp. 225–238) — captioned as figures, catalogued per the standing rule

```yaml
id: cvh-cmp-cast-iron-gate-valve-dimensions
teaches: ANSI dimension table for cast-iron gate valves (Class 125/250/800), nominal pipe size vs. face-to-face dimensions for solid-wedge and double-disk designs, flat- and raised-face.
concept-tags: [gate valve, cast iron, dimension table, ANSI B16.10]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.225, Figure 10.40 "Cast Iron Gate Valves"
delivery: not yet determined
used-by: []
notes: Pure dimension table, captioned as a Figure in the source (see top-of-file note) — not a diagram or photo.
```

```yaml
id: cvh-cmp-cast-iron-globe-valve-dimensions
teaches: ANSI dimension table for cast-iron globe valves (Class 125/250), nominal pipe size vs. face-to-face (straightway), center-to-face (angle globe), and control-style dimensions.
concept-tags: [globe valve, cast iron, dimension table, ANSI B16.10]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.226, Figure 10.41 "Cast Iron Globe Valves"
delivery: not yet determined
used-by: []
notes: Pure dimension table, captioned as a Figure.
```

```yaml
id: cvh-cmp-steel-gate-valve-class150-dimensions
teaches: ANSI dimension table for steel gate valves, Class 150, nominal pipe size vs. face-to-face dimensions for raised-face and beveled-end, solid-wedge and double-disk designs.
concept-tags: [gate valve, steel, dimension table, ANSI B16.10, Class 150]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.227, Figure 10.42 "Steel Gate Valve (Class 150)"
delivery: not yet determined
used-by: []
notes: First of a six-part steel-gate-valve dimension series (Figures 10.42–10.46) covering Classes 150 through 2500.
```

```yaml
id: cvh-cmp-steel-gate-valve-class300-dimensions
teaches: ANSI dimension table for steel gate valves, Class 300.
concept-tags: [gate valve, steel, dimension table, ANSI B16.10, Class 300]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.228, Figure 10.43 "Steel Gate Valve (Class 300)"
delivery: not yet determined
used-by: []
notes: Same table structure as Figure 10.42, different pressure class.
```

```yaml
id: cvh-cmp-steel-gate-valve-class400-600-dimensions
teaches: ANSI dimension table for steel gate valves, Class 400 and 600.
concept-tags: [gate valve, steel, dimension table, ANSI B16.10, Class 400, Class 600]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.229, Figure 10.44 "Steel Gate Valve (Class 400 and 600)"
delivery: not yet determined
used-by: []
notes: Same table structure as Figure 10.42, covering two pressure classes together.
```

```yaml
id: cvh-cmp-steel-gate-valve-class900-1500-dimensions
teaches: ANSI dimension table for steel gate valves, Class 900 and 1500.
concept-tags: [gate valve, steel, dimension table, ANSI B16.10, Class 900, Class 1500]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.230, Figure 10.45 "Steel Gate Valve (Class 900 and 1500)"
delivery: not yet determined
used-by: []
notes: Same table structure as Figure 10.42, covering two pressure classes together.
```

```yaml
id: cvh-cmp-steel-gate-valve-class2500-dimensions
teaches: ANSI dimension table for steel gate valves, Class 2500 — the highest pressure class in this chapter's gate-valve dimension series.
concept-tags: [gate valve, steel, dimension table, ANSI B16.10, Class 2500]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "p.231, Figure 10.46. \"Steel Gate Valve (Class 2500)\" [sic — source prints a period after the figure number, inconsistent with every other figure in this series]"
delivery: not yet determined
used-by: []
notes: Last of the six-part steel-gate-valve dimension series. Minor source punctuation inconsistency noted, not corrected.
```

```yaml
id: cvh-cmp-steel-globe-check-valve-class150-dimensions
teaches: ANSI dimension table for steel globe and check valves, Class 150 — straightway globe, angle globe, control-style globe, and swing-check dimensions together.
concept-tags: [globe valve, check valve, steel, dimension table, ANSI B16.10, Class 150]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.232, Figure 10.47 "Steel Globe / Check Valve (Class 150)"
delivery: not yet determined
used-by: []
notes: First of a seven-part steel-globe/check-valve dimension series (Figures 10.47–10.53) covering Classes 150 through 2500.
```

```yaml
id: cvh-cmp-steel-globe-check-valve-class300-dimensions
teaches: ANSI dimension table for steel globe and check valves, Class 300.
concept-tags: [globe valve, check valve, steel, dimension table, ANSI B16.10, Class 300]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.233, Figure 10.48 "Steel Globe / Check Valve (Class 300)"
delivery: not yet determined
used-by: []
notes: Same table structure as Figure 10.47, different pressure class.
```

```yaml
id: cvh-cmp-steel-globe-check-valve-class400-600-dimensions
teaches: ANSI dimension table for steel globe and check valves, Class 400 and 600.
concept-tags: [globe valve, check valve, steel, dimension table, ANSI B16.10, Class 400, Class 600]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.234, Figure 10.49 "Steel Globe / Check Valve (Class 400 & 600)"
delivery: not yet determined
used-by: []
notes: Same table structure as Figure 10.47, covering two pressure classes together.
```

```yaml
id: cvh-cmp-steel-globe-check-valve-class600-dimensions
teaches: ANSI dimension table for steel globe and check valves, Class 600 — a distinct table from Figure 10.49's Class 400 & 600 combined table.
concept-tags: [globe valve, check valve, steel, dimension table, ANSI B16.10, Class 600]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.235, Figure 10.50 "Steel Globe / Check Valve (Class 600)"
delivery: not yet determined
used-by: []
notes: Flagged, not an error — Class 600 appears in both this figure and Figure 10.49's combined "400 & 600" table. Both are genuinely present in the source with their own figure numbers; not consolidated or corrected here.
```

```yaml
id: cvh-cmp-steel-globe-check-valve-class900-dimensions
teaches: ANSI dimension table for steel globe and check valves, Class 900.
concept-tags: [globe valve, check valve, steel, dimension table, ANSI B16.10, Class 900]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.236, Figure 10.51 "Steel Globe / Check Valve (Class 900)"
delivery: not yet determined
used-by: []
notes: Same table structure as Figure 10.47, different pressure class.
```

```yaml
id: cvh-cmp-steel-globe-check-valve-class1500-dimensions
teaches: ANSI dimension table for steel globe and check valves, Class 1500.
concept-tags: [globe valve, check valve, steel, dimension table, ANSI B16.10, Class 1500]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.237, Figure 10.52 "Steel Globe / Check Valve (Class 1500)"
delivery: not yet determined
used-by: []
notes: Same table structure as Figure 10.47, different pressure class.
```

```yaml
id: cvh-cmp-steel-globe-check-valve-class2500-dimensions
teaches: ANSI dimension table for steel globe and check valves, Class 2500 — the highest pressure class and last figure in the chapter.
concept-tags: [globe valve, check valve, steel, dimension table, ANSI B16.10, Class 2500]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.238, Figure 10.53 "Steel Globe / Check Valve (Class 2500)"
delivery: not yet determined
used-by: []
notes: Last of the seven-part steel-globe/check-valve dimension series, and the last figure in Chapter 10. Page 239 (chapter end) is blank.
```

## Open items

- **`kind: topic` pass, 2026-09-17** (part of the CVH-wide topic-indexing
  directive, Franz, same date): 4 new topic entries added —
  `cvh-topic-valve-function-taxonomy` (p.211), `cvh-topic-body-bonnet-junction`
  (pp.213-214), `cvh-topic-valve-guiding` (p.217), `cvh-topic-check-valve-selection`
  (pp.218-219). Every remaining section of the chapter (all individual
  valve-type descriptions, the preheater/reheater/turbine-extraction/bypass/
  diaphragm/pinch/ball/butterfly/plug sections, and the Figure 10.40-10.53
  dimension tables) was read and confirmed to be either already fully
  captured by its own figure entry's `teaches:` field, or pure reference
  data with no additional conceptual content beyond what a figure shows —
  no further topics were found or forced. p.217's two-column layout
  defeated linear text extraction (see that topic's own notes) and required
  a visual page render to attribute content correctly — flagging this as a
  real risk for anyone doing text-only passes over this chapter in future.
  Integrity re-checked after this pass: 57 total ids, zero duplicates, zero
  broken relatedFigures/relatedTopics references.

- **Chapter boundary confirmed by direct page reads:** PDF page 210 (divider) through PDF page 239 (blank, chapter-end filler); PDF page 240 is the Chapter 11 divider. No printed/PDF page offset. Every page in this 30-page range was rendered as an image and visually inspected — none read from text extraction alone.
- **Full coverage: 53 figures, Figures 10.1–10.53, no gaps.** 39 are pictorial (labelled cutaways, schematics, or photos of isolation-valve hardware); 14 (Figures 10.40–10.53) are full-page ANSI dimension tables captioned as figures in the source — catalogued per the standing rule that a source-numbered figure is a component regardless of pictorial-vs-tabular content, distinct from a genuine "Table N" reference, of which none exist in this chapter.
- **Third-party attribution — decided (Franz, 2026-09-18):** this chapter's own opening line credits IPT's Pipe Trades Handbook by Robert A. Lee. `status: current` stays applied throughout — the content is published in the current 6th-edition Handbook, which is what the precedence-bucket tracks, and that hasn't changed. The decision: **any future course or document authoring against this chapter's content should carry the IPT/Robert A. Lee credit forward, not cite the Control Valve Handbook alone.** No change to this index's own entries is needed for that — this note exists so the requirement isn't lost by the time someone actually authors against Chapter 10, since nothing about a citation like `cvh-cmp-gate-valve-pressure-seal` on its own would otherwise carry that context forward. This is the only chapter found with this kind of external credit.
- **Two genuine near-duplicates, both confirmed distinct, not merged:** (1) Figure 10.11 (Y-Pattern Globe Valve, labelled) and Figure 10.15 (Y-Type Globe Valve, unlabelled silhouette) are two different figures of the same valve family — confirmed by direct page comparison, catalogued as separate components. (2) Figure 10.10 (Angle Type Globe Valve) and Figure 10.16 (Angle Type Disk Globe Valve) are likewise two different figures of the same body style, emphasizing different details — also confirmed distinct.
- **Class-600 dimension table appears twice, under two different figure numbers** (Figure 10.49 "Class 400 & 600" combined, and Figure 10.50 "Class 600" alone) — both genuinely present in the source with their own figure numbers and captions; flagged in Figure 10.50's own notes, not merged or corrected.
- **Low-confidence flags:** `cvh-cmp-t-type-globe-valve` (Figure 10.14) and `cvh-cmp-turbine-extraction-valve` (Figure 10.28) carry no external part-name callouts in the source — figure identity and page fully confirmed, but no nomenclature to extract beyond body-style recognition. `cvh-cmp-typical-feedheater-system` (Figure 10.25) has labels too small to transcribe reliably at the render resolution used (150dpi) — figure identity and subject are fully confirmed; a future pass needing the exact labels should re-render at higher resolution.
- **Minor source punctuation inconsistency, reproduced not corrected:** Figure 10.46's caption is printed with a trailing period ("Figure 10.46.") unlike every other figure in the series — flagged in that record's own locator, not treated as an error requiring correction.
- **Table exclusion:** no separately-numbered "Table N" items exist in this chapter — every tabular item found is captioned as a "Figure," so nothing was excluded under the tables-are-not-catalogued rule.
- **Cross-reference check, confirmed clean:** `Component Index — 14101 ch1-ch2.md`, `Component Index — 14101 ch3.md`, `Component Index — bench-set-657.md`, and `Component Index — Control Valve Handbook ch4.md` were all checked for isolation-valve-family terms (gate, check, pinch, diaphragm, plug valve) — no overlap found. This chapter's content (generic industrial isolation valves) is a fundamentally different equipment category from the Fisher control-valve hardware those indexes cover.
- **No archive or legacy material** was found or consulted for this chapter.