import { useContext, useEffect, useState } from "react";
import { UserContext } from "../model/user-context";
import { auth } from "@/shared/config/firebase";

/**
 * Hook to get the current user and a flag indicating if the user has been loaded.
 *
 * @returns {object} - An object containing:
 *  - user: The current user, or null if the user is not logged in.
 *  - loading: A boolean indicating if the user is being loaded.
 *
 * Throws an error if the hook is used outside of a UserProvider.
 */
export const useUser = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(() => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  const { user } = context;

  return { user, loading };
};
