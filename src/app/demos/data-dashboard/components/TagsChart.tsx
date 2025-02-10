'use client';

import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Transaction } from '../data';

interface TagsChartProps {
  transactions: Transaction[];
}

export default function TagsChart({ transactions }: TagsChartProps) {
  const tagData = useMemo(() => {
    const tagTotals: { [key: string]: { income: number; expense: number } } = {};
    
    transactions.forEach(transaction => {
      transaction.tags.forEach(tag => {
        if (!tagTotals[tag]) {
          tagTotals[tag] = { income: 0, expense: 0 };
        }
        tagTotals[tag][transaction.type] += transaction.amount;
      });
    });

    return Object.entries(tagTotals)
      .map(([tag, values]) => ({
        tag,
        income: values.income,
        expense: values.expense,
        net: values.income - values.expense
      }))
      .sort((a, b) => Math.abs(b.net) - Math.abs(a.net));
  }, [transactions]);

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={tagData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          barGap={0}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="tag"
            tick={{ fontSize: 12 }}
            interval={0}
            angle={-45}
            textAnchor="end"
          />
          <YAxis
            tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={(value: number) => `€${value.toLocaleString()}`}
          />
          <Bar dataKey="income" fill="#22c55e" name="Income" />
          <Bar dataKey="expense" fill="#ef4444" name="Expense" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 