import React from 'react';
import { Modal } from './ui/Modal';
import { ProjectItem } from '../config/portfolio';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ExternalLink, Calendar, Layers } from 'lucide-react';

export interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="4xl">
      <div className="space-y-6">
        {/* Main Preview Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded bg-dark-950 border border-dark-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="absolute top-3 left-3">
            <Badge variant="tactical">{project.category}</Badge>
          </div>
          {project.year && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono bg-dark-900/80 text-zinc-300 border border-zinc-700/60 rounded backdrop-blur-sm">
                <Calendar className="w-3 h-3 text-zinc-400" />
                {project.year}
              </span>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-dark-750">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1 mr-2">
              <Layers className="w-3.5 h-3.5" />
              STACK / ESPECIFICAÇÕES:
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono bg-dark-800 text-zinc-300 border border-dark-700 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-dark-750">
            <Button variant="outline" size="sm" onClick={onClose}>
              Fechar
            </Button>
            {project.link && (
              <Button
                href={project.link}
                external
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Visualizar Trabalho
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
