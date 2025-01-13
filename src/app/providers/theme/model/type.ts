export enum Theme {
  LIGHT = "light-theme",
  DARK = "dark-theme",
}

export type ThemeContextType = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};
