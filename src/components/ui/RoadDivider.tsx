import React from 'react';

interface RoadDividerProps {
  className?: string;
  withCenterEmblem?: boolean;
}

export const RoadDivider: React.FC<RoadDividerProps> = ({
  className = '',
  withCenterEmblem = false,
}) => {
  return (
    <div className={`relative w-full py-6 sm:py-8 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Outer subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0D10]/50 to-transparent pointer-events-none" />

      {/* Main road line container */}
      <div className="relative w-full max-w-7xl px-4 flex items-center">
        {/* Left road segment */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#282E3A] to-[#B08A3C]/40" />
        </div>

        {/* Center telemetry or logo emblem */}
        {withCenterEmblem ? (
          <div className="px-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#0B0D10]" />
            <div className="w-8 h-[2px] bg-[#D4AF37]/80 rounded-full" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#B08A3C] uppercase">
              PRECISION
            </span>
            <div className="w-8 h-[2px] bg-[#D4AF37]/80 rounded-full" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#0B0D10]" />
          </div>
        ) : (
          <div className="px-4 flex items-center gap-1.5">
            <span className="w-3 h-[1px] bg-[#D4AF37]/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="w-3 h-[1px] bg-[#D4AF37]/70" />
          </div>
        )}

        {/* Right road segment */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-[#282E3A] to-[#B08A3C]/40" />
        </div>
      </div>
    </div>
  );
};
