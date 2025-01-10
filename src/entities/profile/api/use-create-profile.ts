import { useUser } from "@/app/providers/user";
import { useMutation } from "@tanstack/react-query";
import { profileApi } from "./api";
import { ProfileDto } from "../model/type";

export const useCreateProfile = () => {
  const { user } = useUser();

  const mutation = useMutation({
    mutationFn: (profileData: ProfileDto) =>
      profileApi.createProfile(user?.uid || "", profileData),
  });

  return {
    handleCreateProfile: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
