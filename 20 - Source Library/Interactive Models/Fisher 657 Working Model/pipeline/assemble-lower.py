# -*- coding: utf-8 -*-
"""Lower casing: pure constant-thickness shell, lip to lip (no features,
no splices). Grammar declared by Franz 2026-09-26; audit binding.
Run after masks exist: extracts ridge centerline, cuts loops, fits half,
mirrors, offsets +-t/2, audits vs paint, emits lower-shell-path.json."""
import cv2, json, sys
import numpy as np
sys.path.insert(0, "_fairing-experiments")
from fair3 import fit_cubic, _bez

CX = 742.5

def symmetrize(m, cx):
    H, W = m.shape
    M = np.float32([[-1, 0, 2*cx], [0, 1, 0]])
    return cv2.bitwise_or(m, cv2.warpAffine(m, M, (W, H)))

mask = symmetrize(cv2.imread("parts2/lower-diaphragm-casing.png", cv2.IMREAD_GRAYSCALE), CX)
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))
D = cv2.distanceTransform((mask > 0).astype(np.uint8), cv2.DIST_L2, 5)
dil = cv2.dilate(D, np.ones((3,3), np.float32))
ridge = (D >= dil - 0.01) & (D > 6.0)
ys, xs = np.nonzero(ridge)
pts = np.stack([xs, ys], 1).astype(float)
P = pts[pts[:,0] < 700]
start = int(np.lexsort((P[:,1], P[:,0]))[0])
remaining = P.copy(); order = [remaining[start]]
remaining = np.delete(remaining, start, axis=0)
while len(remaining):
    d = np.linalg.norm(remaining - order[-1], axis=1)
    j = d.argmin()
    if d[j] > 90: break
    order.append(remaining[j]); remaining = np.delete(remaining, j, axis=0)
path = np.array(order)

def cutloops(Pp):
    out, i, N = [], 0, len(Pp)
    while i < N:
        out.append(Pp[i]); cut = 0
        for k in range(4, min(46, N-i-1)):
            if np.linalg.norm(Pp[i+k]-Pp[i]) < 6: cut = k
        i += cut+1 if cut else 1
    return np.array(out)
for _ in range(3): path = cutloops(path)

Q = path.copy()
for _ in range(8): Q[1:-1] = 0.25*Q[:-2] + 0.5*Q[1:-1] + 0.25*Q[2:]
ts = Q[1]-Q[0]; ts /= np.linalg.norm(ts)
segs = fit_cubic(Q[::3].copy(), ts, np.array([-1.0, 0.0]), 2.0)
samp = []
for ctrl in segs:
    for tt in np.linspace(0, 1, 40, endpoint=False): samp.append(_bez(ctrl, tt))
samp.append(np.array(segs[-1][3]))
L = np.array(samp)
if L[-1][0] < CX: L = np.vstack([L, [CX, L[-1][1]]])
R = L[::-1].copy(); R[:, 0] = 2*CX - R[:, 0]
C = np.vstack([L, R[1:]])
jm = len(L)
seg = C[max(0,jm-25):jm+25].copy()
for _ in range(30): seg[1:-1] = 0.25*seg[:-2] + 0.5*seg[1:-1] + 0.25*seg[2:]
C[max(0,jm-25):jm+25] = seg

t_all = np.array([2*D[int(round(p[1])), int(round(p[0]))] for p in C[::4]])
t0 = float(np.median(t_all))
t = float(np.median(t_all[np.abs(t_all - t0) < 0.25*t0]))

def offset(poly, dist):
    d = np.gradient(poly, axis=0)
    ln = np.linalg.norm(d, axis=1, keepdims=True); ln[ln==0]=1
    d /= ln
    return poly + np.stack([-d[:,1], d[:,0]], 1)*dist
o1, o2 = offset(C, -t/2), offset(C, t/2)
mid = len(C)//2
outer, inner = (o1, o2) if o1[mid][1] > o2[mid][1] else (o2, o1)

cnts, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
big = max(cnts, key=cv2.contourArea).reshape(-1,2).astype(float)
band = np.vstack([outer, inner[::-1]])
E = np.roll(band, -1, 0) - band
L2 = (E**2).sum(1); L2[L2==0]=1e-9
viol = 0; worst = 0
for p in big:
    if p[0] < C[0][0]-2 or p[0] > C[-1][0]+2: continue
    tt = np.clip(((p-band)*E).sum(1)/L2, 0, 1)
    proj = band + E*tt[:,None]
    dd = float(np.sqrt(((proj-p)**2).sum(1).min()))
    if dd > 6.0: viol += 1
    worst = max(worst, dd)
print(f"t={t:.1f}  AUDIT: {viol} beyond 6px (worst {worst:.1f})")
assert viol < 12, "AUDIT REJECT"

r = t/2
def pl(a): return " ".join(f"L {p[0]:.1f},{p[1]:.1f}" for p in a)
d = (f"M {outer[0][0]:.1f},{outer[0][1]:.1f} " + pl(outer[1:]) + " "
     + f"A {r:.1f} {r:.1f} 0 0 0 {inner[-1][0]:.1f},{inner[-1][1]:.1f} "
     + pl(inner[::-1][1:]) + " "
     + f"A {r:.1f} {r:.1f} 0 0 0 {outer[0][0]:.1f},{outer[0][1]:.1f} Z")
json.dump({"lower-diaphragm-casing": d}, open("lower-shell-path.json", "w"))
print("written lower-shell-path.json")
