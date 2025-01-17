import { auth } from "@/shared/config/firebase";
import { updateProfile } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { ProfileDto } from "../model/type";
import { profileApi } from "../api/api";
import { queryClient } from "@/shared/api/query-client";
import { optimisticUpdateProfile } from "./optimistic-update-profile";

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
      const { name } = newProfileData;

      if (!auth.currentUser) {
        throw new Error("Пользователь не аутентифицирован");
      }

      const promises = [];

      // обновляем профиль в auth
      if (name) {
        promises.push(
          updateProfile(auth.currentUser, {
            displayName: name,
          })
        );
      }

      //обновляем профиль в базе данных
      promises.push(
        profileApi.updateProfile(auth.currentUser.uid, newProfileData)
      );

      await Promise.all(promises);
    },

    onMutate: async (newProfilePartial) => {
      const mutationResult = await optimisticUpdateProfile(newProfilePartial);
      return mutationResult;
    },

    onError: (__err, __newProfile, context) => {
      queryClient.setQueryData(
        [profileApi.getQueryKey()],
        context?.previousProfile
      );
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
