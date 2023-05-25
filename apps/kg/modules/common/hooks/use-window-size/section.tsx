import { useState, useEffect } from "react";
import { TSize } from "./types";

export function useWindowSize(): TSize {
  const [windowSize, setWindowSize] = useState<TSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
