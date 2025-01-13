import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const linkVariants = {
  filled:
    "bg-text-100 text-accent-100 hover:bg-text-200 hover:text-accent-100 transition-colors rounded-3xl",
  outlined:
    "border border-text-100 text-text-100 hover:bg-text-100 hover:text-accent-100 transition-colors rounded-3xl",
  text: "text-100 hover:opacity-80 transition-opacity p-0 inline-block",
  underline:
    "text-100 hover:opacity-80 transition-opacity p-0 inline-block underline underline-offset-2",
};

const linkSizes = {
  sm: "text-md px-3 py-1",
  md: "text-lg px-4 py-[6px]",
  lg: "text-2xl px-6 py-3",
};

interface AppLinkProps {
  variant?: keyof typeof linkVariants;
  size?: keyof typeof linkSizes;
  className?: string;
  children: React.ReactNode;
  to: string;
}

export const AppLink = ({
  className,
  children,
  to,
  variant = "text",
  size = "md",
}: AppLinkProps) => {
  const defaultStyle = "flex items-center justify-center gap-x-2 font-medium";

  return (
    <Link
      to={to}
      className={twMerge(
        defaultStyle,
        linkSizes[size],
        linkVariants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
};
