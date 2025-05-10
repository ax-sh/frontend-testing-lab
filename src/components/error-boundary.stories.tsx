import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  type ComponentProps,
  type MouseEvent,
  useCallback,
  useState,
} from "react";
import { ExtendedErrorBoundary } from "./error-boundary.tsx";
import { TestBroker, TestFillScreen } from "./test-ui.tsx";

function ErrorBoundaryImpl({
  children,
  onClick,
  disabled,
}: ComponentProps<"button">) {
  const [trigger, setTrigger] = useState<boolean>();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      console.log(333);
      if (onClick) {
        setTrigger(true);
        onClick();
      }
    },
    [onClick],
  );
  if (disabled || trigger) {
    return (
      <ExtendedErrorBoundary>
        <TestBroker />
      </ExtendedErrorBoundary>
    );
  }
  return (
    <ExtendedErrorBoundary>
      <TestFillScreen>
        <TestButton onClick={handleClick}>Click me {children}</TestButton>
      </TestFillScreen>
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
export const Idle: Story = {
  args: {
    onClick: fn(),
    children: "Button",
  },
};

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
    onClick: fn(() => {
      console.log("onClick ErrorOnClick");
    }),

    children: "Error Button",
  },
};
