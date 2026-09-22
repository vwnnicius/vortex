import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  portfolioProjects,
  portfolioCategories,
  PortfolioCategory,
  ProjectItem,
} from '../config/portfolio';
import { ProjectModal } from '../components/ProjectModal';
import { Badge } from '../components/ui/Badge';
import { ArrowUpRight, Maximize2, Lock } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('Todos');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-omen-400 mb-2">
            [ GALERIA DE PRODUÇÕES // VALORANT & EDITS ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-mono">
            Portfólio Selecionado
          </h2>
          <div className="w-12 h-[2px] bg-omen-600/80 my-4" />
          <p className="text-xs sm:text-sm text-dark-200 max-w-md">
            Montagens de Valorant com foco em sincronização no After Effects, cortes de ritmo e sound design.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            const isCategoryComingSoon =
              cat === 'Motion Design' || cat === 'Stream Design' || cat === 'Graphic Design';

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-sm border transition-all duration-200 select-none flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-omen-500 text-white border-omen-400 font-bold shadow-omen-glow'
                    : 'bg-dark-900 text-dark-300 border-omen-900 hover:text-white hover:border-omen-600'
                }`}
              >
                <span>{cat}</span>
                {isCategoryComingSoon && (
                  <span className="text-[9px] text-omen-400 font-normal">
                    (Em Breve)
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isComingSoon = project.status === 'coming_soon';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => !isComingSoon && setActiveProject(project)}
                  className={`group relative rounded-lg border overflow-hidden flex flex-col transition-all duration-300 select-none shadow-omen-card ${
                    isComingSoon
                      ? 'bg-dark-900/60 border-omen-900/60 cursor-default'
                      : 'bg-dark-900 border-omen-800/80 hover:border-omen-400/80 cursor-pointer'
                  }`}
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-500 filter brightness-95 ${
                        isComingSoon
                          ? 'blur-[1.5px] opacity-40'
                          : 'group-hover:scale-105 group-hover:brightness-100'
                      }`}
                      loading="lazy"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80" />

                    {/* Corner Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-dark-950/85 backdrop-blur-sm text-omen-200 border border-omen-700/80 rounded-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Zoom Icon for Active Projects */}
                    {!isComingSoon && (
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-sm bg-dark-950/80 backdrop-blur-sm border border-omen-700/80 flex items-center justify-center text-dark-300 group-hover:text-white group-hover:border-omen-400 transition-all opacity-0 group-hover:opacity-100">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className={`p-5 flex-1 flex flex-col justify-between bg-dark-900 ${
                    isComingSoon ? 'opacity-50' : ''
                  }`}>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono mb-1.5 group-hover:text-omen-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-dark-200 line-clamp-2 leading-relaxed font-sans mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer with Tags and Action */}
                    <div className="pt-3 border-t border-dark-750 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-omen-300 bg-dark-950 px-1.5 py-0.5 rounded-sm border border-omen-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {!isComingSoon && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-dark-300 group-hover:text-white transition-colors">
                          <span>Ver</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* GLASS BLUR OVERLAY PARA "EM BREVE" NO PORTFÓLIO */}
                  {isComingSoon && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-dark-950/75 backdrop-blur-md border border-omen-500/20">
                      <div className="w-10 h-10 rounded-full bg-dark-900 border border-omen-500/40 flex items-center justify-center text-omen-400 mb-2 shadow-omen-glow">
                        <Lock className="w-4 h-4" />
                      </div>

                      <Badge variant="omen" size="sm" className="mb-1">
                        EM BREVE
                      </Badge>

                      <p className="text-xs text-dark-200 max-w-xs mt-1">
                        Projetos desta categoria serão adicionados em breve.
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
