import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Download, FileText, Menu, X, Users, BookOpen, FlaskConical, Award, Briefcase, ChevronDown, Linkedin, Mail } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';

const SIDEBAR_GROUPS = [
  {
    title: "About Department",
    items: [
      { id: "about", label: "About Civil Engineering" }, // Will be dynamic
      { id: "programmes", label: "Programmes Offered" },
      { id: "contacts", label: "Contacts" }
    ]
  },
  {
    title: "People",
    items: [
      { id: "faculty", label: "Faculty Profiles" },
      { id: "staff", label: "Supporting Staff" }
    ]
  },
  {
    title: "Academics",
    items: [
      { id: "schemes", label: "Schemes" },
      { id: "syllabus", label: "Syllabus" },
      { id: "timetable", label: "Time Table" },
      { id: "honours", label: "Honour and Minors" },
      { id: "manual", label: "Manual" }
    ]
  },
  {
    title: "Outcome Based Education",
    items: [
      { id: "obe-process", label: "Outcome Based Education (OBE) Process" },
      { id: "pos-peos-psos", label: "POs-PEOs-PSOs" },
      { id: "course-outcomes", label: "Course Outcomes" },
      { id: "co-attained", label: "Course Outcomes Attained" },
      { id: "po-attainment", label: "Attainment of Program Outcomes" }
    ]
  },
  {
    title: "Committees",
    items: [
      { id: "bos", label: "Board of Studies (BoS)" },
      { id: "dept-committees", label: "Departmental Committees" },
      { id: "course-committees", label: "Course Committees" }
    ]
  },
  {
    title: "Research & Development",
    items: [
      { id: "research-areas", label: "Research Areas" },
      { id: "research", label: "Research" },
      { id: "publications", label: "Publications" },
      { id: "rnd-activities", label: "R&D Activities" }
    ]
  },
  {
    title: "Infrastructure",
    items: [
      { id: "laboratories", label: "Laboratories" },
      { id: "gallery", label: "Gallery" }
    ]
  },
  {
    title: "Activities & Achievements",
    items: [
      { id: "events", label: "Departmental Events" },
      { id: "achievements", label: "Achievements" },
      { id: "student-achievers", label: "Student Achievers" },
      { id: "newsletter", label: "Newsletter" }
    ]
  },
  {
    title: "Other",
    items: [
      { id: "downloads", label: "Downloads" },
      { id: "feedback", label: "Feedback" }
    ]
  }
];

export const Department = () => {
  const { id } = useParams();
  const department = DEPARTMENTS.find(d => d.id === id) || DEPARTMENTS[0];
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update dynamic labels
  const dynamicGroups = SIDEBAR_GROUPS.map(group => ({
    ...group,
    items: group.items.map(item => {
      if (item.id === 'about') return { ...item, label: `About ${department.name}` };
      return item;
    })
  }));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [activeSection, id]);

  const renderContent = () => {
    const section = dynamicGroups.flatMap(g => g.items).find(i => i.id === activeSection);
    const title = section?.label || 'Section';

    switch (activeSection) {
      case 'about':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="prose max-w-none text-black/80 leading-relaxed">
              <p className="mb-6 text-lg">{department.desc}</p>
              <p className="mb-6">The Department of {department.name} is committed to excellence in teaching, research, and innovation. We offer a comprehensive curriculum designed to meet industry standards and prepare students for global challenges. Our state-of-the-art facilities and experienced faculty ensure a robust learning environment.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-[#f2e8e3]/30 p-6 rounded-2xl border border-[#800000]/10">
                  <h3 className="text-xl font-bold text-[#800000] mb-4 flex items-center gap-2"><Award className="w-5 h-5" /> Vision</h3>
                  <p>To be a center of excellence in {department.name}, imparting quality education, conducting research of global relevance, and producing professionals who are socially responsible and technologically adept.</p>
                </div>
                <div className="bg-[#f2e8e3]/30 p-6 rounded-2xl border border-[#800000]/10">
                  <h3 className="text-xl font-bold text-[#800000] mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5" /> Mission</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To produce highly competent professionals through rigorous academic programs.</li>
                    <li>To foster innovative research and development addressing societal needs.</li>
                    <li>To promote strong industry-institute interaction for practical exposure.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#800000] text-white rounded-full font-medium hover:bg-[#600000] transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Department Brochure
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#800000] text-[#800000] rounded-full font-medium hover:bg-[#f2e8e3] transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Curriculum Handbook
                </a>
              </div>
            </div>
          </div>
        );
      case 'programmes':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="space-y-6">
              <div className="p-6 border border-black/10 rounded-2xl border-l-4 border-l-orange-500 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">B.Tech in {department.name}</h3>
                <p className="text-black/70 mb-4">A 4-year undergraduate program focusing on core principles, modern applications, and hands-on practical experience.</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <span className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full border border-orange-200">Intake: 120</span>
                  <span className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full border border-orange-200">Duration: 4 Years</span>
                </div>
              </div>
              <div className="p-6 border border-black/10 rounded-2xl border-l-4 border-l-blue-500 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">M.Tech in Advanced {department.name.split(' ')[0]}</h3>
                <p className="text-black/70 mb-4">A 2-year postgraduate program designed for specialized research, advanced studies, and industry leadership.</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-200">Intake: 18</span>
                  <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-200">Duration: 2 Years</span>
                </div>
              </div>
              <div className="p-6 border border-black/10 rounded-2xl border-l-4 border-l-green-500 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Ph.D. Program</h3>
                <p className="text-black/70 mb-4">Doctoral research program in cutting-edge areas of technology, fostering innovation and academic excellence.</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <span className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full border border-green-200">Full-time / Part-time</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'faculty':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex gap-4 p-5 border border-black/10 rounded-2xl bg-white hover:shadow-lg transition-all group">
                  <div className="w-24 h-24 bg-gray-200 rounded-xl shrink-0 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Faculty" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#800000]">Dr. Faculty Name {i}</h4>
                    <p className="text-sm text-orange-600 font-medium mb-1">{i === 1 ? 'Professor & Head' : 'Assistant Professor'}</p>
                    <p className="text-xs text-black/60 mb-2">Ph.D. (IIT Delhi), M.Tech</p>
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-black/80 mb-1">Research Interests:</p>
                      <p className="text-xs text-black/70 line-clamp-2">Advanced computing, sustainable engineering, data analytics, artificial intelligence in structural design.</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex gap-3">
                        <a href="#" className="text-black/40 hover:text-[#0077b5] transition-colors" title="LinkedIn Profile">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-black/40 hover:text-[#ea4335] transition-colors" title="Email">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                      <button className="text-xs font-medium text-[#800000] hover:underline flex items-center gap-1">
                        Profile <ChevronRight className="w-3 h-3"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'laboratories':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-black/10 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gray-200 relative">
                    <img src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400`} alt="Lab" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">Advanced Lab {i}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-black/70 mb-4">Equipped with state-of-the-art instruments and software for practical training and advanced research.</p>
                    <button className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">View Equipment List <ChevronRight className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-[#f2e8e3] text-[#800000] rounded-full flex items-center justify-center mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif mb-4 text-[#800000]">{title}</h2>
            <p className="text-black/60 max-w-lg mx-auto mb-8 text-lg">
              Detailed information regarding {title.toLowerCase()} for the {department.name} is currently being updated. Please check back later or contact the department office.
            </p>
            <button className="px-6 py-3 bg-[#800000] text-white rounded-full hover:bg-[#800000]/90 transition-colors flex items-center gap-2 font-medium shadow-lg shadow-[#800000]/20">
              <Download className="w-5 h-5" /> Download Related Document
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Sidebar Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-between w-full bg-white p-4 rounded-2xl shadow-sm border border-black/10 font-medium text-[#800000]"
          >
            <span>Department Menu</span>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Sidebar Navigation */}
          <div className={`lg:w-1/4 shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
              {dynamicGroups.map((group, idx) => (
                <div key={group.title} className={idx !== 0 ? "mt-8" : ""}>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-black/40 mb-3 px-2">{group.title}</h3>
                  <ul className="space-y-1">
                    {group.items.map(item => (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                            activeSection === item.id 
                              ? 'bg-[#800000] text-white font-medium shadow-md shadow-[#800000]/20' 
                              : 'hover:bg-[#f2e8e3]/50 text-black/70 hover:text-black'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-6 sm:p-8 md:p-12 min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
