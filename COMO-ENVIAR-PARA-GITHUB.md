# 🚀 COMO ENVIAR O PROJETO PARA O GITHUB

## ⚠️ IMPORTANTE SOBRE SEGURANÇA

**NUNCA compartilhe tokens do GitHub publicamente!** 
O token que você forneceu deve ser mantido em segredo.

---

## 📋 PASSO A PASSO COMPLETO

### 1️⃣ BAIXE O PROJETO

Como o projeto está nesta plataforma, você precisa:

**Opção A: Download direto**
- Clique em "Download" nesta plataforma
- Extraia o arquivo ZIP

**Opção B: Copiar arquivos**
- Copie todos os arquivos desta pasta para seu computador

---

### 2️⃣ PREPARE OS ARQUIVOS DE MÍDIA

Crie a pasta `public/` e coloque TODOS os arquivos dentro:

```
📁 public/
   📸 foto1.jpg   → Rafally (foto principal)
   📸 foto2.jpg   → Homem recebendo massagem
   📸 foto3.jpg   → Equipe completa
   📸 foto4.jpg   → Costas de mulher
   🎥 clip1.mp4   → Interior da clínica
   🎥 clip2.mp4   → Massagem nas costas
   🎥 clip3.mp4   → Rafally dançando (HERO)
```

---

### 3️⃣ ABRA O TERMINAL E EXECUTE:

```bash
# Navegue até a pasta do projeto
cd caminho/para/o/projeto

# Inicialize o Git (se ainda não fez)
git init

# Adicione o repositório remoto
git remote add origin https://github.com/henriquefelix8920/rafally.git

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "✨ Toque de Vênus - Website premium completo"

# Envie para o GitHub
git push -u origin main
```

---

### 4️⃣ AUTENTICAÇÃO NO GITHUB

Quando o Git pedir credenciais, você tem 3 opções:

#### Opção 1: GitHub CLI (RECOMENDADO)
```bash
# Instale GitHub CLI: https://cli.github.com/
gh auth login
# Siga as instruções
```

#### Opção 2: Token Pessoal
```bash
# Quando pedir senha, use seu Personal Access Token
# Gere um token em: https://github.com/settings/tokens
# Marque as permissões: repo
```

#### Opção 3: SSH (MAIS SEGURO)
```bash
# Configure SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
git remote set-url origin git@github.com:henriquefelix8920/rafally.git
git push -u origin main
```

---

## 🎬 SOBRE OS VÍDEOS GRANDES

Se os vídeos forem maiores que 100MB:

### Use Git LFS:
```bash
# Instale Git LFS
git lfs install

# Configure para rastrear vídeos
git lfs track "*.mp4"

# Adicione o .gitattributes
git add .gitattributes

# Commit e push
git add public/*.mp4
git commit -m "Adiciona vídeos com Git LFS"
git push origin main
```

### Ou hospede em outro lugar:
1. **Cloudinary** (grátis até 25GB): https://cloudinary.com
2. **AWS S3**
3. **Vercel Blob**

Depois altere no código:
```tsx
// De:
src="/clip3.mp4"

// Para:
src="https://res.cloudinary.com/seu-cloud/video/upload/clip3.mp4"
```

---

## 🚀 DEPLOY NA VERCEL (GRÁTIS)

1. Acesse: https://vercel.com
2. Clique em "Sign Up" → "Continue with GitHub"
3. Autorize o Vercel
4. Clique em "Add New Project"
5. Importe o repositório `rafally`
6. Clique em "Deploy"
7. Pronto! Site online em ~2 minutos

---

## ✅ CHECKLIST FINAL

- [ ] Todos os arquivos de mídia estão na pasta `public/`
- [ ] Os nomes estão corretos (minúsculas, sem espaços)
- [ ] O build funciona: `npm run build`
- [ ] O site abre localmente: `npm run dev`
- [ ] Os vídeos não são muito grandes (<100MB cada)
- [ ] Você tem um método de autenticação configurado

---

## 📞 PROBLEMAS?

### "fatal: not a git repository"
```bash
git init
git remote add origin https://github.com/henriquefelix8920/rafally.git
```

### "error: failed to push"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### "Authentication failed"
Use GitHub CLI ou gere um novo token em:
https://github.com/settings/tokens

---

## 🎯 RESUMO RÁPIDO

```bash
# 1. Entre na pasta
cd projeto

# 2. Coloque as mídias em public/

# 3. Configure Git
git init
git remote add origin https://github.com/henriquefelix8920/rafally.git

# 4. Envie
git add .
git commit -m "✨ Site completo"
git push -u origin main

# 5. Deploy na Vercel
# Acesse vercel.com e importe o repo
```

---

**Pronto! Seu site estará no ar!** 🪐✨
