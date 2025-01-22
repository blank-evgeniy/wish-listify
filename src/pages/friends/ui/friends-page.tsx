import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import { Sidebar } from "@/widgets/sidebar";

import Paper from "@/shared/ui/paper";
import { CopyButton } from "@/shared/ui/copy-button";
import { useAuth } from "@/app/providers/auth";
import { RoutePath } from "@/app/config/routes";
import { FriendRequestList } from "./friend-request-list";
import { FriendList } from "./friend-list";

export const FriendsPage = () => {
  const { user } = useAuth();

  return (
    <Container className="flex gap-x-8 min-h-[calc(100vh-var(--header))]">
      <Sidebar />
      <main className="w-full">
        <Heading>Друзья</Heading>

        <Paper className="flex flex-col items-center justify-center gap-y-4 my-8">
          {user && (
            <div className="w-full flex sm:gap-x-4 gap-x-2 items-center justify-center">
              <p className="text-sm sm:text-base">
                Скопируйте ссылку и поделитесь с друзьями
              </p>
              <CopyButton
                copyText={
                  import.meta.env.VITE_CLIENT_URL +
                  RoutePath.FRIEND_REQUEST.replace(":id", user.uid)
                }
              >
                Копировать
              </CopyButton>
            </div>
          )}
          <FriendRequestList className="mt-4" />
          <FriendList className="mt-8" />
        </Paper>
      </main>
    </Container>
  );
};
