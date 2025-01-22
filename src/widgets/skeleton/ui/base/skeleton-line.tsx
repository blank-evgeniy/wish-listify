import { twMerge } from "tailwind-merge";

interface SkeletonLineProps {
  className?: string;
  alt?: boolean;
}

export const SkeletonLine = ({ className, alt }: SkeletonLineProps) => {
  return (
    <span
      className={twMerge(
        "animate-pulse rounded-md w-3/4",
        alt ? "bg-bg-200" : "bg-bg-300",
        className
      )}
    >
      &nbsp;
    </span>
  );
};
