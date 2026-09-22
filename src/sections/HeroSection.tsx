import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { socials } from '../config/socials';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Radio, Eye, Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Top Tactical Line */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Badge variant="tactical" size="sm" pulse>
            {siteConfig.availability.statusText}
          </Badge>
        </motion.div>

        {/* Central Logo / Monogram Blade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group cursor-default"
        >
          {/* Subtle Blade Glow */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-dark-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_35px_rgba(0,0,0,0.8)]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105"
            >
              <path d="M14 16 L28 48 L35 48 L22 16 Z" fill="#FFFFFF" />
              <path d="M50 16 L33 48 L27 48 L42 16 Z" fill="#94A3B8" />
              <circle cx="32" cy="24" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>
        </motion.div>

        {/* Brand Name / Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-[0.18em] sm:tracking-[0.22em] uppercase font-mono mb-4 leading-none"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium tracking-wider uppercase font-mono max-w-2xl mb-6"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Bio / Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xs sm:text-sm text-zinc-400 max-w-xl mb-10 leading-relaxed font-sans"
        >
          {siteConfig.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {/* Botão Principal: Assistir às minhas lives */}
          <Button
            href={socials.twitch || socials.youtube || '#links'}
            external={!!socials.twitch || !!socials.youtube}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[220px]"
            icon={<Radio className="w-4 h-4 text-rose-600 animate-pulse" />}
          >
            Assistir às minhas lives
          </Button>

          {/* Botão Secundário: Ver meus trabalhos */}
          <Button
            href="#services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-w-[220px]"
            icon={<Eye className="w-4 h-4 text-zinc-400" />}
          >
            Ver meus trabalhos
          </Button>
        </motion.div>

        {/* Tactical Badges / Specs Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-zinc-400 text-xs font-mono"
        >
          <span className="flex items-center gap-1.5 px-3 py-1 bg-dark-900/60 border border-dark-700/80 rounded">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            4K 60FPS WORKFLOW
          </span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span className="px-3 py-1 bg-dark-900/60 border border-dark-700/80 rounded">
            PRECISION AUDIO SYNC
          </span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span className="px-3 py-1 bg-dark-900/60 border border-dark-700/80 rounded">
            HIGH-CTR ASSETS
          </span>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-300 transition-colors">
        <a href="#links" aria-label="Rolar para os links" className="p-2">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
