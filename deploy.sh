#!/bin/bash

# Script para fazer push do projeto Toque de Vênus para o GitHub
# Repositório: https://github.com/henriquefelix8920/rafally1

echo "🪐 Toque de Vênus - Script de Deploy"
echo "======================================"
echo ""

# Verifica se está em um repositório git
if [ ! -d .git ]; then
    echo "❌ Este diretório não é um repositório Git."
    echo ""
    echo "Executando configuração inicial..."
    git init
    git remote add origin https://github.com/henriquefelix8920/rafally1.git
    echo "✅ Repositório Git configurado!"
    echo ""
fi

# Verifica se o remote está correto
REMOTE_URL=$(git remote get-url origin 2>/dev/null)
if [ "$REMOTE_URL" != "https://github.com/henriquefelix8920/rafally1.git" ]; then
    echo "⚠️  Configurando remote para o repositório correto..."
    git remote remove origin 2>/dev/null
    git remote add origin https://github.com/henriquefelix8920/rafally1.git
fi

echo "📦 Verificando arquivos de mídia..."
echo ""

# Verifica se os arquivos existem
FILES_OK=true

if [ ! -f "public/foto1.jpg" ]; then
    echo "⚠️  Arquivo ausente: public/foto1.jpg"
    FILES_OK=false
fi

if [ ! -f "public/foto2.jpg" ]; then
    echo "⚠️  Arquivo ausente: public/foto2.jpg"
    FILES_OK=false
fi

if [ ! -f "public/foto3.jpg" ]; then
    echo "⚠️  Arquivo ausente: public/foto3.jpg"
    FILES_OK=false
fi

if [ ! -f "public/foto4.jpg" ]; then
    echo "⚠️  Arquivo ausente: public/foto4.jpg"
    FILES_OK=false
fi

if [ ! -f "public/clip1.mp4" ]; then
    echo "⚠️  Arquivo ausente: public/clip1.mp4"
    FILES_OK=false
fi

if [ ! -f "public/clip2.mp4" ]; then
    echo "⚠️  Arquivo ausente: public/clip2.mp4"
    FILES_OK=false
fi

if [ ! -f "public/clip3.mp4" ]; then
    echo "⚠️  Arquivo ausente: public/clip3.mp4"
    FILES_OK=false
fi

if [ "$FILES_OK" = true ]; then
    echo "✅ Todos os arquivos de mídia estão presentes!"
else
    echo ""
    echo "⚠️  Alguns arquivos estão ausentes. O site funcionará, mas sem as mídias."
    echo "   Coloque os arquivos na pasta public/ conforme README.md"
fi

echo ""
echo "🔧 Instalando dependências..."
npm install

echo ""
echo "🏗️  Fazendo build..."
npm run build

echo ""
echo "📤 Adicionando arquivos ao Git..."
git add .

echo ""
echo "💾 Fazendo commit..."
git commit -m "✨ Toque de Vênus - Website premium completo

- Hero cinematográfico com vídeo
- Galeria multimídia editorial
- Seção de equipe com destaque
- Animações premium com Framer Motion
- WhatsApp button animado
- Totalmente responsivo
- SEO otimizado"

echo ""
echo "🚀 Fazendo push para o GitHub..."
git push -u origin main

echo ""
echo "✅ Pronto! O projeto foi enviado para:"
echo "   https://github.com/henriquefelix8920/rafally1"
echo ""
echo "📱 Para fazer deploy na Vercel:"
echo "   1. Acesse https://vercel.com"
echo "   2. Importe o repositório"
echo "   3. Clique em Deploy"
echo ""
echo "🪐 Toque de Vênus está no ar!"
