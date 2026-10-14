@echo off
REM Starts the LoopBench faceplate and opens it.
REM
REM   LoopBench.cmd             the cascade -- a flow loop inside a temperature
REM                             loop, with a supply sag to trip. The demo.
REM   LoopBench.cmd single      one temperature loop, no inner loop
REM   LoopBench.cmd positioner  a valve and nothing else, as the real bench is
REM   LoopBench.cmd COM4        real hardware on that port
REM
REM LoopBench is a sibling project, not part of this vault -- Workbench is the
REM front door to it, not its home. Standard library only, nothing to install.
title LoopBench
set "LB=%~dp0..\LoopBench"
if not exist "%LB%\src\loopbench\web\__main__.py" (
  echo.
  echo   LoopBench is not beside the vault.
  echo   Looked in: %LB%
  echo.
  pause
  exit /b 1
)
cd /d "%LB%"
set "PYTHONPATH=%LB%\src"
set "MODE=%~1"
if "%MODE%"==""           set "ARGS=--sim cascade"     & goto :go
if /i "%MODE%"=="cascade"  set "ARGS=--sim cascade"     & goto :go
if /i "%MODE%"=="single"   set "ARGS=--sim temperature" & goto :go
if /i "%MODE%"=="positioner" set "ARGS=--sim positioner" & goto :go
set "ARGS=--port-name %MODE%"
:go
start "" "http://127.0.0.1:8787/"
python -m loopbench.web %ARGS%
if errorlevel 1 pause
