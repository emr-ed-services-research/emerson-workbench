/* ============================================================
   LUNAR PROCESS ENGINEER \u2014 shared engine.

   The point of this file is that a level cannot disagree with another
   level about how the world behaves. Water, scenery, sound, the shell
   and the comms voice all live here once. A level supplies geometry and
   a script; it does not reimplement physics or re-draw a wall.

   If two levels ever look or behave differently in a way nobody chose,
   the fix belongs in here, not in the level.
   ============================================================ */
window.LPE = (function(){
'use strict';
let LPE_CURRENT=null;   // the level currently mounted, for stepping by hand

/* Where the player is in the run of assignments. A finished level has to
   hand them somewhere, and it cannot work that out on its own - it does not
   know what comes after it, or that a menu exists. The shell tracks it. */
let LPE_NAV={levels:[], idx:-1, opt:null};

/* ---------------- palette ---------------- */
const P = {
  shadow:'#0a0e10', dark:'#171d20', mid:'#232c31', light:'#39434a',
  hi:'#4a565d', rust:'#6b4524', lamp:'#ffd9a0', water:'#36e0ff',
  stencil:'#c8d2d6', stencilDim:'#6f7980', hand:'#8fb3c9', amber:'#d9a441',
  pipeDark:'#05121a', body:'#4a545e', rim:'#8a94a0',
};

/* ---------------- retro drawing kit ----------------
   Ordered dithering, not smooth gradients: the era's own answer to a
   limited palette, and what makes these screens read as drawn. */
const BAYER=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];
function dither(g,x,y,w,h,col,amt){
  g.fillStyle=col;
  for(let j=0;j<h;j++) for(let i=0;i<w;i++)
    if(BAYER[j&3][i&3]/16 < amt) g.fillRect(x+i,y+j,1,1);
}
function rr(g,x,y,w,h,r){
  g.beginPath(); g.moveTo(x+r,y);
  g.arcTo(x+w,y,x+w,y+h,r); g.arcTo(x+w,y+h,x,y+h,r);
  g.arcTo(x,y+h,x,y,r); g.arcTo(x,y,x+w,y,r); g.closePath();
}

/* Scenery pieces. Levels compose these; they never hand-draw a wall. */
const art = {
  dither, rr,
  wall(g,W,H){
    g.fillStyle=P.dark; g.fillRect(0,0,W,H);
    for(let py=0;py<H;py+=118) for(let px=-20;px<W;px+=162){
      g.fillStyle=((px/162+py/118)|0)%2?'#242d33':'#1f272c';
      g.fillRect(px,py,160,116);
      g.fillStyle='#141b1f'; g.fillRect(px+160,py,2,116); g.fillRect(px,py+116,162,2);
      g.fillStyle='#3a454c';
      [[6,6],[153,6],[6,109],[153,109]].forEach(([a,b])=>g.fillRect(px+a,py+b,2,2));
    }
  },
  rib(g,x,H){
    g.fillStyle='#10161a'; g.fillRect(x,0,38,H);
    g.fillStyle=P.mid; g.fillRect(x+4,0,30,H);
    g.fillStyle=P.light; for(let y=14;y<H;y+=34) g.fillRect(x+16,y,5,5);
  },
  ceiling(g,W){
    g.fillStyle='#10161a'; g.fillRect(0,0,W,40);
    g.fillStyle='#1d262b'; g.fillRect(0,30,W,10);
    for(let x=40;x<W;x+=96){ g.fillStyle=P.mid; g.fillRect(x,4,8,26); }
  },
  /* A run that continues past the frame. `lag` wraps it, with a torn
     section showing the metal under \u2014 the base is old and handled. */
  overhead(g,W,y,r,lag){
    g.fillStyle='#2a333a'; g.fillRect(0,y-r,W,2*r);
    g.fillStyle=P.light; g.fillRect(0,y-r,W,3);
    g.fillStyle='#161d21'; g.fillRect(0,y+r-3,W,3);
    if(lag){
      g.fillStyle='#4a4a44'; g.fillRect(0,y-r-3,W,2*r+6);
      g.fillStyle='#55554d'; for(let x=0;x<W;x+=13) g.fillRect(x,y-r-3,2,2*r+6);
      g.fillStyle='#2a333a'; g.fillRect(596,y-r,118,2*r);
      g.fillStyle=P.light; g.fillRect(596,y-r,118,3);
      dither(g,596,y-r,118,2*r,P.rust,0.35);
    }
    for(let x=70;x<W;x+=150){
      g.fillStyle=P.light; g.fillRect(x,y-r-7,9,2*r+14);
      dither(g,x,y+r+6,9,22,P.rust,0.5);
    }
  },
  floor(g,W,y){
    g.fillStyle='#10161a'; g.fillRect(0,y,W,400-y);
    g.fillStyle='#1c242a'; g.fillRect(0,y+4,W,400-y-4);
    for(let x=0;x<W;x+=26){ g.fillStyle='#141b1f'; g.fillRect(x,y+4,2,400-y-4); }
    g.fillStyle=P.mid; g.fillRect(0,y,W,3);
    dither(g,0,y,W,16,P.shadow,0.4);
  },
  stencil(g,x,y,text,size,col){
    g.fillStyle=col||P.stencilDim; g.font=(size||20)+"px 'VT323',monospace";
    g.textAlign='left'; g.fillText(text,x,y);
  },
  handNote(g,x,y,text){        // whoever worked here last left this
    g.save(); g.translate(x,y); g.rotate(-0.035);
    g.fillStyle=P.hand; g.font="20px 'VT323',monospace"; g.textAlign='left';
    g.fillText(text,0,0); g.restore();
  },
  arrow(g,x,y,text){
    g.fillStyle=P.amber; g.font="22px 'VT323',monospace"; g.textAlign='right';
    g.fillText(text,x,y);
    g.beginPath(); g.moveTo(x-86,y+8); g.lineTo(x-46,y+8); g.lineTo(x-46,y+3);
    g.lineTo(x-28,y+11); g.lineTo(x-46,y+19); g.lineTo(x-46,y+14);
    g.lineTo(x-86,y+14); g.closePath(); g.fill();
  },
  placard(g,x,y){
    g.fillStyle='#c8a33a'; g.beginPath();
    g.moveTo(x,y); g.lineTo(x+18,y+32); g.lineTo(x-18,y+32); g.closePath(); g.fill();
    g.fillStyle=P.dark; g.font="19px 'VT323',monospace"; g.textAlign='center';
    g.fillText('!',x,y+29);
  },
  toolbox(g,x,y){
    g.fillStyle='#5a3b21'; rr(g,x,y,74,40,3); g.fill();
    g.fillStyle='#6d4828'; g.fillRect(x+4,y+4,66,9);
    g.fillStyle=P.mid; g.fillRect(x+28,y-6,18,7);
    dither(g,x,y+26,74,14,P.shadow,0.45);
  },
  clipboard(g,x,y){
    g.fillStyle=P.light; g.fillRect(x+16,y-8,2,10);
    g.fillStyle='#6f6a58'; g.fillRect(x,y,34,44);
    g.fillStyle='#8d8775'; g.fillRect(x+3,y+4,28,36);
    g.fillStyle='#5c5747'; for(let i=0;i<5;i++) g.fillRect(x+6,y+10+i*6,22,1);
  },
  /* Bake the vignette into the scenery instead of laying it over the finished
     frame. Drawn last it fell across the pipes, gauges, beds and labels and
     read as texture smeared over the machinery; baked in, it darkens the room
     and leaves everything built on top of it clean. */
  /* A readout never sits straight on the wall. VT323 strokes are one pixel
     wide, and panel seams, rivets and vignette dither showing through them
     read as grime on the number rather than as a lit instrument.
     The plate has to be OPAQUE to stop that - the first version was 86%
     and the remaining 14% of wall was enough to keep the gpm figures
     looking textured. Rimmed, so it reads as a plate and not a smudge. */
  plate(g,x,y,w,h){
    g.fillStyle='#070c0a'; g.fillRect(x,y,w,h);
    g.strokeStyle='#2b3a33'; g.lineWidth=1; g.strokeRect(x+0.5,y+0.5,w-1,h-1);
  },
  /* Plate plus number, because the two always travel together. `lit` is the
     difference between an instrument reading something and one sitting dark. */
  readout(g,o){
    const pad=o.pad||4, w=o.w||86, h=o.h||21;
    art.plate(g,o.x-pad,o.y-pad,w,h);
    g.fillStyle=o.lit?(o.on||'#39ff6a'):(o.off||'#6f7980');
    g.font=(o.size||18)+"px 'VT323',monospace"; g.textAlign='left';
    g.fillText(o.text,o.x,o.y+(o.size||18)-3);
    if(o.lit && o.glow!==false){           // a lit readout throws a little light
      g.save(); g.globalAlpha=0.28; g.shadowColor=o.on||'#39ff6a'; g.shadowBlur=7;
      g.fillText(o.text,o.x,o.y+(o.size||18)-3); g.restore();
    }
  },
  vignetteOnto(g,W,H){ g.drawImage(art.vignette(W,H),0,0); },
  /* A dithered vignette, built once. Gives the screen depth without a
     smooth gradient anywhere. */
  vignette(W,H){
    const c=document.createElement('canvas'); c.width=W; c.height=H;
    const v=c.getContext('2d');
    /* Deliberately gentle. A first pass started the falloff at 0.46 and
       ran to 0.92 density, which put ~30% black over the middle of the
       screen and turned the whole scene to mush. It should darken the
       corners and leave the subject alone. */
    for(let j=0;j<H;j++) for(let i=0;i<W;i++){
      const dx=(i-W/2)/(W/2), dy=(j-H*0.55)/(H/2);
      const d=Math.min(1,Math.max(0,(Math.sqrt(dx*dx+dy*dy)-0.64)/0.88));
      if(BAYER[j&3][i&3]/16 < d*0.58){ v.fillStyle='#05080a'; v.fillRect(i,j,1,1); }
    }
    return c;
  },
  /* A tiny toggle on the habitat's airlock, in the title's 320x200 frame.
     Deliberately small - it should read as a switch if you look at it and as
     nothing much if you do not. Five pixels across: a recessed well, and a
     lever that sits at the bottom when off and throws to the top, lighting,
     when on. The whole point is the throw, which a lamp cannot do. */
  toggleSwitch(g,x,y,on){
    g.fillStyle='#0b1013'; g.fillRect(x-2,y-5,5,10);         // well
    g.fillStyle='#39434a'; g.fillRect(x-2,y-5,5,1);          // lit lip
    g.fillStyle='#1d2429'; g.fillRect(x-2,y+4,5,1);
    const ly = on ? y-4 : y+1;                               // the throw
    g.fillStyle = on?'#39ff6a':'#6b767f';
    g.fillRect(x-1,ly,3,3);
    if(on){ g.fillStyle='#9bffbe'; g.fillRect(x-1,ly,3,1); } // catches the light
  },
  lampHousing(g,x,y){
    g.fillStyle='#2b343a'; rr(g,x-26,y-12,52,16,3); g.fill();
    g.fillStyle=P.light; g.fillRect(x-4,y-22,8,10);
    g.fillStyle=P.lamp; g.fillRect(x-20,y+3,40,4);
  },
};

/* ---------------- WATER ----------------
   One implementation, shared by every level, because the two rules below
   were learned the hard way and must never be re-litigated per level:

     1. A pipe does not empty. Water that has arrived stays; what changes
        is whether it is MOVING. Standing water draws dim and still.
     2. Each segment owns its own particles. Particles never traverse the
        whole network, which is what used to strand them at a boundary
        where velocity changed.

   A segment has `flow` (0..1, how fast) and `fill` (0..1, how far water
   has advanced into it \u2014 1 for any line that is already wet). */
/* A segment runs from (ax,ay) to (bx,by) in any direction, so a trunk can
   drop vertically past its tees while branches run horizontally off it.
   Particles travel along the segment's own axis as a fraction `t` of its
   length, and `lane` is their offset across the bore. Keeping position
   axis-relative is what lets one implementation serve both. */
function Line(opt){
  this.r=opt.r;
  this.segs=opt.segments.map(s=>{
    /* An arc segment carries water round an elbow. Without it the flow cuts
       the corner in a straight line and runs out through the inside wall of
       a radiused bend. `lane` becomes a radial offset, so the stream stays
       inside the bore all the way round. */
    if(s.arc){
      const {cx,cy,R,a0,a1}=s.arc;
      const len=Math.abs(a1-a0)*R;
      const n=Math.max(5,Math.round(len*(s.density===undefined?0.11:s.density)));
      const parts=[];
      for(let i=0;i<n;i++) parts.push({t:Math.random(),lane:Math.random()*2-1});
      return {kind:'arc',cx,cy,R,a0,a1,len,r:s.r||opt.r,
              flow:s.flow||0, fill:s.fill===undefined?1:s.fill,
              speed:s.speed===undefined?1:s.speed, parts};
    }
    const ax=s.ax, ay=s.ay, bx=s.bx, by=s.by;
    const len=Math.hypot(bx-ax,by-ay);
    const ux=(bx-ax)/len, uy=(by-ay)/len;        // along the pipe
    const nx=-uy, ny=ux;                         // across it
    const n=Math.max(6,Math.round(len*(s.density===undefined?0.11:s.density)));
    const parts=[];
    for(let i=0;i<n;i++) parts.push({t:Math.random(),lane:Math.random()*2-1});
    return {ax,ay,bx,by,len,ux,uy,nx,ny,r:s.r||opt.r,
            flow:s.flow||0, fill:s.fill===undefined?1:s.fill,
            speed:s.speed===undefined?1:s.speed, parts};
  });
}
/* The stream does not move as a block. It drags on the wall, so the middle
   runs fastest and the water against the bore is nearly stationary - the
   Prandtl 1/7-power turbulent profile, whose peak is 60/49 of the mean and
   which integrates back to exactly the mean over the bore. Particles were
   all advancing at one speed, which is the one thing a cutaway view exists
   to show is false.

   Taken from the reference rig verbatim - that rig exists precisely to settle
   how water should look, so this is not re-derived here. Prandtl 1/7-power
   turbulent: fastest at the centreline, no-slip at the wall, normalised by
   0.817 (the law's own mean-to-peak ratio) so the average speed is still the
   commanded flow. The 0.98 clamp is deliberate - it keeps wall-hugging water
   creeping instead of frozen. Centre runs 1.22x, wall 0.70x.
   Poiseuille is here too for when a level needs the laminar contrast: a
   sharper parabola with the centre at exactly 2x the average. */
function profileAt(lane){
  const r=Math.min(0.98,Math.abs(lane));
  return Math.pow(1-r,1/7)/0.817;
}
function laminarAt(lane){
  const r=Math.min(1,Math.abs(lane));
  return 2*(1-r*r);
}
const PROFILE_PEAK=1/0.817;
Line.prototype.seg=function(i){ return this.segs[i]; };
Line.prototype.set=function(i,v){ Object.assign(this.segs[i],v); };
Line.prototype.update=function(dt){
  this.segs.forEach(s=>{
    if(s.flow<=0.03) return;                     // still water does not translate
    const v=(46+s.flow*250)*s.speed/s.len;
    s.parts.forEach(p=>{
      let m=(s.regime==="laminar"?laminarAt:profileAt)(p.lane);
      /* Round a bend the inside is the shorter path, so at the same speed a
         particle there gets further round for the same distance travelled -
         and a free vortex makes it genuinely quicker besides. */
      if(s.kind==='arc') m*=s.R/(s.R+p.lane*s.r*0.86);
      p.t+=v*m*dt;
      if(p.t>1){ p.t-=1; p.lane=(Math.random()*2-1)*0.95; }
    });
    /* Tracers. Two marked particles at different radii, advanced by the
       SAME line above - not animated separately to illustrate a point. The
       centreline one pulls away from the one against the wall because the
       profile says it must, so what the player watches is the model, not a
       diagram of it. They restart together, so the race can be watched for
       as long as it takes to believe. */
    if(s.race) s.race.forEach(p=>{
      const m=(s.regime==="laminar"?laminarAt:profileAt)(p.lane);
      p.t+=v*m*dt;
      if(p.t>1) s.race.forEach(q=>{ q.t=0; });
    });
  });
};
/* Mark a segment for the velocity-profile race: one tracer on the
   centreline, one hard against the bore. 0.92 rather than 1.0 because the
   profile clamps at 0.98 and a tracer pinned exactly to the wall would
   never move at all - no-slip is the point, but a frozen dot reads as a
   bug rather than as physics. */
Line.prototype.race=function(i,on){
  this.segs[i].race = on ? [{lane:0.00,mark:'centre'},{lane:0.92,mark:'wall'}]
                               .map(p=>({...p,t:0})) : null;
};
Line.prototype.draw=function(g){
  this.segs.forEach(s=>{
    const moving=s.flow>0.03;
    s.parts.forEach(p=>{
      if(p.t>s.fill) return;                     // past the wetted front is still air
      const f=(s.regime==="laminar"?laminarAt:profileAt)(p.lane)/PROFILE_PEAK;
      let x,y,ux,uy;
      if(s.kind==='arc'){
        const a=s.a0+(s.a1-s.a0)*p.t;
        const rad=s.R+p.lane*s.r*0.86;           // lane runs across the bend
        x=s.cx+Math.cos(a)*rad; y=s.cy+Math.sin(a)*rad;
        const dir=s.a1>s.a0?1:-1;                // tangent, so streaks follow the curve
        ux=-Math.sin(a)*dir; uy=Math.cos(a)*dir;
      }else{
        const d=p.t*s.len, off=p.lane*s.r*0.86;
        x=s.ax+s.ux*d+s.nx*off; y=s.ay+s.uy*d+s.ny*off;
        ux=s.ux; uy=s.uy;
      }
      if(moving){
        const tail=16*f*s.flow;
        g.strokeStyle='rgba(54,224,255,'+(0.34+0.46*f*s.flow).toFixed(2)+')';
        g.lineWidth=1.5; g.beginPath();
        g.moveTo(x-ux*tail,y-uy*tail); g.lineTo(x,y); g.stroke();
      }else{
        g.fillStyle='rgba(54,224,255,0.38)'; g.fillRect(x,y,2,3);
      }
    });
    if(s.race && s.flow>0.03) s.race.forEach(p=>{
      const d=p.t*s.len, off=p.lane*s.r*0.86;
      const x=s.ax+s.ux*d+s.nx*off, y=s.ay+s.uy*d+s.ny*off;
      const col = p.mark==='centre' ? '#ffd24a' : '#ff7a6b';
      g.strokeStyle=col; g.lineWidth=1; g.globalAlpha=0.30;   // the ground covered
      g.beginPath(); g.moveTo(s.ax+s.nx*off,s.ay+s.ny*off); g.lineTo(x,y); g.stroke();
      g.globalAlpha=1;
      g.fillStyle=col; g.beginPath(); g.arc(x,y,3.1,0,6.284); g.fill();
      g.strokeStyle='rgba(0,0,0,0.65)'; g.lineWidth=1; g.stroke();
    });
  });
};
/* ---------------- PIPE NETWORK ----------------
   Draw the WHOLE network at once, never one pipe at a time. Three passes:

     1. every run's outer rectangle (bore + wall) in wall colour
     2. the highlight along each run
     3. every run's BORE, last

   Because every bore is painted after every wall, a wall can never end up
   lying across another run's opening. Drawing pipes individually, a riser's
   side wall ran straight down over each branch's mouth and every tee looked
   blocked - that is not a bug to chase per level, it is a consequence of
   drawing them one at a time, so the engine stops levels doing that.

   A run is {ax,ay,bx,by,r}; only horizontal and vertical runs are used. */
const WALL=5;

/* ---------------- PIPING: runs and fittings ----------------
   Pipe is described the way it is actually built - continuous runs with
   fittings at the joints - rather than as a pile of rectangles:

     lines:    [{pts:[[x,y],...], r}]   a run; every corner becomes an elbow
     tees:     [{x,y,r,branch}]         a branch taken off a run
     reducers: [{x0,x1,y,r1,r2}]        a change of bore
     fittings: [{x,y,r,kind}]           unions, caps and the like

   Corners are stroked with a round join, so a 90 gets a real radius on the
   outside instead of a mitred box. Everything is drawn in three passes -
   all bodies, then collars, then every BORE last - so no fitting can ever
   paint over another's opening. That ordering is what keeps tees clear, and
   it is the engine's job rather than each level's.                        */
function piping(spec){
  const lines=spec.lines||[], tees=spec.tees||[],
        reducers=spec.reducers||[], fittings=spec.fittings||[];
  /* Corners are filleted with arcTo, which bends the CENTRELINE - so the
     inner and outer walls come out as concentric arcs, the way a real elbow
     is made. A round line-join only pads the outside and leaves a sharp
     inside corner, which is a mitred fitting and the wrong shape for flow.
     The radius follows the long-radius convention: centreline R = 1.5 x the
     bore diameter, i.e. 3 x the bore radius. */
  const bendOf=r=>3*r;
  const stroke=(g,pad,col)=>{
    g.strokeStyle=col; g.lineCap='butt'; g.lineJoin='round';
    lines.forEach(L=>{
      g.lineWidth=2*(L.r+pad);
      const R=bendOf(L.r);
      g.beginPath();
      g.moveTo(L.pts[0][0],L.pts[0][1]);
      for(let i=1;i<L.pts.length-1;i++)
        g.arcTo(L.pts[i][0],L.pts[i][1],L.pts[i+1][0],L.pts[i+1][1],R);
      const e=L.pts[L.pts.length-1];
      g.lineTo(e[0],e[1]);
      g.stroke();
    });
  };
  const TAPER=16;
  const taper=(g,rd,pad,col)=>{            // taper in, throat, taper out
    const {x0,x1,y,r1,r2}=rd, a=x0+TAPER, b=x1-TAPER;
    g.fillStyle=col;
    g.beginPath();
    g.moveTo(x0,y-r1-pad); g.lineTo(a,y-r2-pad); g.lineTo(b,y-r2-pad); g.lineTo(x1,y-r1-pad);
    g.lineTo(x1,y+r1+pad); g.lineTo(b,y+r2+pad); g.lineTo(a,y+r2+pad); g.lineTo(x0,y+r1+pad);
    g.closePath(); g.fill();
  };
  return {
    draw(g){
      // --- bodies
      stroke(g,WALL,P.body);
      reducers.forEach(rd=>taper(g,rd,WALL,P.body));
      /* A real tee is a forged body, not two pipes butted together: the metal
         is thicker at the junction, each of the three ends has a socket hub
         the pipe lands in, and the crotch where the branch leaves the run is
         radiused rather than square. The reinforcement and hubs go in with
         the bodies; the crotch fillets go on after the bores, below. */
      tees.forEach(t=>{
        const REINF=3, stub=t.r+WALL+REINF+16;
        g.fillStyle=P.body;
        g.fillRect(t.x-t.r-WALL-REINF, t.y-t.branch-WALL-REINF,
                   2*(t.r+WALL+REINF), 2*(t.branch+WALL+REINF));
        g.fillRect(t.x, t.y-t.branch-WALL-REINF, stub, 2*(t.branch+WALL+REINF));
        g.fillStyle=P.rim;                                  // socket hubs, three ends
        g.fillRect(t.x-t.r-WALL-REINF-2, t.y-t.branch-WALL-REINF-3, 3, 2*(t.branch+WALL+REINF)+6);
        g.fillRect(t.x+stub-3, t.y-t.branch-WALL-REINF-3, 3, 2*(t.branch+WALL+REINF)+6);
      });
      g.fillStyle=P.rim;
      reducers.forEach(rd=>{ g.fillRect(rd.x0-2,rd.y-rd.r1-WALL-2,3,2*(rd.r1+WALL)+4);
                             g.fillRect(rd.x1-1,rd.y-rd.r2-WALL-2,3,2*(rd.r2+WALL)+4); });
      fittings.forEach(f=>{ g.fillRect(f.x-3,f.y-f.r-WALL-3,3,2*(f.r+WALL)+6);
                            g.fillRect(f.x+f.r,f.y-f.r-WALL-3,3,2*(f.r+WALL)+6); });
      // --- highlight along the top of each run
      g.save(); g.globalAlpha=0.5; stroke(g,WALL-2,P.light); g.restore();
      // --- BORES: nothing may close an opening after this
      stroke(g,0,P.pipeDark);
      reducers.forEach(rd=>taper(g,rd,0,P.pipeDark));
      /* --- crotch fillets, the one thing that goes on top of a bore.
         Where a branch leaves the run the metal is radiused, never a sharp
         internal corner - a square crotch is a stress riser and is not how a
         tee is made. Adding it back after the bores keeps it exact. */
      g.fillStyle=P.body;
      /* Each fillet is a QUARTER round. The sweep flags were inverted, which
         took the long way round the circle - 270 degrees instead of 90 - so
         instead of a small radius in the crotch each tee got a three-quarter
         blob laid over it. */
      tees.forEach(t=>{
        const CR=Math.max(3,t.branch*0.6), cx=t.x+t.r;
        [-1,1].forEach(sy=>{
          const cy=t.y+sy*t.branch;
          g.beginPath();
          g.moveTo(cx,cy);
          g.lineTo(cx+CR,cy);
          if(sy<0) g.arc(cx+CR,cy-CR,CR, Math.PI/2, Math.PI, false);
          else     g.arc(cx+CR,cy+CR,CR,-Math.PI/2,-Math.PI, true);
          g.closePath(); g.fill();
        });
      });
    },
  };
}

function pipes(runs){
  const box=(s,pad)=>{
    const x0=Math.min(s.ax,s.bx), x1=Math.max(s.ax,s.bx);
    const y0=Math.min(s.ay,s.by), y1=Math.max(s.ay,s.by);
    return (s.ay===s.by)
      ? {x:x0-pad, y:y0-s.r-pad, w:(x1-x0)+2*pad, h:2*s.r+2*pad}   // horizontal
      : {x:x0-s.r-pad, y:y0-pad, w:2*s.r+2*pad, h:(y1-y0)+2*pad};  // vertical
  };
  return {
    draw(g){
      g.fillStyle=P.body;
      runs.forEach(s=>{ const b=box(s,WALL); g.fillRect(b.x,b.y,b.w,b.h); });
      g.fillStyle=P.light;                                    // lit top / left edge
      runs.forEach(s=>{ const b=box(s,WALL);
        if(s.ay===s.by) g.fillRect(b.x,b.y,b.w,3); else g.fillRect(b.x,b.y,3,b.h); });
      g.fillStyle=P.pipeDark;                                 // bores last, always
      runs.forEach(s=>{ const b=box(s,0); g.fillRect(b.x,b.y,b.w,b.h); });
    },
    bores(g){ g.fillStyle=P.pipeDark;
      runs.forEach(s=>{ const b=box(s,0); g.fillRect(b.x,b.y,b.w,b.h); }); },
  };
}
/* The pipe the water runs in, drawn to the one shared convention. */
function pipeRun(g,x0,x1,y,r){
  g.fillStyle=P.light; g.fillRect(x0,y-r-6,x1-x0,6);
  g.fillStyle=P.mid;   g.fillRect(x0,y+r,x1-x0,6);
  g.fillStyle=P.pipeDark; g.fillRect(x0,y-r,x1-x0,2*r);
}
function penetration(g,x,y,r){
  g.fillStyle=P.body; g.fillRect(x,y-r-11,12,2*r+22);
  g.strokeStyle=P.rim; g.lineWidth=1; g.strokeRect(x,y-r-11,12,2*r+22);
}

/* ---------------- hand wheel + gauge ----------------
   Shared so a valve is the same object in every level. */
/* One spoke is marked, so the wheel's rotation is actually readable. Four
   identical spokes turned through whole revolutions look the same at shut and
   at open, which made the position impossible to judge. */
/* A wheel sweeps 270 degrees from shut to open, never a whole turn. Two
   reasons: a full revolution puts shut and open on the same orientation, so
   the wheel looks like it ran past its stops; and a rotation derived from the
   clamped position cannot over-travel the way an accumulated angle can. */
const WHEEL_SWEEP=1.5*Math.PI;
function handWheel(g,x,y,R,turn,lit){
  // the stops, drawn in the valve's own frame so they do not turn with it
  g.strokeStyle='#5c666e'; g.lineWidth=3;
  [0,WHEEL_SWEEP].forEach(a=>{
    g.beginPath();
    g.moveTo(x+Math.cos(a)*(R+4),y+Math.sin(a)*(R+4));
    g.lineTo(x+Math.cos(a)*(R+9),y+Math.sin(a)*(R+9)); g.stroke();
  });
  g.save(); g.translate(x,y); g.rotate(turn);
  g.strokeStyle=lit?'#ffb627':'#aeb7c2'; g.lineWidth=5;
  g.beginPath(); g.arc(0,0,R,0,6.284); g.stroke();
  g.lineWidth=4;
  for(let i=0;i<4;i++){ const a=i*Math.PI/2;
    g.strokeStyle=i?(lit?'#ffb627':'#aeb7c2'):'#ff5050';      // index spoke
    g.beginPath(); g.moveTo(0,0); g.lineTo(Math.cos(a)*R,Math.sin(a)*R); g.stroke(); }
  g.fillStyle=P.light; g.beginPath(); g.arc(0,0,6,0,6.284); g.fill();
  g.restore();
}
/* `open` (0..1) draws the gate actually moving across the bore. Without it a
   valve gives the player nothing to read: the wheel turns and the bore looks
   identical whether it is shut or wide open. */
/* A valve is drawn in two passes so the water can run THROUGH it:
     valveShell  - casting, with the bore carved back out of it
     ... water ...
     valveTrim   - gate, stem and wheel, on top of the water
   Drawn as one solid block it closed the pipe visually, and a wide-open
   valve still read as a restriction because the flow vanished behind it. */
function valveShell(g,x,y,r){
  g.fillStyle=P.body; rr(g,x-31,y-r-11,62,2*r+22,4); g.fill();
  g.strokeStyle=P.rim; g.lineWidth=1; g.stroke();
  g.fillStyle=P.pipeDark; g.fillRect(x-31,y-r,62,2*r);     // the bore runs through
  dither(g,x-31,y+r+4,62,8,P.rust,0.3);
}
function valveTrim(g,x,y,r,wheelY,turn,R,lit,open){
  if(open!==undefined){
    const gateBot=y-r+(2*r)*(1-open);
    if(gateBot>y-r+0.5){
      g.fillStyle = open<0.02 ? '#b8434a' : '#7d8894';      // red when fully shut
      g.fillRect(x-5,y-r,10,gateBot-(y-r));
      g.strokeStyle='#aeb7c2'; g.lineWidth=1;
      g.strokeRect(x-5,y-r,10,gateBot-(y-r));
    }
  }
  g.strokeStyle='#6d7680'; g.lineWidth=5;
  g.beginPath(); g.moveTo(x,y-r-11); g.lineTo(x,wheelY); g.stroke();
  handWheel(g,x,wheelY,R,turn,lit);
}
function valveBody(g,x,y,r,wheelY,turn,R,lit,open){      // both passes at once
  valveShell(g,x,y,r); valveTrim(g,x,y,r,wheelY,turn,R,lit,open);
}
function gauge(g,x,y,R,psi,max){
  g.fillStyle='#0c1012'; g.beginPath(); g.arc(x,y,R,0,6.284); g.fill();
  g.strokeStyle=P.rim; g.lineWidth=3; g.stroke();
  g.strokeStyle=P.light; g.lineWidth=2;
  for(let i=0;i<=10;i++){ const a=Math.PI*0.75+Math.PI*1.5*i/10;
    g.beginPath();
    g.moveTo(x+Math.cos(a)*(R-8),y+Math.sin(a)*(R-8));
    g.lineTo(x+Math.cos(a)*(R-3),y+Math.sin(a)*(R-3)); g.stroke(); }
  const a=Math.PI*0.75+Math.PI*1.5*Math.min(1,psi/(max||50));
  g.strokeStyle='#ffb627'; g.lineWidth=3;
  g.beginPath(); g.moveTo(x,y); g.lineTo(x+Math.cos(a)*(R-10),y+Math.sin(a)*(R-10)); g.stroke();
  /* The reading gets a plate like every other readout. Set bare, it landed
     on whatever the gauge happened to be mounted over - on the manifold
     that is the main run itself - and read as dirt on the pipe. */
  const s=psi.toFixed(0)+' psig';
  g.font="15px 'VT323',monospace";
  const w=Math.ceil(g.measureText(s).width)+14;
  art.plate(g,x-w/2,y+R+3,w,19);
  g.fillStyle=psi>1?'#ffd47a':P.rim; g.textAlign='center';
  g.fillText(s,x,y+R+17);
}

/* ---------------- sound ---------------- */
const audio={
  ctx:null,on:true,ready:false,noise:null,flowGain:null,humGain:null,ventGain:null,ventFilter:null,ventFlutter:null,_venting:false,rushGain:null,rushFilter:null,
  init(){
    if(this.ready) return;
    try{
      this.ctx=new (window.AudioContext||window.webkitAudioContext)({latencyHint:'interactive'});
      const n=this.ctx.sampleRate*2,b=this.ctx.createBuffer(1,n,this.ctx.sampleRate),d=b.getChannelData(0);
      for(let i=0;i<n;i++) d[i]=Math.random()*2-1;
      this.noise=b; this.ready=true; this._hum();
    }catch(_){}
  },
  resume(){ if(this.ctx&&this.ctx.state==='suspended') this.ctx.resume(); },
  _hum(){                                   // the base is never silent
    const c=this.ctx, s=c.createBufferSource(); s.buffer=this.noise; s.loop=true;
    const lp=c.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=180;
    const g=c.createGain(); g.gain.value=0.045;
    s.connect(lp); lp.connect(g); g.connect(c.destination); s.start();
    this.humGain=g;
  },
  burst(freq,Q,peak,dur,type){
    if(!this.ready||!this.on) return;
    const c=this.ctx,t=c.currentTime;
    const s=c.createBufferSource(); s.buffer=this.noise; s.loop=true;
    const f=c.createBiquadFilter(); f.type=type||'bandpass'; f.frequency.value=freq; f.Q.value=Q;
    const g=c.createGain();
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(peak,t+0.012);
    g.gain.setValueAtTime(peak,t+Math.max(0.02,dur-0.1));
    g.gain.linearRampToValueAtTime(0.0001,t+dur);
    s.connect(f); f.connect(g); g.connect(c.destination); s.start(t); s.stop(t+dur+0.05);
  },
  scrape(d){ this.burst(1150,0.8,0.13,d||0.95); },
  tick(){ this.burst(2600,2,0.085,0.04); },
  drip(){ this.burst(1500,6,0.06,0.07); },
  /* A toggle being thrown: the sharp plastic snap of the lever, then the
     softer thunk of the mechanism seating. */
  clack(up){
    if(!this.ready||!this.on) return;
    const c=this.ctx,t=c.currentTime;
    this.burst(up?3200:2400,3,0.16,0.035,'bandpass');
    const o=c.createOscillator(), g=c.createGain();
    o.type='square'; o.frequency.setValueAtTime(up?240:170,t);
    o.frequency.exponentialRampToValueAtTime(up?90:60,t+0.05);
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.16,t+0.003);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.13);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t+0.16);
  },
  /* Something coming alive: two voices a fifth apart sweeping up together
     into a short shimmer. Signals the panel is live, not just visible. */
  powerUp(){
    if(!this.ready||!this.on) return;
    const c=this.ctx,t=c.currentTime;
    [[220,0.10],[330,0.07]].forEach(([f,v],i)=>{
      const o=c.createOscillator(), g=c.createGain();
      o.type=i?'triangle':'sawtooth';
      o.frequency.setValueAtTime(f*0.5,t);
      o.frequency.exponentialRampToValueAtTime(f*2,t+0.26);
      const lp=c.createBiquadFilter(); lp.type='lowpass'; lp.Q.value=4;
      lp.frequency.setValueAtTime(400,t);
      lp.frequency.exponentialRampToValueAtTime(4200,t+0.26);
      g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(v,t+0.04);
      g.gain.setValueAtTime(v,t+0.22);
      g.gain.exponentialRampToValueAtTime(0.0001,t+0.52);
      o.connect(lp); lp.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t+0.56);
    });
    this.burst(5200,1.2,0.05,0.30,'highpass');            // air on top
  },
  clunk(){
    if(!this.ready||!this.on) return;
    const c=this.ctx,t=c.currentTime,o=c.createOscillator(),g=c.createGain();
    o.type='sine'; o.frequency.setValueAtTime(190,t);
    o.frequency.exponentialRampToValueAtTime(56,t+0.06);
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.5,t+0.002);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.34);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t+0.38);
    this.burst(1800,0.6,0.2,0.05,'highpass');
  },
  startFlow(){
    if(!this.ready||this.flowGain) return;
    const c=this.ctx, s=c.createBufferSource(); s.buffer=this.noise; s.loop=true;
    const lp=c.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=760;
    const g=c.createGain(); g.gain.value=0;
    s.connect(lp); lp.connect(g); g.connect(c.destination); s.start();
    this.flowGain=g;
  },
  flow(level){ if(this.flowGain) this.flowGain.gain.value=this.on?0.08*level:0; },
  /* Air leaving a line that is filling. Water hum is lowpassed to a dull
     rumble; escaping air is the opposite - thin, bright, and it hisses.
     There was no vent sound at all before this, so "the air venting" was
     only ever a caption on the wall. Built like startFlow so it is one
     voice held open and ridden by level, not a burst per frame. */
  startVent(){
    if(!this.ready||this.ventGain) return;
    const c=this.ctx, s=c.createBufferSource(); s.buffer=this.noise; s.loop=true;
    const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=2100;
    const bp=c.createBiquadFilter(); bp.type='bandpass';
    bp.frequency.value=3600; bp.Q.value=0.7;
    const g=c.createGain(); g.gain.value=0;
    s.connect(hp); hp.connect(bp); bp.connect(g); g.connect(c.destination); s.start();
    /* Air leaving a part-filled line SPUTTERS - slugs of water and air take
       turns at the outlet. A steady hiss is the one thing the ear throws
       away fastest, which is why the first version was running, measurable,
       and still unnoticed. Two LFOs at rates that do not divide into each
       other give an irregular flutter instead of a pulse. */
    const a=c.createOscillator(), bq=c.createOscillator();
    a.type='sawtooth'; a.frequency.value=7.3;
    bq.type='triangle'; bq.frequency.value=11.7;
    const fl=c.createGain(); fl.gain.value=0;
    a.connect(fl); bq.connect(fl); fl.connect(g.gain);
    a.start(); bq.start();
    this.ventGain=g; this.ventFilter=bp; this.ventFlutter=fl;
  },
  /* A restriction passing liquid is NOT quiet. The throat here runs about
     4.7x branch velocity, and the shear layer and reattachment downstream
     of it make real broadband noise. Checked before building it: with the
     bed discharging to an open tray, dP never reaches FL^2(P1-FF*Pv) at any
     operating point, so this is turbulent rush and NOT cavitation - no
     gravel, no collapse. Cavitation is a different sound for a later level,
     and faking it here would teach the wrong tell.
     Sits between flow (lowpassed 760 rumble) and vent (2kHz+ hiss). */
  startRush(){
    if(!this.ready||this.rushGain) return;
    const c=this.ctx, s=c.createBufferSource(); s.buffer=this.noise; s.loop=true;
    const bp=c.createBiquadFilter(); bp.type='bandpass';
    bp.frequency.value=1500; bp.Q.value=0.55;
    const g=c.createGain(); g.gain.value=0;
    s.connect(bp); bp.connect(g); g.connect(c.destination); s.start();
    this.rushGain=g; this.rushFilter=bp;
  },
  rush(level){
    if(!this.rushGain){ if(level>0) this.startRush(); if(!this.rushGain) return; }
    const t=this.ctx.currentTime;
    /* 0.022, not the 0.055 this started at. Measured against the flow hum
       offline: at the level it actually runs in game (0.76) the old value
       sat 0.9 dB UNDER full bay flow - the restriction was as loud as all
       the water in the level. Now about -9 dB, which reads as a character
       in the background rather than the subject. */
    this.rushGain.gain.setTargetAtTime(this.on?0.022*level:0, t, 0.06);
    this.rushFilter.frequency.setTargetAtTime(1100+900*level, t, 0.1);
  },
  vent(level){
    if(!this.ventGain){ if(level>0) this.startVent(); if(!this.ventGain) return; }
    const t=this.ctx.currentTime, on=this.on?1:0;
    /* The first instant gets a spit - a line that has just been opened does
       not fade in. */
    if(level>0 && !this._venting){
      this._venting=true;
      this.ventGain.gain.cancelScheduledValues(t);
      this.ventGain.gain.setValueAtTime(on*0.11, t);
    } else if(level<=0){ this._venting=false; }
    /* 0.045, not the 0.020 this was cut to. That cut was made against the
       flow hum as though this were background texture; it is an event, and
       it was levelled into inaudibility. */
    this.ventGain.gain.setTargetAtTime(on*0.045*level, t, 0.05);
    this.ventFlutter.gain.setTargetAtTime(on*0.030*level, t, 0.06);
    /* The pitch climbs as the last of the air is squeezed out - the sound a
       bleed valve makes just before it spits water. */
    this.ventFilter.frequency.setTargetAtTime(2600+2600*level, t, 0.08);
  },

  toggle(){
    this.on=!this.on;
    if(this.humGain) this.humGain.gain.value=this.on?0.045:0;
    if(this.flowGain&&!this.on) this.flowGain.gain.value=0;
    return this.on;
  },
};

/* ---------------- shell ----------------
   Builds the topbar, canvas and guide so no level writes that markup. */
/* ---------------- level opening ----------------
   The three-beat opening level one established: a call over the intercom,
   a beat of place, then the title card, each advanced by click or ENTER.
   A level passes words; it never writes this markup, so no level can
   open differently by accident.

     {kind:'comms', tag:'...', text:'...'}
     {kind:'place', text:'...'}
     {kind:'title', eyebrow:'...', title:'...', sub:'...'}            */
function intro(beats,onDone){
  if(!beats||!beats.length){ onDone(); return null; }
  const els=beats.map((b,i)=>{
    const d=document.createElement('div'); d.className='beat';
    const hint='<div class="hint">'+(i<beats.length-1?'click or press ENTER &rarr;':'begin &rarr;')+'</div>';
    if(b.kind==='comms')
      d.innerHTML='<div class="alert-box"><div class="alert-tag">'+b.tag+
        '</div><div class="alert-text">'+b.text+'</div></div>'+hint;
    else if(b.kind==='title')
      d.innerHTML='<div class="tech-eyebrow">'+(b.eyebrow||'')+'</div>'+
        '<div class="tech-title">'+(b.title||'')+'</div>'+
        '<div class="tech-sub">'+(b.sub||'')+'</div>'+hint;
    else
      d.innerHTML='<div class="immersion">'+b.text+'</div>'+hint;
    document.body.appendChild(d);
    return d;
  });
  let n=0;
  els[0].classList.add('show');
  function next(){
    els[n].classList.remove('show');
    const done=++n>=els.length;
    if(done){ els.forEach(e=>e.remove()); cleanup(); onDone(); }
    else els[n].classList.add('show');
  }
  const key=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); next(); } };
  function cleanup(){ window.removeEventListener('keydown',key);
    els.forEach(e=>e.removeEventListener('click',next)); }
  els.forEach(e=>e.addEventListener('click',next));
  window.addEventListener('keydown',key);
  return {next};
}

/* Attach helper: these layers can be constructed before <body> exists
   (a level page puts its script in the head), so every one of them waits. */
function whenReady(fn){
  if(document.body) fn();
  else document.addEventListener('DOMContentLoaded',fn);
}

/* Fullscreen needs a user gesture, and the click at the DOS prompt is the
   first one the game ever gets - so that is where it is asked for. Inside an
   embed the request can simply be refused; treated as a nicety, and the
   FULL SCREEN button in every level's control strip can ask again later. */
function goFullscreen(){
  const d=document.documentElement;
  const req=d.requestFullscreen||d.webkitRequestFullscreen||d.msRequestFullscreen;
  if(!req) return;
  try{ const r=req.call(d); if(r&&r.catch) r.catch(()=>{}); }catch(_){}
}

/* ---------------- game chrome ----------------
   Boot and title belong to the GAME, once, not to whichever level happens
   to be first. Level one carried them, which is why level zero opened cold. */
const BOOT_LINES=[
  {t:'C:\\> ', typed:'cd GAMES\\LUNARPROC', pause:420},
  {t:'\nC:\\GAMES\\LUNARPROC> ', typed:'LUNAR.EXE', pause:520},
  {t:'\n\nLunar Process Engineer  v1.0\n', pause:260},
  {t:'(c) 199- Educational Systems Group\n\n', pause:300},
  {t:'Detecting hardware...\n', pause:340},
  {t:'  VGA 256-colour ............ OK\n', pause:200},
  {t:'  Sound device .............. OK\n', pause:200},
  {t:'  Pointing device ........... OK\n', pause:260},
  {t:'\nLoading HYDRAULICS.OVL ...\n', pause:520},
  {t:'Loading SECTION4B.DAT ...\n', pause:460},
  {t:'\nReady.\n', pause:500},
];
function boot(onDone){ whenReady(()=>_boot(onDone)); }
function _boot(onDone){
  const L=document.createElement('div'); L.id='dosLayer';
  L.innerHTML='<div id="dosText"></div>';
  document.body.appendChild(L);
  const out=L.querySelector('#dosText');
  let buf='', live=true;        // BOOT_LINES[0] writes the prompt itself
  const show=()=>out.innerHTML=buf.replace(/&/g,'&amp;').replace(/</g,'&lt;')+
    '<span class="cursor"></span>';
  show();
  function line(i){
    if(!live) return;
    if(i>=BOOT_LINES.length){ setTimeout(finish,420); return; }
    const l=BOOT_LINES[i]; buf+=l.t; show();
    if(!l.typed){ setTimeout(()=>line(i+1),l.pause); return; }
    let k=0;
    (function key(){
      if(!live) return;
      if(k<l.typed.length){ buf+=l.typed[k++]; show();
        audio.burst(1200+Math.random()*300,4,0.03,0.02);
        setTimeout(key,42+Math.random()*38); }
      else setTimeout(()=>line(i+1),l.pause);
    })();
  }
  function finish(){
    if(!live) return; live=false;
    window.removeEventListener('keydown',go);
    L.remove(); onDone();
  }
  /* Impatient players skip the whole thing; the chain must not resurrect it. */
  function skip(){ buf=BOOT_LINES.map(l=>l.t+(l.typed||'')).join(''); show(); finish(); }

  /* Three phases, as level one had them: the prompt SITS AND WAITS, your
     click starts it typing, a second click skips to the end.

     Dropping the waiting phase broke more than the feel of it. That first
     click is the user gesture every browser requires before an AudioContext
     will leave 'suspended' - without it the title screen came up silent,
     because the context had never been allowed to start. */
  let phase='waiting';
  buf='C:\\> '; show();
  function go(){
    if(phase==='waiting'){
      phase='typing';
      audio.init(); audio.resume();      // the gesture that unlocks sound
      goFullscreen();                    // ...and the only one fullscreen accepts
      buf=''; line(0);
    } else if(phase==='typing'){
      phase='done'; skip();
    }
  }
  window.addEventListener('keydown',go);
  L.addEventListener('click',go);
}
/* Title plus level select. `draw` paints a 320x200 VGA frame; `levels` is
   [{label, sub, play}] where a missing `play` renders the row disabled. */
function title(opt){ whenReady(()=>_title(opt)); }
function _title(opt){
  const L=document.createElement('div'); L.id='titleLayer';
  L.innerHTML='<canvas id="titleCv" width="320" height="200"></canvas>'+
              '<div class="hint" id="titleHint">PRESS ENTER TO START</div>';
  document.body.appendChild(L);
  /* Shown synchronously. This used to wait on requestAnimationFrame, which
     never fires in a backgrounded tab \u2014 the layer then stayed display:none,
     the canvas had no layout box, and every click hit-test divided by a
     zero width. There is no transition on this layer to wait for. */
  L.classList.add('show');
  const cv=L.querySelector('#titleCv'), tg=cv.getContext('2d');
  let swOn=false;
  const paint=()=>{ opt.draw(tg); if(opt.toggle) art.toggleSwitch(tg,opt.toggle.x,opt.toggle.y,swOn); };
  paint();

  /* The title is only a title. START takes you to a separate screen that
     lists the assignments, which is the shape this era's games used and
     keeps the art uncluttered. */
  const hint=L.querySelector('#titleHint');
  let gone=false;
  function start(){
    if(gone) return; gone=true;
    if(opt.secret && opt.secret.close) opt.secret.close();   // the jam strip goes with the title
    L.remove();
    _select(opt);
  }

  /* An easter egg, per the handoff: the habitat's status lamp is a real
     click target. Everything else on the art advances to the menu. */
  cv.addEventListener('click',e=>{
    audio.init(); audio.resume();
    const r=cv.getBoundingClientRect();
    const x=(e.clientX-r.left)*(320/r.width), y=(e.clientY-r.top)*(200/r.height);
    if(opt.toggle && Math.abs(x-opt.toggle.x)<4.5 && Math.abs(y-opt.toggle.y)<7){
      swOn=!swOn; paint();
      audio.clack(swOn);
      if(swOn) setTimeout(()=>audio.powerUp(),90);   // snap first, then it comes alive
      opt.toggle.set(swOn,L);
      return;
    }
    start();
  });
  L.addEventListener('click',e=>{ if(e.target===L||e.target===hint){ audio.init(); audio.resume(); start(); } });
  window.addEventListener('keydown',function k(e){
    if(!document.getElementById('titleLayer')){ window.removeEventListener('keydown',k); return; }
    if(e.key==='Enter'||e.key===' '){ audio.init(); audio.resume(); start(); }
  });
  /* Music on the title.
     Two things used to stop this. The audio context was only created by the
     boot's SKIP handlers, so a player who simply watched the boot through
     arrived with no context at all and startMusic() bailed. And even with a
     context, browsers keep it suspended until a real user gesture, so the
     first attempt can silently produce nothing. Hence: open the context
     here, try now, and try again on the first gesture of any kind.
     Starting twice is harmless - startMusic() returns early if already running. */
  audio.init(); audio.resume();
  const begin=()=>{ audio.resume(); if(opt.onEnter) opt.onEnter(); };
  begin();
  if(!audio.ctx || audio.ctx.state!=='running'){
    const retry=()=>{ begin();
      document.removeEventListener('pointerdown',retry);
      document.removeEventListener('keydown',retry); };
    document.addEventListener('pointerdown',retry);
    document.addEventListener('keydown',retry);
  }
}

/* ---------------- assignment select ----------------
   Its own screen, reached from START. The music keeps running across it and
   only stops when a level actually begins. */
function _select(opt){
  const L=document.createElement('div'); L.id='selectLayer';
  L.innerHTML='<div class="tech-eyebrow">LUNAR PROCESS ENGINEER</div>'+
              '<div class="sel-title">SELECT ASSIGNMENT</div>'+
              '<div id="menu"></div>'+
              '<div class="hint" id="selHint">ESC for the title</div>';
  document.body.appendChild(L);
  L.classList.add('show');
  const m=L.querySelector('#menu');
  opt.levels.forEach((lv,i)=>{
    const run=lv.start||lv.play;          // a level registers `start`
    const b=document.createElement('button');
    b.innerHTML=lv.label+(lv.sub?'  <span class="no">'+lv.sub+'</span>':'');
    b.disabled=!run;
    b.onclick=()=>{ audio.init(); audio.resume();
      window.removeEventListener('keydown',key);
      if(opt.onLeave) opt.onLeave();      // music stops as the level starts
      L.remove(); launch(opt,i); };
    m.appendChild(b);
  });
  function key(e){
    if(e.key==='Escape'){ window.removeEventListener('keydown',key); L.remove(); _title(opt); }
  }
  window.addEventListener('keydown',key);
  const first=m.querySelector('button:not([disabled])');
  if(first) setTimeout(()=>first.focus(),60);
}

/* Launching is the one place that knows which assignment is running, so it
   is the one place that can answer "what comes after this". Levels are
   started through here and nowhere else. */
function launch(opt,i){
  const lv=opt.levels[i], run=lv&&(lv.start||lv.play);
  if(!run) return;
  LPE_NAV={levels:opt.levels, idx:i, opt};
  run();
}

function mount(o){
  /* The rig draws in a fixed 900x400 coordinate space - every level's
     geometry, every label position, pt() and the water model all assume it.
     So the canvas is given a BIGGER BACKING STORE and the context is scaled
     to match, rather than the coordinate space being changed. Levels keep
     working in logical units; text and arcs are rasterised at RES times the
     resolution, so the rig can be displayed large without going soft.
     One more than the device pixel ratio, capped: enough to stay crisp on a
     HiDPI panel without allocating a pointlessly huge buffer. */
  const RES=Math.min(3, Math.max(2, Math.round(window.devicePixelRatio||1)+1));
  const root=document.createElement('div'); root.className='wrap';
  root.innerHTML=
    '<div class="topbar"><div class="t1"></div><div class="t2"></div></div>'+
    '<canvas class="rig" width="'+(o.w||900)*RES+'" height="'+(o.h||400)*RES+'" tabindex="0"></canvas>'+
    /* The controls used to be absolutely positioned INSIDE the guide box.
       The task line reserved 310px of padding to dodge them; the lesson line
       reserved nothing, so every long coaching paragraph ran underneath the
       buttons. Reserving padding on the lesson too would only have moved the
       collision. They are not instruction, so they are not in the box. */
    '<div class="guide"><div class="task"></div><div class="lesson"></div></div>'+
    '<div class="ctl"><span class="count"></span><span class="ctl-btns">'+
      '<button data-a="sound">SOUND: ON</button>'+
      '<button data-a="fs">FULL SCREEN</button>'+
      '<button data-a="reset">RESET</button>'+
    '</span></div>';
  /* The canvas and listeners work while detached, so only the attach is
     deferred. Levels can therefore mount from anywhere in the document
     without caring whether <body> exists yet. */
  if(o.intro && o.intro.length) root.classList.add('pending');
  if(document.body) document.body.appendChild(root);
  else document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(root));
  const q=s=>root.querySelector(s);

  /* When a gesture began. A hand wheel drag runs for many frames, so a
     lesson triggered BY that drag opens while the finger is still down -
     and the click that ends the drag then bubbles up and dismisses the
     lesson nobody has read yet. Holding the text was never the fix on its
     own; the text was being thrown away by the same gesture that earned it.
     A hold started mid-gesture ignores exactly one click: the one that
     completes the gesture already in progress when it opened. */
  let lastDownAt=0;
  root.addEventListener('pointerdown',()=>{ lastDownAt=performance.now(); },true);
  q('.t1').textContent=o.t1||''; q('.t2').textContent=o.t2||'';
  const cv=q('canvas.rig');

  /* Scale once, here. Nothing in a level touches the transform. Smoothing
     stays OFF so the hand-authored background - wall panels, rivets, the
     Bayer vignette, all built at 1x - lands as clean blocks rather than
     being interpolated into mush. Text and pipework, drawn straight into
     the scaled context, get the full resolution. */
  const _ctx=cv.getContext('2d');
  _ctx.setTransform(RES,0,0,RES,0,0);
  _ctx.imageSmoothingEnabled=false;

  const S={
    canvas:cv, ctx:_ctx, w:o.w||900, h:o.h||400, res:RES,
    say(task,lesson){ q('.task').innerHTML=task||''; q('.lesson').innerHTML=lesson||''; },
    count(t){ q('.count').textContent=t||''; },
    /* A beat holds what just happened on screen until the player says go.
       Levels used to flash the lesson and replace it on a 1.5s timer, which
       is nowhere near long enough to read a paragraph - and the length of
       the wait is a property of the TEMPLATE, not something each level
       should be inventing a number for. Returns true while it is holding,
       so a level's step check can stand down rather than racing it. */
    beat(lesson,then){
      if(S._holding) return;
      S._holding=true;
      q('.task').innerHTML='<span class="beat-hint">continue &rarr;</span>';
      q('.lesson').innerHTML=lesson||'';
      const openedAt=performance.now();
      const go=e=>{
        if(e.type==='keydown' && e.key!=='Enter' && e.key!==' ') return;
        /* The click that finishes the drag which opened this lesson is not
           the player asking to move on - they have not read a word yet. */
        if(e.type==='click' && lastDownAt<openedAt) return;
        e.preventDefault();
        drop();
        S._holding=false; if(then) then();
      };
      function drop(){ window.removeEventListener('keydown',go);
                       root.removeEventListener('click',go); S._holdDrop=null; }
      S._holdDrop=drop;
      window.addEventListener('keydown',go);
      root.addEventListener('click',go);
    },
    get holding(){ return !!S._holding; },
    get done(){ return !!S._done; },
    /* A fork the player is asked to make out loud, in the coach's voice.
       Same hold as `beat` - the rig keeps running underneath, nothing
       advances until they answer - but with named options instead of a
       continue. The choice itself is the teaching: which one they pick is
       allowed to be wrong, and the coach is allowed to say so. */
    ask(o2){
      if(S._holding) return;
      S._holding=true;
      q('.task').innerHTML='<span class="beat-hint">your call &rarr;</span>';
      q('.lesson').innerHTML=(o2.lesson||'')+'<div class="choice"></div>';
      const box=q('.choice');
      o2.options.forEach(opt=>{
        const b=document.createElement('button');
        b.innerHTML=opt.label+(opt.note?'  <span class="no">'+opt.note+'</span>':'');
        /* stopPropagation matters: the option sits INSIDE the level root, and
           whatever `pick` opens next - almost always a beat - binds its own
           dismiss handler on that same root. Let this click carry on
           bubbling and it dismisses the reply before the player can read a
           word of it. The coach's answer came back blank every time. */
        b.onclick=ev=>{ ev.stopPropagation();
          box.querySelectorAll('button').forEach(x=>x.disabled=true);
          S._holding=false; audio.clack&&audio.clack(); opt.pick(); };
        box.appendChild(b);
      });
      const first=box.querySelector('button');
      if(first) setTimeout(()=>first.focus(),60);
    },
    /* The end of an assignment. Both levels used to just stop - set the
       counter to DONE and sit there - so the only way out of a finished
       level was reloading the page and walking the boot sequence again.
       There was no route from level zero to level one either; this was
       never a gap that appeared when a third level turned up.
       Where you go next is a property of the TEMPLATE. A level says it is
       over and what the coach signs off with; it does not decide what
       follows it, and it does not know a menu exists. */
    finish(f){
      if(S._done) return; S._done=true;
      f=f||{};
      S.say('', f.lesson||'');
      S.count('DONE');
      const nx=LPE_NAV.levels[LPE_NAV.idx+1],
            nxRun=nx&&(nx.start||nx.play),
            back=LPE_NAV.opt;
      const d=document.createElement('div'); d.className='beat';
      d.innerHTML='<div class="tech-eyebrow">ASSIGNMENT COMPLETE</div>'+
        '<div class="tech-title">'+(o.t1||'')+'</div>'+
        (f.line?'<div class="immersion">'+f.line+'</div>':'')+
        '<div class="dmenu"></div>';
      const dm=d.querySelector('.dmenu');
      const add=(html,fn)=>{ const b=document.createElement('button');
        b.innerHTML=html; b.onclick=fn; dm.appendChild(b); return b; };
      const leave=go=>()=>{ cleanup(); d.remove(); S.destroy(); go(); };
      if(nxRun) add('NEXT ASSIGNMENT  <span class="no">'+nx.label+'</span>',
                    leave(()=>launch(back,LPE_NAV.idx+1)));
      if(back) add('SELECT ASSIGNMENT', leave(()=>_select(back)));
      /* Players poke at a rig they have just solved, and taking it away the
         instant the last step passes is the wrong reward. The card steps
         aside; the level is still underneath it, still running. */
      add('STAY ON THE RIG', ()=>{ cleanup(); d.remove();
        /* Say so. The rig unlocking is a real change of state and the
           player has no other way to find out it happened. */
        q('.task').innerHTML='<span class="free">The rig is yours &mdash; '+
          'every valve is unlocked.</span>'; });
      function key(e){ if(e.key==='Escape'){ cleanup(); d.remove(); } }
      function cleanup(){ window.removeEventListener('keydown',key); }
      window.addEventListener('keydown',key);
      document.body.appendChild(d);
      d.classList.add('show');   // synchronous: a backgrounded tab runs no rAF
      const first=dm.querySelector('button');
      if(first) setTimeout(()=>first.focus(),60);
    },
    pt(e){ const r=cv.getBoundingClientRect();
      return {x:(e.clientX-r.left)*(S.w/r.width), y:(e.clientY-r.top)*(S.h/r.height)}; },
  };

  q('[data-a="sound"]').onclick=e=>{ e.target.textContent='SOUND: '+(audio.toggle()?'ON':'OFF'); };
  /* Reset puts the assignment back to un-finished, and cancels whatever the
     strip was waiting on. Without the cancel, resetting mid-lesson left
     `_holding` stuck true - so the level could never speak again - and left
     the old handler bound, so a later click would fire a step transition
     belonging to a run that no longer exists. */
  q('[data-a="reset"]').onclick=()=>{
    if(S._holdDrop) S._holdDrop();
    S._holding=false; S._done=false;
    if(o.onReset) o.onReset();
  };
  const fsOn=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);
  const fsBtn=q('[data-a="fs"]');
  fsBtn.onclick=()=>{
    const d=document.documentElement;
    const fn=fsOn()?(document.exitFullscreen||document.webkitExitFullscreen)
                   :(d.requestFullscreen||d.webkitRequestFullscreen);
    if(!fn) return;
    try{ const r=fn.call(fsOn()?document:d); if(r&&r.catch) r.catch(()=>{}); }catch(_){}
  };
  const sync=()=>{ fsBtn.style.display=document.fullscreenEnabled!==false?'':'none';
                   fsBtn.textContent=fsOn()?'EXIT FULL SCREEN':'FULL SCREEN'; };
  document.addEventListener('fullscreenchange',sync);
  document.addEventListener('webkitfullscreenchange',sync);
  sync();

  /* One clock for everything, so a level never starts its own loop.
     `pump` advances a single frame by hand. requestAnimationFrame does not
     fire in a backgrounded tab, so without this the simulation cannot be
     stepped or inspected outside a visible window. */
  let last=0, t=0, live=true;
  S.pump=function(dt){ t+=dt; if(o.step) o.step(dt); if(o.draw) o.draw(S.ctx,dt,t); };
  function frame(ts){
    if(!live) return;                      // a torn-down level stops simulating
    const dt=last?Math.min(0.05,(ts-last)/1000):0; last=ts;
    S.pump(dt);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  LPE_CURRENT=S;

  /* Until levels could follow one another, nothing ever had to come down,
     so nothing ever did: the clock ran forever and the fullscreen listeners
     stayed bound. Mounting a second level on top of that would have left the
     first one simulating and drawing into a canvas no longer in the document. */
  S.destroy=function(){
    if(!live) return; live=false;
    document.removeEventListener('fullscreenchange',sync);
    document.removeEventListener('webkitfullscreenchange',sync);
    audio.flow(0);                         // the level's flow hum goes with it
    root.remove();
    if(LPE_CURRENT===S) LPE_CURRENT=null;
  };

  const start=()=>{ root.classList.remove('pending'); if(o.onStart) o.onStart(); };
  if(o.intro && o.intro.length){
    const run=()=>intro(o.intro,start);
    if(document.body) run(); else document.addEventListener('DOMContentLoaded',run);
  }
  return S;
}

return {palette:P, art, Line, pipeRun, penetration, valveBody, handWheel, gauge,
        piping, pipes, valveShell, valveTrim, WHEEL_SWEEP, audio, intro, mount, boot, title,
        get current(){ return LPE_CURRENT; }};
})();
