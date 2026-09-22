import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { socials } from '../config/socials';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Radio, Film, ChevronDown, Flame } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Omen Shadow Mist Top Line */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-omen-500/60 to-transparent" />

      {/* Floating Ambient Omen Backlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-omen-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Badge variant="omen" size="sm" pulse>
            {siteConfig.availability.statusText}
          </Badge>
        </motion.div>

        {/* Central Logo / Omen Monogram Blade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group cursor-default"
        >
          {/* Omen Purple Aura */}
          <div className="absolute inset-0 bg-omen-500/25 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-dark-900 border border-omen-700/80 flex items-center justify-center shadow-omen-glow group-hover:border-omen-400 transition-all duration-300">
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105"
            >
              <path d="M14 16 L28 48 L35 48 L22 16 Z" fill="#FFFFFF" />
              <path d="M50 16 L33 48 L27 48 L42 16 Z" fill="#8B5CF6" />
              {/* Omen 3-slit eye hint */}
              <circle cx="28" cy="23" r="1.2" fill="#C4B5FD" />
              <circle cx="32" cy="20" r="1.4" fill="#FFFFFF" />
              <circle cx="36" cy="23" r="1.2" fill="#C4B5FD" />
            </svg>
          </div>
        </motion.div>

        {/* Brand Name / Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-[0.16em] sm:tracking-[0.2em] uppercase font-mono mb-4 leading-none"
        >
          <span className="bg-gradient-to-b from-white via-dark-50 to-omen-200 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-omen-300 font-medium tracking-wider uppercase font-mono max-w-2xl mb-5"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Bio / Focus */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xs sm:text-sm text-dark-200 max-w-xl mb-10 leading-relaxed font-sans"
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
            href={socials.twitch}
            external
            variant="omen"
            size="lg"
            className="w-full sm:w-auto min-w-[220px]"
            icon={<Radio className="w-4 h-4 text-white animate-pulse" />}
          >
            Assistir às minhas lives
          </Button>

          {/* Botão Secundário: Ver minhas montagens */}
          <Button
            href="#featured"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-w-[220px]"
            icon={<Film className="w-4 h-4 text-omen-300" />}
          >
            Ver minhas montagens
          </Button>
        </motion.div>

        {/* Tactical Creator Badges (Sem restrições rígidas de 4K/CTR) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-omen-300 text-xs font-mono"
        >
          {siteConfig.heroBadges.map((badge, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1 bg-dark-900/80 border border-omen-800/80 hover:border-omen-500 rounded text-[11px] tracking-wider transition-colors"
            >
              <Flame className="w-3 h-3 text-omen-400" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-omen-400 hover:text-white transition-colors">
        <a href="#links" aria-label="Rolar para os links" className="p-2">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
