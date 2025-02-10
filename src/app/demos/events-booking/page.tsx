'use client';

import { useState } from 'react';
import Calendar from './components/Calendar';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import { eventsData } from './data';
import type { Event } from './data';

export default function EventsBookingDemo() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const filteredEvents = selectedDate
    ? eventsData.filter(event => event.date === selectedDate)
    : eventsData;

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-gray-900">Events Booking Platform</div>
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Create Event
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <Calendar 
                events={eventsData}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
              <div className="space-y-2">
                {['All', 'Tech', 'Business', 'Creative', 'Workshop', 'Conference'].map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Event Details Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
} 