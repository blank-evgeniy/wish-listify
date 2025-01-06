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
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return user;
};
