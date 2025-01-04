import { twMerge } from "tailwind-merge";

const buttonTypes = {
  primary:
    "bg-rose-500 text-rose-50 hover:bg-rose-600 shadow active:scale-95 transition-all rounded-lg px-4 py-2 text-lg flex items-center justify-center gap-x-2",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonType?: keyof typeof buttonTypes;
  children: React.ReactNode;
}

const Button = ({
  className,
  children,
  buttonType = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button className={twMerge(buttonTypes[buttonType], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
