import React from "react";
import WrapWithGatsbyProvider from "./wrap-with-gatsby-provider";
import WrapWithReactContextProvider from "./wrap-with-react-context-provider";
import "./src/styles/global.css";

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
  return (
    <WrapWithGatsbyProvider>
      <WrapWithReactContextProvider>{element}</WrapWithReactContextProvider>
    </WrapWithGatsbyProvider>
  );
};

export const Head = () => (
  <>
    <body className="my-body-class" />
  </>
);
