import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";
import FriendImage from "@/shared/assets/images/friends.png";
import Button from "@/shared/ui/button";

export const FriendsPage = () => {
  return (
    <div className="py-8">
      <Container className="flex gap-x-8">
        <Sidebar />
        <main className="w-full">
          <Heading>Друзья</Heading>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <img
              src={FriendImage}
              className="w-[420px] aspect-square opacity-50"
            />
            <p className="text-rose-100 text-lg">
              {"Ваш список друзей пока пуст :("}
            </p>
            <Button>Добавить друзей</Button>
          </div>
        </main>
      </Container>
    </div>
  );
};
