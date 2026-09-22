import React from 'react';
import { motion } from 'framer-motion';
import { socials } from '../config/socials';
import { Button } from '../components/ui/Button';
import { Zap, Heart, MessageSquare, Flame } from 'lucide-react';

export const LivePixSection: React.FC = () => {
  return (
    <section id="livepix" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl bg-dark-900 border border-omen-700/80 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-omen-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Line Decorator */}
          <div className="flex items-center justify-between gap-4 mb-6 border-b border-dark-750 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-mono tracking-widest text-emerald-300 uppercase">
                Apoio Direto // LivePix
              </span>
            </div>
            <span className="text-[10px] font-mono text-dark-300 uppercase">
              [INSTANT NOTIFICATION]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Content Column (3/5) */}
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide font-mono">
                Curtiu meu trabalho?
              </h2>

              <p className="text-sm sm:text-base text-dark-100 leading-relaxed font-sans">
                Se você curte minhas lives, edits ou qualquer conteúdo que eu faço, você pode me apoiar pelo LivePix. Qualquer apoio ajuda a manter o projeto rodando e a produzir mais conteúdo.
              </p>

              {/* Three clean bullet highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 p-2.5 rounded bg-dark-950/80 border border-omen-900 text-omen-200 text-xs font-mono">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Voz na Live</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-dark-950/80 border border-omen-900 text-omen-200 text-xs font-mono">
                  <Flame className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Financia Edits</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-dark-950/80 border border-omen-900 text-omen-200 text-xs font-mono">
                  <Heart className="w-4 h-4 text-omen-300 shrink-0" />
                  <span>Apoio Genuíno</span>
                </div>
              </div>
            </div>

            {/* Action Column (2/5) */}
            <div className="md:col-span-2 flex flex-col items-center justify-center p-6 rounded-lg bg-dark-950 border border-omen-800 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                <Zap className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h4 className="text-white font-bold text-base tracking-wide">
                  Chave LivePix Segura
                </h4>
                <p className="text-xs text-dark-300">
                  livepix.gg/vortexyvp
                </p>
              </div>

              <Button
                href={socials.livepix}
                external
                variant="primary"
                size="md"
                fullWidth
                icon={<Zap className="w-4 h-4" />}
                className="bg-white text-dark-950 hover:bg-emerald-100"
              >
                Apoiar pelo LivePix
              </Button>

              <span className="text-[10px] font-mono text-dark-400">
                Qualquer contribuição é muito bem-vinda e valorizada.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
