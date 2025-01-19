import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { profileApi } from "../api/api";

export const useCheckProfile = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [profileApi.getQueryKey(), "check"],
    queryFn: () => profileApi.checkProfile(user?.uid || ""),
  });

  return { hasProfile: data, isLoading, error };
};
