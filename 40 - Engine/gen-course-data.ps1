# ============================================================================
#  gen-course-data.ps1  -  regenerate a course's course-data.js from course.json
#
#  course.js's boot logic always prefers window.EW_COURSE (course-data.js)
#  over live course.json when the file exists - only a MISSING course-data.js
#  falls back to fetching course.json directly. That means an edit to
#  course.json alone is invisible in the real running Workshop until this is
#  re-run. course-data.js is a pure, deterministic wrapper - exactly
#  "window.EW_COURSE = <course.json's own raw text>;" - so this is a safe,
#  lossless regeneration, never a re-derivation.
#
#  verify.ps1's "course-data.js drift" check (section 1b) FAILs when the two
#  files disagree and names this script as the fix.
#
#  Usage:
#    .\gen-course-data.ps1 -Course "Control Valve Engineering 1"
# ============================================================================
param(
  [Parameter(Mandatory = $true)] [string] $Course
)
$ErrorActionPreference = 'Stop'

$engineRoot = $PSScriptRoot
$vault      = Split-Path $engineRoot -Parent
$pres       = Join-Path $vault "10 - Courses\$Course\Presentation"
$courseJson = Join-Path $pres 'course\course.json'
$courseData = Join-Path $pres 'course\course-data.js'

if (-not (Test-Path $courseJson)) { throw "course.json not found: $courseJson" }

$raw = Get-Content $courseJson -Raw -Encoding UTF8
# validate before writing - a broken course.json must never be baked into course-data.js
$null = $raw | ConvertFrom-Json

$out = "window.EW_COURSE = " + $raw + ";`n"
[System.IO.File]::WriteAllText($courseData, $out, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "  wrote $courseData"
Write-Host "  ($((Get-Item $courseData).Length) bytes, from $courseJson)"
