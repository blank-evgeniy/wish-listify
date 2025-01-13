import { useCallback, useEffect, useRef, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import Label from "../label";
import ButtonGroup from "./button-group";

interface EditableFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  defaultValue?: string;
  onAccept?: (newValue: string) => void;
}

const containerStyle = twJoin(
  "px-2 py-3 leading-none rounded-t-md border-b bg-bg-300 border-text-200 text-text-100 flex items-center gap-4 h-input-h",
  "focus-within:bg-accent-100  focus-within:border-accent-200"
);

const EditableField = ({
  className,
  id,
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

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const inFocus = inputRef.current === document.activeElement && isEditing;

      if (e.key === "Enter" && inFocus) {
        handleAccept();
      }
      if (e.key === "Escape" && inFocus) {
        handleCancel();
      }
    },
    [isEditing, handleAccept, handleCancel]
  );

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <Label htmlFor={id}>{label}</Label>
      <div className={containerStyle}>
        <input
          ref={inputRef}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!isEditing || disabled}
          className="bg-inherit focus:outline-none placeholder:text-accent-200 w-full"
          {...props}
        />
        <ButtonGroup
          isEditing={isEditing}
          disabled={disabled}
          onAccept={handleAccept}
          onCancel={handleCancel}
          onEdit={handelEdit}
        />
      </div>
    </div>
  );
};

export default EditableField;
