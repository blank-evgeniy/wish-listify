import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { wishApi } from "../api/api";

export const useWish = (wishId: string) => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [wishApi.getQueryKey(), wishId],
    queryFn: () => wishApi.getWish(user?.uid || "", wishId),
  });

  return { wish: data, isLoading, error };
};
