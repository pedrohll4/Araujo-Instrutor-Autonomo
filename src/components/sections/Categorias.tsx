import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

export const Categorias: React.FC = () => {
  return (
    <section id="categorias" className="relative py-20 sm:py-28 bg-[#0B0D10] overflow-hidden">
      {/* Background vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            align="center"
            badge="HABILITAÇÃO & APERFEIÇOAMENTO"
            tagline="VEÍCULOS DE DUAS E QUATRO RODAS"
            title="ESCOLHA SUA"
            highlightText="CATEGORIA"
            description="Treinamento específico e direcionado para as exigências técnicas de cada tipo de veículo. Selecione a categoria que você deseja dominar."
          />
        </div>

        {/* Two Large Visual Category Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-[4px] overflow-hidden border border-[#282E3A] hover:border-[#D4AF37]/80 bg-[#12151B] flex flex-col justify-between transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container with Dark Overlay and Hover Zoom */}
              <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={`Treinamento veicular para ${cat.code}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 filter contrast-110 brightness-90 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignettes to preserve text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151B] via-[#12151B]/50 to-[#0B0D10]/60" />

                {/* Corner Category Code Tag */}
                <div className="absolute top-5 left-5 z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-[3px] bg-[#0B0D10]/85 border border-[#B08A3C]/60 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="font-display font-bold text-sm tracking-wider text-[#F5F7FA]">
                      {cat.code}
                    </span>
                  </div>
                </div>

                {/* Vehicle Subtitle in Image */}
                <div className="absolute bottom-4 left-6 z-10">
                  <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
                    MODALIDADE
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-[#F5F7FA] uppercase tracking-wide">
                    {cat.vehicle}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm sm:text-base text-[#D8D8D8] font-sans leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-[#282E3A]">
                    {cat.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#9CA3AF]">
                        <div className="w-4 h-4 rounded-[2px] bg-[#1A1E26] border border-[#B08A3C]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                          <Check size={11} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-[#1C222C]">
                  <Button
                    size="md"
                    variant="outline"
                    href={siteConfig.getWhatsAppLink(cat.whatsappMsg)}
                    external
                    icon={<ArrowUpRight size={16} />}
                    className="w-full justify-between"
                  >
                    <span>QUERO SABER MAIS SOBRE {cat.code}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
