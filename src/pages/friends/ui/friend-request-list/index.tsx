import { useFriendRequests } from "@/entities/friend-request/lib/use-friend-requests";
import { RequestCard } from "@/entities/friend-request";
import { twMerge } from "tailwind-merge";
import { Badge } from "@/shared/ui/badge";

interface FriendRequestListProps {
  className?: string;
}

export const FriendRequestList = ({ className }: FriendRequestListProps) => {
  const { requests, isLoading, error } = useFriendRequests();

  if (isLoading || error || !requests) return null;

  if (requests.length === 0) return null;

  return (
    <section className={twMerge("w-full", className)}>
      <h2 className="text-2xl font-semibold leading-none flex items-center gap-x-2">
        Заявки <Badge>{requests.length}</Badge>
      </h2>
      <ul className="flex flex-col gap-4 mt-4">
        {requests.map((request) => (
          <RequestCard key={request.uid} data={request} />
        ))}
      </ul>
    </section>
  );
};
