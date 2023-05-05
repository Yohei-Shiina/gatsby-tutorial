import React from "react";
import { GlobalState, GlobalContextValue } from "../types/global-context";
const { createContext, useState } = React;

const GlobalContext = createContext<GlobalContextValue>({ state: {}, functions: {} });
const lsGlobalStateString = localStorage.getItem("globalState");
const lsGlobalState = lsGlobalStateString ? JSON.parse(lsGlobalStateString) : null;
const GlobalContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState<GlobalState>(lsGlobalState || {});

  const countUp = () => {
    setGlobalState((prev) => {
      return Object.assign({}, prev, { clickCount: ((prev?.clickCount || 0) as number) + 1 });
    });
  };

  const addGlobalState = (key, value) => {
    if (!key) {
      console.error("addGlobalState needs a key as first arg");
      return;
    }
    if (!value) {
      console.error("addGlobalState needs a value as second arg");
      return;
    }
    setGlobalState((prev) => {
      const newGlobalState = Object.assign({}, prev, { [key]: value });
      localStorage.setItem("globalState", JSON.stringify(newGlobalState));
      return newGlobalState;
    });
  };

  const values: GlobalContextValue = { state: globalState, functions: { addGlobalState, countUp } };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
export { GlobalContextProvider };
