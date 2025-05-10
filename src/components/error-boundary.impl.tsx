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
  const [trigger, setTrigger] = useState<boolean>(false);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        setTrigger(true);
        onClick(e);
      }
    },
    [onClick],
  );
  if (disabled) {
    return (
      <ExtendedErrorBoundary>
        <TestBroker forceCrash={false} />
      </ExtendedErrorBoundary>
    );
  }
  return (
    <ExtendedErrorBoundary>
      <TestBroker forceCrash={trigger} />
      <TestFillScreen>
        <TestButton onClick={handleClick}>Click me {children}</TestButton>
      </TestFillScreen>
    </ExtendedErrorBoundary>
  );
}
