import { auth } from "@/shared/config/firebase";
import { updateProfile } from "firebase/auth";
import { useMutation } from "react-query";
import { EditableProfile } from "../model/type";

/**
 * Custom hook to handle updating the current user's profile using Firebase Auth.
 *
 * @returns {object} - An object containing:
 *  - handleUpdateProfile: Function to trigger the profile update.
 *  - isLoading: Boolean indicating if the profile update is in progress.
 *  - error: Any error encountered during the profile update process.
 *
 * Throws an error if the user is not authenticated.
 */

export const useUpdateProfile = () => {
  const mutation = useMutation({
    mutationFn: async (newProfileData: Partial<EditableProfile>) => {
      if (!auth.currentUser) {
        throw new Error("Пользователь не аутентифицирован");
      }

      await updateProfile(auth.currentUser, newProfileData);

      return auth.currentUser;
    },
  });

  return {
    handleUpdateProfile: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};
