/**
 * =========================================================================
 * REDES SOCIAIS E LINKS ("ONDE ME ENCONTRAR")
 * =========================================================================
 * Altere apenas os links abaixo colocando as suas URLs reais.
 * Se quiser desativar alguma rede temporariamente, basta deixar a URL vazia ("").
 */

export interface SocialLinks {
  youtube: string;
  tiktok: string;
  twitch: string;
  instagram: string;
  x: string;
  livepix: string;
  discord?: string;
}

export interface SocialItem {
  id: keyof SocialLinks;
  name: string;
  username: string;
  description: string;
  url: string;
  iconName: string;
  badge?: string;
  primaryActionText: string;
}

// =========================================================================
// COLE SEUS LINKS AQUI:
// =========================================================================
export const socials: SocialLinks = {
  // Seu canal do YouTube (ex: "https://youtube.com/@vortex")
  youtube: "https://youtube.com/@SEU_CANAL",

  // Seu perfil do TikTok (ex: "https://tiktok.com/@vortex")
  tiktok: "https://tiktok.com/@SEU_TIKTOK",

  // Seu canal da Twitch (ex: "https://twitch.tv/vortex")
  twitch: "https://twitch.tv/SEU_CANAL",

  // Seu perfil do Instagram (ex: "https://instagram.com/vortex")
  instagram: "https://instagram.com/SEU_INSTAGRAM",

  // Seu perfil do X / Twitter (ex: "https://x.com/vortex")
  x: "https://x.com/SEU_X",

  // Seu link de doação LivePix (ex: "https://livepix.gg/vortex")
  livepix: "https://livepix.gg/SEU_LIVEPIX",

  // Seu servidor do Discord (opcional)
  discord: "https://discord.gg/SEU_SERVIDOR",
};

/**
 * Metadados detalhados para exibição visual dos botões e cards de redes
 */
export const socialItems: SocialItem[] = [
  {
    id: "twitch",
    name: "Twitch",
    username: "@vortex",
    description: "Transmissões ao vivo quase diárias com gameplay e resenha",
    url: socials.twitch,
    iconName: "Twitch",
    badge: "AO VIVO",
    primaryActionText: "Assistir Live",
  },
  {
    id: "youtube",
    name: "YouTube",
    username: "@vortex",
    description: "Montagens em 4K 60FPS, vlogs e vídeos completos",
    url: socials.youtube,
    iconName: "Youtube",
    badge: "4K EDITS",
    primaryActionText: "Inscrever-se",
  },
  {
    id: "tiktok",
    name: "TikTok",
    username: "@vortex",
    description: "Cortes rápidos, melhores momentos e highlights de clutch",
    url: socials.tiktok,
    iconName: "Video",
    badge: "HIGHLIGHTS",
    primaryActionText: "Seguir no TikTok",
  },
  {
    id: "instagram",
    name: "Instagram",
    username: "@vortex",
    description: "Bastidores, setups, avisos de live e rotina criativa",
    url: socials.instagram,
    iconName: "Instagram",
    primaryActionText: "Ver Stories",
  },
  {
    id: "x",
    name: "X (Twitter)",
    username: "@vortex",
    description: "Opiniões rápidas, avisos de vídeos e interação diária",
    url: socials.x,
    iconName: "Twitter",
    primaryActionText: "Seguir no X",
  },
  {
    id: "livepix",
    name: "LivePix",
    username: "Apoio Direto",
    description: "Apoie o canal com mensagens e alertas em tempo real na live",
    url: socials.livepix,
    iconName: "Zap",
    badge: "APOIAR",
    primaryActionText: "Fazer um Pix",
  },
];
