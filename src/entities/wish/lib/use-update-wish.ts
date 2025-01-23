import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { wishApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";
import { WishDto } from "../model/type";

export const useUpdateWish = () => {
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: ({
      wishId,
      data,
    }: {
      wishId: string;
      data: Partial<WishDto>;
    }) => wishApi.updateWish(user?.uid || "", wishId, data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [...wishApi.getQueryKey()] });
    },
  });

  return {
    handleUpdateWish: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
