import React from "react";
import { useCookies } from "../hooks/useCookies";

const Cookie = () => {
  const [cookie, setCookie] = useCookies({ key: "user-type" });
  return (
    <div>
      <h1>This about cookies: {cookie}</h1>
      <input
        type="text"
        value={cookie}
        onChange={(e) => setCookie(e.target.value)}
      />
    </div>
  );
};

export default Cookie;
