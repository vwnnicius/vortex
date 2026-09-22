import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../config/services';
import { Film, Sparkles, Monitor, Palette, CheckCircle2, Lock } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export const ServicesSection: React.FC = () => {
  const getIcon = (id: string) => {
    const iconClass = 'w-5 h-5 text-omen-300';
    switch (id) {
      case 'video-editing':
        return <Film className={iconClass} />;
      case 'motion-design':
        return <Sparkles className={iconClass} />;
      case 'stream-design':
        return <Monitor className={iconClass} />;
      case 'graphic-design':
        return <Palette className={iconClass} />;
      default:
        return <Film className={iconClass} />;
    }
  };

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-omen-400 mb-2">
            [ DISCIPLINA & CAPACIDADES // SERVIÇOS ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-mono">
            Meus trabalhos
          </h2>
          <div className="w-12 h-[2px] bg-omen-600/80 my-4" />
          <p className="text-xs sm:text-sm text-dark-200 max-w-md">
            Produções dedicadas a criadores e players de Valorant, com edição dinâmica, sound design e ritmo de elite.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isComingSoon = service.status === 'coming_soon';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative p-6 sm:p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-omen-card ${
                  isComingSoon
                    ? 'bg-dark-900/60 border-omen-900/60 select-none'
                    : 'bg-dark-900/90 border-omen-600/80 hover:border-omen-400 shadow-omen-glow'
                }`}
              >
                {/* Active Card Purple Sheen */}
                {!isComingSoon && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-omen-400 to-transparent" />
                )}

                {/* Underlying Card Content */}
                <div className={isComingSoon ? 'filter blur-[1.5px] opacity-40 select-none' : ''}>
                  {/* Header with Icon and Title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-dark-950 border border-omen-700/60 flex items-center justify-center">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-omen-300 px-2 py-0.5 bg-dark-950 border border-omen-800 rounded-sm">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide uppercase font-mono mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark-200 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 border-t border-dark-750 pt-4">
                    <span className="text-[11px] font-mono text-omen-400 tracking-wider uppercase block mb-1">
                      ENTREGÁVEIS:
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-dark-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-omen-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Tags */}
                  <div className="pt-4 border-t border-dark-750 flex flex-wrap items-center gap-1.5">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[10px] font-mono bg-dark-950 text-omen-300 border border-omen-800 rounded-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GLASS BLUR OVERLAY PARA "EM BREVE" */}
                {isComingSoon && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-dark-950/70 backdrop-blur-md border border-omen-500/20">
                    <div className="w-12 h-12 rounded-full bg-dark-900 border border-omen-500/40 flex items-center justify-center text-omen-400 mb-3 shadow-omen-glow">
                      <Lock className="w-5 h-5" />
                    </div>

                    <Badge variant="omen" size="sm" className="mb-2">
                      EM BREVE
                    </Badge>

                    <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-1">
                      {service.title}
                    </h4>

                    <p className="text-xs text-dark-300 max-w-xs">
                      Esta modalidade está em fase de estruturação e novas vagas serão abertas em breve.
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
