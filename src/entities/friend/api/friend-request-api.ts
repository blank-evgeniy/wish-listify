import { db } from "@/shared/config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { FriendDto } from "../model/type";

export const friendRequestApi = {
  baseCollection: "friends",

  getQueryKey: function () {
    return [this.baseCollection, "requests"];
  },

  getFriendRequestList: async function (uid: string) {
    try {
      const friendsRef = collection(db, "users", uid, this.baseCollection);
      const q = query(friendsRef, where("requestAccepted", "==", false));

      const querySnapshot = await getDocs(q);

      const documents: FriendDto[] = [];

      if (querySnapshot.empty) return documents;

      querySnapshot.forEach((doc) => {
        documents.push(doc.data() as FriendDto);
      });

      return documents;
    } catch (error) {
      console.error("Ошибка при получении списка заявок:", error);
    }
  },

  sendFriendRequest: async function (uid: string, friendId: string) {
    try {
      if (uid === friendId)
        throw new Error("Нельзя отправить заявку самому себе");

      const friendsRef = collection(db, "users", uid, this.baseCollection);
      const q = query(friendsRef, where("uid", "==", friendId));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) throw new Error("Заявка уже отправлена");

      const userRef = doc(db, "users", friendId);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) throw new Error("Пользователь не найден");

      const newFriendData = { uid: uid, requestAccepted: false };

      await addDoc(
        collection(db, "users", friendId, this.baseCollection),
        newFriendData
      );
    } catch (error) {
      console.error("Ошибка при отправлении заявки", error);
    }
  },

  acceptFriendRequest: async function (uid: string, friendId: string) {
    try {
      const wishRef = doc(db, "users", uid, this.baseCollection, friendId);

      await updateDoc(wishRef, { requestAccepted: true });
    } catch (error) {
      console.error("Ошибка при принятии заявки", error);
    }
  },

  rejectFriendRequest: async function (uid: string, friendId: string) {
    try {
      const wishRef = doc(db, "users", uid, this.baseCollection, friendId);

      await deleteDoc(wishRef);
    } catch (error) {
      console.error("Ошибка при отклонении заявки", error);
    }
  },
};
