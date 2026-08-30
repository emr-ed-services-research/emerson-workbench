# ============================================================================
#  build-course.ps1  -  assemble a course's Presentation/ tree from the engine
#
#  The shared runtime (design system, shell, deck runner, slides.js, brand
#  assets) lives once in  40 - Engine/Presentation/.  This script copies it
#  into a course's  Presentation/  tree so the slide files' existing relative
#  paths (../css/emerson-workbench.css, ../assets/slides.js) resolve unchanged.
#
#  Per-course files (slides/, assets/img/, manifest.*, course.json,
#  course-data.js, _generator/PROTECTED.txt, READMEs) are NEVER touched.
#
#  Usage:
#    .\build-course.ps1 -Course "1400 Valve Trim and Body Maintenance"
#    .\build-course.ps1 -Course "<name>" -WhatIf     # preview, change nothing
#    .\build-course.ps1 -Course "<name>" -Force      # overwrite hand-edited targets
#
#  Drift guard: after each run, _engine-lock.json in the course's build/ records
#  the hash of every file placed. On the next run, a target that differs from
#  BOTH the engine source AND that recorded hash has been hand-edited since
#  assembly - it is skipped (with a warning) unless -Force. A snapshot of the
#  shared files is taken before any first assembly or any -Force run.
# ============================================================================
param(
  [Parameter(Mandatory = $true)] [string] $Course,
  [switch] $Force,
  [switch] $WhatIf
)
$ErrorActionPreference = 'Stop'

$engineRoot = $PSScriptRoot
$srcRoot    = Join-Path $engineRoot 'Presentation'
$vault      = Split-Path $engineRoot -Parent
$dstRoot    = Join-Path $vault "10 - Courses\$Course\Presentation"
$lockFile   = Join-Path $dstRoot 'build\_engine-lock.json'
$snapRoot   = Join-Path $dstRoot 'build\_engine-snapshots'

if (-not (Test-Path $srcRoot)) { throw "engine template not found: $srcRoot" }
if (-not (Test-Path $dstRoot)) { throw "course Presentation/ not found: $dstRoot`n(run the conversion / Stage 0 for this course first)" }

function Hash-Of($path) {
  if (-not (Test-Path -LiteralPath $path)) { return $null }
  (Get-FileHash -LiteralPath $path -Algorithm SHA256).Hash
}

# recorded hashes from the previous assembly
$lock = @{}
if (Test-Path $lockFile) {
  (Get-Content $lockFile -Raw | ConvertFrom-Json).PSObject.Properties | ForEach-Object { $lock[$_.Name] = $_.Value }
}
$firstAssembly = ($lock.Count -eq 0)

# ---- plan --------------------------------------------------------------------
$engineFiles = Get-ChildItem $srcRoot -Recurse -File
$plan = foreach ($f in $engineFiles) {
  $rel  = $f.FullName.Substring($srcRoot.Length).TrimStart('\', '/')
  $dst  = Join-Path $dstRoot $rel
  $srcH = Hash-Of $f.FullName
  $dstH = Hash-Of $dst
  $action =
    if     ($null -eq $dstH)      { 'create' }
    elseif ($dstH -eq $srcH)      { 'unchanged' }
    elseif ($lock[$rel] -eq $dstH){ 'update' }        # clean prior assembly of an older engine
    elseif ($firstAssembly)       { 'update' }        # never assembled here - engine is authoritative
    else                          { 'DIVERGED' }      # hand-edited since assembly
  [pscustomobject]@{ rel = $rel; src = $f.FullName; dst = $dst; srcHash = $srcH; action = $action }
}

$diverged = @($plan | Where-Object { $_.action -eq 'DIVERGED' })
$toWrite  = @($plan | Where-Object { $_.action -in 'create', 'update' -or ($_.action -eq 'DIVERGED' -and $Force) })

# ---- report ----------------------------------------------------------------
Write-Host ""
Write-Host "build-course : $Course"
Write-Host "  engine : $srcRoot"
Write-Host "  course : $dstRoot"
Write-Host ""
foreach ($grp in 'create', 'update', 'unchanged', 'DIVERGED') {
  $rows = @($plan | Where-Object { $_.action -eq $grp })
  if ($rows.Count) { Write-Host ("  {0,-9} {1}" -f $grp, $rows.Count) }
}
if ($diverged.Count -and -not $Force) {
  Write-Host ""
  Write-Warning "$($diverged.Count) file(s) hand-edited in the course since last assembly - SKIPPED:"
  $diverged | ForEach-Object { Write-Host "    $($_.rel)" }
  Write-Host "  Edit these in 40 - Engine/ instead, or re-run with -Force to overwrite them."
}
# files present in the course but no longer in the engine
$orphans = @()
foreach ($rel in $lock.Keys) {
  if ($rel.StartsWith('_')) { continue }   # lock metadata, not a file
  if (-not ($engineFiles.FullName -contains (Join-Path $srcRoot $rel))) { $orphans += $rel }
}
if ($orphans.Count) {
  Write-Host ""
  Write-Warning "$($orphans.Count) file(s) were assembled before but are no longer in the engine (left in place, not deleted):"
  $orphans | ForEach-Object { Write-Host "    $_" }
}

if ($WhatIf) { Write-Host "`n  -WhatIf: nothing written.`n"; return }
if ($toWrite.Count -eq 0) { Write-Host "`n  nothing to do.`n"; return }

# ---- snapshot before a first assembly or a forced run ---------------------
if ($firstAssembly -or ($Force -and $diverged.Count)) {
  $stamp = (Get-Date).ToUniversalTime().ToString('yyyyMMdd-HHmmss') + 'Z'
  $snap = Join-Path $snapRoot $stamp
  foreach ($p in $plan) {
    if (Test-Path -LiteralPath $p.dst) {
      $to = Join-Path $snap $p.rel
      New-Item -ItemType Directory -Force (Split-Path $to) | Out-Null
      Copy-Item -LiteralPath $p.dst -Destination $to
    }
  }
  Get-ChildItem $snapRoot -Directory -ErrorAction SilentlyContinue |
    Sort-Object Name -Descending | Select-Object -Skip 10 |
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
  Write-Host "  snapshot of prior shared files: $snap"
}

# ---- write --------------------------------------------------------------
foreach ($p in $toWrite) {
  New-Item -ItemType Directory -Force (Split-Path $p.dst) | Out-Null
  Copy-Item -LiteralPath $p.src -Destination $p.dst -Force
}

# ---- refresh the lock (every engine file, current hash) ----------------
$newLock = [ordered]@{}
foreach ($p in ($plan | Sort-Object rel)) { $newLock[$p.rel] = $p.srcHash }
$newLock['_assembledUtc'] = (Get-Date).ToUniversalTime().ToString('o')
$newLock['_engine']       = $engineRoot
New-Item -ItemType Directory -Force (Split-Path $lockFile) | Out-Null
($newLock | ConvertTo-Json) | Out-File -Encoding utf8 $lockFile

Write-Host ""
Write-Host ("  wrote {0} file(s); lock updated: {1}" -f $toWrite.Count, $lockFile)
Write-Host ""
