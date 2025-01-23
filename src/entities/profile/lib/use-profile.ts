import { useQuery } from "@tanstack/react-query";
import { profileApi } from "../api/api";
import { useAuth } from "@/app/providers/auth";

/**
 * Custom hook to retrieve the profile data for the authenticated user.
 *
 * @returns {object} - An object containing:
 *  - profile: The profile data for the authenticated user.
 *  - isLoading: A boolean indicating if the data is being fetched.
 *  - error: Any error encountered during the data fetching process.
 */
export const useProfile = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [profileApi.getQueryKey()],
    queryFn: () => profileApi.getProfile(user?.uid || ""),
  });

  return { profile: data, isLoading, error };
};
