import React from 'react';
import { Modal } from './ui/Modal';
import { ExternalLink, Play } from 'lucide-react';
import { Button } from './ui/Button';

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  embedUrl: string;
  videoUrl: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  embedUrl,
  videoUrl,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="5xl">
      <div className="space-y-4">
        {/* 16:9 Aspect Ratio Video Box */}
        <div className="relative w-full pb-[56.25%] bg-black rounded overflow-hidden border border-dark-700">
          {embedUrl ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-dark-800 flex items-center justify-center text-zinc-400">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <p className="text-zinc-400 text-sm max-w-sm">
                Nenhum link de embed configurado ainda. Você pode assistir diretamente na plataforma de origem:
              </p>
              <Button
                href={videoUrl}
                external
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
              >
                Abrir Vídeo
              </Button>
            </div>
          )}
        </div>

        {/* Footer actions inside modal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <span className="text-xs font-mono text-zinc-400">
            [REPRODUÇÃO CINEMATOGRÁFICA // VORTEX ARCHIVE]
          </span>
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
            >
              <span>Abrir na plataforma original</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};
