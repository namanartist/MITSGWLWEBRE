import React from 'react';
import { ArrowRight, BookOpen, Clock, Users, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const About = () => {
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
        title="About Us" 
        description="Learn about the rich history, vision, and mission of Madhav Institute of Technology & Science (MITS) Gwalior, established in 1957."
      />
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">About Institute</h1>
        <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
          Established in 1957, Madhav Institute of Technology & Science (MITS) has been a beacon of technical education, nurturing minds that shape the future of technology and society.
        </p>
      </motion.div>

      {/* History Timeline */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24"
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Our Journey</h2>
        <div className="relative border-l border-black/20 ml-4 md:ml-1/2 md:translate-x-1/2 space-y-12">
          {[
            { year: '1957', title: 'Foundation', desc: 'Established by His Highness Sir Jiwaji Rao Scindia.' },
            { year: '1974', title: 'PG Programs', desc: 'Introduction of postgraduate programs in engineering.' },
            { year: '2017', title: 'Autonomy', desc: 'Granted academic autonomy by UGC.' },
            { year: '2022', title: 'NAAC A++', desc: 'Accredited with A++ grade by NAAC.' },
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[5px] md:left-0 md:-translate-x-1/2 top-1 w-2.5 h-2.5 rounded-full bg-orange-500 border-4 border-[#fdfbf9] box-content" />
              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:-ml-[50%]' : 'md:pl-12'}`}>
                <span className="font-serif text-2xl text-orange-500 block mb-2">{item.year}</span>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-black/70 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Leadership Message */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24 bg-white/40 backdrop-blur-sm border border-black/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10" />
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] rounded-2xl overflow-hidden border border-black/10 shadow-xl"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGxjSyQe9TK7rMUgNhwPqrXf7CgCOPngRRg&s" 
              alt="Vice Chancellor" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl mb-2">Vice Chancellor's Message</h2>
              <div className="w-12 h-1 bg-orange-400 mb-6"></div>
              <p className="text-xl text-black/80 leading-relaxed italic font-light">
                "At MITS, we believe in empowering our students with not just technical knowledge, but the critical thinking and leadership skills required to thrive in a rapidly changing world. Our commitment to excellence in education and research remains unwavering as we prepare the next generation of global leaders."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-serif text-2xl font-medium">Prof. (Dr.) R. K. Pandit</p>
              <p className="text-black/60 uppercase tracking-widest text-sm">Vice Chancellor, MITS Gwalior</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Policies & Accreditation */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Policies & Accreditation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Code of Conduct', icon: Shield, desc: 'Guidelines for student and staff behavior.', path: '/code-of-conduct' },
            { title: 'UGC Disclosure', icon: FileText, desc: 'Mandatory disclosures as per UGC norms.', path: '/ugc-disclosure' },
            { title: 'NAAC Reports', icon: CheckCircle2, desc: 'Self Study Reports and peer team findings.', path: '/naac-reports' },
            { title: 'Anti-Ragging Policy', icon: Users, desc: 'Zero tolerance policy towards ragging.', path: '/anti-ragging' },
            { title: 'Academic SOPs', icon: BookOpen, desc: 'Standard operating procedures for academics.', path: '/academic-sops' },
            { title: 'RTI Information', icon: Clock, desc: 'Right to Information act disclosures.', path: '/rti-information' },
          ].map((item, i) => (
            <motion.div variants={item} key={i}>
              <Link to={item.path} className="p-6 border border-black/10 rounded-2xl bg-white hover:shadow-lg transition-shadow group flex flex-col h-full">
                <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-medium text-lg mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-black/60 mb-4">{item.desc}</p>
                <span className="text-sm font-medium flex items-center gap-1 mt-auto">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
