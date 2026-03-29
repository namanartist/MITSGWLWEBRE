import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src="https://img.jagranjosh.com/images/2022/June/162022/MITS.png" className="h-12 w-auto bg-white p-1 rounded-full" alt="MITS Gwalior Logo" />
              <div>
                <h3 className="font-serif font-medium text-xl">MITS Gwalior</h3>
                <p className="text-xs text-white/60 uppercase tracking-widest">Est. 1957</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Madhav Institute of Technology & Science is a premier engineering institute shaping the innovators and leaders of tomorrow through excellence in education and research.
            </p>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-orange-400" />
                <p>Madhav Institute of Technology & Science (MITS), Gola ka Mandir, Gwalior - 474005, Madhya Pradesh, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-orange-400" />
                <p>0751-240-9354, 0751-240-9300</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-orange-400" />
                <p>vicechancellor@mitsgwalior.in</p>
              </div>
            </div>
          </div>

          {/* Academics & Admissions */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-orange-400">Academics</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/academics" className="hover:text-white transition-colors">UG Programs</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">PG Programs</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Ph.D. Research</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academic Calendar</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions 2026</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-orange-400">Resources</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/notice-board" className="hover:text-white transition-colors">Notice Board</Link></li>
              <li><Link to="/student-portal" className="hover:text-white transition-colors">Student Portal</Link></li>
              <li><Link to="/library" className="hover:text-white transition-colors">Library</Link></li>
              <li><Link to="/hostels" className="hover:text-white transition-colors">Hostels</Link></li>
              <li><Link to="/placements" className="hover:text-white transition-colors">Placements</Link></li>
              <li><Link to="/tenders" className="hover:text-white transition-colors">Tenders</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/employee-portal" className="hover:text-white transition-colors">Employee Portal</Link></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/quick-links" className="hover:text-white transition-colors">Quick Links</Link></li>
              <li><Link to="/aicte" className="hover:text-white transition-colors">AICTE</Link></li>
              <li><Link to="/ugc-disclosure" className="hover:text-white transition-colors">UGC Disclosure</Link></li>
              <li><Link to="/nirf-ranking" className="hover:text-white transition-colors">NIRF Ranking</Link></li>
              <li><Link to="/alumni-portal" className="hover:text-white transition-colors">Alumni Portal</Link></li>
              <li><Link to="/anti-ragging" className="hover:text-white transition-colors">Anti-Ragging</Link></li>
            </ul>
          </div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Madhav Institute of Technology & Science. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/MitsMadhavIstituteOfTechnologyScienceGwalior/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://x.com/MITS_Gwalior" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/school/mitsdugwalior/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/mits_gwalior/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCKmCxK6awxsc4sV9PPETwHg/videos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
