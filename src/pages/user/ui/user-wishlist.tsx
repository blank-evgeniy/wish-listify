import { useUserWishlist } from "@/entities/user";
import { WishCard } from "@/entities/wish";
import { Loader } from "@/shared/ui/loader";
import { twMerge } from "tailwind-merge";

interface UserWishlistProps {
  className?: string;
  uid: string;
}

export const UserWishlist = ({ className, uid }: UserWishlistProps) => {
  const { wishlist, isLoading } = useUserWishlist(uid);

  if (isLoading || !wishlist)
    return (
      <div
        className={twMerge("py-10 flex justify-center items-center", className)}
      >
        <Loader />
      </div>
    );

  if (!wishlist.length)
    return <div className={twMerge(className)}>Список желаний пуст</div>;

  return (
    <div
      className={twMerge(
        "grid lg:grid-cols-4 grid-cols-1 gap-x-4 gap-y-2 w-full",
        className
      )}
    >
      {wishlist.map((wish) => (
        <WishCard key={wish.id} data={wish} />
      ))}
    </div>
  );
};
