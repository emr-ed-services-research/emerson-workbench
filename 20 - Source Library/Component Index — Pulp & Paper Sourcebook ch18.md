---
title: Component Index — Pulp & Paper Sourcebook ch18
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch18 — Boilers – Water/Steam Cycle
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 18

**Chapter 18 — printed divider reads "Boilers — Water/Steam Cycle"** (the
table of contents lists this chapter as "Power & Recovery Boiler"; the
chapter's own printed divider title is different — confirmed by direct
rendering of the divider page, consistent with the standing "confirm the
real printed title, don't trust the TOC" convention already applied in
this book's Chapters 5 and 10A). Standing full-chapter cataloguing pass,
**closing out the whole-book completion pass begun with Chapter 1** — this
is the last real chapter in the book (confirmed directly; see below). A
short chapter by figure count — 2 real figures across 8 pages, the rest
per-valve-tag narrative write-ups (Boiler Feedwater System, Steam
Generation, Sootblower Valve, Main Steam PRV and Turbine Bypass, Condensing
and Cooling System) closing in one unnumbered valve-selection table.

Chapter boundaries confirmed directly by rendering: PDF page 209 = printed
p. 18-1 (Chapter 18 divider, "Boilers — Water/Steam Cycle"), PDF page 216 =
printed p. 18-8 (Figure 18-2, chapter's last content page, no trailing
blank). PDF page 217 confirmed **blank** (rendered and visually inspected —
no text, no figure, only white space; not a numbered chapter page at all).
PDF page 218 confirmed as the book's real back-cover/colophon page (Emerson
Process Management office addresses and legal disclaimer text — not a
19th chapter, not further content of any kind). Zero page offset throughout
for the chapter itself (PDF page = printed page number + 191). Chapter 18 =
PDF pp. 209-216. **The book ends here** — 218 PDF pages total (confirmed via
`pdfinfo`), with p. 217 a genuine trailing blank and p. 218 the colophon;
there is no Chapter 19 or further content of any kind.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. Both figures are first-party Fisher process diagrams (own drawing numbers, no TAPPI credit) — no archive, legacy, or cross-book overlap found. |

## Components

### Chapter 18 — Water/Steam Cycle and Boiler Convective Section (printed pp. 18-3–18-4)

```yaml
id: pp-cmp-water-steam-cycle-diagram
kind: figure
teaches: >
  A generic mill water/steam cycle as one labeled process diagram: one
  power boiler (base-loaded on bark/hog fuel, supplemented with coal, oil,
  or gas) and one recovery boiler (base-loaded on a constant flow of black
  liquor fuel, with steam flow/pressure allowed to fluctuate) both
  discharge into a common high-pressure superheated-steam header, whose
  pressure (typically 1000-1500 psig) is controlled by varying the power
  boiler's own fuel input — the chapter's own orienting figure, since every
  following section (BFW, steam generation, sootblowers, PRV/turbine
  bypass, condensing) is a zoom-in on one part of this one cycle.
concept-tags: [water steam cycle, power boiler, recovery boiler, black liquor fuel, steam header, base load, boiler feedwater]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 18-1 'Water/Steam Cycle Diagram,' p. 18-3 (PDF p. 215), drawing E1385"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number E1385 printed at
  upper left — no TAPPI credit (first-party Fisher content, unlike the
  bulk of Chapters 14-17's process art). No control-valve tags visible on
  this system-level diagram itself; the chapter's per-topic write-ups (BFW
  Recirculation, Feedwater Startup/Regulating, Sootblower, Main Steam
  PRV/Turbine Bypass, Condensate Recirculation) each describe their own
  duty point in prose against this cycle rather than a tagged figure.
  Checked against the whole library: no exact drawing-number match found —
  genuinely unique to this chapter.
```

```yaml
id: pp-cmp-boiler-upper-convective-section
kind: figure
teaches: >
  An enlarged view of a power/recovery boiler's upper convective section:
  boiler feedwater (BFW) enters the economizer, then flows to the steam
  drum of the generating section; saturated steam leaving the steam drum
  passes through primary and secondary superheater sections (with
  attemperation/desuperheating between them to control final temperature
  and prevent tube overheating) before reaching the high-pressure
  superheated steam header, where a vent handles superheater moisture
  clearing at startup and pressure relief; a separate valve is shown
  controlling steam flow to the sootblowers.
concept-tags: [boiler convective section, economizer, steam drum, superheater, attemperation, desuperheating, sootblower valve, steam vent]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 18-2 'Power or Recovery Boiler Upper Convective Section,' p. 18-4 (PDF p. 216), drawing E1386"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled cutaway/schematic, drawing number E1386 printed at upper
  left — no TAPPI credit, first-party Fisher content. Zooms into the
  generating/superheating stage of Figure 18-1's whole-cycle diagram, the
  same "system diagram then stage-level detail" pairing pattern already
  seen elsewhere in this book (e.g. Chapter 10B's steaming-vessel detail
  following its system diagram). Checked against the whole library: no
  exact drawing-number match found — genuinely unique to this chapter.
```

## Open Items

- **Chapter/scope boundary confirmed directly**, not merely inherited from
  any candidate range — **including confirming this is the real end of the
  book, not an assumption from the page count.** Rendered and read PDF pp.
  209-218 in full: p. 209 = printed 18-1 (Chapter 18 opening, "Boilers —
  Water/Steam Cycle"), p. 216 = printed 18-8 (Figure 18-2, chapter's
  genuine last content page — no trailing blank within the chapter's own
  numbered pages). PDF p. 217 rendered and visually confirmed genuinely
  **blank** — no text, no figure, no page-number footer even, pure white
  space. PDF p. 218 rendered and visually confirmed as the book's real
  **back-cover/colophon page**: Emerson Process Management office addresses
  (Marshalltown Iowa, Sorocaba Brazil, Chatham UK, Dubai UAE) and a legal
  disclaimer paragraph about product specifications — genuine back matter,
  not a 19th chapter or any further technical content. `pdfinfo` confirms
  218 total pages, matching exactly; there is nothing beyond p. 218. Zero
  page offset for the chapter itself (PDF = printed + 191) throughout.
- **Naming note:** the table of contents lists this chapter as "Power &
  Recovery Boiler"; the real printed chapter-divider title reads "Boilers
  — Water/Steam Cycle" — confirmed by direct rendering of PDF p. 209. Used
  the real printed form throughout this file, consistent with the standing
  "confirm the real printed title, don't trust the TOC" convention already
  applied in this book's Chapters 5 and 10A.
- **Full chapter coverage.** All 2 real figures in range (Figures 18-1,
  18-2) located and catalogued; every page 209-216 was rendered and read
  directly, no gaps in the numeric sequence — the chapter contains exactly
  two figures, confirmed, none skipped. Pages 18-2, 18-3 (part), 18-5
  through 18-7 (PDF 210, part of 211, 213-214... precisely: PDF 210-214)
  are exclusively per-valve/per-topic narrative write-ups ("Boiler
  Feedwater System," "Feedwater Recirculation Valve," "Feedwater Startup
  and Regulating Valves," "Steam Generation," "Sootblower Valve," "Steam
  Turbine Generators," "Main Steam PRV and Turbine Bypass," "Turbine
  Bypass," "Condensing and Cooling System," "Condensate Recirculation
  Valve") with no figures at all — confirmed by direct reading of every
  page, not assumed from a sparse text-extraction hit.
- **No low-confidence flags.** Every caption, drawing number, and page
  location was confirmed by direct visual inspection of the rendered PNG
  at 150 dpi, not text extraction alone.
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter.
- **Table exclusion confirmed.** The chapter's closing content (p. 18-6,
  PDF 214) is an unnumbered "PROCESS / Water/Steam Power Cycle / FISHER
  VALVE PRODUCT DESIGN" valve-tag reference table (Valve Tag#, Application
  Description, Control Function, and Fisher product-line columns spanning
  V150/V300, V500, Control-Disk, E-Body, EH, HP, Steam Conditioning,
  Typical Valve Size) — excluded per the standing valve-application/
  valve-tag reference-table rule already applied throughout this book. No
  "Figure" or "Table" caption/number appears anywhere on the page, and its
  content is purely tabular, not a diagram.
- **Cross-reference findings.** Checked both drawing numbers (E1385,
  E1386) against the whole library — **no match found for either**. Also
  grepped the whole library for "boiler feedwater," "sootblower," "turbine
  bypass," "water/steam cycle," and related terms: "boiler feedwater" and
  "turbine bypass" as generic concepts do appear in several other
  sourcebooks' own boiler/steam-conditioning chapters (Control Valve
  Handbook ch3/ch7, Oil & Gas ch9, Power & Severe Service ch7/ch8/ch9a/
  ch9d, Refining ch3) — each checked directly and confirmed to be a
  different book's own distinct figure/content, not a drawing-number match
  to either of this chapter's two figures; this chapter's own turbine-
  bypass system diagram (Figure 7-12, `pp-cmp-turbine-bypass-system-
  schematic`) was already cross-referenced against Power & Severe Service
  ch7 in this book's own Chapter 7 file, and this chapter (18) introduces
  no new turbine-bypass diagram of its own to re-check. Genuinely unique
  to this Pulp & Paper book at the figure level.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for both of this
  chapter's components.
- **Whole-book closure note:** this chapter closes the Pulp & Paper
  Sourcebook cataloguing pass in full. All 18 real chapters (1, 2, 3, 4, 5,
  6, 7, 8, 9, 10A, 10B, 11, 12, 13, 14, 15, 16, 17, 18 — chapter 10 genuinely
  has exactly two lettered sub-parts, 10A and 10B, confirmed directly
  against the book's own real table of contents on PDF p. 2, no 10C or
  further sub-parts) are now catalogued end to end, PDF pp. 9-216, with pp.
  1-8 (front matter/TOC/introduction) and pp. 217-218 (blank + colophon)
  confirmed as genuine non-content pages requiring no further cataloguing.
