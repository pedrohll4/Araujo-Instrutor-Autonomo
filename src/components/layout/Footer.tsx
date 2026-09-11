import React from 'react';
import { ArrowUp, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-[#282E3A] pt-16 pb-12 overflow-hidden text-[#9CA3AF]">
      {/* Subtle top road hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1A1E26]">
          {/* Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-[4px] overflow-hidden border border-[#B08A3C]/70 p-0.5 bg-[#0B0D10]">
                <img
                  src="/logo.jpg"
                  alt="Logo Araújo Instrutor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider text-[#F5F7FA]">
                  ARAUJO
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B08A3C]">
                  INSTRUTOR AUTÔNOMO
                </span>
              </div>
            </div>

            <p className="text-sm font-sans text-[#9CA3AF] leading-relaxed mb-6 max-w-sm">
              Treinamento veicular de alta precisão focado na sua segurança, controle emocional e domínio
              completo do veículo para as Categorias A (Moto) e B (Carro).
            </p>

            {/* Brand Values Emblem from Logo */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase bg-[#0B0D10] border border-[#282E3A] px-3 py-2 rounded-[4px]">
              <span>CONFIANÇA</span>
              <span className="text-[#B08A3C]">★</span>
              <span>RESPONSABILIDADE</span>
              <span className="text-[#B08A3C]">★</span>
              <span>COMPROMISSO</span>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-xs font-mono tracking-[0.25em] uppercase text-[#F5F7FA] mb-4 pb-1 border-b border-[#282E3A] inline-block">
              NAVEGAÇÃO
            </h3>
            <ul className="space-y-2.5 text-xs font-mono">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#E8C862] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (Cols 9-12) */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-xs font-mono tracking-[0.25em] uppercase text-[#F5F7FA] mb-4 pb-1 border-b border-[#282E3A] inline-block">
              CONTATO DIRETO
            </h3>
            <div className="space-y-3.5 text-xs font-mono">
              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F5F7FA] hover:text-[#25D366] transition-colors group"
              >
                <div className="w-7 h-7 rounded-[3px] bg-[#12151B] border border-[#282E3A] group-hover:border-[#25D366] flex items-center justify-center text-[#25D366]">
                  <Phone size={13} />
                </div>
                <div>
                  <div className="text-[10px] text-[#9CA3AF] uppercase">WhatsApp Direto</div>
                  <div className="text-xs font-bold text-[#F5F7FA] group-hover:text-[#25D366]">
                    {siteConfig.contact.whatsappDisplay}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-[3px] bg-[#12151B] border border-[#282E3A] flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin size={13} />
                </div>
                <div>
                  <div className="text-[10px] text-[#9CA3AF] uppercase">Região de Treinamento</div>
                  <div className="text-xs text-[#F5F7FA]">{siteConfig.location.city}</div>
                  <div className="text-[11px] text-[#6B7280]">{siteConfig.location.points}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-[3px] bg-[#12151B] border border-[#282E3A] flex items-center justify-center text-[#B08A3C] shrink-0 mt-0.5">
                  <Clock size={13} />
                </div>
                <div>
                  <div className="text-[10px] text-[#9CA3AF] uppercase">Disponibilidade</div>
                  <div className="text-xs text-[#F5F7FA]">{siteConfig.schedule.days}</div>
                  <div className="text-[11px] text-[#6B7280]">{siteConfig.schedule.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p className="text-[#6B7280] text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[#6B7280]">
              CATEGORIAS "A e B" • CONDUTORES PARTICULARES
            </span>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-[3px] bg-[#12151B] border border-[#282E3A] hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center text-[#9CA3AF] transition-all"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
