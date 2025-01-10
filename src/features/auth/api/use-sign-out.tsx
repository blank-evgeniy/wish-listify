import { signOut } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";

import { auth } from "@/shared/config/firebase";
import { queryClient } from "@/shared/api/query-client";
import { profileApi } from "@/entities/profile/api/api";

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
    onSettled: () => {
      queryClient.removeQueries({
        queryKey: [profileApi.getQueryKey()],
      });
    },
  });

  return {
    handleSignOut: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
