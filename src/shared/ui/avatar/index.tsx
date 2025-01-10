import { twMerge } from "tailwind-merge";

const sizes = {
  sm: "w-8 h-8 text-lg",
  md: "w-16 h-16 text-2xl",
  lg: "w-32 h-32 text-8xl",
};

interface AvatarProps {
  className?: string;
  size?: keyof typeof sizes;
  name?: string;
  email?: string;
  photoURL?: string;
}

const Avatar = ({
  className,
  name,
  email,
  photoURL,
  size = "md",
}: AvatarProps) => {
  const hasPhoto = !!photoURL;

  const styles = twMerge(
    hasPhoto
      ? "rounded-full object-cover"
      : "rounded-full object-cover flex items-center justify-center bg-rose-100 text-rose-950 leading-none",
    sizes[size],
    className
  );
  const userName = name || email;

  if (hasPhoto) {
    return <img className={styles} src={photoURL} alt={`${userName} аватар`} />;
  }

  return (
    <div className={styles}>
      <span className="font-semibold">{userName?.[0].toUpperCase()}</span>
    </div>
  );
};

export default Avatar;
