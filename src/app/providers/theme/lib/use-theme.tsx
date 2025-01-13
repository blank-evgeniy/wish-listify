import { useContext } from "react";
import { ThemeContext } from "../model/theme-context";
import { Theme } from "../model/type";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);
  };

  document.body.className = theme || "";

  return { theme: theme || Theme.LIGHT, toggleTheme };
};
