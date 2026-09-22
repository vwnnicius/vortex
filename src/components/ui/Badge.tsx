import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'tactical' | 'live' | 'neutral' | 'outline' | 'steel';
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
    neutral: 'bg-dark-800 text-zinc-300 border border-dark-700',
    tactical: 'bg-dark-900 text-zinc-200 border border-zinc-700/80 shadow-[0_0_10px_rgba(255,255,255,0.04)]',
    steel: 'bg-steel-900/40 text-steel-400 border border-steel-700/50',
    live: 'bg-rose-950/40 text-rose-300 border border-rose-800/60 shadow-[0_0_12px_rgba(244,63,94,0.2)]',
    outline: 'bg-transparent text-zinc-400 border border-zinc-800',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm font-medium select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
        </span>
      )}
      {children}
    </span>
  );
};
