---
title: Stage 1 Outline — Control Valve Engineering 2
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 2
chapter: cve2-ch1-m5
updated: 2026-09-15
---

# Stage 1 Outline — cve2-ch1-m5 (Standards Scheme Reconciliation)

> [!note] Origination mode
> New territory. Scoped to CVH ch9's hazardous-area classification content
> (§9.3-9.5) only — deliberately excludes §9.7's enclosure ratings
> (NEMA/IP), a real but different sub-topic in the same chapter.

### 1. cve2-ch1-m5 — Standards Scheme Reconciliation

**Objective:** Reconcile an IEC 60079 hazardous-area rating against the equivalent ATEX rating and judge whether a substitution is valid, given that the IIC/IIB/IIA gas-group hierarchy is asymmetric.

level target: `evaluate` · domain: `engineering` · tier: `advanced`

**Roles:** `sizing-eng` only.

**Stakes (opening hook):** A naive read of "IIC, IIB, IIA" looks like three interchangeable tiers of the same rating — the real hierarchy is asymmetric and one-directional: IIC-rated equipment covers IIB and IIA needs, but IIA-rated equipment covers only IIA. Reading the hierarchy backward means approving a substitution that's actually unsafe, in exactly the direction that's easy to get wrong.

| # | Item | Detail |
| --- | --- | --- |
| 1 | IEC equipment groups IIC/IIB/IIA form a real substitutability hierarchy, not three separate ratings: IIC-marked equipment is suitable for applications requiring IIC, IIB, or IIA; IIB-marked equipment covers IIB or IIA; IIA-marked equipment covers only IIA. | role: mechanism · level: understand · cvh-cmp-equipment-groups-table |
| 2 | Hazardous-area Zones (0/1/2 gas, 20/21/22 dust) map to a default Equipment Protection Level (EPL) — Zone 0 requires Ga; Zone 1 allows Ga or Gb; Zone 2 allows Ga, Gb, or Gc — the same "higher rating covers lower zone" direction as the equipment-group hierarchy above. | role: mechanism · level: understand · cvh-cmp-zones-vs-epl-table |
| 3 | IEC 60079 ratings (EPL + Group, by Mines/Gas/Dust) map onto ATEX Directive 2014/34/EU ratings (Equipment Group, Equipment Category & Environment — e.g. 1G/2G/3G for gas) via a real published comparison table — the two schemes are not identical in structure, so reconciling them is a real lookup-plus-judgment task, not a renaming exercise. | role: application · level: analyze · cvh-cmp-iec-vs-atex-ratings-table |
| 4 | Given an IEC-rated device and a proposed ATEX-rated substitute (or the reverse), judge whether the substitution is valid by checking the equipment-group direction (item 1) AND the EPL/Zone direction (item 2) against the comparison table (item 3) — a substitution that looks fine on the ATEX side alone can still fail the IEC equipment-group direction. | role: application · level: evaluate · items 1-3 |
| 5 | **→ Activity — Substitution Judgment Case** | case-walkthrough · 25 min — Given 3-4 real IEC/ATEX rating pairs, some valid substitutions and some deliberately invalid in the "wrong direction" (e.g. proposing an IIA-rated device where IIB or IIC is required), judge each and state which specific rule it violates or satisfies. |
| 6 | Check — knowledge check | — |

**Competency coverage:** `eng.standards.scheme-reconciliation` (all items), `progression: introduces`.

**Verification note:** the asymmetric IIC/IIB/IIA hierarchy and the IEC-vs-ATEX comparison table were both checked verbatim against `Component Index — Control Valve Handbook ch9.md` this pass. No corrections needed.
