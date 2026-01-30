import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Head Office',
    details: ['Plot No. 5960, Bachupally', 'Hyderabad, Telangana, India'],
  },
  {
    icon: MapPin,
    title: 'Branch Office',
    details: ['Bangalore', 'Karnataka, India'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 81296 00145', '+91 82962 54195'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['projectsgdsengineering.in'],
  },
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo submission
    toast.success('Thank you! We will contact you shortly.', {
      description: 'Your inquiry has been received successfully.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto mb-4" />
          <p className="text-[#7F8C8D] max-w-2xl mx-auto text-lg">
            Ready to start your project? Contact us today for a consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-start hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <info.icon className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h4 className="text-[#001F3F] mb-2 font-['Montserrat',sans-serif]">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-[#7F8C8D] text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-80"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.4906938975656!2d78.3498!3d17.5449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMyJzQxLjYiTiA3OMKwMjAnNTkuMyJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GDS Engineering Location"
              />
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-[#001F3F] mb-6 font-['Montserrat',sans-serif] text-2xl">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#001F3F] mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border-[#7F8C8D]/30 focus:border-[#FF6B35]"
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full border-[#7F8C8D]/30 focus:border-[#FF6B35]"
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border-[#7F8C8D]/30 focus:border-[#FF6B35]"
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] mb-2">
                    Service of Interest
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="w-full border-[#7F8C8D]/30 focus:border-[#FF6B35]">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-[#001F3F] mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full border-[#7F8C8D]/30 focus:border-[#FF6B35]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white py-6 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-[#001F3F]/5 rounded-lg">
                <p className="text-[#7F8C8D] text-sm text-center">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
