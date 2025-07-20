import RecurringDatePicker from "../components/RecurringDatePicker";
import { RecurrenceProvider } from "./context/RecurrenceContext";

export default function Home() {
  return (
    <RecurrenceProvider>
      <RecurringDatePicker />
    </RecurrenceProvider>
  );
}
