interface MetricCardProps {
  title: string;
  value: number;
  type: 'income' | 'expense';
}

export default function MetricCard({ title, value, type }: MetricCardProps) {
  const isPositive = type === 'income';
  
  return (
    <div className={`
      bg-white rounded-xl border border-gray-200 p-6
      ${isPositive ? 'shadow-[0_4px_12px_-2px_rgba(0,255,0,0.1)]' : 'shadow-[0_4px_12px_-2px_rgba(255,0,0,0.1)]'}
    `}>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className={`text-2xl font-semibold ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          €{Math.abs(value).toLocaleString()}
        </p>
      </div>
    </div>
  );
} 