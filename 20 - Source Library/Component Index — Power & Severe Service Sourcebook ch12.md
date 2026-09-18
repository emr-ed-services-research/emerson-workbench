---
title: Component Index — Power & Severe Service Sourcebook ch12
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch12 — Codes and Standard Overview
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 12

**Chapter 12 — "Codes and Standard Overview."** Standing library-cataloging
pass, part of the whole-document Power & Severe Service Sourcebook index —
built ahead of any course actually needing these figures, per `Source
Library.md`'s "three ways a component index gets triggered" (standing
full-chapter). Matches the rigor of `Component Index — Oil & Gas Sourcebook
ch1.md` and the Control Valve Handbook chapter files: every real page in the
chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries were verified directly against the PDF, not assumed from
the table of contents: PDF page 197 is the "Chapter 12 / Codes and Standard
Overview" divider page, and PDF page 201 is the "Chapter 13 / Piping and
Installation Guidelines" divider. Chapter 12 = PDF/printed pp. 197–200
(printed 12-1 through 12-4), a 4-page chapter with zero page offset against
its own printed numbering.

This pass catalogs existence and location only — it does not crop or extract
images, so each record's `source` would carry a single locator, not a
second "already extracted" entry (matching the Control Valve Handbook chapter
files' shape, since this book has no extracted-figures crop folder yet).

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition
(D101449X012), is itself a **current** first-party Fisher/Emerson document
(held in the Source Library's Industry Handbooks holdings — same series as
the already-indexed Oil & Gas Sourcebook), so any record in this file would
be `status: current`. No archive or legacy material was consulted.

## Components

**Zero `kind: figure` components** — confirmed as before: no numbered
figure, no numbered table, no unnumbered-but-real diagram anywhere in the
chapter's 4 pages. Unlike CVH's genuinely inert reference chapters
(ch13–15), though, this chapter's all-prose text is real conceptual
content, not bare reference data — the 2026-09-17 `kind: topic` pass
(added below) found three genuine concepts worth indexing.

```yaml
id: pss-topic-boiler-piping-code-jurisdiction
kind: topic
concept-tags: [boiler proper, boiler external piping, ASME BPVC Section I, ANSI/ASME B31.1, code jurisdiction, code stamping]
status: current
teaches: >
  Power-plant control-valve code compliance turns on which side of a real
  physical boundary a valve sits on. The "boiler proper" (superheaters,
  economizers, reheaters, steam/water drums and other pressure parts
  connected directly to the boiler with no intervening valve) falls under
  the ASME Boiler and Pressure Vessel Code's (BPVC) administrative and
  technical jurisdiction — Fisher does not manufacture equipment installed
  there. "Boiler external piping" begins at a specific, code-defined
  termination point (the first circumferential weld end, the face of the
  first flange, or the first threaded joint) and can still include real
  control equipment (a steam drum level controller is the source's own
  example) — governed administratively by ASME BPVC but technically by
  ASME Section Committee B31.1, meaning design/construction rules live in
  ANSI/ASME B31.1 while code certification, data forms, stamping, and
  inspection follow ASME BPVC Section I when required. The practical
  consequence: vendors must be able to provide inspection, data reports,
  and stamping for boiler-external equipment unless a specific BPVC
  Section I waiver applies (parts already compliant with an ANSI product
  standard or manufacturer's standard, meeting separate material/welding/
  radiography/heat-treatment documentation requirements) — Fisher can then
  comply with BPVC Section I without code stamping. The remainder of
  power-plant piping (non-boiler-external) is covered by ANSI/ASME B31.1
  alone. ANSI B16.34 is the applicable design standard for valves under
  B31.1; the code prohibits ungasketed, screwed bonnets on steam service
  valves over 250 psig.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 12, pp. 12-1–12-2 (PDF pp. 197-198), 'Design standards' and 'ANSI/ASME B31.1, Power Piping Code' sections — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-pressure-rating-classes]
used-by: []
notes: >
  Read directly via pdftotext at 150dpi-equivalent extraction, cross-checked
  against the chapter's own already-confirmed PDF page range (197-200, zero
  offset from printed 12-1–12-4). No existing figure entries in this file to
  relate to (chapter has none). Genuinely distinct from anything in CVH's
  own Standards chapter (ch9, hazardous-area/ATEX classification) or CVH
  ch5's seat-leakage-classification topic — this is pressure-code
  jurisdiction, a different axis entirely.
```

```yaml
id: pss-topic-pressure-rating-classes
kind: topic
concept-tags: [ANSI B16.34, pressure-temperature rating, Standard Class, Special Class, NDE, SNT-TC-1A, BWE valves]
status: current
teaches: >
  ANSI B16.34 divides pressure-temperature ratings into four real tiers,
  not one scale with different numbers: Standard Class (the normal ANSI
  150-4500 ratings most products use, published for a variety of
  materials); Intermediate Standard Class (falls between standard ratings,
  achieved by extra body/bonnet wall thickness and stronger body-to-bonnet
  bolting — no NDE required, and only available on butt-weld-end (BWE)
  valves, letting cheaper products serve higher-duty applications);
  Special Class (typically higher than standard ratings, obtained instead
  by ultrasonic or radiographic testing of the body and bonnet castings —
  available on any BWE globe or angle valve); and Intermediate Special
  Class (requires BOTH the NDE of special class AND the extra wall
  thickness/bolt strength of intermediate class, and is only available on
  BWE valves that already carry intermediate ratings). All three
  non-standard classes carry real pricing implications. Because NDE
  (radiographic, ultrasonic, magnetic-particle, or liquid-penetrant
  examination, per ANSI B16.34 in preference to the comparable MSS
  standards for broader acceptance) gates special/intermediate-special
  ratings, the personnel performing it must be qualified per SNT-TC-1A —
  the rating-class decision and the personnel-qualification requirement
  are directly coupled, not independent purchasing choices.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 12, pp. 12-2–12-3 (PDF pp. 198-199), the four-class breakdown under 'ANSI B16.34' and the SNT-TC-1A paragraph — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-boiler-piping-code-jurisdiction, pss-topic-valve-standards-crosswalk]
used-by: []
notes: >
  Read directly, same pass as the jurisdiction topic above. Distinct from
  CVH ch5's `cvh-topic-seat-leakage-classification` (verified real before
  cross-referencing) — that entry covers ANSI/FCI 70-2's six SEAT-LEAKAGE
  classes (I-VI, a shutoff-tightness axis); this entry covers ANSI
  B16.34's PRESSURE-RATING classes (a structural/material-integrity axis)
  — genuinely different standards, different axes, not a duplicate.
```

```yaml
id: pss-topic-valve-standards-crosswalk
kind: topic
concept-tags: [ANSI B16.5, ANSI B16.10, ANSI B16.37, MSS SP-53, MSS SP-54, MSS SP-55, MSS SP-61, MSS SP-66, MSS SP-67, hydrostatic testing, face-to-face dimensions, superseded standards]
status: current
teaches: >
  The chapter positions a cluster of standards relative to ANSI B16.34
  rather than treating each as independent: ANSI B16.5 (flange/flanged-
  fitting design) was itself a valve design standard before 1973 (butt-weld
  end) and 1977 (flanged end), after which design responsibility
  transferred to B16.34 — B16.5 now mainly serves as a dimensional/rating
  reference ("mates with ANSI XXX flanges"), though older specs may still
  cite it as the design basis. MSS SP-66 was a valve design standard
  published before B16.34 existed and should generally be superseded by
  B16.34 conformance now; its "special inspections" concept for raising
  pressure-temperature ratings is replaced by B16.34's own special-class
  ratings (see `pss-topic-pressure-rating-classes`). MSS SP-67 covers
  butterfly-valve design/test performance and its own three leak classes
  (Type I: tight shutoff, no leakage allowed; Type II: low-leakage, seat
  test only if the purchaser requires it; Type III: nominal leakage, no
  seat test required) plus face-to-face dimensions for certain butterfly
  valves — the source states these leak classes have been superseded in
  most control-valve usage by ANSI/ISA (now ANSI/FCI 70-2) classes (see
  `cvh-topic-seat-leakage-classification`), and adds a real caution not
  captured there: the seat-leak test procedure itself is not adequate to
  recognize leak-rate differences across different trim styles and sizes,
  which can lead to over- or under-specifying the required leak rate —
  for control valves specifically, the source directs the reader to ISA
  S75.19 and ANSI/FCI 70-2 instead. ANSI B16.10 sets face-to-face
  dimensions for gate/plug/check/ball/control valves within named size and
  class bounds; larger or high-pressure valves vary by manufacturer.
  ANSI B16.37 governs hydrostatic testing (1.5× cold working pressure per
  B16.34) — Fisher's actual practice is a component-level hydrotest
  followed by a post-assembly aerostatic test to confirm gasket-joint
  integrity, a two-stage practice distinct from the bare code requirement.
  MSS SP-53/54/55 cover magnetic-particle, radiographic, and visual
  examination of castings respectively — B16.34 or ASTM E94-equivalent
  methods are recommended over the MSS versions for broader acceptance.
  MSS SP-61 covers pressure testing of steel valves generally but is
  explicitly NOT intended for control valves — its seat-closure tests are
  for shutoff/isolation/on-off/block valves specifically.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition (D101449X012)
    locator: "Chapter 12, pp. 12-3–12-4 (PDF pp. 199-200), from 'ANSI B16.5' through 'MSS SP-61' — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-pressure-rating-classes, cvh-topic-seat-leakage-classification]
used-by: []
notes: >
  Read directly, same pass. `cvh-topic-seat-leakage-classification`
  verified real in `Component Index — Control Valve Handbook ch5.md`
  before citing — cross-referenced rather than duplicated, since this
  chapter's MSS SP-67 discussion explicitly points at the ANSI/FCI 70-2
  system as the modern replacement without restating its own six classes.
  ASME BPVC Sections V/VIII/IX and SSPC-SP5/6/10 (blast-cleaning) were
  read and judged brief, single-paragraph, non-generalizable references
  to standards used elsewhere (NDE methods, painting prep) — not
  substantial enough to warrant their own topic entries; folded into this
  crosswalk's own scope note instead of padding three near-empty records.
```

## Open Items

- **Chapter boundary** — confirmed directly by rendering and reading both
  the p.197 "Chapter 12" divider and the p.201 "Chapter 13" divider.
  Chapter 12 = PDF pp. 197–200 exactly, zero offset from its own printed
  page numbers (12-1 through 12-4).
- **Full coverage accounting** — all 4 pages in range were rendered at
  150dpi and read directly (not just text-extracted). Zero numbered
  figures, zero numbered tables, zero unnumbered-but-real diagrams found.
  This was checked methodically, not assumed from the chapter's title —
  the same standard applied to the Control Valve Handbook's own confirmed
  zero-figure chapters.
- **Low-confidence flags** — none. Every page was read in full.
- **Duplicate-figure/citation-error findings** — none (no figures exist to
  collide or mis-cite).
- **Table-exclusion confirmation** — not applicable; no tables (numbered or
  otherwise) appear in this chapter at all.
- **Cross-reference findings** — not applicable; no components were
  catalogued from this chapter to check against the rest of the library.
- **Archive/legacy material** — none consulted, none needed.
- **`kind: topic` pass, 2026-09-17.** Three genuine concepts found in this
  chapter's all-prose text, each read directly from the real pages (not
  inferred from the chapter's title or the standard names alone):
  `pss-topic-boiler-piping-code-jurisdiction`, `pss-topic-pressure-rating-
  classes`, `pss-topic-valve-standards-crosswalk`. ASME BPVC Sections V/
  VIII/IX and the SSPC blast-cleaning standards were read and confirmed to
  be brief single-paragraph cross-references to standards applied
  elsewhere, not independently generalizable — folded into the crosswalk
  entry's own notes rather than padded into their own thin records. This
  chapter's zero-figure status stays unchanged; the topic pass adds real
  conceptual coverage a figures-only index structurally could not surface.
  Real chapter total is now 3 (0 figures + 3 topics).
