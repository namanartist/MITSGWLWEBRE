import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Search, Mail, Phone, GraduationCap, BookOpen, Award, X, ChevronRight, User, FileText, Briefcase, Shield, Users, Lightbulb, Trophy, Calendar, FileCode, Book } from 'lucide-react';

export const FACULTY_DATA = [
  {
    id: 1,
    name: "Dr. R. K. Pandit",
    designation: "Director",
    department: "Architecture & Planning",
    qualification: "Ph.D., M.Arch",
    experience: "35+ Years",
    specialization: "Urban Planning, Sustainable Architecture",
    email: "director@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    about: "Dr. R. K. Pandit is a visionary leader and academician with over three decades of experience in Architecture and Urban Planning. He has been instrumental in shaping the architectural landscape of central India through his research and consultancy projects.",
    education: ["Ph.D. in Architecture", "M.Arch in Urban Planning", "B.Arch"],
    workExperience: ["Director, MITS Gwalior (Current)", "Professor, Department of Architecture", "Consultant Architect for various Government projects"],
    adminExperience: ["Member of Executive Council", "Chairman, Board of Studies", "Dean, Academic Affairs"],
    researchSupervision: ["Guided 10+ Ph.D. scholars", "Supervised 50+ M.Arch theses"],
    researchProjects: ["Sustainable Urban Development in Heritage Cities", "Smart City Planning Initiatives"],
    awards: ["Best Teacher Award 2018", "Excellence in Architecture Education 2020"],
    workshops: ["International Conference on Sustainable Built Environment", "Workshop on Urban Resilience"],
    publications: ["Sustainable Urbanism in India", "Heritage Conservation Strategies"],
    bookChapters: ["Chapter on Vernacular Architecture in 'Modern Indian Architecture'"],
    resumeUrl: "#"
  },
  {
    id: 2,
    name: "Dr. Manish Dixit",
    designation: "Professor & Head",
    department: "Computer Science & Engineering",
    qualification: "Ph.D. (CSE)",
    experience: "25+ Years",
    specialization: "Image Processing, AI, Machine Learning",
    email: "manishdixit@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Manish Dixit is a renowned researcher in the field of Artificial Intelligence and Image Processing. He has published numerous papers in high-impact journals and has been a keynote speaker at several international conferences.",
    education: ["Ph.D. in Computer Science & Engineering", "M.Tech in CSE", "B.E. in CSE"],
    workExperience: ["Head of Department, CSE, MITS Gwalior", "Professor, CSE Department", "Visiting Researcher at International Labs"],
    adminExperience: ["Coordinator, TEQIP-III", "Head, IT Infrastructure Committee"],
    researchSupervision: ["Supervising 6 Ph.D. students", "Guided 40+ M.Tech projects"],
    researchProjects: ["AI-based Medical Image Diagnosis", "Deep Learning for Satellite Imagery"],
    awards: ["Outstanding Researcher Award", "IEEE Senior Member"],
    workshops: ["National Workshop on Machine Learning", "AI in Healthcare Summit"],
    publications: ["Advanced Image Processing Techniques", "Neural Networks for Pattern Recognition"],
    bookChapters: ["Deep Learning Applications in 'Artificial Intelligence Trends'"],
    resumeUrl: "#"
  },
  {
    id: 3,
    name: "Dr. Laxmi Srivastava",
    designation: "Professor & Head",
    department: "Electrical Engineering",
    qualification: "Ph.D.",
    experience: "30+ Years",
    specialization: "Power Systems, Soft Computing",
    email: "lsrivastava@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Laxmi Srivastava specializes in Power Systems and Soft Computing. Her work focuses on optimizing power grid performance and integrating renewable energy sources using advanced computational methods.",
    education: ["Ph.D. in Electrical Engineering", "M.E. in Power Systems", "B.E. in Electrical Engineering"],
    workExperience: ["Head, Electrical Engineering Department", "Professor, Electrical Engineering", "Industrial Consultant for Power Utilities"],
    adminExperience: ["Dean, Research & Development", "Member, Academic Council"],
    researchSupervision: ["Guided 12 Ph.D. scholars", "Supervised 60+ M.E. projects"],
    researchProjects: ["Smart Grid Optimization", "Renewable Energy Integration in Rural Areas"],
    awards: ["Women in Engineering Excellence Award", "Fellow of IEI"],
    workshops: ["Power System Stability Workshop", "Soft Computing in Engineering Applications"],
    publications: ["Modern Power System Analysis", "Soft Computing for Load Forecasting"],
    bookChapters: ["Optimization in Power Systems in 'Computational Intelligence'"],
    resumeUrl: "#"
  },
  {
    id: 4,
    name: "Dr. Pratesh Jayaswal",
    designation: "Professor",
    department: "Mechanical Engineering",
    qualification: "Ph.D.",
    experience: "24+ Years",
    specialization: "Vibration, Condition Monitoring",
    email: "prateshjayaswal@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Pratesh Jayaswal is an expert in mechanical vibrations and condition monitoring of machinery. His research helps in early fault detection and predictive maintenance in industrial settings.",
    education: ["Ph.D. in Mechanical Engineering", "M.Tech in Design", "B.E. in Mechanical Engineering"],
    workExperience: ["Professor, Mechanical Engineering", "Associate Professor, MITS", "Industrial Liaison Officer"],
    adminExperience: ["Controller of Examinations", "Head, Central Workshop"],
    researchSupervision: ["Guided 8 Ph.D. students", "Supervised 35+ M.Tech projects"],
    researchProjects: ["Fault Diagnosis of Bearings using AI", "Vibration Analysis of Rotating Machinery"],
    awards: ["Best Research Paper Award", "ISTE National Award"],
    workshops: ["Condition Monitoring Workshop", "Advanced Vibration Analysis Seminar"],
    publications: ["Condition Monitoring of Industrial Systems", "Vibration Control Techniques"],
    bookChapters: ["Signal Processing in 'Mechanical Systems Monitoring'"],
    resumeUrl: "#"
  },
  {
    id: 5,
    name: "Dr. Sanjiv Sharma",
    designation: "Professor",
    department: "Information Technology",
    qualification: "Ph.D. (IT)",
    experience: "22+ Years",
    specialization: "Data Mining, Cloud Computing",
    email: "sanjivsharma@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Sanjiv Sharma focuses on Data Mining and Cloud Computing. He has developed several algorithms for big data analytics and is actively involved in cloud security research.",
    education: ["Ph.D. in Information Technology", "M.Tech in IT", "B.E. in IT"],
    workExperience: ["Professor, IT Department", "Head, Computer Center", "Software Consultant"],
    adminExperience: ["Dean, Students Welfare", "Coordinator, NPTEL Local Chapter"],
    researchSupervision: ["Supervising 5 Ph.D. scholars", "Guided 30+ M.Tech projects"],
    researchProjects: ["Cloud Resource Management", "Privacy Preserving Data Mining"],
    awards: ["Excellence in IT Education", "ACM Senior Member"],
    workshops: ["Big Data Analytics Workshop", "Cloud Computing Security Seminar"],
    publications: ["Data Mining: Concepts and Techniques", "Cloud Computing Architecture"],
    bookChapters: ["Big Data Security in 'Handbook of Cloud Computing'"],
    resumeUrl: "#"
  },
  {
    id: 6,
    name: "Dr. Anshu Chaturvedi",
    designation: "Associate Professor",
    department: "Computer Science & Engineering",
    qualification: "Ph.D. (CSE)",
    experience: "18+ Years",
    specialization: "Network Security, Cryptography",
    email: "anshu@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Anshu Chaturvedi is an expert in Network Security and Cryptography. Her research focuses on developing secure protocols for wireless sensor networks and IoT devices.",
    education: ["Ph.D. in CSE", "M.Tech in CSE", "B.E. in CSE"],
    workExperience: ["Associate Professor, CSE", "Assistant Professor, MITS", "Network Security Consultant"],
    adminExperience: ["In-charge, Cyber Security Lab", "Member, Women Empowerment Cell"],
    researchSupervision: ["Guided 3 Ph.D. students", "Supervised 25+ M.Tech projects"],
    researchProjects: ["Secure Routing in WSN", "Lightweight Cryptography for IoT"],
    awards: ["Young Scientist Award", "Best Paper in International Conference"],
    workshops: ["Cyber Security Awareness Workshop", "Cryptography and Network Security Seminar"],
    publications: ["Network Security Protocols", "Introduction to Cryptography"],
    bookChapters: ["IoT Security in 'Next Generation Networks'"],
    resumeUrl: "#"
  },
  {
    id: 7,
    name: "Dr. Sulochana Wadhwani",
    designation: "Professor",
    department: "Electrical Engineering",
    qualification: "Ph.D.",
    experience: "26+ Years",
    specialization: "Control Systems, Biomedical Engineering",
    email: "swadhwani@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Sulochana Wadhwani works at the intersection of Control Systems and Biomedical Engineering. She has developed several control strategies for medical devices and prosthetic limbs.",
    education: ["Ph.D. in Electrical Engineering", "M.E. in Control Systems", "B.E. in Electrical Engineering"],
    workExperience: ["Professor, Electrical Engineering", "Head, Biomedical Engineering Section", "Research Fellow at Medical Institutes"],
    adminExperience: ["Dean, Faculty Welfare", "Chairperson, Internal Quality Assurance Cell"],
    researchSupervision: ["Guided 7 Ph.D. scholars", "Supervised 45+ M.E. projects"],
    researchProjects: ["Control of Prosthetic Hands", "Biomedical Signal Processing for Diagnosis"],
    awards: ["Distinguished Faculty Award", "Fellow of IETE"],
    workshops: ["Biomedical Engineering Workshop", "Advanced Control Systems Seminar"],
    publications: ["Control Systems Engineering", "Biomedical Instrumentation"],
    bookChapters: ["Signal Processing in 'Biomedical Engineering Handbook'"],
    resumeUrl: "#"
  },
  {
    id: 8,
    name: "Dr. Akhilesh Tiwari",
    designation: "Professor",
    department: "Information Technology",
    qualification: "Ph.D. (IT)",
    experience: "20+ Years",
    specialization: "Software Engineering, DBMS",
    email: "akhilesh@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Akhilesh Tiwari is a specialist in Software Engineering and Database Management Systems. He has consulted for several software firms on database optimization and software quality assurance.",
    education: ["Ph.D. in IT", "M.Tech in IT", "B.E. in IT"],
    workExperience: ["Professor, IT", "Head, Training & Placement", "Database Administrator"],
    adminExperience: ["Dean, Academic Affairs", "Coordinator, Industry-Institute Interaction"],
    researchSupervision: ["Guided 4 Ph.D. students", "Supervised 28+ M.Tech projects"],
    researchProjects: ["Software Quality Metrics", "Distributed Database Systems"],
    awards: ["Best Placement Officer Award", "Senior Member IEEE"],
    workshops: ["Software Engineering Workshop", "Modern DBMS Trends Seminar"],
    publications: ["Software Engineering Principles", "Database Management Systems"],
    bookChapters: ["Agile Methodologies in 'Software Development Trends'"],
    resumeUrl: "#"
  },
  {
    id: 9,
    name: "Dr. Karuna Jain",
    designation: "Associate Professor",
    department: "Civil Engineering",
    qualification: "Ph.D.",
    experience: "15+ Years",
    specialization: "Structural Engineering, Concrete Technology",
    email: "karunajain@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Karuna Jain is an expert in Structural Engineering and Concrete Technology. Her research focuses on sustainable construction materials and earthquake-resistant structures.",
    education: ["Ph.D. in Civil Engineering", "M.E. in Structures", "B.E. in Civil Engineering"],
    workExperience: ["Associate Professor, Civil Engineering", "Structural Consultant", "Site Engineer"],
    adminExperience: ["In-charge, Concrete Lab", "Member, Building Committee"],
    researchSupervision: ["Supervising 2 Ph.D. scholars", "Guided 20+ M.E. projects"],
    researchProjects: ["Self-Healing Concrete", "Earthquake Resistant Design of Buildings"],
    awards: ["Best Structural Engineer Award", "Young Faculty Excellence Award"],
    workshops: ["Sustainable Construction Workshop", "Advanced Concrete Technology Seminar"],
    publications: ["Structural Analysis", "Concrete Technology"],
    bookChapters: ["Sustainable Materials in 'Civil Engineering Advances'"],
    resumeUrl: "#"
  },
  {
    id: 10,
    name: "Dr. R. S. Jadon",
    designation: "Professor",
    department: "Computer Science & Engineering",
    qualification: "Ph.D. (CSE)",
    experience: "28+ Years",
    specialization: "Soft Computing, Data Mining",
    email: "rsjadon@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    about: "Dr. R. S. Jadon is a senior professor with expertise in Soft Computing and Data Mining. He has contributed significantly to the development of intelligent systems and has a strong track record of research and academic leadership.",
    education: ["Ph.D. in Computer Science", "M.Tech in CSE", "B.E. in CSE"],
    workExperience: ["Professor, CSE Department", "Head of Department, CSE", "Dean, Academic Affairs"],
    adminExperience: ["Member of Academic Council", "Coordinator for various national level projects", "Head, IT Infrastructure"],
    researchSupervision: ["Guided 15+ Ph.D. scholars", "Supervised 100+ M.Tech projects"],
    researchProjects: ["Intelligent Systems for Rural Development", "Data Mining in Healthcare"],
    awards: ["Best Teacher Award", "Distinguished Academician Award"],
    workshops: ["National Seminar on Soft Computing", "Workshop on Big Data Analytics"],
    publications: ["Soft Computing Techniques", "Data Mining and its Applications"],
    bookChapters: ["Chapter on Neural Networks in 'Intelligent Systems'"],
    resumeUrl: "#"
  },
  {
    id: 11,
    name: "Dr. Manjaree Pandit",
    designation: "Professor",
    department: "Electrical Engineering",
    qualification: "Ph.D.",
    experience: "32+ Years",
    specialization: "Power Systems, Optimization",
    email: "mpandit@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Manjaree Pandit is a distinguished professor in Electrical Engineering, specializing in Power Systems and Optimization. She has been a key figure in research and administration at MITS Gwalior.",
    education: ["Ph.D. in Electrical Engineering", "M.E. in Power Systems", "B.E. in Electrical Engineering"],
    workExperience: ["Professor, Electrical Engineering", "Dean, Academic Affairs", "Head, Electrical Engineering"],
    adminExperience: ["Member, Executive Council", "Coordinator, TEQIP projects", "Chairperson, Women Empowerment Cell"],
    researchSupervision: ["Guided 10 Ph.D. students", "Supervised 50+ M.E. projects"],
    researchProjects: ["Power Grid Optimization using AI", "Renewable Energy Integration"],
    awards: ["Excellence in Engineering Education", "Fellow of IEI"],
    workshops: ["International Workshop on Smart Grids", "Seminar on Power System Stability"],
    publications: ["Optimization in Power Systems", "Modern Power Grid Management"],
    bookChapters: ["Chapter on AI in Power Systems in 'Smart Grid Technologies'"],
    resumeUrl: "#"
  },
  {
    id: 12,
    name: "Dr. P. K. Singhal",
    designation: "Professor",
    department: "Electronics Engineering",
    qualification: "Ph.D.",
    experience: "29+ Years",
    specialization: "Antenna Design, Microwave Engineering",
    email: "pksinghal@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop",
    about: "Dr. P. K. Singhal is an expert in Antenna Design and Microwave Engineering. He has published extensively in international journals and has been involved in several high-profile research projects.",
    education: ["Ph.D. in Electronics Engineering", "M.Tech in Microwave Engineering", "B.E. in Electronics"],
    workExperience: ["Professor, Electronics Engineering", "Head, Electronics Department", "Consultant for Telecom Industry"],
    adminExperience: ["Dean, Research & Development", "Coordinator, AICTE projects", "Head, Central Library"],
    researchSupervision: ["Guided 12 Ph.D. scholars", "Supervised 60+ M.Tech projects"],
    researchProjects: ["Microstrip Antenna for 5G", "Microwave Imaging for Medical Diagnosis"],
    awards: ["Best Researcher Award", "Senior Member IEEE"],
    workshops: ["Workshop on Antenna Design", "Seminar on Microwave Engineering"],
    publications: ["Antenna and Wave Propagation", "Microwave Devices and Circuits"],
    bookChapters: ["Chapter on 5G Antennas in 'Next Gen Communications'"],
    resumeUrl: "#"
  },
  {
    id: 13,
    name: "Dr. Vandana Vikas Thakare",
    designation: "Professor",
    department: "Electronics Engineering",
    qualification: "Ph.D.",
    experience: "25+ Years",
    specialization: "Digital Signal Processing, VLSI",
    email: "vvthakare@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Vandana Vikas Thakare specializes in Digital Signal Processing and VLSI Design. Her research focuses on low-power VLSI architectures and advanced signal processing algorithms.",
    education: ["Ph.D. in Electronics", "M.E. in Digital Communication", "B.E. in Electronics"],
    workExperience: ["Professor, Electronics Engineering", "In-charge, VLSI Lab", "Assistant Professor, MITS"],
    adminExperience: ["Member, Academic Council", "Coordinator, Cultural Committee", "Head, Student Grievance Cell"],
    researchSupervision: ["Guided 6 Ph.D. students", "Supervised 40+ M.E. projects"],
    researchProjects: ["Low Power VLSI Design for IoT", "Advanced DSP for Audio Processing"],
    awards: ["Distinguished Woman Engineer Award", "Best Paper Award at IEEE Conference"],
    workshops: ["Workshop on VLSI Design", "Seminar on Digital Signal Processing"],
    publications: ["Digital Signal Processing Fundamentals", "VLSI Design Principles"],
    bookChapters: ["Chapter on Low Power VLSI in 'Modern Electronics'"],
    resumeUrl: "#"
  },
  {
    id: 14,
    name: "Dr. Manish Sagar",
    designation: "Professor",
    department: "Mechanical Engineering",
    qualification: "Ph.D.",
    experience: "23+ Years",
    specialization: "Manufacturing Science, Robotics",
    email: "manishsagar@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Manish Sagar is an expert in Manufacturing Science and Robotics. He has been instrumental in setting up the Robotics lab at MITS Gwalior and has worked on several industrial automation projects.",
    education: ["Ph.D. in Mechanical Engineering", "M.Tech in Manufacturing", "B.E. in Mechanical Engineering"],
    workExperience: ["Professor, Mechanical Engineering", "Head, Robotics Lab", "Industrial Consultant"],
    adminExperience: ["Dean, Students Welfare", "Coordinator, Industry-Institute Interaction", "Head, Central Workshop"],
    researchSupervision: ["Guided 5 Ph.D. scholars", "Supervised 30+ M.Tech projects"],
    researchProjects: ["Robotic Arms for Industrial Automation", "Advanced Manufacturing Processes"],
    awards: ["Excellence in Mechanical Engineering", "Best Faculty Award 2021"],
    workshops: ["Workshop on Robotics and Automation", "Seminar on Advanced Manufacturing"],
    publications: ["Manufacturing Science and Technology", "Introduction to Robotics"],
    bookChapters: ["Chapter on Industrial Robotics in 'Manufacturing Trends'"],
    resumeUrl: "#"
  },
  {
    id: 15,
    name: "Dr. Anjali S. Patil",
    designation: "Associate Professor",
    department: "Architecture & Planning",
    qualification: "Ph.D., M.Arch",
    experience: "16+ Years",
    specialization: "Landscape Architecture, Environmental Design",
    email: "anjalipatil@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Anjali S. Patil is an expert in Landscape Architecture and Environmental Design. Her work emphasizes the integration of natural elements into urban spaces for enhanced sustainability.",
    education: ["Ph.D. in Architecture", "M.Arch in Landscape Architecture", "B.Arch"],
    workExperience: ["Associate Professor, Architecture", "Landscape Consultant", "Assistant Professor, MITS"],
    adminExperience: ["In-charge, Departmental Library", "Member, Campus Beautification Committee"],
    researchSupervision: ["Supervising 2 Ph.D. scholars", "Guided 15+ M.Arch projects"],
    researchProjects: ["Urban Green Spaces and Mental Health", "Sustainable Landscaping in Semi-Arid Regions"],
    awards: ["Best Landscape Design Award", "Young Architect Award"],
    workshops: ["Workshop on Sustainable Urbanism", "Seminar on Environmental Design"],
    publications: ["Landscape Architecture Principles", "Green Cities for Tomorrow"],
    bookChapters: ["Chapter on Urban Ecology in 'Sustainable Architecture'"],
    resumeUrl: "#"
  },
  {
    id: 16,
    name: "Dr. Sarita S. Bhadauria",
    designation: "Professor",
    department: "Electrical Engineering",
    qualification: "Ph.D.",
    experience: "27+ Years",
    specialization: "Power Electronics, Electric Vehicles",
    email: "saritabhadauria@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Sarita S. Bhadauria is a specialist in Power Electronics and its applications in Electric Vehicles. She is actively involved in research related to EV charging infrastructure and battery management systems.",
    education: ["Ph.D. in Electrical Engineering", "M.E. in Power Electronics", "B.E. in Electrical Engineering"],
    workExperience: ["Professor, Electrical Engineering", "Head, EV Research Cell", "Industrial Consultant for EV Startups"],
    adminExperience: ["Dean, Faculty Welfare", "Coordinator, Skill Development Center"],
    researchSupervision: ["Guided 9 Ph.D. scholars", "Supervised 40+ M.E. projects"],
    researchProjects: ["Fast Charging Solutions for EVs", "Battery Management Systems for Lithium-ion Batteries"],
    awards: ["Innovation in EV Technology Award", "Senior Member IEEE"],
    workshops: ["Workshop on Electric Vehicle Technology", "Seminar on Power Electronics Applications"],
    publications: ["Power Electronics for Electric Vehicles", "Advanced Battery Management"],
    bookChapters: ["Chapter on EV Charging in 'Modern Transportation'"],
    resumeUrl: "#"
  },
  {
    id: 17,
    name: "Dr. Sunita Varma",
    designation: "Professor",
    department: "Applied Science",
    qualification: "Ph.D. (Mathematics)",
    experience: "24+ Years",
    specialization: "Numerical Analysis, Fluid Dynamics",
    email: "sunitavarma@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Sunita Varma is a professor of Mathematics with expertise in Numerical Analysis and Fluid Dynamics. She has published several research papers in international journals of repute.",
    education: ["Ph.D. in Mathematics", "M.Sc. in Mathematics", "B.Sc."],
    workExperience: ["Professor, Applied Science", "Head, Mathematics Department", "Visiting Professor at various Universities"],
    adminExperience: ["Dean, Academic Affairs", "Member, Board of Studies"],
    researchSupervision: ["Guided 6 Ph.D. students", "Supervised 20+ M.Sc. projects"],
    researchProjects: ["Numerical Simulation of Fluid Flow", "Mathematical Modeling of Biological Systems"],
    awards: ["Best Teacher in Applied Science", "Excellence in Research Award"],
    workshops: ["Workshop on Numerical Methods", "Seminar on Applied Mathematics"],
    publications: ["Numerical Analysis for Engineers", "Fluid Dynamics Fundamentals"],
    bookChapters: ["Chapter on Mathematical Modeling in 'Scientific Computing'"],
    resumeUrl: "#"
  },
  {
    id: 18,
    name: "Dr. Abhay Mishra",
    designation: "Associate Professor",
    department: "Applied Science",
    qualification: "Ph.D. (Physics)",
    experience: "19+ Years",
    specialization: "Material Science, Nanotechnology",
    email: "abhaymishra@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Abhay Mishra focuses on Material Science and Nanotechnology. His research involves the synthesis and characterization of nanomaterials for various engineering applications.",
    education: ["Ph.D. in Physics", "M.Sc. in Physics", "B.Sc."],
    workExperience: ["Associate Professor, Physics", "In-charge, Nanotechnology Lab", "Research Scientist at CSIR Lab"],
    adminExperience: ["Member, Research Advisory Committee", "Coordinator, Science Club"],
    researchSupervision: ["Supervising 3 Ph.D. scholars", "Guided 15+ M.Sc. projects"],
    researchProjects: ["Synthesis of Graphene-based Nanocomposites", "Nanomaterials for Solar Cells"],
    awards: ["Young Scientist Award in Physics", "Best Research Paper Award"],
    workshops: ["Workshop on Nanotechnology", "Seminar on Material Science"],
    publications: ["Introduction to Nanotechnology", "Physics of Materials"],
    bookChapters: ["Chapter on Nanocomposites in 'Advanced Materials'"],
    resumeUrl: "#"
  },
  {
    id: 19,
    name: "Dr. Shourabh Bhattacharya",
    designation: "Assistant Professor",
    department: "Biotechnology",
    qualification: "Ph.D.",
    experience: "10+ Years",
    specialization: "Bioinformatics, Genetic Engineering",
    email: "shourabh@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Shourabh Bhattacharya is a young researcher in Biotechnology, specializing in Bioinformatics and Genetic Engineering. He is passionate about using computational tools to solve biological problems.",
    education: ["Ph.D. in Biotechnology", "M.Tech in Bioinformatics", "B.Tech in Biotechnology"],
    workExperience: ["Assistant Professor, Biotechnology", "Postdoctoral Fellow", "Bioinformatics Analyst"],
    adminExperience: ["In-charge, Bioinformatics Lab", "Member, Training & Placement Cell"],
    researchSupervision: ["Supervising 1 Ph.D. student", "Guided 10+ B.Tech projects"],
    researchProjects: ["Computational Drug Discovery", "Genome Sequence Analysis"],
    awards: ["Best Young Faculty Award", "Qualified GATE and NET"],
    workshops: ["Workshop on Bioinformatics Tools", "Seminar on Genetic Engineering"],
    publications: ["Bioinformatics: Methods and Applications", "Genomics and Proteomics"],
    bookChapters: ["Chapter on Drug Design in 'Biotechnology Advances'"],
    resumeUrl: "#"
  },
  {
    id: 20,
    name: "Dr. Anupama Agarwal",
    designation: "Associate Professor",
    department: "Chemical Engineering",
    qualification: "Ph.D.",
    experience: "17+ Years",
    specialization: "Process Control, Waste Management",
    email: "anupama@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Anupama Agarwal is an expert in Process Control and Waste Management in Chemical Engineering. Her research focuses on developing sustainable processes for industrial waste treatment.",
    education: ["Ph.D. in Chemical Engineering", "M.Tech in Chemical Engineering", "B.E. in Chemical Engineering"],
    workExperience: ["Associate Professor, Chemical Engineering", "Process Engineer in Industry", "Assistant Professor, MITS"],
    adminExperience: ["In-charge, Process Control Lab", "Member, Environmental Committee"],
    researchSupervision: ["Supervising 2 Ph.D. scholars", "Guided 20+ B.E. projects"],
    researchProjects: ["Industrial Wastewater Treatment", "Optimization of Chemical Processes"],
    awards: ["Excellence in Chemical Engineering Education", "Best Paper Award"],
    workshops: ["Workshop on Waste Management", "Seminar on Process Control"],
    publications: ["Chemical Process Control", "Sustainable Waste Management"],
    bookChapters: ["Chapter on Industrial Waste in 'Environmental Engineering'"],
    resumeUrl: "#"
  },
  {
    id: 21,
    name: "Dr. Vandana Vikas Thakare",
    designation: "Professor",
    department: "Electronics & Telecommunication Engineering",
    qualification: "Ph.D.",
    experience: "24+ Years",
    specialization: "Communication Systems, Signal Processing",
    email: "vandana@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Vandana Vikas Thakare is a specialist in wireless communication and signal processing. She has led several research projects funded by national agencies.",
    education: ["Ph.D. in Electronics & Telecommunication", "M.Tech in Communication", "B.E. in ETC"],
    workExperience: ["Professor, ETC Department", "Head, Communication Lab", "Research Scientist"],
    adminExperience: ["Dean, Faculty Welfare", "Member, Academic Council"],
    researchSupervision: ["Guided 5 Ph.D. scholars", "Supervised 30+ M.Tech projects"],
    researchProjects: ["5G Network Optimization", "Cognitive Radio Networks"],
    awards: ["Distinguished Faculty Award", "IETE Fellow"],
    workshops: ["Workshop on 5G Technologies", "Seminar on Signal Processing"],
    publications: ["Wireless Communication Systems", "Advanced Signal Processing"],
    bookChapters: ["Chapter on 5G in 'Modern Communication'"],
    resumeUrl: "#"
  },
  {
    id: 22,
    name: "Dr. C. S. Malvi",
    designation: "Professor",
    department: "Automobile Engineering",
    qualification: "Ph.D.",
    experience: "22+ Years",
    specialization: "Solar Energy, Thermal Engineering",
    email: "csmalvi@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    about: "Dr. C. S. Malvi is an expert in solar energy applications in automobile engineering. He has developed several prototypes of solar-powered vehicles.",
    education: ["Ph.D. in Mechanical Engineering", "M.Tech in Thermal", "B.E. in Mechanical"],
    workExperience: ["Professor, Automobile Engineering", "Head, Solar Energy Research Center", "Industrial Consultant"],
    adminExperience: ["Dean, Research & Development", "Coordinator, Entrepreneurship Cell"],
    researchSupervision: ["Guided 4 Ph.D. scholars", "Supervised 25+ M.Tech projects"],
    researchProjects: ["Solar Powered Electric Vehicles", "Thermal Management of Batteries"],
    awards: ["Innovation in Green Energy Award", "Best Researcher Award"],
    workshops: ["Workshop on EV Technology", "Seminar on Solar Energy"],
    publications: ["Solar Energy in Transportation", "Thermal Engineering Principles"],
    bookChapters: ["Chapter on EVs in 'Sustainable Mobility'"],
    resumeUrl: "#"
  },
  {
    id: 23,
    name: "Dr. R. K. Gupta",
    designation: "Professor",
    department: "Artificial Intelligence",
    qualification: "Ph.D. (CSE)",
    experience: "21+ Years",
    specialization: "Machine Learning, Deep Learning",
    email: "rkgupta@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    about: "Dr. R. K. Gupta is a leading researcher in Artificial Intelligence. His work focuses on deep learning architectures and their applications in computer vision.",
    education: ["Ph.D. in Computer Science", "M.Tech in AI", "B.E. in CSE"],
    workExperience: ["Professor, AI Department", "Head, AI Research Lab", "Senior Data Scientist"],
    adminExperience: ["Dean, Academic Affairs", "Member, Board of Studies"],
    researchSupervision: ["Guided 6 Ph.D. scholars", "Supervised 35+ M.Tech projects"],
    researchProjects: ["Deep Learning for Medical Imaging", "Autonomous Navigation Systems"],
    awards: ["AI Excellence Award", "Senior Member ACM"],
    workshops: ["Workshop on Deep Learning", "Seminar on AI Ethics"],
    publications: ["Foundations of Machine Learning", "Deep Learning Applications"],
    bookChapters: ["Chapter on Neural Networks in 'AI Handbook'"],
    resumeUrl: "#"
  },
  {
    id: 24,
    name: "Dr. Sunita Sharma",
    designation: "Professor",
    department: "Artificial Intelligence & Data Science",
    qualification: "Ph.D.",
    experience: "20+ Years",
    specialization: "Big Data Analytics, Data Science",
    email: "sunita@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Sunita Sharma specializes in Big Data Analytics and Data Science. She has worked on several projects involving large-scale data processing and predictive modeling.",
    education: ["Ph.D. in Data Science", "M.Tech in IT", "B.E. in IT"],
    workExperience: ["Professor, AI & DS Department", "Head, Data Analytics Lab", "Data Consultant"],
    adminExperience: ["Dean, Students Welfare", "Coordinator, Industry-Institute Interaction"],
    researchSupervision: ["Guided 4 Ph.D. scholars", "Supervised 20+ M.Tech projects"],
    researchProjects: ["Predictive Analytics for Smart Cities", "Big Data in Healthcare"],
    awards: ["Data Scientist of the Year", "Excellence in Research"],
    workshops: ["Workshop on Big Data", "Seminar on Data Visualization"],
    publications: ["Data Science for Engineers", "Big Data Analytics Trends"],
    bookChapters: ["Chapter on Predictive Modeling in 'Data Science Handbook'"],
    resumeUrl: "#"
  },
  {
    id: 25,
    name: "Dr. Karuna Markam",
    designation: "Associate Professor",
    department: "Internet of Things",
    qualification: "Ph.D.",
    experience: "15+ Years",
    specialization: "Sensor Networks, IoT Security",
    email: "karuna@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Karuna Markam is an expert in Internet of Things and Sensor Networks. Her research focuses on secure communication protocols for IoT devices.",
    education: ["Ph.D. in IoT", "M.Tech in Embedded Systems", "B.E. in Electronics"],
    workExperience: ["Associate Professor, IoT Department", "In-charge, IoT Lab", "Network Engineer"],
    adminExperience: ["Member, Research Advisory Committee", "Coordinator, Tech Fest"],
    researchSupervision: ["Supervising 2 Ph.D. scholars", "Guided 15+ M.Tech projects"],
    researchProjects: ["Secure IoT Architectures", "Smart Agriculture using IoT"],
    awards: ["Young Researcher Award", "Best Paper Award"],
    workshops: ["Workshop on IoT Security", "Seminar on Smart Systems"],
    publications: ["Introduction to IoT", "Sensor Network Protocols"],
    bookChapters: ["Chapter on IoT Security in 'Connected World'"],
    resumeUrl: "#"
  },
  {
    id: 26,
    name: "Dr. Rajeev Singh",
    designation: "Professor",
    department: "Computer Science & Technology",
    qualification: "Ph.D.",
    experience: "22+ Years",
    specialization: "Cloud Computing, Distributed Systems",
    email: "rajeev@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Rajeev Singh is a specialist in Cloud Computing and Distributed Systems. He has published numerous papers on cloud resource management and virtualization.",
    education: ["Ph.D. in Computer Science", "M.Tech in CSE", "B.E. in CSE"],
    workExperience: ["Professor, CST Department", "Head, Cloud Computing Lab", "IT Consultant"],
    adminExperience: ["Dean, Academic Affairs", "Member, Academic Council"],
    researchSupervision: ["Guided 5 Ph.D. scholars", "Supervised 25+ M.Tech projects"],
    researchProjects: ["Cloud Resource Optimization", "Distributed Ledger Technologies"],
    awards: ["Excellence in Teaching", "Senior Member IEEE"],
    workshops: ["Workshop on Cloud Technologies", "Seminar on Distributed Systems"],
    publications: ["Cloud Computing Principles", "Distributed Systems Architecture"],
    bookChapters: ["Chapter on Virtualization in 'Cloud Handbook'"],
    resumeUrl: "#"
  },
  {
    id: 27,
    name: "Dr. Anjali Patil",
    designation: "Professor",
    department: "Artificial Intelligence & Machine Learning",
    qualification: "Ph.D.",
    experience: "19+ Years",
    specialization: "Deep Learning, Computer Vision",
    email: "anjali@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Anjali Patil is an expert in Deep Learning and Computer Vision. She has developed several AI models for real-time object detection and recognition.",
    education: ["Ph.D. in AI", "M.Tech in CSE", "B.E. in CSE"],
    workExperience: ["Professor, AI & ML Department", "Head, Computer Vision Lab", "AI Consultant"],
    adminExperience: ["Member, Academic Council", "Coordinator, Women in Tech"],
    researchSupervision: ["Guided 3 Ph.D. scholars", "Supervised 20+ M.Tech projects"],
    researchProjects: ["Real-time Traffic Monitoring using AI", "Deep Learning for Gesture Recognition"],
    awards: ["Best Research Paper Award", "Excellence in AI Education"],
    workshops: ["Workshop on Computer Vision", "Seminar on Deep Learning"],
    publications: ["Deep Learning for Vision", "Advanced Machine Learning"],
    bookChapters: ["Chapter on CNNs in 'AI Trends'"],
    resumeUrl: "#"
  },
  {
    id: 28,
    name: "Dr. Manish Dixit",
    designation: "Professor",
    department: "Computer Science & Design",
    qualification: "Ph.D.",
    experience: "25+ Years",
    specialization: "Human-Computer Interaction, UI/UX",
    email: "manish@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Manish Dixit combines computer science with design principles. He is a pioneer in HCI research in the region and has designed several user-centric software systems.",
    education: ["Ph.D. in CSE", "M.Des in Interaction Design", "B.E. in CSE"],
    workExperience: ["Professor, CS & Design Department", "Head, HCI Lab", "UX Consultant"],
    adminExperience: ["Dean, Academic Affairs", "Coordinator, Design Thinking Cell"],
    researchSupervision: ["Guided 6 Ph.D. scholars", "Supervised 40+ M.Tech projects"],
    researchProjects: ["Accessible Interfaces for Elderly", "Augmented Reality in Education"],
    awards: ["Design Innovation Award", "Senior Member IEEE"],
    workshops: ["Workshop on UI/UX Design", "Seminar on HCI"],
    publications: ["Human-Computer Interaction", "User Experience Design"],
    bookChapters: ["Chapter on Interaction Design in 'Digital Design'"],
    resumeUrl: "#"
  },
  {
    id: 29,
    name: "Dr. R. S. Jadon",
    designation: "Professor",
    department: "Computer Science & Business Systems",
    qualification: "Ph.D.",
    experience: "28+ Years",
    specialization: "Enterprise Systems, Business Analytics",
    email: "rsjadon@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    about: "Dr. R. S. Jadon focuses on the integration of technology and business. He has extensive experience in enterprise resource planning and business intelligence systems.",
    education: ["Ph.D. in CSE", "MBA in IT Management", "B.E. in CSE"],
    workExperience: ["Professor, CS & Business Systems", "Head, Enterprise Lab", "Business Consultant"],
    adminExperience: ["Dean, Research & Development", "Member, Executive Council"],
    researchSupervision: ["Guided 10+ Ph.D. scholars", "Supervised 50+ M.Tech projects"],
    researchProjects: ["ERP Implementation Strategies", "Business Intelligence for SMEs"],
    awards: ["Best Academician Award", "Fellow of CSI"],
    workshops: ["Workshop on Business Analytics", "Seminar on Enterprise Systems"],
    publications: ["Enterprise Resource Planning", "Business Intelligence Systems"],
    bookChapters: ["Chapter on Tech Management in 'Business Systems'"],
    resumeUrl: "#"
  },
  {
    id: 30,
    name: "Dr. Vikas Shinde",
    designation: "Professor",
    department: "Mathematics & Computing",
    qualification: "Ph.D.",
    experience: "20+ Years",
    specialization: "Computational Mathematics, Algorithms",
    email: "vikas@mitsgwalior.in",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    about: "Dr. Vikas Shinde works at the intersection of mathematics and computing. His research involves developing efficient algorithms for complex mathematical problems.",
    education: ["Ph.D. in Mathematics", "M.Tech in Computing", "B.Sc."],
    workExperience: ["Professor, Mathematics & Computing", "Head, Algorithm Lab", "Visiting Researcher"],
    adminExperience: ["Dean, Academic Affairs", "Member, Board of Studies"],
    researchSupervision: ["Guided 4 Ph.D. scholars", "Supervised 20+ M.Tech projects"],
    researchProjects: ["Numerical Methods for Engineering", "Algorithm Optimization"],
    awards: ["Excellence in Mathematics", "Best Research Paper Award"],
    workshops: ["Workshop on Computational Mathematics", "Seminar on Algorithms"],
    publications: ["Computational Mathematics", "Design and Analysis of Algorithms"],
    bookChapters: ["Chapter on Numerical Analysis in 'Computing Handbook'"],
    resumeUrl: "#"
  }
];

export const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
  const [filterDept, setFilterDept] = useState('All');

  const departments = ['All', ...new Set(FACULTY_DATA.map(f => f.department))];

  const filteredFaculty = FACULTY_DATA.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === 'All' || f.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-[#fdfcf0] py-24 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Faculty Profiles" 
        description="Meet the highly qualified and experienced faculty members at MITS Gwalior across various departments."
      />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Faculty Profiles</h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto">
            Meet our distinguished faculty members who are dedicated to academic excellence and research innovation.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setFilterDept(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  filterDept === dept ? 'bg-black text-white' : 'bg-white border border-black/10 hover:bg-black/5'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
            <input 
              type="text"
              placeholder="Search by name or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFaculty.map((faculty, i) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedFaculty(faculty)}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-black/5 hover:border-orange-500/20 transition-all cursor-pointer hover:shadow-2xl hover:shadow-orange-900/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    View Profile <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-serif text-xl group-hover:text-orange-600 transition-colors">{faculty.name}</h3>
                </div>
                <p className="text-sm font-medium text-orange-600 mb-2">{faculty.designation}</p>
                <p className="text-xs text-black/50 uppercase tracking-wider">{faculty.department}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Detail Modal */}
        <AnimatePresence>
          {selectedFaculty && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedFaculty(null)}
                  className="absolute top-6 right-6 p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 bg-black text-white p-8 md:p-12 space-y-8">
                    <div className="aspect-square rounded-3xl overflow-hidden mb-8">
                      <img 
                        src={selectedFaculty.image} 
                        alt={selectedFaculty.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl mb-2">{selectedFaculty.name}</h2>
                      <p className="text-xl text-orange-400 font-medium">{selectedFaculty.designation}</p>
                      <p className="text-white/50 uppercase tracking-widest text-xs mt-1">{selectedFaculty.department}</p>
                    </div>

                    <div className="space-y-6 pt-8 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider font-bold opacity-50">Qualification</p>
                          <p className="text-sm font-medium">{selectedFaculty.qualification}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <BookOpen className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider font-bold opacity-50">Specialization</p>
                          <p className="text-sm font-medium">{selectedFaculty.specialization}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Award className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider font-bold opacity-50">Experience</p>
                          <p className="text-sm font-medium">{selectedFaculty.experience}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 space-y-4">
                      <a href={`mailto:${selectedFaculty.email}`} className="flex items-center justify-center gap-2 w-full py-4 bg-orange-500 text-black font-bold rounded-2xl hover:bg-orange-400 transition-colors">
                        <Mail className="w-4 h-4" /> Email Me
                      </a>
                      <a href={selectedFaculty.resumeUrl} className="flex items-center justify-center gap-2 w-full py-4 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
                        <FileText className="w-4 h-4" /> Complete Resume
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-8 md:p-16 space-y-12 overflow-y-auto max-h-[90vh]">
                    <section>
                      <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                        <User className="w-6 h-6 text-orange-600" /> About Faculty
                      </h3>
                      <p className="text-black/70 leading-relaxed">{selectedFaculty.about}</p>
                    </section>

                    <div className="grid sm:grid-cols-2 gap-12">
                      <section>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                          <GraduationCap className="w-5 h-5 text-orange-600" /> Education
                        </h3>
                        <ul className="space-y-3">
                          {selectedFaculty.education.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-black/70 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                          <Briefcase className="w-5 h-5 text-orange-600" /> Work Experience
                        </h3>
                        <ul className="space-y-3">
                          {selectedFaculty.workExperience.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-black/70 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <section>
                      <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                        <Shield className="w-5 h-5 text-orange-600" /> Administrative Experience
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {selectedFaculty.adminExperience.map((item, idx) => (
                          <li key={idx} className="p-4 bg-black/5 rounded-2xl text-sm text-black/70">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <div className="grid sm:grid-cols-2 gap-12">
                      <section>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                          <Users className="w-5 h-5 text-orange-600" /> Research Supervision
                        </h3>
                        <ul className="space-y-3">
                          {selectedFaculty.researchSupervision.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-black/70 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                          <Lightbulb className="w-5 h-5 text-orange-600" /> Research & Consultancy
                        </h3>
                        <ul className="space-y-3">
                          {selectedFaculty.researchProjects.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-black/70 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <section>
                      <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-orange-600" /> Honors & Awards
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedFaculty.awards.map((item, idx) => (
                          <span key={idx} className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-xs font-bold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-orange-600" /> Workshops & Conferences
                      </h3>
                      <ul className="space-y-3">
                        {selectedFaculty.workshops.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-black/70 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <div className="grid sm:grid-cols-2 gap-12">
                      <section>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                          <FileCode className="w-5 h-5 text-orange-600" /> Publications
                        </h3>
                        <ul className="space-y-3">
                          {selectedFaculty.publications.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-black/70 text-sm italic">
                              "{item}"
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                          <Book className="w-5 h-5 text-orange-600" /> Book Chapters
                        </h3>
                        <ul className="space-y-3">
                          {selectedFaculty.bookChapters.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-black/70 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
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
