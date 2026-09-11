import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { Hero } from './components/sections/Hero';
import { Diferenciais } from './components/sections/Diferenciais';
import { Categorias } from './components/sections/Categorias';
import { Planos } from './components/sections/Planos';
import { ComoFunciona } from './components/sections/ComoFunciona';
import { SobreInstrutor } from './components/sections/SobreInstrutor';
import { Depoimentos } from './components/sections/Depoimentos';
import { CTAFinal } from './components/sections/CTAFinal';
import { RoadDivider } from './components/ui/RoadDivider';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F7FA] relative selection:bg-[#D4AF37] selection:text-[#0B0D10]">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* Divider */}
        <RoadDivider />

        {/* 2. Por que aprender com o Araújo? (Diferenciais) */}
        <Diferenciais />

        {/* Divider with Precision Emblem */}
        <RoadDivider withCenterEmblem />

        {/* 3. Categorias A & B */}
        <Categorias />

        {/* Divider */}
        <RoadDivider />

        {/* 4. Pacotes / Planos de Aulas */}
        <Planos />

        {/* Divider with Precision Emblem */}
        <RoadDivider withCenterEmblem />

        {/* 5. Como Funciona */}
        <ComoFunciona />

        {/* Divider */}
        <RoadDivider />

        {/* 6. Sobre o Instrutor */}
        <SobreInstrutor />

        {/* Divider */}
        <RoadDivider />

        {/* 7. Depoimentos */}
        <Depoimentos />

        {/* 8. CTA Final */}
        <CTAFinal />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default App;
