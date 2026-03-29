import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Download, Search, FileText, ChevronRight, BookOpen, GraduationCap } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';

export const Syllabus = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const syllabusData = DEPARTMENTS.map(dept => ({
    deptName: dept.name,
    programs: [
      { name: 'B.Tech', years: ['1st Year', '2nd Year', '3rd Year', '4th Year'] },
      { name: 'M.Tech', years: ['1st Year', '2nd Year'] },
      { name: 'Ph.D.', years: ['Course Work'] }
    ]
  }));

  const filteredSyllabus = syllabusData.filter(item => 
    (selectedDept === 'All' || item.deptName === selectedDept) &&
    item.deptName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fdfcf0] py-24 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Syllabus" 
        description="Download the latest syllabus for all undergraduate, postgraduate, and doctoral programs at MITS Gwalior."
      />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Academic Syllabus</h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Access and download the detailed syllabus for all courses and programs offered at MITS Gwalior.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedDept('All')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                selectedDept === 'All' ? 'bg-black text-white' : 'bg-white border border-black/10 hover:bg-black/5'
              }`}
            >
              All Departments
            </button>
            {DEPARTMENTS.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.name)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedDept === dept.name ? 'bg-black text-white' : 'bg-white border border-black/10 hover:bg-black/5'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
            <input 
              type="text"
              placeholder="Search department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>
        </div>

        {/* Syllabus Grid */}
        <div className="space-y-12">
          {filteredSyllabus.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/5 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="font-serif text-3xl">{dept.deptName}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {dept.programs.map((prog, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2 text-orange-600">
                      <GraduationCap className="w-5 h-5" /> {prog.name}
                    </h3>
                    <div className="space-y-2">
                      {prog.years.map((year, yIdx) => (
                        <a
                          key={yIdx}
                          href="#"
                          className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-xl hover:bg-orange-50 transition-colors group"
                        >
                          <span className="text-sm font-medium">{year} Syllabus</span>
                          <Download className="w-4 h-4 text-black/20 group-hover:text-orange-500 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 p-8 bg-black text-white rounded-[2rem] text-center">
          <p className="text-lg font-light">
            Can't find what you're looking for? Contact the <Link to="/contact" className="text-orange-400 hover:underline">Academic Office</Link> for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};
