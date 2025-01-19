import { useAuth } from "@/app/providers/auth";
import { useMutation } from "@tanstack/react-query";
import { friendRequestApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";

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
