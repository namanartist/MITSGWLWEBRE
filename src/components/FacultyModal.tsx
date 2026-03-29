import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, GraduationCap, BookOpen, Award, Mail, FileText, User, Briefcase, Shield, Users, Lightbulb, Trophy, Calendar, FileCode, Book } from 'lucide-react';

interface FacultyModalProps {
  faculty: any;
  onClose: () => void;
}

export const FacultyModal: React.FC<FacultyModalProps> = ({ faculty, onClose }) => {
  if (!faculty) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 bg-black text-white p-8 md:p-12 space-y-8">
            <div className="aspect-square rounded-3xl overflow-hidden mb-8">
              <img 
                src={faculty.image} 
                alt={faculty.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-2">{faculty.name}</h2>
              <p className="text-xl text-orange-400 font-medium">{faculty.designation}</p>
              <p className="text-white/50 uppercase tracking-widest text-xs mt-1">{faculty.department}</p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold opacity-50">Qualification</p>
                  <p className="text-sm font-medium">{faculty.qualification}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold opacity-50">Specialization</p>
                  <p className="text-sm font-medium">{faculty.specialization}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold opacity-50">Experience</p>
                  <p className="text-sm font-medium">{faculty.experience}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <a href={`mailto:${faculty.email}`} className="flex items-center justify-center gap-2 w-full py-4 bg-orange-500 text-black font-bold rounded-2xl hover:bg-orange-400 transition-colors">
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a href={faculty.resumeUrl} className="flex items-center justify-center gap-2 w-full py-4 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
                <FileText className="w-4 h-4" /> Complete Resume
              </a>
            </div>
          </div>

          <div className="md:col-span-2 p-8 md:p-16 space-y-12 overflow-y-auto max-h-[90vh]">
            <section>
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-orange-600" /> About Faculty
              </h3>
              <p className="text-black/70 leading-relaxed">{faculty.about}</p>
            </section>

            <div className="grid sm:grid-cols-2 gap-12">
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-orange-600" /> Education
                </h3>
                <ul className="space-y-3">
                  {faculty.education.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-black/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-orange-600" /> Work Experience
                </h3>
                <ul className="space-y-3">
                  {faculty.workExperience.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-black/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <Shield className="w-5 h-5 text-orange-600" /> Administrative Experience
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {faculty.adminExperience.map((item: string, idx: number) => (
                  <li key={idx} className="p-4 bg-black/5 rounded-2xl text-sm text-black/70">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid sm:grid-cols-2 gap-12">
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-600" /> Research Supervision
                </h3>
                <ul className="space-y-3">
                  {faculty.researchSupervision.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-black/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-orange-600" /> Research & Consultancy
                </h3>
                <ul className="space-y-3">
                  {faculty.researchProjects.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-black/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-orange-600" /> Honors & Awards
              </h3>
              <div className="flex flex-wrap gap-3">
                {faculty.awards.map((item: string, idx: number) => (
                  <span key={idx} className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-xs font-bold">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-600" /> Workshops & Conferences
              </h3>
              <ul className="space-y-3">
                {faculty.workshops.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-black/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid sm:grid-cols-2 gap-12">
              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                  <FileCode className="w-5 h-5 text-orange-600" /> Publications
                </h3>
                <ul className="space-y-3">
                  {faculty.publications.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-black/70 text-sm italic">
                      "{item}"
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                  <Book className="w-5 h-5 text-orange-600" /> Book Chapters
                </h3>
                <ul className="space-y-3">
                  {faculty.bookChapters.map((item: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-black/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
