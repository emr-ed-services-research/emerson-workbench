---
title: Component Index — Pulp & Paper Sourcebook ch11
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch11 — Black Liquor Evaporator & Concentrator
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 11

**Chapter 11 — "Black Liquor Evaporator & Concentrator."** Standing full-chapter
cataloguing pass, one of four chapters (11-14) assigned in a topically-disjoint
parallel split of this Sourcebook (other agents covering chapters 1-3, 4-7,
8-10B, 15-18). Every real page in the chapter's confirmed range was rendered
and read directly (rigor standard), every real figure identified and visually
verified against the rendered page — not paraphrased from caption or
text-extraction alone.

Chapter boundaries were pre-confirmed by the coordinating pass via direct
divider-page rendering (PDF page 155 = "Chapter 11 / Black Liquor Evaporator &
Concentrator" divider; PDF page 161 = the Chapter 12 divider) and re-verified
directly in this pass by rendering and reading pp. 155-160 in full: PDF p. 155
= printed p. 11-1 (chapter opening), PDF p. 160 = printed p. 11-6 (chapter's
last content page, ending with the valve-selection table). Zero page offset
throughout (PDF page = printed page number + 144). Chapter 11 = PDF pp.
155-160.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. No archive or legacy material was consulted or found relevant — both of Chapter 11's real figures are catalogued directly against this edition. |

## Components

### Chapter 11 — Multiple-Effect Evaporator (printed pp. 11-1–11-3)

```yaml
id: pp-cmp-multi-effect-evaporator-ltv
kind: figure
teaches: >
  The six-effect, rising-film, long-tube-vertical (LTV) multiple-effect
  evaporator train that concentrates weak black liquor (12-15% solids)
  progressively through six effects to heavy/strong black liquor (50-60%
  solids), with every associated control valve (liquor and condensate levels
  LV-1 through LV-19, pressures PV-1 through PV-6, flows FV-1 through FV-9)
  labeled directly on the flow diagram — the chapter's central process
  schematic, tying the LTV evaporator theory the body text builds (effect
  numbering, counter-current liquor/steam flow, pressure staging from 30-40
  psig in the first effect to 20-25 in. Hg vacuum in the sixth) to actual
  control-valve placement and auxiliary equipment (soap skimming, flash
  tanks, condenser/NCG removal).
concept-tags: [black liquor evaporator, multiple-effect evaporator, rising film, long tube vertical, LTV, six effect, counter-current flow, evaporator train, soap skimming, flash tank, NCG removal]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 11-1 'Multiple-Effect Evaporator Six Effect / Rising Film / LTV,' p. 11-2 (PDF p. 156)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number E0894 printed at upper
  left. Every valve tag on this diagram (LV-1–LV-19, PV-1–PV-6, FV-1–FV-9) is
  also listed with control-function and Fisher-product recommendations in the
  chapter's closing unnumbered valve-selection table (p. 11-6) — that table is
  correctly excluded here as a table, not a figure (see Open Items). Body text
  cites it in-line as lowercase "figure 11-1" (both on p. 11-1 and again on p.
  11-2 for evaporator-type discussion), differing only in case from the
  printed caption's "Figure 11−1." — not a citation error, just informal
  in-text style throughout this Sourcebook.
```

```yaml
id: pp-cmp-falling-film-concentrator
kind: figure
teaches: >
  A typical falling-film concentrator taking 50-60% solids black liquor from
  the evaporator train and further concentrating it to 65-80% solids, with
  its own labeled control valves (LV-17, LV-18, LV-19, FV-8, FV-9, PV-4,
  PV-5, PV-6) — the concentrator-stage counterpart to Figure 11-1's
  evaporator train, illustrating why concentrators (not evaporators) handle
  the highest-solids, most scale-prone portion of black liquor processing.
concept-tags: [black liquor concentrator, falling film concentrator, concentrator, scale build-up, high solids concentration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 11-2 'Falling Film Concentrator,' p. 11-3 (PDF p. 158)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing number E0894 (same drawing-number stamp as Figure 11-1, adjacent in
  the same document set) printed at lower left. Includes an in-diagram note:
  "Dual concentrator bodies may be used which allows washing or cleaning of
  one body while the other body concentrates liquor. The valves are the same
  for each body." Body text cites it in-line as lowercase "figure 11-2" (p.
  11-3 and again p. 11-4), matching the same caption-vs-body-text case
  variance already noted for Figure 11-1.
```

### Topic entries — conceptual content beyond the two figures' own captions

```yaml
id: pp-topic-black-liquor-recovery-cycle-role
kind: topic
teaches: >
  The evaporator/concentrator system's role in the kraft chemical-recovery
  cycle: it is the bridge between the pulp mill and the powerhouse, the
  first step in reclaiming spent cooking chemicals. Weak black liquor
  arrives from the pulp washers or continuous digester; the system removes
  a large portion of its water content so the concentrated liquor can be
  combusted in the recovery boiler safely and efficiently — the water
  removal is not incidental drying, it is a precondition for safe
  combustion downstream.
concept-tags: [black liquor, recovery cycle, pulp washers, digester, recovery boiler, spent cooking chemicals]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 11 opening prose, p. 11-1 (PDF p. 155) — before any figure reference"
relatedFigures: [pp-cmp-multi-effect-evaporator-ltv]
relatedTopics: []
used-by: []
notes: >
  This is the chapter's own opening framing sentence, stated before Figure
  11-1 is introduced — not restated in either figure's own `teaches` field,
  which describes the diagrammed hardware, not the process's place in the
  larger recovery cycle.
```

```yaml
id: pp-topic-multiple-effect-evaporator-mechanism
kind: topic
teaches: >
  Why a multiple-effect evaporator train achieves steam economy: connecting
  evaporator bodies in series so the vapor generated by one effect becomes
  the steam supply for the next lets the train remove 4-6 lb of water per
  lb of motive steam actually consumed, rather than 1 lb per lb in a
  single-stage evaporator. Effects are numbered in the direction of steam
  flow; weak black liquor is fed in at the last effect and moves in
  counter-current flow against the steam, increasing in solids and boiling
  temperature as it progresses toward the first effect. Boiling requires
  the liquor-side pressure to stay below the steam-side pressure in every
  effect, which is why pressure must step down effect to effect — from
  30-40 psig in the first effect to a 20-25 in. Hg vacuum in the sixth,
  maintained by piping the sixth effect's vapor to a condenser and pulling
  non-condensible gases with an ejector or vacuum pump. Six effects
  (sextuple-effect) is the industry-common count; more effects trade
  additional steam economy against capital cost.
concept-tags: [multiple-effect evaporator, counter-current flow, steam economy, effect numbering, pressure staging, vacuum]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 11 body prose, pp. 11-1–11-2 (PDF pp. 155-156), preceding and surrounding Figure 11-1"
relatedFigures: [pp-cmp-multi-effect-evaporator-ltv]
relatedTopics: []
used-by: []
notes: >
  Figure 11-1's own `teaches` field already names effect numbering,
  counter-current flow, and the pressure range as things the diagram shows
  — this entry supplies the mechanism/reasoning behind them (why series
  connection saves steam, why pressure must decrease), which the figure
  caption states as fact without explaining.
```

```yaml
id: pp-topic-evaporator-design-type-comparison
kind: topic
teaches: >
  Three evaporator body designs, compared on mechanism and tradeoff: (1)
  Rising-film / long-tube-vertical (LTV) — liquor enters below the lower
  tube sheet, rises as a thin film inside the tubes/plates, overflows the
  upper tube sheet; the largest installed base and the prevalent design
  until the late 1970s; high evaporation capacity at low cost, but
  sensitive to scaling and plugging above 50% solids. (2) Falling-film —
  the geometric inverse (vapor dome at the bottom, tube bundle extending
  upward), liquor fed in at the top and falling as a thin film with gravity;
  because flow direction matches gravity, heat-transfer coefficients are
  higher, allowing lower temperature differentials, higher achievable
  solids concentration, and less scaling than LTV — now the more common
  type since the early 1980s, at the cost of higher pumping expense from
  multiple-pass forced circulation. (3) Emerging alternatives: combining
  falling-film effects (first 2-3 effects, lower scaling potential) with
  rising-film effects (last 3-4 effects, more fouling resistance) in one
  train; and mechanical vapor recompression (MVR) — a single evaporator
  body plus a compressor and heat exchangers that reuses vapor by raising
  its temperature/pressure, used mainly where steam supply is inadequate
  and electricity is economical.
concept-tags: [rising film, falling film, long tube vertical, LTV, mechanical vapor recompression, MVR, scaling, heat transfer coefficient]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 11, 'Evaporator Types' section, pp. 11-2–11-3 (PDF pp. 156-157)"
relatedFigures: [pp-cmp-multi-effect-evaporator-ltv]
relatedTopics: []
used-by: []
notes: >
  Figure 11-1 depicts the LTV rising-film type specifically; this entry is
  the comparative reasoning across all three design families the body text
  actually discusses, which no single figure shows.
```

```yaml
id: pp-topic-evaporator-auxiliary-equipment-function
kind: topic
teaches: >
  The mechanism and purpose behind each piece of evaporator/concentrator
  auxiliary equipment, beyond the bare fact of its existence: Soap
  skimming — tall-oil soap (fatty/resin acids) will not stay dissolved
  past 25-30% solids; liquor leaving the fourth effect is diverted to a
  skimming tank to remove it (failure causes excessive foaming and lowers
  recovery-cycle efficiency), then returned to the third effect to
  continue evaporation. Flash tanks — recover heat from liquor or
  condensate flashing to lower pressure (typically at the product-liquor
  and first-effect clean-steam-condensate points), and the recovered flash
  steam is reused for process heating. Condenser and NCG removal — the
  condenser maintains the vacuum at the evaporator train's low-pressure
  end by condensing sixth-effect vapor; the resulting "foul condensate"
  carries sulfur-gas contaminants requiring steam-stripping; non-condensible
  gases (hydrogen sulfide, mercaptans, CO2) accumulate in the condenser and
  must be pulled by a steam or air ejector to an incinerator, or they limit
  the achievable vacuum and temperature differential. Foul condensate
  stripping — a pollution-control step (not a process-efficiency one):
  feeding foul condensate to a steam-supplied stripping column removes
  contaminants, yielding clean condensate suitable for pulp washing while
  the stripped contaminants go to an incinerator.
concept-tags: [soap skimming, flash tank, condenser, non-condensible gas, NCG, foul condensate, steam stripping]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 11, 'Auxiliary Equipment' section, pp. 11-3–11-4 (PDF pp. 157-158)"
relatedFigures: [pp-cmp-multi-effect-evaporator-ltv]
relatedTopics: []
used-by: []
notes: >
  Figure 11-1's `teaches` field lists "soap skimming, flash tanks,
  condenser/NCG removal" parenthetically as auxiliary equipment shown on
  the diagram; this entry supplies what each one actually does and why,
  which the figure caption does not explain.
```

```yaml
id: pp-topic-concentrator-design-evolution
kind: topic
teaches: >
  Why concentrator designs progressed the way they did: concentrators
  extend evaporation past the ~50-60% solids limit evaporators hit due to
  sodium-salt scale build-up on heating surfaces, further concentrating
  liquor to 65-80% solids. Direct-contact concentrators (cyclone and
  cascade types) were the earliest design, using hot recovery-boiler flue
  gas to concentrate liquor directly — but direct flue-gas contact strips
  sulfur compounds from the liquor, causing air pollution and sulfur loss,
  so most mills have replaced them with indirectly heated equipment.
  Forced-circulation concentrators add one or more effects ahead of the
  multiple-effect evaporator train's first effect, fed by a separate steam
  supply, often run in a switching arrangement where one effect
  concentrates high-solids liquor while another washes deposits using
  lower-solids liquor. Falling-film crystallizers (FFC) are the most
  recent design: rather than fighting salt-crystal formation (which begins
  around 55% solids) by trying to prevent it on heat-exchange surfaces,
  they deliberately control crystallization so new crystals bond to
  crystals already suspended in the recirculating liquor instead of the
  heating surfaces — enabling very high solids (up to 80%) with reduced
  fouling risk, and usable at any effect where crystallization occurs.
concept-tags: [concentrator, direct contact concentrator, forced circulation, falling film crystallizer, FFC, scale build-up, crystallization]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 11, 'Concentrators' section, pp. 11-4–11-5 (PDF pp. 158-159)"
relatedFigures: [pp-cmp-falling-film-concentrator]
relatedTopics: [pp-topic-evaporator-design-type-comparison]
used-by: []
notes: >
  Figure 11-2 depicts one falling-film concentrator specifically; this
  entry is the comparative design history/reasoning across all four
  concentrator families the body text discusses, which the figure alone
  does not convey.
```

```yaml
id: pp-topic-black-liquor-valve-selection-rationale
kind: topic
teaches: >
  Why black liquor control-valve selection is demanding: the media is
  thick and can be erosive, corrosive, or scale-forming inside valves.
  Valves must perform in both throttling control and tight-shutoff duty,
  with special attention where the liquor is thickest — typically right
  before and after the concentrator. The source's own stated selection
  logic: where black liquor has lower solids content, a Control-Disk
  butterfly valve may be used; but in most cases the Vee-Ball segmented
  ball valve is the primary valve of choice — a solids-content-driven
  product decision, not an arbitrary preference, consistent with the
  higher-solids service being the harder case throughout this chapter
  (concentrators handling 65-80% solids vs. evaporators' 50-60%).
concept-tags: [black liquor, valve selection, erosive service, corrosive service, tight shutoff, Vee-Ball, Control-Disk]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 11, 'Control Valve Selection' section, p. 11-5 (PDF p. 159)"
relatedFigures: [pp-cmp-multi-effect-evaporator-ltv, pp-cmp-falling-film-concentrator]
relatedTopics: [pp-topic-concentrator-design-evolution]
used-by: []
notes: >
  This section's real content is the product-selection logic itself
  (Control-Disk vs. Vee-Ball, by solids content) — the valve-tag table on
  p. 11-6 lists the resulting product recommendations per tag but does not
  state this reasoning; correctly excluded there as reference data (see
  Open Items below), captured here instead.
```

## Open Items

- **`kind: topic` pass completed 2026-09-17**, per the vault-wide topic-
  indexing directive proven on the Control Valve Handbook and the Oil &
  Gas / Power & Severe Service Sourcebooks. Read all 6 real content pages
  (11-1 through 11-6) directly via `pdftotext -layout`, not inferred from
  the two existing figure captions. Six genuine concepts found beyond what
  the figures' own `teaches` fields already state: the system's role in
  the recovery cycle, the multiple-effect mechanism/reasoning, a real
  evaporator-design-type comparison (LTV/falling-film/MVR), the auxiliary-
  equipment functions (soap skimming, flash tanks, condenser/NCG,
  stripping), the concentrator-design evolution (direct-contact → forced-
  circulation → falling-film crystallizer), and the black-liquor valve-
  selection rationale (Control-Disk vs. Vee-Ball by solids content). No
  cross-book relatedTopics links were made — black-liquor chemistry has no
  real parallel elsewhere in this vault, checked directly (grepped for
  "black liquor," "evaporator," "concentrator," "crystallizer" vault-wide;
  the only other hits are the unrelated LNG-evaporator and geothermal-
  preheater contexts already ruled out by this file's own earlier
  cross-reference sweep above). Component count for this file: 8 (2
  figures + 6 topics), verified programmatically — all ids unique within
  this file and vault-wide, all `relatedFigures`/`relatedTopics` references
  resolve, 8 yaml fences matching 8 ids.

- **Chapter boundary confirmed directly**, not merely inherited from the
  coordinating pass's candidate range. Rendered and read PDF pp. 155-160 in
  full: p. 155 = printed 11-1 (Chapter 11 opening, "Black Liquor Evaporator &
  Concentrator"), p. 160 = printed 11-6 (chapter's last content page, ending
  with the unnumbered valve-selection table). PDF page 161 confirmed as the
  Chapter 12 divider ("Kraft Recovery Boiler − Black Liquor System"). Zero
  page offset (PDF = printed + 144) throughout.
- **Full chapter coverage.** Both real figures in range (Figure 11-1, Figure
  11-2) were located and every one of the 6 real content pages (11-1 through
  11-6) was rendered and read directly — no gaps in the numeric sequence (the
  chapter contains exactly two figures, both confirmed, none skipped). Body
  text explicitly references only "figure 11-1" and "figure 11-2" throughout
  — no citation to a higher-numbered figure that would imply a missed one.
- **No low-confidence flags.** Both captions and page locations were
  confirmed by direct visual inspection of the rendered PNG at 150 dpi, not
  text extraction.
- **No duplicate printed figure numbers or source-citation errors found** in
  this chapter. Both figure numbers appear exactly once each, and body-text
  citations (lowercase "figure 11-1" / "figure 11-2") consistently match their
  captioned targets.
- **Table exclusion confirmed.** The chapter's closing content (p. 11-6) is an
  unnumbered valve-tag reference table ("EVAPORATORS/CONCENTRATORS / FISHER
  CONTROLS VALVE PRODUCT DESIGN" — Valve Tag #, Application Description,
  Control Function, and Fisher product-line columns for V150, V500,
  8580/Control-Disk, A81, E-Body) cross-referencing valve tags already shown
  on Figures 11-1/11-2 to recommended Fisher product families. Excluded per
  the standing valve-application/valve-tag reference-table rule — no "Figure"
  or "Table" caption/number appears anywhere on the page, and its content is
  purely tabular, not a diagram.
- **Cross-reference findings.** Checked the whole-library collision sweep
  (below) and grepped `20 - Source Library/Component Index — Oil & Gas
  Sourcebook ch*.md`, `... Control Valve Handbook ch*.md`, and every
  standalone product-manual index (Vee-Ball, V500, 8580, ENVIRO-SEAL, 2052,
  etc.) for product names appearing in this chapter's valve-selection table
  (V150, V500, Control-Disk, 8580, A81, E-Body). All matches found are generic
  product mentions in other, unrelated chapters/manuals' own valve-selection
  tables or product cutaways — none reference black-liquor evaporator or
  concentrator process content. Separately grepped the whole library for
  "black liquor," "evaporator," "falling film," "kraft," and related terms:
  the only other hits are an LNG evaporator (Oil & Gas Sourcebook ch13, a
  refrigeration heat-sink context) and a geothermal binary-cycle preheater/
  evaporator (Power & Severe Service Sourcebook ch9c) — both genuinely
  unrelated equipment, confirmed by reading the matched context, not assumed
  from the keyword hit alone. **No real overlap found** — an honest
  confirmation, not a skipped check, matching the low-overlap expectation for
  this industry-specific chapter.
- **Archive/legacy material:** none consulted, none needed — the 2011 Fisher
  Sourcebook is the sole and sufficient source for both of this chapter's
  components.
