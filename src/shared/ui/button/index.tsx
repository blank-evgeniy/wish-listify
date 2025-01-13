import { twMerge } from "tailwind-merge";
import { Loader } from "./loader";

const buttonVariants = {
  filled:
    "bg-text-100 text-accent-100 hover:bg-text-200 hover:text-accent-100 transition-colors rounded-3xl",
  outlined:
    "border border-text-100 text-text-100 hover:bg-text-100 hover:text-accent-100 transition-colors rounded-3xl",
  text: "text-100 hover:opacity-80 transition-opacity p-0 inline-block",
  underline:
    "text-100 hover:opacity-80 transition-opacity p-0 inline-block underline underline-offset-2",
};

const buttonSizes = {
  sm: "text-md px-3 py-1",
  md: "text-lg px-4 py-[6px]",
  lg: "text-2xl px-6 py-3",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = ({
  className,
  children,
  isLoading = false,
  disabled,
  variant = "filled",
  size = "md",
  ...props
}: ButtonProps) => {
  const defaultStyle = "flex items-center justify-center gap-x-2 font-medium";

  return (
    <button
      disabled={disabled || isLoading}
      className={twMerge(
        defaultStyle,
        buttonSizes[size],
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
      {isLoading && <Loader />}
    </button>
  );
};

export default Button;
