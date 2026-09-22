import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialItems, socials } from '../config/socials';
import {
  Youtube,
  Twitch,
  Instagram,
  Twitter,
  Video,
  Zap,
  MessageSquare,
  ArrowUpRight,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

export const SocialHubSection: React.FC = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleCopyDiscord = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(socials.discord);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2200);
  };

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
      case 'messagesquare':
        return <MessageSquare className={`${iconClass} text-indigo-400`} />;
      default:
        return <ExternalLink className={`${iconClass} text-white`} />;
    }
  };

  return (
    <section id="links" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-omen-400 mb-2">
            [ CANAIS OFICIAIS // CONECTE-SE ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-mono">
            Onde me encontrar
          </h2>
          <div className="w-12 h-[2px] bg-omen-600/80 my-4" />
          <p className="text-xs sm:text-sm text-dark-200 max-w-md">
            Acompanhe minhas transmissões na Twitch, montagens completas de Valorant no YouTube e me chame no Discord.
          </p>
        </div>

        {/* Big Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialItems.map((item, index) => {
            const isLivePix = item.id === 'livepix';
            const isDiscord = item.id === 'discord';

            if (isDiscord) {
              return (
                <motion.div
                  key={item.id}
                  onClick={handleCopyDiscord}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden select-none cursor-pointer bg-dark-900/90 hover:bg-dark-850 border-indigo-500/30 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded bg-dark-950 border border-dark-700 flex items-center justify-center group-hover:border-indigo-400 transition-colors">
                        {renderIcon(item.iconName)}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm border uppercase bg-indigo-950/60 text-indigo-300 border-indigo-700/60">
                          {copiedDiscord ? 'COPIADO!' : item.badge}
                        </span>
                        <div className="w-7 h-7 rounded-sm bg-dark-950/60 border border-dark-700/60 flex items-center justify-center text-dark-300 group-hover:text-white group-hover:border-indigo-400 transition-all">
                          {copiedDiscord ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-indigo-200 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs font-mono text-indigo-300">
                        {item.username}
                      </span>
                    </div>

                    <p className="text-xs text-dark-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-dark-750/70 flex items-center justify-between text-xs font-mono">
                    <span className="text-indigo-300 group-hover:text-white transition-colors">
                      {copiedDiscord ? 'Tag copiada para a área de transferência!' : 'Clique para copiar a tag'}
                    </span>
                    <span className="text-indigo-400">&rarr;</span>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden select-none ${
                  isLivePix
                    ? 'bg-gradient-to-br from-dark-900 to-dark-850 border-emerald-500/30 hover:border-emerald-400/80 hover:shadow-[0_0_25px_rgba(52,211,153,0.18)]'
                    : 'bg-dark-900/90 hover:bg-dark-850 border-omen-800/80 hover:border-omen-400 hover:shadow-omen-glow'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-omen-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded bg-dark-950 border border-dark-700 flex items-center justify-center group-hover:border-omen-400 transition-colors">
                      {renderIcon(item.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span
                          className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm border uppercase ${
                            isLivePix
                              ? 'bg-emerald-950/50 text-emerald-300 border-emerald-700/60'
                              : 'bg-omen-950/80 text-omen-300 border-omen-700/80'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <div className="w-7 h-7 rounded-sm bg-dark-950/60 border border-dark-700/60 flex items-center justify-center text-dark-300 group-hover:text-white group-hover:border-omen-400 transition-all">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-omen-200 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono text-dark-300">
                      {item.username}
                    </span>
                  </div>

                  <p className="text-xs text-dark-200 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-dark-750/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-dark-300 group-hover:text-omen-200 transition-colors">
                    {item.primaryActionText}
                  </span>
                  <span className="text-dark-400 group-hover:text-omen-300 transition-colors">
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
