import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const clients = [
  { name: 'China Construction', abbr: 'CC' },
  { name: 'Sungwoo Hitech', abbr: 'SW' },
  { name: 'Shintec', abbr: 'ST' },
  { name: 'Kia Motors', abbr: 'KIA' },
  { name: 'Foxconn', abbr: 'FX' },
  { name: 'Bharat Petroleum', abbr: 'BP' },
  { name: 'Deaha India', abbr: 'DI' },
  { name: 'Motherson', abbr: 'MS' },
];

const testimonials = [
  {
    client: 'Sungwoo Hitech',
    position: 'Project Manager',
    quote: 'GDS Engineering has been a reliable partner throughout our facility expansion. Their attention to detail and commitment to deadlines is commendable.',
    rating: 5,
  },
  {
    client: 'Foxconn Technology',
    position: 'Facility Director',
    quote: 'The team demonstrated exceptional technical expertise in executing our complex MEP requirements. Quality and safety were never compromised.',
    rating: 5,
  },
  {
    client: 'Kia Motors India',
    position: 'Engineering Head',
    quote: 'Professional approach, skilled workforce, and innovative solutions. GDS Engineering exceeded our expectations in every aspect of the project.',
    rating: 5,
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
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
            Our Valued Clients
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto mb-4" />
          <p className="text-[#7F8C8D] max-w-2xl mx-auto text-lg">
            Trusted by leading companies across industries
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 overflow-hidden">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] to-[#001F3F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo - Grayscale to Color on Hover */}
                <div className="relative z-10 flex flex-col items-center justify-center h-24">
                  <div className="text-4xl font-['Montserrat',sans-serif] text-[#7F8C8D] group-hover:text-white transition-colors duration-300">
                    {client.abbr}
                  </div>
                  <div className="text-sm text-[#7F8C8D] group-hover:text-[#FF6B35] transition-colors duration-300 mt-2 text-center">
                    {client.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-[#001F3F] text-center mb-12 font-['Montserrat',sans-serif] text-2xl">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gradient-to-br from-[#001F3F] to-[#001F3F]/90 rounded-lg p-8 shadow-xl relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-12 h-12 text-[#FF6B35] opacity-20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-[#FF6B35] fill-[#FF6B35]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 mb-6 italic text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white font-['Montserrat',sans-serif]">
                    {testimonial.client}
                  </p>
                  <p className="text-[#7F8C8D] text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/90 rounded-lg p-8 text-center text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-['Montserrat',sans-serif] mb-2">50+</div>
              <p className="text-sm text-white/90">Completed Projects</p>
            </div>
            <div>
              <div className="text-4xl font-['Montserrat',sans-serif] mb-2">15+</div>
              <p className="text-sm text-white/90">Industry Partners</p>
            </div>
            <div>
              <div className="text-4xl font-['Montserrat',sans-serif] mb-2">100%</div>
              <p className="text-sm text-white/90">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-['Montserrat',sans-serif] mb-2">4</div>
              <p className="text-sm text-white/90">Industry Sectors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
