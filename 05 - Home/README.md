# 05 - Home — Workbench Layer 1

The landing page every Educational Services course is reached from. Layer 1 of
the four Workbench layers (`00 - Project/System Architecture.md`).

| File | What it is |
| --- | --- |
| `index.html` | The page itself |
| `serve.js` | Local static server — `node serve.js`, then open the port it prints |
| `make-icon.py` | Draws `workbench.ico` |
| `workbench.ico` | The icon the desktop shortcut uses |
| `make-shortcut.ps1` | Creates the desktop shortcut |

## Published

GitHub Pages serves **`docs/`, from `main`** —
https://emr-ed-services-research.github.io/emerson-workbench/

Two consequences worth knowing before you share that link:

- It **lags any work branch**. Nothing reaches the public page until it is
  merged to `main`.
- It is **public**. No GitHub login is needed to view it.

So `05 - Home` is the source and `docs/` is the published copy. Changing the
page here does not change what is live.

## Note

`50 - Lunar Process Engineer/extras/desktop/` grew its own icon generator,
local server and shortcut script independently of this folder. The two should
probably converge on one. Until they do, be aware both exist.
