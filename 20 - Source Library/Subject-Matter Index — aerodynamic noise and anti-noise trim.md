---
title: Subject-Matter Index — aerodynamic noise and anti-noise trim
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
  - topic-driven
topic: "Control valve aerodynamic noise, and the trim that reduces it"
updated: 2026-10-14
status: drafted 2026-10-14 — NOT yet reviewed
---

# Teaching-Subject-Matter Index — Topic: Aerodynamic Noise and Anti-Noise Trim

**Why this exists.** Whisper came up in conversation before anything in the
vault could answer it properly. This is the sourced spine for that answer, and
for the noise work later in the build.

Built topic-driven rather than from a deck, in the manner of
`Subject-Matter Index — bench-set-657.md`.

## What was read, and what was not

| Source | Read | Not read |
|---|---|---|
| Control Valve Handbook, Sixth Edition | §5.15–5.16, printed pp. 132–135, in full | the rest of ch5, indexed separately |
| `IEC 60534-8-3` Ed. 3.0 (2010-11) | title page and full contents, pp. 1–4 | **every equation** — clause titles only |
| Emerson `GB109 Control Valve Noise Basics` | cover, agenda, slide 24 | slides 3–23, 25–35 |

**Nothing here may be used to implement a prediction method.** The clause map
says where the method lives; it does not reproduce it. See
`Standards/iec-60534.md` for the licence terms.

## The spine

Noise control is **source treatment, path treatment, or both**. The Handbook
frames the whole subject that way, and it is the right first cut for teaching
because it separates making less noise from letting less of it out.

Everything anti-noise trim does sits on the **source** side.

## Entries

```yaml
id: noise-cmp-transmission-path
teaches: >
  Noise reaches a listener by a three-step path — fluid-borne noise inside the
  pipe shakes the inner wall, the vibration crosses the wall, the outer wall
  drives the air. Every step is frequency dependent, which is why the method
  works in spectra rather than single numbers.
concept-tags: [noise transmission, pipe wall, transmission loss, frequency spectrum]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.15, printed p. 132"
delivery: prose; no figure needed
used-by: []
notes: This is what makes pipe schedule a noise variable and not only a pressure one.
```

```yaml
id: noise-cmp-source-vs-path
teaches: >
  The two families. Source treatment prevents or attenuates noise where it is
  made, and is preferred wherever it is economically and physically feasible.
  Path treatment raises the impedance of the route to the listener. Anti-noise
  trim is source treatment.
concept-tags: [source treatment, path treatment, noise control strategy]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.16, printed pp. 132 and 134"
delivery: prose; a two-branch diagram would earn its place
used-by: []
```

```yaml
id: noise-cmp-many-slot-cage
teaches: >
  The first cage-style source treatment — a cage with many narrow parallel
  slots, shaped to minimise turbulence and give a favourable velocity
  distribution in the expansion area. Economical, and worth 15 to 20 dBA with
  little or no loss of flow capacity.
concept-tags: [anti-noise trim, drilled cage, multipath, source treatment]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.16, printed p. 133; Figure 5.10 upper view, p. 132"
  - doc: IEC 60534-8-3
    locator: "Clause 6.2, single stage, multiple flow passage trim"
delivery: existing figure — see ch5 index id cvh-cmp-noise-reduction-trim-photo
used-by: []
notes: >
  The capacity claim is the commercially interesting half. Cross-referenced to
  the ch5 entry rather than minting a duplicate figure record.
```

```yaml
id: noise-cmp-two-stage-cage
teaches: >
  The second cage-style treatment — two-stage, for high pressure drop ratios
  (dP/P1). Worth as much as 30 dBA. The design constraint is the teaching
  point: restrictions must be sized and spaced in the primary cage wall so the
  noise from jet interaction does not exceed the sum of the individual jets.
  Staging is not free; done carelessly it makes noise back.
concept-tags: [anti-noise trim, multistage, jet interaction, pressure drop ratio]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.16, printed pp. 133–134; Figure 5.10 lower view, p. 132"
  - doc: IEC 60534-8-3
    locator: "Clause 6.3, single flow path, multistage pressure reduction trim"
delivery: existing figure — see ch5 index id cvh-cmp-noise-reduction-trim-photo
used-by: []
```

```yaml
id: noise-cmp-six-strategies
teaches: >
  What a full anti-noise design combines, worth up to 40 dBA together — passage
  shape that converts less stream power into noise power; multistage pressure
  reduction dividing the power between stages; frequency spectrum shifting that
  moves energy out of the audible range by exploiting the pipe transmission
  loss; exit jet independence preventing regeneration by jet coalescence;
  velocity management with expanding areas for the expanding gas; and
  complementary body design keeping flow off the body wall.
concept-tags: [anti-noise trim, multistage, spectrum shifting, jet coalescence, velocity management]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.16, printed p. 134 — the six-item list"
delivery: the six as a built list; this is the core slide
used-by: []
notes: >
  The central entry. Each item is a distinct physical mechanism, not marketing
  copy: three reduce generation, one prevents regeneration, one manages
  expansion, one removes a secondary source.
```

```yaml
id: noise-cmp-diffuser-series-restriction
teaches: >
  Above a pressure drop ratio of about 0.8, splitting the drop between the
  valve and a fixed restriction downstream becomes effective. A diffuser must
  be shaped and sized for its installation so that valve noise and diffuser
  noise come out equal — otherwise one of them simply becomes the new source.
concept-tags: [diffuser, series restriction, pressure drop ratio]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.16, printed p. 134; Figure 5.11 valve and inline diffuser"
delivery: existing figure (crop)
used-by: []
```

```yaml
id: noise-cmp-vent-diffuser
teaches: >
  Systems venting to atmosphere are loud because both pressure ratio and exit
  velocity are high. Dividing the drop between the vent and an upstream control
  valve with a vent diffuser quietens both, and a properly sized combination can
  take as much as 40 dBA off the system.
concept-tags: [vent diffuser, atmospheric vent, exit velocity, system noise]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.16, printed p. 134; Figure 5.12 valve and vent diffuser"
delivery: existing figure (crop)
used-by: []
```

```yaml
id: noise-cmp-liquid-is-a-different-problem
teaches: >
  For liquids, source treatment means eliminating or minimising cavitation
  rather than managing jets. Because cavitating conditions can be predicted, the
  noise can be designed out by limiting service conditions — break-down
  orifices, valves in series — or by trim using the series-restriction concept.
  Hydrodynamic noise is traditionally described as rocks flowing in the pipe.
concept-tags: [hydrodynamic noise, cavitation, liquid service, series restriction]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.15.2, printed p. 132; §5.16, printed p. 134; Figure 5.13"
delivery: prose plus existing figure
used-by: []
notes: >
  Scope discipline: aerodynamic and hydrodynamic noise are different mechanisms
  under different standards — IEC 60534-8-3 and -8-4. Do not let a course blur
  them.
```

```yaml
id: noise-cmp-path-treatment
teaches: >
  The second family. Dissipating acoustic energy with absorbent material is
  among the most effective path treatments, and it belongs in the flow stream at
  or immediately downstream of the source. In gas systems inline silencers
  dissipate noise within the stream, which also keeps it off the solid
  boundaries.
concept-tags: [path treatment, acoustic absorbent, inline silencer]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "§5.16, printed pp. 134–135; Figure 5.14 inline silencer"
delivery: existing figure (crop)
used-by: []
```

```yaml
id: noise-cmp-iec-seven-steps
teaches: >
  The shape of the prediction method as Emerson teaches it — determine acoustic
  power and peak frequency at the trim; calculate the internal sound pressure
  spectrum; repeat for the valve outlet as a second source; add the two internal
  spectra; calculate the pipe transmission loss spectrum; subtract it for the
  external spectrum; sum across frequency for the overall external sound
  pressure.
concept-tags: [noise prediction, IEC method, acoustic power, transmission loss, sound pressure level]
status: current
source:
  - doc: Emerson GB109 Control Valve Noise Basics
    locator: "slide 24, Noise Prediction Methodology — cites IEC 60534-8-3"
  - doc: IEC 60534-8-3
    locator: "Clauses 5.3–5.6; flow chart at 5.7"
delivery: the seven steps as a sequence graphic
used-by: []
notes: >
  Teach the SHAPE from here. The equations stay in the standard. GB109 slide 29
  carries a worked numeric example and is the natural grading target for any
  implementation.
```

## Where this leaves the answer

The honest short version, fully sourced above: **anti-noise trim is source
treatment.** It works by letting the gas down through many small independent
passages instead of one large one, and where the drop is severe, through
several stages in series.

Many passages keeps each jet small and shifts the sound toward frequencies the
pipe wall absorbs better. Staging divides the stream power so less of it
converts to sound at all. Keeping the jets independent stops them merging back
into one large source.

Fifteen to twenty dBA for the simple many-slot cage with effectively no
capacity penalty; up to thirty for two-stage; up to forty once the whole set of
strategies is combined.

## What this deliberately does not contain

- **Any equation.** See the reading table.
- **Whisper generation names and their differences.** The Handbook teaches the
  mechanisms generically. Product-level distinctions live in Fisher catalogue
  and bulletin literature not yet read for this topic.
- **Clause 6.4**, multipath multistage — the class the most capable anti-noise
  trim belongs to. Named in the clause map, not yet studied.
- **Clause 8**, experimentally determined acoustical efficiency factors — where
  measured manufacturer data replaces the generic method, and commercially the
  most interesting clause in the standard.

## Next

1. Read the Sourcebook noise chapters for product-level material.
2. Have it reviewed on the Marshalltown side before it teaches anyone anything.
