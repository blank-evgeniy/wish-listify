import { twMerge } from "tailwind-merge";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

const Label = ({ children, className, htmlFor }: LabelProps) => {
  return (
    <label
      className={twMerge("text-text-200 font-semibold", className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
