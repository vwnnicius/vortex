import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { featuredEdit } from '../config/featuredEdit';
import { VideoModal } from '../components/VideoModal';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Play, ExternalLink, Film, Clock } from 'lucide-react';

export const FeaturedEditSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="featured" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-omen-400 mb-2">
            [ DESTAQUE EM VÍDEO // VALORANT ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-mono">
            Edit em Destaque
          </h2>
          <div className="w-12 h-[2px] bg-omen-600/80 my-4" />
          <p className="text-xs sm:text-sm text-dark-200 max-w-md">
            Edição construída no After Effects com sincronização precisa de beats e camadas de sound design.
          </p>
        </div>

        {/* Cinematic Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl bg-dark-900 border border-omen-700/80 hover:border-omen-400/80 transition-all duration-300 overflow-hidden shadow-omen-card group"
        >
          {/* Top Info Bar */}
          <div className="px-6 py-3 border-b border-dark-750 bg-dark-850/80 flex items-center justify-between text-xs font-mono text-dark-300">
            <div className="flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-omen-400" />
              <span className="uppercase tracking-wider text-omen-300">{featuredEdit.category}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-omen-400" />
                {featuredEdit.duration}
              </span>
              <span className="text-dark-600">|</span>
              <span className="text-omen-200 font-bold">AFTER EFFECTS // SOUND FX</span>
            </div>
          </div>

          {/* Widescreen Preview with Play Button */}
          <div
            className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer select-none"
            onClick={() => setIsVideoModalOpen(true)}
          >
            {/* Thumbnail Image */}
            <img
              src={featuredEdit.thumbnail}
              alt={featuredEdit.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
            />

            {/* Dark Violet Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent pointer-events-none" />

            {/* Central Play Trigger with Purple Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-omen-500/20 group-hover:scale-130 transition-transform duration-500 ease-out" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-dark-950/90 border border-omen-400 group-hover:border-white text-white flex items-center justify-center shadow-omen-intense group-hover:scale-110 transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-white text-white" />
                </div>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
              <Badge variant="omen">OMEN MONTAGE</Badge>
            </div>
          </div>

          {/* Card Bottom Content */}
          <div className="p-6 sm:p-8 bg-dark-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-mono">
                {featuredEdit.title}
              </h3>
              <p className="text-sm text-dark-200 leading-relaxed font-sans">
                {featuredEdit.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {featuredEdit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[11px] font-mono bg-dark-850 text-omen-300 border border-omen-800 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch gap-3 shrink-0">
              <Button
                onClick={() => setIsVideoModalOpen(true)}
                variant="omen"
                size="md"
                icon={<Play className="w-4 h-4 fill-white" />}
              >
                Assistir agora
              </Button>

              {featuredEdit.videoUrl && (
                <Button
                  href={featuredEdit.videoUrl}
                  external
                  variant="secondary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Abrir no YouTube
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Embedded Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={featuredEdit.title}
        embedUrl={featuredEdit.embedUrl}
        videoUrl={featuredEdit.videoUrl}
      />
    </section>
  );
};
