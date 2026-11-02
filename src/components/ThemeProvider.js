"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeMap } from "@/styles/theme";

const ThemeContext = createContext({
  themeMode: "light",
  toggleTheme: () => {},
});

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("stikom-theme");
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
}

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(getInitialTheme);

  useEffect(() => {
    window.localStorage.setItem("stikom-theme", themeMode);
  }, [themeMode]);

  const value = useMemo(
    () => ({
      themeMode,
      toggleTheme: () => {
        setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    [themeMode],
  );

  const theme = themeMap[themeMode] || themeMap.light;

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
