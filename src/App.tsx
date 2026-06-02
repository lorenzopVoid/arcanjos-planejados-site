import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { AboutSection } from './components/sections/AboutSection';
import { BudgetFormSection } from './components/sections/BudgetFormSection';
import { CtaSection } from './components/sections/CtaSection';
import { HeroSection } from './components/sections/HeroSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { PortfolioCategoryPage } from './pages/PortfolioCategoryPage';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <BudgetFormSection />
      <CtaSection />
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:categoryId" element={<PortfolioCategoryPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}