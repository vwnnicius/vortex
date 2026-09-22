/**
 * =========================================================================
 * CONFIGURAÇÃO GERAL DO SITE / IDENTIDADE VISUAL
 * =========================================================================
 * Altere aqui as informações centrais da sua identidade como streamer e criador.
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
  seo: {
    title: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  // Nome principal ou apelido da sua marca/canal
  name: "VORTEX",

  // Linha de identificação principal abaixo do nome
  tagline: "Streamer • Video Editor • Motion Designer • Designer",

  // Frase de impacto curta para a abertura
  headline: "Narrativa, ritmo e impacto visual.",

  // Breve apresentação exibida no Hero
  bio: "Criador de conteúdo focado em gameplays de alto nível, edição cinematográfica com sound design imersivo e criação de identidades visuais de elite para o cenário digital.",

  // Status de disponibilidade para projetos ou lives
  availability: {
    isAvailable: true, // Defina 'false' se estiver com agenda fechada
    statusText: "DISPONÍVEL PARA PROJETOS & EDITS",
  },

  // Seu e-mail de contato profissional
  contactEmail: "contato.vortex@exemplo.com",

  // Localização aproximada / fuso (opcional)
  location: "Brasil (BRT)",

  // Configurações de SEO
  seo: {
    title: "VORTEX — Streamer • Editor • Motion Designer",
    description: "Hub oficial de VORTEX. Streamer, Editor de Vídeo, Motion Designer e Designer. Assista às lives, confira edits de gameplay e conheça meus trabalhos.",
  },
};
