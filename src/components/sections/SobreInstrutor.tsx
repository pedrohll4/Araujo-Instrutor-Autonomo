import React from 'react';
import { Camera, ShieldCheck, MapPin, CheckCircle2, UserCheck } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';

export const SobreInstrutor: React.FC = () => {
  return (
    <section id="sobre" className="relative py-20 sm:py-28 bg-[#0B0D10] overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Cols 1-5): Real Instructor Photo Container Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[4px] bg-[#12151B] border-2 border-[#282E3A] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-[3px] overflow-hidden bg-[#0F1217] border border-[#282E3A] flex flex-col items-center justify-center p-8 text-center group">
                {/* Background grid texture */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                {/* Aesthetic corner marks */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

                {/* Camera / Photo Placeholder Box */}
                <div className="w-20 h-20 rounded-[4px] bg-[#1A1E26] border border-[#B08A3C]/50 flex items-center justify-center text-[#D4AF37] mb-5 shadow-inner">
                  <Camera size={32} />
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B08A3C] mb-1">
                  ESPAÇO RESERVADO
                </span>
                <h4 className="font-display text-2xl font-bold text-[#F5F7FA] uppercase tracking-wide mb-2">
                  FOTO DO ARAÚJO
                </h4>
                <p className="text-xs text-[#9CA3AF] font-sans max-w-xs leading-relaxed mb-6">
                  Área reservada para a foto oficial do instrutor junto ao veículo de instrução.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#12151B] border border-[#D4AF37]/40 text-[10px] font-mono text-[#E8C862] uppercase tracking-wider">
                  <UserCheck size={12} />
                  <span>INSTRUTOR AUTÔNOMO CREDENCIADO</span>
                </div>
              </div>

              {/* Floating Badge on Corner */}
              <div className="absolute -bottom-4 right-6 bg-[#0B0D10] border border-[#D4AF37] px-4 py-2 rounded-[3px] shadow-xl flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <span className="text-[11px] font-mono tracking-widest text-[#F5F7FA] uppercase font-bold">
                  CATEGORIAS A e B
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Humanized Bio, Approach & Values */}
          <div className="lg:col-span-7 flex flex-col">
            <SectionTitle
              badge="PERFIL & METODOLOGIA"
              tagline="EXPERIÊNCIA E CONFIANÇA"
              title="QUEM ESTÁ"
              highlightText="AO SEU LADO"
            />

            {/* Lead Statement */}
            <div className="mt-6 p-4 sm:p-5 rounded-[3px] bg-[#12151B] border-l-2 border-[#D4AF37] border-y border-r border-[#282E3A]">
              <p className="text-base sm:text-lg font-display text-[#F5F7FA] italic leading-snug">
                “{siteConfig.about.quote}”
              </p>
            </div>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#9CA3AF] font-sans leading-relaxed">
              <p>{siteConfig.about.bioParagraph1}</p>
              <p>{siteConfig.about.bioParagraph2}</p>
            </div>

            {/* Credential Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1C222C]">
              {siteConfig.about.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-[#B08A3C] uppercase">
                      {cred.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#F5F7FA]">
                      {cred.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location Pill */}
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#D8D8D8]">
              <MapPin size={14} className="text-[#D4AF37]" />
              <span>Região de atendimento:</span>
              <span className="text-[#F5F7FA] font-bold bg-[#141720] border border-[#282E3A] px-2 py-0.5 rounded-[2px]">
                {siteConfig.location.city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
