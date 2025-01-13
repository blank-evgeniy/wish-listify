import { twJoin, twMerge } from "tailwind-merge";
import Label from "../label";
import { forwardRef } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const textareaStyle = twJoin(
  "px-2 py-3 leading-none rounded-t-md border-b bg-bg-300 border-text-200 text-text-100",
  "focus:bg-accent-100 focus:outline-none focus:border-accent-200",
  "placeholder:text-accent-200"
);

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, label, ...props }, ref) => {
    return (
      <div className={twMerge("flex flex-col gap-1", className)}>
        <Label htmlFor={id}>{label}</Label>
        <textarea id={id} className={textareaStyle} ref={ref} {...props} />
      </div>
    );
  }
);

export default Textarea;
