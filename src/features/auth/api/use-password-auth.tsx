import { auth } from "@/shared/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { AuthData } from "../model/type";

/**
 * Custom hook to handle user authentication using email and password.
 *
 * @returns {object} - An object containing:
 *  - handleSignIn: Function to trigger the authentication.
 *  - isLoading: Boolean indicating if the authentication is in progress.
 *  - error: Any error encountered during the authentication process.
 */
export const usePasswordAuth = () => {
  const mutation = useMutation({
    mutationFn: ({ email, password }: AuthData) =>
      signInWithEmailAndPassword(auth, email, password),
  });

  return {
    handleSignIn: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
