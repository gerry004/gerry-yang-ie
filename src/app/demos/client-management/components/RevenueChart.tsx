'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface RevenueChartProps {
  data: {
    name: string;
    revenue: number;
  }[];
}

export default function RevenueChart({ data }: RevenueChartProps) {
  const formatRevenue = (value: number) => `€${(value / 1000).toFixed(0)}k`;

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0.3}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#9ca3af"
            tick={{ fill: '#9ca3af' }}
          />
          <YAxis 
            stroke="#9ca3af"
            tick={{ fill: '#9ca3af' }}
            tickFormatter={formatRevenue}
          />
          <Tooltip
            formatter={(value: number) => [`€${value.toLocaleString()}`, 'Revenue']}
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
            }}
            itemStyle={{ color: '#9ca3af' }}
            labelStyle={{ color: '#9ca3af' }}
          />
          <Bar 
            dataKey="revenue" 
            fill="url(#colorRevenue)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 