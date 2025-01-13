import CheckIcon from "@/shared/assets/icons/check";
import CrossIcon from "@/shared/assets/icons/cross";
import EditIcon from "@/shared/assets/icons/edit";

interface ButtonGroupProps {
  disabled?: boolean;
  isEditing: boolean;
  onAccept: () => void;
  onCancel: () => void;
  onEdit: () => void;
}

const ButtonGroup = ({
  isEditing,
  disabled,
  onAccept,
  onCancel,
  onEdit,
}: ButtonGroupProps) => {
  return (
    <div className="ml-auto flex gap-2">
      {isEditing ? (
        <>
          <button onClick={onAccept}>
            <CheckIcon className="w-6 h-6 hover:text-green-500" />
          </button>
          <button onClick={onCancel}>
            <CrossIcon className="w-6 h-6 hover:text-red-500" />
          </button>
        </>
      ) : (
        <button onClick={onEdit} disabled={disabled}>
          <EditIcon className="w-6 h-6 hover:opacity-80" />
        </button>
      )}
    </div>
  );
};

export default ButtonGroup;
