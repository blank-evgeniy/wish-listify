import { useAuth } from "@/app/providers/auth";
import { useMutation } from "@tanstack/react-query";
import { profileApi } from "../api/api";
import { ProfileDto } from "../model/type";

/**
 * Custom hook to handle profile creation for the authenticated user.
 *
 * @returns {object} - An object containing:
 *  - handleCreateProfile: Function to trigger the profile creation with provided profile data.
 *  - isLoading: Boolean indicating if the profile creation is in progress.
 *  - error: Any error encountered during the profile creation process.
 *
 * The hook creates a new profile in the database for the authenticated user.
 */

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
