---
title: Curriculum — CVE1
type: reference
tags:
  - curriculum
  - pipeline
course: Control Valve Engineering 1
updated: 2026-09-15
---

# Curriculum Registry — CVE1

> [!note] Status — PHASE 1 REBUILD complete (2026-09-16), awaiting Franz's rubric review
> This document formalizes the CVE1 → CVE2 → CVE-Industry curriculum design.
> It covers **the full competency map across all three courses** (they were
> designed together, as one coherent progression), the same way
> `Curriculum — 14101.md` lists ch4 stubs inside its own file even though
> ch4 isn't built — but only **CVE1** is a real course folder today. CVE2
> and CVE-Industry(Oil & Gas) come after, sequentially, per
> `CVE Curriculum — Phased Build and Review Rubric.md`'s phased plan.
>
> **CVE1's first build (2026-09-15, tagged `cve1-build1-pre-productive-
> failure-rebuild` @ commit `a82a16b`) passed `verify.ps1` cleanly and was
> still judged genuinely deficient by Franz** — "flat, soulless, empty,
> devoid of consideration for instructing." Concretely: module 1's six
> keyConcepts all referenced the exact same unmodified flowchart image.
> **A first Phase 1 rebuild (2026-09-16, "attempt 2") against
> `teaching-philosophy.md`'s "Cognitive Apprenticeship via Productive
> Failure" method ALSO failed Franz's rubric review**, on four root causes:
> a rotary-trim narrative illustrated with sliding-stem damage photos (real
> hardware mismatch); the scenario replacing direct instruction instead of
> framing it; the Vitruvius persona leaking into delivered slide content;
> and a seven-module structure imposing artificial scene-breaks. That
> attempt fixed all four, but Franz then found two further real defects
> reading the actual delivered slide text: **no technical term (P1, ΔP, Q,
> Cv, Class V) was ever defined, and no early slide contained a single real
> number** — every decision was narrated as already-decided, meaning the
> "attempt" step of the method never actually happened. Root cause: the
> course opened cold on its hardest case (Class V + a cavitation-prone
> trim, two independent failure modes at once) before the learner had ever
> seen the vocabulary or mechanism succeed once — corrected in
> `teaching-philosophy.md`'s "Difficulty must ramp, not open cold" section
> (2026-09-17). **ATTEMPT 3 (2026-09-17)** restructures into three tiers of
> increasing difficulty — a complete, real, fully-worked SUCCESS first
> (every term defined, real numbers throughout), then a moderate
> single-gap failure, then the harder two-gap case (Franz's original Class
> V/cavitation scenario, repositioned here rather than at the front) — see
> "Structure" below and `Status — CVE1.md` for the explicit self-check with
> real verification commands. **ATTEMPT 4 (2026-09-17)** grounds conceptual
> explanations in six new real `kind: topic` Component Index entries
> (`cvh-topic-cavitation`, `-flashing`, `-flow-recovery`, `-vena-contracta`,
> `-valve-balance`, `-seat-load` — new entries added to
> `Component Index — Control Valve Handbook ch5.md` to close a real gap:
> the Component Index previously indexed only figures, never the Handbook's
> own conceptual body prose). One real content fix resulted (page 17's
> high-recovery/cavitation mechanism now states the Handbook's own causal
> reasoning, verbatim-quoted, not just the correlation); most other cited
> slides were already accurate and gained traceability rather than a
> correction — see `Status — CVE1.md`'s honest assessment. **Still Phase 1
> — stops here for Franz's review, does not proceed to Phase 2 (expanded
> coverage), CVE2, or CVE-Industry.**
>
> Franz confirmed CVE1 Day 1 is **one training day** — `days[].minutesTarget:
> 360`, derived from the established half-day = 180 min (net of one break)
> convention already used for IfE's `d1-foundations`, **provisional/rough,
> not sign-off**. Role routing (`sizing-eng` only) is unconfirmed beyond the
> Stage 1 default, same open flag as before.
>
> Schema: `00 - Project/curriculum-development.md` — this build added the
> nine `eng.*` areas used below and the `industryScope` course field (both
> documented there, not repeated here).
>
> **Full ch5 topic index completed (2026-09-17)**, per Franz's correction
> that six reactively-identified topics wasn't the real validation test —
> the whole chapter's real body prose was read and 11 more genuine concepts
> added (17 `kind: topic` entries total; see `Component Index — Control
> Valve Handbook ch5.md`'s own Open Items for the full list and
> `Source Library.md` for the updated count). **Competency-map
> re-examination against the real topic structure: the existing 4-competency
> map holds, no change** — see "Competency-map re-examination" below for the
> reasoning. Per Franz's explicit sequencing (topic index → map check →
> THEN outline → THEN rebuild), a fifth CVE1 rebuild attempt has NOT been
> started — that is the next step, not taken here.

The schema: a **competency** is a flat skill ID (`eng.sizing.valve-selection-process`).
An **asset variant** is one authored figure for one `competency × asset-variant`.
A **placement edge** is `module × roles × competency × progression → asset
variant`. See `curriculum-development.md` for the record shapes.

**Role routing:** `eng` is a role-routed domain like `mnt`/`inst` — CVE1/CVE2
competencies route to `sizing-eng` at minimum; whether the other three roles
(`maint-tech`, `inst-tech`, `operator`) also receive any of this content is a
Stage 1 decision, not fixed here.

---

## Course allocation — confirmed shape (2026-09-15)

Franz explicitly chose this allocation over the alternative (every area
split introduces/develops across both courses) specifically to keep CVE1
from skimming nine areas shallowly. Only the three areas below get a real
CVE1 → CVE2 progression; the other six are CVE2's own new territory, not a
second pass on something CVE1 already touched.

| Area | CVE1 (`introduces`) | CVE2 (`develops`) |
| --- | --- | --- |
| `eng.sizing` | valve-selection-process, **actuator-force-awareness** (added 2026-09-16, Phase 1 rebuild) | liquid-sizing-calculation |
| `eng.selection` | body-trim-decision | materials-compatibility |
| `eng.noise-cavitation` | damage-diagnosis | mitigation-selection |

**`eng.sizing` now carries two CVE1 competencies developed by ONE CVE2
competency**, not a 1:1 pairing — `eng.sizing.liquid-sizing-calculation`
develops BOTH `valve-selection-process` (real Cv math replacing the
conceptual flowchart walk) AND `actuator-force-awareness` (real A+B+C+D
force calculation replacing the qualitative table lookup) — real numbers
and real verification for both, per the coverage-scope decision below.

| Area | CVE2 only (`introduces`) |
| --- | --- |
| `eng.severe-service` | design-justification |
| `eng.steam-conditioning` | system-integration |
| `eng.standards` | scheme-reconciliation |
| `eng.isolation-valves` | variant-justification |
| `eng.sustainability` | technology-tradeoff |
| `eng.sis` | sil-architecture |

**Course records:**

```yaml
- title: Control Valve Engineering 1
  code: CVE1
  domain: engineering
  tier: introductory
  industryScope: null

- title: Control Valve Engineering 2       # planned, not yet a real course folder
  code: CVE2
  domain: engineering
  tier: advanced
  industryScope: null

- title: Control Valve Engineering — Industry (Oil & Gas)   # planned
  code: CVE-Industry-OG
  domain: engineering
  tier: advanced
  industryScope: oil-gas
```

---

## Governing note — engagement bar

Every competency below must be authored per `teaching-philosophy.md`
"Engagement as the class itself — CVE curriculum test pattern
(added 2026-09-15)" once it reaches Stage 1/2: real tension or a
non-obvious result the learner works through, not a flat fact; enough
depth that an instructor can field an unscripted pushback question;
`introduces` does not have to sit at remember/understand for this
degreed-engineer audience. Read that section before authoring, not this
summary alone.

---

## CVE1 competencies (live — this course)

```yaml
- id: eng.sizing.valve-selection-process
  statement: >
    Work the Fisher valve-selection decision flowchart's step-2-to-3
    judgment for a given service: calculate a preliminary Cv, check the
    result against noise and cavitation limits, and decide the trim type
    that follows from that check.
  bloom: analyze
  sources: [cvh-cmp-valve-selection-process-flowchart]

- id: eng.selection.body-trim-decision
  statement: >
    Justify a body style and trim-type decision from the selection
    flowchart's steps 3-4 — state why the chosen combination fits the
    service, not just name one.
  bloom: analyze
  sources: [cvh-cmp-valve-selection-process-flowchart]

- id: eng.noise-cavitation.damage-diagnosis
  statement: >
    Distinguish flashing damage from cavitation damage by visual signature,
    tracing the difference to the vena-contracta mechanism that produces
    each.
  bloom: analyze
  sources: [cvh-cmp-flashing-damage-photo, cvh-cmp-cavitation-damage-photo]

- id: eng.sizing.actuator-force-awareness
  statement: >
    Given a trim selection, look up its unbalance area and required seat
    load from the real Handbook tables and recognize whether the actuator
    class under consideration is plausibly adequate — a qualitative,
    table-lookup check, not the full quantitative force calculation
    (that stays CVE2's job, see below).
  bloom: understand      # spans understand/apply — table lookup + a plausibility judgment
  added: "2026-09-16, Phase 1 rebuild — coverage-scope decision (Franz + RC, resolved directly): expand CVE1 rather than leave actuator-force content entirely to CVE2."
  sources: [cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph]
```

`sources` above are verified real Component Index ids (`Component Index —
Control Valve Handbook ch5.md`) — checked against the actual file before
this document was written, not transcribed on trust. The two new
actuator-force sources (`cvh-cmp-unbalance-area-table`,
`cvh-cmp-seat-load-graph`, Figures 5.2/5.3, pp.123-124) were verified real
during the Phase 1 rebuild and are used in a built course for the first
time.

## Structure (Phase 1 rebuild, ATTEMPT 3, 2026-09-17) — three tiers of increasing difficulty

Attempt 2 fixed attempt 1's four root causes but Franz then found the
course opened cold: no term was ever defined, no early slide had a real
number, and the "attempt" step was narrated rather than actually worked —
see `Status — CVE1.md` for the full account and
`teaching-philosophy.md`'s "Difficulty must ramp, not open cold" for the
governing correction. This structure is that fix: three real service
cases of increasing difficulty, not one case opening on its hardest form.

- **`cve1-ch1-m1` "A Clean Sizing Job, Start to Finish" (pages 5-8, Tier 1
  — Model-as-worked-success → Reflect only, no failure at all).** Case A
  (P1=150 psig, ΔP=50 psi, Q=200 gpm water, Class II) is worked completely
  with real numbers: preliminary Cv=28 (shown with the arithmetic), a
  real trim/body decision, and a real A+B+C+D actuator-force total
  (≈359 lbf) against a real 900 lbf-rated actuator — clears with margin.
  Every term (P1, ΔP, Q, Cv, unbalance area, seat load) is defined here,
  the first time any of them appear.
- **`cve1-ch1-m2` "A Tighter Requirement, One Real Gap" (pages 9-11, Tier
  2 — the first real Attempt→Consequence→Model cycle, one gap only).**
  Case B (Class III) reuses the same method correctly for Cv/trim, but
  the actuator is sized against stroking thrust alone (≈180 lbf, a 250 lbf
  unit selected) — the real total (≈466 lbf) is nearly double what was
  checked, producing a real, documented commissioning seat leak. Isolates
  the actuator-force gap alone, without also compounding a cavitation
  issue.
- **`cve1-ch1-m3` "Near-Zero Leakage, Two Real Gaps" (pages 12-19+check,
  Tier 3 — the hardest case, Franz's original scenario, repositioned).**
  Case C (Class V, ΔP=80% of P1) repeats both gaps at once: a
  cavitation-prone sliding-stem trim chosen for Cv efficiency, and the
  same stroking-thrust-only actuator shortcut, now at Class V's much
  larger scale (real total ≈13,500 lbf against a 3,000 lbf actuator).
  Both consequences are shown, both mechanisms modeled in full (vena
  contracta, flash/collapse, high/low-recovery, damage-photo contrast,
  the real force total), then the case is re-worked correctly with
  coached-then-faded support and a closing reflection.

**Every fix from attempt 2 re-verified to still hold, plus the two new
defects fixed, each checked directly, not just claimed:**

1. **Real numbers, every term defined at first use.** Page 5 shows the
   actual Cv arithmetic (200 × √(1.0/50) ≈ 28); pages 7-8, 11, and 19 show
   the actual A+B+C+D arithmetic against real Figure 5.2/5.3 table values.
   No slide narrates a decision as already made without the number behind
   it.
2. **Asset-first, sliding-stem throughout wherever the wrong decision
   appears.** `grep -n -i "rotary" build/slides/*.html | grep -v "<!--"`
   returns only page 20's correctly-framed wrong-answer distractor
   ("Class V only matters for rotary valves, not this globe valve") — no
   narrative inconsistency.
3. **No named persona, no reasoning-narration voice, anywhere delivered.**
   `grep -ril "vitruvius" build/slides/*.html build/manifest.js` returns
   nothing.
4. **Modules are scheduling units only, content flows continuously.**
   `grep -n "Module [0-9]" build/slides/*.html | grep -v "<!--"` returns
   nothing; `buildsOn` chains m1→m2→m3 by content ("the same method",
   "the same shortcut") never a module number.
5. **No back-to-back identical images.** Checked every consecutive page
   pair's figure directly — none repeats.

See `Status — CVE1.md` for the explicit self-check against all four fixes,
with the actual commands run, not just an assertion each one holds.

---

## CVE2 competencies (planned — future course, recorded now for design continuity)

```yaml
# Develops CVE1's three foundational areas
- id: eng.sizing.liquid-sizing-calculation
  statement: >
    Perform the real ISA/IEC liquid Cv calculation (including the F_F
    liquid critical pressure ratio factor and a choked-flow check) and
    verify actuator force margin — unbalance area, seat load, packing
    friction — against a specific service.
  bloom: evaluate
  progression: develops
  develops2: "eng.sizing.actuator-force-awareness (added 2026-09-16, Phase 1 rebuild) — this competency now develops TWO CVE1 competencies, not one: the real ISA/IEC Cv calculation develops valve-selection-process's conceptual flowchart walk, and the real A+B+C+D actuator-force calculation develops actuator-force-awareness's qualitative table lookup (unbalance area, seat load, packing friction all become real numbers here instead of a plausibility check)."
  sourceNote: "ISA/IEC calculation methodology and worked examples come from the sourcebooks, not the Handbook's more conceptual treatment — cross-reference across all four sourcebooks' shared intro chapters, not four redundant copies. Actuator force-margin sources: cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph, cvh-cmp-packing-friction-values-table (verified real, ch5 — the first two now already used in CVE1's own Phase 1 rebuild, confirmed real a second time)."

- id: eng.selection.materials-compatibility
  statement: >
    Select trim materials against compatibility, availability, and cost,
    and defend that selection against a competing material that fails on
    exactly one of those three axes.
  bloom: evaluate
  progression: develops

- id: eng.noise-cavitation.mitigation-selection
  statement: >
    Select and justify a specific noise or cavitation mitigation — anti-
    noise trim, inline or vent diffuser, multi-stage anti-cavitation trim,
    inline silencer — against real comparative alternatives for a given
    service.
  bloom: evaluate
  progression: develops

# CVE2's own new territory — introduces, not develops (nothing precedes these in CVE1)
- id: eng.severe-service.design-justification
  statement: >
    Justify a specific severe-service design choice against a source's own
    stated limit (e.g. a 4200 psid DST pressure-drop threshold, a -101°C
    frost point, an ASME Section III Class 1/2/3 nuclear designation).
  bloom: evaluate
  progression: introduces
  sourceNote: "Control Valve Handbook ch6 (Special/Severe Service) — untouched by any course so far; specific figures/tables to be confirmed against ch6 directly during Stage 1, not assumed from this summary."

- id: eng.steam-conditioning.system-integration
  statement: >
    Architect a full turbine-protection steam-conditioning loop meeting a
    Class V shutoff requirement and a 2-4 second stroke-response
    specification.
  bloom: evaluate     # spans evaluate/create — confirm exact level during Stage 2 authoring
  progression: introduces
  sourceNote: "Control Valve Handbook ch7 (Steam Conditioning) — untouched by any course so far."

- id: eng.standards.scheme-reconciliation
  statement: >
    Reconcile an IEC 60079 hazardous-area rating against the equivalent
    ATEX rating and judge whether a substitution is valid, given that the
    IIC/IIB/IIA gas-group hierarchy is asymmetric (not a simple one-to-one
    map).
  bloom: evaluate
  progression: introduces
  sourceNote: "Control Valve Handbook ch9 (Standards and Approvals) — status: current, verified this session (Component Index — Control Valve Handbook ch9.md)."

- id: eng.isolation-valves.variant-justification
  statement: >
    Justify a specific isolation-valve variant choice against a named
    failure mode — chattering, uneven seat wear, excessive actuation
    torque.
  bloom: evaluate
  progression: introduces
  sourceNote: "Control Valve Handbook ch10 (Isolation Valves). MUST carry the IPT/Robert A. Lee credit forward per Franz's 2026-09-18 decision (Component Index — Control Valve Handbook ch10.md) — this chapter is credited to IPT's Pipe Trades Handbook by Robert A. Lee, not cite the Handbook alone. Verified real this session."

- id: eng.sustainability.technology-tradeoff
  statement: >
    Judge whether a specific emerging decarbonization technology genuinely
    applies to a control-valve-relevant process, versus one that is
    plausible-sounding but inapplicable.
  bloom: evaluate
  progression: introduces
  sourceNote: "Control Valve Handbook ch11 (Sustainability) — prose/table-driven, not hardware-driven; engagement must come from the classification/tradeoff judgment itself per teaching-philosophy.md's CVE test pattern, not a hardware figure."

- id: eng.sis.sil-architecture
  statement: >
    Architect a voting configuration (e.g. 1oo2, 2oo3) meeting a required
    SIL / PFDavg / RRF target, using OREDA final-element failure data (~50%
    of SIS failures attributed to the final element) to justify where
    redundancy actually belongs in the loop.
  bloom: evaluate     # spans evaluate/create
  progression: introduces
  sourceNote: "Control Valve Handbook ch12 (SIS) — untouched by any course so far. OREDA ~50% figure to be verified against ch12 directly during Stage 1, not assumed from this summary."
```

**Verification note on the six CVE2-only competencies above:** the specific
figures/percentages/thresholds named in each `sourceNote` (the 4200 psid
DST threshold, the OREDA ~50% figure, etc.) came from the design
conversation, not from this session independently reading ch6/ch7/ch9/
ch10/ch11/ch12 cover to cover — ch9's `status: current` and the ch10 IPT
credit were the two claims checked directly this session; the rest should
be confirmed against the real chapters during CVE2's own Stage 1, the same
verification discipline applied everywhere else in this vault.

---

## CVE-Industry (Oil & Gas) — scope note only, no competencies yet

Draws **only** from Oil & Gas Sourcebook's remaining industry-specific
chapters (Onshore/Offshore Production, Natural Gas Treatment, LNG
Liquefaction, LNG Receiving Terminals, Oil and Gas Transportation,
Fractionation, Natural Gas Storage) — applying CVE1/CVE2's fundamentals,
not re-teaching them. No competency map drafted yet; comes after CVE2 per
the confirmed sequential chain. Power & Severe Service / Pulp & Paper /
Refining are later instances of the same pattern (`industryScope` values
already reserved in the schema).

## Competency-map re-examination (2026-09-17, after the full ch5 topic index)

Franz's explicit sequencing: full chapter topic index → re-examine whether
the competency map still holds, now that real topic relationships exist,
rather than the figure-grouping guess the original map was drawn from →
THEN outline → THEN rebuild. This section is that re-examination, done
against the real 17-topic map now in `Component Index — Control Valve
Handbook ch5.md`, not against the earlier 6-topic partial view.

**Conclusion: the existing 4-competency map holds. No change.**

The specific hypothesis raised (cavitation/flashing/flow-recovery/vena-
contracta might need to be ONE competency instead of split across areas)
does not actually apply, once checked against the real map: those four
concepts were never split across CVE1's areas in the first place —
`eng.noise-cavitation.damage-diagnosis`'s own statement already reads
"tracing the difference to the vena-contracta mechanism," meaning the
interlinkage the full topic pass confirmed (flow-recovery sets
vena-contracta pressure, which determines whether flashing or cavitation
occurs, which produces the two distinct damage signatures) was already
bundled into ONE competency, not scattered. The real topic map corroborates
the existing boundary rather than contradicting it.

What the full pass DID surface, checked against each existing competency:

- **`cvh-topic-cavitation-flashing-mitigation`** (practical valve-selection
  guidance to avoid/minimize damage) maps cleanly onto CVE2's EXISTING
  `eng.noise-cavitation.mitigation-selection` (evaluate-level, "select and
  justify a specific mitigation... against real comparative alternatives")
  — this is a genuine `develops` relationship (CVE1 diagnoses what
  happened; CVE2 evaluates how to prevent it), not evidence the areas are
  wrong. Same for `cvh-topic-noise-generation-and-prediction` and
  `cvh-topic-noise-control-strategy` — both underlie CVE2's mitigation
  competency directly and correctly, no restructuring implied.
- **`cvh-topic-liquid-sizing-methodology` / `-compressible-sizing-
  methodology`** are exactly the real, quantitative version of what
  `eng.sizing.valve-selection-process` teaches conceptually — confirms the
  existing `develops` link to CVE2's `eng.sizing.liquid-sizing-calculation`,
  already documented above, unchanged.
- **`cvh-topic-packing-friction` / `-actuator-force-selection` /
  `-rotary-actuator-torque`** all deepen `eng.sizing.actuator-force-
  awareness`'s existing source grounding — richer material for the same
  competency, not a new one.
- **`cvh-topic-seat-leakage-classification`** is the one genuinely orphaned
  concept — it doesn't map cleanly onto any existing competency's
  statement. Judgment call, not a map change: this course's scenario
  already USES "Class V" as a given service constraint (the same way it
  uses P1/ΔP/Q as given inputs) without teaching leak-class selection as
  its own skill, and that's the right scope for an introductory course —
  learning to size/select/diagnose against a stated leak-class requirement
  is CVE1's job; learning to choose or justify a leak class itself is a
  plausible, narrower candidate for a future competency if Franz wants it,
  but not something this pass is deciding on its own authority. Flagged,
  not actioned.

**Real reasoning, not just an assertion:** the original map was drawn by
grouping FIGURES that looked thematically related (a legitimate but
partial view — a figure only shows what one diagram depicts, not how
concepts connect in the surrounding prose). The full topic pass replaced
that partial view with the chapter's actual conceptual structure
(`relatedTopics` links now exist between all 17 entries) and the
competency boundaries were checked against that real structure directly,
concept by concept, above — not reconfirmed by assumption.

## Explicitly out of scope for this curriculum

Historic Educational Services Training Content archive — tried this
session, paused by Franz. Every sampled body PDF is scanned-image-only (no
extractable text), pages are saddle-stitch scans needing reading-order
reconstruction, confirmed 1987-88 vintage, and at least one concrete
supersession is already known (the archive's Noise module cites
Cavitrol III/V trim; the current Oil & Gas Sourcebook shows Cavitrol IV as
the current generation). A real pass is ~800 pages of visual review across
~40 modules — its own future project, not folded into this one.
