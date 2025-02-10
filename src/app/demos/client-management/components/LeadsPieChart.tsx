'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

interface LeadsPieChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

export default function LeadsPieChart({ data }: LeadsPieChartProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                strokeWidth={2}
                stroke="#1f2937"
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [value, 'Leads']}
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
            }}
            itemStyle={{ color: '#9ca3af' }}
            labelStyle={{ color: '#9ca3af' }}
          />
          <Legend 
            verticalAlign="middle" 
            align="right"
            layout="vertical"
            formatter={(value: string) => (
              <span className="text-gray-300">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
} 