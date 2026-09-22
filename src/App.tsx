import React, { useState } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { AnnouncementBanner } from './sections/AnnouncementBanner';
import { HeroSection } from './sections/HeroSection';
import { SocialHubSection } from './sections/SocialHubSection';
import { FeaturedEditSection } from './sections/FeaturedEditSection';
import { ServicesSection } from './sections/ServicesSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { LivePixSection } from './sections/LivePixSection';
import { Footer } from './sections/Footer';
import { siteConfig } from './config/site';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen bg-dark-950 text-dark-100 font-sans selection:bg-white selection:text-dark-950 antialiased overflow-x-hidden">
      {/* Fast & Elegant Intro Screen */}
      {showIntro && (
        <IntroScreen
          brandName={siteConfig.name}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Atmospheric Dark Background (Grid, Spotlights & Vignette) */}
      <BackgroundGrid />

      {/* Floating Top Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        {/* Modular Announcement / News Banner (Toggleable) */}
        <AnnouncementBanner />

        {/* 1. Hero / Presentation */}
        <HeroSection />

        {/* 2. Onde me Encontrar (Big Social Hub) */}
        <SocialHubSection />

        {/* 3. Edit em Destaque (Cinematic Showcase) */}
        <FeaturedEditSection />

        {/* 4. Meus Trabalhos (4 Pilares de Atuação) */}
        <ServicesSection />

        {/* 5. Portfólio / Galeria Visual */}
        <PortfolioSection />

        {/* 6. LivePix / Apoio Especial */}
        <LivePixSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;
