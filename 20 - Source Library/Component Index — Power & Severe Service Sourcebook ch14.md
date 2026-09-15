---
title: Component Index — Power & Severe Service Sourcebook ch14
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch14 — Control Valve Performance & Diagnostics
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 14

**Chapter 14 — "Control Valve Performance & Diagnostics."** Standing
library-cataloging pass, part of the whole-document Power & Severe Service
Sourcebook index — built ahead of any course actually needing these
figures, per `Source Library.md`'s "three ways a component index gets
triggered" (standing full-chapter). Matches the rigor of `Component Index —
Oil & Gas Sourcebook ch1.md` and the Control Valve Handbook chapter files:
every real page in the chapter's confirmed range was rendered at 150dpi and
read directly.

Chapter boundaries were verified directly against the PDF, not assumed from
the table of contents or from this book's own back matter: PDF page 205 is
the "Chapter 14 / Control Valve Performance & Diagnostics" divider page.
This is the **last chapter in the book**, and its real end is not obvious
from the page count alone — PDF page 218 was rendered and confirmed to be a
blank page carrying only the printed footer "14-14," PDF page 219 was
rendered and confirmed to be fully blank with no page marker at all, and
PDF page 220 was rendered and confirmed to be the book's back-cover/
colophon page (Emerson Process Management address block plus "D101449X012
Printed in USA / 10-04," no chapter content). The chapter's real content
ends at PDF page 217 (printed 14-13, the "Summary" section) — Chapter 14 =
PDF pp. 205–217 (printed 14-1 through 14-13), zero page offset against its
own printed numbering, with two trailing blank pages (218, 219) before the
colophon (220) that a page-count-only read would not have surfaced — the
same kind of trailing-blank-page finding as the Control Valve Handbook's
ch6/ch7 precedent.

This pass catalogs existence and location only — it does not crop or
extract images, so each record's `source` carries a single locator, not a
second "already extracted" entry (matching the Control Valve Handbook
chapter files' shape, since this book has no extracted-figures crop folder
yet).

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth
Edition (D101449X012), is itself a **current** first-party Fisher/Emerson
document (held in the Source Library's Industry Handbooks holdings — same
series as the already-indexed Oil & Gas Sourcebook), so every record below
is `status: current`. No archive or legacy material was consulted.

## Components

### Chapter 14 — Process Variability & Dynamic Performance Testing (printed pp. 14-1 – 14-3)

```yaml
id: pss-cmp-process-variability-distribution
teaches: >
  The statistical concept of process variability as a ±2-sigma band around
  a set point, plotted as two stacked bell-curve (normal) distributions
  against a lower-limit specification: the upper distribution shows a set
  point held conservatively far from the limit (wide sigma band, more
  product made to unnecessarily high quality and wasted margin); the lower
  distribution shows the same lower limit met by a tighter-sigma process
  with the set point moved closer to the limit — introducing why reducing
  process variability (a role the control valve assembly plays) lets a
  plant move set points closer to spec limits without violating them.
concept-tags: [process variability, 2-sigma band, set point, lower limit specification, PV distribution, normal distribution, process control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 14-1 'Process variability,' p. 14-1 — drawing A7153/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical statistical diagram, not a cutaway or photo — falls under
  Style Guide §5 (diagram & graph conventions) if ever placed on a slide,
  not §6's nomenclature/callout rules. Opens the chapter; the divider page
  itself (PDF p.205) carries this figure.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-performance-test-loop
teaches: >
  A real closed-loop flow-lab test setup: a technician at a monitoring
  workstation beside an instrumented valve/actuator/positioner assembly
  plumbed into a flow loop with upstream/downstream piping, pressure
  gauges, and cabling to data-acquisition equipment — establishes that
  valve dynamic-performance claims (dead band, response time, installed
  gain) are verified under actual closed-loop flowing conditions, not just
  static bench tests.
concept-tags: [performance test loop, closed-loop testing, flow lab, dynamic performance, valve assembly testing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 14-2 'Performance test loop,' p. 14-2 — no drawing number visible in the printed photo"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A production/lab photograph, not a labelled cutaway — good as a
  chapter-establishing "this is how the following data was generated"
  image, not a part-callout source.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-open-loop-step-test-three-valves
teaches: >
  An open-loop step test comparing three real 4-inch segmented-ball valve
  assemblies with metal seals, diaphragm actuators and standard
  positioners (Valve A: Fisher V150HD/1052(33)/3610J; Valves B and C
  unnamed comparison units) — each subjected to the same series of input
  steps (0.5%, 1%, 2%, 5%, 10%) while plotting Input Signal, Actuator
  Position, and Flow Rate (Filtered) on stacked time-series axes. Teaches
  that actuator stem motion can track the input signal faithfully across
  all three valves while the actual flow-rate response differs
  dramatically — the visual proof that dead band/friction differences
  between "equivalent" valve assemblies are invisible to a stem-position-
  only performance check and only show up in the process variable itself.
concept-tags: [open-loop step test, dead band, segmented ball valve, Vee-Ball, diaphragm actuator, positioner, flow rate response, actuator stem travel]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 14-3 'Open-loop step test of three valve constructions reveals dramatic differences in ability to change the flow rate,' p. 14-3 — drawing A7154/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical multi-trace time-series chart, not a cutaway — falls under
  Style Guide §5 if ever placed on a slide. The same three valves (A/B/C,
  same V150HD/1052(33)/3610J identification for Valve A) reappear in
  Figure 14-6's closed-loop test later in this chapter — see that record's
  own notes for the cross-reference.
mediaStatus: unreviewed
```

### Chapter 14 — Valve Type and Characterization (printed pp. 14-7 – 14-11)

```yaml
id: pss-cmp-installed-flow-characteristic-gain
teaches: >
  The distinction between inherent and installed valve characteristics:
  two stacked plots against Valve Travel (%) — the upper plot is the
  Installed (Flow) Characteristic curve (Flow in gpm vs. travel, measured
  with pressure drop allowed to vary naturally as installed in a real
  system, not held constant as for an inherent-characteristic test); the
  lower plot is the corresponding Installed Gain curve (the slope of the
  characteristic curve at each point), annotated with a "Control Range"
  band and the "EnTech Gain Specification" limit lines (loop process gain
  should stay within a 4-to-1, typically 0.5–2.0, ratio for good dynamic
  performance).
concept-tags: [installed flow characteristic, installed gain, valve travel, control range, EnTech gain specification, loop process gain, valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 14-4 'Installed flow characteristic and gain,' p. 14-8 — no drawing number visible in the rendered image"
delivery: analytical graph — falls under Style Guide §5, not yet determined
used-by: []
notes: >
  An analytical two-panel plot, the same visual family as
  `ogas-cmp-flow-characteristic-curves` (Oil & Gas ch1, Figure 1-10) but a
  distinct concept — that record teaches the three *inherent* flow-
  characteristic shapes (quick-opening/linear/equal-percentage); this
  record teaches the *installed* characteristic and gain concept
  specifically, a different (though related) topic. Not the same figure —
  no duplication. Pairs directly with
  `pss-cmp-valve-style-control-range-comparison` (Figure 14-5, same chart
  format extended to compare two valve styles) later in this chapter.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-valve-style-control-range-comparison
teaches: >
  The same installed-characteristic/installed-gain two-panel chart format
  as Figure 14-4, now overlaying two real valve styles — a line-size
  butterfly valve and a line-size globe valve — on the same axes. Shows
  the globe valve holding a much wider, flatter control range (the gain
  stays inside the EnTech specification band across more of the travel
  range) than the butterfly valve, whose gain spikes sharply at low travel
  and falls off quickly — the visual basis for why butterfly valves suit
  fixed-load applications and need careful sizing, while globe valves
  (and, per the surrounding text, V-notch ball and eccentric plug valves
  as an intermediate case) tolerate a broader range of operating
  conditions.
concept-tags: [control range, valve style comparison, butterfly valve, globe valve, installed gain, EnTech gain specification, valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 14-5 'Effect of valve style on control range,' p. 14-10 — drawing A7156/IL"
delivery: analytical graph — falls under Style Guide §5, not yet determined
used-by: []
notes: >
  Direct extension of `pss-cmp-installed-flow-characteristic-gain` (Figure
  14-4) — same chart format, now comparing two named valve styles instead
  of one generic curve. Cite together if used on the same slide.
mediaStatus: unreviewed
```

### Chapter 14 — Economic Results (printed p. 14-12)

```yaml
id: pss-cmp-closed-loop-performance-summary
teaches: >
  A closed-loop random-load-disturbance test ("4-inch valves tested at 600
  gpm in the 4-inch test loop") comparing the same three rotary valve
  assemblies as Figure 14-3 (Valve A: Fisher V150HD/1052(33)/3610J; Valves
  B and C) by plotting process Variability (2σ/μ, %) against Closed-Loop
  Time Constant (a measure of controller tuning aggressiveness), bounded
  above by a "Manual" (open-loop, uncontrolled) reference line and below
  by a hatched "Minimum Variability" envelope representing an ideal,
  non-linearity-free valve assembly. Valve A tracks close to the minimum-
  variability envelope across tuning speeds; Valves B and C degrade
  markedly under faster (more aggressive) tuning — the chapter's
  culminating proof that valve-assembly dynamic quality has a direct,
  quantifiable economic payoff (the accompanying text derives a
  $1.1M/year raw-material-savings example from the Valve-B-to-Valve-A
  swap shown here).
concept-tags: [closed-loop performance, random load disturbance, process variability, closed-loop time constant, valve tuning, economic impact, segmented ball valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 14-6 'Closed-loop performance,' p. 14-12 — drawing A7157/IL"
delivery: analytical graph — falls under Style Guide §5, not yet determined
used-by: []
notes: >
  Same three valve assemblies (A/B/C) as `pss-cmp-open-loop-step-test-three-valves`
  (Figure 14-3) — that record is the open-loop step-response view of these
  same valves, this record is their closed-loop tuned-performance view.
  Cite together for a complete "open-loop vs. closed-loop" teaching pair.
mediaStatus: unreviewed
```

## Open Items

- **Chapter boundary** — confirmed directly by rendering and reading the
  p.205 "Chapter 14" divider, plus pp.217–220 to locate the real end of
  content. Chapter 14 = PDF pp. 205–217 (printed 14-1 through 14-13), zero
  page offset. PDF p.218 (printed "14-14") is a confirmed blank trailing
  page, PDF p.219 is confirmed fully blank with no page marker, and PDF
  p.220 is the book's back-cover/colophon page — none of the three carry
  chapter content.
- **Full coverage accounting** — every page from 205 through 217 was
  rendered at 150dpi and read directly. Six real figures found (14-1
  through 14-6), all accounted for above. One table (Table 14-1, "Valve
  Response Time," p. 14-7 / PDF p.211) was found and excluded per the
  tables-vs-figures rule. No unnumbered-but-real diagrams were found in
  this chapter.
- **Low-confidence flags** — two records (`pss-cmp-performance-test-loop`,
  Figure 14-2; `pss-cmp-installed-flow-characteristic-gain`, Figure 14-4)
  have no drawing number visible in the rendered image at the resolution
  used — noted honestly in each record's `source.locator` rather than
  guessed or omitted.
- **Duplicate-figure/citation-error findings** — none found in this
  chapter.
- **Table-exclusion confirmation** — Table 14-1 "Valve Response Time" (p.
  14-7 / PDF p.211) is a reference table (T_d and T_63 response-time data
  for Valves A/B/C across six step conditions), not a figure — excluded
  per the standing rule.
- **Cross-reference findings** — checked `Component Index — Oil & Gas
  Sourcebook ch1.md` for a possible match on the flow-characteristic-curve
  figures: Figure 14-4 (installed characteristic/gain) is visually and
  conceptually distinct from that file's `ogas-cmp-flow-characteristic-curves`
  (Figure 1-10, the *inherent* quick-opening/linear/equal-percentage
  curve family) — different concept, different chart, no duplication; the
  distinction is noted in `pss-cmp-installed-flow-characteristic-gain`'s
  own `notes`. No other cross-reference candidates were found for this
  chapter's process-control-diagnostics content (dead band, positioner
  gain, closed-loop testing) — this material does not appear in the
  Oil & Gas Sourcebook or, so far as checked, the Control Valve Handbook's
  already-catalogued chapters.
- **Archive/legacy material** — none consulted, none needed.
