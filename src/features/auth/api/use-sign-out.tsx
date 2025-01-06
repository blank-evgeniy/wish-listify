import { signOut } from "firebase/auth";
import { useMutation } from "react-query";

import { auth } from "@/shared/config/firebase";

/**
 * Custom hook to handle user sign-out using Firebase Auth.
 *
 * @returns {object} - An object containing:
 *  - handleSignOut: Function to trigger the sign-out.
 *  - isLoading: Boolean indicating if the sign-out is in progress.
 *  - error: Any error encountered during the sign-out process.
 */
export const useSignOut = () => {
  const mutation = useMutation({
    mutationFn: () => signOut(auth),
  });

  return {
    handleSignOut: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};
