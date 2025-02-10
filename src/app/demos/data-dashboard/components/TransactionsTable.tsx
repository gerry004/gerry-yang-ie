'use client';

import { useState } from 'react';
import type { Transaction } from '../data';

interface TransactionsTableProps {
  transactions: Transaction[];
}

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [sortBy, setSortBy] = useState<keyof Transaction>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === 'amount') {
      return sortDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    }
    return sortDirection === 'asc' 
      ? a[sortBy].localeCompare(b[sortBy])
      : b[sortBy].localeCompare(a[sortBy]);
  });

  const handleSort = (column: keyof Transaction) => {
    if (sortBy === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('desc');
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 text-sm text-gray-500">
          <tr>
            <th 
              onClick={() => handleSort('date')}
              className="px-6 py-4 text-left cursor-pointer hover:text-gray-700"
            >
              Date {sortBy === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th 
              onClick={() => handleSort('description')}
              className="px-6 py-4 text-left cursor-pointer hover:text-gray-700"
            >
              Description {sortBy === 'description' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Tags</th>
            <th 
              onClick={() => handleSort('amount')}
              className="px-6 py-4 text-right cursor-pointer hover:text-gray-700"
            >
              Amount {sortBy === 'amount' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id} className="text-sm">
              <td className="px-6 py-4 text-gray-600">
                {new Date(transaction.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-gray-900 font-medium">
                {transaction.description}
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  {transaction.category}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-1 flex-wrap">
                  {transaction.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className={`px-6 py-4 text-right font-medium ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}€{transaction.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 