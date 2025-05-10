import type { ComponentProps, PropsWithChildren } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

function TryAgainButton({ onClick }: ComponentProps<"button">) {
  return (
    <button
      className="text-sm text-white font-semibold leading-6 px-3 py-1.5 rounded-md bg-gray-700 inline-flex gap-2 cursor-pointer shadow-inner shadow-white/10 items-center hover:bg-gray-600"
      type="button"
      onClick={onClick}
    >
      Try again
    </button>
  );
}

function AppErrorFallback({
  error,
  resetErrorBoundary,
}: Readonly<FallbackProps>) {
  return (
    <article role="alert" className="grid h-full w-full place-items-center">
      <div className="text-white m-4 p-4 rounded-sm bg-red-400 flex flex-col gap-2">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <div>
          <TryAgainButton onClick={resetErrorBoundary} />
        </div>
      </div>
    </article>
  );
}

type ExtendedErrorBoundaryProps = PropsWithChildren<{
  FallbackComponentProp?: any;
}>;

export function ExtendedErrorBoundary({
  children,
  FallbackComponentProp,
}: Readonly<ExtendedErrorBoundaryProps>) {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponentProp ?? AppErrorFallback}
      onReset={(details) => {
        console.warn("ExtendedErrorBoundary onReset=>", details);
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
