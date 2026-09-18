---
title: Component Index — Pulp & Paper Sourcebook ch13
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch13 — Recausticizing and Lime Recovery
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 13

**Chapter 13 — "Recausticizing and Lime Recovery"** (the printed
chapter-divider and section-header title reads "and," not the TOC's "&" —
real printed title used throughout this file). Standing full-chapter
cataloguing pass, one of four chapters (11-14) assigned in a topically-disjoint
parallel split of this Sourcebook (other agents covering chapters 1-3, 4-7,
8-10B, 15-18). Every real page in the chapter's confirmed range was rendered
and read directly (rigor standard), every real figure identified and visually
verified against the rendered page — not paraphrased from caption or
text-extraction alone.

Chapter boundaries were pre-confirmed by the coordinating pass via direct
divider-page rendering (PDF page 169 = "Chapter 13 / Recausticizing and Lime
Recovery" divider; PDF page 177 = the Chapter 14 divider) and re-verified
directly in this pass by rendering and reading pp. 169-176 in full: PDF p. 169
= printed p. 13-1 (chapter opening), PDF p. 175 = printed p. 13-7 (the
chapter's closing valve-selection table), PDF p. 176 = printed p. 13-8 —
confirmed **blank**. Zero page offset throughout (PDF page = printed page
number + 168). Chapter 13 = PDF pp. 169-176.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. No archive or legacy material was consulted or found relevant — both of Chapter 13's real figures are catalogued directly against this edition. |

## Components

### Chapter 13 — Recausticizing process fundamentals (printed p. 13-1)

```yaml
id: pp-topic-recausticizing-process-fundamentals
kind: topic
teaches: >
  Recausticizing and lime recovery is the final step in the Kraft recovery
  process, linking the recovery boiler back to the digester: it converts
  the inorganic cooking chemicals in green liquor (from the recovery
  boiler's dissolving tank) into white liquor for cooking wood chips, and
  separately reclaims the lime consumed in that conversion by converting
  lime mud back into usable lime. The source states plainly that proper
  control of this recovery/reclaim cycle is essential to a Kraft mill's
  economic success — the two halves of the chapter (recausticizing,
  lime recovery) are one closed-loop chemical/thermal cycle, not two
  unrelated processes sharing a chapter.
concept-tags: [recausticizing, lime recovery, kraft recovery process, green liquor, white liquor, closed-loop chemistry]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Chapter 13 opening prose, p. 13-1 (PDF p. 169)"
relatedFigures: [pp-cmp-recausticizing-lime-recovery-flow-diagram]
relatedTopics: []
used-by: []
notes: >
  Grounds Figure 13-1's diagram in the process purpose the diagram itself
  doesn't state — the figure shows the equipment and valve tags, not why
  the loop exists or what "closes" it (lime recovery feeding back into
  recausticizing's own lime consumption). Read directly from the real
  chapter-opening prose (pdftotext -layout, PDF p. 169), not paraphrased
  from the figure's own teaches field.
```

### Chapter 13 — Recausticizing chemistry (printed pp. 13-1–13-2)

```yaml
id: pp-topic-recausticizing-chemistry
kind: topic
teaches: >
  Green liquor is produced in the recovery boiler's dissolving tank by
  mixing weak wash (mostly water, itself a product of lime mud washing)
  with smelt (primarily Na2CO3 and Na2S, produced by burning black liquor
  in the recovery furnace) — it also carries dregs (unburned carbon and
  inorganic impurities) that must be removed downstream. In the slaker,
  reburned lime (CaO) and makeup lime react with water in the green
  liquor to form calcium hydroxide (Ca(OH)2); this reacts with the green
  liquor's Na2CO3 to form sodium hydroxide (NaOH, the "caustic" in white
  liquor) and precipitate calcium carbonate (CaCO3, the lime mud that
  lime recovery later reburns back to CaO). The slaker retention time is
  about 15 minutes; recausticizing efficiency improves with steam-heated
  incoming green liquor and slaker agitation. The causticizers (a series
  of two or more agitated tanks, 1.5-3 hours total retention) then
  complete the reaction the slaker's short retention time can't finish
  alone.
concept-tags: [green liquor chemistry, smelt, dregs, slaker reaction, causticizer, sodium hydroxide, calcium carbonate, lime mud formation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Dissolving Tank / Slaker / Causticizers prose, pp. 13-1–13-2 (PDF pp. 169-170)"
relatedFigures: [pp-cmp-recausticizing-lime-recovery-flow-diagram]
relatedTopics: [pp-topic-recausticizing-process-fundamentals, pp-topic-lime-kiln-reburning-process]
used-by: []
notes: >
  The real chemical reaction chain behind the "Slaker" and "Causticizers"
  labels on Figure 13-1 — the diagram names the equipment, this prose
  explains what actually happens inside each vessel and why the two-stage
  slaker-then-causticizer design exists (the slaker alone doesn't have
  enough retention time to complete the reaction). Read directly from the
  real body prose, not inferred from the figure's own teaches field.
```

### Chapter 13 — Clarifier separation principle (printed pp. 13-1, 13-3)

```yaml
id: pp-topic-clarifier-separation-principle
kind: topic
teaches: >
  Both the green liquor clarifier and the white liquor clarifier operate
  on the same real mechanism, stated explicitly in the source ("the white
  liquor clarifier is essentially the same as the green liquor clarifier
  described earlier"): gravity settling driven by a density differential
  between the liquor and the solids it carries (dregs in the green-liquor
  case, lime mud/CaCO3 in the white-liquor case). A slow-moving rake pulls
  the settled solids to a center discharge cone for concentration and
  removal, while the clarified liquor overflows to storage. This is one
  separation principle applied twice at two different points in the
  process, not two different clarifier designs.
concept-tags: [clarifier, gravity settling, density differential, dregs removal, lime mud settling, rake mechanism]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Green Liquor Clarifier (p. 13-1) and §White Liquor Clarifier and Lime Mud Washer (p. 13-3), PDF pp. 169, 171"
relatedFigures: [pp-cmp-recausticizing-lime-recovery-flow-diagram]
relatedTopics: [pp-topic-recausticizing-chemistry]
used-by: []
notes: >
  Captures a real cross-cutting mechanism the source itself calls out as
  the same thing applied twice, rather than leaving it implicit across two
  separate figure-adjacent paragraphs. Also grounds why Figure 13-2's
  filtration equipment is described as a genuine alternative to this
  mechanism, not a different function — filtration substitutes for gravity
  settling specifically because lime mud's larger particle size favors it
  in some mills (see Figure 13-2's own entry for that selection reasoning).
```

### Chapter 13 — Lime kiln reburning process (printed pp. 13-3–13-4)

```yaml
id: pp-topic-lime-kiln-reburning-process
kind: topic
teaches: >
  Lime recovery (also called lime reburning or calcining) converts the
  lime mud (CaCO3) produced by recausticizing back into lime (CaO) for
  reuse in the slaker — closing the loop this chapter's opening describes,
  and creating a real economic incentive: with good lime recovery,
  purchased lime is only needed to make up system losses. The conversion
  happens in a rotary lime kiln: a large steel tube lined with refractory
  brick, mounted on an incline, supported on rollers, and rotated slowly
  by an electric motor/gear reducer. Lime mud enters at 60-70% solids at
  the upper end; a burner (oil or gas) at the lower end evaporates
  remaining moisture and converts the lime mud to lime and CO2, while also
  causing the lime powder to agglomerate into handleable pellets. The
  lime product goes to a storage silo for slaker reuse; a scrubber
  handles the dusting/pollution problem from the exiting flue gas.
concept-tags: [lime kiln, lime reburning, calcining, rotary kiln, CaCO3 to CaO conversion, lime recovery economics]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Lime Recovery prose, pp. 13-3–13-4 (PDF pp. 171-172)"
relatedFigures: [pp-cmp-recausticizing-lime-recovery-flow-diagram]
relatedTopics: [pp-topic-recausticizing-chemistry, pp-topic-recausticizing-process-fundamentals]
used-by: []
notes: >
  The real thermal-conversion mechanism behind Figure 13-1's "rotary lime
  kiln" and "kiln scrubber" labels — the diagram shows where the kiln sits
  in the process, this prose explains how it physically works and why
  lime recovery matters economically. Read directly from the real body
  prose (PDF pp. 171-172), not paraphrased from the figure's own summary.
```

### Chapter 13 — Lime mud erosive-service valve selection (cross-cutting, printed pp. 13-1–13-4)

```yaml
id: pp-topic-lime-mud-erosive-service-selection
kind: topic
teaches: >
  A real, recurring material-selection pattern appears across nearly
  every lime-mud/green-liquor valve write-up in this chapter, not stated
  once and left implicit: lime mud and green liquor are erosive and
  scaling-prone, so the recommended construction repeats the same
  material logic each time — NPS 3-6 valves, alloy 6 (a hard-facing
  cobalt-chromium alloy) scraper seats or hard-faced seats specifically
  "due to concerns with scaling," alloy 6 bearings, and (for the most
  severe erosive duty, e.g. FV-5 Green Liquor to Slaker) VTC ceramic
  plug/seat internals on an alloy 6 hub with an oversized 17-4PH stainless
  shaft. The chapter's own design-considerations note for the lime mud
  underflow valves (FV-6/FV-8/FV-16/FV-19) states directly that "lime mud
  is extremely erosive and difficult to handle due to fine particulate
  and high solids concentration," and that the underflow valve must be
  sized so the tank's mud level never reaches the filter socks — an
  operational constraint, not just a materials choice.
concept-tags: [lime mud, erosive service, alloy 6, ceramic trim, scaling, material selection rationale]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Recurring across the chapter's per-valve write-ups, pp. 13-1–13-4 (PDF pp. 169-172); most explicit statement in the FV-6/FV-8/FV-16/FV-19 design-considerations note, p. 13-3"
relatedFigures: [pp-cmp-recausticizing-lime-recovery-flow-diagram, pp-cmp-white-liquor-lime-mud-pressure-filters]
relatedTopics: [cvh-topic-particulate-cavitation-erosion, pss-topic-alloy6-erosion-corrosion-case]
used-by: []
notes: >
  A cross-cutting pattern synthesized from repeated statements across
  many individual valve write-ups (FV-3, LV-1, FV-5, FV-6/FV-8/FV-16/FV-19,
  FV-11, FV-17), not tied to any single figure or valve tag — the pattern
  itself, not any one instance, is the transferable concept. Cross-
  referenced to CVH's own particulate/erosion topic and Power & Severe
  Service's own alloy-6 erosion-corrosion case (both confirmed real ids
  before citing) as the same general erosive-service material logic
  applied to a different process fluid.
```

### Chapter 13 — Recausticizing and Lime Recovery process flow (printed p. 13-5)

```yaml
id: pp-cmp-recausticizing-lime-recovery-flow-diagram
kind: figure
teaches: >
  The complete recausticizing and lime recovery process as one labeled flow
  diagram: the recovery-boiler dissolving tank feeding the green liquor
  clarifier and dregs precoat filter/washing loop, the slaker and
  causticizers converting green liquor to white liquor, the white liquor
  clarifier feeding the digester, the lime mud washer and rotary lime kiln
  converting lime mud (CaCO3) back to reburned lime (CaO) for reuse in the
  slaker, and the kiln scrubber — with every associated control valve tagged
  directly on the diagram (LV-1–LV-4, FV-1–FV-13). This is the chapter's
  central process schematic; the surrounding body text is organized as a
  sequence of named valve write-ups (e.g. "Valve: FV-5 Green Liquor to
  Slaker") that each locate their discussed application on this one diagram.
concept-tags: [recausticizing, lime recovery, green liquor, white liquor, slaker, causticizer, dregs, lime mud, rotary lime kiln, dissolving tank]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 13-1 'Recausticizing and Lime Recovery,' p. 13-5 (PDF p. 173), drawing C0814/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number C0814/IL printed at
  lower right. Carries an in-diagram cross-reference ("See Figure 2 For
  Pressure Filter Clarifier Substitution Diagram") pointing directly to
  `pp-cmp-white-liquor-lime-mud-pressure-filters` (Figure 13-2, this same
  file) — both figures are explicitly linked by the source itself as
  alternate/substitutable equipment configurations for the same clarifier
  step, not independent processes. Every valve tag on this diagram is also
  listed in the chapter's own unnumbered valve-selection table (p. 13-7),
  excluded per the standard rule (see Open Items). Body text cites it
  in-line as "figure 13-1" (p. 13-1), matching the informal lowercase
  in-text citation style already documented for Chapters 11-12.
```

### Chapter 13 — White Liquor and Lime Mud Pressure Filters (printed p. 13-6)

```yaml
id: pp-cmp-white-liquor-lime-mud-pressure-filters
kind: figure
teaches: >
  An alternate filtration-based configuration to the clarifier/washer path
  shown in Figure 13-1: a white liquor pressure filter (tube-sheet-mounted
  polypropylene filter socks, backflushed to the causticizer) feeding a lime
  mud mixer, which in turn feeds a lime mud pressure filter and sump tank —
  performing the same clarification and lime-mud-washing functions as the
  white liquor clarifier and lime mud washer, substituted in mills where
  larger lime mud particle size favors filtration equipment over
  gravity-settling clarifiers. Labeled with its own control valves (FV-14
  through FV-19).
concept-tags: [white liquor pressure filter, lime mud pressure filter, filtration, lime mud mixer, sump tank, recausticizing, filter substitution]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 13-2 'White Liquor and Lime Mud Pressure Filters,' p. 13-6 (PDF p. 174), drawing C0813/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number C0813/IL printed at
  lower left; printed caption reads "Figure 13- 2." (irregular internal
  spacing before the figure number — a printing/typesetting artifact, not a
  distinct figure number; treated as Figure 13-2 throughout). Explicitly
  cross-referenced from Figure 13-1's own in-diagram note ("See Figure 2 For
  Pressure Filter Clarifier Substitution Diagram") as this file's
  `pp-cmp-recausticizing-lime-recovery-flow-diagram` — see that record's own
  notes. Body text cites it in-line as "figure 13-2" (p. 13-3, in the "White
  Liquor and Lime Mud Pressure Filters" section), matching the informal
  lowercase in-text citation style already documented for Chapters 11-12.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from the
  coordinating pass's candidate range. Rendered and read PDF pp. 169-176 in
  full: p. 169 = printed 13-1 (Chapter 13 opening, "Recausticizing and Lime
  Recovery"), p. 175 = printed 13-7 (the chapter's valve-selection table), p.
  176 = printed 13-8, confirmed genuinely blank (rendered and visually
  inspected). PDF page 177 confirmed as the Chapter 14 divider ("Bleaching and
  Brightening"). Zero page offset (PDF = printed + 168) throughout.
- **Naming note:** the assignment's candidate title used an ampersand
  ("Recausticizing & Lime Recovery," matching the TOC); the real printed
  chapter-divider and section-header title reads "Recausticizing **and** Lime
  Recovery" — confirmed by direct rendering of PDF p. 169. Used the real
  printed form throughout this file, consistent with the standing "confirm
  the real printed title, don't trust the TOC" convention already established
  in the Control Valve Handbook ch5 pass.
- **Full chapter coverage.** Both real figures in range (Figure 13-1, Figure
  13-2) were located and every one of the 8 real content pages (13-1 through
  13-8, including the confirmed-blank 13-8) was rendered and read directly —
  no gaps in the numeric sequence (the chapter contains exactly two figures,
  both confirmed, none skipped). Body text cites only "figure 13-1" and
  "figure 13-2" throughout — no reference to a third, higher-numbered figure
  that would imply a missed one. The bulk of this chapter's content (pp.
  13-1–13-4) is prose organized as named per-valve application write-ups
  ("Valve: FV-5 Green Liquor to Slaker," etc.) with process-condition bullet
  lists — confirmed as genuine prose, not tables or uncaptioned diagrams, on
  direct rendering.
- **No low-confidence flags**, with one minor typesetting note: Figure 13-2's
  printed caption carries irregular spacing ("Figure 13- 2.") — confirmed by
  direct visual inspection as a print-layout artifact, not a real distinct
  figure number or a citation error, and not worth flagging as a duplicate or
  error under those rules.
- **No duplicate printed figure numbers or source-citation errors found** in
  this chapter. Both figure numbers appear exactly once each, and body-text
  citations match their captioned targets.
- **Table exclusion confirmed.** The chapter's closing content (p. 13-7) is an
  unnumbered valve-tag reference table ("PROCESS / Recausticizing and Lime
  Recovery" — Valve Tag #, Application Description, Control Function, and
  Fisher product-line columns for V150/V300, V500, Control-Disk) cross-
  referencing valve tags already shown on Figure 13-1 to recommended Fisher
  product families. Excluded per the standing valve-application/valve-tag
  reference-table rule — no "Figure" or "Table" caption/number appears
  anywhere on the page.
- **Cross-reference findings.** Checked the whole-library collision sweep
  (below) and grepped `20 - Source Library/Component Index — Oil & Gas
  Sourcebook ch*.md`, `... Control Valve Handbook ch*.md`, and every
  standalone product-manual index for product names appearing in this
  chapter's valve-selection table (V150/V300, V500, Control-Disk) and body
  text (FIELDVUE DVC6200). All matches found are generic product mentions in
  other, unrelated chapters/manuals' own valve-selection tables, product
  cutaways, or FIELDVUE-family positioner records — none reference
  recausticizing, lime recovery, green/white liquor, or lime kiln process
  content. Separately grepped the whole library for "recausticiz," "lime
  mud," "lime kiln," "green liquor," "white liquor," "slaker," "causticiz,"
  and related terms: no genuine hits outside this chapter's own file. **No
  real overlap found** — confirmed by reading matched context, not assumed
  from the keyword hit alone.
- **Archive/legacy material:** none consulted, none needed — the 2011 Fisher
  Sourcebook is the sole and sufficient source for both of this chapter's
  components.
- **`kind: topic` pass, added 2026-09-17.** Read the chapter's real body
  prose (pp. 13-1–13-4, PDF pp. 169-172) in full for genuine conceptual
  content beyond the two figures' own diagrams. Found five real, distinct
  concepts: the recausticizing/lime-recovery closed-loop purpose, the real
  chemical reaction chain (green liquor + lime → white liquor + lime mud),
  the shared gravity-settling clarifier mechanism (explicitly stated by the
  source to be the same for both green- and white-liquor clarifiers), the
  rotary lime kiln's real thermal-conversion mechanism, and a cross-cutting
  erosive-service material-selection pattern repeated across nearly every
  lime-mud/green-liquor valve write-up. Chapter total is now 7 components
  (2 figures + 5 topics). No section confirmed reference-data-only beyond
  the already-excluded valve-selection table (p. 13-7).
