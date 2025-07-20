"use client";

import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    type: "daily",
    interval: 1,
    weekdays: [],
    startDate: "",
    endDate: "",
  });

  const updateRecurrence = (field, value) => {
    setRecurrence((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <RecurrenceContext.Provider value={{ recurrence, updateRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
