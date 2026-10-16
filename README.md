# 🪐 Toque de Vênus - Website Premium

Website cinematográfico e premium para a clínica de massoterapia **Toque de Vênus**.

## 📋 Sobre o Projeto

- **Tecnologias**: React + Vite + TypeScript + Tailwind CSS + Framer Motion
- **Estilo**: Cinematográfico, editorial, com animações premium
- **Paleta**: Preto Absoluto, Roxo Berinjela, Ameixa Escura, Malva Aveludado

## 🚀 Como Fazer Push para o GitHub

### Passo 1: Clone o repositório (se ainda não fez)
```bash
git clone https://github.com/henriquefelix8920/rafally1.git
cd rafally1
```

### Passo 2: Copie os arquivos do projeto para dentro da pasta
Copie todos os arquivos deste projeto para dentro da pasta `rafally1/`

### Passo 3: Adicione os arquivos de mídia
Coloque os arquivos de foto e vídeo na pasta `public/`:

```
public/
├── clip3.mp4    → Vídeo da Rafally dançando (Hero/primeira seção)
├── clip1.mp4    → Vídeo do interior da clínica (seção Experiência)
├── clip2.mp4    → Vídeo de massagem nas costas (galeria)
├── foto1.jpg    → Foto da Rafally (galeria + equipe)
├── foto2.jpg    → Homem recebendo massagem (galeria)
├── foto3.jpg    → Demais integrantes (galeria)
└── foto4.jpg    → Costas de mulher (seção cinematográfica)
```

### Passo 4: Instale as dependências
```bash
npm install
```

### Passo 5: Teste localmente
```bash
npm run dev
```

### Passo 6: Commit e Push
```bash
git add .
git commit -m "✨ Toque de Vênus - Website premium completo"
git push origin main
```

## ⚠️ Importante: Arquivos de Vídeo no GitHub

O GitHub tem limite de 100MB por arquivo. Se os vídeos forem grandes, use uma dessas opções:

### Opção A: Git LFS (Recomendado para vídeos)
```bash
# Instale Git LFS
git lfs install

# Adicione os vídeos ao LFS
git lfs track "*.mp4"

# Commit e push
git add .gitattributes
git add public/*.mp4
git commit -m "Adiciona vídeos com Git LFS"
git push origin main
```

### Opção B: Hospede os vídeos em outro lugar
Se os vídeos forem muito grandes, hospede-os em:
- **Cloudinary** (gratuito até 25GB)
- **AWS S3** 
- **Vercel Blob**
- **YouTube/Vimeo** (em modo privado)

Depois, altere os caminhos no código de `/clip3.mp4` para a URL externa.

## 📱 Deploy

### Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório do GitHub
3. Clique em "Deploy"
4. Pronto! O site estará online.

### GitHub Pages
1. Vá em Settings > Pages
2. Selecione a branch `main` e pasta `/dist`
3. O site estará em `https://henriquefelix8920.github.io/rafally1/`

## 🎨 Estrutura do Site

1. **Hero** - Vídeo da Rafally dançando (clip3.mp4)
2. **Intro** - Texto poético com animações
3. **WOW Moment** - Foto cinematográfica (foto4.jpg)
4. **Experiências** - Vídeo de fundo (clip1.mp4) + cards de serviços
5. **Galeria** - Grid editorial com todas as fotos e vídeos
6. **Equipe** - Destaque para Rafally + demais massoterapeutas
7. **CTA** - Chamada para agendamento via WhatsApp
8. **Footer** - Links e informações

## 📞 Contato

- **WhatsApp**: (85) 99239-1490
- **Instagram Principal**: @rafalllyyx
- **Localização**: Fortaleza, CE

## 👥 Equipe

- **Rafally** (Principal) - @rafalllyyx
- **Barbara** - @massoterapeutabarbaraa
- **Naomy** - @naomy_venus
- **Ribeiro** - @terapeuta.ribeiro
- **Nanda** - @nandaa_massoterapeuta
- **Suy** - @itsmesuyyya

---

Desenvolvido com ❤️ por equipe premium
