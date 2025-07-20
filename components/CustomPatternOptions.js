import React from "react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CustomPatternOptions({
  type = "daily",
  interval = 1,
  setInterval = () => {},
  selectedDays = [],
  setSelectedDays = () => {},
}) {
  const handleCheckboxChange = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-medium text-gray-700 mb-1">
        Every X{" "}
        {type === "daily"
          ? "day(s)"
          : type === "weekly"
          ? "week(s)"
          : type === "monthly"
          ? "month(s)"
          : "year(s)"}
        :
      </label>
      <input
        type="number"
        min="1"
        value={interval}
        onChange={(e) => setInterval(e.target.value)}
        className="border px-2 py-1 rounded w-20 mb-3"
      />

      {type === "weekly" && (
        <div className="flex flex-wrap gap-2 mt-2">
          {weekdays.map((day) => (
            <label key={day} className="flex items-center gap-1">
              <input
                type="checkbox"
                value={day}
                checked={selectedDays.includes(day)}
                onChange={() => handleCheckboxChange(day)}
              />
              <span>{day}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
