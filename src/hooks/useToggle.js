import { useState } from "react";

export const useToggle = (initial) => {
  const [isToggle, setToggle] = useState(initial);
  const toggle = () => {
    setToggle((prev) => !prev);
  };
  return { isToggle, toggle };
};
