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

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Training />
      <Skills />
      <Projects />
      <References />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
