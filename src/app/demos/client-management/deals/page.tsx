'use client';

import { useState } from 'react';
import { dealsData, Deal } from '../data';
import ClientOnly from '../components/ClientOnly';

export default function DealsPage() {
  const [sortField, setSortField] = useState<keyof Deal>('lastActivity');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedDeals = [...dealsData].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const handleSort = (field: keyof Deal) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <ClientOnly>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Deals</h1>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors">
            + New Deal
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Stage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Last Activity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {sortedDeals.map((deal) => (
                  <tr key={deal.id} className="hover:bg-gray-700/30">
                    <td className="px-6 py-4 text-gray-300">{deal.company}</td>
                    <td className="px-6 py-4 font-medium text-gray-200">
                      €{deal.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        {
                          'Discovery': 'bg-blue-400/10 text-blue-400',
                          'Proposal': 'bg-yellow-400/10 text-yellow-400',
                          'Negotiation': 'bg-purple-400/10 text-purple-400',
                          'Closed Won': 'bg-green-400/10 text-green-400',
                          'Closed Lost': 'bg-red-400/10 text-red-400',
                        }[deal.stage]
                      }`}>
                        {deal.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{deal.owner}</td>
                    <td className="px-6 py-4 text-gray-300">{deal.lastActivity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
} 