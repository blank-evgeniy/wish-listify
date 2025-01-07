import Button from "@/shared/ui/button";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";
import WishlistImage from "@/shared/assets/images/empty-wish-list.png";

export const WishlistPage = () => {
  return (
    <div className="py-8">
      <Container className="flex gap-x-8">
        <Sidebar />
        <main className="w-full">
          <Heading>Список желаний</Heading>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <img
              src={WishlistImage}
              className="w-[420px] aspect-square opacity-50"
            />
            <p className="text-rose-100 text-lg">
              {"Ваш список желаний пока пуст :("}
            </p>
            <Button>Добавить желание</Button>
          </div>
        </main>
      </Container>
    </div>
  );
};
