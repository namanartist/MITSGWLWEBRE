import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Calendar, MapPin, Clock, Search, ChevronRight, X, Filter, Share2, Bell } from 'lucide-react';

const EVENTS_DATA = [
  {
    id: 1,
    title: "National Conference on AI and Robotics",
    date: "2026-04-15",
    time: "09:00 AM - 05:00 PM",
    location: "Main Auditorium, MITS",
    category: "Conference",
    description: "A comprehensive conference exploring the latest advancements in Artificial Intelligence and Robotics, featuring keynote speakers from industry and academia.",
    image: "https://images.unsplash.com/photo-1591115765373-520b7a217144?q=80&w=1000&auto=format&fit=crop",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Annual Cultural Fest - TWARAN 2026",
    date: "2026-05-10",
    time: "10:00 AM - 10:00 PM",
    location: "Open Air Theater",
    category: "Cultural",
    description: "The biggest cultural extravaganza of MITS, featuring music, dance, drama, and various competitions showcasing student talent.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Workshop on Blockchain Technology",
    date: "2026-04-22",
    time: "11:00 AM - 04:00 PM",
    location: "IT Block Seminar Hall",
    category: "Workshop",
    description: "Hands-on workshop on blockchain fundamentals, smart contracts, and decentralized applications.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
    status: "Upcoming"
  },
  {
    id: 4,
    title: "Alumni Meet 2026",
    date: "2026-06-05",
    time: "06:00 PM - 09:00 PM",
    location: "MITS Campus",
    category: "Alumni",
    description: "Reconnect with your alma mater and fellow alumni. An evening of nostalgia, networking, and celebration.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    status: "Upcoming"
  }
];

export const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', ...new Set(EVENTS_DATA.map(e => e.category))];

  const filteredEvents = EVENTS_DATA.filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          e.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || e.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fdfcf0] py-24 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Campus Events" 
        description="Stay updated with the latest happenings, conferences, workshops, and cultural activities at MITS Gwalior."
      />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Campus Events</h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Stay updated with the latest happenings, conferences, workshops, and cultural activities at MITS Gwalior.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  filterCategory === cat ? 'bg-black text-white' : 'bg-white border border-black/10 hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
            <input 
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedEvent(event)}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-black/5 hover:border-orange-500/20 transition-all cursor-pointer hover:shadow-2xl hover:shadow-orange-900/5"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-center shadow-lg">
                  <span className="block text-xl font-bold text-orange-600">{new Date(event.date).getDate()}</span>
                  <span className="block text-xs uppercase tracking-widest font-bold opacity-50">
                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {event.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-4 group-hover:text-orange-600 transition-colors line-clamp-2">{event.title}</h3>
                <div className="space-y-3 text-sm text-black/60">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                  <span className="text-sm font-bold text-black group-hover:text-orange-600 flex items-center gap-2 transition-colors">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                  <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="aspect-video w-full relative">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        {selectedEvent.category}
                      </span>
                      <span className="text-white/80 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {new Date(selectedEvent.date).toLocaleDateString('en-US', { dateStyle: 'long' })}
                      </span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-white">{selectedEvent.title}</h2>
                  </div>
                </div>

                <div className="p-12 grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-4">About the Event</h4>
                      <p className="text-lg text-black/70 leading-relaxed">
                        {selectedEvent.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-2">Time</h4>
                        <p className="font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-600" /> {selectedEvent.time}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-2">Venue</h4>
                        <p className="font-medium flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-600" /> {selectedEvent.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-orange-50 p-8 rounded-[2rem] space-y-6">
                      <h4 className="font-serif text-xl">Registration</h4>
                      <p className="text-sm text-black/60">Register now to secure your spot at this event. Limited seats available.</p>
                      <button className="w-full py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-2">
                        Register Now <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="w-full py-4 border border-orange-200 rounded-full font-bold hover:bg-orange-100 transition-all flex items-center justify-center gap-2">
                        <Bell className="w-4 h-4" /> Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
