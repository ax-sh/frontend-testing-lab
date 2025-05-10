import type { ComponentProps, PropsWithChildren } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

function TryAgainButton({ onClick }: ComponentProps<"button">) {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm leading-6 text-white font-semibold shadow-inner shadow-white/10 cursor-pointer hover:bg-gray-600"
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
      <div className="flex flex-col gap-2 rounded-sm bg-red-400 p-4 m-4 text-white">
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
