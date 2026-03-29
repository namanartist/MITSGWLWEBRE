import React, { useState } from 'react';
import { Bell, Calendar, FileText, ChevronRight, X, Download, Share2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { UpdatesTabs } from '../components/UpdatesTabs';

const NOTICES = [
  { 
    id: 1, 
    title: 'End Semester Examination Schedule 2026', 
    date: 'March 25, 2026', 
    category: 'Exams', 
    isNew: true,
    description: 'The End Semester Examination schedule for all UG and PG programs for the academic session 2025-26 has been released. Students are advised to check their respective department notice boards and the official website for detailed timings and venue information.',
    attachmentUrl: '#'
  },
  { 
    id: 2, 
    title: 'Registration for Summer Internship Program', 
    date: 'March 20, 2026', 
    category: 'Placements', 
    isNew: true,
    description: 'Applications are invited for the Summer Internship Program 2026. Interested students from 2nd and 3rd year can register through the T&P portal. Last date for registration is April 15, 2026.',
    attachmentUrl: '#'
  },
  { 
    id: 3, 
    title: 'Revised Academic Calendar for Even Semester', 
    date: 'March 15, 2026', 
    category: 'Academics', 
    isNew: false,
    description: 'The academic calendar for the even semester of the academic year 2025-26 has been revised. Please note the changes in the dates for mid-semester exams and the commencement of end-semester practicals.',
    attachmentUrl: '#'
  },
  { 
    id: 4, 
    title: 'Notice regarding Hostel Fee Payment', 
    date: 'March 10, 2026', 
    category: 'Hostels', 
    isNew: false,
    description: 'All hostel residents are required to pay their mess and accommodation fees for the upcoming quarter by March 31, 2026. Late payment will attract a fine as per the institute norms.',
    attachmentUrl: '#'
  },
  { 
    id: 5, 
    title: 'Call for Papers: International Conference on AI', 
    date: 'March 5, 2026', 
    category: 'Research', 
    isNew: false,
    description: 'MITS Gwalior is organizing an International Conference on Artificial Intelligence and its Applications. Researchers and scholars are invited to submit their original research papers for presentation.',
    attachmentUrl: '#'
  },
];

export const NoticeBoard = () => {
  const [selectedNotice, setSelectedNotice] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredNotices = NOTICES.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || notice.category === filter;
    return matchesSearch && matchesFilter;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Notice Board" 
        description="Access important announcements, academic notices, and official communications from MITS Gwalior."
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Notice Board</h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          Stay updated with the latest announcements, examination schedules, and important notices.
        </p>
      </motion.div>

      <UpdatesTabs />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white border border-black/10 rounded-[2rem] p-8 md:p-12 shadow-sm"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {['All', 'Exams', 'Academics', 'Placements', 'Hostels', 'Research'].map((f) => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === f ? 'bg-black text-white' : 'bg-[#f2e8e3] text-black/70 hover:bg-black/5'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search notices..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {filteredNotices.map((notice) => (
            <motion.div 
              variants={item} 
              key={notice.id} 
              onClick={() => setSelectedNotice(notice)}
              className="group flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-6 rounded-2xl border border-black/5 hover:border-orange-500/30 hover:bg-orange-50/50 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f2e8e3] flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-medium px-2 py-1 bg-black/5 rounded-md text-black/70">{notice.category}</span>
                    {notice.isNew && (
                      <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-600 rounded-md animate-pulse">NEW</span>
                    )}
                  </div>
                  <h3 className="font-medium text-lg group-hover:text-orange-600 transition-colors">{notice.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-black/50 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{notice.date}</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 group-hover:border-orange-500/30 group-hover:bg-orange-50 transition-colors shrink-0">
                <ChevronRight className="w-5 h-5 text-black/40 group-hover:text-orange-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <button className="px-6 py-3 border border-black/20 rounded-full font-medium hover:bg-black/5 transition-colors">
            Load More Notices
          </button>
        </motion.div>
      </motion.div>

      {/* Notice Detail Modal */}
      <AnimatePresence>
        {selectedNotice && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-8 md:p-12"
            >
              <button 
                onClick={() => setSelectedNotice(null)}
                className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-black/5 rounded-full text-black/70 uppercase tracking-wider">{selectedNotice.category}</span>
                  <span className="text-xs text-black/40 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {selectedNotice.date}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-6 leading-tight">{selectedNotice.title}</h2>
              </div>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-4">Announcement Details</h4>
                  <p className="text-lg text-black/70 leading-relaxed">
                    {selectedNotice.description}
                  </p>
                </div>
                
                <div className="bg-[#f2e8e3]/30 p-6 rounded-2xl border border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Official Document</p>
                      <p className="text-xs text-black/40">PDF Format • 1.2 MB</p>
                    </div>
                  </div>
                  <a href={selectedNotice.attachmentUrl} className="p-3 bg-white hover:bg-black hover:text-white rounded-full shadow-sm transition-all">
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-black text-white rounded-2xl font-bold hover:bg-black/80 transition-all">
                  <Share2 className="w-5 h-5" /> Share Notice
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-4 border border-black/10 rounded-2xl font-bold hover:bg-black/5 transition-all">
                  <ExternalLink className="w-5 h-5" /> Open in New Tab
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
