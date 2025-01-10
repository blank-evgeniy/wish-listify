import { db } from "@/shared/config/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ProfileDto } from "../model/type";

export const profileApi = {
  baseCollection: "users",

  getQueryKey: () => [profileApi.baseCollection, "profile"],

  getProfile: async (id: string) => {
    const userRef = doc(db, profileApi.baseCollection, id);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data() as ProfileDto;
      return userData;
    } else {
      console.log("Пользователь не найден!");
      return undefined;
    }
  },

  updateProfile: async (id: string, data: Partial<ProfileDto>) => {
    try {
      const userRef = doc(db, profileApi.baseCollection, id);
      await updateDoc(userRef, data);
    } catch (error) {
      console.error("Ошибка при обновлении профиля:", error);
    }
  },

  createProfile: async (id: string, data: ProfileDto) => {
    try {
      const userRef = doc(db, profileApi.baseCollection, id);
      await setDoc(userRef, data);
    } catch (error) {
      console.error("Ошибка при создании профиля:", error);
    }
  },

  checkProfile: async (id: string) => {
    const userRef = doc(db, profileApi.baseCollection, id);
    const userDoc = await getDoc(userRef);
    return userDoc.exists();
  },
};
