const BASS=[110,0,0,0, 87.31,0,0,0, 130.81,0,0,0, 98.00,0,0,0];
const ARP =[220,261.63,329.63,261.63, 174.61,220,261.63,220,
            261.63,329.63,392.00,329.63, 196.00,246.94,293.66,246.94];
const MUS={timer:null,step:0,gain:null};

function musNote(freq,dur,vol,type){
  if(!A.ready||!A.on||!freq) return;
  const c=A.ctx,o=c.createOscillator(),g=c.createGain();
  o.type=type; o.frequency.value=freq;
  g.gain.setValueAtTime(0.0001,c.currentTime);
  g.gain.exponentialRampToValueAtTime(vol,c.currentTime+0.02);
  g.gain.exponentialRampToValueAtTime(0.0001,c.currentTime+dur);
  o.connect(g); g.connect(MUS.gain||A.ctx.destination); o.start(); o.stop(c.currentTime+dur+0.03);
}
function startMusic(){
  if(!A.ready||MUS.timer) return;
  MUS.gain=A.ctx.createGain(); MUS.gain.gain.value=0.5; MUS.gain.connect(A.ctx.destination);
  MUS.step=0;
  MUS.timer=setInterval(()=>{
    const s=MUS.step%16;
    if(s===0) loopBoundary();      // the music owns the grid the looper rides on
    musNote(BASS[s],0.85,0.10,'triangle');
    musNote(ARP[s],0.42,0.045,'square');
    MUS.step++;
  },380);
  LOOP.origin=A.ctx.currentTime;
  if(!LOOP.timer) LOOP.timer=setInterval(loopTick,15);
}
function stopMusic(){
  if(!MUS.timer) return;
  clearInterval(MUS.timer); MUS.timer=null;
  if(LOOP.timer){ clearInterval(LOOP.timer); LOOP.timer=null; }
  loopReleaseAll();
  if(MUS.gain){ const c=A.ctx; MUS.gain.gain.setTargetAtTime(0,c.currentTime,0.35); }
}

/* ============================================================
   PLAYABLE NUMPAD INSTRUMENT
   The loop stays simple on purpose so there is room to play over it.
   Everything here is pitched to sit inside A minor (Am F C G), so any
   combination lands in key \u2014 the lead notes are the tonic triad up high,
   which stay consonant across all four chords of the loop.
   ============================================================ */
/* Percussion is one-shot; lead and bass are held voices that sustain until
   the key comes up. Attacks are short LINEAR ramps from true zero \u2014 the old
   exponential ramps started at 0.0001 and spend most of their rise inaudibly
   quiet, which is what made the instrument feel laggy to play. */
/* 808-style drums, synthesised rather than sampled.
   The perceived-lateness fix is the CLICK: an onset is located by its high
   frequency content, and a pure sine sweeping down from 150Hz has none, so the
   ear registers it late no matter how fast the gain envelope is. A couple of
   milliseconds of high-passed noise on top puts the transient where the key
   press was. Both voices attack in ~1ms from true zero. */
function kick(){
  if(!A.ready||!A.on) return;
  const c=A.ctx,t=c.currentTime;
  // body: fast pitch drop into a long sine tail
  const o=c.createOscillator(), g=c.createGain();
  o.type='sine';
  o.frequency.setValueAtTime(132,t);
  o.frequency.exponentialRampToValueAtTime(46,t+0.045);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(0.50,t+0.0015);
  g.gain.exponentialRampToValueAtTime(0.0001,t+0.78);
  o.connect(g); g.connect(A.ctx.destination); o.start(t); o.stop(t+0.82);
  // click transient
  const cl=c.createBufferSource(); cl.buffer=A.noise; cl.loop=true;
  const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=2400;
  const cg=c.createGain();
  cg.gain.setValueAtTime(0.20,t);
  cg.gain.exponentialRampToValueAtTime(0.0001,t+0.016);
  cl.connect(hp); hp.connect(cg); cg.connect(A.ctx.destination);
  cl.start(t); cl.stop(t+0.03);
}
function snare(){
  if(!A.ready||!A.on) return;
  const c=A.ctx,t=c.currentTime;
  // bright noise \u2014 the snares
  const n=c.createBufferSource(); n.buffer=A.noise; n.loop=true; n.playbackRate.value=1.9;
  const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=1800;
  const ng=c.createGain();
  ng.gain.setValueAtTime(0,t);
  ng.gain.linearRampToValueAtTime(0.26,t+0.001);
  ng.gain.exponentialRampToValueAtTime(0.0001,t+0.15);
  n.connect(hp); hp.connect(ng); ng.connect(A.ctx.destination); n.start(t); n.stop(t+0.19);
  // two tuned shells, the 808 snare's characteristic body
  [[182,0.11],[331,0.07]].forEach(([f,v])=>{
    const o=c.createOscillator(), g=c.createGain();
    o.type='triangle'; o.frequency.setValueAtTime(f,t);
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(v,t+0.001);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.095);
    o.connect(g); g.connect(A.ctx.destination); o.start(t); o.stop(t+0.11);
  });
}
// Warble is a bandpass swept by an LFO (the vowel-ish, vocoder-leaning part)
// plus slow vibrato on two detuned saws. Runs until released.
function startLead(f){
  const c=A.ctx,t=c.currentTime,nodes=[];
  const out=c.createGain();
  out.gain.setValueAtTime(0,t);
  out.gain.linearRampToValueAtTime(0.085,t+0.006);
  out.connect(A.ctx.destination);
  const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=f*2.6; bp.Q.value=5;
  bp.connect(out);
  const lfo=c.createOscillator(), lg=c.createGain();
  lfo.frequency.value=6.2; lg.gain.value=f*1.7;
  lfo.connect(lg); lg.connect(bp.frequency); lfo.start(t); nodes.push(lfo);
  [-6,6].forEach(cents=>{
    const o=c.createOscillator();
    o.type='sawtooth'; o.frequency.value=f*Math.pow(2,cents/1200);
    const vib=c.createOscillator(), vg=c.createGain();
    vib.frequency.value=5.4; vg.gain.value=f*0.014;
    vib.connect(vg); vg.connect(o.frequency); vib.start(t); nodes.push(vib);
    o.connect(bp); o.start(t); nodes.push(o);
  });
  return {out,nodes};
}
/* Same voice as the lead, an octave-plus down: detuned saws through an
   LFO-swept bandpass. The bandpass strips the fundamental, which is fine for a
   lead but guts a bass, so a clean sine at the fundamental runs alongside it
   for weight. Both land on `out`, so one release fades the whole voice.

   Both numbers below were measured, not guessed, by rendering the voice in an
   OfflineAudioContext and comparing RMS against the lead:
     - sub at 0.30 leaves the saws carrying 65% of the voice's energy, so the
       warble stays the thing you hear. At 0.45 the sine took over (49%) and it
       stopped sounding like the lead at all.
     - peak 0.065 puts the bass ~1dB under the lead. Two earlier settings
       bracket it: the original square-wave version measured +8.8dB OVER the
       lead and swamped everything, and 0.045 then landed 4.4dB under, which
       was too shy \u2014 low frequencies read quieter than mids at equal RMS, so
       near-parity on the meter is about right in the ear. */
function startBass(f){
  const c=A.ctx,t=c.currentTime,nodes=[];
  const out=c.createGain();
  out.gain.setValueAtTime(0,t);
  out.gain.linearRampToValueAtTime(0.065,t+0.006);
  out.connect(A.ctx.destination);

  const bp=c.createBiquadFilter(); bp.type='bandpass';
  bp.frequency.value=f*4.2;        // higher multiple than the lead so low notes keep harmonics
  bp.Q.value=4;
  bp.connect(out);
  const lfo=c.createOscillator(), lg=c.createGain();
  lfo.frequency.value=4.4;         // slower warble than the lead; reads better down low
  lg.gain.value=f*2.4;
  lfo.connect(lg); lg.connect(bp.frequency); lfo.start(t); nodes.push(lfo);
  [-7,7].forEach(cents=>{
    const o=c.createOscillator();
    o.type='sawtooth'; o.frequency.value=f*Math.pow(2,cents/1200);
    const vib=c.createOscillator(), vg=c.createGain();
    vib.frequency.value=4.0; vg.gain.value=f*0.012;
    vib.connect(vg); vg.connect(o.frequency); vib.start(t); nodes.push(vib);
    o.connect(bp); o.start(t); nodes.push(o);
  });

  const sub=c.createOscillator(), sg=c.createGain();
  sub.type='sine'; sub.frequency.value=f; sg.gain.value=0.30;
  sub.connect(sg); sg.connect(out); sub.start(t); nodes.push(sub);

  return {out,nodes};
}
function releaseVoice(v){
  if(!v||!A.ready) return;
  const c=A.ctx, r=c.currentTime;
  try{
    const now=v.out.gain.value;
    v.out.gain.cancelScheduledValues(r);
    v.out.gain.setValueAtTime(now,r);
    v.out.gain.linearRampToValueAtTime(0,r+0.09);
  }catch(_){}
  v.nodes.forEach(n=>{ try{ n.stop(r+0.12); }catch(_){} });
}

/* The loop is Am - F - C - G, so the bass gives exactly those four roots:
   F1 G1 A1 C2. An earlier mapping used A C E G, which had no F at all \u2014 the
   moment the loop reached the F chord there was nothing to land on.
   Laid out so pitch falls as you move left, and falls again dropping to the
   row below, which makes a descending run 6-5-4-1 (C A G F) a natural motion. */
const PAD={
  '7':{t:'lead',f:440,   n:'A'},   // A4  \
  '8':{t:'lead',f:523.25,n:'C'},   // C5   > A-minor triad, sits over all 4 chords
  '9':{t:'lead',f:659.25,n:'E'},   // E5  /
  '1':{t:'bass',f:43.65, n:'F'},   // F1  lowest
  '4':{t:'bass',f:49,    n:'G'},   // G1
  '5':{t:'bass',f:55,    n:'A'},   // A1
  '6':{t:'bass',f:65.41, n:'C'},   // C2
  '0':{t:'kick'},        '.':{t:'snare'},
};

const voices={};
function capOf(k){ return document.querySelector('.kc[data-k="'+(k==='.'?'dot':k)+'"]'); }
function padKeyFrom(e){
  if(e.code && e.code.startsWith('Numpad')){
    const tail=e.code.slice(6);
    if(tail==='Decimal') return '.';
    if(/^\d$/.test(tail)) return tail;
  }
  return /^[0-9.]$/.test(e.key) ? e.key : null;
}
function padDown(k){
  const hit=PAD[k]; if(!hit) return false;
  const el=capOf(k);
  if(hit.t==='kick'||hit.t==='snare'){
    (hit.t==='kick'?kick:snare)();
    recEv(k,true);
    if(el){ el.classList.add('lit'); setTimeout(()=>el.classList.remove('lit'),110); }
    return true;
  }
  if(voices[k]) return true;                        // already being held
  if(A.ready&&A.on) voices[k]= hit.t==='lead' ? startLead(hit.f) : startBass(hit.f);
  recEv(k,true);
  if(el) el.classList.add('lit');
  return true;
}
function padUp(k){
  if(voices[k]){ releaseVoice(voices[k]); delete voices[k]; recEv(k,false); }
  const el=capOf(k); if(el) el.classList.remove('lit');
}
function releaseAllPad(){ Object.keys(voices).forEach(padUp); }

/* ============================================================
   LOOPER
   One loop is exactly one pass of the chord progression (16 steps), so a
   recorded part can never drift out of phase with the backing loop no matter
   how sloppily it was played in. Recording therefore does not begin the
   instant you hit REC \u2014 it arms, and starts on the next downbeat. That is the
   whole trick: you get a free count-in, and the loop seams line up by
   construction rather than by you being precise.

   Loop playback keeps its OWN voice registry. Sharing `voices` with the live
   keys would mean a recorded note and your finger on the same key fighting
   over one slot, and whichever released first would cut the other off.
   ============================================================ */
const CYCLE_SEC = 16 * 0.380;
const LOOP = {
  state:'empty',   // empty -> armed -> rec -> play
  ev:[],           // committed events: {t seconds into cycle, k, down}
  pend:[],         // events captured during the current recording pass
  origin:0,        // ctx time the current cycle began
  cursor:0,        // index into ev of the next event due
  voices:{},
  timer:null
};
function loopDown(k){
  const hit=PAD[k]; if(!hit) return;
  if(hit.t==='kick'||hit.t==='snare'){
    (hit.t==='kick'?kick:snare)();
    const el=capOf(k);
    if(el){ el.classList.add('loop'); setTimeout(()=>el.classList.remove('loop'),110); }
    return;
  }
  if(LOOP.voices[k]) return;
  if(A.ready&&A.on) LOOP.voices[k]= hit.t==='lead' ? startLead(hit.f) : startBass(hit.f);
  const el=capOf(k); if(el) el.classList.add('loop');
}
function loopUp(k){
  if(LOOP.voices[k]){ releaseVoice(LOOP.voices[k]); delete LOOP.voices[k]; }
  const el=capOf(k); if(el) el.classList.remove('loop');
}
function loopReleaseAll(){ Object.keys(LOOP.voices).forEach(loopUp); }

/* Called by the music clock on every downbeat \u2014 the music owns the grid, so
   the looper cannot drift away from it. */
function commitTake(){
  if(!LOOP.pend.length) return;
  LOOP.ev=LOOP.ev.concat(LOOP.pend).sort((a,b)=>a.t-b.t);
  LOOP.pend=[];
}
function loopBoundary(){
  if(LOOP.state==='armed'){ LOOP.state='rec'; LOOP.pend=[]; }
  else if(LOOP.state==='rec'){
    commitTake();
    LOOP.state=LOOP.ev.length?'play':'empty';
  }
  LOOP.origin=A.ready?A.ctx.currentTime:0;
  LOOP.cursor=0;
  loopReleaseAll();      // also cleans up any note still held across the seam
  updateLoopUI();
}
function loopTick(){
  if(!A.ready||!A.on) return;
  if(LOOP.state!=='play'&&LOOP.state!=='rec') return;
  const pos=A.ctx.currentTime-LOOP.origin;
  while(LOOP.cursor<LOOP.ev.length && LOOP.ev[LOOP.cursor].t<=pos){
    const e=LOOP.ev[LOOP.cursor++];
    if(e.down) loopDown(e.k); else loopUp(e.k);
  }
}
/* Capture a live key press into the take. A note still held when the cycle
   ends simply has no matching release \u2014 loopBoundary clears it, which is the
   musically sensible outcome anyway. */
function recEv(k,down){
  if(LOOP.state!=='rec'||!A.ready) return;
  const t=A.ctx.currentTime-LOOP.origin;
  if(t>=0 && t<CYCLE_SEC) LOOP.pend.push({t,k,down});
}
function loopRec(){
  if(!A.ready) return;
  if(LOOP.state==='empty'||LOOP.state==='play'){
    // An overdub arms exactly like the first take. Dropping straight into 'rec'
    // here looks right but isn't: the take would open mid-bar and then close at
    // the very next downbeat, so the pass is over before you can play into it.
    LOOP.state='armed';
  } else if(LOOP.state==='armed'){
    LOOP.state=LOOP.ev.length?'play':'empty';      // tapped twice: stand down
  } else if(LOOP.state==='rec'){
    commitTake();                                  // bail early, but keep the take
    LOOP.state=LOOP.ev.length?'play':'empty';
  }
  updateLoopUI();
}
function loopClear(){
  LOOP.ev=[]; LOOP.pend=[]; LOOP.cursor=0; LOOP.state='empty';
  loopReleaseAll(); updateLoopUI();
}
function updateLoopUI(){
  const rec=document.querySelector('.kc[data-k="rec"]');
  if(rec){
    rec.classList.toggle('armed',   LOOP.state==='armed');
    rec.classList.toggle('recording',LOOP.state==='rec');
    rec.classList.toggle('lit',     LOOP.state==='play');
  }
  const h=document.getElementById('loopHint');
  if(h) h.textContent =
    LOOP.state==='armed' ? 'ARMED \u2014 recording starts on the next downbeat' :
    LOOP.state==='rec'   ? 'RECORDING \u2014 play; it captures one pass of the progression' :
    LOOP.state==='play'  ? 'LOOPING '+LOOP.ev.length+' notes \u2014 + to overdub \u00b7 \u2212 to erase' :
    '+ to record a 4-bar loop (starts on the downbeat) \u00b7 + again to overdub \u00b7 \u2212 to erase';
}
function loopKeyFrom(e){
  if(e.code==='NumpadAdd'||e.key==='+') return 'rec';
  if(e.code==='NumpadSubtract'||e.key==='-') return 'clr';
  return null;
}
// used by the clickable keycaps: press, then let go shortly after
function padFire(k){
  if(!padDown(k)) return false;
  if(PAD[k] && (PAD[k].t==='lead'||PAD[k].t==='bass')) setTimeout(()=>padUp(k),280);
  return true;
}

