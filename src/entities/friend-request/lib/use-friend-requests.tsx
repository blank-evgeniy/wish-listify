import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { friendRequestApi } from "../api/api";

/**
 * Custom hook to retrieve the friend request list for the authenticated user.
 *
 * @returns {object} - An object containing:
 *  - requests: The list of friend requests for the authenticated user.
 *  - isLoading: A boolean indicating if the data is being fetched.
 *  - error: Any error encountered during the data fetching process.
 */
export const useFriendRequests = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: friendRequestApi.getQueryKey(),
    queryFn: () => friendRequestApi.getFriendRequestList(user?.uid || ""),
  });

  return { requests: data, isLoading, error };
};
