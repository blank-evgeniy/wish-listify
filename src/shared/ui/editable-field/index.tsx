import CheckIcon from "@/shared/assets/icons/check";
import CrossIcon from "@/shared/assets/icons/cross";
import EditIcon from "@/shared/assets/icons/edit";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface EditableFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  defaultValue?: string;
  onAccept?: (newValue: string) => void;
}

const EditableField = ({
  className,
  name,
  label,
  disabled,
  defaultValue,
  onAccept,
  ...props
}: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(!defaultValue);
  const [value, setValue] = useState(defaultValue || "");

  const handleAccept = () => {
    setIsEditing(false);
    if (value !== defaultValue) onAccept?.(value);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setValue(defaultValue || "");
  };

  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <label htmlFor={props.id} className="text-rose-50 font-semibold">
        {label}
      </label>
      <div className="p-2 rounded-lg border-2 border-rose-300 text-rose-50 bg-inherit focus:outline-none focus:border-rose-50 placeholder:text-rose-300 flex items-center gap-4">
        <input
          {...props}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!isEditing || disabled}
          className="bg-inherit focus:outline-none placeholder:text-rose-300 w-full"
        />
        <div className="ml-auto flex gap-2">
          {isEditing ? (
            <>
              <button onClick={handleAccept}>
                <CheckIcon className="w-6 h-6 hover:text-green-300" />
              </button>
              <button onClick={handleCancel}>
                <CrossIcon className="w-6 h-6 hover:text-rose-300" />
              </button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} disabled={disabled}>
              <EditIcon className="w-6 h-6 hover:text-rose-300" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditableField;
