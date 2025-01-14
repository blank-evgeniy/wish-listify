import LogoutIcon from "@/shared/assets/icons/logout";
import Button from "@/shared/ui/button";
import { useSignOut } from "../api/use-sign-out";
import { twMerge } from "tailwind-merge";

interface SignOutButtonProps {
  className?: string;
}

export const SignOutButton = ({ className }: SignOutButtonProps) => {
  const { handleSignOut, isLoading } = useSignOut();

  return (
    <Button
      onClick={() => handleSignOut()}
      variant="text"
      disabled={isLoading}
      className={twMerge("flex gap-2 text-text-200", className)}
    >
      <LogoutIcon className="w-5 h-5 rotate-180" /> Выйти
    </Button>
  );
};
