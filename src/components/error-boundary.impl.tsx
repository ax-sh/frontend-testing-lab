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
  bac,
}: ComponentProps<"button">) {
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
