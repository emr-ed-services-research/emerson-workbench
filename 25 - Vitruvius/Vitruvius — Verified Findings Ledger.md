---
title: Vitruvius — Verified Findings Ledger
type: reference
tags:
  - project
  - pipeline
  - curriculum
updated: 2026-09-18
---

# Vitruvius — Verified Findings Ledger

See `Vitruvius.md` for what this is and why it's a separate, lighter trust
tier from the Subject-Matter Index. Every entry below is one fact pulled in
from outside the Source Library (the web, or the Historic Educational
Services archive) and actually used in a course — not a pre-populated
reference collection.

**Entry shape:**

```yaml
id: vit-finding-<slug>
claim: >
  The fact as actually used in the course.
citation: >
  The real, specific source (a standard number, a named reference, a
  dated web source) — never "general knowledge."
currencyCheck: >
  What was checked, against what current source, and when.
usedBy: [course/module where this was actually placed]
verifiedDate: YYYY-MM-DD
```

## Entries

First real entries (2026-09-18) — closing the level-measurement and
feedwater-heater-bypass gaps flagged in
`20 - Source Library/Competency Map — Topic-Derived.md`
(`eng.instrumentation.level-measurement`, 9 figures/0 topics anywhere in
the vault, and CVH ch10's bypass-piping figures, 6 figures/0 topics).
These stay in Vitruvius's own provisional tier rather than becoming
`kind: topic` Subject-Matter Index entries — that index is reserved for
content grounded in the vault's own primary-source PDFs; this content is
externally researched and belongs in Vitruvius's lighter, per-use trust
tier per `Vitruvius.md`'s explicit two-tier design. No course currently
consumes these (`usedBy` is empty pending a real build); they exist so a
future CVE build citing level measurement or feedwater-heater protection
has real, verified grounding to draw on instead of inventing it.

```yaml
id: vit-finding-displacer-level-measurement-principle
claim: >
  A displacer-type level instrument measures liquid level, liquid-interface
  level, or density/specific gravity using Archimedes' Principle: buoyant
  force on a solid displacer suspended in the liquid changes as level
  rises or falls, and that force change is converted (via a torque tube
  and proportional linkage in Fisher's mechanical designs) into a
  pneumatic, electric, or digital output. This is direct, in-contact
  measurement, distinct from differential pressure's inferential
  hydrostatic approach.
citation: >
  Emerson product pages "Fisher™ 249 Series Caged Sensors"
  (emerson.com/en-us/catalog/fisher-249-caged) and "Fisher™ 2500 Pneumatic
  Level Controller" (emerson.com/en-us/catalog/fisher-2500), both live
  current Emerson catalog pages, fetched 2026-09-18.
currencyCheck: >
  Both source pages are live, current Emerson/Fisher catalog entries for
  actively sold product lines as of this fetch — confirms the described
  mechanism is the current, supported design, not a superseded one.
usedBy: []
verifiedDate: 2026-09-18
```

```yaml
id: vit-finding-caged-vs-cageless-displacer-tradeoff
claim: >
  Caged displacer sensors provide more stable operation than cageless
  sensors in vessels with internal obstructions or considerable internal
  turbulence; caged 249-series sensors also come standard with a liquid
  damping orifice in the lower equalizing connection that aids stability
  where vessel capacitance is small and permits narrower proportional
  valve settings. Cageless sensors are generally used where a large
  displacer is needed and can be accommodated by a large flange
  connection, with displacer stem length chosen to set the desired
  sensing depth.
citation: >
  Emerson "Fisher™ 249 Series Caged Sensors"
  (emerson.com/en-us/catalog/fisher-249-caged) and "Fisher™ 249 Series
  Cageless Sensors" (emerson.com/en-us/catalog/fisher-249-cageless)
  product pages, fetched 2026-09-18.
currencyCheck: Both are live current Emerson catalog pages for actively sold product lines.
usedBy: []
verifiedDate: 2026-09-18
```

```yaml
id: vit-finding-differential-pressure-level-measurement-principle
claim: >
  Differential-pressure level measurement infers liquid level from
  hydrostatic pressure (pressure at depth is proportional to liquid
  height × density × gravitational acceleration) by comparing a low-side
  (near-top/reference) and high-side (near-bottom) pressure reading,
  rather than contacting the liquid with a moving part. This allows
  measurement without direct process contact (useful for corrosive or
  hazardous media) but requires density, viscosity, and compressibility
  to be known or corrected for.
citation: >
  Emerson "Differential Pressure Level Measurement" catalog page
  (emerson.com/en-us/catalog/differential-pressure-level), fetched
  2026-09-18.
currencyCheck: Live current Emerson catalog page.
usedBy: []
verifiedDate: 2026-09-18
```

```yaml
id: vit-finding-level-technology-selection-considerations
claim: >
  No single level-measurement technology suits every vessel; selection
  depends on the specific application — agitation/foam presence,
  temperature, whether solids or only liquids are present, tank
  size/connections, fluid stickiness. Differential pressure is reliable,
  simple, and tolerant of agitation/obstacles but carries density-related
  error and a roughly 600°F practical ceiling; other technologies (e.g.
  guided-wave radar, displacer) trade these limits for others.
citation: >
  Jim Cahill, "Level Measurement Selection Considerations," Emerson
  Automation Experts blog, April 30, 2010
  (emersonautomationexperts.com/2010/measurement-instrumentation/level_measureme/).
currencyCheck: >
  Article dated 2010 — checked directly against the live 2026 Fisher
  249/2500 and differential-pressure catalog pages (all still active,
  current products) to confirm the underlying technology tradeoffs
  described remain valid; the application-fit reasoning being cited is
  physics-based, not a spec number that could have since changed.
usedBy: []
verifiedDate: 2026-09-18
```

```yaml
id: vit-finding-feedwater-heater-bypass-protection-mechanism
claim: >
  A feedwater heater (or heater group) is protected from internal damage
  — a defective tube, weld, or drain-system failure causing high water
  level in the shell — by a three-way bypass piping arrangement:
  fast-closing tee and changeover valves at the heater's inlet and outlet
  route feedwater around the heater group when triggered. The system is
  designed fail-safe using feedwater pressure itself as motive power, so
  the heater is bypassed automatically if electric or pneumatic supply is
  lost — protection persists even through a power/air-supply failure.
citation: >
  Emerson "Sempell Raisteam 3-Way Valves (Feed Water Heater Protection
  System)" product page
  (emerson.com/en/final-control/products/sempell-raisteam-3-way-valves),
  fetched 2026-09-18.
currencyCheck: Live current Emerson/Final Control product page.
usedBy: []
verifiedDate: 2026-09-18
```
