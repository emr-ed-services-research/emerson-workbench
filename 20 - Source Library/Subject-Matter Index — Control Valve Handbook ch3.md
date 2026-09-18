---
title: Subject-Matter Index — Control Valve Handbook ch3
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: ch3 — Valve and Actuator Types
updated: 2026-09-11
---

# Teaching-Subject-Matter Index — Control Valve Handbook, Chapter 3

**Chapter 3 — "Valve and Actuator Types."** Standing library-cataloging pass,
NOT tied to any course — built ahead of Control Valve Basics or any other
course actually needing these figures, per `Source Library.md`'s "two ways a
subject-matter index gets triggered." Matches the Oil & Gas Sourcebook precedent's
rigor: every real page in the chapter's actual range was read directly, every
real figure was identified against the source, and no figure, drawing number,
caption, or "teaches" description below was invented.

**Real chapter boundary, confirmed by direct page reads, not assumed:**
Chapter 3 spans PDF pages 54–81 inclusive (this PDF has no printed-vs-PDF page
offset — PDF page 54 is the literal "Chapter 3 / Valve and Actuator Types"
divider page, matching printed page 54 exactly). PDF page 81 carries only "See
Additional Resources »" and the footer page number 81 — the real end of
Chapter 3's content, with no figures on it. PDF page 82 is the literal
"Chapter 4 / Control Valve Accessories" divider page.

Six batches cover the chapter's figures end to end, matching the chapter's
own subsection structure:

- **Batch 1** — Control Valve Styles (§3.1: globe, sanitary, rotary valve
  bodies), Figures 3.1–3.16, printed pp. 55–63.
- **Batch 2** — Control Valve End Connections (§3.2), Figures 3.17–3.18,
  printed pp. 64–65.
- **Batch 3** — Valve Body Bonnets (§3.3), Figures 3.19–3.24 (the first of two
  figures captioned "3.24" — see Open Items), printed pp. 65–67.
- **Batch 4** — Control Valve Packing (§3.4), Figure 3.24 (the second, packing
  arrangements — see Open Items) through Figure 3.36, printed pp. 68–74.
- **Batch 5** — Characterization of Cage-Guided Valve Bodies (§3.5), Valve
  Plug Guiding (§3.6), and Restricted-Capacity Control Valve Trim (§3.7),
  Figures 3.37–3.42, printed pp. 74–77.
- **Batch 6** — Actuators (§3.8), Figures 3.43–3.52, printed pp. 77–80. Figure
  3.43 is cross-referenced rather than catalogued fresh — see below.

All figures are from `20 - Source Library/Control Valve Handbook/Control Valve
Handbook - Sixth Edition.pdf`. Tables are deliberately not catalogued as
components (same practice as the Oil & Gas precedent). Every record's
`used-by` is `[]` — none are placed on a slide yet; Control Valve Basics (or
any future course) resolves against these entries instead of triggering
reactive cataloging.

Record shape matches `Subject-Matter Index — Oil & Gas Sourcebook ch1.md` and
`Subject-Matter Index — 14101 ch3.md`: `id` · `teaches` · `concept-tags` ·
`status` · `source` (`doc` + `locator`) · `delivery` · `used-by` · `notes`.
No image crops have been extracted for this pass, so each record carries a
single `source` entry (the real document + locator) rather than the two-entry
shape used where a crop already exists.

**Cross-reference to 14101, checked directly:** §3.8.1's diaphragm-actuator
material and its Figure 3.43 are already catalogued in `Subject-Matter Index —
14101 ch3.md` — `ch3-cmp-da-schematic` (left panel, direct-acting, citing
"§3.8.1, Figure 3.43 (left panel)") and `ch3-cmp-ra-schematic` (right panel,
reverse-acting, citing "§3.8.1, Figure 3.43 (right panel)"). Figure 3.43 is
therefore **not** re-catalogued fresh here under a `cvh-cmp-` id — see Batch 6
and Open Items. `Subject-Matter Index — bench-set-657.md` was also checked; it
cites Archive D750004/D750066 bench-set material only, no Figure 3.43
citation, so no further cross-reference was needed there. Every other real
figure in the chapter — globe/rotary valve styles, end connections, bonnets,
packing systems, characterization, plug guiding, restricted-capacity trim,
and every actuator type beyond the one already-indexed diaphragm figure — is
catalogued fresh below.

## Precedence

The Control Valve Handbook, 6th ed. (D101881X012, Aug 2023) is a first-party,
current Emerson/Fisher document — the same bucket `Subject-Matter Index — 14101
ch3.md` already assigns it in its own source-precedence table. Every record
below is `status: current`. No archive or legacy material was consulted for
this batch.

## Components

### Batch 1 — Control Valve Styles: globe, sanitary, and rotary valve bodies (printed pp. 55–63)

```yaml
id: cvh-cmp-flanged-angle-valve-body
teaches: >
  The angle-style control valve body: a single-port, cage-style-construction
  body commonly used in boiler feedwater and heater drain service and in
  piping schemes where space is at a premium, where the valve can also serve
  as an elbow. Other variants may have expanded outlet connections,
  restricted trim, or outlet liners for erosion, flashing, or cavitation
  damage reduction.
concept-tags: [globe valve, angle valve, single port, cage-style trim, boiler feedwater, heater drain]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.1.1 Single-Port Valve Bodies, Figure 3.1 (printed p. 55) —
      "Flanged Angle-Style Control Valve Body."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-020.html}]
notes: >
  A photographic body cutaway/profile, not a labelled-callout diagram — no
  printed field labels to preserve under Style Guide §6.3.
```

```yaml
id: cvh-cmp-bar-stock-valve-body
teaches: >
  A bar-stock single-port valve body — the alloy-material alternative to a
  casting or forging, used when exotic corrosion-resistant metal alloys are
  required and a bar-stock body proves less expensive than a cast one. A
  polymer-lined variant may also be used for corrosive service.
concept-tags: [globe valve, single port, bar stock construction, alloy body, corrosion resistance]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.1.1 Single-Port Valve Bodies, Figure 3.2 (printed p. 56) — "Bar
      Stock Valve Body."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-020.html}]
notes: >
  Sits on the same page as `cvh-cmp-single-ported-globe-valve-body` (Figure
  3.3) — the two are printed side by side as a pair of single-port body
  examples.
```

```yaml
id: cvh-cmp-single-ported-globe-valve-body
teaches: >
  A post-guided, single-ported globe-style control valve body — one of the
  more popular post-guided styles, widely used in process control
  applications, particularly NPS 1-4 (DN 20-100). Normal flow direction is
  most often up through the seat ring.
concept-tags: [globe valve, single port, post-guided, process control, NPS 1-4]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.1.2 Post- and Port-Guided Valve Bodies, Figure 3.3 (printed p. 56)
      — "Single-Ported Globe-Style Valve Body."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-019.html}]
notes: >
  Paired on the same page with `cvh-cmp-bar-stock-valve-body` (Figure 3.2).
  Crop corrected 2026-09-14: the original crop included a stray, partially-cut fragment of the source page's own printed caption line baked into the image. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-cage-style-trim-balanced-plug-soft-seat
teaches: >
  Cage-style trim: the cage provides valve plug guiding, seat ring
  retention, and flow characterization. In balanced designs (shown here),
  downstream pressure acts on both the top and bottom sides of the valve
  plug, nullifying most of the static unbalanced force — this permits
  operation with a smaller actuator than an unbalanced valve of similar
  capacity would need. The figure also shows a soft (non-metal) seat.
concept-tags: [globe valve, cage-style trim, balanced valve plug, soft seat, plug guiding, seat ring retention, flow characterization]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.1.3 Cage-Style Valve Bodies, Figure 3.4 (printed p. 57) — "Valve
      Body with Cage-Style Trim, Balanced Valve Plug, and Soft Seat."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-019.html}]
notes: >
  Cutaway cross-section; printed side by side on p. 57 with
  `cvh-cmp-double-ported-globe-valve-body-reverse-acting` (Figure 3.5) as a
  cage-style vs. double-ported contrast pair.
```

```yaml
id: cvh-cmp-double-ported-globe-valve-body-reverse-acting
teaches: >
  A double-ported globe-style valve body, captioned "reverse-acting" and
  shown (per the source's own body text) assembled for push-down-to-open
  valve plug action — double-ported designs can be assembled either
  push-down-to-open or push-down-to-close. Dynamic force on the plug tends
  to be balanced, since flow tends to open one port and close the other,
  which can permit a smaller actuator than an equivalent single-ported
  unbalanced body. Metal-to-metal seating on these bodies usually provides
  Class II shutoff (Class III also possible). The industry has
  predominantly moved away from double-ported designs; they were
  historically used in refineries on highly viscous fluids or where
  contaminant/deposit buildup on the trim was a concern.
concept-tags: [globe valve, double-ported, reverse-acting, push-down-to-open, push-down-to-close, balanced dynamic force, Class II shutoff]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.1.4 Double-Ported Valve Bodies, Figure 3.5 (printed p. 57) —
      "Reverse-Acting Double-Ported Globe-Style Valve Body."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-019.html}]
notes: >
  The source's own caption ("Reverse-Acting") and its own body-text
  description ("assembled for push-down-to-open valve plug action")
  describe the same figure in what reads as two different action terms —
  carried here verbatim from the source rather than reconciled or silently
  corrected; flagged in Open Items.
```

```yaml
id: cvh-cmp-three-way-globe-valve-cutaway
teaches: >
  A three-way globe valve body with a balanced valve plug, shown in the
  cylindrical plug's mid-travel position — this position opens the bottom
  common port to both the right-hand and left-hand ports, illustrating
  throttling mid-travel control of either converging (flow-mixing) or
  diverging (flow-splitting) service. Variations include cage-, port-, and
  stem-guided designs.
concept-tags: [globe valve, three-way valve, balanced plug, converging flow, diverging flow, mid-travel throttling]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.1.5 Three-Way Valve Bodies, Figure 3.6 (printed p. 58) —
      "Three-Way Globe Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-020.html}]
notes: >
  Cutaway cross-section, alone on its page.
  **Id split, 2026-09-18:** this record's id was `cvh-cmp-three-way-globe-valve`
  until this date, a real, live collision with `Subject-Matter Index — Control
  Valve Handbook ch1.md`'s own Figure 1.8 record, which used the identical
  id for a genuinely different figure. `used-by` was also wrong before this
  fix — it listed `cvb-020.html` (this figure, confirmed) alongside
  `cvb-008.html` (which actually uses the ch1 overview photo, not this one).
  Corrected in both files; see `cvh-cmp-three-way-globe-valve-overview` in
  ch1's index for the other half of the split.
  **`used-by` is CVB-only by convention** (bare slide filenames, unqualified
  by course) — this figure is also genuinely used by three other courses'
  real slides/content, confirmed by checking each one's actual image
  reference rather than assuming: CVE1's `cve1-002.html`, CVE1-Independent's
  `cve1b-002.html`, and CVE1-Verify's course data (Stage 3 never ran for
  that scratch course, so no slide file exists to name). Not added to the
  `used-by` array above — the schema has no established convention for a
  cross-course reference, and a bare filename here would be ambiguous
  against another course's own same-numbered slide. Flagging this as an
  open schema question rather than inventing a convention solo.
```

```yaml
id: cvh-cmp-butterfly-shaft-offset-disc-center
teaches: >
  Shaft centerline offset from the disc center — the mechanical geometry
  underlying single- vs. double-offset butterfly valve body classification.
  Immediately precedes a table (not catalogued) differentiating single- and
  double-offset availability by valve size (up to NPS 12 for both; NPS >12
  through 36 single-offset only).
concept-tags: [rotary valve, butterfly valve, single offset, double offset, shaft centerline]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.1 Butterfly Valve Bodies, Figure 3.7 (printed p. 59) — "Shaft
      Center Line Offset with Disc Center."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-021.html}]
notes: A schematic geometry diagram, not a body cutaway or photo.
```

```yaml
id: cvh-cmp-segmented-v-notch-ball
teaches: >
  Segmented ball valve construction: similar to a conventional ball valve,
  but with a patented, contoured V-notch segment in the ball, producing an
  equal-percentage flow characteristic. Good rangeability, control, and
  shutoff capability; used in paper, chemical, sewage treatment, power, and
  petroleum refining industries. The ball stays in contact with the seal
  during rotation, producing a shearing effect that minimizes clogging —
  suited to erosive/viscous fluids, paper stock, or slurries with entrained
  solids or fibers.
concept-tags: [rotary valve, segmented ball, V-notch, equal-percentage, rangeability, shearing effect, slurry service]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.2 Segmented Ball Valve Bodies, Figure 3.8 (printed p. 59) —
      "Segmented V-Notch Ball."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Shows the ball/segment component itself, not a full body cutaway; pairs
  conceptually with `cvh-cmp-ball-valve-cavitation-noise-options` (Figure
  3.10), the noise/cavitation options figure for this same valve family.
```

```yaml
id: cvh-cmp-butterfly-control-valve
teaches: >
  A complete butterfly control valve body — bodies require minimum
  installation space, provide low pressure loss, mate with standard
  raised-face ASME and DN flanges, and are available in sizes through NPS 72
  (DN 1800). Larger/high-pressure-drop applications may need high-output or
  large actuators due to large operating torques; smaller sizes commonly use
  diaphragm, piston, or modern rotary actuator styles.
concept-tags: [rotary valve, butterfly valve, low pressure loss, ASME flange, DN flange, high torque]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.1 Butterfly Valve Bodies, Figure 3.9 (printed p. 60) —
      "Butterfly Control Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-021.html}]
notes: Full-body photo/cutaway, the chapter's introductory butterfly-valve image.
```

```yaml
id: cvh-cmp-ball-valve-cavitation-noise-options
teaches: >
  Ball valve trim options for moderate noise and cavitation protection —
  Emerson's additional options for segmented ball control valves used in
  erosive/viscous/slurry service.
concept-tags: [rotary valve, segmented ball, noise attenuation, cavitation protection, trim options]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.2 Segmented Ball Valve Bodies, Figure 3.10 (printed p. 60) —
      "Ball Valve Options."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-023.html}]
notes: Companion figure to `cvh-cmp-segmented-v-notch-ball` (Figure 3.8), same section.
```

```yaml
id: cvh-cmp-high-performance-butterfly-valve
teaches: >
  High-performance butterfly control valve body: provides a linear flow
  characteristic through 90 degrees of disk rotation. Double offset mounting
  pulls the disk away from the seal after it begins to open, minimizing seal
  wear. Available through NPS 48 (DN 1200), compatible with standard ASME
  flanges. Uses standard spring-and-diaphragm, piston, electric, or
  electro-hydraulic rotary actuators. Intended for general-service
  applications, not precision throttling — control range is roughly one
  third that of ball or globe-style valves.
concept-tags: [rotary valve, high-performance butterfly, linear characteristic, double offset, seal wear, general service]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.3 High-Performance Butterfly Valve Bodies, Figure 3.11 (printed
      p. 61) — "High-Performance Butterfly Control Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-021.html}]
notes: Full-body photo, alone at the top of its section.
```

```yaml
id: cvh-cmp-pressure-assisted-seal-configuration
teaches: >
  A bi-directional pressure-assisted seal ring configuration, offered as an
  eccentric plug valve option to provide exceptionally tight shutoff.
concept-tags: [rotary valve, eccentric plug, pressure-assisted seal, tight shutoff, bi-directional flow]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.4 Eccentric Plug Valve Bodies, Figure 3.12 (printed p. 61) —
      "Pressure Assisted Seal Configuration."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-023.html}]
notes: A component-level seal detail, not a full valve cutaway.
```

```yaml
id: cvh-cmp-eccentric-plug-valve-body
teaches: >
  Eccentric plug valve body construction: the rugged body/trim design
  handles temperatures to 427°C (800°F) and shutoff pressure drops to 1500
  psi (103 bar). The path of the eccentric disk minimizes contact with the
  seat ring on opening, reducing seat wear and friction, prolonging seat
  life, and improving throttling performance. Self-centering seat ring and
  rugged disk allow forward or reverse flow with tight shutoff in either
  direction; disk/seat ring/retainer are available in hardened materials
  including ceramics and carbides for erosion resistance. Suits erosive,
  coking, and other hard-to-handle fluids in mining, petroleum refining,
  power, and pulp/paper industries.
concept-tags: [rotary valve, eccentric plug, high temperature, tight shutoff, erosion resistance, ceramic disk]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.4 Eccentric Plug Valve Bodies, Figure 3.13 (printed p. 62) —
      "Eccentric Plug Control Valve Body."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-022.html}]
notes: >
  Printed on a dense page alongside `cvh-cmp-full-port-ball-control-valve`
  (Figure 3.14) and `cvh-cmp-full-port-ball-valve-trunnion` (Figure 3.15) —
  all three are compact photo/cutaway images on the same printed page.
```

```yaml
id: cvh-cmp-full-port-ball-control-valve
teaches: >
  A full-port ball control valve — as a throttling device it must rotate 15
  to 20 degrees in the wide-open position before absorbing significant
  energy from the system (additional process control lag versus a reduced-
  bore or attenuated device, which absorbs a small amount of pressure wide
  open). Full-port ball valves present little or no restriction to flow and
  allow for pigging when not attenuated.
concept-tags: [rotary valve, ball valve, full-port, throttling lag, pigging, attenuation]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.5 Full-Port Ball Valve Bodies, Figure 3.14 (printed p. 62) —
      "Full-Port Ball Control Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Distinguish from `cvh-cmp-full-port-ball-valve-trunnion` (Figure 3.15) —
  the source uses two very similar captions ("Full-Port Ball Control Valve"
  vs. "Full-Port Ball Valve") for two different real figures; disambiguate
  by figure number, same practice as the Oil & Gas precedent's Figures
  1-15/1-16.
```

```yaml
id: cvh-cmp-full-port-ball-valve-trunnion
teaches: >
  Special-design, three-piece trunnion-mounted, full-bore control valve for
  automated control in bypass, batch, monitor, and emergency shutoff service
  applications — presents little or no flow restriction, and is fire tested
  and certified for API 6 and 6FA.
concept-tags: [rotary valve, ball valve, full-port, trunnion mounted, three-piece, API 6FA, emergency shutoff]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.5 Full-Port Ball Valve Bodies, Figure 3.15 (printed p. 62) —
      "Full-Port Ball Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-022.html}]
notes: >
  See disambiguation note on `cvh-cmp-full-port-ball-control-valve` (Figure 3.14).
  Crop corrected 2026-09-14: the original crop included a truncated fragment of the printed caption ("...ure 3.15 Full-Port Ball Valve") immediately followed by an unrelated stray section heading from later on the same page ("1.3.6 Multi-Port Flow Selector"). Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-multi-port-flow-selector-valve
teaches: >
  A multi-port flow selector valve: connects to eight input lines, allowing
  isolation, diversion, and testing of fluid from any individual line
  through a rotating plug, while the remaining seven lines continue flowing
  to a common group outlet — enables testing/diversion of one line without
  disrupting production on the others. Four main components: body, bonnet,
  rotor plug, and actuator.
concept-tags: [rotary valve, multi-port flow selector, rotor plug, flow diversion, eight-input manifold]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.1.3.6 Multi-Port Flow Selector, Figure 3.16 (printed p. 63) —
      "Multi-Port Flow Selector Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-023.html}]
notes: The last figure of §3.1; §3.2 End Connections begins immediately after on the same printed page.
```

```yaml
id: cvh-topic-valve-body-fundamentals
kind: topic
concept-tags: [valve body requirements, containment, capacity, end connections, actuator attachment]
status: current
teaches: >
  Every control valve body, regardless of style, must satisfy four
  fundamental requirements: contain the fluid without external leakage;
  have adequate capacity for the intended service; withstand the erosive,
  corrosive, and temperature effects of the process; and incorporate
  appropriate end connections plus actuator-attachment means to transmit
  actuator thrust to the valve stem or shaft. Every body-style tradeoff
  described in the rest of this section is measured against these four.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.1, p.55 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-globe-valve-body-selection, cvh-topic-rotary-valve-body-selection]
used-by: []
notes: Read directly from the chapter's opening prose (PDF p.55) via pdftotext.
```

```yaml
id: cvh-topic-globe-valve-body-selection
kind: topic
concept-tags: [globe valve, single-port, double-port, three-way, sanitary valve, unbalanced plug, balanced plug]
status: current
teaches: >
  Globe-style valve bodies (single-port, double-port, three-way, sanitary)
  trade off differently on unbalanced vs. balanced plug force, capacity,
  and application fit. Single-port is simplest and most common but
  presents the full unbalanced port area to the actuator unless
  cage/retainer construction is used; guiding method (stem/port/bonnet)
  further sets whether the plug is balanced or unbalanced by size.
  Double-ported designs balance dynamic plug force by opening one port
  while closing the other, permitting a smaller actuator for the same
  capacity, but the industry has moved away from them (historically used
  for viscous or contaminated fluids). Three-way valves converge or
  diverge flow through three pipeline connections; actuator sizing needs
  particular care for unbalanced-plug three-way constructions. Sanitary
  valve bodies trade standard materials/finishes for FDA/3A/USP-certified,
  self-draining, CIP/SIP-compatible construction for pharmaceutical/
  biotech service.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.1.1, §3.1.1.1-3.1.1.5, §3.1.2, pp.55-58 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-flanged-angle-valve-body, cvh-cmp-bar-stock-valve-body, cvh-cmp-single-ported-globe-valve-body, cvh-cmp-cage-style-trim-balanced-plug-soft-seat, cvh-cmp-double-ported-globe-valve-body-reverse-acting, cvh-cmp-three-way-globe-valve-cutaway]
relatedTopics: [cvh-topic-valve-body-fundamentals, cvh-topic-valve-plug-guiding-methods]
used-by: []
notes: Read directly from §3.1.1-3.1.2's real prose (PDF pp.55-58) via pdftotext; all six relatedFigures ids confirmed to exist in this same file before citing.
```

```yaml
id: cvh-topic-rotary-valve-body-selection
kind: topic
concept-tags: [butterfly valve, segmented ball valve, eccentric plug valve, full-port ball valve, rangeability, rotary valve]
status: current
teaches: >
  Rotary valve styles (butterfly, segmented ball, high-performance
  butterfly, eccentric plug, full-port ball, multi-port selector) trade
  rangeability, erosion resistance, torque, and cost differently. Standard
  butterfly valves are economical and compact but exhibit roughly
  equal-percentage characteristic and can need high-output actuators at
  large size or high pressure drop; high-performance (double-offset)
  butterfly valves give linear characteristic through 90° of rotation
  with reduced seal wear, but a control range only about one-third that
  of ball or globe valves, requiring careful sizing to avoid control
  problems as process load changes. Segmented V-notch ball valves give
  good rangeability (>300:1), control, and shutoff, and suit erosive,
  viscous, or slurry service; the ball's continuous seal contact produces
  a shearing, self-cleaning action. Eccentric plug valves minimize seat
  wear and friction via a disk path that clears the seat on opening,
  handle high temperature and pressure drop, and are available in
  hardened/ceramic materials for erosion resistance. Full-port ball
  valves present little to no flow restriction (allowing pigging) but
  must rotate 15-20° before absorbing significant pressure drop, so a
  reduced-bore or attenuated design is typically needed for real
  throttling duty. Actuator selection must account for these differing
  torque/force demands in every case.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.1.3, §3.1.3.1-3.1.3.6, pp.58-63 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-butterfly-shaft-offset-disc-center, cvh-cmp-segmented-v-notch-ball, cvh-cmp-butterfly-control-valve, cvh-cmp-ball-valve-cavitation-noise-options, cvh-cmp-high-performance-butterfly-valve, cvh-cmp-pressure-assisted-seal-configuration, cvh-cmp-eccentric-plug-valve-body, cvh-cmp-full-port-ball-control-valve, cvh-cmp-full-port-ball-valve-trunnion, cvh-cmp-multi-port-flow-selector-valve]
relatedTopics: [cvh-topic-valve-body-fundamentals, cvh-topic-actuator-type-selection]
used-by: []
notes: Read directly from §3.1.3's real prose (PDF pp.58-63) via pdftotext; all ten relatedFigures ids confirmed to exist in this same file before citing.
```

### Batch 2 — Control Valve End Connections (printed pp. 64–65)

```yaml
id: cvh-cmp-bolted-flange-end-connections
teaches: >
  The three common bolted-flange end-connection styles: flat-face (matching
  flanges in full-face contact with the gasket, common on low-pressure cast
  iron/brass valves), raised-face (a circular raised sealing face, standard
  on Class 250 cast iron and steel/alloy bodies through 6000 psig / 815°C),
  and ring-type joint (a U-shaped groove with a metal ring gasket, used to
  15,000 psig on steel/alloy bodies, generally not for high temperature).
concept-tags: [end connections, bolted flange, flat-face, raised-face, ring-type joint]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.2.2 Bolted Gasketed Flanges, Figure 3.17 (printed p. 64) — "Popular
      Varieties of Bolted Flange Connections."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-024.html}]
notes: >
  Three stacked line-art cross-sections with their own printed labels
  (Flat-Face, Raised-Face, Ring-Type Joint) — Style Guide §6.3 applies if
  ever placed on a slide (no re-marking with numbered circles). This is
  CVH's own version of the same three end-connection styles the Oil & Gas
  Sourcebook catalogues separately as `ogas-cmp-bolted-flange-end-connections`.
```

```yaml
id: cvh-cmp-welded-end-connections
teaches: >
  The two common welded end-connection styles: socket weld-ends (the pipe
  slips into a bored socket, joined with a fillet weld — dimensionally the
  same regardless of pipe schedule, usually NPS 2 / DN 50 and smaller) and
  butt weld-ends (beveled ends joined to the pipeline with a full-penetration
  weld, usable on all valve styles, generally NPS 2-1/2 / DN 65 and larger).
  Welded ends are leak-tight at all pressures/temperatures and economical,
  but more difficult to remove from the pipeline than flanged ends.
concept-tags: [end connections, welded ends, socket weld, butt weld]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.2.3 Welded End Connections, Figure 3.18 (printed p. 65) — "Common
      Welded End Connections."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-024.html}]
notes: >
  Two stacked line-art cross-sections with their own printed labels (Socket
  Weld-Ends, Butt Weld-Ends) — §6.3 applies if ever placed on a slide. Same
  page as `cvh-cmp-typical-bonnet-flange-stud-bolts` (Figure 3.19), which
  opens §3.3 immediately after.
```

```yaml
id: cvh-topic-end-connection-selection
kind: topic
concept-tags: [screwed ends, flanged ends, welded ends, end connection selection]
status: current
teaches: >
  The three common control valve end-connection methods trade economy
  against serviceability and temperature range. Screwed (NPT) ends are
  the most economical, but limited to NPS 2 or smaller, not recommended
  at elevated temperature, and complicate valve removal since a
  flanged/union joint elsewhere in the line must be broken to unscrew the
  body from the pipeline. Bolted gasketed flanges (flat-face, raised-face,
  ring-type-joint) are easily removed and cover the full working range
  most control valves are built for, from near absolute zero to ~815°C,
  and are the only style available on all valve sizes; flat-face suits
  low-pressure cast-iron/brass bodies, raised-face is standard on
  steel/alloy bodies, and ring-type-joint suits the highest pressures (to
  15,000 psig) but not high temperature. Welded ends (socket-weld to NPS
  2, butt-weld for NPS 2-1/2 and larger) are leak-tight at all
  pressures/temperatures and economical, but are far harder to remove
  from the line and limited to weldable materials; low-temperature
  composition trim must be removed before welding to avoid heat damage.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.2, §3.2.1-3.2.4, pp.63-65 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-bolted-flange-end-connections, cvh-cmp-welded-end-connections]
relatedTopics: [cvh-topic-valve-body-fundamentals]
used-by: []
notes: Read directly from §3.2's real prose (PDF pp.63-65) via pdftotext.
```

### Batch 3 — Valve Body Bonnets (printed pp. 65–67)

```yaml
id: cvh-cmp-typical-bonnet-flange-stud-bolts
teaches: >
  The most common bolted-flange bonnet type: a bonnet with an integral
  flange, made of the same material as (or an equivalent forged material to)
  the valve body since it is a pressure-containing member. The
  body-bonnet bolting compresses a flat sheet gasket at the body-bonnet
  joint, a spiral-wound gasket atop the cage, and another flat sheet gasket
  below the seat ring — providing the seat ring-body seal and aligning the
  cage (and thus the plug/stem) for proper assembly. The packing-follower is
  typically retained by a flange on the bonnet's yoke boss area (shown here).
concept-tags: [bonnet, bolted flange bonnet, body-bonnet joint, gasket, packing follower, cage alignment]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.3 Valve Body Bonnets, Figure 3.19 (printed p. 65) — "Typical
      Bonnet, Flange, and Stud Bolts."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-026.html}]
notes: >
  Opens §3.3; the chapter-boundary anchor figure for the bonnets section.
  Crop corrected 2026-09-14: the original crop included the source page's own printed caption line. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-bonnet-variations
teaches: >
  A photographic array illustrating the range of bonnet constructions used
  across globe/angle valve bodies, positioned at the start of §3.3.1
  Extension Bonnets — introduces the topic of bonnet variation before the
  cast-vs-fabricated extension bonnet discussion that follows.
concept-tags: [bonnet, bonnet variations, extension bonnet introduction]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.3.1 Extension Bonnets, Figure 3.20 (printed p. 66) — "Bonnet
      Variations."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-026.html}]
notes: >
  Low-confidence on the specific bonnet variants shown: the source page text
  does not enumerate which individual bonnet styles appear in this
  photograph beyond the general topic it introduces, and the image itself
  was not visually inspected (text-extraction only). Flagged in Open Items —
  do not assume specific bonnet types for this figure beyond "a range of
  bonnet constructions" without a direct visual check first.
  Crop corrected 2026-09-14: the original crop included the printed caption line, and the source photos are inherently modest-resolution (small inset photos, not full-page figures) — re-rendered the source page at 600dpi instead of 300dpi, which measurably sharpens the two caption boxes ("Plain Bonnet" / "Extension bonnet") even though the photos themselves retain the source's own halftone graininess (a print-quality property, not a cropping defect).
```

```yaml
id: cvh-cmp-fabricated-extension-bonnet
teaches: >
  A fabricated extension bonnet — extension bonnets protect valve stem
  packing from extreme process temperatures by moving the packing box far
  enough from the process that packing temperature stays in the
  recommended range. Fabricated extensions (smooth surfaces, e.g. stainless
  steel tubing) are preferred for cold service, since heat influx is the
  major concern there; cast extensions (the alternative, not shown here)
  offer better high-temperature service via greater heat emissivity /
  cooling effect. Wall thickness is minimized on either type to cut down
  heat transfer.
concept-tags: [bonnet, extension bonnet, fabricated construction, cold service, packing temperature protection]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.3.1 Extension Bonnets, Figure 3.21 (printed p. 66) — "Valve Body
      with Fabricated Extension Bonnet."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-026.html}]
notes: >
  Printed side by side with `cvh-cmp-bonnet-variations` (Figure 3.20) on the same page.
  Crop corrected 2026-09-14: the original crop cut off the top of the valve (bonnet cap and handwheel) and separately included a stray line of body-text from the paragraph above. Re-cropped to the complete figure with no stray text.
```

```yaml
id: cvh-cmp-enviroseal-bellows-seal-bonnet
teaches: >
  An ENVIRO-SEAL bellows seal bonnet — used when essentially no stem leakage
  (less than 1×10⁻⁶ cc/sec of helium) can be tolerated, typically for toxic,
  volatile, radioactive, or very expensive process fluids. This special
  bonnet construction protects both the stem and the valve packing from
  contact with the process fluid; a standard or environmental packing box
  above the bellows unit guards against catastrophic failure if the bellows
  ruptures.
concept-tags: [bonnet, bellows seal, ENVIRO-SEAL, zero leakage, toxic service, stem protection]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.3.2 Bellows Seal Bonnets, Figure 3.22 (printed p. 67) —
      "ENVIRO-SEAL Bellows Seal Bonnet."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-027.html}]
notes: >
  Opens §3.3.2; companion to `cvh-cmp-welded-leaf-bellows` (Figure 3.23) and
  `cvh-cmp-mechanically-formed-bellows` (Figure 3.24) — this figure shows the
  full bonnet assembly, the other two show the two bellows-element
  manufacturing styles used inside it.
  Crop corrected 2026-09-14: the original crop included the printed caption line and cut off the top of the figure. Re-cropped to the complete figure alone.
```

```yaml
id: cvh-cmp-welded-leaf-bellows
teaches: >
  The welded-leaf bellows design — offers a shorter total package height
  than the mechanically-formed alternative. Due to its manufacturing method
  and inherent design, service life may be limited.
concept-tags: [bonnet, bellows seal, welded-leaf bellows, package height, service life]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.3.2 Bellows Seal Bonnets, Figure 3.23 (printed p. 67) —
      "Welded-Leaf Bellows."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-027.html}]
notes: >
  Contrast pair with `cvh-cmp-mechanically-formed-bellows` (Figure 3.24, bellows).
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-mechanically-formed-bellows
teaches: >
  The mechanically-formed bellows design — taller than the welded-leaf
  design, but produced with a more repeatable manufacturing process and
  therefore higher reliability.
concept-tags: [bonnet, bellows seal, mechanically-formed bellows, manufacturing reliability]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.3.2 Bellows Seal Bonnets, Figure 3.24 (printed p. 67) —
      "Mechanically-Formed Bellows."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-027.html}]
notes: >
  This is the FIRST of two real, distinct figures both captioned "Figure
  3.24" in the source document — confirmed by direct page reads: this one is
  on printed p. 67 (§3.3.2 Bellows Seal Bonnets); the second is on printed p.
  68 (§3.4 Control Valve Packing, "Packing Material Arrangements for
  Globe-Style Valve Bodies" — see `cvh-cmp-packing-material-arrangements-globe`
  in Batch 4). This is a genuine source-document duplicate figure number,
  not an extraction artifact or an error introduced in this catalog — see
  Open Items.
  Crop corrected 2026-09-14: the original crop included the printed caption line and a stray fragment of the section heading above the figure. Re-cropped to the figure alone.
```

```yaml
id: cvh-topic-bonnet-function-and-types
kind: topic
concept-tags: [bonnet, packing box, extension bonnet, bellows seal bonnet, pressure retaining]
status: current
teaches: >
  The bonnet is the part of a globe/angle valve body assembly the plug
  stem moves through — it is a pressure-retaining component, provides the
  actuator-mounting means, and houses the packing box; rotary valves
  generally have no bonnet (packing is housed in the body or a separate
  bolted component). On cage/retainer-trim bodies, the bonnet also
  supplies the bolting-up loading force that seals the body-bonnet joint,
  the cage-top gasket, and the seat-ring-to-body gasket, and it aligns
  the cage (which in turn guides the plug) to keep plug/seat/packing
  alignment correct. Extension bonnets move the packing box away from
  process-temperature extremes so packing temperature stays in its rated
  range — cast extensions give better high-temperature cooling via
  emissivity, fabricated (e.g. stainless tubing) extensions suit cold
  service by minimizing heat influx, and wall thickness is kept thin
  either way to limit heat transfer. Bellows seal bonnets eliminate stem
  leakage entirely (<1x10-6 cc/sec helium) for toxic/volatile/radioactive/
  expensive fluids by sealing the stem from the process with a bellows,
  backed by a standard/environmental packing box above it as a
  catastrophic-failure backup; welded-leaf bellows are shorter but may
  have limited service life, mechanically-formed bellows are taller but
  more reliable.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.3, §3.3.1, §3.3.2, pp.65-67 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-typical-bonnet-flange-stud-bolts, cvh-cmp-bonnet-variations, cvh-cmp-fabricated-extension-bonnet, cvh-cmp-enviroseal-bellows-seal-bonnet, cvh-cmp-welded-leaf-bellows, cvh-cmp-mechanically-formed-bellows]
relatedTopics: [cvh-topic-valve-body-fundamentals]
used-by: []
notes: Read directly from §3.3's real prose (PDF pp.65-67) via pdftotext.
```

### Batch 4 — Control Valve Packing (printed pp. 68–74)

```yaml
id: cvh-cmp-packing-material-arrangements-globe
teaches: >
  Two labelled packing-arrangement diagrams for globe-style valve bodies.
  "Standard TFE V-Ring" (upper wiper, packing follower, female adapter,
  V-ring, male adapter, washer, spring, packing box, lower wiper) and
  "Graphite Packing Arrangements" (filament ring, lantern ring, laminated
  ring, with a noted location for a sacrificial zinc washer if necessary),
  each shown in Single, Double, and Leak-Off configuration variants.
concept-tags: [packing, TFE V-ring, graphite packing, lantern ring, filament ring, laminated ring, single/double/leak-off arrangement]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4 Control Valve Packing, Figure 3.24 (printed p. 68) — "Packing
      Material Arrangements for Globe-Style Valve Bodies."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-028.html}]
notes: >
  This is the SECOND of two real, distinct figures both captioned "Figure
  3.24" in the source — see `cvh-cmp-mechanically-formed-bellows` (Batch 3)
  for the first, and Open Items for the confirmed source duplicate. Both
  panels here carry their own printed field callouts (numbered 1–9 for the
  TFE V-Ring, numbered 1–3 plus a zinc-washer note for the graphite
  arrangements) — Style Guide §6.3 applies if ever placed on a slide.
```

```yaml
id: cvh-cmp-voc-ldar-measurement-frequency
teaches: >
  A decision-flow diagram for LDAR (Leak Detection and Repair) monitoring
  frequency for valves controlling volatile organic chemicals: starts at
  Monthly LDAR, stepping down to Quarterly, Semi-Annual, then Annual LDAR as
  the percentage of valves found leaking above the 500 ppm threshold falls
  below successive thresholds (2%, 1%, 0.5%), with a "Quality Improvement
  Plan" branch feeding back into the cycle.
concept-tags: [fugitive emissions, LDAR, VOC monitoring frequency, EPA regulation, 500 ppm threshold]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.3 U.S. Regulatory Requirements for Fugitive Emissions, Figure 3.25
      (printed p. 69) — "Measurement Frequency for Valves Controlling
      Volatile Organic Chemicals (VOC)."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-031.html}]
notes: >
  A flowchart/decision-tree diagram, not a cutaway or photo — falls under Style Guide §5 conventions if placed on a slide.
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the complete diagram alone.
```

```yaml
id: cvh-cmp-iso15848-1-qualification-requirements
teaches: >
  ISO 15848-1 qualification requirements table-as-figure: mechanical cycle
  classes for control valves (CC1/CC2/CC3: 20,000/60,000/100,000 cycles) and
  isolation valves (CO1/CO2/CO3: 205/1,500/2,500 cycles), each with
  associated thermal cycle counts and tightness classes (AM/BM/CM),
  cross-referenced to measured leak concentration thresholds (<50/<100/<500
  ppm per EPA Method 21 sniffing).
concept-tags: [fugitive emissions, ISO 15848-1, mechanical cycle class, tightness class, control valve vs isolation valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.4 Global Standards for Fugitive Emissions, Figure 3.26 (printed p.
      70) — "ISO 15848-1 Qualification Requirements."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-031.html}]
notes: >
  A data table presented as a figure (not one of the tables this catalog
  otherwise excludes — it carries its own figure number and caption, unlike
  the numbered "Table N" references elsewhere in this chapter, so it is
  catalogued here consistent with the "only figures, not tables" rule).
  Printed on the same dense page as `cvh-cmp-iso15848-1-measured-leak-rate`
  (Figure 3.27) and `cvh-cmp-iso15848-1-measured-leak-concentration` (Figure
  3.28).
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the complete table alone (right edge, previously suspected truncated, is in fact complete in the source — confirmed against the rendered page).
```

```yaml
id: cvh-cmp-iso15848-1-measured-leak-rate
teaches: >
  ISO 15848-1 measured leak rate table: tightness classes AH/BH/CH with
  their corresponding maximum leak rates, in both mg·s⁻¹·m⁻¹ of stem
  perimeter and atm·cm³·s⁻¹·mm⁻¹ of stem diameter, per the standard's Annex A
  vacuum/flushing "total leakage" measurement methods. Class A is typically
  achievable only with bellows designs.
concept-tags: [fugitive emissions, ISO 15848-1, tightness class, leak rate, bellows, helium test]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.4 Global Standards for Fugitive Emissions, Figure 3.27 (printed p.
      70) — "ISO 15848-1 Measured Leak Rate."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Companion data table to `cvh-cmp-iso15848-1-measured-leak-concentration` (Figure 3.28), same source page.
```

```yaml
id: cvh-cmp-iso15848-1-measured-leak-concentration
teaches: >
  ISO 15848-1 measured leak concentration table: cross-references the same
  AM/BM/CM tightness classes to their measured leak concentration per the
  EPA Method 21 sniffing method (<50 ppm, <100 ppm, <500 ppm respectively).
concept-tags: [fugitive emissions, ISO 15848-1, tightness class, leak concentration, EPA Method 21, sniffing method]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.4 Global Standards for Fugitive Emissions, Figure 3.28 (printed p.
      70) — "ISO 15848-1 Measured Leak Concentration."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Companion data table to `cvh-cmp-iso15848-1-measured-leak-rate` (Figure 3.27).
```

```yaml
id: cvh-cmp-fci91-1-leakage-class-summary
teaches: >
  ANSI/FCI 91-1 leakage class summary table: classes A1/A2/B1/B2, each with
  its required mechanical cycle count (100,000 for A-classes, 25,000 for
  B-classes, all at 100% full travel), thermal cycle count (3), and maximum
  stem seal leakage per EPA Method 21 (100 ppm or 500 ppm depending on
  class).
concept-tags: [fugitive emissions, FCI 91-1, leakage class, mechanical cycles, EPA Method 21]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.4 Global Standards for Fugitive Emissions, Figure 3.29 (printed p.
      71) — "FCI 91-1 Leakage Class Summary."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: The US-standard counterpart to the ISO 15848-1 tables (Figures 3.26–3.28).
```

```yaml
id: cvh-cmp-single-ptfe-vring-packing
teaches: >
  Single PTFE V-ring packing arrangement: uses a coil spring between the
  packing and packing box ring. Meets the 100 ppmv criterion for
  sliding-stem valves (pressure ≤300 psi / 20.7 bar, temperature -18 to
  93°C / 0 to 200°F). Does not meet low-emission criteria for rotary valves.
  Very good sealing performance with the lowest operating friction of the
  packing families in this chapter.
concept-tags: [packing, single PTFE V-ring, coil spring, sliding-stem, low friction, 100 ppmv]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.5 Single PTFE V-Ring Packing, Figure 3.30 (printed p. 71) —
      "Single PTFE V-Ring Packing."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-028.html}]
notes: The first of the individual packing-system cutaway figures (3.30–3.34) that follow the ISO/FCI tables.
```

```yaml
id: cvh-cmp-enviroseal-ptfe-packing-system
teaches: >
  ENVIRO-SEAL PTFE packing system: a compact, live-load spring design suited
  to environmental applications up to 750 psi and 232°C (51.7 bar and
  450°F). Also suited to non-environmental high-temperature/pressure
  applications for its longer ongoing service life, in both sliding-stem and
  rotary valves.
concept-tags: [packing, ENVIRO-SEAL PTFE, live-load spring, environmental service, sliding-stem, rotary]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.6 ENVIRO-SEAL PTFE Packing, Figure 3.31 (printed p. 72) —
      "ENVIRO-SEAL PTFE Packing System."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-029.html}]
notes: >
  Printed on the same page as `cvh-cmp-enviroseal-duplex-packing-system`
  (Figure 3.32) and `cvh-cmp-enviroseal-graphite-ulf-packing-system` (Figure
  3.33) — the three ENVIRO-SEAL system diagrams are grouped together.
```

```yaml
id: cvh-cmp-enviroseal-duplex-packing-system
teaches: >
  ENVIRO-SEAL Duplex (PTFE and Graphite) packing system, labelled: spring
  pack assembly, bushing (×3), PTFE-carbon/PTFE packing set, lantern ring,
  graphite packing ring, packing ring, packing washers. Combines PTFE and
  graphite components for low friction, low emission, fire-tested (API
  Standard 589) performance up to 232°C (450°F) in sliding-stem valves;
  rotary valves are not available with ENVIRO-SEAL Duplex.
concept-tags: [packing, ENVIRO-SEAL Duplex, PTFE, graphite, fire-tested, API 589, sliding-stem only]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.7 ENVIRO-SEAL Duplex Packing, Figure 3.32 (printed p. 72) —
      "ENVIRO-SEAL Duplex (PTFE and Graphite) Packing System."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Fully labelled cutaway with its own printed field callouts — Style Guide
  §6.3 applies (no re-marking with numbered circles) if ever placed on a
  slide.
```

```yaml
id: cvh-cmp-enviroseal-graphite-ulf-packing-system
teaches: >
  ENVIRO-SEAL Graphite ULF packing system, labelled: stud, anti-seize
  lubricant, packing nut, spring pack assembly, packing flange, guide
  bushing (×2), packing ring (×2), packing washer, packing box ring. The
  patented ULF design incorporates very thin PTFE layers inside the packing
  rings plus thin PTFE washers on each side of the rings, minimizing control
  problems and reducing friction while promoting sealing and cycle life —
  designed primarily for environmental applications above 232°C (450°F).
concept-tags: [packing, ENVIRO-SEAL Graphite ULF, thin PTFE layers, spring pack assembly, high temperature environmental]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.9 ENVIRO-SEAL Graphite ULF, Figure 3.33 (printed p. 72) —
      "ENVIRO-SEAL Graphite ULF Packing System."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Fully labelled cutaway with its own printed field callouts — §6.3 applies
  if ever placed on a slide.
```

```yaml
id: cvh-cmp-enviroseal-graphite-packing-rotary
teaches: >
  ENVIRO-SEAL graphite packing system for rotary valves — designed for
  environmental applications from -6 to 316°C (20 to 600°F) or where fire
  safety is a concern, usable to pressures of 1500 psi (103 bar) while still
  satisfying the 100 ppmv EPA leakage criterion. Can be used up to 371°C
  (700°F) in non-environmental applications.
concept-tags: [packing, ENVIRO-SEAL graphite, rotary valve, fire safety, 100 ppmv]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.12 ENVIRO-SEAL Graphite for Rotary Valves, Figure 3.34 (printed p.
      73) — "ENVIRO-SEAL Graphite Packing System for Rotary Valves."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: The only rotary-specific packing-system cutaway among Figures 3.30–3.34; the rest are sliding-stem.
```

```yaml
id: cvh-cmp-sliding-stem-environmental-packing-selection
teaches: >
  A comparison table of sliding-stem environmental packing selections
  (Single PTFE V-Ring, ENVIRO-SEAL PTFE, ISO-Seal PTFE, ENVIRO-SEAL Duplex,
  ENVIRO-SEAL Graphite ULF, ISO-Seal Graphite), each rated for maximum
  pressure/temperature limits in environmental service and given a
  qualitative Seal Performance Index, Service Life Index, and Packing
  Friction rating.
concept-tags: [packing selection, sliding-stem, environmental service, comparison table, seal performance index]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.14 Sliding-Stem Environmental Packing Selection, Figure 3.35
      (printed p. 74) — "Sliding-Stem Environmental Packing Selection."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Note flags braided graphite filament and double PTFE as NOT acceptable
  environmental sealing solutions — a real distinction worth preserving if
  this figure or its data is ever redrawn.
```

```yaml
id: cvh-cmp-rotary-environmental-packing-selection
teaches: >
  A comparison table of rotary-valve environmental packing selections
  (ENVIRO-SEAL PTFE, ENVIRO-SEAL Graphite, ISO-Seal Graphite), same rating
  columns as the sliding-stem version (Figure 3.35). Single PTFE and
  graphite ribbon packing arrangements are explicitly noted as not
  performing well as fugitive-emission sealing solutions for rotary valves.
concept-tags: [packing selection, rotary valve, environmental service, comparison table]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.4.15 Rotary Environmental Packing Selection, Figure 3.36 (printed p.
      74) — "Rotary Environmental Packing Selection."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-038.html}]
notes: Direct rotary-valve counterpart to `cvh-cmp-sliding-stem-environmental-packing-selection` (Figure 3.35); the last figure of §3.4.
```

```yaml
id: cvh-topic-fugitive-emissions-standards
kind: topic
concept-tags: [fugitive emissions, LDAR, ISO 15848, ANSI FCI 91-1, leakage class, type testing]
status: current
teaches: >
  Fugitive emissions (non-point-source VOC leaks from equipment,
  estimated at over 400 million lb/year in the US) are regulated through
  Leak Detection and Repair (LDAR) programs requiring periodic monitoring
  of all valves at a 500 ppmv threshold (100 ppmv in some cities); the
  monitoring interval itself is tied to the percentage of valves found
  leaking, stepping from monthly down to annual as the leaking fraction
  drops below 0.5%. Internationally, ISO 15848-1 is a classification and
  qualification TYPE test — performed once per valve-and-packing design,
  with the qualification then applying to every valve built to that
  design — distinct from ISO 15848-2 production testing, a per-assembly
  qualification test. ISO 15848-1 differs in mechanical-cycle count
  between control valves (10% of travel cycled on both sides of the 50%
  position) and isolation valves (full stroke), and its leakage-class
  measurement methods (a leak-rate-per-stem-perimeter method, or a
  sniffing-concentration method, denoted H for helium-tested or M for
  methane-tested classes) are explicitly stated by the standard to have
  NO correlation to each other, nor to the US EPA Method 21 sniffing
  approach ANSI/FCI 91-1 uses (100/500 ppm thresholds against defined
  mechanical/thermal cycle counts). A packing system's real environmental
  rating is therefore always tied to which specific standard and test
  method it was qualified against, not one universal number.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.4.3, §3.4.4, pp.68-70 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-voc-ldar-measurement-frequency, cvh-cmp-iso15848-1-qualification-requirements, cvh-cmp-iso15848-1-measured-leak-rate, cvh-cmp-iso15848-1-measured-leak-concentration, cvh-cmp-fci91-1-leakage-class-summary]
relatedTopics: [cvh-topic-packing-selection-criteria]
used-by: []
notes: >
  Read directly from §3.4.3-3.4.4's real prose (PDF pp.68-70) via
  pdftotext. `relatedTopics` cross-references `cvh-topic-packing-selection-
  criteria` in Subject-Matter Index — Control Valve Handbook ch5.md (cross-
  chapter link, confirmed that id exists there) — that ch5 topic covers
  packing-selection criteria (pressure/temperature vs. environmental-service
  axes); this ch3 topic covers the regulatory/standards landscape those
  criteria are tested against, a genuinely distinct concept, not a
  duplicate. Chapter 3's own §3.4.1-3.4.15 packing-material-family content
  (PTFE/graphite/ENVIRO-SEAL/ISO-Seal variants and their Figure 3.35/3.36
  comparison tables) substantially overlaps with ch5's existing
  cvh-topic-packing-selection-criteria and cvh-topic-packing-friction —
  deliberately NOT re-indexed as a separate topic here to avoid a real
  duplicate; flagged in this file's own Open Items instead.
```

### Batch 5 — Characterization, valve plug guiding, and restricted-capacity trim (printed pp. 74–77)

```yaml
id: cvh-cmp-characterized-cages-globe
teaches: >
  Three characterized cage window shapes for cage-guided globe valve
  bodies — Quick-Opening, Linear, and Equal-Percentage — the cage-window
  shape determines the valve's inherent flow characteristic as the plug
  moves away from the seat ring. Cages can be interchanged without
  changing the valve plug or seat ring, so the inherent flow characteristic
  can be changed independent of body/trim selection.
concept-tags: [characterization, cage-guided, quick-opening, linear, equal-percentage, interchangeable cage]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.5 Characterization of Cage-Guided Valve Bodies, Figure 3.37 (printed
      p. 74) — "Characterized Cages for Globe-Style Valve Bodies."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-033.html}]
notes: >
  Three side-by-side cage-window silhouettes with their own printed labels; §6.3 applies if placed on a slide.
  Crop corrected 2026-09-14: the original crop included the printed caption line and the page number. Re-cropped to the complete figure alone.
```

```yaml
id: cvh-cmp-inherent-flow-characteristic-curves
teaches: >
  Rated flow coefficient (%) plotted against rated travel (%) for the three
  inherent flow characteristics: Quick-Opening (steep initial rise),
  Linear (straight diagonal), and Equal-Percentage (exponential-shaped
  rise) — the graph underlying the cage-window shapes shown in Figure 3.37,
  under constant pressure differential across the valve.
concept-tags: [characterization, inherent flow characteristic, quick-opening, linear, equal-percentage, rated travel]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.5 Characterization of Cage-Guided Valve Bodies, Figure 3.38 (printed
      p. 75) — "Inherent Flow Characteristics Curves."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-033.html}]
notes: >
  An analytical graph, not a cutaway — falls under Style Guide §5 (diagram
  & graph conventions) if placed on a slide, same category as the Oil & Gas
  precedent's `ogas-cmp-flow-characteristic-curves`.
  Crop corrected 2026-09-14: the original crop included the printed caption line and cut off part of the graph's own axis label. Re-cropped to the complete graph alone.
```

```yaml
id: cvh-cmp-plug-contour-flow-characterization
teaches: >
  Valve plug contour variations corresponding to different flow
  characterizations — the contour of the plug surface next to the seat
  ring is instrumental in determining the inherent flow characteristic of a
  plug-characterized (as opposed to cage-characterized) control valve; as
  the plug travels, the unobstructed flow area changes size and shape
  depending on the plug's contour.
concept-tags: [characterization, valve plug contour, plug-characterized trim]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.5.1 Characterized Valve Plugs, Figure 3.39 (printed p. 75) —
      "Various Plug Contour for Different Flow Characterization."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-034.html}]
notes: >
  The plug-characterization counterpart to Figure 3.37's cage-characterization figure.
  Crop corrected 2026-09-14: the original crop included the printed caption line and cut off the left edge of the first plug contour. Re-cropped to the complete figure alone.
```

```yaml
id: cvh-cmp-quick-opening-construction
teaches: >
  Labelled construction diagram showing how a quick-opening flow
  characteristic is provided: stem, valve plug, seat ring, flow area, and
  port diameter shown in relation to each other.
concept-tags: [characterization, quick-opening, seat ring, port diameter, flow area]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.5.1 Characterized Valve Plugs, Figure 3.40 (printed p. 76) —
      "Typical Construction to Provide Quick-Opening Flow Characteristic."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-034.html}]
notes: >
  Labelled schematic (Stem, Seat Ring, Valve Plug, Flow Area, Port Diameter)
  — §6.3 applies if placed on a slide.
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the complete figure alone.
```

```yaml
id: cvh-cmp-cage-guiding-plug-guiding-cross-section
teaches: >
  A cross-sectional view contrasting cage-guiding and plug-guiding methods
  in globe valves: cage-guiding (plug outside diameter close to the cage
  bore throughout travel — self-aligning via bonnet/cage/seat ring),
  top-and-bottom-guiding (guide bushings in the bonnet and bottom flange,
  typical of double-ported constructions), and stem-guiding (a guide bushing
  in the bonnet acting on the valve plug stem).
concept-tags: [valve plug guiding, cage-guiding, top-and-bottom-guiding, stem-guiding, port-guiding]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.6 Valve Plug Guiding, Figure 3.41 (printed p. 76) — "Cross
      Sectional View of Cage Guiding and Plug Guiding in Globe Valves."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-035.html}]
notes: >
  The whole-chapter's key valve-plug-guiding reference figure, covering all four guiding methods described in §3.6's text.
  Crop corrected 2026-09-14: the original crop included a small stray watermark-like text fragment ("postguid") in the lower-left of the lower diagram, near the source page's own margin. Painted out (genuinely extraneous, not part of either diagram) rather than re-cropped, since cropping tighter would also have cut the lower diagram's own "Flow" label, which sits at nearly the same height.
```

```yaml
id: cvh-cmp-adapter-reduced-flow-capacity
teaches: >
  The adapter method for providing reduced flow capacity in cage-guided
  trim: valve plug, cage, and seat ring parts from a smaller valve size of
  similar construction are combined with adapter pieces above the cage and
  below the seat ring, mating the smaller parts to the larger valve body —
  avoiding the need for expensive pipeline reducers or a custom-sized body.
concept-tags: [restricted-capacity trim, adapter pieces, reduced flow capacity, cage-guided trim]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.7 Restricted-Capacity Control Valve Trim, Figure 3.42 (printed p.
      77) — "Adapter Method for Providing Reduced Flow Capacity."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-035.html}]
notes: The last figure before §3.8 Actuators begins, on the same printed page.
```

```yaml
id: cvh-topic-flow-characterization-mechanism
kind: topic
concept-tags: [flow characteristic, cage window shape, plug contour, linear, equal-percentage, quick-opening]
status: current
teaches: >
  Inherent flow characteristic (linear, equal-percentage, quick-opening)
  is physically produced by the shape of the flow opening the plug
  uncovers as it travels — in cage-guided globe bodies, by the window
  shape cut into the cylindrical cage wall; in non-cage-guided designs,
  by the contour of the valve plug surface adjacent to the seat ring.
  Cage-guided construction lets the characteristic be changed by swapping
  the cage alone, without changing plug or seat ring, and standard cages
  work with either balanced or unbalanced trim; noise-attenuation or
  anti-cavitation cages typically force a linear characteristic and
  require flow in one specific direction, sometimes requiring the body to
  be reversed in the pipeline. The resulting flow-rate/travel curve
  itself (the actual linear/equal-percentage/quick-opening shapes) is
  covered in depth in Chapter 5, not repeated here.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.5, §3.5.1, pp.74-76 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-characterized-cages-globe, cvh-cmp-inherent-flow-characteristic-curves, cvh-cmp-plug-contour-flow-characterization, cvh-cmp-quick-opening-construction]
relatedTopics: [cvh-topic-flow-characteristics]
used-by: []
notes: >
  Read directly from §3.5-3.5.1's real prose (PDF pp.74-76) via pdftotext,
  including the source's own explicit line "described further in Chapter
  5" confirming this is deliberately the mechanism-only half of the
  concept. `relatedTopics` cross-references `cvh-topic-flow-characteristics`
  in Subject-Matter Index — Control Valve Handbook ch5.md (cross-chapter link,
  confirmed that id exists there).
```

```yaml
id: cvh-topic-valve-plug-guiding-methods
kind: topic
concept-tags: [cage guiding, top and bottom guiding, stem guiding, port guiding, plug alignment]
status: current
teaches: >
  Accurate plug-to-seat-ring alignment is achieved by one of several
  self-descriptively-named guiding methods: cage-guiding (the plug OD
  runs close to the cage's inside wall through the whole travel range, so
  bonnet/cage/seat-ring self-align as the assembly is built);
  top-and-bottom-guiding (guide bushings in both the bonnet and a bottom
  flange, typical of double-ported bodies); top-guiding (a single guide
  bushing in the bonnet or body, or the packing itself); stem-guiding (a
  bonnet bushing acting on the stem); and port-guiding (the plug is
  aligned by the valve body's own port). Which method a given body style
  uses directly determines its unbalanced-vs-balanced force behavior.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.6, pp.76-77 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-cage-guiding-plug-guiding-cross-section]
relatedTopics: [cvh-topic-globe-valve-body-selection]
used-by: []
notes: Read directly from §3.6's real prose (PDF pp.76-77) via pdftotext.
```

```yaml
id: cvh-topic-restricted-capacity-trim
kind: topic
concept-tags: [restricted capacity trim, reduced capacity, adapter parts, future flow growth]
status: current
teaches: >
  Restricted- or reduced-capacity trim lets a body sized for future flow
  growth, or oversized in error, still control properly today — the
  alternative (an expensive pipeline reducer) is avoided. Cage-guided
  bodies typically achieve this by fitting plug/cage/seat-ring parts
  scaled from a smaller valve size, using adapter pieces above the cage
  and below the seat ring to mate the smaller parts to the larger body;
  most manufacturers keep these reduced-capacity part combinations as
  standard offerings since the need is common.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.7, pp.76-77 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-adapter-reduced-flow-capacity]
relatedTopics: []
used-by: []
notes: Read directly from §3.7's real prose (PDF pp.76-77) via pdftotext.
```

### Batch 6 — Actuators (printed pp. 77–80)

Figure 3.43 ("Diaphragm Actuators," direct-acting / reverse-acting, printed p.
77) is **not catalogued fresh here** — it is already indexed in `Component
Index — 14101 ch3.md` as `ch3-cmp-da-schematic` (left panel, direct-acting)
and `ch3-cmp-ra-schematic` (right panel, reverse-acting), both explicitly
citing "§3.8.1, Figure 3.43." See Open Items for the confirmed cross-check.

```yaml
id: cvh-cmp-field-reversible-multi-spring-actuator
teaches: >
  A field-reversible, multi-spring diaphragm actuator — actuators of this
  type can be assembled for either direct or reverse action in the field,
  as opposed to the fixed direct-/reverse-acting units shown in Figure 3.43.
concept-tags: [actuator, diaphragm actuator, field-reversible, multi-spring, direct/reverse convertible]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.1 Diaphragm Actuators, Figure 3.44 (printed p. 78) —
      "Field-Reversible Multi-Spring Actuator."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-036.html}]
notes: >
  §3.8.1's body text cites this figure correctly ("Reversible... Figure
  3.44"). §3.8.4 Rack-and-Pinion Actuators' body text ALSO cites "Figure
  3.44" for the rack-and-pinion actuator, which is a different real figure
  (Figure 3.50, `cvh-cmp-rack-and-pinion-actuator`) — a confirmed source-text
  citation mismatch, not an error introduced in this catalog. See Open Items.
  Crop corrected 2026-09-14: the original crop included the printed caption line and a stray fragment of text from the paragraph above the figure. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-diaphragm-actuator-rotary-valve
teaches: >
  A direct-acting diaphragm actuator adapted for rotary valves: increasing
  air pressure pushes down on the diaphragm, which — depending on the
  orientation of the actuator lever on the valve shaft — may either open or
  close the valve. Net output thrust is the difference between diaphragm
  force and opposing spring force.
concept-tags: [actuator, diaphragm actuator, rotary valve, direct-acting, actuator lever]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.1 Diaphragm Actuators, Figure 3.45 (printed p. 78) — "Diaphragm
      Actuator for Rotary Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-036.html}]
notes: >
  The rotary-valve counterpart to Figure 3.43's sliding-stem diaphragm actuators.
  Crop corrected 2026-09-14: the original crop included a printed UI "play" icon from the source page's own layout (a real element of the printed/digital page, not a capture artifact) overlapping the bottom-right of the actuator photo. Re-cropped to exclude it while keeping the complete assembly.
```

```yaml
id: cvh-cmp-double-acting-piston-actuator
teaches: >
  A control valve with a double-acting piston actuator — piston actuators
  are pneumatically operated using high-pressure plant air (up to 150 psig /
  10.3 bar), often eliminating the need for a supply pressure regulator, and
  furnish maximum thrust output and fast stroking speeds. Double-acting
  units give maximum force in both directions (as opposed to spring-return
  units, which provide fail-open or fail-closed operation).
concept-tags: [actuator, piston actuator, double-acting, high-thrust, fast stroking]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.2 Piston Actuators, Figure 3.46 (printed p. 78) — "Control Valve
      with Double-Acting Piston Actuator."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-037.html}]
notes: >
  Text also notes various accessories can position a double-acting piston
  on supply-pressure failure (pneumatic trip valves, lock-up systems), and
  that rotary-valve piston actuator versions use a sliding seal at the lower
  cylinder end to permit lateral stem motion without cylinder-pressure
  leakage.
  Crop corrected 2026-09-14: the original crop cut off the top of the actuator and included the printed caption line. Re-cropped to the complete figure alone.
```

```yaml
id: cvh-cmp-scotch-yoke-piston-actuator
teaches: >
  A control valve with a Scotch-yoke piston actuator — a piston-actuator
  variant (see §3.8.2's general piston-actuator description: high-pressure
  plant air supply, double-acting or spring-return operation) typically
  used to convert linear piston motion into rotary valve-shaft motion via
  the yoke mechanism.
concept-tags: [actuator, piston actuator, Scotch-yoke, rotary motion conversion]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.2 Piston Actuators, Figure 3.47 (printed p. 79) — "Control Valve
      with Scotch-Yoke Piston Actuator."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-037.html}]
notes: >
  The source text does not describe the Scotch-yoke mechanism itself beyond
  the general piston-actuator bullets in §3.8.2 — the mechanism description
  above reflects general Scotch-yoke actuator behavior consistent with those
  bullets, not a source quote specific to this figure; flagged for caution
  if a more mechanism-specific teaching claim is ever needed.
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-manual-actuator-sliding-stem
teaches: >
  A manual actuator for sliding-stem valves — useful where automatic control
  isn't required but good manual control still is; often used to actuate
  the bypass valve in a three-valve bypass loop around control valves for
  manual process control during maintenance or automatic-system shutdown.
  Available in various sizes; some models offer dial-indicating devices for
  accurate plug/disk repositioning. Much less expensive than automatic
  actuators.
concept-tags: [actuator, manual actuator, sliding-stem, bypass valve, dial indicator]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.3 Manual Actuators, Figure 3.48 (printed p. 79) — "Manual
      Actuator for Sliding-Stem Valves."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-038.html}]
notes: >
  Paired conceptually with `cvh-cmp-manual-actuator-rotary` (Figure 3.49), the rotary-valve version, same section.
  Crop corrected 2026-09-14: the original crop included a stray fragment of body text above the figure and the printed caption line below it. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-manual-actuator-rotary
teaches: >
  A manual actuator for rotary valves — the rotary-valve counterpart to
  Figure 3.48, same §3.8.3 description: used where automatic control isn't
  required, often for bypass-valve service, available with dial-indicating
  devices for some models.
concept-tags: [actuator, manual actuator, rotary valve, bypass valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.3 Manual Actuators, Figure 3.49 (printed p. 79) — "Manual
      Actuator for Rotary Valves."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-038.html}]
notes: >
  See `cvh-cmp-manual-actuator-sliding-stem` (Figure 3.48).
  Crop corrected 2026-09-14: the original crop cut off the right edge of the handwheel and included a stray line of body text at the top. Re-cropped to the complete figure with full margin.
```

```yaml
id: cvh-cmp-rack-and-pinion-actuator
teaches: >
  A rack-and-pinion actuator — provides a compact and economical solution
  for rotary valves. Because of backlash, these are typically used for
  on/off applications or where process variability is not a concern (rather
  than precision continuous throttling).
concept-tags: [actuator, rack-and-pinion, rotary valve, backlash, on/off service]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.4 Rack-and-Pinion Actuators, Figure 3.50 (printed p. 79) —
      "Rack-and-Pinion Actuator."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-038.html}]
notes: >
  §3.8.4's own body text cites "(Figure 3.44)" when introducing rack-and-
  pinion actuators, but Figure 3.44's real caption is "Field-Reversible
  Multi-Spring Actuator" (a diaphragm actuator, catalogued separately as
  `cvh-cmp-field-reversible-multi-spring-actuator`) — this figure, Figure
  3.50, is the real rack-and-pinion photo. Confirmed source-text citation
  mismatch; see Open Items.
  Crop corrected 2026-09-14: the original crop included the printed caption line, set in an unusually large display font on the source page. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-electric-actuator-sliding-stem
teaches: >
  An electric actuator for a sliding-stem valve — uses an electric motor
  with gear reduction to move the valve plug. Traditionally limited to
  on/off operation, though some designs are now capable of continuous
  control; brushless motors can reduce or eliminate motor burnout from
  rapid on/off cycling. Initial cost remains above pneumatic actuation;
  primary use is where instrument air is unavailable or too few valves
  exist to justify a compressor system.
concept-tags: [actuator, electric actuator, sliding-stem, gear reduction, brushless motor, on/off vs continuous control]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.5 Electric Actuators, Figure 3.51 (printed p. 80) — "Electric
      Actuator for Sliding-Stem Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-038.html}]
notes: >
  The last actuator subtype before the chapter's rotary electric-actuator figure (3.52) and the chapter's end.
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the figure alone.
```

```yaml
id: cvh-cmp-electric-actuator-rotary
teaches: >
  An electric actuator for a rotary valve — the rotary-valve counterpart to
  Figure 3.51, same §3.8.5 electric-motor/gear-reduction description.
concept-tags: [actuator, electric actuator, rotary valve, gear reduction]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: >
      §3.8.5 Electric Actuators, Figure 3.52 (printed p. 80) — "Electric
      Actuator for Rotary Valve."
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: [{course: CVB, slide: cvb-038.html}]
notes: >
  The last figure in Chapter 3 — PDF page 81 carries only "See Additional
  Resources »" with no further figures; Chapter 4 "Control Valve
  Accessories" begins on PDF page 82.
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the figure alone.
```

```yaml
id: cvh-topic-actuator-type-selection
kind: topic
concept-tags: [diaphragm actuator, piston actuator, manual actuator, rack-and-pinion actuator, electric actuator, actuator selection]
status: current
teaches: >
  Actuator type is chosen on thrust/speed/cost/failure-mode tradeoffs
  distinct from the valve-body decision. Spring-and-diaphragm actuators
  are the most common — dependable, simple, economical — available
  direct-acting, reverse-acting, field-reversible, or adapted for direct
  rotary-valve mounting; net thrust is diaphragm force minus opposing
  spring force, and required thrust plus available supply pressure set
  the size. Piston actuators use higher supply pressure (to 150 psig) to
  deliver maximum thrust and the fastest stroking speed, either
  double-acting (max force both directions, needing accessories like trip
  valves or lock-up systems to fail safely on supply loss) or
  spring-return (inherently fail-open or fail-closed); rotary-valve
  versions add a sliding cylinder seal so the stem can move laterally as
  well as axially. Manual actuators trade automatic control for low cost
  and simplicity, commonly used on bypass valves during maintenance or
  shutdown of the automatic loop. Rack-and-pinion actuators are compact
  and economical for rotary valves but their backlash confines them to
  on/off duty, not throttling. Electric actuators (motor plus gear
  reduction) suit sites lacking instrument air or with too few valves to
  justify a compressor, traditionally on/off-only though some now support
  continuous control; brushless motors reduce burnout from frequent
  on/off cycling, but purchase cost stays above pneumatic actuation.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§3.8, §3.8.1-3.8.5, pp.77-80 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-field-reversible-multi-spring-actuator, cvh-cmp-diaphragm-actuator-rotary-valve, cvh-cmp-double-acting-piston-actuator, cvh-cmp-scotch-yoke-piston-actuator, cvh-cmp-manual-actuator-sliding-stem, cvh-cmp-manual-actuator-rotary, cvh-cmp-rack-and-pinion-actuator, cvh-cmp-electric-actuator-sliding-stem, cvh-cmp-electric-actuator-rotary]
relatedTopics: [cvh-topic-rotary-valve-body-selection, cvh-topic-actuator-force-selection]
used-by: []
notes: >
  Read directly from §3.8-3.8.5's real prose (PDF pp.77-80) via pdftotext;
  all nine relatedFigures ids confirmed to exist in this same file before
  citing. `relatedTopics` cross-references `cvh-topic-actuator-force-
  selection` in Subject-Matter Index — Control Valve Handbook ch5.md
  (cross-chapter link, confirmed that id exists there) — this ch3 topic
  covers WHICH actuator type to choose; ch5's topic covers HOW MUCH force
  that actuator must deliver once chosen, a genuinely distinct concept.
```

---

## Open items

- **Chapter boundary, confirmed directly:** Chapter 3 runs PDF pages 54–81
  (no printed/PDF page offset for this document). PDF page 81 has no figures
  — only the "See Additional Resources »" footer. PDF page 82 is the real
  "Chapter 4 / Control Valve Accessories" divider page, confirmed by direct
  read, not inferred from the TOC alone.
- **Confirmed genuine source duplicate — two figures both captioned "Figure
  3.24."** Read directly on two different printed pages: printed p. 67
  (§3.3.2 Bellows Seal Bonnets — "Mechanically-Formed Bellows,"
  `cvh-cmp-mechanically-formed-bellows`) and printed p. 68 (§3.4 Control
  Valve Packing — "Packing Material Arrangements for Globe-Style Valve
  Bodies," `cvh-cmp-packing-material-arrangements-globe`). This is not a
  two-column text-extraction artifact — each page was read on its own and
  each carries its own distinct "Figure 3.24" caption in the printed
  document. Both are catalogued here under distinct, non-conflicting ids;
  any future reference to "CVH Figure 3.24" needs the printed page number to
  disambiguate which one is meant.
- **Confirmed source-text citation mismatch (not corrected, only flagged):**
  §3.8.4 Rack-and-Pinion Actuators' own body text cites "(Figure 3.44)" for
  the rack-and-pinion photo, but the real Figure 3.44 (printed p. 78) is
  captioned "Field-Reversible Multi-Spring Actuator" — a diaphragm actuator
  figure that a different sentence in §3.8.1 correctly cites. The real
  rack-and-pinion photo is Figure 3.50 (printed p. 79). Both figures are
  catalogued under their own real captions
  (`cvh-cmp-field-reversible-multi-spring-actuator` and
  `cvh-cmp-rack-and-pinion-actuator`); the mismatch is the source document's
  own citation error, left as-is rather than silently corrected.
- **`cvh-cmp-double-ported-globe-valve-body-reverse-acting` (Figure 3.5):**
  the source's own figure caption ("Reverse-Acting") and its own body-text
  description ("assembled for push-down-to-open valve plug action") name
  what reads as two different actions for the same figure — carried
  verbatim rather than reconciled.
- **Low-confidence figure:** `cvh-cmp-bonnet-variations` (Figure 3.20,
  printed p. 66) — the source page text does not enumerate which specific
  bonnet styles appear in the photo beyond introducing the general topic of
  bonnet variation, and the image was not visually inspected (text
  extraction only). The `teaches` field above is deliberately general; do
  not infer specific bonnet types from it without a direct visual check.
- **Cross-reference confirmed, not duplicated:** Figure 3.43 ("Diaphragm
  Actuators," direct-/reverse-acting, printed p. 77) is already fully
  catalogued in `Subject-Matter Index — 14101 ch3.md` as `ch3-cmp-da-schematic`
  (left panel) and `ch3-cmp-ra-schematic` (right panel), both explicitly
  citing "§3.8.1, Figure 3.43." No fresh `cvh-cmp-` id was created for it.
  `Subject-Matter Index — bench-set-657.md` was also checked directly; it cites
  only Archive D750004/D750066 bench-set material, no Figure 3.43 citation,
  so no additional cross-reference applies there.
- **Coverage:** all 52 real figures in Chapter 3 (Figure 3.1 through Figure
  3.52, with the confirmed duplicate 3.24 counted as two distinct figures =
  53 real figure instances) are accounted for — 52 catalogued fresh under
  `cvh-cmp-` ids in Batches 1–6 above, and 1 (Figure 3.43) cross-referenced
  to its existing `ch3-cmp-` ids rather than duplicated. No figure was
  skipped or omitted from this accounting.
- Tables (e.g., the butterfly-valve offset/size table before Figure 3.7, and
  every "Table N" reference in the source text) are deliberately not
  catalogued as components, per the standing "only figures" rule — same
  practice as the Oil & Gas precedent. Figures 3.26–3.29 (ISO 15848-1 /
  FCI 91-1) ARE catalogued, since the source itself gives them figure
  numbers and captions, not table numbers.
- All 52 records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them. No image crops exist yet for any record in this file.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
- **`kind: topic` pass, 2026-09-17 (WC).** Ten new topic entries added,
  covering every genuine concept found in the chapter's real body prose
  beyond what a figure caption alone teaches: valve-body fundamentals,
  globe- and rotary-valve body selection, end-connection selection,
  bonnet function/types, fugitive-emissions standards, flow-
  characterization mechanism, plug-guiding methods, restricted-capacity
  trim, and actuator-type selection. **Deliberately NOT indexed as a
  separate topic:** §3.4.1-3.4.15's packing-material-family content
  (PTFE/graphite/ENVIRO-SEAL/ISO-Seal variants and Figures 3.35/3.36's
  comparison tables) — this substantially overlaps with `cvh-topic-
  packing-selection-criteria` and `cvh-topic-packing-friction`, already
  indexed in `Subject-Matter Index — Control Valve Handbook ch5.md`; adding a
  third, ch3-scoped version would be a real duplicate, not new coverage.
  All `relatedFigures`/`relatedTopics` cross-references (including the
  four cross-chapter links into ch5) were verified to resolve to real
  existing ids before being cited, not assumed.
