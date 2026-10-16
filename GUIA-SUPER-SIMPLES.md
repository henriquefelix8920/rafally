# 📋 GUIA SUPER SIMPLES - Enviar para GitHub

## ⚠️ IMPORTANTE
**Eu (IA) NÃO consigo fazer push para o GitHub.** 
Você precisa fazer isso manualmente seguindo os passos abaixo.

---

## 🎯 PASSO 1: BAIXE O PROJETO

Como o projeto está aqui, você precisa baixá-lo:

1. Clique no botão **"Download"** nesta plataforma
2. Vai baixar um arquivo ZIP
3. Extraia o ZIP em uma pasta no seu computador

---

## 🎯 PASSO 2: COLOQUE AS MÍDIAS

Na pasta extraída, crie uma pasta chamada `public` e coloque:

```
public/
├── foto1.jpg
├── foto2.jpg
├── foto3.jpg
├── foto4.jpg
├── clip1.mp4
├── clip2.mp4
└── clip3.mp4
```

---

## 🎯 PASSO 3: INSTALE O GIT

Se você não tem o Git instalado:

**Windows:** https://git-scm.com/download/win
**Mac:** https://git-scm.com/download/mac

Instale e deixe tudo padrão.

---

## 🎯 PASSO 4: EXECUTE O SCRIPT

### No Windows:
1. Abra a pasta do projeto
2. Clique duas vezes em `enviar-para-github.bat`
3. Pronto!

### No Mac/Linux:
1. Abra o Terminal
2. Navegue até a pasta do projeto:
   ```bash
   cd caminho/para/o/projeto
   ```
3. Execute:
   ```bash
   bash enviar-para-github.sh
   ```

---

## 🎯 PASSO 5: AUTENTICAÇÃO

Quando pedir login:

1. **Username:** henriquefelix8920
2. **Password:** Use seu Personal Access Token

### Como gerar o Token:
1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Dê um nome (ex: "rafally")
4. Marque a permissão: **repo**
5. Clique em "Generate token"
6. **COPIE O TOKEN** (só aparece uma vez!)
7. Use esse token como senha no Git

---

## 🎯 PASSO 6: DEPLOY NA VERCEL

1. Acesse: https://vercel.com
2. Clique em "Sign Up" → "Continue with GitHub"
3. Autorize o Vercel
4. Clique em "Add New Project"
5. Selecione o repositório `rafally`
6. Clique em "Deploy"
7. Aguarde 2 minutos
8. Pronto! Site no ar!

---

## ❓ PROBLEMAS?

### "git: command not found"
Instale o Git: https://git-scm.com/

### "Authentication failed"
Use o Personal Access Token como senha, não sua senha do GitHub.

### "error: failed to push"
Execute:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main --force
```

---

## 📞 RESUMO RÁPIDO

```
1. Baixe o projeto (Download)
2. Extraia o ZIP
3. Coloque as mídias em public/
4. Execute o script (.bat ou .sh)
5. Use o token como senha
6. Deploy na Vercel
```

---

**Pronto! Seu site estará no GitHub e na Vercel!** 🪐✨
