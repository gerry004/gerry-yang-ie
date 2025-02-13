'use client';

import { useState } from 'react';
import { Transaction } from '../data';

interface TransactionsTableProps {
  transactions: Transaction[];
}

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [sortField, setSortField] = useState<keyof Transaction>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const handleSort = (field: keyof Transaction) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {['Date', 'Description', 'Category', 'Amount'].map((header) => (
              <th 
                key={header}
                onClick={() => handleSort(header.toLowerCase() as keyof Transaction)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center space-x-1">
                  <span>{header}</span>
                  {sortField === header.toLowerCase() && (
                    <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {transaction.description}
              </td>
              <td className="px-6 py-4 text-sm">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  {
                    'Salary': 'bg-green-100 text-green-800',
                    'Rent': 'bg-red-100 text-red-800',
                    'Utilities': 'bg-yellow-100 text-yellow-800',
                    'Food': 'bg-blue-100 text-blue-800',
                    'Transport': 'bg-purple-100 text-purple-800',
                    'Entertainment': 'bg-pink-100 text-pink-800',
                    'Shopping': 'bg-indigo-100 text-indigo-800',
                  }[transaction.category] || 'bg-gray-100 text-gray-800'
                }`}>
                  {transaction.category}
                </span>
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatNumber(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 