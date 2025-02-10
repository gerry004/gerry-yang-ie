'use client';

import { useState, useMemo } from 'react';
import { Event } from '../data';

interface CalendarProps {
  events: Event[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export default function Calendar({ events, selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => selectedDate.slice(0, 7)); // YYYY-MM

  const { days, firstDayOfMonth } = useMemo(() => {
    const date = new Date(`${currentMonth}-01T00:00:00`);
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Get number of days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get the day of week for the first day (0-6, 0 = Sunday)
    const firstDay = new Date(year, month, 1).getDay();

    // Create array of day objects for the month
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
      const dayNum = i + 1;
      const dateString = `${currentMonth}-${String(dayNum).padStart(2, '0')}`;
      const hasEvents = events.some(event => event.date === dateString);
      const eventCount = events.filter(event => event.date === dateString).length;
      
      return {
        date: dayNum,
        dateString,
        hasEvents,
        eventCount,
      };
    });

    return {
      days: daysArray,
      firstDayOfMonth: firstDay,
    };
  }, [currentMonth, events]);

  const goToPreviousMonth = () => {
    const [year, month] = currentMonth.split('-');
    const date = new Date(+year, +month - 2);
    setCurrentMonth(date.toISOString().slice(0, 7));
  };

  const goToNextMonth = () => {
    const [year, month] = currentMonth.split('-');
    const date = new Date(+year, +month);
    setCurrentMonth(date.toISOString().slice(0, 7));
  };

  return (
    <div>
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4 text-gray-600">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h3 className="text-lg font-medium">
          {new Date(`${currentMonth}-01`).toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h3>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          →
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-gray-500">
        {/* Empty cells for days before the first of the month */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        
        {/* Calendar days */}
        {days.map(({ date, dateString, hasEvents, eventCount }) => (
          <button
            key={date}
            onClick={() => onSelectDate(dateString)}
            className={`
              aspect-square flex flex-col items-center justify-center relative
              text-sm rounded-lg transition-colors
              ${selectedDate === dateString 
                ? 'bg-blue-600 text-white' 
                : hasEvents 
                  ? 'bg-blue-50 hover:bg-blue-100' 
                  : 'hover:bg-gray-100'
              }
            `}
          >
            <span>{date}</span>
            {hasEvents && (
              <div 
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5 ${
                  selectedDate === dateString ? 'text-white' : 'text-blue-600'
                }`}
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-current" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 