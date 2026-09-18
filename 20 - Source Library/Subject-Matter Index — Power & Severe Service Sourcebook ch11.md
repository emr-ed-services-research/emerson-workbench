---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch11
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch11 — Packing Materials and Systems
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 11

**Chapter 11 — "Packing Materials and Systems."** Standing library-cataloging
pass, part of resuming the whole-document indexing of the Power & Severe
Service Sourcebook (the earlier pass completed chapters 1–7, 9C, 9D, 12–14;
this pass fills the confirmed gaps: 8, 9A, 9B, 10, 11), per `Subject-Matter Index
— Process & Standards.md`'s "standing full-chapter" trigger. Every real page
in the chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries confirmed directly by rendering: PDF page 187 is the
"Chapter 11 / Packing Materials and Systems" divider, real content runs
through PDF page 196 (printed p. 11-10, Figure 11-5), and PDF page 197 is
immediately the "Chapter 12 / Codes and Standard Overview" divider (already
established in `Subject-Matter Index — Power & Severe Service Sourcebook
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

### Chapter 11 — Introduction and Packing Selection Rationale (printed p. 11-1)

```yaml
id: pss-topic-packing-selection-framework
kind: topic
teaches: >
  Packing selection is now a critical, independent factor in valve
  selection, alongside pressure/temperature class, flow characteristics,
  and material compatibility — driven by the Clean Air Act Amendments,
  EPA regulation, and customer demand for less maintenance/longer service
  life. Historically, packing selection was based on process temperature
  alone (PTFE below 450°F/232°C, graphite above), but friction, hysteresis,
  seal quality, and cycle life are now considered too. Table 11-1's own
  two-category structure follows from this: a 500 ppmv environmental/
  fugitive-emission category and a separate non-environmental category,
  each with its own pressure/temperature guidelines, seal-performance
  index, service-life index, and packing-friction rating per system. The
  guidelines are explicitly guidelines, not hard limits — exceeding them
  risks shortened life or increased leakage, not an immediate failure; the
  temperature ratings apply to the actual packing temperature in the
  packing box, not the process temperature, since packing-box temperature
  depends on several separate factors (addressed further at p.11-5).
concept-tags: [packing selection, EPA 500 ppmv, environmental service, nonenvironmental service, seal performance, service life, packing friction, packing box temperature]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Chapter 11 introduction and closing 'Process Fluid Compatibility and Temperature Ranges' section, pp. 11-1, 11-5 — prose, not figure-anchored"
relatedFigures: [pss-cmp-packing-500ppm-application-guidelines-chart, pss-cmp-packing-nonenvironmental-application-guidelines-chart]
relatedTopics: [cvh-topic-packing-selection-criteria, cvh-topic-packing-friction]
used-by: []
notes: >
  Read directly from PDF pp.187-188 (printed 11-1–11-2) and p.191 (printed
  11-5). This chapter's own version of packing-selection rationale is kept
  as its own record rather than merged into CVH's cvh-topic-packing-
  selection-criteria, per this project's standing rule against merging
  records across distinct source documents — cross-referenced instead.
  This entire page range (11-1 through 11-5) is pure prose with zero
  figures of any kind — completely invisible to the original figures-only
  cataloguing pass, which only covers Figures 11-1 through 11-5 (all on
  pp.11-6–11-10).
```

### Chapter 11 — KALREZ vs. ENVIRO-SEAL PTFE Stress and Cost Tradeoff (printed pp. 11-2 – 11-3)

```yaml
id: pss-topic-kalrez-vs-enviroseal-ptfe-tradeoff
kind: topic
teaches: >
  KALREZ packing arrangements require a controlled LOW stress to seal
  properly (achieved via springs delivering low force) — laboratory testing
  showed that when high stress was applied instead, the V-rings were
  damaged and material extruded from the arrangement. ENVIRO-SEAL PTFE, by
  contrast, is designed to operate at HIGH stress — approximately 10 times
  the KALREZ stress — which lets it tolerate less-than-perfect conditions
  (minor stem-finish or packing-bore imperfections) and continue sealing
  reliably, a real inverse relationship between the two systems' stress
  design and their respective tolerance for imperfect field conditions.
  Total cost (initial plus ongoing maintenance) favors ENVIRO-SEAL PTFE:
  KALREZ packing is markedly higher-priced, and that higher cost repeats
  every time the packing is replaced during maintenance, whereas ENVIRO-SEAL
  PTFE's replacement packing is only slightly higher than a basic single
  PTFE V-ring set.
concept-tags: [KALREZ, ENVIRO-SEAL PTFE, packing stress, V-ring, seal performance, total cost of ownership, stem finish tolerance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§'Packing Set Possibilities,' pp. 11-2–11-3 — prose, not figure-anchored"
relatedFigures: [pss-cmp-sliding-stem-packing-examples-ptfe-kalrez]
relatedTopics: [pss-topic-packing-selection-framework]
used-by: []
notes: Read directly from PDF pp.188-189 (printed 11-2–11-3).
```

### Chapter 11 — Galvanic Corrosion and Long-Term Storage (printed p. 11-3)

```yaml
id: pss-topic-galvanic-corrosion-and-storage
kind: topic
teaches: >
  Graphite packing systems carry a galvanic-corrosion risk to the valve
  stem under humid conditions, in the presence of chlorides, with air or
  oxygen present — a risk that is near-impossible to predict given the
  number of variables involved. Fisher mitigates this with a nonmetallic,
  inorganic passivating inhibitor in its base flexible-graphite material
  plus sacrificial zinc washers on all graphite packing systems except
  nuclear applications, but even these measures don't eliminate the risk
  entirely. The best policy for long-term valve storage would be removing
  the packing, but that creates a real safety issue — someone could use
  the valve without realizing no packing was installed — which is exactly
  why every Fisher valve is instead shipped with packing already installed,
  a deliberate tradeoff favoring the safety risk over the corrosion risk.
concept-tags: [galvanic corrosion, graphite packing, sacrificial zinc washer, passivating inhibitor, valve storage, safety tradeoff]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§'Flexible Graphite Packing Material,' p. 11-3 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-packing-selection-framework]
used-by: []
notes: Read directly from PDF p.189 (printed 11-3). No figure anywhere covers this content.
```

### Chapter 11 — ENVIRO-SEAL vs. HIGH-SEAL for Extreme Non-Environmental Service (printed pp. 11-3 – 11-4)

```yaml
id: pss-topic-enviroseal-vs-highseal-extreme-service
kind: topic
teaches: >
  For non-environmental extreme-service applications, ENVIRO-SEAL and
  HIGH-SEAL packing systems provide a significant step-change in performance
  over traditional single PTFE V-ring or braided graphite filament
  arrangements. The source's own worked example: an ANSI Class 1500 (Design
  HP valve) application at 2000 psi and 200°F (137 bar/93°C) frequently
  required packing maintenance with older arrangements; replacing it with
  HIGH-SEAL packing (with PTFE washers) significantly reduced maintenance —
  HIGH-SEAL Graphite with PTFE is rated to 4200 psi and 700°F (290 bar/
  371°C) for non-environmental service, and the compact Belleville-spring
  ENVIRO-SEAL arrangement is rated to 3000 psi and 700°F (207 bar/371°C) —
  both matching Table 11-1's own published limits exactly.
concept-tags: [HIGH-SEAL, ENVIRO-SEAL, extreme service, ANSI Class 1500, non-environmental service, packing maintenance reduction]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§'Non-Environmental Services,' pp. 11-3–11-4 — prose, not figure-anchored"
relatedFigures: [pss-cmp-packing-nonenvironmental-application-guidelines-chart]
relatedTopics: [pss-topic-packing-selection-framework]
used-by: []
notes: >
  Read directly from PDF pp.189-190 (printed 11-3–11-4). **Two real OCR/
  extraction errors caught and corrected, not transcribed as-is**: the raw
  extracted text reads "This system is rated to 420 psi and 700°F (290 bar
  and 371°C)" for HIGH-SEAL — 420 psi does not convert to 290 bar (290 bar
  ≈ 4206 psi), and Table 11-1's own published HIGH-SEAL Graphite with PTFE
  non-environmental limit is explicitly "4200 psi(4) / 290 bar(4)" — so the
  real value is 4200 psi, "420" is a dropped digit. Likewise the raw text
  gives ENVIRO-SEAL's rating as "3000 psi ... (20.7 bar ...)" — 20.7 bar
  ≈ 300 psi, not 3000; Table 11-1's own ENVIRO-SEAL Graphite ULF
  non-environmental limit is "3000 psi / 207 bar," so the real bar value is
  207, not 20.7. Both corrected above by cross-checking against Table
  11-1's own published, internally consistent figures rather than the
  running-text extraction.
```

### Chapter 11 — Packing Arrangement Configurations (printed pp. 11-4 – 11-5)

```yaml
id: pss-topic-packing-arrangement-configurations
kind: topic
teaches: >
  Beyond packing MATERIAL choice, there is a separate axis of packing
  ARRANGEMENT configuration, independent of which material is used: Single
  Packing Arrangements (the durable, economical default for most
  applications); Double Packing Arrangements (two packing stacks plus a
  spacer, used where an especially tight seal is required, with more
  packing on the actuator side when a lubricating connection is used);
  Leak-Off Packing Arrangements (for rotary valves that must detect and
  channel away any leakage from the inner packing set before it can reach
  atmosphere through the outer set — standard arrangements like double
  PTFE V-ring are not specifically designed for this and lack the right
  packing ratio on either side of the lubricator, even though they
  physically resemble a leak-off setup); and Purged Packing Arrangements
  (a lantern gland plus tapped pipe connection inboard of the packing,
  for rotary valves handling fluids with entrained solids or fluids that
  condense/solidify with temperature loss, to permit purging accumulated
  deposits around the shaft and bushing).
concept-tags: [packing arrangement, single packing, double packing, leak-off packing, purged packing, rotary valve, lantern gland]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§'Rotary Valve Considerations' — Single/Double/Leak-Off/Purged Packing Arrangements, pp. 11-4–11-5 — prose, not figure-anchored"
relatedFigures: [pss-cmp-rotary-valve-packing-arrangements]
relatedTopics: [pss-topic-packing-selection-framework]
used-by: []
notes: >
  Read directly from PDF pp.190-191 (printed 11-4–11-5). This is distinct
  from pss-cmp-rotary-valve-packing-arrangements' own teaches field, which
  already covers "rotary sealing is generally easier than sliding-stem
  sealing" — that specific point is NOT repeated here to avoid duplication;
  this entry covers only the four arrangement-configuration types, which
  no existing figure entry mentions at all.
```

### Chapter 11 — Oxygen Service Precautions (printed p. 11-5)

```yaml
id: pss-topic-oxygen-service-packing-precautions
kind: topic
teaches: >
  Liquid or gaseous oxygen service requires special precaution because
  oxygen supports the combustion of most lubricants or foreign material —
  oxygen service must be explicitly specified when ordering packing or
  other equipment for this service, so the packing is appropriately
  degreased before shipment. A brief but safety-critical fact with no
  supporting figure anywhere in the chapter.
concept-tags: [oxygen service, degreasing, combustion hazard, safety precaution]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§'Oxygen Service,' p. 11-5 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-packing-selection-framework]
used-by: []
notes: Read directly from PDF p.191 (printed 11-5). No figure covers this.
```

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

- **`kind: topic` pass, added 2026-09-17**: six new topic entries authored
  from the chapter's real body prose (pp. 11-1 through 11-5) — every page
  of that range is pure prose with zero figures at all, entirely invisible
  to the original figures-only cataloguing pass above. Real concepts
  found: the packing-selection framework/rationale (EPA drivers,
  guidelines-not-limits, packing-box-vs-process temperature), the KALREZ
  vs. ENVIRO-SEAL PTFE stress/cost tradeoff, galvanic corrosion and
  storage practice, the ENVIRO-SEAL vs. HIGH-SEAL extreme-service worked
  example (two OCR extraction errors caught and corrected against Table
  11-1's own published values — see that entry's own notes), packing
  arrangement configurations (single/double/leak-off/purged, distinct
  from material choice), and oxygen-service precautions. Chapter's real
  component count is now 11 (5 figures + 6 topics), not 5.
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
