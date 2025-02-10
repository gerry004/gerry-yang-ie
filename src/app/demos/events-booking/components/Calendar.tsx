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
    const date = new Date(`${currentMonth}-01`);
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

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

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            const [year, month] = currentMonth.split('-');
            const newDate = new Date(+year, +month - 2);
            setCurrentMonth(newDate.toISOString().slice(0, 7));
          }}
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
          onClick={() => {
            const [year, month] = currentMonth.split('-');
            const newDate = new Date(+year, +month);
            setCurrentMonth(newDate.toISOString().slice(0, 7));
          }}
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
        
        {days.map(({ date, dateString, hasEvents, eventCount }) => (
          <button
            key={date}
            onClick={() => onSelectDate(dateString)}
            className={`
              aspect-square flex flex-col items-center justify-center relative
              text-sm rounded-lg transition-colors
              ${selectedDate === dateString ? 'bg-blue-600 text-white' : 
                hasEvents ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-100'}
              ${hasEvents ? 'font-medium' : ''}
            `}
          >
            <span>{date}</span>
            {hasEvents && (
              <span className={`text-xs mt-0.5 ${
                selectedDate === dateString ? 'text-blue-100' : 'text-blue-600'
              }`}>
                {eventCount} event{eventCount > 1 ? 's' : ''}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 