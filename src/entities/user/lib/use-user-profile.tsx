import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/api";

/**
 * Retrieves the user profile for the given user ID.
 *
 * @param uid The ID of the user whose profile should be retrieved.
 * @returns An object containing the user profile, a boolean indicating if the data is being fetched, and any error encountered during the data fetching process.
 */
export const useUserProfile = (uid: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...userApi.getQueryKey(uid)],
    queryFn: () => userApi.getUserProfile(uid),
  });

  return { profile: data, isLoading, error };
};
