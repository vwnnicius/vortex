/**
 * =========================================================================
 * PORTFÓLIO / GALERIA DE PROJETOS
 * =========================================================================
 * Foco ativo em Valorant Montage e Video Editing.
 * As categorias de Motion, Stream e Graphic estão marcadas como "Em Breve".
 */

export type PortfolioCategory =
  | "Todos"
  | "Valorant Montage"
  | "Video Editing"
  | "Motion Design"
  | "Stream Design"
  | "Graphic Design";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Valorant Montage" | "Video Editing" | "Motion Design" | "Stream Design" | "Graphic Design";
  image: string;
  description: string;
  status: 'active' | 'coming_soon';
  link?: string;
  year?: string;
  tags: string[];
}

export const portfolioCategories: PortfolioCategory[] = [
  "Todos",
  "Valorant Montage",
  "Video Editing",
  "Motion Design",
  "Stream Design",
  "Graphic Design",
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "omen-phantom-montage",
    title: "Phantom Strike // Valorant Montage",
    category: "Valorant Montage",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    description: "Montagem de clutches e jogadas rápidas de Omen com sincronização cirúrgica no After Effects e Sound Design de armas detalhado.",
    status: "active",
    link: "https://www.youtube.com/@VortexYVP",
    year: "2026",
    tags: ["Valorant", "After Effects", "Sound Design", "Beat Sync"],
  },
  {
    id: "shrouded-step-edit",
    title: "Shrouded Step // Gameplay Sync",
    category: "Valorant Montage",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
    description: "Edição com transições suaves de teleporte, correção de cor com atmosfera fria e mixagem pesada de graves.",
    status: "active",
    link: "https://www.youtube.com/@VortexYVP",
    year: "2026",
    tags: ["Omen Teleport", "After Effects", "Velocity", "Sound FX"],
  },
  {
    id: "competitive-highlights",
    title: "Apex Rounds // Valorant Highlights",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop",
    description: "Compilação dinâmica de melhores momentos ranqueados, cortes rápidos e retenção máxima para redes sociais.",
    status: "active",
    link: "https://www.tiktok.com/@vortexyvp",
    year: "2026",
    tags: ["TikTok Clips", "Shorts", "Highlights", "Fast Cuts"],
  },
  {
    id: "motion-preview-item",
    title: "Pacote de Transições Stinger",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    description: "Transições e elementos gráficos em movimento para transmissões e vídeos.",
    status: "coming_soon",
    year: "2026",
    tags: ["Em Breve", "Motion 3D", "After Effects"],
  },
  {
    id: "stream-preview-item",
    title: "Overlay Tático Omen OBS",
    category: "Stream Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description: "Conjunto de telas de início, pausa e molduras para stream de Valorant.",
    status: "coming_soon",
    year: "2026",
    tags: ["Em Breve", "OBS Setup", "Overlay"],
  },
  {
    id: "design-preview-item",
    title: "Pack de Thumbnails Ilustradas",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
    description: "Capas personalizadas de alto contraste para vídeos de Valorant.",
    status: "coming_soon",
    year: "2026",
    tags: ["Em Breve", "Thumbnails", "Photoshop"],
  },
];
