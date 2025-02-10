'use client';

import { useState, useEffect } from 'react';
import { monthlyData } from './data';
import MonthPicker from './components/MonthPicker';
import MetricCard from './components/MetricCard';
import TransactionsTable from './components/TransactionsTable';
import CategoryChart from './components/CategoryChart';
import TagsChart from './components/TagsChart';

export default function DataDashboardDemo() {
  const [isClient, setIsClient] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(Object.keys(monthlyData).pop()!);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = monthlyData[selectedMonth];

  if (!isClient) {
    return null; // or a loading skeleton
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-white">Financial Dashboard</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const currentIndex = Object.keys(monthlyData).indexOf(selectedMonth);
                  if (currentIndex > 0) {
                    setSelectedMonth(Object.keys(monthlyData)[currentIndex - 1]);
                  }
                }}
                disabled={Object.keys(monthlyData).indexOf(selectedMonth) === 0}
                className="p-2 text-white hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:hover:bg-transparent"
              >
                ←
              </button>
              <span className="text-white">
                {new Date(selectedMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
              </span>
              <button
                onClick={() => {
                  const currentIndex = Object.keys(monthlyData).indexOf(selectedMonth);
                  if (currentIndex < Object.keys(monthlyData).length - 1) {
                    setSelectedMonth(Object.keys(monthlyData)[currentIndex + 1]);
                  }
                }}
                disabled={Object.keys(monthlyData).indexOf(selectedMonth) === Object.keys(monthlyData).length - 1}
                className="p-2 text-white hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:hover:bg-transparent"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Total Income"
            value={data.totalIncome}
            type="income"
          />
          <MetricCard
            title="Total Expenses"
            value={data.totalExpense}
            type="expense"
          />
          <MetricCard
            title="Net Cashflow"
            value={data.cashflow}
            type={data.cashflow >= 0 ? 'income' : 'expense'}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Category Distribution
            </h3>
            <CategoryChart data={data.categoryTotals} />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Category Percentages
            </h3>
            <div className="space-y-4">
              {Object.entries(data.categoryTotals).map(([category, values]) => (
                <div key={category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{category}</span>
                    <span className="text-gray-900">
                      {((values.expense / data.totalExpense) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${(values.expense / data.totalExpense) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <TransactionsTable transactions={data.transactions} />
        </div>
      </main>
    </div>
  );
} 