/**
 * =========================================================================
 * MEUS TRABALHOS / SERVIÇOS
 * =========================================================================
 * Apresentação dos 4 pilares de especialidade profissional.
 * Mantenha o tom sóbrio e profissional sem parecer um infoproduto agressivo.
 */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  featuredTag?: string;
}

export const services: ServiceItem[] = [
  {
    id: "video-editing",
    title: "Video Editing",
    subtitle: "RITMO & NARRATIVA",
    description: "Montagens, cortes e vídeos com foco em ritmo, impacto e narrativa visual. Sincronia de áudio cirúrgica para prender a atenção do primeiro ao último segundo.",
    deliverables: [
      "Montagens de gameplay e highlights",
      "Edição dinâmica para YouTube e TikTok",
      "Sound design imersivo e mixagem",
      "Color grading cinematográfico",
    ],
    tools: ["Premiere Pro", "After Effects", "Reaper"],
    featuredTag: "PRINCIPAL",
  },
  {
    id: "motion-design",
    title: "Motion Design",
    subtitle: "IDENTIDADE EM MOVIMENTO",
    description: "Animações, transições, elementos gráficos e identidade em movimento. Tipografia cinética e efeitos de pós-produção que elevam o padrão de qualquer produção.",
    deliverables: [
      "Transições personalizadas e stinger",
      "Intros e vinhetas cinematográficas",
      "Lower thirds e títulos animados",
      "VFX táticos e partículas sutis",
    ],
    tools: ["After Effects", "Cinema 4D", "Blender"],
  },
  {
    id: "stream-design",
    title: "Stream Design",
    subtitle: "ECOSSISTEMA DE TRANSMISSÃO",
    description: "Overlays, alerts, telas, transições e identidade visual para streamers. Tudo estruturado para OBS Studio com leveza máxima e acabamento de alta linhagem.",
    deliverables: [
      "Telas de início, pausa, fim e Just Chatting",
      "Overlays de câmera e alertas animados",
      "Painéis para Twitch e badges personalizadas",
      "Setup otimizado sem perda de FPS no jogo",
    ],
    tools: ["OBS Studio", "Photoshop", "After Effects"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    subtitle: "DIREÇÃO DE ARTE & PEÇAS VISUAIS",
    description: "Artes, thumbnails, posts e peças visuais. Criação de thumbnails com alto CTR para YouTube e peças estáticas com contraste marcante e tipografia expressiva.",
    deliverables: [
      "Thumbnails de alto clique para YouTube",
      "Banners para Twitter/X, Twitch e YouTube",
      "Identidade de marca e logotipos",
      "Cards de anúncios e capas de projetos",
    ],
    tools: ["Photoshop", "Illustrator", "Figma"],
  },
];
