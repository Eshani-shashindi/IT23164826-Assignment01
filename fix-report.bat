@echo off
echo Checking for processes using port 9323...

REM Find and kill process using port 9323
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :9323 ^| findstr LISTENING') do (
    echo Killing process %%a
    taskkill /F /PID %%a
)

timeout /t 2 /nobreak >nul

echo Opening Playwright report...
npx playwright show-report

pause
