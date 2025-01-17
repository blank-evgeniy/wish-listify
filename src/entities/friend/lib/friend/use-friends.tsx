import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/app/providers/user";
import { friendApi } from "../../api/friend-api";

export const useFriends = () => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: [...friendApi.getQueryKey()],
    queryFn: () => friendApi.getFriendList(user?.uid || ""),
  });

  return { friends: data, isLoading, error };
};
