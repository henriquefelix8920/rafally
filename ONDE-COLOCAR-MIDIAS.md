# 📁 ONDE COLOCAR CADA ARQUIVO DE MÍDIA

## 🎯 LOCALIZAÇÃO: Pasta `public/`

Todos os arquivos devem ficar DENTRO da pasta `public/` do projeto.

---

## 📸 FOTOS (4 arquivos)

### foto1.jpg
- **O que é**: Foto da Rafally (massoterapeuta principal)
- **Onde aparece no site**: 
  - Galeria (imagem grande em destaque)
  - Seção Equipe (foto de perfil da Rafally)
- **Tamanho recomendado**: 1200x1200px ou maior
- **Formato**: JPG

### foto2.jpg
- **O que é**: Homem recebendo massagem
- **Onde aparece no site**: 
  - Galeria (imagem média)
- **Tamanho recomendado**: 800x800px ou maior
- **Formato**: JPG

### foto3.jpg
- **O que é**: Equipe completa / demais integrantes
- **Onde aparece no site**: 
  - Galeria (imagem larga na parte inferior)
  - Background do vídeo clip1.mp4 (poster)
- **Tamanho recomendado**: 1600x900px (formato horizontal)
- **Formato**: JPG

### foto4.jpg
- **O que é**: Costas de uma mulher
- **Onde aparece no site**: 
  - Seção WOW Moment (imagem cinematográfica fullscreen)
  - Galeria (imagem pequena)
- **Tamanho recomendado**: 1920x1080px ou maior (formato horizontal)
- **Formato**: JPG

---

## 🎥 VÍDEOS (3 arquivos)

### clip3.mp4 ⭐ MAIS IMPORTANTE
- **O que é**: Vídeo da Rafally dançando
- **Onde aparece no site**: 
  - **HERO** (primeira coisa que aparece quando o site abre!)
  - Background do topo do site
- **Tamanho recomendado**: 1920x1080px, 15-30 segundos
- **Formato**: MP4 (H.264)
- **Dica**: Comprima o vídeo para ficar abaixo de 50MB se possível

### clip1.mp4
- **O que é**: Interior da clínica e demais participantes
- **Onde aparece no site**: 
  - Seção "Experiências" (background do scroll)
- **Tamanho recomendado**: 1920x1080px, 10-20 segundos
- **Formato**: MP4 (H.264)

### clip2.mp4
- **O que é**: Massagem nas costas de uma mulher
- **Onde aparece no site**: 
  - Galeria (vídeo em destaque)
- **Tamanho recomendado**: 1080x1920px (vertical) ou 1920x1080px (horizontal)
- **Formato**: MP4 (H.264)

---

## 📋 ESTRUTURA FINAL DA PASTA

```
rafally1/
│
├── public/                    ← COLOQUE OS ARQUIVOS AQUI!
│   ├── foto1.jpg             ← Rafally
│   ├── foto2.jpg             ← Homem recebendo massagem
│   ├── foto3.jpg             ← Equipe completa
│   ├── foto4.jpg             ← Costas de mulher
│   ├── clip1.mp4             ← Interior da clínica
│   ├── clip2.mp4             ← Massagem nas costas
│   └── clip3.mp4             ← Rafally dançando ⭐
│
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── README.md
└── (outros arquivos)
```

---

## ⚠️ NOMES DOS ARQUIVOS - EXATOS!

Os nomes devem ser **EXATAMENTE** estes (minúsculas, sem espaços):

✅ Correto:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- `foto4.jpg`
- `clip1.mp4`
- `clip2.mp4`
- `clip3.mp4`

❌ Errado:
- `Foto1.jpg` (maiúscula)
- `foto 1.jpg` (espaço)
- `clip_1.mp4` (underline)
- `Clip3.mp4` (maiúscula)

---

## 🎬 DICAS PARA OS VÍDEOS

### Compressão
Use o **HandBrake** (grátis) para comprimir os vídeos:
1. Baixe em: https://handbrake.fr
2. Abra o vídeo
3. Selecione preset "Fast 1080p30"
4. Marque "Web Optimized"
5. Exporte

### Formato ideal
- **Codec**: H.264
- **Resolução**: 1920x1080 (Full HD)
- **Frame rate**: 30fps
- **Bitrate**: 2-5 Mbps
- **Áudio**: Pode remover se não tiver som importante

### Tamanho máximo recomendado
- clip3.mp4 (Hero): até 50MB
- clip1.mp4: até 30MB
- clip2.mp4: até 20MB

---

## 🚀 DEPOIS DE COLOCAR OS ARQUIVOS

1. Abra o terminal na pasta do projeto
2. Execute: `npm install`
3. Execute: `npm run dev`
4. Abra o navegador em: http://localhost:3000
5. Veja se tudo está funcionando!
6. Se estiver ok, faça o push:
   ```bash
   git add .
   git commit -m "Adiciona mídias"
   git push origin main
   ```

---

## ❓ DÚVIDAS?

Se algum arquivo não aparecer:
- Verifique se está na pasta `public/`
- Verifique se o nome está correto (minúsculas, sem espaços)
- Faça o build novamente: `npm run build`
- Limpe o cache do navegador (Ctrl+Shift+R)

---

**Resumo visual:**

```
📁 public/
   📸 foto1.jpg  →  Rafally
   📸 foto2.jpg  →  Homem massagem
   📸 foto3.jpg  →  Equipe
   📸 foto4.jpg  →  Costas mulher
   🎥 clip1.mp4  →  Interior clínica
   🎥 clip2.mp4  →  Massagem costas
   🎥 clip3.mp4  →  Rafally dançando ⭐
```
