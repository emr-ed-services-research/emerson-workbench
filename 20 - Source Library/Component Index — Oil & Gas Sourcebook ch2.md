---
title: Component Index — Oil & Gas Sourcebook ch2
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch2 — Actuator Selection
updated: 2026-09-08
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 2

**Chapter 2 — "Actuator Selection."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a component index gets
triggered." Built across three batches, now covering the whole chapter's
figure set (Figures 2-1 through 2-17, the chapter's complete run):

- **First batch** — the six actuator-type overview figures that open the
  chapter, printed pp. 2-3 – 2-6 (PDF pages 29–31). Chapter 2 begins on the
  same PDF page that Chapter 1 ends on (PDF page 25 / printed 1-19); see
  `Component Index — Oil & Gas Sourcebook ch1.md`'s "Open items" for that
  boundary.
- **Second batch** — the chapter's remaining six figures (on-off/electric
  actuator examples, the actuator-sizing seat-load chart, and the closing
  positioner/digital-valve-controller figures), printed pp. 2-6 – 2-12 (PDF
  pages 31–37).
- **Third batch** — the chapter's final five figures (accessory instruments:
  electro-pneumatic transducer, pneumatic booster, pneumatic controller,
  electric level controller, digital level controller), printed pp. 2-13 –
  2-14 (PDF pages 38–39). This batch also **verifies the chapter's real end
  page**, left open by the first two batches — see "Open items" below.

See "Open items" below for what's still out of scope (the chapter's
reference tables).

All from `20 - Source Library/Industry Specific Sourcebooks/Control Valve
Sourcebook - Oil & Gas.pdf`. Every record's `used-by` is `[]` — none are
placed on a slide yet; a future course resolves against these entries
instead of triggering reactive cataloging.

Record shape matches `Component Index — 14101 ch3.md`: `id` · `teaches` ·
`concept-tags` · `status` · `source` (`doc` + `locator`) · `delivery` ·
`used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher,
held in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Components

### Chapter 2 — Actuator types: spring-and-diaphragm and piston (printed pp. 2-3 – 2-6)

```yaml
id: ogas-cmp-657-667-diaphragm-actuator-cutaways
teaches: >
  Spring-and-diaphragm actuator construction, side-by-side comparison of the
  667 (left) and 657 (right): diaphragm casing, diaphragm, diaphragm plate,
  lower diaphragm casing, actuator spring, actuator stem, spring seat, spring
  adjustor, stem connector, yoke, travel indicator disk, indicator scale.
  Positioned in the source as the chapter's opening figure — "an excellent
  first choice for most control valves... inexpensive, simple and have
  built-in, fail-safe action."
concept-tags: [spring-and-diaphragm actuator, 657, 667, diaphragm casing, diaphragm plate, actuator spring, spring adjustor, stem connector, yoke, travel indicator disk, indicator scale, fail-safe]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-1 (drawings W0364-1 / left,
      W0363-1 / right, printed p. 2-3) — "Spring-and-diaphragm actuators
      offer an excellent first choice for most control valves. They are
      inexpensive, simple and have built-in, fail-safe action. Pictured
      above are cutaways of the popular 667 (left) and 657 (right)
      actuators."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig1-657-667-spring-diaphragm-cutaways.png
    locator: "already extracted — cropped directly from the source PDF (p. 29 / printed 2-3) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway with its own printed field callouts (twelve labels
  common to both panels) — a nomenclature source like ch1's
  `ogas-cmp-et-globe-cutaway`. Style Guide §6.3 applies (figure's own
  printed field labels are not re-marked with numbered circles) if ever
  placed on a slide. Directly overlaps 14101 ch3's actuator-construction
  teaching (`ch3-cmp-657-assembly`, `ch3-cmp-667-assembly-sealbushing` in
  `Component Index — 14101 ch3.md`) but is NOT a duplicate record — this
  figure is the Oil & Gas Sourcebook's own two-actuator comparison cutaway,
  a different source figure from the 657/667 Instruction Manual figures ch3
  cites. A future course could use either depending on whether a
  side-by-side 667/657 comparison or a single-actuator IM cutaway better
  fits the teaching point.
```

```yaml
id: ogas-cmp-diaphragm-actuator-handwheel
teaches: >
  A top-mounted handwheel option on a spring-and-diaphragm actuator: allows
  manual operation and also acts as a travel stop or means of emergency
  operation.
concept-tags: [spring-and-diaphragm actuator, handwheel, manual override, travel stop, emergency operation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2, Figure 2-2 (drawing W0368-2, printed p. 2-4) —
      "Spring-and-diaphragm actuators can be supplied with a top-mounted
      handwheel. The handwheel allows manual operation and also acts as a
      travel stop or means of emergency operation."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig2-spring-diaphragm-handwheel.png
    locator: "already extracted — cropped directly from the source PDF (p. 29 / printed 2-4) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Unlabelled cutaway (no printed field callouts beyond the drawing number) —
  a single-concept accessory figure, not a full nomenclature source. Pairs
  with `ogas-cmp-657-667-diaphragm-actuator-cutaways` (Figure 2-1) as the
  chapter's two opening spring-and-diaphragm figures; both sit on the same
  source page (printed p. 2-4 / PDF page 29, Figure 2-2 in the lower-left
  column beneath Figure 2-1).
```

```yaml
id: ogas-cmp-2052-splined-actuator-connection
teaches: >
  The 2052 spring-and-diaphragm actuator on a rotary (butterfly-style) valve
  with a digital positioner: the splined actuator connection uses a clamped
  lever and single-joint linkage to help eliminate lost motion — a
  precision-control feature beyond the basic spring-and-diaphragm design.
concept-tags: [spring-and-diaphragm actuator, 2052, splined connection, clamped lever, single-joint linkage, lost motion, precise control, rotary valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2, Figure 2-3 (drawing W9421-1, printed p. 2-4) — "The 2052 is
      a spring-and-diaphragm actuator that has many features to provide
      precise control. The splined actuator connection features a clamped
      lever and single-joint linkage to help eliminate lost motion."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig3-2052-spring-diaphragm-splined.png
    locator: "already extracted — cropped directly from the source PDF (p. 30 / printed 2-4) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A production photo/rendering (not a cutaway), no printed field callouts —
  shows the actuator mounted to a rotary valve body via a lever-and-linkage
  assembly, with a digital positioner on the far right. On the source page
  this is the top-left figure; Figure 2-5 (`ogas-cmp-585c-spring-bias-piston-cutaway`)
  is top-right and Figure 2-4 (`ogas-cmp-1061-double-acting-piston-rotary`)
  is bottom-left on the SAME page (printed p. 2-4/2-5, PDF page 30) — the
  source's own figure numbering does not run in reading order on this page
  (2-3 top-left, 2-5 top-right, 2-4 bottom-left); flagged here so a future
  reader is not confused by the mismatch between print position and figure
  number.
```

```yaml
id: ogas-cmp-1061-double-acting-piston-rotary
teaches: >
  Double-acting piston actuators (the 1061 rotary actuator is the example)
  are a good choice when thrust requirements exceed spring-and-diaphragm
  capability. Piston actuators require a higher supply pressure but offer
  high stiffness and small size. Exploded/production view showing the piston
  housing, yoke, and rotary output flange with crank-arm linkage.
concept-tags: [piston actuator, double-acting, 1061, rotary actuator, thrust, high stiffness, small size, higher supply pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2, Figure 2-4 (drawing W3827-1, printed p. 2-5) —
      "Double-acting piston actuators such as 1061 rotary actuator are a
      good choice when thrust requirements exceed the capability of
      spring-and-diaphragm actuators. Piston actuators require a higher
      supply pressure, but have benefits such as high stiffness and small
      size."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig4-1061-double-acting-piston.png
    locator: "already extracted — cropped directly from the source PDF (p. 30 / printed 2-5) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway showing the piston chamber, output shaft, and crank-arm/flange
  assembly — no printed field callouts, drawing number W3827-1 only. Same
  1061 actuator family as `ogas-cmp-1061-rotary-piston-throttling-cutaway`
  (Figure 2-6, drawing W3827 — no "-1" suffix): the two are companion
  cutaways of the same physical actuator, Figure 2-4 emphasizing the piston
  chamber and Figure 2-6 (one page later) the identical view repeated as the
  chapter returns to the 1061 for the throttling-service point. See that
  record's notes for the full cross-reference.
```

```yaml
id: ogas-cmp-585c-spring-bias-piston-cutaway
teaches: >
  Spring-bias piston actuator (the 585C is the example): a piston design
  with spring fail-safe present. Process pressure can aid fail-safe action,
  or the actuator can be configured for full spring-fail closure — the
  design point between a plain double-acting piston (no fail-safe) and a
  full spring-and-diaphragm (fail-safe built in, lower force).
concept-tags: [piston actuator, spring-bias, 585C, fail-safe, spring fail closure, process pressure assist]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2, Figure 2-5 (drawing W7447, printed p. 2-5) — "Spring
      fail-safe is present in this piston design. The 585C actuator is an
      example of a spring-bias piston actuator. Process pressure can aid
      fail-safe action, or the actuator can be configured for full
      spring-fail closure."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig5-585c-spring-bias-piston.png
    locator: "already extracted — cropped directly from the source PDF (p. 30 / printed 2-5) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway with one printed callout ("A", an internal reference letter, not a
  field label — not a nomenclature figure in the §6.3 sense). Printed
  top-right on the same source page as Figures 2-3 and 2-4 (see
  `ogas-cmp-2052-splined-actuator-connection`'s notes on the page's
  out-of-numeric-order layout).
```

```yaml
id: ogas-cmp-1061-rotary-piston-throttling-cutaway
teaches: >
  The 1061 double-acting rotary piston actuator for throttling service — the
  same actuator family as Figure 2-4, shown again as the chapter's running
  text discusses hysteresis/deadband from sliding parts and linkage points,
  then transitions to on-off service (Figure 2-7, out of this batch's
  scope).
concept-tags: [piston actuator, double-acting, 1061, rotary actuator, throttling service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2, Figure 2-6 (drawing W3827, printed p. 2-6) — "This 1061
      actuator is a double-acting rotary piston actuator for throttling
      service."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig6-1061-rotary-piston-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 31 / printed 2-6) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Visually the same cutaway view as `ogas-cmp-1061-double-acting-piston-rotary`
  (Figure 2-4) — same actuator, same angle, drawing number W3827 here vs.
  W3827-1 there (the "-1" suffix is the only difference in the source's own
  drawing numbering, consistent with the two being the same base drawing
  reused). Figure 2-4's caption teaches the thrust/stiffness/size tradeoff
  vs. spring-and-diaphragm; this figure's caption teaches the
  throttling-service application point, made two pages later after the
  chapter's hysteresis/deadband discussion. Catalogued as two records
  (matching the source's own two figure numbers and two distinct captions),
  not merged into one — a future course may want either teaching point
  independently.
```

### Chapter 2 — Topics: actuator taxonomy, coupling, fail-safe, positioner/booster guidelines, piston variants (printed pp. 2-3 – 2-5)

`kind: topic` pass, added 2026-09-17 — real conceptual prose surrounding the
first-batch figures above, read directly from the source (PDF pp. 28–30),
not inferred from the figure captions alone.

```yaml
id: ogas-topic-actuator-design-taxonomy
kind: topic
concept-tags: [actuator categories, spring-and-diaphragm, pneumatic piston, electric motor, electro-hydraulic, lost motion, coupling method, slotted connector, pinned connection, splined connector, rigid linkage, rotary linkage]
status: current
teaches: >
  Actuators fall into four general categories — spring-and-diaphragm,
  pneumatic piston, electric motor, electro-hydraulic — differing mainly by
  power source; most designs are available for either sliding-stem or
  rotary bodies via linkages or motion translators, not a different power
  source. The single most important actuator-selection consideration is
  lost motion at the linkage/valve coupling. Sliding-stem actuators, rigidly
  threaded/clamped to the stem with no linkage points, have inherently
  excellent control characteristics and no lost motion. Rotary actuators
  use linkages, gears, or crank arms to convert linear diaphragm/piston
  motion into 90-degree output rotation — a genuine tradeoff point, since
  each linkage point adds potential lost motion; tilting-piston/diaphragm
  rotary designs eliminate most linkage points for this reason. Coupling
  method to the drive shaft matters independently of actuator type: slotted
  connectors on milled shaft flats are generally unsatisfactory for real
  performance; pinned connections suit nominal torque if solidly
  constructed; a splined connector rigidly clamped to a splined shaft end
  eliminates lost motion, disassembles easily, and handles high torque.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2 'Actuator Selection,' opening section 'Actuator Designs,' printed p. 2-3 (PDF page 28) — prose, not figure-anchored"
relatedFigures: [ogas-cmp-657-667-diaphragm-actuator-cutaways, ogas-cmp-2052-splined-actuator-connection]
relatedTopics: []
used-by: []
notes: >
  Read directly via pdftotext -layout against the real PDF page 28 (printed
  2-3), confirmed by the page-footer "2−3" marker. The splined-connector
  description directly explains WHY Figure 2-3's 2052 splined connection
  (already catalogued) "helps eliminate lost motion" — the figure's caption
  states the fact, this topic supplies the underlying reasoning the caption
  doesn't.
```

```yaml
id: ogas-topic-positioner-booster-application-guidelines
kind: topic
concept-tags: [positioner, booster, spring-and-diaphragm actuator, control quality, rugged construction, calibration, feedback linkage]
status: current
teaches: >
  Adding a positioner or booster to a spring-and-diaphragm actuator can
  improve control — or, if improperly applied, make control noticeably
  worse. Real selection guidance for positioner applications: look for
  rugged, vibration-resistant construction; calibration ease; simple,
  positive feedback linkages. This is a genuine judgment point, not a
  blanket "always add a positioner" rule.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2, printed p. 2-3 (PDF page 28) — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-actuator-design-taxonomy]
used-by: []
notes: Read directly from the real PDF page 28 (printed 2-3), same page range as the taxonomy topic above but a distinct concept (application judgment, not category/coupling taxonomy).
```

```yaml
id: ogas-topic-fail-safe-action-mechanism
kind: topic
concept-tags: [fail-safe action, spring-and-diaphragm actuator, fail-open, fail-closed, fail-lock, stored spring energy, Fisher 164A, lock valve]
status: current
teaches: >
  The spring-and-diaphragm actuator's fail-safe mechanism explained: as
  pneumatic supply loads the actuator casing, the diaphragm moves the valve
  and compresses the spring, storing energy; on loss of signal or supply
  pressure, the spring releases that stored energy to move the valve back
  to its original position. Actuators are available for fail-open or
  fail-closed action; fail-lock is also available, achieved by piping a
  pneumatic switching valve (a Fisher 164A is the named example) as a lock
  valve — a third real fail option beyond the simple open/closed binary.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2, printed pp. 2-3–2-4 (PDF pages 28-29) — prose, not figure-anchored"
relatedFigures: [ogas-cmp-657-667-diaphragm-actuator-cutaways, ogas-cmp-585c-spring-bias-piston-cutaway]
relatedTopics: []
used-by: []
notes: >
  Read directly from PDF pages 28-29. Expands what Figure 2-1's own caption
  only asserts ("built-in, fail-safe action") into the actual stored-energy
  mechanism and the fail-open/closed/lock options — the fail-lock/164A
  detail appears nowhere in any existing figure caption in this file.
```

```yaml
id: ogas-topic-piston-actuator-design-variants
kind: topic
concept-tags: [piston actuator, double-acting, single-acting with spring, pneumatic trip system, hysteresis, deadband, throttling service, on-off service]
status: current
teaches: >
  Two genuinely distinct spring-return piston actuator designs exist, not
  one: (1) a large, high-output spring added to a piston actuator, operated
  much like a spring-and-diaphragm via a single-acting positioner that loads
  the chamber and compresses the spring — full spring-fail closure without
  process assistance; (2) a much smaller spring relying on valve fluid
  forces (unbalance forces on the plug) to help provide fail-safe action —
  acts like a double-acting piston in normal operation, spring only
  initiates fail-safe movement. An alternative to either is a pneumatic trip
  system — safe, but adds design complexity; spring-and-diaphragm should be
  considered first when feasible. Hysteresis and deadband both increase with
  actuator linkage points and sliding parts respectively — high
  hysteresis/deadband can be acceptable for on-off service but requires real
  caution before adapting the same actuator to throttling service just by
  bolting on a positioner.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2, printed pp. 2-4–2-6 (PDF pages 29-31) — prose, not figure-anchored"
relatedFigures: [ogas-cmp-1061-double-acting-piston-rotary, ogas-cmp-1061-rotary-piston-throttling-cutaway, ogas-cmp-1066sr-onoff-piston-actuator]
relatedTopics: []
used-by: []
notes: >
  Read directly from PDF pages 29-31. No relatedTopics link to CVH's
  hysteresis/deadband content (`cvh-topic-deadband-and-friction`, ch1) drawn
  here — that entry is about controller-output deadband in a closed loop,
  a different (if adjacent) concept from this actuator-design hysteresis
  point; not linked to avoid overstating the connection.
```

### Chapter 2 — On-off/electric/electro-hydraulic actuators, actuator sizing, positioners & digital valve controllers (printed pp. 2-6 – 2-12)

Second batch. Figures 2-7 through 2-12 — the chapter's remaining actuator
examples (on-off piston, electric) plus the actuator-sizing seat-load chart
and the accessory figures (positioners, digital valve controller) that close
the chapter. Note on page/figure-number correspondence: Figures 2-10, 2-11,
and 2-12 all sit on the single source page footed "2-12" (PDF page 37) —
the two intervening printed pages, 2-10 and 2-11 (PDF pages 35–36), carry
"Torque Equations" text and Tables 2-4/2-5/2-6 instead, with no figures of
their own. This is the same kind of figure-number/page-position mismatch
already flagged in `ogas-cmp-2052-splined-actuator-connection`'s notes for
Figures 2-3/2-4/2-5.

```yaml
id: ogas-cmp-1066sr-onoff-piston-actuator
teaches: >
  The 1066SR piston actuator, simplified for on-off (not throttling) service:
  since on-off duty does not need the accuracy or minimal lost motion that
  throttling requires, the design can tolerate more hysteresis and deadband
  in exchange for cost savings, and adds spring-return capability. Contrasts
  with the double-acting 1061 (Figures 2-4/2-6) used for throttling service.
concept-tags: [piston actuator, on-off service, 1066SR, spring-return, simplified design, hysteresis, deadband, cost savings]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-7 (drawing W4102, printed
      p. 2-6) — "Since the requirements for accuracy and minimal lost
      motion are unnecessary for on-off service, cost savings can be
      achieved by simplifying the actuator design. The 1066SR incorporates
      spring-return capability."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig7-1066sr-onoff-piston-actuator-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 31 / printed 2-6) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway showing the spring-return piston/spring-cartridge assembly with
  its distinctive hooked mounting bracket — no printed field callouts,
  drawing number W4102 only. Shares the source page (footed "2-6") with
  Figure 2-6 (`ogas-cmp-1061-rotary-piston-throttling-cutaway`'s companion
  record above) — the on-off/throttling contrast is made explicitly in the
  running text between the two figures.
```

```yaml
id: ogas-cmp-d4-easydrive-electric-actuator
teaches: >
  Electric actuator example: the Fisher D4 control valve fitted with an
  easy-Drive electric motor actuator. Illustrates the electric-actuator
  category — motor and gear train, available in a wide range of torque
  outputs and travels, very stiff (resistant to valve forces), suited to
  remote mounting with no other power source available, but no inherent
  fail-safe action (lock-in-last-position on loss of power).
concept-tags: [electric actuator, D4 control valve, easy-Drive, motor and gear train, high stiffness, lock in last position, no fail-safe]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-8 (drawing W9933-2, printed
      p. 2-7) — "Fisher D4 Control Valve with easy-Drive Electric Actuator"
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig8-d4-valve-easydrive-electric-actuator.png
    locator: "already extracted — cropped directly from the source PDF (p. 32 / printed 2-7) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (globe valve + electric actuator assembly), no printed
  field callouts — a single-concept product-example figure, not a
  nomenclature source. Drawing number W9933-2 only.
```

```yaml
id: ogas-cmp-recommended-seat-load-chart
teaches: >
  Chart correlating required seat load (lb per lineal inch of port
  circumference) against shutoff pressure drop (psi), for ASME leakage
  Classes II through V — used to size the seating force an actuator must
  deliver for a given shutoff-tightness requirement. Higher leakage class
  (tighter shutoff) demands steeply more seat load per psi of pressure drop.
concept-tags: [seat load, shutoff pressure drop, ASME leakage class, Class II, Class III, Class IV, Class V, seating force, actuator sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-9 (drawing A2222-4, printed
      p. 2-9) — "Recommended seat load." Four labeled diagonal lines
      (CLASS II / III / IV / V) plotted on a gridded X-Y chart, X axis
      "SHUTOFF PRESSURE DROP, PSI" (0–6000), Y axis "REQUIRED SEAT LOAD (LB
      PER LINEAL INCH)" (0–900).
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig9-recommended-seat-load-chart.png
    locator: "already extracted — cropped directly from the source PDF (p. 34 / printed 2-9) at 600 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  This is a line chart, not a photo or cutaway — closer in kind to a Style
  Guide §5 analytical graph than to this file's other figures. If a future
  course places it on a slide, treat it under §5 (key, axis, and line-style
  conventions), not the §6 callout conventions the cutaway figures in this
  file use. Printed on the same source page as Table 2-3 (Typical Packing
  Friction Values) — the table is not catalogued as a component, matching
  the practice already applied to ch1's and ch3's own reference tables.
```

```yaml
id: ogas-cmp-3620jp-electropneumatic-positioner
teaches: >
  The 3620JP electro-pneumatic positioner combines the functions of a
  transducer and a positioner into one unit, mounted here on a rotary
  (butterfly-style) valve. A combination unit is generally more economical
  than separate transducer + positioner units but may not be as flexible.
concept-tags: [electro-pneumatic positioner, 3620JP, transducer, positioner, combination unit, rotary valve mounting]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-10 (drawing W4920, printed
      p. 2-12) — "The 3620JP is an electro-pneumatic positioner that
      combines the functions of transducer and positioner into one unit.
      The combination unit generally is more economical but may not be as
      flexible as separate units." (source text reads "combustion unit" —
      an evident typo/OCR artifact for "combination unit," consistent with
      the sentence's own contrast against "separate units.")
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig10-3620jp-electropneumatic-positioner.png
    locator: "already extracted — cropped directly from the source PDF (p. 37 / printed 2-12) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (positioner mounted on a rotary valve with gauges), no
  printed field callouts. See this section's header note above on the
  Figures 2-10/2-11/2-12 page-position mismatch with printed pages 2-10/2-11.
```

```yaml
id: ogas-cmp-3582-pneumatic-positioner-nomenclature
teaches: >
  The Fisher 3582 standard pneumatic positioner for spring-and-diaphragm
  actuators, labelled internal cutaway: rotary shaft arm, operating cam,
  flapper, nozzle, adjusting screw, bypass lever, bellows, screened vent.
  Time-proven design; features ease of reversal and calibration; availability
  of characterizing cams to alter its input/output relationship.
concept-tags: [pneumatic positioner, 3582, rotary shaft arm, operating cam, flapper, nozzle, adjusting screw, bypass lever, bellows, screened vent, characterizing cam, reversal, calibration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-11 (drawing W6366, printed
      p. 2-12) — "The standard pneumatic positioner for spring-and-diaphragm
      actuators is Fisher 3582. This time-proven design features ease for
      reversal and calibration as well as availability of characterizing
      cams to alter its input/output relationship." Eight printed field
      labels on the figure itself: ROTARY SHAFT ARM, NOZZLE, ADJUSTING
      SCREW, BYPASS LEVER, BELLOWS, OPERATING CAM, FLAPPER, SCREENED VENT.
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig11-3582-pneumatic-positioner-labeled-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 37 / printed 2-12) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway with its own printed field callouts — a
  nomenclature source like this file's own
  `ogas-cmp-657-667-diaphragm-actuator-cutaways` (Figure 2-1) and ch1's
  `ogas-cmp-et-globe-cutaway`. Style Guide §6.3 applies if ever placed on a
  slide (a figure with its own printed field labels is not re-marked with
  numbered circles). See this section's header note above on the Figures
  2-10/2-11/2-12 page-position mismatch with printed pages 2-10/2-11.
```

```yaml
id: ogas-cmp-fieldvue-digital-valve-controller
teaches: >
  The FIELDVUE digital valve controller, mounted on a globe control valve,
  brings increased control accuracy and flexibility over a standard
  pneumatic positioner. Utilized with AMS ValveLink software, FIELDVUE
  instruments provide diagnostic data that helps avoid maintenance problems.
concept-tags: [FIELDVUE, digital valve controller, AMS ValveLink, diagnostics, control accuracy, predictive maintenance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-12 (drawing W8119-2, printed
      p. 2-12) — "The FIELDVUE digital valve controller brings increased
      control accuracy and flexibility. When utilized with AMS ValveLink™
      software, FIELDVUE instruments provide valuable diagnostic data that
      helps avoid maintenance problems."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig12-fieldvue-digital-valve-controller.png
    locator: "already extracted — cropped directly from the source PDF (p. 37 / printed 2-12) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (globe control valve with FIELDVUE-fitted actuator), no
  printed field callouts. Closes out the chapter's "Actuator Selection
  Summary" bullet-list page (same printed page, same PDF page 37). See this
  section's header note above on the Figures 2-10/2-11/2-12 page-position
  mismatch with printed pages 2-10/2-11.
```

### Chapter 2 — Topics: electric/electro-hydraulic selection, actuator force sizing, rotary torque sizing, selection summary (printed pp. 2-6 – 2-11)

`kind: topic` pass, added 2026-09-17 — real conceptual/methodology prose
read directly from the source (PDF pp. 30-37), including two sections
(electro-hydraulic actuators and the torque-sizing equations) that have
**no figure at all** and were therefore invisible to the original
figures-only pass.

```yaml
id: ogas-topic-electric-actuator-selection-factors
kind: topic
concept-tags: [electric actuator, duty cycle, closed-loop control, remote mounting, continuous rated DC motor, ball screw]
status: current
teaches: >
  Electric actuators suit remote mounting where no other power source is
  available, or where highly precise control or specialized thrust/
  stiffness is required. They are economical vs. pneumatic only in small
  size ranges — larger electric units are slower and heavier than pneumatic
  equivalents, with fail action typically limited to lock-in-last-position
  (no inherent fail-safe). The single most important selection factor for
  frequent-position-change applications is duty cycle: continuous
  closed-loop control demands a suitable duty cycle, which standard electric
  operators may not have; high-performance units (continuous-rated DC
  motors, ball-screw output) are needed for precise control at 100% duty
  cycle.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2, printed pp. 2-6–2-7 (PDF pages 31-32) — prose, not figure-anchored"
relatedFigures: [ogas-cmp-d4-easydrive-electric-actuator]
relatedTopics: []
used-by: []
notes: Read directly from PDF pages 31-32, footer-confirmed against the "2−6"/"2−7" markers.
```

```yaml
id: ogas-topic-electro-hydraulic-actuator-configurations
kind: topic
concept-tags: [electro-hydraulic actuator, self-contained, externally powered, hydraulic accumulator, fail-safe, remote mounting]
status: current
teaches: >
  Electro-hydraulic actuators internally pump oil at high pressure to a
  piston, producing an output force — an excellent throttling choice given
  high stiffness, analog-signal compatibility, excellent frequency response,
  and positioning accuracy, but handicapped by high initial cost, complexity,
  and difficult maintenance. Fail-safe requires a return spring or a
  hydraulic accumulator plus shutdown systems (not inherent, unlike
  spring-and-diaphragm). Two real configurations exist: self-contained
  (includes its own motor, pump, fluid reservoir — can be spring-return for
  fail mode) vs. externally powered (a separate motor/pump/reservoir/hoses
  unit — requires an accumulator to achieve any fail mode). Suitable for
  remote mounting (e.g. pipelines) like electric actuators.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2, printed pp. 2-6–2-7 (PDF pages 31-32) — prose, not figure-anchored"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Read directly from PDF pages 31-32. **This entire electro-hydraulic
  section has no figure anywhere in the chapter** — confirmed by checking
  every existing figure entry's locator against this page range; none
  exists. Invisible to the original figures-only pass; this topic entry is
  the section's only Component Index record.
```

```yaml
id: ogas-topic-actuator-force-sizing-methodology
kind: topic
concept-tags: [actuator sizing, unbalance force, seat load, packing friction, additional forces, force calculation, worked example, bench set, precompression, piston thrust]
status: current
teaches: >
  Actuator sizing matches actuator output capability to valve requirements —
  fundamentally a complex summation of forces at critical travel positions
  (usually open and closed): (A) unbalance force = net pressure differential
  × net unbalance area (Table 2-1 lists typical port/unbalance areas; net
  unbalance area is the port area on a single-seated flow-up design, may
  need to include stem area); (B) force to provide seat load, per lineal
  inch of port circumference, driven by the required ANSI/FCI 70-2/IEC
  534-4 leak class (Table 2-2) — a genuine tradeoff: use a higher seat load
  than the minimum recommended to prolong seat life, or a lower leak class
  if tight shutoff isn't a prime consideration; (C) packing friction,
  determined by stem size, packing type, and compressive load — not 100%
  repeatable, and live-loaded graphite packing can carry significant
  friction (Table 2-3 gives typical values); (D) additional forces (bellows
  stiffness, unusual seal friction, special soft-metal seating forces).
  **Real worked example, transcribed exactly**: 275 lbf required to close
  the valve; an air-to-open actuator with 100 sq. in. diaphragm area and a
  6-15 psig bench set is evaluated — pre-compression is the bench-set low
  end (6 psig) minus the operating-range low end (3 psig) = 3 psig, so net
  pre-compression force = 3 psig × 100 sq. in. = 300 lbf, which exceeds the
  275 lbf required — "an adequate selection." For piston actuators without
  springs, thrust = piston area × minimum supply pressure. An actuator that
  supplies too much force risks stem buckling, bending-induced leaks, or
  internal damage — oversizing is a real failure mode, not just a safety
  margin question.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2 'Actuator Sizing,' printed pp. 2-7–2-9 (PDF pages 32-34) — prose, not figure-anchored"
relatedFigures: [ogas-cmp-recommended-seat-load-chart]
relatedTopics: [cvh-topic-actuator-force-selection, cvh-topic-valve-balance, cvh-topic-seat-load, cvh-topic-packing-friction]
used-by: []
notes: >
  Read directly from PDF pages 32-34, footer-confirmed. This is the
  Sourcebook's own A+B+C+D force-breakdown treatment, structurally near-
  identical to CVH ch5's `cvh-topic-actuator-force-selection` (same four
  force categories, same bench-set/precompression worked-example shape) but
  a genuinely distinct document with its own real numbers (275 lbf / 100 sq
  in. / 6-15 psig here vs. CVH's own example) — kept as a separate record
  per this project's standing rule against merging records across source
  documents, cross-referenced via relatedTopics instead. Table 2-1's
  unbalance-area values were spot-checked against CVH's own
  `cvh-cmp-unbalance-area-table` figure — same structure (port diameter vs.
  unbalance area, single-seated unbalanced vs. balanced columns), different
  document, not a duplicate.
```

```yaml
id: ogas-topic-rotary-actuator-torque-sizing
kind: topic
concept-tags: [rotary actuator, breakout torque, dynamic torque, torque factors, maximum rotation, valve shaft diameter]
status: current
teaches: >
  Rotary valve actuator selection is driven by torque required to open/close
  the valve vs. actuator torque output, assuming the valve itself is
  properly sized. Rotary valve torque is the sum of several components,
  reduced to two practical equations: Breakout Torque TB = A(ΔPshutoff) + B,
  and Dynamic Torque TD = C(ΔPeff) — A, B, and C are per-valve-design factors
  (Tables 2-4/2-5 give real values for a V-notch ball valve and a
  high-performance butterfly valve with composition seals, by valve size and
  shaft diameter). Maximum rotation is the fully-open disk/ball angle —
  normally 90°, though some spring-return piston and spring-and-diaphragm
  actuators are limited to 60° or 75°; limiting rotation on a
  spring-and-diaphragm actuator allows higher initial spring compression
  (more breakout torque) but also changes the actuator lever's effective
  length as rotation changes, which published torque values for pneumatic
  actuators already account for.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2 'Actuator Sizing for Rotary Valves' / 'Torque Equations,' printed pp. 2-9–2-10 (PDF pages 34-35) — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-rotary-actuator-torque]
used-by: []
notes: >
  Read directly from PDF pages 34-35. **No figure exists for this section**
  — Tables 2-4/2-5 (the torque-factor data) and the Torque Equations text
  itself were flagged in this file's own prior Open Items as
  reference/procedural content out of figure-indexing scope; this topic
  entry captures the real equations and their reasoning, which the tables
  alone do not (a table of A/B/C values means nothing without the
  TB=A(ΔP)+B / TD=C(ΔPeff) equations they plug into).
```

```yaml
id: ogas-topic-actuator-selection-process-summary
kind: topic
concept-tags: [actuator selection, actuator feature comparison, control signal, fail-safe position, vendor expertise, single-source procurement]
status: current
teaches: >
  The fundamental actuator-selection requirement is knowing the application:
  control signal, operating mode, power source available, thrust/torque
  required, and fail-safe position drive most of the decision; simplicity,
  maintainability, and lifetime cost matter alongside raw capability. Real
  comparative tradeoffs across all four actuator types (Table 2-6): spring-
  and-diaphragm — lowest cost, inherent fail-safe, low supply pressure, but
  limited output and larger size/weight; pneumatic piston — high thrust,
  compact, adaptable to high ambient temperature, but higher cost and
  fail-safe requires added accessories/spring; electric motor — very high
  stiffness and output, but high cost, no inherent fail-safe, limited duty
  cycle, slow stroking; electro-hydraulic — high output/stiffness/throttling
  ability, but high cost, complex, fail-safe only via accessories. The
  chapter's own summary: consider spring-and-diaphragm first in most
  situations; use one manufacturer's actuators and accessories together to
  avoid integration problems, since actuator sizing itself is not
  conceptually difficult but the variety of real designs makes mastering all
  of them impractical without vendor expertise.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 2 'The Selection Process' / 'Actuator Selection Summary,' printed pp. 2-10–2-11 (PDF pages 35-36) — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-actuator-design-taxonomy]
used-by: []
notes: Read directly from PDF pages 35-36. Table 2-6 (Actuator Feature Comparison) is the real data behind this entry's comparative claims — the table itself stays uncatalogued as reference data, per this file's own standing practice for Tables 2-1 through 2-6.
```

### Chapter 2 — Accessory instruments: transducer, booster, controllers, digital level controller (printed pp. 2-13 – 2-14)

Third batch. Figures 2-13 through 2-17 — the chapter's closing run of
accessory-instrument product photos, immediately following the positioner /
digital-valve-controller figures (2-10 – 2-12) catalogued in the second
batch. This batch **confirms the chapter's real end page**: printed p. 2-14
(PDF page 39, Figure 2-17) is the chapter's last content; PDF page 40 begins
"Chapter 3 — Liquid Valve Sizing" with no further Chapter 2 figures. The
"Open items" note in earlier batches flagging this as unverified is resolved
below.

```yaml
id: ogas-cmp-i2p100-electropneumatic-transducer
teaches: >
  The i2P-100 electro-pneumatic transducer: a common actuator accessory that
  takes a milliamp signal and produces a proportional pneumatic output —
  compact, accurate, low air consumption.
concept-tags: [electro-pneumatic transducer, i2P-100, milliamp signal, proportional pneumatic output, low air consumption, actuator accessory]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-13 (drawing W8710, printed
      p. 2-13) — "Electro-pneumatic transducers are a common actuator
      accessory. They take a milliamp signal and produce a proportional
      pneumatic output. The i2P-100 is compact, accurate and has low air
      consumption."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig13-i2p100-electropneumatic-transducer.png
    locator: "already extracted — cropped directly from the source PDF (p. 38 / printed 2-13) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (explosion-proof housing, milliamp input / pneumatic
  output ports), no printed field callouts — a single-concept accessory
  figure, not a nomenclature source. Drawing number W8710 only. Top-left
  figure on the source page (printed p. 2-13, PDF page 38); Figure 2-15
  (`ogas-cmp-c1-pneumatic-controller`) is top-right on the same page — the
  source's own figure numbering again does not run strictly in reading
  order (2-13 top-left, 2-15 top-right, 2-14 bottom-left, 2-16
  bottom-right), the same pattern already flagged in
  `ogas-cmp-2052-splined-actuator-connection`'s notes.
```

```yaml
id: ogas-cmp-ss263-pneumatic-booster
teaches: >
  Pneumatic boosters (the SS-263 is the example): on fast control loops a
  positioner may not react quickly enough; performance of spring-and-
  diaphragm actuators can be improved by adding a pneumatic booster.
concept-tags: [pneumatic booster, SS-263, fast control loop, positioner response, spring-and-diaphragm actuator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-14 (drawing X0206, printed
      p. 2-13) — "On fast control loops, a positioner may not be able to
      react quickly enough to be of use. In these situations, performance
      of spring-and-diaphragm actuators can be improved by use of pneumatic
      boosters such as the SS-263."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig14-ss263-pneumatic-booster.png
    locator: "already extracted — cropped directly from the source PDF (p. 38 / printed 2-13) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo/rendering (relay-style booster body with a flanged
  process connection), no printed field callouts. Drawing number X0206
  only. Bottom-left figure on the source page (printed p. 2-13, PDF page
  38), beneath Figure 2-13; see that record's notes on the page's
  figure-number/position layout.
```

```yaml
id: ogas-cmp-c1-pneumatic-controller
teaches: >
  Pneumatic controllers (the Fisher C1 is the example) compare sensed
  process pressure (or differential pressure) against an operator-adjusted
  set point and send a pneumatic signal to an adjacent control valve that
  maintains the process pressure at or near the set point.
concept-tags: [pneumatic controller, C1, set point, process pressure, differential pressure, pneumatic signal, control valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-15 (drawing W9262-1, printed
      p. 2-13) — "Pneumatic controllers compare sensed process pressure (or
      differential pressure) with an operator-adjusted set point, and send
      a pneumatic signal to an adjacent control valve that maintains the
      process pressure at or near the set point. Fisher C1 controllers and
      transmitters continue the tradition of durable and dependable Fisher
      pressure instrumentation while addressing air or gas consumption
      concerns."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig15-c1-pneumatic-controller.png
    locator: "already extracted — cropped directly from the source PDF (p. 38 / printed 2-13) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (front panel with two gauges, "C1 Pneumatic Controller"
  faceplate, FISHER nameplate), no printed field callouts. Top-right figure
  on the source page (printed p. 2-13, PDF page 38); see
  `ogas-cmp-i2p100-electropneumatic-transducer`'s notes on the page's
  figure-number/position layout.
```

```yaml
id: ogas-cmp-l2e-electric-level-controller
teaches: >
  Displacer-type liquid level controllers (the L2e electric-output version
  is the example), used with on/off dump valves to control liquid level in
  upstream oil and gas production separators. The displacer sensor detects
  liquid level or the interface of two liquids of different specific
  gravities; the controller's output (electric or pneumatic) opens or closes
  the dump valve.
concept-tags: [liquid level controller, displacer, L2e, electric output, on/off dump valve, specific gravity interface, production separator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-16 (drawing X0214-1, printed
      p. 2-13) — "In the upstream oil and gas industry displacer type
      liquid level controllers along with on/off dump valves are used for
      controlling liquid level in oil and gas production separators. The
      controllers use a displacer sensor to detect liquid level or the
      interface of two liquids of different specific gravities. The output
      signal from the controller is either electric or pneumatic and sent
      to an on/off dump valve to open or close it. The L2e shown is the
      electric output version of this controller."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig16-l2e-electric-level-controller.png
    locator: "already extracted — cropped directly from the source PDF (p. 38 / printed 2-13) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (L2e housing with external displacer probe), no printed
  field callouts. Bottom-right figure on the source page (printed p. 2-13,
  PDF page 38), beneath Figure 2-15; see
  `ogas-cmp-i2p100-electropneumatic-transducer`'s notes on the page's
  figure-number/position layout. First liquid-level (rather than pressure/
  actuator) accessory in the chapter — a different instrumentation category
  from Figures 2-13/2-14/2-15, introduced here as the chapter transitions
  toward its close.
```

```yaml
id: ogas-cmp-fieldvue-dlc3010-digital-level-controller
teaches: >
  The FIELDVUE DLC3010 digital level controller: used with level sensors to
  measure liquid level, the level of the interface between two liquids, or
  liquid specific gravity (density). Changes in level or specific gravity
  exert a buoyant force on a displacer, which rotates a torque tube shaft;
  the digital level controller converts this rotational motion to an
  electronic signal used by a control valve to maintain the level or
  specific gravity set point.
concept-tags: [FIELDVUE, DLC3010, digital level controller, displacer, torque tube shaft, specific gravity, level set point]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 2 "Actuator Selection," Figure 2-17 (drawing W9954-1, printed
      p. 2-14) — "The FIELDVUE DLC3010 digital level controller is used
      with level sensors to measure liquid level, the level of the
      interface between two liquids, or liquid specific gravity (density).
      Changes in level or specific gravity exert a buoyant force on a
      displacer, which rotates a torque tube shaft. The digital level
      controller converts this rotational motion to an electronic signal
      that is used by a control valve to maintain the level or specific
      gravity set point."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch2-fig17-fieldvue-dlc3010-digital-level-controller.png
    locator: "already extracted — cropped directly from the source PDF (p. 39 / printed 2-14) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (DLC3010 housing with digital display showing "46.2 %"
  and a FIELDVUE Instruments end cap), no printed field callouts. Sole
  figure on printed p. 2-14 (PDF page 39) — the chapter's last page; PDF
  page 40 begins "Chapter 3 — Liquid Valve Sizing" with no further Chapter 2
  content, confirming the chapter's real end page (see this section's
  header note above). Digital counterpart to the L2e
  (`ogas-cmp-l2e-electric-level-controller`, Figure 2-16) — same displacer
  level-sensing principle, digital/FIELDVUE output instead of electric.
```

---

## Open items

- **First batch (Figures 2-1 through 2-6)** covers the chapter's opening
  actuator-type overview — spring-and-diaphragm (2-1, 2-2, 2-3) and piston
  (2-4, 2-5, 2-6). All six extracted and catalogued; no unresolved figures.
- **Second batch (Figures 2-7 through 2-12)** covers the chapter's
  remaining actuator examples (on-off piston, electric), the actuator-sizing
  seat-load chart, and the closing accessory figures (two positioners, the
  FIELDVUE digital valve controller). All six extracted and catalogued; no
  unresolved figures. Chapter 2's real end page was not verified in this
  batch — resolved by the third batch (see below).
- **Third batch (Figures 2-13 through 2-17)** covers the chapter's final
  run of accessory-instrument product photos (electro-pneumatic transducer,
  pneumatic booster, pneumatic controller, electric level controller,
  digital level controller). All five extracted and catalogued; no
  unresolved figures.
- **Tables 2-1 through 2-6 stay uncatalogued as reference data** (unbalance
  area, seat load per leak class, packing friction, rotary torque factors,
  actuator feature comparison), matching the same practice already applied
  to ch1's and ch3's own reference tables — but the real explanatory prose
  surrounding them is now captured by the `kind: topic` pass below, which
  resolves what was previously an open gap.
- **`kind: topic` pass added 2026-09-17** (real conceptual/methodology
  content from the chapter's own body prose, distinct from the figure
  captions above): 9 entries added —
  `ogas-topic-actuator-design-taxonomy`,
  `ogas-topic-positioner-booster-application-guidelines`,
  `ogas-topic-fail-safe-action-mechanism`,
  `ogas-topic-piston-actuator-design-variants`,
  `ogas-topic-electric-actuator-selection-factors`,
  `ogas-topic-electro-hydraulic-actuator-configurations`,
  `ogas-topic-actuator-force-sizing-methodology` (with the chapter's real
  worked bench-set/precompression example transcribed exactly),
  `ogas-topic-rotary-actuator-torque-sizing` (the real Breakout/Dynamic
  torque equations — Tables 2-4/2-5's A/B/C factor data stays uncatalogued
  as reference data, but the equations themselves are captured here),
  `ogas-topic-actuator-selection-process-summary`. Two of these
  (electro-hydraulic actuators, the torque-sizing equations) cover chapter
  sections that have **no figure at all** — genuinely invisible to the
  original figures-only pass, not merely under-covered by it. Chapter 2's
  real component count is now 26 (17 figures + 9 topics).
- **Chapter 2's real end page is now verified — resolved by the third
  batch.** Printed p. 2-14 (PDF page 39, Figure 2-17, the FIELDVUE DLC3010)
  is the chapter's last content. Confirmed by reading PDF page 40, which
  begins "Chapter 3 — Liquid Valve Sizing" with no further Chapter 2
  figures. The first two batches' "last page seen was p. 2-12, unverified
  past that" note is superseded.
- All seventeen records in this file (six + six + five across three
  batches) are `used-by: []` — this is a proactive, use-driven-ahead
  catalog per `Source Library.md`; no course currently references them.
- No asset-variant-registry or `Curriculum —` writes were made from either
  pass — out of scope for a standing Component-Index-only cataloging batch.
- **Overlap flagged, not merged:** `ogas-cmp-657-667-diaphragm-actuator-cutaways`
  (Figure 2-1) teaches the same 657/667 construction concept as 14101 ch3's
  `ch3-cmp-657-assembly` / `ch3-cmp-667-assembly-sealbushing`, but from a
  different source figure (Sourcebook Fig 2-1 vs. the 657/667 Instruction
  Manual figures ch3 cites). Kept as a separate record, consistent with the
  Component Index's own rule that a redraw/component is always specified
  against its own named source figure, never merged across documents on the
  assumption they teach "the same thing."
