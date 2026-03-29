import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Search, Clock, Users, Book, Globe, Download, ChevronRight, Award } from 'lucide-react';
import { SEO } from '../components/SEO';

const LIBRARY_STATS = [
  { label: "Total Books", value: "1,25,000+", icon: Book },
  { label: "e-Journals", value: "1,500+", icon: Globe },
  { label: "Seating Capacity", value: "500+", icon: Users },
  { label: "Digital Library", value: "24/7 Access", icon: Search },
];

const SERVICES = [
  { title: "OPAC Search", desc: "Search for books, journals, and other resources online through our Online Public Access Catalog.", icon: Search },
  { title: "Digital Repository", desc: "Access previous year question papers, theses, and research papers published by MITS faculty.", icon: Download },
  { title: "E-Resources", desc: "Access IEEE, Springer, ScienceDirect, and other premium academic databases.", icon: Globe },
  { title: "Reading Halls", desc: "Quiet and well-lit reading spaces for focused study and research.", icon: BookOpen },
];

export const Library = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Central Library" 
        description="The Central Library at MITS Gwalior is a knowledge hub with a vast collection of books, e-journals, and digital resources to support academic and research activities."
        keywords="MITS Gwalior Library, Central Library, e-journals, IEEE access, Digital Library, OPAC"
      />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#800000] text-white rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <BookOpen className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Central Library</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              The heart of academic and research activities at MITS, providing access to a world of knowledge through extensive physical and digital resources.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-[#800000] rounded-full font-bold hover:bg-orange-50 transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" /> Access OPAC
              </button>
              <button className="px-8 py-4 bg-[#800000] border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" /> Library Guide
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {LIBRARY_STATS.map((stat, idx) => (
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

        {/* Services Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-serif mb-8 text-[#800000]">Library Services</h2>
            <div className="grid gap-6">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-white rounded-3xl border border-black/5 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-black/60 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-sm">
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-orange-500" /> Library Timings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-[#800000] font-bold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="font-medium">Saturday</span>
                  <span className="text-[#800000] font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="font-medium">Sunday & Holidays</span>
                  <span className="text-black/40">Closed</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-black/50 italic">
                * Reading halls are open until 10:00 PM during examination period.
              </p>
            </div>

            <div className="bg-[#f2e8e3]/30 p-10 rounded-[2.5rem] border border-[#800000]/10">
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#800000]" /> Membership
              </h3>
              <p className="text-black/70 mb-6 leading-relaxed">
                All students, faculty, and staff of MITS are automatically eligible for library membership. Students can borrow up to 4 books for a period of 15 days.
              </p>
              <button className="w-full py-4 bg-[#800000] text-white rounded-full font-bold hover:bg-[#600000] transition-colors flex items-center justify-center gap-2">
                Library Rules & Regulations <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
