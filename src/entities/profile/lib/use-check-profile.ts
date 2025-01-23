import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { profileApi } from "../api/api";

/**
 * Custom hook to check if the authenticated user has a profile.
 *
 * Utilizes the `useAuth` hook to get the current user and `useQuery` from
 * `@tanstack/react-query` to check the existence of the user's profile.
 *
 * @returns {object} - An object containing:
 *  - hasProfile: A boolean indicating whether the user has a profile.
 *  - isLoading: A boolean indicating if the profile check is in progress.
 *  - error: Any error encountered during the profile check process.
 */

export const useCheckProfile = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [profileApi.getQueryKey(), "check"],
    queryFn: () => profileApi.checkProfile(user?.uid || ""),
  });

  return { hasProfile: data, isLoading, error };
};
