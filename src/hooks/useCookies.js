import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useCookies = ({ key }) => {
  const initial = Cookies.get(key);
  const [cookie, setCookie] = useState(initial);

  useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key]);

  return [cookie, setCookie];
};
