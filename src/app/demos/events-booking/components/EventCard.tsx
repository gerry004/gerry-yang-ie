import type { Event } from '../data';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.organizer}</p>
          </div>
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
            {event.category}
          </span>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <p>📅 {event.date} at {event.time}</p>
          <p>📍 {event.location}</p>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Capacity</span>
              <span>{event.booked}/{event.capacity}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${(event.booked/event.capacity) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">€{event.price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
} 