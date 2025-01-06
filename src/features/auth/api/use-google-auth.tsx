import { signInWithPopup } from "firebase/auth";
import { useMutation } from "react-query";

import { auth, googleProvider } from "@/shared/config/firebase";

/**
 * Custom hook to handle user authentication using Google account.
 *
 * @returns {object} - An object containing:
 *  - handleSignIn: Function to trigger the authentication.
 *  - loading: Boolean indicating if the authentication is in progress.
 *  - error: Any error encountered during the authentication process.
 */
export const useGoogleAuth = () => {
  const mutation = useMutation({
    mutationFn: () => signInWithPopup(auth, googleProvider),
    onSuccess: () => {
      // TODO: редирект на определенную страницу
    },
  });

  return {
    handleSignIn: mutation.mutate,
    loading: mutation.isLoading,
    error: mutation.error,
  };
};
