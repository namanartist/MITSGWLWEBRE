import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, ArrowRight, CheckCircle2, Building, BookOpen, Users, Briefcase, GraduationCap, ShieldAlert, Link as LinkIcon, FileCheck, FileSpreadsheet, FlaskConical, Award, Shield, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

// Dictionary to hold specific content for generic pages
const PAGE_CONTENT: Record<string, any> = {
  "Training & Placements": {
    icon: Briefcase,
    description: "MITS Gwalior has a stellar placement record with top recruiters from across the globe visiting our campus annually. Our dedicated Training and Placement Cell ensures students are industry-ready.",
    sections: [
      {
        title: "Placement Statistics 2023-24",
        content: "Over 85% of eligible students placed. Highest package: 1.02 CPA. Average package: 7.5 LPA.",
        type: "stats"
      },
      {
        title: "Top Recruiters",
        content: "TCS, Infosys, Wipro, Cognizant, Accenture, IBM, Amazon, Microsoft, L&T, and many more.",
        type: "text"
      }
    ],
    links: [
      { title: "Placement Brochure 2024", url: "#" },
      { title: "Recruiter Registration Form", url: "#" },
      { title: "Placement Policy", url: "#" }
    ]
  },
  "Library": {
    icon: BookOpen,
    description: "The Central Library is the heart of academic and research activities at MITS, offering a vast collection of resources, digital databases, and quiet reading spaces.",
    sections: [
      {
        title: "Resources Available",
        content: "1,00,000+ Books, 500+ e-Journals, Digital Library access, Reading Halls, Reference Section.",
        type: "text"
      },
      {
        title: "Timings",
        content: "Monday to Saturday: 8:00 AM to 8:00 PM. Sunday: 10:00 AM to 4:00 PM.",
        type: "text"
      }
    ],
    links: [
      { title: "Access Digital Library (OPAC)", url: "#" },
      { title: "E-Journals Subscription List", url: "#" },
      { title: "Library Rules & Regulations", url: "#" }
    ]
  },
  "Hostels": {
    icon: Building,
    description: "MITS provides comfortable and secure on-campus accommodation for both boys and girls, fostering a vibrant community life.",
    sections: [
      {
        title: "Facilities",
        content: "Wi-Fi enabled, Mess facility, Recreation rooms, 24/7 Security, Medical assistance.",
        type: "text"
      },
      {
        title: "Hostel Details",
        content: "5 Boys Hostels and 3 Girls Hostels with varying capacities.",
        type: "text"
      }
    ],
    links: [
      { title: "Hostel Fee Structure", url: "#" },
      { title: "Hostel Admission Form", url: "#" },
      { title: "Mess Menu", url: "#" }
    ]
  },
  "Student Portal": {
    icon: Users,
    description: "Access all your academic and administrative needs in one place. The Student Portal connects you to various institutional platforms.",
    sections: [
      {
        title: "Important Notice",
        content: "Please ensure your contact details are updated in the ERP system for timely communication.",
        type: "text"
      }
    ],
    links: [
      { title: "Moodle Learning Management System", url: "http://moodle.mitsweb.in/" },
      { title: "SDMS Portal", url: "https://sdms.mitsgwalior.in/" },
      { title: "IUMS Portal", url: "https://iums.mitsgwalior.in/" },
      { title: "AMS Portal", url: "https://ams.mitsgwalior.in/" }
    ]
  },
  "Anti-Ragging": {
    icon: ShieldAlert,
    description: "MITS has a ZERO TOLERANCE policy towards ragging. We are committed to providing a safe and conducive environment for all students.",
    sections: [
      {
        title: "Helpline Numbers",
        content: "National Anti-Ragging Helpline: 1800-180-5522. Institute Nodal Officer: +91-XXXXXXXXXX.",
        type: "text"
      }
    ],
    links: [
      { title: "UGC Anti-Ragging Regulations", url: "#" },
      { title: "Submit Online Anti-Ragging Affidavit", url: "#" },
      { title: "Anti-Ragging Committee Members", url: "#" }
    ]
  },
  "AICTE": {
    icon: FileCheck,
    description: "Mandatory disclosures and approval letters from the All India Council for Technical Education (AICTE).",
    sections: [
      {
        title: "Approvals",
        content: "MITS is approved by AICTE, New Delhi. All our engineering and management programs are AICTE recognized.",
        type: "text"
      }
    ],
    links: [
      { title: "AICTE Approval Letter 2023-24", url: "#" },
      { title: "Mandatory Disclosure", url: "#" },
      { title: "AICTE Feedback Portal", url: "#" }
    ]
  },
  "NIRF Ranking": {
    icon: Award,
    description: "National Institutional Ranking Framework (NIRF) data and reports submitted by MITS Gwalior.",
    sections: [
      {
        title: "Current Ranking",
        content: "MITS consistently ranks among the top engineering institutions in India.",
        type: "text"
      }
    ],
    links: [
      { title: "NIRF 2024 Data Submitted", url: "#" },
      { title: "NIRF 2023 Report", url: "#" },
      { title: "NIRF 2022 Report", url: "#" }
    ]
  },
  "Tenders": {
    icon: FileSpreadsheet,
    description: "Active tenders, procurement notices, and auction details for Madhav Institute of Technology & Science.",
    sections: [
      {
        title: "Vendor Information",
        content: "All interested vendors must be registered with the institute. Please check the eligibility criteria in the respective tender documents.",
        type: "text"
      }
    ],
    links: [
      { title: "Tender for Lab Equipment (Closing: 15 Apr 2026)", url: "#" },
      { title: "Tender for Campus Wi-Fi Upgradation", url: "#" },
      { title: "Archived Tenders", url: "#" }
    ]
  },
  "Careers": {
    icon: Briefcase,
    description: "Join the MITS family. We are always looking for dedicated faculty and staff to contribute to our mission of excellence.",
    sections: [
      {
        title: "Current Openings",
        content: "Applications are invited for the post of Assistant Professor in CSE, IT, and AI departments.",
        type: "text"
      }
    ],
    links: [
      { title: "Faculty Recruitment Advertisement 2026", url: "#" },
      { title: "Application Form for Teaching Posts", url: "#" },
      { title: "Application Form for Non-Teaching Posts", url: "#" }
    ]
  },
  "Alumni Portal": {
    icon: GraduationCap,
    description: "Connect with the global network of MITS alumni. Stay updated on alumni events, mentorship programs, and networking opportunities.",
    sections: [
      {
        title: "Alumni Association",
        content: "The MITS Alumni Association aims to foster a lifelong bond between the institute and its graduates.",
        type: "text"
      }
    ],
    links: [
      { title: "Register on Alumni Portal", url: "#" },
      { title: "Alumni Meet 2026 Registration", url: "#" },
      { title: "Donate to Alma Mater", url: "#" }
    ]
  },
  "Quick Links": {
    icon: LinkIcon,
    description: "Frequently accessed resources and portals for students, faculty, and visitors.",
    sections: [
      {
        title: "Navigation",
        content: "Find what you need quickly using the links below.",
        type: "text"
      }
    ],
    links: [
      { title: "Academic Calendar", url: "#" },
      { title: "Holiday List 2026", url: "#" },
      { title: "Fee Payment Portal", url: "#" },
      { title: "Grievance Redressal", url: "#" }
    ]
  },
  "Resources": {
    icon: FileText,
    description: "A centralized repository of academic, administrative, and technical resources for the MITS community.",
    sections: [
      {
        title: "Available Resources",
        content: "Access forms, manuals, guidelines, and software resources provided by the institute.",
        type: "text"
      }
    ],
    links: [
      { title: "Download Center", url: "#" },
      { title: "IT Services & Support", url: "#" },
      { title: "Campus Map", url: "#" }
    ]
  },
  "Student Life": {
    icon: Users,
    description: "Experience a vibrant campus life at MITS Gwalior with numerous clubs, cultural events, and sports activities.",
    sections: [
      {
        title: "Extracurricular Activities",
        content: "Join over 20+ student clubs including Robotics, Coding, Drama, Music, and Entrepreneurship cells.",
        type: "text"
      },
      {
        title: "Sports Facilities",
        content: "State-of-the-art sports complex with facilities for Cricket, Basketball, Tennis, and indoor games.",
        type: "text"
      }
    ],
    links: [
      { title: "Student Clubs Directory", url: "#" },
      { title: "Annual Fest - Cygnus", url: "#" },
      { title: "Sports Calendar", url: "#" }
    ]
  },
  "Research & Development": {
    icon: FlaskConical,
    description: "MITS is committed to fostering a culture of innovation and research among faculty and students.",
    sections: [
      {
        title: "R&D Focus Areas",
        content: "Artificial Intelligence, Renewable Energy, Smart Materials, IoT, and Sustainable Engineering.",
        type: "text"
      },
      {
        title: "Sponsored Projects",
        content: "Currently executing 15+ projects funded by DST, AICTE, UGC, and industry partners.",
        type: "text"
      }
    ],
    links: [
      { title: "Research Policy", url: "#" },
      { title: "List of Publications", url: "#" },
      { title: "Ph.D. Guidelines", url: "#" }
    ]
  },
  "UGC Disclosure": {
    icon: FileCheck,
    description: "Mandatory disclosures as per the University Grants Commission (UGC) guidelines.",
    sections: [
      {
        title: "Compliance",
        content: "MITS Gwalior adheres to all regulations and guidelines set forth by the UGC for Deemed Universities.",
        type: "text"
      }
    ],
    links: [
      { title: "UGC Approval Letter", url: "#" },
      { title: "Annual Report 2024-25", url: "#" },
      { title: "Audit Reports", url: "#" }
    ]
  },
  "Code of Conduct": {
    icon: Shield,
    description: "The Code of Conduct defines the expectations for behavior and professional ethics for all members of the MITS community.",
    sections: [
      {
        title: "Student Conduct",
        content: "Students are expected to maintain academic integrity, respect campus property, and adhere to the disciplinary guidelines.",
        type: "text"
      },
      {
        title: "Faculty Ethics",
        content: "Faculty members are committed to excellence in teaching, research, and professional development while maintaining high ethical standards.",
        type: "text"
      }
    ],
    links: [
      { title: "Student Handbook 2026", url: "#" },
      { title: "Faculty Code of Ethics", url: "#" },
      { title: "Disciplinary Procedures", url: "#" }
    ]
  },
  "NAAC Reports": {
    icon: CheckCircle2,
    description: "National Assessment and Accreditation Council (NAAC) reports and documentation for MITS Gwalior.",
    sections: [
      {
        title: "Accreditation Status",
        content: "MITS Gwalior is accredited with an A++ grade by NAAC, reflecting our commitment to quality education.",
        type: "text"
      }
    ],
    links: [
      { title: "NAAC SSR Report 2022", url: "#" },
      { title: "Peer Team Findings", url: "#" },
      { title: "IQAC Annual Reports", url: "#" }
    ]
  },
  "Academic SOPs": {
    icon: BookOpen,
    description: "Standard Operating Procedures (SOPs) for various academic processes at the institute.",
    sections: [
      {
        title: "Process Guidelines",
        content: "Detailed SOPs for examination, registration, credit transfer, and other academic activities.",
        type: "text"
      }
    ],
    links: [
      { title: "Examination SOP", url: "#" },
      { title: "Registration SOP", url: "#" },
      { title: "Research SOP", url: "#" }
    ]
  },
  "RTI Information": {
    icon: Clock,
    description: "Information provided under the Right to Information (RTI) Act, 2005.",
    sections: [
      {
        title: "Public Authority",
        content: "Details of the Public Information Officer (PIO) and Appellate Authority at MITS Gwalior.",
        type: "text"
      }
    ],
    links: [
      { title: "RTI Manual", url: "#" },
      { title: "PIO Contact Details", url: "#" },
      { title: "RTI Application Format", url: "#" }
    ]
  }
};

export const GenericPage = ({ title }: { title: string }) => {
  // Fetch specific content or fallback to generic
  const data = PAGE_CONTENT[title] || {
    icon: FileText,
    description: `Welcome to the ${title} section. This page contains all relevant information, documents, and updates regarding ${title}.`,
    sections: [
      { title: "Overview", content: "Detailed information is currently being updated by the administration.", type: "text" }
    ],
    links: [
      { title: `Download ${title} Guidelines`, url: "#" },
      { title: "Contact Department", url: "#" }
    ]
  };

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <SEO title={title} description={data.description} />
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#800000] text-white rounded-3xl p-8 md:p-12 mb-8 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Icon className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">{title}</h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              {data.description}
            </p>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {data.sections.map((section: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-black/5"
              >
                <h2 className="text-2xl font-serif text-[#800000] mb-4">{section.title}</h2>
                {section.type === 'stats' ? (
                  <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl text-orange-900 font-medium">
                    {section.content}
                  </div>
                ) : (
                  <p className="text-black/70 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sidebar Links */}
          <div className="md:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 sticky top-24"
            >
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Download className="w-5 h-5 text-orange-500" />
                Important Links
              </h3>
              <div className="space-y-3">
                {data.links.map((link: any, index: number) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#f2e8e3]/50 transition-colors border border-transparent hover:border-black/5"
                  >
                    <div className="mt-0.5 shrink-0">
                      {link.url.startsWith('http') ? (
                        <ExternalLink className="w-4 h-4 text-black/40 group-hover:text-[#800000] transition-colors" />
                      ) : (
                        <FileText className="w-4 h-4 text-black/40 group-hover:text-[#800000] transition-colors" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-black/70 group-hover:text-black transition-colors leading-tight">
                      {link.title}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};
