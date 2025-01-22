import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/api";

export const useUserWishlist = (uid: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...userApi.getQueryKey(uid), "wishlist"],
    queryFn: () => userApi.getUserWishList(uid),
  });

  return { wishlist: data, isLoading, error };
};
