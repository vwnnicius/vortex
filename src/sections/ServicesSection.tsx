import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../config/services';
import { Film, Sparkles, Monitor, Palette, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (id: string) => {
    const iconClass = 'w-5 h-5 text-white';
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
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mb-2">
            [ DISCIPLINA & PRODUÇÃO // ESPECIALIDADES ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-mono">
            Meus trabalhos
          </h2>
          <div className="w-12 h-[2px] bg-zinc-700 my-4" />
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Atuação profissional nas quatro frentes que definem produções modernas e de alta retenção no ecossistema digital.
          </p>
        </div>

        {/* 2x2 Grid of Clean Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative p-6 sm:p-8 rounded-xl bg-dark-900/80 border border-zinc-700/80 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/60"
            >
              {/* Subtle top edge glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-dark-950 border border-dark-700 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 px-2 py-0.5 bg-dark-950 border border-dark-750 rounded-sm">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-wide uppercase font-mono mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 border-t border-dark-750 pt-4">
                  <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase block mb-1">
                    ENTREGÁVEIS:
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Tags */}
              <div className="pt-4 border-t border-dark-750 flex flex-wrap items-center gap-1.5">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-[10px] font-mono bg-dark-950 text-zinc-400 border border-dark-700 rounded-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
