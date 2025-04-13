import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("Home", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
