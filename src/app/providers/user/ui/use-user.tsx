import { useContext } from "react";
import { UserContext } from "../model/user-context";

/**
 * Hook to get the current user from context.
 *
 * @throws {Error} - If useUser is called outside of a UserProvider.
 *
 * @returns {User | null} - The current user.
 */
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  const { user } = context;

  return user;
};
