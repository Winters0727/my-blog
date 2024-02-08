"use client";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";

type ThemeMode = "light" | "dark";

interface ThemeContext {
  mode: ThemeMode;
  toggleMode: () => React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    document.body.classList.add(mode);

    return () => document.body.classList.remove(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode: () =>
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext) as ThemeContext;
