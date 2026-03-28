import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// Placeholder components for other routes
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="py-24 px-8 max-w-7xl mx-auto text-center min-h-[60vh] flex flex-col items-center justify-center">
    <h1 className="font-serif text-5xl mb-6">{title}</h1>
    <p className="text-black/60">This section is currently under development.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="department/:id" element={<Department />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="student-life" element={<GenericPage title="Student Life" />} />
          <Route path="placements" element={<GenericPage title="Training & Placements" />} />
          <Route path="research" element={<GenericPage title="Research & Development" />} />
          <Route path="login" element={<GenericPage title="Student Login Portal" />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="resources" element={<GenericPage title="Resources" />} />
          <Route path="student-portal" element={<GenericPage title="Student Portal" />} />
          <Route path="library" element={<GenericPage title="Library" />} />
          <Route path="hostels" element={<GenericPage title="Hostels" />} />
          <Route path="tenders" element={<Tenders />} />
          <Route path="careers" element={<Careers />} />
          <Route path="quick-links" element={<GenericPage title="Quick Links" />} />
          <Route path="aicte" element={<GenericPage title="AICTE" />} />
          <Route path="ugc-disclosure" element={<GenericPage title="UGC Disclosure" />} />
          <Route path="nirf-ranking" element={<GenericPage title="NIRF Ranking" />} />
          <Route path="alumni-portal" element={<GenericPage title="Alumni Portal" />} />
          <Route path="anti-ragging" element={<GenericPage title="Anti-Ragging" />} />
        </Route>
      </Routes>
    </Router>
  );
}
