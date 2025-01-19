import { useQuery } from "@tanstack/react-query";
import { profileApi } from "../api/api";
import { useAuth } from "@/app/providers/auth";

export const useProfile = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [profileApi.getQueryKey()],
    queryFn: () => profileApi.getProfile(user?.uid || ""),
  });

  return { profile: data, isLoading, error };
};
