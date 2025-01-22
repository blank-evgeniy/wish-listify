import { twMerge } from "tailwind-merge";
import { FriendCard, useFriendList } from "@/entities/friend";
import FriendImage from "@/shared/assets/images/friends.png";
import { Badge } from "@/shared/ui/badge";
import { FriendCardSkeleton, SkeletonLine } from "@/widgets/skeleton";

interface FriendListProps {
  className?: string;
}

export const FriendList = ({ className }: FriendListProps) => {
  const { friends, isLoading, error } = useFriendList();

  if (isLoading)
    return (
      <div className={twMerge("w-full flex flex-col", className)}>
        <SkeletonLine className="text-2xl w-1/3" />
        <div className="flex flex-col gap-4 mt-4">
          <FriendCardSkeleton />
          <FriendCardSkeleton />
          <FriendCardSkeleton />
        </div>
      </div>
    );

  if (error || !friends) return null;

  if (friends.length === 0)
    return (
      <>
        <img src={FriendImage} className="w-[420px] aspect-square opacity-80" />
        <p className="text-text-200 text-lg">
          {"Ваш список друзей пока пуст :("}
        </p>
      </>
    );

  return (
    <section className={twMerge("w-full", className)}>
      <h2 className="text-2xl font-semibold leading-none flex items-center gap-x-2">
        Друзья <Badge>{friends.length}</Badge>
      </h2>
      <ul className="flex flex-col gap-4 mt-4">
        {friends.map((request) => (
          <FriendCard key={request.uid} data={request} />
        ))}
      </ul>
    </section>
  );
};
