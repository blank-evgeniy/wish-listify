import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({
  className,
  id,
  name,
  type,
  label,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <label htmlFor={id} className="text-text-200 font-semibold">
        {label}
      </label>
      <input
        {...props}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="px-2 py-3 leading-none rounded-t-md border-b bg-bg-300 disabled:bg-bg-200 border-text-200 text-text-200 focus:outline-none focus:border-accent-200 placeholder:text-accent-200"
      />
    </div>
  );
};

export default Input;
