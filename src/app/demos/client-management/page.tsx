'use client';

import { useState, useEffect } from 'react';
import { leadsData, dealsData } from './data';

export default function ClientManagementDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
  const topDeals = [...dealsData]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  if (!isClient) {
    return null;
  }

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

      {/* Lead Status Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Lead Status Distribution</h3>
          <div className="space-y-4">
            {Object.entries(leadsByStatus).map(([status, count]) => (
              <div key={status}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">{status}</span>
                  <span>{count}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${(count / leadsData.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Deals */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Top Deals</h3>
          <div className="space-y-4">
            {topDeals.map((deal) => (
              <div
                key={deal.id}
                className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{deal.company}</p>
                  <p className="text-sm text-gray-400">{deal.stage}</p>
                </div>
                <p className="text-lg font-semibold">€{formatNumber(deal.amount)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 