import { useAuth } from "@/app/providers/auth";
import { useMutation } from "@tanstack/react-query";
import { friendRequestApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";

export const useAcceptRequest = () => {
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: (friendId: string) =>
      friendRequestApi.acceptFriendRequest(friendId, user?.uid || ""),

    onSuccess: async (__, acceptedId) => {
      const requests = queryClient.getQueryData(
        friendRequestApi.getQueryKey()
      ) as string[];

      if (requests) {
        queryClient.setQueryData(
          friendRequestApi.getQueryKey(),
          requests.filter((request) => request !== acceptedId)
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: friendRequestApi.getQueryKey(),
      });
      queryClient.invalidateQueries({
        queryKey: [friendRequestApi.friendsFieldName],
      });
    },
  });

  return {
    handleAcceptRequest: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
