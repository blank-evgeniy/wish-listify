import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";
import Paper from "@/shared/ui/paper";
import AddWishForm from "./form/add-wish-form";

export const AddWishPage = () => {
  return (
    <Container className="flex gap-x-8 min-h-screen-fixed sm:sm-min-h-screen-fixed">
      <Sidebar />
      <main className="w-full">
        <Heading>Добавить желание</Heading>
        <Paper className="mt-8">
          <AddWishForm />
        </Paper>
      </main>
    </Container>
  );
};
