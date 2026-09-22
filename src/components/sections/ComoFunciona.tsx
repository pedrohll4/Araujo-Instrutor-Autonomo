import React, { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Stethoscope,
  BookOpen,
  ShieldCheck,
  Car,
  CheckCircle2,
  Smartphone,
  Sparkles,
  Lightbulb,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '../../config/site';
import type { Step } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

type FilterType = 'all' | 'digital' | 'pratica';

export const ComoFunciona: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredSteps = siteConfig.steps.filter((step) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'digital') return step.category === 'digital';
    if (activeFilter === 'pratica') return step.category === 'pratica' || step.category === 'presencial';
    return true;
  });

  // Helper para ícones temáticos por etapa
  const getStepIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Globe className="w-5 h-5" />;
      case '02':
        return <Stethoscope className="w-5 h-5" />;
      case '03':
        return <BookOpen className="w-5 h-5" />;
      case '04':
        return <ShieldCheck className="w-5 h-5" />;
      case '05':
        return <Car className="w-5 h-5" />;
      case '06':
        return <CheckCircle2 className="w-5 h-5" />;
      case '07':
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Car className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="como-funciona"
      className="relative py-20 sm:py-28 bg-[#0E1015] border-y border-[#1C222C] overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionTitle
            align="center"
            badge="GUIA CNH RONDÔNIA"
            tagline="DO DIGITAL AO VOLANTE • VALE DO JAMARI - RO"
            title="COMO TIRAR SUA CNH NO"
            highlightText="DETRAN-RO / CIRETRAN"
            description="O roteiro oficial da sua 1ª Habilitação em Rondônia: acesse os portais oficiais do Detran-RO, Ciretran e Gov.br, e prepare-se na prática com o treinamento personalizado do Instrutor Araújo no Vale do Jamari."
          />

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-mono tracking-wider uppercase rounded-[3px] border transition-all duration-200 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#D4AF37] text-[#0B0D10] border-[#D4AF37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#12151B] text-[#9CA3AF] border-[#282E3A] hover:border-[#D4AF37]/50 hover:text-[#F5F7FA]'
              }`}
            >
              Todas as Etapas (07)
            </button>
            <button
              onClick={() => setActiveFilter('digital')}
              className={`px-4 py-2 text-xs sm:text-sm font-mono tracking-wider uppercase rounded-[3px] border transition-all duration-200 cursor-pointer ${
                activeFilter === 'digital'
                  ? 'bg-[#D4AF37] text-[#0B0D10] border-[#D4AF37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#12151B] text-[#9CA3AF] border-[#282E3A] hover:border-[#D4AF37]/50 hover:text-[#F5F7FA]'
              }`}
            >
              Digitais & Portais (Gov / CDT)
            </button>
            <button
              onClick={() => setActiveFilter('pratica')}
              className={`px-4 py-2 text-xs sm:text-sm font-mono tracking-wider uppercase rounded-[3px] border transition-all duration-200 cursor-pointer ${
                activeFilter === 'pratica'
                  ? 'bg-[#D4AF37] text-[#0B0D10] border-[#D4AF37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#12151B] text-[#9CA3AF] border-[#282E3A] hover:border-[#D4AF37]/50 hover:text-[#F5F7FA]'
              }`}
            >
              Aulas & Prática (Com Araújo)
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredSteps.map((step: Step) => {
            const isHighlight = step.highlight;

            return (
              <div
                key={step.number}
                className={`group relative p-6 sm:p-7 rounded-[4px] transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#181D24] to-[#12151B] border-2 border-[#D4AF37] shadow-[0_4px_30px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/30 md:col-span-2 lg:col-span-1'
                    : 'bg-[#12151B] border border-[#282E3A] hover:border-[#D4AF37]/70'
                }`}
              >
                {/* Highlight Badge on Top */}
                {isHighlight && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-[2px] bg-[#D4AF37] text-[#0B0D10] font-mono text-[10px] font-bold tracking-widest uppercase shadow-md">
                    <Sparkles size={12} />
                    FASE DECISIVA • PREPARAÇÃO PRÁTICA
                  </div>
                )}

                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-[3px] flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                          isHighlight
                            ? 'bg-[#D4AF37] text-[#0B0D10] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                            : 'bg-[#1A1E26] border border-[#B08A3C]/40 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0D10]'
                        }`}
                      >
                        {getStepIcon(step.number)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase block">
                          ETAPA {step.number}
                        </span>
                        <span
                          className={`text-[9px] font-mono tracking-wider uppercase font-semibold px-2 py-0.5 rounded-[2px] inline-block mt-0.5 ${
                            step.category === 'digital'
                              ? 'bg-[#1E293B] text-[#93C5FD] border border-[#3B82F6]/30'
                              : isHighlight
                              ? 'bg-[#D4AF37]/20 text-[#E8C862] border border-[#D4AF37]/50'
                              : 'bg-[#282E3A]/60 text-[#D1D5DB] border border-[#374151]'
                          }`}
                        >
                          {step.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-2xl font-black text-[#282E3A] group-hover:text-[#D4AF37]/20 transition-colors">
                      #{step.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#F5F7FA] uppercase tracking-wide group-hover:text-[#E8C862] transition-colors mb-1">
                    {step.title}
                  </h3>

                  <span className="text-xs font-mono text-[#B08A3C] uppercase tracking-wider block mb-3">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Tip Box */}
                  {step.tip && (
                    <div
                      className={`p-3 rounded-[3px] text-xs font-sans mb-4 flex items-start gap-2.5 ${
                        isHighlight
                          ? 'bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5F7FA]'
                          : 'bg-[#181C24] border border-[#282E3A] text-[#9CA3AF]'
                      }`}
                    >
                      <Lightbulb
                        size={15}
                        className={`shrink-0 mt-0.5 ${
                          isHighlight ? 'text-[#D4AF37]' : 'text-[#B08A3C]'
                        }`}
                      />
                      <div>
                        <strong className="text-[#E8C862] font-semibold block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                          Dica do Instrutor:
                        </strong>
                        <span className="leading-snug">{step.tip}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Action Links & Buttons */}
                <div className="pt-4 border-t border-[#1C222C] space-y-2">
                  {step.links && step.links.length > 0 ? (
                    step.links.map((link, idx) => {
                      const href = link.isWhatsApp
                        ? siteConfig.getWhatsAppLink(link.whatsAppMessage)
                        : link.url;

                      const isPrimary = link.variant === 'primary' || link.isWhatsApp;

                      return (
                        <a
                          key={idx}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[3px] text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                            isPrimary
                              ? 'bg-[#D4AF37] hover:bg-[#E8C862] text-[#0B0D10] shadow-[0_2px_10px_rgba(212,175,55,0.2)]'
                              : 'bg-[#181D26] hover:bg-[#202733] text-[#F5F7FA] border border-[#282E3A] hover:border-[#D4AF37]/60'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            {link.isWhatsApp && <MessageCircle size={14} className="shrink-0" />}
                            <span className="truncate">{link.label}</span>
                          </span>
                          {link.isWhatsApp ? (
                            <ArrowUpRight size={14} className="shrink-0 ml-1" />
                          ) : (
                            <ExternalLink size={13} className="shrink-0 ml-1 text-[#9CA3AF]" />
                          )}
                        </a>
                      );
                    })
                  ) : (
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                      <span>Etapa Obrigatória</span>
                      <span className="text-[#D4AF37]">Detran Oficial</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory / Guidance Callout Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-[4px] bg-gradient-to-r from-[#141820] via-[#1A1F2A] to-[#141820] border border-[#282E3A] relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest mb-3">
                <Sparkles size={12} />
                ORIENTAÇÃO COMPLETA
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-[#F5F7FA] uppercase tracking-wide mb-2">
                Dúvidas em alguma etapa no Detran-RO ou Ciretran?
              </h4>
              <p className="text-sm text-[#9CA3AF] max-w-2xl font-sans leading-relaxed">
                Não fique travado na burocracia. O Araújo orienta você desde a abertura do Renach até o dia do teste na Ciretran, para você conquistar sua CNH sem gastar com taxas repetidas de reprovação no Vale do Jamari.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button
                size="lg"
                variant="primary"
                href={siteConfig.getWhatsAppLink(
                  'Olá, Araújo! Tenho dúvidas sobre as etapas do Detran-RO/Ciretran e gostaria de receber orientações sobre as aulas práticas.'
                )}
                external
                icon={<ArrowUpRight size={18} />}
              >
                FALAR COM O INSTRUTOR NO WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

