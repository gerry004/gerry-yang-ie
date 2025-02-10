'use client';

import { useState } from 'react';
import { monthlyData } from './data';
import MonthPicker from './components/MonthPicker';
import MetricCard from './components/MetricCard';
import TransactionsTable from './components/TransactionsTable';
import CategoryChart from './components/CategoryChart';
import TagsChart from './components/TagsChart';

export default function DataDashboardDemo() {
  const [selectedMonth, setSelectedMonth] = useState(Object.keys(monthlyData).pop()!);
  const data = monthlyData[selectedMonth];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-gray-900">Financial Dashboard</div>
            <MonthPicker
              months={Object.keys(monthlyData)}
              selected={selectedMonth}
              onChange={setSelectedMonth}
            />
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
              Tags Analysis
            </h3>
            <TagsChart transactions={data.transactions} />
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