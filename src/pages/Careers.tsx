import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Download, Search, Calendar, ExternalLink, Users, GraduationCap } from 'lucide-react';
import { UpdatesTabs } from '../components/UpdatesTabs';

const CAREERS_DATA = [
  {
    id: "MITS/Advt/2026/05",
    title: "Assistant Professor in Computer Science & Engineering",
    type: "Teaching",
    department: "Computer Science & Engineering",
    publishedDate: "2026-03-20",
    closingDate: "2026-04-20",
    status: "Open",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/04",
    title: "Associate Professor in Artificial Intelligence",
    type: "Teaching",
    department: "Artificial Intelligence",
    publishedDate: "2026-03-15",
    closingDate: "2026-04-15",
    status: "Open",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/03",
    title: "System Administrator",
    type: "Non-Teaching",
    department: "IT Services",
    publishedDate: "2026-03-10",
    closingDate: "2026-04-10",
    status: "Open",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/02",
    title: "Lab Technician - Civil Engineering",
    type: "Non-Teaching",
    department: "Civil Engineering",
    publishedDate: "2026-02-20",
    closingDate: "2026-03-20",
    status: "Closed",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/01",
    title: "Professor in Mechanical Engineering",
    type: "Teaching",
    department: "Mechanical Engineering",
    publishedDate: "2026-01-15",
    closingDate: "2026-02-15",
    status: "Closed",
    documentUrl: "#",
    applyUrl: "#"
  }
];

export const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCareers = CAREERS_DATA.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || job.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <UpdatesTabs />
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#800000] text-white rounded-3xl p-8 md:p-12 mb-8 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Briefcase className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Careers & Recruitment</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Join the MITS family. We are always looking for dedicated faculty and staff to contribute to our mission of excellence in education and research.
            </p>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
        >
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Teaching', 'Non-Teaching'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === f 
                    ? 'bg-[#800000] text-white' 
                    : 'bg-[#f2e8e3]/50 text-black/70 hover:bg-[#f2e8e3]'
                }`}
              >
                {f} Posts
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
            <input 
              type="text"
              placeholder="Search positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9fa] border border-black/10 rounded-full focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all"
            />
          </div>
        </motion.div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredCareers.length > 0 ? (
            filteredCareers.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-black/50 uppercase tracking-wider">{job.id}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
                      job.type === 'Teaching' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {job.type === 'Teaching' ? <GraduationCap className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                      {job.type}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      job.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-[#800000] mb-1 group-hover:underline decoration-2 underline-offset-4">{job.title}</h3>
                  <p className="text-sm font-medium text-black/70 mb-3">Department: {job.department}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-black/60">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Published: {job.publishedDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-700 font-medium">Closing: {job.closingDate}</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                  <a 
                    href={job.documentUrl}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#f2e8e3] text-[#800000] rounded-xl font-medium hover:bg-[#e8dcd5] transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Details
                  </a>
                  {job.status === 'Open' && (
                    <a 
                      href={job.applyUrl}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#800000] text-white rounded-xl font-medium hover:bg-[#800000]/90 transition-colors shadow-lg shadow-[#800000]/20"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Apply Now
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-white p-12 rounded-3xl border border-black/5 text-center">
              <Briefcase className="w-12 h-12 text-black/20 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-black/70 mb-2">No Openings Found</h3>
              <p className="text-black/50">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
