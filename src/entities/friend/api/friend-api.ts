import { db } from "@/shared/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FriendDto } from "../model/type";
import { WishDto } from "@/entities/wish";

export const profileApi = {
  baseCollection: "friends",

  getQueryKey: function () {
    return [this.baseCollection];
  },

  getFriendList: async function (uid: string) {
    try {
      const friendsRef = collection(db, "users", uid, this.baseCollection);
      const q = query(friendsRef, where("requestAccepted", "==", true));

      const querySnapshot = await getDocs(q);

      const documents: FriendDto[] = [];

      if (querySnapshot.empty) return documents;

      querySnapshot.forEach((doc) => {
        documents.push(doc.data() as FriendDto);
      });

      return documents;
    } catch (error) {
      console.error("Ошибка при получении списка друзей:", error);
    }
  },

  getFriendWishlistQueryKey: function (friendId: string) {
    return [this.baseCollection, "wishlist", friendId];
  },

  getFriendWishList: async function (friendId: string) {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", friendId, "wishlist")
      );
      const documents: WishDto[] = [];

      if (querySnapshot.empty) return documents;

      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() } as WishDto);
      });

      return documents;
    } catch (error) {
      console.error("Ошибка при получении списка желаний:", error);
    }
  },
};
