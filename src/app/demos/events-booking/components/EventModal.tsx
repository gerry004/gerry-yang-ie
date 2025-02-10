'use client';

import type { Event } from '../data';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{event.title}</h2>
              <p className="text-gray-500">Organized by {event.organizer}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">{event.description}</p>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center text-gray-600">
                <span className="w-24">Date:</span>
                <span className="font-medium text-gray-900">{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="w-24">Time:</span>
                <span className="font-medium text-gray-900">{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="w-24">Location:</span>
                <span className="font-medium text-gray-900">{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="w-24">Category:</span>
                <span className="font-medium text-gray-900">{event.category}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Price per ticket</p>
                  <p className="text-2xl font-semibold text-gray-900">€{event.price}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 