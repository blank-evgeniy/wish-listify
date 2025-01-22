import { useAuth } from "@/app/providers/auth";
import { useQuery } from "@tanstack/react-query";
import { friendApi } from "../api/api";

export const useFriendList = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [...friendApi.getQueryKey()],
    queryFn: () => friendApi.getFriendList(user?.uid || ""),
  });

  return { friends: data, isLoading, error };
};
