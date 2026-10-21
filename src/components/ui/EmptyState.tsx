import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  phaseLabel?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  phaseLabel = 'Structure Ready',
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50/80 p-8 sm:p-12 text-center transition-colors duration-200 ${className}`}
    >
      <div className="mx-auto max-w-md flex flex-col items-center">
        {/* Minimal icon container */}
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700">
          <Icon className="h-5 w-5 text-neutral-800" strokeWidth={1.75} />
        </div>

        {/* Phase tag - clean unboxed editorial text */}
        <div className="mb-3 text-xs text-neutral-500 font-mono uppercase tracking-wider">
          {phaseLabel}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-black mb-2 text-balance">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 leading-relaxed text-balance">
          {description}
        </p>

        {actionText && onAction && (
          <button
            onClick={onAction}
            className="mt-5 text-xs font-medium text-[#0245EC] hover:text-[#012A93] underline underline-offset-4 cursor-pointer"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};
