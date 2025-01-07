import { Profile } from "@/entities/profile";
import { twMerge } from "tailwind-merge";

const sizes = {
  sm: "w-8 h-8 text-lg",
  md: "w-16 h-16 text-2xl",
  lg: "w-32 h-32 text-8xl",
};

interface AvatarProps {
  className?: string;
  userData?: Profile | null;
  size?: keyof typeof sizes;
}

const Avatar = ({ className, userData, size = "md" }: AvatarProps) => {
  const styles = twMerge(
    "rounded-full object-cover flex items-center justify-center bg-rose-100 text-rose-950",
    sizes[size],
    className
  );
  const userName = userData?.displayName || userData?.email;

  if (userData?.photoURL) {
    return (
      <img
        className={styles}
        src={userData.photoURL}
        alt={`${userName} аватар`}
      />
    );
  }

  return (
    <div className={styles}>
      <span className="font-semibold">{userName?.[0].toUpperCase()}</span>
    </div>
  );
};

export default Avatar;
