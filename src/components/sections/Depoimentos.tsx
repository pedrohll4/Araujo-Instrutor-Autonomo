import React from 'react';
import { Quote } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';

export const Depoimentos: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-28 bg-[#0B0D10] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            align="center"
            badge="HISTÓRIAS DE SUPERAÇÃO"
            tagline="AUTONOMIA CONQUISTADA"
            title="QUEM JÁ APRENDEU,"
            highlightText="RECOMENDA"
            description="Espaço reservado para as avaliações reais de quem já treinou com o Araújo e superou a insegurança nas ruas."
          />
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.testimonials.map((dep) => (
            <div
              key={dep.id}
              className="relative rounded-[4px] p-6 sm:p-8 bg-[#12151B] border border-[#282E3A] hover:border-[#B08A3C]/70 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Quote Icon & Status Tag */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-8 h-8 rounded-[3px] bg-[#1A1E26] border border-[#282E3A] flex items-center justify-center text-[#D4AF37]">
                    <Quote size={14} className="rotate-180" />
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-[#E8C862] uppercase px-2 py-0.5 rounded-[2px] bg-[#1A1E26] border border-[#B08A3C]/40">
                    {dep.status}
                  </span>
                </div>

                {/* Text Body */}
                <p className="text-sm sm:text-base text-[#D8D8D8] font-sans leading-relaxed italic mb-8">
                  {dep.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#1C222C] flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-[#F5F7FA] uppercase tracking-wide">
                    {dep.name}
                  </h4>
                  <span className="text-xs font-mono text-[#9CA3AF]">
                    {dep.category}
                  </span>
                </div>

                {/* Subtle telemetry check */}
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/70" />
              </div>
            </div>
          ))}
        </div>

        {/* Small Notice */}
        <div className="mt-8 text-center">
          <span className="text-[11px] font-mono text-[#6B7280] tracking-wider uppercase">
            *Avaliações e relatos de alunos em constante atualização
          </span>
        </div>
      </div>
    </section>
  );
};
