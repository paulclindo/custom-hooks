import { useLayoutEffect } from "react";

export const useScrollFreeze = () => {
  const original = window.getComputedStyle(document.body).overflow;

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [original]);
};
