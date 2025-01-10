import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { profileApi } from "@/entities/profile/api/api";
import { auth } from "@/shared/config/firebase";
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
    mutationFn: async ({ email, password }: AuthData) => {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      await profileApi.createProfile(user.uid, {
        uid: user.uid,
        email: user.email ?? "",
        name: user.displayName ?? "",
      });
    },
    onSuccess: () => {
      // TODO: редирект на определенную страницу
    },
  });

  return {
    handleCreate: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
