import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";
import FriendImage from "@/shared/assets/images/friends.png";
import Paper from "@/shared/ui/paper";

export const FriendsPage = () => {
  return (
    <Container className="flex gap-x-8 min-h-[calc(100vh-var(--header))]">
      <Sidebar />
      <main className="w-full">
        <Heading>Друзья</Heading>
        <Paper className="flex flex-col items-center justify-center gap-y-4 my-8">
          <img
            src={FriendImage}
            className="w-[420px] aspect-square opacity-80"
          />
          <p className="text-text-200 text-lg">
            {"Ваш список друзей пока пуст :("}
          </p>
        </Paper>
      </main>
    </Container>
  );
};
