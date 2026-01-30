import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { value: 10, label: 'Years Experience', suffix: '+' },
  { value: 50, label: 'Projects Completed', suffix: '+' },
  { value: 100, label: 'On-Time Delivery', suffix: '%' },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 31, 63, 0.85), rgba(0, 31, 63, 0.75)), url('https://images.unsplash.com/photo-1761519609548-fdc7687e4c9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY5NzYyNzExfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#001F3F] shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Button
                onClick={() => scrollToSection('herotammudu')}
                className="font-['Montserrat',sans-serif] tracking-wider cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #7F8C8D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                GDS ENGINEERING
              </Button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Portfolio', 'Clients', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-[#FF6B35] transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#001F3F] border-t border-[#7F8C8D]/30"
          >
            <div className="px-4 py-4 space-y-3">
              {['About', 'Services', 'Portfolio', 'Clients', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white hover:text-[#FF6B35] py-2 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div id="herotammudu" className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white mb-6 font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl">
                End-to-End MEP Solutions: Mechanical, Electrical, Plumbing, Fire Protection, and Beyond
              </h2>
              <p className="text-[#7F8C8D] text-lg sm:text-xl mb-8 leading-relaxed">
                Delivering quality, safety, and timely execution for pharma, electronics, automotive, energy sectors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button
                  onClick={() => scrollToSection('services')}
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-6 text-lg"
                >
                  View Services
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    className="text-center sm:text-left"
                  >
                    <div className="flex items-baseline justify-center sm:justify-start">
                      <AnimatedCounter value={stat.value} />
                      <span className="text-4xl sm:text-5xl text-[#FF6B35] font-['Montserrat',sans-serif]">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-white/80 mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl sm:text-5xl text-[#FF6B35] font-['Montserrat',sans-serif] mr-1">
      {count}
    </span>
  );
}
