import { db } from "@/shared/config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { WishDto } from "../model/type";

export const wishApi = {
  baseCollection: "wishlist",

  getQueryKey: function () {
    return [this.baseCollection];
  },

  getWishList: async function (uid: string) {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", uid, this.baseCollection)
      );
      const documents: WishDto[] = [];

      console.log(querySnapshot.docs);

      if (querySnapshot.empty) return documents;

      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() } as WishDto);
      });

      return documents;
    } catch (error) {
      console.error("Ошибка при получении списка желаний:", error);
    }
  },

  addWish: async function (uid: string, data: Omit<WishDto, "id">) {
    try {
      await addDoc(collection(db, "users", uid, this.baseCollection), data);
    } catch (error) {
      console.error("Ошибка при добавлении желания:", error);
    }
  },

  updateWish: async function (
    uid: string,
    wishId: string,
    data: Omit<WishDto, "id">
  ) {
    try {
      const wishRef = doc(db, "users", uid, this.baseCollection, wishId);
      await updateDoc(wishRef, data);
    } catch (error) {
      console.error("Ошибка при обновлении желания:", error);
    }
  },

  deleteWish: async function (uid: string, wishId: string) {
    try {
      const wishRef = doc(db, "users", uid, this.baseCollection, wishId);
      await deleteDoc(wishRef);
    } catch (error) {
      console.error("Ошибка при удалении желания:", error);
    }
  },
};
