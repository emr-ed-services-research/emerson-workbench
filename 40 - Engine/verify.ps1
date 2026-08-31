# ============================================================================
#  verify.ps1  -  integrity checks for a Workbench course
#
#  Folds in the checks that were run by hand through the 1400 four-part pass:
#  JSON validity, key-concept page-ref integrity, slide-HTML tag balance,
#  manifest parse + title drift, CSS brace balance, engine-lock drift, and the
#  reference-data (data-ref) drift lint.
#
#  Usage:  .\verify.ps1 -Course "1400 Valve Trim and Body Maintenance"
#
#  Exit code 0 = all pass (warnings allowed), 1 = one or more FAIL.
#  Step 4 (headless-Chrome render of every rebuilt slide) runs via
#  render/render-check.mjs - warn-only for now, see render/README.md.
# ============================================================================
param(
  [Parameter(Mandatory = $true)] [string] $Course
)
$ErrorActionPreference = 'Stop'

$engineRoot = $PSScriptRoot
$vault      = Split-Path $engineRoot -Parent
$pres       = Join-Path $vault "10 - Courses\$Course\Presentation"
$slidesDir  = Join-Path $pres 'build\slides'
$courseJson = Join-Path $pres 'course\course.json'
if (-not (Test-Path $pres)) { throw "course not found: $pres" }

$fails = 0; $warns = 0
function Pass($m) { Write-Host "  [ok]   $m" }
function Warn($m) { Write-Host "  [warn] $m" -ForegroundColor Yellow; $script:warns++ }
function Fail($m) { Write-Host "  [FAIL] $m" -ForegroundColor Red; $script:fails++ }
function Section($m) { Write-Host ""; Write-Host "== $m ==" }

function Strip-Html($s) {
  # tags out, named entities out, lower-case, keep only [a-z0-9%.] + space.
  # Punctuation, dashes and slashes collapse to spaces so wording-only
  # differences (a/b vs a / b, hyphen vs em-dash) do not count as drift.
  $s = ($s -replace '<[^>]+>', ' ' -replace '&[a-zA-Z]+;', ' ').ToLower()
  ($s -replace '[^a-z0-9%. ]', ' ' -replace '\s+', ' ').Trim()
}

# ---- 1. course.json -------------------------------------------------------
Section "course.json"
try {
  $C = Get-Content $courseJson -Raw -Encoding UTF8 | ConvertFrom-Json
  Pass "valid JSON"
} catch { Fail "invalid JSON: $($_.Exception.Message)"; $C = $null }

$modulePages = @{}
if ($C) {
  $badRef = @()
  foreach ($day in $C.days) {
    foreach ($ch in $day.chapters) {
      foreach ($m in ($ch.modules | Where-Object { $_ })) {
        $pages = @($m.pages)
        $modulePages[$m.id] = $pages
        if (-not $m.keyConcepts) { continue }   # outline module - nothing to check yet
        foreach ($kc in @($m.keyConcepts | Where-Object { $_ })) {
          foreach ($p in @($kc.pages | Where-Object { $null -ne $_ })) {
            if ($p -notin $pages) { $badRef += "$($m.id): concept page $p not in module pages ($($pages -join ','))" }
          }
        }
      }
    }
  }
  if ($badRef.Count) { $badRef | ForEach-Object { Fail $_ } } else { Pass "every keyConcept page ref is inside its module's pages" }

  if ($C.slidePrefix) { Pass "slidePrefix = $($C.slidePrefix)" } else { Warn "no slidePrefix (course.js will use code + '-')" }
}

# ---- 2. slide HTML tag balance -----------------------------------------
Section "slide HTML tag balance"
$slideFiles = Get-ChildItem $slidesDir -Filter '1400-*.html'
$tagBad = @()
foreach ($f in $slideFiles) {
  $t = [IO.File]::ReadAllText($f.FullName)
  foreach ($tag in 'article', 'figure', 'table', 'svg', 'ol', 'ul') {
    $o = ([regex]::Matches($t, "<$tag[ >]")).Count
    $c = ([regex]::Matches($t, "</$tag>")).Count
    if ($o -ne $c) { $tagBad += "$($f.Name): <$tag> $o open / $c close" }
  }
  $dO = ([regex]::Matches($t, '<div[ >]')).Count
  $dC = ([regex]::Matches($t, '</div>')).Count
  if ($dO -ne $dC) { $tagBad += "$($f.Name): <div> $dO open / $dC close" }
}
if ($tagBad.Count) { $tagBad | ForEach-Object { Fail $_ } } else { Pass "$($slideFiles.Count) slide files, all tags balanced" }

# ---- 3. manifest ------------------------------------------------------
Section "manifest.js"
$mfPath = Join-Path $pres 'build\manifest.js'
try {
  $mfTxt = [IO.File]::ReadAllText($mfPath)
  $arr = ([regex]::Match($mfTxt, '=\s*(\[[\s\S]*\])\s*;?\s*$')).Groups[1].Value | ConvertFrom-Json
  Pass "parses ($($arr.Count) entries)"
  $titleDrift = @()
  foreach ($e in $arr) {
    $sf = Join-Path $slidesDir $e.file
    if (-not (Test-Path $sf)) { continue }
    $h1 = ([regex]::Match([IO.File]::ReadAllText($sf), '<h1 class="slide-title">(.*?)</h1>')).Groups[1].Value
    if ($h1) {
      $a = Strip-Html $h1; $b = Strip-Html $e.title
      if ($a -and $b -and $a -ne $b) { $titleDrift += "slide $($e.n): manifest '$($e.title)' != <h1> '$h1'" }
    }
  }
  if ($titleDrift.Count) { $titleDrift | ForEach-Object { Warn $_ } } else { Pass "manifest titles match slide <h1>" }
} catch { Fail "manifest.js: $($_.Exception.Message)" }

# ---- 4. CSS brace balance -------------------------------------------
Section "CSS brace balance"
foreach ($css in (Get-ChildItem (Join-Path $pres 'build\css') -Filter '*.css')) {
  $t = [IO.File]::ReadAllText($css.FullName)
  $o = ([regex]::Matches($t, '\{')).Count; $c = ([regex]::Matches($t, '\}')).Count
  if ($o -eq $c) { Pass "$($css.Name): $o/$c" } else { Fail "$($css.Name): $o open / $c close" }
}

# ---- 5. engine-lock drift ------------------------------------------
Section "engine-lock (assembled shared files vs engine)"
$lockPath = Join-Path $pres 'build\_engine-lock.json'
if (-not (Test-Path $lockPath)) { Warn "no _engine-lock.json - course not assembled by build-course.ps1" }
else {
  $lock = Get-Content $lockPath -Raw | ConvertFrom-Json
  $drift = @()
  foreach ($p in $lock.PSObject.Properties) {
    if ($p.Name.StartsWith('_')) { continue }
    $dst = Join-Path $pres $p.Name
    if (-not (Test-Path -LiteralPath $dst)) { $drift += "$($p.Name): missing"; continue }
    $h = (Get-FileHash -LiteralPath $dst -Algorithm SHA256).Hash
    if ($h -ne $p.Value) { $drift += "$($p.Name): hand-edited since assembly" }
  }
  if ($drift.Count) { $drift | ForEach-Object { Warn $_ }; Warn "edit 40 - Engine/ and re-run build-course.ps1" }
  else { Pass "$(@($lock.PSObject.Properties | Where-Object { -not $_.Name.StartsWith('_') }).Count) assembled files match the engine" }
}

# ---- 6. reference-data (data-ref) drift lint ----------------------
Section "reference-data drift  (data-ref)"
$refGroups = @{}
foreach ($f in $slideFiles) {
  $t = [IO.File]::ReadAllText($f.FullName)
  foreach ($m in [regex]::Matches($t, '<table[^>]*\bdata-ref="([^"]+)"[^>]*>([\s\S]*?)</table>')) {
    $ref = $m.Groups[1].Value
    $norm = Strip-Html $m.Groups[2].Value
    if (-not $refGroups.ContainsKey($ref)) { $refGroups[$ref] = @() }
    $refGroups[$ref] += [pscustomobject]@{ file = $f.Name; norm = $norm }
  }
}
if ($refGroups.Count -eq 0) { Warn "no data-ref tables found" }
foreach ($ref in ($refGroups.Keys | Sort-Object)) {
  $rows = $refGroups[$ref]
  $distinct = @($rows | Group-Object norm)
  if ($distinct.Count -eq 1) {
    Pass "$ref : $($rows.Count) copy/copies, identical  ($(( $rows.file) -join ', '))"
  } else {
    Fail "$ref : $($distinct.Count) DIFFERENT versions across $($rows.Count) files:"
    foreach ($g in $distinct) { Write-Host "         [$(($g.Group.file) -join ', ')]" -ForegroundColor Red }
  }
}

# ---- 7. slide render  (headless Chrome, warn-only) ----------------
Section "slide render  (headless Chrome)"
$renderMjs = Join-Path $engineRoot 'render\render-check.mjs'
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Warn "node not found - render checks skipped"
} elseif (-not (Test-Path (Join-Path $engineRoot 'render\node_modules'))) {
  Warn "render deps not installed - run: npm --prefix `"$engineRoot\render`" install"
} else {
  $sawRender = $false
  & node $renderMjs --course $Course | ForEach-Object {
    $line = [string]$_
    if ($line -match '^\s*\[warn\]\s*(.+)$') { Warn $Matches[1] }
    elseif ($line -match '^\s*\[ok\]\s*(.+)$') { }  # per-slide OK, keep quiet
    elseif ($line -match '^RENDER:\s*(\d+) slides rendered, (\d+) warn') {
      $sawRender = $true
      Pass ("{0} slides rendered, {1} render warning(s)" -f $Matches[1], $Matches[2])
    }
    elseif ($line.Trim()) { Write-Host "  $line" }
  }
  if (-not $sawRender) { Warn "render-check produced no summary line" }
}

# ---- summary --------------------------------------------------------
Write-Host ""
Write-Host ("==== {0} : {1} FAIL, {2} warn ====" -f $Course, $fails, $warns) -ForegroundColor $(if ($fails) { 'Red' } else { 'Green' })
if ($fails) { exit 1 }
