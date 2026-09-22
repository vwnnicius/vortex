/**
 * =========================================================================
 * REDES SOCIAIS E LINKS OFICIAIS DO VORTEX
 * =========================================================================
 * Todos os links oficiais de onde encontrar o VortexYVP na internet.
 */

export interface SocialLinks {
  youtube: string;
  tiktok: string;
  twitch: string;
  instagram: string;
  x: string;
  livepix: string;
  discord: string;
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
  isCopyable?: boolean;
}

export const socials: SocialLinks = {
  youtube: "https://www.youtube.com/@VortexYVP",
  tiktok: "https://www.tiktok.com/@vortexyvp",
  twitch: "https://www.twitch.tv/vortexyvp",
  instagram: "https://www.instagram.com/vortexyvp",
  x: "https://x.com/Vortexyvp",
  livepix: "https://livepix.gg/vortexyvp",
  discord: "@vortexyvp",
};

export const socialItems: SocialItem[] = [
  {
    id: "twitch",
    name: "Twitch",
    username: "@vortexyvp",
    description: "Transmissões ao vivo com gameplay de Valorant (Main Omen) e resenha",
    url: socials.twitch,
    iconName: "Twitch",
    badge: "AO VIVO",
    primaryActionText: "Assistir Live",
  },
  {
    id: "youtube",
    name: "YouTube",
    username: "@VortexYVP",
    description: "Montagens de Valorant com After Effects, sound design avançado e cuts",
    url: socials.youtube,
    iconName: "Youtube",
    badge: "MONTAGENS",
    primaryActionText: "Inscrever-se",
  },
  {
    id: "tiktok",
    name: "TikTok",
    username: "@vortexyvp",
    description: "Clips rápidos, clutchs de Omen e highlights de jogadas",
    url: socials.tiktok,
    iconName: "Video",
    badge: "HIGHLIGHTS",
    primaryActionText: "Seguir no TikTok",
  },
  {
    id: "discord",
    name: "Discord",
    username: "@vortexyvp",
    description: "Fale comigo diretamente no Discord para encomendas de edits e trocas de ideia",
    url: "#",
    iconName: "MessageSquare",
    badge: "DIRETO",
    primaryActionText: "Copiar Tag",
    isCopyable: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    username: "@vortexyvp",
    description: "Bastidores, setups, rotina de edição e avisos de stream",
    url: socials.instagram,
    iconName: "Instagram",
    primaryActionText: "Ver Stories",
  },
  {
    id: "x",
    name: "X (Twitter)",
    username: "@Vortexyvp",
    description: "Avisos de novas montagens, pensamentos e interação com a comunidade",
    url: socials.x,
    iconName: "Twitter",
    primaryActionText: "Seguir no X",
  },
  {
    id: "livepix",
    name: "LivePix",
    username: "Apoio Direto",
    description: "Apoie o canal e a produção de novas montagens com alertas em live",
    url: socials.livepix,
    iconName: "Zap",
    badge: "APOIAR",
    primaryActionText: "Mandar um Pix",
  },
];
