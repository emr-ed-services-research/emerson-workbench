---
title: Component Index — Oil & Gas Sourcebook ch14
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch14 — LNG Receiving Terminals
updated: 2026-09-08
status: complete — all ten chapter figures (14-1 through 14-10) catalogued across two batches
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 14

**Chapter 14 — "LNG Receiving Terminals."** Standing library-cataloging pass,
NOT tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a component index gets
triggered." Matches the batch shape of the ch1/ch2/ch3/ch5/ch6/ch7/ch8/ch9/
ch10/ch11/ch12/ch13 passes of this same chapter series. Built across two
batches: Figures 14-1 through 14-6 (first batch), and Figures 14-7 through
14-10 (second batch, printed pp. 14-7 through 14-9) — all ten confirmed
against the real page text (`pdftotext -layout`) and a 200/300 dpi
page-image render before extraction; none were skipped or fabricated.
Chapter 14 is now fully catalogued.

All from `20 - Source Library/Industry Specific Sourcebooks/Control Valve
Sourcebook - Oil & Gas.pdf`. Every record's `used-by` is `[]` — none are
placed on a slide yet; a future course resolves against these entries
instead of triggering reactive cataloging.

Record shape matches `Component Index — 14101 ch3.md` (and the rest of this
chapter series): `id` · `teaches` · `concept-tags` · `status` · `source`
(`doc` + `locator`) · `delivery` · `used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher,
held in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Page-numbering note (specific to this chapter)

Chapter 14 begins on PDF p. 160, immediately after Chapter 13's final figure
(confirmed by direct page-image render — Chapter 13's own index file notes
this same handoff from its side). PDF p. 160 is a standalone chapter-title/
opener page (centered "Chapter 14 / LNG Receiving Terminals" title, two
columns of intro text, Figure 14-1 at the bottom of the page, "www.Fisher.com"
footer, **no visible footer folio**) — the same opener convention as
ch9–ch13's own openers, so by that convention it is printed **p. 14-1**.

Folios from PDF p. 161 onward, each confirmed against rendered page images
and the printed footer folio: PDF p. 161 = printed **14-2** (no figure — text
only), PDF p. 162 = printed **14-3** (Figure 14-2), PDF p. 163 = printed
**14-4** (Figure 14-3 in the upper portion, Figure 14-4 below it, same page),
PDF p. 164 = printed **14-5** (Figure 14-5), PDF p. 165 = printed **14-6**
(Figure 14-6). This batch's requested figure list (14-1 through 14-6) is
fully contained in PDF pp. 160–165 (printed 14-1 through 14-6); the chapter
continues past this batch's range — Figures 14-7 through 14-10 exist further
in, at printed pp. 14-7 through 14-9 (per the page-image text extraction done
to locate this batch's figures), out of scope for this batch, flagged for a
future pass if this chapter is revisited.

## Components

### Chapter 14 — LNG Receiving Process (printed p. 14-1)

```yaml
id: ogas-cmp-lng-receiving-terminal-process-flow
teaches: >
  Orienting block-diagram overview of an LNG receiving terminal: LNG from
  the ship flows through LNG ship unloading into the LNG storage tank(s),
  which exchange boil-off vapor with a boil-off system; from storage the
  LNG passes through tank unloading, a recondenser, and a vaporizer, exiting
  as export gas to the distribution pipeline. This is the chapter's
  orienting figure — the same block-diagram-then-zoom-in relationship the
  onshore (ch7 Fig 7-1), offshore (ch8 Fig 8-1), natural-gas-treatment (ch9
  Fig 9-1), fractionation (ch11 Fig 11-1), oil/gas-transportation (ch10 Figs
  10-1/10-2), natural-gas-storage (ch12 Fig 12-1), and LNG-liquefaction (ch13
  Fig 13-1) chapters' own opening figures have to their sections.
concept-tags: [LNG receiving terminal, process overview, block diagram, ship unloading, LNG storage, boil-off system, recondenser, vaporizer, export gas]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-1 (drawing number
      E1536, printed p. 14-1) — "Figure 14-1. LNG Receiving Terminal Process
      Flow Diagram."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig1-lng-receiving-process-flow.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 160, printed p. 14-1) at 300 dpi, full block diagram (all seven named process blocks, boil-off/recondenser/vaporizer return paths), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Chapter opener figure, at the bottom of the standalone title/opener page
  (no visible footer folio, per this chapter series' convention). Directly
  introduced by the "LNG Receiving Process" heading and "Figure 14-1 shows
  the general process flow diagram of an LNG receiving terminal" — a
  confirmed positional and textual match.
```

### Chapter 14 — LNG Receiving Application Review: LNG Ship Unloading (printed p. 14-3)

```yaml
id: ogas-cmp-lng-ship-unloading-vapor-return
teaches: >
  Process diagram of the LNG ship-unloading and vapor-return system. LNG
  from the ship passes through a numbered "1" LNG Unloading Control valve
  (there are generally three per terminal, one per parallel unloading line)
  and a numbered "3" Tank Fill Control valve into the LNG storage tank;
  boil-off vapor returns to the ship through a Vapor Return Line Control
  valve, drawn with the figure's own callout number "1" rather than "2" (the
  application-review text's own item number for that valve) — a source
  labelling quirk, kept as printed rather than corrected, per Style Guide
  §6.2 (a figure's own numbering is not renumbered to match the surrounding
  list). Backs Table 14-1 (LNG Unloading Control Valve: NPS 20-30 A11-C),
  Table 14-2 (Vapor Return Line Valve: NPS 12-18 A31A-C), and Table 14-3
  (Tank Fill Control Valve: NPS 3 ET-C).
concept-tags: [LNG ship unloading, vapor return, LNG unloading control, tank fill control, cryogenic valve, parallel unloading lines]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-2 (drawing number
      E1537, printed p. 14-3) — "Figure 14-2. LNG Ship Unloading and Vapor
      Return Lines."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig2-ship-unloading-vapor-return.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 162, printed p. 14-3) at 300 dpi, full diagram (all three numbered valve symbols, LNG storage tank, vapor-return-to-ship block), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly captioned and positioned within the "LNG Receiving Application
  Review" / "LNG Ship Unloading" section text ("Figure 14-2 shows the
  typical valves associated with the unloading system") — a confirmed
  positional match. `ogas-cmp-a31a-cryogenic-valve` (Figure 14-3, next page)
  is representative hardware for the A31A-C valve type named in Tables 14-1
  and 14-2.
```

### Chapter 14 — LNG Receiving Application Review: representative hardware (printed p. 14-4)

```yaml
id: ogas-cmp-a31a-cryogenic-valve
teaches: >
  Product photo of a Fisher A31A cryogenic control valve — a butterfly-style
  valve body with a long cryogenic bonnet extension separating the actuator
  and handwheel from the process temperature at the body. Representative
  hardware for the A31A-C valve type specified in Table 14-1 (LNG Unloading
  Control, NPS 20-30) and Table 14-2 (Vapor Return Line Control, NPS 12-18),
  both immediately preceding this figure on the prior printed page.
concept-tags: [A31A, cryogenic valve, cryogenic bonnet extension, butterfly valve, LNG unloading control, vapor return line control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-3 (drawing number
      W7449, printed p. 14-4) — "Figure 14-3. A31A Cryogenic Valve."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig3-a31a-cryogenic-valve.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 163, printed p. 14-4, upper portion) at 300 dpi, full product photo (bonnet extension, body, handwheel), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned at the top of printed p. 14-4, directly following the "LNG
  Ship Unloading" application text and Tables 14-1/14-2 on the prior page —
  a confirmed positional match, not a family inference. `ogas-cmp-lng-
  storage-send-out-system` (Figure 14-4) occupies the lower portion of this
  same printed page but belongs to the separate "LNG Storage" section.
```

### Chapter 14 — LNG Receiving Application Review: LNG Storage (printed p. 14-4)

```yaml
id: ogas-cmp-lng-storage-send-out-system
teaches: >
  Process diagram of the LNG storage and low-pressure send-out pumping
  system. Two LNG storage tanks are each shown with a numbered "1" First
  Stage LNG Pump Recirculation valve and a numbered "2" First Stage LNG
  Pump Discharge Pressure Control valve; both tanks' discharge lines
  converge into a shared numbered "3" Recondenser Inlet Control valve
  feeding the recondenser. The numbered valves map directly onto the
  "First Stage LNG Pump Recirculation," "First Stage LNG Pump Discharge
  Pressure Control," and "Recondenser Inlet Control" application-review
  entries and Tables 14-4/14-5/14-6 that immediately follow the figure.
concept-tags: [LNG storage, send-out pumps, pump recirculation, discharge pressure control, recondenser inlet control, low pressure pumping]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-4 (drawing number
      E1538, printed p. 14-4) — "Figure 14-4. LNG Storage Send-Out System."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig4-lng-storage-send-out-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 163, printed p. 14-4, lower portion) at 300 dpi, full diagram (both storage tanks, all five numbered valve symbols, recondenser block), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly captioned and positioned above the "LNG Storage" section heading
  and "Figure 14-4 shows the valves commonly associated with LNG storage and
  the low pressure pumping system" text — a confirmed positional match.
  Numbered callouts 1/2/3 are the source's own numbering, kept as printed
  per Style Guide §6.2.
```

### Chapter 14 — LNG Receiving Application Review: representative hardware (printed p. 14-5)

```yaml
id: ogas-cmp-design-et-c-cutaway
teaches: >
  Labelled cutaway product illustration of a Design ET-C globe control
  valve with a spring-and-diaphragm actuator. Representative hardware for
  the ET-C valve type specified in Table 14-4 (First Stage LNG Pump
  Recirculation Valve, NPS 4-6 ET-C) and, later in the chapter, Table 14-8
  (Low Pressure Fuel Gas Control Valve, NPS 2-6 ET-C) — the surrounding text
  notes this valve "will experience a high pressure drop ratio with low
  overall pressure drop" and that "anti-cavitation trim is generally not
  required in these applications."
concept-tags: [Design ET-C, globe valve, spring and diaphragm actuator, cutaway, pump recirculation valve, low pressure fuel gas]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-5 (drawing number
      W6397-1, printed p. 14-5) — "Figure 14-5. Design ET-C."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig5-design-et-c-valve.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 164, printed p. 14-5) at 300 dpi, full cutaway illustration (spring-and-diaphragm actuator, bonnet, globe body), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the left column of printed p. 14-5, directly above the
  "This valve will experience a high pressure drop ratio..." paragraph that
  closes out the "Recondenser Inlet Control" / First Stage LNG Pump
  discussion — a confirmed positional match, not a family inference.
```

### Chapter 14 — Vapor Handling (printed p. 14-6)

```yaml
id: ogas-cmp-boiloff-gas-pipeline-compression-system
teaches: >
  Process diagram of the vapor handling and boil-off gas system assuming a
  pipeline compressor is present. Both LNG storage tanks feed a boil-off
  gas compressor; a numbered "1" Boil-off Gas Compressor Anti-surge valve
  recycles around it, and a numbered "2" Low Pressure Fuel Gas Control
  valve diverts part of the discharge to LP fuel gas (to the vaporizer).
  The remaining flow proceeds to a pipeline compressor, around which a
  numbered "3" Pipeline Compressor Anti-surge valve recycles (down to the
  recondenser); the pipeline compressor's discharge goes to pipeline. The
  numbered valves map directly onto the "Boil-off Gas Compressor
  Anti-surge," "Low Pressure Fuel Gas Control," and "Pipeline Compressor
  Anti-surge" application-review entries and Tables 14-7/14-8/14-9 that
  immediately follow the figure.
concept-tags: [vapor handling, boil-off gas, anti-surge valve, pipeline compressor, low pressure fuel gas control, recondenser]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-6 (drawing number
      E1539, printed p. 14-6) — "Figure 14-6. Boil Off Gas and Pipeline
      Compression System."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig6-boiloff-gas-pipeline-compression.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 165, printed p. 14-6) at 300 dpi, full diagram (both storage tanks, both compressors, all three numbered anti-surge/control valves, LP fuel gas / pipeline / recondenser outlets), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Chapter-opener figure for the "Vapor Handling" section (top of printed
  p. 14-6, above the section's own text) — a confirmed positional match:
  "Figure 14-6 shows the layout of the vapor handling and boil-off gas
  system assuming a pipeline compressor is being used." Numbered callouts
  1/2/3 are the source's own numbering, kept as printed per Style Guide
  §6.2.
```

### Chapter 14 — Second Stage LNG Send-Out Pumps (printed p. 14-7)

```yaml
id: ogas-cmp-send-out-pump-recirculation-system
teaches: >
  Process diagram of the high-pressure second-stage LNG send-out pump
  system: two parallel pump trains draw from the recondenser, each with a
  numbered "1" Send-out Pump Recirculation valve looping around its pump
  (protects the pump from overheating and potential cavitation; high
  pressure drops require anti-cavitation trim — Cavitrol III), converging
  through a shared numbered "2" Vaporizer Inlet Flow Control valve (a
  medium-sized globe valve taking minimal pressure drop, sized to the
  number of vaporizers in the plant) into the vaporizer. Backs Table 14-10
  (Send-out Pump Recirculation Valve, NPS 2-6 HPT-C) and Table 14-11
  (Vaporizer Inlet Flow Control Valve, NPS 4-6 HPT-C).
concept-tags: [second stage send-out pumps, pump recirculation, anti-cavitation trim, Cavitrol III, vaporizer inlet flow control, high pressure pump system]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-7 (drawing number
      E1132, printed p. 14-7) — "Figure 14-7. High Pressure Pump System."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig7-send-out-pump-recirculation-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 166, printed p. 14-7, left column) at 300 dpi, full diagram (both pump trains, both numbered valve types, recondenser and vaporizer blocks), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly captioned and positioned above the "Second Stage LNG Send-Out
  Pumps" heading and "Figure 14-7 shows the layout of the high pressure
  pump system" text — a confirmed positional match. Table 14-9 (Pipeline
  Compressor Anti-surge Valve) also prints on this same page but is a
  continuation of the prior "Vapor Handling" section (Figure 14-6) and is
  not part of this figure. `ogas-cmp-scv-fuel-gas-valve-train` (Figure
  14-8) occupies the right column of this same printed page but belongs to
  the separate "LNG Vaporizers" section.
```

### Chapter 14 — LNG Vaporizers: Submerged Combustion Vaporizer (printed p. 14-7)

```yaml
id: ogas-cmp-scv-fuel-gas-valve-train
teaches: >
  Process diagram of the fuel-gas and combustion-air valve train feeding a
  submerged combustion vaporizer (SCV). Fuel gas passes through a numbered
  "1" High Pressure Fuel Gas Pressure Control valve (present only where
  there is no separate low-pressure fuel-gas take-off; a globe valve,
  likely needing noise-attenuating trim) into two parallel numbered "2"
  Fuel Gas Pressure Control valves (flow may be split across two valves or
  combined into one, depending on SCV turndown and required flow) feeding
  the combustor, which outputs GAS and EXHAUST GAS, with LNG fed directly
  into the combustor. Backs Table 14-12 (High Pressure Fuel Gas Pressure
  Control Valve, NPS 2-4 HPT) and Table 14-13 (Fuel Gas Pressure Control
  Valve, NPS 2-4 ET).
concept-tags: [submerged combustion vaporizer, SCV, fuel gas pressure control, high pressure fuel gas, noise attenuating trim, combustor]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-8 (drawing number
      E1133, printed p. 14-7) — "Figure 14-8. High Pressure Pump System."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig8-scv-fuel-gas-valve-train.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 166, printed p. 14-7, right column) at 300 dpi, full diagram (fuel gas inlet, both numbered valve types, combustor symbol, LNG/GAS/EXHAUST GAS labels), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Source-fidelity flag: the printed caption reads "Figure 14-8. High
  Pressure Pump System" — identical wording to Figure 14-7's caption on
  the same page — even though the figure and its own section text
  ("LNG Vaporizers" / "Submerged Combustion Vaporizer" / "Figure 14-8 shows
  the typical valves associate with an SCV") describe a fuel-gas/combustor
  valve train, not a pump system. This reads as a caption copy-paste error
  in the source itself; kept verbatim per Style Guide §6.2's spirit (a
  source's own labelling is recorded as printed, not silently corrected) —
  flagged here rather than corrected, since correcting a caption is a
  different act than keeping a figure's internal numbering as printed.
  Positional match confirmed directly against the section heading and body
  text. `ogas-cmp-shell-tube-vaporizer-valves` (Figure 14-9, next page) is
  the shell-and-tube-vaporizer analog with a third valve (HTF).
```

### Chapter 14 — LNG Vaporizers: Shell and Tube Vaporizer (printed p. 14-8)

```yaml
id: ogas-cmp-shell-tube-vaporizer-valves
teaches: >
  Process diagram of the valve train for a shell-and-tube LNG vaporizer.
  Fuel gas passes through a numbered "1" High Pressure Fuel Gas Pressure
  Control valve into two parallel numbered "2" Fuel Gas Pressure Control
  valves feeding a combustor; the combustor's heat-transfer-fluid (HTF)
  loop passes through a numbered "3" Heat Transfer Fluid Inlet to Heater
  valve (a butterfly valve) into the vaporizer body, which also takes LNG
  in and outputs GAS. Backs Table 14-14 (High Pressure Fuel Gas Pressure
  Control Valve, NPS 2-4 HPT), Table 14-15 (Fuel Gas Pressure Control
  Valve, NPS 2-4 ET), and Table 14-16 (Heat Transfer Fluid Inlet to Heater
  Valve, NPS 16-18 A31A).
concept-tags: [shell and tube vaporizer, heat transfer fluid, HTF, fuel gas pressure control, butterfly valve, high pressure fuel gas]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-9 (drawing number
      E1134, printed p. 14-8) — "Figure 14-9. Shell and Tube Vaporizer and
      Associated Valves."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig9-shell-tube-vaporizer-valves.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 167, printed p. 14-8, right column) at 300 dpi, full diagram (fuel gas inlet, all three numbered valve types, combustor, HTF loop, vaporizer block, LNG/GAS labels), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly captioned and positioned above the "Shell and Tube Vaporizers"
  heading and "Figure 14-9 shows the typical valves used in a shell and
  tube vaporizer" text — a confirmed positional match. Unlike Figure 14-8's
  SCV train (two numbered valve types), this figure's third numbered valve
  (HTF inlet, a butterfly) is a genuine structural difference between the
  two vaporizer types, not a source error — the diagram's "3" callout and
  the body text's "3. Heat Transfer Fluid Inlet to Heater" (printed on the
  following page, p. 14-9) match.
```

### Chapter 14 — Send-out System (printed p. 14-9)

```yaml
id: ogas-cmp-plant-discharge-valves
teaches: >
  Process diagram of the valves found at the end of the LNG receiving
  terminal, downstream of the vaporizer. A numbered "2" System Outlet
  Control valve (a butterfly valve, possibly of cryogenic design in case
  upstream vaporizers fail) controls the final discharge pressure to the
  pipeline network; a numbered "1" High Pressure Fuel Gas Pressure Control
  valve branches off to onsite utilities or combustion turbines (present
  only where there is low-pressure fuel gas onsite; there may be two to
  four such valves). Backs Table 14-17 (High Pressure Fuel Gas Pressure
  Control Valve, NPS 2-4 HPT) and Table 14-18 (System Outlet Control Valve,
  NPS 20-30 A11 / A11-C).
concept-tags: [plant discharge, send-out system, system outlet control, high pressure fuel gas, cryogenic butterfly valve, pipeline discharge]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 14 "LNG Receiving Terminals," Figure 14-10 (drawing number
      E1540, printed p. 14-9) — "Figure 14-10. Plant Discharge Valves."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch14-fig10-plant-discharge-valves.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 168, printed p. 14-9, left column) at 300 dpi, full diagram (vaporizer block, both numbered valve types, discharge arrows), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly captioned and positioned above the "Send-out System" heading
  and "Figure 14-10 shows the valves found at the end of the terminal"
  text — a confirmed positional match. This is the chapter's final figure;
  no figures remain uncatalogued in Chapter 14 after this batch.
```

---

## Open items

- **First batch (Figures 14-1 through 14-6):** all six requested figures
  confirmed against the real page text and a 300 dpi page-image render
  before extraction; none were skipped or fabricated. PDF pages 160
  (printed 14-1, opener), 162 (14-3), 163 (14-4, ×2), 164 (14-5), 165
  (14-6). PDF p. 161 (printed 14-2) has no figure — text only, confirmed
  by direct page-image render, not treated as a gap since no figure was
  requested there.
- **Figure 14-2 source-fidelity note:** the figure's own vapor-return-valve
  callout is printed "1", not "2" as the surrounding application-review
  text's item numbering would suggest for that valve. Recorded as-is in
  `ogas-cmp-lng-ship-unloading-vapor-return`'s `teaches` field per Style
  Guide §6.2 (a figure's own numbering is kept as printed, not silently
  corrected to match a different list).
- **Second batch (Figures 14-7 through 14-10), this pass:** all four
  requested figures confirmed against the real page text (`pdftotext
  -layout`) and 200/300 dpi page-image renders before extraction; none
  were skipped or fabricated. PDF pages 166 (printed 14-7, two figures),
  167 (printed 14-8), 168 (printed 14-9).
- **Figure 14-8 source-fidelity note:** its printed caption ("High Pressure
  Pump System") duplicates Figure 14-7's caption verbatim even though
  Figure 14-8 depicts an SCV fuel-gas/combustor valve train, not a pump
  system — almost certainly a caption copy-paste error in the source book
  itself. Recorded as printed in `ogas-cmp-scv-fuel-gas-valve-train`, not
  silently corrected, with the discrepancy flagged in its `notes`.
- **Chapter 14 is now fully catalogued** — Figures 14-1 through 14-10, all
  ten of the chapter's figures, across this batch and the prior one. No
  further figures exist in this chapter.
- All ten records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from either
  batch — out of scope for a standing Component-Index-only cataloging
  pass.
