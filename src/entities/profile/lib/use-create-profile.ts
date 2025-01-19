import { useAuth } from "@/app/providers/auth";
import { useMutation } from "@tanstack/react-query";
import { profileApi } from "../api/api";
import { ProfileDto } from "../model/type";

export const useCreateProfile = () => {
  const { user } = useAuth();

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
