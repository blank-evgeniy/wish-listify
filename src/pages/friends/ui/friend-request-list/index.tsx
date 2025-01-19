import { useFriendRequests } from "@/entities/friend-request/lib/use-friend-requests";
import { twMerge } from "tailwind-merge";

interface FriendRequestListProps {
  className?: string;
}

export const FriendRequestList = ({ className }: FriendRequestListProps) => {
  const { requests, isLoading, error } = useFriendRequests();

  if (isLoading || error || !requests) return null;

  if (requests.length === 0) return null;

  return (
    <section className={twMerge("w-full", className)}>
      <h2 className="text-2xl font-semibold">Заявки в друзья</h2>
      <ul className="flex flex-col gap-4"></ul>
    </section>
  );
};
