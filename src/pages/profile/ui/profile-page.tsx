import { useProfile, useUpdateProfile } from "@/entities/profile";
import { Sidebar } from "@/widgets/sidebar";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import EditableField from "@/shared/ui/editable-field";
import { Loader } from "@/shared/ui/loader";
import Input from "@/shared/ui/input";
import { Avatar, AvatarPicker } from "@/widgets/avatar";
import Paper from "@/shared/ui/paper";

export const ProfilePage = () => {
  const { profile, isLoading: isLoadingProfile } = useProfile();
  const { handleUpdateProfile, isLoading } = useUpdateProfile();

  return (
    <Container className="flex gap-x-8 min-h-[calc(100vh-var(--header))]">
      <Sidebar />

      <main className="w-full">
        <Heading>Профиль</Heading>

        <Paper className="mt-8">
          {isLoadingProfile ? (
            <div className="w-full flex items-center justify-center my-16">
              <Loader />
            </div>
          ) : (
            <>
              <Avatar
                avatarNumber={profile?.avatarNumber ?? 0}
                size="lg"
                className="mt-8"
              />
              <p className="text-text-200 mt-4 font-medium">Выберите аватар:</p>
              <AvatarPicker
                className="mt-2"
                avatarNumber={profile?.avatarNumber ?? 0}
                onAvatarChange={(newAvatarNumber) =>
                  handleUpdateProfile({ avatarNumber: newAvatarNumber })
                }
              />
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Input
                  label="Почта:"
                  value={profile?.email ?? ""}
                  disabled={true}
                />

                <EditableField
                  label="Имя:"
                  name="displayName"
                  id="displayName"
                  placeholder="Придумайте имя"
                  disabled={isLoading}
                  defaultValue={profile?.name ?? ""}
                  onAccept={(value) => handleUpdateProfile({ name: value })}
                />
              </div>
            </>
          )}
        </Paper>
      </main>
    </Container>
  );
};
