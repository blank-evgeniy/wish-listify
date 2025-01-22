import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/api";

export const useUserProfile = (uid: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...userApi.getQueryKey(uid)],
    queryFn: () => userApi.getUserProfile(uid),
  });

  return { profile: data, isLoading, error };
};
