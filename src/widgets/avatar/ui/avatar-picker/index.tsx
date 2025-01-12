import { twMerge } from "tailwind-merge";
import { avatars } from "../../model/data";
import { Avatar } from "../avatar";

interface AvatarPickerProps {
  className?: string;
  isLoading?: boolean;
  onAvatarChange: (newAvatarNumber: number) => void;
  avatarNumber: number;
}

export const AvatarPicker = ({
  className,
  avatarNumber,
  isLoading,
  onAvatarChange,
}: AvatarPickerProps) => {
  return (
    <div className={twMerge("flex flex-wrap gap-4", className)}>
      {avatars.map((__avatar, index) => (
        <button
          key={index}
          onClick={() => onAvatarChange(index)}
          className={isLoading ? "pointer-events-none animate-pulse" : ""}
        >
          <Avatar
            avatarNumber={index}
            className={index === avatarNumber ? "grayscale-0" : "grayscale"}
          />
        </button>
      ))}
    </div>
  );
};
