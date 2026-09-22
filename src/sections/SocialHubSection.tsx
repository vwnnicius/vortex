import React from 'react';
import { motion } from 'framer-motion';
import { socialItems } from '../config/socials';
import {
  Youtube,
  Twitch,
  Instagram,
  Twitter,
  Video,
  Zap,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

export const SocialHubSection: React.FC = () => {
  // Mapeamento dinâmico de ícones Lucide
  const renderIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 transition-transform duration-300 group-hover:scale-110';
    switch (iconName.toLowerCase()) {
      case 'youtube':
        return <Youtube className={`${iconClass} text-red-500`} />;
      case 'twitch':
        return <Twitch className={`${iconClass} text-purple-400`} />;
      case 'instagram':
        return <Instagram className={`${iconClass} text-pink-400`} />;
      case 'twitter':
        return <Twitter className={`${iconClass} text-sky-400`} />;
      case 'video':
        return <Video className={`${iconClass} text-zinc-100`} />;
      case 'zap':
        return <Zap className={`${iconClass} text-emerald-400`} />;
      default:
        return <ExternalLink className={`${iconClass} text-white`} />;
    }
  };

  return (
    <section id="links" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mb-2">
            [ HUB PRINCIPAL // SOCIAL CHANNELS ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-mono">
            Onde me encontrar
          </h2>
          <div className="w-12 h-[2px] bg-zinc-700 my-4" />
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Acompanhe minhas transmissões diárias, montagens completas, cortes rápidos e atualizações de bastidores.
          </p>
        </div>

        {/* Big Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialItems.map((item, index) => {
            const isLivePix = item.id === 'livepix';

            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`group relative p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden select-none ${
                  isLivePix
                    ? 'bg-gradient-to-br from-dark-900 to-dark-850 border-emerald-500/30 hover:border-emerald-400/80 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]'
                    : 'bg-dark-900/80 hover:bg-dark-850 border-dark-700 hover:border-zinc-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]'
                }`}
              >
                {/* Top Subtle Light Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Badge + Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded bg-dark-950 border border-dark-700 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                      {renderIcon(item.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span
                          className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm border uppercase ${
                            isLivePix
                              ? 'bg-emerald-950/50 text-emerald-300 border-emerald-700/60'
                              : 'bg-dark-800 text-zinc-300 border-dark-700'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <div className="w-7 h-7 rounded-sm bg-dark-950/60 border border-dark-700/60 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-all">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Platform Name and Handle */}
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {item.username}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA Indicator */}
                <div className="mt-5 pt-3 border-t border-dark-750/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {item.primaryActionText}
                  </span>
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    &rarr;
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
