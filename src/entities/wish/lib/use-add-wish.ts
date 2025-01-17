import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/app/providers/user";
import { wishApi } from "../api/api";
import { WishDto } from "../model/type";
import { queryClient } from "@/shared/api/query-client";

export const useAddWish = () => {
  const { user } = useUser();

  const mutation = useMutation({
    mutationFn: (wishData: Omit<WishDto, "id">) =>
      wishApi.addWish(user?.uid || "", wishData),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [wishApi.getQueryKey()] });
    },
  });

  return {
    handleAddWish: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
