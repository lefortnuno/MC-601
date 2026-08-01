@echo off
setlocal enabledelayedexpansion

echo ============================================
echo   Sync videos YouTube - Baboke Films
echo ============================================
echo.

cd /d "%~dp0.."

where git >nul 2>nul
if errorlevel 1 (
  echo [ERREUR] Git n'est pas installe ou pas dans le PATH.
  echo Installe-le depuis https://git-scm.com puis relance ce script.
  goto :end
)

where node >nul 2>nul
if errorlevel 1 (
  echo [ERREUR] Node.js n'est pas installe ou pas dans le PATH.
  echo Installe-le depuis https://nodejs.org puis relance ce script.
  goto :end
)

set "PYCMD="
where python >nul 2>nul
if not errorlevel 1 set "PYCMD=python"
if not defined PYCMD (
  where py >nul 2>nul
  if not errorlevel 1 set "PYCMD=py"
)
if not defined PYCMD (
  echo [ERREUR] Python n'est pas installe ou pas dans le PATH.
  echo Installe-le depuis https://python.org ^(coche "Add to PATH" a l'installation^) puis relance ce script.
  goto :end
)

echo [1/4] Recuperation des derniers changements du repo...
git pull
if errorlevel 1 (
  echo [ERREUR] git pull a echoue. Verifie ta connexion internet et tes identifiants Git.
  goto :end
)

echo.
echo [2/4] Installation / mise a jour de yt-dlp...
%PYCMD% -m pip install -U yt-dlp --quiet
if errorlevel 1 (
  echo [ERREUR] Impossible d'installer yt-dlp via pip.
  goto :end
)

echo.
echo [3/4] Recuperation des videos de youtube.com/@BABOKEFILMS...
node scripts\fetch-youtube-videos.mjs
if errorlevel 1 (
  echo [ERREUR] La recuperation des videos a echoue ^(voir le message ci-dessus^).
  goto :end
)

echo.
echo [4/4] Verification et envoi des changements...
git diff --quiet -- music.data.tsx film.data.tsx
if errorlevel 1 (
  git add music.data.tsx film.data.tsx
  git commit -m "chore: sync videos from YouTube channel"
  git push
  if errorlevel 1 (
    echo [ERREUR] git push a echoue. Verifie tes identifiants / droits sur le repo.
    goto :end
  )
  echo.
  echo Termine : nouvelles videos synchronisees et envoyees sur GitHub.
  echo Vercel va redeployer automatiquement dans quelques minutes.
) else (
  echo.
  echo Termine : aucune nouvelle video detectee, rien a envoyer.
)

:end
echo.
pause
