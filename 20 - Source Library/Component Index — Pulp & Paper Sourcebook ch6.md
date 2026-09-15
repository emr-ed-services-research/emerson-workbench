---
title: Component Index — Pulp & Paper Sourcebook ch6
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch6 — Control Valve Noise
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 6

**Chapter 6 — "Control Valve Noise."** Standing full-chapter cataloguing
pass, continuing the whole-book completion pass begun with Chapter 1. Every
real page in the chapter's confirmed range was rendered and read directly.
8 real figures across 10 pages.

**Another cross-book chapter-numbering difference, confirmed:** this
chapter's noise-abatement-hardware content matches **Oil & Gas Sourcebook
Chapter 5** ("Control Valve Noise"), not that book's Chapter 6 (which is
cavitation/flashing — see this book's own Chapter 4's cross-reference note
for that mapping). Four of eight figures are confirmed real cross-references
by identical drawing number.

Chapter boundaries confirmed directly by rendering: PDF page 81 = printed p.
6-1 (Chapter 6 divider, "Control Valve Noise," with Table 6-1 on the same
page), PDF page 90 = printed p. 6-10 ("Control Valve Noise Summary,"
chapter's last content page, no trailing blank). PDF page 91 = Chapter 7
divider ("Steam Conditioning"). Zero page offset throughout (PDF page =
printed page number + 80). Chapter 6 = PDF pp. 81-90.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. Four figures share a printed drawing number with Oil & Gas ch5 / Power & Severe Service ch5 records — cross-referenced by id in each affected record's `notes`, not duplicated. |

## Components

### Chapter 6 — Source Treatment (printed pp. 6-5–6-7)

```yaml
id: pp-cmp-whisper-trim-i-cage
kind: figure
teaches: >
  The Fisher Whisper Trim I cage: interchangeable with standard trim in
  many globe valves, uses many narrow parallel slots to minimize turbulence
  and provide favorable velocity distribution in the expansion area — most
  efficient when ΔP/P1 ≤ 0.65 and maximum downstream velocity ≤ half sonic
  velocity; provides up to 18 dBA attenuation versus a standard cage.
concept-tags: [Whisper Trim I, cage, source treatment, aerodynamic noise, parallel slots, noise abatement]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-1 'Whisper Trim I cage used for reducing aerodynamic noise,' p. 6-5 (PDF p. 85), drawing W1257/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Single-subject cutaway (not a composite). **Cross-reference (2026-09-15):**
  identical drawing number (W1257) to the upper panel of
  `ogas-cmp-cage-trim-noise-designs` in `Component Index — Oil & Gas
  Sourcebook ch5.md` (that book's Figure 5-1, a 2-view composite pairing
  W1257 [single-stage slotted cage, upper] with E0863 [two-stage cage,
  lower]) and the corresponding record in `Component Index — Power &
  Severe Service Sourcebook ch5.md` — the same single-stage cage cutaway,
  standalone here vs. one view of a paired composite there.
```

```yaml
id: pp-cmp-whisper-trim-i-inline-diffuser-combination
kind: figure
teaches: >
  A valve with Whisper Trim I and an inline diffuser combination: when the
  pressure drop ratio exceeds 0.65 (beyond Whisper Trim I's own
  effectiveness range), an inline diffuser divides the overall pressure
  drop into two stages, extending capability and improving noise
  performance by up to an additional 25 dBA.
concept-tags: [Whisper Trim I, inline diffuser, pressure drop staging, source treatment, aerodynamic noise]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-2 'Valve with Whisper Trim I and Inline Diffuser Combination,' p. 6-6 (PDF p. 86), drawing W2618"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W2618) to
  `ogas-cmp-inline-diffuser-combination` in `Component Index — Oil & Gas
  Sourcebook ch5.md` (that book's Figure 5-2) and the corresponding record
  in `Component Index — Power & Severe Service Sourcebook ch5.md` — the
  same source cutaway reused across all three Sourcebooks.
```

```yaml
id: pp-cmp-whisper-trim-iii
kind: figure
teaches: >
  Fisher Whisper Trim III: used when pressure drop ratios are high, fluid
  flows from inside the cage out through many orifices whose spacing
  (centerline-to-hole-diameter) increases with pressure drop ratio to
  prevent jet recombination; an external baffle is often added at very high
  ratios; can reduce control valve noise by as much as 30 dBA.
concept-tags: [Whisper Trim III, cage, source treatment, aerodynamic noise, orifice spacing, jet recombination, baffle]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-3 'Whisper Trim III,' p. 6-6 (PDF p. 86), drawing W9039"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Sectioned cutaway. Checked against the whole library: no exact
  drawing-number match found for W9039.
```

```yaml
id: pp-cmp-whisperflo-technology
kind: figure
teaches: >
  Fisher WhisperFlo trim: a multi-path, two-stage design well-suited to
  high noise levels and large Cv requirements, effective up to a pressure
  drop ratio of 0.99; allows pressure to recover between stages so the
  second stage's ratio is lower than the first, shifting frequency to a
  higher spectrum, managing velocities, and maintaining jet independence —
  can reduce noise up to 50 dBA.
concept-tags: [WhisperFlo, multi-path trim, two-stage design, source treatment, aerodynamic noise, high Cv, jet independence]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-4 'WhisperFlo Technology,' p. 6-7 (PDF p. 87), drawings W7065 (leaf-spring stack element) / W7056 (perforated cylinder element)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  2-panel composite (an exploded leaf/passage-plate element and a
  perforated-cylinder element) under one caption. Checked against the whole
  library: drawing W7065 appears in `Component Index — Oil & Gas Sourcebook
  ch12.md`, but confirmed by reading that record this is unrelated content
  (a different chapter/product entirely) — not a match. No match found for
  W7056.
```

```yaml
id: pp-cmp-vee-ball-noise-attenuator
kind: figure
teaches: >
  A Vee-Ball noise attenuator: an internal perforated/honeycomb sleeve
  attenuator design for rotary valves in high-noise applications, used with
  ball or Vee-Ball valves that have high noise requiring an attenuator,
  diffuser, or combination — attenuators alone can reduce noise up to 10
  dBA.
concept-tags: [Vee-Ball, noise attenuator, rotary valve, perforated sleeve, source treatment, aerodynamic noise, hydrodynamic noise]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-5 'Vee-Ball Noise Attenuator,' p. 6-7 (PDF p. 87), drawing W6116"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Rendered production-quality cutaway. Checked against the whole library: no
  exact drawing-number match found.
```

### Chapter 6 — Path Treatment (printed p. 6-8)

```yaml
id: pp-cmp-valve-and-vent-diffuser-combination
kind: figure
teaches: >
  A vent silencer used with an upstream control valve to divide the total
  pressure drop between the actual vent and the valve — quiets both the
  valve and the vent; a properly sized combination can reduce overall
  system noise as much as 60 dBA.
concept-tags: [vent diffuser, vent silencer, path treatment, pressure drop split, atmospheric venting, noise abatement]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-6 'Valve and Vent Diffuser Combination,' p. 6-8 (PDF p. 88), drawing W2672"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W2672) to
  `ogas-cmp-vent-diffuser-combination` in `Component Index — Oil & Gas
  Sourcebook ch5.md` (that book's Figure 5-3) and the corresponding record
  in `Component Index — Power & Severe Service Sourcebook ch5.md` — the
  same source cutaway reused across all three Sourcebooks.
```

### Chapter 6 — Hydrodynamic Noise Source Treatment (printed p. 6-9)

```yaml
id: pp-cmp-cavitrol-iii-trim-photo
kind: figure
teaches: >
  Cavitrol Trim: a source-treatment solution that eliminates cavitation
  across the control valve by staging the pressure drop so fluid pressure
  never drops below its vapor pressure; effective only in clean processes
  (particulate-laden flow requires Dirty Service Trim instead, Figure 6-8).
concept-tags: [Cavitrol Trim, source treatment, cavitation elimination, hydrodynamic noise, staged pressure drop]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-7 'Cavitrol III Trim,' p. 6-9 (PDF p. 89), drawing W2479"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo of an assembled trim cage/plug element. Checked against
  the whole library: no exact drawing-number match found (this book's
  cavitation-control trim photos, unlike Chapter 4's Cavitrol IV trim
  cutaway, do not appear to reuse an Oil & Gas / Power & Severe Service
  drawing number here).
```

```yaml
id: pp-cmp-notchflo-dst-trim
kind: figure
teaches: >
  NotchFlo Dirty Service Trim (DST) for Fisher globe-style valves: operates
  on the same staged-pressure-drop concept as Cavitrol Trim, but is designed
  to pass particulate up to 3/4 inch while still controlling cavitation at
  pressure drops up to 4000 psi — used extensively in produced water
  injection, water injection pump recirculation, and other particulate-
  containing high-pressure-drop liquid flow applications.
concept-tags: [NotchFlo, DST, Dirty Service Trim, particulate service, cavitation control, staged pressure drop, hydrodynamic noise]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 6-8 'NotchFlo DST Trim for Fisher Globe Style Valves,' p. 6-9 (PDF p. 89), drawing W8538"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production-quality rendered cutaway showing a helical multi-slot trim
  element. Checked against the whole library: drawing W8538 appears in
  `Component Index — Oil & Gas Sourcebook ch8.md`, but confirmed by reading
  that record this is unrelated content (a different chapter/product) — not
  a match.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 81-90 in full: p. 81 = printed
  6-1 (Chapter 6 opening, "Control Valve Noise," Table 6-1 on the same
  page), p. 90 = printed 6-10 ("Control Valve Noise Summary," chapter's
  genuine last content page — no trailing blank). PDF page 91 confirmed as
  the Chapter 7 divider ("Steam Conditioning"). Zero page offset (PDF =
  printed + 80) throughout.
- **Full chapter coverage.** All 8 real figures in range (Figures 6-1
  through 6-8) located and catalogued; every page 81-90 was rendered and
  read directly, no gaps in the numeric sequence.
- **No low-confidence flags.**
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter.
- **Table exclusion confirmed.** Table 6-1 ("Maximum Permissible Noise
  Levels," p. 6-1) and Table 6-2 ("Combined Noise Corrections," p. 6-3) are
  genuinely numbered with printed "Table" captions and are correctly
  excluded per the standing tables-vs-figures rule.
- **Cross-reference findings — another confirmed cross-book chapter-
  numbering difference.** This chapter's noise-abatement-hardware content
  matches **Oil & Gas Sourcebook Chapter 5** ("Control Valve Noise"), not
  that book's own Chapter 6 (cavitation/flashing — see this book's Chapter
  4 for that separate mapping). **Four of eight figures are confirmed real
  cross-references** by identical printed drawing number:
  `pp-cmp-whisper-trim-i-cage` (W1257, standalone here vs. one panel of a
  2-view composite in O&G/P&SS ch5),
  `pp-cmp-whisper-trim-i-inline-diffuser-combination` (W2618), and
  `pp-cmp-valve-and-vent-diffuser-combination` (W2672) — each
  cross-referenced by id in its own `notes` above. **Four figures checked
  with no match found:** `pp-cmp-whisper-trim-iii` (W9039),
  `pp-cmp-whisperflo-technology` (W7065/W7056 — W7065 coincidentally
  appears in Oil & Gas ch12 but confirmed unrelated content by reading that
  record), `pp-cmp-vee-ball-noise-attenuator` (W6116), and
  `pp-cmp-notchflo-dst-trim` (W8538 — coincidentally appears in Oil & Gas
  ch8 but confirmed unrelated content). `pp-cmp-cavitrol-iii-trim-photo`
  (W2479) also checked with no match found.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for all eight of this
  chapter's components.
