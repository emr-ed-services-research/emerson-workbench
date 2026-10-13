@echo off
REM Opens Emerson Workbench. Double-click this, or pin it to the taskbar.
REM Serves the vault root so every link on Home is a plain relative path.
title Emerson Workbench
cd /d "%~dp0"
node "05 - Home\serve.js"
if errorlevel 1 pause
