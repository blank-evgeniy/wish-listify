import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/app/providers/user";
import { wishApi } from "../api/api";

export const useWish = (wishId: string) => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: [wishApi.getQueryKey(), wishId],
    queryFn: () => wishApi.getWish(user?.uid || "", wishId),
  });

  return { wish: data, isLoading, error };
};
