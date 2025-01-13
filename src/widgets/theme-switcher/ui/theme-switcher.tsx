import { Theme, useTheme } from "@/app/providers/theme";
import { MoonIcon } from "@/shared/assets/icons/moon";
import { SunIcon } from "@/shared/assets/icons/sun";
import { twMerge } from "tailwind-merge";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={twMerge("w-8 h-8 p-1 rounded-md bg-bg-200", className)}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
