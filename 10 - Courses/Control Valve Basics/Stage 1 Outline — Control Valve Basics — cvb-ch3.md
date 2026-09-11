---
title: Stage 1 Outline — Control Valve Basics
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Basics
chapter: cvb-ch3
updated: 2026-09-11
---

# Stage 1 Outline — cvb-ch3 (Control Valve Accessories)

> [!note] How to review this document
> This is the real cut Stage 1 just made for this chapter — module
> boundaries, the concept sequence, and where a Hands-First doing-activity
> lands, in taught order. Edit it directly the way any other doc in this
> vault gets reviewed: strike through anything wrong (`~~like this~~`),
> add a `> [!warning]` callout on a boundary or activity placement you want
> reconsidered, or just leave a note. When you're done, re-fire Stage 1 as
> a **REVISE** — it reads your edits here against the current `course.json`
> and produces a corrected cut, then regenerates a clean copy of this file.
> Stage 2 stays locked until every module below is approved.

### 1. cvb-ch3-m1 — Positioners, Transducers & Boosters

**Objective:** Identify a positioner, digital valve controller, I/P transducer, and volume booster, and explain each one's role in getting a command signal to the valve stem.

level target: `understand` · domain: `product-literacy`

**Stakes (opening hook):** A tech who can't tell a positioner from a transducer from a booster can't explain why a valve isn't reaching command, or which accessory to check first.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | cvb.accessory.positioner-mechanism (introduces) | 37 | role: mechanism · level: understand |
| 2 | cvb.accessory.analog-ip-positioner (introduces) | 38 | role: mechanism · level: understand |
| 3 | cvb.accessory.digital-valve-controller (introduces) | 39 | role: nomenclature · level: remember |
| 4 | cvb.accessory.ip-transducer (introduces) | 40 | role: contrast · level: understand |
| 5 | cvb.accessory.volume-booster (introduces) | 41 | role: application · level: understand |
| 6 | **→ Activity — Signal Path Trace** | — | case-walkthrough · 15 min — Given a real assembled valve/actuator/DVC photo, trace the signal path from the control-room command to stem motion, naming each accessory (positioner or transducer, booster if present) and what it does at each hop. |
| 7 | Check — knowledge check | 42 | — |

### 2. cvb-ch3-m2 — Controllers, Position Feedback & Safety Accessories

**Objective:** Identify a pneumatic controller's role as a standalone local controller, and distinguish solenoid-valve types and safety-accessory hardware used in a safety instrumented system.

level target: `understand` · domain: `product-literacy` · builds on: cvb-ch3-m1

**Stakes (opening hook):** Confusing a spring-return SOV for a double-acting one, or not recognizing a trip valve's tripped state, means a safety-shutdown component gets mishandled during a routine visit.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | cvb.accessory.pneumatic-controller (introduces) | 43 | role: mechanism · level: understand |
| 2 | cvb.accessory.position-transmitter (introduces) | 44 | role: contrast · level: understand |
| 3 | cvb.safety.solenoid-valve-types (introduces) | 45 | role: contrast · level: understand |
| 4 | **→ Activity — SOV Actuation ID** | — | small-group · 15 min — Given labelled photos of a direct-acting and a pilot-operated solenoid valve, plus the 3-port/4-port schematic symbols, identify actuation type and port count for each. |
| 5 | cvb.safety.voting-architecture (introduces) | 46 | role: application · level: understand |
| 6 | cvb.safety.trip-and-manual-override (introduces) | 47 | role: nomenclature · level: remember |
| 7 | Check — knowledge check | 48 | — |
