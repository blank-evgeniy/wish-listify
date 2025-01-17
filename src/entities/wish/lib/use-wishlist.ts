import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/app/providers/user";
import { wishApi } from "../api/api";

export const useWishlist = () => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: [wishApi.getQueryKey()],
    queryFn: () => wishApi.getWishList(user?.uid || ""),
  });

  return { wishlist: data, isLoading, error };
};
