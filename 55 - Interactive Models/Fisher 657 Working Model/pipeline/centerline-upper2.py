# -*- coding: utf-8 -*-
"""Upper casing reconstructed as a constant-thickness shell.
Centerline: ridge of the painted band, left half fitted smooth (Schneider,
horizontal tangent at CX), mirrored right. Edges = centerline +- t/2.
Slots re-punched as clean holes; top protrusions re-added as rectangular
detours measured from the mask."""
import cv2, json, math, sys, base64
import numpy as np
sys.path.insert(0, "_fairing-experiments")
from fair3 import fit_cubic, _bez

CX = 742.5

def symmetrize(m, cx):
    H, W = m.shape
    M = np.float32([[-1, 0, 2*cx], [0, 1, 0]])
    return cv2.bitwise_or(m, cv2.warpAffine(m, M, (W, H)))

mask = symmetrize(cv2.imread("parts2/upper-diaphragm-casing.png", cv2.IMREAD_GRAYSCALE), CX)
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))
Hm, Wm = mask.shape

D = cv2.distanceTransform((mask > 0).astype(np.uint8), cv2.DIST_L2, 5)
dil = cv2.dilate(D, np.ones((3,3), np.float32))
ridge = (D >= dil - 0.01) & (D > 6.0)
ys, xs = np.nonzero(ridge)
pts = np.stack([xs, ys], 1).astype(float)

# left half band only: exclude slot neighborhoods and the center boss zone
# (shell continues beneath/behind those features; centerline interpolates)
sel = (pts[:, 0] < 682) & ~((pts[:, 0] > 494) & (pts[:, 0] < 612))
P = pts[sel]

# walk from left lip tip, bridging slot gaps
start = int(np.lexsort((P[:,1], P[:,0]))[0])
remaining = P.copy()
order = [remaining[start]]
remaining = np.delete(remaining, start, axis=0)
while len(remaining):
    d = np.linalg.norm(remaining - order[-1], axis=1)
    j = d.argmin()
    if d[j] > 130: break
    order.append(remaining[j])
    remaining = np.delete(remaining, j, axis=0)
path = np.array(order)
print(f"left path: {len(path)} pts, {path[0]} -> {path[-1]}")

# thickness from band (exclude bridged zones by using median)
t_all = np.array([2*D[int(round(p[1])), int(round(p[0]))] for p in path])
t0 = float(np.median(t_all))
t = float(np.median(t_all[np.abs(t_all-t0) < 0.25*t0]))
print(f"wall thickness {t:.1f}px")

# light smoothing then Schneider fit; end tangent horizontal at the CX end
Q = path.copy()
for _ in range(6):
    Q[1:-1] = 0.25*Q[:-2] + 0.5*Q[1:-1] + 0.25*Q[2:]
# ensure ascending toward CX at the end; tangents:
t_start = Q[1] - Q[0]; t_start /= np.linalg.norm(t_start)
segs = fit_cubic(Q[::3].copy(), t_start, np.array([-1.0, 0.0]), 2.0)
print(f"left centerline: {len(segs)} bezier segs")

# sample left fit densely, force last point to x=CX via extension
samp = []
for ctrl in segs:
    for tt in np.linspace(0, 1, 40, endpoint=False):
        samp.append(_bez(ctrl, tt))
samp.append(np.array(segs[-1][3]))
L = np.array(samp)
# extrapolate along the end tangent to CX, then mirror; smooth the joint
tan = L[-1] - L[-6]
tan = tan / max(tan[0], 1e-6)
if L[-1][0] < CX:
    xs_ext = np.arange(L[-1][0]+2, CX+0.1, 2.0)
    ext = np.stack([xs_ext, L[-1][1] + (xs_ext-L[-1][0])*tan[1]], 1)
    L = np.vstack([L, ext])
R = L[::-1].copy()
R[:, 0] = 2*CX - R[:, 0]
C = np.vstack([L, R[1:]])
# smooth the mirror joint so the tangent is continuous at CX
jm = len(L)
lo, hi = max(0, jm-25), min(len(C), jm+25)
seg = C[lo:hi].copy()
for _ in range(30):
    seg[1:-1] = 0.25*seg[:-2] + 0.5*seg[1:-1] + 0.25*seg[2:]
C[lo:hi] = seg

# offsets +- t/2 along normals
def offset(poly, dist):
    nrm = np.zeros_like(poly)
    d = np.gradient(poly, axis=0)
    ln = np.linalg.norm(d, axis=1, keepdims=True); ln[ln==0] = 1
    d /= ln
    nrm[:, 0] = -d[:, 1]; nrm[:, 1] = d[:, 0]
    return poly + nrm*dist

outer = offset(C, -t/2)   # normal orientation: check below
inner = offset(C, t/2)
# make sure 'outer' is the upper edge (smaller y at center)
mid = len(C)//2
if outer[mid][1] > inner[mid][1]:
    outer, inner = inner, outer

# top protrusions: mask material above the outer edge
prot = []
outer_y_at = {}
for p in outer:
    outer_y_at[int(round(p[0]))] = p[1]
zones = []
run = None
for x in range(int(C[:,0].min()), int(C[:,0].max())):
    if x not in outer_y_at: continue
    col = np.nonzero(mask[:, x])[0]
    if not len(col): continue
    top = col.min()
    if outer_y_at[x] - top > 5:   # material above the shell edge
        if run is None: run = [x, x, top]
        else: run[1] = x; run[2] = min(run[2], top)
    else:
        if run is not None and run[1]-run[0] > 8: zones.append(run)
        run = None
if run is not None and run[1]-run[0] > 8: zones.append(run)
print("protrusion zones:", zones)

# slot holes
cnts, hier = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
holes = []
for i, c in enumerate(cnts):
    if hier[0][i][3] != -1 and cv2.contourArea(c) > 300:
        x, y, w, h = cv2.boundingRect(c)
        holes.append((x, y, w, h))
print("holes:", holes)

json_out = {
    "centerline": C.tolist(), "thickness": t,
    "outer": outer.tolist(), "inner": inner.tolist(),
    "zones": [[int(a), int(b), int(c)] for a, b, c in zones],
    "holes": [[int(v) for v in h] for h in holes],
}
json.dump(json_out, open("upper-shell.json", "w"))

# review overlay: mask ghost + centerline + offset edges
okp, png = cv2.imencode(".png", mask)
b64 = base64.b64encode(png.tobytes()).decode()
def pl(a): return " ".join(f"{p[0]:.1f},{p[1]:.1f}" for p in a)
html = f"""<meta charset="utf-8"><style>body{{margin:0;background:#1c2530;}}
svg{{width:100%;display:block;}}</style>
<svg viewBox="40 40 1420 560">
<image href="data:image/png;base64,{b64}" x="0" y="0" width="{Wm}" height="{Hm}" opacity="0.45"/>
<polyline points="{pl(C[::4])}" fill="none" stroke="#ff4020" stroke-width="1.6"/>
<polyline points="{pl(outer[::4])}" fill="none" stroke="#30c0ff" stroke-width="2"/>
<polyline points="{pl(inner[::4])}" fill="none" stroke="#30ff90" stroke-width="2"/>
</svg>
<svg viewBox="50 130 340 200">
<image href="data:image/png;base64,{b64}" x="0" y="0" width="{Wm}" height="{Hm}" opacity="0.45"/>
<polyline points="{pl(C[::2])}" fill="none" stroke="#ff4020" stroke-width="1"/>
<polyline points="{pl(outer[::2])}" fill="none" stroke="#30c0ff" stroke-width="1.4"/>
<polyline points="{pl(inner[::2])}" fill="none" stroke="#30ff90" stroke-width="1.4"/>
</svg>"""
open("../shell-overlay.html", "w", encoding="utf-8").write(html)
print("overlay written")
