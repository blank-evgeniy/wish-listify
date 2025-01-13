import { twMerge } from "tailwind-merge";
import Label from "../label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const inputStyle = twMerge(
  "px-2 py-3 leading-none rounded-t-md border-b bg-bg-300 border-text-200 text-text-100 h-input-h",
  "focus:bg-accent-100 focus:outline-none focus:border-accent-200",
  "placeholder:text-accent-200"
);

const Input = ({
  className,
  id,
  type,
  label,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <Label htmlFor={id}>{label}</Label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={inputStyle}
        {...props}
      />
    </div>
  );
};

export default Input;
