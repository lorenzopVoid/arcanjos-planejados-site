import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { BudgetFormSection } from './components/sections/BudgetFormSection';
import { CtaSection } from './components/sections/CtaSection';
import { HeroSection } from './components/sections/HeroSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ServicesSection } from './components/sections/ServicesSection';

export function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <ServicesSection /> */}
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <BudgetFormSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
