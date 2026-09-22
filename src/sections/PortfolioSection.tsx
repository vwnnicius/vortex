import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  portfolioProjects,
  portfolioCategories,
  PortfolioCategory,
  ProjectItem,
} from '../config/portfolio';
import { ProjectModal } from '../components/ProjectModal';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

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
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mb-2">
            [ GALERIA VISUAL // RECENT PROJECTS ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-mono">
            Portfólio Selecionado
          </h2>
          <div className="w-12 h-[2px] bg-zinc-700 my-4" />
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Projetos recentes desenvolvidos para criadores de conteúdo, streamers e canais de gameplay.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-sm border transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-white text-dark-950 border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                    : 'bg-dark-900 text-zinc-400 border-dark-700 hover:text-white hover:border-zinc-500'
                }`}
              >
                {cat}
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
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveProject(project)}
                className="group relative rounded-lg bg-dark-900 border border-zinc-700/80 hover:border-zinc-500 overflow-hidden cursor-pointer shadow-lg shadow-black/80 flex flex-col transition-all duration-300 select-none"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-dark-950/80 backdrop-blur-sm text-zinc-200 border border-zinc-700/80 rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Zoom Trigger Icon */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-sm bg-dark-950/80 backdrop-blur-sm border border-zinc-700/80 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white transition-all opacity-0 group-hover:opacity-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-dark-900">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono mb-1.5 group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer with Tags and Action */}
                  <div className="pt-3 border-t border-dark-750 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-zinc-400 bg-dark-950 px-1.5 py-0.5 rounded-sm border border-dark-750"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                      <span>Detalhes</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
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
