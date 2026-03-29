import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Briefcase, Download, Search, Calendar, ExternalLink, Users, GraduationCap, X, CheckCircle2, FileText } from 'lucide-react';
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
    description: "MITS Gwalior invites applications for the position of Assistant Professor in the Department of Computer Science & Engineering. Candidates should have a strong academic background, research potential, and a commitment to excellence in teaching. Specialization in AI, Machine Learning, or Cyber Security is preferred.",
    qualifications: "Ph.D. in relevant discipline with first class at Bachelor's and Master's level.",
    experience: "As per AICTE/UGC norms."
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
    description: "Applications are invited for Associate Professor in the newly established Department of Artificial Intelligence. The role involves leading research initiatives, mentoring students, and developing advanced curriculum in AI and Data Science.",
    qualifications: "Ph.D. with significant research publications and teaching experience.",
    experience: "Minimum 8 years of teaching/research/industry experience."
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
    description: "We are looking for an experienced System Administrator to manage our campus-wide network and server infrastructure. Responsibilities include server maintenance, network security, and technical support for academic departments.",
    qualifications: "B.E./B.Tech in CS/IT or MCA with relevant certifications (CCNA/MCSE).",
    experience: "Minimum 3-5 years of experience in network administration."
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
    description: "Responsible for maintaining civil engineering laboratories, assisting students during practical sessions, and ensuring equipment calibration.",
    qualifications: "Diploma in Civil Engineering.",
    experience: "2 years of relevant experience preferred."
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
    description: "Senior academic position for the Department of Mechanical Engineering. Expected to provide academic leadership and drive high-impact research.",
    qualifications: "Ph.D. with exemplary academic record.",
    experience: "Minimum 10 years of experience."
  }
];

export const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);

  const filteredCareers = CAREERS_DATA.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || job.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Careers" 
        description="Join our team of dedicated faculty and staff at MITS Gwalior. Explore current job openings and career opportunities."
      />
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
                  <h3 className="text-xl font-serif text-[#800000] mb-1 group-hover:underline decoration-2 underline-offset-4 cursor-pointer" onClick={() => setSelectedJob(job)}>{job.title}</h3>
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
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#f2e8e3] text-[#800000] rounded-xl font-medium hover:bg-[#800000] hover:text-white transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Details
                  </button>
                  {job.status === 'Open' && (
                    <button 
                      onClick={() => {
                        setSelectedJob(job);
                        setShowApplyForm(true);
                      }}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#800000] text-white rounded-xl font-medium hover:bg-[#800000]/90 transition-colors shadow-lg shadow-[#800000]/20"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Apply Now
                    </button>
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

        {/* Job Detail Modal */}
        <AnimatePresence>
          {selectedJob && !showApplyForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-8 md:p-12"
              >
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-black/50 uppercase tracking-wider">{selectedJob.id}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      selectedJob.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {selectedJob.status}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#800000] mb-6 leading-tight">{selectedJob.title}</h2>
                  
                  <div className="grid grid-cols-2 gap-6 py-6 border-y border-black/5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Department</p>
                      <p className="font-medium text-sm">{selectedJob.department}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Closing Date</p>
                      <p className="font-medium text-sm text-orange-600">{selectedJob.closingDate}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-orange-600" /> Description
                    </h4>
                    <p className="text-black/70 leading-relaxed">{selectedJob.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Qualifications</h4>
                    <p className="text-black/70 leading-relaxed">{selectedJob.qualifications}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Experience</h4>
                    <p className="text-black/70 leading-relaxed">{selectedJob.experience}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedJob.documentUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#f2e8e3] text-[#800000] rounded-2xl font-bold hover:bg-[#800000] hover:text-white transition-all"
                  >
                    <Download className="w-5 h-5" /> Download Advertisement
                  </a>
                  {selectedJob.status === 'Open' && (
                    <button 
                      onClick={() => setShowApplyForm(true)}
                      className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#800000] text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-black/20"
                    >
                      <ExternalLink className="w-5 h-5" /> Apply Online
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}

          {/* Apply Form Modal */}
          {showApplyForm && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-8 md:p-12"
              >
                <button 
                  onClick={() => setShowApplyForm(false)}
                  className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-[#800000] mb-2">Job Application</h2>
                  <p className="text-black/50">Applying for: <span className="font-medium text-black">{selectedJob?.title}</span></p>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); setShowApplyForm(false); setSelectedJob(null); }}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">Full Name</label>
                      <input type="text" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800000]/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email Address</label>
                      <input type="email" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800000]/20" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">Phone Number</label>
                      <input type="tel" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800000]/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">Highest Qualification</label>
                      <input type="text" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800000]/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-50">Upload CV/Resume (PDF)</label>
                    <div className="border-2 border-dashed border-black/10 rounded-2xl p-8 text-center hover:bg-black/5 transition-colors cursor-pointer">
                      <Download className="w-8 h-8 text-black/20 mx-auto mb-2" />
                      <p className="text-sm text-black/50">Click or drag and drop your resume here</p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <button type="submit" className="w-full py-4 bg-[#800000] text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-black/20">
                      Submit Application
                    </button>
                    <p className="text-[10px] text-center text-black/40 mt-4">
                      By submitting, you confirm that all information provided is accurate and truthful.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
