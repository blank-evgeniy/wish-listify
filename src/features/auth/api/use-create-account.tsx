import { auth } from "@/shared/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "react-query";
import { AuthData } from "../model/type";

/**
 * Custom hook to handle user account creation using email and password.
 *
 * @returns {object} - An object containing:
 *  - handleCreate: Function to trigger the account creation.
 *  - isLoading: Boolean indicating if the account creation is in progress.
 *  - error: Any error encountered during the account creation process.
 */
export const useCreateAccount = () => {
  const mutation = useMutation({
    mutationFn: ({ email, password }: AuthData) =>
      createUserWithEmailAndPassword(auth, email, password),
    onSuccess: () => {
      // TODO: редирект на определенную страницу
    },
  });

  return {
    handleCreate: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};
