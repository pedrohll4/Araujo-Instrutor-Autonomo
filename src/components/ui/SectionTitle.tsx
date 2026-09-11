import React from 'react';
import { SectionBadge } from './SectionBadge';

interface SectionTitleProps {
  badge?: string;
  tagline?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  tagline,
  title,
  highlightText,
  description,
  align = 'left',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} max-w-3xl ${className}`}>
      {badge && (
        <div className="mb-3">
          <SectionBadge>{badge}</SectionBadge>
        </div>
      )}

      {tagline && (
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#B08A3C] mb-2">
          {tagline}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-[#F5F7FA] leading-[1.05]">
        {title}{' '}
        {highlightText && (
          <span className="text-[#D4AF37] relative inline-block">
            {highlightText}
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#9CA3AF] font-sans font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
