import { useProfile, useUpdateProfile } from "@/entities/profile";
import { Sidebar } from "@/widgets/sidebar";
import Container from "@/shared/ui/container";
import { Heading } from "@/shared/ui/heading";
import EditableField from "@/shared/ui/editable-field";
import Avatar from "@/shared/ui/avatar";
import { Loader } from "@/shared/ui/loader";

export const ProfilePage = () => {
  const { profile, isLoading: isLoadingProfile } = useProfile();
  const { handleUpdateProfile, isLoading } = useUpdateProfile();

  return (
    <div className="py-8">
      <Container className="flex gap-x-8">
        <Sidebar />

        <main className="w-full">
          <Heading>Профиль</Heading>

          {isLoadingProfile ? (
            <div className="w-full flex items-center justify-center mt-8">
              <Loader />
            </div>
          ) : (
            <>
              {" "}
              <Avatar
                size="lg"
                name={profile?.name}
                photoURL={profile?.photoURL}
                email={profile?.email}
                className="mt-8"
              />
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <span className="font-semibold">Почта:</span>
                  <div className="border-2 border-rose-300 rounded-lg p-2 w-full mt-1">
                    {profile?.email}
                  </div>
                </div>

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
        </main>
      </Container>
    </div>
  );
};
