import Button from "@/shared/ui/button";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";
import WishlistImage from "@/shared/assets/images/empty-wish-list.png";
import Paper from "@/shared/ui/paper";

export const WishlistPage = () => {
  return (
    <Container className="flex gap-x-8 min-h-[calc(100vh-var(--header))]">
      <Sidebar />
      <main className="w-full">
        <Heading>Список желаний</Heading>
        <Paper className="flex flex-col items-center justify-center gap-y-4 mt-8">
          <img
            src={WishlistImage}
            className="w-[420px] aspect-square opacity-80"
          />
          <p className="text-text-200 text-lg">
            {"Ваш список желаний пока пуст :("}
          </p>
          <Button variant="outlined" size="sm">
            Добавить желание
          </Button>
        </Paper>
      </main>
    </Container>
  );
};
