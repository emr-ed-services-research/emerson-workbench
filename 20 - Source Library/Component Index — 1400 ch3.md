---
title: Component Index — 1400 ch3
type: reference
tags:
  - source-library
  - pipeline
  - component-index
course: 1400 Valve Trim and Body Maintenance
chapter: ch3
updated: 2026-09-02
---

# Teaching-Component Index — 1400, Chapter 3

**Chapter 3 — Actuators (Fisher 657 / 667), fail mode, bench set, deadband.**
Modules ch3-m1 … ch3-m6, slides 88–126.

This is the **input-side, structured** counterpart to
`10 - Courses/1400 Valve Trim and Body Maintenance/Presentation/build/assets/sourced/SOURCES.txt`
(which is output-side, per-course, prose). Each record below names a discrete
instructional component — a diagram, a labelled figure, a graph — that ch3's
concepts need, the source it comes from, and its precedence status. Built
2026-09-02 as step 2 of `00 - Project/Source Grounding — Staging Plan.md`; scope
is **ch3 only** (see that doc for why, and for how this graduates into the
permanent pipeline docs).

> [!note] How the pipeline uses this
> - **Stage 2** reads this file and tags each `keyConcept` with
>   `sources: [<component id>, …]`. "No component fits" is recorded as an
>   explicit note, not left silent.
> - **Stage 3** receives, per slide, the components its concepts point at — with
>   locators — and uses them instead of searching source material cold.
>   Generating new art is a **logged fall-back**, reported in the To-Franz list.
> - `used-by` back-references are filled in as Stage 3 consumes each component.

---

## Precedence decisions (Franz, 2026-09-02)

Four buckets: `current` · `archive-corroborated` · `archive-only` · `legacy`.
(`superseded` — excluded from retrieval — is defined but **unused for ch3**: the
full archive review found no conflicts to protect against.)

| Source                                                                  | Doc id / date                             | Bucket                                    | Notes                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Control Valve Handbook, 6th ed.**                                     | D101881X012 · Aug 2023                    | `current`                                 | Source of truth for concepts: deadband (§2.1.1), friction (§2.1.1.4), actuator types (§3.8.1, Fig 3.43), force categories A–D (§5.11.1), bench set (§8.5.5, Fig 8.10).                                                                                           |
| **Fisher 657 Instruction Manual**                                       | D100306X012 · Jun 2018                    | `current`                                 | Source of truth for 657 figures: schematic (Fig 2), mounting components (Fig 3), bench-set adjustment (Fig 4), valve response to deadband (Fig 5), assemblies + parts (Figs 6–10), casing torque (Table 2: 13 → 27 N·m / 10 → 20 lbf·ft).                        |
| **Fisher 667 Instruction Manual**                                       | D100310X012 · May 2018                    | `current`                                 | Same figure numbering as the 657 IM. Adds the seal-bushing / stem-O-ring detail the 657 lacks; has a "Friction Discussion" and "Deadband Measurement" section.                                                                                                   |
| **Archive D750004** — *Pneumatic Spring-and-Diaphragm Actuators*        | Fisher Educational Services · ~1990s scan | `archive-corroborated`                    | Reviewed in full, no conflicts. Purpose-built teaching diagrams (pp 5, 7, 13, 15, 17, 19) that are **clearer for the conceptual slides** than the instruction-manual parts diagrams.                                                                             |
| **Archive D750020** — *Actuator Sizing for Sliding-Stem Control Valves* | Fisher Educational Services · ~1990s scan | `archive-corroborated`                    | Reviewed in full, no conflicts. Carries the A/B/C/D force cutaway (figure W0451-1, p5 — same figure as D750004 p15) and valve-plug-unbalance diagrams (p7). Sizing math is redundant with CVH §5.11.                                                             |
| **Archive D750066** — *Maintaining Spring-and-Diaphragm Actuators*      | Fisher Educational Services · ~1990s scan | `archive-corroborated` (actuator content) | Reviewed in full. Disassembly/inspection procedure is consistent with current practice; explicitly defers to the instruction manual for torque values etc. Its analog-positioner sections are dated but are Day-3 material, out of ch3 scope — not indexed here. |
| **Legacy 1400 PowerPoint deck** — `build/slides/**/img/imageNNN.png`    | —                                         | `legacy`                                  | Fisher-origin art, uncredited, often low-res. Use **only** where no current or archive figure covers the same thing — mostly hands-on procedure photos. Where a current-manual figure covers the same diagram, it wins.                                          |

**Delivery rule for graphs:** the bench-set / deadband graphs are delivered as
**house-style hand-authored SVG**, redrawn to be faithful to **Fisher 657/667 IM
Figure 5** (canonical) with **CVH Fig 8.10** as the backup reference. A redraw is
justified — the Fisher figure is a low-res scan that would clash with the
Workbench design system — but it is a *specified* redraw of a named current
figure, not an invention.

---

## Components

Record shape: `id` · `teaches` · `concept-tags` · `status` · `source`
(`doc` + `locator`) · `delivery` · `used-by` · `notes`.

### ch3-m1 — Actuator Action, Fail Mode & Bench Set (slides 88–93)

```yaml
id: ch3-cmp-da-schematic
teaches: >
  Direct-acting actuator — increasing loading pressure on top of the diaphragm
  pushes the stem down; the spring returns it up. Fails up (retracts) on loss of air.
concept-tags: [actuator action, direct-acting, Fisher 657, spring return, loading pressure]
status: current
source:
  - doc: Control Valve Handbook 6th ed. (D101881X012)
    locator: "§3.8.1, Figure 3.43 (left panel) — 'Diaphragm Actuators'"
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "Figure 2 — 'Schematic of Fisher 657 and 657-4 Actuators'"
  - doc: Archive D750004
    locator: "printed p5 — 'Direct Acting Actuator': schematic + labelled cutaway"
    bucket: archive-corroborated
delivery: existing figure (crop) — prefer CVH Fig 3.43 or 657 IM Fig 2 for the
  in-shell version; D750004 p5 if a fuller teaching cutaway is wanted
used-by: [88, 95]
notes: also underpins slide 94 (657 construction) and the m2 spring-action concept
```

```yaml
id: ch3-cmp-ra-schematic
teaches: >
  Reverse-acting actuator — increasing loading pressure lifts the stem up into the
  actuator; the spring pushes it down. Stem seals (O-rings) required. Fails down.
concept-tags: [actuator action, reverse-acting, Fisher 667, stem seal, O-ring, loading pressure]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§3.8.1, Figure 3.43 (right panel)"
  - doc: Fisher 667 Instruction Manual (D100310X012)
    locator: "Figure 2 — 'Schematic of Fisher 667 and 667-4 Actuators'"
  - doc: Archive D750004
    locator: "printed p7 — 'Reverse Acting Actuator': schematic + labelled cutaway (STEM SEAL called out)"
    bucket: archive-corroborated
delivery: existing figure (crop)
used-by: [88, 110]
notes: the STEM SEAL callout on D750004 p7 directly serves ch3-m4 keyConcept 3
  (the 667's seal bushing with two O-rings)
```

```yaml
id: ch3-cmp-fail-mode-matrix
teaches: >
  Fail mode of the assembly = actuator action combined with body orientation
  (PDTC vs PDTO). The same actuator can fail a valve open or closed depending on
  how the body is built. Four spring-and-body schematics: DA/RA × PDTC/PDTO.
concept-tags: [fail mode, fail-safe action, PDTC, PDTO, push-down-to-close, push-down-to-open, loss of air]
status: archive-corroborated
source:
  - doc: build/assets/sourced/fail-mode-spring-schematics.png
    locator: "already extracted — 1400 deck slide 89 OLE object (image153.png), the four spring-and-body schematics"
    bucket: done
  - doc: Control Valve Handbook 6th ed.
    locator: "§3.8.1 (reversible action / fail-safe); §5.11 force sign conventions"
  - doc: Archive D750004
    locator: "printed p5 & p7 — 'Applications': PDTC/PDTO cutaways captioned with fail modes"
delivery: DONE — sourced asset on slide 89
used-by: [89]
notes: slide 89 also carries the selection matrix as a .tmpl-table
```

```yaml
id: ch3-cmp-pdtc-pdto-bodies
teaches: >
  Push-down-to-close (direct) body: plug sits between actuator and seat, stem
  extension seats the plug, seat ring is the lower travel stop. Push-down-to-open
  (reverse) body: seat ring sits between actuator and plug, stem extension opens
  the valve, seat ring is the upper travel stop.
concept-tags: [PDTC, PDTO, valve body orientation, travel stop, seat ring, plug]
status: legacy   # current slide uses deck art; recommend redraw
source:
  - doc: Legacy deck
    locator: "img/image42.png, img/image43.png (currently on slide 93)"
  - doc: Archive D750004
    locator: "printed p5 & p7 — 'Applications' cutaways (PDTC and PDTO, both actions)"
    bucket: archive-corroborated
delivery: recommend house-style redraw / re-crop from D750004 p5+p7 cutaways —
  the deck images are uncredited and lower quality
used-by: [93]
```

```yaml
id: ch3-cmp-valve-forces-cutaway
teaches: >
  Globe-valve cutaway carrying the four in-service force categories the actuator
  must overcome: static plug unbalance (A), seat load (B), packing friction (C),
  additional forces such as piston-ring friction (D).
concept-tags: [valve forces, static unbalance, seat load, packing friction, piston ring friction, A B C D, F_CVR]
status: archive-corroborated
source:
  - doc: build/assets/sourced/globe-valve-forces-cutaway.png
    locator: "already extracted — Fisher figure W0451-1, from D750020 body p5 (also in D750004 p15)"
    bucket: done
  - doc: Control Valve Handbook 6th ed.
    locator: "§5.11.1.1–5.11.1.4 — Unbalance (A), Seat Load (B), Packing Friction (C), Additional (D); 'Total force = A + B + C + D'"
delivery: DONE — sourced asset on slide 91
used-by: [91]
notes: CVH §5.11 corroborates the A–D breakdown exactly; the labelled cutaway is
  the archive's contribution and reads better for teaching than CVH's text +
  unbalance-area tables
```

```yaml
id: ch3-cmp-bench-set-graph
teaches: >
  Bench set is the diaphragm-pressure range that strokes the actuator through
  RATED travel with the assembly on the bench — no process or valve forces. On a
  travel-vs-pressure plot it is the sloped line between lower and upper bench-set
  pressure. Defined friction-free.
concept-tags: [bench set, rated travel, lower bench set, upper bench set, friction-free, spring rate, on the bench]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§8.5.5 + Figure 8.10 'Bench Set Seating Force' (clean vector; travel-on-Y / pressure-on-X, matching the course's graph convention). PRIMARY — the figure used."
  - doc: Fisher 657 / 667 Instruction Manual
    locator: "Figure 5 — 'Typical Valve Response to Deadband' (drawing A6763-2, 2018; DIRECT / REVERSE ACTING panels). Corroborating reference; axes transposed from the course convention."
delivery: >
  Use the source figure directly where a slide's scope matches it (Style Guide
  §5.8, source-figure-first) — CVH Fig 8.10 with a §5.3 key. Redraw ONLY for a
  stated §5.8 reason. CORRECTED 2026-09-05: the prior "house-style redraw,
  faithful to Fisher IM Fig 5" delivery rested on a wrong "low-res 1990s scan"
  premise (both figures are clean vector) — see Source Grounding Staging Plan §3.
used-by: [92, 97, 102, 112]
variants:
  - tp-010 / slide 102 (ch3-m3, on-valve friction shift): REDRAW, §5.8 reason #2
    (Fig 8.10's third line — the deadband's decreasing-pressure side — is m6
    content, spatially interleaved, can't be cropped or left unkeyed). Two lines
    only: friction-free bench set (3-11 psig, from Fig 8.10's printed label) and
    the on-valve line offset right by the friction contribution — pixel-measured
    on Fig 8.10 at ~65 px against a 281 px blue run for the 8-psig span ≈ 1.85
    psig, ~23 % of the span; drawn as 2 psig. Built 2026-09-05, on its second
    review round (round 1: ② needed a real circle marker; the plot needed a
    steeper slope to make the shift readable; the key went vertical).
  - slides 92 / 97 / 112 (ch3-m1/m2/m4): pending the §5.12 scope decision —
    evaluate CVH Fig 8.10 direct-use + a §5.3 key before assuming a redraw.
    92 is ch3-m1 (done), 97 ch3-m2 (done), 112 ch3-m4 (under the full stop).
```

```yaml
id: ch3-cmp-bench-set-decomposition
teaches: >
  Where each psi of loading pressure goes: first segment opposes initial spring
  compression (F_i), the bench-set segment opposes the spring over travel (F_s),
  the remaining segment satisfies the in-service control-valve force requirements
  (F_CVR = A+B+C+D). Bench set deliberately excludes F_CVR.
concept-tags: [bench set, initial compression, F_i, F_s, F_CVR, loading pressure range, excludes valve forces]
status: archive-corroborated
source:
  - doc: Archive D750004
    locator: "printed p18–19 — 'Bench Set' + 'Bench Set Illustrated' (segmented pressure scale, direct + reverse)"
  - doc: Control Valve Handbook 6th ed.
    locator: "§8.5.5 (bench set = total pressure minus spring compression due to travel)"
delivery: house-style redraw of the segmented pressure scale, or a callout on
  the slide-92 graph
used-by: [92]
notes: directly serves ch3-m1 keyConcept 6 (bench set excludes the A/B/C/D forces)
```

```yaml
id: ch3-cmp-static-actuator-balance
teaches: >
  Static actuator balance: F_D = F_S + F_i + F_CVR. Paired direct / reverse
  schematic showing diaphragm force opposed by spring force, initial compression
  and the valve force requirements (static unbalance, seat load, packing friction).
concept-tags: [actuator force, force balance, F_D, F_S, F_i, F_CVR, spring rate, diaphragm force]
status: archive-corroborated
source:
  - doc: Archive D750004
    locator: "printed p17 — 'Static Actuator Balance' (paired direct/reverse); also p13 'Actuator Forces' schematic"
  - doc: Archive D750020
    locator: "printed p13 — 'Actuator Forces'; p39 'Safety and Operational Checks' annotated cutaway"
  - doc: Control Valve Handbook 6th ed.
    locator: "§5.11.2 Actuator Force Calculations"
delivery: house-style redraw if used on a slide; currently context-only
used-by: []
notes: supports the ch3-m1 forces/bench-set concepts; not yet placed on a slide
```

### ch3-m2 / m3 — Fisher 657: Identify, Bench Set, Mount & Service (slides 94–108)

```yaml
id: ch3-cmp-657-assembly
teaches: >
  657 construction, top to bottom: upper & lower diaphragm casings with the
  diaphragm and diaphragm plate between them, actuator spring below on its spring
  seat, spring adjuster threaded in the yoke.
concept-tags: [Fisher 657, diaphragm casing, diaphragm plate, actuator spring, spring seat, spring adjuster, yoke, construction]
status: current
source:
  - doc: Fisher 657 Instruction Manual (D100306X012)
    locator: "Figure 2 (schematic); Figures 6–10 (full assembly by size, with key numbers); Table 2 (torque)"
  - doc: Archive D750004
    locator: "printed p5 nomenclature cutaway; p13 force schematic"
    bucket: archive-corroborated
delivery: existing figure (crop)
used-by: [94, 95, 105]
```

```yaml
id: ch3-cmp-benchset-adjustment-setup
teaches: >
  Off-the-valve bench-set procedure: apply the lower bench-set pressure and mark
  the stem at first movement, apply the upper bench-set pressure and measure the
  travel between marks — it must equal the nameplate rated travel. Spring adjuster
  sets initial compression.
concept-tags: [bench set procedure, spring verification, lower bench set, upper bench set, mark stem, measure travel, spring adjuster, rated travel]
status: current
source:
  - doc: Fisher 657 / 667 Instruction Manual
    locator: "Figure 4 — 'Bench Set Adjustment' (SPRING ADJUSTER, LOWER/UPPER BENCH SET LOADING PRESSURE, RATED VALVE TRAVEL MEASURE, MARK VALVE STEM HERE)"
  - doc: Archive D750066
    locator: "printed p31 — 'Check Bench Set' (LOW END / HIGH END photos)"
    bucket: archive-corroborated
delivery: existing figure (crop) — 657 IM Fig 4
used-by: [98, 99, 114]
notes: slide 114 (667, screwdriver method) is the same procedure with a marked
  screwdriver/scale instead of a travel indicator
```

```yaml
id: ch3-cmp-nameplate
teaches: >
  Read the nameplate before working: actuator type and size, bench-set range
  (e.g. 3–11 psig), rated travel, maximum valve stem diameter — these define what
  a correct bench set looks like.
concept-tags: [nameplate, actuator size, bench-set range, rated travel, stem diameter]
status: legacy   # current slide uses deck art
source:
  - doc: Legacy deck
    locator: "img/image157.png (currently on slides 96 and 111)"
  - doc: Fisher 657 / 667 Instruction Manual
    locator: "Specifications / nameplate section (the actuator's own nameplate layout)"
delivery: prefer a clean crop of an actual 657/667 nameplate from the IM; the
  deck image is acceptable if legible
used-by: [96, 111]
```

```yaml
id: ch3-cmp-mounting-components
teaches: >
  Actuator-to-valve mounting: yoke seats on the bonnet, yoke locknut run down and
  tightened with a hammer and blunt chisel, stem connector engaging each stem by
  at least one stem diameter of thread.
concept-tags: [mounting, yoke locknut, bonnet, stem connector, hammer and chisel, thread engagement]
status: current
source:
  - doc: Fisher 657 / 667 Instruction Manual
    locator: "Figure 3 — 'Actuator-Mounting Components for Size 30/30i through 70/70i Actuators'"
delivery: existing figure (crop)
used-by: [101, 103, 115, 116, 118]
```

```yaml
id: ch3-cmp-stem-connector
teaches: >
  The two-piece stem connector must engage each stem — actuator and valve — by at
  least one stem diameter of thread; incomplete engagement strips threads or gives
  improper travel. Fine travel adjustment is at the locknut and jam nut.
concept-tags: [stem connector, thread engagement, one stem diameter, travel adjustment, locknut, jam nut]
status: legacy   # current slides use deck photos; Fisher IM Fig 3 covers it
source:
  - doc: Fisher 657 Instruction Manual
    locator: "Figure 3 (stem connector shown); Spring Verification note re: stem connector on size 70/70i and 87"
  - doc: Legacy deck
    locator: "img/image166.png, img/image167.png (slides 103, 118)"
delivery: prefer the 657 IM Fig 3 detail; deck photos acceptable
used-by: [103, 118]
```

```yaml
id: ch3-cmp-casing-torque-pattern
teaches: >
  Diaphragm-casing bolts go on clean and dry (no lubricant). Tighten four bolts
  90° apart, then criss-cross the rest, in two rounds — 13 N·m (10 lbf·ft) then
  27 N·m (20 lbf·ft) — finishing with a circular check pass.
concept-tags: [diaphragm casing torque, criss-cross pattern, clean and dry, 13 N·m, 27 N·m, 10 lbf·ft, 20 lbf·ft, two rounds]
status: current
source:
  - doc: Fisher 657 / 667 Instruction Manual
    locator: "Table 2 — 'Actuator Assembly Recommended Torque Values' (Diaphragm casing, key 23: 27 N·m / 20 lbf·ft)"
  - doc: Control Valve Handbook 6th ed.
    locator: "§8.2 Figure 8.2 — 'Tighten Bolts in a Criss-Cross Pattern' (general)"
  - doc: Archive D750066
    locator: "printed p30 — 'common guideline is 20 foot-pounds… criss-cross fashion' (corroborates)"
delivery: house-style diagram of the star/criss-cross sequence + the torque
  values as a small table (data-ref candidate — reused on slides 107 and 124)
used-by: [107, 124]
notes: the numbers are identical for 657 and 667 — one shared component / data-ref
```

### ch3-m4 / m5 — Fisher 667: Identify, Bench Set, Mount & Service (slides 109–124)

```yaml
id: ch3-cmp-667-assembly-sealbushing
teaches: >
  667 construction, plus the feature the 657 lacks: the actuator stem runs
  through a seal bushing carrying two O-rings in the yoke. Air enters at the yoke
  and follows an internal path to the lower casing; the top casing is vented.
concept-tags: [Fisher 667, reverse-acting, seal bushing, two O-rings, internal air path, vented top casing, snap ring]
status: current
source:
  - doc: Fisher 667 Instruction Manual (D100310X012)
    locator: "Figure 2 (schematic, internal air path); Figures 6–10 (assembly by size, seal bushing key numbers); 'Friction Discussion'"
  - doc: Archive D750004
    locator: "printed p7 — reverse-acting cutaway with STEM SEAL callout"
    bucket: archive-corroborated
delivery: existing figure (crop) — 667 IM Fig 2 + the seal-bushing key-number detail
used-by: [109, 110, 121]
```

```yaml
id: ch3-cmp-diaphragm-changeout
teaches: >
  Diaphragm change-out: the diaphragm is installed between the upper and lower
  diaphragm plates, with the travel-stop spacer between the upper plate and the
  stem cap screw. Relieve all spring compression first.
concept-tags: [diaphragm change-out, diaphragm plate, travel-stop spacer, stem cap screw, relieve spring compression]
status: current
source:
  - doc: Fisher 667 Instruction Manual
    locator: "Maintenance — Actuator section; Figures 6–10 exploded views"
  - doc: Archive D750066
    locator: "printed p27 — disassembly photo sequence (relieve spring compression → casing → diaphragm plate → spring → stem seals)"
    bucket: archive-corroborated
delivery: existing figure (crop) or house-style exploded detail
used-by: [120, 121, 122, 123]
```

### ch3-m6 — Deadband (slides 125–126)

```yaml
id: ch3-cmp-deadband-graph
teaches: >
  Deadband is the change in diaphragm pressure needed to reverse the valve's
  direction of travel. On the travel-vs-pressure graph it is the horizontal gap
  between the opening and closing curves — the actuator needs "bench set plus
  deadband" pressure, not bench set alone, to move. Cause: friction (mainly
  packing). Bench set is friction-free, so deadband is what real in-service
  friction adds on top.
concept-tags: [deadband, bench set plus deadband, opening curve, closing curve, packing friction, lost motion, reversal, hysteresis]
status: current
source:
  - doc: Fisher 657 / 667 Instruction Manual
    locator: "Figure 5 — 'Typical Valve Response to Deadband' — FULL version: bench-set line + OPENING VALVE / CLOSING VALVE curves + 'RANGE OF DEADBAND' bracket + note '1> DEADBAND IS CAUSED BY FRICTION'. Both DIRECT and REVERSE panels."
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.1.1 Deadband + §8.5.5 Figure 8.10 'Bench Set Seating Force' (backup — shows bench set vs bench-set+deadband)"
delivery: house-style hand-authored SVG redraw, faithful to Fisher IM Fig 5 (full)
used-by: [125]
notes: replaces the current deck auto-trace SVG + img/image197.png. This is the
  same base figure as ch3-cmp-bench-set-graph — slide 125 shows the full version,
  slides 92/97/112 show the reduced (friction-free) version.
```

```yaml
id: ch3-cmp-deadband-effect-chart
teaches: >
  Effect of deadband on control: every controller reversal is lost motion,
  producing sluggish response, offset, or limit cycling. A high-gain positioner
  drives the actuator through the deadband and largely removes it.
concept-tags: [deadband effect, process variability, limit cycling, offset, positioner, high gain, step test]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.1.1.2 Effects of Deadband; Figure 2.3 'Effect of Deadband on Valve Performance' (open-loop step test, three valves)"
delivery: context-pane support / optional slide figure — CVH Fig 2.3 crop
used-by: []
notes: ch3-m6 keyConcept 4 (effect on control). Not currently on a slide;
  candidate if slide 125 needs a second panel.
```

---

## Procedure photos (legacy deck — low invention-risk, not individually indexed)

These are hands-on photos with no current-figure equivalent; keep the deck
images unless a photo is illegible. Grouped as `ch3-cmp-procedure-photos`.

| Concept                                                  | Slides           | Deck images                  |
| -------------------------------------------------------- | ---------------- | ---------------------------- |
| Hoisting / lowering the actuator onto the bonnet         | 101, 115         | image162, image179, image181 |
| Running the yoke locknut with hammer + blunt chisel      | 101, 116         | image163, image182           |
| Marking the stem at first movement / rated travel        | 98, 99, 117, 119 | image158–161, image184–185   |
| Screwdriver / scale travel-measure method (667)          | 114              | image176–178                 |
| Spring drop-out from the spring barrel (667)             | 120              | image186–187                 |
| Seal-bushing removal — snap ring, push from bottom (667) | 121              | image188–190                 |
| Disassembly / reassembly sequence (657)                  | 105, 106         | image168–171                 |

---

## Concept → component + level map (ch3) — proposed, for Franz's review

The forward mapping Stage 2 writes into `course.json` as each `keyConcept`'s
`level` (Bloom) and `sources` (component ids). Curated 2026-09-03 from the
component records above and the authored concepts. **Not yet applied to
`course.json`** — apply in one pass, or let a Stage 2 re-fire on ch3 produce it.
`levelTarget` and the chapter `domain: maintenance` are already seeded.

| Module (levelTarget) | Concept (by page) | level | sources |
| --- | --- | --- | --- |
| **m1** (evaluate) | actuator action, direction of drive [88] | understand | `ch3-cmp-da-schematic`, `ch3-cmp-ra-schematic` |
| | fail mode = action × body orientation [88,93] | understand | `ch3-cmp-fail-mode-matrix` |
| | PDTC vs PDTO body, travel stops [93] | understand | `ch3-cmp-pdtc-pdto-bodies` |
| | selecting an action (spring open/close first) [89] | **evaluate** | `ch3-cmp-fail-mode-matrix` |
| | bench set = pressure range to rated travel, on the bench [92] | understand | `ch3-cmp-bench-set-graph` |
| | bench set is friction-free; excludes A/B/C/D [91,92] | understand | `ch3-cmp-valve-forces-cutaway`, `ch3-cmp-bench-set-decomposition` |
| **m2** (apply) | 657 is direct-acting, spring-opposed, fails up [94,95] | understand | `ch3-cmp-da-schematic` |
| | 657 construction top to bottom [94] | remember | `ch3-cmp-657-assembly` |
| | upper casing holds spring force — relieve before opening [95] | apply | `ch3-cmp-657-assembly` |
| | read the nameplate first [96] | remember | `ch3-cmp-nameplate` |
| | bench set = initial spring compression, off the valve [97,98] | understand | `ch3-cmp-bench-set-graph`, `ch3-cmp-benchset-adjustment-setup` |
| | set & verify: mark at low, measure to high = rated travel [98,99] | apply | `ch3-cmp-benchset-adjustment-setup` |
| **m3** (apply) | push plug/stem down before mounting [101] | apply | `ch3-cmp-mounting-components` |
| | hoist on, yoke locknut with hammer + blunt chisel [101] | apply | `ch3-cmp-mounting-components` |
| | stem connector — ≥ 1 stem dia thread engagement [103] | apply | `ch3-cmp-stem-connector` |
| | on-valve travel re-check; friction shifts full travel [102,104] | analyze | `ch3-cmp-bench-set-graph` |
| | disassembly order — relieve spring compression first [105] | apply | `ch3-cmp-657-assembly` |
| | reassembly torque — criss-cross, 13→27 N·m [106,107] | apply | `ch3-cmp-casing-torque-pattern` |
| **m4** (apply) | 667 reverse-acting; internal air path; top casing vented [109,112] | understand | `ch3-cmp-ra-schematic`, `ch3-cmp-667-assembly-sealbushing` |
| | 667 spring pushes stem down → fails down [110] | understand | `ch3-cmp-ra-schematic` |
| | seal bushing, two O-rings; binding → wrong assembly / damage [109] | analyze | `ch3-cmp-667-assembly-sealbushing` |
| | read the nameplate [111] | remember | `ch3-cmp-nameplate` |
| | bench set off the valve; adjust to first movement at nameplate psi [112] | understand | `ch3-cmp-bench-set-graph`, `ch3-cmp-benchset-adjustment-setup` |
| | screwdriver method — mark low/high, distance = travel = rated [114] | apply | `ch3-cmp-benchset-adjustment-setup` |
| **m5** (apply) | mounting: retract stem with air, seat yoke, locknut [115,116] | apply | `ch3-cmp-mounting-components` |
| | set travel on the valve — 667 strokes opposite the 657 [117,118,119] | apply | `ch3-cmp-stem-connector`, `ch3-cmp-benchset-adjustment-setup` |
| | removing the spring — drops out the barrel, becomes a tool [120] | apply | `ch3-cmp-667-assembly-sealbushing` |
| | seal bushing — snap ring, push from bottom, lube O-rings [121] | apply | `ch3-cmp-667-assembly-sealbushing` |
| | diaphragm change-out — between the plates, travel-stop spacer [122] | apply | `ch3-cmp-diaphragm-changeout` |
| | diaphragm-casing torque — criss-cross, 13→27 N·m [123,124] | apply | `ch3-cmp-casing-torque-pattern` |
| **m6** (understand) | deadband = pressure change to reverse travel direction [125] | understand | `ch3-cmp-deadband-graph` |
| | the gap between opening & closing curves; "bench set + deadband" [125] | understand | `ch3-cmp-deadband-graph` |
| | cause is friction — mainly packing; bench set is friction-free [125] | understand | `ch3-cmp-deadband-graph`, `ch3-cmp-valve-forces-cutaway` |
| | effect on control — lost motion; a high-gain positioner removes it [125] | understand | `ch3-cmp-deadband-effect-chart` |

---

## Open items / notes for Stage 2 and Stage 3

- **`used-by` is authoritative once Stage 3 runs.** The values above are the
  *planned* mapping from the slide scan; Stage 3 fills in what it actually used.
- **`data-ref` candidates:** `ch3-cmp-casing-torque-pattern` produces a small
  torque table reused on slides 107 and 124 — give both copies the same
  `data-ref` so `verify.ps1 §6` catches drift.
- **Not yet placed on a slide:** `ch3-cmp-static-actuator-balance`,
  `ch3-cmp-deadband-effect-chart` — available if a slide or the context pane
  needs them.
- **Redraw queue (house-style SVG against a named current figure):**
  `ch3-cmp-bench-set-graph` (92/97/112), `ch3-cmp-deadband-graph` (125),
  `ch3-cmp-pdtc-pdto-bodies` (93), `ch3-cmp-casing-torque-pattern` (107/124).
- **Console-parseable form:** a `.json` mirror of this file is added when Stage 2
  is wired to read it (staging plan step 3); keep the two in sync like
  `System Map.md` / `.html`.
