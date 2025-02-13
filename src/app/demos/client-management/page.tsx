'use client';

import { leadsData, dealsData } from './data';
import TrendsChart from './components/TrendsChart';
import RevenueChart from './components/RevenueChart';
import LeadsPieChart from './components/LeadsPieChart';
import ClientOnly from './components/ClientOnly';

export default function ClientManagementDemo() {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IE', {
      maximumFractionDigits: 0
    }).format(num);
  };

  const leadsByStatus = {
    new: leadsData.filter(lead => lead.status === 'New').length,
    hot: leadsData.filter(lead => lead.status === 'Hot').length,
    cold: leadsData.filter(lead => lead.status === 'Cold').length,
    contacted: leadsData.filter(lead => lead.status === 'Contacted').length,
  };

  const totalDealsAmount = dealsData.reduce((sum, deal) => sum + deal.amount, 0);

  const trendsData = [
    { name: 'Jan', leads: 45, deals: 23 },
    { name: 'Feb', leads: 52, deals: 27 },
    { name: 'Mar', leads: 48, deals: 25 },
    { name: 'Apr', leads: 61, deals: 30 },
    { name: 'May', leads: 55, deals: 28 },
    { name: 'Jun', leads: 67, deals: 35 },
    { name: 'Jul', leads: 75, deals: 40 },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 125000 },
    { name: 'Feb', revenue: 165000 },
    { name: 'Mar', revenue: 145000 },
    { name: 'Apr', revenue: 190000 },
    { name: 'May', revenue: 158000 },
    { name: 'Jun', revenue: 210000 },
    { name: 'Jul', revenue: 245000 },
  ];

  const leadsPieData = [
    { name: 'New', value: leadsByStatus.new, color: '#3b82f6' },
    { name: 'Hot', value: leadsByStatus.hot, color: '#ef4444' },
    { name: 'Cold', value: leadsByStatus.cold, color: '#9ca3af' },
    { name: 'Contacted', value: leadsByStatus.contacted, color: '#22c55e' },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/20">
          <h3 className="text-gray-400 text-sm font-medium">Total Leads</h3>
          <p className="text-2xl font-semibold mt-2 text-blue-400">{leadsData.length}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-gray-400 text-sm font-medium">Active Deals</h3>
          <p className="text-2xl font-semibold mt-2 text-purple-400">{dealsData.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/20">
          <h3 className="text-gray-400 text-sm font-medium">Total Deal Value</h3>
          <p className="text-2xl font-semibold mt-2 text-green-400">€{formatNumber(totalDealsAmount)}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/20">
          <h3 className="text-gray-400 text-sm font-medium">Conversion Rate</h3>
          <p className="text-2xl font-semibold mt-2 text-orange-400">
            {((dealsData.length / leadsData.length) * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Wrap charts with ClientOnly */}
      <ClientOnly>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Leads & Deals Trends</h3>
            <TrendsChart data={trendsData} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Lead Status Distribution</h3>
              <LeadsPieChart data={leadsPieData} />
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
              <RevenueChart data={revenueData} />
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  );
} 