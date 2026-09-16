window.EW_COURSE = {
  "course": {
    "code": "CVE1",
    "title": "Control Valve Engineering 1",
    "summary": "An introductory engineering course on the control-valve selection-and-sizing decision and cavitation/flashing damage diagnosis, drawn from Control Valve Handbook ch5 — the foundation CVE2 develops into real ISA/IEC Cv calculation, materials selection, and mitigation design.",
    "footer": "© Emerson Educational Services, 2026  ·  Emerson Confidential",
    "domain": "engineering",
    "tier": "introductory"
  },
  "slideBase": "../build/slides/",
  "slidePrefix": "cve1-",

  "library": {
    "base": "../../../../20 - Source Library/",
    "note": "CVE1 draws from Control Valve Handbook ch5 only (see course.summary) — this shelf is the standing, shared Source Library available from every published course, matching 14101's and Control Valve Basics' own library block exactly, not scoped to this course's own citations.",
    "primary": [
      { "id": "cvh6",  "title": "Control Valve Handbook", "meta": "D101881X012 · Sixth Edition", "color": "#004B8D",
        "file": "Handbooks & Sourcebooks/Control Valve Handbook/Control Valve Handbook - Sixth Edition.pdf" },
      { "id": "sb-og",  "kicker": "Control Valve Sourcebook", "title": "Oil & Gas",              "meta": "Fisher · 2013",           "color": "#12385A",
        "file": "Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas.pdf" },
      { "id": "sb-pss", "kicker": "Control Valve Sourcebook", "title": "Power & Severe Service", "meta": "Fisher · Fourth Edition", "color": "#5E2A2E",
        "file": "Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Power & Severe Service.pdf" },
      { "id": "sb-ref", "kicker": "Control Valve Sourcebook", "title": "Refining",               "meta": "Fisher",                  "color": "#1D453F",
        "file": "Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Refining.pdf" },
      { "id": "sb-pp",  "kicker": "Control Valve Sourcebook", "title": "Pulp & Paper",           "meta": "Fisher · 2011",           "color": "#2E5A38",
        "file": "Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Pulp & Paper.pdf" }
    ],
    "columns": [
      {
        "title": "Actuators",
        "docs": [
          { "id": "tp-667",  "title": "Fisher 667 Diaphragm Actuator",       "sub": "D100310X012", "file": "Equipment Manuals/Actuators/d100310x012-667-diaphragm-actuator-sizes-30-30i-76-76i-and-87-fisher.pdf" },
          { "id": "tp-657",  "title": "Fisher 657 Diaphragm Actuator",       "sub": "D100306X012", "file": "Equipment Manuals/Actuators/instruction-manual-fisher-657-diaphragm-actuator-sizes-30-30i-through-70-70i-87-en-11746662.pdf" },
          { "id": "tp-585c", "title": "Fisher 585C Series Piston Actuators",  "sub": "D102087X012", "file": "Equipment Manuals/Actuators/d102087x012.pdf" },
          { "id": "tp-1052", "title": "Fisher 1051 & 1052 Rotary Actuators",  "sub": "D100320X012", "file": "Equipment Manuals/Actuators/d100320x012.pdf" },
          { "id": "tp-1061", "title": "Fisher 1061 Piston Rotary Actuator",   "sub": "D100324X012", "file": "Equipment Manuals/Actuators/d100324x012.pdf" },
          { "id": "tp-2052", "title": "Fisher 2052 Diaphragm Rotary Actuator", "sub": "D103296X012", "file": "Equipment Manuals/Actuators/d103296x012.pdf" }
        ]
      },
      {
        "title": "Valve Bodies",
        "docs": [
          { "id": "tp-es",      "title": "Fisher ES & EAS easy-e Valves",       "sub": "D100397X012", "file": "Equipment Manuals/Valve Bodies/instruction-manual-fisher-es-eas-easy-e-valves-cl125-through-cl600-en-11745482.pdf" },
          { "id": "tp-ed",      "title": "Fisher ED easy-e Valve",              "sub": "D100390X012", "file": "Equipment Manuals/Valve Bodies/d100390x012.pdf" },
          { "id": "tp-et",      "title": "Fisher ET & EAT easy-e Valves",       "sub": "D100398X012", "file": "Equipment Manuals/Valve Bodies/d100398x012.pdf" },
          { "id": "tp-ez",      "title": "Fisher EZ easy-e Control Valve",       "sub": "D100401X012", "file": "Equipment Manuals/Valve Bodies/d100401x012.pdf" },
          { "id": "tp-9500",    "title": "Fisher 9500 Butterfly Control Valve",  "sub": "D100380X012", "file": "Equipment Manuals/Valve Bodies/d100380x012.pdf" },
          { "id": "tp-8580",    "title": "Fisher 8580 Rotary Valve",             "sub": "D103300X012", "file": "Equipment Manuals/Valve Bodies/d103300x012.pdf" },
          { "id": "tp-veeball", "title": "Fisher Vee-Ball V150 / V200 / V300",   "sub": "D101554X012", "file": "Equipment Manuals/Valve Bodies/d101554x012.pdf" },
          { "id": "tp-v500",    "title": "Fisher V500 Rotary Globe Valve",       "sub": "D100423X012", "file": "Equipment Manuals/Valve Bodies/d100423x012.pdf" }
        ]
      },
      {
        "title": "Positioners",
        "docs": [
          { "id": "tp-dvc6200", "title": "FIELDVUE DVC6200 (HW2)", "sub": "D103605X012", "file": "Equipment Manuals/Positioners/instruction-manual-fieldvue-dvc6200-hw2-digital-valve-controller-en.pdf" },
          { "id": "tp-dvc7k",   "title": "FIELDVUE DVC7K-H",       "sub": "D104767X012", "file": "Equipment Manuals/Positioners/instruction-manual-fisher-fieldvue-dvc7k-h-digital-valve-controller-en.pdf" }
        ]
      }
    ]
  },

  "moduleZero": {
    "id": "m0",
    "title": "Before We Start",
    "summary": "The title slide, the course roadmap, and the facility, safety, and sign-in logistics. Complete once at the start of the course — after that it is done and out of the way.",
    "pages": [1, 2, 3, 4]
  },

  "days": [
    {
      "id": "d1",
      "num": 1,
      "title": "Control Valve Engineering 1",
      "minutesTarget": 360,
      "chapters": [
        {
          "id": "cve1-ch1",
          "title": "Selection, Sizing, and Damage Diagnosis",
          "num": 1,
          "_source": "Control Valve Handbook ch5 (Sizing) — see Component Index — Control Valve Handbook ch5.md, §5.1-5.6 and §5.14",
          "modules": [
            {
              "id": "cve1-ch1-m1",
              "title": "Valve Selection & Sizing Decision",
              "status": "ready",
              "levelTarget": "analyze",
              "domain": "engineering",
              "minutesTarget": 215,
              "stakes": "A preliminary Cv calculated in isolation, without checking it against noise and cavitation limits first, produces a valve that's the right size on paper and fails in the field within a year — the flowchart's own step 2→3 branch exists because \"big enough\" and \"right\" are two different questions.",
              "objective": "Work a control valve's selection-and-sizing decision end to end from real service conditions — calculate a preliminary Cv, check it against noise/cavitation limits, and justify the resulting trim-type and body/trim decision.",
              "buildsOn": [],
              "keyConcepts": [
                {
                  "competencyId": "eng.sizing.valve-selection-process",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "understand",
                  "pages": [5],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "The valve-selection process is one continuous 6-step decision, not six independent topics: service conditions → preliminary Cv → trim type → body/trim size → trim materials → remaining options. Every later section in the chapter is one step of this same sequence.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "The source figure is the chapter's own top-level 6-step flowchart — a how-the-whole-decision-works diagram, exactly the mechanism role's treatment, not a single labelled part.",
                      "pages": [5],
                      "sources": ["cvh-cmp-valve-selection-process-flowchart"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.sizing.valve-selection-process",
                  "progression": "introduces",
                  "role": "nomenclature",
                  "level": "understand",
                  "pages": [6],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "Step 1 fixes the service conditions a preliminary Cv depends on: P1, ΔP, Q, T1, fluid properties, allowable noise, and the required ANSI pressure class — get any one wrong and the Cv that follows is wrong regardless of the arithmetic.",
                      "template": "slide--role-nomenclature",
                      "templateRationale": "A named list of the seven real inputs the flowchart's step 1 requires — a term/definition treatment, not a mechanism or a contrast.",
                      "pages": [6],
                      "sources": ["cvh-cmp-valve-selection-process-flowchart"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.sizing.valve-selection-process",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "analyze",
                  "pages": [7],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "Step 2 is the real branch point: calculate a preliminary Cv, then check it against noise and cavitation limits before treating it as final — a Cv that passes the flow requirement but fails either check forces a different trim type in step 3, not a bigger valve.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "Re-tagged from application to mechanism during Stage 4 render-check review: slide--role-application has no CSS shape for a real figure (only .tpl-chart), which caused real clipping. Mechanism's fig+list shape fits a figure-plus-explanation directly.",
                      "pages": [7],
                      "sources": ["cvh-cmp-valve-selection-process-flowchart"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.selection.body-trim-decision",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "analyze",
                  "pages": [8],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "Step 3's trim-type decision follows directly from step 2's result: standard trim when both checks pass, noise-reduction trim when the noise limit is the one that fails, cavitation-reduction trim when the cavitation check is the one that fails — the failing check, not preference, decides which.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "Re-tagged from application to mechanism during Stage 4 render-check review — same reason as page 7.",
                      "pages": [8],
                      "sources": ["cvh-cmp-valve-selection-process-flowchart"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.selection.body-trim-decision",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "understand",
                  "pages": [9],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "Step 4 selects the actual body and trim size for the required Cv once trim type is fixed — travel, trim group, and shutoff class all follow from this choice, not from the Cv number alone.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "How the sizing decision propagates into body/trim/shutoff consequences — a mechanism explanation of what one choice determines, not a judgment call being applied.",
                      "pages": [9],
                      "sources": ["cvh-cmp-valve-selection-process-flowchart"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.selection.body-trim-decision",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "analyze",
                  "pages": [10],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "Step 5 selects trim materials compatible with the process and available within the trim group step 4 already fixed — a material that fits the process but doesn't exist in that trim group is not a real option at this step.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "Re-tagged from application to mechanism during Stage 4 render-check review — same reason as pages 7-8.",
                      "pages": [10],
                      "sources": ["cvh-cmp-valve-selection-process-flowchart"]
                    }
                  ]
                }
              ],
              "activities": [
                {
                  "id": "cve1-ch1-m1-act1",
                  "type": "case-walkthrough",
                  "afterConcept": 5,
                  "minutes": 25,
                  "title": "Selection Walkthrough",
                  "description": "Given a real service-condition case (P1, ΔP, Q, T1, fluid, allowable noise, ANSI class), work steps 1-3 of the flowchart as a class: state the preliminary Cv result, run the noise/cavitation check, and decide whether the case forces a trim-type change — then work steps 4-5 to justify the resulting body/trim/material decision.",
                  "materials": ["A worked service-condition case handout (P1, ΔP, Q, T1, fluid, allowable noise, ANSI class)", "The flowchart figure as a job aid"],
                  "sourceNote": "Grounded directly in the flowchart's own 6 steps (cvh-cmp-valve-selection-process-flowchart) — no invented procedure."
                }
              ],
              "pages": [5, 6, 7, 8, 9, 10],
              "check": [11]
            },
            {
              "id": "cve1-ch1-m2",
              "title": "Cavitation and Flashing: Diagnosing Damage",
              "status": "ready",
              "levelTarget": "analyze",
              "domain": "engineering",
              "minutesTarget": 145,
              "stakes": "An engineer who mistakes cavitation damage for flashing damage (or the reverse) prescribes the wrong fix — flashing is largely unavoidable once the process conditions are fixed, but cavitation is preventable by valve/trim design; treating a cavitation problem as flashing means shipping a valve that fails again. Counter-intuitively, the design choice that looks like the safer bet — a high-recovery valve — is exactly the one more prone to the failure that matters here.",
              "objective": "Distinguish flashing damage from cavitation damage by visual signature, tracing the difference back to the vena-contracta mechanism that produces each.",
              "buildsOn": [],
              "keyConcepts": [
                {
                  "competencyId": "eng.noise-cavitation.damage-diagnosis",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "understand",
                  "pages": [12],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "Flow narrows through a restriction to a minimum cross-sectional area just downstream — the vena contracta — before recovering toward the downstream pressure. Both flashing and cavitation start here: it's where the pressure inside the valve drops lowest.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "The source figure is a labelled flow-path schematic (Flow, P1, P2, Restriction, Vena Contracta) — the canonical how-it-works diagram the mechanism role is built for.",
                      "pages": [12],
                      "sources": ["cvh-cmp-vena-contracta-diagram"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.noise-cavitation.damage-diagnosis",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "analyze",
                  "pages": [13],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "If the pressure at the vena contracta drops to or below the fluid's vapor pressure, the liquid flashes to vapor bubbles there. If the downstream pressure then recovers above the vapor pressure, those bubbles collapse violently — that collapse, not the flashing itself, is what erodes metal. Flashing without recovery above vapor pressure causes no collapse damage; cavitation is specifically the collapse case.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "Extends the same vena-contracta diagram's mechanism into the flash/collapse distinction — still a how-it-happens explanation, one step deeper than the previous slide's setup.",
                      "pages": [13],
                      "sources": ["cvh-cmp-vena-contracta-diagram"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.noise-cavitation.damage-diagnosis",
                  "progression": "introduces",
                  "role": "mechanism",
                  "level": "analyze",
                  "pages": [14],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "A high-recovery valve design (e.g. a streamlined ball valve) recovers pressure faster and higher after the vena contracta than a low-recovery design — which is exactly why high-recovery designs are more prone to cavitation for the same upstream/downstream conditions, not less: more recovery means a higher chance of crossing back above vapor pressure.",
                      "template": "slide--role-mechanism",
                      "templateRationale": "Re-tagged twice: contrast->application (the source is ONE figure with both curves overlaid, not two separate photos), then application->mechanism during Stage 4 render-check review (slide--role-application has no CSS shape for a real figure, caused clipping). Mechanism fig+list shape fits.",
                      "pages": [14],
                      "sources": ["cvh-cmp-pressure-profile-high-low-recovery"]
                    }
                  ]
                },
                {
                  "competencyId": "eng.noise-cavitation.damage-diagnosis",
                  "progression": "introduces",
                  "role": "contrast",
                  "level": "analyze",
                  "pages": [15],
                  "competencyStatus": "confirmed",
                  "primitives": [
                    {
                      "domain": "engineering",
                      "tier": "introductory",
                      "t": "Flashing damage looks smooth and polished — a clean erosion pattern with no pitting. Cavitation damage looks rough and cinder-like — a pitted, gouged surface from repeated bubble-collapse impacts. The visual signature alone, with no pressure data available, is enough to tell which mechanism produced a given piece of failed trim.",
                      "template": "slide--role-contrast",
                      "templateRationale": "Two real damage photos, each the direct visual contrast pair of the other per the Component Index's own notes — the two-panel shape fits exactly, one photo per panel.",
                      "pages": [15],
                      "sources": ["cvh-cmp-flashing-damage-photo", "cvh-cmp-cavitation-damage-photo"]
                    }
                  ]
                }
              ],
              "activities": [
                {
                  "id": "cve1-ch1-m2-act1",
                  "type": "application-exercise",
                  "afterConcept": 3,
                  "minutes": 20,
                  "title": "Damage Diagnosis",
                  "description": "Show the two real damage photos (flashing, cavitation) unlabelled. Learners diagnose which is which from visual signature alone, then justify the diagnosis by walking the vena-contracta / pressure-recovery mechanism backward from the damage to the cause — not just naming the answer.",
                  "materials": ["Unlabelled prints/projection of the two damage photos", "The vena-contracta/pressure-recovery diagrams as reference"],
                  "sourceNote": "Grounded directly in the two damage photos and their own visual-signature distinction (cvh-cmp-flashing-damage-photo, cvh-cmp-cavitation-damage-photo) — no invented scenario."
                }
              ],
              "pages": [12, 13, 14, 15],
              "check": [16]
            }
          ]
        }
      ]
    }
  ]
};
