import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const linkTypes = {
  primary:
    "text-rose-500 hover:text-rose-600 transition-colors underline underline-offset-2",
  button:
    "bg-rose-500 text-rose-50 hover:bg-rose-600 shadow active:scale-95 transition-all rounded-lg px-4 py-2 text-lg flex items-center justify-center gap-x-2",
};

interface AppLinkProps {
  className?: string;
  children: React.ReactNode;
  to: string;
  linkType?: keyof typeof linkTypes;
}

export const AppLink = ({
  className,
  children,
  to,
  linkType = "primary",
}: AppLinkProps) => {
  return (
    <Link to={to} className={twMerge(linkTypes[linkType], className)}>
      {children}
    </Link>
  );
};
