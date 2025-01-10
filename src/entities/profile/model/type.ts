import { User } from "firebase/auth";

export type Profile = Pick<User, "displayName" | "photoURL" | "email" | "uid">;
export type EditableProfile = Pick<Profile, "displayName" | "photoURL">;

export interface ProfileDto {
  uid: string;
  name?: string;
  photoURL?: string;
  bio?: string;
  email: string;
}
