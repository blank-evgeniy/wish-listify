import { useUser } from "@/app/providers/user";
import { useMutation } from "@tanstack/react-query";
import { friendRequestApi } from "../../api/friend-request-api";
import { queryClient } from "@/shared/api/query-client";

export const useAcceptRequest = () => {
  const { user } = useUser();

  const mutation = useMutation({
    mutationFn: (friendId: string) =>
      friendRequestApi.acceptFriendRequest(user?.uid || "", friendId),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [...friendRequestApi.getQueryKey()],
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
