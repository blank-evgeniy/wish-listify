import { twMerge } from "tailwind-merge";
import { avatars } from "../../model/data";

const sizes = {
  sm: "w-8 h-8 text-lg rounded-lg",
  md: "w-16 h-16 text-2xl rounded-xl",
  lg: "w-32 h-32 text-8xl rounded-3xl",
};

interface AvatarProps {
  size?: keyof typeof sizes;
  className?: string;
  isLoading?: boolean;
  avatarNumber: number;
}

export const Avatar = ({
  avatarNumber,
  className,
  isLoading,
  size = "md",
}: AvatarProps) => {
  const defaultStyle = "object-cover aspect-square";

  if (!avatars[avatarNumber])
    return (
      <span
        className={twMerge(
          defaultStyle,
          sizes[size],
          className,
          isLoading && "animate-pulse"
        )}
      />
    );

  return (
    <div
      className={twMerge(
        sizes[size],
        "bg-orange-200",
        className,
        isLoading && "animate-pulse"
      )}
    >
      <img
        key={avatarNumber}
        src={avatars[avatarNumber]}
        alt="avatar"
        className={twMerge(defaultStyle, sizes[size])}
      />
    </div>
  );
};
