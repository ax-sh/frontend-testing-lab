import {
  type ComponentProps,
  type MouseEvent,
  useCallback,
  useState,
} from "react";
import { ExtendedErrorBoundary } from "./error-boundary.tsx";
import { TestBroker, TestButton, TestFillScreen } from "./test-ui.tsx";

export function ErrorBoundaryImpl({
  children,
  onClick,
  disabled,
}: ComponentProps<"button">) {
  const [trigger, setTrigger] = useState<boolean>(disabled!);

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
      <ExtendedErrorBoundary>
        <TestBroker forceCrash={trigger} />
      </ExtendedErrorBoundary>
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
