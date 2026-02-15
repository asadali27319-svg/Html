@echo off
echo ================================================
echo   SETUP AND DEPLOY TO GOOGLE FIREBASE HOSTING
echo ================================================
echo.

echo Step 1: Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is NOT installed!
    echo.
    echo Please install Node.js first:
    echo 1. Go to: https://nodejs.org
    echo 2. Download and install the LTS version
    echo 3. Restart your computer
    echo 4. Run this script again
    echo.
    pause
    exit /b
)

echo Node.js is installed! Version:
node --version
echo.

echo Step 2: Installing Firebase CLI...
npm install -g firebase-tools
echo.

echo Step 3: Logging in to Firebase...
firebase login
echo.

echo Step 4: Creating Firebase project...
echo.
echo Please go to: https://firebase.google.com
echo Create a new project named: asad-courses-portal
echo Then come back and press any key...
pause

echo Step 5: Initializing Firebase Hosting...
firebase init hosting
echo.
echo When asked:
echo - Select your Firebase project
echo - Public directory: . (type just a dot)
echo - Configure as single-page app: n
echo - Set up automatic builds: n
echo.

echo Step 6: Deploying to Firebase...
firebase deploy
echo.
echo ================================================
echo   YOUR WEBSITE IS NOW LIVE ON GOOGLE FIREBASE!
echo ================================================
echo.
pause
