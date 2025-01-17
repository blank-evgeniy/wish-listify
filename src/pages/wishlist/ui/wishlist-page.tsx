import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";
import WishlistImage from "@/shared/assets/images/empty-wish-list.png";
import Paper from "@/shared/ui/paper";
import { AppLink } from "@/shared/ui/link";
import { RoutePath } from "@/app/config/routes";
import { useWishlist, WishCard } from "@/entities/wish";

export const WishlistPage = () => {
  const { wishlist, isLoading, error } = useWishlist();

  if (isLoading) return null;
  if (error) return null;

  return (
    <Container className="flex gap-x-8 min-h-[calc(100vh-var(--header))]">
      <Sidebar />
      <main className="w-full">
        <Heading>Список желаний</Heading>
        <Paper className="flex flex-col items-center justify-center gap-y-8 my-8">
          {wishlist?.length === 0 ? (
            <>
              <img
                src={WishlistImage}
                className="w-[420px] aspect-square opacity-80"
              />
              <p className="text-text-200 text-lg">
                {"Ваш список желаний пока пуст :("}
              </p>
            </>
          ) : (
            <div className="grid grid-cols-4 gap-x-4 gap-y-2 w-full">
              {wishlist?.map((wish) => (
                <WishCard key={wish.id} data={wish} />
              ))}
            </div>
          )}
          <AppLink to={RoutePath.ADD_WISH} variant="outlined" size="sm">
            Добавить желание
          </AppLink>
        </Paper>
      </main>
    </Container>
  );
};
