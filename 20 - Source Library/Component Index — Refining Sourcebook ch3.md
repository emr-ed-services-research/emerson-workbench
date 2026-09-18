---
title: Component Index — Refining Sourcebook ch3
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
chapter: ch3 — Available Technologies
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Refining, Chapter 3

**Standing full-chapter pass**, continuing `Component Index — Refining
Sourcebook ch2.md` — see `ch1.md`'s header for the pass type and reason.

**Chapter/scope boundary, confirmed directly by rendering:** PDF page 18
(chapter divider, carrying its own mini table of contents: §3.1
Sliding-Stem Valves p.3-19, §3.2 Rotary Valves p.3-21, §3.3 Actuators
p.3-22, §3.4 Control Valve Packing p.3-25, §3.5 Positioners [printed
"Positioners and Diagnostic Capabilities"] p.3-28, §3.6 Levels p.3-29)
through PDF page 29 (printed 3-29, the chapter's last content page,
confirmed against PDF page 30, which renders as the Chapter 4 "Refinery
Control Valve Application Reviews" divider with its own 15-section mini
table of contents — catalogued in
`Component Index — Refining Sourcebook ch4.md`).

This is the book's shared-fundamentals chapter — valve-body technology,
rotary-valve technology, actuators, packing, positioners, and level
instruments — matching the Oil & Gas Sourcebook's own "shared fundamentals"
front section in kind (selection/actuator/sizing chapters there vs. one
consolidated technologies chapter here), though the two sourcebooks
organize it differently: a real, confirmed structural difference, not an
inconsistency.

Rigor standard: all 12 pages in range rendered at 150dpi and read directly.

## Precedence

Same as Chapters 1–2 — `status: current` throughout (D103205X012, © 2014,
2024 Fisher Controls International LLC); no archive or legacy material
consulted.

## Components

### 3.1 Sliding-Stem Valves (printed pp. 3-19 – 3-21)

```yaml
id: ref-cmp-single-ported-globe-valve-body
kind: figure
teaches: >
  Two styles of single-ported (single-seated) globe-type control valve
  body: the standard globe-style body and a split/angle-adjacent
  construction, both cage-guided. Single-port valves are the most common
  body style, are widely used in process control (NPS 1 through NPS 4),
  use metal-to-metal or PTFE/composition soft seating, and are the base
  construction the chapter's later cage-style and expanded-end-connection
  variants build from.
concept-tags: [globe valve, single-ported, sliding-stem, cage-guided, unbalanced valve plug]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.1.1 'Single-Ported Globe-Style Valve Body' (drawings 35A7592-E / W7027-3), p. 3-19"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway, no printed field callouts. **Cross-reference flagged, not
  merged:** shares drawing number W7027-3 with Oil & Gas Sourcebook ch8's
  Figure 8-15 "EZ Control Valve Sectional" (`Component Index — Oil & Gas
  Sourcebook ch8.md`) and with a Pulp & Paper Sourcebook ch1 figure — but
  Pulp & Paper's own cross-reference note already found Oil & Gas ch8's
  rendering of this drawing number to be genuinely differently drawn from
  its own figure, so a shared base drawing number does not guarantee an
  identical image here either. Not merged without a direct visual
  comparison against the Oil & Gas ch8 page, which this pass did not
  perform (out of this chapter's scope) — flagged for a future pass.
```

```yaml
id: ref-cmp-angle-style-valve-body
kind: figure
teaches: >
  An angle-style single-ported valve body: normal flow is up through the
  seat ring; commonly used in boiler-feedwater and heater-drain service and
  in piping schemes where space is at a premium (the valve can also serve
  as an elbow). The shown construction is cage-style; other variants
  include screwed-in seat rings, expanded outlet connections, restricted
  trim, and outlet liners for erosion-damage reduction.
concept-tags: [globe valve, angle valve, single-ported, boiler feedwater, heater drain, erosion damage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.1.2 'Angle-Style Valve Body' (drawing W0971-3), p. 3-19"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway, no printed field callouts.
```

```yaml
id: ref-cmp-balanced-plug-cage-style-valve
kind: figure
teaches: >
  A balanced-plug, cage-style single-ported valve body: one seat ring
  provides the advantages of a balanced valve plug otherwise associated
  only with double-ported bodies. Cage-style trim provides plug guiding,
  seat-ring retention, and flow characterization; a seal between the upper
  plug and cage cylinder virtually eliminates upstream-to-downstream
  leakage, reducing static unbalance force and permitting smaller
  actuators. Interchangeable trim allows a choice of flow characteristic,
  noise attenuation, or anti-cavitation components.
concept-tags: [globe valve, balanced plug, cage-style trim, single-ported, flow characterization, interchangeable trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.1.3 'Balanced-Plug, Cage-Style Valve Construction' (drawing W0992-3), p. 3-20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway, no printed field callouts. **Checked, not merged:** drawing
  number W0992-3 is one digit off from `ogas-cmp-et-globe-cutaway`'s
  W0992-4 (Oil & Gas ch1, also reused as `pss-cmp-design-et-globe-cutaway`
  in Power & Severe Service ch1 and `pp-cmp-cage-style-balanced-plug-valve-
  body` in Pulp & Paper ch1) — a real, likely-related drawing-family
  revision, not the identical drawing. Following the Pulp & Paper ch1
  precedent for the analogous W4170-3/W4170-4 case (related but distinct,
  not merged), this is catalogued as its own record rather than assumed
  identical to W0992-4.
```

```yaml
id: ref-cmp-expanded-end-connection-noise-trim-valve
kind: figure
teaches: >
  An expanded-end-connection, cage-guided valve construction adapted for
  noise applications such as high-pressure gas-reducing stations where
  sonic gas velocities occur at the outlet of conventional valve bodies.
  Oversized end connections give a streamlined flow path; noise-abatement
  trim reduces overall noise levels by as much as 40 dB. Flow direction
  depends on service and trim selection (unbalanced constructions normally
  flow up, balanced normally flow down).
concept-tags: [globe valve, expanded end connection, noise abatement trim, cage-guided, sonic velocity, gas reducing station]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.1.4 'Expanded End Connection Valve with Noise Abatement Trim' (drawing W0997-2), p. 3-20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway, no printed field callouts.
```

```yaml
id: ref-cmp-double-ported-globe-valve-body
kind: figure
teaches: >
  A double-ported globe-style valve body: dynamic plug force tends to be
  balanced as flow opens one port and closes the other, permitting a
  smaller actuator than a single-ported body of similar capacity for the
  same reason. Usually furnished only in larger sizes (NPS 4 and up), with
  higher capacity than same-line-size single-ported valves. Many
  double-ported bodies reverse so the plug can be installed push-down-to-
  open or push-down-to-close. Metal-to-metal seating usually gives only
  Class II shutoff, though Class III is possible.
concept-tags: [globe valve, double-ported, balanced dynamic force, push-down-to-open, push-down-to-close, Class II shutoff]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.1.5 'Double-Ported Globe-Style Valve Body' (drawing W0467-1a), p. 3-20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway, no printed field callouts. Assembled for push-down-to-open
  action per the body text; the plug is shown essentially balanced.
```

```yaml
id: ref-cmp-three-way-balanced-plug-valve
kind: figure
teaches: >
  A three-way valve body with a balanced valve plug (shown in the down
  position): three pipeline connections provide general converging
  (flow-mixing) or diverging (flow-splitting) service. Preferred designs
  use cage-style trim for positive plug guiding and ease of maintenance;
  actuator selection demands particular care for unbalanced-plug
  constructions.
concept-tags: [three-way valve, balanced valve plug, flow mixing, flow splitting, cage-style trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.1.6 'Three Way Valve with Balanced Valve Plug' (drawing W9045-1), p. 3-21"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway, no printed field callouts. **Cross-reference (2026-09-15):**
  identical drawing number (W9045-1) to `pp-cmp-three-way-balanced-plug-
  valve-body` in `Component Index — Pulp & Paper Sourcebook ch1.md`
  (Figure 1-7, same caption) — the same source cutaway reused across both
  Sourcebooks. Note added to both records.
```

```yaml
id: ref-topic-port-guided-valve-limitations
kind: topic
teaches: >
  Port-guided single-port valve constructions — a variant not shown in any
  figure of this chapter — carry real, specific limitations distinct from
  the cage/retainer-guided constructions the chapter's figures do depict:
  usually limited to 10 bar (150 psig) maximum pressure drop, susceptible
  to velocity-induced vibration, and typically provided with screwed-in
  seat rings that can be difficult to remove after use. Port-guided plugs
  are used for on-off or low-pressure throttling service, while
  top-and-bottom-guided plugs (the cage-style construction shown in Figure
  3.1.3) furnish stable operation for severe service.
concept-tags: [port-guided valve, single-port valve, pressure drop limit, velocity-induced vibration, screwed-in seat ring]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§3.1 'Port-Guided Single-Port Valve Constructions,' p. 3-20 (PDF p. 19) — running prose, not figure-anchored"
relatedFigures: [ref-cmp-balanced-plug-cage-style-valve]
relatedTopics: []
used-by: []
notes: >
  No figure anywhere in the chapter depicts a port-guided construction
  specifically — genuinely invisible to the original figures-only pass.
  Cross-referenced to the cage-guided figure it's explicitly contrasted
  against in the same paragraph, not because it depicts this construction.
```

### 3.2 Rotary Valves (printed pp. 3-21 – 3-22)

```yaml
id: ref-cmp-high-performance-butterfly-valve
kind: figure
teaches: >
  A high-performance butterfly control valve: conventional contoured disks
  give throttling control for up to 60-degree disk rotation; the Fisher
  Control-Disk valve's proportional-gain disk design suits applications
  requiring 90-degree rotation and extended control range. Butterfly
  constructions mate with standard raised-face pipeline flanges; standard
  liners (Nitrile or PTFE) provide tight shutoff and corrosion protection
  over cost-effective base materials. Available through NPS 72.
concept-tags: [high performance butterfly valve, Control-Disk, disk rotation, liner, raised-face flange, NPS 72]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.2.1 'High-Performance Butterfly Control Valve' (drawing W4641), p. 3-21"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Product photo, exterior only (no cutaway) — no printed field callouts.
  **Cross-reference (2026-09-15):** identical drawing number (W4641) to a
  Pulp & Paper Sourcebook ch1 Figure 1-8, same caption
  (`Component Index — Pulp & Paper Sourcebook ch1.md`) — the same source
  photo reused across both Sourcebooks. Note added to both records.
```

```yaml
id: ref-cmp-v-notch-segmented-ball-valve
kind: figure
teaches: >
  A V-notch segmented ball valve (the Fisher Vee-Ball construction): a
  contoured V-notch ball in a segmented ball valve produces a modified
  equal-percentage flow characteristic with rangeability in excess of
  300:1, good control and shutoff capability, and a straight-through flow
  design with little pressure drop. Suited to erosive or viscous fluids and
  slurries with entrained solids — the V-notch ball stays in contact with
  the seal during rotation, producing a shearing effect that minimizes
  clogging.
concept-tags: [rotary valve, Vee-Ball, V-notch ball, segmented ball, rangeability, shearing effect, slurry service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.2.2 'V-Notch Segmented Ball Valve' (drawing W6087), p. 3-22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Product photo (ball element only, exterior/partial section) — no printed
  field callouts. Checked against `Component Index — Fisher Vee-Ball
  Rotary Valves.md`'s own drawing numbers — no match (drawing W6087 does
  not appear there); a different photo of the same product family, not a
  shared image.
```

```yaml
id: ref-cmp-eccentric-disk-control-valve
kind: figure
teaches: >
  An eccentric disk control valve: eccentric mounting of the disk pulls it
  away from the seal after opening begins, minimizing seal wear, and gives
  effective throttling through 90 degrees of disk rotation. Available in
  sizes through NPS 24, compatible with standard ASME flanges; frequently
  applied in large-size, high-temperature applications due to lower
  relative cost, though optimum control range is only about one-third that
  of a ball or globe valve.
concept-tags: [rotary valve, eccentric disk, disk rotation, seal wear, throttling control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.2.3 'Eccentric Disk Control Valve' (drawing W9486), p. 3-22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Product photo (exterior, flangeless body with actuator), no printed field callouts.
```

```yaml
id: ref-cmp-eccentric-plug-valve-sectional
kind: figure
teaches: >
  An eccentric plug valve construction: the rugged body and trim handle
  temperatures to 427°C (800°F) and shutoff pressure drops to 103 bar
  (1500 psig). The eccentric-plug path minimizes contact with the seat
  ring when opening, reducing seat wear and friction, prolonging seat
  life, and improving throttling performance; a self-centering seat ring
  and rugged plug allow forward or reverse flow with tight shutoff (reverse
  flow preferred for erosive applications). Hardened materials, including
  ceramics, are available for plug/seat ring/retainer; a segmented V-notch
  ball can substitute for the plug for higher-capacity requirements.
concept-tags: [rotary valve, eccentric plug valve, high temperature, tight shutoff, erosive service, self-centering seat ring]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.2.4 'Eccentric Plug Valve' (drawing W4170-4), p. 3-22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway, no printed field callouts. **Cross-reference (2026-09-15):**
  identical drawing number (W4170-4) to `pp-cmp-eccentric-plug-body-
  sectional` in `Component Index — Pulp & Paper Sourcebook ch1.md` (Figure
  1-12 "Sectional of Eccentric-Plug Control Valve Body") — the same source
  cutaway reused across both Sourcebooks. Pulp & Paper's own file already
  notes this drawing is a real, distinct revision from Oil & Gas ch1's
  `ogas-cmp-v500-eccentric-plug-cutaway` (drawing W4170-3/IL) — same
  eccentric-plug family, not the identical drawing; that finding is
  unchanged by this addition. Note added to both this record and the
  Pulp & Paper record.
```

### 3.3 Actuators (printed pp. 3-22 – 3-25)

```yaml
id: ref-cmp-direct-acting-diaphragm-actuator
kind: figure
teaches: >
  A direct-acting spring-and-diaphragm actuator: increasing air pressure
  pushes the diaphragm down and extends the actuator stem. The most
  commonly specified actuator style for dependability and simplicity of
  design.
concept-tags: [spring-and-diaphragm actuator, direct-acting, pneumatic actuator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.1 'Direct-Acting Diaphragm Actuator' (drawing W0363-2), p. 3-23"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway, no printed field callouts.
```

```yaml
id: ref-cmp-reverse-acting-diaphragm-actuator
kind: figure
teaches: >
  A reverse-acting spring-and-diaphragm actuator: increasing air pressure
  pushes the diaphragm up and retracts the actuator stem — the
  complementary action to the direct-acting style.
concept-tags: [spring-and-diaphragm actuator, reverse-acting, pneumatic actuator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.2 'Reverse-Acting Diaphragm Actuator' (drawing W0364-2), p. 3-24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway, no printed field callouts.
```

```yaml
id: ref-cmp-reversible-diaphragm-actuator
kind: figure
teaches: >
  A reversible spring-and-diaphragm actuator: assembled for either
  direct- or reverse-action, mounted here on a globe valve body.
concept-tags: [spring-and-diaphragm actuator, reversible actuator, pneumatic actuator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.3 'Reversible Diaphragm Actuator' (drawing W8486-3), p. 3-23"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway (actuator and valve body both sectioned), no printed field callouts.
```

```yaml
id: ref-cmp-direct-acting-rotary-diaphragm-actuator
kind: figure
teaches: >
  A direct-acting rotary diaphragm actuator: increasing air pressure
  pushes the diaphragm down, which may either open or close the valve
  depending on the orientation of the actuator lever on the valve shaft —
  the rotary-valve adaptation of the spring-and-diaphragm principle.
  Accessories can include pneumatic trip valves, volume tanks, lock-up
  systems, and handwheels; some versions omit the yoke for use on
  butterfly valves, louvers, and similar equipment.
concept-tags: [spring-and-diaphragm actuator, rotary actuator, direct-acting, actuator lever]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.4 'Direct-Acting Rotary Diaphragm Actuator' (drawing W9589-1), p. 3-23"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway, no printed field callouts.
```

```yaml
id: ref-cmp-piston-actuators-sliding-rotary
kind: figure
teaches: >
  Piston actuators for both sliding-stem (left panel) and rotary (right
  panel) valve constructions: pneumatically operated using high-pressure
  plant air (up to 11 bar/150 psig), often eliminating the need for a
  supply-pressure regulator. Furnish maximum thrust output and fast
  stroking speeds; can be double-acting for maximum force in both
  directions or spring-return for fail-open/fail-closed operation.
concept-tags: [piston actuator, high pressure air, double-acting, spring-return, fail-open, fail-closed]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.5 'Piston Actuators' (drawings X0923, X0992), p. 3-24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A 2-panel composite cutaway (sliding-stem piston actuator, drawing
  X0923, left; rotary piston actuator, drawing X0992, right) — no printed
  field callouts on either panel.
```

```yaml
id: ref-cmp-typical-manual-actuators
kind: figure
teaches: >
  Typical manual actuators for sliding-stem valves (top panel) and
  rotary-shaft valves (bottom panel): useful where automatic control isn't
  required but ease of manual operation still matters — often used on the
  bypass valve in a three-valve bypass loop around a control valve, for
  manual control during maintenance or automatic-system shutdown. Much
  less expensive than diaphragm, piston, or electro-hydraulic actuators.
concept-tags: [manual actuator, bypass valve, three-valve bypass loop, sliding-stem, rotary-shaft]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.6 'Typical Manual Actuators' (drawings W0595-3 'For Sliding-Stem Valves', W8176-1 'For Rotary-Shaft Valves'), p. 3-24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A 2-panel composite: top panel is a cutaway (globe valve with a
  handwheel/gear actuator, drawing W0595-3), bottom panel is a product
  photo (rotary valve with a handwheel actuator, drawing W8176-1) — both
  panels carry their own printed sub-caption ("FOR SLIDING-STEM VALVES" /
  "FOR ROTARY-SHAFT VALVES") but no field callouts.
```

```yaml
id: ref-cmp-rack-and-pinion-actuator-hpbv
kind: figure
teaches: >
  A rack-and-pinion actuator mounted on a high-performance butterfly valve
  (HPBV): rack-and-pinion designs give a compact, economical solution for
  rotary shaft valves, typically used for on-off or control applications
  requiring simple, compact solutions.
concept-tags: [rack-and-pinion actuator, rotary actuator, high performance butterfly valve, on-off application]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.7 'Rack-and-Pinion Actuator with HPBV' (drawing W9479), p. 3-24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Product photo (pneumatic rack-and-pinion actuator on a butterfly valve), no printed field callouts.
```

```yaml
id: ref-cmp-electric-actuator-dump-valve
kind: figure
teaches: >
  An electric actuator (Fisher easy-Drive) mounted on a dump valve:
  traditional electric actuator designs use an electric motor and gear
  reduction to move the valve, used for continuous control — the same
  easy-Drive product family shown in Chapter 2's sour-gas application
  panel, here on a small dump-valve body.
concept-tags: [electric actuator, easy-Drive, dump valve, gear reduction, continuous control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.3.8 'Electric Actuator with Dump Valve' (drawing W9797-3), p. 3-25"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Product photo, no printed field callouts. Same easy-Drive electric
  actuator product line as `ref-cmp-easy-drive-sour-gas-actuator` in
  `Component Index — Refining Sourcebook ch2.md` (different photo, same
  product family) — cross-referenced in both records' notes.
```

### 3.4 Control Valve Packing (printed pp. 3-25 – 3-28)

```yaml
id: ref-cmp-control-valve-packing-overview
kind: figure
teaches: >
  An overview composite of Fisher rotary and sliding-stem packing
  constructions (six stem/shaft packing-arrangement cutaways shown side by
  side) — the chapter's orientation figure before it breaks packing down
  into individual named systems (PTFE V-Ring, ENVIRO-SEAL PTFE/Duplex/
  Graphite ULF, HIGH-SEAL Graphite ULF) in the figures that follow.
concept-tags: [control valve packing, packing overview, sliding-stem packing, rotary packing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.4.1 'Control Valve Packing' (drawing W8616), p. 3-25"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A 6-panel composite of packing-stem cutaways with no per-panel captions
  or field callouts (unlike the individually-captioned figures that
  follow) — genuinely one continuous overview graphic per the source's own
  presentation, not several distinct headed items; catalogued as one
  record per the bundling precedent for continuous reference material.
```

```yaml
id: ref-topic-laminated-filament-graphite-packing
kind: topic
teaches: >
  Laminated and filament graphite packing material — described in prose
  immediately after PTFE V-Ring material but never given its own figure —
  suits high-temperature service or where low chloride content is
  desirable: it typically produces higher stem friction than PTFE and is
  impervious to challenging fluids. Recommended packing-box temperature
  range is cryogenic up to 649°C (1200°F). No lubrication is required, but
  an extension bonnet should be used once packing-box temperature exceeds
  427°C (800°F) — a real, specific threshold distinct from PTFE's own
  -40 to +232°C (-40 to +450°F) limit already captured on the single PTFE
  V-Ring figure.
concept-tags: [packing, laminated graphite, filament graphite, low chloride, high temperature packing, extension bonnet]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§3.4 'Laminated and Filament Graphite,' p. 3-25 (PDF p. 24) — running prose, not figure-anchored"
relatedFigures: [ref-cmp-control-valve-packing-overview]
relatedTopics: []
used-by: []
notes: >
  No figure in the chapter depicts this material specifically (the
  composite overview figure shows arrangement cutaways, not material
  callouts) — genuinely invisible to the original figures-only pass.
```

```yaml
id: ref-cmp-single-ptfe-vring-packing
kind: figure
teaches: >
  Single PTFE V-Ring packing: a coil spring between the packing and
  packing follower gives very good sealing performance with the lowest
  operating friction of the sliding-stem packing styles in this chapter —
  PTFE V-rings are spring-loaded, self-adjusting, require no lubrication,
  and need an extremely smooth (2–4 micro-inch RMS) stem finish to seal
  properly. Recommended packing-box temperature limits: −40 to +232°C
  (−40 to +450°F).
concept-tags: [packing, single PTFE V-ring, coil spring, low friction, stem finish]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.4.2 'Single PTFE V-Ring Packing' (drawing W8619), p. 3-27"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway, no printed field callouts.
```

```yaml
id: ref-cmp-enviroseal-ptfe-packing-system
kind: figure
teaches: >
  The ENVIRO-SEAL PTFE packing system's labelled construction: springs
  (Inconel 718/N07718), anti-extrusion washers, lantern rings, anti-
  extrusion rings (filled PTFE), PTFE packing ring, and a stainless packing
  box ring/follower — a live-loaded, compact spring design built around
  four principles: containing the pliable seal material via anti-extrusion
  components, proper stem/bore alignment, constant packing stress via
  Belleville-style springs, and minimizing seal-ring count.
concept-tags: [packing, ENVIRO-SEAL PTFE, live-loaded packing, anti-extrusion ring, lantern ring, Belleville spring, fugitive emissions]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.4.3 'ENVIRO-SEAL PTFE Packing System' (drawing A6163-1), p. 3-27"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway (SPRINGS (N07718-INCONEL 718), ANTI-EXTRUSION
  WASHERS, PACKING BOX RING (STAINLESS STEEL), PACKING FOLLOWER (STAINLESS
  STEEL), LANTERN RINGS (STAINLESS STEEL), ANTI-EXTRUSION RING (FILLED
  PTFE), PACKING RING (PTFE)) — a nomenclature source; Style Guide §6.3
  applies if ever placed on a slide.
```

```yaml
id: ref-cmp-enviroseal-duplex-packing-system
kind: figure
teaches: >
  The ENVIRO-SEAL Duplex packing system's labelled construction: a
  spring-pack assembly, bushings, PTFE-carbon/PTFE ("PTFE-CARBON/PTFE")
  packing set, a graphite packing ring, packing washers, and a packing box
  ring. Combines PTFE and graphite components for a low-friction,
  low-emission, fire-tested sliding-stem solution for process temperatures
  up to 232°C (450°F).
concept-tags: [packing, ENVIRO-SEAL Duplex, spring pack assembly, graphite packing ring, fire-tested, fugitive emissions]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.4.4 'ENVIRO-SEAL Duplex Packing System' (drawing 24B9310/A6844), p. 3-27"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway (SPRING PACK ASSEMBLY, BUSHING ×3, PACKING
  WASHERS, PACKING BOX RING, GRAPHITE PACKING RING, LANTERN RING, PTFE-
  CARBON/PTFE PACKING SET) — §6.3 applies if ever placed on a slide.
  **Cross-reference (2026-09-15):** identical drawing number
  (24B9310/A6844) to the ENVIRO-SEAL Duplex panel within
  `ogas-cmp-sliding-stem-packing-examples-ptfe-and-duplex` (one of four
  panels in Oil & Gas Sourcebook ch1's Figure 1-15) and to
  `pp-cmp-enviroseal-duplex-packing-system` in Pulp & Paper Sourcebook ch1
  (its own Figure 1-25) — the same source cutaway reused across all three
  Sourcebooks, here as its own standalone figure rather than one panel of
  a composite. Note added to all affected records.
```

```yaml
id: ref-cmp-enviroseal-graphite-ulf-packing
kind: figure
teaches: >
  The ENVIRO-SEAL Graphite ULF packing system's numbered-callout
  construction (springs, anti-extrusion washers, lantern rings, anti-
  extrusion rings/filled PTFE, packing ring/PTFE, packing box ring/
  stainless steel — numbered 200–217 on the figure itself rather than
  named in text): designed primarily for environmental applications at
  temperatures in excess of 232°C (450°F); thin PTFE layers inside the
  packing rings and thin PTFE washers on each side improve control, reduce
  friction, promote sealing, and extend cycle life.
concept-tags: [packing, ENVIRO-SEAL Graphite ULF, high temperature packing, numbered callout, fugitive emissions]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.4.5 'ENVIRO-SEAL Graphite ULF Packing System' (drawing 38B4612-A), p. 3-27"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway with numbered part-balloon callouts (200, 201, 207–214, 217) —
  not named field labels like the chapter's other packing figures; a
  parts-list keying these numbers to names is not printed on this page (it
  would live in the product's own instruction manual, not this
  sourcebook). Style Guide §6.3's "own printed field labels" guidance does
  not directly apply to numbered-balloon callouts without an
  accompanying key — flag this distinction if ever placed on a slide.
  **Checked, not merged:** drawing number 38B4612-A is one digit off from
  Pulp & Paper Sourcebook ch1's `pp-cmp-enviroseal-graphite-ulf-packing-
  system` (drawing 39B4612-A, its own Figure 1-26, same numbered-callout
  convention) — a real, likely-related drawing-family revision, not the
  identical drawing, matching the same "one digit apart, not merged"
  pattern as this file's own W0992-3/W0992-4 finding.
```

```yaml
id: ref-cmp-enviroseal-graphite-packing-rotary
kind: figure
teaches: >
  The ENVIRO-SEAL Graphite packing system for ROTARY valves: designed
  primarily for environmental applications from −6°C to 316°C (20°F to
  600°F) or where fire safety is a concern — the rotary-valve counterpart
  to the chapter's sliding-stem ENVIRO-SEAL variants.
concept-tags: [packing, ENVIRO-SEAL Graphite, rotary valve packing, fire safety, environmental service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.4.6 'ENVIRO-SEAL Graphite Packing System for Rotary Valves' (drawing W6125-1), p. 3-27"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cutaway, no printed field callouts. **Cross-reference (2026-09-15):**
  identical drawing number (W6125-1) to the "Graphite Packing" panel
  within `ogas-cmp-enviroseal-rotary-packing-arrangements` (Oil & Gas
  Sourcebook ch1's Figure 1-17), `pp-cmp-enviroseal-graphite-packing-
  rotary` (Pulp & Paper Sourcebook ch1's Figure 1-27), and confirmed
  directly against `Component Index — Fisher ENVIRO-SEAL Rotary Packing
  System.md`'s own manual — the same source cutaway now confirmed reused
  across all three Sourcebooks plus the product's own instruction manual.
  Note added to all affected records.
```

```yaml
id: ref-cmp-highseal-graphite-ulf-packing
kind: figure
teaches: >
  The HIGH-SEAL Graphite ULF packing system: identical to the ENVIRO-SEAL
  Graphite ULF packing system below the packing follower, but uses
  heavy-duty, large-diameter Belleville springs that provide additional
  follower travel and can be calibrated with a load scale for a visual
  indication of packing load and wear.
concept-tags: [packing, HIGH-SEAL Graphite ULF, Belleville spring, load scale, packing wear indication]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.4.7 'HIGH-SEAL Graphite ULF Packing System' (drawing W8533-1), p. 3-28"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway, no printed field callouts.
```

### 3.5 Positioners and Diagnostic Capabilities (printed pp. 3-28 – 3-29)

```yaml
id: ref-cmp-pneumatic-positioner
kind: figure
teaches: >
  A pneumatic positioner: takes a pneumatic input signal (usually 3–15
  psig) from a process controller and converts it to valve travel, supplying
  the valve actuator with the required air pressure to reach the correct
  position — the baseline of the chapter's three positioner configurations
  (pneumatic, analog I/P, digital valve controller).
concept-tags: [positioner, pneumatic positioner, valve travel, process controller]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.5.1 'Pneumatic Positioner' (drawing W7855-1), p. 3-28"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Product photo, no printed field callouts.
```

```yaml
id: ref-cmp-analog-ip-positioner
kind: figure
teaches: >
  An analog I/P positioner: performs the same function as a pneumatic
  positioner, but uses electrical current (usually 4–20 mA) instead of air
  as the input signal.
concept-tags: [positioner, analog I/P positioner, 4-20 mA signal]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.5.2 'Analog I/P Positioner' (drawing W8049), p. 3-28"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Product photo, no printed field callouts.
```

```yaml
id: ref-cmp-fieldvue-digital-valve-controller-overview
kind: figure
teaches: >
  A Fisher FIELDVUE digital valve controller: functions like the analog
  I/P positioner but with digital rather than analog signal conversion.
  Covers both non-communicating (a 4-20 mA current signal powers the
  electronics and controls the output) and communicating configurations —
  HART (digital signal over the same wires, enabling diagnostics),
  FOUNDATION fieldbus (all-digital protocol: control, reduced wiring, data,
  and diagnostics), and Profibus (largely on/off PLC applications).
  Advantages over pneumatic/analog positioners: reduced commissioning
  cost via automated configuration/calibration, ongoing diagnostics for
  valve/loop performance, DCS or maintenance-tool access to those
  diagnostics, and improved process-control accuracy.
concept-tags: [FIELDVUE, digital valve controller, HART, FOUNDATION fieldbus, Profibus, diagnostics, DCS]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.5.3 'Fisher™ FIELDVUE™ Digital Valve Controller' (drawing X0338), p. 3-28"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Product photo (instrument only, not mounted on a valve), no printed
  field callouts. Distinct from `ref-cmp-dvc7k-digital-valve-controller`
  (Chapter 2's DVC7K panel, `Component Index — Refining Sourcebook
  ch2.md`) — a different photo and a general/unbranded caption here vs.
  the specific DVC7K model there; not merged without confirming the same
  physical unit.
```

```yaml
id: ref-cmp-flowscanner-system
kind: figure
teaches: >
  The FlowScanner system: a portable, ruggedized computer plus travel and
  pressure sensors that let an in-plant person diagnose valve health
  through a series of off-line tests with the valve out of service — the
  pneumatic/analog-instrument counterpart to FIELDVUE's on-line Performance
  Diagnostics, letting a skilled technician decide whether to leave a valve
  in the line or remove it for repair.
concept-tags: [FlowScanner, off-line diagnostics, travel sensor, pressure sensor, valve signature testing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.5.4 'FlowScanner System' (drawing X0061), p. 3-29"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Product photo (valve/actuator with FlowScanner computer and cabling), no printed field callouts.
```

### 3.6 Levels (printed p. 3-29)

```yaml
id: ref-cmp-displacer-level-transmitter-schematic
kind: figure
teaches: >
  A displacer-type level transmitter's major parts, fully labelled:
  rotatable head, torque tube, displacer rod, cage, and displacer. As the
  displacer tends to move with rising fluid level, the resistive force is
  transmitted through the torque tube to the transmitter, which
  correspondingly signals fluid level to the control room — the
  displacement principle used to measure liquid level, interface level, or
  density/specific gravity inside a process vessel. Design temperatures can
  reach 454°C (850°F).
concept-tags: [level transmitter, displacer type, torque tube, displacement principle, interface level, specific gravity]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.6.1 'Displacer Level Transmitter Schematic' (drawing W2141-1), p. 3-29"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway/schematic (ROTATABLE HEAD, TORQUE TUBE, DISPLACER
  ROD, DISPLACER, CAGE) — a nomenclature source; Style Guide §6.3 applies
  if ever placed on a slide. Construction-level counterpart to Chapter 2's
  plain `ref-cmp-digital-level-transmitter-overview` product photo
  (`Component Index — Refining Sourcebook ch2.md`) — cross-referenced in
  that record's notes.
```

```yaml
id: ref-cmp-caged-sensor
kind: figure
teaches: >
  A caged displacer sensor: provides more stable operation than a
  cageless sensor for vessels with internal obstructions or considerable
  internal turbulence.
concept-tags: [level transmitter, caged sensor, displacer, internal turbulence]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.6.2 'Caged Sensor' (drawing W7926), p. 3-29"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Product photo (external cage vessel with mounted transmitter head), no
  printed field callouts. Companion to `ref-cmp-cageless-sensor` (Figure
  3.6.3, same page).
```

```yaml
id: ref-cmp-cageless-sensor
kind: figure
teaches: >
  A cageless displacer sensor: generally used on specific-gravity and
  interface-control applications requiring large displacers more easily
  accommodated by flange connections; many available displacer-stem
  lengths permit lowering the displacer to the most advantageous depth in
  the vessel.
concept-tags: [level transmitter, cageless sensor, displacer, specific gravity, interface control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 3.6.3 'Cageless Sensor' (drawing W8231), p. 3-29"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Product photo (transmitter head with a bare displacer rod/weight hanging
  below), no printed field callouts. Closes Chapter 3; Chapter 4 "Refinery
  Control Valve Application Reviews" begins on the next PDF page.
```

## Open Items

- **`kind: topic` pass added 2026-09-18.** Read the real body prose in
  full (PDF pp. 18-29) against every existing figure entry's own `teaches`
  field before authoring anything — this chapter's original figures-only
  pass already wrote unusually thorough `teaches` fields (most already
  restate the surrounding prose almost completely), so the genuine gap
  was narrow. Two entries added, both covering sections with **no figure
  at all**: `ref-topic-port-guided-valve-limitations` (§3.1, p. 3-20) and
  `ref-topic-laminated-filament-graphite-packing` (§3.4, p. 3-25).
- **Two duplicate-boilerplate findings, zero entries authored for
  either — confirmed against real prose, not assumed from topical
  similarity:**
  - The chapter's "Low Emission Packing" paragraph (LDAR programs,
    100-500 ppmv monitoring threshold, ENVIRO-SEAL's four design
    principles) matches Pulp & Paper Sourcebook ch1's own
    `pp-topic-fugitive-emissions-regulatory-framework` almost exactly in
    substance and framing (LDAR terminology, the same ppmv range, the same
    four numbered design principles) — not authored again here.
  - The chapter's "Electro-hydraulic Actuators" paragraph is a condensed
    restatement, adding no numbers or detail beyond what Oil & Gas
    Sourcebook ch2's own `ogas-topic-electro-hydraulic-actuator-
    configurations` already teaches at real depth (self-contained vs.
    externally-powered configurations, fail-safe mechanism) — not
    authored again here.
- **Chapter boundary confirmed directly**: PDF p.18 (divider, with its own
  mini TOC) through PDF p.29 (printed 3-29). PDF p.30 rendered and
  confirmed to be the Chapter 4 divider.
- **Full coverage accounting**: 32 figures in range (Figures 3.1.1–3.1.6,
  3.2.1–3.2.4, 3.3.1–3.3.8, 3.4.1–3.4.7, 3.5.1–3.5.4, 3.6.1–3.6.3), all 32
  catalogued — confirmed against a full-text sweep for `Figure 3.` across
  every page in range plus direct rendering of all 12 pages. No gaps.
- **No low-confidence flags** beyond the ones called out in individual
  records' notes (the W7027-3 shared-number-not-confirmed-identical flag
  on Figure 3.1.1, and the numbered-vs-named-callout distinction on Figure
  3.4.5).
- **No duplicate figure numbers or source citation errors found** within
  this chapter itself.
- **Table exclusion confirmed**: Table 3.4.1 "Sliding-Stem Packing
  Selection Guidelines" and Table 3.4.2 "Rotary Packing Selection
  Guidelines" (both printed p. 3-26) are genuine reference tables, not
  figures — excluded, same practice as every other chapter/document in
  this library.
- **Cross-reference findings — the most significant finding of this
  chapter.** Chapter 3 is the Refining Sourcebook's shared-fundamentals
  chapter, and Fisher genuinely reuses the same engineering drawings across
  its sourcebook siblings and product manuals, confirmed by drawing number
  (not by title similarity):
  - **Exact-match cross-references added** (same drawing number, both
    records updated): `ref-cmp-three-way-balanced-plug-valve` (W9045-1) ↔
    Pulp & Paper ch1; `ref-cmp-high-performance-butterfly-valve` (W4641) ↔
    Pulp & Paper ch1; `ref-cmp-eccentric-plug-valve-sectional` (W4170-4) ↔
    Pulp & Paper ch1; `ref-cmp-enviroseal-duplex-packing-system`
    (24B9310/A6844) ↔ Oil & Gas ch1 (one panel of its Figure 1-15
    composite) and Pulp & Paper ch1; `ref-cmp-enviroseal-graphite-packing-
    rotary` (W6125-1) ↔ Oil & Gas ch1 (one panel of its Figure 1-17
    composite), Pulp & Paper ch1, and the standalone Fisher ENVIRO-SEAL
    Rotary Packing System manual index.
  - **Related-but-distinct, checked and NOT merged** (drawing numbers one
    digit apart, same design family): `ref-cmp-balanced-plug-cage-style-
    valve` (W0992-3) vs. Oil & Gas ch1 / Power & Severe Service ch1 / Pulp
    & Paper ch1's shared W0992-4 ET-globe cutaway.
  - **Shared number, flagged as unconfirmed** (this pass did not render
    the comparison page, out of this chapter's own scope):
    `ref-cmp-single-ported-globe-valve-body` (W7027-3) vs. Oil & Gas ch8's
    Figure 8-15 and a Pulp & Paper ch1 figure — Pulp & Paper's own existing
    note already found the Oil & Gas ch8 instance of this number to be a
    genuinely different rendering, so this is left unmerged and flagged
    for a future direct visual pass rather than assumed either way.
  - Every other drawing number in this chapter (35A7592-E, W0971-3,
    W0997-2, W0467-1a, W6087, W9486, W0363-2, W0364-2, W8486-3, W9589-1,
    X0923, X0992, W0595-3, W8176-1, W9479, W9797-3, W8616, W8619, A6163-1,
    38B4612-A, W8533-1, W7855-1, W8049, X0338, X0061, W2141-1, W7926,
    W8231) was checked against the whole library and found to be new, with
    no existing record under any of these numbers.
  - **Reciprocal edits made**: `Component Index — Pulp & Paper Sourcebook
    ch1.md` (four records touched: the W9045-1, W4641, W4170-4, and
    24B9310/A6844 records) and `Component Index — Oil & Gas Sourcebook
    ch1.md` (two records touched: the 24B9310/A6844 panel within Figure
    1-15, and the W6125-1 panel within Figure 1-17) had a one-line
    cross-reference note added pointing back to this file, per the "note
    the relationship explicitly in both records" rule. `Component Index —
    Fisher ENVIRO-SEAL Rotary Packing System.md` was checked but not
    edited — it already documents the W6125-1 drawing generically as
    appearing "across the Sourcebook family" without naming each one, so
    no update was needed there.
- **Archive/legacy note**: none consulted, none needed.
