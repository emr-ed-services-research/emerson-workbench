---
title: Component Index — Pulp & Paper Sourcebook ch5
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch5 — Gas Sizing
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 5

**Chapter 5 — printed divider reads "Gas Sizing," not the table of contents'
"Gas Valve Sizing"** (confirmed by direct rendering of the chapter-divider
page — the real printed title is used throughout this file, consistent with
the standing "confirm the real printed title, don't trust the TOC"
convention). Standing full-chapter cataloguing pass, continuing the
whole-book completion pass begun with Chapter 1.

**This is a genuine zero-figure chapter** — confirmed methodically, not
assumed. Every one of the chapter's 8 pages was rendered and read directly;
none contains a numbered figure, an unnumbered diagram, or any pictorial
content at all. The chapter is entirely equations, a worked sample problem,
and four numbered tables (excluded per the standing tables-vs-figures rule).

Chapter boundaries confirmed directly by rendering: PDF page 73 = printed p.
5-1 (Chapter 5 divider, "Gas Sizing"), PDF page 80 = printed p. 5-8 (Table
5-4, chapter's last content page, no trailing blank). PDF page 81 = Chapter
6 divider ("Control Valve Noise"). Zero page offset throughout (PDF page =
printed page number + 72). Chapter 5 = PDF pp. 73-80.

Record shape (for reference, though no records apply): `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document. No components exist in this chapter to catalogue — see Open Items. |

## Components

None — zero figures (original pass) and zero new `kind: topic` entries
(2026-09-17 topic-indexing pass). See Open Items for the methodical
confirmation of both.

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 73-80 in full: p. 73 = printed
  5-1 (Chapter 5 opening, "Gas Sizing"), p. 80 = printed 5-8 (Table 5-4,
  chapter's genuine last content page — no trailing blank). PDF page 81
  confirmed as the Chapter 6 divider ("Control Valve Noise"). Zero page
  offset (PDF = printed + 72) throughout.
- **Naming note:** the table of contents lists this chapter as "Gas Valve
  Sizing"; the real printed chapter-divider title reads "Gas Sizing"
  (confirmed by direct rendering of PDF p. 73) — used throughout this file.
- **Zero-figure chapter, confirmed methodically per the standing edge-case
  rule** (not assumed from the chapter's equation-heavy title or a sparse
  text-extraction hit): a full-text sweep for "Figure 5-" across every page
  found zero matches, and every one of the 8 pages was individually
  rendered and read at 150 dpi. The chapter is entirely: gas/vapor sizing
  equations (a direct parallel structure to Chapter 3's liquid sizing
  equations, using N7/N8/N9 constants and the expansion factor Y in place of
  Chapter 3's liquid-specific F_F/K_p), a step-by-step ED-valve worked
  sample problem (steam service, ANSI Class 300, linear cage, 6-inch line
  with a 4-inch valve via concentric reducers), and four numbered tables.
  No diagram, chart, or photograph appears anywhere in the chapter.
- **No low-confidence flags.**
- **No duplicate printed figure numbers or source-citation errors found**
  (there are no figures to have either problem).
- **Table exclusion confirmed.** Table 5-1 ("Abbreviations and
  Terminology," p. 5-5), Table 5-2 ("Equation Constants," p. 5-6), Table 5-3
  ("Flow Coefficient Table — Gas or Liquid Flow, Modified Equal Percentage
  Characteristic," p. 5-7), and Table 5-4 ("Representative Sizing
  Coefficients for ED Single-Ported Globe Style Valve Bodies," p. 5-8) are
  all genuinely numbered with printed "Table" captions and are correctly
  excluded per the standing tables-vs-figures rule.
- **Cross-reference findings:** not applicable — there are no components to
  cross-reference. (For context: this chapter's structure directly mirrors
  Chapter 3's liquid-sizing chapter, which itself had one confirmed
  cross-reference to Oil & Gas ch3 material — see that chapter's own Open
  Items. Chapter 5 has no figures to check against any other book.)
- **Archive/legacy material:** none consulted, none needed.
- **2026-09-17 topic-indexing pass — zero new entries, confirmed duplicate
  content, not a gap.** Read the full chapter directly (PDF pp. 73-80,
  `pdftotext -layout`) and compared it against Power & Severe Service
  Sourcebook's already-indexed Chapter 4 (`pss-topic-gas-steam-sizing-methodology`,
  `pss-topic-choked-flow-expansion-factor`, `pss-topic-xtp-piping-geometry-correction`,
  all verified real in `Component Index — Power & Severe Service Sourcebook
  ch4.md`). This chapter's six-step ISA procedure, N-constant table,
  Fp/Y/xTP derivations, and its one worked sample problem are the same
  Fisher-authored content — not merely "the same method with different
  real numbers" (the usual don't-merge-across-documents case): this
  chapter's worked example uses the **identical numbers** as PSS ch4's own
  second sample problem (steam, w = 125,000 lb/h, P1 = 500 psig, T1 =
  500°F, 6-inch line, 4-inch ANSI Class 300 Design ED valve with linear
  cage, rated Cv = 236, SK = 0.463, Fp = 0.95, xTP = 0.67-0.688, Y = 0.73)
  — a byte-for-byte reused worked problem, confirmed by direct comparison
  of both chapters' real text, not assumed from section-title similarity.
  This chapter is effectively a subset of PSS ch4 (it omits PSS ch4's
  additional natural-gas/ball-valve example). No new `pp-topic-*` entry
  authored — would restate rather than add value, same discipline already
  applied when Oil & Gas ch5 and Power & Severe Service ch5/ch14 found
  their own content duplicate elsewhere. Cross-reference only: any future
  course citing this chapter's sizing methodology should cite
  `pss-topic-gas-steam-sizing-methodology` (or CVH's own
  `cvh-topic-compressible-sizing-methodology`) directly rather than expect
  a `pp-topic-*` id to exist for it.
