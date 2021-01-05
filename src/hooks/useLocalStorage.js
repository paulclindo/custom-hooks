import { useEffect, useState } from "react";

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) || initial
  );

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
