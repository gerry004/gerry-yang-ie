'use client';

import { useRouter, usePathname } from 'next/navigation';

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
  const router = useRouter();
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname.includes('/leads')) return 'leads';
    if (pathname.includes('/deals')) return 'deals';
    return 'dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800/50 min-h-screen p-4 flex flex-col">
          {/* Logo/Title */}
          <div className="text-xl font-bold mb-8 px-4 py-2">
            Client Management System
          </div>

          {/* Navigation */}
          <div className="flex-1 space-y-2">
            <SidebarItem
              icon="📊"
              label="Dashboard"
              isActive={getActiveTab() === 'dashboard'}
              onClick={() => router.push('/demos/client-management')}
            />
            <SidebarItem
              icon="🎯"
              label="Leads"
              isActive={getActiveTab() === 'leads'}
              onClick={() => router.push('/demos/client-management/leads')}
            />
            <SidebarItem
              icon="💰"
              label="Deals"
              isActive={getActiveTab() === 'deals'}
              onClick={() => router.push('/demos/client-management/deals')}
            />
          </div>

          {/* User Profile */}
          <div className="border-t border-gray-700 mt-4 pt-4 px-4">
            <div className="text-sm">
              <p className="font-medium text-gray-300">John Doe</p>
              <p className="text-gray-500">john@example.com</p>
            </div>
            <button 
              className="mt-4 w-full px-4 py-2 text-sm text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
} 