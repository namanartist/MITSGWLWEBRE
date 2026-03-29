import React from 'react';
import { motion } from 'motion/react';
import { Building, Users, Coffee, Shield, Download, ChevronRight, CheckCircle2, Star, Clock, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const HOSTEL_STATS = [
  { label: "Total Hostels", value: "8", icon: Building },
  { label: "Capacity", value: "1,500+", icon: Users },
  { label: "Security", value: "24/7", icon: Shield },
  { label: "Mess Facility", value: "Hygienic", icon: Coffee },
];

export const Hostels = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Hostels" 
        description="MITS Gwalior provides comfortable and secure on-campus accommodation for both boys and girls, fostering a vibrant community life."
        keywords="MITS Gwalior Hostels, Boys Hostel, Girls Hostel, Campus Accommodation, Mess Facility"
      />

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#800000] text-white rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Building className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Hostels & Accommodation</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              A home away from home. We provide comfortable, secure, and vibrant living spaces for our students to grow and thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-[#800000] rounded-full font-bold hover:bg-orange-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" /> Hostel Fee Structure
              </button>
              <button className="px-8 py-4 bg-[#800000] border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" /> Mess Menu
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HOSTEL_STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm text-center group hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-[#f2e8e3] text-[#800000] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#800000] mb-1">{stat.value}</h3>
              <p className="text-sm text-black/50 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Hostel Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-[#800000]">Living at MITS</h2>
            <p className="text-black/70 text-lg leading-relaxed">
              MITS Gwalior offers separate hostel facilities for boys and girls. Each hostel is managed by a dedicated warden and staff to ensure a safe and disciplined environment.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Boys Hostels", desc: "5 Hostels with 1,000+ capacity." },
                { title: "Girls Hostels", desc: "3 Hostels with 500+ capacity." },
                { title: "Wi-Fi Enabled", desc: "High-speed internet in all rooms." },
                { title: "Recreation", desc: "TV rooms, gym, and indoor games." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl border border-black/5">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-black/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-sm">
            <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-orange-500" /> Admission Process
            </h3>
            <div className="space-y-6">
              {[
                { step: "1", title: "Apply Online", desc: "Submit your hostel application through the student portal after admission." },
                { step: "2", title: "Merit List", desc: "Hostel allotment is based on academic merit and distance from home." },
                { step: "3", title: "Fee Payment", desc: "Pay the hostel and mess fees online to confirm your allotment." },
                { step: "4", title: "Check-in", desc: "Complete the physical verification and move into your assigned room." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-black/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 bg-[#800000] text-white rounded-2xl font-bold hover:bg-[#600000] transition-colors flex items-center justify-center gap-2">
              Apply for Hostel <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Rules & Guidelines */}
        <div className="bg-orange-50 p-10 rounded-[3rem] border border-orange-100 mb-20">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center shrink-0">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-orange-900">Hostel Rules & Guidelines</h3>
              <p className="text-orange-800 leading-relaxed mb-6">
                To maintain a healthy and productive environment, all residents must adhere to the hostel rules. This includes curfew timings, guest policies, and maintenance of hygiene.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" /> Download Rulebook
                </button>
                <div className="flex items-center gap-2 text-orange-700 font-medium">
                  <Clock className="w-5 h-5" /> Curfew: 9:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
