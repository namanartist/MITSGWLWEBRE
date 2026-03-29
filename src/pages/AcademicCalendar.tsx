import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Download, FileText, ChevronRight, Clock, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const CALENDAR_EVENTS = [
  { date: "July 15, 2025", event: "Registration for Odd Semester (All Years)", category: "Academic" },
  { date: "July 21, 2025", event: "Commencement of Classes (Odd Semester)", category: "Academic" },
  { date: "August 15, 2025", event: "Independence Day (Holiday)", category: "Holiday" },
  { date: "September 5, 2025", event: "Teachers' Day Celebration", category: "Event" },
  { date: "September 20-25, 2025", event: "Mid-Semester Examination - I", category: "Examination" },
  { date: "October 2, 2025", event: "Gandhi Jayanti (Holiday)", category: "Holiday" },
  { date: "October 20-25, 2025", event: "Mid-Semester Examination - II", category: "Examination" },
  { date: "November 1-5, 2025", event: "Diwali Vacation", category: "Holiday" },
  { date: "November 30, 2025", event: "Last Day of Teaching (Odd Semester)", category: "Academic" },
  { date: "December 5-20, 2025", event: "End-Semester Theory Examinations", category: "Examination" },
  { date: "December 21-31, 2025", event: "Winter Vacation", category: "Holiday" },
  { date: "January 5, 2026", event: "Commencement of Classes (Even Semester)", category: "Academic" },
];

export const AcademicCalendar = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Academic Calendar" 
        description="Stay updated with the official academic calendar of MITS Gwalior, including semester dates, holidays, and examination schedules."
        keywords="MITS Gwalior Academic Calendar, Semester Dates, Exam Schedule, Holidays 2025-26"
      />
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#800000]/10 text-[#800000] rounded-2xl mb-6">
            <Calendar className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-5xl mb-4">Academic Calendar</h1>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Official schedule for the academic year 2025-26. Plan your semesters, exams, and holidays ahead.
          </p>
        </motion.div>

        {/* Quick Downloads */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <a 
            href="#" 
            className="flex items-center justify-between p-6 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Full Calendar (PDF)</h3>
                <p className="text-sm text-black/50">Academic Year 2025-26</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-[#800000] transition-colors" />
          </a>
          <a 
            href="#" 
            className="flex items-center justify-between p-6 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Holiday List 2026</h3>
                <p className="text-sm text-black/50">Gazetted & Local Holidays</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-[#800000] transition-colors" />
          </a>
        </div>

        {/* Timeline View */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-black/5 p-8 md:p-12">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-serif text-[#800000]">Upcoming Events</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Academic</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Exam</span>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[1.25rem] before:top-2 before:bottom-2 before:w-0.5 before:bg-black/5">
            {CALENDAR_EVENTS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative pl-12 group"
              >
                {/* Dot */}
                <div className={`absolute left-0 top-1.5 w-10 h-10 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 transition-transform group-hover:scale-110 ${
                  item.category === 'Holiday' ? 'bg-red-500' : 
                  item.category === 'Examination' ? 'bg-blue-500' : 
                  item.category === 'Event' ? 'bg-green-500' : 'bg-[#800000]'
                }`}>
                  <Clock className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 rounded-2xl hover:bg-[#f2e8e3]/30 transition-colors">
                  <div>
                    <span className="text-sm font-bold text-orange-600 mb-1 block uppercase tracking-wider">{item.date}</span>
                    <h3 className="text-lg font-medium text-black/80">{item.event}</h3>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                    item.category === 'Holiday' ? 'bg-red-50 text-red-600' : 
                    item.category === 'Examination' ? 'bg-blue-50 text-blue-600' : 
                    item.category === 'Event' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-orange-50 rounded-3xl border border-orange-100 flex gap-4 items-start">
          <AlertCircle className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-800 leading-relaxed">
            <strong>Note:</strong> The dates mentioned above are tentative and subject to change based on government notifications or administrative decisions. Students are advised to regularly check the notice board for any updates.
          </p>
        </div>
      </div>
    </div>
  );
};
