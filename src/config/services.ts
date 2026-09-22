/**
 * =========================================================================
 * MEUS TRABALHOS / SERVIÇOS
 * =========================================================================
 * Video Editing é a especialidade ativa com foco em Valorant.
 * Motion, Stream Design e Graphic Design são marcados como "Em Breve" com glass blur.
 */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'active' | 'coming_soon';
  deliverables: string[];
  tools: string[];
  featuredTag?: string;
}

export const services: ServiceItem[] = [
  {
    id: "video-editing",
    title: "Video Editing",
    subtitle: "ESPECIALIDADE ATIVA",
    description: "Montagens cinematográficas de Valorant, cortes rápidos e vídeos com foco em impacto sonoro e ritmo. Edições construídas no After Effects com sincronização precisa de beats e sound design imersivo.",
    status: "active",
    deliverables: [
      "Montagens de gameplay de Valorant (Clutches & Kills)",
      "Sincronização milimétrica de ritmo e batida (Beat Sync)",
      "Sound design detalhado (efeitos de armas, passos e habilidades)",
      "Edições dinâmicas para YouTube, TikTok e Reels",
    ],
    tools: ["After Effects", "Premiere Pro", "Sound Design"],
    featuredTag: "DISPONÍVEL AGORA",
  },
  {
    id: "motion-design",
    title: "Motion Design",
    subtitle: "EXPANSÃO FUTURA",
    description: "Animações, transições personalizadas e tipografia cinética. Em desenvolvimento para novos pacotes visuais.",
    status: "coming_soon",
    deliverables: [
      "Transições personalizadas e stinger",
      "Intros e vinhetas cinematográficas",
      "Lower thirds animados",
    ],
    tools: ["After Effects", "Blender"],
  },
  {
    id: "stream-design",
    title: "Stream Design",
    subtitle: "EXPANSÃO FUTURA",
    description: "Overlays, alertas e identidade visual para streamers. Pacote em preparação para futuras encomendas.",
    status: "coming_soon",
    deliverables: [
      "Telas de início, pausa e encerramento",
      "Overlays de webcam e layout tático",
      "Painéis e badges para Twitch",
    ],
    tools: ["OBS Studio", "Photoshop"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    subtitle: "EXPANSÃO FUTURA",
    description: "Thumbnails, banners e peças visuais para criadores de conteúdo.",
    status: "coming_soon",
    deliverables: [
      "Thumbnails ilustradas e tratadas",
      "Banners para Twitter/X, Twitch e YouTube",
      "Identidade visual estática",
    ],
    tools: ["Photoshop", "Illustrator"],
  },
];
