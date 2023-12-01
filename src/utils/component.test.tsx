// import { it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

it("should work", () => {
  expect(1).toBe(1);
});

it("should render component", () => {
  const P = () => <div>hello</div>;
  render(<P />);
  screen.logTestingPlaygroundURL();
  expect(screen).toBeInTheDocument();
});
