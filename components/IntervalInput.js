"use client";

export default function IntervalInput({ value, onChange }) {
  return (
    <div className="flex items-center space-x-3">
      <label className="text-gray-700 text-sm font-semibold">Repeat every</label>
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-20 border border-gray-300 rounded px-2 py-1 text-center text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-sm text-gray-600">day(s)</span>
    </div>
  );
}
