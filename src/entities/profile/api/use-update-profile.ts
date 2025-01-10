import { auth } from "@/shared/config/firebase";
import { updateProfile } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { ProfileDto } from "../model/type";
import { profileApi } from "./api";
import { queryClient } from "@/shared/api/query-client";

/**
 * Custom hook to handle profile updates for the authenticated user.
 *
 * @returns {object} - An object containing:
 *  - handleUpdateProfile: Function to trigger the update with new profile data.
 *  - isLoading: Boolean indicating if the update is in progress.
 *  - error: Any error encountered during the update process.
 *
 * @throws Will throw an error if the user is not authenticated.
 *
 * The hook updates both the authentication profile (displayName and photoURL)
 * and the user's profile data in the database.
 */

export const useUpdateProfile = () => {
  const mutation = useMutation({
    mutationFn: async (newProfileData: Partial<ProfileDto>) => {
      const { name, photoURL } = newProfileData;

      if (!auth.currentUser) {
        throw new Error("Пользователь не аутентифицирован");
      }

      const promises = [];

      // обновляем профиль в auth
      if (name || photoURL) {
        const newAuthData = {
          displayName: name,
          photoURL,
        };
        promises.push(updateProfile(auth.currentUser, newAuthData));
      }

      //обновляем профиль в базе данных
      promises.push(
        profileApi.updateProfile(auth.currentUser.uid, newProfileData)
      );

      await Promise.all(promises);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [profileApi.getQueryKey()] });
    },
  });

  return {
    handleUpdateProfile: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
