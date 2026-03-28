import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Search, Calendar, FileSpreadsheet, ExternalLink } from 'lucide-react';
import { UpdatesTabs } from '../components/UpdatesTabs';

const TENDERS_DATA = [
  {
    id: "MITS/Tender/2026/04",
    title: "Supply and Installation of Desktop Computers for AI Lab",
    publishedDate: "2026-03-25",
    closingDate: "2026-04-15",
    status: "Active",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2026/03",
    title: "Campus Wi-Fi Network Upgradation and Maintenance",
    publishedDate: "2026-03-20",
    closingDate: "2026-04-10",
    status: "Active",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2026/02",
    title: "Renovation of Central Library Reading Hall",
    publishedDate: "2026-03-15",
    closingDate: "2026-04-05",
    status: "Active",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2026/01",
    title: "Procurement of Sports Equipment for Annual Fest",
    publishedDate: "2026-02-10",
    closingDate: "2026-03-01",
    status: "Closed",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2025/45",
    title: "Empanelment of Agencies for Security Services",
    publishedDate: "2025-12-05",
    closingDate: "2025-12-25",
    status: "Closed",
    documentUrl: "#"
  }
];

export const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTenders = TENDERS_DATA.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) || tender.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || tender.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <UpdatesTabs />
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#800000] text-white rounded-3xl p-8 md:p-12 mb-8 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <FileSpreadsheet className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <FileSpreadsheet className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Tenders & Procurement</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Active and archived tenders, procurement notices, and auction details for Madhav Institute of Technology & Science.
            </p>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
        >
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Active', 'Closed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === f 
                    ? 'bg-[#800000] text-white' 
                    : 'bg-[#f2e8e3]/50 text-black/70 hover:bg-[#f2e8e3]'
                }`}
              >
                {f} Tenders
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
            <input 
              type="text"
              placeholder="Search tenders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9fa] border border-black/10 rounded-full focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all"
            />
          </div>
        </motion.div>

        {/* Tenders List */}
        <div className="space-y-4">
          {filteredTenders.length > 0 ? (
            filteredTenders.map((tender, index) => (
              <motion.div 
                key={tender.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-black/50 uppercase tracking-wider">{tender.id}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      tender.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tender.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-[#800000] mb-3 group-hover:underline decoration-2 underline-offset-4">{tender.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-black/60">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Published: {tender.publishedDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-700 font-medium">Closing: {tender.closingDate}</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <a 
                    href={tender.documentUrl}
                    className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-[#f2e8e3] text-[#800000] rounded-xl font-medium hover:bg-[#800000] hover:text-white transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-white p-12 rounded-3xl border border-black/5 text-center">
              <FileText className="w-12 h-12 text-black/20 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-black/70 mb-2">No Tenders Found</h3>
              <p className="text-black/50">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
