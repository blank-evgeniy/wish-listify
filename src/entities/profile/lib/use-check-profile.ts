import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/app/providers/user";
import { profileApi } from "../api/api";

export const useCheckProfile = () => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: [profileApi.getQueryKey(), "check"],
    queryFn: () => profileApi.checkProfile(user?.uid || ""),
  });

  return { hasProfile: data, isLoading, error };
};
