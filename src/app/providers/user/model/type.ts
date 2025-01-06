import { User } from "firebase/auth";

export type UserContextType = {
  user: User | null;
};
