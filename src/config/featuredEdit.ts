/**
 * =========================================================================
 * CONFIGURAÇÃO DO EDIT EM DESTAQUE (VALORANT MONTAGE)
 * =========================================================================
 * Informações da sua melhor montagem de Valorant em destaque.
 */

export interface FeaturedEditConfig {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  embedUrl: string;
  duration: string;
  craftBadges: string[];
  tags: string[];
}

export const featuredEdit: FeaturedEditConfig = {
  title: "VALORANT // FROM THE SHADOWS",
  category: "VALORANT MONTAGE • OMEN",
  description: "Edição de jogadas de Omen com sincronização rítmica milimétrica no After Effects, sound design imersivo construído camada por camada e dinâmica fluida de cortes.",
  
  // Imagem de alta resolução com estética sombria de Valorant/Omen
  thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",

  // Link para o seu canal ou vídeo específico no YouTube
  videoUrl: "https://www.youtube.com/@VortexYVP",

  // Link do embed do player (opcional; se vazio abrirá o canal/vídeo externo)
  embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",

  duration: "02:15",
  craftBadges: ["After Effects", "Sound Design", "Beat Sync"],
  tags: ["After Effects", "Sound FX 3D", "Valorant", "Omen Outplays"],
};
