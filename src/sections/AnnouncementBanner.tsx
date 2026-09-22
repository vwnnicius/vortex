import React from 'react';
import { announcement } from '../config/announcement';
import { ArrowRight, Bell } from 'lucide-react';

export const AnnouncementBanner: React.FC = () => {
  if (!announcement.enabled) return null;

  return (
    <div className="w-full bg-dark-900/90 border-b border-zinc-800/80 backdrop-blur-md pt-20 sm:pt-24 pb-3 px-4 transition-all">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase bg-zinc-800 text-white rounded-sm border border-zinc-700">
            <Bell className="w-3 h-3 text-zinc-300" />
            {announcement.badge}
          </span>
          <p className="text-xs sm:text-sm text-zinc-200 font-medium">
            <span className="font-semibold text-white">{announcement.title}</span>
            <span className="hidden md:inline text-zinc-400 ml-2">
              — {announcement.message}
            </span>
          </p>
        </div>

        <a
          href={announcement.buttonLink}
          target={announcement.openInNewTab ? '_blank' : undefined}
          rel={announcement.openInNewTab ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white border-b border-zinc-600 hover:border-white transition-colors pb-0.5 select-none shrink-0 group"
        >
          <span>{announcement.buttonText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
