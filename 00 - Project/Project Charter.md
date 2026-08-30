---
title: Project Charter
type: reference
tags:
  - project
updated: 2026-08-28
---

# Emerson Workbench — Project Charter

> [!note] Source
> This note is the initial project scope as provided at kickoff. Keep it as the
> canonical statement of intent; working detail belongs in [[Roadmap]] and the
> individual course/source notes.

## Overview

Emerson Workbench is a department-level operational LMS intended to house all
Emerson Educational Services course content in one location. It replaces the
current model of heavy, drift-prone PowerPoint decks (100–300+ slides) paired
with separate Word-based instructor and student guides.

## Course content structure

- **Bench Notes** — Instructor guide
- **Bench Book** — Student guide
- Content will live in Markdown rather than PowerPoint/Word as the primary
  authoring format.

See [[Glossary]] for definitions.

## Current problem

- Course content lives in large PowerPoint decks (100–300+ slides).
- Instructor and student guides are separate documents that drift out of sync.
- Heavy to edit and maintain across formats.

## Source document library

Emerson Workbench will also host a repository of primary source materials used
across courses (see [[Source Library]]):

- [[Emerson Control Valve Handbook]]
- [[Industry Handbooks]]
- [[Technical Publications]]

## Project stages

Full detail in [[Roadmap]].

### Stage 1 — Status Quo Transfer (Pilot)

- Course: [[1400 — Course Home|1400 Valve Trim and Body Maintenance]]
- Goal: convert the existing PowerPoint deck into an HTML presentation artifact.
- Maintain the current look and feel of the PowerPoint — no redesign yet.
- Deliverable: a working Emerson Workbench "class" that any instructor can open
  and present from.

### Stage 2 — Curriculum Migration + AI Implementation

- Migrate the full curriculum into the Markdown-based structure.
- Not a status quo copy — use AI implementation to change the editing workflow.
- Edits to source content should push updates out to the specific
  courses/modules that use them, eliminating drift between instructor and
  student materials.
- Build out Bench Notes / Bench Book generation from shared source content.
- Integrate the source document library (handbooks, technical publications).

### Stage 3 — Process Control Integration

- Explore controlling the classroom environment from a process control
  perspective.
- Potential ability to send 4–20 milliamp signals.
- Potential integration with a loop calibrator to help control a valve during
  diagnostics.
- Use case: replicate specific issues/failure scenarios live in the classroom.

## Open questions / to define later

Tracked and expanded in [[Open Questions]].

- Technical stack for HTML rendering of Markdown course content.
- How the AI-assisted authoring workflow will detect/push source content changes.
- Hardware/software requirements for Stage 3 process control integration.
