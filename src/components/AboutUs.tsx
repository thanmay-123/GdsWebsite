import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Zap, Users, Shield, MessageCircle, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const beliefs = [
  { icon: Zap, title: 'Quick Response', description: 'Rapid mobilization and project execution' },
  { icon: Users, title: 'Teamwork', description: 'Collaborative approach with clients and stakeholders' },
  { icon: Shield, title: 'Safety First', description: 'Uncompromising commitment to workplace safety' },
  { icon: CheckCircle, title: 'Reliability', description: 'Consistent delivery on promises' },
  { icon: MessageCircle, title: 'Communication', description: 'Transparent updates throughout project lifecycle' },
  { icon: Target, title: 'Excellence', description: 'Highest quality standards in every project' },
];

const advantages = [
  'In-house fabrication facility for cable trays, ducts, and structural components',
  'Dedicated design team with BIM and AutoCAD expertise',
  'ISO-certified processes ensuring quality at every stage',
  'LEED-compliant green building practices',
  '100+ skilled engineers and technicians',
  '24/7 project support and maintenance services',
];

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            About GDS Engineering
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Image and Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-8 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTc2MjcxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="GDS Engineering Team"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/70 to-transparent" />
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B35]">
                <h3 className="text-[#001F3F] mb-2 font-['Montserrat',sans-serif]">Our Vision</h3>
                <p className="text-[#7F8C8D]">
                  To be a reliable name in construction, recognized for delivering excellence in MEP solutions across diverse industrial sectors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B35]">
                <h3 className="text-[#001F3F] mb-2 font-['Montserrat',sans-serif]">Our Mission</h3>
                <p className="text-[#7F8C8D]">
                  To execute projects safely, efficiently, and sustainably while exceeding client expectations through innovation and dedication.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B35]">
                <h3 className="text-[#001F3F] mb-2 font-['Montserrat',sans-serif]">Our Aim</h3>
                <p className="text-[#7F8C8D]">
                  To be the trusted partner with the highest standards of quality, safety, and environmental responsibility.
                </p>
              </div>

              <div className="bg-[#001F3F] text-white p-6 rounded-lg shadow-md">
                <p className="text-sm">
                  <span className="text-[#FF6B35] font-semibold">Founded in 2015</span>, GDS Engineering has grown to become a leading MEP services provider with ISO-certified processes and a commitment to sustainability. Our 100+ skilled engineers deliver LEED-compliant solutions across pharma, automotive, electronics, and energy sectors.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Beliefs and Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Core Beliefs */}
            <div className="mb-12">
              <h3 className="text-[#001F3F] mb-6 font-['Montserrat',sans-serif] text-2xl">
                Our Core Beliefs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {beliefs.map((belief, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <belief.icon className="w-8 h-8 text-[#FF6B35] mb-2" />
                    <h4 className="text-[#001F3F] mb-1 font-['Montserrat',sans-serif]">
                      {belief.title}
                    </h4>
                    <p className="text-[#7F8C8D] text-sm">{belief.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* GDS Advantages */}
            <div className="bg-gradient-to-br from-[#001F3F] to-[#001F3F]/90 p-8 rounded-lg shadow-xl">
              <h3 className="text-white mb-6 font-['Montserrat',sans-serif] text-2xl">
                GDS Advantages
              </h3>
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start text-white"
                  >
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{advantage}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
