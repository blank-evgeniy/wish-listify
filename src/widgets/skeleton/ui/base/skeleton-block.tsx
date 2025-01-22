import { twMerge } from "tailwind-merge";

interface SkeletonBlockProps {
  className?: string;
  alt?: boolean;
}

export const SkeletonBlock = ({ className, alt }: SkeletonBlockProps) => {
  return (
    <span
      className={twMerge(
        "bg-bg-300 animate-pulse rounded-lg h-24 w-24",
        alt ? "bg-bg-200" : "bg-bg-300",
        className
      )}
    />
  );
};
