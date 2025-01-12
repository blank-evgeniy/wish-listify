import CheckIcon from "@/shared/assets/icons/check";
import CrossIcon from "@/shared/assets/icons/cross";
import EditIcon from "@/shared/assets/icons/edit";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handelEdit = () => {
    setIsEditing(true);
  };

  const handleAccept = useCallback(() => {
    setIsEditing(false);
    if (value !== defaultValue) onAccept?.(value);
  }, [value, defaultValue, onAccept]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    setValue(defaultValue || "");
  }, [defaultValue]);

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  useEffect(() => {
    const inFocus = inputRef.current === document.activeElement && isEditing;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && inFocus) {
        handleAccept();
      }
      if (e.key === "Escape" && inFocus) {
        handleCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleAccept, isEditing, handleCancel]);

  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <label htmlFor={props.id} className="text-text-200 font-semibold">
        {label}
      </label>
      <div className="px-2 py-3 leading-none rounded-t-md border-b bg-bg-200 border-text-200 text-text-200 focus:outline-none focus:border-accent-200 placeholder:text-accent-200 flex items-center gap-4">
        <input
          {...props}
          ref={inputRef}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!isEditing || disabled}
          className="bg-inherit focus:outline-none placeholder:text-accent-200 w-full"
        />
        <div className="ml-auto flex gap-2">
          {isEditing ? (
            <>
              <button onClick={handleAccept}>
                <CheckIcon className="w-6 h-6 hover:text-green-500" />
              </button>
              <button onClick={handleCancel}>
                <CrossIcon className="w-6 h-6 hover:text-red-500" />
              </button>
            </>
          ) : (
            <button onClick={handelEdit} disabled={disabled}>
              <EditIcon className="w-6 h-6 hover:opacity-80" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditableField;
