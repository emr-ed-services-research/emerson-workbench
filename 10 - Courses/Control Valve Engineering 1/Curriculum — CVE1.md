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

> [!note] Status — competency map confirmed (Franz, 2026-09-15); Stage 1 arc-cut not yet run
> This document formalizes the CVE1 → CVE2 → CVE-Industry curriculum design
> scoped tonight. It covers **the full competency map across all three
> courses** (they were designed together, as one coherent progression), the
> same way `Curriculum — 14101.md` lists ch4 stubs inside its own file even
> though ch4 isn't built — but only **CVE1** is a real course folder today.
> CVE2 and CVE-Industry(Oil & Gas) come after, sequentially; their
> competencies are recorded here now so the design isn't lost, but they get
> their own `Curriculum — CVE2.md` / `Curriculum — CVE-Industry (Oil & Gas).md`
> files once each course actually starts.
>
> **Stage 1 arc-cut complete** (origination mode — no existing deck): two
> modules, `cve1-ch1-m1` (Valve Selection & Sizing Decision — both `eng.sizing`
> and `eng.selection` competencies, since both trace to the same CVH ch5
> flowchart walked as two judgment stages, not two topics) and `cve1-ch1-m2`
> (Cavitation and Flashing: Diagnosing Damage). See the two
> `Stage 1 Outline — Control Valve Engineering 1 — cve1-ch1-m*.md` files.
> Franz confirmed CVE1 Day 1 is **one training day** — `days[].minutesTarget:
> 360`, derived from the established half-day = 180 min (net of one break)
> convention already used for IfE's `d1-foundations`, **provisional/rough,
> not sign-off**. The m1/m2 split within that budget, and whether either
> module routes to any role besides `sizing-eng`, are both open Stage 2
> decisions. **Next step:** Stage 2 (context/key-concept depth authoring).
>
> Schema: `00 - Project/curriculum-development.md` — this build added the
> nine `eng.*` areas used below and the `industryScope` course field (both
> documented there, not repeated here).

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
| `eng.sizing` | valve-selection-process | liquid-sizing-calculation |
| `eng.selection` | body-trim-decision | materials-compatibility |
| `eng.noise-cavitation` | damage-diagnosis | mitigation-selection |

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
```

`sources` above are verified real Component Index ids (`Component Index —
Control Valve Handbook ch5.md`) — checked against the actual file before
this document was written, not transcribed on trust.

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
  sourceNote: "ISA/IEC calculation methodology and worked examples come from the sourcebooks, not the Handbook's more conceptual treatment — cross-reference across all four sourcebooks' shared intro chapters, not four redundant copies. Actuator force-margin sources: cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph, cvh-cmp-packing-friction-values-table (verified real, ch5)."

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

## Explicitly out of scope for this curriculum

Historic Educational Services Training Content archive — tried this
session, paused by Franz. Every sampled body PDF is scanned-image-only (no
extractable text), pages are saddle-stitch scans needing reading-order
reconstruction, confirmed 1987-88 vintage, and at least one concrete
supersession is already known (the archive's Noise module cites
Cavitrol III/V trim; the current Oil & Gas Sourcebook shows Cavitrol IV as
the current generation). A real pass is ~800 pages of visual review across
~40 modules — its own future project, not folded into this one.
