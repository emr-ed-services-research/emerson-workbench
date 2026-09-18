---
title: Component Index — Power & Severe Service Sourcebook ch6
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch6 — Control Valve Cavitation and Flashing
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 6

**Chapter 6 — "Control Valve Cavitation and Flashing."** Standing library-cataloging
pass, part of the whole-document indexing of the Power & Severe Service
Sourcebook, ahead of Control Valve Engineering 1/2 course content-build —
per `Source Library.md`'s "standing full-chapter" trigger. Matches the rigor
of `Component Index — Oil & Gas Sourcebook ch1.md` and
`Component Index — Control Valve Handbook ch1.md`: every real page in the
chapter's confirmed range was rendered at 150dpi and read directly, every
real figure identified and visually verified against the rendered page.

Chapter boundaries were verified directly against the PDF, not assumed from
a candidate range: PDF p.57 is the "Chapter 6 / Control Valve Cavitation and
Flashing" divider page, real content runs PDF pp.57–67 (printed pp. 6-1
through 6-11), and PDF p.68 (printed "6-12") is a blank trailing page before
the "Chapter 7 / Steam Conditioning" divider at PDF p.69 — confirmed by
rendering both p.67 and p.68 directly, the same "trailing blank page" shape
documented for Control Valve Handbook ch6/ch7.

This pass catalogs existence and location only — it does not crop or extract
images, so each record's `source` carries a single locator (figure number,
page, verified caption), not a second "already extracted" entry, matching
the Control Valve Handbook record shape (this book has no
`extracted-figures` crop folder the way the Oil & Gas Sourcebook does).
Every record's `used-by` is `[]` — none are placed on a slide yet.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service is itself a
**current** first-party Fisher/Emerson document (© 2001, 2003, 2004 Fisher
Controls International LLC, Fourth Edition, D101449X012), so every record
below is `status: current`. No archive or legacy material was consulted for
this chapter.

## Components

### Chapter 6 — Cavitation and Flashing Fundamentals (printed pp. 6-1–6-3)

```yaml
id: pss-cmp-restriction-pressure-profile
teaches: >
  The pressure profile of liquid flow through a simple restriction: pressure
  falls to a minimum at the vena contracta then recovers downstream, with
  the degree of recovery (high recovery vs. low recovery) determining
  whether the downstream pressure ends up above or below the liquid's vapor
  pressure — the foundational picture for everything the chapter builds on.
concept-tags: [cavitation, flashing, pressure profile, vena contracta, pressure recovery, high recovery valve, low recovery valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-1 'Pressure profile of flow through a restriction,' p. 6-2 — drawing A3444/IL"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Two stacked panels: a flow-through-restriction schematic (top) and its
  pressure-vs-distance curve (bottom), the latter showing both a
  high-recovery and a low-recovery downstream pressure trace.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-pressure-velocity-vena-contracta-curves
teaches: >
  Pressure and velocity plotted together against distance downstream of a
  restriction: both curves peak/trough at the same vena contracta point,
  where flow area is minimum, velocity is maximum, and pressure is at its
  lowest (P_vc) before recovering.
concept-tags: [vena contracta, pressure curve, velocity curve, flow restriction, P1, P2, Pvc]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-2 'Pressure versus velocity curves illustrate that the highest flow rate occurs at the vena contracta,' p. 6-2 — drawing E0109"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Two stacked panels sharing one distance-downstream x-axis — pressure on
  top, velocity on bottom — both referencing the same vena contracta line.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-cavitation-vs-flashing-pressure-recovery
teaches: >
  The graphical distinction between cavitation and flashing: both liquids
  fall below vapor pressure (Pv) at the vena contracta, but a cavitating
  liquid's downstream pressure (P2) recovers back above Pv (bubbles
  collapse/implode — cavitation), while a flashing liquid's P2 stays below
  Pv (bubbles persist as vapor — flashing). This is the chapter's key
  differentiator between the two phenomena.
concept-tags: [cavitation, flashing, vapor pressure, pressure recovery, P2, distinguishing cavitation from flashing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-3 'Pressure recovery above the vapor pressure of the liquid results in cavitation. Remaining below the vapor pressure incurs flashing,' p. 6-3 — drawing A3445"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Single-panel pressure-vs-distance curve with two labelled traces
  (cavitating vs. flashing) diverging after the vena contracta.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-choked-flow-deltap-allowable-graph
teaches: >
  The ΔP-allowable relationship that predicts fully choked flow: flow rate Q
  plotted against the square root of pressure drop, showing actual flow
  departing from the Cv-predicted straight line and flattening at "choked
  flow" once vapor formation limits further flow increase, regardless of
  additional pressure drop.
concept-tags: [choked flow, ΔP allowable, flow coefficient Cv, liquid choking, equation 6-2]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-4 'The ΔPallowable equation will predict the occurrence of fully choked flow,' p. 6-3 — drawing E0110"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Q (GPM) vs. sqrt(ΔP) plot with the predicted-flow line, actual-flow curve,
  and the choked-flow region bracketed on the right; pairs with equation 6-2
  (Q = Cv·sqrt((P1-P2)/G)) printed on the facing page.
mediaStatus: unreviewed
```

---

### Chapter 6 — Material Damage (printed pp. 6-4–6-5)

```yaml
id: pss-cmp-cavitation-vs-flashing-damage-photos
teaches: >
  The visual difference between cavitation damage and flashing damage on a
  real metal part: cavitation damage (top photo) has an irregular,
  "cinderlike" rough surface texture, while flashing/erosion damage (bottom
  photo) is smooth and polished — a diagnostic visual reference for
  identifying which phenomenon caused a failed part in the field.
concept-tags: [cavitation damage, flashing damage, erosion, material damage diagnosis, cinderlike texture]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-6 'The top plug shows the characteristic rough texture of cavitation damage, which differs greatly from the polished appearance of damage due to flashing (lower photo). The two damage mechanisms vary greatly,' p. 6-4 — drawings W2843 (top), W2842 (bottom)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two stacked real-part photos (a valve plug, top; a different plug/stem
  part, bottom), not a drawing — good before/after diagnostic reference
  pairing with `pss-cmp-bubble-collapse-jet-mechanics` on the facing page.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-bubble-collapse-jet-mechanics
teaches: >
  The mechanics of vapor-cavity implosion that cause cavitation damage: a
  4-panel sequence (initial spherical bubble → perturbation of the side away
  from the surface → upper fluid penetrating the flattened side → formation
  of a high-velocity jet) showing how bubble collapse near a metal surface
  produces the damaging liquid microjet.
concept-tags: [cavitation damage mechanism, bubble collapse, microjet erosion, implosion mechanics]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-7 'The implosion of cavitation vapor cavities is rapid, asymmetric and very energetic. The mechanics of collapse give rise to high velocity liquid jets, which impinge on metallic surfaces. Ultimately, the metal fatigues and breaks away in small pieces,' p. 6-5 — drawing E0111"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A 4-panel sequence diagram with its own printed stage labels (INITIAL
  SPHERICAL BUBBLE, PERTURBATION OF SIDE AWAY FROM SURFACE, UPPER FLUID
  PENETRATING FLATTENED SIDE, FORMATION OF JET) — Style Guide §6.3 applies
  if ever placed on a slide.
mediaStatus: unreviewed
```

---

### Chapter 6 — Hardware and System Choices for Flashing Applications (printed pp. 6-6–6-8)

```yaml
id: pss-cmp-eas-valve-outlet-liner-cutaway
teaches: >
  A Design EAS angle valve with a downstream outlet liner, used for flashing
  service: the liner absorbs erosion/damage from flashing and can be
  replaced far more economically than the valve body itself. Labelled parts:
  restricted-trim adaptor, liner.
concept-tags: [Design EAS, angle valve, flashing service, outlet liner, restricted-trim adaptor, replaceable liner]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-8 'Design EAS valve with outlet liner is used for flashing service. The liner resists erosion and protects the body,' p. 6-6 — drawing W0970"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Shaded cutaway with its own printed field callouts (RESTRICTED-TRIM
  ADAPTOR, LINER) — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-v500-rotary-plug-flashing-cutaway
teaches: >
  A Design V500 rotary plug valve (reverse flow trim direction, trim level
  3) shown in the plug-facing-downstream orientation used for flashing
  service — an alternative to the angle-body/liner approach, offering
  excellent erosion resistance for medium-to-low-pressure flashing
  applications.
concept-tags: [Design V500, eccentric plug valve, rotary valve, flashing service, reverse flow trim direction, erosion resistance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-9 'Rotary plug valves, such as the Design V500 (reverse flow trim direction, trim level 3) have excellent erosion resistance and perform well in flashing service,' p. 6-7 — drawing W8359"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A rendered/photo-realistic 3D cutaway (not line-art), unlabelled — pairs
  as the "angle body vs. rotary plug" alternative to
  `pss-cmp-eas-valve-outlet-liner-cutaway` for flashing service.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-high-temperature-alloy-selection
kind: topic
teaches: >
  Materials of Construction content for flashing/cavitating service in this
  chapter is near-identical Fisher boilerplate to the Oil & Gas Sourcebook's
  own Chapter 6 (Alloy 6 vs. stainless-steel hardness comparison,
  chromium-molybdenum correlation, ASME SA217 grade C5 → WC9 transition — see
  `ogas-topic-cavitation-flashing-materials-selection`, already indexed,
  word-for-word identical on those points) — NOT re-indexed here to avoid a
  duplicate record. This entry captures the one genuinely distinct addition
  specific to this Power & Severe Service book: ASTM A217 grade C12A, a
  chromium-molybdenum alloy increasingly common in the power industry
  specifically for service exceeding 1000°F (538°C), whose higher chromium
  and molybdenum content (9% Cr, 1% Mo) indicates excellent cavitation
  resistance for that high-temperature power-plant application — content
  the Oil & Gas Sourcebook's own materials section does not include, plausibly
  because power-industry high-temperature service isn't that book's subject
  matter.
concept-tags: [ASTM A217, grade C12A, high temperature service, chromium molybdenum alloy, power industry, cavitation resistance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "\"Materials of Construction\" running text, printed p. 6-7 — no figure, prose only"
relatedTopics: [ogas-topic-cavitation-flashing-materials-selection]
used-by: []
notes: >
  Verified this is a genuine addition, not assumed: read both this chapter's
  full running text and Oil & Gas Sourcebook ch6's own materials-selection
  topic entry directly before concluding the rest of the section is
  duplicate boilerplate — every other sentence in this chapter's Materials
  of Construction section (Alloy 6 properties, hardness-doesn't-correlate-
  across-families point, SA217 C5/WC9 chromium-vs-molybdenum tradeoff) is
  word-for-word identical to the Oil & Gas entry, including the same real
  percentages (2-1/4% vs. 5% chromium, 1% vs. 1/2% molybdenum). Only the
  C12A paragraph is new. `pss-cmp-*` figure ids in this chapter use distinct
  drawing numbers from Oil & Gas's own ch6 figures (confirmed no collision).
```

```yaml
id: pss-cmp-valve-location-flashing-system-design
teaches: >
  System-design placement of a control valve to control where flashing
  damage occurs: mounting the valve close to the condenser (1 foot of pipe)
  moves the flashing point into the condenser's large-volume tank instead of
  a length of downstream piping (25 feet), where there is no material
  surface for high-velocity fluid to impinge on — preventing flashing damage
  through system design rather than valve hardware.
concept-tags: [system design, valve location, flashing prevention, condenser, heater drain valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-10 'Location of a control valve can often be changed to lengthen its life or allow use of less expensive products. Mounting a heater drain valve near the condenser is a good example,' p. 6-8 — drawing E0864"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Two side-by-side schematic diagrams (valve 25 feet from condenser vs. 1
  foot from condenser), not a valve cutaway — a system/piping diagram.
mediaStatus: unreviewed
```

---

### Chapter 6 — Hardware Choices for Cavitating Applications (printed pp. 6-8–6-10)

```yaml
id: pss-cmp-cavitrol-iv-pressure-staging-curve
teaches: >
  Pressure-drop staging in Cavitrol IV trim: pressure falls in unequal
  stepped stages through six travel positions, keeping the inlet pressure to
  the final stage — and therefore the vena contracta pressure — above the
  liquid's vapor pressure even though the full pressure drop is taken across
  the trim overall.
concept-tags: [Cavitrol IV, pressure drop staging, cavitation control, trim design, multi-stage trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-11 'In Cavitrol trim, the pressure drop is staged in two or more unequal steps. Staging is accomplished by increasing the flow area from stage to stage. This stepped reduction allows full pressure drop without the vena contracta pressure falling below the vapor pressure of the liquid,' p. 6-9 — drawing A2149-1"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Pressure-vs-fluid-travel-through-stages curve (6 stages plotted), not a
  cutaway — pairs conceptually with `pss-cmp-cavitrol-iv-trim-cutaway`
  (Figure 6-13), the physical trim this curve describes.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-drilled-hole-geometry-comparison
teaches: >
  How drilled-hole cage geometry trades off flow capacity against pressure
  recovery: thin plate (low Cv, high FL²), thick plate (high Cv, low FL²),
  and the Cavitrol hole design (high Cv AND high FL²) — the Cavitrol hole
  combines the efficiency of a thick plate with the low-recovery advantage
  of a thin plate by shaping the passage exit.
concept-tags: [drilled hole design, Cavitrol trim, flow coefficient Cv, FL squared, pressure recovery, thin plate, thick plate]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-12 'By combining the geometric effects of thick plates and thin plates, it is possible to design a flow passage that optimizes capacity and recovery coefficient values. These carefully designed passages are used exclusively in Cavitrol cages,' p. 6-9 — drawing E0113-1/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Six stacked hole-passage cross-section silhouettes grouped into three
  labelled columns (THIN PLATE / THICK PLATE / CAVITROL HOLE), each with its
  own printed Cv/FL² rating — Style Guide §6.3 applies if ever placed on a
  slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-cavitrol-iv-trim-cutaway
teaches: >
  The Design Cavitrol IV trim, a complete valve cutaway: provides cavitation
  protection at pressures to 6500 psi using expanding flow areas across a
  four-stage pressure drop, with all significant pressure drop taken
  downstream of the shutoff seating surface — separating the seating
  location from the throttling location for better shutoff capability.
concept-tags: [Cavitrol IV, cavitation control trim, expanding flow area, four-stage pressure drop, separate seating and throttling, class VI shutoff]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 6-13 'Cavitrol IV trim provides cavitation protection at pressures to 6500 psi. It uses expanding flow areas to affect a four-stage pressure drop. All significant pressure drop is taken downstream of the shutoff seating surface,' p. 6-10 — drawing W3668-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full valve-body cutaway with visible internal staged-cage construction —
  unlabelled (no printed field callouts) — the physical trim referenced by
  `pss-cmp-cavitrol-iv-pressure-staging-curve` (Figure 6-11).
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary**: confirmed directly by rendering PDF p.57 (Chapter 6
  divider), p.67 (last real content page, "Cavitation Control Summary"),
  p.68 (blank, printed "6-12"), and p.69 (Chapter 7 divider). Chapter 6 =
  PDF pp.57–67 (printed pp. 6-1–6-11); p.68 is a trailing blank page, not
  additional content.
- **Full coverage accounting**: every page in the confirmed range was
  rendered and read. All 12 real figures accounted for: Figures 6-1, 6-2,
  6-3, 6-4, 6-6, 6-7, 6-8, 6-9, 6-10, 6-11, 6-12, 6-13.
- **Numbering gap, confirmed genuine**: **there is no Figure 6-5.** Verified
  by reading every page between Figure 6-4 (p. 6-3) and Figure 6-6 (p. 6-4)
  directly — the source's own printed figure numbering skips from 6-4 to
  6-6 with no missing content in between (the "Material Damage" section
  heading and its lead paragraph sit exactly where a Figure 6-5 would have
  been, with no figure present). Not a rendering gap on our part.
- **Low-confidence flags**: none. Every figure's caption and content were
  confirmed directly against the rendered page at 150dpi.
- **Duplicate-figure-number / source-citation-error findings**: none found
  in this chapter.
- **Table-exclusion confirmation**: no "Table 6-N" references were found
  anywhere in this chapter (confirmed via both a `pdftotext` sweep and the
  page-by-page render) — Chapter 6 genuinely has no numbered tables to
  exclude.
- **Cross-reference findings**: not run centrally as part of this
  chapter-level pass (see the coordinating pass's whole-library collision
  sweep) — no obvious shared drawing numbers with the Oil & Gas Sourcebook's
  own noise/cavitation figures were spotted by inspection (this book's
  drawing numbers for ch6 are distinct: A3444/IL, E0109, A3445, E0110,
  W2843, W2842, E0111, W0970, W8359, E0864, A2149-1, E0113-1/IL, W3668-1).
- **Archive/legacy material**: none consulted, none needed — this is a
  first-party current Fisher/Emerson document throughout.
- **`kind: topic` conceptual-indexing pass (2026-09-17), real comparison
  finding, not padded content.** Read the chapter's full real body prose
  directly (PDF pp.57-67) against Oil & Gas Sourcebook's already-indexed
  `ogas-topic-*` entries for its own Chapter 6 (same title, same subject).
  Confirmed this chapter's running prose is word-for-word identical Fisher
  boilerplate to Oil & Gas ch6 across every section — the vena-contracta/
  Bernoulli mechanism, the four-stage bubble cycle, the choked-flow equation
  and liquid/gas-choking parallel, the mechanical+chemical damage-attack
  model with the same air-content/pressure/backpressure trends, the same
  90 dBA/85 dBA cavitation/flashing noise thresholds, the same EAS-valve/
  V500-rotary-plug flashing hardware choices, the same six cavitation-trim
  design theories (tortuous path through cavitation-control-in-lieu-of-
  prevention) including the same Cavitrol III characterized-cage caveat, the
  same seating/throttling separation rationale, and the same backpressure-
  device/air-injection alternatives section — confirmed by direct
  side-by-side reading, not assumed from section-header similarity alone.
  **Deliberately did NOT re-author 9 near-duplicate topic entries** for this
  reason — doing so would restate already-indexed content with zero new
  value, the same discipline Oil & Gas's own ch5 pass applied against the
  Control Valve Handbook's noise topics. **One genuine, book-specific
  addition found and indexed** (`pss-topic-high-temperature-alloy-selection`
  — ASTM A217 grade C12A for >1000°F power-industry service, absent from Oil
  & Gas's version). This chapter's real component count is therefore 13 (12
  figures + 1 topic), not a larger topic count — a correct, verified
  outcome for a near-duplicate chapter, not a shortfall.
