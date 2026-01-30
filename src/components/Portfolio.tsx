import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Briefcase, TrendingDown } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    client: 'Sungwoo Hitech',
    logo: 'SW',
    sector: 'Automobile Manufacturing',
    area: '54,000 sqm',
    scope: 'Complete MEP works including HVAC, electrical installations, fire protection systems, and plumbing',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1596986952526-3be237187071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDF8fHx8MTc2OTc2MjcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    metric: 'Completed 2 weeks ahead of schedule'
  },
  {
    id: 2,
    client: 'Deaha India',
    logo: 'DI',
    sector: 'Electronics Manufacturing',
    area: '38,000 sqm',
    scope: 'Electrical infrastructure, HVAC ducting systems, STP installation, and comprehensive fire safety systems',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1765375522929-994a71439c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY5NzYyNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    metric: 'Completed 15% under budget'
  },
  {
    id: 3,
    client: 'Foxconn Technology',
    logo: 'FX',
    sector: 'Electronics & Technology',
    area: '56,000 sqm',
    scope: 'Full MEP package: mechanical utilities, electrical systems, HVAC, plumbing, fire protection, and ELV systems',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1758813330492-2b43bd42ccc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodmFjJTIwc3lzdGVtJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5NzYyNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    metric: '100% safety compliance achieved'
  },
  {
    id: 4,
    client: 'Kia Motors',
    logo: 'KIA',
    sector: 'Automobile Manufacturing',
    area: '45,000 sqm',
    scope: 'Process piping, compressed air systems, HVAC installations, and electrical infrastructure',
    location: 'Anantapur, India',
    image: 'https://images.unsplash.com/photo-1769698840921-b6cf06a51f8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3Njk3NjI3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    metric: 'Zero downtime during commissioning'
  },
  {
    id: 5,
    client: 'Bharat Petroleum',
    logo: 'BP',
    sector: 'Energy & Petroleum',
    area: '28,000 sqm',
    scope: 'Fire protection systems, electrical installations, and specialized piping for petroleum products',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1522208615167-4c91b0123c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwcHJvdGVjdGlvbiUyMHNwcmlua2xlciUyMHN5c3RlbXxlbnwxfHx8fDE3Njk3MTkyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    metric: 'Awarded for safety excellence'
  },
  {
    id: 6,
    client: 'New Pharma Plant 2026',
    logo: 'NP',
    sector: 'Pharmaceutical Manufacturing',
    area: '42,000 sqm',
    scope: 'Clean room HVAC, ultra-pure water systems, specialized MEP for GMP compliance, automated BMS integration',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1761519609548-fdc7687e4c9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY5NzYyNzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    metric: 'Zero downtime commissioning achieved'
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#001F3F] mb-4 font-['Montserrat',sans-serif] text-3xl sm:text-4xl">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto mb-4" />
          <p className="text-[#7F8C8D] max-w-2xl mx-auto text-lg">
            Delivering excellence across pharma, automotive, electronics, and energy sectors
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Left: Image */}
                <div className="relative h-80 md:h-auto">
                  <ImageWithFallback
                    src={currentProject.image}
                    alt={currentProject.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 to-transparent" />
                  
                  {/* Logo Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-[#001F3F] font-['Montserrat',sans-serif] text-lg">
                        {currentProject.logo}
                      </span>
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg inline-flex items-center">
                      <TrendingDown className="w-4 h-4 mr-2" />
                      <span className="text-sm font-['Montserrat',sans-serif]">
                        {currentProject.metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-[#001F3F] mb-2 font-['Montserrat',sans-serif] text-3xl">
                      {currentProject.client}
                    </h3>
                    <p className="text-[#FF6B35] font-['Montserrat',sans-serif]">
                      {currentProject.sector}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#7F8C8D] mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#7F8C8D] text-sm">Location</p>
                        <p className="text-[#001F3F]">{currentProject.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Briefcase className="w-5 h-5 text-[#7F8C8D] mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#7F8C8D] text-sm">Project Area</p>
                        <p className="text-[#001F3F]">{currentProject.area}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#7F8C8D] text-sm mb-2">Scope of Work</p>
                      <p className="text-[#001F3F]">{currentProject.scope}</p>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between text-sm text-[#7F8C8D]">
                    <span>Project {currentIndex + 1} of {projects.length}</span>
                    <div className="flex gap-2">
                      {projects.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            idx === currentIndex ? 'w-8 bg-[#FF6B35]' : 'w-1 bg-[#7F8C8D]/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#001F3F] hover:bg-[#FF6B35] hover:text-white rounded-full w-12 h-12 p-0 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#001F3F] hover:bg-[#FF6B35] hover:text-white rounded-full w-12 h-12 p-0 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 transition-all duration-300 ${
                idx === currentIndex
                  ? 'ring-2 ring-[#FF6B35] scale-105'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.client}
                className="w-20 h-20 object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
