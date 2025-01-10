import { useQuery } from "@tanstack/react-query";
import { profileApi } from "./api";
import { useUser } from "@/app/providers/user";

export const useProfile = () => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: [profileApi.getQueryKey()],
    queryFn: () => profileApi.getProfile(user?.uid || ""),
  });

  return { profile: data, isLoading, error };
};
