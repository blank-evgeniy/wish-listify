import { useQuery } from "@tanstack/react-query";
import { friendApi } from "../../api/friend-api";

export const useFriendWishlist = (friendId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...friendApi.getFriendWishlistQueryKey(friendId)],
    queryFn: () => friendApi.getFriendWishList(friendId),
  });

  return { wishlist: data, isLoading, error };
};
