import React from 'react';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0245EC] disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 min-h-[44px]',
    lg: 'text-base px-6 py-3 min-h-[48px]',
  };

  const variantStyles = {
    // Primary Royal Blue (#0245EC)
    primary:
      'bg-[#0245EC] text-white hover:bg-[#0237BC] active:bg-[#012A93]',
    // Secondary subtle outline
    secondary:
      'bg-white text-black border border-neutral-300 hover:border-black hover:bg-neutral-50 active:bg-neutral-100',
    // Accent Neon Lime highlight (#D9FF3A)
    accent:
      'bg-[#D9FF3A] text-black hover:bg-[#cbf725] active:bg-[#bee81f] font-semibold',
    // Ghost text
    ghost:
      'bg-transparent text-neutral-700 hover:text-black hover:bg-neutral-100 active:bg-neutral-200',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
