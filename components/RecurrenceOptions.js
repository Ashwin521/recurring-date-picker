"use client";

export default function RecurrenceOptions({ selected, onChange }) {
  const options = ["daily", "weekly", "monthly", "yearly"];

  return (
    <div className="flex justify-center space-x-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selected === option
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
