import React from 'react';
import { siteConfig } from '../config/site';
import { socials } from '../config/socials';
import {
  Youtube,
  Twitch,
  Instagram,
  Twitter,
  Video,
  Zap,
  ArrowUp,
  Mail,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const compactSocials = [
    { icon: <Twitch className="w-4 h-4" />, href: socials.twitch, label: 'Twitch' },
    { icon: <Youtube className="w-4 h-4" />, href: socials.youtube, label: 'YouTube' },
    { icon: <Video className="w-4 h-4" />, href: socials.tiktok, label: 'TikTok' },
    { icon: <Instagram className="w-4 h-4" />, href: socials.instagram, label: 'Instagram' },
    { icon: <Twitter className="w-4 h-4" />, href: socials.x, label: 'X (Twitter)' },
    { icon: <Zap className="w-4 h-4 text-emerald-400" />, href: socials.livepix, label: 'LivePix' },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-dark-700/80 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Brand Monogram & Name */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded bg-dark-900 border border-zinc-700 flex items-center justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 16 L28 48 L35 48 L22 16 Z" fill="#FFFFFF" />
              <path d="M50 16 L33 48 L27 48 L42 16 Z" fill="#94A3B8" />
            </svg>
          </div>

          <div>
            <h3 className="text-xl font-black text-white tracking-[0.25em] uppercase font-mono">
              {siteConfig.name}
            </h3>
            <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase mt-1">
              Streamer • Editor • Motion Designer • Designer
            </p>
          </div>
        </div>

        {/* Compact Social Icons Bar */}
        <div className="flex items-center justify-center gap-3">
          {compactSocials.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-9 h-9 rounded bg-dark-900 border border-dark-700 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-105"
            >
              {item.icon}
            </a>
          ))}
          {siteConfig.contactEmail && (
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              aria-label="Enviar E-mail"
              className="w-9 h-9 rounded bg-dark-900 border border-dark-700 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-dark-900 hover:bg-dark-850 text-zinc-400 hover:text-white border border-dark-750 hover:border-zinc-600 text-xs font-mono tracking-wider uppercase transition-all"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-dark-750/70 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-2">
          <span>© 2026 — Todos os direitos reservados.</span>
          <span className="text-[11px] text-zinc-400">
            [DARK MINIMAL DESIGN // INSPIRED BY TOJI ATMOSPHERE]
          </span>
        </div>
      </div>
    </footer>
  );
};
