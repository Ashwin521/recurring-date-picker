import { render, screen, fireEvent } from "@testing-library/react";
import IntervalInput from "../IntervalInput";

describe("IntervalInput", () => {
  it("renders with correct initial value", () => {
    render(<IntervalInput value={3} onChange={() => {}} />);
    expect(screen.getByDisplayValue("3")).toBeInTheDocument();
  });

  it("calls onChange when value is changed", () => {
    const handleChange = jest.fn();
    render(<IntervalInput value={1} onChange={handleChange} />);
    fireEvent.change(screen.getByRole("spinbutton"), {
      target: { value: "2" },
    });
    expect(handleChange).toHaveBeenCalledWith(2);
  });
});
