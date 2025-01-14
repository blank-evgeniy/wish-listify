import { twMerge } from "tailwind-merge";

const paperColors = {
  default: "bg-bg-200",
  dark: "bg-bg-300",
};

interface PaperProps {
  className?: string;
  color?: keyof typeof paperColors;
  children: React.ReactNode;
}

const Paper = ({ className, children, color = "default" }: PaperProps) => {
  return (
    <div
      className={twMerge(
        "md:p-6 p-4 shadow-inner rounded-xl",
        paperColors[color],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Paper;
