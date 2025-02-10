interface MonthPickerProps {
  months: string[];
  selected: string;
  onChange: (month: string) => void;
}

export default function MonthPicker({ months, selected, onChange }: MonthPickerProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          const currentIndex = months.indexOf(selected);
          if (currentIndex > 0) {
            onChange(months[currentIndex - 1]);
          }
        }}
        disabled={months.indexOf(selected) === 0}
        className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
      >
        ←
      </button>
      
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg"
      >
        {months.map(month => (
          <option key={month} value={month}>
            {new Date(month).toLocaleString('default', { month: 'long', year: 'numeric' })}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          const currentIndex = months.indexOf(selected);
          if (currentIndex < months.length - 1) {
            onChange(months[currentIndex + 1]);
          }
        }}
        disabled={months.indexOf(selected) === months.length - 1}
        className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
      >
        →
      </button>
    </div>
  );
} 