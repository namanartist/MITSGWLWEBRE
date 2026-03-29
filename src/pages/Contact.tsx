import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Globe } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 751 2409354', '+91 751 2409300'],
      description: 'Available Mon-Sat, 10:00 AM - 5:00 PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['director@mitsgwalior.in', 'admissions@mitsgwalior.in'],
      description: 'We usually respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Gola ka Mandir, Gwalior', 'Madhya Pradesh, India - 474005'],
      description: 'Main Campus, Administrative Block'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 5:30 PM', 'Sunday: Closed'],
      description: 'Academic and Administrative Offices'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfcf0] py-24 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Contact Us" 
        description="Get in touch with MITS Gwalior. Find contact details for admissions, administration, and general inquiries."
      />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <info.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-serif text-xl mb-4">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-black/80 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-black/50">{info.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-xl"
            >
              <h2 className="font-serif text-3xl mb-8">Send us a Message</h2>
              <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" 
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" 
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
                    <Globe className="w-3 h-3" /> Subject
                  </label>
                  <select className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Academic Query</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" 
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> Your Message
                  </label>
                  <textarea 
                    required 
                    rows={5}
                    className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none" 
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-10 py-4 bg-black text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 aspect-video rounded-[3rem] overflow-hidden border border-black/10 shadow-lg relative bg-gray-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.8258327424!2d78.2045933150308!3d26.234825983423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c1454752c873%3A0x839dc786f02245d!2sMadhav%20Institute%20of%20Technology%20%26%20Science%20(MITS)!5e0!3m2!1sen!2sin!4v1648450000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
