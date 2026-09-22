import React from 'react';
import { MapPin, CheckCircle2, UserCheck } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { SectionTitle } from '../ui/SectionTitle';

export const SobreInstrutor: React.FC = () => {
  return (
    <section id="sobre" className="relative py-20 sm:py-28 bg-[#0B0D10] overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Cols 1-5): Real Instructor Photo Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md h-[480px] sm:h-[540px] rounded-[4px] bg-[#12151B] border-2 border-[#282E3A] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-[3px] overflow-hidden bg-[#0F1217] border border-[#282E3A] group">
                {/* Real Instructor Photo with precise positioning on Araújo and the bike */}
                <img
                  src="/araujo.jpg"
                  alt="Instrutor Araújo na pista de instrução veicular"
                  style={{ objectPosition: '50% 65%' }}
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft gradient at the very bottom so it does not hide the motorcycle */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0D10]/95 via-[#0B0D10]/40 to-transparent pointer-events-none" />

                {/* Aesthetic corner marks */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37] z-10" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37] z-10" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37] z-10" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37] z-10" />

                {/* Top Corner Badge: Categorias */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#0B0D10]/90 border border-[#D4AF37]/50 backdrop-blur-md text-[10px] font-mono text-[#E8C862] uppercase tracking-wider shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>CATEGORIAS A & B</span>
                  </div>
                </div>

                {/* Bottom Sleek Bar */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between p-2.5 rounded-[3px] bg-[#0B0D10]/85 backdrop-blur-md border border-[#282E3A] shadow-lg">
                  <div>
                    <span className="text-xs font-display font-bold tracking-wider text-[#F5F7FA] uppercase block">
                      ARAUJO INSTRUTOR
                    </span>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                      Instrutor Autônomo
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#9CA3AF] px-2 py-0.5 rounded-[2px] bg-[#141820] border border-[#282E3A]">
                    <UserCheck size={11} className="text-[#25D366]" />
                    <span>CREDENCIADO</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge on Corner */}
              <div className="absolute -bottom-3 right-4 bg-[#0B0D10] border border-[#D4AF37] px-3 py-1.5 rounded-[3px] shadow-xl flex items-center gap-1.5 z-20">
                <MapPin size={13} className="text-[#D4AF37]" />
                <span className="text-[10px] font-mono tracking-widest text-[#F5F7FA] uppercase font-bold">
                  VALE DO JAMARI • RO
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
