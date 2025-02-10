'use client';

import { useState } from 'react';
import { leadsData, Lead } from '../data';
import ClientOnly from '../components/ClientOnly';

export default function LeadsPage() {
  const [sortField, setSortField] = useState<keyof Lead>('lastContact');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedLeads = [...leadsData].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const handleSort = (field: keyof Lead) => {
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
          <h1 className="text-2xl font-semibold">Leads</h1>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors">
            + New Lead
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Tags
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Last Contact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {sortedLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-700/30">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-200">{lead.name}</div>
                        <div className="text-sm text-gray-400">{lead.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{lead.company}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        {
                          'New': 'bg-blue-400/10 text-blue-400',
                          'Hot': 'bg-red-400/10 text-red-400',
                          'Cold': 'bg-gray-400/10 text-gray-400',
                          'Contacted': 'bg-green-400/10 text-green-400',
                        }[lead.status]
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{lead.source}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {lead.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-400/10 text-purple-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{lead.lastContact}</td>
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