'use client';

import { useState, useEffect } from 'react';
import { eventsData, Event } from './data';
import Calendar from './components/Calendar';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';

export default function EventsBookingDemo() {
  const [isClient, setIsClient] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredEvents = eventsData.filter(event => {
    const matchesDate = !selectedDate || event.date === selectedDate;
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesDate && matchesCategory;
  });

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-white">Events Booking Platform</div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Categories */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
              <div className="space-y-2">
                {['All', 'Tech', 'Business', 'Creative', 'Workshop', 'Conference'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedDate ? (
                  <span>Events for {new Date(selectedDate).toLocaleDateString('en-IE', { 
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                ) : (
                  'All Upcoming Events'
                )}
              </h2>
              {selectedDate && (
                <button
                  onClick={() => setSelectedDate(null)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Show All Events
                </button>
              )}
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onClick={() => setSelectedEvent(event)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-500">No events found{selectedDate ? ' for this date' : ''}{selectedCategory !== 'All' ? ' and category' : ''}.</p>
                <p className="text-sm text-gray-400 mt-1">Try selecting a different {selectedDate ? 'date' : ''}{selectedDate && selectedCategory !== 'All' ? ' or ' : ''}{selectedCategory !== 'All' ? 'category' : ''}.</p>
              </div>
            )}
          </div>

          {/* Calendar Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-24">
              <Calendar 
                events={eventsData}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
} 