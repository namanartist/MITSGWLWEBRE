import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Microscope } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export const Academics = () => {
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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Academics" 
        description="Explore the academic programs, departments, and educational excellence at MITS Gwalior."
      />
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Academics</h1>
        <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
          Explore our diverse range of programs designed to foster innovation, critical thinking, and technical excellence.
        </p>
      </motion.div>

      {/* Programs Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24"
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Programs Offered</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Undergraduate (UG)', icon: BookOpen, desc: '4-year B.Tech and 5-year B.Arch programs across various disciplines.', link: '/admissions#ug' },
            { title: 'Postgraduate (PG)', icon: GraduationCap, desc: '2-year M.Tech, M.Arch, and M.Sc programs for advanced specialization.', link: '/admissions#pg' },
            { title: 'Doctoral (Ph.D.)', icon: Microscope, desc: 'Research-intensive programs leading to a Ph.D. in engineering and sciences.', link: '/admissions#phd' },
          ].map((prog, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-sm border border-black/10 rounded-[2rem] p-8 hover:bg-white/60 transition-colors group">
              <div className="w-16 h-16 bg-[#f2e8e3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <prog.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{prog.title}</h3>
              <p className="text-black/70 mb-8 leading-relaxed">{prog.desc}</p>
              <Link to={prog.link} className="inline-flex items-center gap-2 font-medium hover:text-orange-600 transition-colors">
                Explore Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Academic Resources */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-24"
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Academic Resources</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Academic Calendar', icon: BookOpen, link: '/academic-calendar' },
            { title: 'Syllabus', icon: BookOpen, link: '/syllabus' },
            { title: 'Schemes', icon: BookOpen, link: '/schemes' },
            { title: 'Time Table', icon: BookOpen, link: '/timetable' },
          ].map((resource, i) => (
            <Link 
              key={i} 
              to={resource.link}
              className="flex flex-col items-center justify-center p-8 bg-white border border-black/10 rounded-3xl hover:bg-orange-50 transition-colors group text-center"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <resource.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg">{resource.title}</h3>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Departments */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Departments</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept) => (
            <motion.div variants={item} key={dept.id}>
              <Link 
                to={`/department/${dept.id}`}
                className="p-6 border border-black/10 rounded-2xl bg-white hover:shadow-lg transition-shadow group flex flex-col items-start h-full"
              >
                <dept.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-medium text-lg mb-2 leading-tight group-hover:text-orange-600 transition-colors">{dept.name}</h3>
                <p className="text-sm text-black/60 mt-auto">{dept.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
