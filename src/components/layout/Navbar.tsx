import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    path: '/about',
    dropdown: [
      { name: 'About Institute', path: '/about#about-institute' },
      { name: 'Vision & Mission', path: '/about#vision-mission' },
      { name: 'Director Message', path: '/about#director-message' },
      { name: 'Accreditation', path: '/about#accreditation' },
      { name: 'Policies', path: '/about#policies' }
    ]
  },
  { 
    name: 'Academics', 
    path: '/academics',
    dropdown: [
      { name: 'UG Programs', path: '/academics#ug-programs' },
      { name: 'PG Programs', path: '/academics#pg-programs' },
      { name: 'Ph.D.', path: '/academics#phd' },
      { name: 'Departments', path: '/academics#departments' },
      { name: 'Academic Calendar', path: '/academics#academic-calendar' }
    ]
  },
  { 
    name: 'Admissions', 
    path: '/admissions',
    dropdown: [
      { name: 'Apply Now', path: '/admissions#apply-now' },
      { name: 'Fee Structure', path: '/admissions#fee-structure' },
      { name: 'Documents Required', path: '/admissions#documents-required' },
      { name: 'FAQs', path: '/admissions#faqs' }
    ]
  },
  { 
    name: 'Updates', 
    path: '#',
    dropdown: [
      { name: 'Notice Board', path: '/notice-board' },
      { name: 'Tenders', path: '/tenders' },
      { name: 'Careers', path: '/careers' }
    ]
  },
  { name: 'Student Life', path: '/student-life' },
  { name: 'Placements', path: '/placements' },
  { name: 'Research', path: '/research' },
];

const LOGIN_PLATFORMS = [
  { name: 'Moodle (Old)', url: 'http://moodle.mitsgwalior.in/' },
  { name: 'Moodle (New)', url: 'http://moodle.mitsweb.in/' },
  { name: 'SDMS', url: 'https://sdms.mitsgwalior.in/' },
  { name: 'IUMS', url: 'https://iums.mitsgwalior.in/' },
  { name: 'AMS', url: 'https://ams.mitsgwalior.in/' },
  { name: 'SAR', url: 'https://sar.mitsgwalior.in/' },
  { name: 'IMS', url: 'https://ims.mitsgwalior.in/' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src="https://img.jagranjosh.com/images/2022/June/162022/MITS.png" className="h-10 w-auto" alt="MITS Gwalior Logo" />
              <div className="flex flex-col">
                <span className="font-serif font-medium text-lg leading-tight">MITS Gwalior</span>
                <span className="text-[10px] uppercase tracking-wider text-black/60">Estd. 1957</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-colors ${
                      location.pathname === link.path ? 'bg-black text-white' : 'hover:bg-black/5'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white border border-black/10 rounded-2xl shadow-xl overflow-hidden py-2"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm hover:bg-[#f2e8e3] transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <Link to="/notice-board" className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('login')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                  Student Login <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'login' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white border border-black/10 rounded-2xl shadow-xl overflow-hidden py-2"
                    >
                      {LOGIN_PLATFORMS.map((platform) => (
                        <a
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm hover:bg-[#f2e8e3] transition-colors"
                        >
                          {platform.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link to="/notice-board" className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="lg:hidden mt-4 bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl overflow-y-auto max-h-[calc(100vh-8rem)] max-w-7xl mx-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-base font-medium rounded-xl hover:bg-black/5"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1 border-l-2 border-black/10 ml-4 mb-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-black/70 hover:text-black hover:bg-black/5 rounded-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-black/10">
                <div className="px-3 mb-2 text-xs font-bold text-black/50 uppercase tracking-wider">Student Login Platforms</div>
                <div className="grid grid-cols-2 gap-2 px-3">
                  {LOGIN_PLATFORMS.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-4 py-2 bg-black/5 hover:bg-black/10 rounded-xl text-sm font-medium transition-colors"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
