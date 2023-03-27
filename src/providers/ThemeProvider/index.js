import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import themes from "../../themes";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio.theme");

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const isBrowserThemeLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      setTheme(isBrowserThemeLight ? "light" : "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("portfolio.theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <SCThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
