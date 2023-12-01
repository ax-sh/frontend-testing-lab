
import { render, screen } from "@testing-library/react";


it("should work", () => {
  expect(1).toBe(1);
});

it("should render component", () => {
  const Hello = () => <div>hello</div>;
  render(<Hello />);
  screen.logTestingPlaygroundURL();
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
