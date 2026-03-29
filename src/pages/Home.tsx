import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowDown, X, GraduationCap, BookOpen, Users, Building, FileText, MapPin, Calendar, Sparkles, Trophy, Briefcase, Award, Download, FileCheck, CheckCircle2, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const NoticePopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-[#fdfbf9] border border-black rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <h3 className="font-serif text-2xl font-medium">Important Notice</h3>
            </div>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>B.Tech Admissions 2026:</strong> Counseling schedule has been released. Please check the admissions portal for your reporting date and time.
              </p>
              <p>
                <strong>End Semester Exams:</strong> The timetable for the upcoming even semester examinations is now available on the student ERP.
              </p>
            </div>
            <Link to="/notice-board" onClick={onClose} className="mt-8 w-full py-3 px-6 border border-black rounded-full hover:bg-[#f2e8e3] transition-colors font-medium flex items-center justify-center gap-2">
              View All Notices <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8 relative"
      >
        <Sparkles className="absolute -top-8 -left-8 w-8 h-8 text-orange-300 opacity-50" />
        <Sparkles className="absolute top-12 right-12 w-6 h-6 text-orange-300 opacity-50" />
        
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight">
          2026 Admissions<br />
          <span className="italic">Open Now</span>
        </h1>
        <p className="max-w-md text-black/70 leading-relaxed text-lg">
          Madhav Institute of Technology & Science (MITS), Gwalior is a premier engineering institute offering B.Tech, M.Tech, Architecture, and Ph.D. programs to shape the innovators of tomorrow.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/admissions" className="px-6 py-3 border border-black rounded-full bg-[#f2e8e3] hover:bg-[#e8dcd5] transition-colors font-medium flex items-center gap-2">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/about" className="px-6 py-3 border border-black rounded-full hover:bg-black/5 transition-colors font-medium">
            Explore Campus
          </Link>
        </div>
        <div className="pt-8 border-t border-black/10 flex items-center gap-8">
          <div>
            <p className="font-serif text-3xl font-medium">25,000+</p>
            <p className="text-sm text-black/60 uppercase tracking-wider">Alumni</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-medium">60+</p>
            <p className="text-sm text-black/60 uppercase tracking-wider">Years of Legacy</p>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/10 shadow-2xl">
          <img 
            src="https://www.collegebatch.com/static/clg-gallery/madhav-institute-of-technology-science-gwalior-300708.webp" 
            alt="Campus Life" 
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-3xl border border-black/10 shadow-xl max-w-xs"
        >
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-5 h-5 text-orange-400" />
            <h4 className="font-serif font-medium text-lg">Top Ranked</h4>
          </div>
          <p className="text-sm text-black/70">Consistently ranked among the top engineering colleges in Central India by NIRF.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-4 border-y border-black overflow-hidden flex items-center bg-white/30 backdrop-blur-sm">
      <motion.div 
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex whitespace-nowrap items-center gap-8"
      >
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <Sparkles className="w-5 h-5" />
            <span className="font-serif text-xl italic">Welcome to Madhav Institute of Technology & Science!</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Highlights = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-12"
      >
        <motion.div variants={item} className="space-y-4">
          <div className="w-12 h-12 bg-[#f2e8e3] rounded-full flex items-center justify-center mb-6">
            <Briefcase className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-4xl">95%</h3>
          <p className="font-medium text-lg">Placement Rate</p>
          <p className="text-black/70 text-sm">Top recruiters including TCS, Infosys, Wipro, and Cognizant visit our campus annually.</p>
        </motion.div>
        <motion.div variants={item} className="space-y-4">
          <div className="w-12 h-12 bg-[#f2e8e3] rounded-full flex items-center justify-center mb-6">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-4xl">A++</h3>
          <p className="font-medium text-lg">NAAC Accreditation</p>
          <p className="text-black/70 text-sm">Recognized for excellence in teaching, learning, and research methodologies.</p>
        </motion.div>
        <motion.div variants={item} className="space-y-4">
          <div className="w-12 h-12 bg-[#f2e8e3] rounded-full flex items-center justify-center mb-6">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-4xl">50+</h3>
          <p className="font-medium text-lg">Expert Faculty</p>
          <p className="text-black/70 text-sm">Learn from distinguished professors with extensive industry and academic experience.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ViceChancellorMessage = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-black/10 shadow-2xl relative z-10">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGxjSyQe9TK7rMUgNhwPqrXf7CgCOPngRRg&s" 
              alt="Vice Chancellor" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-0 blur-2xl opacity-60" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-100 rounded-full -z-0 blur-3xl opacity-60" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              Message from the <br />
              <span className="italic text-orange-600">Vice Chancellor</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-400 rounded-full" />
          </div>
          
          <p className="text-xl text-black/80 leading-relaxed font-light italic">
            "Education is the most powerful weapon which you can use to change the world. At MITS, we strive to provide an environment that fosters innovation, critical thinking, and a passion for lifelong learning."
          </p>
          
          <div className="space-y-1">
            <p className="font-serif text-2xl font-medium">Prof. (Dr.) R. K. Pandit</p>
            <p className="text-black/60 uppercase tracking-widest text-sm">Vice Chancellor, MITS Gwalior</p>
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all group">
            Read Full Message <ArrowRight className="w-5 h-5 group-hover:text-orange-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const QuickLinks = () => {
  const links = [
    { title: 'Admissions 2026', icon: GraduationCap, path: '/admissions' },
    { title: 'Fee Structure', icon: FileText, path: '/admissions#fees' },
    { title: 'Results (New)', icon: CheckCircle2, path: 'https://iums.mitsgwalior.in/Result/ProgramSelect.aspx', isExternal: true },
    { title: 'Results (Old)', icon: CheckCircle2, path: 'https://ims.mitsgwalior.in/Result/ProgramSelect.aspx', isExternal: true },
    { title: 'Downloads', icon: Download, path: '/student-life' },
    { title: 'Notice Board', icon: Bell, path: '/notice-board' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl mb-6">Quick Links</h2>
          <p className="text-black/70 mb-8 max-w-md">
            Access essential resources, portals, and information quickly. Everything you need is just a click away.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {links.map((link, i) => {
              const Component = link.isExternal ? 'a' : Link;
              const props = link.isExternal 
                ? { href: link.path, target: "_blank", rel: "noopener noreferrer" }
                : { to: link.path };

              return (
                <Component 
                  key={i} 
                  {...(props as any)}
                  className="p-6 border border-black rounded-3xl hover:bg-[#f2e8e3] transition-colors group flex flex-col items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{link.title}</span>
                </Component>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/40 backdrop-blur-sm border border-black/10 rounded-[2rem] p-8 shadow-lg"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
            <h3 className="font-serif text-2xl">Notice Board</h3>
            <Link to="/notice-board" className="text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-6">
            {[
              { date: '28 Mar', title: 'Revised Academic Calendar for Even Semester 2026', type: 'Academic' },
              { date: '25 Mar', title: 'Tender Notice for Procurement of Lab Equipment', type: 'Tender' },
              { date: '20 Mar', title: 'Schedule for Mid-Term Examinations', type: 'Exam' },
              { date: '15 Mar', title: 'Call for Papers: International Conference on AI', type: 'Event' },
            ].map((notice, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-16 shrink-0 text-center">
                  <span className="block text-sm font-bold text-orange-500">{notice.date.split(' ')[0]}</span>
                  <span className="block text-xs uppercase tracking-wider text-black/60">{notice.date.split(' ')[1]}</span>
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-black/5 rounded text-[10px] font-medium uppercase tracking-wider mb-1">
                    {notice.type}
                  </span>
                  <p className="text-sm font-medium group-hover:text-orange-600 transition-colors line-clamp-2">
                    {notice.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl mb-8 text-orange-400">Our Vision</h2>
          <p className="text-xl leading-relaxed font-light text-white/80">
            "To create a center for imparting technical education of international standards and conduct research at the cutting edge of technology to meet the current and future challenges of technological development."
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl mb-8 text-orange-400">Our Mission</h2>
          <ul className="space-y-6 text-lg font-light text-white/80">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
              <p>To create an environment of excellence in teaching and learning.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
              <p>To promote research and development activities.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
              <p>To produce competent professionals with high ethical values.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const News = () => {
  const news = [
    {
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
      title: "Tech Symposium 2026",
      date: "15 Mar 2026",
      featured: false
    },
    {
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
      title: "Alumni Meet & Networking Event",
      date: "10 Mar 2026",
      featured: true
    },
    {
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
      title: "New AI Research Lab Inauguration",
      date: "05 Mar 2026",
      featured: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-5xl mb-6">Events & News</h2>
        <p className="max-w-2xl mx-auto text-black/70 mb-16">
          Stay updated with the latest announcements, events, and achievements from the MITS community.
        </p>
      </motion.div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 items-end"
      >
        {news.map((newsItem, i) => (
          <motion.div variants={item} key={i} className={`border border-black rounded-[2rem] p-4 bg-white/40 backdrop-blur-sm text-left flex flex-col ${newsItem.featured ? 'md:-translate-y-8' : ''}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
              <img src={newsItem.img} alt={newsItem.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {newsItem.date}
              </div>
            </div>
            <div className="flex items-end justify-between gap-4 mt-auto">
              <h3 className="font-medium text-lg leading-tight">{newsItem.title}</h3>
              <Link to="/events" className="w-10 h-10 shrink-0 rounded-full border border-black flex items-center justify-center hover:bg-[#f2e8e3] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <Link 
        to="/events"
        className="mt-16 px-6 py-3 border border-black rounded-full hover:bg-[#f2e8e3] transition-colors font-medium inline-flex items-center gap-2"
      >
        View All Events <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
};

export const Home = () => {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem('hasSeenNotice');
    if (!hasSeenNotice) {
      const timer = setTimeout(() => {
        setIsNoticeOpen(true);
        sessionStorage.setItem('hasSeenNotice', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <SEO 
        title="Home" 
        description="Welcome to Madhav Institute of Technology & Science (MITS), Gwalior. A premier engineering institution with a legacy of excellence in technical education and research."
      />
      <NoticePopup isOpen={isNoticeOpen} onClose={() => setIsNoticeOpen(false)} />
      <Hero />
      <Marquee />
      <Highlights />
      <ViceChancellorMessage />
      <QuickLinks />
      <VisionMission />
      <News />
    </>
  );
};
