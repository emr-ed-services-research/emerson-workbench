---
title: Subject-Matter Index — Pulp & Paper Sourcebook ch10B
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch10B — Kamyr Continuous Digesters
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 10B

**Chapter 10B — "Kamyr® Continuous Digesters."** Standing full-chapter
cataloguing pass, continuing the whole-book completion pass begun with
Chapter 1 (chapters 1-9 and 10A already completed and closed out; this
chapter closes the digester pair). Every real page in the chapter's
confirmed range was rendered and read directly (rigor standard), every real
figure identified and visually verified against the rendered page. This is
a long chapter by page count (24 pages) but a short one by figure count —
only 3 real figures — closing in five pages of an unnumbered, multi-page
KAMYR-CONTINUOUS-DIGESTER / FISHER-CONTROL-VALVE-PRODUCT-DESIGN
valve-selection table. A second `kind: topic` pass (2026-09-18), applying
the same conceptual/mechanism-prose indexing already run on the Control
Valve Handbook and the Oil & Gas and Power & Severe Service sourcebooks,
added 12 topic entries covering the chapter's real process-engineering
narrative (digester configuration and pressurizing, chip feeding and
pre-steaming, the high pressure feeder's pressure-lock mechanism, top
separator level indication, impregnation, two-stage heating, kraft cooking
chemistry, counter-current hi-heat washing, the blowing stage, and the
chapter's own valve-metallurgy/selection-philosophy summary) — distinct
from the ~50 per-valve-tag write-ups (same "Valve: TAG — description /
typical process conditions / typical valve selection" format already seen
in this book's other Kamyr/valve-selection chapters), which remain
correctly excluded as reference-data-equivalent. Chapter total: 3 figures +
12 topics = 15 components.

Chapter boundaries confirmed directly by rendering: PDF page 131 = printed
p. 10B-1 (Chapter 10B divider, "Kamyr® Continuous Digesters"), PDF page 154
= printed p. 10B-24 (the valve-selection table's last page, genuine content
— no trailing blank). PDF page 155 confirmed as the Chapter 11 divider
("Black Liquor Evaporator & Concentrator"). Zero page offset throughout
(PDF page = printed page number + 130). Chapter 10B = PDF pp. 131-154.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. All three figures are genuinely unique to this book — no archive, legacy, or cross-book overlap found. |

## Components

### Chapter 10B — Chip Feeding and Steaming (printed pp. 10B-3–10B-4)

```yaml
id: pp-cmp-kamyr-chip-feeding-system
kind: figure
teaches: >
  The Kamyr continuous digester's chip-feeding path from surge bin through
  the low pressure feeder and steaming vessel: an inclined screw conveyor
  feeds chips into the bin activator/chip meter, which discharges through a
  low pressure feeder into the steaming vessel (an internal screw conveyor
  carries chips through low pressure steam), with low-pressure steam
  supplied from the No. 1 and No. 2 flash tanks and fresh make-up steam, a
  condenser take-off, and a blower-to-condenser vent path for exhaust and
  non-condensable gases — the pre-pressurization and pre-steaming stage
  before chips reach the high pressure feeder and digester proper.
concept-tags: [Kamyr digester, chip feeding, steaming vessel, low pressure feeder, chip meter, bin activator, flash tank steam, pre-steaming]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10B-1 'Chip Feeding,' p. 10B-3 (PDF p. 133), drawing E1214"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled cutaway-style process illustration, drawing number E1214
  printed at lower left. Every valve mentioned in the surrounding "Valve:
  TV-2A Chip bin temperature" write-up (and the later TV-2/TV-4/PV-5/PV-5A
  write-ups on pp. 10B-6–10B-7) references equipment shown on this figure;
  the chapter's closing valve-selection table (pp. 10B-20–10B-24) is
  excluded here as a table (see Open Items). Checked against the whole
  library: no exact drawing-number match found — genuinely unique to this
  chapter.
```

```yaml
id: pp-cmp-kamyr-steaming-vessel
kind: figure
teaches: >
  A detailed cutaway of the Kamyr steaming vessel itself: conveyor screw
  carrying chips through the horizontal cylinder, relief steam vented at
  PV-5, fresh make-up low pressure steam entering at PV-2, and a sight glass
  for visual monitoring — the vessel-level detail that Figure 10B-1's
  system-level diagram abstracts into a single "Steaming Vessel" block.
concept-tags: [Kamyr digester, steaming vessel, conveyor screw, relief steam, make-up steam, sight glass, pre-steaming]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10B-2 'Steaming Vessel,' p. 10B-4 (PDF p. 134), drawing E1215"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled cutaway, drawing number E1215 printed at lower left. Zooms
  into the "Steaming Vessel" block already shown at system level in Figure
  10B-1 — the pairing is the same "system diagram then vessel-level detail"
  pattern this book uses elsewhere (e.g. ch7's DSA nozzle then DSA system
  diagram). Checked against the whole library: no exact drawing-number
  match found — genuinely unique to this chapter.
```

### Chapter 10B — Digester Configuration and Pressurizing (printed pp. 10B-1–10B-2)

```yaml
id: pp-topic-kamyr-digester-configuration-types
kind: topic
teaches: >
  Kamyr continuous digesters exist in five basic configurations — single
  vessel hydraulic (the original design, chips fully submerged in liquor
  with no vapor present, heated indirectly via heat exchangers), two vessel
  hydraulic (a separate high-pressure impregnation vessel added ahead of the
  digester proper), single/two vessel steam-liquor phase digesters
  (developed primarily for sulfite, pre-hydrolysis Kraft, and neutral
  sulfite semi-chemical pulping), and a steam/liquor phase digester with an
  "asthma feeder" for non-wood fibers (sawdust, shavings, straw, bamboo,
  jute). The single-vessel hydraulic design produces very uniform, strong
  pulp suited to liner or bleachable grades; the two-vessel design was
  originally developed for very large tonnage (above 1200 TPD) because a
  single large-diameter vessel makes uniform circulation harder to
  maintain, and adding a separate impregnation vessel lets every chip reach
  the same temperature before entering the cooking vessel — the two-vessel
  system is essentially unaffected by varying chip furnish for this reason.
concept-tags: [Kamyr digester, digester configuration, hydraulic digester, steam-liquor phase digester, impregnation vessel, chip furnish, pulp uniformity]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 10B opening prose, p. 10B-1 (PDF p. 131) — no figure, real body prose"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  Grounded directly in the chapter's own opening prose, read in full before
  authoring. This is the "why two-vessel scales better" reasoning that
  Figure 10B-3's cooking-flow diagram shows structurally (impregnation
  vessel feeding the digester vessel) but does not explain.
```

```yaml
id: pp-topic-digester-pressurizing-control-system
kind: topic
teaches: >
  The digester pressurizing system uses three layered control devices, each
  a step further from normal operation. The primary control valve on the
  input liquor line holds digester pressure at its 165 psig set point via
  rapid-response control — raising the set point admits more liquor and
  raises pressure, lowering it does the reverse. The secondary device is an
  automatic relief valve set slightly higher (180 psig) that bleeds liquor
  from the lower cooking-zone header to the No. 2 flash tank whenever
  pressure exceeds its set point — normally closed, used only as a relief
  valve. The tertiary device is an emergency safety device only: a pressure
  switch mounted on the digester shell that stops the cold blow pump (and
  therefore the make-up liquor pump) if pressure keeps rising past 225 psig
  after the first two devices have failed to hold it.
concept-tags: [Kamyr digester, digester pressurizing, pressure control, relief valve, pressure switch, layered safety control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Pressurizing,' p. 10B-2 (PDF p. 132) — no figure, real body prose"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  A real, escalating three-tier control philosophy (rapid-response primary
  → relief secondary → emergency shutdown tertiary), not just three
  unrelated valve descriptions — worth teaching as one design pattern.
```

```yaml
id: pp-topic-chip-feeding-mechanism
kind: topic
teaches: >
  The chip meter is a rotating star feeder with seven pockets that
  discharges a fixed volume of chips per revolution; production rate is
  regulated by varying the star feeder's drive speed, not by changing pocket
  volume. The low pressure feeder downstream is a second rotating tapered
  star feeder whose primary function is to form a seal between atmospheric
  pressure and the 15-18 psig steaming-vessel pressure — steam is
  deliberately injected into the empty rotor pockets after chips discharge,
  both to blow sawdust/fines out and to relieve the trapped pressure before
  the pocket returns to atmosphere. The feeder is designed so one pocket is
  always filling, one discharging, and one relieving steam simultaneously,
  ensuring a continuously steady chip feed rather than a pulsed one.
concept-tags: [Kamyr digester, chip meter, low pressure feeder, star feeder, chip feeding, pressure sealing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Chip Feeding,' pp. 10B-2–10B-3 (PDF pp. 132-133) — no figure of its own; expands on Figure 10B-1's block diagram"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The three-pocket-state design (fill/discharge/relieve simultaneously) is
  the real mechanism behind why the feed rate stays steady — Figure 10B-1
  shows the hardware but not this operating principle.
```

```yaml
id: pp-topic-pre-steaming-purpose
kind: topic
teaches: >
  Pre-steaming in the steaming vessel has three real purposes: removing
  gases and air from the chips, raising chip temperature to approximately
  250°F, and bringing chips to a more uniform moisture content — with a
  secondary requirement that the steaming-vessel pressure (15-18 psig) must
  always exceed the vapor pressure of the liquor in the top circulation
  line, or that liquor will boil when it leaks back into the low-pressure
  chip-chute area. Steam is supplied from two sources — flash steam from the
  No. 1 flash tank (uncontrolled, dependent on digester extraction flow) and
  fresh make-up low-pressure steam (which is controlled, and makes up
  whatever the flash-tank supply doesn't cover).
concept-tags: [Kamyr digester, pre-steaming, steaming vessel, pressure balance, moisture uniformity, flash steam]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Pre-steaming and Conditioning,' p. 10B-4 (PDF p. 134) — no figure of its own; expands on Figure 10B-2's cutaway"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The pressure-balance requirement (steaming vessel must exceed the top
  circulation line's liquor vapor pressure) is the real reason this stage
  needs its own pressure control at all, not stated in Figure 10B-2's own
  caption.
```

```yaml
id: pp-topic-high-pressure-feeder-pressure-lock-mechanism
kind: topic
teaches: >
  The high pressure feeder transfers chips from the 15-18 psig steaming
  vessel to the 165 psig digester using a rotor with four helical pockets at
  45° to each other, fed continuously by two liquor pumps (a chip chute
  pump that pulls chips into the rotor, and a top circulation pump that
  flushes chips out of the discharged pocket into the digester). A design
  detail that looks like a defect is actually deliberate: liquor leaks
  continuously around the rotor due to the pressure differential, and this
  leakage is an intentional lubrication and grit-washing feature of the
  feeder plug/housing interface, not a fault to eliminate. Because the
  leaking liquor is hot enough to flash to vapor if it isn't kept above its
  vapor pressure, the feeder must never be started unless the top section of
  the digester has first been cooled below 240°F with cold filtrate — starting
  it warm risks rapid boiling ("flashing") at the feeder and chip chute.
concept-tags: [Kamyr digester, high pressure feeder, pressure lock, liquor leakage lubrication, startup safety, flashing risk]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Body prose, pp. 10B-5–10B-6 (PDF pp. 135-136) — no figure of its own"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The "leakage is a deliberate lubrication feature, not a defect" point and
  the 240°F startup constraint are both genuinely counter-intuitive/
  safety-critical operating knowledge with no home in any figure caption.
```

```yaml
id: pp-topic-top-separator-level-indication
kind: topic
teaches: >
  The top separator combines two functions: it is a screened cylinder that
  keeps liquor separated from chips as they enter the digester (recirculated
  liquor goes back through the high pressure feeder to the top separator
  again), and its slow-moving internal screw conveyor doubles as a
  level-indicating device — a small paddle on the conveyor is pushed against
  by the resistance of the chip column, and a torque indicator on top of the
  separator measures that resistance and transmits it to the control panel
  as a green/yellow/red level indication. The digester is normally run at
  the yellow-red boundary; if chip load becomes severe enough that chips
  ride hard against the paddle, motor amperage rises and an alarm warns the
  operator to take corrective action.
concept-tags: [Kamyr digester, top separator, level indication, torque measurement, chip column, operator alarm]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Body prose, p. 10B-6 (PDF p. 136) — no figure of its own; the top separator is labeled but not detailed in Figure 10B-3"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The torque-to-amperage-to-alarm indication chain is a real instrumentation
  mechanism worth teaching in its own right, distinct from the separator's
  physical role in Figure 10B-3's flow diagram.
```

### Chapter 10B — Cooking Flow (printed p. 10B-6)

```yaml
id: pp-cmp-kamyr-cooking-flow-diagram
kind: figure
teaches: >
  The complete Kamyr digester cooking-flow path as one labeled process
  diagram: chips plus white/black liquor enter the impregnation vessel
  (with sluice and sluice-trim liquor draw-off), then flow into the
  digester vessel proper through three heating/cooking zones in
  sequence — Cook Zone (cook steam), MOC Zone (MOC steam/trim), and EMOC
  Zone (EMOC steam/trim, wash liquor in) — with upper and lower extraction
  draw-offs from the cook zone and a final blow discharge at the bottom.
  This is the chapter's central process schematic, tying together the
  pressurizing/chip-feeding stage (Figures 10B-1/10B-2), the heating-stage
  narrative (upper/lower cooking zones, KV-19 modified cooking extraction),
  and the extraction/hi-heat-washing narrative (KV-16 digester extraction,
  HV-16/HV-20 wash circulation) that follow it in the body text.
concept-tags: [Kamyr digester, cooking flow, impregnation vessel, cook zone, MOC zone, EMOC zone, upper extraction, lower extraction, blow, sluice]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10B-3 'Cooking Flow Diagram,' p. 10B-6 (PDF p. 136), drawing E1222"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number E1222 printed at
  lower left. The chapter's only true "whole-digester" process schematic —
  every named valve write-up from "Impregnation" (pp. 10B-9–10B-11) through
  "Blowing" (pp. 10B-17–10B-19) locates its discussed zone/flow against this
  one diagram, the same relationship Chapter 8's whole-mill overview has to
  the industry-specific chapters that follow it. Checked against the whole
  library: no exact drawing-number match found — genuinely unique to this
  chapter.
```

### Chapter 10B — Impregnation, Heating, Cooking, Extraction, and Blowing (printed pp. 10B-11–10B-19)

```yaml
id: pp-topic-impregnation-stage-purpose
kind: topic
teaches: >
  In the impregnation zone, chips are subjected to complete soaking or
  penetration of the cooking liquor at approximately 250°F, lasting about
  45 to 60 minutes at design tonnage — long enough for a more uniform pulp
  even from a poor-quality chip furnish. Incomplete penetration before the
  heating stage produces chips with uncooked centers, a real defect this
  stage exists specifically to prevent.
concept-tags: [Kamyr digester, impregnation, liquor penetration, chip furnish, uncooked centers]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Impregnation,' p. 10B-11 (PDF p. 141) — no figure of its own"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  Short section but a real, distinct pedagogical point: penetration
  completeness, not just temperature, is what this stage controls for.
```

```yaml
id: pp-topic-two-stage-heating-mechanism
kind: topic
teaches: >
  The heating stage brings chips to within 20°F of final cooking
  temperature via two sequential indirect-heating passes (upper then lower
  cooking zone), each withdrawing liquor through a screen plate, circulating
  it through a heater, and returning it through a central distribution
  chamber so heat enters uniformly across the whole chip column. Screen
  sections are built in two alternating sets — one set draws liquor while
  the other rests and is cleaned by the wiping action of the downward-moving
  chip column — switched automatically via digester switching valves on a
  short (~90 second) cycle specifically to keep the screens from plugging
  with chips and fiber; this switching produces a real, useful diagnostic
  signature: temperature recorders on the heaters show a 5-10°F cycle tied
  to the switching timing, and this cycling — not just a single steady
  reading — is what confirms the chip column is actually moving. A sudden
  drop in heater inlet temperature, or the inlet/outlet temperatures
  converging, both indicate the chip column has stopped moving.
concept-tags: [Kamyr digester, heating stage, screen extraction, switching valves, chip column movement, temperature diagnostic]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Heating Stage,' pp. 10B-12–10B-14 (PDF pp. 142-144) — no figure of its own; several KV-tagged switching valves discussed here appear only in the closing reference table, not as figures"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The "temperature cycling is a diagnostic for chip-column movement, not
  just a control artifact" point is genuinely non-obvious and worth its own
  entry — nowhere stated as a figure caption.
```

```yaml
id: pp-topic-kraft-cooking-chemistry-continuous
kind: topic
teaches: >
  In the cooking zone, the active cooking chemicals — sodium hydroxide
  (NaOH) and sodium sulfide (Na2S) — react with the lignin in wood, the
  cementing material holding individual fibers together, converting it into
  compounds soluble in the alkaline cooking liquor and freeing the fibers
  into the fibrous mass called wood pulp. The same chemicals also attack the
  pulp fibers themselves, which is undesirable since the fibers must remain
  in their original condition — so cooking conditions are chosen specifically
  to maximize lignin removal while minimizing attack on the cellulose
  fibers, a real chemistry trade-off, not simply "cook until done."
concept-tags: [Kamyr digester, kraft cooking chemistry, lignin, sodium hydroxide, sodium sulfide, delignification, fiber preservation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Cooking Zone,' p. 10B-14 (PDF p. 144) — no figure of its own"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The actual chemistry (what lignin removal trades off against) is real,
  transferable process knowledge distinct from any valve-selection content
  elsewhere in the chapter. Id disambiguated from ch10A's own
  `pp-topic-kraft-cooking-chemistry` (batch digesters — H-factor,
  cook-cycle duration, liquor-mixture recipe) during this pass's vault-wide
  collision sweep: that entry and this one describe the same underlying
  chemistry but from different process contexts (batch vs. continuous) and
  are cross-referenced separately within their own chapters, so both are
  kept as distinct entries rather than merged.
```

```yaml
id: pp-topic-counter-current-extraction-washing-mechanism
kind: topic
teaches: >
  Counter-current hi-heat washing works by extracting a greater volume of
  liquor through the wash-zone screens than the volume of wash filtrate
  flowing down with the chips, creating an upflow of wash liquor that
  displaces the stronger residual cooking liquor being extracted above it.
  The "dilution factor" — pounds of excess filtrate added per minute divided
  by pounds of oven-dry pulp produced per minute — is the real trade-off
  variable: more filtrate produces less soda loss from the pulp, but past
  some point the extra filtrate has to be evaporated by steam heat at a cost
  greater than the soda it saves, so the dilution factor is deliberately
  balanced at the most efficient point rather than maximized.
concept-tags: [Kamyr digester, counter-current washing, hi-heat washing, dilution factor, soda loss economics]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Extraction and Hi-Heat Washing,' pp. 10B-15–10B-16 (PDF pp. 145-146) — no figure of its own"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The dilution-factor cost/quality balance is a real, quantifiable process
  economics concept, not just a washing-mechanism description.
```

```yaml
id: pp-topic-digester-blowing-stage-mechanism
kind: topic
teaches: >
  Before blowing, the pulp mass undergoes three sequential temperature
  changes: first cooled/quenched 40-50°F at the extraction zone (where
  up-flowing wash liquor meets down-flowing residual cooking liquor),
  then gradually cooled another 30°F through the wash zone, then cooled
  rapidly by about 60°F in the blowing dilution zone immediately before the
  blow itself — this final rapid cooling exists specifically to avoid
  mechanical damage to the fibers during the violent expansion that occurs
  as pressure drops from digester pressure to atmospheric in the blow tank.
  A load-reading ammeter on the outlet-device motor indicates pulp
  consistency at the bottom of the digester (faster outlet-device speed
  means higher consistency), giving the operator fine control over digester
  chip level. Before the pulp reaches the blow tank, two isolation valves
  protect the blow unit itself: the unit must be filled with liquor and
  pressurized to at least 175 psig before the large isolation valve against
  full digester pressure can be opened, since opening it against an empty,
  unpressurized blow unit would severely damage it — the same two-stage
  pressurization safety principle used for the top circulation lines.
concept-tags: [Kamyr digester, blowing, temperature quench, fiber damage prevention, outlet device consistency control, blow unit pressurization]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Blowing,' pp. 10B-17–10B-19 (PDF pp. 147-149) — no figure of its own"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  The three-stage quench sequence and the blow-unit pressurization safety
  sequence are both real, transferable mechanisms with no figure of their
  own to carry them.
```

```yaml
id: pp-topic-kamyr-valve-metallurgy-selection-philosophy
kind: topic
teaches: >
  Across the Kamyr process, control valve metallurgy is usually 316
  stainless steel, except carbon steel has more recently been considered for
  some steam and filtrate service, and titanium or 317 stainless is often
  used on the C/D, D1, and D2 extractions and stock flow. Metal-seated ball
  valves with a scraper (HD) seat design are used specifically where the
  service involves white liquor or cooking-circulation scaling; metal seats
  are also used on high-pressure-drop throttling service where the seat
  must resist erosive wear at high velocity. The heavy-duty butterfly valve
  (Special 8580) is used almost exclusively for digester circulation
  switching because its stellite bearings, double packing, and extra-heavy
  shaft — and critically, its seatless design — mean it cannot jam from
  scale buildup the way a seated valve could. The chapter's own honest
  caveat: valve-technology selection historically has not been driven
  solely by process requirements, but also by what valve technology was
  available at the time of a given mill's installation.
concept-tags: [Kamyr digester, valve metallurgy, scraper seat, metal seat erosion resistance, seatless butterfly valve, valve selection history]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Control Valve Selection,' p. 10B-19 (PDF p. 149) — no figure; the chapter's own closing selection-philosophy summary, immediately before the reference table"
delivery: n/a — topic entry, not a figure
used-by: []
notes: >
  This is the chapter's own meta-level summary of WHY specific valve
  designs get chosen across the whole process — distinct from any single
  per-tag write-up, and the only place the seatless-butterfly-vs-scaling
  reasoning is stated explicitly.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 131-154 in full: p. 131 =
  printed 10B-1 (Chapter 10B opening, "Kamyr® Continuous Digesters"), p. 154
  = printed 10B-24 (the closing valve-selection table's last page — genuine
  content, not blank). PDF page 155 confirmed as the Chapter 11 divider
  ("Black Liquor Evaporator & Concentrator"). Zero page offset (PDF =
  printed + 130) throughout.
- **Full chapter coverage.** All 3 real figures in range (Figures 10B-1
  through 10B-3) located and catalogued; every page 131-154 was rendered
  and read directly, no gaps in the numeric sequence — the chapter contains
  exactly three figures, confirmed, none skipped. Pages 10B-7 through
  10B-19 (PDF 137-149) are exclusively per-valve-tag narrative write-ups
  ("Valve: TAG — description / Typical process conditions / Typical valve
  selection") with no figures at all, confirmed by direct reading of every
  page, not assumed from a sparse text-extraction hit.
- **No low-confidence flags.** Every caption, drawing number, and page
  location was confirmed by direct visual inspection of the rendered PNG at
  150 dpi, not text extraction alone.
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter.
- **Table exclusion confirmed.** The chapter's closing content (pp.
  10B-20–10B-24, PDF 150-154) is an unnumbered, five-page "KAMYR CONTINUOUS
  DIGESTER / FISHER CONTROL VALVE PRODUCT DESIGN" valve-tag reference table
  (Kamyr Tag#, Application Description, Control Function, and Fisher
  product-line columns spanning V150/V200/V300/V500/CV500/DSV/8580/EZ) —
  excluded per the standing valve-application/valve-tag reference-table
  rule already applied to this book's other Kamyr/valve-selection chapters
  (10A, 11, 12, 13, 14). No "Figure" or "Table" caption/number appears
  anywhere on any of its five pages, and its content is purely tabular, not
  a diagram.
- **Cross-reference findings.** Checked all three drawing numbers (E1214,
  E1215, E1222) against the whole library — **no match found for any of
  them**. Also grepped the whole library for "Kamyr," "continuous
  digester," "chip feeding," and "cooking flow": the only other hit is this
  book's own Chapter 10A (batch digesters — a related but distinct process,
  already confirmed as its own genuinely unique content in that chapter's
  own Open Items). Genuinely unique to this Pulp & Paper book; continuous-
  digester process detail is industry-specific content absent from Oil &
  Gas and Power & Severe Service. **Also confirmed during this pass's
  whole-library collision sweep (see below): two pre-existing, real id
  collisions were found in the Oil & Gas Sourcebook's own chapter files**
  (`ogas-cmp-amine-treatment-unit`, appearing in both `... ch8.md` and
  `... ch10.md`; `ogas-cmp-compressor-system`, appearing in both `... ch7.md`
  and `... ch9.md`) — neither is a Pulp & Paper id, neither was touched or
  introduced by this pass, and fixing them is out of scope for this chapter
  closure, but they are flagged here per the sweep's own "catch collisions
  wherever they are, not just in the chapters being touched" mandate; worth
  a dedicated follow-up pass on the Oil & Gas Sourcebook.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for all three of this
  chapter's figure components.
- **`kind: topic` pass (2026-09-18).** 12 new topic entries added, each
  grounded directly in body prose read in full (not inferred), none
  duplicating the per-valve-tag write-ups or the closing reference table.
  None of the 12 carry `relatedFigures`/`relatedTopics` cross-references —
  each is self-contained Kamyr-specific process knowledge with no natural
  link to another chapter's entries. Ids checked for uniqueness against the
  whole vault Subject-Matter Index namespace: one real collision found and
  fixed — the cooking-chemistry entry originally reused ch10A's own
  `pp-topic-kraft-cooking-chemistry` id (batch-digester chemistry); renamed
  to `pp-topic-kraft-cooking-chemistry-continuous` since the two describe
  the same chemistry from distinct process contexts and are each
  cross-referenced within their own chapter. No other collisions found.
  Chapter total now 15 components (3 figures + 12 topics).
