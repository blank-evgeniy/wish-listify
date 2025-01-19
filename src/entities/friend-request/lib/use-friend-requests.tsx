import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { friendRequestApi } from "../api/api";

export const useFriendRequests = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [...friendRequestApi.getQueryKey()],
    queryFn: () => friendRequestApi.getFriendRequestList(user?.uid || ""),
  });

  return { requests: data, isLoading, error };
};
