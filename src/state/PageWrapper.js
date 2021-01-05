import React, { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

const AppContext = createContext({ isMenuOpen: false });

const PageWrapper = (props) => {
  const { isToggle, toggle } = useToggle(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggle,
        toggleMenu: toggle,
      }}
      {...props}
    />
  );
};

const useAppState = () => useContext(AppContext);

export { AppContext, PageWrapper, useAppState };
