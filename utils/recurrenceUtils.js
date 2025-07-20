export function generateRecurringDates({
  type,
  interval = 1,
  weekdays = [],
  startDate,
  endDate,
}) {
  const dates = [];
  if (!startDate || !endDate) return dates;

  const start = new Date(startDate);
  const end = new Date(endDate);
  let current = new Date(start);

  while (current <= end) {
    switch (type) {
      case "daily":
        dates.push(current.toISOString().split("T")[0]);
        current.setDate(current.getDate() + interval);
        break;

      case "weekly":
        if (weekdays.length > 0) {
          for (let i = 0; i < 7; i++) {
            const temp = new Date(current);
            temp.setDate(current.getDate() + i);
            if (temp > end) break;
            if (weekdays.includes(temp.getDay())) {
              dates.push(temp.toISOString().split("T")[0]);
            }
          }
        } else {
          dates.push(current.toISOString().split("T")[0]);
        }
        current.setDate(current.getDate() + 7 * interval);
        break;

      case "monthly":
        dates.push(current.toISOString().split("T")[0]);
        current.setMonth(current.getMonth() + interval);
        break;

      case "yearly":
        dates.push(current.toISOString().split("T")[0]);
        current.setFullYear(current.getFullYear() + interval);
        break;

      default:
        break;
    }
  }

  return dates;
}
