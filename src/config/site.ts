/**
 * =========================================================================
 * CONFIGURAÇÃO GERAL DO SITE / IDENTIDADE VISUAL
 * =========================================================================
 * Informações centrais da sua identidade como streamer e editor de Valorant.
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  bio: string;
  availability: {
    isAvailable: boolean;
    statusText: string;
  };
  contactEmail: string;
  location: string;
  heroBadges: string[];
  seo: {
    title: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  // Nome principal
  name: "VORTEX",

  // Linha de identificação principal abaixo do nome
  tagline: "Streamer • Video Editor • Motion Designer • Designer",

  // Frase de impacto curta
  headline: "Das sombras para a tela — ritmo, impacto e sound design.",

  // Breve apresentação exibida no Hero
  bio: "Criador de conteúdo e editor focado no universo de Valorant. Especialista em montagens com After Effects, sincronização cirúrgica de beats e sound design imersivo. Main Omen.",

  // Status de disponibilidade para projetos ou edits
  availability: {
    isAvailable: true,
    statusText: "ENCOMENDAS DE EDITS: ABERTAS",
  },

  // Badges autênticas exibidas no Hero (sem restrições rígidas de 4K/CTR)
  heroBadges: [
    "MAIN OMEN // VALORANT",
    "AFTER EFFECTS",
    "SOUND DESIGN",
    "BEAT SYNC & PACING",
  ],

  // Seu e-mail de contato profissional
  contactEmail: "contato.vortex@exemplo.com",

  // Localização
  location: "Brasil",

  // Configurações de SEO
  seo: {
    title: "VORTEX — Streamer • Video Editor • Main Omen",
    description: "Hub oficial de VORTEX. Streamer, Editor de Vídeo com After Effects e Sound Design, e jogador de Valorant (Main Omen).",
  },
};
