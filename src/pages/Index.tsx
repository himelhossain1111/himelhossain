import { useState } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Training from '@/components/portfolio/Training';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import References from '@/components/portfolio/References';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import SplashScreen from '@/components/portfolio/SplashScreen';
import SectionTransition from '@/components/portfolio/SectionTransition';
import SectionWrapper from '@/components/portfolio/SectionWrapper';
import AIChatButton from '@/components/portfolio/AIChatButton';
import WhatsAppButton from '@/components/portfolio/WhatsAppButton';
import ScrollToTop from '@/components/portfolio/ScrollToTop';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Navbar />
      <Hero />
      <SectionTransition />
      <SectionWrapper><About /></SectionWrapper>
      <SectionTransition />
      <SectionWrapper><Experience /></SectionWrapper>
      <SectionTransition />
      <SectionWrapper><Training /></SectionWrapper>
      <SectionTransition />
      <SectionWrapper><Skills /></SectionWrapper>
      <SectionTransition />
      <SectionWrapper><Projects /></SectionWrapper>
      <SectionTransition />
      <SectionWrapper><References /></SectionWrapper>
      <SectionTransition />
      <SectionWrapper><Contact /></SectionWrapper>
      <Footer />
      <AIChatButton />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
