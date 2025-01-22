import Container from "@/shared/ui/container";
import { Sidebar } from "@/widgets/sidebar";
import { useParams } from "react-router";
import { UserWishlist } from "./user-wishlist";
import Paper from "@/shared/ui/paper";
import { UserInfo } from "./user-info";

export const UserPage = () => {
  const { id: uid } = useParams<{ id: string }>();

  return (
    <Container className="flex gap-x-8 min-h-[calc(100vh-var(--header))]">
      <Sidebar />
      <Paper className="w-full mb-8">
        <main className="w-full flex flex-col gap-y-8">
          <UserInfo uid={uid!} />
          <section>
            <h2 className="text-2xl font-semibold">Список желаний</h2>
            <UserWishlist uid={uid!} className="mt-4" />
          </section>
        </main>
      </Paper>
    </Container>
  );
};
