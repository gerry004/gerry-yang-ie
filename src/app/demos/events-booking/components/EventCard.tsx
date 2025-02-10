import type { Event } from '../data';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{event.title}</h3>
          <p className="text-sm text-gray-500">{event.organizer}</p>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          {
            'Tech': 'bg-blue-100 text-blue-800',
            'Business': 'bg-green-100 text-green-800',
            'Creative': 'bg-purple-100 text-purple-800',
            'Workshop': 'bg-yellow-100 text-yellow-800',
            'Conference': 'bg-indigo-100 text-indigo-800',
          }[event.category]
        }`}>
          {event.category}
        </span>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <p className="flex items-center">
          <span className="mr-2">🗓</span>
          {new Date(event.date).toLocaleDateString('en-IE', { 
            weekday: 'short',
            day: 'numeric',
            month: 'short'
          })} at {event.time}
        </p>
        <p className="flex items-center">
          <span className="mr-2">📍</span>
          {event.location}
        </p>
        <p className="flex items-center">
          <span className="mr-2">💶</span>
          €{event.price}
        </p>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">
            {event.booked} / {event.capacity} spots taken
          </span>
          <span className="text-blue-600 font-medium">
            {event.capacity - event.booked} spots left
          </span>
        </div>
        <div className="mt-2 w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{
              width: `${(event.booked / event.capacity) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
} 