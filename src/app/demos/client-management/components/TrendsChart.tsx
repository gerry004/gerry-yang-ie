'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface TrendsChartProps {
  data: {
    name: string;
    leads: number;
    deals: number;
  }[];
}

export default function TrendsChart({ data }: TrendsChartProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorDeals" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name" 
            stroke="#9ca3af"
            tick={{ fill: '#9ca3af' }}
          />
          <YAxis 
            stroke="#9ca3af"
            tick={{ fill: '#9ca3af' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
            }}
            itemStyle={{ color: '#9ca3af' }}
            labelStyle={{ color: '#9ca3af' }}
          />
          <Area
            type="monotone"
            dataKey="leads"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorLeads)"
          />
          <Area
            type="monotone"
            dataKey="deals"
            stroke="#a855f7"
            fillOpacity={1}
            fill="url(#colorDeals)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
} 