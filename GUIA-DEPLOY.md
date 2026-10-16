# 📋 GUIA RÁPIDO - Como colocar o site no GitHub

## 🎯 PASSO A PASSO SIMPLES

### 1️⃣ Abra o Terminal (Mac) ou Git Bash (Windows)

### 2️⃣ Navegue até a pasta do projeto
```bash
cd caminho/para/sua/pasta
```

### 3️⃣ Clone o repositório
```bash
git clone https://github.com/henriquefelix8920/rafally1.git
```

### 4️⃣ Entre na pasta
```bash
cd rafally1
```

### 5️⃣ COLOQUE OS ARQUIVOS DE MÍDIA AQUI! 📸🎥

Crie uma pasta chamada `public` e coloque TODOS os arquivos dentro:

```
rafally1/
├── public/
│   ├── foto1.jpg      ← Foto da Rafally
│   ├── foto2.jpg      ← Homem recebendo massagem
│   ├── foto3.jpg      ← Equipe completa
│   ├── foto4.jpg      ← Costas de mulher
│   ├── clip1.mp4      ← Interior da clínica
│   ├── clip2.mp4      ← Massagem nas costas
│   └── clip3.mp4      ← Rafally dançando
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── (outros arquivos do projeto)
```

### 6️⃣ Instale as dependências
```bash
npm install
```

### 7️⃣ Teste se está funcionando
```bash
npm run dev
```
Abra o navegador em: http://localhost:3000

### 8️⃣ Envie para o GitHub
```bash
git add .
git commit -m "✨ Site Toque de Vênus completo"
git push origin main
```

---

## 🎬 SOBRE OS VÍDEOS

O GitHub tem limite de **100MB por arquivo**. Se seus vídeos forem maiores:

### Opção 1: Use Git LFS (recomendado)
```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add public/*.mp4
git commit -m "Adiciona vídeos"
git push origin main
```

### Opção 2: Hospede os vídeos em outro lugar
1. Faça upload dos vídeos no **Cloudinary** (grátis)
2. Copie os links
3. No código, troque `/clip1.mp4` pelo link do Cloudinary

---

## 🚀 COMO COLOCAR NO AR (DEPLOY)

### Vercel (MAIS FÁCIL - Grátis)
1. Acesse: https://vercel.com
2. Clique em "Sign Up" com GitHub
3. Clique em "New Project"
4. Importe o repositório `rafally1`
5. Clique em "Deploy"
6. Pronto! Seu site estará online em ~2 minutos

### GitHub Pages (Alternativa)
1. Vá no GitHub: https://github.com/henriquefelix8920/rafally1
2. Clique em "Settings"
3. No menu lateral, clique em "Pages"
4. Em "Branch", selecione `main` e pasta `/dist`
5. Clique em "Save"
6. Aguarde 2-3 minutos
7. Seu site estará em: https://henriquefelix8920.github.io/rafally1/

---

## ❓ PROBLEMAS COMUNS

### "fatal: not a git repository"
Você não está na pasta certa. Use `cd` para entrar na pasta do projeto.

### "error: failed to push some refs"
Use: `git push -u origin main --force`

### Vídeos não aparecem
- Verifique se os arquivos estão na pasta `public/`
- Verifique se os nomes estão exatamente: `clip1.mp4`, `clip2.mp4`, `clip3.mp4`
- Faça o build novamente: `npm run build`

### Site em branco após deploy
- Verifique o console do navegador (F12)
- Certifique-se de que o build foi feito: `npm run build`
- Verifique se a pasta `dist` foi criada

---

## 📞 PRECISA DE AJUDA?

Se tiver qualquer problema, me avise! 

---

**Resumo rápido:**
1. Clone o repo
2. Coloque as fotos e vídeos na pasta `public/`
3. `npm install`
4. `npm run build`
5. `git push`
6. Deploy na Vercel

Pronto! 🪐✨
