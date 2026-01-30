import React from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  Wind, 
  Flame, 
  Zap, 
  Droplet, 
  Camera, 
  Waves,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Settings,
    title: 'Mechanical Utility Works',
    description: 'Comprehensive piping solutions for industrial applications',
    benefits: [
      'Process piping for steam, compressed air, and gases',
      'Chilled water and hot water distribution systems',
      'Vacuum and nitrogen piping networks'
    ],
    color: '#FF6B35'
  },
  {
    icon: Wind,
    title: 'HVAC Systems',
    description: 'Complete heating, ventilation, and air conditioning solutions',
    benefits: [
      'Ducting systems with precise airflow design',
      'VRF/VRV multi-split AC systems',
      'Central chillers and AHU installations'
    ],
    color: '#4A90E2'
  },
  {
    icon: Flame,
    title: 'Fire Protection',
    description: 'Advanced fire safety systems for complete protection',
    benefits: [
      'Hydrant and sprinkler systems with NFPA compliance',
      'FM-200 and CO2 gas suppression systems',
      'Fire alarm and detection systems integration'
    ],
    color: '#E74C3C'
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    description: 'End-to-end electrical infrastructure solutions',
    benefits: [
      'HT/LT panels, substations, and transformer installations',
      'Comprehensive cabling and busduct systems',
      'DG sets with AMF panels and UPS systems'
    ],
    color: '#F39C12'
  },
  {
    icon: Droplet,
    title: 'Plumbing Services',
    description: 'Complete water supply and drainage systems',
    benefits: [
      'Potable water supply and distribution',
      'Drainage and sewage systems',
      'Sanitary fixtures and fittings installation'
    ],
    color: '#3498DB'
  },
  {
    icon: Camera,
    title: 'ELV Systems',
    description: 'Extra Low Voltage systems for smart buildings',
    benefits: [
      'CCTV surveillance with remote monitoring',
      'Public address and EPABX systems',
      'BMS, access control, and fire alarm integration'
    ],
    color: '#9B59B6'
  },
  {
    icon: Waves,
    title: 'Water Solutions & Steel Works',
    description: 'Water treatment and structural fabrication',
    benefits: [
      'Water Treatment Plants (WTP) with advanced filtration',
      'Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP)',
      'Steel structural works and custom fabrication'
    ],
    color: '#16A085'
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto mb-4" />
          <p className="text-[#7F8C8D] max-w-2xl mx-auto text-lg">
            Comprehensive MEP solutions with BIM integration, 24/7 maintenance contracts, and energy-efficient designs reducing operational costs by up to 20%
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Card Header */}
              <div 
                className="h-2 transition-all duration-300 group-hover:h-3"
                style={{ backgroundColor: service.color }}
              />
              
              <div className="p-6">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon 
                    className="w-8 h-8"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#001F3F] mb-3 font-['Montserrat',sans-serif] text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#7F8C8D] mb-4 text-sm">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#7F8C8D]">
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-gray-50"
                  style={{ color: service.color }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#001F3F] to-[#001F3F]/90 rounded-lg p-8 text-center text-white"
        >
          <h3 className="font-['Montserrat',sans-serif] text-2xl mb-4">
            Why Choose Our Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl text-[#FF6B35] mb-2">BIM</div>
              <p className="text-sm">Integration with Building Information Modeling software</p>
            </div>
            <div>
              <div className="text-4xl text-[#FF6B35] mb-2">24/7</div>
              <p className="text-sm">Maintenance contracts with round-the-clock support</p>
            </div>
            <div>
              <div className="text-4xl text-[#FF6B35] mb-2">20%</div>
              <p className="text-sm">Average cost reduction through energy-efficient solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
