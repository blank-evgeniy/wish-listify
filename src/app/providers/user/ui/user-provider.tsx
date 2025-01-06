import { useState, useEffect, ReactNode } from "react";
import { auth } from "@/shared/config/firebase";
import { User } from "firebase/auth";
import { UserContext } from "../model/user-context";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
