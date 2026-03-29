import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Microscope, Globe, Award, BookOpen, Download, ChevronRight, Search, FileText, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

const RESEARCH_STATS = [
  { label: "Research Projects", value: "25+", icon: FlaskConical },
  { label: "Publications", value: "1,500+", icon: BookOpen },
  { label: "Ph.D. Scholars", value: "120+", icon: Microscope },
  { label: "Patents Filed", value: "15+", icon: Award },
];

const RESEARCH_AREAS = [
  { title: "Artificial Intelligence & ML", desc: "Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision.", icon: Globe },
  { title: "Renewable Energy", desc: "Solar Photovoltaics, Wind Energy, Smart Grids, and Sustainable Power Systems.", icon: FlaskConical },
  { title: "Smart Materials", desc: "Nanotechnology, Advanced Composite Materials, and Structural Engineering.", icon: Microscope },
  { title: "Internet of Things", desc: "Smart Cities, Industrial IoT, Wireless Sensor Networks, and Edge Computing.", icon: Globe },
];

export const Research = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Research & Development" 
        description="MITS Gwalior is committed to fostering a culture of innovation and research among faculty and students, with a focus on cutting-edge technologies and societal impact."
        keywords="MITS Gwalior Research, R&D, Innovation, Patents, Ph.D. Scholars, Research Projects"
      />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#800000] text-white rounded-[3rem] p-12 md:p-20 mb-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <FlaskConical className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Research & Development</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              Fostering a culture of innovation, critical thinking, and technical excellence through cutting-edge research and industry collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-[#800000] rounded-full font-bold hover:bg-orange-50 transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" /> Research Directory
              </button>
              <button className="px-8 py-4 bg-[#800000] border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" /> R&D Brochure
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {RESEARCH_STATS.map((stat, idx) => (
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

        {/* Research Areas */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif mb-12 text-center text-[#800000]">Key Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESEARCH_AREAS.map((area, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-black/60 leading-relaxed text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-sm">
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-500" /> Sponsored Projects
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-black/5 hover:bg-[#f2e8e3]/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">Development of Smart Grid Monitoring System</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Ongoing</span>
                    </div>
                    <p className="text-sm text-black/60 mb-4">Funding Agency: Department of Science & Technology (DST), Govt. of India</p>
                    <div className="flex items-center gap-4 text-xs font-medium text-black/40">
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> PI: Dr. R. S. Jadon</span>
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Budget: ₹45.5 Lakhs</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 text-[#800000] font-bold hover:underline flex items-center gap-2">
                View All Projects <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Important Links</h3>
              <div className="space-y-3">
                {[
                  "Research Policy & Guidelines",
                  "Ph.D. Admission Notification",
                  "List of Approved Supervisors",
                  "Publication Incentives",
                  "Ethics Committee Approval",
                  "IPR & Patent Cell"
                ].map((link, idx) => (
                  <a key={idx} href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#f2e8e3]/50 transition-colors group">
                    <span className="text-sm font-medium text-black/70 group-hover:text-black">{link}</span>
                    <ChevronRight className="w-4 h-4 text-black/20 group-hover:text-[#800000]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#800000] text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <Award className="w-40 h-40" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Research Grants</h3>
              <p className="text-white/70 text-sm mb-6 relative z-10 leading-relaxed">
                MITS provides internal research grants to faculty and students for innovative projects and attending international conferences.
              </p>
              <button className="w-full py-3 bg-white text-[#800000] rounded-xl font-bold hover:bg-orange-50 transition-colors relative z-10">
                Apply for Grant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
