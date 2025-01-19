import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../model/auth-context";
import { auth } from "@/shared/config/firebase";

/**
 * Hook to get the current user and a loading flag.
 *
 * This hook checks if the user is logged in, and if not, sets the loading flag to false.
 * If the user is logged in, it sets the loading flag to false and returns the user.
 *
 * This hook must be used within a AuthProvider.
 *
 * @returns {object} - An object containing:
 *  - user: The current user, or null if the user is not logged in.
 *  - loading: A boolean indicating if the user is being loaded.
 */
export const useAuth = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(() => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  const { user } = context;

  return { user, loading };
};
