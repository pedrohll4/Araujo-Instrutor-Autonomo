import React from 'react';
import { siteConfig } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';

export const Diferenciais: React.FC = () => {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28 bg-[#0B0D10] overflow-hidden">
      {/* Background Technical Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Decorative vertical road marker */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#282E3A] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle
            badge="MÉTODO & POSTURA"
            tagline="PRECISÃO AO VOLANTE"
            title="POR QUE APRENDER COM O"
            highlightText="ARAÚJO?"
            description="Um treinamento focado em transformar insegurança em domínio prático. O objetivo não é apenas a aprovação na prova, mas a construção de autonomia para toda a vida."
          />

          {/* Telemetry Indicator on top right */}
          <div className="hidden lg:flex flex-col items-end text-right font-mono">
            <span className="text-xs text-[#B08A3C] tracking-widest uppercase">
              FOCO METODOLÓGICO
            </span>
            <span className="text-sm text-[#F5F7FA] font-bold">100% PRÁTICO E INDIVIDUAL</span>
            <div className="w-16 h-[1.5px] bg-[#D4AF37] mt-1" />
          </div>
        </div>

        {/* Asymmetric 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.differentials.map((diff, index) => (
            <div
              key={diff.number}
              className={`group relative p-8 sm:p-10 rounded-[4px] bg-[#12151B] border border-[#282E3A] hover:border-[#B08A3C]/70 transition-all duration-300 ${
                index % 2 === 1 ? 'md:translate-y-6' : ''
              }`}
            >
              {/* Inner ambient rim highlight on hover */}
              <div className="absolute inset-0 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gold-border-glow" />

              {/* Large Monospaced/Display Number as Background Graphic */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#1F242E] group-hover:text-[#D4AF37]/25 transition-colors duration-300 leading-none">
                  {diff.number}
                </span>

                <span className="text-[11px] font-mono tracking-widest text-[#B08A3C] uppercase px-2.5 py-1 rounded-[2px] bg-[#1A1E26] border border-[#282E3A]">
                  {diff.tagline}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F7FA] uppercase tracking-wide group-hover:text-[#E8C862] transition-colors mb-3">
                {diff.title}
              </h3>

              {/* Card Description */}
              <p className="text-sm sm:text-base text-[#9CA3AF] font-sans leading-relaxed">
                {diff.description}
              </p>

              {/* Fine Bottom Accent line */}
              <div className="mt-8 pt-4 border-t border-[#1C222C] flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#6B7280] uppercase">
                  DIRETRIZ {diff.number}
                </span>
                <span className="w-6 h-[1.5px] bg-[#282E3A] group-hover:bg-[#D4AF37] transition-all duration-300 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
