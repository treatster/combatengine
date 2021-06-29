@echo off
call npm run unbuilder-win
del /p "dist\*.html"
pause