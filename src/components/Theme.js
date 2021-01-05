import React from "react";
import { useTheme } from "../hooks/useTheme";

const Theme = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        name="theme"
        id="theme"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default Theme;
