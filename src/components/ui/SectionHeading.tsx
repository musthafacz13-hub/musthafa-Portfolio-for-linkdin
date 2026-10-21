import React from 'react';

interface SectionHeadingProps {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}
    >
      {kicker && (
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 font-mono">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
