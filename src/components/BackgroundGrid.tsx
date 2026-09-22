import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Base Dark Color */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Cold Cinematic Top Light / Ambient Specular Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.035),transparent_70%)] opacity-80" />

      {/* Subtle Steel Atmospheric Accent */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(148,163,184,0.015),transparent_70%)]" />
      <div className="absolute top-[60%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.012),transparent_70%)]" />

      {/* Tactical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)',
        }}
      />

      {/* Vignette border to maintain deep focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,5,0.85)_100%)]" />
    </div>
  );
};
