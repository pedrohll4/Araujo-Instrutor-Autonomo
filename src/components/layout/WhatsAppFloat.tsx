import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const WhatsAppFloat: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 300px of scrolling
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-3 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Tooltip / Prompt bubble on desktop */}
      <a
        href={siteConfig.getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 bg-[#12151B]/95 border border-[#282E3A] hover:border-[#25D366]/60 backdrop-blur-md px-3.5 py-2 rounded-[4px] text-xs font-mono text-[#F5F7FA] shadow-lg group transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className="text-[#9CA3AF] group-hover:text-[#F5F7FA] transition-colors">
          Falar com o Araújo agora
        </span>
      </a>

      {/* Main WhatsApp Floating Button */}
      <a
        href={siteConfig.getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-[4px] bg-[#25D366] hover:bg-[#20bd5a] text-[#0B0D10] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0B0D10]"
        aria-label="Iniciar conversa com Araújo no WhatsApp"
      >
        {/* Radar wave effect */}
        <span className="absolute inset-0 rounded-[4px] border-2 border-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare size={26} className="fill-current text-[#0B0D10]" />
      </a>
    </div>
  );
};
