import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { ExtendedErrorBoundary } from "./error-boundary.tsx";

function ErrorBoundaryImpl({ onClick, children }: ComponentProps<"button">) {
  return (
    <ExtendedErrorBoundary>
      <article
        className={clsx(
          "h-screen w-screen",
          "bg-black text-white",
          "grid place-items-center",
        )}
      >
        <button
          onClick={onClick}
          className={clsx(
            "bg-blue hover:bg-green",
            "px-4 py-2",
            "cursor-pointer",
            "rounded-sm",
          )}
        >
          Click me {children}
        </button>
      </article>
    </ExtendedErrorBoundary>
  );
}

const meta = {
  title: "UI/ErrorBoundary",
  component: ErrorBoundaryImpl,
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof ErrorBoundaryImpl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    onClick: fn(() => "dff"),
    children: "Button",
  },
};

export const Error: Story = {
  args: {
    onClick: fn(),
    children: "Error Button",
  },
};
