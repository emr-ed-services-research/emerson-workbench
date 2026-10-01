# -*- coding: utf-8 -*-
"""Assemble 657-refined.html rev B per Franz's correction list."""
parts_js = open("refined2-parts.js", encoding="utf-8").read()
# upper casing: declared-geometry shell reconstruction (approved 2026-09-26)
import re as _re
_shell = _json.load(open("upper-shell-path.json", encoding="utf-8")) if False else None
import json as _json2
_shell = _json2.load(open("upper-shell-path.json", encoding="utf-8"))
_shell_lo = _json2.load(open("lower-shell-path.json", encoding="utf-8"))
_shell_yk = _json2.load(open("yoke-shell-path.json", encoding="utf-8"))
parts_js = _re.sub(r'"yoke":\s*"[^"]*"',
    '"yoke": "' + _shell_yk["yoke"] + '"',
    parts_js)
parts_js = _re.sub(r'"lower-diaphragm-casing":\s*"[^"]*"',
    '"lower-diaphragm-casing": "' + _shell_lo["lower-diaphragm-casing"] + '"',
    parts_js)
parts_js = _re.sub(r'"upper-diaphragm-casing":\s*"[^"]*"',
    '"upper-diaphragm-casing": "' + _shell["upper-diaphragm-casing"].replace("\\", "") + '"',
    parts_js)
import json as _json
_timing = _json.load(open("C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench/narration/output/657/timing.json", encoding="utf-8"))
timing_js = _json.dumps([{k: s[k] for k in ("start","duration","text","section")} for s in _timing])

html = """<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Fisher 657 Working Model</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600&family=Caveat:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#eef2f6; --panel:#ffffff; --border:#cdd7e1; --border-strong:#b9c7d6;
  --ink:#1c2530; --sub:#44525f; --muted:#6a7784;
  --accent:#2f6fb2; --accent-alt:#c25016; --good:#2f9e6e; --highlight:#ffdd66;
  --thumb:#ffffff; --ring:rgba(47,111,178,0.18);
  --track:#dbe3ec; --track-shadow:rgba(28,51,80,0.18);
  --c-cast-line:#1c3350; --c-hw-line:#39434e;
  --c-upper:#9fb8d8; --c-lower:#b7cbe4; --c-yoke:#7e9cc4; --c-plate:#2f6fb2;
  --c-stem:#2a5f9e; --c-seat:#3c74ab; --c-adj:#cdd9ea;
  --c-coil:#58a6d8; --c-coil-back:#3d7fae; --c-thread:#12283f; --c-dia:#1d4f8c;
  --c-vstem:#6b7683; --c-vnut:#7d8894; --c-vsil:#dde5ee; --c-vsil-line:#8ba0b8;
  --c-anno:#c25016;
  /* Travel-indicator scale-plate markings: fixed dark, not theme-swapped
     (2026-09-29). These ticks/OPEN-label/arrow used --c-cast-line, which is
     intentionally LIGHT in dark mode (for cast-iron shading against dark
     casting surfaces elsewhere) -- but the scale plate itself (--c-adj) is a
     light blue-gray in BOTH themes, so dark mode put light markings on a
     light plate: unreadable ("white text...on a light gray background",
     Franz). Same fix philosophy as the nameplate below: an engraved plate's
     markings don't change color with the app's theme toggle. */
  --c-scale-mark:#1c3350;
  /* Nameplate palette: fixed, not theme-swapped -- a physical plate doesn't
     change color with the app's light/dark toggle. Two-tone blue (dark
     plate, lighter accent for the value boxes/trim) replaces both the
     original photographic black-and-white and the first blue re-skin, which
     read too bright and had light-on-light-blue label text (Franz,
     2026-09-27 round 2). */
  --np-plate:#173a5c; --np-accent:#4f93d6;
  --np-text:#eef4fb; --np-text-dim:#a9cbec; --np-text-on-accent:#0d2338;
  /* Drafting-template layout shell (Stage 1, 2026-09-28): token ALIASES onto
     our existing palette, not a second competing color system. Because
     var() resolves live against whatever the underlying token currently is,
     these only need declaring once here -- they automatically pick up the
     dark-mode values too, no need to repeat them in the dark blocks below. */
  --sheet:var(--panel); --rule:var(--border-strong); --ink-soft:var(--sub);
  --part-live:var(--accent); --band:var(--good); --focus:var(--accent-alt);
  --lead:var(--ink);
  --display:"Barlow Condensed","Arial Narrow",Arial,sans-serif;
  --font-body:"Barlow","Segoe UI",Arial,sans-serif;
  /* Physics reference sheet only (2026-09-29): hand-lettering face for
     figure numbers/equations -- never used on the live schematic, which
     stays Barlow throughout. Everything else the sheet draws with (line
     art, marginalia text) reuses the app's own existing tokens (--ink,
     --sub, --accent-alt) rather than a separate fixed palette, so it
     inherits light/dark theming exactly like the rest of the page --
     corrected same day from a first pass that gave it its own fixed
     "journal page" palette, which read as a separate world instead of
     this project's own aesthetic with a sketched accent (Franz). */
  --hand:"Caveat","Segoe Script",cursive;
  --tb-h:64px; --railw-collapsed:58px; --railw-open:330px; --animw:640px;
  /* Correction (2026-09-28): the real approved template draws the whole
     composition -- figure, both instrument columns, titleblock, rail,
     corner -- inside ONE single-bordered sheet inset a consistent amount
     from the true browser edge (final-panel-open.png). Our prior build had
     every piece position:fixed flush to 0 with no unifying border at all.
     One shared inset constant, used both by the decorative border overlay
     and by every fixed element's edge offset, keeps them all in registration. */
  --sheet-inset:14px;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --bg:#12181f; --panel:#1a222c; --border:#2c3846; --border-strong:#3a4a5c;
    --ink:#e7edf3; --sub:#9fb0c0; --muted:#7e8ea0;
    --accent:#5b9bdb; --accent-alt:#ff8a4a; --good:#3ecb92; --highlight:#ffdd66;
    --thumb:#e7edf3; --ring:rgba(91,155,219,0.3);
    --track:#232e3a; --track-shadow:rgba(0,0,0,0.45);
    --c-cast-line:#b8c6d8; --c-hw-line:#a8b2bc;
    --c-upper:#5878a8; --c-lower:#6c8ebc; --c-yoke:#48628a; --c-plate:#5b9bdb;
    --c-stem:#4a7db0; --c-seat:#5688bc; --c-adj:#93abc9;
    --c-coil:#6bb8e8; --c-coil-back:#3e6d94; --c-thread:#0a1929; --c-dia:#4a7db0;
    --c-vstem:#8892a0; --c-vnut:#9aa3ae; --c-vsil:#26313e; --c-vsil-line:#4d5d70;
    --c-anno:#ff8a4a;
  }
}
:root[data-theme="dark"]{
  --bg:#12181f; --panel:#1a222c; --border:#2c3846; --border-strong:#3a4a5c;
  --ink:#e7edf3; --sub:#9fb0c0; --muted:#7e8ea0;
  --accent:#5b9bdb; --accent-alt:#ff8a4a; --good:#3ecb92; --highlight:#ffdd66;
  --thumb:#e7edf3; --ring:rgba(91,155,219,0.3);
  --track:#232e3a; --track-shadow:rgba(0,0,0,0.45);
  --c-cast-line:#b8c6d8; --c-hw-line:#a8b2bc;
  --c-upper:#5878a8; --c-lower:#6c8ebc; --c-yoke:#48628a; --c-plate:#5b9bdb;
  --c-stem:#4a7db0; --c-seat:#5688bc; --c-adj:#93abc9;
  --c-coil:#6bb8e8; --c-coil-back:#3e6d94; --c-thread:#0a1929; --c-dia:#4a7db0;
  --c-vstem:#8892a0; --c-vnut:#9aa3ae; --c-vsil:#26313e; --c-vsil-line:#4d5d70;
  --c-anno:#ff8a4a;
}
body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,sans-serif;padding:18px;}
.row{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;}
.fig{background:var(--panel);border:1px solid var(--border);border-radius:10px;padding:10px;flex:0 1 620px;}
.fig svg{width:100%;height:auto;display:block;}
.panel{flex:1 1 300px;max-width:480px;}
.pagehead{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:6px;}
h1{font-size:19px;margin:0;}
#theme-toggle{font-size:15px;line-height:1;padding:7px 10px;border:1px solid var(--border-strong);
  background:var(--panel);color:var(--ink);border-radius:8px;cursor:pointer;}
/* Base (mobile-safe) hide for the corner button's text label -- only the
   desktop rail-open override (in the min-width:701px block) re-shows it. */
.theme-label{display:none;font-size:13px;color:var(--ink);white-space:nowrap;}
p,label{font-size:13.5px;line-height:1.55;color:var(--sub);}
.readout{font-family:ui-monospace,monospace;font-size:13px;color:var(--accent);}
.cast{stroke:var(--c-cast-line);stroke-width:2.5;stroke-linejoin:round;fill-rule:evenodd;}
#p-upper,#pf-upper{fill:var(--c-upper);}
#p-lower,#pf-lower{fill:var(--c-lower);}
#p-yoke,#pf-yoke{fill:var(--c-yoke);}
#p-plate,#pf-plate,#pr-chamber-plate{fill:var(--c-plate);}
/* Physics reference sheet (2026-09-30): the fill above these four real
   parts is keyed to their specific #id, not a shared class (each casing
   piece has its own color token) -- the sheet's cloned copies need the
   same rule extended to their own ids, or they fall back to SVG's default
   black fill. pr-chamber-upper reuses the SAME --c-upper token as the
   live/left-column upper casing since it's the identical part, just a
   tighter crop. */
#pr-chamber-upper{fill:var(--c-upper);}
.sp-stem{fill:var(--c-stem);stroke:var(--c-cast-line);stroke-width:2;}
.sp-seat{fill:var(--c-seat);stroke:var(--c-cast-line);stroke-width:2;}
.sp-adj{fill:var(--c-adj);stroke:var(--c-cast-line);stroke-width:2;}
.sp-coil{stroke:var(--c-coil);stroke-linecap:round;fill:none;}
.sp-coil-back{stroke:var(--c-coil-back);}
.sp-thread{stroke:var(--c-thread);stroke-width:2.4;}
.dia{stroke:var(--c-dia);stroke-width:12.0;fill:none;stroke-linecap:round;stroke-linejoin:round;}
.prism{fill:var(--c-adj);stroke:var(--c-cast-line);stroke-width:2;}
.tick{stroke:var(--c-scale-mark);stroke-width:2;}
.lbl{font-family:system-ui;font-size:15px;fill:var(--c-scale-mark);}
/* Nameplate tab (round 4, 2026-09-27): a native part of the drawing, not an
   HTML overlay aligned to it afterward -- see the <g id="npTab"> comment in
   the markup for why. Styled like a real UI control (cursor, hover) even
   though it's drawn as SVG shapes. Hidden on mobile in the media query
   below -- mobile keeps its own separate nameplate access, unchanged. */
.np-tab-svg{cursor:pointer;}
.np-tab-svg rect{fill:var(--panel);stroke:var(--border-strong);stroke-width:2.5;}
.np-tab-svg:hover rect{fill:var(--bg);}
.np-tab-svg text{fill:var(--sub);font-family:Arial,Helvetica,sans-serif;
  font-weight:700;font-size:26px;letter-spacing:1.5px;text-anchor:middle;
  dominant-baseline:middle;}
/* Nameplate re-skinned in a fixed two-tone blue palette rather than a
   literal black-and-white photographic replica or a theme-token scheme
   (approved 2026-09-27, refined round 2 -- same fields and box-for-box
   layout throughout, just the palette). Dark plate + light text directly on
   it; lighter-blue boxes + dark text inside them -- two clear legible
   pairings instead of one flat surface. */
.np-title{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:25px;fill:var(--np-text);}
.np-logo{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:16px;fill:var(--np-text-on-accent);text-anchor:middle;letter-spacing:0.5px;}
.np-lbl{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:19px;fill:var(--np-text-dim);text-anchor:end;}
.np-box{fill:var(--np-accent);}
.np-val{font-family:Arial,Helvetica,sans-serif;font-size:18px;fill:var(--np-text-on-accent);text-anchor:middle;}
.vstem{fill:var(--c-vstem);stroke:var(--c-hw-line);stroke-width:2;}
.vnut{fill:var(--c-vnut);stroke:var(--c-hw-line);stroke-width:2;}
.vconn{fill:var(--c-seat);stroke:var(--c-cast-line);stroke-width:2;}
.vdisk{fill:var(--c-adj);stroke:var(--c-cast-line);stroke-width:2;}
.vsil{fill:var(--c-vsil);stroke:var(--c-vsil-line);stroke-width:2.5;stroke-linejoin:round;}
.vfast{fill:var(--c-vnut);stroke:var(--c-hw-line);stroke-width:2;}
.anno{stroke:var(--c-anno);stroke-width:3;fill:none;}
.anno-lbl{font-family:system-ui;font-size:22px;font-weight:600;fill:var(--c-anno);}
#cap{min-height:44px;padding:8px 12px;margin-top:6px;border-top:1px solid var(--border);
  font-size:15px;line-height:1.45;color:var(--ink);font-style:italic;}
#pb-play{font-size:14px;padding:6px 14px;border:1px solid var(--accent);background:var(--accent);
  color:#fff;border-radius:6px;cursor:pointer;}
#pb-play.playing{background:var(--accent-alt);border-color:var(--accent-alt);}
#nameplate g.np-hl .np-box{fill:var(--highlight);}
#nameplate g.np-hl .np-lbl{fill:var(--highlight);}
#ctrlbar{display:flex;flex-direction:column;gap:10px;margin-bottom:14px;}
/* This selector's higher specificity (#id .class tag) than the desktop
   media query's plain ".ctl label" rule below meant that rule's font-size
   change was silently never actually applying, regardless of source order
   -- specificity beats cascade position. Franz: "the font size of the
   controls seemed unchanged" (2026-09-27, round 6) -- it genuinely hadn't.
   Sized directly here instead, and bumped more assertively this time. */
/* Scales together with the rest of .ctl (see fitScale/placeAt, round 9) --
   sized for how it reads at the resulting ~0.7 shared scale, not inflated
   to compensate for it in isolation (round 8's mistake). */
#ctrlbar .ctl label{display:block;font-size:20px;font-weight:700;color:var(--sub);}
#ctrlbar .readout{display:block;margin-top:2px;white-space:nowrap;overflow:hidden;
  font-family:ui-monospace,monospace;font-variant-numeric:tabular-nums;transition:color 0.2s ease;}
#ctrlbar .readout.inwin{color:var(--good);font-weight:700;}
@keyframes readoutPulse{0%,100%{transform:scale(1);}50%{transform:scale(1.15);}}
.readout-pulse{animation:readoutPulse 0.35s ease;display:inline-block;}
#statusline{font-size:12px;color:var(--muted);line-height:1.4;}
.legend{font-size:11.5px;color:var(--sub);line-height:1.3;font-variant-numeric:tabular-nums;}
#pv-play{font-size:14px;padding:6px 14px;border:1px solid var(--c-yoke);background:var(--c-yoke);
  color:#fff;border-radius:6px;cursor:pointer;margin-left:8px;}
#practiceView{display:none;}
.stepbadge{font-size:11px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;
  color:var(--accent);}
.pv-head{display:flex;align-items:center;justify-content:space-between;}
#pv-exit{font-size:11px;color:var(--muted);text-decoration:underline;background:none;border:none;
  padding:0;cursor:pointer;}
.instr{margin:0;font-size:14px;line-height:1.4;color:var(--ink);font-weight:600;min-height:2.8em;}
.controlsrow{display:flex;gap:10px;justify-content:center;}
.ctl2{flex:0 1 180px;display:flex;flex-direction:column;align-items:center;gap:4px;}
.readout-big{font-family:ui-monospace,monospace;font-size:24px;font-weight:700;
  color:var(--accent);font-variant-numeric:tabular-nums;transition:color 0.2s ease;}
.readout-big.inwin{color:var(--good);}
.btnrow{display:flex;gap:6px;width:100%;}
.ctllabel{font-size:11.5px;color:var(--sub);font-weight:600;}
#pv-next{font-size:15px;font-weight:700;padding:11px;border:none;border-radius:9px;width:100%;
  background:var(--border);color:var(--muted);cursor:not-allowed;transition:background 0.2s,color 0.2s;}
#pv-next.ready{background:var(--good);color:#fff;cursor:pointer;}
body.practicing #ctrlbar,
body.practicing #valveRow,
body.practicing .np-tab-svg,
body.practicing #npCard,
body.practicing #indexRail{display:none;}
body.practicing #practiceView{display:flex;flex-direction:column;gap:10px;}
/* Desktop-only title block (round 11) -- without this, a bare div defaults
   to display:block and would show up inside #ctrlbar's MOBILE flex row too,
   mixed in with the Play/Practice buttons mobile still needs there.
   #titleblock{display:flex} in the desktop media query turns it back on. */
#titleblock{display:none;}
/* Stage 1 (2026-09-28): the desktop-only topic list moved from a plain
   left-margin list (#sopTopics, round 12) into the template-style index
   rail on the right edge (#indexRail). Same reasoning as #titleblock above
   -- hidden by default so a bare block-level nav doesn't show up in
   mobile's flow; the desktop media query turns it on. */
#indexRail{display:none;}
.pb-word{margin-left:4px;}
.stepper{position:relative;height:34px;display:flex;align-items:stretch;gap:6px;}
.stepper .stepbtn{flex:0 0 40px;border:none;border-radius:8px;background:var(--c-yoke);color:#fff;
  font-size:19px;line-height:1;font-weight:600;cursor:pointer;display:flex;align-items:center;
  justify-content:center;-webkit-user-select:none;user-select:none;touch-action:manipulation;
  box-shadow:0 1px 0 rgba(0,0,0,0.15);}
.stepper .stepbtn:active{filter:brightness(0.88);}
.stepper .stepmid{position:relative;flex:1 1 auto;display:flex;align-items:center;min-width:0;}
.stepper .track{position:relative;width:100%;height:8px;border-radius:4px;background:var(--track);
  box-shadow:inset 0 1px 3px var(--track-shadow);overflow:hidden;}
.stepper .fill{position:absolute;left:0;top:0;bottom:0;background:var(--c-yoke);border-radius:4px 0 0 4px;}
.stepper .band{position:absolute;top:0;bottom:0;background:var(--good);opacity:0.55;
  transition:left 0.2s ease, width 0.2s ease;}
.stepper .centertick{position:absolute;top:-2px;bottom:-2px;width:2px;background:var(--c-cast-line);opacity:0.35;}
/* ===== Desktop-only gauge + slider controls (approved 2026-09-27, slider
   unified 2026-09-29): both the diaphragm-pressure gauge and the spring-
   adjustor dial are pure displays, each driven by an identical .hslide
   slider underneath -- same layout, same interaction, matched pair. The
   adjustor's hex nut genuinely rotates (the one view where that's honest,
   not faked perspective); a bench-set line sits below its slider, real
   computed physics -- see .dial-benchset further down.
   Desktop only -- mobile keeps its own separate rail sliders untouched;
   these controls live inside .ctl, which the mobile media query already
   hides in full. ===== */
.instrument{display:flex;flex-direction:column;align-items:center;gap:10px;}
.gaugeface{fill:var(--panel);stroke:var(--border);stroke-width:2;}
.gaugearc{fill:none;stroke:var(--border);stroke-width:10;stroke-linecap:round;}
.gaugeband{fill:none;stroke:var(--good);stroke-width:10;stroke-linecap:butt;opacity:0.65;}
.gaugetick{stroke:var(--c-cast-line);stroke-width:2;opacity:0.55;}
.gaugetickmaj{stroke:var(--c-cast-line);stroke-width:2.5;}
.gaugenum{font-family:system-ui;font-size:17px;fill:var(--sub);text-anchor:middle;}
.needle{stroke:var(--accent);stroke-width:3;stroke-linecap:round;transition:stroke 0.2s ease;}
.needle.inwin{stroke:var(--good);}
.needlehub{fill:var(--panel);stroke:var(--accent);stroke-width:3;transition:stroke 0.2s ease;}
.needlehub.inwin{stroke:var(--good);}
#ctrlbar .digitalreadout{font-size:24px;font-weight:700;}
/* Secondary caliper-verification reference (2026-09-29, Franz): the smaller
   "(0.19 in)" alongside "2.3 Turns" -- inline in the SAME readout line
   rather than a stacked second line, deliberately, so the adjuster's
   readout stays exactly one row tall like pressure's "0.0 psig" and the two
   cards' rows keep lining up (see the row-alignment fix earlier today). */
.readout-sub{font-size:15px;font-weight:500;color:var(--sub);margin-left:6px;}
.hslide{width:100%;max-width:260px;display:flex;flex-direction:column;align-items:center;gap:10px;margin:8px auto 0;}
.htrackwrap{position:relative;width:100%;height:40px;display:flex;align-items:center;
  touch-action:none;cursor:grab;}
.htrackwrap:active{cursor:grabbing;}
.htrackwrap:focus{outline:none;}
.htrackwrap:focus-visible .htrack{box-shadow:inset 0 1px 3px var(--track-shadow), 0 0 0 3px var(--accent);}
.htrack{position:relative;width:100%;height:12px;border-radius:6px;background:var(--track);
  box-shadow:inset 0 1px 3px var(--track-shadow);}
.hfill{position:absolute;top:0;bottom:0;left:0;background:var(--c-yoke);border-radius:6px 0 0 6px;}
.hband{position:absolute;top:0;bottom:0;background:var(--good);opacity:0.55;}
.hband-dead{background:var(--muted);opacity:0.35;}
.hthumb{position:absolute;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;
  border-radius:50%;background:var(--panel);border:4px solid var(--accent);
  box-shadow:0 2px 5px rgba(20,40,70,0.3);box-sizing:border-box;}
.endlbl{font-size:17px;font-weight:600;color:var(--sub);}
.endrow{display:flex;justify-content:space-between;width:100%;}
/* Correction (2026-09-29): the spring adjustor is a fixed-position rotary
   dial (same top-down hex nut, built from the same polarPt hex-point math,
   the one view where its rotation is honest) driven by a linear slider
   below it, not by dragging the dial itself or by Loosen/Tighten buttons --
   Franz found the dial's own drag interaction "not fluid" and asked for
   "the same kind of layout" as the pressure control, which is a display-only
   gauge driven by a slider underneath. The slider reuses .hslide/.htrack/
   .hfill/.hthumb/.endrow verbatim (see the pressure control below). The
   decorative clockwise-tighten arc (.dialcw/.dialcwhead) is removed -- with
   the slider's own "Loosen"/"Tighten" end labels making direction explicit,
   the arc was redundant, and Franz couldn't tell what it was for anyway. The
   turns readout is removed too (Franz: "turns is inaccurate... we don't want
   to confuse anybody") -- the bench-set line stays, it's real computed
   physics, not an invented figure. */
.dialSvg{pointer-events:none;}
.dialface{fill:var(--panel);stroke:var(--border);stroke-width:2;}
.dialtick{stroke:var(--c-cast-line);stroke-width:2;opacity:0.55;}
.dialtickmaj{stroke:var(--c-cast-line);stroke-width:2.5;}
.dialnut polygon{fill:var(--c-yoke);stroke:var(--c-cast-line);stroke-width:2.5;}
.dialnut .hexmark{fill:var(--c-cast-line);opacity:0.55;}
/* Smoothing the rotation (Franz: wants "a little bit of a smoother
   rotation") is done in JS (see the animateDial() rAF loop near DCX/DCY),
   not a CSS transition -- confirmed by direct testing that a plain
   `transition:transform` on this element, whose only rotation comes from
   the SVG presentation attribute (not a CSS transform: value), renders
   correctly for some target angles but silently gets stuck at a stale
   rotation for others: the transform ATTRIBUTE updates every time (verified
   via getAttribute), but the PAINTED shape doesn't move, with no pattern
   simple enough to work around. A real browser bug/edge case in that
   specific attribute+transition combination, not a race in our own code --
   removed rather than chased further. */
.dial-benchset{font-size:13px;color:var(--sub);}
.dial-benchset strong{color:var(--good);font-weight:700;}
.gauge-status{font-size:13.5px;color:var(--sub);text-align:center;}
.gauge-status strong{color:var(--ink);font-weight:700;}
/* ===== Mobile-only sandbox controls: real HTML, positioned from the SVG's
   own real empty-canvas geometry (verified with check_safe_zones.py), not
   guessed. Desktop keeps the .panel reference layout untouched -- these are
   display:none until the mobile media query turns them on. ===== */
.fig{position:relative;}
#railLeft, #railRight, #mobileLegend{display:none;}
.mrail{position:absolute;display:flex;flex-direction:column;overflow:hidden;}
.msliders{flex:1 1 auto;min-height:0;display:flex;gap:16px;justify-content:center;}
.mvslide{flex:0 0 auto;height:100%;display:flex;flex-direction:column;align-items:center;gap:6px;}
.mreadout{flex:0 0 auto;font-family:ui-monospace,monospace;font-weight:700;font-size:14px;
  color:var(--accent);white-space:nowrap;transition:color 0.2s ease;}
.mreadout.inwin{color:var(--good);}
.mtrackwrap{position:relative;flex:1 1 auto;min-height:0;width:44px;display:flex;
  justify-content:center;touch-action:none;cursor:grab;}
.mtrackwrap:active{cursor:grabbing;}
.mtrack{position:relative;width:12px;height:100%;border-radius:6px;background:var(--track);}
.mfill{position:absolute;left:0;right:0;background:var(--c-yoke);border-radius:6px;}
.mband{position:absolute;left:0;right:0;background:var(--good);opacity:0.55;}
.mcenter{position:absolute;left:-6px;right:-6px;height:2px;background:var(--c-cast-line);opacity:0.35;}
.mthumb{position:absolute;left:50%;width:30px;height:30px;margin-left:-15px;margin-top:-15px;
  border-radius:50%;background:var(--panel);border:4px solid var(--accent);
  box-shadow:0 2px 5px rgba(20,40,70,0.3);box-sizing:border-box;}
.mlabel{flex:0 0 14px;font-size:10.5px;font-weight:600;color:var(--sub);text-align:center;
  line-height:14px;letter-spacing:0.3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
/* display:none is the real default (set above with #railLeft/#railRight) --
   this was wrongly re-declaring display:flex unconditionally, which stayed
   invisible while desktop's .fig was a small boxed card but started
   colliding with the new full-bleed #npLegend the moment the illustration
   grew to fill the screen (found 2026-09-27). Only max-width:700px below
   turns this on. */
#mobileLegend{position:absolute;flex-direction:column;justify-content:center;
  gap:10px;overflow:hidden;}
.mlrow{display:flex;gap:5px;align-items:baseline;white-space:nowrap;overflow:hidden;
  text-overflow:ellipsis;min-width:0;font-family:ui-monospace,monospace;font-size:8px;}
.mlrow b{font-weight:700;color:var(--ink);}
.mlrow span{font-weight:400;color:var(--sub);}
@media (max-width:700px){
  /* The sandbox view: the fig fills the first screen (Franz -- mobile is a
     real-estate constraint, so the illustration gets priority), with the
     new rail sliders/legend positioned in its own genuinely-empty canvas
     space instead of a separate control bar stealing room from the picture.
     Everything #ctrlbar used to hold that isn't Play/Practice moves into
     the rails; the nameplate/valve controls stay reachable by scrolling
     below the fig, not removed. */
  body{padding:0;}
  .pagehead{padding:8px 10px 0;}
  h1{font-size:15px;}
  /* .row's desktop align-items:flex-start sizes children to their own
     content width instead of stretching -- without overriding it here,
     .fig collapses to a narrow column with the rest of the screen empty. */
  .row{flex-direction:column;align-items:stretch;}
  /* The desktop .fig svg rule is width:100%;height:auto -- the SVG grows to
     its own natural aspect-based height with nothing constraining it. On a
     narrow phone that natural height happens to be close to one screen, so
     this looked fine there, but it's coincidence, not the fit-to-screen
     behavior actually built and verified in the prototype: height:100% on
     a FIXED-height parent, so the SVG is contained within whatever box it's
     given (letterboxed as needed) instead of dictating the box's height. */
  .fig{flex:none;height:88vh;height:88dvh;padding:4px;}
  .fig svg{height:100%;}
  .panel{max-width:none;}
  #ctrlbar{display:flex;gap:8px;margin-bottom:8px;}
  #ctrlbar .ctl, #statusline, #npLegend, #pb-status{display:none;}
  #pb-play, #pv-play{flex:1 1 0;font-size:13px;padding:9px 6px;}
  .stepper{height:38px;}
  .stepper .stepbtn{flex-basis:44px;font-size:21px;}
  #railLeft, #railRight{display:flex;}
  #mobileLegend{display:flex;}
  /* desktop-only nameplate tab, now drawn into the svg itself -- mobile
     keeps its own separate nameplate access (scroll below the fig) */
  .np-tab-svg{display:none;}
  /* Stage 1 drafting-template shell (2026-09-28): the index rail and the
     inert lesson note/leader stubs are desktop-only, defensively hidden
     here too even though #indexRail already defaults to display:none
     above -- matches this file's existing pattern of an explicit mobile
     kill switch for every desktop-only addition. */
  #indexRail, .note, .leader{display:none;}
  body.practicing{overflow:hidden;}
  body.practicing .pagehead{display:none;}
  body.practicing #railLeft, body.practicing #railRight,
  body.practicing #mobileLegend{display:none;}
  body.practicing .row{height:100dvh;height:100vh;flex-direction:column;flex-wrap:nowrap;
    gap:6px;padding-top:8px;}
  body.practicing .fig{flex:1 1 auto;min-height:0;padding:6px;}
  body.practicing .fig svg{height:100%;width:100%;}
  body.practicing .panel{flex:0 0 auto;max-width:none;}
  body.practicing #cap{display:none;}
}
/* ===== Desktop: single full-bleed background, no card, no side panel
   (approved 2026-09-27). The actuator fills the screen exactly like the
   mobile fig already does; the gauge/hex-slider/legend stay DOM children of
   #ctrlbar (unchanged) but escape to the viewport via position:fixed and
   are placed by layoutDesktopControls() in the SAME verified-empty
   SVG-space rectangles already proven for the mobile rails (they're facts
   about the drawing itself, not the screen, so they hold at any scale).
   Play/Practice move into a slim fixed bottom bar; the nameplate becomes a
   collapsed drawer with a pull-tab, off by default, so it's available
   without permanently taking up screen real estate. ===== */
@media (min-width:701px){
  /* Correction (2026-09-28): the base body{padding:18px} rule (pre-existing,
     from before the drafting-template layout) was never overridden here --
     only mobile's own media query zeroes it. Harmless while the SVG was
     hardcoded to 92vh (8vh of slack absorbed the offset invisibly), but once
     the SVG was tightened to fill the new bordered/padded .fig box exactly,
     that same un-zeroed 18px surfaced as a real, measured overlap between
     the figure's bottom edge and the fixed-position titleblock above it (all
     spacing here is meant to come from --sheet-inset / .fig's own padding,
     not a leftover base rule). Mirrors mobile's existing body{padding:0}. */
  body{padding:0;overflow:hidden;}
  .pagehead{position:fixed;top:0;left:0;right:0;z-index:9;padding:14px 20px;
    display:flex;align-items:center;justify-content:space-between;pointer-events:none;}
  .pagehead > *{pointer-events:auto;}
  /* Stage 1 (2026-09-28): the "Fisher 657 Working Model" h1 is redundant
     once the title block carries that identity (EMERSON / title+subtitle /
     provenance) -- hidden rather than deleted so #theme-toggle, its DOM
     sibling, can stay exactly where it is in the markup (mobile still shows
     both, unchanged) and just get repositioned below via its own
     position:fixed rule. .pagehead itself stays in the DOM with zero visual
     footprint once its only visible child is display:none. */
  .pagehead h1{display:none;}
  .row{display:block;height:100vh;height:100dvh;}
  /* Correction (2026-09-28): the figure now lives INSIDE the bordered sheet
     inset, clear of the titleblock (bottom) and the index rail (right) --
     previously it filled the raw viewport via vh/vw units with no awareness
     of either. Padding on .fig reserves that clearance; the padding-right
     widens in lockstep with the rail via the same var(--railw-*) swap every
     other edge-anchored element already uses. The SVG itself switches from
     hardcoded vh/vw to height:100%/width:auto of this now-correctly-sized
     box, so it's never wider/taller than the space actually left for it --
     #asm's live getBoundingClientRect() (which every placement function in
     this file reads) reflects the new, smaller box automatically; no other
     function needs to change. */
  .fig{width:100%;height:100%;background:none;border:none;border-radius:0;
    box-sizing:border-box;
    padding:var(--sheet-inset) var(--railw-collapsed) calc(var(--tb-h) + var(--sheet-inset)) var(--sheet-inset);
    display:flex;align-items:center;justify-content:center;
    transition:padding-right .3s ease;}
  body.rail-open .fig{padding-right:var(--railw-open);}
  /* Fixed a real bug Franz caught (2026-09-30): "the model is covered up
     by the animator pane". #animatorPanel was position:fixed and docked
     against the rail, but nothing told .fig to make room for it the way
     it already does for the rail itself (the rule right above) -- so the
     panel just sat on top of wherever the model happened to be rendering.
     Same fix, same mechanism: .fig's own padding shrinks its real content
     box, and #asm (which reads .fig's live box on every resize) draws
     itself into whatever's left, automatically clear of the panel.
     Docked against --railw-COLLAPSED, not --railw-open (2026-09-30, round
     2 -- Franz: "more real estate, like it collapsing the vertical bar
     pane"): openAnimator() now collapses the rail instead of forcing it
     open the way Physics does, freeing 330-58=272px for a genuinely usable
     writing/checklist width -- see openAnimator() for why the panel needs
     its own close control once the rail (where "Animator" lives) tucks
     itself away. */
  body.animator-open .fig{padding-right:calc(var(--railw-collapsed) + var(--animw));}
  .fig svg{height:100%;width:auto;max-width:100%;display:block;}
  /* Decorative single border around the whole sheet (figure + both
     instrument columns + titleblock + rail + corner) -- purely visual,
     inert (pointer-events:none), sits at the same inset every fixed element
     below is anchored to. Static regardless of rail state, matching the
     reference (only the interior content reflows, not the outer frame). */
  #sheetBorder{position:fixed;top:var(--sheet-inset);left:var(--sheet-inset);
    right:var(--sheet-inset);bottom:var(--sheet-inset);border:1px solid var(--rule);
    box-sizing:border-box;pointer-events:none;z-index:1;}
  /* .panel's own box disappears (no flex-basis, no leftover width) while its
     children -- all position:fixed once placed -- still render normally. */
  .panel{display:contents;}
  /* Stage 1 (2026-09-28): #ctrlbar's own box no longer needs to visually
     BE the title block -- that job moves onto #titleblock directly below,
     which also now leaves room on its right for the index rail and reflows
     with it. #ctrlbar stays in normal flow (harmless, zero footprint) so
     mobile's own #ctrlbar flex-row markup is completely untouched; only
     its diagnostic children stay hidden on desktop. */
  #ctrlbar audio, #statusline, #pb-status{display:none;}
  /* Title block: bottom bar, left edge to the index rail's near edge
     (var(--railw-collapsed), widening to var(--railw-open) when the rail
     opens -- .transition on `right` is what makes the whole bar reflow in
     sync with the rail instead of being covered by it). */
  #titleblock{position:fixed;left:var(--sheet-inset);
    right:calc(var(--railw-collapsed) + var(--sheet-inset));bottom:var(--sheet-inset);
    height:var(--tb-h);display:flex;align-items:center;justify-content:space-between;
    gap:28px;padding:0 28px;margin:0;background:var(--panel);
    border-top:1px solid var(--border-strong);z-index:6;box-sizing:border-box;
    transition:right .3s ease;}
  body.rail-open #titleblock{right:calc(var(--railw-open) + var(--sheet-inset));}
  .tb-brand{font-family:Arial,Helvetica,sans-serif;font-weight:800;font-size:19px;
    letter-spacing:1.5px;color:var(--ink);flex:0 0 auto;}
  /* Correction (2026-09-29): flex-centering .tb-title in the space left over
     between .tb-brand and .tb-provenance only centers it on the TITLEBLOCK's
     own leftover space -- not on the actuator, since brand and provenance
     are different widths (Franz: "the title isn't centered... on the
     actuator"). Taken out of flex flow and positioned by JS instead
     (positionTitle(), called from layoutDesktopControls() alongside the
     other real-geometry-driven placement in this file) directly on top of
     the figure's true horizontal center (#asm's own getBoundingClientRect,
     the same reference the instruments are already centered against) --
     #titleblock's position:fixed makes it the containing block. brand/
     provenance stay flex children of #titleblock and keep hugging their own
     edges via justify-content:space-between once .tb-title is out of flow. */
  .tb-title{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    text-align:center;min-width:0;}
  .tb-title-main{font-size:15px;font-weight:700;letter-spacing:0.4px;color:var(--ink);}
  .tb-title-sub{font-size:12px;color:var(--sub);margin-top:2px;}
  .tb-provenance{flex:0 0 auto;font-size:11px;color:var(--muted);text-align:right;
    max-width:260px;}
  /* Corner cell (template rule: same row as the title block, same height,
     continuous top rule) -- no separate wrapper element needed since
     #theme-toggle is already position:fixed once placed elsewhere in this
     file; it just IS the corner cell's box directly. DOM location is
     unchanged (still a .pagehead child, mobile-safe) -- only its desktop
     position/sizing is overridden here. */
  #theme-toggle{position:fixed;top:auto;left:auto;right:var(--sheet-inset);
    bottom:var(--sheet-inset);
    width:var(--railw-collapsed);height:var(--tb-h);margin:0;padding:0;
    border:1px solid var(--border-strong);border-right:none;border-radius:0;
    border-top:1px solid var(--border-strong);background:var(--panel);
    display:flex;align-items:center;justify-content:center;gap:8px;
    box-sizing:border-box;z-index:8;transition:width .3s ease;}
  body.rail-open #theme-toggle{width:var(--railw-open);}
  /* Correction (2026-09-28): the reference (final-panel-open.png) shows the
     corner button carrying a text label ("Dark mode"/"Light mode") once the
     rail panel is open, icon-only when collapsed -- same pattern as the
     approved template's own .theme-label rule. #theme-glyph/.theme-label
     are separate children now (paint() below sets both) rather than one
     textContent overwrite, which only ever fit the icon alone. Base hide
     (mobile-safe) is a plain, non-media rule below; this just re-shows it
     once desktop's rail is open. */
  body.rail-open .theme-label{display:inline;}
  .ctl{position:fixed;transform:translate(-50%,-50%);width:max-content;z-index:5;
    text-align:center;}
  /* display/font-size/color/weight are set on the higher-specificity
     "#ctrlbar .ctl label" rule above -- this only adds what that rule
     doesn't set, so there's no repeat of the specificity bug fixed there. */
  .ctl label{letter-spacing:0.4px;text-transform:uppercase;margin-bottom:8px;}
  #cap{position:fixed;left:50%;bottom:60px;transform:translateX(-50%);max-width:560px;
    text-align:center;border:none;padding:0 12px;min-height:0;margin:0;
    background:none;pointer-events:none;}
  /* #valveRow, #pv-play stay DOM children of #ctrlbar/#panel (mobile needs
     them there, unchanged) but are laid out into the top-right bar on
     desktop by layoutTopBar() (JS), which sets position/top/left directly
     -- no position or offsets set here, just the visual sizing that
     JS-driven placement doesn't touch. #pb-play is desktop-hidden in favor
     of the index rail below (mobile keeps the single button, unchanged). */
  #valveRow{display:flex;align-items:center;margin:0;z-index:9;font-size:12.5px;
    background:var(--panel);padding:6px 10px;border-radius:6px;
    border:1px solid var(--border);}
  #pv-play{z-index:9;}
  #pb-play{display:none;}
  /* Correction (2026-09-28): Franz -- "Practice the SOP and stem connector
     stuff is in the way." Neither appears anywhere in the real approved
     template (final-panel-open.png reference). Hidden on desktop only;
     mobile keeps both exactly as they are. The underlying valve-coupling
     mechanism (setValve(), the #valve checkbox's own change handler, PB
     state) stays fully intact -- only the manual desktop toggle is hidden.
     layoutTopBar() still runs harmlessly over these (a display:none
     element's offsetWidth is 0), left as-is rather than special-cased. */
  #pv-play, #valveRow{display:none;}
  /* Index rail (Stage 1, 2026-09-28): replaces the round-12 left-margin
     #sopTopics list. Right edge of the sheet, collapsed to a numbered-dot
     strip by default, opens to a full lesson-name list; widening it is
     what pushes #titleblock/#theme-toggle over via the shared
     var(--railw-*) custom properties (see body.rail-open rules above).
     layoutDesktopControls() reads this element's live width so the
     pressure-gauge margin shrinks to stay clear of it when open -- see the
     JS comment there. */
  #indexRail{display:flex;flex-direction:column;align-items:center;gap:12px;
    position:fixed;top:var(--sheet-inset);right:var(--sheet-inset);
    bottom:calc(var(--tb-h) + var(--sheet-inset));width:var(--railw-collapsed);
    padding:14px 0;background:var(--panel);border-left:1px solid var(--border-strong);
    box-sizing:border-box;overflow:hidden;z-index:7;transition:width .3s ease;}
  body.rail-open #indexRail{width:var(--railw-open);align-items:stretch;padding:0;}
  .rail-toggle{flex:none;width:34px;height:34px;border:1px solid var(--border-strong);
    background:transparent;border-radius:4px;display:grid;place-items:center;
    cursor:pointer;color:var(--ink);}
  .rail-toggle:hover{border-color:var(--accent);}
  /* Bug fix (2026-09-28): this used to only reposition the toggle (margin)
     when the rail opened, leaving it visible alongside the panel's own
     Close button -- two disconnected-looking controls instead of the
     reference's one. The whole collapsed strip (toggle + numbered dots)
     hides together when the panel opens; only the panel's own header
     Close button is the close affordance, matching the reference exactly. */
  body.rail-open .rail-toggle{display:none;}
  .rail-nums{flex:1;min-height:0;width:100%;display:flex;flex-direction:column;
    align-items:center;gap:9px;overflow-y:auto;}
  body.rail-open .rail-nums{display:none;}
  .num-btn{--p:0;flex:none;width:32px;height:32px;border-radius:50%;border:0;
    padding:2.5px;cursor:pointer;
    background:conic-gradient(var(--accent) calc(var(--p)*1%), var(--border-strong) 0);}
  .num-btn span{display:grid;place-items:center;width:100%;height:100%;border-radius:50%;
    background:var(--panel);font-family:system-ui;font-weight:700;font-size:.9rem;
    color:var(--ink);}
  .num-btn.playing{background:conic-gradient(var(--good) 100%, var(--border-strong) 0);}
  .num-btn.playing span{color:var(--good);}
  .rail-panel{display:none;}
  body.rail-open .rail-panel{display:flex;flex-direction:column;height:100%;
    padding:16px 18px;box-sizing:border-box;animation:railFadeIn .25s ease;}
  @keyframes railFadeIn{from{opacity:0}to{opacity:1}}
  .rail-panel-head{display:flex;align-items:center;justify-content:space-between;
    margin-bottom:14px;}
  .rail-panel-head h2{font-family:var(--display);font-weight:600;font-size:1.3rem;
    margin:0;color:var(--ink);}
  .rp-close{border:1px solid var(--border-strong);background:transparent;
    border-radius:3px;padding:2px 9px;cursor:pointer;font-size:.85rem;color:var(--ink);}
  .rp-list{list-style:none;margin:0;padding:0;overflow-y:auto;}
  .sop-topic{display:flex;align-items:center;gap:10px;width:100%;
    text-align:left;background:none;border:none;border-bottom:1px solid var(--border);
    padding:9px 6px;cursor:pointer;font-size:15px;font-weight:600;color:var(--ink);
    font-family:inherit;border-radius:4px;}
  .sop-topic:hover{background:var(--ring);}
  .sop-topic:last-child{border-bottom:none;}
  /* Circled number badge (2026-09-29): matches the reference template's own
     opened-panel row numbering (a thin-outlined circle around the digit),
     not the plain "1." text this had before -- Franz caught the mismatch
     against final-panel-open.png directly. Same visual family as the
     collapsed rail's .num-btn dots, just unfilled/simpler for an inline row. */
  .sop-topic .num{flex:0 0 auto;width:22px;height:22px;box-sizing:border-box;
    border:1.5px solid var(--border-strong);border-radius:50%;
    display:grid;place-items:center;font-size:.8rem;font-weight:700;color:var(--sub);}
  .sop-topic.playing{color:var(--good);}
  .sop-topic.playing .num{color:var(--good);border-color:var(--good);}
  /* Correction (2026-09-28): rail panel content rebuilt to match the real
     approved template (final-panel-open.png) -- a prominent "Play all
     lessons" row with the total duration, each lesson row showing its own
     duration, and a References section (Objectives/Parts/Procedure) below
     the list. Durations are computed from TIMING/SECTIONS, not invented. */
  .sop-topic .dur{margin-left:auto;flex:0 0 auto;color:var(--sub);
    font-size:.82rem;font-weight:400;font-variant-numeric:tabular-nums;}
  .rail-playall{display:flex;align-items:center;gap:10px;width:100%;
    border:1px solid var(--border-strong);background:transparent;border-radius:6px;
    padding:10px 12px;cursor:pointer;font-weight:700;font-size:.95rem;color:var(--ink);
    margin:0 0 14px;font-family:inherit;}
  .rail-playall:hover{background:var(--ring);}
  .rail-playall.playing{color:var(--good);border-color:var(--good);}
  .rail-playall .playicon{flex:none;color:var(--accent);}
  .rail-playall.playing .playicon{color:var(--good);}
  .rail-playall .dur{margin-left:auto;font-weight:400;color:var(--sub);
    font-variant-numeric:tabular-nums;}
  .rail-divider{border:0;border-top:1px solid var(--border);margin:18px 0 10px;}
  .rail-refs-head{font-size:.75rem;font-weight:700;letter-spacing:.06em;
    text-transform:uppercase;color:var(--muted);margin:0 0 8px;}
  .rail-ref-link{display:block;background:none;border:0;padding:6px 0;
    text-align:left;cursor:pointer;font-size:.92rem;color:var(--accent);
    text-decoration:underline;font-family:inherit;}
  .rail-ref-link:hover{color:var(--accent-alt);}
  /* Physics reference sheet (2026-09-30, rebuilt again -- Franz: "nuke it
     all... use our actual models... synthesize the handwritten parts into
     our new attempt"). Third pass. What survives from the last two:
     staying inside the app's own panel/token system (theme-aware, not a
     separate world), replacing exactly #adjCtl/#pressrow/.fig and leaving
     pagehead/rail/titleblock CHROME untouched (only titleblock's TEXT
     updates -- see openPhysicsSheet()), and the handwritten Caveat layer
     for labels/equations as an ACCENT. What's gone: the small invented
     sketch-icon doodles, and the three-separate-card-overlay structure.
     New structure -- one unified overlay laid out in two columns: LEFT is
     the real full assembly (every part this model actually draws, cloned
     live rather than redrawn -- see openPhysicsSheet()) with three
     handwritten callouts + leader lines; RIGHT is three stacked rows, each
     a real cropped rendering of one part plus its physics detail. Every
     rendered part keeps its OWN real classes/colors (.cast/.sp-coil/
     .sp-adj/...) -- nothing here is restyled into ink linework anymore.
     Positioned against .fig's OWN reserved safe area (--sheet-inset/
     --railw-open/--tb-h -- the exact tokens .fig's padding already uses)
     rather than inset:0, which ignores an ancestor's padding and is why
     earlier attempts kept landing under the rail/titleblock. */
  body.physics-open #adjCtl>label, body.physics-open #adjCtl .instrument,
  body.physics-open #pressrow>label, body.physics-open #pressrow .instrument,
  body.physics-open #asm{visibility:hidden;}
  #psFull{display:none;position:absolute;
    top:var(--sheet-inset); left:var(--sheet-inset);
    right:var(--railw-open); bottom:calc(var(--tb-h) + var(--sheet-inset));
    box-sizing:border-box;gap:22px;}
  body.physics-open #psFull{display:flex;}
  #psLeftCol{position:relative;flex:1 1 56%;min-width:0;
    background:var(--panel);border:1px solid var(--border);border-radius:10px;
    display:flex;align-items:center;justify-content:center;padding:14px;
    box-sizing:border-box;}
  /* height:auto, not height:100% (2026-09-30, fixing the real cutoff Franz
     caught -- "the casing is cut off on the bottom"). height:100% forces a
     literal box height regardless of aspect ratio; paired with max-width
     clamping the resulting auto width back down, the two constraints
     fought and the tall, narrow model (viewBox ~0.66 aspect) ended up
     taller than the column, cut off at the bottom instead of scaled down
     to fit. max-width+max-height with width:auto;height:auto (the same
     "contain" pattern already used for .ps-row-fig svg below) lets the
     browser shrink by whichever axis is tighter and never overflow either. */
  #psLeftCol>svg{max-width:100%;max-height:100%;width:auto;height:auto;display:block;}
  #psLeaders{position:absolute;inset:0;pointer-events:none;overflow:visible;}
  #psLeaders path{fill:none;stroke:var(--sub);stroke-width:1.4;opacity:.8;}
  #psRightCol{flex:1 1 44%;min-width:260px;display:flex;flex-direction:column;
    gap:16px;overflow:auto;}
  .ps-row{flex:1 1 0;min-height:0;background:var(--panel);
    border:1px solid var(--border);border-radius:10px;padding:14px 20px;
    display:flex;align-items:center;gap:20px;box-sizing:border-box;}
  /* Contain by BOTH axes, not just width (2026-09-30, fixing real overflow
     Franz caught -- the adjuster/spring crops are taller-than-wide, and
     width:100%;height:auto;overflow:visible let their real height run past
     the row's own height into the row below). max-width+max-height with
     width:auto;height:auto is the standard "fit within a box, keep aspect
     ratio" pairing -- the SVG's own viewBox ratio does the rest. */
  .ps-row-fig{flex:0 0 auto;width:34%;max-width:170px;height:100%;
    display:flex;align-items:center;justify-content:center;overflow:hidden;}
  .ps-row-fig svg{max-width:100%;max-height:100%;width:auto;height:auto;
    display:block;}
  .ps-row-text{flex:1 1 auto;min-width:0;}
  .ps-fignum{font-family:var(--hand);font-weight:700;font-size:21px;
    color:var(--accent);display:block;margin-bottom:5px;}
  .ps-eq{font-family:var(--hand);font-size:18px;line-height:1.35;
    color:var(--ink);display:block;}
  .ps-eq .ps-note{font-family:var(--font-body);font-size:10.5px;
    letter-spacing:.02em;color:var(--sub);display:block;margin-top:4px;
    font-style:italic;}
  /* The three callouts on the full model -- handwritten label, positioned
     in the letterboxed margin around the (taller-than-wide) model rather
     than gridded, with a real leader line (computed in layoutPhysicsLeader
     from the actual anchor points below, not guessed) pointing to the real
     part on the model itself. */
  .ps-callout{position:absolute;font-family:var(--hand);text-align:left;}
  .ps-callout .ps-fignum{font-size:19px;margin-bottom:0;}
  /* Repositioned 2026-09-30 (Franz: Fig. 1.1 "a little far from the
     action... drop it down to below the lower diaphragm casing in some
     open space there"; Fig. 1.3 "too far down in the corner, move it up
     closer"). Real open space, not guessed: the lower casing's own real
     bbox bottom sits at y~493 of the 0-2250 viewBox (~22%), and the wide
     casing gives way to the much narrower yoke right there, so there's
     real empty margin beside the yoke's neck just past that line --
     top:25% lands the chamber callout in it. The adjuster anchor itself
     sits at y=1200 (~53% down); bottom:38% (~62% down) keeps the callout
     close to that without the box's own text overlapping the model. */
  #psCalloutChamber{top:25%;left:3%;max-width:150px;transform:rotate(-1.6deg);}
  #psCalloutSpring{top:40%;right:3%;max-width:150px;transform:rotate(1.1deg);}
  #psCalloutAdjuster{bottom:38%;left:3%;max-width:150px;transform:rotate(-0.9deg);}
  /* No separate "Back to schematic" button (2026-09-30, Franz: "just make
     it so when we click the physics button to open, we can click it again
     to close"). #physicsRefLink is the one control now -- toggled by
     openPhysicsSheet()/closePhysicsSheet() checking body's own
     physics-open class -- and this active state is how "click again to
     close" stays discoverable: bold, green (the same "currently active"
     color this rail already uses for .rail-playall.playing), underline
     dropped so it doesn't read as a plain navigation link anymore. The
     LABEL TEXT itself changes to "Close Physics" too (set in JS), which is
     the actually-unambiguous part -- the color is reinforcement, not the
     whole signal. */
  #physicsRefLink.active{color:var(--good);font-weight:700;text-decoration:none;}
  /* Animator (2026-09-30, Phase 1 -- Franz: a workspace for authoring the
     narration rows + per-row highlight checklist/sequence, live against
     the REAL model, not a static reference view like Physics. Same
     open/close toggle mechanism and .active styling as #physicsRefLink
     above, reused deliberately for consistency, not because the two tools
     are the same thing -- see openAnimator()/closeAnimator() below.
     Unlike Physics, the live schematic (.fig/#asm) stays fully visible and
     untouched here -- the whole point is watching the real focus()/dim
     behavior react as rows are edited, so nothing gets hidden or cloned
     except the two instrument cards, which just aren't relevant while
     authoring narration. */
  #animatorRefLink.active{color:var(--good);font-weight:700;text-decoration:none;}
  body.animator-open #adjCtl>label, body.animator-open #adjCtl .instrument,
  body.animator-open #pressrow>label, body.animator-open #pressrow .instrument{visibility:hidden;}
  /* width:var(--animw) exactly, not a separate vw-based guess -- it has to
     match the SAME value .fig's padding-right reserves above, or the two
     numbers drift apart again (which is exactly how this overlapped the
     model the first time: the panel's own width and the space .fig was
     told to leave were two unrelated numbers). */
  #animatorPanel{display:none;position:fixed;
    top:var(--sheet-inset); right:var(--railw-collapsed);
    bottom:calc(var(--tb-h) + var(--sheet-inset)); width:var(--animw);
    background:var(--panel);border:1px solid var(--border);border-radius:10px;
    box-sizing:border-box;padding:16px;overflow-y:auto;}
  body.animator-open #animatorPanel{display:block;}
  .an-head{display:flex;align-items:center;justify-content:space-between;
    margin-bottom:14px;}
  .an-head h2{font-family:var(--display);font-weight:600;font-size:1.15rem;
    margin:0;color:var(--ink);}
  .an-head p{margin:2px 0 0;font-size:12px;color:var(--sub);}
  .an-head-btns{display:flex;align-items:center;gap:8px;flex:none;}
  #anAddRow{background:var(--accent);color:#fff;border:0;border-radius:6px;
    padding:8px 14px;font-size:13px;font-weight:600;cursor:pointer;
    flex:none;}
  #anAddRow:hover{filter:brightness(1.1);}
  #anClose{background:none;border:1px solid var(--border-strong);
    color:var(--sub);border-radius:6px;width:32px;height:32px;font-size:18px;
    line-height:1;cursor:pointer;flex:none;}
  #anClose:hover{color:var(--ink);border-color:var(--ink-soft);}
  /* Row management (2026-09-30, Franz: "some way to manage the rows for
     sequencing... numbering or ability to collapse each row"). Row number
     is computed from array position at render time, never stored -- it's
     always right even after a reorder or delete. Reordering is up/down
     buttons, not drag-and-drop, for the same reason the sequence-order
     numbers are typed digits and not drawn arrows: same expressive result,
     far more reliable to build and to use. */
  .an-row{border:1px solid var(--border);border-radius:8px;padding:12px;
    margin-bottom:12px;box-sizing:border-box;}
  .an-row-head{display:flex;align-items:center;gap:8px;}
  .an-collapse{background:none;border:0;color:var(--sub);font-size:10px;
    cursor:pointer;flex:none;width:16px;padding:0;}
  .an-collapse:hover{color:var(--ink);}
  .an-row-num{font-family:var(--font-body);font-weight:600;font-size:12px;
    color:var(--ink);flex:none;}
  .an-row-preview{flex:1 1 auto;min-width:0;font-size:12px;color:var(--sub);
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .an-row-preview em{font-style:italic;opacity:0.7;}
  .an-row-move{display:flex;gap:2px;flex:none;margin-left:auto;}
  .an-row-move button{background:none;border:1px solid var(--border);
    color:var(--sub);border-radius:3px;width:20px;height:20px;font-size:11px;
    cursor:pointer;line-height:1;padding:0;}
  .an-row-move button:hover:not(:disabled){color:var(--ink);
    border-color:var(--ink-soft);}
  .an-row-move button:disabled{opacity:0.3;cursor:default;}
  .an-row-delete{background:none;border:0;color:var(--sub);font-size:16px;
    cursor:pointer;flex:none;width:20px;line-height:1;padding:0;}
  .an-row-delete:hover{color:var(--accent-alt);}
  .an-row-body{display:flex;gap:14px;margin-top:10px;}
  .an-row-text{flex:1 1 58%;min-width:0;display:flex;flex-direction:column;
    gap:8px;}
  .an-row-text textarea{width:100%;min-height:110px;resize:vertical;
    font-family:var(--font-body);font-size:13px;line-height:1.45;padding:9px;
    border:1px solid var(--border);border-radius:4px;background:var(--bg);
    color:var(--ink);box-sizing:border-box;}
  .an-row-actions{display:flex;gap:6px;flex-wrap:wrap;}
  .an-row-actions button{font-size:11px;padding:4px 9px;
    border:1px solid var(--border-strong);border-radius:4px;background:none;
    color:var(--sub);cursor:pointer;font-family:var(--font-body);}
  .an-row-actions button:hover{color:var(--ink);border-color:var(--ink-soft);}
  .an-row-checklist{flex:1 1 42%;min-width:0;display:flex;
    flex-direction:column;gap:5px;}
  .an-item{display:flex;align-items:center;gap:6px;font-size:12.5px;
    color:var(--ink);}
  .an-item input[type=checkbox]{flex:none;}
  .an-item span{flex:1 1 auto;}
  .an-item input[type=number]{width:34px;flex:none;padding:2px 3px;
    font-size:11px;border:1px solid var(--border);border-radius:3px;
    background:var(--bg);color:var(--ink);text-align:center;}
  .an-item input[type=number]:disabled{opacity:0.35;}
  /* Inert lesson note + leader stubs (Stage 1): present so Stage 3 has
     somewhere to wire real lesson narration/leader-lines into, but fully
     dormant -- the [hidden] attribute keeps them out of the render tree
     entirely until something explicitly un-hides them, which nothing does
     yet. Not positioned/styled beyond what's needed to prove they're inert
     and harmless; Stage 3 owns the real transition/positioning polish. */
  .note{position:fixed;top:80px;left:28px;max-width:34ch;z-index:4;
    background:var(--panel);border-left:2px solid var(--band);padding:10px 14px;
    border-radius:4px;box-shadow:0 4px 14px rgba(0,0,0,.12);}
  .note-head{font-family:var(--display);font-weight:600;font-size:.9rem;
    color:var(--ink-soft);margin:0 0 6px;}
  .note-text{margin:0;font-size:1.05rem;line-height:1.4;color:var(--ink);}
  .leader{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:3;}
  /* Nameplate: a small tab attached to the actuator's own right edge, right
     by the legend -- NOT a full-height screen-edge drawer (tried, rejected
     2026-09-27: read as unrelated screen chrome, and its paragraph of text
     was noise). Clicking it tabs a card out to the right from that same
     point on the actuator, collapsing back into the tab -- positioned by
     placeAnchor like the other instruments, so it's anchored to real
     verified-empty geometry, not a fixed screen edge.
     Round 2 tried making it look like it emerges from BEHIND the wall via a
     lower z-index than .fig, relying on .fig's painted content to cover the
     overlapping sliver. Dropped in round 3: it rendered differently across
     three different loads (fully hidden, a thin sliver, not occluded at
     all in Franz's own two browsers) -- a cross-stacking-context z-index
     trick like that is evidently not reliable here. Simpler and correct
     beats a nicer effect that doesn't reproduce: normal z-index, same tier
     as the other instruments, flush against the wall and fully visible. */
  /* No card/border wrapper here by design (Franz, 2026-09-27) -- the plate
     itself (drawn into the nameplate SVG below) is the only visible shape.
     This element just handles the tab-out/collapse mechanics. */
  #npCard{position:fixed;z-index:5;max-width:0;opacity:0;overflow:hidden;
    transition:max-width 0.3s ease, opacity 0.25s ease;}
  #npCard.open{max-width:420px;opacity:1;}
  #npCard svg{display:block;width:380px;max-width:80vw;
    filter:drop-shadow(0 6px 16px rgba(0,0,0,0.28));}
  body.practicing #practiceView{position:fixed;left:50%;bottom:24px;
    transform:translateX(-50%);background:var(--panel);border:1px solid var(--border);
    border-radius:12px;padding:16px 22px;box-shadow:0 8px 30px rgba(0,0,0,0.2);
    width:min(92vw,540px);z-index:6;margin:0;}
}
#asm > g, #asm > path{transition:opacity 0.4s ease;}
.pulse{animation:pbpulse 1.1s ease-in-out 3;}
@keyframes pbpulse{50%{opacity:0.3;}}
</style>
<script>__PARTSJS__</script>
<script>
(function(){
  try{
    const saved = localStorage.getItem('657-theme');
    if(saved === 'light' || saved === 'dark')
      document.documentElement.setAttribute('data-theme', saved);
  }catch(e){}
})();
</script>
<div id="sheetBorder"></div>
<div class="pagehead">
<h1>Fisher 657 Working Model</h1>
<button id="theme-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode">
  <span id="theme-glyph" aria-hidden="true">&#9680;</span><span class="theme-label"></span>
</button>
</div>
<div class="row">
<div class="fig">
<svg id="asm" viewBox="0 0 1480 2250">
  <g id="g-scale"></g>
  <g id="g-mount-back" style="display:none">
    <!-- bonnet neck: the round threaded cylinder the yoke sits around
         (easy-e IOM Figure 8; yoke locknut = key 15) -->
    <rect class="vnut" x="642.5" y="2028" width="200" height="140"/>
    <g id="boss-threads"></g>
  </g>
  <g id="g-fasteners">
    <!-- casing + yoke-top bolts, measured from the painted mask, symmetric about CX -->
    <rect class="vfast" x="1289" y="170" width="66" height="29" rx="3"/>
    <rect class="vfast" x="127.5" y="170" width="66" height="29" rx="3"/>
    <rect class="vfast" x="1289.5" y="245" width="67" height="42" rx="3"/>
    <rect class="vfast" x="128" y="245" width="67" height="42" rx="3"/>
    <rect class="vfast" x="916.5" y="446" width="65.5" height="27" rx="3"/>
    <rect class="vfast" x="536" y="446" width="65.5" height="27" rx="3"/>
  </g>
  <path id="p-yoke" class="cast"/>
  <path id="p-lower" class="cast"/>
  <g id="sp-spring-back"></g>
  <g id="g-stem">
    <rect class="sp-stem" x="704" y="205" width="77" height="1320" rx="4"/>
    <g id="g-stem-threads"></g>
  </g>
  <g id="g-vgrp" style="display:none">
    <!-- all dims measured from the painted masks (see README) -->
    <rect class="vstem" x="722.5" y="1490" width="40" height="800"/>
    <g id="g-dn">
      <rect class="vdisk" x="641.5" y="1561" width="202" height="14" rx="2"/>
      <rect class="vnut" x="700.5" y="1577" width="84" height="31" rx="3"/>
      <rect class="vnut" x="700.5" y="1610" width="84" height="31" rx="3"/>
    </g>
  </g>
  <g id="g-conn" style="display:none">
    <rect class="vconn" x="664.5" y="1415" width="156" height="147" rx="4"/>
  </g>
  <g id="g-valve-sil" style="display:none">
    <!-- non-cutaway valve silhouette: bonnet flange under the yoke legs,
         bonnet, globe body with line flanges. Deliberately muted; bench
         set is performed with zero valve forces. -->
    <path class="vsil" d="M 527,2150 L 957,2150 L 957,2192 L 887,2192
      L 872,2290 L 1010,2330 L 1092,2330 L 1092,2560 L 1010,2560
      L 940,2540 L 545,2540 L 475,2560 L 392,2560 L 392,2330 L 475,2330
      L 613,2290 L 598,2192 L 527,2192 Z"/>
    <line x1="392" y1="2445" x2="1092" y2="2445" stroke="var(--c-vsil-line)" stroke-width="2" stroke-dasharray="8 7"/>
  </g>
  <g id="g-mount" style="display:none">
    <!-- yoke locknut clamps the yoke ring down onto the bonnet shoulder -->
    <rect class="vnut" x="617.5" y="2052" width="250" height="46" rx="5"/>
    <line x1="700" y1="2052" x2="700" y2="2098" stroke="var(--c-hw-line)" stroke-width="2"/>
    <line x1="785" y1="2052" x2="785" y2="2098" stroke="var(--c-hw-line)" stroke-width="2"/>
    <!-- packing follower (key 13): collar rising out of the bonnet -->
    <rect class="vnut" x="694.5" y="1972" width="96" height="10" rx="2"/>
    <rect class="vnut" x="698.5" y="1975" width="88" height="60"/>
    <!-- Belleville live-load stack (ENVIRO-SEAL systems only) -->
    <g id="g-belleville" style="display:none">
      <path class="vnut" d="M 687.5,1972 L 742.5,1962 L 797.5,1972 L 797.5,1966 L 742.5,1956 L 687.5,1966 Z"/>
      <path class="vnut" d="M 687.5,1956 L 742.5,1966 L 797.5,1956 L 797.5,1950 L 742.5,1960 L 687.5,1950 Z"/>
      <path class="vnut" d="M 687.5,1950 L 742.5,1940 L 797.5,1950 L 797.5,1944 L 742.5,1934 L 687.5,1944 Z"/>
    </g>
    <!-- packing flange + studs + flange nuts (keys 3/4/5) -->
    <g id="g-pflange">
      <rect class="vstem" x="655.5" y="1929" width="14" height="99"/>
      <rect class="vstem" x="815.5" y="1929" width="14" height="99"/>
      <rect class="vconn" x="627.5" y="1951" width="230" height="24" rx="3"/>
      <rect class="vnut" x="645.5" y="1933" width="34" height="18" rx="2"/>
      <rect class="vnut" x="805.5" y="1933" width="34" height="18" rx="2"/>
    </g>
  </g>
  <g id="g-travelmark" style="display:none">
    <!-- Franz's field method: with the plug seated, mark the valve stem
         exactly 3/4 in below the actuator stem bottom; actuate down to the
         mark (within 1/16 in). Travel is set off this measurement, not off
         the bench-set pressure. Mark drawn in the rest frame:
         STEM_BOT (1525) + TRAVEL (140) = 1665. -->
    <line class="anno" x1="712" y1="1665" x2="772" y2="1665"/>
    <line class="anno" x1="800" y1="1525" x2="800" y2="1665" stroke-dasharray="6 5" stroke-width="2"/>
    <line class="anno" x1="792" y1="1531" x2="800" y2="1525" stroke-width="2"/>
    <line class="anno" x1="808" y1="1531" x2="800" y2="1525" stroke-width="2"/>
    <line class="anno" x1="792" y1="1659" x2="800" y2="1665" stroke-width="2"/>
    <line class="anno" x1="808" y1="1659" x2="800" y2="1665" stroke-width="2"/>
    <text class="anno-lbl" x="812" y="1604">3/4"</text>
    <text class="anno-lbl" x="778" y="1690">mark</text>
  </g>
  <g id="g-vermark" style="display:none">
    <!-- Spring Verification: mark where the stem's end sits at 11 psig,
         then lower to 3 and measure mark-to-stem-end = rated travel -->
    <line class="anno" x1="646" y1="1665" x2="702" y2="1665"/>
    <text class="anno-lbl" x="586" y="1690">mark</text>
    <g id="g-verbracket" style="display:none">
      <line class="anno" x1="632" y1="1525" x2="632" y2="1665" stroke-dasharray="6 5" stroke-width="2"/>
      <line class="anno" x1="624" y1="1531" x2="632" y2="1525" stroke-width="2"/>
      <line class="anno" x1="640" y1="1531" x2="632" y2="1525" stroke-width="2"/>
      <line class="anno" x1="624" y1="1659" x2="632" y2="1665" stroke-width="2"/>
      <line class="anno" x1="640" y1="1659" x2="632" y2="1665" stroke-width="2"/>
      <text class="anno-lbl" x="556" y="1604">3/4"</text>
    </g>
  </g>
  <g id="sp-adj-g">
    <!-- parametric adjuster: rod + wrench flats; dims measured from the
         painted mask (rod w118 y1068-1338, flats w140 y1338-1386). Rod
         stays ONE uniform width the full length -- boss and threaded
         section are the same solid material, no step in the rod's own
         outline (2026-09-29 correction: a first pass widened the threaded
         section's actual material, which Franz caught: "you actually
         widened the adjuster width, I just wanted the threads extended
         because I didn't want a smooth outer edge"). The clip below is
         wider than the rod itself, purely so the thread TEXTURE'S strokes
         can visibly poke a couple units past the rod's real edge -- a
         toothed silhouette from the texture alone, not a wider part. The
         top INSERTION_TRAVEL of the rod stays blank (see adjThreads()) --
         the real non-threaded boss segment that disappears into the
         seat's hub during insertion. -->
    <rect class="sp-adj" x="683.5" y="1068" width="118" height="270" rx="3"/>
    <rect class="sp-adj" x="672.5" y="1338" width="140" height="48" rx="4"/>
    <clipPath id="adjclip"><rect x="677.5" y="1068" width="130" height="270" rx="3"/></clipPath>
    <g id="sp-adj-threads" clip-path="url(#adjclip)"></g>
  </g>
  <g id="sp-seat-g">
    <!-- parametric seat: locating boss inside the coil, flange the spring
         rests on, hub seated on the adjuster (boss w156, flange w314, hub w166).
         Shifted down 24 (2026-09-29, Franz) -- moved the REAL seat geometry
         itself to sit lower, rather than propping the old position up with
         invented geometry (a fixed "shelf" was tried and explicitly rejected:
         "You can't add geometry!"). 24 reuses the exact position Franz
         confirmed was correct when it was drawn as the (now removed) shelf,
         not a new invented number. SEAT0 below is shifted the same amount so
         the spring's own rendered coil stays exactly coincident with the
         seat's new position. -->
    <rect class="sp-seat" x="664.5" y="996" width="156" height="40" rx="3"/>
    <rect class="sp-seat" x="585.5" y="1032" width="314" height="29" rx="3"/>
    <rect class="sp-seat" x="659.5" y="1061" width="166" height="49" rx="3"/>
  </g>
  <g id="g-plate">
  <path id="p-plate" class="cast"/>
  <!-- fill the white slivers between the plate's boss (x715-769) and the
       stem's actual width (x704-781): the boss is narrower than the stem
       above y205 where the stem hasn't started yet -->
  <rect x="704" y="186" width="11" height="20" fill="var(--c-plate)"/>
  <rect x="769" y="186" width="12" height="20" fill="var(--c-plate)"/>
  <!-- the actual hole (measured via isPointInFill scan): x715-769,
       y187.5 down to well past the stem's top at y205 -->
  <rect x="715" y="186" width="54" height="21" fill="var(--c-plate)"/>
</g>
  <g id="sp-spring-front"></g>
  <path id="p-dia" class="dia"/>
  <path id="p-upper" class="cast"/>
  <!-- Nameplate tab: a native part of the drawing itself, not a separate
     HTML overlay aligned to it after the fact -- see round 4 in the JS
     comment for why. Round 7 (2026-09-27) root cause, found by directly
     querying the rendered path with isPointInFill instead of trusting
     check_safe_zones.py's reported number: x=888 was never the yoke wall at
     all. check_safe_zones.py's "occupied 596-888" for this y-band is the
     SPRING's modeled bounding box (596.5-888.5, from its ADJ/stroke-range
     rectangle in that script) -- the script's vertex-bbox approach for the
     yoke's own arc-heavy evenodd path apparently underestimated its true
     extent, so the union silently reported the spring's box instead,
     nowhere close to the real wall. Every prior round's fix was tuned
     against that wrong number, which is why none of them ever looked right
     no matter how carefully the offset was recomputed. isPointInFill()
     against the live rendering shows the yoke's actual right wall is a
     constant 21-unit-thick band at x=925-946 for y600-1000 (verified at
     600/650/.../1000, all identical) -- x=946 is the true outside edge. -->
  <g id="npTab" class="np-tab-svg" role="button" tabindex="0" aria-label="Nameplate" aria-expanded="false" aria-controls="npCard">
    <rect x="946" y="685" width="44" height="170" rx="10"/>
    <text x="968" y="770" transform="rotate(-90 968 770)">NAMEPLATE</text>
  </g>
</svg>
<!-- Physics reference sheet (2026-09-30, rebuilt again per Franz -- see the
     CSS comment on #psFull for the full history/reasoning). Every pf-*/
     pr-*-prefixed element below starts empty or with a placeholder "d" and
     is populated in openPhysicsSheet() by cloning the REAL live part
     (innerHTML+transform for the dynamic ones, R[...] path strings for the
     static ones) -- never hand-drawn, so this stays trustworthy as "our
     actual model" even as the real geometry evolves. Two separate sets of
     targets (pf- for the left column's full assembly, pr- for the right
     column's three individual close-ups) because an SVG element can't be
     shared across two <svg> roots -- each needs its own copy. No separate
     "Back to schematic" control -- #physicsRefLink itself toggles closed
     again (see its CSS comment above and openPhysicsSheet()/
     closePhysicsSheet() below). -->
<div id="psFull">
  <div id="psLeftCol">
    <svg viewBox="0 0 1480 2250" aria-hidden="true">
      <path id="pf-yoke" class="cast"/>
      <path id="pf-lower" class="cast"/>
      <g id="pf-spring-back"></g>
      <g id="pf-stem"></g>
      <g id="pf-adj-g"></g>
      <g id="pf-seat-g"></g>
      <g id="pf-plate-wrap"><path id="pf-plate" class="cast"/></g>
      <g id="pf-spring-front"></g>
      <path id="pf-dia" class="dia"/>
      <path id="pf-upper" class="cast"/>
      <circle id="pf-anchor-chamber" cx="742.5" cy="80" r="3" fill="none" stroke="none"/>
      <circle id="pf-anchor-spring" cx="742.5" cy="560" r="3" fill="none" stroke="none"/>
      <circle id="pf-anchor-adjuster" cx="742.5" cy="1200" r="3" fill="none" stroke="none"/>
    </svg>
    <svg id="psLeaders"><path id="psLeaderChamber"/><path id="psLeaderSpring"/><path id="psLeaderAdjuster"/></svg>
    <div class="ps-callout" id="psCalloutChamber">
      <span class="ps-fignum">Fig. 1.1 &mdash; Diaphragm chamber</span>
    </div>
    <div class="ps-callout" id="psCalloutSpring">
      <span class="ps-fignum">Fig. 1.2 &mdash; Spring</span>
    </div>
    <div class="ps-callout" id="psCalloutAdjuster">
      <span class="ps-fignum">Fig. 1.3 &mdash; Adjuster</span>
    </div>
  </div>
  <div id="psRightCol">
    <div class="ps-row">
      <div class="ps-row-fig">
        <!-- Real z-order (2026-09-30, Franz: "the diaphragm is not included
             in the diaphragm casing"): plate, then the rolling diaphragm
             membrane itself, then the upper casing wrapping around/over
             both -- same order #asm draws them in, so the diaphragm
             actually reads as installed inside the chamber, not missing. -->
        <!-- pr-chamber-plate-wrap's transform is cloned from the live
             g-plate (2026-09-30, Franz: "open it to the 11psi distance to
             show the open chamber") -- without it the plate/diaphragm would
             always draw at rest, never reflecting the travel that actually
             opens the chamber. The casing itself never moves, so pr-
             chamber-upper stays a bare path with no transform. -->
        <!-- viewBox set dynamically in openPhysicsSheet(), same reason and
             same fix as the spring row (2026-09-30, Franz: "I still don't
             see the entire diaphragm plate or diaphragm in the casing
             figure") -- once the sheet poses the model at 11psig, the plate
             translates down by a full 0.75in of travel and moves entirely
             outside a viewBox sized for the plate's rest position. The
             placeholder value only matters until that first computation
             runs. -->
        <svg id="prChamberSvg" viewBox="60 -10 1360 280" aria-hidden="true">
          <g id="pr-chamber-plate-wrap"><path id="pr-chamber-plate" class="cast"/></g>
          <path id="pr-chamber-dia" class="dia"/>
          <path id="pr-chamber-upper" class="cast"/>
        </svg>
      </div>
      <div class="ps-row-text">
        <span class="ps-fignum">Fig. 1.1 &mdash; Diaphragm chamber</span>
        <span class="ps-eq">F = P &middot; A<br>A = 46 in&sup2;<br>3 psig &rarr; 138 lbf<br>11 psig &rarr; 506 lbf</span>
      </div>
    </div>
    <div class="ps-row">
      <div class="ps-row-fig">
        <!-- viewBox set dynamically in openPhysicsSheet() from the cloned
             coil's own real bbox (2026-09-30, fixing a real cutoff: a
             fixed crop tuned for the rest-state coil put the spring's real
             extent outside the window entirely once the sheet started
             posing the model at 11psig -- the coil runs lower and tighter
             at full travel, so a static viewBox can't stay correct across
             different reference poses). The placeholder value below only
             matters until that first computation runs. -->
        <svg id="prSpringSvg" viewBox="560 180 400 420" aria-hidden="true">
          <g id="pr-spring-back"></g>
          <g id="pr-spring-front"></g>
        </svg>
      </div>
      <div class="ps-row-text">
        <span class="ps-fignum">Fig. 1.2 &mdash; Spring</span>
        <span class="ps-eq">F = kx<br>k = 490 lbf/in<br>138 lbf @ 3 psig<br>506 lbf @ 11 psig
          <span class="ps-note">&Delta;368 lbf = k &times; 0.75in travel</span>
        </span>
      </div>
    </div>
    <div class="ps-row">
      <div class="ps-row-fig">
        <svg viewBox="640 1050 220 360" aria-hidden="true">
          <g id="pr-adj-g"></g>
        </svg>
      </div>
      <div class="ps-row-text">
        <span class="ps-fignum">Fig. 1.3 &mdash; Adjuster</span>
        <span class="ps-eq">x = n &middot; 1/12<br>1&#8539;&Prime;-12 UNF, 12 TPI<br>3.38 turns = 0.282 in
          <span class="ps-note">&rarr; 138 lbf preload</span>
        </span>
      </div>
    </div>
  </div>
</div>
<!-- Animator (2026-09-30, Phase 1): rows built entirely in JS
     (renderAnimRows()) from ANIM_ROWS, persisted to localStorage so a
     draft survives a reload -- this is a fiddle-and-see workspace, not
     the real save/edit/trash/publish pipeline that's a later phase. -->
<div id="animatorPanel">
  <div class="an-head">
    <div><h2>Animator</h2><p>One row per highlight state. Check a part, give it an order number if it should join later in sequence.</p></div>
    <div class="an-head-btns">
      <button type="button" id="anAddRow">+ Add row</button>
      <!-- openAnimator() collapses the rail for more room (2026-09-30,
           Franz), but "Animator" -- the only way in via the rail -- is
           then hard to reach while collapsed, so this is the real way out,
           not just a decoration next to the rail's own toggle. -->
      <button type="button" id="anClose" title="Close Animator" aria-label="Close Animator">&times;</button>
    </div>
  </div>
  <div id="anRows"></div>
</div>
<!-- Mobile-only sandbox controls. Positioned in JS (layoutRail) from the
     drawing's own real empty-canvas rectangles -- verified with
     check_safe_zones.py against the actual part geometry (every part's full
     range of adj/stroke motion), not guessed. Desktop never shows these
     (display:none until the mobile media query turns them on). -->
<div class="mrail" id="railLeft">
  <div class="msliders">
    <div class="mvslide">
      <div class="mreadout" id="mAdjOut"></div>
      <div class="mtrackwrap" id="mAdjHit">
        <div class="mtrack">
          <div class="mfill" id="mAdjFill"></div>
          <div class="mcenter" id="mAdjCenter"></div>
        </div>
        <div class="mthumb" id="mAdjThumb"></div>
      </div>
      <div class="mlabel">TIGHTEN / LOOSEN</div>
    </div>
  </div>
</div>
<div class="mrail" id="railRight">
  <div class="msliders">
    <div class="mvslide">
      <div class="mreadout" id="mPressOut"></div>
      <div class="mtrackwrap" id="mPressHit">
        <div class="mtrack">
          <div class="mband" id="mPressBand"></div>
          <div class="mfill" id="mPressFill"></div>
        </div>
        <div class="mthumb" id="mPressThumb"></div>
      </div>
      <div class="mlabel">PRESSURE</div>
    </div>
  </div>
</div>
<div id="mobileLegend">
  <div class="mlrow"><b>SIZE</b><span>30</span></div>
  <div class="mlrow"><b>BENCH SET</b><span>3&ndash;11 PSI</span></div>
  <div class="mlrow"><b>TRAVEL</b><span>3/4 IN</span></div>
  <div class="mlrow"><b>RANGE</b><span>0&ndash;18 PSI</span></div>
</div>
<div id="cap"></div>
</div>
<div class="panel">
<div id="ctrlbar">
  <!-- "Play the SOP" as one button is desktop-hidden (mobile keeps it,
       unchanged) in favor of the index rail (#indexRail, below the SVG in
       DOM order but positioned by CSS, not JS) -- Franz (2026-09-27, round
       12): "not the first one I would list... a list like 1. Principle of
       Operation, 2. Bench Set, 3. Setting Travel". Content still comes from
       SECTIONS, unchanged, just rendered into the rail's markup now. -->
  <button id="pb-play" title="Play the SOP">&#9654;<span class="pb-word"> Play the SOP</span></button>
  <button id="pv-play" title="Practice the SOP">Practice the SOP</button>
  <div class="ctl" id="adjCtl">
    <label>Spring adjuster</label>
    <div class="instrument">
      <!-- top-down hex nut on a fixed rotary dial (Stage 2): the one view
           where rotation is genuinely correct, not faked perspective. The
           off-center dot (not a diametric line, which would read as a
           dial/clock-hand indicator) is what makes the rotation visible at
           all -- a plain hexagon is 6-fold symmetric and looks identical
           every 60 degrees. Built by JS (matches the gauge's own
           built-once-then-updated pattern) -- see the IIFE near
           adjHexPoly/DCX/DCY. -->
      <!-- Correction (2026-09-29): the dial is now a pure display (like
           #gaugeSvg is for pressure) -- no role/tabindex/aria-value* of its
           own, since input now happens on #adjHit2 below, exactly mirroring
           the pressure control's own gauge+slider split. -->
      <svg class="dialSvg" id="adjDial" width="220" height="200" viewBox="0 0 220 200" aria-hidden="true"></svg>
      <!-- Correction (2026-09-29, Franz): "I did all of this so that instead
           of a spacer we could put real units" -- the empty slot a plain
           alignment spacer would have occupied here now holds the actual
           physical quantity the real force-balance physics (2026-09-29)
           produces: spring preload force, in lbs, the adjuster's own
           equivalent of the pressure gauge's "X.X psig" readout directly
           above. Same class, same slot, same row -- structural match, not
           a spacer match, is what keeps the two cards' rows aligned now. -->
      <span class="readout digitalreadout" id="preloadOut"></span>
      <div class="hslide">
        <div class="htrackwrap" id="adjHit2" tabindex="0" role="slider" aria-label="Spring adjuster"
             aria-valuemin="-24" aria-valuemax="24">
          <div class="htrack">
            <!-- Dead-zone marker (2026-09-29, Franz): shows the 0-40% thread-
                 slack region as visually distinct from real preload, matching
                 the physics -- no preload exists there, so the track itself
                 should say so before the fill/readouts do. -->
            <div class="hband hband-dead" id="deadZoneAdj"></div>
            <div class="hfill" id="fillAdj"></div>
          </div>
          <div class="hthumb" id="adjThumb2"></div>
        </div>
        <div class="endrow"><span class="endlbl">Loosen</span><span class="endlbl">Tighten</span></div>
      </div>
      <!-- Bench-set line surfaces P0, already computed in update() for the
           gauge's own green band -- no new physics, just a second display of
           the same number. The turns readout that used to sit here is
           removed (Franz: inaccurate, would confuse people). -->
      <div class="dial-benchset" id="adjBenchSet"></div>
    </div>
    <!-- kept for Practice mode / mobile, which show their own distance-in-psi
         readout -- unrelated to the turns readout above. -->
    <span class="readout" id="adjout" style="display:none"></span>
  </div>
  <div class="ctl" id="pressrow">
    <label>Diaphragm pressure</label>
    <div class="instrument">
      <svg width="220" height="200" viewBox="0 0 220 200" id="gaugeSvg"></svg>
      <span class="readout digitalreadout" id="pressout"></span>
      <div class="hslide">
        <div class="htrackwrap" id="pressHit" tabindex="0" role="slider" aria-label="Diaphragm pressure"
             aria-valuemin="0" aria-valuemax="18">
          <div class="htrack">
            <div class="hband" id="bandPress"></div>
            <div class="hfill" id="fillPress"></div>
          </div>
          <div class="hthumb" id="pressThumb"></div>
        </div>
        <div class="endrow"><span class="endlbl">0</span><span class="endlbl">18 psig</span></div>
      </div>
      <!-- Correction (2026-09-28): status text matching the approved
           template's reference -- reuses inWindow/P/P0, already computed in
           update() for the gauge's own green band, wording only. -->
      <div class="gauge-status" id="pressStatus"></div>
    </div>
  </div>
  <div id="statusline"></div>
  <span class="readout" id="pb-status"></span>
  <audio id="pb-audio" src="657-narration.wav" preload="auto"></audio>
  <!-- Title block (Franz, 2026-09-27, round 11): the page is being redrawn
       as a technical drafting template -- a large drawing area plus a real
       title block, not a web widget with buttons bolted on. pb-play/pv-play
       above are repositioned into the top bar by layoutTopBar() (JS, desktop
       only) rather than moved in the DOM, so mobile's existing layout (which
       still expects them as #ctrlbar's own flex children) is untouched. -->
  <div id="titleblock">
    <div class="tb-brand">EMERSON</div>
    <div class="tb-title">
      <div class="tb-title-main">Fisher 657 Diaphragm Actuator</div>
      <div class="tb-title-sub">Working Model &mdash; Interactive Schematic</div>
    </div>
    <div class="tb-provenance">Geometry traced from the Fisher 657 Instruction Manual (IOM)</div>
  </div>
</div>
<div id="practiceView">
  <div class="pv-head">
    <span class="stepbadge" id="pv-badge">Step 1</span>
    <button id="pv-exit">Exit practice</button>
  </div>
  <p class="instr" id="pv-instr"></p>
  <div class="controlsrow">
    <div class="ctl2" id="pv-ctlAdj">
      <div class="readout-big" id="pv-adjout"></div>
      <div class="btnrow">
        <button type="button" class="stepbtn" id="pv-adjMinus" aria-label="Loosen adjuster">&minus;</button>
        <button type="button" class="stepbtn" id="pv-adjPlus" aria-label="Tighten adjuster">&plus;</button>
      </div>
      <div class="ctllabel">Loosen &nbsp;/&nbsp; Tighten</div>
    </div>
    <div class="ctl2" id="pv-ctlPress">
      <div class="readout-big" id="pv-pressout"></div>
      <div class="btnrow">
        <button type="button" class="stepbtn" id="pv-pressMinus" aria-label="Decrease pressure">&minus;</button>
        <button type="button" class="stepbtn" id="pv-pressPlus" aria-label="Increase pressure">&plus;</button>
      </div>
      <div class="ctllabel">Diaphragm pressure</div>
    </div>
  </div>
  <div class="legend">SIZE 30 &middot; BENCH SET 3&ndash;11 PSI &middot; TRAVEL 3/4 IN &middot; RANGE 0&ndash;18 PSI</div>
  <button id="pv-next" disabled>Next</button>
</div>
<p id="valveRow"><label><input type="checkbox" id="valve"> Stem connector installed &mdash; valve coupled below the yoke</label></p>
</div>
</div>
<!-- Index rail (Stage 1, 2026-09-28): desktop-only, positioned entirely by
     CSS (#indexRail rules above), not JS placeAt/placeAnchor -- it doesn't
     need to track any drawing geometry, just the viewport edge. Collapsed
     strip = numbered dots built by buildTopicList() from SECTIONS; opened
     panel = the same topics as a real list, reusing playSection()/
     updateTopicButtons() unchanged. -->
<nav id="indexRail" aria-label="Lessons">
  <button id="railToggle" class="rail-toggle" aria-expanded="false" aria-controls="railPanel" aria-label="Open lesson list" title="Lessons">
    <svg viewBox="0 0 18 18" width="16" height="16" aria-hidden="true"><path d="M3 4.5h12M3 9h12M3 13.5h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
  </button>
  <div id="railNums" class="rail-nums"></div>
  <div id="railPanel" class="rail-panel" aria-hidden="true">
    <div class="rail-panel-head"><h2>Lessons</h2><button id="railClose" class="rp-close">Close</button></div>
    <button type="button" id="playAllRow" class="rail-playall">
      <svg class="playicon" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M3 1l8 5-8 5z" fill="currentColor"/></svg>
      Play all lessons<span class="dur" id="playAllDur"></span>
    </button>
    <ol id="railList" class="rp-list"></ol>
    <hr class="rail-divider">
    <div class="rail-refs-head">References</div>
    <button type="button" class="rail-ref-link">Objectives</button>
    <button type="button" class="rail-ref-link">Parts</button>
    <button type="button" class="rail-ref-link">Procedure</button>
    <button type="button" class="rail-ref-link" id="physicsRefLink">Physics</button>
    <!-- Animator (2026-09-30, Phase 1, Franz): its own TOOLS group, not
         another reference link -- it's a workspace, not static reference
         text, and Franz asked for it "in the hamburger menu, in the
         vertical sidebar" as its own thing. Same open/close mechanism as
         Physics (one button, relabels itself while open) for consistency
         and low risk, not because the two are conceptually the same. -->
    <hr class="rail-divider">
    <div class="rail-refs-head">Tools</div>
    <button type="button" class="rail-ref-link" id="animatorRefLink">Animator</button>
  </div>
</nav>
<!-- Inert lesson note/leader stubs (Stage 1): not wired to anything yet.
     Stage 3 wires real narration text + leader-line targeting into these. -->
<aside class="note" id="lessonNote" aria-live="polite" hidden>
  <p class="note-head" id="noteHead"></p>
  <p class="note-text" id="noteText"></p>
</aside>
<svg class="leader" id="leaderSvg" aria-hidden="true"></svg>
<!-- Nameplate card: the clickable tab that opens this is now drawn directly
     into the #asm SVG itself (#npTab, near its closing tag) rather than a
     separate HTML overlay -- see that comment for why. This card is what
     tabs out to the right of it; positioned by placeAnchor like the other
     instruments. Redrawn in a fixed two-tone blue palette instead of a
     literal black-and-white photographic replica -- same fields, same
     box-for-box layout, just re-skinned to match. -->
<div id="npCard">
  <svg id="nameplate" viewBox="0 0 842 286" role="img" aria-label="657 actuator nameplate">
  <!-- layout measured box-for-box from the supplied nameplate image -->
  <rect x="12" y="13" width="817" height="260" rx="12" fill="var(--np-plate)" stroke="var(--np-accent)" stroke-width="2"/>
  <rect x="30" y="31" width="45" height="16" rx="8" fill="var(--np-accent)"/>
  <rect x="770" y="31" width="42" height="16" rx="8" fill="var(--np-accent)"/>
  <rect x="31" y="246" width="45" height="16" rx="8" fill="var(--np-accent)"/>
  <rect x="772" y="246" width="42" height="16" rx="8" fill="var(--np-accent)"/>
  <text class="np-title" x="92" y="63">ACTUATOR</text>
  <rect x="261" y="32" width="94" height="33" rx="14" fill="var(--np-accent)"/>
  <text class="np-logo" x="308" y="56">FISHER&#174;</text>
  <text class="np-title" x="522" y="63">Fisher Controls</text>
  <g id="np-serial"><text class="np-lbl" x="180" y="106">SERIAL NO</text>
    <rect class="np-box" x="187" y="87" width="242" height="25"/>
    <text class="np-val" x="308" y="106">XXXXXXXXX</text></g>
  <g id="np-type"><text class="np-lbl" x="554" y="106">TYPE</text>
    <rect class="np-box" x="561" y="86" width="219" height="26"/>
    <text class="np-val" x="670" y="106">657</text></g>
  <g id="np-size"><text class="np-lbl" x="135" y="144">SIZE</text>
    <rect class="np-box" x="142" y="125" width="212" height="25"/>
    <text class="np-val" x="248" y="144">30</text></g>
  <g id="np-benchset"><text class="np-lbl" x="548" y="144">BENCH SET</text>
    <rect class="np-box" x="555" y="125" width="225" height="25"/>
    <text class="np-val" x="667" y="144">3-11</text></g>
  <g id="np-travel"><text class="np-lbl" x="148" y="184">TRAVEL</text>
    <rect class="np-box" x="155" y="164" width="214" height="27"/>
    <text class="np-val" x="262" y="184">3/4 Inch</text></g>
  <g id="np-units"><text class="np-lbl" x="578" y="184">PRESS UNITS</text>
    <rect class="np-box" x="585" y="164" width="194" height="27"/>
    <text class="np-val" x="682" y="184">PSI</text></g>
  <g id="np-range"><text class="np-lbl" x="394" y="224">OPER RANGE</text>
    <rect class="np-box" x="401" y="205" width="287" height="25"/>
    <text class="np-val" x="544" y="224">0-18</text></g>
  </svg>
</div>
<script>
const R = window.REFINED2;
document.getElementById('p-upper').setAttribute('d', R['upper-diaphragm-casing']);
document.getElementById('p-lower').setAttribute('d', R['lower-diaphragm-casing']);
document.getElementById('p-yoke').setAttribute('d', R['yoke']);
document.getElementById('p-plate').setAttribute('d', R['diaphragm-plate']);
// Physics reference sheet (2026-09-30): the left column's full assembly and
// the right column's "Diaphragm chamber" row both reuse these SAME real
// traced paths -- never a redrawn silhouette. Each needs its own element
// (a path can't be shared across two <svg> roots), same real R[...] strings.
document.getElementById('pf-yoke').setAttribute('d', R['yoke']);
document.getElementById('pf-lower').setAttribute('d', R['lower-diaphragm-casing']);
document.getElementById('pf-plate').setAttribute('d', R['diaphragm-plate']);
document.getElementById('pf-upper').setAttribute('d', R['upper-diaphragm-casing']);
document.getElementById('pr-chamber-upper').setAttribute('d', R['upper-diaphragm-casing']);
document.getElementById('pr-chamber-plate').setAttribute('d', R['diaphragm-plate']);

// Spring proportions re-derived against the real source (2026-09-29, Franz):
// measured directly off both the traced 657-cross-section.svg (getBBox on
// the real #spring/#spring-seat paths) and Fisher 657 IOM Figure 6 (PDF
// page 24, the manual this vault's illustration was traced from). The
// traced spring's own real bbox is 293.4 wide (596.6-890) -- CXA/HALFW
// below were already centered right (742.5 matches the real ~741.7
// midpoint), but the OLD HALFW=146 was the nominal zigzag half-span BEFORE
// stroke-linecap:round bleed -- with WIRE=56, that bleed adds WIRE/2=28 of
// extra visible width past each end, so the actual rendered spring came out
// (146+28)*2=348 wide, ~19% fatter than the real 293.4 and wide enough to
// visually overrun the seat's own 314-wide flange even though the seat is
// the wider part in the real source (319 vs the spring's 293.4). Solving
// backwards from the real 293.4 total (nominal span + the same WIRE=56
// bleed, wire diameter itself unchanged) gives the new HALFW.
// Coil count: Figure 6 shows roughly 8 full turns top to bottom (Franz);
// the old NHALF=13 half-segments read as ~6.5 turns, matching Franz's own
// "six" -- 16 half-segments reads as 8, so NHALF moves 13->16.
const CXA=742.5, HALFW=(293.4-56)/2, WIRE=56, NHALF=16, TOP0=197.5, SEAT0=1032;   // shifted +24 with sp-seat-g, 2026-09-29
const STEM_BOT=1525, TRAVEL=140;  // grads = 3/5 of the 234 plate, centered
const STOP=217;  // measured plate-to-lower-casing gap: the lower travel stop
// Real force-balance physics (2026-09-29, Franz): replaces the earlier
// calibrated-pressure-window model (a flat assumed 8psi span with no
// diaphragm area or spring rate anywhere in it) with the actual Fisher 657
// Size 30 numbers for a Dark Gray spring, back-solved against the fleet's
// verified 3-11psig/0.75in bench-set spec: k=490 lbs/in (not the spring's
// nameplate-catalog 735 lbs/in -- a fleet actually calibrated to a true 8psi
// span implies this effective rate: 8psi*46in^2/0.75in = 490.67, rounded to
// Franz's stated 490). Travel = clamp(F_net/k, 0, rated) -- Hooke's law on
// the net of air force (P*area) against spring preload force, not a
// pressure-window curve fit.
const DIA_AREA = 46;          // sq in, effective diaphragm area
const SPRING_RATE = 490;      // lbs/in, back-solved from the real 3-11psig/0.75in spec
const RATED_TRAVEL_IN = 0.75; // in
const PX_PER_IN = TRAVEL / RATED_TRAVEL_IN;   // 140px = 0.75in
// Adjuster dead zone + calibration (Franz): 0-40% of the adjuster slider is
// pure thread take-up (0 lbs preload, spring not yet touching working
// compression); 85% is the fleet's real calibrated setting, where preload
// force is exactly area*3psi = 138 lbs -- the printed "3-11psig" spec is
// this exact point, not a generic default. Linear beyond the dead zone
// (realistic for a screw adjuster: preload force is proportional to turns
// past thread take-up), so the same slope extrapolates naturally past 85%
// toward the slider's tightened end.
const ADJ_DEADZONE_PCT = 0.40;
const ADJ_CAL_PCT = 0.85;
const ADJ_CAL_FORCE = DIA_AREA * 3;   // 138 lbs at the 85% calibration point
// Real bench-set span: the pressure range above cracking that drives the
// full 0.75in stroke, from the real force numbers -- not the old hardcoded
// "+8" placeholder. ~7.98psi at Franz's real numbers (490 lbs/in, 46in^2),
// which is why it still reads as "3-11psig" at the 85% calibration point --
// that fleet spec IS this number, not a coincidence.
const BENCH_SPAN = SPRING_RATE * RATED_TRAVEL_IN / DIA_AREA;
// Real thread physics (2026-09-29, Franz): the Size 30 adjuster is a
// 1-1/8"-12 UNF bolt -- 12 threads per inch, i.e. 1/12 in of linear travel
// per full turn. Routes the dead-zone/calibration curve through actual
// physical turns and inches of compression instead of jumping straight
// from slider percent to force, so every step is auditable in real units.
// IMPORTANT: this does NOT change the resulting force curve (same 0 lbs at
// 40%, same 138 lbs at 85%) -- it only re-derives the SAME calibration
// through thread pitch. Franz's own first pass at this (2.25 turns / 0.188in
// to reach 138 lbs) was solved against the spring's 735 lbs/in catalog rate
// from before the bench-set-derived correction to 490 -- at 490 lbs/in,
// 0.188in only gives 92 lbs (490*0.1875=91.9), not 138. The turns figure
// below is recomputed from the LOCKED 138lb/490lb-in target instead of
// reusing the stale 2.25, which is what keeps the printed 3-11psig spec
// (Franz's hard constraint) actually correct.
const THREAD_TPI = 12;
const THREAD_PITCH_IN = 1 / THREAD_TPI;      // 0.0833 in per turn
const CAL_TURNS = (ADJ_CAL_FORCE / SPRING_RATE) / THREAD_PITCH_IN;   // turns past thread take-up needed for 138 lbs at 490 lbs/in: 3.38
function preloadTurns(adj){
  // physical turns of the bolt PAST thread take-up (0 at the end of the
  // dead zone) -- linear in slider percent, same assumption as a real screw
  // turned at a constant rate across the slider's active range.
  const pct = (adj - (-24)) / 48;   // ADJ's real range is -24..24
  if (pct <= ADJ_DEADZONE_PCT) return 0;
  return CAL_TURNS * (pct - ADJ_DEADZONE_PCT) / (ADJ_CAL_PCT - ADJ_DEADZONE_PCT);
}
function preloadForce(adj){
  const turns = preloadTurns(adj);
  const inches = turns * THREAD_PITCH_IN;   // Franz's own conversion: turns / 12
  return SPRING_RATE * inches;
}
// Insertion/contact geometry (2026-09-29, module scope now -- was recomputed
// every update() call, and adjThreads() below needs INSERTION_TRAVEL too).
// CONTACT_OFFSET=42: real distance from the adjuster's own baseline rod-top
// (y1068) to the seat's hub-bottom (y1110, after moving the real seat
// geometry down 24 -- see sp-seat-g). GAP=24 reuses that same seat-move
// distance for how far below contact the adjuster starts at full loosen.
// HUB_HEIGHT=49 is the seat hub's own real measured rect height -- the
// boss's full possible insertion depth. Franz: "inserting too far before
// preload starts -- half the insertion distance" -- INSERTION_TRAVEL is the
// ACTUAL travel distance used for the motion (half of HUB_HEIGHT), separate
// from HUB_HEIGHT itself (still the seat's own real dimension, unchanged).
const CONTACT_OFFSET = 42;
const GAP = 24;
const HUB_HEIGHT = 49;
const INSERTION_TRAVEL = HUB_HEIGHT / 2;   // 24.5
const FULL_INSERTION_OFFSET = CONTACT_OFFSET - INSERTION_TRAVEL;   // 17.5
// Turns at full tighten (adj=24) -- used to scale the VISUAL seat/spring
// travel so it still reaches the same maximum pixel offset as before at
// full tighten, while correctly staying at 0 throughout the dead zone.
const MAX_CAL_TURNS = preloadTurns(24);
// Neutral/reset reference (2026-09-29, Franz: "the spring seat is no longer
// on the casing to start with"): ADJ=0 used to be the geometry's calibrated
// "seated, touching the casing" reference point under the old model (where
// adj WAS the seat offset directly). Under the real dead-zone+thread-pitch
// model, adj=0 sits at 50% of the slider -- already 10 points past the 40%
// dead zone, so the default view showed the spring already offset ~4px from
// its seated position instead of properly resting. -24 (0% of the slider,
// fully backed off) is the one point that's unambiguously "as delivered,
// not yet adjusted" and sits inside the dead zone (seatOffset=0), so every
// reset/neutral state in this file now uses this instead of a bare 0.
const ADJ_RESET = -24;
                 // (off the valve, over-stroke ends metal-on-metal here)
const D = R._dia;

// --- travel indicator scale: locked to Figure 6 pixel measurements ---
(function(){
  // plate 111 x 234 (measured mask); zero = header bottom (rel 46)
  const w=111, h=234, x=848;
  const y = STEM_BOT - 46;
  // mount pad: flush casting behind the slot region (Figure 6)
  let bosses = `<rect x="${x+w-10}" y="${y+40}" width="38" height="182" fill="var(--c-yoke)" stroke="var(--c-cast-line)" stroke-width="2"/>`;
  let fixed = "";
  let s = `<g id="g-scaleplate">`;
  s += `<rect class="prism" x="${x}" y="${y}" width="${w}" height="${h}" rx="13"/>`;
  s += `<path d="M ${x},${y+46} L ${x},${y+13} Q ${x},${y} ${x+13},${y} L ${x+w-13},${y} Q ${x+w},${y} ${x+w},${y+13} L ${x+w},${y+46} Z" fill="var(--c-stem)"/>`;
  // slots (measured): x rel 68-85; y rel 46-113 and 162-215
  for (const [s0, s1] of [[46, 113], [162, 215]]) {
    s += `<rect x="${x+68}" y="${y+s0}" width="17" height="${s1-s0}" rx="8.5" fill="var(--c-yoke)" stroke="var(--c-cast-line)" stroke-width="2"/>`;
  }
  // 10 graduations (the real plate); zero is the header edge itself,
  // the 10th mark lands at rated travel
  for(let i=1;i<=10;i++){
    const ty = y + 46 + TRAVEL*i/10;
    const long = (i%2===0);
    s += `<line class="tick" x1="${x+2}" y1="${ty}" x2="${x+2+(long?19:11)}" y2="${ty}"/>`;
  }
  // OPEN (measured: rel y 52-117, ~19px glyphs) + arrow (apex 130, base 155, shaft to 187)
  s += `<text class="lbl" font-size="19" font-weight="600" letter-spacing="2" transform="translate(${x+49},${y+118}) rotate(-90)">OPEN</text>`;
  s += `<line class="tick" x1="${x+42}" y1="${y+187}" x2="${x+42}" y2="${y+153}" stroke-width="5"/>`;
  s += `<path d="M ${x+42},${y+130} L ${x+35},${y+155} L ${x+49},${y+155} Z" fill="var(--c-scale-mark)"/>`;
  s += `</g>`;
  // screws fixed to the yoke: small cross screw (upper), ringed screw (lower)
  fixed += `<circle cx="${x+76}" cy="${y+100}" r="9" fill="var(--c-vnut)" stroke="var(--c-hw-line)" stroke-width="2"/>`
         + `<line x1="${x+70}" y1="${y+100}" x2="${x+82}" y2="${y+100}" stroke="var(--c-hw-line)" stroke-width="2"/>`
         + `<line x1="${x+76}" y1="${y+94}" x2="${x+76}" y2="${y+106}" stroke="var(--c-hw-line)" stroke-width="2"/>`;
  fixed += `<circle cx="${x+76}" cy="${y+200}" r="13" fill="var(--c-vnut)" stroke="var(--c-hw-line)" stroke-width="2"/>`
         + `<circle cx="${x+76}" cy="${y+200}" r="6" fill="none" stroke="var(--c-hw-line)" stroke-width="2"/>`
         + `<line x1="${x+67}" y1="${y+200}" x2="${x+85}" y2="${y+200}" stroke="var(--c-hw-line)" stroke-width="2"/>`
         + `<line x1="${x+76}" y1="${y+191}" x2="${x+76}" y2="${y+209}" stroke="var(--c-hw-line)" stroke-width="2"/>`;
  document.getElementById('g-scale').innerHTML = bosses + s + fixed;
})();

// --- stem threads: bottom ~1 inch (80px) ---
(function(){
  let s='';
  for(let y=STEM_BOT-80; y<=STEM_BOT-6; y+=11){
    s+=`<line class="sp-thread" x1="706" y1="${y+4}" x2="779" y2="${y-4}"/>`;
  }
  document.getElementById('g-stem-threads').innerHTML=s;
})();

const backG=document.getElementById('sp-spring-back');
const frontG=document.getElementById('sp-spring-front');
function spring(topY, botY){
  // Connecting end stays at the TRUE coil edge (HALFW), matching every
  // interior turn exactly -- no artificial inward step. The cap is made
  // SHORT by sliding its FREE end over toward that same outer edge, so
  // the whole cap sits in a short stub at the rim instead of a long bar
  // crossing the width where interior turns bunch (that crossing was the
  // actual overlap -- shortening from the connecting end never touched it).
  const n=NHALF, pitch=(botY-topY-WIRE)/n;
  let back='', front='';
  // free end lands at the stem centerline -- a real landmark, not a
  // guessed fraction -- while the connecting end stays at the true edge.
  // Correction (2026-09-29, Franz): this top cap is the flat, ground
  // terminal turn -- physically it still wraps AROUND the stem rod (g-stem,
  // drawn between sp-spring-back and sp-spring-front in the DOM) exactly
  // like every other turn does, so part of it has to pass BEHIND that rod,
  // not float in front of it. Moved to the back bucket (same class/weight
  // as every other occluded half-turn) so the real, already-existing g-stem
  // rect naturally covers the portion that crosses behind it -- no new
  // geometry, just the correct DOM bucket.
  back+=`<line class="sp-coil sp-coil-back" stroke-width="${WIRE*0.92}" x1="${CXA}" y1="${topY+WIRE/2}" x2="${CXA+HALFW}" y2="${topY+WIRE/2}"/>`;
  // Winding direction (2026-09-29, Franz, verified against Figure 6): the
  // strand that passes IN FRONT OF THE STEM has to run bottom-left-to-
  // upper-right ("/"), not bottom-right-to-upper-left ("\") -- Franz traced
  // both the model and the manual's Figure 6 by eye and confirmed the two
  // are mirror images of each other. Which strand is "in front" is purely a
  // matter of which bucket (front, painted last, on top) a given half-turn
  // lands in -- swapping the i%2 assignment below flips that without
  // touching any coordinate, which is exactly a mirror of the coil's
  // apparent handedness.
  for(let i=0;i<n;i++){
    const y0=topY+WIRE/2+i*pitch, y1=y0+pitch;
    if(i%2===0) front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA+HALFW}" y1="${y0}" x2="${CXA-HALFW}" y2="${y1}"/>`;
    else back+=`<line class="sp-coil sp-coil-back" stroke-width="${WIRE*0.92}" x1="${CXA-HALFW}" y1="${y0}" x2="${CXA+HALFW}" y2="${y1}"/>`;
  }
  // Bottom cap (2026-09-29, Franz): with NHALF even, the last interior
  // segment (i=n-1, odd -> the back bucket per the winding-direction fix
  // above) now lands its far end at the RIGHT edge (CXA+HALFW), not the
  // left -- this cap has to match up with that same real endpoint instead
  // of the old left-side span, or the two don't actually connect.
  const ye=topY+WIRE/2+n*pitch;
  front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA}" y1="${ye}" x2="${CXA+HALFW}" y2="${ye}"/>`;
  backG.innerHTML=back; frontG.innerHTML=front;
}
function adjThreads(offset){
  // threads shown below the blank boss only (2026-09-29, Franz: "blank the
  // tip of the adjuster with no threads" for the boss) -- TOP starts at
  // 1068+INSERTION_TRAVEL, not at the rod's own top. x1/x2 (679/806) sit a
  // few units past the rod's own real edges (683.5/801.5) -- the ROD stays
  // one uniform width the whole length (Franz: "I just wanted the threads
  // extended because I didn't want a smooth outer edge" -- not a wider
  // part, just the texture poking past its own material's edge). The wider
  // clip-path (677.5-807.5) is what lets these strokes render instead of
  // being clipped back down to the rod's own narrower outline.
  let s=''; const pitch=13, TOP=1068+INSERTION_TRAVEL, BOT=1338;
  for(let y=TOP-pitch+((offset%pitch)+pitch)%pitch; y<BOT; y+=pitch){
    if(y<TOP-6) continue;
    s+=`<line class="sp-thread" x1="679" y1="${y+3}" x2="806" y2="${y-3}"/>`;
  }
  document.getElementById('sp-adj-threads').innerHTML=s;
}
function diaphragm(press){
  // HARD GEOMETRY: the measured centerline is rendered VERBATIM at rest and
  // warped piecewise under stroke — never re-approximated.
  //  fixed: clamp legs through the molded down-curves (x <= 275, x >= 1210)
  //  pivot: inside edge of each down-curve (275 / 1210)
  //  inner walls (275-305, 1180-1210): lean down about the pivot
  //  center (305-1180): rides the plate, straight down by press
  // rolling-diaphragm kinematics: the molded fold ROLLS DOWN at half the
  // plate rate (correct for longer strokes); clamps stay fixed; the
  // measured points are still warped verbatim, never re-approximated.
  const s = press;
  function dyLeft(x){
    if(x<=215) return 0;
    if(x<260)  return s*0.5*(x-215)/45;     // outer wall feeding the roll
    if(x<=285) return s*0.5;                 // fold bottom, rolling down
    if(x<305)  return s*(0.5+0.5*(x-285)/20);// inner wall up to the plate
    return s;                                // plate section
  }
  function dyRight(x){
    if(x>=1270) return 0;
    if(x>1225)  return s*0.5*(1270-x)/45;
    if(x>=1200) return s*0.5;
    if(x>1180)  return s*(0.5+0.5*(1200-x)/20);
    return s;
  }
  // drape: rubber cannot pass metal — each warped point is limited by the
  // casing's measured inner surface (floor profile), so the outer wall lays
  // down against the casing as the fold rolls instead of passing through it.
  const pts = D.centerline.map(([x,y],i)=>{
    let yy = y + (x < 742.5 ? dyLeft(x) : dyRight(x));
    const fl = D.floor[i];
    if(fl !== null) yy = Math.min(yy, fl - D.band/2 - 1);
    return [x, yy];
  });
  const d = 'M ' + pts.map(p=>p[0]+','+p[1].toFixed(1)).join(' L ');
  document.getElementById('p-dia').setAttribute('d', d);
}
(function(){
  let s='';
  for(let y=2032; y<2050; y+=7)
    s+=`<line class="sp-thread" x1="645" y1="${y+2}" x2="840" y2="${y-2}"/>`;
  document.getElementById('boss-threads').innerHTML=s;
})();
// ================= desktop gauge + hex-slider: geometry helpers =================
const GSWEEP = 135;   // total needle sweep is 2*GSWEEP degrees
function polarPt(cx, cy, r, deg){
  const rad = deg*Math.PI/180;
  return [cx + r*Math.sin(rad), cy - r*Math.cos(rad)];
}
function describeArc(cx, cy, r, deg0, deg1){
  const [x0,y0] = polarPt(cx,cy,r,deg0);
  const [x1,y1] = polarPt(cx,cy,r,deg1);
  const large = Math.abs(deg1-deg0) > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)},${y0.toFixed(2)} A ${r},${r} 0 ${large} 1 ${x1.toFixed(2)},${y1.toFixed(2)}`;
}
function valueToAngle(v, vMin, vMax){
  const t = (v-vMin)/(vMax-vMin);
  return -GSWEEP + t*(2*GSWEEP);
}
function pct(v, vMin, vMax){ return (v-vMin)/(vMax-vMin); }
const GCX=110, GCY=120, GR1=92, GR2=78;
(function(){
  // gauge face: built once, the needle/band are the only parts update() touches
  const svg = document.getElementById('gaugeSvg');
  let s = `<path class="gaugearc" d="${describeArc(GCX,GCY,GR1,-GSWEEP,GSWEEP)}"/>`;
  s += `<circle class="gaugeface" cx="${GCX}" cy="${GCY}" r="${GR2-4}"/>`;
  for(let v=0; v<=18; v++){
    const deg = valueToAngle(v,0,18);
    const major = v%3===0;
    const [x0,y0] = polarPt(GCX,GCY,GR2, deg);
    const [x1,y1] = polarPt(GCX,GCY,GR2-(major?12:7), deg);
    s += `<line class="${major?'gaugetickmaj':'gaugetick'}" x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}"/>`;
    if(major){
      const [tx,ty] = polarPt(GCX,GCY,GR2-22,deg);
      s += `<text class="gaugenum" x="${tx.toFixed(1)}" y="${(ty+4).toFixed(1)}">${v}</text>`;
    }
  }
  s += `<path class="gaugeband" id="gaugeBand" d=""/>`;
  s += `<line class="needle" id="gaugeNeedle" x1="${GCX}" y1="${GCY}" x2="${GCX}" y2="${GCY-GR2+18}"/>`;
  s += `<circle class="needlehub" id="gaugeHub" cx="${GCX}" cy="${GCY}" r="7"/>`;
  svg.innerHTML = s;
})();
// Rotary spring-adjustor dial (Stage 2, 2026-09-28): built once like the
// gauge face -- ticks, a clockwise-tighten arrow, and a hex nut group
// (still the same top-down hex genuinely rotating, no faked perspective).
// Only the nut group's rotation changes per frame, in updateDesktopGauge().
// Canvas/center/radii deliberately mirror the pressure gauge's own
// (GCX/GCY/GR1/GR2) so the two controls read as a matched instrument pair.
const DCX=110, DCY=104, DR1=90, DR2=74;
// Bounded, non-wrapping sweep (correction, 2026-09-29): +-150deg, not a full
// +-360deg -- see the ROT_RANGE comment inside updateDesktopGauge for why.
// Shared at module scope so both updateDesktopGauge() (sets the TARGET) and
// animateDial() (eases the DISPLAYED angle toward it every frame) agree on
// the same mapping.
const DIAL_ROT_RANGE = 150;
let dialTargetDeg = 0, dialDisplayDeg = 0;
(function(){
  const svg = document.getElementById('adjDial');
  let s = `<circle class="dialface" cx="${DCX}" cy="${DCY}" r="${DR2}"/>`;
  for(let i=0;i<24;i++){
    const deg = i*15, major = i%6===0;
    const [x0,y0] = polarPt(DCX,DCY,DR1, deg);
    const [x1,y1] = polarPt(DCX,DCY,DR1-(major?12:7), deg);
    s += `<line class="${major?'dialtickmaj':'dialtick'}" x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}"/>`;
  }
  // hex nut: same top-down hex + off-center dot as the original traveling
  // thumb (the dot is what makes a 6-fold-symmetric hex's rotation visible
  // at all through a full 360deg turn) -- grouped so it rotates as one unit.
  let pts=[];
  for(let i=0;i<6;i++) pts.push(polarPt(DCX,DCY,32,-90+i*60).map(n=>n.toFixed(1)).join(','));
  const [dotx,doty] = polarPt(DCX,DCY,19,0);
  s += `<g class="dialnut" id="adjDialNut"><polygon id="adjHexPoly" points="${pts.join(' ')}"/>` +
       `<circle class="hexmark" cx="${dotx.toFixed(1)}" cy="${doty.toFixed(1)}" r="5"/></g>`;
  svg.innerHTML = s;
})();
// Rotation smoothing (correction, 2026-09-29): a persistent rAF loop that
// eases the DISPLAYED angle toward whatever updateDesktopGauge() last set as
// the target, via the same setAttribute('transform',...) mechanism already
// proven correct (a CSS transition on this attribute was tried first and
// found to render incorrectly for some target angles -- see the CSS comment
// on #adjDialNut's old rule -- so this bypasses that entirely). Runs
// continuously rather than only during a drag; cost is one attribute write
// per frame when not already at rest, negligible.
(function animateDial(){
  const diff = dialTargetDeg - dialDisplayDeg;
  dialDisplayDeg += Math.abs(diff) < 0.05 ? diff : diff * 0.3;
  document.getElementById('adjDialNut').setAttribute('transform',
    `rotate(${dialDisplayDeg.toFixed(2)} ${DCX} ${DCY})`);
  requestAnimationFrame(animateDial);
})();
function updateDesktopGauge(adj, P, P0, inWindow){
  const pTrack = document.querySelector('#pressHit .htrack');
  if (!pTrack) return;   // desktop controls not in DOM state yet
  const [nx,ny] = polarPt(GCX,GCY,GR2-18, valueToAngle(P,0,18));
  const needle = document.getElementById('gaugeNeedle');
  needle.setAttribute('x2', nx.toFixed(1)); needle.setAttribute('y2', ny.toFixed(1));
  needle.classList.toggle('inwin', inWindow);
  document.getElementById('gaugeHub').classList.toggle('inwin', inWindow);
  const bandLo = Math.max(0,P0), bandHi = Math.min(18,P0+BENCH_SPAN);
  document.getElementById('gaugeBand').setAttribute('d',
    bandHi>bandLo ? describeArc(GCX,GCY,GR2, valueToAngle(bandLo,0,18), valueToAngle(bandHi,0,18)) : '');

  // Franz (2026-09-27): "the slider on its far left is still making contact
  // with the actuator". Root cause: this thumb never got the same
  // thumb-radius inset already applied to the vertical adjuster's hex thumb
  // and the mobile rails -- at P=0 its raw left:0 plus its own -15px margin
  // put its visible edge 15px to the LEFT of the track's own nominal edge,
  // outside the box placeInstrument's scale-to-fit was measuring. Same
  // PRESS_THUMB_R inset fix as everywhere else the thumb has a radius.
  const PRESS_THUMB_R = 15;   // half the .hthumb's 30px diameter
  const wP = pTrack.clientWidth;
  const xSpan = Math.max(0, wP - 2*PRESS_THUMB_R);
  const xP = PRESS_THUMB_R + pct(P,0,18)*xSpan;
  document.getElementById('pressThumb').style.left = xP+'px';
  document.getElementById('fillPress').style.width = xP+'px';
  const xLo = PRESS_THUMB_R + pct(bandLo,0,18)*xSpan, xHi = PRESS_THUMB_R + pct(bandHi,0,18)*xSpan;
  const pBand = document.getElementById('bandPress');
  pBand.style.left = xLo+'px'; pBand.style.width = Math.max(0,xHi-xLo)+'px';

  // Correction (2026-09-29, second pass): the adjuster's own slider, same
  // thumb-radius inset technique as pressure's (ADJ_THUMB_R = PRESS_THUMB_R,
  // same 30px .hthumb). Fill used to be CENTER-anchored (grows from the
  // arithmetic x=0 midpoint) -- but Franz correctly pointed out that once
  // this slider drives real dead-zone physics, the meaningful boundary is
  // where preload actually starts (ADJ_DEADZONE_PCT, 40% of the range), not
  // the arbitrary center. Fill now anchors there instead: zero width while
  // in the dead zone (nothing to show, no preload exists yet), then grows
  // from that boundary toward the thumb once real compression begins --
  // the highlighted amount now means "how far into actual preload," not
  // "distance from an arbitrary midpoint." A muted dead-zone band marks the
  // 0-40% region on the track itself, visible even before touching it.
  const ADJ_THUMB_R = 15;
  const aTrack = document.querySelector('#adjHit2 .htrack');
  const wA = aTrack.clientWidth;
  const aSpan = Math.max(0, wA - 2*ADJ_THUMB_R);
  const xA = ADJ_THUMB_R + pct(adj,-24,24)*aSpan;
  const xDeadZoneEnd = ADJ_THUMB_R + ADJ_DEADZONE_PCT*aSpan;
  const deadBand = document.getElementById('deadZoneAdj');
  deadBand.style.left = '0px'; deadBand.style.width = xDeadZoneEnd+'px';
  document.getElementById('adjThumb2').style.left = xA+'px';
  const aFill = document.getElementById('fillAdj');
  aFill.style.left = Math.min(xA,xDeadZoneEnd)+'px';
  aFill.style.width = Math.max(0, xA-xDeadZoneEnd)+'px';

  // The dial is fixed in place; only the hex nut's rotation reflects adj.
  // Same sign convention as before (positive adj/tighten = positive/
  // clockwise rotation, righty-tighty) but the sweep is now a bounded,
  // non-wrapping +-150deg (DIAL_ROT_RANGE, not a full +-360deg) -- Franz
  // found the old full-360 sweep confusing because both full-loosen and
  // full-tighten rotated all the way back around to look visually identical
  // to the resting/center position. +-150deg keeps every position in the
  // range visually distinct from center and from each other. This only sets
  // the TARGET; animateDial()'s rAF loop (near DCX/DCY) eases the actually-
  // displayed rotation toward it every frame, which is where the smoothing
  // lives now (see that function's comment for why it's not a CSS
  // transition).
  dialTargetDeg = adj/24*DIAL_ROT_RANGE;
  // Bench-set line reuses P0 (already this function's own parameter) --
  // no new physics, just a second display of the same number driving the
  // gauge's own green band. The turns readout that used to sit here is
  // removed (Franz: inaccurate, would confuse people). Span is the real
  // BENCH_SPAN constant (force-balance derived) -- not the old hardcoded
  // "+8" placeholder.
  // Correction (2026-09-29, Franz): "it can't really be in bench set... it
  // needs to identify when preload begins or whether it's in a dead zone."
  // At P0=0 (still in the dead zone, spring not engaged) the math happens
  // to satisfy 0>=0 && 0<=span, which used to print a real-looking "Bench
  // set 0.0-8.0 psig" even though no calibration exists yet -- misleading,
  // not just a wording nitpick. Gate both this line and pressStatus's own
  // wording (below) behind the same real dead-zone check.
  //
  // Second correction, same day: showing "Bench set X-Y psig" in green the
  // instant the slider leaves the dead zone was ALSO misleading -- it reads
  // as "confirmed calibration" throughout the whole climb, when only one
  // exact position (85%, snapped via CAL_ADJ) really is the fleet's 3-11psig
  // spec. Three real states now: dead zone (spring not touching yet),
  // initial movement (spring compressing, live single rising crack-pressure
  // number, not a range, not green -- nothing is confirmed yet), and the
  // actual calibration point (only reachable via setAdj's magnetic snap),
  // which is the sole state that earns the green "Bench set" treatment.
  const inDeadZone = (adj - (-24))/48 <= ADJ_DEADZONE_PCT;
  const atCalibration = adj === CAL_ADJ;
  document.getElementById('adjBenchSet').innerHTML = inDeadZone
    ? `<strong>Dead zone</strong> &ndash; spring not engaged`
    : atCalibration
      ? `Bench set <strong>${P0.toFixed(1)}&ndash;${(P0+BENCH_SPAN).toFixed(1)} psig</strong>`
      : `Initial movement &ndash; ${P0.toFixed(1)} psig`;
}
// name-it, spotlight-it: named parts stay lit, the rest dim
const FOCUSABLE=['p-upper','p-lower','p-yoke','g-plate','p-dia','g-stem',
 'sp-spring-back','sp-spring-front','sp-seat-g','sp-adj-g','g-scale',
 'g-vgrp','g-conn','g-valve-sil','g-mount','g-mount-back'];
const SPRING=['sp-spring-back','sp-spring-front'];
function focus(...ids){
  const flat=ids.flat();
  FOCUSABLE.forEach(f=>{ const el=document.getElementById(f); if(!el) return;
    el.style.opacity = flat.length===0 ? '' : (flat.includes(f) ? '' : '0.25');
  });
}
window.showVerMark = function(on){
  document.getElementById('g-vermark').style.display = on ? '' : 'none';
  if(!on) document.getElementById('g-verbracket').style.display='none';
};
window.showVerBracket = function(on){
  document.getElementById('g-verbracket').style.display = on ? '' : 'none';
};
window.showTravelMark = function(on){
  document.getElementById('g-travelmark').style.display = on ? '' : 'none';
};
// Packing is a fixed single PTFE V-ring (the lowest-friction, most common
// baseline) rather than a user-facing choice -- the selector was pure
// friction-modeling detail that added noise without teaching anything about
// the bench-set procedure (removed 2026-09-27). Non-live-loaded, so the
// Belleville stack and flange stay at their default painted position.
const PACKING_FRICTION = 0.5;
const PB = { connected: true, nutsDy: 0, scaleDy: 0, connShown: true };
function setValve(on){
  document.getElementById('g-valve-sil').style.display = on ? '' : 'none';
  document.getElementById('g-mount').style.display = on ? '' : 'none';
  document.getElementById('g-mount-back').style.display = on ? '' : 'none';
  document.getElementById('g-vgrp').style.display = on ? '' : 'none';
  document.getElementById('g-conn').style.display = (on && PB.connShown) ? '' : 'none';
  document.getElementById('asm').setAttribute('viewBox', on ? '0 0 1480 2620' : '0 0 1480 2250');
  // the viewBox change rescales the SVG's fit, so the rails' and desktop
  // instruments' real on-screen position (computed from that scale) goes
  // stale unless recomputed right away.
  if (typeof layoutAll === 'function') layoutAll();
}
let strokeState = 0;   // remembered position: packing friction is hysteretic
let ADJ = ADJ_RESET, PRESS = 0;   // stepper-button state: no native range input backs these any more
let lastStroke = 0;   // exposed for Practice-mode step gates (read-only outside update())
function update(){
  const adj=ADJ;   // seat offset, px (+ = tighter)
  const P=PRESS;   // psig, 0-18
  const coupled = PB.connected && document.getElementById('valve').checked;
  // packing friction opposes motion BOTH ways, so it widens the start point
  // going down and holds the stem going back up. Zero when off the valve --
  // which is exactly why bench set is performed with zero valve forces.
  const Ff = coupled ? PACKING_FRICTION : 0;
  // Real force balance (2026-09-29, Franz): preload force from the
  // adjuster's dead-zone+calibration curve, cracking pressure derived from
  // it (not hardcoded), travel = net force / spring rate via Hooke's law.
  const preload = preloadForce(adj);        // lbs
  const P0 = preload / DIA_AREA;            // cracking pressure, psig
  // off the valve there is no load to stop over-stroke at rated travel:
  // motion continues past 3/4 in until the plate lands on the lower casing.
  // coupled, the plug seats at rated travel: 3/4 in IS the down-stop.
  // Only off the valve can the mechanism over-stroke to the casing (STOP).
  const LIM = coupled ? TRAVEL : STOP;
  const LIM_IN = LIM / PX_PER_IN;
  // friction is a pressure-equivalent offset applied before converting to
  // force (same structure as the old model: it widens the start point going
  // down and holds the stem going back up), then Hooke's law converts net
  // force to travel, capped at the real physical stop in inches.
  const dn = Math.min(LIM_IN, Math.max(0, ((P-Ff)*DIA_AREA - preload) / SPRING_RATE)) * PX_PER_IN;
  const up = Math.min(LIM_IN, Math.max(0, ((P+Ff)*DIA_AREA - preload) / SPRING_RATE)) * PX_PER_IN;
  if (strokeState > LIM) strokeState = LIM;
  if (strokeState < dn) strokeState = dn;
  else if (strokeState > up) strokeState = up;
  // "held" = friction is actually displacing the stem from its
  // frictionless position, not merely present
  const frictionless = Math.min(LIM_IN, Math.max(0, (P*DIA_AREA - preload) / SPRING_RATE)) * PX_PER_IN;
  const held = Ff > 0 && Math.abs(strokeState - frictionless) > 0.5;
  const stroke = strokeState;
  lastStroke = stroke;
  const onStop = !coupled && stroke >= STOP;
  const seated = coupled && stroke >= TRAVEL;
  // Seat Shutoff Force (Franz): once coupled and at full rated travel,
  // further air pressure can't move the stem any more -- the excess force
  // above what full travel already needs becomes load squeezing the plug
  // against its seat, not more stroke. Zero until the stem actually reaches
  // rated travel; grows linearly above that point at DIA_AREA lbs per psi.
  const seatForce = (coupled && stroke >= TRAVEL - 0.5)
    ? Math.max(0, P*DIA_AREA - preload - SPRING_RATE*RATED_TRAVEL_IN) : 0;
  // Visual seat/spring travel (2026-09-29, Franz: "not even trying to
  // emulate the physics") now follows the REAL compression curve for the
  // SPRING's own drawn shape, but (2026-09-29, third pass) the adjuster's
  // own boss tip moves CONTINUOUSLY the entire time, exactly like the real
  // mechanism: "the spring adjuster actually has a boss looking tip...
  // that presses up inside the spring seat... have the tip start a little
  // lower than the top of the yoke housing to show it threading up into
  // the spring seat then pushing the spring seat up." A second pass tried
  // freezing the adjuster's position through the dead zone along with the
  // spring, which broke two things at once: the seat no longer reached down
  // to the yoke housing at full loosen, and the thread texture kept
  // scrolling on a part that had stopped moving. Real fix: two-stage motion.
  //   Stage 1 (0-40%, dead zone): the BOSS TIP alone rises continuously from
  //   its resting point near the yoke housing (measured live: the housing's
  //   collar opens into the yoke box at y=1120, so the tip rests at
  //   y=1140, 20 units below it) up to the seat's hub (y=1086, the seat's
  //   own baseline position) -- DEADZONE_TRAVEL=54 is exactly that gap. The
  //   seat itself does not move yet; nothing is touching it.
  //   Stage 2 (40-100%): boss tip and seat are now in contact and move
  //   together, using the same seatOffset the spring's own shape already
  //   follows -- pushing the seat up compresses the spring, matching the
  //   real force curve exactly (adjOffset and seatOffset coincide at the
  //   40% boundary, so there's no jump).
  const seatOffset = MAX_CAL_TURNS > 0 ? (preloadTurns(adj) / MAX_CAL_TURNS) * 24 : 0;
  const pctSlider = (adj - (-24)) / 48;
  // Two-stage adjuster motion (see CONTACT_OFFSET/GAP/INSERTION_TRAVEL/
  // FULL_INSERTION_OFFSET, module scope above): dead zone (0-40%) is ONE
  // continuous linear motion from CONTACT_OFFSET+GAP (lowest, visibly
  // separated, at pct=0) down through CONTACT_OFFSET (first touch) to
  // FULL_INSERTION_OFFSET (fully inserted, at pct=0.4) -- no explicit phase
  // split needed, the seat's own occlusion is what makes the visible-gap-
  // closing and hidden-insertion read as two stages from one continuous
  // motion. Past 40%, adjuster and seat are locked together at that same
  // fully-inserted relationship (FULL_INSERTION_OFFSET-seatOffset),
  // continuous with the dead-zone branch at the boundary (both equal
  // FULL_INSERTION_OFFSET when seatOffset=0), so there's no jump.
  const adjOffset = pctSlider <= ADJ_DEADZONE_PCT
    ? FULL_INSERTION_OFFSET + (CONTACT_OFFSET + GAP - FULL_INSERTION_OFFSET) * (1 - pctSlider/ADJ_DEADZONE_PCT)
    : FULL_INSERTION_OFFSET - seatOffset;
  spring(TOP0+stroke, SEAT0-seatOffset);
  diaphragm(stroke);
  document.getElementById('g-stem').setAttribute('transform',`translate(0,${stroke})`);
  document.getElementById('g-plate').setAttribute('transform',`translate(0,${stroke})`);
  // connected: stems move as one. Pre-connection: the valve stem sits
  // SEATED (plug on seat) = 140px below the painted assembled-at-rest
  // frame, and does not follow the actuator.
  document.getElementById('g-conn').setAttribute('transform',`translate(0,${stroke})`);
  document.getElementById('g-vgrp').setAttribute('transform',
    `translate(0,${PB.connected ? stroke : 140})`);
  document.getElementById('g-dn').setAttribute('transform',`translate(0,${PB.nutsDy})`);
  const _sp = document.getElementById('g-scaleplate');
  if (_sp) _sp.setAttribute('transform',`translate(0,${PB.scaleDy})`);
  document.getElementById('sp-seat-g').setAttribute('transform',`translate(0,${-seatOffset})`);
  document.getElementById('sp-adj-g').setAttribute('transform',`translate(0,${adjOffset})`);
  // Thread texture tracks the bolt's own continuous motion again (it's
  // rotation, not compression -- the bolt is genuinely turning the whole
  // time, dead zone included, exactly like adjOffset now is).
  adjThreads(adj*2);
  // fixed-format, single-line readouts -- never wrap, so the sliders
  // above them never shift position regardless of value or state.
  // Shows the actual crack pressure (P0) directly now -- the old "+/-
  // psi shift from a nominal center" framing doesn't make sense against a
  // dead-zone+calibration curve; an absolute cracking pressure is the
  // honest number now, feeding mobile/Practice mode's own readout slots.
  document.getElementById('adjout').textContent = `${P0.toFixed(1)} psig crack`;
  // Turns-of-compression readout (2026-09-29, Franz): "they don't think in
  // decimal inches or pounds of force while cranking a wrench -- they count
  // physical rotations." Counts from ZERO at the end of the dead zone (bolt
  // just touching the spring), not from the screw's absolute starting
  // position -- staying at 0.0 through the dead zone keeps this in lockstep
  // with preload force (also 0 there), instead of climbing on its own while
  // force stays flat, which would read as two readouts disagreeing. Inches
  // shown smaller alongside, in the same line, for caliper verification --
  // pure unit conversion (turns * pitch), no separate physics.
  const adjTurns = preloadTurns(adj);
  const adjInches = adjTurns * THREAD_PITCH_IN;
  document.getElementById('preloadOut').innerHTML =
    `${adjTurns.toFixed(1)} Turns<span class="readout-sub">(${adjInches.toFixed(2)} in)</span>`;
  const inWindow = P >= P0 && P <= (P0+BENCH_SPAN);
  const pressoutEl = document.getElementById('pressout');
  pressoutEl.textContent = `${P.toFixed(1)} psig`;
  if (pressoutEl.classList.contains('inwin') !== inWindow){
    pressoutEl.classList.toggle('inwin', inWindow);
    pressoutEl.classList.remove('readout-pulse'); void pressoutEl.offsetWidth; pressoutEl.classList.add('readout-pulse');
  }
  // Correction (2026-09-28, extended 2026-09-29 for Seat Shutoff Force):
  // status line matching the approved template's wording style. Reuses the
  // EXISTING status-line slot for the new seat-load number rather than
  // adding a new row -- adding a row here would need a matching spacer on
  // the adjuster card to keep the two instruments' rows aligned (the
  // alignment fix from earlier today), so folding it into the wording of
  // the state that's already "above bench set" avoids reopening that.
  // Correction (2026-09-29, Franz): "even if it's at zero... it can't
  // really be in bench set" -- at P0=0 (dead zone, spring not engaged) the
  // inWindow math (0psig >= 0 && 0psig <= span) technically passes, which
  // used to print "In bench set, stem traveling" for a condition that isn't
  // a real bench-set calibration at all. Same dead-zone gate as adjBenchSet
  // above, checked first so it overrides every other state while true.
  const inDeadZoneStatus = (adj - (-24))/48 <= ADJ_DEADZONE_PCT;
  document.getElementById('pressStatus').innerHTML = inDeadZoneStatus
    ? '<strong>Dead zone,</strong> spring not engaged'
    : P < P0 ? '<strong>Below bench set,</strong> stem at rest'
    : inWindow ? '<strong>In bench set,</strong> stem traveling'
    : seatForce > 0.5 ? `<strong>Above bench set,</strong> seat load +${seatForce.toFixed(0)} lbs`
    : '<strong>Above bench set,</strong> full travel';
  // secondary diagnostics move here, free to wrap without touching a slider
  document.getElementById('statusline').textContent =
    `travel window ${P0.toFixed(1)}-${(P0+BENCH_SPAN).toFixed(1)} psig · travel ${(stroke*0.75/TRAVEL).toFixed(2)} in`
    + (seatForce > 0.5 ? ` · seat load +${seatForce.toFixed(0)} lbs` : '')
    + (onStop ? ' · LOWER TRAVEL STOP - plate on casing'
       : seated ? ' · PLUG SEATED - valve closed'
       : (stroke>TRAVEL ? ' (past rated)' : ''))
    + (coupled && held ? ' · stem HELD by packing friction' : '');
  // mirror into Practice mode's own readouts -- same numbers, no duplicate physics
  const pvA = document.getElementById('pv-adjout');
  if (pvA) pvA.textContent = document.getElementById('adjout').textContent;
  const pvP = document.getElementById('pv-pressout');
  if (pvP) { pvP.textContent = pressoutEl.textContent; pvP.classList.toggle('inwin', inWindow); }
  pvCheckGate();
  updateMobileRails(adj, P, P0, inWindow);
  updateDesktopGauge(adj, P, P0, inWindow);
}
// ================= mobile rail sliders: same state, same physics, just a
// different real-HTML control surface (see layoutRail for positioning) =====
const THUMB_R = 15;   // half the thumb's 30px diameter
function railPct(v, vMin, vMax){ return (vMax-v)/(vMax-vMin); }
function thumbY(v, vMin, vMax, trackH){
  return THUMB_R + railPct(v, vMin, vMax) * Math.max(0, trackH - 2*THUMB_R);
}
function updateMobileRails(adj, P, P0, inWindow){
  const adjTrack = document.querySelector('#mAdjHit .mtrack');
  if (!adjTrack) return;   // not on mobile / rails not in DOM state yet
  document.getElementById('mAdjOut').textContent = document.getElementById('adjout').textContent;
  const hA = adjTrack.clientHeight;
  const pA = thumbY(adj, -24, 24, hA), pCenter = thumbY(0, -24, 24, hA);
  document.getElementById('mAdjThumb').style.top = pA + 'px';
  document.getElementById('mAdjCenter').style.top = pCenter + 'px';
  const fillA = document.getElementById('mAdjFill');
  fillA.style.top = Math.min(pA, pCenter) + 'px';
  fillA.style.height = Math.abs(pA - pCenter) + 'px';

  const mPressOut = document.getElementById('mPressOut');
  mPressOut.textContent = `${P.toFixed(1)} psig`;
  mPressOut.classList.toggle('inwin', inWindow);
  const pressTrack = document.querySelector('#mPressHit .mtrack');
  const hP = pressTrack.clientHeight;
  const pP = thumbY(P, 0, 18, hP);
  document.getElementById('mPressThumb').style.top = pP + 'px';
  const fillP = document.getElementById('mPressFill');
  fillP.style.top = pP + 'px'; fillP.style.bottom = '0';
  const pLo = thumbY(Math.min(18,P0+BENCH_SPAN), 0, 18, hP), pHi = thumbY(Math.max(0,P0), 0, 18, hP);
  const band = document.getElementById('mPressBand');
  band.style.top = pLo + 'px'; band.style.height = Math.max(0, pHi-pLo) + 'px';
}
function bindMobileVSlider(hitId, vMin, vMax, setFn){
  const hit = document.getElementById(hitId);
  let dragging=false;
  function move(e){
    if(!dragging) return;
    const rect = hit.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (e.clientY-rect.top)/rect.height));
    setFn(vMax - t*(vMax-vMin));
    update();
  }
  hit.addEventListener('pointerdown', e=>{ dragging=true; hit.setPointerCapture(e.pointerId); move(e); });
  hit.addEventListener('pointermove', move);
  hit.addEventListener('pointerup', ()=> dragging=false);
  hit.addEventListener('pointercancel', ()=> dragging=false);
}
bindMobileVSlider('mAdjHit', -24, 24, v=>setAdj(v));
bindMobileVSlider('mPressHit', 0, 18, v=>setPress(v));
function svgToScreen(x, y){
  const svg = document.getElementById('asm');
  const pt = svg.createSVGPoint();
  pt.x = x; pt.y = y;
  return pt.matrixTransform(svg.getScreenCTM());
}
function placeRail(id, x0, y0, x1, y1){
  const figRect = document.querySelector('.fig').getBoundingClientRect();
  const p1 = svgToScreen(x0, y0);
  const p2 = svgToScreen(x1, y1);
  const rail = document.getElementById(id);
  rail.style.left = (p1.x - figRect.left) + 'px';
  rail.style.top = (p1.y - figRect.top) + 'px';
  rail.style.width = (p2.x - p1.x) + 'px';
  rail.style.height = (p2.y - p1.y) + 'px';
}
function layoutRail(){
  // Verified against real part geometry (check_safe_zones.py): left column
  // clear x0-453, right column clear x1032-1480, for y500 down. Housing
  // wall (not the full yoke -- that includes the legs, which run all the
  // way to the valve mount) is y490-1265, center y877, nudged up ~70 units
  // on Franz's on-device read. Sliders sit below it, matched length.
  placeRail('mobileLegend', 1050, 550, 1465, 1060);
  placeRail('railLeft', 20, 1090, 435, 1720);
  placeRail('railRight', 1050, 1090, 1465, 1720);
}
// ================= desktop instruments: placed in the page margin outside
// the SVG's own rendered box (see layoutDesktopControls below) rather than
// a verified-empty rectangle inside the SVG's coordinate space -- that
// approach (rounds 2-10) kept needing re-verification against the drawing's
// real geometry and was fundamentally capped by how little room exists
// inside the SVG's own narrow bounding box. label and instrument still
// scale together as one unit (round 9) -- placeAt applies one transform to
// the whole element, never text separately from the graphics it labels. =====
function placeAt(id, cx, cy, scale){
  const el = document.getElementById(id);
  if (!el) return;
  el.style.left = cx+'px';
  el.style.top = cy+'px';
  el.style.transform = `translate(-50%,-50%) scale(${scale})`;
}
// Anchors a single point (not a centered rectangle) with the element's LEFT
// edge pinned there -- for the nameplate tab, which should read as attached
// to that point on the actuator and growing rightward from it, not centered
// on top of it.
function placeAnchor(id, x, y, pxOffset){
  const el = document.getElementById(id);
  if (!el) return;
  const p = svgToScreen(x, y);
  // pxOffset is real screen pixels, applied AFTER the svg->screen
  // conversion -- unlike shifting x in SVG-space, this stays a constant
  // on-screen amount no matter how large the SVG renders (see the call
  // site's note on why an SVG-space inset isn't scale-invariant here).
  el.style.left = (p.x + (pxOffset||0)) + 'px';
  el.style.top = p.y + 'px';
  el.style.transform = 'translate(0,-50%)';
}
// Round 11 (2026-09-27): every prior round's fight over gauge size versus
// overlap was against the wrong constraint. adjCtl/pressrow were confined to
// the narrow space INSIDE the SVG's own coordinate box (verifying and
// re-verifying exactly where the actuator's geometry allowed a sliver of
// room beside it) -- but on a wide window, the SVG itself (tall and
// narrow, height-constrained to fit the drawing) doesn't come close to
// filling the viewport width. The real open space Franz pointed out is
// OUTSIDE the SVG's own rendered box entirely: page margin, not SVG margin.
// Positioning instruments there instead structurally cannot overlap the
// actuator (they're not even inside the SVG's bounding box) and uses the
// actual available room instead of a hand-verified sliver of it -- no more
// wall-coordinate bookkeeping needed at all for this.
function layoutDesktopControls(){
  if (window.innerWidth <= 700) return;
  const svgRect = document.getElementById('asm').getBoundingClientRect();
  const inset = 28;   // breathing room from the true viewport edge
  // Stage 1 (2026-09-28): the index rail eats real width from the right
  // margin when open (58px collapsed vs 330px open) -- subtracting it here
  // is what keeps the pressure gauge clear of it instead of being covered
  // when the rail opens. Reading the target CSS custom property (gated on
  // the body class) rather than #indexRail's live offsetWidth is
  // deliberate: offsetWidth mid-transition reflects whatever the rail's
  // width happens to be AT THAT INSTANT (still close to its old value
  // right when the toggle fires, since layoutAll() runs synchronously
  // before the 0.3s transition has progressed), which raced the gauge's
  // reposition against the rail's own animation and left it overlapped
  // once the transition finished widening past where the gauge had
  // already settled. The end-state constant is knowable up front, so read
  // that directly instead of a value that's still mid-flight.
  const rootCS = getComputedStyle(document.documentElement);
  const railW = parseFloat(document.body.classList.contains('rail-open')
    ? rootCS.getPropertyValue('--railw-open')
    : rootCS.getPropertyValue('--railw-collapsed'));
  const leftW = Math.max(0, svgRect.left - inset*2);
  const rightW = Math.max(0, window.innerWidth - railW - inset*2 - svgRect.right);
  const marginH = svgRect.height * 0.85;   // leave headroom top/bottom of the drawing's own height
  const adjEl = document.getElementById('adjCtl'), pressEl = document.getElementById('pressrow');
  const adjScale = Math.min(1, leftW/adjEl.offsetWidth, marginH/adjEl.offsetHeight);
  const pressScale = Math.min(1, rightW/pressEl.offsetWidth, marginH/pressEl.offsetHeight);
  const sharedScale = Math.min(adjScale, pressScale);
  // Vertically, still centered on the real adjuster part (sp-adj-g,
  // y1068-1386, center ~1227) -- that part of round 6 still holds. Pressure
  // matches the same height for a clean, symmetric, drafting-sheet-style
  // composition, since it has no equivalent single part to align to.
  const cy = svgToScreen(0, 1227).y;
  placeAt('adjCtl', inset + leftW/2, cy, sharedScale);
  placeAt('pressrow', svgRect.right + inset + rightW/2, cy, sharedScale);
  // Correction (2026-09-29): placeAt centers each .ctl's whole box at the
  // same cy, but adjCtl and pressrow aren't the same total height (pressrow
  // has a digital-readout line between its gauge and its slider that adjCtl
  // has no counterpart for) -- so centering both boxes at the same cy lands
  // their <label> text at different Y coordinates even though the boxes
  // themselves are level. Franz: "the vertical location of where it says
  // diaphragm pressure and where it says spring adjuster are not the same."
  // Fixed with a corrective second pass on the real rendered label
  // positions rather than trying to match the two cards' total heights --
  // robust to any future content difference between them.
  const adjLabelR = adjEl.querySelector('label').getBoundingClientRect();
  const pressLabelR = pressEl.querySelector('label').getBoundingClientRect();
  const labelDelta = (pressLabelR.top + pressLabelR.height/2) - (adjLabelR.top + adjLabelR.height/2);
  if (Math.abs(labelDelta) > 0.5) {
    adjEl.style.top = (cy + labelDelta/2) + 'px';
    pressEl.style.top = (cy - labelDelta/2) + 'px';
  }
  // The nameplate tab itself is drawn natively into #asm (see <g
  // id="npTab">), so it can't misalign with the wall next to it -- only the
  // pop-out CARD is an HTML overlay needing placement, anchored just past
  // the tab's own right edge.
  placeAnchor('npCard', 990, 770, 0);
  // Correction (2026-09-29): center the title on the actuator's real
  // horizontal center (same svgRect already computed above for the
  // instruments), not on whatever space happens to be left between
  // #tb-brand and #tb-provenance -- see the .tb-title CSS comment for why
  // that flex-centering was wrong. #titleblock is position:fixed, so it's
  // the containing block .tb-title's `left` resolves against.
  const tbRect = document.getElementById('titleblock').getBoundingClientRect();
  const figCenterX = (svgRect.left + svgRect.right) / 2;
  document.querySelector('.tb-title').style.left = (figCenterX - tbRect.left) + 'px';
}
// Play/Practice/valve-coupled stay DOM children of #ctrlbar/#panel (mobile
// needs them there, unchanged) but are laid out into the top-right bar on
// desktop here -- anchored to the true viewport edge (Stage 1, 2026-09-28:
// no longer to #theme-toggle's position, since that moved to the bottom
// corner) using each element's own measured width, so it stays correct
// regardless of button label length or localization.
function layoutTopBar(){
  if (window.innerWidth <= 700) return;
  const gap = 14;
  let cursor = window.innerWidth - 28;
  for (const id of ['valveRow', 'pv-play']){
    const el = document.getElementById(id);
    if (!el) continue;
    const w = el.offsetWidth;
    el.style.position = 'fixed';
    el.style.top = '18px';
    el.style.left = (cursor - w) + 'px';
    cursor -= (w + gap);
  }
}
// Index rail open/close (Stage 1, 2026-09-28): a body class drives the
// #indexRail/#titleblock/#theme-toggle width/position via the shared
// var(--railw-*) CSS custom properties (see the desktop media query), so
// they reflow in lockstep from one toggle. layoutAll() re-runs afterward so
// layoutDesktopControls() picks up the rail's new width immediately rather
// than waiting for the next resize event.
function openIndexRail(){
  document.body.classList.add('rail-open');
  document.getElementById('railToggle').setAttribute('aria-expanded', 'true');
  document.getElementById('railPanel').setAttribute('aria-hidden', 'false');
  layoutAll();
}
function closeIndexRail(){
  document.body.classList.remove('rail-open');
  document.getElementById('railToggle').setAttribute('aria-expanded', 'false');
  document.getElementById('railPanel').setAttribute('aria-hidden', 'true');
  layoutAll();
}
document.getElementById('railToggle').addEventListener('click', ()=>{
  document.body.classList.contains('rail-open') ? closeIndexRail() : openIndexRail();
});
document.getElementById('railClose').addEventListener('click', closeIndexRail);
// Physics reference sheet open/close (2026-09-30, rebuilt again -- see the
// CSS comment on #psFull for the full history). Same body-class-toggle
// shape as rail-open above; #psFull and its visibility:hidden CSS on the
// real controls do the actual swap. This flips the class, updates
// #titleblock's TEXT to match (position/border/font untouched, only the
// words change), clones every real part shown into its pf-/pr- targets,
// and recomputes the three leader lines against their real anchors.
const TB_SUB_DEFAULT = document.querySelector('.tb-title-sub').textContent;
const TB_PROV_DEFAULT = document.querySelector('.tb-provenance').textContent;
// Clones a real part's CURRENT rendered state -- transform and content --
// verbatim into a fresh target element, classes and all, so every part on
// this sheet keeps its own real color/style instead of a redrawn stand-in
// (2026-09-30, Franz: "use our actual models... don't use the sketch parts
// we tried making"). Safe to call once per open: the real controls (and
// their generators) sit behind visibility:hidden while the sheet is open,
// so nothing regenerates out from under the clone until it's closed again.
// The coil's real vertical extent shifts with whatever pose the sheet is
// showing -- topY moves with stroke, botY with seatOffset -- so a fixed
// crop can't stay correct across reference poses (2026-09-30, Franz: "the
// spring is cut off on the bottom too and not starting up in its card",
// after the pose changed to 11psig). This measures the CLONED content's
// own real bbox each time, after cloning, and frames it with a fixed
// margin -- computed, not guessed, same spirit as the leader lines.
function fitSpringRowViewBox(){
  const back = document.getElementById('pr-spring-back').getBBox();
  const front = document.getElementById('pr-spring-front').getBBox();
  const x0 = Math.min(back.x, front.x), y0 = Math.min(back.y, front.y);
  const x1 = Math.max(back.x+back.width, front.x+front.width);
  const y1 = Math.max(back.y+back.height, front.y+front.height);
  const pad = 20;
  document.getElementById('prSpringSvg').setAttribute('viewBox',
    `${(x0-pad).toFixed(1)} ${(y0-pad).toFixed(1)} ${(x1-x0+pad*2).toFixed(1)} ${(y1-y0+pad*2).toFixed(1)}`);
}
// Same fix, same reason, for the chamber row (2026-09-30, Franz: "I still
// don't see the entire diaphragm plate or diaphragm in the casing
// figure") -- pr-chamber-plate-wrap's translate at the 11psig pose moves
// the plate/diaphragm well outside a viewBox sized for their rest
// position. getBBox() ignores an element's own transform (it's a LOCAL
// bbox), so the plate wrap's translateY has to be added back in by hand --
// bboxWithTransform does that for any single translate(x,y) transform,
// which is the only kind this file ever puts on a part.
function bboxWithTransform(el){
  const b = el.getBBox();
  const t = el.getAttribute('transform');
  const m = t && t.match(/translate\(([-\d.]+)[, ]+([-\d.]+)\)/);
  const dx = m ? +m[1] : 0, dy = m ? +m[2] : 0;
  return {x:b.x+dx, y:b.y+dy, width:b.width, height:b.height};
}
function fitChamberRowViewBox(){
  const upper = document.getElementById('pr-chamber-upper').getBBox();
  const plate = bboxWithTransform(document.getElementById('pr-chamber-plate-wrap'));
  const dia = document.getElementById('pr-chamber-dia').getBBox();
  const x0 = Math.min(upper.x, plate.x, dia.x), y0 = Math.min(upper.y, plate.y, dia.y);
  const x1 = Math.max(upper.x+upper.width, plate.x+plate.width, dia.x+dia.width);
  const y1 = Math.max(upper.y+upper.height, plate.y+plate.height, dia.y+dia.height);
  const pad = 20;
  document.getElementById('prChamberSvg').setAttribute('viewBox',
    `${(x0-pad).toFixed(1)} ${(y0-pad).toFixed(1)} ${(x1-x0+pad*2).toFixed(1)} ${(y1-y0+pad*2).toFixed(1)}`);
}
// The upper casing's real interior ceiling, along its own centerline --
// measured, not guessed (2026-09-30): isPointInFill() scanned down p-upper
// at x=742.5 and found solid material y30-89, empty from y90 on (see the
// working-model session notes for the actual scan). This is the real wall
// the diaphragm chamber's open volume starts from.
const CHAMBER_CEILING_Y = 90;
// Points the two callouts whose anchors move with the model's own pose
// (2026-09-30, Franz: Fig. 1.1 should point "to the empty chamber between
// the diaphragm plate and the upper casing", Fig. 1.2 "to the middle of
// the spring") at real, freshly-measured positions instead of one static
// guess each -- both the chamber gap and the coil's own extent change with
// whatever pose the sheet is showing (see setAdj/setPress above), so a
// fixed cy would drift out of place exactly like the row crops already did
// twice. Call after the spring and plate are cloned into the left column.
function positionDynamicAnchors(){
  const plate = bboxWithTransform(document.getElementById('pf-plate-wrap'));
  const chamberMidY = (CHAMBER_CEILING_Y + plate.y) / 2;
  document.getElementById('pf-anchor-chamber').setAttribute('cy', chamberMidY.toFixed(1));
  const back = document.getElementById('pf-spring-back').getBBox();
  const front = document.getElementById('pf-spring-front').getBBox();
  const y0 = Math.min(back.y, front.y), y1 = Math.max(back.y+back.height, front.y+front.height);
  document.getElementById('pf-anchor-spring').setAttribute('cy', ((y0+y1)/2).toFixed(1));
}
function cloneRealPart(sourceId, targetId){
  const src = document.getElementById(sourceId);
  const tgt = document.getElementById(targetId);
  const t = src.getAttribute('transform');
  if (t) tgt.setAttribute('transform', t); else tgt.removeAttribute('transform');
  if (src.tagName === 'path'){ tgt.setAttribute('d', src.getAttribute('d')); return; }
  tgt.innerHTML = src.innerHTML;
  // De-duplicate clipPath ids (found via the adjuster's threads rendering
  // invisible with no error): cloning sp-adj-g also clones its
  // <clipPath id="adjclip">, and with the original plus two clones (left
  // column + right column) all sharing that id, clip-path:url(#adjclip)
  // resolves ambiguously -- Chrome picked a reference that clipped the
  // thread lines away entirely, silently. Rename this clone's own
  // clipPath(s) -- and the one element in this clone that points at each
  // -- to a name unique to this target, so every clone owns an
  // unambiguous clip.
  tgt.querySelectorAll('clipPath[id]').forEach(cp=>{
    const oldId = cp.id, newId = targetId+'-'+oldId;
    cp.id = newId;
    tgt.querySelectorAll(`[clip-path="url(#${oldId})"]`).forEach(el=>
      el.setAttribute('clip-path', `url(#${newId})`));
  });
}
function openPhysicsSheet(){
  if (document.body.classList.contains('animator-open')) closeAnimator();
  document.body.classList.add('physics-open');
  // Pose the real model at the fleet's own calibrated top-of-travel (2026-
  // 09-30, Franz: "open it to the 11psi distance to show the open chamber
  // for our area") before cloning anything, then put it back exactly how
  // the user left it -- safe because the real #asm is visibility:hidden
  // for the whole time physics is open, so this never flickers on screen.
  // CAL_ADJ is the same real calibration constant the adjuster's own snap
  // uses; 11 is the fleet's real top-of-bench-set spec (matches the
  // nameplate's own printed "3-11"). Every part below is cloned from this
  // ONE pose so the assembly stays mechanically consistent -- spring
  // compressed, stem/plate/diaphragm at full 0.75in travel together,
  // rather than some parts at rest and others at travel.
  const _savedAdj = ADJ, _savedPress = PRESS;
  setAdj(CAL_ADJ); setPress(11); update();
  // Left column: the full assembly, every part this model actually draws.
  cloneRealPart('sp-spring-back', 'pf-spring-back');
  cloneRealPart('sp-spring-front', 'pf-spring-front');
  cloneRealPart('g-stem', 'pf-stem');
  cloneRealPart('sp-adj-g', 'pf-adj-g');
  cloneRealPart('sp-seat-g', 'pf-seat-g');
  cloneRealPart('g-plate', 'pf-plate-wrap');
  cloneRealPart('p-dia', 'pf-dia');
  positionDynamicAnchors();
  // Right column: the same generated parts, individually cropped -- plus
  // the rolling diaphragm itself, which the chamber row was missing
  // entirely until Franz caught it, and the plate's own travel transform,
  // without which the chamber row's plate would always draw at rest no
  // matter what pose the rest of the sheet is showing.
  cloneRealPart('sp-spring-back', 'pr-spring-back');
  cloneRealPart('sp-spring-front', 'pr-spring-front');
  fitSpringRowViewBox();
  cloneRealPart('sp-adj-g', 'pr-adj-g');
  cloneRealPart('p-dia', 'pr-chamber-dia');
  cloneRealPart('g-plate', 'pr-chamber-plate-wrap');
  fitChamberRowViewBox();
  setAdj(_savedAdj); setPress(_savedPress); update();
  document.querySelector('.tb-title-sub').textContent = 'Physics Reference — Actuator Mechanics';
  document.querySelector('.tb-provenance').textContent = 'The same real model, in section';
  // "click again to close" (2026-09-30, Franz -- replaces the separate
  // Back-to-schematic button) has to be discoverable, not just possible --
  // the label itself says what a second click does, color/weight are
  // reinforcement on top of that, not the whole signal.
  const link = document.getElementById('physicsRefLink');
  link.textContent = 'Close Physics'; link.classList.add('active');
  layoutPhysicsLeaders();
}
function closePhysicsSheet(){
  document.body.classList.remove('physics-open');
  document.querySelector('.tb-title-sub').textContent = TB_SUB_DEFAULT;
  document.querySelector('.tb-provenance').textContent = TB_PROV_DEFAULT;
  const link = document.getElementById('physicsRefLink');
  link.textContent = 'Physics'; link.classList.remove('active');
}
document.getElementById('physicsRefLink').addEventListener('click', ()=>
  document.body.classList.contains('physics-open') ? closePhysicsSheet() : openPhysicsSheet());
// Animator (2026-09-30, Phase 1 -- Franz: a workspace for authoring the
// narration rows + per-row highlight checklist, "so I can kind of fiddle
// and make a thing", with live preview against the REAL model instead of
// a mockup or a cloned snapshot). Friendly labels map onto the real
// FOCUSABLE ids this schematic already keys its own dim/highlight
// behavior off of -- the checklist is never free text, so nothing here
// can name a part the live focus() function doesn't already know.
const ANIM_PARTS = [
  {label:'Upper casing', ids:['p-upper']},
  {label:'Lower casing', ids:['p-lower']},
  {label:'Diaphragm plate', ids:['g-plate']},
  {label:'Diaphragm', ids:['p-dia']},
  {label:'Spring', ids:SPRING},
  {label:'Spring seat', ids:['sp-seat-g']},
  {label:'Lower spring adjuster', ids:['sp-adj-g']},
  {label:'Stem', ids:['g-stem']},
  {label:'Yoke', ids:['p-yoke']},
  {label:'Travel scale', ids:['g-scale']},
];
function partIdsForLabel(label){ const p = ANIM_PARTS.find(x=>x.label===label); return p ? p.ids : []; }
function newAnimRow(){ return {id:'r'+Math.random().toString(36).slice(2,9), text:'', items:{}}; }
// localStorage only, deliberately (2026-09-30): this is the "fiddle and
// see it work" phase, not the real save/edit/trash/publish pipeline --
// just enough persistence that a draft survives a reload while iterating.
function loadAnimRows(){
  try{ const s = localStorage.getItem('657-animator-rows'); if (s){ const r = JSON.parse(s); if (r.length) return r; } }
  catch(e){}
  return [newAnimRow()];
}
function saveAnimRows(){ try{ localStorage.setItem('657-animator-rows', JSON.stringify(ANIM_ROWS)); }catch(e){} }
let ANIM_ROWS = loadAnimRows();
function escapeHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
// Row number is computed from array position at render time, never stored
// (2026-09-30, Franz: "numbering or ability to collapse each row") -- it's
// always right even after a reorder or a delete, with nothing to keep in
// sync by hand. Collapsed rows show a one-line preview instead of the full
// textarea/checklist, so a long list of rows stays scannable.
function renderAnimRows(){
  document.getElementById('anRows').innerHTML = ANIM_ROWS.map((row,idx) => {
    const collapsed = !!row.collapsed;
    const preview = escapeHtml((row.text||'').trim().slice(0,70));
    return `
    <div class="an-row" data-row="${row.id}">
      <div class="an-row-head">
        <button type="button" class="an-collapse" data-action="collapse" title="${collapsed?'Expand':'Collapse'} row">${collapsed?'&#9656;':'&#9662;'}</button>
        <span class="an-row-num">Row ${idx+1}</span>
        ${collapsed ? `<span class="an-row-preview">${preview || '<em>(no text yet)</em>'}</span>` : ''}
        <div class="an-row-move">
          <button type="button" data-action="moveup" title="Move up"${idx===0?' disabled':''}>&#8593;</button>
          <button type="button" data-action="movedown" title="Move down"${idx===ANIM_ROWS.length-1?' disabled':''}>&#8595;</button>
        </div>
        <button type="button" class="an-row-delete" data-action="delete" title="Delete row">&times;</button>
      </div>
      ${collapsed ? '' : `
      <div class="an-row-body">
        <div class="an-row-text">
          <textarea data-field="text" placeholder="Narration text for this beat...">${escapeHtml(row.text)}</textarea>
          <div class="an-row-actions">
            <button type="button" data-action="preview">Preview</button>
            <button type="button" data-action="play">Play sequence</button>
          </div>
        </div>
        <div class="an-row-checklist">
          ${ANIM_PARTS.map((p,i) => { const ord = row.items[p.label]; const uid = `an-${row.id}-${i}`;
            // Fixing a real bug Franz caught (2026-09-30): "I can only
            // checkbox a couple of things, the rest don't work." Both
            // inputs were nested inside ONE <label>, which browsers handle
            // inconsistently -- a click on the number input could
            // re-trigger the label's own implicit activation of the
            // checkbox, so only some items behaved depending on exactly
            // where a click landed. Checkbox and number input are siblings
            // now, each its own control; the label only wraps the text and
            // points at the checkbox by id, so it can't reach the number
            // input at all.
            return `<div class="an-item">
              <input type="checkbox" id="${uid}" data-field="check" data-label="${p.label}" ${ord!=null?'checked':''}>
              <label for="${uid}">${p.label}</label>
              <input type="number" min="1" max="9" data-field="order" data-label="${p.label}"
                value="${ord!=null?ord:''}" placeholder="#" ${ord!=null?'':'disabled'}>
            </div>`; }).join('')}
        </div>
      </div>`}
    </div>`; }).join('');
}
function animRowById(id){ return ANIM_ROWS.find(r=>r.id===id); }
document.getElementById('anRows').addEventListener('input', e=>{
  const rowEl = e.target.closest('.an-row'); if (!rowEl) return;
  const row = animRowById(rowEl.dataset.row); if (!row) return;
  if (e.target.dataset.field==='text'){ row.text = e.target.value; saveAnimRows(); }
  else if (e.target.dataset.field==='order'){
    const v = +e.target.value; if (v>0) row.items[e.target.dataset.label] = v;
    saveAnimRows();
  }
});
document.getElementById('anRows').addEventListener('change', e=>{
  const rowEl = e.target.closest('.an-row'); if (!rowEl) return;
  const row = animRowById(rowEl.dataset.row); if (!row) return;
  if (e.target.dataset.field==='check'){
    const label = e.target.dataset.label;
    if (e.target.checked){ if (row.items[label]==null) row.items[label] = Object.keys(row.items).length+1; }
    else delete row.items[label];
    saveAnimRows(); renderAnimRows();
  }
});
document.getElementById('anRows').addEventListener('click', e=>{
  const rowEl = e.target.closest('.an-row'); if (!rowEl) return;
  const row = animRowById(rowEl.dataset.row); if (!row) return;
  const action = e.target.dataset.action; if (!action) return;
  if (action==='preview'){ previewAnimRow(row); return; }
  if (action==='play'){ playAnimRowSequence(row); return; }
  const idx = ANIM_ROWS.indexOf(row);
  if (action==='delete') ANIM_ROWS = ANIM_ROWS.filter(r=>r.id!==row.id);
  else if (action==='collapse') row.collapsed = !row.collapsed;
  else if (action==='moveup' && idx>0) [ANIM_ROWS[idx-1],ANIM_ROWS[idx]] = [ANIM_ROWS[idx],ANIM_ROWS[idx-1]];
  else if (action==='movedown' && idx<ANIM_ROWS.length-1) [ANIM_ROWS[idx],ANIM_ROWS[idx+1]] = [ANIM_ROWS[idx+1],ANIM_ROWS[idx]];
  else return;
  saveAnimRows(); renderAnimRows();
});
document.getElementById('anAddRow').addEventListener('click', ()=>{
  ANIM_ROWS.push(newAnimRow()); saveAnimRows(); renderAnimRows();
});
function previewAnimRow(row){ focus(Object.keys(row.items).flatMap(partIdsForLabel)); }
// Steps through the row's order groups on a fixed delay -- purely so Franz
// can SEE a sequence work before any real timing exists; once per-row
// audio segments exist (a later phase), each step's delay comes from the
// real segment duration instead of this placeholder 1.2s.
function playAnimRowSequence(row){
  const groups = {};
  Object.entries(row.items).forEach(([label,ord])=>{ (groups[ord] = groups[ord]||[]).push(label); });
  const orders = Object.keys(groups).map(Number).sort((a,b)=>a-b);
  if (!orders.length){ focus([]); return; }
  let revealed = [];
  orders.forEach((ord,i)=>{
    setTimeout(()=>{ revealed = revealed.concat(groups[ord]); focus(revealed.flatMap(partIdsForLabel)); }, i*1200);
  });
}
function openAnimator(){
  if (document.body.classList.contains('physics-open')) closePhysicsSheet();
  // Collapse the rail instead of forcing it open, unlike Physics (2026-09-
  // 30, Franz: "more real estate, like it collapsing the vertical bar
  // pane") -- frees 330-58=272px for genuinely usable writing/checklist
  // width (see --animw and the .fig padding-right rule above). "Animator"
  // lives in that same rail, so #anClose (wired below) is the real way
  // back out now, not just a convenience next to it.
  closeIndexRail();
  document.body.classList.add('animator-open');
  const link = document.getElementById('animatorRefLink');
  link.textContent = 'Close Animator'; link.classList.add('active');
  renderAnimRows();
}
function closeAnimator(){
  document.body.classList.remove('animator-open');
  const link = document.getElementById('animatorRefLink');
  link.textContent = 'Animator'; link.classList.remove('active');
  focus();
}
document.getElementById('animatorRefLink').addEventListener('click', ()=>
  document.body.classList.contains('animator-open') ? closeAnimator() : openAnimator());
document.getElementById('anClose').addEventListener('click', closeAnimator);
// Three leader lines, each computed in real screen space (getBoundingClientRect
// on the actual anchor marker and the callout box), not hand-guessed
// coordinates -- stays correct at any viewport width and regardless of how
// much the model's own aspect ratio letterboxes inside #psLeftCol. Folded
// into layoutAll()'s resize pipeline below; a no-op (guarded at the top)
// whenever the sheet isn't open.
function layoutPhysicsLeaders(){
  if (!document.body.classList.contains('physics-open')) return;
  const colRect = document.getElementById('psLeftCol').getBoundingClientRect();
  const pairs = [
    ['pf-anchor-chamber', 'psCalloutChamber', 'psLeaderChamber'],
    ['pf-anchor-spring', 'psCalloutSpring', 'psLeaderSpring'],
    ['pf-anchor-adjuster', 'psCalloutAdjuster', 'psLeaderAdjuster'],
  ];
  pairs.forEach(([anchorId, calloutId, pathId])=>{
    const a = document.getElementById(anchorId).getBoundingClientRect();
    const c = document.getElementById(calloutId).getBoundingClientRect();
    const ax = a.left + a.width/2 - colRect.left, ay = a.top + a.height/2 - colRect.top;
    // land on the callout's nearest edge point to the anchor, not its
    // center, so the leader meets the card at its rim like a real one
    const cx = Math.max(c.left, Math.min(a.left, c.right)) - colRect.left;
    const cy = Math.max(c.top, Math.min(a.top, c.bottom)) - colRect.top;
    const dx = cx-ax, dy = cy-ay, len = Math.hypot(dx,dy) || 1;
    const px = -dy/len, py = dx/len, bowAmt = Math.min(30, len*0.15);
    const qx = (ax+cx)/2 + px*bowAmt, qy = (ay+cy)/2 + py*bowAmt;
    document.getElementById(pathId).setAttribute('d',
      `M${ax.toFixed(1)},${ay.toFixed(1)} Q${qx.toFixed(1)},${qy.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}`);
  });
}
function layoutAll(){ layoutRail(); layoutDesktopControls(); layoutTopBar(); layoutPhysicsLeaders(); }
window.addEventListener('resize', layoutAll);
window.addEventListener('orientationchange', layoutAll);
if (window.visualViewport) window.visualViewport.addEventListener('resize', layoutAll);
// ResizeObserver's callback is async, so it can't be the only trigger -- the
// very first render would compute thumb positions before it's fired even
// once. Also re-runs update() (not just the layout) since a resize changes
// the track's clientHeight, which the thumb math depends on directly.
new ResizeObserver(()=>{ layoutAll(); update(); }).observe(document.querySelector('.fig'));
layoutAll();
// Correction (2026-09-29): the label-alignment pass inside
// layoutDesktopControls() measures each instrument's real rendered <label>
// position -- on the very first synchronous call that can read stale/
// not-yet-finished layout (confirmed directly: the label offset persisted
// unchanged for a full second after load, until something else forced a
// second layoutAll() call, which then computed it correctly). Same
// first-paint safety net already used for update() below -- a second pass
// one frame later catches it.
requestAnimationFrame(layoutAll);
// nameplate: collapsed by default, tab toggles the card out to the right.
// The tab is the <g id="npTab"> drawn into #asm -- a real SVG element, not
// an HTML button, so Enter/Space are wired up manually to match native
// button keyboard behavior for the tabindex="0"/role="button" it carries.
(function(){
  const tab = document.getElementById('npTab');
  const card = document.getElementById('npCard');
  function toggle(){
    const open = card.classList.toggle('open');
    tab.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  tab.addEventListener('click', toggle);
  tab.addEventListener('keydown', e=>{
    if(e.key==='Enter' || e.key===' '){ e.preventDefault(); toggle(); }
  });
})();
// ================= scripted SOP playback =================
const TIMING = __TIMINGJSON__;
const audio = document.getElementById('pb-audio');
const capEl = document.getElementById('cap');
let playing=false, curSeg=-1, seg8sw=false, firedCues=[];
// Desktop's table of contents (round 12). TIMING's own `section` field only
// splits the narrated segments into 3 groups ("How the Actuator Works" /
// "Spring Verification" / "Installing the Stem Connector"), but Franz wants
// the first group split further -- "Principle of Operation comes first, but
// is separate" from "Set the Spring Adjuster". That distinction doesn't
// exist in the narration data, so these 4 topics are explicit rather than
// derived.
// Re-indexed 2026-09-30 (Franz: "add all the physics for the diaphragm
// pressure and the spring adjuster" was reverted the same day (2026-09-30,
// Franz: "I made a mistake saying to include the physics") -- the physics
// numbers (46in^2, 490lbf/in, 138/506lbf, 12 TPI, 3.38 turns) are GONE from
// "Principle of Operation", replaced with Franz's own plainer dictated
// script (no numbers at all: intro, air pushes the plate/stem down, spring
// compresses against the seat/yoke, then tightening the adjuster before
// connecting to the valve sets preload and establishes bench set).
// Restructured again 2026-09-30, round 3 (Franz: "the overall animation is
// exactly the same length... there wasn't much spacing inserted... I need
// you to have beats"). A fraction-based cue can only rearrange WHEN the
// visuals react within a segment's own fixed, already-spoken-length audio
// -- it can't manufacture real silence. A real "beat" (his word, "like in
// a play") requires an actual pause in the audio, which only exists at
// paragraph/segment boundaries (PAUSE_S). So "How the Actuator Works" was
// split into more, shorter paragraphs -- one idea per beat -- instead of
// relying on in-segment timing tricks, and the content itself grew too
// (added, at Franz's request: tightening the adjuster pushes the spring
// seat up, compressing the spring between the seat and the diaphragm
// plate, which rests at its upper travel stop against the upper
// diaphragm casing with no air applied). Indices below are taken from the
// REAL regenerated narration/output/657/timing.json (21 segments).
// "Principle of Operation" is now 6 real segments (0-5): intro / air
// pushes the plate+stem down / spring compresses against the seat+yoke /
// tighten the adjuster / that pushes the seat up against the plate at its
// upper stop / bench set established. "Set the Spring Adjuster" is
// unchanged text, still 2 segments (6-7). Spring Verification (8-13, 6
// segments) and Installing the Stem Connector (14-20, 7 segments) are
// untouched text, just shifted 2 segments later than the prior round
// because "Principle of Operation" picked up 2 extra real segments from
// the new paragraph breaks.
const SECTIONS = [
  {name:'Principle of Operation', startIdx:0, endIdx:5},
  {name:'Set the Spring Adjuster', startIdx:6, endIdx:7},
  {name:'Verify Bench Set to Rated Travel', startIdx:8, endIdx:13},
  {name:'Set Valve Travel', startIdx:14, endIdx:20},
];
let activeSection = -1;   // which SECTIONS entry is currently playing, -1 = none/mobile's full playback
let playEndTime = null;   // section-bounded playback stops here; null = play to the end (mobile's button)
// 0.1-step rounding: the original native <input type=range step="0.1">
// snapped to a clean decimal grid for free; the custom drag slider lost
// that (continuous float), which is exactly why landing precisely on 3.0
// psig by mouse felt hard. Restored here rather than in the slider code so
// every caller (drag, keyboard, SOP playback) gets the same clean grid.
// Magnetic snap (2026-09-29, Franz: "it's hard for me to... stay at the
// exact spot I'm trying to get it to"). Lives in the setter itself, same
// reasoning as the 0.1 rounding above -- every caller (drag, keyboard,
// steppers, SOP playback) gets it for free with no separate snap logic in
// bindHSlider. Pressure snaps to the CURRENT crack pressure (P0, derived
// live from wherever the adjuster happens to be) -- physically that's "the
// exact point the stem starts to move," a real, useful thing to land on at
// ANY adjuster setting, not just at the one calibration point. The adjuster
// snaps to CAL_ADJ, the one real fleet-calibration position (85%, 3.0psig).
const CAL_ADJ = -24 + ADJ_CAL_PCT*48;   // 16.8 -- the adj value at the 85% calibration point
const PRESS_SNAP_TOL = 0.15;   // psig
const ADJ_SNAP_TOL = 0.5;      // adj units, out of the -24..24 range
function setPress(v){
  v = Math.min(18, Math.max(0, Math.round(+v*10)/10));
  const crack = preloadForce(ADJ) / DIA_AREA;
  PRESS = Math.abs(v-crack) <= PRESS_SNAP_TOL ? crack : v;
}
// Bug fix (2026-09-28): this used to round to the nearest whole integer on
// every call. The old dial's own drag handler called setAdj(ADJ + d/15)
// incrementally from the CURRENT (already-rounded) ADJ on every pointermove
// -- small drag deltas that didn't cross the 0.5 rounding threshold were
// silently discarded, then motion suddenly jumped a full 15deg unit once
// enough delta had accumulated. That quantization is what read as janky/
// jerky instead of smooth. ADJ is now a continuous float (still clamped to
// -24..24); every consumer (bench-set math, rotation, gauge band, mobile
// slider, keyboard) does plain arithmetic or its own display-side
// .toFixed() rounding, so none of them needed a change for this.
function setAdj(v){
  v = Math.min(24, Math.max(-24, +v));
  ADJ = Math.abs(v-CAL_ADJ) <= ADJ_SNAP_TOL ? CAL_ADJ : v;
}
function bindStepper(id, fn){
  // tap = one step; hold = auto-repeat, like a real button
  const btn = document.getElementById(id);
  let delay=null, repeat=null;
  function go(){ fn(); update(); }
  function start(e){ e.preventDefault(); go();
    delay = setTimeout(()=>{ repeat = setInterval(go, 90); }, 350); }
  function stop(){ clearTimeout(delay); clearInterval(repeat); delay=null; repeat=null; }
  btn.addEventListener('pointerdown', start);
  btn.addEventListener('pointerup', stop);
  btn.addEventListener('pointerleave', stop);
  btn.addEventListener('pointercancel', stop);
}
// desktop bench-set controls are now drag sliders (bindHSlider/bindVRod,
// bound below, once they're declared) -- the button-stepper pattern stays
// for Practice mode's own controls only.
// getFn added 2026-09-29 when this became a two-caller function (adjustor
// slider added alongside pressure's): the keyboard handler used to hardcode
// PRESS directly, which was invisible with only one caller but would have
// silently nudged the WRONG variable (PRESS instead of ADJ) from the new
// adjustor slider's own arrow keys. getFn lets each caller supply its own
// current-value reader instead.
function bindHSlider(hitId, vMin, vMax, step, setFn, getFn){
  const hit = document.getElementById(hitId);
  let dragging=false;
  function move(e){
    if(!dragging) return;
    const rect = hit.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (e.clientX-rect.left)/rect.width));
    setFn(vMin + t*(vMax-vMin));
    update();
  }
  function endDrag(e){ dragging=false; try{ hit.releasePointerCapture(e.pointerId); }catch(err){} }
  hit.addEventListener('pointerdown', e=>{
    // Without this, the browser's own default mousedown handling (focusing
    // a tabindex element, starting a text-selection drag) races with our
    // imperative hit.focus() + setPointerCapture() below -- on a focusable
    // element that race is exactly what makes a slider "stick" after one
    // successful drag: the next pointerdown gets eaten by native handling
    // instead of reaching this listener, until focus/selection gets reset
    // by clicking something else. Mobile's rail sliders never hit this
    // because they aren't focusable (no tabindex), only these are.
    e.preventDefault();
    // dragging set before setPointerCapture, wrapped in try/catch (correction
    // 2026-09-29, same fix already applied to the old dial's own binding):
    // an untrusted/synthetic pointerId with no browser-tracked active
    // pointer throws NotFoundError here, which would otherwise abort this
    // handler before `dragging` gets set.
    dragging=true; hit.focus();
    try{ hit.setPointerCapture(e.pointerId); }catch(err){}
    move(e);
  });
  hit.addEventListener('pointermove', move);
  hit.addEventListener('pointerup', endDrag);
  hit.addEventListener('pointercancel', endDrag);
  hit.addEventListener('lostpointercapture', ()=> dragging=false);
  // keyboard: coarse drag can be imprecise at small step sizes; arrow keys
  // nudge to an exact value without ever hinting what that value should be
  hit.addEventListener('keydown', e=>{
    const big = e.shiftKey ? step*10 : step;
    if(e.key==='ArrowRight' || e.key==='ArrowUp'){ setFn(getFn()+big); update(); e.preventDefault(); }
    else if(e.key==='ArrowLeft' || e.key==='ArrowDown'){ setFn(getFn()-big); update(); e.preventDefault(); }
  });
}
function bindVRod(hitId, vMin, vMax, step, setFn){
  const hit = document.getElementById(hitId);
  let dragging=false;
  function move(e){
    if(!dragging) return;
    const rect = hit.getBoundingClientRect();
    // top of the track = max value (up = tighten), inverted from a plain
    // top-down percentage
    const t = 1 - Math.min(1, Math.max(0, (e.clientY-rect.top)/rect.height));
    setFn(vMin + t*(vMax-vMin));
    update();
  }
  function endDrag(e){ dragging=false; try{ hit.releasePointerCapture(e.pointerId); }catch(err){} }
  hit.addEventListener('pointerdown', e=>{
    e.preventDefault();
    dragging=true; hit.setPointerCapture(e.pointerId); hit.focus(); move(e);
  });
  hit.addEventListener('pointermove', move);
  hit.addEventListener('pointerup', endDrag);
  hit.addEventListener('pointercancel', endDrag);
  hit.addEventListener('lostpointercapture', ()=> dragging=false);
  hit.addEventListener('keydown', e=>{
    const big = e.shiftKey ? step*10 : step;
    if(e.key==='ArrowUp'){ setFn(ADJ+big); update(); e.preventDefault(); }
    else if(e.key==='ArrowDown'){ setFn(ADJ-big); update(); e.preventDefault(); }
  });
}
bindHSlider('pressHit', 0, 18, 0.1, setPress, ()=>PRESS);
// Correction (2026-09-29): the adjustor's own drag-angle-tracking dial
// interaction (previously here) is removed entirely, replaced by this
// linear slider -- same bindHSlider used for pressure, same proven
// interaction, no separate angle math to get subtly wrong. bindVRod is left
// defined above, unused, in case a future linear-drag control needs it
// again; nothing else calls it now that the mobile adjuster uses its own
// separate bindMobileVSlider.
bindHSlider('adjHit2', -24, 24, 0.1, setAdj, ()=>ADJ);
bindStepper('pv-adjMinus', ()=>setAdj(ADJ-1));
bindStepper('pv-adjPlus', ()=>setAdj(ADJ+1));
bindStepper('pv-pressMinus', ()=>setPress(PRESS-0.2));
bindStepper('pv-pressPlus', ()=>setPress(PRESS+0.2));

// ================= Practice mode: step-by-step, gated Next =================
// Bench-set section only (off the valve) -- coupling-to-the-valve steps are a
// separate, not-yet-approved second section (wording still pending review).
const PV_STEPS = [
  { crop:[0,850,1480,600], showAdj:true, showPress:true,
    instr:"First movement is starting too late. Loosen the adjuster, then raise pressure again until it first moves — aim for exactly 3 psig.",
    enter(){ setAdj(12); setPress(0); },
    gate(){ return ADJ===0 && PRESS>0 && lastStroke>0; } },
  { crop:[0,1380,1480,400], showAdj:false, showPress:true,
    instr:"Raise pressure to 11 psig. Confirm the stem reaches full rated travel — the top mark on the scale, 3/4 inch.",
    enter(){ setPress(3); },
    gate(){ return PRESS>=10.8 && lastStroke>=TRAVEL-5; } },
  { crop:[0,1380,1480,400], showAdj:false, showPress:true,
    instr:"Lower pressure back to exactly 3 psig. Confirm the stem returns to zero travel — the scale should read 0.",
    enter(){ setPress(11); },
    gate(){ return Math.abs(PRESS-3)<=0.15 && lastStroke<=5; } },
  { crop:[0,150,1480,1650], showAdj:false, showPress:false,
    instr:"Bench set confirmed: first movement at 3 psig, full stroke at 11, travel 3/4 inch. This actuator is calibrated to a 3–11 bench set.",
    enter(){}, gate(){ return true; } },
];
let pvIdx = 0;
function pvEnter(i){
  pvIdx = i;
  const st = PV_STEPS[i];
  document.getElementById('pv-badge').textContent = `Step ${i+1} of ${PV_STEPS.length}`;
  document.getElementById('pv-instr').textContent = st.instr;
  document.getElementById('asm').setAttribute('viewBox', st.crop.join(' '));
  document.getElementById('pv-ctlAdj').style.display = st.showAdj ? '' : 'none';
  document.getElementById('pv-ctlPress').style.display = st.showPress ? '' : 'none';
  st.enter();
  update();
}
function pvCheckGate(){
  if (!document.body.classList.contains('practicing')) return;
  const ready = PV_STEPS[pvIdx].gate();
  const btn = document.getElementById('pv-next');
  btn.disabled = !ready;
  btn.classList.toggle('ready', ready);
  btn.textContent = ready ? 'Next →' : 'Next';
}
document.getElementById('pv-play').addEventListener('click', ()=>{
  document.body.classList.add('practicing');
  pvEnter(0);
});
document.getElementById('pv-exit').addEventListener('click', ()=>{
  document.body.classList.remove('practicing');
  document.getElementById('asm').setAttribute('viewBox', '0 0 1480 2250');
  setAdj(ADJ_RESET); setPress(0); update();
});
document.getElementById('pv-next').addEventListener('click', ()=>{
  if (document.getElementById('pv-next').disabled) return;
  const next = pvIdx + 1;
  if (next >= PV_STEPS.length) document.getElementById('pv-exit').click();
  else pvEnter(next);
});
function hl(...ids){
  for (const g of document.querySelectorAll('#nameplate g')) g.classList.remove('np-hl');
  ids.forEach(id=>document.getElementById(id).classList.add('np-hl'));
}
function pulse(id){ const el=document.getElementById(id);
  el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); }
function benchReset(){
  document.getElementById('valve').checked=false;
  PB.connected=false; PB.connShown=false; PB.nutsDy=0; PB.scaleDy=0;
  setValve(false); showTravelMark(false); showVerMark(false); setAdj(ADJ_RESET); setPress(0); hl(); focus();
}
// Re-choreographed 2026-09-30, twice in one day: first for the physics
// version (add force/spring-rate/preload numbers), then reverted the same
// day (Franz: "I made a mistake saying to include the physics") back to
// his own plainer dictated script -- corrected against the REAL regenerated
// narration/output/657/timing.json (19 segments). Every entry below is
// indexed 1:1 against the real timing.json text. Everything from "prove it
// on the bench" onward is untouched narration text, unchanged from before,
// just naturally shifted later in this array by the 2 extra segments
// "Principle of Operation" now carries versus the original pre-physics
// baseline (3 paragraphs, but one of them splits into 2 segments -> 4).
const CHOREO = [
 // 0. intro, its own beat (own paragraph -> own segment -> a REAL pause on
 //    both sides, from PAUSE_S). Fully lit the whole time, nothing moves --
 //    this is the pause itself, not a lead-in to rush past. (Franz,
 //    2026-09-30 round 3: a fraction-based cue can only rearrange WHEN
 //    things happen inside one already-spoken segment, it can't invent
 //    real silence -- "the overall animation is exactly the same length...
 //    I need you to have beats." So the beat is now a real paragraph break
 //    with a real audio gap before segment 1 starts, not a held fraction
 //    inside a combined segment.)
 {enter(){ benchReset(); focus(); }},
 // 1. air enters the upper casing, expands the diaphragm, pushes the plate
 //    + stem down -- its own beat, so safe to narrow right at enter() (the
 //    real pause from segment 0 already did the separating work; nothing
 //    here needs to wait on a lead-in). "expands the diaphragm," is done by
 //    0.525 (char ratio) -- 0.6 adds the plate+stem a beat after that,
 //    once "pushing the diaphragm plate and attached stem downward" lands.
 {enter(){ focus('p-upper','p-dia'); },
  cues:[[0.6,()=>focus('p-dia','g-plate','g-stem')]],
  tick(p){ setPress((3*Math.min(1,p*1.1)).toFixed(2)); }},
 // 2. that motion compresses the spring against the seat, supported by the
 //    yoke -- own beat, "spring" is this sentence's own 6th word so showing
 //    it at enter() is in sync, not premature. Round 4 (Franz, 2026-09-30):
 //    the seat must be its OWN introduction, not bundled with the yoke.
 //    Round 5 correction, same day: "when it says the action compress the
 //    spring downward against the spring seat, the spring seat is not
 //    focused. It needs to be focused shortly before it is mentioned" --
 //    this is the same motion-leads-the-words case as segment 4's "pushes
 //    the spring seat upward" (the compression is happening AGAINST the
 //    seat, an action in progress, not a static fact to confirm after the
 //    fact), so the seat cue moved from after "spring seat," (0.65) to
 //    just before the word "seat" starts (0.6) -- 0.5 gives it a shade of
 //    real lead-in. "yoke" is still the sentence's very last word and is
 //    still a static fact at that point, so it keeps its own confirm-after
 //    cue right at the tail (0.97). Also: the spoken "compresses" needs to
 //    actually SHOW compression continuing, not hold the plate static at
 //    segment 1's end position -- tick() keeps pressing the plate down a
 //    little further (3 -> 5psig) through this segment.
 {enter(){ focus('g-plate','g-stem',SPRING); },
  cues:[[0.5,()=>focus('g-plate','g-stem',SPRING,'sp-seat-g')],
        [0.97,()=>focus('g-plate','g-stem',SPRING,'sp-seat-g','p-yoke')]],
  tick(p){ setPress((3+2*Math.min(1,p*1.2)).toFixed(2)); }},
 // -- a real "---" beat marker in the source script sits here now (Franz,
 //    2026-09-30 round 4: "between introducing the yoke, and mentioning
 //    'before connecting the actuator to a valve body,' should be a longer
 //    beat"), giving BEAT_PAUSE_S (1.5s, vs. the normal 0.45s) of real
 //    silence before segment 3 starts -- see generate_narration.py.
 // 3. before connecting to the valve, a technician must tighten the spring
 //    adjuster through the yoke housing. Round 4 correction: resetting to
 //    full-lit here (as a prior round did) was wrong -- "it is not helpful
 //    to jump to showing the entire actuator as focused again. Take the
 //    longer beat, and just dim everything else so that it transitions to
 //    only focusing on the spring adjuster." The long real pause above IS
 //    the transition; focus narrows straight to the adjuster at enter(),
 //    arriving on it quietly during the beat rather than waiting for the
 //    word. The actual turning motion (the ADJ sweep) still waits for
 //    "tighten" to land (0.61 by ratio; 0.7 is just past it) before moving,
 //    from the real loosened rest position (ADJ_RESET, held since
 //    benchReset() back in segment 0) up to the dead-zone boundary (0) --
 //    "starting to turn it," not yet creating compression. The rest of the
 //    tightening motion continues into segment 4, where the narration
 //    describes its effect.
 {enter(){ setPress(0); focus('sp-adj-g'); },
  tick(p){ if(p<0.7){ setAdj(ADJ_RESET); return; }
           const q=(p-0.7)/(1-0.7);
           setAdj(Math.round(ADJ_RESET+(0-ADJ_RESET)*Math.min(1,q*1.1))); }},
 // 4. this pushes the spring seat upward, compressing the spring between
 //    the seat and the diaphragm plate, which rests at its upper travel
 //    stop against the upper diaphragm casing with no air applied -- new
 //    content Franz asked to add (2026-09-30 round 3). Round 4 correction:
 //    the seat shows UP FRONT, right as "this pushes the spring seat
 //    upward" begins (not after) -- "the spring seat should be focused
 //    right before mentioning it, to show the adjuster moving the spring
 //    seat up," since this is a continuous motion the visual should lead
 //    into, not a static reveal to confirm after the fact. From there the
 //    full load path builds progressively as each part is actually named:
 //    "compressing the spring" lands at 0.29 -- 0.38 adds the spring. Round
 //    6 correction (Franz, 2026-09-30): the plate+diaphragm cue was placed
 //    after the whole "diaphragm plate" clause finished (0.6) and read as
 //    late -- "it should focus exactly when saying diaphragm there." The
 //    word "diaphragm" itself starts at 0.421 by ratio, so the cue moved
 //    there, landing exactly on the word instead of trailing the full
 //    clause (Franz: "the adjuster, seat, spring, plate, diaphragm, and
 //    upper casing should be in focus" -- six parts, not the plate alone).
 //    The final clause names the upper travel stop against the upper
 //    casing -- 0.92 adds p-upper, completing all six. Finishes the
 //    adjuster sweep from segment 3's dead-zone boundary up to CAL_ADJ
 //    across this whole segment, now actually compressing the spring in
 //    sync with the seat visibly rising.
 {enter(){ focus('sp-adj-g','sp-seat-g'); },
  cues:[[0.38,()=>focus('sp-adj-g','sp-seat-g',SPRING)],
        [0.421,()=>focus('sp-adj-g','sp-seat-g',SPRING,'g-plate','p-dia')],
        [0.92,()=>focus('sp-adj-g','sp-seat-g',SPRING,'g-plate','p-dia','p-upper')]],
  tick(p){ setAdj(Math.round(0+(CAL_ADJ-0)*Math.min(1,p*1.05))); }},
 // 5. that determines the pressure at which the stem begins to move --
 //    bench set. Carries the full six-part load path over from segment 4
 //    (no new jump), holds it, and confirms the nameplate once "bench set"
 //    is actually said -- the words land at 0.915 by ratio, so the cue is
 //    at 0.93, just after.
 {enter(){ focus('sp-adj-g','sp-seat-g',SPRING,'g-plate','p-dia','p-upper'); },
  cues:[[0.93,()=>hl('np-benchset')]]},
 // 6. tightening raises the seat and compresses the spring upwards before
 //    any air is applied; loosening backs it off -- unchanged text
 {enter(){ setPress(0); focus('sp-adj-g','sp-seat-g',SPRING); },
  tick(p){ let a; if(p<0.3) a=20*(p/0.3); else if(p<0.5) a=20;
           else if(p<0.8) a=20-44*((p-0.5)/0.3); else a=-24;
           setAdj(Math.round(a)); }},
 // 7. bench set defined; nameplate cited -- unchanged text
 {enter(){ setAdj(0); setPress(0); focus(); },
  cues:[[0.1,()=>hl('np-benchset')],[0.35,()=>hl('np-benchset','np-travel')],
        [0.62,()=>hl('np-benchset','np-travel','np-size')],[0.9,()=>hl()]]},
 // 8. prove it on the bench: off valve, stem at top, air rigged
 {enter(){ hl(); focus(); pulse('g-stem'); },
  cues:[[0.6,()=>pulse('pressrow')]]},
 // 9. raise from zero, first movement at exactly 3
 {enter(){ focus('g-stem'); }, tick(p){ setPress((3.4*p).toFixed(2)); }},
 // 10. too tight / too loose diagnosis
 {enter(){ seg8sw=false; setAdj(12); setPress(0); focus('sp-adj-g','sp-seat-g','g-stem'); },
  tick(p){ if(p<0.45){ setPress((6*p/0.45).toFixed(2)); }
           else if(p<0.5){ setPress(0); }
           else { if(!seg8sw){ setAdj(-12); seg8sw=true; }
                  setPress((4*(p-0.5)/0.5).toFixed(2)); } }},
 // 11. to exactly 11; over-stroke caution to the casing; mark stem end at 11
 {enter(){ setAdj(0); setPress(3); focus(); },
  cues:[[0.42,()=>focus('g-plate','p-lower')],[0.72,()=>focus()],
        [0.84,()=>{ showVerMark(true); pulse('g-vermark'); }]],
  tick(p){ let v; if(p<0.28) v=3+8*(p/0.28); else if(p<0.4) v=11;
           else if(p<0.58) v=11+7*((p-0.4)/0.18);
           else if(p<0.74) v=18-7*((p-0.58)/0.16); else v=11;
           setPress(v.toFixed(2)); }},
 // 12. lower to 3, measure mark-to-stem-end = 3/4
 {cues:[[0.42,()=>{ showVerBracket(true); }],[0.6,()=>focus('g-stem','g-scale')]],
  tick(p){ if(p<0.4) setPress((11-8*(p/0.4)).toFixed(2)); }},
 // 13. matches -> complete
 {enter(){ setPress(3); focus(); },
  cues:[[0.25,()=>hl('np-travel')],[0.8,()=>hl()]]},
 // 14. now the valve enters the picture
 {enter(){ hl(); showVerMark(false); PB.connected=false; PB.connShown=false;
           PB.nutsDy=34; setPress(0); setValve(true); showTravelMark(false);
           focus('g-vgrp','g-valve-sil','g-mount','g-mount-back'); }},
 // 15. push the valve stem down to the seat
 {enter(){ focus('g-vgrp'); pulse('g-vgrp'); }},
 // 16. mark the valve stem 3/4 below the actuator stem end
 {enter(){ focus(); showTravelMark(true); pulse('g-travelmark'); }},
 // 17. actuate down to the mark
 {tick(p){ setPress(Math.min(11,11.4*p).toFixed(2)); }},
 // 18. clamp the connector halves, tighten evenly
 {enter(){ PB.connShown=true; setValve(true); focus('g-conn','g-stem','g-vgrp'); pulse('g-conn'); },
  cues:[[0.6,()=>{ PB.connected=true; document.getElementById('valve').checked=true;
                   showTravelMark(false); }]]},
 // 19. run the locknuts up to the disk
 {enter(){ focus('g-vgrp','g-conn'); }, tick(p){ PB.nutsDy=34*(1-p); }},
 // 20. stroke open to closed, verify, align scale
 {enter(){ focus(); },
  cues:[[0.35,()=>focus('g-scale','g-vgrp','g-stem')],[0.85,()=>focus()]],
  tick(p){ if(p<0.3){ setPress((11*(1-p/0.3)).toFixed(2)); PB.scaleDy=0; }
           else if(p<0.5){ setPress(0); PB.scaleDy=36*((p-0.3)/0.2); }
           else { PB.scaleDy=36; setPress((Math.min(12,12*(p-0.5)/0.5)).toFixed(2)); } }},
];
function pbFrame(){
  if(!playing) return;
  const t = audio.currentTime;
  // Round 12: section-bounded playback (the topic list) stops here instead
  // of running into whatever comes next -- each topic reads as its own
  // self-contained item, not a scrub position within one long recording.
  // playEndTime stays null for mobile's single button, which still plays
  // straight through like it always has.
  if(playEndTime !== null && t >= playEndTime){ pbStop(); return; }
  let i = TIMING.length-1;
  while(i>0 && TIMING[i].start > t) i--;
  if(i !== curSeg){ curSeg=i; capEl.textContent = TIMING[i].text;
    firedCues = []; if(CHOREO[i] && CHOREO[i].enter) CHOREO[i].enter(); }
  const p = Math.min(1, (t-TIMING[i].start)/TIMING[i].duration);
  if(CHOREO[i] && CHOREO[i].cues){
    CHOREO[i].cues.forEach((c,ci)=>{ if(p>=c[0] && !firedCues.includes(ci)){
      firedCues.push(ci); c[1](); } }); }
  if(CHOREO[i] && CHOREO[i].tick) CHOREO[i].tick(p);
  update();
  requestAnimationFrame(pbFrame);
}
function pbStop(){
  playing=false; audio.pause();
  activeSection = -1; playEndTime = null;
  document.getElementById('pb-play').classList.remove('playing');
  document.getElementById('pb-play').innerHTML='&#9654; Play the SOP';
  document.getElementById('pb-status').textContent='';
  capEl.textContent='';
  updateTopicButtons();
  setPress(0); focus(); hl(); update();
}
function updateTopicButtons(){
  document.querySelectorAll('.sop-topic').forEach(btn=>{
    const isActive = playing && +btn.dataset.section === activeSection;
    btn.classList.toggle('playing', isActive);
    btn.querySelector('.label').textContent = isActive ? 'Stop' : btn.dataset.label;
  });
  // Stage 1 (2026-09-28): the collapsed rail strip's numbered circles are a
  // separate, simpler set of elements (no room for a "Stop" text swap) --
  // painted alongside the row list above, from the same playing/
  // activeSection state, rather than folded into the .sop-topic loop.
  document.querySelectorAll('.num-btn').forEach(btn=>{
    const isActive = playing && +btn.dataset.section === activeSection;
    btn.classList.toggle('playing', isActive);
  });
  // Correction (2026-09-28): the "Play all lessons" row gets its own
  // playing-state toggle, separate from the per-lesson rows above (it uses
  // activeSection===-2, which never matches a real section index).
  document.getElementById('playAllRow').classList.toggle('playing', playing && activeSection === -2);
}
// Mobile's own single button: plays straight through start to finish,
// exactly as it always has (playEndTime stays null).
document.getElementById('pb-play').addEventListener('click', ()=>{
  if(playing){ pbStop(); return; }
  playing=true; curSeg=-1; activeSection=-1; playEndTime=null;
  audio.currentTime=0;
  audio.play().then(()=>{
    document.getElementById('pb-play').classList.add('playing');
    document.getElementById('pb-play').innerHTML='&#9632; Stop';
    requestAnimationFrame(pbFrame);
  }).catch(e=>{ playing=false;
    document.getElementById('pb-status').textContent=' audio failed to load';});
});
// Desktop's table of contents: each topic plays just its own section, from
// a clean reset (benchReset), and stops at that section's own end rather
// than continuing into the next topic -- clicking the currently-playing
// topic again stops it, matching a normal play/stop toggle.
function playSection(idx){
  if(playing && activeSection === idx){ pbStop(); return; }
  const sec = SECTIONS[idx];
  benchReset();
  playing=true; curSeg=-1; activeSection=idx;
  playEndTime = TIMING[sec.endIdx].start + TIMING[sec.endIdx].duration;
  audio.currentTime = TIMING[sec.startIdx].start;
  updateTopicButtons();
  audio.play().then(()=>{
    requestAnimationFrame(pbFrame);
  }).catch(e=>{ playing=false; activeSection=-1;
    updateTopicButtons();
    document.getElementById('pb-status').textContent=' audio failed to load'; });
}
// Correction (2026-09-28): "Play all lessons" row (approved template,
// final-panel-open.png) -- plays straight through all 4 SECTIONS in order
// from a clean reset, same toggle-to-stop convention as playSection(). Uses
// activeSection=-2 (distinct from -1='none' and any real 0..3 index) so no
// individual lesson row/dot lights up while all of them are playing.
function playAllSections(){
  if(playing && activeSection === -2){ pbStop(); return; }
  benchReset();
  playing=true; curSeg=-1; activeSection=-2;
  const last = SECTIONS[SECTIONS.length-1];
  playEndTime = TIMING[last.endIdx].start + TIMING[last.endIdx].duration;
  audio.currentTime = TIMING[SECTIONS[0].startIdx].start;
  updateTopicButtons();
  audio.play().then(()=>{
    requestAnimationFrame(pbFrame);
  }).catch(e=>{ playing=false; activeSection=-1;
    updateTopicButtons();
    document.getElementById('pb-status').textContent=' audio failed to load'; });
}
document.getElementById('playAllRow').addEventListener('click', playAllSections);
// Franz's final wording for the 3 topics (2026-09-27, round 12 follow-up) --
// more procedural than TIMING's own descriptive `section` titles ("How the
// Actuator Works" etc.), which still drive the actual start/end boundaries
// above; this only overrides what's displayed. Falls back to the derived
// name if TIMING ever has more sections than labels given here.
// Correction (2026-09-28): per-lesson and total durations, matching the
// approved template's "0:17" / "1:01" style (MM:SS from real TIMING data,
// not invented placeholder numbers).
function sectionDuration(sec){
  return TIMING[sec.endIdx].start + TIMING[sec.endIdx].duration - TIMING[sec.startIdx].start;
}
function fmtDur(sec){
  sec = Math.round(sec);
  return Math.floor(sec/60) + ':' + String(sec%60).padStart(2,'0');
}
(function buildTopicList(){
  // Stage 1 (2026-09-28): builds BOTH the index rail's opened panel (a real
  // list, identical markup/behavior to the old #sopTopicList) and its
  // collapsed strip (numbered circles) from the same SECTIONS loop -- one
  // source of content, two renderings of it.
  const list = document.getElementById('railList');
  const nums = document.getElementById('railNums');
  let total = 0;
  SECTIONS.forEach((sec,idx)=>{
    const dur = sectionDuration(sec);
    total += dur;
    const btn = document.createElement('button');
    btn.className = 'sop-topic';
    btn.type = 'button';
    btn.dataset.section = idx;
    btn.dataset.label = sec.name;
    btn.innerHTML = `<span class="num">${idx+1}</span><span class="label">${sec.name}</span>` +
      `<span class="dur">${fmtDur(dur)}</span>`;
    btn.addEventListener('click', ()=>playSection(idx));
    const li = document.createElement('li');
    li.appendChild(btn);
    list.appendChild(li);

    const dot = document.createElement('button');
    dot.className = 'num-btn';
    dot.type = 'button';
    dot.dataset.section = idx;
    dot.title = sec.name;
    dot.setAttribute('aria-label', `Play lesson ${idx+1}: ${sec.name}`);
    dot.innerHTML = `<span>${idx+1}</span>`;
    dot.addEventListener('click', ()=>playSection(idx));
    nums.appendChild(dot);
  });
  document.getElementById('playAllDur').textContent = fmtDur(total);
})();
audio.addEventListener('ended', pbStop);
// test hook: ?pbtest=N applies segments 1..N without audio
const q=new URLSearchParams(location.search);
if(q.get('pbtest')){
  // deferred so it runs AFTER the page's own startup setValve/update calls
  setTimeout(()=>{
    const n=+q.get('pbtest');
    for(let i=0;i<n && i<CHOREO.length;i++){
      if(CHOREO[i].enter) CHOREO[i].enter();
      if(CHOREO[i].cues) CHOREO[i].cues.forEach(c=>c[1]());
      if(CHOREO[i].tick) CHOREO[i].tick(1);
    }
    capEl.textContent = TIMING[n-1] ? TIMING[n-1].text : '';
    update();
  }, 60);
}
if(q.get('adj')) setAdj(q.get('adj'));
if(q.get('press')) setPress(q.get('press'));
if(q.get('valve'))document.getElementById('valve').checked=true;
if(q.get('mark'))window.showTravelMark(true);
document.getElementById('valve').addEventListener('change',()=>{
  PB.connected = document.getElementById('valve').checked;
  PB.connShown = true; PB.nutsDy = 0;
  setValve(document.getElementById('valve').checked);update();});
setValve(document.getElementById('valve').checked);
update();
// update() reads the desktop sliders' live clientWidth/clientHeight to place
// their thumbs; on the very first call the browser may not have finished
// laying out the just-inserted DOM yet, so those can read stale/zero. Same
// safety net already used for the mobile rails (ResizeObserver there covers
// .fig; window resize covers the .panel-side desktop controls here).
requestAnimationFrame(update);
window.addEventListener('resize', update);
// light/dark toggle: explicit choice wins over OS preference, persisted per viewer
(function(){
  const btn = document.getElementById('theme-toggle');
  const glyph = document.getElementById('theme-glyph');
  const label = document.querySelector('#theme-toggle .theme-label');
  function isDark(){
    const explicit = document.documentElement.getAttribute('data-theme');
    if(explicit) return explicit === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  // Correction (2026-09-28): label text names the ACTION the button will
  // perform (what clicking switches TO), matching the approved template's
  // own paintTheme() convention -- e.g. currently light -> button offers
  // "Dark mode". Glyph keeps its existing sun/moon convention, now a
  // separate child instead of the whole button's textContent.
  function paint(){
    glyph.textContent = isDark() ? '☀' : '☽';
    label.textContent = isDark() ? 'Light mode' : 'Dark mode';
  }
  btn.addEventListener('click', ()=>{
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try{ localStorage.setItem('657-theme', next); }catch(e){}
    paint();
  });
  paint();
})();
</script>
"""
html = html.replace("__PARTSJS__", parts_js)
html = html.replace("__TIMINGJSON__", timing_js)
open("../657-refined.html", "w", encoding="utf-8").write(html)
print("written", len(html))
