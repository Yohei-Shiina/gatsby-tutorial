import React from "react";
const { createContext, useState } = React;

const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  const countUp = () => {
    setGlobalState((prev) => {
      return Object.assign({}, prev, { clickCount: (prev.clickCount || 0) + 1 });
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
      return Object.assign({}, prev, { [key]: value });
    });
  };

  return (
    <GlobalContext.Provider value={{ state: globalState, functions: { addGlobalState, countUp } }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalContextProvider };
