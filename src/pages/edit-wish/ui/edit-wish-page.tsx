import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";
import Paper from "@/shared/ui/paper";
import AddWishForm from "./form/edit-wish-form";
import { useParams } from "react-router";

export const EditWishPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container className="flex gap-x-8 min-h-screen-fixed sm:sm-min-h-screen-fixed">
      <Sidebar />
      <main className="w-full">
        <Heading>Добавить желание</Heading>
        <Paper className="mt-8">
          <AddWishForm wishId={id || ""} />
        </Paper>
      </main>
    </Container>
  );
};
