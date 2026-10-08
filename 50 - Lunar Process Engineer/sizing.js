/* ============================================================
   LEVEL SIZING \u2014 pick real values for a real application.

   A level's constants are DERIVED here, not chosen to make the arithmetic
   pretty. The first pass at Bay 3 did the opposite: Cv 7 / 4 / 2.2 were
   picked because they balanced nicely, and the bay turned out to deliver
   46.8 gpm \u2014 2,800 gal/hour through three hydroponic beds, on a colony
   whose own narration says the water is counted.

   Run this before writing a level. Every number it prints is traceable to
   either a cited source or an equation on the line above it.
   ============================================================ */

/* ---- sources on disk ----
   Pipe: ASME B36.10M, via Fisher Control Valve Handbook 6th ed. \u00a714.2,
   "Identification, wall thickness, and weights are extracted from ASME
   B36.10M". Schedule 40 / STD rows, bore in inches, flow area in ft^2. */
const PIPE = {
  '3/8': { od:0.675, wall:0.091, bore:0.493, area:0.00133 },
  '1/2': { od:0.840, wall:0.109, bore:0.622, area:0.00211 },
  '3/4': { od:1.050, wall:0.113, bore:0.824, area:0.00370 },
  '1'  : { od:1.315, wall:0.133, bore:1.049, area:0.00600 },
};

/* Schedule 80 / XS, same source. The bench needs a matched pair at one
   nominal size to show that the nominal number fixes the outside and not
   the hole: NPS 3/8 is 0.675 OD on both, and the wall does the rest. */
const PIPE80 = {
  '3/8': { od:0.675, wall:0.126, bore:0.423, area:0.00098 },
};

const GPM_TO_CFS = 1/448.831;
const vel = (gpm, area) => gpm*GPM_TO_CFS/area;          // ft/s

/* ---- the application ----
   Nutrient-film technique: each channel runs 1-2 L/min; a bed carries
   roughly six channels. 6 x 1.3 L/min = 7.8 L/min = 2.06 gpm. */
const BEDS = 3;
const Q_BED = 2.0;                       // gpm per bed, design
const Q_BAY = BEDS * Q_BED;

/* Micro-irrigation headers run 10-25 psi, not mains pressure. 15 psig at
   the manifold is the design point; the supply reaches the bay at 60 psig
   and the path into it accounts for the difference. */
const P_SUP = 60;                        // psig at the bay inlet
const P_MAN = 15.2;                      // psig at the manifold, design

/* ---- line sizing: velocity must land in the design band ---- */
const BAND = [2.0, 8.0];                 // ft/s for small service water
function pick(gpm, label){
  const rows = Object.entries(PIPE).map(([nps,p]) => ({nps, p, v:vel(gpm,p.area)}));
  const ok = rows.filter(r => r.v>=BAND[0] && r.v<=BAND[1]);
  const best = ok.sort((a,b)=>a.p.area-b.p.area)[0];     // smallest that passes
  console.log('  '+label+' at '+gpm.toFixed(1)+' gpm');
  rows.forEach(r=>console.log('    NPS '+r.nps.padEnd(4)+' bore '+r.p.bore.toFixed(3)+
    '  v = '+r.v.toFixed(2).padStart(5)+' ft/s   '+
    (r===best?'<-- chosen (smallest in band)':(r.v>BAND[1]?'too fast':'oversized'))));
  return best;
}

console.log('APPLICATION: '+BEDS+' NFT beds, '+Q_BED.toFixed(1)+' gpm each, '+
            Q_BAY.toFixed(1)+' gpm for the bay ('+(Q_BAY*60).toFixed(0)+' gal/h)');
console.log('\nLINE SIZING (ASME B36.10M Sch 40, velocity band '+BAND[0]+'-'+BAND[1]+' ft/s)');
const BR   = pick(Q_BED, 'branch to one bed');
const MAIN = pick(Q_BAY, 'bay main');

/* ---- Cv, derived from duty ----
   Liquid sizing, SG = 1: q = Cv*sqrt(dP)  ->  Cv = q/sqrt(dP). */
const cvBranch = Q_BED / Math.sqrt(P_MAN);
const cvMain   = Q_BAY / Math.sqrt(P_SUP - P_MAN);
console.log('\nCv FROM DUTY  (Cv = q/sqrt(dP), SG=1)');
console.log('  branch : '+Q_BED.toFixed(1)+' gpm across '+P_MAN.toFixed(1)+
  ' psi  -> Cv = '+cvBranch.toFixed(4));
console.log('    (lumps the hand valve with the bed\'s own emitter manifold - at full');
console.log('     open the BED is the limit, which is why opening a valve wide does');
console.log('     not flood a tray)');
console.log('  supply : '+Q_BAY.toFixed(1)+' gpm across '+(P_SUP-P_MAN).toFixed(1)+
  ' psi  -> Cv = '+cvMain.toFixed(4));
console.log('    (lumps the bay isolation valve with the run in from the reservoir;');
console.log('     a turbulent pipe run has dP proportional to q^2, so it behaves as a');
console.log('     fixed Cv just as a valve does)');

/* ---- the restriction in line 3 ----
   Sized by what it must DO: halve bed 3. Series Cv: 1/Cv^2 = sum 1/Cvi^2. */
const target = cvBranch/2;
const cvRed  = 1/Math.sqrt(1/(target*target) - 1/(cvBranch*cvBranch));
console.log('\nTHE RESTRICTION IN LINE 3');
console.log('  must take bed 3 from '+cvBranch.toFixed(4)+' to '+target.toFixed(4)+
  ' -> Cv = '+cvRed.toFixed(4));

/* Throat bore from Cv. Cv = 29.9*d^2/sqrt(K), d in inches.
   Sudden contraction then expansion, referenced to throat velocity:
   Kc = 0.5(1-beta^2), Ke = (1-beta^2)^2, with beta = d_throat/d_pipe. */
let beta = 0.3;
for(let i=0;i<60;i++){
  const b2=beta*beta, K=0.5*(1-b2)+Math.pow(1-b2,2);
  const d=Math.sqrt(cvRed*Math.sqrt(K)/29.9);
  beta = d/BR.p.bore;
}
const b2=beta*beta, K=0.5*(1-b2)+Math.pow(1-b2,2), dThroat=beta*BR.p.bore;
console.log('  K = 0.5(1-b^2) + (1-b^2)^2 = '+K.toFixed(3)+'  (contraction + expansion)');
console.log('  Cv = 29.9 d^2 / sqrt(K)  ->  throat = '+dThroat.toFixed(3)+' in'+
  '   (beta = '+beta.toFixed(3)+' of a '+BR.p.bore.toFixed(3)+' bore)');
console.log('  velocity through the throat at '+(Q_BED/2).toFixed(2)+' gpm: '+
  vel(Q_BED/2, Math.PI*Math.pow(dThroat/24,2)).toFixed(1)+' ft/s');

console.log('\nDRAWING: the cutaway bore radii should follow the same ratios');
const R_BR=10;
console.log('  R_BR     = '+R_BR+' px  (NPS '+BR.nps+', bore '+BR.p.bore.toFixed(3)+')');
console.log('  R_MAIN   = '+(R_BR*MAIN.p.bore/BR.p.bore).toFixed(1)+
  ' px  (NPS '+MAIN.nps+', bore '+MAIN.p.bore.toFixed(3)+')');
console.log('  RED_R    = '+(R_BR*beta).toFixed(1)+' px  (the throat)');

console.log('\n=== CONSTANTS FOR THE LEVEL ===');
console.log('const P_SUP='+P_SUP+', SG=1.0;');
console.log('const CV_MAIN_MAX='+cvMain.toFixed(3)+
            ', CV_BR_MAX='+cvBranch.toFixed(3)+
            ', CV_REDUCER='+cvRed.toFixed(3)+';');

/* ---- is the restriction cavitating? ----
   It matters: cavitation sounds like gravel and erodes metal, turbulent
   rush just hisses, and the game must not teach the wrong tell. */
const Pv=0.34, Pc=3200, FF=0.96-0.28*Math.sqrt(Pv/Pc);
console.log('\nCAVITATION CHECK at the restriction  (dP_allow = FL^2 (P1 - FF*Pv))');
for(const [label,pMan,q] of [['wide open',19.9,1.08],['balanced',35.7,1.44/2]]){
  const dP=Math.pow(q/cvRed,2), P1=pMan+14.7;
  for(const FL of [0.9,0.7,0.6]){
    const allow=FL*FL*(P1-FF*Pv);
    console.log('  '+label.padEnd(10)+' dP '+dP.toFixed(1).padStart(5)+' psi   FL '+FL+
      '  allow '+allow.toFixed(1).padStart(5)+'  -> '+(dP>=allow?'CAVITATES':'no'));
  }
}
console.log('  An orifice recovers well (low FL), so this sits near the threshold at');
console.log('  the wide-open condition. Turbulent rush is the honest sound today;');
console.log('  the margin is thin enough to be worth a later level on its own.');
