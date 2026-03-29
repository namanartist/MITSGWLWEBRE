import React from 'react';
import { motion } from 'motion/react';
import { Users, Music, Camera, Trophy, Coffee, Heart, ChevronRight, Globe, Star } from 'lucide-react';
import { SEO } from '../components/SEO';

const CLUBS = [
  { name: "Robotics Club", desc: "Design, build and program robots for national competitions.", icon: Star },
  { name: "Coding Club", desc: "Enhance your programming skills through hackathons and workshops.", icon: Globe },
  { name: "Cultural Club", desc: "Express your creativity through music, dance, and drama.", icon: Music },
  { name: "Sports Club", desc: "Participate in various indoor and outdoor sports activities.", icon: Trophy },
];

export const StudentLife = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Student Life" 
        description="Experience a vibrant and diverse campus life at MITS Gwalior. Explore student clubs, cultural fests, sports, and more."
        keywords="MITS Gwalior Student Life, Campus Life, Student Clubs, Cultural Fest, Sports"
      />

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#800000] text-white rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Users className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Student Life</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              Life at MITS goes beyond the classroom. It's about discovering your passions, building lifelong friendships, and creating unforgettable memories.
            </p>
          </div>
        </motion.div>

        {/* Clubs Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif mb-12 text-center text-[#800000]">Student Clubs & Societies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLUBS.map((club, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <club.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{club.name}</h3>
                <p className="text-black/60 leading-relaxed text-sm">{club.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-sm">
            <h3 className="text-3xl font-serif mb-8 text-[#800000] flex items-center gap-3">
              <Coffee className="w-8 h-8 text-orange-500" /> Campus Amenities
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Central Canteen", desc: "Hygienic and affordable meals." },
                { title: "Sports Complex", desc: "Indoor and outdoor facilities." },
                { title: "Medical Center", desc: "24/7 medical assistance." },
                { title: "Bank & ATM", desc: "On-campus banking services." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-black/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f2e8e3]/30 p-10 rounded-[3rem] border border-[#800000]/10">
            <h3 className="text-3xl font-serif mb-8 text-[#800000] flex items-center gap-3">
              <Heart className="w-8 h-8 text-[#800000]" /> Student Support
            </h3>
            <p className="text-black/70 mb-8 leading-relaxed">
              We provide comprehensive support services to ensure the well-being and success of our students, including counseling, mentorship, and financial aid.
            </p>
            <div className="space-y-4">
              <button className="w-full py-4 bg-[#800000] text-white rounded-2xl font-bold hover:bg-[#600000] transition-colors flex items-center justify-center gap-2">
                Counseling Services <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full py-4 bg-white border border-[#800000] text-[#800000] rounded-2xl font-bold hover:bg-[#f2e8e3] transition-colors flex items-center justify-center gap-2">
                Anti-Ragging Cell <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
