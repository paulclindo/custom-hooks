import React from "react";
import { useToggle } from "hooks";

const Toggle = () => {
  const { isToggle, toggle } = useToggle(false);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggle && <p>To be toggled</p>}
    </div>
  );
};

export default Toggle;
