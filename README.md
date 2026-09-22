# VORTEX — Landing Page Oficial

Landing page pessoal e profissional com estética **dark**, minimalista e cinematográfica, inspirada na atmosfera de **Toji Fushiguro** (Jujutsu Kaisen).

Construído com **React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide React**, preparado com build otimizado para deploy instantâneo na **Vercel**.

---

## ⚡ Como Rodar o Projeto Localmente

No terminal, dentro da pasta do projeto:

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Gerar a versão de produção (Build)
npm run build
```

---

## 🎯 ONDE EDITAR SUAS INFORMAÇÕES (SUPER FÁCIL)

Todos os links, textos, vídeos e projetos estão centralizados na pasta `src/config/`.
**Você não precisa mexer em nenhum código HTML ou componente para personalizar.**

### 1. Suas Redes Sociais e LivePix
📁 Arquivo: `src/config/socials.ts`

Basta alterar os links:
```ts
export const socials = {
  youtube: "https://youtube.com/@SEU_CANAL",
  tiktok: "https://tiktok.com/@SEU_TIKTOK",
  twitch: "https://twitch.tv/SEU_CANAL",
  instagram: "https://instagram.com/SEU_INSTAGRAM",
  x: "https://x.com/SEU_X",
  livepix: "https://livepix.gg/SEU_LIVEPIX",
  discord: "https://discord.gg/SEU_SERVIDOR",
};
```

### 2. Edit em Destaque (Vídeo / Montagem)
📁 Arquivo: `src/config/featuredEdit.ts`

Altere o título, descrição, imagem de capa e links:
```ts
export const featuredEdit = {
  title: "VALORANT — Montage",
  category: "GAMEPLAY & SOUND DESIGN",
  description: "Um dos meus edits de gameplay...",
  thumbnail: "LINK_OU_CAMINHO_DA_FOTO",
  videoUrl: "https://www.youtube.com/watch?v=...",
  embedUrl: "https://www.youtube-nocookie.com/embed/...",
  duration: "02:30",
  specs: "4K UHD • 60 FPS",
  tags: ["After Effects", "Premiere Pro", "RSMB", "Sound FX 3D"],
};
```

### 3. Portfólio / Galeria de Trabalhos
📁 Arquivo: `src/config/portfolio.ts`

Para adicionar um novo trabalho, basta copiar e colar um item no array:
```ts
{
  id: "meu-novo-edit",
  title: "Nome do Projeto",
  category: "Video Editing", // ou "Motion Design", "Stream Design", "Graphic Design"
  image: "URL_DA_FOTO",
  description: "Descrição do que você fez.",
  link: "https://youtube.com/...",
  year: "2026",
  tags: ["Valorant", "Premiere", "Color Grade"],
}
```

### 4. Banner de Avisos / Novidades (com Liga/Desliga)
📁 Arquivo: `src/config/announcement.ts`

Para desativar o aviso, mude `enabled` para `false`:
```ts
export const announcement = {
  enabled: true, // Mude para false para ESCONDER o banner
  badge: "NOVO EDIT NO AR",
  title: "Valorant Montage acabou de sair no YouTube",
  message: "Sincronização pesada e sound design detalhado.",
  buttonText: "Assistir agora",
  buttonLink: "https://youtube.com/...",
  openInNewTab: true,
};
```

### 5. Seu Nome, Bio e Informações Gerais
📁 Arquivo: `src/config/site.ts`

Altere seu nome de criador, slogan, texto da bio e e-mail:
```ts
export const siteConfig = {
  name: "VORTEX",
  tagline: "Streamer • Video Editor • Motion Designer • Designer",
  headline: "Narrativa, ritmo e impacto visual.",
  bio: "Criador de conteúdo focado em gameplays de alto nível...",
  contactEmail: "seuemail@exemplo.com",
};
```

---

## 🚀 Como fazer Deploy na Vercel

1. Suba o projeto para o seu repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
3. Clique em **"Add New Project"** e selecione este repositório.
4. O Vercel detectará automaticamente o **Vite** e configurará tudo:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy** e pronto! O arquivo `vercel.json` já está configurado para garantir que as rotas e assets carreguem sem nenhum problema.

---

## 🎨 Paleta de Cores e Conceito

- Fundo Principal: `#050505` (Preto absoluto / Void)
- Superfícies Elevadas: `#0A0A0A`, `#111111`, `#161616`
- Bordas e Separações: `#1A1A1A`, `#262626`
- Tipografia: `#FFFFFF` (Alto contraste) e `#A0A0A0` (Cinza neutro)
- Acentos: Aço frio (`#94A3B8`) e discreto indicador de live (`#E11D48`)
