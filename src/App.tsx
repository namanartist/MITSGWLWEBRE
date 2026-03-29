import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { Department } from './pages/Department';
import { NoticeBoard } from './pages/NoticeBoard';
import { GenericPage } from './pages/GenericPage';
import { Tenders } from './pages/Tenders';
import { Careers } from './pages/Careers';
import { Faculty } from './pages/Faculty';
import { Events } from './pages/Events';
import { AcademicCalendar } from './pages/AcademicCalendar';
import { Library } from './pages/Library';
import { Research } from './pages/Research';
import { Placements } from './pages/Placements';
import { StudentLife } from './pages/StudentLife';
import { Hostels } from './pages/Hostels';
import { Contact } from './pages/Contact';
import { Syllabus } from './pages/Syllabus';
import { Schemes } from './pages/Schemes';
import { TimeTable } from './pages/TimeTable';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="academics" element={<Academics />} />
            <Route path="academic-calendar" element={<AcademicCalendar />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="schemes" element={<Schemes />} />
            <Route path="timetable" element={<TimeTable />} />
            <Route path="department/:id" element={<Department />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="student-life" element={<StudentLife />} />
            <Route path="placements" element={<Placements />} />
            <Route path="research" element={<Research />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<GenericPage title="Student Login Portal" />} />
            <Route path="notice-board" element={<NoticeBoard />} />
            <Route path="resources" element={<GenericPage title="Resources" />} />
            <Route path="student-portal" element={<GenericPage title="Student Portal" />} />
            <Route path="library" element={<Library />} />
            <Route path="hostels" element={<Hostels />} />
            <Route path="tenders" element={<Tenders />} />
            <Route path="careers" element={<Careers />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="events" element={<Events />} />
            <Route path="quick-links" element={<GenericPage title="Quick Links" />} />
            <Route path="aicte" element={<GenericPage title="AICTE" />} />
            <Route path="ugc-disclosure" element={<GenericPage title="UGC Disclosure" />} />
            <Route path="nirf-ranking" element={<GenericPage title="NIRF Ranking" />} />
            <Route path="alumni-portal" element={<GenericPage title="Alumni Portal" />} />
            <Route path="employee-portal" element={<GenericPage title="Employee Portal" />} />
            <Route path="anti-ragging" element={<GenericPage title="Anti-Ragging" />} />
            <Route path="code-of-conduct" element={<GenericPage title="Code of Conduct" />} />
            <Route path="naac-reports" element={<GenericPage title="NAAC Reports" />} />
            <Route path="academic-sops" element={<GenericPage title="Academic SOPs" />} />
            <Route path="rti-information" element={<GenericPage title="RTI Information" />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
