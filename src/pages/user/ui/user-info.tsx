import { useUserProfile } from "@/entities/user";
import { Heading } from "@/shared/ui/heading";
import { Avatar } from "@/widgets/avatar";
import { SkeletonBlock, SkeletonLine } from "@/widgets/skeleton";
import { twMerge } from "tailwind-merge";

interface UserInfoProps {
  className?: string;
  uid: string;
}

export const UserInfo = ({ className, uid }: UserInfoProps) => {
  const { profile, isLoading, error } = useUserProfile(uid);

  if (isLoading)
    return (
      <div className={twMerge("flex gap-x-8 items-start", className)}>
        <SkeletonBlock className="w-32 h-32 text-8xl rounded-3xl flex-shrink-0" />
        <div className="flex flex-col w-full">
          <SkeletonLine className="sm:text-2xl text-xl" />
          <SkeletonLine className="text-lg mt-1" />
        </div>
      </div>
    );

  if (error || !profile) return null;

  const { avatarNumber, name, email } = profile;

  return (
    <section className={twMerge("flex gap-x-8 items-start", className)}>
      <Avatar size="lg" avatarNumber={avatarNumber} />
      <div>
        <Heading className="sm:text-2xl text-xl">{name}</Heading>
        <h3 className="text-lg font-medium text-text-200">{email}</h3>
      </div>
    </section>
  );
};
