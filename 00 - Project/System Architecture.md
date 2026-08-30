---
title: System Architecture & Next-Phase Directive
type: reference
tags:
  - project
  - architecture
  - decisions
updated: 2026-08-31
---

# Emerson Workbench — System Architecture & Next-Phase Directive

*Captured 2026-08-30. This document defines the four architectural layers of the Emerson Workbench system, and sets the sequencing decision for what comes after chapter 2.*

## Why this document exists

Today's session revealed a recurring confusion: process gaps discovered while polishing the pilot course (layer 2) were being treated as one-off slide fixes, when they were actually **pipeline specification gaps** (layer 3/4). Every fix should be asked: *does this belong in the pipeline's rules, or is it a one-time correction to this specific course's content?* This document exists so that question has a clear frame to be answered against, and so the next phase of work is explicit rather than assumed.

---

## Layer 1 — Emerson Workbench (Home)

The top-level landing location that houses **every** Educational Services course, not just the pilot. Not yet built.

- Entry point for any course
- Departmental branding / ownership home

## Layer 2 — Workshop (Course Shell)

The reusable course-level LMS layout: navigation, templates, context pane, presenter mode, source library access. **This is what has been built and refined so far** — nav structure, day/chapter/module hierarchy, the four reusable slide templates, day-intro and chapter-intro cards, presenter mode.

- One Workshop instance = one course, rendered and navigable
- Any Cartridge (layer 3) loads into a Workshop
- Structurally locked in as of this session. Considered proven: chapter 2's modules are validated and functioning correctly against the templates, callout style, and checklist. Remaining work is finishing out the last few chapter 2 modules, not further structural changes.

## Layer 3 — Cartridge

The actual content package for a single course — the output of running a legacy course through the Pipeline (layer 4). A Cartridge is what plugs into a Workshop.

- Not yet formally separated as a distinct artifact — currently, cartridge content and Workshop shell are being edited together in the same live nav, which is a known source of thrash/overhead
- Future direction: author and QA a Cartridge's content as a standalone unit against the pipeline checklist, *then* integrate into the Workshop as a discrete step — reduces the need to touch live nav for every content fix
- This separation is **not** being built yet — see sequencing decision below

## Layer 4 — Pipeline Console

A dedicated interface (likely HTML-based) for running and managing course conversions — legacy PowerPoint in, Cartridge out. Not yet built; currently the "pipeline" is really just a set of conventions ([[Course Porting Pipeline]], the 5-stage process, the 4-part slide pass) being executed via chat instructions to Claude Code.

**Target capabilities:**
- Drag-and-drop a legacy PPT course in to start a conversion
- Visible pipeline stages/checkpoints (initial conversion → source cross-reference → 4-part slide pass → QA), matching the existing pipeline stages
- Checkbox-based review at each checkpoint — flag a slide for rework by checking a box and adding a comment, rather than typing out a fresh explanation from scratch each time. Comments across all flagged slides in a pass should be collated into one batch before being handed to Claude, so a full rework pass runs against all flagged items and their comments together, rather than one at a time.
- **Multi-project state**: each course conversion is its own saved, resumable project — pause one course's conversion at any checkpoint, start or resume a different course's conversion, come back later with all flags/state intact
- This is the layer where "QA-ing the pipeline" should actually happen — right now that QA is happening informally inside Layer 2, which is why pipeline gaps and course-specific fixes have been getting conflated

---

## Current state summary (as of this session)

| Layer | Status |
|---|---|
| 1. Workbench Home | Not started |
| 2. Workshop (course shell) | Built and structurally locked in; proven against real chapter 2 content |
| 3. Cartridge | Not yet separated as a distinct artifact; currently entangled with Workshop editing |
| 4. Pipeline Console | Not built; pipeline currently exists as documented conventions run via chat |

## Working principle going forward

When something goes wrong during course work, ask first: **is this a one-time content fix, or a gap in the pipeline's rules/checklist?** If it's the latter, it belongs in the pipeline documentation (layer 3/4 concern) before it's applied as a fix to the current slide (layer 2 instance of that fix) — not the other way around.

---

## Sequencing decision — next phase

The Workshop (layer 2) is considered proven: chapter 2's finished modules have no outstanding issues and validate the nav, templates, callout style, and checklist under real content. Building the Pipeline Console (layer 4) now, before chapter 2 is finished, risks building interface and state-management infrastructure around a pipeline that's still visibly changing shape.

**Decision: finish chapter 2 as currently scoped first — the remaining modules only, no further structural changes to the Workshop — then begin the Pipeline Console as the next major phase of work.**

Do not begin console/interface work, and do not start scoping the Cartridge/Workshop separation, until chapter 2's remaining modules are complete and verified. Continue applying the existing checklist and pipeline conventions (source-check-before-hand-tuning, browser verification reserved for the Part 4 polish gate) to close out chapter 2. Once that's done, we'll return to this document to scope the Pipeline Console build.

### Handling rework requests while finishing chapter 2

Any rework request made from this point forward — while closing out the remaining chapter 2 modules — must first be evaluated as a potential pipeline gap, not just fixed as a one-off correction to that slide. Concretely:

1. When a rework request comes in, determine whether the underlying issue is something the pipeline's rules, templates, or checklist should have already caught or prevented.
2. If so, update the relevant pipeline documentation ([[Course Porting Pipeline]], the pre-send checklist, or this architecture doc) with the rule or check that would catch it going forward, *before* or alongside applying the fix to the current slide.
3. Only after the pipeline itself has been strengthened should the fix be applied to the slide at hand, as the first instance of that now-codified rule — not as an isolated patch.

The goal is that by the time chapter 2 is finished, the checklist and pipeline conventions have absorbed everything learned from this course's rework requests, so that when a legacy PPT course is run through the pipeline in the future, as few of these same issues as possible need to be caught and requested again. Rework requests during this phase are pipeline QA, not just slide fixes — treat them accordingly.
