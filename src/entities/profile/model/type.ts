import { User } from "firebase/auth";

export type Profile = Pick<User, "displayName" | "photoURL" | "email" | "uid">;
export type EditableProfile = Pick<Profile, "displayName" | "photoURL">;

export interface ProfileDto {
  uid: string;
  email: string;
  avatarNumber?: number;
  name?: string;
  bio?: string;
}
