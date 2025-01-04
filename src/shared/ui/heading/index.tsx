import { twMerge } from "tailwind-merge";

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

export const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={twMerge(
        "sm:text-4xl text-2xl text-rose-50 font-medium",
        className
      )}
    >
      {children}
    </h1>
  );
};
