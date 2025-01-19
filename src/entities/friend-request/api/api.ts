import { db } from "@/shared/config/firebase";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export const friendRequestApi = {
  requestsFieldName: "friend-requests",
  friendsFieldName: "friends",

  getQueryKey: function () {
    return [this.requestsFieldName];
  },

  getFriendRequestList: async function (uid: string) {
    try {
      const userRef = doc(db, "users", uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) throw new Error("Пользователь не найден");

      const friendRequests = (userDoc.data()?.[this.requestsFieldName] ||
        []) as string[];

      return friendRequests;
    } catch (error) {
      console.error("Ошибка при получении списка заявок:", error);
    }
  },

  sendFriendRequest: async function (senderId: string, receiverId: string) {
    try {
      if (senderId === receiverId)
        throw new Error("Нельзя отправить заявку самому себе");

      const receiverRef = doc(db, "users", receiverId);
      const receiverDoc = await getDoc(receiverRef);

      if (!receiverDoc.exists()) throw new Error("Получатель не найден");

      await updateDoc(receiverRef, {
        [this.requestsFieldName]: arrayUnion(senderId),
      });
    } catch (error) {
      console.error("Ошибка при отправлении заявки", error);
    }
  },

  acceptFriendRequest: async function (senderId: string, receiverId: string) {
    try {
      const senderRef = doc(db, "users", senderId);
      const receiverRef = doc(db, "users", receiverId);

      await Promise.all([
        updateDoc(senderRef, {
          [this.friendsFieldName]: arrayUnion(receiverId),
        }),
        updateDoc(receiverRef, {
          [this.friendsFieldName]: arrayUnion(senderId),
        }),
        updateDoc(receiverRef, {
          [this.requestsFieldName]: arrayRemove(receiverId),
        }),
      ]);
    } catch (error) {
      console.error("Ошибка при принятии заявки", error);
    }
  },

  rejectFriendRequest: async function (senderId: string, receiverId: string) {
    try {
      const receiverRef = doc(db, "users", receiverId);

      await updateDoc(receiverRef, {
        [this.requestsFieldName]: arrayRemove(senderId),
      });
    } catch (error) {
      console.error("Ошибка при отклонении заявки", error);
    }
  },
};
