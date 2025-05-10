import type { ComponentRef } from "react";
import { useLayoutEffect, useRef, useState } from "react";

export type HeroCompHookProps = Record<string, string>;

export function useHeroCompHook({ ...props }: HeroCompHookProps) {
  const ref = useRef<ComponentRef<"div">>(null);
  const [state, setState] = useState({});
  useLayoutEffect(() => {
    const TAG = "HeroComp";
    console.debug("Mounted hook", TAG);
  }, []);
  console.debug("rerender Mounted hook", state, props);
  return { ref, state, setState };
}
