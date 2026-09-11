import React from 'react';
import { ArrowUpRight, ChevronDown, ShieldCheck, Award, Target } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 sm:pb-12 bg-[#0B0D10] overflow-hidden"
    >
      {/* Background Layer: Cinematic Night Highway Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop"
          alt="Rodovia noturna com iluminação cinematográfica"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter contrast-125 brightness-75"
        />

        {/* Multi-layered dark vignetting to maintain deep obsidian aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/75 to-[#0B0D10]/90" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />

        {/* Dynamic Curved Road Lines evoking the logo "AA" curve */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,950 C400,850 700,500 1550,200"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M-100,980 C400,880 700,530 1550,230"
            fill="none"
            stroke="#F5F7FA"
            strokeWidth="2"
            strokeDasharray="16 20"
            strokeOpacity="0.25"
            className="animate-road-dash"
          />
          <path
            d="M-100,1010 C400,910 700,560 1550,260"
            fill="none"
            stroke="#B08A3C"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* Centerpiece Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 flex flex-col items-start">
        {/* Telemetry Tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[4px] bg-[#12151B]/90 border border-[#B08A3C]/40 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#E8C862] uppercase font-semibold">
            TREINAMENTO VEICULAR DE ALTA PRECISÃO
          </span>
        </div>

        {/* Main Headline */}
        <div className="flex flex-col mb-6">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-[#F5F7FA] leading-[0.92] uppercase">
            ARAUJO
          </h1>
          <div className="flex items-center gap-3 sm:gap-4 mt-2">
            <span className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-[0.16em] text-[#D4AF37] uppercase">
              INSTRUTOR AUTÔNOMO
            </h2>
          </div>
        </div>

        {/* Tagline & Subtitle */}
        <div className="max-w-2xl mb-8 space-y-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#F5F7FA] tracking-wide">
            {siteConfig.tagline}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#9CA3AF] font-sans font-normal leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
          <Button
            size="lg"
            variant="primary"
            href={siteConfig.getWhatsAppLink()}
            external
            icon={<ArrowUpRight size={18} />}
            className="w-full sm:w-auto"
          >
            AGENDAR AULA
          </Button>

          <Button
            size="lg"
            variant="outline"
            href="#planos"
            className="w-full sm:w-auto"
          >
            CONHECER AS AULAS
          </Button>
        </div>
      </div>

      {/* Bottom Hero Bar: 3 Precision Telemetry Indicators */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-[#282E3A]/80 bg-[#0B0D10]/60 backdrop-blur-sm p-4 rounded-[4px]">
          {/* Indicator 1 */}
          <div className="flex items-center gap-3 p-3 bg-[#12151B]/60 border border-[#282E3A]/60 rounded-[4px] hover:border-[#B08A3C]/50 transition-colors">
            <div className="w-10 h-10 rounded-[3px] bg-[#1A1E26] border border-[#282E3A] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award size={20} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-wider text-[#F5F7FA]">
                  CATEGORIA A
                </span>
                <span className="text-[10px] font-mono text-[#B08A3C] uppercase">MOTOCICLETA</span>
              </div>
              <span className="text-xs text-[#9CA3AF]">
                Equilíbrio, agilidade e pista de exame prático
              </span>
            </div>
          </div>

          {/* Indicator 2 */}
          <div className="flex items-center gap-3 p-3 bg-[#12151B]/60 border border-[#282E3A]/60 rounded-[4px] hover:border-[#B08A3C]/50 transition-colors">
            <div className="w-10 h-10 rounded-[3px] bg-[#1A1E26] border border-[#282E3A] flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-wider text-[#F5F7FA]">
                  CATEGORIA B
                </span>
                <span className="text-[10px] font-mono text-[#B08A3C] uppercase">CARRO / AUTO</span>
              </div>
              <span className="text-xs text-[#9CA3AF]">
                Controle de pedais, baliza e trânsito real
              </span>
            </div>
          </div>

          {/* Indicator 3 */}
          <div className="flex items-center gap-3 p-3 bg-[#12151B]/60 border border-[#282E3A]/60 rounded-[4px] hover:border-[#D4AF37]/60 transition-colors">
            <div className="w-10 h-10 rounded-[3px] bg-[#1A1E26] border border-[#282E3A] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Target size={20} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-wider text-[#F5F7FA]">
                  AULAS PERSONALIZADAS
                </span>
                <span className="text-[10px] font-mono text-[#25D366] uppercase">INDIVIDUAL</span>
              </div>
              <span className="text-xs text-[#9CA3AF]">
                Especialista no medo de dirigir e aperfeiçoamento
              </span>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#diferenciais"
            className="flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest text-[#6B7280] hover:text-[#D4AF37] transition-colors"
            aria-label="Rolar para a seção Diferenciais"
          >
            <span className="uppercase">EXPLORAR</span>
            <ChevronDown size={14} className="animate-bounce text-[#B08A3C]" />
          </a>
        </div>
      </div>
    </section>
  );
};
