---
title: Component Index — Power & Severe Service Sourcebook ch11
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch11 — Packing Materials and Systems
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 11

**Chapter 11 — "Packing Materials and Systems."** Standing library-cataloging
pass, part of resuming the whole-document indexing of the Power & Severe
Service Sourcebook (the earlier pass completed chapters 1–7, 9C, 9D, 12–14;
this pass fills the confirmed gaps: 8, 9A, 9B, 10, 11), per `Component Index
— Process & Standards.md`'s "standing full-chapter" trigger. Every real page
in the chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries confirmed directly by rendering: PDF page 187 is the
"Chapter 11 / Packing Materials and Systems" divider, real content runs
through PDF page 196 (printed p. 11-10, Figure 11-5), and PDF page 197 is
immediately the "Chapter 12 / Codes and Standard Overview" divider (already
established in `Component Index — Power & Severe Service Sourcebook
ch12.md`) — zero page offset against the chapter's own printed numbering
(11-1 through 11-10), no trailing blank page.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/
Control Valve Sourcebook - Power & Severe Service.pdf`. No extracted-figures
crop folder exists for this book — each record's `source` carries a single
locator. Every record's `used-by` is `[]`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition
(D101449X012), is itself a **current** first-party Fisher/Emerson document,
so every record below is `status: current`. No archive or legacy material
was consulted.

## Components

### Chapter 11 — Packing Selection Guidelines (printed p. 11-6)

```yaml
id: pss-cmp-packing-500ppm-application-guidelines-chart
kind: figure
teaches: >
  The application guidelines chart for 500 ppmv EPA-leakage environmental
  service, plotting pressure vs. temperature envelopes for every packing
  system in the chapter's Table 11-1: Single PTFE V-Ring, ENVIRO-SEAL PTFE,
  ENVIRO-SEAL Duplex, KALREZ with PTFE (KVSP 400 and KVSP 500/ZYMAXX),
  ENVIRO-SEAL Graphite ULF, and HIGH-SEAL Graphite with PTFE — the visual
  companion Table 11-1 itself points to for choosing a packing system
  against a specific pressure/temperature operating point.
concept-tags: [packing selection, 500 ppmv EPA leakage, ENVIRO-SEAL PTFE, ENVIRO-SEAL Duplex, KALREZ with PTFE, ENVIRO-SEAL Graphite ULF, HIGH-SEAL Graphite with PTFE, pressure temperature envelope]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 11-1 'Application guidelines chart for 500 PPM service,' p. 11-6 — drawing A6158-2/IL"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Directly referenced by Table 11-1's own "see figure 11-1" cells for several packing systems' environmental-service limits.
mediaStatus: unreviewed
```

### Chapter 11 — Non-Environmental Service (printed p. 11-7)

```yaml
id: pss-cmp-packing-nonenvironmental-application-guidelines-chart
kind: figure
teaches: >
  The application guidelines chart for non-environmental service, plotting
  the same packing systems' pressure/temperature envelopes as Figure 11-1
  but extended to their much wider non-environmental limits (e.g. HIGH-SEAL
  Graphite alone rated to 4200 psi and 1200°F/649°C for non-oxidizing
  service) — also distinguishes single vs. double PTFE V-ring capability
  and adds Braided Graphite Filament, which does not appear on the
  environmental-service chart at all.
concept-tags: [packing selection, non-environmental service, HIGH-SEAL Graphite, double PTFE V-ring, Braided Graphite Filament, pressure temperature envelope]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 11-2 'Application guidelines chart for non-environmental service,' p. 11-7 — drawing A6159-2/IL"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Direct extension of Figure 11-1 to non-environmental service limits; both cited together in Table 11-1's own guideline columns.
mediaStatus: unreviewed
```

### Chapter 11 — Packing Set Possibilities, Sliding-Stem Valves (printed pp. 11-8 – 11-9)

```yaml
id: pss-cmp-sliding-stem-packing-examples-ptfe-kalrez
kind: figure
teaches: >
  Five labelled sliding-stem packing-arrangement cutaways compared side by
  side: Single PTFE V-Ring (coil spring, lowest cost/friction); ENVIRO-SEAL
  PTFE (Inconel 718 springs, filled-PTFE anti-extrusion rings, stainless
  packing box ring, designed for high constant stress); Double PTFE V-Ring
  (two packing stacks plus a spacer, for an especially tight seal); KALREZ
  Packing Assembly (stud/hex-nut/spring-pack construction with a lantern
  ring and lower wiper); and ENVIRO-SEAL Duplex Packing (a PTFE-carbon/PTFE
  packing set with carbon bushings) — the chapter's core reference for how
  each named packing system in Table 11-1 is actually built.
concept-tags: [Single PTFE V-Ring, ENVIRO-SEAL PTFE, Double PTFE V-Ring, KALREZ packing assembly, ENVIRO-SEAL Duplex packing, lantern ring, anti-extrusion ring, sliding-stem valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 11-3 'Typical packing examples for sliding-stem valves,' p. 11-8 — drawings A6161/IL, A6163/IL, A6843/IL, A6162/IL, A6844/IL (five panels under one figure caption)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Five fully-labelled cutaway panels under one joint caption — catalogued
  as one record matching the source's own single-figure treatment (the same
  multi-panel-single-caption convention already on record for this book's
  Figure 2-1). Style Guide §6.3 applies (nomenclature source) if ever
  placed on a slide; given its density (five separate labelled assemblies)
  it is also a strong candidate for splitting into per-panel crops if a
  course only needs one specific packing type.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-sliding-stem-packing-examples-graphite
kind: figure
teaches: >
  Four labelled sliding-stem graphite packing-arrangement cutaways compared
  side by side, continuing directly from Figure 11-3: ENVIRO-SEAL Graphite
  ULF (packing rings plus carbon/PTFE bushings and washers); HIGH-SEAL
  Graphite (a load-scale-equipped spring pack over composite/flexible-
  graphite packing rings with carbon guide bushings); HIGH-SEAL Graphite
  with PTFE (the same load-scale construction with added PTFE packing
  washers); and Braided Graphite Filament (die-formed ribbon flexible
  graphite plus braided filament graphite, the simplest and lowest-cost of
  the four).
concept-tags: [ENVIRO-SEAL Graphite ULF, HIGH-SEAL Graphite, HIGH-SEAL Graphite with PTFE, Braided Graphite Filament, load scale, flexible graphite, sliding-stem valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 11-4 'Typical packing examples for sliding-stem valves,' p. 11-9 — drawings E0818, A6167/IL, A6166/IL, A6168/IL (four panels under one figure caption)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Four fully-labelled cutaway panels under one joint caption — catalogued
  as one record, same convention as Figure 11-3. Direct continuation of
  Figure 11-3's packing-example survey (the chapter presents both figures
  as one continuous "here is what each named system in Table 11-1 actually
  looks like" reference, split across two pages purely for layout).
mediaStatus: unreviewed
```

### Chapter 11 — Rotary Valve Considerations (printed p. 11-10)

```yaml
id: pss-cmp-rotary-valve-packing-arrangements
kind: figure
teaches: >
  Two labelled ENVIRO-SEAL packing arrangements built for a rotary valve
  shaft (rather than a sliding stem): Single PTFE Packing (an actuator-
  mounting-yoke/yoke-bearing construction with PTFE V-rings and anti-
  extrusion rings) and Graphite Packing (a comparable rotary-shaft
  construction using a graphite packing set instead) — grounds the
  chapter's earlier text explaining that rotary-shaft sealing is generally
  easier than sliding-stem sealing since rotary motion does not remove
  packing material from the packing box the way axial sliding motion does.
concept-tags: [rotary valve, ENVIRO-SEAL packing, single PTFE packing, graphite packing, valve shaft, actuator mounting yoke]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 11-5 'Typical ENVIRO-SEAL packing arrangements for rotary valves,' p. 11-10 — drawings W5806-1/IL, W6125-1/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two fully-labelled cutaway panels under one joint caption. Last figure in the chapter; the page ends here.
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary**, confirmed directly: Chapter 11 divider = PDF p. 187;
  Chapter 12 divider = PDF p. 197 (already established in `ch12.md`).
  Chapter 11 = PDF pp. 187–196 (printed pp. 11-1 through 11-10), zero page
  offset, no trailing blank page. Every page in range was rendered at
  150dpi and read directly.
- **Full coverage accounting**: Figures 11-1 through 11-5 — five real
  figures, all five accounted for above. No gaps; this is the chapter's
  complete figure set.
- **Low-confidence flags**: none. Every figure's caption, drawing number(s),
  and content were confirmed directly against the rendered page.
- **Duplicate-figure-number / source-citation-error findings**: none found.
- **Table-exclusion confirmation**: Table 11-1 ("Packing Selection
  Guidelines for Sliding-Stem Valves," p. 11-2 / PDF p. 188) is a genuine
  reference table (packing system vs. pressure/temperature limits, seal
  performance index, service life index, packing friction), correctly
  excluded per the tables-vs-figures rule — it is figure-referencing (its
  own cells point to "see figure 11-1" / "see figure 2") rather than
  figure-numbered itself.
- **Cross-reference findings**: no drawing-number or content overlap found
  against the Oil & Gas Sourcebook, the Control Valve Handbook, or any
  other chapter of this book already in this pass's context — packing
  materials/systems content is generic cross-industry engineering reference
  material, distinct from every other chapter's application-specific
  figures. Left for the closing whole-library sweep per standing practice.
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher/Emerson document throughout.
