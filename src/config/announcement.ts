/**
 * =========================================================================
 * BANNER DE AVISO / NOVIDADES
 * =========================================================================
 * Use esta seção para anunciar novos vídeos, edits, lives especiais ou promoções.
 * 
 * PARA DESATIVAR O AVISO:
 * Altere 'enabled: true' para 'enabled: false'. A seção desaparecerá automaticamente.
 */

export interface AnnouncementConfig {
  // Ativa ou desativa a exibição do banner no topo da página
  enabled: boolean;

  // Tag do tipo de aviso (ex: "NOVO EDIT", "AO VIVO AGORA", "PROMOÇÃO", "NOVIDADE")
  badge: string;

  // Título em destaque
  title: string;

  // Mensagem ou descrição rápida
  message: string;

  // Texto do botão de ação
  buttonText: string;

  // Link de destino ao clicar no botão
  buttonLink: string;

  // Indica se deve abrir em nova aba
  openInNewTab: boolean;
}

export const announcement: AnnouncementConfig = {
  // =========================================================================
  // DEFINA COMO 'false' PARA ESCONDER ESSE BANNER:
  // =========================================================================
  enabled: true,

  // =========================================================================
  // ALTERE O CONTEÚDO DO AVISO AQUI:
  // =========================================================================
  badge: "NOVO EDIT NO AR",
  title: "Valorant Montage acabou de sair no YouTube",
  message: "Sincronização pesada, sound design detalhado e jogadas insanas. Confira agora!",
  buttonText: "Assistir agora",
  buttonLink: "https://youtube.com",
  openInNewTab: true,
};
