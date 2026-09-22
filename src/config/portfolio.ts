/**
 * =========================================================================
 * PORTFÓLIO / GALERIA DE PROJETOS
 * =========================================================================
 * Para adicionar um novo projeto à galeria, basta duplicar um bloco e
 * preencher com as informações do seu novo trabalho:
 *
 * {
 *   id: "novo-projeto",
 *   title: "TÍTULO DO PROJETO",
 *   category: "Video Editing" | "Motion Design" | "Stream Design" | "Graphic Design",
 *   image: "URL_DA_IMAGEM",
 *   description: "Breve explicação do que foi feito.",
 *   link: "https://...",
 *   year: "2026",
 *   tags: ["Tag 1", "Tag 2"],
 * }
 */

export type PortfolioCategory =
  | "Todos"
  | "Video Editing"
  | "Motion Design"
  | "Stream Design"
  | "Graphic Design";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Video Editing" | "Motion Design" | "Stream Design" | "Graphic Design";
  image: string;
  description: string;
  link?: string;
  year?: string;
  tags: string[];
}

export const portfolioCategories: PortfolioCategory[] = [
  "Todos",
  "Video Editing",
  "Motion Design",
  "Stream Design",
  "Graphic Design",
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "valorant-shadows",
    title: "Shadows // Valorant Montage",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    description: "Montagem de precisão com sincronia de beat perfeita, sound design de armas aprimorado e transições de câmera fluidas.",
    link: "https://youtube.com",
    year: "2026",
    tags: ["Montage", "Sound Design", "After Effects"],
  },
  {
    id: "kinetic-identity",
    title: "Kinetic Dark Stinger",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    description: "Transição stinger com lâminas cortantes, fumaça escura e partículas em alta velocidade para transmissões ao vivo.",
    link: "https://youtube.com",
    year: "2026",
    tags: ["Stinger", "Motion 3D", "Cinematic"],
  },
  {
    id: "tactical-stream-overlay",
    title: "Tactical HUD Stream Package",
    category: "Stream Design",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
    description: "Pacote completo de overlay minimalista inspirado em interfaces táticas militares. Telas de pausa, início e moldura de webcam.",
    link: "https://twitch.tv",
    year: "2026",
    tags: ["Twitch Overlay", "OBS Setup", "Minimalist"],
  },
  {
    id: "ranked-thumb-pack",
    title: "High-CTR Ranked Thumbnails",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description: "Conjunto de capas para YouTube com alto contraste, recorte de personagens limpo e tipografia impactante.",
    link: "https://instagram.com",
    year: "2026",
    tags: ["Thumbnails", "CTR Booster", "Photoshop"],
  },
  {
    id: "cs2-clutch-edit",
    title: "Relentless // CS2 Cinematic",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop",
    description: "Edição de jogadas históricas com correção de cor monocromática e mixagem pesada de graves.",
    link: "https://youtube.com",
    year: "2026",
    tags: ["CS2", "Velocity Sync", "Color Grade"],
  },
  {
    id: "sub-badges-vector",
    title: "Viper Blade Sub Badges",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
    description: "Emblemas vetoriais de assinatura e subscrição para chat da Twitch, desenhados para legibilidade em dimensões mínimas.",
    link: "https://twitch.tv",
    year: "2026",
    tags: ["Badges", "Vector Art", "Illustrator"],
  },
];
