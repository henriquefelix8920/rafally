#!/bin/bash

# Script automático para enviar o projeto para o GitHub
# Repositório: https://github.com/henriquefelix8920/rafally

echo "🪐 Enviando Toque de Vênus para o GitHub..."
echo ""

# Configura Git
git config --global user.email "henriquefelix8920@users.noreply.github.com"
git config --global user.name "henriquefelix8920"

# Inicializa o repositório se não existir
if [ ! -d .git ]; then
    git init
fi

# Remove remote antigo se existir
git remote remove origin 2>/dev/null

# Adiciona o repositório remoto
git remote add origin https://github.com/henriquefelix8920/rafally.git

# Adiciona todos os arquivos
git add .

# Faz commit
git commit -m "✨ Toque de Vênus - Website premium completo

- Hero cinematográfico com vídeo da Rafally
- Galeria multimídia editorial
- Seção de equipe com destaque
- Animações premium com Framer Motion
- WhatsApp button animado
- Totalmente responsivo
- SEO otimizado
- Paleta: Preto Absoluto, Roxo Berinjela, Ameixa, Malva"

# Faz push
git push -u origin main --force

echo ""
echo "✅ Pronto! Projeto enviado para:"
echo "   https://github.com/henriquefelix8920/rafally"
echo ""
echo "🚀 Para fazer deploy na Vercel:"
echo "   1. Acesse https://vercel.com"
echo "   2. Importe o repositório 'rafally'"
echo "   3. Clique em Deploy"
