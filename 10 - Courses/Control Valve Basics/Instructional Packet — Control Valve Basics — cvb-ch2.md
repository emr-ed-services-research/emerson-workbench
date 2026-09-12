---
title: Instructional Packet — Control Valve Basics
type: review
tags:
  - instructional-packet
  - pipeline
course: Control Valve Basics
chapter: cvb-ch2
updated: 2026-09-12
---

# Instructional Packet — cvb-ch2 (Valve and Actuator Types)

> [!note] How to review this document
> This is the content unit Stage 3 will actually compose from — one or
> more `primitives[]` per concept once migrated to that shape (pre-
> migration content renders its flat `t`/`sources`/`template` instead,
> labeled as such), each competency's own confidence state
> (`provisional`/`confirmed`/`revised`, with why when revised), and a
> concept-granularity flag (3+ components cited — worth a glance, never a
> blocking failure). This accumulates across Stage 1 (the concept slot)
> and Stage 2 (the primitive(s) authored onto it) and is reviewed at the
> existing Stage 2 gate — it is not a separate Stage 3 log. See the
> matching `Stage 1 Outline` doc for arc structure and `Stage 2
> Attachments` for a flat sourcing-only view. Edit directly (strikethrough,
> `> [!warning]` callouts, notes) the same way every other pipeline doc in
> this vault is reviewed; re-fire Stage 2 as a **REVISE** when done.

### 1. cvb-ch2-m1 — Body Styles & End Connections

**Objective:** Distinguish globe and rotary valve body styles by construction and typical service, and identify the two standard end-connection types.

**1. cvb.bodystyle.globe-variants** (introduces · confirmed)
role: application · level: understand · pages: 19

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  Single-ported globe bodies are the simplest and tightest-shutoff; double-ported (reverse-acting) bodies balance plug forces across two ports for less required thrust; cage-style balanced-plug bodies use the cage itself to balance pressure and can carry a soft seat for bubble-tight shutoff.

  - `cvh-cmp-single-ported-globe-valve-body` (current, Component Index — Control Valve Handbook ch3.md) — "A post-guided, single-ported globe-style control valve body — one of the more popular post-guided styles, widely used in process control applications, particularly NPS 1-4 (DN 20-100). Normal flow direction is most often up through the seat ring."
  - `cvh-cmp-cage-style-trim-balanced-plug-soft-seat` (current, Component Index — Control Valve Handbook ch3.md) — "Cage-style trim: the cage provides valve plug guiding, seat ring retention, and flow characterization. In balanced designs (shown here), downstream pressure acts on both the top and bottom sides of the valve plug, nullifying most of the static unbalanced force — this permits operation with a smaller actuator than an unbalanced valve of similar capacity would need. The figure also shows a soft (non-metal) seat."
  - `cvh-cmp-double-ported-globe-valve-body-reverse-acting` (current, Component Index — Control Valve Handbook ch3.md) — "A double-ported globe-style valve body, captioned "reverse-acting" and shown (per the source's own body text) assembled for push-down-to-open valve plug action — double-ported designs can be assembled either push-down-to-open or push-down-to-close. Dynamic force on the plug tends to be balanced, since flow tends to open one port and close the other, which can permit a smaller actuator than an equivalent single-ported unbalanced body. Metal-to-metal seating on these bodies usually provides Class II shutoff (Class III also possible). The industry has predominantly moved away from double-ported designs; they were historically used in refineries on highly viscous fluids or where contaminant/deposit buildup on the trim was a concern."
  - template: `slide--role-application-case` — Three distinct globe body constructions (single-ported, double-ported/reverse-acting, cage-style balanced-plug), each with its own real figure, now shown as application-case's filmstrip instead of forced into contrast's two-panel shape. Re-tagged from contrast to application per the 2026-09-11 template-fit review.
  - slideCount: 1 (stage2)
  - pages: 19


**2. cvb.intro.body-style-variants** (develops · confirmed)
role: application · level: understand · pages: 20

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  Angle and bar-stock bodies extend the basic globe body for specialty service (erosive/slurry flow, high-purity or highly corrosive fluids); a three-way body combines two inlet streams or diverts one inlet to either of two outlets, one body doing the job two two-way valves and a manifold would otherwise do.

  - `cvh-cmp-flanged-angle-valve-body` (current, Component Index — Control Valve Handbook ch3.md) — "The angle-style control valve body: a single-port, cage-style-construction body commonly used in boiler feedwater and heater drain service and in piping schemes where space is at a premium, where the valve can also serve as an elbow. Other variants may have expanded outlet connections, restricted trim, or outlet liners for erosion, flashing, or cavitation damage reduction."
  - `cvh-cmp-bar-stock-valve-body` (current, Component Index — Control Valve Handbook ch3.md) — "A bar-stock single-port valve body — the alloy-material alternative to a casting or forging, used when exotic corrosion-resistant metal alloys are required and a bar-stock body proves less expensive than a cast one. A polymer-lined variant may also be used for corrosive service."
  - `cvh-cmp-three-way-globe-valve` (current, Component Index — Control Valve Handbook ch1.md) — "A three-way globe valve: a single body with three flow connections, combining or diverting flow rather than the simple two-port throttling shown in the earlier sliding-stem figures."
  - template: `slide--role-application-case` — Three distinct body-style photos (flanged angle, bar-stock, three-way), each independently described, now shown as application-case's filmstrip — one frame per body style — instead of base application's single-fig shape. Already the right role; only the template variant changed.
  - slideCount: 1 (stage2)
  - pages: 20


**3. cvb.rotary.closure-members** (develops · confirmed)
role: contrast · level: understand · pages: 21

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  An offset-shaft butterfly disk swings clear of the seat as it opens, reducing seat wear versus a centered shaft; a high-performance butterfly adds a second, radial offset for a tighter, longer-wearing seal at higher pressure.

  - `cvh-cmp-butterfly-shaft-offset-disc-center` (current, Component Index — Control Valve Handbook ch3.md) — "Shaft centerline offset from the disc center — the mechanical geometry underlying single- vs. double-offset butterfly valve body classification. Immediately precedes a table (not catalogued) differentiating single- and double-offset availability by valve size (up to NPS 12 for both; NPS >12 through 36 single-offset only)."
  - `cvh-cmp-butterfly-control-valve` (current, Component Index — Control Valve Handbook ch3.md) — "A complete butterfly control valve body — bodies require minimum installation space, provide low pressure loss, mate with standard raised-face ASME and DN flanges, and are available in sizes through NPS 72 (DN 1800). Larger/high-pressure-drop applications may need high-output or large actuators due to large operating torques; smaller sizes commonly use diaphragm, piston, or modern rotary actuator styles."
  - `cvh-cmp-high-performance-butterfly-valve` (current, Component Index — Control Valve Handbook ch3.md) — "High-performance butterfly control valve body: provides a linear flow characteristic through 90 degrees of disk rotation. Double offset mounting pulls the disk away from the seal after it begins to open, minimizing seal wear. Available through NPS 48 (DN 1200), compatible with standard ASME flanges. Uses standard spring-and-diaphragm, piston, electric, or electro-hydraulic rotary actuators. Intended for general-service applications, not precision throttling — control range is roughly one third that of ball or globe-style valves."
  - template: `slide--role-contrast` — Two-way contrast (standard offset-shaft butterfly vs. high-performance double-offset butterfly) fits the two-panel shape; the third source (a general assembled-butterfly-valve photo) is supporting context for the 'standard' panel, not a third contrasted type.
  - slideCount: 1 (stage2)
  - pages: 21


**4. cvb.rotary.closure-members** (develops · confirmed)
role: contrast · level: understand · pages: 22

- **Primitive** — orientation · introductory

  A full-port ball valve (on trunnion mounts, for larger sizes) gives an unrestricted straight-through bore when open; an eccentric plug swings out of the seat on an off-center shaft, the same wear-reducing idea a butterfly's offset shaft uses.

  - `cvh-cmp-eccentric-plug-valve-body` (current, Component Index — Control Valve Handbook ch3.md) — "Eccentric plug valve body construction: the rugged body/trim design handles temperatures to 427°C (800°F) and shutoff pressure drops to 1500 psi (103 bar). The path of the eccentric disk minimizes contact with the seat ring on opening, reducing seat wear and friction, prolonging seat life, and improving throttling performance. Self-centering seat ring and rugged disk allow forward or reverse flow with tight shutoff in either direction; disk/seat ring/retainer are available in hardened materials including ceramics and carbides for erosion resistance. Suits erosive, coking, and other hard-to-handle fluids in mining, petroleum refining, power, and pulp/paper industries."
  - `cvh-cmp-full-port-ball-valve-trunnion` (current, Component Index — Control Valve Handbook ch3.md) — "Special-design, three-piece trunnion-mounted, full-bore control valve for automated control in bypass, batch, monitor, and emergency shutoff service applications — presents little or no flow restriction, and is fire tested and certified for API 6 and 6FA."
  - template: `slide--role-contrast` — Two-way contrast (full-port trunnion-mounted ball vs. eccentric plug) fits the panel shape using cvh-cmp-full-port-ball-valve-trunnion and cvh-cmp-eccentric-plug-valve-body as the two panel figures. Sourcing cleanup applied 2026-09-11: dropped cvh-cmp-segmented-v-notch-ball (never mentioned in this row's t) and cvh-cmp-full-port-ball-control-valve (duplicated the same ball-valve side as the trunnion figure) - both were stray citations, not a second real panel's worth of content.
  - slideCount: 1 (stage2)
  - pages: 22


**→ Activity — Body Style ID** small-group · 15 min — Sort a mixed set of real valve photos/cutaways (globe: single-ported, double-ported, cage-style; rotary: butterfly, ball, eccentric plug) by body-style family and name the family's typical service advantage.

**5. cvb.bodystyle.special-purpose** (introduces · confirmed)
role: application · level: apply · pages: 23

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  Anti-cavitation and low-noise trim options quiet or eliminate the damage a high pressure-drop can cause; a multi-port flow-selector valve routes flow among several destinations from one body; a pressure-assisted seal uses process pressure itself to improve shutoff.

  - `cvh-cmp-ball-valve-cavitation-noise-options` (current, Component Index — Control Valve Handbook ch3.md) — "Ball valve trim options for moderate noise and cavitation protection — Emerson's additional options for segmented ball control valves used in erosive/viscous/slurry service."
  - `cvh-cmp-multi-port-flow-selector-valve` (current, Component Index — Control Valve Handbook ch3.md) — "A multi-port flow selector valve: connects to eight input lines, allowing isolation, diversion, and testing of fluid from any individual line through a rotating plug, while the remaining seven lines continue flowing to a common group outlet — enables testing/diversion of one line without disrupting production on the others. Four main components: body, bonnet, rotor plug, and actuator."
  - `cvh-cmp-pressure-assisted-seal-configuration` (current, Component Index — Control Valve Handbook ch3.md) — "A bi-directional pressure-assisted seal ring configuration, offered as an eccentric plug valve option to provide exceptionally tight shutoff."
  - template: `slide--role-application-case` — Three functionally distinct special-purpose options (anti-cavitation/low-noise trim, a multi-port flow-selector body, a pressure-assisted seal), each its own real figure, now shown as application-case's filmstrip instead of base application's single-fig shape. Already the right role; only the template variant changed.
  - slideCount: 1 (stage2)
  - pages: 23


**6. cvb.bodystyle.end-connections** (introduces · confirmed)
role: nomenclature · level: remember · pages: 24

- **Primitive** — orientation · introductory

  Bolted-flange connections bolt to mating pipe flanges and can be unbolted for service; welded connections are welded directly into the pipeline, for higher pressure or leak-critical service, at the cost of cutting the valve out to service it.

  - `cvh-cmp-bolted-flange-end-connections` (current, Component Index — Control Valve Handbook ch3.md) — "The three common bolted-flange end-connection styles: flat-face (matching flanges in full-face contact with the gasket, common on low-pressure cast iron/brass valves), raised-face (a circular raised sealing face, standard on Class 250 cast iron and steel/alloy bodies through 6000 psig / 815°C), and ring-type joint (a U-shaped groove with a metal ring gasket, used to 15,000 psig on steel/alloy bodies, generally not for high temperature)."
  - `cvh-cmp-welded-end-connections` (current, Component Index — Control Valve Handbook ch3.md) — "The two common welded end-connection styles: socket weld-ends (the pipe slips into a bored socket, joined with a fillet weld — dimensionally the same regardless of pipe schedule, usually NPS 2 / DN 50 and smaller) and butt weld-ends (beveled ends joined to the pipeline with a full-penetration weld, usable on all valve styles, generally NPS 2-1/2 / DN 65 and larger). Welded ends are leak-tight at all pressures/temperatures and economical, but more difficult to remove from the pipeline than flanged ends."
  - template: `slide--role-nomenclature` — Two source figures, each itself showing several named sub-types (bolted-flange: flat-face, raised-face, ring-type joint; welded: socket-weld, butt-weld) — exactly nomenclature's labelled-parts-figure-plus-list shape, just spanning two component figures instead of one.
  - slideCount: 1 (stage2)
  - pages: 24


**Check** — pages 25 (composed by Stage 3, not authored here)

### 2. cvb-ch2-m2 — Bonnets, Packing & Environmental Sealing

**Objective:** Identify bonnet and packing-system variants, and select an appropriate packing system for a given service and emissions requirement.

**1. cvb.sealing.bonnet-types** (introduces · confirmed)
role: nomenclature · level: remember · pages: 26

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A standard bonnet bolts to the body with stud bolts; bonnet variations extend that basic shape for extra clearance or insulation; a fabricated extension bonnet lengthens the packing box away from the process fluid, for cryogenic or very hot service.

  - `cvh-cmp-typical-bonnet-flange-stud-bolts` (current, Component Index — Control Valve Handbook ch3.md) — "The most common bolted-flange bonnet type: a bonnet with an integral flange, made of the same material as (or an equivalent forged material to) the valve body since it is a pressure-containing member. The body-bonnet bolting compresses a flat sheet gasket at the body-bonnet joint, a spiral-wound gasket atop the cage, and another flat sheet gasket below the seat ring — providing the seat ring-body seal and aligning the cage (and thus the plug/stem) for proper assembly. The packing-follower is typically retained by a flange on the bonnet's yoke boss area (shown here)."
  - `cvh-cmp-bonnet-variations` (current, Component Index — Control Valve Handbook ch3.md) — "A photographic array illustrating the range of bonnet constructions used across globe/angle valve bodies, positioned at the start of §3.3.1 Extension Bonnets — introduces the topic of bonnet variation before the cast-vs-fabricated extension bonnet discussion that follows."
  - `cvh-cmp-fabricated-extension-bonnet` (current, Component Index — Control Valve Handbook ch3.md) — "A fabricated extension bonnet — extension bonnets protect valve stem packing from extreme process temperatures by moving the packing box far enough from the process that packing temperature stays in the recommended range. Fabricated extensions (smooth surfaces, e.g. stainless steel tubing) are preferred for cold service, since heat influx is the major concern there; cast extensions (the alternative, not shown here) offer better high-temperature service via greater heat emissivity / cooling effect. Wall thickness is minimized on either type to cut down heat transfer."
  - template: `slide--role-nomenclature` — Three named bonnet constructions (standard bolted, variations, fabricated extension), each with its own figure — a straightforward nomenclature list-of-named-items case, well within the role's default figure-plus-list shape (three points on a spectrum, not a to-be-decided-between pair, so no forced two-way contrast).
  - slideCount: 1 (stage2)
  - pages: 26


**2. cvb.sealing.bellows-bonnet** (introduces · confirmed)
role: mechanism · level: understand · pages: 27

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A welded-leaf bellows stacks thin metal diaphragms into a flexible seal; a mechanically-formed bellows is hydroformed from tubing instead — both give a fully welded, zero-leakage path around the stem.

  - `cvh-cmp-enviroseal-bellows-seal-bonnet` (current, Component Index — Control Valve Handbook ch3.md) — "An ENVIRO-SEAL bellows seal bonnet — used when essentially no stem leakage (less than 1×10⁻⁶ cc/sec of helium) can be tolerated, typically for toxic, volatile, radioactive, or very expensive process fluids. This special bonnet construction protects both the stem and the valve packing from contact with the process fluid; a standard or environmental packing box above the bellows unit guards against catastrophic failure if the bellows ruptures."
  - `cvh-cmp-welded-leaf-bellows` (current, Component Index — Control Valve Handbook ch3.md) — "The welded-leaf bellows design — offers a shorter total package height than the mechanically-formed alternative. Due to its manufacturing method and inherent design, service life may be limited."
  - `cvh-cmp-mechanically-formed-bellows` (current, Component Index — Control Valve Handbook ch3.md) — "The mechanically-formed bellows design — taller than the welded-leaf design, but produced with a more repeatable manufacturing process and therefore higher reliability."
  - template: `slide--role-mechanism` — The bonnet-assembly figure frames the whole mechanism (a fully-welded, zero-leakage bellows path around the stem), then the two construction-method figures (welded-leaf vs. mechanically-formed) show the sequential detail behind that one mechanism — mechanism's shape handles this as a figure sequence, not a two-way contrast, since the two methods are alternative implementations of the SAME mechanism, not two different things being compared.
  - slideCount: 1 (stage2)
  - pages: 27


**3. cvb.intro.bonnet-packing-arrangement** (develops · confirmed)
role: contrast · level: understand · pages: 28

- **Primitive** — orientation · introductory

  A single PTFE V-ring packing arrangement is the simple baseline; the full packing-material arrangement (rings, followers, springs) shown in cross-section is what actually loads and maintains that seal as the stem strokes and wears.

  - `cvh-cmp-packing-material-arrangements-globe` (current, Component Index — Control Valve Handbook ch3.md) — "Two labelled packing-arrangement diagrams for globe-style valve bodies. "Standard TFE V-Ring" (upper wiper, packing follower, female adapter, V-ring, male adapter, washer, spring, packing box, lower wiper) and "Graphite Packing Arrangements" (filament ring, lantern ring, laminated ring, with a noted location for a sacrificial zinc washer if necessary), each shown in Single, Double, and Leak-Off configuration variants."
  - `cvh-cmp-single-ptfe-vring-packing` (current, Component Index — Control Valve Handbook ch3.md) — "Single PTFE V-ring packing arrangement: uses a coil spring between the packing and packing box ring. Meets the 100 ppmv criterion for sliding-stem valves (pressure ≤300 psi / 20.7 bar, temperature -18 to 93°C / 0 to 200°F). Does not meet low-emission criteria for rotary valves. Very good sealing performance with the lowest operating friction of the packing families in this chapter."
  - template: `slide--role-contrast` — Two real figures, a clean two-way contrast (the simple single-PTFE-V-ring baseline vs. the full packing-material arrangement cross-section showing what actually loads the seal) — fits the two-panel shape exactly.
  - slideCount: 1 (stage2)
  - pages: 28


**4. cvb.sealing.environmental-packing** (introduces · confirmed)
role: mechanism · level: understand · pages: 29

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  ENVIRO-SEAL packing systems add a live-loaded spring to a PTFE, duplex (PTFE-plus-graphite), or graphite ULF (ultra-low fugitive) arrangement — for sliding-stem or rotary valves alike — to hold sealing force as packing wears, instead of relying on a one-time bolt torque.

  - `cvh-cmp-enviroseal-ptfe-packing-system` (current, Component Index — Control Valve Handbook ch3.md) — "ENVIRO-SEAL PTFE packing system: a compact, live-load spring design suited to environmental applications up to 750 psi and 232°C (51.7 bar and 450°F). Also suited to non-environmental high-temperature/pressure applications for its longer ongoing service life, in both sliding-stem and rotary valves."
  - `cvh-cmp-enviroseal-duplex-packing-system` (current, Component Index — Control Valve Handbook ch3.md) — "ENVIRO-SEAL Duplex (PTFE and Graphite) packing system, labelled: spring pack assembly, bushing (×3), PTFE-carbon/PTFE packing set, lantern ring, graphite packing ring, packing ring, packing washers. Combines PTFE and graphite components for low friction, low emission, fire-tested (API Standard 589) performance up to 232°C (450°F) in sliding-stem valves; rotary valves are not available with ENVIRO-SEAL Duplex."
  - `cvh-cmp-enviroseal-graphite-ulf-packing-system` (current, Component Index — Control Valve Handbook ch3.md) — "ENVIRO-SEAL Graphite ULF packing system, labelled: stud, anti-seize lubricant, packing nut, spring pack assembly, packing flange, guide bushing (×2), packing ring (×2), packing washer, packing box ring. The patented ULF design incorporates very thin PTFE layers inside the packing rings plus thin PTFE washers on each side of the rings, minimizing control problems and reducing friction while promoting sealing and cycle life — designed primarily for environmental applications above 232°C (450°F)."
  - `cvh-cmp-enviroseal-graphite-packing-rotary` (current, Component Index — Control Valve Handbook ch3.md) — "ENVIRO-SEAL graphite packing system for rotary valves — designed for environmental applications from -6 to 316°C (20 to 600°F) or where fire safety is a concern, usable to pressures of 1500 psi (103 bar) while still satisfying the 100 ppmv EPA leakage criterion. Can be used up to 371°C (700°F) in non-environmental applications."
  - template: `slide--role-mechanism` — Four ENVIRO-SEAL packing variants (PTFE, duplex, graphite ULF, rotary graphite) are parallel implementations of the SAME live-loaded-spring mechanism, differing by material/temperature range rather than by mechanism — fits mechanism's figure-plus-list shape as one mechanism shown across its real variants, not four unrelated things needing separate panels. (This is the same concept the granularity advisory already flags for citing 4 components — the template fits, but it's worth a human glance on whether the four variants earn their own slide each.)
  - slideCount: 1 (stage2)
  - pages: 29


**5. cvb.sealing.packing-selection** (introduces · confirmed)
role: application · level: evaluate · pages: 30

- **Primitive** — orientation · introductory

  Match the packing system to the service: standard PTFE for general-purpose duty, an ENVIRO-SEAL live-loaded system where emissions matter, graphite where temperature rules PTFE out — sliding-stem and rotary valves each have their own selection chart.

  - `cvh-cmp-sliding-stem-environmental-packing-selection` (current, Component Index — Control Valve Handbook ch3.md) — "A comparison table of sliding-stem environmental packing selections (Single PTFE V-Ring, ENVIRO-SEAL PTFE, ISO-Seal PTFE, ENVIRO-SEAL Duplex, ENVIRO-SEAL Graphite ULF, ISO-Seal Graphite), each rated for maximum pressure/temperature limits in environmental service and given a qualitative Seal Performance Index, Service Life Index, and Packing Friction rating."
  - `cvh-cmp-rotary-environmental-packing-selection` (current, Component Index — Control Valve Handbook ch3.md) — "A comparison table of rotary-valve environmental packing selections (ENVIRO-SEAL PTFE, ENVIRO-SEAL Graphite, ISO-Seal Graphite), same rating columns as the sliding-stem version (Figure 3.35). Single PTFE and graphite ribbon packing arrangements are explicitly noted as not performing well as fugitive-emission sealing solutions for rotary valves."
  - template: `slide--role-application` — Two selection charts (sliding-stem, rotary) serve the same evaluative task — matching packing to service — and can be shown as one combined selection-chart table under application's own `.tmpl-table` allowance, with the one-line takeaway naming the deciding factors (emissions, temperature, valve style); doesn't need application-case's multi-frame treatment since both charts answer the same single decision, not two decisions.
  - slideCount: 1 (stage2)
  - pages: 30


**→ Activity — Packing Selection Case** small-group · 18 min — Given three real service scenarios (general-purpose hydrocarbon, VOC-regulated process, cryogenic), select an appropriate packing system and justify the choice against the selection figures just taught.

**6. cvb.sealing.emissions-standards-awareness** (introduces · confirmed)
role: caution · level: understand · pages: 31

- **Primitive** — orientation · introductory

  Regulations require periodically testing valves for leaks into the air (called fugitive emissions) — the programs that do this are known as VOC/LDAR, and ISO 15848-1 is the standard a packing system has to pass to qualify. Picking an unqualified packing for the service can mean failing that test, not just a leak on the bench.

  - `cvh-cmp-voc-ldar-measurement-frequency` (current, Component Index — Control Valve Handbook ch3.md) — "A decision-flow diagram for LDAR (Leak Detection and Repair) monitoring frequency for valves controlling volatile organic chemicals: starts at Monthly LDAR, stepping down to Quarterly, Semi-Annual, then Annual LDAR as the percentage of valves found leaking above the 500 ppm threshold falls below successive thresholds (2%, 1%, 0.5%), with a "Quality Improvement Plan" branch feeding back into the cycle."
  - `cvh-cmp-iso15848-1-qualification-requirements` (current, Component Index — Control Valve Handbook ch3.md) — "ISO 15848-1 qualification requirements table-as-figure: mechanical cycle classes for control valves (CC1/CC2/CC3: 20,000/60,000/100,000 cycles) and isolation valves (CO1/CO2/CO3: 205/1,500/2,500 cycles), each with associated thermal cycle counts and tightness classes (AM/BM/CM), cross-referenced to measured leak concentration thresholds (<50/<100/<500 ppm per EPA Method 21 sniffing)."
  - template: `slide--tmpl-caution` — A real compliance warning (an unqualified packing choice can mean failing a mandated leak test, not just a bench leak) — the caution card's warning-plus-consequence shape fits directly; the two source figures (the LDAR monitoring-frequency flowchart and the ISO 15848-1 qualification table) ground the 'why this is a real requirement, not a suggestion' framing the caution card needs.
  - slideCount: 1 (stage2)
  - pages: 31


**Check** — pages 32 (composed by Stage 3, not authored here)

### 3. cvb-ch2-m3 — Flow Characterization, Trim & Actuator Variety

**Objective:** Explain how cage and plug contour shape a valve's flow characteristic, and identify actuator variants beyond the basic spring-and-diaphragm and piston types.

**1. cvb.characteristic.inherent-curves** (develops · confirmed)
role: mechanism · level: understand · pages: 33

- **Primitive** — orientation · introductory

  A characterized cage shapes its window profile to produce a specific curve directly — the physical mechanism behind the quick-opening/linear/equal-percentage curves already introduced.

  - `cvh-cmp-characterized-cages-globe` (current, Component Index — Control Valve Handbook ch3.md) — "Three characterized cage window shapes for cage-guided globe valve bodies — Quick-Opening, Linear, and Equal-Percentage — the cage-window shape determines the valve's inherent flow characteristic as the plug moves away from the seat ring. Cages can be interchanged without changing the valve plug or seat ring, so the inherent flow characteristic can be changed independent of body/trim selection."
  - `cvh-cmp-inherent-flow-characteristic-curves` (current, Component Index — Control Valve Handbook ch3.md) — "Rated flow coefficient (%) plotted against rated travel (%) for the three inherent flow characteristics: Quick-Opening (steep initial rise), Linear (straight diagonal), and Equal-Percentage (exponential-shaped rise) — the graph underlying the cage-window shapes shown in Figure 3.37, under constant pressure differential across the valve."
  - template: `slide--role-mechanism` — Two figures work as a cause-and-effect pair: the characterized-cage window-shape photo (the physical mechanism) and the flow-characteristic curve graph (its effect, already introduced) — mechanism's shape handles this as the same figure-plus-source pattern used for `cvb.characteristic.cage-shape`, now showing the specific cage construction behind it.
  - slideCount: 1 (stage2)
  - pages: 33


**2. cvb.characteristic.contoured-plug** (introduces · confirmed)
role: mechanism · level: understand · pages: 34

- **Primitive** — orientation · introductory

  A contoured plug shapes the same curve types by varying its own profile against a fixed seat, rather than through a cage window; quick-opening construction is the simplest case — a flat-faced plug that uncovers flow area almost immediately.

  - `cvh-cmp-plug-contour-flow-characterization` (current, Component Index — Control Valve Handbook ch3.md) — "Valve plug contour variations corresponding to different flow characterizations — the contour of the plug surface next to the seat ring is instrumental in determining the inherent flow characteristic of a plug-characterized (as opposed to cage-characterized) control valve; as the plug travels, the unobstructed flow area changes size and shape depending on the plug's contour."
  - `cvh-cmp-quick-opening-construction` (current, Component Index — Control Valve Handbook ch3.md) — "Labelled construction diagram showing how a quick-opening flow characteristic is provided: stem, valve plug, seat ring, flow area, and port diameter shown in relation to each other."
  - template: `slide--role-mechanism` — Two figures, one showing how plug contour varies to produce different characteristics and one showing the simplest case (quick-opening) in labelled construction detail — a mechanism figure pair, the plug-based counterpart to the cage-based mechanism two slides earlier.
  - slideCount: 1 (stage2)
  - pages: 34


**3. cvb.trim.guiding-and-capacity** (introduces · confirmed)
role: nomenclature · level: remember · pages: 35

- **Primitive** — orientation · introductory

  Cage-guided trim rides inside the cage bore; plug-guided trim rides in machined guides in the body itself — two different ways of keeping the plug centered on its seat. A reduced-capacity adapter lets one body size handle a smaller trim than its full-size rating.

  - `cvh-cmp-cage-guiding-plug-guiding-cross-section` (current, Component Index — Control Valve Handbook ch3.md) — "A cross-sectional view contrasting cage-guiding and plug-guiding methods in globe valves: cage-guiding (plug outside diameter close to the cage bore throughout travel — self-aligning via bonnet/cage/seat ring), top-and-bottom-guiding (guide bushings in the bonnet and bottom flange, typical of double-ported constructions), and stem-guiding (a guide bushing in the bonnet acting on the valve plug stem)."
  - `cvh-cmp-adapter-reduced-flow-capacity` (current, Component Index — Control Valve Handbook ch3.md) — "The adapter method for providing reduced flow capacity in cage-guided trim: valve plug, cage, and seat ring parts from a smaller valve size of similar construction are combined with adapter pieces above the cage and below the seat ring, mating the smaller parts to the larger valve body — avoiding the need for expensive pipeline reducers or a custom-sized body."
  - template: `slide--role-nomenclature` — Two figures ground three named items (cage-guiding, plug-guiding, and the reduced-capacity adapter) as a labelled list — nomenclature's shape, not a two-way contrast, since 'guiding method' and 'capacity adapter' are two different facts sitting on the same slide by design (the id's own name says both), not two things being compared against each other.
  - slideCount: 1 (stage2)
  - pages: 35


**→ Activity — Characteristic Selection** discussion · 12 min — Given a process scenario (e.g. a valve that must hold near-constant gain across a wide travel range vs. one needing tight shutoff-adjacent control), discuss whether a cage-characterized, contoured-plug, or quick-opening trim fits best, and why.

**4. cvb.intro.actuator-types** (develops · confirmed)
role: mechanism · level: understand · pages: 36, 37

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A field-reversible actuator can be converted between direct- and reverse-acting in the field, without a different casting, and the same spring-and-diaphragm principle drives a rotary valve's diaphragm actuator, just converted to rotation through a lever. A double-acting piston actuator uses supply pressure on both sides for higher thrust in either direction; its rotary equivalent, a scotch-yoke piston actuator, converts that same linear motion into rotation the piston way, just as the diaphragm actuator does through its lever.

  - `cvh-cmp-field-reversible-multi-spring-actuator` (current, Component Index — Control Valve Handbook ch3.md) — "A field-reversible, multi-spring diaphragm actuator — actuators of this type can be assembled for either direct or reverse action in the field, as opposed to the fixed direct-/reverse-acting units shown in Figure 3.43."
  - `cvh-cmp-diaphragm-actuator-rotary-valve` (current, Component Index — Control Valve Handbook ch3.md) — "A direct-acting diaphragm actuator adapted for rotary valves: increasing air pressure pushes down on the diaphragm, which — depending on the orientation of the actuator lever on the valve shaft — may either open or close the valve. Net output thrust is the difference between diaphragm force and opposing spring force."
  - `cvh-cmp-double-acting-piston-actuator` (current, Component Index — Control Valve Handbook ch3.md) — "A control valve with a double-acting piston actuator — piston actuators are pneumatically operated using high-pressure plant air (up to 150 psig / 10.3 bar), often eliminating the need for a supply pressure regulator, and furnish maximum thrust output and fast stroking speeds. Double-acting units give maximum force in both directions (as opposed to spring-return units, which provide fail-open or fail-closed operation)."
  - `cvh-cmp-scotch-yoke-piston-actuator` (current, Component Index — Control Valve Handbook ch3.md) — "A control valve with a Scotch-yoke piston actuator — a piston-actuator variant (see §3.8.2's general piston-actuator description: high-pressure plant air supply, double-acting or spring-return operation) typically used to convert linear piston motion into rotary valve-shaft motion via the yoke mechanism."
  - template: `slide--role-mechanism` — This primitive spans two slides (pages 32-33, from last turn's merge) — each slide handles one actuator-mechanism pair as a sequential figure treatment: page 32 (field-reversible actuator, its rotary-diaphragm counterpart), page 33 (double-acting piston, its rotary scotch-yoke counterpart). Mechanism's shape fits each page's own pair; the two pages together cover the full 'actuator types beyond the basic ones' scope the merge was built to hold.
  - slideCount: 2 (stage2)
  - pages: 36, 37


**5. cvb.actuator.manual-electric** (introduces · confirmed)
role: nomenclature · level: remember · pages: 38

> [!tip] Umbrella slide — shares this page with #6 `cvb.actuator.rack-and-pinion`. One physical slide, not two.

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A handwheel gives manual override on a sliding-stem or rotary actuator without pneumatic supply; an electric actuator replaces pneumatic supply with a motor, for sites with no air system.

  - `cvh-cmp-manual-actuator-sliding-stem` (current, Component Index — Control Valve Handbook ch3.md) — "A manual actuator for sliding-stem valves — useful where automatic control isn't required but good manual control still is; often used to actuate the bypass valve in a three-valve bypass loop around control valves for manual process control during maintenance or automatic-system shutdown. Available in various sizes; some models offer dial-indicating devices for accurate plug/disk repositioning. Much less expensive than automatic actuators."
  - `cvh-cmp-manual-actuator-rotary` (current, Component Index — Control Valve Handbook ch3.md) — "A manual actuator for rotary valves — the rotary-valve counterpart to Figure 3.48, same §3.8.3 description: used where automatic control isn't required, often for bypass-valve service, available with dial-indicating devices for some models."
  - `cvh-cmp-electric-actuator-sliding-stem` (current, Component Index — Control Valve Handbook ch3.md) — "An electric actuator for a sliding-stem valve — uses an electric motor with gear reduction to move the valve plug. Traditionally limited to on/off operation, though some designs are now capable of continuous control; brushless motors can reduce or eliminate motor burnout from rapid on/off cycling. Initial cost remains above pneumatic actuation; primary use is where instrument air is unavailable or too few valves exist to justify a compressor system."
  - `cvh-cmp-electric-actuator-rotary` (current, Component Index — Control Valve Handbook ch3.md) — "An electric actuator for a rotary valve — the rotary-valve counterpart to Figure 3.51, same §3.8.5 electric-motor/gear-reduction description."
  - template: `slide--role-nomenclature` — Four real photos form a clean 2×2 grid — two power types (manual, electric) × two motion types (sliding-stem, rotary) — nomenclature's own carve-out for a 'fixed small set of terms' with a reference-table shape fits this naturally; not a two-way contrast since power type and motion type are two independent axes shown together, matching the split's own reasoning for why rack-and-pinion (a third, different axis) didn't belong here.
  - slideCount: 1 (stage2)
  - pages: 38


**6. cvb.actuator.rack-and-pinion** (introduces · confirmed)
role: mechanism · level: understand · pages: 38

> [!tip] Umbrella slide — shares this page with #5 `cvb.actuator.manual-electric`. One physical slide, not two.

- **Primitive** — orientation · introductory

  A rack-and-pinion actuator is a compact, economical pneumatic option for rotary valves — but its backlash limits it to on/off service, not the precision continuous throttling a diaphragm or piston actuator handles.

  - `cvh-cmp-rack-and-pinion-actuator` (current, Component Index — Control Valve Handbook ch3.md) — "A rack-and-pinion actuator — provides a compact and economical solution for rotary valves. Because of backlash, these are typically used for on/off applications or where process variability is not a concern (rather than precision continuous throttling)."
  - template: `slide--role-mechanism` — A single figure, a single mechanism (the rack-and-pinion conversion itself, with its backlash tradeoff) — the simplest, cleanest mechanism-role case in this module, deliberately narrow after the split gave it its own concept.
  - slideCount: 1 (stage2)
  - pages: 38


**Check** — pages 39 (composed by Stage 3, not authored here)
