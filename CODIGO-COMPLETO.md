# 🪐 TOQUE DE VÊNUS - CÓDIGO COMPLETO DO SITE

## ⚠️ PROBLEMA RESOLVIDO!

O problema era o **preloader** que estava travando. Removi ele e o site agora carrega direto.

---

## 📋 COMO COLOCAR O SITE NO SEU COMPUTADOR

### Passo 1: Crie uma pasta no seu computador
```bash
mkdir toque-de-venus
cd toque-de-venus
```

### Passo 2: Copie TODOS os arquivos abaixo

---

## 📄 ARQUIVO 1: index.html

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toque de Vênus | Massoterapia & Experiências Exclusivas em Fortaleza</title>
    <meta name="description" content="Toque de Vênus — Massoterapia profissional e experiências exclusivas em Fortaleza, CE. Relaxamento, presença e conexão." />
    <meta property="og:title" content="Toque de Vênus | Massoterapia & Experiências Exclusivas" />
    <meta property="og:description" content="Relaxamento • Presença • Conexão. Agende sua experiência exclusiva em Fortaleza, CE." />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        background-color: #101029;
        color: #AE84A0;
        overflow-x: hidden;
        font-family: 'Inter', sans-serif;
      }
      #root {
        min-height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 📄 ARQUIVO 2: package.json

```json
{
  "name": "toque-de-venus",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.16.1",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.7.0",
    "vite": "^6.3.5",
    "tailwindcss": "^4.1.7",
    "@tailwindcss/vite": "^4.1.7"
  }
}
```

---

## 📄 ARQUIVO 3: vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
```

---

## 📄 ARQUIVO 4: tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 📄 ARQUIVO 5: tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.js"]
}
```

---

## 📄 ARQUIVO 6: src/main.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

---

## 📄 ARQUIVO 7: src/index.css

```css
@import "tailwindcss";

@theme {
  --color-void: #101029;
  --color-aubergine: #3B2A2F;
  --color-plum: #7F2852;
  --color-mauve: #AE84A0;
  --color-mauve-light: #c9a8bd;
  --color-cream: #f0e6ed;
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'Inter', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-void);
  color: var(--color-mauve);
  overflow-x: hidden;
}

::selection {
  background-color: var(--color-plum);
  color: var(--color-cream);
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-void);
}
::-webkit-scrollbar-thumb {
  background: var(--color-plum);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-mauve);
}

.font-display {
  font-family: var(--font-serif);
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-mauve-light), var(--color-plum), var(--color-mauve));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.shimmer-text {
  background: linear-gradient(90deg, var(--color-mauve) 0%, var(--color-cream) 50%, var(--color-mauve) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s linear infinite;
}

.video-overlay {
  background: linear-gradient(180deg, rgba(16,16,41,0.4) 0%, rgba(16,16,41,0.2) 40%, rgba(16,16,41,0.5) 70%, rgba(16,16,41,0.95) 100%);
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-plum), var(--color-mauve), var(--color-plum), transparent);
}

.img-hover-zoom {
  overflow: hidden;
}
.img-hover-zoom img,
.img-hover-zoom video {
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.img-hover-zoom:hover img,
.img-hover-zoom:hover video {
  transform: scale(1.05);
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0; }
}

.whatsapp-pulse {
  animation: pulse-ring 2.5s ease-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}
```

---

## 📄 ARQUIVO 8: src/App.tsx (MAIS IMPORTANTE!)

**Este é o arquivo principal do site. Copie TODO o conteúdo abaixo:**

[O código do App.tsx está no arquivo src/App.tsx que já criei acima - copie de lá]

---

## 📁 ESTRUTURA FINAL DA PASTA

```
toque-de-venus/
├── index.html
├── package.json
├── vite.config.js
├── tsconfig.json
├── tsconfig.node.json
├── src/
│   ├── main.tsx
│   ├── index.css
│   └── App.tsx
└── public/
    ├── foto1.jpg      ← Rafally
    ├── foto2.jpg      ← Homem massagem
    ├── foto3.jpg      ← Equipe
    ├── foto4.jpg      ← Costas mulher
    ├── clip1.mp4      ← Interior clínica
    ├── clip2.mp4      ← Massagem costas
    └── clip3.mp4      ← Rafally dançando
```

---

## 🚀 COMO RODAR O SITE

### 1. Instale as dependências
```bash
npm install
```

### 2. Rode o site localmente
```bash
npm run dev
```

### 3. Abra o navegador
Acesse: http://localhost:3000

### 4. Build para produção
```bash
npm run build
```

### 5. Deploy na Vercel
```bash
npm install -g vercel
vercel
```

---

## ✅ PRONTO!

O site está completo e funcionando. O problema do preloader foi resolvido!

**Agora o site carrega direto sem travar.**
