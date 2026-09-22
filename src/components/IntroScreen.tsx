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
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

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
          <div className="absolute top-6 left-6 text-[10px] font-mono text-omen-400">
            [SYS_INIT // VALORANT ARCHIVE]
          </div>
          <div className="absolute top-6 right-6">
            <button
              onClick={onComplete}
              className="text-[10px] font-mono text-dark-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              Pular [Esc]
            </button>
          </div>

          {/* Central Monogram and Logo */}
          <div className="relative flex flex-col items-center">
            {/* Omen Violet Backlight Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute w-44 h-44 bg-omen-500/30 rounded-full blur-3xl pointer-events-none"
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
                className="drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                <path d="M14 16 L28 48 L35 48 L22 16 Z" fill="#EDE9FE" />
                <path d="M50 16 L33 48 L27 48 L42 16 Z" fill="#8B5CF6" />
                <circle cx="28" cy="23" r="1.2" fill="#C4B5FD" />
                <circle cx="32" cy="20" r="1.4" fill="#FFFFFF" />
                <circle cx="36" cy="23" r="1.2" fill="#C4B5FD" />
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
              <span className="h-[1px] w-6 bg-omen-700" />
              <span className="text-[10px] sm:text-xs font-mono text-omen-300 uppercase tracking-widest">
                From The Shadows
              </span>
              <span className="h-[1px] w-6 bg-omen-700" />
            </motion.div>
          </div>

          {/* Bottom subtle progress line with purple gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-dark-850">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-transparent via-omen-400 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
