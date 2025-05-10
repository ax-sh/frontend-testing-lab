import {
  type ComponentProps,
  type MouseEvent,
  useCallback,
  useState,
} from "react";
import {
  TestBroker,
  TestButton,
  TestFillScreen,
} from "../../.storybook/test-helpers/test-ui.tsx";
import { ExtendedErrorBoundary } from "./error-boundary.tsx";

export function ErrorBoundaryImpl({
  children,
  onClick,
  disabled,
  backgroundColor,
}: ComponentProps<"button"> & { backgroundColor?: string }) {
  const [trigger, setTrigger] = useState<boolean>(disabled ?? false);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        setTrigger(true);
        onClick(e);
      }
    },
    [onClick],
  );

  if (trigger) {
    return (
      <div className={"h-screen w-screen"} style={{ backgroundColor }}>
        <ExtendedErrorBoundary>
          <TestBroker forceCrash={trigger} />
        </ExtendedErrorBoundary>
      </div>
    );
  }
  return (
    <ExtendedErrorBoundary>
      {trigger && <TestBroker forceCrash={trigger} />}
      <TestFillScreen>
        <TestButton onClick={handleClick}>Click me {children}</TestButton>
      </TestFillScreen>
    </ExtendedErrorBoundary>
  );
}
