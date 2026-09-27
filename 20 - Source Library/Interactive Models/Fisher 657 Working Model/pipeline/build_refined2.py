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

html = """<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Fisher 657 Working Model</title>
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
p,label{font-size:13.5px;line-height:1.55;color:var(--sub);}
.readout{font-family:ui-monospace,monospace;font-size:13px;color:var(--accent);}
.cast{stroke:var(--c-cast-line);stroke-width:2.5;stroke-linejoin:round;fill-rule:evenodd;}
#p-upper{fill:var(--c-upper);}
#p-lower{fill:var(--c-lower);}
#p-yoke{fill:var(--c-yoke);}
#p-plate{fill:var(--c-plate);}
.sp-stem{fill:var(--c-stem);stroke:var(--c-cast-line);stroke-width:2;}
.sp-seat{fill:var(--c-seat);stroke:var(--c-cast-line);stroke-width:2;}
.sp-adj{fill:var(--c-adj);stroke:var(--c-cast-line);stroke-width:2;}
.sp-coil{stroke:var(--c-coil);stroke-linecap:round;fill:none;}
.sp-coil-back{stroke:var(--c-coil-back);}
.sp-thread{stroke:var(--c-thread);stroke-width:2.4;}
.dia{stroke:var(--c-dia);stroke-width:12.0;fill:none;stroke-linecap:round;stroke-linejoin:round;}
.prism{fill:var(--c-adj);stroke:var(--c-cast-line);stroke-width:2;}
.tick{stroke:var(--c-cast-line);stroke-width:2;}
.lbl{font-family:system-ui;font-size:15px;fill:var(--c-cast-line);}
.np-wrap{margin:14px 0;}
.np-wrap svg{width:100%;max-width:460px;display:block;}
.np-title{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:25px;fill:#fff;}
.np-logo{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:16px;fill:#0a0a0a;text-anchor:middle;letter-spacing:0.5px;}
.np-lbl{font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-size:19px;fill:#fff;text-anchor:end;}
.np-box{fill:#fff;}
.np-val{font-family:Arial,Helvetica,sans-serif;font-size:18px;fill:#0a0a0a;text-anchor:middle;}
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
#ctrlbar .ctl label{display:block;font-size:13.5px;color:var(--sub);}
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
body.practicing .panel > p,
body.practicing .np-wrap{display:none;}
body.practicing #practiceView{display:flex;flex-direction:column;gap:10px;}
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
/* ===== Desktop-only gauge + hex-slider controls (approved 2026-09-27):
   the diaphragm-pressure stepper is replaced by a real analog gauge (pure
   display, driven by a horizontal slider) and the spring-adjuster stepper
   by a vertical slider whose thumb is a top-down hex nut that genuinely
   rotates as it travels -- the one view where a hex's rotation is honest,
   not faked perspective. No numeric readout on the adjuster: a real
   distance/turns figure isn't verified against an actual thread pitch, so
   it stays qualitative (TIGHTEN/LOOSEN + a center reference tick only).
   Desktop only -- mobile keeps its own separate rail sliders untouched;
   these controls live inside .ctl, which the mobile media query already
   hides in full. ===== */
.instrument{display:flex;flex-direction:column;align-items:center;gap:10px;}
.gaugeface{fill:var(--panel);stroke:var(--border);stroke-width:2;}
.gaugearc{fill:none;stroke:var(--border);stroke-width:10;stroke-linecap:round;}
.gaugeband{fill:none;stroke:var(--good);stroke-width:10;stroke-linecap:butt;opacity:0.65;}
.gaugetick{stroke:var(--c-cast-line);stroke-width:2;opacity:0.55;}
.gaugetickmaj{stroke:var(--c-cast-line);stroke-width:2.5;}
.gaugenum{font-family:system-ui;font-size:11px;fill:var(--sub);text-anchor:middle;}
.needle{stroke:var(--accent);stroke-width:3;stroke-linecap:round;transition:stroke 0.2s ease;}
.needle.inwin{stroke:var(--good);}
.needlehub{fill:var(--panel);stroke:var(--accent);stroke-width:3;transition:stroke 0.2s ease;}
.needlehub.inwin{stroke:var(--good);}
#ctrlbar .digitalreadout{font-size:20px;font-weight:700;}
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
.hthumb{position:absolute;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;
  border-radius:50%;background:var(--panel);border:4px solid var(--accent);
  box-shadow:0 2px 5px rgba(20,40,70,0.3);}
.endlbl{font-size:11px;font-weight:600;color:var(--sub);}
.endrow{display:flex;justify-content:space-between;width:100%;}
.vrod{display:flex;flex-direction:column;align-items:center;gap:8px;}
.vrodtrackwrap{position:relative;width:60px;height:200px;display:flex;justify-content:center;
  touch-action:none;cursor:grab;margin:0 auto;}
.vrodtrackwrap:active{cursor:grabbing;}
.vrodtrackwrap:focus{outline:none;}
.vrodtrackwrap:focus-visible .vrodtrack{box-shadow:inset 0 1px 3px var(--track-shadow), 0 0 0 3px var(--accent);}
.vrodtrack{position:relative;width:12px;height:100%;border-radius:6px;background:var(--track);
  box-shadow:inset 0 1px 3px var(--track-shadow);}
.vrodfill{position:absolute;left:0;right:0;background:var(--c-yoke);border-radius:6px;}
.vrodcenter{position:absolute;top:50%;left:-9px;right:-9px;height:2px;background:var(--c-cast-line);
  opacity:0.4;pointer-events:none;}
.hexthumb{position:absolute;left:50%;width:34px;height:34px;margin-left:-17px;margin-top:-17px;
  pointer-events:none;}
.hexthumb polygon{fill:var(--c-yoke);stroke:var(--c-cast-line);stroke-width:2.5;}
.hexthumb .hexmark{fill:var(--c-cast-line);opacity:0.55;}
.vendlbl{font-size:11px;font-weight:600;color:var(--sub);}
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
  box-shadow:0 2px 5px rgba(20,40,70,0.3);}
.mlabel{flex:0 0 14px;font-size:10.5px;font-weight:600;color:var(--sub);text-align:center;
  line-height:14px;letter-spacing:0.3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
#mobileLegend{position:absolute;display:flex;flex-direction:column;justify-content:center;
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
     the rails; the nameplate/packing/valve controls stay reachable by
     scrolling below the fig, not removed. */
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
<div class="pagehead">
<h1>Fisher 657 Working Model</h1>
<button id="theme-toggle" title="Toggle light/dark mode" aria-label="Toggle light/dark mode">&#9680;</button>
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
    <!-- parametric adjuster: threaded rod + wrench flats; dims measured
         from the painted mask (rod w118 y1068-1338, flats w140 y1338-1386) -->
    <rect class="sp-adj" x="683.5" y="1068" width="118" height="270" rx="3"/>
    <rect class="sp-adj" x="672.5" y="1338" width="140" height="48" rx="4"/>
    <clipPath id="adjclip"><rect x="683.5" y="1068" width="118" height="270" rx="3"/></clipPath>
    <g id="sp-adj-threads" clip-path="url(#adjclip)"></g>
  </g>
  <g id="sp-seat-g">
    <!-- parametric seat: locating boss inside the coil, flange the spring
         rests on, hub seated on the adjuster (boss w156, flange w314, hub w166) -->
    <rect class="sp-seat" x="664.5" y="972" width="156" height="40" rx="3"/>
    <rect class="sp-seat" x="585.5" y="1008" width="314" height="29" rx="3"/>
    <rect class="sp-seat" x="659.5" y="1037" width="166" height="49" rx="3"/>
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
</svg>
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
  <button id="pb-play" title="Play the SOP">&#9654;<span class="pb-word"> Play the SOP</span></button>
  <button id="pv-play" title="Practice the SOP">Practice the SOP</button>
  <div class="ctl">
    <label>Spring adjuster <span class="ctl-hint">&mdash; tighten (+) raises seat and preload; loosen (&minus;) lowers</span></label>
    <div class="vrod">
      <span class="vendlbl">TIGHTEN</span>
      <div class="vrodtrackwrap" id="adjHit" tabindex="0" role="slider" aria-label="Spring adjuster"
           aria-valuemin="-24" aria-valuemax="24">
        <div class="vrodtrack"><div class="vrodfill" id="adjFill"></div></div>
        <div class="vrodcenter"></div>
        <!-- top-down hex: the one view where rotation is genuinely correct,
             not faked perspective. The off-center dot (not a diametric line,
             which would read as a dial/clock-hand indicator) is what makes
             the rotation visible at all -- a plain hexagon is 6-fold
             symmetric and looks identical every 60 degrees. -->
        <div class="hexthumb" id="adjThumb">
          <svg viewBox="0 0 34 34">
            <polygon id="adjHexPoly" points=""/>
            <circle class="hexmark" cx="17" cy="8" r="2.4"/>
          </svg>
        </div>
      </div>
      <span class="vendlbl">LOOSEN</span>
    </div>
    <!-- no numeric readout here by design (no verified real thread pitch to
         report a distance/turns figure honestly) -- textContent is still
         kept current for Practice mode / mobile, which do show a number. -->
    <span class="readout" id="adjout" style="display:none"></span>
  </div>
  <div class="ctl" id="pressrow">
    <label>Diaphragm pressure <span class="ctl-hint">&mdash; 0 &rarr; 18 psig</span></label>
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
    </div>
  </div>
  <div id="npLegend" class="legend">SIZE 30 &middot; BENCH SET 3&ndash;11 PSI &middot; TRAVEL 3/4 IN &middot; RANGE 0&ndash;18 PSI</div>
  <div id="statusline"></div>
  <span class="readout" id="pb-status"></span>
  <audio id="pb-audio" src="657-narration.wav" preload="auto"></audio>
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
<p><label><input type="checkbox" id="valve"> Stem connector installed &mdash; valve coupled below the yoke</label><br>
<label style="margin-left:22px;">Packing:
<select id="packing">
  <!-- friction ordering per Control Valve Handbook 6th ed. 5.18 packing
       selection guidelines (very low / low / medium / high); psi values
       representative, see Fisher Catalog 14 for actual friction data -->
  <option value="0.5">Single PTFE V-ring &mdash; very low (&plusmn;0.5 psi, repr.)</option>
  <option value="0.75">ENVIRO-SEAL PTFE &mdash; low (&plusmn;0.75 psi, repr.)</option>
  <option value="1.0">ENVIRO-SEAL Graphite ULF &mdash; medium (&plusmn;1.0 psi, repr.)</option>
  <option value="1.5">Graphite composite &mdash; high (&plusmn;1.5 psi, repr.)</option>
</select></label>
<span class="readout" id="fricout"></span></p>
<div class="np-wrap">
<svg id="nameplate" viewBox="0 0 842 286" role="img" aria-label="657 actuator nameplate">
  <!-- layout measured box-for-box from the supplied nameplate image -->
  <rect x="12" y="13" width="817" height="260" rx="12" fill="#0a0a0a" stroke="#3a4654" stroke-width="2"/>
  <rect x="30" y="31" width="45" height="16" rx="8" fill="#fff"/>
  <rect x="770" y="31" width="42" height="16" rx="8" fill="#fff"/>
  <rect x="31" y="246" width="45" height="16" rx="8" fill="#fff"/>
  <rect x="772" y="246" width="42" height="16" rx="8" fill="#fff"/>
  <text class="np-title" x="92" y="63">ACTUATOR</text>
  <rect x="261" y="32" width="94" height="33" rx="14" fill="#fff"/>
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
<div id="cap"></div>
</div>
<p>Spring Verification, live: with the adjuster correct (0 offset), travel begins at exactly 3.0 psig and completes at 11.0. Tighten the adjuster and travel starts late (more than 3); loosen it and travel starts early (less than 3). The stem's bottom edge reads the scale: 0 at rest, 3/4 at rated stroke. Off the valve, pressure past the window keeps the mechanism moving beyond 3/4 in until the diaphragm plate lands on the lower casing &mdash; the lower travel stop.</p>
</div>
</div>
<script>
const R = window.REFINED2;
document.getElementById('p-upper').setAttribute('d', R['upper-diaphragm-casing']);
document.getElementById('p-lower').setAttribute('d', R['lower-diaphragm-casing']);
document.getElementById('p-yoke').setAttribute('d', R['yoke']);
document.getElementById('p-plate').setAttribute('d', R['diaphragm-plate']);

const CXA=742.5, HALFW=146, WIRE=56, NHALF=13, TOP0=197.5, SEAT0=1008;
const STEM_BOT=1525, TRAVEL=140;  // grads = 3/5 of the 234 plate, centered
const STOP=217;  // measured plate-to-lower-casing gap: the lower travel stop
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
  s += `<path d="M ${x+42},${y+130} L ${x+35},${y+155} L ${x+49},${y+155} Z" fill="var(--c-cast-line)"/>`;
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
  // guessed fraction -- while the connecting end stays at the true edge
  front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA}" y1="${topY+WIRE/2}" x2="${CXA+HALFW}" y2="${topY+WIRE/2}"/>`;
  for(let i=0;i<n;i++){
    const y0=topY+WIRE/2+i*pitch, y1=y0+pitch;
    if(i%2===0) back+=`<line class="sp-coil sp-coil-back" stroke-width="${WIRE*0.92}" x1="${CXA+HALFW}" y1="${y0}" x2="${CXA-HALFW}" y2="${y1}"/>`;
    else front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA-HALFW}" y1="${y0}" x2="${CXA+HALFW}" y2="${y1}"/>`;
  }
  const ye=topY+WIRE/2+n*pitch;
  front+=`<line class="sp-coil" stroke-width="${WIRE}" x1="${CXA-HALFW}" y1="${ye}" x2="${CXA}" y2="${ye}"/>`;
  backG.innerHTML=back; frontG.innerHTML=front;
}
function adjThreads(offset){
  // threads shown ON the adjuster face across its full threaded extent
  // (top of the adjuster down to the wrench flats), clipped to its exact
  // painted outline; the pattern scrolls as the adjuster turns.
  let s=''; const pitch=13, TOP=1068, BOT=1338;
  for(let y=TOP-pitch+((offset%pitch)+pitch)%pitch; y<BOT; y+=pitch){
    if(y<TOP-6) continue;
    s+=`<line class="sp-thread" x1="685" y1="${y+3}" x2="800" y2="${y-3}"/>`;
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
// top-down hex thumb: the one view where a hex genuinely rotates with no
// ambiguity or faked perspective -- looking straight down the nut's axis.
(function(){
  const cx=17, cy=17, hr=15;
  let pts=[];
  for(let i=0;i<6;i++) pts.push(polarPt(cx,cy,hr,-90+i*60).map(n=>n.toFixed(1)).join(','));
  document.getElementById('adjHexPoly').setAttribute('points', pts.join(' '));
})();
function updateDesktopGauge(adj, P, P0, inWindow){
  const pTrack = document.querySelector('#pressHit .htrack');
  if (!pTrack) return;   // desktop controls not in DOM state yet
  const [nx,ny] = polarPt(GCX,GCY,GR2-18, valueToAngle(P,0,18));
  const needle = document.getElementById('gaugeNeedle');
  needle.setAttribute('x2', nx.toFixed(1)); needle.setAttribute('y2', ny.toFixed(1));
  needle.classList.toggle('inwin', inWindow);
  document.getElementById('gaugeHub').classList.toggle('inwin', inWindow);
  const bandLo = Math.max(0,P0), bandHi = Math.min(18,P0+8);
  document.getElementById('gaugeBand').setAttribute('d',
    bandHi>bandLo ? describeArc(GCX,GCY,GR2, valueToAngle(bandLo,0,18), valueToAngle(bandHi,0,18)) : '');

  const wP = pTrack.clientWidth;
  const xP = pct(P,0,18)*wP;
  document.getElementById('pressThumb').style.left = xP+'px';
  document.getElementById('fillPress').style.width = xP+'px';
  const xLo = pct(bandLo,0,18)*wP, xHi = pct(bandHi,0,18)*wP;
  const pBand = document.getElementById('bandPress');
  pBand.style.left = xLo+'px'; pBand.style.width = Math.max(0,xHi-xLo)+'px';

  // vertical: up = tighten (max), matching the real part's own motion and
  // the mobile slider's existing convention. Inset by the hex thumb's own
  // radius so it never overruns the track into the TIGHTEN/LOOSEN labels
  // (same fix as the mobile rail thumbs, applied to this thumb's own size).
  const ADJ_THUMB_R = 17;
  const aTrack = document.querySelector('#adjHit .vrodtrack');
  const hA = aTrack.clientHeight;
  const yA = ADJ_THUMB_R + (1-pct(adj,-24,24)) * Math.max(0, hA - 2*ADJ_THUMB_R);
  const yC = hA/2;
  document.getElementById('adjThumb').style.top = yA+'px';
  const aFill = document.getElementById('adjFill');
  aFill.style.top = Math.min(yA,yC)+'px'; aFill.style.height = Math.abs(yA-yC)+'px';
  // Rotation tied directly to adj, never to pixel position (yA runs opposite
  // to adj -- up=tighten=smaller y -- so deriving rotation from yA silently
  // flips the direction). Positive adj (tighten) gives positive (clockwise)
  // rotation, matching righty-tighty. One full turn across the whole range.
  const ROT_RANGE = 360;
  document.getElementById('adjThumb').style.transform =
    `rotate(${(adj/24*ROT_RANGE).toFixed(1)}deg)`;
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
function setPacking(){
  // ENVIRO-SEAL systems are live-loaded: Belleville stack appears and the
  // flange rides up on it; plain PTFE / graphite flange bears on the follower
  const v = document.getElementById('packing').value;
  const live = (v === '0.75' || v === '1.0');
  document.getElementById('g-belleville').style.display = live ? '' : 'none';
  document.getElementById('g-pflange').setAttribute('transform', live ? 'translate(0,-42)' : '');
}
const PB = { connected: true, nutsDy: 0, scaleDy: 0, connShown: true };
function setValve(on){
  document.getElementById('g-valve-sil').style.display = on ? '' : 'none';
  document.getElementById('g-mount').style.display = on ? '' : 'none';
  document.getElementById('g-mount-back').style.display = on ? '' : 'none';
  document.getElementById('g-vgrp').style.display = on ? '' : 'none';
  document.getElementById('g-conn').style.display = (on && PB.connShown) ? '' : 'none';
  document.getElementById('asm').setAttribute('viewBox', on ? '0 0 1480 2620' : '0 0 1480 2250');
  // the viewBox change rescales the SVG's fit, so the mobile rails' real
  // on-screen position (computed from that scale) goes stale unless
  // recomputed right away.
  if (typeof layoutRail === 'function') layoutRail();
}
let strokeState = 0;   // remembered position: packing friction is hysteretic
let ADJ = 0, PRESS = 0;   // stepper-button state: no native range input backs these any more
let lastStroke = 0;   // exposed for Practice-mode step gates (read-only outside update())
function update(){
  const adj=ADJ;   // seat offset, px (+ = tighter)
  const P=PRESS;   // psig, 0-18
  const coupled = PB.connected && document.getElementById('valve').checked;
  // packing friction opposes motion BOTH ways, so it widens the start point
  // going down and holds the stem going back up. Zero when off the valve --
  // which is exactly why bench set is performed with zero valve forces.
  const Ff = coupled ? +document.getElementById('packing').value : 0;
  // bench-set physics: preload shifts the travel window. 8 px of seat = 1 psi.
  const P0 = 3 + adj/8;                              // cracking pressure
  // off the valve there is no load to stop over-stroke at rated travel:
  // motion continues past 3/4 in until the plate lands on the lower casing.
  // coupled, the plug seats at rated travel: 3/4 in IS the down-stop.
  // Only off the valve can the mechanism over-stroke to the casing (STOP).
  const LIM = coupled ? TRAVEL : STOP;
  const dn = Math.min(Math.max(0, (P-P0-Ff)/8) * TRAVEL, LIM); // enough force to move down
  const up = Math.min(Math.max(0, (P-P0+Ff)/8) * TRAVEL, LIM); // little enough to move up
  if (strokeState > LIM) strokeState = LIM;
  if (strokeState < dn) strokeState = dn;
  else if (strokeState > up) strokeState = up;
  // "held" = friction is actually displacing the stem from its
  // frictionless position, not merely present
  const frictionless = Math.min(Math.max(0, (P-P0)/8) * TRAVEL, LIM);
  const held = Ff > 0 && Math.abs(strokeState - frictionless) > 0.5;
  const stroke = strokeState;
  lastStroke = stroke;
  const onStop = !coupled && stroke >= STOP;
  const seated = coupled && stroke >= TRAVEL;
  document.getElementById('fricout').textContent = coupled
    ? ` friction: first movement now at ${(P0+Ff).toFixed(1)} psig${held ? ' | stem HELD by packing friction' : ''}`
    : '';
  spring(TOP0+stroke, SEAT0-adj);
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
  document.getElementById('sp-seat-g').setAttribute('transform',`translate(0,${-adj})`);
  document.getElementById('sp-adj-g').setAttribute('transform',`translate(0,${-adj})`);
  adjThreads(adj*2);
  // fixed-format, single-line readouts -- never wrap, so the sliders
  // above them never shift position regardless of value or state
  const preload = adj/8;
  document.getElementById('adjout').textContent = `${preload>=0?'+':''}${preload.toFixed(1)} psi`;
  const inWindow = P >= P0 && P <= (P0+8);
  const pressoutEl = document.getElementById('pressout');
  pressoutEl.textContent = `${P.toFixed(1)} psig`;
  if (pressoutEl.classList.contains('inwin') !== inWindow){
    pressoutEl.classList.toggle('inwin', inWindow);
    pressoutEl.classList.remove('readout-pulse'); void pressoutEl.offsetWidth; pressoutEl.classList.add('readout-pulse');
  }
  // secondary diagnostics move here, free to wrap without touching a slider
  document.getElementById('statusline').textContent =
    `travel window ${P0.toFixed(1)}-${(P0+8).toFixed(1)} psig · travel ${(stroke*0.75/TRAVEL).toFixed(2)} in`
    + (onStop ? ' · LOWER TRAVEL STOP - plate on casing'
       : seated ? ' · PLUG SEATED - valve closed'
       : (stroke>TRAVEL ? ' (past rated)' : ''));
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
  const pLo = thumbY(Math.min(18,P0+8), 0, 18, hP), pHi = thumbY(Math.max(0,P0), 0, 18, hP);
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
window.addEventListener('resize', layoutRail);
window.addEventListener('orientationchange', layoutRail);
if (window.visualViewport) window.visualViewport.addEventListener('resize', layoutRail);
// ResizeObserver's callback is async, so it can't be the only trigger -- the
// very first render would compute thumb positions before it's fired even
// once. Also re-runs update() (not just layoutRail) since a resize changes
// the track's clientHeight, which the thumb math depends on directly.
new ResizeObserver(()=>{ layoutRail(); update(); }).observe(document.querySelector('.fig'));
layoutRail();
// ================= scripted SOP playback =================
const TIMING = __TIMINGJSON__;
const audio = document.getElementById('pb-audio');
const capEl = document.getElementById('cap');
let playing=false, curSeg=-1, seg8sw=false, firedCues=[];
// 0.1-step rounding: the original native <input type=range step="0.1">
// snapped to a clean decimal grid for free; the custom drag slider lost
// that (continuous float), which is exactly why landing precisely on 3.0
// psig by mouse felt hard. Restored here rather than in the slider code so
// every caller (drag, keyboard, SOP playback) gets the same clean grid.
function setPress(v){ PRESS = Math.min(18, Math.max(0, Math.round(+v*10)/10)); }
function setAdj(v){ ADJ = Math.min(24, Math.max(-24, Math.round(+v))); }
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
function bindHSlider(hitId, vMin, vMax, step, setFn){
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
    dragging=true; hit.setPointerCapture(e.pointerId); hit.focus(); move(e);
  });
  hit.addEventListener('pointermove', move);
  hit.addEventListener('pointerup', endDrag);
  hit.addEventListener('pointercancel', endDrag);
  hit.addEventListener('lostpointercapture', ()=> dragging=false);
  // keyboard: coarse drag can be imprecise at small step sizes; arrow keys
  // nudge to an exact value without ever hinting what that value should be
  hit.addEventListener('keydown', e=>{
    const big = e.shiftKey ? step*10 : step;
    if(e.key==='ArrowRight' || e.key==='ArrowUp'){ setFn(PRESS+big); update(); e.preventDefault(); }
    else if(e.key==='ArrowLeft' || e.key==='ArrowDown'){ setFn(PRESS-big); update(); e.preventDefault(); }
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
bindHSlider('pressHit', 0, 18, 0.1, setPress);
bindVRod('adjHit', -24, 24, 1, setAdj);
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
  setAdj(0); setPress(0); update();
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
  setValve(false); showTravelMark(false); showVerMark(false); setAdj(0); setPress(0); hl(); focus();
}
const CHOREO = [
 // 1. air enters upper casing, presses diaphragm + plate
 {enter(){ benchReset(); },
  cues:[[0.18,()=>focus('p-upper')],[0.55,()=>focus('p-dia')],
        [0.8,()=>focus('p-dia','g-plate')]]},
 // 2. plate presses down, compresses spring against seat (motion happens)
 {enter(){ focus('g-plate',SPRING,'sp-seat-g'); },
  cues:[[0.55,()=>focus(SPRING,'sp-seat-g')]],
  tick(p){ setPress((8*Math.min(1,p*1.15)).toFixed(2)); }},
 // 3. air in, stem down; air out, spring returns
 {enter(){ focus('g-stem',SPRING); },
  cues:[[0.5,()=>focus(SPRING,'g-stem','g-plate','p-dia')]],
  tick(p){ let v; if(p<0.4) v=11*(p/0.4); else if(p<0.52) v=11;
           else v=Math.max(0,11*(1-(p-0.52)/0.4)); setPress(v.toFixed(2)); }},
 // 4. adjuster raises seat, compresses spring upwards; loosening backs off
 {enter(){ setPress(0); focus('sp-adj-g','sp-seat-g',SPRING); },
  tick(p){ let a; if(p<0.3) a=20*(p/0.3); else if(p<0.5) a=20;
           else if(p<0.8) a=20-44*((p-0.5)/0.3); else a=-24;
           setAdj(Math.round(a)); }},
 // 5. bench set defined; nameplate cited
 {enter(){ setAdj(0); setPress(0); focus(); },
  cues:[[0.1,()=>hl('np-benchset')],[0.35,()=>hl('np-benchset','np-travel')],
        [0.62,()=>hl('np-benchset','np-travel','np-size')],[0.9,()=>hl()]]},
 // 6. prove it on the bench: off valve, stem at top, air rigged
 {enter(){ hl(); focus(); pulse('g-stem'); },
  cues:[[0.6,()=>pulse('pressrow')]]},
 // 7. raise from zero, first movement at exactly 3
 {enter(){ focus('g-stem'); }, tick(p){ setPress((3.4*p).toFixed(2)); }},
 // 8. too tight / too loose diagnosis
 {enter(){ seg8sw=false; setAdj(12); setPress(0); focus('sp-adj-g','sp-seat-g','g-stem'); },
  tick(p){ if(p<0.45){ setPress((6*p/0.45).toFixed(2)); }
           else if(p<0.5){ setPress(0); }
           else { if(!seg8sw){ setAdj(-12); seg8sw=true; }
                  setPress((4*(p-0.5)/0.5).toFixed(2)); } }},
 // 9. to exactly 11; over-stroke caution to the casing; mark stem end at 11
 {enter(){ setAdj(0); setPress(3); focus(); },
  cues:[[0.42,()=>focus('g-plate','p-lower')],[0.72,()=>focus()],
        [0.84,()=>{ showVerMark(true); pulse('g-vermark'); }]],
  tick(p){ let v; if(p<0.28) v=3+8*(p/0.28); else if(p<0.4) v=11;
           else if(p<0.58) v=11+7*((p-0.4)/0.18);
           else if(p<0.74) v=18-7*((p-0.58)/0.16); else v=11;
           setPress(v.toFixed(2)); }},
 // 10. lower to 3, measure mark-to-stem-end = 3/4
 {cues:[[0.42,()=>{ showVerBracket(true); }],[0.6,()=>focus('g-stem','g-scale')]],
  tick(p){ if(p<0.4) setPress((11-8*(p/0.4)).toFixed(2)); }},
 // 11. matches -> complete
 {enter(){ setPress(3); focus(); },
  cues:[[0.25,()=>hl('np-travel')],[0.8,()=>hl()]]},
 // 12. now the valve enters the picture
 {enter(){ hl(); showVerMark(false); PB.connected=false; PB.connShown=false;
           PB.nutsDy=34; setPress(0); setValve(true); showTravelMark(false);
           focus('g-vgrp','g-valve-sil','g-mount','g-mount-back'); }},
 // 13. push the valve stem down to the seat
 {enter(){ focus('g-vgrp'); pulse('g-vgrp'); }},
 // 14. mark the valve stem 3/4 below the actuator stem end
 {enter(){ focus(); showTravelMark(true); pulse('g-travelmark'); }},
 // 15. actuate down to the mark
 {tick(p){ setPress(Math.min(11,11.4*p).toFixed(2)); }},
 // 16. clamp the connector halves, tighten evenly
 {enter(){ PB.connShown=true; setValve(true); focus('g-conn','g-stem','g-vgrp'); pulse('g-conn'); },
  cues:[[0.6,()=>{ PB.connected=true; document.getElementById('valve').checked=true;
                   showTravelMark(false); }]]},
 // 17. run the locknuts up to the disk
 {enter(){ focus('g-vgrp','g-conn'); }, tick(p){ PB.nutsDy=34*(1-p); }},
 // 18. stroke open to closed, verify, align scale
 {enter(){ focus(); },
  cues:[[0.35,()=>focus('g-scale','g-vgrp','g-stem')],[0.85,()=>focus()]],
  tick(p){ if(p<0.3){ setPress((11*(1-p/0.3)).toFixed(2)); PB.scaleDy=0; }
           else if(p<0.5){ setPress(0); PB.scaleDy=36*((p-0.3)/0.2); }
           else { PB.scaleDy=36; setPress((Math.min(12,12*(p-0.5)/0.5)).toFixed(2)); } }},
];
function pbFrame(){
  if(!playing) return;
  const t = audio.currentTime;
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
  document.getElementById('pb-play').classList.remove('playing');
  document.getElementById('pb-play').innerHTML='&#9654; Play the SOP';
  document.getElementById('pb-status').textContent='';
  capEl.textContent='';
  setPress(0); focus(); hl(); update();
}
document.getElementById('pb-play').addEventListener('click', ()=>{
  if(playing){ pbStop(); return; }
  playing=true; curSeg=-1;
  audio.currentTime=0;
  audio.play().then(()=>{
    document.getElementById('pb-play').classList.add('playing');
    document.getElementById('pb-play').innerHTML='&#9632; Stop';
    requestAnimationFrame(pbFrame);
  }).catch(e=>{ playing=false;
    document.getElementById('pb-status').textContent=' audio failed to load';});
});
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
if(q.get('packing'))document.getElementById('packing').value=q.get('packing');
if(q.get('mark'))window.showTravelMark(true);
document.getElementById('valve').addEventListener('change',()=>{
  PB.connected = document.getElementById('valve').checked;
  PB.connShown = true; PB.nutsDy = 0;
  setValve(document.getElementById('valve').checked);update();});
document.getElementById('packing').addEventListener('change',()=>{setPacking();update();});
setPacking();
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
  function isDark(){
    const explicit = document.documentElement.getAttribute('data-theme');
    if(explicit) return explicit === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function paint(){ btn.textContent = isDark() ? '☀' : '☽'; }
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
