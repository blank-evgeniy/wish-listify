import { createContext } from "react";
import { AuthContextType } from "./type";

export const AuthContext = createContext<AuthContextType>({ user: null });
