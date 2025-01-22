import { useUserProfile } from "@/entities/user";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Avatar } from "@/widgets/avatar";
import { Sidebar } from "@/widgets/sidebar";
import { useParams } from "react-router";
import { UserWishlist } from "./user-wishlist";
import Paper from "@/shared/ui/paper";

export const UserPage = () => {
  const { id: uid } = useParams<{ id: string }>();
  const { profile, isLoading, error } = useUserProfile(uid!);

  if (isLoading || error || !profile) return null;

  const { avatarNumber, name, email } = profile;

  return (
    <Container className="flex gap-x-8 min-h-[calc(100vh-var(--header))]">
      <Sidebar />
      <Paper className="w-full mb-8">
        <main className="w-full flex flex-col gap-y-8">
          <section className="flex gap-x-8 items-start">
            <Avatar size="lg" avatarNumber={avatarNumber} />
            <div>
              <Heading className="sm:text-2xl text-xl">{name}</Heading>
              <h3 className="text-lg font-medium text-text-200">{email}</h3>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Список желаний</h2>
            <UserWishlist uid={uid!} className="mt-4" />
          </section>
        </main>
      </Paper>
    </Container>
  );
};
