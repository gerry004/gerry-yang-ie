'use client';

export default function ClientManagementDemo() {
  const clients = [
    { id: 1, name: 'Acme Corp', status: 'Active', revenue: '€125,000', lastContact: '2024-03-15' },
    { id: 2, name: 'TechStart Ltd', status: 'Pending', revenue: '€75,000', lastContact: '2024-03-14' },
    { id: 3, name: 'Global Industries', status: 'Active', revenue: '€250,000', lastContact: '2024-03-13' },
    // Add more dummy data
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-white">Client Management System</div>
            <div className="flex items-center gap-4">
              <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">+ New Client</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Clients Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead className="text-sm text-gray-400 bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-3">Client Name</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Revenue</th>
                    <th className="px-6 py-3">Last Contact</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-t border-gray-700">
                      <td className="px-6 py-4">{client.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          client.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{client.revenue}</td>
                      <td className="px-6 py-4">{client.lastContact}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 