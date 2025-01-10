import { signInWithPopup } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";

import { auth, googleProvider } from "@/shared/config/firebase";
import { profileApi } from "@/entities/profile/api/api";

/**
 * Custom hook to handle user authentication using Google account.
 *
 * @returns {object} - An object containing:
 *  - handleSignIn: Function to trigger the authentication.
 *  - isLoading: Boolean indicating if the authentication is in progress.
 *  - error: Any error encountered during the authentication process.
 */
export const useGoogleAuth = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const user = userCredentials.user;

      const hasProfile = await profileApi.checkProfile(user.uid);

      if (!hasProfile) {
        await profileApi.createProfile(user.uid, {
          uid: user.uid,
          email: user.email ?? "",
          name: user.displayName ?? "",
        });
      }
    },
    onSuccess: () => {
      // TODO: редирект на определенную страницу
    },
  });

  return {
    handleSignIn: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
