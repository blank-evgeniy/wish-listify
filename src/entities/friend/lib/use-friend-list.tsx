import { useAuth } from "@/app/providers/auth";
import { useQuery } from "@tanstack/react-query";
import { friendApi } from "../api/api";

/**
 * Custom hook to retrieve the friend list for the authenticated user.
 *
 * @returns {object} - An object containing:
 *  - friends: The list of friends for the authenticated user.
 *  - isLoading: A boolean indicating if the data is being fetched.
 *  - error: Any error encountered during the data fetching process.
 */
export const useFriendList = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: friendApi.getQueryKey(),
    queryFn: () => friendApi.getFriendList(user?.uid || ""),
  });

  return { friends: data, isLoading, error };
};
