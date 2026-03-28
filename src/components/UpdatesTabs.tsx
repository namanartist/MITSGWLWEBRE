import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const UpdatesTabs = () => {
  const location = useLocation();
  const tabs = [
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Tenders', path: '/tenders' },
    { name: 'Recruitment', path: '/careers' },
  ];

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-[#f2e8e3] rounded-full p-1 overflow-x-auto max-w-full">
        {tabs.map(tab => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              location.pathname === tab.path ? 'bg-black text-white shadow-sm' : 'text-black/70 hover:text-black hover:bg-black/5'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
