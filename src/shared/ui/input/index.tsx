import { twJoin, twMerge } from "tailwind-merge";
import Label from "../label";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const inputStyle = twJoin(
  "px-2 py-3 leading-none rounded-t-md border-b bg-bg-300 border-text-200 text-text-100 h-input-h",
  "focus:bg-accent-100 focus:outline-none focus:border-accent-200",
  "placeholder:text-accent-200"
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, type, label, placeholder, error, ...props }, ref) => {
    return (
      <div className={twMerge("flex flex-col gap-1", className)}>
        <Label htmlFor={id}>
          {label}
          {props.required && <span className="text-red-400">*</span>}
        </Label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={inputStyle}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-red-500">{error.toLocaleLowerCase()}</span>
        )}
      </div>
    );
  }
);

export default Input;
