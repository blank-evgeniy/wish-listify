import { useQuery } from "@tanstack/react-query";
import { profileApi } from "./api";
import { useUser } from "@/app/providers/user";

export const useCheckProfile = () => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: [profileApi.getQueryKey(), "check"],
    queryFn: () => profileApi.checkProfile(user?.uid || ""),
  });

  return { hasProfile: data, isLoading, error };
};
