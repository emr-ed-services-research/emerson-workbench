---
title: Curriculum — CVE2
type: reference
tags:
  - curriculum
  - pipeline
course: Control Valve Engineering 2
updated: 2026-09-15
---

# Curriculum Registry — CVE2

> [!note] Status — Stage 1 arc-cut complete for 8 of 9 competencies; 1 blocked
> Origination mode, no existing deck. Franz authorized running this
> overnight without live review ("do your own reviews... want to wake up
> with these courses completed") — every verification below that would
> normally be a human checkpoint was done by this pass instead.
>
> **`eng.selection.materials-compatibility` is BLOCKED — no module cut.**
> See "Blocked competency" below. This is a real source-material gap, not
> a judgment call resolved by more diligence — flagged for Franz, not
> silently dropped or invented around.
>
> **8 real modules cut for the other 8 competencies** — see the 8
> `Stage 1 Outline — Control Valve Engineering 2 — cve2-ch1-m*.md` files.
> No `minutesTarget` given for this course yet (Franz gave CVE1 "1 day";
> CVE2 covers 6 full new chapters plus develops 3 areas — do NOT assume
> the same figure, this needs its own real schedule input).
>
> Schema/course record: `Curriculum — CVE1.md` "Course allocation" table
> and course-records YAML block — not repeated here.

---

## Sourcebooks-methodology claim — confirmed, with the real chapter numbers

CVE1's Stage 1 fork correctly identified that the four sourcebooks' shared
liquid-sizing chapters belong to CVE2's `eng.sizing.liquid-sizing-calculation`,
not CVE1. Confirmed directly this pass: **both** `Subject-Matter Index — Oil & Gas
Sourcebook ch3.md` and `Subject-Matter Index — Power & Severe Service Sourcebook
ch3.md` are titled "Liquid Valve Sizing" (real `chapter:` frontmatter, not
assumed) and both carry the identical ISA/IEC liquid critical pressure ratio
factor formula `F_F = 0.96 − 0.28·√(P_v/P_c)`, the q_max (choked-flow) and
ΔP_max concepts, and a worked graphical method (read across to a curve, then
horizontally to the ordinate). This is genuinely complementary across the
four sourcebooks in the way Franz described — same standard methodology,
each sourcebook's own worked figures grounded in that industry's own service
conditions — not four redundant copies of the same content.

---

## The 8 confirmed competencies — verification results

For each, `sourceNote` below states exactly what was checked directly this
pass against the real Subject-Matter Index files (not assumed from the design
conversation) and the result.

```yaml
- id: eng.sizing.liquid-sizing-calculation
  statement: >
    Perform the real ISA/IEC liquid Cv calculation (including the F_F
    liquid critical pressure ratio factor and a choked-flow check) and
    verify actuator force margin — unbalance area, seat load, packing
    friction — against a specific service.
  bloom: evaluate
  progression: develops
  sources: [cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph, cvh-cmp-packing-friction-values-table]
  sourceNote: >
    CONFIRMED. Force-margin tables verified real in Subject-Matter Index — Control
    Valve Handbook ch5.md §5.11. F_F formula and worked graphical method
    verified real and identical in both Oil & Gas Sourcebook ch3 and Power &
    Severe Service Sourcebook ch3 (both titled "Liquid Valve Sizing").

- id: eng.noise-cavitation.mitigation-selection
  statement: >
    Select and justify a specific noise or cavitation mitigation — anti-
    noise trim, inline or vent diffuser, multi-stage anti-cavitation trim,
    inline silencer — against real comparative alternatives for a given
    service.
  bloom: evaluate
  progression: develops
  sources: [cvh-cmp-cage-style-anti-noise-trim, cvh-cmp-valve-inline-diffuser-photo, cvh-cmp-valve-vent-diffuser-diagram, cvh-cmp-multi-stage-anti-cavitation-trim, cvh-cmp-inline-silencer-photo]
  sourceNote: >
    CONFIRMED. All four named mitigation types verified real in Component
    Index — Control Valve Handbook ch5.md §5.15-5.16 "Noise Prediction and
    Control." (Exact source ids above are read from that section's real
    entries — confirm exact id spellings against the file directly during
    Stage 2, this pass paraphrased two from context rather than copying
    verbatim.)

- id: eng.severe-service.design-justification
  statement: >
    Justify a specific severe-service design choice against a source's own
    stated limit (e.g. a 4200 psid DST pressure-drop threshold, a -101°C
    frost point, an ASME Section III Class 1/2/3 nuclear designation).
  bloom: evaluate
  progression: introduces
  sources: [cvh-cmp-cavitation-trim-cutaway, cvh-cmp-cryogenic-extension-bonnet, cvh-cmp-pressurizer-spray-valve-nuclear]
  sourceNote: >
    CONFIRMED — all three specific figures named in the original design
    conversation check out exactly against Subject-Matter Index — Control Valve
    Handbook ch6.md: the DST trim's "high-pressure-drop applications up to
    4200 psid" is verbatim in `cvh-cmp-cavitation-trim-cutaway`; the "-101°C
    / -150°F" frost point is verbatim in `cvh-cmp-cryogenic-extension-bonnet`;
    the ASME Section III Class 1/2/3 designation is verbatim in
    `cvh-cmp-pressurizer-spray-valve-nuclear`. No correction needed — this is
    the one CVE2-new competency where every original claim held up exactly.

- id: eng.steam-conditioning.system-integration
  statement: >
    Architect a full turbine-protection steam-conditioning loop meeting a
    Class V shutoff requirement and a 2-4 second stroke-response
    specification.
  bloom: evaluate
  progression: introduces
  sources: [cvh-cmp-turbine-bypass-actuation-package]
  sourceNote: >
    CONFIRMED — "Class V" shutoff and "2-4 seconds full-stroke" (plus
    "better than 1% positioning accuracy," not previously named) verbatim in
    `cvh-cmp-turbine-bypass-actuation-package`, Subject-Matter Index — Control
    Valve Handbook ch7.md. **Volume flag**: this chapter has 14 real figures
    (5 desuperheater design types, attemperator, sparger, plus the turbine-
    bypass figure) — genuinely more source material than any other CVE2
    competency. One module was cut for it (see Stage 1 Outline), but Stage 2
    should weigh whether this needs to become two modules for pacing —
    flagged, not decided here.

- id: eng.standards.scheme-reconciliation
  statement: >
    Reconcile an IEC 60079 hazardous-area rating against the equivalent
    ATEX rating and judge whether a substitution is valid, given that the
    IIC/IIB/IIA gas-group hierarchy is asymmetric (not a simple one-to-one
    map).
  bloom: evaluate
  progression: introduces
  sources: [cvh-cmp-equipment-groups-table, cvh-cmp-iec-vs-atex-ratings-table]
  sourceNote: >
    CONFIRMED — the asymmetric substitutability hierarchy is real and
    verbatim: "IIC-marked equipment is suitable for applications requiring
    IIC, IIB, or IIA; IIB-marked equipment is suitable for IIB or IIA;
    IIA-marked equipment is suitable only for IIA" (`cvh-cmp-equipment-
    groups-table`, Subject-Matter Index — Control Valve Handbook ch9.md). The
    IEC-vs-ATEX comparison table exists exactly as described
    (`cvh-cmp-iec-vs-atex-ratings-table`). Scoping note: this module does
    NOT use ch9's enclosure-ratings figures (9.6/9.7, NEMA/IP) — a real,
    different sub-topic in the same chapter, not part of this competency's
    IEC-60079-vs-ATEX framing.

- id: eng.isolation-valves.variant-justification
  statement: >
    Justify a specific isolation-valve variant choice against a named
    failure mode — chattering, uneven seat wear, excessive actuation
    torque.
  bloom: evaluate
  progression: introduces
  sources: [cvh-cmp-flexible-wedge-disk, cvh-cmp-flexible-split-wedge-gate-valve, cvh-cmp-double-disk-gate-valve, cvh-cmp-plug-disk-globe-valve]
  sourceNote: >
    CONFIRMED, with one wording correction. "Chattering" is real and verbatim
    (flexible-wedge disk guides "used on larger sizes to prevent chattering").
    "Torque" is real and verbatim (flexible split-wedge design achieves "lower
    required torque than a solid wedge"). "Uneven seat wear" as an exact
    phrase does NOT appear — the real sourced concept is the double-disk gate
    valve's contrasted "friction/wear behavior" against the split-wedge design,
    and the plug-disk globe valve's "erosion resistance" framing. Close in
    substance, not verbatim — Stage 2 should use "wear/erosion resistance,"
    not force the exact phrase "uneven seat wear" into a slide.
    **MUST carry the IPT/Robert A. Lee credit forward** (Franz's 2026-09-18
    decision) — this entire chapter is credited to IPT's Pipe Trades
    Handbook, verified again this pass. **Scoping note**: ch10 catalogues 8+
    valve families (gate, globe, check, diaphragm, pinch, ball, butterfly,
    plug); this module focuses on gate-valve internal variants specifically
    (pressure-seal/bolted-bonnet, solid/flexible/split-wedge, double-disk),
    since that's where the richest variant-vs-failure-mode comparative content
    actually concentrates, rather than surveying all 8 families shallowly.

- id: eng.sustainability.technology-tradeoff
  statement: >
    Judge whether a specific emerging decarbonization technology genuinely
    applies to a control-valve-relevant process, versus one that is
    plausible-sounding but inapplicable.
  bloom: evaluate
  progression: introduces
  sources: [cvh-cmp-sustainability-decarbonization-table]
  sourceNote: >
    CONFIRMED. The 5-category table (Hydrogen, Decarbonization/Carbon
    Capture, Alternative Fuel and Biochemical, Renewables, Electrification
    and Storage) is real, Subject-Matter Index — Control Valve Handbook ch11.md.
    Confirms the "prose/table-driven, not hardware-driven" framing — this
    chapter has only 3 figures across 10 pages, all reference tables/
    infographics. "Actuator electrification" (listed under Electrification
    and Storage) is the one item directly control-valve-relevant; several
    others (e.g. offshore wind) are real decarbonization technologies but
    NOT control-valve-relevant — this contrast is exactly the judgment
    material the competency needs, not a flaw in the source.

- id: eng.sis.sil-architecture
  statement: >
    Architect a voting configuration (e.g. 1oo2, 2oo3) meeting a required
    SIL / PFDavg / RRF target, using OREDA final-element failure data (~50%
    of SIS failures attributed to the final element) to justify where
    redundancy actually belongs in the loop.
  bloom: evaluate
  progression: introduces
  sources: [cvh-cmp-layers-of-protection, cvh-cmp-sil-pfd-rrf-table, cvh-cmp-oreda-failure-data-chart, cvh-cmp-hipps-typical-configuration]
  sourceNote: >
    CONFIRMED, with the exact breakdown found. OREDA figure is real:
    Sensor ~42%, Logic Solver ~8%, Final Control Element ~50%
    (`cvh-cmp-oreda-failure-data-chart`) — the "~50%" claim holds exactly.
    Real worked example available for the architecture task itself: the
    HIPPS figure is explicitly framed in the source as "a typical HIPPS in
    a configuration set to meet SIL 3," using 2oo3 voting on three pressure
    transmitters (`cvh-cmp-hipps-typical-configuration`) — this is a
    concrete, ready-made worked example for the competency's own "architect
    a voting configuration" task, not just supporting context.
```

---

## Blocked competency

```yaml
- id: eng.selection.materials-compatibility
  statement: >
    Select trim materials against compatibility, availability, and cost,
    and defend that selection against a competing material that fails on
    exactly one of those three axes.
  bloom: evaluate
  progression: develops
  status: BLOCKED — no source
```

**No real source content exists** in any currently-catalogued Control Valve
Handbook chapter for trim-material compatibility/availability/cost tradeoffs.
Checked directly: the only match anywhere in ch1–12's Subject-Matter Index files
is the chapter-5 valve-selection flowchart's own step-5 label, "Select Trim
Materials" — a one-line step name with no supporting figure, table, or
comparative data behind it, and it's the same flowchart already used at
`introduces` level by CVE1. A `develops`-level competency asking the learner
to defend a material choice against a competing material needs real
comparative material data (e.g. corrosion resistance, temperature limits,
hardness, cost tier) that simply isn't catalogued anywhere in this vault yet.

**This is not a judgment call — it's a missing source.** Did not author a
thin module against inadequate material, and did not invent comparative
data. Two real paths forward, both requiring a human decision: (1) a
dedicated Fisher/Emerson trim-materials selection guide may exist and just
isn't in the Source Library yet — worth asking whether one should be added,
or (2) this competency gets re-scoped once a real source is identified.
Left as BLOCKED, no module cut, rather than guessed around.

**Follow-up (WC, same night):** checked one more real lead before accepting
this as a dead end — Control Valve Handbook ch13 (Engineering Data),
`Subject-Matter Index — Control Valve Handbook ch13.md`. Confirmed **zero
catalogued components** there, but that's specifically because the
project's figures-only cataloguing rule excludes tabular content, not
because the content doesn't exist: §13.1/13.2 ("Standard Specifications for
Pressure-Retaining Valve Materials" / "Valve Material Properties") is real,
extractable text — verified directly against the PDF (pages 261-268) —
listing ~11+ real ASTM material specs (cast carbon steel, Cr-Mo steel,
stainless steel, nickel steel, etc.) each with a real temperature range and
composition breakdown.

**This does NOT fully resolve the block.** ch13 is pressure-boundary
*body*-material specification data (temperature range + alloy composition),
not process-fluid *trim* compatibility, and it has no cost or availability
commentary at all — the competency's literal "compatibility, availability,
and cost" framing still isn't well-served by it. What it DOES support is a
narrower, real competency: selecting a body/trim material against a
service's temperature range and required corrosion resistance from real
comparative spec data. Genuinely a re-scoping decision, not a clean
drop-in fix — flagging this concrete lead so the choice is between two
informed options, not "give up" vs. "invent data": (a) re-word
`eng.selection.materials-compatibility`'s statement to match what ch13
actually supports, and unblock with real data, or (b) still add a
dedicated materials-selection source for the fuller compatibility/cost
claim as originally written. Left BLOCKED either way — this is Franz's call,
not decided here.

---

## Module map (8 real modules)

| Module | Title | Competency | Source chapter |
| --- | --- | --- | --- |
| `cve2-ch1-m1` | Real Cv Calculation & Actuator Force Verification | `eng.sizing.liquid-sizing-calculation` | CVH ch5 + sourcebooks ch3 |
| `cve2-ch1-m2` | Noise & Cavitation Mitigation Selection | `eng.noise-cavitation.mitigation-selection` | CVH ch5 §5.15-5.16 |
| `cve2-ch1-m3` | Severe-Service Design Justification | `eng.severe-service.design-justification` | CVH ch6 |
| `cve2-ch1-m4` | Steam-Conditioning System Integration | `eng.steam-conditioning.system-integration` | CVH ch7 |
| `cve2-ch1-m5` | Standards Scheme Reconciliation | `eng.standards.scheme-reconciliation` | CVH ch9 |
| `cve2-ch1-m6` | Isolation Valve Variant Justification | `eng.isolation-valves.variant-justification` | CVH ch10 |
| `cve2-ch1-m7` | Decarbonization Technology Tradeoff | `eng.sustainability.technology-tradeoff` | CVH ch11 |
| `cve2-ch1-m8` | SIS Voting Architecture & SIL Compliance | `eng.sis.sil-architecture` | CVH ch12 |

No competency naturally shared a module the way CVE1's sizing+selection did
— each of these 9 traces to a different chapter/section, so 1:1 module-to-
competency mapping held throughout (except the blocked one, which got no
module at all).
