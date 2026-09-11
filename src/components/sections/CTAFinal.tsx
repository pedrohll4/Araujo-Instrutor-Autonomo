import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';

export const CTAFinal: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050608] overflow-hidden">
      {/* Background Cinematic Road Perspective */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop"
          alt="Estrada noturna desaparecendo no horizonte"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125 brightness-50"
        />

        {/* Multi-layered dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/85 to-[#0B0D10]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />

        {/* Converging Golden Road Lines toward vanishing point */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Left edge line */}
          <line x1="0" y1="600" x2="720" y2="280" stroke="#B08A3C" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Center dashed road line */}
          <line
            x1="720"
            y1="600"
            x2="720"
            y2="280"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeDasharray="14 18"
            strokeOpacity="0.6"
            className="animate-road-dash"
          />
          {/* Right edge line */}
          <line x1="1440" y1="600" x2="720" y2="280" stroke="#B08A3C" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Vanishing point ambient star / dot */}
          <circle cx="720" cy="280" r="3" fill="#E8C862" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#12151B]/90 border border-[#B08A3C]/50 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#E8C862] uppercase font-semibold">
            VAGAS LIMITADAS POR SEMANA
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F5F7FA] uppercase leading-none mb-6">
          PRONTO PARA DAR O{' '}
          <span className="text-[#D4AF37] block sm:inline">
            PRÓXIMO PASSO?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-[#D8D8D8] font-sans font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Agende sua aula e comece a dirigir com mais confiança, segurança e controle total do veículo.
        </p>

        {/* Big Impactful Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-10">
          <Button
            size="xl"
            variant="primary"
            href={siteConfig.getWhatsAppLink('Olá, Araújo! Estou pronto para iniciar minhas aulas práticas. Gostaria de agendar meu horário.')}
            external
            icon={<ArrowUpRight size={22} />}
            className="w-full sm:w-auto text-base sm:text-lg px-10 py-4 shadow-[0_4px_32px_rgba(212,175,55,0.4)]"
          >
            AGENDAR MINHA AULA PELO WHATSAPP
          </Button>
        </div>

        {/* Reassuring points */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#12151B] border border-[#282E3A] flex items-center justify-center text-[#25D366]">
              <Check size={11} />
            </div>
            <span>Atendimento direto pelo WhatsApp</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#12151B] border border-[#282E3A] flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck size={11} />
            </div>
            <span>Sem burocracia de autoescola</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#12151B] border border-[#282E3A] flex items-center justify-center text-[#B08A3C]">
              <MessageSquare size={11} />
            </div>
            <span>Horários e pacotes flexíveis</span>
          </div>
        </div>
      </div>
    </section>
  );
};
