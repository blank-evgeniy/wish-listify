import { ReactNode, useLayoutEffect, useState } from "react";
import { Theme } from "../model/type";
import { ThemeContext } from "../model/theme-context";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/consts";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultValue = {
    theme: theme,
    setTheme: setTheme,
  };

  useLayoutEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
