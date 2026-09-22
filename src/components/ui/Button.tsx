import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'pix' | 'omen';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  external = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 select-none relative group overflow-hidden focus:outline-none focus:ring-2 focus:ring-omen-400 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-sm gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-sm gap-2',
    lg: 'text-base px-7 py-3.5 rounded-sm gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-white text-dark-950 hover:bg-omen-100 border border-white shadow-[0_0_20px_rgba(255,255,255,0.18)] hover:shadow-[0_0_25px_rgba(167,139,250,0.35)] active:scale-[0.98]',
    omen:
      'bg-omen-600 hover:bg-omen-500 text-white border border-omen-400/60 shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)] active:scale-[0.98]',
    secondary:
      'bg-dark-850 text-white border border-omen-700/60 hover:border-omen-400 hover:bg-dark-800 shadow-sm active:scale-[0.98]',
    outline:
      'bg-transparent text-omen-200 border border-omen-800/80 hover:border-omen-400 hover:text-white active:scale-[0.98]',
    ghost:
      'bg-transparent text-dark-300 hover:text-white hover:bg-dark-850 active:scale-[0.98]',
    pix:
      'bg-dark-900 text-white border border-dark-700 hover:border-emerald-400/70 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
