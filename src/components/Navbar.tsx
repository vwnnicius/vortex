import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { socials } from '../config/socials';
import { Badge } from './ui/Badge';
import { Menu, X, Radio, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Onde me Encontrar', href: '#links' },
    { label: 'Edit em Destaque', href: '#featured' },
    { label: 'Meus Trabalhos', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Apoiar', href: '#livepix' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-dark-700/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Ir para o início"
        >
          <div className="w-8 h-8 rounded-sm bg-dark-900 border border-zinc-700/80 flex items-center justify-center group-hover:border-white transition-colors">
            <svg
              width="18"
              height="18"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 16 L28 48 L35 48 L22 16 Z" fill="#FFFFFF" />
              <path d="M50 16 L33 48 L27 48 L42 16 Z" fill="#94A3B8" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black text-white tracking-[0.2em] uppercase font-mono leading-none group-hover:text-zinc-200 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[9px] font-mono text-zinc-400 tracking-wider uppercase mt-0.5">
              Official Hub
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action / Status */}
        <div className="hidden sm:flex items-center gap-3">
          <Badge variant="live" size="sm" pulse>
            LIVES & EDITS
          </Badge>

          <a
            href={socials.twitch || socials.youtube || '#links'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 bg-dark-850 hover:bg-dark-800 text-white border border-dark-700 hover:border-zinc-500 rounded-sm transition-all"
          >
            <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span>Assistir Live</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={socials.livepix}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono px-2.5 py-1 bg-dark-900 border border-zinc-700 text-zinc-200 rounded-sm"
          >
            LivePix
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md bg-dark-900 border border-dark-750 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-dark-750 px-4 py-6 space-y-4 animate-slide-up">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-white py-2 border-b border-dark-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={socials.twitch || '#links'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full text-center py-2.5 bg-white text-dark-950 text-xs font-mono font-bold tracking-wider uppercase rounded-sm"
            >
              Assistir às Lives
            </a>
            <a
              href={socials.livepix}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full text-center py-2.5 bg-dark-900 border border-zinc-700 text-white text-xs font-mono tracking-wider uppercase rounded-sm"
            >
              Apoiar pelo LivePix
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
