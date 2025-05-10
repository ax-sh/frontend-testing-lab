import type { PropsWithChildren } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

function AppErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <article role="alert" className="canvas-error-alert-dialog">
      <div
        className="error-alert-message-container"
        style={{ background: "white", color: "black" }}
      >
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button
          className="canvas-error-message-button"
          type="button"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </article>
  );
}
export function ExtendedErrorBoundary({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary
      FallbackComponent={AppErrorFallback}
      onReset={(details) => {
        console.warn(details);
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
