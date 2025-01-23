import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/providers/auth";
import { wishApi } from "../api/api";

export const useWishlist = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: [...wishApi.getQueryKey()],
    queryFn: () => wishApi.getWishList(user?.uid || ""),
  });

  return { wishlist: data, isLoading, error };
};
