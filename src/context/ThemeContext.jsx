import React, { useState, useEffect } from "react";

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

const supportsDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState({ dark: false });

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark"));
    if (lsDark) {
      setDarkMode({ dark: lsDark });
    } else if (supportsDarkMode()) {
      setDarkMode({ dark: true });
    }
    return;
  }, [setDarkMode]);

  const toggleDark = () => {
    let dark = !darkMode.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setDarkMode({ dark: dark });
  };

  const { children } = props;
  const { dark } = darkMode;

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark: toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export { ThemeProvider };
