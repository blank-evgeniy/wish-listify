import { RoutePath } from "@/app/config/routes";
import { ProfileDto } from "@/entities/profile";
import { AppLink } from "@/shared/ui/link";
import { Avatar } from "@/widgets/avatar";
import { twMerge } from "tailwind-merge";

interface FriendCardProps {
  className?: string;
  data: ProfileDto;
}

export const FriendCard = ({ className, data }: FriendCardProps) => {
  const { email, name, avatarNumber, uid } = data;

  return (
    <article
      className={twMerge(
        "flex items-center justify-between gap-x-4",
        className
      )}
    >
      <div className="w-full flex items-start gap-x-4">
        <Avatar avatarNumber={avatarNumber} size="md" />
        <AppLink to={RoutePath.USER_PAGE.replace(":id", uid)} size="md">
          {name ? name : email}
        </AppLink>
      </div>
      <div className="flex items-center gap-x-2">{/* TODO: delete */}</div>
    </article>
  );
};
