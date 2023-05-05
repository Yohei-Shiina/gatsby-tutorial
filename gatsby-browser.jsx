import React from "react";

import { GlobalContextProvider } from "./src/context/GlobalContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import "./src/styles/global.css";

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider>{element}</ThemeProvider>
    </GlobalContextProvider>
  );
};

export const Head = () => (
  <>
    <body className="my-body-class" />
  </>
);
