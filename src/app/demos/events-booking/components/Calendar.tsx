'use client';

import { useState } from 'react';
import type { Event } from '../data';

interface CalendarProps {
  events: Event[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

export default function Calendar({ events, selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
    const dateString = date.toISOString().split('T')[0];
    const hasEvents = events.some(event => event.date === dateString);
    
    return {
      date: i + 1,
      dateString,
      hasEvents
    };
  });

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  return (
    <div className="select-none">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h2 className="text-lg font-semibold text-gray-900">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        
        {days.map(({ date, dateString, hasEvents }) => (
          <button
            key={date}
            onClick={() => onSelectDate(dateString)}
            className={`
              aspect-square flex items-center justify-center relative
              text-sm rounded-lg transition-colors
              ${selectedDate === dateString ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}
              ${hasEvents ? 'font-semibold' : ''}
            `}
          >
            {date}
            {hasEvents && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 