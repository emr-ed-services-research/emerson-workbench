# Desktop shortcut

A double-click launcher for the local build, with its own icon.

| File | What it is |
| --- | --- |
| `play.js` | Zero-dependency Node static server for `dist/`. Opens the default browser and stays up until its window is closed. |
| `make-icon.py` | Draws `lpe.ico`. Each size is drawn at that size, not downscaled — the moon and stars drop out below 32px so the wheel survives. |
| `lpe.ico` | The icon: 16, 24, 32, 48, 64, 128, 256. |
| `lpe-preview.png` | Contact sheet of every size, for eyeballing the small ones. |

The shortcut lives on the Desktop as **Lunar Process Engineer.lnk** and runs
`node play.js`. It is not tracked here — recreate it with:

```powershell
$node = (Get-Command node).Source
$here = "<repo>\50 - Lunar Process Engineer\extras\desktop"
$lnk  = Join-Path ([Environment]::GetFolderPath('Desktop')) 'Lunar Process Engineer.lnk'
$s = (New-Object -ComObject WScript.Shell).CreateShortcut($lnk)
$s.TargetPath = $node
$s.Arguments = '"' + (Join-Path $here 'play.js') + '"'
$s.WorkingDirectory = $here
$s.IconLocation = (Join-Path $here 'lpe.ico') + ',0'
$s.WindowStyle = 7          # start minimised; the browser is what you want to see
$s.Save()
```

## Why a server and not just the .html

`file://` will not run the build — the levels are fetched, and the origin
rules stop that. The launcher serves `dist/` on 127.0.0.1:8752 (next free
port if that one is taken) and sends `Cache-Control: no-store`, so it always
plays whatever `node build.js` last wrote, never a stale copy.
