import { setProjectAnnotations } from "@storybook/react-vite";
import { afterEach, beforeAll } from "vitest";
import * as projectAnnotations from "./preview.tsx";
// not storybook related
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
afterEach(() => {
  cleanup();
});
// not storybook related

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);
