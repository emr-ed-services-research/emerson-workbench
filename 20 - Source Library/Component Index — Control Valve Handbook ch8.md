---
title: Component Index — Control Valve Handbook ch8
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: ch8 — Installation and Maintenance
updated: 2026-09-17
---

# Component Index — Control Valve Handbook, Chapter 8 (Installation and Maintenance)

Standing full-chapter cataloging pass, part of the "index CVH chapters 5–15"
directive (Franz, 2026-09-17). Every real page in the chapter's confirmed
range was rendered as an image and visually inspected, not read from
extracted text alone.

**Real chapter boundary, confirmed by rendering and reading the actual
pages:** PDF page 175 (Chapter 7's blank trailing page) is followed by PDF
page 176, the real "Chapter 8 / Installation and Maintenance" divider (a
full-page photo, no numbered figure). Real content runs PDF pages 177–191 —
**unlike ch6 and ch7, this chapter has no blank trailing page**; page 191
ends with real content and its own "See Additional Resources »" footer.
PDF page 192 is the real "Chapter 9 / Standards and Approvals" divider,
confirmed by rendering it directly. PDF page number equals printed page
number throughout (zero offset, confirmed against the printed folios visible
on pages 177, 184, and 191).

All figures are from `20 - Source Library/Control Valve Handbook/Control
Valve Handbook - Sixth Edition.pdf`. This pass catalogs existence and
location only. Every record's `used-by` is `[]`.

Record shape matches `Component Index — Control Valve Handbook ch3.md` and
`ch4.md` (post-2026-09-17 correction): `id` (descriptive slug) · `teaches` ·
`concept-tags` · `status` (precedence bucket) · `source` · `delivery` ·
`used-by` · `notes`.

**Cross-reference to 14101 / bench-set-657, checked directly — two real
hits found, both handled per the established convention (a fresh
source-anchored record here, with a note pointing to the existing
competency-anchored citation, since neither figure had a `cvh-cmp-` or
`ch3-cmp-` record representing it before this pass):**

- **Figure 8.2** ("Tighten Bolts in a Criss-Cross Pattern") is cited by
  `Component Index — 14101 ch3.md`'s `ch3-cmp-casing-torque-pattern` record
  (locator: "§8.2 Figure 8.2 — 'Tighten Bolts in a Criss-Cross Pattern'
  (general)") as one of three sources backing the diaphragm-casing torque
  teaching point. That record cites the figure by locator only — it never
  minted its own id for the CVH figure itself. See
  `cvh-cmp-criss-cross-bolt-pattern` below.
- **Figure 8.10** ("Bench Set Seating Force") is cited by both
  `Component Index — 14101 ch3.md`'s `ch3-cmp-bench-set-graph` record (as the
  geometry reference for a bounded house-style SVG redraw — "Fig 8.10 is the
  three-line deadband figure... Geometry reference for the redraw, NOT used
  directly") and `Component Index — bench-set-657.md` (which read CVH's
  glossary and §8.5, p183–187, directly). Neither file minted a `cvh-cmp-`
  id for the figure itself. See `cvh-cmp-bench-set-seating-force-graph`
  below.

No other figure in this chapter is cited by any of the three cross-index
files (checked directly).

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 8's content. |

## Components

### §8.2 Proper Installation Techniques (printed pp. 177–178)

```yaml
id: cvh-cmp-ball-valve-flow-arrow
teaches: >
  A metal-seated ball valve with a printed flow-direction arrow on its body —
  installers must be sure the valve body is installed so fluid flow is in
  the direction indicated by the flow arrow or the instruction manual, since
  most control valves can only be installed correctly in one flow
  orientation.
concept-tags: [installation, flow direction, ball valve, metal-seated, flow arrow]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.2.4 Use Good Piping Practices, Figure 8.1 (printed p. 178) — 'Arrow Depicting the Flow Direction on a Metal-Seated Ball Valve.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A photo of an assembled ball valve with the flow arrow visible on the body casting.
```

```yaml
id: cvh-cmp-criss-cross-bolt-pattern
teaches: >
  A numbered 8-bolt criss-cross tightening sequence for flanged joints —
  finish-tightening flange bolts in a criss-cross pattern (rather than
  sequentially around the circle) avoids uneven gasket loading, helps prevent
  leaks, and avoids damaging or breaking the flange, particularly when
  connecting to flanges of a different material than the valve flanges.
concept-tags: [installation, bolt tightening, criss-cross pattern, flange alignment, gasket loading]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.2 Proper Installation Techniques, Figure 8.2 (printed p. 178) — 'Tighten Bolts in a Criss-Cross Pattern.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  A numbered-circle diagram (8 bolt positions, numbered 1–8 in tightening
  order). **Already cited (by locator, not by a dedicated id) in
  `Component Index — 14101 ch3.md`'s `ch3-cmp-casing-torque-pattern`**
  record, which teaches diaphragm-casing bolt torque for the Fisher 657/667
  actuators and cites this figure as its general (non-actuator-specific)
  corroborating source, alongside the Fisher IM's own Table 2 and Archive
  D750066. This record is the library-wide, source-anchored catalog entry
  for the same source figure — kept as a separate id per this pass's
  source-anchored (not competency-anchored) scope, same convention as ch1's
  cross-referenced Figures 1.3/1.6.
```

### §8.3 Control Valve Maintenance (printed p. 181)

```yaml
id: cvh-cmp-nonintrusive-diagnostics-program
teaches: >
  A screenshot of a non-intrusive, in-service diagnostics program (ValveLink
  signature analyzer) used for predictive maintenance — plots actuator
  pressure (psi) against valve travel (deg) across two scan passes plus a
  "Best Fit" reference, reporting an overall PASS result. In-service
  diagnostics like this can identify valve problems such as excessive
  friction, deadband, and falling out of calibration without removing the
  valve from service.
concept-tags: [predictive maintenance, in-service diagnostics, ValveLink, signature test, non-intrusive]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.3.4 Using Control Valve Diagnostics, Figure 8.3 (printed p. 181) — 'Non-Intrusive Diagnostics Program for Predictive Maintenance.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A software-UI screenshot (asset tree, dataset selector, pressure-vs-travel plot) rather than a hardware photo or line diagram.
```

### §8.3.5 Continued Diagnostics Development (printed p. 182)

```yaml
id: cvh-cmp-spring-diaphragm-actuator-generic
teaches: >
  A typical spring-and-diaphragm actuator assembly, shown generically (not
  specific to direct- or reverse-acting configuration) in the context of
  smart, microprocessor-based valve instrumentation that evaluates operating
  health while the valve remains in service.
concept-tags: [spring-and-diaphragm actuator, smart instrumentation, in-service evaluation]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.3.5 Continued Diagnostics Development, Figure 8.4 (printed p. 182) — 'Typical Spring-and-Diaphragm Actuator.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Distinguish from ch1's `cvh-cmp-direct-acting-actuator` (Figure 1.9) and
  `cvh-cmp-reverse-acting-actuator` (Figure 1.12) — those are fully labelled,
  numbered-callout cutaways teaching specific direct/reverse construction;
  this is an unlabelled, generic assembly photo illustrating the class of
  hardware the diagnostics discussion applies to.
```

### §8.4 Service and Repair Parts (printed pp. 183–185)

```yaml
id: cvh-cmp-control-disk-component
teaches: >
  A control-disk component (a rotary valve closure-member part) shown as an
  example of a replaceable OEM service part — control valve service parts
  such as the controlling element (plug, stem, cage, disk, ball, shaft,
  bearings) or sealing components (seat, seal ring, balance seal, packing)
  wear over time and are typically the parts identified on a Recommended
  Spare Parts List (RSPL).
concept-tags: [service parts, OEM parts, control disk, rotary valve, spare parts list]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.4.2 Recommended Spare Parts, Figure 8.5 (printed p. 183) — 'Control-Disk.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A single-component photo of a cast rotary disk.
```

```yaml
id: cvh-cmp-stud-washer-nut-kit
teaches: >
  A stud, washer, and nut kit — an example of a hard-parts service kit that
  provides the fasteners needed for a specific repair without requiring the
  user to order individual parts.
concept-tags: [service parts, parts kit, stud, washer, nut, hard parts]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.4.2 Recommended Spare Parts, Figure 8.6 (printed p. 184) — 'Stud, Washer, and Nut.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Printed above `cvh-cmp-gasket-kit` (Figure 8.7) as the first of two parts-kit example photos on the page.
```

```yaml
id: cvh-cmp-gasket-kit
teaches: >
  A gasket kit — a set of soft parts (gaskets in various sizes/materials)
  packaged together for a valve assembly, an example of the convenience of
  parts kits: the user can replace selected parts or the whole kit to
  restore a worn assembly to optimal condition without needing to source
  individual gaskets.
concept-tags: [service parts, parts kit, gasket, soft parts]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.4.3 The Convenience of Parts Kits, Figure 8.7 (printed p. 184) — 'Gasket Kit.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A set of four different-sized ring gaskets, photographed together.
```

```yaml
id: cvh-cmp-packing-kit
teaches: >
  A packing kit — springs, rings, and washers packaged together as a
  service kit for replacing valve stem packing, assuring the user that all
  parts needed for the repair will arrive together.
concept-tags: [service parts, parts kit, packing, spring, ring, washer]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.4.3 The Convenience of Parts Kits, Figure 8.8 (printed p. 185) — 'Packing Kit.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Shows a coil spring, two PTFE-colored bushing rings, a metal ring, and a flat washer, photographed as a set.
```

### §8.5 Actuator Maintenance (printed pp. 185–187)

```yaml
id: cvh-cmp-valve-stem-packing-assemblies
teaches: >
  Two complete valve stem packing assemblies shown side by side, one dark
  and one light-colored — packing provides the pressure seal around the stem
  of a globe- or angle-style valve body, or the shaft of a rotary valve, and
  should be replaced if leakage develops around the stem or if the valve is
  fully disassembled for other maintenance.
concept-tags: [actuator maintenance, stem packing, packing assembly, pressure seal]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.5.3 Stem Packing, Figure 8.9 (printed p. 185) — 'Typical Valve Stem Packing Assemblies.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Two complete, pre-assembled packing stacks photographed side by side for comparison.
```

```yaml
id: cvh-cmp-bench-set-seating-force-graph
teaches: >
  Bench set seating force, plotted as Actuator Travel (inverted Y-axis, 0%
  Travel/Upper Stop at top, 100% Rated Valve Travel/lower stop/plug-seated at
  bottom) against Actuator Diaphragm Pressure (psig, X-axis, 0–15): shows the
  Deadband bracket at the top of travel, the Bench Set band (3-11 psig), and
  the Bench Set + Deadband combined range, with a dashed reference line for
  an actuator connected to the valve with deadband present. Bench set is the
  initial compression placed on the actuator spring; for air-to-open valves
  the lower bench set determines the force and pressure required to begin
  valve-opening travel.
concept-tags: [bench set, seating force, deadband, actuator diaphragm pressure, actuator travel]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.5.5 Bench Set, Figure 8.10 (printed p. 186) — 'Bench Set Seating Force.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Analytical graph, falls under Style Guide §5 if ever placed on a slide.
  **Already cited by locator (not by a dedicated id) in two other index
  files**, both confirmed by direct grep: `Component Index — 14101
  ch3.md`'s `ch3-cmp-bench-set-graph` record cites this exact figure as the
  geometry reference for its own bounded house-style SVG redraw ("Fig 8.10's
  printed geometry ('Bench Set (3-11 psig)')... NOT used directly" — the
  redraw exists because the three curves are interleaved and un-croppable,
  per Style Guide §5.8 reason #2), and `Component Index — bench-set-657.md`
  cites the same figure directly from its own read of §8.5, pp183–187. This
  record is the library-wide, source-anchored catalog entry for the same
  source figure — kept as a separate id per this pass's scope, same
  convention as `cvh-cmp-criss-cross-bolt-pattern` above.
```

### §8.6 Shutdown, Turnaround, Outage Planning (printed p. 191)

```yaml
id: cvh-cmp-sto-planning-process-infographic
teaches: >
  A 7-step shutdown/turnaround/outage (STO) planning process infographic,
  shown as a numbered roadmap: (1) Operational Planning, (2) Alignment, (3)
  Work Scope Definition, (4) Detailed Planning, (5) Pre-STO Planning, (6)
  Execution, (7) Post Evaluation — Emerson's proven 7-step process leading to
  consistent STO outcomes, discussed in the chapter's closing section on
  planning and executing plant shutdowns.
concept-tags: [STO planning, shutdown turnaround outage, 7-step process, operational planning, execution]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§8.6 Shutdown, Turnaround, Outage Planning Process, Figure 8.11 (printed p. 191) — 'STO Planning Process.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A numbered infographic/roadmap diagram, the last figure of the chapter, spanning the full page width.
```

## Open items

- **Batch coverage**: all 11 real figures in the chapter (Figures 8.1–8.11) are catalogued, with no gaps in the numeric sequence. Confirmed by rendering and visually inspecting every page in the chapter's real range.
- **No blank trailing page this time** — unlike ch6 and ch7, Chapter 8's real content runs all the way to page 191 with its own "See Additional Resources »" footer; the Chapter 9 divider begins immediately at page 192. Confirmed by rendering both pages directly.
- **Two real cross-references found** to `Component Index — 14101 ch3.md` and `Component Index — bench-set-657.md` — see the file header above and the `notes` fields on `cvh-cmp-criss-cross-bolt-pattern` (Figure 8.2) and `cvh-cmp-bench-set-seating-force-graph` (Figure 8.10). Both cases are figures the competency-anchored indexes already cite by locator but had never given their own library-wide id — this pass fills that gap rather than duplicating or skipping.
- **No duplicate printed figure numbers or source citation errors found** in this chapter — every figure number 8.1–8.11 appears exactly once, with a caption matching its content.
- **Table exclusion**: no numbered tables appear anywhere in this chapter's real page range — confirmed by a full page-by-page visual read.
- **No archive or legacy material** was found or consulted for this chapter — the 6th-edition Control Valve Handbook is the sole and sufficient source for all 11 figures.
- **`status` and `id` conventions**: this file was authored fresh under the corrected conventions — no drift to correct.
