import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader2 } from 'lucide-react';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#001F3F]">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-[#FF6B35] animate-spin mx-auto mb-4" />
          <p className="text-white text-xl font-semibold tracking-wide">GDS ENGINEERING</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-['Open_Sans',sans-serif] bg-white">
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}