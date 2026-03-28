import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, CreditCard, HelpCircle, Download } from 'lucide-react';
import { motion } from 'motion/react';

export const Admissions = () => {
  const [activeTab, setActiveTab] = useState('ug');

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

  const steps = [
    { title: 'Registration', desc: 'Create an account on the admission portal.' },
    { title: 'Application Form', desc: 'Fill personal and academic details.' },
    { title: 'Document Upload', desc: 'Upload scanned copies of required documents.' },
    { title: 'Fee Payment', desc: 'Pay the application fee online.' },
    { title: 'Counseling', desc: 'Participate in DTE counseling based on JEE Main score.' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Admissions 2026</h1>
        <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
          Join a legacy of excellence. Applications are now open for Undergraduate, Postgraduate, and Doctoral programs.
        </p>
      </motion.div>

      {/* Admission Process Flow */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24 bg-white/40 backdrop-blur-sm border border-black/10 rounded-[2rem] p-8 md:p-12"
      >
        <h2 className="font-serif text-3xl mb-8 text-center">Admission Process</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-black/10 -z-10 -translate-y-1/2"></div>
          {steps.map((step, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              key={i} 
              className="flex flex-row md:flex-col items-center gap-4 md:gap-2 relative bg-[#fdfbf9] md:bg-transparent p-2 md:p-0 z-10 w-full md:w-48 mb-6 md:mb-0"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shrink-0 border-4 border-[#fdfbf9]">
                {i + 1}
              </div>
              <div className="md:text-center">
                <h3 className="font-medium text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-black/60 hidden md:block">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-colors inline-flex items-center gap-2">
            Apply Now <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.section>

      {/* Tabs for Programs */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['ug', 'pg', 'phd', 'nri'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors uppercase tracking-wider ${
                activeTab === tab ? 'bg-black text-white' : 'bg-white border border-black/10 hover:bg-black/5'
              }`}
            >
              {tab === 'ug' ? 'Undergraduate' : tab === 'pg' ? 'Postgraduate' : tab === 'phd' ? 'Ph.D.' : 'NRI / PIO'}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-black/10">
              <h3 className="font-serif text-3xl mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4 text-black/80">
                {activeTab === 'ug' && (
                  <>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Passed 10+2 examination with Physics and Mathematics as compulsory subjects.</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Obtained at least 45% marks (40% for reserved category) in the above subjects taken together.</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Valid JEE Main score is mandatory for counseling.</li>
                  </>
                )}
                {activeTab === 'pg' && (
                  <>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> B.E./B.Tech. or equivalent degree in relevant discipline.</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Minimum 50% marks (45% for reserved category).</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Valid GATE score is preferred. Non-GATE candidates may have to appear for an institute-level test.</li>
                  </>
                )}
                {activeTab === 'phd' && (
                  <>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Master's degree in relevant discipline with at least 60% marks or 6.0 CGPA.</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Qualification in GATE/NET/SLET or institute-level entrance test.</li>
                  </>
                )}
                {activeTab === 'nri' && (
                  <>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Passed 10+2 examination or equivalent from a recognized board outside India.</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Valid passport and NRI status proof.</li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-black/10" id="fees">
              <h3 className="font-serif text-3xl mb-6 flex items-center gap-3"><CreditCard className="w-8 h-8 text-orange-500" /> Fee Structure</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-black/10">
                      <th className="py-3 px-4 font-medium">Program</th>
                      <th className="py-3 px-4 font-medium">Tuition Fee (Per Sem)</th>
                      <th className="py-3 px-4 font-medium">Other Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/5">
                      <td className="py-3 px-4">B.Tech (Core)</td>
                      <td className="py-3 px-4">₹ 45,000</td>
                      <td className="py-3 px-4">₹ 15,000</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 px-4">B.Tech (IT/AI)</td>
                      <td className="py-3 px-4">₹ 55,000</td>
                      <td className="py-3 px-4">₹ 15,000</td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 px-4">M.Tech</td>
                      <td className="py-3 px-4">₹ 40,000</td>
                      <td className="py-3 px-4">₹ 10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-black/50 mt-4">* Fees are subject to change as per government norms.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#f2e8e3] p-8 rounded-3xl border border-black/10">
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3"><FileText className="w-6 h-6 text-orange-500" /> Documents Required</h3>
              <ul className="space-y-3 text-sm text-black/80 mb-6">
                <li>• 10th & 12th Marksheets</li>
                <li>• Transfer Certificate (TC)</li>
                <li>• Migration Certificate</li>
                <li>• Caste Certificate (if applicable)</li>
                <li>• Income Certificate</li>
                <li>• Domicile Certificate</li>
                <li>• JEE Main Score Card</li>
                <li>• Passport Size Photographs</li>
              </ul>
              <button className="w-full py-3 border border-black rounded-full font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Checklist
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/10">
              <h3 className="font-serif text-2xl mb-4 flex items-center gap-3"><HelpCircle className="w-6 h-6 text-orange-500" /> Need Help?</h3>
              <p className="text-sm text-black/70 mb-4">Contact our admission cell for any queries regarding the application process.</p>
              <p className="font-medium text-sm">Email: admissions@mitsgwalior.in</p>
              <p className="font-medium text-sm">Phone: +91 751 2409300</p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};
