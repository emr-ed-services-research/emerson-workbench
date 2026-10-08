/* ---------------- SUBJECTS ----------------
   The real figures, not redrawn.

   The first pass hand-derived each silhouette from the cutaways. That was
   the wrong call twice over: these are Emerson's own figures of Emerson's
   own products, sitting in this vault, for an Emerson engineer's office
   wall — there was nothing to work around — and a drawing traced by eye
   from a reference is always going to be worse than the reference.

   Each figure is cropped to its subject, the paper knocked out to alpha so
   it sits on the backdrop, and mapped through a Fisher-green duotone so a
   greyscale press figure reads as painted hardware. Geometry is untouched.
*/
const FIGDIR = 'figures/';
const IMGCACHE = {};

function loadFig(src){
  if(IMGCACHE[src]) return IMGCACHE[src];
  const im = new Image();
  im.decoding = 'sync';
  im.src = FIGDIR + src + '.png';
  IMGCACHE[src] = im;
  return im;
}

/* Knock the paper out and remap the greys.

   Threshold, not a luminance-to-alpha ramp: a ramp makes every midtone
   semi-transparent and the shading inside a cutaway goes to mush. Only
   near-white, low-saturation pixels are cut, with a short feather so the
   antialiased edges of the linework do not come out jagged. */
const DUO = [
  [0.00, [ 10, 28, 18]],   // deepest shadow in the section
  [0.42, [ 43, 93, 59]],   // --fisher-green
  [0.74, [122,170,133]],
  [1.00, [226,238,228]],   // highlights and cut faces
];
function duotone(t){
  for(let i=1;i<DUO.length;i++){
    if(t<=DUO[i][0]||i===DUO.length-1){
      const [a,ca]=DUO[i-1], [b,cb]=DUO[i], k=(t-a)/(b-a||1);
      return [ca[0]+(cb[0]-ca[0])*k, ca[1]+(cb[1]-ca[1])*k, ca[2]+(cb[2]-ca[2])*k];
    }
  }
}
const DUOLUT = (()=>{ const L=new Uint8Array(256*3);
  for(let v=0;v<256;v++){ const c=duotone(v/255);
    L[v*3]=c[0]; L[v*3+1]=c[1]; L[v*3+2]=c[2]; } return L; })();

const CUTCACHE = {};
function cutout(im, src, crop, tint){
  const key = src+'|'+crop.join(',')+'|'+(tint!==false);
  if(CUTCACHE[key]) return CUTCACHE[key];
  const sx=Math.round(im.naturalWidth *crop[0]), sy=Math.round(im.naturalHeight*crop[1]);
  const sw=Math.round(im.naturalWidth *(crop[2]-crop[0]));
  const sh=Math.round(im.naturalHeight*(crop[3]-crop[1]));
  if(!sw||!sh) return null;
  const cv=document.createElement('canvas'); cv.width=sw; cv.height=sh;
  const g=cv.getContext('2d',{willReadFrequently:true});
  g.drawImage(im, sx,sy,sw,sh, 0,0,sw,sh);
  let d;
  try{ d=g.getImageData(0,0,sw,sh); }catch(e){ return null; }
  const p=d.data;
  for(let i=0;i<p.length;i+=4){
    const r=p[i], gr=p[i+1], b=p[i+2];
    const lum=(r*0.299+gr*0.587+b*0.114);
    const sat=Math.max(r,gr,b)-Math.min(r,gr,b);
    if(sat<26){                                  // paper and ink are neutral
      if(lum>=244){ p[i+3]=0; continue; }
      if(lum>228){ p[i+3]=Math.round(p[i+3]*(244-lum)/16); }
    }
    if(tint!==false){
      const v=Math.round(lum)|0;
      p[i]=DUOLUT[v*3]; p[i+1]=DUOLUT[v*3+1]; p[i+2]=DUOLUT[v*3+2];
    }
  }
  g.putImageData(d,0,0);
  CUTCACHE[key]=cv;
  return cv;
}

/* Place a figure on the plate: fit it to a fraction of the frame height,
   sit it on the ground line, and give it the same cast shadow every other
   object in this calendar gets. */
function placeFig(c,W,H,o){
  const im = loadFig(o.src);
  if(!im.complete || !im.naturalWidth) return false;
  const cut = cutout(im, o.src, o.crop, o.tint);
  if(!cut) return false;
  /* Fit by height, but never let a wide subject run off the plate: the
     A31A is mostly extended bonnet and at a height that suited the
     uprights it pushed both flanges past the frame. */
  let fh = H*(o.h||0.72), fw = fh*cut.width/cut.height;
  const maxW = W*(o.w||0.88);
  if(fw > maxW){ fh *= maxW/fw; fw = maxW; }
  const cx = W*(o.x===undefined?0.44:o.x);
  const by = H*(o.y===undefined?0.90:o.y);
  c.save();
  c.globalAlpha=.30; c.fillStyle='#000';
  c.beginPath(); c.ellipse(cx, by+H*0.012, fw*0.46, H*0.022, 0,0,7); c.fill();
  c.restore();
  c.save();
  c.shadowColor='rgba(0,0,0,.42)'; c.shadowBlur=H*0.035; c.shadowOffsetY=H*0.012;
  c.drawImage(cut, cx-fw/2, by-fh, fw, fh);
  c.restore();
  return true;
}

/* Crops are fractions of each source figure, chosen to hold the subject and
   leave the caption and the callout column outside the frame. */
const FIGS = {
  a657:      {src:'ch11-fig3-nps4-eh-hp-657-actuator-dvc6010',        crop:[0.26,0.03,0.68,0.84], h:0.86, x:0.42},
  a667:      {src:'ch8-fig11-667-hp-control-valve',                   crop:[0.24,0.01,0.74,0.73], h:0.86, x:0.42},
  v150:      {src:'ch11-fig8-vee-ball-v150-2052-actuator-dvc6200',    crop:[0.20,0.08,0.95,0.84], h:0.74, x:0.45},
  et:        {src:'ch1-fig3-large-et-drilled-cage-cutaway',           crop:[0.26,0.00,0.70,0.725], h:0.82, x:0.43},
  b8560:     {src:'ch11-fig6-8580-valve-2052-actuator-dvc6000',       crop:[0.14,0.05,0.98,0.84], h:0.74, x:0.46},
  baumann:   {src:'ch1-fig5-baumann-24000-little-scotty-valve',       crop:[0.18,0.01,0.95,0.79], h:0.84, x:0.42},
  dvc:       {src:'ch2-fig12-fieldvue-digital-valve-controller',      crop:[0.06,0.03,0.94,0.82], h:0.72, x:0.45},
  v500:      {src:'ch2-fig4-1061-double-acting-piston',               crop:[0.06,0.03,0.94,0.82], h:0.72, x:0.45},
  whisperflo:{src:'ch10-fig5-et-class300-whisperflo-spoked-plug',     crop:[0.20,0.03,0.88,0.88], h:0.82, x:0.43},
  notchflo:  {src:'ch12-fig5-notchflo-dst-trim-cutaway',              crop:[0.25,0.05,0.80,0.86], h:0.82, x:0.43},
  ehd:       {src:'ch1-fig4-ehd-high-pressure-globe-cutaway',         crop:[0.12,0.04,0.88,0.87], h:0.84, x:0.42},
  v250:      {src:'ch14-fig3-a31a-cryogenic-valve',                   crop:[0.06,0.02,0.94,0.84], h:0.82, x:0.44},
};

const SUBJ = {};
Object.entries(FIGS).forEach(([k,o])=>{ SUBJ[k]=(c,W,H)=>placeFig(c,W,H,o); });

/* The cover: the four best-known shapes in a line on the sand, as
   silhouettes cut from the same figures. */
SUBJ.covershot = (c,W,H)=>{
  const line=[['a657',0.20,0.56],['et',0.42,0.52],['b8560',0.64,0.26],['v150',0.85,0.34]];
  let all=true;
  line.forEach(([k,x,h])=>{
    const o=FIGS[k], im=loadFig(o.src);
    if(!im.complete||!im.naturalWidth){ all=false; return; }
    const cut=cutout(im,o.src,o.crop,o.tint);
    if(!cut){ all=false; return; }
    const fh=H*h, fw=fh*cut.width/cut.height, by=H*0.86;
    c.save(); c.globalAlpha=.28; c.fillStyle='#000';
    c.beginPath(); c.ellipse(W*x,by+H*0.012,fw*0.46,H*0.018,0,0,7); c.fill(); c.restore();
    // drawn as a flat silhouette so the line-up reads as one graphic
    const t=document.createElement('canvas'); t.width=cut.width; t.height=cut.height;
    const tg=t.getContext('2d');
    tg.drawImage(cut,0,0);
    tg.globalCompositeOperation='source-in';
    tg.fillStyle='#12241A'; tg.fillRect(0,0,t.width,t.height);
    c.drawImage(t, W*x-fw/2, by-fh, fw, fh);
  });
  c.fillStyle='rgba(255,214,160,.24)'; c.fillRect(0,H*0.86,W,H*0.14);
  return all;
};
