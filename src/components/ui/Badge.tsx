import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'tactical' | 'live' | 'neutral' | 'outline' | 'steel' | 'omen';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  pulse = false,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-mono',
    md: 'text-xs px-3 py-1 tracking-wider uppercase font-mono',
  };

  const variantStyles = {
    neutral: 'bg-dark-850 text-dark-200 border border-dark-700',
    tactical: 'bg-dark-900/90 text-omen-200 border border-omen-700/80 shadow-[0_0_12px_rgba(139,92,246,0.15)]',
    omen: 'bg-omen-950/80 text-omen-300 border border-omen-600/80 shadow-[0_0_15px_rgba(124,58,237,0.25)]',
    steel: 'bg-steel-900/40 text-steel-400 border border-steel-700/50',
    live: 'bg-rose-950/40 text-rose-300 border border-rose-800/60 shadow-[0_0_12px_rgba(244,63,94,0.2)]',
    outline: 'bg-transparent text-dark-300 border border-dark-750',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm font-medium select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-omen-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-omen-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};
