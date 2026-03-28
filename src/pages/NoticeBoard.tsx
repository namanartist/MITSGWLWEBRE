import React from 'react';
import { Bell, Calendar, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { UpdatesTabs } from '../components/UpdatesTabs';

const NOTICES = [
  { id: 1, title: 'End Semester Examination Schedule 2026', date: 'March 25, 2026', category: 'Exams', isNew: true },
  { id: 2, title: 'Registration for Summer Internship Program', date: 'March 20, 2026', category: 'Placements', isNew: true },
  { id: 3, title: 'Revised Academic Calendar for Even Semester', date: 'March 15, 2026', category: 'Academics', isNew: false },
  { id: 4, title: 'Notice regarding Hostel Fee Payment', date: 'March 10, 2026', category: 'Hostels', isNew: false },
  { id: 5, title: 'Call for Papers: International Conference on AI', date: 'March 5, 2026', category: 'Research', isNew: false },
];

export const NoticeBoard = () => {
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
            {['All', 'Exams', 'Academics', 'Placements', 'Hostels', 'Research'].map((filter) => (
              <button key={filter} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${filter === 'All' ? 'bg-black text-white' : 'bg-[#f2e8e3] text-black/70 hover:bg-black/5'}`}>
                {filter}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input type="text" placeholder="Search notices..." className="w-full px-4 py-2 rounded-full border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {NOTICES.map((notice) => (
            <motion.div variants={item} key={notice.id} className="group flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-6 rounded-2xl border border-black/5 hover:border-orange-500/30 hover:bg-orange-50/50 transition-all cursor-pointer">
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
    </div>
  );
};
