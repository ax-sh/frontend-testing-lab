import clsx from "clsx";
import type { ComponentProps } from "react";
import { useHeroCompHook } from "./hero-comp.hook";

export type HeroCompProps = Pick<ComponentProps<"div">, "className"> & {};

export function HeroComp({ className, ...props }: HeroCompProps) {
  const { ref } = useHeroCompHook({});
  console.debug(props);
  return (
    <div ref={ref} className={clsx("bg-red-500", className)}>
      TODO HeroComp
    </div>
  );
}
