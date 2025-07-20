"use client";

import { useRecurrence } from "../app/context/RecurrenceContext";
import RecurrenceOptions from "./RecurrenceOptions";
import IntervalInput from "./IntervalInput";
import DateRangeSelector from "./DateRangeSelector";
import MiniCalendarPreview from "./MiniCalendarPreview";

export default function RecurringDatePicker() {
  const { recurrence, updateRecurrence } = useRecurrence();

  const handleTypeChange = (type) => updateRecurrence("type", type);
  const handleIntervalChange = (value) => updateRecurrence("interval", value);
  const handleDateChange = (field, value) => updateRecurrence(field, value);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Recurring Date Picker
        </h2>

        <RecurrenceOptions selected={recurrence.type} onChange={handleTypeChange} />

        {recurrence.type === "daily" && (
          <div className="mt-6">
            <IntervalInput value={recurrence.interval} onChange={handleIntervalChange} />
          </div>
        )}

        <div className="mt-6">
          <DateRangeSelector
            startDate={recurrence.startDate}
            endDate={recurrence.endDate}
            onChange={handleDateChange}
          />
        </div>

        <div className="mt-6">
          <MiniCalendarPreview />
        </div>
      </div>
    </div>
  );
}
