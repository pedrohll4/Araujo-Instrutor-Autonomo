import React from 'react';
import { Check, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig, type Plan } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

export const Planos: React.FC = () => {
  return (
    <section id="planos" className="relative py-20 sm:py-28 bg-[#0B0D10] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            align="center"
            badge="PACOTES & PREPARAÇÃO"
            tagline="INVESTIMENTO NO SEU CONTROLE"
            title="ESCOLHA SEU"
            highlightText="PLANO DE AULAS"
            description="Pacotes estruturados para atender desde alinhamentos rápidos até o treinamento intensivo para quem busca total autonomia no volante. Agende direto com o instrutor e treine no seu ritmo."
          />
        </div>

        {/* Pricing Cards Grid (4 colunas para 2, 5, 10 ou A Combinar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {siteConfig.plans.map((plan: Plan) => {
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative rounded-[4px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#141720] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.18)] lg:-translate-y-2'
                    : 'bg-[#12151B] border border-[#282E3A] hover:border-[#B08A3C]/70 shadow-lg'
                }`}
              >
                {/* Highlight Ribbon / Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-[3px] bg-[#D4AF37] text-[#0B0D10] text-[10px] font-mono font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
                      <Sparkles size={11} />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Top Section: Plan Name & Lessons count */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#F5F7FA] uppercase tracking-wide">
                      {plan.name}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-[#B08A3C] uppercase px-2 py-0.5 rounded-[2px] bg-[#0B0D10] border border-[#282E3A] inline-block mb-2">
                    {plan.target}
                  </span>

                  {/* Lessons volume (sem exibição de valores) */}
                  <div className="my-3 pb-3 border-b border-[#282E3A]">
                    <div className="text-lg sm:text-xl font-display font-black text-[#D4AF37] tracking-tight">
                      {plan.lessons}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span className="text-[11px] font-mono text-[#9CA3AF] uppercase">
                        Consulte pelo WhatsApp
                      </span>
                    </div>
                  </div>

                  {/* Plan description */}
                  <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans leading-relaxed mb-5">
                    {plan.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono text-[#B08A3C] uppercase tracking-wider block">
                      O que está incluso:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#D8D8D8]">
                        <div className="w-3.5 h-3.5 rounded-[2px] bg-[#1A1E26] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                          <Check size={10} />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: WhatsApp with preset plan text */}
                <div className="pt-4 border-t border-[#1C222C]">
                  <Button
                    size="md"
                    variant={isHighlighted ? 'primary' : 'outline'}
                    href={siteConfig.getWhatsAppLink(plan.messageText)}
                    external
                    icon={<MessageCircle size={15} />}
                    className="w-full text-xs font-mono"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on flexibility */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-mono text-[#6B7280]">
            Precisa de uma quantidade personalizada de aulas ou treino com seu próprio carro?{' '}
            <a
              href={siteConfig.getWhatsAppLink(
                'Olá, Araújo! Gostaria de saber se você faz um pacote personalizado de aulas para o meu caso.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline underline-offset-4 inline-flex items-center gap-1 font-semibold"
            >
              Fale diretamente comigo no WhatsApp <ArrowUpRight size={13} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
