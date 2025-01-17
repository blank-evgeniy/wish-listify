import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const defaultStyle = "aspect-square flex items-center justify-center";

const linkSizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const linkAccentColors = {
  default: "text-text-100 hover:opacity-80 focus:opacity-80 transition-opacity",
  danger:
    "text-text-100 hover:text-red-400 focus:text-red-400 transition-colors",
  success:
    "text-text-100 hover:text-green-400 focus:text-green-400 transition-colors",
};

interface IconLinkProps {
  className?: string;
  children?: React.ReactNode;
  size?: keyof typeof linkSizes;
  accentColor?: keyof typeof linkAccentColors;
  to: string;
}

export const IconLink = ({
  className,
  size = "md",
  accentColor = "default",
  children,
  to,
  ...props
}: IconLinkProps) => {
  return (
    <Link
      to={to}
      className={twMerge(
        defaultStyle,
        linkSizes[size],
        linkAccentColors[accentColor],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
