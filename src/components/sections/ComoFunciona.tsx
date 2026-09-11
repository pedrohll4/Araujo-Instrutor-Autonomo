import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

export const ComoFunciona: React.FC = () => {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28 bg-[#0E1015] border-y border-[#1C222C] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <SectionTitle
            align="center"
            badge="ETAPAS PRÁTICAS"
            tagline="DO PRIMEIRO CONTATO AO VOLANTE"
            title="COMECE A DIRIGIR COM"
            highlightText="MAIS CONFIANÇA"
            description="Processo transparente, direto e sem burocracia de autoescola tradicional. Você agenda direto com o instrutor e treina no seu ritmo."
          />
        </div>

        {/* Steps Road Track (Desktop & Mobile) */}
        <div className="relative">
          {/* Connecting Road Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-12 h-2 pointer-events-none z-0">
            {/* Asphalt base */}
            <div className="w-full h-2 bg-[#12151B] border-y border-[#282E3A]" />
            {/* Dashed center road mark */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[1px] border-b border-dashed border-[#D4AF37]/50" />
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {siteConfig.steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative p-6 sm:p-7 rounded-[4px] bg-[#12151B] border border-[#282E3A] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Marker Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-[3px] bg-[#1A1E26] border border-[#B08A3C]/50 flex items-center justify-center font-mono font-bold text-sm text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0D10] transition-colors">
                    {step.number}
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-[#6B7280] uppercase">
                    ETAPA 0{index + 1}
                  </span>
                </div>

                {/* Step Texts */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#F5F7FA] uppercase tracking-wide group-hover:text-[#E8C862] transition-colors mb-1">
                    {step.title}
                  </h3>

                  <span className="text-xs font-mono text-[#B08A3C] uppercase tracking-wider block mb-3">
                    {step.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Road indicator dot */}
                <div className="mt-6 pt-4 border-t border-[#1C222C] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span className="text-[10px] font-mono text-[#9CA3AF] uppercase">
                      Check {step.number}
                    </span>
                  </div>
                  <div className="w-4 h-[1px] bg-[#282E3A] group-hover:bg-[#D4AF37] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to trigger step 02 */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button
            size="lg"
            variant="primary"
            href={siteConfig.getWhatsAppLink('Olá, Araújo! Quero agendar minhas aulas práticas.')}
            external
            icon={<ArrowUpRight size={18} />}
          >
            INICIAR AGENDAMENTO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};
