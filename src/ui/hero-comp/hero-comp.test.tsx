import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import { HeroComp } from "./hero-comp";
import { useHeroCompHook } from "./hero-comp.hook";

describe("HeroComp test", () => {
  it("should test component HeroComp", async () => {
    render(<HeroComp className="color-green" />);

    await userEvent.click(screen.getByText("Load Greeting"));
    await screen.findByRole("heading");

    // ASSERT
    expect(screen.getByRole("heading")).toHaveTextContent("hello there");
    expect(screen.getByRole("button")).toBeDisabled();

    expect(1).toBe(1);
  });

  it("should test component hook HeroComp", async () => {
    const hook = useHeroCompHook({});
    console.debug("todo hook test", hook);
  });
});
