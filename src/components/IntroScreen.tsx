import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export interface IntroScreenProps {
  onComplete: () => void;
  brandName?: string;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({
  onComplete,
  brandName = 'VORTEX',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Se o usuário prefere movimentos reduzidos, pular instantaneamente
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    // Duração rápida e elegante (~1.4s total de experiência de abertura)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1100);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1600);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950 select-none overflow-hidden"
        >
          {/* Subtle tactical corner ticks */}
          <div className="absolute top-6 left-6 text-[10px] font-mono text-zinc-400">
            [SYS_INIT // 2026]
          </div>
          <div className="absolute top-6 right-6">
            <button
              onClick={onComplete}
              className="text-[10px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors uppercase tracking-widest"
            >
              Pular [Esc]
            </button>
          </div>

          {/* Central Monogram and Logo */}
          <div className="relative flex flex-col items-center">
            {/* Ambient Backlight Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.25 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none"
            />

            {/* Geometric Razor V Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <path
                  d="M14 16 L28 48 L35 48 L22 16 Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M50 16 L33 48 L27 48 L42 16 Z"
                  fill="#94A3B8"
                />
                <circle cx="32" cy="24" r="1.5" fill="#FFFFFF" />
              </svg>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.5em' }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl font-black text-white uppercase ml-2 tracking-[0.5em]"
            >
              {brandName}
            </motion.h1>

            {/* Tagline Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="h-[1px] w-6 bg-zinc-700" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest">
                Digital Identity
              </span>
              <span className="h-[1px] w-6 bg-zinc-700" />
            </motion.div>
          </div>

          {/* Bottom subtle progress line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-dark-850">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
