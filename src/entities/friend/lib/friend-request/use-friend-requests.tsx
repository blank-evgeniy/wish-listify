import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/app/providers/user";
import { friendRequestApi } from "../../api/friend-request-api";

export const useFriendRequests = () => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: [...friendRequestApi.getQueryKey()],
    queryFn: () => friendRequestApi.getFriendRequestList(user?.uid || ""),
  });

  return { requests: data, isLoading, error };
};
