import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D10]/95 backdrop-blur-md py-3 border-b border-[#282E3A]/80 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
          : 'bg-gradient-to-b from-[#0B0D10]/90 via-[#0B0D10]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
          aria-label="Araújo Instrutor Autônomo - Voltar ao início"
        >
          {/* Circular or precision badge for logo */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-[4px] overflow-hidden border border-[#B08A3C]/60 p-0.5 bg-[#0B0D10] group-hover:border-[#D4AF37] transition-all duration-300">
            <img
              src="/logo.jpg"
              alt="Logo Araújo Instrutor"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#F5F7FA] leading-none group-hover:text-[#E8C862] transition-colors">
                ARAUJO
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] border border-[#D4AF37]/40 px-1 py-0.2 rounded-[2px] hidden sm:inline-block">
                A & B
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#B08A3C] leading-tight">
              INSTRUTOR AUTÔNOMO
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegação Principal">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-[13px] font-mono tracking-[0.14em] uppercase text-[#9CA3AF] hover:text-[#F5F7FA] relative py-1 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            size="sm"
            variant="primary"
            href={siteConfig.getWhatsAppLink()}
            external
            icon={<ArrowUpRight size={15} />}
          >
            AGENDAR AULA
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-[4px] text-[#F5F7FA] hover:text-[#D4AF37] border border-[#282E3A] hover:border-[#B08A3C]/60 bg-[#12151B] transition-colors"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D10]/98 border-b border-[#282E3A] px-4 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 mb-5">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-mono tracking-widest uppercase text-[#9CA3AF] hover:text-[#E8C862] hover:bg-[#12151B] px-3 py-2.5 rounded-[4px] border-l-2 border-transparent hover:border-[#D4AF37] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#282E3A] flex flex-col gap-3">
            <Button
              size="md"
              variant="primary"
              href={siteConfig.getWhatsAppLink()}
              external
              icon={<ArrowUpRight size={16} />}
              className="w-full"
            >
              AGENDAR AULA PELO WHATSAPP
            </Button>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#9CA3AF] px-1 pt-1">
              <span className="flex items-center gap-1.5">
                <Phone size={12} className="text-[#D4AF37]" />
                {siteConfig.contact.whatsappDisplay}
              </span>
              <span className="text-[#B08A3C]">CATEGORIAS A & B</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
