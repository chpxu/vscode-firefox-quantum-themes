@echo off
echo test

:LOOP
if not "%~1" == "" (
  set found =
  if /I "%~1" == "-?" goto :usage
  if /I "%~1" == "/?" goto :usage
  if /I "%~1" == "-h" goto :usage
  if /I "%~1" == "--help" goto :usage
  if /I "%~1" == "-d" (
    if /I "%~2" == "" (
      set noarg = %1
      goto :error_warning
    )
    set outdir = %2
    set found = true
    shift
  )
)