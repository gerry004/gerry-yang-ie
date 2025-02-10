'use client';

export default function EventsBookingDemo() {
  const events = [
    { 
      id: 1, 
      title: 'Tech Conference 2024',
      date: '2024-04-15',
      time: '09:00',
      location: 'Dublin Convention Centre',
      capacity: 500,
      booked: 342
    },
    // Add more dummy events
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-white">Events Booking Platform</div>
            <div className="flex items-center gap-4">
              <button className="bg-purple-500 px-4 py-2 rounded-lg text-white">Create Event</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className="space-y-2 text-gray-300">
                  <p>📅 {event.date} at {event.time}</p>
                  <p>📍 {event.location}</p>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Capacity</span>
                      <span>{event.booked}/{event.capacity}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${(event.booked/event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 