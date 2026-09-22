/**
 * =========================================================================
 * CONFIGURAÇÃO DO EDIT EM DESTAQUE
 * =========================================================================
 * Modifique aqui as informações da sua melhor montagem/vídeo em destaque.
 * O componente exibe um card de grande impacto cinematográfico e suporta
 * tanto abrir um reprodutor em modal quanto abrir diretamente na plataforma.
 */

export interface FeaturedEditConfig {
  // Título do edit
  title: string;

  // Subtítulo ou categoria (ex: "VALORANT HIGHLIGHTS")
  category: string;

  // Descrição curta e objetiva
  description: string;

  // URL da imagem de capa (pode ser um link da web ou um arquivo local em /public)
  thumbnail: string;

  // URL do vídeo (ex: link do YouTube, embed ou vídeo mp4)
  videoUrl: string;

  // URL do embed direto caso queira exibir o player dentro da página (YouTube Embed)
  embedUrl: string;

  // Duração do edit (ex: "02:45")
  duration: string;

  // Resolução / Taxa de quadros
  specs: string;

  // Tags técnicas da edição
  tags: string[];

  // Estatísticas ou conquistas do vídeo (opcional)
  stats?: {
    views?: string;
    likes?: string;
    software?: string;
  };
}

export const featuredEdit: FeaturedEditConfig = {
  // =========================================================================
  // ALTERE AQUI O TÍTULO E TEXTO:
  // =========================================================================
  title: "VALORANT — Montage",
  category: "GAMEPLAY & SOUND DESIGN",
  description: "Um dos meus edits de gameplay com foco em ritmo acelerado, sincronização milimétrica de beats, transições sem costura e sound design cinematográfico.",

  // =========================================================================
  // ALTERE AQUI A IMAGEM DE THUMBNAIL:
  // =========================================================================
  // Imagem de alta resolução com clima dark/escuridão e foco
  thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",

  // =========================================================================
  // ALTERE AQUI O LINK DO VÍDEO:
  // =========================================================================
  videoUrl: "https://www.youtube.com/watch?v=EXEMPLO_DO_SEU_VIDEO",

  // Link de embed para tocar dentro do modal (opcional; se vazio abre videoUrl)
  // Exemplo formato embed: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",

  // Detalhes complementares
  duration: "02:30",
  specs: "4K UHD • 60 FPS",
  tags: ["After Effects", "Premiere Pro", "RSMB", "Sound FX 3D"],

  stats: {
    views: "50K+",
    likes: "4.8K",
    software: "AE 2024 / PR 2024",
  },
};
