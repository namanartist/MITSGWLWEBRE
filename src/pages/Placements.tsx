import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, Building, Download, ChevronRight, Award, CheckCircle2, Globe, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';

const PLACEMENT_STATS = [
  { label: "Highest Package", value: "1.02 CPA", icon: Award },
  { label: "Average Package", value: "7.5 LPA", icon: TrendingUp },
  { label: "Placement Rate", value: "85%+", icon: CheckCircle2 },
  { label: "Recruiters", value: "150+", icon: Building },
];

const RECRUITERS = [
  { name: "TCS", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Infosys", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Wipro", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Cognizant", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Accenture", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Amazon", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "Microsoft", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
  { name: "L&T", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
];

export const Placements = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Training & Placements" 
        description="MITS Gwalior has a stellar placement record with top recruiters visiting our campus annually. Our dedicated Training and Placement Cell ensures students are industry-ready."
        keywords="MITS Gwalior Placements, Highest Package, TCS, Infosys, Amazon, Placement Statistics"
      />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#800000] text-white rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Briefcase className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Training & Placements</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              Empowering students with the skills and opportunities to launch successful careers in global industries and innovative startups.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-[#800000] rounded-full font-bold hover:bg-orange-50 transition-colors flex items-center gap-2">
                <FileText className="w-5 h-5" /> Placement Brochure 2024
              </button>
              <button className="px-8 py-4 bg-[#800000] border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Globe className="w-5 h-5" /> Recruiter Portal
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PLACEMENT_STATS.map((stat, idx) => (
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

        {/* Recruiters Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif mb-12 text-center text-[#800000]">Our Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {RECRUITERS.map((recruiter, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-black/5 flex items-center justify-center hover:shadow-md transition-shadow group grayscale hover:grayscale-0"
              >
                <img src={recruiter.logo} alt={recruiter.name} className="max-h-12 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="text-[#800000] font-bold hover:underline flex items-center gap-2 mx-auto">
              View All Recruiters <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-sm">
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-500" /> Placement Process
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[1.25rem] before:top-2 before:bottom-2 before:w-0.5 before:bg-black/5">
                {[
                  { title: "Skill Development", desc: "Regular workshops on soft skills, technical training, and mock interviews." },
                  { title: "Pre-Placement Talks", desc: "Companies visit campus to interact with students and explain roles." },
                  { title: "Selection Process", desc: "Aptitude tests, technical rounds, and HR interviews conducted on-campus." },
                  { title: "Offer Letters", desc: "Successful candidates receive offer letters through the placement cell." }
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-[#800000] flex items-center justify-center z-10 font-bold text-[#800000]">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-black/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Student Resources</h3>
              <div className="space-y-3">
                {[
                  "Placement Policy 2024",
                  "Resume Building Guide",
                  "Interview Preparation Tips",
                  "Internship Guidelines",
                  "Past Placement Reports",
                  "Placement Registration Form"
                ].map((link, idx) => (
                  <a key={idx} href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#f2e8e3]/50 transition-colors group">
                    <span className="text-sm font-medium text-black/70 group-hover:text-black">{link}</span>
                    <ChevronRight className="w-4 h-4 text-black/20 group-hover:text-[#800000]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-orange-500 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <Users className="w-40 h-40" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">T&P Cell Contact</h3>
              <p className="text-white/80 text-sm mb-6 relative z-10 leading-relaxed">
                For any queries regarding placements or training, please contact our dedicated cell.
              </p>
              <div className="space-y-2 relative z-10 text-sm">
                <p className="flex items-center gap-2"><Download className="w-4 h-4" /> tpcell@mitsgwalior.in</p>
                <p className="flex items-center gap-2"><Download className="w-4 h-4" /> +91-751-2409300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
