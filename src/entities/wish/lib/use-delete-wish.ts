import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/app/providers/user";
import { wishApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";

export const useDeleteWish = () => {
  const { user } = useUser();

  const mutation = useMutation({
    mutationFn: (wishId: string) => wishApi.deleteWish(user?.uid || "", wishId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [wishApi.getQueryKey()] });
    },
  });

  return {
    handleDeleteWish: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
