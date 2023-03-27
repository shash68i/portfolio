import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("portfolio.theme");
    if (storedTheme !== null) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("portfolio.theme", theme);
  };

  return (
    <ThemeContext.Provider value={changeTheme}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
