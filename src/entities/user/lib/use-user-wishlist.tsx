import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/api";

/**
 * Retrieves the wishlist for the given user ID.
 *
 * @param uid The ID of the user whose wishlist should be retrieved.
 * @returns An object containing the wishlist, a boolean indicating if the data is being fetched, and any error encountered during the data fetching process.
 */
export const useUserWishlist = (uid: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [...userApi.getQueryKey(uid), "wishlist"],
    queryFn: () => userApi.getUserWishList(uid),
  });

  return { wishlist: data, isLoading, error };
};
