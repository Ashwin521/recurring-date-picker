"use client";

import { useEffect, useState } from "react";
import { generateRecurringDates } from "../utils/recurrenceUtils";
import { useRecurrence } from "../app/context/RecurrenceContext";

export default function MiniCalendarPreview() {
  const { recurrence } = useRecurrence();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const result = generateRecurringDates(recurrence);
    setDates(result);
  }, [recurrence]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">
        Recurring Dates Preview:
      </h3>
      <div className="flex flex-wrap gap-2">
        {dates.map((date) => (
          <span
            key={date}
            className="bg-blue-600 text-white text-sm px-2 py-1 rounded"
          >
            {date}
          </span>
        ))}
        {dates.length === 0 && (
          <p className="text-sm text-gray-500">No dates to preview.</p>
        )}
      </div>
    </div>
  );
}
