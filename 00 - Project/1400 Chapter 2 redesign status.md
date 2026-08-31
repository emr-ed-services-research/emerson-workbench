---
title: 1400 — Day 1 redesign status
type: reference
tags:
  - project
  - "1400"
  - status
updated: 2026-08-31
---

# 1400 — Day 1 redesign status

Running tracker for the Stage 3 (four-part) slide pass on course 1400.
Process and the pre-send checklist: [[Course Porting Pipeline]] → Stage 3.
Templates: `40 - Engine/Presentation/build/css/TEMPLATES.md`.

## Where the course stands

| Day / Chapter | `course.json` status | Stage 3 pass |
| --- | --- | --- |
| Module 0 — Before We Start | ready | not needed (bookend) |
| **Day 1 · Ch 1** — Control Valve Specifications | ready | **done** — template rebuild, then 3 thin modules consolidated into one ("Reading a Valve's Specifications") |
| **Day 1 · Ch 2** — Fisher Easy-E Valve Maintenance | **all 7 modules `ready`** | **modules 1–3 four-part done** (see below). **Modules 4–7 Stage 2 done** (context authored 2026-08-31); their Stage 3 slide passes are the next block of work. |
| Day 1 · Ch 3 — Sliding-Stem S&D Actuator Maintenance | outline | not started |
| Day 1 · Ch 4 — Sliding-Stem Piston Actuator Maintenance | outline | not started |
| Day 1 · Ch 14 — Workshop 1: Sliding Stem | outline | not started |
| Days 2 and 3 (Ch 5–16) | outline | not started |

The day-intro and chapter-intro cards and the `.slide--hd` course-wide heading
are in place across the whole shell. The TOC navigation exists but has known
behavioural gaps — see **Carried forward past Chapter 2** at the end of this
note.

## Chapter 2 modules 1–3 — four-part pass complete

Every in-flow slide is on a template; bullet lists moved to the module key
concepts; floating PowerPoint text boxes became figure captions or callouts.

| Module | Slides reworked | Commits |
| --- | --- | --- |
| **1 · Valve Bodies, Plugs & Seating** | 27 (Handbook Fig 1.3), 28/29/30/34/35 (figrow), 31/32 (diagram + leader callouts) | `9938ce6`, `bf56629`; 34 shutoff ranking resolved _(pending commit)_ |
| **2 · Plug Guiding, Cages & Flow Characteristics** | 36/38 (figrow), 37/43 (diagram + callouts), 39 (SVG curve), 40 (table + cage row) | `23fc1f7`, `f99eee0` |
| **3 · easy-e Trim Seals & Packing** | 45 (dropped, merged into 46), 46 (tmpl-table), 47 (figrow + lead table — re-laid from tmpl-compare), 51 (is-sourced diagram — Handbook Fig 1.6 cutaway, replaced a hand-drawn SVG), 52 (table + packing row) | `5eb04cc`, _(47 / 51 revision pending commit)_ |

Consolidations (Part 3): 40 = old 40+41+42; 47 = old 47+48+49; 52 = old
52+53+54; Ch 1's one module = old 3 modules. Dropped slides keep their files
for the standalone deck and carry a `data-review` ribbon.

### Templates that emerged during this pass

- **1 — intro cards** (day / chapter / module), shell-rendered
- **2 — `.slide--tmpl-diagram`** labelled diagram, Handbook callout convention;
  `.is-wide` for detailed cutaways (31, 32, 43); `.is-sourced` for a figure
  that carries its own callouts (27, 51)
- **3 — `.slide--tmpl-table`** one reference table (16, 46)
- **4 — `.slide--tmpl-compare`** table + a paired illustration (19). Slide 47
  was moved off this template — a small floating aside image reads too weak next
  to a full table; use `.slide--tmpl-figrow.has-lead` when the images carry real
  teaching weight.
- **5 — `.slide--tmpl-figrow`** 2–4 captioned figures in a row (28, 29, 30, 34,
  35, 36, 38, 39); `.has-lead` = a table above the row (40, 47, 52)

### Derived / redrawn images

In `10 - Courses/1400 .../Presentation/build/assets/sourced/` with provenance
in that folder's `SOURCES.txt`:
- `cvh6-fig1-3-globe-valve-components.png` — Handbook Fig 1.3 (slide 27)
- `plug-unbalanced-head.png`, `plug-balanced-head.png` — cropped (slide 30)
- `cage-plug-assembly.png` — cropped (slide 37)
- `flow-curve.png` (superseded by an inline SVG), `flow-cages.png`,
  `cage-quick-opening.png` / `cage-linear.png` / `cage-equal-pct.png` (slide 40)
- `piston-seal-spring-loaded-detail.png` / `piston-seal-location.png` — deck
  image76 split into its two panels (slide 47)
- `cvh6-fig1-6-bonnet-packing-box.png` — Handbook Fig 1.6 "Bonnet Assembly"
  cutaway, callouts 1–4 (slide 51)
- Slide 39 uses an inline SVG authored in the slide file.

## Open follow-ups

| Slide | Item |
| --- | --- |
| 34 | ~~`NEEDS VERIFY` — radius vs standard shutoff ranking~~ **Resolved 2026-08-31.** Checked against the Fisher ET manual (D100398X012, Table 2 + note 2): Class V metal shutoff on the easy-e uses a *radiused-seat plug + wide-bevel seat ring*; standard metal seating is Class IV — so the radius/wide-bevel arrangement is Fisher's tighter metal option, but via a *rounded* surface on a *narrow line*, not a knife edge (the photos confirm a rounded edge). "knife-edge" and "tightest shutoff / never lapped" removed from the captions; the ranking is now a one-line `tmpl-note` (Class V vs IV) and the field trade-off (narrow line seals tighter while true, but tolerates damage poorly and is re-machined not field-lapped) is in the context pane. `course.json` + `course-data.js` key concept updated. |
| 34 | Plug-tip close-ups (image51 / image52) have crude blue arrows burned in — could be cleaned. Still open. |
| 38, 43 | The Fisher EZ manual sectional (Figure 11 plain bonnet / Figure 12, D100401X012) is clean line-art but carries the manual's parts-list key numbers; lifting it would need real image editing. Current figures are adequate. |
| 46 | ET piston-seal cell reads "PTFE with Nitrile Backup" — reflects the ET manual's "two-piece PTFE seal ring with elastomeric backup ring"; left as reviewed, flag if a cleaner wording is wanted (needs sync across 4 `data-ref` copies). |
| 47 | Only the spring-loaded PTFE seal is shown (no graphite / two-piece image exists in the deck); the table carries all three. The `piston-seal-location.png` panel keeps the source figure's diagonal locator arrow running off its top-left corner — reads as a link to the detail panel, could be painted out if it bothers. |
| 51 | Uses Control Valve Handbook Fig 1.6 (generic bonnet cutaway). Fine for a "what is a packing box" slide. If a Fisher easy-e-specific packing-box sectional is wanted later, the ES/EAS and ET/EZ instruction manuals (D100398X012, D100401X012) have one, but they carry the manuals' parts-list key numbers. |
| 48–50, 53–54 | Out-of-flow deck files still on the pre-pass PowerPoint markup. A deck-hygiene pass could bring them onto the templates; low priority (they are not in any module). |

## Current work — finishing Chapter 2 (per [[System Architecture]] directive)

Sequencing is fixed: finish Ch 2 modules 4–7, then the Pipeline Console. No
Day 1 Ch 3/4, no second course, no console work until Ch 2 is done. Rework
requests in this window are treated as pipeline QA (working rule 3).

**Stage 2 for modules 4–7 is complete (2026-08-31).** All seven Ch 2 modules
are `status: ready`. Next block: the Stage 3 four-part slide passes for
modules 4–7 (option 1 — all Stage 2 first, then the slide passes as a block).

| Module | Stage 2 (context) | Stage 3 (slide pass) |
| --- | --- | --- |
| 4 · Body Disassembly & Seal Replacement | **done** — objective + 6 key concepts, sourced from the ET (D100398X012) and ED (D100390X012) manuals; `status: ready` | **done** — 7 slides → 3 in-flow: 56 Disassembly (figrow), 57 Inspect Plug & Stem (figrow), 58 Replacing the Piston Seal (figrow+lead, 58+59+60+61 consolidated). 55/59/60/61 dropped-retained. `pages` [56, 57, 58]. |
| 5 · Valve Lapping | **done** — objective + 6 key concepts, sourced from the ET / ED / EZ manuals' Lapping Metal Seats sections and the CVH; `status: ready` | **done** — 5 slides → 4 in-flow: 62 Valve Lapping (lap-line-on-plug photo + manual pointer; 63 merged in), 64 Set Up the Lap, 65 Lap & Check, 66 Damage from Bad Practice — all figrow. `pages` [62, 64, 65, 66]. |
| 6 · Packing Replacement & Adjustment | **done** — objective + 6 key concepts (removal + the five packing types' distinct compression methods), sourced from the ET / HIGH-SEAL / ENVIRO-SEAL manuals and the deck; `status: ready` | **done** — 11 slides → 3 in-flow: 68 Removing the Old Packing (68+69), 70 Building the Stack (ET Fig 4, is-sourced; 70+71+74), 72 Setting the Compression (5-method table; 72+75+76+77+78+79). `pages` [68, 70, 72], `check` [73, 80]. |
| 7 · Reassembly & Gaskets | **done** — objective + 5 key concepts, sourced from the ET manual's Assembly section + bonnet-bolting note + Table 3; `status: ready` | **done** — 5 slides → 3 in-flow: 82 Gaskets (3-type table; 82+85), 83 Where the Gaskets Go (image143 + caption), 84 Bonnet Reassembly (torque photo + crosswise-order SVG). `pages` [82, 83, 84], `check` [86] (retitled "Bonnet Torque"). 81/85 dropped. |

### Module 4 — Stage 3 done (2026-08-31)

7 slides → 3 in-flow. 55 dropped (roadmap); 58 rebuilt as a `figrow + lead
table` consolidating 58+59+60+61; 56 and 57 rebuilt as figrows. Verified in
4:3 and the 16:9 shell.

Leftover minor polish (not gate failures):

- Deck's burned-in **blue arrows** on images 88, 90, 91, 92 kept — part of the
  batched arrow-cleanup follow-up.
- Slide 57: `image91` (plug) is low-resolution (313 px native) and renders
  smaller than the stem photo beside it. Fine to read; replace with a better
  close-up in a later polish pass.
- Slide 56: `image89` is taller than the other two cells, so its caption sits
  ~30 px lower. Within tolerance.
- New sourced crops: `disassembly-match-mark.png`, `seal-two-piece-cut.png`,
  `seal-spring-loaded-clip.png` (see `SOURCES.txt`).
- Template guidance added to `TEMPLATES.md` (engine + course copies): figrow
  cells must share an aspect ratio (±15%) and figcaption tags stay one line.

### Module 5 — Stage 3 done (2026-08-31)

5 content slides → 4 in-flow. Old 62 (weak opener) and 63 (crude schematic
image105) merged into a new slide 62. 64/65/66 re-templated as figrows;
slide 66 keeps just the clearer of the two near-identical galling composites
(image113). Verified 4:3 and 16:9.

**Slide 62 corrected (2026-08-31):** first drawn as an inline-SVG cutaway with
the lap line as a flat "V" where the plug and seat cones meet — wrong geometry
(the lap line is a *circumferential ring* around the plug's chamfer; an axial
section of a ring is not a V). Replaced with the deck photo of a real plug with
the seating band arrowed (`lap-line-on-plug.png`). `image110` moved off slide 65
in the process, so 65 is now single-cell (the lapping motion). Rule codified in
the pre-send checklist (Image-quality item) and working rule 2.

### Module 6 — Stage 3 done (2026-08-31)

11 content slides → 3 in-flow + the 2 CYK.

- **68 Removing the Old Packing** (68+69): image115 (push it out the top), the
  "repack to the manual" point Franz flagged is a `.tmpl-source` line.
- **70 Building the Stack** (70+71+74): the ET manual Figure 4 PTFE/composition
  packing arrangement, cropped and whited at the left edge, self-labelled
  (box ring → wiper). `.tmpl-figrow` single cell + `.tmpl-source`.
- **72 Setting the Compression** (72+75+76+77+78+79): the 5-method table on
  `.slide--tmpl-table`, with a **"Set by"** column that carries the live-loaded
  distinction (follower stop / torque / torque / spring geometry / spring
  geometry). Table `style` vertically centred and font bumped so it fills the
  slide. The HIGH-SEAL load-scale figure was tried as a compare aside but left
  the slide sparse; dropped.

69 / 71 / 74 / 75 / 76 / 77 / 78 / 79 dropped-retained. New sourced asset:
`packing-stack-ptfe.png` (ET Fig 4 crop). Verified 4:3 and 16:9.

### Module 7 — Stage 3 done (2026-08-31)

5 content slides → 3 in-flow + CYK.

- **82 Gaskets** (82+85): the 3-type table (flat sheet / metal shim / spiral
  wound) with the "acts as a spring" point in the spiral-wound row. The three
  deck gasket photos are rings shot at wildly different angles (AR 3.6 / 1.5 / 4)
  and don't row cleanly, so it's a table. `colgroup` widths + `table-layout:
  fixed` + font-bump + `flex-direction:column; justify-content:center` on
  `.tmpl-wrap` (the `.tmpl-table` doesn't stretch to full width in a plain flex
  container — needs the colgroup).
- **83 Where the Gaskets Go**: image143 (trim sectional) for context, the gasket
  stack order in the caption, the one-torque-path point in the note.
- **84 Bonnet Reassembly**: image147 (torquing the bonnet) + a small SVG of the
  4-bolt crosswise tightening order (1→2→3→4). Torque *values* dropped — a
  manual lookup, not slide content.

81 / 85 dropped-retained (their old `data-review` conversion flags —
`svg-rebuilt`, `ole-fallback` — folded into the drop ribbon). CYK 86 retitled
"Check Your Knowledge: Bonnet Torque" (was mislabelled "1").

### Visual-aid slides added (2026-08-31, at Franz's request)

Real photos of the packing and gasket examples, on repurposed dropped slides:

- **Slide 71 · PTFE Packing Sets** (m6, renders 3rd): the two PTFE arrangements
  module 6 distinguishes — spring-loaded single V-ring (image119) vs. jam
  multi-ring (image121), both numbered. Graphite noted. Graphite / HIGH-SEAL
  component flat-lays (image127/128) don't row with these and graphite +
  ENVIRO-SEAL sets are already on slide 52, so they stay out.
- **Slide 85 · The Three Gaskets** (m7, renders 2nd): flat sheet (image138),
  metal shim (image140), spiral wound (image141) as whole rings. The three deck
  photos were shot at different angles so the shim looks fuller than the other
  two — a source-photo limitation, acceptable for a visual aid.

`pages` now m6 [68, 70, 71, 72], m7 [82, 85, 83, 84].

## Chapter 2 Stage 3 — complete (2026-08-31)

All seven modules have had their four-part slide pass. In-flow slide counts:
m1 8, m2 6, m3 4, m4 3, m5 4, m6 4, m7 4 — plus the CYK slides. Chapter 2 is
done; next is whatever [[System Architecture]] sequences after it (the Pipeline
Console).

## Out of scope until Chapter 2 is finished

- Day 1 Chapters 3, 4, Workshop 1 — still `outline`.
- Days 2 and 3.
- Pipeline Console / Cartridge separation — deferred by [[System Architecture]].

## Carried forward past Chapter 2

Logged at the end-of-Chapter-2 coherence review (2026-08-31). None of these
block the Pipeline Console phase; they are picked up when the Workshop shell is
next unfrozen (likely alongside the Console build, since the Console is where
shell/nav QA belongs).

### Workshop shell — navigation behaviour

The shell nav is present but does not yet behave as intended. These were
reported as bugs, not design choices:

- Clicking a **day or chapter name** in the TOC only toggles expand/collapse —
  it does not navigate to that day/chapter intro card.
- **Modules do not expand/collapse within a chapter** — the collapsible tier
  stops at chapter level.
- **Day-intro and chapter-intro cards are not in the sequential Prev/Next
  spine** — you can only reach them from the TOC, not by paging through the
  course.

Because the Workshop is structurally locked until the Console phase, these are
recorded here rather than fixed now. The `Where the course stands` note above
was corrected to stop claiming this nav is fully working.

### Day / chapter intro-card visual banner

A directive to give the day- and chapter-intro cards a visual banner treatment
was raised but its status was never confirmed. Revisit when the shell is
unfrozen; confirm the intended treatment before building it.

### Chapter 1 slide-level module structure

`course.json` gives Chapter 1 one consolidated module ("Reading a Valve's
Specifications", resolved 2026-08-31, commit `0ccc636`), but the underlying
slide content still reads as a flat list rather than a module-shaped teaching
unit the way Chapter 2 does. Flagged by Franz as a content decision to revisit
later, not a nav bug. Tracked in [[Open Questions#Chapter 1 module structure (course 1400)]].

### Burned-in blue arrows on deck photos

Several deck photos carry crude blue arrows burned into the raster — slide 34
plug tips (image51/52), module 4 disassembly photos (images 88, 90, 91, 92),
the lap-line photo on slide 62, the match-mark photo on slide 56. Kept as-is;
batched into one arrow-cleanup pass to run when image editing is worthwhile.

### ENVIRO-SEAL / HIGH-SEAL packing imagery

Module 6's packing visual-aid slide (71) shows only the two PTFE arrangements.
The live-loaded packing types (HIGH-SEAL, ENVIRO-SEAL) have no slide-suitable
photo — the deck's component flat-lays don't row with the PTFE stems, and the
graphite / ENVIRO-SEAL sets already appear on slide 52. If dedicated imagery of
these systems is wanted, it needs to be sourced from the D101453X012 /
D101642X012 manuals in a later pass.

## Chapter 2 — closed (2026-08-31)

The end-of-Chapter-2 coherence review is complete. Documentation gaps found and
fixed: `40 - Engine` added to [[Vault Structure]]; the geometry-check rule
consolidated to a single canonical statement in [[Course Porting Pipeline]]
working rule 2 (the pre-send checklist now points to it); the status blocks in
[[Course Porting Pipeline]], [[System Architecture]] and [[Roadmap]] updated to
say Chapter 2 is done; the Stage 1 "run it even when a skeleton exists" note
added to the pipeline after finding modules 4–7 went straight into Stage 2.
Open items that are not gaps are logged above. Chapter 2 is genuinely closed;
Pipeline Console work can begin.
