import { twMerge } from "tailwind-merge";

const sizes = {
  sm: "p-2 text-xs",
  md: "p-2 text-sm",
  lg: "p-4 h-8 text-md",
};

interface BadgeProps {
  className?: string;
  size?: keyof typeof sizes;
  children?: React.ReactNode;
}

export const Badge = ({ className, children, size = "md" }: BadgeProps) => {
  return (
    <span
      className={twMerge(
        "inline-flex items-center justify-center rounded-full aspect-square bg-accent-100 font-semibold text-text-100 overflow-hidden",
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};
