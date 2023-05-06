import React from "react";

import { GlobalContextProvider } from "./src/context/GlobalContext";
import { ThemeProvider } from "./src/context/ThemeContext";

const WrapWithReactContextProvider = ({ children }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </GlobalContextProvider>
  );
};
console.info("WrapWithReactContextProvider is loaded");
export default WrapWithReactContextProvider;
