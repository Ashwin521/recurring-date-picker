import { render, screen, fireEvent } from "@testing-library/react";
import { RecurrenceProvider } from "../../context/RecurrenceContext";
import RecurringDatePicker from "../RecurringDatePicker";

const renderWithProvider = () =>
  render(
    <RecurrenceProvider>
      <RecurringDatePicker />
    </RecurrenceProvider>
  );

describe("RecurringDatePicker Integration", () => {
  it("renders all components correctly", () => {
    renderWithProvider();
    expect(screen.getByText("Recurring Date Picker")).toBeInTheDocument();
    expect(screen.getByText("Repeat every")).toBeInTheDocument();
  });

  it("updates interval value and reflects in input", () => {
    renderWithProvider();
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect(input).toHaveValue(5);
  });
});
