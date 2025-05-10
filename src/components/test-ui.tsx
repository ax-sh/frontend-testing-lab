import clsx from "clsx";

export function TestButton({
  children,
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "bg-blue hover:bg-green",
        "px-4 py-2",
        "cursor-pointer",
        "rounded-sm",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function TestFillScreen({ children }: PropsWithChildern) {
  return (
    <article
      className={clsx(
        "h-screen w-screen",
        "bg-black text-white",
        "grid place-items-center",
      )}
    >
      {children}
    </article>
  );
}

export function TestBroker({ forceCrash }: { forceCrash: boolean }) {
  if (forceCrash) {
    throw new Error("Broke it");
  }
  return <div>Skipp Breaking code</div>;
}
