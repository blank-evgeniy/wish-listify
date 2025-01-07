import { useUser } from "@/app/providers/user";
import { useUpdateProfile } from "@/entities/profile";
import { Sidebar } from "@/widgets/sidebar";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import EditableField from "@/shared/ui/editable-field";
import Avatar from "@/shared/ui/avatar";

export const ProfilePage = () => {
  const { user } = useUser();
  const { handleUpdateProfile, isLoading } = useUpdateProfile();

  return (
    <div className="py-8">
      <Container className="flex gap-x-8">
        <Sidebar />
        <main className="w-full">
          <Heading>Профиль</Heading>

          <Avatar size="lg" userData={user} className="mt-8" />

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <span className="font-semibold">Почта:</span>
              <div className="border-2 border-rose-300 rounded-lg p-2 w-full mt-2">
                {user?.email}
              </div>
            </div>

            <EditableField
              label="Имя:"
              name="displayName"
              id="displayName"
              placeholder="Придумайте имя"
              disabled={isLoading}
              defaultValue={user?.displayName ?? ""}
              onAccept={(value) => handleUpdateProfile({ displayName: value })}
            />
          </div>
        </main>
      </Container>
    </div>
  );
};
