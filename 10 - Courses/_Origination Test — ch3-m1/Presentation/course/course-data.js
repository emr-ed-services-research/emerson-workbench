window.EW_COURSE = {
  "course": {
    "code": "OT31",
    "title": "Origination Test — ch3-m1",
    "footer": "PHASE 5 DRY RUN — not a real course; self-executed Candidate B for ch3-m1"
  },
  "slideBase": "../build/slides/",
  "slidePrefix": "om1-",
  "_note": "Phase 5 origination dry run, SELF-EXECUTED attempt (Candidate B-self). Module ch3-m1 'Actuator Action, Fail Mode & Bench Set' cut from its objective + the 14101 competency catalogue via buildStage1OriginatePrompt / buildStage2OriginatePrompt (executed by the model under proof discipline, same as the ch3-m2 test), then composed via buildStage3OriginatePrompt. Candidate A = the shipped ch3-m1 slides 88-93 (untouched). See COMPARISON.md.",
  "library": { "base": "../../../../20 - Source Library/", "note": "", "primary": [], "columns": [] },
  "days": [
    {
      "id": "d1", "title": "Day 1",
      "chapters": [
        {
          "id": "otch", "title": "Origination Test — ch3-m1", "num": 1, "domain": "maintenance",
          "modules": [
            {
              "id": "om1", "title": "Actuator Action, Fail Mode & Bench Set",
              "status": "authored", "visual": true,
              "levelTarget": "evaluate",
              "buildsOn": [],
              "stakes": "Choose the wrong actuator action or body orientation and the valve drives to the unsafe position on loss of air; misjudge bench set and the spring will not deliver rated travel or the seat load the shutoff class needs.",
              "objective": "Determine a spring-and-diaphragm control valve assembly's fail mode from its actuator action and body orientation, and explain what bench set is and which valve forces it deliberately excludes.",
              "keyConcepts": [
                {
                  "competencyId": "mnt.actuator.explain-actuator-action",
                  "progression": "introduces", "role": "mechanism", "level": "understand",
                  "pages": [1], "template": ".slide--tmpl-figrow",
                  "sources": ["ch3-cmp-da-schematic", "ch3-cmp-ra-schematic"],
                  "t": "Actuator action is which way loading pressure drives the stem. Direct-acting (Fisher 657): air on top of the diaphragm pushes the stem down, the spring lifts it back. Reverse-acting (Fisher 667): air lifts the stem, the spring pushes it down. That is what sets whether the stem fails up or down when air is lost."
                },
                {
                  "competencyId": "mnt.valve-body.contrast-pdtc-pdto",
                  "progression": "develops", "role": "contrast", "level": "understand",
                  "pages": [2], "template": ".slide--tmpl-figrow",
                  "sources": ["ch3-cmp-pdtc-pdto-bodies"],
                  "t": "Push-down-to-close (direct-acting) body: the plug sits between actuator and seat, stem extension seats the plug, the seat ring is the lower travel stop. Push-down-to-open (reverse-acting) body: the seat ring sits between actuator and plug, stem extension opens the valve, the seat ring is the upper travel stop. Body orientation is the second half of what sets fail action. (Introduced as a valve-body idea in ch2; here it is paired with actuator action.)"
                },
                {
                  "competencyId": "mnt.actuator.determine-fail-mode",
                  "progression": "introduces", "role": "mechanism", "level": "analyze",
                  "pages": [3], "template": ".slide--tmpl-figrow",
                  "sources": ["ch3-cmp-fail-mode-matrix"],
                  "t": "Fail mode is where the plug goes on loss of air, and it is set by actuator action AND body orientation together. The same actuator fails a valve open on one body and closed on the other. Read it off the four-way matrix: direct- or reverse-acting spring, over a PDTC or a PDTO body."
                },
                {
                  "competencyId": "mnt.actuator.select-action-for-failsafe",
                  "progression": "introduces", "role": "application", "level": "evaluate",
                  "pages": [4], "template": ".slide--tmpl-figrow",
                  "sources": ["ch3-cmp-fail-mode-matrix"],
                  "t": "Selecting an action works backwards from safety: first decide whether the process needs the valve to fail open or fail closed on air loss, then choose actuator action and body orientation together to give that result. The spring is the fail-safe element — it must drive the valve the safe way."
                },
                {
                  "competencyId": "mnt.actuator.bench-set",
                  "progression": "introduces", "role": "mechanism", "level": "understand",
                  "pages": [5], "template": ".slide--tmpl-graph",
                  "sources": ["ch3-cmp-bench-set-graph"],
                  "t": "Bench set is the diaphragm-pressure range that strokes the actuator through its RATED travel with the assembly on the bench — no process or valve forces acting. On a travel-versus-pressure plot it is the sloped line between the lower and upper bench-set pressures. The spring rate is picked for the service and the shutoff class wanted."
                },
                {
                  "competencyId": "mnt.actuator.explain-excluded-forces",
                  "progression": "develops", "role": "nomenclature", "level": "understand",
                  "pages": [6], "template": ".slide--tmpl-figrow",
                  "sources": ["ch3-cmp-valve-forces-cutaway", "ch3-cmp-bench-set-decomposition"],
                  "t": "Bench set is defined friction-free: it deliberately leaves out the in-service valve forces the actuator must also overcome once the valve is in the line — static plug unbalance (A), seat load (B), packing friction (C), and additional forces such as piston-ring friction (D). That is why a bench-set actuator still needs margin."
                },
                {
                  "competencyId": "mnt.actuator.select-action-for-failsafe",
                  "progression": "applies", "role": "check", "level": "evaluate",
                  "pages": [7], "template": ".slide--hd",
                  "sources": [],
                  "t": "Formative check: given a stated safe-failure requirement and a body orientation, the learner selects the actuator action that delivers it — the evaluate-level target of the module."
                }
              ],
              "pages": [1, 2, 3, 4, 5, 6],
              "check": [7]
            }
          ]
        }
      ]
    }
  ]
}
;