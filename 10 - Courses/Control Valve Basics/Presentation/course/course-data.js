window.EW_COURSE = {
  "course": {
    "code": "CVB",
    "title": "Control Valve Basics",
    "summary": "An introductory, recognition-level course on control valve, actuator, and accessory fundamentals, taught in Steve's requested order — Introduction to Control Valves, Valve and Actuator Types, Control Valve Accessories, then Control Valve Performance — drawn from the Control Valve Handbook, 6th ed. Not a maintenance-procedure course (that is 14101's job); this one is about recognizing and explaining hardware and performance concepts.",
    "footer": "© Emerson Educational Services, 2026  ·  Emerson Confidential",
    "domain": "product-literacy",
    "tier": "introductory"
  },
  "slideBase": "../build/slides/",
  "slidePrefix": "cvb-",
  "_note": "Stage 1 ORIGINATION at ARC SCALE (buildStage1OriginateArcPrompt), run by hand 2026-09-11 as the Phase 1 review-checkpoint proving-ground — see PipelineConsole 'Real reviewable outputs at Stage 1 and Stage 2' discussion. Scope is bounded to Steve's four requested Control Valve Handbook chapters (1, 3, 4, 2, in that teaching order — a real reordering of the source book's own 1-2-3-4 sequence, since Steve wants valve/actuator types and accessories taught before the performance chapter that assumes familiarity with both), not the whole 15-chapter book. Course-chapter ids below (cvb-ch1..cvb-ch4) are this course's own teaching order and do NOT match CVH's chapter numbers 1:1 — cvb-ch2 = CVH ch3, cvb-ch3 = CVH ch4, cvb-ch4 = CVH ch2; see each chapter's own note for its real source chapter. No real schedule (day count, minutesTarget) exists yet for this course — Steve specified the four chapters and their order, nothing about duration — so this arc is built as a single placeholder Day 1 holding all four chapters, using the generic slide-count/module budget (the schema's own honest fallback for 'no real number yet'; see curriculum-development.md 'minutesTarget'). This is intentionally NOT a final schedule; it should be split into real teaching sessions once Steve supplies one. Domain 'product-literacy' is a new addition to instructional-design.js's DOMAIN_VERBS (recognition-level identify/explain/select vocabulary) — none of the three existing technical domains (maintenance, instrumentation, selection-sizing) fit an overview/recognition course with no hands-on procedure, wiring, or sizing-calculation content; same kind of gap the 'ife' domain filled for the Five Tenets pilot. Every keyConcepts slot cites real Control Valve Handbook figures already catalogued in the four Component Index files built as this run's Phase 0 precondition (Component Index — Control Valve Handbook ch1/ch2/ch3/ch4.md) — no invented facts, no figure not already verified against the source PDF. Several competency ids are deliberately reused across chapters with progression 'develops' where the SAME skill is taught again with new depth (e.g. cvb.intro.body-style-variants, cvb.intro.bonnet-packing-arrangement, cvb.intro.actuator-types, cvb.characteristic.inherent-curves, cvb.performance.deadband) — never a fresh id for the same skill twice, per the arc-scale prompt's own rule. Deliberately left out of this Basics cut, named rather than silently dropped: the deep VOC/LDAR measurement-frequency and ISO 15848-1/FCI 91-1 leakage-class regulatory tables (ch2's packing chapter catalogues 5 such figures; only 2 are cited here as an awareness-level touch), the redundant-SOV and three-way-manual-reset/manifold hardware variants in the accessories chapter (cvh-cmp-4.21/4.22/4.23), and the SIS partial-stroke-testing DVC figure (cvh-cmp-4.9) — all judged too deep/niche for an intro course, all real catalogued components a future advanced course could pull from directly. keyConcepts are SLOTS ONLY at this stage (competencyId/progression/role/level/pages) — no 't' prose, no 'sources', no 'template'; those are Stage 2's job, not yet run. Stage 1 Outline doc: 'Stage 1 Outline — Control Valve Basics.md', generated from this file.",
  "days": [
    {
      "id": "d1",
      "num": 1,
      "title": "Day 1 — Control Valve Basics (placeholder — no real schedule yet)",
      "chapters": [
        {
          "id": "cvb-ch1",
          "title": "Introduction to Control Valves",
          "num": 1,
          "domain": "product-literacy",
          "_source": "Control Valve Handbook ch1 — see Component Index — Control Valve Handbook ch1.md",
          "modules": [
            {
              "id": "cvb-ch1-m1",
              "title": "Sliding-Stem Valve Anatomy",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "understand",
              "stakes": "A technician who can't name a valve's parts can't read a parts list, order the right seal kit, or follow a maintenance procedure written against that nomenclature.",
              "objective": "Identify a sliding-stem control valve's major parts from a cutaway or photo, and name its body-style, bonnet, and actuator variations.",
              "buildsOn": [],
              "keyConcepts": [
                { "competencyId": "cvb.intro.feedback-loop", "progression": "introduces", "role": "prime", "level": "understand", "pages": [1] },
                { "competencyId": "cvb.intro.sliding-stem-overview", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [2] },
                { "competencyId": "cvb.intro.sliding-stem-parts", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [3] },
                { "competencyId": "cvb.intro.body-style-variants", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [4] },
                { "competencyId": "cvb.intro.bonnet-packing-arrangement", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [5] },
                { "competencyId": "cvb.intro.actuator-types", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [6] }
              ],
              "activities": [
                {
                  "id": "cvb-ch1-m1-act1",
                  "type": "small-group",
                  "afterConcept": 5,
                  "minutes": 15,
                  "title": "Parts Walk",
                  "description": "In small groups at a real bench-mounted sliding-stem valve/actuator assembly (or a cutaway training aid), name each labelled part — body, bonnet, packing, actuator casing, spring, stem — checking against the exploded and cutaway figures just taught.",
                  "materials": ["A real sliding-stem valve/actuator on the bench, or a cutaway training aid", "Figures 1.3, 1.6, 1.9 printed as a job aid"],
                  "sourceNote": "Grounded in the exploded/cutaway figures just taught (cvh-cmp-sliding-stem-exploded, cvh-cmp-bonnet-assembly, cvh-cmp-direct-acting-actuator) — a live application of what was just shown, not an invented scenario."
                }
              ],
              "pages": [1, 2, 3, 4, 5, 6],
              "check": [7]
            },
            {
              "id": "cvb-ch1-m2",
              "title": "Rotary Valves & Flow Characteristics",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "analyze",
              "stakes": "Specifying the wrong flow characteristic for a control loop causes a valve that's twitchy near shutoff or sluggish near full-open — a loop-tuning problem that traces back to a valve-selection decision, not the controller.",
              "objective": "Identify a rotary control valve's closure-member types and actuator, and explain how closure-member shape and cage design set a valve's inherent flow characteristic.",
              "buildsOn": [],
              "keyConcepts": [
                { "competencyId": "cvb.rotary.overview", "progression": "introduces", "role": "prime", "level": "understand", "pages": [8] },
                { "competencyId": "cvb.rotary.closure-members", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [9] },
                { "competencyId": "cvb.rotary.actuator-mechanism", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [10] },
                { "competencyId": "cvb.characteristic.cage-shape", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [11] },
                { "competencyId": "cvb.characteristic.inherent-curves", "progression": "introduces", "role": "application", "level": "analyze", "pages": [12] },
                { "competencyId": "cvb.performance.deadband", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [13] }
              ],
              "activities": [
                {
                  "id": "cvb-ch1-m2-act1",
                  "type": "small-group",
                  "afterConcept": 4,
                  "minutes": 15,
                  "title": "Characteristic Match",
                  "description": "Given three short process scenarios (a tight on/off-style isolation duty, a constant-gain flow loop, a large-rangeability blending duty), match each to the inherent flow characteristic (quick-opening, linear, equal-percentage) that fits, using the inherent-characteristics curve.",
                  "materials": ["Figure 1.19 inherent-characteristics graph, printed", "Three scenario cards"],
                  "sourceNote": "Directly built on the inherent-characteristics curve and cage-shape mechanism just taught (cvh-cmp-inherent-characteristics-graph, cvh-cmp-cage-types) — applies the real curve, not an invented rule of thumb."
                }
              ],
              "pages": [8, 9, 10, 11, 12, 13],
              "check": [14]
            }
          ]
        },
        {
          "id": "cvb-ch2",
          "title": "Valve and Actuator Types",
          "num": 2,
          "domain": "product-literacy",
          "_source": "Control Valve Handbook ch3 — see Component Index — Control Valve Handbook ch3.md",
          "modules": [
            {
              "id": "cvb-ch2-m1",
              "title": "Body Styles & End Connections",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "apply",
              "stakes": "Body style sets a valve's pressure-drop capability, noise/cavitation resistance, and maintainability — picking the wrong one for the service means re-specifying (and re-buying) the valve later.",
              "objective": "Distinguish globe and rotary valve body styles by construction and typical service, and identify the two standard end-connection types.",
              "buildsOn": ["cvb-ch1-m1", "cvb-ch1-m2"],
              "keyConcepts": [
                { "competencyId": "cvb.bodystyle.globe-variants", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [15] },
                { "competencyId": "cvb.intro.body-style-variants", "progression": "develops", "role": "application", "level": "understand", "pages": [16] },
                { "competencyId": "cvb.intro.body-style-variants", "progression": "develops", "role": "application", "level": "understand", "pages": [17] },
                { "competencyId": "cvb.rotary.closure-members", "progression": "develops", "role": "contrast", "level": "understand", "pages": [18] },
                { "competencyId": "cvb.rotary.closure-members", "progression": "develops", "role": "contrast", "level": "understand", "pages": [19] },
                { "competencyId": "cvb.bodystyle.special-purpose", "progression": "introduces", "role": "application", "level": "apply", "pages": [20] },
                { "competencyId": "cvb.bodystyle.end-connections", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [21] }
              ],
              "activities": [
                {
                  "id": "cvb-ch2-m1-act1",
                  "type": "small-group",
                  "afterConcept": 4,
                  "minutes": 15,
                  "title": "Body Style ID",
                  "description": "Sort a mixed set of real valve photos/cutaways (globe: single-ported, double-ported, cage-style; rotary: butterfly, ball, eccentric plug) by body-style family and name the family's typical service advantage.",
                  "materials": ["Body-style figures from Batch 1, printed as sorting cards"],
                  "sourceNote": "Directly built on the body-style construction figures just taught in this module."
                }
              ],
              "pages": [15, 16, 17, 18, 19, 20, 21],
              "check": [22]
            },
            {
              "id": "cvb-ch2-m2",
              "title": "Bonnets, Packing & Environmental Sealing",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "evaluate",
              "stakes": "Picking the wrong packing system for a VOC-regulated or cryogenic service means a fugitive-emissions failure discovered on an audit, not on the bench.",
              "objective": "Identify bonnet and packing-system variants, and select an appropriate packing system for a given service and emissions requirement.",
              "buildsOn": ["cvb-ch1-m1"],
              "keyConcepts": [
                { "competencyId": "cvb.sealing.bonnet-types", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [23] },
                { "competencyId": "cvb.sealing.bellows-bonnet", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [24] },
                { "competencyId": "cvb.intro.bonnet-packing-arrangement", "progression": "develops", "role": "contrast", "level": "understand", "pages": [25] },
                { "competencyId": "cvb.sealing.environmental-packing", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [26] },
                { "competencyId": "cvb.sealing.packing-selection", "progression": "introduces", "role": "application", "level": "evaluate", "pages": [27] },
                { "competencyId": "cvb.sealing.emissions-standards-awareness", "progression": "introduces", "role": "caution", "level": "understand", "pages": [28] }
              ],
              "activities": [
                {
                  "id": "cvb-ch2-m2-act1",
                  "type": "small-group",
                  "afterConcept": 4,
                  "minutes": 18,
                  "title": "Packing Selection Case",
                  "description": "Given three real service scenarios (general-purpose hydrocarbon, VOC-regulated process, cryogenic), select an appropriate packing system and justify the choice against the selection figures just taught.",
                  "materials": ["Packing-selection figures, printed", "Three service-scenario cards"],
                  "sourceNote": "Directly built on the selection-by-service figures just taught (cvh-cmp-sliding-stem-environmental-packing-selection, cvh-cmp-rotary-environmental-packing-selection)."
                }
              ],
              "pages": [23, 24, 25, 26, 27, 28],
              "check": [29]
            },
            {
              "id": "cvb-ch2-m3",
              "title": "Flow Characterization, Trim & Actuator Variety",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "understand",
              "stakes": "Misreading which characteristic a trim actually delivers, or which actuator type is installed, means the wrong replacement part gets ordered or the wrong control behavior gets expected from the loop.",
              "objective": "Explain how cage and plug contour shape a valve's flow characteristic, and identify actuator variants beyond the basic spring-and-diaphragm and piston types.",
              "buildsOn": ["cvb-ch1-m1", "cvb-ch1-m2"],
              "keyConcepts": [
                { "competencyId": "cvb.characteristic.inherent-curves", "progression": "develops", "role": "mechanism", "level": "understand", "pages": [30] },
                { "competencyId": "cvb.characteristic.contoured-plug", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [31] },
                { "competencyId": "cvb.trim.guiding-and-capacity", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [32] },
                { "competencyId": "cvb.intro.actuator-types", "progression": "develops", "role": "mechanism", "level": "understand", "pages": [33] },
                { "competencyId": "cvb.intro.actuator-types", "progression": "develops", "role": "mechanism", "level": "understand", "pages": [34] },
                { "competencyId": "cvb.actuator.manual-electric", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [35] }
              ],
              "activities": [
                {
                  "id": "cvb-ch2-m3-act1",
                  "type": "discussion",
                  "afterConcept": 2,
                  "minutes": 12,
                  "title": "Characteristic Selection",
                  "description": "Given a process scenario (e.g. a valve that must hold near-constant gain across a wide travel range vs. one needing tight shutoff-adjacent control), discuss whether a cage-characterized, contoured-plug, or quick-opening trim fits best, and why.",
                  "materials": ["Inherent-characteristic and contoured-plug figures, printed"],
                  "sourceNote": "Built directly on the characterization figures just taught (cvh-cmp-inherent-flow-characteristic-curves, cvh-cmp-plug-contour-flow-characterization)."
                }
              ],
              "pages": [30, 31, 32, 33, 34, 35],
              "check": [36]
            }
          ]
        },
        {
          "id": "cvb-ch3",
          "title": "Control Valve Accessories",
          "num": 3,
          "domain": "product-literacy",
          "_source": "Control Valve Handbook ch4 — see Component Index — Control Valve Handbook ch4.md",
          "modules": [
            {
              "id": "cvb-ch3-m1",
              "title": "Positioners, Transducers & Boosters",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "understand",
              "stakes": "A tech who can't tell a positioner from a transducer from a booster can't explain why a valve isn't reaching command, or which accessory to check first.",
              "objective": "Identify a positioner, digital valve controller, I/P transducer, and volume booster, and explain each one's role in getting a command signal to the valve stem.",
              "buildsOn": [],
              "keyConcepts": [
                { "competencyId": "cvb.accessory.positioner-mechanism", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [37] },
                { "competencyId": "cvb.accessory.analog-ip-positioner", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [38] },
                { "competencyId": "cvb.accessory.digital-valve-controller", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [39] },
                { "competencyId": "cvb.accessory.ip-transducer", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [40] },
                { "competencyId": "cvb.accessory.volume-booster", "progression": "introduces", "role": "application", "level": "understand", "pages": [41] }
              ],
              "activities": [
                {
                  "id": "cvb-ch3-m1-act1",
                  "type": "case-walkthrough",
                  "afterConcept": 4,
                  "minutes": 15,
                  "title": "Signal Path Trace",
                  "description": "Given a real assembled valve/actuator/DVC photo, trace the signal path from the control-room command to stem motion, naming each accessory (positioner or transducer, booster if present) and what it does at each hop.",
                  "materials": ["Assembled valve/actuator/DVC photo, printed (Figure 4.4)"],
                  "sourceNote": "Grounded directly in the digital-valve-controller and booster-installation figures just taught (cvh-cmp-4.4, cvh-cmp-4.7, cvh-cmp-4.8)."
                }
              ],
              "pages": [37, 38, 39, 40, 41],
              "check": [42]
            },
            {
              "id": "cvb-ch3-m2",
              "title": "Controllers, Position Feedback & Safety Accessories",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "understand",
              "stakes": "Confusing a spring-return SOV for a double-acting one, or not recognizing a trip valve's tripped state, means a safety-shutdown component gets mishandled during a routine visit.",
              "objective": "Identify a pneumatic controller's role as a standalone local controller, and distinguish solenoid-valve types and safety-accessory hardware used in a safety instrumented system.",
              "buildsOn": ["cvb-ch3-m1"],
              "keyConcepts": [
                { "competencyId": "cvb.accessory.pneumatic-controller", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [43] },
                { "competencyId": "cvb.accessory.position-transmitter", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [44] },
                { "competencyId": "cvb.safety.solenoid-valve-types", "progression": "introduces", "role": "contrast", "level": "understand", "pages": [45] },
                { "competencyId": "cvb.safety.voting-architecture", "progression": "introduces", "role": "application", "level": "understand", "pages": [46] },
                { "competencyId": "cvb.safety.trip-and-manual-override", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [47] }
              ],
              "activities": [
                {
                  "id": "cvb-ch3-m2-act1",
                  "type": "small-group",
                  "afterConcept": 2,
                  "minutes": 15,
                  "title": "SOV Actuation ID",
                  "description": "Given labelled photos of a direct-acting and a pilot-operated solenoid valve, plus the 3-port/4-port schematic symbols, identify actuation type and port count for each.",
                  "materials": ["Figures 4.14, 4.15, 4.17, 4.18, printed"],
                  "sourceNote": "Directly built on the SOV figures just taught (cvh-cmp-4.14, cvh-cmp-4.15, cvh-cmp-4.17, cvh-cmp-4.18)."
                }
              ],
              "pages": [43, 44, 45, 46, 47],
              "check": [48]
            }
          ]
        },
        {
          "id": "cvb-ch4",
          "title": "Control Valve Performance",
          "num": 4,
          "domain": "product-literacy",
          "_source": "Control Valve Handbook ch2 — see Component Index — Control Valve Handbook ch2.md",
          "modules": [
            {
              "id": "cvb-ch4-m1",
              "title": "Why Performance Varies — Variability, Deadband & Response",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "analyze",
              "stakes": "A tech who reads 'the valve is slow' as one problem misses that deadband, response time, and installed gain are three separate, separately-fixable causes — with three different remedies.",
              "objective": "Explain process variability as a measure of loop performance, and trace deadband, response time, and installed gain as the design factors that cause it.",
              "buildsOn": ["cvb-ch1-m2", "cvb-ch2-m1"],
              "keyConcepts": [
                { "competencyId": "cvb.performance.process-variability", "progression": "introduces", "role": "prime", "level": "understand", "pages": [49] },
                { "competencyId": "cvb.performance.test-loop", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [50] },
                { "competencyId": "cvb.performance.deadband", "progression": "develops", "role": "mechanism", "level": "understand", "pages": [51] },
                { "competencyId": "cvb.performance.response-time", "progression": "introduces", "role": "application", "level": "understand", "pages": [52] },
                { "competencyId": "cvb.performance.installed-gain", "progression": "introduces", "role": "mechanism", "level": "analyze", "pages": [53] },
                { "competencyId": "cvb.bodystyle.control-range-by-style", "progression": "introduces", "role": "application", "level": "analyze", "pages": [54] }
              ],
              "activities": [
                {
                  "id": "cvb-ch4-m1-act1",
                  "type": "discussion",
                  "afterConcept": 5,
                  "minutes": 15,
                  "title": "Performance Read",
                  "description": "Read a real installed-gain graph and a valve-style-comparison graph, and predict which of two valve styles gives the better control range for a stated service.",
                  "materials": ["Figures 2.5, 2.6, printed"],
                  "sourceNote": "Built directly on the installed-gain and valve-style-comparison graphs just taught (cvh-cmp-installed-characteristic-and-gain, cvh-cmp-valve-style-control-range-comparison)."
                }
              ],
              "pages": [49, 50, 51, 52, 53, 54],
              "check": [55]
            },
            {
              "id": "cvb-ch4-m2",
              "title": "Proving Performance — Economics & the Signature Series",
              "status": "outline",
              "domain": "product-literacy",
              "levelTarget": "evaluate",
              "stakes": "Without a Signature Series baseline, rising friction in a valve looks like normal wear until it's already a control problem — the baseline is what turns 'it seems sluggish' into a measured, defensible finding.",
              "objective": "Explain how a Signature Series factory test establishes a performance baseline, and justify replacing a valve on economic grounds using that baseline.",
              "buildsOn": ["cvb-ch4-m1"],
              "keyConcepts": [
                { "competencyId": "cvb.performance.economics-of-control", "progression": "introduces", "role": "application", "level": "evaluate", "pages": [56] },
                { "competencyId": "cvb.performance.signature-series-testing", "progression": "introduces", "role": "mechanism", "level": "understand", "pages": [57] },
                { "competencyId": "cvb.performance.signature-diagnosis", "progression": "introduces", "role": "application", "level": "apply", "pages": [58] },
                { "competencyId": "cvb.performance.valvelink-interface", "progression": "introduces", "role": "nomenclature", "level": "remember", "pages": [59] }
              ],
              "activities": [
                {
                  "id": "cvb-ch4-m2-act1",
                  "type": "application-exercise",
                  "afterConcept": 2,
                  "minutes": 15,
                  "title": "Signature Read",
                  "description": "Given the original-vs-new signature overlay, identify what changed between the two traces and what it indicates about the valve's condition.",
                  "materials": ["Figure 2.9 signature comparison overlay, printed"],
                  "sourceNote": "Directly built on the signature-comparison figure just taught (cvh-cmp-signature-data-comparison-overlay)."
                }
              ],
              "pages": [56, 57, 58, 59],
              "check": [60]
            }
          ]
        }
      ]
    }
  ]
}
;