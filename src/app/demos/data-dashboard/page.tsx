'use client';

export default function DataDashboardDemo() {
  const metrics = [
    { id: 1, name: 'Revenue', value: '€1.2M', change: '+12.5%', trend: 'up' },
    { id: 2, name: 'Customers', value: '1,234', change: '+5.3%', trend: 'up' },
    { id: 3, name: 'Avg. Order Value', value: '€986', change: '-2.1%', trend: 'down' },
    { id: 4, name: 'Conversion Rate', value: '3.2%', change: '+0.8%', trend: 'up' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-white">Financial Dashboard</div>
            <div className="flex items-center gap-4">
              <select className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-gray-400 text-sm font-medium">{metric.name}</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <span className={`ml-2 text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add more dashboard components here */}
      </main>
    </div>
  );
} 