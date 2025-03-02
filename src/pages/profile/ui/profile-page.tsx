import { useProfile, useUpdateProfile } from "@/entities/profile";
import { Sidebar } from "@/widgets/sidebar";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import EditableField from "@/shared/ui/editable-field";
import Input from "@/shared/ui/input";
import { Avatar, AvatarPicker } from "@/widgets/avatar";
import Paper from "@/shared/ui/paper";
import { SignOutButton } from "@/features/auth";
import { InputSkeleton, SkeletonBlock } from "@/widgets/skeleton";

export const ProfilePage = () => {
  const { profile, isLoading: isLoadingProfile } = useProfile();
  const { handleUpdateProfile, isLoading } = useUpdateProfile();

  return (
    <Container className="flex gap-x-8 min-h-screen-fixed sm:sm-min-h-screen-fixed">
      <Sidebar />

      <main className="w-full">
        <Heading>Профиль</Heading>

        <Paper className="my-8 relative">
          {isLoadingProfile ? (
            <SkeletonBlock className="w-32 h-32 rounded-3xl block" />
          ) : (
            <Avatar avatarNumber={profile?.avatarNumber ?? 0} size="lg" />
          )}
          <SignOutButton className="md:hidden absolute right-4 top-4" />
          <p className="text-text-200 mt-4 font-medium">Выберите аватар:</p>
          <AvatarPicker
            className="mt-2"
            avatarNumber={profile?.avatarNumber ?? 0}
            onAvatarChange={(newAvatarNumber) =>
              handleUpdateProfile({ avatarNumber: newAvatarNumber })
            }
          />
          <div className="grid grid-cols-2 gap-4 mt-8">
            {isLoadingProfile ? (
              <>
                <InputSkeleton label="Почта:" />
                <InputSkeleton label="Имя:" />
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </Paper>
      </main>
    </Container>
  );
};
