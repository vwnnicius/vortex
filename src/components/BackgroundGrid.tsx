import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Base Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#07070A]" />

      {/* Omen Shadow / Violet Atmospheric Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.18),transparent_70%)] opacity-80" />
      <div className="absolute top-[30%] -left-[10%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(76,29,149,0.12),transparent_70%)]" />
      <div className="absolute top-[60%] -right-[10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(139,92,246,0.09),transparent_70%)]" />

      {/* Tactical Grid with subtle Violet sheen */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(167, 139, 250, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(167, 139, 250, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 35%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 40%, transparent 85%)',
        }}
      />

      {/* Vignette border */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(7,7,10,0.88)_100%)]" />
    </div>
  );
};
