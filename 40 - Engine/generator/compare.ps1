# Build side-by-side comparison sheets: original (left) vs converted (right)
Add-Type -AssemblyName System.Drawing
$orig = "C:\Users\E1552882\.claude\jobs\ae752d36\tmp\orig"
$mine = "C:\Users\E1552882\.claude\jobs\ae752d36\tmp\mine"
$outDir = "C:\Users\E1552882\.claude\jobs\ae752d36\tmp\cmp"
New-Item -ItemType Directory -Force $outDir | Out-Null

$flagged = 15,20,21,22,23,24,45,46,81,85,89,97,104,112,125,129,259,284,294,295,297,298,299,300,301,304,305,306,312,325,326,416,417
$perSheet = 4
$tileW = 620; $tileH = 480; $gap = 10; $labelH = 22

$sheets = [Math]::Ceiling($flagged.Count / $perSheet)
for ($s = 0; $s -lt $sheets; $s++) {
  $rows = [Math]::Min($perSheet, $flagged.Count - $s * $perSheet)
  $bmp = New-Object System.Drawing.Bitmap((2 * $tileW + 3 * $gap), ($rows * ($tileH + $labelH + $gap) + $gap))
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear([System.Drawing.Color]::FromArgb(25, 25, 25))
  $g.InterpolationMode = 'HighQualityBicubic'
  $fn = New-Object System.Drawing.Font('Consolas', 11, [System.Drawing.FontStyle]::Bold)
  for ($r = 0; $r -lt $rows; $r++) {
    $n = $flagged[$s * $perSheet + $r]
    $p = '{0:D3}' -f $n
    $y = $gap + $r * ($tileH + $labelH + $gap)
    $g.DrawString("slide $n", $fn, [System.Drawing.Brushes]::Gold, $gap, $y)
    $g.DrawString("ORIGINAL .pptx", $fn, [System.Drawing.Brushes]::LightGray, ($gap + 90), $y)
    $g.DrawString("CONVERTED HTML", $fn, [System.Drawing.Brushes]::LightGray, ($tileW + 2 * $gap + 90), $y)
    $oy = $y + $labelH
    foreach ($pair in @(@($orig, $gap), @($mine, ($tileW + 2 * $gap)))) {
      $fp = Join-Path $pair[0] "s$p.png"
      if (Test-Path $fp) {
        $im = [System.Drawing.Image]::FromFile($fp)
        # fit into tile keeping aspect
        $ar = $im.Width / $im.Height
        $tw = $tileW; $th = [int]($tw / $ar)
        if ($th -gt $tileH) { $th = $tileH; $tw = [int]($th * $ar) }
        $g.FillRectangle([System.Drawing.Brushes]::White, $pair[1], $oy, $tileW, $tileH)
        $g.DrawImage($im, [int]($pair[1] + ($tileW - $tw) / 2), $oy, $tw, $th)
        $im.Dispose()
      }
    }
  }
  $g.Dispose()
  $sp = Join-Path $outDir ("cmp-{0:D2}.png" -f ($s + 1))
  $bmp.Save($sp, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output "wrote $sp"
}
