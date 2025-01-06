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
      <label htmlFor={id} className="text-rose-50 text-lg ml-[2px]">
        {label}
      </label>
      <input
        {...props}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="p-2 rounded-lg border-2 border-rose-300 text-rose-50 bg-inherit focus:outline-none focus:border-rose-50 placeholder:text-rose-300"
      />
    </div>
  );
};

export default Input;
