'use client';

import { useState } from 'react';

interface SidebarItemProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({ icon, label, isActive, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-500/10 text-blue-400' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

export default function ClientManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold">Client Management System</div>
            <div className="flex items-center gap-4">
              <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
                + New Client
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800/50 min-h-[calc(100vh-4rem)] p-4 space-y-2">
          <SidebarItem
            icon="📊"
            label="Dashboard"
            isActive={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <SidebarItem
            icon="🎯"
            label="Leads"
            isActive={activeTab === 'leads'}
            onClick={() => setActiveTab('leads')}
          />
          <SidebarItem
            icon="💰"
            label="Deals"
            isActive={activeTab === 'deals'}
            onClick={() => setActiveTab('deals')}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
} 