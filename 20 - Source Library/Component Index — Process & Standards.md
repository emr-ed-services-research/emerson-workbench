---
title: Component Index — Process & Standards
type: reference
tags:
  - source-library
  - pipeline
  - component-index
updated: 2026-09-18
---

# Component Index — Process & Standards

The standing procedure for indexing a source document (or the rest of one)
into the Component Index — written so a directive like "index [source]" or
"finish indexing [source]'s remaining chapters" can point at this doc
instead of re-deriving scope from scratch each time. Distilled from real
practice across the Oil & Gas Sourcebook (13 chapters), the Control Valve
Handbook (all 15 chapters), and the 14101/bench-set-657 deck- and
topic-driven passes — every rule below has a real precedent, cited inline.

`Source Library.md` stays the lightweight overview and holdings list; this
doc is where the actual checklist lives, the same relationship
`Course Porting Pipeline.md` has to `Roadmap.md`.

## Before starting: which of the three triggers is this?

See `Source Library.md`'s "Three ways a component index gets triggered" for
the full definitions. It matters here because it changes what "done" means
and what the scope-confirmation step looks like:

1. **Deck-driven** — scope is an existing course's existing slides; the
   index is built by cross-referencing what those slides already teach
   against the source, for that chapter only. "Done" means matching the
   deck, not exhausting the source.
2. **Topic-driven** — scope is a named topic with no existing deck; read
   only the source sections that topic touches. "Done" means covering the
   topic, not the whole document.
3. **Standing full-chapter** — scope is a whole chapter (or several),
   catalogued end to end, ahead of any single course's specific citations.
   "Done" means every real figure in the chapter is accounted for.
   **This one needs a real, confirmed reason before it starts** — a
   specific, real course or decision that needs broad coverage soon. Never
   "index the whole document just in case." Chapters 5–15 of the Control
   Valve Handbook are the one on-record exception to scoping this to a
   single course's immediate need — a deliberate completeness decision,
   named as an exception, not a new default. See `Source Library.md` for
   how that was reasoned through.

## File convention

One file per (source document, chapter):
`20 - Source Library/Component Index — <Document> ch<N>.md`. A deck- or
topic-driven pass that doesn't cleanly map to one chapter uses a descriptive
suffix instead (`Component Index — 14101 ch1-ch2.md`,
`Component Index — bench-set-657.md`) — still one file per real scope unit,
never combined chapters or split topics across files.

**A document with no chapter structure at all** (most Technical
Publications instruction manuals — a flat house structure of named
sections, not numbered chapters) uses the whole document as the file's
scope unit: `Component Index — <Manual Name>.md`, no `ch<N>` suffix. Real
precedent: `Component Index — Fisher 667 Diaphragm Actuator.md`, not
`... ch1.md` — there is no chapter to be chapter 1 of.

## File structure

Frontmatter: `title`, `type: reference`, `tags: [source-library, pipeline,
component-index]`, `source`, `chapter`, `updated`.

Body, in order:

1. An intro paragraph naming the pass type (which of the three triggers),
   the rigor standard (visual verification — see below), and the real
   chapter/scope boundary, confirmed directly (see below).
2. `## Precedence` — a table: source, edition/id, precedence bucket,
   notes. See "Precedence bucket" below for the closed vocabulary.
3. `## Components` — grouped under headers matching the source's own real
   structure (see "Grouping headers" below), one YAML block per component
   (schema below).
4. `## Open Items` — closing coverage-accounting section (contents
   specified below).

## Grouping headers — numbered, named, or hybrid

Use whichever form matches what the source document actually has — never
force a numbered-chapter document's convention onto a flat one, or vice
versa:

- **Numbered chapters** (the Control Valve Handbook, the Oil & Gas
  Sourcebook — see "hybrid" below for the Technical Publications manuals
  that also use real numbered sections): `### Section X.Y — Title (printed
  pp. A–B)`, matching the source's own section numbers.
- **Named sections, no chapter numbers** (most Technical Publications
  instruction manuals — the house structure is Introduction/Scope,
  Description, Specifications, Installation, Maintenance, Parts, with no
  numbering at all): `### <Section Name> (printed pp. A–B)` — the section's
  own real printed name, no invented number.
- **Hybrid: numbered sections, flat figure numbering.** Some Technical
  Publications manuals have a real numbered chapter/section structure in
  their own table of contents (`1.1`, `2.3`, `4.1`, ...) — closer to the
  Handbook's shape than to most of their own instruction-manual siblings —
  but their *figures* are still numbered flatly (`Figure 1, Figure 2,
  ...`), never chapter-scoped like the Handbook's `Figure N.M`. Confirmed
  so far on the two FIELDVUE DVC controllers (DVC6200, DVC7K-H) and the
  Fisher V500 Rotary Globe manual — **this is a real, recurring document
  shape within Technical Publications, not a one-off unique to the DVC
  pair; check every new manual's own real table of contents for numbered
  sections before defaulting to the named-sections form.** Use the
  numbered-chapter grouping header form (`### Section X.Y — Title`) for
  these, since that's what the document's own structure actually offers
  for grouping, but do not expect or force a figure's own number to carry a
  chapter prefix — it won't have one, and inventing one would misrepresent
  what's actually printed.

## Record schema

```yaml
id: <source-prefix>-cmp-<descriptive-slug>
teaches: >
  What this component actually teaches — written for someone deciding
  whether to cite it, not a caption restatement.
concept-tags: [tag, tag, ...]
status: current                       # see closed vocabulary below
source:
  - doc: <full document citation>
    locator: "Figure N.M 'Caption,' p. X — numbered-callout detail if any"
delivery: existing figure (crop) — per Style Guide §5.8 default   # or: analytical graph — falls under Style Guide §5 / not yet determined
used-by: []                           # see "used-by" below
notes: >
  Cross-references, source errata, confidence caveats, disambiguation.
mediaStatus: unreviewed                # required on every NEW record — see below
```

**`id` — descriptive slugs only, never a numeric figure-number id.**
`<source-prefix>-cmp-<what-it-shows>`, e.g. `cvh-cmp-deadband-graph`,
`ogas-cmp-amine-treatment-unit`. A numeric id like `cvh-cmp-4.14` was tried
once (Control Valve Handbook ch4) and had to be fully reverted: the source's
own printed figure numbering turned out to disagree with the id (a genuine
"14.N vs 4.N" printed-caption situation), and the numeric id then actively
misled rather than just failing to help. A descriptive slug survives a
figure-number correction with zero rename; that's the whole reason for the
rule, not a style preference.

**`status` — exactly four values, nothing else.** `current` /
`archive-corroborated` / `archive-only` / `legacy` — the precedence-bucket
vocabulary `Source Library.md` defines. Ch4 once used `status: verified`
uniformly across every record for something that was actually the
precedence bucket, not a real second concept — confirmed by checking
whether it tracked the chapter's own low-confidence caveats (it didn't) before
correcting it. If a real pass turns up a genuine second axis (e.g. an actual
confidence/verification flag distinct from precedence), that's a schema
change — propose a new field, don't fold it into `status`.

**`used-by` — a list of `{course, slide}` objects, `course` from the
Course Catalog.** Not a bare filename array (that was the pre-2026-09-18
convention; abandoned because a bare filename is ambiguous the moment two
different courses could plausibly have a same-numbered slide). `course`
must be a real id from `Course Catalog.md` — if the citing course isn't a
catalog member (a dev/dry-run course, or a course that hasn't reached
production-track), it does **not** go in `used-by`; record the real usage
in the component's own `notes` instead, naming the course and slide/file
directly in prose. Never invent a catalog entry just to make a real citation
fit the field. `[]` when nothing cites the component yet.

**`mediaStatus` — required on every newly-catalogued component.**
`unreviewed` / `as-is-scan` / `needs-svg-redraw` / `needs-real-photo`. This
answers a different question than `delivery`: `delivery` is the mechanical
default treatment decided during cataloguing; `mediaStatus` is Franz's
team's editorial call on whether a scan is good enough as-is or deserves
investment (an SVG redraw via the `diagram-cleanup.js` pipeline, or a real
photo). Don't merge them — they're genuinely different axes that happen to
sit on the same record, the same reasoning that kept `DOMAIN_VOICE` and
`DOMAIN_TIER_DEPTH` as two constants rather than one.
**Existing records (everything catalogued before 2026-09-18 — including all
15 Control Valve Handbook chapters and every other index in the library) do
NOT get the field added retroactively.** A record with no `mediaStatus` key
at all is, by this convention, implicitly `unreviewed` — treat "missing" and
"`mediaStatus: unreviewed`" as the same state when querying. This is a
deliberate choice, not an oversight: mechanically appending the field to
every existing record would itself be the "wholesale pass ahead of real
demand" the Component Index's own founding rule exists to avoid (see the
three triggers above) — the same logic applies to media-quality triage as
to content indexing itself. `mediaStatus` gets decided the
first time a real course actually cites the component for production —
that's already the moment someone is looking at the figure with production
intent, so the judgment is marginal, not new work. **When a figure is
catalogued under both a source-anchored id and a competency-anchored
cross-reference to the same real image** (see "Cross-reference before
minting" below), `mediaStatus` lives only on the source-anchored record —
never duplicated onto the cross-reference, for the same reason `used-by`
duplication caused real drift once (see "Known open gap" below).

## The rigor standard: render and look, don't trust extraction alone

Use the locally installed Poppler
(`C:\Users\E1552882\poppler\poppler-26.02.0\Library\bin`):
`pdftoppm -png -r 150 -f <page> -l <page> "<pdf>" <prefix>` to render a page,
then view the image directly. `pdftotext -f <page> -l <page> -layout "<pdf>"
-` is fine for a first pass to locate candidate figures, but every figure's
identity, caption, and page must be confirmed against the actual rendered
image before it's catalogued. This is not caution for its own sake: Control
Valve Handbook ch4's index concluded from extracted text alone that Figures
14.14–14.23's captions were a `pdftotext` artifact and "corrected" them back
to "4.N" — wrong, confirmed only when a later pass rendered the real pages
and read them directly. The source book genuinely prints "14.N." Text
extraction locates; only the rendered page confirms.

## Chapter/scope boundaries: confirm directly, never trust a stated range

A table of contents, another document's own prior notes, or a candidate
range handed down from a coordinating pass are all starting points, never
facts. Confirm every chapter-divider page by rendering and reading it
directly. Real precedent for why this matters: the Control Valve
Handbook's real chapter boundaries mostly matched its own TOC exactly
(zero page offset throughout), but a candidate range for Chapter 15 turned
out to be 15 pages too long — the book's real back-matter Index started
earlier than the given end page — and two chapters (6, 7) had blank
trailing pages between their real content and the next chapter's divider
that a TOC-only read would not have surfaced.

## Cross-reference before minting any new id

Before creating a new id for any figure, check the **whole** Source
Library — not just the current chapter or document — for an existing
record of the same source figure: other whole-chapter indexes for the same
document, any deck- or topic-driven indexes (14101's, bench-set-657's), and
any other document's indexes if there's real reason to suspect overlap. If
found, cross-reference it in the new record's `notes` (name the other file
and id directly) rather than duplicating. If the existing record is
competency-anchored (course-specific) and this pass is building the
source-anchored (library-wide) entry for the same figure — or vice versa —
both ids can legitimately coexist for the same real figure; note the
relationship explicitly in both records rather than treating either as
redundant.

## Edge cases, each with a real precedent to match

- **Duplicate printed figure numbers** (two real, distinct figures sharing
  one printed caption/number) — catalogue both under distinct descriptive
  ids, flag the duplication in each record's `notes`, never merge. Real
  precedent: Control Valve Handbook ch3's two figures both captioned
  "Figure 3.24" (confirmed on two different printed pages); ch4's two
  figures both captioned "Pneumatic Controller Schematic" (confirmed as
  genuinely different diagrams).
- **Source citation errors** (the source's own body text cites the wrong
  figure number for something) — catalogue the real figures under their
  real captions, flag the citation error in `notes`, never silently correct
  the source's own text. Real precedent: ch3's §3.8.4 citing "(Figure 3.44)"
  for content that's actually Figure 3.50.
- **Unnumbered-but-real diagrams** (genuine teaching content, no printed
  figure number anywhere on the page) — catalogue it. The figures-only rule
  exists to exclude tables, not to exclude real diagrams that happen to
  lack a number. Use a synthetic locator: `"Unnumbered diagram, p. N —
  <description>"` in place of a figure number. Real precedent: Control
  Valve Handbook ch5's p.100 "Valve Selection Process" 6-step flowchart —
  decided 2026-09-18, and this is the standing convention from here on, not
  a one-off exception for that page.
- **Tables vs. figures** — a source-numbered "Figure N.M" is catalogued
  regardless of whether its content is pictorial or tabular; a genuinely
  separately-numbered "Table N.M" is excluded, no matter how many exist.
  Real precedent: ch3's Figures 3.26–3.29 (table-shaped but figure-numbered,
  catalogued) and ch10's Figures 10.40–10.53 (full-page ANSI dimension
  tables, still figure-numbered, still catalogued).
- **Dimensional-envelope and reference drawings** — a numbered figure whose
  content is a mounting-dimension diagram, center-of-gravity drawing, or
  similar physical-reference illustration (not a construction/parts
  cutaway) is catalogued the same as any other figure, confirmed
  2026-09-20 on the Fisher 1051/1052 manual's Figures 4–9. This rule was
  written to separate figures from tables, not to separate "shows how it's
  built" from "shows its physical footprint" — a dimensional drawing is
  still a real, numbered figure with genuine reference value (checking
  install clearance, for example), not a data table. Standing convention
  for any manual with this kind of content, not a one-off for 1051/1052.
- **Near-zero or zero-figure chapters** — confirm methodically (a full-text
  sweep for `Figure N.`/`Table N.` across every page, plus rendering and
  reading a spread of representative pages), and document explicitly that
  the near-zero result was *checked*, not *assumed* or skipped because the
  chapter's title suggested it wouldn't have figures. Real precedent:
  Control Valve Handbook chapters 13–15 ("Engineering Data," "Pipe Data,"
  "Conversions and Equivalents") — all confirmed to genuinely contain zero
  numbered figures.
- **Schema drift between chapters of the same document** — don't assume an
  earlier chapter's index followed the current rules; check `status` values
  and `id` format against this doc's vocabulary as part of the whole-library
  sweep (below), not only when something looks obviously wrong. Real
  precedent: ch4 drifted on both axes at once (`status: verified`, numeric
  ids) for an entire chapter before it was caught.

## The whole-library collision sweep — mandatory, before AND after

Not an instinct to apply when something feels risky — a required step,
every time, on both ends of a pass:

```
grep -h "^id: " "20 - Source Library"/Component\ Index*.md | sort | uniq -d
```

**Before minting new ids**, run it to know what already exists.
**After any pass completes**, run it again to confirm nothing collided.
This caught a real, two-year-old bug this way: `cvh-cmp-three-way-globe-valve`
had named two different real figures (Control Valve Handbook ch1's Figure
1.8 and ch3's Figure 3.6) since 2026-09-11, load-bearing in real shipped
Control Valve Basics slides the entire time, and went unnoticed until a
2026-09-17 pass's own collision sweep surfaced it. It would not have been
caught by a sweep scoped to "the chapters I'm touching right now" — the
collision was between two *already-finished* chapters, neither of which the
triggering pass was even working on.

## Parallelizing a large multi-chapter job

Safe to split a job (e.g. "index chapters 5–15") into several passes running
at once, **only when the chapters are topically disjoint** — different
subject matter with no real chance of describing the same source figure.
That was the real condition that made a four-way parallel split safe for
the Control Valve Handbook's chapters 5–15 (sizing, special/severe service,
steam conditioning, isolation valves, sustainability, safety systems,
reference tables — genuinely different territory chapter to chapter).
**The whole-library collision sweep after all parallel passes finish is not
optional** — it's the only thing that catches a collision between two
passes that couldn't see each other's brand-new ids while running. If two
chapters plausibly overlap in subject matter, don't parallelize them
against each other; run them sequentially, or have one pass do both.

## Closing every pass: the coverage tracker

The last step of any ingestion pass — new source, remaining chapters, or a
schema-drift fix — is updating the coverage table in `Source Library.md`
(source, status, component count, trigger-type, last-touched). This is a
checked step, not a separate task someone remembers to do later. See
`Source Library.md`'s own table for the current state of every source.

## `## Open Items` — what the closing section must cover

- Chapter/scope boundary, confirmed directly (cite the actual pages read).
- Full coverage accounting: every real figure number in range, accounted
  for — explicitly state the count and confirm no gaps, or explain any gap.
- Any low-confidence flags, named honestly (a caption or heading not fully
  confirmed — say so, don't silently guess).
- Duplicate-figure-number and source-citation-error findings, if any.
- Table-exclusion confirmation (what was excluded and why).
- Cross-reference findings — what was checked against the rest of the
  library, and what (if anything) overlapped.
- Archive/legacy material note (almost always "none consulted, none
  needed" for a first-party current document).

## Known open gap — not resolved by this doc

`used-by`'s `{course, slide}` shape (see schema above) only has one real
member to reference right now (`CVB`, from `Course Catalog.md`). A course
that's cited real components but isn't a catalog member (the CVE1 family,
as of 2026-09-18) has no clean way to appear in `used-by` itself — its
usage is recorded in the cited component's own `notes` instead. This is a
deliberate, named gap, not an oversight: extending the catalog or `used-by`
to cover non-production courses wasn't asked for and would defeat the
catalog's own purpose (real, production-track courses only). If a second
course reaches production-track, adding it to `Course Catalog.md` is enough
to let `used-by` reference it the same way `CVB` already works — no schema
change needed at that point.
