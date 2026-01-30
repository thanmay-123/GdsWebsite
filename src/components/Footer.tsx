import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Mechanical Utility Works',
  'HVAC Systems',
  'Fire Protection',
  'Electrical Services',
  'Plumbing Services',
  'ELV Systems',
  'Water Solutions',
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001F3F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="font-['Montserrat',sans-serif] text-2xl mb-4"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #7F8C8D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              GDS ENGINEERING
            </h3>
            <p className="text-[#7F8C8D] mb-6 text-sm leading-relaxed">
              Leading MEP services provider delivering excellence in Mechanical, Electrical, and Plumbing solutions across industrial, commercial, and infrastructure sectors.
            </p>
            
            {/* Contact Quick Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-[#FF6B35] mr-2 flex-shrink-0" />
                <span className="text-[#7F8C8D]">+91 81296 00145</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 text-[#FF6B35] mr-2 flex-shrink-0" />
                <span className="text-[#7F8C8D]">projectsgdsengineering.in</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-['Montserrat',sans-serif] text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-[#7F8C8D] hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-['Montserrat',sans-serif] text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-[#7F8C8D] text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-['Montserrat',sans-serif] text-lg mb-4">Certifications</h4>
            <div className="space-y-2 mb-6">
              <div className="inline-block bg-[#FF6B35] px-3 py-1 rounded text-xs mr-2">
                ISO Certified
              </div>
              <div className="inline-block bg-[#FF6B35] px-3 py-1 rounded text-xs">
                LEED Compliant
              </div>
            </div>

            <h4 className="font-['Montserrat',sans-serif] text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#7F8C8D]/20 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-[#7F8C8D] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#7F8C8D]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#7F8C8D] text-sm text-center md:text-left"
            >
              © 2026 GDS Engineering. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6 text-[#7F8C8D] text-sm"
            >
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Careers
              </a>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <p className="text-[#7F8C8D] text-xs">
              Head Office: Plot No. 5960, Bachupally, Hyderabad, Telangana | Branch: Bangalore, Karnataka
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
