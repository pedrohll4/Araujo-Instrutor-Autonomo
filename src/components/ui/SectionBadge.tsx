import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-[3px] bg-[#12151B] border border-[#B08A3C]/40 text-[#E8C862] text-[11px] sm:text-xs font-mono tracking-[0.18em] uppercase ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
      <span>{children}</span>
    </div>
  );
};
