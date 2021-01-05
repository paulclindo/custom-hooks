import React from "react";
import { useCookies } from "../hooks/useCookies";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Local = () => {
  const [value, setValue] = useLocalStorage("user-type", "Im initial");
  return (
    <div>
      <h1>This about cookies: {value}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Local;
