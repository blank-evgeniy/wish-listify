import { twMerge } from "tailwind-merge";
import { Loader } from "./loader";

const buttonTypes = {
  primary:
    "bg-rose-500 text-rose-50 hover:bg-rose-600 shadow active:scale-95 transition-all rounded-lg flex items-center justify-center gap-x-2",
  "underline-light":
    "text-rose-100 hover:text-rose-300 transition-colors underline underline-offset-2 p-0",
  "underline-dark":
    "text-rose-500 hover:text-rose-600 transition-colors underline underline-offset-2 p-0",
};

const buttonSizes = {
  sm: "text-md px-2 py-1",
  md: "text-lg px-4 py-2",
  lg: "text-2xl px-6 py-3",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonType?: keyof typeof buttonTypes;
  buttonSize?: keyof typeof buttonSizes;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = ({
  className,
  children,
  isLoading = false,
  disabled,
  buttonType = "primary",
  buttonSize = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={twMerge(
        buttonSizes[buttonSize],
        buttonTypes[buttonType],
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
