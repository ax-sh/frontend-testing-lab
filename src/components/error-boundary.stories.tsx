import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ErrorBoundaryImpl } from "./error-boundary.impl.tsx";

const meta = {
  title: "UI/ErrorBoundary",
  component: ErrorBoundaryImpl,
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ErrorBoundaryImpl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ErrorActive: Story = {
  args: {
    onClick: fn(() => {
      console.log("onClick Error");
    }),
    disabled: true,
    children: "Error Button",
  },
};

export const ErrorOnClick: Story = {
  args: {
    // ...ErrorActive.args,
    onClick: fn(() => {
      console.log("onClick ErrorOnClick");
    }),
  },
};
