import { twMerge } from "tailwind-merge";

const defaultStyle = "aspect-square flex items-center justify-center";

const buttonSizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const buttonAccentColors = {
  default: "text-text-100 hover:opacity-80 focus:opacity-80 transition-opacity",
  danger:
    "text-text-100 hover:text-red-400 focus:text-red-400 transition-colors",
  success:
    "text-text-100 hover:text-green-400 focus:text-green-400 transition-colors",
};

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: keyof typeof buttonSizes;
  accentColor?: keyof typeof buttonAccentColors;
}

export const IconButton = ({
  className,
  size = "md",
  accentColor = "default",
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        defaultStyle,
        buttonSizes[size],
        buttonAccentColors[accentColor],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
