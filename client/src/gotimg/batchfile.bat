@echo off
Title Populate Array with filenames and show them
set "MasterFolder=C:\Users\JRoze\Desktop\asoiafimages"
Set LogFile=%~dpn0.txt
If exist "%LogFile%" Del "%LogFile%"
REM Iterates throw all text files on %MasterFolder% and its subfolders.
REM And Populate the array with existent files in this folder and its subfolders
echo     Please wait a while ... We populate the array with filesNames ...
SetLocal EnableDelayedexpansion
@FOR /f "delims=" %%f IN ('dir /b /s "%MasterFolder%\*"') DO (
    set /a "idx+=1"
    set "FileName[!idx!]=%%~nxf"
    set "FilePath[!idx!]=%%~dpFf"
)

rem Display array elements
for /L %%i in (1,1,%idx%) do (
    echo [%%i] "!FileName[%%i]!"
    ( 
        echo( [%%i] !FileName[%%i]!
    )>> "%LogFile%"
)
ECHO(
ECHO Total text files(s) : !idx!
TimeOut /T 10 /nobreak>nul
Start "" "%LogFile%"