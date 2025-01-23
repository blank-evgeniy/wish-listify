import { useAuth } from "@/app/providers/auth";
import { useMutation } from "@tanstack/react-query";
import { friendRequestApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";

/**
 * Custom hook to handle sending a friend request to another user.
 *
 * @returns {object} - An object containing:
 *  - handleSendRequest: Function to trigger the request with the friend's id.
 *  - isLoading: Boolean indicating if the request is in progress.
 *  - error: Any error encountered during the request process.
 *  - isSuccess: Boolean indicating if the request was successful.
 *  - isError: Boolean indicating if the request encountered an error.
 */
export const useSendRequest = () => {
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: (friendId: string) =>
      friendRequestApi.sendFriendRequest(user?.uid || "", friendId),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [...friendRequestApi.getQueryKey()],
      });
    },
  });

  return {
    handleSendRequest: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
