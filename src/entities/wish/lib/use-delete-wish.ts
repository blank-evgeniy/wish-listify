import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { wishApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";
import { WishDto } from "../model/type";

export const useDeleteWish = () => {
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: (wishId: string) => wishApi.deleteWish(user?.uid || "", wishId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [...wishApi.getQueryKey()] });
    },
    onSuccess: async (__, deletedId) => {
      const wishlist = queryClient.getQueryData(
        wishApi.getQueryKey()
      ) as WishDto[];

      if (wishlist) {
        queryClient.setQueryData(
          [...wishApi.getQueryKey()],
          wishlist.filter((wish) => wish.id !== deletedId)
        );
      }
    },
  });

  return {
    handleDeleteWish: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
