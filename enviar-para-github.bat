@echo off
echo.
echo ========================================
echo   TOQUE DE VENUS - Enviar para GitHub
echo ========================================
echo.

REM Configura Git
git config --global user.email "henriquefelix8920@users.noreply.github.com"
git config --global user.name "henriquefelix8920"

REM Inicializa o repositório se não existir
if not exist .git (
    git init
)

REM Remove remote antigo se existir
git remote remove origin 2>nul

REM Adiciona o repositório remoto
git remote add origin https://github.com/henriquefelix8920/rafally.git

REM Adiciona todos os arquivos
git add .

REM Faz commit
git commit -m "✨ Toque de Vênus - Website premium completo"

REM Faz push
git push -u origin main --force

echo.
echo ========================================
echo   PRONTO! Projeto enviado para:
echo   https://github.com/henriquefelix8920/rafally
echo ========================================
echo.
pause
