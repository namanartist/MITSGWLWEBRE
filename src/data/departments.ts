import { Building2, Settings, Zap, Cpu, FlaskConical, Code, Database, Network, Car, Brain, BrainCircuit, Bot, PenTool, Briefcase, Wifi, Calculator, Laptop, LucideIcon } from 'lucide-react';

export interface DepartmentData {
  id: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  about: string;
  vision: string;
  mission: string[];
  hod: {
    name: string;
    specialization: string;
    researchInterest?: string;
  };
  labs: string[];
  achievements: string[];
  brochureUrl?: string;
  curriculum?: { year: string; subjects: string[] }[];
  faculty?: {
    name: string;
    role: string;
    specialization: string;
    researchInterest: string;
    social?: { linkedin?: string; twitter?: string; mail?: string };
  }[];
  researchAreas?: string[];
  relatedDepartments?: string[];
}

export const DEPARTMENTS: DepartmentData[] = [
  { 
    id: 'civil', 
    name: 'Civil Engineering', 
    icon: Building2, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Department of Civil Engineering is committed to producing engineers capable of designing, building, and maintaining the physical and naturally built environment. We focus on sustainable infrastructure and modern construction technologies.',
    vision: 'To be a premier center for civil engineering education, research, and professional practice, contributing to sustainable national development.',
    mission: [
      'Impart quality education and develop technical skills in civil engineering.',
      'Promote innovative research and consultancy in infrastructure development.',
      'Instill professional ethics and a sense of social responsibility in students.'
    ],
    hod: { name: 'Dr. M. K. Trivedi', specialization: 'Structural Engineering' },
    labs: ['Structural Engineering Lab', 'Geotechnical Engineering Lab', 'Environmental Engineering Lab', 'Transportation Engineering Lab'],
    achievements: ['Received ₹50 Lakhs grant for advanced concrete research.', 'Students won 1st prize in National Bridge Design Competition.', 'Published 20+ papers in peer-reviewed journals this year.']
  },
  { 
    id: 'mechanical', 
    name: 'Mechanical Engineering', 
    icon: Settings, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Mechanical Engineering department focuses on the principles of engineering, physics, and materials science for the design, analysis, manufacturing, and maintenance of mechanical systems.',
    vision: 'To be recognized globally for excellence in mechanical engineering education, research, and innovation.',
    mission: [
      'Provide a strong foundation in mechanical engineering principles.',
      'Foster innovation, research, and entrepreneurial skills.',
      'Develop professionals with ethical values and leadership qualities.'
    ],
    hod: { name: 'Dr. Manish Sagar', specialization: 'Thermal Engineering' },
    labs: ['CAD/CAM Lab', 'Thermodynamics Lab', 'Fluid Mechanics Lab', 'Robotics and Automation Lab'],
    achievements: ['Developed a novel solar-powered cooling system.', 'Signed MoU with Tata Motors for student internships.', 'Hosted International Conference on Advanced Manufacturing.']
  },
  { 
    id: 'electrical', 
    name: 'Electrical Engineering', 
    icon: Zap, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Department of Electrical Engineering offers a comprehensive curriculum covering power systems, control systems, electronics, and renewable energy technologies.',
    vision: 'To emerge as a center of excellence in electrical engineering, producing globally competent and socially responsible engineers.',
    mission: [
      'Deliver high-quality education in electrical engineering.',
      'Conduct cutting-edge research in power systems and renewable energy.',
      'Promote industry-institute interaction for practical exposure.'
    ],
    hod: { name: 'Dr. Sulochana Wadhwani', specialization: 'Power Systems' },
    labs: ['Power System Lab', 'Control System Lab', 'Electrical Machines Lab', 'Renewable Energy Lab'],
    achievements: ['Established a Smart Grid Research Center.', 'Secured funding for electric vehicle charging infrastructure project.', 'Students secured top ranks in GATE examination.']
  },
  { 
    id: 'electronics', 
    name: 'Electronics Engineering', 
    icon: Cpu, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Electronics Engineering department equips students with the knowledge and skills required to design and develop electronic circuits, communication systems, and embedded systems.',
    vision: 'To be a leading department in electronics engineering, fostering innovation and producing highly skilled professionals.',
    mission: [
      'Provide a rigorous academic environment for learning electronics.',
      'Encourage research in VLSI, signal processing, and communication.',
      'Develop problem-solving skills and ethical values.'
    ],
    hod: { name: 'Dr. Rekha Gupta', specialization: 'VLSI Design' },
    labs: ['VLSI Design Lab', 'Embedded Systems Lab', 'Analog Electronics Lab', 'Digital Signal Processing Lab'],
    achievements: ['Developed a low-cost IoT-based health monitoring system.', 'Received best paper award at IEEE conference.', 'Alumni placed in top semiconductor companies.']
  },
  { 
    id: 'chemical', 
    name: 'Chemical Engineering', 
    icon: FlaskConical, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Chemical Engineering department focuses on the design, operation, and optimization of chemical processes, emphasizing sustainable and environmentally friendly technologies.',
    vision: 'To be a premier hub for chemical engineering education and research, addressing global challenges in energy and environment.',
    mission: [
      'Impart comprehensive knowledge in chemical engineering principles.',
      'Conduct research in sustainable technologies and advanced materials.',
      'Prepare students for successful careers in the chemical industry.'
    ],
    hod: { name: 'Dr. Srinivas', specialization: 'Process Control' },
    labs: ['Mass Transfer Lab', 'Heat Transfer Lab', 'Chemical Reaction Engineering Lab', 'Process Control Lab'],
    achievements: ['Patented a new method for wastewater treatment.', 'Received research grant from DST.', 'Students won national level Chem-E-Car competition.']
  },
  { 
    id: 'cse', 
    name: 'Computer Science & Engineering', 
    icon: Code, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Computer Science & Engineering department is dedicated to advancing the field of computing through innovative teaching and cutting-edge research in AI, algorithms, and software engineering.',
    vision: 'To be a globally recognized center of excellence in computer science education and research.',
    mission: [
      'Provide a strong foundation in computer science theory and practice.',
      'Foster a culture of innovation, research, and lifelong learning.',
      'Develop ethical and socially responsible computing professionals.'
    ],
    hod: { name: 'Dr. Akhilesh Tiwari', specialization: 'Artificial Intelligence' },
    labs: ['Artificial Intelligence Lab', 'Software Engineering Lab', 'Database Management Lab', 'High-Performance Computing Lab'],
    achievements: ['Established a Center of Excellence in AI.', 'Students selected for Google Summer of Code.', 'Highest number of placements in top tech companies.']
  },
  { 
    id: 'it', 
    name: 'Information Technology', 
    icon: Database, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Information Technology department focuses on the application of computing technology to solve real-world problems, with emphasis on networking, cybersecurity, and data analytics.',
    vision: 'To produce competent IT professionals capable of driving technological advancements and societal progress.',
    mission: [
      'Deliver quality education in information technology.',
      'Promote research in emerging areas like cybersecurity and data science.',
      'Foster industry collaborations and entrepreneurial skills.'
    ],
    hod: { name: 'Dr. Sanjeev Sharma', specialization: 'Cybersecurity' },
    labs: ['Cybersecurity Lab', 'Data Analytics Lab', 'Cloud Computing Lab', 'Network Simulation Lab'],
    achievements: ['Hosted National Cyber Security Hackathon.', 'Developed an IT-based solution for smart campus management.', 'Signed MoU with leading IT firms for training.']
  },
  { 
    id: 'etc', 
    name: 'Electronics & Telecommunication Engineering', 
    icon: Network, 
    desc: 'B.Tech, M.Tech, Ph.D.',
    about: 'The Electronics & Telecommunication Engineering department provides a strong foundation in communication systems, signal processing, and networking technologies.',
    vision: 'To be a center of excellence in electronics and telecommunication, producing innovative engineers and researchers.',
    mission: [
      'Impart in-depth knowledge of communication technologies.',
      'Conduct research in wireless communication and signal processing.',
      'Develop professionals with a global perspective and ethical values.'
    ],
    hod: { name: 'Dr. Vandana Vikas Thakare', specialization: 'Wireless Communication' },
    labs: ['Wireless Communication Lab', 'Optical Communication Lab', 'Microwave Engineering Lab', 'Signal Processing Lab'],
    achievements: ['Received grant for 5G communication research.', 'Students developed a low-cost satellite communication module.', 'Published research in top IEEE communication journals.']
  },
  { 
    id: 'automobile', 
    name: 'Automobile Engineering', 
    icon: Car, 
    desc: 'B.Tech, M.Tech',
    about: 'The Automobile Engineering department focuses on the design, manufacturing, and maintenance of automobiles, with a special emphasis on electric and hybrid vehicles.',
    vision: 'To be a leading center for automobile engineering education and research, contributing to sustainable mobility solutions.',
    mission: [
      'Provide comprehensive education in automobile engineering.',
      'Promote research in electric vehicles and sustainable transportation.',
      'Foster industry-institute partnerships for practical training.'
    ],
    hod: { name: 'Dr. C. S. Malvi', specialization: 'Electric Vehicles' },
    labs: ['Automotive Chassis Lab', 'IC Engine Lab', 'Electric Vehicle Lab', 'Vehicle Dynamics Lab'],
    achievements: ['Students built an award-winning solar-powered car.', 'Established an EV testing facility.', 'Collaborated with major automobile manufacturers for internships.']
  },
  { 
    id: 'ai', 
    name: 'Artificial Intelligence', 
    icon: Brain, 
    desc: 'B.Tech, M.Tech',
    about: 'The Artificial Intelligence department is dedicated to the study and development of intelligent systems, machine learning algorithms, and cognitive computing.',
    vision: 'To be a premier hub for AI education and research, creating intelligent solutions for complex real-world problems.',
    mission: [
      'Impart advanced knowledge in artificial intelligence and machine learning.',
      'Conduct cutting-edge research in AI applications.',
      'Develop ethical AI professionals capable of driving innovation.'
    ],
    hod: { name: 'Dr. R. K. Gupta', specialization: 'Machine Learning' },
    labs: ['Machine Learning Lab', 'Deep Learning Lab', 'Cognitive Computing Lab', 'AI Applications Lab'],
    achievements: ['Developed an AI-based healthcare diagnostic tool.', 'Received funding for AI research in agriculture.', 'Students won international AI hackathons.']
  },
  { 
    id: 'ai-ds', 
    name: 'Artificial Intelligence & Data Science', 
    icon: BrainCircuit, 
    desc: 'B.Tech',
    about: 'This department focuses on the intersection of AI and Data Science, equipping students with skills to extract insights from large datasets and build predictive models.',
    vision: 'To produce leading data scientists and AI engineers capable of transforming data into actionable intelligence.',
    mission: [
      'Provide a strong foundation in data science and AI principles.',
      'Foster research in big data analytics and predictive modeling.',
      'Develop professionals with strong analytical and problem-solving skills.'
    ],
    hod: { name: 'Dr. Sunita Sharma', specialization: 'Data Analytics' },
    labs: ['Big Data Lab', 'Data Visualization Lab', 'Predictive Analytics Lab', 'AI & Data Science Lab'],
    achievements: ['Developed a predictive model for urban traffic management.', 'Collaborated with industry for data-driven research projects.', 'High placement rate in data science roles.']
  },
  { 
    id: 'ai-ml', 
    name: 'Artificial Intelligence & Machine Learning', 
    icon: Bot, 
    desc: 'B.Tech',
    about: 'The AI & ML department specializes in teaching and researching algorithms that allow computers to learn from and make decisions based on data.',
    vision: 'To be a center of excellence in AI and ML, producing experts who can build intelligent systems for the future.',
    mission: [
      'Deliver comprehensive education in machine learning algorithms.',
      'Promote research in deep learning and reinforcement learning.',
      'Prepare students for careers in AI research and development.'
    ],
    hod: { name: 'Dr. Anjali Patil', specialization: 'Deep Learning' },
    labs: ['Reinforcement Learning Lab', 'Computer Vision Lab', 'Natural Language Processing Lab', 'ML Algorithms Lab'],
    achievements: ['Published research on advanced deep learning architectures.', 'Students developed an award-winning NLP application.', 'Established a research group for autonomous systems.']
  },
  { 
    id: 'cs-design', 
    name: 'Computer Science & Design', 
    icon: PenTool, 
    desc: 'B.Tech',
    about: 'This unique program combines computer science with design principles, focusing on human-computer interaction, UI/UX design, and creative computing.',
    vision: 'To produce professionals who can seamlessly blend technology with design to create intuitive and impactful digital experiences.',
    mission: [
      'Impart knowledge in both computer science and design methodologies.',
      'Foster creativity and innovation in software development.',
      'Develop skills in UI/UX design and multimedia technologies.'
    ],
    hod: { name: 'Dr. Manish Dixit', specialization: 'Human-Computer Interaction' },
    labs: ['UI/UX Design Lab', 'Multimedia Lab', 'Creative Computing Lab', 'HCI Research Lab'],
    achievements: ['Students won national design hackathons.', 'Developed an innovative accessible interface for visually impaired users.', 'Collaborations with leading design studios.']
  },
  { 
    id: 'cs-business', 
    name: 'Computer Science & Business Systems', 
    icon: Briefcase, 
    desc: 'B.Tech',
    about: 'Designed in collaboration with industry, this program integrates computer science with business management, preparing students for roles in tech consulting and management.',
    vision: 'To create technology leaders who understand business dynamics and can drive digital transformation.',
    mission: [
      'Provide a balanced education in computer science and business principles.',
      'Develop skills in enterprise software, analytics, and management.',
      'Foster leadership and entrepreneurial qualities.'
    ],
    hod: { name: 'Dr. R. S. Jadon', specialization: 'Enterprise Systems' },
    labs: ['Business Analytics Lab', 'Enterprise Software Lab', 'Financial Technology Lab', 'Tech Management Lab'],
    achievements: ['Program designed in collaboration with TCS.', 'High placement rate in tech consulting roles.', 'Students developed a successful business management software.']
  },
  { 
    id: 'iot', 
    name: 'Internet of Things', 
    icon: Wifi, 
    desc: 'B.Tech',
    about: 'The IoT department focuses on the network of physical objects embedded with sensors, software, and other technologies to connect and exchange data.',
    vision: 'To be a leading center for IoT education and research, creating smart solutions for a connected world.',
    mission: [
      'Impart knowledge in sensor networks, embedded systems, and cloud computing.',
      'Conduct research in smart cities, healthcare, and industrial IoT.',
      'Develop professionals capable of designing end-to-end IoT solutions.'
    ],
    hod: { name: 'Dr. Karuna Markam', specialization: 'Sensor Networks' },
    labs: ['IoT Sensor Lab', 'Smart Systems Lab', 'Embedded IoT Lab', 'Industrial IoT Lab'],
    achievements: ['Developed a smart agriculture monitoring system.', 'Received grant for smart campus IoT project.', 'Collaborated with industry for IoT solutions.']
  },
  { 
    id: 'math-computing', 
    name: 'Mathematics & Computing', 
    icon: Calculator, 
    desc: 'B.Tech, M.Sc',
    about: 'This program bridges the gap between pure mathematics and computer science, focusing on mathematical modeling, algorithms, and computational techniques.',
    vision: 'To produce graduates with strong mathematical foundations and computational skills to solve complex scientific and engineering problems.',
    mission: [
      'Provide rigorous training in mathematics and computer science.',
      'Promote research in computational mathematics and algorithms.',
      'Develop analytical and problem-solving skills.'
    ],
    hod: { name: 'Dr. Vikas Shinde', specialization: 'Computational Mathematics' },
    labs: ['Computational Mathematics Lab', 'Mathematical Modeling Lab', 'Algorithm Design Lab', 'Scientific Computing Lab'],
    achievements: ['Published research in top mathematical journals.', 'Students secured high ranks in national level competitive exams.', 'Developed novel algorithms for complex data analysis.']
  },
  { 
    id: 'it-ai-robotics', 
    name: 'IT (AI & Robotics)', 
    icon: Bot, 
    desc: 'B.Tech',
    about: 'This specialized IT program focuses on the integration of Artificial Intelligence and Robotics, preparing students for the future of automation.',
    vision: 'To be a premier center for education and research in AI-driven robotics and automation.',
    mission: [
      'Impart knowledge in IT, AI, and robotics principles.',
      'Conduct research in autonomous systems and intelligent robotics.',
      'Develop professionals capable of designing smart robotic solutions.'
    ],
    hod: { name: 'Dr. Abhay Mishra', specialization: 'Robotics' },
    labs: ['AI & Robotics Lab', 'Autonomous Systems Lab', 'Robot Vision Lab', 'Automation Lab'],
    achievements: ['Students built an autonomous delivery robot.', 'Received funding for research in swarm robotics.', 'Collaborated with robotics startups for internships.']
  },
  { 
    id: 'ee-iot', 
    name: 'Electrical Engineering (IoT)', 
    icon: Zap, 
    desc: 'B.Tech',
    about: 'This program combines electrical engineering with IoT technologies, focusing on smart grids, connected devices, and intelligent electrical systems.',
    vision: 'To produce electrical engineers equipped with IoT skills to design and manage smart electrical infrastructure.',
    mission: [
      'Provide a strong foundation in electrical engineering and IoT.',
      'Promote research in smart grids and connected electrical systems.',
      'Develop professionals for the modern energy sector.'
    ],
    hod: { name: 'Dr. Shishir Dixit', specialization: 'Smart Grids' },
    labs: ['Smart Grid Lab', 'Electrical IoT Lab', 'Connected Devices Lab', 'Intelligent Systems Lab'],
    achievements: ['Developed an IoT-based energy management system.', 'Received grant for smart grid research.', 'High placement rate in energy and tech sectors.']
  },
  { 
    id: 'cst', 
    name: 'Computer Science & Technology', 
    icon: Laptop, 
    desc: 'B.Tech',
    about: 'The Computer Science & Technology program provides a broad and flexible curriculum covering the latest advancements in computing technologies.',
    vision: 'To produce versatile computer science professionals capable of adapting to rapidly changing technological landscapes.',
    mission: [
      'Deliver a comprehensive education in core and advanced computing technologies.',
      'Foster a culture of continuous learning and innovation.',
      'Prepare students for diverse roles in the tech industry.'
    ],
    hod: { name: 'Dr. Rajeev Singh', specialization: 'Cloud Computing' },
    labs: ['Advanced Computing Lab', 'Cloud Technologies Lab', 'Software Development Lab', 'Emerging Technologies Lab'],
    achievements: ['Students developed a scalable cloud-based application.', 'High participation in open-source projects.', 'Excellent placement record in diverse tech roles.']
  }
];

