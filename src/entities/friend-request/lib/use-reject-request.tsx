import { useAuth } from "@/app/providers/auth";
import { useMutation } from "@tanstack/react-query";
import { friendRequestApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";

export const useRejectRequest = () => {
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: (friendId: string) =>
      friendRequestApi.rejectFriendRequest(friendId, user?.uid || ""),

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: friendRequestApi.getQueryKey(),
      });
    },

    onSuccess: async (__, rejectedId) => {
      const requests = queryClient.getQueryData(
        friendRequestApi.getQueryKey()
      ) as string[];

      if (requests) {
        queryClient.setQueryData(
          friendRequestApi.getQueryKey(),
          requests.filter((request) => request !== rejectedId)
        );
      }
    },
  });

  return {
    handleRejectRequest: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
