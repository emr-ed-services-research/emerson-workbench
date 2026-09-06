# Export a list of slides from a course's original .pptx as PNG via PowerPoint COM.
# Spot-check helper: pair with compare.ps1 to eyeball conversion fidelity.
#
# Usage:  .\export-orig.ps1 -Course "14101 Valve Trim and Body Maintenance" -Slides 15,20,45,81
param(
  [Parameter(Mandatory = $true)] [string] $Course,
  [Parameter(Mandatory = $true)] [int[]]  $Slides,
  [string] $SourcePptx,
  [string] $TmpDir
)
$ErrorActionPreference = 'Stop'
. "$PSScriptRoot\_paths.ps1"
$P = Resolve-CoursePaths -Course $Course -SourcePptx $SourcePptx -TmpDir $TmpDir

$src = $P.Src
$out = Join-Path $P.Tmp 'orig'
New-Item -ItemType Directory -Force $out | Out-Null

$pp = New-Object -ComObject PowerPoint.Application
try {
  $deck = $pp.Presentations.Open($src, $true, $false, $false)   # ReadOnly, not Untitled, no window
  Write-Output ("opened: {0} slides" -f $deck.Slides.Count)
  foreach ($n in $Slides) {
    $p = Join-Path $out ("s{0:D3}.png" -f $n)
    $deck.Slides.Item($n).Export($p, "PNG", 1320, 1020)
    if (Test-Path $p) { Write-Output ("  exported slide $n") } else { Write-Output ("  FAILED slide $n") }
  }
  $deck.Close()
}
finally {
  $pp.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($pp) | Out-Null
  [GC]::Collect()
}
Write-Output ("done: " + (Get-ChildItem $out -Filter *.png).Count + " files in $out")
