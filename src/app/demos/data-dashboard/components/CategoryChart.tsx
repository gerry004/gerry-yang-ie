'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface CategoryChartProps {
  data: {
    [key: string]: {
      income: number;
      expense: number;
    };
  };
}

const COLORS = [
  '#2563eb', '#7c3aed', '#db2777', '#dc2626', '#ea580c',
  '#65a30d', '#0d9488', '#0284c7', '#6366f1', '#9333ea'
];

export default function CategoryChart({ data }: CategoryChartProps) {
  const [view, setView] = useState<'income' | 'expense'>('expense');
  
  const chartData = Object.entries(data).map(([category, values]) => ({
    name: category,
    value: values[view]
  })).sort((a, b) => b.value - a.value);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          <button
            onClick={() => setView('expense')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              view === 'expense' 
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Expenses
          </button>
          <button
            onClick={() => setView('income')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              view === 'income'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Income
          </button>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `€${value.toLocaleString()}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-2">
        {chartData.slice(0, 5).map((item, index) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-gray-600">{item.name}</span>
            </div>
            <div className="text-gray-900 font-medium">
              {((item.value / total) * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 