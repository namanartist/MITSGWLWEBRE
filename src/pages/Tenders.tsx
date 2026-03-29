import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { FileText, Download, Search, Calendar, FileSpreadsheet, ExternalLink, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { UpdatesTabs } from '../components/UpdatesTabs';

const TENDERS_DATA = [
  {
    id: "MITS/Tender/2026/04",
    title: "Supply and Installation of Desktop Computers for AI Lab",
    publishedDate: "2026-03-25",
    closingDate: "2026-04-15",
    status: "Active",
    documentUrl: "#",
    description: "Madhav Institute of Technology & Science (MITS), Gwalior invites sealed tenders from reputed manufacturers/authorized dealers for the supply and installation of 50 high-end desktop computers for the newly established AI Research Lab. The systems should meet the minimum specifications mentioned in the tender document.",
    estimatedValue: "₹45,00,000",
    tenderFee: "₹5,000",
    emd: "₹90,000"
  },
  {
    id: "MITS/Tender/2026/03",
    title: "Campus Wi-Fi Network Upgradation and Maintenance",
    publishedDate: "2026-03-20",
    closingDate: "2026-04-10",
    status: "Active",
    documentUrl: "#",
    description: "Tenders are invited for the upgradation of existing Wi-Fi infrastructure across the campus, including academic blocks, hostels, and administrative buildings. The scope includes supply of access points, controllers, and comprehensive maintenance for 3 years.",
    estimatedValue: "₹25,00,000",
    tenderFee: "₹2,500",
    emd: "₹50,000"
  },
  {
    id: "MITS/Tender/2026/02",
    title: "Renovation of Central Library Reading Hall",
    publishedDate: "2026-03-15",
    closingDate: "2026-04-05",
    status: "Active",
    documentUrl: "#",
    description: "Sealed bids are invited for the civil and interior renovation work of the Central Library Reading Hall. Work includes flooring, false ceiling, electrical work, and furniture installation.",
    estimatedValue: "₹15,00,000",
    tenderFee: "₹1,500",
    emd: "₹30,000"
  },
  {
    id: "MITS/Tender/2026/01",
    title: "Procurement of Sports Equipment for Annual Fest",
    publishedDate: "2026-02-10",
    closingDate: "2026-03-01",
    status: "Closed",
    documentUrl: "#",
    description: "Procurement of various sports equipment including cricket kits, footballs, basketballs, and athletic gear for the upcoming Annual Sports Fest.",
    estimatedValue: "₹5,00,000",
    tenderFee: "₹500",
    emd: "₹10,000"
  }
];

export const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedTender, setSelectedTender] = useState<any>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);

  const filteredTenders = TENDERS_DATA.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) || tender.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || tender.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Tenders & Procurement" 
        description="View the latest tender notices, procurement opportunities, and official announcements from MITS Gwalior."
      />
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
                  <h3 className="text-xl font-serif text-[#800000] mb-3 group-hover:underline decoration-2 underline-offset-4 cursor-pointer" onClick={() => setSelectedTender(tender)}>{tender.title}</h3>
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
                <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => setSelectedTender(tender)}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#f2e8e3] text-[#800000] rounded-xl font-medium hover:bg-[#800000] hover:text-white transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View Details
                  </button>
                  {tender.status === 'Active' && (
                    <button 
                      onClick={() => {
                        setSelectedTender(tender);
                        setShowApplyForm(true);
                      }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Apply Now
                    </button>
                  )}
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

        {/* Tender Detail Modal */}
        <AnimatePresence>
          {selectedTender && !showApplyForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-8 md:p-12"
              >
                <button 
                  onClick={() => setSelectedTender(null)}
                  className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-black/50 uppercase tracking-wider">{selectedTender.id}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      selectedTender.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {selectedTender.status}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#800000] mb-6 leading-tight">{selectedTender.title}</h2>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-black/5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Published</p>
                      <p className="font-medium text-sm">{selectedTender.publishedDate}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Closing Date</p>
                      <p className="font-medium text-sm text-orange-600">{selectedTender.closingDate}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Tender Fee</p>
                      <p className="font-medium text-sm">{selectedTender.tenderFee}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">EMD</p>
                      <p className="font-medium text-sm">{selectedTender.emd}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-orange-600" /> Description
                    </h4>
                    <p className="text-black/70 leading-relaxed">{selectedTender.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Estimated Value</h4>
                    <p className="text-2xl font-serif text-[#800000]">{selectedTender.estimatedValue}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedTender.documentUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#f2e8e3] text-[#800000] rounded-2xl font-bold hover:bg-[#800000] hover:text-white transition-all"
                  >
                    <Download className="w-5 h-5" /> Download Tender Document
                  </a>
                  {selectedTender.status === 'Active' && (
                    <button 
                      onClick={() => setShowApplyForm(true)}
                      className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/20"
                    >
                      <ExternalLink className="w-5 h-5" /> Apply Online
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}

          {/* Apply Form Modal */}
          {showApplyForm && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-8 md:p-12"
              >
                <button 
                  onClick={() => setShowApplyForm(false)}
                  className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-[#800000] mb-2">Tender Application</h2>
                  <p className="text-black/50">Applying for: <span className="font-medium text-black">{selectedTender?.title}</span></p>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); setShowApplyForm(false); setSelectedTender(null); }}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">Organization Name</label>
                      <input type="text" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">GST Number</label>
                      <input type="text" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">Contact Person</label>
                      <input type="text" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email Address</label>
                      <input type="email" required className="w-full px-5 py-3 bg-[#f8f9fa] border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-50">Upload Technical Bid (PDF)</label>
                    <div className="border-2 border-dashed border-black/10 rounded-2xl p-8 text-center hover:bg-black/5 transition-colors cursor-pointer">
                      <Download className="w-8 h-8 text-black/20 mx-auto mb-2" />
                      <p className="text-sm text-black/50">Click or drag and drop your PDF file here</p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <button type="submit" className="w-full py-4 bg-[#800000] text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-black/20">
                      Submit Application
                    </button>
                    <p className="text-[10px] text-center text-black/40 mt-4">
                      By submitting, you agree to the terms and conditions mentioned in the tender document.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
